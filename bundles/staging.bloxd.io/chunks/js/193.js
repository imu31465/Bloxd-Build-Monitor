export const id = 193;
export const ids = [193];
export const modules = {
  8988: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Wb,
      g: () => ab
    });
    var kb = sb(3029);

    function Wb() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const bb = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const cb = new BroadcastChannel(kb.j);
        cb.postMessage({
          stored: bb
        }), cb.close()
      } catch {
        return null
      }
      return bb
    }

    function ab(bb) {
      const cb = "object" === typeof bb && null !== bb ? bb.stored : null;
      return "string" === typeof cb ? cb : null
    }
  },
  8981: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Tb,
      c: () => Wb,
      e: () => ab
    });
    var kb = sb(3029);
    async function Wb(bb, cb, sb) {
      let Wb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const ab = Tb(await bb.getItem(kb.f, cb));
      if (null === ab || Wb()) return null;
      const Ub = await bb.getItem(kb.h, cb);
      return Wb() ? null : (await async function(bb) {
        await Promise.all([bb.removeItem(kb.f), bb.removeItem(kb.h)])
      }(bb).catch(sb), {
        pack: ab,
        source: "string" === typeof Ub ? Ub : null
      })
    }

    function ab(bb) {
      return (0, kb.n)() ? Promise.resolve(null) : Wb(bb, !1, (bb => {
        console.error("Error removing temporary texture pack: ", bb)
      }), kb.n)
    }

    function Tb(bb) {
      if ("object" !== typeof bb || null === bb) return null;
      const cb = bb.metaData;
      return "object" !== typeof cb || null === cb || "string" !== typeof cb.id ? null : bb
    }
  },
  42678: (bb, cb, sb) => {
    function kb(bb) {
      return null === bb.gameSource ? "player" : "customGame"
    }
    sb.d(cb, {
      b: () => ab,
      d: () => lb,
      e: () => mb,
      f: () => kb
    });
    const Wb = /^data:[\w.+/-]*;base64,[A-Za-z0-9+/]*={0,2}$/;

    function ab(bb) {
      return "" === bb || "string" === typeof bb && Wb.test(bb)
    }

    function Tb(bb) {
      return "object" === typeof bb && null !== bb && ("earth" === bb.type || Object.entries(bb).every((bb => {
        let [cb, sb] = bb;
        return "type" === cb || ab(sb)
      })))
    }
    const Ub = /(?:src|image|image-set|cross-fade)\(/i,
      Ib = /url\(\s*(?:"(?<doubleQuoted>[^"]*)"|'(?<singleQuoted>[^']*)'|(?<unquoted>[^"'()\s]*))\s*\)/gi,
      Hb = /url\(/gi,
      fb = ["https://bloxd.invalid/", "http://bloxd.invalid/"],
      Mb = new Set([...fb.map((bb => new URL(bb).origin)), "https://fonts.gstatic.com"]),
      Xb = new Set(["https://i.imgur.com/MEcjBFQ.png"]);

    function nb(bb) {
      var cb, sb;
      if (bb.includes("\\") || Ub.test(bb)) return !0;
      const kb = [...bb.matchAll(Ib)];
      return kb.length !== (null !== (cb = null === (sb = bb.match(Hb)) || void 0 === sb ? void 0 : sb.length) && void 0 !== cb ? cb : 0) || !kb.every((bb => {
        var cb, sb, kb;
        let {
          groups: Wb
        } = bb;
        return function(bb) {
          try {
            return fb.every((cb => {
              const sb = new URL(bb, cb);
              return "data:" === sb.protocol || Mb.has(sb.origin) || Xb.has(sb.href)
            }))
          } catch {
            return !1
          }
        }(null !== (cb = null !== (sb = null !== (kb = null === Wb || void 0 === Wb ? void 0 : Wb.doubleQuoted) && void 0 !== kb ? kb : null === Wb || void 0 === Wb ? void 0 : Wb.singleQuoted) && void 0 !== sb ? sb : null === Wb || void 0 === Wb ? void 0 : Wb.unquoted) && void 0 !== cb ? cb : "")
      }))
    }

    function mb(bb) {
      var cb, sb, kb, Wb, Ub, Ib, Hb;
      const fb = [...Object.values(null !== (cb = bb.textureOverrides) && void 0 !== cb ? cb : {}), ...Object.values(null !== (sb = bb.modelOverrides) && void 0 !== sb ? sb : {})],
        Mb = [...Object.values(null !== (kb = null === (Wb = bb.customCss) || void 0 === Wb ? void 0 : Wb.fontFaces) && void 0 !== kb ? kb : {}), ...Object.values(null !== (Ub = null === (Ib = bb.customCss) || void 0 === Ib ? void 0 : Ib.classStyles) && void 0 !== Ub ? Ub : {})].flatMap((bb => Object.values(null !== bb && void 0 !== bb ? bb : {})));
      return !fb.every(ab) || !Object.values(null !== (Hb = bb.skyBoxes) && void 0 !== Hb ? Hb : {}).every(Tb) || Mb.some((bb => "string" === typeof bb && nb(bb)))
    }

    function lb(bb, cb) {
      if (null === bb || "player" === cb || !mb(bb)) return bb;
      const sb = {
        ...bb
      };
      return bb.textureOverrides && (sb.textureOverrides = eb(bb.textureOverrides, ab, "texture")), bb.modelOverrides && (sb.modelOverrides = eb(bb.modelOverrides, ab, "model")), bb.skyBoxes && (sb.skyBoxes = eb(bb.skyBoxes, Tb, "sky")), bb.customCss && (sb.customCss = function(bb) {
        const cb = bb => eb(bb, (bb => "string" === typeof bb && !nb(bb)), "CSS"),
          {
            fontFaces: sb,
            classStyles: kb
          } = Qb(bb) ? bb : {},
          Wb = {};
        for (const [ab, Tb] of Object.entries(Qb(kb) ? kb : {})) Wb[ab] = cb(Tb);
        return {
          fontFaces: (Array.isArray(sb) ? sb : []).map(cb),
          classStyles: Wb
        }
      }(bb.customCss)), sb
    }

    function Qb(bb) {
      return "object" === typeof bb && null !== bb && !Array.isArray(bb)
    }

    function eb(bb, cb, sb) {
      const kb = Object.entries(Qb(bb) ? bb : {}),
        Wb = kb.filter((bb => {
          let [, sb] = bb;
          return !cb(sb)
        }));
      if (Wb.length > 0) {
        const bb = Wb.map((bb => {
          let [cb] = bb;
          return cb
        }));
        console.warn(`Ignoring a custom game texture pack's ${sb} files that name another site: ${bb.join(", ")}`)
      }
      return Object.fromEntries(kb.filter((bb => {
        let [, sb] = bb;
        return cb(sb)
      })))
    }
  },
  42683: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => mb,
      d: () => Nb,
      e: () => Cb
    });
    var kb = sb(1008),
      Wb = sb(2916),
      ab = sb(3019),
      Tb = sb(3029),
      Ub = sb(8988),
      Ib = sb(8981),
      Hb = sb(42678),
      fb = sb(40482),
      Mb = sb(40465),
      Xb = sb(4747);
    const nb = {
      pack: null,
      gameSource: null
    };
    class mb {
      constructor(bb) {
        this.host = bb, this.ready = void 0, this.state = nb, this.playerPack = null, this.onGamePack = !1, this.confirmGamePack = null, this.skippedKey = null, this.ownAnnouncements = new Set, this.listeners = new Map, this.ownListeners = new Set, this.changes = 0, this.picks = 0, this.playerPicked = !1, this.ownChanges = 0, this.Em = !1, (0, Tb.l)(), this.ready = this.readStored()
      }
      readyWithin(bb) {
        return Promise.race([this.ready, new Promise((cb => {
          setTimeout(cb, bb)
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
        return (0, Mb.h)(this.state, bb)
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
        const cb = Qb(bb) ? null : bb;
        this.picks++, this.playerPicked = !0, this.ownChanges++, this.setOwn(cb), this.change({
          pack: cb,
          gameSource: null
        }, !1);
        const sb = await this.storePlayerPack(cb);
        return sb && this.announce(), sb
      }
      async packForGame(bb, cb, sb) {
        await this.readyWithin(Math.max(0, (null !== sb && void 0 !== sb ? sb : performance.now() + fb.d) - performance.now()));
        const Wb = ++this.picks,
          ab = (0, kb.k)(bb) ? (0, kb.s)(bb) : null;
        if (null === ab) return void this.usePlayerPack();
        let Tb;
        const Ub = function(bb) {
          let cb;
          const sb = new Promise(((sb, kb) => {
            cb = setTimeout((() => {
              kb(new Error(`no answer in ${bb} ms`))
            }), bb)
          }));
          return sb.catch((() => {})), {
            passed: sb,
            clear: () => {
              clearTimeout(cb)
            }
          }
        }(2e4);
        try {
          const bb = await Promise.race([cb.packKey(ab), Ub.passed]);
          if (null !== bb && this.onGamePack && this.state.gameSource === bb) return;
          if (null !== bb && bb === this.skippedKey) return void(this.Em || this.picks !== Wb || this.usePlayerPack());
          Tb = null === bb ? null : await Promise.race([lb(ab, bb, cb), Ub.passed])
        } catch (Mb) {
          const bb = !this.Em && this.picks === Wb && this.holdsOtherGamePack(ab);
          return this.host.warn(`the texture pack of ${ab} didn't load: ${bb?"the player's own shows":"the pack in play stays"}`, Mb), void(bb && this.usePlayerPack())
        } finally {
          Ub.clear()
        }
        if (this.Em || this.picks !== Wb) return;
        null !== Tb && (0, Hb.e)(Tb.pack) && (this.host.warn(`the texture pack of ${ab} names files on other sites: the player's own shows`, null), Tb = null);
        const Ib = null === Tb || await this.confirmed(Tb.pack, ab) ? null : Tb.key;
        this.Em || this.picks !== Wb || (null !== Ib && (this.skippedKey = Ib, Tb = null), null === Tb ? this.usePlayerPack() : (this.onGamePack = !0, this.change({
          pack: Tb.pack,
          gameSource: Tb.key
        }, !0)))
      }
      endGamePack() {
        this.picks++, this.usePlayerPack()
      }
      holdsOtherGamePack(bb) {
        return this.onGamePack && "" !== this.state.gameSource && !this.isUsingCustomGameTexturePack(bb)
      }
      async confirmed(bb, cb) {
        const sb = this.confirmGamePack;
        if (null === sb) return !0;
        try {
          return await sb(bb, cb)
        } catch (kb) {
          return this.host.warn(`the texture pack prompt of ${cb} failed: the pack is skipped`, kb), !1
        }
      }
      async readPlayerPack() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (null !== bb && this.ownAnnouncements.delete(bb)) return;
        await this.ready;
        const cb = this.ownChanges;
        let sb;
        try {
          sb = await this.host.store.getItem(Tb.b, !0)
        } catch (Wb) {
          return void this.host.warn("the stored texture pack didn't read again: the pack in play stays", Wb)
        }
        if (this.Em || this.ownChanges !== cb) return;
        const kb = eb(sb);
        (0, Xb.b)(kb, this.playerPack) || (this.ownChanges++, this.setOwn(kb), this.onGamePack || this.change({
          pack: kb,
          gameSource: null
        }, !1))
      }
      joinedWithout() {
        this.picks++
      }
      dispose() {
        this.Em = !0, this.listeners.clear()
      }
      async readStored() {
        const {
          store: bb,
          warn: cb
        } = this.host;
        await Promise.all([!1 === this.host.oneShot ? void 0 : (0, Ib.c)(bb, !0, (bb => {
          cb("the custom game's texture pack wasn't removed from storage", bb)
        })).then((bb => {
          this.takeOneShot(bb)
        }), (bb => {
          cb("the custom game's texture pack didn't read: the player's own shows", bb)
        })), bb.getItem(Tb.b, !0).then((bb => {
          this.takeStoredOwn(bb)
        }), (bb => {
          cb("the stored texture pack didn't read: the default pack shows", bb), this.takeStoredOwn(null)
        }))]), this.update()
      }
      takeOneShot(bb) {
        var cb;
        null === bb || this.Em || this.changes > 0 || this.picks > 0 || ((0, Hb.e)(bb.pack) ? this.host.warn("the custom game's texture pack names files on other sites: the player's own shows", null) : (this.onGamePack = !0, this.state = {
          pack: bb.pack,
          gameSource: null !== (cb = bb.source) && void 0 !== cb ? cb : ""
        }))
      }
      takeStoredOwn(bb) {
        if (this.playerPicked || this.Em) return;
        if (this.ownChanges++, this.setOwn(eb(bb)), this.onGamePack) return;
        const cb = {
          pack: this.playerPack,
          gameSource: null
        };
        0 === this.changes ? this.state = cb : this.change(cb, !1)
      }
      async update() {
        const bb = this.playerPack,
          cb = null === bb || void 0 === bb ? void 0 : bb.metaData.id;
        if (!bb || !cb || !this.host.fetchLatest || cb === Wb.c || cb === Wb.o.CUSTOM) return;
        const sb = Wb.p[cb];
        if (void 0 === sb || bb.metaData.version >= sb) return;
        let kb;
        try {
          kb = eb(await this.host.fetchLatest(cb))
        } catch (ab) {
          return void this.host.warn(`texture pack ${cb} didn't update to version ${sb}`, ab)
        }
        null === kb || this.Em || this.playerPack !== bb || (this.ownChanges++, this.setOwn(kb), this.onGamePack || this.change({
          pack: kb,
          gameSource: null
        }, !1), await this.storePlayerPack(kb) && this.announce())
      }
      announce() {
        const bb = (0, Ub.d)();
        null !== bb && this.ownAnnouncements.add(bb)
      }
      setOwn(bb) {
        this.playerPack = bb;
        for (const sb of [...this.ownListeners]) try {
          sb()
        } catch (cb) {
          this.host.warn("a texture pack listener threw", cb)
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
          return null === bb ? (await this.host.store.removeItem(Tb.b), !0) : await this.host.store.setItem(Tb.b, bb)
        } catch (cb) {
          return this.host.warn("the texture pack wasn't stored: it shows until the page reloads", cb), !1
        }
      }
      change(bb, cb) {
        if (!this.Em) {
          this.changes++, this.onGamePack = cb, this.state = bb;
          for (const bb of [...this.listeners.keys()]) this.deliver(bb)
        }
      }
      deliver(bb) {
        if (!this.Em && this.listeners.has(bb) && this.listeners.get(bb) !== this.state) {
          this.listeners.set(bb, this.state);
          try {
            bb(this.state)
          } catch (cb) {
            this.host.warn("a texture pack listener threw", cb)
          }
        }
      }
    }
    async function lb(bb, cb, sb) {
      const kb = (0, Ib.b)(await sb.fetchPack(cb));
      if (null !== kb) return {
        pack: kb,
        key: cb
      };
      const Wb = await sb.packKey(bb);
      if (null === Wb) return null;
      const ab = (0, Ib.b)(await sb.fetchPack(Wb));
      if (null === ab) throw new Error(`no texture pack at ${Wb}`);
      return {
        pack: ab,
        key: Wb
      }
    }

    function Qb(bb) {
      return null === bb || bb.metaData.id === Wb.c
    }

    function eb(bb) {
      const cb = (0, Ib.b)(bb);
      return Qb(cb) ? null : cb
    }
    async function Cb(bb) {
      let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ab.b;
      if (null === bb.pack) return null;
      const {
        packAssets: kb
      } = await Promise.all([sb.e(195), sb.e(44)]).then((() => sb(60911)));
      return kb(bb, cb)
    }

    function Nb(bb) {
      const cb = (0, Tb.q)();
      return null === cb ? () => {} : (cb.onmessage = cb => {
        bb.readPlayerPack((0, Ub.g)(cb.data))
      }, () => {
        cb.close()
      })
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);