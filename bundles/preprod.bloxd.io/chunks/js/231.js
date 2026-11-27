export const id = 231;
export const ids = [231];
export const modules = {
  35307: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => EW,
      g: () => NW
    });
    var mW = OW(4431);

    function EW() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const WW = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const iW = new BroadcastChannel(mW.m);
        iW.postMessage({
          stored: WW
        }), iW.close()
      } catch {
        return null
      }
      return WW
    }

    function NW(WW) {
      const iW = "object" === typeof WW && null !== WW ? WW.stored : null;
      return "string" === typeof iW ? iW : null
    }
  },
  35303: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => PW,
      e: () => EW,
      h: () => NW
    });
    var mW = OW(4431);
    async function EW(WW, iW, OW) {
      let EW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const NW = PW(await WW.getItem(mW.h, iW));
      if (null === NW || EW()) return null;
      const LW = await WW.getItem(mW.l, iW);
      return EW() ? null : (await async function(WW) {
        await Promise.all([WW.removeItem(mW.h), WW.removeItem(mW.l)])
      }(WW).catch(OW), {
        pack: NW,
        source: "string" === typeof LW ? LW : null
      })
    }

    function NW(WW) {
      return (0, mW.t)() ? Promise.resolve(null) : EW(WW, !1, (WW => {
        console.error("Error removing temporary texture pack: ", WW)
      }), mW.t)
    }

    function PW(WW) {
      if ("object" !== typeof WW || null === WW) return null;
      const iW = WW.metaData;
      return "object" !== typeof iW || null === iW || "string" !== typeof iW.id ? null : WW
    }
  },
  54820: (WW, iW, OW) => {
    function mW(WW) {
      return null === WW.gameSource ? "player" : "customGame"
    }
    OW.d(iW, {
      b: () => NW,
      f: () => bW,
      j: () => AW,
      k: () => mW
    });
    const EW = /^data:[\w.+/-]*;base64,[A-Za-z0-9+/]*={0,2}$/;

    function NW(WW) {
      return "" === WW || "string" === typeof WW && EW.test(WW)
    }

    function PW(WW) {
      return "object" === typeof WW && null !== WW && ("earth" === WW.type || Object.entries(WW).every((WW => {
        let [iW, OW] = WW;
        return "type" === iW || NW(OW)
      })))
    }
    const LW = /(?:src|image|image-set|cross-fade)\(/i,
      cW = /url\(\s*(?:"(?<doubleQuoted>[^"]*)"|'(?<singleQuoted>[^']*)'|(?<unquoted>[^"'()\s]*))\s*\)/gi,
      wW = /url\(/gi,
      tW = ["https://bloxd.invalid/", "http://bloxd.invalid/"],
      ZW = new Set([...tW.map((WW => new URL(WW).origin)), "https://fonts.gstatic.com"]),
      xW = new Set(["https://i.imgur.com/MEcjBFQ.png"]);

    function lW(WW) {
      var iW, OW;
      if (WW.includes("\\") || LW.test(WW)) return !0;
      const mW = [...WW.matchAll(cW)];
      return mW.length !== (null !== (iW = null === (OW = WW.match(wW)) || void 0 === OW ? void 0 : OW.length) && void 0 !== iW ? iW : 0) || !mW.every((WW => {
        var iW, OW, mW;
        let {
          groups: EW
        } = WW;
        return function(WW) {
          try {
            return tW.every((iW => {
              const OW = new URL(WW, iW);
              return "data:" === OW.protocol || ZW.has(OW.origin) || xW.has(OW.href)
            }))
          } catch {
            return !1
          }
        }(null !== (iW = null !== (OW = null !== (mW = null === EW || void 0 === EW ? void 0 : EW.doubleQuoted) && void 0 !== mW ? mW : null === EW || void 0 === EW ? void 0 : EW.singleQuoted) && void 0 !== OW ? OW : null === EW || void 0 === EW ? void 0 : EW.unquoted) && void 0 !== iW ? iW : "")
      }))
    }

    function AW(WW) {
      var iW, OW, mW, EW, LW, cW, wW;
      const tW = [...Object.values(null !== (iW = WW.textureOverrides) && void 0 !== iW ? iW : {}), ...Object.values(null !== (OW = WW.modelOverrides) && void 0 !== OW ? OW : {})],
        ZW = [...Object.values(null !== (mW = null === (EW = WW.customCss) || void 0 === EW ? void 0 : EW.fontFaces) && void 0 !== mW ? mW : {}), ...Object.values(null !== (LW = null === (cW = WW.customCss) || void 0 === cW ? void 0 : cW.classStyles) && void 0 !== LW ? LW : {})].flatMap((WW => Object.values(null !== WW && void 0 !== WW ? WW : {})));
      return !tW.every(NW) || !Object.values(null !== (wW = WW.skyBoxes) && void 0 !== wW ? wW : {}).every(PW) || ZW.some((WW => "string" === typeof WW && lW(WW)))
    }

    function bW(WW, iW) {
      if (null === WW || "player" === iW || !AW(WW)) return WW;
      const OW = {
        ...WW
      };
      return WW.textureOverrides && (OW.textureOverrides = UW(WW.textureOverrides, NW, "texture")), WW.modelOverrides && (OW.modelOverrides = UW(WW.modelOverrides, NW, "model")), WW.skyBoxes && (OW.skyBoxes = UW(WW.skyBoxes, PW, "sky")), WW.customCss && (OW.customCss = function(WW) {
        const iW = WW => UW(WW, (WW => "string" === typeof WW && !lW(WW)), "CSS"),
          {
            fontFaces: OW,
            classStyles: mW
          } = jW(WW) ? WW : {},
          EW = {};
        for (const [NW, PW] of Object.entries(jW(mW) ? mW : {})) EW[NW] = iW(PW);
        return {
          fontFaces: (Array.isArray(OW) ? OW : []).map(iW),
          classStyles: EW
        }
      }(WW.customCss)), OW
    }

    function jW(WW) {
      return "object" === typeof WW && null !== WW && !Array.isArray(WW)
    }

    function UW(WW, iW, OW) {
      const mW = Object.entries(jW(WW) ? WW : {}),
        EW = mW.filter((WW => {
          let [, OW] = WW;
          return !iW(OW)
        }));
      if (EW.length > 0) {
        const WW = EW.map((WW => {
          let [iW] = WW;
          return iW
        }));
        console.warn(`Ignoring a custom game texture pack's ${OW} files that name another site: ${WW.join(", ")}`)
      }
      return Object.fromEntries(mW.filter((WW => {
        let [, OW] = WW;
        return iW(OW)
      })))
    }
  },
  54829: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => AW,
      g: () => sW,
      j: () => kW
    });
    var mW = OW(1052),
      EW = OW(2300),
      NW = OW(4426),
      PW = OW(4431),
      LW = OW(35307),
      cW = OW(35303),
      wW = OW(54820),
      tW = OW(42482),
      ZW = OW(42468),
      xW = OW(5984);
    const lW = {
      pack: null,
      gameSource: null
    };
    class AW {
      constructor(WW) {
        this.host = WW, this.ready = void 0, this.state = lW, this.playerPack = null, this.onGamePack = !1, this.confirmGamePack = null, this.skippedKey = null, this.ownAnnouncements = new Set, this.listeners = new Map, this.ownListeners = new Set, this.changes = 0, this.picks = 0, this.playerPicked = !1, this.ownChanges = 0, this.JA = !1, (0, PW.n)(), this.ready = this.readStored()
      }
      readyWithin(WW) {
        return Promise.race([this.ready, new Promise((iW => {
          setTimeout(iW, WW)
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
      onPlayerPackChange(WW) {
        return this.ownListeners.add(WW), () => {
          this.ownListeners.delete(WW)
        }
      }
      isUsingCustomGameTexturePack(WW) {
        return (0, ZW.f)(this.state, WW)
      }
      setGamePackConfirm(WW) {
        this.confirmGamePack = WW
      }
      subscribe(WW) {
        return this.listeners.set(WW, null), this.ready.then((() => {
          this.deliver(WW)
        })), () => {
          this.listeners.delete(WW)
        }
      }
      async setPlayerPack(WW) {
        const iW = jW(WW) ? null : WW;
        this.picks++, this.playerPicked = !0, this.ownChanges++, this.setOwn(iW), this.change({
          pack: iW,
          gameSource: null
        }, !1);
        const OW = await this.storePlayerPack(iW);
        return OW && this.announce(), OW
      }
      async packForGame(WW, iW, OW) {
        await this.readyWithin(Math.max(0, (null !== OW && void 0 !== OW ? OW : performance.now() + tW.c) - performance.now()));
        const EW = ++this.picks,
          NW = (0, mW.i)(WW) ? (0, mW.n)(WW) : null;
        if (null === NW) return void this.usePlayerPack();
        let PW;
        const LW = function(WW) {
          let iW;
          const OW = new Promise(((OW, mW) => {
            iW = setTimeout((() => {
              mW(new Error(`no answer in ${WW} ms`))
            }), WW)
          }));
          return OW.catch((() => {})), {
            passed: OW,
            clear: () => {
              clearTimeout(iW)
            }
          }
        }(2e4);
        try {
          const WW = await Promise.race([iW.packKey(NW), LW.passed]);
          if (null !== WW && this.onGamePack && this.state.gameSource === WW) return;
          if (null !== WW && WW === this.skippedKey) return void(this.JA || this.picks !== EW || this.usePlayerPack());
          PW = null === WW ? null : await Promise.race([bW(NW, WW, iW), LW.passed])
        } catch (ZW) {
          const WW = !this.JA && this.picks === EW && this.holdsOtherGamePack(NW);
          return this.host.warn(`the texture pack of ${NW} didn't load: ${WW?"the player's own shows":"the pack in play stays"}`, ZW), void(WW && this.usePlayerPack())
        } finally {
          LW.clear()
        }
        if (this.JA || this.picks !== EW) return;
        null !== PW && (0, wW.j)(PW.pack) && (this.host.warn(`the texture pack of ${NW} names files on other sites: the player's own shows`, null), PW = null);
        const cW = null === PW || await this.confirmed(PW.pack, NW) ? null : PW.key;
        this.JA || this.picks !== EW || (null !== cW && (this.skippedKey = cW, PW = null), null === PW ? this.usePlayerPack() : (this.onGamePack = !0, this.change({
          pack: PW.pack,
          gameSource: PW.key
        }, !0)))
      }
      endGamePack() {
        this.picks++, this.usePlayerPack()
      }
      holdsOtherGamePack(WW) {
        return this.onGamePack && "" !== this.state.gameSource && !this.isUsingCustomGameTexturePack(WW)
      }
      async confirmed(WW, iW) {
        const OW = this.confirmGamePack;
        if (null === OW) return !0;
        try {
          return await OW(WW, iW)
        } catch (mW) {
          return this.host.warn(`the texture pack prompt of ${iW} failed: the pack is skipped`, mW), !1
        }
      }
      async readPlayerPack() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (null !== WW && this.ownAnnouncements.delete(WW)) return;
        await this.ready;
        const iW = this.ownChanges;
        let OW;
        try {
          OW = await this.host.store.getItem(PW.d, !0)
        } catch (EW) {
          return void this.host.warn("the stored texture pack didn't read again: the pack in play stays", EW)
        }
        if (this.JA || this.ownChanges !== iW) return;
        const mW = UW(OW);
        (0, xW.c)(mW, this.playerPack) || (this.ownChanges++, this.setOwn(mW), this.onGamePack || this.change({
          pack: mW,
          gameSource: null
        }, !1))
      }
      joinedWithout() {
        this.picks++
      }
      dispose() {
        this.JA = !0, this.listeners.clear()
      }
      async readStored() {
        const {
          store: WW,
          warn: iW
        } = this.host;
        await Promise.all([!1 === this.host.oneShot ? void 0 : (0, cW.e)(WW, !0, (WW => {
          iW("the custom game's texture pack wasn't removed from storage", WW)
        })).then((WW => {
          this.takeOneShot(WW)
        }), (WW => {
          iW("the custom game's texture pack didn't read: the player's own shows", WW)
        })), WW.getItem(PW.d, !0).then((WW => {
          this.takeStoredOwn(WW)
        }), (WW => {
          iW("the stored texture pack didn't read: the default pack shows", WW), this.takeStoredOwn(null)
        }))]), this.update()
      }
      takeOneShot(WW) {
        var iW;
        null === WW || this.JA || this.changes > 0 || this.picks > 0 || ((0, wW.j)(WW.pack) ? this.host.warn("the custom game's texture pack names files on other sites: the player's own shows", null) : (this.onGamePack = !0, this.state = {
          pack: WW.pack,
          gameSource: null !== (iW = WW.source) && void 0 !== iW ? iW : ""
        }))
      }
      takeStoredOwn(WW) {
        if (this.playerPicked || this.JA) return;
        if (this.ownChanges++, this.setOwn(UW(WW)), this.onGamePack) return;
        const iW = {
          pack: this.playerPack,
          gameSource: null
        };
        0 === this.changes ? this.state = iW : this.change(iW, !1)
      }
      async update() {
        const WW = this.playerPack,
          iW = null === WW || void 0 === WW ? void 0 : WW.metaData.id;
        if (!WW || !iW || !this.host.fetchLatest || iW === EW.d || iW === EW.n.CUSTOM) return;
        const OW = EW.p[iW];
        if (void 0 === OW || WW.metaData.version >= OW) return;
        let mW;
        try {
          mW = UW(await this.host.fetchLatest(iW))
        } catch (NW) {
          return void this.host.warn(`texture pack ${iW} didn't update to version ${OW}`, NW)
        }
        null === mW || this.JA || this.playerPack !== WW || (this.ownChanges++, this.setOwn(mW), this.onGamePack || this.change({
          pack: mW,
          gameSource: null
        }, !1), await this.storePlayerPack(mW) && this.announce())
      }
      announce() {
        const WW = (0, LW.c)();
        null !== WW && this.ownAnnouncements.add(WW)
      }
      setOwn(WW) {
        this.playerPack = WW;
        for (const OW of [...this.ownListeners]) try {
          OW()
        } catch (iW) {
          this.host.warn("a texture pack listener threw", iW)
        }
      }
      usePlayerPack() {
        this.onGamePack && this.change({
          pack: this.playerPack,
          gameSource: null
        }, !1)
      }
      async storePlayerPack(WW) {
        try {
          return null === WW ? (await this.host.store.removeItem(PW.d), !0) : await this.host.store.setItem(PW.d, WW)
        } catch (iW) {
          return this.host.warn("the texture pack wasn't stored: it shows until the page reloads", iW), !1
        }
      }
      change(WW, iW) {
        if (!this.JA) {
          this.changes++, this.onGamePack = iW, this.state = WW;
          for (const WW of [...this.listeners.keys()]) this.deliver(WW)
        }
      }
      deliver(WW) {
        if (!this.JA && this.listeners.has(WW) && this.listeners.get(WW) !== this.state) {
          this.listeners.set(WW, this.state);
          try {
            WW(this.state)
          } catch (iW) {
            this.host.warn("a texture pack listener threw", iW)
          }
        }
      }
    }
    async function bW(WW, iW, OW) {
      const mW = (0, cW.b)(await OW.fetchPack(iW));
      if (null !== mW) return {
        pack: mW,
        key: iW
      };
      const EW = await OW.packKey(WW);
      if (null === EW) return null;
      const NW = (0, cW.b)(await OW.fetchPack(EW));
      if (null === NW) throw new Error(`no texture pack at ${EW}`);
      return {
        pack: NW,
        key: EW
      }
    }

    function jW(WW) {
      return null === WW || WW.metaData.id === EW.d
    }

    function UW(WW) {
      const iW = (0, cW.b)(WW);
      return jW(iW) ? null : iW
    }
    async function kW(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : NW.e;
      if (null === WW.pack) return null;
      const {
        packAssets: mW
      } = await Promise.all([OW.e(233), OW.e(53)]).then((() => OW(64622)));
      return mW(WW, iW)
    }

    function sW(WW) {
      const iW = (0, PW.v)();
      return null === iW ? () => {} : (iW.onmessage = iW => {
        WW.readPlayerPack((0, LW.g)(iW.data))
      }, () => {
        iW.close()
      })
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);