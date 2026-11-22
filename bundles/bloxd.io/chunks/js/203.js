export const id = 203;
export const ids = [203];
export const modules = {
  33828: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => fk,
      d: () => Sk
    });
    var Dk = ik(3218);

    function fk() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const kk = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const ek = new BroadcastChannel(Dk.m);
        ek.postMessage({
          stored: kk
        }), ek.close()
      } catch {
        return null
      }
      return kk
    }

    function Sk(kk) {
      const ek = "object" === typeof kk && null !== kk ? kk.stored : null;
      return "string" === typeof ek ? ek : null
    }
  },
  33819: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => bk,
      f: () => fk,
      j: () => Sk
    });
    var Dk = ik(3218);
    async function fk(kk, ek, ik) {
      let fk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const Sk = bk(await kk.getItem(Dk.f, ek));
      if (null === Sk || fk()) return null;
      const rk = await kk.getItem(Dk.i, ek);
      return fk() ? null : (await async function(kk) {
        await Promise.all([kk.removeItem(Dk.f), kk.removeItem(Dk.i)])
      }(kk).catch(ik), {
        pack: Sk,
        source: "string" === typeof rk ? rk : null
      })
    }

    function Sk(kk) {
      return (0, Dk.u)() ? Promise.resolve(null) : fk(kk, !1, (kk => {
        console.error("Error removing temporary texture pack: ", kk)
      }), Dk.u)
    }

    function bk(kk) {
      if ("object" !== typeof kk || null === kk) return null;
      const ek = kk.metaData;
      return "object" !== typeof ek || null === ek || "string" !== typeof ek.id ? null : kk
    }
  },
  50568: (kk, ek, ik) => {
    function Dk(kk) {
      return null === kk.gameSource ? "player" : "customGame"
    }
    ik.d(ek, {
      d: () => Sk,
      e: () => Hk,
      f: () => Uk,
      j: () => Dk
    });
    const fk = /^data:[\w.+/-]*;base64,[A-Za-z0-9+/]*={0,2}$/;

    function Sk(kk) {
      return "" === kk || "string" === typeof kk && fk.test(kk)
    }

    function bk(kk) {
      return "object" === typeof kk && null !== kk && ("earth" === kk.type || Object.entries(kk).every((kk => {
        let [ek, ik] = kk;
        return "type" === ek || Sk(ik)
      })))
    }
    const rk = /(?:src|image|image-set|cross-fade)\(/i,
      Pk = /url\(\s*(?:"(?<doubleQuoted>[^"]*)"|'(?<singleQuoted>[^']*)'|(?<unquoted>[^"'()\s]*))\s*\)/gi,
      mk = /url\(/gi,
      Mk = ["https://bloxd.invalid/", "http://bloxd.invalid/"],
      Kk = new Set([...Mk.map((kk => new URL(kk).origin)), "https://fonts.gstatic.com"]),
      xk = new Set(["https://i.imgur.com/MEcjBFQ.png"]);

    function nk(kk) {
      var ek, ik;
      if (kk.includes("\\") || rk.test(kk)) return !0;
      const Dk = [...kk.matchAll(Pk)];
      return Dk.length !== (null !== (ek = null === (ik = kk.match(mk)) || void 0 === ik ? void 0 : ik.length) && void 0 !== ek ? ek : 0) || !Dk.every((kk => {
        var ek, ik, Dk;
        let {
          groups: fk
        } = kk;
        return function(kk) {
          try {
            return Mk.every((ek => {
              const ik = new URL(kk, ek);
              return "data:" === ik.protocol || Kk.has(ik.origin) || xk.has(ik.href)
            }))
          } catch {
            return !1
          }
        }(null !== (ek = null !== (ik = null !== (Dk = null === fk || void 0 === fk ? void 0 : fk.doubleQuoted) && void 0 !== Dk ? Dk : null === fk || void 0 === fk ? void 0 : fk.singleQuoted) && void 0 !== ik ? ik : null === fk || void 0 === fk ? void 0 : fk.unquoted) && void 0 !== ek ? ek : "")
      }))
    }

    function Uk(kk) {
      var ek, ik, Dk, fk, rk, Pk, mk;
      const Mk = [...Object.values(null !== (ek = kk.textureOverrides) && void 0 !== ek ? ek : {}), ...Object.values(null !== (ik = kk.modelOverrides) && void 0 !== ik ? ik : {})],
        Kk = [...Object.values(null !== (Dk = null === (fk = kk.customCss) || void 0 === fk ? void 0 : fk.fontFaces) && void 0 !== Dk ? Dk : {}), ...Object.values(null !== (rk = null === (Pk = kk.customCss) || void 0 === Pk ? void 0 : Pk.classStyles) && void 0 !== rk ? rk : {})].flatMap((kk => Object.values(null !== kk && void 0 !== kk ? kk : {})));
      return !Mk.every(Sk) || !Object.values(null !== (mk = kk.skyBoxes) && void 0 !== mk ? mk : {}).every(bk) || Kk.some((kk => "string" === typeof kk && nk(kk)))
    }

    function Hk(kk, ek) {
      if (null === kk || "player" === ek || !Uk(kk)) return kk;
      const ik = {
        ...kk
      };
      return kk.textureOverrides && (ik.textureOverrides = lk(kk.textureOverrides, Sk, "texture")), kk.modelOverrides && (ik.modelOverrides = lk(kk.modelOverrides, Sk, "model")), kk.skyBoxes && (ik.skyBoxes = lk(kk.skyBoxes, bk, "sky")), kk.customCss && (ik.customCss = function(kk) {
        const ek = kk => lk(kk, (kk => "string" === typeof kk && !nk(kk)), "CSS"),
          {
            fontFaces: ik,
            classStyles: Dk
          } = wk(kk) ? kk : {},
          fk = {};
        for (const [Sk, bk] of Object.entries(wk(Dk) ? Dk : {})) fk[Sk] = ek(bk);
        return {
          fontFaces: (Array.isArray(ik) ? ik : []).map(ek),
          classStyles: fk
        }
      }(kk.customCss)), ik
    }

    function wk(kk) {
      return "object" === typeof kk && null !== kk && !Array.isArray(kk)
    }

    function lk(kk, ek, ik) {
      const Dk = Object.entries(wk(kk) ? kk : {}),
        fk = Dk.filter((kk => {
          let [, ik] = kk;
          return !ek(ik)
        }));
      if (fk.length > 0) {
        const kk = fk.map((kk => {
          let [ek] = kk;
          return ek
        }));
        console.warn(`Ignoring a custom game texture pack's ${ik} files that name another site: ${kk.join(", ")}`)
      }
      return Object.fromEntries(Dk.filter((kk => {
        let [, ik] = kk;
        return ek(ik)
      })))
    }
  },
  50577: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Uk,
      f: () => yk,
      h: () => pk
    });
    var Dk = ik(996),
      fk = ik(2107),
      Sk = ik(3206),
      bk = ik(3218),
      rk = ik(33828),
      Pk = ik(33819),
      mk = ik(50568),
      Mk = ik(40581),
      Kk = ik(40560),
      xk = ik(4977);
    const nk = {
      pack: null,
      gameSource: null
    };
    class Uk {
      constructor(kk) {
        this.host = kk, this.ready = void 0, this.state = nk, this.playerPack = null, this.onGamePack = !1, this.confirmGamePack = null, this.skippedKey = null, this.ownAnnouncements = new Set, this.listeners = new Map, this.ownListeners = new Set, this.changes = 0, this.picks = 0, this.playerPicked = !1, this.ownChanges = 0, this.aU = !1, (0, bk.p)(), this.ready = this.readStored()
      }
      readyWithin(kk) {
        return Promise.race([this.ready, new Promise((ek => {
          setTimeout(ek, kk)
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
        return (0, Kk.g)(this.state, kk)
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
        const ek = wk(kk) ? null : kk;
        this.picks++, this.playerPicked = !0, this.ownChanges++, this.setOwn(ek), this.change({
          pack: ek,
          gameSource: null
        }, !1);
        const ik = await this.storePlayerPack(ek);
        return ik && this.announce(), ik
      }
      async packForGame(kk, ek, ik) {
        await this.readyWithin(Math.max(0, (null !== ik && void 0 !== ik ? ik : performance.now() + Mk.b) - performance.now()));
        const fk = ++this.picks,
          Sk = (0, Dk.j)(kk) ? (0, Dk.p)(kk) : null;
        if (null === Sk) return void this.usePlayerPack();
        let bk;
        const rk = function(kk) {
          let ek;
          const ik = new Promise(((ik, Dk) => {
            ek = setTimeout((() => {
              Dk(new Error(`no answer in ${kk} ms`))
            }), kk)
          }));
          return ik.catch((() => {})), {
            passed: ik,
            clear: () => {
              clearTimeout(ek)
            }
          }
        }(2e4);
        try {
          const kk = await Promise.race([ek.packKey(Sk), rk.passed]);
          if (null !== kk && this.onGamePack && this.state.gameSource === kk) return;
          if (null !== kk && kk === this.skippedKey) return void(this.aU || this.picks !== fk || this.usePlayerPack());
          bk = null === kk ? null : await Promise.race([Hk(Sk, kk, ek), rk.passed])
        } catch (Kk) {
          const kk = !this.aU && this.picks === fk && this.holdsOtherGamePack(Sk);
          return this.host.warn(`the texture pack of ${Sk} didn't load: ${kk?"the player's own shows":"the pack in play stays"}`, Kk), void(kk && this.usePlayerPack())
        } finally {
          rk.clear()
        }
        if (this.aU || this.picks !== fk) return;
        null !== bk && (0, mk.f)(bk.pack) && (this.host.warn(`the texture pack of ${Sk} names files on other sites: the player's own shows`, null), bk = null);
        const Pk = null === bk || await this.confirmed(bk.pack, Sk) ? null : bk.key;
        this.aU || this.picks !== fk || (null !== Pk && (this.skippedKey = Pk, bk = null), null === bk ? this.usePlayerPack() : (this.onGamePack = !0, this.change({
          pack: bk.pack,
          gameSource: bk.key
        }, !0)))
      }
      endGamePack() {
        this.picks++, this.usePlayerPack()
      }
      holdsOtherGamePack(kk) {
        return this.onGamePack && "" !== this.state.gameSource && !this.isUsingCustomGameTexturePack(kk)
      }
      async confirmed(kk, ek) {
        const ik = this.confirmGamePack;
        if (null === ik) return !0;
        try {
          return await ik(kk, ek)
        } catch (Dk) {
          return this.host.warn(`the texture pack prompt of ${ek} failed: the pack is skipped`, Dk), !1
        }
      }
      async readPlayerPack() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (null !== kk && this.ownAnnouncements.delete(kk)) return;
        await this.ready;
        const ek = this.ownChanges;
        let ik;
        try {
          ik = await this.host.store.getItem(bk.e, !0)
        } catch (fk) {
          return void this.host.warn("the stored texture pack didn't read again: the pack in play stays", fk)
        }
        if (this.aU || this.ownChanges !== ek) return;
        const Dk = lk(ik);
        (0, xk.e)(Dk, this.playerPack) || (this.ownChanges++, this.setOwn(Dk), this.onGamePack || this.change({
          pack: Dk,
          gameSource: null
        }, !1))
      }
      joinedWithout() {
        this.picks++
      }
      dispose() {
        this.aU = !0, this.listeners.clear()
      }
      async readStored() {
        const {
          store: kk,
          warn: ek
        } = this.host;
        await Promise.all([!1 === this.host.oneShot ? void 0 : (0, Pk.f)(kk, !0, (kk => {
          ek("the custom game's texture pack wasn't removed from storage", kk)
        })).then((kk => {
          this.takeOneShot(kk)
        }), (kk => {
          ek("the custom game's texture pack didn't read: the player's own shows", kk)
        })), kk.getItem(bk.e, !0).then((kk => {
          this.takeStoredOwn(kk)
        }), (kk => {
          ek("the stored texture pack didn't read: the default pack shows", kk), this.takeStoredOwn(null)
        }))]), this.update()
      }
      takeOneShot(kk) {
        var ek;
        null === kk || this.aU || this.changes > 0 || this.picks > 0 || ((0, mk.f)(kk.pack) ? this.host.warn("the custom game's texture pack names files on other sites: the player's own shows", null) : (this.onGamePack = !0, this.state = {
          pack: kk.pack,
          gameSource: null !== (ek = kk.source) && void 0 !== ek ? ek : ""
        }))
      }
      takeStoredOwn(kk) {
        if (this.playerPicked || this.aU) return;
        if (this.ownChanges++, this.setOwn(lk(kk)), this.onGamePack) return;
        const ek = {
          pack: this.playerPack,
          gameSource: null
        };
        0 === this.changes ? this.state = ek : this.change(ek, !1)
      }
      async update() {
        const kk = this.playerPack,
          ek = null === kk || void 0 === kk ? void 0 : kk.metaData.id;
        if (!kk || !ek || !this.host.fetchLatest || ek === fk.d || ek === fk.u.CUSTOM) return;
        const ik = fk.v[ek];
        if (void 0 === ik || kk.metaData.version >= ik) return;
        let Dk;
        try {
          Dk = lk(await this.host.fetchLatest(ek))
        } catch (Sk) {
          return void this.host.warn(`texture pack ${ek} didn't update to version ${ik}`, Sk)
        }
        null === Dk || this.aU || this.playerPack !== kk || (this.ownChanges++, this.setOwn(Dk), this.onGamePack || this.change({
          pack: Dk,
          gameSource: null
        }, !1), await this.storePlayerPack(Dk) && this.announce())
      }
      announce() {
        const kk = (0, rk.b)();
        null !== kk && this.ownAnnouncements.add(kk)
      }
      setOwn(kk) {
        this.playerPack = kk;
        for (const ik of [...this.ownListeners]) try {
          ik()
        } catch (ek) {
          this.host.warn("a texture pack listener threw", ek)
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
          return null === kk ? (await this.host.store.removeItem(bk.e), !0) : await this.host.store.setItem(bk.e, kk)
        } catch (ek) {
          return this.host.warn("the texture pack wasn't stored: it shows until the page reloads", ek), !1
        }
      }
      change(kk, ek) {
        if (!this.aU) {
          this.changes++, this.onGamePack = ek, this.state = kk;
          for (const kk of [...this.listeners.keys()]) this.deliver(kk)
        }
      }
      deliver(kk) {
        if (!this.aU && this.listeners.has(kk) && this.listeners.get(kk) !== this.state) {
          this.listeners.set(kk, this.state);
          try {
            kk(this.state)
          } catch (ek) {
            this.host.warn("a texture pack listener threw", ek)
          }
        }
      }
    }
    async function Hk(kk, ek, ik) {
      const Dk = (0, Pk.b)(await ik.fetchPack(ek));
      if (null !== Dk) return {
        pack: Dk,
        key: ek
      };
      const fk = await ik.packKey(kk);
      if (null === fk) return null;
      const Sk = (0, Pk.b)(await ik.fetchPack(fk));
      if (null === Sk) throw new Error(`no texture pack at ${fk}`);
      return {
        pack: Sk,
        key: fk
      }
    }

    function wk(kk) {
      return null === kk || kk.metaData.id === fk.d
    }

    function lk(kk) {
      const ek = (0, Pk.b)(kk);
      return wk(ek) ? null : ek
    }
    async function pk(kk) {
      let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Sk.b;
      if (null === kk.pack) return null;
      const {
        packAssets: Dk
      } = await Promise.all([ik.e(205), ik.e(44)]).then((() => ik(60883)));
      return Dk(kk, ek)
    }

    function yk(kk) {
      const ek = (0, bk.w)();
      return null === ek ? () => {} : (ek.onmessage = ek => {
        kk.readPlayerPack((0, rk.d)(ek.data))
      }, () => {
        ek.close()
      })
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);