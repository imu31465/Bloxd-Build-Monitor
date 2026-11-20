export const id = 193;
export const ids = [193];
export const modules = {
  9051: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => pU,
      h: () => EU
    });
    var tU = gU(2959);

    function pU() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const UU = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const RU = new BroadcastChannel(tU.j);
        RU.postMessage({
          stored: UU
        }), RU.close()
      } catch {
        return null
      }
      return UU
    }

    function EU(UU) {
      const RU = "object" === typeof UU && null !== UU ? UU.stored : null;
      return "string" === typeof RU ? RU : null
    }
  },
  9045: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => PU,
      i: () => pU,
      m: () => EU
    });
    var tU = gU(2959);
    async function pU(UU, RU, gU) {
      let pU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const EU = PU(await UU.getItem(tU.e, RU));
      if (null === EU || pU()) return null;
      const TU = await UU.getItem(tU.i, RU);
      return pU() ? null : (await async function(UU) {
        await Promise.all([UU.removeItem(tU.e), UU.removeItem(tU.i)])
      }(UU).catch(gU), {
        pack: EU,
        source: "string" === typeof TU ? TU : null
      })
    }

    function EU(UU) {
      return (0, tU.s)() ? Promise.resolve(null) : pU(UU, !1, (UU => {
        console.error("Error removing temporary texture pack: ", UU)
      }), tU.s)
    }

    function PU(UU) {
      if ("object" !== typeof UU || null === UU) return null;
      const RU = UU.metaData;
      return "object" !== typeof RU || null === RU || "string" !== typeof RU.id ? null : UU
    }
  },
  42655: (UU, RU, gU) => {
    function tU(UU) {
      return null === UU.gameSource ? "player" : "customGame"
    }
    gU.d(RU, {
      d: () => EU,
      g: () => hU,
      i: () => CU,
      j: () => tU
    });
    const pU = /^data:[\w.+/-]*;base64,[A-Za-z0-9+/]*={0,2}$/;

    function EU(UU) {
      return "" === UU || "string" === typeof UU && pU.test(UU)
    }

    function PU(UU) {
      return "object" === typeof UU && null !== UU && ("earth" === UU.type || Object.entries(UU).every((UU => {
        let [RU, gU] = UU;
        return "type" === RU || EU(gU)
      })))
    }
    const TU = /(?:src|image|image-set|cross-fade)\(/i,
      qU = /url\(\s*(?:"(?<doubleQuoted>[^"]*)"|'(?<singleQuoted>[^']*)'|(?<unquoted>[^"'()\s]*))\s*\)/gi,
      KU = /url\(/gi,
      cU = ["https://bloxd.invalid/", "http://bloxd.invalid/"],
      GU = new Set([...cU.map((UU => new URL(UU).origin)), "https://fonts.gstatic.com"]),
      jU = new Set(["https://i.imgur.com/MEcjBFQ.png"]);

    function uU(UU) {
      var RU, gU;
      if (UU.includes("\\") || TU.test(UU)) return !0;
      const tU = [...UU.matchAll(qU)];
      return tU.length !== (null !== (RU = null === (gU = UU.match(KU)) || void 0 === gU ? void 0 : gU.length) && void 0 !== RU ? RU : 0) || !tU.every((UU => {
        var RU, gU, tU;
        let {
          groups: pU
        } = UU;
        return function(UU) {
          try {
            return cU.every((RU => {
              const gU = new URL(UU, RU);
              return "data:" === gU.protocol || GU.has(gU.origin) || jU.has(gU.href)
            }))
          } catch {
            return !1
          }
        }(null !== (RU = null !== (gU = null !== (tU = null === pU || void 0 === pU ? void 0 : pU.doubleQuoted) && void 0 !== tU ? tU : null === pU || void 0 === pU ? void 0 : pU.singleQuoted) && void 0 !== gU ? gU : null === pU || void 0 === pU ? void 0 : pU.unquoted) && void 0 !== RU ? RU : "")
      }))
    }

    function CU(UU) {
      var RU, gU, tU, pU, TU, qU, KU;
      const cU = [...Object.values(null !== (RU = UU.textureOverrides) && void 0 !== RU ? RU : {}), ...Object.values(null !== (gU = UU.modelOverrides) && void 0 !== gU ? gU : {})],
        GU = [...Object.values(null !== (tU = null === (pU = UU.customCss) || void 0 === pU ? void 0 : pU.fontFaces) && void 0 !== tU ? tU : {}), ...Object.values(null !== (TU = null === (qU = UU.customCss) || void 0 === qU ? void 0 : qU.classStyles) && void 0 !== TU ? TU : {})].flatMap((UU => Object.values(null !== UU && void 0 !== UU ? UU : {})));
      return !cU.every(EU) || !Object.values(null !== (KU = UU.skyBoxes) && void 0 !== KU ? KU : {}).every(PU) || GU.some((UU => "string" === typeof UU && uU(UU)))
    }

    function hU(UU, RU) {
      if (null === UU || "player" === RU || !CU(UU)) return UU;
      const gU = {
        ...UU
      };
      return UU.textureOverrides && (gU.textureOverrides = eU(UU.textureOverrides, EU, "texture")), UU.modelOverrides && (gU.modelOverrides = eU(UU.modelOverrides, EU, "model")), UU.skyBoxes && (gU.skyBoxes = eU(UU.skyBoxes, PU, "sky")), UU.customCss && (gU.customCss = function(UU) {
        const RU = UU => eU(UU, (UU => "string" === typeof UU && !uU(UU)), "CSS"),
          {
            fontFaces: gU,
            classStyles: tU
          } = QU(UU) ? UU : {},
          pU = {};
        for (const [EU, PU] of Object.entries(QU(tU) ? tU : {})) pU[EU] = RU(PU);
        return {
          fontFaces: (Array.isArray(gU) ? gU : []).map(RU),
          classStyles: pU
        }
      }(UU.customCss)), gU
    }

    function QU(UU) {
      return "object" === typeof UU && null !== UU && !Array.isArray(UU)
    }

    function eU(UU, RU, gU) {
      const tU = Object.entries(QU(UU) ? UU : {}),
        pU = tU.filter((UU => {
          let [, gU] = UU;
          return !RU(gU)
        }));
      if (pU.length > 0) {
        const UU = pU.map((UU => {
          let [RU] = UU;
          return RU
        }));
        console.warn(`Ignoring a custom game texture pack's ${gU} files that name another site: ${UU.join(", ")}`)
      }
      return Object.fromEntries(tU.filter((UU => {
        let [, gU] = UU;
        return RU(gU)
      })))
    }
  },
  42658: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => CU,
      f: () => fU,
      g: () => WU
    });
    var tU = gU(994),
      pU = gU(2850),
      EU = gU(2951),
      PU = gU(2959),
      TU = gU(9051),
      qU = gU(9045),
      KU = gU(42655),
      cU = gU(40441),
      GU = gU(40428),
      jU = gU(4717);
    const uU = {
      pack: null,
      gameSource: null
    };
    class CU {
      constructor(UU) {
        this.host = UU, this.ready = void 0, this.state = uU, this.playerPack = null, this.onGamePack = !1, this.confirmGamePack = null, this.skippedKey = null, this.ownAnnouncements = new Set, this.listeners = new Map, this.ownListeners = new Set, this.changes = 0, this.picks = 0, this.playerPicked = !1, this.ownChanges = 0, this.pC = !1, (0, PU.l)(), this.ready = this.readStored()
      }
      readyWithin(UU) {
        return Promise.race([this.ready, new Promise((RU => {
          setTimeout(RU, UU)
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
        return (0, GU.d)(this.state, UU)
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
        const RU = QU(UU) ? null : UU;
        this.picks++, this.playerPicked = !0, this.ownChanges++, this.setOwn(RU), this.change({
          pack: RU,
          gameSource: null
        }, !1);
        const gU = await this.storePlayerPack(RU);
        return gU && this.announce(), gU
      }
      async packForGame(UU, RU, gU) {
        await this.readyWithin(Math.max(0, (null !== gU && void 0 !== gU ? gU : performance.now() + cU.d) - performance.now()));
        const pU = ++this.picks,
          EU = (0, tU.m)(UU) ? (0, tU.q)(UU) : null;
        if (null === EU) return void this.usePlayerPack();
        let PU;
        const TU = function(UU) {
          let RU;
          const gU = new Promise(((gU, tU) => {
            RU = setTimeout((() => {
              tU(new Error(`no answer in ${UU} ms`))
            }), UU)
          }));
          return gU.catch((() => {})), {
            passed: gU,
            clear: () => {
              clearTimeout(RU)
            }
          }
        }(2e4);
        try {
          const UU = await Promise.race([RU.packKey(EU), TU.passed]);
          if (null !== UU && this.onGamePack && this.state.gameSource === UU) return;
          if (null !== UU && UU === this.skippedKey) return void(this.pC || this.picks !== pU || this.usePlayerPack());
          PU = null === UU ? null : await Promise.race([hU(EU, UU, RU), TU.passed])
        } catch (GU) {
          const UU = !this.pC && this.picks === pU && this.holdsOtherGamePack(EU);
          return this.host.warn(`the texture pack of ${EU} didn't load: ${UU?"the player's own shows":"the pack in play stays"}`, GU), void(UU && this.usePlayerPack())
        } finally {
          TU.clear()
        }
        if (this.pC || this.picks !== pU) return;
        null !== PU && (0, KU.i)(PU.pack) && (this.host.warn(`the texture pack of ${EU} names files on other sites: the player's own shows`, null), PU = null);
        const qU = null === PU || await this.confirmed(PU.pack, EU) ? null : PU.key;
        this.pC || this.picks !== pU || (null !== qU && (this.skippedKey = qU, PU = null), null === PU ? this.usePlayerPack() : (this.onGamePack = !0, this.change({
          pack: PU.pack,
          gameSource: PU.key
        }, !0)))
      }
      endGamePack() {
        this.picks++, this.usePlayerPack()
      }
      holdsOtherGamePack(UU) {
        return this.onGamePack && "" !== this.state.gameSource && !this.isUsingCustomGameTexturePack(UU)
      }
      async confirmed(UU, RU) {
        const gU = this.confirmGamePack;
        if (null === gU) return !0;
        try {
          return await gU(UU, RU)
        } catch (tU) {
          return this.host.warn(`the texture pack prompt of ${RU} failed: the pack is skipped`, tU), !1
        }
      }
      async readPlayerPack() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (null !== UU && this.ownAnnouncements.delete(UU)) return;
        await this.ready;
        const RU = this.ownChanges;
        let gU;
        try {
          gU = await this.host.store.getItem(PU.c, !0)
        } catch (pU) {
          return void this.host.warn("the stored texture pack didn't read again: the pack in play stays", pU)
        }
        if (this.pC || this.ownChanges !== RU) return;
        const tU = eU(gU);
        (0, jU.b)(tU, this.playerPack) || (this.ownChanges++, this.setOwn(tU), this.onGamePack || this.change({
          pack: tU,
          gameSource: null
        }, !1))
      }
      joinedWithout() {
        this.picks++
      }
      dispose() {
        this.pC = !0, this.listeners.clear()
      }
      async readStored() {
        const {
          store: UU,
          warn: RU
        } = this.host;
        await Promise.all([!1 === this.host.oneShot ? void 0 : (0, qU.i)(UU, !0, (UU => {
          RU("the custom game's texture pack wasn't removed from storage", UU)
        })).then((UU => {
          this.takeOneShot(UU)
        }), (UU => {
          RU("the custom game's texture pack didn't read: the player's own shows", UU)
        })), UU.getItem(PU.c, !0).then((UU => {
          this.takeStoredOwn(UU)
        }), (UU => {
          RU("the stored texture pack didn't read: the default pack shows", UU), this.takeStoredOwn(null)
        }))]), this.update()
      }
      takeOneShot(UU) {
        var RU;
        null === UU || this.pC || this.changes > 0 || this.picks > 0 || ((0, KU.i)(UU.pack) ? this.host.warn("the custom game's texture pack names files on other sites: the player's own shows", null) : (this.onGamePack = !0, this.state = {
          pack: UU.pack,
          gameSource: null !== (RU = UU.source) && void 0 !== RU ? RU : ""
        }))
      }
      takeStoredOwn(UU) {
        if (this.playerPicked || this.pC) return;
        if (this.ownChanges++, this.setOwn(eU(UU)), this.onGamePack) return;
        const RU = {
          pack: this.playerPack,
          gameSource: null
        };
        0 === this.changes ? this.state = RU : this.change(RU, !1)
      }
      async update() {
        const UU = this.playerPack,
          RU = null === UU || void 0 === UU ? void 0 : UU.metaData.id;
        if (!UU || !RU || !this.host.fetchLatest || RU === pU.d || RU === pU.s.CUSTOM) return;
        const gU = pU.w[RU];
        if (void 0 === gU || UU.metaData.version >= gU) return;
        let tU;
        try {
          tU = eU(await this.host.fetchLatest(RU))
        } catch (EU) {
          return void this.host.warn(`texture pack ${RU} didn't update to version ${gU}`, EU)
        }
        null === tU || this.pC || this.playerPack !== UU || (this.ownChanges++, this.setOwn(tU), this.onGamePack || this.change({
          pack: tU,
          gameSource: null
        }, !1), await this.storePlayerPack(tU) && this.announce())
      }
      announce() {
        const UU = (0, TU.d)();
        null !== UU && this.ownAnnouncements.add(UU)
      }
      setOwn(UU) {
        this.playerPack = UU;
        for (const gU of [...this.ownListeners]) try {
          gU()
        } catch (RU) {
          this.host.warn("a texture pack listener threw", RU)
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
          return null === UU ? (await this.host.store.removeItem(PU.c), !0) : await this.host.store.setItem(PU.c, UU)
        } catch (RU) {
          return this.host.warn("the texture pack wasn't stored: it shows until the page reloads", RU), !1
        }
      }
      change(UU, RU) {
        if (!this.pC) {
          this.changes++, this.onGamePack = RU, this.state = UU;
          for (const UU of [...this.listeners.keys()]) this.deliver(UU)
        }
      }
      deliver(UU) {
        if (!this.pC && this.listeners.has(UU) && this.listeners.get(UU) !== this.state) {
          this.listeners.set(UU, this.state);
          try {
            UU(this.state)
          } catch (RU) {
            this.host.warn("a texture pack listener threw", RU)
          }
        }
      }
    }
    async function hU(UU, RU, gU) {
      const tU = (0, qU.e)(await gU.fetchPack(RU));
      if (null !== tU) return {
        pack: tU,
        key: RU
      };
      const pU = await gU.packKey(UU);
      if (null === pU) return null;
      const EU = (0, qU.e)(await gU.fetchPack(pU));
      if (null === EU) throw new Error(`no texture pack at ${pU}`);
      return {
        pack: EU,
        key: pU
      }
    }

    function QU(UU) {
      return null === UU || UU.metaData.id === pU.d
    }

    function eU(UU) {
      const RU = (0, qU.e)(UU);
      return QU(RU) ? null : RU
    }
    async function WU(UU) {
      let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : EU.c;
      if (null === UU.pack) return null;
      const {
        packAssets: tU
      } = await Promise.all([gU.e(195), gU.e(44)]).then((() => gU(60858)));
      return tU(UU, RU)
    }

    function fU(UU) {
      const RU = (0, PU.v)();
      return null === RU ? () => {} : (RU.onmessage = RU => {
        UU.readPlayerPack((0, TU.h)(RU.data))
      }, () => {
        RU.close()
      })
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);