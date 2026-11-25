export const id = 204;
export const ids = [204];
export const modules = {
  34606: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Uu,
      f: () => Zu
    });
    var su = ju(3427);

    function Uu() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const uu = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const Eu = new BroadcastChannel(su.i);
        Eu.postMessage({
          stored: uu
        }), Eu.close()
      } catch {
        return null
      }
      return uu
    }

    function Zu(uu) {
      const Eu = "object" === typeof uu && null !== uu ? uu.stored : null;
      return "string" === typeof Eu ? Eu : null
    }
  },
  34599: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Xu,
      f: () => Uu,
      h: () => Zu
    });
    var su = ju(3427);
    async function Uu(uu, Eu, ju) {
      let Uu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const Zu = Xu(await uu.getItem(su.d, Eu));
      if (null === Zu || Uu()) return null;
      const lu = await uu.getItem(su.g, Eu);
      return Uu() ? null : (await async function(uu) {
        await Promise.all([uu.removeItem(su.d), uu.removeItem(su.g)])
      }(uu).catch(ju), {
        pack: Zu,
        source: "string" === typeof lu ? lu : null
      })
    }

    function Zu(uu) {
      return (0, su.t)() ? Promise.resolve(null) : Uu(uu, !1, (uu => {
        console.error("Error removing temporary texture pack: ", uu)
      }), su.t)
    }

    function Xu(uu) {
      if ("object" !== typeof uu || null === uu) return null;
      const Eu = uu.metaData;
      return "object" !== typeof Eu || null === Eu || "string" !== typeof Eu.id ? null : uu
    }
  },
  51278: (uu, Eu, ju) => {
    function su(uu) {
      return null === uu.gameSource ? "player" : "customGame"
    }
    ju.d(Eu, {
      d: () => Zu,
      g: () => Yu,
      i: () => Ou,
      k: () => su
    });
    const Uu = /^data:[\w.+/-]*;base64,[A-Za-z0-9+/]*={0,2}$/;

    function Zu(uu) {
      return "" === uu || "string" === typeof uu && Uu.test(uu)
    }

    function Xu(uu) {
      return "object" === typeof uu && null !== uu && ("earth" === uu.type || Object.entries(uu).every((uu => {
        let [Eu, ju] = uu;
        return "type" === Eu || Zu(ju)
      })))
    }
    const lu = /(?:src|image|image-set|cross-fade)\(/i,
      qu = /url\(\s*(?:"(?<doubleQuoted>[^"]*)"|'(?<singleQuoted>[^']*)'|(?<unquoted>[^"'()\s]*))\s*\)/gi,
      fu = /url\(/gi,
      Cu = ["https://bloxd.invalid/", "http://bloxd.invalid/"],
      bu = new Set([...Cu.map((uu => new URL(uu).origin)), "https://fonts.gstatic.com"]),
      cu = new Set(["https://i.imgur.com/MEcjBFQ.png"]);

    function Nu(uu) {
      var Eu, ju;
      if (uu.includes("\\") || lu.test(uu)) return !0;
      const su = [...uu.matchAll(qu)];
      return su.length !== (null !== (Eu = null === (ju = uu.match(fu)) || void 0 === ju ? void 0 : ju.length) && void 0 !== Eu ? Eu : 0) || !su.every((uu => {
        var Eu, ju, su;
        let {
          groups: Uu
        } = uu;
        return function(uu) {
          try {
            return Cu.every((Eu => {
              const ju = new URL(uu, Eu);
              return "data:" === ju.protocol || bu.has(ju.origin) || cu.has(ju.href)
            }))
          } catch {
            return !1
          }
        }(null !== (Eu = null !== (ju = null !== (su = null === Uu || void 0 === Uu ? void 0 : Uu.doubleQuoted) && void 0 !== su ? su : null === Uu || void 0 === Uu ? void 0 : Uu.singleQuoted) && void 0 !== ju ? ju : null === Uu || void 0 === Uu ? void 0 : Uu.unquoted) && void 0 !== Eu ? Eu : "")
      }))
    }

    function Ou(uu) {
      var Eu, ju, su, Uu, lu, qu, fu;
      const Cu = [...Object.values(null !== (Eu = uu.textureOverrides) && void 0 !== Eu ? Eu : {}), ...Object.values(null !== (ju = uu.modelOverrides) && void 0 !== ju ? ju : {})],
        bu = [...Object.values(null !== (su = null === (Uu = uu.customCss) || void 0 === Uu ? void 0 : Uu.fontFaces) && void 0 !== su ? su : {}), ...Object.values(null !== (lu = null === (qu = uu.customCss) || void 0 === qu ? void 0 : qu.classStyles) && void 0 !== lu ? lu : {})].flatMap((uu => Object.values(null !== uu && void 0 !== uu ? uu : {})));
      return !Cu.every(Zu) || !Object.values(null !== (fu = uu.skyBoxes) && void 0 !== fu ? fu : {}).every(Xu) || bu.some((uu => "string" === typeof uu && Nu(uu)))
    }

    function Yu(uu, Eu) {
      if (null === uu || "player" === Eu || !Ou(uu)) return uu;
      const ju = {
        ...uu
      };
      return uu.textureOverrides && (ju.textureOverrides = Du(uu.textureOverrides, Zu, "texture")), uu.modelOverrides && (ju.modelOverrides = Du(uu.modelOverrides, Zu, "model")), uu.skyBoxes && (ju.skyBoxes = Du(uu.skyBoxes, Xu, "sky")), uu.customCss && (ju.customCss = function(uu) {
        const Eu = uu => Du(uu, (uu => "string" === typeof uu && !Nu(uu)), "CSS"),
          {
            fontFaces: ju,
            classStyles: su
          } = hu(uu) ? uu : {},
          Uu = {};
        for (const [Zu, Xu] of Object.entries(hu(su) ? su : {})) Uu[Zu] = Eu(Xu);
        return {
          fontFaces: (Array.isArray(ju) ? ju : []).map(Eu),
          classStyles: Uu
        }
      }(uu.customCss)), ju
    }

    function hu(uu) {
      return "object" === typeof uu && null !== uu && !Array.isArray(uu)
    }

    function Du(uu, Eu, ju) {
      const su = Object.entries(hu(uu) ? uu : {}),
        Uu = su.filter((uu => {
          let [, ju] = uu;
          return !Eu(ju)
        }));
      if (Uu.length > 0) {
        const uu = Uu.map((uu => {
          let [Eu] = uu;
          return Eu
        }));
        console.warn(`Ignoring a custom game texture pack's ${ju} files that name another site: ${uu.join(", ")}`)
      }
      return Object.fromEntries(su.filter((uu => {
        let [, ju] = uu;
        return Eu(ju)
      })))
    }
  },
  51284: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Ou,
      g: () => Mu,
      k: () => gu
    });
    var su = ju(1069),
      Uu = ju(2239),
      Zu = ju(3416),
      Xu = ju(3427),
      lu = ju(34606),
      qu = ju(34599),
      fu = ju(51278),
      Cu = ju(41209),
      bu = ju(41188),
      cu = ju(5230);
    const Nu = {
      pack: null,
      gameSource: null
    };
    class Ou {
      constructor(uu) {
        this.host = uu, this.ready = void 0, this.state = Nu, this.playerPack = null, this.onGamePack = !1, this.confirmGamePack = null, this.skippedKey = null, this.ownAnnouncements = new Set, this.listeners = new Map, this.ownListeners = new Set, this.changes = 0, this.picks = 0, this.playerPicked = !1, this.ownChanges = 0, this.fO = !1, (0, Xu.m)(), this.ready = this.readStored()
      }
      readyWithin(uu) {
        return Promise.race([this.ready, new Promise((Eu => {
          setTimeout(Eu, uu)
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
        return (0, bu.f)(this.state, uu)
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
        const Eu = hu(uu) ? null : uu;
        this.picks++, this.playerPicked = !0, this.ownChanges++, this.setOwn(Eu), this.change({
          pack: Eu,
          gameSource: null
        }, !1);
        const ju = await this.storePlayerPack(Eu);
        return ju && this.announce(), ju
      }
      async packForGame(uu, Eu, ju) {
        await this.readyWithin(Math.max(0, (null !== ju && void 0 !== ju ? ju : performance.now() + Cu.d) - performance.now()));
        const Uu = ++this.picks,
          Zu = (0, su.l)(uu) ? (0, su.q)(uu) : null;
        if (null === Zu) return void this.usePlayerPack();
        let Xu;
        const lu = function(uu) {
          let Eu;
          const ju = new Promise(((ju, su) => {
            Eu = setTimeout((() => {
              su(new Error(`no answer in ${uu} ms`))
            }), uu)
          }));
          return ju.catch((() => {})), {
            passed: ju,
            clear: () => {
              clearTimeout(Eu)
            }
          }
        }(2e4);
        try {
          const uu = await Promise.race([Eu.packKey(Zu), lu.passed]);
          if (null !== uu && this.onGamePack && this.state.gameSource === uu) return;
          if (null !== uu && uu === this.skippedKey) return void(this.fO || this.picks !== Uu || this.usePlayerPack());
          Xu = null === uu ? null : await Promise.race([Yu(Zu, uu, Eu), lu.passed])
        } catch (bu) {
          const uu = !this.fO && this.picks === Uu && this.holdsOtherGamePack(Zu);
          return this.host.warn(`the texture pack of ${Zu} didn't load: ${uu?"the player's own shows":"the pack in play stays"}`, bu), void(uu && this.usePlayerPack())
        } finally {
          lu.clear()
        }
        if (this.fO || this.picks !== Uu) return;
        null !== Xu && (0, fu.i)(Xu.pack) && (this.host.warn(`the texture pack of ${Zu} names files on other sites: the player's own shows`, null), Xu = null);
        const qu = null === Xu || await this.confirmed(Xu.pack, Zu) ? null : Xu.key;
        this.fO || this.picks !== Uu || (null !== qu && (this.skippedKey = qu, Xu = null), null === Xu ? this.usePlayerPack() : (this.onGamePack = !0, this.change({
          pack: Xu.pack,
          gameSource: Xu.key
        }, !0)))
      }
      endGamePack() {
        this.picks++, this.usePlayerPack()
      }
      holdsOtherGamePack(uu) {
        return this.onGamePack && "" !== this.state.gameSource && !this.isUsingCustomGameTexturePack(uu)
      }
      async confirmed(uu, Eu) {
        const ju = this.confirmGamePack;
        if (null === ju) return !0;
        try {
          return await ju(uu, Eu)
        } catch (su) {
          return this.host.warn(`the texture pack prompt of ${Eu} failed: the pack is skipped`, su), !1
        }
      }
      async readPlayerPack() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (null !== uu && this.ownAnnouncements.delete(uu)) return;
        await this.ready;
        const Eu = this.ownChanges;
        let ju;
        try {
          ju = await this.host.store.getItem(Xu.c, !0)
        } catch (Uu) {
          return void this.host.warn("the stored texture pack didn't read again: the pack in play stays", Uu)
        }
        if (this.fO || this.ownChanges !== Eu) return;
        const su = Du(ju);
        (0, cu.c)(su, this.playerPack) || (this.ownChanges++, this.setOwn(su), this.onGamePack || this.change({
          pack: su,
          gameSource: null
        }, !1))
      }
      joinedWithout() {
        this.picks++
      }
      dispose() {
        this.fO = !0, this.listeners.clear()
      }
      async readStored() {
        const {
          store: uu,
          warn: Eu
        } = this.host;
        await Promise.all([!1 === this.host.oneShot ? void 0 : (0, qu.f)(uu, !0, (uu => {
          Eu("the custom game's texture pack wasn't removed from storage", uu)
        })).then((uu => {
          this.takeOneShot(uu)
        }), (uu => {
          Eu("the custom game's texture pack didn't read: the player's own shows", uu)
        })), uu.getItem(Xu.c, !0).then((uu => {
          this.takeStoredOwn(uu)
        }), (uu => {
          Eu("the stored texture pack didn't read: the default pack shows", uu), this.takeStoredOwn(null)
        }))]), this.update()
      }
      takeOneShot(uu) {
        var Eu;
        null === uu || this.fO || this.changes > 0 || this.picks > 0 || ((0, fu.i)(uu.pack) ? this.host.warn("the custom game's texture pack names files on other sites: the player's own shows", null) : (this.onGamePack = !0, this.state = {
          pack: uu.pack,
          gameSource: null !== (Eu = uu.source) && void 0 !== Eu ? Eu : ""
        }))
      }
      takeStoredOwn(uu) {
        if (this.playerPicked || this.fO) return;
        if (this.ownChanges++, this.setOwn(Du(uu)), this.onGamePack) return;
        const Eu = {
          pack: this.playerPack,
          gameSource: null
        };
        0 === this.changes ? this.state = Eu : this.change(Eu, !1)
      }
      async update() {
        const uu = this.playerPack,
          Eu = null === uu || void 0 === uu ? void 0 : uu.metaData.id;
        if (!uu || !Eu || !this.host.fetchLatest || Eu === Uu.e || Eu === Uu.p.CUSTOM) return;
        const ju = Uu.q[Eu];
        if (void 0 === ju || uu.metaData.version >= ju) return;
        let su;
        try {
          su = Du(await this.host.fetchLatest(Eu))
        } catch (Zu) {
          return void this.host.warn(`texture pack ${Eu} didn't update to version ${ju}`, Zu)
        }
        null === su || this.fO || this.playerPack !== uu || (this.ownChanges++, this.setOwn(su), this.onGamePack || this.change({
          pack: su,
          gameSource: null
        }, !1), await this.storePlayerPack(su) && this.announce())
      }
      announce() {
        const uu = (0, lu.e)();
        null !== uu && this.ownAnnouncements.add(uu)
      }
      setOwn(uu) {
        this.playerPack = uu;
        for (const ju of [...this.ownListeners]) try {
          ju()
        } catch (Eu) {
          this.host.warn("a texture pack listener threw", Eu)
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
          return null === uu ? (await this.host.store.removeItem(Xu.c), !0) : await this.host.store.setItem(Xu.c, uu)
        } catch (Eu) {
          return this.host.warn("the texture pack wasn't stored: it shows until the page reloads", Eu), !1
        }
      }
      change(uu, Eu) {
        if (!this.fO) {
          this.changes++, this.onGamePack = Eu, this.state = uu;
          for (const uu of [...this.listeners.keys()]) this.deliver(uu)
        }
      }
      deliver(uu) {
        if (!this.fO && this.listeners.has(uu) && this.listeners.get(uu) !== this.state) {
          this.listeners.set(uu, this.state);
          try {
            uu(this.state)
          } catch (Eu) {
            this.host.warn("a texture pack listener threw", Eu)
          }
        }
      }
    }
    async function Yu(uu, Eu, ju) {
      const su = (0, qu.d)(await ju.fetchPack(Eu));
      if (null !== su) return {
        pack: su,
        key: Eu
      };
      const Uu = await ju.packKey(uu);
      if (null === Uu) return null;
      const Zu = (0, qu.d)(await ju.fetchPack(Uu));
      if (null === Zu) throw new Error(`no texture pack at ${Uu}`);
      return {
        pack: Zu,
        key: Uu
      }
    }

    function hu(uu) {
      return null === uu || uu.metaData.id === Uu.e
    }

    function Du(uu) {
      const Eu = (0, qu.d)(uu);
      return hu(Eu) ? null : Eu
    }
    async function gu(uu) {
      let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Zu.c;
      if (null === uu.pack) return null;
      const {
        packAssets: su
      } = await Promise.all([ju.e(206), ju.e(45)]).then((() => ju(61713)));
      return su(uu, Eu)
    }

    function Mu(uu) {
      const Eu = (0, Xu.u)();
      return null === Eu ? () => {} : (Eu.onmessage = Eu => {
        uu.readPlayerPack((0, lu.f)(Eu.data))
      }, () => {
        Eu.close()
      })
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);