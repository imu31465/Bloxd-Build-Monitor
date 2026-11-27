# Changed — Bundle Modifications Report (Part 048 / 126)

- **Updated at**: `2026-11-28T08:15 JST`
- **Part**: `48 / 126` (**337** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 047](part-047.md) · [Part 049 →](part-049.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/264.js` (4udp6d.2845de07 → fl4vv.bd3c59ce · continued)

- **File**: `bundles/bloxd.io/chunks/js/264.js` (153 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6)

#### 26. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L96-L97` → after: `L247-L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L247-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L247-L248) · [Before (L96-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L96-L97)

```diff
-       maximizeInPlaceFromFloats(RR, JR, GR) {
-         return this.r = Math.max(RR, this.r), this.g = Math.max(JR, this.g), this.b = Math.max(GR, this.b), this
+       multiplyInPlace(rr) {
+         return this.x *= rr.x, this.y *= rr.y, this
```

#### 27. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L99-L100` → after: `L250-L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L250-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L250-L251) · [Before (L99-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L99-L100)

```diff
-       floorToRef(RR) {
-         throw new ReferenceError("Can not floor a color")
+       multiply(rr) {
+         return new xr(this.x * rr.x, this.y * rr.y)
```

#### 28. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L102-L103` → after: `L253-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L253-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L253-L254) · [Before (L102-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L102-L103)

```diff
-       floor() {
-         throw new ReferenceError("Can not floor a color")
+       multiplyToRef(rr, Sr) {
+         return Sr.x = this.x * rr.x, Sr.y = this.y * rr.y, Sr
```

#### 29. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L105-L106` → after: `L256-L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L256-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L256-L257) · [Before (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L105-L106)

```diff
-       fractToRef(RR) {
-         throw new ReferenceError("Can not fract a color")
+       multiplyByFloats(rr, Sr) {
+         return new xr(this.x * rr, this.y * Sr)
```

#### 30. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L108-L109` → after: `L259-L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L259-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L259-L260) · [Before (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L108-L109)

```diff
-       fract() {
-         throw new ReferenceError("Can not fract a color")
+       divide(rr) {
+         return new xr(this.x / rr.x, this.y / rr.y)
```

#### 31. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L111-L112` → after: `L262-L263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L262-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L262-L263) · [Before (L111-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L111-L112)

```diff
-       equals(RR) {
-         return RR && this.r === RR.r && this.g === RR.g && this.b === RR.b
+       divideToRef(rr, Sr) {
+         return Sr.x = this.x / rr.x, Sr.y = this.y / rr.y, Sr
```

#### 32. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L114-L115` → after: `L265-L266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L265-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L265-L266) · [Before (L114-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L114-L115)

```diff
-       equalsFloats(RR, JR, GR) {
-         return this.JiR(RR, JR, GR)
+       divideInPlace(rr) {
+         return this.x = this.x / rr.x, this.y = this.y / rr.y, this
```

#### 33. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L117-L118` → after: `L268-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L268-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L268-L269) · [Before (L117-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L117-L118)

```diff
-       JiR(RR, JR, GR) {
-         return this.r === RR && this.g === JR && this.b === GR
+       minimizeInPlace(rr) {
+         return this.minimizeInPlaceFromFloats(rr.x, rr.y)
```

#### 34. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L120-L122` → after: `L271-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L271-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L271-L284) · [Before (L120-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L120-L122)

```diff
-       equalsWithEpsilon(RR) {
-         let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tR.c;
-         return (0, uR.WithinEpsilon)(this.r, RR.r, JR) && (0, uR.WithinEpsilon)(this.g, RR.g, JR) && (0, uR.WithinEpsilon)(this.b, RR.b, JR)
+       maximizeInPlace(rr) {
+         return this.maximizeInPlaceFromFloats(rr.x, rr.y)
+       }
+       minimizeInPlaceFromFloats(rr, Sr) {
+         return this.x = Math.min(rr, this.x), this.y = Math.min(Sr, this.y), this
+       }
+       maximizeInPlaceFromFloats(rr, Sr) {
+         return this.x = Math.max(rr, this.x), this.y = Math.max(Sr, this.y), this
+       }
+       subtractFromFloats(rr, Sr) {
+         return new xr(this.x - rr, this.y - Sr)
+       }
+       subtractFromFloatsToRef(rr, Sr, Qr) {
+         return Qr.x = this.x - rr, Qr.y = this.y - Sr, Qr
```

#### 35. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L125` → after: `L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L287) · [Before (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L125)

```diff
-         throw new ReferenceError("Can not negate a color")
+         return new xr(-this.x, -this.y)
```

#### 36. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L128` → after: `L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L290) · [Before (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L128)

```diff
-         throw new ReferenceError("Can not negate a color")
+         return this.x *= -1, this.y *= -1, this
```

#### 37. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L131-L134` → after: `L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L293) · [Before (L131-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L131-L134)

```diff
-         throw new ReferenceError("Can not negate a color")
-       }
-       scale(RR) {
-         return new KR(this.r * RR, this.g * RR, this.b * RR)
+         return rr.x = -this.x, rr.y = -this.y, rr
```

#### 38. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L137` → after: `L296-L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L296-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L296-L299) · [Before (L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L137)

```diff
-         return this.r *= RR, this.g *= RR, this.b *= RR, this
+         return this.x *= rr, this.y *= rr, this
+       }
+       scale(rr) {
+         return new xr(this.x * rr, this.y * rr)
```

#### 39. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L140` → after: `L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L302) · [Before (L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L140)

```diff
-         return JR.r = this.r * RR, JR.g = this.g * RR, JR.b = this.b * RR, JR
+         return Sr.x = this.x * rr, Sr.y = this.y * rr, Sr
```

#### 40. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L143-L149` → after: `L305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L305) · [Before (L143-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L143-L149)

```diff
-         return JR.r += this.r * RR, JR.g += this.g * RR, JR.b += this.b * RR, JR
-       }
-       clampToRef() {
-         let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
-           GR = arguments.length > 2 ? arguments[2] : void 0;
-         return GR.r = (0, uR.Clamp)(this.r, RR, JR), GR.g = (0, uR.Clamp)(this.g, RR, JR), GR.b = (0, uR.Clamp)(this.b, RR, JR), GR
+         return Sr.x += this.x * rr, Sr.y += this.y * rr, Sr
```

#### 41. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L151-L152` → after: `L307-L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L307-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L307-L308) · [Before (L151-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L151-L152)

```diff
-       add(RR) {
-         return new KR(this.r + RR.r, this.g + RR.g, this.b + RR.b)
+       equals(rr) {
+         return rr && this.x === rr.x && this.y === rr.y
```

#### 42. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L154-L155` → after: `L310-L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L310-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L310-L312) · [Before (L154-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L154-L155)

```diff
-       addInPlace(RR) {
-         return this.r += RR.r, this.g += RR.g, this.b += RR.b, this
+       equalsWithEpsilon(rr) {
+         let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Zr.e;
+         return rr && (0, Ir.WithinEpsilon)(this.x, rr.x, Sr) && (0, Ir.WithinEpsilon)(this.y, rr.y, Sr)
```

#### 43. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L157-L158` → after: `L314-L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L314-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L314-L315) · [Before (L157-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L157-L158)

```diff
-       addInPlaceFromFloats(RR, JR, GR) {
-         return this.r += RR, this.g += JR, this.b += GR, this
+       ffr(rr, Sr) {
+         return this.x === rr && this.y === Sr
```

#### 44. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L160-L161` → after: `L317-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L317-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L317-L318) · [Before (L160-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L160-L161)

```diff
-       addToRef(RR, JR) {
-         return JR.r = this.r + RR.r, JR.g = this.g + RR.g, JR.b = this.b + RR.b, JR
+       floor() {
+         return new xr(Math.floor(this.x), Math.floor(this.y))
```

#### 45. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L163-L164` → after: `L320-L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L320-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L320-L321) · [Before (L163-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L163-L164)

```diff
-       subtract(RR) {
-         return new KR(this.r - RR.r, this.g - RR.g, this.b - RR.b)
+       floorToRef(rr) {
+         return rr.x = Math.floor(this.x), rr.y = Math.floor(this.y), rr
```

#### 46. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L166-L167` → after: `L323-L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L323-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L323-L324) · [Before (L166-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L166-L167)

```diff
-       subtractToRef(RR, JR) {
-         return JR.r = this.r - RR.r, JR.g = this.g - RR.g, JR.b = this.b - RR.b, JR
+       fract() {
+         return new xr(this.x - Math.floor(this.x), this.y - Math.floor(this.y))
```

#### 47. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L169-L170` → after: `L326-L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L326-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L326-L327) · [Before (L169-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L169-L170)

```diff
-       VuR(RR) {
-         return this.r -= RR.r, this.g -= RR.g, this.b -= RR.b, this
+       fractToRef(rr) {
+         return rr.x = this.x - Math.floor(this.x), rr.y = this.y - Math.floor(this.y), rr
```

#### 48. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L172-L173` → after: `L329-L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L329-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L329-L330) · [Before (L172-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L172-L173)

```diff
-       subtractFromFloats(RR, JR, GR) {
-         return new KR(this.r - RR, this.g - JR, this.b - GR)
+       rotate(rr) {
+         return this.rotateToRef(rr, new xr)
```

#### 49. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L175-L176` → after: `L332-L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L332-L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L332-L335) · [Before (L175-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L175-L176)

```diff
-       subtractFromFloatsToRef(RR, JR, GR, yR) {
-         return yR.r = this.r - RR, yR.g = this.g - JR, yR.b = this.b - GR, yR
+       rotateToRef(rr, Sr) {
+         const Qr = Math.cos(rr),
+           Zr = Math.sin(rr);
+         return Sr.x = Qr * this.x - Zr * this.y, Sr.y = Zr * this.x + Qr * this.y, Sr
```

#### 50. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L178-L179` → after: `L337-L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L337-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L337-L338) · [Before (L178-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L178-L179)

```diff
-       clone() {
-         return new KR(this.r, this.g, this.b)
+       length() {
+         return Math.sqrt(this.x * this.x + this.y * this.y)
```

#### 51. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L181-L182` → after: `L340-L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L340-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L340-L341) · [Before (L181-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L181-L182)

```diff
-       vN(RR) {
-         return this.r = RR.r, this.g = RR.g, this.b = RR.b, this
+       lengthSquared() {
+         return this.x * this.x + this.y * this.y
```

#### 52. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L184-L185` → after: `L343-L344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L343-L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L343-L344) · [Before (L184-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L184-L185)

```diff
-       VJR(RR, JR, GR) {
-         return this.r = RR, this.g = JR, this.b = GR, this
+       normalize() {
+         return this.normalizeFromLength(this.length())
```

#### 53. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L187-L215` → after: `L346-L347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L346-L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L346-L347) · [Before (L187-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L187-L215)

```diff
-       set(RR, JR, GR) {
-         return this.VJR(RR, JR, GR)
-       }
-       NRR(RR) {
-         return this.r = this.g = this.b = RR, this
-       }
-       toHexString() {
-         const RR = Math.round(255 * this.r),
-           JR = Math.round(255 * this.g),
-           GR = Math.round(255 * this.b);
-         return "#" + (0, uR.ToHex)(RR) + (0, uR.ToHex)(JR) + (0, uR.ToHex)(GR)
-       }
-       fromHexString(RR) {
-         return "#" !== RR.substring(0, 1) || 7 !== RR.length || (this.r = parseInt(RR.substring(1, 3), 16) / 255, this.g = parseInt(RR.substring(3, 5), 16) / 255, this.b = parseInt(RR.substring(5, 7), 16) / 255), this
-       }
-       toHSV() {
- ... (13 more removed lines; see GitHub link above)
+       normalizeFromLength(rr) {
+         return 0 === rr || 1 === rr ? this : this.scaleInPlace(1 / rr)
```

#### 54. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L217-L218` → after: `L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L349) · [Before (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L217-L218)

```diff
-       toLinearSpace() {
-         let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+       normalizeToNew() {
```

#### 55. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L220` → after: `L351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L351) · [Before (L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L220)

```diff
-         return this.toLinearSpaceToRef(JR, RR), JR
+         return this.normalizeToRef(rr), rr
```

#### 56. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L222-L223` → after: `L353-L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L353-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L353-L355) · [Before (L222-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L222-L223)

```diff
-       toLinearSpaceToRef(RR) {
-         return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (RR.r = iR(this.r), RR.g = iR(this.g), RR.b = iR(this.b)) : (RR.r = qR(this.r), RR.g = qR(this.g), RR.b = qR(this.b)), this
+       normalizeToRef(rr) {
+         const Sr = this.length();
+         return 0 === Sr || 1 === Sr ? (rr.x = this.x, rr.y = this.y, rr) : this.scaleToRef(1 / Sr, rr)
```

#### 57. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L225-L228` → after: `L357-L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L357-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L357-L358) · [Before (L225-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L225-L228)

```diff
-       toGammaSpace() {
-         let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         const JR = new KR;
-         return this.toGammaSpaceToRef(JR, RR), JR
+       clone() {
+         return new xr(this.x, this.y)
```

#### 58. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L230-L231` → after: `L360-L361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L360-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L360-L361) · [Before (L230-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L230-L231)

```diff
-       toGammaSpaceToRef(RR) {
-         return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (RR.r = VR(this.r), RR.g = VR(this.g), RR.b = VR(this.b)) : (RR.r = fR(this.r), RR.g = fR(this.g), RR.b = fR(this.b)), this
+       dot(rr) {
+         return this.x * rr.x + this.y * rr.y
```

#### 59. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L233-L246` → after: `L363-L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L363-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L363-L377) · [Before (L233-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L233-L246)

```diff
-       static HSVtoRGBToRef(RR, JR, GR, yR) {
-         const tR = GR * JR,
-           uR = RR / 60,
-           ZR = tR * (1 - Math.abs(uR % 2 - 1));
-         let qR = 0,
-           iR = 0,
-           fR = 0;
-         uR >= 0 && uR <= 1 ? (qR = tR, iR = ZR) : uR >= 1 && uR <= 2 ? (qR = ZR, iR = tR) : uR >= 2 && uR <= 3 ? (iR = tR, fR = ZR) : uR >= 3 && uR <= 4 ? (iR = ZR, fR = tR) : uR >= 4 && uR <= 5 ? (qR = ZR, fR = tR) : uR >= 5 && uR <= 6 && (qR = tR, fR = ZR);
-         const VR = GR - tR;
-         return yR.r = qR + VR, yR.g = iR + VR, yR.b = fR + VR, yR
-       }
-       static FromHSV(RR, JR, GR) {
-         const yR = new KR(0, 0, 0);
-         return KR.HSVtoRGBToRef(RR, JR, GR, yR), yR
+       static Zero() {
+         return new xr(0, 0)
+       }
+       static One() {
+         return new xr(1, 1)
+       }
+       static Random() {
+         let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
+           Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         return new xr((0, Ir.RandomRange)(rr, Sr), (0, Ir.RandomRange)(rr, Sr))
+       }
+       static RandomToRef() {
+         let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
+           Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         return (arguments.length > 2 ? arguments[2] : void 0).Hrr((0, Ir.RandomRange)(rr, Sr), (0, Ir.RandomRange)(rr, Sr))
```

#### 60. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L248-L249` → after: `L379-L380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L379-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L379-L380) · [Before (L248-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L248-L249)

```diff
-       static FromHexString(RR) {
-         return new KR(0, 0, 0).fromHexString(RR)
+       static get ZeroReadOnly() {
+         return xr._ZeroReadOnly
```

#### 61. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L253` → after: `L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L384) · [Before (L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L253)

```diff
-         return new KR(RR[JR], RR[JR + 1], RR[JR + 2])
+         return new xr(rr[Sr], rr[Sr + 1])
```

#### 62. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L255-L258` → after: `L386-L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L386-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L386-L387) · [Before (L255-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L255-L258)

```diff
-       static FromArrayToRef(RR) {
-         let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-           GR = arguments.length > 2 ? arguments[2] : void 0;
-         GR.r = RR[JR], GR.g = RR[JR + 1], GR.b = RR[JR + 2]
+       static FromArrayToRef(rr, Sr, Qr) {
+         return Qr.x = rr[Sr], Qr.y = rr[Sr + 1], Qr
```

#### 63. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L260-L261` → after: `L389-L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L389-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L389-L390) · [Before (L260-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L260-L261)

```diff
-       static FromInts(RR, JR, GR) {
-         return new KR(RR / 255, JR / 255, GR / 255)
+       static FromFloatsToRef(rr, Sr, Qr) {
+         return Qr.Hrr(rr, Sr), Qr
```

#### 64. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L263-L265` → after: `L392-L397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L392-L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L392-L397) · [Before (L263-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L263-L265)

```diff
-       static Lerp(RR, JR, GR) {
-         const yR = new KR(0, 0, 0);
-         return KR.LerpToRef(RR, JR, GR, yR), yR
+       static CatmullRom(rr, Sr, Qr, Zr, Wr) {
+         const ar = Wr * Wr,
+           jr = Wr * ar,
+           Ir = .5 * (2 * Sr.x + (-rr.x + Qr.x) * Wr + (2 * rr.x - 5 * Sr.x + 4 * Qr.x - Zr.x) * ar + (-rr.x + 3 * Sr.x - 3 * Qr.x + Zr.x) * jr),
+           fr = .5 * (2 * Sr.y + (-rr.y + Qr.y) * Wr + (2 * rr.y - 5 * Sr.y + 4 * Qr.y - Zr.y) * ar + (-rr.y + 3 * Sr.y - 3 * Qr.y + Zr.y) * jr);
+         return new xr(Ir, fr)
```

#### 65. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L267-L268` → after: `L399-L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L399-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L399-L405) · [Before (L267-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L267-L268)

```diff
-       static LerpToRef(RR, JR, GR, yR) {
-         yR.r = RR.r + (JR.r - RR.r) * GR, yR.g = RR.g + (JR.g - RR.g) * GR, yR.b = RR.b + (JR.b - RR.b) * GR
+       static ClampToRef(rr, Sr, Qr, Zr) {
+         return Zr.x = (0, Ir.Clamp)(rr.x, Sr.x, Qr.x), Zr.y = (0, Ir.Clamp)(rr.y, Sr.y, Qr.y), Zr
+       }
+       static Clamp(rr, Sr, Qr) {
+         const Zr = (0, Ir.Clamp)(rr.x, Sr.x, Qr.x),
+           Wr = (0, Ir.Clamp)(rr.y, Sr.y, Qr.y);
+         return new xr(Zr, Wr)
```

#### 66. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L277-L280` → after: `L414-L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L414-L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L414-L416) · [Before (L277-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L277-L280)

```diff
-           wR = RR.r * qR + GR.r * iR + JR.r * fR + yR.r * VR,
-           rR = RR.g * qR + GR.g * iR + JR.g * fR + yR.g * VR,
-           eR = RR.b * qR + GR.b * iR + JR.b * fR + yR.b * VR;
-         return new KR(wR, rR, eR)
+           mr = rr.x * Ir + Qr.x * fr + Sr.x * Er + Zr.x * pr,
+           Nr = rr.y * Ir + Qr.y * fr + Sr.y * Er + Zr.y * pr;
+         return new xr(mr, Nr)
```

#### 67. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L283-L284` → after: `L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L419) · [Before (L283-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L283-L284)

```diff
-         const uR = KR.Black();
-         return this.Hermite1stDerivativeToRef(RR, JR, GR, yR, tR, uR), uR
+         return this.Hermite1stDerivativeToRef(rr, Sr, Qr, Zr, Wr, new xr)
```

#### 68. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L288` → after: `L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L423) · [Before (L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L288)

```diff
-         uR.r = 6 * (ZR - tR) * RR.r + (3 * ZR - 4 * tR + 1) * JR.r + 6 * (-ZR + tR) * GR.r + (3 * ZR - 2 * tR) * yR.r, uR.g = 6 * (ZR - tR) * RR.g + (3 * ZR - 4 * tR + 1) * JR.g + 6 * (-ZR + tR) * GR.g + (3 * ZR - 2 * tR) * yR.g, uR.b = 6 * (ZR - tR) * RR.b + (3 * ZR - 4 * tR + 1 … [truncated]
+         return ar.x = 6 * (jr - Wr) * rr.x + (3 * jr - 4 * Wr + 1) * Sr.x + 6 * (-jr + Wr) * Qr.x + (3 * jr - 2 * Wr) * Zr.x, ar.y = 6 * (jr - Wr) * rr.y + (3 * jr - 4 * Wr + 1) * Sr.y + 6 * (-jr + Wr) * Qr.y + (3 * jr - 2 * Wr) * Zr.y, ar
```

#### 69. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L290-L291` → after: `L425-L426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L425-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L425-L426) · [Before (L290-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L290-L291)

```diff
-       static Red() {
-         return new KR(1, 0, 0)
+       static Lerp(rr, Sr, Qr) {
+         return xr.LerpToRef(rr, Sr, Qr, new xr)
```

#### 70. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L293-L294` → after: `L428-L429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L428-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L428-L429) · [Before (L293-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L293-L294)

```diff
-       static Green() {
-         return new KR(0, 1, 0)
+       static LerpToRef(rr, Sr, Qr, Zr) {
+         return Zr.x = rr.x + (Sr.x - rr.x) * Qr, Zr.y = rr.y + (Sr.y - rr.y) * Qr, Zr
```

#### 71. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L296-L297` → after: `L431-L432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L431-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L431-L432) · [Before (L296-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L296-L297)

```diff
-       static Blue() {
-         return new KR(0, 0, 1)
+       static Dot(rr, Sr) {
+         return rr.x * Sr.x + rr.y * Sr.y
```

#### 72. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L299-L300` → after: `L434-L435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L434-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L434-L435) · [Before (L299-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L299-L300)

```diff
-       static Black() {
-         return new KR(0, 0, 0)
+       static Normalize(rr) {
+         return xr.NormalizeToRef(rr, new xr)
```

#### 73. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L302-L303` → after: `L437-L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L437-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L437-L438) · [Before (L302-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L302-L303)

```diff
-       static get BlackReadOnly() {
-         return KR._BlackReadOnly
+       static NormalizeToRef(rr, Sr) {
+         return rr.normalizeToRef(Sr), Sr
```

#### 74. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L305-L306` → after: `L440-L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L440-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L440-L443) · [Before (L305-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L305-L306)

```diff
-       static White() {
-         return new KR(1, 1, 1)
+       static Minimize(rr, Sr) {
+         const Qr = rr.x < Sr.x ? rr.x : Sr.x,
+           Zr = rr.y < Sr.y ? rr.y : Sr.y;
+         return new xr(Qr, Zr)
```

#### 75. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L308-L309` → after: `L445-L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L445-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L445-L448) · [Before (L308-L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L308-L309)

```diff
-       static Purple() {
-         return new KR(.5, 0, .5)
+       static Maximize(rr, Sr) {
+         const Qr = rr.x > Sr.x ? rr.x : Sr.x,
+           Zr = rr.y > Sr.y ? rr.y : Sr.y;
+         return new xr(Qr, Zr)
```

#### 76. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L311-L312` → after: `L450-L451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L450-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L450-L451) · [Before (L311-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L311-L312)

```diff
-       static Magenta() {
-         return new KR(1, 0, 1)
+       static Transform(rr, Sr) {
+         return xr.TransformToRef(rr, Sr, new xr)
```

#### 77. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L314-L315` → after: `L453-L457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L453-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L453-L457) · [Before (L314-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L314-L315)

```diff
-       static Yellow() {
-         return new KR(1, 1, 0)
+       static TransformToRef(rr, Sr, Qr) {
+         const Zr = Sr.m,
+           Wr = rr.x * Zr[0] + rr.y * Zr[4] + Zr[12],
+           ar = rr.x * Zr[1] + rr.y * Zr[5] + Zr[13];
+         return Qr.x = Wr, Qr.y = ar, Qr
```

#### 78. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L317-L318` → after: `L459-L464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L459-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L459-L464) · [Before (L317-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L317-L318)

```diff
-       static Gray() {
-         return new KR(.5, .5, .5)
+       static PointInTriangle(rr, Sr, Qr, Zr) {
+         const Wr = .5 * (-Qr.y * Zr.x + Sr.y * (-Qr.x + Zr.x) + Sr.x * (Qr.y - Zr.y) + Qr.x * Zr.y),
+           ar = Wr < 0 ? -1 : 1,
+           jr = (Sr.y * Zr.x - Sr.x * Zr.y + (Zr.y - Sr.y) * rr.x + (Sr.x - Zr.x) * rr.y) * ar,
+           Ir = (Sr.x * Qr.y - Sr.y * Qr.x + (Sr.y - Qr.y) * rr.x + (Qr.x - Sr.x) * rr.y) * ar;
+         return jr > 0 && Ir > 0 && jr + Ir < 2 * Wr * ar
```

#### 79. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L320-L321` → after: `L466-L467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L466-L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L466-L467) · [Before (L320-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L320-L321)

```diff
-       static Teal() {
-         return new KR(0, 1, 1)
+       static Distance(rr, Sr) {
+         return Math.sqrt(xr.DistanceSquared(rr, Sr))
```

#### 80. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L323-L324` → after: `L469-L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L469-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L469-L486) · [Before (L323-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L323-L324)

```diff
-       static Random() {
-         return new KR(Math.random(), Math.random(), Math.random())
+       static DistanceSquared(rr, Sr) {
+         const Qr = rr.x - Sr.x,
+           Zr = rr.y - Sr.y;
+         return Qr * Qr + Zr * Zr
+       }
+       static Center(rr, Sr) {
+         return xr.CenterToRef(rr, Sr, new xr)
+       }
+       static CenterToRef(rr, Sr, Qr) {
+         return Qr.Hrr((rr.x + Sr.x) / 2, (rr.y + Sr.y) / 2)
+       }
+       static DistanceOfPointFromSegment(rr, Sr, Qr) {
+         const Zr = xr.DistanceSquared(Sr, Qr);
+         if (0 === Zr) return xr.Distance(rr, Sr);
+         const Wr = Qr.subtract(Sr),
+           ar = Math.max(0, Math.min(1, xr.Dot(rr.subtract(Sr), Wr) / Zr)),
+ ... (2 more added lines; see GitHub link above)
```

#### 81. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L327` → after: `L489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L489) · [Before (L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L327)

```diff
-     KR._V8PerformanceHack = new KR(.5, .5, .5), KR._BlackReadOnly = KR.Black();
+     xr._V8PerformanceHack = new xr(.5, .5), xr._ZeroReadOnly = xr.Zero();
```

#### 82. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L332-L334` → after: `L512-L523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L512-L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L512-L523) · [Before (L332-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L332-L334)

```diff
-           GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
-           yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
-         this.r = RR, this.g = JR, this.b = GR, this.a = yR
+           Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         this._isDirty = !0, this._x = rr, this._y = Sr, this._z = Qr
+       }
+       toString() {
+         return `{X: ${this._x} Y: ${this._y} Z: ${this._z}}`
+       }
+       getClassName() {
+         return "kU"
+       }
+       getHashCode() {
+         let rr = pr(this._x);
+         return rr = 397 * rr ^ pr(this._y), rr = 397 * rr ^ pr(this._z), rr
```

#### 83. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L336-L337` → after: `L525-L526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L525-L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L525-L526) · [Before (L336-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L336-L337)

```diff
-       QtR() {
-         return [this.r, this.g, this.b, this.a]
+       OWr() {
+         return [this._x, this._y, this._z]
```

#### 84. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L341` → after: `L530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L530) · [Before (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L341)

```diff
-         return RR[JR] = this.r, RR[JR + 1] = this.g, RR[JR + 2] = this.b, RR[JR + 3] = this.a, this
+         return rr[Sr] = this._x, rr[Sr + 1] = this._y, rr[Sr + 2] = this._z, this
```

#### 85. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L345` → after: `L534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L534) · [Before (L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L345)

```diff
-         return this.r = RR[JR], this.g = RR[JR + 1], this.b = RR[JR + 2], this.a = RR[JR + 3], this
+         return mr.FromArrayToRef(rr, Sr, this), this
```

#### 86. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L347-L348` → after: `L536-L543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L536-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L536-L543) · [Before (L347-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L347-L348)

```diff
-       equals(RR) {
-         return RR && this.r === RR.r && this.g === RR.g && this.b === RR.b && this.a === RR.a
+       toQuaternion() {
+         return Ur.RotationYawPitchRoll(this._y, this._x, this._z)
+       }
+       addInPlace(rr) {
+         return this._x += rr._x, this._y += rr._y, this._z += rr._z, this._isDirty = !0, this
+       }
+       addInPlaceFromFloats(rr, Sr, Qr) {
+         return this._x += rr, this._y += Sr, this._z += Qr, this._isDirty = !0, this
```

#### 87. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L351` → after: `L546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L546) · [Before (L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L351)

```diff
-         return new wR(this.r + RR.r, this.g + RR.g, this.b + RR.b, this.a + RR.a)
+         return new mr(this._x + rr._x, this._y + rr._y, this._z + rr._z)
```

#### 88. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L354-L357` → after: `L549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L549) · [Before (L354-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L354-L357)

```diff
-         return JR.r = this.r + RR.r, JR.g = this.g + RR.g, JR.b = this.b + RR.b, JR.a = this.a + RR.a, JR
-       }
-       addInPlace(RR) {
-         return this.r += RR.r, this.g += RR.g, this.b += RR.b, this.a += RR.a, this
+         return Sr._x = this._x + rr._x, Sr._y = this._y + rr._y, Sr._z = this._z + rr._z, Sr._isDirty = !0, Sr
```

#### 89. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L359-L360` → after: `L551-L552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L551-L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L551-L552) · [Before (L359-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L359-L360)

```diff
-       addInPlaceFromFloats(RR, JR, GR, yR) {
-         return this.r += RR, this.g += JR, this.b += GR, this.a += yR, this
+       iWr(rr) {
+         return this._x -= rr._x, this._y -= rr._y, this._z -= rr._z, this._isDirty = !0, this
```

#### 90. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L363` → after: `L555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L555) · [Before (L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L363)

```diff
-         return new wR(this.r - RR.r, this.g - RR.g, this.b - RR.b, this.a - RR.a)
+         return new mr(this._x - rr._x, this._y - rr._y, this._z - rr._z)
```

#### 91. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L366` → after: `L558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L558) · [Before (L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L366)

```diff
-         return JR.r = this.r - RR.r, JR.g = this.g - RR.g, JR.b = this.b - RR.b, JR.a = this.a - RR.a, JR
+         return this.subtractFromFloatsToRef(rr._x, rr._y, rr._z, Sr)
```

#### 92. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L368-L369` → after: `L560-L561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L560-L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L560-L561) · [Before (L368-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L368-L369)

```diff
-       VuR(RR) {
-         return this.r -= RR.r, this.g -= RR.g, this.b -= RR.b, this.a -= RR.a, this
+       subtractFromFloats(rr, Sr, Qr) {
+         return new mr(this._x - rr, this._y - Sr, this._z - Qr)
```

#### 93. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L371-L372` → after: `L563-L564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L563-L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L563-L564) · [Before (L371-L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L371-L372)

```diff
-       subtractFromFloats(RR, JR, GR, yR) {
-         return new wR(this.r - RR, this.g - JR, this.b - GR, this.a - yR)
+       subtractFromFloatsToRef(rr, Sr, Qr, Zr) {
+         return Zr._x = this._x - rr, Zr._y = this._y - Sr, Zr._z = this._z - Qr, Zr._isDirty = !0, Zr
```

#### 94. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L374-L375` → after: `L566-L567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L566-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L566-L567) · [Before (L374-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L374-L375)

```diff
-       subtractFromFloatsToRef(RR, JR, GR, yR, tR) {
-         return tR.r = this.r - RR, tR.g = this.g - JR, tR.b = this.b - GR, tR.a = this.a - yR, tR
+       ph() {
+         return new mr(-this._x, -this._y, -this._z)
```

#### 95. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L377-L378` → after: `L569-L573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L569-L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L569-L573) · [Before (L377-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L377-L378)

```diff
-       scale(RR) {
-         return new wR(this.r * RR, this.g * RR, this.b * RR, this.a * RR)
+       negateInPlace() {
+         return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
+       }
+       negateToRef(rr) {
+         return rr._x = -1 * this._x, rr._y = -1 * this._y, rr._z = -1 * this._z, rr._isDirty = !0, rr
```

#### 96. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L381` → after: `L576-L579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L576-L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L576-L579) · [Before (L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L381)

```diff
-         return this.r *= RR, this.g *= RR, this.b *= RR, this.a *= RR, this
+         return this._x *= rr, this._y *= rr, this._z *= rr, this._isDirty = !0, this
+       }
+       scale(rr) {
+         return new mr(this._x * rr, this._y * rr, this._z * rr)
```

#### 97. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L384` → after: `L582-L611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L582-L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L582-L611) · [Before (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L384)

```diff
-         return JR.r = this.r * RR, JR.g = this.g * RR, JR.b = this.b * RR, JR.a = this.a * RR, JR
+         return Sr._x = this._x * rr, Sr._y = this._y * rr, Sr._z = this._z * rr, Sr._isDirty = !0, Sr
+       }
+       getNormalToRef(rr) {
+         const Sr = this.length();
+         let Qr = Math.acos(this._y / Sr);
+         const Zr = Math.atan2(this._z, this._x);
+         Qr > Math.PI / 2 ? Qr -= Math.PI / 2 : Qr += Math.PI / 2;
+         const Wr = Sr * Math.sin(Qr) * Math.cos(Zr),
+           ar = Sr * Math.cos(Qr),
+           jr = Sr * Math.sin(Qr) * Math.sin(Zr);
+         return rr.set(Wr, ar, jr), rr
+       }
+       applyRotationQuaternionToRef(rr, Sr) {
+         const Qr = this._x,
+           Zr = this._y,
+           Wr = this._z,
+ ... (14 more added lines; see GitHub link above)
```

#### 98. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L387` → after: `L614-L631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L614-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L614-L631) · [Before (L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L387)

```diff
-         return JR.r += this.r * RR, JR.g += this.g * RR, JR.b += this.b * RR, JR.a += this.a * RR, JR
+         return Sr._x += this._x * rr, Sr._y += this._y * rr, Sr._z += this._z * rr, Sr._isDirty = !0, Sr
+       }
+       projectOnPlane(rr, Sr) {
+         return this.projectOnPlaneToRef(rr, Sr, new mr)
+       }
+       projectOnPlaneToRef(rr, Sr, Qr) {
+         const Zr = rr.normal,
+           Wr = rr.d,
+           ar = hr.kU[0];
+         this.subtractToRef(Sr, ar), ar.normalize();
+         const jr = mr.Dot(ar, Zr);
+         if (Math.abs(jr) < 1e-10) Qr.Srr(1 / 0);
+         else {
+           const rr = -(mr.Dot(Sr, Zr) + Wr) / jr,
+             Ir = ar.scaleInPlace(rr);
+           Sr.addToRef(Ir, Qr)
+ ... (2 more added lines; see GitHub link above)
```

#### 99. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L389-L393` → after: `L633-L634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L633-L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L633-L634) · [Before (L389-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L389-L393)

```diff
-       clampToRef() {
-         let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
-           GR = arguments.length > 2 ? arguments[2] : void 0;
-         return GR.r = (0, uR.Clamp)(this.r, RR, JR), GR.g = (0, uR.Clamp)(this.g, RR, JR), GR.b = (0, uR.Clamp)(this.b, RR, JR), GR.a = (0, uR.Clamp)(this.a, RR, JR), GR
+       equals(rr) {
+         return rr && this._x === rr._x && this._y === rr._y && this._z === rr._z
```

#### 100. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L395-L396` → after: `L636-L638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L636-L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L636-L638) · [Before (L395-L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L395-L396)

```diff
-       multiply(RR) {
-         return new wR(this.r * RR.r, this.g * RR.g, this.b * RR.b, this.a * RR.a)
+       equalsWithEpsilon(rr) {
+         let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Zr.e;
+         return rr && (0, Ir.WithinEpsilon)(this._x, rr._x, Sr) && (0, Ir.WithinEpsilon)(this._y, rr._y, Sr) && (0, Ir.WithinEpsilon)(this._z, rr._z, Sr)
```

#### 101. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L398-L399` → after: `L640-L641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L640-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L640-L641) · [Before (L398-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L398-L399)

```diff
-       multiplyToRef(RR, JR) {
-         return JR.r = this.r * RR.r, JR.g = this.g * RR.g, JR.b = this.b * RR.b, JR.a = this.a * RR.a, JR
+       ffr(rr, Sr, Qr) {
+         return this._x === rr && this._y === Sr && this._z === Qr
```

#### 102. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L402` → after: `L644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L644) · [Before (L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L402)

```diff
-         return this.r *= RR.r, this.g *= RR.g, this.b *= RR.b, this.a *= RR.a, this
+         return this._x *= rr._x, this._y *= rr._y, this._z *= rr._z, this._isDirty = !0, this
```

#### 103. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L404-L405` → after: `L646-L653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L646-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L646-L653) · [Before (L404-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L404-L405)

```diff
-       multiplyByFloats(RR, JR, GR, yR) {
-         return new wR(this.r * RR, this.g * JR, this.b * GR, this.a * yR)
+       multiply(rr) {
+         return this.multiplyByFloats(rr._x, rr._y, rr._z)
+       }
+       multiplyToRef(rr, Sr) {
+         return Sr._x = this._x * rr._x, Sr._y = this._y * rr._y, Sr._z = this._z * rr._z, Sr._isDirty = !0, Sr
+       }
+       multiplyByFloats(rr, Sr, Qr) {
+         return new mr(this._x * rr, this._y * Sr, this._z * Qr)
```

#### 104. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L408` → after: `L656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L656) · [Before (L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L408)

```diff
-         throw new ReferenceError("Can not divide a color")
+         return new mr(this._x / rr._x, this._y / rr._y, this._z / rr._z)
```

#### 105. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L411` → after: `L659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L659) · [Before (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L411)

```diff
-         throw new ReferenceError("Can not divide a color")
+         return Sr._x = this._x / rr._x, Sr._y = this._y / rr._y, Sr._z = this._z / rr._z, Sr._isDirty = !0, Sr
```

#### 106. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L414` → after: `L662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L662) · [Before (L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L414)

```diff
-         throw new ReferenceError("Can not divide a color")
+         return this._x = this._x / rr._x, this._y = this._y / rr._y, this._z = this._z / rr._z, this._isDirty = !0, this
```

#### 107. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L417` → after: `L665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L665) · [Before (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L417)

```diff
-         return this.r = Math.min(this.r, RR.r), this.g = Math.min(this.g, RR.g), this.b = Math.min(this.b, RR.b), this.a = Math.min(this.a, RR.a), this
+         return this.minimizeInPlaceFromFloats(rr._x, rr._y, rr._z)
```

#### 108. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L420` → after: `L668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L668) · [Before (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L420)

```diff
-         return this.r = Math.max(this.r, RR.r), this.g = Math.max(this.g, RR.g), this.b = Math.max(this.b, RR.b), this.a = Math.max(this.a, RR.a), this
+         return this.maximizeInPlaceFromFloats(rr._x, rr._y, rr._z)
```

#### 109. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L422-L423` → after: `L670-L671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L670-L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L670-L671) · [Before (L422-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L422-L423)

```diff
-       minimizeInPlaceFromFloats(RR, JR, GR, yR) {
-         return this.r = Math.min(RR, this.r), this.g = Math.min(JR, this.g), this.b = Math.min(GR, this.b), this.a = Math.min(yR, this.a), this
+       minimizeInPlaceFromFloats(rr, Sr, Qr) {
+         return rr < this._x && (this.x = rr), Sr < this._y && (this.y = Sr), Qr < this._z && (this.z = Qr), this
```

#### 110. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L425-L426` → after: `L673-L686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L673-L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L673-L686) · [Before (L425-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L425-L426)

```diff
-       maximizeInPlaceFromFloats(RR, JR, GR, yR) {
-         return this.r = Math.max(RR, this.r), this.g = Math.max(JR, this.g), this.b = Math.max(GR, this.b), this.a = Math.max(yR, this.a), this
+       maximizeInPlaceFromFloats(rr, Sr, Qr) {
+         return rr > this._x && (this.x = rr), Sr > this._y && (this.y = Sr), Qr > this._z && (this.z = Qr), this
+       }
+       isNonUniformWithinEpsilon(rr) {
+         const Sr = Math.abs(this._x),
+           Qr = Math.abs(this._y);
+         if (!(0, Ir.WithinEpsilon)(Sr, Qr, rr)) return !0;
+         const Zr = Math.abs(this._z);
+         return !(0, Ir.WithinEpsilon)(Sr, Zr, rr) || !(0, Ir.WithinEpsilon)(Qr, Zr, rr)
+       }
+       get isNonUniform() {
+         const rr = Math.abs(this._x);
+         if (rr !== Math.abs(this._y)) return !0;
+         return rr !== Math.abs(this._z)
```

#### 111. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L429` → after: `L689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L689) · [Before (L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L429)

```diff
-         throw new ReferenceError("Can not floor a color")
+         return rr._x = Math.floor(this._x), rr._y = Math.floor(this._y), rr._z = Math.floor(this._z), rr._isDirty = !0, rr
```

#### 112. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L432` → after: `L692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L692) · [Before (L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L432)

```diff
-         throw new ReferenceError("Can not floor a color")
+         return new mr(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z))
```

#### 113. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L435` → after: `L695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L695) · [Before (L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L435)

```diff
-         throw new ReferenceError("Can not fract a color")
+         return rr._x = this._x - Math.floor(this._x), rr._y = this._y - Math.floor(this._y), rr._z = this._z - Math.floor(this._z), rr._isDirty = !0, rr
```

#### 114. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L438` → after: `L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L698) · [Before (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L438)

```diff
-         throw new ReferenceError("Can not fract a color")
+         return new mr(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z))
```

#### 115. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L440-L441` → after: `L700-L701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L700-L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L700-L701) · [Before (L440-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L440-L441)

```diff
-       Re() {
-         throw new ReferenceError("Can not negate a color")
+       length() {
+         return Math.sqrt(this.lengthSquared())
```

#### 116. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L443-L444` → after: `L703-L704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L703-L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L703-L704) · [Before (L443-L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L443-L444)

```diff
-       negateInPlace() {
-         throw new ReferenceError("Can not negate a color")
+       lengthSquared() {
+         return this._x * this._x + this._y * this._y + this._z * this._z
```

#### 117. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L446-L447` → after: `L706-L707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L706-L707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L706-L707) · [Before (L446-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L446-L447)

```diff
-       negateToRef(RR) {
-         throw new ReferenceError("Can not negate a color")
+       get hasAZeroComponent() {
+         return this._x * this._y * this._z === 0
```

#### 118. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L449-L451` → after: `L709-L710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L709-L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L709-L710) · [Before (L449-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L449-L451)

```diff
-       equalsWithEpsilon(RR) {
-         let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tR.c;
-         return (0, uR.WithinEpsilon)(this.r, RR.r, JR) && (0, uR.WithinEpsilon)(this.g, RR.g, JR) && (0, uR.WithinEpsilon)(this.b, RR.b, JR) && (0, uR.WithinEpsilon)(this.a, RR.a, JR)
+       normalize() {
+         return this.normalizeFromLength(this.length())
```

#### 119. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L453-L454` → after: `L712-L715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L712-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L712-L715) · [Before (L453-L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L453-L454)

```diff
-       JiR(RR, JR, GR, yR) {
-         return this.r === RR && this.g === JR && this.b === GR && this.a === yR
+       reorderInPlace(rr) {
+         if ("xyz" === (rr = rr.toLowerCase())) return this;
+         const Sr = hr.kU[0].iH(this);
+         return this.x = Sr[rr[0]], this.y = Sr[rr[1]], this.z = Sr[rr[2]], this
```

#### 120. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L456-L457` → after: `L717-L718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L717-L718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L717-L718) · [Before (L456-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L456-L457)

```diff
-       toString() {
-         return "{R: " + this.r + " G:" + this.g + " B:" + this.b + " A:" + this.a + "}"
+       rotateByQuaternionToRef(rr, Sr) {
+         return rr.toRotationMatrix(hr.Matrix[0]), mr.TransformCoordinatesToRef(this, hr.Matrix[0], Sr), Sr
```

#### 121. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L459-L460` → after: `L720-L721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L720-L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L720-L721) · [Before (L459-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L459-L460)

```diff
-       getClassName() {
-         return "Color4"
+       rotateByQuaternionAroundPointToRef(rr, Sr, Qr) {
+         return this.subtractToRef(Sr, hr.kU[0]), hr.kU[0].rotateByQuaternionToRef(rr, hr.kU[0]), Sr.addToRef(hr.kU[0], Qr), Qr
```

#### 122. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L462-L464` → after: `L723-L734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L723-L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L723-L734) · [Before (L462-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L462-L464)

```diff
-       getHashCode() {
-         let RR = 255 * this.r | 0;
-         return RR = 397 * RR ^ 255 * this.g, RR = 397 * RR ^ 255 * this.b, RR = 397 * RR ^ 255 * this.a, RR
+       cross(rr) {
+         return mr.CrossToRef(this, rr, new mr)
+       }
+       normalizeFromLength(rr) {
+         return 0 === rr || 1 === rr ? this : this.scaleInPlace(1 / rr)
+       }
+       normalizeToNew() {
+         return this.normalizeToRef(new mr)
+       }
+       normalizeToRef(rr) {
+         const Sr = this.length();
+         return 0 === Sr || 1 === Sr ? (rr._x = this._x, rr._y = this._y, rr._z = this._z, rr._isDirty = !0, rr) : this.scaleToRef(1 / Sr, rr)
```

#### 123. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L467` → after: `L737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L737) · [Before (L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L467)

```diff
-         return (new wR).vN(this)
+         return new mr(this._x, this._y, this._z)
```

#### 124. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L470` → after: `L740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L740) · [Before (L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L470)

```diff
-         return this.r = RR.r, this.g = RR.g, this.b = RR.b, this.a = RR.a, this
+         return this.Hrr(rr._x, rr._y, rr._z)
```

#### 125. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L472-L473` → after: `L742-L743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L742-L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L742-L743) · [Before (L472-L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L472-L473)

```diff
-       VJR(RR, JR, GR, yR) {
-         return this.r = RR, this.g = JR, this.b = GR, this.a = yR, this
+       Hrr(rr, Sr, Qr) {
+         return this._x = rr, this._y = Sr, this._z = Qr, this._isDirty = !0, this
```

#### 126. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L475-L476` → after: `L745-L808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L745-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L745-L808) · [Before (L475-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L475-L476)

```diff
-       set(RR, JR, GR, yR) {
-         return this.VJR(RR, JR, GR, yR)
+       set(rr, Sr, Qr) {
+         return this.Hrr(rr, Sr, Qr)
+       }
+       Srr(rr) {
+         return this._x = this._y = this._z = rr, this._isDirty = !0, this
+       }
+       static GetClipFactor(rr, Sr, Qr, Zr) {
+         const Wr = mr.Dot(rr, Qr);
+         return (Wr - Zr) / (Wr - mr.Dot(Sr, Qr))
+       }
+       static GetAngleBetweenVectors(rr, Sr, Qr) {
+         const Zr = rr.normalizeToRef(hr.kU[1]),
+           Wr = Sr.normalizeToRef(hr.kU[2]);
+         let ar = mr.Dot(Zr, Wr);
+         ar = (0, Ir.Clamp)(ar, -1, 1);
+         const jr = Math.acos(ar),
+ ... (48 more added lines; see GitHub link above)
```

#### 127. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L478-L479` → after: `L810-L811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L810-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L810-L811) · [Before (L478-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L478-L479)

```diff
-       NRR(RR) {
-         return this.r = this.g = this.b = this.a = RR, this
+       static FromFloatArray(rr, Sr) {
+         return mr.FromArray(rr, Sr)
```

#### 128. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L481-L488` → after: `L813-L814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L813-L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L813-L814) · [Before (L481-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L481-L488)

```diff
-       toHexString() {
-         let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         const JR = Math.round(255 * this.r),
-           GR = Math.round(255 * this.g),
-           yR = Math.round(255 * this.b);
-         if (RR) return "#" + (0, uR.ToHex)(JR) + (0, uR.ToHex)(GR) + (0, uR.ToHex)(yR);
-         const tR = Math.round(255 * this.a);
-         return "#" + (0, uR.ToHex)(JR) + (0, uR.ToHex)(GR) + (0, uR.ToHex)(yR) + (0, uR.ToHex)(tR)
+       static FromArrayToRef(rr, Sr, Qr) {
+         return Qr._x = rr[Sr], Qr._y = rr[Sr + 1], Qr._z = rr[Sr + 2], Qr._isDirty = !0, Qr
```

#### 129. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L490-L491` → after: `L816-L817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L816-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L816-L817) · [Before (L490-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L490-L491)

```diff
-       fromHexString(RR) {
-         return "#" !== RR.substring(0, 1) || 9 !== RR.length && 7 !== RR.length || (this.r = parseInt(RR.substring(1, 3), 16) / 255, this.g = parseInt(RR.substring(3, 5), 16) / 255, this.b = parseInt(RR.substring(5, 7), 16) / 255, 9 === RR.length && (this.a = parseInt(RR.substrin … [truncated]
+       static FromFloatArrayToRef(rr, Sr, Qr) {
+         return mr.FromArrayToRef(rr, Sr, Qr)
```

#### 130. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L493-L496` → after: `L819-L820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L819-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L819-L820) · [Before (L493-L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L493-L496)

```diff
-       toLinearSpace() {
-         let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         const JR = new wR;
-         return this.toLinearSpaceToRef(JR, RR), JR
+       static FromFloatsToRef(rr, Sr, Qr, Zr) {
+         return Zr.Hrr(rr, Sr, Qr), Zr
```

#### 131. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L498-L499` → after: `L822-L823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L822-L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L822-L823) · [Before (L498-L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L498-L499)

```diff
-       toLinearSpaceToRef(RR) {
-         return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (RR.r = iR(this.r), RR.g = iR(this.g), RR.b = iR(this.b)) : (RR.r = qR(this.r), RR.g = qR(this.g), RR.b = qR(this.b)), RR.a = this.a, this
+       static Zero() {
+         return new mr(0, 0, 0)
```

#### 132. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L501-L504` → after: `L825-L826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L825-L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L825-L826) · [Before (L501-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L501-L504)

```diff
-       toGammaSpace() {
-         let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         const JR = new wR;
-         return this.toGammaSpaceToRef(JR, RR), JR
+       static One() {
+         return new mr(1, 1, 1)
```

#### 133. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L506-L507` → after: `L828-L829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L828-L829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L828-L829) · [Before (L506-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L506-L507)

```diff
-       toGammaSpaceToRef(RR) {
-         return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (RR.r = VR(this.r), RR.g = VR(this.g), RR.b = VR(this.b)) : (RR.r = fR(this.r), RR.g = fR(this.g), RR.b = fR(this.b)), RR.a = this.a, this
+       static Up() {
+         return new mr(0, 1, 0)
```

#### 134. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L509-L510` → after: `L831-L832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L831-L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L831-L832) · [Before (L509-L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L509-L510)

```diff
-       static FromHexString(RR) {
-         return "#" !== RR.substring(0, 1) || 9 !== RR.length && 7 !== RR.length ? new wR(0, 0, 0, 0) : new wR(0, 0, 0, 1).fromHexString(RR)
+       static get UpReadOnly() {
+         return mr._UpReadOnly
```

#### 135. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L512-L513` → after: `L834-L835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L834-L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L834-L835) · [Before (L512-L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L512-L513)

```diff
-       static Lerp(RR, JR, GR) {
-         return wR.LerpToRef(RR, JR, GR, new wR)
+       static get DownReadOnly() {
+         return mr._DownReadOnly
```

#### 136. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L515-L516` → after: `L837-L933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L837-L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L837-L933) · [Before (L515-L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L515-L516)

```diff
-       static LerpToRef(RR, JR, GR, yR) {
-         return yR.r = RR.r + (JR.r - RR.r) * GR, yR.g = RR.g + (JR.g - RR.g) * GR, yR.b = RR.b + (JR.b - RR.b) * GR, yR.a = RR.a + (JR.a - RR.a) * GR, yR
+       static get RightReadOnly() {
+         return mr._RightReadOnly
+       }
+       static get LeftReadOnly() {
+         return mr._LeftReadOnly
+       }
+       static get LeftHandedForwardReadOnly() {
+         return mr._LeftHandedForwardReadOnly
+       }
+       static get RightHandedForwardReadOnly() {
+         return mr._RightHandedForwardReadOnly
+       }
+       static get LeftHandedBackwardReadOnly() {
+         return mr._LeftHandedBackwardReadOnly
+       }
+       static get RightHandedBackwardReadOnly() {
+ ... (81 more added lines; see GitHub link above)
```

#### 137. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L525-L529` → after: `L942-L945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L942-L945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L942-L945) · [Before (L525-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L525-L529)

```diff
-           KR = RR.r * qR + GR.r * iR + JR.r * fR + yR.r * VR,
-           rR = RR.g * qR + GR.g * iR + JR.g * fR + yR.g * VR,
-           eR = RR.b * qR + GR.b * iR + JR.b * fR + yR.b * VR,
-           aR = RR.a * qR + GR.a * iR + JR.a * fR + yR.a * VR;
-         return new wR(KR, rR, eR, aR)
+           xr = rr._x * Ir + Qr._x * fr + Sr._x * Er + Zr._x * pr,
+           Nr = rr._y * Ir + Qr._y * fr + Sr._y * Er + Zr._y * pr,
+           Ur = rr._z * Ir + Qr._z * fr + Sr._z * Er + Zr._z * pr;
+         return new mr(xr, Nr, Ur)
```

#### 138. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L537` → after: `L953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L953) · [Before (L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L537)

```diff
-         uR.r = 6 * (ZR - tR) * RR.r + (3 * ZR - 4 * tR + 1) * JR.r + 6 * (-ZR + tR) * GR.r + (3 * ZR - 2 * tR) * yR.r, uR.g = 6 * (ZR - tR) * RR.g + (3 * ZR - 4 * tR + 1) * JR.g + 6 * (-ZR + tR) * GR.g + (3 * ZR - 2 * tR) * yR.g, uR.b = 6 * (ZR - tR) * RR.b + (3 * ZR - 4 * tR + 1 … [truncated]
+         return ar._x = 6 * (jr - Wr) * rr._x + (3 * jr - 4 * Wr + 1) * Sr._x + 6 * (-jr + Wr) * Qr._x + (3 * jr - 2 * Wr) * Zr._x, ar._y = 6 * (jr - Wr) * rr._y + (3 * jr - 4 * Wr + 1) * Sr._y + 6 * (-jr + Wr) * Qr._y + (3 * jr - 2 * Wr) * Zr._y, ar._z = 6 * (jr - Wr) * rr._z + ( … [truncated]
```

#### 139. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L539-L541` → after: `L955-L957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L955-L957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L955-L957) · [Before (L539-L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L539-L541)

```diff
-       static FromColor3(RR) {
-         let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-         return new wR(RR.r, RR.g, RR.b, JR)
+       static Lerp(rr, Sr, Qr) {
+         const Zr = new mr(0, 0, 0);
+         return mr.LerpToRef(rr, Sr, Qr, Zr), Zr
```

#### 140. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L543-L545` → after: `L959-L960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L959-L960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L959-L960) · [Before (L543-L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L543-L545)

```diff
-       static FromArray(RR) {
-         let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         return new wR(RR[JR], RR[JR + 1], RR[JR + 2], RR[JR + 3])
+       static LerpToRef(rr, Sr, Qr, Zr) {
+         return Zr._x = rr._x + (Sr._x - rr._x) * Qr, Zr._y = rr._y + (Sr._y - rr._y) * Qr, Zr._z = rr._z + (Sr._z - rr._z) * Qr, Zr._isDirty = !0, Zr
```

#### 141. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L547-L550` → after: `L962-L963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L962-L963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L962-L963) · [Before (L547-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L547-L550)

```diff
-       static FromArrayToRef(RR) {
-         let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-           GR = arguments.length > 2 ? arguments[2] : void 0;
-         GR.r = RR[JR], GR.g = RR[JR + 1], GR.b = RR[JR + 2], GR.a = RR[JR + 3]
+       static Dot(rr, Sr) {
+         return rr._x * Sr._x + rr._y * Sr._y + rr._z * Sr._z
```

#### 142. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L552-L553` → after: `L965-L966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L965-L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L965-L966) · [Before (L552-L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L552-L553)

```diff
-       static FromInts(RR, JR, GR, yR) {
-         return new wR(RR / 255, JR / 255, GR / 255, yR / 255)
+       dot(rr) {
+         return this._x * rr._x + this._y * rr._y + this._z * rr._z
```

#### 143. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L555-L564` → after: `L968-L2733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L968-L2733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L968-L2733) · [Before (L555-L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L555-L564)

```diff
-       static CheckColors4(RR, JR) {
-         if (RR.length === 3 * JR) {
-           const JR = [];
-           for (let GR = 0; GR < RR.length; GR += 3) {
-             const yR = GR / 3 * 4;
-             JR[yR] = RR[GR], JR[yR + 1] = RR[GR + 1], JR[yR + 2] = RR[GR + 2], JR[yR + 3] = 1
-           }
-           return JR
-         }
-         return RR
+       static Cross(rr, Sr) {
+         const Qr = new mr;
+         return mr.CrossToRef(rr, Sr, Qr), Qr
+       }
+       static CrossToRef(rr, Sr, Qr) {
+         const Zr = rr._y * Sr._z - rr._z * Sr._y,
+           Wr = rr._z * Sr._x - rr._x * Sr._z,
+           ar = rr._x * Sr._y - rr._y * Sr._x;
+         return Qr.Hrr(Zr, Wr, ar), Qr
+       }
+       static Normalize(rr) {
+         const Sr = mr.Zero();
+         return mr.NormalizeToRef(rr, Sr), Sr
+       }
+       static NormalizeToRef(rr, Sr) {
+         return rr.normalizeToRef(Sr), Sr
+ ... (1750 more added lines; see GitHub link above)
```

#### 144. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L567` → after: `L2736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L2736) · [Before (L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L567)

```diff
-     wR._V8PerformanceHack = new wR(.5, .5, .5, .5);
+     tr._IdentityReadOnly = tr.Identity();
```

#### 145. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L569` → after: `L2738-L2741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2738-L2741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L2738-L2741) · [Before (L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L569)

```diff
-     rR.Color3 = (0, yR.c)(3, KR.Black), rR.Color4 = (0, yR.c)(3, (() => new wR(0, 0, 0, 0)));
+     hr.kU = (0, Wr.f)(11, mr.Zero), hr.Matrix = (0, Wr.f)(2, tr.Identity), hr.Quaternion = (0, Wr.f)(3, Ur.Zero);
+     class zr {}
+     zr.Vector2 = (0, Wr.f)(3, xr.Zero), zr.kU = (0, Wr.f)(13, mr.Zero), zr.Vector4 = (0, Wr.f)(3, Nr.Zero), zr.Quaternion = (0, Wr.f)(3, Ur.Zero), zr.Matrix = (0, Wr.f)(8, tr.Identity);
+     const Yr = tr.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, .5, 0, 0, 0, .5, 1);
```

#### 146. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L587` → after: `L2766-L2780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2766-L2780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L2766-L2780) · [Before (L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L587)

```diff
-       }), (0, ZR.f)("BABYLON.Color3", KR), (0, ZR.f)("BABYLON.Color4", wR))
+       }), Object.defineProperties(Ur.prototype, {
+         dimension: {
+           value: [4]
+         },
+         rank: {
+           value: 1
+         }
+       }), Object.defineProperties(tr.prototype, {
+         dimension: {
+           value: [4, 4]
+         },
+         rank: {
+           value: 2
+         }
+       }), (0, Er.e)("BABYLON.Vector2", xr), (0, Er.e)("BABYLON.Vector3", mr), (0, Er.e)("BABYLON.Vector4", Nr), (0, Er.e)("BABYLON.Matrix", tr))
```

#### 147. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L590` → after: `L2783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L2783) · [Before (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L590)

```diff
-   38213: (RR, JR, GR) => {
+   38595: (rr, Sr, Qr) => {
```

#### 148. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L592-L594` → after: `L2785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L2785) · [Before (L592-L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L592-L594)

```diff
-       c: () => uR,
-       e: () => yR,
-       i: () => tR
+       d: () => jr
```

#### 149. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L596-L754` → after: `L2787-L2800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2787-L2800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L2787-L2800) · [Before (L596-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L596-L754)

```diff
-     const yR = 1 / 2.2,
-       tR = 2.2;
-     Math.sqrt(5);
-     let uR = .001
-   },
-   38239: (RR, JR, GR) => {
-     function yR(RR) {
-       return parseInt(RR.toString().replace(/\W/g, ""))
-     }
- 
-     function tR(RR, JR) {
-       let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
-       return Math.abs(RR - JR) <= GR
-     }
- 
-     function uR(RR, JR, GR) {
- ... (143 more removed lines; see GitHub link above)
+     const Zr = "undefined" !== typeof WeakRef;
+     class Wr {
+       constructor(rr) {
+         let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           Qr = arguments.length > 2 ? arguments[2] : void 0,
+           Zr = arguments.length > 3 ? arguments[3] : void 0;
+         this.initialize(rr, Sr, Qr, Zr)
+       }
+       initialize(rr) {
+         let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           Qr = arguments.length > 2 ? arguments[2] : void 0,
+           Zr = arguments.length > 3 ? arguments[3] : void 0;
+         return this.mask = rr, this.skipNextObservers = Sr, this.target = Qr, this.currentTarget = Zr, this
+       }
```

#### 150. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L756-L758` → after: `L2802-L2810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2802-L2810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L2802-L2810) · [Before (L756-L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L756-L758)

```diff
- 
-     function tR(RR, JR) {
-       return yR(RR, JR)
+     class ar {
+       constructor(rr, Sr) {
+         let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+         this.callback = rr, this.mask = Sr, this.scope = Qr, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
+       }
+       remove() {
+         let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         this._remove && this._remove(rr)
+       }
```

#### 151. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L760-L774` → after: `L2812-L2836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2812-L2836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L2812-L2836) · [Before (L760-L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L760-L774)

```diff
-     GR.d(JR, {
-       c: () => yR,
-       g: () => tR,
-       i: () => ZR
-     });
-     const uR = ["push", "splice", "pop", "shift", "unshift"];
- 
-     function ZR(RR, JR) {
-       const GR = uR.map((GR => function(RR, JR, GR) {
-         const yR = RR[JR];
-         if ("function" !== typeof yR) return null;
-         const tR = function() {
-           const yR = RR.length,
-             uR = tR.previous.apply(RR, arguments);
-           return GR(JR, yR), uR
+     class jr {
+       static FromPromise(rr, Sr) {
+         const Qr = new jr;
+         return rr.then((rr => {
+           Qr.notifyObservers(rr)
+         })).catch((rr => {
+           if (!Sr) throw rr;
+           Sr.notifyObservers(rr)
+         })), Qr
+       }
+       get observers() {
+         return this._observers
+       }
+       constructor(rr) {
+         let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         this.notifyIfTriggered = Sr, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new Wr(0), rr && (this._onObserverAdded = rr)
+ ... (9 more added lines; see GitHub link above)
```

#### 152. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L776-L780` → after: `L2838-L2855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2838-L2855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L2838-L2855) · [Before (L776-L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L776-L780)

```diff
-         return yR.next = tR, tR.previous = yR, RR[JR] = tR, () => {
-           const GR = tR.previous;
-           if (!GR) return;
-           const yR = tR.next;
-           yR ? (GR.next = yR, yR.previous = GR) : (GR.next = void 0, RR[JR] = GR), tR.next = void 0, tR.previous = void 0
+         return Wr._remove = function() {
+           let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+           const Sr = jr.deref();
+           Sr && (rr ? Sr.remove(Wr) : Sr._remove(Wr))
+         }, Wr
+       }
+       addOnce(rr) {
+         return this.add(rr, void 0, void 0, void 0, !0)
+       }
+       remove(rr) {
+         if (!rr) return !1;
+         rr._remove = null;
+         return -1 !== this._observers.indexOf(rr) && (this._deferUnregister(rr), !0)
+       }
+       removeCallback(rr, Sr) {
+         for (let Qr = 0; Qr < this._observers.length; Qr++) {
+ ... (2 more added lines; see GitHub link above)
```

#### 153. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L782-L784` → after: `L2857-L2915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2857-L2915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L2857-L2915) · [Before (L782-L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L782-L784)

```diff
-       }(RR, GR, JR)));
-       return () => {
-         for (const RR of GR) RR?.()
+         return !1
+       }
+       _deferUnregister(rr) {
+         rr._willBeUnregistered || (this._numObserversMarkedAsDeleted++, rr.unregisterOnNextCall = !1, rr._willBeUnregistered = !0, setTimeout((() => {
+           this._remove(rr)
+         }), 0))
+       }
+       _remove(rr) {
+         let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+         if (!rr) return !1;
+         const Qr = this._observers.indexOf(rr);
+         return -1 !== Qr && (Sr && this._numObserversMarkedAsDeleted--, this._observers.splice(Qr, 1), !0)
+       }
+       makeObserverTopPriority(rr) {
+         this._remove(rr, !1), this._observers.unshift(rr)
+       }
+ ... (43 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/265.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/265.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89)

#### 1. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/265.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/265.js#L4)

```diff
-   38224: (RR, JR, GR) => {
+   38684: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L6` → after: `L6-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/265.js#L6-L9) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/265.js#L6)

```diff
-       c: () => tR
+       e: () => xr,
+       f: () => mr,
+       h: () => tr,
+       l: () => Nr
```

#### 3. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L8` → after: `L11-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L11-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/265.js#L11-L30) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/265.js#L8)

```diff
-     var yR = GR(38233);
+     var Zr = Qr(38576),
+       Wr = Qr(38569),
+       ar = Qr(38599),
+       jr = Qr(38609);
+ 
+     function Ir(rr) {
+       return Math.pow(rr, Wr.h)
+     }
+ 
+     function fr(rr) {
+       return rr <= .04045 ? .0773993808 * rr : Math.pow(.947867299 * (rr + .055), 2.4)
+     }
+ 
+     function Er(rr) {
+       return Math.pow(rr, Wr.f)
+     }
+ ... (4 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L10-L17` → after: `L32-L588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L32-L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/265.js#L32-L588) · [Before (L10-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/265.js#L10-L17)

```diff
-       static get LastCreatedEngine() {
-         return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
-       }
-       static get LastCreatedScene() {
-         return this._LastCreatedScene
-       }
-     }
-     tR.Instances = [], tR.OnEnginesDisposedObservable = new yR.b, tR._LastCreatedScene = null, tR.UseFallbackTexture = !0, tR.FallbackTexture = ""
+       constructor() {
+         let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
+           Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+           Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         this.r = rr, this.g = Sr, this.b = Qr
+       }
+       toString() {
+         return "{R: " + this.r + " G:" + this.g + " B:" + this.b + "}"
+       }
+       getClassName() {
+         return "Color3"
+       }
+       getHashCode() {
+         let rr = 255 * this.r | 0;
+         return rr = 397 * rr ^ 255 * this.g, rr = 397 * rr ^ 255 * this.b, rr
+       }
+ ... (541 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L19` → after: `L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/265.js#L590) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/265.js#L19)

```diff
-   39912: (RR, JR, GR) => {
+   38569: (rr, Sr, Qr) => {
```

#### 6. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L21` → after: `L592-L594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L592-L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/265.js#L592-L594) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/265.js#L21)

```diff
-       b: () => uR
+       e: () => ar,
+       f: () => Zr,
+       h: () => Wr
```

#### 7. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L23-L60` → after: `L596-L599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L596-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/265.js#L596-L599) · [Before (L23-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/265.js#L23-L60)

```diff
-     var yR = GR(39914);
-     const tR = (RR, JR, GR) => RR ? RR.getClassName && "Mesh" === RR.getClassName() ? null : !RR.getClassName || "SubMesh" !== RR.getClassName() && "PhysicsBody" !== RR.getClassName() ? RR.clone ? RR.clone() : Array.isArray(RR) ? RR.slice() : GR && "object" === typeof RR ? {
-       ...RR
-     } : null : RR.clone(JR) : null;
-     class uR {
-       static DeepCopy(RR, JR, GR, uR) {
-         let ZR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         const qR = function(RR) {
-           const JR = [];
-           do {
-             const GR = Object.getOwnPropertyNames(RR);
-             for (const RR of GR) - 1 === JR.indexOf(RR) && JR.push(RR)
-           } while (RR = Object.getPrototypeOf(RR));
-           return JR
-         }(RR);
-         for (const fR of qR) {
- ... (22 more removed lines; see GitHub link above)
+     const Zr = 1 / 2.2,
+       Wr = 2.2;
+     Math.sqrt(5);
+     let ar = .001
```

#### 8. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L62-L70` → after: `L601-L747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L601-L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/265.js#L601-L747) · [Before (L62-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/265.js#L62-L70)

```diff
-   39062: (RR, JR, GR) => {
-     function yR() {
-       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (RR => {
-         const JR = 16 * Math.random() | 0;
-         return ("x" === RR ? JR : 3 & JR | 8).toString(16)
-       }))
-     }
-     GR.d(JR, {
-       c: () => yR
+   38599: (rr, Sr, Qr) => {
+     function Zr(rr) {
+       return parseInt(rr.toString().replace(/\W/g, ""))
+     }
+ 
+     function Wr(rr, Sr) {
+       let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
+       return Math.abs(rr - Sr) <= Qr
+     }
+ 
+     function ar(rr, Sr, Qr) {
+       let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
+       return rr < Sr - Zr || rr > Qr + Zr
+     }
+ 
+     function jr(rr, Sr) {
+ ... (131 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L73-L290` → after: `L750-L759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L750-L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/265.js#L750-L759) · [Before (L73-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/265.js#L73-L290)

```diff
-   39914: (RR, JR, GR) => {
-     GR.d(JR, {
-       c: () => yR
-     });
-     class yR {
-       static _CheckLimit(RR, JR) {
-         let GR = yR._LogLimitOutputs[RR];
-         return GR ? GR.current++ : (GR = {
-           limit: JR,
-           current: 1
-         }, yR._LogLimitOutputs[RR] = GR), GR.current <= GR.limit
-       }
-       static _GenerateLimitMessage(RR) {
-         let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-         const GR = yR._LogLimitOutputs[RR];
-         if (!GR || !yR.MessageLimitReached) return;
- ... (202 more removed lines; see GitHub link above)
+   38576: (rr, Sr, Qr) => {
+     function Zr(rr, Sr) {
+       const Qr = [];
+       for (let Zr = 0; Zr < rr; ++Zr) Qr.push(Sr());
+       return Qr
+     }
+ 
+     function Wr(rr, Sr) {
+       return Zr(rr, Sr)
+     }
```

#### 10. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L293` → after: `L762-L791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L762-L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/265.js#L762-L791) · [Before (L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/265.js#L293)

```diff
-       f: () => tR
+       f: () => Wr,
+       h: () => jr
+     });
+     const ar = ["push", "splice", "pop", "shift", "unshift"];
+ 
+     function jr(rr, Sr) {
+       const Qr = ar.map((Qr => function(rr, Sr, Qr) {
+         const Zr = rr[Sr];
+         if ("function" !== typeof Zr) return null;
+         const Wr = function() {
+           const Zr = rr.length,
+             ar = Wr.previous.apply(rr, arguments);
+           return Qr(Sr, Zr), ar
+         };
+         return Zr.next = Wr, Wr.previous = Zr, rr[Sr] = Wr, () => {
+           const Qr = Wr.previous;
+ ... (14 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/266.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/266.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e)

#### 1. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L4-L6` → after: `L4-L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L4-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/266.js#L4-L291) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/266.js#L4-L6)

```diff
-   38279: (RR, JR, GR) => {
-     GR.d(JR, {
-       c: () => qR,
+   38587: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       b: () => Wr
+     });
+     var Zr = Qr(38595);
+     class Wr {
+       static get LastCreatedEngine() {
+         return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
+       }
+       static get LastCreatedScene() {
+         return this._LastCreatedScene
+       }
+     }
+     Wr.Instances = [], Wr.OnEnginesDisposedObservable = new Zr.d, Wr._LastCreatedScene = null, Wr.UseFallbackTexture = !0, Wr.FallbackTexture = ""
+   },
+   40237: (rr, Sr, Qr) => {
+ ... (272 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L8-L65` → after: `L293-L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L293-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/266.js#L293-L295) · [Before (L8-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/266.js#L8-L65)

```diff
-       g: () => tR
-     });
-     const yR = 1024,
-       tR = 16,
-       uR = 36e4;
-     class ZR {
-       constructor(RR) {
-         this.boneCount = RR, this.rotation = void 0, this.position = void 0, this.scale = void 0, this.touched = void 0, this.rotation = new Float64Array(3 * RR), this.position = new Float64Array(3 * RR), this.scale = new Float64Array(3 * RR).fill(1), this.touched = new Uint8Arra … [truncated]
-       }
-       clampToLimits() {
-         for (let RR = 0; RR < this.boneCount; RR++)
-           if (0 !== this.touched[RR])
-             for (let JR = 3 * RR; JR < 3 * RR + 3; JR++) {
-               const RR = this.rotation[JR],
-                 GR = this.position[JR],
-                 ZR = this.scale[JR];
- ... (42 more removed lines; see GitHub link above)
+       e: () => Wr
+     });
+     const Zr = {};
```

#### 3. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L68-L80` → after: `L298-L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L298-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/266.js#L298-L299) · [Before (L68-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/266.js#L68-L80)

```diff
-       let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-       return Number.isNaN(RR) ? GR : Math.min(JR, Math.max(-JR, RR))
-     }
-   },
-   38275: (RR, JR, GR) => {
-     GR.d(JR, {
-       e: () => iR,
-       h: () => qR
-     });
-     var yR = GR(38265),
-       tR = GR(377),
-       uR = GR(2102),
-       ZR = GR(38279);
+       Zr[rr] = Sr
+     }
```

#### 4. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L83-L390` → after: `L302-L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L302-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/266.js#L302-L303) · [Before (L83-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/266.js#L83-L390)

```diff
-       if ("LG" in RR) return lR.createAnimationScript(RR);
-       return new VR(RR).createAnimationScript()
-     }
- 
-     function iR(RR, JR, GR, tR) {
-       const uR = RR.LG <= 0 ? 1 : JR + GR * Math.max(0, tR) / RR.LG;
-       return RR.nG === yR.o.LoopOnLastFrame ? uR % 1 : RR.nG === yR.o.NoLoop && uR >= 1 ? null : Math.min(1, uR)
-     }
-     class fR {
-       createAnimationScript(RR) {
-         const {
-           LG: JR,
-           loop: GR,
-           UG: yR
-         } = RR;
-         return {
- ... (292 more removed lines; see GitHub link above)
+       return Zr[rr]
+     }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/267.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/267.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8)

#### 1. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/267.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/267.js#L4)

```diff
-   38329: (RR, JR, GR) => {
+   38643: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L6-L7` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/267.js#L6-L8) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/267.js#L6-L7)

```diff
-       Color3: () => yR.d,
-       e: () => yR.e
+       e: () => Ir,
+       f: () => jr,
+       h: () => Wr
```

#### 3. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L9-L10` → after: `L10-L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L10-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/267.js#L10-L390) · [Before (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/267.js#L9-L10)

```diff
-     var yR = GR(38331);
-     (0, yR.g)()
+     const Zr = 1024,
+       Wr = 16,
+       ar = 36e4;
+     class jr {
+       constructor(rr) {
+         this.boneCount = rr, this.rotation = void 0, this.position = void 0, this.scale = void 0, this.touched = void 0, this.rotation = new Float64Array(3 * rr), this.position = new Float64Array(3 * rr), this.scale = new Float64Array(3 * rr).fill(1), this.touched = new Uint8Arra … [truncated]
+       }
+       clampToLimits() {
+         for (let rr = 0; rr < this.boneCount; rr++)
+           if (0 !== this.touched[rr])
+             for (let Sr = 3 * rr; Sr < 3 * rr + 3; Sr++) {
+               const rr = this.rotation[Sr],
+                 Qr = this.position[Sr],
+                 jr = this.scale[Sr];
+               rr >= -36e4 && rr <= ar || (this.rotation[Sr] = fr(rr, ar)), Qr >= -1024 && Qr <= Zr || (this.position[Sr] = fr(Qr, Zr)), jr >= -Wr && jr <= Wr || (this.scale[Sr] = fr(jr, Wr, 1))
+             }
+ ... (365 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/268.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/268.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658)

#### 1. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L4-L7` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/268.js#L4-L7) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/268.js#L4-L7)

```diff
-   64149: (RR, JR, GR) => {
-     GR.r(JR), GR.d(JR, {
-       DEVTOOLS_SHADERS: () => uR,
-       registerDevtoolsShader: () => ZR
+   38679: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       Color3: () => Zr.e,
+       d: () => Zr.f
```

#### 2. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L9-L280` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/268.js#L9-L10) · [Before (L9-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/268.js#L9-L280)

```diff
-     var yR = GR(41387),
-       tR = GR(38358);
-     const uR = {
-       devtoolsNormal: function(RR) {
-         return {
-           vertex: `\n\t\t\t${(0,tR.g)(RR,"position","vec3")}\n\t\t\t${(0,tR.g)(RR,"normal","vec3")}\n\t\t\t${(0,tR.Ib)(RR,"worldViewProjection","mat4")}\n\t\t\t${(0,tR.Ib)(RR,"world","mat4")}\n\t\t\t${(0,tR.Lb)(RR,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,tR.Mb)(RR,`\n\t\t\t\t${ … [truncated]
-           fragment: `\n\t\t\t${(0,tR.Lb)(RR,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,tR.T)(RR,`\n\t\t\t\t\n\t\t\t\t${(0,tR.G)(RR,"vec3","normalColor",`abs(${(0,tR.V)(RR,"vNormal")})`)}\n\t\t\t\t${(0,tR.Q)(RR)} = ${(0,tR.n)(RR,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
-         }
-       },
-       devtoolsWhite: function(RR) {
-         return {
-           vertex: `\n\t\t\t${(0,tR.g)(RR,"position","vec3")}\n\t\t\t${(0,tR.Ib)(RR,"worldViewProjection","mat4")}\n\n\t\t\t${(0,tR.Mb)(RR,`\n\t\t\t\t${(0,tR.l)(RR)} = ${(0,tR.Jb)(RR,"worldViewProjection")} * ${(0,tR.n)(RR,"vec4",(0,tR.Nb)(RR,"position"),"1.0")};\n\t\t\t`)}\n\t\t` … [truncated]
-           fragment: `\n\t\t\t${(0,tR.T)(RR,`\n\t\t\t\t${(0,tR.Q)(RR)} = ${(0,tR.n)(RR,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
-         }
-       },
-       devtoolsDepth: function(RR) {
- ... (256 more removed lines; see GitHub link above)
+     var Zr = Qr(38684);
+     (0, Zr.h)()
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/269.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/269.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b)

#### 1. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L4` → after: `L4-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L4-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/269.js#L4-L40) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/269.js#L4)

```diff
-   42590: (RR, JR, GR) => {
+   64619: (rr, Sr, Qr) => {
+     Qr.r(Sr), Qr.d(Sr, {
+       DEVTOOLS_SHADERS: () => ar,
+       registerDevtoolsShader: () => jr
+     });
+     var Zr = Qr(41743),
+       Wr = Qr(38702);
+     const ar = {
+       devtoolsNormal: function(rr) {
+         return {
+           vertex: `\n\t\t\t${(0,Wr.f)(rr,"position","vec3")}\n\t\t\t${(0,Wr.f)(rr,"normal","vec3")}\n\t\t\t${(0,Wr.yb)(rr,"worldViewProjection","mat4")}\n\t\t\t${(0,Wr.yb)(rr,"world","mat4")}\n\t\t\t${(0,Wr.Cb)(rr,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,Wr.Gb)(rr,`\n\t\t\t\t${ … [truncated]
+           fragment: `\n\t\t\t${(0,Wr.Cb)(rr,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,Wr.U)(rr,`\n\t\t\t\t\n\t\t\t\t${(0,Wr.E)(rr,"vec3","normalColor",`abs(${(0,Wr.Y)(rr,"vNormal")})`)}\n\t\t\t\t${(0,Wr.P)(rr)} = ${(0,Wr.p)(rr,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
+         }
+       },
+       devtoolsWhite: function(rr) {
+         return {
+ ... (21 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L6` → after: `L42-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L42-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/269.js#L42-L78) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/269.js#L6)

```diff
-       noaDevTools: () => KR
+       $: () => Pr,
+       A: () => Nr,
+       C: () => xr,
+       Cb: () => hr,
+       E: () => pr,
+       G: () => Tr,
+       Gb: () => nr,
+       Hb: () => Or,
+       I: () => Hr,
+       L: () => ar,
+       Lb: () => Lr,
+       P: () => gr,
+       S: () => Rr,
+       U: () => er,
+       Y: () => lr,
+       d: () => Zr,
+ ... (21 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L8-L248` → after: `L80-L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L80-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/269.js#L80-L262) · [Before (L8-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/269.js#L8-L248)

```diff
-     var yR = GR(38616),
-       tR = GR(38599),
-       uR = GR(2435),
-       ZR = GR(1943),
-       qR = GR(42516);
- 
-     function iR(RR) {
-       const {
-         lK: JR
-       } = RR, GR = JR.engine, yR = {
-         width: GR.getRenderWidth(),
-         height: GR.getRenderHeight()
-       };
-       return {
-         canvas: GR.getRenderingCanvas(),
-         maxTextureSize: GR.getCaps().maxTextureSize,
- ... (225 more removed lines; see GitHub link above)
+     const Zr = {
+       GLSL: 0,
+       WGSL: 1
+     };
+ 
+     function Wr(rr) {
+       return rr === Zr.WGSL
+     }
+ 
+     function ar(rr, Sr, Qr) {
+       return Wr(rr) ? Qr : Sr
+     }
+     const jr = new Map([
+       ["int", "i32"],
+       ["float", "f32"],
+       ["vec2", "vec2f"],
+ ... (167 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L251` → after: `L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/269.js#L265) · [Before (L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/269.js#L251)

```diff
-   42516: (RR, JR, GR) => {
+   41743: (rr, Sr, Qr) => {
```

#### 5. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L253-L254` → after: `L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/269.js#L267) · [Before (L253-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/269.js#L253-L254)

```diff
-       e: () => qR,
-       f: () => iR
+       e: () => Zr
```

#### 6. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L367-L580` → after: `L270-L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L270-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/269.js#L270-L280) · [Before (L367-L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/269.js#L367-L580)

```diff
-       constructor(RR, JR) {
-         this.LK = RR, this.engine = JR, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
-       }
-       apply(RR, JR) {
-         if (!JR) return;
-         const GR = JR.getProjectionMatrix().m,
-           ZR = 0 === uR && 0 === GR[15],
-           qR = JR.globalPosition,
-           {
-             engine: fR
-           } = this,
-           VR = ZR ? (0, tR.e)(GR, fR.getRenderWidth(), fR.getRenderHeight()) : 0;
-         qR.x === this.eyeX && qR.y === this.eyeY && qR.z === this.eyeZ && VR === this.focalPx && ZR === this.culling || (this.epoch++, this.eyeX = qR.x, this.eyeY = qR.y, this.eyeZ = qR.z, this.focalPx = VR, this.culling = ZR);
-         const {
-           epoch: KR,
-           range: wR
- ... (198 more removed lines; see GitHub link above)
+       static GetShadersRepository() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Zr.ShadersRepository : Zr.ShadersRepositoryWGSL
+       }
+       static GetShadersStore() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Zr.ShadersStore : Zr.ShadersStoreWGSL
+       }
+       static GetIncludesShadersStore() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Zr.IncludesShadersStore : Zr.IncludesShadersStoreWGSL
+       }
+     }
+     Zr.ShadersRepository = "src/Shaders/", Zr.ShadersStore = {}, Zr.IncludesShadersStore = {}, Zr.ShadersRepositoryWGSL = "src/ShadersWGSL/", Zr.ShadersStoreWGSL = {}, Zr.IncludesShadersStoreWGSL = {}
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/270.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/270.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3)

#### 1. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L4-L5` → after: `L4-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L4-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/270.js#L4-L12) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/270.js#L4-L5)

```diff
-   38891: (RR, JR, GR) => {
-     var yR = GR(38898);
+   42923: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       noaDevTools: () => xr
+     });
+     var Zr = Qr(38963),
+       Wr = Qr(38938),
+       ar = Qr(2383),
+       jr = Qr(1885),
+       Ir = Qr(42836);
```

#### 2. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L8-L138` → after: `L15-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L15-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/270.js#L15-L36) · [Before (L8-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/270.js#L8-L138)

```diff
-       for (var JR, GR, tR = 0, uR = RR.length, ZR = 0; ZR < RR.length;) {
-         for (JR = RR[ZR], GR = 0; ZR < uR && RR[ZR] === JR;) ++ZR, ++GR;
-         tR += yR.log2(GR) / 7 | 0, tR += yR.log2(JR >>> 0) / 7 | 0, tR += 2
-       }
-       return tR
-     }
-     JR.size = tR, JR.encode = function(RR, JR) {
-       JR || (JR = new Uint8Array(tR(RR)));
-       for (var GR, yR, uR = 0, ZR = JR.length, qR = 0; qR < RR.length;) {
-         for (GR = RR[qR], yR = 0; qR < RR.length && RR[qR] === GR;) ++qR, ++yR;
-         for (; uR < ZR && yR >= 128;) JR[uR++] = 128 + (127 & yR), yR >>>= 7;
-         if (uR >= ZR) throw new Error("RLE buffer overflow");
-         for (JR[uR++] = yR, GR >>>= 0; uR < ZR && GR >= 128;) JR[uR++] = 128 + (127 & GR), GR >>>= 7;
-         if (uR >= ZR) throw new Error("RLE buffer overflow");
-         JR[uR++] = GR
-       }
- ... (115 more removed lines; see GitHub link above)
+       const {
+         Ox: Sr
+       } = rr, Qr = Sr.engine, Zr = {
+         width: Qr.getRenderWidth(),
+         height: Qr.getRenderHeight()
+       };
+       return {
+         canvas: Qr.getRenderingCanvas(),
+         maxTextureSize: Qr.getCaps().maxTextureSize,
+         yx: () => !rr.Lx,
+         resize: (rr, Sr) => {
+           Qr.setSize(rr, Sr)
+         },
+         restoreSize: () => {
+           Qr.setSize(Zr.width, Zr.height), Sr.resize()
+         },
+ ... (6 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L141-L157` → after: `L39-L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L39-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/270.js#L39-L423) · [Before (L141-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/270.js#L141-L157)

```diff
-       }],
-       wR = tR().Type.forSchema({
-         type: "record",
-         fields: KR
-       }),
-       rR = tR().Type.forSchema({
-         type: "record",
-         fields: [...KR, {
-           name: "blockData",
-           type: {
-             type: "array",
-             items: {
-               type: "record",
-               fields: [...VR, {
-                 name: "data",
-                 type: "bytes"
- ... (1 more removed lines; see GitHub link above)
+       }
+     }
+     var Er = Qr(35335);
+ 
+     function pr(rr, Sr) {
+       let {
+         width: Er,
+         height: pr,
+         colouring: xr
+       } = Sr;
+       const mr = "normals" === xr,
+         Nr = "depth" === xr;
+       return new Promise((Sr => {
+         try {
+           const Ur = (0, ar.e)();
+           if (Ur.Ox.Wt) return "screenshot" !== rr || null !== xr ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void Sr()) : void(0, Ir.f)(fr(Ur), Er, pr).finally(Sr);
+ ... (369 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L160-L164` → after: `L426-L460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L426-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/270.js#L426-L460) · [Before (L160-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/270.js#L160-L164)

```diff
-         }, {
-           name: "pasteOffset",
-           type: {
-             type: "record",
-             fields: VR
+           Sr && 0 === rr._noaFaceCount || (tr[zr++] = rr)
+         }
+         rr.length = zr
+       }
+     }
+   },
+   38938: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       c: () => fr,
+       f: () => Ir
+     });
+     const Zr = new WeakSet;
+     let Wr = 0;
+     const ar = new Set;
+ 
+     function jr(rr, Sr) {
+ ... (19 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L166-L168` → after: `L462-L492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L462-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/270.js#L462-L492) · [Before (L166-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/270.js#L166-L168)

```diff
-         }]
-       }),
-       eR = 2,
+           return Sr
+         }(rr)) Qr.getData() || Er(Qr), ar.add(Qr);
+       let Sr = !0;
+       return () => {
+         if (Sr && (Sr = !1, Wr--, 0 === Wr)) {
+           for (const rr of ar) jr(rr, null);
+           ar.clear()
+         }
+       }
+     }
+ 
+     function Er(rr) {
+       const Sr = rr.getBuffer();
+       if (!Sr || !(Sr.sx > 0)) return;
+       const Qr = rr._engine,
+         Zr = new Uint8Array(Sr.sx);
+ ... (15 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L170-L256` → after: `L494-L502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L494-L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/270.js#L494-L502) · [Before (L170-L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/270.js#L170-L256)

```diff
-       LR = 16,
-       nR = 4096,
-       UR = qR.g.LK,
-       WR = -2147483648;
-     async function AR(RR) {
-       const JR = await (0, fR.e)(),
-         GR = await CR(new Uint8Array(await RR.arrayBuffer()), (RR => JR.get(RR)));
-       return {
-         surface: GR.surface,
-         topDown: MR(GR.columnTops)
-       }
-     }
-     async function CR(RR, JR) {
-       var GR;
-       if (RR.byteLength < 4) throw new Error("The file is too short to be a schematic.");
-       const yR = new DataView(RR.buffer, RR.byteOffset, RR.byteLength).getUint32(0, !0);
- ... (71 more removed lines; see GitHub link above)
+       jr = [1, 0, 3, 2, 5, 4];
+     for (let pr = ar; pr < Wr.length; pr++)
+       if (Wr[pr] !== Wr[pr - ar]) throw new Error("FACE_LAYOUT must repeat a prefix of its base groups");
+     const Ir = Wr.length + 1,
+       fr = (() => {
+         const rr = [];
+         for (let Sr = 0; Sr < ar; Sr++) rr[Wr[Sr]] = Sr;
+         return rr
+       })();
```

#### 7. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L259-L272` → after: `L505-L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L505-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/270.js#L505-L550) · [Before (L259-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/270.js#L259-L272)

```diff
-       if (0 === RR) return !0;
-       const JR = iR.l[RR];
-       return void 0 === JR || JR.Nr || JR.transTex || !1 === JR.solid
-     }
- 
-     function MR(RR) {
-       let JR = 1 / 0,
-         GR = -1 / 0,
-         yR = 1 / 0,
-         tR = -1 / 0;
-       for (const {
-           chunkX: eR,
-           chunkZ: aR,
-           heights: LR
+       return !!rr && rr.backFaceCulling && (0 === rr.transparencyMode || 1 === rr.transparencyMode)
+     }
+   },
+   38972: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       c: () => Ir,
+       d: () => fr,
+       e: () => pr,
+       g: () => Er,
+       h: () => Ur
+     });
+     var Zr = Qr(38956);
+     const Wr = 1 / 16,
+       ar = 1 / 64,
+       jr = 2048;
+     Zr.j;
+ ... (30 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L360-L368` → after: `L553-L595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L553-L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/270.js#L553-L595) · [Before (L360-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/270.js#L360-L368)

```diff
-       }
-       drawPixel(RR, JR, GR, yR, tR, uR) {
-         const qR = function(RR, JR, GR) {
-             const yR = RR - JR + (RR - GR);
-             return Math.max(.65, Math.min(1.2, .97 + .055 * yR))
-           }(yR, tR === ZR ? yR : tR, uR === ZR ? yR : uR),
-           iR = this.get(GR);
-         RR[JR] = iR[0] * qR, RR[JR + 1] = iR[1] * qR, RR[JR + 2] = iR[2] * qR, RR[JR + 3] = 255
-       }
+       })(),
+       mr = [];
+ 
+     function Nr(rr, Sr) {
+       const Qr = Zr.i[Sr];
+       return rr[Qr + 1] - rr[Qr]
+     }
+ 
+     function Ur(rr, Sr, Qr) {
+       let Wr = 0;
+       for (let jr = 0; jr < Zr.j; jr++) Nr(rr, jr) > 0 && (Wr |= 1 << jr);
+       if (0 === (Sr &= Wr)) return 0;
+       if (Sr === Wr) return Qr[0] = 0, Qr[1] = rr[Zr.f], 1;
+       let ar = null,
+         Ir = 1 / 0;
+       for (const Er of function(rr) {
+ ... (27 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/271.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/271.js` (22 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c)

#### 1. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/271.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/271.js#L2)

```diff
- export const ids = [271, 272];
+ export const ids = [271];
```

#### 2. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L4-L92` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/271.js#L4-L5) · [Before (L4-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/271.js#L4-L92)

```diff
-   41773: (RR, JR, GR) => {
-     GR.d(JR, {
-       b: () => VR,
-       c: () => wR
-     });
-     var yR = GR(41520),
-       tR = GR(41524),
-       uR = GR(38204),
-       ZR = GR(38331),
-       qR = GR(41777),
-       iR = GR(41741),
-       fR = GR(38253);
-     let VR = (() => {
-         var RR;
-         let JR, GR, iR = qR.c,
-           fR = [],
- ... (73 more removed lines; see GitHub link above)
+   39230: (rr, Sr, Qr) => {
+     var Zr = Qr(39238);
```

#### 3. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L94-L243` → after: `L7-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L7-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/271.js#L7-L10) · [Before (L94-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/271.js#L94-L243)

```diff
-     function wR() {
-       KR || (KR = !0, iR.d.AddNodeConstructor("Light_Type_3", ((RR, JR) => () => new VR(RR, uR.r.Zero(), JR))), (0, fR.f)("BABYLON.HemisphericLight", VR))
-     }
-   },
-   38928: (RR, JR, GR) => {
-     GR.d(JR, {
-       e: () => tR
-     });
-     var yR = GR(38933);
-     class tR {
-       static GetPlanes(RR) {
-         const JR = [];
-         for (let GR = 0; GR < 6; GR++) JR.push(new yR.c(0, 0, 0, 0));
-         return tR.GetPlanesToRef(RR, JR), JR
-       }
-       static GetNearPlaneToRef(RR, JR) {
- ... (134 more removed lines; see GitHub link above)
+     function Wr(rr) {
+       for (var Sr, Qr, Wr = 0, ar = rr.length, jr = 0; jr < rr.length;) {
+         for (Sr = rr[jr], Qr = 0; jr < ar && rr[jr] === Sr;) ++jr, ++Qr;
+         Wr += Zr.log2(Qr) / 7 | 0, Wr += Zr.log2(Sr >>> 0) / 7 | 0, Wr += 2
```

#### 4. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L246-L287` → after: `L14-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L14-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/271.js#L14-L34) · [Before (L246-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/271.js#L246-L287)

```diff
-   },
-   39912: (RR, JR, GR) => {
-     GR.d(JR, {
-       b: () => uR
-     });
-     var yR = GR(39914);
-     const tR = (RR, JR, GR) => RR ? RR.getClassName && "Mesh" === RR.getClassName() ? null : !RR.getClassName || "SubMesh" !== RR.getClassName() && "PhysicsBody" !== RR.getClassName() ? RR.clone ? RR.clone() : Array.isArray(RR) ? RR.slice() : GR && "object" === typeof RR ? {
-       ...RR
-     } : null : RR.clone(JR) : null;
-     class uR {
-       static DeepCopy(RR, JR, GR, uR) {
-         let ZR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         const qR = function(RR) {
-           const JR = [];
-           do {
-             const GR = Object.getOwnPropertyNames(RR);
- ... (26 more removed lines; see GitHub link above)
+     Sr.size = Wr, Sr.encode = function(rr, Sr) {
+       Sr || (Sr = new Uint8Array(Wr(rr)));
+       for (var Qr, Zr, ar = 0, jr = Sr.length, Ir = 0; Ir < rr.length;) {
+         for (Qr = rr[Ir], Zr = 0; Ir < rr.length && rr[Ir] === Qr;) ++Ir, ++Zr;
+         for (; ar < jr && Zr >= 128;) Sr[ar++] = 128 + (127 & Zr), Zr >>>= 7;
+         if (ar >= jr) throw new Error("RLE buffer overflow");
+         for (Sr[ar++] = Zr, Qr >>>= 0; ar < jr && Qr >= 128;) Sr[ar++] = 128 + (127 & Qr), Qr >>>= 7;
+         if (ar >= jr) throw new Error("RLE buffer overflow");
+         Sr[ar++] = Qr
+       }
+       return Sr
+     }, Sr.decode = function(rr, Sr) {
+       for (var Qr, Zr, Wr, ar, jr = Sr.length, Ir = rr.length, fr = 0, Er = 0; Er < Ir;) {
+         for (Qr = 0, Zr = 0; Er < Ir && rr[Er] >= 128;) Qr += (127 & rr[Er++]) << Zr, Zr += 7;
+         if (Qr += rr[Er++] << Zr, Er >= Ir) throw new Error("RLE buffer underrun");
+         if (fr + Qr > jr) throw new Error("Chunk buffer overflow");
+ ... (5 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L290-L295` → after: `L37-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L37-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/271.js#L37-L40) · [Before (L290-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/271.js#L290-L295)

```diff
-   39062: (RR, JR, GR) => {
-     function yR() {
-       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (RR => {
-         const JR = 16 * Math.random() | 0;
-         return ("x" === RR ? JR : 3 & JR | 8).toString(16)
-       }))
+   39238: (rr, Sr) => {
+     function Qr(rr) {
+       var Sr = 32;
+       return (rr &= -rr) && Sr--, 65535 & rr && (Sr -= 16), 16711935 & rr && (Sr -= 8), 252645135 & rr && (Sr -= 4), 858993459 & rr && (Sr -= 2), 1431655765 & rr && (Sr -= 1), Sr
```

#### 6. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L297-L356` → after: `L42-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L42-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/271.js#L42-L88) · [Before (L297-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/271.js#L297-L356)

```diff
-     GR.d(JR, {
-       c: () => yR
-     })
-   },
-   39914: (RR, JR, GR) => {
-     GR.d(JR, {
-       c: () => yR
-     });
-     class yR {
-       static _CheckLimit(RR, JR) {
-         let GR = yR._LogLimitOutputs[RR];
-         return GR ? GR.current++ : (GR = {
-           limit: JR,
-           current: 1
-         }, yR._LogLimitOutputs[RR] = GR), GR.current <= GR.limit
-       }
- ... (44 more removed lines; see GitHub link above)
+     Sr.INT_BITS = 32, Sr.INT_MAX = 2147483647, Sr.INT_MIN = -1 << 31, Sr.sign = function(rr) {
+       return (rr > 0) - (rr < 0)
+     }, Sr.abs = function(rr) {
+       var Sr = rr >> 31;
+       return (rr ^ Sr) - Sr
+     }, Sr.min = function(rr, Sr) {
+       return Sr ^ (rr ^ Sr) & -(rr < Sr)
+     }, Sr.max = function(rr, Sr) {
+       return rr ^ (rr ^ Sr) & -(rr < Sr)
+     }, Sr.isPow2 = function(rr) {
+       return !(rr & rr - 1) && !!rr
+     }, Sr.log2 = function(rr) {
+       var Sr, Qr;
+       return Sr = (rr > 65535) << 4, Sr |= Qr = ((rr >>>= Sr) > 255) << 3, Sr |= Qr = ((rr >>>= Qr) > 15) << 2, (Sr |= Qr = ((rr >>>= Qr) > 3) << 1) | (rr >>>= Qr) >> 1
+     }, Sr.log10 = function(rr) {
+       return rr >= 1e9 ? 9 : rr >= 1e8 ? 8 : rr >= 1e7 ? 7 : rr >= 1e6 ? 6 : rr >= 1e5 ? 5 : rr >= 1e4 ? 4 : rr >= 1e3 ? 3 : rr >= 100 ? 2 : rr >= 10 ? 1 : 0
+ ... (31 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L372` → after: `L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/271.js#L91) · [Before (L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/271.js#L372)

```diff
-   64134: (RR, JR, GR) => {
+   41710: (rr, Sr, Qr) => {
```

#### 8. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L374-L381` → after: `L93-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L93-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/271.js#L93-L95) · [Before (L374-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/271.js#L374-L381)

```diff
-       CreateScreenshot: () => oR,
-       CreateScreenshotAsync: () => cR,
-       CreateScreenshotForFrameGraphAsync: () => zR,
-       CreateScreenshotUsingRenderTarget: () => IR,
-       CreateScreenshotUsingRenderTargetAsync: () => mR,
-       CreateScreenshotWithResizeAsync: () => PR,
-       RegisterScreenshotTools: () => ER,
-       ScreenshotTools: () => jR
+       emptyColumnHeight: () => nr,
+       loadHeatmapSchematic: () => er,
+       readSchematicBlocks: () => Kr
```

#### 9. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L383-L606` → after: `L97-L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L97-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/271.js#L97-L121) · [Before (L383-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/271.js#L383-L606)

```diff
-     var yR = GR(42011),
-       tR = GR(53843),
-       uR = GR(53823),
-       ZR = GR(41542),
-       qR = GR(53825),
-       iR = GR(38224),
-       fR = GR(38204);
-     class VR extends qR.h {
-       static _GetDefines(RR) {
-         if (!RR) return null;
-         return RR.extractDriverInfo().toLowerCase().indexOf("mali") > -1 ? "#define MALI 1\n" : null
-       }
-       _gatherImports(RR, JR) {
-         RR ? (this._webGPUReady = !0, JR.push(Promise.all([GR.e(692).then((() => GR(64371))), GR.e(693).then((() => GR(64377)))]))) : JR.push(Promise.all([GR.e(694).then((() => GR(64384))), GR.e(695).then((() => GR(64393)))]))
-       }
-       constructor(RR) {
- ... (208 more removed lines; see GitHub link above)
+     var Zr = Qr(2493),
+       Wr = Qr.n(Zr),
+       ar = Qr(2448),
+       jr = Qr(39230),
+       Ir = Qr(208),
+       fr = Qr(5779),
+       Er = Qr(41093);
+     const pr = [{
+         name: "x",
+         type: "int"
+       }, {
+         name: "y",
+         type: "int"
+       }, {
+         name: "z",
+         type: "int"
+ ... (9 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L608-L619` → after: `L123-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L123-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/271.js#L123-L127) · [Before (L608-L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/271.js#L608-L619)

```diff
-         let yR, tR = null,
-           uR = [],
-           ZR = null;
-         for (const qR of this._passesDisabled) {
-           const RR = qR._isValid();
-           if (RR) throw new Error(`Pass "${qR.name}" is not valid. ${RR}`);
-           if (AR.IsRenderPass(qR)) {
-             const RR = Array.isArray(qR.renderTarget) ? qR.renderTarget : [qR.renderTarget];
-             tR = [];
-             for (const JR of RR) void 0 !== JR && tR.push(this._frameGraph.textureManager.getTextureFromHandle(JR));
-             uR = RR, ZR = void 0 !== qR.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(qR.renderTargetDepth) : null
-           } else WR.IsObjectListPass(qR) && (yR = qR.objectList)
+       }, {
+         name: "dimensions",
+         type: {
+           type: "record",
+           fields: pr
```

#### 11. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L621-L628` → after: `L129-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L129-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/271.js#L129-L138) · [Before (L621-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/271.js#L621-L628)

```diff
-         if (this._passesDisabled.length > 0) {
-           if (!this._checkSameRenderTarget(JR, tR)) {
-             let RR = !0;
-             for (const JR of uR)
-               if (void 0 !== JR && !this._frameGraph.textureManager.isHistoryTexture(JR)) {
-                 RR = !1;
-                 break
-               } if (!RR) throw new Error(`The output texture of the task "${this.name}" is different when it is enabled or disabled.`)
+       }, {
+         name: "chunkData",
+         type: {
+           type: "array",
+           items: {
+             type: "record",
+             fields: [...pr, {
+               name: "rle",
+               type: "bytes"
+             }]
```

#### 12. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L652-L706` → after: `L141-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L141-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/271.js#L141-L179) · [Before (L652-L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/271.js#L652-L706)

```diff
-       }
-       _checkSameRenderTarget(RR, JR) {
-         if (null === RR || null === JR) return RR === JR;
-         if (RR.length !== JR.length) return !1;
-         for (let GR = 0; GR < RR.length; GR++)
-           if (RR[GR] !== JR[GR]) return !1;
-         return !0
-       }
-     }
-     class MR extends XR {
-       get alphaMode() {
-         return this.postProcess.alphaMode
-       }
-       set alphaMode(RR) {
-         this.postProcess.alphaMode = RR
-       }
- ... (39 more removed lines; see GitHub link above)
+       }],
+       mr = Wr().Type.forSchema({
+         type: "record",
+         fields: xr
+       }),
+       Nr = Wr().Type.forSchema({
+         type: "record",
+         fields: [...xr, {
+           name: "blockData",
+           type: {
+             type: "array",
+             items: {
+               type: "record",
+               fields: [...pr, {
+                 name: "data",
+                 type: "bytes"
+ ... (23 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L709-L721` → after: `L182-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L182-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/271.js#L182-L254) · [Before (L709-L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/271.js#L709-L721)

```diff
-     class BR extends MR {
-       constructor(RR, JR, GR) {
-         super(RR, JR, GR || new VR(RR, JR.engine))
-       }
-       getClassName() {
-         return "FrameGraphFXAATask"
-       }
-       record() {
-         let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
-           JR = arguments.length > 1 ? arguments[1] : void 0,
-           GR = arguments.length > 2 ? arguments[2] : void 0;
-         const yR = super.record(RR, JR, GR);
-         return this.postProcess.texelSize.x = 1 / this._sourceWidth, this.postProcess.texelSize.y = 1 / this._sourceHeight, yR
+     async function Kr(rr, Sr) {
+       var Qr;
+       if (rr.byteLength < 4) throw new Error("The file is too short to be a schematic.");
+       const Zr = new DataView(rr.buffer, rr.byteOffset, rr.byteLength).getUint32(0, !0);
+       if (Zr > tr) throw new Error("The file isn't a schematic this version of Bloxd can read.");
+       const Wr = (Zr >= Ur ? Nr : mr).decode(ar.Dp.from(rr.subarray(4)), 0).value;
+       if (!Wr) throw new Error("The file isn't a schematic.");
+       if (0 === Wr.chunkData.length) throw new Error("The schematic has no blocks in it.");
+       const Ir = null !== (Qr = Wr.pasteOffset) && void 0 !== Qr ? Qr : {
+           x: 0,
+           y: 0,
+           z: 0
+         },
+         fr = [Ir.x, Ir.y, Ir.z].map((rr => Math.floor(rr / Yr))),
+         Er = Wr.chunkData.map((rr => ({
+           x: rr.x + fr[0],
+ ... (57 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L724-L731` → after: `L257-L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L257-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/271.js#L257-L261) · [Before (L724-L731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/271.js#L724-L731)

```diff
-     var lR = GR(53852);
-     class pR extends MR {
-       constructor(RR, JR, GR) {
-         super(RR, JR, GR || new lR.d(RR, JR.engine))
-       }
-       getClassName() {
-         return "FrameGraphPassTask"
-       }
+ 
+     function yr(rr) {
+       if (0 === rr) return !0;
+       const Sr = fr.j[rr];
+       return void 0 === Sr || Sr.HN || Sr.transTex || !1 === Sr.solid
```

#### 15. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L733-L743` → after: `L263-L272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L263-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/271.js#L263-L272) · [Before (L733-L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/271.js#L733-L743)

```diff
-     var gR = GR(41612),
-       bR = GR(41701),
-       vR = GR(41659),
-       OR = GR(41773),
-       xR = GR(38331);
-     class NR {
-       getRenderCamera(RR) {
-         if (this._renderCamera) return this._renderCamera;
-         {
-           let JR;
-           return JR = this.originalScene.activeCameras && this.originalScene.activeCameras.length > 1 ? this.originalScene.activeCameras[this.originalScene.activeCameras.length - 1] : this.originalScene.activeCamera, RR && JR && JR.isRigCamera ? JR.rigParent : JR
+ 
+     function Br(rr) {
+       let Sr = 1 / 0,
+         Qr = -1 / 0,
+         Zr = 1 / 0,
+         Wr = -1 / 0;
+       for (const {
+           chunkX: Ur,
+           chunkZ: tr,
+           heights: hr
```

#### 16. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L745-L812` → after: `L274-L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L274-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/271.js#L274-L295) · [Before (L745-L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/271.js#L745-L812)

```diff
-       }
-       setRenderCamera(RR) {
-         this._renderCamera = RR
-       }
-       _getSharedGizmoLight() {
-         return this._sharedGizmoLight || (this._sharedGizmoLight = new OR.b("shared gizmo light", new fR.r(0, 1, 0), this.utilityLayerScene), this._sharedGizmoLight.intensity = 2, this._sharedGizmoLight.groundColor = xR.d.Gray()), this._sharedGizmoLight
-       }
-       static get DefaultUtilityLayer() {
-         return null == NR._DefaultUtilityLayer ? NR._CreateDefaultUtilityLayerFromScene(iR.c.LastCreatedScene) : NR._DefaultUtilityLayer
-       }
-       static _CreateDefaultUtilityLayerFromScene(RR) {
-         return NR._DefaultUtilityLayer = new NR(RR), NR._DefaultUtilityLayer.originalScene.YH.addOnce((() => {
-           NR._DefaultUtilityLayer = null
-         })), NR._DefaultUtilityLayer
-       }
-       static get DefaultKeepDepthUtilityLayer() {
- ... (52 more removed lines; see GitHub link above)
+         of rr) hr.forEach(((rr, ar) => {
+         if (rr === nr) return;
+         const jr = Ur * Yr + ar % Yr,
+           Ir = tr * Yr + Math.floor(ar / Yr);
+         Sr = Math.min(Sr, jr), Qr = Math.max(Qr, jr), Zr = Math.min(Zr, Ir), Wr = Math.max(Wr, Ir)
+       }));
+       const ar = Qr - Sr + 1,
+         jr = Wr - Zr + 1,
+         Ir = Math.max(1, Math.ceil(ar / zr), Math.ceil(jr / zr)),
+         fr = Math.ceil(ar / Ir),
+         Er = Math.ceil(jr / Ir),
+         pr = document.createElement("canvas");
+       pr.width = fr, pr.height = Er;
+       const xr = pr.getContext("2d");
+       if (!xr) throw new Error("Couldn't draw the schematic from above.");
+       const mr = xr.createImageData(fr, Er),
+ ... (6 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L814-L819` → after: `L297-L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L297-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/271.js#L297-L308) · [Before (L814-L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/271.js#L814-L819)

```diff
-       }
-       dispose() {
-         this.onPointerOutObservable.clear(), this._afterRenderObserver && this.originalScene.onAfterRenderCameraObservable.remove(this._afterRenderObserver), this._sceneDisposeObserver && this.originalScene.YH.remove(this._sceneDisposeObserver), this._originalPointerObserver && t … [truncated]
-       }
-       _updateCamera() {
-         this.utilityLayerScene.cameraToUseForPointers = this.getRenderCamera(), this.utilityLayerScene.activeCamera = this.getRenderCamera()
+         of rr) hr.forEach(((rr, Sr) => {
+         const Wr = Ur * Yr + Sr % Yr,
+           ar = tr * Yr + Math.floor(Sr / Yr),
+           jr = Math.floor((ar - Zr) / Ir) * fr + Math.floor((Qr - Wr) / Ir);
+         rr === nr || rr <= Nr[jr] || (Nr[jr] = rr, mr.data.set(zr.subarray(3 * Sr, 3 * Sr + 3), 4 * jr), mr.data[4 * jr + 3] = 255)
+       }));
+       return xr.putImageData(mr, 0, 0), {
+         maxX: Qr,
+         minZ: Zr,
+         width: fr * Ir,
+         depth: Er * Ir,
+         canvas: pr
```

#### 18. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L847-L910` → after: `L312-L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L312-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/271.js#L312-L314) · [Before (L847-L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/271.js#L847-L910)

```diff
-     function oR(RR, JR, GR, yR) {
-       let tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
-         uR = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         ZR = arguments.length > 6 ? arguments[6] : void 0,
-         qR = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
-         iR = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
-       const {
-         height: fR,
-         width: VR
-       } = SR(RR, JR, GR);
-       if (!fR || !VR) return void wR.c.Error("Invalid 'size' parameter !");
-       const KR = JR.jH();
-       let eR = KR.activeCamera !== JR;
-       if (KR.frameGraph) {
-         const RR = DR.FindMainObjectRenderer(KR.frameGraph);
-         RR && (eR = RR.camera !== JR)
- ... (48 more removed lines; see GitHub link above)
+     function Tr() {
+       return new Promise((rr => {
+         setTimeout(rr, 0)
```

#### 19. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L913-L930` → after: `L317-L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L317-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/271.js#L317-L323) · [Before (L913-L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/271.js#L913-L930)

```diff
- 
-     function IR(RR, JR, uR, ZR) {
-       let qR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
-         iR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
-         fR = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-         VR = arguments.length > 7 ? arguments[7] : void 0,
-         rR = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
-         nR = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
-         UR = !(arguments.length > 10 && void 0 !== arguments[10]) || arguments[10],
-         WR = arguments.length > 11 ? arguments[11] : void 0,
-         AR = arguments.length > 12 ? arguments[12] : void 0,
-         CR = arguments.length > 13 ? arguments[13] : void 0,
-         XR = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 3e4,
-         MR = arguments.length > 15 ? arguments[15] : void 0;
-       const BR = JR.jH();
-       if (BR.frameGraph) return void zR(BR.frameGraph, JR, uR, qR, iR, fR, VR, WR, CR, !ZR).then((RR => {
- ... (2 more removed lines; see GitHub link above)
+   },
+   41093: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       e: () => Wr
+     });
+     var Zr = Qr(41096);
+     async function Wr() {
```

#### 20. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L932-L1003` → after: `L325-L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L325-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/271.js#L325-L327) · [Before (L932-L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/271.js#L932-L1003)

```diff
-         height: lR,
-         width: pR,
-         finalWidth: gR,
-         finalHeight: bR
-       } = SR(RR, JR, uR), vR = {
-         width: pR,
-         height: lR
-       };
-       if (!lR || !pR) return void wR.c.Error("Invalid 'size' parameter !");
-       RR.skipFrameRender = !0;
-       const OR = RR.getRenderWidth,
-         xR = RR.getRenderHeight;
-       RR.getRenderWidth = function() {
-         return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && RR._currentRenderTarget ? RR._currentRenderTarget.width : pR
-       }, RR.getRenderHeight = function() {
-         return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && RR._currentRenderTarget ? RR._currentRenderTarget.height : lR
- ... (56 more removed lines; see GitHub link above)
+         averageColors: rr
+       } = await Qr.e(235).then((() => Qr(35587)));
+       return new Zr.e(rr)
```

#### 21. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L1005-L1077` → after: `L329-L359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L329-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/271.js#L329-L359) · [Before (L1005-L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/271.js#L1005-L1077)

```diff
-     async function zR(RR, JR, GR) {
-       let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
-         tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
-         uR = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         ZR = arguments.length > 6 ? arguments[6] : void 0,
-         qR = arguments.length > 7 ? arguments[7] : void 0,
-         iR = arguments.length > 8 ? arguments[8] : void 0,
-         fR = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
-         VR = arguments.length > 10 ? arguments[10] : void 0;
-       const KR = RR.engine,
-         wR = RR.textureManager,
-         {
-           height: rR,
-           width: aR,
-           finalWidth: LR,
-           finalHeight: UR
- ... (57 more removed lines; see GitHub link above)
+   },
+   41096: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       e: () => Ir,
+       h: () => jr
+     });
+     var Zr = Qr(5779);
+     const Wr = {
+         Water: [63, 118, 228],
+         Lava: [232, 110, 30]
+       },
+       ar = [150, 150, 150],
+       jr = -2147483648;
+     class Ir {
+       constructor(rr) {
+         this.averages = rr, this.byId = new Map
+ ... (15 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L1079-L1108` → after: `L361-L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L361-L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/271.js#L361-L367) · [Before (L1079-L1108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/271.js#L1079-L1108)

```diff
-       const bR = DR.FindMainObjectRenderer(RR);
-       let vR = null;
-       bR && (vR = bR.camera, bR.camera = JR), KR.getCaps().parallelShaderCompile = void 0, await RR.buildAsync();
-       const OR = VR ?? (wR.hasHistoryTextures ? 32 : 1);
-       for (let eR = 0; eR < OR; ++eR) RR.execute();
-       RR.pausedExecution = !0, KR.getCaps().parallelShaderCompile = lR;
-       for (let eR = XR; eR < CR.length; ++eR) RR.tasks[eR].dispose();
-       RR.tasks.length = XR, bR && vR && (bR.camera = vR);
-       const xR = RR.textureManager.getTextureFromHandle(gR);
-       return xR.incrementReferences(), wR.resetBackBufferTextures(), await RR.buildAsync(), RR.pausedExecution = MR, new Promise((RR => {
-         KR._readTexturePixels(xR, LR, UR, -1, 0, null, !0, !1, 0, 0).then((async JR => {
-           xR.dispose(), AR(LR, UR, JR, fR ? void 0 : JR => RR(JR), yR, ZR, !0, void 0, qR), fR && RR(null)
-         }))
-       }))
-     }
- 
- ... (14 more removed lines; see GitHub link above)
+       drawPixel(rr, Sr, Qr, Zr, Wr, ar) {
+         const Ir = function(rr, Sr, Qr) {
+             const Zr = rr - Sr + (rr - Qr);
+             return Math.max(.65, Math.min(1.2, .97 + .055 * Zr))
+           }(Zr, Wr === jr ? Zr : Wr, ar === jr ? Zr : ar),
+           fr = this.get(Qr);
+         rr[Sr] = fr[0] * Ir, rr[Sr + 1] = fr[1] * Ir, rr[Sr + 2] = fr[2] * Ir, rr[Sr + 3] = 255
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/272.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/272.js` (24 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf)

#### 1. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/272.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/272.js#L2)

```diff
- export const ids = [272];
+ export const ids = [272, 273];
```

#### 2. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/272.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/272.js#L4)

```diff
-   38928: (RR, JR, GR) => {
+   42090: (rr, Sr, Qr) => {
```

#### 3. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/272.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/272.js#L6)

```diff
-       e: () => tR
+       c: () => pr,
+       f: () => mr
```

#### 4. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L8` → after: `L9-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L9-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/272.js#L9-L102) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/272.js#L8)

```diff
-     var yR = GR(38933);
+     var Zr = Qr(41872),
+       Wr = Qr(41875),
+       ar = Qr(38560),
+       jr = Qr(38684),
+       Ir = Qr(42094),
+       fr = Qr(42060),
+       Er = Qr(38609);
+     let pr = (() => {
+         var rr;
+         let Sr, Qr, fr = Ir.c,
+           Er = [],
+           pr = [],
+           xr = [],
+           mr = [];
+         return rr = class extends fr {
+           constructor(rr, Sr, Qr, Wr) {
+ ... (78 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L12` → after: `L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/272.js#L106) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/272.js#L12)

```diff
-         for (let GR = 0; GR < 6; GR++) JR.push(new yR.c(0, 0, 0, 0));
+         for (let Qr = 0; Qr < 6; Qr++) Sr.push(new Zr.d(0, 0, 0, 0));
```

#### 6. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L49` → after: `L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/272.js#L143) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/272.js#L49)

```diff
-   38933: (RR, JR, GR) => {
+   39264: (rr, Sr, Qr) => {
```

#### 7. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L51` → after: `L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/272.js#L145) · [Before (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/272.js#L51)

```diff
-       c: () => tR
+       d: () => Wr
```

#### 8. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L53` → after: `L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/272.js#L147) · [Before (L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/272.js#L53)

```diff
-     var yR = GR(38204);
+     var Zr = Qr(38560);
```

#### 9. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L56` → after: `L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/272.js#L150) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/272.js#L56)

```diff
-         this.normal = new yR.r(RR, JR, GR), this.d = tR
+         this.normal = new Zr.u(rr, Sr, Qr), this.d = Wr
```

#### 10. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L58` → after: `L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/272.js#L152) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/272.js#L58)

```diff
-       QtR() {
+       OWr() {
```

#### 11. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L105` → after: `L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/272.js#L199) · [Before (L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/272.js#L105)

```diff
-         return rR = 0 !== wR ? 1 / wR : 0, this.normal.x = fR * rR, this.normal.y = VR * rR, this.normal.z = KR * rR, this.d = -(this.normal.x * RR.x + this.normal.y * RR.y + this.normal.z * RR.z), this
+         return Nr = 0 !== mr ? 1 / mr : 0, this.normal.x = Er * Nr, this.normal.y = pr * Nr, this.normal.z = xr * Nr, this.d = -(this.normal.x * rr.x + this.normal.y * rr.y + this.normal.z * rr.z), this
```

#### 12. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L108` → after: `L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/272.js#L202) · [Before (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/272.js#L108)

```diff
-         return yR.r.Dot(this.normal, RR) <= JR
+         return Zr.u.Dot(this.normal, rr) <= Sr
```

#### 13. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L111` → after: `L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/272.js#L205) · [Before (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/272.js#L111)

```diff
-         return yR.r.Dot(RR, this.normal) + this.d
+         return Zr.u.Dot(rr, this.normal) + this.d
```

#### 14. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L125` → after: `L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/272.js#L219) · [Before (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/272.js#L125)

```diff
-         return GR.normal.vN(JR), GR.normal.normalize(), GR.d = -RR.dot(GR.normal), GR
+         return Qr.normal.iH(Sr), Qr.normal.normalize(), Qr.d = -rr.dot(Qr.normal), Qr
```

#### 15. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L129` → after: `L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/272.js#L223) · [Before (L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/272.js#L129)

```diff
-         return yR.r.Dot(GR, JR) + tR
+         return Zr.u.Dot(Qr, Sr) + Wr
```

#### 16. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L132` → after: `L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/272.js#L226) · [Before (L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/272.js#L132)

```diff
-     tR._TmpMatrix = yR.e.Identity()
+     Wr._TmpMatrix = Zr.d.Identity()
```

#### 17. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L134` → after: `L228-L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L228-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/272.js#L228-L247) · [Before (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/272.js#L134)

```diff
-   39912: (RR, JR, GR) => {
+   39607: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       d: () => Zr
+     });
+     class Zr {
+       constructor(rr, Sr, Qr, Zr) {
+         this.x = rr, this.y = Sr, this.width = Qr, this.height = Zr
+       }
+       toGlobal(rr, Sr) {
+         return new Zr(this.x * rr, this.y * Sr, this.width * rr, this.height * Sr)
+       }
+       toGlobalToRef(rr, Sr, Qr) {
+         return Qr.x = this.x * rr, Qr.y = this.y * Sr, Qr.width = this.width * rr, Qr.height = this.height * Sr, this
+       }
+       clone() {
+         return new Zr(this.x, this.y, this.width, this.height)
+ ... (4 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L138` → after: `L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/272.js#L251) · [Before (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/272.js#L138)

```diff
-     var yR = GR(39914);
+     var Zr = Qr(40246);
```

#### 19. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L177` → after: `L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/272.js#L290) · [Before (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/272.js#L177)

```diff
-   39062: (RR, JR, GR) => {
+   39405: (rr, Sr, Qr) => {
```

#### 20. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L181` → after: `L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/272.js#L294) · [Before (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/272.js#L181)

```diff
-         return ("x" === RR ? JR : 3 & JR | 8).toString(16)
+         return ("x" === rr ? Sr : 3 & Sr | 8).toString(16)
```

#### 21. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L185` → after: `L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/272.js#L298) · [Before (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/272.js#L185)

```diff
-       c: () => yR
+       b: () => Zr
```

#### 22. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L188` → after: `L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/272.js#L301) · [Before (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/272.js#L188)

```diff
-   39914: (RR, JR, GR) => {
+   40246: (rr, Sr, Qr) => {
```

#### 23. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L211` → after: `L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/272.js#L324) · [Before (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/272.js#L211)

```diff
-         const JR = RR => RR < 10 ? "0" + RR : "" + RR,
+         const Sr = rr => rr < 10 ? "0" + rr : "" + rr,
```

#### 24. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L226` → after: `L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/272.js#L339) · [Before (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/272.js#L226)

```diff
-         const iR = `<div style='color:${ZR.color}'>${uR}</div><br>`;
+         const fr = `<div style='color:${jr.color}'>${ar}</div><br>`;
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/273.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/273.js` (17 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325)

#### 1. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/273.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/273.js#L2)

```diff
- export const ids = [272, 273];
+ export const ids = [273];
```

#### 2. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L4-L20` → after: `L4-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/273.js#L4-L8) · [Before (L4-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/273.js#L4-L20)

```diff
-   64138: (RR, JR, GR) => {
-     GR.r(JR), GR.d(JR, {
-       RegisterShaderMaterial: () => yR.c,
-       ShaderMaterial: () => yR.q,
-       ShaderMaterialCreateFromSnippetAsync: () => yR.g,
-       ShaderMaterialParse: () => yR.o,
-       ShaderMaterialParseFromFileAsync: () => yR.h,
-       ShaderMaterialParseFromSnippetAsync: () => yR.k
-     });
-     var yR = GR(42005);
-     (0, yR.c)()
-   },
-   38928: (RR, JR, GR) => {
-     GR.d(JR, {
-       e: () => tR
-     });
- ... (1 more removed lines; see GitHub link above)
+   39262: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       b: () => Wr
+     });
+     var Zr = Qr(39264);
```

#### 3. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L24` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/273.js#L12) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/273.js#L24)

```diff
-         for (let GR = 0; GR < 6; GR++) JR.push(new yR.c(0, 0, 0, 0));
+         for (let Qr = 0; Qr < 6; Qr++) Sr.push(new Zr.d(0, 0, 0, 0));
```

#### 4. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L61-L65` → after: `L49-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L49-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/273.js#L49-L53) · [Before (L61-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/273.js#L61-L65)

```diff
-   38933: (RR, JR, GR) => {
-     GR.d(JR, {
-       c: () => tR
-     });
-     var yR = GR(38204);
+   39264: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       d: () => Wr
+     });
+     var Zr = Qr(38560);
```

#### 5. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L68-L70` → after: `L56-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/273.js#L56-L58) · [Before (L68-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/273.js#L68-L70)

```diff
-         this.normal = new yR.r(RR, JR, GR), this.d = tR
-       }
-       QtR() {
+         this.normal = new Zr.u(rr, Sr, Qr), this.d = Wr
+       }
+       OWr() {
```

#### 6. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L117` → after: `L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/273.js#L105) · [Before (L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/273.js#L117)

```diff
-         return rR = 0 !== wR ? 1 / wR : 0, this.normal.x = fR * rR, this.normal.y = VR * rR, this.normal.z = KR * rR, this.d = -(this.normal.x * RR.x + this.normal.y * RR.y + this.normal.z * RR.z), this
+         return Nr = 0 !== mr ? 1 / mr : 0, this.normal.x = Er * Nr, this.normal.y = pr * Nr, this.normal.z = xr * Nr, this.d = -(this.normal.x * rr.x + this.normal.y * rr.y + this.normal.z * rr.z), this
```

#### 7. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L120` → after: `L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/273.js#L108) · [Before (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/273.js#L120)

```diff
-         return yR.r.Dot(this.normal, RR) <= JR
+         return Zr.u.Dot(this.normal, rr) <= Sr
```

#### 8. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L123` → after: `L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/273.js#L111) · [Before (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/273.js#L123)

```diff
-         return yR.r.Dot(RR, this.normal) + this.d
+         return Zr.u.Dot(rr, this.normal) + this.d
```

#### 9. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L137` → after: `L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/273.js#L125) · [Before (L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/273.js#L137)

```diff
-         return GR.normal.vN(JR), GR.normal.normalize(), GR.d = -RR.dot(GR.normal), GR
+         return Qr.normal.iH(Sr), Qr.normal.normalize(), Qr.d = -rr.dot(Qr.normal), Qr
```

#### 10. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L141-L146` → after: `L129-L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L129-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/273.js#L129-L134) · [Before (L141-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/273.js#L141-L146)

```diff
-         return yR.r.Dot(GR, JR) + tR
-       }
-     }
-     tR._TmpMatrix = yR.e.Identity()
-   },
-   39912: (RR, JR, GR) => {
+         return Zr.u.Dot(Qr, Sr) + Wr
+       }
+     }
+     Wr._TmpMatrix = Zr.d.Identity()
+   },
+   40237: (rr, Sr, Qr) => {
```

#### 11. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L150` → after: `L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/273.js#L138) · [Before (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/273.js#L150)

```diff
-     var yR = GR(39914);
+     var Zr = Qr(40246);
```

#### 12. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L189` → after: `L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/273.js#L177) · [Before (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/273.js#L189)

```diff
-   39062: (RR, JR, GR) => {
+   39405: (rr, Sr, Qr) => {
```

#### 13. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L193` → after: `L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/273.js#L181) · [Before (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/273.js#L193)

```diff
-         return ("x" === RR ? JR : 3 & JR | 8).toString(16)
+         return ("x" === rr ? Sr : 3 & Sr | 8).toString(16)
```

#### 14. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L197` → after: `L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/273.js#L185) · [Before (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/273.js#L197)

```diff
-       c: () => yR
+       b: () => Zr
```

#### 15. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L200` → after: `L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/273.js#L188) · [Before (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/273.js#L200)

```diff
-   39914: (RR, JR, GR) => {
+   40246: (rr, Sr, Qr) => {
```

#### 16. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L223` → after: `L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/273.js#L211) · [Before (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/273.js#L223)

```diff
-         const JR = RR => RR < 10 ? "0" + RR : "" + RR,
+         const Sr = rr => rr < 10 ? "0" + rr : "" + rr,
```

#### 17. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L238` → after: `L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/273.js#L226) · [Before (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/273.js#L238)

```diff
-         const iR = `<div style='color:${ZR.color}'>${uR}</div><br>`;
+         const fr = `<div style='color:${jr.color}'>${ar}</div><br>`;
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/274.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/274.js` (27 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3)

#### 1. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/274.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/274.js#L2)

```diff
- export const ids = [274];
+ export const ids = [273, 274];
```

#### 2. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4` → after: `L4-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/274.js#L4-L16) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/274.js#L4)

```diff
-   39686: (RR, JR, GR) => {
+   64605: (rr, Sr, Qr) => {
+     Qr.r(Sr), Qr.d(Sr, {
+       RegisterShaderMaterial: () => Zr.c,
+       ShaderMaterial: () => Zr.o,
+       ShaderMaterialCreateFromSnippetAsync: () => Zr.d,
+       ShaderMaterialParse: () => Zr.k,
+       ShaderMaterialParseFromFileAsync: () => Zr.h,
+       ShaderMaterialParseFromSnippetAsync: () => Zr.j
+     });
+     var Zr = Qr(42308);
+     (0, Zr.c)()
+   },
+   39262: (rr, Sr, Qr) => {
```

#### 3. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L8-L9` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/274.js#L20) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/274.js#L8-L9)

```diff
-     var yR = GR(39689);
-     const tR = [0, 0, 0];
+     var Zr = Qr(39264);
```

#### 4. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L11-L18` → after: `L22-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L22-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/274.js#L22-L25) · [Before (L11-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/274.js#L11-L18)

```diff
-       constructor(RR) {
-         let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tR;
-         this.pool = RR, this.origin = JR, this.count = 0, this.free = []
-       }
-       take() {
-         var RR;
-         const JR = null !== (RR = this.free.pop()) && void 0 !== RR ? RR : this.count++;
-         return JR >= this.pool.hK && this.pool.grow(Math.max(2 * this.pool.hK, JR + 1)), this.hide(JR), JR
+       static GetPlanes(rr) {
+         const Sr = [];
+         for (let Qr = 0; Qr < 6; Qr++) Sr.push(new Zr.d(0, 0, 0, 0));
+         return Wr.GetPlanesToRef(rr, Sr), Sr
```

#### 5. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L20-L21` → after: `L27-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L27-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/274.js#L27-L29) · [Before (L20-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/274.js#L20-L21)

```diff
-       release(RR) {
-         this.hide(RR), this.free.push(RR)
+       static GetNearPlaneToRef(rr, Sr) {
+         const Qr = rr.m;
+         Sr.normal.x = Qr[3] + Qr[2], Sr.normal.y = Qr[7] + Qr[6], Sr.normal.z = Qr[11] + Qr[10], Sr.d = Qr[15] + Qr[14], Sr.normalize()
```

#### 6. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L23-L29` → after: `L31-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L31-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/274.js#L31-L33) · [Before (L23-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/274.js#L23-L29)

```diff
-       write(RR, JR, GR, tR) {
-         const {
-           records: uR
-         } = this.pool, {
-           origin: ZR
-         } = this, qR = RR * yR.c;
-         uR[qR] = JR - ZR[0], uR[qR + 1] = GR - ZR[1], uR[qR + 2] = tR - ZR[2], uR[qR + yR.f] = 0, this.pool.markDirty(RR)
+       static GetFarPlaneToRef(rr, Sr) {
+         const Qr = rr.m;
+         Sr.normal.x = Qr[3] - Qr[2], Sr.normal.y = Qr[7] - Qr[6], Sr.normal.z = Qr[11] - Qr[10], Sr.d = Qr[15] - Qr[14], Sr.normalize()
```

#### 7. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L31-L32` → after: `L35-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L35-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/274.js#L35-L37) · [Before (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/274.js#L31-L32)

```diff
-       hide(RR) {
-         this.pool.records[RR * yR.c + yR.f] = 1, this.pool.markDirty(RR)
+       static GetLeftPlaneToRef(rr, Sr) {
+         const Qr = rr.m;
+         Sr.normal.x = Qr[3] + Qr[0], Sr.normal.y = Qr[7] + Qr[4], Sr.normal.z = Qr[11] + Qr[8], Sr.d = Qr[15] + Qr[12], Sr.normalize()
```

#### 8. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L34-L35` → after: `L39-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L39-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/274.js#L39-L41) · [Before (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/274.js#L34-L35)

```diff
-       commit() {
-         this.pool.commit(this.count)
+       static GetRightPlaneToRef(rr, Sr) {
+         const Qr = rr.m;
+         Sr.normal.x = Qr[3] - Qr[0], Sr.normal.y = Qr[7] - Qr[4], Sr.normal.z = Qr[11] - Qr[8], Sr.d = Qr[15] - Qr[12], Sr.normalize()
```

#### 9. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L37-L38` → after: `L43-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L43-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/274.js#L43-L45) · [Before (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/274.js#L37-L38)

```diff
-       dispose() {
-         this.pool.dispose()
+       static GetTopPlaneToRef(rr, Sr) {
+         const Qr = rr.m;
+         Sr.normal.x = Qr[3] - Qr[1], Sr.normal.y = Qr[7] - Qr[5], Sr.normal.z = Qr[11] - Qr[9], Sr.d = Qr[15] - Qr[13], Sr.normalize()
```

#### 10. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L40-L43` → after: `L47-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L47-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/274.js#L47-L49) · [Before (L40-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/274.js#L40-L43)

```diff
-     }
-     class ZR {
-       constructor(RR, JR, GR) {
-         this.api = RR, this.model = JR, this.initialCapacity = GR, this.kinds = new Map, this.origin = [0, 0, 0]
+       static GetBottomPlaneToRef(rr, Sr) {
+         const Qr = rr.m;
+         Sr.normal.x = Qr[3] + Qr[1], Sr.normal.y = Qr[7] + Qr[5], Sr.normal.z = Qr[11] + Qr[9], Sr.d = Qr[15] + Qr[13], Sr.normalize()
```

#### 11. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L45-L54` → after: `L51-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/274.js#L51-L52) · [Before (L45-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/274.js#L45-L54)

```diff
-       kindOf(RR) {
-         let JR = this.kinds.get(RR);
-         if (void 0 === JR) {
-           const GR = this.api.createInstancePool({
-             ...this.model,
-             item: RR
-           }, this.initialCapacity);
-           null === GR || void 0 === GR || GR.setOrigin(this.origin[0], this.origin[1], this.origin[2]), JR = GR && new uR(GR, this.origin), this.kinds.set(RR, JR)
-         }
-         return JR
+       static GetPlanesToRef(rr, Sr) {
+         Wr.GetNearPlaneToRef(rr, Sr[0]), Wr.GetFarPlaneToRef(rr, Sr[1]), Wr.GetLeftPlaneToRef(rr, Sr[2]), Wr.GetRightPlaneToRef(rr, Sr[3]), Wr.GetTopPlaneToRef(rr, Sr[4]), Wr.GetBottomPlaneToRef(rr, Sr[5])
```

#### 12. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L56-L62` → after: `L54-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L54-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/274.js#L54-L56) · [Before (L56-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/274.js#L56-L62)

```diff
-       follow(RR) {
-         const {
-           origin: JR
-         } = this;
-         if (Math.abs(RR[0] - JR[0]) <= 512 && Math.abs(RR[1] - JR[1]) <= 512 && Math.abs(RR[2] - JR[2]) <= 512) return !1;
-         JR[0] = Math.floor(RR[0]), JR[1] = Math.floor(RR[1]), JR[2] = Math.floor(RR[2]);
-         for (const GR of this.kinds.values()) null === GR || void 0 === GR || GR.pool.setOrigin(JR[0], JR[1], JR[2]);
+       static IsPointInFrustum(rr, Sr) {
+         for (let Qr = 0; Qr < 6; Qr++)
+           if (Sr[Qr].dotCoordinate(rr) < 0) return !1;
```

#### 13. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L74` → after: `L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/274.js#L61) · [Before (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/274.js#L74)

```diff
-   39700: (RR, JR, GR) => {
+   39264: (rr, Sr, Qr) => {
```

#### 14. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L76-L120` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/274.js#L63) · [Before (L76-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/274.js#L76-L120)

```diff
-       c: () => ZR,
-       g: () => qR,
-       i: () => iR
-     });
-     const yR = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
-       tR = [0, 1, 2, 0, 2, 3],
-       uR = [4, 5];
- 
-     function ZR(RR, JR, GR, yR, tR) {
-       for (let ZR = 0; ZR < 6; ZR++) uR.includes(ZR) === tR && fR(RR, JR, GR, yR, ZR)
-     }
- 
-     function qR(RR, JR, GR, yR) {
-       for (let tR = 0; tR < 6; tR++) fR(RR, JR, GR, yR, tR)
-     }
- 
- ... (29 more removed lines; see GitHub link above)
+       d: () => Wr
```

#### 15. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L122-L730` → after: `L65-L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L65-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/274.js#L65-L68) · [Before (L122-L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/274.js#L122-L730)

```diff
-     var yR = GR(66);
-     const tR = [{
-         nameKey: "tierBurner",
-         cost: [],
-         islandRadius: 11.5,
-         machineAllowance: 16,
-         beltAllowance: 64,
-         newDeposits: [],
-         unlocks: [],
-         reward: null
-       }, {
-         nameKey: "tierCurrent",
-         cost: [{
-           item: "Iron Bar",
-           amount: 40
-         }, {
- ... (593 more removed lines; see GitHub link above)
+     var Zr = Qr(38560);
+     class Wr {
+       constructor(rr, Sr, Qr, Wr) {
+         this.normal = new Zr.u(rr, Sr, Qr), this.d = Wr
```

#### 16. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L732-L734` → after: `L70-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L70-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/274.js#L70-L71) · [Before (L732-L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/274.js#L732-L734)

```diff
-       if (RR.endsWith(zR)) {
-         const JR = RR.slice(0, -14);
-         return void 0 !== oR[JR] ? JR : null
+       OWr() {
+         return [this.normal.x, this.normal.y, this.normal.z, this.d]
```

#### 17. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L736-L800` → after: `L73-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L73-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/274.js#L73-L74) · [Before (L736-L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/274.js#L736-L800)

```diff
-       return null
-     }
- 
-     function dR(RR) {
-       return !0 === RR.mobFarm
-     }
- 
-     function ER(RR, JR) {
-       return PR[oR[JR]] * RR.opMs / 1e3
-     }
-     const YR = new Map;
-     const kR = "baf2islands",
-       QR = "baf2islandnew";
- 
-     function FR(RR) {
-       const JR = tR.findIndex((JR => JR.unlocks.includes(RR)));
- ... (49 more removed lines; see GitHub link above)
+       clone() {
+         return new Wr(this.normal.x, this.normal.y, this.normal.z, this.d)
```

#### 18. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L802-L881` → after: `L76-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L76-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/274.js#L76-L77) · [Before (L802-L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/274.js#L802-L881)

```diff
-     }
- 
-     function qJ(RR, JR) {
-       const GR = "number" === typeof RR ? RR : "one" === RR ? 1 : "stack" === RR ? 99 : JR;
-       return Math.min(JR, GR)
-     }
- 
-     function iJ(RR, JR) {
-       const GR = RR => "number" === typeof RR ? RR : "one" === RR ? 1 : 99;
-       return "fill" === RR || "fill" === JR ? "fill" : GR(RR) + GR(JR)
-     }
- 
-     function fJ(RR, JR) {
-       const GR = ZJ(RR),
-         yR = ZJ(JR),
-         tR = GR && yR ? function(RR, JR) {
- ... (64 more removed lines; see GitHub link above)
+       getClassName() {
+         return "Plane"
```

#### 19. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L883-L1143` → after: `L79-L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L79-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/274.js#L79-L81) · [Before (L883-L1143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/274.js#L883-L1143)

```diff
-     }
-     const pJ = "baf2synth",
-       gJ = ["Burner Drill", "Crusher", "Smelter", "Generator", "Press", "Wire Mill", "Alloy Kiln", "Electric Drill", "Assembler", "Tree Cutter", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Crystal Vat", "Recycler", "Crop Harvester", "Condenser", "Centrifuge", "Synthe … [truncated]
-       bJ = ["Raw Porkchop", "Raw Beef", "Raw Mutton", "Raw Venison"],
-       vJ = ["Cooked Porkchop", "Steak", "Cooked Mutton", "Cooked Venison"],
-       OJ = function(RR, JR) {
-         return {
-           input: RR,
-           inputAmount: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
-           output: JR,
-           outputAmount: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
-           bonus: arguments.length > 4 ? arguments[4] : void 0
-         }
-       },
-       xJ = function(RR, JR) {
-         return {
- ... (245 more removed lines; see GitHub link above)
+       getHashCode() {
+         let rr = this.normal.getHashCode();
+         return rr = 397 * rr ^ this.d, rr
```

#### 20. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1145-L1294` → after: `L83-L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L83-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/274.js#L83-L162) · [Before (L1145-L1294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/274.js#L1145-L1294)

```diff
-       return yR
-     }
-     const jJ = new Map;
-     const dJ = new Map;
- 
-     function EJ(RR, JR) {
-       if (null === JR || (GR = JR, !BJ.includes(GR))) return RR;
-       var GR;
-       let yR = dJ.get(JR);
-       return yR || (yR = {
-         ...RR,
-         recipes: [lJ(JR)]
-       }, dJ.set(JR, yR)), yR
-     }
- 
-     function YJ(RR) {
- ... (134 more removed lines; see GitHub link above)
+       normalize() {
+         const rr = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
+         let Sr = 0;
+         return 0 !== rr && (Sr = 1 / rr), this.normal.x *= Sr, this.normal.y *= Sr, this.normal.z *= Sr, this.d *= Sr, this
+       }
+       transform(rr) {
+         const Sr = Wr._TmpMatrix;
+         rr.invertToRef(Sr);
+         const Qr = Sr.m,
+           Zr = this.normal.x,
+           ar = this.normal.y,
+           jr = this.normal.z,
+           Ir = this.d,
+           fr = Zr * Qr[0] + ar * Qr[1] + jr * Qr[2] + Ir * Qr[3],
+           Er = Zr * Qr[4] + ar * Qr[5] + jr * Qr[6] + Ir * Qr[7],
+           pr = Zr * Qr[8] + ar * Qr[9] + jr * Qr[10] + Ir * Qr[11],
+ ... (64 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1710-L2111` → after: `L165-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L165-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/274.js#L165-L183) · [Before (L1710-L2111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/274.js#L1710-L2111)

```diff
-       if (!RR.isBlock(JR) || !ZR && !iR && null === fR) return null;
-       const VR = null !== (GR = Ny[JR]) && void 0 !== GR ? GR : (0, DR.Vb)(JR, null !== (yR = RR.displayName(uR)) && void 0 !== yR ? yR : RR.displayName(JR));
-       if (null !== fR) return {
-         name: VR,
-         detail: `${gy}${fR}`,
-         detailItem: null
-       };
-       const KR = null !== (tR = Oy[JR]) && void 0 !== tR ? tR : qR() ? xy[JR] : void 0;
-       if (iR && void 0 !== KR) return {
-         name: VR,
-         detail: `${gy}${KR}`,
-         detailItem: null
-       };
-       const wR = ZG[JR];
-       if (void 0 !== wR) return {
-         name: VR,
- ... (386 more removed lines; see GitHub link above)
+         for (const Er of Ir) {
+           if ("_" === Er[0] && (!ar || -1 === ar.indexOf(Er))) continue;
+           if (Er.endsWith("Observable")) continue;
+           if (Qr && -1 !== Qr.indexOf(Er)) continue;
+           const Ir = rr[Er],
+             pr = typeof Ir;
+           if ("function" !== pr) try {
+             if ("object" === pr)
+               if (Ir instanceof Uint8Array) Sr[Er] = Uint8Array.from(Ir);
+               else if (Ir instanceof Array) {
+               if (Sr[Er] = [], Ir.length > 0)
+                 if ("object" == typeof Ir[0])
+                   for (let rr = 0; rr < Ir.length; rr++) {
+                     const Qr = Wr(Ir[rr], Sr, jr); - 1 === Sr[Er].indexOf(Qr) && Sr[Er].push(Qr)
+                   } else Sr[Er] = Ir.slice(0)
+             } else Sr[Er] = Wr(Ir, Sr, jr);
+ ... (3 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2113-L2318` → after: `L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/274.js#L185) · [Before (L2113-L2318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/274.js#L2113-L2318)

```diff
-         } return GR
-     }
- 
-     function dt(RR) {
-       const JR = RR.findIndex((RR => !RR.done && !RR.away));
-       return JR >= 0 ? JR : RR.findIndex((RR => !RR.done))
-     }
- 
-     function Et(RR, JR) {
-       let [GR, yR, tR, uR, ZR, qR, iR, fR, VR, KR] = RR;
-       return {
-         id: JR,
-         key: GR,
-         params: yR,
-         item: tR,
-         amount: uR,
- ... (190 more removed lines; see GitHub link above)
+         }
```

#### 23. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2368-L2463` → after: `L188-L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L188-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/274.js#L188-L189) · [Before (L2368-L2463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/274.js#L2368-L2463)

```diff
- 
-     function Lu(RR, JR) {
-       const GR = Math.max(1, Math.round(JR));
-       if (GR < 60) return RR("buildAFactory2Game:durationSeconds", {
-         seconds: String(GR)
-       });
-       const yR = Math.round(GR / 60);
-       if (yR < 60) return RR("buildAFactory2Game:durationMinutes", {
-         minutes: String(yR)
-       });
-       const tR = String(Math.floor(yR / 60));
-       return yR % 60 === 0 ? RR("buildAFactory2Game:durationWholeHours", {
-         hours: tR
-       }) : RR("buildAFactory2Game:durationHours", {
-         hours: tR,
-         minutes: String(yR % 60)
- ... (80 more removed lines; see GitHub link above)
+   },
+   39405: (rr, Sr, Qr) => {
```

#### 24. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2465-L2581` → after: `L191-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L191-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/274.js#L191-L193) · [Before (L2465-L2581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/274.js#L2465-L2581)

```diff
-       const {
-         t: RR
-       } = (0, lt.A)(), JR = (0, yR.useContext)(Bu);
-       return (0, yR.useEffect)((() => null === JR || void 0 === JR ? void 0 : JR()), [JR]), (0, Uu.jsx)("span", {
-         className: "Baf2RecipeQuest",
-         role: "img",
-         title: RR("buildAFactory2Game:recipeForQuest"),
-         "aria-label": RR("buildAFactory2Game:recipeForQuest"),
-         children: "!"
-       })
-     }
- 
-     function pu(RR) {
-       let {
-         title: JR,
-         count: GR,
- ... (101 more removed lines; see GitHub link above)
+       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (rr => {
+         const Sr = 16 * Math.random() | 0;
+         return ("x" === rr ? Sr : 3 & Sr | 8).toString(16)
```

#### 25. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2584-L3316` → after: `L196-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L196-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/274.js#L196-L203) · [Before (L2584-L3316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/274.js#L2584-L3316)

```diff
- 
-     function Pu(RR, JR, GR) {
-       const yR = wR(RR, JR);
-       if ("hidden" === yR || "open" === yR) return null;
-       if ("teaser" === yR) return {
-         tag: {
-           translationKey: `${gu}${GR?"craftLockAtomicTeaserShort":"craftLockAtomicTeaser"}`
-         },
-         reason: {
-           translationKey: `${gu}recipeLockedAtomicTeaser`
-         },
-         hideIngredients: !0
-       };
-       const tR = rR(RR, {
-           tier: GR ? "craftLockTierShort" : "craftLockTier",
-           stage: "craftLockStage",
- ... (717 more removed lines; see GitHub link above)
+     Qr.d(Sr, {
+       b: () => Zr
+     })
+   },
+   40246: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       c: () => Zr
+     });
```

#### 26. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3318-L3331` → after: `L205-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L205-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/274.js#L205-L254) · [Before (L3318-L3331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/274.js#L3318-L3331)

```diff
-       constructor() {
-         this.message = null, this.listeners = new Set
-       }
-       set(RR) {
-         this.message = RR;
-         for (const JR of this.listeners) JR()
-       }
-       get() {
-         return this.message
-       }
-       subscribe(RR) {
-         return this.listeners.add(RR), () => {
-           this.listeners.delete(RR)
-         }
+       static _CheckLimit(rr, Sr) {
+         let Qr = Zr._LogLimitOutputs[rr];
+         return Qr ? Qr.current++ : (Qr = {
+           limit: Sr,
+           current: 1
+         }, Zr._LogLimitOutputs[rr] = Qr), Qr.current <= Qr.limit
+       }
+       static _GenerateLimitMessage(rr) {
+         let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         const Qr = Zr._LogLimitOutputs[rr];
+         if (!Qr || !Zr.MessageLimitReached) return;
+         const Wr = this._Levels[Sr];
+         Qr.current === Qr.limit && Zr[Wr.name](Zr.MessageLimitReached.replace(/%LIMIT%/g, "" + Qr.limit).replace(/%TYPE%/g, Wr.name ?? ""))
+       }
+       static _AddLogEntry(rr) {
+         Zr._LogCache = rr + Zr._LogCache, Zr.OnNewCacheEntry && Zr.OnNewCacheEntry(rr)
+ ... (34 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3334-L17838` → after: `L257-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L257-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/274.js#L257-L269) · [Before (L3334-L17838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/274.js#L3334-L17838)

```diff
-     class nZ extends LZ {}
- 
-     function UZ(RR, JR) {
-       const GR = () => {
-           const GR = RR.get();
-           if (!GR || !JR) return GR;
-           const [yR, tR, uR] = GR.baf2PowerAt;
-           return yR === JR[0] && tR === JR[1] && uR === JR[2] ? GR : null
-         },
-         [tR, uR] = (0, yR.useState)(GR);
-       return (0, yR.useEffect)((() => (uR(GR()), RR.subscribe((() => {
-         uR(GR())
-       })))), [RR, ...null !== JR && void 0 !== JR ? JR : []]), tR
-     }
- 
-     function WZ(RR) {
- ... (14489 more removed lines; see GitHub link above)
+     Zr.NoneLogLevel = 0, Zr.MessageLogLevel = 1, Zr.WarningLogLevel = 2, Zr.ErrorLogLevel = 4, Zr.AllLogLevel = 7, Zr.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Zr._LogCache = "", Zr._LogLimitOutputs = {}, Zr._Levels =  … [truncated]
+       color: "white",
+       logFunc: console.log,
+       name: "Log"
+     }, {
+       color: "orange",
+       logFunc: console.warn,
+       name: "Warn"
+     }, {}, {
+       color: "red",
+       logFunc: console.error,
+       name: "Error"
+     }], Zr.errorsCount = 0, Zr.Log = Zr._LogEnabled.bind(Zr, Zr.MessageLogLevel), Zr.Warn = Zr._LogEnabled.bind(Zr, Zr.WarningLogLevel), Zr.Error = Zr._LogEnabled.bind(Zr, Zr.ErrorLogLevel)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/275.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/275.js` (25 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a)

#### 1. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L4` → after: `L4-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L4-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/275.js#L4-L118) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/275.js#L4)

```diff
-   53297: (RR, JR, GR) => {
+   40027: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       c: () => jr
+     });
+     var Zr = Qr(40031);
+     const Wr = [0, 0, 0];
+     class ar {
+       constructor(rr) {
+         let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Wr;
+         this.pool = rr, this.origin = Sr, this.count = 0, this.free = []
+       }
+       take() {
+         var rr;
+         const Sr = null !== (rr = this.free.pop()) && void 0 !== rr ? rr : this.count++;
+         return Sr >= this.pool.sx && this.pool.grow(Math.max(2 * this.pool.sx, Sr + 1)), this.hide(Sr), Sr
+       }
+ ... (99 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L6` → after: `L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/275.js#L120) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/275.js#L6)

```diff
-       PostMatchPodium: () => UR
+       default: () => pY
```

#### 3. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L8-L24` → after: `L122-L15977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L122-L15977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/275.js#L122-L15977) · [Before (L8-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/275.js#L8-L24)

```diff
-     var yR = GR(66),
-       tR = GR(1163),
-       uR = GR.n(tR),
-       ZR = GR(35193),
-       qR = GR(53299),
-       iR = GR(53305),
-       fR = GR(2173),
-       VR = GR(2105),
-       KR = GR(1270),
-       wR = GR(37803),
-       rR = GR(1378);
-     const eR = [1, 0, 2],
-       aR = [.26, .17, .1],
-       LR = [.78, .7, .7];
- 
-     function nR(RR) {
- ... (1 more removed lines; see GitHub link above)
+     var Zr = Qr(72);
+     const Wr = [{
+         nameKey: "tierBurner",
+         cost: [],
+         islandRadius: 11.5,
+         machineAllowance: 16,
+         beltAllowance: 64,
+         newDeposits: [],
+         unlocks: [],
+         reward: null
+       }, {
+         nameKey: "tierCurrent",
+         cost: [{
+           item: "Iron Bar",
+           amount: 40
+         }, {
+ ... (15840 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L28` → after: `L16249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR16249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L16249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/275.js#L16249) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/275.js#L28)

```diff
-         view: JR
+         store: Wr
```

#### 5. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L30-L51` → after: `L16251-L16276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR16251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L16251-L16276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/275.js#L16251-L16276) · [Before (L30-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/275.js#L30-L51)

```diff
-       const GR = (0, fR.i)("players"),
-         tR = (0, yR.useRef)(null),
-         uR = eR.filter((RR => RR < JR.podium.length)),
-         ZR = (0, yR.useMemo)((() => uR.map((RR => {
-           const yR = JR.podium[RR];
-           return {
-             cosmetics: (0, wR.u)(yR, GR.byId),
-             size: LR[RR],
-             gC: null,
-             animation: qR.g,
-             lift: aR[RR]
-           }
-         }))), [JR.fK]),
-         VR = (0, yR.useMemo)((() => ({
-           figures: ZR,
-           shown: ZR.map((() => !0))
- ... (6 more removed lines; see GitHub link above)
+       const {
+         t: ar
+       } = (0, TW.E)(), [jr, Ir] = (0, Zr.useState)((() => Wr.get()));
+       (0, Zr.useEffect)((() => (Ir(Wr.get()), Wr.subscribe((() => {
+         Ir(Wr.get())
+       })))), [Wr]);
+       const {
+         openInGameMenuName: fr,
+         openEverythingMenuName: Er,
+         isTouchScreen: pr
+       } = (0, zW.n)(["openInGameMenuName", "openEverythingMenuName", "isTouchScreen"]), {
+         info: xr,
+         tool: mr,
+         live: Nr,
+         wrench: Ur,
+         atomic: tr
+ ... (10 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L53-L61` → after: `L16278-L16324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR16278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L16278-L16324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/275.js#L16278-L16324) · [Before (L53-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/275.js#L53-L61)

```diff
-           className: "PostMatchPodiumFigures MobPreview",
-           ref: tR
-         }), (0, rR.jsx)("div", {
-           className: "PostMatchPodiumSteps",
-           children: uR.map((RR => (0, rR.jsx)(WR, {
-             view: JR,
-             row: JR.podium[RR],
-             place: RR
-           }, RR)))
+           className: "Baf2LookTargetName SmallTextBold",
+           children: ar(xr.name)
+         }), null !== jr.plan && (0, za.jsx)("div", {
+           className: "Baf2LookTargetDetail",
+           children: ar(jr.plan.key, {
+             kind: ar(jr.plan.kindKey),
+             w: String(jr.plan.w),
+             h: String(jr.plan.h),
+             d: String(jr.plan.d),
+             count: String(jr.plan.count)
+           })
+         }), void 0 !== (null === (Qr = jr.plan) || void 0 === Qr ? void 0 : Qr.why) && (0, za.jsx)("div", {
+           className: "Baf2LookTargetDetail Warning",
+           children: ar(jr.plan.why)
+         }), null !== Ur.mode && (0, za.jsx)("div", {
+           className: "Baf2LookTargetDetail",
+ ... (31 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L67` → after: `L16335-L17150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR16335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L16335-L17150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/275.js#L16335-L17150) · [Before (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/275.js#L67)

```diff
-       var JR;
+       const Sr = [rr];
+       for (let Qr = 1; Qr <= 4; Qr++) Qr > 1 && Sr.push(`${rr}|meta|rot${Qr}`), Sr.push(`${rr}|meta|rot${Qr}|Running`);
+       return Sr
+     }
+ 
+     function Yz(rr, Sr) {
+       return [Math.floor(rr[0] / Sr), Math.floor(rr[1] / Sr), Math.floor(rr[2] / Sr)]
+     }
+ 
+     function nz(rr, Sr, Qr) {
+       return `${rr},${Sr},${Qr}`
+     }
+ 
+     function ez(rr) {
+       const Sr = rr.split("|")[0];
+       if (!EQ(Sr)) return tz;
+ ... (800 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L69-L71` → after: `L17152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR17152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L17152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/275.js#L17152) · [Before (L69-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/275.js#L69-L71)

```diff
-         view: GR,
-         row: yR,
-         place: tR
+         localPlayerId: ar
```

#### 9. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L73-L78` → after: `L17154-L17197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR17154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L17154-L17197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/275.js#L17154-L17197) · [Before (L73-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/275.js#L73-L78)

```diff
-       const {
-         t: ZR
-       } = (0, KR.A)(), qR = (0, wR.n)(GR, yR);
-       return (0, rR.jsx)("div", {
-         className: uR()("PostMatchPodiumStep", `Place-${tR+1}`, {
-           IsLocal: yR.isLocal
+       const jr = new fI,
+         Ir = new rN,
+         Er = new IN,
+         pr = new aN(Er),
+         xr = (rr, Sr) => {
+           Sr ? pr.observe(rr) : pr.unobserve(rr)
+         },
+         mr = new WN,
+         Nr = new EN(xr),
+         Ur = rr => Nr.covers(rr),
+         tr = new lN;
+       let hr;
+       const zr = new Pj((rr => {
+           hr.sendCommand(rr)
+         })),
+         Yr = () => {
+ ... (28 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L80-L82` → after: `L17199-L17267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR17199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L17199-L17267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/275.js#L17199-L17267) · [Before (L80-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/275.js#L80-L82)

```diff
-         style: {
-           "--stepHeight": .151 + aR[tR],
-           "--teamColour": null !== (JR = yR.colour) && void 0 !== JR ? JR : void 0
+         Mr = new gU(Cr),
+         Gr = new GU(Cr),
+         kr = new It(Cr, (rr => function(rr, Sr) {
+           const Qr = cI(Sr.w, Sr.h, Sr.d),
+             Zr = new Uint8Array(Qr);
+           for (let Wr = 0; Wr < Qr; Wr++) {
+             const Qr = XU(rr, sQ(Sr, QZ(Sr, Wr)));
+             Zr[Wr] = null === Qr ? 0 : AI(Qr)
+           }
+           return Zr
+         }(hr, rr)), dU(zr)),
+         Ar = new ft(Cr, dU(zr)),
+         Vr = new Wt,
+         cr = (rr, Sr) => {
+           let [Qr, Zr, Wr] = rr;
+           Vr.answered(Sr) || Kr.show({
+ ... (53 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L84-L104` → after: `L17269-L17711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR17269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L17269-L17711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/275.js#L17269-L17711) · [Before (L84-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/275.js#L84-L104)

```diff
-         children: (0, rR.jsxs)("div", {
-           className: "PostMatchPodiumBlock",
-           children: [(0, rR.jsx)("span", {
-             className: "PostMatchPodiumPlace FullyFancyText",
-             children: tR + 1
-           }), (0, rR.jsx)("span", {
-             className: "PostMatchPodiumName SmallTextBold",
-             children: yR.name
-           }), (yR.isMvp || yR.isSvp) && (0, rR.jsx)("span", {
-             className: uR()("PostMatchTag", yR.isMvp ? "Tag-mvp" : "Tag-svp"),
-             children: ZR(yR.isMvp ? "postMatch:mvp" : "postMatch:svp")
-           }), null !== qR && (0, rR.jsxs)("span", {
-             className: "PostMatchPodiumStat SmallTextBold",
-             children: [(0, rR.jsx)("b", {
-               children: qR.value
-             }), " ", (0, rR.jsx)(VR.c, {
- ... (5 more removed lines; see GitHub link above)
+         nS = [];
+ 
+       function eS(rr) {
+         var Sr, Qr, Zr, Wr, ar, jr, fr;
+         "core" === (null === (Sr = Ir.get()) || void 0 === Sr ? void 0 : Sr.kind) && "core" !== (null === rr || void 0 === rr ? void 0 : rr.kind) && zr.send("baf2coreclose"), "power" === (null === (Qr = Ir.get()) || void 0 === Qr ? void 0 : Qr.kind) && "power" !== (null === rr || … [truncated]
+         const Er = ur.getStatus();
+         "collider" === (null === (jr = Ir.get()) || void 0 === jr ? void 0 : jr.kind) && "collider" !== (null === rr || void 0 === rr ? void 0 : rr.kind) && Er && zr.send(Lf(Er, "close"));
+         const pr = rr => "reactor" === rr || "battery" === rr;
+         if (pr(null === (fr = Ir.get()) || void 0 === fr ? void 0 : fr.kind) && !pr(null === rr || void 0 === rr ? void 0 : rr.kind)) {
+           var xr, mr, Nr;
+           const rr = "reactor" === (null === (xr = Ir.get()) || void 0 === xr ? void 0 : xr.kind) ? null === (mr = kr.get()) || void 0 === mr ? void 0 : mr.status.baf2RxAt : null === (Nr = Ar.get()) || void 0 === Nr ? void 0 : Nr.status.baf2BatAt;
+           rr && zr.send(xS(rr, "close"))
+         }
+         "quests" === (null === rr || void 0 === rr ? void 0 : rr.kind) && Yr(), Ir.set(rr), null === rr && Br.release()
+       }
+ 
+ ... (427 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L107` → after: `L17714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR17714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L17714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/275.js#L17714) · [Before (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/275.js#L107)

```diff
-   53305: (RR, JR, GR) => {
+   39995: (rr, Sr, Qr) => {
```

#### 13. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L109` → after: `L17716-L17717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR17716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L17716-L17717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/275.js#L17716-L17717) · [Before (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/275.js#L109)

```diff
-       d: () => uR
+       d: () => jr,
+       g: () => Ir
```

#### 14. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L111-L112` → after: `L17719-L17726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR17719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L17719-L17726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/275.js#L17719-L17726) · [Before (L111-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/275.js#L111-L112)

```diff
-     var yR = GR(66),
-       tR = GR(3909);
+     var Zr = Qr(379),
+       Wr = Qr(35472),
+       ar = Qr(4489);
+ 
+     function jr(rr) {
+       const Sr = (0, ar.e)(rr);
+       return (0, Zr.Pb)(rr, void 0 === Sr ? void 0 : (0, Wr.displayNameOf)(Sr))
+     }
```

#### 15. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L115-L129` → after: `L17734-L17765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR17734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L17734-L17765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/275.js#L17734-L17765) · [Before (L115-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/275.js#L115-L129)

```diff
-       const uR = (0, yR.useRef)(null),
-         {
-           width: ZR,
-           height: qR
-         } = (0, tR.b)(RR);
-       (0, yR.useEffect)((() => {
-         const GR = JR(RR.current);
-         return uR.current = GR, () => {
-           GR.close(), uR.current = null
-         }
-       }), [RR, JR]), (0, yR.useEffect)((() => {
-         ZR <= 0 || qR <= 0 || uR.current.resize(ZR, qR)
-       }), [ZR, qR]), (0, yR.useEffect)((() => {
-         uR.current.show(GR)
-       }), [GR])
+       const Zr = new Set,
+         Wr = new ResizeObserver(Qr),
+         ar = () => {
+           const Sr = new Set(document.querySelectorAll(rr));
+           let ar = !1;
+           for (const rr of Zr) Sr.has(rr) || (Wr.unobserve(rr), Zr.delete(rr), ar = !0);
+           for (const rr of Sr) Zr.has(rr) || (Wr.observe(rr), jr.observe(rr, {
+             attributes: !0,
+             attributeFilter: ["class", "style"]
+           }), Zr.add(rr));
+           ar && Qr()
+         },
+         jr = new MutationObserver((Sr => {
+           Sr.some((rr => "attributes" === rr.type)) && Qr(), Sr.some((Sr => function(rr, Sr, Qr) {
+             if ("childList" !== rr.type) return !1;
+             for (const Zr of rr.addedNodes)
+ ... (16 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L132` → after: `L17771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR17771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L17771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/275.js#L17771) · [Before (L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/275.js#L132)

```diff
-   53299: (RR, JR, GR) => {
+   40020: (rr, Sr, Qr) => {
```

#### 17. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L134-L136` → after: `L17773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR17773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L17773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/275.js#L17773) · [Before (L134-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/275.js#L134-L136)

```diff
-       b: () => wR,
-       e: () => KR,
-       g: () => iR
+       b: () => Ir
```

#### 18. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L138-L139` → after: `L17775-L17782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR17775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L17775-L17782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/275.js#L17775-L17782) · [Before (L138-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/275.js#L138-L139)

```diff
-     var yR = GR(38275),
-       tR = GR(39862);
+     var Zr = Qr(40013);
+     const Wr = 5,
+       ar = [0, 0, 0],
+       jr = {
+         x: 0,
+         y: 0,
+         distSq: 0
+       };
```

#### 19. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L141` → after: `L17784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR17784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L17784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/275.js#L17784) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/275.js#L141)

```diff
-     function uR(RR, JR) {
+     function Ir(rr, Sr, Qr, Ir, fr, Er) {
```

#### 20. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L143-L149` → after: `L17786-L17790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR17786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L17786-L17790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/275.js#L17786-L17790) · [Before (L143-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/275.js#L143-L149)

```diff
-       return [0, .5, 1].map((RR => ({
-         timeFraction: RR,
-         rotation: {
-           CG: "catmull-rom-spline",
-           point: [GR, yR, tR + (.5 === RR ? JR : 0)]
-         }
-       })))
+       const Nr = (pr + .5 - Qr[0]) ** 2 + (xr - Qr[1]) ** 2 + (mr + .5 - Qr[2]) ** 2;
+       let Ur = null;
+       Nr <= Er ** 2 && (ar[0] = pr + .5, ar[1] = xr + fr, ar[2] = mr + .5, Ur = Sr.projectWorldPosToViewport(ar));
+       const tr = null !== Ur && Ur.x > -Wr && Ur.x < 100 + Wr && Ur.y > -Wr && Ur.y < 100 + Wr;
+       return (0, Zr.f)(rr, !tr), tr ? (jr.x = Ur.x, jr.y = Ur.y, jr.distSq = Nr, jr) : null
```

#### 21. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L152-L182` → after: `L17802-L17811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR17802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L17802-L17811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/275.js#L17802-L17811) · [Before (L152-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/275.js#L152-L182)

```diff
-     function ZR(RR, JR, GR) {
-       return {
-         LG: 3200,
-         loop: !0,
-         UG: {
-           Root: {
-             timeline: [0, .5, 1].map((RR => ({
-               timeFraction: RR,
-               position: {
-                 CG: "catmull-rom-spline",
-                 point: [0, .5 === RR ? .18 : 0, 0]
-               }
-             })))
-           },
-           HeadMesh: {
-             timeline: [0, .25, .75, 1].map((RR => ({
- ... (15 more removed lines; see GitHub link above)
+     function ar() {
+       return (0, Zr.e)(Wr)
+     }
+ 
+     function jr(rr) {
+       return (0, Zr.i)(Wr, rr)
+     }
+ 
+     function Ir() {
+       return (0, Zr.h)(Wr)
```

#### 22. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L191` → after: `L17814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR17814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L17814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/275.js#L17814) · [Before (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/275.js#L191)

```diff
-   39862: (RR, JR, GR) => {
+   40013: (rr, Sr, Qr) => {
```

#### 23. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L193` → after: `L17816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR17816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L17816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/275.js#L17816) · [Before (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/275.js#L193)

```diff
-       c: () => tR,
+       e: () => jr,
```

#### 24. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L199` → after: `L17831-L17832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR17831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L17831-L17832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/275.js#L17831-L17832) · [Before (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/275.js#L199)

```diff
-       return yR.set(RR, JR), RR
+       const Qr = Wr(rr);
+       Qr.hidden !== Sr && (Qr.hidden = Sr, rr.hidden = Sr)
```

#### 25. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L202-L204` → after: `L17835-L17837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR17835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L17835-L17837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/275.js#L17835-L17837) · [Before (L202-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/275.js#L202-L204)

```diff
-     function uR(RR) {
-       var JR;
-       return null !== (JR = yR.get(RR)) && void 0 !== JR ? JR : null
+     function jr(rr, Sr, Qr) {
+       const Zr = Wr(rr);
+       Zr.x === Sr && Zr.y === Qr || (Zr.x = Sr, Zr.y = Qr, rr.style.translate = `${Sr}vw ${Qr}vh`)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/276.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/276.js` (17 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6)

#### 1. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L4-L76` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/276.js#L4-L6) · [Before (L4-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/276.js#L4-L76)

```diff
-   40914: (RR, JR, GR) => {
-     RR.exports = tR;
-     var yR = GR(385);
- 
-     function tR(RR, JR) {
-       if (!(this instanceof tR)) return new tR(RR, JR);
-       var GR = yR.create();
-       yR.add(GR, RR, JR), this.base = yR.min(yR.create(), RR, GR), this.vec = yR.clone(JR), this.max = yR.max(yR.create(), RR, GR), this.mag = yR.length(this.vec)
-     }
-     var uR = tR.prototype;
-     uR.width = function() {
-       return this.vec[0]
-     }, uR.height = function() {
-       return this.vec[1]
-     }, uR.depth = function() {
-       return this.vec[2]
- ... (57 more removed lines; see GitHub link above)
+   53835: (rr, Sr, Qr) => {
+     Qr.r(Sr), Qr.d(Sr, {
+       PostMatchPodium: () => Yr
```

#### 2. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L78-L134` → after: `L8-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L8-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/276.js#L8-L21) · [Before (L78-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/276.js#L78-L134)

```diff
-     var yR = GR(2845);
-     let tR = null;
- 
-     function uR(RR) {
-       return null !== tR && RR === tR
-     }
- 
-     function ZR() {
-       this.sF = !1, this.stopPropagation = !1, this.qT = !1, this.disabled = !1
-     }
-     class qR {
-       constructor(RR, JR) {
-         this.version = "0.7.0";
-         var GR = Object.assign({}, new ZR, JR || {});
-         this.element = RR || document, this.sF = !!GR.sF, this.stopPropagation = !!GR.stopPropagation, this.qT = !!GR.qT, this.disabled = !!GR.disabled, this.filterEvents = (RR, JR) => !0, this.ignoreEvent = RR => !1, this.down = new yR.EventEmitter, this.up = new yR.EventEmitter … [truncated]
-           dx: 0,
- ... (41 more removed lines; see GitHub link above)
+     var Zr = Qr(72),
+       Wr = Qr(1155),
+       ar = Qr.n(Wr),
+       jr = Qr(35505),
+       Ir = Qr(53844),
+       fr = Qr(53849),
+       Er = Qr(2128),
+       pr = Qr(2057),
+       xr = Qr(1251),
+       mr = Qr(38162),
+       Nr = Qr(1338);
+     const Ur = [1, 0, 2],
+       tr = [.26, .17, .1],
+       hr = [.78, .7, .7];
```

#### 3. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L137-L155` → after: `L24-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L24-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/276.js#L24-L64) · [Before (L137-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/276.js#L137-L155)

```diff
-       for (var JR in RR) RR[JR] = 0
-     }
- 
-     function fR(RR) {
-       window.addEventListener("keydown", LR.bind(null, RR, !0), !1), window.addEventListener("keyup", LR.bind(null, RR, !1), !1);
-       var JR = {
-         passive: !0
-       };
-       RR.element.addEventListener("touchstart", rR.bind(void 0, RR), {
-         passive: !1
-       }), RR.element.addEventListener("touchend", aR.bind(void 0, RR), JR), RR.element.addEventListener("mousedown", nR.bind(null, RR, !0), JR), window.document.addEventListener("mouseup", nR.bind(null, RR, !1), JR), RR.element.addEventListener("touchmove", UR.bind(null, RR), JR) … [truncated]
-     }
-     var VR = 0,
-       KR = 0,
-       wR = null;
- 
- ... (3 more removed lines; see GitHub link above)
+       return jr.j.openMobLineup(rr)
+     }
+     const Yr = (0, Zr.memo)((function(rr) {
+       let {
+         view: Sr
+       } = rr;
+       const Qr = (0, Er.j)("players"),
+         Wr = (0, Zr.useRef)(null),
+         ar = Ur.filter((rr => rr < Sr.podium.length)),
+         jr = (0, Zr.useMemo)((() => ar.map((rr => {
+           const Zr = Sr.podium[rr];
+           return {
+             cosmetics: (0, mr.q)(Zr, Qr.byId),
+             size: hr[rr],
+             jB: null,
+             animation: Ir.g,
+ ... (25 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L158-L275` → after: `L67-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L67-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/276.js#L67-L82) · [Before (L158-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/276.js#L158-L275)

```diff
-       let JR = !1;
-       for (let GR = 0; GR < RR.touches.length; ++GR)
-         if (RR.touches[GR].identifier === wR) {
-           JR = !0;
-           break
-         } if (!JR) {
-         const JR = RR.changedTouches[0];
-         VR = JR.clientX, KR = JR.clientY, wR = JR.identifier
-       }
-     }
- 
-     function aR(RR, JR) {
-       for (var GR = JR.changedTouches, yR = 0; yR < GR.length; ++yR) GR[yR].identifier === wR && (wR = null)
-     }
- 
-     function LR(RR, JR, GR) {
- ... (102 more removed lines; see GitHub link above)
+       var Sr;
+       let {
+         view: Qr,
+         row: Zr,
+         place: Wr
+       } = rr;
+       const {
+         t: jr
+       } = (0, xr.E)(), Ir = (0, mr.m)(Qr, Zr);
+       return (0, Nr.jsx)("div", {
+         className: ar()("PostMatchPodiumStep", `Place-${Wr+1}`, {
+           IsLocal: Zr.isLocal
+         }),
+         style: {
+           "--stepHeight": .151 + tr[Wr],
+           "--teamColour": null !== (Sr = Zr.colour) && void 0 !== Sr ? Sr : void 0
```

#### 5. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L277-L306` → after: `L84-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L84-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/276.js#L84-L104) · [Before (L277-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/276.js#L277-L306)

```diff
-         yR = tR;
-       tR = GR;
-       try {
-         pR(JR, !1, RR, GR)
-       } finally {
-         tR = yR
-       }
-     }
- 
-     function pR(RR, JR, GR, yR) {
-       var tR = GR._keyBindmap[RR];
-       tR && (gR(GR._keyStates[RR], JR) && (GR._keyStates[RR] = JR, tR.forEach((RR => {
-         (!GR.filterEvents || GR.filterEvents(yR, RR)) && function(RR, JR, GR, yR) {
-           var tR = JR ? GR.pressCount : GR.releaseCount;
-           tR[RR] = (tR[RR] || 0) + 1;
-           var uR = GR._bindPressCount[RR] || 0;
- ... (14 more removed lines; see GitHub link above)
+         children: (0, Nr.jsxs)("div", {
+           className: "PostMatchPodiumBlock",
+           children: [(0, Nr.jsx)("span", {
+             className: "PostMatchPodiumPlace FullyFancyText",
+             children: Wr + 1
+           }), (0, Nr.jsx)("span", {
+             className: "PostMatchPodiumName SmallTextBold",
+             children: Zr.name
+           }), (Zr.isMvp || Zr.isSvp) && (0, Nr.jsx)("span", {
+             className: ar()("PostMatchTag", Zr.isMvp ? "Tag-mvp" : "Tag-svp"),
+             children: jr(Zr.isMvp ? "postMatch:mvp" : "postMatch:svp")
+           }), null !== Ir && (0, Nr.jsxs)("span", {
+             className: "PostMatchPodiumStat SmallTextBold",
+             children: [(0, Nr.jsx)("b", {
+               children: Ir.value
+             }), " ", (0, Nr.jsx)(pr.c, {
+ ... (5 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L309` → after: `L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/276.js#L107) · [Before (L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/276.js#L309)

```diff
-   40904: (RR, JR, GR) => {
+   53849: (rr, Sr, Qr) => {
```

#### 7. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L313-L391` → after: `L111-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L111-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/276.js#L111-L112) · [Before (L313-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/276.js#L313-L391)

```diff
-     class yR {
-       constructor() {
-         let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
-           JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
-         this.XE = !1, this.lE = !1, this.lH = 30, this.ZE = 0, this.pE = 100, this.un = !1, this.fullscreen = !1, this.UW = function(RR) {}, this.OE = function(RR, JR, GR) {}, this.xK = function() {}, this.iW = function() {}, this.kE = function() {}, this.onFullscreenChanged = fu … [truncated]
-           function(RR) {
-             if ("loading" === document.readyState) {
-               var JR = () => {
-                 document.removeEventListener("readystatechange", JR), RR()
-               };
-               document.addEventListener("readystatechange", JR)
-             } else setTimeout(RR, 0)
-           }((() => {
-             ! function(RR) {
-               var JR = RR._data,
-                 GR = JR.nowObject.now();
- ... (63 more removed lines; see GitHub link above)
+     var Zr = Qr(72),
+       Wr = Qr(3855);
```

#### 8. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L393-L421` → after: `L114-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L114-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/276.js#L114-L129) · [Before (L393-L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/276.js#L393-L421)

```diff
-     function qR(RR) {
-       for (var JR = RR._data, GR = 1e3 / RR.lH, yR = JR.nowObject.now() + ZR, tR = 0; JR.nowObject.now() >= JR.lastTickStarted + GR && JR.nowObject.now() < yR && ++tR <= uR;) RR.UW(GR), JR.lastTickStarted += GR;
-       var qR = 5 * (GR + 5),
-         iR = JR.nowObject.now();
-       if (iR - JR.lastTickStarted > qR)
-         for (; iR >= JR.lastTickStarted + GR;) JR.lastTickStarted += GR
-     }
-   },
-   40231: (RR, JR, GR) => {
-     function yR(RR, JR, GR, yR, tR) {
-       var uR = {};
-       return Object.keys(yR).forEach((function(RR) {
-         uR[RR] = yR[RR]
-       })), uR.enumerable = !!uR.enumerable, uR.configurable = !!uR.configurable, ("value" in uR || uR.initializer) && (uR.writable = !0), uR = GR.slice().reverse().reduce((function(GR, yR) {
-         return yR(RR, JR, GR) || GR
-       }), uR), tR && void 0 !== uR.initializer && (uR.value = uR.initializer ? uR.initializer.call(tR) : void 0, uR.initializer = void 0), void 0 === uR.initializer && (Object.defineProperty(RR, JR, uR), uR = null), uR
- ... (13 more removed lines; see GitHub link above)
+     function ar(rr, Sr, Qr) {
+       const ar = (0, Zr.useRef)(null),
+         {
+           width: jr,
+           height: Ir
+         } = (0, Wr.b)(rr);
+       (0, Zr.useEffect)((() => {
+         const Qr = Sr(rr.current);
+         return ar.current = Qr, () => {
+           Qr.close(), ar.current = null
+         }
+       }), [rr, Sr]), (0, Zr.useEffect)((() => {
+         jr <= 0 || Ir <= 0 || ar.current.resize(jr, Ir)
+       }), [jr, Ir]), (0, Zr.useEffect)((() => {
+         ar.current.show(Qr)
+       }), [Qr])
```

#### 9. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L427` → after: `L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/276.js#L132) · [Before (L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/276.js#L427)

```diff
-   39912: (RR, JR, GR) => {
+   53844: (rr, Sr, Qr) => {
```

#### 10. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L429` → after: `L134-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L134-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/276.js#L134-L136) · [Before (L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/276.js#L429)

```diff
-       b: () => uR
+       b: () => mr,
+       f: () => xr,
+       g: () => fr
```

#### 11. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L431-L465` → after: `L138-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L138-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/276.js#L138-L147) · [Before (L431-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/276.js#L431-L465)

```diff
-     var yR = GR(39914);
-     const tR = (RR, JR, GR) => RR ? RR.getClassName && "Mesh" === RR.getClassName() ? null : !RR.getClassName || "SubMesh" !== RR.getClassName() && "PhysicsBody" !== RR.getClassName() ? RR.clone ? RR.clone() : Array.isArray(RR) ? RR.slice() : GR && "object" === typeof RR ? {
-       ...RR
-     } : null : RR.clone(JR) : null;
-     class uR {
-       static DeepCopy(RR, JR, GR, uR) {
-         let ZR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         const qR = function(RR) {
-           const JR = [];
-           do {
-             const GR = Object.getOwnPropertyNames(RR);
-             for (const RR of GR) - 1 === JR.indexOf(RR) && JR.push(RR)
-           } while (RR = Object.getPrototypeOf(RR));
-           return JR
-         }(RR);
-         for (const fR of qR) {
- ... (19 more removed lines; see GitHub link above)
+     var Zr = Qr(38638),
+       Wr = Qr(40197);
+ 
+     function ar(rr, Sr) {
+       let [Qr, Zr, Wr] = rr;
+       return [0, .5, 1].map((rr => ({
+         timeFraction: rr,
+         rotation: {
+           lQ: "catmull-rom-spline",
+           point: [Qr, Zr, Wr + (.5 === rr ? Sr : 0)]
```

#### 12. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L467-L497` → after: `L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/276.js#L149) · [Before (L467-L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/276.js#L467-L497)

```diff
-       }
-     }
-   },
-   39941: (RR, JR, GR) => {
-     GR.d(JR, {
-       c: () => tR,
-       g: () => uR,
-       k: () => ZR,
-       m: () => qR
-     });
-     var yR = GR(38331);
-     class tR {
-       constructor(RR, JR, GR) {
-         this.gradient = RR, this.color1 = JR, this.color2 = GR
-       }
-       getColorToRef(RR) {
- ... (15 more removed lines; see GitHub link above)
+       })))
```

#### 13. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L499-L506` → after: `L151-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L151-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/276.js#L151-L179) · [Before (L499-L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/276.js#L499-L506)

```diff
-     class qR {
-       static GetCurrentGradient(RR, JR, GR) {
-         if (JR[0].gradient > RR) return void GR(JR[0], JR[0], 1);
-         for (let tR = 0; tR < JR.length - 1; tR++) {
-           const yR = JR[tR],
-             uR = JR[tR + 1];
-           if (RR >= yR.gradient && RR <= uR.gradient) {
-             return void GR(yR, uR, (RR - yR.gradient) / (uR.gradient - yR.gradient))
+ 
+     function jr(rr, Sr, Qr) {
+       return {
+         BQ: 3200,
+         loop: !0,
+         vQ: {
+           Root: {
+             timeline: [0, .5, 1].map((rr => ({
+               timeFraction: rr,
+               position: {
+                 lQ: "catmull-rom-spline",
+                 point: [0, .5 === rr ? .18 : 0, 0]
+               }
+             })))
+           },
+           HeadMesh: {
+ ... (13 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L514` → after: `L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/276.js#L191) · [Before (L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/276.js#L514)

```diff
-   39914: (RR, JR, GR) => {
+   40197: (rr, Sr, Qr) => {
```

#### 15. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L516-L638` → after: `L193-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L193-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/276.js#L193-L194) · [Before (L516-L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/276.js#L516-L638)

```diff
-       c: () => yR
-     });
-     class yR {
-       static _CheckLimit(RR, JR) {
-         let GR = yR._LogLimitOutputs[RR];
-         return GR ? GR.current++ : (GR = {
-           limit: JR,
-           current: 1
-         }, yR._LogLimitOutputs[RR] = GR), GR.current <= GR.limit
-       }
-       static _GenerateLimitMessage(RR) {
-         let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-         const GR = yR._LogLimitOutputs[RR];
-         if (!GR || !yR.MessageLimitReached) return;
-         const tR = this._Levels[JR];
-         GR.current === GR.limit && yR[tR.name](yR.MessageLimitReached.replace(/%LIMIT%/g, "" + GR.limit).replace(/%TYPE%/g, tR.name ?? ""))
- ... (107 more removed lines; see GitHub link above)
+       c: () => Wr,
+       g: () => ar
```

#### 16. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L640-L727` → after: `L196-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L196-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/276.js#L196-L199) · [Before (L640-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/276.js#L640-L727)

```diff
-     var yR = GR(38204),
-       tR = GR(38239),
-       uR = GR(39912);
-     class ZR {
-       constructor() {
-         let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
-           JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
-           GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
-           tR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-         this.radius = RR, this.height = JR, this.radiusRange = GR, this.directionRandomizer = tR, this._tempVector = yR.r.Zero()
-       }
-       startDirectionFunction(RR, JR, GR, uR, ZR) {
-         GR.position.subtractToRef(RR.getTranslation(), this._tempVector), this._tempVector.normalize(), yR.r.TransformNormalToRef(this._tempVector, ZR, this._tempVector);
-         const qR = (0, tR.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
-         let iR = Math.atan2(this._tempVector.x, this._tempVector.z);
-         iR += (0, tR.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = qR, this._tempVector.x = Math.sin(iR), this._tempVector.z = Math.cos(iR), this._tempVector.normalize(), uR ? JR.vN(this._tempVector) : yR.r.TransformNormalFromFloatsToRef … [truncated]
- ... (72 more removed lines; see GitHub link above)
+     const Zr = new WeakMap;
+ 
+     function Wr(rr, Sr) {
+       return Zr.set(rr, Sr), rr
```

#### 17. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L729-L952` → after: `L201-L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L201-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/276.js#L201-L204) · [Before (L729-L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/276.js#L729-L952)

```diff
-   },
-   40027: (RR, JR, GR) => {
-     GR.d(JR, {
-       e: () => KR
-     });
-     const yR = .5 * (Math.sqrt(3) - 1),
-       tR = (3 - Math.sqrt(3)) / 6,
-       uR = 1 / 3,
-       ZR = 1 / 6,
-       qR = (Math.sqrt(5) - 1) / 4,
-       iR = (5 - Math.sqrt(5)) / 20,
-       fR = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
-       VR = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0,  … [truncated]
-     const KR = class {
-       constructor() {
-         let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
- ... (208 more removed lines; see GitHub link above)
+ 
+     function ar(rr) {
+       var Sr;
+       return null !== (Sr = Zr.get(rr)) && void 0 !== Sr ? Sr : null
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/277.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/277.js` (54 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410)

#### 1. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4-L48` → after: `L4-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/277.js#L4-L50) · [Before (L4-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/277.js#L4-L48)

```diff
-   53599: (RR, JR, GR) => {
-     GR.d(JR, {
-       b: () => uR
-     });
-     var yR = GR(41626),
-       tR = GR(53605);
-     class uR {
-       constructor(RR, JR) {
-         let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
-         this.maxDepth = GR, this.uuR = [], this._maxBlockCapacity = JR || 64, this._selectionContent = new yR.d(1024), this._creationFunc = RR
-       }
-       update(RR, JR, GR) {
-         tR.d._CreateBlocks(RR, JR, GR, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
-       }
-       stR(RR) {
-         for (let JR = 0; JR < this.blocks.length; JR++) {
- ... (29 more removed lines; see GitHub link above)
+   41259: (rr, Sr, Qr) => {
+     rr.exports = Wr;
+     var Zr = Qr(388);
+ 
+     function Wr(rr, Sr) {
+       if (!(this instanceof Wr)) return new Wr(rr, Sr);
+       var Qr = Zr.create();
+       Zr.add(Qr, rr, Sr), this.base = Zr.min(Zr.create(), rr, Qr), this.vec = Zr.clone(Sr), this.max = Zr.max(Zr.create(), rr, Qr), this.mag = Zr.length(this.vec)
+     }
+     var ar = Wr.prototype;
+     ar.width = function() {
+       return this.vec[0]
+     }, ar.height = function() {
+       return this.vec[1]
+     }, ar.depth = function() {
+       return this.vec[2]
+ ... (31 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L50-L54` → after: `L52-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L52-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/277.js#L52-L70) · [Before (L50-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/277.js#L50-L54)

```diff
-     uR.CreationFuncForMeshes = (RR, JR) => {
-       const GR = RR.Tm();
-       !RR.isBlocked && GR.boundingBox.intersectsMinMax(JR.TtR, JR.FtR) && JR.entries.push(RR)
-     }, uR.CreationFuncForSubMeshes = (RR, JR) => {
-       RR.Tm().boundingBox.intersectsMinMax(JR.TtR, JR.FtR) && JR.entries.push(RR)
+   },
+   41256: rr => {
+     rr.exports = function(rr, Sr, Qr, Zr, Wr, ar) {
+       var jr = +Sr[0],
+         Ir = +Sr[1],
+         fr = +Sr[2],
+         Er = +Qr[0],
+         pr = +Qr[1],
+         xr = +Qr[2],
+         mr = Math.sqrt(Er * Er + pr * pr + xr * xr);
+       if (0 === mr) throw new Error("Can't raycast along a zero vector");
+       return function(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr, Er) {
+         for (var pr = 0, xr = Math.floor, mr = 0 | xr(Sr), Nr = 0 | xr(Qr), Ur = 0 | xr(Zr), tr = Wr > 0 ? 1 : -1, hr = ar > 0 ? 1 : -1, zr = jr > 0 ? 1 : -1, Yr = Math.abs(1 / Wr), nr = Math.abs(1 / ar), er = Math.abs(1 / jr), Kr = Yr < 1 / 0 ? Yr * (tr > 0 ? mr + 1 - Sr : Sr -  … [truncated]
+           var vr = rr(mr, Nr, Ur);
+           if (vr) return fr && (fr[0] = Sr + pr * Wr, fr[1] = Qr + pr * ar, fr[2] = Zr + pr * jr), Er && (Er[0] = Er[1] = Er[2] = 0, 0 === Tr && (Er[0] = -tr), 1 === Tr && (Er[1] = -hr), 2 === Tr && (Er[2] = -zr)), vr;
+           Kr < yr ? Kr < Br ? (mr += tr, pr = Kr, Kr += Yr, Tr = 0) : (Ur += zr, pr = Br, Br += er, Tr = 2) : yr < Br ? (Nr += hr, pr = yr, yr += nr, Tr = 1) : (Ur += zr, pr = Br, Br += er, Tr = 2)
+ ... (3 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L57` → after: `L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/277.js#L73) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/277.js#L57)

```diff
-   53605: (RR, JR, GR) => {
+   40675: (rr, Sr, Qr) => {
```

#### 4. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L61-L145` → after: `L78-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L78-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/277.js#L78-L82) · [Before (L61-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/277.js#L61-L145)

```diff
-     var yR = GR(38204),
-       tR = GR(41829);
-     class uR {
-       constructor(RR, JR, GR, yR, tR, uR) {
-         this.entries = [], this.ZuR = new Array, this._capacity = GR, this._depth = yR, this._maxDepth = tR, this._creationFunc = uR, this._minPoint = RR, this._maxPoint = JR, this.ZuR.push(RR.clone()), this.ZuR.push(JR.clone()), this.ZuR.push(RR.clone()), this.ZuR[2].x = JR.x, t … [truncated]
-       }
-       get hK() {
-         return this._capacity
-       }
-       get TtR() {
-         return this._minPoint
-       }
-       get FtR() {
-         return this._maxPoint
-       }
-       addEntry(RR) {
- ... (69 more removed lines; see GitHub link above)
+     var Zr = Qr(2839);
+     let Wr = null;
+ 
+     function ar(rr) {
+       return null !== Wr && rr === Wr
```

#### 5. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L147-L198` → after: `L84-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L84-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/277.js#L84-L86) · [Before (L147-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/277.js#L147-L198)

```diff
-   },
-   53612: (RR, JR, GR) => {
-     GR.d(JR, {
-       e: () => VR
-     });
-     var yR = GR(41612),
-       tR = GR(38204),
-       uR = GR(41974),
-       ZR = GR(53551),
-       qR = GR(41693),
-       iR = GR(38224),
-       fR = GR(53599);
-     class VR {
-       constructor(RR) {
-         this.name = qR.d.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new ZR.z(tR.r.Zero(), new tR.r(1, 1, 1)), (RR = RR || iR.c.LastCreatedScene) && (this.tL = RR, this.tL.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.tL.getActiveSubMeshCandidat … [truncated]
-       }
- ... (36 more removed lines; see GitHub link above)
+ 
+     function jr() {
+       this.XF = !1, this.stopPropagation = !1, this.kF = !1, this.disabled = !1
```

#### 6. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L249-L409` → after: `L90-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L90-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/277.js#L90-L106) · [Before (L249-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/277.js#L249-L409)

```diff
-         let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
-           tR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : yR.c;
-         this.origin = RR, this.direction = JR, this.length = GR, this.epsilon = tR
-       }
-       clone() {
-         return new KR(this.origin.clone(), this.direction.clone(), this.length)
-       }
-       intersectsBoxMinMax(RR, JR) {
-         let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-         const yR = KR._TmpVector3[0].VJR(RR.x - GR, RR.y - GR, RR.z - GR),
-           tR = KR._TmpVector3[1].VJR(JR.x + GR, JR.y + GR, JR.z + GR);
-         let uR, ZR, qR, iR, fR = 0,
-           VR = Number.MAX_VALUE;
-         if (Math.abs(this.direction.x) < 1e-7) {
-           if (this.origin.x < yR.x || this.origin.x > tR.x) return !1
-         } else if (uR = 1 / this.direction.x, ZR = (yR.x - this.origin.x) * uR, qR = (tR.x - this.origin.x) * uR, qR === -1 / 0 && (qR = 1 / 0), ZR > qR && (iR = ZR, ZR = qR, qR = iR), fR = Math.max(ZR, fR), VR = Math.min(qR, VR), fR > VR) return !1;
- ... (145 more removed lines; see GitHub link above)
+         this.version = "0.7.0";
+         var Qr = Object.assign({}, new jr, Sr || {});
+         this.element = rr || document, this.XF = !!Qr.XF, this.stopPropagation = !!Qr.stopPropagation, this.kF = !!Qr.kF, this.disabled = !!Qr.disabled, this.filterEvents = (rr, Sr) => !0, this.ignoreEvent = rr => !1, this.down = new Zr.EventEmitter, this.up = new Zr.EventEmitter … [truncated]
+           dx: 0,
+           dy: 0,
+           cSr: 0,
+           FSr: 0,
+           oSr: 0
+         }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
+           lastX: 0,
+           lastY: 0,
+           currID: null
+         }, "loading" !== document.readyState ? Er(this) : document.addEventListener("DOMContentLoaded", (rr => {
+           Er(this)
+         }), {
+           once: !0
+ ... (1 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L411-L417` → after: `L108-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L108-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/277.js#L108-L127) · [Before (L411-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/277.js#L411-L417)

```diff
-       static TransformToRef(RR, JR, GR) {
-         tR.r.TransformCoordinatesToRef(RR.origin, JR, GR.origin), tR.r.TransformNormalToRef(RR.direction, JR, GR.direction), GR.length = RR.length, GR.epsilon = RR.epsilon;
-         const yR = GR.direction,
-           uR = yR.length();
-         if (0 !== uR && 1 !== uR) {
-           const RR = 1 / uR;
-           yR.x *= RR, yR.y *= RR, yR.z *= RR, GR.length *= uR
+       bind(rr) {
+         for (var Sr = arguments.length, Qr = new Array(Sr > 1 ? Sr - 1 : 0), Zr = 1; Zr < Sr; Zr++) Qr[Zr - 1] = arguments[Zr];
+         Qr.forEach((Sr => {
+           var Qr = this._keyBindmap[Sr] || [];
+           Qr.includes(rr) || (Qr.push(rr), this._keyBindmap[Sr] = Qr)
+         })), this.state[rr] = !!this.state[rr], this.pressCount[rr] = this.pressCount[rr] || 0, this.releaseCount[rr] = this.releaseCount[rr] || 0
+       }
+       unbind(rr) {
+         for (var Sr in this._keyBindmap) {
+           var Qr = this._keyBindmap[Sr],
+             Zr = Qr.indexOf(rr);
+           Zr > -1 && Qr.splice(Zr, 1)
+         }
+       }
+       getBindings() {
+         var rr = {};
+ ... (4 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L421-L430` → after: `L131-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L131-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/277.js#L131-L132) · [Before (L421-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/277.js#L421-L430)

```diff
-       unprojectRayToRef(RR, JR, GR, yR, uR, ZR, qR) {
-         const fR = tR.l.Matrix[0];
-         uR.multiplyToRef(ZR, fR), fR.multiplyToRef(qR, fR), fR.invert();
-         const VR = iR.c.LastCreatedEngine,
-           KR = tR.l.Fe[0];
-         KR.x = RR / GR * 2 - 1, KR.y = -(JR / yR * 2 - 1), KR.z = VR?.LtR ? 1 : VR?.isNDCHalfZRange ? 0 : -1;
-         const wR = tR.l.Fe[1].VJR(KR.x, KR.y, 1 - 1e-8),
-           rR = tR.l.Fe[2],
-           eR = tR.l.Fe[3];
-         tR.r.TransformCoordinatesToRef(KR, fR, rR), tR.r.TransformCoordinatesToRef(wR, fR, eR), this.origin.vN(rR), eR.subtractToRef(rR, this.direction), this.direction.normalize()
+       lx() {
+         fr(this.JF), fr(this.pressCount), fr(this.releaseCount)
```

#### 9. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L434-L480` → after: `L136-L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L136-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/277.js#L136-L137) · [Before (L434-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/277.js#L434-L480)

```diff
-     function wR(RR, JR, GR, yR, tR) {
-       let uR = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
-       const ZR = KR.Zero();
-       return rR(RR, JR, GR, yR, ZR, tR, uR), ZR
-     }
- 
-     function rR(RR, JR, GR, yR, uR, ZR) {
-       let qR = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-         iR = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
-       const fR = RR.ke();
-       if (!ZR && !(ZR = RR.activeCamera) && !(ZR = RR.cameraToUseForPointers)) return RR;
-       const VR = ZR.viewport,
-         KR = fR.getRenderHeight(),
-         {
-           x: wR,
-           y: rR,
- ... (31 more removed lines; see GitHub link above)
+     function fr(rr) {
+       for (var Sr in rr) rr[Sr] = 0
```

#### 10. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L483-L485` → after: `L140-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L140-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/277.js#L140-L147) · [Before (L483-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/277.js#L483-L485)

```diff
-     function nR(RR, JR, GR, yR, tR, uR, ZR, qR) {
-       const iR = JR.intersects(yR, tR, ZR, uR, GR, qR);
-       return iR && iR.hit ? !tR && null != RR && iR.distance >= RR.distance ? null : iR : null
+     function Er(rr) {
+       window.addEventListener("keydown", hr.bind(null, rr, !0), !1), window.addEventListener("keyup", hr.bind(null, rr, !1), !1);
+       var Sr = {
+         passive: !0
+       };
+       rr.element.addEventListener("touchstart", Nr.bind(void 0, rr), {
+         passive: !1
+       }), rr.element.addEventListener("touchend", tr.bind(void 0, rr), Sr), rr.element.addEventListener("mousedown", zr.bind(null, rr, !0), Sr), window.document.addEventListener("mouseup", zr.bind(null, rr, !1), Sr), rr.element.addEventListener("touchmove", Yr.bind(null, rr), Sr) … [truncated]
```

#### 11. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L489` → after: `L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/277.js#L154) · [Before (L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/277.js#L489)

```diff
-       return "InstancedLinesMesh" === RR || "LinesMesh" === RR ? JR.intersectionThreshold : 0
+       Sr.preventDefault(), Ur(Sr)
```

#### 12. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L493-L501` → after: `L158-L165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L158-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/277.js#L158-L165) · [Before (L493-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/277.js#L493-L501)

```diff
-       const JR = RR.getClassName();
-       if ("GreasedLineMesh" === JR) return {
-         rawBoundingInfo: null,
-         intersectionThreshold: 0
-       };
-       const GR = RR.rawBoundingInfo;
-       return {
-         rawBoundingInfo: GR,
-         intersectionThreshold: GR ? UR(JR, RR) : 0
+       let Sr = !1;
+       for (let Qr = 0; Qr < rr.touches.length; ++Qr)
+         if (rr.touches[Qr].identifier === mr) {
+           Sr = !0;
+           break
+         } if (!Sr) {
+         const Sr = rr.changedTouches[0];
+         pr = Sr.clientX, xr = Sr.clientY, mr = Sr.identifier
```

#### 13. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L505-L507` → after: `L169-L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L169-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/277.js#L169-L170) · [Before (L505-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/277.js#L505-L507)

```diff
-     function AR(RR, JR, GR, yR, tR) {
-       const uR = RR(GR, JR.enableDistantPicking);
-       return uR.intersectsSphere(yR.euR, tR) && uR.intersectsBox(yR.boundingBox, tR) ? uR : null
+     function tr(rr, Sr) {
+       for (var Qr = Sr.changedTouches, Zr = 0; Zr < Qr.length; ++Zr) Qr[Zr].identifier === mr && (mr = null)
```

#### 14. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L510-L548` → after: `L173-L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L173-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/277.js#L173-L177) · [Before (L510-L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/277.js#L510-L548)

```diff
-     function CR(RR, JR, GR, yR, uR, ZR) {
-       let iR = null;
-       const fR = !!(RR.activeCameras && RR.activeCameras.length > 1 && RR.cameraToUseForPointers !== RR.activeCamera),
-         KR = RR.cameraToUseForPointers || RR.activeCamera,
-         wR = VR.internalPickerForMesh || LR,
-         rR = wR === LR;
-       for (let qR = 0; qR < RR.meshes.length; qR++) {
-         const VR = RR.meshes[qR];
-         if (GR) {
-           if (!GR(VR, -1)) continue
-         } else if (!VR.isEnabled() || !VR.isVisible || !VR.ZL) continue;
-         const eR = fR && VR.isWorldMatrixCameraDependent(),
-           aR = VR.computeWorldMatrix(eR, KR);
-         if (VR.hasThinInstances && VR.jGR) {
-           const RR = wR(iR, JR, VR, aR, !0, !0, ZR);
-           if (RR) {
- ... (23 more removed lines; see GitHub link above)
+     function hr(rr, Sr, Qr) {
+       if (!rr.ignoreEvent(Qr)) try {
+         Tr(rr, Qr), Sr && Qr.isTrusted && !Qr.repeat && rr._keyStates[Qr.code] && vr(rr, Qr.code)
+       } finally {
+         Or(Qr.code, Sr, rr, Qr)
```

#### 15. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L553-L572` → after: `L181-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L181-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/277.js#L181-L186) · [Before (L553-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/277.js#L553-L572)

```diff
-     function XR(RR, JR, GR, yR) {
-       if (!qR.e) return null;
-       const uR = [],
-         ZR = !!(RR.activeCameras && RR.activeCameras.length > 1 && RR.cameraToUseForPointers !== RR.activeCamera),
-         iR = RR.cameraToUseForPointers || RR.activeCamera,
-         fR = VR.internalPickerForMesh || LR,
-         KR = fR === LR;
-       for (let qR = 0; qR < RR.meshes.length; qR++) {
-         const VR = RR.meshes[qR];
-         if (GR) {
-           if (!GR(VR, -1)) continue
-         } else if (!VR.isEnabled() || !VR.isVisible || !VR.ZL) continue;
-         const wR = ZR && VR.isWorldMatrixCameraDependent(),
-           rR = VR.computeWorldMatrix(wR, iR);
-         if (VR.hasThinInstances && VR.jGR) {
-           if (fR(null, JR, VR, rR, !0, !0, yR)) {
- ... (4 more removed lines; see GitHub link above)
+     function zr(rr, Sr, Qr) {
+       if (!rr.ignoreEvent(Qr)) try {
+         Tr(rr, Qr)
+       } finally {
+         ! function(rr, Sr, Qr) {
+           if ("pointerId" in Qr)
```

#### 16. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L574-L593` → after: `L188-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L188-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/277.js#L188-L245) · [Before (L574-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/277.js#L574-L593)

```diff
-               const iR = tR.l.Matrix[0],
-                 wR = tR.l.Matrix[1],
-                 eR = Math.min(VR.zRR, qR.length >> 4);
-               for (let aR = 0; aR < eR; aR++) {
-                 if (GR && !GR(VR, aR)) continue;
-                 tR.e.FromArrayToRef(qR, aR << 4, iR), iR.multiplyToRef(rR, wR);
-                 const eR = KR && RR ? AR(JR, VR, wR, RR, ZR) : null;
-                 if (KR && RR && !eR) continue;
-                 const LR = KR && eR ? nR(null, VR, wR, eR, !1, !1, yR, !0) : fR(null, JR, VR, wR, !1, !1, yR, !0);
-                 LR && (LR.thinInstanceIndex = aR, uR.push(LR))
-               }
-             }
-           }
-         } else {
-           const RR = fR(null, JR, VR, rR, !1, !1, yR);
-           RR && uR.push(RR)
- ... (4 more removed lines; see GitHub link above)
+               if (null !== rr._touches.currID) return;
+               rr._touches.currID = Qr.pointerId
+             } else {
+               if (rr._touches.currID !== Qr.pointerId) return;
+               rr._touches.currID = null
+             } var Zr = "button" in Qr ? Qr.button + 1 : 1;
+           Or("Mouse" + Zr, Sr, rr, Qr)
+         }(rr, Sr, Qr)
+       }
+     }
+ 
+     function Yr(rr, Sr) {
+       var Qr = Sr.movementX || Sr.mozMovementX || 0,
+         Zr = Sr.movementY || Sr.mozMovementY || 0;
+       if (Sr.touches && 0 === (Qr | Zr)) {
+         var Wr = function(rr) {
+ ... (42 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L595-L598` → after: `L247-L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L247-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/277.js#L247-L248) · [Before (L595-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/277.js#L595-L598)

```diff
-     function MR(RR, JR, GR, yR, uR, ZR) {
-       if (!qR.e) return null;
-       const iR = CR(RR, (yR => (RR._tempPickingRay || (RR._tempPickingRay = KR.Zero()), rR(RR, JR, GR, yR, RR._tempPickingRay, ZR || null), RR._tempPickingRay)), yR, uR, !0);
-       return iR && (iR.ray = wR(RR, JR, GR, tR.e.Identity(), ZR || null)), iR
+     function yr(rr, Sr) {
+       return !!rr[Kr[Sr]] || ("AltRight" === Sr || "ControlLeft" === Sr) && "function" === typeof rr.getModifierState && !0 === rr.getModifierState("AltGraph")
```

#### 18. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L601-L603` → after: `L251-L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L251-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/277.js#L251-L262) · [Before (L601-L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/277.js#L601-L603)

```diff
-     function BR(RR, JR, GR, yR, uR, ZR, qR) {
-       const iR = CR(RR, ((yR, tR) => (RR._tempPickingRay || (RR._tempPickingRay = KR.Zero()), rR(RR, JR, GR, yR, RR._tempPickingRay, ZR || null, !1, tR), RR._tempPickingRay)), yR, uR, !1, qR);
-       return iR && (iR.ray = wR(RR, JR, GR, tR.e.Identity(), ZR || null)), iR
+     function Br(rr, Sr) {
+       for (var Qr in rr._modifiersHeldThroughBlur = {}, Kr) rr._keyStates[Qr] && (rr._modifiersHeldThroughBlur[Qr] = !0);
+       Sr && Sr.isTrusted && function() {
+         try {
+           return window.self !== window.top
+         } catch (rr) {
+           return !0
+         }
+       }() && (clearTimeout(rr._blurRelease), rr._blurRelease = setTimeout((function() {
+         if (!document.hasFocus())
+           for (var Sr in rr._modifiersHeldThroughBlur = {}, rr._keyStates) rr._keyStates[Sr] && !/^Mouse\d/.test(Sr) && vr(rr, Sr)
+       }), 0))
```

#### 19. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L606-L608` → after: `L265-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L265-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/277.js#L265-L268) · [Before (L606-L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/277.js#L606-L608)

```diff
-     function lR(RR, JR, GR, yR, uR) {
-       const ZR = CR(RR, (GR => (RR._pickWithRayInverseMatrix || (RR._pickWithRayInverseMatrix = tR.e.Identity()), GR.invertToRef(RR._pickWithRayInverseMatrix), RR._cachedRayForTransform || (RR._cachedRayForTransform = KR.Zero()), KR.TransformToRef(JR, RR._pickWithRayInverseMatrix … [truncated]
-       return ZR && (ZR.ray = JR), ZR
+     function Tr(rr, Sr) {
+       var Qr = rr._modifiersHeldThroughBlur;
+       if (Qr && Sr.isTrusted && document.hasFocus())
+         for (var Zr in Qr) delete Qr[Zr], rr._keyStates[Zr] && Zr !== Sr.code && (yr(Sr, Zr) || vr(rr, Zr))
```

#### 20. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L611-L612` → after: `L271-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L271-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/277.js#L271-L283) · [Before (L611-L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/277.js#L611-L612)

```diff
-     function pR(RR, JR, GR, yR, tR, uR) {
-       return XR(RR, (yR => wR(RR, JR, GR, yR, tR || null)), yR, uR)
+     function vr(rr, Sr) {
+       const Qr = {
+           code: Sr,
+           preventDefault: () => {},
+           stopPropagation: () => {}
+         },
+         Zr = Wr;
+       Wr = Qr;
+       try {
+         Or(Sr, !1, rr, Qr)
+       } finally {
+         Wr = Zr
+       }
```

#### 21. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L616` → after: `L287-L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L287-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/277.js#L287-L302) · [Before (L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/277.js#L616)

```diff
-       return XR(RR, (GR => (RR._pickWithRayInverseMatrix || (RR._pickWithRayInverseMatrix = tR.e.Identity()), GR.invertToRef(RR._pickWithRayInverseMatrix), RR._cachedRayForTransform || (RR._cachedRayForTransform = KR.Zero()), KR.TransformToRef(JR, RR._pickWithRayInverseMatrix, RR … [truncated]
+       var Wr = Qr._keyBindmap[rr];
+       Wr && (Lr(Qr._keyStates[rr], Sr) && (Qr._keyStates[rr] = Sr, Wr.forEach((rr => {
+         (!Qr.filterEvents || Qr.filterEvents(Zr, rr)) && function(rr, Sr, Qr, Zr) {
+           var Wr = Sr ? Qr.pressCount : Qr.releaseCount;
+           Wr[rr] = (Wr[rr] || 0) + 1;
+           var ar = Qr._bindPressCount[rr] || 0;
+           (ar += Sr ? 1 : -1) < 0 && (ar = 0);
+           Qr._bindPressCount[rr] = ar;
+           var jr = Qr.state[rr];
+           if (Lr(jr, ar)) {
+             Qr.state[rr] = ar > 0;
+             var Ir = Sr ? Qr.down : Qr.up;
+             Qr.disabled || Ir.emit(rr, Zr)
+           }
+         }(rr, Sr, Qr, Zr)
+       }))), "button" in Zr || (Qr.XF && !Zr.defaultPrevented && Zr.preventDefault(), Qr.stopPropagation && Zr.stopPropagation()))
```

#### 22. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L620-L627` → after: `L306-L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L306-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/277.js#L306-L383) · [Before (L620-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/277.js#L620-L627)

```diff
-       let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
-         yR = arguments.length > 3 ? arguments[3] : void 0,
-         uR = arguments.length > 4 ? arguments[4] : void 0;
-       yR || (yR = RR.getWorldMatrix()), JR.length = GR, uR ? JR.origin.vN(uR) : JR.origin.vN(RR.position);
-       const ZR = tR.l.Fe[2];
-       ZR.set(0, 0, RR._scene.useRightHandedSystem ? -1 : 1);
-       const qR = tR.l.Fe[3];
-       return tR.r.TransformNormalToRef(ZR, yR, qR), tR.r.NormalizeToRef(qR, JR.direction), JR
+       return rr ? !Sr : Sr
+     }
+   },
+   41246: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       b: () => Zr
+     });
+     class Zr {
+       constructor() {
+         let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
+           Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
+         this.Wk = !1, this.Nk = !1, this.pC = 30, this.wG = 0, this.zk = 100, this.Ez = !1, this.fullscreen = !1, this.FY = function(rr) {}, this.Yk = function(rr, Sr, Qr) {}, this.Hx = function() {}, this.kY = function() {}, this.Lk = function() {}, this.onFullscreenChanged = fu … [truncated]
+           function(rr) {
+             if ("loading" === document.readyState) {
+               var Sr = () => {
+                 document.removeEventListener("readystatechange", Sr), rr()
+ ... (62 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L630-L640` → after: `L386-L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L386-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/277.js#L386-L398) · [Before (L630-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/277.js#L630-L640)

```diff
-     function vR(RR, JR) {
-       JR && (JR.prototype.getForwardRay = function() {
-         let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
-           JR = arguments.length > 1 ? arguments[1] : void 0,
-           GR = arguments.length > 2 ? arguments[2] : void 0;
-         return bR(this, new KR(tR.r.Zero(), tR.r.Zero(), RR), RR, JR, GR)
-       }, JR.prototype.getForwardRayToRef = function(RR) {
-         return bR(this, RR, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, arguments.length > 2 ? arguments[2] : void 0, arguments.length > 3 ? arguments[3] : void 0)
-       }), RR && (fR.d._IsPickingAvailable = !0, RR.prototype.createPickingRay = function(RR, JR, GR, yR) {
-         return wR(this, RR, JR, GR, yR, arguments.length > 4 && void 0 !== arguments[4] && arguments[4])
-       })
+     function Wr() {
+       let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
+       this.nowObject = performance || Date, this.pollTime = rr, this.renderAccum = 0, this.lastTickStarted = 0, this.lastFrameStarted = 0, this.lastRenderStarted = 0, this.avgTickTime = 2, this.frameCB = null, this.intervalCB = null, this.intervalID = -1
+     }
+     var ar = 3,
+       jr = 20;
+ 
+     function Ir(rr) {
+       for (var Sr = rr._data, Qr = 1e3 / rr.pC, Zr = Sr.nowObject.now() + jr, Wr = 0; Sr.nowObject.now() >= Sr.lastTickStarted + Qr && Sr.nowObject.now() < Zr && ++Wr <= ar;) rr.FY(Qr), Sr.lastTickStarted += Qr;
+       var Ir = 5 * (Qr + 5),
+         fr = Sr.nowObject.now();
+       if (fr - Sr.lastTickStarted > Ir)
+         for (; fr >= Sr.lastTickStarted + Qr;) Sr.lastTickStarted += Qr
```

#### 24. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L644` → after: `L401-L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L401-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/277.js#L401-L409) · [Before (L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/277.js#L644)

```diff
-   53543: (RR, JR, GR) => {
+   40556: (rr, Sr, Qr) => {
+     function Zr(rr, Sr, Qr, Zr, Wr) {
+       var ar = {};
+       return Object.keys(Zr).forEach((function(rr) {
+         ar[rr] = Zr[rr]
+       })), ar.enumerable = !!ar.enumerable, ar.configurable = !!ar.configurable, ("value" in ar || ar.initializer) && (ar.writable = !0), ar = Qr.slice().reverse().reduce((function(Qr, Zr) {
+         return Zr(rr, Sr, Qr) || Qr
+       }), ar), Wr && void 0 !== ar.initializer && (ar.value = ar.initializer ? ar.initializer.call(Wr) : void 0, ar.initializer = void 0), void 0 === ar.initializer && (Object.defineProperty(rr, Sr, ar), ar = null), ar
+     }
```

#### 25. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L646-L670` → after: `L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/277.js#L411) · [Before (L646-L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/277.js#L646-L670)

```diff
-       d: () => uR.z
-     });
-     var yR = GR(41612),
-       tR = GR(41732),
-       uR = GR(53551);
-     let ZR = !1;
-     ZR || (ZR = !0, (0, uR.d)(yR.g, tR.b), yR.g.prototype.createPickingRayToRef = function(RR, JR, GR, yR, tR) {
-       let ZR = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         qR = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
-       return (0, uR.l)(this, RR, JR, GR, yR, tR, ZR, qR)
-     }, yR.g.prototype.createPickingRayInCameraSpace = function(RR, JR, GR) {
-       return (0, uR.i)(this, RR, JR, GR)
-     }, yR.g.prototype.createPickingRayInCameraSpaceToRef = function(RR, JR, GR, yR) {
-       return (0, uR.g)(this, RR, JR, GR, yR)
-     }, yR.g.prototype.pickWithBoundingInfo = function(RR, JR, GR, yR, tR) {
-       return (0, uR.r)(this, RR, JR, GR, yR, tR)
- ... (9 more removed lines; see GitHub link above)
+       c: () => Zr
```

#### 26. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L673` → after: `L414-L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L414-L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/277.js#L414-L422) · [Before (L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/277.js#L673)

```diff
-   53557: (RR, JR, GR) => {
+   40552: (rr, Sr, Qr) => {
+     function Zr(rr, Sr, Qr, Zr) {
+       Qr && Object.defineProperty(rr, Sr, {
+         enumerable: Qr.enumerable,
+         configurable: Qr.configurable,
+         writable: Qr.writable,
+         value: Qr.initializer ? Qr.initializer.call(Zr) : void 0
+       })
+     }
```

#### 27. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L677-L793` → after: `L431-L464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L431-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/277.js#L431-L464) · [Before (L677-L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/277.js#L677-L793)

```diff
-     var yR = GR(41520),
-       tR = GR(41524),
-       uR = GR(38204),
-       ZR = GR(41777),
-       qR = GR(53562),
-       iR = GR(41741),
-       fR = GR(38253);
-     let VR = (() => {
-         var RR;
-         let JR, GR, iR, fR, VR, KR, wR, rR, eR = qR.d,
-           aR = [],
-           LR = [],
-           nR = [],
-           UR = [],
-           WR = [],
-           AR = [],
- ... (101 more removed lines; see GitHub link above)
+     var Zr = Qr(40246);
+     const Wr = (rr, Sr, Qr) => rr ? rr.getClassName && "Mesh" === rr.getClassName() ? null : !rr.getClassName || "SubMesh" !== rr.getClassName() && "PhysicsBody" !== rr.getClassName() ? rr.clone ? rr.clone() : Array.isArray(rr) ? rr.slice() : Qr && "object" === typeof rr ? {
+       ...rr
+     } : null : rr.clone(Sr) : null;
+     class ar {
+       static DeepCopy(rr, Sr, Qr, ar) {
+         let jr = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         const Ir = function(rr) {
+           const Sr = [];
+           do {
+             const Qr = Object.getOwnPropertyNames(rr);
+             for (const rr of Qr) - 1 === Sr.indexOf(rr) && Sr.push(rr)
+           } while (rr = Object.getPrototypeOf(rr));
+           return Sr
+         }(rr);
+         for (const Er of Ir) {
+ ... (18 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L795-L904` → after: `L466-L468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L466-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/277.js#L466-L468) · [Before (L795-L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/277.js#L795-L904)

```diff
-         }, (() => {
-           const uR = "function" === typeof Symbol && Symbol.metadata ? Object.create(eR[Symbol.metadata] ?? null) : void 0;
-           JR = [(0, tR.H)()], GR = [(0, tR.H)()], iR = [(0, tR.H)()], fR = [(0, tR.H)()], VR = [(0, tR.H)("orthoLeft")], KR = [(0, tR.H)("orthoRight")], wR = [(0, tR.H)("orthoTop")], rR = [(0, tR.H)("orthoBottom")], (0, yR.l)(RR, null, JR, {
-             kind: "getter",
-             name: "shadowFrustumSize",
-             static: !1,
-             private: !1,
-             access: {
-               has: RR => "shadowFrustumSize" in RR,
-               get: RR => RR.shadowFrustumSize
-             },
-             metadata: uR
-           }, null, aR), (0, yR.l)(RR, null, GR, {
-             kind: "getter",
-             name: "shadowOrthoScale",
-             static: !1,
- ... (94 more removed lines; see GitHub link above)
+         }
+       }
+     }
```

#### 29. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L906` → after: `L470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/277.js#L470) · [Before (L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/277.js#L906)

```diff
-   39941: (RR, JR, GR) => {
+   40284: (rr, Sr, Qr) => {
```

#### 30. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L908-L911` → after: `L472-L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L472-L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/277.js#L472-L475) · [Before (L908-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/277.js#L908-L911)

```diff
-       c: () => tR,
-       g: () => uR,
-       k: () => ZR,
-       m: () => qR
+       d: () => Wr,
+       f: () => ar,
+       i: () => jr,
+       j: () => Ir
```

#### 31. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L913` → after: `L477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/277.js#L477) · [Before (L913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/277.js#L913)

```diff
-     var yR = GR(38331);
+     var Zr = Qr(38684);
```

#### 32. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L919` → after: `L483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/277.js#L483) · [Before (L919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/277.js#L919)

```diff
-         this.color2 ? yR.e.LerpToRef(this.color1, this.color2, Math.random(), RR) : RR.vN(this.color1)
+         this.color2 ? Zr.f.LerpToRef(this.color1, this.color2, Math.random(), rr) : rr.iH(this.color1)
```

#### 33. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L950` → after: `L514-L585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L514-L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/277.js#L514-L585) · [Before (L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/277.js#L950)

```diff
-   39943: (RR, JR, GR) => {
+   40246: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       c: () => Zr
+     });
+     class Zr {
+       static _CheckLimit(rr, Sr) {
+         let Qr = Zr._LogLimitOutputs[rr];
+         return Qr ? Qr.current++ : (Qr = {
+           limit: Sr,
+           current: 1
+         }, Zr._LogLimitOutputs[rr] = Qr), Qr.current <= Qr.limit
+       }
+       static _GenerateLimitMessage(rr) {
+         let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         const Qr = Zr._LogLimitOutputs[rr];
+         if (!Qr || !Zr.MessageLimitReached) return;
+ ... (56 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L954-L956` → after: `L589-L591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L589-L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/277.js#L589-L591) · [Before (L954-L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/277.js#L954-L956)

```diff
-     var yR = GR(38204),
-       tR = GR(38239),
-       uR = GR(39912);
+     var Zr = Qr(38560),
+       Wr = Qr(38599),
+       ar = Qr(40237);
```

#### 35. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L959` → after: `L594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/277.js#L594) · [Before (L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/277.js#L959)

```diff
-         this.direction1 = new yR.r(0, 1, 0), this.direction2 = new yR.r(0, 1, 0), this.minEmitBox = new yR.r(-.5, -.5, -.5), this.maxEmitBox = new yR.r(.5, .5, .5)
+         this.direction1 = new Zr.u(0, 1, 0), this.direction2 = new Zr.u(0, 1, 0), this.minEmitBox = new Zr.u(-.5, -.5, -.5), this.maxEmitBox = new Zr.u(.5, .5, .5)
```

#### 36. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L966` → after: `L601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/277.js#L601) · [Before (L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/277.js#L966)

```diff
-         yR.r.TransformNormalFromFloatsToRef(ZR, qR, iR, RR, JR)
+         Zr.u.TransformNormalFromFloatsToRef(jr, Ir, fr, rr, Sr)
```

#### 37. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L973` → after: `L608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/277.js#L608) · [Before (L973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/277.js#L973)

```diff
-         yR.r.TransformCoordinatesFromFloatsToRef(ZR, qR, iR, RR, JR)
+         Zr.u.TransformCoordinatesFromFloatsToRef(jr, Ir, fr, rr, Sr)
```

#### 38. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L993` → after: `L628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/277.js#L628) · [Before (L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/277.js#L993)

```diff
-         return RR.type = this.getClassName(), RR.direction1 = this.direction1.QtR(), RR.direction2 = this.direction2.QtR(), RR.minEmitBox = this.minEmitBox.QtR(), RR.maxEmitBox = this.maxEmitBox.QtR(), RR
+         return rr.type = this.getClassName(), rr.direction1 = this.direction1.OWr(), rr.direction2 = this.direction2.OWr(), rr.minEmitBox = this.minEmitBox.OWr(), rr.maxEmitBox = this.maxEmitBox.OWr(), rr
```

#### 39. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L996` → after: `L631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/277.js#L631) · [Before (L996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/277.js#L996)

```diff
-         yR.r.FromArrayToRef(RR.direction1, 0, this.direction1), yR.r.FromArrayToRef(RR.direction2, 0, this.direction2), yR.r.FromArrayToRef(RR.minEmitBox, 0, this.minEmitBox), yR.r.FromArrayToRef(RR.maxEmitBox, 0, this.maxEmitBox)
+         Zr.u.FromArrayToRef(rr.direction1, 0, this.direction1), Zr.u.FromArrayToRef(rr.direction2, 0, this.direction2), Zr.u.FromArrayToRef(rr.minEmitBox, 0, this.minEmitBox), Zr.u.FromArrayToRef(rr.maxEmitBox, 0, this.maxEmitBox)
```

#### 40. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1000` → after: `L635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/277.js#L635) · [Before (L1000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/277.js#L1000)

```diff
-   39906: (RR, JR, GR) => {
+   40234: (rr, Sr, Qr) => {
```

#### 41. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1002-L1003` → after: `L637-L638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L637-L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/277.js#L637-L638) · [Before (L1002-L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/277.js#L1002-L1003)

```diff
-       e: () => qR,
-       i: () => ZR
+       d: () => Ir,
+       h: () => jr
```

#### 42. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1005-L1007` → after: `L640-L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L640-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/277.js#L640-L642) · [Before (L1005-L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/277.js#L1005-L1007)

```diff
-     var yR = GR(38204),
-       tR = GR(38239),
-       uR = GR(39912);
+     var Zr = Qr(38560),
+       Wr = Qr(38599),
+       ar = Qr(40237);
```

#### 43. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1014` → after: `L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/277.js#L649) · [Before (L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/277.js#L1014)

```diff
-         this.radius = RR, this.height = JR, this.radiusRange = GR, this.directionRandomizer = tR, this._tempVector = yR.r.Zero()
+         this.radius = rr, this.height = Sr, this.radiusRange = Qr, this.directionRandomizer = Wr, this._tempVector = Zr.u.Zero()
```

#### 44. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1017` → after: `L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/277.js#L652) · [Before (L1017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/277.js#L1017)

```diff
-         GR.position.subtractToRef(RR.getTranslation(), this._tempVector), this._tempVector.normalize(), yR.r.TransformNormalToRef(this._tempVector, ZR, this._tempVector);
+         Qr.position.subtractToRef(rr.getTranslation(), this._tempVector), this._tempVector.normalize(), Zr.u.TransformNormalToRef(this._tempVector, jr, this._tempVector);
```
