export const id = 227;
export const ids = [227];
export const modules = {
  37701: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      capturePreviewPicture: () => bd,
      holdPreviewsLow: () => Xd.d,
      openLiveFigure: () => yd,
      rasterNametag: () => gd
    });
    var Wd = md(1300),
      Fd = md(3597),
      Rd = md(35582),
      Xd = md(37709),
      Kd = md(37713),
      hd = md(37722),
      vd = md(37829),
      Qd = md(4685);
    const td = 480,
      od = 16,
      Nd = {
        minGapMs: 250,
        now: () => performance.now(),
        skip: Xd.s
      },
      qd = 30,
      Hd = 1e4;

    function yd(dd, Od, md, hd) {
      const vd = Rd.i.openCharacter(dd, "player");
      let Qd = !1,
        td = !1,
        qd = null;
      const yd = async () => {
        const dd = vd.dev.canvas(),
          Od = await (Wd = () => dd.isConnected && function(dd) {
            const {
              x: Od,
              width: md
            } = Td(dd);
            if (0 === md || 0 === dd.height) return !1;
            if (pd ??= document.createElement("canvas").getContext("2d", {
                willReadFrequently: !0
              }), null === pd) return !1;
            const Wd = pd.canvas;
            Wd.height = Math.min(dd.height, od), Wd.width = Math.max(1, Math.round(md * Wd.height / dd.height));
            const Fd = pd;
            return Fd.imageSmoothingQuality = "high", Fd.drawImage(dd, Od, 0, md, dd.height, 0, 0, Wd.width, Wd.height), Yd(Fd.getImageData(0, 0, Wd.width, Wd.height).data)
          }(dd), Fd = Xd.c, Rd = () => !Qd && vd.isReady(), Kd = Nd, new Promise((dd => {
            let Od = Number.NEGATIVE_INFINITY;
            const md = () => {
              Fd((() => {
                try {
                  if (!Rd()) return void dd(!1);
                  if (Kd.skip()) return void dd(!0);
                  const Fd = Kd.now();
                  if (Fd - Od >= Kd.minGapMs && (Od = Fd, Wd())) return void dd(!0);
                  md()
                } catch (Fd) {
                  console.warn("[loading-character] couldn't read a figure's frame", Fd), dd(!1)
                }
              }))
            };
            md()
          })));
        var Wd, Fd, Rd, Kd;
        return !Od || Qd || td || (td = !0, md(!0)), Od
      };
      return vd.ready.then((() => {
        if (Qd) return !1;
        for (const Xd of Wd.s) {
          var dd;
          vd.setCosmetic(Xd, null !== (dd = Od.cosmetics[Xd]) && void 0 !== dd ? dd : (0, Fd.b)(Xd))
        }
        const md = Promise.all(Wd.s.map((dd => vd.untilDrawn(dd)))).then((() => !0)),
          Rd = new Promise((dd => {
            setTimeout((() => {
              (0, Xd.c)((() => {
                dd(!1)
              }))
            }), Hd)
          }));
        return Promise.race([md, Rd])
      })).then((async dd => {
        if (!Qd && vd.isReady() && await yd() && dd) return bd(vd.dev.canvas(), (() => !Qd && vd.isReady())).then((dd => {
          null === dd || Qd || hd(dd)
        }))
      })).catch((dd => {
        console.warn("[loading-character] a figure couldn't draw", dd)
      })), {
        resize: (dd, Od) => {
          const Wd = (0, Kd.c)(dd, Od, window.devicePixelRatio),
            Fd = null !== qd && (qd[0] !== Wd[0] || qd[1] !== Wd[1]);
          qd = Wd, vd.resize(dd, Od), Fd && td && (td = !1, md(!1), yd())
        },
        close: () => {
          Qd = !0, vd.close()
        }
      }
    }

    function bd(dd, Od) {
      return new Promise((md => {
        const Wd = Fd => {
          (0, Xd.c)((() => {
            if (!Od()) return void md(null);
            const Rd = dd.isConnected ? function(dd) {
              let {
                canvas: Od,
                x: md,
                width: Wd
              } = dd;
              if (0 === Wd || 0 === Od.height) return null;
              const Fd = Math.min(1, td / Od.height),
                Rd = document.createElement("canvas");
              Rd.width = Math.max(1, Math.round(Wd * Fd)), Rd.height = Math.max(1, Math.round(Od.height * Fd));
              const Xd = Rd.getContext("2d", {
                willReadFrequently: !0
              });
              if (!Xd) return null;
              if (Xd.drawImage(Od, md, 0, Wd, Od.height, 0, 0, Rd.width, Rd.height), !Yd(Xd.getImageData(0, 0, Rd.width, Rd.height).data)) return null;
              return Rd.toDataURL("image/webp", .85)
            }(Td(dd)) : null;
            null !== Rd || Fd <= 1 || !dd.isConnected ? md(Rd) : Wd(Fd - 1)
          }))
        };
        Wd(qd)
      }))
    }

    function Td(dd) {
      const Od = Math.min(dd.width, Math.round(dd.height * Qd.d));
      return {
        canvas: dd,
        x: Math.round((dd.width - Od) / 2),
        width: Od
      }
    }
    let pd = null;

    function Yd(dd) {
      for (let Od = 3; Od < dd.length; Od += 4)
        if (0 !== dd[Od]) return !0;
      return !1
    }
    async function gd(dd) {
      var Od;
      await vd.j.load();
      const md = {
          name: dd.name,
          info: null,
          colour: null !== (Od = dd.nameColour) && void 0 !== Od ? Od : "default",
          ranks: dd.ranks,
          effects: [],
          health: null,
          UX: null,
          hideNameSeed: null,
          player: !dd.isYou
        },
        Wd = document.createElement("canvas"),
        [Fd, Rd] = (0, hd.g)((0, hd.i)(hd.e.Nametag, md), Wd, !0);
      return 0 === Fd || 0 === Rd ? null : {
        src: Wd.toDataURL("image/png"),
        width: Fd,
        height: Rd
      }
    }
  },
  35587: (dd, Od, md) => {
    md.d(Od, {
      c: () => Kd,
      g: () => Fd,
      j: () => td
    });
    var Wd = md(1685);

    function Fd(dd) {
      var Od;
      return {
        ...Kd.store,
        yaw: Kd.store.yaw + (null !== (Od = Wd.b[dd].previewYaw) && void 0 !== Od ? Od : 0)
      }
    }
    const Rd = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      Xd = {
        ...Rd,
        radius: 33,
        target: [0, 3.9, 0]
      },
      Kd = {
        player: Rd,
        store: Xd,
        showcase: {
          ...Xd,
          target: [0, 1.9, 0]
        }
      };

    function hd(dd, Od) {
      dd instanceof Promise ? dd.then(Od).catch((dd => {
        console.error("Couldn't open the preview", dd)
      })) : Od(dd)
    }
    class vd {
      constructor(dd) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, hd(dd, (dd => {
          this.closed ? dd.close() : (this.opened = dd, null !== this.size && dd.resize(this.size.width, this.size.height), null !== this.view && dd.show(this.view))
        }))
      }
      show(dd) {
        var Od;
        this.view = dd, null === (Od = this.opened) || void 0 === Od || Od.show(dd)
      }
      resize(dd, Od) {
        var md;
        this.size = {
          width: dd,
          height: Od
        }, null === (md = this.opened) || void 0 === md || md.resize(dd, Od)
      }
      close() {
        var dd;
        this.closed = !0, null === (dd = this.opened) || void 0 === dd || dd.close(), this.opened = null
      }
    }
    class Qd {
      constructor(dd) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(dd).then((dd => dd.ready)), hd(dd, (dd => {
          this.closed ? dd.close() : (this.opened = dd, null !== this.size && dd.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var dd, Od;
        return null !== (dd = null === (Od = this.opened) || void 0 === Od ? void 0 : Od.isReady()) && void 0 !== dd && dd
      }
      setCosmetic(dd, Od) {
        var md;
        null === (md = this.opened) || void 0 === md || md.setCosmetic(dd, Od)
      }
      setNametag(dd) {
        var Od;
        null === (Od = this.opened) || void 0 === Od || Od.setNametag(dd)
      }
      playEmote(dd) {
        var Od;
        null === (Od = this.opened) || void 0 === Od || Od.playEmote(dd)
      }
      setOrbit(dd) {
        var Od;
        null === (Od = this.opened) || void 0 === Od || Od.setOrbit(dd)
      }
      resetCamera() {
        var dd;
        null === (dd = this.opened) || void 0 === dd || dd.resetCamera()
      }
      async untilDrawn(dd) {
        var Od;
        await this.ready, await (null === (Od = this.opened) || void 0 === Od ? void 0 : Od.untilDrawn(dd))
      }
      resize(dd, Od) {
        var md;
        this.size = {
          width: dd,
          height: Od
        }, null === (md = this.opened) || void 0 === md || md.resize(dd, Od)
      }
      close() {
        var dd;
        this.closed = !0, null === (dd = this.opened) || void 0 === dd || dd.close(), this.opened = null
      }
    }
    const td = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(dd) {
        this.host = dd
      }
      setDefaultHost(dd) {
        this.makeDefault = dd
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(dd) {
        return new vd(this.current().openMob(dd))
      }
      openPet(dd) {
        return new vd(this.current().openPet(dd))
      }
      openMobLineup(dd) {
        return new vd(this.current().openMobLineup(dd))
      }
      sharesCharacter() {
        return !0 === this.current().sharesCharacter
      }
      openCharacter(dd, Od) {
        return new Qd(this.current().openCharacter(dd, Od))
      }
    }
  },
  35582: (dd, Od, md) => {
    md.d(Od, {
      c: () => Wd.c,
      g: () => Wd.g,
      i: () => Wd.j
    });
    var Wd = md(35587);
    class Fd {
      constructor(dd) {
        this.load = dd, this.loaded = null, this.loading = null
      }
      run(dd) {
        return null !== this.loaded ? dd(this.loaded) : (this.loading ??= this.load().then((dd => (this.loaded = dd, dd)), (dd => {
          throw this.loading = null, dd
        })), this.loading.then(dd))
      }
    }
    class Rd {
      constructor() {
        this.sharesCharacter = !0, this.mobScene = new Fd((() => Promise.all([md.e(85), md.e(265), md.e(264), md.e(290), md.e(113), md.e(291), md.e(89), md.e(86), md.e(288), md.e(87), md.e(88), md.e(298), md.e(292), md.e(297), md.e(295), md.e(287), md.e(312), md.e(261), md.e(279), md.e(293), md.e(296), md.e(91), md.e(253), md.e(267), md.e(112), md.e(124), md.e(258), md.e(142), md.e(90), md.e(122), md.e(311)]).then((() => md(43035))))), this.characterScene = new Fd((() => Promise.all([md.e(85), md.e(265), md.e(264), md.e(290), md.e(113), md.e(291), md.e(89), md.e(86), md.e(288), md.e(87), md.e(88), md.e(298), md.e(292), md.e(297), md.e(295), md.e(287), md.e(312), md.e(177), md.e(261), md.e(279), md.e(293), md.e(296), md.e(91), md.e(225), md.e(253), md.e(267), md.e(112), md.e(124), md.e(258), md.e(142), md.e(90), md.e(122), md.e(280), md.e(184)]).then((() => md(43148)))))
      }
      openMob(dd) {
        return this.mobScene.run((Od => Od.openMobPreview(dd)))
      }
      openPet(dd) {
        return this.mobScene.run((Od => Od.openPetPreview(dd)))
      }
      openMobLineup(dd) {
        return this.mobScene.run((Od => Od.openMobLineupPreview(dd)))
      }
      openCharacter(dd, Od) {
        return this.characterScene.run((md => md.openCharacterPreview(dd, Od)))
      }
    }
    Wd.j.setDefaultHost((() => new Rd))
  },
  37729: (dd, Od, md) => {
    function Wd(dd, Od, md) {
      if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(dd, Od).getContext("2d", md);
      const Wd = document.createElement("canvas");
      return Wd.width = dd, Wd.height = Od, Wd.getContext("2d", md)
    }

    function Fd(dd, Od) {
      return dd.getContext("2d", Od)
    }
    md.d(Od, {
      e: () => Fd,
      i: () => Wd
    })
  },
  37713: (dd, Od, md) => {
    md.d(Od, {
      c: () => Rd
    });
    const Wd = 4e5,
      Fd = 2;

    function Rd(dd, Od, md) {
      let [Rd, Xd] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [dd, Od], Kd = Math.min(Number.isFinite(md) && md > 0 ? md : 1, Fd);
      const hd = Math.max(0, Rd, dd) * Math.max(0, Xd, Od) * Kd * Kd;
      return hd > Wd && (Kd *= Math.sqrt(Wd / hd)), [Math.max(1, Math.floor(Math.max(0, dd) * Kd)), Math.max(1, Math.floor(Math.max(0, Od) * Kd))]
    }
  },
  37709: (dd, Od, md) => {
    md.d(Od, {
      c: () => yd,
      d: () => Qd,
      g: () => Nd,
      h: () => td,
      l: () => bd,
      p: () => qd,
      r: () => Hd,
      s: () => od
    });
    const Wd = 30,
      Fd = 4;
    let Rd = 0,
      Xd = !1,
      Kd = !1,
      hd = Number.NEGATIVE_INFINITY,
      vd = [];

    function Qd() {
      0 === Rd && (Xd = !1, Kd = !1), Rd++;
      let dd = !1;
      return () => {
        dd || (dd = !0, Rd--)
      }
    }

    function td(dd) {
      dd && (Kd = !0)
    }

    function od() {
      return Kd
    }

    function Nd(dd) {
      Xd = dd
    }

    function qd() {
      return Rd > 0
    }

    function Hd(dd) {
      return !(Rd > 0 && (Xd || dd - hd < 1e3 / Wd - Fd)) && (hd = dd, !0)
    }

    function yd(dd) {
      return vd.push(dd), () => {
        vd = vd.filter((Od => Od !== dd))
      }
    }

    function bd() {
      if (0 === vd.length) return;
      const dd = vd;
      vd = [];
      for (const md of dd) try {
        md()
      } catch (Od) {
        console.warn("[bloxd-previews] an after-draw callback threw", Od)
      }
    }
  },
  37851: (dd, Od, md) => {
    function Wd() {
      return md(37857)
    }

    function Fd() {
      return md(37866)
    }

    function Rd(dd) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(dd)
    }
    md.d(Od, {
      b: () => Rd,
      d: () => Wd,
      f: () => Fd
    })
  },
  37857: (dd, Od, md) => {
    dd.exports = md.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  37866: (dd, Od, md) => {
    dd.exports = md.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);