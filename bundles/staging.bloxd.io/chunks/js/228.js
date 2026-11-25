export const id = 228;
export const ids = [228];
export const modules = {
  35103: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => SM,
      e: () => jM
    });
    var OM = iM(3657);

    function SM() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const MM = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const rM = new BroadcastChannel(OM.i);
        rM.postMessage({
          stored: MM
        }), rM.close()
      } catch {
        return null
      }
      return MM
    }

    function jM(MM) {
      const rM = "object" === typeof MM && null !== MM ? MM.stored : null;
      return "string" === typeof rM ? rM : null
    }
  },
  35100: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => aM,
      f: () => SM,
      g: () => jM
    });
    var OM = iM(3657);
    async function SM(MM, rM, iM) {
      let SM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const jM = aM(await MM.getItem(OM.e, rM));
      if (null === jM || SM()) return null;
      const PM = await MM.getItem(OM.f, rM);
      return SM() ? null : (await async function(MM) {
        await Promise.all([MM.removeItem(OM.e), MM.removeItem(OM.f)])
      }(MM).catch(iM), {
        pack: jM,
        source: "string" === typeof PM ? PM : null
      })
    }

    function jM(MM) {
      return (0, OM.n)() ? Promise.resolve(null) : SM(MM, !1, (MM => {
        console.error("Error removing temporary texture pack: ", MM)
      }), OM.n)
    }

    function aM(MM) {
      if ("object" !== typeof MM || null === MM) return null;
      const rM = MM.metaData;
      return "object" !== typeof rM || null === rM || "string" !== typeof rM.id ? null : MM
    }
  },
  53774: (MM, rM, iM) => {
    function OM(MM) {
      return null === MM.gameSource ? "player" : "customGame"
    }
    iM.d(rM, {
      c: () => jM,
      g: () => JM,
      h: () => hM,
      j: () => OM
    });
    const SM = /^data:[\w.+/-]*;base64,[A-Za-z0-9+/]*={0,2}$/;

    function jM(MM) {
      return "" === MM || "string" === typeof MM && SM.test(MM)
    }

    function aM(MM) {
      return "object" === typeof MM && null !== MM && ("earth" === MM.type || Object.entries(MM).every((MM => {
        let [rM, iM] = MM;
        return "type" === rM || jM(iM)
      })))
    }
    const PM = /(?:src|image|image-set|cross-fade)\(/i,
      nM = /url\(\s*(?:"(?<doubleQuoted>[^"]*)"|'(?<singleQuoted>[^']*)'|(?<unquoted>[^"'()\s]*))\s*\)/gi,
      QM = /url\(/gi,
      zM = ["https://bloxd.invalid/", "http://bloxd.invalid/"],
      LM = new Set([...zM.map((MM => new URL(MM).origin)), "https://fonts.gstatic.com"]),
      mM = new Set(["https://i.imgur.com/MEcjBFQ.png"]);

    function HM(MM) {
      var rM, iM;
      if (MM.includes("\\") || PM.test(MM)) return !0;
      const OM = [...MM.matchAll(nM)];
      return OM.length !== (null !== (rM = null === (iM = MM.match(QM)) || void 0 === iM ? void 0 : iM.length) && void 0 !== rM ? rM : 0) || !OM.every((MM => {
        var rM, iM, OM;
        let {
          groups: SM
        } = MM;
        return function(MM) {
          try {
            return zM.every((rM => {
              const iM = new URL(MM, rM);
              return "data:" === iM.protocol || LM.has(iM.origin) || mM.has(iM.href)
            }))
          } catch {
            return !1
          }
        }(null !== (rM = null !== (iM = null !== (OM = null === SM || void 0 === SM ? void 0 : SM.doubleQuoted) && void 0 !== OM ? OM : null === SM || void 0 === SM ? void 0 : SM.singleQuoted) && void 0 !== iM ? iM : null === SM || void 0 === SM ? void 0 : SM.unquoted) && void 0 !== rM ? rM : "")
      }))
    }

    function hM(MM) {
      var rM, iM, OM, SM, PM, nM, QM;
      const zM = [...Object.values(null !== (rM = MM.textureOverrides) && void 0 !== rM ? rM : {}), ...Object.values(null !== (iM = MM.modelOverrides) && void 0 !== iM ? iM : {})],
        LM = [...Object.values(null !== (OM = null === (SM = MM.customCss) || void 0 === SM ? void 0 : SM.fontFaces) && void 0 !== OM ? OM : {}), ...Object.values(null !== (PM = null === (nM = MM.customCss) || void 0 === nM ? void 0 : nM.classStyles) && void 0 !== PM ? PM : {})].flatMap((MM => Object.values(null !== MM && void 0 !== MM ? MM : {})));
      return !zM.every(jM) || !Object.values(null !== (QM = MM.skyBoxes) && void 0 !== QM ? QM : {}).every(aM) || LM.some((MM => "string" === typeof MM && HM(MM)))
    }

    function JM(MM, rM) {
      if (null === MM || "player" === rM || !hM(MM)) return MM;
      const iM = {
        ...MM
      };
      return MM.textureOverrides && (iM.textureOverrides = yM(MM.textureOverrides, jM, "texture")), MM.modelOverrides && (iM.modelOverrides = yM(MM.modelOverrides, jM, "model")), MM.skyBoxes && (iM.skyBoxes = yM(MM.skyBoxes, aM, "sky")), MM.customCss && (iM.customCss = function(MM) {
        const rM = MM => yM(MM, (MM => "string" === typeof MM && !HM(MM)), "CSS"),
          {
            fontFaces: iM,
            classStyles: OM
          } = dM(MM) ? MM : {},
          SM = {};
        for (const [jM, aM] of Object.entries(dM(OM) ? OM : {})) SM[jM] = rM(aM);
        return {
          fontFaces: (Array.isArray(iM) ? iM : []).map(rM),
          classStyles: SM
        }
      }(MM.customCss)), iM
    }

    function dM(MM) {
      return "object" === typeof MM && null !== MM && !Array.isArray(MM)
    }

    function yM(MM, rM, iM) {
      const OM = Object.entries(dM(MM) ? MM : {}),
        SM = OM.filter((MM => {
          let [, iM] = MM;
          return !rM(iM)
        }));
      if (SM.length > 0) {
        const MM = SM.map((MM => {
          let [rM] = MM;
          return rM
        }));
        console.warn(`Ignoring a custom game texture pack's ${iM} files that name another site: ${MM.join(", ")}`)
      }
      return Object.fromEntries(OM.filter((MM => {
        let [, iM] = MM;
        return rM(iM)
      })))
    }
  },
  53778: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => hM,
      f: () => EM,
      i: () => lM
    });
    var OM = iM(1073),
      SM = iM(2263),
      jM = iM(3647),
      aM = iM(3657),
      PM = iM(35103),
      nM = iM(35100),
      QM = iM(53774),
      zM = iM(42090),
      LM = iM(42065),
      mM = iM(5463);
    const HM = {
      pack: null,
      gameSource: null
    };
    class hM {
      constructor(MM) {
        this.host = MM, this.ready = void 0, this.state = HM, this.playerPack = null, this.onGamePack = !1, this.confirmGamePack = null, this.skippedKey = null, this.ownAnnouncements = new Set, this.listeners = new Map, this.ownListeners = new Set, this.changes = 0, this.picks = 0, this.playerPicked = !1, this.ownChanges = 0, this.dh = !1, (0, aM.j)(), this.ready = this.readStored()
      }
      readyWithin(MM) {
        return Promise.race([this.ready, new Promise((rM => {
          setTimeout(rM, MM)
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
      onPlayerPackChange(MM) {
        return this.ownListeners.add(MM), () => {
          this.ownListeners.delete(MM)
        }
      }
      isUsingCustomGameTexturePack(MM) {
        return (0, LM.c)(this.state, MM)
      }
      setGamePackConfirm(MM) {
        this.confirmGamePack = MM
      }
      subscribe(MM) {
        return this.listeners.set(MM, null), this.ready.then((() => {
          this.deliver(MM)
        })), () => {
          this.listeners.delete(MM)
        }
      }
      async setPlayerPack(MM) {
        const rM = dM(MM) ? null : MM;
        this.picks++, this.playerPicked = !0, this.ownChanges++, this.setOwn(rM), this.change({
          pack: rM,
          gameSource: null
        }, !1);
        const iM = await this.storePlayerPack(rM);
        return iM && this.announce(), iM
      }
      async packForGame(MM, rM, iM) {
        await this.readyWithin(Math.max(0, (null !== iM && void 0 !== iM ? iM : performance.now() + zM.d) - performance.now()));
        const SM = ++this.picks,
          jM = (0, OM.m)(MM) ? (0, OM.p)(MM) : null;
        if (null === jM) return void this.usePlayerPack();
        let aM;
        const PM = function(MM) {
          let rM;
          const iM = new Promise(((iM, OM) => {
            rM = setTimeout((() => {
              OM(new Error(`no answer in ${MM} ms`))
            }), MM)
          }));
          return iM.catch((() => {})), {
            passed: iM,
            clear: () => {
              clearTimeout(rM)
            }
          }
        }(2e4);
        try {
          const MM = await Promise.race([rM.packKey(jM), PM.passed]);
          if (null !== MM && this.onGamePack && this.state.gameSource === MM) return;
          if (null !== MM && MM === this.skippedKey) return void(this.dh || this.picks !== SM || this.usePlayerPack());
          aM = null === MM ? null : await Promise.race([JM(jM, MM, rM), PM.passed])
        } catch (LM) {
          const MM = !this.dh && this.picks === SM && this.holdsOtherGamePack(jM);
          return this.host.warn(`the texture pack of ${jM} didn't load: ${MM?"the player's own shows":"the pack in play stays"}`, LM), void(MM && this.usePlayerPack())
        } finally {
          PM.clear()
        }
        if (this.dh || this.picks !== SM) return;
        null !== aM && (0, QM.h)(aM.pack) && (this.host.warn(`the texture pack of ${jM} names files on other sites: the player's own shows`, null), aM = null);
        const nM = null === aM || await this.confirmed(aM.pack, jM) ? null : aM.key;
        this.dh || this.picks !== SM || (null !== nM && (this.skippedKey = nM, aM = null), null === aM ? this.usePlayerPack() : (this.onGamePack = !0, this.change({
          pack: aM.pack,
          gameSource: aM.key
        }, !0)))
      }
      endGamePack() {
        this.picks++, this.usePlayerPack()
      }
      holdsOtherGamePack(MM) {
        return this.onGamePack && "" !== this.state.gameSource && !this.isUsingCustomGameTexturePack(MM)
      }
      async confirmed(MM, rM) {
        const iM = this.confirmGamePack;
        if (null === iM) return !0;
        try {
          return await iM(MM, rM)
        } catch (OM) {
          return this.host.warn(`the texture pack prompt of ${rM} failed: the pack is skipped`, OM), !1
        }
      }
      async readPlayerPack() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (null !== MM && this.ownAnnouncements.delete(MM)) return;
        await this.ready;
        const rM = this.ownChanges;
        let iM;
        try {
          iM = await this.host.store.getItem(aM.b, !0)
        } catch (SM) {
          return void this.host.warn("the stored texture pack didn't read again: the pack in play stays", SM)
        }
        if (this.dh || this.ownChanges !== rM) return;
        const OM = yM(iM);
        (0, mM.d)(OM, this.playerPack) || (this.ownChanges++, this.setOwn(OM), this.onGamePack || this.change({
          pack: OM,
          gameSource: null
        }, !1))
      }
      joinedWithout() {
        this.picks++
      }
      dispose() {
        this.dh = !0, this.listeners.clear()
      }
      async readStored() {
        const {
          store: MM,
          warn: rM
        } = this.host;
        await Promise.all([!1 === this.host.oneShot ? void 0 : (0, nM.f)(MM, !0, (MM => {
          rM("the custom game's texture pack wasn't removed from storage", MM)
        })).then((MM => {
          this.takeOneShot(MM)
        }), (MM => {
          rM("the custom game's texture pack didn't read: the player's own shows", MM)
        })), MM.getItem(aM.b, !0).then((MM => {
          this.takeStoredOwn(MM)
        }), (MM => {
          rM("the stored texture pack didn't read: the default pack shows", MM), this.takeStoredOwn(null)
        }))]), this.update()
      }
      takeOneShot(MM) {
        var rM;
        null === MM || this.dh || this.changes > 0 || this.picks > 0 || ((0, QM.h)(MM.pack) ? this.host.warn("the custom game's texture pack names files on other sites: the player's own shows", null) : (this.onGamePack = !0, this.state = {
          pack: MM.pack,
          gameSource: null !== (rM = MM.source) && void 0 !== rM ? rM : ""
        }))
      }
      takeStoredOwn(MM) {
        if (this.playerPicked || this.dh) return;
        if (this.ownChanges++, this.setOwn(yM(MM)), this.onGamePack) return;
        const rM = {
          pack: this.playerPack,
          gameSource: null
        };
        0 === this.changes ? this.state = rM : this.change(rM, !1)
      }
      async update() {
        const MM = this.playerPack,
          rM = null === MM || void 0 === MM ? void 0 : MM.metaData.id;
        if (!MM || !rM || !this.host.fetchLatest || rM === SM.b || rM === SM.o.CUSTOM) return;
        const iM = SM.s[rM];
        if (void 0 === iM || MM.metaData.version >= iM) return;
        let OM;
        try {
          OM = yM(await this.host.fetchLatest(rM))
        } catch (jM) {
          return void this.host.warn(`texture pack ${rM} didn't update to version ${iM}`, jM)
        }
        null === OM || this.dh || this.playerPack !== MM || (this.ownChanges++, this.setOwn(OM), this.onGamePack || this.change({
          pack: OM,
          gameSource: null
        }, !1), await this.storePlayerPack(OM) && this.announce())
      }
      announce() {
        const MM = (0, PM.d)();
        null !== MM && this.ownAnnouncements.add(MM)
      }
      setOwn(MM) {
        this.playerPack = MM;
        for (const iM of [...this.ownListeners]) try {
          iM()
        } catch (rM) {
          this.host.warn("a texture pack listener threw", rM)
        }
      }
      usePlayerPack() {
        this.onGamePack && this.change({
          pack: this.playerPack,
          gameSource: null
        }, !1)
      }
      async storePlayerPack(MM) {
        try {
          return null === MM ? (await this.host.store.removeItem(aM.b), !0) : await this.host.store.setItem(aM.b, MM)
        } catch (rM) {
          return this.host.warn("the texture pack wasn't stored: it shows until the page reloads", rM), !1
        }
      }
      change(MM, rM) {
        if (!this.dh) {
          this.changes++, this.onGamePack = rM, this.state = MM;
          for (const MM of [...this.listeners.keys()]) this.deliver(MM)
        }
      }
      deliver(MM) {
        if (!this.dh && this.listeners.has(MM) && this.listeners.get(MM) !== this.state) {
          this.listeners.set(MM, this.state);
          try {
            MM(this.state)
          } catch (rM) {
            this.host.warn("a texture pack listener threw", rM)
          }
        }
      }
    }
    async function JM(MM, rM, iM) {
      const OM = (0, nM.d)(await iM.fetchPack(rM));
      if (null !== OM) return {
        pack: OM,
        key: rM
      };
      const SM = await iM.packKey(MM);
      if (null === SM) return null;
      const jM = (0, nM.d)(await iM.fetchPack(SM));
      if (null === jM) throw new Error(`no texture pack at ${SM}`);
      return {
        pack: jM,
        key: SM
      }
    }

    function dM(MM) {
      return null === MM || MM.metaData.id === SM.b
    }

    function yM(MM) {
      const rM = (0, nM.d)(MM);
      return dM(rM) ? null : rM
    }
    async function lM(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jM.c;
      if (null === MM.pack) return null;
      const {
        packAssets: OM
      } = await Promise.all([iM.e(230), iM.e(51)]).then((() => iM(64133)));
      return OM(MM, rM)
    }

    function EM(MM) {
      const rM = (0, aM.o)();
      return null === rM ? () => {} : (rM.onmessage = rM => {
        MM.readPlayerPack((0, PM.e)(rM.data))
      }, () => {
        rM.close()
      })
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);