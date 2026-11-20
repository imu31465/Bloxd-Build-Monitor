export const id = 193;
export const ids = [193];
export const modules = {
  9123: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Ku,
      d: () => Qu
    });
    var Eu = yu(3077);

    function Ku() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const uu = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const Ru = new BroadcastChannel(Eu.l);
        Ru.postMessage({
          stored: uu
        }), Ru.close()
      } catch {
        return null
      }
      return uu
    }

    function Qu(uu) {
      const Ru = "object" === typeof uu && null !== uu ? uu.stored : null;
      return "string" === typeof Ru ? Ru : null
    }
  },
  9116: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => mu,
      h: () => Ku,
      i: () => Qu
    });
    var Eu = yu(3077);
    async function Ku(uu, Ru, yu) {
      let Ku = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const Qu = mu(await uu.getItem(Eu.f, Ru));
      if (null === Qu || Ku()) return null;
      const Ju = await uu.getItem(Eu.h, Ru);
      return Ku() ? null : (await async function(uu) {
        await Promise.all([uu.removeItem(Eu.f), uu.removeItem(Eu.h)])
      }(uu).catch(yu), {
        pack: Qu,
        source: "string" === typeof Ju ? Ju : null
      })
    }

    function Qu(uu) {
      return (0, Eu.p)() ? Promise.resolve(null) : Ku(uu, !1, (uu => {
        console.error("Error removing temporary texture pack: ", uu)
      }), Eu.p)
    }

    function mu(uu) {
      if ("object" !== typeof uu || null === uu) return null;
      const Ru = uu.metaData;
      return "object" !== typeof Ru || null === Ru || "string" !== typeof Ru.id ? null : uu
    }
  },
  42902: (uu, Ru, yu) => {
    function Eu(uu) {
      return null === uu.gameSource ? "player" : "customGame"
    }
    yu.d(Ru, {
      d: () => Qu,
      f: () => pu,
      g: () => Su,
      h: () => Eu
    });
    const Ku = /^data:[\w.+/-]*;base64,[A-Za-z0-9+/]*={0,2}$/;

    function Qu(uu) {
      return "" === uu || "string" === typeof uu && Ku.test(uu)
    }

    function mu(uu) {
      return "object" === typeof uu && null !== uu && ("earth" === uu.type || Object.entries(uu).every((uu => {
        let [Ru, yu] = uu;
        return "type" === Ru || Qu(yu)
      })))
    }
    const Ju = /(?:src|image|image-set|cross-fade)\(/i,
      Nu = /url\(\s*(?:"(?<doubleQuoted>[^"]*)"|'(?<singleQuoted>[^']*)'|(?<unquoted>[^"'()\s]*))\s*\)/gi,
      Xu = /url\(/gi,
      Vu = ["https://bloxd.invalid/", "http://bloxd.invalid/"],
      ru = new Set([...Vu.map((uu => new URL(uu).origin)), "https://fonts.gstatic.com"]),
      Bu = new Set(["https://i.imgur.com/MEcjBFQ.png"]);

    function xu(uu) {
      var Ru, yu;
      if (uu.includes("\\") || Ju.test(uu)) return !0;
      const Eu = [...uu.matchAll(Nu)];
      return Eu.length !== (null !== (Ru = null === (yu = uu.match(Xu)) || void 0 === yu ? void 0 : yu.length) && void 0 !== Ru ? Ru : 0) || !Eu.every((uu => {
        var Ru, yu, Eu;
        let {
          groups: Ku
        } = uu;
        return function(uu) {
          try {
            return Vu.every((Ru => {
              const yu = new URL(uu, Ru);
              return "data:" === yu.protocol || ru.has(yu.origin) || Bu.has(yu.href)
            }))
          } catch {
            return !1
          }
        }(null !== (Ru = null !== (yu = null !== (Eu = null === Ku || void 0 === Ku ? void 0 : Ku.doubleQuoted) && void 0 !== Eu ? Eu : null === Ku || void 0 === Ku ? void 0 : Ku.singleQuoted) && void 0 !== yu ? yu : null === Ku || void 0 === Ku ? void 0 : Ku.unquoted) && void 0 !== Ru ? Ru : "")
      }))
    }

    function Su(uu) {
      var Ru, yu, Eu, Ku, Ju, Nu, Xu;
      const Vu = [...Object.values(null !== (Ru = uu.textureOverrides) && void 0 !== Ru ? Ru : {}), ...Object.values(null !== (yu = uu.modelOverrides) && void 0 !== yu ? yu : {})],
        ru = [...Object.values(null !== (Eu = null === (Ku = uu.customCss) || void 0 === Ku ? void 0 : Ku.fontFaces) && void 0 !== Eu ? Eu : {}), ...Object.values(null !== (Ju = null === (Nu = uu.customCss) || void 0 === Nu ? void 0 : Nu.classStyles) && void 0 !== Ju ? Ju : {})].flatMap((uu => Object.values(null !== uu && void 0 !== uu ? uu : {})));
      return !Vu.every(Qu) || !Object.values(null !== (Xu = uu.skyBoxes) && void 0 !== Xu ? Xu : {}).every(mu) || ru.some((uu => "string" === typeof uu && xu(uu)))
    }

    function pu(uu, Ru) {
      if (null === uu || "player" === Ru || !Su(uu)) return uu;
      const yu = {
        ...uu
      };
      return uu.textureOverrides && (yu.textureOverrides = Wu(uu.textureOverrides, Qu, "texture")), uu.modelOverrides && (yu.modelOverrides = Wu(uu.modelOverrides, Qu, "model")), uu.skyBoxes && (yu.skyBoxes = Wu(uu.skyBoxes, mu, "sky")), uu.customCss && (yu.customCss = function(uu) {
        const Ru = uu => Wu(uu, (uu => "string" === typeof uu && !xu(uu)), "CSS"),
          {
            fontFaces: yu,
            classStyles: Eu
          } = Tu(uu) ? uu : {},
          Ku = {};
        for (const [Qu, mu] of Object.entries(Tu(Eu) ? Eu : {})) Ku[Qu] = Ru(mu);
        return {
          fontFaces: (Array.isArray(yu) ? yu : []).map(Ru),
          classStyles: Ku
        }
      }(uu.customCss)), yu
    }

    function Tu(uu) {
      return "object" === typeof uu && null !== uu && !Array.isArray(uu)
    }

    function Wu(uu, Ru, yu) {
      const Eu = Object.entries(Tu(uu) ? uu : {}),
        Ku = Eu.filter((uu => {
          let [, yu] = uu;
          return !Ru(yu)
        }));
      if (Ku.length > 0) {
        const uu = Ku.map((uu => {
          let [Ru] = uu;
          return Ru
        }));
        console.warn(`Ignoring a custom game texture pack's ${yu} files that name another site: ${uu.join(", ")}`)
      }
      return Object.fromEntries(Eu.filter((uu => {
        let [, yu] = uu;
        return Ru(yu)
      })))
    }
  },
  42910: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Su,
      g: () => Hu,
      k: () => ju
    });
    var Eu = yu(1001),
      Ku = yu(2950),
      Qu = yu(3062),
      mu = yu(3077),
      Ju = yu(9123),
      Nu = yu(9116),
      Xu = yu(42902),
      Vu = yu(40621),
      ru = yu(40613),
      Bu = yu(4836);
    const xu = {
      pack: null,
      gameSource: null
    };
    class Su {
      constructor(uu) {
        this.host = uu, this.ready = void 0, this.state = xu, this.playerPack = null, this.onGamePack = !1, this.confirmGamePack = null, this.skippedKey = null, this.ownAnnouncements = new Set, this.listeners = new Map, this.ownListeners = new Set, this.changes = 0, this.picks = 0, this.playerPicked = !1, this.ownChanges = 0, this.VS = !1, (0, mu.n)(), this.ready = this.readStored()
      }
      readyWithin(uu) {
        return Promise.race([this.ready, new Promise((Ru => {
          setTimeout(Ru, uu)
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
      onPlayerPackChange(uu) {
        return this.ownListeners.add(uu), () => {
          this.ownListeners.delete(uu)
        }
      }
      isUsingCustomGameTexturePack(uu) {
        return (0, ru.d)(this.state, uu)
      }
      setGamePackConfirm(uu) {
        this.confirmGamePack = uu
      }
      subscribe(uu) {
        return this.listeners.set(uu, null), this.ready.then((() => {
          this.deliver(uu)
        })), () => {
          this.listeners.delete(uu)
        }
      }
      async setPlayerPack(uu) {
        const Ru = Tu(uu) ? null : uu;
        this.picks++, this.playerPicked = !0, this.ownChanges++, this.setOwn(Ru), this.change({
          pack: Ru,
          gameSource: null
        }, !1);
        const yu = await this.storePlayerPack(Ru);
        return yu && this.announce(), yu
      }
      async packForGame(uu, Ru, yu) {
        await this.readyWithin(Math.max(0, (null !== yu && void 0 !== yu ? yu : performance.now() + Vu.b) - performance.now()));
        const Ku = ++this.picks,
          Qu = (0, Eu.i)(uu) ? (0, Eu.n)(uu) : null;
        if (null === Qu) return void this.usePlayerPack();
        let mu;
        const Ju = function(uu) {
          let Ru;
          const yu = new Promise(((yu, Eu) => {
            Ru = setTimeout((() => {
              Eu(new Error(`no answer in ${uu} ms`))
            }), uu)
          }));
          return yu.catch((() => {})), {
            passed: yu,
            clear: () => {
              clearTimeout(Ru)
            }
          }
        }(2e4);
        try {
          const uu = await Promise.race([Ru.packKey(Qu), Ju.passed]);
          if (null !== uu && this.onGamePack && this.state.gameSource === uu) return;
          if (null !== uu && uu === this.skippedKey) return void(this.VS || this.picks !== Ku || this.usePlayerPack());
          mu = null === uu ? null : await Promise.race([pu(Qu, uu, Ru), Ju.passed])
        } catch (ru) {
          const uu = !this.VS && this.picks === Ku && this.holdsOtherGamePack(Qu);
          return this.host.warn(`the texture pack of ${Qu} didn't load: ${uu?"the player's own shows":"the pack in play stays"}`, ru), void(uu && this.usePlayerPack())
        } finally {
          Ju.clear()
        }
        if (this.VS || this.picks !== Ku) return;
        null !== mu && (0, Xu.g)(mu.pack) && (this.host.warn(`the texture pack of ${Qu} names files on other sites: the player's own shows`, null), mu = null);
        const Nu = null === mu || await this.confirmed(mu.pack, Qu) ? null : mu.key;
        this.VS || this.picks !== Ku || (null !== Nu && (this.skippedKey = Nu, mu = null), null === mu ? this.usePlayerPack() : (this.onGamePack = !0, this.change({
          pack: mu.pack,
          gameSource: mu.key
        }, !0)))
      }
      endGamePack() {
        this.picks++, this.usePlayerPack()
      }
      holdsOtherGamePack(uu) {
        return this.onGamePack && "" !== this.state.gameSource && !this.isUsingCustomGameTexturePack(uu)
      }
      async confirmed(uu, Ru) {
        const yu = this.confirmGamePack;
        if (null === yu) return !0;
        try {
          return await yu(uu, Ru)
        } catch (Eu) {
          return this.host.warn(`the texture pack prompt of ${Ru} failed: the pack is skipped`, Eu), !1
        }
      }
      async readPlayerPack() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (null !== uu && this.ownAnnouncements.delete(uu)) return;
        await this.ready;
        const Ru = this.ownChanges;
        let yu;
        try {
          yu = await this.host.store.getItem(mu.b, !0)
        } catch (Ku) {
          return void this.host.warn("the stored texture pack didn't read again: the pack in play stays", Ku)
        }
        if (this.VS || this.ownChanges !== Ru) return;
        const Eu = Wu(yu);
        (0, Bu.e)(Eu, this.playerPack) || (this.ownChanges++, this.setOwn(Eu), this.onGamePack || this.change({
          pack: Eu,
          gameSource: null
        }, !1))
      }
      joinedWithout() {
        this.picks++
      }
      dispose() {
        this.VS = !0, this.listeners.clear()
      }
      async readStored() {
        const {
          store: uu,
          warn: Ru
        } = this.host;
        await Promise.all([!1 === this.host.oneShot ? void 0 : (0, Nu.h)(uu, !0, (uu => {
          Ru("the custom game's texture pack wasn't removed from storage", uu)
        })).then((uu => {
          this.takeOneShot(uu)
        }), (uu => {
          Ru("the custom game's texture pack didn't read: the player's own shows", uu)
        })), uu.getItem(mu.b, !0).then((uu => {
          this.takeStoredOwn(uu)
        }), (uu => {
          Ru("the stored texture pack didn't read: the default pack shows", uu), this.takeStoredOwn(null)
        }))]), this.update()
      }
      takeOneShot(uu) {
        var Ru;
        null === uu || this.VS || this.changes > 0 || this.picks > 0 || ((0, Xu.g)(uu.pack) ? this.host.warn("the custom game's texture pack names files on other sites: the player's own shows", null) : (this.onGamePack = !0, this.state = {
          pack: uu.pack,
          gameSource: null !== (Ru = uu.source) && void 0 !== Ru ? Ru : ""
        }))
      }
      takeStoredOwn(uu) {
        if (this.playerPicked || this.VS) return;
        if (this.ownChanges++, this.setOwn(Wu(uu)), this.onGamePack) return;
        const Ru = {
          pack: this.playerPack,
          gameSource: null
        };
        0 === this.changes ? this.state = Ru : this.change(Ru, !1)
      }
      async update() {
        const uu = this.playerPack,
          Ru = null === uu || void 0 === uu ? void 0 : uu.metaData.id;
        if (!uu || !Ru || !this.host.fetchLatest || Ru === Ku.e || Ru === Ku.r.CUSTOM) return;
        const yu = Ku.t[Ru];
        if (void 0 === yu || uu.metaData.version >= yu) return;
        let Eu;
        try {
          Eu = Wu(await this.host.fetchLatest(Ru))
        } catch (Qu) {
          return void this.host.warn(`texture pack ${Ru} didn't update to version ${yu}`, Qu)
        }
        null === Eu || this.VS || this.playerPack !== uu || (this.ownChanges++, this.setOwn(Eu), this.onGamePack || this.change({
          pack: Eu,
          gameSource: null
        }, !1), await this.storePlayerPack(Eu) && this.announce())
      }
      announce() {
        const uu = (0, Ju.c)();
        null !== uu && this.ownAnnouncements.add(uu)
      }
      setOwn(uu) {
        this.playerPack = uu;
        for (const yu of [...this.ownListeners]) try {
          yu()
        } catch (Ru) {
          this.host.warn("a texture pack listener threw", Ru)
        }
      }
      usePlayerPack() {
        this.onGamePack && this.change({
          pack: this.playerPack,
          gameSource: null
        }, !1)
      }
      async storePlayerPack(uu) {
        try {
          return null === uu ? (await this.host.store.removeItem(mu.b), !0) : await this.host.store.setItem(mu.b, uu)
        } catch (Ru) {
          return this.host.warn("the texture pack wasn't stored: it shows until the page reloads", Ru), !1
        }
      }
      change(uu, Ru) {
        if (!this.VS) {
          this.changes++, this.onGamePack = Ru, this.state = uu;
          for (const uu of [...this.listeners.keys()]) this.deliver(uu)
        }
      }
      deliver(uu) {
        if (!this.VS && this.listeners.has(uu) && this.listeners.get(uu) !== this.state) {
          this.listeners.set(uu, this.state);
          try {
            uu(this.state)
          } catch (Ru) {
            this.host.warn("a texture pack listener threw", Ru)
          }
        }
      }
    }
    async function pu(uu, Ru, yu) {
      const Eu = (0, Nu.d)(await yu.fetchPack(Ru));
      if (null !== Eu) return {
        pack: Eu,
        key: Ru
      };
      const Ku = await yu.packKey(uu);
      if (null === Ku) return null;
      const Qu = (0, Nu.d)(await yu.fetchPack(Ku));
      if (null === Qu) throw new Error(`no texture pack at ${Ku}`);
      return {
        pack: Qu,
        key: Ku
      }
    }

    function Tu(uu) {
      return null === uu || uu.metaData.id === Ku.e
    }

    function Wu(uu) {
      const Ru = (0, Nu.d)(uu);
      return Tu(Ru) ? null : Ru
    }
    async function ju(uu) {
      let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Qu.b;
      if (null === uu.pack) return null;
      const {
        packAssets: Eu
      } = await Promise.all([yu.e(195), yu.e(44)]).then((() => yu(61364)));
      return Eu(uu, Ru)
    }

    function Hu(uu) {
      const Ru = (0, mu.t)();
      return null === Ru ? () => {} : (Ru.onmessage = Ru => {
        uu.readPlayerPack((0, Ju.d)(Ru.data))
      }, () => {
        Ru.close()
      })
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);