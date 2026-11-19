export const id = 188;
export const ids = [188];
export const modules = {
  8794: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => AY,
      e: () => IY
    });
    var FY = DY(2848);

    function AY() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const YY = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const rY = new BroadcastChannel(FY.j);
        rY.postMessage({
          stored: YY
        }), rY.close()
      } catch {
        return null
      }
      return YY
    }

    function IY(YY) {
      const rY = "object" === typeof YY && null !== YY ? YY.stored : null;
      return "string" === typeof rY ? rY : null
    }
  },
  8791: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => RY,
      h: () => AY,
      k: () => IY
    });
    var FY = DY(2848);
    async function AY(YY, rY, DY) {
      let AY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const IY = RY(await YY.getItem(FY.e, rY));
      if (null === IY || AY()) return null;
      const OY = await YY.getItem(FY.g, rY);
      return AY() ? null : (await async function(YY) {
        await Promise.all([YY.removeItem(FY.e), YY.removeItem(FY.g)])
      }(YY).catch(DY), {
        pack: IY,
        source: "string" === typeof OY ? OY : null
      })
    }

    function IY(YY) {
      return (0, FY.q)() ? Promise.resolve(null) : AY(YY, !1, (YY => {
        console.error("Error removing temporary texture pack: ", YY)
      }), FY.q)
    }

    function RY(YY) {
      if ("object" !== typeof YY || null === YY) return null;
      const rY = YY.metaData;
      return "object" !== typeof rY || null === rY || "string" !== typeof rY.id ? null : YY
    }
  },
  42383: (YY, rY, DY) => {
    function FY(YY) {
      return null === YY.gameSource ? "player" : "customGame"
    }
    DY.d(rY, {
      e: () => IY,
      g: () => QY,
      k: () => yY,
      l: () => FY
    });
    const AY = /^data:[\w.+/-]*;base64,[A-Za-z0-9+/]*={0,2}$/;

    function IY(YY) {
      return "" === YY || "string" === typeof YY && AY.test(YY)
    }

    function RY(YY) {
      return "object" === typeof YY && null !== YY && ("earth" === YY.type || Object.entries(YY).every((YY => {
        let [rY, DY] = YY;
        return "type" === rY || IY(DY)
      })))
    }
    const OY = /(?:src|image|image-set|cross-fade)\(/i,
      gY = /url\(\s*(?:"(?<doubleQuoted>[^"]*)"|'(?<singleQuoted>[^']*)'|(?<unquoted>[^"'()\s]*))\s*\)/gi,
      aY = /url\(/gi,
      vY = ["https://bloxd.invalid/", "http://bloxd.invalid/"],
      uY = new Set([...vY.map((YY => new URL(YY).origin)), "https://fonts.gstatic.com"]),
      sY = new Set(["https://i.imgur.com/MEcjBFQ.png"]);

    function iY(YY) {
      var rY, DY;
      if (YY.includes("\\") || OY.test(YY)) return !0;
      const FY = [...YY.matchAll(gY)];
      return FY.length !== (null !== (rY = null === (DY = YY.match(aY)) || void 0 === DY ? void 0 : DY.length) && void 0 !== rY ? rY : 0) || !FY.every((YY => {
        var rY, DY, FY;
        let {
          groups: AY
        } = YY;
        return function(YY) {
          try {
            return vY.every((rY => {
              const DY = new URL(YY, rY);
              return "data:" === DY.protocol || uY.has(DY.origin) || sY.has(DY.href)
            }))
          } catch {
            return !1
          }
        }(null !== (rY = null !== (DY = null !== (FY = null === AY || void 0 === AY ? void 0 : AY.doubleQuoted) && void 0 !== FY ? FY : null === AY || void 0 === AY ? void 0 : AY.singleQuoted) && void 0 !== DY ? DY : null === AY || void 0 === AY ? void 0 : AY.unquoted) && void 0 !== rY ? rY : "")
      }))
    }

    function yY(YY) {
      var rY, DY, FY, AY, OY, gY, aY;
      const vY = [...Object.values(null !== (rY = YY.textureOverrides) && void 0 !== rY ? rY : {}), ...Object.values(null !== (DY = YY.modelOverrides) && void 0 !== DY ? DY : {})],
        uY = [...Object.values(null !== (FY = null === (AY = YY.customCss) || void 0 === AY ? void 0 : AY.fontFaces) && void 0 !== FY ? FY : {}), ...Object.values(null !== (OY = null === (gY = YY.customCss) || void 0 === gY ? void 0 : gY.classStyles) && void 0 !== OY ? OY : {})].flatMap((YY => Object.values(null !== YY && void 0 !== YY ? YY : {})));
      return !vY.every(IY) || !Object.values(null !== (aY = YY.skyBoxes) && void 0 !== aY ? aY : {}).every(RY) || uY.some((YY => "string" === typeof YY && iY(YY)))
    }

    function QY(YY, rY) {
      if (null === YY || "player" === rY || !yY(YY)) return YY;
      const DY = {
        ...YY
      };
      return YY.textureOverrides && (DY.textureOverrides = WY(YY.textureOverrides, IY, "texture")), YY.modelOverrides && (DY.modelOverrides = WY(YY.modelOverrides, IY, "model")), YY.skyBoxes && (DY.skyBoxes = WY(YY.skyBoxes, RY, "sky")), YY.customCss && (DY.customCss = function(YY) {
        const rY = YY => WY(YY, (YY => "string" === typeof YY && !iY(YY)), "CSS"),
          {
            fontFaces: DY,
            classStyles: FY
          } = oY(YY) ? YY : {},
          AY = {};
        for (const [IY, RY] of Object.entries(oY(FY) ? FY : {})) AY[IY] = rY(RY);
        return {
          fontFaces: (Array.isArray(DY) ? DY : []).map(rY),
          classStyles: AY
        }
      }(YY.customCss)), DY
    }

    function oY(YY) {
      return "object" === typeof YY && null !== YY && !Array.isArray(YY)
    }

    function WY(YY, rY, DY) {
      const FY = Object.entries(oY(YY) ? YY : {}),
        AY = FY.filter((YY => {
          let [, DY] = YY;
          return !rY(DY)
        }));
      if (AY.length > 0) {
        const YY = AY.map((YY => {
          let [rY] = YY;
          return rY
        }));
        console.warn(`Ignoring a custom game texture pack's ${DY} files that name another site: ${YY.join(", ")}`)
      }
      return Object.fromEntries(FY.filter((YY => {
        let [, DY] = YY;
        return rY(DY)
      })))
    }
  },
  42386: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => yY,
      f: () => mY,
      j: () => EY
    });
    var FY = DY(1057),
      AY = DY(2755),
      IY = DY(2838),
      RY = DY(2848),
      OY = DY(8794),
      gY = DY(8791),
      aY = DY(42383),
      vY = DY(40149),
      uY = DY(40145),
      sY = DY(4623);
    const iY = {
      pack: null,
      gameSource: null
    };
    class yY {
      constructor(YY) {
        this.host = YY, this.ready = void 0, this.state = iY, this.playerPack = null, this.onGamePack = !1, this.confirmGamePack = null, this.skippedKey = null, this.ownAnnouncements = new Set, this.listeners = new Map, this.ownListeners = new Set, this.changes = 0, this.picks = 0, this.playerPicked = !1, this.ownChanges = 0, this.Ky = !1, (0, RY.n)(), this.ready = this.readStored()
      }
      readyWithin(YY) {
        return Promise.race([this.ready, new Promise((rY => {
          setTimeout(rY, YY)
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
      onPlayerPackChange(YY) {
        return this.ownListeners.add(YY), () => {
          this.ownListeners.delete(YY)
        }
      }
      isUsingCustomGameTexturePack(YY) {
        return (0, uY.f)(this.state, YY)
      }
      setGamePackConfirm(YY) {
        this.confirmGamePack = YY
      }
      subscribe(YY) {
        return this.listeners.set(YY, null), this.ready.then((() => {
          this.deliver(YY)
        })), () => {
          this.listeners.delete(YY)
        }
      }
      async setPlayerPack(YY) {
        const rY = oY(YY) ? null : YY;
        this.picks++, this.playerPicked = !0, this.ownChanges++, this.setOwn(rY), this.change({
          pack: rY,
          gameSource: null
        }, !1);
        const DY = await this.storePlayerPack(rY);
        return DY && this.announce(), DY
      }
      async packForGame(YY, rY, DY) {
        await this.readyWithin(Math.max(0, (null !== DY && void 0 !== DY ? DY : performance.now() + vY.c) - performance.now()));
        const AY = ++this.picks,
          IY = (0, FY.l)(YY) ? (0, FY.r)(YY) : null;
        if (null === IY) return void this.usePlayerPack();
        let RY;
        const OY = function(YY) {
          let rY;
          const DY = new Promise(((DY, FY) => {
            rY = setTimeout((() => {
              FY(new Error(`no answer in ${YY} ms`))
            }), YY)
          }));
          return DY.catch((() => {})), {
            passed: DY,
            clear: () => {
              clearTimeout(rY)
            }
          }
        }(2e4);
        try {
          const YY = await Promise.race([rY.packKey(IY), OY.passed]);
          if (null !== YY && this.onGamePack && this.state.gameSource === YY) return;
          if (null !== YY && YY === this.skippedKey) return void(this.Ky || this.picks !== AY || this.usePlayerPack());
          RY = null === YY ? null : await Promise.race([QY(IY, YY, rY), OY.passed])
        } catch (uY) {
          const YY = !this.Ky && this.picks === AY && this.holdsOtherGamePack(IY);
          return this.host.warn(`the texture pack of ${IY} didn't load: ${YY?"the player's own shows":"the pack in play stays"}`, uY), void(YY && this.usePlayerPack())
        } finally {
          OY.clear()
        }
        if (this.Ky || this.picks !== AY) return;
        null !== RY && (0, aY.k)(RY.pack) && (this.host.warn(`the texture pack of ${IY} names files on other sites: the player's own shows`, null), RY = null);
        const gY = null === RY || await this.confirmed(RY.pack, IY) ? null : RY.key;
        this.Ky || this.picks !== AY || (null !== gY && (this.skippedKey = gY, RY = null), null === RY ? this.usePlayerPack() : (this.onGamePack = !0, this.change({
          pack: RY.pack,
          gameSource: RY.key
        }, !0)))
      }
      endGamePack() {
        this.picks++, this.usePlayerPack()
      }
      holdsOtherGamePack(YY) {
        return this.onGamePack && "" !== this.state.gameSource && !this.isUsingCustomGameTexturePack(YY)
      }
      async confirmed(YY, rY) {
        const DY = this.confirmGamePack;
        if (null === DY) return !0;
        try {
          return await DY(YY, rY)
        } catch (FY) {
          return this.host.warn(`the texture pack prompt of ${rY} failed: the pack is skipped`, FY), !1
        }
      }
      async readPlayerPack() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (null !== YY && this.ownAnnouncements.delete(YY)) return;
        await this.ready;
        const rY = this.ownChanges;
        let DY;
        try {
          DY = await this.host.store.getItem(RY.b, !0)
        } catch (AY) {
          return void this.host.warn("the stored texture pack didn't read again: the pack in play stays", AY)
        }
        if (this.Ky || this.ownChanges !== rY) return;
        const FY = WY(DY);
        (0, sY.c)(FY, this.playerPack) || (this.ownChanges++, this.setOwn(FY), this.onGamePack || this.change({
          pack: FY,
          gameSource: null
        }, !1))
      }
      joinedWithout() {
        this.picks++
      }
      dispose() {
        this.Ky = !0, this.listeners.clear()
      }
      async readStored() {
        const {
          store: YY,
          warn: rY
        } = this.host;
        await Promise.all([!1 === this.host.oneShot ? void 0 : (0, gY.h)(YY, !0, (YY => {
          rY("the custom game's texture pack wasn't removed from storage", YY)
        })).then((YY => {
          this.takeOneShot(YY)
        }), (YY => {
          rY("the custom game's texture pack didn't read: the player's own shows", YY)
        })), YY.getItem(RY.b, !0).then((YY => {
          this.takeStoredOwn(YY)
        }), (YY => {
          rY("the stored texture pack didn't read: the default pack shows", YY), this.takeStoredOwn(null)
        }))]), this.update()
      }
      takeOneShot(YY) {
        var rY;
        null === YY || this.Ky || this.changes > 0 || this.picks > 0 || ((0, aY.k)(YY.pack) ? this.host.warn("the custom game's texture pack names files on other sites: the player's own shows", null) : (this.onGamePack = !0, this.state = {
          pack: YY.pack,
          gameSource: null !== (rY = YY.source) && void 0 !== rY ? rY : ""
        }))
      }
      takeStoredOwn(YY) {
        if (this.playerPicked || this.Ky) return;
        if (this.ownChanges++, this.setOwn(WY(YY)), this.onGamePack) return;
        const rY = {
          pack: this.playerPack,
          gameSource: null
        };
        0 === this.changes ? this.state = rY : this.change(rY, !1)
      }
      async update() {
        const YY = this.playerPack,
          rY = null === YY || void 0 === YY ? void 0 : YY.metaData.id;
        if (!YY || !rY || !this.host.fetchLatest || rY === AY.d || rY === AY.o.CUSTOM) return;
        const DY = AY.p[rY];
        if (void 0 === DY || YY.metaData.version >= DY) return;
        let FY;
        try {
          FY = WY(await this.host.fetchLatest(rY))
        } catch (IY) {
          return void this.host.warn(`texture pack ${rY} didn't update to version ${DY}`, IY)
        }
        null === FY || this.Ky || this.playerPack !== YY || (this.ownChanges++, this.setOwn(FY), this.onGamePack || this.change({
          pack: FY,
          gameSource: null
        }, !1), await this.storePlayerPack(FY) && this.announce())
      }
      announce() {
        const YY = (0, OY.d)();
        null !== YY && this.ownAnnouncements.add(YY)
      }
      setOwn(YY) {
        this.playerPack = YY;
        for (const DY of [...this.ownListeners]) try {
          DY()
        } catch (rY) {
          this.host.warn("a texture pack listener threw", rY)
        }
      }
      usePlayerPack() {
        this.onGamePack && this.change({
          pack: this.playerPack,
          gameSource: null
        }, !1)
      }
      async storePlayerPack(YY) {
        try {
          return null === YY ? (await this.host.store.removeItem(RY.b), !0) : await this.host.store.setItem(RY.b, YY)
        } catch (rY) {
          return this.host.warn("the texture pack wasn't stored: it shows until the page reloads", rY), !1
        }
      }
      change(YY, rY) {
        if (!this.Ky) {
          this.changes++, this.onGamePack = rY, this.state = YY;
          for (const YY of [...this.listeners.keys()]) this.deliver(YY)
        }
      }
      deliver(YY) {
        if (!this.Ky && this.listeners.has(YY) && this.listeners.get(YY) !== this.state) {
          this.listeners.set(YY, this.state);
          try {
            YY(this.state)
          } catch (rY) {
            this.host.warn("a texture pack listener threw", rY)
          }
        }
      }
    }
    async function QY(YY, rY, DY) {
      const FY = (0, gY.d)(await DY.fetchPack(rY));
      if (null !== FY) return {
        pack: FY,
        key: rY
      };
      const AY = await DY.packKey(YY);
      if (null === AY) return null;
      const IY = (0, gY.d)(await DY.fetchPack(AY));
      if (null === IY) throw new Error(`no texture pack at ${AY}`);
      return {
        pack: IY,
        key: AY
      }
    }

    function oY(YY) {
      return null === YY || YY.metaData.id === AY.d
    }

    function WY(YY) {
      const rY = (0, gY.d)(YY);
      return oY(rY) ? null : rY
    }
    async function EY(YY) {
      let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : IY.e;
      if (null === YY.pack) return null;
      const {
        packAssets: FY
      } = await Promise.all([DY.e(190), DY.e(44)]).then((() => DY(60537)));
      return FY(YY, rY)
    }

    function mY(YY) {
      const rY = (0, RY.r)();
      return null === rY ? () => {} : (rY.onmessage = rY => {
        YY.readPlayerPack((0, OY.e)(rY.data))
      }, () => {
        rY.close()
      })
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);