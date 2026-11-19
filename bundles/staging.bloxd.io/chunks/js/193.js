export const id = 193;
export const ids = [193];
export const modules = {
  9105: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => pD,
      g: () => iD
    });
    var ID = cD(3064);

    function pD() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const DD = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const CD = new BroadcastChannel(ID.k);
        CD.postMessage({
          stored: DD
        }), CD.close()
      } catch {
        return null
      }
      return DD
    }

    function iD(DD) {
      const CD = "object" === typeof DD && null !== DD ? DD.stored : null;
      return "string" === typeof CD ? CD : null
    }
  },
  9097: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => fD,
      d: () => pD,
      f: () => iD
    });
    var ID = cD(3064);
    async function pD(DD, CD, cD) {
      let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const iD = fD(await DD.getItem(ID.f, CD));
      if (null === iD || pD()) return null;
      const bD = await DD.getItem(ID.j, CD);
      return pD() ? null : (await async function(DD) {
        await Promise.all([DD.removeItem(ID.f), DD.removeItem(ID.j)])
      }(DD).catch(cD), {
        pack: iD,
        source: "string" === typeof bD ? bD : null
      })
    }

    function iD(DD) {
      return (0, ID.r)() ? Promise.resolve(null) : pD(DD, !1, (DD => {
        console.error("Error removing temporary texture pack: ", DD)
      }), ID.r)
    }

    function fD(DD) {
      if ("object" !== typeof DD || null === DD) return null;
      const CD = DD.metaData;
      return "object" !== typeof CD || null === CD || "string" !== typeof CD.id ? null : DD
    }
  },
  42485: (DD, CD, cD) => {
    function ID(DD) {
      return null === DD.gameSource ? "player" : "customGame"
    }
    cD.d(CD, {
      d: () => iD,
      f: () => ZD,
      h: () => tD,
      i: () => ID
    });
    const pD = /^data:[\w.+/-]*;base64,[A-Za-z0-9+/]*={0,2}$/;

    function iD(DD) {
      return "" === DD || "string" === typeof DD && pD.test(DD)
    }

    function fD(DD) {
      return "object" === typeof DD && null !== DD && ("earth" === DD.type || Object.entries(DD).every((DD => {
        let [CD, cD] = DD;
        return "type" === CD || iD(cD)
      })))
    }
    const bD = /(?:src|image|image-set|cross-fade)\(/i,
      QD = /url\(\s*(?:"(?<doubleQuoted>[^"]*)"|'(?<singleQuoted>[^']*)'|(?<unquoted>[^"'()\s]*))\s*\)/gi,
      wD = /url\(/gi,
      SD = ["https://bloxd.invalid/", "http://bloxd.invalid/"],
      BD = new Set([...SD.map((DD => new URL(DD).origin)), "https://fonts.gstatic.com"]),
      yD = new Set(["https://i.imgur.com/MEcjBFQ.png"]);

    function MD(DD) {
      var CD, cD;
      if (DD.includes("\\") || bD.test(DD)) return !0;
      const ID = [...DD.matchAll(QD)];
      return ID.length !== (null !== (CD = null === (cD = DD.match(wD)) || void 0 === cD ? void 0 : cD.length) && void 0 !== CD ? CD : 0) || !ID.every((DD => {
        var CD, cD, ID;
        let {
          groups: pD
        } = DD;
        return function(DD) {
          try {
            return SD.every((CD => {
              const cD = new URL(DD, CD);
              return "data:" === cD.protocol || BD.has(cD.origin) || yD.has(cD.href)
            }))
          } catch {
            return !1
          }
        }(null !== (CD = null !== (cD = null !== (ID = null === pD || void 0 === pD ? void 0 : pD.doubleQuoted) && void 0 !== ID ? ID : null === pD || void 0 === pD ? void 0 : pD.singleQuoted) && void 0 !== cD ? cD : null === pD || void 0 === pD ? void 0 : pD.unquoted) && void 0 !== CD ? CD : "")
      }))
    }

    function tD(DD) {
      var CD, cD, ID, pD, bD, QD, wD;
      const SD = [...Object.values(null !== (CD = DD.textureOverrides) && void 0 !== CD ? CD : {}), ...Object.values(null !== (cD = DD.modelOverrides) && void 0 !== cD ? cD : {})],
        BD = [...Object.values(null !== (ID = null === (pD = DD.customCss) || void 0 === pD ? void 0 : pD.fontFaces) && void 0 !== ID ? ID : {}), ...Object.values(null !== (bD = null === (QD = DD.customCss) || void 0 === QD ? void 0 : QD.classStyles) && void 0 !== bD ? bD : {})].flatMap((DD => Object.values(null !== DD && void 0 !== DD ? DD : {})));
      return !SD.every(iD) || !Object.values(null !== (wD = DD.skyBoxes) && void 0 !== wD ? wD : {}).every(fD) || BD.some((DD => "string" === typeof DD && MD(DD)))
    }

    function ZD(DD, CD) {
      if (null === DD || "player" === CD || !tD(DD)) return DD;
      const cD = {
        ...DD
      };
      return DD.textureOverrides && (cD.textureOverrides = vD(DD.textureOverrides, iD, "texture")), DD.modelOverrides && (cD.modelOverrides = vD(DD.modelOverrides, iD, "model")), DD.skyBoxes && (cD.skyBoxes = vD(DD.skyBoxes, fD, "sky")), DD.customCss && (cD.customCss = function(DD) {
        const CD = DD => vD(DD, (DD => "string" === typeof DD && !MD(DD)), "CSS"),
          {
            fontFaces: cD,
            classStyles: ID
          } = oD(DD) ? DD : {},
          pD = {};
        for (const [iD, fD] of Object.entries(oD(ID) ? ID : {})) pD[iD] = CD(fD);
        return {
          fontFaces: (Array.isArray(cD) ? cD : []).map(CD),
          classStyles: pD
        }
      }(DD.customCss)), cD
    }

    function oD(DD) {
      return "object" === typeof DD && null !== DD && !Array.isArray(DD)
    }

    function vD(DD, CD, cD) {
      const ID = Object.entries(oD(DD) ? DD : {}),
        pD = ID.filter((DD => {
          let [, cD] = DD;
          return !CD(cD)
        }));
      if (pD.length > 0) {
        const DD = pD.map((DD => {
          let [CD] = DD;
          return CD
        }));
        console.warn(`Ignoring a custom game texture pack's ${cD} files that name another site: ${DD.join(", ")}`)
      }
      return Object.fromEntries(ID.filter((DD => {
        let [, cD] = DD;
        return CD(cD)
      })))
    }
  },
  42491: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => tD,
      g: () => gD,
      k: () => ND
    });
    var ID = cD(1011),
      pD = cD(2952),
      iD = cD(3053),
      fD = cD(3064),
      bD = cD(9105),
      QD = cD(9097),
      wD = cD(42485),
      SD = cD(40126),
      BD = cD(40119),
      yD = cD(4819);
    const MD = {
      pack: null,
      gameSource: null
    };
    class tD {
      constructor(DD) {
        this.host = DD, this.ready = void 0, this.state = MD, this.playerPack = null, this.onGamePack = !1, this.confirmGamePack = null, this.skippedKey = null, this.ownAnnouncements = new Set, this.listeners = new Map, this.ownListeners = new Set, this.changes = 0, this.picks = 0, this.playerPicked = !1, this.ownChanges = 0, this.Lt = !1, (0, fD.l)(), this.ready = this.readStored()
      }
      readyWithin(DD) {
        return Promise.race([this.ready, new Promise((CD => {
          setTimeout(CD, DD)
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
        return (0, BD.h)(this.state, DD)
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
        const CD = oD(DD) ? null : DD;
        this.picks++, this.playerPicked = !0, this.ownChanges++, this.setOwn(CD), this.change({
          pack: CD,
          gameSource: null
        }, !1);
        const cD = await this.storePlayerPack(CD);
        return cD && this.announce(), cD
      }
      async packForGame(DD, CD, cD) {
        await this.readyWithin(Math.max(0, (null !== cD && void 0 !== cD ? cD : performance.now() + SD.c) - performance.now()));
        const pD = ++this.picks,
          iD = (0, ID.m)(DD) ? (0, ID.t)(DD) : null;
        if (null === iD) return void this.usePlayerPack();
        let fD;
        const bD = function(DD) {
          let CD;
          const cD = new Promise(((cD, ID) => {
            CD = setTimeout((() => {
              ID(new Error(`no answer in ${DD} ms`))
            }), DD)
          }));
          return cD.catch((() => {})), {
            passed: cD,
            clear: () => {
              clearTimeout(CD)
            }
          }
        }(2e4);
        try {
          const DD = await Promise.race([CD.packKey(iD), bD.passed]);
          if (null !== DD && this.onGamePack && this.state.gameSource === DD) return;
          if (null !== DD && DD === this.skippedKey) return void(this.Lt || this.picks !== pD || this.usePlayerPack());
          fD = null === DD ? null : await Promise.race([ZD(iD, DD, CD), bD.passed])
        } catch (BD) {
          const DD = !this.Lt && this.picks === pD && this.holdsOtherGamePack(iD);
          return this.host.warn(`the texture pack of ${iD} didn't load: ${DD?"the player's own shows":"the pack in play stays"}`, BD), void(DD && this.usePlayerPack())
        } finally {
          bD.clear()
        }
        if (this.Lt || this.picks !== pD) return;
        null !== fD && (0, wD.h)(fD.pack) && (this.host.warn(`the texture pack of ${iD} names files on other sites: the player's own shows`, null), fD = null);
        const QD = null === fD || await this.confirmed(fD.pack, iD) ? null : fD.key;
        this.Lt || this.picks !== pD || (null !== QD && (this.skippedKey = QD, fD = null), null === fD ? this.usePlayerPack() : (this.onGamePack = !0, this.change({
          pack: fD.pack,
          gameSource: fD.key
        }, !0)))
      }
      endGamePack() {
        this.picks++, this.usePlayerPack()
      }
      holdsOtherGamePack(DD) {
        return this.onGamePack && "" !== this.state.gameSource && !this.isUsingCustomGameTexturePack(DD)
      }
      async confirmed(DD, CD) {
        const cD = this.confirmGamePack;
        if (null === cD) return !0;
        try {
          return await cD(DD, CD)
        } catch (ID) {
          return this.host.warn(`the texture pack prompt of ${CD} failed: the pack is skipped`, ID), !1
        }
      }
      async readPlayerPack() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (null !== DD && this.ownAnnouncements.delete(DD)) return;
        await this.ready;
        const CD = this.ownChanges;
        let cD;
        try {
          cD = await this.host.store.getItem(fD.e, !0)
        } catch (pD) {
          return void this.host.warn("the stored texture pack didn't read again: the pack in play stays", pD)
        }
        if (this.Lt || this.ownChanges !== CD) return;
        const ID = vD(cD);
        (0, yD.c)(ID, this.playerPack) || (this.ownChanges++, this.setOwn(ID), this.onGamePack || this.change({
          pack: ID,
          gameSource: null
        }, !1))
      }
      joinedWithout() {
        this.picks++
      }
      dispose() {
        this.Lt = !0, this.listeners.clear()
      }
      async readStored() {
        const {
          store: DD,
          warn: CD
        } = this.host;
        await Promise.all([!1 === this.host.oneShot ? void 0 : (0, QD.d)(DD, !0, (DD => {
          CD("the custom game's texture pack wasn't removed from storage", DD)
        })).then((DD => {
          this.takeOneShot(DD)
        }), (DD => {
          CD("the custom game's texture pack didn't read: the player's own shows", DD)
        })), DD.getItem(fD.e, !0).then((DD => {
          this.takeStoredOwn(DD)
        }), (DD => {
          CD("the stored texture pack didn't read: the default pack shows", DD), this.takeStoredOwn(null)
        }))]), this.update()
      }
      takeOneShot(DD) {
        var CD;
        null === DD || this.Lt || this.changes > 0 || this.picks > 0 || ((0, wD.h)(DD.pack) ? this.host.warn("the custom game's texture pack names files on other sites: the player's own shows", null) : (this.onGamePack = !0, this.state = {
          pack: DD.pack,
          gameSource: null !== (CD = DD.source) && void 0 !== CD ? CD : ""
        }))
      }
      takeStoredOwn(DD) {
        if (this.playerPicked || this.Lt) return;
        if (this.ownChanges++, this.setOwn(vD(DD)), this.onGamePack) return;
        const CD = {
          pack: this.playerPack,
          gameSource: null
        };
        0 === this.changes ? this.state = CD : this.change(CD, !1)
      }
      async update() {
        const DD = this.playerPack,
          CD = null === DD || void 0 === DD ? void 0 : DD.metaData.id;
        if (!DD || !CD || !this.host.fetchLatest || CD === pD.e || CD === pD.r.CUSTOM) return;
        const cD = pD.t[CD];
        if (void 0 === cD || DD.metaData.version >= cD) return;
        let ID;
        try {
          ID = vD(await this.host.fetchLatest(CD))
        } catch (iD) {
          return void this.host.warn(`texture pack ${CD} didn't update to version ${cD}`, iD)
        }
        null === ID || this.Lt || this.playerPack !== DD || (this.ownChanges++, this.setOwn(ID), this.onGamePack || this.change({
          pack: ID,
          gameSource: null
        }, !1), await this.storePlayerPack(ID) && this.announce())
      }
      announce() {
        const DD = (0, bD.d)();
        null !== DD && this.ownAnnouncements.add(DD)
      }
      setOwn(DD) {
        this.playerPack = DD;
        for (const cD of [...this.ownListeners]) try {
          cD()
        } catch (CD) {
          this.host.warn("a texture pack listener threw", CD)
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
          return null === DD ? (await this.host.store.removeItem(fD.e), !0) : await this.host.store.setItem(fD.e, DD)
        } catch (CD) {
          return this.host.warn("the texture pack wasn't stored: it shows until the page reloads", CD), !1
        }
      }
      change(DD, CD) {
        if (!this.Lt) {
          this.changes++, this.onGamePack = CD, this.state = DD;
          for (const DD of [...this.listeners.keys()]) this.deliver(DD)
        }
      }
      deliver(DD) {
        if (!this.Lt && this.listeners.has(DD) && this.listeners.get(DD) !== this.state) {
          this.listeners.set(DD, this.state);
          try {
            DD(this.state)
          } catch (CD) {
            this.host.warn("a texture pack listener threw", CD)
          }
        }
      }
    }
    async function ZD(DD, CD, cD) {
      const ID = (0, QD.b)(await cD.fetchPack(CD));
      if (null !== ID) return {
        pack: ID,
        key: CD
      };
      const pD = await cD.packKey(DD);
      if (null === pD) return null;
      const iD = (0, QD.b)(await cD.fetchPack(pD));
      if (null === iD) throw new Error(`no texture pack at ${pD}`);
      return {
        pack: iD,
        key: pD
      }
    }

    function oD(DD) {
      return null === DD || DD.metaData.id === pD.e
    }

    function vD(DD) {
      const CD = (0, QD.b)(DD);
      return oD(CD) ? null : CD
    }
    async function ND(DD) {
      let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : iD.e;
      if (null === DD.pack) return null;
      const {
        packAssets: ID
      } = await Promise.all([cD.e(195), cD.e(44)]).then((() => cD(60716)));
      return ID(DD, CD)
    }

    function gD(DD) {
      const CD = (0, fD.v)();
      return null === CD ? () => {} : (CD.onmessage = CD => {
        DD.readPlayerPack((0, bD.g)(CD.data))
      }, () => {
        CD.close()
      })
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);