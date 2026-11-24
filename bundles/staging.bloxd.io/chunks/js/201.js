export const id = 201;
export const ids = [201];
export const modules = {
  34248: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Tk,
      d: () => ik
    });
    var Xk = Ik(3175);

    function Tk() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const kk = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const Fk = new BroadcastChannel(Xk.j);
        Fk.postMessage({
          stored: kk
        }), Fk.close()
      } catch {
        return null
      }
      return kk
    }

    function ik(kk) {
      const Fk = "object" === typeof kk && null !== kk ? kk.stored : null;
      return "string" === typeof Fk ? Fk : null
    }
  },
  34245: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => yk,
      f: () => Tk,
      g: () => ik
    });
    var Xk = Ik(3175);
    async function Tk(kk, Fk, Ik) {
      let Tk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const ik = yk(await kk.getItem(Xk.f, Fk));
      if (null === ik || Tk()) return null;
      const lk = await kk.getItem(Xk.i, Fk);
      return Tk() ? null : (await async function(kk) {
        await Promise.all([kk.removeItem(Xk.f), kk.removeItem(Xk.i)])
      }(kk).catch(Ik), {
        pack: ik,
        source: "string" === typeof lk ? lk : null
      })
    }

    function ik(kk) {
      return (0, Xk.s)() ? Promise.resolve(null) : Tk(kk, !1, (kk => {
        console.error("Error removing temporary texture pack: ", kk)
      }), Xk.s)
    }

    function yk(kk) {
      if ("object" !== typeof kk || null === kk) return null;
      const Fk = kk.metaData;
      return "object" !== typeof Fk || null === Fk || "string" !== typeof Fk.id ? null : kk
    }
  },
  50988: (kk, Fk, Ik) => {
    function Xk(kk) {
      return null === kk.gameSource ? "player" : "customGame"
    }
    Ik.d(Fk, {
      c: () => ik,
      f: () => wk,
      g: () => ek,
      h: () => Xk
    });
    const Tk = /^data:[\w.+/-]*;base64,[A-Za-z0-9+/]*={0,2}$/;

    function ik(kk) {
      return "" === kk || "string" === typeof kk && Tk.test(kk)
    }

    function yk(kk) {
      return "object" === typeof kk && null !== kk && ("earth" === kk.type || Object.entries(kk).every((kk => {
        let [Fk, Ik] = kk;
        return "type" === Fk || ik(Ik)
      })))
    }
    const lk = /(?:src|image|image-set|cross-fade)\(/i,
      ak = /url\(\s*(?:"(?<doubleQuoted>[^"]*)"|'(?<singleQuoted>[^']*)'|(?<unquoted>[^"'()\s]*))\s*\)/gi,
      qk = /url\(/gi,
      Lk = ["https://bloxd.invalid/", "http://bloxd.invalid/"],
      tk = new Set([...Lk.map((kk => new URL(kk).origin)), "https://fonts.gstatic.com"]),
      Zk = new Set(["https://i.imgur.com/MEcjBFQ.png"]);

    function jk(kk) {
      var Fk, Ik;
      if (kk.includes("\\") || lk.test(kk)) return !0;
      const Xk = [...kk.matchAll(ak)];
      return Xk.length !== (null !== (Fk = null === (Ik = kk.match(qk)) || void 0 === Ik ? void 0 : Ik.length) && void 0 !== Fk ? Fk : 0) || !Xk.every((kk => {
        var Fk, Ik, Xk;
        let {
          groups: Tk
        } = kk;
        return function(kk) {
          try {
            return Lk.every((Fk => {
              const Ik = new URL(kk, Fk);
              return "data:" === Ik.protocol || tk.has(Ik.origin) || Zk.has(Ik.href)
            }))
          } catch {
            return !1
          }
        }(null !== (Fk = null !== (Ik = null !== (Xk = null === Tk || void 0 === Tk ? void 0 : Tk.doubleQuoted) && void 0 !== Xk ? Xk : null === Tk || void 0 === Tk ? void 0 : Tk.singleQuoted) && void 0 !== Ik ? Ik : null === Tk || void 0 === Tk ? void 0 : Tk.unquoted) && void 0 !== Fk ? Fk : "")
      }))
    }

    function ek(kk) {
      var Fk, Ik, Xk, Tk, lk, ak, qk;
      const Lk = [...Object.values(null !== (Fk = kk.textureOverrides) && void 0 !== Fk ? Fk : {}), ...Object.values(null !== (Ik = kk.modelOverrides) && void 0 !== Ik ? Ik : {})],
        tk = [...Object.values(null !== (Xk = null === (Tk = kk.customCss) || void 0 === Tk ? void 0 : Tk.fontFaces) && void 0 !== Xk ? Xk : {}), ...Object.values(null !== (lk = null === (ak = kk.customCss) || void 0 === ak ? void 0 : ak.classStyles) && void 0 !== lk ? lk : {})].flatMap((kk => Object.values(null !== kk && void 0 !== kk ? kk : {})));
      return !Lk.every(ik) || !Object.values(null !== (qk = kk.skyBoxes) && void 0 !== qk ? qk : {}).every(yk) || tk.some((kk => "string" === typeof kk && jk(kk)))
    }

    function wk(kk, Fk) {
      if (null === kk || "player" === Fk || !ek(kk)) return kk;
      const Ik = {
        ...kk
      };
      return kk.textureOverrides && (Ik.textureOverrides = Jk(kk.textureOverrides, ik, "texture")), kk.modelOverrides && (Ik.modelOverrides = Jk(kk.modelOverrides, ik, "model")), kk.skyBoxes && (Ik.skyBoxes = Jk(kk.skyBoxes, yk, "sky")), kk.customCss && (Ik.customCss = function(kk) {
        const Fk = kk => Jk(kk, (kk => "string" === typeof kk && !jk(kk)), "CSS"),
          {
            fontFaces: Ik,
            classStyles: Xk
          } = Hk(kk) ? kk : {},
          Tk = {};
        for (const [ik, yk] of Object.entries(Hk(Xk) ? Xk : {})) Tk[ik] = Fk(yk);
        return {
          fontFaces: (Array.isArray(Ik) ? Ik : []).map(Fk),
          classStyles: Tk
        }
      }(kk.customCss)), Ik
    }

    function Hk(kk) {
      return "object" === typeof kk && null !== kk && !Array.isArray(kk)
    }

    function Jk(kk, Fk, Ik) {
      const Xk = Object.entries(Hk(kk) ? kk : {}),
        Tk = Xk.filter((kk => {
          let [, Ik] = kk;
          return !Fk(Ik)
        }));
      if (Tk.length > 0) {
        const kk = Tk.map((kk => {
          let [Fk] = kk;
          return Fk
        }));
        console.warn(`Ignoring a custom game texture pack's ${Ik} files that name another site: ${kk.join(", ")}`)
      }
      return Object.fromEntries(Xk.filter((kk => {
        let [, Ik] = kk;
        return Fk(Ik)
      })))
    }
  },
  50992: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => ek,
      f: () => Pk,
      j: () => xk
    });
    var Xk = Ik(1018),
      Tk = Ik(2071),
      ik = Ik(3170),
      yk = Ik(3175),
      lk = Ik(34248),
      ak = Ik(34245),
      qk = Ik(50988),
      Lk = Ik(41003),
      tk = Ik(40978),
      Zk = Ik(5071);
    const jk = {
      pack: null,
      gameSource: null
    };
    class ek {
      constructor(kk) {
        this.host = kk, this.ready = void 0, this.state = jk, this.playerPack = null, this.onGamePack = !1, this.confirmGamePack = null, this.skippedKey = null, this.ownAnnouncements = new Set, this.listeners = new Map, this.ownListeners = new Set, this.changes = 0, this.picks = 0, this.playerPicked = !1, this.ownChanges = 0, this.ee = !1, (0, yk.k)(), this.ready = this.readStored()
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
        return (0, tk.g)(this.state, kk)
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
        const Fk = Hk(kk) ? null : kk;
        this.picks++, this.playerPicked = !0, this.ownChanges++, this.setOwn(Fk), this.change({
          pack: Fk,
          gameSource: null
        }, !1);
        const Ik = await this.storePlayerPack(Fk);
        return Ik && this.announce(), Ik
      }
      async packForGame(kk, Fk, Ik) {
        await this.readyWithin(Math.max(0, (null !== Ik && void 0 !== Ik ? Ik : performance.now() + Lk.c) - performance.now()));
        const Tk = ++this.picks,
          ik = (0, Xk.j)(kk) ? (0, Xk.n)(kk) : null;
        if (null === ik) return void this.usePlayerPack();
        let yk;
        const lk = function(kk) {
          let Fk;
          const Ik = new Promise(((Ik, Xk) => {
            Fk = setTimeout((() => {
              Xk(new Error(`no answer in ${kk} ms`))
            }), kk)
          }));
          return Ik.catch((() => {})), {
            passed: Ik,
            clear: () => {
              clearTimeout(Fk)
            }
          }
        }(2e4);
        try {
          const kk = await Promise.race([Fk.packKey(ik), lk.passed]);
          if (null !== kk && this.onGamePack && this.state.gameSource === kk) return;
          if (null !== kk && kk === this.skippedKey) return void(this.ee || this.picks !== Tk || this.usePlayerPack());
          yk = null === kk ? null : await Promise.race([wk(ik, kk, Fk), lk.passed])
        } catch (tk) {
          const kk = !this.ee && this.picks === Tk && this.holdsOtherGamePack(ik);
          return this.host.warn(`the texture pack of ${ik} didn't load: ${kk?"the player's own shows":"the pack in play stays"}`, tk), void(kk && this.usePlayerPack())
        } finally {
          lk.clear()
        }
        if (this.ee || this.picks !== Tk) return;
        null !== yk && (0, qk.g)(yk.pack) && (this.host.warn(`the texture pack of ${ik} names files on other sites: the player's own shows`, null), yk = null);
        const ak = null === yk || await this.confirmed(yk.pack, ik) ? null : yk.key;
        this.ee || this.picks !== Tk || (null !== ak && (this.skippedKey = ak, yk = null), null === yk ? this.usePlayerPack() : (this.onGamePack = !0, this.change({
          pack: yk.pack,
          gameSource: yk.key
        }, !0)))
      }
      endGamePack() {
        this.picks++, this.usePlayerPack()
      }
      holdsOtherGamePack(kk) {
        return this.onGamePack && "" !== this.state.gameSource && !this.isUsingCustomGameTexturePack(kk)
      }
      async confirmed(kk, Fk) {
        const Ik = this.confirmGamePack;
        if (null === Ik) return !0;
        try {
          return await Ik(kk, Fk)
        } catch (Xk) {
          return this.host.warn(`the texture pack prompt of ${Fk} failed: the pack is skipped`, Xk), !1
        }
      }
      async readPlayerPack() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (null !== kk && this.ownAnnouncements.delete(kk)) return;
        await this.ready;
        const Fk = this.ownChanges;
        let Ik;
        try {
          Ik = await this.host.store.getItem(yk.b, !0)
        } catch (Tk) {
          return void this.host.warn("the stored texture pack didn't read again: the pack in play stays", Tk)
        }
        if (this.ee || this.ownChanges !== Fk) return;
        const Xk = Jk(Ik);
        (0, Zk.e)(Xk, this.playerPack) || (this.ownChanges++, this.setOwn(Xk), this.onGamePack || this.change({
          pack: Xk,
          gameSource: null
        }, !1))
      }
      joinedWithout() {
        this.picks++
      }
      dispose() {
        this.ee = !0, this.listeners.clear()
      }
      async readStored() {
        const {
          store: kk,
          warn: Fk
        } = this.host;
        await Promise.all([!1 === this.host.oneShot ? void 0 : (0, ak.f)(kk, !0, (kk => {
          Fk("the custom game's texture pack wasn't removed from storage", kk)
        })).then((kk => {
          this.takeOneShot(kk)
        }), (kk => {
          Fk("the custom game's texture pack didn't read: the player's own shows", kk)
        })), kk.getItem(yk.b, !0).then((kk => {
          this.takeStoredOwn(kk)
        }), (kk => {
          Fk("the stored texture pack didn't read: the default pack shows", kk), this.takeStoredOwn(null)
        }))]), this.update()
      }
      takeOneShot(kk) {
        var Fk;
        null === kk || this.ee || this.changes > 0 || this.picks > 0 || ((0, qk.g)(kk.pack) ? this.host.warn("the custom game's texture pack names files on other sites: the player's own shows", null) : (this.onGamePack = !0, this.state = {
          pack: kk.pack,
          gameSource: null !== (Fk = kk.source) && void 0 !== Fk ? Fk : ""
        }))
      }
      takeStoredOwn(kk) {
        if (this.playerPicked || this.ee) return;
        if (this.ownChanges++, this.setOwn(Jk(kk)), this.onGamePack) return;
        const Fk = {
          pack: this.playerPack,
          gameSource: null
        };
        0 === this.changes ? this.state = Fk : this.change(Fk, !1)
      }
      async update() {
        const kk = this.playerPack,
          Fk = null === kk || void 0 === kk ? void 0 : kk.metaData.id;
        if (!kk || !Fk || !this.host.fetchLatest || Fk === Tk.b || Fk === Tk.l.CUSTOM) return;
        const Ik = Tk.p[Fk];
        if (void 0 === Ik || kk.metaData.version >= Ik) return;
        let Xk;
        try {
          Xk = Jk(await this.host.fetchLatest(Fk))
        } catch (ik) {
          return void this.host.warn(`texture pack ${Fk} didn't update to version ${Ik}`, ik)
        }
        null === Xk || this.ee || this.playerPack !== kk || (this.ownChanges++, this.setOwn(Xk), this.onGamePack || this.change({
          pack: Xk,
          gameSource: null
        }, !1), await this.storePlayerPack(Xk) && this.announce())
      }
      announce() {
        const kk = (0, lk.b)();
        null !== kk && this.ownAnnouncements.add(kk)
      }
      setOwn(kk) {
        this.playerPack = kk;
        for (const Ik of [...this.ownListeners]) try {
          Ik()
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
          return null === kk ? (await this.host.store.removeItem(yk.b), !0) : await this.host.store.setItem(yk.b, kk)
        } catch (Fk) {
          return this.host.warn("the texture pack wasn't stored: it shows until the page reloads", Fk), !1
        }
      }
      change(kk, Fk) {
        if (!this.ee) {
          this.changes++, this.onGamePack = Fk, this.state = kk;
          for (const kk of [...this.listeners.keys()]) this.deliver(kk)
        }
      }
      deliver(kk) {
        if (!this.ee && this.listeners.has(kk) && this.listeners.get(kk) !== this.state) {
          this.listeners.set(kk, this.state);
          try {
            kk(this.state)
          } catch (Fk) {
            this.host.warn("a texture pack listener threw", Fk)
          }
        }
      }
    }
    async function wk(kk, Fk, Ik) {
      const Xk = (0, ak.e)(await Ik.fetchPack(Fk));
      if (null !== Xk) return {
        pack: Xk,
        key: Fk
      };
      const Tk = await Ik.packKey(kk);
      if (null === Tk) return null;
      const ik = (0, ak.e)(await Ik.fetchPack(Tk));
      if (null === ik) throw new Error(`no texture pack at ${Tk}`);
      return {
        pack: ik,
        key: Tk
      }
    }

    function Hk(kk) {
      return null === kk || kk.metaData.id === Tk.b
    }

    function Jk(kk) {
      const Fk = (0, ak.e)(kk);
      return Hk(Fk) ? null : Fk
    }
    async function xk(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ik.d;
      if (null === kk.pack) return null;
      const {
        packAssets: Xk
      } = await Promise.all([Ik.e(203), Ik.e(44)]).then((() => Ik(61481)));
      return Xk(kk, Fk)
    }

    function Pk(kk) {
      const Fk = (0, yk.u)();
      return null === Fk ? () => {} : (Fk.onmessage = Fk => {
        kk.readPlayerPack((0, lk.d)(Fk.data))
      }, () => {
        Fk.close()
      })
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);