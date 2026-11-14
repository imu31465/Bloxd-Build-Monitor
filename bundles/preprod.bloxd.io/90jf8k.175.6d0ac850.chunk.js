export const id = 175;
export const ids = [175];
export const modules = {
  8235: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => AF,
      f: () => uF
    });
    var CF = SF(2459);

    function AF() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const FF = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const WF = new BroadcastChannel(CF.i);
        WF.postMessage({
          stored: FF
        }), WF.close()
      } catch {
        return null
      }
      return FF
    }

    function uF(FF) {
      const WF = "object" === typeof FF && null !== FF ? FF.stored : null;
      return "string" === typeof WF ? WF : null
    }
  },
  8233: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => hF,
      f: () => AF,
      h: () => uF
    });
    var CF = SF(2459);
    async function AF(FF, WF, SF) {
      let AF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const uF = hF(await FF.getItem(CF.e, WF));
      if (null === uF || AF()) return null;
      const bW = await FF.getItem(CF.h, WF);
      return AF() ? null : (await Promise.all([FF.removeItem(CF.e), FF.removeItem(CF.h)]).catch(SF), {
        pack: uF,
        source: "string" === typeof bW ? bW : null
      })
    }

    function uF(FF) {
      return (0, CF.q)() ? Promise.resolve(null) : AF(FF, !1, (FF => {
        console.error("Error removing temporary texture pack: ", FF)
      }), CF.q)
    }

    function hF(FF) {
      if ("object" !== typeof FF || null === FF) return null;
      const WF = FF.metaData;
      return "object" !== typeof WF || null === WF || "string" !== typeof WF.id ? null : FF
    }
  },
  41183: (FF, WF, SF) => {
    function CF(FF) {
      return null === FF.gameSource ? "player" : "customGame"
    }
    SF.d(WF, {
      c: () => uF,
      e: () => rW,
      f: () => QF,
      h: () => CF
    });
    const AF = /^data:[\w.+/-]*;base64,[A-Za-z0-9+/]*={0,2}$/;

    function uF(FF) {
      return "" === FF || "string" === typeof FF && AF.test(FF)
    }

    function hF(FF) {
      return "object" === typeof FF && null !== FF && ("earth" === FF.type || Object.entries(FF).every((FF => {
        let [WF, SF] = FF;
        return "type" === WF || uF(SF)
      })))
    }
    const bW = /(?:src|image|image-set|cross-fade)\(/i,
      dF = /url\(\s*(?:"(?<doubleQuoted>[^"]*)"|'(?<singleQuoted>[^']*)'|(?<unquoted>[^"'()\s]*))\s*\)/gi,
      PF = /url\(/gi,
      RF = ["https://bloxd.invalid/", "http://bloxd.invalid/"],
      iW = new Set([...RF.map((FF => new URL(FF).origin)), "https://fonts.gstatic.com"]),
      eF = new Set(["https://i.imgur.com/MEcjBFQ.png"]);

    function EF(FF) {
      var WF, SF;
      if (FF.includes("\\") || bW.test(FF)) return !0;
      const CF = [...FF.matchAll(dF)];
      return CF.length !== (null !== (WF = null === (SF = FF.match(PF)) || void 0 === SF ? void 0 : SF.length) && void 0 !== WF ? WF : 0) || !CF.every((FF => {
        var WF, SF, CF;
        let {
          groups: AF
        } = FF;
        return function(FF) {
          try {
            return RF.every((WF => {
              const SF = new URL(FF, WF);
              return "data:" === SF.protocol || iW.has(SF.origin) || eF.has(SF.href)
            }))
          } catch {
            return !1
          }
        }(null !== (WF = null !== (SF = null !== (CF = null === AF || void 0 === AF ? void 0 : AF.doubleQuoted) && void 0 !== CF ? CF : null === AF || void 0 === AF ? void 0 : AF.singleQuoted) && void 0 !== SF ? SF : null === AF || void 0 === AF ? void 0 : AF.unquoted) && void 0 !== WF ? WF : "")
      }))
    }

    function QF(FF) {
      var WF, SF, CF, AF, bW, dF, PF;
      const RF = [...Object.values(null !== (WF = FF.textureOverrides) && void 0 !== WF ? WF : {}), ...Object.values(null !== (SF = FF.modelOverrides) && void 0 !== SF ? SF : {})],
        iW = [...Object.values(null !== (CF = null === (AF = FF.customCss) || void 0 === AF ? void 0 : AF.fontFaces) && void 0 !== CF ? CF : {}), ...Object.values(null !== (bW = null === (dF = FF.customCss) || void 0 === dF ? void 0 : dF.classStyles) && void 0 !== bW ? bW : {})].flatMap((FF => Object.values(null !== FF && void 0 !== FF ? FF : {})));
      return !RF.every(uF) || !Object.values(null !== (PF = FF.skyBoxes) && void 0 !== PF ? PF : {}).every(hF) || iW.some((FF => "string" === typeof FF && EF(FF)))
    }

    function rW(FF, WF) {
      if (null === FF || "player" === WF || !QF(FF)) return FF;
      const SF = {
        ...FF
      };
      return FF.textureOverrides && (SF.textureOverrides = tW(FF.textureOverrides, uF, "texture")), FF.modelOverrides && (SF.modelOverrides = tW(FF.modelOverrides, uF, "model")), FF.skyBoxes && (SF.skyBoxes = tW(FF.skyBoxes, hF, "sky")), FF.customCss && (SF.customCss = function(FF) {
        const WF = FF => tW(FF, (FF => "string" === typeof FF && !EF(FF)), "CSS"),
          {
            fontFaces: SF,
            classStyles: CF
          } = gW(FF) ? FF : {},
          AF = {};
        for (const [uF, hF] of Object.entries(gW(CF) ? CF : {})) AF[uF] = WF(hF);
        return {
          fontFaces: (Array.isArray(SF) ? SF : []).map(WF),
          classStyles: AF
        }
      }(FF.customCss)), SF
    }

    function gW(FF) {
      return "object" === typeof FF && null !== FF && !Array.isArray(FF)
    }

    function tW(FF, WF, SF) {
      const CF = Object.entries(gW(FF) ? FF : {}),
        AF = CF.filter((FF => {
          let [, SF] = FF;
          return !WF(SF)
        }));
      if (AF.length > 0) {
        const FF = AF.map((FF => {
          let [WF] = FF;
          return WF
        }));
        console.warn(`Ignoring a custom game texture pack's ${SF} files that name another site: ${FF.join(", ")}`)
      }
      return Object.fromEntries(CF.filter((FF => {
        let [, SF] = FF;
        return WF(SF)
      })))
    }
  },
  41192: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => EF,
      h: () => aW,
      i: () => TF
    });
    var CF = SF(874),
      AF = SF(2357),
      uF = SF(2453),
      hF = SF(2459),
      bW = SF(8235),
      dF = SF(8233),
      PF = SF(41183),
      RF = SF(38902),
      iW = SF(38895);
    const eF = {
      pack: null,
      gameSource: null
    };
    class EF {
      constructor(FF) {
        this.host = FF, this.ready = void 0, this.state = eF, this.playerPack = null, this.onGamePack = !1, this.confirmGamePack = null, this.skippedKey = null, this.ownAnnouncements = new Set, this.listeners = new Map, this.ownListeners = new Set, this.changes = 0, this.picks = 0, this.playerPicked = !1, this.ownChanges = 0, this.DC = !1, (0, hF.l)(), this.ready = this.readStored()
      }
      readyWithin(FF) {
        return Promise.race([this.ready, new Promise((WF => {
          setTimeout(WF, FF)
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
      onPlayerPackChange(FF) {
        return this.ownListeners.add(FF), () => {
          this.ownListeners.delete(FF)
        }
      }
      isUsingCustomGameTexturePack(FF) {
        return (0, iW.d)(this.state, FF)
      }
      setGamePackConfirm(FF) {
        this.confirmGamePack = FF
      }
      subscribe(FF) {
        return this.listeners.set(FF, null), this.ready.then((() => {
          this.deliver(FF)
        })), () => {
          this.listeners.delete(FF)
        }
      }
      async setPlayerPack(FF) {
        const WF = rW(FF) ? null : FF;
        this.picks++, this.playerPicked = !0, this.ownChanges++, this.setOwn(WF), this.change({
          pack: WF,
          gameSource: null
        }, !1);
        const SF = await this.storePlayerPack(WF);
        return SF && this.announce(), SF
      }
      async packForGame(FF, WF, SF) {
        await this.readyWithin(Math.max(0, (null !== SF && void 0 !== SF ? SF : performance.now() + RF.e) - performance.now()));
        const AF = ++this.picks,
          uF = (0, CF.j)(FF) ? (0, CF.o)(FF) : null;
        if (null === uF) return void this.usePlayerPack();
        let hF;
        const bW = function(FF) {
          let WF;
          const SF = new Promise(((SF, CF) => {
            WF = setTimeout((() => {
              CF(new Error(`no answer in ${FF} ms`))
            }), FF)
          }));
          return SF.catch((() => {})), {
            passed: SF,
            clear: () => {
              clearTimeout(WF)
            }
          }
        }(2e4);
        try {
          const FF = await Promise.race([WF.packKey(uF), bW.passed]);
          if (null !== FF && this.onGamePack && this.state.gameSource === FF) return;
          if (null !== FF && FF === this.skippedKey) return void(this.DC || this.picks !== AF || this.usePlayerPack());
          hF = null === FF ? null : await Promise.race([QF(uF, FF, WF), bW.passed])
        } catch (iW) {
          const FF = !this.DC && this.picks === AF && this.holdsOtherGamePack(uF);
          return this.host.warn(`the texture pack of ${uF} didn't load: ${FF?"the player's own shows":"the pack in play stays"}`, iW), void(FF && this.usePlayerPack())
        } finally {
          bW.clear()
        }
        if (this.DC || this.picks !== AF) return;
        null !== hF && (0, PF.f)(hF.pack) && (this.host.warn(`the texture pack of ${uF} names files on other sites: the player's own shows`, null), hF = null);
        const dF = null === hF || await this.confirmed(hF.pack, uF) ? null : hF.key;
        this.DC || this.picks !== AF || (null !== dF && (this.skippedKey = dF, hF = null), null === hF ? this.usePlayerPack() : (this.onGamePack = !0, this.change({
          pack: hF.pack,
          gameSource: hF.key
        }, !0)))
      }
      endGamePack() {
        this.picks++, this.usePlayerPack()
      }
      holdsOtherGamePack(FF) {
        return this.onGamePack && "" !== this.state.gameSource && !this.isUsingCustomGameTexturePack(FF)
      }
      async confirmed(FF, WF) {
        const SF = this.confirmGamePack;
        if (null === SF) return !0;
        try {
          return await SF(FF, WF)
        } catch (CF) {
          return this.host.warn(`the texture pack prompt of ${WF} failed: the pack is skipped`, CF), !1
        }
      }
      async readPlayerPack() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (null !== FF && this.ownAnnouncements.delete(FF)) return;
        await this.ready;
        const WF = this.ownChanges;
        let SF;
        try {
          SF = await this.host.store.getItem(hF.b, !0)
        } catch (bW) {
          return void this.host.warn("the stored texture pack didn't read again: the pack in play stays", bW)
        }
        if (this.DC || this.ownChanges !== WF) return;
        const CF = gW(SF);
        var AF, uF;
        (AF = CF, uF = this.playerPack, tW(AF, uF)) || (this.ownChanges++, this.setOwn(CF), this.onGamePack || this.change({
          pack: CF,
          gameSource: null
        }, !1))
      }
      joinedWithout() {
        this.picks++
      }
      dispose() {
        this.DC = !0, this.listeners.clear()
      }
      async readStored() {
        const {
          store: FF,
          warn: WF
        } = this.host;
        await Promise.all([!1 === this.host.oneShot ? void 0 : (0, dF.f)(FF, !0, (FF => {
          WF("the custom game's texture pack wasn't removed from storage", FF)
        })).then((FF => {
          this.takeOneShot(FF)
        }), (FF => {
          WF("the custom game's texture pack didn't read: the player's own shows", FF)
        })), FF.getItem(hF.b, !0).then((FF => {
          this.takeStoredOwn(FF)
        }), (FF => {
          WF("the stored texture pack didn't read: the default pack shows", FF), this.takeStoredOwn(null)
        }))]), this.update()
      }
      takeOneShot(FF) {
        var WF;
        null === FF || this.DC || this.changes > 0 || this.picks > 0 || ((0, PF.f)(FF.pack) ? this.host.warn("the custom game's texture pack names files on other sites: the player's own shows", null) : (this.onGamePack = !0, this.state = {
          pack: FF.pack,
          gameSource: null !== (WF = FF.source) && void 0 !== WF ? WF : ""
        }))
      }
      takeStoredOwn(FF) {
        if (this.playerPicked || this.DC) return;
        if (this.ownChanges++, this.setOwn(gW(FF)), this.onGamePack) return;
        const WF = {
          pack: this.playerPack,
          gameSource: null
        };
        0 === this.changes ? this.state = WF : this.change(WF, !1)
      }
      async update() {
        const FF = this.playerPack,
          WF = null === FF || void 0 === FF ? void 0 : FF.metaData.id;
        if (!FF || !WF || !this.host.fetchLatest || WF === AF.b || WF === AF.q.CUSTOM) return;
        const SF = AF.s[WF];
        if (void 0 === SF || FF.metaData.version >= SF) return;
        let CF;
        try {
          CF = gW(await this.host.fetchLatest(WF))
        } catch (uF) {
          return void this.host.warn(`texture pack ${WF} didn't update to version ${SF}`, uF)
        }
        null === CF || this.DC || this.playerPack !== FF || (this.ownChanges++, this.setOwn(CF), this.onGamePack || this.change({
          pack: CF,
          gameSource: null
        }, !1), await this.storePlayerPack(CF) && this.announce())
      }
      announce() {
        const FF = (0, bW.e)();
        null !== FF && this.ownAnnouncements.add(FF)
      }
      setOwn(FF) {
        this.playerPack = FF;
        for (const SF of [...this.ownListeners]) try {
          SF()
        } catch (WF) {
          this.host.warn("a texture pack listener threw", WF)
        }
      }
      usePlayerPack() {
        this.onGamePack && this.change({
          pack: this.playerPack,
          gameSource: null
        }, !1)
      }
      async storePlayerPack(FF) {
        try {
          return null === FF ? (await this.host.store.removeItem(hF.b), !0) : await this.host.store.setItem(hF.b, FF)
        } catch (WF) {
          return this.host.warn("the texture pack wasn't stored: it shows until the page reloads", WF), !1
        }
      }
      change(FF, WF) {
        if (!this.DC) {
          this.changes++, this.onGamePack = WF, this.state = FF;
          for (const FF of [...this.listeners.keys()]) this.deliver(FF)
        }
      }
      deliver(FF) {
        if (!this.DC && this.listeners.has(FF) && this.listeners.get(FF) !== this.state) {
          this.listeners.set(FF, this.state);
          try {
            FF(this.state)
          } catch (WF) {
            this.host.warn("a texture pack listener threw", WF)
          }
        }
      }
    }
    async function QF(FF, WF, SF) {
      const CF = (0, dF.b)(await SF.fetchPack(WF));
      if (null !== CF) return {
        pack: CF,
        key: WF
      };
      const AF = await SF.packKey(FF);
      if (null === AF) return null;
      const uF = (0, dF.b)(await SF.fetchPack(AF));
      if (null === uF) throw new Error(`no texture pack at ${AF}`);
      return {
        pack: uF,
        key: AF
      }
    }

    function rW(FF) {
      return null === FF || FF.metaData.id === AF.b
    }

    function gW(FF) {
      const WF = (0, dF.b)(FF);
      return rW(WF) ? null : WF
    }

    function tW(FF, WF) {
      if (FF === WF) return !0;
      if ("object" !== typeof FF || "object" !== typeof WF || null === FF || null === WF || Array.isArray(FF) !== Array.isArray(WF)) return !1;
      const SF = FF,
        CF = WF,
        AF = Object.keys(SF);
      return AF.length === Object.keys(CF).length && AF.every((FF => Object.prototype.hasOwnProperty.call(CF, FF) && tW(SF[FF], CF[FF])))
    }
    async function TF(FF) {
      let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uF.b;
      if (null === FF.pack) return null;
      const {
        packAssets: CF
      } = await Promise.all([SF.e(59), SF.e(178), SF.e(81), SF.e(181), SF.e(38)]).then((() => SF(59230)));
      return CF(FF, WF)
    }

    function aW(FF) {
      const WF = (0, hF.t)();
      return null === WF ? () => {} : (WF.onmessage = WF => {
        FF.readPlayerPack((0, bW.f)(WF.data))
      }, () => {
        WF.close()
      })
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);