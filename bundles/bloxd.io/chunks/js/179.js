export const id = 179;
export const ids = [179];
export const modules = {
  8615: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => yB,
      g: () => pB
    });
    var VB = dB(2743);

    function yB() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const BB = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const TB = new BroadcastChannel(VB.k);
        TB.postMessage({
          stored: BB
        }), TB.close()
      } catch {
        return null
      }
      return BB
    }

    function pB(BB) {
      const TB = "object" === typeof BB && null !== BB ? BB.stored : null;
      return "string" === typeof TB ? TB : null
    }
  },
  8609: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => lB,
      f: () => yB,
      g: () => pB
    });
    var VB = dB(2743);
    async function yB(BB, TB, dB) {
      let yB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const pB = lB(await BB.getItem(VB.g, TB));
      if (null === pB || yB()) return null;
      const JB = await BB.getItem(VB.h, TB);
      return yB() ? null : (await async function(BB) {
        await Promise.all([BB.removeItem(VB.g), BB.removeItem(VB.h)])
      }(BB).catch(dB), {
        pack: pB,
        source: "string" === typeof JB ? JB : null
      })
    }

    function pB(BB) {
      return (0, VB.r)() ? Promise.resolve(null) : yB(BB, !1, (BB => {
        console.error("Error removing temporary texture pack: ", BB)
      }), VB.r)
    }

    function lB(BB) {
      if ("object" !== typeof BB || null === BB) return null;
      const TB = BB.metaData;
      return "object" !== typeof TB || null === TB || "string" !== typeof TB.id ? null : BB
    }
  },
  42041: (BB, TB, dB) => {
    function VB(BB) {
      return null === BB.gameSource ? "player" : "customGame"
    }
    dB.d(TB, {
      d: () => pB,
      f: () => uB,
      i: () => DB,
      l: () => VB
    });
    const yB = /^data:[\w.+/-]*;base64,[A-Za-z0-9+/]*={0,2}$/;

    function pB(BB) {
      return "" === BB || "string" === typeof BB && yB.test(BB)
    }

    function lB(BB) {
      return "object" === typeof BB && null !== BB && ("earth" === BB.type || Object.entries(BB).every((BB => {
        let [TB, dB] = BB;
        return "type" === TB || pB(dB)
      })))
    }
    const JB = /(?:src|image|image-set|cross-fade)\(/i,
      YB = /url\(\s*(?:"(?<doubleQuoted>[^"]*)"|'(?<singleQuoted>[^']*)'|(?<unquoted>[^"'()\s]*))\s*\)/gi,
      gB = /url\(/gi,
      oB = ["https://bloxd.invalid/", "http://bloxd.invalid/"],
      kB = new Set([...oB.map((BB => new URL(BB).origin)), "https://fonts.gstatic.com"]),
      LB = new Set(["https://i.imgur.com/MEcjBFQ.png"]);

    function OB(BB) {
      var TB, dB;
      if (BB.includes("\\") || JB.test(BB)) return !0;
      const VB = [...BB.matchAll(YB)];
      return VB.length !== (null !== (TB = null === (dB = BB.match(gB)) || void 0 === dB ? void 0 : dB.length) && void 0 !== TB ? TB : 0) || !VB.every((BB => {
        var TB, dB, VB;
        let {
          groups: yB
        } = BB;
        return function(BB) {
          try {
            return oB.every((TB => {
              const dB = new URL(BB, TB);
              return "data:" === dB.protocol || kB.has(dB.origin) || LB.has(dB.href)
            }))
          } catch {
            return !1
          }
        }(null !== (TB = null !== (dB = null !== (VB = null === yB || void 0 === yB ? void 0 : yB.doubleQuoted) && void 0 !== VB ? VB : null === yB || void 0 === yB ? void 0 : yB.singleQuoted) && void 0 !== dB ? dB : null === yB || void 0 === yB ? void 0 : yB.unquoted) && void 0 !== TB ? TB : "")
      }))
    }

    function DB(BB) {
      var TB, dB, VB, yB, JB, YB, gB;
      const oB = [...Object.values(null !== (TB = BB.textureOverrides) && void 0 !== TB ? TB : {}), ...Object.values(null !== (dB = BB.modelOverrides) && void 0 !== dB ? dB : {})],
        kB = [...Object.values(null !== (VB = null === (yB = BB.customCss) || void 0 === yB ? void 0 : yB.fontFaces) && void 0 !== VB ? VB : {}), ...Object.values(null !== (JB = null === (YB = BB.customCss) || void 0 === YB ? void 0 : YB.classStyles) && void 0 !== JB ? JB : {})].flatMap((BB => Object.values(null !== BB && void 0 !== BB ? BB : {})));
      return !oB.every(pB) || !Object.values(null !== (gB = BB.skyBoxes) && void 0 !== gB ? gB : {}).every(lB) || kB.some((BB => "string" === typeof BB && OB(BB)))
    }

    function uB(BB, TB) {
      if (null === BB || "player" === TB || !DB(BB)) return BB;
      const dB = {
        ...BB
      };
      return BB.textureOverrides && (dB.textureOverrides = EB(BB.textureOverrides, pB, "texture")), BB.modelOverrides && (dB.modelOverrides = EB(BB.modelOverrides, pB, "model")), BB.skyBoxes && (dB.skyBoxes = EB(BB.skyBoxes, lB, "sky")), BB.customCss && (dB.customCss = function(BB) {
        const TB = BB => EB(BB, (BB => "string" === typeof BB && !OB(BB)), "CSS"),
          {
            fontFaces: dB,
            classStyles: VB
          } = HB(BB) ? BB : {},
          yB = {};
        for (const [pB, lB] of Object.entries(HB(VB) ? VB : {})) yB[pB] = TB(lB);
        return {
          fontFaces: (Array.isArray(dB) ? dB : []).map(TB),
          classStyles: yB
        }
      }(BB.customCss)), dB
    }

    function HB(BB) {
      return "object" === typeof BB && null !== BB && !Array.isArray(BB)
    }

    function EB(BB, TB, dB) {
      const VB = Object.entries(HB(BB) ? BB : {}),
        yB = VB.filter((BB => {
          let [, dB] = BB;
          return !TB(dB)
        }));
      if (yB.length > 0) {
        const BB = yB.map((BB => {
          let [TB] = BB;
          return TB
        }));
        console.warn(`Ignoring a custom game texture pack's ${dB} files that name another site: ${BB.join(", ")}`)
      }
      return Object.fromEntries(VB.filter((BB => {
        let [, dB] = BB;
        return TB(dB)
      })))
    }
  },
  42043: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => DB,
      d: () => mB,
      f: () => vB
    });
    var VB = dB(900),
      yB = dB(2626),
      pB = dB(2729),
      lB = dB(2743),
      JB = dB(8615),
      YB = dB(8609),
      gB = dB(42041),
      oB = dB(39779),
      kB = dB(39765),
      LB = dB(4467);
    const OB = {
      pack: null,
      gameSource: null
    };
    class DB {
      constructor(BB) {
        this.host = BB, this.ready = void 0, this.state = OB, this.playerPack = null, this.onGamePack = !1, this.confirmGamePack = null, this.skippedKey = null, this.ownAnnouncements = new Set, this.listeners = new Map, this.ownListeners = new Set, this.changes = 0, this.picks = 0, this.playerPicked = !1, this.ownChanges = 0, this.ND = !1, (0, lB.m)(), this.ready = this.readStored()
      }
      readyWithin(BB) {
        return Promise.race([this.ready, new Promise((TB => {
          setTimeout(TB, BB)
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
        return (0, kB.e)(this.state, BB)
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
        const TB = HB(BB) ? null : BB;
        this.picks++, this.playerPicked = !0, this.ownChanges++, this.setOwn(TB), this.change({
          pack: TB,
          gameSource: null
        }, !1);
        const dB = await this.storePlayerPack(TB);
        return dB && this.announce(), dB
      }
      async packForGame(BB, TB, dB) {
        await this.readyWithin(Math.max(0, (null !== dB && void 0 !== dB ? dB : performance.now() + oB.b) - performance.now()));
        const yB = ++this.picks,
          pB = (0, VB.j)(BB) ? (0, VB.l)(BB) : null;
        if (null === pB) return void this.usePlayerPack();
        let lB;
        const JB = function(BB) {
          let TB;
          const dB = new Promise(((dB, VB) => {
            TB = setTimeout((() => {
              VB(new Error(`no answer in ${BB} ms`))
            }), BB)
          }));
          return dB.catch((() => {})), {
            passed: dB,
            clear: () => {
              clearTimeout(TB)
            }
          }
        }(2e4);
        try {
          const BB = await Promise.race([TB.packKey(pB), JB.passed]);
          if (null !== BB && this.onGamePack && this.state.gameSource === BB) return;
          if (null !== BB && BB === this.skippedKey) return void(this.ND || this.picks !== yB || this.usePlayerPack());
          lB = null === BB ? null : await Promise.race([uB(pB, BB, TB), JB.passed])
        } catch (kB) {
          const BB = !this.ND && this.picks === yB && this.holdsOtherGamePack(pB);
          return this.host.warn(`the texture pack of ${pB} didn't load: ${BB?"the player's own shows":"the pack in play stays"}`, kB), void(BB && this.usePlayerPack())
        } finally {
          JB.clear()
        }
        if (this.ND || this.picks !== yB) return;
        null !== lB && (0, gB.i)(lB.pack) && (this.host.warn(`the texture pack of ${pB} names files on other sites: the player's own shows`, null), lB = null);
        const YB = null === lB || await this.confirmed(lB.pack, pB) ? null : lB.key;
        this.ND || this.picks !== yB || (null !== YB && (this.skippedKey = YB, lB = null), null === lB ? this.usePlayerPack() : (this.onGamePack = !0, this.change({
          pack: lB.pack,
          gameSource: lB.key
        }, !0)))
      }
      endGamePack() {
        this.picks++, this.usePlayerPack()
      }
      holdsOtherGamePack(BB) {
        return this.onGamePack && "" !== this.state.gameSource && !this.isUsingCustomGameTexturePack(BB)
      }
      async confirmed(BB, TB) {
        const dB = this.confirmGamePack;
        if (null === dB) return !0;
        try {
          return await dB(BB, TB)
        } catch (VB) {
          return this.host.warn(`the texture pack prompt of ${TB} failed: the pack is skipped`, VB), !1
        }
      }
      async readPlayerPack() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (null !== BB && this.ownAnnouncements.delete(BB)) return;
        await this.ready;
        const TB = this.ownChanges;
        let dB;
        try {
          dB = await this.host.store.getItem(lB.c, !0)
        } catch (yB) {
          return void this.host.warn("the stored texture pack didn't read again: the pack in play stays", yB)
        }
        if (this.ND || this.ownChanges !== TB) return;
        const VB = EB(dB);
        (0, LB.e)(VB, this.playerPack) || (this.ownChanges++, this.setOwn(VB), this.onGamePack || this.change({
          pack: VB,
          gameSource: null
        }, !1))
      }
      joinedWithout() {
        this.picks++
      }
      dispose() {
        this.ND = !0, this.listeners.clear()
      }
      async readStored() {
        const {
          store: BB,
          warn: TB
        } = this.host;
        await Promise.all([!1 === this.host.oneShot ? void 0 : (0, YB.f)(BB, !0, (BB => {
          TB("the custom game's texture pack wasn't removed from storage", BB)
        })).then((BB => {
          this.takeOneShot(BB)
        }), (BB => {
          TB("the custom game's texture pack didn't read: the player's own shows", BB)
        })), BB.getItem(lB.c, !0).then((BB => {
          this.takeStoredOwn(BB)
        }), (BB => {
          TB("the stored texture pack didn't read: the default pack shows", BB), this.takeStoredOwn(null)
        }))]), this.update()
      }
      takeOneShot(BB) {
        var TB;
        null === BB || this.ND || this.changes > 0 || this.picks > 0 || ((0, gB.i)(BB.pack) ? this.host.warn("the custom game's texture pack names files on other sites: the player's own shows", null) : (this.onGamePack = !0, this.state = {
          pack: BB.pack,
          gameSource: null !== (TB = BB.source) && void 0 !== TB ? TB : ""
        }))
      }
      takeStoredOwn(BB) {
        if (this.playerPicked || this.ND) return;
        if (this.ownChanges++, this.setOwn(EB(BB)), this.onGamePack) return;
        const TB = {
          pack: this.playerPack,
          gameSource: null
        };
        0 === this.changes ? this.state = TB : this.change(TB, !1)
      }
      async update() {
        const BB = this.playerPack,
          TB = null === BB || void 0 === BB ? void 0 : BB.metaData.id;
        if (!BB || !TB || !this.host.fetchLatest || TB === yB.d || TB === yB.r.CUSTOM) return;
        const dB = yB.s[TB];
        if (void 0 === dB || BB.metaData.version >= dB) return;
        let VB;
        try {
          VB = EB(await this.host.fetchLatest(TB))
        } catch (pB) {
          return void this.host.warn(`texture pack ${TB} didn't update to version ${dB}`, pB)
        }
        null === VB || this.ND || this.playerPack !== BB || (this.ownChanges++, this.setOwn(VB), this.onGamePack || this.change({
          pack: VB,
          gameSource: null
        }, !1), await this.storePlayerPack(VB) && this.announce())
      }
      announce() {
        const BB = (0, JB.c)();
        null !== BB && this.ownAnnouncements.add(BB)
      }
      setOwn(BB) {
        this.playerPack = BB;
        for (const dB of [...this.ownListeners]) try {
          dB()
        } catch (TB) {
          this.host.warn("a texture pack listener threw", TB)
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
          return null === BB ? (await this.host.store.removeItem(lB.c), !0) : await this.host.store.setItem(lB.c, BB)
        } catch (TB) {
          return this.host.warn("the texture pack wasn't stored: it shows until the page reloads", TB), !1
        }
      }
      change(BB, TB) {
        if (!this.ND) {
          this.changes++, this.onGamePack = TB, this.state = BB;
          for (const BB of [...this.listeners.keys()]) this.deliver(BB)
        }
      }
      deliver(BB) {
        if (!this.ND && this.listeners.has(BB) && this.listeners.get(BB) !== this.state) {
          this.listeners.set(BB, this.state);
          try {
            BB(this.state)
          } catch (TB) {
            this.host.warn("a texture pack listener threw", TB)
          }
        }
      }
    }
    async function uB(BB, TB, dB) {
      const VB = (0, YB.d)(await dB.fetchPack(TB));
      if (null !== VB) return {
        pack: VB,
        key: TB
      };
      const yB = await dB.packKey(BB);
      if (null === yB) return null;
      const pB = (0, YB.d)(await dB.fetchPack(yB));
      if (null === pB) throw new Error(`no texture pack at ${yB}`);
      return {
        pack: pB,
        key: yB
      }
    }

    function HB(BB) {
      return null === BB || BB.metaData.id === yB.d
    }

    function EB(BB) {
      const TB = (0, YB.d)(BB);
      return HB(TB) ? null : TB
    }
    async function vB(BB) {
      let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pB.b;
      if (null === BB.pack) return null;
      const {
        packAssets: VB
      } = await Promise.all([dB.e(181), dB.e(41)]).then((() => dB(60051)));
      return VB(BB, TB)
    }

    function mB(BB) {
      const TB = (0, lB.v)();
      return null === TB ? () => {} : (TB.onmessage = TB => {
        BB.readPlayerPack((0, JB.g)(TB.data))
      }, () => {
        TB.close()
      })
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);