export const id = 194;
export const ids = [194];
export const modules = {
  9170: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => qQ,
      f: () => oQ
    });
    var LQ = wQ(3139);

    function qQ() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const QQ = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const FQ = new BroadcastChannel(LQ.f);
        FQ.postMessage({
          stored: QQ
        }), FQ.close()
      } catch {
        return null
      }
      return QQ
    }

    function oQ(QQ) {
      const FQ = "object" === typeof QQ && null !== QQ ? QQ.stored : null;
      return "string" === typeof FQ ? FQ : null
    }
  },
  9165: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => DQ,
      f: () => qQ,
      h: () => oQ
    });
    var LQ = wQ(3139);
    async function qQ(QQ, FQ, wQ) {
      let qQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const oQ = DQ(await QQ.getItem(LQ.c, FQ));
      if (null === oQ || qQ()) return null;
      const kQ = await QQ.getItem(LQ.d, FQ);
      return qQ() ? null : (await async function(QQ) {
        await Promise.all([QQ.removeItem(LQ.c), QQ.removeItem(LQ.d)])
      }(QQ).catch(wQ), {
        pack: oQ,
        source: "string" === typeof kQ ? kQ : null
      })
    }

    function oQ(QQ) {
      return (0, LQ.m)() ? Promise.resolve(null) : qQ(QQ, !1, (QQ => {
        console.error("Error removing temporary texture pack: ", QQ)
      }), LQ.m)
    }

    function DQ(QQ) {
      if ("object" !== typeof QQ || null === QQ) return null;
      const FQ = QQ.metaData;
      return "object" !== typeof FQ || null === FQ || "string" !== typeof FQ.id ? null : QQ
    }
  },
  42741: (QQ, FQ, wQ) => {
    function LQ(QQ) {
      return null === QQ.gameSource ? "player" : "customGame"
    }
    wQ.d(FQ, {
      d: () => oQ,
      e: () => AQ,
      f: () => xQ,
      i: () => LQ
    });
    const qQ = /^data:[\w.+/-]*;base64,[A-Za-z0-9+/]*={0,2}$/;

    function oQ(QQ) {
      return "" === QQ || "string" === typeof QQ && qQ.test(QQ)
    }

    function DQ(QQ) {
      return "object" === typeof QQ && null !== QQ && ("earth" === QQ.type || Object.entries(QQ).every((QQ => {
        let [FQ, wQ] = QQ;
        return "type" === FQ || oQ(wQ)
      })))
    }
    const kQ = /(?:src|image|image-set|cross-fade)\(/i,
      vQ = /url\(\s*(?:"(?<doubleQuoted>[^"]*)"|'(?<singleQuoted>[^']*)'|(?<unquoted>[^"'()\s]*))\s*\)/gi,
      mQ = /url\(/gi,
      uQ = ["https://bloxd.invalid/", "http://bloxd.invalid/"],
      HQ = new Set([...uQ.map((QQ => new URL(QQ).origin)), "https://fonts.gstatic.com"]),
      bQ = new Set(["https://i.imgur.com/MEcjBFQ.png"]);

    function YQ(QQ) {
      var FQ, wQ;
      if (QQ.includes("\\") || kQ.test(QQ)) return !0;
      const LQ = [...QQ.matchAll(vQ)];
      return LQ.length !== (null !== (FQ = null === (wQ = QQ.match(mQ)) || void 0 === wQ ? void 0 : wQ.length) && void 0 !== FQ ? FQ : 0) || !LQ.every((QQ => {
        var FQ, wQ, LQ;
        let {
          groups: qQ
        } = QQ;
        return function(QQ) {
          try {
            return uQ.every((FQ => {
              const wQ = new URL(QQ, FQ);
              return "data:" === wQ.protocol || HQ.has(wQ.origin) || bQ.has(wQ.href)
            }))
          } catch {
            return !1
          }
        }(null !== (FQ = null !== (wQ = null !== (LQ = null === qQ || void 0 === qQ ? void 0 : qQ.doubleQuoted) && void 0 !== LQ ? LQ : null === qQ || void 0 === qQ ? void 0 : qQ.singleQuoted) && void 0 !== wQ ? wQ : null === qQ || void 0 === qQ ? void 0 : qQ.unquoted) && void 0 !== FQ ? FQ : "")
      }))
    }

    function xQ(QQ) {
      var FQ, wQ, LQ, qQ, kQ, vQ, mQ;
      const uQ = [...Object.values(null !== (FQ = QQ.textureOverrides) && void 0 !== FQ ? FQ : {}), ...Object.values(null !== (wQ = QQ.modelOverrides) && void 0 !== wQ ? wQ : {})],
        HQ = [...Object.values(null !== (LQ = null === (qQ = QQ.customCss) || void 0 === qQ ? void 0 : qQ.fontFaces) && void 0 !== LQ ? LQ : {}), ...Object.values(null !== (kQ = null === (vQ = QQ.customCss) || void 0 === vQ ? void 0 : vQ.classStyles) && void 0 !== kQ ? kQ : {})].flatMap((QQ => Object.values(null !== QQ && void 0 !== QQ ? QQ : {})));
      return !uQ.every(oQ) || !Object.values(null !== (mQ = QQ.skyBoxes) && void 0 !== mQ ? mQ : {}).every(DQ) || HQ.some((QQ => "string" === typeof QQ && YQ(QQ)))
    }

    function AQ(QQ, FQ) {
      if (null === QQ || "player" === FQ || !xQ(QQ)) return QQ;
      const wQ = {
        ...QQ
      };
      return QQ.textureOverrides && (wQ.textureOverrides = eQ(QQ.textureOverrides, oQ, "texture")), QQ.modelOverrides && (wQ.modelOverrides = eQ(QQ.modelOverrides, oQ, "model")), QQ.skyBoxes && (wQ.skyBoxes = eQ(QQ.skyBoxes, DQ, "sky")), QQ.customCss && (wQ.customCss = function(QQ) {
        const FQ = QQ => eQ(QQ, (QQ => "string" === typeof QQ && !YQ(QQ)), "CSS"),
          {
            fontFaces: wQ,
            classStyles: LQ
          } = tQ(QQ) ? QQ : {},
          qQ = {};
        for (const [oQ, DQ] of Object.entries(tQ(LQ) ? LQ : {})) qQ[oQ] = FQ(DQ);
        return {
          fontFaces: (Array.isArray(wQ) ? wQ : []).map(FQ),
          classStyles: qQ
        }
      }(QQ.customCss)), wQ
    }

    function tQ(QQ) {
      return "object" === typeof QQ && null !== QQ && !Array.isArray(QQ)
    }

    function eQ(QQ, FQ, wQ) {
      const LQ = Object.entries(tQ(QQ) ? QQ : {}),
        qQ = LQ.filter((QQ => {
          let [, wQ] = QQ;
          return !FQ(wQ)
        }));
      if (qQ.length > 0) {
        const QQ = qQ.map((QQ => {
          let [FQ] = QQ;
          return FQ
        }));
        console.warn(`Ignoring a custom game texture pack's ${wQ} files that name another site: ${QQ.join(", ")}`)
      }
      return Object.fromEntries(LQ.filter((QQ => {
        let [, wQ] = QQ;
        return FQ(wQ)
      })))
    }
  },
  42750: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => xQ,
      g: () => GQ,
      k: () => MQ
    });
    var LQ = wQ(1038),
      qQ = wQ(3047),
      oQ = wQ(3126),
      DQ = wQ(3139),
      kQ = wQ(9170),
      vQ = wQ(9165),
      mQ = wQ(42741),
      uQ = wQ(40461),
      HQ = wQ(40447),
      bQ = wQ(4892);
    const YQ = {
      pack: null,
      gameSource: null
    };
    class xQ {
      constructor(QQ) {
        this.host = QQ, this.ready = void 0, this.state = YQ, this.playerPack = null, this.onGamePack = !1, this.confirmGamePack = null, this.skippedKey = null, this.ownAnnouncements = new Set, this.listeners = new Map, this.ownListeners = new Set, this.changes = 0, this.picks = 0, this.playerPicked = !1, this.ownChanges = 0, this.kx = !1, (0, DQ.h)(), this.ready = this.readStored()
      }
      readyWithin(QQ) {
        return Promise.race([this.ready, new Promise((FQ => {
          setTimeout(FQ, QQ)
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
        return (0, HQ.e)(this.state, QQ)
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
        const FQ = tQ(QQ) ? null : QQ;
        this.picks++, this.playerPicked = !0, this.ownChanges++, this.setOwn(FQ), this.change({
          pack: FQ,
          gameSource: null
        }, !1);
        const wQ = await this.storePlayerPack(FQ);
        return wQ && this.announce(), wQ
      }
      async packForGame(QQ, FQ, wQ) {
        await this.readyWithin(Math.max(0, (null !== wQ && void 0 !== wQ ? wQ : performance.now() + uQ.e) - performance.now()));
        const qQ = ++this.picks,
          oQ = (0, LQ.f)(QQ) ? (0, LQ.l)(QQ) : null;
        if (null === oQ) return void this.usePlayerPack();
        let DQ;
        const kQ = function(QQ) {
          let FQ;
          const wQ = new Promise(((wQ, LQ) => {
            FQ = setTimeout((() => {
              LQ(new Error(`no answer in ${QQ} ms`))
            }), QQ)
          }));
          return wQ.catch((() => {})), {
            passed: wQ,
            clear: () => {
              clearTimeout(FQ)
            }
          }
        }(2e4);
        try {
          const QQ = await Promise.race([FQ.packKey(oQ), kQ.passed]);
          if (null !== QQ && this.onGamePack && this.state.gameSource === QQ) return;
          if (null !== QQ && QQ === this.skippedKey) return void(this.kx || this.picks !== qQ || this.usePlayerPack());
          DQ = null === QQ ? null : await Promise.race([AQ(oQ, QQ, FQ), kQ.passed])
        } catch (HQ) {
          const QQ = !this.kx && this.picks === qQ && this.holdsOtherGamePack(oQ);
          return this.host.warn(`the texture pack of ${oQ} didn't load: ${QQ?"the player's own shows":"the pack in play stays"}`, HQ), void(QQ && this.usePlayerPack())
        } finally {
          kQ.clear()
        }
        if (this.kx || this.picks !== qQ) return;
        null !== DQ && (0, mQ.f)(DQ.pack) && (this.host.warn(`the texture pack of ${oQ} names files on other sites: the player's own shows`, null), DQ = null);
        const vQ = null === DQ || await this.confirmed(DQ.pack, oQ) ? null : DQ.key;
        this.kx || this.picks !== qQ || (null !== vQ && (this.skippedKey = vQ, DQ = null), null === DQ ? this.usePlayerPack() : (this.onGamePack = !0, this.change({
          pack: DQ.pack,
          gameSource: DQ.key
        }, !0)))
      }
      endGamePack() {
        this.picks++, this.usePlayerPack()
      }
      holdsOtherGamePack(QQ) {
        return this.onGamePack && "" !== this.state.gameSource && !this.isUsingCustomGameTexturePack(QQ)
      }
      async confirmed(QQ, FQ) {
        const wQ = this.confirmGamePack;
        if (null === wQ) return !0;
        try {
          return await wQ(QQ, FQ)
        } catch (LQ) {
          return this.host.warn(`the texture pack prompt of ${FQ} failed: the pack is skipped`, LQ), !1
        }
      }
      async readPlayerPack() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (null !== QQ && this.ownAnnouncements.delete(QQ)) return;
        await this.ready;
        const FQ = this.ownChanges;
        let wQ;
        try {
          wQ = await this.host.store.getItem(DQ.b, !0)
        } catch (qQ) {
          return void this.host.warn("the stored texture pack didn't read again: the pack in play stays", qQ)
        }
        if (this.kx || this.ownChanges !== FQ) return;
        const LQ = eQ(wQ);
        (0, bQ.d)(LQ, this.playerPack) || (this.ownChanges++, this.setOwn(LQ), this.onGamePack || this.change({
          pack: LQ,
          gameSource: null
        }, !1))
      }
      joinedWithout() {
        this.picks++
      }
      dispose() {
        this.kx = !0, this.listeners.clear()
      }
      async readStored() {
        const {
          store: QQ,
          warn: FQ
        } = this.host;
        await Promise.all([!1 === this.host.oneShot ? void 0 : (0, vQ.f)(QQ, !0, (QQ => {
          FQ("the custom game's texture pack wasn't removed from storage", QQ)
        })).then((QQ => {
          this.takeOneShot(QQ)
        }), (QQ => {
          FQ("the custom game's texture pack didn't read: the player's own shows", QQ)
        })), QQ.getItem(DQ.b, !0).then((QQ => {
          this.takeStoredOwn(QQ)
        }), (QQ => {
          FQ("the stored texture pack didn't read: the default pack shows", QQ), this.takeStoredOwn(null)
        }))]), this.update()
      }
      takeOneShot(QQ) {
        var FQ;
        null === QQ || this.kx || this.changes > 0 || this.picks > 0 || ((0, mQ.f)(QQ.pack) ? this.host.warn("the custom game's texture pack names files on other sites: the player's own shows", null) : (this.onGamePack = !0, this.state = {
          pack: QQ.pack,
          gameSource: null !== (FQ = QQ.source) && void 0 !== FQ ? FQ : ""
        }))
      }
      takeStoredOwn(QQ) {
        if (this.playerPicked || this.kx) return;
        if (this.ownChanges++, this.setOwn(eQ(QQ)), this.onGamePack) return;
        const FQ = {
          pack: this.playerPack,
          gameSource: null
        };
        0 === this.changes ? this.state = FQ : this.change(FQ, !1)
      }
      async update() {
        const QQ = this.playerPack,
          FQ = null === QQ || void 0 === QQ ? void 0 : QQ.metaData.id;
        if (!QQ || !FQ || !this.host.fetchLatest || FQ === qQ.d || FQ === qQ.s.CUSTOM) return;
        const wQ = qQ.w[FQ];
        if (void 0 === wQ || QQ.metaData.version >= wQ) return;
        let LQ;
        try {
          LQ = eQ(await this.host.fetchLatest(FQ))
        } catch (oQ) {
          return void this.host.warn(`texture pack ${FQ} didn't update to version ${wQ}`, oQ)
        }
        null === LQ || this.kx || this.playerPack !== QQ || (this.ownChanges++, this.setOwn(LQ), this.onGamePack || this.change({
          pack: LQ,
          gameSource: null
        }, !1), await this.storePlayerPack(LQ) && this.announce())
      }
      announce() {
        const QQ = (0, kQ.e)();
        null !== QQ && this.ownAnnouncements.add(QQ)
      }
      setOwn(QQ) {
        this.playerPack = QQ;
        for (const wQ of [...this.ownListeners]) try {
          wQ()
        } catch (FQ) {
          this.host.warn("a texture pack listener threw", FQ)
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
          return null === QQ ? (await this.host.store.removeItem(DQ.b), !0) : await this.host.store.setItem(DQ.b, QQ)
        } catch (FQ) {
          return this.host.warn("the texture pack wasn't stored: it shows until the page reloads", FQ), !1
        }
      }
      change(QQ, FQ) {
        if (!this.kx) {
          this.changes++, this.onGamePack = FQ, this.state = QQ;
          for (const QQ of [...this.listeners.keys()]) this.deliver(QQ)
        }
      }
      deliver(QQ) {
        if (!this.kx && this.listeners.has(QQ) && this.listeners.get(QQ) !== this.state) {
          this.listeners.set(QQ, this.state);
          try {
            QQ(this.state)
          } catch (FQ) {
            this.host.warn("a texture pack listener threw", FQ)
          }
        }
      }
    }
    async function AQ(QQ, FQ, wQ) {
      const LQ = (0, vQ.c)(await wQ.fetchPack(FQ));
      if (null !== LQ) return {
        pack: LQ,
        key: FQ
      };
      const qQ = await wQ.packKey(QQ);
      if (null === qQ) return null;
      const oQ = (0, vQ.c)(await wQ.fetchPack(qQ));
      if (null === oQ) throw new Error(`no texture pack at ${qQ}`);
      return {
        pack: oQ,
        key: qQ
      }
    }

    function tQ(QQ) {
      return null === QQ || QQ.metaData.id === qQ.d
    }

    function eQ(QQ) {
      const FQ = (0, vQ.c)(QQ);
      return tQ(FQ) ? null : FQ
    }
    async function MQ(QQ) {
      let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oQ.e;
      if (null === QQ.pack) return null;
      const {
        packAssets: LQ
      } = await Promise.all([wQ.e(196), wQ.e(44)]).then((() => wQ(60996)));
      return LQ(QQ, FQ)
    }

    function GQ(QQ) {
      const FQ = (0, DQ.q)();
      return null === FQ ? () => {} : (FQ.onmessage = FQ => {
        QQ.readPlayerPack((0, kQ.f)(FQ.data))
      }, () => {
        FQ.close()
      })
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);