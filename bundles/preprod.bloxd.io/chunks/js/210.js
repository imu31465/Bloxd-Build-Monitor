export const id = 210;
export const ids = [210];
export const modules = {
  34587: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => qQ,
      d: () => TQ
    });
    var wQ = XQ(3523);

    function qQ() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const QQ = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const WQ = new BroadcastChannel(wQ.k);
        WQ.postMessage({
          stored: QQ
        }), WQ.close()
      } catch {
        return null
      }
      return QQ
    }

    function TQ(QQ) {
      const WQ = "object" === typeof QQ && null !== QQ ? QQ.stored : null;
      return "string" === typeof WQ ? WQ : null
    }
  },
  34583: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => zQ,
      e: () => qQ,
      f: () => TQ
    });
    var wQ = XQ(3523);
    async function qQ(QQ, WQ, XQ) {
      let qQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const TQ = zQ(await QQ.getItem(wQ.f, WQ));
      if (null === TQ || qQ()) return null;
      const sQ = await QQ.getItem(wQ.g, WQ);
      return qQ() ? null : (await async function(QQ) {
        await Promise.all([QQ.removeItem(wQ.f), QQ.removeItem(wQ.g)])
      }(QQ).catch(XQ), {
        pack: TQ,
        source: "string" === typeof sQ ? sQ : null
      })
    }

    function TQ(QQ) {
      return (0, wQ.r)() ? Promise.resolve(null) : qQ(QQ, !1, (QQ => {
        console.error("Error removing temporary texture pack: ", QQ)
      }), wQ.r)
    }

    function zQ(QQ) {
      if ("object" !== typeof QQ || null === QQ) return null;
      const WQ = QQ.metaData;
      return "object" !== typeof WQ || null === WQ || "string" !== typeof WQ.id ? null : QQ
    }
  },
  51248: (QQ, WQ, XQ) => {
    function wQ(QQ) {
      return null === QQ.gameSource ? "player" : "customGame"
    }
    XQ.d(WQ, {
      d: () => TQ,
      f: () => BQ,
      j: () => jQ,
      n: () => wQ
    });
    const qQ = /^data:[\w.+/-]*;base64,[A-Za-z0-9+/]*={0,2}$/;

    function TQ(QQ) {
      return "" === QQ || "string" === typeof QQ && qQ.test(QQ)
    }

    function zQ(QQ) {
      return "object" === typeof QQ && null !== QQ && ("earth" === QQ.type || Object.entries(QQ).every((QQ => {
        let [WQ, XQ] = QQ;
        return "type" === WQ || TQ(XQ)
      })))
    }
    const sQ = /(?:src|image|image-set|cross-fade)\(/i,
      FQ = /url\(\s*(?:"(?<doubleQuoted>[^"]*)"|'(?<singleQuoted>[^']*)'|(?<unquoted>[^"'()\s]*))\s*\)/gi,
      PQ = /url\(/gi,
      gQ = ["https://bloxd.invalid/", "http://bloxd.invalid/"],
      JQ = new Set([...gQ.map((QQ => new URL(QQ).origin)), "https://fonts.gstatic.com"]),
      rQ = new Set(["https://i.imgur.com/MEcjBFQ.png"]);

    function IQ(QQ) {
      var WQ, XQ;
      if (QQ.includes("\\") || sQ.test(QQ)) return !0;
      const wQ = [...QQ.matchAll(FQ)];
      return wQ.length !== (null !== (WQ = null === (XQ = QQ.match(PQ)) || void 0 === XQ ? void 0 : XQ.length) && void 0 !== WQ ? WQ : 0) || !wQ.every((QQ => {
        var WQ, XQ, wQ;
        let {
          groups: qQ
        } = QQ;
        return function(QQ) {
          try {
            return gQ.every((WQ => {
              const XQ = new URL(QQ, WQ);
              return "data:" === XQ.protocol || JQ.has(XQ.origin) || rQ.has(XQ.href)
            }))
          } catch {
            return !1
          }
        }(null !== (WQ = null !== (XQ = null !== (wQ = null === qQ || void 0 === qQ ? void 0 : qQ.doubleQuoted) && void 0 !== wQ ? wQ : null === qQ || void 0 === qQ ? void 0 : qQ.singleQuoted) && void 0 !== XQ ? XQ : null === qQ || void 0 === qQ ? void 0 : qQ.unquoted) && void 0 !== WQ ? WQ : "")
      }))
    }

    function jQ(QQ) {
      var WQ, XQ, wQ, qQ, sQ, FQ, PQ;
      const gQ = [...Object.values(null !== (WQ = QQ.textureOverrides) && void 0 !== WQ ? WQ : {}), ...Object.values(null !== (XQ = QQ.modelOverrides) && void 0 !== XQ ? XQ : {})],
        JQ = [...Object.values(null !== (wQ = null === (qQ = QQ.customCss) || void 0 === qQ ? void 0 : qQ.fontFaces) && void 0 !== wQ ? wQ : {}), ...Object.values(null !== (sQ = null === (FQ = QQ.customCss) || void 0 === FQ ? void 0 : FQ.classStyles) && void 0 !== sQ ? sQ : {})].flatMap((QQ => Object.values(null !== QQ && void 0 !== QQ ? QQ : {})));
      return !gQ.every(TQ) || !Object.values(null !== (PQ = QQ.skyBoxes) && void 0 !== PQ ? PQ : {}).every(zQ) || JQ.some((QQ => "string" === typeof QQ && IQ(QQ)))
    }

    function BQ(QQ, WQ) {
      if (null === QQ || "player" === WQ || !jQ(QQ)) return QQ;
      const XQ = {
        ...QQ
      };
      return QQ.textureOverrides && (XQ.textureOverrides = VQ(QQ.textureOverrides, TQ, "texture")), QQ.modelOverrides && (XQ.modelOverrides = VQ(QQ.modelOverrides, TQ, "model")), QQ.skyBoxes && (XQ.skyBoxes = VQ(QQ.skyBoxes, zQ, "sky")), QQ.customCss && (XQ.customCss = function(QQ) {
        const WQ = QQ => VQ(QQ, (QQ => "string" === typeof QQ && !IQ(QQ)), "CSS"),
          {
            fontFaces: XQ,
            classStyles: wQ
          } = yQ(QQ) ? QQ : {},
          qQ = {};
        for (const [TQ, zQ] of Object.entries(yQ(wQ) ? wQ : {})) qQ[TQ] = WQ(zQ);
        return {
          fontFaces: (Array.isArray(XQ) ? XQ : []).map(WQ),
          classStyles: qQ
        }
      }(QQ.customCss)), XQ
    }

    function yQ(QQ) {
      return "object" === typeof QQ && null !== QQ && !Array.isArray(QQ)
    }

    function VQ(QQ, WQ, XQ) {
      const wQ = Object.entries(yQ(QQ) ? QQ : {}),
        qQ = wQ.filter((QQ => {
          let [, XQ] = QQ;
          return !WQ(XQ)
        }));
      if (qQ.length > 0) {
        const QQ = qQ.map((QQ => {
          let [WQ] = QQ;
          return WQ
        }));
        console.warn(`Ignoring a custom game texture pack's ${XQ} files that name another site: ${QQ.join(", ")}`)
      }
      return Object.fromEntries(wQ.filter((QQ => {
        let [, XQ] = QQ;
        return WQ(XQ)
      })))
    }
  },
  51250: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => jQ,
      f: () => pQ,
      j: () => DQ
    });
    var wQ = XQ(1049),
      qQ = XQ(2226),
      TQ = XQ(3514),
      zQ = XQ(3523),
      sQ = XQ(34587),
      FQ = XQ(34583),
      PQ = XQ(51248),
      gQ = XQ(41202),
      JQ = XQ(41178),
      rQ = XQ(5404);
    const IQ = {
      pack: null,
      gameSource: null
    };
    class jQ {
      constructor(QQ) {
        this.host = QQ, this.ready = void 0, this.state = IQ, this.playerPack = null, this.onGamePack = !1, this.confirmGamePack = null, this.skippedKey = null, this.ownAnnouncements = new Set, this.listeners = new Map, this.ownListeners = new Set, this.changes = 0, this.picks = 0, this.playerPicked = !1, this.ownChanges = 0, this.zj = !1, (0, zQ.n)(), this.ready = this.readStored()
      }
      readyWithin(QQ) {
        return Promise.race([this.ready, new Promise((WQ => {
          setTimeout(WQ, QQ)
        }))])
      }
      current() {
        return this.state
      }
      playerState() {
        return {
          pack: this.playerPack,
          gameSource: null
        }
      }
      onPlayerPackChange(QQ) {
        return this.ownListeners.add(QQ), () => {
          this.ownListeners.delete(QQ)
        }
      }
      isUsingCustomGameTexturePack(QQ) {
        return (0, JQ.g)(this.state, QQ)
      }
      setGamePackConfirm(QQ) {
        this.confirmGamePack = QQ
      }
      subscribe(QQ) {
        return this.listeners.set(QQ, null), this.ready.then((() => {
          this.deliver(QQ)
        })), () => {
          this.listeners.delete(QQ)
        }
      }
      async setPlayerPack(QQ) {
        const WQ = yQ(QQ) ? null : QQ;
        this.picks++, this.playerPicked = !0, this.ownChanges++, this.setOwn(WQ), this.change({
          pack: WQ,
          gameSource: null
        }, !1);
        const XQ = await this.storePlayerPack(WQ);
        return XQ && this.announce(), XQ
      }
      async packForGame(QQ, WQ, XQ) {
        await this.readyWithin(Math.max(0, (null !== XQ && void 0 !== XQ ? XQ : performance.now() + gQ.c) - performance.now()));
        const qQ = ++this.picks,
          TQ = (0, wQ.k)(QQ) ? (0, wQ.n)(QQ) : null;
        if (null === TQ) return void this.usePlayerPack();
        let zQ;
        const sQ = function(QQ) {
          let WQ;
          const XQ = new Promise(((XQ, wQ) => {
            WQ = setTimeout((() => {
              wQ(new Error(`no answer in ${QQ} ms`))
            }), QQ)
          }));
          return XQ.catch((() => {})), {
            passed: XQ,
            clear: () => {
              clearTimeout(WQ)
            }
          }
        }(2e4);
        try {
          const QQ = await Promise.race([WQ.packKey(TQ), sQ.passed]);
          if (null !== QQ && this.onGamePack && this.state.gameSource === QQ) return;
          if (null !== QQ && QQ === this.skippedKey) return void(this.zj || this.picks !== qQ || this.usePlayerPack());
          zQ = null === QQ ? null : await Promise.race([BQ(TQ, QQ, WQ), sQ.passed])
        } catch (JQ) {
          const QQ = !this.zj && this.picks === qQ && this.holdsOtherGamePack(TQ);
          return this.host.warn(`the texture pack of ${TQ} didn't load: ${QQ?"the player's own shows":"the pack in play stays"}`, JQ), void(QQ && this.usePlayerPack())
        } finally {
          sQ.clear()
        }
        if (this.zj || this.picks !== qQ) return;
        null !== zQ && (0, PQ.j)(zQ.pack) && (this.host.warn(`the texture pack of ${TQ} names files on other sites: the player's own shows`, null), zQ = null);
        const FQ = null === zQ || await this.confirmed(zQ.pack, TQ) ? null : zQ.key;
        this.zj || this.picks !== qQ || (null !== FQ && (this.skippedKey = FQ, zQ = null), null === zQ ? this.usePlayerPack() : (this.onGamePack = !0, this.change({
          pack: zQ.pack,
          gameSource: zQ.key
        }, !0)))
      }
      endGamePack() {
        this.picks++, this.usePlayerPack()
      }
      holdsOtherGamePack(QQ) {
        return this.onGamePack && "" !== this.state.gameSource && !this.isUsingCustomGameTexturePack(QQ)
      }
      async confirmed(QQ, WQ) {
        const XQ = this.confirmGamePack;
        if (null === XQ) return !0;
        try {
          return await XQ(QQ, WQ)
        } catch (wQ) {
          return this.host.warn(`the texture pack prompt of ${WQ} failed: the pack is skipped`, wQ), !1
        }
      }
      async readPlayerPack() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (null !== QQ && this.ownAnnouncements.delete(QQ)) return;
        await this.ready;
        const WQ = this.ownChanges;
        let XQ;
        try {
          XQ = await this.host.store.getItem(zQ.c, !0)
        } catch (qQ) {
          return void this.host.warn("the stored texture pack didn't read again: the pack in play stays", qQ)
        }
        if (this.zj || this.ownChanges !== WQ) return;
        const wQ = VQ(XQ);
        (0, rQ.b)(wQ, this.playerPack) || (this.ownChanges++, this.setOwn(wQ), this.onGamePack || this.change({
          pack: wQ,
          gameSource: null
        }, !1))
      }
      joinedWithout() {
        this.picks++
      }
      dispose() {
        this.zj = !0, this.listeners.clear()
      }
      async readStored() {
        const {
          store: QQ,
          warn: WQ
        } = this.host;
        await Promise.all([!1 === this.host.oneShot ? void 0 : (0, FQ.e)(QQ, !0, (QQ => {
          WQ("the custom game's texture pack wasn't removed from storage", QQ)
        })).then((QQ => {
          this.takeOneShot(QQ)
        }), (QQ => {
          WQ("the custom game's texture pack didn't read: the player's own shows", QQ)
        })), QQ.getItem(zQ.c, !0).then((QQ => {
          this.takeStoredOwn(QQ)
        }), (QQ => {
          WQ("the stored texture pack didn't read: the default pack shows", QQ), this.takeStoredOwn(null)
        }))]), this.update()
      }
      takeOneShot(QQ) {
        var WQ;
        null === QQ || this.zj || this.changes > 0 || this.picks > 0 || ((0, PQ.j)(QQ.pack) ? this.host.warn("the custom game's texture pack names files on other sites: the player's own shows", null) : (this.onGamePack = !0, this.state = {
          pack: QQ.pack,
          gameSource: null !== (WQ = QQ.source) && void 0 !== WQ ? WQ : ""
        }))
      }
      takeStoredOwn(QQ) {
        if (this.playerPicked || this.zj) return;
        if (this.ownChanges++, this.setOwn(VQ(QQ)), this.onGamePack) return;
        const WQ = {
          pack: this.playerPack,
          gameSource: null
        };
        0 === this.changes ? this.state = WQ : this.change(WQ, !1)
      }
      async update() {
        const QQ = this.playerPack,
          WQ = null === QQ || void 0 === QQ ? void 0 : QQ.metaData.id;
        if (!QQ || !WQ || !this.host.fetchLatest || WQ === qQ.c || WQ === qQ.i.CUSTOM) return;
        const XQ = qQ.m[WQ];
        if (void 0 === XQ || QQ.metaData.version >= XQ) return;
        let wQ;
        try {
          wQ = VQ(await this.host.fetchLatest(WQ))
        } catch (TQ) {
          return void this.host.warn(`texture pack ${WQ} didn't update to version ${XQ}`, TQ)
        }
        null === wQ || this.zj || this.playerPack !== QQ || (this.ownChanges++, this.setOwn(wQ), this.onGamePack || this.change({
          pack: wQ,
          gameSource: null
        }, !1), await this.storePlayerPack(wQ) && this.announce())
      }
      announce() {
        const QQ = (0, sQ.c)();
        null !== QQ && this.ownAnnouncements.add(QQ)
      }
      setOwn(QQ) {
        this.playerPack = QQ;
        for (const XQ of [...this.ownListeners]) try {
          XQ()
        } catch (WQ) {
          this.host.warn("a texture pack listener threw", WQ)
        }
      }
      usePlayerPack() {
        this.onGamePack && this.change({
          pack: this.playerPack,
          gameSource: null
        }, !1)
      }
      async storePlayerPack(QQ) {
        try {
          return null === QQ ? (await this.host.store.removeItem(zQ.c), !0) : await this.host.store.setItem(zQ.c, QQ)
        } catch (WQ) {
          return this.host.warn("the texture pack wasn't stored: it shows until the page reloads", WQ), !1
        }
      }
      change(QQ, WQ) {
        if (!this.zj) {
          this.changes++, this.onGamePack = WQ, this.state = QQ;
          for (const QQ of [...this.listeners.keys()]) this.deliver(QQ)
        }
      }
      deliver(QQ) {
        if (!this.zj && this.listeners.has(QQ) && this.listeners.get(QQ) !== this.state) {
          this.listeners.set(QQ, this.state);
          try {
            QQ(this.state)
          } catch (WQ) {
            this.host.warn("a texture pack listener threw", WQ)
          }
        }
      }
    }
    async function BQ(QQ, WQ, XQ) {
      const wQ = (0, FQ.b)(await XQ.fetchPack(WQ));
      if (null !== wQ) return {
        pack: wQ,
        key: WQ
      };
      const qQ = await XQ.packKey(QQ);
      if (null === qQ) return null;
      const TQ = (0, FQ.b)(await XQ.fetchPack(qQ));
      if (null === TQ) throw new Error(`no texture pack at ${qQ}`);
      return {
        pack: TQ,
        key: qQ
      }
    }

    function yQ(QQ) {
      return null === QQ || QQ.metaData.id === qQ.c
    }

    function VQ(QQ) {
      const WQ = (0, FQ.b)(QQ);
      return yQ(WQ) ? null : WQ
    }
    async function DQ(QQ) {
      let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TQ.c;
      if (null === QQ.pack) return null;
      const {
        packAssets: wQ
      } = await Promise.all([XQ.e(212), XQ.e(47)]).then((() => XQ(61761)));
      return wQ(QQ, WQ)
    }

    function pQ(QQ) {
      const WQ = (0, zQ.s)();
      return null === WQ ? () => {} : (WQ.onmessage = WQ => {
        QQ.readPlayerPack((0, sQ.d)(WQ.data))
      }, () => {
        WQ.close()
      })
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);