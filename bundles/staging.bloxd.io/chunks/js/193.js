export const id = 193;
export const ids = [193];
export const modules = {
  8913: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Wz,
      f: () => Xz
    });
    var Fz = sz(2955);

    function Wz() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const zz = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const tz = new BroadcastChannel(Fz.l);
        tz.postMessage({
          stored: zz
        }), tz.close()
      } catch {
        return null
      }
      return zz
    }

    function Xz(zz) {
      const tz = "object" === typeof zz && null !== zz ? zz.stored : null;
      return "string" === typeof tz ? tz : null
    }
  },
  8907: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Oz,
      g: () => Wz,
      i: () => Xz
    });
    var Fz = sz(2955);
    async function Wz(zz, tz, sz) {
      let Wz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const Xz = Oz(await zz.getItem(Fz.i, tz));
      if (null === Xz || Wz()) return null;
      const oz = await zz.getItem(Fz.k, tz);
      return Wz() ? null : (await async function(zz) {
        await Promise.all([zz.removeItem(Fz.i), zz.removeItem(Fz.k)])
      }(zz).catch(sz), {
        pack: Xz,
        source: "string" === typeof oz ? oz : null
      })
    }

    function Xz(zz) {
      return (0, Fz.r)() ? Promise.resolve(null) : Wz(zz, !1, (zz => {
        console.error("Error removing temporary texture pack: ", zz)
      }), Fz.r)
    }

    function Oz(zz) {
      if ("object" !== typeof zz || null === zz) return null;
      const tz = zz.metaData;
      return "object" !== typeof tz || null === tz || "string" !== typeof tz.id ? null : zz
    }
  },
  42381: (zz, tz, sz) => {
    function Fz(zz) {
      return null === zz.gameSource ? "player" : "customGame"
    }
    sz.d(tz, {
      e: () => Xz,
      g: () => Dz,
      k: () => wz,
      m: () => Fz
    });
    const Wz = /^data:[\w.+/-]*;base64,[A-Za-z0-9+/]*={0,2}$/;

    function Xz(zz) {
      return "" === zz || "string" === typeof zz && Wz.test(zz)
    }

    function Oz(zz) {
      return "object" === typeof zz && null !== zz && ("earth" === zz.type || Object.entries(zz).every((zz => {
        let [tz, sz] = zz;
        return "type" === tz || Xz(sz)
      })))
    }
    const oz = /(?:src|image|image-set|cross-fade)\(/i,
      vz = /url\(\s*(?:"(?<doubleQuoted>[^"]*)"|'(?<singleQuoted>[^']*)'|(?<unquoted>[^"'()\s]*))\s*\)/gi,
      Uz = /url\(/gi,
      Kz = ["https://bloxd.invalid/", "http://bloxd.invalid/"],
      uz = new Set([...Kz.map((zz => new URL(zz).origin)), "https://fonts.gstatic.com"]),
      Nz = new Set(["https://i.imgur.com/MEcjBFQ.png"]);

    function bz(zz) {
      var tz, sz;
      if (zz.includes("\\") || oz.test(zz)) return !0;
      const Fz = [...zz.matchAll(vz)];
      return Fz.length !== (null !== (tz = null === (sz = zz.match(Uz)) || void 0 === sz ? void 0 : sz.length) && void 0 !== tz ? tz : 0) || !Fz.every((zz => {
        var tz, sz, Fz;
        let {
          groups: Wz
        } = zz;
        return function(zz) {
          try {
            return Kz.every((tz => {
              const sz = new URL(zz, tz);
              return "data:" === sz.protocol || uz.has(sz.origin) || Nz.has(sz.href)
            }))
          } catch {
            return !1
          }
        }(null !== (tz = null !== (sz = null !== (Fz = null === Wz || void 0 === Wz ? void 0 : Wz.doubleQuoted) && void 0 !== Fz ? Fz : null === Wz || void 0 === Wz ? void 0 : Wz.singleQuoted) && void 0 !== sz ? sz : null === Wz || void 0 === Wz ? void 0 : Wz.unquoted) && void 0 !== tz ? tz : "")
      }))
    }

    function wz(zz) {
      var tz, sz, Fz, Wz, oz, vz, Uz;
      const Kz = [...Object.values(null !== (tz = zz.textureOverrides) && void 0 !== tz ? tz : {}), ...Object.values(null !== (sz = zz.modelOverrides) && void 0 !== sz ? sz : {})],
        uz = [...Object.values(null !== (Fz = null === (Wz = zz.customCss) || void 0 === Wz ? void 0 : Wz.fontFaces) && void 0 !== Fz ? Fz : {}), ...Object.values(null !== (oz = null === (vz = zz.customCss) || void 0 === vz ? void 0 : vz.classStyles) && void 0 !== oz ? oz : {})].flatMap((zz => Object.values(null !== zz && void 0 !== zz ? zz : {})));
      return !Kz.every(Xz) || !Object.values(null !== (Uz = zz.skyBoxes) && void 0 !== Uz ? Uz : {}).every(Oz) || uz.some((zz => "string" === typeof zz && bz(zz)))
    }

    function Dz(zz, tz) {
      if (null === zz || "player" === tz || !wz(zz)) return zz;
      const sz = {
        ...zz
      };
      return zz.textureOverrides && (sz.textureOverrides = Hz(zz.textureOverrides, Xz, "texture")), zz.modelOverrides && (sz.modelOverrides = Hz(zz.modelOverrides, Xz, "model")), zz.skyBoxes && (sz.skyBoxes = Hz(zz.skyBoxes, Oz, "sky")), zz.customCss && (sz.customCss = function(zz) {
        const tz = zz => Hz(zz, (zz => "string" === typeof zz && !bz(zz)), "CSS"),
          {
            fontFaces: sz,
            classStyles: Fz
          } = gz(zz) ? zz : {},
          Wz = {};
        for (const [Xz, Oz] of Object.entries(gz(Fz) ? Fz : {})) Wz[Xz] = tz(Oz);
        return {
          fontFaces: (Array.isArray(sz) ? sz : []).map(tz),
          classStyles: Wz
        }
      }(zz.customCss)), sz
    }

    function gz(zz) {
      return "object" === typeof zz && null !== zz && !Array.isArray(zz)
    }

    function Hz(zz, tz, sz) {
      const Fz = Object.entries(gz(zz) ? zz : {}),
        Wz = Fz.filter((zz => {
          let [, sz] = zz;
          return !tz(sz)
        }));
      if (Wz.length > 0) {
        const zz = Wz.map((zz => {
          let [tz] = zz;
          return tz
        }));
        console.warn(`Ignoring a custom game texture pack's ${sz} files that name another site: ${zz.join(", ")}`)
      }
      return Object.fromEntries(Fz.filter((zz => {
        let [, sz] = zz;
        return tz(sz)
      })))
    }
  },
  42384: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => wz,
      f: () => Pz,
      i: () => Bz
    });
    var Fz = sz(991),
      Wz = sz(2883),
      Xz = sz(2944),
      Oz = sz(2955),
      oz = sz(8913),
      vz = sz(8907),
      Uz = sz(42381),
      Kz = sz(40142),
      uz = sz(40127),
      Nz = sz(4665);
    const bz = {
      pack: null,
      gameSource: null
    };
    class wz {
      constructor(zz) {
        this.host = zz, this.ready = void 0, this.state = bz, this.playerPack = null, this.onGamePack = !1, this.confirmGamePack = null, this.skippedKey = null, this.ownAnnouncements = new Set, this.listeners = new Map, this.ownListeners = new Set, this.changes = 0, this.picks = 0, this.playerPicked = !1, this.ownChanges = 0, this.lw = !1, (0, Oz.m)(), this.ready = this.readStored()
      }
      readyWithin(zz) {
        return Promise.race([this.ready, new Promise((tz => {
          setTimeout(tz, zz)
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
      onPlayerPackChange(zz) {
        return this.ownListeners.add(zz), () => {
          this.ownListeners.delete(zz)
        }
      }
      isUsingCustomGameTexturePack(zz) {
        return (0, uz.d)(this.state, zz)
      }
      setGamePackConfirm(zz) {
        this.confirmGamePack = zz
      }
      subscribe(zz) {
        return this.listeners.set(zz, null), this.ready.then((() => {
          this.deliver(zz)
        })), () => {
          this.listeners.delete(zz)
        }
      }
      async setPlayerPack(zz) {
        const tz = gz(zz) ? null : zz;
        this.picks++, this.playerPicked = !0, this.ownChanges++, this.setOwn(tz), this.change({
          pack: tz,
          gameSource: null
        }, !1);
        const sz = await this.storePlayerPack(tz);
        return sz && this.announce(), sz
      }
      async packForGame(zz, tz, sz) {
        await this.readyWithin(Math.max(0, (null !== sz && void 0 !== sz ? sz : performance.now() + Kz.d) - performance.now()));
        const Wz = ++this.picks,
          Xz = (0, Fz.n)(zz) ? (0, Fz.r)(zz) : null;
        if (null === Xz) return void this.usePlayerPack();
        let Oz;
        const oz = function(zz) {
          let tz;
          const sz = new Promise(((sz, Fz) => {
            tz = setTimeout((() => {
              Fz(new Error(`no answer in ${zz} ms`))
            }), zz)
          }));
          return sz.catch((() => {})), {
            passed: sz,
            clear: () => {
              clearTimeout(tz)
            }
          }
        }(2e4);
        try {
          const zz = await Promise.race([tz.packKey(Xz), oz.passed]);
          if (null !== zz && this.onGamePack && this.state.gameSource === zz) return;
          if (null !== zz && zz === this.skippedKey) return void(this.lw || this.picks !== Wz || this.usePlayerPack());
          Oz = null === zz ? null : await Promise.race([Dz(Xz, zz, tz), oz.passed])
        } catch (uz) {
          const zz = !this.lw && this.picks === Wz && this.holdsOtherGamePack(Xz);
          return this.host.warn(`the texture pack of ${Xz} didn't load: ${zz?"the player's own shows":"the pack in play stays"}`, uz), void(zz && this.usePlayerPack())
        } finally {
          oz.clear()
        }
        if (this.lw || this.picks !== Wz) return;
        null !== Oz && (0, Uz.k)(Oz.pack) && (this.host.warn(`the texture pack of ${Xz} names files on other sites: the player's own shows`, null), Oz = null);
        const vz = null === Oz || await this.confirmed(Oz.pack, Xz) ? null : Oz.key;
        this.lw || this.picks !== Wz || (null !== vz && (this.skippedKey = vz, Oz = null), null === Oz ? this.usePlayerPack() : (this.onGamePack = !0, this.change({
          pack: Oz.pack,
          gameSource: Oz.key
        }, !0)))
      }
      endGamePack() {
        this.picks++, this.usePlayerPack()
      }
      holdsOtherGamePack(zz) {
        return this.onGamePack && "" !== this.state.gameSource && !this.isUsingCustomGameTexturePack(zz)
      }
      async confirmed(zz, tz) {
        const sz = this.confirmGamePack;
        if (null === sz) return !0;
        try {
          return await sz(zz, tz)
        } catch (Fz) {
          return this.host.warn(`the texture pack prompt of ${tz} failed: the pack is skipped`, Fz), !1
        }
      }
      async readPlayerPack() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (null !== zz && this.ownAnnouncements.delete(zz)) return;
        await this.ready;
        const tz = this.ownChanges;
        let sz;
        try {
          sz = await this.host.store.getItem(Oz.e, !0)
        } catch (Wz) {
          return void this.host.warn("the stored texture pack didn't read again: the pack in play stays", Wz)
        }
        if (this.lw || this.ownChanges !== tz) return;
        const Fz = Hz(sz);
        (0, Nz.d)(Fz, this.playerPack) || (this.ownChanges++, this.setOwn(Fz), this.onGamePack || this.change({
          pack: Fz,
          gameSource: null
        }, !1))
      }
      joinedWithout() {
        this.picks++
      }
      dispose() {
        this.lw = !0, this.listeners.clear()
      }
      async readStored() {
        const {
          store: zz,
          warn: tz
        } = this.host;
        await Promise.all([!1 === this.host.oneShot ? void 0 : (0, vz.g)(zz, !0, (zz => {
          tz("the custom game's texture pack wasn't removed from storage", zz)
        })).then((zz => {
          this.takeOneShot(zz)
        }), (zz => {
          tz("the custom game's texture pack didn't read: the player's own shows", zz)
        })), zz.getItem(Oz.e, !0).then((zz => {
          this.takeStoredOwn(zz)
        }), (zz => {
          tz("the stored texture pack didn't read: the default pack shows", zz), this.takeStoredOwn(null)
        }))]), this.update()
      }
      takeOneShot(zz) {
        var tz;
        null === zz || this.lw || this.changes > 0 || this.picks > 0 || ((0, Uz.k)(zz.pack) ? this.host.warn("the custom game's texture pack names files on other sites: the player's own shows", null) : (this.onGamePack = !0, this.state = {
          pack: zz.pack,
          gameSource: null !== (tz = zz.source) && void 0 !== tz ? tz : ""
        }))
      }
      takeStoredOwn(zz) {
        if (this.playerPicked || this.lw) return;
        if (this.ownChanges++, this.setOwn(Hz(zz)), this.onGamePack) return;
        const tz = {
          pack: this.playerPack,
          gameSource: null
        };
        0 === this.changes ? this.state = tz : this.change(tz, !1)
      }
      async update() {
        const zz = this.playerPack,
          tz = null === zz || void 0 === zz ? void 0 : zz.metaData.id;
        if (!zz || !tz || !this.host.fetchLatest || tz === Wz.e || tz === Wz.s.CUSTOM) return;
        const sz = Wz.v[tz];
        if (void 0 === sz || zz.metaData.version >= sz) return;
        let Fz;
        try {
          Fz = Hz(await this.host.fetchLatest(tz))
        } catch (Xz) {
          return void this.host.warn(`texture pack ${tz} didn't update to version ${sz}`, Xz)
        }
        null === Fz || this.lw || this.playerPack !== zz || (this.ownChanges++, this.setOwn(Fz), this.onGamePack || this.change({
          pack: Fz,
          gameSource: null
        }, !1), await this.storePlayerPack(Fz) && this.announce())
      }
      announce() {
        const zz = (0, oz.c)();
        null !== zz && this.ownAnnouncements.add(zz)
      }
      setOwn(zz) {
        this.playerPack = zz;
        for (const sz of [...this.ownListeners]) try {
          sz()
        } catch (tz) {
          this.host.warn("a texture pack listener threw", tz)
        }
      }
      usePlayerPack() {
        this.onGamePack && this.change({
          pack: this.playerPack,
          gameSource: null
        }, !1)
      }
      async storePlayerPack(zz) {
        try {
          return null === zz ? (await this.host.store.removeItem(Oz.e), !0) : await this.host.store.setItem(Oz.e, zz)
        } catch (tz) {
          return this.host.warn("the texture pack wasn't stored: it shows until the page reloads", tz), !1
        }
      }
      change(zz, tz) {
        if (!this.lw) {
          this.changes++, this.onGamePack = tz, this.state = zz;
          for (const zz of [...this.listeners.keys()]) this.deliver(zz)
        }
      }
      deliver(zz) {
        if (!this.lw && this.listeners.has(zz) && this.listeners.get(zz) !== this.state) {
          this.listeners.set(zz, this.state);
          try {
            zz(this.state)
          } catch (tz) {
            this.host.warn("a texture pack listener threw", tz)
          }
        }
      }
    }
    async function Dz(zz, tz, sz) {
      const Fz = (0, vz.c)(await sz.fetchPack(tz));
      if (null !== Fz) return {
        pack: Fz,
        key: tz
      };
      const Wz = await sz.packKey(zz);
      if (null === Wz) return null;
      const Xz = (0, vz.c)(await sz.fetchPack(Wz));
      if (null === Xz) throw new Error(`no texture pack at ${Wz}`);
      return {
        pack: Xz,
        key: Wz
      }
    }

    function gz(zz) {
      return null === zz || zz.metaData.id === Wz.e
    }

    function Hz(zz) {
      const tz = (0, vz.c)(zz);
      return gz(tz) ? null : tz
    }
    async function Bz(zz) {
      let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Xz.c;
      if (null === zz.pack) return null;
      const {
        packAssets: Fz
      } = await Promise.all([sz.e(195), sz.e(44)]).then((() => sz(60644)));
      return Fz(zz, tz)
    }

    function Pz(zz) {
      const tz = (0, Oz.s)();
      return null === tz ? () => {} : (tz.onmessage = tz => {
        zz.readPlayerPack((0, oz.f)(tz.data))
      }, () => {
        tz.close()
      })
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);