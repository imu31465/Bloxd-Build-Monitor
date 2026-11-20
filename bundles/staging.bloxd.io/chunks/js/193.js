export const id = 193;
export const ids = [193];
export const modules = {
  9066: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => Sv,
      f: () => ev
    });
    var hv = Pv(3026);

    function Sv() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const vv = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const zv = new BroadcastChannel(hv.j);
        zv.postMessage({
          stored: vv
        }), zv.close()
      } catch {
        return null
      }
      return vv
    }

    function ev(vv) {
      const zv = "object" === typeof vv && null !== vv ? vv.stored : null;
      return "string" === typeof zv ? zv : null
    }
  },
  9063: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => gv,
      d: () => Sv,
      f: () => ev
    });
    var hv = Pv(3026);
    async function Sv(vv, zv, Pv) {
      let Sv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const ev = gv(await vv.getItem(hv.d, zv));
      if (null === ev || Sv()) return null;
      const pv = await vv.getItem(hv.h, zv);
      return Sv() ? null : (await async function(vv) {
        await Promise.all([vv.removeItem(hv.d), vv.removeItem(hv.h)])
      }(vv).catch(Pv), {
        pack: ev,
        source: "string" === typeof pv ? pv : null
      })
    }

    function ev(vv) {
      return (0, hv.o)() ? Promise.resolve(null) : Sv(vv, !1, (vv => {
        console.error("Error removing temporary texture pack: ", vv)
      }), hv.o)
    }

    function gv(vv) {
      if ("object" !== typeof vv || null === vv) return null;
      const zv = vv.metaData;
      return "object" !== typeof zv || null === zv || "string" !== typeof zv.id ? null : vv
    }
  },
  42716: (vv, zv, Pv) => {
    function hv(vv) {
      return null === vv.gameSource ? "player" : "customGame"
    }
    Pv.d(zv, {
      e: () => ev,
      h: () => sv,
      l: () => av,
      m: () => hv
    });
    const Sv = /^data:[\w.+/-]*;base64,[A-Za-z0-9+/]*={0,2}$/;

    function ev(vv) {
      return "" === vv || "string" === typeof vv && Sv.test(vv)
    }

    function gv(vv) {
      return "object" === typeof vv && null !== vv && ("earth" === vv.type || Object.entries(vv).every((vv => {
        let [zv, Pv] = vv;
        return "type" === zv || ev(Pv)
      })))
    }
    const pv = /(?:src|image|image-set|cross-fade)\(/i,
      dv = /url\(\s*(?:"(?<doubleQuoted>[^"]*)"|'(?<singleQuoted>[^']*)'|(?<unquoted>[^"'()\s]*))\s*\)/gi,
      Nv = /url\(/gi,
      lv = ["https://bloxd.invalid/", "http://bloxd.invalid/"],
      Tv = new Set([...lv.map((vv => new URL(vv).origin)), "https://fonts.gstatic.com"]),
      Wv = new Set(["https://i.imgur.com/MEcjBFQ.png"]);

    function wv(vv) {
      var zv, Pv;
      if (vv.includes("\\") || pv.test(vv)) return !0;
      const hv = [...vv.matchAll(dv)];
      return hv.length !== (null !== (zv = null === (Pv = vv.match(Nv)) || void 0 === Pv ? void 0 : Pv.length) && void 0 !== zv ? zv : 0) || !hv.every((vv => {
        var zv, Pv, hv;
        let {
          groups: Sv
        } = vv;
        return function(vv) {
          try {
            return lv.every((zv => {
              const Pv = new URL(vv, zv);
              return "data:" === Pv.protocol || Tv.has(Pv.origin) || Wv.has(Pv.href)
            }))
          } catch {
            return !1
          }
        }(null !== (zv = null !== (Pv = null !== (hv = null === Sv || void 0 === Sv ? void 0 : Sv.doubleQuoted) && void 0 !== hv ? hv : null === Sv || void 0 === Sv ? void 0 : Sv.singleQuoted) && void 0 !== Pv ? Pv : null === Sv || void 0 === Sv ? void 0 : Sv.unquoted) && void 0 !== zv ? zv : "")
      }))
    }

    function av(vv) {
      var zv, Pv, hv, Sv, pv, dv, Nv;
      const lv = [...Object.values(null !== (zv = vv.textureOverrides) && void 0 !== zv ? zv : {}), ...Object.values(null !== (Pv = vv.modelOverrides) && void 0 !== Pv ? Pv : {})],
        Tv = [...Object.values(null !== (hv = null === (Sv = vv.customCss) || void 0 === Sv ? void 0 : Sv.fontFaces) && void 0 !== hv ? hv : {}), ...Object.values(null !== (pv = null === (dv = vv.customCss) || void 0 === dv ? void 0 : dv.classStyles) && void 0 !== pv ? pv : {})].flatMap((vv => Object.values(null !== vv && void 0 !== vv ? vv : {})));
      return !lv.every(ev) || !Object.values(null !== (Nv = vv.skyBoxes) && void 0 !== Nv ? Nv : {}).every(gv) || Tv.some((vv => "string" === typeof vv && wv(vv)))
    }

    function sv(vv, zv) {
      if (null === vv || "player" === zv || !av(vv)) return vv;
      const Pv = {
        ...vv
      };
      return vv.textureOverrides && (Pv.textureOverrides = iv(vv.textureOverrides, ev, "texture")), vv.modelOverrides && (Pv.modelOverrides = iv(vv.modelOverrides, ev, "model")), vv.skyBoxes && (Pv.skyBoxes = iv(vv.skyBoxes, gv, "sky")), vv.customCss && (Pv.customCss = function(vv) {
        const zv = vv => iv(vv, (vv => "string" === typeof vv && !wv(vv)), "CSS"),
          {
            fontFaces: Pv,
            classStyles: hv
          } = Cv(vv) ? vv : {},
          Sv = {};
        for (const [ev, gv] of Object.entries(Cv(hv) ? hv : {})) Sv[ev] = zv(gv);
        return {
          fontFaces: (Array.isArray(Pv) ? Pv : []).map(zv),
          classStyles: Sv
        }
      }(vv.customCss)), Pv
    }

    function Cv(vv) {
      return "object" === typeof vv && null !== vv && !Array.isArray(vv)
    }

    function iv(vv, zv, Pv) {
      const hv = Object.entries(Cv(vv) ? vv : {}),
        Sv = hv.filter((vv => {
          let [, Pv] = vv;
          return !zv(Pv)
        }));
      if (Sv.length > 0) {
        const vv = Sv.map((vv => {
          let [zv] = vv;
          return zv
        }));
        console.warn(`Ignoring a custom game texture pack's ${Pv} files that name another site: ${vv.join(", ")}`)
      }
      return Object.fromEntries(hv.filter((vv => {
        let [, Pv] = vv;
        return zv(Pv)
      })))
    }
  },
  42720: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => av,
      i: () => Gv,
      j: () => cv
    });
    var hv = Pv(1002),
      Sv = Pv(2944),
      ev = Pv(3013),
      gv = Pv(3026),
      pv = Pv(9066),
      dv = Pv(9063),
      Nv = Pv(42716),
      lv = Pv(40348),
      Tv = Pv(40337),
      Wv = Pv(4788);
    const wv = {
      pack: null,
      gameSource: null
    };
    class av {
      constructor(vv) {
        this.host = vv, this.ready = void 0, this.state = wv, this.playerPack = null, this.onGamePack = !1, this.confirmGamePack = null, this.skippedKey = null, this.ownAnnouncements = new Set, this.listeners = new Map, this.ownListeners = new Set, this.changes = 0, this.picks = 0, this.playerPicked = !1, this.ownChanges = 0, this.ea = !1, (0, gv.k)(), this.ready = this.readStored()
      }
      readyWithin(vv) {
        return Promise.race([this.ready, new Promise((zv => {
          setTimeout(zv, vv)
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
      onPlayerPackChange(vv) {
        return this.ownListeners.add(vv), () => {
          this.ownListeners.delete(vv)
        }
      }
      isUsingCustomGameTexturePack(vv) {
        return (0, Tv.e)(this.state, vv)
      }
      setGamePackConfirm(vv) {
        this.confirmGamePack = vv
      }
      subscribe(vv) {
        return this.listeners.set(vv, null), this.ready.then((() => {
          this.deliver(vv)
        })), () => {
          this.listeners.delete(vv)
        }
      }
      async setPlayerPack(vv) {
        const zv = Cv(vv) ? null : vv;
        this.picks++, this.playerPicked = !0, this.ownChanges++, this.setOwn(zv), this.change({
          pack: zv,
          gameSource: null
        }, !1);
        const Pv = await this.storePlayerPack(zv);
        return Pv && this.announce(), Pv
      }
      async packForGame(vv, zv, Pv) {
        await this.readyWithin(Math.max(0, (null !== Pv && void 0 !== Pv ? Pv : performance.now() + lv.b) - performance.now()));
        const Sv = ++this.picks,
          ev = (0, hv.l)(vv) ? (0, hv.q)(vv) : null;
        if (null === ev) return void this.usePlayerPack();
        let gv;
        const pv = function(vv) {
          let zv;
          const Pv = new Promise(((Pv, hv) => {
            zv = setTimeout((() => {
              hv(new Error(`no answer in ${vv} ms`))
            }), vv)
          }));
          return Pv.catch((() => {})), {
            passed: Pv,
            clear: () => {
              clearTimeout(zv)
            }
          }
        }(2e4);
        try {
          const vv = await Promise.race([zv.packKey(ev), pv.passed]);
          if (null !== vv && this.onGamePack && this.state.gameSource === vv) return;
          if (null !== vv && vv === this.skippedKey) return void(this.ea || this.picks !== Sv || this.usePlayerPack());
          gv = null === vv ? null : await Promise.race([sv(ev, vv, zv), pv.passed])
        } catch (Tv) {
          const vv = !this.ea && this.picks === Sv && this.holdsOtherGamePack(ev);
          return this.host.warn(`the texture pack of ${ev} didn't load: ${vv?"the player's own shows":"the pack in play stays"}`, Tv), void(vv && this.usePlayerPack())
        } finally {
          pv.clear()
        }
        if (this.ea || this.picks !== Sv) return;
        null !== gv && (0, Nv.l)(gv.pack) && (this.host.warn(`the texture pack of ${ev} names files on other sites: the player's own shows`, null), gv = null);
        const dv = null === gv || await this.confirmed(gv.pack, ev) ? null : gv.key;
        this.ea || this.picks !== Sv || (null !== dv && (this.skippedKey = dv, gv = null), null === gv ? this.usePlayerPack() : (this.onGamePack = !0, this.change({
          pack: gv.pack,
          gameSource: gv.key
        }, !0)))
      }
      endGamePack() {
        this.picks++, this.usePlayerPack()
      }
      holdsOtherGamePack(vv) {
        return this.onGamePack && "" !== this.state.gameSource && !this.isUsingCustomGameTexturePack(vv)
      }
      async confirmed(vv, zv) {
        const Pv = this.confirmGamePack;
        if (null === Pv) return !0;
        try {
          return await Pv(vv, zv)
        } catch (hv) {
          return this.host.warn(`the texture pack prompt of ${zv} failed: the pack is skipped`, hv), !1
        }
      }
      async readPlayerPack() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (null !== vv && this.ownAnnouncements.delete(vv)) return;
        await this.ready;
        const zv = this.ownChanges;
        let Pv;
        try {
          Pv = await this.host.store.getItem(gv.c, !0)
        } catch (Sv) {
          return void this.host.warn("the stored texture pack didn't read again: the pack in play stays", Sv)
        }
        if (this.ea || this.ownChanges !== zv) return;
        const hv = iv(Pv);
        (0, Wv.e)(hv, this.playerPack) || (this.ownChanges++, this.setOwn(hv), this.onGamePack || this.change({
          pack: hv,
          gameSource: null
        }, !1))
      }
      joinedWithout() {
        this.picks++
      }
      dispose() {
        this.ea = !0, this.listeners.clear()
      }
      async readStored() {
        const {
          store: vv,
          warn: zv
        } = this.host;
        await Promise.all([!1 === this.host.oneShot ? void 0 : (0, dv.d)(vv, !0, (vv => {
          zv("the custom game's texture pack wasn't removed from storage", vv)
        })).then((vv => {
          this.takeOneShot(vv)
        }), (vv => {
          zv("the custom game's texture pack didn't read: the player's own shows", vv)
        })), vv.getItem(gv.c, !0).then((vv => {
          this.takeStoredOwn(vv)
        }), (vv => {
          zv("the stored texture pack didn't read: the default pack shows", vv), this.takeStoredOwn(null)
        }))]), this.update()
      }
      takeOneShot(vv) {
        var zv;
        null === vv || this.ea || this.changes > 0 || this.picks > 0 || ((0, Nv.l)(vv.pack) ? this.host.warn("the custom game's texture pack names files on other sites: the player's own shows", null) : (this.onGamePack = !0, this.state = {
          pack: vv.pack,
          gameSource: null !== (zv = vv.source) && void 0 !== zv ? zv : ""
        }))
      }
      takeStoredOwn(vv) {
        if (this.playerPicked || this.ea) return;
        if (this.ownChanges++, this.setOwn(iv(vv)), this.onGamePack) return;
        const zv = {
          pack: this.playerPack,
          gameSource: null
        };
        0 === this.changes ? this.state = zv : this.change(zv, !1)
      }
      async update() {
        const vv = this.playerPack,
          zv = null === vv || void 0 === vv ? void 0 : vv.metaData.id;
        if (!vv || !zv || !this.host.fetchLatest || zv === Sv.b || zv === Sv.j.CUSTOM) return;
        const Pv = Sv.l[zv];
        if (void 0 === Pv || vv.metaData.version >= Pv) return;
        let hv;
        try {
          hv = iv(await this.host.fetchLatest(zv))
        } catch (ev) {
          return void this.host.warn(`texture pack ${zv} didn't update to version ${Pv}`, ev)
        }
        null === hv || this.ea || this.playerPack !== vv || (this.ownChanges++, this.setOwn(hv), this.onGamePack || this.change({
          pack: hv,
          gameSource: null
        }, !1), await this.storePlayerPack(hv) && this.announce())
      }
      announce() {
        const vv = (0, pv.d)();
        null !== vv && this.ownAnnouncements.add(vv)
      }
      setOwn(vv) {
        this.playerPack = vv;
        for (const Pv of [...this.ownListeners]) try {
          Pv()
        } catch (zv) {
          this.host.warn("a texture pack listener threw", zv)
        }
      }
      usePlayerPack() {
        this.onGamePack && this.change({
          pack: this.playerPack,
          gameSource: null
        }, !1)
      }
      async storePlayerPack(vv) {
        try {
          return null === vv ? (await this.host.store.removeItem(gv.c), !0) : await this.host.store.setItem(gv.c, vv)
        } catch (zv) {
          return this.host.warn("the texture pack wasn't stored: it shows until the page reloads", zv), !1
        }
      }
      change(vv, zv) {
        if (!this.ea) {
          this.changes++, this.onGamePack = zv, this.state = vv;
          for (const vv of [...this.listeners.keys()]) this.deliver(vv)
        }
      }
      deliver(vv) {
        if (!this.ea && this.listeners.has(vv) && this.listeners.get(vv) !== this.state) {
          this.listeners.set(vv, this.state);
          try {
            vv(this.state)
          } catch (zv) {
            this.host.warn("a texture pack listener threw", zv)
          }
        }
      }
    }
    async function sv(vv, zv, Pv) {
      const hv = (0, dv.b)(await Pv.fetchPack(zv));
      if (null !== hv) return {
        pack: hv,
        key: zv
      };
      const Sv = await Pv.packKey(vv);
      if (null === Sv) return null;
      const ev = (0, dv.b)(await Pv.fetchPack(Sv));
      if (null === ev) throw new Error(`no texture pack at ${Sv}`);
      return {
        pack: ev,
        key: Sv
      }
    }

    function Cv(vv) {
      return null === vv || vv.metaData.id === Sv.b
    }

    function iv(vv) {
      const zv = (0, dv.b)(vv);
      return Cv(zv) ? null : zv
    }
    async function cv(vv) {
      let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ev.d;
      if (null === vv.pack) return null;
      const {
        packAssets: hv
      } = await Promise.all([Pv.e(195), Pv.e(44)]).then((() => Pv(60916)));
      return hv(vv, zv)
    }

    function Gv(vv) {
      const zv = (0, gv.r)();
      return null === zv ? () => {} : (zv.onmessage = zv => {
        vv.readPlayerPack((0, pv.f)(zv.data))
      }, () => {
        zv.close()
      })
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);