export const id = 194;
export const ids = [194];
export const modules = {
  9343: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => lq,
      e: () => Oq
    });
    var Yq = gq(3150);

    function lq() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const qq = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const Eq = new BroadcastChannel(Yq.n);
        Eq.postMessage({
          stored: qq
        }), Eq.close()
      } catch {
        return null
      }
      return qq
    }

    function Oq(qq) {
      const Eq = "object" === typeof qq && null !== qq ? qq.stored : null;
      return "string" === typeof Eq ? Eq : null
    }
  },
  9336: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => mq,
      d: () => lq,
      g: () => Oq
    });
    var Yq = gq(3150);
    async function lq(qq, Eq, gq) {
      let lq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const Oq = mq(await qq.getItem(Yq.g, Eq));
      if (null === Oq || lq()) return null;
      const xq = await qq.getItem(Yq.j, Eq);
      return lq() ? null : (await async function(qq) {
        await Promise.all([qq.removeItem(Yq.g), qq.removeItem(Yq.j)])
      }(qq).catch(gq), {
        pack: Oq,
        source: "string" === typeof xq ? xq : null
      })
    }

    function Oq(qq) {
      return (0, Yq.u)() ? Promise.resolve(null) : lq(qq, !1, (qq => {
        console.error("Error removing temporary texture pack: ", qq)
      }), Yq.u)
    }

    function mq(qq) {
      if ("object" !== typeof qq || null === qq) return null;
      const Eq = qq.metaData;
      return "object" !== typeof Eq || null === Eq || "string" !== typeof Eq.id ? null : qq
    }
  },
  43087: (qq, Eq, gq) => {
    function Yq(qq) {
      return null === qq.gameSource ? "player" : "customGame"
    }
    gq.d(Eq, {
      d: () => Oq,
      f: () => Vq,
      j: () => aq,
      k: () => Yq
    });
    const lq = /^data:[\w.+/-]*;base64,[A-Za-z0-9+/]*={0,2}$/;

    function Oq(qq) {
      return "" === qq || "string" === typeof qq && lq.test(qq)
    }

    function mq(qq) {
      return "object" === typeof qq && null !== qq && ("earth" === qq.type || Object.entries(qq).every((qq => {
        let [Eq, gq] = qq;
        return "type" === Eq || Oq(gq)
      })))
    }
    const xq = /(?:src|image|image-set|cross-fade)\(/i,
      Aq = /url\(\s*(?:"(?<doubleQuoted>[^"]*)"|'(?<singleQuoted>[^']*)'|(?<unquoted>[^"'()\s]*))\s*\)/gi,
      cq = /url\(/gi,
      uq = ["https://bloxd.invalid/", "http://bloxd.invalid/"],
      Bq = new Set([...uq.map((qq => new URL(qq).origin)), "https://fonts.gstatic.com"]),
      Wq = new Set(["https://i.imgur.com/MEcjBFQ.png"]);

    function Nq(qq) {
      var Eq, gq;
      if (qq.includes("\\") || xq.test(qq)) return !0;
      const Yq = [...qq.matchAll(Aq)];
      return Yq.length !== (null !== (Eq = null === (gq = qq.match(cq)) || void 0 === gq ? void 0 : gq.length) && void 0 !== Eq ? Eq : 0) || !Yq.every((qq => {
        var Eq, gq, Yq;
        let {
          groups: lq
        } = qq;
        return function(qq) {
          try {
            return uq.every((Eq => {
              const gq = new URL(qq, Eq);
              return "data:" === gq.protocol || Bq.has(gq.origin) || Wq.has(gq.href)
            }))
          } catch {
            return !1
          }
        }(null !== (Eq = null !== (gq = null !== (Yq = null === lq || void 0 === lq ? void 0 : lq.doubleQuoted) && void 0 !== Yq ? Yq : null === lq || void 0 === lq ? void 0 : lq.singleQuoted) && void 0 !== gq ? gq : null === lq || void 0 === lq ? void 0 : lq.unquoted) && void 0 !== Eq ? Eq : "")
      }))
    }

    function aq(qq) {
      var Eq, gq, Yq, lq, xq, Aq, cq;
      const uq = [...Object.values(null !== (Eq = qq.textureOverrides) && void 0 !== Eq ? Eq : {}), ...Object.values(null !== (gq = qq.modelOverrides) && void 0 !== gq ? gq : {})],
        Bq = [...Object.values(null !== (Yq = null === (lq = qq.customCss) || void 0 === lq ? void 0 : lq.fontFaces) && void 0 !== Yq ? Yq : {}), ...Object.values(null !== (xq = null === (Aq = qq.customCss) || void 0 === Aq ? void 0 : Aq.classStyles) && void 0 !== xq ? xq : {})].flatMap((qq => Object.values(null !== qq && void 0 !== qq ? qq : {})));
      return !uq.every(Oq) || !Object.values(null !== (cq = qq.skyBoxes) && void 0 !== cq ? cq : {}).every(mq) || Bq.some((qq => "string" === typeof qq && Nq(qq)))
    }

    function Vq(qq, Eq) {
      if (null === qq || "player" === Eq || !aq(qq)) return qq;
      const gq = {
        ...qq
      };
      return qq.textureOverrides && (gq.textureOverrides = jq(qq.textureOverrides, Oq, "texture")), qq.modelOverrides && (gq.modelOverrides = jq(qq.modelOverrides, Oq, "model")), qq.skyBoxes && (gq.skyBoxes = jq(qq.skyBoxes, mq, "sky")), qq.customCss && (gq.customCss = function(qq) {
        const Eq = qq => jq(qq, (qq => "string" === typeof qq && !Nq(qq)), "CSS"),
          {
            fontFaces: gq,
            classStyles: Yq
          } = dq(qq) ? qq : {},
          lq = {};
        for (const [Oq, mq] of Object.entries(dq(Yq) ? Yq : {})) lq[Oq] = Eq(mq);
        return {
          fontFaces: (Array.isArray(gq) ? gq : []).map(Eq),
          classStyles: lq
        }
      }(qq.customCss)), gq
    }

    function dq(qq) {
      return "object" === typeof qq && null !== qq && !Array.isArray(qq)
    }

    function jq(qq, Eq, gq) {
      const Yq = Object.entries(dq(qq) ? qq : {}),
        lq = Yq.filter((qq => {
          let [, gq] = qq;
          return !Eq(gq)
        }));
      if (lq.length > 0) {
        const qq = lq.map((qq => {
          let [Eq] = qq;
          return Eq
        }));
        console.warn(`Ignoring a custom game texture pack's ${gq} files that name another site: ${qq.join(", ")}`)
      }
      return Object.fromEntries(Yq.filter((qq => {
        let [, gq] = qq;
        return Eq(gq)
      })))
    }
  },
  43092: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => aq,
      f: () => oq,
      h: () => Hq
    });
    var Yq = gq(987),
      lq = gq(3067),
      Oq = gq(3135),
      mq = gq(3150),
      xq = gq(9343),
      Aq = gq(9336),
      cq = gq(43087),
      uq = gq(40786),
      Bq = gq(40770),
      Wq = gq(4890);
    const Nq = {
      pack: null,
      gameSource: null
    };
    class aq {
      constructor(qq) {
        this.host = qq, this.ready = void 0, this.state = Nq, this.playerPack = null, this.onGamePack = !1, this.confirmGamePack = null, this.skippedKey = null, this.ownAnnouncements = new Set, this.listeners = new Map, this.ownListeners = new Set, this.changes = 0, this.picks = 0, this.playerPicked = !1, this.ownChanges = 0, this.eN = !1, (0, mq.r)(), this.ready = this.readStored()
      }
      readyWithin(qq) {
        return Promise.race([this.ready, new Promise((Eq => {
          setTimeout(Eq, qq)
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
      onPlayerPackChange(qq) {
        return this.ownListeners.add(qq), () => {
          this.ownListeners.delete(qq)
        }
      }
      isUsingCustomGameTexturePack(qq) {
        return (0, Bq.f)(this.state, qq)
      }
      setGamePackConfirm(qq) {
        this.confirmGamePack = qq
      }
      subscribe(qq) {
        return this.listeners.set(qq, null), this.ready.then((() => {
          this.deliver(qq)
        })), () => {
          this.listeners.delete(qq)
        }
      }
      async setPlayerPack(qq) {
        const Eq = dq(qq) ? null : qq;
        this.picks++, this.playerPicked = !0, this.ownChanges++, this.setOwn(Eq), this.change({
          pack: Eq,
          gameSource: null
        }, !1);
        const gq = await this.storePlayerPack(Eq);
        return gq && this.announce(), gq
      }
      async packForGame(qq, Eq, gq) {
        await this.readyWithin(Math.max(0, (null !== gq && void 0 !== gq ? gq : performance.now() + uq.d) - performance.now()));
        const lq = ++this.picks,
          Oq = (0, Yq.j)(qq) ? (0, Yq.o)(qq) : null;
        if (null === Oq) return void this.usePlayerPack();
        let mq;
        const xq = function(qq) {
          let Eq;
          const gq = new Promise(((gq, Yq) => {
            Eq = setTimeout((() => {
              Yq(new Error(`no answer in ${qq} ms`))
            }), qq)
          }));
          return gq.catch((() => {})), {
            passed: gq,
            clear: () => {
              clearTimeout(Eq)
            }
          }
        }(2e4);
        try {
          const qq = await Promise.race([Eq.packKey(Oq), xq.passed]);
          if (null !== qq && this.onGamePack && this.state.gameSource === qq) return;
          if (null !== qq && qq === this.skippedKey) return void(this.eN || this.picks !== lq || this.usePlayerPack());
          mq = null === qq ? null : await Promise.race([Vq(Oq, qq, Eq), xq.passed])
        } catch (Bq) {
          const qq = !this.eN && this.picks === lq && this.holdsOtherGamePack(Oq);
          return this.host.warn(`the texture pack of ${Oq} didn't load: ${qq?"the player's own shows":"the pack in play stays"}`, Bq), void(qq && this.usePlayerPack())
        } finally {
          xq.clear()
        }
        if (this.eN || this.picks !== lq) return;
        null !== mq && (0, cq.j)(mq.pack) && (this.host.warn(`the texture pack of ${Oq} names files on other sites: the player's own shows`, null), mq = null);
        const Aq = null === mq || await this.confirmed(mq.pack, Oq) ? null : mq.key;
        this.eN || this.picks !== lq || (null !== Aq && (this.skippedKey = Aq, mq = null), null === mq ? this.usePlayerPack() : (this.onGamePack = !0, this.change({
          pack: mq.pack,
          gameSource: mq.key
        }, !0)))
      }
      endGamePack() {
        this.picks++, this.usePlayerPack()
      }
      holdsOtherGamePack(qq) {
        return this.onGamePack && "" !== this.state.gameSource && !this.isUsingCustomGameTexturePack(qq)
      }
      async confirmed(qq, Eq) {
        const gq = this.confirmGamePack;
        if (null === gq) return !0;
        try {
          return await gq(qq, Eq)
        } catch (Yq) {
          return this.host.warn(`the texture pack prompt of ${Eq} failed: the pack is skipped`, Yq), !1
        }
      }
      async readPlayerPack() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (null !== qq && this.ownAnnouncements.delete(qq)) return;
        await this.ready;
        const Eq = this.ownChanges;
        let gq;
        try {
          gq = await this.host.store.getItem(mq.e, !0)
        } catch (lq) {
          return void this.host.warn("the stored texture pack didn't read again: the pack in play stays", lq)
        }
        if (this.eN || this.ownChanges !== Eq) return;
        const Yq = jq(gq);
        (0, Wq.c)(Yq, this.playerPack) || (this.ownChanges++, this.setOwn(Yq), this.onGamePack || this.change({
          pack: Yq,
          gameSource: null
        }, !1))
      }
      joinedWithout() {
        this.picks++
      }
      dispose() {
        this.eN = !0, this.listeners.clear()
      }
      async readStored() {
        const {
          store: qq,
          warn: Eq
        } = this.host;
        await Promise.all([!1 === this.host.oneShot ? void 0 : (0, Aq.d)(qq, !0, (qq => {
          Eq("the custom game's texture pack wasn't removed from storage", qq)
        })).then((qq => {
          this.takeOneShot(qq)
        }), (qq => {
          Eq("the custom game's texture pack didn't read: the player's own shows", qq)
        })), qq.getItem(mq.e, !0).then((qq => {
          this.takeStoredOwn(qq)
        }), (qq => {
          Eq("the stored texture pack didn't read: the default pack shows", qq), this.takeStoredOwn(null)
        }))]), this.update()
      }
      takeOneShot(qq) {
        var Eq;
        null === qq || this.eN || this.changes > 0 || this.picks > 0 || ((0, cq.j)(qq.pack) ? this.host.warn("the custom game's texture pack names files on other sites: the player's own shows", null) : (this.onGamePack = !0, this.state = {
          pack: qq.pack,
          gameSource: null !== (Eq = qq.source) && void 0 !== Eq ? Eq : ""
        }))
      }
      takeStoredOwn(qq) {
        if (this.playerPicked || this.eN) return;
        if (this.ownChanges++, this.setOwn(jq(qq)), this.onGamePack) return;
        const Eq = {
          pack: this.playerPack,
          gameSource: null
        };
        0 === this.changes ? this.state = Eq : this.change(Eq, !1)
      }
      async update() {
        const qq = this.playerPack,
          Eq = null === qq || void 0 === qq ? void 0 : qq.metaData.id;
        if (!qq || !Eq || !this.host.fetchLatest || Eq === lq.c || Eq === lq.n.CUSTOM) return;
        const gq = lq.o[Eq];
        if (void 0 === gq || qq.metaData.version >= gq) return;
        let Yq;
        try {
          Yq = jq(await this.host.fetchLatest(Eq))
        } catch (Oq) {
          return void this.host.warn(`texture pack ${Eq} didn't update to version ${gq}`, Oq)
        }
        null === Yq || this.eN || this.playerPack !== qq || (this.ownChanges++, this.setOwn(Yq), this.onGamePack || this.change({
          pack: Yq,
          gameSource: null
        }, !1), await this.storePlayerPack(Yq) && this.announce())
      }
      announce() {
        const qq = (0, xq.b)();
        null !== qq && this.ownAnnouncements.add(qq)
      }
      setOwn(qq) {
        this.playerPack = qq;
        for (const gq of [...this.ownListeners]) try {
          gq()
        } catch (Eq) {
          this.host.warn("a texture pack listener threw", Eq)
        }
      }
      usePlayerPack() {
        this.onGamePack && this.change({
          pack: this.playerPack,
          gameSource: null
        }, !1)
      }
      async storePlayerPack(qq) {
        try {
          return null === qq ? (await this.host.store.removeItem(mq.e), !0) : await this.host.store.setItem(mq.e, qq)
        } catch (Eq) {
          return this.host.warn("the texture pack wasn't stored: it shows until the page reloads", Eq), !1
        }
      }
      change(qq, Eq) {
        if (!this.eN) {
          this.changes++, this.onGamePack = Eq, this.state = qq;
          for (const qq of [...this.listeners.keys()]) this.deliver(qq)
        }
      }
      deliver(qq) {
        if (!this.eN && this.listeners.has(qq) && this.listeners.get(qq) !== this.state) {
          this.listeners.set(qq, this.state);
          try {
            qq(this.state)
          } catch (Eq) {
            this.host.warn("a texture pack listener threw", Eq)
          }
        }
      }
    }
    async function Vq(qq, Eq, gq) {
      const Yq = (0, Aq.c)(await gq.fetchPack(Eq));
      if (null !== Yq) return {
        pack: Yq,
        key: Eq
      };
      const lq = await gq.packKey(qq);
      if (null === lq) return null;
      const Oq = (0, Aq.c)(await gq.fetchPack(lq));
      if (null === Oq) throw new Error(`no texture pack at ${lq}`);
      return {
        pack: Oq,
        key: lq
      }
    }

    function dq(qq) {
      return null === qq || qq.metaData.id === lq.c
    }

    function jq(qq) {
      const Eq = (0, Aq.c)(qq);
      return dq(Eq) ? null : Eq
    }
    async function Hq(qq) {
      let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Oq.d;
      if (null === qq.pack) return null;
      const {
        packAssets: Yq
      } = await Promise.all([gq.e(196), gq.e(44)]).then((() => gq(61465)));
      return Yq(qq, Eq)
    }

    function oq(qq) {
      const Eq = (0, mq.x)();
      return null === Eq ? () => {} : (Eq.onmessage = Eq => {
        qq.readPlayerPack((0, xq.e)(Eq.data))
      }, () => {
        Eq.close()
      })
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);