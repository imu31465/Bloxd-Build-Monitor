export const id = 204;
export const ids = [204];
export const modules = {
  34543: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => SG,
      g: () => LG
    });
    var wG = ZG(3230);

    function SG() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const GG = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const bG = new BroadcastChannel(wG.l);
        bG.postMessage({
          stored: GG
        }), bG.close()
      } catch {
        return null
      }
      return GG
    }

    function LG(GG) {
      const bG = "object" === typeof GG && null !== GG ? GG.stored : null;
      return "string" === typeof bG ? bG : null
    }
  },
  34539: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => yG,
      f: () => SG,
      i: () => LG
    });
    var wG = ZG(3230);
    async function SG(GG, bG, ZG) {
      let SG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const LG = yG(await GG.getItem(wG.h, bG));
      if (null === LG || SG()) return null;
      const kG = await GG.getItem(wG.i, bG);
      return SG() ? null : (await async function(GG) {
        await Promise.all([GG.removeItem(wG.h), GG.removeItem(wG.i)])
      }(GG).catch(ZG), {
        pack: LG,
        source: "string" === typeof kG ? kG : null
      })
    }

    function LG(GG) {
      return (0, wG.t)() ? Promise.resolve(null) : SG(GG, !1, (GG => {
        console.error("Error removing temporary texture pack: ", GG)
      }), wG.t)
    }

    function yG(GG) {
      if ("object" !== typeof GG || null === GG) return null;
      const bG = GG.metaData;
      return "object" !== typeof bG || null === bG || "string" !== typeof bG.id ? null : GG
    }
  },
  51440: (GG, bG, ZG) => {
    function wG(GG) {
      return null === GG.gameSource ? "player" : "customGame"
    }
    ZG.d(bG, {
      b: () => LG,
      c: () => hG,
      g: () => KG,
      j: () => wG
    });
    const SG = /^data:[\w.+/-]*;base64,[A-Za-z0-9+/]*={0,2}$/;

    function LG(GG) {
      return "" === GG || "string" === typeof GG && SG.test(GG)
    }

    function yG(GG) {
      return "object" === typeof GG && null !== GG && ("earth" === GG.type || Object.entries(GG).every((GG => {
        let [bG, ZG] = GG;
        return "type" === bG || LG(ZG)
      })))
    }
    const kG = /(?:src|image|image-set|cross-fade)\(/i,
      UG = /url\(\s*(?:"(?<doubleQuoted>[^"]*)"|'(?<singleQuoted>[^']*)'|(?<unquoted>[^"'()\s]*))\s*\)/gi,
      YG = /url\(/gi,
      VG = ["https://bloxd.invalid/", "http://bloxd.invalid/"],
      pG = new Set([...VG.map((GG => new URL(GG).origin)), "https://fonts.gstatic.com"]),
      fG = new Set(["https://i.imgur.com/MEcjBFQ.png"]);

    function QG(GG) {
      var bG, ZG;
      if (GG.includes("\\") || kG.test(GG)) return !0;
      const wG = [...GG.matchAll(UG)];
      return wG.length !== (null !== (bG = null === (ZG = GG.match(YG)) || void 0 === ZG ? void 0 : ZG.length) && void 0 !== bG ? bG : 0) || !wG.every((GG => {
        var bG, ZG, wG;
        let {
          groups: SG
        } = GG;
        return function(GG) {
          try {
            return VG.every((bG => {
              const ZG = new URL(GG, bG);
              return "data:" === ZG.protocol || pG.has(ZG.origin) || fG.has(ZG.href)
            }))
          } catch {
            return !1
          }
        }(null !== (bG = null !== (ZG = null !== (wG = null === SG || void 0 === SG ? void 0 : SG.doubleQuoted) && void 0 !== wG ? wG : null === SG || void 0 === SG ? void 0 : SG.singleQuoted) && void 0 !== ZG ? ZG : null === SG || void 0 === SG ? void 0 : SG.unquoted) && void 0 !== bG ? bG : "")
      }))
    }

    function KG(GG) {
      var bG, ZG, wG, SG, kG, UG, YG;
      const VG = [...Object.values(null !== (bG = GG.textureOverrides) && void 0 !== bG ? bG : {}), ...Object.values(null !== (ZG = GG.modelOverrides) && void 0 !== ZG ? ZG : {})],
        pG = [...Object.values(null !== (wG = null === (SG = GG.customCss) || void 0 === SG ? void 0 : SG.fontFaces) && void 0 !== wG ? wG : {}), ...Object.values(null !== (kG = null === (UG = GG.customCss) || void 0 === UG ? void 0 : UG.classStyles) && void 0 !== kG ? kG : {})].flatMap((GG => Object.values(null !== GG && void 0 !== GG ? GG : {})));
      return !VG.every(LG) || !Object.values(null !== (YG = GG.skyBoxes) && void 0 !== YG ? YG : {}).every(yG) || pG.some((GG => "string" === typeof GG && QG(GG)))
    }

    function hG(GG, bG) {
      if (null === GG || "player" === bG || !KG(GG)) return GG;
      const ZG = {
        ...GG
      };
      return GG.textureOverrides && (ZG.textureOverrides = JG(GG.textureOverrides, LG, "texture")), GG.modelOverrides && (ZG.modelOverrides = JG(GG.modelOverrides, LG, "model")), GG.skyBoxes && (ZG.skyBoxes = JG(GG.skyBoxes, yG, "sky")), GG.customCss && (ZG.customCss = function(GG) {
        const bG = GG => JG(GG, (GG => "string" === typeof GG && !QG(GG)), "CSS"),
          {
            fontFaces: ZG,
            classStyles: wG
          } = dG(GG) ? GG : {},
          SG = {};
        for (const [LG, yG] of Object.entries(dG(wG) ? wG : {})) SG[LG] = bG(yG);
        return {
          fontFaces: (Array.isArray(ZG) ? ZG : []).map(bG),
          classStyles: SG
        }
      }(GG.customCss)), ZG
    }

    function dG(GG) {
      return "object" === typeof GG && null !== GG && !Array.isArray(GG)
    }

    function JG(GG, bG, ZG) {
      const wG = Object.entries(dG(GG) ? GG : {}),
        SG = wG.filter((GG => {
          let [, ZG] = GG;
          return !bG(ZG)
        }));
      if (SG.length > 0) {
        const GG = SG.map((GG => {
          let [bG] = GG;
          return bG
        }));
        console.warn(`Ignoring a custom game texture pack's ${ZG} files that name another site: ${GG.join(", ")}`)
      }
      return Object.fromEntries(wG.filter((GG => {
        let [, ZG] = GG;
        return bG(ZG)
      })))
    }
  },
  51442: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => KG,
      e: () => zG,
      f: () => rG
    });
    var wG = ZG(982),
      SG = ZG(2138),
      LG = ZG(3216),
      yG = ZG(3230),
      kG = ZG(34543),
      UG = ZG(34539),
      YG = ZG(51440),
      VG = ZG(41390),
      pG = ZG(41365),
      fG = ZG(5074);
    const QG = {
      pack: null,
      gameSource: null
    };
    class KG {
      constructor(GG) {
        this.host = GG, this.ready = void 0, this.state = QG, this.playerPack = null, this.onGamePack = !1, this.confirmGamePack = null, this.skippedKey = null, this.ownAnnouncements = new Set, this.listeners = new Map, this.ownListeners = new Set, this.changes = 0, this.picks = 0, this.playerPicked = !1, this.ownChanges = 0, this.pK = !1, (0, yG.n)(), this.ready = this.readStored()
      }
      readyWithin(GG) {
        return Promise.race([this.ready, new Promise((bG => {
          setTimeout(bG, GG)
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
      onPlayerPackChange(GG) {
        return this.ownListeners.add(GG), () => {
          this.ownListeners.delete(GG)
        }
      }
      isUsingCustomGameTexturePack(GG) {
        return (0, pG.d)(this.state, GG)
      }
      setGamePackConfirm(GG) {
        this.confirmGamePack = GG
      }
      subscribe(GG) {
        return this.listeners.set(GG, null), this.ready.then((() => {
          this.deliver(GG)
        })), () => {
          this.listeners.delete(GG)
        }
      }
      async setPlayerPack(GG) {
        const bG = dG(GG) ? null : GG;
        this.picks++, this.playerPicked = !0, this.ownChanges++, this.setOwn(bG), this.change({
          pack: bG,
          gameSource: null
        }, !1);
        const ZG = await this.storePlayerPack(bG);
        return ZG && this.announce(), ZG
      }
      async packForGame(GG, bG, ZG) {
        await this.readyWithin(Math.max(0, (null !== ZG && void 0 !== ZG ? ZG : performance.now() + VG.e) - performance.now()));
        const SG = ++this.picks,
          LG = (0, wG.h)(GG) ? (0, wG.j)(GG) : null;
        if (null === LG) return void this.usePlayerPack();
        let yG;
        const kG = function(GG) {
          let bG;
          const ZG = new Promise(((ZG, wG) => {
            bG = setTimeout((() => {
              wG(new Error(`no answer in ${GG} ms`))
            }), GG)
          }));
          return ZG.catch((() => {})), {
            passed: ZG,
            clear: () => {
              clearTimeout(bG)
            }
          }
        }(2e4);
        try {
          const GG = await Promise.race([bG.packKey(LG), kG.passed]);
          if (null !== GG && this.onGamePack && this.state.gameSource === GG) return;
          if (null !== GG && GG === this.skippedKey) return void(this.pK || this.picks !== SG || this.usePlayerPack());
          yG = null === GG ? null : await Promise.race([hG(LG, GG, bG), kG.passed])
        } catch (pG) {
          const GG = !this.pK && this.picks === SG && this.holdsOtherGamePack(LG);
          return this.host.warn(`the texture pack of ${LG} didn't load: ${GG?"the player's own shows":"the pack in play stays"}`, pG), void(GG && this.usePlayerPack())
        } finally {
          kG.clear()
        }
        if (this.pK || this.picks !== SG) return;
        null !== yG && (0, YG.g)(yG.pack) && (this.host.warn(`the texture pack of ${LG} names files on other sites: the player's own shows`, null), yG = null);
        const UG = null === yG || await this.confirmed(yG.pack, LG) ? null : yG.key;
        this.pK || this.picks !== SG || (null !== UG && (this.skippedKey = UG, yG = null), null === yG ? this.usePlayerPack() : (this.onGamePack = !0, this.change({
          pack: yG.pack,
          gameSource: yG.key
        }, !0)))
      }
      endGamePack() {
        this.picks++, this.usePlayerPack()
      }
      holdsOtherGamePack(GG) {
        return this.onGamePack && "" !== this.state.gameSource && !this.isUsingCustomGameTexturePack(GG)
      }
      async confirmed(GG, bG) {
        const ZG = this.confirmGamePack;
        if (null === ZG) return !0;
        try {
          return await ZG(GG, bG)
        } catch (wG) {
          return this.host.warn(`the texture pack prompt of ${bG} failed: the pack is skipped`, wG), !1
        }
      }
      async readPlayerPack() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (null !== GG && this.ownAnnouncements.delete(GG)) return;
        await this.ready;
        const bG = this.ownChanges;
        let ZG;
        try {
          ZG = await this.host.store.getItem(yG.d, !0)
        } catch (SG) {
          return void this.host.warn("the stored texture pack didn't read again: the pack in play stays", SG)
        }
        if (this.pK || this.ownChanges !== bG) return;
        const wG = JG(ZG);
        (0, fG.c)(wG, this.playerPack) || (this.ownChanges++, this.setOwn(wG), this.onGamePack || this.change({
          pack: wG,
          gameSource: null
        }, !1))
      }
      joinedWithout() {
        this.picks++
      }
      dispose() {
        this.pK = !0, this.listeners.clear()
      }
      async readStored() {
        const {
          store: GG,
          warn: bG
        } = this.host;
        await Promise.all([!1 === this.host.oneShot ? void 0 : (0, UG.f)(GG, !0, (GG => {
          bG("the custom game's texture pack wasn't removed from storage", GG)
        })).then((GG => {
          this.takeOneShot(GG)
        }), (GG => {
          bG("the custom game's texture pack didn't read: the player's own shows", GG)
        })), GG.getItem(yG.d, !0).then((GG => {
          this.takeStoredOwn(GG)
        }), (GG => {
          bG("the stored texture pack didn't read: the default pack shows", GG), this.takeStoredOwn(null)
        }))]), this.update()
      }
      takeOneShot(GG) {
        var bG;
        null === GG || this.pK || this.changes > 0 || this.picks > 0 || ((0, YG.g)(GG.pack) ? this.host.warn("the custom game's texture pack names files on other sites: the player's own shows", null) : (this.onGamePack = !0, this.state = {
          pack: GG.pack,
          gameSource: null !== (bG = GG.source) && void 0 !== bG ? bG : ""
        }))
      }
      takeStoredOwn(GG) {
        if (this.playerPicked || this.pK) return;
        if (this.ownChanges++, this.setOwn(JG(GG)), this.onGamePack) return;
        const bG = {
          pack: this.playerPack,
          gameSource: null
        };
        0 === this.changes ? this.state = bG : this.change(bG, !1)
      }
      async update() {
        const GG = this.playerPack,
          bG = null === GG || void 0 === GG ? void 0 : GG.metaData.id;
        if (!GG || !bG || !this.host.fetchLatest || bG === SG.e || bG === SG.q.CUSTOM) return;
        const ZG = SG.u[bG];
        if (void 0 === ZG || GG.metaData.version >= ZG) return;
        let wG;
        try {
          wG = JG(await this.host.fetchLatest(bG))
        } catch (LG) {
          return void this.host.warn(`texture pack ${bG} didn't update to version ${ZG}`, LG)
        }
        null === wG || this.pK || this.playerPack !== GG || (this.ownChanges++, this.setOwn(wG), this.onGamePack || this.change({
          pack: wG,
          gameSource: null
        }, !1), await this.storePlayerPack(wG) && this.announce())
      }
      announce() {
        const GG = (0, kG.d)();
        null !== GG && this.ownAnnouncements.add(GG)
      }
      setOwn(GG) {
        this.playerPack = GG;
        for (const ZG of [...this.ownListeners]) try {
          ZG()
        } catch (bG) {
          this.host.warn("a texture pack listener threw", bG)
        }
      }
      usePlayerPack() {
        this.onGamePack && this.change({
          pack: this.playerPack,
          gameSource: null
        }, !1)
      }
      async storePlayerPack(GG) {
        try {
          return null === GG ? (await this.host.store.removeItem(yG.d), !0) : await this.host.store.setItem(yG.d, GG)
        } catch (bG) {
          return this.host.warn("the texture pack wasn't stored: it shows until the page reloads", bG), !1
        }
      }
      change(GG, bG) {
        if (!this.pK) {
          this.changes++, this.onGamePack = bG, this.state = GG;
          for (const GG of [...this.listeners.keys()]) this.deliver(GG)
        }
      }
      deliver(GG) {
        if (!this.pK && this.listeners.has(GG) && this.listeners.get(GG) !== this.state) {
          this.listeners.set(GG, this.state);
          try {
            GG(this.state)
          } catch (bG) {
            this.host.warn("a texture pack listener threw", bG)
          }
        }
      }
    }
    async function hG(GG, bG, ZG) {
      const wG = (0, UG.d)(await ZG.fetchPack(bG));
      if (null !== wG) return {
        pack: wG,
        key: bG
      };
      const SG = await ZG.packKey(GG);
      if (null === SG) return null;
      const LG = (0, UG.d)(await ZG.fetchPack(SG));
      if (null === LG) throw new Error(`no texture pack at ${SG}`);
      return {
        pack: LG,
        key: SG
      }
    }

    function dG(GG) {
      return null === GG || GG.metaData.id === SG.e
    }

    function JG(GG) {
      const bG = (0, UG.d)(GG);
      return dG(bG) ? null : bG
    }
    async function rG(GG) {
      let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : LG.b;
      if (null === GG.pack) return null;
      const {
        packAssets: wG
      } = await Promise.all([ZG.e(206), ZG.e(45)]).then((() => ZG(62058)));
      return wG(GG, bG)
    }

    function zG(GG) {
      const bG = (0, yG.v)();
      return null === bG ? () => {} : (bG.onmessage = bG => {
        GG.readPlayerPack((0, kG.g)(bG.data))
      }, () => {
        bG.close()
      })
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);