export const id = 194;
export const ids = [194];
export const modules = {
  9299: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Nd,
      g: () => Wd
    });
    var pd = kd(3112);

    function Nd() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const dd = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const Jd = new BroadcastChannel(pd.h);
        Jd.postMessage({
          stored: dd
        }), Jd.close()
      } catch {
        return null
      }
      return dd
    }

    function Wd(dd) {
      const Jd = "object" === typeof dd && null !== dd ? dd.stored : null;
      return "string" === typeof Jd ? Jd : null
    }
  },
  9291: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Pd,
      f: () => Nd,
      g: () => Wd
    });
    var pd = kd(3112);
    async function Nd(dd, Jd, kd) {
      let Nd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const Wd = Pd(await dd.getItem(pd.e, Jd));
      if (null === Wd || Nd()) return null;
      const Zd = await dd.getItem(pd.g, Jd);
      return Nd() ? null : (await async function(dd) {
        await Promise.all([dd.removeItem(pd.e), dd.removeItem(pd.g)])
      }(dd).catch(kd), {
        pack: Wd,
        source: "string" === typeof Zd ? Zd : null
      })
    }

    function Wd(dd) {
      return (0, pd.m)() ? Promise.resolve(null) : Nd(dd, !1, (dd => {
        console.error("Error removing temporary texture pack: ", dd)
      }), pd.m)
    }

    function Pd(dd) {
      if ("object" !== typeof dd || null === dd) return null;
      const Jd = dd.metaData;
      return "object" !== typeof Jd || null === Jd || "string" !== typeof Jd.id ? null : dd
    }
  },
  43247: (dd, Jd, kd) => {
    function pd(dd) {
      return null === dd.gameSource ? "player" : "customGame"
    }
    kd.d(Jd, {
      c: () => Wd,
      d: () => Od,
      f: () => Ld,
      h: () => pd
    });
    const Nd = /^data:[\w.+/-]*;base64,[A-Za-z0-9+/]*={0,2}$/;

    function Wd(dd) {
      return "" === dd || "string" === typeof dd && Nd.test(dd)
    }

    function Pd(dd) {
      return "object" === typeof dd && null !== dd && ("earth" === dd.type || Object.entries(dd).every((dd => {
        let [Jd, kd] = dd;
        return "type" === Jd || Wd(kd)
      })))
    }
    const Zd = /(?:src|image|image-set|cross-fade)\(/i,
      gd = /url\(\s*(?:"(?<doubleQuoted>[^"]*)"|'(?<singleQuoted>[^']*)'|(?<unquoted>[^"'()\s]*))\s*\)/gi,
      Cd = /url\(/gi,
      Kd = ["https://bloxd.invalid/", "http://bloxd.invalid/"],
      od = new Set([...Kd.map((dd => new URL(dd).origin)), "https://fonts.gstatic.com"]),
      ld = new Set(["https://i.imgur.com/MEcjBFQ.png"]);

    function Qd(dd) {
      var Jd, kd;
      if (dd.includes("\\") || Zd.test(dd)) return !0;
      const pd = [...dd.matchAll(gd)];
      return pd.length !== (null !== (Jd = null === (kd = dd.match(Cd)) || void 0 === kd ? void 0 : kd.length) && void 0 !== Jd ? Jd : 0) || !pd.every((dd => {
        var Jd, kd, pd;
        let {
          groups: Nd
        } = dd;
        return function(dd) {
          try {
            return Kd.every((Jd => {
              const kd = new URL(dd, Jd);
              return "data:" === kd.protocol || od.has(kd.origin) || ld.has(kd.href)
            }))
          } catch {
            return !1
          }
        }(null !== (Jd = null !== (kd = null !== (pd = null === Nd || void 0 === Nd ? void 0 : Nd.doubleQuoted) && void 0 !== pd ? pd : null === Nd || void 0 === Nd ? void 0 : Nd.singleQuoted) && void 0 !== kd ? kd : null === Nd || void 0 === Nd ? void 0 : Nd.unquoted) && void 0 !== Jd ? Jd : "")
      }))
    }

    function Ld(dd) {
      var Jd, kd, pd, Nd, Zd, gd, Cd;
      const Kd = [...Object.values(null !== (Jd = dd.textureOverrides) && void 0 !== Jd ? Jd : {}), ...Object.values(null !== (kd = dd.modelOverrides) && void 0 !== kd ? kd : {})],
        od = [...Object.values(null !== (pd = null === (Nd = dd.customCss) || void 0 === Nd ? void 0 : Nd.fontFaces) && void 0 !== pd ? pd : {}), ...Object.values(null !== (Zd = null === (gd = dd.customCss) || void 0 === gd ? void 0 : gd.classStyles) && void 0 !== Zd ? Zd : {})].flatMap((dd => Object.values(null !== dd && void 0 !== dd ? dd : {})));
      return !Kd.every(Wd) || !Object.values(null !== (Cd = dd.skyBoxes) && void 0 !== Cd ? Cd : {}).every(Pd) || od.some((dd => "string" === typeof dd && Qd(dd)))
    }

    function Od(dd, Jd) {
      if (null === dd || "player" === Jd || !Ld(dd)) return dd;
      const kd = {
        ...dd
      };
      return dd.textureOverrides && (kd.textureOverrides = Rd(dd.textureOverrides, Wd, "texture")), dd.modelOverrides && (kd.modelOverrides = Rd(dd.modelOverrides, Wd, "model")), dd.skyBoxes && (kd.skyBoxes = Rd(dd.skyBoxes, Pd, "sky")), dd.customCss && (kd.customCss = function(dd) {
        const Jd = dd => Rd(dd, (dd => "string" === typeof dd && !Qd(dd)), "CSS"),
          {
            fontFaces: kd,
            classStyles: pd
          } = ed(dd) ? dd : {},
          Nd = {};
        for (const [Wd, Pd] of Object.entries(ed(pd) ? pd : {})) Nd[Wd] = Jd(Pd);
        return {
          fontFaces: (Array.isArray(kd) ? kd : []).map(Jd),
          classStyles: Nd
        }
      }(dd.customCss)), kd
    }

    function ed(dd) {
      return "object" === typeof dd && null !== dd && !Array.isArray(dd)
    }

    function Rd(dd, Jd, kd) {
      const pd = Object.entries(ed(dd) ? dd : {}),
        Nd = pd.filter((dd => {
          let [, kd] = dd;
          return !Jd(kd)
        }));
      if (Nd.length > 0) {
        const dd = Nd.map((dd => {
          let [Jd] = dd;
          return Jd
        }));
        console.warn(`Ignoring a custom game texture pack's ${kd} files that name another site: ${dd.join(", ")}`)
      }
      return Object.fromEntries(pd.filter((dd => {
        let [, kd] = dd;
        return Jd(kd)
      })))
    }
  },
  43253: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Ld,
      i: () => Gd,
      l: () => Id
    });
    var pd = kd(1013),
      Nd = kd(3018),
      Wd = kd(3095),
      Pd = kd(3112),
      Zd = kd(9299),
      gd = kd(9291),
      Cd = kd(43247),
      Kd = kd(41049),
      od = kd(41036),
      ld = kd(4915);
    const Qd = {
      pack: null,
      gameSource: null
    };
    class Ld {
      constructor(dd) {
        this.host = dd, this.ready = void 0, this.state = Qd, this.playerPack = null, this.onGamePack = !1, this.confirmGamePack = null, this.skippedKey = null, this.ownAnnouncements = new Set, this.listeners = new Map, this.ownListeners = new Set, this.changes = 0, this.picks = 0, this.playerPicked = !1, this.ownChanges = 0, this.pL = !1, (0, Pd.i)(), this.ready = this.readStored()
      }
      readyWithin(dd) {
        return Promise.race([this.ready, new Promise((Jd => {
          setTimeout(Jd, dd)
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
      onPlayerPackChange(dd) {
        return this.ownListeners.add(dd), () => {
          this.ownListeners.delete(dd)
        }
      }
      isUsingCustomGameTexturePack(dd) {
        return (0, od.i)(this.state, dd)
      }
      setGamePackConfirm(dd) {
        this.confirmGamePack = dd
      }
      subscribe(dd) {
        return this.listeners.set(dd, null), this.ready.then((() => {
          this.deliver(dd)
        })), () => {
          this.listeners.delete(dd)
        }
      }
      async setPlayerPack(dd) {
        const Jd = ed(dd) ? null : dd;
        this.picks++, this.playerPicked = !0, this.ownChanges++, this.setOwn(Jd), this.change({
          pack: Jd,
          gameSource: null
        }, !1);
        const kd = await this.storePlayerPack(Jd);
        return kd && this.announce(), kd
      }
      async packForGame(dd, Jd, kd) {
        await this.readyWithin(Math.max(0, (null !== kd && void 0 !== kd ? kd : performance.now() + Kd.d) - performance.now()));
        const Nd = ++this.picks,
          Wd = (0, pd.i)(dd) ? (0, pd.o)(dd) : null;
        if (null === Wd) return void this.usePlayerPack();
        let Pd;
        const Zd = function(dd) {
          let Jd;
          const kd = new Promise(((kd, pd) => {
            Jd = setTimeout((() => {
              pd(new Error(`no answer in ${dd} ms`))
            }), dd)
          }));
          return kd.catch((() => {})), {
            passed: kd,
            clear: () => {
              clearTimeout(Jd)
            }
          }
        }(2e4);
        try {
          const dd = await Promise.race([Jd.packKey(Wd), Zd.passed]);
          if (null !== dd && this.onGamePack && this.state.gameSource === dd) return;
          if (null !== dd && dd === this.skippedKey) return void(this.pL || this.picks !== Nd || this.usePlayerPack());
          Pd = null === dd ? null : await Promise.race([Od(Wd, dd, Jd), Zd.passed])
        } catch (od) {
          const dd = !this.pL && this.picks === Nd && this.holdsOtherGamePack(Wd);
          return this.host.warn(`the texture pack of ${Wd} didn't load: ${dd?"the player's own shows":"the pack in play stays"}`, od), void(dd && this.usePlayerPack())
        } finally {
          Zd.clear()
        }
        if (this.pL || this.picks !== Nd) return;
        null !== Pd && (0, Cd.f)(Pd.pack) && (this.host.warn(`the texture pack of ${Wd} names files on other sites: the player's own shows`, null), Pd = null);
        const gd = null === Pd || await this.confirmed(Pd.pack, Wd) ? null : Pd.key;
        this.pL || this.picks !== Nd || (null !== gd && (this.skippedKey = gd, Pd = null), null === Pd ? this.usePlayerPack() : (this.onGamePack = !0, this.change({
          pack: Pd.pack,
          gameSource: Pd.key
        }, !0)))
      }
      endGamePack() {
        this.picks++, this.usePlayerPack()
      }
      holdsOtherGamePack(dd) {
        return this.onGamePack && "" !== this.state.gameSource && !this.isUsingCustomGameTexturePack(dd)
      }
      async confirmed(dd, Jd) {
        const kd = this.confirmGamePack;
        if (null === kd) return !0;
        try {
          return await kd(dd, Jd)
        } catch (pd) {
          return this.host.warn(`the texture pack prompt of ${Jd} failed: the pack is skipped`, pd), !1
        }
      }
      async readPlayerPack() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (null !== dd && this.ownAnnouncements.delete(dd)) return;
        await this.ready;
        const Jd = this.ownChanges;
        let kd;
        try {
          kd = await this.host.store.getItem(Pd.b, !0)
        } catch (Nd) {
          return void this.host.warn("the stored texture pack didn't read again: the pack in play stays", Nd)
        }
        if (this.pL || this.ownChanges !== Jd) return;
        const pd = Rd(kd);
        (0, ld.d)(pd, this.playerPack) || (this.ownChanges++, this.setOwn(pd), this.onGamePack || this.change({
          pack: pd,
          gameSource: null
        }, !1))
      }
      joinedWithout() {
        this.picks++
      }
      dispose() {
        this.pL = !0, this.listeners.clear()
      }
      async readStored() {
        const {
          store: dd,
          warn: Jd
        } = this.host;
        await Promise.all([!1 === this.host.oneShot ? void 0 : (0, gd.f)(dd, !0, (dd => {
          Jd("the custom game's texture pack wasn't removed from storage", dd)
        })).then((dd => {
          this.takeOneShot(dd)
        }), (dd => {
          Jd("the custom game's texture pack didn't read: the player's own shows", dd)
        })), dd.getItem(Pd.b, !0).then((dd => {
          this.takeStoredOwn(dd)
        }), (dd => {
          Jd("the stored texture pack didn't read: the default pack shows", dd), this.takeStoredOwn(null)
        }))]), this.update()
      }
      takeOneShot(dd) {
        var Jd;
        null === dd || this.pL || this.changes > 0 || this.picks > 0 || ((0, Cd.f)(dd.pack) ? this.host.warn("the custom game's texture pack names files on other sites: the player's own shows", null) : (this.onGamePack = !0, this.state = {
          pack: dd.pack,
          gameSource: null !== (Jd = dd.source) && void 0 !== Jd ? Jd : ""
        }))
      }
      takeStoredOwn(dd) {
        if (this.playerPicked || this.pL) return;
        if (this.ownChanges++, this.setOwn(Rd(dd)), this.onGamePack) return;
        const Jd = {
          pack: this.playerPack,
          gameSource: null
        };
        0 === this.changes ? this.state = Jd : this.change(Jd, !1)
      }
      async update() {
        const dd = this.playerPack,
          Jd = null === dd || void 0 === dd ? void 0 : dd.metaData.id;
        if (!dd || !Jd || !this.host.fetchLatest || Jd === Nd.e || Jd === Nd.s.CUSTOM) return;
        const kd = Nd.t[Jd];
        if (void 0 === kd || dd.metaData.version >= kd) return;
        let pd;
        try {
          pd = Rd(await this.host.fetchLatest(Jd))
        } catch (Wd) {
          return void this.host.warn(`texture pack ${Jd} didn't update to version ${kd}`, Wd)
        }
        null === pd || this.pL || this.playerPack !== dd || (this.ownChanges++, this.setOwn(pd), this.onGamePack || this.change({
          pack: pd,
          gameSource: null
        }, !1), await this.storePlayerPack(pd) && this.announce())
      }
      announce() {
        const dd = (0, Zd.c)();
        null !== dd && this.ownAnnouncements.add(dd)
      }
      setOwn(dd) {
        this.playerPack = dd;
        for (const kd of [...this.ownListeners]) try {
          kd()
        } catch (Jd) {
          this.host.warn("a texture pack listener threw", Jd)
        }
      }
      usePlayerPack() {
        this.onGamePack && this.change({
          pack: this.playerPack,
          gameSource: null
        }, !1)
      }
      async storePlayerPack(dd) {
        try {
          return null === dd ? (await this.host.store.removeItem(Pd.b), !0) : await this.host.store.setItem(Pd.b, dd)
        } catch (Jd) {
          return this.host.warn("the texture pack wasn't stored: it shows until the page reloads", Jd), !1
        }
      }
      change(dd, Jd) {
        if (!this.pL) {
          this.changes++, this.onGamePack = Jd, this.state = dd;
          for (const dd of [...this.listeners.keys()]) this.deliver(dd)
        }
      }
      deliver(dd) {
        if (!this.pL && this.listeners.has(dd) && this.listeners.get(dd) !== this.state) {
          this.listeners.set(dd, this.state);
          try {
            dd(this.state)
          } catch (Jd) {
            this.host.warn("a texture pack listener threw", Jd)
          }
        }
      }
    }
    async function Od(dd, Jd, kd) {
      const pd = (0, gd.c)(await kd.fetchPack(Jd));
      if (null !== pd) return {
        pack: pd,
        key: Jd
      };
      const Nd = await kd.packKey(dd);
      if (null === Nd) return null;
      const Wd = (0, gd.c)(await kd.fetchPack(Nd));
      if (null === Wd) throw new Error(`no texture pack at ${Nd}`);
      return {
        pack: Wd,
        key: Nd
      }
    }

    function ed(dd) {
      return null === dd || dd.metaData.id === Nd.e
    }

    function Rd(dd) {
      const Jd = (0, gd.c)(dd);
      return ed(Jd) ? null : Jd
    }
    async function Id(dd) {
      let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Wd.b;
      if (null === dd.pack) return null;
      const {
        packAssets: pd
      } = await Promise.all([kd.e(196), kd.e(44)]).then((() => kd(61218)));
      return pd(dd, Jd)
    }

    function Gd(dd) {
      const Jd = (0, Pd.q)();
      return null === Jd ? () => {} : (Jd.onmessage = Jd => {
        dd.readPlayerPack((0, Zd.g)(Jd.data))
      }, () => {
        Jd.close()
      })
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);