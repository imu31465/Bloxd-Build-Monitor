export const id = 225;
export const ids = [225];
export const modules = {
  35054: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => rH,
      f: () => SH
    });
    var AH = LH(3610);

    function rH() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const HH = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const BH = new BroadcastChannel(AH.f);
        BH.postMessage({
          stored: HH
        }), BH.close()
      } catch {
        return null
      }
      return HH
    }

    function SH(HH) {
      const BH = "object" === typeof HH && null !== HH ? HH.stored : null;
      return "string" === typeof BH ? BH : null
    }
  },
  35048: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => hH,
      f: () => rH,
      g: () => SH
    });
    var AH = LH(3610);
    async function rH(HH, BH, LH) {
      let rH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const SH = hH(await HH.getItem(AH.c, BH));
      if (null === SH || rH()) return null;
      const tH = await HH.getItem(AH.e, BH);
      return rH() ? null : (await async function(HH) {
        await Promise.all([HH.removeItem(AH.c), HH.removeItem(AH.e)])
      }(HH).catch(LH), {
        pack: SH,
        source: "string" === typeof tH ? tH : null
      })
    }

    function SH(HH) {
      return (0, AH.o)() ? Promise.resolve(null) : rH(HH, !1, (HH => {
        console.error("Error removing temporary texture pack: ", HH)
      }), AH.o)
    }

    function hH(HH) {
      if ("object" !== typeof HH || null === HH) return null;
      const BH = HH.metaData;
      return "object" !== typeof BH || null === BH || "string" !== typeof BH.id ? null : HH
    }
  },
  54576: (HH, BH, LH) => {
    function AH(HH) {
      return null === HH.gameSource ? "player" : "customGame"
    }
    LH.d(BH, {
      c: () => SH,
      e: () => QH,
      g: () => uH,
      j: () => AH
    });
    const rH = /^data:[\w.+/-]*;base64,[A-Za-z0-9+/]*={0,2}$/;

    function SH(HH) {
      return "" === HH || "string" === typeof HH && rH.test(HH)
    }

    function hH(HH) {
      return "object" === typeof HH && null !== HH && ("earth" === HH.type || Object.entries(HH).every((HH => {
        let [BH, LH] = HH;
        return "type" === BH || SH(LH)
      })))
    }
    const tH = /(?:src|image|image-set|cross-fade)\(/i,
      zH = /url\(\s*(?:"(?<doubleQuoted>[^"]*)"|'(?<singleQuoted>[^']*)'|(?<unquoted>[^"'()\s]*))\s*\)/gi,
      CH = /url\(/gi,
      EH = ["https://bloxd.invalid/", "http://bloxd.invalid/"],
      XH = new Set([...EH.map((HH => new URL(HH).origin)), "https://fonts.gstatic.com"]),
      GH = new Set(["https://i.imgur.com/MEcjBFQ.png"]);

    function YH(HH) {
      var BH, LH;
      if (HH.includes("\\") || tH.test(HH)) return !0;
      const AH = [...HH.matchAll(zH)];
      return AH.length !== (null !== (BH = null === (LH = HH.match(CH)) || void 0 === LH ? void 0 : LH.length) && void 0 !== BH ? BH : 0) || !AH.every((HH => {
        var BH, LH, AH;
        let {
          groups: rH
        } = HH;
        return function(HH) {
          try {
            return EH.every((BH => {
              const LH = new URL(HH, BH);
              return "data:" === LH.protocol || XH.has(LH.origin) || GH.has(LH.href)
            }))
          } catch {
            return !1
          }
        }(null !== (BH = null !== (LH = null !== (AH = null === rH || void 0 === rH ? void 0 : rH.doubleQuoted) && void 0 !== AH ? AH : null === rH || void 0 === rH ? void 0 : rH.singleQuoted) && void 0 !== LH ? LH : null === rH || void 0 === rH ? void 0 : rH.unquoted) && void 0 !== BH ? BH : "")
      }))
    }

    function uH(HH) {
      var BH, LH, AH, rH, tH, zH, CH;
      const EH = [...Object.values(null !== (BH = HH.textureOverrides) && void 0 !== BH ? BH : {}), ...Object.values(null !== (LH = HH.modelOverrides) && void 0 !== LH ? LH : {})],
        XH = [...Object.values(null !== (AH = null === (rH = HH.customCss) || void 0 === rH ? void 0 : rH.fontFaces) && void 0 !== AH ? AH : {}), ...Object.values(null !== (tH = null === (zH = HH.customCss) || void 0 === zH ? void 0 : zH.classStyles) && void 0 !== tH ? tH : {})].flatMap((HH => Object.values(null !== HH && void 0 !== HH ? HH : {})));
      return !EH.every(SH) || !Object.values(null !== (CH = HH.skyBoxes) && void 0 !== CH ? CH : {}).every(hH) || XH.some((HH => "string" === typeof HH && YH(HH)))
    }

    function QH(HH, BH) {
      if (null === HH || "player" === BH || !uH(HH)) return HH;
      const LH = {
        ...HH
      };
      return HH.textureOverrides && (LH.textureOverrides = MH(HH.textureOverrides, SH, "texture")), HH.modelOverrides && (LH.modelOverrides = MH(HH.modelOverrides, SH, "model")), HH.skyBoxes && (LH.skyBoxes = MH(HH.skyBoxes, hH, "sky")), HH.customCss && (LH.customCss = function(HH) {
        const BH = HH => MH(HH, (HH => "string" === typeof HH && !YH(HH)), "CSS"),
          {
            fontFaces: LH,
            classStyles: AH
          } = WH(HH) ? HH : {},
          rH = {};
        for (const [SH, hH] of Object.entries(WH(AH) ? AH : {})) rH[SH] = BH(hH);
        return {
          fontFaces: (Array.isArray(LH) ? LH : []).map(BH),
          classStyles: rH
        }
      }(HH.customCss)), LH
    }

    function WH(HH) {
      return "object" === typeof HH && null !== HH && !Array.isArray(HH)
    }

    function MH(HH, BH, LH) {
      const AH = Object.entries(WH(HH) ? HH : {}),
        rH = AH.filter((HH => {
          let [, LH] = HH;
          return !BH(LH)
        }));
      if (rH.length > 0) {
        const HH = rH.map((HH => {
          let [BH] = HH;
          return BH
        }));
        console.warn(`Ignoring a custom game texture pack's ${LH} files that name another site: ${HH.join(", ")}`)
      }
      return Object.fromEntries(AH.filter((HH => {
        let [, LH] = HH;
        return BH(LH)
      })))
    }
  },
  54579: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => uH,
      h: () => vH,
      l: () => xH
    });
    var AH = LH(1005),
      rH = LH(2227),
      SH = LH(3597),
      hH = LH(3610),
      tH = LH(35054),
      zH = LH(35048),
      CH = LH(54576),
      EH = LH(42307),
      XH = LH(42290),
      GH = LH(5554);
    const YH = {
      pack: null,
      gameSource: null
    };
    class uH {
      constructor(HH) {
        this.host = HH, this.ready = void 0, this.state = YH, this.playerPack = null, this.onGamePack = !1, this.confirmGamePack = null, this.skippedKey = null, this.ownAnnouncements = new Set, this.listeners = new Map, this.ownListeners = new Set, this.changes = 0, this.picks = 0, this.playerPicked = !1, this.ownChanges = 0, this.Mu = !1, (0, hH.h)(), this.ready = this.readStored()
      }
      readyWithin(HH) {
        return Promise.race([this.ready, new Promise((BH => {
          setTimeout(BH, HH)
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
      onPlayerPackChange(HH) {
        return this.ownListeners.add(HH), () => {
          this.ownListeners.delete(HH)
        }
      }
      isUsingCustomGameTexturePack(HH) {
        return (0, XH.g)(this.state, HH)
      }
      setGamePackConfirm(HH) {
        this.confirmGamePack = HH
      }
      subscribe(HH) {
        return this.listeners.set(HH, null), this.ready.then((() => {
          this.deliver(HH)
        })), () => {
          this.listeners.delete(HH)
        }
      }
      async setPlayerPack(HH) {
        const BH = WH(HH) ? null : HH;
        this.picks++, this.playerPicked = !0, this.ownChanges++, this.setOwn(BH), this.change({
          pack: BH,
          gameSource: null
        }, !1);
        const LH = await this.storePlayerPack(BH);
        return LH && this.announce(), LH
      }
      async packForGame(HH, BH, LH) {
        await this.readyWithin(Math.max(0, (null !== LH && void 0 !== LH ? LH : performance.now() + EH.c) - performance.now()));
        const rH = ++this.picks,
          SH = (0, AH.l)(HH) ? (0, AH.q)(HH) : null;
        if (null === SH) return void this.usePlayerPack();
        let hH;
        const tH = function(HH) {
          let BH;
          const LH = new Promise(((LH, AH) => {
            BH = setTimeout((() => {
              AH(new Error(`no answer in ${HH} ms`))
            }), HH)
          }));
          return LH.catch((() => {})), {
            passed: LH,
            clear: () => {
              clearTimeout(BH)
            }
          }
        }(2e4);
        try {
          const HH = await Promise.race([BH.packKey(SH), tH.passed]);
          if (null !== HH && this.onGamePack && this.state.gameSource === HH) return;
          if (null !== HH && HH === this.skippedKey) return void(this.Mu || this.picks !== rH || this.usePlayerPack());
          hH = null === HH ? null : await Promise.race([QH(SH, HH, BH), tH.passed])
        } catch (XH) {
          const HH = !this.Mu && this.picks === rH && this.holdsOtherGamePack(SH);
          return this.host.warn(`the texture pack of ${SH} didn't load: ${HH?"the player's own shows":"the pack in play stays"}`, XH), void(HH && this.usePlayerPack())
        } finally {
          tH.clear()
        }
        if (this.Mu || this.picks !== rH) return;
        null !== hH && (0, CH.g)(hH.pack) && (this.host.warn(`the texture pack of ${SH} names files on other sites: the player's own shows`, null), hH = null);
        const zH = null === hH || await this.confirmed(hH.pack, SH) ? null : hH.key;
        this.Mu || this.picks !== rH || (null !== zH && (this.skippedKey = zH, hH = null), null === hH ? this.usePlayerPack() : (this.onGamePack = !0, this.change({
          pack: hH.pack,
          gameSource: hH.key
        }, !0)))
      }
      endGamePack() {
        this.picks++, this.usePlayerPack()
      }
      holdsOtherGamePack(HH) {
        return this.onGamePack && "" !== this.state.gameSource && !this.isUsingCustomGameTexturePack(HH)
      }
      async confirmed(HH, BH) {
        const LH = this.confirmGamePack;
        if (null === LH) return !0;
        try {
          return await LH(HH, BH)
        } catch (AH) {
          return this.host.warn(`the texture pack prompt of ${BH} failed: the pack is skipped`, AH), !1
        }
      }
      async readPlayerPack() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (null !== HH && this.ownAnnouncements.delete(HH)) return;
        await this.ready;
        const BH = this.ownChanges;
        let LH;
        try {
          LH = await this.host.store.getItem(hH.b, !0)
        } catch (rH) {
          return void this.host.warn("the stored texture pack didn't read again: the pack in play stays", rH)
        }
        if (this.Mu || this.ownChanges !== BH) return;
        const AH = MH(LH);
        (0, GH.c)(AH, this.playerPack) || (this.ownChanges++, this.setOwn(AH), this.onGamePack || this.change({
          pack: AH,
          gameSource: null
        }, !1))
      }
      joinedWithout() {
        this.picks++
      }
      dispose() {
        this.Mu = !0, this.listeners.clear()
      }
      async readStored() {
        const {
          store: HH,
          warn: BH
        } = this.host;
        await Promise.all([!1 === this.host.oneShot ? void 0 : (0, zH.f)(HH, !0, (HH => {
          BH("the custom game's texture pack wasn't removed from storage", HH)
        })).then((HH => {
          this.takeOneShot(HH)
        }), (HH => {
          BH("the custom game's texture pack didn't read: the player's own shows", HH)
        })), HH.getItem(hH.b, !0).then((HH => {
          this.takeStoredOwn(HH)
        }), (HH => {
          BH("the stored texture pack didn't read: the default pack shows", HH), this.takeStoredOwn(null)
        }))]), this.update()
      }
      takeOneShot(HH) {
        var BH;
        null === HH || this.Mu || this.changes > 0 || this.picks > 0 || ((0, CH.g)(HH.pack) ? this.host.warn("the custom game's texture pack names files on other sites: the player's own shows", null) : (this.onGamePack = !0, this.state = {
          pack: HH.pack,
          gameSource: null !== (BH = HH.source) && void 0 !== BH ? BH : ""
        }))
      }
      takeStoredOwn(HH) {
        if (this.playerPicked || this.Mu) return;
        if (this.ownChanges++, this.setOwn(MH(HH)), this.onGamePack) return;
        const BH = {
          pack: this.playerPack,
          gameSource: null
        };
        0 === this.changes ? this.state = BH : this.change(BH, !1)
      }
      async update() {
        const HH = this.playerPack,
          BH = null === HH || void 0 === HH ? void 0 : HH.metaData.id;
        if (!HH || !BH || !this.host.fetchLatest || BH === rH.e || BH === rH.l.CUSTOM) return;
        const LH = rH.o[BH];
        if (void 0 === LH || HH.metaData.version >= LH) return;
        let AH;
        try {
          AH = MH(await this.host.fetchLatest(BH))
        } catch (SH) {
          return void this.host.warn(`texture pack ${BH} didn't update to version ${LH}`, SH)
        }
        null === AH || this.Mu || this.playerPack !== HH || (this.ownChanges++, this.setOwn(AH), this.onGamePack || this.change({
          pack: AH,
          gameSource: null
        }, !1), await this.storePlayerPack(AH) && this.announce())
      }
      announce() {
        const HH = (0, tH.c)();
        null !== HH && this.ownAnnouncements.add(HH)
      }
      setOwn(HH) {
        this.playerPack = HH;
        for (const LH of [...this.ownListeners]) try {
          LH()
        } catch (BH) {
          this.host.warn("a texture pack listener threw", BH)
        }
      }
      usePlayerPack() {
        this.onGamePack && this.change({
          pack: this.playerPack,
          gameSource: null
        }, !1)
      }
      async storePlayerPack(HH) {
        try {
          return null === HH ? (await this.host.store.removeItem(hH.b), !0) : await this.host.store.setItem(hH.b, HH)
        } catch (BH) {
          return this.host.warn("the texture pack wasn't stored: it shows until the page reloads", BH), !1
        }
      }
      change(HH, BH) {
        if (!this.Mu) {
          this.changes++, this.onGamePack = BH, this.state = HH;
          for (const HH of [...this.listeners.keys()]) this.deliver(HH)
        }
      }
      deliver(HH) {
        if (!this.Mu && this.listeners.has(HH) && this.listeners.get(HH) !== this.state) {
          this.listeners.set(HH, this.state);
          try {
            HH(this.state)
          } catch (BH) {
            this.host.warn("a texture pack listener threw", BH)
          }
        }
      }
    }
    async function QH(HH, BH, LH) {
      const AH = (0, zH.b)(await LH.fetchPack(BH));
      if (null !== AH) return {
        pack: AH,
        key: BH
      };
      const rH = await LH.packKey(HH);
      if (null === rH) return null;
      const SH = (0, zH.b)(await LH.fetchPack(rH));
      if (null === SH) throw new Error(`no texture pack at ${rH}`);
      return {
        pack: SH,
        key: rH
      }
    }

    function WH(HH) {
      return null === HH || HH.metaData.id === rH.e
    }

    function MH(HH) {
      const BH = (0, zH.b)(HH);
      return WH(BH) ? null : BH
    }
    async function xH(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SH.d;
      if (null === HH.pack) return null;
      const {
        packAssets: AH
      } = await Promise.all([LH.e(227), LH.e(52)]).then((() => LH(64340)));
      return AH(HH, BH)
    }

    function vH(HH) {
      const BH = (0, hH.s)();
      return null === BH ? () => {} : (BH.onmessage = BH => {
        HH.readPlayerPack((0, tH.f)(BH.data))
      }, () => {
        BH.close()
      })
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);