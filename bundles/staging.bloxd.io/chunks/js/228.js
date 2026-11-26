export const id = 228;
export const ids = [228];
export const modules = {
  35393: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => YV,
      h: () => UV
    });
    var JV = xV(3681);

    function YV() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const VV = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const eV = new BroadcastChannel(JV.h);
        eV.postMessage({
          stored: VV
        }), eV.close()
      } catch {
        return null
      }
      return VV
    }

    function UV(VV) {
      const eV = "object" === typeof VV && null !== VV ? VV.stored : null;
      return "string" === typeof eV ? eV : null
    }
  },
  35385: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => yV,
      e: () => YV,
      f: () => UV
    });
    var JV = xV(3681);
    async function YV(VV, eV, xV) {
      let YV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const UV = yV(await VV.getItem(JV.e, eV));
      if (null === UV || YV()) return null;
      const pV = await VV.getItem(JV.g, eV);
      return YV() ? null : (await async function(VV) {
        await Promise.all([VV.removeItem(JV.e), VV.removeItem(JV.g)])
      }(VV).catch(xV), {
        pack: UV,
        source: "string" === typeof pV ? pV : null
      })
    }

    function UV(VV) {
      return (0, JV.m)() ? Promise.resolve(null) : YV(VV, !1, (VV => {
        console.error("Error removing temporary texture pack: ", VV)
      }), JV.m)
    }

    function yV(VV) {
      if ("object" !== typeof VV || null === VV) return null;
      const eV = VV.metaData;
      return "object" !== typeof eV || null === eV || "string" !== typeof eV.id ? null : VV
    }
  },
  53977: (VV, eV, xV) => {
    function JV(VV) {
      return null === VV.gameSource ? "player" : "customGame"
    }
    xV.d(eV, {
      b: () => UV,
      f: () => bV,
      g: () => kV,
      i: () => JV
    });
    const YV = /^data:[\w.+/-]*;base64,[A-Za-z0-9+/]*={0,2}$/;

    function UV(VV) {
      return "" === VV || "string" === typeof VV && YV.test(VV)
    }

    function yV(VV) {
      return "object" === typeof VV && null !== VV && ("earth" === VV.type || Object.entries(VV).every((VV => {
        let [eV, xV] = VV;
        return "type" === eV || UV(xV)
      })))
    }
    const pV = /(?:src|image|image-set|cross-fade)\(/i,
      QV = /url\(\s*(?:"(?<doubleQuoted>[^"]*)"|'(?<singleQuoted>[^']*)'|(?<unquoted>[^"'()\s]*))\s*\)/gi,
      nV = /url\(/gi,
      wV = ["https://bloxd.invalid/", "http://bloxd.invalid/"],
      ZV = new Set([...wV.map((VV => new URL(VV).origin)), "https://fonts.gstatic.com"]),
      vV = new Set(["https://i.imgur.com/MEcjBFQ.png"]);

    function rV(VV) {
      var eV, xV;
      if (VV.includes("\\") || pV.test(VV)) return !0;
      const JV = [...VV.matchAll(QV)];
      return JV.length !== (null !== (eV = null === (xV = VV.match(nV)) || void 0 === xV ? void 0 : xV.length) && void 0 !== eV ? eV : 0) || !JV.every((VV => {
        var eV, xV, JV;
        let {
          groups: YV
        } = VV;
        return function(VV) {
          try {
            return wV.every((eV => {
              const xV = new URL(VV, eV);
              return "data:" === xV.protocol || ZV.has(xV.origin) || vV.has(xV.href)
            }))
          } catch {
            return !1
          }
        }(null !== (eV = null !== (xV = null !== (JV = null === YV || void 0 === YV ? void 0 : YV.doubleQuoted) && void 0 !== JV ? JV : null === YV || void 0 === YV ? void 0 : YV.singleQuoted) && void 0 !== xV ? xV : null === YV || void 0 === YV ? void 0 : YV.unquoted) && void 0 !== eV ? eV : "")
      }))
    }

    function kV(VV) {
      var eV, xV, JV, YV, pV, QV, nV;
      const wV = [...Object.values(null !== (eV = VV.textureOverrides) && void 0 !== eV ? eV : {}), ...Object.values(null !== (xV = VV.modelOverrides) && void 0 !== xV ? xV : {})],
        ZV = [...Object.values(null !== (JV = null === (YV = VV.customCss) || void 0 === YV ? void 0 : YV.fontFaces) && void 0 !== JV ? JV : {}), ...Object.values(null !== (pV = null === (QV = VV.customCss) || void 0 === QV ? void 0 : QV.classStyles) && void 0 !== pV ? pV : {})].flatMap((VV => Object.values(null !== VV && void 0 !== VV ? VV : {})));
      return !wV.every(UV) || !Object.values(null !== (nV = VV.skyBoxes) && void 0 !== nV ? nV : {}).every(yV) || ZV.some((VV => "string" === typeof VV && rV(VV)))
    }

    function bV(VV, eV) {
      if (null === VV || "player" === eV || !kV(VV)) return VV;
      const xV = {
        ...VV
      };
      return VV.textureOverrides && (xV.textureOverrides = BV(VV.textureOverrides, UV, "texture")), VV.modelOverrides && (xV.modelOverrides = BV(VV.modelOverrides, UV, "model")), VV.skyBoxes && (xV.skyBoxes = BV(VV.skyBoxes, yV, "sky")), VV.customCss && (xV.customCss = function(VV) {
        const eV = VV => BV(VV, (VV => "string" === typeof VV && !rV(VV)), "CSS"),
          {
            fontFaces: xV,
            classStyles: JV
          } = EV(VV) ? VV : {},
          YV = {};
        for (const [UV, yV] of Object.entries(EV(JV) ? JV : {})) YV[UV] = eV(yV);
        return {
          fontFaces: (Array.isArray(xV) ? xV : []).map(eV),
          classStyles: YV
        }
      }(VV.customCss)), xV
    }

    function EV(VV) {
      return "object" === typeof VV && null !== VV && !Array.isArray(VV)
    }

    function BV(VV, eV, xV) {
      const JV = Object.entries(EV(VV) ? VV : {}),
        YV = JV.filter((VV => {
          let [, xV] = VV;
          return !eV(xV)
        }));
      if (YV.length > 0) {
        const VV = YV.map((VV => {
          let [eV] = VV;
          return eV
        }));
        console.warn(`Ignoring a custom game texture pack's ${xV} files that name another site: ${VV.join(", ")}`)
      }
      return Object.fromEntries(JV.filter((VV => {
        let [, xV] = VV;
        return eV(xV)
      })))
    }
  },
  53983: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => kV,
      f: () => qV,
      j: () => jV
    });
    var JV = xV(1099),
      YV = xV(2277),
      UV = xV(3673),
      yV = xV(3681),
      pV = xV(35393),
      QV = xV(35385),
      nV = xV(53977),
      wV = xV(42303),
      ZV = xV(42282),
      vV = xV(5576);
    const rV = {
      pack: null,
      gameSource: null
    };
    class kV {
      constructor(VV) {
        this.host = VV, this.ready = void 0, this.state = rV, this.playerPack = null, this.onGamePack = !1, this.confirmGamePack = null, this.skippedKey = null, this.ownAnnouncements = new Set, this.listeners = new Map, this.ownListeners = new Set, this.changes = 0, this.picks = 0, this.playerPicked = !1, this.ownChanges = 0, this.ik = !1, (0, yV.j)(), this.ready = this.readStored()
      }
      readyWithin(VV) {
        return Promise.race([this.ready, new Promise((eV => {
          setTimeout(eV, VV)
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
      onPlayerPackChange(VV) {
        return this.ownListeners.add(VV), () => {
          this.ownListeners.delete(VV)
        }
      }
      isUsingCustomGameTexturePack(VV) {
        return (0, ZV.g)(this.state, VV)
      }
      setGamePackConfirm(VV) {
        this.confirmGamePack = VV
      }
      subscribe(VV) {
        return this.listeners.set(VV, null), this.ready.then((() => {
          this.deliver(VV)
        })), () => {
          this.listeners.delete(VV)
        }
      }
      async setPlayerPack(VV) {
        const eV = EV(VV) ? null : VV;
        this.picks++, this.playerPicked = !0, this.ownChanges++, this.setOwn(eV), this.change({
          pack: eV,
          gameSource: null
        }, !1);
        const xV = await this.storePlayerPack(eV);
        return xV && this.announce(), xV
      }
      async packForGame(VV, eV, xV) {
        await this.readyWithin(Math.max(0, (null !== xV && void 0 !== xV ? xV : performance.now() + wV.c) - performance.now()));
        const YV = ++this.picks,
          UV = (0, JV.l)(VV) ? (0, JV.p)(VV) : null;
        if (null === UV) return void this.usePlayerPack();
        let yV;
        const pV = function(VV) {
          let eV;
          const xV = new Promise(((xV, JV) => {
            eV = setTimeout((() => {
              JV(new Error(`no answer in ${VV} ms`))
            }), VV)
          }));
          return xV.catch((() => {})), {
            passed: xV,
            clear: () => {
              clearTimeout(eV)
            }
          }
        }(2e4);
        try {
          const VV = await Promise.race([eV.packKey(UV), pV.passed]);
          if (null !== VV && this.onGamePack && this.state.gameSource === VV) return;
          if (null !== VV && VV === this.skippedKey) return void(this.ik || this.picks !== YV || this.usePlayerPack());
          yV = null === VV ? null : await Promise.race([bV(UV, VV, eV), pV.passed])
        } catch (ZV) {
          const VV = !this.ik && this.picks === YV && this.holdsOtherGamePack(UV);
          return this.host.warn(`the texture pack of ${UV} didn't load: ${VV?"the player's own shows":"the pack in play stays"}`, ZV), void(VV && this.usePlayerPack())
        } finally {
          pV.clear()
        }
        if (this.ik || this.picks !== YV) return;
        null !== yV && (0, nV.g)(yV.pack) && (this.host.warn(`the texture pack of ${UV} names files on other sites: the player's own shows`, null), yV = null);
        const QV = null === yV || await this.confirmed(yV.pack, UV) ? null : yV.key;
        this.ik || this.picks !== YV || (null !== QV && (this.skippedKey = QV, yV = null), null === yV ? this.usePlayerPack() : (this.onGamePack = !0, this.change({
          pack: yV.pack,
          gameSource: yV.key
        }, !0)))
      }
      endGamePack() {
        this.picks++, this.usePlayerPack()
      }
      holdsOtherGamePack(VV) {
        return this.onGamePack && "" !== this.state.gameSource && !this.isUsingCustomGameTexturePack(VV)
      }
      async confirmed(VV, eV) {
        const xV = this.confirmGamePack;
        if (null === xV) return !0;
        try {
          return await xV(VV, eV)
        } catch (JV) {
          return this.host.warn(`the texture pack prompt of ${eV} failed: the pack is skipped`, JV), !1
        }
      }
      async readPlayerPack() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (null !== VV && this.ownAnnouncements.delete(VV)) return;
        await this.ready;
        const eV = this.ownChanges;
        let xV;
        try {
          xV = await this.host.store.getItem(yV.d, !0)
        } catch (YV) {
          return void this.host.warn("the stored texture pack didn't read again: the pack in play stays", YV)
        }
        if (this.ik || this.ownChanges !== eV) return;
        const JV = BV(xV);
        (0, vV.d)(JV, this.playerPack) || (this.ownChanges++, this.setOwn(JV), this.onGamePack || this.change({
          pack: JV,
          gameSource: null
        }, !1))
      }
      joinedWithout() {
        this.picks++
      }
      dispose() {
        this.ik = !0, this.listeners.clear()
      }
      async readStored() {
        const {
          store: VV,
          warn: eV
        } = this.host;
        await Promise.all([!1 === this.host.oneShot ? void 0 : (0, QV.e)(VV, !0, (VV => {
          eV("the custom game's texture pack wasn't removed from storage", VV)
        })).then((VV => {
          this.takeOneShot(VV)
        }), (VV => {
          eV("the custom game's texture pack didn't read: the player's own shows", VV)
        })), VV.getItem(yV.d, !0).then((VV => {
          this.takeStoredOwn(VV)
        }), (VV => {
          eV("the stored texture pack didn't read: the default pack shows", VV), this.takeStoredOwn(null)
        }))]), this.update()
      }
      takeOneShot(VV) {
        var eV;
        null === VV || this.ik || this.changes > 0 || this.picks > 0 || ((0, nV.g)(VV.pack) ? this.host.warn("the custom game's texture pack names files on other sites: the player's own shows", null) : (this.onGamePack = !0, this.state = {
          pack: VV.pack,
          gameSource: null !== (eV = VV.source) && void 0 !== eV ? eV : ""
        }))
      }
      takeStoredOwn(VV) {
        if (this.playerPicked || this.ik) return;
        if (this.ownChanges++, this.setOwn(BV(VV)), this.onGamePack) return;
        const eV = {
          pack: this.playerPack,
          gameSource: null
        };
        0 === this.changes ? this.state = eV : this.change(eV, !1)
      }
      async update() {
        const VV = this.playerPack,
          eV = null === VV || void 0 === VV ? void 0 : VV.metaData.id;
        if (!VV || !eV || !this.host.fetchLatest || eV === YV.e || eV === YV.r.CUSTOM) return;
        const xV = YV.t[eV];
        if (void 0 === xV || VV.metaData.version >= xV) return;
        let JV;
        try {
          JV = BV(await this.host.fetchLatest(eV))
        } catch (UV) {
          return void this.host.warn(`texture pack ${eV} didn't update to version ${xV}`, UV)
        }
        null === JV || this.ik || this.playerPack !== VV || (this.ownChanges++, this.setOwn(JV), this.onGamePack || this.change({
          pack: JV,
          gameSource: null
        }, !1), await this.storePlayerPack(JV) && this.announce())
      }
      announce() {
        const VV = (0, pV.d)();
        null !== VV && this.ownAnnouncements.add(VV)
      }
      setOwn(VV) {
        this.playerPack = VV;
        for (const xV of [...this.ownListeners]) try {
          xV()
        } catch (eV) {
          this.host.warn("a texture pack listener threw", eV)
        }
      }
      usePlayerPack() {
        this.onGamePack && this.change({
          pack: this.playerPack,
          gameSource: null
        }, !1)
      }
      async storePlayerPack(VV) {
        try {
          return null === VV ? (await this.host.store.removeItem(yV.d), !0) : await this.host.store.setItem(yV.d, VV)
        } catch (eV) {
          return this.host.warn("the texture pack wasn't stored: it shows until the page reloads", eV), !1
        }
      }
      change(VV, eV) {
        if (!this.ik) {
          this.changes++, this.onGamePack = eV, this.state = VV;
          for (const VV of [...this.listeners.keys()]) this.deliver(VV)
        }
      }
      deliver(VV) {
        if (!this.ik && this.listeners.has(VV) && this.listeners.get(VV) !== this.state) {
          this.listeners.set(VV, this.state);
          try {
            VV(this.state)
          } catch (eV) {
            this.host.warn("a texture pack listener threw", eV)
          }
        }
      }
    }
    async function bV(VV, eV, xV) {
      const JV = (0, QV.d)(await xV.fetchPack(eV));
      if (null !== JV) return {
        pack: JV,
        key: eV
      };
      const YV = await xV.packKey(VV);
      if (null === YV) return null;
      const UV = (0, QV.d)(await xV.fetchPack(YV));
      if (null === UV) throw new Error(`no texture pack at ${YV}`);
      return {
        pack: UV,
        key: YV
      }
    }

    function EV(VV) {
      return null === VV || VV.metaData.id === YV.e
    }

    function BV(VV) {
      const eV = (0, QV.d)(VV);
      return EV(eV) ? null : eV
    }
    async function jV(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UV.e;
      if (null === VV.pack) return null;
      const {
        packAssets: JV
      } = await Promise.all([xV.e(230), xV.e(51)]).then((() => xV(64525)));
      return JV(VV, eV)
    }

    function qV(VV) {
      const eV = (0, yV.n)();
      return null === eV ? () => {} : (eV.onmessage = eV => {
        VV.readPlayerPack((0, pV.h)(eV.data))
      }, () => {
        eV.close()
      })
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);