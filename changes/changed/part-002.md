# Changed — Bundle Modifications Report (Part 002 / 056)

- **Updated at**: `2026-11-25T18:33 JST`
- **Part**: `2 / 56` (**289** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 001](part-001.md) · [Part 003 →](part-003.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/101.js` (sn3sfj.2522680a → 8104he.3820eae0 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/101.js` (58 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e)

#### 32. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L5024-L5029` → after: `L496-L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L496-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/101.js#L496-L498) · [Before (L5024-L5029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/101.js#L5024-L5029)

```diff
-         })))
-       }), [Sp, xp]);
-       const Fp = Wp.selectedCategoryKey,
-         gp = (pp, ip) => {
-           var cp, Op;
-           return (isNaN(ip) || (0, Dc.G)(pp.currency) || tI(Wp.currencyAmounts, pp.currency) && ip <= Wp.currencyAmounts[pp.currency].amount) && (null === (cp = pp.canBuy) || void 0 === cp || cp) && !(null !== (Op = pp.hidden) && void 0 !== Op && Op)
+           for (var wQ = 0; wQ < WQ._sounds.length; wQ++)
+             if (!WQ._sounds[wQ].lD) return !0;
+           return !1
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L5031-L5065` → after: `L500-L540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L500-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/101.js#L500-L540) · [Before (L5031-L5065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/101.js#L5031-L5065)

```diff
-         Gp = (pp, ip) => {
-           var cp, Op, op;
-           const Sp = vI(Fp, pp),
-             xp = Wp.shopInfo[Fp].items[pp],
-             Dp = Wp.userInputsPerItem[Sp],
-             Pp = (0, gO.b)(xp, Dp),
-             yp = gp(xp, Pp),
-             Up = xp.enchant,
-             wp = Up ? (0, fp.sb)(null !== (cp = xp.customTitle) && void 0 !== cp ? cp : pp, {
-               colour: fp.lb[Up.tier]
-             }) : null !== (Op = xp.customTitle) && void 0 !== Op ? Op : pp,
-             vp = ip => {
-               const cp = null !== ip && void 0 !== ip ? ip : Dp,
-                 Op = void 0 !== ip ? (0, gO.b)(xp, ip) : Pp;
-               gp(xp, Op) && null !== cp && bp(pp, xp, ip);
-               let op = Wp.redDotInfo;
- ... (19 more removed lines; see GitHub link above)
+         duration: function(QQ) {
+           var WQ = this,
+             XQ = WQ._duration,
+             wQ = WQ._soundById(QQ);
+           return wQ && (XQ = WQ._sprite[wQ._sprite][1] / 1e3), XQ
+         },
+         state: function() {
+           return this._state
+         },
+         unload: function() {
+           for (var QQ = this, WQ = QQ._sounds, XQ = 0; XQ < WQ.length; XQ++) WQ[XQ].lD || QQ.stop(WQ[XQ]._id), QQ._webAudio || (QQ._clearSound(WQ[XQ]._node), WQ[XQ]._node.removeEventListener("error", WQ[XQ]._errorFn, !1), WQ[XQ]._node.removeEventListener(TQ._canPlayEvent, WQ[XQ]. … [truncated]
+           var wQ = TQ._howls.indexOf(QQ);
+           wQ >= 0 && TQ._howls.splice(wQ, 1);
+           var qQ = !0;
+           for (XQ = 0; XQ < TQ._howls.length; XQ++)
+             if (TQ._howls[XQ]._src === QQ._src || QQ._src.indexOf(TQ._howls[XQ]._src) >= 0) {
+ ... (25 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L5067-L5287` → after: `L542-L546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L542-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/101.js#L542-L546) · [Before (L5067-L5287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/101.js#L5067-L5287)

```diff
-               xp.userInput || vp()
-             },
-             onPointerDown: pp => {
-               Up && (Ep.current = (0, rO.s)(pp))
-             },
-             onPointerEnter: pp => {
-               Up && !(0, rO.s)(pp) && Cp(Sp)
-             },
-             onPointerLeave: pp => {
-               Up && !(0, rO.s)(pp) && Cp((pp => pp === Sp ? null : pp))
-             },
-             style: {
-               zIndex: Object.keys(Wp.shopInfo[Fp].items).length - ip
-             },
-             children: [Wp.redDotInfo.itemHasRedDot(Fp, pp) && (0, Ap.jsx)(Lp.b, {
-               top: "-6px",
- ... (205 more removed lines; see GitHub link above)
+             } else if (QQ) wQ["_on" + QQ] = [];
+             else {
+               var sQ = Object.keys(wQ);
+               for (TQ = 0; TQ < sQ.length; TQ++) 0 === sQ[TQ].indexOf("_on") && Array.isArray(wQ[sQ[TQ]]) && (wQ[sQ[TQ]] = [])
+             } return wQ
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L5289-L5301` → after: `L548-L549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L548-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/101.js#L548-L549) · [Before (L5289-L5301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/101.js#L5289-L5301)

```diff
-         children: (0, Ap.jsx)(sO.b, {
-           game: {
-             schematicId: Ip
-           }
-         })
-       });
-       var Lp, Yp;
-       if ((0, ZO.f)(op)) return (0, Ap.jsx)("div", {
-         className: "ShopBlock",
-         style: {
-           minWidth: `${cp}rem`,
-           height: "0",
-           minHeight: `${Op}rem`
+         once: function(QQ, WQ, XQ) {
+           return this.on(QQ, WQ, XQ, 1), this
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L5303-L5338` → after: `L551-L555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L551-L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/101.js#L551-L555) · [Before (L5303-L5338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/101.js#L5303-L5338)

```diff
-         children: (0, Ap.jsx)(ZO.d, {
-           itemName: op,
-           amount: null !== (Lp = ip.amount) && void 0 !== Lp ? Lp : 0,
-           amountFontSize: Op / 4 + "rem",
-           enchantmentTier: null === (Yp = ip.enchant) || void 0 === Yp ? void 0 : Yp.tier
-         })
-       });
-       const Dp = op.slice(-4);
-       return ".jpg" === Dp || ".png" === Dp ? (0, Ap.jsx)(eI, {
-         image: op,
-         minWidth: cp
-       }) : (0, Ap.jsx)(xp.d, {
-         name: op,
-         className: "SelectedItemImage",
-         style: {
-           color: Sp
- ... (20 more removed lines; see GitHub link above)
+         _emit: function(QQ, WQ, XQ) {
+           for (var wQ = this, qQ = wQ["_on" + QQ], TQ = qQ.length - 1; TQ >= 0; TQ--) qQ[TQ].id && qQ[TQ].id !== WQ && "load" !== QQ || (setTimeout(function(QQ) {
+             QQ.call(this, WQ, XQ)
+           }.bind(wQ, qQ[TQ].NI), 0), qQ[TQ].once && wQ.off(QQ, qQ[TQ].NI, qQ[TQ].id));
+           return wQ._loadQueue(QQ), wQ
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L5340-L5437` → after: `L557-L561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L557-L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/101.js#L557-L561) · [Before (L5340-L5437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/101.js#L5340-L5437)

```diff
-         src: `/textures/games/${(0,fp.Mb)(Op)}/${ip}`,
-         alt: ip,
-         draggable: !1
-       })
-     }
- 
-     function uI(pp) {
-       let {
-         item: ip,
-         cost: cp,
-         currencyAmounts: Op
-       } = pp;
-       const op = !isNaN(cp) && 0 !== cp && tI(Op, ip.currency);
-       let Ip = null;
-       return ip.buyButtonText ? Ip = ip.buyButtonText : op ? (Ip = cp, ip.sell && (Ip = -1 * cp), Ip = Ip.toString()) : 0 === cp ? Ip = "Free" : ip.isRewardedAd && (Ip = "Watch ad"), (0, Dc.G)(Ip) || " " === Ip ? null : (0, Ap.jsxs)("div", {
-         className: "BuyItemCostAndIcon",
- ... (82 more removed lines; see GitHub link above)
+         _loadQueue: function(QQ) {
+           var WQ = this;
+           if (WQ._queue.length > 0) {
+             var XQ = WQ._queue[0];
+             XQ.event === QQ && (WQ._queue.shift(), WQ._loadQueue()), QQ || XQ.action()
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L5439-L5461` → after: `L563-L583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L563-L583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/101.js#L563-L583) · [Before (L5439-L5461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/101.js#L5439-L5461)

```diff
-         })
-       }) : null
-     }
- 
-     function kI(pp) {
-       let {
-         userInput: ip,
-         currInput: cp,
-         updateInput: Op
-       } = pp;
-       const op = (0, Ni.g)("players"),
-         Ip = (0, Ni.g)("hiddenPlayerNames"),
-         Sp = (0, gO.g)(op.ids, op.localId, ip);
-       return (0, Ap.jsx)("div", {
-         className: "ShopItemUserInput ShopItemUserInputDropdown",
-         children: (0, Ap.jsx)(Qi.d, {
- ... (7 more removed lines; see GitHub link above)
+           return WQ
+         },
+         _ended: function(QQ) {
+           var WQ = this,
+             XQ = QQ._sprite;
+           if (!WQ._webAudio && QQ._node && !QQ._node.paused && !QQ._node.ended && QQ._node.currentTime < QQ._stop) return setTimeout(WQ._ended.bind(WQ, QQ), 100), WQ;
+           var wQ = !(!QQ._loop && !WQ._sprite[XQ][2]);
+           if (WQ._emit("end", QQ._id), !WQ._webAudio && wQ && WQ.stop(QQ._id, !0).play(QQ._id), WQ._webAudio && wQ) {
+             WQ._emit("play", QQ._id), QQ._seek = QQ._start || 0, QQ._rateSeek = 0, QQ._playStart = TQ.ctx.currentTime;
+             var qQ = 1e3 * (QQ._stop - QQ._start) / Math.abs(QQ._rate);
+             WQ._endTimers[QQ._id] = setTimeout(WQ._ended.bind(WQ, QQ), qQ)
+           }
+           return WQ._webAudio && !wQ && (QQ.lD = !0, QQ._ended = !0, QQ._seek = QQ._start || 0, QQ._rateSeek = 0, WQ._clearTimer(QQ._id), WQ._cleanBuffer(QQ._node), TQ._autoSuspend()), WQ._webAudio || wQ || WQ.stop(QQ._id, !0), WQ
+         },
+         _clearTimer: function(QQ) {
+           var WQ = this;
+ ... (5 more added lines; see GitHub link above)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L5463-L5469` → after: `L585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/101.js#L585) · [Before (L5463-L5469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/101.js#L5463-L5469)

```diff
-           })),
-           value: cp,
-           onChange: pp => {
-             let {
-               value: ip
-             } = pp;
-             Op(ip)
+             delete WQ._endTimers[QQ]
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L5471-L5589` → after: `L587-L616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L587-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/101.js#L587-L616) · [Before (L5471-L5589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/101.js#L5471-L5589)

```diff
-         })
-       })
-     }
- 
-     function mI(pp) {
-       let {
-         ids: ip
-       } = pp;
-       return ip
-     }
- 
-     function RI(pp) {
-       let {
-         localId: ip
-       } = pp;
-       return ip
- ... (103 more removed lines; see GitHub link above)
+           return WQ
+         },
+         _soundById: function(QQ) {
+           for (var WQ = this, XQ = 0; XQ < WQ._sounds.length; XQ++)
+             if (QQ === WQ._sounds[XQ]._id) return WQ._sounds[XQ];
+           return null
+         },
+         _inactiveSound: function() {
+           var QQ = this;
+           QQ._drain();
+           for (var WQ = 0; WQ < QQ._sounds.length; WQ++)
+             if (QQ._sounds[WQ]._ended) return QQ._sounds[WQ].reset();
+           return new sQ(QQ)
+         },
+         _drain: function() {
+           var QQ = this,
+ ... (14 more added lines; see GitHub link above)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L5597-L5652` → after: `L619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/101.js#L619) · [Before (L5597-L5652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/101.js#L5597-L5652)

```diff
-         }(pp, Wp).catch((pp => (console.error("Gift recipient lookup failed:", pp), {
-           giftRecipientFound: !1,
-           giftRecipientError: "store:giftRecipientLookupFailed"
-         }))).then((pp => {
-           !0 !== pp.giftRecipientFound && "store:giftRecipientLookupFailed" === pp.giftRecipientError || GI.set(ip, pp), Op || Dp({
-             name: Wp,
-             result: pp
-           })
-         })), () => {
-           Op = !0
-         }
-       }), [Wp, pp]);
-       const Up = (0, Op.useMemo)((() => {
-         const pp = cp.trim();
-         if (!pp) return {
-           status: "none"
- ... (40 more removed lines; see GitHub link above)
+           return [QQ]
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L5654-L5661` → after: `L621-L622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L621-L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/101.js#L621-L622) · [Before (L5654-L5661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/101.js#L5654-L5661)

```diff
-         choose: function(pp, ip) {
-           yp(), op(pp), Sp("typed" === ip ? "search" : "prefilled" === ip ? "prefilled" : "suggestion"), Lp({
-             name: pp,
-             source: ip
-           }), "typed" !== ip && "prefilled" !== ip && (0, Oi.reportAnalyticsClick)({
-             id: "store.gift_recipient",
-             value: ip
-           })
+         _refreshBuffer: function(QQ) {
+           return QQ._node.bufferSource = TQ.ctx.createBufferSource(), QQ._node.bufferSource.buffer = FQ[this._src], QQ._panner ? QQ._node.bufferSource.connect(QQ._panner) : QQ._node.bufferSource.connect(QQ._node), QQ._node.bufferSource.loop = QQ._loop, QQ._loop && (QQ._node.buffe … [truncated]
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L5663-L5664` → after: `L624-L629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L624-L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/101.js#L624-L629) · [Before (L5663-L5664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/101.js#L5663-L5664)

```diff
-         clear: function() {
-           yp(), op(""), Sp("search"), Lp(null)
+         _cleanBuffer: function(QQ) {
+           var WQ = TQ._navigator && TQ._navigator.vendor.indexOf("Apple") >= 0;
+           if (TQ._scratchBuffer && QQ.bufferSource && (QQ.bufferSource.onended = null, QQ.bufferSource.disconnect(0), WQ)) try {
+             QQ.bufferSource.buffer = TQ._scratchBuffer
+           } catch (XQ) {}
+           return QQ.bufferSource = null, this
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L5666-L5714` → after: `L631-L632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L631-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/101.js#L631-L632) · [Before (L5666-L5714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/101.js#L5666-L5714)

```diff
-         recordGift: function(pp, ip) {
-           ! function(pp) {
-             GI.delete(pp.toLowerCase())
-           }(pp), Dp((cp => {
-             if (!cp || cp.name.toLowerCase() !== pp.toLowerCase() || !0 !== cp.result.giftRecipientFound || "superRank" === ip) return cp;
-             const Op = cp.result.giftRecipientOwnedPacks;
-             return {
-               ...cp,
-               result: {
-                 ...cp.result,
-                 giftRecipientOwnedPacks: Op.includes(ip) ? Op : [...Op, ip]
-               }
-             }
-           }))
-         }
-       }
- ... (33 more removed lines; see GitHub link above)
+         _clearSound: function(QQ) {
+           /MSIE |Trident\//.test(TQ._navigator && TQ._navigator.userAgent) || (QQ.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L5717-L6102` → after: `L635-L636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L635-L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/101.js#L635-L636) · [Before (L5717-L6102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/101.js#L5717-L6102)

```diff
-       return ip ? {
-         ...op,
-         cosmetics: ip
-       } : op
-     }
- 
-     function xS(pp) {
-       let {
-         pending: ip
-       } = pp;
-       return (0, Ap.jsx)("span", {
-         className: "StoreRecipientLoader",
-         children: ip && (0, Ap.jsx)(jp.c, {})
-       })
-     }
- 
- ... (370 more removed lines; see GitHub link above)
+       var sQ = function(QQ) {
+         this._parent = QQ, this.init()
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L6104-L7188` → after: `L638-L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L638-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/101.js#L638-L669) · [Before (L6104-L7188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/101.js#L6104-L7188)

```diff
-       let tp;
-       switch (ip) {
-         case "pending":
-           tp = (0, Ap.jsx)(Yp.o, {
-             className: "StoreCtaButton",
-             disabled: !0,
-             children: vp(null)
-           });
-           break;
-         case "login":
-           tp = (0, Ap.jsx)(Yp.o, {
-             className: "StoreCtaButton",
-             onClick: Wp,
-             children: vp(wp(!1))
-           });
-           break;
- ... (1069 more removed lines; see GitHub link above)
+       sQ.prototype = {
+         init: function() {
+           var QQ = this,
+             WQ = QQ._parent;
+           return QQ._muted = WQ._muted, QQ._loop = WQ._loop, QQ._volume = WQ._volume, QQ._rate = WQ._rate, QQ._seek = 0, QQ.lD = !0, QQ._ended = !0, QQ._sprite = "__default", QQ._id = ++TQ._counter, WQ._sounds.push(QQ), QQ.create(), QQ
+         },
+         create: function() {
+           var QQ = this,
+             WQ = QQ._parent,
+             XQ = TQ._muted || QQ._muted || QQ._parent._muted ? 0 : QQ._volume;
+           return WQ._webAudio ? (QQ._node = "undefined" === typeof TQ.ctx.createGain ? TQ.ctx.createGainNode() : TQ.ctx.createGain(), QQ._node.gain.setValueAtTime(XQ, TQ.ctx.currentTime), QQ._node.paused = !0, QQ._node.connect(TQ.masterGain)) : TQ.noAudio || (QQ._node = TQ._obtai … [truncated]
+         },
+         reset: function() {
+           var QQ = this,
+             WQ = QQ._parent;
+           return QQ._muted = WQ._muted, QQ._loop = WQ._loop, QQ._volume = WQ._volume, QQ._rate = WQ._rate, QQ._seek = 0, QQ._rateSeek = 0, QQ.lD = !0, QQ._ended = !0, QQ._sprite = "__default", QQ._id = ++TQ._counter, QQ
+ ... (16 more added lines; see GitHub link above)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L7223-L7780` → after: `L672-L688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L672-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/101.js#L672-L688) · [Before (L7223-L7780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/101.js#L7223-L7780)

```diff
- 
-     function Hx(pp) {
-       let {
-         drop: ip,
-         onClose: cp
-       } = pp;
-       const {
-         t: op
-       } = (0, Sp.H)(), {
-         userContext: Lp
-       } = (0, yp.b)(), {
-         state: Dp,
-         view: Pp
-       } = (0, Vi.D)(), [Wp, Up] = (0, Op.useState)("closed"), [wp] = (0, Op.useState)((() => ({
-         ...Lp.getPlayerCosmetics()
-       }))), [vp] = (0, Op.useState)((() => (0, Vi.n)(ip, wp))), [tp, Hp] = (0, Op.useState)(!1), [dp, ep] = (0, Op.useState)(!1), [jp] = (0, Op.useState)((() => null === Dp ? Promise.resolve(null) : yx(Dp))), [kp, Rp] = (0, Op.useState)(null), qp = (0, zi.b)(), {
- ... (542 more removed lines; see GitHub link above)
+       var FQ = {},
+         PQ = function(QQ) {
+           var WQ = QQ._src;
+           if (FQ[WQ]) return QQ._duration = FQ[WQ].duration, void rQ(QQ);
+           if (/^data:[^;]+;base64,/.test(WQ)) {
+             for (var XQ = atob(WQ.split(",")[1]), wQ = new Uint8Array(XQ.length), qQ = 0; qQ < XQ.length; ++qQ) wQ[qQ] = XQ.charCodeAt(qQ);
+             JQ(wQ.buffer, QQ)
+           } else {
+             var TQ = new XMLHttpRequest;
+             TQ.open(QQ._xhr.method, WQ, !0), TQ.withCredentials = QQ._xhr.withCredentials, TQ.responseType = "arraybuffer", QQ._xhr.headers && Object.keys(QQ._xhr.headers).forEach((function(WQ) {
+               TQ.setRequestHeader(WQ, QQ._xhr.headers[WQ])
+             })), TQ.onload = function() {
+               var WQ = (TQ.status + "")[0];
+               "0" === WQ || "2" === WQ || "3" === WQ ? JQ(TQ.response, QQ) : QQ._emit("loaderror", null, "Failed loading audio file with status: " + TQ.status + ".")
+             }, TQ.onerror = function() {
+               QQ._webAudio && (QQ._html5 = !0, QQ._webAudio = !1, QQ._sounds = [], delete FQ[WQ], QQ.load())
+ ... (1 more added lines; see GitHub link above)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L7789-L8485` → after: `L691-L693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L691-L693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/101.js#L691-L693) · [Before (L7789-L8485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/101.js#L7789-L8485)

```diff
-         children: [(0, Ap.jsx)("div", {
-           className: "StoreTopRow",
-           children: (0, Ap.jsx)(LS, {
-             selfName: Dp ? Lp.getPlayerName() : "",
-             giftRecipient: Pp,
-             suggestionsVersion: null !== (ip = null === Jp || void 0 === Jp ? void 0 : Jp.seq) && void 0 !== ip ? ip : 0,
-             pulseSignal: qp,
-             disabled: Ai || !Dp
-           })
-         }), Jp && (0, Ap.jsxs)("div", {
-           className: "StoreNotice StoreNoticeGiftSent",
-           onClick: () => {
-             Np(null)
-           },
-           children: [(0, Ap.jsx)(hI.b, {
-             showSignal: Jp.seq
- ... (681 more removed lines; see GitHub link above)
+         gQ = function(QQ) {
+           try {
+             QQ.send()
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L8487-L8490` → after: `L695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/101.js#L695) · [Before (L8487-L8490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/101.js#L8487-L8490)

```diff
-             console.error("Failed to update social link", cp), Dp.NotificationProvider.showAlertPopup({
-               title: cp.errorMessageForUser,
-               confirmText: "general:ok"
-             })
+             QQ.onerror()
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L8627-L8840` → after: `L699-L700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L699-L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/101.js#L699-L700) · [Before (L8627-L8840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/101.js#L8627-L8840)

```diff
-           if (pp.lines) return xp(pp.lineThickness, ip) % 2;
-           if (pp.dot) return xp(pp.dotSize, ip) % 2;
-           return Yp(pp, ip) % 2
-         }(pp, ip),
-         op = Dp(pp.lineThickness * cp, Op),
-         Ip = xp(pp.lineLength, cp),
-         Sp = Math.round(pp.gap * cp),
-         Lp = pp.outline > 0 ? xp(pp.outline, cp) : 0,
-         Pp = [];
-       if (pp.lines && (Pp.push({
-           x: op + Sp,
-           y: 0,
-           w: Ip,
-           h: op,
-           arm: "right"
-         }), Pp.push({
- ... (198 more removed lines; see GitHub link above)
+           var XQ = function() {
+               WQ._emit("loaderror", null, "Decoding audio data failed.")
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L8842-L8858` → after: `L702-L703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L702-L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/101.js#L702-L703) · [Before (L8842-L8858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/101.js#L8842-L8858)

```diff
-             dpr: 1
-           });
-           return (0, Ip.useLayoutEffect)((() => {
-             const ip = pp.current;
-             if (!ip) return;
-             const Op = () => {
-               const pp = ip.getBoundingClientRect(),
-                 Op = window.devicePixelRatio || 1;
-               cp((ip => ip.dpr === Op && ip.box.left === pp.left && ip.box.top === pp.top && ip.box.width === pp.width && ip.box.height === pp.height ? ip : {
-                 box: {
-                   left: pp.left,
-                   top: pp.top,
-                   width: pp.width,
-                   height: pp.height
-                 },
-                 dpr: Op
- ... (1 more removed lines; see GitHub link above)
+             wQ = function(QQ) {
+               QQ && WQ._sounds.length > 0 ? (FQ[WQ._src] = QQ, rQ(WQ, QQ)) : XQ()
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L8860-L8875` → after: `L705-L727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L705-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/101.js#L705-L727) · [Before (L8860-L8875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/101.js#L8860-L8875)

```diff
-             Op();
-             const op = new ResizeObserver(Op);
-             return op.observe(ip), window.addEventListener("resize", Op), window.addEventListener("scroll", Op, !0), () => {
-               op.disconnect(), window.removeEventListener("resize", Op), window.removeEventListener("scroll", Op, !0)
-             }
-           }), [pp]), ip
-         }(Ap),
-         wp = (0, Ip.useRef)(Up);
-       wp.current = Up;
-       const vp = Lp(ip, Up, xp && ip.growOnClick ? Wp : 1),
-         tp = function(pp, ip, cp) {
-           const Op = Math.round((pp.left + pp.width / 2) * cp - ip / 2),
-             op = Math.round((pp.top + pp.height / 2) * cp - ip / 2);
-           return {
-             x: Op / cp - pp.left,
-             y: op / cp - pp.top
+           "undefined" !== typeof Promise && 1 === TQ.ctx.decodeAudioData.length ? TQ.ctx.decodeAudioData(QQ).then(wQ).catch(XQ) : TQ.ctx.decodeAudioData(QQ, wQ, XQ)
+         },
+         rQ = function(QQ, WQ) {
+           WQ && !QQ._duration && (QQ._duration = WQ.duration), 0 === Object.keys(QQ._sprite).length && (QQ._sprite = {
+             __default: [0, 1e3 * QQ._duration]
+           }), "loaded" !== QQ._state && (QQ._state = "loaded", QQ._emit("load"), QQ._loadQueue())
+         },
+         IQ = function() {
+           if (TQ.usingWebAudio) {
+             try {
+               "undefined" !== typeof AudioContext ? TQ.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? TQ.ctx = new webkitAudioContext : TQ.usingWebAudio = !1
+             } catch (qQ) {
+               TQ.usingWebAudio = !1
+             }
+             TQ.ctx || (TQ.usingWebAudio = !1);
+             var QQ = /iP(hone|od|ad)/.test(TQ._navigator && TQ._navigator.platform),
+ ... (7 more added lines; see GitHub link above)
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L9011-L9091` → after: `L730-L733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L730-L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/101.js#L730-L733) · [Before (L9011-L9091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/101.js#L9011-L9091)

```diff
-       Ip.forEach(((pp, Op) => {
-         cp[pp] = 0 !== (ip & 1 << Op + 1)
-       }));
-       let op = 1;
-       for (const Op of xp) cp[Op] = pp[op] << 16 | pp[op + 1] << 8 | pp[op + 2], op += 3;
-       for (const Ip of Sp) {
-         const {
-           min: ip,
-           step: Sp
-         } = Op.b[Ip];
-         cp[Ip] = (0, Op.g)(Ip, ip + pp[op] * Sp), op++
-       }
-       return cp
-     }
-   },
-   34392: (pp, ip, cp) => {
- ... (65 more removed lines; see GitHub link above)
+       void 0 === (wQ = function() {
+         return {
+           Howler: TQ,
+           Howl: zQ
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L9093-L9115` → after: `L735-L737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L735-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/101.js#L735-L737) · [Before (L9093-L9115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/101.js#L9093-L9115)

```diff
-       },
-       op = Object.freeze({
-         style: "classic",
-         color: 16777215,
-         opacity: 100,
-         outline: 1.2,
-         outlineColor: 0,
-         growOnClick: !0,
-         size: 100,
-         lines: !0,
-         lineLength: 6,
-         lineThickness: 2,
-         gap: 3,
-         tStyle: !1,
-         dot: !1,
-         dotSize: 2,
- ... (7 more removed lines; see GitHub link above)
+       }.apply(WQ, [])) || (QQ.exports = wQ), WQ.Howler = TQ, WQ.Howl = zQ, "undefined" !== typeof XQ.g ? (XQ.g.HowlerGlobal = qQ, XQ.g.Howler = TQ, XQ.g.Howl = zQ, XQ.g.Sound = sQ) : "undefined" !== typeof window && (window.HowlerGlobal = qQ, window.Howler = TQ, window.Howl = zQ, … [truncated]
+     }(),
+     function() {
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L9117-L9246` → after: `L739-L788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L739-L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/101.js#L739-L788) · [Before (L9117-L9246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/101.js#L9117-L9246)

```diff
-       const {
-         min: Ip,
-         max: Sp,
-         step: xp
-       } = Op[pp];
-       if (!Number.isFinite(ip)) return op[pp];
-       const Lp = (null !== (cp = String(xp).split(".")[1]) && void 0 !== cp ? cp : "").length,
-         Yp = Number((Math.round(ip / xp) * xp).toFixed(Lp));
-       return Math.min(Sp, Math.max(Ip, Yp))
-     }
- 
-     function Sp(pp, ip, cp) {
-       const Op = "number" === typeof cp ? Ip(ip, cp) : cp;
-       return {
-         ...pp,
-         [ip]: Op
- ... (114 more removed lines; see GitHub link above)
+       HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(QQ) {
+         var WQ = this;
+         if (!WQ.ctx || !WQ.ctx.listener) return WQ;
+         for (var XQ = WQ._howls.length - 1; XQ >= 0; XQ--) WQ._howls[XQ].stereo(QQ);
+         return WQ
+       }, HowlerGlobal.prototype.pos = function(QQ, WQ, XQ) {
+         var wQ = this;
+         return wQ.ctx && wQ.ctx.listener ? (WQ = "number" !== typeof WQ ? wQ._pos[1] : WQ, XQ = "number" !== typeof XQ ? wQ._pos[2] : XQ, "number" !== typeof QQ ? wQ._pos : (wQ._pos = [QQ, WQ, XQ], "undefined" !== typeof wQ.ctx.listener.positionX ? (wQ.ctx.listener.positionX.setT … [truncated]
+       }, HowlerGlobal.prototype.orientation = function(QQ, WQ, XQ, wQ, qQ, TQ) {
+         var zQ = this;
+         if (!zQ.ctx || !zQ.ctx.listener) return zQ;
+         var sQ = zQ._orientation;
+         return WQ = "number" !== typeof WQ ? sQ[1] : WQ, XQ = "number" !== typeof XQ ? sQ[2] : XQ, wQ = "number" !== typeof wQ ? sQ[3] : wQ, qQ = "number" !== typeof qQ ? sQ[4] : qQ, TQ = "number" !== typeof TQ ? sQ[5] : TQ, "number" !== typeof QQ ? sQ : (zQ._orientation = [QQ, W … [truncated]
+       }, Howl.prototype.init = (QQ = Howl.prototype.init, function(WQ) {
+         var XQ = this;
+         return XQ._orientation = WQ.orientation || [1, 0, 0], XQ._stereo = WQ.stereo || null, XQ._pos = WQ.pos || null, XQ._pannerAttr = {
+ ... (34 more added lines; see GitHub link above)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L9262-L9742` → after: `L791-L810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L791-L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/101.js#L791-L810) · [Before (L9262-L9742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/101.js#L9262-L9742)

```diff
-       }
-     }
-   },
-   34316: (pp, ip, cp) => {
-     cp.d(ip, {
-       d: () => tp,
-       h: () => Yp,
-       l: () => Up,
-       n: () => yp
-     });
-     var Op = cp(156),
-       op = cp(1284),
-       Ip = cp(1211),
-       Sp = cp(1149),
-       xp = cp(1758);
-     const Lp = {
- ... (465 more removed lines; see GitHub link above)
+         return wQ
+       }, Howl.prototype.pos = function(QQ, XQ, wQ, qQ) {
+         var TQ = this;
+         if (!TQ._webAudio) return TQ;
+         if ("loaded" !== TQ._state) return TQ._queue.push({
+           event: "pos",
+           action: function() {
+             TQ.pos(QQ, XQ, wQ, qQ)
+           }
+         }), TQ;
+         if (XQ = "number" !== typeof XQ ? 0 : XQ, wQ = "number" !== typeof wQ ? -.5 : wQ, "undefined" === typeof qQ) {
+           if ("number" !== typeof QQ) return TQ._pos;
+           TQ._pos = [QQ, XQ, wQ]
+         }
+         for (var zQ = TQ._getSoundIds(qQ), sQ = 0; sQ < zQ.length; sQ++) {
+           var FQ = TQ._soundById(zQ[sQ]);
+ ... (4 more added lines; see GitHub link above)
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L9744-L9829` → after: `L812-L830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L812-L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/101.js#L812-L830) · [Before (L9744-L9829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/101.js#L9744-L9829)

```diff
-       };
- 
-     function Sp(pp) {
-       var ip;
-       return null !== (ip = Ip[pp]) && void 0 !== ip ? ip : {
-         translationKey: ""
-       }
-     }
-     const xp = {
-       "Wood Enchanting Table": [{
-         min: 1,
-         max: 2
-       }, {
-         min: 3,
-         max: 4
-       }, {
- ... (70 more removed lines; see GitHub link above)
+         return TQ
+       }, Howl.prototype.orientation = function(QQ, XQ, wQ, qQ) {
+         var TQ = this;
+         if (!TQ._webAudio) return TQ;
+         if ("loaded" !== TQ._state) return TQ._queue.push({
+           event: "orientation",
+           action: function() {
+             TQ.orientation(QQ, XQ, wQ, qQ)
+           }
+         }), TQ;
+         if (XQ = "number" !== typeof XQ ? TQ._orientation[1] : XQ, wQ = "number" !== typeof wQ ? TQ._orientation[2] : wQ, "undefined" === typeof qQ) {
+           if ("number" !== typeof QQ) return TQ._orientation;
+           TQ._orientation = [QQ, XQ, wQ]
+         }
+         for (var zQ = TQ._getSoundIds(qQ), sQ = 0; sQ < zQ.length; sQ++) {
+           var FQ = TQ._soundById(zQ[sQ]);
+ ... (3 more added lines; see GitHub link above)
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L9831-L9873` → after: `L832-L893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L832-L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/101.js#L832-L893) · [Before (L9831-L9873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/101.js#L9831-L9873)

```diff
-           return 72 * ip
-         },
-         Op = .3 - .78 * ip,
-         op = .5 - .78 * ip,
-         Ip = .6 - .7 * ip,
-         Sp = .8 - .6 * ip;
-       let xp = cp(Op),
-         Lp = cp(op) - xp,
-         Yp = cp(Ip) - Lp - xp,
-         Dp = cp(Sp) - Yp - Lp - xp;
-       Op < .041 && (Lp /= 1 - xp, Yp /= 1 - xp, Dp /= 1 - xp, xp = 0), op < .041 && (xp /= 1 - Lp, Yp /= 1 - Lp, Dp /= 1 - Lp, Lp = 0), Ip < .041 && (xp /= 1 - Yp, Lp /= 1 - Yp, Dp /= 1 - Yp, Yp = 0), Sp < .041 && (xp /= 1 - Dp, Lp /= 1 - Dp, Yp /= 1 - Dp, Dp = 0);
-       return {
-         commonProb: xp,
-         uncommonProb: Lp,
-         rareProb: Yp,
-         epicProb: Dp,
- ... (27 more removed lines; see GitHub link above)
+         }
+         return TQ
+       }, Howl.prototype.pannerAttr = function() {
+         var QQ, XQ, wQ, qQ = this,
+           TQ = arguments;
+         if (!qQ._webAudio) return qQ;
+         if (0 === TQ.length) return qQ._pannerAttr;
+         if (1 === TQ.length) {
+           if ("object" !== typeof TQ[0]) return (wQ = qQ._soundById(parseInt(TQ[0], 10))) ? wQ._pannerAttr : qQ._pannerAttr;
+           QQ = TQ[0], "undefined" === typeof XQ && (QQ.pannerAttr || (QQ.pannerAttr = {
+             coneInnerAngle: QQ.coneInnerAngle,
+             coneOuterAngle: QQ.coneOuterAngle,
+             coneOuterGain: QQ.coneOuterGain,
+             distanceModel: QQ.distanceModel,
+             maxDistance: QQ.maxDistance,
+             refDistance: QQ.refDistance,
+ ... (46 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/102.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/102.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860)

#### 1. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/102.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/102.js#L4)

```diff
-   5008: (pp, ip, cp) => {
+   5231: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L8-L40` → after: `L8-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L8-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/102.js#L8-L109) · [Before (L8-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/102.js#L8-L40)

```diff
-     var Op = cp(1543),
-       op = cp(62),
-       Ip = cp(1201),
-       Sp = cp(1141),
-       xp = cp(1133),
-       Lp = cp(2112),
-       Yp = cp(1538),
-       Dp = cp(1361),
-       Ap = cp(1128),
-       Pp = cp(25),
-       Wp = cp(1480),
-       yp = cp(1060),
-       Up = cp(2655),
-       wp = cp(1563),
-       vp = cp(1112);
-     const tp = [{
- ... (17 more removed lines; see GitHub link above)
+     var wQ = XQ(61),
+       qQ = XQ(1581),
+       TQ = XQ(402),
+       zQ = XQ(1268),
+       sQ = XQ(1676),
+       FQ = XQ(1302),
+       PQ = XQ(1607),
+       gQ = XQ(1548),
+       JQ = XQ(2826);
+     const rQ = {
+       retries: 2,
+       minTimeout: 2e3
+     };
+     var IQ = XQ(1154),
+       jQ = XQ(1674),
+       BQ = XQ(1162),
+ ... (86 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L45` → after: `L114-L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L114-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/102.js#L114-L120) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/102.js#L45)

```diff
-       } = (0, Ip.H)(), ip = (0, Yp.useNavigatePreserveSearch)(), cp = (0, Op.r)(), {
+       } = (0, VQ.C)(), WQ = (0, bQ.useNavigatePreserveSearch)(), XQ = (0, IQ.i)(), {
+         playerName: HQ,
+         playerUrlName: lQ
+       } = (0, qQ.E)(), EQ = (0, qQ.w)(), tQ = (0, zQ.f)(EQ.pathname), eQ = tQ && ("urlId" in tQ ? `urlId:${tQ.urlId}` : `name:${tQ.lowerCaseName}`), nQ = (0, wQ.useRef)(eQ);
+       nQ.current = eQ;
+       const {
+         userContext: xQ,
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L47-L53` → after: `L122-L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L122-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/102.js#L122-L236) · [Before (L47-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/102.js#L47-L53)

```diff
-       } = (0, Sp.b)(), ep = (0, Lp.e)(), jp = (0, xp.h)(), kp = (mp = cp.pathname).startsWith(wp.p) ? null : mp.startsWith(Hp.docs) ? "docs" : mp.startsWith(Hp.leaderboard) ? "leaderboard" : "myGames";
-       var mp;
-       const Rp = function(pp) {
-         if (!pp.startsWith(wp.p)) return {
-           title: "studio:leaveStudio",
-           icon: "left-from-bracket",
-           to: "/"
+       } = (0, BQ.c)(), NQ = (0, wQ.useRef)(null), ZQ = (0, wQ.useRef)(null), OQ = (0, wQ.useRef)(null), KQ = (0, wQ.useRef)(!1), mQ = (0, wQ.useRef)((0, TQ.Yb)(SQ)), [MQ, QW] = (0, wQ.useState)((() => {
+         const QQ = tQ && dQ.e.peek(xQ, tQ);
+         return QQ ? {
+           status: "loaded",
+           profile: QQ,
+           playerKey: eQ
+         } : {
+           status: "loading"
+         }
+       })), [WW, XW] = (0, wQ.useState)(0);
+       (0, wQ.useEffect)(vQ.g, []), (0, wQ.useEffect)((() => {
+         RQ.gameBridge.send("leaveGame", {
+           reloadPath: null
+         }), AQ.b.set({
+           gameState: "landingPage",
+           openEverythingMenuName: null,
+ ... (99 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L55-L59` → after: `L238-L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L238-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/102.js#L238-L239) · [Before (L55-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/102.js#L55-L59)

```diff
-         const ip = (0, Yp.getPreviousLocation)();
-         return {
-           title: "general:back",
-           icon: "arrow-left",
-           to: null !== ip && ip.startsWith(Hp.myGames) ? -1 : Hp.myGames
+         return XQ(), () => {
+           WQ = !0, clearTimeout(QQ)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L61-L71` → after: `L241-L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L241-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/102.js#L241-L246) · [Before (L61-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/102.js#L61-L71)

```diff
-       }(cp.pathname);
-       return (0, op.useEffect)((() => {
-         Pp.c.set({
-           gameState: "studio",
-           openEverythingMenuName: null
-         })
-       }), []), (0, vp.jsxs)("div", {
-         className: "StudioLayout AnimFadeIn",
-         children: [ep && (0, vp.jsx)("aside", {
-           className: "StudioLayoutLeft",
-           children: (0, vp.jsx)(Up.b, {})
+       }), [TW, IW]), (0, fQ.jsxs)("div", {
+         className: hQ()("PlayerProfile", {
+           PlayerProfilePortrait: XQ
+         }),
+         children: [zW && (0, fQ.jsx)(sQ.d, {
+           meta: zW
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L73` → after: `L248-L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L248-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/102.js#L248-L286) · [Before (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/102.js#L73)

```diff
-           className: "StudioLayoutRight",
+           className: "PlayerProfileBackgroundContainer",
+           children: [FW && (0, fQ.jsx)(FW, {}), !FW && (0, fQ.jsx)("div", {
+             className: "PlayerProfileBackground",
+             style: {
+               backgroundImage: `url(${mQ.current})`
+             }
+           })]
+         }), (0, fQ.jsxs)("div", {
+           className: "PlayerProfileHeader",
+           children: [(0, fQ.jsx)(UQ.e, {
+             onClick: wW,
+             children: QQ("general:back")
+           }), TW && !YQ && !PW && LQ.featureFlags.useSocialFeatures && (0, fQ.jsx)("div", {
+             className: "PlayerProfileExclusionActions",
+             children: (0, fQ.jsx)(uQ.c, {
+               playerName: TW.player.name,
+ ... (23 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L75-L93` → after: `L288-L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L288-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/102.js#L288-L332) · [Before (L75-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/102.js#L75-L93)

```diff
-             className: "StudioTop",
-             children: [(0, vp.jsx)(Ap.e, {
-               show: !0,
-               socialBarIsDocked: ep
-             }), (0, vp.jsxs)("nav", {
-               className: "StudioNav",
-               children: [(0, vp.jsx)(Wp.d, {
-                 icon: Rp.icon,
-                 onClick: () => {
-                   ip(Rp.to)
-                 },
-                 children: pp(Rp.title)
-               }), (0, vp.jsx)("div", {
-                 className: "StudioNavTabs",
-                 children: tp.map((cp => (0, vp.jsxs)(Wp.S, {
-                   active: kp === cp.id,
- ... (3 more removed lines; see GitHub link above)
+             className: "PlayerProfileLeft",
+             children: [(0, fQ.jsx)("div", {
+               className: "PlayerProfileName FullyFancyText",
+               children: (0, fQ.jsx)(yQ.e, {
+                 text: (0, DQ.u)(TW.player.ranks, TW.player.name, TW.player.nameColour),
+                 friendBadgeFor: gW ? TW.player.name : void 0
+               })
+             }), (0, fQ.jsx)("div", {
+               className: "PlayerProfileModel",
+               children: (0, fQ.jsx)(wQ.Suspense, {
+                 fallback: (0, fQ.jsx)("div", {
+                   className: "PlayerProfileModelLoading",
+                   children: (0, fQ.jsx)(GQ.e, {})
+                 }),
+                 children: (0, fQ.jsx)(vQ.c, {
+                   ref: NQ,
+ ... (29 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L95-L98` → after: `L334-L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L334-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/102.js#L334-L338) · [Before (L95-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/102.js#L95-L98)

```diff
-                   children: [(0, vp.jsx)(yp.d, {
-                     name: cp.icon
-                   }), !jp && pp(cp.title)]
-                 }, cp.id)))
+                   gameWidth: "100%",
+                   useLongRatio: !0,
+                   hideFavourites: !0,
+                   entrySource: "other"
+                 }, QQ.schematicId)))
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/103.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/103.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78)

#### 1. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L4-L16` → after: `L4-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L4-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/103.js#L4-L115) · [Before (L4-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/103.js#L4-L16)

```diff
-   5025: (pp, ip, cp) => {
-     cp.d(ip, {
-       b: () => Pp
-     });
-     var Op = cp(1049),
-       op = cp.n(Op),
-       Ip = cp(1060),
-       Sp = cp(1361),
-       xp = cp(3607),
-       Lp = cp(131),
-       Yp = cp(3641),
-       Dp = cp(3628),
-       Ap = cp(1112);
+   29206: (QQ, WQ, XQ) => {
+     var wQ = {
+       "./Player_Atlas.png": 28262,
+       "./astro_set_1_attachable.png": 28269,
+       "./astro_set_2_attachable.png": 28275,
+       "./astro_set_3_attachable.png": 28282,
+       "./astro_set_4_attachable.png": 28286,
+       "./beaver_lumberjack.png": 28288,
+       "./bee_set_1_attachable.png": 28296,
+       "./bee_set_2_attachable.png": 28302,
+       "./bee_set_3_attachable_blue.png": 28305,
+       "./bee_set_3_attachable_green.png": 28307,
+       "./bee_set_3_attachable_red.png": 28315,
+       "./bee_set_4_attachable.png": 28323,
+       "./capeTextures/cape_cow_cream.png": 28325,
+       "./capeTextures/cape_cow_normal.png": 28327,
+ ... (96 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L19-L44` → after: `L118-L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L118-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/103.js#L118-L122) · [Before (L19-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/103.js#L19-L44)

```diff
-       let {
-         game: ip
-       } = pp;
-       const cp = (0, Lp.is99NightsCrazyGamesBundle)() ? "large" : "small",
-         Op = (0, Yp.f)(ip, cp),
-         Pp = (0, xp.d)(Op),
-         Wp = void 0 !== Pp.blurhash;
-       return (0, Ap.jsxs)("div", {
-         className: "SchematicImageContainer",
-         children: [Pp.isLoading && !Wp && (0, Ap.jsx)(Sp.c, {
-           loaderType: "Secondary"
-         }), !Pp.failed && (null !== Pp.src || Wp) && (0, Ap.jsx)("div", {
-           className: op()("SchematicImage", Dp.g, {
-             SchematicImageFadeIn: Pp.fadeIn && !Wp
-           }),
-           style: (0, Dp.f)(Pp),
- ... (10 more removed lines; see GitHub link above)
+       if (!XQ.o(wQ, QQ)) {
+         var WQ = new Error("Cannot find module '" + QQ + "'");
+         throw WQ.code = "MODULE_NOT_FOUND", WQ
+       }
+       return wQ[QQ]
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L47-L72` → after: `L128-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L128-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/103.js#L128-L271) · [Before (L47-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/103.js#L47-L72)

```diff
-   5011: (pp, ip, cp) => {
-     cp.r(ip), cp.d(ip, {
-       default: () => Rp
-     });
-     cp(5017);
-     var Op = cp(62),
-       op = cp(1049),
-       Ip = cp.n(op),
-       Sp = cp(322),
-       xp = cp(1024),
-       Lp = cp(1234),
-       Yp = cp(1201),
-       Dp = cp(1141),
-       Ap = cp(1520),
-       Pp = cp(5025),
-       Wp = cp(1480),
- ... (10 more removed lines; see GitHub link above)
+   33531: (QQ, WQ, XQ) => {
+     var wQ = {
+       "./67/67_Model.glb": 33540,
+       "./67/67_Reconstructed.glb": 33545,
+       "./Armour Collector/Armour Collector_Model.glb": 33548,
+       "./Armour Collector/Armour Collector_Reconstructed.glb": 33557,
+       "./Bear/Bear_Model.glb": 33566,
+       "./Bobino Musculino/Bobino Musculino_Model.glb": 33571,
+       "./Bobino Musculino/Bobino Musculino_Reconstructed.glb": 33577,
+       "./Camel/Camel_Model.glb": 33586,
+       "./Capitano Explovissimo/Capitano Explovissimo_Model.glb": 33591,
+       "./Capitano Explovissimo/Capitano Explovissimo_Reconstructed.glb": 33593,
+       "./Cave Golem/Cave Golem_Model.glb": 33595,
+       "./Cow/Cow_Model.glb": 33600,
+       "./Crone/Crone_Model.glb": 33608,
+       "./Deer/Deer_Model.glb": 33611,
+ ... (128 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L74-L119` → after: `L273-L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L273-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/103.js#L273-L275) · [Before (L74-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/103.js#L74-L119)

```diff
-     function mp() {
-       const {
-         t: pp
-       } = (0, Yp.H)(), ip = (0, wp.useNavigatePreserveSearch)(), cp = (0, dp.n)(), op = (0, Op.useMemo)((() => [...Hp.e].sort(((ip, Op) => {
-         var op, Ip;
-         const Sp = (null !== (op = (0, dp.c)(Op, cp)) && void 0 !== op ? op : 0) - (null !== (Ip = (0, dp.c)(ip, cp)) && void 0 !== Ip ? Ip : 0);
-         return 0 !== Sp ? Sp : (0, jp.k)(ip, pp).localeCompare((0, jp.k)(Op, pp))
-       }))), [cp, pp]);
-       return (0, kp.jsxs)(kp.Fragment, {
-         children: [(0, kp.jsx)("div", {
-           className: "StudioPageHeader",
-           children: (0, kp.jsx)("h1", {
-             className: "StudioPageTitle",
-             children: pp("studio:firstPartyGames")
-           })
-         }), (0, kp.jsx)(yp.d, {
- ... (30 more removed lines; see GitHub link above)
+     function qQ(QQ) {
+       var WQ = TQ(QQ);
+       return XQ(WQ)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L122-L226` → after: `L278-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L278-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/103.js#L278-L283) · [Before (L122-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/103.js#L122-L226)

```diff
-     function Rp() {
-       const {
-         t: pp
-       } = (0, Yp.H)(), ip = (0, wp.useNavigatePreserveSearch)(), {
-         userContext: cp,
-         isUserContextUpdating: op
-       } = (0, Dp.b)(), {
-         isCreating: Hp,
-         create: dp
-       } = (0, vp.e)(), [Rp, qp] = (0, Op.useState)(null), [Mp, Cp] = (0, Op.useState)(null), [Ep, Xp] = (0, Op.useState)(!1);
-       (0, Op.useEffect)((() => {
-         op || (Xp(!1), Ap.b.getPublishedGamePreviews(cp, {
-           searchQuery: null,
-           pageNumber: 1,
-           pageSize: 50,
-           onlyFavouriteGames: !1,
- ... (89 more removed lines; see GitHub link above)
+     function TQ(QQ) {
+       if (!XQ.o(wQ, QQ)) {
+         var WQ = new Error("Cannot find module '" + QQ + "'");
+         throw WQ.code = "MODULE_NOT_FOUND", WQ
+       }
+       return wQ[QQ]
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L229-L235` → after: `L289-L602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L289-L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/103.js#L289-L602) · [Before (L229-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/103.js#L229-L235)

```diff
-   5040: (pp, ip, cp) => {
-     cp.d(ip, {
-       e: () => Sp,
-       h: () => Ip
-     });
-     var Op = cp(1563),
-       op = cp(1112);
+   27570: (QQ, WQ, XQ) => {
+     var wQ = {
+       "./67/67_Atlas.png": 27574,
+       "./67/variations/0_67_default.png": 27578,
+       "./Armour Collector/Armour Collector_Atlas.png": 27584,
+       "./Armour Collector/variations/0_armour collector_default.png": 27591,
+       "./Bear/BearSaddle_Atlas.png": 27594,
+       "./Bear/Bear_Atlas.png": 27600,
+       "./Bear/variations/0_bear_default.png": 27602,
+       "./Bobino Musculino/Bobino Musculino_Atlas.png": 27608,
+       "./Bobino Musculino/variations/0_bobino musculino_default.png": 27617,
+       "./Camel/CamelSaddle_Atlas.png": 27620,
+       "./Camel/Camel_Armour.png": 27625,
+       "./Camel/Camel_Atlas.png": 27627,
+       "./Camel/variations/0_camel_default.png": 27632,
+       "./Camel/variations/1_camel_brown.png": 27636,
+ ... (298 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L238-L251` → after: `L605-L606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L605-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/103.js#L605-L606) · [Before (L238-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/103.js#L238-L251)

```diff
-       let {
-         thumbnail: ip,
-         name: cp
-       } = pp;
-       return (0, op.jsxs)("div", {
-         className: "StudioTableGameCell",
-         children: [(0, op.jsx)("div", {
-           className: "StudioTableThumbnail",
-           children: ip
-         }), (0, op.jsx)("span", {
-           className: "StudioTableGameName",
-           children: cp
-         })]
-       })
+       var WQ = TQ(QQ);
+       return XQ(WQ)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L255-L262` → after: `L610-L614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L610-L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/103.js#L610-L614) · [Before (L255-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/103.js#L255-L262)

```diff
-       let {
-         game: ip
-       } = pp;
-       return (0, op.jsx)("img", {
-         className: "StudioTableThumbnailImage",
-         src: (0, Op.h)(ip),
-         alt: ""
-       })
+       if (!XQ.o(wQ, QQ)) {
+         var WQ = new Error("Cannot find module '" + QQ + "'");
+         throw WQ.code = "MODULE_NOT_FOUND", WQ
+       }
+       return wQ[QQ]
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L265-L267` → after: `L620-L4745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L620-L4745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/103.js#L620-L4745) · [Before (L265-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/103.js#L265-L267)

```diff
-   5034: (pp, ip, cp) => {
-     cp.d(ip, {
-       d: () => xp
+   29214: (QQ, WQ, XQ) => {
+     var wQ = {
+       "./2_block.glb": 29218,
+       "./67.glb": 29221,
+       "./Artisan Bench.glb": 29223,
+       "./Aspen Door.glb": 29231,
+       "./Aspen Item Pedestal.glb": 29240,
+       "./Aspen Ladder.glb": 29245,
+       "./Aspen Trapdoor.glb": 29250,
+       "./Black Banner.glb": 29252,
+       "./Black Bed.glb": 29260,
+       "./Black Directional Arrow.glb": 29265,
+       "./Black Strongbed.glb": 29267,
+       "./Blue Banner.glb": 29270,
+       "./Blue Bed.glb": 29278,
+       "./Blue Directional Arrow.glb": 29282,
+ ... (4110 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L269-L272` → after: `L4747-L4816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R4747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L4747-L4816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/103.js#L4747-L4816) · [Before (L269-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/103.js#L269-L272)

```diff
-     var Op = cp(62),
-       op = cp(1049),
-       Ip = cp.n(op),
-       Sp = cp(1112);
+     var wQ = XQ(3440),
+       qQ = XQ(34315),
+       TQ = XQ(1238),
+       zQ = XQ(9580),
+       sQ = XQ(658);
+     const FQ = {
+       block: QQ => XQ(9701)(`./${QQ}.png`),
+       item: QQ => XQ(17597)(`./${QQ}.png`)
+     };
+ 
+     function PQ(QQ, WQ) {
+       let qQ;
+       try {
+         if (WQ === wQ.d.BLOCK) qQ = {
+           type: wQ.e.BASE64,
+           url: FQ.block(QQ)
+ ... (54 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L275-L295` → after: `L4819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R4819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L4819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/103.js#L4819) · [Before (L275-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/103.js#L275-L295)

```diff
-       let {
-         columns: ip,
-         rows: cp,
-         getRowKey: op,
-         renderRow: xp,
-         className: Lp
-       } = pp;
-       return (0, Sp.jsxs)("table", {
-         className: Ip()("Table", Lp),
-         children: [(0, Sp.jsx)("thead", {
-           children: (0, Sp.jsx)("tr", {
-             children: ip.map((pp => (0, Sp.jsx)("th", {
-               children: pp.header
-             }, pp.key)))
-           })
-         }), (0, Sp.jsx)("tbody", {
- ... (5 more removed lines; see GitHub link above)
+       return qQ.m[QQ]
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L298` → after: `L4822-L17026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R4822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L4822-L17026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/103.js#L4822-L17026) · [Before (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/103.js#L298)

```diff
-   5017: () => {}
+   34315: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       d: () => TQ,
+       g: () => sQ,
+       h: () => zQ,
+       l: () => qQ,
+       m: () => wQ
+     });
+     const wQ = {
+         default: {
+           type: "earth",
+           vertexTint: [137, 207, 240]
+         },
+         gloomy: {
+           type: "custom",
+           nx: "/textures/skyBoxes/gloomy/_nx.jpg",
+ ... (12189 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/104.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/104.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864)

#### 1. `bundles/preprod.bloxd.io/chunks/js/104.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/104.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/104.js#L4-L6)

```diff
-   5025: (pp, ip, cp) => {
-     cp.d(ip, {
-       b: () => Pp
+   5244: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       default: () => GQ
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/104.js` (Changed code · before: `L8-L16` → after: `L8-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864) · [After (L8-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/104.js#L8-L40) · [Before (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/104.js#L8-L16)

```diff
-     var Op = cp(1049),
-       op = cp.n(Op),
-       Ip = cp(1060),
-       Sp = cp(1361),
-       xp = cp(3607),
-       Lp = cp(131),
-       Yp = cp(3641),
-       Dp = cp(3628),
-       Ap = cp(1112);
+     var wQ = XQ(1581),
+       qQ = XQ(61),
+       TQ = XQ(1226),
+       zQ = XQ(1162),
+       sQ = XQ(1154),
+       FQ = XQ(2156),
+       PQ = XQ(1567),
+       gQ = XQ(1391),
+       JQ = XQ(1152),
+       rQ = XQ(26),
+       IQ = XQ(1507),
+       jQ = XQ(1094),
+       BQ = XQ(2732),
+       yQ = XQ(1601),
+       VQ = XQ(1145);
+     const DQ = [{
+ ... (17 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/104.js` (Changed code · before: `L18-L42` → after: `L42-L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864) · [After (L42-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/104.js#L42-L110) · [Before (L18-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/104.js#L18-L42)

```diff
-     function Pp(pp) {
-       let {
-         game: ip
-       } = pp;
-       const cp = (0, Lp.is99NightsCrazyGamesBundle)() ? "large" : "small",
-         Op = (0, Yp.f)(ip, cp),
-         Pp = (0, xp.d)(Op),
-         Wp = void 0 !== Pp.blurhash;
-       return (0, Ap.jsxs)("div", {
-         className: "SchematicImageContainer",
-         children: [Pp.isLoading && !Wp && (0, Ap.jsx)(Sp.c, {
-           loaderType: "Secondary"
-         }), !Pp.failed && (null !== Pp.src || Wp) && (0, Ap.jsx)("div", {
-           className: op()("SchematicImage", Dp.g, {
-             SchematicImageFadeIn: Pp.fadeIn && !Wp
-           }),
- ... (9 more removed lines; see GitHub link above)
+     function GQ() {
+       const {
+         t: QQ
+       } = (0, TQ.C)(), WQ = (0, PQ.useNavigatePreserveSearch)(), XQ = (0, wQ.w)(), {
+         isUserContextUpdating: GQ
+       } = (0, zQ.c)(), UQ = (0, FQ.b)(), bQ = (0, sQ.i)(), vQ = (dQ = XQ.pathname).startsWith(yQ.q) ? null : dQ.startsWith(pQ.docs) ? "docs" : dQ.startsWith(pQ.leaderboard) ? "leaderboard" : "myGames";
+       var dQ;
+       const HQ = function(QQ) {
+         if (!QQ.startsWith(yQ.q)) return {
+           title: "studio:leaveStudio",
+           icon: "left-from-bracket",
+           to: "/"
+         };
+         const WQ = (0, PQ.getPreviousLocation)();
+         return {
+           title: "general:back",
+ ... (53 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/105.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/105.js` (22 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff)

#### 1. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/105.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/105.js#L4)

```diff
-   5025: (pp, ip, cp) => {
+   5256: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/105.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/105.js#L8)

```diff
-     var Op = cp(1049),
+     var wQ = XQ(1081),
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L10-L16` → after: `L10-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L10-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/105.js#L10-L16) · [Before (L10-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/105.js#L10-L16)

```diff
-       Ip = cp(1060),
-       Sp = cp(1361),
-       xp = cp(3607),
-       Lp = cp(131),
-       Yp = cp(3641),
-       Dp = cp(3628),
-       Ap = cp(1112);
+       TQ = XQ(1094),
+       zQ = XQ(1391),
+       sQ = XQ(3751),
+       FQ = XQ(158),
+       PQ = XQ(3793),
+       gQ = XQ(3776),
+       JQ = XQ(1145);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L23-L24` → after: `L23-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/105.js#L23-L24) · [Before (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/105.js#L23-L24)

```diff
-         Op = (0, Yp.f)(ip, cp),
-         Pp = (0, xp.d)(Op),
+         wQ = (0, PQ.g)(WQ, XQ),
+         rQ = (0, sQ.g)(wQ),
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L28` → after: `L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/105.js#L28) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/105.js#L28)

```diff
-         children: [Pp.isLoading && !Wp && (0, Ap.jsx)(Sp.c, {
+         children: [rQ.isLoading && !IQ && (0, JQ.jsx)(zQ.e, {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L31` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/105.js#L31) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/105.js#L31)

```diff
-           className: op()("SchematicImage", Dp.g, {
+           className: qQ()("SchematicImage", gQ.i, {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L34-L35` → after: `L34-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/105.js#L34-L35) · [Before (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/105.js#L34-L35)

```diff
-           style: (0, Dp.f)(Pp),
-           children: (0, Ap.jsx)(Dp.c, {
+           style: (0, gQ.h)(rQ),
+           children: (0, JQ.jsx)(gQ.e, {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L47` → after: `L47-L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L47-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/105.js#L47-L229) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/105.js#L47)

```diff
-   5152: (pp, ip, cp) => {
+   5248: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       default: () => HQ
+     });
+     XQ(5250);
+     var wQ = XQ(61),
+       qQ = XQ(1081),
+       TQ = XQ.n(qQ),
+       zQ = XQ(382),
+       sQ = XQ(1057),
+       FQ = XQ(1257),
+       PQ = XQ(1226),
+       gQ = XQ(1162),
+       JQ = XQ(1548),
+       rQ = XQ(5256),
+       IQ = XQ(1507),
+ ... (167 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L49` → after: `L231-L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L231-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/105.js#L231-L232) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/105.js#L49)

```diff
-       b: () => wp
+       b: () => zQ,
+       e: () => TQ
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L51-L63` → after: `L234-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L234-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/105.js#L234-L235) · [Before (L51-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/105.js#L51-L63)

```diff
-     var Op = cp(62),
-       op = cp(1049),
-       Ip = cp.n(op),
-       Sp = cp(5076),
-       xp = cp(1361),
-       Lp = cp(1201),
-       Yp = cp(3250),
-       Dp = cp(3412),
-       Ap = cp(1060),
-       Pp = cp(3259),
-       Wp = cp(5156),
-       yp = cp(5173),
-       Up = cp(1112);
+     var wQ = XQ(1601),
+       qQ = XQ(1145);
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L67-L71` → after: `L239-L240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L239-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/105.js#L239-L240) · [Before (L67-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/105.js#L67-L71)

```diff
-         folderName: ip,
-         onTexturePackUpdated: op,
-         disabled: wp = !1,
-         maxFileSizeMb: vp,
-         packOwner: tp
+         thumbnail: WQ,
+         name: XQ
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L127-L140` → after: `L243-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L243-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/105.js#L243-L245) · [Before (L127-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/105.js#L127-L140)

```diff
-         className: "CustomTexturePackContainer",
-         children: [(0, Up.jsxs)("div", {
-           className: "CustomTextureWarning",
-           children: [Hp("settingsMenu:customTextureWarning"), ".", (0, Up.jsx)("br", {}), Hp("settingsMenu:viewDocumentation"), ":", " ", (0, Up.jsx)("a", {
-             href: "https://github.com/Bloxdy/texturePacks",
-             target: "_blank",
-             rel: "noreferrer",
-             children: "github.com/Bloxdy/texturePacks"
-           })]
-         }), jp && (0, Up.jsxs)("div", {
-           className: "CustomTextureError",
-           children: [Hp("general:error"), ": ", jp]
-         }), mp && (0, Up.jsx)("div", {
-           className: "CustomTextureError",
+         className: "StudioTableGameCell",
+         children: [(0, qQ.jsx)("div", {
+           className: "StudioTableThumbnail",
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L142-L182` → after: `L247-L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L247-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/105.js#L247-L249) · [Before (L142-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/105.js#L142-L182)

```diff
-         }), (0, Up.jsxs)("div", {
-           ...Cp({
-             className: Ip()("CustomTextureFolderUpload", {
-               ActiveDrag: Xp,
-               Disabled: wp
-             })
-           }),
-           children: [(0, Up.jsx)("input", {
-             ...Ep({
-               webkitdirectory: "true"
-             })
-           }), dp && (0, Up.jsx)("div", {
-             className: "CustomTextureFolderUploadLoading",
-             children: (0, Up.jsx)(xp.c, {})
-           }), !dp && !Xp && ip && (0, Up.jsxs)(Up.Fragment, {
-             children: [(0, Up.jsx)("div", {
- ... (25 more removed lines; see GitHub link above)
+         }), (0, qQ.jsx)("span", {
+           className: "StudioTableGameName",
+           children: XQ
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L205-L207` → after: `L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/105.js#L256) · [Before (L205-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/105.js#L205-L207)

```diff
-         disabled: ip,
-         openFolderPicker: cp,
-         onFiles: Sp
+         game: WQ
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L209-L234` → after: `L258-L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L258-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/105.js#L258-L261) · [Before (L209-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/105.js#L209-L234)

```diff
-       const {
-         t: Dp
-       } = (0, Ip.H)(), Ap = (0, Op.useRef)(null);
-       return (0, Lp.jsxs)("div", {
-         className: "PackPickButtons",
-         "data-pad-mouse-only": !0,
-         children: [(0, Lp.jsx)("input", {
-           ref: Ap,
-           type: "file",
-           accept: ".zip,application/zip",
-           hidden: !0,
-           onChange: function(pp) {
-             const ip = Array.from(pp.target.files);
-             pp.target.value = "", Sp(ip)
-           }
-         }), Yp() && (0, Lp.jsx)(op.f, {
- ... (10 more removed lines; see GitHub link above)
+       return (0, qQ.jsx)("img", {
+         className: "StudioTableThumbnailImage",
+         src: (0, wQ.h)(WQ),
+         alt: ""
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L238` → after: `L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/105.js#L265) · [Before (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/105.js#L238)

```diff
-   5113: (pp, ip, cp) => {
+   5263: (QQ, WQ, XQ) => {
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L240-L243` → after: `L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/105.js#L267) · [Before (L240-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/105.js#L240-L243)

```diff
-       b: () => yp,
-       f: () => Hp,
-       i: () => Up,
-       l: () => tp
+       c: () => sQ
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L245-L250` → after: `L269-L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L269-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/105.js#L269-L270) · [Before (L245-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/105.js#L245-L250)

```diff
-     var Op = cp(62),
-       op = cp(5122),
-       Ip = cp(4462),
-       Sp = cp(1387),
-       xp = cp(5146),
-       Lp = cp(1049),
+     var wQ = XQ(61),
+       qQ = XQ(1081),
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L252-L255` → after: `L272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/105.js#L272) · [Before (L252-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/105.js#L252-L255)

```diff
-       Dp = cp(1372),
-       Ap = cp(1765),
-       Pp = cp(5149),
-       Wp = cp(1112);
+       zQ = XQ(1145);
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L259-L265` → after: `L276-L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L276-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/105.js#L276-L280) · [Before (L259-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/105.js#L259-L265)

```diff
-         label: ip,
-         onClick: cp,
-         checked: Op,
-         circleInfoText: op,
-         className: xp,
-         disabled: Lp,
-         note: Dp
+         columns: WQ,
+         rows: XQ,
+         getRowKey: qQ,
+         renderRow: sQ,
+         className: FQ
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L267-L299` → after: `L282-L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L282-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/105.js#L282-L293) · [Before (L267-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/105.js#L267-L299)

```diff
-       return (0, Wp.jsxs)("div", {
-         "aria-disabled": Lp || void 0,
-         "data-pad-focusable": !0,
-         className: Yp()("SettingBox CheckboxContainer", {
-           [xp]: xp,
-           SettingBoxDisabled: Lp
-         }),
-         onClick: () => {
-           Lp || cp(!Op)
-         },
-         children: [(0, Wp.jsxs)("div", {
-           className: "CheckboxInputAndText",
-           children: [(0, Wp.jsx)("label", {
-             className: "CheckboxClickableLabel",
-             children: (0, Wp.jsx)(Ip.b, {
-               className: "SettingsCheckbox",
- ... (17 more removed lines; see GitHub link above)
+       return (0, zQ.jsxs)("table", {
+         className: TQ()("Table", FQ),
+         children: [(0, zQ.jsx)("thead", {
+           children: (0, zQ.jsx)("tr", {
+             children: WQ.map((QQ => (0, zQ.jsx)("th", {
+               children: QQ.header
+             }, QQ.key)))
+           })
+         }), (0, zQ.jsx)("tbody", {
+           children: XQ.map((QQ => (0, zQ.jsx)(wQ.Fragment, {
+             children: sQ(QQ)
+           }, qQ(QQ))))
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L495-L984` → after: `L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/105.js#L298) · [Before (L495-L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/105.js#L495-L984)

```diff
-   5107: (pp, ip, cp) => {
-     cp.d(ip, {
-       d: () => wp,
-       f: () => vp
-     });
-     var Op = cp(3250),
-       op = cp(2187),
-       Ip = cp(62),
-       Sp = cp(1049),
-       xp = cp.n(Sp),
-       Lp = cp(1361),
-       Yp = cp(3246),
-       Dp = cp(1372),
-       Ap = cp(5113),
-       Pp = cp(5152),
-       Wp = cp(657),
- ... (474 more removed lines; see GitHub link above)
+   5250: () => {}
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/106.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/106.js` (31 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66)

#### 1. `bundles/preprod.bloxd.io/chunks/js/106.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/106.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/106.js#L4)

```diff
-   6648: (pp, ip, cp) => {
+   5256: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/106.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/106.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/106.js#L6)

```diff
-       d: () => tp
+       b: () => rQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/106.js` (Changed code · before: `L8-L16` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/106.js#L8) · [Before (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/106.js#L8-L16)

```diff
-     var Op = cp(62),
-       op = cp(1480),
-       Ip = cp(1520),
-       Sp = cp(3587),
-       xp = cp(1141),
-       Lp = cp(1361),
-       Yp = cp(1387),
-       Dp = cp(1060),
-       Ap = cp(1049),
+     var wQ = XQ(1081),
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/106.js` (Changed code · before: `L18-L19` → after: `L10-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66) · [After (L10-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/106.js#L10-L16) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/106.js#L18-L19)

```diff
-       Wp = cp(6644),
-       yp = cp(1112);
+       TQ = XQ(1094),
+       zQ = XQ(1391),
+       sQ = XQ(3751),
+       FQ = XQ(158),
+       PQ = XQ(3793),
+       gQ = XQ(3776),
+       JQ = XQ(1145);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/106.js` (Changed code · before: `L23-L24` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/106.js#L20) · [Before (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/106.js#L23-L24)

```diff
-         info: ip,
-         className: cp
+         game: WQ
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/106.js` (Changed code · before: `L26-L29` → after: `L22-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66) · [After (L22-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/106.js#L22-L25) · [Before (L26-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/106.js#L26-L29)

```diff
-       const {
-         statusText: Op,
-         rowText: op
-       } = (0, Wp.f)();
+       const XQ = (0, FQ.is99NightsCrazyGamesBundle)() ? "large" : "small",
+         wQ = (0, PQ.g)(WQ, XQ),
+         rQ = (0, sQ.g)(wQ),
+         IQ = void 0 !== rQ.blurhash;
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/106.js` (Changed code · before: `L31-L61` → after: `L27-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66) · [After (L27-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/106.js#L27-L42) · [Before (L31-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/106.js#L31-L61)

```diff
-         className: Pp()("GameApprovalInfoDetails", cp),
-         children: [(0, yp.jsxs)("div", {
-           className: Pp()("GameApprovalInfoSummary", ip.overallPassed ? "Passed" : "Failed"),
-           children: [(0, yp.jsx)(Dp.d, {
-             name: ip.overallPassed ? "circle-check" : "circle-xmark"
-           }), (0, yp.jsx)("span", {
-             children: Op(ip.status)
-           })]
-         }), ip.rows.length > 0 && (0, yp.jsx)("div", {
-           className: "GameApprovalInfoRows",
-           children: ip.rows.map((pp => {
-             const {
-               label: ip,
-               value: cp
-             } = op(pp);
-             return (0, yp.jsxs)("div", {
- ... (15 more removed lines; see GitHub link above)
+         className: "SchematicImageContainer",
+         children: [rQ.isLoading && !IQ && (0, JQ.jsx)(zQ.e, {
+           loaderType: "Secondary"
+         }), !rQ.failed && (null !== rQ.src || IQ) && (0, JQ.jsx)("div", {
+           className: qQ()("SchematicImage", gQ.i, {
+             SchematicImageFadeIn: rQ.fadeIn && !IQ
+           }),
+           style: (0, gQ.h)(rQ),
+           children: (0, JQ.jsx)(gQ.e, {
+             image: rQ
+           })
+         }), rQ.failed && (0, JQ.jsx)("div", {
+           className: "SchematicImageError",
+           children: (0, JQ.jsx)(TQ.d, {
+             name: "face-dizzy"
+           })
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/106.js` (Changed code · before: `L65-L66` → after: `L46-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66) · [After (L46-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/106.js#L46-L95) · [Before (L65-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/106.js#L65-L66)

```diff
-     var wp = cp(1201),
-       vp = cp(1372);
+   },
+   6908: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       default: () => kQ
+     });
+     XQ(5250);
+     var wQ = XQ(61),
+       qQ = XQ(1081),
+       TQ = XQ.n(qQ),
+       zQ = XQ(382),
+       sQ = XQ(1057),
+       FQ = XQ(1257),
+       PQ = XQ(1046),
+       gQ = XQ(1226),
+       JQ = XQ(1548),
+       rQ = XQ(3801),
+ ... (34 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/106.js` (Changed code · before: `L69-L71` → after: `L98-L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66) · [After (L98-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/106.js#L98-L105) · [Before (L69-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/106.js#L69-L71)

```diff
-       vp.NotificationProvider.showCustomPopup({
-         body: () => (0, yp.jsx)(Hp, {
-           ...pp
+       let {
+         position: WQ
+       } = QQ;
+       const XQ = dQ.e[WQ];
+       return (0, aQ.jsxs)("td", {
+         className: TQ()("StudioLeaderboardPosition", {
+           StudioLeaderboardTopPosition: void 0 !== XQ,
+           [`StudioLeaderboardTopPosition${WQ}`]: void 0 !== XQ
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/106.js` (Changed code · before: `L73-L75` → after: `L107-L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66R107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66) · [After (L107-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/106.js#L107-L131) · [Before (L73-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/106.js#L73-L75)

```diff
-         middleScreenPopupClassName: "ApprovalInfoPopup",
-         onClose: () => {},
-         unlockPointerKey: "approvalInfoPopup"
+         children: [void 0 !== XQ && (0, aQ.jsx)("img", {
+           className: "StudioLeaderboardPositionItem",
+           src: XQ,
+           alt: ""
+         }), WQ]
+       })
+     }
+ 
+     function uQ(QQ) {
+       let {
+         discoverability: WQ
+       } = QQ;
+       const {
+         playsPerDay: XQ,
+         avgPlaytimeMinutes: qQ,
+         retention: TQ
+ ... (9 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/106.js` (Changed code · before: `L81-L83` → after: `L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66R137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66) · [After (L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/106.js#L137) · [Before (L81-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/106.js#L81-L83)

```diff
-         schematicId: ip,
-         canOverride: cp,
-         onApprovalChanged: Ap
+         discoverability: WQ
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/106.js` (Changed code · before: `L87-L93` → after: `L149-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66) · [After (L149-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/106.js#L149-L163) · [Before (L87-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/106.js#L87-L93)

```diff
-       } = (0, wp.H)(), {
-         userContext: Wp
-       } = (0, xp.b)(), vp = (0, Sp.b)(), [tp, Hp] = (0, Op.useState)(null), [dp, ep] = (0, Op.useState)(null), [jp, kp] = (0, Op.useState)(!1), mp = (0, Op.useCallback)((() => {
-         ep(null), Ip.b.getGameApprovalInfo(Wp, ip).then((pp => {
-           vp.current && Hp(pp)
-         })).catch((pp => {
-           console.error("Failed to get game approval info", pp), vp.current && ep(Pp("studio:approvalLoadFailed"))
+       } = (0, gQ.C)(), qQ = (0, GQ.useNavigatePreserveSearch)(), {
+         userContext: TQ,
+         isUserContextUpdating: dQ
+       } = (0, IQ.c)(), EQ = (0, bQ.m)(), [kQ, fQ] = (0, UQ.p)(), SQ = (tQ = kQ.get(iQ), lQ.some((QQ => QQ.scope === tQ)) ? tQ : AQ);
+       var tQ;
+       const oQ = function(QQ) {
+           return zQ.W.includes(QQ) ? QQ : null
+         }(kQ.get(cQ)),
+         eQ = (0, UQ.f)(kQ.get(UQ.e)),
+         [nQ, xQ] = (0, wQ.useState)(null),
+         [YQ, NQ] = (0, wQ.useState)(!1);
+ 
+       function ZQ(QQ) {
+         fQ((WQ => {
+           (0, UQ.i)(WQ, iQ, QQ.scope === AQ ? null : QQ.scope), (0, UQ.i)(WQ, cQ, QQ.category), (0, UQ.m)(WQ, QQ.page)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/106.js` (Changed code · before: `L95` → after: `L165-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66) · [After (L165-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/106.js#L165-L168) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/106.js#L95)

```diff
-       }), [Wp, ip, vp, Pp]);
+       }
+       const OQ = !dQ && TQ.playerHasRank("developer"),
+         KQ = OQ && "allGames" === SQ,
+         mQ = OQ && "dormantGames" === SQ;
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/106.js` (Changed code · before: `L97-L101` → after: `L170-L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66R170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66) · [After (L170-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/106.js#L170-L187) · [Before (L97-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/106.js#L97-L101)

```diff
-         mp()
-       }), [mp]);
-       const Rp = pp => {
-         jp || (kp(!0), Ip.b.setGameApproval(Wp, ip, pp).then((() => {
-           null === Ap || void 0 === Ap || Ap(), vp.current && mp()
+         if (dQ) return;
+         let QQ = !1;
+         return xQ(null), NQ(!1), JQ.e.getPublishedGamePreviews(TQ, {
+           searchQuery: null,
+           pageNumber: eQ,
+           pageSize: hQ,
+           onlyFavouriteGames: !1,
+           onlyOwnedGames: !1,
+           onlyApprovedGames: !1,
+           schematicIdsToExclude: [],
+           gameCategories: null !== oQ ? [oQ] : [],
+           upAndComing: !1,
+           dormantGames: mQ,
+           sortByEngagementScore: !0,
+           firstPartyGameNames: KQ ? PQ.b : void 0,
+           includeOwners: !0
+ ... (2 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/106.js` (Changed code · before: `L103-L107` → after: `L189-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66R189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66) · [After (L189-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/106.js#L189-L250) · [Before (L103-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/106.js#L103-L107)

```diff
-           console.error("Failed to set game approval", pp)
-         })).finally((() => {
-           vp.current && kp(!1)
-         })))
-       };
+           console.error("Failed to load the studio leaderboard", WQ), QQ || NQ(!0)
+         })), () => {
+           QQ = !0
+         }
+       }), [dQ, KQ, mQ, oQ, eQ, TQ]);
+       const MQ = null !== (QQ = null === nQ || void 0 === nQ ? void 0 : nQ.results) && void 0 !== QQ ? QQ : null,
+         QW = function(QQ, WQ, XQ) {
+           const [qQ, TQ] = (0, wQ.useState)({}), zQ = XQ ? (null !== QQ && void 0 !== QQ ? QQ : []).flatMap((QQ => "firstPartyGame" === QQ.type ? [(0, sQ.d)(QQ.gameNameWithVariation, !0)] : [])).join(",") : "", FQ = (0, wQ.useMemo)((() => "" === zQ ? [] : zQ.split(",")), [zQ]);
+           return (0, wQ.useEffect)((() => {
+             if (0 === FQ.length) return void TQ({});
+             let QQ = !1;
+             return JQ.e.getGamesByAnalyticsIds(WQ, FQ).then((WQ => {
+               QQ || TQ(WQ)
+             })).catch((QQ => {
+               console.error("Failed to load first party discoverability for the studio leaderboard", QQ)
+             })), () => {
+ ... (46 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/106.js` (Changed code · before: `L109-L115` → after: `L252-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66R252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66) · [After (L252-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/106.js#L252-L269) · [Before (L109-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/106.js#L109-L115)

```diff
-         className: "ApprovalInfoPopupBody",
-         children: [(0, yp.jsx)("h1", {
-           className: "ApprovalInfoPopupTitle",
-           children: Pp("studio:approvalTitle")
-         }), !tp && !dp && (0, yp.jsx)("div", {
-           className: "ApprovalInfoPopupLoader",
-           children: (0, yp.jsx)(Lp.c, {})
+         className: "StudioPage StudioLeaderboard",
+         children: [(0, aQ.jsx)("div", {
+           className: "StudioPageHeader",
+           children: (0, aQ.jsx)("h1", {
+             className: "StudioPageTitle",
+             children: XQ("studio:leaderboard")
+           })
+         }), (0, aQ.jsxs)("div", {
+           className: "StudioLeaderboardBanner",
+           children: [!mQ && (0, aQ.jsx)("div", {
+             children: XQ("studio:leaderboardBanner")
+           }), mQ && (0, aQ.jsx)("div", {
+             children: XQ("studio:leaderboardDormantBanner")
+           }), (0, aQ.jsx)("div", {
+             children: XQ("studio:leaderboardMetricsBanner", {
+               days: RQ
+ ... (2 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/106.js` (Changed code · before: `L117-L136` → after: `L271-L278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66R271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66) · [After (L271-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/106.js#L271-L278) · [Before (L117-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/106.js#L117-L136)

```diff
-           className: "ApprovalInfoPopupError",
-           children: dp
-         }), tp && (0, yp.jsxs)(yp.Fragment, {
-           children: [(0, yp.jsx)(Up, {
-             info: tp
-           }), cp && (0, yp.jsxs)("div", {
-             className: "ApprovalInfoPopupActions",
-             children: [!0 !== tp.manualOverride && (0, yp.jsx)(Yp.f, {
-               tooltipInner: (0, yp.jsx)("div", {
-                 children: Pp("studio:approvalApproveTooltip")
-               }),
-               children: (0, yp.jsxs)(op.o, {
-                 className: "ApprovalInfoPopupActionButton",
-                 onClick: () => {
-                   Rp(!0)
-                 },
- ... (4 more removed lines; see GitHub link above)
+           className: "StudioLeaderboardScopes",
+           children: lQ.map((QQ => (0, aQ.jsx)(yQ.T, {
+             active: SQ === QQ.scope,
+             onClick: () => {
+               ZQ({
+                 scope: QQ.scope,
+                 category: oQ,
+                 page: 1
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/106.js` (Changed code · before: `L138-L150` → after: `L280-L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66R280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66) · [After (L280-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/106.js#L280-L291) · [Before (L138-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/106.js#L138-L150)

```diff
-             }), !1 !== tp.manualOverride && (0, yp.jsx)(Yp.f, {
-               tooltipInner: (0, yp.jsx)("div", {
-                 children: Pp("studio:approvalDenyTooltip")
-               }),
-               children: (0, yp.jsxs)(op.K, {
-                 className: "ApprovalInfoPopupActionButton",
-                 onClick: () => {
-                   Rp(!1)
-                 },
-                 disabled: jp,
-                 children: [(0, yp.jsx)(Dp.d, {
-                   name: "xmark"
-                 }), " ", Pp("studio:approvalDeny")]
+             },
+             children: XQ(QQ.title)
+           }, QQ.scope)))
+         }), (0, aQ.jsxs)("div", {
+           className: "StudioLeaderboardCategories",
+           children: [(0, aQ.jsx)(yQ.T, {
+             active: null === oQ,
+             onClick: () => {
+               ZQ({
+                 scope: SQ,
+                 category: null,
+                 page: 1
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/106.js` (Changed code · before: `L152-L164` → after: `L293-L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66R293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66) · [After (L293-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/106.js#L293-L301) · [Before (L152-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/106.js#L152-L164)

```diff
-             }), null !== tp.manualOverride && (0, yp.jsx)(Yp.f, {
-               tooltipInner: (0, yp.jsx)("div", {
-                 children: Pp("studio:approvalClearOverrideTooltip")
-               }),
-               children: (0, yp.jsxs)(op.f, {
-                 className: "ApprovalInfoPopupActionButton",
-                 onClick: () => {
-                   Rp(null)
-                 },
-                 disabled: jp,
-                 children: [(0, yp.jsx)(Dp.d, {
-                   name: "arrows-rotate"
-                 }), " ", Pp("studio:approvalClearOverride")]
+             },
+             children: XQ("studio:leaderboardAllCategories")
+           }), zQ.W.map((QQ => (0, aQ.jsx)(yQ.T, {
+             active: oQ === QQ,
+             onClick: () => {
+               ZQ({
+                 scope: SQ,
+                 category: QQ,
+                 page: 1
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/106.js` (Changed code · before: `L166-L167` → after: `L303-L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66R303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66) · [After (L303-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/106.js#L303-L393) · [Before (L166-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/106.js#L166-L167)

```diff
-             })]
-           })]
+             },
+             children: (0, zQ.hb)(QQ)
+           }, QQ)))]
+         }), XW && (0, aQ.jsx)("div", {
+           className: "StudioPageLoader AnimFadeIn",
+           children: (0, aQ.jsx)(pQ.e, {})
+         }), YQ && (0, aQ.jsx)("div", {
+           className: "StudioPageMessage AnimFadeIn",
+           children: XQ("studio:failedToLoadLeaderboard")
+         }), wW && (0, aQ.jsx)("div", {
+           className: "StudioPageMessage AnimFadeIn",
+           children: XQ("studio:leaderboardEmpty")
+         }), !XW && !YQ && !wW && (0, aQ.jsx)("div", {
+           className: "StudioLeaderboardTableScroll AnimFadeIn",
+           children: (0, aQ.jsx)(DQ.c, {
+             className: "StudioTable",
+ ... (75 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/106.js` (Changed code · before: `L172` → after: `L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66R398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66) · [After (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/106.js#L398) · [Before (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/106.js#L172)

```diff
-   6644: (pp, ip, cp) => {
+   5270: (QQ, WQ, XQ) => {
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/106.js` (Changed code · before: `L175-L256` → after: `L401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66R401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66) · [After (L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/106.js#L401) · [Before (L175-L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/106.js#L175-L256)

```diff
-       f: () => Sp
-     });
-     var Op = cp(337),
-       op = cp(1201);
-     const Ip = {
-       manuallyApproved: "studio:approvalStatusManuallyApproved",
-       manuallyAndAutoApproved: "studio:approvalStatusManuallyAndAutoApproved",
-       manuallyDenied: "studio:approvalStatusManuallyDenied",
-       autoApproved: "studio:approvalStatusAutoApproved",
-       notApproved: "studio:approvalStatusNotApproved",
-       notIndexed: "studio:approvalStatusNotIndexed"
-     };
- 
-     function Sp() {
-       const {
-         t: pp,
- ... (66 more removed lines; see GitHub link above)
+       e: () => TQ
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/106.js` (Changed code · before: `L258-L520` → after: `L403-L404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66R403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66) · [After (L403-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/106.js#L403-L404) · [Before (L258-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/106.js#L258-L520)

```diff
-     var Op = cp(62),
-       op = cp(1543),
-       Ip = cp(1049),
-       Sp = cp.n(Ip),
-       xp = cp(1024),
-       Lp = cp(1234),
-       Yp = cp(1014),
-       Dp = cp(337),
-       Ap = cp(1569),
-       Pp = cp(1005),
-       Wp = cp(1201),
-       yp = cp(1141),
-       Up = cp(322),
-       wp = cp(1520),
-       vp = cp(25),
-       tp = cp(1956),
- ... (247 more removed lines; see GitHub link above)
+     var wQ = XQ(1601),
+       qQ = XQ(1145);
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/106.js` (Changed code · before: `L524-L529` → after: `L408-L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66R408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66) · [After (L408-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/106.js#L408-L409) · [Before (L524-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/106.js#L524-L529)

```diff
-         icon: ip,
-         label: cp,
-         onClick: Op,
-         disabled: op = !1,
-         active: Ip = !1,
-         small: Sp = !1
+         thumbnail: WQ,
+         name: XQ
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/106.js` (Changed code · before: `L531-L546` → after: `L411-L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66R411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66) · [After (L411-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/106.js#L411-L419) · [Before (L531-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/106.js#L531-L546)

```diff
-       return (0, Wi.jsx)(ap.f, {
-         tooltipInner: cp,
-         placement: "top",
-         delayShow: 0,
-         children: (0, Wi.jsxs)(Hp.S, {
-           className: Sp ? "StudioSmallIconButton" : void 0,
-           active: Ip,
-           disabled: op,
-           onClick: Op,
-           children: [(0, Wi.jsx)(dp.d, {
-             name: ip
-           }), (0, Wi.jsx)("span", {
-             className: "VisuallyHidden",
-             children: cp
-           })]
-         })
+       return (0, qQ.jsxs)("div", {
+         className: "StudioTableGameCell",
+         children: [(0, qQ.jsx)("div", {
+           className: "StudioTableThumbnail",
+           children: WQ
+         }), (0, qQ.jsx)("span", {
+           className: "StudioTableGameName",
+           children: XQ
+         })]
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/106.js` (Changed code · before: `L553-L555` → after: `L425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66R425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66) · [After (L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/106.js#L425) · [Before (L553-L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/106.js#L553-L555)

```diff
-         fileNameParts: ip,
-         getTable: cp,
-         disabled: Op = !1
+         game: WQ
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/106.js` (Changed code · before: `L557-L573` → after: `L427-L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66R427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66) · [After (L427-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/106.js#L427-L430) · [Before (L557-L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/106.js#L557-L573)

```diff
-       const {
-         t: op
-       } = (0, Wp.H)();
-       return (0, Wi.jsx)(yi, {
-         small: !0,
-         icon: "download",
-         label: op("Export Data"),
-         disabled: Op,
-         onClick: () => {
-           const pp = cp().map((pp => pp.map(Li).join(","))).join("\r\n");
-           (0, Pi.downloadBlob)(new Blob([`${Ui}${pp}`], {
-             type: "text/csv;charset=utf-8"
-           }), function(pp) {
-             const ip = pp.map(Ai).filter((pp => "" !== pp)).join(" - ");
-             return `${""===ip?"export":ip}.csv`
-           }(ip))
- ... (1 more removed lines; see GitHub link above)
+       return (0, qQ.jsx)("img", {
+         className: "StudioTableThumbnailImage",
+         src: (0, wQ.h)(WQ),
+         alt: ""
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/106.js` (Changed code · before: `L577-L655` → after: `L439-L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66R439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66) · [After (L439-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/106.js#L439-L441) · [Before (L577-L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/106.js#L577-L655)

```diff
-       hour: "2-digit",
-       minute: "2-digit",
-       hourCycle: "h23"
-     };
- 
-     function ti(pp) {
-       let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-       return new Date(pp).toLocaleDateString(void 0, {
-         day: "numeric",
-         month: "short",
-         timeZone: ip ? "UTC" : void 0
-       })
-     }
- 
-     function Hi(pp) {
-       return new Date(pp).toLocaleTimeString(void 0, vi)
- ... (63 more removed lines; see GitHub link above)
+       1: XQ(6814),
+       2: XQ(6823),
+       3: XQ(6827)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/106.js` (Changed code · before: `L659-L682` → after: `L454-L459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66R454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66) · [After (L454-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/106.js#L454-L459) · [Before (L659-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/106.js#L659-L682)

```diff
-       return Math.max(Mi, Math.ceil(pp * Ri) + qi)
-     }
-     const Qi = [1, 2, 5],
-       Ji = 6;
- 
-     function Bi(pp, ip) {
-       if (!(pp > 0)) return;
-       const cp = 10 ** Math.floor(Math.log10(pp / Ji)),
-         Op = ip ? cp : Math.max(1, cp);
-       let op;
-       for (const xp of [Op, 10 * Op])
-         for (const cp of Qi) {
-           const Op = cp * xp;
-           if (!ip && !Number.isInteger(Op)) continue;
-           const Ip = Math.ceil(pp / Op - 1e-9);
-           Ip > Ji || (void 0 === op || Ip * Op < op.intervals * op.step) && (op = {
- ... (8 more removed lines; see GitHub link above)
+       let {
+         columns: WQ,
+         rows: XQ,
+         getRowKey: qQ,
+         renderRow: sQ,
+         className: FQ
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/106.js` (Changed code · before: `L684-L725` → after: `L461-L474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66R461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66) · [After (L461-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/106.js#L461-L474) · [Before (L684-L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/106.js#L684-L725)

```diff
-       return Array.from({
-         length: Sp + 1
-       }, ((pp, ip) => Number((ip * Ip).toPrecision(12))))
-     }
- 
-     function Ni(pp, ip) {
-       const cp = pp.reduce(((pp, ip) => pp + ip), 0);
-       if (0 === cp) return null;
-       let Op = cp;
-       const op = pp.map(((pp, ip) => {
-         const op = {
-           minute: ip,
-           percent: Op / cp * 100,
-           sessions: Op
-         };
-         return Op -= pp, op
- ... (26 more removed lines; see GitHub link above)
+       return (0, zQ.jsxs)("table", {
+         className: TQ()("Table", FQ),
+         children: [(0, zQ.jsx)("thead", {
+           children: (0, zQ.jsx)("tr", {
+             children: WQ.map((QQ => (0, zQ.jsx)("th", {
+               children: QQ.header
+             }, QQ.key)))
+           })
+         }), (0, zQ.jsx)("tbody", {
+           children: XQ.map((QQ => (0, zQ.jsx)(wQ.Fragment, {
+             children: sQ(QQ)
+           }, qQ(QQ))))
+         })]
+       })
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/106.js` (Changed code · before: `L727-L31561` → after: `L476-L485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66R476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66) · [After (L476-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/106.js#L476-L485) · [Before (L727-L31561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/106.js#L727-L31561)

```diff
- 
-     function Fi(pp) {
-       return `${pp.toFixed(1)}%`
-     }
- 
-     function gi(pp, ip) {
-       return pp >= ip ? `${pp}m+` : `${pp}m`
-     }
- 
-     function Gi(pp) {
-       return Math.round(pp).toLocaleString("en-US")
-     }
- 
-     function ri(pp) {
-       return {
-         avgDailyPlays: 0 === pp.activeDays ? null : pp.plays / pp.activeDays,
- ... (30819 more removed lines; see GitHub link above)
+   },
+   5250: () => {},
+   6814: QQ => {
+     QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGVJREFUGJVjYKAZ4LF0YGBgYPiPhrErsn9/8v/Tv5//P/37+b/9+5NYFaMowqaYCaby2Z4fDAwMDAwO684xOKw7hyLGwMDAwIhmKlxSyoWD4aCgOVwNskK4YgYGBhRFuAB2HxMLAPX+QYFf3uJZAAAAAElFTkSuQmCC"
+   },
+   6823: QQ => {
+     QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAKhJREFUOI1jYBhxgJGQAntrHgYGBgaGg0e//EcWDw0NZWRgYGBYvXo1inom6rkNAjBciMtFv18bQhhCEBexMqtgdSlNXYjXRbgAzKUws6juQhZ0AUIu+7HWA6+BtA9DuAthLtr/GatG3rA7WM2iXRiG+AkwMjAwMLCKnsfqUnQX2Whx … [truncated]
+   },
+   6827: QQ => {
+     QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAK9JREFUOI3l0zEKwjAYhuE3QY+hWEWQ4lwovYE4WY+pDg7iBURwlrYgWtGD1EGCtk3aJZn6jV9+fh5CAp2LaBuY+zMArklW/PfreCUANttdaV7as31TE5pEyf0BwNQbAdCXUit1KmwUmaKkapd1Ya9atMn2h2PjQvdClVv+BCBNM+15 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/107.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/107.js` (82 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L4)

```diff
-   5052: (pp, ip, cp) => {
+   5256: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6-L8` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L6) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L6-L8)

```diff
-       e: () => Ap,
-       i: () => Dp,
-       l: () => Pp
+       b: () => rQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L10-L12` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L8) · [Before (L10-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L10-L12)

```diff
-     cp(5054);
-     var Op = cp(1201),
-       op = cp(1049),
+     var wQ = XQ(1081),
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14-L17` → after: `L10-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L10-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L10-L16) · [Before (L14-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L14-L17)

```diff
-       Sp = cp(1387),
-       xp = (cp(62), cp(4462)),
-       Lp = cp(1060),
-       Yp = cp(1112);
+       TQ = XQ(1094),
+       zQ = XQ(1391),
+       sQ = XQ(3751),
+       FQ = XQ(158),
+       PQ = XQ(3793),
+       gQ = XQ(3776),
+       JQ = XQ(1145);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21-L26` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L20) · [Before (L21-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L21-L26)

```diff
-         children: ip,
-         label: cp,
-         className: op,
-         circleInfoText: xp,
-         disabled: Dp,
-         onLabelClick: Ap
+         game: WQ
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L28-L38` → after: `L22-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L22-L25) · [Before (L28-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L28-L38)

```diff
-       const {
-         t: Pp
-       } = (0, Op.H)(), Wp = (0, Yp.jsxs)("div", {
-         className: Ip()("Label", {
-           ClickableLabel: void 0 !== Ap
-         }),
-         onClick: Ap,
-         children: [Pp(cp), xp && (0, Yp.jsx)(Lp.d, {
-           name: "circle-info"
-         })]
-       });
+       const XQ = (0, FQ.is99NightsCrazyGamesBundle)() ? "large" : "small",
+         wQ = (0, PQ.g)(WQ, XQ),
+         rQ = (0, sQ.g)(wQ),
+         IQ = void 0 !== rQ.blurhash;
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L40-L47` → after: `L27-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L27-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L27-L32) · [Before (L40-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L40-L47)

```diff
-         className: Ip()("LabeledInput", {
-           [op]: op,
-           DisabledLabelInput: Dp
-         }),
-         children: [xp && (0, Yp.jsx)(Sp.f, {
-           tooltipInner: (0, Yp.jsx)("div", {
-             className: "LabeledInputTooltip",
-             children: Pp(xp)
+         className: "SchematicImageContainer",
+         children: [rQ.isLoading && !IQ && (0, JQ.jsx)(zQ.e, {
+           loaderType: "Secondary"
+         }), !rQ.failed && (null !== rQ.src || IQ) && (0, JQ.jsx)("div", {
+           className: qQ()("SchematicImage", gQ.i, {
+             SchematicImageFadeIn: rQ.fadeIn && !IQ
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L49-L95` → after: `L34-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L34-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L34-L43) · [Before (L49-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L49-L95)

```diff
-           children: Wp
-         }), !xp && Wp, ip]
-       })
-     }
- 
-     function Ap(pp) {
-       let {
-         checked: ip,
-         setChecked: cp
-       } = pp;
-       return (0, Yp.jsx)("div", {
-         className: "OtherInput ClickableOtherInput",
-         "data-pad-focusable": !0,
-         onClick: pp => {
-           cp(!ip)
-         },
- ... (31 more removed lines; see GitHub link above)
+           style: (0, gQ.h)(rQ),
+           children: (0, JQ.jsx)(gQ.e, {
+             image: rQ
+           })
+         }), rQ.failed && (0, JQ.jsx)("div", {
+           className: "SchematicImageError",
+           children: (0, JQ.jsx)(TQ.d, {
+             name: "face-dizzy"
+           })
+         })]
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L99` → after: `L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L47) · [Before (L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L99)

```diff
-   5061: (pp, ip, cp) => {
+   5384: (QQ, WQ, XQ) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L101` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L49) · [Before (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L101)

```diff
-       e: () => Yp
+       d: () => yQ
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L103` → after: `L51-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L51-L52) · [Before (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L103)

```diff
-     var Op = cp(1049),
+     var wQ = XQ(61),
+       qQ = XQ(1081),
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L105-L136` → after: `L54-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L54-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L54-L63) · [Before (L105-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L105-L136)

```diff
-       Ip = cp(4719),
-       Sp = cp(1201),
-       xp = cp(1112);
-     const Lp = [...Ip.h, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];
- 
-     function Yp(pp) {
-       const {
-         disabled: ip,
-         hideWrapper: cp
-       } = pp, {
-         t: Op
-       } = (0, Sp.H)(), Yp = pp.advancedMode ? Lp.map((ip => [ip, pp.callbacks[ip]])) : Ip.h.map((ip => [ip, pp.callbacks[ip]])), Ap = (0, xp.jsx)("div", {
-         className: op()("PluginsGrid", {
-           SectionBody: !cp
-         }),
-         children: Yp.map((pp => {
- ... (16 more removed lines; see GitHub link above)
+       zQ = XQ(5310),
+       sQ = XQ(1391),
+       FQ = XQ(1226),
+       PQ = XQ(3433),
+       gQ = XQ(3566),
+       JQ = XQ(1094),
+       rQ = XQ(3435),
+       IQ = XQ(5386),
+       jQ = XQ(5398),
+       BQ = XQ(1145);
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L140-L145` → after: `L67-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L67-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L67-L71) · [Before (L140-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L140-L145)

```diff
-         plugin: ip,
-         callbacks: {
-           isEnabled: cp,
-           eC: Op
-         },
-         disabled: Ip
+         folderName: WQ,
+         onTexturePackUpdated: qQ,
+         disabled: yQ = !1,
+         maxFileSizeMb: VQ,
+         packOwner: DQ
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L149-L197` → after: `L75-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L75-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L75-L112) · [Before (L149-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L149-L197)

```diff
-       } = (0, Sp.H)(), Yp = cp();
-       return (0, xp.jsxs)("div", {
-         className: op()("PluginCard", {
-           PluginCardEnabled: Yp,
-           PluginCardDisabledForm: Ip
-         }),
-         "data-pad-focusable": !0,
-         "aria-disabled": Ip || void 0,
-         onClick: () => {
-           Ip || Op(!Yp)
-         },
-         children: [(0, xp.jsx)("div", {
-           className: "PluginCardIcon",
-           children: (0, xp.jsx)("img", {
-             src: `/textures/games/classic/customGames/${ip}.png`,
-             alt: ip
- ... (33 more removed lines; see GitHub link above)
+       } = (0, FQ.C)(), [GQ, UQ] = (0, wQ.useState)(!1), [bQ, vQ] = (0, wQ.useState)(null), [dQ, HQ] = (0, wQ.useState)(null), aQ = (0, wQ.useRef)(null);
+       async function lQ(QQ) {
+         UQ(!0);
+         try {
+           const WQ = await (0, PQ.o)(QQ);
+           if ("customGame" === DQ && (0, gQ.l)(WQ)) return void vQ(pQ(gQ.c));
+           if (void 0 !== VQ) {
+             const QQ = JSON.stringify(WQ).length / 1048576;
+             if (QQ > VQ) return void vQ(pQ("customTexturePack:packTooBig", {
+               size: QQ.toFixed(1),
+               max: VQ
+             }))
+           }
+           vQ(null), HQ(null), qQ(WQ), aQ.current = WQ,
+             function(QQ, WQ) {
+               const wQ = QQ.modelOverrides;
+ ... (22 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L199-L283` → after: `L114-L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L114-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L114-L125) · [Before (L199-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L199-L283)

```diff
-   },
-   5048: (pp, ip, cp) => {
-     cp.d(ip, {
-       j: () => Si,
-       d: () => Ii,
-       f: () => oi,
-       k: () => xi
-     });
-     var Op = cp(62),
-       op = cp(1372),
-       Ip = cp(1480),
-       Sp = cp(1692),
-       xp = cp(1201),
-       Lp = cp(1361),
-       Yp = cp(1387),
-       Dp = cp(1060),
- ... (69 more removed lines; see GitHub link above)
+       const {
+         getRootProps: hQ,
+         getInputProps: iQ,
+         isDragActive: cQ,
+         open: AQ
+       } = (0, zQ.c)({
+         onDrop: lQ,
+         noClick: !0,
+         noKeyboard: !0,
+         useFsAccessApi: !1,
+         disabled: yQ
+       });
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L285-L287` → after: `L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L127) · [Before (L285-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L285-L287)

```diff
-         className: Wp()("ManageField", {
-           ManageFieldDisabled: Op
-         }),
+         className: "CustomTexturePackContainer",
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L289-L295` → after: `L129-L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L129-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L129-L134) · [Before (L289-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L289-L295)

```diff
-           className: "ManageFieldText",
-           children: [(0, dp.jsx)("div", {
-             className: "ManageFieldLabel",
-             children: ip
-           }), (0, dp.jsx)("div", {
-             className: "ManageFieldCaption",
-             children: cp
+           className: "CustomTextureWarning",
+           children: [pQ("settingsMenu:customTextureWarning"), ".", (0, BQ.jsx)("br", {}), pQ("settingsMenu:viewDocumentation"), ":", " ", (0, BQ.jsx)("a", {
+             href: "https://github.com/Bloxdy/texturePacks",
+             target: "_blank",
+             rel: "noreferrer",
+             children: "github.com/Bloxdy/texturePacks"
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L297-L298` → after: `L136-L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L136-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L136-L140) · [Before (L297-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L297-L298)

```diff
-         }), (0, dp.jsx)("div", {
-           className: "ManageFieldControl",
+         }), bQ && (0, BQ.jsxs)("div", {
+           className: "CustomTextureError",
+           children: [pQ("general:error"), ": ", bQ]
+         }), dQ && (0, BQ.jsx)("div", {
+           className: "CustomTextureError",
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L349-L357` → after: `L143-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L143-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L143-L158) · [Before (L349-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L349-L357)

```diff
-           className: "ManageSettingsGrid",
-           children: [(0, dp.jsxs)(ep, {
-             icon: "globe",
-             title: Lp("worldBuilder:worldRulesSection"),
-             disabled: !Sp,
-             children: [(0, dp.jsx)(kp, {
-               label: Lp("classic:defaultGamemode"),
-               caption: Lp("classic:defaultGamemodeDescription"),
-               disabled: Yp,
+           ...hQ({
+             className: TQ()("CustomTextureFolderUpload", {
+               ActiveDrag: cQ,
+               Disabled: yQ
+             })
+           }),
+           children: [(0, BQ.jsx)("input", {
+             ...iQ({
+               webkitdirectory: "true"
+             })
+           }), GQ && (0, BQ.jsx)("div", {
+             className: "CustomTextureFolderUploadLoading",
+             children: (0, BQ.jsx)(sQ.e, {})
+           }), !GQ && !cQ && WQ && (0, BQ.jsxs)(BQ.Fragment, {
+             children: [(0, BQ.jsx)("div", {
+               className: "CustomTextureFolderUploadIcon Active",
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L359-L414` → after: `L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L160) · [Before (L359-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L359-L414)

```diff
-                 controlClassName: "ManageDropdown",
-                 options: Up.E.map((pp => ({
-                   value: pp,
-                   label: yp.o[pp]
-                 }))),
-                 value: Op.defaultGamemode,
-                 onChange: pp => op("defaultGamemode", pp.value)
-               })
-             }), (0, dp.jsx)(kp, {
-               label: Lp("classic:voidDeathHeight"),
-               caption: Lp("classic:voidDeathHeightDescription"),
-               disabled: Yp,
-               children: (0, dp.jsxs)("div", {
-                 className: "ManageNumberField",
-                 children: [(0, dp.jsx)("input", {
-                   type: "number",
- ... (40 more removed lines; see GitHub link above)
+                 name: "folder-image"
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L417-L433` → after: `L166-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L166-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L166-L168) · [Before (L417-L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L417-L433)

```diff
-           }), (0, dp.jsxs)(ep, {
-             icon: "user-group",
-             title: Lp("worldBuilder:playerAndLobbySection"),
-             disabled: !Sp,
-             children: [(0, dp.jsx)(kp, {
-               label: Lp("classic:disableKeepInventory"),
-               caption: Lp("classic:disableKeepInventoryDescription"),
-               disabled: Yp,
-               children: (0, dp.jsx)(vp.l, {
-                 checked: Op.disableKeepInventory,
-                 setChecked: pp => op("disableKeepInventory", pp),
-                 disabled: Yp
-               })
-             }), (0, dp.jsx)(kp, {
-               label: Lp("classic:persistInventory"),
-               caption: Lp("classic:persistInventoryDescription"),
- ... (1 more removed lines; see GitHub link above)
+           }), !GQ && (cQ || !WQ) && (0, BQ.jsxs)(BQ.Fragment, {
+             children: [(0, BQ.jsx)("div", {
+               className: "CustomTextureFolderUploadIcon",
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L435-L468` → after: `L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L170) · [Before (L435-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L435-L468)

```diff
-                 controlClassName: "ManageDropdown",
-                 options: Up.k.map((pp => ({
-                   value: pp,
-                   label: yp.d[pp]
-                 }))),
-                 value: Op.persistInventory,
-                 onChange: pp => op("persistInventory", pp.value)
-               })
-             }), (0, dp.jsx)(kp, {
-               label: Lp("classic:persistWorld"),
-               caption: Lp("classic:persistWorldDescription"),
-               disabled: Yp,
-               children: (0, dp.jsx)(vp.l, {
-                 checked: Op.persistWorld,
-                 setChecked: pp => op("persistWorld", pp),
-                 disabled: Yp
- ... (18 more removed lines; see GitHub link above)
+                 name: "up-from-bracket"
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L471-L477` → after: `L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L176) · [Before (L471-L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L471-L477)

```diff
-           })]
-         }), (0, dp.jsx)(ep, {
-           icon: "layer-group",
-           title: Lp("worldBuilder:pluginsSection"),
-           disabled: !Sp,
-           children: (0, dp.jsx)(Hp.e, {
-             callbacks: Dp,
+           }), !GQ && (0, BQ.jsx)(jQ.d, {
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L479-L481` → after: `L178-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L178-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L178-L182) · [Before (L479-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L479-L481)

```diff
-             advancedMode: !0,
-             hideWrapper: !0
-           })
+             openFolderPicker: AQ,
+             onFiles: QQ => {
+               lQ(QQ)
+             }
+           })]
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L485-L529` → after: `L186-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L186-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L186-L200) · [Before (L485-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L485-L529)

```diff
-     var Rp = cp(5067),
-       qp = cp(4462),
-       Mp = cp(1520),
-       Cp = cp(3587),
-       Ep = cp(1141),
-       Xp = cp(5025),
-       lp = cp(5076),
-       Qp = cp(1482);
-     const Jp = 50,
-       Bp = .3;
-     async function Np(pp) {
-       const ip = await
-       function(pp) {
-         return new Promise(((ip, cp) => {
-           const Op = new FileReader;
-           Op.onload = () => ip(Op.result), Op.onerror = cp, Op.readAsDataURL(pp)
- ... (29 more removed lines; see GitHub link above)
+   },
+   5398: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       d: () => gQ,
+       e: () => PQ
+     });
+     var wQ = XQ(61),
+       qQ = XQ(1507),
+       TQ = XQ(1226),
+       zQ = XQ(105),
+       sQ = XQ(3408),
+       FQ = XQ(1145);
+ 
+     function PQ() {
+       return !(0, zQ.isMobile)()
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L540-L543` → after: `L205-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L205-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L205-L207) · [Before (L540-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L540-L543)

```diff
-         schematicId: cp,
-         hasReadUploadPolicy: op,
-         onPolicyValidationError: Lp,
-         onThumbnailReady: Yp
+         disabled: WQ,
+         openFolderPicker: XQ,
+         onFiles: zQ
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L547-L571` → after: `L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L211) · [Before (L547-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L547-L571)

```diff
-       } = (0, xp.H)(), [yp, Up] = (0, Op.useState)(null), [wp, vp] = (0, Op.useState)(""), [tp, Hp] = (0, Op.useState)(""), [ep, jp] = (0, Op.useState)(!0), [kp, mp] = (0, Op.useState)(!1), Rp = (0, Op.useRef)(!1), [qp, Mp] = (0, Op.useState)(null), [Cp, Ep] = (0, Op.useState)(!1 … [truncated]
-         getRootProps: Bp,
-         getInputProps: bp,
-         isDragActive: hp
-       } = (0, lp.c)({
-         accept: {
-           "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp"]
-         },
-         multiple: !1,
-         onDrop: async pp => {
-           if (0 === pp.length) return;
-           const ip = pp[0],
-             cp = ++Jp.current;
-           Mp(null), Ep(!1), Up(null), vp(ip.name);
-           try {
-             const pp = await Np(ip);
- ... (9 more removed lines; see GitHub link above)
+       } = (0, TQ.C)(), JQ = (0, wQ.useRef)(null);
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L573-L665` → after: `L213-L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L213-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L213-L224) · [Before (L573-L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L573-L665)

```diff
-         className: "ThumbnailUploadContainer",
-         children: [(0, dp.jsxs)("div", {
-           ...Bp({
-             className: Wp()("ThumbnailUploadDropzone", {
-               ActiveDrag: hp,
-               ValidationError: Gp
-             })
-           }),
-           children: [(0, dp.jsx)("input", {
-             ...bp()
-           }), !hp && np ? (0, dp.jsxs)(dp.Fragment, {
-             children: [(0, dp.jsxs)("div", {
-               className: "ThumbnailAspectPreviews",
-               children: [(0, dp.jsxs)("div", {
-                 className: "ThumbnailAspectPreview",
-                 children: [(0, dp.jsx)("div", {
- ... (77 more removed lines; see GitHub link above)
+         className: "PackPickButtons",
+         "data-pad-mouse-only": !0,
+         children: [(0, FQ.jsx)("input", {
+           ref: JQ,
+           type: "file",
+           accept: ".zip,application/zip",
+           hidden: !0,
+           onChange: function(QQ) {
+             const WQ = Array.from(QQ.target.files);
+             QQ.target.value = "", zQ(WQ)
+           }
+         }), PQ() && (0, FQ.jsx)(qQ.h, {
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L667-L678` → after: `L226-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L226-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L226-L231) · [Before (L667-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L667-L678)

```diff
-           className: "ThumbnailUploadButton",
-           onClick: async () => {
-             if (Qp(!0), !Rp.current && yp && gp && op) {
-               Rp.current = !0, mp(!0), Mp(null);
-               try {
-                 await Yp(yp.base64Jpg, Fp, ep ? cp : null)
-               } catch (pp) {
-                 Mp(pp.errorMessageForUser ? Pp(pp.errorMessageForUser, pp.errorMessageTranslationParams) : Pp("thumbnail:failedToUploadImage"))
-               } finally {
-                 Rp.current = !1, mp(!1)
-               }
-             } else op || Lp()
+           onClick: XQ,
+           children: gQ("general:chooseFolder")
+         }), (0, FQ.jsx)(qQ.h, {
+           disabled: WQ,
+           onClick: () => {
+             (0, sQ.d)(JQ.current)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L680` → after: `L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L233) · [Before (L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L680)

```diff
-           children: Pp(kp ? "thumbnail:processing" : "thumbnail:uploadThumbnail")
+           children: gQ("general:chooseZip")
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L684` → after: `L237-L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L237-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L237-L255) · [Before (L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L684)

```diff
-     const ap = 2e3;
+   },
+   5349: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       e: () => jQ,
+       g: () => pQ,
+       h: () => BQ,
+       i: () => DQ
+     });
+     var wQ = XQ(61),
+       qQ = XQ(5351),
+       TQ = XQ(4677),
+       zQ = XQ(1416),
+       sQ = XQ(5376),
+       FQ = XQ(1081),
+       PQ = XQ.n(FQ),
+       gQ = XQ(1404),
+ ... (3 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L688-L691` → after: `L259-L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L259-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L259-L265) · [Before (L688-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L688-L691)

```diff
-         schematicId: ip,
-         ownedThumbnailCount: cp,
-         onClose: op,
-         onThumbnailReady: Ip
+         label: WQ,
+         onClick: XQ,
+         checked: wQ,
+         circleInfoText: qQ,
+         className: sQ,
+         disabled: FQ,
+         note: gQ
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L736-L737` → after: `L268-L272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L268-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L268-L272) · [Before (L736-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L736-L737)

```diff
-         className: Wp()("ThumbnailUploaderInner", {
-           ThumbnailUploaderSuccess: Yp
+         "aria-disabled": FQ || void 0,
+         "data-pad-focusable": !0,
+         className: PQ()("SettingBox CheckboxContainer", {
+           [sQ]: sQ,
+           SettingBoxDisabled: FQ
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L739-L771` → after: `L274-L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L274-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L274-L286) · [Before (L739-L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L739-L771)

```diff
-         children: [Yp && (0, dp.jsxs)("div", {
-           className: "ThumbnailUploadSuccessOverlay",
-           children: [(0, dp.jsxs)("div", {
-             className: "ThumbnailUploadSuccessIcon FullyFancyText AnimFadeInScaleUp",
-             children: [(0, dp.jsx)(Dp.d, {
-               name: "check"
-             }), (0, dp.jsx)(Qp.b, {})]
-           }), (0, dp.jsx)("div", {
-             className: "ThumbnailUploadSuccessText AnimFadeInScaleUp",
-             children: Sp("thumbnail:thumbnailUploaded")
-           })]
-         }), (0, dp.jsx)("h1", {
-           className: "SchematicPopupTitle",
-           children: Sp("thumbnail:uploadThumbnail")
-         }), (0, dp.jsxs)("div", {
-           className: "ThumbnailUploaderBody",
- ... (17 more removed lines; see GitHub link above)
+         onClick: () => {
+           FQ || XQ(!wQ)
+         },
+         children: [(0, IQ.jsxs)("div", {
+           className: "CheckboxInputAndText",
+           children: [(0, IQ.jsx)("label", {
+             className: "CheckboxClickableLabel",
+             children: (0, IQ.jsx)(TQ.b, {
+               className: "SettingsCheckbox",
+               checked: wQ,
+               disabled: FQ,
+               onChange: () => {}
+             })
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L773-L842` → after: `L288-L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L288-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L288-L294) · [Before (L773-L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L773-L842)

```diff
-             className: "ThumbnailUploadPolicy",
-             children: [(0, dp.jsx)("h3", {
-               className: "ThumbnailUploadPolicyTitle",
-               children: Sp("thumbnail:uploadPolicy")
-             }), (0, dp.jsxs)("ul", {
-               className: "ThumbnailUploadPolicyList",
-               children: [(0, dp.jsxs)("li", {
-                 className: "ThumbnailUploadPolicyItem Allowed",
-                 children: [(0, dp.jsx)(Dp.d, {
-                   name: "check"
-                 }), (0, dp.jsx)("span", {
-                   children: Sp("thumbnail:policyFollowGuidelines")
-                 })]
-               }), (0, dp.jsxs)("li", {
-                 className: "ThumbnailUploadPolicyItem Allowed",
-                 children: [(0, dp.jsx)(Dp.d, {
- ... (54 more removed lines; see GitHub link above)
+             className: "CheckboxText",
+             children: [WQ, qQ && (0, IQ.jsx)("span", {
+               onClick: QQ => QQ.stopPropagation(),
+               children: (0, IQ.jsx)(zQ.b, {
+                 className: "SettingsTextInputCircleInfo",
+                 hoverInfo: qQ
+               })
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L883-L886` → after: `L306-L319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L306-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L306-L319) · [Before (L883-L886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L883-L886)

```diff
-         schematicData: Sp,
-         updateSchematicData: Yp,
-         publishFormEnabled: Ap,
-         onClose: Pp
+         name: WQ,
+         onChange: XQ,
+         min: qQ,
+         max: TQ,
+         step: sQ,
+         initValue: FQ,
+         circleInfoText: gQ,
+         format: JQ,
+         className: rQ,
+         padStep: jQ,
+         disabled: BQ = !1,
+         selectableMax: yQ,
+         cappedNote: DQ,
+         onChangeComplete: pQ
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L888-L964` → after: `L321-L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L321-L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L321-L335) · [Before (L888-L964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L888-L964)

```diff
-       const {
-         t: yp
-       } = (0, xp.H)(), {
-         userContext: Up,
-         isUserContextUpdating: wp
-       } = (0, Ep.b)(), vp = (0, Cp.b)(), [tp, Hp] = (0, Op.useState)([]), [ep, jp] = (0, Op.useState)([]), [kp, mp] = (0, Op.useState)(!0), [Rp, qp] = (0, Op.useState)(null !== (ip = Sp.customThumbnailId) && void 0 !== ip ? ip : null), [lp, Qp] = (0, Op.useState)(null), Jp = (0,  … [truncated]
- 
-       function hp(pp, ip) {
-         fp.current && (clearTimeout(fp.current), fp.current = null), Qp(pp), null !== pp && ip && (fp.current = setTimeout((() => {
-           Qp(null), fp.current = null
-         }), 5e3))
-       }(0, Op.useEffect)((() => () => {
-         clearTimeout(Tp.current), clearTimeout(fp.current)
-       }), []);
-       const ap = (0, Op.useCallback)((() => {
-         mp(!0), Mp.b.getOwnedThumbnails(Up).then((pp => {
- ... (61 more removed lines; see GitHub link above)
+       const [GQ, UQ] = (0, wQ.useState)(FQ), bQ = (0, wQ.useRef)(FQ);
+       (0, wQ.useEffect)((() => {
+         bQ.current = FQ, UQ(FQ)
+       }), [FQ]);
+       const vQ = void 0 !== yQ && yQ < TQ,
+         dQ = vQ ? {
+           "--slider-selectable": (yQ - qQ) / (TQ - qQ)
+         } : void 0;
+       return (0, IQ.jsxs)("div", {
+         className: PQ()("SettingBox SettingsSliderDiv", {
+           [rQ]: rQ,
+           SettingBoxDisabled: BQ,
+           SliderCapped: vQ
+         }),
+         style: dQ,
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L966-L969` → after: `L337-L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L337-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L337-L340) · [Before (L966-L969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L966-L969)

```diff
-           className: "SectionTitle",
-           children: [yp("thumbnail:gameThumbnail"), lp && (0, dp.jsx)("span", {
-             className: Wp()("ThumbnailActionMsg", `ThumbnailActionMsg--${lp.type}`),
-             children: lp.text
+           className: "SliderText",
+           children: [`${WQ}: ${JQ?JQ(GQ):GQ}`, gQ && (0, IQ.jsx)(zQ.b, {
+             className: "SettingsTextInputCircleInfo",
+             hoverInfo: gQ
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L972-L1082` → after: `L343-L359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L343-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L343-L359) · [Before (L972-L1082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L972-L1082)

```diff
-           className: "SectionBody",
-           children: (0, dp.jsxs)("div", {
-             className: "ThumbnailGrid",
-             children: [(0, dp.jsxs)("div", {
-               className: Wp()("ThumbnailGridItem ThumbnailGridItemDefault", {
-                 ThumbnailGridItemSelected: null === Rp
-               }),
-               onClick: () => zp(null),
-               children: [(0, dp.jsx)(Xp.b, {
-                 game: {
-                   schematicId: Sp.schematicId,
-                   imageBlurhash: Sp.imageBlurhash
-                 }
-               }), (0, dp.jsx)("div", {
-                 className: "ThumbnailGridItemLabel ThumbnailDefaultLabel",
-                 children: yp("general:default")
- ... (95 more removed lines; see GitHub link above)
+           className: "SliderDiv",
+           children: (0, IQ.jsx)(VQ, {
+             value: GQ,
+             min: qQ,
+             max: TQ,
+             step: sQ,
+             onChange: QQ => {
+               if (vQ && QQ >= yQ && GQ === yQ) return;
+               const WQ = vQ ? Math.min(QQ, yQ) : QQ;
+               bQ.current = WQ, UQ(WQ), XQ(WQ)
+             },
+             onChangeComplete: pQ && (() => {
+               pQ(bQ.current)
+             }),
+             format: JQ,
+             padStep: jQ,
+ ... (1 more added lines; see GitHub link above)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1090-L1093` → after: `L372-L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L372-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L372-L387) · [Before (L1090-L1093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L1090-L1093)

```diff
-         rejectedThumbnails: ip,
-         userContext: cp,
-         isMountedRef: op,
-         onAcknowledged: Sp
+         value: XQ,
+         min: TQ,
+         max: zQ,
+         step: sQ,
+         onChange: FQ,
+         orientation: PQ,
+         reverse: gQ,
+         setIsChanging: JQ,
+         tooltip: jQ,
+         labels: BQ,
+         handleLabel: VQ,
+         format: DQ,
+         onChangeStart: pQ,
+         onChangeComplete: GQ,
+         padStep: UQ,
+         disabled: bQ = !1
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1095-L1102` → after: `L389-L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L389-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L389-L413) · [Before (L1095-L1102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L1095-L1102)

```diff
-       const {
-         t: Yp
-       } = (0, xp.H)(), [Ap, Pp] = (0, Op.useState)(!1), [Wp, yp] = (0, Op.useState)(!1), Up = function(pp) {
-         const ip = new Map;
-         for (const cp of pp) {
-           const pp = cp.rejectionPolicyId,
-             Op = ip.get(pp);
-           Op ? Op.push(cp) : ip.set(pp, [cp])
+       const vQ = (0, wQ.useRef)(null),
+         dQ = (0, wQ.useRef)(null);
+       (0, wQ.useLayoutEffect)((() => {
+         var QQ, WQ, XQ;
+         const wQ = null !== (QQ = null === (WQ = vQ.current) || void 0 === WQ ? void 0 : WQ.querySelector(".rangeslider")) && void 0 !== QQ ? QQ : null;
+         null === wQ || void 0 === wQ || wQ.setAttribute("data-pad-slider", ""), null === wQ || void 0 === wQ || wQ.setAttribute("data-pad-focusable", ""), null === wQ || void 0 === wQ || null === (XQ = wQ.querySelector(".rangeslider__handle")) || void 0 === XQ || XQ.setAttribute( … [truncated]
+       }), []), (0, wQ.useLayoutEffect)((() => {
+         var QQ, WQ;
+         bQ ? null === (QQ = dQ.current) || void 0 === QQ || QQ.setAttribute("aria-disabled", "true") : null === (WQ = dQ.current) || void 0 === WQ || WQ.removeAttribute("aria-disabled")
+       }), [bQ]);
+       const HQ = (null !== (WQ = String(sQ).split(".")[1]) && void 0 !== WQ ? WQ : "").length,
+         aQ = QQ => {
+           const WQ = Number((Math.round((QQ - TQ) / sQ) * sQ + TQ).toFixed(HQ));
+           return Math.min(zQ, Math.max(TQ, WQ))
+         },
+         lQ = (0, wQ.useRef)(GQ);
+ ... (9 more added lines; see GitHub link above)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1104-L1168` → after: `L415-L450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L415-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L415-L450) · [Before (L1104-L1168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L1104-L1168)

```diff
-         return ip
-       }(ip);
-       return (0, dp.jsxs)("div", {
-         className: "ThumbnailRejectionNotice",
-         children: [(0, dp.jsxs)("div", {
-           className: "ThumbnailRejectionNoticeTitle",
-           children: [(0, dp.jsx)(Dp.d, {
-             name: "triangle-exclamation"
-           }), " ", Yp("thumbnail:thumbnailsRejected"), " ", (0, dp.jsx)(Dp.d, {
-             name: "triangle-exclamation"
-           })]
-         }), (0, dp.jsx)("div", {
-           className: "ThumbnailRejectionNoticeSubtitle",
-           children: Yp("thumbnail:thumbnailsRejectedDescription")
-         }), (0, dp.jsx)("div", {
-           className: "ThumbnailRejectionNoticeList",
- ... (49 more removed lines; see GitHub link above)
+       }), []);
+       const hQ = (0, wQ.useRef)(!1);
+       return (0, rQ.i)(dQ, {
+         adjust: QQ => {
+           if (bQ) return;
+           const WQ = null !== UQ && void 0 !== UQ ? UQ : Math.max(sQ, Math.round((zQ - TQ) / 20 / sQ) * sQ),
+             wQ = aQ(XQ + QQ * WQ * (gQ ? -1 : 1));
+           wQ !== XQ && (null === pQ || void 0 === pQ || pQ(), FQ(wQ), null === GQ || void 0 === GQ || GQ())
+         },
+         setFraction: QQ => {
+           if (bQ) return;
+           const WQ = aQ(TQ + (gQ ? 1 - QQ : QQ) * (zQ - TQ));
+           WQ !== XQ && (hQ.current || (hQ.current = !0, null === pQ || void 0 === pQ || pQ()), FQ(WQ))
+         },
+         endDrag: () => {
+           hQ.current && (hQ.current = !1, null === GQ || void 0 === GQ || GQ())
+ ... (20 more added lines; see GitHub link above)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1170-L1173` → after: `L452-L455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L452-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L452-L455) · [Before (L1170-L1173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L1170-L1173)

```diff
-           disabled: !Ap || Wp,
-           className: "ThumbnailRejectionNoticeAcceptButton",
-           children: Wp ? (0, dp.jsx)(Lp.c, {}) : Yp("general:accept")
-         })]
+           onChangeComplete: () => {
+             null === JQ || void 0 === JQ || JQ(!1), null === GQ || void 0 === GQ || GQ()
+           }
+         })
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1179-L1181` → after: `L472-L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L472-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L472-L476) · [Before (L1179-L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L1179-L1181)

```diff
-         thumbnailId: ip,
-         thumbnailName: cp,
-         onClose: Op
+         label: WQ,
+         options: XQ,
+         value: wQ,
+         onChange: qQ,
+         circleInfoText: TQ
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1187-L1215` → after: `L479-L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L479-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L479-L484) · [Before (L1187-L1215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L1187-L1215)

```diff
-         className: "ThumbnailDeleteConfirm",
-         children: [(0, dp.jsx)("div", {
-           className: "ThumbnailDeleteConfirmTitle",
-           children: op("thumbnail:deleteThumbnail")
-         }), (0, dp.jsxs)("div", {
-           className: "ThumbnailDeleteConfirmImageContainer",
-           children: [(0, dp.jsx)("img", {
-             className: "ThumbnailDeleteConfirmImage",
-             src: `${Fp.clientSideServerUrls.s3Url}/customThumbnails/${ip}.jpg`,
-             alt: "Thumbnail to delete"
-           }), (0, dp.jsx)("div", {
-             className: "ThumbnailGridItemLabel",
-             children: cp
-           })]
-         }), (0, dp.jsx)("div", {
-           className: "ThumbnailDeleteConfirmSubtitle",
- ... (13 more removed lines; see GitHub link above)
+         className: "SettingBox SegmentedSettingRow",
+         children: [(0, IQ.jsxs)("div", {
+           className: "SliderText",
+           children: [WQ, TQ && (0, IQ.jsx)(zQ.b, {
+             className: "SettingsTextInputCircleInfo",
+             hoverInfo: TQ
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1220-L1223` → after: `L494-L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L494-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L494-L512) · [Before (L1220-L1223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L1220-L1223)

```diff
-     var zp = cp(2187),
-       sp = cp(5103),
-       Kp = cp(5107),
-       Vp = cp(5152);
+   },
+   5346: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       c: () => yQ,
+       e: () => VQ
+     });
+     var wQ = XQ(3433),
+       qQ = XQ(2226),
+       TQ = XQ(61),
+       zQ = XQ(1081),
+       sQ = XQ.n(zQ),
+       FQ = XQ(1391),
+       PQ = XQ(3424),
+       gQ = XQ(1404),
+       JQ = XQ(5349),
+       rQ = XQ(5384),
+ ... (3 more added lines; see GitHub link above)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1227-L1230` → after: `L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L517) · [Before (L1227-L1230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L1227-L1230)

```diff
-         schematicData: ip,
-         setTexturePack: cp,
-         initializeTexturePack: op,
-         publishFormEnabled: Ip
+         setApplySettingsCallback: XQ
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1232-L1234` → after: `L519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L519) · [Before (L1232-L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L1232-L1234)

```diff
-       const {
-         t: Sp
-       } = (0, xp.H)(), [Lp, Yp] = (0, Op.useState)(null), [Dp, Ap] = (0, Op.useState)(null), [Pp, yp] = (0, Op.useState)(!1), Up = (0, Cp.b)(), wp = Ip && !Pp, vp = ip.customTexturePackKey;
+       const [, zQ] = (0, TQ.useReducer)((QQ => QQ + 1), 0), sQ = (0, TQ.useRef)(!1), FQ = (0, TQ.useRef)(null);
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1236-L1238` → after: `L521-L530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L521-L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L521-L530) · [Before (L1236-L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L1236-L1238)

```diff
-       function tp(pp) {
-         var ip;
-         Yp(pp.metaData.id), Ap(null !== (ip = pp.metaData.fromFolderName) && void 0 !== ip ? ip : null), (pp.metaData.id !== zp.q.CUSTOM || pp.metaData.fromFolderName) && cp(pp)
+       function yQ(QQ, WQ) {
+         PQ.d.setFromJson(QQ, "player");
+         const wQ = PQ.d.saveTexturePack();
+         if (IQ.x) {
+           const QQ = PQ.d.toJson();
+           wQ.then((WQ => {
+             WQ && (0, jQ.c)(QQ)
+           }))
+         } else sQ.current ||= WQ, FQ.current !== PQ.d.getId() || PQ.d.getId() === qQ.i.CUSTOM && sQ.current ? XQ((() => JQ.i)) : XQ(null);
+         zQ()
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1240-L1255` → after: `L532-L555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L532-L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L532-L555) · [Before (L1240-L1255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L1240-L1255)

```diff
-       return (0, Op.useEffect)((() => {
-         vp && (yp(!0), (0, sp.d)(vp).then((pp => {
-           var ip;
-           Up.current && (pp ? (Yp(pp.metaData.id), Ap(null !== (ip = pp.metaData.fromFolderName) && void 0 !== ip ? ip : null), op(pp)) : console.error(`No texture pack at ${vp}`))
-         })).catch((pp => {
-           console.error("Error fetching texture pack: ", pp)
-         })).finally((() => {
-           yp(!1)
-         })))
-       }), [vp, op, Up]), (0, dp.jsxs)("div", {
-         className: "BloxdForm TexturePackSection",
-         children: [(0, dp.jsx)("div", {
-           className: "SectionTitle",
-           children: Sp("customTexturePack:customTexturePack")
-         }), (0, dp.jsxs)("div", {
-           className: "TexturePackList",
+       async function DQ(QQ) {
+         if (PQ.d.getId() !== QQ.metaData.id) {
+           if (PQ.d.getId() === qQ.i.CUSTOM && PQ.d.getFromFolderName()) {
+             const QQ = gQ.NotificationProvider.showPromptPopup({
+               title: "settingsMenu:loseChangesTitle",
+               subtitle: "settingsMenu:loseChangesSubtitle",
+               confirmText: "general:continue",
+               destructive: !0,
+               confirmTooltip: "",
+               cancelText: "general:cancel",
+               cancelTooltip: ""
+             });
+             if (!0 !== await QQ.getResult()) return
+           }
+           yQ(QQ, !1)
+         }
+ ... (8 more added lines; see GitHub link above)
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1257-L1262` → after: `L557-L566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L557-L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L557-L566) · [Before (L1257-L1262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L1257-L1262)

```diff
-             className: Wp()("TexturePack", {
-               Selected: null === Lp && !Pp,
-               Disabled: !wp
-             }),
-             onClick: () => {
-               wp && (Yp(null), cp(null), Ap(null))
+             className: "TexturePackList",
+             children: GQ.map((QQ => (0, BQ.jsx)(VQ, {
+               id: QQ,
+               isSelected: QQ === PQ.d.getId(),
+               setSelected: DQ
+             }, QQ)))
+           }), PQ.d.getId() === qQ.i.CUSTOM && (0, BQ.jsx)(rQ.d, {
+             folderName: null !== (WQ = PQ.d.getFromFolderName()) && void 0 !== WQ ? WQ : null,
+             onTexturePackUpdated: function(QQ) {
+               yQ(QQ, !0)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1264-L1280` → after: `L568-L570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L568-L570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L568-L570) · [Before (L1264-L1280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L1264-L1280)

```diff
-             children: (0, dp.jsx)("div", {
-               className: "TexturePackName",
-               children: "No Override"
-             })
-           }), Object.values(zp.q).map((pp => (0, dp.jsx)(Kp.f, {
-             id: pp,
-             isSelected: pp === Lp,
-             setSelected: tp,
-             disabled: !wp
-           }, pp)))]
-         }), Lp === zp.q.CUSTOM && (0, dp.jsx)(Vp.b, {
-           folderName: Dp,
-           onTexturePackUpdated: tp,
-           disabled: !wp,
-           maxFileSizeMb: 25,
-           packOwner: "customGame"
- ... (1 more removed lines; see GitHub link above)
+             packOwner: "player"
+           })]
+         })
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1288-L1290` → after: `L576-L579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L576-L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L576-L579) · [Before (L1288-L1290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L1288-L1290)

```diff
-         gameCategory: cp,
-         setGameCategory: Op,
-         disabled: op
+         id: WQ,
+         isSelected: XQ,
+         setSelected: zQ,
+         disabled: PQ = !1
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1292-L1322` → after: `L581-L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L581-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L581-L613) · [Before (L1292-L1322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L1292-L1322)

```diff
-       const Sp = null !== (ip = (0, yp.ob)(cp)) && void 0 !== ip ? ip : "other";
-       return (0, dp.jsxs)("div", {
-         className: "GameCategoryPicker",
-         children: [(0, dp.jsx)(vp.i, {
-           label: "worldBuilder:gameCategoryGroup",
-           className: "GameCategoryGroup",
-           disabled: op,
-           children: (0, dp.jsx)(tp.d, {
-             options: yp.db.map((pp => ({
-               value: pp,
-               label: yp.cb[pp]
-             }))),
-             value: Sp,
-             onChange: pp => {
-               pp.value !== Sp && Op(yp.X[pp.value][0])
-             }
- ... (15 more removed lines; see GitHub link above)
+       const [gQ, JQ] = (0, TQ.useState)(!0), [rQ, IQ] = (0, TQ.useState)(""), [jQ, yQ] = (0, TQ.useState)(""), [VQ, DQ] = (0, TQ.useState)(""), pQ = (0, TQ.useRef)({});
+       return (0, TQ.useEffect)((() => {
+         (0, wQ.n)(WQ).then((QQ => {
+           var WQ;
+           QQ && (pQ.current = QQ, JQ(!1), IQ(pQ.current.metaData.name), yQ(pQ.current.metaData.author), DQ(null !== (WQ = pQ.current.metaData.previewImage) && void 0 !== WQ ? WQ : ""))
+         })).catch((QQ => {
+           console.warn(`Failed to fetch texture pack ${WQ}`, QQ)
+         }))
+       }), [WQ]), (0, BQ.jsxs)("div", {
+         "data-pad-focusable": !0,
+         "aria-disabled": PQ || void 0,
+         className: sQ()("TexturePack", {
+           Selected: XQ,
+           Custom: WQ === qQ.i.CUSTOM,
+           Disabled: PQ
+         }),
+ ... (17 more added lines; see GitHub link above)
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1328-L1393` → after: `L635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L635) · [Before (L1328-L1393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L1328-L1393)

```diff
-       let {
-         editor: ip,
-         onClose: cp
-       } = pp;
-       const {
-         t: Op
-       } = (0, xp.H)(), {
-         schematicData: op,
-         updateSchematicData: Ip,
-         publishFormEnabled: Lp,
-         formEnabled: Yp
-       } = ip;
-       return (0, dp.jsxs)(dp.Fragment, {
-         children: [(0, dp.jsxs)(ep, {
-           icon: "pen-to-square",
-           title: Op("worldBuilder:basicsSection"),
- ... (50 more removed lines; see GitHub link above)
+       return null === QQ.file ? null : QQ.line > 0 ? `${QQ.file}:${QQ.line}` : QQ.file
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1397-L1431` → after: `L639-L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L639-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L639-L642) · [Before (L1397-L1431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L1397-L1431)

```diff
-       let {
-         editor: ip
-       } = pp;
-       const {
-         t: cp
-       } = (0, xp.H)(), {
-         schematicData: Op,
-         formEnabled: op,
-         hasUnsavedChanges: Sp
-       } = ip, Ap = op && Sp;
-       return (0, dp.jsxs)("footer", {
-         className: "SchematicPageFooter",
-         children: [op && Sp && (0, dp.jsxs)("div", {
-           className: "SchematicPageFooterStatus",
-           children: [(0, dp.jsx)("span", {
-             className: "SchematicPageFooterStatusDot"
- ... (19 more removed lines; see GitHub link above)
+       const WQ = new Map(QQ.map((QQ => [FQ(QQ).join("."), QQ])));
+       if (0 === WQ.size) return [];
+       const XQ = gQ([...WQ.values()]);
+       return 0 === XQ[0].length ? [] : XQ
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1435-L1443` → after: `L646-L648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L646-L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L646-L648) · [Before (L1435-L1443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L1435-L1443)

```diff
-       let {
-         schematic: ip,
-         onSchematicUpdate: cp,
-         onClose: op,
-         inSourceWorld: Sp
-       } = pp;
-       const {
-         t: Lp
-       } = (0, xp.H)();
+       return qQ.map((WQ => WQ(QQ)))
+     }
+     const PQ = qQ.map((QQ => new Set(wQ.c.map(QQ)).size));
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1445-L1446` → after: `L650-L659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L650-L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L650-L659) · [Before (L1445-L1446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L1445-L1446)

```diff
-       function Yp() {
-         null === op || void 0 === op || op()
+     function gQ(QQ) {
+       const WQ = qQ.map((WQ => new Set(QQ.map(WQ)))),
+         XQ = WQ.reduce(((QQ, WQ) => QQ * WQ.size), 1),
+         wQ = WQ.every(((QQ, WQ) => 1 === QQ.size || QQ.size === PQ[WQ]));
+       if (XQ === QQ.length && wQ) return [qQ.filter(((QQ, XQ) => 1 === WQ[XQ].size)).map((WQ => WQ(QQ[0])))];
+       let TQ = null;
+       for (let zQ = 0; zQ < qQ.length; zQ++) {
+         if (1 === WQ[zQ].size) continue;
+         const XQ = JQ(QQ, qQ[zQ]).flatMap(gQ);
+         (null === TQ || XQ.length < TQ.length) && (TQ = XQ)
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1448-L1475` → after: `L661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L661) · [Before (L1448-L1475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L1448-L1475)

```diff
-       const Dp = (0, ci.b)(ip, {
-         onNavigateAway: Yp,
-         inSourceWorld: Sp
-       });
-       return (0, Op.useEffect)((() => {
-         null === cp || void 0 === cp || cp(Dp.schematicData)
-       }), [Dp.schematicData, cp]), (0, dp.jsxs)("div", {
-         className: "SchematicPage SchematicPagePopupVariant",
-         children: [(0, dp.jsxs)("div", {
-           className: "SchematicPageBody",
-           children: [(0, dp.jsx)(Ip.d, {
-             onClick: Yp,
-             children: Lp("worldBuilder:back")
-           }), (0, dp.jsx)(ep, {
-             icon: "rocket-launch",
-             title: Lp("worldBuilder:actionsSection"),
- ... (12 more removed lines; see GitHub link above)
+       return TQ
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1478-L1495` → after: `L664-L671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L664-L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L664-L671) · [Before (L1478-L1495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L1478-L1495)

```diff
-     function xi(pp) {
-       let {
-         schematic: ip,
-         onSchematicUpdate: cp,
-         onClose: Op,
-         inSourceWorld: Ip
-       } = pp;
-       op.NotificationProvider.showCustomPopup({
-         body: pp => (0, dp.jsx)(Si, {
-           schematic: ip,
-           onSchematicUpdate: cp,
-           onClose: pp,
-           inSourceWorld: Ip
-         }),
-         middleScreenPopupClassName: "SchematicPopup",
-         onClose: Op,
- ... (2 more removed lines; see GitHub link above)
+     function JQ(QQ, WQ) {
+       const XQ = new Map;
+       for (const qQ of QQ) {
+         var wQ;
+         const QQ = WQ(qQ);
+         XQ.set(QQ, [...null !== (wQ = XQ.get(QQ)) && void 0 !== wQ ? wQ : [], qQ])
+       }
+       return [...XQ.values()]
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1498` → after: `L674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L674) · [Before (L1498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L1498)

```diff
-   5067: (pp, ip, cp) => {
+   5376: (QQ, WQ, XQ) => {
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1500` → after: `L676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L676) · [Before (L1500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L1500)

```diff
-       e: () => Ap
+       d: () => zQ
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1502` → after: `L678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L678) · [Before (L1502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L1502)

```diff
-     var Op = cp(1049),
+     var wQ = XQ(1081),
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1504-L1509` → after: `L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L680) · [Before (L1504-L1509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L1504-L1509)

```diff
-       Ip = cp(1201),
-       Sp = cp(1060),
-       xp = cp(1480),
-       Lp = cp(1387),
-       Yp = cp(1361),
-       Dp = cp(1112);
+       TQ = XQ(1145);
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1513-L1514` → after: `L684-L691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L684-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L684-L691) · [Before (L1513-L1514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L1513-L1514)

```diff
-         editor: ip,
-         className: cp
+         options: WQ,
+         value: XQ,
+         onChange: wQ,
+         ariaLabel: zQ,
+         className: sQ,
+         reselectable: FQ = !1,
+         keepsFocus: PQ = !1,
+         padTabs: gQ
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1516-L1549` → after: `L693-L710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L693-L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L693-L710) · [Before (L1516-L1549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L1516-L1549)

```diff
-       const {
-         t: Op
-       } = (0, Ip.H)(), {
-         schematicData: Ap,
-         formEnabled: Pp,
-         publishFormEnabled: Wp
-       } = ip, yp = !Pp || !Wp;
-       return (0, Dp.jsxs)("div", {
-         className: op()("PublishButtonContainer", cp),
-         children: [ip.canEditSourceWorld && (0, Dp.jsxs)(xp.f, {
-           onClick: ip.editSourceWorld,
-           disabled: yp,
-           children: [(0, Dp.jsx)(Sp.d, {
-             name: "edit"
-           }), " ", Op("worldBuilder:editSourceWorld")]
-         }), !Ap.gamePublished && (0, Dp.jsx)(Lp.f, {
- ... (18 more removed lines; see GitHub link above)
+       const JQ = void 0 !== gQ;
+       return (0, TQ.jsx)("div", {
+         className: qQ()("SegmentedToggle", sQ),
+         role: "group",
+         "aria-label": zQ,
+         "data-pad-tabs": gQ,
+         children: WQ.map((QQ => {
+           const WQ = QQ.value === XQ;
+           return (0, TQ.jsx)("button", {
+             type: "button",
+             "aria-pressed": WQ,
+             "data-pad-tab": JQ || void 0,
+             "data-pad-selected": JQ && WQ ? "true" : void 0,
+             "data-pad-default-focus": JQ && WQ || void 0,
+             "aria-label": QQ.ariaLabel,
+             title: QQ.ariaLabel,
+ ... (2 more added lines; see GitHub link above)
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1551-L1569` → after: `L712-L720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L712-L720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L712-L720) · [Before (L1551-L1569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L1551-L1569)

```diff
-             children: (0, Dp.jsxs)(xp.K, {
-               onClick: ip.unpublishSchematic,
-               disabled: yp,
-               children: [(0, Dp.jsx)(Sp.d, {
-                 name: "rocket-launch"
-               }), " ", Op("worldBuilder:unpublishAsGame"), " ", (0, Dp.jsx)(Sp.d, {
-                 name: "info-circle"
-               })]
-             })
-           }), (0, Dp.jsxs)(xp.f, {
-             onClick: ip.playGame,
-             disabled: yp,
-             children: [(0, Dp.jsx)(Sp.d, {
-               name: "joystick"
-             }), " ", Op("general:playGame")]
-           })]
- ... (3 more removed lines; see GitHub link above)
+             onMouseDown: PQ ? QQ => {
+               QQ.preventDefault()
+             } : void 0,
+             onClick: () => {
+               WQ && !FQ || wQ(QQ.value)
+             },
+             children: QQ.label
+           }, QQ.value)
+         }))
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1573` → after: `L724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L724) · [Before (L1573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L1573)

```diff
-   5103: (pp, ip, cp) => {
+   5378: (QQ, WQ, XQ) => {
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1575` → after: `L726-L727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L726-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L726-L727) · [Before (L1575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L1575)

```diff
-       d: () => op
+       e: () => TQ,
+       i: () => zQ
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1577-L1587` → after: `L729-L753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L729-L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L729-L753) · [Before (L1577-L1587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L1577-L1587)

```diff
-     var Op = cp(1211);
-     async function op(pp) {
-       const ip = await fetch(`${Op.clientSideServerUrls.s3Url}/${pp}`, {
-         headers: {
-           Accept: "application/json"
-         }
-       });
-       if (404 === ip.status || 403 === ip.status) return null;
-       if (!ip.ok) throw new Error(`Failed to download the texture pack (${ip.status})`);
-       return await ip.json()
-     }
+     var wQ = XQ(61);
+     const qQ = new WeakMap,
+       TQ = QQ => {
+         var WQ;
+         const XQ = QQ.closest("[data-pad-slider]");
+         return XQ && null !== (WQ = qQ.get(XQ)) && void 0 !== WQ ? WQ : null
+       },
+       zQ = (QQ, WQ) => {
+         const XQ = (0, wQ.useRef)(WQ);
+         XQ.current = WQ, (0, wQ.useEffect)((() => {
+           if (QQ.current) return ((QQ, WQ) => (qQ.set(QQ, WQ), () => {
+             qQ.get(QQ) === WQ && qQ.delete(QQ)
+           }))(QQ.current, {
+             adjust: QQ => {
+               XQ.current.adjust(QQ)
+             },
+ ... (9 more added lines; see GitHub link above)
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1589` → after: `L755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L755) · [Before (L1589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L1589)

```diff
-   5188: (pp, ip, cp) => {
+   5394: (QQ, WQ, XQ) => {
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1591` → after: `L757-L759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L757-L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L757-L759) · [Before (L1591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L1591)

```diff
-       b: () => wp
+       b: () => wQ.i,
+       c: () => qQ,
+       g: () => wQ.n
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1593-L1604` → after: `L761-L770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L761-L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L761-L770) · [Before (L1593-L1604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L1593-L1604)

```diff
-     var Op = cp(62),
-       op = cp(1356),
-       Ip = cp(1014),
-       Sp = cp(156),
-       xp = cp(1569),
-       Lp = cp(25),
-       Yp = cp(1956),
-       Dp = cp(1520),
-       Ap = cp(4677),
-       Pp = cp(1372),
-       Wp = cp(1141),
-       yp = cp(1538);
+     var wQ = XQ(5396);
+     const qQ = [!1, !0].flatMap((QQ => ["terrain", "liquid", "model"].map((WQ => ({
+       strict: QQ,
+       program: WQ
+     })))))
+   },
+   5404: (QQ, WQ, XQ) => {
+     function wQ(QQ, WQ) {
+       return qQ(QQ, WQ)
+     }
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1607-L1628` → after: `L773-L795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L773-L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L773-L795) · [Before (L1607-L1628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L1607-L1628)

```diff
-       return {
-         schematicId: pp.schematicId,
-         name: pp.name,
-         description: pp.description,
-         gamePublished: ip,
-         gameCategory: pp.gameCategory,
-         defaultGamemode: pp.defaultGamemode,
-         voidDeathHeight: pp.voidDeathHeight,
-         disableKeepInventory: pp.disableKeepInventory,
-         disableTpRequests: pp.disableTpRequests,
-         disableLobbySpawn: pp.disableLobbySpawn,
-         disableMobs: pp.disableMobs,
-         disableSpawnProtection: pp.disableSpawnProtection,
-         disableFallDamage: pp.disableFallDamage,
-         worldBorder: pp.worldBorder,
-         hideLobbyCode: pp.hideLobbyCode,
- ... (6 more removed lines; see GitHub link above)
+       if (QQ === WQ) return !0;
+       if ("object" !== typeof QQ || "object" !== typeof WQ || null === QQ || null === WQ || Array.isArray(QQ) !== Array.isArray(WQ)) return !1;
+       const XQ = QQ,
+         wQ = WQ,
+         TQ = Object.keys(XQ);
+       return TQ.length === Object.keys(wQ).length && TQ.every((QQ => Object.prototype.hasOwnProperty.call(wQ, QQ) && qQ(XQ[QQ], wQ[QQ])))
+     }
+     XQ.d(WQ, {
+       b: () => wQ
+     })
+   },
+   5401: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       c: () => zQ,
+       g: () => sQ
+     });
+ ... (7 more added lines; see GitHub link above)
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1633-L1641` → after: `L800-L816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L800-L816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L800-L816) · [Before (L1633-L1641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L1633-L1641)

```diff
-       let {
-         onNavigateAway: ip,
-         inSourceWorld: cp = !1
-       } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-       const {
-         userContext: wp
-       } = (0, Wp.b)(), vp = (0, yp.useNavigatePreserveSearch)(), [tp, Hp] = (0, Op.useState)({
-         ...pp
-       }), [dp, ep] = (0, Op.useState)("Enter"), [jp, kp] = (0, Op.useState)(void 0), mp = (0, Op.useRef)(Up(pp, pp.gamePublished)), Rp = (0, Op.useRef)(void 0), qp = "Enter" === dp, Mp = wp.playerHasRank("developer") || wp.playerHasRank("admin") || "Enter" === dp && !1 !== tp.sch … [truncated]
+       return !(null === TQ || !(0, qQ.b)(TQ.pack, QQ)) && (TQ = null, !0)
+     }
+   },
+   5396: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       d: () => sQ,
+       f: () => zQ,
+       i: () => wQ,
+       l: () => BQ,
+       m: () => JQ,
+       n: () => qQ,
+       r: () => TQ,
+       t: () => PQ,
+       w: () => gQ,
+       z: () => rQ
+     });
+ ... (1 more added lines; see GitHub link above)
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1643-L1647` → after: `L818-L837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L818-L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L818-L837) · [Before (L1643-L1647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L1643-L1647)

```diff
-       function Ep(pp, ip) {
-         Hp((cp => ({
-           ...cp,
-           [pp]: ip
-         })))
+     function qQ(QQ) {
+       return QQ === wQ
+     }
+ 
+     function TQ(QQ) {
+       return [...QQ.features]
+     }
+     const zQ = 262144,
+       sQ = 256,
+       FQ = 256;
+ 
+     function PQ(QQ) {
+       if ("object" !== typeof QQ || null === QQ || Array.isArray(QQ)) return "The pack has no files.";
+       const WQ = [];
+       for (const [XQ, wQ] of Object.entries(QQ)) {
+         if ("string" !== typeof wQ) return `${XQ} isn't text.`;
+ ... (4 more added lines; see GitHub link above)
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1649-L1651` → after: `L839-L855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L839-L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L839-L855) · [Before (L1649-L1651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L1649-L1651)

```diff
-       const Xp = (0, Op.useCallback)((pp => {
-         Rp.current = pp, kp(pp)
-       }), []);
+       return WQ.sort(((QQ, WQ) => JQ(QQ.path, WQ.path))),
+         function(QQ) {
+           if (0 === QQ.length) return "The pack has no .wgsl files.";
+           if (QQ.length > sQ) return `The pack has more than ${sQ} .wgsl files.`;
+           const WQ = new Set;
+           for (const {
+               path: XQ
+             }
+             of QQ) {
+             const QQ = IQ(XQ);
+             if (null !== QQ) return QQ;
+             if (WQ.has(XQ)) return `The pack has two files at ${XQ}.`;
+             WQ.add(XQ)
+           }
+           return rQ(QQ) > zQ ? `The pack's .wgsl files are over ${zQ/1024} KB in total.` : null
+         }(WQ) ?? WQ
+ ... (1 more added lines; see GitHub link above)
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1653-L1677` → after: `L857-L899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L857-L899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L857-L899) · [Before (L1653-L1677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L1653-L1677)

```diff
-       function lp(pp) {
-         ep("Loading");
-         const ip = Up(tp, pp),
-           cp = jp !== Rp.current ? jp : void 0;
-         Dp.b.updateSchematic(wp, ip, cp).then((cp => {
-           let {
-             customTexturePackKey: Op
-           } = cp;
-           ep("Success"), Ep("customTexturePackKey", Op), mp.current = ip, Rp.current = void 0, kp(void 0), setTimeout((() => {
-             Ep("gamePublished", pp), ep("Enter")
-           }), 1e3)
-         })).catch((pp => {
-           var ip;
-           (console.error("Failed to save schematic:", pp), ep("Error"), pp instanceof Sp.e && pp.errorMessageForUser) && Pp.NotificationProvider.showAlertPopup({
-             title: "worldBuilder:changesNotSaved",
-             subtitle: pp.errorMessageForUser,
- ... (9 more removed lines; see GitHub link above)
+     function gQ(QQ) {
+       const WQ = {};
+       for (const XQ of QQ) WQ[XQ.path] = XQ.source;
+       return WQ
+     }
+ 
+     function JQ(QQ, WQ) {
+       return QQ < WQ ? -1 : QQ > WQ ? 1 : 0
+     }
+ 
+     function rQ(QQ) {
+       const WQ = new TextEncoder;
+       let XQ = 0;
+       for (const {
+           source: wQ
+         }
+ ... (27 more added lines; see GitHub link above)
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1679-L1700` → after: `L901-L906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L901-L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L901-L906) · [Before (L1679-L1700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L1679-L1700)

```diff
-       return {
-         schematicData: tp,
-         updateSchematicData: Ep,
-         setTexturePack: kp,
-         initializeTexturePack: Xp,
-         updateState: dp,
-         formEnabled: qp,
-         publishFormEnabled: Mp,
-         hasUnsavedChanges: Cp,
-         canEditSourceWorld: !cp,
-         saveSchematic: lp,
-         unpublishSchematic: function() {
-           Pp.NotificationProvider.showPromptPopup({
-             icon: "rocket-launch",
-             title: "worldBuilder:unpublishAsGameConfirmTitle",
-             subtitle: "worldBuilder:unpublishAsGameConfirmSubtitle",
- ... (6 more removed lines; see GitHub link above)
+       const zQ = QQ => {
+           const WQ = jQ.exec(QQ);
+           return WQ && TQ.has(WQ[1]) ? {
+             root: WQ[1],
+             rotation: Number(WQ[2]) - 1
+           } : null
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1702-L1711` → after: `L908-L914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L908-L914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L908-L914) · [Before (L1702-L1711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L1702-L1711)

```diff
-         editSourceWorld: function() {
-           ep("Loading"), Ap.b.getSourceWorld(tp.schematicId).then((pp => {
-             Yp.gameBridge.send("leaveGame", {
-               reloadPath: "/"
-             }), (0, Lp.k)("other"), vp((0, op.c)("classic", pp)), null === ip || void 0 === ip || ip()
-           })).catch((pp => {
-             console.error("Failed to get source world:", pp), ep("Error"), setTimeout((() => {
-               ep("Enter")
-             }), 1e3)
-           }))
+         sQ = new Set(qQ.map((QQ => {
+           let [WQ] = QQ;
+           return zQ(WQ)?.root ?? WQ
+         }))),
+         FQ = (QQ, XQ) => {
+           const wQ = QQ.replace(/_?0$/, "");
+           return (WQ[XQ]?.numAnimStates ?? 0) > 1 && !sQ.has(wQ) ? wQ : QQ
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1713-L1716` → after: `L916-L944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L916-L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L916-L944) · [Before (L1713-L1716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L1713-L1716)

```diff
-         playGame: function() {
-           Yp.gameBridge.send("leaveGame", {
-             reloadPath: "/"
-           }), vp((0, xp.u)((0, Ip.t)(tp.schematicId), tp)), null === ip || void 0 === ip || ip()
+         PQ = new Map;
+       for (const [jQ, BQ] of qQ) PQ.set(BQ, FQ(zQ(jQ)?.root ?? jQ, BQ));
+       const gQ = qQ.reduce(((QQ, WQ) => {
+           let [, XQ] = WQ;
+           return Math.max(QQ, XQ + 1)
+         }), 0),
+         JQ = Array.from({
+           length: gQ
+         }, ((QQ, WQ) => ({
+           id: WQ + 1,
+           rotation: 0
+         }))),
+         rQ = new Map,
+         IQ = new Map;
+       for (const [jQ, BQ] of qQ) {
+         const QQ = zQ(jQ),
+ ... (13 more added lines; see GitHub link above)
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1720-L1721` → after: `L984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/107.js#L984) · [Before (L1720-L1721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/107.js#L1720-L1721)

```diff
-   },
-   5054: () => {}
+   }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/108.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/108.js` (28 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/108.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/108.js#L4)

```diff
-   36565: (pp, ip, cp) => {
+   6900: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L8` → after: `L8-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/108.js#L8-L16) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/108.js#L8)

```diff
-     var Op = cp(1049),
+     var wQ = XQ(61),
+       qQ = XQ(1507),
+       TQ = XQ(1548),
+       zQ = XQ(3736),
+       sQ = XQ(1162),
+       FQ = XQ(1391),
+       PQ = XQ(1416),
+       gQ = XQ(1094),
+       JQ = XQ(1081),
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L10-L12` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/108.js#L18-L19) · [Before (L10-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/108.js#L10-L12)

```diff
-       Ip = cp(62),
-       Sp = cp(4664),
-       xp = cp(1112);
+       IQ = XQ(6896),
+       jQ = XQ(1145);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L16-L17` → after: `L23-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/108.js#L23-L24) · [Before (L16-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/108.js#L16-L17)

```diff
-         locked: ip,
-         children: cp
+         info: WQ,
+         className: XQ
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L19-L28` → after: `L26-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L26-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/108.js#L26-L62) · [Before (L19-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/108.js#L19-L28)

```diff
-       const Op = (0, Ip.useRef)(null),
-         Lp = (0, Sp.c)(Op, "y");
-       return (0, xp.jsx)("div", {
-         ref: Op,
-         className: op()("CreateCustomLobbyBody", {
-           CreateCustomLobbyBodyMoreAbove: Lp.before,
-           CreateCustomLobbyBodyMoreBelow: Lp.after
-         }),
-         "data-pad-ignore": ip || void 0,
-         children: cp
+       const {
+         statusText: wQ,
+         rowText: qQ
+       } = (0, IQ.e)();
+       return (0, jQ.jsxs)("div", {
+         className: rQ()("GameApprovalInfoDetails", XQ),
+         children: [(0, jQ.jsxs)("div", {
+           className: rQ()("GameApprovalInfoSummary", WQ.overallPassed ? "Passed" : "Failed"),
+           children: [(0, jQ.jsx)(gQ.d, {
+             name: WQ.overallPassed ? "circle-check" : "circle-xmark"
+           }), (0, jQ.jsx)("span", {
+             children: wQ(WQ.status)
+           })]
+         }), WQ.rows.length > 0 && (0, jQ.jsx)("div", {
+           className: "GameApprovalInfoRows",
+           children: WQ.rows.map((QQ => {
+ ... (21 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L31-L48` → after: `L65-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L65-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/108.js#L65-L66) · [Before (L31-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/108.js#L31-L48)

```diff
-   },
-   36652: (pp, ip, cp) => {
-     cp.r(ip), cp.d(ip, {
-       showFirstWorldSetupPopup: () => Up
-     });
-     cp(5054), cp(36543);
-     var Op = cp(4719),
-       op = cp(62),
-       Ip = cp(4677),
-       Sp = cp(1201),
-       xp = cp(1372),
-       Lp = cp(36565),
-       Yp = cp(5061),
-       Dp = cp(1480),
-       Ap = cp(3587),
-       Pp = cp(36557),
- ... (2 more removed lines; see GitHub link above)
+     var yQ = XQ(1226),
+       VQ = XQ(1404);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L56-L58` → after: `L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/108.js#L70) · [Before (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/108.js#L56-L58)

```diff
-         body: cp => (0, yp.jsx)(wp, {
-           flow: ip,
-           close: cp,
+         body: () => (0, jQ.jsx)(pQ, {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L61-L64` → after: `L73-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L73-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/108.js#L73-L75) · [Before (L61-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/108.js#L61-L64)

```diff
-         middleScreenPopupClassName: "CreateCustomLobbyPopup",
-         onClose: () => {
-           ip.closed = !0, ip.requested || (0, Wp.d)()
-         }
+         middleScreenPopupClassName: "ApprovalInfoPopup",
+         onClose: () => {},
+         unlockPointerKey: "approvalInfoPopup"
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L70-L75` → after: `L81-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L81-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/108.js#L81-L83) · [Before (L70-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/108.js#L70-L75)

```diff
-         flow: ip,
-         close: cp,
-         onCreating: xp,
-         onCreated: Up,
-         onFailedClosed: wp,
-         join: vp
+         schematicId: WQ,
+         canOverride: XQ,
+         onApprovalChanged: JQ
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L79` → after: `L87-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L87-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/108.js#L87-L95) · [Before (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/108.js#L79)

```diff
-       } = (0, Sp.H)(), [Hp, dp] = (0, op.useState)(Op.s), [ep, jp] = (0, op.useState)(!1), [kp, mp] = (0, op.useState)(""), Rp = (0, Ap.b)();
+       } = (0, yQ.C)(), {
+         userContext: IQ
+       } = (0, sQ.c)(), VQ = (0, zQ.d)(), [DQ, pQ] = (0, wQ.useState)(null), [GQ, UQ] = (0, wQ.useState)(null), [bQ, vQ] = (0, wQ.useState)(!1), dQ = (0, wQ.useCallback)((() => {
+         UQ(null), TQ.e.getGameApprovalInfo(IQ, WQ).then((QQ => {
+           VQ.current && pQ(QQ)
+         })).catch((QQ => {
+           console.error("Failed to get game approval info", QQ), VQ.current && UQ(rQ("studio:approvalLoadFailed"))
+         }))
+       }), [IQ, WQ, VQ, rQ]);
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L81-L97` → after: `L97-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L97-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/108.js#L97-L107) · [Before (L81-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/108.js#L81-L97)

```diff
-         (0, Wp.n)()
-       }), []);
-       const qp = pp => ({
-         isEnabled: () => Hp.plugins[pp],
-         eC: ip => {
-           (0, Wp.g)({
-             plugin: pp,
-             enabled: ip
-           }), dp({
-             ...Hp,
-             plugins: {
-               ...Hp.plugins,
-               [pp]: ip
-             }
-           })
-         }
- ... (1 more removed lines; see GitHub link above)
+         dQ()
+       }), [dQ]);
+       const HQ = QQ => {
+         bQ || (vQ(!0), TQ.e.setGameApproval(IQ, WQ, QQ).then((() => {
+           null === JQ || void 0 === JQ || JQ(), VQ.current && dQ()
+         })).catch((QQ => {
+           console.error("Failed to set game approval", QQ)
+         })).finally((() => {
+           VQ.current && vQ(!1)
+         })))
+       };
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L99-L142` → after: `L109-L165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L109-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/108.js#L109-L165) · [Before (L99-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/108.js#L99-L142)

```diff
-         className: "CreateCustomLobby",
-         children: [(0, yp.jsx)("div", {
-           className: "CreateCustomLobbyTitleContainer",
-           children: (0, yp.jsx)("div", {
-             className: "CreateCustomLobbyTitle",
-             children: tp("homePage:myWorld")
-           })
-         }), (0, yp.jsx)(Lp.b, {
-           locked: ep,
-           children: (0, yp.jsxs)("div", {
-             className: "CreateCustomLobbyFields",
-             children: [(0, yp.jsx)(Pp.e, {
-               value: Hp.defaultGamemode,
-               onChange: pp => {
-                 (0, Op.u)(pp) && pp !== Hp.defaultGamemode && ((0, Wp.g)({
-                   defaultGamemode: pp
- ... (28 more removed lines; see GitHub link above)
+         className: "ApprovalInfoPopupBody",
+         children: [(0, jQ.jsx)("h1", {
+           className: "ApprovalInfoPopupTitle",
+           children: rQ("studio:approvalTitle")
+         }), !DQ && !GQ && (0, jQ.jsx)("div", {
+           className: "ApprovalInfoPopupLoader",
+           children: (0, jQ.jsx)(FQ.e, {})
+         }), GQ && (0, jQ.jsx)("div", {
+           className: "ApprovalInfoPopupError",
+           children: GQ
+         }), DQ && (0, jQ.jsxs)(jQ.Fragment, {
+           children: [(0, jQ.jsx)(BQ, {
+             info: DQ
+           }), XQ && (0, jQ.jsxs)("div", {
+             className: "ApprovalInfoPopupActions",
+             children: [!0 !== DQ.manualOverride && (0, jQ.jsx)(PQ.e, {
+ ... (41 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L170` → after: `L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/108.js#L172) · [Before (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/108.js#L170)

```diff
-   5061: (pp, ip, cp) => {
+   6896: (QQ, WQ, XQ) => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L174` → after: `L177-L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L177-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/108.js#L177-L260) · [Before (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/108.js#L174)

```diff
-     var Op = cp(1049),
+     var wQ = XQ(402),
+       qQ = XQ(1226);
+     const TQ = {
+       manuallyApproved: "studio:approvalStatusManuallyApproved",
+       manuallyAndAutoApproved: "studio:approvalStatusManuallyAndAutoApproved",
+       manuallyDenied: "studio:approvalStatusManuallyDenied",
+       autoApproved: "studio:approvalStatusAutoApproved",
+       notApproved: "studio:approvalStatusNotApproved",
+       notIndexed: "studio:approvalStatusNotIndexed"
+     };
+ 
+     function zQ() {
+       const {
+         t: QQ,
+         selectedLanguage: WQ
+       } = (0, qQ.C)();
+ ... (68 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L176-L179` → after: `L262-L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L262-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/108.js#L262-L320) · [Before (L176-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/108.js#L176-L179)

```diff
-       Ip = cp(4719),
-       Sp = cp(1201),
-       xp = cp(1112);
-     const Lp = [...Ip.h, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];
+       sQ = XQ(1057),
+       FQ = XQ(1257),
+       PQ = XQ(1049),
+       gQ = XQ(402),
+       JQ = XQ(1607),
+       rQ = XQ(1046),
+       IQ = XQ(1226),
+       jQ = XQ(1162),
+       BQ = XQ(382),
+       yQ = XQ(1548),
+       VQ = XQ(26),
+       DQ = XQ(2003),
+       pQ = XQ(1507),
+       GQ = XQ(1094),
+       UQ = XQ(1391),
+       bQ = XQ(5256),
+ ... (43 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L182-L205` → after: `L323-L546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L323-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/108.js#L323-L546) · [Before (L182-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/108.js#L182-L205)

```diff
-       const {
-         disabled: ip,
-         hideWrapper: cp
-       } = pp, {
-         t: Op
-       } = (0, Sp.H)(), Yp = pp.advancedMode ? Lp.map((ip => [ip, pp.callbacks[ip]])) : Ip.h.map((ip => [ip, pp.callbacks[ip]])), Ap = (0, xp.jsx)("div", {
-         className: op()("PluginsGrid", {
-           SectionBody: !cp
-         }),
-         children: Yp.map((pp => {
-           let [cp, Op] = pp;
-           return (0, xp.jsx)(Dp, {
-             plugin: cp,
-             callbacks: Op,
-             disabled: ip
-           }, cp)
- ... (8 more removed lines; see GitHub link above)
+       return null !== QQ && "object" === typeof QQ && "p20" in QQ && "p50" in QQ && "p80" in QQ
+     }
+     const SQ = new class {
+       async makeStudioApiRequest(QQ, WQ) {
+         let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
+           wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
+             retries: 0,
+             minTimeout: 3e3
+           };
+         return await (0, uQ.postJsonWithMetricsCookiesAndJsonResponse)(`${CQ.clientSideServerUrls.indexUrl}${QQ}`, XQ, wQ, WQ.getMetricsCookies())
+       }
+       async getGameStats(QQ, WQ) {
+         const XQ = {
+             gameAnalyticsId: WQ
+           },
+           wQ = await this.makeStudioApiRequest("/index/studio/get-game-stats", QQ, XQ);
+ ... (208 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L211-L216` → after: `L553-L555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L553-L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/108.js#L553-L555) · [Before (L211-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/108.js#L211-L216)

```diff
-         plugin: ip,
-         callbacks: {
-           isEnabled: cp,
-           eC: Op
-         },
-         disabled: Ip
+         fileNameParts: WQ,
+         getTable: XQ,
+         disabled: wQ = !1
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L220-L227` → after: `L559-L564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L559-L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/108.js#L559-L564) · [Before (L220-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/108.js#L220-L227)

```diff
-       } = (0, Sp.H)(), Yp = cp();
-       return (0, xp.jsxs)("div", {
-         className: op()("PluginCard", {
-           PluginCardEnabled: Yp,
-           PluginCardDisabledForm: Ip
-         }),
-         "data-pad-focusable": !0,
-         "aria-disabled": Ip || void 0,
+       } = (0, IQ.C)();
+       return (0, JW.jsx)(rW, {
+         small: !0,
+         icon: "download",
+         label: qQ("Export Data"),
+         disabled: wQ,
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L229-L249` → after: `L566-L573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L566-L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/108.js#L566-L573) · [Before (L229-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/108.js#L229-L249)

```diff
-           Ip || Op(!Yp)
-         },
-         children: [(0, xp.jsx)("div", {
-           className: "PluginCardIcon",
-           children: (0, xp.jsx)("img", {
-             src: `/textures/games/classic/customGames/${ip}.png`,
-             alt: ip
-           })
-         }), (0, xp.jsxs)("div", {
-           className: "PluginCardBody",
-           children: [(0, xp.jsx)("div", {
-             className: "PluginCardTitle",
-             children: Lp(Ap[ip])
-           }), (0, xp.jsx)("div", {
-             className: "PluginCardDescription",
-             children: Lp(Pp[ip])
- ... (5 more removed lines; see GitHub link above)
+           const QQ = XQ().map((QQ => QQ.map(zW).join(","))).join("\r\n");
+           (0, gW.downloadBlob)(new Blob([`${IW}${QQ}`], {
+             type: "text/csv;charset=utf-8"
+           }), function(QQ) {
+             const WQ = QQ.map(PW).filter((QQ => "" !== QQ)).join(" - ");
+             return `${""===WQ?"export":WQ}.csv`
+           }(WQ))
+         }
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L253-L268` → after: `L577-L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L577-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/108.js#L577-L649) · [Before (L253-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/108.js#L253-L268)

```diff
-         fallDamage: "classic:enableFallDamage",
-         tpRequests: "classic:enableTpRequests",
-         spawnProtection: "classic:enableSpawnProtection",
-         spawnReset: "classic:enableSpawnReset",
-         smpMarketplace: "classic:enableSmpMarketplace",
-         survivalGuns: "classic:enableSurvivalGuns",
-         dayNight: "classic:enableDayNight"
-       },
-       Pp = {
-         fallDamage: "classic:enableFallDamageDescription",
-         tpRequests: "classic:enableTpRequestsDescription",
-         spawnProtection: "classic:enableSpawnProtectionDescription",
-         spawnReset: "classic:enableSpawnResetDescription",
-         smpMarketplace: "classic:enableSmpMarketplaceDescription",
-         survivalGuns: "classic:enableSurvivalGunsDescription",
-         dayNight: "classic:enableDayNightDescription"
+       hour: "2-digit",
+       minute: "2-digit",
+       hourCycle: "h23"
+     };
+ 
+     function yW(QQ) {
+       let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+       return new Date(QQ).toLocaleDateString(void 0, {
+         day: "numeric",
+         month: "short",
+         timeZone: WQ ? "UTC" : void 0
+       })
+     }
+ 
+     function VW(QQ) {
+       return new Date(QQ).toLocaleTimeString(void 0, BW)
+ ... (57 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L270-L282` → after: `L651-L771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L651-L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/108.js#L651-L771) · [Before (L270-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/108.js#L270-L282)

```diff
-   },
-   36557: (pp, ip, cp) => {
-     cp.d(ip, {
-       e: () => Yp,
-       i: () => Dp
-     });
-     cp(62);
-     var Op = cp(1049),
-       op = cp.n(Op),
-       Ip = cp(4719),
-       Sp = cp(322),
-       xp = cp(1201),
-       Lp = cp(1112);
+       return cW(qQ)
+     }
+ 
+     function iW(QQ, WQ) {
+       return cW(Math.max(0, ...QQ.map((QQ => WQ(QQ).length))))
+     }
+ 
+     function cW(QQ) {
+       return Math.max(aW, Math.ceil(QQ * dW) + HW)
+     }
+     const AW = [1, 2, 5],
+       RW = 6;
+ 
+     function EW(QQ, WQ) {
+       if (!(QQ > 0)) return;
+       const XQ = 10 ** Math.floor(Math.log10(QQ / RW)),
+ ... (105 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L286-L289` → after: `L775-L778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L775-L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/108.js#L775-L778) · [Before (L286-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/108.js#L286-L289)

```diff
-         value: ip,
-         onChange: cp,
-         showAll: Op,
-         disabled: Yp = !1
+         point: WQ,
+         label: XQ,
+         formatValue: wQ,
+         noDataLabel: qQ
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L293` → after: `L782-L825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L782-L825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/108.js#L782-L825) · [Before (L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/108.js#L293)

```diff
-       } = (0, xp.H)();
+       } = (0, IQ.C)(), zQ = QQ => null === QQ || void 0 === QQ ? qQ : wQ(QQ), sQ = WQ.comparisonBand;
+       return sQ ? (0, JW.jsxs)(JW.Fragment, {
+         children: [(0, JW.jsx)("div", {
+           className: "StudioStatsChartTooltipSub SmallTextLight",
+           children: XQ
+         }), (0, JW.jsxs)("div", {
+           className: "StudioStatsChartTooltipSub SmallTextLight",
+           children: [TQ("studio:comparisonPercentile80"), ": ", zQ(sQ[1])]
+         }), (0, JW.jsxs)("div", {
+           className: "StudioStatsChartTooltipSub SmallTextLight",
+           children: [TQ("studio:comparisonPercentile50"), ": ", zQ(WQ.comparisonValue)]
+         }), (0, JW.jsxs)("div", {
+           className: "StudioStatsChartTooltipSub SmallTextLight",
+           children: [TQ("studio:comparisonPercentile20"), ": ", zQ(sQ[0])]
+         })]
+       }) : (0, JW.jsxs)("div", {
+ ... (28 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L295-L297` → after: `L827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/108.js#L827) · [Before (L295-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/108.js#L295-L297)

```diff
-         className: op()("BloxdForm GamemodeForm", {
-           BasicOptions: !Op
-         }),
+         className: "StudioStatsChartTooltip",
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L299-L316` → after: `L829-L850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L829-L850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/108.js#L829-L850) · [Before (L299-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/108.js#L299-L316)

```diff
-           className: "SectionTitle",
-           children: Dp("classic:defaultGamemode")
-         }), (0, Lp.jsx)("div", {
-           className: "SectionBody",
-           children: Ip.E.map((pp => Op || (0, Ip.u)(pp) ? (0, Lp.jsx)("button", {
-             type: "button",
-             className: op()("WorldGamemode", {
-               Selected: ip === pp
-             }),
-             disabled: Yp,
-             onClick: () => {
-               cp(pp)
-             },
-             style: {
-               "--background-image": `url(${Sp.p[pp]})`
-             },
- ... (2 more removed lines; see GitHub link above)
+           className: "StudioStatsChartTooltipTitle SmallTextLight",
+           children: ZW(wQ, qQ)
+         }), FQ && (0, JW.jsx)("div", {
+           className: "StudioStatsChartTooltipValue",
+           children: null === gQ.value ? zQ : TQ(gQ.value)
+         }), null === PQ || void 0 === PQ ? void 0 : PQ.map(((QQ, WQ) => {
+           var XQ;
+           const wQ = null === (XQ = gQ.lineValues) || void 0 === XQ ? void 0 : XQ[WQ];
+           return (0, JW.jsxs)("div", {
+             className: "StudioStatsChartTooltipLine SmallTextLight",
+             children: [(0, JW.jsx)("span", {
+               className: "StudioStatsChartTooltipLineSwatch",
+               style: {
+                 backgroundColor: QQ.colour
+               }
+             }), QQ.label, ": ", null === wQ || void 0 === wQ ? zQ : TQ(wQ)]
+ ... (6 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L323-L327` → after: `L872-L880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L872-L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/108.js#L872-L880) · [Before (L323-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/108.js#L323-L327)

```diff
-         mapTypes: ip,
-         value: cp,
-         onChange: Op,
-         showAll: Yp,
-         disabled: Dp = !1,
+         viewBox: WQ,
+         text: XQ,
+         alignLeft: wQ
+       } = QQ;
+       return void 0 === (null === WQ || void 0 === WQ ? void 0 : WQ.x) || void 0 === WQ.y ? null : (0, JW.jsx)("text", {
+         className: "StudioStatsChartMarkerLabel",
+         x: WQ.x + (wQ ? -5 : 5),
+         y: WQ.y + 10,
+         textAnchor: wQ ? "end" : "start",
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L332-L356` → after: `L903-L922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L903-L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/108.js#L903-L922) · [Before (L332-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/108.js#L332-L356)

```diff
-       } = (0, xp.H)();
-       return (0, Lp.jsxs)("div", {
-         className: op()("BloxdForm MapTypeForm", {
-           BasicOptions: !Yp
-         }),
-         children: [(0, Lp.jsx)("div", {
-           className: "SectionTitle",
-           children: Pp("customLobby:mapType")
-         }), (0, Lp.jsx)("div", {
-           className: "SectionBody",
-           children: ip.map((pp => Yp || (0, Ip.y)(pp) ? (0, Lp.jsx)("button", {
-             type: "button",
-             className: op()("MapType", {
-               Selected: cp === pp
-             }),
-             disabled: Dp,
- ... (9 more removed lines; see GitHub link above)
+       } = (0, IQ.C)();
+       return (0, JW.jsxs)("span", {
+         className: "StudioStatsChartLegendEntry",
+         children: [(0, JW.jsx)("span", {
+           className: zQ()("StudioStatsChartLegendSwatch", WQ),
+           style: wQ ? {
+             backgroundColor: XQ
+           } : {
+             color: XQ
+           }
+         }), qQ, void 0 !== TQ && (0, JW.jsx)("span", {
+           ...(0, pQ.ab)(),
+           className: "StudioStatsChartLegendRemove",
+           title: sQ("general:remove"),
+           "aria-label": sQ("general:remove"),
+           onClick: TQ,
+ ... (4 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L359-L361` → after: `L925-L31601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L925-L31601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/108.js#L925-L31601) · [Before (L359-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/108.js#L359-L361)

```diff
-   },
-   5054: () => {},
-   36543: () => {}
+ 
+     function TX(QQ) {
+       let {
+         seriesLabel: WQ,
+         seriesColour: XQ,
+         comparisonLabel: wQ,
+         comparisonIsBand: qQ,
+         lines: TQ
+       } = QQ;
+       const {
+         t: zQ
+       } = (0, IQ.C)();
+       return (0, JW.jsxs)("div", {
+         className: "StudioStatsChartLegend SmallTextLight",
+         children: [void 0 !== WQ && void 0 !== XQ && (0, JW.jsx)(qX, {
+           colour: XQ,
+ ... (30661 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/109.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/109.js` (52 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80)

#### 1. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L4-L19` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/109.js#L4) · [Before (L4-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/109.js#L4-L19)

```diff
-   5097: (pp, ip) => {
-     ip.e = function(pp, ip) {
-       if (pp && ip) {
-         var cp = Array.isArray(ip) ? ip : ip.split(","),
-           Op = pp.name || "",
-           op = (pp.type || "").toLowerCase(),
-           Ip = op.replace(/\/.*$/, "");
-         return cp.some((function(pp) {
-           var ip = pp.trim().toLowerCase();
-           return "." === ip.charAt(0) ? Op.toLowerCase().endsWith(ip) : ip.endsWith("/*") ? Ip === ip.replace(/\/.*$/, "") : op === ip
-         }))
-       }
-       return !0
-     }
-   },
-   5076: (pp, ip, cp) => {
+   5290: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L21` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/109.js#L6-L8) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/109.js#L21)

```diff
-       c: () => Ui
+       d: () => JQ,
+       h: () => gQ,
+       i: () => rQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L23-L25` → after: `L10-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L10-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/109.js#L10-L17) · [Before (L23-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/109.js#L23-L25)

```diff
-     var Op = cp(62),
-       op = cp(5081),
-       Ip = cp.n(op);
+     XQ(5299);
+     var wQ = XQ(1226),
+       qQ = XQ(1081),
+       TQ = XQ.n(qQ),
+       zQ = XQ(1416),
+       sQ = (XQ(61), XQ(4677)),
+       FQ = XQ(1094),
+       PQ = XQ(1145);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L27-L52` → after: `L19-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L19-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/109.js#L19-L51) · [Before (L27-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/109.js#L27-L52)

```diff
-     function Sp(pp, ip, cp, Op) {
-       return new(cp || (cp = Promise))((function(op, Ip) {
-         function Sp(pp) {
-           try {
-             Lp(Op.next(pp))
-           } catch (ip) {
-             Ip(ip)
-           }
-         }
- 
-         function xp(pp) {
-           try {
-             Lp(Op.throw(pp))
-           } catch (ip) {
-             Ip(ip)
-           }
- ... (10 more removed lines; see GitHub link above)
+     function gQ(QQ) {
+       let {
+         children: WQ,
+         label: XQ,
+         className: qQ,
+         circleInfoText: sQ,
+         disabled: gQ,
+         onLabelClick: JQ
+       } = QQ;
+       const {
+         t: rQ
+       } = (0, wQ.C)(), IQ = (0, PQ.jsxs)("div", {
+         className: TQ()("Label", {
+           ClickableLabel: void 0 !== JQ
+         }),
+         onClick: JQ,
+ ... (17 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L55-L60` → after: `L54-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L54-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/109.js#L54-L63) · [Before (L55-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/109.js#L55-L60)

```diff
-     function xp(pp, ip) {
-       var cp, Op, op, Ip, Sp = {
-         label: 0,
-         sent: function() {
-           if (1 & op[0]) throw op[1];
-           return op[1]
+     function JQ(QQ) {
+       let {
+         checked: WQ,
+         setChecked: XQ
+       } = QQ;
+       return (0, PQ.jsx)("div", {
+         className: "OtherInput ClickableOtherInput",
+         "data-pad-focusable": !0,
+         onClick: QQ => {
+           XQ(!WQ)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L62-L265` → after: `L65-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L65-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/109.js#L65-L70) · [Before (L62-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/109.js#L62-L265)

```diff
-         trys: [],
-         ops: []
-       };
-       return Ip = {
-         next: xp(0),
-         throw: xp(1),
-         return: xp(2)
-       }, "function" === typeof Symbol && (Ip[Symbol.iterator] = function() {
-         return this
-       }), Ip;
- 
-       function xp(xp) {
-         return function(Lp) {
-           return function(xp) {
-             if (cp) throw new TypeError("Generator is already executing.");
-             for (; Ip && (Ip = 0, xp[0] && (Sp = 0)), Sp;) try {
- ... (188 more removed lines; see GitHub link above)
+         children: (0, PQ.jsx)(sQ.b, {
+           checked: WQ,
+           onChange: QQ => {
+             XQ(QQ.target.checked)
+           },
+           disabled: !1
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L267-L273` → after: `L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/109.js#L72) · [Before (L267-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/109.js#L267-L273)

```diff
-       }
-       return cp
-     }
-     var Pp = [".DS_Store", "Thumbs.db"];
- 
-     function Wp(pp) {
-       return "object" === typeof pp && null !== pp
+       })
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L277-L279` → after: `L76-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L76-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/109.js#L76-L96) · [Before (L277-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/109.js#L277-L279)

```diff
-       return tp(pp.target.files).map((function(pp) {
-         return Ap(pp)
-       }))
+       let {
+         checked: WQ,
+         setChecked: XQ,
+         disabled: wQ
+       } = QQ;
+       return (0, PQ.jsx)("div", {
+         className: TQ()("SwitchContainer", {
+           SwitchContainerDisabled: wQ
+         }),
+         onClick: () => {
+           wQ || XQ(!WQ)
+         },
+         children: (0, PQ.jsx)(sQ.b, {
+           className: "SwitchCheckbox",
+           checked: WQ,
+           onChange: QQ => {
+ ... (5 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L283-L294` → after: `L111-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L111-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/109.js#L111-L126) · [Before (L283-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/109.js#L283-L294)

```diff
-       return Sp(this, void 0, void 0, (function() {
-         return xp(this, (function(ip) {
-           switch (ip.label) {
-             case 0:
-               return [4, Promise.all(pp.map((function(pp) {
-                 return pp.getFile()
-               })))];
-             case 1:
-               return [2, ip.sent().map((function(pp) {
-                 return Ap(pp)
-               }))]
-           }
+       const {
+         disabled: WQ,
+         hideWrapper: XQ
+       } = QQ, {
+         t: wQ
+       } = (0, zQ.C)(), PQ = QQ.advancedMode ? FQ.map((WQ => [WQ, QQ.callbacks[WQ]])) : TQ.j.map((WQ => [WQ, QQ.callbacks[WQ]])), JQ = (0, sQ.jsx)("div", {
+         className: qQ()("PluginsGrid", {
+           SectionBody: !XQ
+         }),
+         children: PQ.map((QQ => {
+           let [XQ, wQ] = QQ;
+           return (0, sQ.jsx)(gQ, {
+             plugin: XQ,
+             callbacks: wQ,
+             disabled: WQ
+           }, XQ)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L296-L316` → after: `L128-L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L128-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/109.js#L128-L135) · [Before (L296-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/109.js#L296-L316)

```diff
-       }))
-     }
- 
-     function wp(pp, ip) {
-       return Sp(this, void 0, void 0, (function() {
-         var cp;
-         return xp(this, (function(Op) {
-           switch (Op.label) {
-             case 0:
-               return pp.items ? (cp = tp(pp.items).filter((function(pp) {
-                 return "file" === pp.kind
-               })), "drop" !== ip ? [2, cp] : [4, Promise.all(cp.map(Hp))]) : [3, 2];
-             case 1:
-               return [2, vp(dp(Op.sent()))];
-             case 2:
-               return [2, vp(tp(pp.files).map((function(pp) {
- ... (5 more removed lines; see GitHub link above)
+       });
+       return XQ ? JQ : (0, sQ.jsxs)("div", {
+         className: "BloxdForm",
+         children: [(0, sQ.jsx)("div", {
+           className: "SectionTitle",
+           children: wQ("worldBuilder:pluginsSection")
+         }), JQ]
+       })
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L320-L322` → after: `L139-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L139-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/109.js#L139-L179) · [Before (L320-L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/109.js#L320-L322)

```diff
-       return pp.filter((function(pp) {
-         return -1 === Pp.indexOf(pp.name)
-       }))
+       let {
+         plugin: WQ,
+         callbacks: {
+           isEnabled: XQ,
+           UH: wQ
+         },
+         disabled: TQ
+       } = QQ;
+       const {
+         t: FQ
+       } = (0, zQ.C)(), PQ = XQ();
+       return (0, sQ.jsxs)("div", {
+         className: qQ()("PluginCard", {
+           PluginCardEnabled: PQ,
+           PluginCardDisabledForm: TQ
+         }),
+ ... (25 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L324-L329` → after: `L181-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L181-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/109.js#L181-L197) · [Before (L324-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/109.js#L324-L329)

```diff
- 
-     function tp(pp) {
-       if (null === pp) return [];
-       for (var ip = [], cp = 0; cp < pp.length; cp++) {
-         var Op = pp[cp];
-         ip.push(Op)
+     const JQ = {
+         fallDamage: "classic:enableFallDamage",
+         tpRequests: "classic:enableTpRequests",
+         spawnProtection: "classic:enableSpawnProtection",
+         spawnReset: "classic:enableSpawnReset",
+         smpMarketplace: "classic:enableSmpMarketplace",
+         survivalGuns: "classic:enableSurvivalGuns",
+         dayNight: "classic:enableDayNight"
+       },
+       rQ = {
+         fallDamage: "classic:enableFallDamageDescription",
+         tpRequests: "classic:enableTpRequestsDescription",
+         spawnProtection: "classic:enableSpawnProtectionDescription",
+         spawnReset: "classic:enableSpawnResetDescription",
+         smpMarketplace: "classic:enableSmpMarketplaceDescription",
+         survivalGuns: "classic:enableSurvivalGunsDescription",
+ ... (1 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L331-L332` → after: `L199-L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L199-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/109.js#L199-L224) · [Before (L331-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/109.js#L331-L332)

```diff
-       return ip
-     }
+   },
+   5283: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       h: () => qW,
+       d: () => wW,
+       f: () => XW,
+       j: () => TW
+     });
+     var wQ = XQ(61),
+       qQ = XQ(1404),
+       TQ = XQ(1507),
+       zQ = XQ(1739),
+       sQ = XQ(1226),
+       FQ = XQ(1391),
+       PQ = XQ(1416),
+       gQ = XQ(1094),
+ ... (10 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L335-L337` → after: `L227-L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L227-L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/109.js#L227-L256) · [Before (L335-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/109.js#L335-L337)

```diff
-       if ("function" !== typeof pp.webkitGetAsEntry) return ep(pp);
-       var ip = pp.webkitGetAsEntry();
-       return ip && ip.isDirectory ? kp(ip) : ep(pp)
+       let {
+         icon: WQ,
+         title: XQ,
+         disabled: wQ,
+         children: qQ
+       } = QQ;
+       return (0, GQ.jsxs)("div", {
+         className: IQ()("ManageCard", {
+           ManageCardDisabled: wQ
+         }),
+         children: [(0, GQ.jsxs)("div", {
+           className: "ManageCardHead",
+           children: [(0, GQ.jsx)("div", {
+             className: "ManageCardIcon",
+             children: (0, GQ.jsx)(gQ.d, {
+               name: WQ
+ ... (14 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L341-L343` → after: `L260-L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L260-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/109.js#L260-L274) · [Before (L341-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/109.js#L341-L343)

```diff
-       return pp.reduce((function(pp, ip) {
-         return Yp(Yp([], Lp(pp), !1), Lp(Array.isArray(ip) ? dp(ip) : [ip]), !1)
-       }), [])
+       let {
+         label: WQ,
+         caption: XQ,
+         children: wQ
+       } = QQ;
+       return (0, GQ.jsxs)("div", {
+         className: "ManageStackedField",
+         children: [(0, GQ.jsx)("div", {
+           className: "ManageStackedFieldLabel",
+           children: WQ
+         }), wQ, XQ && (0, GQ.jsx)("div", {
+           className: "ManageStackedFieldCaption",
+           children: XQ
+         })]
+       })
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L347-L350` → after: `L278-L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L278-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/109.js#L278-L301) · [Before (L347-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/109.js#L347-L350)

```diff
-       var ip = pp.getAsFile();
-       if (!ip) return Promise.reject("".concat(pp, " is not a File"));
-       var cp = Ap(ip);
-       return Promise.resolve(cp)
+       let {
+         label: WQ,
+         caption: XQ,
+         disabled: wQ,
+         children: qQ
+       } = QQ;
+       return (0, GQ.jsxs)("div", {
+         className: IQ()("ManageField", {
+           ManageFieldDisabled: wQ
+         }),
+         children: [(0, GQ.jsxs)("div", {
+           className: "ManageFieldText",
+           children: [(0, GQ.jsx)("div", {
+             className: "ManageFieldLabel",
+             children: WQ
+           }), (0, GQ.jsx)("div", {
+ ... (8 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L354-L356` → after: `L305-L500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L305-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/109.js#L305-L500) · [Before (L354-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/109.js#L354-L356)

```diff
-       return Sp(this, void 0, void 0, (function() {
-         return xp(this, (function(ip) {
-           return [2, pp.isDirectory ? kp(pp) : mp(pp)]
+       var WQ, XQ;
+       let {
+         schematicData: wQ,
+         updateSchematicData: qQ,
+         publishFormEnabled: TQ,
+         formEnabled: zQ
+       } = QQ;
+       const {
+         t: FQ
+       } = (0, sQ.C)(), PQ = !TQ, gQ = {
+         tpRequests: {
+           isEnabled: () => !wQ.disableTpRequests,
+           UH: QQ => qQ("disableTpRequests", !QQ)
+         },
+         spawnProtection: {
+           isEnabled: () => !wQ.disableSpawnProtection,
+ ... (180 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L358` → after: `L502-L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L502-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/109.js#L502-L529) · [Before (L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/109.js#L358)

```diff
-       }))
+       }(QQ), XQ = await
+       function(QQ) {
+         return new Promise(((WQ, XQ) => {
+           const wQ = new Image;
+           wQ.onload = () => WQ(wQ), wQ.onerror = () => XQ(new Error("Failed to load image")), wQ.src = QQ
+         }))
+       }(WQ);
+       if (XQ.naturalHeight > XQ.naturalWidth) throw new LQ;
+       const wQ = 1024 * EQ,
+         {
+           dataUrl: qQ,
+           finalQuality: TQ
+         } = function(QQ, WQ) {
+           const XQ = document.createElement("canvas");
+           XQ.width = QQ.naturalWidth, XQ.height = QQ.naturalHeight, XQ.getContext("2d").drawImage(QQ, 0, 0);
+           let wQ = .92,
+ ... (12 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L362-L390` → after: `L538-L640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L538-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/109.js#L538-L640) · [Before (L362-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/109.js#L362-L390)

```diff
-       var ip = pp.createReader();
-       return new Promise((function(pp, cp) {
-         var Op = [];
-         ! function op() {
-           var Ip = this;
-           ip.readEntries((function(ip) {
-             return Sp(Ip, void 0, void 0, (function() {
-               var Ip, Sp, Lp;
-               return xp(this, (function(xp) {
-                 switch (xp.label) {
-                   case 0:
-                     if (ip.length) return [3, 5];
-                     xp.label = 1;
-                   case 1:
-                     return xp.trys.push([1, 3, , 4]), [4, Promise.all(Op)];
-                   case 2:
- ... (13 more removed lines; see GitHub link above)
+       var WQ;
+       let {
+         schematicId: XQ,
+         hasReadUploadPolicy: qQ,
+         onPolicyValidationError: FQ,
+         onThumbnailReady: PQ
+       } = QQ;
+       const {
+         t: rQ
+       } = (0, sQ.C)(), [jQ, BQ] = (0, wQ.useState)(null), [yQ, VQ] = (0, wQ.useState)(""), [DQ, pQ] = (0, wQ.useState)(""), [UQ, bQ] = (0, wQ.useState)(!0), [vQ, dQ] = (0, wQ.useState)(!1), HQ = (0, wQ.useRef)(!1), [aQ, lQ] = (0, wQ.useState)(null), [hQ, iQ] = (0, wQ.useState)(!1 … [truncated]
+         getRootProps: CQ,
+         getInputProps: fQ,
+         isDragActive: SQ
+       } = (0, AQ.c)({
+         accept: {
+           "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp"]
+ ... (87 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L392-L394` → after: `L642-L682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L642-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/109.js#L642-L682) · [Before (L392-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/109.js#L392-L394)

```diff
-           }))
-         }()
-       }))
+           },
+           maxLength: JQ.k
+         }), YQ && (0, GQ.jsx)("div", {
+           className: "ThumbnailUploadError",
+           children: rQ("thumbnail:nameRequired", {
+             min: JQ.l,
+             max: JQ.k
+           })
+         }), (0, GQ.jsxs)("label", {
+           className: "ThumbnailUploadCheckbox",
+           children: [(0, GQ.jsx)("input", {
+             type: "checkbox",
+             checked: UQ,
+             onChange: QQ => {
+               bQ(QQ.target.checked)
+             }
+ ... (25 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L398-L406` → after: `L687-L731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L687-L731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/109.js#L687-L731) · [Before (L398-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/109.js#L398-L406)

```diff
-       return Sp(this, void 0, void 0, (function() {
-         return xp(this, (function(ip) {
-           return [2, new Promise((function(ip, cp) {
-             pp.file((function(cp) {
-               var Op = Ap(cp, pp.fullPath);
-               ip(Op)
-             }), (function(pp) {
-               cp(pp)
-             }))
+       let {
+         schematicId: WQ,
+         ownedThumbnailCount: XQ,
+         onClose: qQ,
+         onThumbnailReady: TQ
+       } = QQ;
+       const {
+         t: zQ
+       } = (0, sQ.C)(), {
+         userContext: FQ
+       } = (0, iQ.c)(), [PQ, rQ] = (0, wQ.useState)(!1), [jQ, BQ] = (0, wQ.useState)(!1), [yQ, VQ] = (0, wQ.useState)(!1), DQ = (0, wQ.useRef)();
+       (0, wQ.useEffect)((() => () => {
+         clearTimeout(DQ.current)
+       }), []);
+       const pQ = function(QQ, WQ) {
+         const XQ = [];
+ ... (29 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L408-L409` → after: `L733-L846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L733-L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/109.js#L733-L846) · [Before (L408-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/109.js#L408-L409)

```diff
-         }))
-       }))
+         })
+       }
+       return (0, GQ.jsxs)("div", {
+         className: IQ()("ThumbnailUploaderInner", {
+           ThumbnailUploaderSuccess: PQ
+         }),
+         children: [PQ && (0, GQ.jsxs)("div", {
+           className: "ThumbnailUploadSuccessOverlay",
+           children: [(0, GQ.jsxs)("div", {
+             className: "ThumbnailUploadSuccessIcon FullyFancyText AnimFadeInScaleUp",
+             children: [(0, GQ.jsx)(gQ.d, {
+               name: "check"
+             }), (0, GQ.jsx)(RQ.d, {})]
+           }), (0, GQ.jsx)("div", {
+             className: "ThumbnailUploadSuccessText AnimFadeInScaleUp",
+             children: zQ("thumbnail:thumbnailUploaded")
+ ... (98 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L411` → after: `L848-L878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L848-L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/109.js#L848-L878) · [Before (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/109.js#L411)

```diff
-     var Rp = cp(5097);
+     var eQ = XQ(1238);
+     const nQ = {
+       "custom-game-bad-thumbnail": {
+         reason: "thumbnail:rejectionInappropriate",
+         tips: ["thumbnail:rejectionInappropriateTip1", "thumbnail:rejectionInappropriateTip2", "thumbnail:rejectionInappropriateTip3"]
+       },
+       "thumbnail-copyright-content": {
+         reason: "thumbnail:rejectionCopyright",
+         tips: ["thumbnail:rejectionCopyrightTip1", "thumbnail:rejectionCopyrightTip2", "thumbnail:rejectionCopyrightTip3"]
+       },
+       "thumbnail-random-irrelevant-content": {
+         reason: "thumbnail:rejectionIrrelevant",
+         tips: ["thumbnail:rejectionIrrelevantTip1", "thumbnail:rejectionIrrelevantTip2", "thumbnail:rejectionIrrelevantTip3"]
+       },
+       "thumbnail-sexual-content": {
+         reason: "thumbnail:rejectionSexual",
+ ... (15 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L414-L421` → after: `L881-L893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L881-L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/109.js#L881-L893) · [Before (L414-L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/109.js#L414-L421)

```diff
-       return function(pp) {
-         if (Array.isArray(pp)) return Qp(pp)
-       }(pp) || function(pp) {
-         if ("undefined" !== typeof Symbol && null != pp[Symbol.iterator] || null != pp["@@iterator"]) return Array.from(pp)
-       }(pp) || lp(pp) || function() {
-         throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
-       }()
-     }
+       var WQ, XQ;
+       let {
+         schematicData: zQ,
+         updateSchematicData: PQ,
+         publishFormEnabled: JQ,
+         onClose: rQ
+       } = QQ;
+       const {
+         t: jQ
+       } = (0, sQ.C)(), {
+         userContext: BQ,
+         isUserContextUpdating: yQ
+       } = (0, iQ.c)(), VQ = (0, hQ.d)(), [DQ, pQ] = (0, wQ.useState)([]), [UQ, bQ] = (0, wQ.useState)([]), [vQ, dQ] = (0, wQ.useState)(!0), [HQ, aQ] = (0, wQ.useState)(null !== (WQ = zQ.customThumbnailId) && void 0 !== WQ ? WQ : null), [AQ, RQ] = (0, wQ.useState)(null), EQ = (0,  … [truncated]
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L423-L429` → after: `L895-L924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L895-L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/109.js#L895-L924) · [Before (L423-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/109.js#L423-L429)

```diff
-     function Mp(pp, ip) {
-       var cp = Object.keys(pp);
-       if (Object.getOwnPropertySymbols) {
-         var Op = Object.getOwnPropertySymbols(pp);
-         ip && (Op = Op.filter((function(ip) {
-           return Object.getOwnPropertyDescriptor(pp, ip).enumerable
-         }))), cp.push.apply(cp, Op)
+       function SQ(QQ, WQ) {
+         kQ.current && (clearTimeout(kQ.current), kQ.current = null), RQ(QQ), null !== QQ && WQ && (kQ.current = setTimeout((() => {
+           RQ(null), kQ.current = null
+         }), 5e3))
+       }(0, wQ.useEffect)((() => () => {
+         clearTimeout(LQ.current), clearTimeout(kQ.current)
+       }), []);
+       const tQ = (0, wQ.useCallback)((() => {
+         dQ(!0), lQ.e.getOwnedThumbnails(BQ).then((QQ => {
+           const WQ = [],
+             XQ = [];
+           for (const wQ of QQ.thumbnails) wQ.rejectionPolicyId ? WQ.push(wQ) : XQ.push(wQ);
+           WQ.sort(((QQ, WQ) => QQ.lastUpdatedAt - WQ.lastUpdatedAt)), XQ.sort(((QQ, WQ) => {
+             const XQ = QQ.approved ? 1 : 0,
+               wQ = (WQ.approved ? 1 : 0) - XQ;
+             return 0 !== wQ ? wQ : WQ.lastUpdatedAt - QQ.lastUpdatedAt
+ ... (14 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L434-L440` → after: `L927-L942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L927-L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/109.js#L927-L942) · [Before (L434-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/109.js#L434-L440)

```diff
-     function Cp(pp) {
-       for (var ip = 1; ip < arguments.length; ip++) {
-         var cp = null != arguments[ip] ? arguments[ip] : {};
-         ip % 2 ? Mp(Object(cp), !0).forEach((function(ip) {
-           Ep(pp, ip, cp[ip])
-         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : Mp(Object(cp)).forEach((function(ip) {
-           Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
+       function xQ() {
+         CQ.current = Date.now(), LQ.current = null;
+         const QQ = uQ.current;
+         uQ.current = null, SQ({
+           text: jQ("thumbnail:settingThumbnail"),
+           type: "info"
+         }, !1), lQ.e.setSchematicThumbnail(BQ, zQ.schematicId, QQ).then((() => {
+           VQ.current && (SQ({
+             text: jQ("thumbnail:thumbnailUpdated"),
+             type: "success"
+           }, !0), EQ.current = QQ, PQ("customThumbnailId", QQ), PQ("customThumbnailBlurhash", void 0), PQ("customThumbnailVariants", void 0))
+         })).catch((QQ => {
+           VQ.current && (SQ({
+             text: QQ.errorMessageForUser ? jQ(QQ.errorMessageForUser, QQ.errorMessageTranslationParams) : jQ("thumbnail:failedToSetThumbnail"),
+             type: "error"
+           }, !0), aQ(EQ.current))
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L446-L452` → after: `L946-L1085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L946-L1085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/109.js#L946-L1085) · [Before (L446-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/109.js#L446-L452)

```diff
-     function Ep(pp, ip, cp) {
-       return ip in pp ? Object.defineProperty(pp, ip, {
-         value: cp,
-         enumerable: !0,
-         configurable: !0,
-         writable: !0
-       }) : pp[ip] = cp, pp
+       function ZQ(QQ) {
+         aQ(QQ), uQ.current = QQ;
+         const WQ = Date.now() - CQ.current;
+         WQ >= 1e3 ? xQ() : (SQ({
+           text: jQ("thumbnail:settingThumbnail"),
+           type: "info"
+         }, !1), LQ.current || (LQ.current = setTimeout((() => {
+           xQ()
+         }), 1e3 - WQ)))
+       }
+       return (0, wQ.useEffect)((() => {
+         !1 === yQ && tQ()
+       }), [yQ, tQ]), UQ.length > 0 ? (0, GQ.jsx)(YQ, {
+         rejectedThumbnails: UQ,
+         userContext: BQ,
+         isMountedRef: VQ,
+ ... (124 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L455-L473` → after: `L1088-L1102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R1088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L1088-L1102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/109.js#L1088-L1102) · [Before (L455-L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/109.js#L455-L473)

```diff
-     function Xp(pp, ip) {
-       return function(pp) {
-         if (Array.isArray(pp)) return pp
-       }(pp) || function(pp, ip) {
-         var cp = null == pp ? null : "undefined" !== typeof Symbol && pp[Symbol.iterator] || pp["@@iterator"];
-         if (null == cp) return;
-         var Op, op, Ip = [],
-           Sp = !0,
-           xp = !1;
-         try {
-           for (cp = cp.call(pp); !(Sp = (Op = cp.next()).done) && (Ip.push(Op.value), !ip || Ip.length !== ip); Sp = !0);
-         } catch (Lp) {
-           xp = !0, op = Lp
-         } finally {
-           try {
-             Sp || null == cp.return || cp.return()
- ... (3 more removed lines; see GitHub link above)
+     function YQ(QQ) {
+       let {
+         rejectedThumbnails: WQ,
+         userContext: XQ,
+         isMountedRef: qQ,
+         onAcknowledged: zQ
+       } = QQ;
+       const {
+         t: PQ
+       } = (0, sQ.C)(), [JQ, rQ] = (0, wQ.useState)(!1), [IQ, jQ] = (0, wQ.useState)(!1), BQ = function(QQ) {
+         const WQ = new Map;
+         for (const XQ of QQ) {
+           const QQ = XQ.rejectionPolicyId,
+             wQ = WQ.get(QQ);
+           wQ ? wQ.push(XQ) : WQ.set(QQ, [XQ])
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L476-L486` → after: `L1105-L1174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R1105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L1105-L1174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/109.js#L1105-L1174) · [Before (L476-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/109.js#L476-L486)

```diff
-       }(pp, ip) || lp(pp, ip) || function() {
-         throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
-       }()
-     }
- 
-     function lp(pp, ip) {
-       if (pp) {
-         if ("string" === typeof pp) return Qp(pp, ip);
-         var cp = Object.prototype.toString.call(pp).slice(8, -1);
-         return "Object" === cp && pp.constructor && (cp = pp.constructor.name), "Map" === cp || "Set" === cp ? Array.from(pp) : "Arguments" === cp || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cp) ? Qp(pp, ip) : void 0
-       }
+       }(WQ);
+       return (0, GQ.jsxs)("div", {
+         className: "ThumbnailRejectionNotice",
+         children: [(0, GQ.jsxs)("div", {
+           className: "ThumbnailRejectionNoticeTitle",
+           children: [(0, GQ.jsx)(gQ.d, {
+             name: "triangle-exclamation"
+           }), " ", PQ("thumbnail:thumbnailsRejected"), " ", (0, GQ.jsx)(gQ.d, {
+             name: "triangle-exclamation"
+           })]
+         }), (0, GQ.jsx)("div", {
+           className: "ThumbnailRejectionNoticeSubtitle",
+           children: PQ("thumbnail:thumbnailsRejectedDescription")
+         }), (0, GQ.jsx)("div", {
+           className: "ThumbnailRejectionNoticeList",
+           children: [...BQ.entries()].map((QQ => {
+ ... (54 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L489-L492` → after: `L1177-L1218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R1177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L1177-L1218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/109.js#L1177-L1218) · [Before (L489-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/109.js#L489-L492)

```diff
-     function Qp(pp, ip) {
-       (null == ip || ip > pp.length) && (ip = pp.length);
-       for (var cp = 0, Op = new Array(ip); cp < ip; cp++) Op[cp] = pp[cp];
-       return Op
+     function NQ(QQ) {
+       let {
+         thumbnailId: WQ,
+         thumbnailName: XQ,
+         onClose: wQ
+       } = QQ;
+       const {
+         t: qQ
+       } = (0, sQ.C)();
+       return (0, GQ.jsxs)("div", {
+         className: "ThumbnailDeleteConfirm",
+         children: [(0, GQ.jsx)("div", {
+           className: "ThumbnailDeleteConfirmTitle",
+           children: qQ("thumbnail:deleteThumbnail")
+         }), (0, GQ.jsxs)("div", {
+           className: "ThumbnailDeleteConfirmImageContainer",
+ ... (26 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L494-L521` → after: `L1220-L1223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R1220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L1220-L1223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/109.js#L1220-L1223) · [Before (L494-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/109.js#L494-L521)

```diff
-     var Jp = "file-invalid-type",
-       Bp = "file-too-large",
-       Np = "file-too-small",
-       Tp = "too-many-files",
-       fp = function(pp) {
-         pp = Array.isArray(pp) && 1 === pp.length ? pp[0] : pp;
-         var ip = Array.isArray(pp) ? "one of ".concat(pp.join(", ")) : pp;
-         return {
-           code: Jp,
-           message: "File type must be ".concat(ip)
-         }
-       },
-       bp = function(pp) {
-         return {
-           code: Bp,
-           message: "File is larger than ".concat(pp, " ").concat(1 === pp ? "byte" : "bytes")
- ... (12 more removed lines; see GitHub link above)
+     var ZQ = XQ(2226),
+       OQ = XQ(5340),
+       KQ = XQ(5346),
+       mQ = XQ(5384);
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L523-L526` → after: `L1225-L1234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R1225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L1225-L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/109.js#L1225-L1234) · [Before (L523-L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/109.js#L523-L526)

```diff
-     function np(pp, ip) {
-       var cp = "application/x-moz-file" === pp.type || (0, Rp.e)(pp, ip);
-       return [cp, cp ? null : fp(ip)]
-     }
+     function MQ(QQ) {
+       let {
+         schematicData: WQ,
+         setTexturePack: XQ,
+         initializeTexturePack: qQ,
+         publishFormEnabled: TQ
+       } = QQ;
+       const {
+         t: zQ
+       } = (0, sQ.C)(), [FQ, PQ] = (0, wQ.useState)(null), [gQ, JQ] = (0, wQ.useState)(null), [rQ, jQ] = (0, wQ.useState)(!1), BQ = (0, hQ.d)(), yQ = TQ && !rQ, VQ = WQ.customTexturePackKey;
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L528-L536` → after: `L1236-L1281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R1236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L1236-L1281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/109.js#L1236-L1281) · [Before (L528-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/109.js#L528-L536)

```diff
-     function Fp(pp, ip, cp) {
-       if (gp(pp.size))
-         if (gp(ip) && gp(cp)) {
-           if (pp.size > cp) return [!1, bp(cp)];
-           if (pp.size < ip) return [!1, hp(ip)]
-         } else {
-           if (gp(ip) && pp.size < ip) return [!1, hp(ip)];
-           if (gp(cp) && pp.size > cp) return [!1, bp(cp)]
-         } return [!0, null]
+       function DQ(QQ) {
+         var WQ;
+         PQ(QQ.metaData.id), JQ(null !== (WQ = QQ.metaData.fromFolderName) && void 0 !== WQ ? WQ : null), (QQ.metaData.id !== ZQ.i.CUSTOM || QQ.metaData.fromFolderName) && XQ(QQ)
+       }
+       return (0, wQ.useEffect)((() => {
+         VQ && (jQ(!0), (0, OQ.e)(VQ).then((QQ => {
+           var WQ;
+           BQ.current && (QQ ? (PQ(QQ.metaData.id), JQ(null !== (WQ = QQ.metaData.fromFolderName) && void 0 !== WQ ? WQ : null), qQ(QQ)) : console.error(`No texture pack at ${VQ}`))
+         })).catch((QQ => {
+           console.error("Error fetching texture pack: ", QQ)
+         })).finally((() => {
+           jQ(!1)
+         })))
+       }), [VQ, qQ, BQ]), (0, GQ.jsxs)("div", {
+         className: "BloxdForm TexturePackSection",
+         children: [(0, GQ.jsx)("div", {
+ ... (30 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L540` → after: `L1286-L1324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R1286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L1286-L1324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/109.js#L1286-L1324) · [Before (L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/109.js#L540)

```diff
-       return void 0 !== pp && null !== pp
+       var WQ;
+       let {
+         gameCategory: XQ,
+         setGameCategory: wQ,
+         disabled: qQ
+       } = QQ;
+       const zQ = null !== (WQ = (0, jQ.jb)(XQ)) && void 0 !== WQ ? WQ : "other";
+       return (0, GQ.jsxs)("div", {
+         className: "GameCategoryPicker",
+         children: [(0, GQ.jsx)(VQ.h, {
+           label: "worldBuilder:gameCategoryGroup",
+           className: "GameCategoryGroup",
+           disabled: qQ,
+           children: (0, GQ.jsx)(DQ.c, {
+             options: jQ.$.map((QQ => ({
+               value: QQ,
+ ... (23 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L544` → after: `L1328-L1393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R1328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L1328-L1393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/109.js#L1328-L1393) · [Before (L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/109.js#L544)

```diff
-       return "function" === typeof pp.isPropagationStopped ? pp.isPropagationStopped() : "undefined" !== typeof pp.cancelBubble && pp.cancelBubble
+       let {
+         editor: WQ,
+         onClose: XQ
+       } = QQ;
+       const {
+         t: wQ
+       } = (0, sQ.C)(), {
+         schematicData: qQ,
+         updateSchematicData: TQ,
+         publishFormEnabled: FQ,
+         formEnabled: PQ
+       } = WQ;
+       return (0, GQ.jsxs)(GQ.Fragment, {
+         children: [(0, GQ.jsxs)(UQ, {
+           icon: "pen-to-square",
+           title: wQ("worldBuilder:basicsSection"),
+ ... (50 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L548-L550` → after: `L1397-L1431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R1397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L1397-L1431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/109.js#L1397-L1431) · [Before (L548-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/109.js#L548-L550)

```diff
-       return pp.dataTransfer ? Array.prototype.some.call(pp.dataTransfer.types, (function(pp) {
-         return "Files" === pp || "application/x-moz-file" === pp
-       })) : !!pp.target && !!pp.target.files
+       let {
+         editor: WQ
+       } = QQ;
+       const {
+         t: XQ
+       } = (0, sQ.C)(), {
+         schematicData: wQ,
+         formEnabled: qQ,
+         hasUnsavedChanges: zQ
+       } = WQ, JQ = qQ && zQ;
+       return (0, GQ.jsxs)("footer", {
+         className: "SchematicPageFooter",
+         children: [qQ && zQ && (0, GQ.jsxs)("div", {
+           className: "SchematicPageFooterStatus",
+           children: [(0, GQ.jsx)("span", {
+             className: "SchematicPageFooterStatusDot"
+ ... (19 more added lines; see GitHub link above)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L554-L555` → after: `L1435-L1443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R1435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L1435-L1443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/109.js#L1435-L1443) · [Before (L554-L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/109.js#L554-L555)

```diff
-       pp.preventDefault()
-     }
+       let {
+         schematic: WQ,
+         onSchematicUpdate: XQ,
+         onClose: qQ,
+         inSourceWorld: zQ
+       } = QQ;
+       const {
+         t: FQ
+       } = (0, sQ.C)();
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L557-L563` → after: `L1445-L1446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R1445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L1445-L1446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/109.js#L1445-L1446) · [Before (L557-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/109.js#L557-L563)

```diff
-     function zp() {
-       for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
-       return function(pp) {
-         for (var cp = arguments.length, Op = new Array(cp > 1 ? cp - 1 : 0), op = 1; op < cp; op++) Op[op - 1] = arguments[op];
-         return ip.some((function(ip) {
-           return !Gp(pp) && ip && ip.apply(void 0, [pp].concat(Op)), Gp(pp)
-         }))
+       function PQ() {
+         null === qQ || void 0 === qQ || qQ()
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L568-L572` → after: `L1479-L1495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R1479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L1479-L1495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/109.js#L1479-L1495) · [Before (L568-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/109.js#L568-L572)

```diff
-       return "audio/*" === pp || "video/*" === pp || "image/*" === pp || "text/*" === pp || /\w+\/[-+.\w]+/g.test(pp)
-     }
- 
-     function Kp(pp) {
-       return /^.*\.[\w]+$/.test(pp)
+       let {
+         schematic: WQ,
+         onSchematicUpdate: XQ,
+         onClose: wQ,
+         inSourceWorld: TQ
+       } = QQ;
+       qQ.NotificationProvider.showCustomPopup({
+         body: QQ => (0, GQ.jsx)(qW, {
+           schematic: WQ,
+           onSchematicUpdate: XQ,
+           onClose: QQ,
+           inSourceWorld: TQ
+         }),
+         middleScreenPopupClassName: "SchematicPopup",
+         onClose: wQ,
+         unlockPointerKey: "schematicPagePopup"
+ ... (1 more added lines; see GitHub link above)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L574-L577` → after: `L1497-L1509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R1497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L1497-L1509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/109.js#L1497-L1509) · [Before (L574-L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/109.js#L574-L577)

```diff
-     var Vp = ["children"],
-       ii = ["open"],
-       ci = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
-       Oi = ["refKey", "onChange", "onClick"];
+   },
+   5307: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       c: () => JQ
+     });
+     var wQ = XQ(1081),
+       qQ = XQ.n(wQ),
+       TQ = XQ(1226),
+       zQ = XQ(1094),
+       sQ = XQ(1507),
+       FQ = XQ(1416),
+       PQ = XQ(1391),
+       gQ = XQ(1145);
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L580-L586` → after: `L1512-L1570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R1512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L1512-L1570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/109.js#L1512-L1570) · [Before (L580-L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/109.js#L580-L586)

```diff
-       return function(pp) {
-         if (Array.isArray(pp)) return xi(pp)
-       }(pp) || function(pp) {
-         if ("undefined" !== typeof Symbol && null != pp[Symbol.iterator] || null != pp["@@iterator"]) return Array.from(pp)
-       }(pp) || Si(pp) || function() {
-         throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
-       }()
+       let {
+         editor: WQ,
+         className: XQ
+       } = QQ;
+       const {
+         t: wQ
+       } = (0, TQ.C)(), {
+         schematicData: JQ,
+         formEnabled: rQ,
+         publishFormEnabled: IQ
+       } = WQ, jQ = !rQ || !IQ;
+       return (0, gQ.jsxs)("div", {
+         className: qQ()("PublishButtonContainer", XQ),
+         children: [WQ.canEditSourceWorld && (0, gQ.jsxs)(sQ.h, {
+           onClick: WQ.editSourceWorld,
+           disabled: jQ,
+ ... (43 more added lines; see GitHub link above)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L588-L607` → after: `L1572-L1581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R1572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L1572-L1581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/109.js#L1572-L1581) · [Before (L588-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/109.js#L588-L607)

```diff
- 
-     function Ii(pp, ip) {
-       return function(pp) {
-         if (Array.isArray(pp)) return pp
-       }(pp) || function(pp, ip) {
-         var cp = null == pp ? null : "undefined" !== typeof Symbol && pp[Symbol.iterator] || pp["@@iterator"];
-         if (null == cp) return;
-         var Op, op, Ip = [],
-           Sp = !0,
-           xp = !1;
-         try {
-           for (cp = cp.call(pp); !(Sp = (Op = cp.next()).done) && (Ip.push(Op.value), !ip || Ip.length !== ip); Sp = !0);
-         } catch (Lp) {
-           xp = !0, op = Lp
-         } finally {
-           try {
- ... (4 more removed lines; see GitHub link above)
+   },
+   5340: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       e: () => qQ
+     });
+     var wQ = XQ(1238);
+     async function qQ(QQ) {
+       const WQ = await fetch(`${wQ.clientSideServerUrls.s3Url}/${QQ}`, {
+         headers: {
+           Accept: "application/json"
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L609-L612` → after: `L1583-L1586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R1583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L1583-L1586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/109.js#L1583-L1586) · [Before (L609-L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/109.js#L609-L612)

```diff
-         return Ip
-       }(pp, ip) || Si(pp, ip) || function() {
-         throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
-       }()
+       });
+       if (404 === WQ.status || 403 === WQ.status) return null;
+       if (!WQ.ok) throw new Error(`Failed to download the texture pack (${WQ.status})`);
+       return await WQ.json()
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L616-L619` → after: `L1607-L1628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R1607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L1607-L1628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/109.js#L1607-L1628) · [Before (L616-L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/109.js#L616-L619)

```diff
-       if (pp) {
-         if ("string" === typeof pp) return xi(pp, ip);
-         var cp = Object.prototype.toString.call(pp).slice(8, -1);
-         return "Object" === cp && pp.constructor && (cp = pp.constructor.name), "Map" === cp || "Set" === cp ? Array.from(pp) : "Arguments" === cp || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cp) ? xi(pp, ip) : void 0
+       return {
+         schematicId: QQ.schematicId,
+         name: QQ.name,
+         description: QQ.description,
+         gamePublished: WQ,
+         gameCategory: QQ.gameCategory,
+         defaultGamemode: QQ.defaultGamemode,
+         voidDeathHeight: QQ.voidDeathHeight,
+         disableKeepInventory: QQ.disableKeepInventory,
+         disableTpRequests: QQ.disableTpRequests,
+         disableLobbySpawn: QQ.disableLobbySpawn,
+         disableMobs: QQ.disableMobs,
+         disableSpawnProtection: QQ.disableSpawnProtection,
+         disableFallDamage: QQ.disableFallDamage,
+         worldBorder: QQ.worldBorder,
+         hideLobbyCode: QQ.hideLobbyCode,
+ ... (6 more added lines; see GitHub link above)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L623-L627` → after: `L1632-L1641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R1632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L1632-L1641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/109.js#L1632-L1641) · [Before (L623-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/109.js#L623-L627)

```diff
-     function xi(pp, ip) {
-       (null == ip || ip > pp.length) && (ip = pp.length);
-       for (var cp = 0, Op = new Array(ip); cp < ip; cp++) Op[cp] = pp[cp];
-       return Op
-     }
+     function yQ(QQ) {
+       let {
+         onNavigateAway: WQ,
+         inSourceWorld: XQ = !1
+       } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+       const {
+         userContext: yQ
+       } = (0, IQ.c)(), VQ = (0, jQ.useNavigatePreserveSearch)(), [DQ, pQ] = (0, wQ.useState)({
+         ...QQ
+       }), [GQ, UQ] = (0, wQ.useState)("Enter"), [bQ, vQ] = (0, wQ.useState)(void 0), dQ = (0, wQ.useRef)(BQ(QQ, QQ.gamePublished)), HQ = (0, wQ.useRef)(void 0), aQ = "Enter" === GQ, lQ = yQ.playerHasRank("developer") || yQ.playerHasRank("admin") || "Enter" === GQ && !1 !== DQ.sch … [truncated]
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L629-L635` → after: `L1643-L1647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R1643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L1643-L1647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/109.js#L1643-L1647) · [Before (L629-L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/109.js#L629-L635)

```diff
-     function Li(pp, ip) {
-       var cp = Object.keys(pp);
-       if (Object.getOwnPropertySymbols) {
-         var Op = Object.getOwnPropertySymbols(pp);
-         ip && (Op = Op.filter((function(ip) {
-           return Object.getOwnPropertyDescriptor(pp, ip).enumerable
-         }))), cp.push.apply(cp, Op)
+       function iQ(QQ, WQ) {
+         pQ((XQ => ({
+           ...XQ,
+           [QQ]: WQ
+         })))
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L637-L638` → after: `L1649-L1651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R1649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L1649-L1651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/109.js#L1649-L1651) · [Before (L637-L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/109.js#L637-L638)

```diff
-       return cp
-     }
+       const cQ = (0, wQ.useCallback)((QQ => {
+         HQ.current = QQ, vQ(QQ)
+       }), []);
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L640-L646` → after: `L1653-L1676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R1653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L1653-L1676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/109.js#L1653-L1676) · [Before (L640-L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/109.js#L640-L646)

```diff
-     function Yi(pp) {
-       for (var ip = 1; ip < arguments.length; ip++) {
-         var cp = null != arguments[ip] ? arguments[ip] : {};
-         ip % 2 ? Li(Object(cp), !0).forEach((function(ip) {
-           Di(pp, ip, cp[ip])
-         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : Li(Object(cp)).forEach((function(ip) {
-           Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
+       function AQ(QQ) {
+         UQ("Loading");
+         const WQ = BQ(DQ, QQ),
+           XQ = bQ !== HQ.current ? bQ : void 0;
+         gQ.e.updateSchematic(yQ, WQ, XQ).then((XQ => {
+           let {
+             customTexturePackKey: wQ
+           } = XQ;
+           UQ("Success"), iQ("customTexturePackKey", wQ), dQ.current = WQ, HQ.current = void 0, vQ(void 0), setTimeout((() => {
+             iQ("gamePublished", QQ), UQ("Enter")
+           }), 1e3)
+         })).catch((QQ => {
+           var WQ;
+           (console.error("Failed to save schematic:", QQ), UQ("Error"), QQ instanceof zQ.b && QQ.errorMessageForUser) && rQ.NotificationProvider.showAlertPopup({
+             title: "worldBuilder:changesNotSaved",
+             subtitle: QQ.errorMessageForUser,
+ ... (8 more added lines; see GitHub link above)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L649-L699` → after: `L1679-L1699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R1679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L1679-L1699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/109.js#L1679-L1699) · [Before (L649-L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/109.js#L649-L699)

```diff
-       return pp
-     }
- 
-     function Di(pp, ip, cp) {
-       return ip in pp ? Object.defineProperty(pp, ip, {
-         value: cp,
-         enumerable: !0,
-         configurable: !0,
-         writable: !0
-       }) : pp[ip] = cp, pp
-     }
- 
-     function Ai(pp, ip) {
-       if (null == pp) return {};
-       var cp, Op, op = function(pp, ip) {
-         if (null == pp) return {};
- ... (35 more removed lines; see GitHub link above)
+       return {
+         schematicData: DQ,
+         updateSchematicData: iQ,
+         setTexturePack: vQ,
+         initializeTexturePack: cQ,
+         updateState: GQ,
+         formEnabled: aQ,
+         publishFormEnabled: lQ,
+         hasUnsavedChanges: hQ,
+         canEditSourceWorld: !XQ,
+         saveSchematic: AQ,
+         unpublishSchematic: function() {
+           rQ.NotificationProvider.showPromptPopup({
+             icon: "rocket-launch",
+             title: "worldBuilder:unpublishAsGameConfirmTitle",
+             subtitle: "worldBuilder:unpublishAsGameConfirmSubtitle",
+ ... (5 more added lines; see GitHub link above)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L1009-L1013` → after: `L1702-L1711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R1702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L1702-L1711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/109.js#L1702-L1711) · [Before (L1009-L1013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/109.js#L1009-L1013)

```diff
-         Ei = function(pp) {
-           return kp ? null : Mi(pp)
-         },
-         Xi = function(pp) {
-           mp && pp.stopPropagation()
+         editSourceWorld: function() {
+           UQ("Loading"), JQ.b.getSourceWorld(DQ.schematicId).then((QQ => {
+             PQ.gameBridge.send("leaveGame", {
+               reloadPath: "/"
+             }), (0, FQ.m)("other"), VQ((0, qQ.c)("classic", QQ)), null === WQ || void 0 === WQ || WQ()
+           })).catch((QQ => {
+             console.error("Failed to get source world:", QQ), UQ("Error"), setTimeout((() => {
+               UQ("Enter")
+             }), 1e3)
+           }))
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L1015-L1111` → after: `L1713-L1717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R1713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L1713-L1717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/109.js#L1713-L1717) · [Before (L1015-L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/109.js#L1015-L1111)

```diff
-         li = (0, Op.useMemo)((function() {
-           return function() {
-             var pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
-               ip = pp.refKey,
-               cp = void 0 === ip ? "ref" : ip,
-               Op = pp.role,
-               Ip = pp.onKeyDown,
-               Sp = pp.onFocus,
-               xp = pp.onBlur,
-               Lp = pp.onClick,
-               Yp = pp.onDragEnter,
-               Dp = pp.onDragOver,
-               Ap = pp.onDragLeave,
-               Pp = pp.onDrop,
-               Wp = Ai(pp, ci);
-             return Yi(Yi(Di({
- ... (81 more removed lines; see GitHub link above)
+         playGame: function() {
+           PQ.gameBridge.send("leaveGame", {
+             reloadPath: "/"
+           }), VQ((0, sQ.v)((0, TQ.u)(DQ.schematicId), DQ)), null === WQ || void 0 === WQ || WQ()
+         }
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L1114-L1116` → after: `L1720-L1721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R1720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L1720-L1721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/109.js#L1720-L1721) · [Before (L1114-L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/109.js#L1114-L1116)

```diff
- 
-     function vi() {}
-   }
+   },
+   5299: () => {}
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/110.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/110.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae)

#### 1. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L4-L80` → after: `L4-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L4-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/110.js#L4-L63) · [Before (L4-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/110.js#L4-L80)

```diff
-   5127: (pp, ip, cp) => {
-     function Op(pp) {
-       return Op = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
-         return typeof pp
-       } : function(pp) {
-         return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
-       }, Op(pp)
-     }
-     Object.defineProperty(ip, "__esModule", {
-       value: !0
-     }), ip.default = void 0;
-     var op = Ap(cp(1049)),
-       Ip = function(pp, ip) {
-         if (!ip && pp && pp.__esModule) return pp;
-         if (null === pp || "object" !== Op(pp) && "function" !== typeof pp) return {
-           default: pp
- ... (61 more removed lines; see GitHub link above)
+   36658: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       c: () => FQ
+     });
+     var wQ = XQ(1081),
+       qQ = XQ.n(wQ),
+       TQ = XQ(61),
+       zQ = XQ(4894),
+       sQ = XQ(1145);
+ 
+     function FQ(QQ) {
+       let {
+         locked: WQ,
+         children: XQ
+       } = QQ;
+       const wQ = (0, TQ.useRef)(null),
+ ... (44 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L82-L218` → after: `L65-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L65-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/110.js#L65-L93) · [Before (L82-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/110.js#L82-L218)

```diff
-         throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
-       }
-       var Ip, Sp = !0,
-         xp = !1;
-       return {
-         s: function() {
-           cp = cp.call(pp)
-         },
-         n: function() {
-           var pp = cp.next();
-           return Sp = pp.done, pp
-         },
-         e: function(pp) {
-           xp = !0, Ip = pp
-         },
-         f: function() {
- ... (121 more removed lines; see GitHub link above)
+       })
+     }
+ 
+     function yQ(QQ) {
+       let {
+         flow: WQ,
+         close: XQ,
+         onCreating: sQ,
+         onCreated: BQ,
+         onFailedClosed: yQ,
+         join: VQ
+       } = QQ;
+       const {
+         t: DQ
+       } = (0, zQ.C)(), [pQ, GQ] = (0, qQ.useState)(wQ.v), [UQ, bQ] = (0, qQ.useState)(!1), [vQ, dQ] = (0, qQ.useState)(""), HQ = (0, JQ.d)();
+       (0, qQ.useEffect)((() => {
+ ... (13 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L644` → after: `L97-L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L97-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/110.js#L97-L259) · [Before (L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/110.js#L644)

```diff
-         return pp
+       });
+       return (0, jQ.jsxs)("div", {
+         className: "CreateCustomLobby",
+         children: [(0, jQ.jsx)("div", {
+           className: "CreateCustomLobbyTitleContainer",
+           children: (0, jQ.jsx)("div", {
+             className: "CreateCustomLobbyTitle",
+             children: DQ("homePage:myWorld")
+           })
+         }), (0, jQ.jsx)(FQ.c, {
+           locked: UQ,
+           children: (0, jQ.jsxs)("div", {
+             className: "CreateCustomLobbyFields",
+             children: [(0, jQ.jsx)(rQ.e, {
+               value: pQ.defaultGamemode,
+               onChange: QQ => {
+ ... (147 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L646-L684` → after: `L261-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L261-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/110.js#L261-L268) · [Before (L646-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/110.js#L646-L684)

```diff
-       Ap = function(pp) {
-         return pp && pp.ownerDocument && pp.ownerDocument.defaultView || Ip
-       },
-       Pp = tp(0, 0, 0, 0);
- 
-     function Wp(pp) {
-       return parseFloat(pp) || 0
-     }
- 
-     function yp(pp) {
-       for (var ip = [], cp = 1; cp < arguments.length; cp++) ip[cp - 1] = arguments[cp];
-       return ip.reduce((function(ip, cp) {
-         return ip + Wp(pp["border-" + cp + "-width"])
-       }), 0)
-     }
- 
- ... (23 more removed lines; see GitHub link above)
+       rQ = {
+         fallDamage: "classic:enableFallDamageDescription",
+         tpRequests: "classic:enableTpRequestsDescription",
+         spawnProtection: "classic:enableSpawnProtectionDescription",
+         spawnReset: "classic:enableSpawnResetDescription",
+         smpMarketplace: "classic:enableSmpMarketplaceDescription",
+         survivalGuns: "classic:enableSurvivalGunsDescription",
+         dayNight: "classic:enableDayNightDescription"
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L686-L800` → after: `L270-L361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L270-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/110.js#L270-L361) · [Before (L686-L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/110.js#L686-L800)

```diff
-       return tp(op.left, op.top, xp, Lp)
-     }
-     var wp = "undefined" !== typeof SVGGraphicsElement ? function(pp) {
-       return pp instanceof Ap(pp).SVGGraphicsElement
-     } : function(pp) {
-       return pp instanceof Ap(pp).SVGElement && "function" === typeof pp.getBBox
-     };
- 
-     function vp(pp) {
-       return op ? wp(pp) ? function(pp) {
-         var ip = pp.getBBox();
-         return tp(0, 0, ip.width, ip.height)
-       }(pp) : Up(pp) : Pp
-     }
- 
-     function tp(pp, ip, cp, Op) {
- ... (99 more removed lines; see GitHub link above)
+   },
+   36653: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       e: () => PQ,
+       f: () => gQ
+     });
+     XQ(61);
+     var wQ = XQ(1081),
+       qQ = XQ.n(wQ),
+       TQ = XQ(4948),
+       zQ = XQ(382),
+       sQ = XQ(1226),
+       FQ = XQ(1145);
+ 
+     function PQ(QQ) {
+       let {
+ ... (76 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/111.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/111.js` (42 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4)

#### 1. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/111.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/111.js#L2)

```diff
- export const ids = [111, 402];
+ export const ids = [111];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L4-L5` → after: `L4-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L4-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/111.js#L4-L25) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/111.js#L4-L5)

```diff
-   5085: (pp, ip, cp) => {
-     var Op = cp(5088);
+   5336: (QQ, WQ) => {
+     WQ.b = function(QQ, WQ) {
+       if (QQ && WQ) {
+         var XQ = Array.isArray(WQ) ? WQ : WQ.split(","),
+           wQ = QQ.name || "",
+           qQ = (QQ.type || "").toLowerCase(),
+           TQ = qQ.replace(/\/.*$/, "");
+         return XQ.some((function(QQ) {
+           var WQ = QQ.trim().toLowerCase();
+           return "." === WQ.charAt(0) ? wQ.toLowerCase().endsWith(WQ) : WQ.endsWith("/*") ? TQ === WQ.replace(/\/.*$/, "") : qQ === WQ
+         }))
+       }
+       return !0
+     }
+   },
+   5310: (QQ, WQ, XQ) => {
+ ... (6 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L7` → after: `L27-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L27-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/111.js#L27-L35) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/111.js#L7)

```diff
-     function op() {}
+     function zQ(QQ, WQ, XQ, wQ) {
+       return new(XQ || (XQ = Promise))((function(qQ, TQ) {
+         function zQ(QQ) {
+           try {
+             FQ(wQ.next(QQ))
+           } catch (WQ) {
+             TQ(WQ)
+           }
+         }
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L9-L14` → after: `L37-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L37-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/111.js#L37-L126) · [Before (L9-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/111.js#L9-L14)

```diff
-     function Ip() {}
-     Ip.resetWarningCache = op, pp.exports = function() {
-       function pp(pp, ip, cp, op, Ip, Sp) {
-         if (Sp !== Op) {
-           var xp = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
-           throw xp.name = "Invariant Violation", xp
+         function sQ(QQ) {
+           try {
+             FQ(wQ.throw(QQ))
+           } catch (WQ) {
+             TQ(WQ)
+           }
+         }
+ 
+         function FQ(QQ) {
+           var WQ;
+           QQ.done ? qQ(QQ.value) : (WQ = QQ.value, WQ instanceof XQ ? WQ : new XQ((function(QQ) {
+             QQ(WQ)
+           }))).then(zQ, sQ)
+         }
+         FQ((wQ = wQ.apply(QQ, WQ || [])).next())
+       }))
+ ... (74 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L18-L19` → after: `L132-L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L132-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/111.js#L132-L149) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/111.js#L18-L19)

```diff
-       function ip() {
-         return pp
+     function FQ(QQ, WQ) {
+       var XQ = "function" === typeof Symbol && QQ[Symbol.iterator];
+       if (!XQ) return QQ;
+       var wQ, qQ, TQ = XQ.call(QQ),
+         zQ = [];
+       try {
+         for (;
+           (void 0 === WQ || WQ-- > 0) && !(wQ = TQ.next()).done;) zQ.push(wQ.value)
+       } catch (sQ) {
+         qQ = {
+           error: sQ
+         }
+       } finally {
+         try {
+           wQ && !wQ.done && (XQ = TQ.return) && XQ.call(TQ)
+         } finally {
+ ... (2 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L21-L45` → after: `L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/111.js#L151) · [Before (L21-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/111.js#L21-L45)

```diff
-       pp.isRequired = pp;
-       var cp = {
-         array: pp,
-         bigint: pp,
-         bool: pp,
-         func: pp,
-         number: pp,
-         object: pp,
-         string: pp,
-         symbol: pp,
-         any: pp,
-         arrayOf: ip,
-         element: pp,
-         elementType: pp,
-         instanceOf: ip,
-         node: pp,
- ... (9 more removed lines; see GitHub link above)
+       return zQ
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L66-L78` → after: `L154-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L154-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/111.js#L154-L254) · [Before (L66-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/111.js#L66-L78)

```diff
-     function Dp() {
-       const {
-         t: pp
-       } = (0, Ip.H)(), ip = (0, Op.useNavigatePreserveSearch)();
-       return (0, xp.b)(), (0, Yp.jsxs)("div", {
-         className: "ShaderPackPublishPage AnimFadeIn",
-         children: [(0, Yp.jsx)("div", {
-           className: "ShaderPackPublishBack",
-           children: (0, Yp.jsx)(op.d, {
-             onClick: () => {
-               ip(Lp.R)
-             },
-             children: pp("shaderPackListing:backToPacks")
+     function PQ(QQ, WQ, XQ) {
+       if (XQ || 2 === arguments.length)
+         for (var wQ, qQ = 0, TQ = WQ.length; qQ < TQ; qQ++) !wQ && qQ in WQ || (wQ || (wQ = Array.prototype.slice.call(WQ, 0, qQ)), wQ[qQ] = WQ[qQ]);
+       return QQ.concat(wQ || Array.prototype.slice.call(WQ))
+     }
+     Object.create;
+     "function" === typeof SuppressedError && SuppressedError;
+     var gQ = new Map([
+       ["aac", "audio/aac"],
+       ["abw", "application/x-abiword"],
+       ["arc", "application/x-freearc"],
+       ["avif", "image/avif"],
+       ["avi", "video/x-msvideo"],
+       ["azw", "application/vnd.amazon.ebook"],
+       ["bin", "application/octet-stream"],
+       ["bmp", "image/bmp"],
+ ... (85 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L80-L91` → after: `L256-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L256-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/111.js#L256-L268) · [Before (L80-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/111.js#L80-L91)

```diff
-         }), (0, Yp.jsx)("h1", {
-           className: "ShaderPackPublishTitle",
-           children: pp("shaderPackListing:publishTitle")
-         }), (0, Yp.jsx)(Sp.ShaderPackPublishForm, {
-           existing: null,
-           onPublished: pp => {
-             ip((0, Lp.V)(pp.packId), {
-               replace: !0
-             })
-           }
-         })]
-       })
+         }
+         return QQ
+       }(QQ);
+       if ("string" !== typeof XQ.path) {
+         var wQ = QQ.webkitRelativePath;
+         Object.defineProperty(XQ, "path", {
+           value: "string" === typeof WQ ? WQ : "string" === typeof wQ && wQ.length > 0 ? wQ : QQ.name,
+           writable: !1,
+           configurable: !1,
+           enumerable: !0
+         })
+       }
+       return XQ
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L93-L108` → after: `L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/111.js#L270) · [Before (L93-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/111.js#L93-L108)

```diff
-   },
-   6716: (pp, ip, cp) => {
-     cp.d(ip, {
-       b: () => Pp,
-       d: () => Wp,
-       h: () => Ap,
-       i: () => yp
-     });
-     var Op = cp(62),
-       op = cp(6704),
-       Ip = cp(1520),
-       Sp = cp(6698),
-       xp = cp(6724),
-       Lp = cp(1141);
-     const Yp = "shaderPackListingView",
-       Dp = "shaderPackListingFilterOpen";
+     var rQ = [".DS_Store", "Thumbs.db"];
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L110-L113` → after: `L272-L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L272-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/111.js#L272-L273) · [Before (L110-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/111.js#L110-L113)

```diff
-     function Ap() {
-       var pp;
-       const [ip, cp] = (0, xp.d)(Yp, op.J[0]);
-       return [null !== (pp = op.J.find((pp => pp === ip))) && void 0 !== pp ? pp : op.J[0], cp]
+     function IQ(QQ) {
+       return "object" === typeof QQ && null !== QQ
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L116-L119` → after: `L276-L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L276-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/111.js#L276-L279) · [Before (L116-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/111.js#L116-L119)

```diff
-     function Pp() {
-       (0, Op.useEffect)((() => () => {
-         window.location.pathname.startsWith(Sp.R) || (0, Sp.g)()
-       }), [])
+     function jQ(QQ) {
+       return DQ(QQ.target.files).map((function(QQ) {
+         return JQ(QQ)
+       }))
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L122-L123` → after: `L282-L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L282-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/111.js#L282-L296) · [Before (L122-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/111.js#L122-L123)

```diff
-     function Wp() {
-       return (0, xp.d)(Dp, !1)
+     function BQ(QQ) {
+       return zQ(this, void 0, void 0, (function() {
+         return sQ(this, (function(WQ) {
+           switch (WQ.label) {
+             case 0:
+               return [4, Promise.all(QQ.map((function(QQ) {
+                 return QQ.getFile()
+               })))];
+             case 1:
+               return [2, WQ.sent().map((function(QQ) {
+                 return JQ(QQ)
+               }))]
+           }
+         }))
+       }))
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L126-L135` → after: `L299-L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L299-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/111.js#L299-L314) · [Before (L126-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/111.js#L126-L135)

```diff
-     function yp() {
-       const {
-         userContext: pp,
-         isUserContextUpdating: ip
-       } = (0, Lp.b)(), [cp, op] = (0, Op.useState)(null), Sp = (0, Op.useRef)(new Set);
- 
-       function xp(pp, ip) {
-         op((cp => {
-           const Op = new Set(cp);
-           return ip ? Op.add(pp) : Op.delete(pp), Op
+     function yQ(QQ, WQ) {
+       return zQ(this, void 0, void 0, (function() {
+         var XQ;
+         return sQ(this, (function(wQ) {
+           switch (wQ.label) {
+             case 0:
+               return QQ.items ? (XQ = DQ(QQ.items).filter((function(QQ) {
+                 return "file" === QQ.kind
+               })), "drop" !== WQ ? [2, XQ] : [4, Promise.all(XQ.map(pQ))]) : [3, 2];
+             case 1:
+               return [2, VQ(GQ(wQ.sent()))];
+             case 2:
+               return [2, VQ(DQ(QQ.files).map((function(QQ) {
+                 return JQ(QQ)
+               })))]
+           }
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L137-L160` → after: `L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/111.js#L316) · [Before (L137-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/111.js#L137-L160)

```diff
-       }
-       return (0, Op.useEffect)((() => {
-         if (ip) return;
-         let cp = !1;
-         return Ip.b.getFavouriteShaderPacks(pp).then((pp => {
-           cp || op(new Set(pp))
-         })).catch((pp => {
-           console.error("Failed to get favourite shader packs", pp), cp || op(new Set)
-         })), () => {
-           cp = !0
-         }
-       }), [pp, ip]), {
-         isFavourite: pp => null === cp ? null : cp.has(pp),
-         toggle: function(ip) {
-           if (null === cp || Sp.current.has(ip)) return;
-           Sp.current.add(ip);
- ... (8 more removed lines; see GitHub link above)
+       }))
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L198` → after: `L320-L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L320-L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/111.js#L320-L322) · [Before (L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/111.js#L198)

```diff
-       return `${Sp}/${encodeURIComponent(pp)}`
+       return QQ.filter((function(QQ) {
+         return -1 === rQ.indexOf(QQ.name)
+       }))
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L203` → after: `L326-L331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L326-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/111.js#L326-L331) · [Before (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/111.js#L203)

```diff
-       Yp = pp
+       if (null === QQ) return [];
+       for (var WQ = [], XQ = 0; XQ < QQ.length; XQ++) {
+         var wQ = QQ[XQ];
+         WQ.push(wQ)
+       }
+       return WQ
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L206-L207` → after: `L334-L337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L334-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/111.js#L334-L337) · [Before (L206-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/111.js#L206-L207)

```diff
-     function Ap() {
-       return Yp
+     function pQ(QQ) {
+       if ("function" !== typeof QQ.webkitGetAsEntry) return UQ(QQ);
+       var WQ = QQ.webkitGetAsEntry();
+       return WQ && WQ.isDirectory ? vQ(WQ) : UQ(QQ)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L210-L211` → after: `L340-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L340-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/111.js#L340-L343) · [Before (L210-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/111.js#L210-L211)

```diff
-     function Pp() {
-       Yp = null
+     function GQ(QQ) {
+       return QQ.reduce((function(QQ, WQ) {
+         return PQ(PQ([], FQ(QQ), !1), FQ(Array.isArray(WQ) ? GQ(WQ) : [WQ]), !1)
+       }), [])
```
