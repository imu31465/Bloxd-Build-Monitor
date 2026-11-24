export const id = 204;
export const ids = [204];
export const modules = {
  34253: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => JB,
      g: () => oB
    });
    var TB = ZB(3418);

    function JB() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const BB = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const IB = new BroadcastChannel(TB.n);
        IB.postMessage({
          stored: BB
        }), IB.close()
      } catch {
        return null
      }
      return BB
    }

    function oB(BB) {
      const IB = "object" === typeof BB && null !== BB ? BB.stored : null;
      return "string" === typeof IB ? IB : null
    }
  },
  34251: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => GB,
      e: () => JB,
      f: () => oB
    });
    var TB = ZB(3418);
    async function JB(BB, IB, ZB) {
      let JB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const oB = GB(await BB.getItem(TB.i, IB));
      if (null === oB || JB()) return null;
      const vB = await BB.getItem(TB.k, IB);
      return JB() ? null : (await async function(BB) {
        await Promise.all([BB.removeItem(TB.i), BB.removeItem(TB.k)])
      }(BB).catch(ZB), {
        pack: oB,
        source: "string" === typeof vB ? vB : null
      })
    }

    function oB(BB) {
      return (0, TB.t)() ? Promise.resolve(null) : JB(BB, !1, (BB => {
        console.error("Error removing temporary texture pack: ", BB)
      }), TB.t)
    }

    function GB(BB) {
      if ("object" !== typeof BB || null === BB) return null;
      const IB = BB.metaData;
      return "object" !== typeof IB || null === IB || "string" !== typeof IB.id ? null : BB
    }
  },
  51082: (BB, IB, ZB) => {
    function TB(BB) {
      return null === BB.gameSource ? "player" : "customGame"
    }
    ZB.d(IB, {
      c: () => oB,
      d: () => gB,
      h: () => NB,
      i: () => TB
    });
    const JB = /^data:[\w.+/-]*;base64,[A-Za-z0-9+/]*={0,2}$/;

    function oB(BB) {
      return "" === BB || "string" === typeof BB && JB.test(BB)
    }

    function GB(BB) {
      return "object" === typeof BB && null !== BB && ("earth" === BB.type || Object.entries(BB).every((BB => {
        let [IB, ZB] = BB;
        return "type" === IB || oB(ZB)
      })))
    }
    const vB = /(?:src|image|image-set|cross-fade)\(/i,
      kB = /url\(\s*(?:"(?<doubleQuoted>[^"]*)"|'(?<singleQuoted>[^']*)'|(?<unquoted>[^"'()\s]*))\s*\)/gi,
      cB = /url\(/gi,
      nB = ["https://bloxd.invalid/", "http://bloxd.invalid/"],
      hB = new Set([...nB.map((BB => new URL(BB).origin)), "https://fonts.gstatic.com"]),
      zB = new Set(["https://i.imgur.com/MEcjBFQ.png"]);

    function FB(BB) {
      var IB, ZB;
      if (BB.includes("\\") || vB.test(BB)) return !0;
      const TB = [...BB.matchAll(kB)];
      return TB.length !== (null !== (IB = null === (ZB = BB.match(cB)) || void 0 === ZB ? void 0 : ZB.length) && void 0 !== IB ? IB : 0) || !TB.every((BB => {
        var IB, ZB, TB;
        let {
          groups: JB
        } = BB;
        return function(BB) {
          try {
            return nB.every((IB => {
              const ZB = new URL(BB, IB);
              return "data:" === ZB.protocol || hB.has(ZB.origin) || zB.has(ZB.href)
            }))
          } catch {
            return !1
          }
        }(null !== (IB = null !== (ZB = null !== (TB = null === JB || void 0 === JB ? void 0 : JB.doubleQuoted) && void 0 !== TB ? TB : null === JB || void 0 === JB ? void 0 : JB.singleQuoted) && void 0 !== ZB ? ZB : null === JB || void 0 === JB ? void 0 : JB.unquoted) && void 0 !== IB ? IB : "")
      }))
    }

    function NB(BB) {
      var IB, ZB, TB, JB, vB, kB, cB;
      const nB = [...Object.values(null !== (IB = BB.textureOverrides) && void 0 !== IB ? IB : {}), ...Object.values(null !== (ZB = BB.modelOverrides) && void 0 !== ZB ? ZB : {})],
        hB = [...Object.values(null !== (TB = null === (JB = BB.customCss) || void 0 === JB ? void 0 : JB.fontFaces) && void 0 !== TB ? TB : {}), ...Object.values(null !== (vB = null === (kB = BB.customCss) || void 0 === kB ? void 0 : kB.classStyles) && void 0 !== vB ? vB : {})].flatMap((BB => Object.values(null !== BB && void 0 !== BB ? BB : {})));
      return !nB.every(oB) || !Object.values(null !== (cB = BB.skyBoxes) && void 0 !== cB ? cB : {}).every(GB) || hB.some((BB => "string" === typeof BB && FB(BB)))
    }

    function gB(BB, IB) {
      if (null === BB || "player" === IB || !NB(BB)) return BB;
      const ZB = {
        ...BB
      };
      return BB.textureOverrides && (ZB.textureOverrides = yB(BB.textureOverrides, oB, "texture")), BB.modelOverrides && (ZB.modelOverrides = yB(BB.modelOverrides, oB, "model")), BB.skyBoxes && (ZB.skyBoxes = yB(BB.skyBoxes, GB, "sky")), BB.customCss && (ZB.customCss = function(BB) {
        const IB = BB => yB(BB, (BB => "string" === typeof BB && !FB(BB)), "CSS"),
          {
            fontFaces: ZB,
            classStyles: TB
          } = qB(BB) ? BB : {},
          JB = {};
        for (const [oB, GB] of Object.entries(qB(TB) ? TB : {})) JB[oB] = IB(GB);
        return {
          fontFaces: (Array.isArray(ZB) ? ZB : []).map(IB),
          classStyles: JB
        }
      }(BB.customCss)), ZB
    }

    function qB(BB) {
      return "object" === typeof BB && null !== BB && !Array.isArray(BB)
    }

    function yB(BB, IB, ZB) {
      const TB = Object.entries(qB(BB) ? BB : {}),
        JB = TB.filter((BB => {
          let [, ZB] = BB;
          return !IB(ZB)
        }));
      if (JB.length > 0) {
        const BB = JB.map((BB => {
          let [IB] = BB;
          return IB
        }));
        console.warn(`Ignoring a custom game texture pack's ${ZB} files that name another site: ${BB.join(", ")}`)
      }
      return Object.fromEntries(TB.filter((BB => {
        let [, ZB] = BB;
        return IB(ZB)
      })))
    }
  },
  51091: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => NB,
      f: () => WB,
      i: () => UB
    });
    var TB = ZB(1058),
      JB = ZB(2236),
      oB = ZB(3409),
      GB = ZB(3418),
      vB = ZB(34253),
      kB = ZB(34251),
      cB = ZB(51082),
      nB = ZB(41023),
      hB = ZB(40991),
      zB = ZB(5226);
    const FB = {
      pack: null,
      gameSource: null
    };
    class NB {
      constructor(BB) {
        this.host = BB, this.ready = void 0, this.state = FB, this.playerPack = null, this.onGamePack = !1, this.confirmGamePack = null, this.skippedKey = null, this.ownAnnouncements = new Set, this.listeners = new Map, this.ownListeners = new Set, this.changes = 0, this.picks = 0, this.playerPicked = !1, this.ownChanges = 0, this.WN = !1, (0, GB.p)(), this.ready = this.readStored()
      }
      readyWithin(BB) {
        return Promise.race([this.ready, new Promise((IB => {
          setTimeout(IB, BB)
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
        return (0, hB.c)(this.state, BB)
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
        const IB = qB(BB) ? null : BB;
        this.picks++, this.playerPicked = !0, this.ownChanges++, this.setOwn(IB), this.change({
          pack: IB,
          gameSource: null
        }, !1);
        const ZB = await this.storePlayerPack(IB);
        return ZB && this.announce(), ZB
      }
      async packForGame(BB, IB, ZB) {
        await this.readyWithin(Math.max(0, (null !== ZB && void 0 !== ZB ? ZB : performance.now() + nB.e) - performance.now()));
        const JB = ++this.picks,
          oB = (0, TB.i)(BB) ? (0, TB.l)(BB) : null;
        if (null === oB) return void this.usePlayerPack();
        let GB;
        const vB = function(BB) {
          let IB;
          const ZB = new Promise(((ZB, TB) => {
            IB = setTimeout((() => {
              TB(new Error(`no answer in ${BB} ms`))
            }), BB)
          }));
          return ZB.catch((() => {})), {
            passed: ZB,
            clear: () => {
              clearTimeout(IB)
            }
          }
        }(2e4);
        try {
          const BB = await Promise.race([IB.packKey(oB), vB.passed]);
          if (null !== BB && this.onGamePack && this.state.gameSource === BB) return;
          if (null !== BB && BB === this.skippedKey) return void(this.WN || this.picks !== JB || this.usePlayerPack());
          GB = null === BB ? null : await Promise.race([gB(oB, BB, IB), vB.passed])
        } catch (hB) {
          const BB = !this.WN && this.picks === JB && this.holdsOtherGamePack(oB);
          return this.host.warn(`the texture pack of ${oB} didn't load: ${BB?"the player's own shows":"the pack in play stays"}`, hB), void(BB && this.usePlayerPack())
        } finally {
          vB.clear()
        }
        if (this.WN || this.picks !== JB) return;
        null !== GB && (0, cB.h)(GB.pack) && (this.host.warn(`the texture pack of ${oB} names files on other sites: the player's own shows`, null), GB = null);
        const kB = null === GB || await this.confirmed(GB.pack, oB) ? null : GB.key;
        this.WN || this.picks !== JB || (null !== kB && (this.skippedKey = kB, GB = null), null === GB ? this.usePlayerPack() : (this.onGamePack = !0, this.change({
          pack: GB.pack,
          gameSource: GB.key
        }, !0)))
      }
      endGamePack() {
        this.picks++, this.usePlayerPack()
      }
      holdsOtherGamePack(BB) {
        return this.onGamePack && "" !== this.state.gameSource && !this.isUsingCustomGameTexturePack(BB)
      }
      async confirmed(BB, IB) {
        const ZB = this.confirmGamePack;
        if (null === ZB) return !0;
        try {
          return await ZB(BB, IB)
        } catch (TB) {
          return this.host.warn(`the texture pack prompt of ${IB} failed: the pack is skipped`, TB), !1
        }
      }
      async readPlayerPack() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (null !== BB && this.ownAnnouncements.delete(BB)) return;
        await this.ready;
        const IB = this.ownChanges;
        let ZB;
        try {
          ZB = await this.host.store.getItem(GB.e, !0)
        } catch (JB) {
          return void this.host.warn("the stored texture pack didn't read again: the pack in play stays", JB)
        }
        if (this.WN || this.ownChanges !== IB) return;
        const TB = yB(ZB);
        (0, zB.d)(TB, this.playerPack) || (this.ownChanges++, this.setOwn(TB), this.onGamePack || this.change({
          pack: TB,
          gameSource: null
        }, !1))
      }
      joinedWithout() {
        this.picks++
      }
      dispose() {
        this.WN = !0, this.listeners.clear()
      }
      async readStored() {
        const {
          store: BB,
          warn: IB
        } = this.host;
        await Promise.all([!1 === this.host.oneShot ? void 0 : (0, kB.e)(BB, !0, (BB => {
          IB("the custom game's texture pack wasn't removed from storage", BB)
        })).then((BB => {
          this.takeOneShot(BB)
        }), (BB => {
          IB("the custom game's texture pack didn't read: the player's own shows", BB)
        })), BB.getItem(GB.e, !0).then((BB => {
          this.takeStoredOwn(BB)
        }), (BB => {
          IB("the stored texture pack didn't read: the default pack shows", BB), this.takeStoredOwn(null)
        }))]), this.update()
      }
      takeOneShot(BB) {
        var IB;
        null === BB || this.WN || this.changes > 0 || this.picks > 0 || ((0, cB.h)(BB.pack) ? this.host.warn("the custom game's texture pack names files on other sites: the player's own shows", null) : (this.onGamePack = !0, this.state = {
          pack: BB.pack,
          gameSource: null !== (IB = BB.source) && void 0 !== IB ? IB : ""
        }))
      }
      takeStoredOwn(BB) {
        if (this.playerPicked || this.WN) return;
        if (this.ownChanges++, this.setOwn(yB(BB)), this.onGamePack) return;
        const IB = {
          pack: this.playerPack,
          gameSource: null
        };
        0 === this.changes ? this.state = IB : this.change(IB, !1)
      }
      async update() {
        const BB = this.playerPack,
          IB = null === BB || void 0 === BB ? void 0 : BB.metaData.id;
        if (!BB || !IB || !this.host.fetchLatest || IB === JB.e || IB === JB.q.CUSTOM) return;
        const ZB = JB.s[IB];
        if (void 0 === ZB || BB.metaData.version >= ZB) return;
        let TB;
        try {
          TB = yB(await this.host.fetchLatest(IB))
        } catch (oB) {
          return void this.host.warn(`texture pack ${IB} didn't update to version ${ZB}`, oB)
        }
        null === TB || this.WN || this.playerPack !== BB || (this.ownChanges++, this.setOwn(TB), this.onGamePack || this.change({
          pack: TB,
          gameSource: null
        }, !1), await this.storePlayerPack(TB) && this.announce())
      }
      announce() {
        const BB = (0, vB.e)();
        null !== BB && this.ownAnnouncements.add(BB)
      }
      setOwn(BB) {
        this.playerPack = BB;
        for (const ZB of [...this.ownListeners]) try {
          ZB()
        } catch (IB) {
          this.host.warn("a texture pack listener threw", IB)
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
          return null === BB ? (await this.host.store.removeItem(GB.e), !0) : await this.host.store.setItem(GB.e, BB)
        } catch (IB) {
          return this.host.warn("the texture pack wasn't stored: it shows until the page reloads", IB), !1
        }
      }
      change(BB, IB) {
        if (!this.WN) {
          this.changes++, this.onGamePack = IB, this.state = BB;
          for (const BB of [...this.listeners.keys()]) this.deliver(BB)
        }
      }
      deliver(BB) {
        if (!this.WN && this.listeners.has(BB) && this.listeners.get(BB) !== this.state) {
          this.listeners.set(BB, this.state);
          try {
            BB(this.state)
          } catch (IB) {
            this.host.warn("a texture pack listener threw", IB)
          }
        }
      }
    }
    async function gB(BB, IB, ZB) {
      const TB = (0, kB.d)(await ZB.fetchPack(IB));
      if (null !== TB) return {
        pack: TB,
        key: IB
      };
      const JB = await ZB.packKey(BB);
      if (null === JB) return null;
      const oB = (0, kB.d)(await ZB.fetchPack(JB));
      if (null === oB) throw new Error(`no texture pack at ${JB}`);
      return {
        pack: oB,
        key: JB
      }
    }

    function qB(BB) {
      return null === BB || BB.metaData.id === JB.e
    }

    function yB(BB) {
      const IB = (0, kB.d)(BB);
      return qB(IB) ? null : IB
    }
    async function UB(BB) {
      let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oB.d;
      if (null === BB.pack) return null;
      const {
        packAssets: TB
      } = await Promise.all([ZB.e(206), ZB.e(45)]).then((() => ZB(61517)));
      return TB(BB, IB)
    }

    function WB(BB) {
      const IB = (0, GB.v)();
      return null === IB ? () => {} : (IB.onmessage = IB => {
        BB.readPlayerPack((0, vB.g)(IB.data))
      }, () => {
        IB.close()
      })
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);