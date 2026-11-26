export const id = 225;
export const ids = [225];
export const modules = {
  34856: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => DB,
      e: () => QB
    });
    var YB = GB(3670);

    function DB() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const BB = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const OB = new BroadcastChannel(YB.o);
        OB.postMessage({
          stored: BB
        }), OB.close()
      } catch {
        return null
      }
      return BB
    }

    function QB(BB) {
      const OB = "object" === typeof BB && null !== BB ? BB.stored : null;
      return "string" === typeof OB ? OB : null
    }
  },
  34854: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => oB,
      h: () => DB,
      l: () => QB
    });
    var YB = GB(3670);
    async function DB(BB, OB, GB) {
      let DB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const QB = oB(await BB.getItem(YB.i, OB));
      if (null === QB || DB()) return null;
      const jB = await BB.getItem(YB.m, OB);
      return DB() ? null : (await async function(BB) {
        await Promise.all([BB.removeItem(YB.i), BB.removeItem(YB.m)])
      }(BB).catch(GB), {
        pack: QB,
        source: "string" === typeof jB ? jB : null
      })
    }

    function QB(BB) {
      return (0, YB.u)() ? Promise.resolve(null) : DB(BB, !1, (BB => {
        console.error("Error removing temporary texture pack: ", BB)
      }), YB.u)
    }

    function oB(BB) {
      if ("object" !== typeof BB || null === BB) return null;
      const OB = BB.metaData;
      return "object" !== typeof OB || null === OB || "string" !== typeof OB.id ? null : BB
    }
  },
  54085: (BB, OB, GB) => {
    function YB(BB) {
      return null === BB.gameSource ? "player" : "customGame"
    }
    GB.d(OB, {
      e: () => QB,
      f: () => qB,
      g: () => pB,
      k: () => YB
    });
    const DB = /^data:[\w.+/-]*;base64,[A-Za-z0-9+/]*={0,2}$/;

    function QB(BB) {
      return "" === BB || "string" === typeof BB && DB.test(BB)
    }

    function oB(BB) {
      return "object" === typeof BB && null !== BB && ("earth" === BB.type || Object.entries(BB).every((BB => {
        let [OB, GB] = BB;
        return "type" === OB || QB(GB)
      })))
    }
    const jB = /(?:src|image|image-set|cross-fade)\(/i,
      yB = /url\(\s*(?:"(?<doubleQuoted>[^"]*)"|'(?<singleQuoted>[^']*)'|(?<unquoted>[^"'()\s]*))\s*\)/gi,
      JB = /url\(/gi,
      MB = ["https://bloxd.invalid/", "http://bloxd.invalid/"],
      PB = new Set([...MB.map((BB => new URL(BB).origin)), "https://fonts.gstatic.com"]),
      zB = new Set(["https://i.imgur.com/MEcjBFQ.png"]);

    function lB(BB) {
      var OB, GB;
      if (BB.includes("\\") || jB.test(BB)) return !0;
      const YB = [...BB.matchAll(yB)];
      return YB.length !== (null !== (OB = null === (GB = BB.match(JB)) || void 0 === GB ? void 0 : GB.length) && void 0 !== OB ? OB : 0) || !YB.every((BB => {
        var OB, GB, YB;
        let {
          groups: DB
        } = BB;
        return function(BB) {
          try {
            return MB.every((OB => {
              const GB = new URL(BB, OB);
              return "data:" === GB.protocol || PB.has(GB.origin) || zB.has(GB.href)
            }))
          } catch {
            return !1
          }
        }(null !== (OB = null !== (GB = null !== (YB = null === DB || void 0 === DB ? void 0 : DB.doubleQuoted) && void 0 !== YB ? YB : null === DB || void 0 === DB ? void 0 : DB.singleQuoted) && void 0 !== GB ? GB : null === DB || void 0 === DB ? void 0 : DB.unquoted) && void 0 !== OB ? OB : "")
      }))
    }

    function pB(BB) {
      var OB, GB, YB, DB, jB, yB, JB;
      const MB = [...Object.values(null !== (OB = BB.textureOverrides) && void 0 !== OB ? OB : {}), ...Object.values(null !== (GB = BB.modelOverrides) && void 0 !== GB ? GB : {})],
        PB = [...Object.values(null !== (YB = null === (DB = BB.customCss) || void 0 === DB ? void 0 : DB.fontFaces) && void 0 !== YB ? YB : {}), ...Object.values(null !== (jB = null === (yB = BB.customCss) || void 0 === yB ? void 0 : yB.classStyles) && void 0 !== jB ? jB : {})].flatMap((BB => Object.values(null !== BB && void 0 !== BB ? BB : {})));
      return !MB.every(QB) || !Object.values(null !== (JB = BB.skyBoxes) && void 0 !== JB ? JB : {}).every(oB) || PB.some((BB => "string" === typeof BB && lB(BB)))
    }

    function qB(BB, OB) {
      if (null === BB || "player" === OB || !pB(BB)) return BB;
      const GB = {
        ...BB
      };
      return BB.textureOverrides && (GB.textureOverrides = NB(BB.textureOverrides, QB, "texture")), BB.modelOverrides && (GB.modelOverrides = NB(BB.modelOverrides, QB, "model")), BB.skyBoxes && (GB.skyBoxes = NB(BB.skyBoxes, oB, "sky")), BB.customCss && (GB.customCss = function(BB) {
        const OB = BB => NB(BB, (BB => "string" === typeof BB && !lB(BB)), "CSS"),
          {
            fontFaces: GB,
            classStyles: YB
          } = ZB(BB) ? BB : {},
          DB = {};
        for (const [QB, oB] of Object.entries(ZB(YB) ? YB : {})) DB[QB] = OB(oB);
        return {
          fontFaces: (Array.isArray(GB) ? GB : []).map(OB),
          classStyles: DB
        }
      }(BB.customCss)), GB
    }

    function ZB(BB) {
      return "object" === typeof BB && null !== BB && !Array.isArray(BB)
    }

    function NB(BB, OB, GB) {
      const YB = Object.entries(ZB(BB) ? BB : {}),
        DB = YB.filter((BB => {
          let [, GB] = BB;
          return !OB(GB)
        }));
      if (DB.length > 0) {
        const BB = DB.map((BB => {
          let [OB] = BB;
          return OB
        }));
        console.warn(`Ignoring a custom game texture pack's ${GB} files that name another site: ${BB.join(", ")}`)
      }
      return Object.fromEntries(YB.filter((BB => {
        let [, GB] = BB;
        return OB(GB)
      })))
    }
  },
  54089: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => pB,
      h: () => WB,
      i: () => RB
    });
    var YB = GB(1049),
      DB = GB(2272),
      QB = GB(3659),
      oB = GB(3670),
      jB = GB(34856),
      yB = GB(34854),
      JB = GB(54085),
      MB = GB(42006),
      PB = GB(41987),
      zB = GB(5558);
    const lB = {
      pack: null,
      gameSource: null
    };
    class pB {
      constructor(BB) {
        this.host = BB, this.ready = void 0, this.state = lB, this.playerPack = null, this.onGamePack = !1, this.confirmGamePack = null, this.skippedKey = null, this.ownAnnouncements = new Set, this.listeners = new Map, this.ownListeners = new Set, this.changes = 0, this.picks = 0, this.playerPicked = !1, this.ownChanges = 0, this.Vp = !1, (0, oB.p)(), this.ready = this.readStored()
      }
      readyWithin(BB) {
        return Promise.race([this.ready, new Promise((OB => {
          setTimeout(OB, BB)
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
      onPlayerPackChange(BB) {
        return this.ownListeners.add(BB), () => {
          this.ownListeners.delete(BB)
        }
      }
      isUsingCustomGameTexturePack(BB) {
        return (0, PB.e)(this.state, BB)
      }
      setGamePackConfirm(BB) {
        this.confirmGamePack = BB
      }
      subscribe(BB) {
        return this.listeners.set(BB, null), this.ready.then((() => {
          this.deliver(BB)
        })), () => {
          this.listeners.delete(BB)
        }
      }
      async setPlayerPack(BB) {
        const OB = ZB(BB) ? null : BB;
        this.picks++, this.playerPicked = !0, this.ownChanges++, this.setOwn(OB), this.change({
          pack: OB,
          gameSource: null
        }, !1);
        const GB = await this.storePlayerPack(OB);
        return GB && this.announce(), GB
      }
      async packForGame(BB, OB, GB) {
        await this.readyWithin(Math.max(0, (null !== GB && void 0 !== GB ? GB : performance.now() + MB.e) - performance.now()));
        const DB = ++this.picks,
          QB = (0, YB.l)(BB) ? (0, YB.r)(BB) : null;
        if (null === QB) return void this.usePlayerPack();
        let oB;
        const jB = function(BB) {
          let OB;
          const GB = new Promise(((GB, YB) => {
            OB = setTimeout((() => {
              YB(new Error(`no answer in ${BB} ms`))
            }), BB)
          }));
          return GB.catch((() => {})), {
            passed: GB,
            clear: () => {
              clearTimeout(OB)
            }
          }
        }(2e4);
        try {
          const BB = await Promise.race([OB.packKey(QB), jB.passed]);
          if (null !== BB && this.onGamePack && this.state.gameSource === BB) return;
          if (null !== BB && BB === this.skippedKey) return void(this.Vp || this.picks !== DB || this.usePlayerPack());
          oB = null === BB ? null : await Promise.race([qB(QB, BB, OB), jB.passed])
        } catch (PB) {
          const BB = !this.Vp && this.picks === DB && this.holdsOtherGamePack(QB);
          return this.host.warn(`the texture pack of ${QB} didn't load: ${BB?"the player's own shows":"the pack in play stays"}`, PB), void(BB && this.usePlayerPack())
        } finally {
          jB.clear()
        }
        if (this.Vp || this.picks !== DB) return;
        null !== oB && (0, JB.g)(oB.pack) && (this.host.warn(`the texture pack of ${QB} names files on other sites: the player's own shows`, null), oB = null);
        const yB = null === oB || await this.confirmed(oB.pack, QB) ? null : oB.key;
        this.Vp || this.picks !== DB || (null !== yB && (this.skippedKey = yB, oB = null), null === oB ? this.usePlayerPack() : (this.onGamePack = !0, this.change({
          pack: oB.pack,
          gameSource: oB.key
        }, !0)))
      }
      endGamePack() {
        this.picks++, this.usePlayerPack()
      }
      holdsOtherGamePack(BB) {
        return this.onGamePack && "" !== this.state.gameSource && !this.isUsingCustomGameTexturePack(BB)
      }
      async confirmed(BB, OB) {
        const GB = this.confirmGamePack;
        if (null === GB) return !0;
        try {
          return await GB(BB, OB)
        } catch (YB) {
          return this.host.warn(`the texture pack prompt of ${OB} failed: the pack is skipped`, YB), !1
        }
      }
      async readPlayerPack() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (null !== BB && this.ownAnnouncements.delete(BB)) return;
        await this.ready;
        const OB = this.ownChanges;
        let GB;
        try {
          GB = await this.host.store.getItem(oB.e, !0)
        } catch (DB) {
          return void this.host.warn("the stored texture pack didn't read again: the pack in play stays", DB)
        }
        if (this.Vp || this.ownChanges !== OB) return;
        const YB = NB(GB);
        (0, zB.b)(YB, this.playerPack) || (this.ownChanges++, this.setOwn(YB), this.onGamePack || this.change({
          pack: YB,
          gameSource: null
        }, !1))
      }
      joinedWithout() {
        this.picks++
      }
      dispose() {
        this.Vp = !0, this.listeners.clear()
      }
      async readStored() {
        const {
          store: BB,
          warn: OB
        } = this.host;
        await Promise.all([!1 === this.host.oneShot ? void 0 : (0, yB.h)(BB, !0, (BB => {
          OB("the custom game's texture pack wasn't removed from storage", BB)
        })).then((BB => {
          this.takeOneShot(BB)
        }), (BB => {
          OB("the custom game's texture pack didn't read: the player's own shows", BB)
        })), BB.getItem(oB.e, !0).then((BB => {
          this.takeStoredOwn(BB)
        }), (BB => {
          OB("the stored texture pack didn't read: the default pack shows", BB), this.takeStoredOwn(null)
        }))]), this.update()
      }
      takeOneShot(BB) {
        var OB;
        null === BB || this.Vp || this.changes > 0 || this.picks > 0 || ((0, JB.g)(BB.pack) ? this.host.warn("the custom game's texture pack names files on other sites: the player's own shows", null) : (this.onGamePack = !0, this.state = {
          pack: BB.pack,
          gameSource: null !== (OB = BB.source) && void 0 !== OB ? OB : ""
        }))
      }
      takeStoredOwn(BB) {
        if (this.playerPicked || this.Vp) return;
        if (this.ownChanges++, this.setOwn(NB(BB)), this.onGamePack) return;
        const OB = {
          pack: this.playerPack,
          gameSource: null
        };
        0 === this.changes ? this.state = OB : this.change(OB, !1)
      }
      async update() {
        const BB = this.playerPack,
          OB = null === BB || void 0 === BB ? void 0 : BB.metaData.id;
        if (!BB || !OB || !this.host.fetchLatest || OB === DB.e || OB === DB.t.CUSTOM) return;
        const GB = DB.v[OB];
        if (void 0 === GB || BB.metaData.version >= GB) return;
        let YB;
        try {
          YB = NB(await this.host.fetchLatest(OB))
        } catch (QB) {
          return void this.host.warn(`texture pack ${OB} didn't update to version ${GB}`, QB)
        }
        null === YB || this.Vp || this.playerPack !== BB || (this.ownChanges++, this.setOwn(YB), this.onGamePack || this.change({
          pack: YB,
          gameSource: null
        }, !1), await this.storePlayerPack(YB) && this.announce())
      }
      announce() {
        const BB = (0, jB.c)();
        null !== BB && this.ownAnnouncements.add(BB)
      }
      setOwn(BB) {
        this.playerPack = BB;
        for (const GB of [...this.ownListeners]) try {
          GB()
        } catch (OB) {
          this.host.warn("a texture pack listener threw", OB)
        }
      }
      usePlayerPack() {
        this.onGamePack && this.change({
          pack: this.playerPack,
          gameSource: null
        }, !1)
      }
      async storePlayerPack(BB) {
        try {
          return null === BB ? (await this.host.store.removeItem(oB.e), !0) : await this.host.store.setItem(oB.e, BB)
        } catch (OB) {
          return this.host.warn("the texture pack wasn't stored: it shows until the page reloads", OB), !1
        }
      }
      change(BB, OB) {
        if (!this.Vp) {
          this.changes++, this.onGamePack = OB, this.state = BB;
          for (const BB of [...this.listeners.keys()]) this.deliver(BB)
        }
      }
      deliver(BB) {
        if (!this.Vp && this.listeners.has(BB) && this.listeners.get(BB) !== this.state) {
          this.listeners.set(BB, this.state);
          try {
            BB(this.state)
          } catch (OB) {
            this.host.warn("a texture pack listener threw", OB)
          }
        }
      }
    }
    async function qB(BB, OB, GB) {
      const YB = (0, yB.e)(await GB.fetchPack(OB));
      if (null !== YB) return {
        pack: YB,
        key: OB
      };
      const DB = await GB.packKey(BB);
      if (null === DB) return null;
      const QB = (0, yB.e)(await GB.fetchPack(DB));
      if (null === QB) throw new Error(`no texture pack at ${DB}`);
      return {
        pack: QB,
        key: DB
      }
    }

    function ZB(BB) {
      return null === BB || BB.metaData.id === DB.e
    }

    function NB(BB) {
      const OB = (0, yB.e)(BB);
      return ZB(OB) ? null : OB
    }
    async function RB(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QB.c;
      if (null === BB.pack) return null;
      const {
        packAssets: YB
      } = await Promise.all([GB.e(227), GB.e(52)]).then((() => GB(64078)));
      return YB(BB, OB)
    }

    function WB(BB) {
      const OB = (0, oB.w)();
      return null === OB ? () => {} : (OB.onmessage = OB => {
        BB.readPlayerPack((0, jB.e)(OB.data))
      }, () => {
        OB.close()
      })
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);