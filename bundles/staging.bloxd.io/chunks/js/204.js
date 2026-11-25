export const id = 204;
export const ids = [204];
export const modules = {
  34444: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => qt,
      g: () => Dt
    });
    var Ot = Vt(3314);

    function qt() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const tt = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const et = new BroadcastChannel(Ot.l);
        et.postMessage({
          stored: tt
        }), et.close()
      } catch {
        return null
      }
      return tt
    }

    function Dt(tt) {
      const et = "object" === typeof tt && null !== tt ? tt.stored : null;
      return "string" === typeof et ? et : null
    }
  },
  34436: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => mt,
      d: () => qt,
      e: () => Dt
    });
    var Ot = Vt(3314);
    async function qt(tt, et, Vt) {
      let qt = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const Dt = mt(await tt.getItem(Ot.e, et));
      if (null === Dt || qt()) return null;
      const dt = await tt.getItem(Ot.h, et);
      return qt() ? null : (await async function(tt) {
        await Promise.all([tt.removeItem(Ot.e), tt.removeItem(Ot.h)])
      }(tt).catch(Vt), {
        pack: Dt,
        source: "string" === typeof dt ? dt : null
      })
    }

    function Dt(tt) {
      return (0, Ot.q)() ? Promise.resolve(null) : qt(tt, !1, (tt => {
        console.error("Error removing temporary texture pack: ", tt)
      }), Ot.q)
    }

    function mt(tt) {
      if ("object" !== typeof tt || null === tt) return null;
      const et = tt.metaData;
      return "object" !== typeof et || null === et || "string" !== typeof et.id ? null : tt
    }
  },
  51303: (tt, et, Vt) => {
    function Ot(tt) {
      return null === tt.gameSource ? "player" : "customGame"
    }
    Vt.d(et, {
      b: () => Dt,
      f: () => wt,
      h: () => ft,
      j: () => Ot
    });
    const qt = /^data:[\w.+/-]*;base64,[A-Za-z0-9+/]*={0,2}$/;

    function Dt(tt) {
      return "" === tt || "string" === typeof tt && qt.test(tt)
    }

    function mt(tt) {
      return "object" === typeof tt && null !== tt && ("earth" === tt.type || Object.entries(tt).every((tt => {
        let [et, Vt] = tt;
        return "type" === et || Dt(Vt)
      })))
    }
    const dt = /(?:src|image|image-set|cross-fade)\(/i,
      jt = /url\(\s*(?:"(?<doubleQuoted>[^"]*)"|'(?<singleQuoted>[^']*)'|(?<unquoted>[^"'()\s]*))\s*\)/gi,
      Ht = /url\(/gi,
      Xt = ["https://bloxd.invalid/", "http://bloxd.invalid/"],
      Qt = new Set([...Xt.map((tt => new URL(tt).origin)), "https://fonts.gstatic.com"]),
      lt = new Set(["https://i.imgur.com/MEcjBFQ.png"]);

    function Et(tt) {
      var et, Vt;
      if (tt.includes("\\") || dt.test(tt)) return !0;
      const Ot = [...tt.matchAll(jt)];
      return Ot.length !== (null !== (et = null === (Vt = tt.match(Ht)) || void 0 === Vt ? void 0 : Vt.length) && void 0 !== et ? et : 0) || !Ot.every((tt => {
        var et, Vt, Ot;
        let {
          groups: qt
        } = tt;
        return function(tt) {
          try {
            return Xt.every((et => {
              const Vt = new URL(tt, et);
              return "data:" === Vt.protocol || Qt.has(Vt.origin) || lt.has(Vt.href)
            }))
          } catch {
            return !1
          }
        }(null !== (et = null !== (Vt = null !== (Ot = null === qt || void 0 === qt ? void 0 : qt.doubleQuoted) && void 0 !== Ot ? Ot : null === qt || void 0 === qt ? void 0 : qt.singleQuoted) && void 0 !== Vt ? Vt : null === qt || void 0 === qt ? void 0 : qt.unquoted) && void 0 !== et ? et : "")
      }))
    }

    function ft(tt) {
      var et, Vt, Ot, qt, dt, jt, Ht;
      const Xt = [...Object.values(null !== (et = tt.textureOverrides) && void 0 !== et ? et : {}), ...Object.values(null !== (Vt = tt.modelOverrides) && void 0 !== Vt ? Vt : {})],
        Qt = [...Object.values(null !== (Ot = null === (qt = tt.customCss) || void 0 === qt ? void 0 : qt.fontFaces) && void 0 !== Ot ? Ot : {}), ...Object.values(null !== (dt = null === (jt = tt.customCss) || void 0 === jt ? void 0 : jt.classStyles) && void 0 !== dt ? dt : {})].flatMap((tt => Object.values(null !== tt && void 0 !== tt ? tt : {})));
      return !Xt.every(Dt) || !Object.values(null !== (Ht = tt.skyBoxes) && void 0 !== Ht ? Ht : {}).every(mt) || Qt.some((tt => "string" === typeof tt && Et(tt)))
    }

    function wt(tt, et) {
      if (null === tt || "player" === et || !ft(tt)) return tt;
      const Vt = {
        ...tt
      };
      return tt.textureOverrides && (Vt.textureOverrides = Nt(tt.textureOverrides, Dt, "texture")), tt.modelOverrides && (Vt.modelOverrides = Nt(tt.modelOverrides, Dt, "model")), tt.skyBoxes && (Vt.skyBoxes = Nt(tt.skyBoxes, mt, "sky")), tt.customCss && (Vt.customCss = function(tt) {
        const et = tt => Nt(tt, (tt => "string" === typeof tt && !Et(tt)), "CSS"),
          {
            fontFaces: Vt,
            classStyles: Ot
          } = yt(tt) ? tt : {},
          qt = {};
        for (const [Dt, mt] of Object.entries(yt(Ot) ? Ot : {})) qt[Dt] = et(mt);
        return {
          fontFaces: (Array.isArray(Vt) ? Vt : []).map(et),
          classStyles: qt
        }
      }(tt.customCss)), Vt
    }

    function yt(tt) {
      return "object" === typeof tt && null !== tt && !Array.isArray(tt)
    }

    function Nt(tt, et, Vt) {
      const Ot = Object.entries(yt(tt) ? tt : {}),
        qt = Ot.filter((tt => {
          let [, Vt] = tt;
          return !et(Vt)
        }));
      if (qt.length > 0) {
        const tt = qt.map((tt => {
          let [et] = tt;
          return et
        }));
        console.warn(`Ignoring a custom game texture pack's ${Vt} files that name another site: ${tt.join(", ")}`)
      }
      return Object.fromEntries(Ot.filter((tt => {
        let [, Vt] = tt;
        return et(Vt)
      })))
    }
  },
  51307: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => ft,
      i: () => bt,
      j: () => Mt
    });
    var Ot = Vt(1103),
      qt = Vt(2219),
      Dt = Vt(3305),
      mt = Vt(3314),
      dt = Vt(34444),
      jt = Vt(34436),
      Ht = Vt(51303),
      Xt = Vt(41180),
      Qt = Vt(41159),
      lt = Vt(5243);
    const Et = {
      pack: null,
      gameSource: null
    };
    class ft {
      constructor(tt) {
        this.host = tt, this.ready = void 0, this.state = Et, this.playerPack = null, this.onGamePack = !1, this.confirmGamePack = null, this.skippedKey = null, this.ownAnnouncements = new Set, this.listeners = new Map, this.ownListeners = new Set, this.changes = 0, this.picks = 0, this.playerPicked = !1, this.ownChanges = 0, this.df = !1, (0, mt.o)(), this.ready = this.readStored()
      }
      readyWithin(tt) {
        return Promise.race([this.ready, new Promise((et => {
          setTimeout(et, tt)
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
      onPlayerPackChange(tt) {
        return this.ownListeners.add(tt), () => {
          this.ownListeners.delete(tt)
        }
      }
      isUsingCustomGameTexturePack(tt) {
        return (0, Qt.g)(this.state, tt)
      }
      setGamePackConfirm(tt) {
        this.confirmGamePack = tt
      }
      subscribe(tt) {
        return this.listeners.set(tt, null), this.ready.then((() => {
          this.deliver(tt)
        })), () => {
          this.listeners.delete(tt)
        }
      }
      async setPlayerPack(tt) {
        const et = yt(tt) ? null : tt;
        this.picks++, this.playerPicked = !0, this.ownChanges++, this.setOwn(et), this.change({
          pack: et,
          gameSource: null
        }, !1);
        const Vt = await this.storePlayerPack(et);
        return Vt && this.announce(), Vt
      }
      async packForGame(tt, et, Vt) {
        await this.readyWithin(Math.max(0, (null !== Vt && void 0 !== Vt ? Vt : performance.now() + Xt.e) - performance.now()));
        const qt = ++this.picks,
          Dt = (0, Ot.k)(tt) ? (0, Ot.p)(tt) : null;
        if (null === Dt) return void this.usePlayerPack();
        let mt;
        const dt = function(tt) {
          let et;
          const Vt = new Promise(((Vt, Ot) => {
            et = setTimeout((() => {
              Ot(new Error(`no answer in ${tt} ms`))
            }), tt)
          }));
          return Vt.catch((() => {})), {
            passed: Vt,
            clear: () => {
              clearTimeout(et)
            }
          }
        }(2e4);
        try {
          const tt = await Promise.race([et.packKey(Dt), dt.passed]);
          if (null !== tt && this.onGamePack && this.state.gameSource === tt) return;
          if (null !== tt && tt === this.skippedKey) return void(this.df || this.picks !== qt || this.usePlayerPack());
          mt = null === tt ? null : await Promise.race([wt(Dt, tt, et), dt.passed])
        } catch (Qt) {
          const tt = !this.df && this.picks === qt && this.holdsOtherGamePack(Dt);
          return this.host.warn(`the texture pack of ${Dt} didn't load: ${tt?"the player's own shows":"the pack in play stays"}`, Qt), void(tt && this.usePlayerPack())
        } finally {
          dt.clear()
        }
        if (this.df || this.picks !== qt) return;
        null !== mt && (0, Ht.h)(mt.pack) && (this.host.warn(`the texture pack of ${Dt} names files on other sites: the player's own shows`, null), mt = null);
        const jt = null === mt || await this.confirmed(mt.pack, Dt) ? null : mt.key;
        this.df || this.picks !== qt || (null !== jt && (this.skippedKey = jt, mt = null), null === mt ? this.usePlayerPack() : (this.onGamePack = !0, this.change({
          pack: mt.pack,
          gameSource: mt.key
        }, !0)))
      }
      endGamePack() {
        this.picks++, this.usePlayerPack()
      }
      holdsOtherGamePack(tt) {
        return this.onGamePack && "" !== this.state.gameSource && !this.isUsingCustomGameTexturePack(tt)
      }
      async confirmed(tt, et) {
        const Vt = this.confirmGamePack;
        if (null === Vt) return !0;
        try {
          return await Vt(tt, et)
        } catch (Ot) {
          return this.host.warn(`the texture pack prompt of ${et} failed: the pack is skipped`, Ot), !1
        }
      }
      async readPlayerPack() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (null !== tt && this.ownAnnouncements.delete(tt)) return;
        await this.ready;
        const et = this.ownChanges;
        let Vt;
        try {
          Vt = await this.host.store.getItem(mt.d, !0)
        } catch (qt) {
          return void this.host.warn("the stored texture pack didn't read again: the pack in play stays", qt)
        }
        if (this.df || this.ownChanges !== et) return;
        const Ot = Nt(Vt);
        (0, lt.e)(Ot, this.playerPack) || (this.ownChanges++, this.setOwn(Ot), this.onGamePack || this.change({
          pack: Ot,
          gameSource: null
        }, !1))
      }
      joinedWithout() {
        this.picks++
      }
      dispose() {
        this.df = !0, this.listeners.clear()
      }
      async readStored() {
        const {
          store: tt,
          warn: et
        } = this.host;
        await Promise.all([!1 === this.host.oneShot ? void 0 : (0, jt.d)(tt, !0, (tt => {
          et("the custom game's texture pack wasn't removed from storage", tt)
        })).then((tt => {
          this.takeOneShot(tt)
        }), (tt => {
          et("the custom game's texture pack didn't read: the player's own shows", tt)
        })), tt.getItem(mt.d, !0).then((tt => {
          this.takeStoredOwn(tt)
        }), (tt => {
          et("the stored texture pack didn't read: the default pack shows", tt), this.takeStoredOwn(null)
        }))]), this.update()
      }
      takeOneShot(tt) {
        var et;
        null === tt || this.df || this.changes > 0 || this.picks > 0 || ((0, Ht.h)(tt.pack) ? this.host.warn("the custom game's texture pack names files on other sites: the player's own shows", null) : (this.onGamePack = !0, this.state = {
          pack: tt.pack,
          gameSource: null !== (et = tt.source) && void 0 !== et ? et : ""
        }))
      }
      takeStoredOwn(tt) {
        if (this.playerPicked || this.df) return;
        if (this.ownChanges++, this.setOwn(Nt(tt)), this.onGamePack) return;
        const et = {
          pack: this.playerPack,
          gameSource: null
        };
        0 === this.changes ? this.state = et : this.change(et, !1)
      }
      async update() {
        const tt = this.playerPack,
          et = null === tt || void 0 === tt ? void 0 : tt.metaData.id;
        if (!tt || !et || !this.host.fetchLatest || et === qt.d || et === qt.p.CUSTOM) return;
        const Vt = qt.r[et];
        if (void 0 === Vt || tt.metaData.version >= Vt) return;
        let Ot;
        try {
          Ot = Nt(await this.host.fetchLatest(et))
        } catch (Dt) {
          return void this.host.warn(`texture pack ${et} didn't update to version ${Vt}`, Dt)
        }
        null === Ot || this.df || this.playerPack !== tt || (this.ownChanges++, this.setOwn(Ot), this.onGamePack || this.change({
          pack: Ot,
          gameSource: null
        }, !1), await this.storePlayerPack(Ot) && this.announce())
      }
      announce() {
        const tt = (0, dt.e)();
        null !== tt && this.ownAnnouncements.add(tt)
      }
      setOwn(tt) {
        this.playerPack = tt;
        for (const Vt of [...this.ownListeners]) try {
          Vt()
        } catch (et) {
          this.host.warn("a texture pack listener threw", et)
        }
      }
      usePlayerPack() {
        this.onGamePack && this.change({
          pack: this.playerPack,
          gameSource: null
        }, !1)
      }
      async storePlayerPack(tt) {
        try {
          return null === tt ? (await this.host.store.removeItem(mt.d), !0) : await this.host.store.setItem(mt.d, tt)
        } catch (et) {
          return this.host.warn("the texture pack wasn't stored: it shows until the page reloads", et), !1
        }
      }
      change(tt, et) {
        if (!this.df) {
          this.changes++, this.onGamePack = et, this.state = tt;
          for (const tt of [...this.listeners.keys()]) this.deliver(tt)
        }
      }
      deliver(tt) {
        if (!this.df && this.listeners.has(tt) && this.listeners.get(tt) !== this.state) {
          this.listeners.set(tt, this.state);
          try {
            tt(this.state)
          } catch (et) {
            this.host.warn("a texture pack listener threw", et)
          }
        }
      }
    }
    async function wt(tt, et, Vt) {
      const Ot = (0, jt.c)(await Vt.fetchPack(et));
      if (null !== Ot) return {
        pack: Ot,
        key: et
      };
      const qt = await Vt.packKey(tt);
      if (null === qt) return null;
      const Dt = (0, jt.c)(await Vt.fetchPack(qt));
      if (null === Dt) throw new Error(`no texture pack at ${qt}`);
      return {
        pack: Dt,
        key: qt
      }
    }

    function yt(tt) {
      return null === tt || tt.metaData.id === qt.d
    }

    function Nt(tt) {
      const et = (0, jt.c)(tt);
      return yt(et) ? null : et
    }
    async function Mt(tt) {
      let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Dt.b;
      if (null === tt.pack) return null;
      const {
        packAssets: Ot
      } = await Promise.all([Vt.e(206), Vt.e(45)]).then((() => Vt(61731)));
      return Ot(tt, et)
    }

    function bt(tt) {
      const et = (0, mt.r)();
      return null === et ? () => {} : (et.onmessage = et => {
        tt.readPlayerPack((0, dt.g)(et.data))
      }, () => {
        et.close()
      })
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);