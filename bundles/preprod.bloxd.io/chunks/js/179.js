export const id = 179;
export const ids = [179];
export const modules = {
  8449: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => hy,
      f: () => fy
    });
    var Uy = Wy(2586);

    function hy() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const yb = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const bb = new BroadcastChannel(Uy.k);
        bb.postMessage({
          stored: yb
        }), bb.close()
      } catch {
        return null
      }
      return yb
    }

    function fy(yb) {
      const bb = "object" === typeof yb && null !== yb ? yb.stored : null;
      return "string" === typeof bb ? bb : null
    }
  },
  8444: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Zy,
      e: () => hy,
      h: () => fy
    });
    var Uy = Wy(2586);
    async function hy(yb, bb, Wy) {
      let hy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const fy = Zy(await yb.getItem(Uy.d, bb));
      if (null === fy || hy()) return null;
      const cb = await yb.getItem(Uy.h, bb);
      return hy() ? null : (await async function(yb) {
        await Promise.all([yb.removeItem(Uy.d), yb.removeItem(Uy.h)])
      }(yb).catch(Wy), {
        pack: fy,
        source: "string" === typeof cb ? cb : null
      })
    }

    function fy(yb) {
      return (0, Uy.v)() ? Promise.resolve(null) : hy(yb, !1, (yb => {
        console.error("Error removing temporary texture pack: ", yb)
      }), Uy.v)
    }

    function Zy(yb) {
      if ("object" !== typeof yb || null === yb) return null;
      const bb = yb.metaData;
      return "object" !== typeof bb || null === bb || "string" !== typeof bb.id ? null : yb
    }
  },
  41841: (yb, bb, Wy) => {
    function Uy(yb) {
      return null === yb.gameSource ? "player" : "customGame"
    }
    Wy.d(bb, {
      e: () => fy,
      g: () => Sy,
      j: () => sy,
      m: () => Uy
    });
    const hy = /^data:[\w.+/-]*;base64,[A-Za-z0-9+/]*={0,2}$/;

    function fy(yb) {
      return "" === yb || "string" === typeof yb && hy.test(yb)
    }

    function Zy(yb) {
      return "object" === typeof yb && null !== yb && ("earth" === yb.type || Object.entries(yb).every((yb => {
        let [bb, Wy] = yb;
        return "type" === bb || fy(Wy)
      })))
    }
    const cb = /(?:src|image|image-set|cross-fade)\(/i,
      Py = /url\(\s*(?:"(?<doubleQuoted>[^"]*)"|'(?<singleQuoted>[^']*)'|(?<unquoted>[^"'()\s]*))\s*\)/gi,
      oy = /url\(/gi,
      By = ["https://bloxd.invalid/", "http://bloxd.invalid/"],
      Ky = new Set([...By.map((yb => new URL(yb).origin)), "https://fonts.gstatic.com"]),
      ey = new Set(["https://i.imgur.com/MEcjBFQ.png"]);

    function qb(yb) {
      var bb, Wy;
      if (yb.includes("\\") || cb.test(yb)) return !0;
      const Uy = [...yb.matchAll(Py)];
      return Uy.length !== (null !== (bb = null === (Wy = yb.match(oy)) || void 0 === Wy ? void 0 : Wy.length) && void 0 !== bb ? bb : 0) || !Uy.every((yb => {
        var bb, Wy, Uy;
        let {
          groups: hy
        } = yb;
        return function(yb) {
          try {
            return By.every((bb => {
              const Wy = new URL(yb, bb);
              return "data:" === Wy.protocol || Ky.has(Wy.origin) || ey.has(Wy.href)
            }))
          } catch {
            return !1
          }
        }(null !== (bb = null !== (Wy = null !== (Uy = null === hy || void 0 === hy ? void 0 : hy.doubleQuoted) && void 0 !== Uy ? Uy : null === hy || void 0 === hy ? void 0 : hy.singleQuoted) && void 0 !== Wy ? Wy : null === hy || void 0 === hy ? void 0 : hy.unquoted) && void 0 !== bb ? bb : "")
      }))
    }

    function sy(yb) {
      var bb, Wy, Uy, hy, cb, Py, oy;
      const By = [...Object.values(null !== (bb = yb.textureOverrides) && void 0 !== bb ? bb : {}), ...Object.values(null !== (Wy = yb.modelOverrides) && void 0 !== Wy ? Wy : {})],
        Ky = [...Object.values(null !== (Uy = null === (hy = yb.customCss) || void 0 === hy ? void 0 : hy.fontFaces) && void 0 !== Uy ? Uy : {}), ...Object.values(null !== (cb = null === (Py = yb.customCss) || void 0 === Py ? void 0 : Py.classStyles) && void 0 !== cb ? cb : {})].flatMap((yb => Object.values(null !== yb && void 0 !== yb ? yb : {})));
      return !By.every(fy) || !Object.values(null !== (oy = yb.skyBoxes) && void 0 !== oy ? oy : {}).every(Zy) || Ky.some((yb => "string" === typeof yb && qb(yb)))
    }

    function Sy(yb, bb) {
      if (null === yb || "player" === bb || !sy(yb)) return yb;
      const Wy = {
        ...yb
      };
      return yb.textureOverrides && (Wy.textureOverrides = ly(yb.textureOverrides, fy, "texture")), yb.modelOverrides && (Wy.modelOverrides = ly(yb.modelOverrides, fy, "model")), yb.skyBoxes && (Wy.skyBoxes = ly(yb.skyBoxes, Zy, "sky")), yb.customCss && (Wy.customCss = function(yb) {
        const bb = yb => ly(yb, (yb => "string" === typeof yb && !qb(yb)), "CSS"),
          {
            fontFaces: Wy,
            classStyles: Uy
          } = Ey(yb) ? yb : {},
          hy = {};
        for (const [fy, Zy] of Object.entries(Ey(Uy) ? Uy : {})) hy[fy] = bb(Zy);
        return {
          fontFaces: (Array.isArray(Wy) ? Wy : []).map(bb),
          classStyles: hy
        }
      }(yb.customCss)), Wy
    }

    function Ey(yb) {
      return "object" === typeof yb && null !== yb && !Array.isArray(yb)
    }

    function ly(yb, bb, Wy) {
      const Uy = Object.entries(Ey(yb) ? yb : {}),
        hy = Uy.filter((yb => {
          let [, Wy] = yb;
          return !bb(Wy)
        }));
      if (hy.length > 0) {
        const yb = hy.map((yb => {
          let [bb] = yb;
          return bb
        }));
        console.warn(`Ignoring a custom game texture pack's ${Wy} files that name another site: ${yb.join(", ")}`)
      }
      return Object.fromEntries(Uy.filter((yb => {
        let [, Wy] = yb;
        return bb(Wy)
      })))
    }
  },
  41849: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => sy,
      f: () => Cy,
      i: () => mb
    });
    var Uy = Wy(865),
      hy = Wy(2481),
      fy = Wy(2575),
      Zy = Wy(2586),
      cb = Wy(8449),
      Py = Wy(8444),
      oy = Wy(41841),
      By = Wy(39543),
      Ky = Wy(39539),
      ey = Wy(4246);
    const qb = {
      pack: null,
      gameSource: null
    };
    class sy {
      constructor(yb) {
        this.host = yb, this.ready = void 0, this.state = qb, this.playerPack = null, this.onGamePack = !1, this.confirmGamePack = null, this.skippedKey = null, this.ownAnnouncements = new Set, this.listeners = new Map, this.ownListeners = new Set, this.changes = 0, this.picks = 0, this.playerPicked = !1, this.ownChanges = 0, this.rh = !1, (0, Zy.n)(), this.ready = this.readStored()
      }
      readyWithin(yb) {
        return Promise.race([this.ready, new Promise((bb => {
          setTimeout(bb, yb)
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
      onPlayerPackChange(yb) {
        return this.ownListeners.add(yb), () => {
          this.ownListeners.delete(yb)
        }
      }
      isUsingCustomGameTexturePack(yb) {
        return (0, Ky.f)(this.state, yb)
      }
      setGamePackConfirm(yb) {
        this.confirmGamePack = yb
      }
      subscribe(yb) {
        return this.listeners.set(yb, null), this.ready.then((() => {
          this.deliver(yb)
        })), () => {
          this.listeners.delete(yb)
        }
      }
      async setPlayerPack(yb) {
        const bb = Ey(yb) ? null : yb;
        this.picks++, this.playerPicked = !0, this.ownChanges++, this.setOwn(bb), this.change({
          pack: bb,
          gameSource: null
        }, !1);
        const Wy = await this.storePlayerPack(bb);
        return Wy && this.announce(), Wy
      }
      async packForGame(yb, bb, Wy) {
        await this.readyWithin(Math.max(0, (null !== Wy && void 0 !== Wy ? Wy : performance.now() + By.d) - performance.now()));
        const hy = ++this.picks,
          fy = (0, Uy.p)(yb) ? (0, Uy.v)(yb) : null;
        if (null === fy) return void this.usePlayerPack();
        let Zy;
        const cb = function(yb) {
          let bb;
          const Wy = new Promise(((Wy, Uy) => {
            bb = setTimeout((() => {
              Uy(new Error(`no answer in ${yb} ms`))
            }), yb)
          }));
          return Wy.catch((() => {})), {
            passed: Wy,
            clear: () => {
              clearTimeout(bb)
            }
          }
        }(2e4);
        try {
          const yb = await Promise.race([bb.packKey(fy), cb.passed]);
          if (null !== yb && this.onGamePack && this.state.gameSource === yb) return;
          if (null !== yb && yb === this.skippedKey) return void(this.rh || this.picks !== hy || this.usePlayerPack());
          Zy = null === yb ? null : await Promise.race([Sy(fy, yb, bb), cb.passed])
        } catch (Ky) {
          const yb = !this.rh && this.picks === hy && this.holdsOtherGamePack(fy);
          return this.host.warn(`the texture pack of ${fy} didn't load: ${yb?"the player's own shows":"the pack in play stays"}`, Ky), void(yb && this.usePlayerPack())
        } finally {
          cb.clear()
        }
        if (this.rh || this.picks !== hy) return;
        null !== Zy && (0, oy.j)(Zy.pack) && (this.host.warn(`the texture pack of ${fy} names files on other sites: the player's own shows`, null), Zy = null);
        const Py = null === Zy || await this.confirmed(Zy.pack, fy) ? null : Zy.key;
        this.rh || this.picks !== hy || (null !== Py && (this.skippedKey = Py, Zy = null), null === Zy ? this.usePlayerPack() : (this.onGamePack = !0, this.change({
          pack: Zy.pack,
          gameSource: Zy.key
        }, !0)))
      }
      endGamePack() {
        this.picks++, this.usePlayerPack()
      }
      holdsOtherGamePack(yb) {
        return this.onGamePack && "" !== this.state.gameSource && !this.isUsingCustomGameTexturePack(yb)
      }
      async confirmed(yb, bb) {
        const Wy = this.confirmGamePack;
        if (null === Wy) return !0;
        try {
          return await Wy(yb, bb)
        } catch (Uy) {
          return this.host.warn(`the texture pack prompt of ${bb} failed: the pack is skipped`, Uy), !1
        }
      }
      async readPlayerPack() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (null !== yb && this.ownAnnouncements.delete(yb)) return;
        await this.ready;
        const bb = this.ownChanges;
        let Wy;
        try {
          Wy = await this.host.store.getItem(Zy.b, !0)
        } catch (hy) {
          return void this.host.warn("the stored texture pack didn't read again: the pack in play stays", hy)
        }
        if (this.rh || this.ownChanges !== bb) return;
        const Uy = ly(Wy);
        (0, ey.c)(Uy, this.playerPack) || (this.ownChanges++, this.setOwn(Uy), this.onGamePack || this.change({
          pack: Uy,
          gameSource: null
        }, !1))
      }
      joinedWithout() {
        this.picks++
      }
      dispose() {
        this.rh = !0, this.listeners.clear()
      }
      async readStored() {
        const {
          store: yb,
          warn: bb
        } = this.host;
        await Promise.all([!1 === this.host.oneShot ? void 0 : (0, Py.e)(yb, !0, (yb => {
          bb("the custom game's texture pack wasn't removed from storage", yb)
        })).then((yb => {
          this.takeOneShot(yb)
        }), (yb => {
          bb("the custom game's texture pack didn't read: the player's own shows", yb)
        })), yb.getItem(Zy.b, !0).then((yb => {
          this.takeStoredOwn(yb)
        }), (yb => {
          bb("the stored texture pack didn't read: the default pack shows", yb), this.takeStoredOwn(null)
        }))]), this.update()
      }
      takeOneShot(yb) {
        var bb;
        null === yb || this.rh || this.changes > 0 || this.picks > 0 || ((0, oy.j)(yb.pack) ? this.host.warn("the custom game's texture pack names files on other sites: the player's own shows", null) : (this.onGamePack = !0, this.state = {
          pack: yb.pack,
          gameSource: null !== (bb = yb.source) && void 0 !== bb ? bb : ""
        }))
      }
      takeStoredOwn(yb) {
        if (this.playerPicked || this.rh) return;
        if (this.ownChanges++, this.setOwn(ly(yb)), this.onGamePack) return;
        const bb = {
          pack: this.playerPack,
          gameSource: null
        };
        0 === this.changes ? this.state = bb : this.change(bb, !1)
      }
      async update() {
        const yb = this.playerPack,
          bb = null === yb || void 0 === yb ? void 0 : yb.metaData.id;
        if (!yb || !bb || !this.host.fetchLatest || bb === hy.c || bb === hy.m.CUSTOM) return;
        const Wy = hy.n[bb];
        if (void 0 === Wy || yb.metaData.version >= Wy) return;
        let Uy;
        try {
          Uy = ly(await this.host.fetchLatest(bb))
        } catch (fy) {
          return void this.host.warn(`texture pack ${bb} didn't update to version ${Wy}`, fy)
        }
        null === Uy || this.rh || this.playerPack !== yb || (this.ownChanges++, this.setOwn(Uy), this.onGamePack || this.change({
          pack: Uy,
          gameSource: null
        }, !1), await this.storePlayerPack(Uy) && this.announce())
      }
      announce() {
        const yb = (0, cb.c)();
        null !== yb && this.ownAnnouncements.add(yb)
      }
      setOwn(yb) {
        this.playerPack = yb;
        for (const Wy of [...this.ownListeners]) try {
          Wy()
        } catch (bb) {
          this.host.warn("a texture pack listener threw", bb)
        }
      }
      usePlayerPack() {
        this.onGamePack && this.change({
          pack: this.playerPack,
          gameSource: null
        }, !1)
      }
      async storePlayerPack(yb) {
        try {
          return null === yb ? (await this.host.store.removeItem(Zy.b), !0) : await this.host.store.setItem(Zy.b, yb)
        } catch (bb) {
          return this.host.warn("the texture pack wasn't stored: it shows until the page reloads", bb), !1
        }
      }
      change(yb, bb) {
        if (!this.rh) {
          this.changes++, this.onGamePack = bb, this.state = yb;
          for (const yb of [...this.listeners.keys()]) this.deliver(yb)
        }
      }
      deliver(yb) {
        if (!this.rh && this.listeners.has(yb) && this.listeners.get(yb) !== this.state) {
          this.listeners.set(yb, this.state);
          try {
            yb(this.state)
          } catch (bb) {
            this.host.warn("a texture pack listener threw", bb)
          }
        }
      }
    }
    async function Sy(yb, bb, Wy) {
      const Uy = (0, Py.c)(await Wy.fetchPack(bb));
      if (null !== Uy) return {
        pack: Uy,
        key: bb
      };
      const hy = await Wy.packKey(yb);
      if (null === hy) return null;
      const fy = (0, Py.c)(await Wy.fetchPack(hy));
      if (null === fy) throw new Error(`no texture pack at ${hy}`);
      return {
        pack: fy,
        key: hy
      }
    }

    function Ey(yb) {
      return null === yb || yb.metaData.id === hy.c
    }

    function ly(yb) {
      const bb = (0, Py.c)(yb);
      return Ey(bb) ? null : bb
    }
    async function mb(yb) {
      let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : fy.c;
      if (null === yb.pack) return null;
      const {
        packAssets: Uy
      } = await Promise.all([Wy.e(63), Wy.e(182), Wy.e(86), Wy.e(185), Wy.e(41)]).then((() => Wy(60042)));
      return Uy(yb, bb)
    }

    function Cy(yb) {
      const bb = (0, Zy.y)();
      return null === bb ? () => {} : (bb.onmessage = bb => {
        yb.readPlayerPack((0, cb.f)(bb.data))
      }, () => {
        bb.close()
      })
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);