export const id = 193;
export const ids = [193];
export const modules = {
  9064: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => tk,
      f: () => ak
    });
    var Rk = Bk(3073);

    function tk() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const kk = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const Fk = new BroadcastChannel(Rk.l);
        Fk.postMessage({
          stored: kk
        }), Fk.close()
      } catch {
        return null
      }
      return kk
    }

    function ak(kk) {
      const Fk = "object" === typeof kk && null !== kk ? kk.stored : null;
      return "string" === typeof Fk ? Fk : null
    }
  },
  9055: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Xk,
      g: () => tk,
      i: () => ak
    });
    var Rk = Bk(3073);
    async function tk(kk, Fk, Bk) {
      let tk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const ak = Xk(await kk.getItem(Rk.h, Fk));
      if (null === ak || tk()) return null;
      const bk = await kk.getItem(Rk.i, Fk);
      return tk() ? null : (await async function(kk) {
        await Promise.all([kk.removeItem(Rk.h), kk.removeItem(Rk.i)])
      }(kk).catch(Bk), {
        pack: ak,
        source: "string" === typeof bk ? bk : null
      })
    }

    function ak(kk) {
      return (0, Rk.s)() ? Promise.resolve(null) : tk(kk, !1, (kk => {
        console.error("Error removing temporary texture pack: ", kk)
      }), Rk.s)
    }

    function Xk(kk) {
      if ("object" !== typeof kk || null === kk) return null;
      const Fk = kk.metaData;
      return "object" !== typeof Fk || null === Fk || "string" !== typeof Fk.id ? null : kk
    }
  },
  42786: (kk, Fk, Bk) => {
    function Rk(kk) {
      return null === kk.gameSource ? "player" : "customGame"
    }
    Bk.d(Fk, {
      b: () => ak,
      f: () => yk,
      g: () => ek,
      h: () => Rk
    });
    const tk = /^data:[\w.+/-]*;base64,[A-Za-z0-9+/]*={0,2}$/;

    function ak(kk) {
      return "" === kk || "string" === typeof kk && tk.test(kk)
    }

    function Xk(kk) {
      return "object" === typeof kk && null !== kk && ("earth" === kk.type || Object.entries(kk).every((kk => {
        let [Fk, Bk] = kk;
        return "type" === Fk || ak(Bk)
      })))
    }
    const bk = /(?:src|image|image-set|cross-fade)\(/i,
      wk = /url\(\s*(?:"(?<doubleQuoted>[^"]*)"|'(?<singleQuoted>[^']*)'|(?<unquoted>[^"'()\s]*))\s*\)/gi,
      dk = /url\(/gi,
      sk = ["https://bloxd.invalid/", "http://bloxd.invalid/"],
      Vk = new Set([...sk.map((kk => new URL(kk).origin)), "https://fonts.gstatic.com"]),
      Jk = new Set(["https://i.imgur.com/MEcjBFQ.png"]);

    function Ak(kk) {
      var Fk, Bk;
      if (kk.includes("\\") || bk.test(kk)) return !0;
      const Rk = [...kk.matchAll(wk)];
      return Rk.length !== (null !== (Fk = null === (Bk = kk.match(dk)) || void 0 === Bk ? void 0 : Bk.length) && void 0 !== Fk ? Fk : 0) || !Rk.every((kk => {
        var Fk, Bk, Rk;
        let {
          groups: tk
        } = kk;
        return function(kk) {
          try {
            return sk.every((Fk => {
              const Bk = new URL(kk, Fk);
              return "data:" === Bk.protocol || Vk.has(Bk.origin) || Jk.has(Bk.href)
            }))
          } catch {
            return !1
          }
        }(null !== (Fk = null !== (Bk = null !== (Rk = null === tk || void 0 === tk ? void 0 : tk.doubleQuoted) && void 0 !== Rk ? Rk : null === tk || void 0 === tk ? void 0 : tk.singleQuoted) && void 0 !== Bk ? Bk : null === tk || void 0 === tk ? void 0 : tk.unquoted) && void 0 !== Fk ? Fk : "")
      }))
    }

    function ek(kk) {
      var Fk, Bk, Rk, tk, bk, wk, dk;
      const sk = [...Object.values(null !== (Fk = kk.textureOverrides) && void 0 !== Fk ? Fk : {}), ...Object.values(null !== (Bk = kk.modelOverrides) && void 0 !== Bk ? Bk : {})],
        Vk = [...Object.values(null !== (Rk = null === (tk = kk.customCss) || void 0 === tk ? void 0 : tk.fontFaces) && void 0 !== Rk ? Rk : {}), ...Object.values(null !== (bk = null === (wk = kk.customCss) || void 0 === wk ? void 0 : wk.classStyles) && void 0 !== bk ? bk : {})].flatMap((kk => Object.values(null !== kk && void 0 !== kk ? kk : {})));
      return !sk.every(ak) || !Object.values(null !== (dk = kk.skyBoxes) && void 0 !== dk ? dk : {}).every(Xk) || Vk.some((kk => "string" === typeof kk && Ak(kk)))
    }

    function yk(kk, Fk) {
      if (null === kk || "player" === Fk || !ek(kk)) return kk;
      const Bk = {
        ...kk
      };
      return kk.textureOverrides && (Bk.textureOverrides = mk(kk.textureOverrides, ak, "texture")), kk.modelOverrides && (Bk.modelOverrides = mk(kk.modelOverrides, ak, "model")), kk.skyBoxes && (Bk.skyBoxes = mk(kk.skyBoxes, Xk, "sky")), kk.customCss && (Bk.customCss = function(kk) {
        const Fk = kk => mk(kk, (kk => "string" === typeof kk && !Ak(kk)), "CSS"),
          {
            fontFaces: Bk,
            classStyles: Rk
          } = fk(kk) ? kk : {},
          tk = {};
        for (const [ak, Xk] of Object.entries(fk(Rk) ? Rk : {})) tk[ak] = Fk(Xk);
        return {
          fontFaces: (Array.isArray(Bk) ? Bk : []).map(Fk),
          classStyles: tk
        }
      }(kk.customCss)), Bk
    }

    function fk(kk) {
      return "object" === typeof kk && null !== kk && !Array.isArray(kk)
    }

    function mk(kk, Fk, Bk) {
      const Rk = Object.entries(fk(kk) ? kk : {}),
        tk = Rk.filter((kk => {
          let [, Bk] = kk;
          return !Fk(Bk)
        }));
      if (tk.length > 0) {
        const kk = tk.map((kk => {
          let [Fk] = kk;
          return Fk
        }));
        console.warn(`Ignoring a custom game texture pack's ${Bk} files that name another site: ${kk.join(", ")}`)
      }
      return Object.fromEntries(Rk.filter((kk => {
        let [, Bk] = kk;
        return Fk(Bk)
      })))
    }
  },
  42791: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => ek,
      f: () => vk,
      i: () => Wk
    });
    var Rk = Bk(994),
      tk = Bk(2954),
      ak = Bk(3065),
      Xk = Bk(3073),
      bk = Bk(9064),
      wk = Bk(9055),
      dk = Bk(42786),
      sk = Bk(40476),
      Vk = Bk(40460),
      Jk = Bk(4732);
    const Ak = {
      pack: null,
      gameSource: null
    };
    class ek {
      constructor(kk) {
        this.host = kk, this.ready = void 0, this.state = Ak, this.playerPack = null, this.onGamePack = !1, this.confirmGamePack = null, this.skippedKey = null, this.ownAnnouncements = new Set, this.listeners = new Map, this.ownListeners = new Set, this.changes = 0, this.picks = 0, this.playerPicked = !1, this.ownChanges = 0, this.Te = !1, (0, Xk.p)(), this.ready = this.readStored()
      }
      readyWithin(kk) {
        return Promise.race([this.ready, new Promise((Fk => {
          setTimeout(Fk, kk)
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
      onPlayerPackChange(kk) {
        return this.ownListeners.add(kk), () => {
          this.ownListeners.delete(kk)
        }
      }
      isUsingCustomGameTexturePack(kk) {
        return (0, Vk.e)(this.state, kk)
      }
      setGamePackConfirm(kk) {
        this.confirmGamePack = kk
      }
      subscribe(kk) {
        return this.listeners.set(kk, null), this.ready.then((() => {
          this.deliver(kk)
        })), () => {
          this.listeners.delete(kk)
        }
      }
      async setPlayerPack(kk) {
        const Fk = fk(kk) ? null : kk;
        this.picks++, this.playerPicked = !0, this.ownChanges++, this.setOwn(Fk), this.change({
          pack: Fk,
          gameSource: null
        }, !1);
        const Bk = await this.storePlayerPack(Fk);
        return Bk && this.announce(), Bk
      }
      async packForGame(kk, Fk, Bk) {
        await this.readyWithin(Math.max(0, (null !== Bk && void 0 !== Bk ? Bk : performance.now() + sk.d) - performance.now()));
        const tk = ++this.picks,
          ak = (0, Rk.n)(kk) ? (0, Rk.v)(kk) : null;
        if (null === ak) return void this.usePlayerPack();
        let Xk;
        const bk = function(kk) {
          let Fk;
          const Bk = new Promise(((Bk, Rk) => {
            Fk = setTimeout((() => {
              Rk(new Error(`no answer in ${kk} ms`))
            }), kk)
          }));
          return Bk.catch((() => {})), {
            passed: Bk,
            clear: () => {
              clearTimeout(Fk)
            }
          }
        }(2e4);
        try {
          const kk = await Promise.race([Fk.packKey(ak), bk.passed]);
          if (null !== kk && this.onGamePack && this.state.gameSource === kk) return;
          if (null !== kk && kk === this.skippedKey) return void(this.Te || this.picks !== tk || this.usePlayerPack());
          Xk = null === kk ? null : await Promise.race([yk(ak, kk, Fk), bk.passed])
        } catch (Vk) {
          const kk = !this.Te && this.picks === tk && this.holdsOtherGamePack(ak);
          return this.host.warn(`the texture pack of ${ak} didn't load: ${kk?"the player's own shows":"the pack in play stays"}`, Vk), void(kk && this.usePlayerPack())
        } finally {
          bk.clear()
        }
        if (this.Te || this.picks !== tk) return;
        null !== Xk && (0, dk.g)(Xk.pack) && (this.host.warn(`the texture pack of ${ak} names files on other sites: the player's own shows`, null), Xk = null);
        const wk = null === Xk || await this.confirmed(Xk.pack, ak) ? null : Xk.key;
        this.Te || this.picks !== tk || (null !== wk && (this.skippedKey = wk, Xk = null), null === Xk ? this.usePlayerPack() : (this.onGamePack = !0, this.change({
          pack: Xk.pack,
          gameSource: Xk.key
        }, !0)))
      }
      endGamePack() {
        this.picks++, this.usePlayerPack()
      }
      holdsOtherGamePack(kk) {
        return this.onGamePack && "" !== this.state.gameSource && !this.isUsingCustomGameTexturePack(kk)
      }
      async confirmed(kk, Fk) {
        const Bk = this.confirmGamePack;
        if (null === Bk) return !0;
        try {
          return await Bk(kk, Fk)
        } catch (Rk) {
          return this.host.warn(`the texture pack prompt of ${Fk} failed: the pack is skipped`, Rk), !1
        }
      }
      async readPlayerPack() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (null !== kk && this.ownAnnouncements.delete(kk)) return;
        await this.ready;
        const Fk = this.ownChanges;
        let Bk;
        try {
          Bk = await this.host.store.getItem(Xk.d, !0)
        } catch (tk) {
          return void this.host.warn("the stored texture pack didn't read again: the pack in play stays", tk)
        }
        if (this.Te || this.ownChanges !== Fk) return;
        const Rk = mk(Bk);
        (0, Jk.c)(Rk, this.playerPack) || (this.ownChanges++, this.setOwn(Rk), this.onGamePack || this.change({
          pack: Rk,
          gameSource: null
        }, !1))
      }
      joinedWithout() {
        this.picks++
      }
      dispose() {
        this.Te = !0, this.listeners.clear()
      }
      async readStored() {
        const {
          store: kk,
          warn: Fk
        } = this.host;
        await Promise.all([!1 === this.host.oneShot ? void 0 : (0, wk.g)(kk, !0, (kk => {
          Fk("the custom game's texture pack wasn't removed from storage", kk)
        })).then((kk => {
          this.takeOneShot(kk)
        }), (kk => {
          Fk("the custom game's texture pack didn't read: the player's own shows", kk)
        })), kk.getItem(Xk.d, !0).then((kk => {
          this.takeStoredOwn(kk)
        }), (kk => {
          Fk("the stored texture pack didn't read: the default pack shows", kk), this.takeStoredOwn(null)
        }))]), this.update()
      }
      takeOneShot(kk) {
        var Fk;
        null === kk || this.Te || this.changes > 0 || this.picks > 0 || ((0, dk.g)(kk.pack) ? this.host.warn("the custom game's texture pack names files on other sites: the player's own shows", null) : (this.onGamePack = !0, this.state = {
          pack: kk.pack,
          gameSource: null !== (Fk = kk.source) && void 0 !== Fk ? Fk : ""
        }))
      }
      takeStoredOwn(kk) {
        if (this.playerPicked || this.Te) return;
        if (this.ownChanges++, this.setOwn(mk(kk)), this.onGamePack) return;
        const Fk = {
          pack: this.playerPack,
          gameSource: null
        };
        0 === this.changes ? this.state = Fk : this.change(Fk, !1)
      }
      async update() {
        const kk = this.playerPack,
          Fk = null === kk || void 0 === kk ? void 0 : kk.metaData.id;
        if (!kk || !Fk || !this.host.fetchLatest || Fk === tk.c || Fk === tk.p.CUSTOM) return;
        const Bk = tk.s[Fk];
        if (void 0 === Bk || kk.metaData.version >= Bk) return;
        let Rk;
        try {
          Rk = mk(await this.host.fetchLatest(Fk))
        } catch (ak) {
          return void this.host.warn(`texture pack ${Fk} didn't update to version ${Bk}`, ak)
        }
        null === Rk || this.Te || this.playerPack !== kk || (this.ownChanges++, this.setOwn(Rk), this.onGamePack || this.change({
          pack: Rk,
          gameSource: null
        }, !1), await this.storePlayerPack(Rk) && this.announce())
      }
      announce() {
        const kk = (0, bk.d)();
        null !== kk && this.ownAnnouncements.add(kk)
      }
      setOwn(kk) {
        this.playerPack = kk;
        for (const Bk of [...this.ownListeners]) try {
          Bk()
        } catch (Fk) {
          this.host.warn("a texture pack listener threw", Fk)
        }
      }
      usePlayerPack() {
        this.onGamePack && this.change({
          pack: this.playerPack,
          gameSource: null
        }, !1)
      }
      async storePlayerPack(kk) {
        try {
          return null === kk ? (await this.host.store.removeItem(Xk.d), !0) : await this.host.store.setItem(Xk.d, kk)
        } catch (Fk) {
          return this.host.warn("the texture pack wasn't stored: it shows until the page reloads", Fk), !1
        }
      }
      change(kk, Fk) {
        if (!this.Te) {
          this.changes++, this.onGamePack = Fk, this.state = kk;
          for (const kk of [...this.listeners.keys()]) this.deliver(kk)
        }
      }
      deliver(kk) {
        if (!this.Te && this.listeners.has(kk) && this.listeners.get(kk) !== this.state) {
          this.listeners.set(kk, this.state);
          try {
            kk(this.state)
          } catch (Fk) {
            this.host.warn("a texture pack listener threw", Fk)
          }
        }
      }
    }
    async function yk(kk, Fk, Bk) {
      const Rk = (0, wk.e)(await Bk.fetchPack(Fk));
      if (null !== Rk) return {
        pack: Rk,
        key: Fk
      };
      const tk = await Bk.packKey(kk);
      if (null === tk) return null;
      const ak = (0, wk.e)(await Bk.fetchPack(tk));
      if (null === ak) throw new Error(`no texture pack at ${tk}`);
      return {
        pack: ak,
        key: tk
      }
    }

    function fk(kk) {
      return null === kk || kk.metaData.id === tk.c
    }

    function mk(kk) {
      const Fk = (0, wk.e)(kk);
      return fk(Fk) ? null : Fk
    }
    async function Wk(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ak.d;
      if (null === kk.pack) return null;
      const {
        packAssets: Rk
      } = await Promise.all([Bk.e(195), Bk.e(44)]).then((() => Bk(61249)));
      return Rk(kk, Fk)
    }

    function vk(kk) {
      const Fk = (0, Xk.v)();
      return null === Fk ? () => {} : (Fk.onmessage = Fk => {
        kk.readPlayerPack((0, bk.f)(Fk.data))
      }, () => {
        Fk.close()
      })
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);