export const id = 201;
export const ids = [201];
export const modules = {
  34214: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => wC,
      g: () => bC
    });
    var QC = ZC(3242);

    function wC() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const CC = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const zC = new BroadcastChannel(QC.m);
        zC.postMessage({
          stored: CC
        }), zC.close()
      } catch {
        return null
      }
      return CC
    }

    function bC(CC) {
      const zC = "object" === typeof CC && null !== CC ? CC.stored : null;
      return "string" === typeof zC ? zC : null
    }
  },
  34210: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => nC,
      i: () => wC,
      k: () => bC
    });
    var QC = ZC(3242);
    async function wC(CC, zC, ZC) {
      let wC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const bC = nC(await CC.getItem(QC.f, zC));
      if (null === bC || wC()) return null;
      const fC = await CC.getItem(QC.i, zC);
      return wC() ? null : (await async function(CC) {
        await Promise.all([CC.removeItem(QC.f), CC.removeItem(QC.i)])
      }(CC).catch(ZC), {
        pack: bC,
        source: "string" === typeof fC ? fC : null
      })
    }

    function bC(CC) {
      return (0, QC.r)() ? Promise.resolve(null) : wC(CC, !1, (CC => {
        console.error("Error removing temporary texture pack: ", CC)
      }), QC.r)
    }

    function nC(CC) {
      if ("object" !== typeof CC || null === CC) return null;
      const zC = CC.metaData;
      return "object" !== typeof zC || null === zC || "string" !== typeof zC.id ? null : CC
    }
  },
  50739: (CC, zC, ZC) => {
    function QC(CC) {
      return null === CC.gameSource ? "player" : "customGame"
    }
    ZC.d(zC, {
      b: () => bC,
      c: () => SC,
      g: () => gC,
      i: () => QC
    });
    const wC = /^data:[\w.+/-]*;base64,[A-Za-z0-9+/]*={0,2}$/;

    function bC(CC) {
      return "" === CC || "string" === typeof CC && wC.test(CC)
    }

    function nC(CC) {
      return "object" === typeof CC && null !== CC && ("earth" === CC.type || Object.entries(CC).every((CC => {
        let [zC, ZC] = CC;
        return "type" === zC || bC(ZC)
      })))
    }
    const fC = /(?:src|image|image-set|cross-fade)\(/i,
      oC = /url\(\s*(?:"(?<doubleQuoted>[^"]*)"|'(?<singleQuoted>[^']*)'|(?<unquoted>[^"'()\s]*))\s*\)/gi,
      qC = /url\(/gi,
      FC = ["https://bloxd.invalid/", "http://bloxd.invalid/"],
      WC = new Set([...FC.map((CC => new URL(CC).origin)), "https://fonts.gstatic.com"]),
      NC = new Set(["https://i.imgur.com/MEcjBFQ.png"]);

    function MC(CC) {
      var zC, ZC;
      if (CC.includes("\\") || fC.test(CC)) return !0;
      const QC = [...CC.matchAll(oC)];
      return QC.length !== (null !== (zC = null === (ZC = CC.match(qC)) || void 0 === ZC ? void 0 : ZC.length) && void 0 !== zC ? zC : 0) || !QC.every((CC => {
        var zC, ZC, QC;
        let {
          groups: wC
        } = CC;
        return function(CC) {
          try {
            return FC.every((zC => {
              const ZC = new URL(CC, zC);
              return "data:" === ZC.protocol || WC.has(ZC.origin) || NC.has(ZC.href)
            }))
          } catch {
            return !1
          }
        }(null !== (zC = null !== (ZC = null !== (QC = null === wC || void 0 === wC ? void 0 : wC.doubleQuoted) && void 0 !== QC ? QC : null === wC || void 0 === wC ? void 0 : wC.singleQuoted) && void 0 !== ZC ? ZC : null === wC || void 0 === wC ? void 0 : wC.unquoted) && void 0 !== zC ? zC : "")
      }))
    }

    function gC(CC) {
      var zC, ZC, QC, wC, fC, oC, qC;
      const FC = [...Object.values(null !== (zC = CC.textureOverrides) && void 0 !== zC ? zC : {}), ...Object.values(null !== (ZC = CC.modelOverrides) && void 0 !== ZC ? ZC : {})],
        WC = [...Object.values(null !== (QC = null === (wC = CC.customCss) || void 0 === wC ? void 0 : wC.fontFaces) && void 0 !== QC ? QC : {}), ...Object.values(null !== (fC = null === (oC = CC.customCss) || void 0 === oC ? void 0 : oC.classStyles) && void 0 !== fC ? fC : {})].flatMap((CC => Object.values(null !== CC && void 0 !== CC ? CC : {})));
      return !FC.every(bC) || !Object.values(null !== (qC = CC.skyBoxes) && void 0 !== qC ? qC : {}).every(nC) || WC.some((CC => "string" === typeof CC && MC(CC)))
    }

    function SC(CC, zC) {
      if (null === CC || "player" === zC || !gC(CC)) return CC;
      const ZC = {
        ...CC
      };
      return CC.textureOverrides && (ZC.textureOverrides = PC(CC.textureOverrides, bC, "texture")), CC.modelOverrides && (ZC.modelOverrides = PC(CC.modelOverrides, bC, "model")), CC.skyBoxes && (ZC.skyBoxes = PC(CC.skyBoxes, nC, "sky")), CC.customCss && (ZC.customCss = function(CC) {
        const zC = CC => PC(CC, (CC => "string" === typeof CC && !MC(CC)), "CSS"),
          {
            fontFaces: ZC,
            classStyles: QC
          } = pC(CC) ? CC : {},
          wC = {};
        for (const [bC, nC] of Object.entries(pC(QC) ? QC : {})) wC[bC] = zC(nC);
        return {
          fontFaces: (Array.isArray(ZC) ? ZC : []).map(zC),
          classStyles: wC
        }
      }(CC.customCss)), ZC
    }

    function pC(CC) {
      return "object" === typeof CC && null !== CC && !Array.isArray(CC)
    }

    function PC(CC, zC, ZC) {
      const QC = Object.entries(pC(CC) ? CC : {}),
        wC = QC.filter((CC => {
          let [, ZC] = CC;
          return !zC(ZC)
        }));
      if (wC.length > 0) {
        const CC = wC.map((CC => {
          let [zC] = CC;
          return zC
        }));
        console.warn(`Ignoring a custom game texture pack's ${ZC} files that name another site: ${CC.join(", ")}`)
      }
      return Object.fromEntries(QC.filter((CC => {
        let [, ZC] = CC;
        return zC(ZC)
      })))
    }
  },
  50746: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => gC,
      f: () => RC,
      g: () => GC
    });
    var QC = ZC(970),
      wC = ZC(2063),
      bC = ZC(3229),
      nC = ZC(3242),
      fC = ZC(34214),
      oC = ZC(34210),
      qC = ZC(50739),
      FC = ZC(40820),
      WC = ZC(40798),
      NC = ZC(5021);
    const MC = {
      pack: null,
      gameSource: null
    };
    class gC {
      constructor(CC) {
        this.host = CC, this.ready = void 0, this.state = MC, this.playerPack = null, this.onGamePack = !1, this.confirmGamePack = null, this.skippedKey = null, this.ownAnnouncements = new Set, this.listeners = new Map, this.ownListeners = new Set, this.changes = 0, this.picks = 0, this.playerPicked = !1, this.ownChanges = 0, this.Sg = !1, (0, nC.o)(), this.ready = this.readStored()
      }
      readyWithin(CC) {
        return Promise.race([this.ready, new Promise((zC => {
          setTimeout(zC, CC)
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
      onPlayerPackChange(CC) {
        return this.ownListeners.add(CC), () => {
          this.ownListeners.delete(CC)
        }
      }
      isUsingCustomGameTexturePack(CC) {
        return (0, WC.f)(this.state, CC)
      }
      setGamePackConfirm(CC) {
        this.confirmGamePack = CC
      }
      subscribe(CC) {
        return this.listeners.set(CC, null), this.ready.then((() => {
          this.deliver(CC)
        })), () => {
          this.listeners.delete(CC)
        }
      }
      async setPlayerPack(CC) {
        const zC = pC(CC) ? null : CC;
        this.picks++, this.playerPicked = !0, this.ownChanges++, this.setOwn(zC), this.change({
          pack: zC,
          gameSource: null
        }, !1);
        const ZC = await this.storePlayerPack(zC);
        return ZC && this.announce(), ZC
      }
      async packForGame(CC, zC, ZC) {
        await this.readyWithin(Math.max(0, (null !== ZC && void 0 !== ZC ? ZC : performance.now() + FC.b) - performance.now()));
        const wC = ++this.picks,
          bC = (0, QC.i)(CC) ? (0, QC.m)(CC) : null;
        if (null === bC) return void this.usePlayerPack();
        let nC;
        const fC = function(CC) {
          let zC;
          const ZC = new Promise(((ZC, QC) => {
            zC = setTimeout((() => {
              QC(new Error(`no answer in ${CC} ms`))
            }), CC)
          }));
          return ZC.catch((() => {})), {
            passed: ZC,
            clear: () => {
              clearTimeout(zC)
            }
          }
        }(2e4);
        try {
          const CC = await Promise.race([zC.packKey(bC), fC.passed]);
          if (null !== CC && this.onGamePack && this.state.gameSource === CC) return;
          if (null !== CC && CC === this.skippedKey) return void(this.Sg || this.picks !== wC || this.usePlayerPack());
          nC = null === CC ? null : await Promise.race([SC(bC, CC, zC), fC.passed])
        } catch (WC) {
          const CC = !this.Sg && this.picks === wC && this.holdsOtherGamePack(bC);
          return this.host.warn(`the texture pack of ${bC} didn't load: ${CC?"the player's own shows":"the pack in play stays"}`, WC), void(CC && this.usePlayerPack())
        } finally {
          fC.clear()
        }
        if (this.Sg || this.picks !== wC) return;
        null !== nC && (0, qC.g)(nC.pack) && (this.host.warn(`the texture pack of ${bC} names files on other sites: the player's own shows`, null), nC = null);
        const oC = null === nC || await this.confirmed(nC.pack, bC) ? null : nC.key;
        this.Sg || this.picks !== wC || (null !== oC && (this.skippedKey = oC, nC = null), null === nC ? this.usePlayerPack() : (this.onGamePack = !0, this.change({
          pack: nC.pack,
          gameSource: nC.key
        }, !0)))
      }
      endGamePack() {
        this.picks++, this.usePlayerPack()
      }
      holdsOtherGamePack(CC) {
        return this.onGamePack && "" !== this.state.gameSource && !this.isUsingCustomGameTexturePack(CC)
      }
      async confirmed(CC, zC) {
        const ZC = this.confirmGamePack;
        if (null === ZC) return !0;
        try {
          return await ZC(CC, zC)
        } catch (QC) {
          return this.host.warn(`the texture pack prompt of ${zC} failed: the pack is skipped`, QC), !1
        }
      }
      async readPlayerPack() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (null !== CC && this.ownAnnouncements.delete(CC)) return;
        await this.ready;
        const zC = this.ownChanges;
        let ZC;
        try {
          ZC = await this.host.store.getItem(nC.b, !0)
        } catch (wC) {
          return void this.host.warn("the stored texture pack didn't read again: the pack in play stays", wC)
        }
        if (this.Sg || this.ownChanges !== zC) return;
        const QC = PC(ZC);
        (0, NC.b)(QC, this.playerPack) || (this.ownChanges++, this.setOwn(QC), this.onGamePack || this.change({
          pack: QC,
          gameSource: null
        }, !1))
      }
      joinedWithout() {
        this.picks++
      }
      dispose() {
        this.Sg = !0, this.listeners.clear()
      }
      async readStored() {
        const {
          store: CC,
          warn: zC
        } = this.host;
        await Promise.all([!1 === this.host.oneShot ? void 0 : (0, oC.i)(CC, !0, (CC => {
          zC("the custom game's texture pack wasn't removed from storage", CC)
        })).then((CC => {
          this.takeOneShot(CC)
        }), (CC => {
          zC("the custom game's texture pack didn't read: the player's own shows", CC)
        })), CC.getItem(nC.b, !0).then((CC => {
          this.takeStoredOwn(CC)
        }), (CC => {
          zC("the stored texture pack didn't read: the default pack shows", CC), this.takeStoredOwn(null)
        }))]), this.update()
      }
      takeOneShot(CC) {
        var zC;
        null === CC || this.Sg || this.changes > 0 || this.picks > 0 || ((0, qC.g)(CC.pack) ? this.host.warn("the custom game's texture pack names files on other sites: the player's own shows", null) : (this.onGamePack = !0, this.state = {
          pack: CC.pack,
          gameSource: null !== (zC = CC.source) && void 0 !== zC ? zC : ""
        }))
      }
      takeStoredOwn(CC) {
        if (this.playerPicked || this.Sg) return;
        if (this.ownChanges++, this.setOwn(PC(CC)), this.onGamePack) return;
        const zC = {
          pack: this.playerPack,
          gameSource: null
        };
        0 === this.changes ? this.state = zC : this.change(zC, !1)
      }
      async update() {
        const CC = this.playerPack,
          zC = null === CC || void 0 === CC ? void 0 : CC.metaData.id;
        if (!CC || !zC || !this.host.fetchLatest || zC === wC.c || zC === wC.q.CUSTOM) return;
        const ZC = wC.u[zC];
        if (void 0 === ZC || CC.metaData.version >= ZC) return;
        let QC;
        try {
          QC = PC(await this.host.fetchLatest(zC))
        } catch (bC) {
          return void this.host.warn(`texture pack ${zC} didn't update to version ${ZC}`, bC)
        }
        null === QC || this.Sg || this.playerPack !== CC || (this.ownChanges++, this.setOwn(QC), this.onGamePack || this.change({
          pack: QC,
          gameSource: null
        }, !1), await this.storePlayerPack(QC) && this.announce())
      }
      announce() {
        const CC = (0, fC.c)();
        null !== CC && this.ownAnnouncements.add(CC)
      }
      setOwn(CC) {
        this.playerPack = CC;
        for (const ZC of [...this.ownListeners]) try {
          ZC()
        } catch (zC) {
          this.host.warn("a texture pack listener threw", zC)
        }
      }
      usePlayerPack() {
        this.onGamePack && this.change({
          pack: this.playerPack,
          gameSource: null
        }, !1)
      }
      async storePlayerPack(CC) {
        try {
          return null === CC ? (await this.host.store.removeItem(nC.b), !0) : await this.host.store.setItem(nC.b, CC)
        } catch (zC) {
          return this.host.warn("the texture pack wasn't stored: it shows until the page reloads", zC), !1
        }
      }
      change(CC, zC) {
        if (!this.Sg) {
          this.changes++, this.onGamePack = zC, this.state = CC;
          for (const CC of [...this.listeners.keys()]) this.deliver(CC)
        }
      }
      deliver(CC) {
        if (!this.Sg && this.listeners.has(CC) && this.listeners.get(CC) !== this.state) {
          this.listeners.set(CC, this.state);
          try {
            CC(this.state)
          } catch (zC) {
            this.host.warn("a texture pack listener threw", zC)
          }
        }
      }
    }
    async function SC(CC, zC, ZC) {
      const QC = (0, oC.e)(await ZC.fetchPack(zC));
      if (null !== QC) return {
        pack: QC,
        key: zC
      };
      const wC = await ZC.packKey(CC);
      if (null === wC) return null;
      const bC = (0, oC.e)(await ZC.fetchPack(wC));
      if (null === bC) throw new Error(`no texture pack at ${wC}`);
      return {
        pack: bC,
        key: wC
      }
    }

    function pC(CC) {
      return null === CC || CC.metaData.id === wC.c
    }

    function PC(CC) {
      const zC = (0, oC.e)(CC);
      return pC(zC) ? null : zC
    }
    async function GC(CC) {
      let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bC.d;
      if (null === CC.pack) return null;
      const {
        packAssets: QC
      } = await Promise.all([ZC.e(203), ZC.e(44)]).then((() => ZC(61135)));
      return QC(CC, zC)
    }

    function RC(CC) {
      const zC = (0, nC.t)();
      return null === zC ? () => {} : (zC.onmessage = zC => {
        CC.readPlayerPack((0, fC.g)(zC.data))
      }, () => {
        zC.close()
      })
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);