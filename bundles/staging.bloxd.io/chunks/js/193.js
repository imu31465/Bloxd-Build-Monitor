export const id = 193;
export const ids = [193];
export const modules = {
  9420: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => MT,
      f: () => KT
    });
    var lT = cT(3198);

    function MT() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const TT = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const kT = new BroadcastChannel(lT.l);
        kT.postMessage({
          stored: TT
        }), kT.close()
      } catch {
        return null
      }
      return TT
    }

    function KT(TT) {
      const kT = "object" === typeof TT && null !== TT ? TT.stored : null;
      return "string" === typeof kT ? kT : null
    }
  },
  9415: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => OT,
      f: () => MT,
      g: () => KT
    });
    var lT = cT(3198);
    async function MT(TT, kT, cT) {
      let MT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const KT = OT(await TT.getItem(lT.h, kT));
      if (null === KT || MT()) return null;
      const yT = await TT.getItem(lT.k, kT);
      return MT() ? null : (await async function(TT) {
        await Promise.all([TT.removeItem(lT.h), TT.removeItem(lT.k)])
      }(TT).catch(cT), {
        pack: KT,
        source: "string" === typeof yT ? yT : null
      })
    }

    function KT(TT) {
      return (0, lT.x)() ? Promise.resolve(null) : MT(TT, !1, (TT => {
        console.error("Error removing temporary texture pack: ", TT)
      }), lT.x)
    }

    function OT(TT) {
      if ("object" !== typeof TT || null === TT) return null;
      const kT = TT.metaData;
      return "object" !== typeof kT || null === kT || "string" !== typeof kT.id ? null : TT
    }
  },
  42833: (TT, kT, cT) => {
    function lT(TT) {
      return null === TT.gameSource ? "player" : "customGame"
    }
    cT.d(kT, {
      c: () => KT,
      f: () => tT,
      g: () => vT,
      k: () => lT
    });
    const MT = /^data:[\w.+/-]*;base64,[A-Za-z0-9+/]*={0,2}$/;

    function KT(TT) {
      return "" === TT || "string" === typeof TT && MT.test(TT)
    }

    function OT(TT) {
      return "object" === typeof TT && null !== TT && ("earth" === TT.type || Object.entries(TT).every((TT => {
        let [kT, cT] = TT;
        return "type" === kT || KT(cT)
      })))
    }
    const yT = /(?:src|image|image-set|cross-fade)\(/i,
      fT = /url\(\s*(?:"(?<doubleQuoted>[^"]*)"|'(?<singleQuoted>[^']*)'|(?<unquoted>[^"'()\s]*))\s*\)/gi,
      xT = /url\(/gi,
      IT = ["https://bloxd.invalid/", "http://bloxd.invalid/"],
      AT = new Set([...IT.map((TT => new URL(TT).origin)), "https://fonts.gstatic.com"]),
      CT = new Set(["https://i.imgur.com/MEcjBFQ.png"]);

    function jT(TT) {
      var kT, cT;
      if (TT.includes("\\") || yT.test(TT)) return !0;
      const lT = [...TT.matchAll(fT)];
      return lT.length !== (null !== (kT = null === (cT = TT.match(xT)) || void 0 === cT ? void 0 : cT.length) && void 0 !== kT ? kT : 0) || !lT.every((TT => {
        var kT, cT, lT;
        let {
          groups: MT
        } = TT;
        return function(TT) {
          try {
            return IT.every((kT => {
              const cT = new URL(TT, kT);
              return "data:" === cT.protocol || AT.has(cT.origin) || CT.has(cT.href)
            }))
          } catch {
            return !1
          }
        }(null !== (kT = null !== (cT = null !== (lT = null === MT || void 0 === MT ? void 0 : MT.doubleQuoted) && void 0 !== lT ? lT : null === MT || void 0 === MT ? void 0 : MT.singleQuoted) && void 0 !== cT ? cT : null === MT || void 0 === MT ? void 0 : MT.unquoted) && void 0 !== kT ? kT : "")
      }))
    }

    function vT(TT) {
      var kT, cT, lT, MT, yT, fT, xT;
      const IT = [...Object.values(null !== (kT = TT.textureOverrides) && void 0 !== kT ? kT : {}), ...Object.values(null !== (cT = TT.modelOverrides) && void 0 !== cT ? cT : {})],
        AT = [...Object.values(null !== (lT = null === (MT = TT.customCss) || void 0 === MT ? void 0 : MT.fontFaces) && void 0 !== lT ? lT : {}), ...Object.values(null !== (yT = null === (fT = TT.customCss) || void 0 === fT ? void 0 : fT.classStyles) && void 0 !== yT ? yT : {})].flatMap((TT => Object.values(null !== TT && void 0 !== TT ? TT : {})));
      return !IT.every(KT) || !Object.values(null !== (xT = TT.skyBoxes) && void 0 !== xT ? xT : {}).every(OT) || AT.some((TT => "string" === typeof TT && jT(TT)))
    }

    function tT(TT, kT) {
      if (null === TT || "player" === kT || !vT(TT)) return TT;
      const cT = {
        ...TT
      };
      return TT.textureOverrides && (cT.textureOverrides = NT(TT.textureOverrides, KT, "texture")), TT.modelOverrides && (cT.modelOverrides = NT(TT.modelOverrides, KT, "model")), TT.skyBoxes && (cT.skyBoxes = NT(TT.skyBoxes, OT, "sky")), TT.customCss && (cT.customCss = function(TT) {
        const kT = TT => NT(TT, (TT => "string" === typeof TT && !jT(TT)), "CSS"),
          {
            fontFaces: cT,
            classStyles: lT
          } = hT(TT) ? TT : {},
          MT = {};
        for (const [KT, OT] of Object.entries(hT(lT) ? lT : {})) MT[KT] = kT(OT);
        return {
          fontFaces: (Array.isArray(cT) ? cT : []).map(kT),
          classStyles: MT
        }
      }(TT.customCss)), cT
    }

    function hT(TT) {
      return "object" === typeof TT && null !== TT && !Array.isArray(TT)
    }

    function NT(TT, kT, cT) {
      const lT = Object.entries(hT(TT) ? TT : {}),
        MT = lT.filter((TT => {
          let [, cT] = TT;
          return !kT(cT)
        }));
      if (MT.length > 0) {
        const TT = MT.map((TT => {
          let [kT] = TT;
          return kT
        }));
        console.warn(`Ignoring a custom game texture pack's ${cT} files that name another site: ${TT.join(", ")}`)
      }
      return Object.fromEntries(lT.filter((TT => {
        let [, cT] = TT;
        return kT(cT)
      })))
    }
  },
  42840: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => vT,
      e: () => ST,
      g: () => QT
    });
    var lT = cT(1018),
      MT = cT(3092),
      KT = cT(3189),
      OT = cT(3198),
      yT = cT(9420),
      fT = cT(9415),
      xT = cT(42833),
      IT = cT(40669),
      AT = cT(40658),
      CT = cT(4991);
    const jT = {
      pack: null,
      gameSource: null
    };
    class vT {
      constructor(TT) {
        this.host = TT, this.ready = void 0, this.state = jT, this.playerPack = null, this.onGamePack = !1, this.confirmGamePack = null, this.skippedKey = null, this.ownAnnouncements = new Set, this.listeners = new Map, this.ownListeners = new Set, this.changes = 0, this.picks = 0, this.playerPicked = !1, this.ownChanges = 0, this.yv = !1, (0, OT.p)(), this.ready = this.readStored()
      }
      readyWithin(TT) {
        return Promise.race([this.ready, new Promise((kT => {
          setTimeout(kT, TT)
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
      onPlayerPackChange(TT) {
        return this.ownListeners.add(TT), () => {
          this.ownListeners.delete(TT)
        }
      }
      isUsingCustomGameTexturePack(TT) {
        return (0, AT.f)(this.state, TT)
      }
      setGamePackConfirm(TT) {
        this.confirmGamePack = TT
      }
      subscribe(TT) {
        return this.listeners.set(TT, null), this.ready.then((() => {
          this.deliver(TT)
        })), () => {
          this.listeners.delete(TT)
        }
      }
      async setPlayerPack(TT) {
        const kT = hT(TT) ? null : TT;
        this.picks++, this.playerPicked = !0, this.ownChanges++, this.setOwn(kT), this.change({
          pack: kT,
          gameSource: null
        }, !1);
        const cT = await this.storePlayerPack(kT);
        return cT && this.announce(), cT
      }
      async packForGame(TT, kT, cT) {
        await this.readyWithin(Math.max(0, (null !== cT && void 0 !== cT ? cT : performance.now() + IT.d) - performance.now()));
        const MT = ++this.picks,
          KT = (0, lT.j)(TT) ? (0, lT.n)(TT) : null;
        if (null === KT) return void this.usePlayerPack();
        let OT;
        const yT = function(TT) {
          let kT;
          const cT = new Promise(((cT, lT) => {
            kT = setTimeout((() => {
              lT(new Error(`no answer in ${TT} ms`))
            }), TT)
          }));
          return cT.catch((() => {})), {
            passed: cT,
            clear: () => {
              clearTimeout(kT)
            }
          }
        }(2e4);
        try {
          const TT = await Promise.race([kT.packKey(KT), yT.passed]);
          if (null !== TT && this.onGamePack && this.state.gameSource === TT) return;
          if (null !== TT && TT === this.skippedKey) return void(this.yv || this.picks !== MT || this.usePlayerPack());
          OT = null === TT ? null : await Promise.race([tT(KT, TT, kT), yT.passed])
        } catch (AT) {
          const TT = !this.yv && this.picks === MT && this.holdsOtherGamePack(KT);
          return this.host.warn(`the texture pack of ${KT} didn't load: ${TT?"the player's own shows":"the pack in play stays"}`, AT), void(TT && this.usePlayerPack())
        } finally {
          yT.clear()
        }
        if (this.yv || this.picks !== MT) return;
        null !== OT && (0, xT.g)(OT.pack) && (this.host.warn(`the texture pack of ${KT} names files on other sites: the player's own shows`, null), OT = null);
        const fT = null === OT || await this.confirmed(OT.pack, KT) ? null : OT.key;
        this.yv || this.picks !== MT || (null !== fT && (this.skippedKey = fT, OT = null), null === OT ? this.usePlayerPack() : (this.onGamePack = !0, this.change({
          pack: OT.pack,
          gameSource: OT.key
        }, !0)))
      }
      endGamePack() {
        this.picks++, this.usePlayerPack()
      }
      holdsOtherGamePack(TT) {
        return this.onGamePack && "" !== this.state.gameSource && !this.isUsingCustomGameTexturePack(TT)
      }
      async confirmed(TT, kT) {
        const cT = this.confirmGamePack;
        if (null === cT) return !0;
        try {
          return await cT(TT, kT)
        } catch (lT) {
          return this.host.warn(`the texture pack prompt of ${kT} failed: the pack is skipped`, lT), !1
        }
      }
      async readPlayerPack() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (null !== TT && this.ownAnnouncements.delete(TT)) return;
        await this.ready;
        const kT = this.ownChanges;
        let cT;
        try {
          cT = await this.host.store.getItem(OT.d, !0)
        } catch (MT) {
          return void this.host.warn("the stored texture pack didn't read again: the pack in play stays", MT)
        }
        if (this.yv || this.ownChanges !== kT) return;
        const lT = NT(cT);
        (0, CT.d)(lT, this.playerPack) || (this.ownChanges++, this.setOwn(lT), this.onGamePack || this.change({
          pack: lT,
          gameSource: null
        }, !1))
      }
      joinedWithout() {
        this.picks++
      }
      dispose() {
        this.yv = !0, this.listeners.clear()
      }
      async readStored() {
        const {
          store: TT,
          warn: kT
        } = this.host;
        await Promise.all([!1 === this.host.oneShot ? void 0 : (0, fT.f)(TT, !0, (TT => {
          kT("the custom game's texture pack wasn't removed from storage", TT)
        })).then((TT => {
          this.takeOneShot(TT)
        }), (TT => {
          kT("the custom game's texture pack didn't read: the player's own shows", TT)
        })), TT.getItem(OT.d, !0).then((TT => {
          this.takeStoredOwn(TT)
        }), (TT => {
          kT("the stored texture pack didn't read: the default pack shows", TT), this.takeStoredOwn(null)
        }))]), this.update()
      }
      takeOneShot(TT) {
        var kT;
        null === TT || this.yv || this.changes > 0 || this.picks > 0 || ((0, xT.g)(TT.pack) ? this.host.warn("the custom game's texture pack names files on other sites: the player's own shows", null) : (this.onGamePack = !0, this.state = {
          pack: TT.pack,
          gameSource: null !== (kT = TT.source) && void 0 !== kT ? kT : ""
        }))
      }
      takeStoredOwn(TT) {
        if (this.playerPicked || this.yv) return;
        if (this.ownChanges++, this.setOwn(NT(TT)), this.onGamePack) return;
        const kT = {
          pack: this.playerPack,
          gameSource: null
        };
        0 === this.changes ? this.state = kT : this.change(kT, !1)
      }
      async update() {
        const TT = this.playerPack,
          kT = null === TT || void 0 === TT ? void 0 : TT.metaData.id;
        if (!TT || !kT || !this.host.fetchLatest || kT === MT.d || kT === MT.r.CUSTOM) return;
        const cT = MT.s[kT];
        if (void 0 === cT || TT.metaData.version >= cT) return;
        let lT;
        try {
          lT = NT(await this.host.fetchLatest(kT))
        } catch (KT) {
          return void this.host.warn(`texture pack ${kT} didn't update to version ${cT}`, KT)
        }
        null === lT || this.yv || this.playerPack !== TT || (this.ownChanges++, this.setOwn(lT), this.onGamePack || this.change({
          pack: lT,
          gameSource: null
        }, !1), await this.storePlayerPack(lT) && this.announce())
      }
      announce() {
        const TT = (0, yT.d)();
        null !== TT && this.ownAnnouncements.add(TT)
      }
      setOwn(TT) {
        this.playerPack = TT;
        for (const cT of [...this.ownListeners]) try {
          cT()
        } catch (kT) {
          this.host.warn("a texture pack listener threw", kT)
        }
      }
      usePlayerPack() {
        this.onGamePack && this.change({
          pack: this.playerPack,
          gameSource: null
        }, !1)
      }
      async storePlayerPack(TT) {
        try {
          return null === TT ? (await this.host.store.removeItem(OT.d), !0) : await this.host.store.setItem(OT.d, TT)
        } catch (kT) {
          return this.host.warn("the texture pack wasn't stored: it shows until the page reloads", kT), !1
        }
      }
      change(TT, kT) {
        if (!this.yv) {
          this.changes++, this.onGamePack = kT, this.state = TT;
          for (const TT of [...this.listeners.keys()]) this.deliver(TT)
        }
      }
      deliver(TT) {
        if (!this.yv && this.listeners.has(TT) && this.listeners.get(TT) !== this.state) {
          this.listeners.set(TT, this.state);
          try {
            TT(this.state)
          } catch (kT) {
            this.host.warn("a texture pack listener threw", kT)
          }
        }
      }
    }
    async function tT(TT, kT, cT) {
      const lT = (0, fT.c)(await cT.fetchPack(kT));
      if (null !== lT) return {
        pack: lT,
        key: kT
      };
      const MT = await cT.packKey(TT);
      if (null === MT) return null;
      const KT = (0, fT.c)(await cT.fetchPack(MT));
      if (null === KT) throw new Error(`no texture pack at ${MT}`);
      return {
        pack: KT,
        key: MT
      }
    }

    function hT(TT) {
      return null === TT || TT.metaData.id === MT.d
    }

    function NT(TT) {
      const kT = (0, fT.c)(TT);
      return hT(kT) ? null : kT
    }
    async function QT(TT) {
      let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : KT.d;
      if (null === TT.pack) return null;
      const {
        packAssets: lT
      } = await Promise.all([cT.e(195), cT.e(44)]).then((() => cT(60885)));
      return lT(TT, kT)
    }

    function ST(TT) {
      const kT = (0, OT.z)();
      return null === kT ? () => {} : (kT.onmessage = kT => {
        TT.readPlayerPack((0, yT.f)(kT.data))
      }, () => {
        kT.close()
      })
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);