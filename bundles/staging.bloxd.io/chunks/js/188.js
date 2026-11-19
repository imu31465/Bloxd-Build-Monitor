export const id = 188;
export const ids = [188];
export const modules = {
  8796: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => zT,
      g: () => kT
    });
    var iT = IT(2822);

    function zT() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const TT = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const oT = new BroadcastChannel(iT.l);
        oT.postMessage({
          stored: TT
        }), oT.close()
      } catch {
        return null
      }
      return TT
    }

    function kT(TT) {
      const oT = "object" === typeof TT && null !== TT ? TT.stored : null;
      return "string" === typeof oT ? oT : null
    }
  },
  8789: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => WT,
      g: () => zT,
      i: () => kT
    });
    var iT = IT(2822);
    async function zT(TT, oT, IT) {
      let zT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const kT = WT(await TT.getItem(iT.h, oT));
      if (null === kT || zT()) return null;
      const XT = await TT.getItem(iT.j, oT);
      return zT() ? null : (await async function(TT) {
        await Promise.all([TT.removeItem(iT.h), TT.removeItem(iT.j)])
      }(TT).catch(IT), {
        pack: kT,
        source: "string" === typeof XT ? XT : null
      })
    }

    function kT(TT) {
      return (0, iT.s)() ? Promise.resolve(null) : zT(TT, !1, (TT => {
        console.error("Error removing temporary texture pack: ", TT)
      }), iT.s)
    }

    function WT(TT) {
      if ("object" !== typeof TT || null === TT) return null;
      const oT = TT.metaData;
      return "object" !== typeof oT || null === oT || "string" !== typeof oT.id ? null : TT
    }
  },
  42138: (TT, oT, IT) => {
    function iT(TT) {
      return null === TT.gameSource ? "player" : "customGame"
    }
    IT.d(oT, {
      c: () => kT,
      e: () => KT,
      f: () => cT,
      i: () => iT
    });
    const zT = /^data:[\w.+/-]*;base64,[A-Za-z0-9+/]*={0,2}$/;

    function kT(TT) {
      return "" === TT || "string" === typeof TT && zT.test(TT)
    }

    function WT(TT) {
      return "object" === typeof TT && null !== TT && ("earth" === TT.type || Object.entries(TT).every((TT => {
        let [oT, IT] = TT;
        return "type" === oT || kT(IT)
      })))
    }
    const XT = /(?:src|image|image-set|cross-fade)\(/i,
      BT = /url\(\s*(?:"(?<doubleQuoted>[^"]*)"|'(?<singleQuoted>[^']*)'|(?<unquoted>[^"'()\s]*))\s*\)/gi,
      FT = /url\(/gi,
      ST = ["https://bloxd.invalid/", "http://bloxd.invalid/"],
      DT = new Set([...ST.map((TT => new URL(TT).origin)), "https://fonts.gstatic.com"]),
      LT = new Set(["https://i.imgur.com/MEcjBFQ.png"]);

    function xT(TT) {
      var oT, IT;
      if (TT.includes("\\") || XT.test(TT)) return !0;
      const iT = [...TT.matchAll(BT)];
      return iT.length !== (null !== (oT = null === (IT = TT.match(FT)) || void 0 === IT ? void 0 : IT.length) && void 0 !== oT ? oT : 0) || !iT.every((TT => {
        var oT, IT, iT;
        let {
          groups: zT
        } = TT;
        return function(TT) {
          try {
            return ST.every((oT => {
              const IT = new URL(TT, oT);
              return "data:" === IT.protocol || DT.has(IT.origin) || LT.has(IT.href)
            }))
          } catch {
            return !1
          }
        }(null !== (oT = null !== (IT = null !== (iT = null === zT || void 0 === zT ? void 0 : zT.doubleQuoted) && void 0 !== iT ? iT : null === zT || void 0 === zT ? void 0 : zT.singleQuoted) && void 0 !== IT ? IT : null === zT || void 0 === zT ? void 0 : zT.unquoted) && void 0 !== oT ? oT : "")
      }))
    }

    function cT(TT) {
      var oT, IT, iT, zT, XT, BT, FT;
      const ST = [...Object.values(null !== (oT = TT.textureOverrides) && void 0 !== oT ? oT : {}), ...Object.values(null !== (IT = TT.modelOverrides) && void 0 !== IT ? IT : {})],
        DT = [...Object.values(null !== (iT = null === (zT = TT.customCss) || void 0 === zT ? void 0 : zT.fontFaces) && void 0 !== iT ? iT : {}), ...Object.values(null !== (XT = null === (BT = TT.customCss) || void 0 === BT ? void 0 : BT.classStyles) && void 0 !== XT ? XT : {})].flatMap((TT => Object.values(null !== TT && void 0 !== TT ? TT : {})));
      return !ST.every(kT) || !Object.values(null !== (FT = TT.skyBoxes) && void 0 !== FT ? FT : {}).every(WT) || DT.some((TT => "string" === typeof TT && xT(TT)))
    }

    function KT(TT, oT) {
      if (null === TT || "player" === oT || !cT(TT)) return TT;
      const IT = {
        ...TT
      };
      return TT.textureOverrides && (IT.textureOverrides = rT(TT.textureOverrides, kT, "texture")), TT.modelOverrides && (IT.modelOverrides = rT(TT.modelOverrides, kT, "model")), TT.skyBoxes && (IT.skyBoxes = rT(TT.skyBoxes, WT, "sky")), TT.customCss && (IT.customCss = function(TT) {
        const oT = TT => rT(TT, (TT => "string" === typeof TT && !xT(TT)), "CSS"),
          {
            fontFaces: IT,
            classStyles: iT
          } = MT(TT) ? TT : {},
          zT = {};
        for (const [kT, WT] of Object.entries(MT(iT) ? iT : {})) zT[kT] = oT(WT);
        return {
          fontFaces: (Array.isArray(IT) ? IT : []).map(oT),
          classStyles: zT
        }
      }(TT.customCss)), IT
    }

    function MT(TT) {
      return "object" === typeof TT && null !== TT && !Array.isArray(TT)
    }

    function rT(TT, oT, IT) {
      const iT = Object.entries(MT(TT) ? TT : {}),
        zT = iT.filter((TT => {
          let [, IT] = TT;
          return !oT(IT)
        }));
      if (zT.length > 0) {
        const TT = zT.map((TT => {
          let [oT] = TT;
          return oT
        }));
        console.warn(`Ignoring a custom game texture pack's ${IT} files that name another site: ${TT.join(", ")}`)
      }
      return Object.fromEntries(iT.filter((TT => {
        let [, IT] = TT;
        return oT(IT)
      })))
    }
  },
  42141: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => cT,
      h: () => gT,
      j: () => AT
    });
    var iT = IT(1007),
      zT = IT(2715),
      kT = IT(2814),
      WT = IT(2822),
      XT = IT(8796),
      BT = IT(8789),
      FT = IT(42138),
      ST = IT(39834),
      DT = IT(39821),
      LT = IT(4523);
    const xT = {
      pack: null,
      gameSource: null
    };
    class cT {
      constructor(TT) {
        this.host = TT, this.ready = void 0, this.state = xT, this.playerPack = null, this.onGamePack = !1, this.confirmGamePack = null, this.skippedKey = null, this.ownAnnouncements = new Set, this.listeners = new Map, this.ownListeners = new Set, this.changes = 0, this.picks = 0, this.playerPicked = !1, this.ownChanges = 0, this.Ec = !1, (0, WT.n)(), this.ready = this.readStored()
      }
      readyWithin(TT) {
        return Promise.race([this.ready, new Promise((oT => {
          setTimeout(oT, TT)
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
        return (0, DT.c)(this.state, TT)
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
        const oT = MT(TT) ? null : TT;
        this.picks++, this.playerPicked = !0, this.ownChanges++, this.setOwn(oT), this.change({
          pack: oT,
          gameSource: null
        }, !1);
        const IT = await this.storePlayerPack(oT);
        return IT && this.announce(), IT
      }
      async packForGame(TT, oT, IT) {
        await this.readyWithin(Math.max(0, (null !== IT && void 0 !== IT ? IT : performance.now() + ST.d) - performance.now()));
        const zT = ++this.picks,
          kT = (0, iT.m)(TT) ? (0, iT.p)(TT) : null;
        if (null === kT) return void this.usePlayerPack();
        let WT;
        const XT = function(TT) {
          let oT;
          const IT = new Promise(((IT, iT) => {
            oT = setTimeout((() => {
              iT(new Error(`no answer in ${TT} ms`))
            }), TT)
          }));
          return IT.catch((() => {})), {
            passed: IT,
            clear: () => {
              clearTimeout(oT)
            }
          }
        }(2e4);
        try {
          const TT = await Promise.race([oT.packKey(kT), XT.passed]);
          if (null !== TT && this.onGamePack && this.state.gameSource === TT) return;
          if (null !== TT && TT === this.skippedKey) return void(this.Ec || this.picks !== zT || this.usePlayerPack());
          WT = null === TT ? null : await Promise.race([KT(kT, TT, oT), XT.passed])
        } catch (DT) {
          const TT = !this.Ec && this.picks === zT && this.holdsOtherGamePack(kT);
          return this.host.warn(`the texture pack of ${kT} didn't load: ${TT?"the player's own shows":"the pack in play stays"}`, DT), void(TT && this.usePlayerPack())
        } finally {
          XT.clear()
        }
        if (this.Ec || this.picks !== zT) return;
        null !== WT && (0, FT.f)(WT.pack) && (this.host.warn(`the texture pack of ${kT} names files on other sites: the player's own shows`, null), WT = null);
        const BT = null === WT || await this.confirmed(WT.pack, kT) ? null : WT.key;
        this.Ec || this.picks !== zT || (null !== BT && (this.skippedKey = BT, WT = null), null === WT ? this.usePlayerPack() : (this.onGamePack = !0, this.change({
          pack: WT.pack,
          gameSource: WT.key
        }, !0)))
      }
      endGamePack() {
        this.picks++, this.usePlayerPack()
      }
      holdsOtherGamePack(TT) {
        return this.onGamePack && "" !== this.state.gameSource && !this.isUsingCustomGameTexturePack(TT)
      }
      async confirmed(TT, oT) {
        const IT = this.confirmGamePack;
        if (null === IT) return !0;
        try {
          return await IT(TT, oT)
        } catch (iT) {
          return this.host.warn(`the texture pack prompt of ${oT} failed: the pack is skipped`, iT), !1
        }
      }
      async readPlayerPack() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (null !== TT && this.ownAnnouncements.delete(TT)) return;
        await this.ready;
        const oT = this.ownChanges;
        let IT;
        try {
          IT = await this.host.store.getItem(WT.e, !0)
        } catch (zT) {
          return void this.host.warn("the stored texture pack didn't read again: the pack in play stays", zT)
        }
        if (this.Ec || this.ownChanges !== oT) return;
        const iT = rT(IT);
        (0, LT.c)(iT, this.playerPack) || (this.ownChanges++, this.setOwn(iT), this.onGamePack || this.change({
          pack: iT,
          gameSource: null
        }, !1))
      }
      joinedWithout() {
        this.picks++
      }
      dispose() {
        this.Ec = !0, this.listeners.clear()
      }
      async readStored() {
        const {
          store: TT,
          warn: oT
        } = this.host;
        await Promise.all([!1 === this.host.oneShot ? void 0 : (0, BT.g)(TT, !0, (TT => {
          oT("the custom game's texture pack wasn't removed from storage", TT)
        })).then((TT => {
          this.takeOneShot(TT)
        }), (TT => {
          oT("the custom game's texture pack didn't read: the player's own shows", TT)
        })), TT.getItem(WT.e, !0).then((TT => {
          this.takeStoredOwn(TT)
        }), (TT => {
          oT("the stored texture pack didn't read: the default pack shows", TT), this.takeStoredOwn(null)
        }))]), this.update()
      }
      takeOneShot(TT) {
        var oT;
        null === TT || this.Ec || this.changes > 0 || this.picks > 0 || ((0, FT.f)(TT.pack) ? this.host.warn("the custom game's texture pack names files on other sites: the player's own shows", null) : (this.onGamePack = !0, this.state = {
          pack: TT.pack,
          gameSource: null !== (oT = TT.source) && void 0 !== oT ? oT : ""
        }))
      }
      takeStoredOwn(TT) {
        if (this.playerPicked || this.Ec) return;
        if (this.ownChanges++, this.setOwn(rT(TT)), this.onGamePack) return;
        const oT = {
          pack: this.playerPack,
          gameSource: null
        };
        0 === this.changes ? this.state = oT : this.change(oT, !1)
      }
      async update() {
        const TT = this.playerPack,
          oT = null === TT || void 0 === TT ? void 0 : TT.metaData.id;
        if (!TT || !oT || !this.host.fetchLatest || oT === zT.d || oT === zT.n.CUSTOM) return;
        const IT = zT.p[oT];
        if (void 0 === IT || TT.metaData.version >= IT) return;
        let iT;
        try {
          iT = rT(await this.host.fetchLatest(oT))
        } catch (kT) {
          return void this.host.warn(`texture pack ${oT} didn't update to version ${IT}`, kT)
        }
        null === iT || this.Ec || this.playerPack !== TT || (this.ownChanges++, this.setOwn(iT), this.onGamePack || this.change({
          pack: iT,
          gameSource: null
        }, !1), await this.storePlayerPack(iT) && this.announce())
      }
      announce() {
        const TT = (0, XT.d)();
        null !== TT && this.ownAnnouncements.add(TT)
      }
      setOwn(TT) {
        this.playerPack = TT;
        for (const IT of [...this.ownListeners]) try {
          IT()
        } catch (oT) {
          this.host.warn("a texture pack listener threw", oT)
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
          return null === TT ? (await this.host.store.removeItem(WT.e), !0) : await this.host.store.setItem(WT.e, TT)
        } catch (oT) {
          return this.host.warn("the texture pack wasn't stored: it shows until the page reloads", oT), !1
        }
      }
      change(TT, oT) {
        if (!this.Ec) {
          this.changes++, this.onGamePack = oT, this.state = TT;
          for (const TT of [...this.listeners.keys()]) this.deliver(TT)
        }
      }
      deliver(TT) {
        if (!this.Ec && this.listeners.has(TT) && this.listeners.get(TT) !== this.state) {
          this.listeners.set(TT, this.state);
          try {
            TT(this.state)
          } catch (oT) {
            this.host.warn("a texture pack listener threw", oT)
          }
        }
      }
    }
    async function KT(TT, oT, IT) {
      const iT = (0, BT.c)(await IT.fetchPack(oT));
      if (null !== iT) return {
        pack: iT,
        key: oT
      };
      const zT = await IT.packKey(TT);
      if (null === zT) return null;
      const kT = (0, BT.c)(await IT.fetchPack(zT));
      if (null === kT) throw new Error(`no texture pack at ${zT}`);
      return {
        pack: kT,
        key: zT
      }
    }

    function MT(TT) {
      return null === TT || TT.metaData.id === zT.d
    }

    function rT(TT) {
      const oT = (0, BT.c)(TT);
      return MT(oT) ? null : oT
    }
    async function AT(TT) {
      let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kT.e;
      if (null === TT.pack) return null;
      const {
        packAssets: iT
      } = await Promise.all([IT.e(190), IT.e(44)]).then((() => IT(60359)));
      return iT(TT, oT)
    }

    function gT(TT) {
      const oT = (0, WT.v)();
      return null === oT ? () => {} : (oT.onmessage = oT => {
        TT.readPlayerPack((0, XT.g)(oT.data))
      }, () => {
        oT.close()
      })
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);