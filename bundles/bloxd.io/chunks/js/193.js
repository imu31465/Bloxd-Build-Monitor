export const id = 193;
export const ids = [193];
export const modules = {
  8974: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Mb,
      d: () => Tb
    });
    var Ab = Ub(2972);

    function Mb() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const bb = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const ab = new BroadcastChannel(Ab.g);
        ab.postMessage({
          stored: bb
        }), ab.close()
      } catch {
        return null
      }
      return bb
    }

    function Tb(bb) {
      const ab = "object" === typeof bb && null !== bb ? bb.stored : null;
      return "string" === typeof ab ? ab : null
    }
  },
  8966: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Eb,
      f: () => Mb,
      g: () => Tb
    });
    var Ab = Ub(2972);
    async function Mb(bb, ab, Ub) {
      let Mb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const Tb = Eb(await bb.getItem(Ab.e, ab));
      if (null === Tb || Mb()) return null;
      const Yb = await bb.getItem(Ab.f, ab);
      return Mb() ? null : (await async function(bb) {
        await Promise.all([bb.removeItem(Ab.e), bb.removeItem(Ab.f)])
      }(bb).catch(Ub), {
        pack: Tb,
        source: "string" === typeof Yb ? Yb : null
      })
    }

    function Tb(bb) {
      return (0, Ab.p)() ? Promise.resolve(null) : Mb(bb, !1, (bb => {
        console.error("Error removing temporary texture pack: ", bb)
      }), Ab.p)
    }

    function Eb(bb) {
      if ("object" !== typeof bb || null === bb) return null;
      const ab = bb.metaData;
      return "object" !== typeof ab || null === ab || "string" !== typeof ab.id ? null : bb
    }
  },
  42434: (bb, ab, Ub) => {
    function Ab(bb) {
      return null === bb.gameSource ? "player" : "customGame"
    }
    Ub.d(ab, {
      d: () => Tb,
      g: () => Rb,
      h: () => jb,
      k: () => Ab
    });
    const Mb = /^data:[\w.+/-]*;base64,[A-Za-z0-9+/]*={0,2}$/;

    function Tb(bb) {
      return "" === bb || "string" === typeof bb && Mb.test(bb)
    }

    function Eb(bb) {
      return "object" === typeof bb && null !== bb && ("earth" === bb.type || Object.entries(bb).every((bb => {
        let [ab, Ub] = bb;
        return "type" === ab || Tb(Ub)
      })))
    }
    const Yb = /(?:src|image|image-set|cross-fade)\(/i,
      Bb = /url\(\s*(?:"(?<doubleQuoted>[^"]*)"|'(?<singleQuoted>[^']*)'|(?<unquoted>[^"'()\s]*))\s*\)/gi,
      eb = /url\(/gi,
      vb = ["https://bloxd.invalid/", "http://bloxd.invalid/"],
      Lb = new Set([...vb.map((bb => new URL(bb).origin)), "https://fonts.gstatic.com"]),
      Pb = new Set(["https://i.imgur.com/MEcjBFQ.png"]);

    function Xb(bb) {
      var ab, Ub;
      if (bb.includes("\\") || Yb.test(bb)) return !0;
      const Ab = [...bb.matchAll(Bb)];
      return Ab.length !== (null !== (ab = null === (Ub = bb.match(eb)) || void 0 === Ub ? void 0 : Ub.length) && void 0 !== ab ? ab : 0) || !Ab.every((bb => {
        var ab, Ub, Ab;
        let {
          groups: Mb
        } = bb;
        return function(bb) {
          try {
            return vb.every((ab => {
              const Ub = new URL(bb, ab);
              return "data:" === Ub.protocol || Lb.has(Ub.origin) || Pb.has(Ub.href)
            }))
          } catch {
            return !1
          }
        }(null !== (ab = null !== (Ub = null !== (Ab = null === Mb || void 0 === Mb ? void 0 : Mb.doubleQuoted) && void 0 !== Ab ? Ab : null === Mb || void 0 === Mb ? void 0 : Mb.singleQuoted) && void 0 !== Ub ? Ub : null === Mb || void 0 === Mb ? void 0 : Mb.unquoted) && void 0 !== ab ? ab : "")
      }))
    }

    function jb(bb) {
      var ab, Ub, Ab, Mb, Yb, Bb, eb;
      const vb = [...Object.values(null !== (ab = bb.textureOverrides) && void 0 !== ab ? ab : {}), ...Object.values(null !== (Ub = bb.modelOverrides) && void 0 !== Ub ? Ub : {})],
        Lb = [...Object.values(null !== (Ab = null === (Mb = bb.customCss) || void 0 === Mb ? void 0 : Mb.fontFaces) && void 0 !== Ab ? Ab : {}), ...Object.values(null !== (Yb = null === (Bb = bb.customCss) || void 0 === Bb ? void 0 : Bb.classStyles) && void 0 !== Yb ? Yb : {})].flatMap((bb => Object.values(null !== bb && void 0 !== bb ? bb : {})));
      return !vb.every(Tb) || !Object.values(null !== (eb = bb.skyBoxes) && void 0 !== eb ? eb : {}).every(Eb) || Lb.some((bb => "string" === typeof bb && Xb(bb)))
    }

    function Rb(bb, ab) {
      if (null === bb || "player" === ab || !jb(bb)) return bb;
      const Ub = {
        ...bb
      };
      return bb.textureOverrides && (Ub.textureOverrides = yb(bb.textureOverrides, Tb, "texture")), bb.modelOverrides && (Ub.modelOverrides = yb(bb.modelOverrides, Tb, "model")), bb.skyBoxes && (Ub.skyBoxes = yb(bb.skyBoxes, Eb, "sky")), bb.customCss && (Ub.customCss = function(bb) {
        const ab = bb => yb(bb, (bb => "string" === typeof bb && !Xb(bb)), "CSS"),
          {
            fontFaces: Ub,
            classStyles: Ab
          } = kb(bb) ? bb : {},
          Mb = {};
        for (const [Tb, Eb] of Object.entries(kb(Ab) ? Ab : {})) Mb[Tb] = ab(Eb);
        return {
          fontFaces: (Array.isArray(Ub) ? Ub : []).map(ab),
          classStyles: Mb
        }
      }(bb.customCss)), Ub
    }

    function kb(bb) {
      return "object" === typeof bb && null !== bb && !Array.isArray(bb)
    }

    function yb(bb, ab, Ub) {
      const Ab = Object.entries(kb(bb) ? bb : {}),
        Mb = Ab.filter((bb => {
          let [, Ub] = bb;
          return !ab(Ub)
        }));
      if (Mb.length > 0) {
        const bb = Mb.map((bb => {
          let [ab] = bb;
          return ab
        }));
        console.warn(`Ignoring a custom game texture pack's ${Ub} files that name another site: ${bb.join(", ")}`)
      }
      return Object.fromEntries(Ab.filter((bb => {
        let [, Ub] = bb;
        return ab(Ub)
      })))
    }
  },
  42438: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => jb,
      f: () => Db,
      g: () => Zb
    });
    var Ab = Ub(950),
      Mb = Ub(2890),
      Tb = Ub(2965),
      Eb = Ub(2972),
      Yb = Ub(8974),
      Bb = Ub(8966),
      eb = Ub(42434),
      vb = Ub(40161),
      Lb = Ub(40149),
      Pb = Ub(4711);
    const Xb = {
      pack: null,
      gameSource: null
    };
    class jb {
      constructor(bb) {
        this.host = bb, this.ready = void 0, this.state = Xb, this.playerPack = null, this.onGamePack = !1, this.confirmGamePack = null, this.skippedKey = null, this.ownAnnouncements = new Set, this.listeners = new Map, this.ownListeners = new Set, this.changes = 0, this.picks = 0, this.playerPicked = !1, this.ownChanges = 0, this.cX = !1, (0, Eb.j)(), this.ready = this.readStored()
      }
      readyWithin(bb) {
        return Promise.race([this.ready, new Promise((ab => {
          setTimeout(ab, bb)
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
        return (0, Lb.g)(this.state, bb)
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
        const ab = kb(bb) ? null : bb;
        this.picks++, this.playerPicked = !0, this.ownChanges++, this.setOwn(ab), this.change({
          pack: ab,
          gameSource: null
        }, !1);
        const Ub = await this.storePlayerPack(ab);
        return Ub && this.announce(), Ub
      }
      async packForGame(bb, ab, Ub) {
        await this.readyWithin(Math.max(0, (null !== Ub && void 0 !== Ub ? Ub : performance.now() + vb.b) - performance.now()));
        const Mb = ++this.picks,
          Tb = (0, Ab.l)(bb) ? (0, Ab.p)(bb) : null;
        if (null === Tb) return void this.usePlayerPack();
        let Eb;
        const Yb = function(bb) {
          let ab;
          const Ub = new Promise(((Ub, Ab) => {
            ab = setTimeout((() => {
              Ab(new Error(`no answer in ${bb} ms`))
            }), bb)
          }));
          return Ub.catch((() => {})), {
            passed: Ub,
            clear: () => {
              clearTimeout(ab)
            }
          }
        }(2e4);
        try {
          const bb = await Promise.race([ab.packKey(Tb), Yb.passed]);
          if (null !== bb && this.onGamePack && this.state.gameSource === bb) return;
          if (null !== bb && bb === this.skippedKey) return void(this.cX || this.picks !== Mb || this.usePlayerPack());
          Eb = null === bb ? null : await Promise.race([Rb(Tb, bb, ab), Yb.passed])
        } catch (Lb) {
          const bb = !this.cX && this.picks === Mb && this.holdsOtherGamePack(Tb);
          return this.host.warn(`the texture pack of ${Tb} didn't load: ${bb?"the player's own shows":"the pack in play stays"}`, Lb), void(bb && this.usePlayerPack())
        } finally {
          Yb.clear()
        }
        if (this.cX || this.picks !== Mb) return;
        null !== Eb && (0, eb.h)(Eb.pack) && (this.host.warn(`the texture pack of ${Tb} names files on other sites: the player's own shows`, null), Eb = null);
        const Bb = null === Eb || await this.confirmed(Eb.pack, Tb) ? null : Eb.key;
        this.cX || this.picks !== Mb || (null !== Bb && (this.skippedKey = Bb, Eb = null), null === Eb ? this.usePlayerPack() : (this.onGamePack = !0, this.change({
          pack: Eb.pack,
          gameSource: Eb.key
        }, !0)))
      }
      endGamePack() {
        this.picks++, this.usePlayerPack()
      }
      holdsOtherGamePack(bb) {
        return this.onGamePack && "" !== this.state.gameSource && !this.isUsingCustomGameTexturePack(bb)
      }
      async confirmed(bb, ab) {
        const Ub = this.confirmGamePack;
        if (null === Ub) return !0;
        try {
          return await Ub(bb, ab)
        } catch (Ab) {
          return this.host.warn(`the texture pack prompt of ${ab} failed: the pack is skipped`, Ab), !1
        }
      }
      async readPlayerPack() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (null !== bb && this.ownAnnouncements.delete(bb)) return;
        await this.ready;
        const ab = this.ownChanges;
        let Ub;
        try {
          Ub = await this.host.store.getItem(Eb.b, !0)
        } catch (Mb) {
          return void this.host.warn("the stored texture pack didn't read again: the pack in play stays", Mb)
        }
        if (this.cX || this.ownChanges !== ab) return;
        const Ab = yb(Ub);
        (0, Pb.c)(Ab, this.playerPack) || (this.ownChanges++, this.setOwn(Ab), this.onGamePack || this.change({
          pack: Ab,
          gameSource: null
        }, !1))
      }
      joinedWithout() {
        this.picks++
      }
      dispose() {
        this.cX = !0, this.listeners.clear()
      }
      async readStored() {
        const {
          store: bb,
          warn: ab
        } = this.host;
        await Promise.all([!1 === this.host.oneShot ? void 0 : (0, Bb.f)(bb, !0, (bb => {
          ab("the custom game's texture pack wasn't removed from storage", bb)
        })).then((bb => {
          this.takeOneShot(bb)
        }), (bb => {
          ab("the custom game's texture pack didn't read: the player's own shows", bb)
        })), bb.getItem(Eb.b, !0).then((bb => {
          this.takeStoredOwn(bb)
        }), (bb => {
          ab("the stored texture pack didn't read: the default pack shows", bb), this.takeStoredOwn(null)
        }))]), this.update()
      }
      takeOneShot(bb) {
        var ab;
        null === bb || this.cX || this.changes > 0 || this.picks > 0 || ((0, eb.h)(bb.pack) ? this.host.warn("the custom game's texture pack names files on other sites: the player's own shows", null) : (this.onGamePack = !0, this.state = {
          pack: bb.pack,
          gameSource: null !== (ab = bb.source) && void 0 !== ab ? ab : ""
        }))
      }
      takeStoredOwn(bb) {
        if (this.playerPicked || this.cX) return;
        if (this.ownChanges++, this.setOwn(yb(bb)), this.onGamePack) return;
        const ab = {
          pack: this.playerPack,
          gameSource: null
        };
        0 === this.changes ? this.state = ab : this.change(ab, !1)
      }
      async update() {
        const bb = this.playerPack,
          ab = null === bb || void 0 === bb ? void 0 : bb.metaData.id;
        if (!bb || !ab || !this.host.fetchLatest || ab === Mb.b || ab === Mb.q.CUSTOM) return;
        const Ub = Mb.r[ab];
        if (void 0 === Ub || bb.metaData.version >= Ub) return;
        let Ab;
        try {
          Ab = yb(await this.host.fetchLatest(ab))
        } catch (Tb) {
          return void this.host.warn(`texture pack ${ab} didn't update to version ${Ub}`, Tb)
        }
        null === Ab || this.cX || this.playerPack !== bb || (this.ownChanges++, this.setOwn(Ab), this.onGamePack || this.change({
          pack: Ab,
          gameSource: null
        }, !1), await this.storePlayerPack(Ab) && this.announce())
      }
      announce() {
        const bb = (0, Yb.b)();
        null !== bb && this.ownAnnouncements.add(bb)
      }
      setOwn(bb) {
        this.playerPack = bb;
        for (const Ub of [...this.ownListeners]) try {
          Ub()
        } catch (ab) {
          this.host.warn("a texture pack listener threw", ab)
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
          return null === bb ? (await this.host.store.removeItem(Eb.b), !0) : await this.host.store.setItem(Eb.b, bb)
        } catch (ab) {
          return this.host.warn("the texture pack wasn't stored: it shows until the page reloads", ab), !1
        }
      }
      change(bb, ab) {
        if (!this.cX) {
          this.changes++, this.onGamePack = ab, this.state = bb;
          for (const bb of [...this.listeners.keys()]) this.deliver(bb)
        }
      }
      deliver(bb) {
        if (!this.cX && this.listeners.has(bb) && this.listeners.get(bb) !== this.state) {
          this.listeners.set(bb, this.state);
          try {
            bb(this.state)
          } catch (ab) {
            this.host.warn("a texture pack listener threw", ab)
          }
        }
      }
    }
    async function Rb(bb, ab, Ub) {
      const Ab = (0, Bb.e)(await Ub.fetchPack(ab));
      if (null !== Ab) return {
        pack: Ab,
        key: ab
      };
      const Mb = await Ub.packKey(bb);
      if (null === Mb) return null;
      const Tb = (0, Bb.e)(await Ub.fetchPack(Mb));
      if (null === Tb) throw new Error(`no texture pack at ${Mb}`);
      return {
        pack: Tb,
        key: Mb
      }
    }

    function kb(bb) {
      return null === bb || bb.metaData.id === Mb.b
    }

    function yb(bb) {
      const ab = (0, Bb.e)(bb);
      return kb(ab) ? null : ab
    }
    async function Zb(bb) {
      let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Tb.b;
      if (null === bb.pack) return null;
      const {
        packAssets: Ab
      } = await Promise.all([Ub.e(195), Ub.e(44)]).then((() => Ub(60618)));
      return Ab(bb, ab)
    }

    function Db(bb) {
      const ab = (0, Eb.r)();
      return null === ab ? () => {} : (ab.onmessage = ab => {
        bb.readPlayerPack((0, Yb.d)(ab.data))
      }, () => {
        ab.close()
      })
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);