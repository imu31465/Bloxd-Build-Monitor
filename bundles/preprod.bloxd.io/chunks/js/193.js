export const id = 193;
export const ids = [193];
export const modules = {
  9047: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => nz,
      e: () => iz
    });
    var Ez = bz(3027);

    function nz() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const zz = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const uz = new BroadcastChannel(Ez.l);
        uz.postMessage({
          stored: zz
        }), uz.close()
      } catch {
        return null
      }
      return zz
    }

    function iz(zz) {
      const uz = "object" === typeof zz && null !== zz ? zz.stored : null;
      return "string" === typeof uz ? uz : null
    }
  },
  9043: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => lz,
      f: () => nz,
      j: () => iz
    });
    var Ez = bz(3027);
    async function nz(zz, uz, bz) {
      let nz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const iz = lz(await zz.getItem(Ez.g, uz));
      if (null === iz || nz()) return null;
      const Mz = await zz.getItem(Ez.k, uz);
      return nz() ? null : (await async function(zz) {
        await Promise.all([zz.removeItem(Ez.g), zz.removeItem(Ez.k)])
      }(zz).catch(bz), {
        pack: iz,
        source: "string" === typeof Mz ? Mz : null
      })
    }

    function iz(zz) {
      return (0, Ez.u)() ? Promise.resolve(null) : nz(zz, !1, (zz => {
        console.error("Error removing temporary texture pack: ", zz)
      }), Ez.u)
    }

    function lz(zz) {
      if ("object" !== typeof zz || null === zz) return null;
      const uz = zz.metaData;
      return "object" !== typeof uz || null === uz || "string" !== typeof uz.id ? null : zz
    }
  },
  42612: (zz, uz, bz) => {
    function Ez(zz) {
      return null === zz.gameSource ? "player" : "customGame"
    }
    bz.d(uz, {
      c: () => iz,
      f: () => Rz,
      i: () => Zz,
      m: () => Ez
    });
    const nz = /^data:[\w.+/-]*;base64,[A-Za-z0-9+/]*={0,2}$/;

    function iz(zz) {
      return "" === zz || "string" === typeof zz && nz.test(zz)
    }

    function lz(zz) {
      return "object" === typeof zz && null !== zz && ("earth" === zz.type || Object.entries(zz).every((zz => {
        let [uz, bz] = zz;
        return "type" === uz || iz(bz)
      })))
    }
    const Mz = /(?:src|image|image-set|cross-fade)\(/i,
      tz = /url\(\s*(?:"(?<doubleQuoted>[^"]*)"|'(?<singleQuoted>[^']*)'|(?<unquoted>[^"'()\s]*))\s*\)/gi,
      Hz = /url\(/gi,
      Oz = ["https://bloxd.invalid/", "http://bloxd.invalid/"],
      pz = new Set([...Oz.map((zz => new URL(zz).origin)), "https://fonts.gstatic.com"]),
      dz = new Set(["https://i.imgur.com/MEcjBFQ.png"]);

    function Fz(zz) {
      var uz, bz;
      if (zz.includes("\\") || Mz.test(zz)) return !0;
      const Ez = [...zz.matchAll(tz)];
      return Ez.length !== (null !== (uz = null === (bz = zz.match(Hz)) || void 0 === bz ? void 0 : bz.length) && void 0 !== uz ? uz : 0) || !Ez.every((zz => {
        var uz, bz, Ez;
        let {
          groups: nz
        } = zz;
        return function(zz) {
          try {
            return Oz.every((uz => {
              const bz = new URL(zz, uz);
              return "data:" === bz.protocol || pz.has(bz.origin) || dz.has(bz.href)
            }))
          } catch {
            return !1
          }
        }(null !== (uz = null !== (bz = null !== (Ez = null === nz || void 0 === nz ? void 0 : nz.doubleQuoted) && void 0 !== Ez ? Ez : null === nz || void 0 === nz ? void 0 : nz.singleQuoted) && void 0 !== bz ? bz : null === nz || void 0 === nz ? void 0 : nz.unquoted) && void 0 !== uz ? uz : "")
      }))
    }

    function Zz(zz) {
      var uz, bz, Ez, nz, Mz, tz, Hz;
      const Oz = [...Object.values(null !== (uz = zz.textureOverrides) && void 0 !== uz ? uz : {}), ...Object.values(null !== (bz = zz.modelOverrides) && void 0 !== bz ? bz : {})],
        pz = [...Object.values(null !== (Ez = null === (nz = zz.customCss) || void 0 === nz ? void 0 : nz.fontFaces) && void 0 !== Ez ? Ez : {}), ...Object.values(null !== (Mz = null === (tz = zz.customCss) || void 0 === tz ? void 0 : tz.classStyles) && void 0 !== Mz ? Mz : {})].flatMap((zz => Object.values(null !== zz && void 0 !== zz ? zz : {})));
      return !Oz.every(iz) || !Object.values(null !== (Hz = zz.skyBoxes) && void 0 !== Hz ? Hz : {}).every(lz) || pz.some((zz => "string" === typeof zz && Fz(zz)))
    }

    function Rz(zz, uz) {
      if (null === zz || "player" === uz || !Zz(zz)) return zz;
      const bz = {
        ...zz
      };
      return zz.textureOverrides && (bz.textureOverrides = wz(zz.textureOverrides, iz, "texture")), zz.modelOverrides && (bz.modelOverrides = wz(zz.modelOverrides, iz, "model")), zz.skyBoxes && (bz.skyBoxes = wz(zz.skyBoxes, lz, "sky")), zz.customCss && (bz.customCss = function(zz) {
        const uz = zz => wz(zz, (zz => "string" === typeof zz && !Fz(zz)), "CSS"),
          {
            fontFaces: bz,
            classStyles: Ez
          } = Kz(zz) ? zz : {},
          nz = {};
        for (const [iz, lz] of Object.entries(Kz(Ez) ? Ez : {})) nz[iz] = uz(lz);
        return {
          fontFaces: (Array.isArray(bz) ? bz : []).map(uz),
          classStyles: nz
        }
      }(zz.customCss)), bz
    }

    function Kz(zz) {
      return "object" === typeof zz && null !== zz && !Array.isArray(zz)
    }

    function wz(zz, uz, bz) {
      const Ez = Object.entries(Kz(zz) ? zz : {}),
        nz = Ez.filter((zz => {
          let [, bz] = zz;
          return !uz(bz)
        }));
      if (nz.length > 0) {
        const zz = nz.map((zz => {
          let [uz] = zz;
          return uz
        }));
        console.warn(`Ignoring a custom game texture pack's ${bz} files that name another site: ${zz.join(", ")}`)
      }
      return Object.fromEntries(Ez.filter((zz => {
        let [, bz] = zz;
        return uz(bz)
      })))
    }
  },
  42615: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Zz,
      c: () => fz,
      e: () => Xz
    });
    var Ez = bz(994),
      nz = bz(2916),
      iz = bz(3016),
      lz = bz(3027),
      Mz = bz(9047),
      tz = bz(9043),
      Hz = bz(42612),
      Oz = bz(40243),
      pz = bz(40229),
      dz = bz(4789);
    const Fz = {
      pack: null,
      gameSource: null
    };
    class Zz {
      constructor(zz) {
        this.host = zz, this.ready = void 0, this.state = Fz, this.playerPack = null, this.onGamePack = !1, this.confirmGamePack = null, this.skippedKey = null, this.ownAnnouncements = new Set, this.listeners = new Map, this.ownListeners = new Set, this.changes = 0, this.picks = 0, this.playerPicked = !1, this.ownChanges = 0, this.SZ = !1, (0, lz.p)(), this.ready = this.readStored()
      }
      readyWithin(zz) {
        return Promise.race([this.ready, new Promise((uz => {
          setTimeout(uz, zz)
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
        return (0, pz.g)(this.state, zz)
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
        const uz = Kz(zz) ? null : zz;
        this.picks++, this.playerPicked = !0, this.ownChanges++, this.setOwn(uz), this.change({
          pack: uz,
          gameSource: null
        }, !1);
        const bz = await this.storePlayerPack(uz);
        return bz && this.announce(), bz
      }
      async packForGame(zz, uz, bz) {
        await this.readyWithin(Math.max(0, (null !== bz && void 0 !== bz ? bz : performance.now() + Oz.c) - performance.now()));
        const nz = ++this.picks,
          iz = (0, Ez.k)(zz) ? (0, Ez.q)(zz) : null;
        if (null === iz) return void this.usePlayerPack();
        let lz;
        const Mz = function(zz) {
          let uz;
          const bz = new Promise(((bz, Ez) => {
            uz = setTimeout((() => {
              Ez(new Error(`no answer in ${zz} ms`))
            }), zz)
          }));
          return bz.catch((() => {})), {
            passed: bz,
            clear: () => {
              clearTimeout(uz)
            }
          }
        }(2e4);
        try {
          const zz = await Promise.race([uz.packKey(iz), Mz.passed]);
          if (null !== zz && this.onGamePack && this.state.gameSource === zz) return;
          if (null !== zz && zz === this.skippedKey) return void(this.SZ || this.picks !== nz || this.usePlayerPack());
          lz = null === zz ? null : await Promise.race([Rz(iz, zz, uz), Mz.passed])
        } catch (pz) {
          const zz = !this.SZ && this.picks === nz && this.holdsOtherGamePack(iz);
          return this.host.warn(`the texture pack of ${iz} didn't load: ${zz?"the player's own shows":"the pack in play stays"}`, pz), void(zz && this.usePlayerPack())
        } finally {
          Mz.clear()
        }
        if (this.SZ || this.picks !== nz) return;
        null !== lz && (0, Hz.i)(lz.pack) && (this.host.warn(`the texture pack of ${iz} names files on other sites: the player's own shows`, null), lz = null);
        const tz = null === lz || await this.confirmed(lz.pack, iz) ? null : lz.key;
        this.SZ || this.picks !== nz || (null !== tz && (this.skippedKey = tz, lz = null), null === lz ? this.usePlayerPack() : (this.onGamePack = !0, this.change({
          pack: lz.pack,
          gameSource: lz.key
        }, !0)))
      }
      endGamePack() {
        this.picks++, this.usePlayerPack()
      }
      holdsOtherGamePack(zz) {
        return this.onGamePack && "" !== this.state.gameSource && !this.isUsingCustomGameTexturePack(zz)
      }
      async confirmed(zz, uz) {
        const bz = this.confirmGamePack;
        if (null === bz) return !0;
        try {
          return await bz(zz, uz)
        } catch (Ez) {
          return this.host.warn(`the texture pack prompt of ${uz} failed: the pack is skipped`, Ez), !1
        }
      }
      async readPlayerPack() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (null !== zz && this.ownAnnouncements.delete(zz)) return;
        await this.ready;
        const uz = this.ownChanges;
        let bz;
        try {
          bz = await this.host.store.getItem(lz.c, !0)
        } catch (nz) {
          return void this.host.warn("the stored texture pack didn't read again: the pack in play stays", nz)
        }
        if (this.SZ || this.ownChanges !== uz) return;
        const Ez = wz(bz);
        (0, dz.c)(Ez, this.playerPack) || (this.ownChanges++, this.setOwn(Ez), this.onGamePack || this.change({
          pack: Ez,
          gameSource: null
        }, !1))
      }
      joinedWithout() {
        this.picks++
      }
      dispose() {
        this.SZ = !0, this.listeners.clear()
      }
      async readStored() {
        const {
          store: zz,
          warn: uz
        } = this.host;
        await Promise.all([!1 === this.host.oneShot ? void 0 : (0, tz.f)(zz, !0, (zz => {
          uz("the custom game's texture pack wasn't removed from storage", zz)
        })).then((zz => {
          this.takeOneShot(zz)
        }), (zz => {
          uz("the custom game's texture pack didn't read: the player's own shows", zz)
        })), zz.getItem(lz.c, !0).then((zz => {
          this.takeStoredOwn(zz)
        }), (zz => {
          uz("the stored texture pack didn't read: the default pack shows", zz), this.takeStoredOwn(null)
        }))]), this.update()
      }
      takeOneShot(zz) {
        var uz;
        null === zz || this.SZ || this.changes > 0 || this.picks > 0 || ((0, Hz.i)(zz.pack) ? this.host.warn("the custom game's texture pack names files on other sites: the player's own shows", null) : (this.onGamePack = !0, this.state = {
          pack: zz.pack,
          gameSource: null !== (uz = zz.source) && void 0 !== uz ? uz : ""
        }))
      }
      takeStoredOwn(zz) {
        if (this.playerPicked || this.SZ) return;
        if (this.ownChanges++, this.setOwn(wz(zz)), this.onGamePack) return;
        const uz = {
          pack: this.playerPack,
          gameSource: null
        };
        0 === this.changes ? this.state = uz : this.change(uz, !1)
      }
      async update() {
        const zz = this.playerPack,
          uz = null === zz || void 0 === zz ? void 0 : zz.metaData.id;
        if (!zz || !uz || !this.host.fetchLatest || uz === nz.c || uz === nz.r.CUSTOM) return;
        const bz = nz.t[uz];
        if (void 0 === bz || zz.metaData.version >= bz) return;
        let Ez;
        try {
          Ez = wz(await this.host.fetchLatest(uz))
        } catch (iz) {
          return void this.host.warn(`texture pack ${uz} didn't update to version ${bz}`, iz)
        }
        null === Ez || this.SZ || this.playerPack !== zz || (this.ownChanges++, this.setOwn(Ez), this.onGamePack || this.change({
          pack: Ez,
          gameSource: null
        }, !1), await this.storePlayerPack(Ez) && this.announce())
      }
      announce() {
        const zz = (0, Mz.b)();
        null !== zz && this.ownAnnouncements.add(zz)
      }
      setOwn(zz) {
        this.playerPack = zz;
        for (const bz of [...this.ownListeners]) try {
          bz()
        } catch (uz) {
          this.host.warn("a texture pack listener threw", uz)
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
          return null === zz ? (await this.host.store.removeItem(lz.c), !0) : await this.host.store.setItem(lz.c, zz)
        } catch (uz) {
          return this.host.warn("the texture pack wasn't stored: it shows until the page reloads", uz), !1
        }
      }
      change(zz, uz) {
        if (!this.SZ) {
          this.changes++, this.onGamePack = uz, this.state = zz;
          for (const zz of [...this.listeners.keys()]) this.deliver(zz)
        }
      }
      deliver(zz) {
        if (!this.SZ && this.listeners.has(zz) && this.listeners.get(zz) !== this.state) {
          this.listeners.set(zz, this.state);
          try {
            zz(this.state)
          } catch (uz) {
            this.host.warn("a texture pack listener threw", uz)
          }
        }
      }
    }
    async function Rz(zz, uz, bz) {
      const Ez = (0, tz.b)(await bz.fetchPack(uz));
      if (null !== Ez) return {
        pack: Ez,
        key: uz
      };
      const nz = await bz.packKey(zz);
      if (null === nz) return null;
      const iz = (0, tz.b)(await bz.fetchPack(nz));
      if (null === iz) throw new Error(`no texture pack at ${nz}`);
      return {
        pack: iz,
        key: nz
      }
    }

    function Kz(zz) {
      return null === zz || zz.metaData.id === nz.c
    }

    function wz(zz) {
      const uz = (0, tz.b)(zz);
      return Kz(uz) ? null : uz
    }
    async function Xz(zz) {
      let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : iz.e;
      if (null === zz.pack) return null;
      const {
        packAssets: Ez
      } = await Promise.all([bz.e(195), bz.e(44)]).then((() => bz(60634)));
      return Ez(zz, uz)
    }

    function fz(zz) {
      const uz = (0, lz.w)();
      return null === uz ? () => {} : (uz.onmessage = uz => {
        zz.readPlayerPack((0, Mz.e)(uz.data))
      }, () => {
        uz.close()
      })
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);