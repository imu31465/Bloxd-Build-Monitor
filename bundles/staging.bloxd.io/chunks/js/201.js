export const id = 201;
export const ids = [201];
export const modules = {
  34346: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => Am,
      g: () => am
    });
    var hm = fm(3251);

    function Am() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const mm = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const Tm = new BroadcastChannel(hm.h);
        Tm.postMessage({
          stored: mm
        }), Tm.close()
      } catch {
        return null
      }
      return mm
    }

    function am(mm) {
      const Tm = "object" === typeof mm && null !== mm ? mm.stored : null;
      return "string" === typeof Tm ? Tm : null
    }
  },
  34337: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => xm,
      e: () => Am,
      g: () => am
    });
    var hm = fm(3251);
    async function Am(mm, Tm, fm) {
      let Am = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const am = xm(await mm.getItem(hm.e, Tm));
      if (null === am || Am()) return null;
      const wm = await mm.getItem(hm.f, Tm);
      return Am() ? null : (await async function(mm) {
        await Promise.all([mm.removeItem(hm.e), mm.removeItem(hm.f)])
      }(mm).catch(fm), {
        pack: am,
        source: "string" === typeof wm ? wm : null
      })
    }

    function am(mm) {
      return (0, hm.n)() ? Promise.resolve(null) : Am(mm, !1, (mm => {
        console.error("Error removing temporary texture pack: ", mm)
      }), hm.n)
    }

    function xm(mm) {
      if ("object" !== typeof mm || null === mm) return null;
      const Tm = mm.metaData;
      return "object" !== typeof Tm || null === Tm || "string" !== typeof Tm.id ? null : mm
    }
  },
  50992: (mm, Tm, fm) => {
    function hm(mm) {
      return null === mm.gameSource ? "player" : "customGame"
    }
    fm.d(Tm, {
      d: () => am,
      g: () => Ym,
      i: () => Om,
      l: () => hm
    });
    const Am = /^data:[\w.+/-]*;base64,[A-Za-z0-9+/]*={0,2}$/;

    function am(mm) {
      return "" === mm || "string" === typeof mm && Am.test(mm)
    }

    function xm(mm) {
      return "object" === typeof mm && null !== mm && ("earth" === mm.type || Object.entries(mm).every((mm => {
        let [Tm, fm] = mm;
        return "type" === Tm || am(fm)
      })))
    }
    const wm = /(?:src|image|image-set|cross-fade)\(/i,
      Dm = /url\(\s*(?:"(?<doubleQuoted>[^"]*)"|'(?<singleQuoted>[^']*)'|(?<unquoted>[^"'()\s]*))\s*\)/gi,
      im = /url\(/gi,
      Rm = ["https://bloxd.invalid/", "http://bloxd.invalid/"],
      pm = new Set([...Rm.map((mm => new URL(mm).origin)), "https://fonts.gstatic.com"]),
      Em = new Set(["https://i.imgur.com/MEcjBFQ.png"]);

    function om(mm) {
      var Tm, fm;
      if (mm.includes("\\") || wm.test(mm)) return !0;
      const hm = [...mm.matchAll(Dm)];
      return hm.length !== (null !== (Tm = null === (fm = mm.match(im)) || void 0 === fm ? void 0 : fm.length) && void 0 !== Tm ? Tm : 0) || !hm.every((mm => {
        var Tm, fm, hm;
        let {
          groups: Am
        } = mm;
        return function(mm) {
          try {
            return Rm.every((Tm => {
              const fm = new URL(mm, Tm);
              return "data:" === fm.protocol || pm.has(fm.origin) || Em.has(fm.href)
            }))
          } catch {
            return !1
          }
        }(null !== (Tm = null !== (fm = null !== (hm = null === Am || void 0 === Am ? void 0 : Am.doubleQuoted) && void 0 !== hm ? hm : null === Am || void 0 === Am ? void 0 : Am.singleQuoted) && void 0 !== fm ? fm : null === Am || void 0 === Am ? void 0 : Am.unquoted) && void 0 !== Tm ? Tm : "")
      }))
    }

    function Om(mm) {
      var Tm, fm, hm, Am, wm, Dm, im;
      const Rm = [...Object.values(null !== (Tm = mm.textureOverrides) && void 0 !== Tm ? Tm : {}), ...Object.values(null !== (fm = mm.modelOverrides) && void 0 !== fm ? fm : {})],
        pm = [...Object.values(null !== (hm = null === (Am = mm.customCss) || void 0 === Am ? void 0 : Am.fontFaces) && void 0 !== hm ? hm : {}), ...Object.values(null !== (wm = null === (Dm = mm.customCss) || void 0 === Dm ? void 0 : Dm.classStyles) && void 0 !== wm ? wm : {})].flatMap((mm => Object.values(null !== mm && void 0 !== mm ? mm : {})));
      return !Rm.every(am) || !Object.values(null !== (im = mm.skyBoxes) && void 0 !== im ? im : {}).every(xm) || pm.some((mm => "string" === typeof mm && om(mm)))
    }

    function Ym(mm, Tm) {
      if (null === mm || "player" === Tm || !Om(mm)) return mm;
      const fm = {
        ...mm
      };
      return mm.textureOverrides && (fm.textureOverrides = jm(mm.textureOverrides, am, "texture")), mm.modelOverrides && (fm.modelOverrides = jm(mm.modelOverrides, am, "model")), mm.skyBoxes && (fm.skyBoxes = jm(mm.skyBoxes, xm, "sky")), mm.customCss && (fm.customCss = function(mm) {
        const Tm = mm => jm(mm, (mm => "string" === typeof mm && !om(mm)), "CSS"),
          {
            fontFaces: fm,
            classStyles: hm
          } = qm(mm) ? mm : {},
          Am = {};
        for (const [am, xm] of Object.entries(qm(hm) ? hm : {})) Am[am] = Tm(xm);
        return {
          fontFaces: (Array.isArray(fm) ? fm : []).map(Tm),
          classStyles: Am
        }
      }(mm.customCss)), fm
    }

    function qm(mm) {
      return "object" === typeof mm && null !== mm && !Array.isArray(mm)
    }

    function jm(mm, Tm, fm) {
      const hm = Object.entries(qm(mm) ? mm : {}),
        Am = hm.filter((mm => {
          let [, fm] = mm;
          return !Tm(fm)
        }));
      if (Am.length > 0) {
        const mm = Am.map((mm => {
          let [Tm] = mm;
          return Tm
        }));
        console.warn(`Ignoring a custom game texture pack's ${fm} files that name another site: ${mm.join(", ")}`)
      }
      return Object.fromEntries(hm.filter((mm => {
        let [, fm] = mm;
        return Tm(fm)
      })))
    }
  },
  51e3: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Om,
      d: () => Im,
      e: () => Vm
    });
    var hm = fm(1041),
      Am = fm(2123),
      am = fm(3238),
      xm = fm(3251),
      wm = fm(34346),
      Dm = fm(34337),
      im = fm(50992),
      Rm = fm(41060),
      pm = fm(41045),
      Em = fm(5004);
    const om = {
      pack: null,
      gameSource: null
    };
    class Om {
      constructor(mm) {
        this.host = mm, this.ready = void 0, this.state = om, this.playerPack = null, this.onGamePack = !1, this.confirmGamePack = null, this.skippedKey = null, this.ownAnnouncements = new Set, this.listeners = new Map, this.ownListeners = new Set, this.changes = 0, this.picks = 0, this.playerPicked = !1, this.ownChanges = 0, this.PO = !1, (0, xm.j)(), this.ready = this.readStored()
      }
      readyWithin(mm) {
        return Promise.race([this.ready, new Promise((Tm => {
          setTimeout(Tm, mm)
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
      onPlayerPackChange(mm) {
        return this.ownListeners.add(mm), () => {
          this.ownListeners.delete(mm)
        }
      }
      isUsingCustomGameTexturePack(mm) {
        return (0, pm.h)(this.state, mm)
      }
      setGamePackConfirm(mm) {
        this.confirmGamePack = mm
      }
      subscribe(mm) {
        return this.listeners.set(mm, null), this.ready.then((() => {
          this.deliver(mm)
        })), () => {
          this.listeners.delete(mm)
        }
      }
      async setPlayerPack(mm) {
        const Tm = qm(mm) ? null : mm;
        this.picks++, this.playerPicked = !0, this.ownChanges++, this.setOwn(Tm), this.change({
          pack: Tm,
          gameSource: null
        }, !1);
        const fm = await this.storePlayerPack(Tm);
        return fm && this.announce(), fm
      }
      async packForGame(mm, Tm, fm) {
        await this.readyWithin(Math.max(0, (null !== fm && void 0 !== fm ? fm : performance.now() + Rm.d) - performance.now()));
        const Am = ++this.picks,
          am = (0, hm.k)(mm) ? (0, hm.n)(mm) : null;
        if (null === am) return void this.usePlayerPack();
        let xm;
        const wm = function(mm) {
          let Tm;
          const fm = new Promise(((fm, hm) => {
            Tm = setTimeout((() => {
              hm(new Error(`no answer in ${mm} ms`))
            }), mm)
          }));
          return fm.catch((() => {})), {
            passed: fm,
            clear: () => {
              clearTimeout(Tm)
            }
          }
        }(2e4);
        try {
          const mm = await Promise.race([Tm.packKey(am), wm.passed]);
          if (null !== mm && this.onGamePack && this.state.gameSource === mm) return;
          if (null !== mm && mm === this.skippedKey) return void(this.PO || this.picks !== Am || this.usePlayerPack());
          xm = null === mm ? null : await Promise.race([Ym(am, mm, Tm), wm.passed])
        } catch (pm) {
          const mm = !this.PO && this.picks === Am && this.holdsOtherGamePack(am);
          return this.host.warn(`the texture pack of ${am} didn't load: ${mm?"the player's own shows":"the pack in play stays"}`, pm), void(mm && this.usePlayerPack())
        } finally {
          wm.clear()
        }
        if (this.PO || this.picks !== Am) return;
        null !== xm && (0, im.i)(xm.pack) && (this.host.warn(`the texture pack of ${am} names files on other sites: the player's own shows`, null), xm = null);
        const Dm = null === xm || await this.confirmed(xm.pack, am) ? null : xm.key;
        this.PO || this.picks !== Am || (null !== Dm && (this.skippedKey = Dm, xm = null), null === xm ? this.usePlayerPack() : (this.onGamePack = !0, this.change({
          pack: xm.pack,
          gameSource: xm.key
        }, !0)))
      }
      endGamePack() {
        this.picks++, this.usePlayerPack()
      }
      holdsOtherGamePack(mm) {
        return this.onGamePack && "" !== this.state.gameSource && !this.isUsingCustomGameTexturePack(mm)
      }
      async confirmed(mm, Tm) {
        const fm = this.confirmGamePack;
        if (null === fm) return !0;
        try {
          return await fm(mm, Tm)
        } catch (hm) {
          return this.host.warn(`the texture pack prompt of ${Tm} failed: the pack is skipped`, hm), !1
        }
      }
      async readPlayerPack() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (null !== mm && this.ownAnnouncements.delete(mm)) return;
        await this.ready;
        const Tm = this.ownChanges;
        let fm;
        try {
          fm = await this.host.store.getItem(xm.b, !0)
        } catch (Am) {
          return void this.host.warn("the stored texture pack didn't read again: the pack in play stays", Am)
        }
        if (this.PO || this.ownChanges !== Tm) return;
        const hm = jm(fm);
        (0, Em.e)(hm, this.playerPack) || (this.ownChanges++, this.setOwn(hm), this.onGamePack || this.change({
          pack: hm,
          gameSource: null
        }, !1))
      }
      joinedWithout() {
        this.picks++
      }
      dispose() {
        this.PO = !0, this.listeners.clear()
      }
      async readStored() {
        const {
          store: mm,
          warn: Tm
        } = this.host;
        await Promise.all([!1 === this.host.oneShot ? void 0 : (0, Dm.e)(mm, !0, (mm => {
          Tm("the custom game's texture pack wasn't removed from storage", mm)
        })).then((mm => {
          this.takeOneShot(mm)
        }), (mm => {
          Tm("the custom game's texture pack didn't read: the player's own shows", mm)
        })), mm.getItem(xm.b, !0).then((mm => {
          this.takeStoredOwn(mm)
        }), (mm => {
          Tm("the stored texture pack didn't read: the default pack shows", mm), this.takeStoredOwn(null)
        }))]), this.update()
      }
      takeOneShot(mm) {
        var Tm;
        null === mm || this.PO || this.changes > 0 || this.picks > 0 || ((0, im.i)(mm.pack) ? this.host.warn("the custom game's texture pack names files on other sites: the player's own shows", null) : (this.onGamePack = !0, this.state = {
          pack: mm.pack,
          gameSource: null !== (Tm = mm.source) && void 0 !== Tm ? Tm : ""
        }))
      }
      takeStoredOwn(mm) {
        if (this.playerPicked || this.PO) return;
        if (this.ownChanges++, this.setOwn(jm(mm)), this.onGamePack) return;
        const Tm = {
          pack: this.playerPack,
          gameSource: null
        };
        0 === this.changes ? this.state = Tm : this.change(Tm, !1)
      }
      async update() {
        const mm = this.playerPack,
          Tm = null === mm || void 0 === mm ? void 0 : mm.metaData.id;
        if (!mm || !Tm || !this.host.fetchLatest || Tm === Am.c || Tm === Am.l.CUSTOM) return;
        const fm = Am.m[Tm];
        if (void 0 === fm || mm.metaData.version >= fm) return;
        let hm;
        try {
          hm = jm(await this.host.fetchLatest(Tm))
        } catch (am) {
          return void this.host.warn(`texture pack ${Tm} didn't update to version ${fm}`, am)
        }
        null === hm || this.PO || this.playerPack !== mm || (this.ownChanges++, this.setOwn(hm), this.onGamePack || this.change({
          pack: hm,
          gameSource: null
        }, !1), await this.storePlayerPack(hm) && this.announce())
      }
      announce() {
        const mm = (0, wm.e)();
        null !== mm && this.ownAnnouncements.add(mm)
      }
      setOwn(mm) {
        this.playerPack = mm;
        for (const fm of [...this.ownListeners]) try {
          fm()
        } catch (Tm) {
          this.host.warn("a texture pack listener threw", Tm)
        }
      }
      usePlayerPack() {
        this.onGamePack && this.change({
          pack: this.playerPack,
          gameSource: null
        }, !1)
      }
      async storePlayerPack(mm) {
        try {
          return null === mm ? (await this.host.store.removeItem(xm.b), !0) : await this.host.store.setItem(xm.b, mm)
        } catch (Tm) {
          return this.host.warn("the texture pack wasn't stored: it shows until the page reloads", Tm), !1
        }
      }
      change(mm, Tm) {
        if (!this.PO) {
          this.changes++, this.onGamePack = Tm, this.state = mm;
          for (const mm of [...this.listeners.keys()]) this.deliver(mm)
        }
      }
      deliver(mm) {
        if (!this.PO && this.listeners.has(mm) && this.listeners.get(mm) !== this.state) {
          this.listeners.set(mm, this.state);
          try {
            mm(this.state)
          } catch (Tm) {
            this.host.warn("a texture pack listener threw", Tm)
          }
        }
      }
    }
    async function Ym(mm, Tm, fm) {
      const hm = (0, Dm.b)(await fm.fetchPack(Tm));
      if (null !== hm) return {
        pack: hm,
        key: Tm
      };
      const Am = await fm.packKey(mm);
      if (null === Am) return null;
      const am = (0, Dm.b)(await fm.fetchPack(Am));
      if (null === am) throw new Error(`no texture pack at ${Am}`);
      return {
        pack: am,
        key: Am
      }
    }

    function qm(mm) {
      return null === mm || mm.metaData.id === Am.c
    }

    function jm(mm) {
      const Tm = (0, Dm.b)(mm);
      return qm(Tm) ? null : Tm
    }
    async function Vm(mm) {
      let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : am.b;
      if (null === mm.pack) return null;
      const {
        packAssets: hm
      } = await Promise.all([fm.e(203), fm.e(44)]).then((() => fm(61569)));
      return hm(mm, Tm)
    }

    function Im(mm) {
      const Tm = (0, xm.q)();
      return null === Tm ? () => {} : (Tm.onmessage = Tm => {
        mm.readPlayerPack((0, wm.g)(Tm.data))
      }, () => {
        Tm.close()
      })
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);