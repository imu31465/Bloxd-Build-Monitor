export const id = 204;
export const ids = [204];
export const modules = {
  34339: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => zT,
      e: () => MT
    });
    var WT = mT(3368);

    function zT() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const TT = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const UT = new BroadcastChannel(WT.m);
        UT.postMessage({
          stored: TT
        }), UT.close()
      } catch {
        return null
      }
      return TT
    }

    function MT(TT) {
      const UT = "object" === typeof TT && null !== TT ? TT.stored : null;
      return "string" === typeof UT ? UT : null
    }
  },
  34337: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => gT,
      h: () => zT,
      j: () => MT
    });
    var WT = mT(3368);
    async function zT(TT, UT, mT) {
      let zT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const MT = gT(await TT.getItem(WT.f, UT));
      if (null === MT || zT()) return null;
      const nT = await TT.getItem(WT.i, UT);
      return zT() ? null : (await async function(TT) {
        await Promise.all([TT.removeItem(WT.f), TT.removeItem(WT.i)])
      }(TT).catch(mT), {
        pack: MT,
        source: "string" === typeof nT ? nT : null
      })
    }

    function MT(TT) {
      return (0, WT.t)() ? Promise.resolve(null) : zT(TT, !1, (TT => {
        console.error("Error removing temporary texture pack: ", TT)
      }), WT.t)
    }

    function gT(TT) {
      if ("object" !== typeof TT || null === TT) return null;
      const UT = TT.metaData;
      return "object" !== typeof UT || null === UT || "string" !== typeof UT.id ? null : TT
    }
  },
  51139: (TT, UT, mT) => {
    function WT(TT) {
      return null === TT.gameSource ? "player" : "customGame"
    }
    mT.d(UT, {
      c: () => MT,
      g: () => ZT,
      i: () => BT,
      j: () => WT
    });
    const zT = /^data:[\w.+/-]*;base64,[A-Za-z0-9+/]*={0,2}$/;

    function MT(TT) {
      return "" === TT || "string" === typeof TT && zT.test(TT)
    }

    function gT(TT) {
      return "object" === typeof TT && null !== TT && ("earth" === TT.type || Object.entries(TT).every((TT => {
        let [UT, mT] = TT;
        return "type" === UT || MT(mT)
      })))
    }
    const nT = /(?:src|image|image-set|cross-fade)\(/i,
      HT = /url\(\s*(?:"(?<doubleQuoted>[^"]*)"|'(?<singleQuoted>[^']*)'|(?<unquoted>[^"'()\s]*))\s*\)/gi,
      kT = /url\(/gi,
      jT = ["https://bloxd.invalid/", "http://bloxd.invalid/"],
      lT = new Set([...jT.map((TT => new URL(TT).origin)), "https://fonts.gstatic.com"]),
      LT = new Set(["https://i.imgur.com/MEcjBFQ.png"]);

    function pT(TT) {
      var UT, mT;
      if (TT.includes("\\") || nT.test(TT)) return !0;
      const WT = [...TT.matchAll(HT)];
      return WT.length !== (null !== (UT = null === (mT = TT.match(kT)) || void 0 === mT ? void 0 : mT.length) && void 0 !== UT ? UT : 0) || !WT.every((TT => {
        var UT, mT, WT;
        let {
          groups: zT
        } = TT;
        return function(TT) {
          try {
            return jT.every((UT => {
              const mT = new URL(TT, UT);
              return "data:" === mT.protocol || lT.has(mT.origin) || LT.has(mT.href)
            }))
          } catch {
            return !1
          }
        }(null !== (UT = null !== (mT = null !== (WT = null === zT || void 0 === zT ? void 0 : zT.doubleQuoted) && void 0 !== WT ? WT : null === zT || void 0 === zT ? void 0 : zT.singleQuoted) && void 0 !== mT ? mT : null === zT || void 0 === zT ? void 0 : zT.unquoted) && void 0 !== UT ? UT : "")
      }))
    }

    function BT(TT) {
      var UT, mT, WT, zT, nT, HT, kT;
      const jT = [...Object.values(null !== (UT = TT.textureOverrides) && void 0 !== UT ? UT : {}), ...Object.values(null !== (mT = TT.modelOverrides) && void 0 !== mT ? mT : {})],
        lT = [...Object.values(null !== (WT = null === (zT = TT.customCss) || void 0 === zT ? void 0 : zT.fontFaces) && void 0 !== WT ? WT : {}), ...Object.values(null !== (nT = null === (HT = TT.customCss) || void 0 === HT ? void 0 : HT.classStyles) && void 0 !== nT ? nT : {})].flatMap((TT => Object.values(null !== TT && void 0 !== TT ? TT : {})));
      return !jT.every(MT) || !Object.values(null !== (kT = TT.skyBoxes) && void 0 !== kT ? kT : {}).every(gT) || lT.some((TT => "string" === typeof TT && pT(TT)))
    }

    function ZT(TT, UT) {
      if (null === TT || "player" === UT || !BT(TT)) return TT;
      const mT = {
        ...TT
      };
      return TT.textureOverrides && (mT.textureOverrides = vT(TT.textureOverrides, MT, "texture")), TT.modelOverrides && (mT.modelOverrides = vT(TT.modelOverrides, MT, "model")), TT.skyBoxes && (mT.skyBoxes = vT(TT.skyBoxes, gT, "sky")), TT.customCss && (mT.customCss = function(TT) {
        const UT = TT => vT(TT, (TT => "string" === typeof TT && !pT(TT)), "CSS"),
          {
            fontFaces: mT,
            classStyles: WT
          } = cT(TT) ? TT : {},
          zT = {};
        for (const [MT, gT] of Object.entries(cT(WT) ? WT : {})) zT[MT] = UT(gT);
        return {
          fontFaces: (Array.isArray(mT) ? mT : []).map(UT),
          classStyles: zT
        }
      }(TT.customCss)), mT
    }

    function cT(TT) {
      return "object" === typeof TT && null !== TT && !Array.isArray(TT)
    }

    function vT(TT, UT, mT) {
      const WT = Object.entries(cT(TT) ? TT : {}),
        zT = WT.filter((TT => {
          let [, mT] = TT;
          return !UT(mT)
        }));
      if (zT.length > 0) {
        const TT = zT.map((TT => {
          let [UT] = TT;
          return UT
        }));
        console.warn(`Ignoring a custom game texture pack's ${mT} files that name another site: ${TT.join(", ")}`)
      }
      return Object.fromEntries(WT.filter((TT => {
        let [, mT] = TT;
        return UT(mT)
      })))
    }
  },
  51142: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => BT,
      e: () => qT,
      i: () => fT
    });
    var WT = mT(1089),
      zT = mT(2273),
      MT = mT(3357),
      gT = mT(3368),
      nT = mT(34339),
      HT = mT(34337),
      kT = mT(51139),
      jT = mT(41127),
      lT = mT(41104),
      LT = mT(5158);
    const pT = {
      pack: null,
      gameSource: null
    };
    class BT {
      constructor(TT) {
        this.host = TT, this.ready = void 0, this.state = pT, this.playerPack = null, this.onGamePack = !1, this.confirmGamePack = null, this.skippedKey = null, this.ownAnnouncements = new Set, this.listeners = new Map, this.ownListeners = new Set, this.changes = 0, this.picks = 0, this.playerPicked = !1, this.ownChanges = 0, this.kB = !1, (0, gT.n)(), this.ready = this.readStored()
      }
      readyWithin(TT) {
        return Promise.race([this.ready, new Promise((UT => {
          setTimeout(UT, TT)
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
        return (0, lT.f)(this.state, TT)
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
        const UT = cT(TT) ? null : TT;
        this.picks++, this.playerPicked = !0, this.ownChanges++, this.setOwn(UT), this.change({
          pack: UT,
          gameSource: null
        }, !1);
        const mT = await this.storePlayerPack(UT);
        return mT && this.announce(), mT
      }
      async packForGame(TT, UT, mT) {
        await this.readyWithin(Math.max(0, (null !== mT && void 0 !== mT ? mT : performance.now() + jT.c) - performance.now()));
        const zT = ++this.picks,
          MT = (0, WT.k)(TT) ? (0, WT.q)(TT) : null;
        if (null === MT) return void this.usePlayerPack();
        let gT;
        const nT = function(TT) {
          let UT;
          const mT = new Promise(((mT, WT) => {
            UT = setTimeout((() => {
              WT(new Error(`no answer in ${TT} ms`))
            }), TT)
          }));
          return mT.catch((() => {})), {
            passed: mT,
            clear: () => {
              clearTimeout(UT)
            }
          }
        }(2e4);
        try {
          const TT = await Promise.race([UT.packKey(MT), nT.passed]);
          if (null !== TT && this.onGamePack && this.state.gameSource === TT) return;
          if (null !== TT && TT === this.skippedKey) return void(this.kB || this.picks !== zT || this.usePlayerPack());
          gT = null === TT ? null : await Promise.race([ZT(MT, TT, UT), nT.passed])
        } catch (lT) {
          const TT = !this.kB && this.picks === zT && this.holdsOtherGamePack(MT);
          return this.host.warn(`the texture pack of ${MT} didn't load: ${TT?"the player's own shows":"the pack in play stays"}`, lT), void(TT && this.usePlayerPack())
        } finally {
          nT.clear()
        }
        if (this.kB || this.picks !== zT) return;
        null !== gT && (0, kT.i)(gT.pack) && (this.host.warn(`the texture pack of ${MT} names files on other sites: the player's own shows`, null), gT = null);
        const HT = null === gT || await this.confirmed(gT.pack, MT) ? null : gT.key;
        this.kB || this.picks !== zT || (null !== HT && (this.skippedKey = HT, gT = null), null === gT ? this.usePlayerPack() : (this.onGamePack = !0, this.change({
          pack: gT.pack,
          gameSource: gT.key
        }, !0)))
      }
      endGamePack() {
        this.picks++, this.usePlayerPack()
      }
      holdsOtherGamePack(TT) {
        return this.onGamePack && "" !== this.state.gameSource && !this.isUsingCustomGameTexturePack(TT)
      }
      async confirmed(TT, UT) {
        const mT = this.confirmGamePack;
        if (null === mT) return !0;
        try {
          return await mT(TT, UT)
        } catch (WT) {
          return this.host.warn(`the texture pack prompt of ${UT} failed: the pack is skipped`, WT), !1
        }
      }
      async readPlayerPack() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (null !== TT && this.ownAnnouncements.delete(TT)) return;
        await this.ready;
        const UT = this.ownChanges;
        let mT;
        try {
          mT = await this.host.store.getItem(gT.d, !0)
        } catch (zT) {
          return void this.host.warn("the stored texture pack didn't read again: the pack in play stays", zT)
        }
        if (this.kB || this.ownChanges !== UT) return;
        const WT = vT(mT);
        (0, LT.c)(WT, this.playerPack) || (this.ownChanges++, this.setOwn(WT), this.onGamePack || this.change({
          pack: WT,
          gameSource: null
        }, !1))
      }
      joinedWithout() {
        this.picks++
      }
      dispose() {
        this.kB = !0, this.listeners.clear()
      }
      async readStored() {
        const {
          store: TT,
          warn: UT
        } = this.host;
        await Promise.all([!1 === this.host.oneShot ? void 0 : (0, HT.h)(TT, !0, (TT => {
          UT("the custom game's texture pack wasn't removed from storage", TT)
        })).then((TT => {
          this.takeOneShot(TT)
        }), (TT => {
          UT("the custom game's texture pack didn't read: the player's own shows", TT)
        })), TT.getItem(gT.d, !0).then((TT => {
          this.takeStoredOwn(TT)
        }), (TT => {
          UT("the stored texture pack didn't read: the default pack shows", TT), this.takeStoredOwn(null)
        }))]), this.update()
      }
      takeOneShot(TT) {
        var UT;
        null === TT || this.kB || this.changes > 0 || this.picks > 0 || ((0, kT.i)(TT.pack) ? this.host.warn("the custom game's texture pack names files on other sites: the player's own shows", null) : (this.onGamePack = !0, this.state = {
          pack: TT.pack,
          gameSource: null !== (UT = TT.source) && void 0 !== UT ? UT : ""
        }))
      }
      takeStoredOwn(TT) {
        if (this.playerPicked || this.kB) return;
        if (this.ownChanges++, this.setOwn(vT(TT)), this.onGamePack) return;
        const UT = {
          pack: this.playerPack,
          gameSource: null
        };
        0 === this.changes ? this.state = UT : this.change(UT, !1)
      }
      async update() {
        const TT = this.playerPack,
          UT = null === TT || void 0 === TT ? void 0 : TT.metaData.id;
        if (!TT || !UT || !this.host.fetchLatest || UT === zT.e || UT === zT.n.CUSTOM) return;
        const mT = zT.q[UT];
        if (void 0 === mT || TT.metaData.version >= mT) return;
        let WT;
        try {
          WT = vT(await this.host.fetchLatest(UT))
        } catch (MT) {
          return void this.host.warn(`texture pack ${UT} didn't update to version ${mT}`, MT)
        }
        null === WT || this.kB || this.playerPack !== TT || (this.ownChanges++, this.setOwn(WT), this.onGamePack || this.change({
          pack: WT,
          gameSource: null
        }, !1), await this.storePlayerPack(WT) && this.announce())
      }
      announce() {
        const TT = (0, nT.b)();
        null !== TT && this.ownAnnouncements.add(TT)
      }
      setOwn(TT) {
        this.playerPack = TT;
        for (const mT of [...this.ownListeners]) try {
          mT()
        } catch (UT) {
          this.host.warn("a texture pack listener threw", UT)
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
          return null === TT ? (await this.host.store.removeItem(gT.d), !0) : await this.host.store.setItem(gT.d, TT)
        } catch (UT) {
          return this.host.warn("the texture pack wasn't stored: it shows until the page reloads", UT), !1
        }
      }
      change(TT, UT) {
        if (!this.kB) {
          this.changes++, this.onGamePack = UT, this.state = TT;
          for (const TT of [...this.listeners.keys()]) this.deliver(TT)
        }
      }
      deliver(TT) {
        if (!this.kB && this.listeners.has(TT) && this.listeners.get(TT) !== this.state) {
          this.listeners.set(TT, this.state);
          try {
            TT(this.state)
          } catch (UT) {
            this.host.warn("a texture pack listener threw", UT)
          }
        }
      }
    }
    async function ZT(TT, UT, mT) {
      const WT = (0, HT.d)(await mT.fetchPack(UT));
      if (null !== WT) return {
        pack: WT,
        key: UT
      };
      const zT = await mT.packKey(TT);
      if (null === zT) return null;
      const MT = (0, HT.d)(await mT.fetchPack(zT));
      if (null === MT) throw new Error(`no texture pack at ${zT}`);
      return {
        pack: MT,
        key: zT
      }
    }

    function cT(TT) {
      return null === TT || TT.metaData.id === zT.e
    }

    function vT(TT) {
      const UT = (0, HT.d)(TT);
      return cT(UT) ? null : UT
    }
    async function fT(TT) {
      let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : MT.c;
      if (null === TT.pack) return null;
      const {
        packAssets: WT
      } = await Promise.all([mT.e(206), mT.e(45)]).then((() => mT(61354)));
      return WT(TT, UT)
    }

    function qT(TT) {
      const UT = (0, gT.v)();
      return null === UT ? () => {} : (UT.onmessage = UT => {
        TT.readPlayerPack((0, nT.e)(UT.data))
      }, () => {
        UT.close()
      })
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);