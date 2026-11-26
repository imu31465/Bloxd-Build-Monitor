export const id = 219;
export const ids = [219];
export const modules = {
  34948: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => yU,
      d: () => QU
    });
    var cU = zU(3626);

    function yU() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const UU = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const XU = new BroadcastChannel(cU.n);
        XU.postMessage({
          stored: UU
        }), XU.close()
      } catch {
        return null
      }
      return UU
    }

    function QU(UU) {
      const XU = "object" === typeof UU && null !== UU ? UU.stored : null;
      return "string" === typeof XU ? XU : null
    }
  },
  34945: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => AU,
      g: () => yU,
      i: () => QU
    });
    var cU = zU(3626);
    async function yU(UU, XU, zU) {
      let yU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const QU = AU(await UU.getItem(cU.i, XU));
      if (null === QU || yU()) return null;
      const FU = await UU.getItem(cU.j, XU);
      return yU() ? null : (await async function(UU) {
        await Promise.all([UU.removeItem(cU.i), UU.removeItem(cU.j)])
      }(UU).catch(zU), {
        pack: QU,
        source: "string" === typeof FU ? FU : null
      })
    }

    function QU(UU) {
      return (0, cU.w)() ? Promise.resolve(null) : yU(UU, !1, (UU => {
        console.error("Error removing temporary texture pack: ", UU)
      }), cU.w)
    }

    function AU(UU) {
      if ("object" !== typeof UU || null === UU) return null;
      const XU = UU.metaData;
      return "object" !== typeof XU || null === XU || "string" !== typeof XU.id ? null : UU
    }
  },
  53774: (UU, XU, zU) => {
    function cU(UU) {
      return null === UU.gameSource ? "player" : "customGame"
    }
    zU.d(XU, {
      b: () => QU,
      d: () => aU,
      h: () => pU,
      l: () => cU
    });
    const yU = /^data:[\w.+/-]*;base64,[A-Za-z0-9+/]*={0,2}$/;

    function QU(UU) {
      return "" === UU || "string" === typeof UU && yU.test(UU)
    }

    function AU(UU) {
      return "object" === typeof UU && null !== UU && ("earth" === UU.type || Object.entries(UU).every((UU => {
        let [XU, zU] = UU;
        return "type" === XU || QU(zU)
      })))
    }
    const FU = /(?:src|image|image-set|cross-fade)\(/i,
      oU = /url\(\s*(?:"(?<doubleQuoted>[^"]*)"|'(?<singleQuoted>[^']*)'|(?<unquoted>[^"'()\s]*))\s*\)/gi,
      DU = /url\(/gi,
      EU = ["https://bloxd.invalid/", "http://bloxd.invalid/"],
      YU = new Set([...EU.map((UU => new URL(UU).origin)), "https://fonts.gstatic.com"]),
      NU = new Set(["https://i.imgur.com/MEcjBFQ.png"]);

    function IU(UU) {
      var XU, zU;
      if (UU.includes("\\") || FU.test(UU)) return !0;
      const cU = [...UU.matchAll(oU)];
      return cU.length !== (null !== (XU = null === (zU = UU.match(DU)) || void 0 === zU ? void 0 : zU.length) && void 0 !== XU ? XU : 0) || !cU.every((UU => {
        var XU, zU, cU;
        let {
          groups: yU
        } = UU;
        return function(UU) {
          try {
            return EU.every((XU => {
              const zU = new URL(UU, XU);
              return "data:" === zU.protocol || YU.has(zU.origin) || NU.has(zU.href)
            }))
          } catch {
            return !1
          }
        }(null !== (XU = null !== (zU = null !== (cU = null === yU || void 0 === yU ? void 0 : yU.doubleQuoted) && void 0 !== cU ? cU : null === yU || void 0 === yU ? void 0 : yU.singleQuoted) && void 0 !== zU ? zU : null === yU || void 0 === yU ? void 0 : yU.unquoted) && void 0 !== XU ? XU : "")
      }))
    }

    function pU(UU) {
      var XU, zU, cU, yU, FU, oU, DU;
      const EU = [...Object.values(null !== (XU = UU.textureOverrides) && void 0 !== XU ? XU : {}), ...Object.values(null !== (zU = UU.modelOverrides) && void 0 !== zU ? zU : {})],
        YU = [...Object.values(null !== (cU = null === (yU = UU.customCss) || void 0 === yU ? void 0 : yU.fontFaces) && void 0 !== cU ? cU : {}), ...Object.values(null !== (FU = null === (oU = UU.customCss) || void 0 === oU ? void 0 : oU.classStyles) && void 0 !== FU ? FU : {})].flatMap((UU => Object.values(null !== UU && void 0 !== UU ? UU : {})));
      return !EU.every(QU) || !Object.values(null !== (DU = UU.skyBoxes) && void 0 !== DU ? DU : {}).every(AU) || YU.some((UU => "string" === typeof UU && IU(UU)))
    }

    function aU(UU, XU) {
      if (null === UU || "player" === XU || !pU(UU)) return UU;
      const zU = {
        ...UU
      };
      return UU.textureOverrides && (zU.textureOverrides = gU(UU.textureOverrides, QU, "texture")), UU.modelOverrides && (zU.modelOverrides = gU(UU.modelOverrides, QU, "model")), UU.skyBoxes && (zU.skyBoxes = gU(UU.skyBoxes, AU, "sky")), UU.customCss && (zU.customCss = function(UU) {
        const XU = UU => gU(UU, (UU => "string" === typeof UU && !IU(UU)), "CSS"),
          {
            fontFaces: zU,
            classStyles: cU
          } = tU(UU) ? UU : {},
          yU = {};
        for (const [QU, AU] of Object.entries(tU(cU) ? cU : {})) yU[QU] = XU(AU);
        return {
          fontFaces: (Array.isArray(zU) ? zU : []).map(XU),
          classStyles: yU
        }
      }(UU.customCss)), zU
    }

    function tU(UU) {
      return "object" === typeof UU && null !== UU && !Array.isArray(UU)
    }

    function gU(UU, XU, zU) {
      const cU = Object.entries(tU(UU) ? UU : {}),
        yU = cU.filter((UU => {
          let [, zU] = UU;
          return !XU(zU)
        }));
      if (yU.length > 0) {
        const UU = yU.map((UU => {
          let [XU] = UU;
          return XU
        }));
        console.warn(`Ignoring a custom game texture pack's ${zU} files that name another site: ${UU.join(", ")}`)
      }
      return Object.fromEntries(cU.filter((UU => {
        let [, zU] = UU;
        return XU(zU)
      })))
    }
  },
  53776: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => pU,
      e: () => GU,
      h: () => kU
    });
    var cU = zU(1079),
      yU = zU(2219),
      QU = zU(3612),
      AU = zU(3626),
      FU = zU(34948),
      oU = zU(34945),
      DU = zU(53774),
      EU = zU(42098),
      YU = zU(42073),
      NU = zU(5629);
    const IU = {
      pack: null,
      gameSource: null
    };
    class pU {
      constructor(UU) {
        this.host = UU, this.ready = void 0, this.state = IU, this.playerPack = null, this.onGamePack = !1, this.confirmGamePack = null, this.skippedKey = null, this.ownAnnouncements = new Set, this.listeners = new Map, this.ownListeners = new Set, this.changes = 0, this.picks = 0, this.playerPicked = !1, this.ownChanges = 0, this.kp = !1, (0, AU.p)(), this.ready = this.readStored()
      }
      readyWithin(UU) {
        return Promise.race([this.ready, new Promise((XU => {
          setTimeout(XU, UU)
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
      onPlayerPackChange(UU) {
        return this.ownListeners.add(UU), () => {
          this.ownListeners.delete(UU)
        }
      }
      isUsingCustomGameTexturePack(UU) {
        return (0, YU.h)(this.state, UU)
      }
      setGamePackConfirm(UU) {
        this.confirmGamePack = UU
      }
      subscribe(UU) {
        return this.listeners.set(UU, null), this.ready.then((() => {
          this.deliver(UU)
        })), () => {
          this.listeners.delete(UU)
        }
      }
      async setPlayerPack(UU) {
        const XU = tU(UU) ? null : UU;
        this.picks++, this.playerPicked = !0, this.ownChanges++, this.setOwn(XU), this.change({
          pack: XU,
          gameSource: null
        }, !1);
        const zU = await this.storePlayerPack(XU);
        return zU && this.announce(), zU
      }
      async packForGame(UU, XU, zU) {
        await this.readyWithin(Math.max(0, (null !== zU && void 0 !== zU ? zU : performance.now() + EU.c) - performance.now()));
        const yU = ++this.picks,
          QU = (0, cU.l)(UU) ? (0, cU.p)(UU) : null;
        if (null === QU) return void this.usePlayerPack();
        let AU;
        const FU = function(UU) {
          let XU;
          const zU = new Promise(((zU, cU) => {
            XU = setTimeout((() => {
              cU(new Error(`no answer in ${UU} ms`))
            }), UU)
          }));
          return zU.catch((() => {})), {
            passed: zU,
            clear: () => {
              clearTimeout(XU)
            }
          }
        }(2e4);
        try {
          const UU = await Promise.race([XU.packKey(QU), FU.passed]);
          if (null !== UU && this.onGamePack && this.state.gameSource === UU) return;
          if (null !== UU && UU === this.skippedKey) return void(this.kp || this.picks !== yU || this.usePlayerPack());
          AU = null === UU ? null : await Promise.race([aU(QU, UU, XU), FU.passed])
        } catch (YU) {
          const UU = !this.kp && this.picks === yU && this.holdsOtherGamePack(QU);
          return this.host.warn(`the texture pack of ${QU} didn't load: ${UU?"the player's own shows":"the pack in play stays"}`, YU), void(UU && this.usePlayerPack())
        } finally {
          FU.clear()
        }
        if (this.kp || this.picks !== yU) return;
        null !== AU && (0, DU.h)(AU.pack) && (this.host.warn(`the texture pack of ${QU} names files on other sites: the player's own shows`, null), AU = null);
        const oU = null === AU || await this.confirmed(AU.pack, QU) ? null : AU.key;
        this.kp || this.picks !== yU || (null !== oU && (this.skippedKey = oU, AU = null), null === AU ? this.usePlayerPack() : (this.onGamePack = !0, this.change({
          pack: AU.pack,
          gameSource: AU.key
        }, !0)))
      }
      endGamePack() {
        this.picks++, this.usePlayerPack()
      }
      holdsOtherGamePack(UU) {
        return this.onGamePack && "" !== this.state.gameSource && !this.isUsingCustomGameTexturePack(UU)
      }
      async confirmed(UU, XU) {
        const zU = this.confirmGamePack;
        if (null === zU) return !0;
        try {
          return await zU(UU, XU)
        } catch (cU) {
          return this.host.warn(`the texture pack prompt of ${XU} failed: the pack is skipped`, cU), !1
        }
      }
      async readPlayerPack() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (null !== UU && this.ownAnnouncements.delete(UU)) return;
        await this.ready;
        const XU = this.ownChanges;
        let zU;
        try {
          zU = await this.host.store.getItem(AU.e, !0)
        } catch (yU) {
          return void this.host.warn("the stored texture pack didn't read again: the pack in play stays", yU)
        }
        if (this.kp || this.ownChanges !== XU) return;
        const cU = gU(zU);
        (0, NU.d)(cU, this.playerPack) || (this.ownChanges++, this.setOwn(cU), this.onGamePack || this.change({
          pack: cU,
          gameSource: null
        }, !1))
      }
      joinedWithout() {
        this.picks++
      }
      dispose() {
        this.kp = !0, this.listeners.clear()
      }
      async readStored() {
        const {
          store: UU,
          warn: XU
        } = this.host;
        await Promise.all([!1 === this.host.oneShot ? void 0 : (0, oU.g)(UU, !0, (UU => {
          XU("the custom game's texture pack wasn't removed from storage", UU)
        })).then((UU => {
          this.takeOneShot(UU)
        }), (UU => {
          XU("the custom game's texture pack didn't read: the player's own shows", UU)
        })), UU.getItem(AU.e, !0).then((UU => {
          this.takeStoredOwn(UU)
        }), (UU => {
          XU("the stored texture pack didn't read: the default pack shows", UU), this.takeStoredOwn(null)
        }))]), this.update()
      }
      takeOneShot(UU) {
        var XU;
        null === UU || this.kp || this.changes > 0 || this.picks > 0 || ((0, DU.h)(UU.pack) ? this.host.warn("the custom game's texture pack names files on other sites: the player's own shows", null) : (this.onGamePack = !0, this.state = {
          pack: UU.pack,
          gameSource: null !== (XU = UU.source) && void 0 !== XU ? XU : ""
        }))
      }
      takeStoredOwn(UU) {
        if (this.playerPicked || this.kp) return;
        if (this.ownChanges++, this.setOwn(gU(UU)), this.onGamePack) return;
        const XU = {
          pack: this.playerPack,
          gameSource: null
        };
        0 === this.changes ? this.state = XU : this.change(XU, !1)
      }
      async update() {
        const UU = this.playerPack,
          XU = null === UU || void 0 === UU ? void 0 : UU.metaData.id;
        if (!UU || !XU || !this.host.fetchLatest || XU === yU.b || XU === yU.p.CUSTOM) return;
        const zU = yU.s[XU];
        if (void 0 === zU || UU.metaData.version >= zU) return;
        let cU;
        try {
          cU = gU(await this.host.fetchLatest(XU))
        } catch (QU) {
          return void this.host.warn(`texture pack ${XU} didn't update to version ${zU}`, QU)
        }
        null === cU || this.kp || this.playerPack !== UU || (this.ownChanges++, this.setOwn(cU), this.onGamePack || this.change({
          pack: cU,
          gameSource: null
        }, !1), await this.storePlayerPack(cU) && this.announce())
      }
      announce() {
        const UU = (0, FU.b)();
        null !== UU && this.ownAnnouncements.add(UU)
      }
      setOwn(UU) {
        this.playerPack = UU;
        for (const zU of [...this.ownListeners]) try {
          zU()
        } catch (XU) {
          this.host.warn("a texture pack listener threw", XU)
        }
      }
      usePlayerPack() {
        this.onGamePack && this.change({
          pack: this.playerPack,
          gameSource: null
        }, !1)
      }
      async storePlayerPack(UU) {
        try {
          return null === UU ? (await this.host.store.removeItem(AU.e), !0) : await this.host.store.setItem(AU.e, UU)
        } catch (XU) {
          return this.host.warn("the texture pack wasn't stored: it shows until the page reloads", XU), !1
        }
      }
      change(UU, XU) {
        if (!this.kp) {
          this.changes++, this.onGamePack = XU, this.state = UU;
          for (const UU of [...this.listeners.keys()]) this.deliver(UU)
        }
      }
      deliver(UU) {
        if (!this.kp && this.listeners.has(UU) && this.listeners.get(UU) !== this.state) {
          this.listeners.set(UU, this.state);
          try {
            UU(this.state)
          } catch (XU) {
            this.host.warn("a texture pack listener threw", XU)
          }
        }
      }
    }
    async function aU(UU, XU, zU) {
      const cU = (0, oU.c)(await zU.fetchPack(XU));
      if (null !== cU) return {
        pack: cU,
        key: XU
      };
      const yU = await zU.packKey(UU);
      if (null === yU) return null;
      const QU = (0, oU.c)(await zU.fetchPack(yU));
      if (null === QU) throw new Error(`no texture pack at ${yU}`);
      return {
        pack: QU,
        key: yU
      }
    }

    function tU(UU) {
      return null === UU || UU.metaData.id === yU.b
    }

    function gU(UU) {
      const XU = (0, oU.c)(UU);
      return tU(XU) ? null : XU
    }
    async function kU(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QU.e;
      if (null === UU.pack) return null;
      const {
        packAssets: cU
      } = await Promise.all([zU.e(221), zU.e(52)]).then((() => zU(64155)));
      return cU(UU, XU)
    }

    function GU(UU) {
      const XU = (0, AU.A)();
      return null === XU ? () => {} : (XU.onmessage = XU => {
        UU.readPlayerPack((0, FU.d)(XU.data))
      }, () => {
        XU.close()
      })
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);