export const id = 201;
export const ids = [201];
export const modules = {
  34265: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => sD,
      g: () => KD
    });
    var pD = wD(3243);

    function sD() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const DD = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const zD = new BroadcastChannel(pD.m);
        zD.postMessage({
          stored: DD
        }), zD.close()
      } catch {
        return null
      }
      return DD
    }

    function KD(DD) {
      const zD = "object" === typeof DD && null !== DD ? DD.stored : null;
      return "string" === typeof zD ? zD : null
    }
  },
  34257: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => rD,
      e: () => sD,
      f: () => KD
    });
    var pD = wD(3243);
    async function sD(DD, zD, wD) {
      let sD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const KD = rD(await DD.getItem(pD.h, zD));
      if (null === KD || sD()) return null;
      const LD = await DD.getItem(pD.k, zD);
      return sD() ? null : (await async function(DD) {
        await Promise.all([DD.removeItem(pD.h), DD.removeItem(pD.k)])
      }(DD).catch(wD), {
        pack: KD,
        source: "string" === typeof LD ? LD : null
      })
    }

    function KD(DD) {
      return (0, pD.t)() ? Promise.resolve(null) : sD(DD, !1, (DD => {
        console.error("Error removing temporary texture pack: ", DD)
      }), pD.t)
    }

    function rD(DD) {
      if ("object" !== typeof DD || null === DD) return null;
      const zD = DD.metaData;
      return "object" !== typeof zD || null === zD || "string" !== typeof zD.id ? null : DD
    }
  },
  50802: (DD, zD, wD) => {
    function pD(DD) {
      return null === DD.gameSource ? "player" : "customGame"
    }
    wD.d(zD, {
      e: () => KD,
      g: () => BD,
      j: () => ID,
      k: () => pD
    });
    const sD = /^data:[\w.+/-]*;base64,[A-Za-z0-9+/]*={0,2}$/;

    function KD(DD) {
      return "" === DD || "string" === typeof DD && sD.test(DD)
    }

    function rD(DD) {
      return "object" === typeof DD && null !== DD && ("earth" === DD.type || Object.entries(DD).every((DD => {
        let [zD, wD] = DD;
        return "type" === zD || KD(wD)
      })))
    }
    const LD = /(?:src|image|image-set|cross-fade)\(/i,
      cD = /url\(\s*(?:"(?<doubleQuoted>[^"]*)"|'(?<singleQuoted>[^']*)'|(?<unquoted>[^"'()\s]*))\s*\)/gi,
      gD = /url\(/gi,
      RD = ["https://bloxd.invalid/", "http://bloxd.invalid/"],
      AD = new Set([...RD.map((DD => new URL(DD).origin)), "https://fonts.gstatic.com"]),
      UD = new Set(["https://i.imgur.com/MEcjBFQ.png"]);

    function fD(DD) {
      var zD, wD;
      if (DD.includes("\\") || LD.test(DD)) return !0;
      const pD = [...DD.matchAll(cD)];
      return pD.length !== (null !== (zD = null === (wD = DD.match(gD)) || void 0 === wD ? void 0 : wD.length) && void 0 !== zD ? zD : 0) || !pD.every((DD => {
        var zD, wD, pD;
        let {
          groups: sD
        } = DD;
        return function(DD) {
          try {
            return RD.every((zD => {
              const wD = new URL(DD, zD);
              return "data:" === wD.protocol || AD.has(wD.origin) || UD.has(wD.href)
            }))
          } catch {
            return !1
          }
        }(null !== (zD = null !== (wD = null !== (pD = null === sD || void 0 === sD ? void 0 : sD.doubleQuoted) && void 0 !== pD ? pD : null === sD || void 0 === sD ? void 0 : sD.singleQuoted) && void 0 !== wD ? wD : null === sD || void 0 === sD ? void 0 : sD.unquoted) && void 0 !== zD ? zD : "")
      }))
    }

    function ID(DD) {
      var zD, wD, pD, sD, LD, cD, gD;
      const RD = [...Object.values(null !== (zD = DD.textureOverrides) && void 0 !== zD ? zD : {}), ...Object.values(null !== (wD = DD.modelOverrides) && void 0 !== wD ? wD : {})],
        AD = [...Object.values(null !== (pD = null === (sD = DD.customCss) || void 0 === sD ? void 0 : sD.fontFaces) && void 0 !== pD ? pD : {}), ...Object.values(null !== (LD = null === (cD = DD.customCss) || void 0 === cD ? void 0 : cD.classStyles) && void 0 !== LD ? LD : {})].flatMap((DD => Object.values(null !== DD && void 0 !== DD ? DD : {})));
      return !RD.every(KD) || !Object.values(null !== (gD = DD.skyBoxes) && void 0 !== gD ? gD : {}).every(rD) || AD.some((DD => "string" === typeof DD && fD(DD)))
    }

    function BD(DD, zD) {
      if (null === DD || "player" === zD || !ID(DD)) return DD;
      const wD = {
        ...DD
      };
      return DD.textureOverrides && (wD.textureOverrides = hD(DD.textureOverrides, KD, "texture")), DD.modelOverrides && (wD.modelOverrides = hD(DD.modelOverrides, KD, "model")), DD.skyBoxes && (wD.skyBoxes = hD(DD.skyBoxes, rD, "sky")), DD.customCss && (wD.customCss = function(DD) {
        const zD = DD => hD(DD, (DD => "string" === typeof DD && !fD(DD)), "CSS"),
          {
            fontFaces: wD,
            classStyles: pD
          } = GD(DD) ? DD : {},
          sD = {};
        for (const [KD, rD] of Object.entries(GD(pD) ? pD : {})) sD[KD] = zD(rD);
        return {
          fontFaces: (Array.isArray(wD) ? wD : []).map(zD),
          classStyles: sD
        }
      }(DD.customCss)), wD
    }

    function GD(DD) {
      return "object" === typeof DD && null !== DD && !Array.isArray(DD)
    }

    function hD(DD, zD, wD) {
      const pD = Object.entries(GD(DD) ? DD : {}),
        sD = pD.filter((DD => {
          let [, wD] = DD;
          return !zD(wD)
        }));
      if (sD.length > 0) {
        const DD = sD.map((DD => {
          let [zD] = DD;
          return zD
        }));
        console.warn(`Ignoring a custom game texture pack's ${wD} files that name another site: ${DD.join(", ")}`)
      }
      return Object.fromEntries(pD.filter((DD => {
        let [, wD] = DD;
        return zD(wD)
      })))
    }
  },
  50808: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => ID,
      e: () => MD,
      f: () => nD
    });
    var pD = wD(1008),
      sD = wD(2130),
      KD = wD(3227),
      rD = wD(3243),
      LD = wD(34265),
      cD = wD(34257),
      gD = wD(50802),
      RD = wD(40907),
      AD = wD(40883),
      UD = wD(5099);
    const fD = {
      pack: null,
      gameSource: null
    };
    class ID {
      constructor(DD) {
        this.host = DD, this.ready = void 0, this.state = fD, this.playerPack = null, this.onGamePack = !1, this.confirmGamePack = null, this.skippedKey = null, this.ownAnnouncements = new Set, this.listeners = new Map, this.ownListeners = new Set, this.changes = 0, this.picks = 0, this.playerPicked = !1, this.ownChanges = 0, this.MI = !1, (0, rD.p)(), this.ready = this.readStored()
      }
      readyWithin(DD) {
        return Promise.race([this.ready, new Promise((zD => {
          setTimeout(zD, DD)
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
      onPlayerPackChange(DD) {
        return this.ownListeners.add(DD), () => {
          this.ownListeners.delete(DD)
        }
      }
      isUsingCustomGameTexturePack(DD) {
        return (0, AD.g)(this.state, DD)
      }
      setGamePackConfirm(DD) {
        this.confirmGamePack = DD
      }
      subscribe(DD) {
        return this.listeners.set(DD, null), this.ready.then((() => {
          this.deliver(DD)
        })), () => {
          this.listeners.delete(DD)
        }
      }
      async setPlayerPack(DD) {
        const zD = GD(DD) ? null : DD;
        this.picks++, this.playerPicked = !0, this.ownChanges++, this.setOwn(zD), this.change({
          pack: zD,
          gameSource: null
        }, !1);
        const wD = await this.storePlayerPack(zD);
        return wD && this.announce(), wD
      }
      async packForGame(DD, zD, wD) {
        await this.readyWithin(Math.max(0, (null !== wD && void 0 !== wD ? wD : performance.now() + RD.b) - performance.now()));
        const sD = ++this.picks,
          KD = (0, pD.l)(DD) ? (0, pD.o)(DD) : null;
        if (null === KD) return void this.usePlayerPack();
        let rD;
        const LD = function(DD) {
          let zD;
          const wD = new Promise(((wD, pD) => {
            zD = setTimeout((() => {
              pD(new Error(`no answer in ${DD} ms`))
            }), DD)
          }));
          return wD.catch((() => {})), {
            passed: wD,
            clear: () => {
              clearTimeout(zD)
            }
          }
        }(2e4);
        try {
          const DD = await Promise.race([zD.packKey(KD), LD.passed]);
          if (null !== DD && this.onGamePack && this.state.gameSource === DD) return;
          if (null !== DD && DD === this.skippedKey) return void(this.MI || this.picks !== sD || this.usePlayerPack());
          rD = null === DD ? null : await Promise.race([BD(KD, DD, zD), LD.passed])
        } catch (AD) {
          const DD = !this.MI && this.picks === sD && this.holdsOtherGamePack(KD);
          return this.host.warn(`the texture pack of ${KD} didn't load: ${DD?"the player's own shows":"the pack in play stays"}`, AD), void(DD && this.usePlayerPack())
        } finally {
          LD.clear()
        }
        if (this.MI || this.picks !== sD) return;
        null !== rD && (0, gD.j)(rD.pack) && (this.host.warn(`the texture pack of ${KD} names files on other sites: the player's own shows`, null), rD = null);
        const cD = null === rD || await this.confirmed(rD.pack, KD) ? null : rD.key;
        this.MI || this.picks !== sD || (null !== cD && (this.skippedKey = cD, rD = null), null === rD ? this.usePlayerPack() : (this.onGamePack = !0, this.change({
          pack: rD.pack,
          gameSource: rD.key
        }, !0)))
      }
      endGamePack() {
        this.picks++, this.usePlayerPack()
      }
      holdsOtherGamePack(DD) {
        return this.onGamePack && "" !== this.state.gameSource && !this.isUsingCustomGameTexturePack(DD)
      }
      async confirmed(DD, zD) {
        const wD = this.confirmGamePack;
        if (null === wD) return !0;
        try {
          return await wD(DD, zD)
        } catch (pD) {
          return this.host.warn(`the texture pack prompt of ${zD} failed: the pack is skipped`, pD), !1
        }
      }
      async readPlayerPack() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (null !== DD && this.ownAnnouncements.delete(DD)) return;
        await this.ready;
        const zD = this.ownChanges;
        let wD;
        try {
          wD = await this.host.store.getItem(rD.e, !0)
        } catch (sD) {
          return void this.host.warn("the stored texture pack didn't read again: the pack in play stays", sD)
        }
        if (this.MI || this.ownChanges !== zD) return;
        const pD = hD(wD);
        (0, UD.c)(pD, this.playerPack) || (this.ownChanges++, this.setOwn(pD), this.onGamePack || this.change({
          pack: pD,
          gameSource: null
        }, !1))
      }
      joinedWithout() {
        this.picks++
      }
      dispose() {
        this.MI = !0, this.listeners.clear()
      }
      async readStored() {
        const {
          store: DD,
          warn: zD
        } = this.host;
        await Promise.all([!1 === this.host.oneShot ? void 0 : (0, cD.e)(DD, !0, (DD => {
          zD("the custom game's texture pack wasn't removed from storage", DD)
        })).then((DD => {
          this.takeOneShot(DD)
        }), (DD => {
          zD("the custom game's texture pack didn't read: the player's own shows", DD)
        })), DD.getItem(rD.e, !0).then((DD => {
          this.takeStoredOwn(DD)
        }), (DD => {
          zD("the stored texture pack didn't read: the default pack shows", DD), this.takeStoredOwn(null)
        }))]), this.update()
      }
      takeOneShot(DD) {
        var zD;
        null === DD || this.MI || this.changes > 0 || this.picks > 0 || ((0, gD.j)(DD.pack) ? this.host.warn("the custom game's texture pack names files on other sites: the player's own shows", null) : (this.onGamePack = !0, this.state = {
          pack: DD.pack,
          gameSource: null !== (zD = DD.source) && void 0 !== zD ? zD : ""
        }))
      }
      takeStoredOwn(DD) {
        if (this.playerPicked || this.MI) return;
        if (this.ownChanges++, this.setOwn(hD(DD)), this.onGamePack) return;
        const zD = {
          pack: this.playerPack,
          gameSource: null
        };
        0 === this.changes ? this.state = zD : this.change(zD, !1)
      }
      async update() {
        const DD = this.playerPack,
          zD = null === DD || void 0 === DD ? void 0 : DD.metaData.id;
        if (!DD || !zD || !this.host.fetchLatest || zD === sD.c || zD === sD.m.CUSTOM) return;
        const wD = sD.o[zD];
        if (void 0 === wD || DD.metaData.version >= wD) return;
        let pD;
        try {
          pD = hD(await this.host.fetchLatest(zD))
        } catch (KD) {
          return void this.host.warn(`texture pack ${zD} didn't update to version ${wD}`, KD)
        }
        null === pD || this.MI || this.playerPack !== DD || (this.ownChanges++, this.setOwn(pD), this.onGamePack || this.change({
          pack: pD,
          gameSource: null
        }, !1), await this.storePlayerPack(pD) && this.announce())
      }
      announce() {
        const DD = (0, LD.e)();
        null !== DD && this.ownAnnouncements.add(DD)
      }
      setOwn(DD) {
        this.playerPack = DD;
        for (const wD of [...this.ownListeners]) try {
          wD()
        } catch (zD) {
          this.host.warn("a texture pack listener threw", zD)
        }
      }
      usePlayerPack() {
        this.onGamePack && this.change({
          pack: this.playerPack,
          gameSource: null
        }, !1)
      }
      async storePlayerPack(DD) {
        try {
          return null === DD ? (await this.host.store.removeItem(rD.e), !0) : await this.host.store.setItem(rD.e, DD)
        } catch (zD) {
          return this.host.warn("the texture pack wasn't stored: it shows until the page reloads", zD), !1
        }
      }
      change(DD, zD) {
        if (!this.MI) {
          this.changes++, this.onGamePack = zD, this.state = DD;
          for (const DD of [...this.listeners.keys()]) this.deliver(DD)
        }
      }
      deliver(DD) {
        if (!this.MI && this.listeners.has(DD) && this.listeners.get(DD) !== this.state) {
          this.listeners.set(DD, this.state);
          try {
            DD(this.state)
          } catch (zD) {
            this.host.warn("a texture pack listener threw", zD)
          }
        }
      }
    }
    async function BD(DD, zD, wD) {
      const pD = (0, cD.b)(await wD.fetchPack(zD));
      if (null !== pD) return {
        pack: pD,
        key: zD
      };
      const sD = await wD.packKey(DD);
      if (null === sD) return null;
      const KD = (0, cD.b)(await wD.fetchPack(sD));
      if (null === KD) throw new Error(`no texture pack at ${sD}`);
      return {
        pack: KD,
        key: sD
      }
    }

    function GD(DD) {
      return null === DD || DD.metaData.id === sD.c
    }

    function hD(DD) {
      const zD = (0, cD.b)(DD);
      return GD(zD) ? null : zD
    }
    async function nD(DD) {
      let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : KD.b;
      if (null === DD.pack) return null;
      const {
        packAssets: pD
      } = await Promise.all([wD.e(203), wD.e(44)]).then((() => wD(61258)));
      return pD(DD, zD)
    }

    function MD(DD) {
      const zD = (0, rD.x)();
      return null === zD ? () => {} : (zD.onmessage = zD => {
        DD.readPlayerPack((0, LD.g)(zD.data))
      }, () => {
        zD.close()
      })
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);