export const id = 175;
export const ids = [175];
export const modules = {
  8174: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => CW,
      d: () => zR
    });
    var wW = MW(2396);

    function CW() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const WW = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const RW = new BroadcastChannel(wW.o);
        RW.postMessage({
          stored: WW
        }), RW.close()
      } catch {
        return null
      }
      return WW
    }

    function zR(WW) {
      const RW = "object" === typeof WW && null !== WW ? WW.stored : null;
      return "string" === typeof RW ? RW : null
    }
  },
  8168: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => AW,
      f: () => CW,
      h: () => zR
    });
    var wW = MW(2396);
    async function CW(WW, RW, MW) {
      let CW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const zR = AW(await WW.getItem(wW.g, RW));
      if (null === zR || CW()) return null;
      const bR = await WW.getItem(wW.k, RW);
      return CW() ? null : (await Promise.all([WW.removeItem(wW.g), WW.removeItem(wW.k)]).catch(MW), {
        pack: zR,
        source: "string" === typeof bR ? bR : null
      })
    }

    function zR(WW) {
      return (0, wW.t)() ? Promise.resolve(null) : CW(WW, !1, (WW => {
        console.error("Error removing temporary texture pack: ", WW)
      }), wW.t)
    }

    function AW(WW) {
      if ("object" !== typeof WW || null === WW) return null;
      const RW = WW.metaData;
      return "object" !== typeof RW || null === RW || "string" !== typeof RW.id ? null : WW
    }
  },
  40767: (WW, RW, MW) => {
    function wW(WW) {
      return null === WW.gameSource ? "player" : "customGame"
    }
    MW.d(RW, {
      e: () => zR,
      g: () => iR,
      j: () => gR,
      l: () => wW
    });
    const CW = /^data:[\w.+/-]*;base64,[A-Za-z0-9+/]*={0,2}$/;

    function zR(WW) {
      return "" === WW || "string" === typeof WW && CW.test(WW)
    }

    function AW(WW) {
      return "object" === typeof WW && null !== WW && ("earth" === WW.type || Object.entries(WW).every((WW => {
        let [RW, MW] = WW;
        return "type" === RW || zR(MW)
      })))
    }
    const bR = /(?:src|image|image-set|cross-fade)\(/i,
      yR = /url\(\s*(?:"(?<doubleQuoted>[^"]*)"|'(?<singleQuoted>[^']*)'|(?<unquoted>[^"'()\s]*))\s*\)/gi,
      NW = /url\(/gi,
      eW = ["https://bloxd.invalid/", "http://bloxd.invalid/"],
      BW = new Set([...eW.map((WW => new URL(WW).origin)), "https://fonts.gstatic.com"]),
      tR = new Set(["https://i.imgur.com/MEcjBFQ.png"]);

    function TW(WW) {
      var RW, MW;
      if (WW.includes("\\") || bR.test(WW)) return !0;
      const wW = [...WW.matchAll(yR)];
      return wW.length !== (null !== (RW = null === (MW = WW.match(NW)) || void 0 === MW ? void 0 : MW.length) && void 0 !== RW ? RW : 0) || !wW.every((WW => {
        var RW, MW, wW;
        let {
          groups: CW
        } = WW;
        return function(WW) {
          try {
            return eW.every((RW => {
              const MW = new URL(WW, RW);
              return "data:" === MW.protocol || BW.has(MW.origin) || tR.has(MW.href)
            }))
          } catch {
            return !1
          }
        }(null !== (RW = null !== (MW = null !== (wW = null === CW || void 0 === CW ? void 0 : CW.doubleQuoted) && void 0 !== wW ? wW : null === CW || void 0 === CW ? void 0 : CW.singleQuoted) && void 0 !== MW ? MW : null === CW || void 0 === CW ? void 0 : CW.unquoted) && void 0 !== RW ? RW : "")
      }))
    }

    function gR(WW) {
      var RW, MW, wW, CW, bR, yR, NW;
      const eW = [...Object.values(null !== (RW = WW.textureOverrides) && void 0 !== RW ? RW : {}), ...Object.values(null !== (MW = WW.modelOverrides) && void 0 !== MW ? MW : {})],
        BW = [...Object.values(null !== (wW = null === (CW = WW.customCss) || void 0 === CW ? void 0 : CW.fontFaces) && void 0 !== wW ? wW : {}), ...Object.values(null !== (bR = null === (yR = WW.customCss) || void 0 === yR ? void 0 : yR.classStyles) && void 0 !== bR ? bR : {})].flatMap((WW => Object.values(null !== WW && void 0 !== WW ? WW : {})));
      return !eW.every(zR) || !Object.values(null !== (NW = WW.skyBoxes) && void 0 !== NW ? NW : {}).every(AW) || BW.some((WW => "string" === typeof WW && TW(WW)))
    }

    function iR(WW, RW) {
      if (null === WW || "player" === RW || !gR(WW)) return WW;
      const MW = {
        ...WW
      };
      return WW.textureOverrides && (MW.textureOverrides = JW(WW.textureOverrides, zR, "texture")), WW.modelOverrides && (MW.modelOverrides = JW(WW.modelOverrides, zR, "model")), WW.skyBoxes && (MW.skyBoxes = JW(WW.skyBoxes, AW, "sky")), WW.customCss && (MW.customCss = function(WW) {
        const RW = WW => JW(WW, (WW => "string" === typeof WW && !TW(WW)), "CSS"),
          {
            fontFaces: MW,
            classStyles: wW
          } = YW(WW) ? WW : {},
          CW = {};
        for (const [zR, AW] of Object.entries(YW(wW) ? wW : {})) CW[zR] = RW(AW);
        return {
          fontFaces: (Array.isArray(MW) ? MW : []).map(RW),
          classStyles: CW
        }
      }(WW.customCss)), MW
    }

    function YW(WW) {
      return "object" === typeof WW && null !== WW && !Array.isArray(WW)
    }

    function JW(WW, RW, MW) {
      const wW = Object.entries(YW(WW) ? WW : {}),
        CW = wW.filter((WW => {
          let [, MW] = WW;
          return !RW(MW)
        }));
      if (CW.length > 0) {
        const WW = CW.map((WW => {
          let [RW] = WW;
          return RW
        }));
        console.warn(`Ignoring a custom game texture pack's ${MW} files that name another site: ${WW.join(", ")}`)
      }
      return Object.fromEntries(wW.filter((WW => {
        let [, MW] = WW;
        return RW(MW)
      })))
    }
  },
  40769: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => TW,
      i: () => IW,
      m: () => PW
    });
    var wW = MW(860),
      CW = MW(2301),
      zR = MW(2385),
      AW = MW(2396),
      bR = MW(8174),
      yR = MW(8168),
      NW = MW(40767),
      eW = MW(38528),
      BW = MW(38512);
    const tR = {
      pack: null,
      gameSource: null
    };
    class TW {
      constructor(WW) {
        this.host = WW, this.ready = void 0, this.state = tR, this.playerPack = null, this.onGamePack = !1, this.confirmGamePack = null, this.skippedKey = null, this.ownAnnouncements = new Set, this.listeners = new Map, this.ownListeners = new Set, this.changes = 0, this.picks = 0, this.playerPicked = !1, this.ownChanges = 0, this.Qw = !1, (0, AW.r)(), this.ready = this.readStored()
      }
      readyWithin(WW) {
        return Promise.race([this.ready, new Promise((RW => {
          setTimeout(RW, WW)
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
        return (0, BW.d)(this.state, WW)
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
        const RW = iR(WW) ? null : WW;
        this.picks++, this.playerPicked = !0, this.ownChanges++, this.setOwn(RW), this.change({
          pack: RW,
          gameSource: null
        }, !1);
        const MW = await this.storePlayerPack(RW);
        return MW && this.announce(), MW
      }
      async packForGame(WW, RW, MW) {
        await this.readyWithin(Math.max(0, (null !== MW && void 0 !== MW ? MW : performance.now() + eW.b) - performance.now()));
        const CW = ++this.picks,
          zR = (0, wW.k)(WW) ? (0, wW.n)(WW) : null;
        if (null === zR) return void this.usePlayerPack();
        let AW;
        const bR = function(WW) {
          let RW;
          const MW = new Promise(((MW, wW) => {
            RW = setTimeout((() => {
              wW(new Error(`no answer in ${WW} ms`))
            }), WW)
          }));
          return MW.catch((() => {})), {
            passed: MW,
            clear: () => {
              clearTimeout(RW)
            }
          }
        }(2e4);
        try {
          const WW = await Promise.race([RW.packKey(zR), bR.passed]);
          if (null !== WW && this.onGamePack && this.state.gameSource === WW) return;
          if (null !== WW && WW === this.skippedKey) return void(this.Qw || this.picks !== CW || this.usePlayerPack());
          AW = null === WW ? null : await Promise.race([gR(zR, WW, RW), bR.passed])
        } catch (BW) {
          const WW = !this.Qw && this.picks === CW && this.holdsOtherGamePack(zR);
          return this.host.warn(`the texture pack of ${zR} didn't load: ${WW?"the player's own shows":"the pack in play stays"}`, BW), void(WW && this.usePlayerPack())
        } finally {
          bR.clear()
        }
        if (this.Qw || this.picks !== CW) return;
        null !== AW && (0, NW.j)(AW.pack) && (this.host.warn(`the texture pack of ${zR} names files on other sites: the player's own shows`, null), AW = null);
        const yR = null === AW || await this.confirmed(AW.pack, zR) ? null : AW.key;
        this.Qw || this.picks !== CW || (null !== yR && (this.skippedKey = yR, AW = null), null === AW ? this.usePlayerPack() : (this.onGamePack = !0, this.change({
          pack: AW.pack,
          gameSource: AW.key
        }, !0)))
      }
      endGamePack() {
        this.picks++, this.usePlayerPack()
      }
      holdsOtherGamePack(WW) {
        return this.onGamePack && "" !== this.state.gameSource && !this.isUsingCustomGameTexturePack(WW)
      }
      async confirmed(WW, RW) {
        const MW = this.confirmGamePack;
        if (null === MW) return !0;
        try {
          return await MW(WW, RW)
        } catch (wW) {
          return this.host.warn(`the texture pack prompt of ${RW} failed: the pack is skipped`, wW), !1
        }
      }
      async readPlayerPack() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (null !== WW && this.ownAnnouncements.delete(WW)) return;
        await this.ready;
        const RW = this.ownChanges;
        let MW;
        try {
          MW = await this.host.store.getItem(AW.e, !0)
        } catch (bR) {
          return void this.host.warn("the stored texture pack didn't read again: the pack in play stays", bR)
        }
        if (this.Qw || this.ownChanges !== RW) return;
        const wW = YW(MW);
        var CW, zR;
        (CW = wW, zR = this.playerPack, JW(CW, zR)) || (this.ownChanges++, this.setOwn(wW), this.onGamePack || this.change({
          pack: wW,
          gameSource: null
        }, !1))
      }
      joinedWithout() {
        this.picks++
      }
      dispose() {
        this.Qw = !0, this.listeners.clear()
      }
      async readStored() {
        const {
          store: WW,
          warn: RW
        } = this.host;
        await Promise.all([!1 === this.host.oneShot ? void 0 : (0, yR.f)(WW, !0, (WW => {
          RW("the custom game's texture pack wasn't removed from storage", WW)
        })).then((WW => {
          this.takeOneShot(WW)
        }), (WW => {
          RW("the custom game's texture pack didn't read: the player's own shows", WW)
        })), WW.getItem(AW.e, !0).then((WW => {
          this.takeStoredOwn(WW)
        }), (WW => {
          RW("the stored texture pack didn't read: the default pack shows", WW), this.takeStoredOwn(null)
        }))]), this.update()
      }
      takeOneShot(WW) {
        var RW;
        null === WW || this.Qw || this.changes > 0 || this.picks > 0 || ((0, NW.j)(WW.pack) ? this.host.warn("the custom game's texture pack names files on other sites: the player's own shows", null) : (this.onGamePack = !0, this.state = {
          pack: WW.pack,
          gameSource: null !== (RW = WW.source) && void 0 !== RW ? RW : ""
        }))
      }
      takeStoredOwn(WW) {
        if (this.playerPicked || this.Qw) return;
        if (this.ownChanges++, this.setOwn(YW(WW)), this.onGamePack) return;
        const RW = {
          pack: this.playerPack,
          gameSource: null
        };
        0 === this.changes ? this.state = RW : this.change(RW, !1)
      }
      async update() {
        const WW = this.playerPack,
          RW = null === WW || void 0 === WW ? void 0 : WW.metaData.id;
        if (!WW || !RW || !this.host.fetchLatest || RW === CW.b || RW === CW.n.CUSTOM) return;
        const MW = CW.r[RW];
        if (void 0 === MW || WW.metaData.version >= MW) return;
        let wW;
        try {
          wW = YW(await this.host.fetchLatest(RW))
        } catch (zR) {
          return void this.host.warn(`texture pack ${RW} didn't update to version ${MW}`, zR)
        }
        null === wW || this.Qw || this.playerPack !== WW || (this.ownChanges++, this.setOwn(wW), this.onGamePack || this.change({
          pack: wW,
          gameSource: null
        }, !1), await this.storePlayerPack(wW) && this.announce())
      }
      announce() {
        const WW = (0, bR.b)();
        null !== WW && this.ownAnnouncements.add(WW)
      }
      setOwn(WW) {
        this.playerPack = WW;
        for (const MW of [...this.ownListeners]) try {
          MW()
        } catch (RW) {
          this.host.warn("a texture pack listener threw", RW)
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
          return null === WW ? (await this.host.store.removeItem(AW.e), !0) : await this.host.store.setItem(AW.e, WW)
        } catch (RW) {
          return this.host.warn("the texture pack wasn't stored: it shows until the page reloads", RW), !1
        }
      }
      change(WW, RW) {
        if (!this.Qw) {
          this.changes++, this.onGamePack = RW, this.state = WW;
          for (const WW of [...this.listeners.keys()]) this.deliver(WW)
        }
      }
      deliver(WW) {
        if (!this.Qw && this.listeners.has(WW) && this.listeners.get(WW) !== this.state) {
          this.listeners.set(WW, this.state);
          try {
            WW(this.state)
          } catch (RW) {
            this.host.warn("a texture pack listener threw", RW)
          }
        }
      }
    }
    async function gR(WW, RW, MW) {
      const wW = (0, yR.d)(await MW.fetchPack(RW));
      if (null !== wW) return {
        pack: wW,
        key: RW
      };
      const CW = await MW.packKey(WW);
      if (null === CW) return null;
      const zR = (0, yR.d)(await MW.fetchPack(CW));
      if (null === zR) throw new Error(`no texture pack at ${CW}`);
      return {
        pack: zR,
        key: CW
      }
    }

    function iR(WW) {
      return null === WW || WW.metaData.id === CW.b
    }

    function YW(WW) {
      const RW = (0, yR.d)(WW);
      return iR(RW) ? null : RW
    }

    function JW(WW, RW) {
      if (WW === RW) return !0;
      if ("object" !== typeof WW || "object" !== typeof RW || null === WW || null === RW || Array.isArray(WW) !== Array.isArray(RW)) return !1;
      const MW = WW,
        wW = RW,
        CW = Object.keys(MW);
      return CW.length === Object.keys(wW).length && CW.every((WW => Object.prototype.hasOwnProperty.call(wW, WW) && JW(MW[WW], wW[WW])))
    }
    async function PW(WW) {
      let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zR.c;
      if (null === WW.pack) return null;
      const {
        packAssets: wW
      } = await Promise.all([MW.e(59), MW.e(178), MW.e(81), MW.e(181), MW.e(38)]).then((() => MW(58896)));
      return wW(WW, RW)
    }

    function IW(WW) {
      const RW = (0, AW.w)();
      return null === RW ? () => {} : (RW.onmessage = RW => {
        WW.readPlayerPack((0, bR.d)(RW.data))
      }, () => {
        RW.close()
      })
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);