export const id = 232;
export const ids = [232];
export const modules = {
  35410: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Hb,
      c: () => pb
    });
    var eb = Mb(4615);

    function Hb() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const bb = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const wb = new BroadcastChannel(eb.k);
        wb.postMessage({
          stored: bb
        }), wb.close()
      } catch {
        return null
      }
      return bb
    }

    function pb(bb) {
      const wb = "object" === typeof bb && null !== bb ? bb.stored : null;
      return "string" === typeof wb ? wb : null
    }
  },
  35407: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Vb,
      f: () => Hb,
      g: () => pb
    });
    var eb = Mb(4615);
    async function Hb(bb, wb, Mb) {
      let Hb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const pb = Vb(await bb.getItem(eb.c, wb));
      if (null === pb || Hb()) return null;
      const gb = await bb.getItem(eb.g, wb);
      return Hb() ? null : (await async function(bb) {
        await Promise.all([bb.removeItem(eb.c), bb.removeItem(eb.g)])
      }(bb).catch(Mb), {
        pack: pb,
        source: "string" === typeof gb ? gb : null
      })
    }

    function pb(bb) {
      return (0, eb.q)() ? Promise.resolve(null) : Hb(bb, !1, (bb => {
        console.error("Error removing temporary texture pack: ", bb)
      }), eb.q)
    }

    function Vb(bb) {
      if ("object" !== typeof bb || null === bb) return null;
      const wb = bb.metaData;
      return "object" !== typeof wb || null === wb || "string" !== typeof wb.id ? null : bb
    }
  },
  54897: (bb, wb, Mb) => {
    function eb(bb) {
      return null === bb.gameSource ? "player" : "customGame"
    }
    Mb.d(wb, {
      b: () => pb,
      f: () => Eb,
      j: () => Cb,
      l: () => eb
    });
    const Hb = /^data:[\w.+/-]*;base64,[A-Za-z0-9+/]*={0,2}$/;

    function pb(bb) {
      return "" === bb || "string" === typeof bb && Hb.test(bb)
    }

    function Vb(bb) {
      return "object" === typeof bb && null !== bb && ("earth" === bb.type || Object.entries(bb).every((bb => {
        let [wb, Mb] = bb;
        return "type" === wb || pb(Mb)
      })))
    }
    const gb = /(?:src|image|image-set|cross-fade)\(/i,
      lb = /url\(\s*(?:"(?<doubleQuoted>[^"]*)"|'(?<singleQuoted>[^']*)'|(?<unquoted>[^"'()\s]*))\s*\)/gi,
      Lb = /url\(/gi,
      Ib = ["https://bloxd.invalid/", "http://bloxd.invalid/"],
      Ob = new Set([...Ib.map((bb => new URL(bb).origin)), "https://fonts.gstatic.com"]),
      Ub = new Set(["https://i.imgur.com/MEcjBFQ.png"]);

    function tb(bb) {
      var wb, Mb;
      if (bb.includes("\\") || gb.test(bb)) return !0;
      const eb = [...bb.matchAll(lb)];
      return eb.length !== (null !== (wb = null === (Mb = bb.match(Lb)) || void 0 === Mb ? void 0 : Mb.length) && void 0 !== wb ? wb : 0) || !eb.every((bb => {
        var wb, Mb, eb;
        let {
          groups: Hb
        } = bb;
        return function(bb) {
          try {
            return Ib.every((wb => {
              const Mb = new URL(bb, wb);
              return "data:" === Mb.protocol || Ob.has(Mb.origin) || Ub.has(Mb.href)
            }))
          } catch {
            return !1
          }
        }(null !== (wb = null !== (Mb = null !== (eb = null === Hb || void 0 === Hb ? void 0 : Hb.doubleQuoted) && void 0 !== eb ? eb : null === Hb || void 0 === Hb ? void 0 : Hb.singleQuoted) && void 0 !== Mb ? Mb : null === Hb || void 0 === Hb ? void 0 : Hb.unquoted) && void 0 !== wb ? wb : "")
      }))
    }

    function Cb(bb) {
      var wb, Mb, eb, Hb, gb, lb, Lb;
      const Ib = [...Object.values(null !== (wb = bb.textureOverrides) && void 0 !== wb ? wb : {}), ...Object.values(null !== (Mb = bb.modelOverrides) && void 0 !== Mb ? Mb : {})],
        Ob = [...Object.values(null !== (eb = null === (Hb = bb.customCss) || void 0 === Hb ? void 0 : Hb.fontFaces) && void 0 !== eb ? eb : {}), ...Object.values(null !== (gb = null === (lb = bb.customCss) || void 0 === lb ? void 0 : lb.classStyles) && void 0 !== gb ? gb : {})].flatMap((bb => Object.values(null !== bb && void 0 !== bb ? bb : {})));
      return !Ib.every(pb) || !Object.values(null !== (Lb = bb.skyBoxes) && void 0 !== Lb ? Lb : {}).every(Vb) || Ob.some((bb => "string" === typeof bb && tb(bb)))
    }

    function Eb(bb, wb) {
      if (null === bb || "player" === wb || !Cb(bb)) return bb;
      const Mb = {
        ...bb
      };
      return bb.textureOverrides && (Mb.textureOverrides = Bb(bb.textureOverrides, pb, "texture")), bb.modelOverrides && (Mb.modelOverrides = Bb(bb.modelOverrides, pb, "model")), bb.skyBoxes && (Mb.skyBoxes = Bb(bb.skyBoxes, Vb, "sky")), bb.customCss && (Mb.customCss = function(bb) {
        const wb = bb => Bb(bb, (bb => "string" === typeof bb && !tb(bb)), "CSS"),
          {
            fontFaces: Mb,
            classStyles: eb
          } = Fb(bb) ? bb : {},
          Hb = {};
        for (const [pb, Vb] of Object.entries(Fb(eb) ? eb : {})) Hb[pb] = wb(Vb);
        return {
          fontFaces: (Array.isArray(Mb) ? Mb : []).map(wb),
          classStyles: Hb
        }
      }(bb.customCss)), Mb
    }

    function Fb(bb) {
      return "object" === typeof bb && null !== bb && !Array.isArray(bb)
    }

    function Bb(bb, wb, Mb) {
      const eb = Object.entries(Fb(bb) ? bb : {}),
        Hb = eb.filter((bb => {
          let [, Mb] = bb;
          return !wb(Mb)
        }));
      if (Hb.length > 0) {
        const bb = Hb.map((bb => {
          let [wb] = bb;
          return wb
        }));
        console.warn(`Ignoring a custom game texture pack's ${Mb} files that name another site: ${bb.join(", ")}`)
      }
      return Object.fromEntries(eb.filter((bb => {
        let [, Mb] = bb;
        return wb(Mb)
      })))
    }
  },
  54903: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Cb,
      g: () => mb,
      i: () => sb
    });
    var eb = Mb(1126),
      Hb = Mb(2380),
      pb = Mb(4604),
      Vb = Mb(4615),
      gb = Mb(35410),
      lb = Mb(35407),
      Lb = Mb(54897),
      Ib = Mb(42665),
      Ob = Mb(42649),
      Ub = Mb(6129);
    const tb = {
      pack: null,
      gameSource: null
    };
    class Cb {
      constructor(bb) {
        this.host = bb, this.ready = void 0, this.state = tb, this.playerPack = null, this.onGamePack = !1, this.confirmGamePack = null, this.skippedKey = null, this.ownAnnouncements = new Set, this.listeners = new Map, this.ownListeners = new Set, this.changes = 0, this.picks = 0, this.playerPicked = !1, this.ownChanges = 0, this.BC = !1, (0, Vb.m)(), this.ready = this.readStored()
      }
      readyWithin(bb) {
        return Promise.race([this.ready, new Promise((wb => {
          setTimeout(wb, bb)
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
        return (0, Ob.e)(this.state, bb)
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
        const wb = Fb(bb) ? null : bb;
        this.picks++, this.playerPicked = !0, this.ownChanges++, this.setOwn(wb), this.change({
          pack: wb,
          gameSource: null
        }, !1);
        const Mb = await this.storePlayerPack(wb);
        return Mb && this.announce(), Mb
      }
      async packForGame(bb, wb, Mb) {
        await this.readyWithin(Math.max(0, (null !== Mb && void 0 !== Mb ? Mb : performance.now() + Ib.b) - performance.now()));
        const Hb = ++this.picks,
          pb = (0, eb.j)(bb) ? (0, eb.o)(bb) : null;
        if (null === pb) return void this.usePlayerPack();
        let Vb;
        const gb = function(bb) {
          let wb;
          const Mb = new Promise(((Mb, eb) => {
            wb = setTimeout((() => {
              eb(new Error(`no answer in ${bb} ms`))
            }), bb)
          }));
          return Mb.catch((() => {})), {
            passed: Mb,
            clear: () => {
              clearTimeout(wb)
            }
          }
        }(2e4);
        try {
          const bb = await Promise.race([wb.packKey(pb), gb.passed]);
          if (null !== bb && this.onGamePack && this.state.gameSource === bb) return;
          if (null !== bb && bb === this.skippedKey) return void(this.BC || this.picks !== Hb || this.usePlayerPack());
          Vb = null === bb ? null : await Promise.race([Eb(pb, bb, wb), gb.passed])
        } catch (Ob) {
          const bb = !this.BC && this.picks === Hb && this.holdsOtherGamePack(pb);
          return this.host.warn(`the texture pack of ${pb} didn't load: ${bb?"the player's own shows":"the pack in play stays"}`, Ob), void(bb && this.usePlayerPack())
        } finally {
          gb.clear()
        }
        if (this.BC || this.picks !== Hb) return;
        null !== Vb && (0, Lb.j)(Vb.pack) && (this.host.warn(`the texture pack of ${pb} names files on other sites: the player's own shows`, null), Vb = null);
        const lb = null === Vb || await this.confirmed(Vb.pack, pb) ? null : Vb.key;
        this.BC || this.picks !== Hb || (null !== lb && (this.skippedKey = lb, Vb = null), null === Vb ? this.usePlayerPack() : (this.onGamePack = !0, this.change({
          pack: Vb.pack,
          gameSource: Vb.key
        }, !0)))
      }
      endGamePack() {
        this.picks++, this.usePlayerPack()
      }
      holdsOtherGamePack(bb) {
        return this.onGamePack && "" !== this.state.gameSource && !this.isUsingCustomGameTexturePack(bb)
      }
      async confirmed(bb, wb) {
        const Mb = this.confirmGamePack;
        if (null === Mb) return !0;
        try {
          return await Mb(bb, wb)
        } catch (eb) {
          return this.host.warn(`the texture pack prompt of ${wb} failed: the pack is skipped`, eb), !1
        }
      }
      async readPlayerPack() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (null !== bb && this.ownAnnouncements.delete(bb)) return;
        await this.ready;
        const wb = this.ownChanges;
        let Mb;
        try {
          Mb = await this.host.store.getItem(Vb.b, !0)
        } catch (Hb) {
          return void this.host.warn("the stored texture pack didn't read again: the pack in play stays", Hb)
        }
        if (this.BC || this.ownChanges !== wb) return;
        const eb = Bb(Mb);
        (0, Ub.c)(eb, this.playerPack) || (this.ownChanges++, this.setOwn(eb), this.onGamePack || this.change({
          pack: eb,
          gameSource: null
        }, !1))
      }
      joinedWithout() {
        this.picks++
      }
      dispose() {
        this.BC = !0, this.listeners.clear()
      }
      async readStored() {
        const {
          store: bb,
          warn: wb
        } = this.host;
        await Promise.all([!1 === this.host.oneShot ? void 0 : (0, lb.f)(bb, !0, (bb => {
          wb("the custom game's texture pack wasn't removed from storage", bb)
        })).then((bb => {
          this.takeOneShot(bb)
        }), (bb => {
          wb("the custom game's texture pack didn't read: the player's own shows", bb)
        })), bb.getItem(Vb.b, !0).then((bb => {
          this.takeStoredOwn(bb)
        }), (bb => {
          wb("the stored texture pack didn't read: the default pack shows", bb), this.takeStoredOwn(null)
        }))]), this.update()
      }
      takeOneShot(bb) {
        var wb;
        null === bb || this.BC || this.changes > 0 || this.picks > 0 || ((0, Lb.j)(bb.pack) ? this.host.warn("the custom game's texture pack names files on other sites: the player's own shows", null) : (this.onGamePack = !0, this.state = {
          pack: bb.pack,
          gameSource: null !== (wb = bb.source) && void 0 !== wb ? wb : ""
        }))
      }
      takeStoredOwn(bb) {
        if (this.playerPicked || this.BC) return;
        if (this.ownChanges++, this.setOwn(Bb(bb)), this.onGamePack) return;
        const wb = {
          pack: this.playerPack,
          gameSource: null
        };
        0 === this.changes ? this.state = wb : this.change(wb, !1)
      }
      async update() {
        const bb = this.playerPack,
          wb = null === bb || void 0 === bb ? void 0 : bb.metaData.id;
        if (!bb || !wb || !this.host.fetchLatest || wb === Hb.d || wb === Hb.t.CUSTOM) return;
        const Mb = Hb.u[wb];
        if (void 0 === Mb || bb.metaData.version >= Mb) return;
        let eb;
        try {
          eb = Bb(await this.host.fetchLatest(wb))
        } catch (pb) {
          return void this.host.warn(`texture pack ${wb} didn't update to version ${Mb}`, pb)
        }
        null === eb || this.BC || this.playerPack !== bb || (this.ownChanges++, this.setOwn(eb), this.onGamePack || this.change({
          pack: eb,
          gameSource: null
        }, !1), await this.storePlayerPack(eb) && this.announce())
      }
      announce() {
        const bb = (0, gb.b)();
        null !== bb && this.ownAnnouncements.add(bb)
      }
      setOwn(bb) {
        this.playerPack = bb;
        for (const Mb of [...this.ownListeners]) try {
          Mb()
        } catch (wb) {
          this.host.warn("a texture pack listener threw", wb)
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
          return null === bb ? (await this.host.store.removeItem(Vb.b), !0) : await this.host.store.setItem(Vb.b, bb)
        } catch (wb) {
          return this.host.warn("the texture pack wasn't stored: it shows until the page reloads", wb), !1
        }
      }
      change(bb, wb) {
        if (!this.BC) {
          this.changes++, this.onGamePack = wb, this.state = bb;
          for (const bb of [...this.listeners.keys()]) this.deliver(bb)
        }
      }
      deliver(bb) {
        if (!this.BC && this.listeners.has(bb) && this.listeners.get(bb) !== this.state) {
          this.listeners.set(bb, this.state);
          try {
            bb(this.state)
          } catch (wb) {
            this.host.warn("a texture pack listener threw", wb)
          }
        }
      }
    }
    async function Eb(bb, wb, Mb) {
      const eb = (0, lb.e)(await Mb.fetchPack(wb));
      if (null !== eb) return {
        pack: eb,
        key: wb
      };
      const Hb = await Mb.packKey(bb);
      if (null === Hb) return null;
      const pb = (0, lb.e)(await Mb.fetchPack(Hb));
      if (null === pb) throw new Error(`no texture pack at ${Hb}`);
      return {
        pack: pb,
        key: Hb
      }
    }

    function Fb(bb) {
      return null === bb || bb.metaData.id === Hb.d
    }

    function Bb(bb) {
      const wb = (0, lb.e)(bb);
      return Fb(wb) ? null : wb
    }
    async function sb(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pb.d;
      if (null === bb.pack) return null;
      const {
        packAssets: eb
      } = await Promise.all([Mb.e(234), Mb.e(53)]).then((() => Mb(64631)));
      return eb(bb, wb)
    }

    function mb(bb) {
      const wb = (0, Vb.s)();
      return null === wb ? () => {} : (wb.onmessage = wb => {
        bb.readPlayerPack((0, gb.c)(wb.data))
      }, () => {
        wb.close()
      })
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);