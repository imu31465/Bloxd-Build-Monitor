export const id = 231;
export const ids = [231];
export const modules = {
  35236: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => tR,
      g: () => uR
    });
    var yR = GR(4521);

    function tR() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const RR = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const JR = new BroadcastChannel(yR.j);
        JR.postMessage({
          stored: RR
        }), JR.close()
      } catch {
        return null
      }
      return RR
    }

    function uR(RR) {
      const JR = "object" === typeof RR && null !== RR ? RR.stored : null;
      return "string" === typeof JR ? JR : null
    }
  },
  35230: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => ZR,
      h: () => tR,
      k: () => uR
    });
    var yR = GR(4521);
    async function tR(RR, JR, GR) {
      let tR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const uR = ZR(await RR.getItem(yR.g, JR));
      if (null === uR || tR()) return null;
      const qR = await RR.getItem(yR.i, JR);
      return tR() ? null : (await async function(RR) {
        await Promise.all([RR.removeItem(yR.g), RR.removeItem(yR.i)])
      }(RR).catch(GR), {
        pack: uR,
        source: "string" === typeof qR ? qR : null
      })
    }

    function uR(RR) {
      return (0, yR.s)() ? Promise.resolve(null) : tR(RR, !1, (RR => {
        console.error("Error removing temporary texture pack: ", RR)
      }), yR.s)
    }

    function ZR(RR) {
      if ("object" !== typeof RR || null === RR) return null;
      const JR = RR.metaData;
      return "object" !== typeof JR || null === JR || "string" !== typeof JR.id ? null : RR
    }
  },
  54671: (RR, JR, GR) => {
    function yR(RR) {
      return null === RR.gameSource ? "player" : "customGame"
    }
    GR.d(JR, {
      c: () => uR,
      g: () => aR,
      j: () => eR,
      m: () => yR
    });
    const tR = /^data:[\w.+/-]*;base64,[A-Za-z0-9+/]*={0,2}$/;

    function uR(RR) {
      return "" === RR || "string" === typeof RR && tR.test(RR)
    }

    function ZR(RR) {
      return "object" === typeof RR && null !== RR && ("earth" === RR.type || Object.entries(RR).every((RR => {
        let [JR, GR] = RR;
        return "type" === JR || uR(GR)
      })))
    }
    const qR = /(?:src|image|image-set|cross-fade)\(/i,
      iR = /url\(\s*(?:"(?<doubleQuoted>[^"]*)"|'(?<singleQuoted>[^']*)'|(?<unquoted>[^"'()\s]*))\s*\)/gi,
      fR = /url\(/gi,
      VR = ["https://bloxd.invalid/", "http://bloxd.invalid/"],
      KR = new Set([...VR.map((RR => new URL(RR).origin)), "https://fonts.gstatic.com"]),
      wR = new Set(["https://i.imgur.com/MEcjBFQ.png"]);

    function rR(RR) {
      var JR, GR;
      if (RR.includes("\\") || qR.test(RR)) return !0;
      const yR = [...RR.matchAll(iR)];
      return yR.length !== (null !== (JR = null === (GR = RR.match(fR)) || void 0 === GR ? void 0 : GR.length) && void 0 !== JR ? JR : 0) || !yR.every((RR => {
        var JR, GR, yR;
        let {
          groups: tR
        } = RR;
        return function(RR) {
          try {
            return VR.every((JR => {
              const GR = new URL(RR, JR);
              return "data:" === GR.protocol || KR.has(GR.origin) || wR.has(GR.href)
            }))
          } catch {
            return !1
          }
        }(null !== (JR = null !== (GR = null !== (yR = null === tR || void 0 === tR ? void 0 : tR.doubleQuoted) && void 0 !== yR ? yR : null === tR || void 0 === tR ? void 0 : tR.singleQuoted) && void 0 !== GR ? GR : null === tR || void 0 === tR ? void 0 : tR.unquoted) && void 0 !== JR ? JR : "")
      }))
    }

    function eR(RR) {
      var JR, GR, yR, tR, qR, iR, fR;
      const VR = [...Object.values(null !== (JR = RR.textureOverrides) && void 0 !== JR ? JR : {}), ...Object.values(null !== (GR = RR.modelOverrides) && void 0 !== GR ? GR : {})],
        KR = [...Object.values(null !== (yR = null === (tR = RR.customCss) || void 0 === tR ? void 0 : tR.fontFaces) && void 0 !== yR ? yR : {}), ...Object.values(null !== (qR = null === (iR = RR.customCss) || void 0 === iR ? void 0 : iR.classStyles) && void 0 !== qR ? qR : {})].flatMap((RR => Object.values(null !== RR && void 0 !== RR ? RR : {})));
      return !VR.every(uR) || !Object.values(null !== (fR = RR.skyBoxes) && void 0 !== fR ? fR : {}).every(ZR) || KR.some((RR => "string" === typeof RR && rR(RR)))
    }

    function aR(RR, JR) {
      if (null === RR || "player" === JR || !eR(RR)) return RR;
      const GR = {
        ...RR
      };
      return RR.textureOverrides && (GR.textureOverrides = nR(RR.textureOverrides, uR, "texture")), RR.modelOverrides && (GR.modelOverrides = nR(RR.modelOverrides, uR, "model")), RR.skyBoxes && (GR.skyBoxes = nR(RR.skyBoxes, ZR, "sky")), RR.customCss && (GR.customCss = function(RR) {
        const JR = RR => nR(RR, (RR => "string" === typeof RR && !rR(RR)), "CSS"),
          {
            fontFaces: GR,
            classStyles: yR
          } = LR(RR) ? RR : {},
          tR = {};
        for (const [uR, ZR] of Object.entries(LR(yR) ? yR : {})) tR[uR] = JR(ZR);
        return {
          fontFaces: (Array.isArray(GR) ? GR : []).map(JR),
          classStyles: tR
        }
      }(RR.customCss)), GR
    }

    function LR(RR) {
      return "object" === typeof RR && null !== RR && !Array.isArray(RR)
    }

    function nR(RR, JR, GR) {
      const yR = Object.entries(LR(RR) ? RR : {}),
        tR = yR.filter((RR => {
          let [, GR] = RR;
          return !JR(GR)
        }));
      if (tR.length > 0) {
        const RR = tR.map((RR => {
          let [JR] = RR;
          return JR
        }));
        console.warn(`Ignoring a custom game texture pack's ${GR} files that name another site: ${RR.join(", ")}`)
      }
      return Object.fromEntries(yR.filter((RR => {
        let [, GR] = RR;
        return JR(GR)
      })))
    }
  },
  54680: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => eR,
      d: () => WR,
      f: () => UR
    });
    var yR = GR(1127),
      tR = GR(2374),
      uR = GR(4509),
      ZR = GR(4521),
      qR = GR(35236),
      iR = GR(35230),
      fR = GR(54671),
      VR = GR(42526),
      KR = GR(42509),
      wR = GR(6103);
    const rR = {
      pack: null,
      gameSource: null
    };
    class eR {
      constructor(RR) {
        this.host = RR, this.ready = void 0, this.state = rR, this.playerPack = null, this.onGamePack = !1, this.confirmGamePack = null, this.skippedKey = null, this.ownAnnouncements = new Set, this.listeners = new Map, this.ownListeners = new Set, this.changes = 0, this.picks = 0, this.playerPicked = !1, this.ownChanges = 0, this.He = !1, (0, ZR.n)(), this.ready = this.readStored()
      }
      readyWithin(RR) {
        return Promise.race([this.ready, new Promise((JR => {
          setTimeout(JR, RR)
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
      onPlayerPackChange(RR) {
        return this.ownListeners.add(RR), () => {
          this.ownListeners.delete(RR)
        }
      }
      isUsingCustomGameTexturePack(RR) {
        return (0, KR.h)(this.state, RR)
      }
      setGamePackConfirm(RR) {
        this.confirmGamePack = RR
      }
      subscribe(RR) {
        return this.listeners.set(RR, null), this.ready.then((() => {
          this.deliver(RR)
        })), () => {
          this.listeners.delete(RR)
        }
      }
      async setPlayerPack(RR) {
        const JR = LR(RR) ? null : RR;
        this.picks++, this.playerPicked = !0, this.ownChanges++, this.setOwn(JR), this.change({
          pack: JR,
          gameSource: null
        }, !1);
        const GR = await this.storePlayerPack(JR);
        return GR && this.announce(), GR
      }
      async packForGame(RR, JR, GR) {
        await this.readyWithin(Math.max(0, (null !== GR && void 0 !== GR ? GR : performance.now() + VR.b) - performance.now()));
        const tR = ++this.picks,
          uR = (0, yR.n)(RR) ? (0, yR.s)(RR) : null;
        if (null === uR) return void this.usePlayerPack();
        let ZR;
        const qR = function(RR) {
          let JR;
          const GR = new Promise(((GR, yR) => {
            JR = setTimeout((() => {
              yR(new Error(`no answer in ${RR} ms`))
            }), RR)
          }));
          return GR.catch((() => {})), {
            passed: GR,
            clear: () => {
              clearTimeout(JR)
            }
          }
        }(2e4);
        try {
          const RR = await Promise.race([JR.packKey(uR), qR.passed]);
          if (null !== RR && this.onGamePack && this.state.gameSource === RR) return;
          if (null !== RR && RR === this.skippedKey) return void(this.He || this.picks !== tR || this.usePlayerPack());
          ZR = null === RR ? null : await Promise.race([aR(uR, RR, JR), qR.passed])
        } catch (KR) {
          const RR = !this.He && this.picks === tR && this.holdsOtherGamePack(uR);
          return this.host.warn(`the texture pack of ${uR} didn't load: ${RR?"the player's own shows":"the pack in play stays"}`, KR), void(RR && this.usePlayerPack())
        } finally {
          qR.clear()
        }
        if (this.He || this.picks !== tR) return;
        null !== ZR && (0, fR.j)(ZR.pack) && (this.host.warn(`the texture pack of ${uR} names files on other sites: the player's own shows`, null), ZR = null);
        const iR = null === ZR || await this.confirmed(ZR.pack, uR) ? null : ZR.key;
        this.He || this.picks !== tR || (null !== iR && (this.skippedKey = iR, ZR = null), null === ZR ? this.usePlayerPack() : (this.onGamePack = !0, this.change({
          pack: ZR.pack,
          gameSource: ZR.key
        }, !0)))
      }
      endGamePack() {
        this.picks++, this.usePlayerPack()
      }
      holdsOtherGamePack(RR) {
        return this.onGamePack && "" !== this.state.gameSource && !this.isUsingCustomGameTexturePack(RR)
      }
      async confirmed(RR, JR) {
        const GR = this.confirmGamePack;
        if (null === GR) return !0;
        try {
          return await GR(RR, JR)
        } catch (yR) {
          return this.host.warn(`the texture pack prompt of ${JR} failed: the pack is skipped`, yR), !1
        }
      }
      async readPlayerPack() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (null !== RR && this.ownAnnouncements.delete(RR)) return;
        await this.ready;
        const JR = this.ownChanges;
        let GR;
        try {
          GR = await this.host.store.getItem(ZR.e, !0)
        } catch (tR) {
          return void this.host.warn("the stored texture pack didn't read again: the pack in play stays", tR)
        }
        if (this.He || this.ownChanges !== JR) return;
        const yR = nR(GR);
        (0, wR.d)(yR, this.playerPack) || (this.ownChanges++, this.setOwn(yR), this.onGamePack || this.change({
          pack: yR,
          gameSource: null
        }, !1))
      }
      joinedWithout() {
        this.picks++
      }
      dispose() {
        this.He = !0, this.listeners.clear()
      }
      async readStored() {
        const {
          store: RR,
          warn: JR
        } = this.host;
        await Promise.all([!1 === this.host.oneShot ? void 0 : (0, iR.h)(RR, !0, (RR => {
          JR("the custom game's texture pack wasn't removed from storage", RR)
        })).then((RR => {
          this.takeOneShot(RR)
        }), (RR => {
          JR("the custom game's texture pack didn't read: the player's own shows", RR)
        })), RR.getItem(ZR.e, !0).then((RR => {
          this.takeStoredOwn(RR)
        }), (RR => {
          JR("the stored texture pack didn't read: the default pack shows", RR), this.takeStoredOwn(null)
        }))]), this.update()
      }
      takeOneShot(RR) {
        var JR;
        null === RR || this.He || this.changes > 0 || this.picks > 0 || ((0, fR.j)(RR.pack) ? this.host.warn("the custom game's texture pack names files on other sites: the player's own shows", null) : (this.onGamePack = !0, this.state = {
          pack: RR.pack,
          gameSource: null !== (JR = RR.source) && void 0 !== JR ? JR : ""
        }))
      }
      takeStoredOwn(RR) {
        if (this.playerPicked || this.He) return;
        if (this.ownChanges++, this.setOwn(nR(RR)), this.onGamePack) return;
        const JR = {
          pack: this.playerPack,
          gameSource: null
        };
        0 === this.changes ? this.state = JR : this.change(JR, !1)
      }
      async update() {
        const RR = this.playerPack,
          JR = null === RR || void 0 === RR ? void 0 : RR.metaData.id;
        if (!RR || !JR || !this.host.fetchLatest || JR === tR.e || JR === tR.q.CUSTOM) return;
        const GR = tR.t[JR];
        if (void 0 === GR || RR.metaData.version >= GR) return;
        let yR;
        try {
          yR = nR(await this.host.fetchLatest(JR))
        } catch (uR) {
          return void this.host.warn(`texture pack ${JR} didn't update to version ${GR}`, uR)
        }
        null === yR || this.He || this.playerPack !== RR || (this.ownChanges++, this.setOwn(yR), this.onGamePack || this.change({
          pack: yR,
          gameSource: null
        }, !1), await this.storePlayerPack(yR) && this.announce())
      }
      announce() {
        const RR = (0, qR.d)();
        null !== RR && this.ownAnnouncements.add(RR)
      }
      setOwn(RR) {
        this.playerPack = RR;
        for (const GR of [...this.ownListeners]) try {
          GR()
        } catch (JR) {
          this.host.warn("a texture pack listener threw", JR)
        }
      }
      usePlayerPack() {
        this.onGamePack && this.change({
          pack: this.playerPack,
          gameSource: null
        }, !1)
      }
      async storePlayerPack(RR) {
        try {
          return null === RR ? (await this.host.store.removeItem(ZR.e), !0) : await this.host.store.setItem(ZR.e, RR)
        } catch (JR) {
          return this.host.warn("the texture pack wasn't stored: it shows until the page reloads", JR), !1
        }
      }
      change(RR, JR) {
        if (!this.He) {
          this.changes++, this.onGamePack = JR, this.state = RR;
          for (const RR of [...this.listeners.keys()]) this.deliver(RR)
        }
      }
      deliver(RR) {
        if (!this.He && this.listeners.has(RR) && this.listeners.get(RR) !== this.state) {
          this.listeners.set(RR, this.state);
          try {
            RR(this.state)
          } catch (JR) {
            this.host.warn("a texture pack listener threw", JR)
          }
        }
      }
    }
    async function aR(RR, JR, GR) {
      const yR = (0, iR.e)(await GR.fetchPack(JR));
      if (null !== yR) return {
        pack: yR,
        key: JR
      };
      const tR = await GR.packKey(RR);
      if (null === tR) return null;
      const uR = (0, iR.e)(await GR.fetchPack(tR));
      if (null === uR) throw new Error(`no texture pack at ${tR}`);
      return {
        pack: uR,
        key: tR
      }
    }

    function LR(RR) {
      return null === RR || RR.metaData.id === tR.e
    }

    function nR(RR) {
      const JR = (0, iR.e)(RR);
      return LR(JR) ? null : JR
    }
    async function UR(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uR.b;
      if (null === RR.pack) return null;
      const {
        packAssets: yR
      } = await Promise.all([GR.e(233), GR.e(53)]).then((() => GR(64364)));
      return yR(RR, JR)
    }

    function WR(RR) {
      const JR = (0, ZR.v)();
      return null === JR ? () => {} : (JR.onmessage = JR => {
        RR.readPlayerPack((0, qR.g)(JR.data))
      }, () => {
        JR.close()
      })
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);