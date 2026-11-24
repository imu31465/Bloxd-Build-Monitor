export const id = 204;
export const ids = [204];
export const modules = {
  34482: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => op,
      f: () => Ip
    });
    var Op = cp(3352);

    function op() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const pp = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const ip = new BroadcastChannel(Op.j);
        ip.postMessage({
          stored: pp
        }), ip.close()
      } catch {
        return null
      }
      return pp
    }

    function Ip(pp) {
      const ip = "object" === typeof pp && null !== pp ? pp.stored : null;
      return "string" === typeof ip ? ip : null
    }
  },
  34480: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Sp,
      h: () => op,
      i: () => Ip
    });
    var Op = cp(3352);
    async function op(pp, ip, cp) {
      let op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const Ip = Sp(await pp.getItem(Op.d, ip));
      if (null === Ip || op()) return null;
      const xp = await pp.getItem(Op.h, ip);
      return op() ? null : (await async function(pp) {
        await Promise.all([pp.removeItem(Op.d), pp.removeItem(Op.h)])
      }(pp).catch(cp), {
        pack: Ip,
        source: "string" === typeof xp ? xp : null
      })
    }

    function Ip(pp) {
      return (0, Op.u)() ? Promise.resolve(null) : op(pp, !1, (pp => {
        console.error("Error removing temporary texture pack: ", pp)
      }), Op.u)
    }

    function Sp(pp) {
      if ("object" !== typeof pp || null === pp) return null;
      const ip = pp.metaData;
      return "object" !== typeof ip || null === ip || "string" !== typeof ip.id ? null : pp
    }
  },
  51220: (pp, ip, cp) => {
    function Op(pp) {
      return null === pp.gameSource ? "player" : "customGame"
    }
    cp.d(ip, {
      e: () => Ip,
      f: () => Up,
      g: () => yp,
      h: () => Op
    });
    const op = /^data:[\w.+/-]*;base64,[A-Za-z0-9+/]*={0,2}$/;

    function Ip(pp) {
      return "" === pp || "string" === typeof pp && op.test(pp)
    }

    function Sp(pp) {
      return "object" === typeof pp && null !== pp && ("earth" === pp.type || Object.entries(pp).every((pp => {
        let [ip, cp] = pp;
        return "type" === ip || Ip(cp)
      })))
    }
    const xp = /(?:src|image|image-set|cross-fade)\(/i,
      Lp = /url\(\s*(?:"(?<doubleQuoted>[^"]*)"|'(?<singleQuoted>[^']*)'|(?<unquoted>[^"'()\s]*))\s*\)/gi,
      Yp = /url\(/gi,
      Dp = ["https://bloxd.invalid/", "http://bloxd.invalid/"],
      Ap = new Set([...Dp.map((pp => new URL(pp).origin)), "https://fonts.gstatic.com"]),
      Pp = new Set(["https://i.imgur.com/MEcjBFQ.png"]);

    function Wp(pp) {
      var ip, cp;
      if (pp.includes("\\") || xp.test(pp)) return !0;
      const Op = [...pp.matchAll(Lp)];
      return Op.length !== (null !== (ip = null === (cp = pp.match(Yp)) || void 0 === cp ? void 0 : cp.length) && void 0 !== ip ? ip : 0) || !Op.every((pp => {
        var ip, cp, Op;
        let {
          groups: op
        } = pp;
        return function(pp) {
          try {
            return Dp.every((ip => {
              const cp = new URL(pp, ip);
              return "data:" === cp.protocol || Ap.has(cp.origin) || Pp.has(cp.href)
            }))
          } catch {
            return !1
          }
        }(null !== (ip = null !== (cp = null !== (Op = null === op || void 0 === op ? void 0 : op.doubleQuoted) && void 0 !== Op ? Op : null === op || void 0 === op ? void 0 : op.singleQuoted) && void 0 !== cp ? cp : null === op || void 0 === op ? void 0 : op.unquoted) && void 0 !== ip ? ip : "")
      }))
    }

    function yp(pp) {
      var ip, cp, Op, op, xp, Lp, Yp;
      const Dp = [...Object.values(null !== (ip = pp.textureOverrides) && void 0 !== ip ? ip : {}), ...Object.values(null !== (cp = pp.modelOverrides) && void 0 !== cp ? cp : {})],
        Ap = [...Object.values(null !== (Op = null === (op = pp.customCss) || void 0 === op ? void 0 : op.fontFaces) && void 0 !== Op ? Op : {}), ...Object.values(null !== (xp = null === (Lp = pp.customCss) || void 0 === Lp ? void 0 : Lp.classStyles) && void 0 !== xp ? xp : {})].flatMap((pp => Object.values(null !== pp && void 0 !== pp ? pp : {})));
      return !Dp.every(Ip) || !Object.values(null !== (Yp = pp.skyBoxes) && void 0 !== Yp ? Yp : {}).every(Sp) || Ap.some((pp => "string" === typeof pp && Wp(pp)))
    }

    function Up(pp, ip) {
      if (null === pp || "player" === ip || !yp(pp)) return pp;
      const cp = {
        ...pp
      };
      return pp.textureOverrides && (cp.textureOverrides = vp(pp.textureOverrides, Ip, "texture")), pp.modelOverrides && (cp.modelOverrides = vp(pp.modelOverrides, Ip, "model")), pp.skyBoxes && (cp.skyBoxes = vp(pp.skyBoxes, Sp, "sky")), pp.customCss && (cp.customCss = function(pp) {
        const ip = pp => vp(pp, (pp => "string" === typeof pp && !Wp(pp)), "CSS"),
          {
            fontFaces: cp,
            classStyles: Op
          } = wp(pp) ? pp : {},
          op = {};
        for (const [Ip, Sp] of Object.entries(wp(Op) ? Op : {})) op[Ip] = ip(Sp);
        return {
          fontFaces: (Array.isArray(cp) ? cp : []).map(ip),
          classStyles: op
        }
      }(pp.customCss)), cp
    }

    function wp(pp) {
      return "object" === typeof pp && null !== pp && !Array.isArray(pp)
    }

    function vp(pp, ip, cp) {
      const Op = Object.entries(wp(pp) ? pp : {}),
        op = Op.filter((pp => {
          let [, cp] = pp;
          return !ip(cp)
        }));
      if (op.length > 0) {
        const pp = op.map((pp => {
          let [ip] = pp;
          return ip
        }));
        console.warn(`Ignoring a custom game texture pack's ${cp} files that name another site: ${pp.join(", ")}`)
      }
      return Object.fromEntries(Op.filter((pp => {
        let [, cp] = pp;
        return ip(cp)
      })))
    }
  },
  51229: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => yp,
      d: () => Hp,
      h: () => tp
    });
    var Op = cp(1014),
      op = cp(2187),
      Ip = cp(3335),
      Sp = cp(3352),
      xp = cp(34482),
      Lp = cp(34480),
      Yp = cp(51220),
      Dp = cp(41200),
      Ap = cp(41174),
      Pp = cp(5183);
    const Wp = {
      pack: null,
      gameSource: null
    };
    class yp {
      constructor(pp) {
        this.host = pp, this.ready = void 0, this.state = Wp, this.playerPack = null, this.onGamePack = !1, this.confirmGamePack = null, this.skippedKey = null, this.ownAnnouncements = new Set, this.listeners = new Map, this.ownListeners = new Set, this.changes = 0, this.picks = 0, this.playerPicked = !1, this.ownChanges = 0, this.Ry = !1, (0, Sp.m)(), this.ready = this.readStored()
      }
      readyWithin(pp) {
        return Promise.race([this.ready, new Promise((ip => {
          setTimeout(ip, pp)
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
      onPlayerPackChange(pp) {
        return this.ownListeners.add(pp), () => {
          this.ownListeners.delete(pp)
        }
      }
      isUsingCustomGameTexturePack(pp) {
        return (0, Ap.e)(this.state, pp)
      }
      setGamePackConfirm(pp) {
        this.confirmGamePack = pp
      }
      subscribe(pp) {
        return this.listeners.set(pp, null), this.ready.then((() => {
          this.deliver(pp)
        })), () => {
          this.listeners.delete(pp)
        }
      }
      async setPlayerPack(pp) {
        const ip = wp(pp) ? null : pp;
        this.picks++, this.playerPicked = !0, this.ownChanges++, this.setOwn(ip), this.change({
          pack: ip,
          gameSource: null
        }, !1);
        const cp = await this.storePlayerPack(ip);
        return cp && this.announce(), cp
      }
      async packForGame(pp, ip, cp) {
        await this.readyWithin(Math.max(0, (null !== cp && void 0 !== cp ? cp : performance.now() + Dp.b) - performance.now()));
        const op = ++this.picks,
          Ip = (0, Op.j)(pp) ? (0, Op.o)(pp) : null;
        if (null === Ip) return void this.usePlayerPack();
        let Sp;
        const xp = function(pp) {
          let ip;
          const cp = new Promise(((cp, Op) => {
            ip = setTimeout((() => {
              Op(new Error(`no answer in ${pp} ms`))
            }), pp)
          }));
          return cp.catch((() => {})), {
            passed: cp,
            clear: () => {
              clearTimeout(ip)
            }
          }
        }(2e4);
        try {
          const pp = await Promise.race([ip.packKey(Ip), xp.passed]);
          if (null !== pp && this.onGamePack && this.state.gameSource === pp) return;
          if (null !== pp && pp === this.skippedKey) return void(this.Ry || this.picks !== op || this.usePlayerPack());
          Sp = null === pp ? null : await Promise.race([Up(Ip, pp, ip), xp.passed])
        } catch (Ap) {
          const pp = !this.Ry && this.picks === op && this.holdsOtherGamePack(Ip);
          return this.host.warn(`the texture pack of ${Ip} didn't load: ${pp?"the player's own shows":"the pack in play stays"}`, Ap), void(pp && this.usePlayerPack())
        } finally {
          xp.clear()
        }
        if (this.Ry || this.picks !== op) return;
        null !== Sp && (0, Yp.g)(Sp.pack) && (this.host.warn(`the texture pack of ${Ip} names files on other sites: the player's own shows`, null), Sp = null);
        const Lp = null === Sp || await this.confirmed(Sp.pack, Ip) ? null : Sp.key;
        this.Ry || this.picks !== op || (null !== Lp && (this.skippedKey = Lp, Sp = null), null === Sp ? this.usePlayerPack() : (this.onGamePack = !0, this.change({
          pack: Sp.pack,
          gameSource: Sp.key
        }, !0)))
      }
      endGamePack() {
        this.picks++, this.usePlayerPack()
      }
      holdsOtherGamePack(pp) {
        return this.onGamePack && "" !== this.state.gameSource && !this.isUsingCustomGameTexturePack(pp)
      }
      async confirmed(pp, ip) {
        const cp = this.confirmGamePack;
        if (null === cp) return !0;
        try {
          return await cp(pp, ip)
        } catch (Op) {
          return this.host.warn(`the texture pack prompt of ${ip} failed: the pack is skipped`, Op), !1
        }
      }
      async readPlayerPack() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (null !== pp && this.ownAnnouncements.delete(pp)) return;
        await this.ready;
        const ip = this.ownChanges;
        let cp;
        try {
          cp = await this.host.store.getItem(Sp.b, !0)
        } catch (op) {
          return void this.host.warn("the stored texture pack didn't read again: the pack in play stays", op)
        }
        if (this.Ry || this.ownChanges !== ip) return;
        const Op = vp(cp);
        (0, Pp.b)(Op, this.playerPack) || (this.ownChanges++, this.setOwn(Op), this.onGamePack || this.change({
          pack: Op,
          gameSource: null
        }, !1))
      }
      joinedWithout() {
        this.picks++
      }
      dispose() {
        this.Ry = !0, this.listeners.clear()
      }
      async readStored() {
        const {
          store: pp,
          warn: ip
        } = this.host;
        await Promise.all([!1 === this.host.oneShot ? void 0 : (0, Lp.h)(pp, !0, (pp => {
          ip("the custom game's texture pack wasn't removed from storage", pp)
        })).then((pp => {
          this.takeOneShot(pp)
        }), (pp => {
          ip("the custom game's texture pack didn't read: the player's own shows", pp)
        })), pp.getItem(Sp.b, !0).then((pp => {
          this.takeStoredOwn(pp)
        }), (pp => {
          ip("the stored texture pack didn't read: the default pack shows", pp), this.takeStoredOwn(null)
        }))]), this.update()
      }
      takeOneShot(pp) {
        var ip;
        null === pp || this.Ry || this.changes > 0 || this.picks > 0 || ((0, Yp.g)(pp.pack) ? this.host.warn("the custom game's texture pack names files on other sites: the player's own shows", null) : (this.onGamePack = !0, this.state = {
          pack: pp.pack,
          gameSource: null !== (ip = pp.source) && void 0 !== ip ? ip : ""
        }))
      }
      takeStoredOwn(pp) {
        if (this.playerPicked || this.Ry) return;
        if (this.ownChanges++, this.setOwn(vp(pp)), this.onGamePack) return;
        const ip = {
          pack: this.playerPack,
          gameSource: null
        };
        0 === this.changes ? this.state = ip : this.change(ip, !1)
      }
      async update() {
        const pp = this.playerPack,
          ip = null === pp || void 0 === pp ? void 0 : pp.metaData.id;
        if (!pp || !ip || !this.host.fetchLatest || ip === op.b || ip === op.q.CUSTOM) return;
        const cp = op.r[ip];
        if (void 0 === cp || pp.metaData.version >= cp) return;
        let Op;
        try {
          Op = vp(await this.host.fetchLatest(ip))
        } catch (Ip) {
          return void this.host.warn(`texture pack ${ip} didn't update to version ${cp}`, Ip)
        }
        null === Op || this.Ry || this.playerPack !== pp || (this.ownChanges++, this.setOwn(Op), this.onGamePack || this.change({
          pack: Op,
          gameSource: null
        }, !1), await this.storePlayerPack(Op) && this.announce())
      }
      announce() {
        const pp = (0, xp.d)();
        null !== pp && this.ownAnnouncements.add(pp)
      }
      setOwn(pp) {
        this.playerPack = pp;
        for (const cp of [...this.ownListeners]) try {
          cp()
        } catch (ip) {
          this.host.warn("a texture pack listener threw", ip)
        }
      }
      usePlayerPack() {
        this.onGamePack && this.change({
          pack: this.playerPack,
          gameSource: null
        }, !1)
      }
      async storePlayerPack(pp) {
        try {
          return null === pp ? (await this.host.store.removeItem(Sp.b), !0) : await this.host.store.setItem(Sp.b, pp)
        } catch (ip) {
          return this.host.warn("the texture pack wasn't stored: it shows until the page reloads", ip), !1
        }
      }
      change(pp, ip) {
        if (!this.Ry) {
          this.changes++, this.onGamePack = ip, this.state = pp;
          for (const pp of [...this.listeners.keys()]) this.deliver(pp)
        }
      }
      deliver(pp) {
        if (!this.Ry && this.listeners.has(pp) && this.listeners.get(pp) !== this.state) {
          this.listeners.set(pp, this.state);
          try {
            pp(this.state)
          } catch (ip) {
            this.host.warn("a texture pack listener threw", ip)
          }
        }
      }
    }
    async function Up(pp, ip, cp) {
      const Op = (0, Lp.d)(await cp.fetchPack(ip));
      if (null !== Op) return {
        pack: Op,
        key: ip
      };
      const op = await cp.packKey(pp);
      if (null === op) return null;
      const Ip = (0, Lp.d)(await cp.fetchPack(op));
      if (null === Ip) throw new Error(`no texture pack at ${op}`);
      return {
        pack: Ip,
        key: op
      }
    }

    function wp(pp) {
      return null === pp || pp.metaData.id === op.b
    }

    function vp(pp) {
      const ip = (0, Lp.d)(pp);
      return wp(ip) ? null : ip
    }
    async function tp(pp) {
      let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ip.d;
      if (null === pp.pack) return null;
      const {
        packAssets: Op
      } = await Promise.all([cp.e(206), cp.e(45)]).then((() => cp(61592)));
      return Op(pp, ip)
    }

    function Hp(pp) {
      const ip = (0, Sp.v)();
      return null === ip ? () => {} : (ip.onmessage = ip => {
        pp.readPlayerPack((0, xp.f)(ip.data))
      }, () => {
        ip.close()
      })
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);