# Changed — Bundle Modifications Report (Part 014 / 065)

- **Updated at**: `2026-11-25T01:10 JST`
- **Part**: `14 / 65` (**321** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 013](part-013.md) · [Part 015 →](part-015.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/233.js` (tz47m9.2cb7e113 → sn3sfj.2522680a · continued)

- **File**: `bundles/bloxd.io/chunks/js/233.js` (32 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c)

#### 16. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L205-L206` → after: `L1003-L1012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR1003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L1003-L1012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/233.js#L1003-L1012) · [Before (L205-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/233.js#L205-L206)

```diff
-       addOnce(DD) {
-         return this.add(DD, void 0, void 0, void 0, !0)
+     }
+     pp.exports = class {
+       constructor() {
+         this.list = [], this.hash = {}, this._map = {}, this._idList = [], this._pendingRemovals = []
+       }
+       add(pp, ip) {
+         if ("number" === typeof this._map[pp]) {
+           var cp = this._map[pp];
+           this.hash[pp] = ip, this.list[cp] = ip, this._idList[cp] = pp
+         } else this._map[pp] = this.list.length, this.hash[pp] = ip, this.list.push(ip), this._idList.push(pp)
```

#### 17. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L209-L216` → after: `L1015-L1024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR1015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L1015-L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/233.js#L1015-L1024) · [Before (L209-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/233.js#L209-L216)

```diff
-         if (!DD) return !1;
-         DD._remove = null;
-         return -1 !== this._observers.indexOf(DD) && (this._deferUnregister(DD), !0)
-       }
-       removeCallback(DD, zD) {
-         for (let wD = 0; wD < this._observers.length; wD++) {
-           const pD = this._observers[wD];
-           if (!pD._willBeUnregistered && (pD.callback === DD && (!zD || zD === pD.scope))) return this._deferUnregister(pD), !0
+         var ip = this._map[pp];
+         this.hash[pp] = null, this.list[ip] = null, this._pendingRemovals.push(pp)
+       }
+       dispose() {
+         this.list = null, this.hash = null, this._map = null, this._idList = null, this._pendingRemovals.length = 0
+       }
+       flush() {
+         for (var pp = 0; pp < this._pendingRemovals.length; pp++) {
+           var cp = this._pendingRemovals[pp];
+           null === this.hash[cp] && ip(this, cp)
```

#### 18. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L218-L247` → after: `L1026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR1026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L1026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/233.js#L1026) · [Before (L218-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/233.js#L218-L247)

```diff
-         return !1
-       }
-       _deferUnregister(DD) {
-         DD._willBeUnregistered || (this._numObserversMarkedAsDeleted++, DD.unregisterOnNextCall = !1, DD._willBeUnregistered = !0, setTimeout((() => {
-           this._remove(DD)
-         }), 0))
-       }
-       _remove(DD) {
-         let zD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         if (!DD) return !1;
-         const wD = this._observers.indexOf(DD);
-         return -1 !== wD && (zD && this._numObserversMarkedAsDeleted--, this._observers.splice(wD, 1), !0)
-       }
-       makeObserverTopPriority(DD) {
-         this._remove(DD, !1), this._observers.unshift(DD)
-       }
- ... (14 more removed lines; see GitHub link above)
+         this._pendingRemovals.length = 0
```

#### 19. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L249-L253` → after: `L1028-L1104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR1028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L1028-L1104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/233.js#L1028-L1104) · [Before (L249-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/233.js#L249-L253)

```diff
-       notifyObserver(DD, zD) {
-         let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
-         if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = zD), DD._willBeUnregistered) return;
-         const pD = this._eventState;
-         pD.mask = wD, pD.skipNextObservers = !1, DD.unregisterOnNextCall && this._deferUnregister(DD), DD.callback(zD, pD)
+     }
+   },
+   38272: (pp, ip, cp) => {
+     pp = cp.nmd(pp);
+     var Op = "__lodash_hash_undefined__",
+       op = 9007199254740991,
+       Ip = "[object Arguments]",
+       Sp = "[object Boolean]",
+       xp = "[object Date]",
+       Lp = "[object Function]",
+       Yp = "[object GeneratorFunction]",
+       Dp = "[object Map]",
+       Ap = "[object Number]",
+       Pp = "[object Object]",
+       Wp = "[object Promise]",
+       yp = "[object RegExp]",
+ ... (61 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L255-L256` → after: `L1106-L1156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR1106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L1106-L1156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/233.js#L1106-L1156) · [Before (L255-L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/233.js#L255-L256)

```diff
-       hasObservers() {
-         return this._observers.length - this._numObserversMarkedAsDeleted > 0
+     }
+ 
+     function Zp(pp) {
+       var ip = -1,
+         cp = Array(pp.size);
+       return pp.forEach((function(pp) {
+         cp[++ip] = pp
+       })), cp
+     }
+     var zp = Array.prototype,
+       sp = Function.prototype,
+       Kp = Object.prototype,
+       Vp = Tp["__core-js_shared__"],
+       ii = function() {
+         var pp = /[^.]+$/.exec(Vp && Vp.keys && Vp.keys.IE_PROTO || "");
+         return pp ? "Symbol(src)_1." + pp : ""
+ ... (35 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L258-L261` → after: `L1158-L1503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR1158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L1158-L1503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/233.js#L1158-L1503) · [Before (L258-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/233.js#L258-L261)

```diff
-       clear() {
-         for (; this._observers.length;) {
-           const DD = this._observers.pop();
-           DD && (DD._remove = null)
+     }
+ 
+     function Ei(pp) {
+       var ip = -1,
+         cp = pp ? pp.length : 0;
+       for (this.clear(); ++ip < cp;) {
+         var Op = pp[ip];
+         this.set(Op[0], Op[1])
+       }
+     }
+ 
+     function Xi(pp) {
+       var ip = -1,
+         cp = pp ? pp.length : 0;
+       for (this.clear(); ++ip < cp;) {
+         var Op = pp[ip];
+ ... (330 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L263` → after: `L1505-L1644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR1505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L1505-L1644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/233.js#L1505-L1644) · [Before (L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/233.js#L263)

```diff
-         this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
+         if (Lp < op || xp > Ip) return 1 / 0;
+         xp > op && (op = xp), Lp < Ip && (Ip = Lp)
+       }
+       return op > Ip ? 1 / 0 : op
+     }
+     pp.exports = function(pp, cp, Op, op) {
+       var Ip = ip(cp, Op, op);
+       if (Ip === 1 / 0) pp = null;
+       else {
+         pp = pp || [];
+         for (var Sp = 0; Sp < cp.length; Sp++) pp[Sp] = cp[Sp] + Op[Sp] * Ip
+       }
+       return pp
+     }, pp.exports.distance = ip
+   },
+   37951: (pp, ip, cp) => {
+ ... (124 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L265-L266` → after: `L1646-L1670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR1646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L1646-L1670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/233.js#L1646-L1670) · [Before (L265-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/233.js#L265-L266)

```diff
-       cleanLastNotifiedState() {
-         this._hasNotified = !1, this._lastNotifiedValue = void 0
+       static GetBottomPlaneToRef(pp, ip) {
+         const cp = pp.m;
+         ip.normal.x = cp[3] + cp[1], ip.normal.y = cp[7] + cp[5], ip.normal.z = cp[11] + cp[9], ip.d = cp[15] + cp[13], ip.normalize()
+       }
+       static GetPlanesToRef(pp, ip) {
+         op.GetNearPlaneToRef(pp, ip[0]), op.GetFarPlaneToRef(pp, ip[1]), op.GetLeftPlaneToRef(pp, ip[2]), op.GetRightPlaneToRef(pp, ip[3]), op.GetTopPlaneToRef(pp, ip[4]), op.GetBottomPlaneToRef(pp, ip[5])
+       }
+       static IsPointInFrustum(pp, ip) {
+         for (let cp = 0; cp < 6; cp++)
+           if (ip[cp].dotCoordinate(pp) < 0) return !1;
+         return !0
+       }
+     }
+   },
+   37989: (pp, ip, cp) => {
+     cp.d(ip, {
+ ... (9 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L269-L270` → after: `L1673-L1729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR1673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L1673-L1729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/233.js#L1673-L1729) · [Before (L269-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/233.js#L269-L270)

```diff
-         const DD = new rD;
-         return DD._observers = this._observers.slice(0), DD
+         return new op(this.normal.x, this.normal.y, this.normal.z, this.d)
+       }
+       getClassName() {
+         return "Plane"
+       }
+       getHashCode() {
+         let pp = this.normal.getHashCode();
+         return pp = 397 * pp ^ this.d, pp
+       }
+       normalize() {
+         const pp = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
+         let ip = 0;
+         return 0 !== pp && (ip = 1 / pp), this.normal.x *= ip, this.normal.y *= ip, this.normal.z *= ip, this.d *= ip, this
+       }
+       transform(pp) {
+         const ip = op._TmpMatrix;
+ ... (41 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L272-L276` → after: `L1731-L1740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR1731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L1731-L1740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/233.js#L1731-L1740) · [Before (L272-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/233.js#L272-L276)

```diff
-       hasSpecificMask() {
-         let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
-         for (const zD of this._observers)
-           if (zD.mask & DD || zD.mask === DD) return !0;
-         return !1
+       static FromPositionAndNormal(pp, ip) {
+         const cp = new op(0, 0, 0, 0);
+         return this.FromPositionAndNormalToRef(pp, ip, cp)
+       }
+       static FromPositionAndNormalToRef(pp, ip, cp) {
+         return cp.normal.rM(ip), cp.normal.normalize(), cp.d = -pp.dot(cp.normal), cp
+       }
+       static SignedDistanceToPlaneFromPositionAndNormal(pp, ip, cp) {
+         const op = -(ip.x * pp.x + ip.y * pp.y + ip.z * pp.z);
+         return Op.o.Dot(cp, ip) + op
```

#### 26. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L280` → after: `L1745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR1745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L1745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/233.js#L1745) · [Before (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/233.js#L280)

```diff
-   61016: (DD, zD, wD) => {
+   37313: (pp, ip, cp) => {
```

#### 27. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L282-L285` → after: `L1747-L1753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR1747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L1747-L1753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/233.js#L1747-L1753) · [Before (L282-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/233.js#L282-L285)

```diff
-       AsyncLoop: () => pD.c,
-       RegisterTools: () => pD.g,
-       Tools: () => pD.h,
-       className: () => pD.j
+       Matrix: () => Op.b,
+       Quaternion: () => Op.f,
+       RegisterMathVector: () => Op.h,
+       TmpVectors: () => Op.i,
+       Vector2: () => Op.l,
+       Zy: () => Op.o,
+       Vector4: () => Op.q
```

#### 28. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L287-L288` → after: `L1755-L1756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR1755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L1755-L1756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/233.js#L1755-L1756) · [Before (L287-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/233.js#L287-L288)

```diff
-     var pD = wD(40027);
-     (0, pD.g)()
+     var Op = cp(37320);
+     (0, Op.h)()
```

#### 29. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L290` → after: `L1758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR1758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L1758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/233.js#L1758) · [Before (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/233.js#L290)

```diff
-   37134: (DD, zD, wD) => {
+   38313: (pp, ip, cp) => {
```

#### 30. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L292-L293` → after: `L1760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR1760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L1760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/233.js#L1760) · [Before (L292-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/233.js#L292-L293)

```diff
-       e: () => KD,
-       i: () => sD
+       c: () => Op
```

#### 31. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L295-L298` → after: `L1762-L1774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR1762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L1762-L1774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/233.js#L1762-L1774) · [Before (L295-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/233.js#L295-L298)

```diff
-     const pD = {};
- 
-     function sD(DD, zD) {
-       pD[DD] = zD
+     class Op {
+       constructor(pp, ip, cp, Op) {
+         this.x = pp, this.y = ip, this.width = cp, this.height = Op
+       }
+       toGlobal(pp, ip) {
+         return new Op(this.x * pp, this.y * ip, this.width * pp, this.height * ip)
+       }
+       toGlobalToRef(pp, ip, cp) {
+         return cp.x = this.x * pp, cp.y = this.y * ip, cp.width = this.width * pp, cp.height = this.height * ip, this
+       }
+       clone() {
+         return new Op(this.x, this.y, this.width, this.height)
+       }
```

#### 32. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L300-L302` → after: `L1776-L1782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR1776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L1776-L1782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/233.js#L1776-L1782) · [Before (L300-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/233.js#L300-L302)

```diff
- 
-     function KD(DD) {
-       return pD[DD]
+   },
+   38124: (pp, ip, cp) => {
+     function Op() {
+       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (pp => {
+         const ip = 16 * Math.random() | 0;
+         return ("x" === pp ? ip : 3 & ip | 8).toString(16)
+       }))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/234.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/234.js` (30 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7)

#### 1. `bundles/bloxd.io/chunks/js/234.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/234.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/234.js#L2)

```diff
- export const ids = [234];
+ export const ids = [234, 241, 244];
```

#### 2. `bundles/bloxd.io/chunks/js/234.js` (Changed code · before: `L4-L7` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/234.js#L4-L7) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/234.js#L4-L7)

```diff
-   61039: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
-       DEVTOOLS_SHADERS: () => KD,
-       registerDevtoolsShader: () => rD
+   40435: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Sp,
+       f: () => xp
```

#### 3. `bundles/bloxd.io/chunks/js/234.js` (Changed code · before: `L9-L15` → after: `L9-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7) · [After (L9-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/234.js#L9-L24) · [Before (L9-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/234.js#L9-L15)

```diff
-     var pD = wD(39776),
-       sD = wD(37186);
-     const KD = {
-       devtoolsNormal: function(DD) {
-         return {
-           vertex: `\n\t\t\t${(0,sD.g)(DD,"position","vec3")}\n\t\t\t${(0,sD.g)(DD,"normal","vec3")}\n\t\t\t${(0,sD.Cb)(DD,"worldViewProjection","mat4")}\n\t\t\t${(0,sD.Cb)(DD,"world","mat4")}\n\t\t\t${(0,sD.Jb)(DD,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,sD.Kb)(DD,`\n\t\t\t\t${ … [truncated]
-           fragment: `\n\t\t\t${(0,sD.Jb)(DD,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,sD.N)(DD,`\n\t\t\t\t\n\t\t\t\t${(0,sD.E)(DD,"vec3","normalColor",`abs(${(0,sD.R)(DD,"vNormal")})`)}\n\t\t\t\t${(0,sD.I)(DD)} = ${(0,sD.q)(DD,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
+     var Op = cp(38905),
+       op = cp(40233),
+       Ip = cp(40411),
+       Sp = {};
+     class xp {
+       constructor(pp) {
+         this.attachedToElement = !1, this.attached = {}, this.camera = pp, this.checkInputs = () => {}
+       }
+       add(pp) {
+         const ip = pp.getSimpleName();
+         this.attached[ip] ? Op.e.Warn("camera input of type " + ip + " already exists on camera") : (this.attached[ip] = pp, pp.camera = this.camera, pp.checkInputs && (this.checkInputs = this._addCheckInputs(pp.checkInputs.bind(pp))), this.attachedToElement && pp.attachControl(t … [truncated]
+       }
+       remove(pp) {
+         for (const ip in this.attached) {
+           const cp = this.attached[ip];
+           if (cp === pp) return cp.detachControl(), cp.camera = null, delete this.attached[ip], void this.rebuildInputCheck()
```

#### 4. `bundles/bloxd.io/chunks/js/234.js` (Changed code · before: `L17-L21` → after: `L26-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7) · [After (L26-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/234.js#L26-L30) · [Before (L17-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/234.js#L17-L21)

```diff
-       },
-       devtoolsWhite: function(DD) {
-         return {
-           vertex: `\n\t\t\t${(0,sD.g)(DD,"position","vec3")}\n\t\t\t${(0,sD.Cb)(DD,"worldViewProjection","mat4")}\n\n\t\t\t${(0,sD.Kb)(DD,`\n\t\t\t\t${(0,sD.o)(DD)} = ${(0,sD.Fb)(DD,"worldViewProjection")} * ${(0,sD.q)(DD,"vec4",(0,sD.Nb)(DD,"position"),"1.0")};\n\t\t\t`)}\n\t\t` … [truncated]
-           fragment: `\n\t\t\t${(0,sD.N)(DD,`\n\t\t\t\t${(0,sD.I)(DD)} = ${(0,sD.q)(DD,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
+       }
+       removeByType(pp) {
+         for (const ip in this.attached) {
+           const cp = this.attached[ip];
+           cp.getClassName() === pp && (cp.detachControl(), cp.camera = null, delete this.attached[ip], this.rebuildInputCheck())
```

#### 5. `bundles/bloxd.io/chunks/js/234.js` (Changed code · before: `L23-L27` → after: `L32-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7) · [After (L32-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/234.js#L32-L36) · [Before (L23-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/234.js#L23-L27)

```diff
-       },
-       devtoolsDepth: function(DD) {
-         return {
-           vertex: `\n\t\t\t${(0,sD.g)(DD,"position","vec3")}\n\t\t\t${(0,sD.Cb)(DD,"worldViewProjection","mat4")}\n\t\t\t${(0,sD.Cb)(DD,"world","mat4")}\n\t\t\t${(0,sD.Cb)(DD,"cameraPosition","vec3")}\n\t\t\t${(0,sD.Jb)(DD,"vDepth","float","mediump")}\n\n\t\t\t${(0,sD.Kb)(DD,`\n\ … [truncated]
-           fragment: `\n\t\t\t${(0,sD.Jb)(DD,"vDepth","float","mediump")}\n\t\t\t${(0,sD.Cb)(DD,"maxDepth","float")}\n\t\t\t${(0,sD.Cb)(DD,"minDepth","float")}\n\n\t\t\t${(0,sD.N)(DD,`\n\t\t\t\t\n\t\t\t\t${(0,sD.E)(DD,"float","normalizedDepth",`clamp((${(0,sD.R)(DD,"vDepth")} - ${ … [truncated]
+       }
+       _addCheckInputs(pp) {
+         const ip = this.checkInputs;
+         return () => {
+           ip(), pp()
```

#### 6. `bundles/bloxd.io/chunks/js/234.js` (Changed code · before: `L30-L37` → after: `L39-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7) · [After (L39-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/234.js#L39-L93) · [Before (L30-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/234.js#L30-L37)

```diff
-     };
- 
-     function rD(DD, zD) {
-       const {
-         vertex: wD,
-         fragment: sD
-       } = KD[DD](zD), rD = pD.e.GetShadersStore(zD);
-       rD[`${DD}VertexShader`] = wD, rD[`${DD}FragmentShader`] = sD
+       attachInput(pp) {
+         this.attachedToElement && pp.attachControl(this.noPreventDefault)
+       }
+       attachElement() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         if (!this.attachedToElement) {
+           pp = !Ip.d.ForceAttachControlToAlwaysPreventDefault && pp, this.attachedToElement = !0, this.noPreventDefault = pp;
+           for (const ip in this.attached) this.attached[ip].attachControl(pp)
+         }
+       }
+       detachElement() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         for (const ip in this.attached) this.attached[ip].detachControl(), pp && (this.attached[ip].camera = null);
+         this.attachedToElement = !1
+       }
+       rebuildInputCheck() {
+ ... (39 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/234.js` (Changed code · before: `L40` → after: `L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7) · [After (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/234.js#L96) · [Before (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/234.js#L40)

```diff
-   37186: (DD, zD, wD) => {
+   40443: (pp, ip, cp) => {
```

#### 8. `bundles/bloxd.io/chunks/js/234.js` (Changed code · before: `L42-L78` → after: `L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7) · [After (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/234.js#L98) · [Before (L42-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/234.js#L42-L78)

```diff
-       Ab: () => gD,
-       C: () => fD,
-       Cb: () => hD,
-       D: () => AD,
-       E: () => RD,
-       F: () => XD,
-       Fb: () => TD,
-       G: () => jD,
-       H: () => KD,
-       I: () => iD,
-       J: () => SD,
-       Jb: () => GD,
-       Kb: () => MD,
-       N: () => OD,
-       Nb: () => PD,
-       Pb: () => CD,
- ... (21 more removed lines; see GitHub link above)
+       d: () => Op.b
```

#### 9. `bundles/bloxd.io/chunks/js/234.js` (Changed code · before: `L80-L128` → after: `L100-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7) · [After (L100-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/234.js#L100-L194) · [Before (L80-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/234.js#L80-L128)

```diff
-     const pD = {
-       GLSL: 0,
-       WGSL: 1
-     };
- 
-     function sD(DD) {
-       return DD === pD.WGSL
-     }
- 
-     function KD(DD, zD, wD) {
-       return sD(DD) ? wD : zD
-     }
-     const rD = new Map([
-       ["int", "i32"],
-       ["float", "f32"],
-       ["vec2", "vec2f"],
- ... (33 more removed lines; see GitHub link above)
+     var Op = cp(40445);
+     (0, Op.d)()
+   },
+   40445: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Dp,
+       d: () => Pp
+     });
+     var Op = cp(40203),
+       op = cp(40210),
+       Ip = cp(37320),
+       Sp = cp(37487),
+       xp = cp(40451),
+       Lp = cp(40415),
+       Yp = cp(37368);
+     let Dp = (() => {
+ ... (79 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/234.js` (Changed code · before: `L130-L133` → after: `L196-L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7) · [After (L196-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/234.js#L196-L214) · [Before (L130-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/234.js#L130-L133)

```diff
- 
-     function fD(DD, zD, wD, pD, KD) {
-       if (sD(DD)) {
-         return `fn ${wD}(${pD.map((zD=>`${zD.name}: ${LD(DD,zD.type)}`)).join(", ")}) -> ${LD(DD,zD)} {${KD}}`
+   },
+   37479: (pp, ip, cp) => {
+     cp.d(ip, {
+       Color3: () => Op.d,
+       b: () => Op.h
+     });
+     var Op = cp(37487);
+     (0, Op.i)()
+   },
+   37985: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => op
+     });
+     var Op = cp(37989);
+     class op {
+       static GetPlanes(pp) {
+ ... (3 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/234.js` (Changed code · before: `L135-L168` → after: `L216-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7R216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7) · [After (L216-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/234.js#L216-L218) · [Before (L135-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/234.js#L135-L168)

```diff
-       return `${zD} ${wD}(${pD.map((DD=>`${DD.type} ${DD.name}`)).join(", ")}) {${KD}}`
-     }
- 
-     function ID(DD, zD) {
-       return !zD || sD(DD) ? "" : `${zD} `
-     }
- 
-     function BD(DD, zD, wD, pD) {
-       return sD(DD) ? `attribute ${zD}: ${LD(DD,wD)};` : `attribute ${ID(DD,pD)}${wD} ${zD};`
-     }
- 
-     function GD(DD, zD, wD, pD) {
-       return sD(DD) ? `varying ${zD}: ${LD(DD,wD)};` : `varying ${ID(DD,pD)}${wD} ${zD};`
-     }
- 
-     function hD(DD, zD, wD) {
- ... (18 more removed lines; see GitHub link above)
+       static GetNearPlaneToRef(pp, ip) {
+         const cp = pp.m;
+         ip.normal.x = cp[3] + cp[2], ip.normal.y = cp[7] + cp[6], ip.normal.z = cp[11] + cp[10], ip.d = cp[15] + cp[14], ip.normalize()
```

#### 12. `bundles/bloxd.io/chunks/js/234.js` (Changed code · before: `L170-L179` → after: `L220-L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7) · [After (L220-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/234.js#L220-L222) · [Before (L170-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/234.js#L170-L179)

```diff
-       return `uniform highp ${"2dArray"===wD?"sampler2DArray":"sampler2D"} ${zD};`
-     }
- 
-     function ED(DD, zD, wD) {
-       return sD(DD) ? `textureSample(${zD}, ${zD}Sampler, ${wD})` : `texture2D(${zD}, ${wD})`
-     }
- 
-     function QD(DD, zD, wD, pD, KD) {
-       if (sD(DD)) {
-         return `${KD?"textureSampleLevel":"textureSample"}(${zD}, ${zD}Sampler, ${wD}, ${gD(DD,`round(${pD})`)}${KD?`, ${KD}`:""})`
+       static GetFarPlaneToRef(pp, ip) {
+         const cp = pp.m;
+         ip.normal.x = cp[3] - cp[2], ip.normal.y = cp[7] - cp[6], ip.normal.z = cp[11] - cp[10], ip.d = cp[15] - cp[14], ip.normalize()
```

#### 13. `bundles/bloxd.io/chunks/js/234.js` (Changed code · before: `L181-L193` → after: `L224-L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7R224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7) · [After (L224-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/234.js#L224-L246) · [Before (L181-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/234.js#L181-L193)

```diff
-       const rD = cD(DD, "vec3", wD, pD);
-       return KD ? `textureLod(${zD}, ${rD}, ${KD})` : `texture(${zD}, ${rD})`
-     }
- 
-     function XD(DD) {
-       return sD(DD) ? "!baseColor\\=\\w+\\(diffuseSampler,diffuseSamplerSampler,fragmentInputs\\.vDiffuseUV\\+uvOffset\\);" : "!baseColor\\=\\w+\\(diffuseSampler,vDiffuseUV\\+uvOffset\\);"
-     }
- 
-     function VD(DD) {
-       return sD(DD) ? {
-         "!varying vMainUV1: vec2f;": "centroid varying vMainUV1: vec2f;"
-       } : {
-         "!varying vec2 vMainUV1;": "#ifdef WEBGL2\ncentroid varying vec2 vMainUV1;\n#else\nvarying vec2 vMainUV1;\n#endif"
+       static GetLeftPlaneToRef(pp, ip) {
+         const cp = pp.m;
+         ip.normal.x = cp[3] + cp[0], ip.normal.y = cp[7] + cp[4], ip.normal.z = cp[11] + cp[8], ip.d = cp[15] + cp[12], ip.normalize()
+       }
+       static GetRightPlaneToRef(pp, ip) {
+         const cp = pp.m;
+         ip.normal.x = cp[3] - cp[0], ip.normal.y = cp[7] - cp[4], ip.normal.z = cp[11] - cp[8], ip.d = cp[15] - cp[12], ip.normalize()
+       }
+       static GetTopPlaneToRef(pp, ip) {
+         const cp = pp.m;
+         ip.normal.x = cp[3] - cp[1], ip.normal.y = cp[7] - cp[5], ip.normal.z = cp[11] - cp[9], ip.d = cp[15] - cp[13], ip.normalize()
+       }
+       static GetBottomPlaneToRef(pp, ip) {
+         const cp = pp.m;
+         ip.normal.x = cp[3] + cp[1], ip.normal.y = cp[7] + cp[5], ip.normal.z = cp[11] + cp[9], ip.d = cp[15] + cp[13], ip.normalize()
+       }
+ ... (7 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/234.js` (Changed code · before: `L196-L210` → after: `L249-L331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7R249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7) · [After (L249-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/234.js#L249-L331) · [Before (L196-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/234.js#L196-L210)

```diff
- 
-     function PD(DD, zD) {
-       return sD(DD) ? `vertexInputs.${zD}` : zD
-     }
- 
-     function CD(DD, zD) {
-       return sD(DD) ? `vertexOutputs.${zD}` : zD
-     }
- 
-     function xD(DD, zD) {
-       return sD(DD) ? `fragmentInputs.${zD}` : zD
-     }
- 
-     function TD(DD, zD) {
-       return sD(DD) ? `uniforms.${zD}` : zD
+   },
+   37989: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => op
+     });
+     var Op = cp(37320);
+     class op {
+       constructor(pp, ip, cp, op) {
+         this.normal = new Op.o(pp, ip, cp), this.d = op
+       }
+       BOp() {
+         return [this.normal.x, this.normal.y, this.normal.z, this.d]
+       }
+       clone() {
+         return new op(this.normal.x, this.normal.y, this.normal.z, this.d)
+       }
+ ... (67 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/234.js` (Changed code · before: `L212-L214` → after: `L333-L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7R333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7) · [After (L333-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/234.js#L333-L364) · [Before (L212-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/234.js#L212-L214)

```diff
- 
-     function bD(DD, zD, wD) {
-       return sD(DD) ? `frame.${zD}` : wD
+     op._TmpMatrix = Op.b.Identity()
+   },
+   37313: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       Matrix: () => Op.b,
+       Quaternion: () => Op.f,
+       RegisterMathVector: () => Op.h,
+       TmpVectors: () => Op.i,
+       Vector2: () => Op.l,
+       Zy: () => Op.o,
+       Vector4: () => Op.q
+     });
+     var Op = cp(37320);
+     (0, Op.h)()
+   },
+   38313: (pp, ip, cp) => {
+ ... (16 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/234.js` (Changed code · before: `L218` → after: `L378-L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7R378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7) · [After (L378-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/234.js#L378-L427) · [Before (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/234.js#L218)

```diff
-       return sD(DD) ? "scene.vEyePosition" : "vEyePosition"
+       let ip = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
+       const cp = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
+         Ip = [],
+         Lp = pp.width || pp.size || 1,
+         Yp = pp.height || pp.size || 1,
+         Dp = pp.depth || pp.size || 1,
+         Ap = pp.wrap || !1;
+       let Pp = void 0 === pp.topBaseAt ? 1 : pp.topBaseAt,
+         Wp = void 0 === pp.bottomBaseAt ? 0 : pp.bottomBaseAt;
+       Pp = (Pp + 4) % 4, Wp = (Wp + 4) % 4;
+       let yp = [2, 0, 3, 1][Pp],
+         Up = [2, 0, 1, 3][Wp],
+         wp = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];
+       if (Ap) {
+         ip = [2, 3, 0, 2, 0, 1, 4, 5, 6, 4, 6, 7, 9, 10, 11, 9, 11, 8, 12, 14, 15, 12, 13, 14], wp = [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1];
+         let pp = [
+ ... (34 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/234.js` (Changed code · before: `L222-L223` → after: `L431-L455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7R431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7) · [After (L431-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/234.js#L431-L455) · [Before (L222-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/234.js#L222-L223)

```diff
-       return sD(DD) ? "mesh.visibility" : "visibility"
-     }
+       let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
+         cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+       const Op = new Ip.d(pp, cp);
+       ip.sideOrientation = Ip.d._GetDefaultSideOrientation(ip.sideOrientation), Op._originalBuilderSideOrientation = ip.sideOrientation;
+       return Lp(ip).applyToMesh(Op, ip.updatable), Op
+     }
+     let Dp = !1;
+     Dp || (Dp = !0, Sp.d.CreateBox = Lp, Ip.d.CreateBox = function(pp, ip) {
+       return Yp(pp, {
+         size: ip,
+         sideOrientation: arguments.length > 4 ? arguments[4] : void 0,
+         updatable: arguments.length > 3 ? arguments[3] : void 0
+       }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
+     })
+   },
+   40626: (pp, ip, cp) => {
+ ... (9 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/234.js` (Changed code · before: `L226` → after: `L458-L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7R458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7) · [After (L458-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/234.js#L458-L486) · [Before (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/234.js#L226)

```diff
-       return sD(DD) ? "fragmentInputs.position" : "gl_FragCoord"
+       const ip = [],
+         cp = [],
+         Op = pp.lines,
+         op = pp.colors,
+         Sp = [];
+       let xp = 0;
+       for (let Ip = 0; Ip < Op.length; Ip++) {
+         const pp = Op[Ip];
+         for (let Op = 0; Op < pp.length; Op++) {
+           const {
+             x: Lp,
+             y: Yp,
+             z: Dp
+           } = pp[Op];
+           if (cp.push(Lp, Yp, Dp), op) {
+             const pp = op[Ip],
+ ... (13 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/234.js` (Changed code · before: `L230` → after: `L490-L507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7R490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7) · [After (L490-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/234.js#L490-L507) · [Before (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/234.js#L230)

```diff
-       return sD(DD) ? "fragmentOutputs.color" : "gl_FragColor"
+       const ip = pp.dashSize || 3,
+         cp = pp.gapSize || 1,
+         op = pp.dashNb || 200,
+         Sp = pp.points,
+         xp = [],
+         Lp = [],
+         Yp = Op.o.Zero();
+       let Dp, Ap, Pp, Wp = 0,
+         yp = 0;
+       for (Pp = 0; Pp < Sp.length - 1; Pp++) Sp[Pp + 1].subtractToRef(Sp[Pp], Yp), Wp += Yp.length();
+       const Up = Wp / op,
+         wp = ip * Up / (ip + cp);
+       for (Pp = 0; Pp < Sp.length - 1; Pp++) {
+         Sp[Pp + 1].subtractToRef(Sp[Pp], Yp), Dp = Math.floor(Yp.length() / Up), Yp.normalize();
+         for (let pp = 0; pp < Dp; pp++) Ap = Up * pp, xp.push(Sp[Pp].x + Ap * Yp.x, Sp[Pp].y + Ap * Yp.y, Sp[Pp].z + Ap * Yp.z), xp.push(Sp[Pp].x + (Ap + wp) * Yp.x, Sp[Pp].y + (Ap + wp) * Yp.y, Sp[Pp].z + (Ap + wp) * Yp.z), Lp.push(yp, yp + 1), yp += 2
+       }
+ ... (2 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/234.js` (Changed code · before: `L234` → after: `L511-L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7R511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7) · [After (L511-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/234.js#L511-L529) · [Before (L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/234.js#L234)

```diff
-       return sD(DD) ? `dpdx(${zD})` : `dFdx(${zD})`
+       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+       const Op = ip.instance,
+         op = ip.lines,
+         Ip = ip.colors;
+       if (Op) {
+         const pp = Op.getVerticesData(xp.j.PositionKind);
+         let ip, cp;
+         Ip && (ip = Op.getVerticesData(xp.j.ColorKind));
+         let Sp = 0,
+           Lp = 0;
+         for (let Op = 0; Op < op.length; Op++) {
+           const xp = op[Op];
+           for (let op = 0; op < xp.length; op++) pp[Sp] = xp[op].x, pp[Sp + 1] = xp[op].y, pp[Sp + 2] = xp[op].z, Ip && ip && (cp = Ip[Op], ip[Lp] = cp[op].r, ip[Lp + 1] = cp[op].g, ip[Lp + 2] = cp[op].b, ip[Lp + 3] = cp[op].a, Lp += 4), Sp += 3
+         }
+         return Op.updateVerticesData(xp.j.PositionKind, pp, !1, !1), Ip && ip && Op.updateVerticesData(xp.j.ColorKind, ip, !1, !1), Op.refreshBoundingInfo(), Op
+       }
+ ... (3 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/234.js` (Changed code · before: `L238` → after: `L533-L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7R533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7) · [After (L533-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/234.js#L533-L542) · [Before (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/234.js#L238)

```diff
-       return sD(DD) ? `dpdy(${zD})` : `dFdy(${zD})`
+       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+       const Op = ip.colors ? [ip.colors] : null;
+       return Ap(pp, {
+         lines: [ip.points],
+         updatable: ip.updatable,
+         instance: ip.instance,
+         colors: Op,
+         useVertexAlpha: ip.useVertexAlpha,
+         material: ip.material
+       }, cp)
```

#### 22. `bundles/bloxd.io/chunks/js/234.js` (Changed code · before: `L242-L250` → after: `L546-L691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7R546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7) · [After (L546-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/234.js#L546-L691) · [Before (L242-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/234.js#L242-L250)

```diff
-       return sD(DD) ? `inverseSqrt(${zD})` : `inversesqrt(${zD})`
-     }
- 
-     function ZD(DD, zD, wD, pD) {
-       return sD(DD) ? `select(${pD}, ${wD}, ${zD})` : `((${zD}) ? (${wD}) : (${pD}))`
-     }
- 
-     function yD(DD, zD, wD) {
-       return sD(DD) ? `((${zD}) - (${wD}) * floor((${zD}) / (${wD})))` : `mod(${zD}, ${wD})`
+       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+       const Ip = ip.points,
+         xp = ip.instance,
+         Yp = ip.gapSize || 1,
+         Ap = ip.dashSize || 3;
+       if (xp) {
+         const pp = pp => {
+           const ip = Op.o.Zero(),
+             cp = pp.length / 6;
+           let op, Sp, Lp, Yp, Dp = 0,
+             Ap = 0;
+           for (Lp = 0; Lp < Ip.length - 1; Lp++) Ip[Lp + 1].subtractToRef(Ip[Lp], ip), Dp += ip.length();
+           const Pp = Dp / cp,
+             Wp = xp._creationDataStorage.dashSize,
+             yp = Wp * Pp / (Wp + xp._creationDataStorage.gapSize);
+           for (Lp = 0; Lp < Ip.length - 1; Lp++)
+ ... (130 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/234.js` (Changed code · before: `L252-L254` → after: `L693-L700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7R693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7) · [After (L693-L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/234.js#L693-L700) · [Before (L252-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/234.js#L252-L254)

```diff
- 
-     function kD(DD, zD, wD) {
-       return sD(DD) ? `${zD} = vec4f(${wD}, ${zD}.a);` : `${zD}.rgb = ${wD};`
+     Pp.ForceGLSL = !1;
+     class Wp extends Lp.d {
+       constructor(pp, ip) {
+         super(pp, ip), this.intersectionThreshold = ip.intersectionThreshold
+       }
+       getClassName() {
+         return "InstancedLinesMesh"
+       }
```

#### 24. `bundles/bloxd.io/chunks/js/234.js` (Changed code · before: `L257-L258` → after: `L704-L748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7R704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7) · [After (L704-L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/234.js#L704-L748) · [Before (L257-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/234.js#L257-L258)

```diff
-     function mD(DD, zD, wD) {
-       return sD(DD) ? `${zD} = vec4f(${zD}.rgb * (${wD}), ${zD}.a);` : `${zD}.rgb *= ${wD};`
+     function Up() {
+       yp || (yp = !0, xp.d._LinesMeshParser = (pp, ip) => Pp.Parse(pp, ip))
+     }(Op = Pp.prototype).enableEdgesRendering ?? (Op.enableEdgesRendering = (0, Ap.k)("LinesMesh", "enableEdgesRendering")), (op = Wp.prototype).enableEdgesRendering ?? (op.enableEdgesRendering = (0, Ap.k)("InstancedLinesMesh", "enableEdgesRendering"))
+   },
+   38900: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Ip
+     });
+     var Op = cp(38905);
+     const op = (pp, ip, cp) => pp ? pp.getClassName && "Mesh" === pp.getClassName() ? null : !pp.getClassName || "SubMesh" !== pp.getClassName() && "PhysicsBody" !== pp.getClassName() ? pp.clone ? pp.clone() : Array.isArray(pp) ? pp.slice() : cp && "object" === typeof pp ? {
+       ...pp
+     } : null : pp.clone(ip) : null;
+     class Ip {
+       static DeepCopy(pp, ip, cp, Ip) {
+         let Sp = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         const xp = function(pp) {
+ ... (29 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/234.js` (Changed code · before: `L260-L262` → after: `L750-L756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7R750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7) · [After (L750-L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/234.js#L750-L756) · [Before (L260-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/234.js#L260-L262)

```diff
- 
-     function eD(DD, zD, wD) {
-       return sD(DD) ? `${zD} = vec4f(${wD}, ${zD}.w);` : `${zD}.xyz = ${wD};`
+   },
+   38124: (pp, ip, cp) => {
+     function Op() {
+       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (pp => {
+         const ip = 16 * Math.random() | 0;
+         return ("x" === pp ? ip : 3 & ip | 8).toString(16)
+       }))
```

#### 26. `bundles/bloxd.io/chunks/js/234.js` (Changed code · before: `L265` → after: `L762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7R762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7) · [After (L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/234.js#L762) · [Before (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/234.js#L265)

```diff
-   39776: (DD, zD, wD) => {
+   38905: (pp, ip, cp) => {
```

#### 27. `bundles/bloxd.io/chunks/js/234.js` (Changed code · before: `L270-L271` → after: `L767-L782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7R767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7) · [After (L767-L782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/234.js#L767-L782) · [Before (L270-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/234.js#L270-L271)

```diff
-       static GetShadersRepository() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? pD.ShadersRepository : pD.ShadersRepositoryWGSL
+       static _CheckLimit(pp, ip) {
+         let cp = Op._LogLimitOutputs[pp];
+         return cp ? cp.current++ : (cp = {
+           limit: ip,
+           current: 1
+         }, Op._LogLimitOutputs[pp] = cp), cp.current <= cp.limit
+       }
+       static _GenerateLimitMessage(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         const cp = Op._LogLimitOutputs[pp];
+         if (!cp || !Op.MessageLimitReached) return;
+         const op = this._Levels[ip];
+         cp.current === cp.limit && Op[op.name](Op.MessageLimitReached.replace(/%LIMIT%/g, "" + cp.limit).replace(/%TYPE%/g, op.name ?? ""))
+       }
+       static _AddLogEntry(pp) {
+         Op._LogCache = pp + Op._LogCache, Op.OnNewCacheEntry && Op.OnNewCacheEntry(pp)
```

#### 28. `bundles/bloxd.io/chunks/js/234.js` (Changed code · before: `L273-L274` → after: `L784-L787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7R784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7) · [After (L784-L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/234.js#L784-L787) · [Before (L273-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/234.js#L273-L274)

```diff
-       static GetShadersStore() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? pD.ShadersStore : pD.ShadersStoreWGSL
+       static _FormatMessage(pp) {
+         const ip = pp => pp < 10 ? "0" + pp : "" + pp,
+           cp = new Date;
+         return "[" + ip(cp.getHours()) + ":" + ip(cp.getMinutes()) + ":" + ip(cp.getSeconds()) + "]: " + pp
```

#### 29. `bundles/bloxd.io/chunks/js/234.js` (Changed code · before: `L276-L277` → after: `L789-L816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7R789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7) · [After (L789-L816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/234.js#L789-L816) · [Before (L276-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/234.js#L276-L277)

```diff
-       static GetIncludesShadersStore() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? pD.IncludesShadersStore : pD.IncludesShadersStoreWGSL
+       static _LogDisabled(pp, ip) {}
+       static _LogEnabled() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
+           ip = arguments.length > 1 ? arguments[1] : void 0,
+           cp = arguments.length > 2 ? arguments[2] : void 0;
+         const op = Array.isArray(ip) ? ip[0] : ip;
+         if (void 0 !== cp && !Op._CheckLimit(op, cp)) return;
+         const Ip = Op._FormatMessage(op),
+           Sp = this._Levels[pp],
+           xp = Array.isArray(ip) ? ip.slice(1) : [];
+         Sp.logFunc && Sp.logFunc("BJS - " + Ip, ...xp);
+         const Lp = `<div style='color:${Sp.color}'>${Ip}</div><br>`;
+         Op._AddLogEntry(Lp), Op._GenerateLimitMessage(op, pp)
+       }
+       static get LogCache() {
+         return Op._LogCache
+ ... (12 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/234.js` (Changed code · before: `L280` → after: `L819-L838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7R819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7) · [After (L819-L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/234.js#L819-L838) · [Before (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/234.js#L280)

```diff
-     pD.ShadersRepository = "src/Shaders/", pD.ShadersStore = {}, pD.IncludesShadersStore = {}, pD.ShadersRepositoryWGSL = "src/ShadersWGSL/", pD.ShadersStoreWGSL = {}, pD.IncludesShadersStoreWGSL = {}
+     Op.NoneLogLevel = 0, Op.MessageLogLevel = 1, Op.WarningLogLevel = 2, Op.ErrorLogLevel = 4, Op.AllLogLevel = 7, Op.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Op._LogCache = "", Op._LogLimitOutputs = {}, Op._Levels =  … [truncated]
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
+     }], Op.errorsCount = 0, Op.Log = Op._LogEnabled.bind(Op, Op.MessageLogLevel), Op.Warn = Op._LogEnabled.bind(Op, Op.WarningLogLevel), Op.Error = Op._LogEnabled.bind(Op, Op.ErrorLogLevel)
+   },
+   40289: (pp, ip, cp) => {
+     cp.d(ip, {
+ ... (4 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/235.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/235.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f)

#### 1. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/235.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/235.js#L2)

```diff
- export const ids = [235];
+ export const ids = [235, 241];
```

#### 2. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L4` → after: `L4-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L4-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/235.js#L4-L33) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/235.js#L4)

```diff
-   37267: (DD, zD, wD) => {
+   42109: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => Sp
+     });
+     var Op = cp(42025),
+       op = cp(40195);
+     let Ip = !1;
+ 
+     function Sp() {
+       Ip || (Ip = !0, op.d.prototype._sphericalPolynomialTargetSize = 0, op.d.prototype.forceSphericalPolynomialsRecompute = function() {
+         this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
+       }, Object.defineProperty(op.d.prototype, "sphericalPolynomial", {
+         get: function() {
+           if (this._texture) {
+             if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
+             if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = Op.d.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialCo … [truncated]
+ ... (14 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L7` → after: `L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/235.js#L36) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/235.js#L7)

```diff
-       e: () => pD.h
+       b: () => Op.h
```

#### 4. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L9` → after: `L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/235.js#L38) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/235.js#L9)

```diff
-     var pD = wD(37273);
+     var Op = cp(37487);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/236.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/236.js` (23 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0)

#### 1. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/236.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/236.js#L4)

```diff
-   40984: (DD, zD, wD) => {
+   37345: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/236.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/236.js#L6)

```diff
-       noaDevTools: () => AD
+       e: () => op
```

#### 3. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L8-L237` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/236.js#L8-L11) · [Before (L8-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/236.js#L8-L237)

```diff
-     var pD = wD(37543),
-       sD = wD(37527),
-       KD = wD(2769),
-       rD = wD(1737),
-       LD = wD(40889);
- 
-     function cD(DD) {
-       const {
-         wB: zD
-       } = DD, wD = zD.engine, pD = {
-         width: wD.getRenderWidth(),
-         height: wD.getRenderHeight()
-       };
-       return {
-         canvas: wD.getRenderingCanvas(),
-         maxTextureSize: wD.getCaps().maxTextureSize,
- ... (214 more removed lines; see GitHub link above)
+     var Op = cp(37349);
+     class op {
+       static get LastCreatedEngine() {
+         return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
```

#### 4. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L239-L242` → after: `L13-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/236.js#L13-L14) · [Before (L239-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/236.js#L239-L242)

```diff
-       capturePhoto(DD, zD, wD) {
-         return function(DD, zD, wD, pD) {
-           return (0, LD.c)(cD(DD), zD, wD, pD)
-         }((0, KD.e)(), DD, zD, wD)
+       static get LastCreatedScene() {
+         return this._LastCreatedScene
```

#### 5. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L246` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/236.js#L19) · [Before (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/236.js#L246)

```diff
-   40889: (DD, zD, wD) => {
+   37338: (pp, ip, cp) => {
```

#### 6. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L248-L249` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/236.js#L21) · [Before (L248-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/236.js#L248-L249)

```diff
-       c: () => LD,
-       g: () => cD
+       e: () => Op
```

#### 7. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L251-L302` → after: `L23-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L23-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/236.js#L23-L30) · [Before (L251-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/236.js#L251-L302)

```diff
-     var pD = wD(1753);
-     const sD = 33177600,
-       KD = 3e4;
-     let rD = !1;
- 
-     function LD(DD, zD, wD) {
-       let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
-       const {
-         scale: LD = 1,
-         type: cD = "image/png",
-         quality: gD
-       } = pD;
-       if (!DD.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
-       if (rD) return Promise.reject(new Error("A screenshot is already being taken"));
-       rD = !0;
-       const RD = function(DD, zD, wD) {
- ... (36 more removed lines; see GitHub link above)
+     class Op {
+       static SetMatrixPrecision(pp) {
+         if (Op.MatrixTrackPrecisionChange = !1, pp && !Op.MatrixUse64Bits && Op.MatrixTrackedMatrices)
+           for (let ip = 0; ip < Op.MatrixTrackedMatrices.length; ++ip) {
+             const pp = Op.MatrixTrackedMatrices[ip],
+               cp = pp._m;
+             pp._m = new Array(16);
+             for (let ip = 0; ip < 16; ++ip) pp._m[ip] = cp[ip]
```

#### 8. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L304-L312` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/236.js#L32) · [Before (L304-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/236.js#L304-L312)

```diff
-         }))
-       }))
-     }
-     async function cD(DD, zD, wD) {
-       try {
-         const sD = await LD(DD, zD, wD);
-         (0, pD.b)(sD.blob, `bloxd-screenshot-${sD.width}x${sD.height}-${Date.now()}.png`)
-       } catch (sD) {
-         console.error("Error taking screenshot:", sD)
+         Op.MatrixUse64Bits = pp, Op.MatrixCurrentType = Op.MatrixUse64Bits ? Array : Float32Array, Op.MatrixTrackedMatrices = null
```

#### 9. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L316` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/236.js#L37) · [Before (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/236.js#L316)

```diff
-   37543: (DD, zD, wD) => {
+   37359: (pp, ip, cp) => {
```

#### 10. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L318` → after: `L39-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L39-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/236.js#L39-L40) · [Before (L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/236.js#L318)

```diff
-       c: () => gD,
+       d: () => xp,
+       e: () => Yp,
```

#### 11. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L320` → after: `L42-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L42-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/236.js#L42-L44) · [Before (L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/236.js#L320)

```diff
-       i: () => rD
+       j: () => Op,
+       l: () => Ip,
+       p: () => Sp
```

#### 12. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L322-L324` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/236.js#L46) · [Before (L322-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/236.js#L322-L324)

```diff
-     var pD = wD(37535),
-       sD = wD(37550);
-     let KD = 0;
+     class Op {}
```

#### 13. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L326-L330` → after: `L48-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L48-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/236.js#L48-L49) · [Before (L326-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/236.js#L326-L330)

```diff
-     function rD(DD, zD) {
-       const wD = DD;
-       wD._noaFaceGroups = null !== zD && void 0 !== zD ? zD : null, wD._noaFaceEpoch = -1, wD._noaFaceMask = -1, wD._noaFaceCount = -1, wD._noaFaceMaterial = null;
-       const pD = DD.QE;
-       pD && 1 === pD.length && (pD[0].indexStart = 0, pD[0].indexCount = DD.getTotalIndices())
+     function op(pp) {
+       pp.updateFlag = Op._UpdateFlagSeed++
```

#### 14. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L333-L340` → after: `L52-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L52-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/236.js#L52-L88) · [Before (L333-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/236.js#L333-L340)

```diff
-     function LD(DD, zD) {
-       if (zD) {
-         KD++;
-         for (const zD of DD) {
-           const DD = zD._noaFaceGroups;
-           DD && rD(zD, DD)
-         }
-       } else KD = Math.max(0, KD - 1)
+     function Ip(pp, ip, cp) {
+       let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+       const op = pp.BOp(),
+         Ip = ip.BOp(),
+         Sp = op[0],
+         xp = op[1],
+         Lp = op[2],
+         Yp = op[3],
+         Dp = op[4],
+         Ap = op[5],
+         Pp = op[6],
+         Wp = op[7],
+         yp = op[8],
+         Up = op[9],
+         wp = op[10],
+         vp = op[11],
+ ... (21 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L344-L400` → after: `L92-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L92-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/236.js#L92-L93) · [Before (L344-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/236.js#L344-L400)

```diff
-       let sD = -1,
-         KD = 0;
-       for (let rD = 0; rD < pD.e; rD++) {
-         const wD = DD[rD],
-           LD = DD[rD + 1];
-         LD > wD && zD & 1 << pD.c[rD] && (sD < 0 && (sD = wD), KD = LD)
-       }
-       return sD < 0 ? (wD[0] = 0, wD[1] = 0, 0) : (wD[0] = sD, wD[1] = KD - sD, KD - sD)
-     }
-     class gD {
-       constructor(DD, zD) {
-         this.CI = DD, this.engine = zD, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
-       }
-       apply(DD, zD) {
-         if (!zD) return;
-         const wD = zD.getProjectionMatrix().m,
- ... (41 more removed lines; see GitHub link above)
+       let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+       Ip(pp, ip, cp.BOp(), Op), op(cp)
```

#### 16. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L413` → after: `L97-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L97-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/236.js#L97-L99) · [Before (L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/236.js#L413)

```diff
-       DD._data = zD
+       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+       const Op = pp.BOp();
+       ip[cp] = Op[0], ip[cp + 1] = Op[1], ip[cp + 2] = Op[2], ip[cp + 3] = Op[3], ip[cp + 4] = Op[4], ip[cp + 5] = Op[5], ip[cp + 6] = Op[6], ip[cp + 7] = Op[7], ip[cp + 8] = Op[8], ip[cp + 9] = Op[9], ip[cp + 10] = Op[10], ip[cp + 11] = Op[11], ip[cp + 12] = Op[12], ip[cp + 13]  … [truncated]
```

#### 17. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L416-L441` → after: `L102-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L102-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/236.js#L102-L104) · [Before (L416-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/236.js#L416-L441)

```diff
-     function LD(DD) {
-       var zD, wD;
-       (null !== (zD = null === (wD = DD.getBuffer()) || void 0 === wD ? void 0 : wD.bA) && void 0 !== zD ? zD : 0) > 0 && (pD.add(DD), 0 === sD ? rD(DD, null) : KD.add(DD))
-     }
- 
-     function cD(DD) {
-       sD++;
-       for (const wD of function(DD) {
-           const zD = new Set;
-           for (const sD of DD) {
-             const DD = sD.geometry;
-             for (const sD of Object.values(null !== (wD = null === DD || void 0 === DD ? void 0 : DD.getVertexBuffers()) && void 0 !== wD ? wD : {})) {
-               var wD;
-               const DD = sD.getWrapperBuffer();
-               pD.has(DD) && zD.add(DD)
-             }
- ... (10 more removed lines; see GitHub link above)
+     function Lp(pp, ip) {
+       const cp = Yp(pp, ip.BOp());
+       return cp && op(ip), cp
```

#### 18. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L444-L449` → after: `L107-L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L107-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/236.js#L107-L162) · [Before (L444-L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/236.js#L444-L449)

```diff
-     function gD(DD) {
-       const zD = DD.getBuffer();
-       if (!zD || !(zD.bA > 0)) return;
-       const wD = DD._engine,
-         pD = new Uint8Array(zD.bA);
-       wD.bindArrayBuffer(zD), wD._gl.getBufferSubData(wD._gl.ARRAY_BUFFER, 0, pD), wD._resetVertexBufferBinding(), rD(DD, pD)
+     function Yp(pp, ip) {
+       const cp = pp.BOp(),
+         Op = cp[0],
+         op = cp[1],
+         Ip = cp[2],
+         Sp = cp[3],
+         xp = cp[4],
+         Lp = cp[5],
+         Yp = cp[6],
+         Dp = cp[7],
+         Ap = cp[8],
+         Pp = cp[9],
+         Wp = cp[10],
+         yp = cp[11],
+         Up = cp[12],
+         wp = cp[13],
+ ... (40 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L452` → after: `L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/236.js#L166) · [Before (L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/236.js#L452)

```diff
-   37535: (DD, zD, wD) => {
+   37320: (pp, ip, cp) => {
```

#### 20. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L454-L458` → after: `L168-L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L168-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/236.js#L168-L172) · [Before (L454-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/236.js#L454-L458)

```diff
-       c: () => rD,
-       e: () => KD,
-       g: () => cD,
-       j: () => pD,
-       k: () => LD,
+       b: () => Up,
+       f: () => yp,
+       h: () => dp,
+       i: () => vp,
+       l: () => Ap,
```

#### 21. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L462-L507` → after: `L176-L487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L176-L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/236.js#L176-L487) · [Before (L462-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/236.js#L462-L507)

```diff
-     const pD = 6,
-       sD = [0, 2, 4, 1, 3, 5, 0, 2],
-       KD = 6,
-       rD = [1, 0, 3, 2, 5, 4];
-     for (let RD = KD; RD < sD.length; RD++)
-       if (sD[RD] !== sD[RD - KD]) throw new Error("FACE_LAYOUT must repeat a prefix of its base groups");
-     const LD = sD.length + 1,
-       cD = (() => {
-         const DD = [];
-         for (let zD = 0; zD < KD; zD++) DD[sD[zD]] = zD;
-         return DD
-       })();
- 
-     function gD(DD) {
-       return !!DD && DD.backFaceCulling && (0 === DD.transparencyMode || 1 === DD.transparencyMode)
-     }
- ... (30 more removed lines; see GitHub link above)
+     var Op = cp(37324),
+       op = cp(37329),
+       Ip = cp(37338),
+       Sp = cp(37345),
+       xp = cp(37356),
+       Lp = cp(37359),
+       Yp = cp(37368);
+     const Dp = pp => parseInt(pp.toString().replace(/\W/g, ""));
+     class Ap {
+       constructor() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
+           ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         this.x = pp, this.y = ip
+       }
+       toString() {
+         return `{X: ${this.x} Y: ${this.y}}`
+ ... (296 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L509-L521` → after: `L489-L629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L489-L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/236.js#L489-L629) · [Before (L509-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/236.js#L509-L521)

```diff
-     const AD = (() => {
-         const DD = [];
-         for (let zD = 0; zD < pD.o.length; zD++) {
-           let wD = 0;
-           for (let sD = zD + 1; sD <= pD.o.length; sD++) {
-             const KD = 1 << pD.o[sD - 1];
-             if (wD & KD) break;
-             wD |= KD, DD.push({
-               start: zD,
-               end: sD,
-               Yp: wD
-             })
-           }
+     Ap._V8PerformanceHack = new Ap(.5, .5), Ap._ZeroReadOnly = Ap.Zero();
+     class Pp {
+       get x() {
+         return this._x
+       }
+       set x(pp) {
+         this._x = pp, this._isDirty = !0
+       }
+       get y() {
+         return this._y
+       }
+       set y(pp) {
+         this._y = pp, this._isDirty = !0
+       }
+       get z() {
+         return this._z
+ ... (125 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L524-L566` → after: `L632-L2916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L632-L2916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/236.js#L632-L2916) · [Before (L524-L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/236.js#L524-L566)

```diff
-       })(),
-       UD = [];
- 
-     function fD(DD, zD) {
-       const wD = pD.g[zD];
-       return DD[wD + 1] - DD[wD]
-     }
- 
-     function ID(DD, zD, wD) {
-       let sD = 0;
-       for (let rD = 0; rD < pD.j; rD++) fD(DD, rD) > 0 && (sD |= 1 << rD);
-       if (0 === (zD &= sD)) return 0;
-       if (zD === sD) return wD[0] = 0, wD[1] = DD[pD.e], 1;
-       let KD = null,
-         LD = 1 / 0;
-       for (const gD of function(DD) {
- ... (27 more removed lines; see GitHub link above)
+       }
+       equals(pp) {
+         return pp && this._x === pp._x && this._y === pp._y && this._z === pp._z
+       }
+       equalsWithEpsilon(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Op.b;
+         return pp && (0, xp.WithinEpsilon)(this._x, pp._x, ip) && (0, xp.WithinEpsilon)(this._y, pp._y, ip) && (0, xp.WithinEpsilon)(this._z, pp._z, ip)
+       }
+       jxp(pp, ip, cp) {
+         return this._x === pp && this._y === ip && this._z === cp
+       }
+       multiplyInPlace(pp) {
+         return this._x *= pp._x, this._y *= pp._y, this._z *= pp._z, this._isDirty = !0, this
+       }
+       multiply(pp) {
+         return this.multiplyByFloats(pp._x, pp._y, pp._z)
+ ... (2269 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/237.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/237.js` (99 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3)

#### 1. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L2)

```diff
- export const ids = [237, 238];
+ export const ids = [237];
```

#### 2. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L4)

```diff
-   40186: (DD, zD, wD) => {
+   37487: (pp, ip, cp) => {
```

#### 3. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L7` → after: `L7-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L7-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L7-L9) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L7)

```diff
-       g: () => UD
+       h: () => Pp,
+       i: () => Up,
+       j: () => Wp
```

#### 4. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L9-L92` → after: `L11-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L11-L14) · [Before (L9-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L9-L92)

```diff
-     var pD = wD(39921),
-       sD = wD(39927),
-       KD = wD(37079),
-       rD = wD(37273),
-       LD = wD(40189),
-       cD = wD(40155),
-       gD = wD(37134);
-     let RD = (() => {
-         var DD;
-         let zD, wD, cD = LD.c,
-           gD = [],
-           RD = [],
-           AD = [],
-           UD = [];
-         return DD = class extends cD {
-           constructor(DD, zD, wD, sD) {
- ... (68 more removed lines; see GitHub link above)
+     var Op = cp(37329),
+       op = cp(37324),
+       Ip = cp(37356),
+       Sp = cp(37368);
```

#### 5. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L94-L95` → after: `L16-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L16-L29) · [Before (L94-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L94-L95)

```diff
-     function UD() {
-       AD || (AD = !0, cD.b.AddNodeConstructor("Light_Type_3", ((DD, zD) => () => new RD(DD, KD.s.Zero(), zD))), (0, gD.i)("BABYLON.HemisphericLight", RD))
+     function xp(pp) {
+       return Math.pow(pp, op.g)
+     }
+ 
+     function Lp(pp) {
+       return pp <= .04045 ? .0773993808 * pp : Math.pow(.947867299 * (pp + .055), 2.4)
+     }
+ 
+     function Yp(pp) {
+       return Math.pow(pp, op.d)
+     }
+ 
+     function Dp(pp) {
+       return pp <= .0031308 ? 12.92 * pp : 1.055 * Math.pow(pp, .41666) - .055
```

#### 6. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L104-L107` → after: `L32-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L32-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L32-L36) · [Before (L104-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L104-L107)

```diff
-       static GetPlanes(DD) {
-         const zD = [];
-         for (let wD = 0; wD < 6; wD++) zD.push(new pD.e(0, 0, 0, 0));
-         return sD.GetPlanesToRef(DD, zD), zD
+       constructor() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
+           ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+           cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         this.r = pp, this.g = ip, this.b = cp
```

#### 7. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L109-L111` → after: `L38-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L38-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L38-L39) · [Before (L109-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L109-L111)

```diff
-       static GetNearPlaneToRef(DD, zD) {
-         const wD = DD.m;
-         zD.normal.x = wD[3] + wD[2], zD.normal.y = wD[7] + wD[6], zD.normal.z = wD[11] + wD[10], zD.d = wD[15] + wD[14], zD.normalize()
+       toString() {
+         return "{R: " + this.r + " G:" + this.g + " B:" + this.b + "}"
```

#### 8. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L113-L115` → after: `L41-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L41-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L41-L42) · [Before (L113-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L113-L115)

```diff
-       static GetFarPlaneToRef(DD, zD) {
-         const wD = DD.m;
-         zD.normal.x = wD[3] - wD[2], zD.normal.y = wD[7] - wD[6], zD.normal.z = wD[11] - wD[10], zD.d = wD[15] - wD[14], zD.normalize()
+       getClassName() {
+         return "Color3"
```

#### 9. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L117-L119` → after: `L44-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L44-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L44-L46) · [Before (L117-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L117-L119)

```diff
-       static GetLeftPlaneToRef(DD, zD) {
-         const wD = DD.m;
-         zD.normal.x = wD[3] + wD[0], zD.normal.y = wD[7] + wD[4], zD.normal.z = wD[11] + wD[8], zD.d = wD[15] + wD[12], zD.normalize()
+       getHashCode() {
+         let pp = 255 * this.r | 0;
+         return pp = 397 * pp ^ 255 * this.g, pp = 397 * pp ^ 255 * this.b, pp
```

#### 10. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L121-L123` → after: `L48-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L48-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L48-L50) · [Before (L121-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L121-L123)

```diff
-       static GetRightPlaneToRef(DD, zD) {
-         const wD = DD.m;
-         zD.normal.x = wD[3] - wD[0], zD.normal.y = wD[7] - wD[4], zD.normal.z = wD[11] - wD[8], zD.d = wD[15] - wD[12], zD.normalize()
+       toArray(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         return pp[ip] = this.r, pp[ip + 1] = this.g, pp[ip + 2] = this.b, this
```

#### 11. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L125-L127` → after: `L52-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L52-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L52-L54) · [Before (L125-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L125-L127)

```diff
-       static GetTopPlaneToRef(DD, zD) {
-         const wD = DD.m;
-         zD.normal.x = wD[3] - wD[1], zD.normal.y = wD[7] - wD[5], zD.normal.z = wD[11] - wD[9], zD.d = wD[15] - wD[13], zD.normalize()
+       vcp(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         return Ap.FromArrayToRef(pp, ip, this), this
```

#### 12. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L129-L131` → after: `L56-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L56-L58) · [Before (L129-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L129-L131)

```diff
-       static GetBottomPlaneToRef(DD, zD) {
-         const wD = DD.m;
-         zD.normal.x = wD[3] + wD[1], zD.normal.y = wD[7] + wD[5], zD.normal.z = wD[11] + wD[9], zD.d = wD[15] + wD[13], zD.normalize()
+       toColor4() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
+         return new Pp(this.r, this.g, this.b, pp)
```

#### 13. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L133-L134` → after: `L60-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L60-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L60-L61) · [Before (L133-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L133-L134)

```diff
-       static GetPlanesToRef(DD, zD) {
-         sD.GetNearPlaneToRef(DD, zD[0]), sD.GetFarPlaneToRef(DD, zD[1]), sD.GetLeftPlaneToRef(DD, zD[2]), sD.GetRightPlaneToRef(DD, zD[3]), sD.GetTopPlaneToRef(DD, zD[4]), sD.GetBottomPlaneToRef(DD, zD[5])
+       BOp() {
+         return [this.r, this.g, this.b]
```

#### 14. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L136-L139` → after: `L63-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L63-L64) · [Before (L136-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L136-L139)

```diff
-       static IsPointInFrustum(DD, zD) {
-         for (let wD = 0; wD < 6; wD++)
-           if (zD[wD].dotCoordinate(DD) < 0) return !1;
-         return !0
+       toLuminance() {
+         return .3 * this.r + .59 * this.g + .11 * this.b
```

#### 15. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L141-L150` → after: `L66-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L66-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L66-L67) · [Before (L141-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L141-L150)

```diff
-     }
-   },
-   37754: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => sD
-     });
-     var pD = wD(37079);
-     class sD {
-       constructor(DD, zD, wD, sD) {
-         this.normal = new pD.s(DD, zD, wD), this.d = sD
+       multiply(pp) {
+         return new Ap(this.r * pp.r, this.g * pp.g, this.b * pp.b)
```

#### 16. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L152-L153` → after: `L69-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L69-L70) · [Before (L152-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L152-L153)

```diff
-       QpD() {
-         return [this.normal.x, this.normal.y, this.normal.z, this.d]
+       multiplyToRef(pp, ip) {
+         return ip.r = this.r * pp.r, ip.g = this.g * pp.g, ip.b = this.b * pp.b, ip
```

#### 17. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L155-L156` → after: `L72-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L72-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L72-L73) · [Before (L155-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L155-L156)

```diff
-       clone() {
-         return new sD(this.normal.x, this.normal.y, this.normal.z, this.d)
+       multiplyInPlace(pp) {
+         return this.r *= pp.r, this.g *= pp.g, this.b *= pp.b, this
```

#### 18. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L158-L159` → after: `L75-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L75-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L75-L76) · [Before (L158-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L158-L159)

```diff
-       getClassName() {
-         return "Plane"
+       multiplyByFloats(pp, ip, cp) {
+         return new Ap(this.r * pp, this.g * ip, this.b * cp)
```

#### 19. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L161-L182` → after: `L78-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L78-L79) · [Before (L161-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L161-L182)

```diff
-       getHashCode() {
-         let DD = this.normal.getHashCode();
-         return DD = 397 * DD ^ this.d, DD
-       }
-       normalize() {
-         const DD = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
-         let zD = 0;
-         return 0 !== DD && (zD = 1 / DD), this.normal.x *= zD, this.normal.y *= zD, this.normal.z *= zD, this.d *= zD, this
-       }
-       transform(DD) {
-         const zD = sD._TmpMatrix;
-         DD.invertToRef(zD);
-         const wD = zD.m,
-           pD = this.normal.x,
-           KD = this.normal.y,
-           rD = this.normal.z,
- ... (6 more removed lines; see GitHub link above)
+       divide(pp) {
+         throw new ReferenceError("Can not divide a color")
```

#### 20. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L184-L205` → after: `L81-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L81-L82) · [Before (L184-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L184-L205)

```diff
-       dotCoordinate(DD) {
-         return this.normal.x * DD.x + this.normal.y * DD.y + this.normal.z * DD.z + this.d
-       }
-       copyFromPoints(DD, zD, wD) {
-         const pD = zD.x - DD.x,
-           sD = zD.y - DD.y,
-           KD = zD.z - DD.z,
-           rD = wD.x - DD.x,
-           LD = wD.y - DD.y,
-           cD = wD.z - DD.z,
-           gD = sD * cD - KD * LD,
-           RD = KD * rD - pD * cD,
-           AD = pD * LD - sD * rD,
-           UD = Math.sqrt(gD * gD + RD * RD + AD * AD);
-         let fD;
-         return fD = 0 !== UD ? 1 / UD : 0, this.normal.x = gD * fD, this.normal.y = RD * fD, this.normal.z = AD * fD, this.d = -(this.normal.x * DD.x + this.normal.y * DD.y + this.normal.z * DD.z), this
- ... (6 more removed lines; see GitHub link above)
+       divideToRef(pp, ip) {
+         throw new ReferenceError("Can not divide a color")
```

#### 21. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L207-L208` → after: `L84-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L84-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L84-L85) · [Before (L207-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L207-L208)

```diff
-       static FromArray(DD) {
-         return new sD(DD[0], DD[1], DD[2], DD[3])
+       divideInPlace(pp) {
+         throw new ReferenceError("Can not divide a color")
```

#### 22. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L210-L212` → after: `L87-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L87-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L87-L88) · [Before (L210-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L210-L212)

```diff
-       static FromPoints(DD, zD, wD) {
-         const pD = new sD(0, 0, 0, 0);
-         return pD.copyFromPoints(DD, zD, wD), pD
+       minimizeInPlace(pp) {
+         return this.minimizeInPlaceFromFloats(pp.r, pp.g, pp.b)
```

#### 23. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L214-L216` → after: `L90-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L90-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L90-L91) · [Before (L214-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L214-L216)

```diff
-       static FromPositionAndNormal(DD, zD) {
-         const wD = new sD(0, 0, 0, 0);
-         return this.FromPositionAndNormalToRef(DD, zD, wD)
+       maximizeInPlace(pp) {
+         return this.maximizeInPlaceFromFloats(pp.r, pp.g, pp.b)
```

#### 24. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L218-L219` → after: `L93-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L93-L94) · [Before (L218-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L218-L219)

```diff
-       static FromPositionAndNormalToRef(DD, zD, wD) {
-         return wD.normal.pC(zD), wD.normal.normalize(), wD.d = -DD.dot(wD.normal), wD
+       minimizeInPlaceFromFloats(pp, ip, cp) {
+         return this.r = Math.min(pp, this.r), this.g = Math.min(ip, this.g), this.b = Math.min(cp, this.b), this
```

#### 25. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L221-L223` → after: `L96-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L96-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L96-L97) · [Before (L221-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L221-L223)

```diff
-       static SignedDistanceToPlaneFromPositionAndNormal(DD, zD, wD) {
-         const sD = -(zD.x * DD.x + zD.y * DD.y + zD.z * DD.z);
-         return pD.s.Dot(wD, zD) + sD
+       maximizeInPlaceFromFloats(pp, ip, cp) {
+         return this.r = Math.max(pp, this.r), this.g = Math.max(ip, this.g), this.b = Math.max(cp, this.b), this
```

#### 26. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L225-L234` → after: `L99-L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L99-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L99-L100) · [Before (L225-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L225-L234)

```diff
-     }
-     sD._TmpMatrix = pD.e.Identity()
-   },
-   38074: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => pD
-     });
-     class pD {
-       constructor(DD, zD, wD, pD) {
-         this.x = DD, this.y = zD, this.width = wD, this.height = pD
+       floorToRef(pp) {
+         throw new ReferenceError("Can not floor a color")
```

#### 27. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L236-L237` → after: `L102-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L102-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L102-L103) · [Before (L236-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L236-L237)

```diff
-       toGlobal(DD, zD) {
-         return new pD(this.x * DD, this.y * zD, this.width * DD, this.height * zD)
+       floor() {
+         throw new ReferenceError("Can not floor a color")
```

#### 28. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L239-L240` → after: `L105-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L105-L106) · [Before (L239-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L239-L240)

```diff
-       toGlobalToRef(DD, zD, wD) {
-         return wD.x = this.x * DD, wD.y = this.y * zD, wD.width = this.width * DD, wD.height = this.height * zD, this
+       fractToRef(pp) {
+         throw new ReferenceError("Can not fract a color")
```

#### 29. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L242-L243` → after: `L108-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L108-L109) · [Before (L242-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L242-L243)

```diff
-       clone() {
-         return new pD(this.x, this.y, this.width, this.height)
+       fract() {
+         throw new ReferenceError("Can not fract a color")
```

#### 30. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L245-L286` → after: `L111-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L111-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L111-L112) · [Before (L245-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L245-L286)

```diff
-     }
-   },
-   38658: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => KD
-     });
-     var pD = wD(38662);
-     const sD = (DD, zD, wD) => DD ? DD.getClassName && "Mesh" === DD.getClassName() ? null : !DD.getClassName || "SubMesh" !== DD.getClassName() && "PhysicsBody" !== DD.getClassName() ? DD.clone ? DD.clone() : Array.isArray(DD) ? DD.slice() : wD && "object" === typeof DD ? {
-       ...DD
-     } : null : DD.clone(zD) : null;
-     class KD {
-       static DeepCopy(DD, zD, wD, KD) {
-         let rD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         const LD = function(DD) {
-           const zD = [];
-           do {
- ... (26 more removed lines; see GitHub link above)
+       equals(pp) {
+         return pp && this.r === pp.r && this.g === pp.g && this.b === pp.b
```

#### 31. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L288-L331` → after: `L114-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L114-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L114-L147) · [Before (L288-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L288-L331)

```diff
-     }
-   },
-   37891: (DD, zD, wD) => {
-     function pD() {
-       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (DD => {
-         const zD = 16 * Math.random() | 0;
-         return ("x" === DD ? zD : 3 & zD | 8).toString(16)
-       }))
-     }
-     wD.d(zD, {
-       c: () => pD
-     })
-   },
-   38662: (DD, zD, wD) => {
-     wD.d(zD, {
-       d: () => pD
- ... (28 more removed lines; see GitHub link above)
+       equalsFloats(pp, ip, cp) {
+         return this.jxp(pp, ip, cp)
+       }
+       jxp(pp, ip, cp) {
+         return this.r === pp && this.g === ip && this.b === cp
+       }
+       equalsWithEpsilon(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : op.b;
+         return (0, Ip.WithinEpsilon)(this.r, pp.r, ip) && (0, Ip.WithinEpsilon)(this.g, pp.g, ip) && (0, Ip.WithinEpsilon)(this.b, pp.b, ip)
+       }
+       gp() {
+         throw new ReferenceError("Can not negate a color")
+       }
+       negateInPlace() {
+         throw new ReferenceError("Can not negate a color")
+       }
+ ... (18 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L333-L355` → after: `L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L149) · [Before (L333-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L333-L355)

```diff
-         const sD = Array.isArray(zD) ? zD[0] : zD;
-         if (void 0 !== wD && !pD._CheckLimit(sD, wD)) return;
-         const KD = pD._FormatMessage(sD),
-           rD = this._Levels[DD],
-           LD = Array.isArray(zD) ? zD.slice(1) : [];
-         rD.logFunc && rD.logFunc("BJS - " + KD, ...LD);
-         const cD = `<div style='color:${rD.color}'>${KD}</div><br>`;
-         pD._AddLogEntry(cD), pD._GenerateLimitMessage(sD, DD)
-       }
-       static get LogCache() {
-         return pD._LogCache
-       }
-       static ClearLogCache() {
-         pD._LogCache = "", pD._LogLimitOutputs = {}, pD.errorsCount = 0
-       }
-       static set LogLevels(DD) {
- ... (7 more removed lines; see GitHub link above)
+         return cp.r = (0, Ip.Clamp)(this.r, pp, ip), cp.g = (0, Ip.Clamp)(this.g, pp, ip), cp.b = (0, Ip.Clamp)(this.b, pp, ip), cp
```

#### 33. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L357-L412` → after: `L151-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L151-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L151-L152) · [Before (L357-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L357-L412)

```diff
-     }
-     pD.NoneLogLevel = 0, pD.MessageLogLevel = 1, pD.WarningLogLevel = 2, pD.ErrorLogLevel = 4, pD.AllLogLevel = 7, pD.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", pD._LogCache = "", pD._LogLimitOutputs = {}, pD._Levels =  … [truncated]
-       color: "white",
-       logFunc: console.log,
-       name: "Log"
-     }, {
-       color: "orange",
-       logFunc: console.warn,
-       name: "Warn"
-     }, {}, {
-       color: "red",
-       logFunc: console.error,
-       name: "Error"
-     }], pD.errorsCount = 0, pD.Log = pD._LogEnabled.bind(pD, pD.MessageLogLevel), pD.Warn = pD._LogEnabled.bind(pD, pD.WarningLogLevel), pD.Error = pD._LogEnabled.bind(pD, pD.ErrorLogLevel)
-   },
-   61020: (DD, zD, wD) => {
- ... (40 more removed lines; see GitHub link above)
+       add(pp) {
+         return new Ap(this.r + pp.r, this.g + pp.g, this.b + pp.b)
```

#### 34. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L414-L416` → after: `L154-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L154-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L154-L155) · [Before (L414-L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L414-L416)

```diff
-       bind() {
-         let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         super.bind(DD), this._drawWrapper.effect.setFloat2("texelSize", this.texelSize.x, this.texelSize.y)
+       addInPlace(pp) {
+         return this.r += pp.r, this.g += pp.g, this.b += pp.b, this
```

#### 35. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L418-L445` → after: `L157-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L157-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L157-L158) · [Before (L418-L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L418-L445)

```diff
-     }
-     RD.VertexUrl = "fxaa", RD.FragmentUrl = "fxaa", RD.Uniforms = ["texelSize"];
-     class AD extends KD.e {
-       getClassName() {
-         return "FxaaPostProcess"
-       }
-       constructor(DD, zD) {
-         let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
-           sD = arguments.length > 3 ? arguments[3] : void 0,
-           KD = arguments.length > 4 ? arguments[4] : void 0,
-           rD = arguments.length > 5 ? arguments[5] : void 0,
-           LD = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
-         const cD = {
-           uniforms: RD.Uniforms,
-           size: "number" === typeof zD ? zD : void 0,
-           camera: wD,
- ... (12 more removed lines; see GitHub link above)
+       addInPlaceFromFloats(pp, ip, cp) {
+         return this.r += pp, this.g += ip, this.b += cp, this
```

#### 36. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L447-L448` → after: `L160-L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L160-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L160-L161) · [Before (L447-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L447-L448)

```diff
-       static _Parse(DD, zD, wD, pD) {
-         return rD.d.Parse((() => new AD(DD.name, DD.options, zD, DD.renderTargetSamplingMode, wD.iI(), DD.reusable)), DD, wD, pD)
+       addToRef(pp, ip) {
+         return ip.r = this.r + pp.r, ip.g = this.g + pp.g, ip.b = this.b + pp.b, ip
```

#### 37. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L450-L459` → after: `L163-L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L163-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L163-L164) · [Before (L450-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L450-L459)

```diff
-     }
-     var UD = wD(38662),
-       fD = wD(40027),
-       ID = wD(41742),
-       BD = wD(41722),
-       GD = wD(39820);
-     const hD = 0;
-     class nD {
-       constructor(DD, zD, wD) {
-         this.name = DD, this._parentTask = zD, this._context = wD, this.disabled = !1
+       subtract(pp) {
+         return new Ap(this.r - pp.r, this.g - pp.g, this.b - pp.b)
```

#### 38. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L461-L462` → after: `L166-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L166-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L166-L167) · [Before (L461-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L461-L462)

```diff
-       setInitializeFunc(DD) {
-         this._initFunc = DD
+       subtractToRef(pp, ip) {
+         return ip.r = this.r - pp.r, ip.g = this.g - pp.g, ip.b = this.b - pp.b, ip
```

#### 39. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L464-L465` → after: `L169-L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L169-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L169-L170) · [Before (L464-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L464-L465)

```diff
-       setExecuteFunc(DD) {
-         this._executeFunc = DD
+       Iop(pp) {
+         return this.r -= pp.r, this.g -= pp.g, this.b -= pp.b, this
```

#### 40. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L467-L468` → after: `L172-L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L172-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L172-L173) · [Before (L467-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L467-L468)

```diff
-       _execute() {
-         this.disabled || this._executeFunc(this._context)
+       subtractFromFloats(pp, ip, cp) {
+         return new Ap(this.r - pp, this.g - ip, this.b - cp)
```

#### 41. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L470-L471` → after: `L175-L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L175-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L175-L176) · [Before (L470-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L470-L471)

```diff
-       _initialize() {
-         this._initFunc?.(this._context)
+       subtractFromFloatsToRef(pp, ip, cp, Op) {
+         return Op.r = this.r - pp, Op.g = this.g - ip, Op.b = this.b - cp, Op
```

#### 42. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L473-L474` → after: `L178-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L178-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L178-L179) · [Before (L473-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L473-L474)

```diff
-       _isValid() {
-         return void 0 !== this._executeFunc ? null : "Execute function is not set (call setExecuteFunc to set it)"
+       clone() {
+         return new Ap(this.r, this.g, this.b)
```

#### 43. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L476-L480` → after: `L181-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L181-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L181-L182) · [Before (L476-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L476-L480)

```diff
-       _dispose() {}
-     }
-     class MD extends nD {
-       static IsObjectListPass(DD) {
-         return void 0 !== DD.setObjectList
+       rM(pp) {
+         return this.r = pp.r, this.g = pp.g, this.b = pp.b, this
```

#### 44. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L482-L483` → after: `L184-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L184-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L184-L185) · [Before (L482-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L482-L483)

```diff
-       get objectList() {
-         return this._objectList
+       i5(pp, ip, cp) {
+         return this.r = pp, this.g = ip, this.b = cp, this
```

#### 45. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L485-L486` → after: `L187-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L187-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L187-L188) · [Before (L485-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L485-L486)

```diff
-       setObjectList(DD) {
-         this._objectList = DD
+       set(pp, ip, cp) {
+         return this.i5(pp, ip, cp)
```

#### 46. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L488-L489` → after: `L190-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L190-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L190-L191) · [Before (L488-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L488-L489)

```diff
-       constructor(DD, zD, wD, pD) {
-         super(DD, zD, wD), this._engine = pD
+       E_(pp) {
+         return this.r = this.g = this.b = pp, this
```

#### 47. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L491-L493` → after: `L193-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L193-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L193-L197) · [Before (L491-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L491-L493)

```diff
-       _isValid() {
-         const DD = super._isValid();
-         return DD || (void 0 !== this._objectList ? null : "Object list is not set (call setObjectList to set it)")
+       toHexString() {
+         const pp = Math.round(255 * this.r),
+           ip = Math.round(255 * this.g),
+           cp = Math.round(255 * this.b);
+         return "#" + (0, Ip.ToHex)(pp) + (0, Ip.ToHex)(ip) + (0, Ip.ToHex)(cp)
```

#### 48. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L495-L498` → after: `L199-L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L199-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L199-L280) · [Before (L495-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L495-L498)

```diff
-     }
-     class OD extends nD {
-       static IsRenderPass(DD) {
-         return void 0 !== DD.setRenderTarget
+       fromHexString(pp) {
+         return "#" !== pp.substring(0, 1) || 7 !== pp.length || (this.r = parseInt(pp.substring(1, 3), 16) / 255, this.g = parseInt(pp.substring(3, 5), 16) / 255, this.b = parseInt(pp.substring(5, 7), 16) / 255), this
+       }
+       toHSV() {
+         return this.toHSVToRef(new Ap)
+       }
+       toHSVToRef(pp) {
+         const ip = this.r,
+           cp = this.g,
+           Op = this.b,
+           op = Math.max(ip, cp, Op),
+           Ip = Math.min(ip, cp, Op);
+         let Sp = 0,
+           xp = 0;
+         const Lp = op,
+           Yp = op - Ip;
+ ... (66 more added lines; see GitHub link above)
```

#### 49. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L500-L501` → after: `L282-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L282-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L282-L284) · [Before (L500-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L500-L501)

```diff
-       get renderTarget() {
-         return this._renderTarget
+       static Hermite1stDerivative(pp, ip, cp, Op, op) {
+         const Ip = Ap.Black();
+         return this.Hermite1stDerivativeToRef(pp, ip, cp, Op, op, Ip), Ip
```

#### 50. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L503-L504` → after: `L286-L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L286-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L286-L288) · [Before (L503-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L503-L504)

```diff
-       get renderTargetDepth() {
-         return this._renderTargetDepth
+       static Hermite1stDerivativeToRef(pp, ip, cp, Op, op, Ip) {
+         const Sp = op * op;
+         Ip.r = 6 * (Sp - op) * pp.r + (3 * Sp - 4 * op + 1) * ip.r + 6 * (-Sp + op) * cp.r + (3 * Sp - 2 * op) * Op.r, Ip.g = 6 * (Sp - op) * pp.g + (3 * Sp - 4 * op + 1) * ip.g + 6 * (-Sp + op) * cp.g + (3 * Sp - 2 * op) * Op.g, Ip.b = 6 * (Sp - op) * pp.b + (3 * Sp - 4 * op + 1 … [truncated]
```

#### 51. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L506-L507` → after: `L290-L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L290-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L290-L291) · [Before (L506-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L506-L507)

```diff
-       get frameGraphRenderTarget() {
-         return this._frameGraphRenderTarget
+       static Red() {
+         return new Ap(1, 0, 0)
```

#### 52. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L509-L510` → after: `L293-L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L293-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L293-L294) · [Before (L509-L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L509-L510)

```diff
-       constructor(DD, zD, wD, pD) {
-         super(DD, zD, wD), this._dependencies = new Set, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._engine = pD
+       static Green() {
+         return new Ap(0, 1, 0)
```

#### 53. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L512-L513` → after: `L296-L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L296-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L296-L297) · [Before (L512-L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L512-L513)

```diff
-       setRenderTarget(DD) {
-         this._renderTarget = DD
+       static Blue() {
+         return new Ap(0, 0, 1)
```

#### 54. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L515-L516` → after: `L299-L300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L299-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L299-L300) · [Before (L515-L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L515-L516)

```diff
-       setRenderTargetDepth(DD) {
-         this._renderTargetDepth = DD
+       static Black() {
+         return new Ap(0, 0, 0)
```

#### 55. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L518-L522` → after: `L302-L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L302-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L302-L303) · [Before (L518-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L518-L522)

```diff
-       addDependencies(DD) {
-         if (void 0 !== DD)
-           if (Array.isArray(DD))
-             for (const zD of DD) this._dependencies.add(zD);
-           else this._dependencies.add(DD)
+       static get BlackReadOnly() {
+         return Ap._BlackReadOnly
```

#### 56. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L524-L531` → after: `L305-L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L305-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L305-L306) · [Before (L524-L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L524-L531)

```diff
-       collectDependencies(DD) {
-         const zD = this._dependencies.keys();
-         for (let wD = zD.next(); !0 !== wD.done; wD = zD.next()) DD.add(wD.value);
-         if (void 0 !== this._renderTarget)
-           if (Array.isArray(this._renderTarget))
-             for (const wD of this._renderTarget) void 0 !== wD && DD.add(wD);
-           else DD.add(this._renderTarget);
-         void 0 !== this._renderTargetDepth && DD.add(this._renderTargetDepth)
+       static White() {
+         return new Ap(1, 1, 1)
```

#### 57. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L533-L536` → after: `L308-L309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L308-L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L308-L309) · [Before (L533-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L533-L536)

```diff
-       setOutputLayerAndFaceIndices(DD) {
-         const zD = this.frameGraphRenderTarget.renderTargetWrapper;
-         if (zD)
-           for (const wD of DD) zD.setLayerAndFaceIndex(wD.targetIndex, wD.layerIndex, wD.faceIndex)
+       static Purple() {
+         return new Ap(.5, 0, .5)
```

#### 58. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L538-L539` → after: `L311-L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L311-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L311-L312) · [Before (L538-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L538-L539)

```diff
-       _initialize() {
-         this._frameGraphRenderTarget = this._context.createRenderTarget(this.name, this._renderTarget, this._renderTargetDepth, this.depthReadOnly, this.stencilReadOnly), super._initialize()
+       static Magenta() {
+         return new Ap(1, 0, 1)
```

#### 59. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L541-L542` → after: `L314-L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L314-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L314-L315) · [Before (L541-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L541-L542)

```diff
-       _execute() {
-         this._context.bindRenderTarget(this._frameGraphRenderTarget), super._execute(), this._context.restoreDefaultFramebuffer()
+       static Yellow() {
+         return new Ap(1, 1, 0)
```

#### 60. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L544-L546` → after: `L317-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L317-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L317-L318) · [Before (L544-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L544-L546)

```diff
-       _isValid() {
-         const DD = super._isValid();
-         return DD || (void 0 !== this._renderTarget || void 0 !== this.renderTargetDepth ? null : "Render target and render target depth cannot both be undefined.")
+       static Gray() {
+         return new Ap(.5, .5, .5)
```

#### 61. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L548-L549` → after: `L320-L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L320-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L320-L324) · [Before (L548-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L548-L549)

```diff
-       _dispose() {
-         this._frameGraphRenderTarget?.dispose()
+       static Teal() {
+         return new Ap(0, 1, 1)
+       }
+       static Random() {
+         return new Ap(Math.random(), Math.random(), Math.random())
```

#### 62. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L552` → after: `L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L327) · [Before (L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L552)

```diff
-     var JD = wD(37119);
+     Ap._V8PerformanceHack = new Ap(.5, .5, .5), Ap._BlackReadOnly = Ap.Black();
```

#### 63. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L554-L555` → after: `L329-L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L329-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L329-L334) · [Before (L554-L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L554-L555)

```diff
-       get name() {
-         return this._name
+       constructor() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
+           ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+           cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
+           Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
+         this.r = pp, this.g = ip, this.b = cp, this.a = Op
```

#### 64. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L557-L558` → after: `L336-L337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L336-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L336-L337) · [Before (L557-L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L557-L558)

```diff
-       set name(DD) {
-         this._name = DD
+       BOp() {
+         return [this.r, this.g, this.b, this.a]
```

#### 65. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L560-L561` → after: `L339-L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L339-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L339-L341) · [Before (L560-L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L560-L561)

```diff
-       get disabled() {
-         return this._disabled
+       toArray(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         return pp[ip] = this.r, pp[ip + 1] = this.g, pp[ip + 2] = this.b, pp[ip + 3] = this.a, this
```

#### 66. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L563-L564` → after: `L343-L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L343-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L343-L345) · [Before (L563-L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L563-L564)

```diff
-       set disabled(DD) {
-         this._disabled = DD
+       vcp(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         return this.r = pp[ip], this.g = pp[ip + 1], this.b = pp[ip + 2], this.a = pp[ip + 3], this
```

#### 67. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L566-L567` → after: `L347-L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L347-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L347-L348) · [Before (L566-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L566-L567)

```diff
-       get passes() {
-         return this._passes
+       equals(pp) {
+         return pp && this.r === pp.r && this.g === pp.g && this.b === pp.b && this.a === pp.a
```

#### 68. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L569-L570` → after: `L350-L351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L350-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L350-L351) · [Before (L569-L570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L569-L570)

```diff
-       get passesDisabled() {
-         return this._passesDisabled
+       add(pp) {
+         return new Pp(this.r + pp.r, this.g + pp.g, this.b + pp.b, this.a + pp.a)
```

#### 69. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L572-L632` → after: `L353-L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L353-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L353-L354) · [Before (L572-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L572-L632)

```diff
-       getClassName() {
-         return "FrameGraphTask"
-       }
-       initAsync() {
-         return Promise.resolve()
-       }
-       isReady() {
-         return !0
-       }
-       dispose() {
-         this._reset(), this.onTexturesAllocatedObservable.clear(), this.onBeforeTaskExecute.clear(), this.onAfterTaskExecute.clear()
-       }
-       constructor(DD, zD) {
-         this._passes = [], this._passesDisabled = [], this._disabled = !1, this.onTexturesAllocatedObservable = new JD.b, this.onBeforeTaskExecute = new JD.b, this.onAfterTaskExecute = new JD.b, this.name = DD, this._frameGraph = zD, this._reset()
-       }
-       _reset() {
- ... (45 more removed lines; see GitHub link above)
+       addToRef(pp, ip) {
+         return ip.r = this.r + pp.r, ip.g = this.g + pp.g, ip.b = this.b + pp.b, ip.a = this.a + pp.a, ip
```

#### 70. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L634-L651` → after: `L356-L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L356-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L356-L357) · [Before (L634-L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L634-L651)

```diff
-       _execute() {
-         const DD = this._disabled && this._passesDisabled.length > 0 ? this._passesDisabled : this._passes;
-         this.onBeforeTaskExecute.notifyObservers(this), this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
-         try {
-           for (const zD of DD) zD._execute()
-         } finally {
-           this._frameGraph.engine._debugPopGroup?.()
-         }
-         this.onAfterTaskExecute.notifyObservers(this)
-       }
-       _initializePasses() {
-         this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
-         try {
-           for (const DD of this._passes) DD._initialize();
-           for (const DD of this._passesDisabled) DD._initialize()
-         } finally {
- ... (2 more removed lines; see GitHub link above)
+       addInPlace(pp) {
+         return this.r += pp.r, this.g += pp.g, this.b += pp.b, this.a += pp.a, this
```

#### 71. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L653-L658` → after: `L359-L360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L359-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L359-L360) · [Before (L653-L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L653-L658)

```diff
-       _checkSameRenderTarget(DD, zD) {
-         if (null === DD || null === zD) return DD === zD;
-         if (DD.length !== zD.length) return !1;
-         for (let wD = 0; wD < DD.length; wD++)
-           if (DD[wD] !== zD[wD]) return !1;
-         return !0
+       addInPlaceFromFloats(pp, ip, cp, Op) {
+         return this.r += pp, this.g += ip, this.b += cp, this.a += Op, this
```

#### 72. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L660-L663` → after: `L362-L363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L362-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L362-L363) · [Before (L660-L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L660-L663)

```diff
-     }
-     class QD extends ED {
-       get alphaMode() {
-         return this.postProcess.alphaMode
+       subtract(pp) {
+         return new Pp(this.r - pp.r, this.g - pp.g, this.b - pp.b, this.a - pp.a)
```

#### 73. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L665-L666` → after: `L365-L366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L365-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L365-L366) · [Before (L665-L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L665-L666)

```diff
-       set alphaMode(DD) {
-         this.postProcess.alphaMode = DD
+       subtractToRef(pp, ip) {
+         return ip.r = this.r - pp.r, ip.g = this.g - pp.g, ip.b = this.b - pp.b, ip.a = this.a - pp.a, ip
```

#### 74. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L668-L669` → after: `L368-L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L368-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L368-L369) · [Before (L668-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L668-L669)

```diff
-       get drawWrapper() {
-         return this._postProcessDrawWrapper
+       Iop(pp) {
+         return this.r -= pp.r, this.g -= pp.g, this.b -= pp.b, this.a -= pp.a, this
```

#### 75. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L671-L672` → after: `L371-L372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L371-L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L371-L372) · [Before (L671-L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L671-L672)

```diff
-       constructor(DD, zD, wD) {
-         super(DD, zD), this.sourceSamplingMode = 2, this.depthReadOnly = !1, this.stencilReadOnly = !1, this.disableColorWrite = !1, this.drawBackFace = !1, this.depthTest = !0, this.postProcess = wD, this._postProcessDrawWrapper = this.postProcess.drawWrapper, this.outputTexture … [truncated]
+       subtractFromFloats(pp, ip, cp, Op) {
+         return new Pp(this.r - pp, this.g - ip, this.b - cp, this.a - Op)
```

#### 76. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L674-L675` → after: `L374-L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L374-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L374-L375) · [Before (L674-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L674-L675)

```diff
-       isReady() {
-         return this.postProcess.isReady()
+       subtractFromFloatsToRef(pp, ip, cp, Op, op) {
+         return op.r = this.r - pp, op.g = this.g - ip, op.b = this.b - cp, op.a = this.a - Op, op
```

#### 77. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L677-L678` → after: `L377-L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L377-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L377-L387) · [Before (L677-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L677-L678)

```diff
-       getClassName() {
-         return "FrameGraphPostProcessTask"
+       scale(pp) {
+         return new Pp(this.r * pp, this.g * pp, this.b * pp, this.a * pp)
+       }
+       scaleInPlace(pp) {
+         return this.r *= pp, this.g *= pp, this.b *= pp, this.a *= pp, this
+       }
+       scaleToRef(pp, ip) {
+         return ip.r = this.r * pp, ip.g = this.g * pp, ip.b = this.b * pp, ip.a = this.a * pp, ip
+       }
+       scaleAndAddToRef(pp, ip) {
+         return ip.r += this.r * pp, ip.g += this.g * pp, ip.b += this.b * pp, ip.a += this.a * pp, ip
```

#### 78. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L680-L682` → after: `L389-L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L389-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L389-L391) · [Before (L680-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L680-L682)

```diff
-       record() {
-         let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
-           zD = arguments.length > 1 ? arguments[1] : void 0,
+       clampToRef() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
+           ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
```

#### 79. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L684-L703` → after: `L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L393) · [Before (L684-L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L684-L703)

```diff
-         if (void 0 === this.sourceTexture && void 0 === this.targetTexture) throw new Error(`FrameGraphPostProcessTask "${this.name}": sourceTexture or targetTexture is required`);
-         const pD = void 0 !== this.sourceTexture ? this._frameGraph.textureManager.getTextureCreationOptions(this.sourceTexture) : void 0;
-         if (pD && (pD.options.samples = 1), this._frameGraph.textureManager.resolveDanglingHandle(this.outputTexture, this.targetTexture, this.name, pD), void 0 !== this.depthAttachmentTexture && this._frameGraph.textureManager.resolveDanglingHandle(this.outputDepthAttachmentText … [truncated]
-           const DD = this._frameGraph.textureManager.getTextureAbsoluteDimensions(pD);
-           this._sourceWidth = DD.width, this._sourceHeight = DD.height
-         }
-         const sD = this._frameGraph.textureManager.getTextureDescription(this.outputTexture);
-         this._outputWidth = sD.size.width, this._outputHeight = sD.size.height;
-         const KD = this._frameGraph.addRenderPass(this.name);
-         if (KD.depthReadOnly = this.depthReadOnly, KD.stencilReadOnly = this.stencilReadOnly, KD.addDependencies(this.sourceTexture), KD.setRenderTarget(this.outputTexture), KD.setRenderTargetDepth(this.depthAttachmentTexture), KD.setExecuteFunc((DD => {
-             DD.pushDebugGroup(`Apply post-process (${this.name})`), void 0 !== this.sourceTexture && DD.setTextureSamplingMode(this.sourceTexture, this.sourceSamplingMode), zD?.(DD), this.viewport && DD.setViewport(this.viewport), DD.applyFullScreenEffect(this._postProcessDrawWra … [truncated]
-               void 0 !== this.sourceTexture && DD.bindTextureHandle(this._postProcessDrawWrapper.effect, "textureSampler", this.sourceTexture), wD?.(DD), this.postProcess.bind()
-             }), this.stencilState, this.disableColorWrite, this.drawBackFace, this.depthTest, void 0 !== this.viewport), DD.restoreDefaultFramebuffer(), DD.popDebugGroup()
-           })), !DD) {
-           const DD = this._frameGraph.addRenderPass(this.name + "_disabled", !0);
-           DD.depthReadOnly = this.depthReadOnly, DD.stencilReadOnly = this.stencilReadOnly, DD.addDependencies(this.sourceTexture), DD.setRenderTarget(this.outputTexture), DD.setRenderTargetDepth(this.depthAttachmentTexture), DD.setExecuteFunc((DD => {
- ... (4 more removed lines; see GitHub link above)
+         return cp.r = (0, Ip.Clamp)(this.r, pp, ip), cp.g = (0, Ip.Clamp)(this.g, pp, ip), cp.b = (0, Ip.Clamp)(this.b, pp, ip), cp.a = (0, Ip.Clamp)(this.a, pp, ip), cp
```

#### 80. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L705-L706` → after: `L395-L396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L395-L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L395-L396) · [Before (L705-L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L705-L706)

```diff
-       dispose() {
-         this.postProcess.dispose(), super.dispose()
+       multiply(pp) {
+         return new Pp(this.r * pp.r, this.g * pp.g, this.b * pp.b, this.a * pp.a)
```

#### 81. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L708-L711` → after: `L398-L399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L398-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L398-L399) · [Before (L708-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L708-L711)

```diff
-     }
-     class XD extends QD {
-       constructor(DD, zD, wD) {
-         super(DD, zD, wD || new RD(DD, zD.engine))
+       multiplyToRef(pp, ip) {
+         return ip.r = this.r * pp.r, ip.g = this.g * pp.g, ip.b = this.b * pp.b, ip.a = this.a * pp.a, ip
```

#### 82. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L713-L714` → after: `L401-L402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L401-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L401-L402) · [Before (L713-L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L713-L714)

```diff
-       getClassName() {
-         return "FrameGraphFXAATask"
+       multiplyInPlace(pp) {
+         return this.r *= pp.r, this.g *= pp.g, this.b *= pp.b, this.a *= pp.a, this
```

#### 83. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L716-L721` → after: `L404-L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L404-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L404-L405) · [Before (L716-L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L716-L721)

```diff
-       record() {
-         let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
-           zD = arguments.length > 1 ? arguments[1] : void 0,
-           wD = arguments.length > 2 ? arguments[2] : void 0;
-         const pD = super.record(DD, zD, wD);
-         return this.postProcess.texelSize.x = 1 / this._sourceWidth, this.postProcess.texelSize.y = 1 / this._sourceHeight, pD
+       multiplyByFloats(pp, ip, cp, Op) {
+         return new Pp(this.r * pp, this.g * ip, this.b * cp, this.a * Op)
```

#### 84. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L723-L727` → after: `L407-L457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L407-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L407-L457) · [Before (L723-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L723-L727)

```diff
-     }
-     var VD = wD(41737);
-     class PD extends QD {
-       constructor(DD, zD, wD) {
-         super(DD, zD, wD || new VD.e(DD, zD.engine))
+       divide(pp) {
+         throw new ReferenceError("Can not divide a color")
+       }
+       divideToRef(pp, ip) {
+         throw new ReferenceError("Can not divide a color")
+       }
+       divideInPlace(pp) {
+         throw new ReferenceError("Can not divide a color")
+       }
+       minimizeInPlace(pp) {
+         return this.r = Math.min(this.r, pp.r), this.g = Math.min(this.g, pp.g), this.b = Math.min(this.b, pp.b), this.a = Math.min(this.a, pp.a), this
+       }
+       maximizeInPlace(pp) {
+         return this.r = Math.max(this.r, pp.r), this.g = Math.max(this.g, pp.g), this.b = Math.max(this.b, pp.b), this.a = Math.max(this.a, pp.a), this
+       }
+       minimizeInPlaceFromFloats(pp, ip, cp, Op) {
+ ... (35 more added lines; see GitHub link above)
```

#### 85. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L730` → after: `L460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L460) · [Before (L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L730)

```diff
-         return "FrameGraphPassTask"
+         return "Color4"
```

#### 86. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L732-L744` → after: `L462-L464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L462-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L462-L464) · [Before (L732-L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L732-L744)

```diff
-     }
-     var CD = wD(40022),
-       xD = wD(40106),
-       TD = wD(40063),
-       bD = wD(40186),
-       jD = wD(37273);
-     class dD {
-       getRenderCamera(DD) {
-         if (this._renderCamera) return this._renderCamera;
-         {
-           let zD;
-           return zD = this.originalScene.activeCameras && this.originalScene.activeCameras.length > 1 ? this.originalScene.activeCameras[this.originalScene.activeCameras.length - 1] : this.originalScene.activeCamera, DD && zD && zD.isRigCamera ? zD.rigParent : zD
-         }
+       getHashCode() {
+         let pp = 255 * this.r | 0;
+         return pp = 397 * pp ^ 255 * this.g, pp = 397 * pp ^ 255 * this.b, pp = 397 * pp ^ 255 * this.a, pp
```

#### 87. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L746-L813` → after: `L466-L541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L466-L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L466-L541) · [Before (L746-L813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L746-L813)

```diff
-       setRenderCamera(DD) {
-         this._renderCamera = DD
-       }
-       _getSharedGizmoLight() {
-         return this._sharedGizmoLight || (this._sharedGizmoLight = new bD.d("shared gizmo light", new gD.s(0, 1, 0), this.utilityLayerScene), this._sharedGizmoLight.intensity = 2, this._sharedGizmoLight.groundColor = jD.d.Gray()), this._sharedGizmoLight
-       }
-       static get DefaultUtilityLayer() {
-         return null == dD._DefaultUtilityLayer ? dD._CreateDefaultUtilityLayerFromScene(cD.d.LastCreatedScene) : dD._DefaultUtilityLayer
-       }
-       static _CreateDefaultUtilityLayerFromScene(DD) {
-         return dD._DefaultUtilityLayer = new dD(DD), dD._DefaultUtilityLayer.originalScene.Bl.addOnce((() => {
-           dD._DefaultUtilityLayer = null
-         })), dD._DefaultUtilityLayer
-       }
-       static get DefaultKeepDepthUtilityLayer() {
-         return null == dD._DefaultKeepDepthUtilityLayer ? dD._CreateDefaultKeepUtilityLayerFromScene(cD.d.LastCreatedScene) : dD._DefaultKeepDepthUtilityLayer
- ... (52 more removed lines; see GitHub link above)
+       clone() {
+         return (new Pp).rM(this)
+       }
+       rM(pp) {
+         return this.r = pp.r, this.g = pp.g, this.b = pp.b, this.a = pp.a, this
+       }
+       i5(pp, ip, cp, Op) {
+         return this.r = pp, this.g = ip, this.b = cp, this.a = Op, this
+       }
+       set(pp, ip, cp, Op) {
+         return this.i5(pp, ip, cp, Op)
+       }
+       E_(pp) {
+         return this.r = this.g = this.b = this.a = pp, this
+       }
+       toHexString() {
+ ... (60 more added lines; see GitHub link above)
```

#### 88. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L815-L816` → after: `L543-L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L543-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L543-L550) · [Before (L815-L816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L815-L816)

```diff
-       dispose() {
-         this.onPointerOutObservable.clear(), this._afterRenderObserver && this.originalScene.onAfterRenderCameraObservable.remove(this._afterRenderObserver), this._sceneDisposeObserver && this.originalScene.Bl.remove(this._sceneDisposeObserver), this._originalPointerObserver && t … [truncated]
+       static FromArray(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         return new Pp(pp[ip], pp[ip + 1], pp[ip + 2], pp[ip + 3])
+       }
+       static FromArrayToRef(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+           cp = arguments.length > 2 ? arguments[2] : void 0;
+         cp.r = pp[ip], cp.g = pp[ip + 1], cp.b = pp[ip + 2], cp.a = pp[ip + 3]
```

#### 89. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L818-L819` → after: `L552-L564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L552-L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L552-L564) · [Before (L818-L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L818-L819)

```diff
-       _updateCamera() {
-         this.utilityLayerScene.cameraToUseForPointers = this.getRenderCamera(), this.utilityLayerScene.activeCamera = this.getRenderCamera()
+       static FromInts(pp, ip, cp, Op) {
+         return new Pp(pp / 255, ip / 255, cp / 255, Op / 255)
+       }
+       static CheckColors4(pp, ip) {
+         if (pp.length === 3 * ip) {
+           const ip = [];
+           for (let cp = 0; cp < pp.length; cp += 3) {
+             const Op = cp / 3 * 4;
+             ip[Op] = pp[cp], ip[Op + 1] = pp[cp + 1], ip[Op + 2] = pp[cp + 2], ip[Op + 3] = 1
+           }
+           return ip
+         }
+         return pp
```

#### 90. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L822-L845` → after: `L567-L570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L567-L570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L567-L570) · [Before (L822-L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L822-L845)

```diff
-     dD._DefaultUtilityLayer = null, dD._DefaultKeepDepthUtilityLayer = null;
-     const SD = {
-       FindMainCamera: function(DD) {
-         return DD.findMainCamera()
-       },
-       FindMainObjectRenderer: function(DD) {
-         return DD.findMainObjectRenderer()
-       },
-       CreateUtilityLayerRenderer: function(DD) {
-         let zD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         const wD = DD.oB,
-           pD = new dD(wD, zD, !0);
-         pD.utilityLayerScene.activeCamera = wD.activeCamera;
-         let sD = SD.FindMainCamera(wD.frameGraph);
-         !sD && wD.cameras.length > 0 && (sD = wD.cameras[0]), sD && (pD.setRenderCamera(sD), pD.utilityLayerScene.activeCamera = sD);
-         const KD = wD.onAfterRenderObservable.add((() => {
- ... (8 more removed lines; see GitHub link above)
+     Pp._V8PerformanceHack = new Pp(.5, .5, .5, .5);
+     class Wp {}
+     Wp.Color3 = (0, Op.d)(3, Ap.Black), Wp.Color4 = (0, Op.d)(3, (() => new Pp(0, 0, 0, 0)));
+     let yp = !1;
```

#### 91. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L847-L886` → after: `L572-L587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L572-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L572-L587) · [Before (L847-L886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L847-L886)

```diff
-     function lD(DD, zD, wD, pD) {
-       let sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
-         KD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         rD = arguments.length > 6 ? arguments[6] : void 0,
-         LD = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
-         cD = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
-       const {
-         height: gD,
-         width: RD
-       } = mD(DD, zD, wD);
-       if (!gD || !RD) return void UD.d.Error("Invalid 'size' parameter !");
-       const AD = zD.Ul();
-       let ID = AD.activeCamera !== zD;
-       if (AD.frameGraph) {
-         const DD = SD.FindMainObjectRenderer(AD.frameGraph);
-         DD && (ID = DD.camera !== zD)
- ... (24 more removed lines; see GitHub link above)
+     function Up() {
+       yp || (yp = !0, Object.defineProperties(Ap.prototype, {
+         dimension: {
+           value: [3]
+         },
+         rank: {
+           value: 1
+         }
+       }), Object.defineProperties(Pp.prototype, {
+         dimension: {
+           value: [4]
+         },
+         rank: {
+           value: 1
+         }
+       }), (0, Sp.g)("BABYLON.Color3", Ap), (0, Sp.g)("BABYLON.Color4", Pp))
```

#### 92. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L888-L898` → after: `L589-L603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L589-L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L589-L603) · [Before (L888-L898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L888-L898)

```diff
-     async function WD(DD, zD, wD) {
-       let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
-         sD = arguments.length > 4 ? arguments[4] : void 0,
-         KD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         rD = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-         LD = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
-       return await new Promise(((cD, gD) => {
-         lD(DD, zD, wD, (DD => {
-           "undefined" !== typeof DD ? cD(DD) : gD(new Error("Data is undefined"))
-         }), pD, LD, sD, KD, rD)
-       }))
+   },
+   37324: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Ip,
+       d: () => Op,
+       g: () => op
+     });
+     const Op = 1 / 2.2,
+       op = 2.2;
+     Math.sqrt(5);
+     let Ip = .001
+   },
+   37356: (pp, ip, cp) => {
+     function Op(pp) {
+       return parseInt(pp.toString().replace(/\W/g, ""))
```

#### 93. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L900-L911` → after: `L605-L608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L605-L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L605-L608) · [Before (L900-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L900-L911)

```diff
-     async function ND(DD, zD, wD, pD) {
-       let sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
-         KD = arguments.length > 5 ? arguments[5] : void 0,
-         rD = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
-       return await new Promise((LD => {
-         lD(DD, zD, {
-           width: wD,
-           height: pD
-         }, (() => {
-           LD()
-         }), sD, !0, KD, rD)
-       }))
+ 
+     function op(pp, ip) {
+       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
+       return Math.abs(pp - ip) <= cp
```

#### 94. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L914-L986` → after: `L611-L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L611-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L611-L613) · [Before (L914-L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L914-L986)

```diff
-     function ZD(DD, zD, KD, rD) {
-       let LD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
-         cD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
-         gD = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-         RD = arguments.length > 7 ? arguments[7] : void 0,
-         fD = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
-         hD = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
-         nD = !(arguments.length > 10 && void 0 !== arguments[10]) || arguments[10],
-         MD = arguments.length > 11 ? arguments[11] : void 0,
-         OD = arguments.length > 12 ? arguments[12] : void 0,
-         JD = arguments.length > 13 ? arguments[13] : void 0,
-         ED = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 3e4,
-         QD = arguments.length > 15 ? arguments[15] : void 0;
-       const XD = zD.Ul();
-       if (XD.frameGraph) return void kD(XD.frameGraph, zD, KD, LD, cD, gD, RD, MD, JD, !rD).then((DD => {
-         rD && rD(DD)
- ... (57 more removed lines; see GitHub link above)
+     function Ip(pp, ip, cp) {
+       let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
+       return pp < ip - Op || pp > cp + Op
```

#### 95. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L988-L1003` → after: `L615-L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L615-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L615-L617) · [Before (L988-L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L988-L1003)

```diff
-     async function yD(DD, zD, wD) {
-       let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
-         sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
-         KD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         rD = arguments.length > 6 ? arguments[6] : void 0,
-         LD = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
-         cD = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
-         gD = !(arguments.length > 9 && void 0 !== arguments[9]) || arguments[9],
-         RD = arguments.length > 10 ? arguments[10] : void 0,
-         AD = arguments.length > 11 ? arguments[11] : void 0,
-         UD = arguments.length > 12 ? arguments[12] : void 0;
-       return await new Promise(((fD, ID) => {
-         ZD(DD, zD, wD, (DD => {
-           "undefined" !== typeof DD ? fD(DD) : ID(new Error("Data is undefined"))
-         }), pD, sD, KD, rD, LD, cD, gD, RD, AD, UD)
-       }))
+ 
+     function Sp(pp, ip) {
+       return pp === ip ? pp : Math.random() * (ip - pp) + pp
```

#### 96. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L1005-L1092` → after: `L619-L621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L619-L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L619-L621) · [Before (L1005-L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L1005-L1092)

```diff
-     async function kD(DD, zD, wD) {
-       let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
-         sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
-         KD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         rD = arguments.length > 6 ? arguments[6] : void 0,
-         LD = arguments.length > 7 ? arguments[7] : void 0,
-         cD = arguments.length > 8 ? arguments[8] : void 0,
-         gD = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
-         RD = arguments.length > 10 ? arguments[10] : void 0;
-       const AD = DD.engine,
-         UD = DD.textureManager,
-         {
-           height: fD,
-           width: BD,
-           finalWidth: GD,
-           finalHeight: nD
- ... (72 more removed lines; see GitHub link above)
+ 
+     function xp(pp, ip, cp) {
+       return pp + (ip - pp) * cp
```

#### 97. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L1096-L1108` → after: `L625-L784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L625-L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L625-L784) · [Before (L1096-L1108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L1096-L1108)

```diff
-       let pD = 0,
-         sD = 0,
-         KD = 0,
-         rD = 0;
-       if ("object" === typeof wD) {
-         const LD = wD.precision ? Math.abs(wD.precision) : 1;
-         wD.width && wD.height ? (pD = wD.height * LD, sD = wD.width * LD) : wD.width && !wD.height ? (sD = wD.width * LD, pD = Math.round(sD / DD.getAspectRatio(zD))) : wD.height && !wD.width ? (pD = wD.height * LD, sD = Math.round(pD * DD.getAspectRatio(zD))) : (sD = Math.round( … [truncated]
-       } else isNaN(wD) || (pD = wD, sD = wD, KD = wD, rD = wD);
-       return sD && (sD = Math.floor(sD)), pD && (pD = Math.floor(pD)), KD && (KD = Math.floor(KD)), rD && (rD = Math.floor(rD)), {
-         height: 0 | pD,
-         width: 0 | sD,
-         finalWidth: 0 | KD,
-         finalHeight: 0 | rD
+       let Op = wp(ip - pp, 360);
+       return Op > 180 && (Op -= 360), pp + Op * Pp(cp)
+     }
+ 
+     function Yp(pp, ip, cp) {
+       let Op;
+       return Op = pp != ip ? Pp((cp - pp) / (ip - pp)) : 0, Op
+     }
+ 
+     function Dp(pp, ip, cp, Op, op) {
+       const Ip = op * op,
+         Sp = op * Ip;
+       return pp * (2 * Sp - 3 * Ip + 1) + cp * (-2 * Sp + 3 * Ip) + ip * (Sp - 2 * Ip + op) + Op * (Sp - Ip)
+     }
+ 
+     function Ap(pp, ip, cp, Op, op) {
+ ... (144 more added lines; see GitHub link above)
```

#### 98. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L1111-L1119` → after: `L787-L793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L787-L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L787-L793) · [Before (L1111-L1119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L1111-L1119)

```diff
-     const eD = {
-       CreateScreenshot: lD,
-       CreateScreenshotAsync: WD,
-       CreateScreenshotWithResizeAsync: ND,
-       CreateScreenshotUsingRenderTarget: ZD,
-       CreateScreenshotUsingRenderTargetAsync: yD,
-       CreateScreenshotForFrameGraphAsync: kD
-     };
-     let oD = !1;
+   },
+   37368: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => Ip,
+       g: () => op
+     });
+     const Op = {};
```

#### 99. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L1121-L1124` → after: `L795-L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L795-L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/237.js#L795-L800) · [Before (L1121-L1124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/237.js#L1121-L1124)

```diff
-     function aD() {
-       if (oD) return;
-       oD = !0;
-       fD.h.CreateScreenshot = lD, fD.h.CreateScreenshotAsync = WD, fD.h.CreateScreenshotUsingRenderTarget = ZD, fD.h.CreateScreenshotUsingRenderTargetAsync = yD
+     function op(pp, ip) {
+       Op[pp] = ip
+     }
+ 
+     function Ip(pp) {
+       return Op[pp]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/238.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/238.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf)

#### 1. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/238.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/238.js#L4)

```diff
-   37752: (DD, zD, wD) => {
+   37345: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L8-L49` → after: `L8-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L8-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/238.js#L8-L19) · [Before (L8-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/238.js#L8-L49)

```diff
-     var pD = wD(37754);
-     class sD {
-       static GetPlanes(DD) {
-         const zD = [];
-         for (let wD = 0; wD < 6; wD++) zD.push(new pD.e(0, 0, 0, 0));
-         return sD.GetPlanesToRef(DD, zD), zD
-       }
-       static GetNearPlaneToRef(DD, zD) {
-         const wD = DD.m;
-         zD.normal.x = wD[3] + wD[2], zD.normal.y = wD[7] + wD[6], zD.normal.z = wD[11] + wD[10], zD.d = wD[15] + wD[14], zD.normalize()
-       }
-       static GetFarPlaneToRef(DD, zD) {
-         const wD = DD.m;
-         zD.normal.x = wD[3] - wD[2], zD.normal.y = wD[7] - wD[6], zD.normal.z = wD[11] - wD[10], zD.d = wD[15] - wD[14], zD.normalize()
-       }
-       static GetLeftPlaneToRef(DD, zD) {
- ... (26 more removed lines; see GitHub link above)
+     var Op = cp(37349);
+     class op {
+       static get LastCreatedEngine() {
+         return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
+       }
+       static get LastCreatedScene() {
+         return this._LastCreatedScene
+       }
+     }
+     op.Instances = [], op.OnEnginesDisposedObservable = new Op.d, op._LastCreatedScene = null, op.UseFallbackTexture = !0, op.FallbackTexture = ""
+   },
+   38900: (pp, ip, cp) => {
```

#### 3. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L53-L138` → after: `L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/238.js#L23) · [Before (L53-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/238.js#L53-L138)

```diff
-     var pD = wD(37079);
-     class sD {
-       constructor(DD, zD, wD, sD) {
-         this.normal = new pD.s(DD, zD, wD), this.d = sD
-       }
-       QpD() {
-         return [this.normal.x, this.normal.y, this.normal.z, this.d]
-       }
-       clone() {
-         return new sD(this.normal.x, this.normal.y, this.normal.z, this.d)
-       }
-       getClassName() {
-         return "Plane"
-       }
-       getHashCode() {
-         let DD = this.normal.getHashCode();
- ... (70 more removed lines; see GitHub link above)
+     var Op = cp(38905);
```

#### 4. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L171` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/238.js#L56) · [Before (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/238.js#L171)

```diff
-             pD.d.Warn(cD.message)
+             Op.e.Warn(Lp.message)
```

#### 5. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L177` → after: `L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/238.js#L62) · [Before (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/238.js#L177)

```diff
-   37891: (DD, zD, wD) => {
+   38124: (pp, ip, cp) => {
```

#### 6. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L181` → after: `L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/238.js#L66) · [Before (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/238.js#L181)

```diff
-         return ("x" === DD ? zD : 3 & zD | 8).toString(16)
+         return ("x" === pp ? ip : 3 & ip | 8).toString(16)
```

#### 7. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L185` → after: `L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/238.js#L70) · [Before (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/238.js#L185)

```diff
-       c: () => pD
+       e: () => Op
```

#### 8. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L188-L190` → after: `L73-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L73-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/238.js#L73-L75) · [Before (L188-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/238.js#L188-L190)

```diff
-   38662: (DD, zD, wD) => {
-     wD.d(zD, {
-       d: () => pD
+   38905: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Op
```

#### 9. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L211` → after: `L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/238.js#L96) · [Before (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/238.js#L211)

```diff
-         const zD = DD => DD < 10 ? "0" + DD : "" + DD,
+         const ip = pp => pp < 10 ? "0" + pp : "" + pp,
```

#### 10. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L226` → after: `L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/238.js#L111) · [Before (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/238.js#L226)

```diff
-         const cD = `<div style='color:${rD.color}'>${KD}</div><br>`;
+         const Lp = `<div style='color:${Sp.color}'>${Ip}</div><br>`;
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/239.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/239.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357f)

#### 1. `bundles/bloxd.io/chunks/js/239.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357fR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357f) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/239.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/239.js#L2)

```diff
- export const ids = [238, 239];
+ export const ids = [239];
```

#### 2. `bundles/bloxd.io/chunks/js/239.js` (Changed code · before: `L4-L11` → after: `L4-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357f) · [After (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/239.js#L4-L8) · [Before (L4-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/239.js#L4-L11)

```diff
-   61022: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
-       RegisterShaderMaterial: () => pD.c,
-       ShaderMaterial: () => pD.m,
-       ShaderMaterialCreateFromSnippetAsync: () => pD.f,
-       ShaderMaterialParse: () => pD.k,
-       ShaderMaterialParseFromFileAsync: () => pD.g,
-       ShaderMaterialParseFromSnippetAsync: () => pD.h
+   37399: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => xp,
+       e: () => Sp,
+       f: () => op
```

#### 3. `bundles/bloxd.io/chunks/js/239.js` (Changed code · before: `L13-L14` → after: `L10-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357fR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357f) · [After (L10-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/239.js#L10-L70) · [Before (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/239.js#L13-L14)

```diff
-     var pD = wD(40397);
-     (0, pD.c)()
+     const Op = 1024,
+       op = 16,
+       Ip = 36e4;
+     class Sp {
+       constructor(pp) {
+         this.boneCount = pp, this.rotation = void 0, this.position = void 0, this.scale = void 0, this.touched = void 0, this.rotation = new Float64Array(3 * pp), this.position = new Float64Array(3 * pp), this.scale = new Float64Array(3 * pp).fill(1), this.touched = new Uint8Arra … [truncated]
+       }
+       clampToLimits() {
+         for (let pp = 0; pp < this.boneCount; pp++)
+           if (0 !== this.touched[pp])
+             for (let ip = 3 * pp; ip < 3 * pp + 3; ip++) {
+               const pp = this.rotation[ip],
+                 cp = this.position[ip],
+                 Sp = this.scale[ip];
+               pp >= -36e4 && pp <= Ip || (this.rotation[ip] = Lp(pp, Ip)), cp >= -1024 && cp <= Op || (this.position[ip] = Lp(cp, Op)), Sp >= -op && Sp <= op || (this.scale[ip] = Lp(Sp, op, 1))
+             }
+ ... (45 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/239.js` (Changed code · before: `L16` → after: `L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357fR72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357f) · [After (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/239.js#L72) · [Before (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/239.js#L16)

```diff
-   37752: (DD, zD, wD) => {
+   37395: (pp, ip, cp) => {
```

#### 5. `bundles/bloxd.io/chunks/js/239.js` (Changed code · before: `L18-L201` → after: `L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357fR74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357f) · [After (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/239.js#L74) · [Before (L18-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/239.js#L18-L201)

```diff
-       e: () => sD
-     });
-     var pD = wD(37754);
-     class sD {
-       static GetPlanes(DD) {
-         const zD = [];
-         for (let wD = 0; wD < 6; wD++) zD.push(new pD.e(0, 0, 0, 0));
-         return sD.GetPlanesToRef(DD, zD), zD
-       }
-       static GetNearPlaneToRef(DD, zD) {
-         const wD = DD.m;
-         zD.normal.x = wD[3] + wD[2], zD.normal.y = wD[7] + wD[6], zD.normal.z = wD[11] + wD[10], zD.d = wD[15] + wD[14], zD.normalize()
-       }
-       static GetFarPlaneToRef(DD, zD) {
-         const wD = DD.m;
-         zD.normal.x = wD[3] - wD[2], zD.normal.y = wD[7] - wD[6], zD.normal.z = wD[11] - wD[10], zD.d = wD[15] - wD[14], zD.normalize()
- ... (168 more removed lines; see GitHub link above)
+       b: () => Lp,
```

#### 6. `bundles/bloxd.io/chunks/js/239.js` (Changed code · before: `L205-L253` → after: `L92-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357fR92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357f) · [After (L92-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/239.js#L92-L141) · [Before (L205-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/239.js#L205-L253)

```diff
-       static _CheckLimit(DD, zD) {
-         let wD = pD._LogLimitOutputs[DD];
-         return wD ? wD.current++ : (wD = {
-           limit: zD,
-           current: 1
-         }, pD._LogLimitOutputs[DD] = wD), wD.current <= wD.limit
-       }
-       static _GenerateLimitMessage(DD) {
-         let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-         const wD = pD._LogLimitOutputs[DD];
-         if (!wD || !pD.MessageLimitReached) return;
-         const sD = this._Levels[zD];
-         wD.current === wD.limit && pD[sD.name](pD.MessageLimitReached.replace(/%LIMIT%/g, "" + wD.limit).replace(/%TYPE%/g, sD.name ?? ""))
-       }
-       static _AddLogEntry(DD) {
-         pD._LogCache = DD + pD._LogCache, pD.OnNewCacheEntry && pD.OnNewCacheEntry(DD)
- ... (33 more removed lines; see GitHub link above)
+       createAnimationScript(pp) {
+         const {
+           Lo: ip,
+           loop: cp,
+           Do: Op
+         } = pp;
+         return {
+           Lo: Math.round(ip),
+           Yo: this.createLoopMode(null !== cp && void 0 !== cp && cp),
+           Do: this.createNodeSkeletonAnimationScript(null !== Op && void 0 !== Op ? Op : null)
+         }
+       }
+       createLoopMode(pp) {
+         switch (pp) {
+           case !1:
+             return Op.j.NoLoop;
+ ... (34 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/239.js` (Changed code · before: `L255-L269` → after: `L143-L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357fR143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357f) · [After (L143-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/239.js#L143-L390) · [Before (L255-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/239.js#L255-L269)

```diff
-       }
-     }
-     pD.NoneLogLevel = 0, pD.MessageLogLevel = 1, pD.WarningLogLevel = 2, pD.ErrorLogLevel = 4, pD.AllLogLevel = 7, pD.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", pD._LogCache = "", pD._LogLimitOutputs = {}, pD._Levels =  … [truncated]
-       color: "white",
-       logFunc: console.log,
-       name: "Log"
-     }, {
-       color: "orange",
-       logFunc: console.warn,
-       name: "Warn"
-     }, {}, {
-       color: "red",
-       logFunc: console.error,
-       name: "Error"
-     }], pD.errorsCount = 0, pD.Log = pD._LogEnabled.bind(pD, pD.MessageLogLevel), pD.Warn = pD._LogEnabled.bind(pD, pD.WarningLogLevel), pD.Error = pD._LogEnabled.bind(pD, pD.ErrorLogLevel)
+         }
+         const Ip = [];
+         for (let Yp = 0; Yp < op.length; Yp++) {
+           var Sp, xp, Lp;
+           const pp = op[Yp],
+             ip = null !== (Sp = op[Yp - 1]) && void 0 !== Sp ? Sp : pp,
+             Op = null !== (xp = op[Yp + 1]) && void 0 !== xp ? xp : pp,
+             Dp = null !== (Lp = op[Yp + 2]) && void 0 !== Lp ? Lp : Op;
+           Ip.push({
+             ...pp,
+             ...cp(ip.post, ip.timeFraction, pp.post, pp.timeFraction, Op.pre, Op.timeFraction, Dp.pre, Dp.timeFraction)
+           })
+         }
+         return Ip
+       }
+       createAnimationFrameWithoutPrecomputes(pp, ip, cp) {
+ ... (232 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/240.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/240.js` (31 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1)

#### 1. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L4-L7` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/240.js#L4-L7) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/240.js#L4-L7)

```diff
-   37791: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => AD,
-       g: () => rD
+   61395: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       DEVTOOLS_SHADERS: () => Ip,
+       registerDevtoolsShader: () => Sp
```

#### 2. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L9-L11` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/240.js#L9-L10) · [Before (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/240.js#L9-L11)

```diff
-     var pD = wD(9220),
-       sD = wD(9198),
-       KD = wD(351);
+     var Op = cp(40062),
+       op = cp(37421);
```

#### 3. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L13-L3110` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/240.js#L12) · [Before (L13-L3110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/240.js#L13-L3110)

```diff
-       "Maple Door": {
-         positions: [{
-           block: "Maple Door",
-           x: 0,
-           y: 0,
-           z: 0
-         }, {
-           block: "_Maple Door Top",
-           x: 0,
-           y: 1,
-           z: 0
-         }]
-       },
-       "Maple Door|meta|rot1|open": {
-         positions: [{
-           block: "Maple Door|meta|rot1|open",
- ... (3082 more removed lines; see GitHub link above)
+       devtoolsNormal: function(pp) {
```

#### 4. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3112-L3292` → after: `L14-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L14-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/240.js#L14-L15) · [Before (L3112-L3292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/240.js#L3112-L3292)

```diff
-           [DD]: {
-             positions: [{
-               block: DD,
-               x: 0,
-               y: 0,
-               z: 0
-             }, {
-               block: "_Lunite Auto Miner Body",
-               x: 0,
-               y: 1,
-               z: -1
-             }, {
-               block: "_Lunite Auto Miner Drill Front",
-               x: 0,
-               y: 1,
-               z: -2
- ... (165 more removed lines; see GitHub link above)
+           vertex: `\n\t\t\t${(0,op.d)(pp,"position","vec3")}\n\t\t\t${(0,op.d)(pp,"normal","vec3")}\n\t\t\t${(0,op.rb)(pp,"worldViewProjection","mat4")}\n\t\t\t${(0,op.rb)(pp,"world","mat4")}\n\t\t\t${(0,op.tb)(pp,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,op.vb)(pp,`\n\t\t\t\t${ … [truncated]
+           fragment: `\n\t\t\t${(0,op.tb)(pp,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,op.N)(pp,`\n\t\t\t\t\n\t\t\t\t${(0,op.A)(pp,"vec3","normalColor",`abs(${(0,op.R)(pp,"vNormal")})`)}\n\t\t\t\t${(0,op.I)(pp)} = ${(0,op.j)(pp,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
```

#### 5. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3365-L3386` → after: `L18-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L18-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/240.js#L18-L22) · [Before (L3365-L3386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/240.js#L3365-L3386)

```diff
-       "Solar Panel|meta|rot4": {
-         positions: [{
-           block: "Solar Panel|meta|rot4",
-           x: 0,
-           y: 0,
-           z: 0
-         }, {
-           block: "_Solar Panel SE|meta|rot4",
-           x: 0,
-           y: 0,
-           z: 1
-         }, {
-           block: "_Solar Panel NW|meta|rot4",
-           x: 1,
-           y: 0,
-           z: 0
- ... (6 more removed lines; see GitHub link above)
+       devtoolsWhite: function(pp) {
+         return {
+           vertex: `\n\t\t\t${(0,op.d)(pp,"position","vec3")}\n\t\t\t${(0,op.rb)(pp,"worldViewProjection","mat4")}\n\n\t\t\t${(0,op.vb)(pp,`\n\t\t\t\t${(0,op.i)(pp)} = ${(0,op.sb)(pp,"worldViewProjection")} * ${(0,op.j)(pp,"vec4",(0,op.zb)(pp,"position"),"1.0")};\n\t\t\t`)}\n\t\t` … [truncated]
+           fragment: `\n\t\t\t${(0,op.N)(pp,`\n\t\t\t\t${(0,op.I)(pp)} = ${(0,op.j)(pp,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
+         }
```

#### 6. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3388-L3404` → after: `L24-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L24-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/240.js#L24-L28) · [Before (L3388-L3404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/240.js#L3388-L3404)

```diff
-       "Homestead Core": {
-         positions: [{
-           block: "Homestead Core",
-           x: 0,
-           y: 0,
-           z: 0
-         }, {
-           block: "_Homestead Core Mid",
-           x: 0,
-           y: 1,
-           z: 0
-         }, {
-           block: "_Homestead Core Top",
-           x: 0,
-           y: 2,
-           z: 0
- ... (1 more removed lines; see GitHub link above)
+       devtoolsDepth: function(pp) {
+         return {
+           vertex: `\n\t\t\t${(0,op.d)(pp,"position","vec3")}\n\t\t\t${(0,op.rb)(pp,"worldViewProjection","mat4")}\n\t\t\t${(0,op.rb)(pp,"world","mat4")}\n\t\t\t${(0,op.rb)(pp,"cameraPosition","vec3")}\n\t\t\t${(0,op.tb)(pp,"vDepth","float","mediump")}\n\n\t\t\t${(0,op.vb)(pp,`\n\ … [truncated]
+           fragment: `\n\t\t\t${(0,op.tb)(pp,"vDepth","float","mediump")}\n\t\t\t${(0,op.rb)(pp,"maxDepth","float")}\n\t\t\t${(0,op.rb)(pp,"minDepth","float")}\n\n\t\t\t${(0,op.N)(pp,`\n\t\t\t\t\n\t\t\t\t${(0,op.A)(pp,"float","normalizedDepth",`clamp((${(0,op.R)(pp,"vDepth")} - ${ … [truncated]
+         }
```

#### 7. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3408-L3566` → after: `L32-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L32-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/240.js#L32-L37) · [Before (L3408-L3566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/240.js#L3408-L3566)

```diff
-     function LD(DD) {
-       return {
-         [`${DD} Banner`]: {
-           positions: [{
-             block: `${DD} Banner`,
-             x: 0,
-             y: 0,
-             z: 0
-           }, {
-             block: `_${DD} Banner Flag|meta|rot1|bot`,
-             x: 0,
-             y: 1,
-             z: 0
-           }]
-         },
-         [`${DD} Banner|meta|rot2|bot`]: {
- ... (143 more removed lines; see GitHub link above)
+     function Sp(pp, ip) {
+       const {
+         vertex: cp,
+         fragment: op
+       } = Ip[pp](ip), Sp = Op.b.GetShadersStore(ip);
+       Sp[`${pp}VertexShader`] = cp, Sp[`${pp}FragmentShader`] = op
```

#### 8. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3570-L3664` → after: `L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/240.js#L86) · [Before (L3570-L3664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/240.js#L3570-L3664)

```diff
-       const zD = (0, KD.Xb)(DD);
-       return {
-         [zD]: {
-           positions: [{
-             block: zD,
-             x: 0,
-             y: 0,
-             z: 0
-           }, {
-             block: `_${zD} Top Left`,
-             x: 0,
-             y: 1,
-             z: 0
-           }, {
-             block: `_${zD} Top Right`,
-             x: -1,
- ... (79 more removed lines; see GitHub link above)
+       return pp === Op.WGSL
```

#### 9. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3667-L3742` → after: `L89-L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L89-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/240.js#L89-L133) · [Before (L3667-L3742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/240.js#L3667-L3742)

```diff
-     function gD(DD) {
-       const zD = `_${DD} Back`,
-         wD = `_${DD} Dish`;
-       return {
-         [DD]: {
-           positions: [{
-             block: DD,
-             x: 0,
-             y: 0,
-             z: 0
-           }, {
-             block: zD,
-             x: 0,
-             y: 0,
-             z: -1
-           }, {
- ... (60 more removed lines; see GitHub link above)
+     function Ip(pp, ip, cp) {
+       return op(pp) ? cp : ip
+     }
+     const Sp = new Map([
+       ["int", "i32"],
+       ["float", "f32"],
+       ["vec2", "vec2f"],
+       ["vec3", "vec3f"],
+       ["vec4", "vec4f"],
+       ["mat2", "mat2x2f"],
+       ["mat3", "mat3x3f"],
+       ["mat4", "mat4x4f"]
+     ]);
+ 
+     function xp(pp, ip) {
+       if (!op(pp)) return ip;
+ ... (29 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3747-L3766` → after: `L155-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L155-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/240.js#L155-L168) · [Before (L3747-L3766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/240.js#L3747-L3766)

```diff
-       const zD = `Small ${DD} Pod`;
-       return {
-         [zD]: {
-           positions: [{
-             block: zD,
-             x: 0,
-             y: 0,
-             z: 0
-           }, {
-             block: `_Small ${DD} Pod Mid`,
-             x: 0,
-             y: 1,
-             z: 0
-           }, {
-             block: `_Small ${DD} Pod Top`,
-             x: 0,
- ... (4 more removed lines; see GitHub link above)
+       return op(pp) ? "vertexOutputs.position" : "gl_Position"
+     }
+ 
+     function Hp(pp, ip) {
+       return op(pp) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${ip}}` : `void main() {${ip}}`
+     }
+ 
+     function dp(pp, ip) {
+       return op(pp) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${ip}}` : `void main() {${ip}}`
+     }
+ 
+     function ep(pp, ip, cp) {
+       if (op(pp)) {
+         return [`var ${ip}Sampler: sampler;`, `var ${ip}: ${"2dArray"===cp?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
```

#### 11. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3769-L3772` → after: `L172-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L172-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/240.js#L172-L174) · [Before (L3769-L3772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/240.js#L3769-L3772)

```diff
-     for (const UD in rD) {
-       for (const DD of rD[UD].positions)
-         if (DD.id = sD.l[DD.block].id, UD === DD.block && (0 !== DD.x || 0 !== DD.y || 0 !== DD.z)) throw new Error(`Multiblock "${UD}" has main block "${DD.block}" at non-origin position (${DD.x}, ${DD.y}, ${DD.z}) - if you need to do something like this, you'll need to rethink  … [truncated]
-       rD[sD.l[UD].id] = rD[UD]
+ 
+     function jp(pp, ip, cp) {
+       return op(pp) ? `textureSample(${ip}, ${ip}Sampler, ${cp})` : `texture2D(${ip}, ${cp})`
```

#### 12. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3774-L3789` → after: `L176-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L176-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/240.js#L176-L179) · [Before (L3774-L3789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/240.js#L3774-L3789)

```diff
-     const AD = {};
-     for (const UD in rD)
-       for (const {
-           block: DD,
-           x: zD,
-           y: wD,
-           z: pD
-         }
-         of rD[UD].positions) {
-         const KD = {
-           mainMultiblock: UD,
-           compX: zD,
-           compY: wD,
-           compZ: pD
-         };
-         AD[DD] = KD, AD[sD.l[DD].id] = KD
+ 
+     function kp(pp, ip, cp, Op, Ip) {
+       if (op(pp)) {
+         return `${Ip?"textureSampleLevel":"textureSample"}(${ip}, ${ip}Sampler, ${cp}, ${Yp(pp,`round(${Op})`)}${Ip?`, ${Ip}`:""})`
```

#### 13. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3791-L3806` → after: `L181-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L181-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/240.js#L181-L183) · [Before (L3791-L3806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/240.js#L3791-L3806)

```diff
-   },
-   38189: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => cD,
-       h: () => LD
-     });
-     var pD = wD(9198),
-       sD = wD(9240),
-       KD = wD(9244);
-     const rD = sD.t.map((DD => {
-       let {
-         dx: zD,
-         dz: wD
-       } = DD;
-       return [zD, 0, wD]
-     }));
+       const Sp = Lp(pp, "vec3", cp, Op);
+       return Ip ? `textureLod(${ip}, ${Sp}, ${Ip})` : `texture(${ip}, ${Sp})`
+     }
```

#### 14. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3809-L3810` → after: `L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/240.js#L186) · [Before (L3809-L3810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/240.js#L3809-L3810)

```diff
-       const zD = pD.l[DD];
-       return !!zD && DD !== pD.e && !zD.model && !zD.Af && !1 !== zD.solid && !zD.cG
+       return op(pp) ? "!baseColor\\=\\w+\\(diffuseSampler,diffuseSamplerSampler,fragmentInputs\\.vDiffuseUV\\+uvOffset\\);" : "!baseColor\\=\\w+\\(diffuseSampler,vDiffuseUV\\+uvOffset\\);"
```

#### 15. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3812-L3835` → after: `L188-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L188-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/240.js#L188-L193) · [Before (L3812-L3835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/240.js#L3812-L3835)

```diff
-     class cD {
-       constructor(DD) {
-         this.model = DD, this.reshapeOffsets = [...rD, [0, -1, 0]]
-       }
-       handles(DD) {
-         const zD = pD.l[DD];
-         return (null === zD || void 0 === zD ? void 0 : zD.model) === this.model && void 0 !== zD.attachedTop
-       }
-       affects(DD) {
-         return this.handles(DD) || LD(DD) || (0, KD.v)(pD.l[DD])
-       }
-       shape(DD, zD, wD, rD, cD) {
-         let gD = this.handles(DD(zD, wD + 1, rD)) ? sD.j : 0;
-         return sD.t.forEach(((cD, RD) => {
-           let {
-             dx: AD,
- ... (8 more removed lines; see GitHub link above)
+ 
+     function Rp(pp) {
+       return op(pp) ? {
+         "!varying vMainUV1: vec2f;": "centroid varying vMainUV1: vec2f;"
+       } : {
+         "!varying vec2 vMainUV1;": "#ifdef WEBGL2\ncentroid varying vec2 vMainUV1;\n#else\nvarying vec2 vMainUV1;\n#endif"
```

#### 16. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3838-L3839` → after: `L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/240.js#L196) · [Before (L3838-L3839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/240.js#L3838-L3839)

```diff
-   },
-   37978: (DD, zD, wD) => {
+ 
```

#### 17. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3841-L3868` → after: `L198-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L198-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/240.js#L198-L218) · [Before (L3841-L3868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/240.js#L3841-L3868)

```diff
-       var wD;
-       zD || (zD = {});
-       const pD = null !== (wD = zD.customAttributes) && void 0 !== wD ? wD : {};
-       var sD, KD, rD;
-       "Gun" === (null === DD || void 0 === DD ? void 0 : DD.type) && (pD.shotsLeft = null !== (sD = null !== (KD = pD.shotsLeft) && void 0 !== KD ? KD : null === (rD = pD.gunStats) || void 0 === rD ? void 0 : rD.clipSize) && void 0 !== sD ? sD : DD.clipSize);
-       if (pD.enchantmentTier && (pD.enchantmentTier = pD.enchantmentTier.toString()), pD.enchantments)
-         for (const AD in pD.enchantments) {
-           const DD = pD.enchantments[AD];
-           if ("number" !== typeof DD) {
-             const zD = parseInt(DD);
-             isNaN(zD) || zD < 0 ? pD.enchantments[AD] = void 0 : pD.enchantments[AD] = zD > 1e9 ? 1e9 : zD
-           }
-         }
-       if (pD.enchantmentData)
-         for (const AD in pD.enchantmentData) {
-           const DD = pD.enchantmentData[AD];
- ... (12 more removed lines; see GitHub link above)
+       return op(pp) ? `vertexInputs.${ip}` : ip
+     }
+ 
+     function Mp(pp, ip) {
+       return op(pp) ? `vertexOutputs.${ip}` : ip
+     }
+ 
+     function Cp(pp, ip) {
+       return op(pp) ? `fragmentInputs.${ip}` : ip
+     }
+ 
+     function Ep(pp, ip) {
+       return op(pp) ? `uniforms.${ip}` : ip
+     }
+ 
+     function Xp(pp, ip, cp) {
+ ... (5 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3889` → after: `L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/240.js#L222) · [Before (L3889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/240.js#L3889)

```diff
-       return rD <= DD && DD <= LD
+       return op(pp) ? "mesh.visibility" : "visibility"
```

#### 19. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3898-L3899` → after: `L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/240.js#L226) · [Before (L3898-L3899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/240.js#L3898-L3899)

```diff
-       var zD, wD;
-       return "string" === typeof(null === DD || void 0 === DD || null === (zD = DD.persisted) || void 0 === zD || null === (wD = zD.shared) || void 0 === wD ? void 0 : wD.text)
+       return op(pp) ? "fragmentInputs.position" : "gl_FragCoord"
```

#### 20. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3903` → after: `L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/240.js#L230) · [Before (L3903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/240.js#L3903)

```diff
-       return GD(DD) && "" !== DD.persisted.shared.text.trim()
+       return op(pp) ? "fragmentOutputs.color" : "gl_FragColor"
```

#### 21. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3907-L3909` → after: `L234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/240.js#L234) · [Before (L3907-L3909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/240.js#L3907-L3909)

```diff
-       let [wD, , pD] = zD;
-       const [KD, , rD] = sD.z[DD][fD];
-       return wD * KD + pD * rD
+       return op(pp) ? `dpdx(${ip})` : `dFdx(${ip})`
```

#### 22. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3912-L3913` → after: `L237-L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L237-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/240.js#L237-L238) · [Before (L3912-L3913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/240.js#L3912-L3913)

```diff
-     function MD(DD, zD, wD) {
-       return wD[1] - zD[1] || nD(DD, zD) - nD(DD, wD)
+     function Tp(pp, ip) {
+       return op(pp) ? `dpdy(${ip})` : `dFdy(${ip})`
```

#### 23. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3916-L3921` → after: `L241-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L241-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/240.js#L241-L242) · [Before (L3916-L3921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/240.js#L3916-L3921)

```diff
-     function OD(DD, zD, wD, KD, LD) {
-       var cD;
-       let RD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : DD(zD[0], zD[1], zD[2]);
-       if (!(gD[RD - rD] & 1 << wD)) return null;
-       const [AD, UD, fD] = sD.z[LD][wD], ID = [zD[0] + AD, zD[1] + UD, zD[2] + fD], BD = DD(ID[0], ID[1], ID[2]), GD = null === (cD = pD.l[BD]) || void 0 === cD ? void 0 : cD.meta;
-       return (null === GD || void 0 === GD ? void 0 : GD.rootId) === KD && GD.rot === LD && gD[BD - rD] & 1 << (1 ^ wD) ? ID : null
+     function fp(pp, ip) {
+       return op(pp) ? `inverseSqrt(${ip})` : `inversesqrt(${ip})`
```

#### 24. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3925-L3949` → after: `L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/240.js#L246) · [Before (L3925-L3949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/240.js#L3925-L3949)

```diff
-       const rD = DD(zD, wD, KD);
-       if (!cD(rD)) return null;
-       const {
-         rootId: LD,
-         rot: gD
-       } = pD.l[rD].meta, AD = (zD, wD) => {
-         let pD = zD,
-           sD = 1;
-         for (let KD = OD(DD, pD, wD, LD, gD); KD && sD < RD; KD = OD(DD, pD, wD, LD, gD)) pD = KD, sD++;
-         return {
-           end: pD,
-           cells: sD
-         }
-       }, GD = AD(AD([zD, wD, KD], UD).end, ID).end, hD = AD(GD, fD).cells, [nD, , MD] = sD.z[gD][fD];
-       let JD = 1;
-       DD: for (; JD < RD; JD++)
- ... (9 more removed lines; see GitHub link above)
+       return op(pp) ? `select(${Op}, ${cp}, ${ip})` : `((${ip}) ? (${cp}) : (${Op}))`
```

#### 25. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3952-L3966` → after: `L249-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L249-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/240.js#L249-L250) · [Before (L3952-L3966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/240.js#L3952-L3966)

```diff
-     function ED(DD, zD) {
-       for (const wD of function(DD) {
-           let {
-             anchor: zD,
-             rot: wD,
-             width: pD,
-             height: KD
-           } = DD;
-           const [rD, , LD] = sD.z[wD][fD], cD = [];
-           for (let sD = 0; sD < KD; sD++)
-             for (let DD = 0; DD < pD; DD++) cD.push([zD[0] + rD * DD, zD[1] - sD, zD[2] + LD * DD]);
-           return cD
-         }(DD))
-         if (GD(zD(wD[0], wD[1], wD[2]))) return wD;
-       return null
+     function hp(pp, ip, cp) {
+       return op(pp) ? `((${ip}) - (${cp}) * floor((${ip}) / (${cp})))` : `mod(${ip}, ${cp})`
```

#### 26. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3969-L3996` → after: `L253-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L253-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/240.js#L253-L254) · [Before (L3969-L3996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/240.js#L3969-L3996)

```diff
-     function QD(DD, zD, wD, sD, KD) {
-       const rD = DD(wD, sD, KD);
-       if (!cD(rD)) return null;
-       const {
-         rootId: LD,
-         rot: gD
-       } = pD.l[rD].meta, RD = [
-         [wD, sD, KD]
-       ], UD = new Set([RD[0].join()]);
-       let fD = RD[0],
-         ID = null;
-       for (let pD = 0; pD < RD.length; pD++) {
-         const wD = RD[pD];
-         if (MD(gD, wD, fD) < 0 && (fD = wD), GD(zD(wD[0], wD[1], wD[2]))) {
-           const zD = JD(DD, wD[0], wD[1], wD[2]);
-           (!ID || MD(gD, zD.anchor, ID.anchor) < 0) && (ID = zD)
- ... (12 more removed lines; see GitHub link above)
+     function ap(pp, ip, cp) {
+       return op(pp) ? `${ip} = vec4f(${cp}, ${ip}.a);` : `${ip}.rgb = ${cp};`
```

#### 27. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3999-L4017` → after: `L257-L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L257-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/240.js#L257-L262) · [Before (L3999-L4017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/240.js#L3999-L4017)

```diff
-     function XD(DD, zD, wD, rD, LD) {
-       if (null !== wD && cD(wD)) {
-         const {
-           rootName: DD,
-           rot: zD
-         } = pD.l[wD].meta;
-         if (sD.z[zD].some((DD => {
-             let [zD, wD, pD] = DD;
-             return zD === rD[0] && wD === rD[1] && pD === rD[2]
-           }))) return {
-           root: DD,
-           rot: zD
-         }
-       }
-       const [gD, RD] = sD.p[LD], AD = DD(zD[0] - gD, zD[1], zD[2] - RD);
-       return {
- ... (3 more removed lines; see GitHub link above)
+     function np(pp, ip, cp) {
+       return op(pp) ? `${ip} = vec4f(${ip}.rgb * (${cp}), ${ip}.a);` : `${ip}.rgb *= ${cp};`
+     }
+ 
+     function Fp(pp, ip, cp) {
+       return op(pp) ? `${ip} = vec4f(${cp}, ${ip}.w);` : `${ip}.xyz = ${cp};`
```

#### 28. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L4020` → after: `L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/240.js#L265) · [Before (L4020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/240.js#L4020)

```diff
-   38195: (DD, zD, wD) => {
+   40062: (pp, ip, cp) => {
```

#### 29. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L4022-L4025` → after: `L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/240.js#L267) · [Before (L4022-L4025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/240.js#L4022-L4025)

```diff
-       d: () => KD,
-       g: () => rD,
-       i: () => sD,
-       m: () => LD
+       b: () => Op
```

#### 30. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L4027-L4038` → after: `L269-L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L269-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/240.js#L269-L277) · [Before (L4027-L4038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/240.js#L4027-L4038)

```diff
-     var pD = wD(353);
-     const sD = ["Snowball", "Snowball Launcher", "Pebble", "Reinforced Pebble", "Ball", "Reinforced Ball", "Mango", "Moonstone Orb", ...wD(616).v.map((DD => `${DD} Spawn Orb`)), "Fireball", "RPG", "Obby RPG", "Super RPG", "Grenade Launcher", "Iceball", "Bouncy Bomb", "Coconut", " … [truncated]
-       KD = ["Obby RPG"];
- 
-     function rD(DD) {
-       const zD = DD.indexOf("|");
-       return -1 === zD ? {
-         item: DD,
-         clientPredictedThrower: null
-       } : {
-         item: DD.slice(0, zD),
-         clientPredictedThrower: DD.slice(zD + 1)
+     class Op {
+       static GetShadersRepository() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Op.ShadersRepository : Op.ShadersRepositoryWGSL
+       }
+       static GetShadersStore() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Op.ShadersStore : Op.ShadersStoreWGSL
+       }
+       static GetIncludesShadersStore() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Op.IncludesShadersStore : Op.IncludesShadersStoreWGSL
```

#### 31. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L4041` → after: `L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/240.js#L280) · [Before (L4041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/240.js#L4041)

```diff
-     const LD = [...sD, "Arrow", "Arrow of Speed", "Arrow of Slowness", "Arrow of Poison", "Arrow of Weakness", "Arrow of Knockback", "Arrow of Strength", "Arrow of Defense", "Arrow of Invisibility", "Arrow of Jumping", "Arrow of Milk", "Arrow of Instant Damage", "Arrow of Regener … [truncated]
+     Op.ShadersRepository = "src/Shaders/", Op.ShadersStore = {}, Op.IncludesShadersStore = {}, Op.ShadersRepositoryWGSL = "src/ShadersWGSL/", Op.ShadersStoreWGSL = {}, Op.IncludesShadersStoreWGSL = {}
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/241.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/241.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5)

#### 1. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/241.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/241.js#L4)

```diff
-   38039: (DD, zD, wD) => {
+   37479: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L6-L11` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/241.js#L6-L7) · [Before (L6-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/241.js#L6-L11)

```diff
-       c: () => gD,
-       f: () => pD,
-       g: () => LD,
-       j: () => sD,
-       l: () => rD,
-       n: () => KD
+       Color3: () => Op.d,
+       b: () => Op.h
```

#### 3. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L13-L645` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/241.js#L9-L10) · [Before (L13-L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/241.js#L13-L645)

```diff
-     const pD = 1.001,
-       sD = .501,
-       KD = .025,
-       rD = .75,
-       LD = .08,
-       cD = 4;
- 
-     function gD() {
-       const DD = sD,
-         zD = KD,
-         wD = DD - zD / 2,
-         pD = (2 * DD - 2 * zD) / (2 * cD - 1),
-         rD = [];
-       for (const sD of [-wD, wD])
-         for (const KD of [-wD, wD])
-           for (let wD = 0; wD < cD; wD++) {
- ... (617 more removed lines; see GitHub link above)
+     var Op = cp(37487);
+     (0, Op.i)()
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/242.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/242.js` (54 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee)

#### 1. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L4-L12` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/242.js#L4) · [Before (L4-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/242.js#L4-L12)

```diff
-   39079: (DD, zD, wD) => {
-     function pD(DD) {
-       return !(!DD.lobbyLeaderboardInfo && !DD.lobbyManage)
-     }
-     wD.d(zD, {
-       b: () => pD
-     })
-   },
-   39055: (DD, zD, wD) => {
+   41280: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L14-L15` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/242.js#L6) · [Before (L14-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/242.js#L14-L15)

```diff
-       e: () => KD,
-       h: () => rD
+       noaDevTools: () => Ap
```

#### 3. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L17-L22` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/242.js#L8-L12) · [Before (L17-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/242.js#L17-L22)

```diff
-     var pD = wD(25);
-     let sD = !1;
- 
-     function KD() {
-       return sD
-     }
+     var Op = cp(37769),
+       op = cp(37760),
+       Ip = cp(2849),
+       Sp = cp(1765),
+       xp = cp(41182);
```

#### 4. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L25` → after: `L15-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L15-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/242.js#L15-L34) · [Before (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/242.js#L25)

```diff
-       sD !== DD && (sD = DD, pD.l.KG("replayViewer|videoExportChanged"))
+       const {
+         WU: ip
+       } = pp, cp = ip.engine, Op = {
+         width: cp.getRenderWidth(),
+         height: cp.getRenderHeight()
+       };
+       return {
+         canvas: cp.getRenderingCanvas(),
+         maxTextureSize: cp.getCaps().maxTextureSize,
+         drawing: () => !pp.Fk,
+         resize: (pp, ip) => {
+           cp.setSize(pp, ip)
+         },
+         restoreSize: () => {
+           cp.setSize(Op.width, Op.height), ip.resize()
+         },
+ ... (4 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L27-L33` → after: `L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/242.js#L36) · [Before (L27-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/242.js#L27-L33)

```diff
-   },
-   38989: (DD, zD, wD) => {
-     wD.d(zD, {
-       d: () => KD
-     });
-     var pD = wD(25),
-       sD = wD(1956);
+     var Yp = cp(34306);
```

#### 6. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L35` → after: `L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/242.js#L38) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/242.js#L35)

```diff
-     function KD(DD) {
+     function Dp(pp, ip) {
```

#### 7. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L37-L38` → after: `L40-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L40-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/242.js#L40-L42) · [Before (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/242.js#L37-L38)

```diff
-         taskId: zD,
-         progress: wD
+         width: Yp,
+         height: Dp,
+         colouring: Ap
```

#### 8. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L40-L262` → after: `L44-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L44-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/242.js#L44-L46) · [Before (L40-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/242.js#L40-L262)

```diff
-       const pD = sD.e.get("_tasks");
-       null !== pD && void 0 !== pD && pD[zD] && sD.e.apply({
-         _tasks: {
-           ...pD,
-           [zD]: {
-             ...pD[zD],
-             progress: wD
-           }
-         }
-       })
-     }
-     pD.l.subscribe("clientTaskProgress", (DD => {
-       KD(DD)
-     }))
-   },
-   39075: (DD, zD, wD) => {
- ... (207 more removed lines; see GitHub link above)
+       const Pp = "normals" === Ap,
+         Wp = "depth" === Ap;
+       return new Promise((ip => {
```

#### 9. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L264-L799` → after: `L48-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L48-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/242.js#L48-L54) · [Before (L264-L799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/242.js#L264-L799)

```diff
-           (0, gD.zc)(DD) && (zD = (0, gD.e)(DD, RD.nI.from(zD)));
-           const wD = UD.get(this)[DD];
-           if ("function" !== typeof wD) {
-             if (this.callbacks.cRD) return void this.callbacks.cRD(DD, zD);
-             throw new Error(`No onMessage handler registered for message id ${DD}`)
-           }
-           wD(zD)
-         } catch (wD) {
-           this.callbacks.gRD(`Error in onMessage ${DD} with payload ${JSON.stringify(zD)}`, wD)
-         } finally {
-           this.JC++
-         }
-       }
-       RRD() {
-         for (const {
-             id: DD,
- ... (520 more removed lines; see GitHub link above)
+           const yp = (0, Ip.g)();
+           if (yp.WU.yU) return "screenshot" !== pp || null !== Ap ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void ip()) : void(0, xp.g)(Lp(yp), Yp, Dp).finally(ip);
+           const Up = yp.WU.engine,
+             wp = yp.WU.Gl(),
+             vp = Yp,
+             tp = Dp;
+           Promise.all([Promise.all([cp.e(258), cp.e(259), cp.e(238)]).then((() => cp(61368))), Promise.all([cp.e(237), cp.e(236), cp.e(258), cp.e(259), cp.e(256), cp.e(260), cp.e(263), cp.e(316), cp.e(243)]).then((() => cp(61372))), Promise.all([cp.e(237), cp.e(236), cp.e(258), c … [truncated]
```

#### 10. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L801-L976` → after: `L56-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L56-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/242.js#L56-L67) · [Before (L801-L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/242.js#L801-L976)

```diff
-               rp: DD,
-               Ip: zD
-             } = RD;
-             return (0, cD.b)().client.inventoryPrediction.Z6(zD, (() => {
-               AD.chestRefreshed(pD, sD, KD, gD, DD)
-             })) && hD.l.KG("chestToggleFromServer", !1, !0), void hD.l.KG("chestRefreshedFromServer")
-           }(wD || AD.Lp) && (wD ? (AD.chestOpened(pD, sD, KD, rD, gD), null !== rD && (0, cD.b)().client.ironChestPasskeyCache.onChestOpened(KD, rD)) : AD.chestClosed(), hD.l.KG("chestToggleFromServer", wD, !0))
-         })), DD.bJ(gD.ec, (DD => {
-           let {
-             craftingRecipeItemName: pD,
-             recipesForItem: sD
-           } = DD;
-           pD ? wD.craftingManager.editRecipesForPlayer(zD.vW, pD, sD) : wD.craftingManager.resetAllPlayerRecipes(zD.vW), hD.l.KG("craftingRecipesEdited", {
-             itemName: pD,
-             recipesForItem: sD
-           })
- ... (160 more removed lines; see GitHub link above)
+               CreateScreenshotUsingRenderTarget: xp
+             } = Ip[1], {
+               ShaderMaterial: Lp
+             } = Ip[2], {
+               ShaderLanguage: Yp
+             } = Ip[3], {
+               Zy: Dp
+             } = Ip[4], {
+               registerDevtoolsShader: Ap
+             } = Ip[6], yp = Yp.GLSL, Hp = new Map, dp = wp.meshes.filter((pp => pp.material));
+             let ep = !1,
+               jp = null;
```

#### 11. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L978-L998` → after: `L69-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L69-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/242.js#L69-L75) · [Before (L978-L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/242.js#L978-L998)

```diff
-     function Az(DD) {
-       const zD = DD.KU;
-       let wD = 0,
-         sD = -1,
-         rD = -1 / 0,
-         LD = null,
-         cD = !0;
-       const RD = () => {
-         if (++wD % 10 !== 0) return;
-         const RD = (0, pD.getLastReceivedPacketId)();
-         if (RD <= sD) return;
-         const [AD, UD, fD] = DD.yJ.PJ(DD.vW), ID = ! function(DD) {
-           var zD;
-           let wD = null === (zD = DD.yJ.nwD(DD.vW)) || void 0 === zD ? void 0 : zD.UI;
-           if (void 0 === wD) return !1;
-           const pD = new Set;
- ... (5 more removed lines; see GitHub link above)
+             function kp() {
+               var pp;
+               ep && (ep = !1, (0, Op.f)(wp.meshes, !1)), null === (pp = jp) || void 0 === pp || pp(), jp = null, dp.forEach((pp => {
+                 const ip = Hp.get(pp);
+                 ip && (pp.material = ip)
+               }))
+             }
```

#### 12. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L1000-L1001` → after: `L77-L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L77-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/242.js#L77-L123) · [Before (L1000-L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/242.js#L1000-L1001)

```diff
-               const zD = DD.yJ.PJ(wD);
-               if (Math.abs(zD[0] - KD[0]) > 10 || Math.abs(zD[1] - KD[1]) > 10 || Math.abs(zD[2] - KD[2]) > 10) return !0
+               const pp = [],
+                 ip = [];
+               dp.forEach((cp => {
+                 const Op = cp.name.toLowerCase(),
+                   op = cp.bJ().boundingBox.center,
+                   Ip = wp.activeCamera.position.subtract(op).length();
+                 Op.includes("sky") || Op.includes("background") || Op.includes("environment") || Ip > 1e3 ? ip.push(cp) : pp.push(cp)
+               })), Ap("devtoolsNormal", yp);
+               const cp = new Lp("normalMaterial", wp, "devtoolsNormal", {
+                 attributes: ["position", "normal"],
+                 uniforms: ["worldViewProjection", "world"],
+                 shaderLanguage: yp
+               });
+               Ap("devtoolsWhite", yp);
+               const Op = new Lp("whiteMaterial", wp, "devtoolsWhite", {
+                 attributes: ["position"],
+ ... (31 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L1003-L1045` → after: `L125-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L125-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/242.js#L125-L136) · [Before (L1003-L1045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/242.js#L1003-L1045)

```diff
-             wD = null === (sD = DD.yJ.nwD(wD)) || void 0 === sD ? void 0 : sD.UI
-           }
-           return !1
-         }(DD) && function(DD, zD, wD, pD) {
-           const sD = KD.f.CI;
-           for (let KD = 0; KD < DD.length; KD++) {
-             const rD = DD[KD];
-             if (!(0, Rz.g)(zD, wD, pD, rD[0] * sD, rD[1] * sD, rD[2] * sD)) return !1
-           }
-           return !0
-         }(zD.zG.OI, AD, UD, fD), BD = null === LD || Math.abs(AD - LD[0]) > 8 || Math.abs(UD - LD[1]) > 8 || Math.abs(fD - LD[2]) > 8, GD = !cD || BD || performance.now() - rD >= 1e4;
-         cD = ID, ID && GD && (sD = RD, rD = performance.now(), LD = [AD, UD, fD], (0, pD.sendColyMessage)(gD.Ng, {
-           KL: RD
-         }))
-       };
-       return DD.on("DU", RD), () => {
- ... (27 more removed lines; see GitHub link above)
+             if ((0, Op.f)(wp.meshes, !0), ep = !0, "glb" === pp && (jp = (0, op.d)(wp.meshes)), "screenshot" === pp) {
+               let pp = `bloxd-screenshot-${vp}x${tp}-${Date.now()}.png`;
+               Pp ? pp = `bloxd-screenshot-normals-${vp}x${tp}-${Date.now()}.png` : Wp && (pp = `bloxd-screenshot-depth-${vp}x${tp}-${Date.now()}.png`), xp(Up, wp.activeCamera, {
+                 width: vp,
+                 height: tp
+               }, (function(cp) {
+                 kp(), fetch(cp).then((function(pp) {
+                   return pp.blob()
+                 })).then((function(cp) {
+                   (0, Sp.downloadBlob)(cp, pp), ip()
+                 })).catch((function(pp) {
+                   console.error("Error processing screenshot:", pp), ip()
```

#### 14. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L1047-L1101` → after: `L138-L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L138-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/242.js#L138-L216) · [Before (L1047-L1101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/242.js#L1047-L1101)

```diff
-               },
-               rD = () => {
-                 null === sD && (sD = setTimeout(KD, Math.max(0, wD + 250 - performance.now())))
-               };
-             return KD(), DD.on("addRemoveDistanceChanged", rD), () => {
-               DD.off("addRemoveDistanceChanged", rD), null !== sD && (clearTimeout(sD), sD = null)
-             }
-           }(this.AU.KU),
-           zD = Az(this.AU);
-         this.stopChunkReports = () => {
-           DD(), zD()
-         }
-       }
-       restartChunkStreaming() {
-         (0, wz.o)(this.AU, (0, cD.b)().recentChunkEdits.chunksEditedSince(this.connectionResume.getDroppedAt() - Uz.b)), this.startChunkReports()
-       }
- ... (39 more removed lines; see GitHub link above)
+               }), "image/png", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, (function() {
+                 console.error("Screenshot timed out"), kp(), ip()
+               }))
+             } else {
+               let pp = "pw";
+               Pp ? pp = "scene-normals" : Wp && (pp = "scene-depth"), Pp || Wp ? setTimeout((() => {
+                 (async function() {
+                   const {
+                     StandardMaterial: pp
+                   } = await Promise.all([cp.e(237), cp.e(236), cp.e(258), cp.e(259), cp.e(256), cp.e(266), cp.e(265), cp.e(244)]).then((() => cp(40459))), {
+                     Color3: ip
+                   } = await Promise.all([cp.e(237), cp.e(241)]).then((() => cp(37479))), Op = [], op = [];
+                   if (dp.forEach((pp => {
+                       const ip = pp.name.toLowerCase(),
+                         cp = pp.bJ().boundingBox.center,
+                         Ip = wp.activeCamera.position.subtract(cp).length();
+ ... (63 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L1103-L1321` → after: `L218-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L218-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/242.js#L218-L219) · [Before (L1103-L1321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/242.js#L1103-L1321)

```diff
-           } else console.log("Local client is eId", KD), (0, wz.q)(zD), hD.l.KG("loadingScreenState", "loadingPage:loadingWorld"), zD.vDD = KD, zD.yJ.aDD(zD.vW, zD.yJ.names.entityName) && zD.yJ.fW(zD.vW, zD.yJ.names.entityName), (0, cD.b)().setEntityName(zD.vDD, (0, cD.b)().getRa … [truncated]
-         })), DD.bJ(gD.Pe, (() => {
-           this.connectionResume.isResuming() ? this.connectionResume.onResumed((() => {
-             const DD = this.replayResume;
-             if (this.replayResume = null, !DD) return;
-             this.restartChunkStreaming();
-             const {
-               inventoryPrediction: wD
-             } = (0, cD.b)().client, {
-               sync: sD
-             } = DD, KD = new Set(pD.offlineInputReplay.takeDroppedActions());
-             if (sD) {
-               var rD;
-               const pD = null !== (rD = DD.endSeq) && void 0 !== rD ? rD : wD.lastActionSeq;
-               wD.forget((DD => DD > sD.Ip && DD <= pD || KD.has(DD))), rz(zD, wD, hD.l, sD.Ip, sD.load)
-             } else wD.dropPending(), wD.askForSnapshot()
- ... (203 more removed lines; see GitHub link above)
+           })).catch((pp => {
+             console.error("Error downloading the scene:", pp), ip()
```

#### 16. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L1430-L3598` → after: `L222-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L222-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/242.js#L222-L223) · [Before (L1430-L3598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/242.js#L1430-L3598)

```diff
-           console.error("Error completing the resume", zD)
-         } finally {
-           this.session.onResumed()
-         }
-       }
-       attachRoom(DD) {
-         const zD = (0, xz.e)((() => DD.connection.isOpen));
-         DD.dJ(zD);
-         const wD = new Cz.c((() => {
-           this.session.canHoldSeat() && this.listener.isLive() && (console.warn("The game server went silent, reconnecting"), this.onConnectionDropped(DD, "silent"), DD.leave(!1))
-         }));
-         DD.onStateChange((() => {
-           wD.heard()
-         }));
-         const pD = zD => {
-           zD.persisted || DD.leave(!0)
- ... (2153 more removed lines; see GitHub link above)
+           console.error("Error taking screenshot:", yp), ip()
+         }
```

#### 17. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L3622-L3636` → after: `L226-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L226-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/242.js#L226-L242) · [Before (L3622-L3636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/242.js#L3622-L3636)

```diff
-     wD.d(zD, {
-       e: () => pD
-     })
-   },
-   38958: (DD, zD, wD) => {
-     wD.d(zD, {
-       c: () => KD,
-       f: () => sD
-     });
-     var pD = wD(37151);
- 
-     function sD(DD, zD) {
-       return {
-         replayedClipName: DD,
-         replayedClipAgeSeconds: zD
+     const Ap = new class {
+       constructor() {
+         this.tools = Yp.ALL_DEV_TOOLS
+       }
+       downloadScene(pp, ip) {
+         return Dp(pp, ip)
+       }
+       async setAmbientLightIntensity(pp) {
+         const {
+           Color3: ip
+         } = await Promise.all([cp.e(237), cp.e(241)]).then((() => cp(37479)));
+         (0, Ip.g)().WU.Gl().ambientColor = ip.FromArray([pp, pp, pp])
+       }
+       capturePhoto(pp, ip, cp) {
+         return function(pp, ip, cp, Op) {
+           return (0, xp.c)(Lp(pp), ip, cp, Op)
+ ... (1 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L3660` → after: `L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/242.js#L246) · [Before (L3660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/242.js#L3660)

```diff
-   38963: (DD, zD, wD) => {
+   41182: (pp, ip, cp) => {
```

#### 19. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L3662-L3667` → after: `L248-L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L248-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/242.js#L248-L249) · [Before (L3662-L3667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/242.js#L3662-L3667)

```diff
-       e: () => ID,
-       h: () => RD,
-       l: () => fD,
-       o: () => UD,
-       r: () => BD,
-       v: () => AD
+       c: () => xp,
+       g: () => Lp
```

#### 20. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L3669-L3698` → after: `L251-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L251-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/242.js#L251-L254) · [Before (L3669-L3698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/242.js#L3669-L3698)

```diff
-     var pD = wD(38967),
-       sD = wD(37233),
-       KD = wD(3688),
-       rD = wD(1932),
-       LD = wD(25),
-       cD = wD(2769);
-     const gD = new pD.e;
- 
-     function RD() {
-       return gD
-     }
- 
-     function AD() {
-       gD.clear()
-     }
- 
- ... (14 more removed lines; see GitHub link above)
+     var Op = cp(1779);
+     const op = 33177600,
+       Ip = 3e4;
+     let Sp = !1;
```

#### 21. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L3700` → after: `L256-L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L256-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/242.js#L256-L257) · [Before (L3700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/242.js#L3700)

```diff
-     function ID(DD) {
+     function xp(pp, ip, cp) {
+       let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
```

#### 22. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L3702-L3713` → after: `L259-L272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L259-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/242.js#L259-L272) · [Before (L3702-L3713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/242.js#L3702-L3713)

```diff
-         added: zD,
-         removed: wD,
-         settingChanges: pD
-       } = gD.apply(DD);
-       for (const {
-           playerId: sD,
-           name: KD
-         }
-         of wD) void 0 === KD || GD(sD) || rD.d.delete(KD);
-       for (const {
-           playerId: KD,
-           settings: rD
+         scale: xp = 1,
+         type: Lp = "image/png",
+         quality: Yp
+       } = Op;
+       if (!pp.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
+       if (Sp) return Promise.reject(new Error("A screenshot is already being taken"));
+       Sp = !0;
+       const Dp = function(pp, ip, cp) {
+         const Op = Math.max(1, pp),
+           Ip = Math.max(1, ip),
+           Sp = Math.min(1, cp / Math.max(Op, Ip), Math.sqrt(op / (Op * Ip)));
+         return {
+           width: Math.max(1, Math.floor(Op * Sp)),
+           height: Math.max(1, Math.floor(Ip * Sp))
```

#### 23. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L3715-L3719` → after: `L274-L305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L274-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/242.js#L274-L305) · [Before (L3715-L3719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/242.js#L3715-L3719)

```diff
-         of pD)
-         if (GD(KD)) BD(KD, rD);
-         else
-           for (const DD in rD)(0, sD.h)(KD, DD, rD[DD]);
-       (zD.length > 0 || wD.length > 0) && LD.l.KG("playerRosterChanged", gD.ids())
+       }(ip, cp, pp.maxTextureSize);
+       return pp.resize(Dp.width, Dp.height, xp * Dp.width / Math.max(1, ip)), new Promise(((ip, cp) => {
+         let Op, op = 2,
+           xp = null;
+         const Dp = () => {
+           var ip;
+           Sp = !1, null === (ip = xp) || void 0 === ip || ip(), clearTimeout(Op), pp.restoreSize()
+         };
+         Op = setTimeout((() => {
+           Dp(), cp(new Error("No frame was drawn to capture"))
+         }), Ip), xp = pp.onFrameDrawn((() => {
+           if (op--, op > 0) return;
+           const {
+             canvas: Op
+           } = pp, Ip = {
+             width: Op.width,
+ ... (16 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L3721-L3726` → after: `L307-L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L307-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/242.js#L307-L312) · [Before (L3721-L3726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/242.js#L3721-L3726)

```diff
- 
-     function BD(DD) {
-       let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : gD.getSettings(DD);
-       if (zD) {
-         (0, sD.e)(DD);
-         for (const wD in zD)(0, sD.d)(DD, wD, zD[wD])
+     async function Lp(pp, ip, cp) {
+       try {
+         const op = await xp(pp, ip, cp);
+         (0, Op.c)(op.blob, `bloxd-screenshot-${op.width}x${op.height}-${Date.now()}.png`)
+       } catch (op) {
+         console.error("Error taking screenshot:", op)
```

#### 25. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L3734` → after: `L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/242.js#L316) · [Before (L3734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/242.js#L3734)

```diff
-   38066: (DD, zD, wD) => {
+   37769: (pp, ip, cp) => {
```

#### 26. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L3736` → after: `L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/242.js#L318) · [Before (L3736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/242.js#L3736)

```diff
-       b: () => PD,
+       d: () => Yp,
```

#### 27. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L3738-L3740` → after: `L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/242.js#L320) · [Before (L3738-L3740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/242.js#L3738-L3740)

```diff
-       i: () => XD,
-       j: () => VD,
-       k: () => CD
+       g: () => Sp
```

#### 28. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L3742-L3802` → after: `L322-L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L322-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/242.js#L322-L324) · [Before (L3742-L3802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/242.js#L3742-L3802)

```diff
-     var pD = wD(37070),
-       sD = wD(38074),
-       KD = wD(358),
-       rD = wD.n(KD),
-       LD = wD(3405);
-     const cD = new pD.WI,
-       gD = new pD.WI,
-       RD = new pD.WI,
-       AD = new pD.WI,
-       UD = new pD.WI,
-       fD = [0, 0, 0],
-       ID = {
-         x: 0,
-         y: 0
-       },
-       BD = new pD.WI(1, 0, 0),
- ... (45 more removed lines; see GitHub link above)
+     var Op = cp(37767),
+       op = cp(37772);
+     let Ip = 0;
```

#### 29. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L3805` → after: `L327-L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L327-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/242.js#L327-L330) · [Before (L3805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/242.js#L3805)

```diff
-       return ED(DD, xD(DD, zD))
+       const cp = pp;
+       cp._noaFaceGroups = null !== ip && void 0 !== ip ? ip : null, cp._noaFaceEpoch = -1, cp._noaFaceMask = -1, cp._noaFaceCount = -1, cp._noaFaceMaterial = null;
+       const Op = pp.Am;
+       Op && 1 === Op.length && (Op[0].indexStart = 0, Op[0].indexCount = pp.getTotalIndices())
```

#### 30. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L3809-L3818` → after: `L334-L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L334-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/242.js#L334-L340) · [Before (L3809-L3818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/242.js#L3809-L3818)

```diff
-       const wD = QD(DD, xD(DD, zD));
-       return wD && {
-         x: wD.x,
-         y: wD.y
-       }
-     }
- 
-     function PD(DD) {
-       var zD, wD;
-       return 1 / (null !== (zD = null === (wD = DD.wB.YwD()) || void 0 === wD ? void 0 : wD.projectionMatrix[0]) && void 0 !== zD ? zD : DD.wB.Ul().activeCamera.getProjectionMatrix().m[0])
+       if (ip) {
+         Ip++;
+         for (const ip of pp) {
+           const pp = ip._noaFaceGroups;
+           pp && Sp(ip, pp)
+         }
+       } else Ip = Math.max(0, Ip - 1)
```

#### 31. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L3822-L3902` → after: `L344-L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L344-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/242.js#L344-L349) · [Before (L3822-L3902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/242.js#L3822-L3902)

```diff
-       const pD = DD.wB.YwD(),
-         sD = pD ? pD.worldMatrix : DD.wB.Ul().activeCamera.getWorldMatrix().m,
-         KD = DD.CU;
-       for (let rD = 0; rD < 3; rD++) zD[rD] = sD[12 + rD] + KD[rD], wD[rD] = sD[8 + rD];
-       rD().normalize(wD, wD)
-     }
- 
-     function xD(DD, zD) {
-       const wD = DD.CU,
-         pD = DD.wB.YwD(),
-         sD = pD ? OD.Z2(pD.eye[0], pD.eye[1], pD.eye[2]) : DD.wB.camera.globalPosition;
-       return fD[0] = zD[0] - wD[0] - sD.x, fD[1] = zD[1] - wD[1] - sD.y, fD[2] = zD[2] - wD[2] - sD.z, rD().normalize(fD, fD), fD
-     }
- 
-     function TD(DD, zD) {
-       return (0, LD.d)(DD, zD, LD.c, (0, LD.k)())
- ... (65 more removed lines; see GitHub link above)
+       let op = -1,
+         Ip = 0;
+       for (let Sp = 0; Sp < Op.f; Sp++) {
+         const cp = pp[Sp],
+           xp = pp[Sp + 1];
+         xp > cp && ip & 1 << Op.e[Sp] && (op < 0 && (op = cp), Ip = xp)
```

#### 32. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L3911-L3925` → after: `L354-L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L354-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/242.js#L354-L355) · [Before (L3911-L3925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/242.js#L3911-L3925)

```diff
-       constructor(DD) {
-         let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
-         this.onSilent = DD, this.now = zD, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
-           const DD = this.now(),
-             zD = DD - this.lastCheckAt <= 2e3;
-           this.lastCheckAt = DD;
-           const wD = "visible" === document.visibilityState;
-           !wD || zD && this.wasVisible || (this.resumedAt = DD), this.wasVisible = wD, wD && DD - this.lastHeardAt > 12e3 && DD - this.resumedAt > 2e3 && this.onSilent()
-         }, this.lastHeardAt = zD(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
-       }
-       heard() {
-         this.lastHeardAt = this.now()
-       }
-       dispose() {
-         clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
+       constructor(pp, ip) {
+         this.Qy = pp, this.engine = ip, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
```

#### 33. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L3927-L3989` → after: `L357-L389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L357-L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/242.js#L357-L389) · [Before (L3927-L3989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/242.js#L3927-L3989)

```diff
-     }
-   },
-   38933: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => UD
-     });
-     var pD = wD(197),
-       sD = wD(358),
-       KD = wD.n(sD),
-       rD = wD(36711),
-       LD = wD(36719),
-       cD = wD(2769);
-     const gD = pD.f.eG * pD.f.playerEyeToHeightRatio,
-       RD = 250,
-       AD = 1.1,
-       UD = new class {
- ... (47 more removed lines; see GitHub link above)
+       apply(pp, ip) {
+         if (!ip) return;
+         const cp = ip.getProjectionMatrix().m,
+           Sp = 0 === Ip && 0 === cp[15],
+           xp = ip.globalPosition,
+           {
+             engine: Yp
+           } = this,
+           Dp = Sp ? (0, op.c)(cp, Yp.getRenderWidth(), Yp.getRenderHeight()) : 0;
+         xp.x === this.eyeX && xp.y === this.eyeY && xp.z === this.eyeZ && Dp === this.focalPx && Sp === this.culling || (this.epoch++, this.eyeX = xp.x, this.eyeY = xp.y, this.eyeZ = xp.z, this.focalPx = Dp, this.culling = Sp);
+         const {
+           epoch: Ap,
+           range: Pp
+         } = this, Wp = this.Qy / 2, yp = Wp * Math.sqrt(3), Up = pp.data, wp = pp.length;
+         let vp = 0;
+         for (let Ip = 0; Ip < wp; Ip++) {
+ ... (17 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L4036` → after: `L403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/242.js#L403) · [Before (L4036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/242.js#L4036)

```diff
-   39020: (DD, zD, wD) => {
+   37760: (pp, ip, cp) => {
```

#### 35. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L4038-L4039` → after: `L405-L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L405-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/242.js#L405-L406) · [Before (L4038-L4039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/242.js#L4038-L4039)

```diff
-       e: () => UD,
-       h: () => RD
+       d: () => Lp,
+       g: () => xp
```

#### 36. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L4041-L4046` → after: `L408-L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L408-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/242.js#L408-L410) · [Before (L4041-L4046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/242.js#L4041-L4046)

```diff
-     var pD = wD(197),
-       sD = wD(1819),
-       KD = wD(1217),
-       rD = wD(8901);
-     const LD = [250, 500, 1e3, 2e3, 1250],
-       cD = 406;
+     const Op = new WeakSet;
+     let op = 0;
+     const Ip = new Set;
```

#### 37. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L4048-L4067` → after: `L412-L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L412-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/242.js#L412-L413) · [Before (L4048-L4067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/242.js#L4048-L4067)

```diff
-     function gD(DD) {
-       if ("object" !== typeof DD || null === DD) return !1;
-       const {
-         code: zD,
-         message: wD
-       } = DD, sD = pD.e.duplicateLobbyNameError;
-       return (zD === sD.code || zD === cD) && (wD === sD.text || wD === sD.text + pD.j)
-     }
-     async function RD(DD, zD) {
-       let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : sD.e;
-       for (let sD = 0;; sD++) {
-         let rD;
-         (0, KD.h)(zD);
-         try {
-           return await DD()
-         } catch (pD) {
- ... (4 more removed lines; see GitHub link above)
+     function Sp(pp, ip) {
+       pp._data = ip
```

#### 38. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L4072-L4074` → after: `L417-L418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L417-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/242.js#L417-L418) · [Before (L4072-L4074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/242.js#L4072-L4074)

```diff
-       if (gD(DD)) return !0;
-       const zD = (0, rD.g)(DD);
-       return "number" === typeof zD && AD.has(zD)
+       var ip, cp;
+       (null !== (ip = null === (cp = pp.getBuffer()) || void 0 === cp ? void 0 : cp.TA) && void 0 !== ip ? ip : 0) > 0 && (Op.add(pp), 0 === op ? Sp(pp, null) : Ip.add(pp))
```

#### 39. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L4085-L4096` → after: `L422-L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L422-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/242.js#L422-L441) · [Before (L4085-L4096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/242.js#L4085-L4096)

```diff
-       return "refetchCode" === DD || "devDownloadJson" === DD || DD.startsWith("Plugin")
-     }
- 
-     function KD(DD, zD) {
-       "refetchCode" !== DD ? "Plugin|MobAiPlugin|ShowPetUi" !== DD ? Promise.all([wD.e(107), wD.e(108), wD.e(103), wD.e(105), wD.e(214)]).then((() => wD(41641))).then((wD => {
-         let {
-           runClientGameMessage: pD
-         } = wD;
-         pD(DD, zD)
-       })).catch((zD => {
-         console.error(`Game message ${DD} failed`, zD)
-       })) : pD.l.KG("showPetUi", zD) : pD.l.KG("refetchCode")
+       op++;
+       for (const cp of function(pp) {
+           const ip = new Set;
+           for (const op of pp) {
+             const pp = op.geometry;
+             for (const op of Object.values(null !== (cp = null === pp || void 0 === pp ? void 0 : pp.getVertexBuffers()) && void 0 !== cp ? cp : {})) {
+               var cp;
+               const pp = op.getWrapperBuffer();
+               Op.has(pp) && ip.add(pp)
+             }
+           }
+           return ip
+         }(pp)) cp.getData() || Yp(cp), Ip.add(cp);
+       let ip = !0;
+       return () => {
+         if (ip && (ip = !1, op--, 0 === op)) {
+ ... (4 more added lines; see GitHub link above)
```

#### 40. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L4112-L4119` → after: `L445-L449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L445-L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/242.js#L445-L449) · [Before (L4112-L4119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/242.js#L4112-L4119)

```diff
-       let {
-         os: zD,
-         Fs: wD
-       } = DD;
-       const RD = null !== zD && void 0 !== zD ? zD : (0, LD.c)().gameNameWithVariation;
-       (0, pD.F)(RD) && ((0, gD.m)(), (0, rD.gb)((() => {
-         console.log("Received matchmaking order from game server to game", zD), (0, KD.k)("inGameReplay"), (0, cD.navigatePreserveSearch)((0, sD.c)(RD, null !== wD && void 0 !== wD ? wD : void 0))
-       }), "video_start"))
+       const ip = pp.getBuffer();
+       if (!ip || !(ip.TA > 0)) return;
+       const cp = pp._engine,
+         Op = new Uint8Array(ip.TA);
+       cp.bindArrayBuffer(ip), cp._gl.getBufferSubData(cp._gl.ARRAY_BUFFER, 0, Op), cp._resetVertexBufferBinding(), Sp(pp, Op)
```

#### 41. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L4122` → after: `L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/242.js#L452) · [Before (L4122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/242.js#L4122)

```diff
-   38975: (DD, zD, wD) => {
+   37767: (pp, ip, cp) => {
```

#### 42. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L4126-L4127` → after: `L456-L460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L456-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/242.js#L456-L460) · [Before (L4126-L4127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/242.js#L4126-L4127)

```diff
-       h: () => LD,
-       l: () => gD
+       g: () => Lp,
+       j: () => Op,
+       n: () => xp,
+       r: () => op,
+       v: () => Yp
```

#### 43. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L4129-L4138` → after: `L462-L473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L462-L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/242.js#L462-L473) · [Before (L4129-L4138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/242.js#L4129-L4138)

```diff
-     var pD = wD(25),
-       sD = wD(1355);
-     const KD = new Map;
- 
-     function rD(DD, zD) {
-       pD.l.KG("newUiRequest", {
-         id: DD,
-         clientParameters: zD
-       }, !0)
-     }
+     const Op = 6,
+       op = [0, 2, 4, 1, 3, 5, 0, 2],
+       Ip = 6,
+       Sp = [1, 0, 3, 2, 5, 4];
+     for (let Dp = Ip; Dp < op.length; Dp++)
+       if (op[Dp] !== op[Dp - Ip]) throw new Error("FACE_LAYOUT must repeat a prefix of its base groups");
+     const xp = op.length + 1,
+       Lp = (() => {
+         const pp = [];
+         for (let ip = 0; ip < Ip; ip++) pp[op[ip]] = ip;
+         return pp
+       })();
```

#### 44. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L4141-L4162` → after: `L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/242.js#L476) · [Before (L4141-L4162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/242.js#L4141-L4162)

```diff
-       pD.l.KG("removeUiRequest", DD, !0);
-       const zD = KD.get(DD);
-       zD && (zD.tearDownNotification(), KD.delete(DD))
-     }
- 
-     function cD() {
-       pD.l.KG("clearUiRequests");
-       for (const DD of KD.values()) DD.tearDownNotification();
-       KD.clear()
-     }
- 
-     function gD(DD, zD, wD, pD) {
-       const rD = sD.NotificationProvider.showPromptPopup({
-         title: zD,
-         confirmText: "general:yes",
-         cancelText: "general:no",
- ... (6 more removed lines; see GitHub link above)
+       return !!pp && pp.backFaceCulling && (0 === pp.transparencyMode || 1 === pp.transparencyMode)
```

#### 45. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L4165` → after: `L479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/242.js#L479) · [Before (L4165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/242.js#L4165)

```diff
-   39052: (DD, zD, wD) => {
+   37772: (pp, ip, cp) => {
```

#### 46. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L4167-L4168` → after: `L481-L485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L481-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/242.js#L481-L485) · [Before (L4167-L4168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/242.js#L4167-L4168)

```diff
-       e: () => fD,
-       g: () => UD
+       c: () => xp,
+       d: () => Lp,
+       g: () => Dp,
+       j: () => Yp,
+       m: () => yp
```

#### 47. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L4170-L4192` → after: `L487-L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L487-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/242.js#L487-L491) · [Before (L4170-L4192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/242.js#L4170-L4192)

```diff
-     const pD = "ue:",
-       sD = ["keydown", "keyup", "mousedown", "mouseup", "pointerdown", "pointerup", "touchstart", "touchend"],
-       KD = "[A-Za-z0-9]{1,24}",
-       rD = 15,
-       LD = new RegExp(`^${KD}$`);
-     new RegExp(`^${pD}(${[...sD,"other"].join("|")}):(?:n|k(${KD})|b(0|[1-9][0-9]?)):([01])([01])$`);
- 
-     function cD(DD, zD, wD, KD, cD) {
-       const gD = "string" === typeof DD && sD.includes(DD) ? DD : "other";
-       let RD = "n";
-       return "string" === typeof zD ? RD = LD.test(zD) ? `k${zD}` : "n" : "number" === typeof wD && Number.isInteger(wD) && wD >= 0 && wD <= rD && (RD = `b${wD}`), `${pD}${gD}:${RD}:${KD?1:0}${cD?1:0}`
-     }
-     var gD = wD(1681),
-       RD = wD(1745);
-     let AD = null;
- 
- ... (7 more removed lines; see GitHub link above)
+     var Op = cp(37767);
+     const op = 1 / 16,
+       Ip = 1 / 64,
+       Sp = 2048;
+     Op.j;
```

#### 48. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L4194-L4205` → after: `L493-L494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L493-L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/242.js#L493-L494) · [Before (L4194-L4205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/242.js#L4194-L4205)

```diff
-     function fD(DD) {
-       return AD ??= function(DD) {
-         try {
-           const {
-             editable: zD,
-             outsideView: wD
-           } = UD(DD.target), pD = DD;
-           return cD(DD.type, pD.code, pD.button, zD, wD)
-         } catch {
-           return cD(null, null, null, !1, !1)
-         }
-       }(DD), AD
+     function xp(pp, ip, cp) {
+       return Math.min(Math.abs(pp[0] * ip), Math.abs(pp[5] * cp)) / 2
```

#### 49. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L4219-L4224` → after: `L497-L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L497-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/242.js#L497-L498) · [Before (L4219-L4224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/242.js#L4219-L4224)

```diff
-     function LD(DD) {
-       let {
-         lobbyName: zD,
-         gameNameWithVariation: wD
-       } = DD;
-       return !(0, pD.J)(zD) || null !== wD && (wD.startsWith("testGym") || (0, sD.l)(wD))
+     function Lp(pp, ip) {
+       return op + Ip * pp * pp / ip
```

#### 50. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L4227-L4228` → after: `L501-L503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L501-L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/242.js#L501-L503) · [Before (L4227-L4228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/242.js#L4227-L4228)

```diff
-     function cD(DD) {
-       return DD.zr === KD.c.Leave || DD.zr === KD.c.Cursor
+     function Yp(pp, ip, cp, op, Ip) {
+       const Sp = Op.n;
+       return Dp(pp[Sp], pp[Sp + 1], pp[Sp + 2], pp[Sp + 3], pp[Sp + 4], pp[Sp + 5], ip, cp, op, Ip)
```

#### 51. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L4231-L4247` → after: `L506-L507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L506-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/242.js#L506-L507) · [Before (L4231-L4247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/242.js#L4231-L4247)

```diff
-     function gD(DD) {
-       rD.l.KG("codeCollab", {
-         type: DD.zr,
-         docKey: DD.wr,
-         version: DD.sr,
-         editorCount: DD.Kr,
-         peers: DD.rr,
-         updates: DD.Lr,
-         playerId: DD.Rr,
-         playerName: DD.Ar,
-         colour: DD.Ur,
-         anchor: DD.Ir,
-         head: DD.Br,
-         existingCursors: DD.Gr,
-         files: DD.hr,
-         engineSettings: DD.nr
- ... (1 more removed lines; see GitHub link above)
+     function Dp(pp, ip, cp, Op, op, Ip, Sp, xp, Lp, Yp) {
+       return (Sp <= pp - Yp ? 0 : 1) | (Sp >= ip + Yp ? 0 : 2) | (xp <= cp - Yp ? 0 : 4) | (xp >= Op + Yp ? 0 : 8) | (Lp <= op - Yp ? 0 : 16) | (Lp >= Ip + Yp ? 0 : 32)
```

#### 52. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L4249-L4275` → after: `L509-L519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L509-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/242.js#L509-L519) · [Before (L4249-L4275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/242.js#L4249-L4275)

```diff
-   },
-   38967: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => pD
-     });
-     class pD {
-       constructor() {
-         this.members = new Map
-       }
-       apply(DD) {
-         const zD = {
-           added: [],
-           removed: [],
-           settingChanges: []
-         };
-         for (const pD of DD.Hw) {
- ... (11 more removed lines; see GitHub link above)
+     const Ap = (() => {
+         const pp = [];
+         for (let ip = 0; ip < Op.r.length; ip++) {
+           let cp = 0;
+           for (let op = ip + 1; op <= Op.r.length; op++) {
+             const Ip = 1 << Op.r[op - 1];
+             if (cp & Ip) break;
+             cp |= Ip, pp.push({
+               start: ip,
+               end: op,
+               Bc: cp
```

#### 53. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L4288-L4309` → after: `L524-L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L524-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/242.js#L524-L529) · [Before (L4288-L4309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/242.js#L4288-L4309)

```diff
-       }
-       has(DD) {
-         return this.members.has(DD)
-       }
-       ids() {
-         return [...this.members.keys()]
-       }
-       getName(DD) {
-         var zD, wD;
-         return null !== (zD = null === (wD = this.members.get(DD)) || void 0 === wD ? void 0 : wD.name) && void 0 !== zD ? zD : void 0
-       }
-       getSettings(DD) {
-         var zD;
-         return null === (zD = this.members.get(DD)) || void 0 === zD ? void 0 : zD.settings
-       }
-       getSetting(DD, zD) {
- ... (6 more removed lines; see GitHub link above)
+       })(),
+       Pp = [];
+ 
+     function Wp(pp, ip) {
+       const cp = Op.g[ip];
+       return pp[cp + 1] - pp[cp]
```

#### 54. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L4319-L4324` → after: `L532-L566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L532-L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/242.js#L532-L566) · [Before (L4319-L4324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/242.js#L4319-L4324)

```diff
-     function sD(DD) {
-       const zD = DD.type;
-       return {
-         type: zD,
-         params: DD[zD]
-       }
+     function yp(pp, ip, cp) {
+       let op = 0;
+       for (let Sp = 0; Sp < Op.j; Sp++) Wp(pp, Sp) > 0 && (op |= 1 << Sp);
+       if (0 === (ip &= op)) return 0;
+       if (ip === op) return cp[0] = 0, cp[1] = pp[Op.f], 1;
+       let Ip = null,
+         xp = 1 / 0;
+       for (const Yp of function(pp) {
+           let ip = Pp[pp];
+           if (ip) return ip;
+           const cp = new Map,
+             Op = (pp, ip) => {
+               const Op = 4 * pp + ip.length / 2;
+               cp.has(Op) || cp.set(Op, {
+                 Bc: pp,
+                 windows: ip
+ ... (19 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/243.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/243.js` (106 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9)

#### 1. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L2)

```diff
- export const ids = [243];
+ export const ids = [243, 244];
```

#### 2. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L4)

```diff
-   38477: (DD, zD, wD) => {
+   40445: (pp, ip, cp) => {
```

#### 3. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L6-L15628` → after: `L6-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L6-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L6-L21) · [Before (L6-L15628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L6-L15628)

```diff
-       c: () => rD
-     });
-     var pD = wD(38486);
-     const sD = [0, 0, 0];
-     class KD {
-       constructor(DD) {
-         let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : sD;
-         this.pool = DD, this.origin = zD, this.count = 0, this.free = []
-       }
-       take() {
-         var DD;
-         const zD = null !== (DD = this.free.pop()) && void 0 !== DD ? DD : this.count++;
-         return zD >= this.pool.bA && this.pool.grow(Math.max(2 * this.pool.bA, zD + 1)), this.hide(zD), zD
-       }
-       release(DD) {
-         this.hide(DD), this.free.push(DD)
- ... (15607 more removed lines; see GitHub link above)
+       b: () => Dp,
+       d: () => Pp
+     });
+     var Op = cp(40203),
+       op = cp(40210),
+       Ip = cp(37320),
+       Sp = cp(37487),
+       xp = cp(40451),
+       Lp = cp(40415),
+       Yp = cp(37368);
+     let Dp = (() => {
+         var pp;
+         let ip, cp, Lp = xp.d,
+           Yp = [],
+           Dp = [],
+           Ap = [],
```

#### 4. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L15630-L15648` → after: `L23-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L23-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L23-L25) · [Before (L15630-L15648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L15630-L15648)

```diff
-         for (const pD of DD) {
-           const [DD, sD, KD] = pD.focus;
-           zD.push({
-             x: DD,
-             y: sD - 1,
-             z: KD,
-             h: 2,
-             faces: oG
-           });
-           for (let zD = 0; zD < 4; zD++) {
-             if (!pD.live[zD]) continue;
-             const [DD, sD, KD] = hp(pD.focus, zD, Lp.LASER_D), [rD, , LD] = Gp[zD], cD = oG.filter((DD => DD[0] !== rD || DD[2] !== LD || 0 !== DD[1]));
-             wD.push({
-               x: DD,
-               y: sD,
-               z: KD,
- ... (3 more removed lines; see GitHub link above)
+         return pp = class extends Lp {
+           constructor(pp, ip, cp, op) {
+             super(pp, cp, op), this.groundColor = (0, Op.l)(this, Yp, new Sp.d(0, 0, 0)), this.direction = ((0, Op.l)(this, Dp), (0, Op.l)(this, Ap, void 0)), (0, Op.l)(this, Pp), this.direction = ip || Ip.o.Up()
```

#### 5. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L15650-L15689` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L27-L28) · [Before (L15650-L15689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L15650-L15689)

```diff
-         }
-         this.green.setSources(zD), this.pink.setSources(wD)
-       }
-       onAfterRender(DD) {
-         const zD = performance.now(),
-           wD = 0 === this.lastMs ? 0 : Math.min(zD - this.lastMs, 250) / 1e3;
-         if (this.lastMs = zD, 0 === this.colliders.length || !DD.particlesEnabled()) return;
-         const pD = DD.getCameraPosition();
-         this.green.DU(DD, wD, pD), this.pink.DU(DD, wD, pD)
-       }
-       dispose() {
-         this.green.dispose(), this.pink.dispose(), this.colliders = []
-       }
-     }
-     const uG = 1.04,
-       vG = mG([1, 120 / 255, 220 / 255]),
- ... (24 more removed lines; see GitHub link above)
+           _buildUniformLayout() {
+             this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniform … [truncated]
```

#### 6. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L15691-L15792` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L30-L31) · [Before (L15691-L15792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L15691-L15792)

```diff
-           of this.store.colliders()) wD.on && wD.live.some(Boolean) && (this.addBeams(DD, wD), zD.push(wD)), wD.blockers.length > 0 && this.addMarkers(DD, wD);
-         this.glow.setSources(zD)
-       }
-       addBeams(DD, zD) {
-         const [wD, pD, sD] = zD.focus, KD = Dg - .25, rD = (.25 + Dg) / 2;
-         for (let LD = 0; LD < 4; LD++) {
-           if (!zD.live[LD]) continue;
-           const [cD, , gD] = Gp[LD], RD = 0 !== cD, AD = {
-             positions: [],
-             indices: []
-           };
-           kG(AD, 0, 0, 0, RD ? KD : .2, .2, RD ? .2 : KD);
-           const UD = [wD + .5 + cD * rD, pD + .5, sD + .5 + gD * rD],
-             fD = DD.createGameMesh(AD, vG, UD);
-           this.meshes.push(fD), this.beams.push({
-             mesh: fD,
- ... (86 more removed lines; see GitHub link above)
+           getClassName() {
+             return "HemisphericLight"
```

#### 7. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L15794-L15836` → after: `L33-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L33-L34) · [Before (L15794-L15836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L15794-L15836)

```diff
-           of this.store.colliders()) {
-           KD.focus.every(((DD, wD) => Math.abs(DD + .5 - zD[wD]) <= Lp.GHOST_REACH)) && pD.push(qc(KD, wD))
-         }
-         const sD = sh(pD);
-         sD !== this.shownKey && this.show(DD, sD, pD)
-       }
-       preview(DD, zD) {
-         const wD = DD.getTargetedBlock(),
-           pD = wD ? [wD.sG[0], wD.sG[1], wD.sG[2]] : null,
-           sD = null !== pD && pD.every(((DD, wD) => Math.abs(DD + .5 - zD[wD]) <= 8)),
-           KD = this.store.site(),
-           rD = sD && KD ? function(DD, zD, wD) {
-             const pD = Bp(DD);
-             if (!pD.every(zD)) return null;
-             const sD = Op(DD, wD);
-             return {
- ... (27 more removed lines; see GitHub link above)
+           setDirectionToTarget(pp) {
+             return this.direction = Ip.o.Normalize(pp.subtract(Ip.o.Zero())), this.direction
```

#### 8. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L15838-L15846` → after: `L36-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L36-L37) · [Before (L15838-L15846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L15838-L15846)

```diff
-           of wD) {
-           for (const [zD, wD, pD] of KD) {
-             const sD = {
-               positions: [],
-               indices: []
-             };
-             wh(sD, 0, 0, 0);
-             const KD = DD.createGameMesh(sD, mG(YG), [zD + .5, wD + .5, pD + .5]);
-             this.meshes.push(KD), this.pulses.push(KD)
+           getShadowGenerator() {
+             return null
```

#### 9. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L15848-L15854` → after: `L39-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L39-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L39-L95) · [Before (L15848-L15854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L15848-L15854)

```diff
-           rD.length > 0 && this.meshes.push(Kh(DD, rD, mG(HG))), LD.length > 0 && this.meshes.push(Kh(DD, LD, mG(qG), 1.06, .07)), cD.length > 0 && this.meshes.push(Kh(DD, cD, mG(zh)))
-         }
-       }
-       clear(DD) {
-         for (const zD of this.meshes) DD.disposeGameMesh(zD);
-         this.meshes = [], this.pulses = []
-       }
+           transferToEffect(pp, ip) {
+             const cp = Ip.o.Normalize(this.direction);
+             return this._uniformBuffer.updateFloat4("vLightData", cp.x, cp.y, cp.z, 0, ip), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), ip), this
+           }
+           transferToNodeMaterialEffect(pp, ip) {
+             const cp = Ip.o.Normalize(this.direction);
+             return pp.setFloat3(ip, cp.x, cp.y, cp.z), this
+           }
+           computeWorldMatrix() {
+             return this._worldMatrix || (this._worldMatrix = Ip.b.Identity()), this._worldMatrix
+           }
+           getTypeID() {
+             return xp.d.LIGHTTYPEID_HEMISPHERICLIGHT
+           }
+           prepareLightSpecificDefines(pp, ip) {
+             pp["HEMILIGHT" + ip] = !0
+ ... (41 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L15857-L15915` → after: `L104-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L104-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L104-L107) · [Before (L15857-L15915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L15857-L15915)

```diff
-       constructor() {
-         this.stored = new Map, this.Qg = new Map, this.pending = [], this.order = [], this.recents = [], this.seq = 0, this.silos = 0, this.readOnly = !0, this.pocket = !1, this.listeners = new Set, this.version = 0
-       }
-       apply(DD) {
-         if (!DD.baf2TermOpen) return !1;
-         DD.baf2TermReset && (this.stored.clear(), this.pending = []);
-         for (const [zD, wD] of DD.baf2TermItems) wD > 0 ? this.stored.set(zD, wD) : this.stored.delete(zD);
-         if (DD.baf2TermHeld && (this.Qg = new Map(DD.baf2TermHeld)), this.pending = this.pending.filter((zD => zD.seq > DD.baf2TermAcked)), this.silos = DD.baf2TermSilos, this.readOnly = DD.baf2TermReadOnly, this.pocket = !0 === DD.baf2TermPocket, DD.baf2TermReset) this.resort();
-         else {
-           const DD = new Set(this.order);
-           for (const zD of this.stored.keys()) DD.has(zD) || this.order.push(zD)
-         }
-         return this.changed(), !0
-       }
-       resort() {
-         this.order = [...this.stored.keys()].sort(((DD, zD) => this.amount(zD) - this.amount(DD) || DD.localeCompare(zD))), this.changed()
- ... (43 more removed lines; see GitHub link above)
+       static GetPlanes(pp) {
+         const ip = [];
+         for (let cp = 0; cp < 6; cp++) ip.push(new Op.e(0, 0, 0, 0));
+         return op.GetPlanesToRef(pp, ip), ip
```

#### 11. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L15917-L15918` → after: `L109-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L109-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L109-L111) · [Before (L15917-L15918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L15917-L15918)

```diff
-       items() {
-         return this.order.filter((DD => this.amount(DD) > 0))
+       static GetNearPlaneToRef(pp, ip) {
+         const cp = pp.m;
+         ip.normal.x = cp[3] + cp[2], ip.normal.y = cp[7] + cp[6], ip.normal.z = cp[11] + cp[10], ip.d = cp[15] + cp[14], ip.normalize()
```

#### 12. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L15920-L15921` → after: `L113-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L113-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L113-L115) · [Before (L15920-L15921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L15920-L15921)

```diff
-       recent() {
-         return this.recents.filter((DD => this.amount(DD) > 0))
+       static GetFarPlaneToRef(pp, ip) {
+         const cp = pp.m;
+         ip.normal.x = cp[3] - cp[2], ip.normal.y = cp[7] - cp[6], ip.normal.z = cp[11] - cp[10], ip.d = cp[15] - cp[14], ip.normalize()
```

#### 13. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L15923-L15924` → after: `L117-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L117-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L117-L119) · [Before (L15923-L15924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L15923-L15924)

```diff
-       siloCount() {
-         return this.silos
+       static GetLeftPlaneToRef(pp, ip) {
+         const cp = pp.m;
+         ip.normal.x = cp[3] + cp[0], ip.normal.y = cp[7] + cp[4], ip.normal.z = cp[11] + cp[8], ip.d = cp[15] + cp[12], ip.normalize()
```

#### 14. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L15926-L15927` → after: `L121-L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L121-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L121-L123) · [Before (L15926-L15927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L15926-L15927)

```diff
-       isReadOnly() {
-         return this.readOnly
+       static GetRightPlaneToRef(pp, ip) {
+         const cp = pp.m;
+         ip.normal.x = cp[3] - cp[0], ip.normal.y = cp[7] - cp[4], ip.normal.z = cp[11] - cp[8], ip.d = cp[15] - cp[12], ip.normalize()
```

#### 15. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L15929-L15930` → after: `L125-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L125-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L125-L127) · [Before (L15929-L15930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L15929-L15930)

```diff
-       isPocket() {
-         return this.pocket
+       static GetTopPlaneToRef(pp, ip) {
+         const cp = pp.m;
+         ip.normal.x = cp[3] - cp[1], ip.normal.y = cp[7] - cp[5], ip.normal.z = cp[11] - cp[9], ip.d = cp[15] - cp[13], ip.normalize()
```

#### 16. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L15932-L15935` → after: `L129-L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L129-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L129-L131) · [Before (L15932-L15935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L15932-L15935)

```diff
-       subscribe(DD) {
-         return this.listeners.add(DD), () => {
-           this.listeners.delete(DD)
-         }
+       static GetBottomPlaneToRef(pp, ip) {
+         const cp = pp.m;
+         ip.normal.x = cp[3] + cp[1], ip.normal.y = cp[7] + cp[5], ip.normal.z = cp[11] + cp[9], ip.d = cp[15] + cp[13], ip.normalize()
```

#### 17. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L15937-L15939` → after: `L133-L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L133-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L133-L134) · [Before (L15937-L15939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L15937-L15939)

```diff
-       changed() {
-         this.version++;
-         for (const DD of this.listeners) DD()
+       static GetPlanesToRef(pp, ip) {
+         op.GetNearPlaneToRef(pp, ip[0]), op.GetFarPlaneToRef(pp, ip[1]), op.GetLeftPlaneToRef(pp, ip[2]), op.GetRightPlaneToRef(pp, ip[3]), op.GetTopPlaneToRef(pp, ip[4]), op.GetBottomPlaneToRef(pp, ip[5])
```

#### 18. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L15941-L15971` → after: `L136-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L136-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L136-L139) · [Before (L15941-L15971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L15941-L15971)

```diff
-     }
-     var ch = wD(38409);
-     const gh = {
-       isBlock: DD => void 0 !== bD.l[DD],
-       harvestType: DD => {
-         var zD;
-         return null === (zD = bD.l[DD]) || void 0 === zD ? void 0 : zD.harvestType
-       },
-       harvestLevel: DD => {
-         var zD;
-         return null === (zD = bD.l[DD]) || void 0 === zD ? void 0 : zD.harvestLevel
-       },
-       dropsNothing: DD => {
-         var zD;
-         return null === (null === (zD = bD.l[DD]) || void 0 === zD ? void 0 : zD.drops)
-       },
- ... (15 more removed lines; see GitHub link above)
+       static IsPointInFrustum(pp, ip) {
+         for (let cp = 0; cp < 6; cp++)
+           if (ip[cp].dotCoordinate(pp) < 0) return !1;
+         return !0
```

#### 19. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L16018-L16041` → after: `L142-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L142-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L142-L147) · [Before (L16018-L16041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L16018-L16041)

```diff
-     const Bh = {
-         mode: null,
-         detail: null,
-         next: null,
-         nextState: null
-       },
-       Gh = [],
-       hh = {
-         info: null,
-         visible: !1,
-         tool: null,
-         live: null,
-         wrench: Bh,
-         plan: null,
-         atomic: Gh
-       },
- ... (8 more removed lines; see GitHub link above)
+   },
+   37989: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => op
+     });
+     var Op = cp(37320);
```

#### 20. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L16043-L16158` → after: `L149-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L149-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L149-L150) · [Before (L16043-L16158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L16043-L16158)

```diff
-       constructor() {
-         let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
-           zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => null,
-           wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => null;
-         this.live = DD, this.planAt = zD, this.tierOf = wD, this.fR = 0, this.missesMaker = !1, this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.afloatByRoot = new Map, this.besideMakerById = new Map, this.Qg = null, this.express = !1, this.crouching = !1, this … [truncated]
-       }
-       onAfterRender(DD, zD, wD) {
-         var pD, sD, KD;
-         let rD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
-         const LD = null !== (pD = null === (sD = DD.zwD(zD)) || void 0 === sD ? void 0 : sD.name) && void 0 !== pD ? pD : null,
-           cD = DD.isPlayerCrouching(zD),
-           gD = 0 === wD ? null : this.resolve(DD, wD),
-           RD = null !== gD && null !== rD && Mh.has(gD.rootName) && function(DD, zD) {
-             return Oh.some((wD => {
-               let [pD, sD] = wD;
-               const KD = DD.getBlockId(zD[0] + pD, zD[1], zD[2] + sD);
- ... (100 more removed lines; see GitHub link above)
+       constructor(pp, ip, cp, op) {
+         this.normal = new Op.o(pp, ip, cp), this.d = op
```

#### 21. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L16160-L16166` → after: `L152-L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L152-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L152-L153) · [Before (L16160-L16166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L16160-L16166)

```diff
-       get() {
-         return this.snapshot
-       }
-       subscribe(DD) {
-         return this.listeners.add(DD), () => {
-           this.listeners.delete(DD)
-         }
+       BOp() {
+         return [this.normal.x, this.normal.y, this.normal.z, this.d]
```

#### 22. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L16168-L16169` → after: `L155-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L155-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L155-L156) · [Before (L16168-L16169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L16168-L16169)

```diff
-       dispose() {
-         this.listeners.clear(), this.byRootId.clear(), this.besideMakerById.clear(), this.missesMaker = !1, this.afloatByRoot.clear(), this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.rowsByKey.clear(), this.snapshot = hh, this.fR = 0, this.Qg = null, this.expr … [truncated]
+       clone() {
+         return new op(this.normal.x, this.normal.y, this.normal.z, this.d)
```

#### 23. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L16171-L16185` → after: `L158-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L158-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L158-L159) · [Before (L16171-L16185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L16171-L16185)

```diff
-       readAfloat(DD, zD, wD) {
-         if (null === wD || 0 === zD || !LD() || !Ih(this.resolve(DD, zD).rootName)) return !1;
-         const pD = `${wD[0]},${wD[1]},${wD[2]},${zD}`,
-           sD = performance.now();
-         return pD === this.afloatKey && sD - this.afloatAt < Eh ? this.afloat : (this.afloatKey = pD, this.afloatAt = sD, function(DD, zD) {
-           for (const [wD, pD, sD] of fh) {
-             const KD = zD(DD[0] + wD, DD[1] + pD, DD[2] + sD);
-             if (void 0 === KD || null !== KD && !Ih(KD)) return !1
-           }
-           return !0
-         }(wD, ((zD, wD, pD) => function(DD, zD, wD, pD) {
-           if (!DD.isBlockInLoadedChunk(zD, wD, pD)) return;
-           const sD = DD.getBlockId(zD, wD, pD);
-           return 0 === sD ? null : DD.getMetaInfo(sD).rootName
-         }(DD, zD, wD, pD))))
+       getClassName() {
+         return "Plane"
```

#### 24. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L16187-L16192` → after: `L161-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L161-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L161-L163) · [Before (L16187-L16192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L16187-L16192)

```diff
-       liveMoved(DD) {
-         var zD;
-         const {
-           livePos: wD
-         } = this;
-         return null === DD || DD[0] !== wD[0] || DD[1] !== wD[1] || DD[2] !== wD[2] || (null === (zD = this.live) || void 0 === zD ? void 0 : zD.version()) !== this.liveVersion
+       getHashCode() {
+         let pp = this.normal.getHashCode();
+         return pp = 397 * pp ^ this.d, pp
```

#### 25. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L16194-L16201` → after: `L165-L234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L165-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L165-L234) · [Before (L16194-L16201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L16194-L16201)

```diff
-       updatePlan(DD) {
-         const zD = null === DD ? "" : DD.join(","),
-           wD = performance.now();
-         if (zD === this.planPos && wD - this.planMs < 250) return !1;
-         this.planPos = zD, this.planMs = wD;
-         const pD = null === DD ? null : this.planAt([DD[0], DD[1], DD[2]]),
-           sD = !qI(pD, this.plan);
-         return this.plan = pD, sD
+       normalize() {
+         const pp = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
+         let ip = 0;
+         return 0 !== pp && (ip = 1 / pp), this.normal.x *= ip, this.normal.y *= ip, this.normal.z *= ip, this.d *= ip, this
+       }
+       transform(pp) {
+         const ip = op._TmpMatrix;
+         pp.invertToRef(ip);
+         const cp = ip.m,
+           Op = this.normal.x,
+           Ip = this.normal.y,
+           Sp = this.normal.z,
+           xp = this.d,
+           Lp = Op * cp[0] + Ip * cp[1] + Sp * cp[2] + xp * cp[3],
+           Yp = Op * cp[4] + Ip * cp[5] + Sp * cp[6] + xp * cp[7],
+           Dp = Op * cp[8] + Ip * cp[9] + Sp * cp[10] + xp * cp[11],
+ ... (54 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L16203-L16217` → after: `L236-L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L236-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L236-L237) · [Before (L16203-L16217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L16203-L16217)

```diff
-       besideMaker(DD, zD, wD) {
-         let {
-           info: pD
-         } = DD;
-         if (null === pD) return null;
-         let sD = this.besideMakerById.get(zD);
-         if (void 0 === sD) {
-           const DD = "cryo" === wD ? "lookPipeMixerSide" : "lookPipeCondenserSide";
-           sD = {
-             ...pD,
-             detail: `${nh}${DD}`,
-             detailItem: null
-           }, this.besideMakerById.set(zD, sD)
-         }
-         return sD
+       toGlobal(pp, ip) {
+         return new Op(this.x * pp, this.y * ip, this.width * pp, this.height * ip)
```

#### 27. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L16219-L16230` → after: `L239-L240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L239-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L239-L240) · [Before (L16219-L16230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L16219-L16230)

```diff
-       hanging(DD) {
-         let {
-           info: zD,
-           rootName: wD
-         } = DD;
-         if (null === zD) return null;
-         let pD = this.afloatByRoot.get(wD);
-         return void 0 === pD && (pD = {
-           ...zD,
-           detail: `${nh}lookOreAfloat`,
-           detailItem: null
-         }, this.afloatByRoot.set(wD, pD)), pD
+       toGlobalToRef(pp, ip, cp) {
+         return cp.x = this.x * pp, cp.y = this.y * ip, cp.width = this.width * pp, cp.height = this.height * ip, this
```

#### 28. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L16232-L16260` → after: `L242-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L242-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L242-L243) · [Before (L16232-L16260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L16232-L16260)

```diff
-       rowsOf(DD, zD) {
-         if (null === zD) return Gh;
-         const wD = `${DD}|${zD}`;
-         let pD = this.rowsByKey.get(wD);
-         if (void 0 === pD) {
-           const sD = function(DD, zD) {
-             var wD;
-             if (!(DD in Sz)) return [];
-             const pD = null !== (wD = iz[DD]) && void 0 !== wD ? wD : [],
-               sD = new Map;
-             for (const rD of aK(DD, zD))
-               if ((pD.includes(rD) || oK(rD.output) && mK(rD.output) > FD(DD)) && mK(rD.output) <= zD) {
-                 var KD;
-                 const DD = null !== (KD = sD.get(rD.output)) && void 0 !== KD ? KD : [];
-                 DD.push(rD.input), sD.set(rD.output, DD)
-               } return vK([...sD], (DD => {
- ... (13 more removed lines; see GitHub link above)
+       clone() {
+         return new Op(this.x, this.y, this.width, this.height)
```

#### 29. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L16262-L16279` → after: `L245-L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L245-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L245-L285) · [Before (L16262-L16279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L16262-L16279)

```diff
-       resolve(DD, zD) {
-         const {
-           rootId: wD,
-           rootName: pD
-         } = DD.getMetaInfo(zD), sD = (0, Bw.l)(pD) ? zD : wD;
-         let KD = this.byRootId.get(sD);
-         const rD = LD();
-         if (void 0 === KD || KD.nuclear !== rD) {
-           var cD;
-           const wD = function(DD) {
-             return Wp(gh, DD, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DD)
-           }(pD, DD.blockIdToBlockName(zD));
-           KD = {
-             info: wD,
-             rootName: pD,
-             live: null !== wD && !0 === (null === (cD = this.live) || void 0 === cD ? void 0 : cD.handles(pD)),
- ... (2 more removed lines; see GitHub link above)
+     }
+   },
+   38900: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Ip
+     });
+     var Op = cp(38905);
+     const op = (pp, ip, cp) => pp ? pp.getClassName && "Mesh" === pp.getClassName() ? null : !pp.getClassName || "SubMesh" !== pp.getClassName() && "PhysicsBody" !== pp.getClassName() ? pp.clone ? pp.clone() : Array.isArray(pp) ? pp.slice() : cp && "object" === typeof pp ? {
+       ...pp
+     } : null : pp.clone(ip) : null;
+     class Ip {
+       static DeepCopy(pp, ip, cp, Ip) {
+         let Sp = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         const xp = function(pp) {
+           const ip = [];
+           do {
+ ... (25 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L16284-L16402` → after: `L289-L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L289-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L289-L295) · [Before (L16284-L16402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L16284-L16402)

```diff
-     const Eh = 500;
-     const Qh = (0, pD.memo)((function(DD) {
-       var zD, wD;
-       let {
-         store: sD
-       } = DD;
-       const {
-         t: KD
-       } = (0, Ts.E)(), [rD, LD] = (0, pD.useState)((() => sD.get()));
-       (0, pD.useEffect)((() => (LD(sD.get()), sD.subscribe((() => {
-         LD(sD.get())
-       })))), [sD]);
-       const {
-         openInGameMenuName: cD,
-         openEverythingMenuName: gD,
-         isTouchScreen: RD
- ... (103 more removed lines; see GitHub link above)
+   },
+   38124: (pp, ip, cp) => {
+     function Op() {
+       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (pp => {
+         const ip = 16 * Math.random() | 0;
+         return ("x" === pp ? ip : 3 & ip | 8).toString(16)
+       }))
```

#### 31. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L16404-L16406` → after: `L297-L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L297-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L297-L304) · [Before (L16404-L16406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L16404-L16406)

```diff
-     const jh = [.5, .5, .5],
-       dh = [.2, .8, .3],
-       Sh = [.45, 1, .5];
+     cp.d(ip, {
+       e: () => Op
+     })
+   },
+   38905: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Op
+     });
```

#### 32. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L16408-L16412` → after: `L306-L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L306-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L306-L350) · [Before (L16408-L16412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L16408-L16412)

```diff
-       constructor() {
-         this.offsetsIndexById = new Uint8Array(65536), this.indexed = !1, this.offsetsList = [], this.hits = [], this.chunks = new Map, this.cellChunks = new Map, this.lastCheckMs = -1 / 0, this.checks = 0, this.scanFrom = 0, this.shownKey = "", this.meshes = []
-       }
-       index(DD) {
-         this.indexed = !0;
+       static _CheckLimit(pp, ip) {
+         let cp = Op._LogLimitOutputs[pp];
+         return cp ? cp.current++ : (cp = {
+           limit: ip,
+           current: 1
+         }, Op._LogLimitOutputs[pp] = cp), cp.current <= cp.limit
+       }
+       static _GenerateLimitMessage(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         const cp = Op._LogLimitOutputs[pp];
+         if (!cp || !Op.MessageLimitReached) return;
+         const op = this._Levels[ip];
+         cp.current === cp.limit && Op[op.name](Op.MessageLimitReached.replace(/%LIMIT%/g, "" + cp.limit).replace(/%TYPE%/g, op.name ?? ""))
+       }
+       static _AddLogEntry(pp) {
+         Op._LogCache = pp + Op._LogCache, Op.OnNewCacheEntry && Op.OnNewCacheEntry(pp)
+ ... (29 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L16414-L16417` → after: `L352-L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L352-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L352-L354) · [Before (L16414-L16417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L16414-L16417)

```diff
-           for (const wD of Ch(zD)) {
-             const zD = DD.blockNameToBlockId(wD, !0),
-               pD = bh(wD);
-             null !== zD && pD.length > 0 && (this.offsetsList.push(pD), this.offsetsIndexById[zD] = this.offsetsList.length)
+           if ((pp & cp) === cp) {
+             const pp = this._Levels[cp];
+             Op[pp.name] = Op._LogEnabled.bind(Op, cp)
```

#### 34. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L16420-L16458` → after: `L357-L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L357-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L357-L393) · [Before (L16420-L16458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L16420-L16458)

```diff
-       onAfterRender(DD, zD) {
-         this.indexed || this.index(DD);
-         const wD = performance.now();
-         if (wD - this.lastCheckMs < 100) return;
-         this.lastCheckMs = wD, this.checks++;
-         const pD = OI.f.CI,
-           [sD, KD, rD] = xh(zD, pD);
-         let LD = !1;
-         const cD = [];
-         let gD = 0;
-         for (let RD = sD - 2; RD <= sD + 2; RD++)
-           for (let zD = KD - 1; zD <= KD + 1; zD++)
-             for (let sD = rD - 2; sD <= rD + 2; sD++) {
-               const KD = gD++,
-                 rD = Th(RD, zD, sD),
-                 AD = DD.getChunkVersion(RD, zD, sD);
- ... (23 more removed lines; see GitHub link above)
+     }
+     Op.NoneLogLevel = 0, Op.MessageLogLevel = 1, Op.WarningLogLevel = 2, Op.ErrorLogLevel = 4, Op.AllLogLevel = 7, Op.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Op._LogCache = "", Op._LogLimitOutputs = {}, Op._Levels =  … [truncated]
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
+     }], Op.errorsCount = 0, Op.Log = Op._LogEnabled.bind(Op, Op.MessageLogLevel), Op.Warn = Op._LogEnabled.bind(Op, Op.WarningLogLevel), Op.Error = Op._LogEnabled.bind(Op, Op.ErrorLogLevel)
+   },
+   61372: (pp, ip, cp) => {
+ ... (21 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L16460-L16479` → after: `L395-L396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L395-L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L395-L396) · [Before (L16460-L16479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L16460-L16479)

```diff
-       scanDue(DD, zD) {
-         const wD = Math.max(zD.findIndex((DD => {
-           let {
-             slot: zD
-           } = DD;
-           return zD >= this.scanFrom
-         })), 0);
-         let pD = 96;
-         for (let sD = 0; sD < zD.length; sD++) {
-           const {
-             slot: KD,
-             entry: rD,
-             origin: LD
-           } = zD[(wD + sD) % zD.length];
-           if (pD -= this.scan(DD, rD, LD), pD <= 0) {
-             this.scanFrom = KD + 1;
- ... (4 more removed lines; see GitHub link above)
+       _gatherImports(pp, ip) {
+         pp ? (this._webGPUReady = !0, ip.push(Promise.all([cp.e(379).then((() => cp(61601))), cp.e(380).then((() => cp(61604)))]))) : ip.push(Promise.all([cp.e(381).then((() => cp(61612))), cp.e(382).then((() => cp(61618)))]))
```

#### 36. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L16481-L16506` → after: `L398-L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L398-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L398-L412) · [Before (L16481-L16506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L16481-L16506)

```diff
-       scan(DD, zD, wD) {
-         let [pD, sD, KD] = wD;
-         const rD = OI.f.CI,
-           LD = this.hits;
-         LD.length = 0;
-         const cD = DD.scanBlocks(pD, sD, KD, pD + rD, sD + rD, KD + rD, this.offsetsIndexById, LD),
-           gD = [];
-         for (let RD = 0; RD < LD.length; RD += 4) gD.push({
-           pos: [LD[RD], LD[RD + 1], LD[RD + 2]],
-           offsets: this.offsetsList[this.offsetsIndexById[LD[RD + 3]] - 1]
-         });
-         return zD.machines = gD, zD.cellChunks = function(DD, zD) {
-           const wD = new Set,
-             pD = [];
-           for (const {
-               pos: sD,
- ... (10 more removed lines; see GitHub link above)
+       constructor(pp) {
+         const ip = {
+           ...arguments.length > 2 ? arguments[2] : void 0,
+           name: pp,
+           engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || Lp.e.LastCreatedEngine,
+           useShaderStore: !0,
+           useAsPostProcess: !0,
+           vertexShader: Dp.VertexUrl,
+           fragmentShader: Dp.FragmentUrl,
+           uniforms: Dp.Uniforms
+         };
+         super({
+           ...ip,
+           defines: Dp._GetDefines(ip.engine)
+         }), this.texelSize = new Yp.l(0, 0)
```

#### 37. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L16508-L16515` → after: `L414-L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L414-L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L414-L416) · [Before (L16508-L16515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L16508-L16515)

```diff
-       watchCellChunk(DD, zD, wD, pD) {
-         const sD = Th(zD, wD, pD),
-           KD = DD.getChunkVersion(zD, wD, pD),
-           rD = this.cellChunks.get(sD);
-         return null === KD ? this.cellChunks.delete(sD) : (null === rD || void 0 === rD ? void 0 : rD.version) === KD ? (rD.seenAt = this.checks, !1) : (this.cellChunks.set(sD, {
-           version: KD,
-           seenAt: this.checks
-         }), !0)
+       bind() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         super.bind(pp), this._drawWrapper.effect.setFloat2("texelSize", this.texelSize.x, this.texelSize.y)
```

#### 38. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L16517-L16536` → after: `L418-L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L418-L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L418-L422) · [Before (L16517-L16536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L16517-L16536)

```diff
-       refresh(DD) {
-         const zD = function(DD, zD) {
-             const wD = new Set,
-               pD = [];
-             for (const {
-                 pos: sD,
-                 offsets: KD
-               }
-               of DD)
-               for (const [DD, rD, LD] of KD) {
-                 const KD = sD[0] + DD,
-                   cD = sD[1] + rD,
-                   gD = sD[2] + LD,
-                   RD = `${KD},${cD},${gD}`;
-                 wD.has(RD) || (wD.add(RD), zD(KD, cD, gD) && pD.push([KD, cD, gD]))
-               }
- ... (4 more removed lines; see GitHub link above)
+     }
+     Dp.VertexUrl = "fxaa", Dp.FragmentUrl = "fxaa", Dp.Uniforms = ["texelSize"];
+     class Ap extends Ip.c {
+       getClassName() {
+         return "FxaaPostProcess"
```

#### 39. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L16538-L16549` → after: `L424-L445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L424-L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L424-L445) · [Before (L16538-L16549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L16538-L16549)

```diff
-       build(DD, zD, wD) {
-         const pD = zD[0],
-           sD = [],
-           KD = [];
-         for (const [rD, LD, cD] of zD)(0, Xh.d)(sD, KD, [rD - pD[0] + .5, LD - pD[1] + .5, cD - pD[2] + .5], jh, wD);
-         return DD.createGameMesh({
-           positions: sD,
-           indices: KD
-         }, {
-           rgb: wD ? Sh : dh,
-           alpha: .4
-         }, pD)
+       constructor(pp, ip) {
+         let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
+           op = arguments.length > 3 ? arguments[3] : void 0,
+           Ip = arguments.length > 4 ? arguments[4] : void 0,
+           Sp = arguments.length > 5 ? arguments[5] : void 0,
+           xp = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
+         const Lp = {
+           uniforms: Dp.Uniforms,
+           size: "number" === typeof ip ? ip : void 0,
+           camera: cp,
+           samplingMode: op || Op.d.BILINEAR_SAMPLINGMODE,
+           engine: Ip,
+           reusable: Sp,
+           textureType: xp,
+           ...ip
+         };
+ ... (6 more added lines; see GitHub link above)
```

#### 40. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L16551-L16553` → after: `L447-L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L447-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L447-L448) · [Before (L16551-L16553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L16551-L16553)

```diff
-       clearMeshes(DD) {
-         for (const zD of this.meshes) DD.disposeGameMesh(zD);
-         this.meshes = []
+       static _Parse(pp, ip, cp, Op) {
+         return Sp.c.Parse((() => new Ap(pp.name, pp.options, ip, pp.renderTargetSamplingMode, cp.gy(), pp.reusable)), pp, cp, Op)
```

#### 41. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L16556-L16576` → after: `L451-L456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L451-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L451-L456) · [Before (L16556-L16576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L16556-L16576)

```diff
-     const lh = 1 / .6,
-       Wh = 200,
-       Nh = {
-         colours: [
-           [127, 233, 255],
-           [180, 140, 255]
-         ],
-         life: [.12, .22],
-         size: [.12, .2],
-         perBlock: 3
-       },
-       Zh = {
-         colours: [
-           [120, 255, 150],
-           [200, 255, 120]
-         ],
- ... (5 more removed lines; see GitHub link above)
+     var Pp = cp(38905),
+       Wp = cp(40304),
+       yp = cp(42102),
+       Up = cp(42080),
+       wp = cp(40107);
+     const vp = 0;
```

#### 42. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L16578-L16580` → after: `L458-L459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L458-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L458-L459) · [Before (L16578-L16580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L16578-L16580)

```diff
-       constructor() {
-         let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Nh;
-         this.style = DD, this.particles = null, this.points = new Float32Array(800), this.budget = Wh, this.lastMs = 0
+       constructor(pp, ip, cp) {
+         this.name = pp, this._parentTask = ip, this._context = cp, this.disabled = !1
```

#### 43. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L16582-L16583` → after: `L461-L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L461-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/243.js#L461-L462) · [Before (L16582-L16583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/243.js#L16582-L16583)

```diff
-       static blade() {
-         return new kh(Zh)
+       setInitializeFunc(pp) {
+         this._initFunc = pp
```
