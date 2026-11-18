export const id = 179;
export const ids = [179];
export const modules = {
  8606: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => UJ,
      h: () => eJ
    });
    var FJ = ZJ(2753);

    function UJ() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const JJ = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const cJ = new BroadcastChannel(FJ.i);
        cJ.postMessage({
          stored: JJ
        }), cJ.close()
      } catch {
        return null
      }
      return JJ
    }

    function eJ(JJ) {
      const cJ = "object" === typeof JJ && null !== JJ ? JJ.stored : null;
      return "string" === typeof cJ ? cJ : null
    }
  },
  8601: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => XJ,
      g: () => UJ,
      h: () => eJ
    });
    var FJ = ZJ(2753);
    async function UJ(JJ, cJ, ZJ) {
      let UJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const eJ = XJ(await JJ.getItem(FJ.f, cJ));
      if (null === eJ || UJ()) return null;
      const AJ = await JJ.getItem(FJ.g, cJ);
      return UJ() ? null : (await async function(JJ) {
        await Promise.all([JJ.removeItem(FJ.f), JJ.removeItem(FJ.g)])
      }(JJ).catch(ZJ), {
        pack: eJ,
        source: "string" === typeof AJ ? AJ : null
      })
    }

    function eJ(JJ) {
      return (0, FJ.q)() ? Promise.resolve(null) : UJ(JJ, !1, (JJ => {
        console.error("Error removing temporary texture pack: ", JJ)
      }), FJ.q)
    }

    function XJ(JJ) {
      if ("object" !== typeof JJ || null === JJ) return null;
      const cJ = JJ.metaData;
      return "object" !== typeof cJ || null === cJ || "string" !== typeof cJ.id ? null : JJ
    }
  },
  41989: (JJ, cJ, ZJ) => {
    function FJ(JJ) {
      return null === JJ.gameSource ? "player" : "customGame"
    }
    ZJ.d(cJ, {
      e: () => eJ,
      f: () => GJ,
      h: () => nJ,
      l: () => FJ
    });
    const UJ = /^data:[\w.+/-]*;base64,[A-Za-z0-9+/]*={0,2}$/;

    function eJ(JJ) {
      return "" === JJ || "string" === typeof JJ && UJ.test(JJ)
    }

    function XJ(JJ) {
      return "object" === typeof JJ && null !== JJ && ("earth" === JJ.type || Object.entries(JJ).every((JJ => {
        let [cJ, ZJ] = JJ;
        return "type" === cJ || eJ(ZJ)
      })))
    }
    const AJ = /(?:src|image|image-set|cross-fade)\(/i,
      qJ = /url\(\s*(?:"(?<doubleQuoted>[^"]*)"|'(?<singleQuoted>[^']*)'|(?<unquoted>[^"'()\s]*))\s*\)/gi,
      jJ = /url\(/gi,
      YJ = ["https://bloxd.invalid/", "http://bloxd.invalid/"],
      hJ = new Set([...YJ.map((JJ => new URL(JJ).origin)), "https://fonts.gstatic.com"]),
      DJ = new Set(["https://i.imgur.com/MEcjBFQ.png"]);

    function sJ(JJ) {
      var cJ, ZJ;
      if (JJ.includes("\\") || AJ.test(JJ)) return !0;
      const FJ = [...JJ.matchAll(qJ)];
      return FJ.length !== (null !== (cJ = null === (ZJ = JJ.match(jJ)) || void 0 === ZJ ? void 0 : ZJ.length) && void 0 !== cJ ? cJ : 0) || !FJ.every((JJ => {
        var cJ, ZJ, FJ;
        let {
          groups: UJ
        } = JJ;
        return function(JJ) {
          try {
            return YJ.every((cJ => {
              const ZJ = new URL(JJ, cJ);
              return "data:" === ZJ.protocol || hJ.has(ZJ.origin) || DJ.has(ZJ.href)
            }))
          } catch {
            return !1
          }
        }(null !== (cJ = null !== (ZJ = null !== (FJ = null === UJ || void 0 === UJ ? void 0 : UJ.doubleQuoted) && void 0 !== FJ ? FJ : null === UJ || void 0 === UJ ? void 0 : UJ.singleQuoted) && void 0 !== ZJ ? ZJ : null === UJ || void 0 === UJ ? void 0 : UJ.unquoted) && void 0 !== cJ ? cJ : "")
      }))
    }

    function nJ(JJ) {
      var cJ, ZJ, FJ, UJ, AJ, qJ, jJ;
      const YJ = [...Object.values(null !== (cJ = JJ.textureOverrides) && void 0 !== cJ ? cJ : {}), ...Object.values(null !== (ZJ = JJ.modelOverrides) && void 0 !== ZJ ? ZJ : {})],
        hJ = [...Object.values(null !== (FJ = null === (UJ = JJ.customCss) || void 0 === UJ ? void 0 : UJ.fontFaces) && void 0 !== FJ ? FJ : {}), ...Object.values(null !== (AJ = null === (qJ = JJ.customCss) || void 0 === qJ ? void 0 : qJ.classStyles) && void 0 !== AJ ? AJ : {})].flatMap((JJ => Object.values(null !== JJ && void 0 !== JJ ? JJ : {})));
      return !YJ.every(eJ) || !Object.values(null !== (jJ = JJ.skyBoxes) && void 0 !== jJ ? jJ : {}).every(XJ) || hJ.some((JJ => "string" === typeof JJ && sJ(JJ)))
    }

    function GJ(JJ, cJ) {
      if (null === JJ || "player" === cJ || !nJ(JJ)) return JJ;
      const ZJ = {
        ...JJ
      };
      return JJ.textureOverrides && (ZJ.textureOverrides = xJ(JJ.textureOverrides, eJ, "texture")), JJ.modelOverrides && (ZJ.modelOverrides = xJ(JJ.modelOverrides, eJ, "model")), JJ.skyBoxes && (ZJ.skyBoxes = xJ(JJ.skyBoxes, XJ, "sky")), JJ.customCss && (ZJ.customCss = function(JJ) {
        const cJ = JJ => xJ(JJ, (JJ => "string" === typeof JJ && !sJ(JJ)), "CSS"),
          {
            fontFaces: ZJ,
            classStyles: FJ
          } = fJ(JJ) ? JJ : {},
          UJ = {};
        for (const [eJ, XJ] of Object.entries(fJ(FJ) ? FJ : {})) UJ[eJ] = cJ(XJ);
        return {
          fontFaces: (Array.isArray(ZJ) ? ZJ : []).map(cJ),
          classStyles: UJ
        }
      }(JJ.customCss)), ZJ
    }

    function fJ(JJ) {
      return "object" === typeof JJ && null !== JJ && !Array.isArray(JJ)
    }

    function xJ(JJ, cJ, ZJ) {
      const FJ = Object.entries(fJ(JJ) ? JJ : {}),
        UJ = FJ.filter((JJ => {
          let [, ZJ] = JJ;
          return !cJ(ZJ)
        }));
      if (UJ.length > 0) {
        const JJ = UJ.map((JJ => {
          let [cJ] = JJ;
          return cJ
        }));
        console.warn(`Ignoring a custom game texture pack's ${ZJ} files that name another site: ${JJ.join(", ")}`)
      }
      return Object.fromEntries(FJ.filter((JJ => {
        let [, ZJ] = JJ;
        return cJ(ZJ)
      })))
    }
  },
  41991: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => nJ,
      i: () => vJ,
      j: () => rJ
    });
    var FJ = ZJ(889),
      UJ = ZJ(2651),
      eJ = ZJ(2745),
      XJ = ZJ(2753),
      AJ = ZJ(8606),
      qJ = ZJ(8601),
      jJ = ZJ(41989),
      YJ = ZJ(39831),
      hJ = ZJ(39815),
      DJ = ZJ(4448);
    const sJ = {
      pack: null,
      gameSource: null
    };
    class nJ {
      constructor(JJ) {
        this.host = JJ, this.ready = void 0, this.state = sJ, this.playerPack = null, this.onGamePack = !1, this.confirmGamePack = null, this.skippedKey = null, this.ownAnnouncements = new Set, this.listeners = new Map, this.ownListeners = new Set, this.changes = 0, this.picks = 0, this.playerPicked = !1, this.ownChanges = 0, this.xn = !1, (0, XJ.l)(), this.ready = this.readStored()
      }
      readyWithin(JJ) {
        return Promise.race([this.ready, new Promise((cJ => {
          setTimeout(cJ, JJ)
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
      onPlayerPackChange(JJ) {
        return this.ownListeners.add(JJ), () => {
          this.ownListeners.delete(JJ)
        }
      }
      isUsingCustomGameTexturePack(JJ) {
        return (0, hJ.f)(this.state, JJ)
      }
      setGamePackConfirm(JJ) {
        this.confirmGamePack = JJ
      }
      subscribe(JJ) {
        return this.listeners.set(JJ, null), this.ready.then((() => {
          this.deliver(JJ)
        })), () => {
          this.listeners.delete(JJ)
        }
      }
      async setPlayerPack(JJ) {
        const cJ = fJ(JJ) ? null : JJ;
        this.picks++, this.playerPicked = !0, this.ownChanges++, this.setOwn(cJ), this.change({
          pack: cJ,
          gameSource: null
        }, !1);
        const ZJ = await this.storePlayerPack(cJ);
        return ZJ && this.announce(), ZJ
      }
      async packForGame(JJ, cJ, ZJ) {
        await this.readyWithin(Math.max(0, (null !== ZJ && void 0 !== ZJ ? ZJ : performance.now() + YJ.d) - performance.now()));
        const UJ = ++this.picks,
          eJ = (0, FJ.k)(JJ) ? (0, FJ.n)(JJ) : null;
        if (null === eJ) return void this.usePlayerPack();
        let XJ;
        const AJ = function(JJ) {
          let cJ;
          const ZJ = new Promise(((ZJ, FJ) => {
            cJ = setTimeout((() => {
              FJ(new Error(`no answer in ${JJ} ms`))
            }), JJ)
          }));
          return ZJ.catch((() => {})), {
            passed: ZJ,
            clear: () => {
              clearTimeout(cJ)
            }
          }
        }(2e4);
        try {
          const JJ = await Promise.race([cJ.packKey(eJ), AJ.passed]);
          if (null !== JJ && this.onGamePack && this.state.gameSource === JJ) return;
          if (null !== JJ && JJ === this.skippedKey) return void(this.xn || this.picks !== UJ || this.usePlayerPack());
          XJ = null === JJ ? null : await Promise.race([GJ(eJ, JJ, cJ), AJ.passed])
        } catch (hJ) {
          const JJ = !this.xn && this.picks === UJ && this.holdsOtherGamePack(eJ);
          return this.host.warn(`the texture pack of ${eJ} didn't load: ${JJ?"the player's own shows":"the pack in play stays"}`, hJ), void(JJ && this.usePlayerPack())
        } finally {
          AJ.clear()
        }
        if (this.xn || this.picks !== UJ) return;
        null !== XJ && (0, jJ.h)(XJ.pack) && (this.host.warn(`the texture pack of ${eJ} names files on other sites: the player's own shows`, null), XJ = null);
        const qJ = null === XJ || await this.confirmed(XJ.pack, eJ) ? null : XJ.key;
        this.xn || this.picks !== UJ || (null !== qJ && (this.skippedKey = qJ, XJ = null), null === XJ ? this.usePlayerPack() : (this.onGamePack = !0, this.change({
          pack: XJ.pack,
          gameSource: XJ.key
        }, !0)))
      }
      endGamePack() {
        this.picks++, this.usePlayerPack()
      }
      holdsOtherGamePack(JJ) {
        return this.onGamePack && "" !== this.state.gameSource && !this.isUsingCustomGameTexturePack(JJ)
      }
      async confirmed(JJ, cJ) {
        const ZJ = this.confirmGamePack;
        if (null === ZJ) return !0;
        try {
          return await ZJ(JJ, cJ)
        } catch (FJ) {
          return this.host.warn(`the texture pack prompt of ${cJ} failed: the pack is skipped`, FJ), !1
        }
      }
      async readPlayerPack() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (null !== JJ && this.ownAnnouncements.delete(JJ)) return;
        await this.ready;
        const cJ = this.ownChanges;
        let ZJ;
        try {
          ZJ = await this.host.store.getItem(XJ.c, !0)
        } catch (UJ) {
          return void this.host.warn("the stored texture pack didn't read again: the pack in play stays", UJ)
        }
        if (this.xn || this.ownChanges !== cJ) return;
        const FJ = xJ(ZJ);
        (0, DJ.b)(FJ, this.playerPack) || (this.ownChanges++, this.setOwn(FJ), this.onGamePack || this.change({
          pack: FJ,
          gameSource: null
        }, !1))
      }
      joinedWithout() {
        this.picks++
      }
      dispose() {
        this.xn = !0, this.listeners.clear()
      }
      async readStored() {
        const {
          store: JJ,
          warn: cJ
        } = this.host;
        await Promise.all([!1 === this.host.oneShot ? void 0 : (0, qJ.g)(JJ, !0, (JJ => {
          cJ("the custom game's texture pack wasn't removed from storage", JJ)
        })).then((JJ => {
          this.takeOneShot(JJ)
        }), (JJ => {
          cJ("the custom game's texture pack didn't read: the player's own shows", JJ)
        })), JJ.getItem(XJ.c, !0).then((JJ => {
          this.takeStoredOwn(JJ)
        }), (JJ => {
          cJ("the stored texture pack didn't read: the default pack shows", JJ), this.takeStoredOwn(null)
        }))]), this.update()
      }
      takeOneShot(JJ) {
        var cJ;
        null === JJ || this.xn || this.changes > 0 || this.picks > 0 || ((0, jJ.h)(JJ.pack) ? this.host.warn("the custom game's texture pack names files on other sites: the player's own shows", null) : (this.onGamePack = !0, this.state = {
          pack: JJ.pack,
          gameSource: null !== (cJ = JJ.source) && void 0 !== cJ ? cJ : ""
        }))
      }
      takeStoredOwn(JJ) {
        if (this.playerPicked || this.xn) return;
        if (this.ownChanges++, this.setOwn(xJ(JJ)), this.onGamePack) return;
        const cJ = {
          pack: this.playerPack,
          gameSource: null
        };
        0 === this.changes ? this.state = cJ : this.change(cJ, !1)
      }
      async update() {
        const JJ = this.playerPack,
          cJ = null === JJ || void 0 === JJ ? void 0 : JJ.metaData.id;
        if (!JJ || !cJ || !this.host.fetchLatest || cJ === UJ.d || cJ === UJ.r.CUSTOM) return;
        const ZJ = UJ.v[cJ];
        if (void 0 === ZJ || JJ.metaData.version >= ZJ) return;
        let FJ;
        try {
          FJ = xJ(await this.host.fetchLatest(cJ))
        } catch (eJ) {
          return void this.host.warn(`texture pack ${cJ} didn't update to version ${ZJ}`, eJ)
        }
        null === FJ || this.xn || this.playerPack !== JJ || (this.ownChanges++, this.setOwn(FJ), this.onGamePack || this.change({
          pack: FJ,
          gameSource: null
        }, !1), await this.storePlayerPack(FJ) && this.announce())
      }
      announce() {
        const JJ = (0, AJ.d)();
        null !== JJ && this.ownAnnouncements.add(JJ)
      }
      setOwn(JJ) {
        this.playerPack = JJ;
        for (const ZJ of [...this.ownListeners]) try {
          ZJ()
        } catch (cJ) {
          this.host.warn("a texture pack listener threw", cJ)
        }
      }
      usePlayerPack() {
        this.onGamePack && this.change({
          pack: this.playerPack,
          gameSource: null
        }, !1)
      }
      async storePlayerPack(JJ) {
        try {
          return null === JJ ? (await this.host.store.removeItem(XJ.c), !0) : await this.host.store.setItem(XJ.c, JJ)
        } catch (cJ) {
          return this.host.warn("the texture pack wasn't stored: it shows until the page reloads", cJ), !1
        }
      }
      change(JJ, cJ) {
        if (!this.xn) {
          this.changes++, this.onGamePack = cJ, this.state = JJ;
          for (const JJ of [...this.listeners.keys()]) this.deliver(JJ)
        }
      }
      deliver(JJ) {
        if (!this.xn && this.listeners.has(JJ) && this.listeners.get(JJ) !== this.state) {
          this.listeners.set(JJ, this.state);
          try {
            JJ(this.state)
          } catch (cJ) {
            this.host.warn("a texture pack listener threw", cJ)
          }
        }
      }
    }
    async function GJ(JJ, cJ, ZJ) {
      const FJ = (0, qJ.c)(await ZJ.fetchPack(cJ));
      if (null !== FJ) return {
        pack: FJ,
        key: cJ
      };
      const UJ = await ZJ.packKey(JJ);
      if (null === UJ) return null;
      const eJ = (0, qJ.c)(await ZJ.fetchPack(UJ));
      if (null === eJ) throw new Error(`no texture pack at ${UJ}`);
      return {
        pack: eJ,
        key: UJ
      }
    }

    function fJ(JJ) {
      return null === JJ || JJ.metaData.id === UJ.d
    }

    function xJ(JJ) {
      const cJ = (0, qJ.c)(JJ);
      return fJ(cJ) ? null : cJ
    }
    async function rJ(JJ) {
      let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eJ.e;
      if (null === JJ.pack) return null;
      const {
        packAssets: FJ
      } = await Promise.all([ZJ.e(181), ZJ.e(41)]).then((() => ZJ(59741)));
      return FJ(JJ, cJ)
    }

    function vJ(JJ) {
      const cJ = (0, XJ.t)();
      return null === cJ ? () => {} : (cJ.onmessage = cJ => {
        JJ.readPlayerPack((0, AJ.h)(cJ.data))
      }, () => {
        cJ.close()
      })
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);