export const id = 232;
export const ids = [232];
export const modules = {
  35559: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Wr,
      c: () => ar
    });
    var Zr = Qr(4454);

    function Wr() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const rr = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const Sr = new BroadcastChannel(Zr.j);
        Sr.postMessage({
          stored: rr
        }), Sr.close()
      } catch {
        return null
      }
      return rr
    }

    function ar(rr) {
      const Sr = "object" === typeof rr && null !== rr ? rr.stored : null;
      return "string" === typeof Sr ? Sr : null
    }
  },
  35551: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => jr,
      e: () => Wr,
      h: () => ar
    });
    var Zr = Qr(4454);
    async function Wr(rr, Sr, Qr) {
      let Wr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const ar = jr(await rr.getItem(Zr.e, Sr));
      if (null === ar || Wr()) return null;
      const Ir = await rr.getItem(Zr.f, Sr);
      return Wr() ? null : (await async function(rr) {
        await Promise.all([rr.removeItem(Zr.e), rr.removeItem(Zr.f)])
      }(rr).catch(Qr), {
        pack: ar,
        source: "string" === typeof Ir ? Ir : null
      })
    }

    function ar(rr) {
      return (0, Zr.p)() ? Promise.resolve(null) : Wr(rr, !1, (rr => {
        console.error("Error removing temporary texture pack: ", rr)
      }), Zr.p)
    }

    function jr(rr) {
      if ("object" !== typeof rr || null === rr) return null;
      const Sr = rr.metaData;
      return "object" !== typeof Sr || null === Sr || "string" !== typeof Sr.id ? null : rr
    }
  },
  55173: (rr, Sr, Qr) => {
    function Zr(rr) {
      return null === rr.gameSource ? "player" : "customGame"
    }
    Qr.d(Sr, {
      b: () => ar,
      f: () => tr,
      i: () => Ur,
      j: () => Zr
    });
    const Wr = /^data:[\w.+/-]*;base64,[A-Za-z0-9+/]*={0,2}$/;

    function ar(rr) {
      return "" === rr || "string" === typeof rr && Wr.test(rr)
    }

    function jr(rr) {
      return "object" === typeof rr && null !== rr && ("earth" === rr.type || Object.entries(rr).every((rr => {
        let [Sr, Qr] = rr;
        return "type" === Sr || ar(Qr)
      })))
    }
    const Ir = /(?:src|image|image-set|cross-fade)\(/i,
      fr = /url\(\s*(?:"(?<doubleQuoted>[^"]*)"|'(?<singleQuoted>[^']*)'|(?<unquoted>[^"'()\s]*))\s*\)/gi,
      Er = /url\(/gi,
      pr = ["https://bloxd.invalid/", "http://bloxd.invalid/"],
      xr = new Set([...pr.map((rr => new URL(rr).origin)), "https://fonts.gstatic.com"]),
      mr = new Set(["https://i.imgur.com/MEcjBFQ.png"]);

    function Nr(rr) {
      var Sr, Qr;
      if (rr.includes("\\") || Ir.test(rr)) return !0;
      const Zr = [...rr.matchAll(fr)];
      return Zr.length !== (null !== (Sr = null === (Qr = rr.match(Er)) || void 0 === Qr ? void 0 : Qr.length) && void 0 !== Sr ? Sr : 0) || !Zr.every((rr => {
        var Sr, Qr, Zr;
        let {
          groups: Wr
        } = rr;
        return function(rr) {
          try {
            return pr.every((Sr => {
              const Qr = new URL(rr, Sr);
              return "data:" === Qr.protocol || xr.has(Qr.origin) || mr.has(Qr.href)
            }))
          } catch {
            return !1
          }
        }(null !== (Sr = null !== (Qr = null !== (Zr = null === Wr || void 0 === Wr ? void 0 : Wr.doubleQuoted) && void 0 !== Zr ? Zr : null === Wr || void 0 === Wr ? void 0 : Wr.singleQuoted) && void 0 !== Qr ? Qr : null === Wr || void 0 === Wr ? void 0 : Wr.unquoted) && void 0 !== Sr ? Sr : "")
      }))
    }

    function Ur(rr) {
      var Sr, Qr, Zr, Wr, Ir, fr, Er;
      const pr = [...Object.values(null !== (Sr = rr.textureOverrides) && void 0 !== Sr ? Sr : {}), ...Object.values(null !== (Qr = rr.modelOverrides) && void 0 !== Qr ? Qr : {})],
        xr = [...Object.values(null !== (Zr = null === (Wr = rr.customCss) || void 0 === Wr ? void 0 : Wr.fontFaces) && void 0 !== Zr ? Zr : {}), ...Object.values(null !== (Ir = null === (fr = rr.customCss) || void 0 === fr ? void 0 : fr.classStyles) && void 0 !== Ir ? Ir : {})].flatMap((rr => Object.values(null !== rr && void 0 !== rr ? rr : {})));
      return !pr.every(ar) || !Object.values(null !== (Er = rr.skyBoxes) && void 0 !== Er ? Er : {}).every(jr) || xr.some((rr => "string" === typeof rr && Nr(rr)))
    }

    function tr(rr, Sr) {
      if (null === rr || "player" === Sr || !Ur(rr)) return rr;
      const Qr = {
        ...rr
      };
      return rr.textureOverrides && (Qr.textureOverrides = zr(rr.textureOverrides, ar, "texture")), rr.modelOverrides && (Qr.modelOverrides = zr(rr.modelOverrides, ar, "model")), rr.skyBoxes && (Qr.skyBoxes = zr(rr.skyBoxes, jr, "sky")), rr.customCss && (Qr.customCss = function(rr) {
        const Sr = rr => zr(rr, (rr => "string" === typeof rr && !Nr(rr)), "CSS"),
          {
            fontFaces: Qr,
            classStyles: Zr
          } = hr(rr) ? rr : {},
          Wr = {};
        for (const [ar, jr] of Object.entries(hr(Zr) ? Zr : {})) Wr[ar] = Sr(jr);
        return {
          fontFaces: (Array.isArray(Qr) ? Qr : []).map(Sr),
          classStyles: Wr
        }
      }(rr.customCss)), Qr
    }

    function hr(rr) {
      return "object" === typeof rr && null !== rr && !Array.isArray(rr)
    }

    function zr(rr, Sr, Qr) {
      const Zr = Object.entries(hr(rr) ? rr : {}),
        Wr = Zr.filter((rr => {
          let [, Qr] = rr;
          return !Sr(Qr)
        }));
      if (Wr.length > 0) {
        const rr = Wr.map((rr => {
          let [Sr] = rr;
          return Sr
        }));
        console.warn(`Ignoring a custom game texture pack's ${Qr} files that name another site: ${rr.join(", ")}`)
      }
      return Object.fromEntries(Zr.filter((rr => {
        let [, Qr] = rr;
        return Sr(Qr)
      })))
    }
  },
  55176: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Ur,
      g: () => nr,
      i: () => Yr
    });
    var Zr = Qr(1127),
      Wr = Qr(2325),
      ar = Qr(4448),
      jr = Qr(4454),
      Ir = Qr(35559),
      fr = Qr(35551),
      Er = Qr(55173),
      pr = Qr(42853),
      xr = Qr(42831),
      mr = Qr(6017);
    const Nr = {
      pack: null,
      gameSource: null
    };
    class Ur {
      constructor(rr) {
        this.host = rr, this.ready = void 0, this.state = Nr, this.playerPack = null, this.onGamePack = !1, this.confirmGamePack = null, this.skippedKey = null, this.ownAnnouncements = new Set, this.listeners = new Map, this.ownListeners = new Set, this.changes = 0, this.picks = 0, this.playerPicked = !1, this.ownChanges = 0, this.vU = !1, (0, jr.l)(), this.ready = this.readStored()
      }
      readyWithin(rr) {
        return Promise.race([this.ready, new Promise((Sr => {
          setTimeout(Sr, rr)
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
      onPlayerPackChange(rr) {
        return this.ownListeners.add(rr), () => {
          this.ownListeners.delete(rr)
        }
      }
      isUsingCustomGameTexturePack(rr) {
        return (0, xr.g)(this.state, rr)
      }
      setGamePackConfirm(rr) {
        this.confirmGamePack = rr
      }
      subscribe(rr) {
        return this.listeners.set(rr, null), this.ready.then((() => {
          this.deliver(rr)
        })), () => {
          this.listeners.delete(rr)
        }
      }
      async setPlayerPack(rr) {
        const Sr = hr(rr) ? null : rr;
        this.picks++, this.playerPicked = !0, this.ownChanges++, this.setOwn(Sr), this.change({
          pack: Sr,
          gameSource: null
        }, !1);
        const Qr = await this.storePlayerPack(Sr);
        return Qr && this.announce(), Qr
      }
      async packForGame(rr, Sr, Qr) {
        await this.readyWithin(Math.max(0, (null !== Qr && void 0 !== Qr ? Qr : performance.now() + pr.b) - performance.now()));
        const Wr = ++this.picks,
          ar = (0, Zr.l)(rr) ? (0, Zr.q)(rr) : null;
        if (null === ar) return void this.usePlayerPack();
        let jr;
        const Ir = function(rr) {
          let Sr;
          const Qr = new Promise(((Qr, Zr) => {
            Sr = setTimeout((() => {
              Zr(new Error(`no answer in ${rr} ms`))
            }), rr)
          }));
          return Qr.catch((() => {})), {
            passed: Qr,
            clear: () => {
              clearTimeout(Sr)
            }
          }
        }(2e4);
        try {
          const rr = await Promise.race([Sr.packKey(ar), Ir.passed]);
          if (null !== rr && this.onGamePack && this.state.gameSource === rr) return;
          if (null !== rr && rr === this.skippedKey) return void(this.vU || this.picks !== Wr || this.usePlayerPack());
          jr = null === rr ? null : await Promise.race([tr(ar, rr, Sr), Ir.passed])
        } catch (xr) {
          const rr = !this.vU && this.picks === Wr && this.holdsOtherGamePack(ar);
          return this.host.warn(`the texture pack of ${ar} didn't load: ${rr?"the player's own shows":"the pack in play stays"}`, xr), void(rr && this.usePlayerPack())
        } finally {
          Ir.clear()
        }
        if (this.vU || this.picks !== Wr) return;
        null !== jr && (0, Er.i)(jr.pack) && (this.host.warn(`the texture pack of ${ar} names files on other sites: the player's own shows`, null), jr = null);
        const fr = null === jr || await this.confirmed(jr.pack, ar) ? null : jr.key;
        this.vU || this.picks !== Wr || (null !== fr && (this.skippedKey = fr, jr = null), null === jr ? this.usePlayerPack() : (this.onGamePack = !0, this.change({
          pack: jr.pack,
          gameSource: jr.key
        }, !0)))
      }
      endGamePack() {
        this.picks++, this.usePlayerPack()
      }
      holdsOtherGamePack(rr) {
        return this.onGamePack && "" !== this.state.gameSource && !this.isUsingCustomGameTexturePack(rr)
      }
      async confirmed(rr, Sr) {
        const Qr = this.confirmGamePack;
        if (null === Qr) return !0;
        try {
          return await Qr(rr, Sr)
        } catch (Zr) {
          return this.host.warn(`the texture pack prompt of ${Sr} failed: the pack is skipped`, Zr), !1
        }
      }
      async readPlayerPack() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (null !== rr && this.ownAnnouncements.delete(rr)) return;
        await this.ready;
        const Sr = this.ownChanges;
        let Qr;
        try {
          Qr = await this.host.store.getItem(jr.d, !0)
        } catch (Wr) {
          return void this.host.warn("the stored texture pack didn't read again: the pack in play stays", Wr)
        }
        if (this.vU || this.ownChanges !== Sr) return;
        const Zr = zr(Qr);
        (0, mr.b)(Zr, this.playerPack) || (this.ownChanges++, this.setOwn(Zr), this.onGamePack || this.change({
          pack: Zr,
          gameSource: null
        }, !1))
      }
      joinedWithout() {
        this.picks++
      }
      dispose() {
        this.vU = !0, this.listeners.clear()
      }
      async readStored() {
        const {
          store: rr,
          warn: Sr
        } = this.host;
        await Promise.all([!1 === this.host.oneShot ? void 0 : (0, fr.e)(rr, !0, (rr => {
          Sr("the custom game's texture pack wasn't removed from storage", rr)
        })).then((rr => {
          this.takeOneShot(rr)
        }), (rr => {
          Sr("the custom game's texture pack didn't read: the player's own shows", rr)
        })), rr.getItem(jr.d, !0).then((rr => {
          this.takeStoredOwn(rr)
        }), (rr => {
          Sr("the stored texture pack didn't read: the default pack shows", rr), this.takeStoredOwn(null)
        }))]), this.update()
      }
      takeOneShot(rr) {
        var Sr;
        null === rr || this.vU || this.changes > 0 || this.picks > 0 || ((0, Er.i)(rr.pack) ? this.host.warn("the custom game's texture pack names files on other sites: the player's own shows", null) : (this.onGamePack = !0, this.state = {
          pack: rr.pack,
          gameSource: null !== (Sr = rr.source) && void 0 !== Sr ? Sr : ""
        }))
      }
      takeStoredOwn(rr) {
        if (this.playerPicked || this.vU) return;
        if (this.ownChanges++, this.setOwn(zr(rr)), this.onGamePack) return;
        const Sr = {
          pack: this.playerPack,
          gameSource: null
        };
        0 === this.changes ? this.state = Sr : this.change(Sr, !1)
      }
      async update() {
        const rr = this.playerPack,
          Sr = null === rr || void 0 === rr ? void 0 : rr.metaData.id;
        if (!rr || !Sr || !this.host.fetchLatest || Sr === Wr.e || Sr === Wr.o.CUSTOM) return;
        const Qr = Wr.s[Sr];
        if (void 0 === Qr || rr.metaData.version >= Qr) return;
        let Zr;
        try {
          Zr = zr(await this.host.fetchLatest(Sr))
        } catch (ar) {
          return void this.host.warn(`texture pack ${Sr} didn't update to version ${Qr}`, ar)
        }
        null === Zr || this.vU || this.playerPack !== rr || (this.ownChanges++, this.setOwn(Zr), this.onGamePack || this.change({
          pack: Zr,
          gameSource: null
        }, !1), await this.storePlayerPack(Zr) && this.announce())
      }
      announce() {
        const rr = (0, Ir.b)();
        null !== rr && this.ownAnnouncements.add(rr)
      }
      setOwn(rr) {
        this.playerPack = rr;
        for (const Qr of [...this.ownListeners]) try {
          Qr()
        } catch (Sr) {
          this.host.warn("a texture pack listener threw", Sr)
        }
      }
      usePlayerPack() {
        this.onGamePack && this.change({
          pack: this.playerPack,
          gameSource: null
        }, !1)
      }
      async storePlayerPack(rr) {
        try {
          return null === rr ? (await this.host.store.removeItem(jr.d), !0) : await this.host.store.setItem(jr.d, rr)
        } catch (Sr) {
          return this.host.warn("the texture pack wasn't stored: it shows until the page reloads", Sr), !1
        }
      }
      change(rr, Sr) {
        if (!this.vU) {
          this.changes++, this.onGamePack = Sr, this.state = rr;
          for (const rr of [...this.listeners.keys()]) this.deliver(rr)
        }
      }
      deliver(rr) {
        if (!this.vU && this.listeners.has(rr) && this.listeners.get(rr) !== this.state) {
          this.listeners.set(rr, this.state);
          try {
            rr(this.state)
          } catch (Sr) {
            this.host.warn("a texture pack listener threw", Sr)
          }
        }
      }
    }
    async function tr(rr, Sr, Qr) {
      const Zr = (0, fr.c)(await Qr.fetchPack(Sr));
      if (null !== Zr) return {
        pack: Zr,
        key: Sr
      };
      const Wr = await Qr.packKey(rr);
      if (null === Wr) return null;
      const ar = (0, fr.c)(await Qr.fetchPack(Wr));
      if (null === ar) throw new Error(`no texture pack at ${Wr}`);
      return {
        pack: ar,
        key: Wr
      }
    }

    function hr(rr) {
      return null === rr || rr.metaData.id === Wr.e
    }

    function zr(rr) {
      const Sr = (0, fr.c)(rr);
      return hr(Sr) ? null : Sr
    }
    async function Yr(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ar.c;
      if (null === rr.pack) return null;
      const {
        packAssets: Zr
      } = await Promise.all([Qr.e(234), Qr.e(53)]).then((() => Qr(64836)));
      return Zr(rr, Sr)
    }

    function nr(rr) {
      const Sr = (0, jr.r)();
      return null === Sr ? () => {} : (Sr.onmessage = Sr => {
        rr.readPlayerPack((0, Ir.c)(Sr.data))
      }, () => {
        Sr.close()
      })
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);