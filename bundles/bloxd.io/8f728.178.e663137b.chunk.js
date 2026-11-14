export const id = 178;
export const ids = [178];
export const modules = {
  8224: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Ic,
      f: () => rB
    });
    var Vc = nc(2432);

    function Ic() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const cB = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const Bc = new BroadcastChannel(Vc.h);
        Bc.postMessage({
          stored: cB
        }), Bc.close()
      } catch {
        return null
      }
      return cB
    }

    function rB(cB) {
      const Bc = "object" === typeof cB && null !== cB ? cB.stored : null;
      return "string" === typeof Bc ? Bc : null
    }
  },
  8219: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => uc,
      e: () => Ic,
      i: () => rB
    });
    var Vc = nc(2432);
    async function Ic(cB, Bc, nc) {
      let Ic = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const rB = uc(await cB.getItem(Vc.c, Bc));
      if (null === rB || Ic()) return null;
      const sc = await cB.getItem(Vc.e, Bc);
      return Ic() ? null : (await Promise.all([cB.removeItem(Vc.c), cB.removeItem(Vc.e)]).catch(nc), {
        pack: rB,
        source: "string" === typeof sc ? sc : null
      })
    }

    function rB(cB) {
      return (0, Vc.l)() ? Promise.resolve(null) : Ic(cB, !1, (cB => {
        console.error("Error removing temporary texture pack: ", cB)
      }), Vc.l)
    }

    function uc(cB) {
      if ("object" !== typeof cB || null === cB) return null;
      const Bc = cB.metaData;
      return "object" !== typeof Bc || null === Bc || "string" !== typeof Bc.id ? null : cB
    }
  },
  41236: (cB, Bc, nc) => {
    function Vc(cB) {
      return null === cB.gameSource ? "player" : "customGame"
    }
    nc.d(Bc, {
      c: () => rB,
      e: () => ec,
      g: () => mB,
      k: () => Vc
    });
    const Ic = /^data:[\w.+/-]*;base64,[A-Za-z0-9+/]*={0,2}$/;

    function rB(cB) {
      return "" === cB || "string" === typeof cB && Ic.test(cB)
    }

    function uc(cB) {
      return "object" === typeof cB && null !== cB && ("earth" === cB.type || Object.entries(cB).every((cB => {
        let [Bc, nc] = cB;
        return "type" === Bc || rB(nc)
      })))
    }
    const sc = /(?:src|image|image-set|cross-fade)\(/i,
      Mc = /url\(\s*(?:"(?<doubleQuoted>[^"]*)"|'(?<singleQuoted>[^']*)'|(?<unquoted>[^"'()\s]*))\s*\)/gi,
      Pc = /url\(/gi,
      qB = ["https://bloxd.invalid/", "http://bloxd.invalid/"],
      Oc = new Set([...qB.map((cB => new URL(cB).origin)), "https://fonts.gstatic.com"]),
      Tc = new Set(["https://i.imgur.com/MEcjBFQ.png"]);

    function fc(cB) {
      var Bc, nc;
      if (cB.includes("\\") || sc.test(cB)) return !0;
      const Vc = [...cB.matchAll(Mc)];
      return Vc.length !== (null !== (Bc = null === (nc = cB.match(Pc)) || void 0 === nc ? void 0 : nc.length) && void 0 !== Bc ? Bc : 0) || !Vc.every((cB => {
        var Bc, nc, Vc;
        let {
          groups: Ic
        } = cB;
        return function(cB) {
          try {
            return qB.every((Bc => {
              const nc = new URL(cB, Bc);
              return "data:" === nc.protocol || Oc.has(nc.origin) || Tc.has(nc.href)
            }))
          } catch {
            return !1
          }
        }(null !== (Bc = null !== (nc = null !== (Vc = null === Ic || void 0 === Ic ? void 0 : Ic.doubleQuoted) && void 0 !== Vc ? Vc : null === Ic || void 0 === Ic ? void 0 : Ic.singleQuoted) && void 0 !== nc ? nc : null === Ic || void 0 === Ic ? void 0 : Ic.unquoted) && void 0 !== Bc ? Bc : "")
      }))
    }

    function mB(cB) {
      var Bc, nc, Vc, Ic, sc, Mc, Pc;
      const qB = [...Object.values(null !== (Bc = cB.textureOverrides) && void 0 !== Bc ? Bc : {}), ...Object.values(null !== (nc = cB.modelOverrides) && void 0 !== nc ? nc : {})],
        Oc = [...Object.values(null !== (Vc = null === (Ic = cB.customCss) || void 0 === Ic ? void 0 : Ic.fontFaces) && void 0 !== Vc ? Vc : {}), ...Object.values(null !== (sc = null === (Mc = cB.customCss) || void 0 === Mc ? void 0 : Mc.classStyles) && void 0 !== sc ? sc : {})].flatMap((cB => Object.values(null !== cB && void 0 !== cB ? cB : {})));
      return !qB.every(rB) || !Object.values(null !== (Pc = cB.skyBoxes) && void 0 !== Pc ? Pc : {}).every(uc) || Oc.some((cB => "string" === typeof cB && fc(cB)))
    }

    function ec(cB, Bc) {
      if (null === cB || "player" === Bc || !mB(cB)) return cB;
      const nc = {
        ...cB
      };
      return cB.textureOverrides && (nc.textureOverrides = Sc(cB.textureOverrides, rB, "texture")), cB.modelOverrides && (nc.modelOverrides = Sc(cB.modelOverrides, rB, "model")), cB.skyBoxes && (nc.skyBoxes = Sc(cB.skyBoxes, uc, "sky")), cB.customCss && (nc.customCss = function(cB) {
        const Bc = cB => Sc(cB, (cB => "string" === typeof cB && !fc(cB)), "CSS"),
          {
            fontFaces: nc,
            classStyles: Vc
          } = tB(cB) ? cB : {},
          Ic = {};
        for (const [rB, uc] of Object.entries(tB(Vc) ? Vc : {})) Ic[rB] = Bc(uc);
        return {
          fontFaces: (Array.isArray(nc) ? nc : []).map(Bc),
          classStyles: Ic
        }
      }(cB.customCss)), nc
    }

    function tB(cB) {
      return "object" === typeof cB && null !== cB && !Array.isArray(cB)
    }

    function Sc(cB, Bc, nc) {
      const Vc = Object.entries(tB(cB) ? cB : {}),
        Ic = Vc.filter((cB => {
          let [, nc] = cB;
          return !Bc(nc)
        }));
      if (Ic.length > 0) {
        const cB = Ic.map((cB => {
          let [Bc] = cB;
          return Bc
        }));
        console.warn(`Ignoring a custom game texture pack's ${nc} files that name another site: ${cB.join(", ")}`)
      }
      return Object.fromEntries(Vc.filter((cB => {
        let [, nc] = cB;
        return Bc(nc)
      })))
    }
  },
  41240: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => fc,
      e: () => zB,
      h: () => yB
    });
    var Vc = nc(867),
      Ic = nc(2339),
      rB = nc(2418),
      uc = nc(2432),
      sc = nc(8224),
      Mc = nc(8219),
      Pc = nc(41236),
      qB = nc(39031),
      Oc = nc(39016);
    const Tc = {
      pack: null,
      gameSource: null
    };
    class fc {
      constructor(cB) {
        this.host = cB, this.ready = void 0, this.state = Tc, this.playerPack = null, this.onGamePack = !1, this.confirmGamePack = null, this.skippedKey = null, this.ownAnnouncements = new Set, this.listeners = new Map, this.ownListeners = new Set, this.changes = 0, this.picks = 0, this.playerPicked = !1, this.ownChanges = 0, this.CV = !1, (0, uc.i)(), this.ready = this.readStored()
      }
      readyWithin(cB) {
        return Promise.race([this.ready, new Promise((Bc => {
          setTimeout(Bc, cB)
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
      onPlayerPackChange(cB) {
        return this.ownListeners.add(cB), () => {
          this.ownListeners.delete(cB)
        }
      }
      isUsingCustomGameTexturePack(cB) {
        return (0, Oc.g)(this.state, cB)
      }
      setGamePackConfirm(cB) {
        this.confirmGamePack = cB
      }
      subscribe(cB) {
        return this.listeners.set(cB, null), this.ready.then((() => {
          this.deliver(cB)
        })), () => {
          this.listeners.delete(cB)
        }
      }
      async setPlayerPack(cB) {
        const Bc = ec(cB) ? null : cB;
        this.picks++, this.playerPicked = !0, this.ownChanges++, this.setOwn(Bc), this.change({
          pack: Bc,
          gameSource: null
        }, !1);
        const nc = await this.storePlayerPack(Bc);
        return nc && this.announce(), nc
      }
      async packForGame(cB, Bc, nc) {
        await this.readyWithin(Math.max(0, (null !== nc && void 0 !== nc ? nc : performance.now() + qB.d) - performance.now()));
        const Ic = ++this.picks,
          rB = (0, Vc.k)(cB) ? (0, Vc.r)(cB) : null;
        if (null === rB) return void this.usePlayerPack();
        let uc;
        const sc = function(cB) {
          let Bc;
          const nc = new Promise(((nc, Vc) => {
            Bc = setTimeout((() => {
              Vc(new Error(`no answer in ${cB} ms`))
            }), cB)
          }));
          return nc.catch((() => {})), {
            passed: nc,
            clear: () => {
              clearTimeout(Bc)
            }
          }
        }(2e4);
        try {
          const cB = await Promise.race([Bc.packKey(rB), sc.passed]);
          if (null !== cB && this.onGamePack && this.state.gameSource === cB) return;
          if (null !== cB && cB === this.skippedKey) return void(this.CV || this.picks !== Ic || this.usePlayerPack());
          uc = null === cB ? null : await Promise.race([mB(rB, cB, Bc), sc.passed])
        } catch (Oc) {
          const cB = !this.CV && this.picks === Ic && this.holdsOtherGamePack(rB);
          return this.host.warn(`the texture pack of ${rB} didn't load: ${cB?"the player's own shows":"the pack in play stays"}`, Oc), void(cB && this.usePlayerPack())
        } finally {
          sc.clear()
        }
        if (this.CV || this.picks !== Ic) return;
        null !== uc && (0, Pc.g)(uc.pack) && (this.host.warn(`the texture pack of ${rB} names files on other sites: the player's own shows`, null), uc = null);
        const Mc = null === uc || await this.confirmed(uc.pack, rB) ? null : uc.key;
        this.CV || this.picks !== Ic || (null !== Mc && (this.skippedKey = Mc, uc = null), null === uc ? this.usePlayerPack() : (this.onGamePack = !0, this.change({
          pack: uc.pack,
          gameSource: uc.key
        }, !0)))
      }
      endGamePack() {
        this.picks++, this.usePlayerPack()
      }
      holdsOtherGamePack(cB) {
        return this.onGamePack && "" !== this.state.gameSource && !this.isUsingCustomGameTexturePack(cB)
      }
      async confirmed(cB, Bc) {
        const nc = this.confirmGamePack;
        if (null === nc) return !0;
        try {
          return await nc(cB, Bc)
        } catch (Vc) {
          return this.host.warn(`the texture pack prompt of ${Bc} failed: the pack is skipped`, Vc), !1
        }
      }
      async readPlayerPack() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (null !== cB && this.ownAnnouncements.delete(cB)) return;
        await this.ready;
        const Bc = this.ownChanges;
        let nc;
        try {
          nc = await this.host.store.getItem(uc.b, !0)
        } catch (sc) {
          return void this.host.warn("the stored texture pack didn't read again: the pack in play stays", sc)
        }
        if (this.CV || this.ownChanges !== Bc) return;
        const Vc = tB(nc);
        var Ic, rB;
        (Ic = Vc, rB = this.playerPack, Sc(Ic, rB)) || (this.ownChanges++, this.setOwn(Vc), this.onGamePack || this.change({
          pack: Vc,
          gameSource: null
        }, !1))
      }
      joinedWithout() {
        this.picks++
      }
      dispose() {
        this.CV = !0, this.listeners.clear()
      }
      async readStored() {
        const {
          store: cB,
          warn: Bc
        } = this.host;
        await Promise.all([!1 === this.host.oneShot ? void 0 : (0, Mc.e)(cB, !0, (cB => {
          Bc("the custom game's texture pack wasn't removed from storage", cB)
        })).then((cB => {
          this.takeOneShot(cB)
        }), (cB => {
          Bc("the custom game's texture pack didn't read: the player's own shows", cB)
        })), cB.getItem(uc.b, !0).then((cB => {
          this.takeStoredOwn(cB)
        }), (cB => {
          Bc("the stored texture pack didn't read: the default pack shows", cB), this.takeStoredOwn(null)
        }))]), this.update()
      }
      takeOneShot(cB) {
        var Bc;
        null === cB || this.CV || this.changes > 0 || this.picks > 0 || ((0, Pc.g)(cB.pack) ? this.host.warn("the custom game's texture pack names files on other sites: the player's own shows", null) : (this.onGamePack = !0, this.state = {
          pack: cB.pack,
          gameSource: null !== (Bc = cB.source) && void 0 !== Bc ? Bc : ""
        }))
      }
      takeStoredOwn(cB) {
        if (this.playerPicked || this.CV) return;
        if (this.ownChanges++, this.setOwn(tB(cB)), this.onGamePack) return;
        const Bc = {
          pack: this.playerPack,
          gameSource: null
        };
        0 === this.changes ? this.state = Bc : this.change(Bc, !1)
      }
      async update() {
        const cB = this.playerPack,
          Bc = null === cB || void 0 === cB ? void 0 : cB.metaData.id;
        if (!cB || !Bc || !this.host.fetchLatest || Bc === Ic.e || Bc === Ic.o.CUSTOM) return;
        const nc = Ic.p[Bc];
        if (void 0 === nc || cB.metaData.version >= nc) return;
        let Vc;
        try {
          Vc = tB(await this.host.fetchLatest(Bc))
        } catch (rB) {
          return void this.host.warn(`texture pack ${Bc} didn't update to version ${nc}`, rB)
        }
        null === Vc || this.CV || this.playerPack !== cB || (this.ownChanges++, this.setOwn(Vc), this.onGamePack || this.change({
          pack: Vc,
          gameSource: null
        }, !1), await this.storePlayerPack(Vc) && this.announce())
      }
      announce() {
        const cB = (0, sc.c)();
        null !== cB && this.ownAnnouncements.add(cB)
      }
      setOwn(cB) {
        this.playerPack = cB;
        for (const nc of [...this.ownListeners]) try {
          nc()
        } catch (Bc) {
          this.host.warn("a texture pack listener threw", Bc)
        }
      }
      usePlayerPack() {
        this.onGamePack && this.change({
          pack: this.playerPack,
          gameSource: null
        }, !1)
      }
      async storePlayerPack(cB) {
        try {
          return null === cB ? (await this.host.store.removeItem(uc.b), !0) : await this.host.store.setItem(uc.b, cB)
        } catch (Bc) {
          return this.host.warn("the texture pack wasn't stored: it shows until the page reloads", Bc), !1
        }
      }
      change(cB, Bc) {
        if (!this.CV) {
          this.changes++, this.onGamePack = Bc, this.state = cB;
          for (const cB of [...this.listeners.keys()]) this.deliver(cB)
        }
      }
      deliver(cB) {
        if (!this.CV && this.listeners.has(cB) && this.listeners.get(cB) !== this.state) {
          this.listeners.set(cB, this.state);
          try {
            cB(this.state)
          } catch (Bc) {
            this.host.warn("a texture pack listener threw", Bc)
          }
        }
      }
    }
    async function mB(cB, Bc, nc) {
      const Vc = (0, Mc.b)(await nc.fetchPack(Bc));
      if (null !== Vc) return {
        pack: Vc,
        key: Bc
      };
      const Ic = await nc.packKey(cB);
      if (null === Ic) return null;
      const rB = (0, Mc.b)(await nc.fetchPack(Ic));
      if (null === rB) throw new Error(`no texture pack at ${Ic}`);
      return {
        pack: rB,
        key: Ic
      }
    }

    function ec(cB) {
      return null === cB || cB.metaData.id === Ic.e
    }

    function tB(cB) {
      const Bc = (0, Mc.b)(cB);
      return ec(Bc) ? null : Bc
    }

    function Sc(cB, Bc) {
      if (cB === Bc) return !0;
      if ("object" !== typeof cB || "object" !== typeof Bc || null === cB || null === Bc || Array.isArray(cB) !== Array.isArray(Bc)) return !1;
      const nc = cB,
        Vc = Bc,
        Ic = Object.keys(nc);
      return Ic.length === Object.keys(Vc).length && Ic.every((cB => Object.prototype.hasOwnProperty.call(Vc, cB) && Sc(nc[cB], Vc[cB])))
    }
    async function yB(cB) {
      let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rB.e;
      if (null === cB.pack) return null;
      const {
        packAssets: Vc
      } = await Promise.all([nc.e(60), nc.e(181), nc.e(83), nc.e(184), nc.e(39)]).then((() => nc(59400)));
      return Vc(cB, Bc)
    }

    function zB(cB) {
      const Bc = (0, uc.o)();
      return null === Bc ? () => {} : (Bc.onmessage = Bc => {
        cB.readPlayerPack((0, sc.f)(Bc.data))
      }, () => {
        Bc.close()
      })
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);