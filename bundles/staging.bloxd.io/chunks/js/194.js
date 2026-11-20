export const id = 194;
export const ids = [194];
export const modules = {
  9154: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ob,
      c: () => Gb
    });
    var Bb = hb(3048);

    function Ob() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const bb = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const ub = new BroadcastChannel(Bb.n);
        ub.postMessage({
          stored: bb
        }), ub.close()
      } catch {
        return null
      }
      return bb
    }

    function Gb(bb) {
      const ub = "object" === typeof bb && null !== bb ? bb.stored : null;
      return "string" === typeof ub ? ub : null
    }
  },
  9145: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Ub,
      h: () => Ob,
      k: () => Gb
    });
    var Bb = hb(3048);
    async function Ob(bb, ub, hb) {
      let Ob = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const Gb = Ub(await bb.getItem(Bb.f, ub));
      if (null === Gb || Ob()) return null;
      const Lb = await bb.getItem(Bb.j, ub);
      return Ob() ? null : (await async function(bb) {
        await Promise.all([bb.removeItem(Bb.f), bb.removeItem(Bb.j)])
      }(bb).catch(hb), {
        pack: Gb,
        source: "string" === typeof Lb ? Lb : null
      })
    }

    function Gb(bb) {
      return (0, Bb.t)() ? Promise.resolve(null) : Ob(bb, !1, (bb => {
        console.error("Error removing temporary texture pack: ", bb)
      }), Bb.t)
    }

    function Ub(bb) {
      if ("object" !== typeof bb || null === bb) return null;
      const ub = bb.metaData;
      return "object" !== typeof ub || null === ub || "string" !== typeof ub.id ? null : bb
    }
  },
  42730: (bb, ub, hb) => {
    function Bb(bb) {
      return null === bb.gameSource ? "player" : "customGame"
    }
    hb.d(ub, {
      d: () => Gb,
      g: () => pb,
      i: () => Xb,
      j: () => Bb
    });
    const Ob = /^data:[\w.+/-]*;base64,[A-Za-z0-9+/]*={0,2}$/;

    function Gb(bb) {
      return "" === bb || "string" === typeof bb && Ob.test(bb)
    }

    function Ub(bb) {
      return "object" === typeof bb && null !== bb && ("earth" === bb.type || Object.entries(bb).every((bb => {
        let [ub, hb] = bb;
        return "type" === ub || Gb(hb)
      })))
    }
    const Lb = /(?:src|image|image-set|cross-fade)\(/i,
      Yb = /url\(\s*(?:"(?<doubleQuoted>[^"]*)"|'(?<singleQuoted>[^']*)'|(?<unquoted>[^"'()\s]*))\s*\)/gi,
      Sb = /url\(/gi,
      ab = ["https://bloxd.invalid/", "http://bloxd.invalid/"],
      Hb = new Set([...ab.map((bb => new URL(bb).origin)), "https://fonts.gstatic.com"]),
      wb = new Set(["https://i.imgur.com/MEcjBFQ.png"]);

    function Zb(bb) {
      var ub, hb;
      if (bb.includes("\\") || Lb.test(bb)) return !0;
      const Bb = [...bb.matchAll(Yb)];
      return Bb.length !== (null !== (ub = null === (hb = bb.match(Sb)) || void 0 === hb ? void 0 : hb.length) && void 0 !== ub ? ub : 0) || !Bb.every((bb => {
        var ub, hb, Bb;
        let {
          groups: Ob
        } = bb;
        return function(bb) {
          try {
            return ab.every((ub => {
              const hb = new URL(bb, ub);
              return "data:" === hb.protocol || Hb.has(hb.origin) || wb.has(hb.href)
            }))
          } catch {
            return !1
          }
        }(null !== (ub = null !== (hb = null !== (Bb = null === Ob || void 0 === Ob ? void 0 : Ob.doubleQuoted) && void 0 !== Bb ? Bb : null === Ob || void 0 === Ob ? void 0 : Ob.singleQuoted) && void 0 !== hb ? hb : null === Ob || void 0 === Ob ? void 0 : Ob.unquoted) && void 0 !== ub ? ub : "")
      }))
    }

    function Xb(bb) {
      var ub, hb, Bb, Ob, Lb, Yb, Sb;
      const ab = [...Object.values(null !== (ub = bb.textureOverrides) && void 0 !== ub ? ub : {}), ...Object.values(null !== (hb = bb.modelOverrides) && void 0 !== hb ? hb : {})],
        Hb = [...Object.values(null !== (Bb = null === (Ob = bb.customCss) || void 0 === Ob ? void 0 : Ob.fontFaces) && void 0 !== Bb ? Bb : {}), ...Object.values(null !== (Lb = null === (Yb = bb.customCss) || void 0 === Yb ? void 0 : Yb.classStyles) && void 0 !== Lb ? Lb : {})].flatMap((bb => Object.values(null !== bb && void 0 !== bb ? bb : {})));
      return !ab.every(Gb) || !Object.values(null !== (Sb = bb.skyBoxes) && void 0 !== Sb ? Sb : {}).every(Ub) || Hb.some((bb => "string" === typeof bb && Zb(bb)))
    }

    function pb(bb, ub) {
      if (null === bb || "player" === ub || !Xb(bb)) return bb;
      const hb = {
        ...bb
      };
      return bb.textureOverrides && (hb.textureOverrides = Ab(bb.textureOverrides, Gb, "texture")), bb.modelOverrides && (hb.modelOverrides = Ab(bb.modelOverrides, Gb, "model")), bb.skyBoxes && (hb.skyBoxes = Ab(bb.skyBoxes, Ub, "sky")), bb.customCss && (hb.customCss = function(bb) {
        const ub = bb => Ab(bb, (bb => "string" === typeof bb && !Zb(bb)), "CSS"),
          {
            fontFaces: hb,
            classStyles: Bb
          } = ob(bb) ? bb : {},
          Ob = {};
        for (const [Gb, Ub] of Object.entries(ob(Bb) ? Bb : {})) Ob[Gb] = ub(Ub);
        return {
          fontFaces: (Array.isArray(hb) ? hb : []).map(ub),
          classStyles: Ob
        }
      }(bb.customCss)), hb
    }

    function ob(bb) {
      return "object" === typeof bb && null !== bb && !Array.isArray(bb)
    }

    function Ab(bb, ub, hb) {
      const Bb = Object.entries(ob(bb) ? bb : {}),
        Ob = Bb.filter((bb => {
          let [, hb] = bb;
          return !ub(hb)
        }));
      if (Ob.length > 0) {
        const bb = Ob.map((bb => {
          let [ub] = bb;
          return ub
        }));
        console.warn(`Ignoring a custom game texture pack's ${hb} files that name another site: ${bb.join(", ")}`)
      }
      return Object.fromEntries(Bb.filter((bb => {
        let [, hb] = bb;
        return ub(hb)
      })))
    }
  },
  42735: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Xb,
      g: () => Kb,
      j: () => lb
    });
    var Bb = hb(934),
      Ob = hb(2951),
      Gb = hb(3036),
      Ub = hb(3048),
      Lb = hb(9154),
      Yb = hb(9145),
      Sb = hb(42730),
      ab = hb(40483),
      Hb = hb(40470),
      wb = hb(4819);
    const Zb = {
      pack: null,
      gameSource: null
    };
    class Xb {
      constructor(bb) {
        this.host = bb, this.ready = void 0, this.state = Zb, this.playerPack = null, this.onGamePack = !1, this.confirmGamePack = null, this.skippedKey = null, this.ownAnnouncements = new Set, this.listeners = new Map, this.ownListeners = new Set, this.changes = 0, this.picks = 0, this.playerPicked = !1, this.ownChanges = 0, this.FZ = !1, (0, Ub.q)(), this.ready = this.readStored()
      }
      readyWithin(bb) {
        return Promise.race([this.ready, new Promise((ub => {
          setTimeout(ub, bb)
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
      onPlayerPackChange(bb) {
        return this.ownListeners.add(bb), () => {
          this.ownListeners.delete(bb)
        }
      }
      isUsingCustomGameTexturePack(bb) {
        return (0, Hb.h)(this.state, bb)
      }
      setGamePackConfirm(bb) {
        this.confirmGamePack = bb
      }
      subscribe(bb) {
        return this.listeners.set(bb, null), this.ready.then((() => {
          this.deliver(bb)
        })), () => {
          this.listeners.delete(bb)
        }
      }
      async setPlayerPack(bb) {
        const ub = ob(bb) ? null : bb;
        this.picks++, this.playerPicked = !0, this.ownChanges++, this.setOwn(ub), this.change({
          pack: ub,
          gameSource: null
        }, !1);
        const hb = await this.storePlayerPack(ub);
        return hb && this.announce(), hb
      }
      async packForGame(bb, ub, hb) {
        await this.readyWithin(Math.max(0, (null !== hb && void 0 !== hb ? hb : performance.now() + ab.d) - performance.now()));
        const Ob = ++this.picks,
          Gb = (0, Bb.i)(bb) ? (0, Bb.p)(bb) : null;
        if (null === Gb) return void this.usePlayerPack();
        let Ub;
        const Lb = function(bb) {
          let ub;
          const hb = new Promise(((hb, Bb) => {
            ub = setTimeout((() => {
              Bb(new Error(`no answer in ${bb} ms`))
            }), bb)
          }));
          return hb.catch((() => {})), {
            passed: hb,
            clear: () => {
              clearTimeout(ub)
            }
          }
        }(2e4);
        try {
          const bb = await Promise.race([ub.packKey(Gb), Lb.passed]);
          if (null !== bb && this.onGamePack && this.state.gameSource === bb) return;
          if (null !== bb && bb === this.skippedKey) return void(this.FZ || this.picks !== Ob || this.usePlayerPack());
          Ub = null === bb ? null : await Promise.race([pb(Gb, bb, ub), Lb.passed])
        } catch (Hb) {
          const bb = !this.FZ && this.picks === Ob && this.holdsOtherGamePack(Gb);
          return this.host.warn(`the texture pack of ${Gb} didn't load: ${bb?"the player's own shows":"the pack in play stays"}`, Hb), void(bb && this.usePlayerPack())
        } finally {
          Lb.clear()
        }
        if (this.FZ || this.picks !== Ob) return;
        null !== Ub && (0, Sb.i)(Ub.pack) && (this.host.warn(`the texture pack of ${Gb} names files on other sites: the player's own shows`, null), Ub = null);
        const Yb = null === Ub || await this.confirmed(Ub.pack, Gb) ? null : Ub.key;
        this.FZ || this.picks !== Ob || (null !== Yb && (this.skippedKey = Yb, Ub = null), null === Ub ? this.usePlayerPack() : (this.onGamePack = !0, this.change({
          pack: Ub.pack,
          gameSource: Ub.key
        }, !0)))
      }
      endGamePack() {
        this.picks++, this.usePlayerPack()
      }
      holdsOtherGamePack(bb) {
        return this.onGamePack && "" !== this.state.gameSource && !this.isUsingCustomGameTexturePack(bb)
      }
      async confirmed(bb, ub) {
        const hb = this.confirmGamePack;
        if (null === hb) return !0;
        try {
          return await hb(bb, ub)
        } catch (Bb) {
          return this.host.warn(`the texture pack prompt of ${ub} failed: the pack is skipped`, Bb), !1
        }
      }
      async readPlayerPack() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (null !== bb && this.ownAnnouncements.delete(bb)) return;
        await this.ready;
        const ub = this.ownChanges;
        let hb;
        try {
          hb = await this.host.store.getItem(Ub.c, !0)
        } catch (Ob) {
          return void this.host.warn("the stored texture pack didn't read again: the pack in play stays", Ob)
        }
        if (this.FZ || this.ownChanges !== ub) return;
        const Bb = Ab(hb);
        (0, wb.c)(Bb, this.playerPack) || (this.ownChanges++, this.setOwn(Bb), this.onGamePack || this.change({
          pack: Bb,
          gameSource: null
        }, !1))
      }
      joinedWithout() {
        this.picks++
      }
      dispose() {
        this.FZ = !0, this.listeners.clear()
      }
      async readStored() {
        const {
          store: bb,
          warn: ub
        } = this.host;
        await Promise.all([!1 === this.host.oneShot ? void 0 : (0, Yb.h)(bb, !0, (bb => {
          ub("the custom game's texture pack wasn't removed from storage", bb)
        })).then((bb => {
          this.takeOneShot(bb)
        }), (bb => {
          ub("the custom game's texture pack didn't read: the player's own shows", bb)
        })), bb.getItem(Ub.c, !0).then((bb => {
          this.takeStoredOwn(bb)
        }), (bb => {
          ub("the stored texture pack didn't read: the default pack shows", bb), this.takeStoredOwn(null)
        }))]), this.update()
      }
      takeOneShot(bb) {
        var ub;
        null === bb || this.FZ || this.changes > 0 || this.picks > 0 || ((0, Sb.i)(bb.pack) ? this.host.warn("the custom game's texture pack names files on other sites: the player's own shows", null) : (this.onGamePack = !0, this.state = {
          pack: bb.pack,
          gameSource: null !== (ub = bb.source) && void 0 !== ub ? ub : ""
        }))
      }
      takeStoredOwn(bb) {
        if (this.playerPicked || this.FZ) return;
        if (this.ownChanges++, this.setOwn(Ab(bb)), this.onGamePack) return;
        const ub = {
          pack: this.playerPack,
          gameSource: null
        };
        0 === this.changes ? this.state = ub : this.change(ub, !1)
      }
      async update() {
        const bb = this.playerPack,
          ub = null === bb || void 0 === bb ? void 0 : bb.metaData.id;
        if (!bb || !ub || !this.host.fetchLatest || ub === Ob.c || ub === Ob.m.CUSTOM) return;
        const hb = Ob.q[ub];
        if (void 0 === hb || bb.metaData.version >= hb) return;
        let Bb;
        try {
          Bb = Ab(await this.host.fetchLatest(ub))
        } catch (Gb) {
          return void this.host.warn(`texture pack ${ub} didn't update to version ${hb}`, Gb)
        }
        null === Bb || this.FZ || this.playerPack !== bb || (this.ownChanges++, this.setOwn(Bb), this.onGamePack || this.change({
          pack: Bb,
          gameSource: null
        }, !1), await this.storePlayerPack(Bb) && this.announce())
      }
      announce() {
        const bb = (0, Lb.b)();
        null !== bb && this.ownAnnouncements.add(bb)
      }
      setOwn(bb) {
        this.playerPack = bb;
        for (const hb of [...this.ownListeners]) try {
          hb()
        } catch (ub) {
          this.host.warn("a texture pack listener threw", ub)
        }
      }
      usePlayerPack() {
        this.onGamePack && this.change({
          pack: this.playerPack,
          gameSource: null
        }, !1)
      }
      async storePlayerPack(bb) {
        try {
          return null === bb ? (await this.host.store.removeItem(Ub.c), !0) : await this.host.store.setItem(Ub.c, bb)
        } catch (ub) {
          return this.host.warn("the texture pack wasn't stored: it shows until the page reloads", ub), !1
        }
      }
      change(bb, ub) {
        if (!this.FZ) {
          this.changes++, this.onGamePack = ub, this.state = bb;
          for (const bb of [...this.listeners.keys()]) this.deliver(bb)
        }
      }
      deliver(bb) {
        if (!this.FZ && this.listeners.has(bb) && this.listeners.get(bb) !== this.state) {
          this.listeners.set(bb, this.state);
          try {
            bb(this.state)
          } catch (ub) {
            this.host.warn("a texture pack listener threw", ub)
          }
        }
      }
    }
    async function pb(bb, ub, hb) {
      const Bb = (0, Yb.d)(await hb.fetchPack(ub));
      if (null !== Bb) return {
        pack: Bb,
        key: ub
      };
      const Ob = await hb.packKey(bb);
      if (null === Ob) return null;
      const Gb = (0, Yb.d)(await hb.fetchPack(Ob));
      if (null === Gb) throw new Error(`no texture pack at ${Ob}`);
      return {
        pack: Gb,
        key: Ob
      }
    }

    function ob(bb) {
      return null === bb || bb.metaData.id === Ob.c
    }

    function Ab(bb) {
      const ub = (0, Yb.d)(bb);
      return ob(ub) ? null : ub
    }
    async function lb(bb) {
      let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Gb.e;
      if (null === bb.pack) return null;
      const {
        packAssets: Bb
      } = await Promise.all([hb.e(196), hb.e(44)]).then((() => hb(60933)));
      return Bb(bb, ub)
    }

    function Kb(bb) {
      const ub = (0, Ub.u)();
      return null === ub ? () => {} : (ub.onmessage = ub => {
        bb.readPlayerPack((0, Lb.c)(ub.data))
      }, () => {
        ub.close()
      })
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);