# Changed — Bundle Modifications Report (Part 026 / 104)

- **Updated at**: `2026-11-24T00:51 JST`
- **Part**: `26 / 104` (**314** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 025](part-025.md) · [Part 027 →](part-027.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/146.js` (3lwmg.ecbaa066 → w4ddu.56408518 · continued)

- **File**: `bundles/bloxd.io/chunks/js/146.js` (25 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af)

#### 8. `bundles/bloxd.io/chunks/js/146.js` (Changed code · before: `L878` → after: `L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3afR117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af) · [After (L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/146.js#L117) · [Before (L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/146.js#L878)

```diff
-       datetime(kk) {
+       async getInGameDescriptions() {
```

#### 9. `bundles/bloxd.io/chunks/js/146.js` (Changed code · before: `L880-L1074` → after: `L119-L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3afR119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af) · [After (L119-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/146.js#L119-L130) · [Before (L880-L1074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/146.js#L880-L1074)

```diff
-         return "string" === typeof kk ? this._addCheck({
-           kind: "datetime",
-           precision: null,
-           offset: !1,
-           message: kk
-         }) : this._addCheck({
-           kind: "datetime",
-           precision: "undefined" === typeof(null === kk || void 0 === kk ? void 0 : kk.precision) ? null : null === kk || void 0 === kk ? void 0 : kk.precision,
-           offset: null !== (ek = null === kk || void 0 === kk ? void 0 : kk.offset) && void 0 !== ek && ek,
-           ...Vk.errToObj(null === kk || void 0 === kk ? void 0 : kk.message)
-         })
-       }
-       regex(kk, ek) {
-         return this._addCheck({
-           kind: "regex",
-           regex: kk,
- ... (179 more removed lines; see GitHub link above)
+         const {
+           requestedGameNameWithVariation: zC
+         } = (0, qC.d)(), ZC = (0, FC.k)(zC), QC = null !== (CC = PC[zC]) && void 0 !== CC ? CC : pC[ZC.type], wC = await (0, bC.v)(fC.e.ENGLISH, ZC.title), oC = (0, qC.d)();
+         if ((0, qC.h)(oC)) return {
+           primary: `${QC} in a Discord World`
+         };
+         const WC = `${QC} in ${wC}`;
+         return (0, nC.H)(oC.lobbyName) ? {
+           primary: WC
+         } : {
+           primary: WC,
+           secondary: `Lobby ${oC.lobbyName}`
```

#### 10. `bundles/bloxd.io/chunks/js/146.js` (Changed code · before: `L1077-L1181` → after: `L133-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3afR133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af) · [After (L133-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/146.js#L133-L138) · [Before (L1077-L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/146.js#L1077-L1181)

```diff
-       gte(kk, ek) {
-         return this.setLimit("min", kk, !0, Vk.toString(ek))
-       }
-       gt(kk, ek) {
-         return this.setLimit("min", kk, !1, Vk.toString(ek))
-       }
-       lte(kk, ek) {
-         return this.setLimit("max", kk, !0, Vk.toString(ek))
-       }
-       lt(kk, ek) {
-         return this.setLimit("max", kk, !1, Vk.toString(ek))
-       }
-       setLimit(kk, ek, ik, Dk) {
-         return new ck({
-           ...this._def,
-           checks: [...this._def.checks, {
- ... (89 more removed lines; see GitHub link above)
+       getCurrentChannelType() {
+         const {
+           channelId: CC,
+           guildId: zC
+         } = this.getCurrentChannelAndGuild();
+         return null !== zC ? wC.b.GUILD : null !== CC ? wC.b.DM : null
```

#### 11. `bundles/bloxd.io/chunks/js/146.js` (Changed code · before: `L1183-L1188` → after: `L140-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3afR140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af) · [After (L140-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/146.js#L140-L148) · [Before (L1183-L1188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/146.js#L1183-L1188)

```diff
-       get isFinite() {
-         let kk = null,
-           ek = null;
-         for (const ik of this._def.checks) {
-           if ("finite" === ik.kind || "int" === ik.kind || "multipleOf" === ik.kind) return !0;
-           "min" === ik.kind ? (null === ek || ik.value > ek) && (ek = ik.value) : "max" === ik.kind && (null === kk || ik.value < kk) && (kk = ik.value)
+       getRequiredScopeForCurrentChannel() {
+         const CC = this.getCurrentChannelType(),
+           zC = [MC.APPLICATION_COMMANDS, MC.IDENTIFY, MC.EMAIL, MC.GUILDS, MC.WRITE_ACTIVITIES];
+         switch (CC) {
+           case wC.b.DM:
+           case wC.b.GUILD:
+             return [...zC];
+           default:
+             throw new Error(`Unknown Discord channel type: ${CC}`)
```

#### 12. `bundles/bloxd.io/chunks/js/146.js` (Changed code · before: `L1203-L1236` → after: `L151-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3afR151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af) · [After (L151-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/146.js#L151-L155) · [Before (L1203-L1236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/146.js#L1203-L1236)

```diff
-       _parse(kk) {
-         this._def.coerce && (kk.data = BigInt(kk.data));
-         if (this._getType(kk) !== Mk.bigint) {
-           const ek = this._getOrReturnCtx(kk);
-           return pk(ek, {
-             code: xk.invalid_type,
-             expected: Mk.bigint,
-             received: ek.parsedType
-           }), Yk
-         }
-         let ek;
-         const ik = new yk;
-         for (const Dk of this._def.checks)
-           if ("min" === Dk.kind) {
-             (Dk.inclusive ? kk.data < Dk.value : kk.data <= Dk.value) && (ek = this._getOrReturnCtx(kk, ek), pk(ek, {
-               code: xk.too_small,
- ... (18 more removed lines; see GitHub link above)
+       getCurrentChannelAndGuild() {
+         const {
+           channelId: CC,
+           guildId: zC
+         } = this.discordSdk;
```

#### 13. `bundles/bloxd.io/chunks/js/146.js` (Changed code · before: `L1238-L1249` → after: `L157-L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3afR157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af) · [After (L157-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/146.js#L157-L175) · [Before (L1238-L1249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/146.js#L1238-L1249)

```diff
-           status: ik.value,
-           value: kk.data
-         }
-       }
-       gte(kk, ek) {
-         return this.setLimit("min", kk, !0, Vk.toString(ek))
-       }
-       gt(kk, ek) {
-         return this.setLimit("min", kk, !1, Vk.toString(ek))
-       }
-       lte(kk, ek) {
-         return this.setLimit("max", kk, !0, Vk.toString(ek))
+           channelId: null !== CC && void 0 !== CC ? CC : null,
+           guildId: null !== zC && void 0 !== zC ? zC : null
+         }
+       }
+       getInstanceId() {
+         return this.discordSdk.instanceId
+       }
+       async askDiscordUserForAuthorization() {
+         const CC = this.getRequiredScopeForCurrentChannel(),
+           {
+             code: zC
+           } = await this.discordSdk.commands.authorize({
+             client_id: NC.c.discordClientID,
+             response_type: "code",
+             state: "",
+             prompt: "none",
+ ... (3 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/146.js` (Changed code · before: `L1251-L1252` → after: `L177-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3afR177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af) · [After (L177-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/146.js#L177-L178) · [Before (L1251-L1252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/146.js#L1251-L1252)

```diff
-       lt(kk, ek) {
-         return this.setLimit("max", kk, !1, Vk.toString(ek))
+       getCachedAccessToken() {
+         return this.cachedAccessToken
```

#### 15. `bundles/bloxd.io/chunks/js/146.js` (Changed code · before: `L1254-L1263` → after: `L180-L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3afR180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af) · [After (L180-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/146.js#L180-L181) · [Before (L1254-L1263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/146.js#L1254-L1263)

```diff
-       setLimit(kk, ek, ik, Dk) {
-         return new Tk({
-           ...this._def,
-           checks: [...this._def.checks, {
-             kind: kk,
-             value: ek,
-             inclusive: ik,
-             message: Vk.toString(Dk)
-           }]
-         })
+       setCachedAccessToken(CC) {
+         this.cachedAccessToken = CC
```

#### 16. `bundles/bloxd.io/chunks/js/146.js` (Changed code · before: `L1265-L1269` → after: `L183-L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3afR183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af) · [After (L183-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/146.js#L183-L184) · [Before (L1265-L1269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/146.js#L1265-L1269)

```diff
-       _addCheck(kk) {
-         return new Tk({
-           ...this._def,
-           checks: [...this._def.checks, kk]
-         })
+       registerGuild(CC, zC) {
+         this.guildNameCache[CC] = zC
```

#### 17. `bundles/bloxd.io/chunks/js/146.js` (Changed code · before: `L1271-L1277` → after: `L186-L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3afR186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af) · [After (L186-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/146.js#L186-L189) · [Before (L1271-L1277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/146.js#L1271-L1277)

```diff
-       positive(kk) {
-         return this._addCheck({
-           kind: "min",
-           value: BigInt(0),
-           inclusive: !1,
-           message: Vk.toString(kk)
-         })
+       async authenticate(CC) {
+         return this.discordSdk.commands.authenticate({
+           access_token: CC
+         }).then((CC => null !== CC))
```

#### 18. `bundles/bloxd.io/chunks/js/146.js` (Changed code · before: `L1279-L1285` → after: `L191-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3afR191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af) · [After (L191-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/146.js#L191-L199) · [Before (L1279-L1285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/146.js#L1279-L1285)

```diff
-       negative(kk) {
-         return this._addCheck({
-           kind: "max",
-           value: BigInt(0),
-           inclusive: !1,
-           message: Vk.toString(kk)
-         })
+       async getUserLocale() {
+         try {
+           const {
+             locale: CC
+           } = await this.discordSdk.commands.userSettingsGetLocale();
+           return CC
+         } catch (CC) {
+           return console.error("Failed to get user locale from Discord:", CC.stack), null
+         }
```

#### 19. `bundles/bloxd.io/chunks/js/146.js` (Changed code · before: `L1287-L1293` → after: `L201-L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3afR201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af) · [After (L201-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/146.js#L201-L204) · [Before (L1287-L1293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/146.js#L1287-L1293)

```diff
-       nonpositive(kk) {
-         return this._addCheck({
-           kind: "max",
-           value: BigInt(0),
-           inclusive: !0,
-           message: Vk.toString(kk)
-         })
+       async getChannelName(CC) {
+         return this.discordSdk.commands.getChannel({
+           channel_id: CC
+         }).then((CC => CC.name)).catch((CC => "Your Current Discord Chat"))
```

#### 20. `bundles/bloxd.io/chunks/js/146.js` (Changed code · before: `L1295-L1300` → after: `L206-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3afR206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af) · [After (L206-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/146.js#L206-L211) · [Before (L1295-L1300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/146.js#L1295-L1300)

```diff
-       nonnegative(kk) {
-         return this._addCheck({
-           kind: "min",
-           value: BigInt(0),
-           inclusive: !0,
-           message: Vk.toString(kk)
+       async getDiscordContextFromChannelId(CC) {
+         const zC = await this.getChannelName(CC);
+         return wC.f.from({
+           type: wC.b.DM,
+           channelId: CC,
+           channelName: zC
```

#### 21. `bundles/bloxd.io/chunks/js/146.js` (Changed code · before: `L1303-L1307` → after: `L214-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3afR214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af) · [After (L214-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/146.js#L214-L219) · [Before (L1303-L1307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/146.js#L1303-L1307)

```diff
-       multipleOf(kk, ek) {
-         return this._addCheck({
-           kind: "multipleOf",
-           value: kk,
-           message: Vk.toString(ek)
+       getDiscordContextFromGuildId(CC) {
+         const zC = this.guildNameCache[CC];
+         return (0, nC.H)(zC) ? null : wC.d.from({
+           type: wC.b.GUILD,
+           guildId: CC,
+           guildName: zC
```

#### 22. `bundles/bloxd.io/chunks/js/146.js` (Changed code · before: `L1310-L1385` → after: `L222-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3afR222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af) · [After (L222-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/146.js#L222-L227) · [Before (L1310-L1385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/146.js#L1310-L1385)

```diff
-       get minValue() {
-         let kk = null;
-         for (const ek of this._def.checks) "min" === ek.kind && (null === kk || ek.value > kk) && (kk = ek.value);
-         return kk
-       }
-       get maxValue() {
-         let kk = null;
-         for (const ek of this._def.checks) "max" === ek.kind && (null === kk || ek.value < kk) && (kk = ek.value);
-         return kk
-       }
-     }
-     Tk.create = kk => {
-       var ek;
-       return new Tk({
-         checks: [],
-         typeName: Qe.ZodBigInt,
- ... (60 more removed lines; see GitHub link above)
+       async getCurrentDiscordContext() {
+         const {
+           channelId: CC,
+           guildId: zC
+         } = this.getCurrentChannelAndGuild();
+         return null !== zC ? this.getDiscordContextFromGuildId(zC) : null !== CC ? this.getDiscordContextFromChannelId(CC) : null
```

#### 23. `bundles/bloxd.io/chunks/js/146.js` (Changed code · before: `L1387-L1391` → after: `L229-L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3afR229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af) · [After (L229-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/146.js#L229-L230) · [Before (L1387-L1391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/146.js#L1387-L1391)

```diff
-       _addCheck(kk) {
-         return new Ok({
-           ...this._def,
-           checks: [...this._def.checks, kk]
-         })
+       exit(CC) {
+         console.log("Exiting Discord Activity:", CC), this.discordSdk.close(gC.CLOSE_NORMAL, CC)
```

#### 24. `bundles/bloxd.io/chunks/js/146.js` (Changed code · before: `L1393-L1398` → after: `L232-L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3afR232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af) · [After (L232-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/146.js#L232-L233) · [Before (L1393-L1398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/146.js#L1393-L1398)

```diff
-       min(kk, ek) {
-         return this._addCheck({
-           kind: "min",
-           value: kk.getTime(),
-           message: Vk.toString(ek)
-         })
+       isMobilePlatform() {
+         return this.discordSdk.platform === QC.g.MOBILE
```

#### 25. `bundles/bloxd.io/chunks/js/146.js` (Changed code · before: `L1400-L1404` → after: `L235-L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3afR235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af) · [After (L235-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/146.js#L235-L247) · [Before (L1400-L1404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/146.js#L1400-L1404)

```diff
-       max(kk, ek) {
-         return this._addCheck({
-           kind: "max",
-           value: kk.getTime(),
-           message: Vk.toString(ek)
+       applyDiscordSafeAreaNotch() {
+         const CC = getComputedStyle(document.documentElement),
+           zC = (zC, ZC) => {
+             const QC = parseFloat(CC.getPropertyValue(`--discord-safe-area-inset-${zC}`));
+             return isNaN(QC) || 0 === ZC ? 0 : QC / ZC * 100
+           };
+         WC.b.set({
+           notchSize: {
+             top: zC("top", window.innerHeight),
+             right: Math.max(zC("right", window.innerWidth), 7),
+             bottom: 0,
+             left: zC("left", window.innerWidth)
+           }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/147.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/147.js` (23 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05)

#### 1. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L4` → after: `L4-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/147.js#L4-L9) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/147.js#L4)

```diff
-   7922: (kk, ek, ik) => {
+   8113: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => bb,
+       g: () => lZ
+     });
+     var QC = {};
```

#### 2. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L6-L17` → after: `L11-L4817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L11-L4817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/147.js#L11-L4817) · [Before (L6-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/147.js#L6-L17)

```diff
-       BloxdMsnAccountSdk: () => Kk,
-       MsnSdkAdaptor: () => Hk,
-       msnMockIdentityStorageKey: () => Pk
-     });
-     var Dk = ik(1298),
-       fk = ik(1163),
-       Sk = ik(3430),
-       bk = ik(594);
-     ik(38);
-     const rk = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js",
-       Pk = "msnMockIdentity";
-     let mk = null;
+       e: () => QQ,
+       j: () => nQ,
+       i: () => bQ,
+       k: () => UZ,
+       n: () => LZ,
+       q: () => KQ,
+       t: () => kZ,
+       v: () => mQ,
+       w: () => JQ,
+       A: () => dQ,
+       B: () => BZ,
+       C: () => iQ,
+       F: () => hQ,
+       J: () => YQ,
+       N: () => OZ,
+       M: () => zQ,
+ ... (4791 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L19-L23` → after: `L4819-L4832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R4819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L4819-L4832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/147.js#L4819-L4832) · [Before (L19-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/147.js#L19-L23)

```diff
-     function Mk() {
-       return mk ??= async function() {
-         await (0, fk.d)(rk, {}, !1);
-         for (let kk = 0; kk < 50 && !window.$msstart; kk++) await (0, bk.H)(100)
-       }(), mk
+     function Ww(CC, zC, ZC) {
+       let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {};
+       const wC = BZ.extend({
+         cmd: nZ(zC),
+         data: ZC
+       });
+       return async ZC => {
+         const bC = await CC({
+           cmd: zC,
+           args: ZC,
+           transfer: QC(ZC)
+         });
+         return wC.parse(bC).data
+       }
```

#### 4. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L25-L33` → after: `L4834-L4957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R4834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L4834-L4957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/147.js#L4834-L4957) · [Before (L25-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/147.js#L25-L33)

```diff
-     class Kk {
-       constructor() {}
-       static async setup() {
-         try {
-           await Promise.race([Mk(), (0, bk.H)(1e4).then((() => {
-             throw new Error("Not loaded after 10000ms")
-           }))])
-         } catch (kk) {
-           return console.error("MSN Play SDK failed to load, so MSN Play accounts are unavailable:", kk), null
+ 
+     function Nw(CC) {
+       let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {};
+       const ZC = yZ[CC].response,
+         QC = BZ.extend({
+           cmd: nZ(CC),
+           data: ZC
+         });
+       return ZC => async wC => {
+         const bC = await ZC({
+           cmd: CC,
+           args: wC,
+           transfer: zC(wC)
+         });
+         return QC.parse(bC).data
+       }
+ ... (108 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L35` → after: `L4959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R4959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L4959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/147.js#L4959) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/147.js#L35)

```diff
-         return window.$msstart ? new Kk : (console.error("MSN Play SDK script loaded but window.$msstart is missing, so MSN Play accounts are unavailable"), null)
+         return rw(nC)
```

#### 6. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L37-L43` → after: `L4961-L5006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R4961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L4961-L5006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/147.js#L4961-L5006) · [Before (L37-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/147.js#L37-L43)

```diff
-       async getSignedInUser() {
-         try {
-           return await Promise.race([window.$msstart.getSignedInUserAsync(), (0, bk.H)(1e4).then((() => {
-             throw new Error("No answer after 10000ms")
-           }))])
-         } catch (kk) {
-           return "USER_NOT_CONSENTED" !== (null === kk || void 0 === kk ? void 0 : kk.code) && console.error("Failed to get the signed-in MSN Play player:", kk), null
+       try {
+         QC.name = CC
+       } catch (wC) {}
+       return QC.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", QC.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", QC
+     }
+ 
+     function aw(CC) {
+       return 14 + (CC + 64 >>> 9 << 4) + 1
+     }
+ 
+     function tw(CC, zC) {
+       var ZC = (65535 & CC) + (65535 & zC);
+       return (CC >> 16) + (zC >> 16) + (ZC >> 16) << 16 | 65535 & ZC
+     }
+ 
+     function Dw(CC, zC, ZC, QC, wC, bC) {
+ ... (30 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L46-L47` → after: `L5039-L5050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R5039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L5039-L5050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/147.js#L5039-L5050) · [Before (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/147.js#L46-L47)

```diff
-       async signIn() {
-         return null !== null ? null : await window.$msstart.signInAsync()
+       return rw(QC)
+     }
+ 
+     function Vw(CC, zC, ZC, QC) {
+       switch (CC) {
+         case 0:
+           return zC & ZC ^ ~zC & QC;
+         case 1:
+         case 3:
+           return zC ^ ZC ^ QC;
+         case 2:
+           return zC & ZC ^ zC & QC ^ ZC & QC
```

#### 8. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L50-L98` → after: `L5053-L5077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R5053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L5053-L5077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/147.js#L5053-L5077) · [Before (L50-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/147.js#L50-L98)

```diff
-     const xk = 20,
-       nk = {
-         top: [{
-           width: 970,
-           height: 250
-         }, {
-           width: 728,
-           height: 90
-         }, {
-           width: 320,
-           height: 50
-         }],
-         right: [{
-           width: 300,
-           height: 600
-         }, {
- ... (33 more removed lines; see GitHub link above)
+ 
+     function Cb(CC, zC) {
+       return CC << zC | CC >>> 32 - zC
+     }
+     Tw("v5", 80, (function(CC) {
+       var zC = [1518500249, 1859775393, 2400959708, 3395469782],
+         ZC = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
+       if ("string" === typeof CC) {
+         var QC = unescape(encodeURIComponent(CC));
+         CC = [];
+         for (var wC = 0; wC < QC.length; ++wC) CC.push(QC.charCodeAt(wC))
+       } else Array.isArray(CC) || (CC = Array.prototype.slice.call(CC));
+       CC.push(128);
+       for (var bC = CC.length / 4 + 2, nC = Math.ceil(bC / 16), fC = new Array(nC), oC = 0; oC < nC; ++oC) {
+         for (var qC = new Uint32Array(16), FC = 0; FC < 16; ++FC) qC[FC] = CC[64 * oC + 4 * FC] << 24 | CC[64 * oC + 4 * FC + 1] << 16 | CC[64 * oC + 4 * FC + 2] << 8 | CC[64 * oC + 4 * FC + 3];
+         fC[oC] = qC
+ ... (9 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L100-L103` → after: `L5079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R5079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L5079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/147.js#L5079) · [Before (L100-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/147.js#L100-L103)

```diff
-       };
-     class Hk extends Dk.e {
-       constructor() {
-         super(), this.name = "msn", this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
+         ZC[0] = ZC[0] + SC >>> 0, ZC[1] = ZC[1] + pC >>> 0, ZC[2] = ZC[2] + PC >>> 0, ZC[3] = ZC[3] + GC >>> 0, ZC[4] = ZC[4] + RC >>> 0
```

#### 10. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L105-L106` → after: `L5081-L5086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R5081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L5081-L5086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/147.js#L5081-L5086) · [Before (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/147.js#L105-L106)

```diff
-       static async setup() {
-         return await Mk(), new Hk
+       return [ZC[0] >> 24 & 255, ZC[0] >> 16 & 255, ZC[0] >> 8 & 255, 255 & ZC[0], ZC[1] >> 24 & 255, ZC[1] >> 16 & 255, ZC[1] >> 8 & 255, 255 & ZC[1], ZC[2] >> 24 & 255, ZC[2] >> 16 & 255, ZC[2] >> 8 & 255, 255 & ZC[2], ZC[3] >> 24 & 255, ZC[3] >> 16 & 255, ZC[3] >> 8 & 255, 255 … [truncated]
+     }));
+     class zb extends Error {
+       constructor(CC) {
+         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
+         super(zC), this.code = CC, this.message = zC, this.name = "Discord SDK Error"
```

#### 11. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L108-L109` → after: `L5088-L5104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R5088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L5088-L5104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/147.js#L5088-L5104) · [Before (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/147.js#L108-L109)

```diff
-       playVideoAd(kk, ek) {
-         this.playVideoOrRewarded("video", kk, kk)
+     }
+     const Zb = ["log", "warn", "debug", "info", "error"];
+     var Qb;
+     ! function(CC) {
+       CC[CC.HANDSHAKE = 0] = "HANDSHAKE", CC[CC.FRAME = 1] = "FRAME", CC[CC.CLOSE = 2] = "CLOSE", CC[CC.HELLO = 3] = "HELLO"
+     }(Qb || (Qb = {}));
+     const wb = new Set("undefined" === typeof window ? [] : [window.location.origin, "https://discord.com", "https://discordapp.com", "https://ptb.discord.com", "https://ptb.discordapp.com", "https://canary.discord.com", "https://canary.discordapp.com", "https://staging.discord.c … [truncated]
+     class bb {
+       getTransfer(CC) {
+         var zC;
+         switch (CC.cmd) {
+           case UZ.SUBSCRIBE:
+           case UZ.UNSUBSCRIBE:
+             return;
+           default:
+             return null !== (zC = CC.transfer) && void 0 !== zC ? zC : void 0
+ ... (1 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L111-L112` → after: `L5106-L5174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R5106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L5106-L5174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/147.js#L5106-L5174) · [Before (L111-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/147.js#L111-L112)

```diff
-       playRewarded(kk, ek) {
-         this.playVideoOrRewarded("rewarded", kk, ek)
+       constructor(CC, zC) {
+         var ZC;
+         if (this.eventBus = new qC, this.source = null, this.sourceOrigin = "", this.pendingCommands = new Map, this.sendCommand = CC => {
+             var zC;
+             if (null == this.source) throw new Error("Attempting to send message before initialization");
+             const ZC = kw();
+             null === (zC = this.source) || void 0 === zC || zC.postMessage([Qb.FRAME, Object.assign(Object.assign({}, CC), {
+               nonce: ZC
+             })], this.sourceOrigin, this.getTransfer(CC));
+             return new Promise(((CC, zC) => {
+               this.pendingCommands.set(ZC, {
+                 resolve: CC,
+                 reject: zC
+               })
+             }))
+           }, this.commands = (ZC = this.sendCommand, {
+ ... (53 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L114-L117` → after: `L5176-L5184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R5176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L5176-L5184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/147.js#L5176-L5184) · [Before (L114-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/147.js#L114-L117)

```diff
-       canShowBloxdAd(kk) {
-         for (const ek in Uk)
-           if (kk.adId in Uk[ek]) return !1;
-         return !0
+       close(CC, zC) {
+         var ZC;
+         window.removeEventListener("message", this.handleMessage);
+         const QC = kw();
+         null === (ZC = this.source) || void 0 === ZC || ZC.postMessage([Qb.CLOSE, {
+           code: CC,
+           message: zC,
+           nonce: QC
+         }], this.sourceOrigin)
```

#### 14. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L119-L147` → after: `L5186-L5216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R5186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L5186-L5216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/147.js#L5186-L5216) · [Before (L119-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/147.js#L119-L147)

```diff
-       async renderBanner(kk) {
-         if (null !== this.currentlyShowingBannerPlacement) return void console.log(`AD ${(0,Sk.d)(kk)}: msn placement is already showing so not requesting`);
-         const ek = Uk[kk.adType][kk.adId];
-         if ((0, bk.F)(ek)) return void console.warn(`AD ${(0,Sk.d)(kk)}: no msn placement is configured for this bloxd placement so not showing any ad`);
-         const ik = [];
-         for (const Dk of ek)
-           for (const kk of nk[Dk])
-             if (kk.width <= window.innerWidth - 40 && kk.height <= window.innerHeight - 40) {
-               const ek = {
-                 placement: Dk,
-                 width: kk.width,
-                 height: kk.height
-               };
-               if (!ik.some((kk => lk(ek, kk)))) {
-                 ik.push(ek);
-                 break
- ... (13 more removed lines; see GitHub link above)
+       async subscribe(CC, zC) {
+         for (var ZC = arguments.length, QC = new Array(ZC > 2 ? ZC - 2 : 0), wC = 2; wC < ZC; wC++) QC[wC - 2] = arguments[wC];
+         const [bC] = QC, nC = this.eventBus.listenerCount(CC), fC = this.eventBus.on(CC, zC);
+         return Object.values(EQ).includes(CC) && CC !== EQ.READY && 0 === nC && await this.sendCommand({
+           cmd: UZ.SUBSCRIBE,
+           args: bC,
+           evt: CC
+         }), fC
+       }
+       async unsubscribe(CC, zC) {
+         for (var ZC = arguments.length, QC = new Array(ZC > 2 ? ZC - 2 : 0), wC = 2; wC < ZC; wC++) QC[wC - 2] = arguments[wC];
+         const [bC] = QC;
+         return CC !== EQ.READY && 1 === this.eventBus.listenerCount(CC) && await this.sendCommand({
+           cmd: UZ.UNSUBSCRIBE,
+           evt: CC,
+           args: bC
+ ... (15 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L149-L150` → after: `L5218-L5221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R5218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L5218-L5221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/147.js#L5218-L5221) · [Before (L149-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/147.js#L149-L150)

```diff
-       async clearBanner(kk) {
-         null !== this.currentlyShowingBannerPlacement && (0, Sk.d)(kk) === this.currentlyShowingBannerPlacement.placementId && (console.log(`AD ${(0,Sk.d)(kk)}: Attempting to clear msn banner ads for banner`, kk), await this.clearAllBannerAds())
+       addOnReadyListener() {
+         this.eventBus.once(EQ.READY, (() => {
+           this.overrideConsoleLogging(), this.isReady = !0
+         }))
```

#### 16. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L152` → after: `L5223-L5249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R5223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L5223-L5249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/147.js#L5223-L5249) · [Before (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/147.js#L152)

```diff
-       async clearAllBannerAds() {
+       overrideConsoleLogging() {
+         if (this.configuration.disableConsoleLogOverride) return;
+         const CC = (CC, zC) => {
+           this.commands.captureLog({
+             level: CC,
+             message: zC
+           })
+         };
+         Zb.forEach((zC => {
+           ! function(CC, zC, ZC) {
+             const QC = CC[zC],
+               wC = CC;
+             QC && (CC[zC] = function() {
+               const CC = [].slice.call(arguments),
+                 bC = "" + CC.join(" ");
+               ZC(zC, bC), QC.apply(wC, CC)
+ ... (11 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L154-L155` → after: `L5251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R5251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L5251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/147.js#L5251) · [Before (L154-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/147.js#L154-L155)

```diff
-           if (this.isCurrentlyClearingAllBanners) return;
-           this.isCurrentlyClearingAllBanners = !0, null !== this.currentlyShowingBannerPlacement && await this.currentlyShowingBannerPlacement.renderPromise, await window.$msstart.hideDisplayAdsAsync(), console.log("AD: Successfully cleared all msn banner ads")
+           QC = Fw(CC)
```

#### 18. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L157-L159` → after: `L5253-L5262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R5253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L5253-L5262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/147.js#L5253-L5262) · [Before (L157-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/147.js#L157-L159)

```diff
-           console.log("AD: Error while clearing all msn banner ads", kk)
-         } finally {
-           this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
+           return console.error("Failed to parse", CC), void console.error(wC)
+         }
+         if ("DISPATCH" === QC.cmd) this.eventBus.emit(QC.evt, QC.data);
+         else {
+           if (QC.evt === HQ) {
+             if (null != QC.nonce) return null === (zC = this.pendingCommands.get(QC.nonce)) || void 0 === zC || zC.reject(QC.data), void this.pendingCommands.delete(QC.nonce);
+             this.eventBus.emit("error", new zb(QC.data.code, QC.data.message))
+           }
+           if (null == QC.nonce) return void console.error("Missing nonce", CC);
+           null === (ZC = this.pendingCommands.get(QC.nonce)) || void 0 === ZC || ZC.resolve(QC), this.pendingCommands.delete(QC.nonce)
```

#### 19. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L162-L174` → after: `L5265-L5400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R5265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L5265-L5400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/147.js#L5265-L5400) · [Before (L162-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/147.js#L162-L174)

```diff
-       playVideoOrRewarded(kk, ek, ik) {
-         const Dk = ek => {
-           console.error(`AD: Error while playing MSN ${kk} ad: `, ek), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), ik()
-         };
-         if (window.$msstart) {
-           console.log(`AD: Attempting to play MSN ${kk} ad`), document.getElementById("GenericVideoWrapper").style.display = "flex";
-           const ik = async () => {
-             try {
-               const ik = await window.$msstart.loadAdsAsync("rewarded" === kk),
-                 Dk = await window.$msstart.showAdsAsync(ik.instanceId);
-               this.clearAllBannerAds(), await Dk.showAdsCompletedAsync, console.log(`AD: Successfully finished MSN ${kk} ad`), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), ek()
-             } catch (ik) {
-               Dk(ik)
+       _getSearch() {
+         return "undefined" === typeof window ? "" : window.location.search
+       }
+     }
+     var nb, fb = 1e9,
+       ob = !0,
+       qb = "[DecimalError] ",
+       Fb = qb + "Invalid argument: ",
+       Wb = qb + "Exponent out of range: ",
+       Nb = Math.floor,
+       Mb = Math.pow,
+       gb = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
+       Sb = 1e7,
+       pb = 9007199254740991,
+       Pb = Nb(1286742750677284.5),
+       Gb = {};
+ ... (120 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L176-L180` → after: `L5402-L5526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R5402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L5402-L5526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/147.js#L5402-L5526) · [Before (L176-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/147.js#L176-L180)

```diff
-           };
-           window.adStartSoPause(null, {
-             preventMovement: !0
-           }), ik()
-         } else Dk(`AD: Can't play MSN ${kk} ad because sdk is not loaded`)
+           } else if ("9999" != zC) break;
+           nC += 4
+         } return ob = !0, Yb(QC, ZC)
+     }, Gb.times = Gb.mul = function(CC) {
+       var zC, ZC, QC, wC, bC, nC, fC, oC, qC, FC = this,
+         WC = FC.constructor,
+         NC = FC.d,
+         MC = (CC = new WC(CC)).d;
+       if (!FC.s || !CC.s) return new WC(0);
+       for (CC.s *= FC.s, ZC = FC.e + CC.e, (oC = NC.length) < (qC = MC.length) && (bC = NC, NC = MC, MC = bC, nC = oC, oC = qC, qC = nC), bC = [], QC = nC = oC + qC; QC--;) bC.push(0);
+       for (QC = qC; --QC >= 0;) {
+         for (zC = 0, wC = oC + QC; wC > QC;) fC = bC[wC] + MC[QC] * NC[wC - QC - 1] + zC, bC[wC--] = fC % Sb | 0, zC = fC / Sb | 0;
+         bC[wC] = (bC[wC] + zC) % Sb | 0
+       }
+       for (; !bC[--nC];) bC.pop();
+       return zC ? ++ZC : bC.shift(), CC.d = bC, CC.e = ZC, ob ? Yb(CC, WC.precision) : CC
+ ... (109 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L185-L194` → after: `L5531-L5558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R5531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L5531-L5558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/147.js#L5531-L5558) · [Before (L185-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/147.js#L185-L194)

```diff
-       let ek, ik;
-       switch (kk.placement) {
-         case "top":
-           ek = (window.innerWidth - kk.width) / 2, ik = xk;
-           break;
-         case "right":
-           ek = window.innerWidth - kk.width - xk, ik = window.innerHeight / 2 - kk.height / 2 - 10;
-           break;
-         case "left":
-           ek = xk, ik = window.innerHeight / 2 - kk.height / 2 - 10
+       for (var zC = 7 * CC.e, ZC = CC.d[0]; ZC >= 10; ZC /= 10) zC++;
+       return zC
+     }
+ 
+     function vb(CC, zC, ZC) {
+       if (zC > CC.LN10.sd()) throw ob = !0, ZC && (CC.precision = ZC), Error(qb + "LN10 precision limit exceeded");
+       return Yb(new CC(CC.LN10), zC)
+     }
+ 
+     function eb(CC) {
+       for (var zC = ""; CC--;) zC += "0";
+       return zC
+     }
+ 
+     function hb(CC, zC) {
+       var ZC, QC, wC, bC, nC, fC, oC, qC, FC, WC = 1,
+ ... (12 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L196-L200` → after: `L5560-L5584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R5560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L5560-L5584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/147.js#L5560-L5584) · [Before (L196-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/147.js#L196-L200)

```diff
-       return {
-         x1: ek,
-         y1: ik,
-         x2: ek + kk.width,
-         y2: ik + kk.height
+     }
+ 
+     function Kb(CC, zC) {
+       var ZC, QC, wC;
+       for ((ZC = zC.indexOf(".")) > -1 && (zC = zC.replace(".", "")), (QC = zC.search(/e/i)) > 0 ? (ZC < 0 && (ZC = QC), ZC += +zC.slice(QC + 1), zC = zC.substring(0, QC)) : ZC < 0 && (ZC = zC.length), QC = 0; 48 === zC.charCodeAt(QC);) ++QC;
+       for (wC = zC.length; 48 === zC.charCodeAt(wC - 1);) --wC;
+       if (zC = zC.slice(QC, wC)) {
+         if (wC -= QC, ZC = ZC - QC - 1, CC.e = Nb(ZC / 7), CC.d = [], QC = (ZC + 1) % 7, ZC < 0 && (QC += 7), QC < wC) {
+           for (QC && CC.d.push(+zC.slice(0, QC)), wC -= 7; QC < wC;) CC.d.push(+zC.slice(QC, QC += 7));
+           QC = 7 - (zC = zC.slice(QC)).length
+         } else QC -= wC;
+         for (; QC--;) zC += "0";
+         if (CC.d.push(+zC), ob && (CC.e > Pb || CC.e < -Pb)) throw Error(Wb + ZC)
+       } else CC.s = 0, CC.e = 0, CC.d = [0];
+       return CC
+     }
+ ... (9 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L205-L207` → after: `L5602-L5625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R5602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L5602-L5625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/147.js#L5602-L5625) · [Before (L205-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/147.js#L205-L207)

```diff
-       const ik = wk(kk),
-         Dk = wk(ek);
-       return !(ik.x2 <= Dk.x1 || Dk.x2 <= ik.x1 || ik.y2 <= Dk.y1 || Dk.y2 <= ik.y1)
+       var ZC, QC, wC, bC, nC, fC, oC, qC, FC, WC, NC = CC.constructor,
+         MC = NC.precision;
+       if (!CC.s || !zC.s) return zC.s ? zC.s = -zC.s : zC = new NC(CC), ob ? Yb(zC, MC) : zC;
+       if (oC = CC.d, WC = zC.d, QC = zC.e, qC = CC.e, oC = oC.slice(), nC = qC - QC) {
+         for ((FC = nC < 0) ? (ZC = oC, nC = -nC, fC = WC.length) : (ZC = WC, QC = qC, fC = oC.length), nC > (wC = Math.max(Math.ceil(MC / 7), fC) + 2) && (nC = wC, ZC.length = 1), ZC.reverse(), wC = nC; wC--;) ZC.push(0);
+         ZC.reverse()
+       } else {
+         for ((FC = (wC = oC.length) < (fC = WC.length)) && (fC = wC), wC = 0; wC < fC; wC++)
+           if (oC[wC] != WC[wC]) {
+             FC = oC[wC] < WC[wC];
+             break
+           } nC = 0
+       }
+       for (FC && (ZC = oC, oC = WC, WC = ZC, zC.s = -zC.s), fC = oC.length, wC = WC.length - fC; wC > 0; --wC) oC[fC++] = 0;
+       for (wC = WC.length; wC > nC;) {
+         if (oC[--wC] < WC[wC]) {
+ ... (8 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/148.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/148.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162)

#### 1. `bundles/bloxd.io/chunks/js/148.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/148.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/148.js#L4)

```diff
-   7926: (kk, ek, ik) => {
+   8116: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/148.js` (Changed code · before: `L6` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/148.js#L6-L8) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/148.js#L6)

```diff
-       GameDistributionSdkAdaptor: () => Sk
+       BloxdMsnAccountSdk: () => WC,
+       MsnSdkAdaptor: () => SC,
+       msnMockIdentityStorageKey: () => oC
```

#### 3. `bundles/bloxd.io/chunks/js/148.js` (Changed code · before: `L8-L13` → after: `L10-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162) · [After (L10-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/148.js#L10-L26) · [Before (L8-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/148.js#L8-L13)

```diff
-     var Dk = ik(1298),
-       fk = ik(1163);
-     class Sk extends Dk.e {
-       constructor(kk) {
-         super(), this.setOnEndCb = kk, this.name = "gamedistribution"
-       }
+     var QC = ZC(1269),
+       wC = ZC(1127),
+       bC = ZC(3441),
+       nC = ZC(600);
+     ZC(38);
+     const fC = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js",
+       oC = "msnMockIdentity";
+     let qC = null;
+ 
+     function FC() {
+       return qC ??= async function() {
+         await (0, wC.e)(fC, {}, !1);
+         for (let CC = 0; CC < 50 && !window.$msstart; CC++) await (0, nC.N)(100)
+       }(), qC
+     }
+     class WC {
+ ... (1 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/148.js` (Changed code · before: `L15-L46` → after: `L28-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162) · [After (L28-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/148.js#L28-L174) · [Before (L15-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/148.js#L15-L46)

```diff
-         let kk;
-         let ek;
-         return window.GD_OPTIONS = {
-           gameId: "b35b336d21654aa5a378480d13ed7225",
-           onEvent: ik => {
-             const Dk = () => {
-               ek && (window.adCompleteSoResume(), ek = !1), kk && (kk(), kk = null)
-             };
-             switch (ik.name) {
-               case "SDK_GAME_START":
-                 console.log("Gamedis SDK_GAME_START"), ek = !1, kk ? (kk(), kk = null, window.adCompleteSoResume()) : console.error("onEndCb is not defined during SDK_GAME_START for gamedis sdk. Probably means error happened before.");
-                 break;
-               case "SDK_GAME_PAUSE":
-                 console.log("Gamedis SDK_GAME_PAUSE"), window.adStartSoPause(null, {
-                   preventMovement: !0
-                 }), ek = !0;
- ... (16 more removed lines; see GitHub link above)
+         try {
+           await Promise.race([FC(), (0, nC.N)(1e4).then((() => {
+             throw new Error("Not loaded after 10000ms")
+           }))])
+         } catch (CC) {
+           return console.error("MSN Play SDK failed to load, so MSN Play accounts are unavailable:", CC), null
+         }
+         return window.$msstart ? new WC : (console.error("MSN Play SDK script loaded but window.$msstart is missing, so MSN Play accounts are unavailable"), null)
+       }
+       async getSignedInUser() {
+         try {
+           return await Promise.race([window.$msstart.getSignedInUserAsync(), (0, nC.N)(1e4).then((() => {
+             throw new Error("No answer after 10000ms")
+           }))])
+         } catch (CC) {
+           return "USER_NOT_CONSENTED" !== (null === CC || void 0 === CC ? void 0 : CC.code) && console.error("Failed to get the signed-in MSN Play player:", CC), null
+ ... (131 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/148.js` (Changed code · before: `L48-L62` → after: `L176-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162R176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162) · [After (L176-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/148.js#L176-L207) · [Before (L48-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/148.js#L48-L62)

```diff
-           }
-         }, await (0, fk.d)("https://html5.api.gamedistribution.com/main.min.js", {
-           id: "gamedistribution-jssdk"
-         }), new Sk((ek => {
-           kk = ek
-         }))
-       }
-       playVideoAd(kk, ek) {
-         this.setOnEndCb(kk), console.log("Requesting gamedis preroll"), window.gdsdk.showAd()
-       }
-       renderBanner(kk) {
-         console.log("Getting new gamedis banners"), void 0 !== window.gdsdk.AdType.Display ? (console.log("requesting gamedis banner into", document.getElementById(kk.divId)), console.log("Params to window.gdsdk.showAd", window.gdsdk.AdType.Display, kk.divId), window.gdsdk.showAd … [truncated]
-           containerId: kk.divId
-         }).then((() => console.info("showAd(window.gdsdk.AdType.Display) resolved."))).catch((kk => console.info(kk)))) : console.error("window.gdsdk.AdType.Display is undefined")
-       }
+           };
+           window.adStartSoPause(null, {
+             preventMovement: !0
+           }), ZC()
+         } else QC(`AD: Can't play MSN ${CC} ad because sdk is not loaded`)
+       }
+     }
+ 
+     function pC(CC) {
+       let zC, ZC;
+       switch (CC.placement) {
+         case "top":
+           zC = (window.innerWidth - CC.width) / 2, ZC = NC;
+           break;
+         case "right":
+           zC = window.innerWidth - CC.width - NC, ZC = window.innerHeight / 2 - CC.height / 2 - 10;
+ ... (16 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/149.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/149.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353)

#### 1. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/149.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/149.js#L4)

```diff
-   7932: (kk, ek, ik) => {
+   8119: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/149.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/149.js#L6)

```diff
-       CoolMathGamesSdkAdaptor: () => Sk
+       GameDistributionSdkAdaptor: () => bC
```

#### 3. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L8-L24` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/149.js#L8-L12) · [Before (L8-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/149.js#L8-L24)

```diff
-     var Dk = ik(1298),
-       fk = ik(1163);
-     class Sk extends Dk.e {
-       constructor() {
-         super(), this.name = "coolmathgames", this.adBreakStartCallback = () => {
-           console.error("adBreakStartCallback not set")
-         }, this.adBreakCompleteCallback = () => {
-           console.error("adBreakCompleteCallback not set")
-         }, document.addEventListener("adBreakStart", this.doAdBreakStart.bind(this)), document.addEventListener("adBreakComplete", this.doAdBreakComplete.bind(this))
-       }
-       doAdBreakStart() {
-         this.adBreakStartCallback();
-         const kk = document.getElementsByClassName("ads-popup");
-         for (const ek of kk) ek instanceof HTMLElement && (ek.style.position = "fixed")
-       }
-       doAdBreakComplete() {
- ... (1 more removed lines; see GitHub link above)
+     var QC = ZC(1269),
+       wC = ZC(1127);
+     class bC extends QC.c {
+       constructor(CC) {
+         super(), this.setOnEndCb = CC, this.name = "gamedistribution"
```

#### 4. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L27` → after: `L15-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L15-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/149.js#L15-L53) · [Before (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/149.js#L27)

```diff
-         return await (0, fk.d)("https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"), await (0, fk.d)("https://www.coolmathgames.com/sites/default/files/cmg-ads.js"), new Sk
+         let CC;
+         let zC;
+         return window.GD_OPTIONS = {
+           gameId: "b35b336d21654aa5a378480d13ed7225",
+           onEvent: ZC => {
+             const QC = () => {
+               zC && (window.adCompleteSoResume(), zC = !1), CC && (CC(), CC = null)
+             };
+             switch (ZC.name) {
+               case "SDK_GAME_START":
+                 console.log("Gamedis SDK_GAME_START"), zC = !1, CC ? (CC(), CC = null, window.adCompleteSoResume()) : console.error("onEndCb is not defined during SDK_GAME_START for gamedis sdk. Probably means error happened before.");
+                 break;
+               case "SDK_GAME_PAUSE":
+                 console.log("Gamedis SDK_GAME_PAUSE"), window.adStartSoPause(null, {
+                   preventMovement: !0
+                 }), zC = !0;
+ ... (23 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L30-L36` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/149.js#L56) · [Before (L30-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/149.js#L30-L36)

```diff
-         this.adBreakStartCallback = () => {
-           console.log("CoolMathGames adBreak Started"), window.adStartSoPause(null, {
-             preventMovement: !0
-           })
-         }, this.adBreakCompleteCallback = () => {
-           console.log("CoolMathGames adBreak Complete"), window.adCompleteSoResume(), kk()
-         }, window.hasOwnProperty("cmgAdBreak") && window.cmgAdBreak()
+         this.setOnEndCb(CC), console.log("Requesting gamedis preroll"), window.gdsdk.showAd()
```

#### 6. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L38-L43` → after: `L58-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L58-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/149.js#L58-L61) · [Before (L38-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/149.js#L38-L43)

```diff
-       onGameplayStart() {
-         try {
-           window.parent.cmgGameEvent("start")
-         } catch {
-           console.log("Couldn't access cmgGameEvent on parent")
-         }
+       renderBanner(CC) {
+         console.log("Getting new gamedis banners"), void 0 !== window.gdsdk.AdType.Display ? (console.log("requesting gamedis banner into", document.getElementById(CC.divId)), console.log("Params to window.gdsdk.showAd", window.gdsdk.AdType.Display, CC.divId), window.gdsdk.showAd … [truncated]
+           containerId: CC.divId
+         }).then((() => console.info("showAd(window.gdsdk.AdType.Display) resolved."))).catch((CC => console.info(CC)))) : console.error("window.gdsdk.AdType.Display is undefined")
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/150.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/150.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166)

#### 1. `bundles/bloxd.io/chunks/js/150.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/150.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/150.js#L4)

```diff
-   7935: (kk, ek, ik) => {
+   8122: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/150.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/150.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/150.js#L6)

```diff
-       AdMobSdkAdaptor: () => Mk
+       CoolMathGamesSdkAdaptor: () => bC
```

#### 3. `bundles/bloxd.io/chunks/js/150.js` (Changed code · before: `L8-L37` → after: `L8-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166) · [After (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/150.js#L8-L16) · [Before (L8-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/150.js#L8-L37)

```diff
-     var Dk = ik(1298),
-       fk = ik(22),
-       Sk = ik(1659),
-       bk = ik(131),
-       rk = ik(3430),
-       Pk = ik(314);
-     const mk = {
-       mobileAndroid: {
-         banners: {
-           leaderboard_1: "ca-app-pub-5991928098122027/7081016880",
-           leaderboard_4: "ca-app-pub-5991928098122027/6301601920",
-           leaderboard_5: "ca-app-pub-5991928098122027/7592152779",
-           skyscraper_1: "ca-app-pub-5991928098122027/1026744422",
-           skyscraper_2: "ca-app-pub-5991928098122027/3483866894",
-           square_1: "ca-app-pub-5991928098122027/6381115670"
-         },
- ... (14 more removed lines; see GitHub link above)
+     var QC = ZC(1269),
+       wC = ZC(1127);
+     class bC extends QC.c {
+       constructor() {
+         super(), this.name = "coolmathgames", this.adBreakStartCallback = () => {
+           console.error("adBreakStartCallback not set")
+         }, this.adBreakCompleteCallback = () => {
+           console.error("adBreakCompleteCallback not set")
+         }, document.addEventListener("adBreakStart", this.doAdBreakStart.bind(this)), document.addEventListener("adBreakComplete", this.doAdBreakComplete.bind(this))
```

#### 4. `bundles/bloxd.io/chunks/js/150.js` (Changed code · before: `L39-L50` → after: `L18-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166) · [After (L18-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/150.js#L18-L24) · [Before (L39-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/150.js#L39-L50)

```diff
-     };
-     class Mk extends Dk.e {
-       constructor(kk) {
-         super(), this.name = "admob", this.bannerAutoRefresh = "alwaysOn", this.adUnitIds = void 0, this.bannerPlacementByBloxdId = new Map, this.bannerFirstResponseSeen = new Set, this.fullScreenAdsInFlight = 0, this.adUnitIds = mk[kk], Sk.b.on("ads.bannerStatus", (kk => {
-           let {
-             placementId: ek,
-             shown: ik,
-             error: Dk
-           } = kk;
-           const fk = !this.bannerFirstResponseSeen.has(ek);
-           this.bannerFirstResponseSeen.add(ek), fk ? ik ? console.log(`AD ${ek}: AdMob banner loaded`) : console.warn(`AD ${ek}: AdMob banner failed to load: ${Dk}`) : ik || console.warn(`AD ${ek}: AdMob banner refresh failed: ${Dk}`)
-         }))
+       doAdBreakStart() {
+         this.adBreakStartCallback();
+         const CC = document.getElementsByClassName("ads-popup");
+         for (const zC of CC) zC instanceof HTMLElement && (zC.style.position = "fixed")
+       }
+       doAdBreakComplete() {
+         this.adBreakCompleteCallback()
```

#### 5. `bundles/bloxd.io/chunks/js/150.js` (Changed code · before: `L53-L76` → after: `L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166) · [After (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/150.js#L27) · [Before (L53-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/150.js#L53-L76)

```diff
-         const kk = "mobileIos" === bk.t ? "mobileIos" : "mobileAndroid";
-         return console.log(`AD: AdMobSDK initialised for ${kk}`), new Mk(kk)
-       }
-       muteGameDuring(kk) {
-         return this.fullScreenAdsInFlight++, fk.b.set({
-           soundOnFromAd: !1
-         }), kk.finally((() => {
-           this.fullScreenAdsInFlight--, 0 === this.fullScreenAdsInFlight && fk.b.set({
-             soundOnFromAd: !0
-           })
-         }))
-       }
-       playRewarded(kk, ek) {
-         const ik = this.adUnitIds.rewarded;
-         this.muteGameDuring(Sk.b.request("ads.showRewarded", {
-           placementId: ik
- ... (8 more removed lines; see GitHub link above)
+         return await (0, wC.e)("https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"), await (0, wC.e)("https://www.coolmathgames.com/sites/default/files/cmg-ads.js"), new bC
```

#### 6. `bundles/bloxd.io/chunks/js/150.js` (Changed code · before: `L79-L86` → after: `L30-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166) · [After (L30-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/150.js#L30-L36) · [Before (L79-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/150.js#L79-L86)

```diff
-         const ik = this.adUnitIds.interstitial;
-         this.muteGameDuring(Sk.b.request("ads.showInterstitial", {
-           placementId: ik
-         })).then((() => {
-           kk()
-         }), (ek => {
-           console.warn(`AD ${ik}: AdMob interstitial failed:`, ek), kk()
-         }))
+         this.adBreakStartCallback = () => {
+           console.log("CoolMathGames adBreak Started"), window.adStartSoPause(null, {
+             preventMovement: !0
+           })
+         }, this.adBreakCompleteCallback = () => {
+           console.log("CoolMathGames adBreak Complete"), window.adCompleteSoResume(), CC()
+         }, window.hasOwnProperty("cmgAdBreak") && window.cmgAdBreak()
```

#### 7. `bundles/bloxd.io/chunks/js/150.js` (Changed code · before: `L88-L107` → after: `L38-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166) · [After (L38-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/150.js#L38-L43) · [Before (L88-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/150.js#L88-L107)

```diff
-       renderBanner(kk) {
-         const ek = (0, rk.d)(kk),
-           ik = this.adUnitIds.banners[ek];
-         if (void 0 === ik) return;
-         const Dk = document.getElementById(kk.divId);
-         if (!Dk) return void console.warn(`AD ${ek}: AdMob renderBanner called but div ${kk.divId} is not in DOM`);
-         const fk = Dk.getBoundingClientRect(),
-           bk = window.innerWidth,
-           mk = window.innerHeight;
-         if (0 === bk || 0 === mk) return void console.warn(`AD ${ek}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
-         const Mk = {
-           x1: Pk.c.clamp(fk.left / bk * 100, 0, 100),
-           y1: Pk.c.clamp(fk.top / mk * 100, 0, 100),
-           x2: Pk.c.clamp(fk.right / bk * 100, 0, 100),
-           y2: Pk.c.clamp(fk.bottom / mk * 100, 0, 100)
-         };
- ... (4 more removed lines; see GitHub link above)
+       onGameplayStart() {
+         try {
+           window.parent.cmgGameEvent("start")
+         } catch {
+           console.log("Couldn't access cmgGameEvent on parent")
+         }
```

#### 8. `bundles/bloxd.io/chunks/js/150.js` (Changed code · before: `L109-L114` → after: `L45-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166) · [After (L45-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/150.js#L45-L51) · [Before (L109-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/150.js#L109-L114)

```diff
-       clearBanner(kk) {
-         const ek = (0, rk.d)(kk),
-           ik = this.bannerPlacementByBloxdId.get(ek);
-         void 0 !== ik && (this.bannerPlacementByBloxdId.delete(ek), this.bannerFirstResponseSeen.delete(ik), console.log(`AD ${ek}: AdMob clearBanner placementId=${ik}`), Sk.b.emit("ads.hideBanner", {
-           placementId: ik
-         }))
+       onGameplayStop() {}
+       onGameEntered() {
+         try {
+           window.parent.cmgGameEvent("start")
+         } catch {
+           console.log("Couldn't access cmgGameEvent on parent")
+         }
```

#### 9. `bundles/bloxd.io/chunks/js/150.js` (Changed code · before: `L116-L118` → after: `L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166) · [After (L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/150.js#L53) · [Before (L116-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/150.js#L116-L118)

```diff
-       canShowBloxdAd(kk) {
-         return !1
-       }
+       onGameExited() {}
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/151.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/151.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b)

#### 1. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/151.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/151.js#L4-L6)

```diff
-   7950: (kk, ek, ik) => {
-     ik.d(ek, {
-       e: () => mk
+   8130: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       AdMobSdkAdaptor: () => FC
```

#### 2. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L8-L56` → after: `L8-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L8-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/151.js#L8-L50) · [Before (L8-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/151.js#L8-L56)

```diff
-     var Dk = ik(2849);
-     const fk = [1, 8, 9],
-       Sk = 5,
-       bk = 200,
-       rk = 150;
- 
-     function Pk(kk, ek) {
-       let ik = 0;
-       kk("addEventListener", 2, ((kk, bk) => {
-         if (!bk) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
-         const rk = function(kk) {
-           const ek = "useractioncomplete" === kk.eventStatus || "tcloaded" === kk.eventStatus && !!kk.tcString;
-           return kk.gdprApplies && ek ? fk.every((ek => !0 === kk.purpose.consents[ek])) : null
-         }(kk);
-         if (null === rk) return;
-         const Pk = ++ik;
- ... (33 more removed lines; see GitHub link above)
+     var QC = ZC(1269),
+       wC = ZC(20),
+       bC = ZC(1609),
+       nC = ZC(113),
+       fC = ZC(3441),
+       oC = ZC(326);
+     const qC = {
+       mobileAndroid: {
+         banners: {
+           leaderboard_1: "ca-app-pub-5991928098122027/7081016880",
+           leaderboard_4: "ca-app-pub-5991928098122027/6301601920",
+           leaderboard_5: "ca-app-pub-5991928098122027/7592152779",
+           skyscraper_1: "ca-app-pub-5991928098122027/1026744422",
+           skyscraper_2: "ca-app-pub-5991928098122027/3483866894",
+           square_1: "ca-app-pub-5991928098122027/6381115670"
+         },
+ ... (27 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L59` → after: `L53-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L53-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/151.js#L53-L63) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/151.js#L59)

```diff
-         return (0, Sk.canonicaliseZonesWhenIdle)(Pk), (0, rk.A)(), await (0, fk.d)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"), (0, bk.e)("inMobi"), new mk
+         const CC = "mobileIos" === nC.y ? "mobileIos" : "mobileAndroid";
+         return console.log(`AD: AdMobSDK initialised for ${CC}`), new FC(CC)
+       }
+       muteGameDuring(CC) {
+         return this.fullScreenAdsInFlight++, wC.b.set({
+           soundOnFromAd: !1
+         }), CC.finally((() => {
+           this.fullScreenAdsInFlight--, 0 === this.fullScreenAdsInFlight && wC.b.set({
+             soundOnFromAd: !0
+           })
+         }))
```

#### 4. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L62-L72` → after: `L66-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L66-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/151.js#L66-L76) · [Before (L62-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/151.js#L62-L72)

```diff
-         if ("undefined" !== typeof window.aiptag.adplayer) {
-           console.log("AD: Requesting AdInPlay preroll ad for rewarded placement");
-           const ik = "video_reward";
-           window.aiptag.cmd.player.push((function() {
-             window.aiptag.adplayer.startPreRoll({
-               alias: ik
-             })
-           })), window.adStartSoPause(kk, {
-             onFailCb: ek
-           })
-         } else console.log("AD: AIP ad lib not loaded, no rewarded ad playing"), ek()
+         const ZC = this.adUnitIds.rewarded;
+         this.muteGameDuring(bC.d.request("ads.showRewarded", {
+           placementId: ZC
+         })).then((ZC => {
+           let {
+             rewarded: QC
+           } = ZC;
+           QC ? CC() : zC()
+         }), (CC => {
+           console.warn(`AD ${ZC}: AdMob rewarded failed:`, CC), zC()
+         }))
```

#### 5. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L75-L79` → after: `L79-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L79-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/151.js#L79-L86) · [Before (L75-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/151.js#L75-L79)

```diff
-         "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad" + (ek ? ` (alias: ${ek})` : "")), window.aiptag.cmd.player.push((function() {
-           window.aiptag.adplayer.startPreRoll({
-             alias: ek
-           })
-         })), window.adStartSoPause(kk)) : (kk(), console.error("AIP ad lib not loaded, no ad playing"))
+         const ZC = this.adUnitIds.interstitial;
+         this.muteGameDuring(bC.d.request("ads.showInterstitial", {
+           placementId: ZC
+         })).then((() => {
+           CC()
+         }), (zC => {
+           console.warn(`AD ${ZC}: AdMob interstitial failed:`, zC), CC()
+         }))
```

#### 6. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L82-L92` → after: `L89-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L89-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/151.js#L89-L107) · [Before (L82-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/151.js#L82-L92)

```diff
-         if ("undefined" === typeof window.aiptag.adplayer) return void console.log("AD: User has adblock, not requesting new banners");
-         const {
-           divId: ek,
-           alias: ik
-         } = kk;
-         window.aiptag.cmd.display.push((function() {
-           window.aipDisplayTag.display({
-             adUnitName: ek,
-             alias: ik
-           })
-         })), console.log("AD: Requested aip banner", document.getElementById(kk.divId), ik ? `(alias: ${ik})` : "")
+         const zC = (0, fC.c)(CC),
+           ZC = this.adUnitIds.banners[zC];
+         if (void 0 === ZC) return;
+         const QC = document.getElementById(CC.divId);
+         if (!QC) return void console.warn(`AD ${zC}: AdMob renderBanner called but div ${CC.divId} is not in DOM`);
+         const wC = QC.getBoundingClientRect(),
+           nC = window.innerWidth,
+           qC = window.innerHeight;
+         if (0 === nC || 0 === qC) return void console.warn(`AD ${zC}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
+         const FC = {
+           x1: oC.c.clamp(wC.left / nC * 100, 0, 100),
+           y1: oC.c.clamp(wC.top / qC * 100, 0, 100),
+           x2: oC.c.clamp(wC.right / nC * 100, 0, 100),
+           y2: oC.c.clamp(wC.bottom / qC * 100, 0, 100)
+         };
+         this.bannerPlacementByBloxdId.set(zC, ZC), console.log(`AD ${zC}: AdMob renderBanner placementId=${ZC} box=`, FC), bC.d.emit("ads.showBanner", {
+ ... (3 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L95-L101` → after: `L110-L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L110-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/151.js#L110-L113) · [Before (L95-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/151.js#L95-L101)

```diff
-         "undefined" !== typeof window.aiptag.adplayer ? (window.aiptag.cmd.display.push((function() {
-           window.aipDisplayTag.destroy(kk.divId)
-         })), console.log(`AD: Clearing aip banner ad ${kk.divId}`)) : console.log("AD: User has adblock, not requesting new banners")
-       }
-       setBannerAutoRefreshEnabled(kk, ek) {
-         window.aiptag.cmd.display.push((function() {
-           window.aipDisplayTag.setAutoRefresh(kk.divId, ek)
+         const zC = (0, fC.c)(CC),
+           ZC = this.bannerPlacementByBloxdId.get(zC);
+         void 0 !== ZC && (this.bannerPlacementByBloxdId.delete(zC), this.bannerFirstResponseSeen.delete(ZC), console.log(`AD ${zC}: AdMob clearBanner placementId=${ZC}`), bC.d.emit("ads.hideBanner", {
+           placementId: ZC
```

#### 8. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L104-L109` → after: `L116-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L116-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/151.js#L116-L117) · [Before (L104-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/151.js#L104-L109)

```diff
-       newPageSession() {
-         console.log("AD: Requesting new page session"), window.aiptag.cmd.display.push((function() {
-           window.__VM.push((function(kk, ek) {
-             ek.Instances.pageManager.newPageSession(!1)
-           }))
-         }))
+       canShowBloxdAd(CC) {
+         return !1
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/152.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/152.js` (15 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0f)

#### 1. `bundles/bloxd.io/chunks/js/152.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/152.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/152.js#L4)

```diff
-   7950: (kk, ek, ik) => {
+   8142: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/152.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0fR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0f) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/152.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/152.js#L6)

```diff
-       e: () => mk
+       b: () => qC
```

#### 3. `bundles/bloxd.io/chunks/js/152.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0fR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0f) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/152.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/152.js#L8)

```diff
-     var Dk = ik(2849);
+     var QC = ZC(2909);
```

#### 4. `bundles/bloxd.io/chunks/js/152.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0fR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0f) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/152.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/152.js#L24-L25)

```diff
-         if (!rk) return void(0, Dk.B)(!1);
-         if ("nitro" === ek) return void(0, Dk.B)(!0);
+         if (!fC) return void(0, QC.I)(!1);
+         if ("nitro" === zC) return void(0, QC.I)(!0);
```

#### 5. `bundles/bloxd.io/chunks/js/152.js` (Changed code · before: `L29` → after: `L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0fR29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0f) · [After (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/152.js#L29) · [Before (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/152.js#L29)

```diff
-           Pk === ik && (0, Dk.B)(ek && !0 === (null === (fk = kk.nonIabVendorConsents) || void 0 === fk ? void 0 : fk[Sk]))
+           oC === ZC && (0, QC.I)(zC && !0 === (null === (wC = CC.nonIabVendorConsents) || void 0 === wC ? void 0 : wC[bC]))
```

#### 6. `bundles/bloxd.io/chunks/js/152.js` (Changed code · before: `L44` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0fR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0f) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/152.js#L44) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/152.js#L44)

```diff
-   7966: (kk, ek, ik) => {
+   8135: (CC, zC, ZC) => {
```

#### 7. `bundles/bloxd.io/chunks/js/152.js` (Changed code · before: `L46` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0fR46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0f) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/152.js#L46) · [Before (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/152.js#L46)

```diff
-       NitroSdkAdaptor: () => Pk
+       AdinPlaySdkAdaptor: () => qC
```

#### 8. `bundles/bloxd.io/chunks/js/152.js` (Changed code · before: `L48-L53` → after: `L48-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0fR48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0f) · [After (L48-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/152.js#L48-L54) · [Before (L48-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/152.js#L48-L53)

```diff
-     var Dk = ik(1298),
-       fk = ik(1163),
-       Sk = ik(7950),
-       bk = ik(2849);
-     const rk = "NitroOutstreamVideo";
-     class Pk extends Dk.e {
+     var QC = ZC(1269),
+       wC = ZC(1127),
+       bC = ZC(216),
+       nC = ZC(8142),
+       fC = ZC(2909);
+     const oC = ["CN", "VN", "IN", "PK", "ID", "EG", "BD", "SV", "DZ", "EC", "VE", "UA", "MA", "LK", "NG", "BO", "KE", "TN", "RU", "NP", "IQ", "MM", "HN", "UY", "JO", "PY", "PS", "ET", "GH", "JM", "CM", "AS", "SY", "BY", "AO", "MN", "GY", "LB", "MV", "BW", "UG"];
+     class qC extends QC.c {
```

#### 9. `bundles/bloxd.io/chunks/js/152.js` (Changed code · before: `L55` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0fR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0f) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/152.js#L56) · [Before (L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/152.js#L55)

```diff
-         super(), this.name = "nitro", this.bannerAutoRefresh = "alwaysOn", this.videoInFlight = !1
+         super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = oC
```

#### 10. `bundles/bloxd.io/chunks/js/152.js` (Changed code · before: `L58-L76` → after: `L59-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0fR59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0f) · [After (L59-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/152.js#L59-L72) · [Before (L58-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/152.js#L58-L76)

```diff
-         return window.nitroAds = window.nitroAds || {
-           createAd: function() {
-             for (var kk = arguments.length, ek = new Array(kk), ik = 0; ik < kk; ik++) ek[ik] = arguments[ik];
-             return new Promise((kk => {
-               window.nitroAds.queue.push(["createAd", ek, kk])
-             }))
-           },
-           addUserToken: function() {
-             for (var kk = arguments.length, ek = new Array(kk), ik = 0; ik < kk; ik++) ek[ik] = arguments[ik];
-             window.nitroAds.queue.push(["addUserToken", ek])
-           },
-           queue: []
-         }, document.addEventListener("nitroAds.rendered", (kk => {
-           var ek, ik, Dk;
-           const fk = document.getElementById(null !== (ek = null === (ik = kk.detail) || void 0 === ik || null === (Dk = ik.adInfo) || void 0 === Dk ? void 0 : Dk.adUnitCode) && void 0 !== ek ? ek : "");
-           null !== fk && void 0 !== fk && fk.classList.contains("NitroBanner") && fk.classList.toggle("NitroBannerUnfilled", "blank" === kk.detail.type)
- ... (3 more removed lines; see GitHub link above)
+         return (0, bC.canonicaliseZonesWhenIdle)(oC), (0, fC.F)(), await (0, wC.e)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"), (0, nC.b)("inMobi"), new qC
+       }
+       playRewarded(CC, zC) {
+         if ("undefined" !== typeof window.aiptag.adplayer) {
+           console.log("AD: Requesting AdInPlay preroll ad for rewarded placement");
+           const ZC = "video_reward";
+           window.aiptag.cmd.player.push((function() {
+             window.aiptag.adplayer.startPreRoll({
+               alias: ZC
+             })
+           })), window.adStartSoPause(CC, {
+             onFailCb: zC
+           })
+         } else console.log("AD: AIP ad lib not loaded, no rewarded ad playing"), zC()
```

#### 11. `bundles/bloxd.io/chunks/js/152.js` (Changed code · before: `L79-L150` → after: `L75-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0fR75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0f) · [After (L75-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/152.js#L75-L79) · [Before (L79-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/152.js#L79-L150)

```diff
-         this.showVideoAd(kk, kk)
-       }
-       playRewarded(kk, ek) {
-         this.showVideoAd(kk, ek)
-       }
-       showVideoAd(kk, ek) {
-         if (this.videoInFlight) return console.log("AD: Nitro video already playing"), void ek();
-         const ik = document.getElementById("GenericVideoWrapper"),
-           Dk = document.getElementById("GenericVideoInner");
-         if (null === ik || null === Dk) return void ek();
-         this.videoInFlight = !0;
-         let fk = !1;
-         const Sk = document.createElement("div");
-         Sk.id = rk, Sk.className = "NitroVideoPlacement";
-         const bk = bk => {
-           if (!fk) {
- ... (56 more removed lines; see GitHub link above)
+         "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad" + (zC ? ` (alias: ${zC})` : "")), window.aiptag.cmd.player.push((function() {
+           window.aiptag.adplayer.startPreRoll({
+             alias: zC
+           })
+         })), window.adStartSoPause(CC)) : (CC(), console.error("AIP ad lib not loaded, no ad playing"))
```

#### 12. `bundles/bloxd.io/chunks/js/152.js` (Changed code · before: `L155-L167` → after: `L85-L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0fR85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0f) · [After (L85-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/152.js#L85-L92) · [Before (L155-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/152.js#L155-L167)

```diff
-           width: ik,
-           height: Dk
-         } = kk, fk = `${ek}-nitro`;
-         let Sk = document.getElementById(fk);
-         null === Sk && (Sk = document.createElement("div"), Sk.id = fk, Sk.className = "NitroBanner", Sk.style.setProperty("--nitro-slot-width", `${ik}px`), Sk.style.setProperty("--nitro-slot-height", `${Dk}px`), document.getElementById(ek).appendChild(Sk));
-         const bk = [
-           [String(ik), String(Dk)]
-         ];
-         Promise.resolve(window.nitroAds.createAd(fk, {
-           sizes: bk
-         })).catch((kk => {
-           console.error(`AD: Nitro failed to create banner ${fk}:`, kk)
-         })), console.log(`AD: Requested Nitro banner ${fk}`)
+           alias: ZC
+         } = CC;
+         window.aiptag.cmd.display.push((function() {
+           window.aipDisplayTag.display({
+             adUnitName: zC,
+             alias: ZC
+           })
+         })), console.log("AD: Requested aip banner", document.getElementById(CC.divId), ZC ? `(alias: ${ZC})` : "")
```

#### 13. `bundles/bloxd.io/chunks/js/152.js` (Changed code · before: `L169-L171` → after: `L94-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0fR94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0f) · [After (L94-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/152.js#L94-L97) · [Before (L169-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/152.js#L169-L171)

```diff
-       displayConsentUI() {
-         var kk, ek;
-         null === (kk = (ek = window).__cmp) || void 0 === kk || kk.call(ek, "showModal")
+       clearBanner(CC) {
+         "undefined" !== typeof window.aiptag.adplayer ? (window.aiptag.cmd.display.push((function() {
+           window.aipDisplayTag.destroy(CC.divId)
+         })), console.log(`AD: Clearing aip banner ad ${CC.divId}`)) : console.log("AD: User has adblock, not requesting new banners")
```

#### 14. `bundles/bloxd.io/chunks/js/152.js` (Changed code · before: `L173-L178` → after: `L99-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0fR99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0f) · [After (L99-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/152.js#L99-L102) · [Before (L173-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/152.js#L173-L178)

```diff
-       addPrivacyLinks(kk) {
-         var ek, ik, Dk, fk;
-         const Sk = document.createElement("span");
-         Sk.dataset.ccpaLink = "1";
-         const bk = document.createElement("div");
-         bk.id = "ncmp-consent-link", kk.replaceChildren(Sk, bk), null === (ek = (ik = window).__uspapi) || void 0 === ek || ek.call(ik, "addLink", 1), null === (Dk = (fk = window).__cmp) || void 0 === Dk || Dk.call(fk, "addConsentLink")
+       setBannerAutoRefreshEnabled(CC, zC) {
+         window.aiptag.cmd.display.push((function() {
+           window.aipDisplayTag.setAutoRefresh(CC.divId, zC)
+         }))
```

#### 15. `bundles/bloxd.io/chunks/js/152.js` (Changed code · before: `L181-L182` → after: `L105-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0fR105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0f) · [After (L105-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/152.js#L105-L109) · [Before (L181-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/152.js#L181-L182)

```diff
-         var kk, ek;
-         null === (kk = (ek = window.nitroAds).navigate) || void 0 === kk || kk.call(ek)
+         console.log("AD: Requesting new page session"), window.aiptag.cmd.display.push((function() {
+           window.__VM.push((function(CC, zC) {
+             zC.Instances.pageManager.newPageSession(!1)
+           }))
+         }))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/153.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/153.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3)

#### 1. `bundles/bloxd.io/chunks/js/153.js` (Changed code · before: `L4` → after: `L4-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3) · [After (L4-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/153.js#L4-L44) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/153.js#L4)

```diff
-   7957: (kk, ek, ik) => {
+   8142: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => qC
+     });
+     var QC = ZC(2909);
+     const wC = [1, 8, 9],
+       bC = 5,
+       nC = 200,
+       fC = 150;
+ 
+     function oC(CC, zC) {
+       let ZC = 0;
+       CC("addEventListener", 2, ((CC, nC) => {
+         if (!nC) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
+         const fC = function(CC) {
+           const zC = "useractioncomplete" === CC.eventStatus || "tcloaded" === CC.eventStatus && !!CC.tcString;
+ ... (25 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/153.js` (Changed code · before: `L6` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/153.js#L46) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/153.js#L6)

```diff
-       AdsenseForGamesSdkAdaptor: () => Sk
+       NitroSdkAdaptor: () => oC
```

#### 3. `bundles/bloxd.io/chunks/js/153.js` (Changed code · before: `L8-L10` → after: `L48-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3) · [After (L48-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/153.js#L48-L53) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/153.js#L8-L10)

```diff
-     var Dk = ik(1298),
-       fk = ik(1163);
-     class Sk extends Dk.e {
+     var QC = ZC(1269),
+       wC = ZC(1127),
+       bC = ZC(8142),
+       nC = ZC(2909);
+     const fC = "NitroOutstreamVideo";
+     class oC extends QC.c {
```

#### 4. `bundles/bloxd.io/chunks/js/153.js` (Changed code · before: `L12` → after: `L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3R55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3) · [After (L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/153.js#L55) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/153.js#L12)

```diff
-         super(), this.name = "adsense"
+         super(), this.name = "nitro", this.bannerAutoRefresh = "alwaysOn", this.videoInFlight = !1
```

#### 5. `bundles/bloxd.io/chunks/js/153.js` (Changed code · before: `L15-L27` → after: `L58-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3) · [After (L58-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/153.js#L58-L76) · [Before (L15-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/153.js#L15-L27)

```diff
-         return window.adsbygoogle = window.adsbygoogle || [], window.adBreak = window.adConfig = function(kk) {
-           window.adsbygoogle.push(kk)
-         }, window.adConfig({
-           preloadAdBreaks: "on",
-           sound: "on",
-           onReady: () => {
-             console.log("adsense for games ready")
-           }
-         }), await (0, fk.d)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
-           "data-ad-client": "ca-pub-5991928098122027",
-           "data-ad-frequency-hint": "120s",
-           type: "text/javascript"
-         }), console.log("Loaded adsense for games"), new Sk
+         return window.nitroAds = window.nitroAds || {
+           createAd: function() {
+             for (var CC = arguments.length, zC = new Array(CC), ZC = 0; ZC < CC; ZC++) zC[ZC] = arguments[ZC];
+             return new Promise((CC => {
+               window.nitroAds.queue.push(["createAd", zC, CC])
+             }))
+           },
+           addUserToken: function() {
+             for (var CC = arguments.length, zC = new Array(CC), ZC = 0; ZC < CC; ZC++) zC[ZC] = arguments[ZC];
+             window.nitroAds.queue.push(["addUserToken", zC])
+           },
+           queue: []
+         }, document.addEventListener("nitroAds.rendered", (CC => {
+           var zC, ZC, QC;
+           const wC = document.getElementById(null !== (zC = null === (ZC = CC.detail) || void 0 === ZC || null === (QC = ZC.adInfo) || void 0 === QC ? void 0 : QC.adUnitCode) && void 0 !== zC ? zC : "");
+           null !== wC && void 0 !== wC && wC.classList.contains("NitroBanner") && wC.classList.toggle("NitroBannerUnfilled", "blank" === CC.detail.type)
+ ... (3 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/153.js` (Changed code · before: `L30` → after: `L79-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3) · [After (L79-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/153.js#L79-L89) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/153.js#L30)

```diff
-         console.log("playPreroll requested");
+         this.showVideoAd(CC, CC)
+       }
+       playRewarded(CC, zC) {
+         this.showVideoAd(CC, zC)
+       }
+       showVideoAd(CC, zC) {
+         if (this.videoInFlight) return console.log("AD: Nitro video already playing"), void zC();
+         const ZC = document.getElementById("GenericVideoWrapper"),
+           QC = document.getElementById("GenericVideoInner");
+         if (null === ZC || null === QC) return void zC();
+         this.videoInFlight = !0;
```

#### 7. `bundles/bloxd.io/chunks/js/153.js` (Changed code · before: `L32-L41` → after: `L91-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3R91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3) · [After (L91-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/153.js#L91-L114) · [Before (L32-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/153.js#L32-L41)

```diff
-         const Dk = setTimeout((() => {
-           console.log("Calling onEnd from timeout - window.adBreak did not respond after 3 seconds"), ik = !0, kk()
-         }), 3e3);
-         window.adBreak({
-           type: "video_start" === ek ? "start" : "next",
-           name: ek,
-           beforeAd: () => {
-             console.log("beforeAd called"), clearTimeout(Dk), window.adStartSoPause(null, {
-               preventMovement: !0
-             })
+         const bC = document.createElement("div");
+         bC.id = fC, bC.className = "NitroVideoPlacement";
+         const nC = nC => {
+           if (!wC) {
+             wC = !0, clearTimeout(PC), clearInterval(pC), document.removeEventListener("nitroAds.adResult", FC), document.removeEventListener("nitroAds.rendered", WC), document.removeEventListener("nitroAds.complete", NC);
+             try {
+               MC.remove(), bC.querySelectorAll("video").forEach((CC => {
+                 CC.pause()
+               })), bC.remove(), QC.classList.remove("NitroVideo"), ZC.style.display = "none"
+             } catch (fC) {
+               console.error("AD: Error tearing down Nitro video", fC)
+             } finally {
+               this.videoInFlight = !1, window.adCompleteSoResume(), nC ? CC() : zC()
+             }
+           }
+         };
+ ... (8 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/153.js` (Changed code · before: `L43-L44` → after: `L116-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3R116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3) · [After (L116-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/153.js#L116-L118) · [Before (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/153.js#L43-L44)

```diff
-           afterAd: () => {
-             console.log("afterAd called"), window.adCompleteSoResume()
+           FC = CC => {
+             var zC;
+             (null === (zC = CC.detail) || void 0 === zC ? void 0 : zC.id) === fC && qC("filled" === CC.detail.status, CC.detail.status)
```

#### 9. `bundles/bloxd.io/chunks/js/153.js` (Changed code · before: `L46-L49` → after: `L120-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3) · [After (L120-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/153.js#L120-L182) · [Before (L46-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/153.js#L46-L49)

```diff
-           adBreakDone: ek => {
-             console.log("adBreakDone called", ek), clearTimeout(Dk), ik || (console.log("Haven't called onEnd yet, calling it from adBreakDone."), kk())
-           }
-         })
+           WC = CC => {
+             var zC, ZC;
+             (null === (zC = CC.detail) || void 0 === zC || null === (ZC = zC.adInfo) || void 0 === ZC ? void 0 : ZC.adUnitCode) === fC && qC("blank" !== CC.detail.type, CC.detail.type)
+           },
+           NC = CC => {
+             var zC;
+             (null === (zC = CC.detail) || void 0 === zC ? void 0 : zC.adUnitCode) === fC && nC(!0)
+           },
+           MC = document.createElement("button");
+         MC.className = "NitroVideoSkip", MC.disabled = !0, MC.addEventListener("click", (() => {
+           console.log("AD: Nitro video skipped"), nC(!0)
+         }));
+         let gC = Math.ceil(15);
+         const SC = () => {
+           if (gC <= 0) return clearInterval(pC), MC.textContent = "Skip Ad", void(MC.disabled = !1);
+           MC.textContent = `Skip ad in ${gC}s`, gC--
+ ... (47 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/154.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/154.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df)

#### 1. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/154.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/154.js#L4)

```diff
-   7961: (kk, ek, ik) => {
+   8144: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/154.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/154.js#L6)

```diff
-       AditudeSdkAdaptor: () => bk
+       AdsenseForGamesSdkAdaptor: () => bC
```

#### 3. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L8-L14` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/154.js#L8-L10) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/154.js#L8-L14)

```diff
-     var Dk = ik(1298),
-       fk = ik(1163);
-     const Sk = {
-       video: "pb-slot-interstitial-video",
-       rewarded: "pb-slot-rewarded-video"
-     };
-     class bk extends Dk.e {
+     var QC = ZC(1269),
+       wC = ZC(1127);
+     class bC extends QC.c {
```

#### 4. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L16` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/154.js#L12) · [Before (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/154.js#L16)

```diff
-         super(), this.name = "aditude"
+         super(), this.name = "adsense"
```

#### 5. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L19-L21` → after: `L15-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L15-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/154.js#L15-L27) · [Before (L19-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/154.js#L19-L21)

```diff
-         return window.tude = window.tude || {
-           cmd: []
-         }, await (0, fk.d)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new bk
+         return window.adsbygoogle = window.adsbygoogle || [], window.adBreak = window.adConfig = function(CC) {
+           window.adsbygoogle.push(CC)
+         }, window.adConfig({
+           preloadAdBreaks: "on",
+           sound: "on",
+           onReady: () => {
+             console.log("adsense for games ready")
+           }
+         }), await (0, wC.e)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
+           "data-ad-client": "ca-pub-5991928098122027",
+           "data-ad-frequency-hint": "120s",
+           type: "text/javascript"
+         }), console.log("Loaded adsense for games"), new bC
```

#### 6. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L24-L42` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/154.js#L30) · [Before (L24-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/154.js#L24-L42)

```diff
-         this.playVideoOrRewarded("video", kk, kk)
-       }
-       playRewarded(kk, ek) {
-         this.playVideoOrRewarded("rewarded", kk, ek)
-       }
-       renderBanner(kk) {
-         const ek = this.getBaseDivId(kk.adId, kk.width, kk.height);
-         window.tude.cmd.push((function() {
-           window.tude.refreshAdsViaDivMappings([{
-             divId: kk.divId,
-             baseDivId: ek
-           }])
-         }))
-       }
-       getBaseDivId(kk, ek, ik) {
-         return `pb-slot-bloxdio-${ek}-${ik}${kk>1?`-${kk}`:""}`
- ... (3 more removed lines; see GitHub link above)
+         console.log("playPreroll requested");
```

#### 7. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L44-L45` → after: `L32-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L32-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/154.js#L32-L41) · [Before (L44-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/154.js#L44-L45)

```diff
-         const bk = () => {
-             document.getElementById("GenericVideoWrapper").style.display = "none", fk = !0
+         const QC = setTimeout((() => {
+           console.log("Calling onEnd from timeout - window.adBreak did not respond after 3 seconds"), ZC = !0, CC()
+         }), 3e3);
+         window.adBreak({
+           type: "video_start" === zC ? "start" : "next",
+           name: zC,
+           beforeAd: () => {
+             console.log("beforeAd called"), clearTimeout(QC), window.adStartSoPause(null, {
+               preventMovement: !0
+             })
```

#### 8. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L47-L76` → after: `L43-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L43-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/154.js#L43-L47) · [Before (L47-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/154.js#L47-L76)

```diff
-           rk = (kk, ek) => {
-             console.error(`AD: Error while playing Aditude video ad: ${kk}:`, ek), bk(), ik()
-           };
-         if (console.log(`AD: Requesting Aditude ${kk} ad`), void 0 === (null === (Dk = window.tude) || void 0 === Dk ? void 0 : Dk.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${kk} ad playing`), void rk("Aditude ad lib not loaded", null);
-         document.getElementById("GenericVideoWrapper").style.display = "flex", document.getElementById("GenericVideoInner").classList.add("AditudeVideo"), window.tude.cmd.push((function() {
-           console.log("AD: Inside Aditude window.tude.cmd.push");
-           try {
-             window.tude.requestInstreamPlayer({
-               code: Sk[kk],
-               divId: "GenericVideoInner",
-               mode: "adOnly"
-             }).then((ik => {
-               console.log("AD: Inside Aditude window.tude.requestInstreamPlayer.then"), ik.on("playerClose", ((ik, Dk) => {
-                 console.log("AD: Inside Aditude player.on playerClose"), console.log(`AD: Successfully finished Aditude ${kk} ad`), bk(), ek()
-               })).on("adPrefetchError", ((kk, ek) => {
-                 console.log("AD: Inside Aditude player.on adPrefetchError"), rk("Prefetch error", ek)
- ... (14 more removed lines; see GitHub link above)
+           afterAd: () => {
+             console.log("afterAd called"), window.adCompleteSoResume()
+           },
+           adBreakDone: zC => {
+             console.log("adBreakDone called", zC), clearTimeout(QC), ZC || (console.log("Haven't called onEnd yet, calling it from adBreakDone."), CC())
```

#### 9. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L78` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/154.js#L49) · [Before (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/154.js#L78)

```diff
-         }))
+         })
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/155.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/155.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe)

#### 1. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/155.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/155.js#L4-L6)

```diff
-   8700: (kk, ek, ik) => {
-     ik.d(ek, {
-       b: () => rk
+   8150: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       AditudeSdkAdaptor: () => nC
```

#### 2. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L8-L58` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/155.js#L8-L9) · [Before (L8-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/155.js#L8-L58)

```diff
-     var Dk = ik(22),
-       fk = ik(1172),
-       Sk = ik(4926),
-       bk = ik(1066);
- 
-     function rk(kk) {
-       let {
-         note: ek
-       } = kk;
-       const {
-         t: ik
-       } = (0, fk.D)(), {
-         clientEscMenuOptions: rk
-       } = (0, Dk.n)(["clientEscMenuOptions"]);
-       return (0, bk.jsx)(Sk.e, {
-         label: ik("touchSettings:actionButtons"),
- ... (35 more removed lines; see GitHub link above)
+     var QC = ZC(1269),
+       wC = ZC(1127);
```

#### 3. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L60-L62` → after: `L11-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L11-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/155.js#L11-L12) · [Before (L60-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/155.js#L60-L62)

```diff
-       floating: "settingsMenu:joystickFloating",
-       fixed_shown: "settingsMenu:joystickFixed",
-       fixed_hidden: "settingsMenu:joystickHidden"
+       video: "pb-slot-interstitial-video",
+       rewarded: "pb-slot-rewarded-video"
```

#### 4. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L64-L1050` → after: `L14-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L14-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/155.js#L14-L16) · [Before (L64-L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/155.js#L64-L1050)

```diff
-     var Ak = ik(8708);
-     var jk = ik(1432),
-       sk = ik(1333),
-       dk = ik(1033),
-       Vk = ik(1375),
-       Fk = ik(2447);
-     const uk = {
-         jump: "cluster",
-         crouch: "cluster",
-         attack: "cluster",
-         use: "cluster",
-         extra: "cluster",
-         game: "cluster",
-         arrows: "hotbar",
-         inventory: "hotbar",
-         ...Object.fromEntries(Fk.B.map((kk => [kk, "menu"])))
- ... (971 more removed lines; see GitHub link above)
+     class nC extends QC.c {
+       constructor() {
+         super(), this.name = "aditude"
```

#### 5. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1052-L1100` → after: `L18-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L18-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/155.js#L18-L21) · [Before (L1052-L1100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/155.js#L1052-L1100)

```diff
-     }
- 
-     function Ee(kk, ek, ik) {
-       let {
-         keysAbove: Dk
-       } = ik;
-       const fk = [...kk.documentElement.classList].filter((kk => !qe.has(kk) && !ze.has(kk))),
-         Sk = [...ek.documentElement.classList].filter((kk => ze.has(kk))),
-         bk = [Fe, ue.hotbar, ue.hasShop, ue.hasBag];
-       Dk && bk.push(ue.keysAbove), ek.documentElement.className = [...fk, ...bk, ...Sk].join(" ")
-     }
-     const he = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];
- 
-     function ae(kk, ek, ik, Dk, fk) {
-       const Sk = (0, Fk.x)(ik, Dk, "joystick"),
-         bk = (0, fe.u)((0, fe.H)(ik, Dk, fk), Dk),
- ... (33 more removed lines; see GitHub link above)
+       static async setup() {
+         return window.tude = window.tude || {
+           cmd: []
+         }, await (0, wC.e)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new nC
```

#### 6. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1102-L1166` → after: `L23-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/155.js#L23-L24) · [Before (L1102-L1166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/155.js#L1102-L1166)

```diff
-     }
- 
-     function Be(kk, ek) {
-       const [ik, Dk] = Xe(kk, "hotbar", (ek => {
-         const ik = ik => {
-           var Dk, fk;
-           return ek(ik), null !== (Dk = null === (fk = kk.querySelector(".HotBarGameItemsContainer")) || void 0 === fk ? void 0 : fk.getBoundingClientRect().width) && void 0 !== Dk ? Dk : 0
-         };
-         return [ik(1), ik(Fk.e)]
-       }));
-       return ik <= 0 ? Fk.e : Math.min(Fk.e, Math.max(1, Math.floor(Dk / ik / ek + 1e-6) * ek))
-     }
-     const ce = 3,
-       Te = .5,
-       oe = kk => kk.right - kk.left;
-     const Ze = (kk, ek) => Math.abs((0, ie.c)(kk).x - (0, ie.c)(ek).x) + Math.abs((0, ie.c)(kk).y - (0, ie.c)(ek).y) + Math.abs(oe(kk) - oe(ek));
- ... (49 more removed lines; see GitHub link above)
+       playVideoAd(CC, zC) {
+         this.playVideoOrRewarded("video", CC, CC)
```

#### 7. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1168-L1390` → after: `L26-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L26-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/155.js#L26-L27) · [Before (L1168-L1390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/155.js#L1168-L1390)

```diff
-       return fk(lk), lk
-     }
- 
-     function ge(kk, ek, ik, Dk, fk) {
-       let [Sk, bk, rk] = ek;
-       const Pk = Fk.r[kk],
-         mk = {};
-       Pk.scale && oe(Dk) > 0 && Math.abs(oe(ik) - oe(Dk)) > Te && (mk.scale = Math.max(Fk.i, Math.min(Fk.e, rk * oe(ik) / oe(Dk))));
-       const Mk = (0, ie.c)(ik).x - (0, ie.c)(Dk).x,
-         Kk = (0, ie.c)(ik).y - (0, ie.c)(Dk).y;
-       return Pk.move && (Math.abs(Mk) > Te || Math.abs(Kk) > Te) && (mk.dx = Sk + Mk / fk.width, mk.dy = bk + Kk / fk.height), void 0 === mk.scale && void 0 === mk.dx ? null : mk
-     }
-     let Ge = 0;
- 
-     function Ne() {
-       return Ge > 0
- ... (207 more removed lines; see GitHub link above)
+       playRewarded(CC, zC) {
+         this.playVideoOrRewarded("rewarded", CC, zC)
```

#### 8. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1392-L1412` → after: `L29-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L29-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/155.js#L29-L36) · [Before (L1392-L1412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/155.js#L1392-L1412)

```diff
-     }
- 
-     function ii(kk, ek) {
-       return Object.keys(kk).filter((kk => kk !== ek)).map((ek => kk[ek]))
-     }
- 
-     function Di(kk) {
-       const ek = [],
-         ik = ek => (0, Fk.M)(ek) && !kk.documentElement.classList.contains((0, fe.x)(ek));
-       for (const bk of kk.querySelectorAll(`[${hk}]`)) {
-         const kk = ik(bk.getAttribute(hk)) ? bk.querySelector(".ScaleOnHover") : null,
-           Dk = (null !== kk && void 0 !== kk ? kk : bk).getBoundingClientRect();
-         (Dk.width > 0 || Dk.height > 0) && ek.push({
-           id: bk.getAttribute(hk),
-           box: {
-             left: Dk.left,
- ... (5 more removed lines; see GitHub link above)
+       renderBanner(CC) {
+         const zC = this.getBaseDivId(CC.adId, CC.width, CC.height);
+         window.tude.cmd.push((function() {
+           window.tude.refreshAdsViaDivMappings([{
+             divId: CC.divId,
+             baseDivId: zC
+           }])
+         }))
```

#### 9. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1414-L1430` → after: `L38-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L38-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/155.js#L38-L39) · [Before (L1414-L1430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/155.js#L1414-L1430)

```diff
-       const Dk = kk => (0, ie.A)(ek.filter((ek => {
-           let {
-             id: ik
-           } = ek;
-           return kk(ik)
-         })).map((kk => {
-           let {
-             box: ek
-           } = kk;
-           return ek
-         }))),
-         fk = {};
-       for (const bk of new Set(ek.map((kk => kk.id)))) fk[bk] = Dk((kk => kk === bk));
-       const Sk = Dk((kk => Ik.has(kk)));
-       return Sk && (fk.cluster = Sk), {
-         boxes: fk,
- ... (1 more removed lines; see GitHub link above)
+       getBaseDivId(CC, zC, ZC) {
+         return `pb-slot-bloxdio-${zC}-${ZC}${CC>1?`-${CC}`:""}`
```

#### 10. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1432-L1527` → after: `L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/155.js#L41) · [Before (L1432-L1527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/155.js#L1432-L1527)

```diff
-     }
- 
-     function fi(kk, ek, ik) {
-       const Dk = ek.right - ek.left,
-         fk = ek.bottom - ek.top;
-       return Xe(kk, "cluster", (ek => {
-         const Sk = ik => {
-             ek(ik);
-             const Dk = [...kk.querySelectorAll(`[${hk}]:not(.HudPreviewGhost)`)].filter((kk => Ik.has(kk.getAttribute(hk)))).map((kk => {
-                 const ek = kk.getBoundingClientRect();
-                 return {
-                   left: ek.left,
-                   top: ek.top,
-                   right: ek.right,
-                   bottom: ek.bottom
-                 }
- ... (80 more removed lines; see GitHub link above)
+       playVideoOrRewarded(CC, zC, ZC) {
```

#### 11. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1529-L2085` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/155.js#L43) · [Before (L1529-L2085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/155.js#L1529-L2085)

```diff
-         if (!mk) return;
-         const ek = new ResizeObserver((() => {
-           Pk() || Ak()
-         }));
-         for (const ik of mk.querySelectorAll(`[${hk}]`)) ek.observe(ik);
-         return null === (kk = mk.fonts) || void 0 === kk || kk.ready.then(Ak), () => {
-           ek.disconnect()
-         }
-       }), [mk, Ak, Pk, bk]), {
-         doc: mk,
-         boxes: Kk.boxes,
-         pieces: Kk.pieces,
-         insets: nk,
-         keysAbove: Hk,
-         ready: lk,
-         settled: yk
- ... (541 more removed lines; see GitHub link above)
+         let wC = !1;
```

#### 12. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L2087-L2224` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/155.js#L45) · [Before (L2087-L2224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/155.js#L2087-L2224)

```diff
-             clearInterval(Pk), null === ik || void 0 === ik || ik.removeEventListener("scroll", rk)
-           },
-           rk = () => {
-             Ne() || Sk()
-           },
-           Pk = setInterval((() => {
-             const kk = performance.now();
-             kk - Dk > 1500 ? Sk() : Ne() ? fk = null : null === fk ? fk = kk : kk - fk >= 150 && (Sk(), function(kk) {
-               var ek;
-               const ik = kk.closest(".SettingsMenuRight"),
-                 Dk = null === (ek = kk.closest(".HudLayoutSettings")) || void 0 === ek ? void 0 : ek.querySelector(".HudLayoutPreviewBox");
-               if (!ik || !Dk) return;
-               const fk = Dk.getBoundingClientRect().bottom + 8,
-                 Sk = ik.getBoundingClientRect().bottom - 8,
-                 bk = kk.getBoundingClientRect();
-               bk.top < fk ? ik.scrollBy({
- ... (122 more removed lines; see GitHub link above)
+             document.getElementById("GenericVideoWrapper").style.display = "none", wC = !0
```

#### 13. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L2226-L2387` → after: `L47-L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L47-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/155.js#L47-L48) · [Before (L2226-L2387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/155.js#L2226-L2387)

```diff
-           onClick: Sk,
-           children: [(0, Lk.jsx)(dk.d, {
-             name: "expand"
-           }), kk && (0, Lk.jsx)("span", {
-             children: Pk("hudLayout:fullScreen")
-           })]
-         });
-       return (0, Lk.jsxs)("div", {
-         ref: Kk,
-         className: "SettingBox HudLayoutPreviewBox",
-         children: [xk > 0 && Hk && (0, Lk.jsxs)("div", {
-           className: "HudLayoutPreviewRow",
-           children: [(0, Lk.jsx)("div", {
-             style: {
-               width: nk
-             },
- ... (146 more removed lines; see GitHub link above)
+           fC = (CC, zC) => {
+             console.error(`AD: Error while playing Aditude video ad: ${CC}:`, zC), nC(), ZC()
```

#### 14. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L2389-L2832` → after: `L50-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L50-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/155.js#L50-L76) · [Before (L2389-L2832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/155.js#L2389-L2832)

```diff
-           fk();
-           const Sk = new ResizeObserver(fk);
-           return Sk.observe(Dk), () => {
-             Sk.disconnect()
-           }
-         }), [kk]), ek
-       }(Qk), ak = (0, Ci.u)(bk.joystickMode), tk = bk.touchActionButtons, Xk = (0, fk.useMemo)((() => function(kk, ek) {
-         const ik = {},
-           Dk = [
-             ["extra", "X"],
-             ["game", "G"]
-           ];
-         ek || Dk.push(["attack", "P"]);
-         for (const [fk, Sk] of Dk) {
-           const ek = kk.names[Sk];
-           ek && (ik[fk] = ek)
- ... (428 more removed lines; see GitHub link above)
+         if (console.log(`AD: Requesting Aditude ${CC} ad`), void 0 === (null === (QC = window.tude) || void 0 === QC ? void 0 : QC.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${CC} ad playing`), void fC("Aditude ad lib not loaded", null);
+         document.getElementById("GenericVideoWrapper").style.display = "flex", document.getElementById("GenericVideoInner").classList.add("AditudeVideo"), window.tude.cmd.push((function() {
+           console.log("AD: Inside Aditude window.tude.cmd.push");
+           try {
+             window.tude.requestInstreamPlayer({
+               code: bC[CC],
+               divId: "GenericVideoInner",
+               mode: "adOnly"
+             }).then((ZC => {
+               console.log("AD: Inside Aditude window.tude.requestInstreamPlayer.then"), ZC.on("playerClose", ((ZC, QC) => {
+                 console.log("AD: Inside Aditude player.on playerClose"), console.log(`AD: Successfully finished Aditude ${CC} ad`), nC(), zC()
+               })).on("adPrefetchError", ((CC, zC) => {
+                 console.log("AD: Inside Aditude player.on adPrefetchError"), fC("Prefetch error", zC)
+               })).on("adError", ((CC, zC) => {
+                 console.log("AD: Inside Aditude player.on adError"), fC("Generic error", zC)
+               }));
+ ... (11 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/156.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/156.js` (83 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4)

#### 1. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L4)

```diff
-   8624: (kk, ek, ik) => {
+   8870: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L6-L8` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L6) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L6-L8)

```diff
-       b: () => qk,
-       f: () => dk,
-       j: () => Vk
+       d: () => fC
```

#### 3. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L10-L24` → after: `L8-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L8-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L8-L44) · [Before (L10-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L10-L24)

```diff
-     var Dk = ik(60),
-       fk = ik(4482),
-       Sk = ik(1095),
-       bk = ik(1406),
-       rk = ik(26),
-       Pk = ik(3398),
-       mk = ik(2201),
-       Mk = ik(1218),
-       Kk = ik(8658),
-       xk = ik(1893),
-       nk = ik(1922),
-       Uk = ik(1172),
-       Hk = ik(22),
-       wk = ik(1614),
-       lk = ik(1021),
+     var QC = ZC(20),
+       wC = ZC(1143),
+       bC = ZC(4942),
+       nC = ZC(1056);
+ 
+     function fC(CC) {
+       let {
+         note: zC
+       } = CC;
+       const {
+         t: ZC
+       } = (0, wC.y)(), {
+         clientEscMenuOptions: fC
+       } = (0, QC.k)(["clientEscMenuOptions"]);
+       return (0, nC.jsx)(bC.b, {
+         label: ZC("touchSettings:actionButtons"),
+ ... (21 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L26-L32` → after: `L46-L1900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L46-L1900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L46-L1900) · [Before (L26-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L26-L32)

```diff
-       yk = ik(8631),
-       Yk = ik(8637),
-       Lk = ik(8645),
-       Ck = ik(8556),
-       Ak = ik(8647),
-       jk = (ik(8653), ik(1066));
-     let sk = null;
+       qC = ZC(1388),
+       FC = ZC(20),
+       WC = ZC(77),
+       NC = ZC(91),
+       MC = ZC(4942),
+       gC = ZC(2369),
+       SC = ZC(264),
+       pC = ZC(1898),
+       PC = ZC(1902),
+       GC = ZC(8862),
+       RC = ZC(8870),
+       AC = ZC(310),
+       xC = ZC(1056);
+     const JC = {
+       floating: "settingsMenu:joystickFloating",
+       fixed_shown: "settingsMenu:joystickFixed",
+ ... (1839 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L34-L35` → after: `L1902-L1906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1902-L1906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L1902-L1906) · [Before (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L34-L35)

```diff
-     function dk() {
-       return null !== sk
+     function MZ(CC, zC) {
+       (0, wC.useEffect)((() => {
+         var ZC;
+         null === (ZC = CC.current) || void 0 === ZC || ZC.toggleAttribute("inert", zC)
+       }), [CC, zC])
```

#### 6. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L38-L39` → after: `L1910-L2027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R1910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L1910-L2027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L1910-L2027) · [Before (L38-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L38-L39)

```diff
-     function Vk() {
-       return "pad" === sk
+     function SZ(CC) {
+       let {
+         onScale: zC,
+         onHidden: ZC,
+         onReset: bC,
+         locked: nC,
+         lockable: fC,
+         onLocked: oC,
+         onClose: FC,
+         ...WC
+       } = CC;
+       const {
+         t: NC
+       } = (0, QC.y)(), MC = (0, wC.useRef)(null);
+       (0, VC.u)("popup", MC, FC),
+       function(CC) {
+ ... (102 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L42-L43` → after: `L2031-L2056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2031-L2056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L2031-L2056) · [Before (L42-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L42-L43)

```diff
-     function Fk() {
-       return "inGame" === Hk.b.get("gameState") && !(0, wk.s)()
+     function PZ(CC) {
+       let {
+         info: zC,
+         tuple: ZC,
+         props: wC
+       } = CC;
+       const {
+         t: bC
+       } = (0, QC.y)();
+       return (0, xC.jsx)(MC.f, {
+         name: bC("hudLayout:size"),
+         min: YC.l,
+         max: YC.i,
+         step: iz,
+         initValue: ZC[2],
+         disabled: wC.locked.has(zC.id),
+ ... (10 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L47` → after: `L2060-L2193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2060-L2193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L2060-L2193) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L47)

```diff
-       return (0, Yk.p)(kk, Mk.o, Yk.d, Yk.f, Yk.g)
+       const {
+         t: zC
+       } = (0, QC.y)(), {
+         present: ZC,
+         elements: bC,
+         selected: nC,
+         onSelect: fC,
+         onHidden: qC,
+         onReset: FC,
+         note: WC,
+         actionButtons: NC,
+         keyNames: MC,
+         sizeBesidePreview: gC,
+         locked: SC,
+         lockable: pC,
+         onLocked: PC
+ ... (118 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L49` → after: `L2195-L2203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2195-L2203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L2195-L2203) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L49)

```diff
-     const qk = (0, Dk.memo)((function() {
+ 
+     function RZ(CC) {
+       let {
+         preview: zC,
+         quick: ZC,
+         onFullScreen: bC,
+         resting: nC,
+         onSidePanel: fC
+       } = CC;
```

#### 10. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L52-L166` → after: `L2206-L2216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2206-L2216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L2206-L2216) · [Before (L52-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L52-L166)

```diff
-       } = (0, Uk.D)(), {
-         userContext: ek
-       } = (0, Sk.d)(), [ik, Hk] = (0, Dk.useState)(null), [lk, dk] = (0, Dk.useState)(null), Vk = (0, Dk.useRef)(null), qk = (0, Dk.useCallback)((kk => {
-         Vk.current = kk, dk(kk)
-       }), []), Ik = (0, Dk.useRef)(0), zk = (0, Dk.useRef)(null), Qk = (0, Dk.useRef)({
-         x: 0,
-         y: 0
-       }), [vk, Ek] = (0, Dk.useState)(0), hk = (0, Dk.useMemo)((() => function(kk) {
-         const ek = [];
-         for (let Dk = 0; Dk < Mk.o; Dk++) {
-           var ik;
-           ek.push(null !== (ik = kk[Dk]) && void 0 !== ik ? ik : null)
-         }
-         return ek
-       }((0, Kk.f)(ek.getPlayerCosmetics().emote))), [ek, vk]);
-       (0, nk.c)("cosmeticsUpdated", (kk => {
- ... (99 more removed lines; see GitHub link above)
+       } = (0, QC.y)(), FC = WZ(), WC = (0, wC.useRef)(null), {
+         width: NC
+       } = (0, zz.e)(WC), MC = Math.floor(FC.width * Math.min(1, zC.maxHeight / FC.height)), gC = NC - MC - 12, SC = gC >= 130, pC = NC > 0;
+       (0, wC.useEffect)((() => {
+         pC && fC(SC)
+       }), [pC, SC, fC]);
+       const PC = (0, Zz.u)(SC ? MC : NC, FC.width, FC.height, zC.maxHeight),
+         GC = nC ? (0, xC.jsx)("div", {
+           className: "HudPreviewResting",
+           style: {
+             height: FC.height * PC
```

#### 11. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L168-L174` → after: `L2218-L2219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2218-L2219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L2218-L2219) · [Before (L168-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L168-L174)

```diff
-         }), [ik, hk, qk]), null === ik) return null;
-       const Tk = "hold" === ik || "pad" === ik,
-         Zk = null !== lk ? hk[lk] : null,
-         Ok = null !== Zk ? (0, mk.g)(Zk).displayName : kk("emotes:pickEmote");
-       return (0, jk.jsx)("div", {
-         className: pk()("EmoteWheelOverlay", {
-           EmoteWheelOverlayPad: "pad" === ik
+         }) : (0, xC.jsx)(NZ, {
+           ...zC
```

#### 12. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L176-L183` → after: `L2221-L2225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2221-L2225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L2221-L2225) · [Before (L176-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L176-L183)

```diff
-         onMouseDown: kk => {
-           kk.target === kk.currentTarget && tk()
-         },
-         children: (0, jk.jsxs)("div", {
-           className: "EmoteWheel",
-           style: {
-             width: 2 * Yk.o + "rem",
-             height: 2 * Yk.o + "rem"
+         RC = CC => (0, xC.jsxs)(qC.O, {
+           className: "HudLayoutFullScreenButton",
+           ariaLabel: oC("hudLayout:fullScreen"),
+           analyticsClick: {
+             id: "hud_layout.full_screen"
```

#### 13. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L185-L237` → after: `L2227-L2242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2227-L2242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L2227-L2242) · [Before (L185-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L185-L237)

```diff
-           children: [(0, jk.jsxs)("svg", {
-             className: "EmoteWheelSvg",
-             viewBox: `0 0 ${Yk.i} ${Yk.i}`,
-             children: [hk.map(((ek, ik) => {
-               const Dk = null !== ek,
-                 fk = Tk && ik === lk;
-               return (0, jk.jsx)("path", {
-                 d: uk(ik),
-                 className: pk()("EmoteWheelWedge", {
-                   EmoteWheelWedgeHighlighted: fk,
-                   EmoteWheelWedgeDisabled: !Dk
-                 }),
-                 onClick: kk => {
-                   kk.stopPropagation(), null !== ek && (kk => {
-                     tk(), Xk(kk)
-                   })(ek)
- ... (37 more removed lines; see GitHub link above)
+           onClick: bC,
+           children: [(0, xC.jsx)(KC.c, {
+             name: "expand"
+           }), CC && (0, xC.jsx)("span", {
+             children: oC("hudLayout:fullScreen")
+           })]
+         });
+       return (0, xC.jsxs)("div", {
+         ref: WC,
+         className: "SettingBox HudLayoutPreviewBox",
+         children: [NC > 0 && SC && (0, xC.jsxs)("div", {
+           className: "HudLayoutPreviewRow",
+           children: [(0, xC.jsx)("div", {
+             style: {
+               width: MC
+             },
```

#### 14. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L242-L267` → after: `L2325-L2359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2325-L2359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L2325-L2359) · [Before (L242-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L242-L267)

```diff
-     }))
-   },
-   8614: (kk, ek, ik) => {
-     ik.d(ek, {
-       d: () => Kk,
-       e: () => Uk,
-       i: () => Hk,
-       j: () => nk,
-       n: () => xk
-     });
-     var Dk = ik(60),
-       fk = ik(8620),
-       Sk = ik(26),
-       bk = ik(1893),
-       rk = ik(38),
-       Pk = ik(1240),
- ... (10 more removed lines; see GitHub link above)
+     }
+ 
+     function YZ() {
+       var CC, zC;
+       const {
+         t: ZC
+       } = (0, QC.y)(), bC = (0, YC.ab)(), {
+         clientEscMenuOptions: nC
+       } = (0, FC.k)(["clientEscMenuOptions"]), fC = (0, AZ.h)(), oC = bC.hudLayouts[fC], [WC, NC] = (0, wC.useState)(null), {
+         rowIconsOpen: gC,
+         onRowIconsOpen: SC,
+         select: pC
+       } = function(CC, zC) {
+         const [ZC, QC] = (0, wC.useState)((() => YC.F.some((zC => void 0 !== CC.hudElements[zC] || CC.hudLocked.includes(zC))))), bC = (0, wC.useCallback)((CC => {
+           zC(CC), (0, YC.N)(CC) && QC(!0)
+         }), [zC]);
+ ... (19 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L269-L279` → after: `L2361-L2586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2361-L2586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L2361-L2586) · [Before (L269-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L269-L279)

```diff
-             this.state = {
-               ...this.state,
-               channel: null !== (ek = null === (ik = mk.c.get("chatChannels")) || void 0 === ik ? void 0 : ik[0]) && void 0 !== ek ? ek : null
-             };
-             const kk = Sk.j.subscribe("reportPlayer", (kk => {
-               let {
-                 playerEId: ek
-               } = kk;
-               this.setState({
-                 ...this.state,
-                 reportedPlayers: [...this.state.reportedPlayers, ek]
+             wC[FC] = CC.cloneNode(!0);
+             const zC = (null !== (nC = null === (fC = CC.querySelector(".TouchKeyLabel")) || void 0 === fC ? void 0 : fC.textContent) && void 0 !== nC ? nC : "").split(/\s+/).filter((CC => !/[\d\xd7]/.test(CC))).join(" ");
+             zC && (bC[FC] = zC)
+           }
+         }
+         const oC = zC => {
+             const ZC = CC.querySelector(`.InGameUi ${zC}`);
+             return null !== ZC && !ZC.classList.contains("Hidden")
+           },
+           qC = [...CC.querySelectorAll(".InGameUi .HotBarContainer.Touch .HotBarGameItemsContainer .InvenItem")].map((CC => CC.cloneNode(!0)));
+         return {
+           faces: Object.keys(wC).length > 0 ? wC : null,
+           names: bC,
+           shop: oC(".TouchInventoryKey.ShopKey"),
+           bag: oC(".TouchInventoryKey.BagKey"),
+           items: qC.length > 0 ? qC : null,
+ ... (210 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L281-L291` → after: `L2588-L2597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2588-L2597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L2588-L2597) · [Before (L281-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L281-L291)

```diff
-             }));
-             this.stopListening = [bk.gameBridge.subscribe("chatReceived", (kk => {
-               let {
-                 serverChatMsgId: ek,
-                 content: ik,
-                 author: Dk
-               } = kk;
-               this.addMessage(ek, ik, Dk)
-             })), () => {
-               Sk.j.unsubscribe(kk)
-             }, mk.c.subscribe("chatChannels", (kk => {
+             }
+           }), (0, xC.jsx)(MC.f, {
+             name: ZC("hudLayout:opacity"),
+             min: YC.f,
+             max: 1,
+             step: .05,
+             initValue: bC.hudKeyOpacity,
+             format: CC => `${Math.round(100*CC)}%`,
+             circleInfoText: ZC("hudLayout:opacityInfo"),
+             onChange: CC => {
```

#### 17. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L293-L295` → after: `L2599-L2604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2599-L2604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L2599-L2604) · [Before (L293-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L293-L295)

```diff
-               this.setState({
-                 ...this.state,
-                 channel: null !== (ek = null === kk || void 0 === kk ? void 0 : kk[0]) && void 0 !== ek ? ek : null
+               null === (zC = HC.current) || void 0 === zC || zC.setOpacity(CC)
+             },
+             onChangeComplete: CC => {
+               (0, YC.T)(CC), (0, iC.reportAnalyticsClick)({
+                 id: "hud_layout.edit",
+                 value: "opacity"
```

#### 18. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L309-L333` → after: `L2651-L2718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2651-L2718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L2651-L2718) · [Before (L309-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L309-L333)

```diff
-         }, this.getState = () => this.state
-       }
-       addMessage(kk, ek) {
-         let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-         const Dk = {
-           serverChatMsgId: kk,
-           content: ek,
-           clientChatMsgId: this.nextClientChatMsgId++,
-           author: ik
-         };
-         this.setState({
-           ...this.state,
-           messages: [Dk, ...this.state.messages].slice(0, fk.g)
-         })
-       }
-       selectNextChannel() {
- ... (9 more removed lines; see GitHub link above)
+         }), zC && (0, xC.jsx)(YZ, {})]
+       })
+     }, function() {
+       const {
+         t: CC
+       } = (0, QC.y)(), {
+         joystickMode: zC,
+         touchSpeedCurve: ZC,
+         autorun: wC,
+         jumpLock: bC
+       } = (0, FC.k)(["clientEscMenuOptions"]).clientEscMenuOptions;
+       return (0, xC.jsxs)(xC.Fragment, {
+         children: [(0, xC.jsx)(MC.e, {
+           label: CC("settingsMenu:joystick"),
+           options: AC.yb.map((zC => ({
+             value: zC,
+ ... (52 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L335-L341` → after: `L2720-L2723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2720-L2723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L2720-L2723) · [Before (L335-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L335-L341)

```diff
-         }
-       }
-       setState(kk) {
-         this.state = kk;
-         for (const ek of this.listeners) ek()
-       }
-     };
+         },
+         circleInfoText: CC("settingsMenu:vibrationInfo")
+       }) : null
+     }];
```

#### 20. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L344-L350` → after: `L2726-L2728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2726-L2728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L2726-L2728) · [Before (L344-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L344-L350)

```diff
-       const [kk, ek] = (0, Dk.useState)(Kk.getState);
-       return (0, Dk.useEffect)((() => {
-         const kk = Kk.subscribe((() => {
-           ek(Kk.getState())
-         }));
-         return ek(Kk.getState()), kk
-       }), []), kk
+       return (0, xC.jsx)(xC.Fragment, {
+         children: mZ.map(((CC, zC) => (0, xC.jsx)(CC, {}, zC)))
+       })
```

#### 21. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L353-L391` → after: `L2732-L2842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2732-L2842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L2732-L2842) · [Before (L353-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L353-L391)

```diff
-     function nk(kk) {
-       var ek, ik;
-       if (kk.startsWith("/report")) {
-         var Dk;
-         const ek = null !== (Dk = kk.replace("/report", "").trim().split(" ")[0]) && void 0 !== Dk ? Dk : "";
-         if ("" === ek) return void Kk.addMessage(null, [{
-           str: "You must type a player's name when reporting them.\nExample:\n/report Bob"
-         }]);
-         const ik = bk.gameBridge.latest("players"),
-           fk = bk.gameBridge.latest("hiddenPlayerNames"),
-           rk = kk => {
-             var Dk, Sk;
-             const bk = null !== (Dk = null === (Sk = ik.byId[kk]) || void 0 === Sk ? void 0 : Sk.name) && void 0 !== Dk ? Dk : null;
-             return null !== bk && (bk === ek || (0, Pk.c)(bk, fk) === ek)
-           };
-         if (null !== ik.localId && rk(ik.localId)) return void Kk.addMessage(null, [{
- ... (23 more removed lines; see GitHub link above)
+     function lZ() {
+       const {
+         t: CC
+       } = (0, QC.y)(), {
+         isTouchScreen: zC,
+         clientEscMenuOptions: ZC,
+         gameState: nC
+       } = (0, FC.k)(["isTouchScreen", "clientEscMenuOptions", "gameState"]), fC = (0, gC.h)("ezBridging"), oC = (0, gC.h)("ezTowering"), pC = "inGame" !== nC || !0 === fC, PC = (0, SC.h)() && ("inGame" !== nC || !0 === oC), [, RC] = (0, wC.useReducer)((CC => CC + 1), 0), AC = (0, … [truncated]
+       return (0, xC.jsxs)("div", {
+         className: "SettingsMenuRightInner",
+         children: [AC && (0, xC.jsxs)("div", {
+           className: "SettingBox SettingBoxWithButton",
+           children: [(0, xC.jsx)("div", {
+             children: CC("controller:settingsControlsNote")
+           }), (0, xC.jsx)(qC.O, {
+             onClick: () => {
+ ... (95 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L394-L396` → after: `L2845-L2873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2845-L2873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L2845-L2873) · [Before (L394-L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L394-L396)

```diff
-     function Uk() {
-       var kk;
-       return null !== (kk = rk.f.getItem("recentlySentChatMsgs")) && void 0 !== kk ? kk : []
+     function XZ(CC) {
+       let {
+         title: zC,
+         defaultOpen: ZC,
+         children: QC
+       } = CC;
+       const [bC, nC] = (0, wC.useState)(ZC);
+       return (0, xC.jsxs)("div", {
+         className: oC()("ControlsSection", {
+           Collapsed: !bC
+         }),
+         children: [(0, xC.jsxs)("div", {
+           className: "ControlsSectionHeader",
+           "data-pad-focusable": !0,
+           onClick: () => {
+             nC(!bC)
+ ... (13 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L400-L407` → after: `L2877-L2899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2877-L2899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L2877-L2899) · [Before (L400-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L400-L407)

```diff
-       var ek;
-       let ik = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-       const Dk = null !== (ek = rk.f.getItem("recentlySentChatMsgs")) && void 0 !== ek ? ek : [],
-         fk = Dk.length + 1,
-         Sk = ik ? (kk % fk + fk) % fk : Math.min(Dk.length, Math.max(0, kk));
-       return {
-         stepsBack: Sk,
-         text: 0 === Sk ? "" : Dk[Dk.length - Sk]
+       let {
+         noaAction: zC,
+         forceUpdate: ZC,
+         clashesWith: fC,
+         showPadGlyph: FC
+       } = CC;
+       const {
+         t: WC
+       } = (0, QC.y)(), NC = (0, PC.c)(zC), [MC, gC] = (0, wC.useState)(!1), [SC, GC] = (0, wC.useState)("controls:clickToEnterNewBinding"), [RC, AC] = (0, wC.useState)(null), [JC, IC] = (0, wC.useState)(null), iC = (0, wC.useRef)(null);
+       (0, wC.useEffect)((() => {
+         MC && iC.current && iC.current.focus()
+       }), [MC]);
+       const vC = bC.o[zC].filter((CC => nC.l[CC]));
+       let eC = null;
+       const hC = [],
+         KC = fC.flatMap((CC => {
+ ... (7 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L411-L421` → after: `L3002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L3002) · [Before (L411-L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L411-L421)

```diff
-   8580: (kk, ek, ik) => {
-     ik.d(ek, {
-       d: () => bk,
-       e: () => Sk
-     });
-     var Dk = ik(1946);
-     const fk = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
-       Sk = kk => "string" === typeof kk.icon && "" !== kk.icon && "string" === typeof kk.keycode && fk.test(kk.keycode),
-       bk = kk => "Space" === kk ? "_" : Dk.j[kk]
-   },
-   8631: (kk, ek, ik) => {
+   8882: (CC, zC, ZC) => {
```

#### 25. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L423` → after: `L3004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L3004) · [Before (L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L423)

```diff
-       c: () => fk
+       b: () => nC
```

#### 26. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L425-L429` → after: `L3006-L3040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3006-L3040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L3006-L3040) · [Before (L425-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L425-L429)

```diff
-     var Dk = ik(22);
- 
-     function fk() {
-       return !Dk.b.get("isTouchScreen") && null !== document.pointerLockElement
-     }
+     var QC = ZC(48),
+       wC = ZC(1013),
+       bC = ZC(1056);
+     const nC = (0, QC.forwardRef)((function(CC, zC) {
+       let {
+         icon: ZC,
+         title: QC,
+         sub: nC,
+         expanded: fC,
+         onClick: oC
+       } = CC;
+       return (0, bC.jsxs)("button", {
+         ref: zC,
+         type: "button",
+         className: "SettingBox SettingBoxFeatured FeaturedSettingsEntry",
+         "aria-expanded": fC,
+ ... (19 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L431` → after: `L3042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L3042) · [Before (L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L431)

```diff
-   8712: (kk, ek, ik) => {
+   8890: (CC, zC, ZC) => {
```

#### 28. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L525` → after: `L3136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L3136) · [Before (L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L525)

```diff
-       const ik = (kk, ek, ik, Dk) => ek - kk > Dk - ik ? ik - kk > ek - Dk ? Dk - ek : ik - kk : kk < ik ? ik - kk : ek > Dk ? Dk - ek : 0;
+       const ZC = (CC, zC, ZC, QC) => zC - CC > QC - ZC ? ZC - CC > zC - QC ? QC - zC : ZC - CC : CC < ZC ? ZC - CC : zC > QC ? QC - zC : 0;
```

#### 29. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L545-L562` → after: `L3156-L3157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3156-L3157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L3156-L3157) · [Before (L545-L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L545-L562)

```diff
-       A: () => fk,
-       c: () => Dk,
-       d: () => bk,
-       h: () => xk,
-       i: () => mk,
-       m: () => Sk,
-       o: () => Uk,
-       q: () => Mk,
-       u: () => rk,
-       v: () => Kk,
-       x: () => Pk,
-       z: () => nk
-     })
-   },
-   8637: (kk, ek, ik) => {
-     ik.d(ek, {
- ... (2 more removed lines; see GitHub link above)
+       A: () => MC,
+       D: () => wC,
```

#### 30. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L566-L567` → after: `L3161-L3163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3161-L3163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L3161-L3163) · [Before (L566-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L566-L567)

```diff
-       i: () => bk,
-       k: () => fk,
+       h: () => qC,
+       l: () => bC,
+       n: () => gC,
```

#### 31. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L569-L595` → after: `L3165-L3168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3165-L3168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L3165-L3168) · [Before (L569-L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L569-L595)

```diff
-       p: () => Uk,
-       r: () => Kk,
-       v: () => Mk,
-       y: () => xk
-     });
-     const Dk = 14,
-       fk = 6,
-       Sk = (Dk + fk) / 2,
-       bk = 200,
-       rk = bk / 2,
-       Pk = bk / 2 - 1,
-       mk = fk / Dk * (bk / 2),
-       Mk = (kk, ek) => -Math.PI / 2 + 2 * kk * Math.PI / ek,
-       Kk = (kk, ek, ik) => {
-         const Dk = 2 * Math.PI / ik;
-         return (Math.round((Math.atan2(ek, kk) + Math.PI / 2) / Dk) % ik + ik) % ik
- ... (11 more removed lines; see GitHub link above)
+       q: () => fC,
+       u: () => WC,
+       w: () => oC
+     })
```

#### 32. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L597` → after: `L3170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L3170) · [Before (L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L597)

```diff
-   8674: (kk, ek, ik) => {
+   8682: (CC, zC, ZC) => {
```

#### 33. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L599` → after: `L3172-L3173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3172-L3173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L3172-L3173) · [Before (L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L599)

```diff
-       e: () => bk
+       b: () => wC,
+       c: () => QC
```

#### 34. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L601-L609` → after: `L3175-L3176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3175-L3176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L3175-L3176) · [Before (L601-L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L601-L609)

```diff
-     var Dk = ik(60),
-       fk = ik(8607),
-       Sk = ik(2414);
- 
-     function bk() {
-       const kk = (0, Sk.e)("shopInfo"),
-         [, ek] = (0, Dk.useReducer)((kk => kk + 1), 0);
-       return (0, Sk.d)("shopInfo", ek), !(0, fk.c)(kk)
-     }
+     const QC = "controllerOpenKeyboard",
+       wC = "controllerKeyboardVisible"
```

#### 35. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L611` → after: `L3178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L3178) · [Before (L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L611)

```diff
-   8576: (kk, ek, ik) => {
+   8685: (CC, zC, ZC) => {
```

#### 36. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L616` → after: `L3182-L3185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3182-L3185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L3182-L3185) · [Before (L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L616)

```diff
-       l: () => fk
+       k: () => FC,
+       m: () => GC,
+       q: () => RC,
+       t: () => NC
```

#### 37. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L618-L639` → after: `L3187-L3191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3187-L3191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L3187-L3191) · [Before (L618-L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L618-L639)

```diff
-     var Dk = ik(8580);
-     const fk = kk => {
-         const ek = [];
-         kk.holdingGun && ek.push({
-           kind: "reload"
-         }), kk.touchscreenActionButton && ek.push({
-           kind: "touchButton",
-           label: kk.touchscreenActionButton
-         });
-         for (const Sk of null !== (ik = null === (fk = kk.customButtons) || void 0 === fk ? void 0 : fk.filter(Dk.e)) && void 0 !== ik ? ik : []) {
-           var ik, fk;
-           ek.push({
-             kind: "customButton",
-             id: Sk.id,
-             icon: Sk.icon,
-             description: Sk.description
- ... (6 more removed lines; see GitHub link above)
+     var QC = ZC(1584),
+       wC = ZC(1654);
+     const bC = CC => CC >= 56320 && CC <= 57343,
+       nC = CC => CC >= 55296 && CC <= 56319,
+       fC = (CC, zC) => zC >= 2 && bC(CC.charCodeAt(zC - 1)) && nC(CC.charCodeAt(zC - 2)) ? zC - 2 : Math.max(0, zC - 1),
```

#### 38. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L641-L651` → after: `L3193-L3198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3193-L3198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L3193-L3198) · [Before (L641-L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L641-L651)

```diff
-         if (null === kk || null === ek) return kk === ek;
-         if (kk.kind !== ek.kind) return !1;
-         switch (kk.kind) {
-           case "reload":
-             return !0;
-           case "specialAction":
-             return kk.action === ek.action;
-           case "customButton":
-             return kk.id === ek.id && kk.icon === ek.icon;
-           case "touchButton":
-             return kk.label === ek.label
+         let ZC;
+         var QC, wC;
+         return ZC = CC.start !== CC.end ? zC < 0 ? CC.start : CC.end : zC < 0 ? fC(CC.value, CC.start) : (QC = CC.value, (wC = CC.start) + 1 < QC.length && nC(QC.charCodeAt(wC)) && bC(QC.charCodeAt(wC + 1)) ? wC + 2 : Math.min(QC.length, wC + 1)), {
+           value: CC.value,
+           start: ZC,
+           end: ZC
```

#### 39. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L653-L668` → after: `L3200-L3203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3200-L3203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L3200-L3203) · [Before (L653-L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L653-L668)

```diff
-       }
-   },
-   8570: (kk, ek, ik) => {
-     ik.d(ek, {
-       c: () => Mk,
-       e: () => nk,
-       h: () => Kk,
-       j: () => Uk
-     });
-     var Dk = ik(60),
-       fk = ik(26),
-       Sk = ik(1406),
-       bk = ik(8576),
-       rk = ik(8588);
-     let Pk = null;
-     const mk = () => Pk,
+       },
+       qC = ["text", "search", "url", "email", "tel", "password", "number"],
+       FC = CC => !(!(0, wC.d)(CC) || CC.isContentEditable || CC.hasAttribute("data-pad-no-osk")) && (CC instanceof HTMLTextAreaElement || CC instanceof HTMLInputElement && qC.includes(CC.type)),
+       WC = CC => null !== CC.selectionStart,
```

#### 40. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L670` → after: `L3205-L3213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3205-L3213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L3205-L3213) · [Before (L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L670)

```diff
-         (0, bk.h)(Pk, kk) || (Pk = kk, fk.j.tm(rk.g, Pk))
+         var zC, ZC;
+         const {
+           value: QC
+         } = CC;
+         return {
+           value: QC,
+           start: null !== (zC = CC.selectionStart) && void 0 !== zC ? zC : QC.length,
+           end: null !== (ZC = CC.selectionEnd) && void 0 !== ZC ? ZC : QC.length
+         }
```

#### 41. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L672-L674` → after: `L3215-L3221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3215-L3221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L3215-L3221) · [Before (L672-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L672-L674)

```diff
-       Kk = () => {
-         const [kk, ek] = (0, Dk.useState)(mk);
-         return (0, Sk.c)(rk.g, ek), kk
+       MC = (CC, zC, ZC) => {
+         if (CC.readOnly) return;
+         const wC = CC instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
+         Object.getOwnPropertyDescriptor(wC, "value").set.call(CC, zC.value), WC(CC) && CC.setSelectionRange(zC.start, zC.end), (0, QC.f)(CC, new InputEvent("input", {
+           bubbles: !0,
+           inputType: ZC
+         }))
```

#### 42. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L677-L678` → after: `L3224-L3239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3224-L3239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L3224-L3239) · [Before (L677-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L677-L678)

```diff
-     const nk = kk => {
-         kk !== xk && (xk = kk, fk.j.tm(rk.j, kk))
+     const SC = (CC, zC) => !!document.execCommand(CC, !1, zC) || (gC || (gC = !0, console.warn(`execCommand("${CC}") failed; the on-screen keyboard is setting the value directly`)), !1),
+       pC = (CC, zC) => {
+         SC("insertText", zC) || MC(CC, function(CC, zC) {
+           let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
+           const QC = CC.value.slice(0, CC.start),
+             wC = CC.value.slice(CC.end);
+           let bC = ZC < 0 ? zC.length : Math.max(0, ZC - QC.length - wC.length);
+           bC > 0 && bC < zC.length && nC(zC.charCodeAt(bC - 1)) && bC--;
+           const fC = zC.slice(0, bC),
+             oC = QC.length + fC.length;
+           return {
+             value: QC + fC + wC,
+             start: oC,
+             end: oC
+           }
+         }(NC(CC), zC, CC.maxLength), "insertText")
```

#### 43. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L680-L682` → after: `L3241-L3257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3241-L3257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L3241-L3257) · [Before (L680-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L680-L682)

```diff
-       Uk = () => {
-         const [kk, ek] = (0, Dk.useState)(xk);
-         return (0, Sk.c)(rk.j, ek), kk
+       PC = CC => {
+         SC("delete") || MC(CC, (CC => {
+           const zC = CC.start === CC.end ? fC(CC.value, CC.start) : CC.start;
+           return {
+             value: CC.value.slice(0, zC) + CC.value.slice(CC.end),
+             start: zC,
+             end: zC
+           }
+         })(NC(CC)), "deleteContentBackward")
+       },
+       GC = (CC, zC) => {
+         if (!WC(CC)) return;
+         const ZC = oC(NC(CC), zC);
+         CC.setSelectionRange(ZC.start, ZC.end)
+       },
+       RC = CC => {
+ ... (1 more added lines; see GitHub link above)
```

#### 44. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L685` → after: `L3260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L3260) · [Before (L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L685)

```diff
-   8588: (kk, ek, ik) => {
+   8844: (CC, zC, ZC) => {
```

#### 45. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L687-L693` → after: `L3262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L3262) · [Before (L687-L693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L687-L693)

```diff
-       d: () => Sk,
-       g: () => Dk,
-       j: () => fk,
-       k: () => rk,
-       o: () => Pk,
-       s: () => mk,
-       t: () => bk
+       c: () => fC
```

#### 46. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L695-L701` → after: `L3264-L3277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3264-L3277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L3264-L3277) · [Before (L695-L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L695-L701)

```diff
-     const Dk = "controllerActionHintChanged",
-       fk = "controllerActionWheelHintChanged",
-       Sk = "controllerOpenChat",
-       bk = "controllerSneakToggledChanged",
-       rk = "controllerAttackLatchedChanged",
-       Pk = "controllerDropStackHoldChanged",
-       mk = "controllerPickBlockHintChanged"
+     var QC = ZC(20),
+       wC = ZC(2048),
+       bC = ZC(1307),
+       nC = ZC(1347);
+     const fC = async () => {
+       if ((0, nC.h)()) {
+         if (!0 !== await bC.NotificationProvider.showPromptPopup({
+             title: "controller:menusLeaveGameTitle",
+             confirmText: "controller:menusLeaveGameLeave",
+             cancelText: "controller:menusLeaveGameStay",
+             destructive: !0
+           }).getResult() || "inGame" !== QC.b.get("gameState")) return
+       }(0, wC.e)()
+     }
```

#### 47. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L703` → after: `L3279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L3279) · [Before (L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L703)

```diff
-   8536: (kk, ek, ik) => {
+   8847: (CC, zC, ZC) => {
```

#### 48. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L708` → after: `L3283-L3285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3283-L3285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L3283-L3285) · [Before (L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L708)

```diff
-       k: () => rk
+       k: () => nC,
+       m: () => wC,
+       n: () => fC
```

#### 49. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L710-L725` → after: `L3287-L3295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3287-L3295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L3287-L3295) · [Before (L710-L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L710-L725)

```diff
-     var Dk = ik(1406),
-       fk = ik(1375);
-     const Sk = "controllerInventoryCursorChanged",
-       bk = {
-         showing: !1,
-         kind: null,
-         holding: !1,
-         slotHasItem: !1,
-         pressHints: null,
-         hasCategories: !1,
-         hasList: !1,
-         openButtonCloses: !1,
-         steppingSlots: !1,
-         quickMoveToHotbar: !1,
-         dropStackHold: null,
-         hotbarPicking: !1
+     var QC = ZC(1867);
+     const wC = "controllerPadShopOpen",
+       bC = CC => QC.e.includes(CC),
+       nC = CC => Object.values(CC).some((CC => !1 !== CC.canBuy && !CC.isRewardedAd)),
+       fC = (CC, zC, ZC) => {
+         var QC, wC, nC, fC;
+         const oC = CC.filter((CC => !bC(CC))),
+           qC = null !== zC && CC.includes(zC) ? zC : null;
+         return null !== qC && !bC(qC) && ZC(qC) ? qC : null !== (QC = null !== (wC = null !== (nC = null !== (fC = oC.find(ZC)) && void 0 !== fC ? fC : oC[0]) && void 0 !== nC ? nC : qC) && void 0 !== wC ? wC : CC[0]) && void 0 !== QC ? QC : null
```

#### 50. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L727-L729` → after: `L3297-L3320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3297-L3320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L3297-L3320) · [Before (L727-L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L727-L729)

```diff
-       rk = () => {
-         var kk, ek;
-         return (0, Dk.e)(Sk, null !== (kk = null === (ek = (0, fk.h)()) || void 0 === ek ? void 0 : ek.getInventoryCursorState()) && void 0 !== kk ? kk : bk)
+       oC = CC => CC.userInput || CC.isRewardedAd || "boolean" === typeof CC.isSelected ? null : JSON.stringify([CC.image, CC.cost, CC.currency, CC.amount, CC.customTitle, CC.buyButtonText, CC.description, CC.canBuy])
+   },
+   8862: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => qC,
+       f: () => FC
+     });
+     var QC = ZC(48),
+       wC = ZC(1383),
+       bC = ZC(1911),
+       nC = ZC(1357),
+       fC = ZC(1373),
+       oC = ZC(1056);
+     const qC = () => {
+         const CC = (0, nC.r)();
+         if ((0, QC.useEffect)((() => {
+ ... (8 more added lines; see GitHub link above)
```

#### 51. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L732-L733` → after: `L3323-L3326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3323-L3326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L3323-L3326) · [Before (L732-L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L732-L733)

```diff
-         var kk, ek;
-         return null !== (kk = null === (ek = (0, fk.h)()) || void 0 === ek ? void 0 : ek.isPadSteppingSlots()) && void 0 !== kk && kk
+         var CC;
+         const zC = (0, nC.r)(),
+           [, ZC] = (0, QC.useReducer)((CC => CC + 1), 0);
+         return (0, wC.c)(bC.d, ZC), null !== (CC = null === zC || void 0 === zC ? void 0 : zC.hasActivePad()) && void 0 !== CC && CC
```

#### 52. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L736` → after: `L3329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L3329) · [Before (L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L736)

```diff
-   8530: (kk, ek, ik) => {
+   8691: (CC, zC, ZC) => {
```

#### 53. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L738` → after: `L3331-L3333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3331-L3333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L3331-L3333) · [Before (L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L738)

```diff
-       e: () => xk,
+       b: () => QC,
+       d: () => qC,
+       g: () => SC,
```

#### 54. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L743-L744` → after: `L3339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L3339) · [Before (L743-L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L743-L744)

```diff
-       t: () => Mk,
-       x: () => Kk
+       s: () => NC
```

#### 55. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L746-L761` → after: `L3341-L3356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3341-L3356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L3341-L3356) · [Before (L746-L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L746-L761)

```diff
-     let Dk = null;
-     const fk = new Set,
-       Sk = kk => (Dk = kk, () => {
-         if (Dk === kk) {
-           Dk = null;
-           for (const kk of fk) kk()
-         }
-       }),
-       bk = kk => (fk.add(kk), () => {
-         fk.delete(kk)
-       }),
-       rk = () => Dk,
-       Pk = () => null !== Dk;
-     let mk = null;
-     const Mk = kk => {
-         mk = kk
+     const QC = ["button", "a[href]", "input:not([type=hidden])", "textarea", "select", "[role=button]", "[role=tab]", "[role=switch]", "[role=checkbox]", "[role=option]", "[role=menuitem]", "[data-pad-focusable]", "[data-pad-tab]", ".Dropdown-control", ".Dropdown-option"].join(", … [truncated]
+       wC = (CC, zC) => {
+         if ("function" === typeof CC.checkVisibility) return !CC.checkVisibility({
+           visibilityProperty: !0,
+           checkVisibilityCSS: !0,
+           opacityProperty: zC,
+           checkOpacity: zC
+         });
+         const {
+           visibility: ZC
+         } = getComputedStyle(CC);
+         if ("hidden" === ZC || "collapse" === ZC) return !0;
+         if (!zC) return !1;
+         for (let QC = CC; QC; QC = QC.parentElement)
+           if ("0" === getComputedStyle(QC).opacity) return !0;
+         return !1
```

#### 56. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L763-L765` → after: `L3358-L3361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3358-L3361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L3358-L3361) · [Before (L763-L765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L763-L765)

```diff
-       Kk = () => {
-         const kk = mk;
-         return mk = null, kk
+       bC = CC => {
+         if (!CC.isConnected || wC(CC, !0)) return !1;
+         const zC = CC.getBoundingClientRect();
+         return zC.width > 0 && zC.height > 0
```

#### 57. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L767-L778` → after: `L3363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L3363) · [Before (L767-L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L767-L778)

```diff
-       xk = (kk, ek) => {
-         var ik, Dk;
-         return null !== (ik = null !== (Dk = kk.find((kk => kk.element === ek))) && void 0 !== Dk ? Dk : kk.find((kk => kk.element.contains(ek)))) && void 0 !== ik ? ik : null
-       }
-   },
-   8538: (kk, ek, ik) => {
-     ik.d(ek, {
-       e: () => Sk,
-       h: () => bk
-     });
-     var Dk = ik(60);
-     const fk = new WeakMap,
+       nC = CC => !!CC.matches(":disabled, [aria-disabled='true']") || "button" === CC.getAttribute("role") && "-1" === CC.getAttribute("tabindex"),
```

#### 58. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L780-L781` → after: `L3365-L3367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3365-L3367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L3365-L3367) · [Before (L780-L781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L780-L781)

```diff
-         var ek, ik;
-         return null !== (ek = null === (ik = fk.get(kk)) || void 0 === ik ? void 0 : ik.current) && void 0 !== ek ? ek : null
+         var zC;
+         if (CC.closest("[data-pad-ignore]")) return !0;
+         return !!(null === (zC = CC.parentElement) || void 0 === zC ? void 0 : zC.closest("[data-pad-focusable]"))
```

#### 59. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L783-L794` → after: `L3369-L3399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3369-L3399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L3369-L3399) · [Before (L783-L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L783-L794)

```diff
-       bk = (kk, ek) => {
-         const ik = (0, Dk.useRef)(ek);
-         ik.current = ek;
-         const Sk = (0, Dk.useRef)(null);
-         (0, Dk.useEffect)((() => {
-           const ek = kk.current,
-             Dk = Sk.current;
-           ek !== Dk && (Dk && fk.get(Dk) === ik && fk.delete(Dk), Sk.current = ek, ek && fk.set(ek, ik))
-         })), (0, Dk.useEffect)((() => () => {
-           const kk = Sk.current;
-           kk && fk.get(kk) === ik && fk.delete(kk), Sk.current = null
-         }), [])
+       oC = CC => {
+         const zC = CC.querySelectorAll(QC);
+         return CC.matches(QC) ? [CC, ...zC] : zC
+       },
+       qC = CC => {
+         const zC = [];
+         for (const ZC of oC(CC)) !fC(ZC) && bC(ZC) && zC.push(ZC);
+         return zC
+       },
+       FC = new WeakMap,
+       WC = CC => {
+         const zC = FC.get(CC);
+         if (zC && NC(zC, CC)) return !0;
+         for (const ZC of oC(CC))
+           if (!fC(ZC) && bC(ZC)) return FC.set(CC, ZC), !0;
+         return FC.delete(CC), !1
+ ... (15 more added lines; see GitHub link above)
```

#### 60. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L797` → after: `L3402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L3402) · [Before (L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L797)

```diff
-   8662: (kk, ek, ik) => {
+   8673: (CC, zC, ZC) => {
```

#### 61. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L799` → after: `L3404-L3410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3404-L3410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L3404-L3410) · [Before (L799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L799)

```diff
-       c: () => rk,
+       A: () => qC,
+       C: () => eC,
+       D: () => JC,
+       G: () => IC,
+       H: () => pC,
+       I: () => oC,
+       J: () => FC,
```

#### 62. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L801` → after: `L3412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L3412) · [Before (L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L801)

```diff
-       e: () => Kk,
+       g: () => vC,
```

#### 63. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L803-L804` → after: `L3414-L3419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3414-L3419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L3414-L3419) · [Before (L803-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L803-L804)

```diff
-       l: () => Pk,
-       m: () => nk
+       i: () => AC,
+       m: () => gC,
+       p: () => SC,
+       t: () => NC,
+       u: () => MC,
+       y: () => iC
```

#### 64. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L806-L812` → after: `L3421-L3504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3421-L3504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L3421-L3504) · [Before (L806-L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L806-L812)

```diff
-     var Dk = ik(26),
-       fk = ik(1969),
-       Sk = ik(1375),
-       bk = ik(1371);
-     const rk = kk => {
-         var ek, ik;
-         return (0, bk.d)() && null !== (ek = null === (ik = (0, Sk.h)()) || void 0 === ik ? void 0 : ik.getGlyphForNoaAction(kk)) && void 0 !== ek ? ek : null
+     var QC = ZC(28),
+       wC = ZC(1584),
+       bC = ZC(8682),
+       nC = ZC(8685),
+       fC = ZC(8691);
+     const oC = CC => (0, nC.k)(CC),
+       qC = CC => {
+         const zC = CC.getBoundingClientRect();
+         return {
+           x: zC.left + zC.width / 2,
+           y: zC.top + zC.height / 2
+         }
+       },
+       FC = (CC, zC, ZC) => ({
+         bubbles: !0,
+         cancelable: !0,
+ ... (68 more added lines; see GitHub link above)
```

#### 65. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L816-L817` → after: `L3507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L3507) · [Before (L816-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L816-L817)

```diff
-         var ek, ik;
-         return null !== (ek = null === (ik = (0, Sk.h)()) || void 0 === ik ? void 0 : ik.getPadGlyphIconName(kk)) && void 0 !== ek ? ek : `${Pk}xbox/${kk}`
+         QC.o.bp(bC.c, CC)
```

#### 66. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L821-L822` → after: `L3510-L3513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3510-L3513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L3510-L3513) · [Before (L821-L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L821-L822)

```diff
-         var ek, ik;
-         return Mk(kk) && null !== (ek = null === (ik = (0, Sk.h)()) || void 0 === ik ? void 0 : ik.getPadGlyphIconUrl(kk)) && void 0 !== ek ? ek : null
+         if (oC(CC)) return void pC(CC);
+         const zC = CC.hasAttribute("data-pad-focusable") ? CC.querySelector("a[href]") : null,
+           ZC = null !== zC && void 0 !== zC ? zC : CC;
+         gC(ZC, qC(ZC))
```

#### 67. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L824` → after: `L3515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L3515) · [Before (L824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L824)

```diff
-       xk = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", bk.b, fk.i, fk.e],
+       GC = ".Dropdown-root.is-open",
```

#### 68. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L826-L853` → after: `L3517-L3518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3517-L3518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L3517-L3518) · [Before (L826-L853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L826-L853)

```diff
-         const ek = xk.map((ek => Dk.j.subscribe(ek, kk)));
-         return () => {
-           for (const kk of ek) Dk.j.unsubscribe(kk)
-         }
-       }
-   },
-   8511: (kk, ek, ik) => {
-     ik.d(ek, {
-       e: () => fk,
-       f: () => Dk
-     });
-     const Dk = "controllerOpenKeyboard",
-       fk = "controllerKeyboardVisible"
-   },
-   8560: (kk, ek, ik) => {
-     ik.d(ek, {
- ... (12 more removed lines; see GitHub link above)
+         const zC = CC.querySelector(".Dropdown-control");
+         return PC(zC), zC
```

#### 69. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L855` → after: `L3520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L3520) · [Before (L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L855)

```diff
-       Sk = () => {
+       AC = CC => {
```

#### 70. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L857-L876` → after: `L3522-L3524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3522-L3524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L3522-L3524) · [Before (L857-L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L857-L876)

```diff
-         return null !== (kk = Dk) && void 0 !== kk && kk.canCycle() ? Dk.cycle : null
-       }
-   },
-   8647: (kk, ek, ik) => {
-     ik.d(ek, {
-       c: () => fk,
-       g: () => bk,
-       k: () => Sk,
-       n: () => Dk,
-       o: () => rk,
-       q: () => mk,
-       s: () => Mk
-     });
-     const Dk = "controllerActionWheelOpen",
-       fk = "controllerActionWheelAim",
-       Sk = "controllerActionWheelCommit",
- ... (4 more removed lines; see GitHub link above)
+         const ZC = null !== (zC = CC.closest(GC)) && void 0 !== zC ? zC : CC.querySelector(GC);
+         return ZC ? RC(ZC) : null
+       },
```

#### 71. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L878-L888` → after: `L3526-L3539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3526-L3539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L3526-L3539) · [Before (L878-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L878-L888)

```diff
-         Pk = kk
-       }
-   },
-   8645: (kk, ek, ik) => {
-     ik.d(ek, {
-       c: () => Sk,
-       g: () => fk
-     });
-     let Dk = 0;
-     const fk = () => {
-         Dk++
+         for (const zC of document.querySelectorAll(GC)) zC.contains(CC) || RC(zC)
+       },
+       JC = CC => null !== CC.closest("input[type=color], input[type=file], [data-pad-mouse-only]"),
+       IC = CC => {
+         const zC = CC ? document.elementFromPoint(CC.x, CC.y) : null;
+         return !(null === zC || void 0 === zC || !zC.closest("[data-pad-repeat]"))
+       },
+       iC = CC => {
+         var zC;
+         return null !== (zC = [...CC.querySelectorAll("[data-pad-back]")].find(fC.m)) && void 0 !== zC ? zC : null
+       },
+       vC = CC => {
+         const zC = iC(CC);
+         return !!zC && (PC(zC), !0)
```

#### 72. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L908` → after: `L3542-L3543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3542-L3543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L3542-L3543) · [Before (L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L908)

```diff
-         rk = kk
+         var zC, ZC, QC, wC;
+         return null !== (zC = null !== (ZC = null !== (QC = CC.getAttribute("data-pad-key")) && void 0 !== QC ? QC : CC.getAttribute("href")) && void 0 !== ZC ? ZC : null === (wC = CC.querySelector("a[href]")) || void 0 === wC ? void 0 : wC.getAttribute("href")) && void 0 !== zC  … [truncated]
```

#### 73. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L911` → after: `L3546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L3546) · [Before (L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L911)

```diff
-   8708: (kk, ek, ik) => {
+   8876: (CC, zC, ZC) => {
```

#### 74. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L914` → after: `L3549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L3549) · [Before (L914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L914)

```diff
-       e: () => Pk
+       f: () => oC
```

#### 75. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L916-L918` → after: `L3551-L3553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3551-L3553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L3551-L3553) · [Before (L916-L918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L916-L918)

```diff
-     var Dk = ik(22),
-       fk = ik(1302),
-       Sk = ik(99);
+     var QC = ZC(20),
+       wC = ZC(1275),
+       bC = ZC(77);
```

#### 76. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L973` → after: `L3608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L3608) · [Before (L973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L973)

```diff
-           fk = null !== ek && void 0 !== ek ? ek : Dk.pattern;
+           wC = null !== zC && void 0 !== zC ? zC : QC.pattern;
```

#### 77. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L976` → after: `L3611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L3611) · [Before (L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L976)

```diff
-         Sk - this.lastAnyAt < 40 && Dk.priority < this.playingPriority || Sk - (null !== (ik = this.lastAt.get(kk)) && void 0 !== ik ? ik : -1 / 0) < Dk.minGapMs || Sk < this.playingUntil && Dk.priority < this.playingPriority || (this.lastAt.set(kk, Sk), this.lastAnyAt = Sk, this … [truncated]
+         bC - this.lastAnyAt < 40 && QC.priority < this.playingPriority || bC - (null !== (ZC = this.lastAt.get(CC)) && void 0 !== ZC ? ZC : -1 / 0) < QC.minGapMs || bC < this.playingUntil && QC.priority < this.playingPriority || (this.lastAt.set(CC, bC), this.lastAnyAt = bC, this … [truncated]
```

#### 78. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L983` → after: `L3618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L3618) · [Before (L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L983)

```diff
-       enabled: () => rk() && Dk.b.get("isTouchScreen") && Dk.b.get("clientEscMenuOptions").vibration && !(0, fk.e)()
+       enabled: () => fC() && QC.b.get("isTouchScreen") && QC.b.get("clientEscMenuOptions").vibration && !(0, wC.g)()
```

#### 79. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L986-L1079` → after: `L3621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L3621) · [Before (L986-L1079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L986-L1079)

```diff
-   8607: (kk, ek, ik) => {
-     ik.d(ek, {
-       c: () => bk
-     });
-     var Dk = ik(8611),
-       fk = ik(594),
-       Sk = ik(131);
- 
-     function bk(kk) {
-       var ek, ik;
-       if ((0, fk.F)(kk)) return !0;
-       const bk = null !== (ek = null === (ik = Sk.p[Sk.t]) || void 0 === ik ? void 0 : ik.adConfig.showRewardedAds) && void 0 !== ek && ek;
-       for (const fk in kk) {
-         const ek = kk[fk];
-         if (null !== ek && void 0 !== ek && ek.items)
-           for (const kk in ek.items)
- ... (78 more removed lines; see GitHub link above)
+   8776: (CC, zC, ZC) => {
```

#### 80. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L1100` → after: `L3642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L3642) · [Before (L1100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L1100)

```diff
-       const fk = null !== (Dk = ik.excludedPlayers) && void 0 !== Dk ? Dk : [ek];
+       const wC = null !== (QC = ZC.excludedPlayers) && void 0 !== QC ? QC : [zC];
```

#### 81. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L1104-L1105` → after: `L3646-L3647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3646-L3647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L3646-L3647) · [Before (L1104-L1105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L1104-L1105)

```diff
-       c: () => Sk,
-       e: () => fk,
+       b: () => bC,
+       f: () => wC,
```

#### 82. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L1107` → after: `L3649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L3649) · [Before (L1107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L1107)

```diff
-       m: () => Dk
+       k: () => QC
```

#### 83. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L1109-L1110` → after: `L3651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R3651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L3651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/156.js#L3651) · [Before (L1109-L1110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/156.js#L1109-L1110)

```diff
-   },
-   8653: () => {}
+   }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/157.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/157.js` (17 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076)

#### 1. `bundles/bloxd.io/chunks/js/157.js` (Changed code · before: `L4-L5` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/157.js#L4-L6) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/157.js#L4-L5)

```diff
-   36151: (kk, ek, ik) => {
-     ik.d(ek, {
+   36490: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       B: () => GC,
```

#### 2. `bundles/bloxd.io/chunks/js/157.js` (Changed code · before: `L8` → after: `L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076) · [After (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/157.js#L9) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/157.js#L8)

```diff
-       i: () => wk,
+       j: () => pC,
```

#### 3. `bundles/bloxd.io/chunks/js/157.js` (Changed code · before: `L11-L12` → after: `L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076) · [After (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/157.js#L13) · [Before (L11-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/157.js#L11-L12)

```diff
-       t: () => lk,
-       u: () => Kk,
+       r: () => WC,
```

#### 4. `bundles/bloxd.io/chunks/js/157.js` (Changed code · before: `L14-L18` → after: `L15-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076) · [After (L15-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/157.js#L15-L18) · [Before (L14-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/157.js#L14-L18)

```diff
-       w: () => Uk,
-       x: () => pk
-     });
-     var Dk = ik(22),
-       fk = ik(26);
+       z: () => gC
+     });
+     var QC = ZC(20),
+       wC = ZC(28);
```

#### 5. `bundles/bloxd.io/chunks/js/157.js` (Changed code · before: `L25` → after: `L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076) · [After (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/157.js#L25) · [Before (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/157.js#L25)

```diff
-         return (null !== (ik = kk.order) && void 0 !== ik ? ik : 0) - (null !== (Dk = ek.order) && void 0 !== Dk ? Dk : 0)
+         return (null !== (ZC = CC.order) && void 0 !== ZC ? ZC : 0) - (null !== (QC = zC.order) && void 0 !== QC ? QC : 0)
```

#### 6. `bundles/bloxd.io/chunks/js/157.js` (Changed code · before: `L77-L84` → after: `L77-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076) · [After (L77-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/157.js#L77-L84) · [Before (L77-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/157.js#L77-L84)

```diff
-       return bk.set(kk.id, kk), fk.j.tm(Sk, rk(), !0), () => {
-         bk.get(kk.id) === kk && (bk.delete(kk.id), fk.j.tm(Sk, rk()))
-       }
-     }
-   },
-   36143: (kk, ek, ik) => {
-     ik.d(ek, {
-       c: () => rk,
+       return nC.set(CC.id, CC), wC.o.bp(bC, fC(), !0), () => {
+         nC.get(CC.id) === CC && (nC.delete(CC.id), wC.o.bp(bC, fC()))
+       }
+     }
+   },
+   36488: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       C: () => FC,
```

#### 7. `bundles/bloxd.io/chunks/js/157.js` (Changed code · before: `L87-L96` → after: `L87-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076R87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076) · [After (L87-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/157.js#L87-L96) · [Before (L87-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/157.js#L87-L96)

```diff
-       j: () => xk,
-       n: () => mk,
-       r: () => Hk,
-       v: () => nk,
-       z: () => Mk
-     });
-     var Dk = ik(22),
-       fk = ik(26),
-       Sk = ik(1273),
-       bk = ik(36151);
+       k: () => PC,
+       o: () => NC,
+       q: () => qC,
+       u: () => SC,
+       y: () => MC
+     });
+     var QC = ZC(20),
+       wC = ZC(28),
+       bC = ZC(1240),
+       nC = ZC(36490);
```

#### 8. `bundles/bloxd.io/chunks/js/157.js` (Changed code · before: `L109-L110` → after: `L109-L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076) · [After (L109-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/157.js#L109-L110) · [Before (L109-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/157.js#L109-L110)

```diff
-       return Pk = ik, fk.j.tm(rk, Pk, !0), () => {
-         Pk === ik && (Pk = null, Uk = !1, wk(), fk.j.tm(rk, null))
+       return oC = ZC, wC.o.bp(fC, oC, !0), () => {
+         oC === ZC && (oC = null, gC = !1, pC(), wC.o.bp(fC, null))
```

#### 9. `bundles/bloxd.io/chunks/js/157.js` (Changed code · before: `L128` → after: `L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076) · [After (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/157.js#L128) · [Before (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/157.js#L128)

```diff
-       "clientGame" !== kk && (Uk = "inventory" === kk), (0, bk.p)() || (0, bk.i)(), (0, Sk.s)(Sk.c), Dk.b.set({
+       "clientGame" !== CC && (gC = "inventory" === CC), (0, nC.o)() || (0, nC.j)(), (0, bC.u)(bC.e), QC.b.set({
```

#### 10. `bundles/bloxd.io/chunks/js/157.js` (Changed code · before: `L145-L154` → after: `L145-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076) · [After (L145-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/157.js#L145-L154) · [Before (L145-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/157.js#L145-L154)

```diff
-       }), kk || (0, bk.i)(), Uk = !1
-     }
-   },
-   8607: (kk, ek, ik) => {
-     ik.d(ek, {
-       c: () => bk
-     });
-     var Dk = ik(8611),
-       fk = ik(594),
-       Sk = ik(131);
+       }), CC || (0, nC.j)(), gC = !1
+     }
+   },
+   8774: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => nC
+     });
+     var QC = ZC(8776),
+       wC = ZC(600),
+       bC = ZC(113);
```

#### 11. `bundles/bloxd.io/chunks/js/157.js` (Changed code · before: `L158-L159` → after: `L158-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076R158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076) · [After (L158-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/157.js#L158-L159) · [Before (L158-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/157.js#L158-L159)

```diff
-       if ((0, fk.F)(kk)) return !0;
-       const bk = null !== (ek = null === (ik = Sk.p[Sk.t]) || void 0 === ik ? void 0 : ik.adConfig.showRewardedAds) && void 0 !== ek && ek;
+       if ((0, wC.H)(CC)) return !0;
+       const nC = null !== (zC = null === (ZC = bC.s[bC.y]) || void 0 === ZC ? void 0 : ZC.adConfig.showRewardedAds) && void 0 !== zC && zC;
```

#### 12. `bundles/bloxd.io/chunks/js/157.js` (Changed code · before: `L164` → after: `L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076) · [After (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/157.js#L164) · [Before (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/157.js#L164)

```diff
-             if ((0, Dk.m)(ek.items[kk], bk)) return !1
+             if ((0, QC.k)(zC.items[CC], nC)) return !1
```

#### 13. `bundles/bloxd.io/chunks/js/157.js` (Changed code · before: `L169` → after: `L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076) · [After (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/157.js#L169) · [Before (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/157.js#L169)

```diff
-   59985: (kk, ek, ik) => {
+   60264: (CC, zC, ZC) => {
```

#### 14. `bundles/bloxd.io/chunks/js/157.js` (Changed code · before: `L171-L177` → after: `L171-L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076R171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076) · [After (L171-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/157.js#L171-L177) · [Before (L171-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/157.js#L171-L177)

```diff
-       getClientGameMapKey: () => Dk.j,
-       shopIsEmpty: () => fk.c
-     });
-     var Dk = ik(36143),
-       fk = ik(8607)
-   },
-   8611: (kk, ek, ik) => {
+       getClientGameMapKey: () => QC.o,
+       shopIsEmpty: () => wC.d
+     });
+     var QC = ZC(36488),
+       wC = ZC(8774)
+   },
+   8776: (CC, zC, ZC) => {
```

#### 15. `bundles/bloxd.io/chunks/js/157.js` (Changed code · before: `L198` → after: `L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076) · [After (L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/157.js#L198) · [Before (L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/157.js#L198)

```diff
-       const fk = null !== (Dk = ik.excludedPlayers) && void 0 !== Dk ? Dk : [ek];
+       const wC = null !== (QC = ZC.excludedPlayers) && void 0 !== QC ? QC : [zC];
```

#### 16. `bundles/bloxd.io/chunks/js/157.js` (Changed code · before: `L202-L203` → after: `L202-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076) · [After (L202-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/157.js#L202-L203) · [Before (L202-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/157.js#L202-L203)

```diff
-       c: () => Sk,
-       e: () => fk,
+       b: () => bC,
+       f: () => wC,
```

#### 17. `bundles/bloxd.io/chunks/js/157.js` (Changed code · before: `L205` → after: `L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076) · [After (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/157.js#L205) · [Before (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/157.js#L205)

```diff
-       m: () => Dk
+       k: () => QC
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/158.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/158.js` (65 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056)

#### 1. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L4-L17` → after: `L4-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L4-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/158.js#L4-L10) · [Before (L4-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/158.js#L4-L17)

```diff
-   38375: (kk, ek, ik) => {
-     var Dk = {
-       "./cape_cow_cream.png": 27576,
-       "./cape_cow_normal.png": 27581,
-       "./cape_creator_level1.png": 27584,
-       "./cape_creator_level2.png": 27589,
-       "./cape_creator_level3.png": 27596,
-       "./cape_none.png": 27598,
-       "./cape_pig.png": 27607,
-       "./cape_sheep.png": 27616,
-       "./cape_super.png": 27625,
-       "./cape_super_inverted.png": 27629,
-       "./cape_youtuber.png": 27632
-     };
+   38946: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => fC,
+       d: () => bC
+     });
+     var QC = ZC(4036);
+     let wC = null;
```

#### 2. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L20-L21` → after: `L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/158.js#L13) · [Before (L20-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/158.js#L20-L21)

```diff
-       var ek = Sk(kk);
-       return ik(ek)
+       return null !== wC && CC === wC
```

#### 3. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L24-L29` → after: `L16-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L16-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/158.js#L16-L17) · [Before (L24-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/158.js#L24-L29)

```diff
-     function Sk(kk) {
-       if (!ik.o(Dk, kk)) {
-         var ek = new Error("Cannot find module '" + kk + "'");
-         throw ek.code = "MODULE_NOT_FOUND", ek
-       }
-       return Dk[kk]
+     function nC() {
+       this.rD = !1, this.stopPropagation = !1, this.jD = !1, this.disabled = !1
```

#### 4. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L60` → after: `L21-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L21-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/158.js#L21-L37) · [Before (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/158.js#L60)

```diff
-         this.pose = kk, this.nodes = void 0, this.nodes = kk.boneNames.map((kk => ek.get(kk)))
+         this.version = "0.7.0";
+         var ZC = Object.assign({}, new nC, zC || {});
+         this.element = CC || document, this.rD = !!ZC.rD, this.stopPropagation = !!ZC.stopPropagation, this.jD = !!ZC.jD, this.disabled = !!ZC.disabled, this.filterEvents = (CC, zC) => !0, this.ignoreEvent = CC => !1, this.down = new QC.EventEmitter, this.up = new QC.EventEmitter … [truncated]
+           dx: 0,
+           dy: 0,
+           OCC: 0,
+           kCC: 0,
+           VCC: 0
+         }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
+           lastX: 0,
+           lastY: 0,
+           currID: null
+         }, "loading" !== document.readyState ? qC(this) : document.addEventListener("DOMContentLoaded", (CC => {
+           qC(this)
+         }), {
+           once: !0
+ ... (1 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L62-L69` → after: `L39-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L39-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/158.js#L39-L58) · [Before (L62-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/158.js#L62-L69)

```diff
-       write(kk) {
-         this.pose.pose(kk);
-         const {
-           rotations: ek
-         } = this.pose;
-         for (let ik = 0; ik < this.nodes.length; ik++) {
-           const kk = 4 * ik;
-           this.nodes[ik].rotationQuaternion.set(ek[kk], ek[kk + 1], ek[kk + 2], ek[kk + 3])
+       bind(CC) {
+         for (var zC = arguments.length, ZC = new Array(zC > 1 ? zC - 1 : 0), QC = 1; QC < zC; QC++) ZC[QC - 1] = arguments[QC];
+         ZC.forEach((zC => {
+           var ZC = this._keyBindmap[zC] || [];
+           ZC.includes(CC) || (ZC.push(CC), this._keyBindmap[zC] = ZC)
+         })), this.state[CC] = !!this.state[CC], this.pressCount[CC] = this.pressCount[CC] || 0, this.releaseCount[CC] = this.releaseCount[CC] || 0
+       }
+       unbind(CC) {
+         for (var zC in this._keyBindmap) {
+           var ZC = this._keyBindmap[zC],
+             QC = ZC.indexOf(CC);
+           QC > -1 && ZC.splice(QC, 1)
+         }
+       }
+       getBindings() {
+         var CC = {};
+ ... (4 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L75-L76` → after: `L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/158.js#L68) · [Before (L75-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/158.js#L75-L76)

```diff
-       kk.unfreezeWorldMatrix();
-       for (const ek of kk.getChildren()) Ak(ek)
+       for (var zC in CC) CC[zC] = 0
```

#### 7. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L80-L81` → after: `L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/158.js#L85) · [Before (L80-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/158.js#L80-L81)

```diff
-       kk.isVisible = ek;
-       for (const ik of kk.getChildMeshes()) ik.isVisible = ek
+       zC.preventDefault(), gC(zC)
```

#### 8. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L83-L160` → after: `L87-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L87-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/158.js#L87-L96) · [Before (L83-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/158.js#L83-L160)

```diff
-     class sk {
-       constructor(kk, ek, ik) {
-         this.bw = kk, this.thinInstMgr = ek, this.Yu = ik, this.modelCache = {}, this.attachmentsByType = {}, this.shownBones = [], this.cosmeticNames = {}
-       }
-       loadModel(kk, ek, ik) {
-         const Dk = (0, Yk.g)(kk, ek);
-         return Dk in this.modelCache || (this.modelCache[Dk] = (async () => {
-           try {
-             const Dk = await (0, Yk.j)(kk, this.bw),
-               fk = new Map;
-             for (const kk of Dk.getNodes()) fk.set(kk.name, kk);
-             const Sk = (0, Yk.d)(null !== ek && void 0 !== ek ? ek : kk, this.bw);
-             (0, Yk.n)(Dk, Sk, {
-               keepTransforms: void 0 !== ik,
-               onProcessedMesh: kk => {
-                 (0, Yk.o)(kk), this.bw.Zik(kk, !1), kk.isVisible = !1
- ... (62 more removed lines; see GitHub link above)
+ 
+     function gC(CC) {
+       let zC = !1;
+       for (let ZC = 0; ZC < CC.touches.length; ++ZC)
+         if (CC.touches[ZC].identifier === NC) {
+           zC = !0;
+           break
+         } if (!zC) {
+         const zC = CC.changedTouches[0];
+         FC = zC.clientX, WC = zC.clientY, NC = zC.identifier
```

#### 9. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L178` → after: `L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/158.js#L101) · [Before (L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/158.js#L178)

```diff
-       Wk.width = kk, Wk.height = ek, Fk.resize()
+       for (var ZC = zC.changedTouches, QC = 0; QC < ZC.length; ++QC) ZC[QC].identifier === NC && (NC = null)
```

#### 10. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L180-L202` → after: `L103-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L103-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/158.js#L103-L108) · [Before (L180-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/158.js#L180-L202)

```diff
-     let ck = 0;
-     class Tk {
-       constructor(kk, ek) {
-         this.framing = ek, this.ready = ak, this.dev = {
-           canvas: () => Wk,
-           isolateHead(kk) {
-             const ek = Qk.getNodeNames(vk);
-             for (let ik = 0; ik < ek.length; ik++) "HeadMesh" !== ek[ik] && "__root__" !== ek[ik] && "TorsoNode" !== ek[ik] && Qk.setNodeEnabled(vk, ik, !1);
-             if (kk) {
-               const kk = Qk.getNamedNode(vk, "HeadMesh");
-               Qk.setNodeDisableColorWrite(vk, kk, !0, (kk => {
-                 const ek = new Hk.StandardMaterial(`${kk.name}_depthOnly`, kk.XF());
-                 return ek.disableColorWrite = !0, ek
-               }))
-             }
-             Qk.setPosition(vk, 0, -12, 0)
- ... (7 more removed lines; see GitHub link above)
+ 
+     function pC(CC, zC, ZC) {
+       if (!CC.ignoreEvent(ZC)) try {
+         iC(CC, ZC), zC && ZC.isTrusted && !ZC.repeat && CC._keyStates[ZC.code] && vC(CC, ZC.code)
+       } finally {
+         eC(ZC.code, zC, CC, ZC)
```

#### 11. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L204-L205` → after: `L110-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L110-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/158.js#L110-L126) · [Before (L204-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/158.js#L204-L205)

```diff
-       isReady() {
-         return !!Ik
+     }
+ 
+     function PC(CC, zC, ZC) {
+       if (!CC.ignoreEvent(ZC)) try {
+         iC(CC, ZC)
+       } finally {
+         ! function(CC, zC, ZC) {
+           if ("pointerId" in ZC)
+             if (zC) {
+               if (null !== CC._touches.currID) return;
+               CC._touches.currID = ZC.pointerId
+             } else {
+               if (CC._touches.currID !== ZC.pointerId) return;
+               CC._touches.currID = null
+             } var QC = "button" in ZC ? ZC.button + 1 : 1;
+           eC("Mouse" + QC, zC, CC, ZC)
+ ... (1 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L207-L216` → after: `L128-L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L128-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/158.js#L128-L143) · [Before (L207-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/158.js#L207-L216)

```diff
-       setCosmetic(kk, ek) {
-         ! function(kk, ek) {
-           if (!Ik) return;
-           const bk = (0, fk.e)();
-           bk.VV(!1), Dk.e.Player.meshApi.updatePlayerCosmetic(bk.Qq, vk, kk, ek, !0), "cape" === kk && (ek === Sk.f ? zk.bV(!1) : (zk.bV(!0), zk.material.diffuseTexture = new wk.d(ik(38375)(`./cape_${ek}.png`), zk.XF(), {
-             invertY: !1,
-             samplingMode: wk.d.NEAREST_NEAREST_MIPLINEAR
-           })));
-           Xk[kk] = hk.update(kk, ek)
-         }(kk, ek)
+     }
+ 
+     function GC(CC, zC) {
+       var ZC = zC.movementX || zC.mozMovementX || 0,
+         QC = zC.movementY || zC.mozMovementY || 0;
+       if (zC.touches && 0 === (ZC | QC)) {
+         var wC = function(CC) {
+           gC(CC);
+           for (let zC = 0; zC < CC.changedTouches.length; ++zC)
+             if (CC.changedTouches[zC].identifier == NC) {
+               const ZC = CC.changedTouches[zC],
+                 QC = [ZC.clientX - FC, ZC.clientY - WC];
+               return FC = ZC.clientX, WC = ZC.clientY, QC
+             } return console.error(`Did not find touch id ${NC}`), [0, 0]
+         }(zC);
+         ZC = wC[0], QC = wC[1]
```

#### 13. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L218-L222` → after: `L145-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L145-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/158.js#L145-L159) · [Before (L218-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/158.js#L218-L222)

```diff
-       playEmote(kk) {
-         if (!Ek) return;
-         if (!kk) return void Ek.stopAnimation(Pk.g.Emote);
-         const ek = (0, bk.g)((0, rk.g)(kk).animation);
-         Ek.startAnimation(ek, Pk.g.Emote, 0, rk.d)
+       CC.Fy.dx += ZC, CC.Fy.dy += QC
+     }
+ 
+     function RC(CC, zC) {
+       iC(CC, zC);
+       var ZC = 1;
+       switch (zC.deltaMode) {
+         case 0:
+           ZC = 1;
+           break;
+         case 1:
+           ZC = 12;
+           break;
+         case 2:
+           ZC = CC.element.clientHeight || window.innerHeight
```

#### 14. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L224-L232` → after: `L161-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L161-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/158.js#L161-L188) · [Before (L224-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/158.js#L224-L232)

```diff
-       async untilDrawn(kk) {
-         if (await tk(), "cape" === kk && zk) {
-           const kk = zk.material,
-             ek = null === kk || void 0 === kk ? void 0 : kk.diffuseTexture;
-           ek && !ek.isReady() && (await new Promise((kk => {
-             ek.onLoadObservable.addOnce((() => {
-               kk()
-             }))
-           })), await tk())
+       CC.Fy.OCC += (zC.deltaX || 0) * ZC, CC.Fy.kCC += (zC.deltaY || 0) * ZC, CC.Fy.VCC += (zC.deltaZ || 0) * ZC
+     }
+ 
+     function AC(CC, zC) {
+       if (!CC.jD) return zC.preventDefault(), !1
+     }
+     var xC = {
+       AltLeft: "altKey",
+       AltRight: "altKey",
+       ControlLeft: "ctrlKey",
+       ControlRight: "ctrlKey",
+       ShiftLeft: "shiftKey",
+       ShiftRight: "shiftKey",
+       MetaLeft: "metaKey",
+       MetaRight: "metaKey"
+     };
+ ... (12 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L234-L250` → after: `L190-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L190-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/158.js#L190-L213) · [Before (L234-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/158.js#L234-L250)

```diff
-         Xk[kk] && (await Xk[kk], await tk()), await qk.whenReadyAsync(), await new Promise((kk => {
-           qk.onAfterRenderObservable.addOnce((() => {
-             kk()
-           }))
-         }))
-       }
-       setOrbit(kk) {
-         Zk(kk)
-       }
-       resetCamera() {
-         uk.inertialAlphaOffset = 0, uk.inertialBetaOffset = 0, uk.inertialRadiusOffset = 0, Zk(Vk.d[this.framing])
-       }
-       resize(kk, ek) {
-         Bk(kk, ek)
-       }
-       close() {
- ... (1 more removed lines; see GitHub link above)
+       }() && (clearTimeout(CC._blurRelease), CC._blurRelease = setTimeout((function() {
+         if (!document.hasFocus())
+           for (var zC in CC._modifiersHeldThroughBlur = {}, CC._keyStates) CC._keyStates[zC] && !/^Mouse\d/.test(zC) && vC(CC, zC)
+       }), 0))
+     }
+ 
+     function iC(CC, zC) {
+       var ZC = CC._modifiersHeldThroughBlur;
+       if (ZC && zC.isTrusted && document.hasFocus())
+         for (var QC in ZC) delete ZC[QC], CC._keyStates[QC] && QC !== zC.code && (JC(zC, QC) || vC(CC, QC))
+     }
+ 
+     function vC(CC, zC) {
+       const ZC = {
+           code: zC,
+           preventDefault: () => {},
+ ... (8 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L254-L261` → after: `L217-L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L217-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/158.js#L217-L233) · [Before (L254-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/158.js#L254-L261)

```diff
-     function Zk(kk) {
-       let {
-         yaw: ek,
-         pitch: ik,
-         radius: Dk,
-         target: fk
-       } = kk;
-       uk.alpha = ek, uk.beta = ik, Dk && (uk.radius = Dk), fk && uk.target.set(fk[0], fk[1], fk[2])
+     function eC(CC, zC, ZC, QC) {
+       var wC = ZC._keyBindmap[CC];
+       wC && (hC(ZC._keyStates[CC], zC) && (ZC._keyStates[CC] = zC, wC.forEach((CC => {
+         (!ZC.filterEvents || ZC.filterEvents(QC, CC)) && function(CC, zC, ZC, QC) {
+           var wC = zC ? ZC.pressCount : ZC.releaseCount;
+           wC[CC] = (wC[CC] || 0) + 1;
+           var bC = ZC._bindPressCount[CC] || 0;
+           (bC += zC ? 1 : -1) < 0 && (bC = 0);
+           ZC._bindPressCount[CC] = bC;
+           var nC = ZC.state[CC];
+           if (hC(nC, bC)) {
+             ZC.state[CC] = bC > 0;
+             var fC = zC ? ZC.down : ZC.up;
+             ZC.disabled || fC.emit(CC, QC)
+           }
+         }(CC, zC, ZC, QC)
+ ... (1 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L265-L291` → after: `L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/158.js#L237) · [Before (L265-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/158.js#L265-L291)

```diff
-       return kk.appendChild(Wk), Fk || function() {
-         Fk = new mk.d(Wk, !0, {
-           preserveDrawingBuffer: !0
-         });
-         const kk = (0, fk.e)();
-         Fk.Xik = kk.yH.engine.Xik, qk = new Mk.d(Fk), qk.clearColor = new Uk.e(0, 0, 0, 0), qk.ambientColor = new Uk.Color3(1, 1, 1), uk = new Kk.c("gw", 0, 0, 1, xk.eH.Zero(), qk), uk.attachControl(Wk, !0), uk.panningSensibility = 0, ak = (0, Dk.u)("Player", qk, !0).then((ek =>  … [truncated]
-           Ik = ek.meshApi, zk = ek.capeMesh, Qk = kk.yH.ku;
-           const ik = 8.33;
-           vk = (0, Dk.m)("Player", ik, !0, !0), Qk.setPosition(vk, 0, -8.33, 0);
-           const fk = Qk.getNamedNode(vk, "BodyMesh");
-           Qk.attachTransformNode(zk, vk, fk), Qk.set(vk, "aOpacity", 1), Qk.oq(vk, "aOpacity", 1), hk = new sk(qk, Qk, vk), Ek = new lk.AnimatorState, Ek.Lx = kk, Ek.thinInstMgr = Qk, Ek.Yu = vk, Ek.xik = Qk.Bik(vk, 0), Ek.modelLifeformType = "Player", Ek.nodeNameAliases = (0, dk … [truncated]
-           const Sk = zk.hq().boundingBox;
-           zk.position.y = ((24 - Sk.maximum.y + Sk.minimum.y) / 2 - 1 / 32) / ik, zk.position.z = -1 / ik, zk.rotationQuaternion = null;
-           const bk = Math.PI / 18,
-             rk = Sk.maximum.y / ik;
-           zk.rotation.x = bk;
- ... (11 more removed lines; see GitHub link above)
+       return CC ? !zC : zC
```

#### 18. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L294` → after: `L240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/158.js#L240) · [Before (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/158.js#L294)

```diff
-   38371: (kk, ek, ik) => {
+   36552: (CC, zC, ZC) => {
```

#### 19. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L296` → after: `L242-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L242-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/158.js#L242-L243) · [Before (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/158.js#L296)

```diff
-       d: () => xk
+       c: () => SC,
+       e: () => pC
```

#### 20. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L298-L302` → after: `L245-L253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L245-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/158.js#L245-L253) · [Before (L298-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/158.js#L298-L302)

```diff
-     var Dk = ik(36764),
-       fk = ik(36781),
-       Sk = ik(37037),
-       bk = ik(36789),
-       rk = ik(36773);
+     var QC = ZC(48),
+       wC = ZC(1383),
+       bC = ZC(1877),
+       nC = ZC(36508),
+       fC = ZC(600),
+       oC = ZC(1002),
+       qC = ZC.n(oC),
+       FC = ZC(1056);
+     const WC = [NC()];
```

#### 21. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L304-L315` → after: `L255-L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L255-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/158.js#L255-L262) · [Before (L304-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/158.js#L304-L315)

```diff
-     function Pk(kk) {
-       return `\n\t\t\t\t${(0,rk.A)(kk,"mat2","rotate",[{name:"ang",type:"float"}],`\
-       n\ t\ t\ t\ t\ t$ {
-         (0, rk.F)(kk, "float", "s", "sin(ang)")
-       }\
-       n\ t\ t\ t\ t\ t$ {
-         (0, rk.F)(kk, "float", "c", "cos(ang)")
-       }\
-       n\ t\ t\ t\ t\ treturn $ {
-         (0, rk.n)(kk, "mat2", "c", "s", "-s", "c")
-       };\
-       n\ t\ t\ t\ t`)}\n\t\t\t`
+     function NC() {
+       return {
+         source: null,
+         direction: null,
+         FX: null,
+         timeout: void 0,
+         writtenAngle: null
+       }
```

#### 22. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L318-L322` → after: `L265-L266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L265-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/158.js#L265-L266) · [Before (L318-L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/158.js#L318-L322)

```diff
-     function mk(kk, ek) {
-       let ik = (0, rk.Hb)(kk, "skele" + (ek - 1));
-       for (let fk = ek - 2; fk >= 0; fk--) ik = (0, rk.vb)(kk, `boneIdx == ${fk}`, (0, rk.Hb)(kk, `skele${fk}`), ik);
-       const Dk = "bone.yz + rotate(bone.x) * pivot - pivot";
-       return `\n\t\t\t\t${(0,rk.F)(kk,"int","boneIdx",(0,rk.Ab)(kk,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,rk.F)(kk,"vec3","bone",ik)}\n\t\t\t\t${(0,rk.F)(kk,"vec2","pivot",(0,rk.n)(kk,"vec2","0.0",`${(0,rk.Rb)(kk,"position")}.z`))}\n\t\t\t\t${(0,rk.$)(kk)?`positi … [truncated]
+     function MC(CC) {
+       return WC.find((zC => null !== zC.source && zC.source === CC))
```

#### 23. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L326` → after: `L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/158.js#L270) · [Before (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/158.js#L326)

```diff
-       return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,rk.n)(kk,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
+       clearTimeout(CC.timeout), CC.source = null, CC.direction = null, CC.writtenAngle = null, CC.FX && (CC.FX.style.rotate = "")
```

#### 24. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L328-L366` → after: `L272-L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L272-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/158.js#L272-L306) · [Before (L328-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/158.js#L328-L366)

```diff
-     const Kk = {
-         x: 0,
-         y: 0,
-         z: 0,
-         zek(kk, ek) {
-           return this.x = kk[ek], this.y = kk[ek + 1], this.z = kk[ek + 2], this
-         }
-       },
-       xk = {
-         name: "Cape",
-         className: "CapeMaterialPlugin",
-         priority: 200,
-         defines: (kk, ek) => ({
-           ...(0, Dk.e)("CAPE"),
-           BLOXD_CAPE_BONES: `${kk}`,
-           BLOXD_CAPE_MAX_Y: (0, fk.rb)(ek)
- ... (23 more removed lines; see GitHub link above)
+     const SC = (0, QC.memo)((function() {
+       const [, CC] = (0, QC.useReducer)((CC => CC + 1), 0);
+       return (0, wC.c)("damagedByOtherPlayer", (zC => {
+         let {
+           UC: ZC,
+           direction: QC
+         } = zC;
+         const wC = ZC || "nonDirectional",
+           bC = function(CC) {
+             var zC;
+             const ZC = null !== (zC = MC(CC)) && void 0 !== zC ? zC : WC.find((CC => null === CC.source));
+             if (ZC) return ZC;
+             const QC = {
+               source: null,
+               direction: null,
+               FX: null,
+ ... (19 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L368-L369` → after: `L308-L328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L308-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/158.js#L308-L328) · [Before (L368-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/158.js#L368-L369)

```diff
-       };
-     (0, bk.l)(xk)
+       }), []), (0, FC.jsx)("div", {
+         className: "DirectionalDamage",
+         children: WC.map(((CC, zC) => (0, FC.jsx)("div", {
+           ref: zC => {
+             CC.FX = zC
+           },
+           className: qC()("DamageIndicator", {
+             DamageIndicatorFullCircle: (0, fC.H)(CC.direction),
+             DamageIndicatorIdle: null === CC.source
+           })
+         }, zC)))
+       })
+     }));
+ 
+     function pC(CC) {
+       for (const zC of WC) {
+ ... (5 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L371` → after: `L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/158.js#L330) · [Before (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/158.js#L371)

```diff
-   38279: (kk, ek, ik) => {
+   36375: (CC, zC, ZC) => {
```

#### 27. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L373-L374` → after: `L332-L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L332-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/158.js#L332-L333) · [Before (L373-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/158.js#L373-L374)

```diff
-       d: () => Mk,
-       e: () => Kk
+       c: () => wC,
+       f: () => bC
```

#### 28. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L376-L405` → after: `L335-L402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L335-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/158.js#L335-L402) · [Before (L376-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/158.js#L376-L405)

```diff
-     var Dk = ik(36764),
-       fk = ik(37037),
-       Sk = ik(36773),
-       bk = ik(36789);
-     const rk = "bloxdTextLodBias",
-       Pk = [{
-         name: rk,
-         type: "float"
-       }],
-       mk = "bloxdTextSample",
-       Mk = {
-         planes: -.5,
-         boards: -.5
-       },
-       Kk = {
-         name: "TextSampler",
- ... (14 more removed lines; see GitHub link above)
+     let QC = !1;
+ 
+     function wC() {
+       return QC
+     }
+ 
+     function bC(CC) {
+       return QC !== CC && (QC = CC, !0)
+     }
+   },
+   34107: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => bC,
+       h: () => wC
+     });
+     var QC = ZC(20);
+ ... (52 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L407-L408` → after: `L404-L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L404-L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/158.js#L404-L422) · [Before (L407-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/158.js#L407-L408)

```diff
-             CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${ik} {\n\t\t\t\t\t${(0,Sk.F)(ek,"vec4","texel",Dk)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,Sk … [truncated]
-             [(0, Sk.I)(ek)]: `baseColor = ${bk};`
+             update: (CC, wC, nC, fC) => {
+               CC.camera.kU !== bC && (CC.camera.kU = bC), QC = !0, zC = (0, MC.p)(ZC, wC, nC, fC, performance.now())
+             },
+             release: () => {
+               QC = !1, zC = gC, ZC.reset()
+             },
+             uninstall: CC => {
+               CC.camera.kU === bC && (CC.camera.kU = null)
+             }
+           }
+         })();
+         return {
+           update: (zC, ZC, QC) => {
+             CC.update((0, FC.e)(), zC, ZC, QC)
+           },
+           release: CC.release,
+ ... (3 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L412-L436` → after: `L426-L531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L426-L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/158.js#L426-L531) · [Before (L412-L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/158.js#L412-L436)

```diff
-     (0, bk.l)(Kk)
-   },
-   40705: (kk, ek, ik) => {
-     ik.r(ek), ik.d(ek, {
-       CapeMaterialPlugin: () => Yk,
-       HueTintMaterialPlugin: () => Lk,
-       LifeformMaterialPlugin: () => Ck,
-       OverlayMaterialPlugin: () => Ak
-     });
-     var Dk = ik(40707),
-       fk = ik(37599);
-     class Sk extends((0, Dk.g)(fk.e)) {}(0, Dk.j)(fk.e, Sk);
-     var bk = ik(36761);
-     class rk extends((0, Dk.g)(bk.f)) {}(0, Dk.j)(bk.f, rk);
-     var Pk = ik(37451);
-     class mk extends((0, Dk.g)(Pk.h)) {}(0, Dk.j)(Pk.h, mk);
- ... (9 more removed lines; see GitHub link above)
+     var AC = ZC(40405);
+     ZC(37523), ZC(8746);
+     ZC(8757).e;
+     const xC = () => {
+       const CC = (0, AC.b)((() => {
+           const CC = {
+             x: 0,
+             y: 0,
+             magnitude: 0,
+             headingOffset: 0,
+             jumpHeld: !1,
+             jumpPressedSinceTick: !1,
+             crouchHeld: !1,
+             running: !1,
+             sprintHeld: !1
+           };
+ ... (90 more added lines; see GitHub link above)
```

#### 31. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L438-L451` → after: `L533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/158.js#L533) · [Before (L438-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/158.js#L438-L451)

```diff
-     }(0, Dk.j)(xk.e, nk), (0, xk.h)({
-       disableUnusedSpecularTerm: Dk.d,
-       isLightingDisabled: kk => kk instanceof Kk.StandardMaterial && kk.disableLighting
-     });
-     var Uk = ik(38279);
-     class Hk extends((0, Dk.g)(Uk.e)) {}(0, Dk.j)(Uk.e, Hk);
-     var wk = ik(38371),
-       lk = ik(36883),
-       pk = ik(37717),
-       yk = ik(36826);
-     class Yk extends((0, Dk.g)(wk.d)) {}(0, Dk.j)(wk.d, Yk);
-     class Lk extends((0, Dk.g)(lk.c)) {}(0, Dk.j)(lk.c, Lk);
-     class Ck extends((0, Dk.g)(pk.o)) {}(0, Dk.j)(pk.o, Ck);
-     class Ak extends((0, Dk.g)(yk.d)) {}(0, Dk.j)(yk.d, Ak)
+     }
```

#### 32. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L453` → after: `L535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/158.js#L535) · [Before (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/158.js#L453)

```diff
-   40707: (kk, ek, ik) => {
+   36490: (CC, zC, ZC) => {
```

#### 33. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L455` → after: `L537-L538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L537-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/158.js#L537-L538) · [Before (L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/158.js#L455)

```diff
-       d: () => Xk,
+       B: () => GC,
+       c: () => bC,
```

#### 34. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L457` → after: `L540-L546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L540-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/158.js#L540-L546) · [Before (L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/158.js#L457)

```diff
-       j: () => gk
+       j: () => pC,
+       m: () => fC,
+       o: () => NC,
+       p: () => PC,
+       r: () => WC,
+       v: () => RC,
+       z: () => gC
```

#### 35. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L459-L472` → after: `L548-L551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L548-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/158.js#L548-L551) · [Before (L459-L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/158.js#L459-L472)

```diff
-     var Dk = ik(39829),
-       fk = ik(40711),
-       Sk = ik(40738),
-       bk = ik(40720),
-       rk = ik(37416),
-       Pk = ik(37430),
-       mk = ik(37435),
-       Mk = ik(37441),
-       Kk = ik(36812),
-       xk = ik(36821),
-       nk = ik(40724),
-       Uk = ik(36789),
-       Hk = ik(36798),
-       wk = ik(36773);
+     var QC = ZC(20),
+       wC = ZC(28);
+     const bC = "clientGameInventoryButtonsChanged",
+       nC = new Map;
```

#### 36. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L474-L479` → after: `L553-L557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L553-L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/158.js#L553-L557) · [Before (L474-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/158.js#L474-L479)

```diff
-     function lk(kk, ek) {
-       return Object.assign((function(kk, ik, Dk, fk) {
-         return ek(this.featureState, kk, ik, Dk, fk)
-       }), {
-         sU: kk
-       })
+     function fC() {
+       return [...nC.values()].sort(((CC, zC) => {
+         var ZC, QC;
+         return (null !== (ZC = CC.order) && void 0 !== ZC ? ZC : 0) - (null !== (QC = zC.order) && void 0 !== QC ? QC : 0)
+       }))
```

#### 37. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L483-L507` → after: `L562-L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L562-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/158.js#L562-L571) · [Before (L483-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/158.js#L483-L507)

```diff
-       const ek = class extends nk.c {
-           constructor(ek, ik) {
-             const Dk = (0, Hk.Y)(ek),
-               fk = Dk && (0, Hk.w)(Dk, kk.name);
-             for (var Sk = arguments.length, bk = new Array(Sk > 2 ? Sk - 2 : 0), rk = 2; rk < Sk; rk++) bk[rk - 2] = arguments[rk];
-             super(ek, kk.name, kk.priority, fk ? fk.defines : kk.defines(...bk), !1), this.featureState = void 0, this.featureState = ik, this._pluginManager._addPlugin(this), this._enable(!0), (0, Hk.z)(this._material, kk, this.featureState, this._pluginDefineNames)
-           }
-           getClassName() {
-             return kk.className
-           }
-           isCompatible(kk) {
-             return kk === wk.d.GLSL || kk === wk.d.WGSL
-           }
-         },
-         ik = (0, Uk.g)(kk);
-       for (const [Dk, fk] of Object.entries(Uk.b)) {
- ... (9 more removed lines; see GitHub link above)
+       oC = CC
+     }
+     let FC = !1;
+ 
+     function WC(CC) {
+       FC = !0;
+       try {
+         CC.onClick()
+       } finally {
+         FC = !1
```

#### 38. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L516-L536` → after: `L580-L581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L580-L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/158.js#L580-L581) · [Before (L516-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/158.js#L516-L536)

```diff
-     function Ak(kk, ek, ik) {
-       let Dk = Ck.get(ik);
-       Dk || (Dk = new Map, Ck.set(ik, Dk));
-       const {
-         url: fk
-       } = kk;
-       let Sk = Dk.get(fk);
-       return Sk || (Sk = async function(kk, ek, ik) {
-         var Dk;
-         const {
-           width: fk,
-           height: Sk
-         } = kk.getSize(), rk = Math.round(Sk / fk), Pk = kk.getInternalTexture(), mk = ek && ek.byteLength === fk * fk * rk * 4 ? ek : null !== (Dk = jk.get(Pk)) && void 0 !== Dk ? Dk : kk._readPixelsSync(), Mk = new Lk.c(mk, fk, fk, rk, Yk.d.TEXTUREFORMAT_RGBA, ik, !0, !1, bk.d. … [truncated]
-         jk.has(Pk) || (! function(kk, ek) {
-           const ik = ek.createRawTexture(new Uint8Array(4), 1, 1, Yk.d.TEXTUREFORMAT_RGBA, !1, !1, bk.d.NEAREST_SAMPLINGMODE);
-           kk._hardwareTexture.release(), ek.unbindAllTextures(), ik._swapAndDie(kk, !1)
- ... (5 more removed lines; see GitHub link above)
+     function MC() {
+       return fC().filter((CC => CC.panel && !CC.disabled))
```

#### 39. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L538-L559` → after: `L583-L587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L583-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/158.js#L583-L587) · [Before (L538-L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/158.js#L538-L559)

```diff
-     const jk = new WeakMap;
-     var sk = ik(37444);
-     class dk extends(pk(Pk.j)) {
-       constructor(kk, ek) {
-         super(kk, ek), ek.textures.forEach(((kk, ek) => {
-           kk.mirror.onLoadObservable.add((kk => {
-             this.setTextureArrayData(kk, ek).catch((kk => {
-               console.error(`Failed to build texture array for atlas ${ek}`, kk)
-             }))
-           }))
-         })), (0, sk.i)(ek, kk.shaderLanguage)
-       }
-       async setTextureArrayData(kk, ek) {
-         var ik, Dk;
-         const fk = this.featureState,
-           {
- ... (6 more removed lines; see GitHub link above)
+ 
+     function gC(CC) {
+       const zC = MC(),
+         ZC = zC.findIndex((CC => CC.id === oC));
+       return !(ZC < 0 || zC.length < 2) && (WC(zC[(ZC + CC + zC.length) % zC.length]), !0)
```

#### 40. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L561-L577` → after: `L589-L591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L589-L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/158.js#L589-L591) · [Before (L561-L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/158.js#L561-L577)

```diff
-     var Vk = ik(40729),
-       Fk = ik(39887),
-       uk = ik(36690),
-       qk = ik(40732),
-       Ik = ik(40001),
-       zk = ik(39870),
-       Qk = ik(40693),
-       vk = ik(37189),
-       Ek = ik(40734);
-     class hk extends Vk.d {
-       getData() {
-         return null
-       }
-       _rebuild() {}
-       restore() {
-         super._rebuild()
- ... (1 more removed lines; see GitHub link above)
+ 
+     function SC() {
+       return null !== oC && MC().length > 1
```

#### 41. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L579-L606` → after: `L593-L609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L593-L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/158.js#L593-L609) · [Before (L579-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/158.js#L579-L606)

```diff
-     const ak = {
-       Mesh: qk.d,
-       TransformNode: Qk.b,
-       hU: Vk.d,
-       VertexBuffer: Vk.h,
-       BoundingInfo: Fk.b,
-       eH: uk.eH,
-       ArenaBuffer: hk,
-       SubMesh: zk.e,
-       VertexData: Ik.b,
-       MirroredGeometry: Ek.c,
-       meshFromArrays: Ek.e,
-       plainMeshFromArrays: Ek.i
-     };
-     (0, vk.e)(ak);
-     var Wk = ik(37028);
- ... (12 more removed lines; see GitHub link above)
+ 
+     function pC() {
+       qC(null)
+     }
+ 
+     function PC() {
+       "inventory" !== QC.b.get("openInGameMenuName") && qC(null)
+     }
+ 
+     function GC() {
+       const CC = oC;
+       return qC(null), CC
+     }
+ 
+     function RC(CC) {
+       return nC.set(CC.id, CC), wC.o.bp(bC, fC(), !0), () => {
+ ... (1 more added lines; see GitHub link above)
```

#### 42. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L611-L652` → after: `L636-L641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L636-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/158.js#L636-L641) · [Before (L611-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/158.js#L611-L652)

```diff
-       if (!(ek instanceof Dk.StandardMaterial) || ek.specularTexture) return;
-       const {
-         r: ik,
-         g: fk,
-         b: Sk
-       } = ek.specularColor;
-       0 === ik && 0 === fk && 0 === Sk && (kk.SPECULARTERM = !1)
-     }(0, Mk.e)({
-       disableUnusedSpecularTerm: Xk
-     });
-     var Bk = ik(36903),
-       ck = ik(37199);
-     const Tk = new RegExp(`^#define ${mk.d}\\s*$`, "m");
-     class Zk extends(pk(mk.g)) {
-       constructor(kk, ek) {
-         super(kk, ek), this.aU = !1, ek.ditherOnlyWhileFading && (ck.i.add(kk), this.prewarmDitherTwins(kk))
- ... (26 more removed lines; see GitHub link above)
+       const ZC = {
+         content: CC,
+         menu: zC
+       };
+       return oC = ZC, wC.o.bp(fC, oC, !0), () => {
+         oC === ZC && (oC = null, gC = !1, pC(), wC.o.bp(fC, null))
```

#### 43. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L654-L655` → after: `L643-L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L643-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/158.js#L643-L652) · [Before (L654-L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/158.js#L654-L655)

```diff
-       dispose(kk) {
-         this.aU = !0, super.dispose(kk)
+     }
+     let WC = null;
+ 
+     function NC() {
+       return WC
+     }
+ 
+     function MC(CC) {
+       return WC = CC, () => {
+         WC === CC && (WC = null)
```

#### 44. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L658` → after: `L655-L687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L655-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/158.js#L655-L687) · [Before (L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/158.js#L658)

```diff
-     const Ok = new Map;
+     let gC = !1;
+ 
+     function SC() {
+       const CC = QC.b.get("openInGameMenuName");
+       "clientGame" !== CC && (gC = "inventory" === CC), (0, nC.o)() || (0, nC.j)(), (0, bC.u)(bC.e), QC.b.set({
+         openInGameMenuName: "clientGame",
+         openEverythingMenuName: null
+       })
+     }
+ 
+     function pC() {
+       GC(!1)
+     }
+ 
+     function PC() {
+       GC(gC)
+ ... (17 more added lines; see GitHub link above)
```

#### 45. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L661` → after: `L690-L695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L690-L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/158.js#L690-L695) · [Before (L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/158.js#L661)

```diff
-       Ok.set(kk, ek)
+       var ZC, oC, qC;
+       if (!wC.b.get("isKeydownEnabled") || CC.repeat) return;
+       const FC = CC.code;
+       "Escape" === CC.key ? (0, nC.i)(CC) : null !== (ZC = fC.o.OpenSettings) && void 0 !== ZC && ZC.includes(FC) ? (0, nC.A)(CC, QC.o.SETTINGS) : null !== (oC = fC.o.OpenCharacterCustomization) && void 0 !== oC && oC.includes(FC) ? (0, bC.c)() || (0, nC.A)(CC, QC.o.CUSTOMISATION … [truncated]
+         showDebugOverlay: !wC.b.get("showDebugOverlay")
+       })
```

#### 46. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L663-L669` → after: `L697-L708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L697-L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/158.js#L697-L708) · [Before (L663-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/158.js#L663-L669)

```diff
-     gk(rk.c, yk), gk(Pk.j, dk), gk(mk.g, Zk), gk(Mk.f, tk), (0, Kk.b)({
-       create: (kk, ek) => {
-         const ik = new Dk.StandardMaterial(kk.name, ek);
-         return (0, Bk.m)(kk, ik), ik.detailMap._pluginDefineNames
-       },
-       write: (kk, ek, ik) => {
-         (0, Bk.S)(kk.mirror, ek, ik)
+   },
+   38898: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => oC
+     });
+     var QC = ZC(8897),
+       wC = ZC(36369),
+       bC = ZC(38907);
+     const nC = {
+         seat: "seat_timeout",
+         socket_unopened: "socket_timeout_unopened",
+         socket: "socket_timeout"
```

#### 47. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L671-L674` → after: `L710-L780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L710-L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/158.js#L710-L780) · [Before (L671-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/158.js#L671-L674)

```diff
-       addFeature: (kk, ek, ik) => {
-         const Dk = Ok.get(ek.feature);
-         if (!Dk) throw new Error(`${ek.feature.name} has no plugin class (registerPluginClass)`);
-         new Dk(kk.mirror, ek.state, ...ik)
+       fC = {
+         seat: "seat_lost",
+         socket_unopened: "socket_unopened",
+         socket: "socket_closed"
+       };
+ 
+     function oC(CC, zC) {
+       if (CC instanceof wC.f) return {
+         at: nC[zC],
+         code: 0
+       };
+       const ZC = (0, QC.e)(CC),
+         oC = "number" === typeof ZC ? ZC : 0;
+       return null !== (0, bC.j)(oC).name ? {
+         at: "refused",
+         code: oC
+ ... (55 more added lines; see GitHub link above)
```

#### 48. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L676-L707` → after: `L782-L863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L782-L863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/158.js#L782-L863) · [Before (L676-L707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/158.js#L676-L707)

```diff
-       texture: (kk, ek, ik) => {
-         let {
-           url: Dk,
-           noMipmap: fk,
-           invertY: Sk,
-           samplingMode: rk,
-           data: Pk,
-           sets: mk
-         } = ik;
-         if (!Pk) {
-           const ik = new bk.d(Dk, ek, fk, Sk, rk);
-           return Object.assign(ik, mk), void(0, xk.G)(kk, ik)
-         }
-         const Mk = {},
-           Kk = new Promise(((kk, ek) => {
-             Mk.onLoad = kk, Mk.onError = (kk, ik) => {
- ... (16 more removed lines; see GitHub link above)
+       oC = "playSessionGameNameWithVariation",
+       qC = "wasMatchmakePlayer";
+ 
+     function FC() {
+       let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nC.k;
+       (0, bC.g)(CC, fC)
+     }
+ 
+     function WC() {
+       (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nC.k).setItem(qC, !0)
+     }
+ 
+     function NC() {
+       let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nC.k;
+       return (0, bC.d)(CC, fC)
+     }
+ ... (66 more added lines; see GitHub link above)
```

#### 49. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L709-L743` → after: `L865-L895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L865-L895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/158.js#L865-L895) · [Before (L709-L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/158.js#L709-L743)

```diff
-           lk = new bk.d(null, ek, wk);
-         Bk.o.set(lk, Kk), Object.assign(lk, mk), lk.updateURL(Dk, Uk);
-         const pk = lk.getInternalTexture();
-         pk && (pk.label = Hk), kk.uvSet = lk.coordinatesIndex, kk.matrix.set((0, Bk.H)(lk)), (0, xk.G)(kk, lk)
-       },
-       cube: (kk, ek, ik) => {
-         let {
-           rootUrl: Dk,
-           files: Sk,
-           noMipmap: rk,
-           luminance: Pk
-         } = ik;
-         const {
-           samplingMode: mk
-         } = kk.sampler, Mk = mk === (0, xk.y)(rk) ? null : () => {
-           (0, Bk.E)(Kk, mk)
- ... (19 more removed lines; see GitHub link above)
+           browserInfo: {
+             ua: window.navigator.userAgent,
+             name: (0, NC.getBrowserName)(),
+             version: (0, NC.getBrowserVersion)(),
+             platform: navigator.platform,
+             platformType: (0, NC.getPlatformType)(),
+             deviceType: (0, SC.c)()
+           },
+           isLoggedIn: CC.isLoggedIn(),
+           lobbyName: ZC,
+           languages: xC(),
+           version: nC.e,
+           siteUsed: MC.y,
+           subsiteUsed: MC.H,
+           playSessionId: (0, pC.j)(zC),
+           visitSessionId: (0, GC.d)(),
+ ... (15 more added lines; see GitHub link above)
```

#### 50. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L745` → after: `L897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/158.js#L897) · [Before (L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/158.js#L745)

```diff
-     })
+     }
```

#### 51. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L747` → after: `L899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/158.js#L899) · [Before (L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/158.js#L747)

```diff
-   40734: (kk, ek, ik) => {
+   38907: (CC, zC, ZC) => {
```

#### 52. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L749` → after: `L901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/158.js#L901) · [Before (L749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/158.js#L749)

```diff
-       c: () => Mk,
+       d: () => wC,
```

#### 53. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L751` → after: `L903-L906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L903-L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/158.js#L903-L906) · [Before (L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/158.js#L751)

```diff
-       i: () => xk
+       f: () => fC,
+       j: () => FC,
+       k: () => oC,
+       o: () => nC
```

#### 54. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L753-L851` → after: `L908-L916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L908-L916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/158.js#L908-L916) · [Before (L753-L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/158.js#L753-L851)

```diff
-     var Dk = ik(40729),
-       fk = ik(39623),
-       Sk = ik(39887),
-       bk = ik(40010),
-       rk = ik(40732),
-       Pk = ik(40001),
-       mk = ik(37075);
-     class Mk extends bk.e {
-       constructor() {
-         super(...arguments), this.model = null, this.onGeometryUpdated = (kk, ek) => {
-           this.releaseUnlessInstanced(ek)
-         }, this.onLinked = null
-       }
-       link(kk) {
-         var ek;
-         (0, mk.m)(kk), this.model = kk, null === (ek = this.onLinked) || void 0 === ek || ek.call(this, kk)
- ... (83 more removed lines; see GitHub link above)
+     var QC = ZC(184);
+     const wC = 3e3,
+       bC = 15e3;
+ 
+     function nC(CC) {
+       const zC = CC.endsWith(QC.k);
+       return {
+         text: (zC ? CC.slice(0, -QC.k.length) : CC) || null,
+         dropsCache: zC
```

#### 55. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L855-L873` → after: `L921-L923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L921-L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/158.js#L921-L923) · [Before (L855-L873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/158.js#L855-L873)

```diff
-     function Kk(kk, ek, ik) {
-       let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new rk.d(kk, ik);
-       const fk = (0, mk.i)(ek),
-         {
-           positions: Sk,
-           normals: Kk,
-           uvs: xk,
-           indices: nk,
-           named: Uk = {}
-         } = ek,
-         Hk = new Pk.b;
-       Hk.positions = Sk, Hk.normals = null !== Kk && void 0 !== Kk ? Kk : null, Hk.uvs = null !== xk && void 0 !== xk ? xk : null, Hk.indices = nk;
-       const wk = new Mk(bk.e.RandomId(), ik, Hk, !1, Dk);
-       for (const {
-           kind: bk,
-           components: rk
- ... (3 more removed lines; see GitHub link above)
+     function oC(CC, zC) {
+       const ZC = FC(CC);
+       return null !== ZC.name && "" === QC.e[ZC.name].text && null !== zC ? zC : ZC.reason
```

#### 56. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L876-L890` → after: `L927-L950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L927-L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/158.js#L927-L950) · [Before (L876-L890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/158.js#L876-L890)

```diff
-     function xk(kk, ek, ik) {
-       let Dk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-       const fk = new rk.d(kk, ik),
-         {
-           positions: Sk,
-           normals: bk,
-           uvs: mk,
-           indices: Mk
-         } = ek;
-       return Object.assign(new Pk.b, {
-         positions: Sk,
-         normals: bk,
-         uvs: mk,
-         indices: Mk
-       }).applyToMesh(fk, Dk), fk
+     function FC(CC) {
+       var zC;
+       let ZC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
+       const wC = null !== (zC = Object.keys(QC.e).find((zC => QC.e[zC].code === CC))) && void 0 !== zC ? zC : null;
+       if (null === wC) return {
+         code: CC,
+         name: wC,
+         reason: null !== ZC && void 0 !== ZC ? ZC : `${fC}\nCode: ${CC}`,
+         canReconnect: !1,
+         automaticallyReconnect: !1,
+         requiresRefresh: !1
+       };
+       const {
+         text: bC,
+         canReconnect: nC = !1
+       } = QC.e[wC], oC = CC === QC.e.outdatedVersion.code || CC === QC.e.loadRecaptchaError.code;
+ ... (8 more added lines; see GitHub link above)
```

#### 57. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L893` → after: `L953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/158.js#L953) · [Before (L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/158.js#L893)

```diff
-   8658: (kk, ek, ik) => {
+   36725: (CC, zC, ZC) => {
```

#### 58. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L895-L897` → after: `L955-L963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L955-L963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/158.js#L955-L963) · [Before (L895-L897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/158.js#L895-L897)

```diff
-       b: () => Mk,
-       f: () => rk,
-       i: () => Pk
+       d: () => wC,
+       g: () => bC,
+       j: () => NC,
+       m: () => fC,
+       q: () => oC,
+       u: () => qC,
+       v: () => WC,
+       y: () => FC,
+       z: () => nC
```

#### 59. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L899-L902` → after: `L965-L975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L965-L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/158.js#L965-L975) · [Before (L899-L902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/158.js#L899-L902)

```diff
-     var Dk = ik(2195),
-       fk = ik(1218),
-       Sk = ik(2201);
-     const bk = ",";
+     var QC = ZC(1183);
+     let wC = function(CC) {
+         return CC[CC.Join = 0] = "Join", CC[CC.Leave = 1] = "Leave", CC[CC.Push = 2] = "Push", CC[CC.Cursor = 3] = "Cursor", CC[CC.Submit = 4] = "Submit", CC[CC.ReloadAsVariation = 5] = "ReloadAsVariation", CC[CC.CreateFile = 6] = "CreateFile", CC[CC.RenameFile = 7] = "RenameFile … [truncated]
+       }({}),
+       bC = function(CC) {
+         return CC[CC.Joined = 0] = "Joined", CC[CC.Updates = 1] = "Updates", CC[CC.Presence = 2] = "Presence", CC[CC.RemoteCursor = 3] = "RemoteCursor", CC[CC.ForceClose = 4] = "ForceClose", CC[CC.LobbyFilesChanged = 5] = "LobbyFilesChanged", CC[CC.EngineSettings = 6] = "EngineSe … [truncated]
+       }({});
+ 
+     function nC(CC) {
+       return "lobby" === CC.kind ? `lobby:${CC.path}` : `codeBlock:${CC.pos[0]},${CC.pos[1]},${CC.pos[2]}`
+     }
```

#### 60. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L905-L910` → after: `L978-L987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L978-L987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/158.js#L978-L987) · [Before (L905-L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/158.js#L905-L910)

```diff
-       if (!kk) return [];
-       const ek = new Set,
-         ik = [];
-       for (const Dk of kk.split(bk)) {
-         const kk = Dk.trim();
-         if ((0, Sk.i)(kk) && !ek.has(kk) && (ek.add(kk), ik.push(kk), ik.length >= fk.o)) break
+       if ("lobby" === CC) return {
+         kind: "lobby",
+         path: QC.k
+       };
+       if (CC.startsWith("lobby:")) {
+         const zC = CC.slice(6);
+         return WC(zC) ? {
+           kind: "lobby",
+           path: zC
+         } : null
```

#### 61. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L912` → after: `L989-L993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L989-L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/158.js#L989-L993) · [Before (L912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/158.js#L912)

```diff
-       return ik
+       const zC = CC.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
+       return zC ? {
+         kind: "codeBlock",
+         pos: [parseInt(zC[1]), parseInt(zC[2]), parseInt(zC[3])]
+       } : null
```

#### 62. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L916-L920` → after: `L997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/158.js#L997) · [Before (L916-L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/158.js#L916-L920)

```diff
-       const ek = new Set,
-         ik = [];
-       for (const Dk of kk)
-         if ((0, Sk.i)(Dk) && !ek.has(Dk) && (ek.add(Dk), ik.push(Dk), ik.length >= fk.o)) break;
-       return ik.join(bk)
+       return CC.endsWith(".d.ts")
```

#### 63. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L923-L924` → after: `L1000-L1001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R1000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L1000-L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/158.js#L1000-L1001) · [Before (L923-L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/158.js#L923-L924)

```diff
-     function mk() {
-       return Pk(Sk.f)
+     function qC(CC) {
+       return CC.endsWith(".ts") && !oC(CC)
```

#### 64. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L928-L929` → after: `L1006-L1015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R1006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L1006-L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/158.js#L1006-L1015) · [Before (L928-L929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/158.js#L928-L929)

```diff
-       var ek;
-       return "emote" === kk ? mk() : null !== (ek = Kk[kk][0]) && void 0 !== ek ? ek : xk[kk]
+       if (!CC || CC !== CC.trim()) return !1;
+       if (CC.length > FC) return !1;
+       if (CC.startsWith("/") || CC.includes("\\") || CC.includes("\0")) return !1;
+       if (!oC(CC) && !qC(CC) && ! function(CC) {
+           return CC.endsWith(".js") && !CC.endsWith(".min.js") && !CC.endsWith(".bundle.js")
+         }(CC)) return !1;
+       const zC = CC.split("/");
+       for (const ZC of zC)
+         if ("" === ZC || "." === ZC || ".." === ZC) return !1;
+       return !0
```

#### 65. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L931-L939` → after: `L1017-L1043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R1017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L1017-L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/158.js#L1017-L1043) · [Before (L931-L939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/158.js#L931-L939)

```diff
-     const Kk = fk.y.reduce(((kk, ek) => {
-         const ik = [];
-         for (const Sk in Dk.f[ek]) {
-           var fk;
-           "default" === (null === (fk = (0, Dk.j)(ek, Sk)) || void 0 === fk ? void 0 : fk.cosmeticPack) && ik.push(Sk)
-         }
-         return kk[ek] = ik, kk
-       }), {}),
-       xk = fk.y.reduce(((kk, ek) => (kk[ek] = Object.keys(Dk.f[ek])[0], kk)), {})
+     const NC = 14e3
+   },
+   38815: (CC, zC, ZC) => {
+     function QC(CC, zC, ZC, QC, wC) {
+       var bC = {};
+       return Object.keys(QC).forEach((function(CC) {
+         bC[CC] = QC[CC]
+       })), bC.enumerable = !!bC.enumerable, bC.configurable = !!bC.configurable, ("value" in bC || bC.initializer) && (bC.writable = !0), bC = ZC.slice().reverse().reduce((function(ZC, QC) {
+         return QC(CC, zC, ZC) || ZC
+       }), bC), wC && void 0 !== bC.initializer && (bC.value = bC.initializer ? bC.initializer.call(wC) : void 0, bC.initializer = void 0), void 0 === bC.initializer && (Object.defineProperty(CC, zC, bC), bC = null), bC
+     }
+     ZC.d(zC, {
+       d: () => QC
+     })
+   },
+   38813: (CC, zC, ZC) => {
+ ... (11 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/159.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/159.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fb)

#### 1. `bundles/bloxd.io/chunks/js/159.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fb) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/159.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/159.js#L4)

```diff
-   40671: (kk, ek, ik) => {
+   8918: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/159.js` (Changed code · before: `L6-L8` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fbR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fb) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/159.js#L6) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/159.js#L6-L8)

```diff
-       openMobLineupPreview: () => tk,
-       openMobPreview: () => Wk,
-       openPetPreview: () => Xk
+       pageBody: () => QC
```

#### 3. `bundles/bloxd.io/chunks/js/159.js` (Changed code · before: `L10-L56` → after: `L8-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fbR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fb) · [After (L8-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/159.js#L8-L41) · [Before (L10-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/159.js#L10-L56)

```diff
-     var Dk = ik(39377),
-       fk = ik(39651),
-       Sk = ik(40673),
-       bk = ik(36868),
-       rk = ik(36690),
-       Pk = ik(39813),
-       mk = ik(40693),
-       Mk = ik(38057),
-       Kk = ik(36758),
-       xk = ik(36747),
-       nk = ik(36685),
-       Uk = ik(37953),
-       Hk = ik(37950),
-       wk = ik(37685),
-       lk = ik(37738),
-       pk = ik(37702),
- ... (31 more removed lines; see GitHub link above)
+     const QC = {
+       whatIs: ["Protect your bed, destroy theirs. That's the whole idea of Bedwars, the team PvP strategy mode that's free to play online. Every team starts on its own floating island with a bed to protect. Collect resources, buy gear and team upgrades, then bridge across to the  … [truncated]
+       howToPlay: ["Play Bedwars Solos, Duos, Trios, 4v4, 4v4v4v4 or 1v1. Generators on your island drop Coal, Iron Bars and Diamond. Spend them at the Item Shop on blocks, weapons, armour and tools, or at the Upgrades shopkeeper on team upgrades like Protection, Damage, Feather F … [truncated]
+       features: ["Solos, Duos, Trios, 4v4v4v4 and 4v4", "Ranked Bedwars Lobby", "Team Upgrades: Protection, Damage, Feather Falling, Health Regeneration and Alarm", "Match Modifiers like Lucky Chaos, Weapon Roulette, Treasure Guardians and Specialists", "Dozens of Maps", "Leaderb … [truncated]
+       tips: ["Rush other teams' beds before they can upgrade their defences", "Split up attack and defence with your team", "Upgrade your gear in the shop before leaving your island", "Bridging backwards is faster than ez bridging", "Fight for the centre generators, because Diamo … [truncated]
+       similarGames: ["luckyBedwars", "skywars", "luckyTowers"],
+       faq: [{
+         question: "What is Bedwars?",
+         answer: "Bedwars is a team PvP strategy game where you protect your bed and destroy everyone else's. Bloxd's version adds team upgrades, match modifiers and a Ranked lobby."
+       }, {
+         question: "How do you win Bedwars?",
+         answer: "Be the last team standing. Destroy the other teams' beds so they can't respawn, then eliminate them before the arena shrinks."
+       }, {
+         question: "What happens after your bed is destroyed?",
+         answer: "You can't respawn. If you die after your bed is gone, you become a spectator."
+       }, {
+ ... (18 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/160.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/160.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786)

#### 1. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L4-L7` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/160.js#L4-L6) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/160.js#L4-L7)

```diff
-   38662: (kk, ek, ik) => {
-     ik.d(ek, {
-       c: () => Sk,
-       f: () => bk
+   8923: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       pageBody: () => QC
```

#### 2. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L365-L819` → after: `L9-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L9-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/160.js#L9-L32) · [Before (L365-L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/160.js#L365-L819)

```diff
-         seat: "seat_timeout",
-         socket_unopened: "socket_timeout_unopened",
-         socket: "socket_timeout"
-       },
-       rk = {
-         seat: "seat_lost",
-         socket_unopened: "socket_unopened",
-         socket: "socket_closed"
-       };
- 
-     function Pk(kk, ek) {
-       if (kk instanceof fk.e) return {
-         at: bk[ek],
-         code: 0
-       };
-       const ik = (0, Dk.i)(kk),
- ... (439 more removed lines; see GitHub link above)
+       whatIs: ["What if every sword, block and piece of armour came from a Lucky Block? Lucky Bedwars is the Bedwars mode where they do. Four teams of up to four players each get their own base and a bed to protect. Open Lucky Blocks for random weapons, armour, blocks and wild su … [truncated]
+       howToPlay: ["Before the match, your lobby votes on a map. You start with four Lucky Blocks. The first Basic Building and Basic Weapon blocks you open give you team wool and a weapon, so you're ready to go. Generators at your base and in the centre of the map keep the loot c … [truncated]
+       features: ["4 Teams of up to 4 Players", "Building, Weapon, Armour and Food Lucky Blocks in Basic, Rare and Super Rarities", "Evil Lucky Blocks with Nasty Surprises", "Wild Items: Lucky Bombs, Swap Orbs, Fireballs, Iceballs, Toxin Balls and Void Nets", "Random Events: Blood … [truncated]
+       tips: ["Open your four starting Lucky Blocks straight away to get wool and a weapon", "Chip in for the Bed Trap early. Evil Lucky Blocks around your bed can seal raiders in obsidian, poison them or send them home", "Save any Obsidian from Super Building blocks for your bed, … [truncated]
+       similarGames: ["bedwars", "luckyTowers", "skywars"],
+       faq: [{
+         question: "What is Bloxd Lucky Bedwars?",
+         answer: "It's Bedwars with a twist: all your gear comes from Lucky Blocks. Four teams of up to four players defend their beds and try to be the last team standing."
+       }, {
+         question: "How do you play Lucky Bedwars?",
+         answer: "Open Lucky Blocks for weapons, armour and blocks, protect your bed and break the other teams' beds. You respawn while your bed stands. Without it, one death makes you a spectator."
+       }, {
+         question: "How is Lucky Bedwars different from normal Bedwars?",
+         answer: "Your loot comes from Lucky Blocks, so every match is random. You earn Clovers to buy more Lucky Blocks and team upgrades, and random events change up each game."
+       }, {
+         question: "What are Clovers in Lucky Bedwars?",
+ ... (8 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/161.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/161.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907)

#### 1. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/161.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/161.js#L4)

```diff
-   8738: (kk, ek, ik) => {
+   8927: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/161.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/161.js#L9-L13)

```diff
-       whatIs: ["Protect your bed, destroy theirs. That's the whole idea of Bedwars, the team PvP strategy mode that's free to play online. Every team starts on its own floating island with a bed to protect. Collect resources, buy gear and team upgrades, then bridge across to the  … [truncated]
-       howToPlay: ["Play Bedwars Solos, Duos, Trios, 4v4, 4v4v4v4 or 1v1. Generators on your island drop Coal, Iron Bars and Diamond. Spend them at the Item Shop on blocks, weapons, armour and tools, or at the Upgrades shopkeeper on team upgrades like Protection, Damage, Feather F … [truncated]
-       features: ["Solos, Duos, Trios, 4v4v4v4 and 4v4", "Ranked Bedwars Lobby", "Team Upgrades: Protection, Damage, Feather Falling, Health Regeneration and Alarm", "Match Modifiers like Lucky Chaos, Weapon Roulette, Treasure Guardians and Specialists", "Dozens of Maps", "Leaderb … [truncated]
-       tips: ["Rush other teams' beds before they can upgrade their defences", "Split up attack and defence with your team", "Upgrade your gear in the shop before leaving your island", "Bridging backwards is faster than ez bridging", "Fight for the centre generators, because Diamo … [truncated]
-       similarGames: ["luckyBedwars", "skywars", "luckyTowers"],
+       whatIs: ["In Bloxd Skywars, everyone starts on their own island in the sky. Only one player is still there at the end. Loot your chests for weapons, armour and blocks, bridge over to your rivals and knock them into the void. It's free-for-all PvP for up to 12 players, and t … [truncated]
+       howToPlay: ["Each match starts with you in a glass cage on your own island. The cage opens after about 3 seconds, and you can't use items while you're stuck inside. Once you're out, loot your island's chests quickly, because your gear is split between them. Then build a bri … [truncated]
+       features: ["Free-for-All Matches for Up to 12 Players", "Around 30 Kits, from Archer and Builder to Ghost, Sniper, Catapult and Salmon", "Killstreak Perks You Can Buy and Upgrade, like Bridger, Leech and Inferno", "Chests That Refill Every 2.5 Minutes", "A Compass That Trac … [truncated]
+       tips: ["Open every chest on your island before you leave, since your gear is spread across them", "Take your time bridging. One wrong step and you're in the void", "When the chests refill, try to get back to them before your rivals do", "Fight near the edges and use knockba … [truncated]
+       similarGames: ["bedwars", "luckyTowers", "skyIslands"],
```

#### 3. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/161.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/161.js#L15-L16)

```diff
-         question: "What is Bedwars?",
-         answer: "Bedwars is a team PvP strategy game where you protect your bed and destroy everyone else's. Bloxd's version adds team upgrades, match modifiers and a Ranked lobby."
+         question: "What is Bloxd Skywars?",
+         answer: "It's a PvP mode on Bloxd.io where every player starts on a floating island. You loot chests, bridge across to your rivals and try to be the last one standing."
```

#### 4. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/161.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/161.js#L18-L19)

```diff
-         question: "How do you win Bedwars?",
-         answer: "Be the last team standing. Destroy the other teams' beds so they can't respawn, then eliminate them before the arena shrinks."
+         question: "How do you win in Skywars?",
+         answer: "Be the last player alive. Knock everyone else out, or push them off their islands into the void. Winning gets you 20 Gold."
```

#### 5. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/161.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/161.js#L21-L22)

```diff
-         question: "What happens after your bed is destroyed?",
-         answer: "You can't respawn. If you die after your bed is gone, you become a spectator."
+         question: "Can I play Skywars in my browser?",
+         answer: "Yep. Bloxd.io Skywars runs right in your browser, so you can jump into a match without installing anything."
```

#### 6. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/161.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/161.js#L24-L25)

```diff
-         question: "What do the Bedwars generators do?",
-         answer: "Your island's generators drop Coal, Iron Bars and Diamond for items and upgrades. The generators in the centre drop Diamond and Moonstone for the most powerful items."
+         question: "What are the best Skywars kits?",
+         answer: "Honestly, it depends how you like to play. Sniper has a one-shot crossbow and Catapult can knock enemies off the map. Ghost can turn invisible, and Builder starts with extra blocks for bridging. You unlock more kits with Gold and Gems."
```

#### 7. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/161.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/161.js#L27-L28)

```diff
-         question: "What modes can I play in Bloxd Bedwars?",
-         answer: "Solos, Duos, Trios, 4v4, 4v4v4v4 and 1v1. There's also a Ranked Bedwars lobby if you want to climb the leaderboards."
+         question: "What do perks do in Bloxd Skywars?",
+         answer: "Perks give you bonuses while you play. Maniac gives you more damage after kills, Bridger gives you a chance to get placed blocks back and Leech heals you after kills. You can upgrade them to make them stronger."
```

#### 8. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/161.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/161.js#L30-L31)

```diff
-         question: "What are match modifiers?",
-         answer: "Some matches add a twist. In Supercharged, every generator starts at Level 2. In Boom, explosives are half price. Weapon Roulette gives you a new random weapon every respawn, and in Specialists you pick a role with special perks."
+         question: "How do I get Gold in Skywars?",
+         answer: "Every kill earns Gold, and you get an extra 20 Gold for winning a match."
```

#### 9. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L33-L34` → after: `L33-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/161.js#L33-L34) · [Before (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/161.js#L33-L34)

```diff
-         question: "Can I attack my teammates?",
-         answer: "No, you can't attack players on your own team."
+         question: "How many players fit in one Skywars match?",
+         answer: "Up to 12 players fight it out in each free-for-all match."
```

#### 10. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L36-L40` → after: `L36-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/161.js#L36-L37) · [Before (L36-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/161.js#L36-L40)

```diff
-         question: "How many Bedwars maps are there?",
-         answer: "Dozens, including Scary Hollow, Wood Factory, Ahoy!, Colosseum and Rooftops."
-       }, {
-         question: "What's the difference between Bedwars and Lucky Bedwars?",
-         answer: "In Bedwars you collect Coal, Iron Bars, Diamond and Moonstone from generators and choose what to buy. Lucky Bedwars hands out gear through Lucky Blocks instead, so no two matches play out the same."
+         question: "What does the compass do in Skywars?",
+         answer: "After 7 minutes, or once only two players are left, everyone still alive gets a compass that points to the nearest player."
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/162.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/162.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6e)

#### 1. `bundles/bloxd.io/chunks/js/162.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/162.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/162.js#L4)

```diff
-   8747: (kk, ek, ik) => {
+   8929: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/162.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6eR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6e) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/162.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/162.js#L9-L13)

```diff
-       whatIs: ["What if every sword, block and piece of armour came from a Lucky Block? Lucky Bedwars is the Bedwars mode where they do. Four teams of up to four players each get their own base and a bed to protect. Open Lucky Blocks for random weapons, armour, blocks and wild su … [truncated]
-       howToPlay: ["Before the match, your lobby votes on a map. You start with four Lucky Blocks. The first Basic Building and Basic Weapon blocks you open give you team wool and a weapon, so you're ready to go. Generators at your base and in the centre of the map keep the loot c … [truncated]
-       features: ["4 Teams of up to 4 Players", "Building, Weapon, Armour and Food Lucky Blocks in Basic, Rare and Super Rarities", "Evil Lucky Blocks with Nasty Surprises", "Wild Items: Lucky Bombs, Swap Orbs, Fireballs, Iceballs, Toxin Balls and Void Nets", "Random Events: Blood … [truncated]
-       tips: ["Open your four starting Lucky Blocks straight away to get wool and a weapon", "Chip in for the Bed Trap early. Evil Lucky Blocks around your bed can seal raiders in obsidian, poison them or send them home", "Save any Obsidian from Super Building blocks for your bed, … [truncated]
-       similarGames: ["bedwars", "luckyTowers", "skywars"],
+       whatIs: ["Your gear is completely random, and only one player makes it out of the madness. Bloxd Lucky Towers is a last-player-standing PvP mode where everyone spawns on their own pillar. Rounds are quick, chaotic and pretty unpredictable. There are no Lucky Blocks to open  … [truncated]
+       howToPlay: ["Up to 15 players spawn on pillars spaced out across the map. You start in a glass cage for 3 seconds. After that, everyone gets a random item every 3 seconds. It could be blocks, food, a weapon, armour, a potion or something that explodes. Build bridges over to … [truncated]
+       features: ["Up to 15 Players per Match", "A Random Item Every 3 Seconds", "Weapons, Armour, Potions, Arrows and Explosives", "Special Items Like Updraft, SnowDash, Steal Ball, Bouncy Bomb and Chaos Potion", "Respawn Totems for an Extra Life", "Five Random Events, From Chest … [truncated]
+       tips: ["Use your first few blocks to wall up your pillar", "Hang on to explosives for breaking your rivals' bridges", "If a chest drops, race for it. There's a guaranteed weapon and two pieces of armour inside", "When the ground starts rising, build upwards", "Get under cov … [truncated]
+       similarGames: ["skywars", "luckyBedwars", "luckyBattlegrounds", "bedwars"],
```

#### 3. `bundles/bloxd.io/chunks/js/162.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6eR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6e) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/162.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/162.js#L15-L16)

```diff
-         question: "What is Bloxd Lucky Bedwars?",
-         answer: "It's Bedwars with a twist: all your gear comes from Lucky Blocks. Four teams of up to four players defend their beds and try to be the last team standing."
+         question: "What is Lucky Towers?",
+         answer: "A fast PvP mode for up to 15 players. Everyone starts on their own pillar, gets a random item every 3 seconds and fights to be the last one standing."
```

#### 4. `bundles/bloxd.io/chunks/js/162.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6eR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6e) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/162.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/162.js#L18-L19)

```diff
-         question: "How do you play Lucky Bedwars?",
-         answer: "Open Lucky Blocks for weapons, armour and blocks, protect your bed and break the other teams' beds. You respawn while your bed stands. Without it, one death makes you a spectator."
+         question: "How do you win in Bloxd Lucky Towers?",
+         answer: "Be the last player alive. Use whatever random items you get to knock rivals off their pillars or take them out. If you're eliminated, you can spectate untill the match ends."
```

#### 5. `bundles/bloxd.io/chunks/js/162.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6eR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6e) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/162.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/162.js#L21-L22)

```diff
-         question: "How is Lucky Bedwars different from normal Bedwars?",
-         answer: "Your loot comes from Lucky Blocks, so every match is random. You earn Clovers to buy more Lucky Blocks and team upgrades, and random events change up each game."
+         question: "How often do you get items in Lucky Towers?",
+         answer: "Every 3 seconds. During the Double Speed event they spawn twice as fast for a short while."
```

#### 6. `bundles/bloxd.io/chunks/js/162.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6eR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6e) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/162.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/162.js#L24-L25)

```diff
-         question: "What are Clovers in Lucky Bedwars?",
-         answer: "Clovers are the in-game currency. Earn them by opening Lucky Blocks, getting kills, breaking beds, recycling loot and surviving events. Spend them at the Lucky Trader or on team upgrades."
+         question: "What items can you get in Lucky Towers?",
+         answer: "Blocks, seedlings, beds, food, potions, weapons, arrows, armour and explosives. There are special items too, like the Bouncy Bomb, Respawn Totem, Floor Creator, SnowDash, Updraft, Steal Ball, Chaos Potion and Moonstone Remote Explosive."
```

#### 7. `bundles/bloxd.io/chunks/js/162.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6eR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6e) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/162.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/162.js#L27-L28)

```diff
-         question: "What's inside Evil Lucky Blocks?",
-         answer: "Bad luck! The Bed Trap upgrade puts Evil Lucky Blocks around your bed. Anyone who opens one could get trapped in obsidian, dropped in lava, webbed, poisoned, blinded, chased by guard dogs or sent home."
+         question: "Which random events can happen in Lucky Towers?",
+         answer: "Chest Drop, Jump Boost, Double Speed, Lava Rise and Bombardment. You'll get an announcement when each one starts."
```

#### 8. `bundles/bloxd.io/chunks/js/162.js` (Changed code · before: `L30-L31` → after: `L30-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6eR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6e) · [After (L30-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/162.js#L30-L34) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/162.js#L30-L31)

```diff
-         question: "What are the Lucky Bedwars events?",
-         answer: "Twice a match a random event starts: Blood Moon, Lucky Crown, Masquerade, Simon Says, Lucky Storm or Tiny Titans. You get a 30-second warning, and beds can't be broken while an event runs."
+         question: "Which maps are in Lucky Towers?",
+         answer: "The OG, Desert, Icy, Space and Forest. There's also a Spooky map in October and a Holiday map in December and January."
+       }, {
+         question: "How is Lucky Towers different from Lucky Blocks Battlegrounds?",
+         answer: "Lucky Towers is last player standing. Items arrive on their own, and once you're knocked out you spectate. Lucky Blocks Battlegrounds is a kills race in a shared arena where you open Lucky Blocks, and the top player wins when it resets."
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/163.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/163.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838)

#### 1. `bundles/bloxd.io/chunks/js/163.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/163.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/163.js#L4)

```diff
-   8754: (kk, ek, ik) => {
+   8935: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/163.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/163.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/163.js#L9-L13)

```diff
-       whatIs: ["In Bloxd Skywars, everyone starts on their own island in the sky. Only one player is still there at the end. Loot your chests for weapons, armour and blocks, bridge over to your rivals and knock them into the void. It's free-for-all PvP for up to 12 players, and t … [truncated]
-       howToPlay: ["Each match starts with you in a glass cage on your own island. The cage opens after about 3 seconds, and you can't use items while you're stuck inside. Once you're out, loot your island's chests quickly, because your gear is split between them. Then build a bri … [truncated]
-       features: ["Free-for-All Matches for Up to 12 Players", "Around 30 Kits, from Archer and Builder to Ghost, Sniper, Catapult and Salmon", "Killstreak Perks You Can Buy and Upgrade, like Bridger, Leech and Inferno", "Chests That Refill Every 2.5 Minutes", "A Compass That Trac … [truncated]
-       tips: ["Open every chest on your island before you leave, since your gear is spread across them", "Take your time bridging. One wrong step and you're in the void", "When the chests refill, try to get back to them before your rivals do", "Fight near the edges and use knockba … [truncated]
-       similarGames: ["bedwars", "luckyTowers", "skyIslands"],
+       whatIs: ["Smash Lucky Blocks for random loot, funny surprises and some genuinely wild outcomes, then take on everyone else in a chaotic multiplayer PvP arena. In Bloxd Lucky Blocks Battlegrounds, whoever has the most kills when the arena resets wins the round. Lucky Bedwars … [truncated]
+       howToPlay: ["You start in your own safe base, and nobody else can get in. Step out into the arena and a free Lucky Block lands with you every 15 seconds. Crack them open for weapons, armour, pets and surprises, then go and fight.", "Lucky Blocks, Weapon Lucky Blocks and Pet … [truncated]
+       features: ["Multiplayer Lucky Block PvP Arena", "A Free Lucky Block Every 15 Seconds", "Weapon and Pet Lucky Blocks on Pads Around the Map", "Ultra Lucky Block in the Centre Every 90 Seconds", "Your Own Ultra Lucky Block Every 5 Minutes", "Safe Personal Base Nobody Else Can … [truncated]
+       tips: ["Stay out in the arena. You don't get free Lucky Blocks while you're in your base", "The second the Ultra Lucky Block appears, head for the centre", "Open Pet Lucky Blocks for a pet that'll defend you from anyone who attacks you", "Need a breather? Go back to your ba … [truncated]
+       similarGames: ["luckyBedwars", "luckyTowers", "skywars", "bedwars"],
```

#### 3. `bundles/bloxd.io/chunks/js/163.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/163.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/163.js#L15-L16)

```diff
-         question: "What is Bloxd Skywars?",
-         answer: "It's a PvP mode on Bloxd.io where every player starts on a floating island. You loot chests, bridge across to your rivals and try to be the last one standing."
+         question: "What is Lucky Blocks Battlegrounds?",
+         answer: "A multiplayer lucky block PvP arena. You open Lucky Blocks for random loot, fight other players and try to end each 15-minute round with the most kills."
```

#### 4. `bundles/bloxd.io/chunks/js/163.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/163.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/163.js#L18-L19)

```diff
-         question: "How do you win in Skywars?",
-         answer: "Be the last player alive. Knock everyone else out, or push them off their islands into the void. Winning gets you 20 Gold."
+         question: "How do you win Lucky Blocks Battlegrounds?",
+         answer: "Get the most kills before the arena resets. That happens every 15 minutes, and the top player wins the round."
```

#### 5. `bundles/bloxd.io/chunks/js/163.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/163.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/163.js#L21-L22)

```diff
-         question: "Can I play Skywars in my browser?",
-         answer: "Yep. Bloxd.io Skywars runs right in your browser, so you can jump into a match without installing anything."
+         question: "How do I get Lucky Blocks?",
+         answer: "You get a free one every 15 seconds while you're out in the arena. More spawn on pads around the map, and there's an Ultra Lucky Block in the centre every 90 seconds."
```

#### 6. `bundles/bloxd.io/chunks/js/163.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/163.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/163.js#L24-L25)

```diff
-         question: "What are the best Skywars kits?",
-         answer: "Honestly, it depends how you like to play. Sniper has a one-shot crossbow and Catapult can knock enemies off the map. Ghost can turn invisible, and Builder starts with extra blocks for bridging. You unlock more kits with Gold and Gems."
+         question: "What is the Ultra Lucky Block?",
+         answer: "An extra-special Lucky Block. One shows up in the middle of the arena every 90 seconds for everyone to race for, and you get your own in your base every 5 minutes as well."
```

#### 7. `bundles/bloxd.io/chunks/js/163.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/163.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/163.js#L27-L28)

```diff
-         question: "What do perks do in Bloxd Skywars?",
-         answer: "Perks give you bonuses while you play. Maniac gives you more damage after kills, Bridger gives you a chance to get placed blocks back and Leech heals you after kills. You can upgrade them to make them stronger."
+         question: "What's inside Bloxd lucky blocks?",
+         answer: "Pretty much anything, from weapons and armour to pets and funny surprises. Weapon Lucky Blocks and Pet Lucky Blocks give you a better chance of a weapon or a pet."
```

#### 8. `bundles/bloxd.io/chunks/js/163.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/163.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/163.js#L30-L31)

```diff
-         question: "How do I get Gold in Skywars?",
-         answer: "Every kill earns Gold, and you get an extra 20 Gold for winning a match."
+         question: "Can other players attack me in my base?",
+         answer: "Nope. Other players can't get into your base, break its blocks or open its chests."
```

#### 9. `bundles/bloxd.io/chunks/js/163.js` (Changed code · before: `L33-L37` → after: `L33-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838) · [After (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/163.js#L33-L34) · [Before (L33-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/163.js#L33-L37)

```diff
-         question: "How many players fit in one Skywars match?",
-         answer: "Up to 12 players fight it out in each free-for-all match."
-       }, {
-         question: "What does the compass do in Skywars?",
-         answer: "After 7 minutes, or once only two players are left, everyone still alive gets a compass that points to the nearest player."
+         question: "Do I lose my items when the Lucky Block Battlegrounds arena resets?",
+         answer: "No, your inventory stays with you. Everyone's kills go back to zero for the new round, though."
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/164.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/164.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711)

#### 1. `bundles/bloxd.io/chunks/js/164.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/164.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/164.js#L4)

```diff
-   8756: (kk, ek, ik) => {
+   8943: (CC, zC, ZC) => {
```
