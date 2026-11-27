export const id = 225;
export const ids = [225];
export const modules = {
  34972: (ee, ie, He) => {
    He.d(ie, {
      c: () => be,
      f: () => Me
    });
    var ye = He(3580);

    function be() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const ee = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const ie = new BroadcastChannel(ye.k);
        ie.postMessage({
          stored: ee
        }), ie.close()
      } catch {
        return null
      }
      return ee
    }

    function Me(ee) {
      const ie = "object" === typeof ee && null !== ee ? ee.stored : null;
      return "string" === typeof ie ? ie : null
    }
  },
  34968: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ke,
      g: () => be,
      j: () => Me
    });
    var ye = He(3580);
    async function be(ee, ie, He) {
      let be = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const Me = Ke(await ee.getItem(ye.g, ie));
      if (null === Me || be()) return null;
      const Ue = await ee.getItem(ye.i, ie);
      return be() ? null : (await async function(ee) {
        await Promise.all([ee.removeItem(ye.g), ee.removeItem(ye.i)])
      }(ee).catch(He), {
        pack: Me,
        source: "string" === typeof Ue ? Ue : null
      })
    }

    function Me(ee) {
      return (0, ye.s)() ? Promise.resolve(null) : be(ee, !1, (ee => {
        console.error("Error removing temporary texture pack: ", ee)
      }), ye.s)
    }

    function Ke(ee) {
      if ("object" !== typeof ee || null === ee) return null;
      const ie = ee.metaData;
      return "object" !== typeof ie || null === ie || "string" !== typeof ie.id ? null : ee
    }
  },
  54284: (ee, ie, He) => {
    function ye(ee) {
      return null === ee.gameSource ? "player" : "customGame"
    }
    He.d(ie, {
      c: () => Me,
      g: () => Te,
      j: () => fe,
      m: () => ye
    });
    const be = /^data:[\w.+/-]*;base64,[A-Za-z0-9+/]*={0,2}$/;

    function Me(ee) {
      return "" === ee || "string" === typeof ee && be.test(ee)
    }

    function Ke(ee) {
      return "object" === typeof ee && null !== ee && ("earth" === ee.type || Object.entries(ee).every((ee => {
        let [ie, He] = ee;
        return "type" === ie || Me(He)
      })))
    }
    const Ue = /(?:src|image|image-set|cross-fade)\(/i,
      Fe = /url\(\s*(?:"(?<doubleQuoted>[^"]*)"|'(?<singleQuoted>[^']*)'|(?<unquoted>[^"'()\s]*))\s*\)/gi,
      Je = /url\(/gi,
      oe = ["https://bloxd.invalid/", "http://bloxd.invalid/"],
      Re = new Set([...oe.map((ee => new URL(ee).origin)), "https://fonts.gstatic.com"]),
      ke = new Set(["https://i.imgur.com/MEcjBFQ.png"]);

    function qe(ee) {
      var ie, He;
      if (ee.includes("\\") || Ue.test(ee)) return !0;
      const ye = [...ee.matchAll(Fe)];
      return ye.length !== (null !== (ie = null === (He = ee.match(Je)) || void 0 === He ? void 0 : He.length) && void 0 !== ie ? ie : 0) || !ye.every((ee => {
        var ie, He, ye;
        let {
          groups: be
        } = ee;
        return function(ee) {
          try {
            return oe.every((ie => {
              const He = new URL(ee, ie);
              return "data:" === He.protocol || Re.has(He.origin) || ke.has(He.href)
            }))
          } catch {
            return !1
          }
        }(null !== (ie = null !== (He = null !== (ye = null === be || void 0 === be ? void 0 : be.doubleQuoted) && void 0 !== ye ? ye : null === be || void 0 === be ? void 0 : be.singleQuoted) && void 0 !== He ? He : null === be || void 0 === be ? void 0 : be.unquoted) && void 0 !== ie ? ie : "")
      }))
    }

    function fe(ee) {
      var ie, He, ye, be, Ue, Fe, Je;
      const oe = [...Object.values(null !== (ie = ee.textureOverrides) && void 0 !== ie ? ie : {}), ...Object.values(null !== (He = ee.modelOverrides) && void 0 !== He ? He : {})],
        Re = [...Object.values(null !== (ye = null === (be = ee.customCss) || void 0 === be ? void 0 : be.fontFaces) && void 0 !== ye ? ye : {}), ...Object.values(null !== (Ue = null === (Fe = ee.customCss) || void 0 === Fe ? void 0 : Fe.classStyles) && void 0 !== Ue ? Ue : {})].flatMap((ee => Object.values(null !== ee && void 0 !== ee ? ee : {})));
      return !oe.every(Me) || !Object.values(null !== (Je = ee.skyBoxes) && void 0 !== Je ? Je : {}).every(Ke) || Re.some((ee => "string" === typeof ee && qe(ee)))
    }

    function Te(ee, ie) {
      if (null === ee || "player" === ie || !fe(ee)) return ee;
      const He = {
        ...ee
      };
      return ee.textureOverrides && (He.textureOverrides = Xe(ee.textureOverrides, Me, "texture")), ee.modelOverrides && (He.modelOverrides = Xe(ee.modelOverrides, Me, "model")), ee.skyBoxes && (He.skyBoxes = Xe(ee.skyBoxes, Ke, "sky")), ee.customCss && (He.customCss = function(ee) {
        const ie = ee => Xe(ee, (ee => "string" === typeof ee && !qe(ee)), "CSS"),
          {
            fontFaces: He,
            classStyles: ye
          } = pe(ee) ? ee : {},
          be = {};
        for (const [Me, Ke] of Object.entries(pe(ye) ? ye : {})) be[Me] = ie(Ke);
        return {
          fontFaces: (Array.isArray(He) ? He : []).map(ie),
          classStyles: be
        }
      }(ee.customCss)), He
    }

    function pe(ee) {
      return "object" === typeof ee && null !== ee && !Array.isArray(ee)
    }

    function Xe(ee, ie, He) {
      const ye = Object.entries(pe(ee) ? ee : {}),
        be = ye.filter((ee => {
          let [, He] = ee;
          return !ie(He)
        }));
      if (be.length > 0) {
        const ee = be.map((ee => {
          let [ie] = ee;
          return ie
        }));
        console.warn(`Ignoring a custom game texture pack's ${He} files that name another site: ${ee.join(", ")}`)
      }
      return Object.fromEntries(ye.filter((ee => {
        let [, He] = ee;
        return ie(He)
      })))
    }
  },
  54292: (ee, ie, He) => {
    He.d(ie, {
      e: () => fe,
      g: () => Be,
      i: () => ze
    });
    var ye = He(1033),
      be = He(2181),
      Me = He(3572),
      Ke = He(3580),
      Ue = He(34972),
      Fe = He(34968),
      Je = He(54284),
      oe = He(42086),
      Re = He(42058),
      ke = He(5596);
    const qe = {
      pack: null,
      gameSource: null
    };
    class fe {
      constructor(ee) {
        this.host = ee, this.ready = void 0, this.state = qe, this.playerPack = null, this.onGamePack = !1, this.confirmGamePack = null, this.skippedKey = null, this.ownAnnouncements = new Set, this.listeners = new Map, this.ownListeners = new Set, this.changes = 0, this.picks = 0, this.playerPicked = !1, this.ownChanges = 0, this.xf = !1, (0, Ke.m)(), this.ready = this.readStored()
      }
      readyWithin(ee) {
        return Promise.race([this.ready, new Promise((ie => {
          setTimeout(ie, ee)
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
      onPlayerPackChange(ee) {
        return this.ownListeners.add(ee), () => {
          this.ownListeners.delete(ee)
        }
      }
      isUsingCustomGameTexturePack(ee) {
        return (0, Re.g)(this.state, ee)
      }
      setGamePackConfirm(ee) {
        this.confirmGamePack = ee
      }
      subscribe(ee) {
        return this.listeners.set(ee, null), this.ready.then((() => {
          this.deliver(ee)
        })), () => {
          this.listeners.delete(ee)
        }
      }
      async setPlayerPack(ee) {
        const ie = pe(ee) ? null : ee;
        this.picks++, this.playerPicked = !0, this.ownChanges++, this.setOwn(ie), this.change({
          pack: ie,
          gameSource: null
        }, !1);
        const He = await this.storePlayerPack(ie);
        return He && this.announce(), He
      }
      async packForGame(ee, ie, He) {
        await this.readyWithin(Math.max(0, (null !== He && void 0 !== He ? He : performance.now() + oe.e) - performance.now()));
        const be = ++this.picks,
          Me = (0, ye.k)(ee) ? (0, ye.r)(ee) : null;
        if (null === Me) return void this.usePlayerPack();
        let Ke;
        const Ue = function(ee) {
          let ie;
          const He = new Promise(((He, ye) => {
            ie = setTimeout((() => {
              ye(new Error(`no answer in ${ee} ms`))
            }), ee)
          }));
          return He.catch((() => {})), {
            passed: He,
            clear: () => {
              clearTimeout(ie)
            }
          }
        }(2e4);
        try {
          const ee = await Promise.race([ie.packKey(Me), Ue.passed]);
          if (null !== ee && this.onGamePack && this.state.gameSource === ee) return;
          if (null !== ee && ee === this.skippedKey) return void(this.xf || this.picks !== be || this.usePlayerPack());
          Ke = null === ee ? null : await Promise.race([Te(Me, ee, ie), Ue.passed])
        } catch (Re) {
          const ee = !this.xf && this.picks === be && this.holdsOtherGamePack(Me);
          return this.host.warn(`the texture pack of ${Me} didn't load: ${ee?"the player's own shows":"the pack in play stays"}`, Re), void(ee && this.usePlayerPack())
        } finally {
          Ue.clear()
        }
        if (this.xf || this.picks !== be) return;
        null !== Ke && (0, Je.j)(Ke.pack) && (this.host.warn(`the texture pack of ${Me} names files on other sites: the player's own shows`, null), Ke = null);
        const Fe = null === Ke || await this.confirmed(Ke.pack, Me) ? null : Ke.key;
        this.xf || this.picks !== be || (null !== Fe && (this.skippedKey = Fe, Ke = null), null === Ke ? this.usePlayerPack() : (this.onGamePack = !0, this.change({
          pack: Ke.pack,
          gameSource: Ke.key
        }, !0)))
      }
      endGamePack() {
        this.picks++, this.usePlayerPack()
      }
      holdsOtherGamePack(ee) {
        return this.onGamePack && "" !== this.state.gameSource && !this.isUsingCustomGameTexturePack(ee)
      }
      async confirmed(ee, ie) {
        const He = this.confirmGamePack;
        if (null === He) return !0;
        try {
          return await He(ee, ie)
        } catch (ye) {
          return this.host.warn(`the texture pack prompt of ${ie} failed: the pack is skipped`, ye), !1
        }
      }
      async readPlayerPack() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (null !== ee && this.ownAnnouncements.delete(ee)) return;
        await this.ready;
        const ie = this.ownChanges;
        let He;
        try {
          He = await this.host.store.getItem(Ke.e, !0)
        } catch (be) {
          return void this.host.warn("the stored texture pack didn't read again: the pack in play stays", be)
        }
        if (this.xf || this.ownChanges !== ie) return;
        const ye = Xe(He);
        (0, ke.d)(ye, this.playerPack) || (this.ownChanges++, this.setOwn(ye), this.onGamePack || this.change({
          pack: ye,
          gameSource: null
        }, !1))
      }
      joinedWithout() {
        this.picks++
      }
      dispose() {
        this.xf = !0, this.listeners.clear()
      }
      async readStored() {
        const {
          store: ee,
          warn: ie
        } = this.host;
        await Promise.all([!1 === this.host.oneShot ? void 0 : (0, Fe.g)(ee, !0, (ee => {
          ie("the custom game's texture pack wasn't removed from storage", ee)
        })).then((ee => {
          this.takeOneShot(ee)
        }), (ee => {
          ie("the custom game's texture pack didn't read: the player's own shows", ee)
        })), ee.getItem(Ke.e, !0).then((ee => {
          this.takeStoredOwn(ee)
        }), (ee => {
          ie("the stored texture pack didn't read: the default pack shows", ee), this.takeStoredOwn(null)
        }))]), this.update()
      }
      takeOneShot(ee) {
        var ie;
        null === ee || this.xf || this.changes > 0 || this.picks > 0 || ((0, Je.j)(ee.pack) ? this.host.warn("the custom game's texture pack names files on other sites: the player's own shows", null) : (this.onGamePack = !0, this.state = {
          pack: ee.pack,
          gameSource: null !== (ie = ee.source) && void 0 !== ie ? ie : ""
        }))
      }
      takeStoredOwn(ee) {
        if (this.playerPicked || this.xf) return;
        if (this.ownChanges++, this.setOwn(Xe(ee)), this.onGamePack) return;
        const ie = {
          pack: this.playerPack,
          gameSource: null
        };
        0 === this.changes ? this.state = ie : this.change(ie, !1)
      }
      async update() {
        const ee = this.playerPack,
          ie = null === ee || void 0 === ee ? void 0 : ee.metaData.id;
        if (!ee || !ie || !this.host.fetchLatest || ie === be.b || ie === be.o.CUSTOM) return;
        const He = be.s[ie];
        if (void 0 === He || ee.metaData.version >= He) return;
        let ye;
        try {
          ye = Xe(await this.host.fetchLatest(ie))
        } catch (Me) {
          return void this.host.warn(`texture pack ${ie} didn't update to version ${He}`, Me)
        }
        null === ye || this.xf || this.playerPack !== ee || (this.ownChanges++, this.setOwn(ye), this.onGamePack || this.change({
          pack: ye,
          gameSource: null
        }, !1), await this.storePlayerPack(ye) && this.announce())
      }
      announce() {
        const ee = (0, Ue.c)();
        null !== ee && this.ownAnnouncements.add(ee)
      }
      setOwn(ee) {
        this.playerPack = ee;
        for (const He of [...this.ownListeners]) try {
          He()
        } catch (ie) {
          this.host.warn("a texture pack listener threw", ie)
        }
      }
      usePlayerPack() {
        this.onGamePack && this.change({
          pack: this.playerPack,
          gameSource: null
        }, !1)
      }
      async storePlayerPack(ee) {
        try {
          return null === ee ? (await this.host.store.removeItem(Ke.e), !0) : await this.host.store.setItem(Ke.e, ee)
        } catch (ie) {
          return this.host.warn("the texture pack wasn't stored: it shows until the page reloads", ie), !1
        }
      }
      change(ee, ie) {
        if (!this.xf) {
          this.changes++, this.onGamePack = ie, this.state = ee;
          for (const ee of [...this.listeners.keys()]) this.deliver(ee)
        }
      }
      deliver(ee) {
        if (!this.xf && this.listeners.has(ee) && this.listeners.get(ee) !== this.state) {
          this.listeners.set(ee, this.state);
          try {
            ee(this.state)
          } catch (ie) {
            this.host.warn("a texture pack listener threw", ie)
          }
        }
      }
    }
    async function Te(ee, ie, He) {
      const ye = (0, Fe.c)(await He.fetchPack(ie));
      if (null !== ye) return {
        pack: ye,
        key: ie
      };
      const be = await He.packKey(ee);
      if (null === be) return null;
      const Me = (0, Fe.c)(await He.fetchPack(be));
      if (null === Me) throw new Error(`no texture pack at ${be}`);
      return {
        pack: Me,
        key: be
      }
    }

    function pe(ee) {
      return null === ee || ee.metaData.id === be.b
    }

    function Xe(ee) {
      const ie = (0, Fe.c)(ee);
      return pe(ie) ? null : ie
    }
    async function ze(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Me.d;
      if (null === ee.pack) return null;
      const {
        packAssets: ye
      } = await Promise.all([He.e(227), He.e(52)]).then((() => He(64049)));
      return ye(ee, ie)
    }

    function Be(ee) {
      const ie = (0, Ke.v)();
      return null === ie ? () => {} : (ie.onmessage = ie => {
        ee.readPlayerPack((0, Ue.f)(ie.data))
      }, () => {
        ie.close()
      })
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);