export const id = 204;
export const ids = [204];
export const modules = {
  34308: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => nB,
      g: () => dB
    });
    var QB = zB(3353);

    function nB() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const BB = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const jB = new BroadcastChannel(QB.l);
        jB.postMessage({
          stored: BB
        }), jB.close()
      } catch {
        return null
      }
      return BB
    }

    function dB(BB) {
      const jB = "object" === typeof BB && null !== BB ? BB.stored : null;
      return "string" === typeof jB ? jB : null
    }
  },
  34302: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => IB,
      e: () => nB,
      f: () => dB
    });
    var QB = zB(3353);
    async function nB(BB, jB, zB) {
      let nB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const dB = IB(await BB.getItem(QB.e, jB));
      if (null === dB || nB()) return null;
      const NB = await BB.getItem(QB.h, jB);
      return nB() ? null : (await async function(BB) {
        await Promise.all([BB.removeItem(QB.e), BB.removeItem(QB.h)])
      }(BB).catch(zB), {
        pack: dB,
        source: "string" === typeof NB ? NB : null
      })
    }

    function dB(BB) {
      return (0, QB.t)() ? Promise.resolve(null) : nB(BB, !1, (BB => {
        console.error("Error removing temporary texture pack: ", BB)
      }), QB.t)
    }

    function IB(BB) {
      if ("object" !== typeof BB || null === BB) return null;
      const jB = BB.metaData;
      return "object" !== typeof jB || null === jB || "string" !== typeof jB.id ? null : BB
    }
  },
  51168: (BB, jB, zB) => {
    function QB(BB) {
      return null === BB.gameSource ? "player" : "customGame"
    }
    zB.d(jB, {
      d: () => dB,
      e: () => mB,
      i: () => JB,
      m: () => QB
    });
    const nB = /^data:[\w.+/-]*;base64,[A-Za-z0-9+/]*={0,2}$/;

    function dB(BB) {
      return "" === BB || "string" === typeof BB && nB.test(BB)
    }

    function IB(BB) {
      return "object" === typeof BB && null !== BB && ("earth" === BB.type || Object.entries(BB).every((BB => {
        let [jB, zB] = BB;
        return "type" === jB || dB(zB)
      })))
    }
    const NB = /(?:src|image|image-set|cross-fade)\(/i,
      uB = /url\(\s*(?:"(?<doubleQuoted>[^"]*)"|'(?<singleQuoted>[^']*)'|(?<unquoted>[^"'()\s]*))\s*\)/gi,
      UB = /url\(/gi,
      aB = ["https://bloxd.invalid/", "http://bloxd.invalid/"],
      pB = new Set([...aB.map((BB => new URL(BB).origin)), "https://fonts.gstatic.com"]),
      rB = new Set(["https://i.imgur.com/MEcjBFQ.png"]);

    function sB(BB) {
      var jB, zB;
      if (BB.includes("\\") || NB.test(BB)) return !0;
      const QB = [...BB.matchAll(uB)];
      return QB.length !== (null !== (jB = null === (zB = BB.match(UB)) || void 0 === zB ? void 0 : zB.length) && void 0 !== jB ? jB : 0) || !QB.every((BB => {
        var jB, zB, QB;
        let {
          groups: nB
        } = BB;
        return function(BB) {
          try {
            return aB.every((jB => {
              const zB = new URL(BB, jB);
              return "data:" === zB.protocol || pB.has(zB.origin) || rB.has(zB.href)
            }))
          } catch {
            return !1
          }
        }(null !== (jB = null !== (zB = null !== (QB = null === nB || void 0 === nB ? void 0 : nB.doubleQuoted) && void 0 !== QB ? QB : null === nB || void 0 === nB ? void 0 : nB.singleQuoted) && void 0 !== zB ? zB : null === nB || void 0 === nB ? void 0 : nB.unquoted) && void 0 !== jB ? jB : "")
      }))
    }

    function JB(BB) {
      var jB, zB, QB, nB, NB, uB, UB;
      const aB = [...Object.values(null !== (jB = BB.textureOverrides) && void 0 !== jB ? jB : {}), ...Object.values(null !== (zB = BB.modelOverrides) && void 0 !== zB ? zB : {})],
        pB = [...Object.values(null !== (QB = null === (nB = BB.customCss) || void 0 === nB ? void 0 : nB.fontFaces) && void 0 !== QB ? QB : {}), ...Object.values(null !== (NB = null === (uB = BB.customCss) || void 0 === uB ? void 0 : uB.classStyles) && void 0 !== NB ? NB : {})].flatMap((BB => Object.values(null !== BB && void 0 !== BB ? BB : {})));
      return !aB.every(dB) || !Object.values(null !== (UB = BB.skyBoxes) && void 0 !== UB ? UB : {}).every(IB) || pB.some((BB => "string" === typeof BB && sB(BB)))
    }

    function mB(BB, jB) {
      if (null === BB || "player" === jB || !JB(BB)) return BB;
      const zB = {
        ...BB
      };
      return BB.textureOverrides && (zB.textureOverrides = kB(BB.textureOverrides, dB, "texture")), BB.modelOverrides && (zB.modelOverrides = kB(BB.modelOverrides, dB, "model")), BB.skyBoxes && (zB.skyBoxes = kB(BB.skyBoxes, IB, "sky")), BB.customCss && (zB.customCss = function(BB) {
        const jB = BB => kB(BB, (BB => "string" === typeof BB && !sB(BB)), "CSS"),
          {
            fontFaces: zB,
            classStyles: QB
          } = yB(BB) ? BB : {},
          nB = {};
        for (const [dB, IB] of Object.entries(yB(QB) ? QB : {})) nB[dB] = jB(IB);
        return {
          fontFaces: (Array.isArray(zB) ? zB : []).map(jB),
          classStyles: nB
        }
      }(BB.customCss)), zB
    }

    function yB(BB) {
      return "object" === typeof BB && null !== BB && !Array.isArray(BB)
    }

    function kB(BB, jB, zB) {
      const QB = Object.entries(yB(BB) ? BB : {}),
        nB = QB.filter((BB => {
          let [, zB] = BB;
          return !jB(zB)
        }));
      if (nB.length > 0) {
        const BB = nB.map((BB => {
          let [jB] = BB;
          return jB
        }));
        console.warn(`Ignoring a custom game texture pack's ${zB} files that name another site: ${BB.join(", ")}`)
      }
      return Object.fromEntries(QB.filter((BB => {
        let [, zB] = BB;
        return jB(zB)
      })))
    }
  },
  51173: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => JB,
      d: () => LB,
      h: () => GB
    });
    var QB = zB(1067),
      nB = zB(2206),
      dB = zB(3340),
      IB = zB(3353),
      NB = zB(34308),
      uB = zB(34302),
      UB = zB(51168),
      aB = zB(41070),
      pB = zB(41050),
      rB = zB(5134);
    const sB = {
      pack: null,
      gameSource: null
    };
    class JB {
      constructor(BB) {
        this.host = BB, this.ready = void 0, this.state = sB, this.playerPack = null, this.onGamePack = !1, this.confirmGamePack = null, this.skippedKey = null, this.ownAnnouncements = new Set, this.listeners = new Map, this.ownListeners = new Set, this.changes = 0, this.picks = 0, this.playerPicked = !1, this.ownChanges = 0, this.HJ = !1, (0, IB.p)(), this.ready = this.readStored()
      }
      readyWithin(BB) {
        return Promise.race([this.ready, new Promise((jB => {
          setTimeout(jB, BB)
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
        return (0, pB.e)(this.state, BB)
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
        const jB = yB(BB) ? null : BB;
        this.picks++, this.playerPicked = !0, this.ownChanges++, this.setOwn(jB), this.change({
          pack: jB,
          gameSource: null
        }, !1);
        const zB = await this.storePlayerPack(jB);
        return zB && this.announce(), zB
      }
      async packForGame(BB, jB, zB) {
        await this.readyWithin(Math.max(0, (null !== zB && void 0 !== zB ? zB : performance.now() + aB.d) - performance.now()));
        const nB = ++this.picks,
          dB = (0, QB.n)(BB) ? (0, QB.q)(BB) : null;
        if (null === dB) return void this.usePlayerPack();
        let IB;
        const NB = function(BB) {
          let jB;
          const zB = new Promise(((zB, QB) => {
            jB = setTimeout((() => {
              QB(new Error(`no answer in ${BB} ms`))
            }), BB)
          }));
          return zB.catch((() => {})), {
            passed: zB,
            clear: () => {
              clearTimeout(jB)
            }
          }
        }(2e4);
        try {
          const BB = await Promise.race([jB.packKey(dB), NB.passed]);
          if (null !== BB && this.onGamePack && this.state.gameSource === BB) return;
          if (null !== BB && BB === this.skippedKey) return void(this.HJ || this.picks !== nB || this.usePlayerPack());
          IB = null === BB ? null : await Promise.race([mB(dB, BB, jB), NB.passed])
        } catch (pB) {
          const BB = !this.HJ && this.picks === nB && this.holdsOtherGamePack(dB);
          return this.host.warn(`the texture pack of ${dB} didn't load: ${BB?"the player's own shows":"the pack in play stays"}`, pB), void(BB && this.usePlayerPack())
        } finally {
          NB.clear()
        }
        if (this.HJ || this.picks !== nB) return;
        null !== IB && (0, UB.i)(IB.pack) && (this.host.warn(`the texture pack of ${dB} names files on other sites: the player's own shows`, null), IB = null);
        const uB = null === IB || await this.confirmed(IB.pack, dB) ? null : IB.key;
        this.HJ || this.picks !== nB || (null !== uB && (this.skippedKey = uB, IB = null), null === IB ? this.usePlayerPack() : (this.onGamePack = !0, this.change({
          pack: IB.pack,
          gameSource: IB.key
        }, !0)))
      }
      endGamePack() {
        this.picks++, this.usePlayerPack()
      }
      holdsOtherGamePack(BB) {
        return this.onGamePack && "" !== this.state.gameSource && !this.isUsingCustomGameTexturePack(BB)
      }
      async confirmed(BB, jB) {
        const zB = this.confirmGamePack;
        if (null === zB) return !0;
        try {
          return await zB(BB, jB)
        } catch (QB) {
          return this.host.warn(`the texture pack prompt of ${jB} failed: the pack is skipped`, QB), !1
        }
      }
      async readPlayerPack() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (null !== BB && this.ownAnnouncements.delete(BB)) return;
        await this.ready;
        const jB = this.ownChanges;
        let zB;
        try {
          zB = await this.host.store.getItem(IB.b, !0)
        } catch (nB) {
          return void this.host.warn("the stored texture pack didn't read again: the pack in play stays", nB)
        }
        if (this.HJ || this.ownChanges !== jB) return;
        const QB = kB(zB);
        (0, rB.d)(QB, this.playerPack) || (this.ownChanges++, this.setOwn(QB), this.onGamePack || this.change({
          pack: QB,
          gameSource: null
        }, !1))
      }
      joinedWithout() {
        this.picks++
      }
      dispose() {
        this.HJ = !0, this.listeners.clear()
      }
      async readStored() {
        const {
          store: BB,
          warn: jB
        } = this.host;
        await Promise.all([!1 === this.host.oneShot ? void 0 : (0, uB.e)(BB, !0, (BB => {
          jB("the custom game's texture pack wasn't removed from storage", BB)
        })).then((BB => {
          this.takeOneShot(BB)
        }), (BB => {
          jB("the custom game's texture pack didn't read: the player's own shows", BB)
        })), BB.getItem(IB.b, !0).then((BB => {
          this.takeStoredOwn(BB)
        }), (BB => {
          jB("the stored texture pack didn't read: the default pack shows", BB), this.takeStoredOwn(null)
        }))]), this.update()
      }
      takeOneShot(BB) {
        var jB;
        null === BB || this.HJ || this.changes > 0 || this.picks > 0 || ((0, UB.i)(BB.pack) ? this.host.warn("the custom game's texture pack names files on other sites: the player's own shows", null) : (this.onGamePack = !0, this.state = {
          pack: BB.pack,
          gameSource: null !== (jB = BB.source) && void 0 !== jB ? jB : ""
        }))
      }
      takeStoredOwn(BB) {
        if (this.playerPicked || this.HJ) return;
        if (this.ownChanges++, this.setOwn(kB(BB)), this.onGamePack) return;
        const jB = {
          pack: this.playerPack,
          gameSource: null
        };
        0 === this.changes ? this.state = jB : this.change(jB, !1)
      }
      async update() {
        const BB = this.playerPack,
          jB = null === BB || void 0 === BB ? void 0 : BB.metaData.id;
        if (!BB || !jB || !this.host.fetchLatest || jB === nB.d || jB === nB.o.CUSTOM) return;
        const zB = nB.q[jB];
        if (void 0 === zB || BB.metaData.version >= zB) return;
        let QB;
        try {
          QB = kB(await this.host.fetchLatest(jB))
        } catch (dB) {
          return void this.host.warn(`texture pack ${jB} didn't update to version ${zB}`, dB)
        }
        null === QB || this.HJ || this.playerPack !== BB || (this.ownChanges++, this.setOwn(QB), this.onGamePack || this.change({
          pack: QB,
          gameSource: null
        }, !1), await this.storePlayerPack(QB) && this.announce())
      }
      announce() {
        const BB = (0, NB.e)();
        null !== BB && this.ownAnnouncements.add(BB)
      }
      setOwn(BB) {
        this.playerPack = BB;
        for (const zB of [...this.ownListeners]) try {
          zB()
        } catch (jB) {
          this.host.warn("a texture pack listener threw", jB)
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
          return null === BB ? (await this.host.store.removeItem(IB.b), !0) : await this.host.store.setItem(IB.b, BB)
        } catch (jB) {
          return this.host.warn("the texture pack wasn't stored: it shows until the page reloads", jB), !1
        }
      }
      change(BB, jB) {
        if (!this.HJ) {
          this.changes++, this.onGamePack = jB, this.state = BB;
          for (const BB of [...this.listeners.keys()]) this.deliver(BB)
        }
      }
      deliver(BB) {
        if (!this.HJ && this.listeners.has(BB) && this.listeners.get(BB) !== this.state) {
          this.listeners.set(BB, this.state);
          try {
            BB(this.state)
          } catch (jB) {
            this.host.warn("a texture pack listener threw", jB)
          }
        }
      }
    }
    async function mB(BB, jB, zB) {
      const QB = (0, uB.b)(await zB.fetchPack(jB));
      if (null !== QB) return {
        pack: QB,
        key: jB
      };
      const nB = await zB.packKey(BB);
      if (null === nB) return null;
      const dB = (0, uB.b)(await zB.fetchPack(nB));
      if (null === dB) throw new Error(`no texture pack at ${nB}`);
      return {
        pack: dB,
        key: nB
      }
    }

    function yB(BB) {
      return null === BB || BB.metaData.id === nB.d
    }

    function kB(BB) {
      const jB = (0, uB.b)(BB);
      return yB(jB) ? null : jB
    }
    async function GB(BB) {
      let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dB.e;
      if (null === BB.pack) return null;
      const {
        packAssets: QB
      } = await Promise.all([zB.e(206), zB.e(45)]).then((() => zB(61649)));
      return QB(BB, jB)
    }

    function LB(BB) {
      const jB = (0, IB.u)();
      return null === jB ? () => {} : (jB.onmessage = jB => {
        BB.readPlayerPack((0, NB.g)(jB.data))
      }, () => {
        jB.close()
      })
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);