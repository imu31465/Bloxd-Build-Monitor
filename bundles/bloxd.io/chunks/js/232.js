export const id = 232;
export const ids = [232];
export const modules = {
  35639: (dd, Od, md) => {
    md.d(Od, {
      b: () => Fd,
      c: () => Rd
    });
    var Wd = md(4470);

    function Fd() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const dd = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const Od = new BroadcastChannel(Wd.k);
        Od.postMessage({
          stored: dd
        }), Od.close()
      } catch {
        return null
      }
      return dd
    }

    function Rd(dd) {
      const Od = "object" === typeof dd && null !== dd ? dd.stored : null;
      return "string" === typeof Od ? Od : null
    }
  },
  35632: (dd, Od, md) => {
    md.d(Od, {
      c: () => Xd,
      e: () => Fd,
      f: () => Rd
    });
    var Wd = md(4470);
    async function Fd(dd, Od, md) {
      let Fd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const Rd = Xd(await dd.getItem(Wd.h, Od));
      if (null === Rd || Fd()) return null;
      const Kd = await dd.getItem(Wd.j, Od);
      return Fd() ? null : (await async function(dd) {
        await Promise.all([dd.removeItem(Wd.h), dd.removeItem(Wd.j)])
      }(dd).catch(md), {
        pack: Rd,
        source: "string" === typeof Kd ? Kd : null
      })
    }

    function Rd(dd) {
      return (0, Wd.p)() ? Promise.resolve(null) : Fd(dd, !1, (dd => {
        console.error("Error removing temporary texture pack: ", dd)
      }), Wd.p)
    }

    function Xd(dd) {
      if ("object" !== typeof dd || null === dd) return null;
      const Od = dd.metaData;
      return "object" !== typeof Od || null === Od || "string" !== typeof Od.id ? null : dd
    }
  },
  55093: (dd, Od, md) => {
    function Wd(dd) {
      return null === dd.gameSource ? "player" : "customGame"
    }
    md.d(Od, {
      e: () => Rd,
      g: () => Hd,
      h: () => qd,
      i: () => Wd
    });
    const Fd = /^data:[\w.+/-]*;base64,[A-Za-z0-9+/]*={0,2}$/;

    function Rd(dd) {
      return "" === dd || "string" === typeof dd && Fd.test(dd)
    }

    function Xd(dd) {
      return "object" === typeof dd && null !== dd && ("earth" === dd.type || Object.entries(dd).every((dd => {
        let [Od, md] = dd;
        return "type" === Od || Rd(md)
      })))
    }
    const Kd = /(?:src|image|image-set|cross-fade)\(/i,
      hd = /url\(\s*(?:"(?<doubleQuoted>[^"]*)"|'(?<singleQuoted>[^']*)'|(?<unquoted>[^"'()\s]*))\s*\)/gi,
      vd = /url\(/gi,
      Qd = ["https://bloxd.invalid/", "http://bloxd.invalid/"],
      td = new Set([...Qd.map((dd => new URL(dd).origin)), "https://fonts.gstatic.com"]),
      od = new Set(["https://i.imgur.com/MEcjBFQ.png"]);

    function Nd(dd) {
      var Od, md;
      if (dd.includes("\\") || Kd.test(dd)) return !0;
      const Wd = [...dd.matchAll(hd)];
      return Wd.length !== (null !== (Od = null === (md = dd.match(vd)) || void 0 === md ? void 0 : md.length) && void 0 !== Od ? Od : 0) || !Wd.every((dd => {
        var Od, md, Wd;
        let {
          groups: Fd
        } = dd;
        return function(dd) {
          try {
            return Qd.every((Od => {
              const md = new URL(dd, Od);
              return "data:" === md.protocol || td.has(md.origin) || od.has(md.href)
            }))
          } catch {
            return !1
          }
        }(null !== (Od = null !== (md = null !== (Wd = null === Fd || void 0 === Fd ? void 0 : Fd.doubleQuoted) && void 0 !== Wd ? Wd : null === Fd || void 0 === Fd ? void 0 : Fd.singleQuoted) && void 0 !== md ? md : null === Fd || void 0 === Fd ? void 0 : Fd.unquoted) && void 0 !== Od ? Od : "")
      }))
    }

    function qd(dd) {
      var Od, md, Wd, Fd, Kd, hd, vd;
      const Qd = [...Object.values(null !== (Od = dd.textureOverrides) && void 0 !== Od ? Od : {}), ...Object.values(null !== (md = dd.modelOverrides) && void 0 !== md ? md : {})],
        td = [...Object.values(null !== (Wd = null === (Fd = dd.customCss) || void 0 === Fd ? void 0 : Fd.fontFaces) && void 0 !== Wd ? Wd : {}), ...Object.values(null !== (Kd = null === (hd = dd.customCss) || void 0 === hd ? void 0 : hd.classStyles) && void 0 !== Kd ? Kd : {})].flatMap((dd => Object.values(null !== dd && void 0 !== dd ? dd : {})));
      return !Qd.every(Rd) || !Object.values(null !== (vd = dd.skyBoxes) && void 0 !== vd ? vd : {}).every(Xd) || td.some((dd => "string" === typeof dd && Nd(dd)))
    }

    function Hd(dd, Od) {
      if (null === dd || "player" === Od || !qd(dd)) return dd;
      const md = {
        ...dd
      };
      return dd.textureOverrides && (md.textureOverrides = bd(dd.textureOverrides, Rd, "texture")), dd.modelOverrides && (md.modelOverrides = bd(dd.modelOverrides, Rd, "model")), dd.skyBoxes && (md.skyBoxes = bd(dd.skyBoxes, Xd, "sky")), dd.customCss && (md.customCss = function(dd) {
        const Od = dd => bd(dd, (dd => "string" === typeof dd && !Nd(dd)), "CSS"),
          {
            fontFaces: md,
            classStyles: Wd
          } = yd(dd) ? dd : {},
          Fd = {};
        for (const [Rd, Xd] of Object.entries(yd(Wd) ? Wd : {})) Fd[Rd] = Od(Xd);
        return {
          fontFaces: (Array.isArray(md) ? md : []).map(Od),
          classStyles: Fd
        }
      }(dd.customCss)), md
    }

    function yd(dd) {
      return "object" === typeof dd && null !== dd && !Array.isArray(dd)
    }

    function bd(dd, Od, md) {
      const Wd = Object.entries(yd(dd) ? dd : {}),
        Fd = Wd.filter((dd => {
          let [, md] = dd;
          return !Od(md)
        }));
      if (Fd.length > 0) {
        const dd = Fd.map((dd => {
          let [Od] = dd;
          return Od
        }));
        console.warn(`Ignoring a custom game texture pack's ${md} files that name another site: ${dd.join(", ")}`)
      }
      return Object.fromEntries(Wd.filter((dd => {
        let [, md] = dd;
        return Od(md)
      })))
    }
  },
  55102: (dd, Od, md) => {
    md.d(Od, {
      d: () => qd,
      g: () => pd,
      j: () => Td
    });
    var Wd = md(1122),
      Fd = md(2337),
      Rd = md(4458),
      Xd = md(4470),
      Kd = md(35639),
      hd = md(35632),
      vd = md(55093),
      Qd = md(42963),
      td = md(42952),
      od = md(5975);
    const Nd = {
      pack: null,
      gameSource: null
    };
    class qd {
      constructor(dd) {
        this.host = dd, this.ready = void 0, this.state = Nd, this.playerPack = null, this.onGamePack = !1, this.confirmGamePack = null, this.skippedKey = null, this.ownAnnouncements = new Set, this.listeners = new Map, this.ownListeners = new Set, this.changes = 0, this.picks = 0, this.playerPicked = !1, this.ownChanges = 0, this.Aq = !1, (0, Xd.m)(), this.ready = this.readStored()
      }
      readyWithin(dd) {
        return Promise.race([this.ready, new Promise((Od => {
          setTimeout(Od, dd)
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
      onPlayerPackChange(dd) {
        return this.ownListeners.add(dd), () => {
          this.ownListeners.delete(dd)
        }
      }
      isUsingCustomGameTexturePack(dd) {
        return (0, td.c)(this.state, dd)
      }
      setGamePackConfirm(dd) {
        this.confirmGamePack = dd
      }
      subscribe(dd) {
        return this.listeners.set(dd, null), this.ready.then((() => {
          this.deliver(dd)
        })), () => {
          this.listeners.delete(dd)
        }
      }
      async setPlayerPack(dd) {
        const Od = yd(dd) ? null : dd;
        this.picks++, this.playerPicked = !0, this.ownChanges++, this.setOwn(Od), this.change({
          pack: Od,
          gameSource: null
        }, !1);
        const md = await this.storePlayerPack(Od);
        return md && this.announce(), md
      }
      async packForGame(dd, Od, md) {
        await this.readyWithin(Math.max(0, (null !== md && void 0 !== md ? md : performance.now() + Qd.b) - performance.now()));
        const Fd = ++this.picks,
          Rd = (0, Wd.k)(dd) ? (0, Wd.p)(dd) : null;
        if (null === Rd) return void this.usePlayerPack();
        let Xd;
        const Kd = function(dd) {
          let Od;
          const md = new Promise(((md, Wd) => {
            Od = setTimeout((() => {
              Wd(new Error(`no answer in ${dd} ms`))
            }), dd)
          }));
          return md.catch((() => {})), {
            passed: md,
            clear: () => {
              clearTimeout(Od)
            }
          }
        }(2e4);
        try {
          const dd = await Promise.race([Od.packKey(Rd), Kd.passed]);
          if (null !== dd && this.onGamePack && this.state.gameSource === dd) return;
          if (null !== dd && dd === this.skippedKey) return void(this.Aq || this.picks !== Fd || this.usePlayerPack());
          Xd = null === dd ? null : await Promise.race([Hd(Rd, dd, Od), Kd.passed])
        } catch (td) {
          const dd = !this.Aq && this.picks === Fd && this.holdsOtherGamePack(Rd);
          return this.host.warn(`the texture pack of ${Rd} didn't load: ${dd?"the player's own shows":"the pack in play stays"}`, td), void(dd && this.usePlayerPack())
        } finally {
          Kd.clear()
        }
        if (this.Aq || this.picks !== Fd) return;
        null !== Xd && (0, vd.h)(Xd.pack) && (this.host.warn(`the texture pack of ${Rd} names files on other sites: the player's own shows`, null), Xd = null);
        const hd = null === Xd || await this.confirmed(Xd.pack, Rd) ? null : Xd.key;
        this.Aq || this.picks !== Fd || (null !== hd && (this.skippedKey = hd, Xd = null), null === Xd ? this.usePlayerPack() : (this.onGamePack = !0, this.change({
          pack: Xd.pack,
          gameSource: Xd.key
        }, !0)))
      }
      endGamePack() {
        this.picks++, this.usePlayerPack()
      }
      holdsOtherGamePack(dd) {
        return this.onGamePack && "" !== this.state.gameSource && !this.isUsingCustomGameTexturePack(dd)
      }
      async confirmed(dd, Od) {
        const md = this.confirmGamePack;
        if (null === md) return !0;
        try {
          return await md(dd, Od)
        } catch (Wd) {
          return this.host.warn(`the texture pack prompt of ${Od} failed: the pack is skipped`, Wd), !1
        }
      }
      async readPlayerPack() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (null !== dd && this.ownAnnouncements.delete(dd)) return;
        await this.ready;
        const Od = this.ownChanges;
        let md;
        try {
          md = await this.host.store.getItem(Xd.d, !0)
        } catch (Fd) {
          return void this.host.warn("the stored texture pack didn't read again: the pack in play stays", Fd)
        }
        if (this.Aq || this.ownChanges !== Od) return;
        const Wd = bd(md);
        (0, od.c)(Wd, this.playerPack) || (this.ownChanges++, this.setOwn(Wd), this.onGamePack || this.change({
          pack: Wd,
          gameSource: null
        }, !1))
      }
      joinedWithout() {
        this.picks++
      }
      dispose() {
        this.Aq = !0, this.listeners.clear()
      }
      async readStored() {
        const {
          store: dd,
          warn: Od
        } = this.host;
        await Promise.all([!1 === this.host.oneShot ? void 0 : (0, hd.e)(dd, !0, (dd => {
          Od("the custom game's texture pack wasn't removed from storage", dd)
        })).then((dd => {
          this.takeOneShot(dd)
        }), (dd => {
          Od("the custom game's texture pack didn't read: the player's own shows", dd)
        })), dd.getItem(Xd.d, !0).then((dd => {
          this.takeStoredOwn(dd)
        }), (dd => {
          Od("the stored texture pack didn't read: the default pack shows", dd), this.takeStoredOwn(null)
        }))]), this.update()
      }
      takeOneShot(dd) {
        var Od;
        null === dd || this.Aq || this.changes > 0 || this.picks > 0 || ((0, vd.h)(dd.pack) ? this.host.warn("the custom game's texture pack names files on other sites: the player's own shows", null) : (this.onGamePack = !0, this.state = {
          pack: dd.pack,
          gameSource: null !== (Od = dd.source) && void 0 !== Od ? Od : ""
        }))
      }
      takeStoredOwn(dd) {
        if (this.playerPicked || this.Aq) return;
        if (this.ownChanges++, this.setOwn(bd(dd)), this.onGamePack) return;
        const Od = {
          pack: this.playerPack,
          gameSource: null
        };
        0 === this.changes ? this.state = Od : this.change(Od, !1)
      }
      async update() {
        const dd = this.playerPack,
          Od = null === dd || void 0 === dd ? void 0 : dd.metaData.id;
        if (!dd || !Od || !this.host.fetchLatest || Od === Fd.d || Od === Fd.n.CUSTOM) return;
        const md = Fd.r[Od];
        if (void 0 === md || dd.metaData.version >= md) return;
        let Wd;
        try {
          Wd = bd(await this.host.fetchLatest(Od))
        } catch (Rd) {
          return void this.host.warn(`texture pack ${Od} didn't update to version ${md}`, Rd)
        }
        null === Wd || this.Aq || this.playerPack !== dd || (this.ownChanges++, this.setOwn(Wd), this.onGamePack || this.change({
          pack: Wd,
          gameSource: null
        }, !1), await this.storePlayerPack(Wd) && this.announce())
      }
      announce() {
        const dd = (0, Kd.b)();
        null !== dd && this.ownAnnouncements.add(dd)
      }
      setOwn(dd) {
        this.playerPack = dd;
        for (const md of [...this.ownListeners]) try {
          md()
        } catch (Od) {
          this.host.warn("a texture pack listener threw", Od)
        }
      }
      usePlayerPack() {
        this.onGamePack && this.change({
          pack: this.playerPack,
          gameSource: null
        }, !1)
      }
      async storePlayerPack(dd) {
        try {
          return null === dd ? (await this.host.store.removeItem(Xd.d), !0) : await this.host.store.setItem(Xd.d, dd)
        } catch (Od) {
          return this.host.warn("the texture pack wasn't stored: it shows until the page reloads", Od), !1
        }
      }
      change(dd, Od) {
        if (!this.Aq) {
          this.changes++, this.onGamePack = Od, this.state = dd;
          for (const dd of [...this.listeners.keys()]) this.deliver(dd)
        }
      }
      deliver(dd) {
        if (!this.Aq && this.listeners.has(dd) && this.listeners.get(dd) !== this.state) {
          this.listeners.set(dd, this.state);
          try {
            dd(this.state)
          } catch (Od) {
            this.host.warn("a texture pack listener threw", Od)
          }
        }
      }
    }
    async function Hd(dd, Od, md) {
      const Wd = (0, hd.c)(await md.fetchPack(Od));
      if (null !== Wd) return {
        pack: Wd,
        key: Od
      };
      const Fd = await md.packKey(dd);
      if (null === Fd) return null;
      const Rd = (0, hd.c)(await md.fetchPack(Fd));
      if (null === Rd) throw new Error(`no texture pack at ${Fd}`);
      return {
        pack: Rd,
        key: Fd
      }
    }

    function yd(dd) {
      return null === dd || dd.metaData.id === Fd.d
    }

    function bd(dd) {
      const Od = (0, hd.c)(dd);
      return yd(Od) ? null : Od
    }
    async function Td(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Rd.c;
      if (null === dd.pack) return null;
      const {
        packAssets: Wd
      } = await Promise.all([md.e(234), md.e(53)]).then((() => md(64983)));
      return Wd(dd, Od)
    }

    function pd(dd) {
      const Od = (0, Xd.t)();
      return null === Od ? () => {} : (Od.onmessage = Od => {
        dd.readPlayerPack((0, Kd.c)(Od.data))
      }, () => {
        Od.close()
      })
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);