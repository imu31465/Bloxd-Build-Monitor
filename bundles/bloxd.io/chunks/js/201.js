export const id = 201;
export const ids = [201];
export const modules = {
  34297: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => bS,
      f: () => XS
    });
    var tS = gS(3403);

    function bS() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const SS = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const HS = new BroadcastChannel(tS.h);
        HS.postMessage({
          stored: SS
        }), HS.close()
      } catch {
        return null
      }
      return SS
    }

    function XS(SS) {
      const HS = "object" === typeof SS && null !== SS ? SS.stored : null;
      return "string" === typeof HS ? HS : null
    }
  },
  34289: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => xS,
      e: () => bS,
      h: () => XS
    });
    var tS = gS(3403);
    async function bS(SS, HS, gS) {
      let bS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const XS = xS(await SS.getItem(tS.d, HS));
      if (null === XS || bS()) return null;
      const NS = await SS.getItem(tS.g, HS);
      return bS() ? null : (await async function(SS) {
        await Promise.all([SS.removeItem(tS.d), SS.removeItem(tS.g)])
      }(SS).catch(gS), {
        pack: XS,
        source: "string" === typeof NS ? NS : null
      })
    }

    function XS(SS) {
      return (0, tS.n)() ? Promise.resolve(null) : bS(SS, !1, (SS => {
        console.error("Error removing temporary texture pack: ", SS)
      }), tS.n)
    }

    function xS(SS) {
      if ("object" !== typeof SS || null === SS) return null;
      const HS = SS.metaData;
      return "object" !== typeof HS || null === HS || "string" !== typeof HS.id ? null : SS
    }
  },
  51027: (SS, HS, gS) => {
    function tS(SS) {
      return null === SS.gameSource ? "player" : "customGame"
    }
    gS.d(HS, {
      c: () => XS,
      d: () => jS,
      h: () => KS,
      k: () => tS
    });
    const bS = /^data:[\w.+/-]*;base64,[A-Za-z0-9+/]*={0,2}$/;

    function XS(SS) {
      return "" === SS || "string" === typeof SS && bS.test(SS)
    }

    function xS(SS) {
      return "object" === typeof SS && null !== SS && ("earth" === SS.type || Object.entries(SS).every((SS => {
        let [HS, gS] = SS;
        return "type" === HS || XS(gS)
      })))
    }
    const NS = /(?:src|image|image-set|cross-fade)\(/i,
      qS = /url\(\s*(?:"(?<doubleQuoted>[^"]*)"|'(?<singleQuoted>[^']*)'|(?<unquoted>[^"'()\s]*))\s*\)/gi,
      uS = /url\(/gi,
      IS = ["https://bloxd.invalid/", "http://bloxd.invalid/"],
      fS = new Set([...IS.map((SS => new URL(SS).origin)), "https://fonts.gstatic.com"]),
      kS = new Set(["https://i.imgur.com/MEcjBFQ.png"]);

    function aS(SS) {
      var HS, gS;
      if (SS.includes("\\") || NS.test(SS)) return !0;
      const tS = [...SS.matchAll(qS)];
      return tS.length !== (null !== (HS = null === (gS = SS.match(uS)) || void 0 === gS ? void 0 : gS.length) && void 0 !== HS ? HS : 0) || !tS.every((SS => {
        var HS, gS, tS;
        let {
          groups: bS
        } = SS;
        return function(SS) {
          try {
            return IS.every((HS => {
              const gS = new URL(SS, HS);
              return "data:" === gS.protocol || fS.has(gS.origin) || kS.has(gS.href)
            }))
          } catch {
            return !1
          }
        }(null !== (HS = null !== (gS = null !== (tS = null === bS || void 0 === bS ? void 0 : bS.doubleQuoted) && void 0 !== tS ? tS : null === bS || void 0 === bS ? void 0 : bS.singleQuoted) && void 0 !== gS ? gS : null === bS || void 0 === bS ? void 0 : bS.unquoted) && void 0 !== HS ? HS : "")
      }))
    }

    function KS(SS) {
      var HS, gS, tS, bS, NS, qS, uS;
      const IS = [...Object.values(null !== (HS = SS.textureOverrides) && void 0 !== HS ? HS : {}), ...Object.values(null !== (gS = SS.modelOverrides) && void 0 !== gS ? gS : {})],
        fS = [...Object.values(null !== (tS = null === (bS = SS.customCss) || void 0 === bS ? void 0 : bS.fontFaces) && void 0 !== tS ? tS : {}), ...Object.values(null !== (NS = null === (qS = SS.customCss) || void 0 === qS ? void 0 : qS.classStyles) && void 0 !== NS ? NS : {})].flatMap((SS => Object.values(null !== SS && void 0 !== SS ? SS : {})));
      return !IS.every(XS) || !Object.values(null !== (uS = SS.skyBoxes) && void 0 !== uS ? uS : {}).every(xS) || fS.some((SS => "string" === typeof SS && aS(SS)))
    }

    function jS(SS, HS) {
      if (null === SS || "player" === HS || !KS(SS)) return SS;
      const gS = {
        ...SS
      };
      return SS.textureOverrides && (gS.textureOverrides = CS(SS.textureOverrides, XS, "texture")), SS.modelOverrides && (gS.modelOverrides = CS(SS.modelOverrides, XS, "model")), SS.skyBoxes && (gS.skyBoxes = CS(SS.skyBoxes, xS, "sky")), SS.customCss && (gS.customCss = function(SS) {
        const HS = SS => CS(SS, (SS => "string" === typeof SS && !aS(SS)), "CSS"),
          {
            fontFaces: gS,
            classStyles: tS
          } = GS(SS) ? SS : {},
          bS = {};
        for (const [XS, xS] of Object.entries(GS(tS) ? tS : {})) bS[XS] = HS(xS);
        return {
          fontFaces: (Array.isArray(gS) ? gS : []).map(HS),
          classStyles: bS
        }
      }(SS.customCss)), gS
    }

    function GS(SS) {
      return "object" === typeof SS && null !== SS && !Array.isArray(SS)
    }

    function CS(SS, HS, gS) {
      const tS = Object.entries(GS(SS) ? SS : {}),
        bS = tS.filter((SS => {
          let [, gS] = SS;
          return !HS(gS)
        }));
      if (bS.length > 0) {
        const SS = bS.map((SS => {
          let [HS] = SS;
          return HS
        }));
        console.warn(`Ignoring a custom game texture pack's ${gS} files that name another site: ${SS.join(", ")}`)
      }
      return Object.fromEntries(tS.filter((SS => {
        let [, gS] = SS;
        return HS(gS)
      })))
    }
  },
  51036: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => KS,
      e: () => PS,
      f: () => nS
    });
    var tS = gS(1087),
      bS = gS(2256),
      XS = gS(3395),
      xS = gS(3403),
      NS = gS(34297),
      qS = gS(34289),
      uS = gS(51027),
      IS = gS(41017),
      fS = gS(40991),
      kS = gS(5242);
    const aS = {
      pack: null,
      gameSource: null
    };
    class KS {
      constructor(SS) {
        this.host = SS, this.ready = void 0, this.state = aS, this.playerPack = null, this.onGamePack = !1, this.confirmGamePack = null, this.skippedKey = null, this.ownAnnouncements = new Set, this.listeners = new Map, this.ownListeners = new Set, this.changes = 0, this.picks = 0, this.playerPicked = !1, this.ownChanges = 0, this.nK = !1, (0, xS.l)(), this.ready = this.readStored()
      }
      readyWithin(SS) {
        return Promise.race([this.ready, new Promise((HS => {
          setTimeout(HS, SS)
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
      onPlayerPackChange(SS) {
        return this.ownListeners.add(SS), () => {
          this.ownListeners.delete(SS)
        }
      }
      isUsingCustomGameTexturePack(SS) {
        return (0, fS.f)(this.state, SS)
      }
      setGamePackConfirm(SS) {
        this.confirmGamePack = SS
      }
      subscribe(SS) {
        return this.listeners.set(SS, null), this.ready.then((() => {
          this.deliver(SS)
        })), () => {
          this.listeners.delete(SS)
        }
      }
      async setPlayerPack(SS) {
        const HS = GS(SS) ? null : SS;
        this.picks++, this.playerPicked = !0, this.ownChanges++, this.setOwn(HS), this.change({
          pack: HS,
          gameSource: null
        }, !1);
        const gS = await this.storePlayerPack(HS);
        return gS && this.announce(), gS
      }
      async packForGame(SS, HS, gS) {
        await this.readyWithin(Math.max(0, (null !== gS && void 0 !== gS ? gS : performance.now() + IS.d) - performance.now()));
        const bS = ++this.picks,
          XS = (0, tS.m)(SS) ? (0, tS.t)(SS) : null;
        if (null === XS) return void this.usePlayerPack();
        let xS;
        const NS = function(SS) {
          let HS;
          const gS = new Promise(((gS, tS) => {
            HS = setTimeout((() => {
              tS(new Error(`no answer in ${SS} ms`))
            }), SS)
          }));
          return gS.catch((() => {})), {
            passed: gS,
            clear: () => {
              clearTimeout(HS)
            }
          }
        }(2e4);
        try {
          const SS = await Promise.race([HS.packKey(XS), NS.passed]);
          if (null !== SS && this.onGamePack && this.state.gameSource === SS) return;
          if (null !== SS && SS === this.skippedKey) return void(this.nK || this.picks !== bS || this.usePlayerPack());
          xS = null === SS ? null : await Promise.race([jS(XS, SS, HS), NS.passed])
        } catch (fS) {
          const SS = !this.nK && this.picks === bS && this.holdsOtherGamePack(XS);
          return this.host.warn(`the texture pack of ${XS} didn't load: ${SS?"the player's own shows":"the pack in play stays"}`, fS), void(SS && this.usePlayerPack())
        } finally {
          NS.clear()
        }
        if (this.nK || this.picks !== bS) return;
        null !== xS && (0, uS.h)(xS.pack) && (this.host.warn(`the texture pack of ${XS} names files on other sites: the player's own shows`, null), xS = null);
        const qS = null === xS || await this.confirmed(xS.pack, XS) ? null : xS.key;
        this.nK || this.picks !== bS || (null !== qS && (this.skippedKey = qS, xS = null), null === xS ? this.usePlayerPack() : (this.onGamePack = !0, this.change({
          pack: xS.pack,
          gameSource: xS.key
        }, !0)))
      }
      endGamePack() {
        this.picks++, this.usePlayerPack()
      }
      holdsOtherGamePack(SS) {
        return this.onGamePack && "" !== this.state.gameSource && !this.isUsingCustomGameTexturePack(SS)
      }
      async confirmed(SS, HS) {
        const gS = this.confirmGamePack;
        if (null === gS) return !0;
        try {
          return await gS(SS, HS)
        } catch (tS) {
          return this.host.warn(`the texture pack prompt of ${HS} failed: the pack is skipped`, tS), !1
        }
      }
      async readPlayerPack() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (null !== SS && this.ownAnnouncements.delete(SS)) return;
        await this.ready;
        const HS = this.ownChanges;
        let gS;
        try {
          gS = await this.host.store.getItem(xS.b, !0)
        } catch (bS) {
          return void this.host.warn("the stored texture pack didn't read again: the pack in play stays", bS)
        }
        if (this.nK || this.ownChanges !== HS) return;
        const tS = CS(gS);
        (0, kS.d)(tS, this.playerPack) || (this.ownChanges++, this.setOwn(tS), this.onGamePack || this.change({
          pack: tS,
          gameSource: null
        }, !1))
      }
      joinedWithout() {
        this.picks++
      }
      dispose() {
        this.nK = !0, this.listeners.clear()
      }
      async readStored() {
        const {
          store: SS,
          warn: HS
        } = this.host;
        await Promise.all([!1 === this.host.oneShot ? void 0 : (0, qS.e)(SS, !0, (SS => {
          HS("the custom game's texture pack wasn't removed from storage", SS)
        })).then((SS => {
          this.takeOneShot(SS)
        }), (SS => {
          HS("the custom game's texture pack didn't read: the player's own shows", SS)
        })), SS.getItem(xS.b, !0).then((SS => {
          this.takeStoredOwn(SS)
        }), (SS => {
          HS("the stored texture pack didn't read: the default pack shows", SS), this.takeStoredOwn(null)
        }))]), this.update()
      }
      takeOneShot(SS) {
        var HS;
        null === SS || this.nK || this.changes > 0 || this.picks > 0 || ((0, uS.h)(SS.pack) ? this.host.warn("the custom game's texture pack names files on other sites: the player's own shows", null) : (this.onGamePack = !0, this.state = {
          pack: SS.pack,
          gameSource: null !== (HS = SS.source) && void 0 !== HS ? HS : ""
        }))
      }
      takeStoredOwn(SS) {
        if (this.playerPicked || this.nK) return;
        if (this.ownChanges++, this.setOwn(CS(SS)), this.onGamePack) return;
        const HS = {
          pack: this.playerPack,
          gameSource: null
        };
        0 === this.changes ? this.state = HS : this.change(HS, !1)
      }
      async update() {
        const SS = this.playerPack,
          HS = null === SS || void 0 === SS ? void 0 : SS.metaData.id;
        if (!SS || !HS || !this.host.fetchLatest || HS === bS.d || HS === bS.q.CUSTOM) return;
        const gS = bS.u[HS];
        if (void 0 === gS || SS.metaData.version >= gS) return;
        let tS;
        try {
          tS = CS(await this.host.fetchLatest(HS))
        } catch (XS) {
          return void this.host.warn(`texture pack ${HS} didn't update to version ${gS}`, XS)
        }
        null === tS || this.nK || this.playerPack !== SS || (this.ownChanges++, this.setOwn(tS), this.onGamePack || this.change({
          pack: tS,
          gameSource: null
        }, !1), await this.storePlayerPack(tS) && this.announce())
      }
      announce() {
        const SS = (0, NS.d)();
        null !== SS && this.ownAnnouncements.add(SS)
      }
      setOwn(SS) {
        this.playerPack = SS;
        for (const gS of [...this.ownListeners]) try {
          gS()
        } catch (HS) {
          this.host.warn("a texture pack listener threw", HS)
        }
      }
      usePlayerPack() {
        this.onGamePack && this.change({
          pack: this.playerPack,
          gameSource: null
        }, !1)
      }
      async storePlayerPack(SS) {
        try {
          return null === SS ? (await this.host.store.removeItem(xS.b), !0) : await this.host.store.setItem(xS.b, SS)
        } catch (HS) {
          return this.host.warn("the texture pack wasn't stored: it shows until the page reloads", HS), !1
        }
      }
      change(SS, HS) {
        if (!this.nK) {
          this.changes++, this.onGamePack = HS, this.state = SS;
          for (const SS of [...this.listeners.keys()]) this.deliver(SS)
        }
      }
      deliver(SS) {
        if (!this.nK && this.listeners.has(SS) && this.listeners.get(SS) !== this.state) {
          this.listeners.set(SS, this.state);
          try {
            SS(this.state)
          } catch (HS) {
            this.host.warn("a texture pack listener threw", HS)
          }
        }
      }
    }
    async function jS(SS, HS, gS) {
      const tS = (0, qS.b)(await gS.fetchPack(HS));
      if (null !== tS) return {
        pack: tS,
        key: HS
      };
      const bS = await gS.packKey(SS);
      if (null === bS) return null;
      const XS = (0, qS.b)(await gS.fetchPack(bS));
      if (null === XS) throw new Error(`no texture pack at ${bS}`);
      return {
        pack: XS,
        key: bS
      }
    }

    function GS(SS) {
      return null === SS || SS.metaData.id === bS.d
    }

    function CS(SS) {
      const HS = (0, qS.b)(SS);
      return GS(HS) ? null : HS
    }
    async function nS(SS) {
      let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : XS.b;
      if (null === SS.pack) return null;
      const {
        packAssets: tS
      } = await Promise.all([gS.e(203), gS.e(44)]).then((() => gS(61560)));
      return tS(SS, HS)
    }

    function PS(SS) {
      const HS = (0, xS.r)();
      return null === HS ? () => {} : (HS.onmessage = HS => {
        SS.readPlayerPack((0, NS.f)(HS.data))
      }, () => {
        HS.close()
      })
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);