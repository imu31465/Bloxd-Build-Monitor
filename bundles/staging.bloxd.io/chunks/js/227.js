export const id = 227;
export const ids = [227];
export const modules = {
  37583: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      capturePreviewPicture: () => zr,
      holdPreviewsLow: () => jr.d,
      openLiveFigure: () => hr,
      rasterNametag: () => Kr
    });
    var Zr = Qr(1287),
      Wr = Qr(3601),
      ar = Qr(35505),
      jr = Qr(37587),
      Ir = Qr(37596),
      fr = Qr(37604),
      Er = Qr(37718),
      pr = Qr(4704);
    const xr = 480,
      mr = 16,
      Nr = {
        minGapMs: 250,
        now: () => performance.now(),
        skip: jr.s
      },
      Ur = 30,
      tr = 1e4;

    function hr(rr, Sr, Qr, fr) {
      const Er = ar.j.openCharacter(rr, "player");
      let pr = !1,
        xr = !1,
        Ur = null;
      const hr = async () => {
        const rr = Er.dev.canvas(),
          Sr = await (Zr = () => rr.isConnected && function(rr) {
            const {
              x: Sr,
              width: Qr
            } = Yr(rr);
            if (0 === Qr || 0 === rr.height) return !1;
            if (nr ??= document.createElement("canvas").getContext("2d", {
                willReadFrequently: !0
              }), null === nr) return !1;
            const Zr = nr.canvas;
            Zr.height = Math.min(rr.height, mr), Zr.width = Math.max(1, Math.round(Qr * Zr.height / rr.height));
            const Wr = nr;
            return Wr.imageSmoothingQuality = "high", Wr.drawImage(rr, Sr, 0, Qr, rr.height, 0, 0, Zr.width, Zr.height), er(Wr.getImageData(0, 0, Zr.width, Zr.height).data)
          }(rr), Wr = jr.b, ar = () => !pr && Er.isReady(), Ir = Nr, new Promise((rr => {
            let Sr = Number.NEGATIVE_INFINITY;
            const Qr = () => {
              Wr((() => {
                try {
                  if (!ar()) return void rr(!1);
                  if (Ir.skip()) return void rr(!0);
                  const Wr = Ir.now();
                  if (Wr - Sr >= Ir.minGapMs && (Sr = Wr, Zr())) return void rr(!0);
                  Qr()
                } catch (Wr) {
                  console.warn("[loading-character] couldn't read a figure's frame", Wr), rr(!1)
                }
              }))
            };
            Qr()
          })));
        var Zr, Wr, ar, Ir;
        return !Sr || pr || xr || (xr = !0, Qr(!0)), Sr
      };
      return Er.ready.then((() => {
        if (pr) return !1;
        for (const jr of Zr.A) {
          var rr;
          Er.setCosmetic(jr, null !== (rr = Sr.cosmetics[jr]) && void 0 !== rr ? rr : (0, Wr.b)(jr))
        }
        const Qr = Promise.all(Zr.A.map((rr => Er.untilDrawn(rr)))).then((() => !0)),
          ar = new Promise((rr => {
            setTimeout((() => {
              (0, jr.b)((() => {
                rr(!1)
              }))
            }), tr)
          }));
        return Promise.race([Qr, ar])
      })).then((async rr => {
        if (!pr && Er.isReady() && await hr() && rr) return zr(Er.dev.canvas(), (() => !pr && Er.isReady())).then((rr => {
          null === rr || pr || fr(rr)
        }))
      })).catch((rr => {
        console.warn("[loading-character] a figure couldn't draw", rr)
      })), {
        resize: (rr, Sr) => {
          const Zr = (0, Ir.d)(rr, Sr, window.devicePixelRatio),
            Wr = null !== Ur && (Ur[0] !== Zr[0] || Ur[1] !== Zr[1]);
          Ur = Zr, Er.resize(rr, Sr), Wr && xr && (xr = !1, Qr(!1), hr())
        },
        close: () => {
          pr = !0, Er.close()
        }
      }
    }

    function zr(rr, Sr) {
      return new Promise((Qr => {
        const Zr = Wr => {
          (0, jr.b)((() => {
            if (!Sr()) return void Qr(null);
            const ar = rr.isConnected ? function(rr) {
              let {
                canvas: Sr,
                x: Qr,
                width: Zr
              } = rr;
              if (0 === Zr || 0 === Sr.height) return null;
              const Wr = Math.min(1, xr / Sr.height),
                ar = document.createElement("canvas");
              ar.width = Math.max(1, Math.round(Zr * Wr)), ar.height = Math.max(1, Math.round(Sr.height * Wr));
              const jr = ar.getContext("2d", {
                willReadFrequently: !0
              });
              if (!jr) return null;
              if (jr.drawImage(Sr, Qr, 0, Zr, Sr.height, 0, 0, ar.width, ar.height), !er(jr.getImageData(0, 0, ar.width, ar.height).data)) return null;
              return ar.toDataURL("image/webp", .85)
            }(Yr(rr)) : null;
            null !== ar || Wr <= 1 || !rr.isConnected ? Qr(ar) : Zr(Wr - 1)
          }))
        };
        Zr(Ur)
      }))
    }

    function Yr(rr) {
      const Sr = Math.min(rr.width, Math.round(rr.height * pr.b));
      return {
        canvas: rr,
        x: Math.round((rr.width - Sr) / 2),
        width: Sr
      }
    }
    let nr = null;

    function er(rr) {
      for (let Sr = 3; Sr < rr.length; Sr += 4)
        if (0 !== rr[Sr]) return !0;
      return !1
    }
    async function Kr(rr) {
      var Sr;
      await Er.i.load();
      const Qr = {
          name: rr.name,
          info: null,
          colour: null !== (Sr = rr.nameColour) && void 0 !== Sr ? Sr : "default",
          ranks: rr.ranks,
          effects: [],
          health: null,
          Oj: null,
          hideNameSeed: null,
          player: !rr.isYou
        },
        Zr = document.createElement("canvas"),
        [Wr, ar] = (0, fr.i)((0, fr.j)(fr.e.Nametag, Qr), Zr, !0);
      return 0 === Wr || 0 === ar ? null : {
        src: Zr.toDataURL("image/png"),
        width: Wr,
        height: ar
      }
    }
  },
  35509: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Ir,
      e: () => Wr,
      i: () => xr
    });
    var Zr = Qr(1686);

    function Wr(rr) {
      var Sr;
      return {
        ...Ir.store,
        yaw: Ir.store.yaw + (null !== (Sr = Zr.e[rr].previewYaw) && void 0 !== Sr ? Sr : 0)
      }
    }
    const ar = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      jr = {
        ...ar,
        radius: 33,
        target: [0, 3.9, 0]
      },
      Ir = {
        player: ar,
        store: jr,
        showcase: {
          ...jr,
          target: [0, 1.9, 0]
        }
      };

    function fr(rr, Sr) {
      rr instanceof Promise ? rr.then(Sr).catch((rr => {
        console.error("Couldn't open the preview", rr)
      })) : Sr(rr)
    }
    class Er {
      constructor(rr) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, fr(rr, (rr => {
          this.closed ? rr.close() : (this.opened = rr, null !== this.size && rr.resize(this.size.width, this.size.height), null !== this.view && rr.show(this.view))
        }))
      }
      show(rr) {
        var Sr;
        this.view = rr, null === (Sr = this.opened) || void 0 === Sr || Sr.show(rr)
      }
      resize(rr, Sr) {
        var Qr;
        this.size = {
          width: rr,
          height: Sr
        }, null === (Qr = this.opened) || void 0 === Qr || Qr.resize(rr, Sr)
      }
      close() {
        var rr;
        this.closed = !0, null === (rr = this.opened) || void 0 === rr || rr.close(), this.opened = null
      }
    }
    class pr {
      constructor(rr) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(rr).then((rr => rr.ready)), fr(rr, (rr => {
          this.closed ? rr.close() : (this.opened = rr, null !== this.size && rr.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var rr, Sr;
        return null !== (rr = null === (Sr = this.opened) || void 0 === Sr ? void 0 : Sr.isReady()) && void 0 !== rr && rr
      }
      setCosmetic(rr, Sr) {
        var Qr;
        null === (Qr = this.opened) || void 0 === Qr || Qr.setCosmetic(rr, Sr)
      }
      setNametag(rr) {
        var Sr;
        null === (Sr = this.opened) || void 0 === Sr || Sr.setNametag(rr)
      }
      playEmote(rr) {
        var Sr;
        null === (Sr = this.opened) || void 0 === Sr || Sr.playEmote(rr)
      }
      setOrbit(rr) {
        var Sr;
        null === (Sr = this.opened) || void 0 === Sr || Sr.setOrbit(rr)
      }
      resetCamera() {
        var rr;
        null === (rr = this.opened) || void 0 === rr || rr.resetCamera()
      }
      async untilDrawn(rr) {
        var Sr;
        await this.ready, await (null === (Sr = this.opened) || void 0 === Sr ? void 0 : Sr.untilDrawn(rr))
      }
      resize(rr, Sr) {
        var Qr;
        this.size = {
          width: rr,
          height: Sr
        }, null === (Qr = this.opened) || void 0 === Qr || Qr.resize(rr, Sr)
      }
      close() {
        var rr;
        this.closed = !0, null === (rr = this.opened) || void 0 === rr || rr.close(), this.opened = null
      }
    }
    const xr = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(rr) {
        this.host = rr
      }
      setDefaultHost(rr) {
        this.makeDefault = rr
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(rr) {
        return new Er(this.current().openMob(rr))
      }
      openPet(rr) {
        return new Er(this.current().openPet(rr))
      }
      openMobLineup(rr) {
        return new Er(this.current().openMobLineup(rr))
      }
      sharesCharacter() {
        return !0 === this.current().sharesCharacter
      }
      openCharacter(rr, Sr) {
        return new pr(this.current().openCharacter(rr, Sr))
      }
    }
  },
  35505: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Zr.d,
      f: () => Zr.e,
      j: () => Zr.i
    });
    var Zr = Qr(35509);
    class Wr {
      constructor(rr) {
        this.load = rr, this.loaded = null, this.loading = null
      }
      run(rr) {
        return null !== this.loaded ? rr(this.loaded) : (this.loading ??= this.load().then((rr => (this.loaded = rr, rr)), (rr => {
          throw this.loading = null, rr
        })), this.loading.then(rr))
      }
    }
    class ar {
      constructor() {
        this.sharesCharacter = !0, this.mobScene = new Wr((() => Promise.all([Qr.e(85), Qr.e(265), Qr.e(264), Qr.e(290), Qr.e(113), Qr.e(291), Qr.e(89), Qr.e(86), Qr.e(288), Qr.e(87), Qr.e(88), Qr.e(298), Qr.e(292), Qr.e(297), Qr.e(295), Qr.e(287), Qr.e(312), Qr.e(261), Qr.e(279), Qr.e(293), Qr.e(296), Qr.e(91), Qr.e(253), Qr.e(267), Qr.e(112), Qr.e(124), Qr.e(258), Qr.e(142), Qr.e(90), Qr.e(122), Qr.e(311)]).then((() => Qr(42945))))), this.characterScene = new Wr((() => Promise.all([Qr.e(85), Qr.e(265), Qr.e(264), Qr.e(290), Qr.e(113), Qr.e(291), Qr.e(89), Qr.e(86), Qr.e(288), Qr.e(87), Qr.e(88), Qr.e(298), Qr.e(292), Qr.e(297), Qr.e(295), Qr.e(287), Qr.e(312), Qr.e(177), Qr.e(261), Qr.e(279), Qr.e(293), Qr.e(296), Qr.e(91), Qr.e(225), Qr.e(253), Qr.e(267), Qr.e(112), Qr.e(124), Qr.e(258), Qr.e(142), Qr.e(90), Qr.e(122), Qr.e(280), Qr.e(184)]).then((() => Qr(43048)))))
      }
      openMob(rr) {
        return this.mobScene.run((Sr => Sr.openMobPreview(rr)))
      }
      openPet(rr) {
        return this.mobScene.run((Sr => Sr.openPetPreview(rr)))
      }
      openMobLineup(rr) {
        return this.mobScene.run((Sr => Sr.openMobLineupPreview(rr)))
      }
      openCharacter(rr, Sr) {
        return this.characterScene.run((Qr => Qr.openCharacterPreview(rr, Sr)))
      }
    }
    Zr.i.setDefaultHost((() => new ar))
  },
  37613: (rr, Sr, Qr) => {
    function Zr(rr, Sr, Qr) {
      if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(rr, Sr).getContext("2d", Qr);
      const Zr = document.createElement("canvas");
      return Zr.width = rr, Zr.height = Sr, Zr.getContext("2d", Qr)
    }

    function Wr(rr, Sr) {
      return rr.getContext("2d", Sr)
    }
    Qr.d(Sr, {
      d: () => Wr,
      g: () => Zr
    })
  },
  37596: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => ar
    });
    const Zr = 4e5,
      Wr = 2;

    function ar(rr, Sr, Qr) {
      let [ar, jr] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [rr, Sr], Ir = Math.min(Number.isFinite(Qr) && Qr > 0 ? Qr : 1, Wr);
      const fr = Math.max(0, ar, rr) * Math.max(0, jr, Sr) * Ir * Ir;
      return fr > Zr && (Ir *= Math.sqrt(Zr / fr)), [Math.max(1, Math.floor(Math.max(0, rr) * Ir)), Math.max(1, Math.floor(Math.max(0, Sr) * Ir))]
    }
  },
  37587: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => hr,
      d: () => pr,
      f: () => Nr,
      i: () => xr,
      k: () => zr,
      l: () => Ur,
      p: () => tr,
      s: () => mr
    });
    const Zr = 30,
      Wr = 4;
    let ar = 0,
      jr = !1,
      Ir = !1,
      fr = Number.NEGATIVE_INFINITY,
      Er = [];

    function pr() {
      0 === ar && (jr = !1, Ir = !1), ar++;
      let rr = !1;
      return () => {
        rr || (rr = !0, ar--)
      }
    }

    function xr(rr) {
      rr && (Ir = !0)
    }

    function mr() {
      return Ir
    }

    function Nr(rr) {
      jr = rr
    }

    function Ur() {
      return ar > 0
    }

    function tr(rr) {
      return !(ar > 0 && (jr || rr - fr < 1e3 / Zr - Wr)) && (fr = rr, !0)
    }

    function hr(rr) {
      return Er.push(rr), () => {
        Er = Er.filter((Sr => Sr !== rr))
      }
    }

    function zr() {
      if (0 === Er.length) return;
      const rr = Er;
      Er = [];
      for (const Qr of rr) try {
        Qr()
      } catch (Sr) {
        console.warn("[bloxd-previews] an after-draw callback threw", Sr)
      }
    }
  },
  37748: (rr, Sr, Qr) => {
    function Zr() {
      return Qr(37757)
    }

    function Wr() {
      return Qr(37760)
    }

    function ar(rr) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(rr)
    }
    Qr.d(Sr, {
      b: () => ar,
      c: () => Zr,
      e: () => Wr
    })
  },
  37757: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  37760: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);