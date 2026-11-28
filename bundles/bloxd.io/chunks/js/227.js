export const id = 227;
export const ids = [227];
export const modules = {
  37444: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      capturePreviewPicture: () => Bb,
      holdPreviewsLow: () => Vb.g,
      openLiveFigure: () => Fb,
      rasterNametag: () => zb
    });
    var eb = Mb(1313),
      Hb = Mb(3724),
      pb = Mb(35366),
      Vb = Mb(37446),
      gb = Mb(37449),
      lb = Mb(37452),
      Lb = Mb(37528),
      Ib = Mb(4847);
    const Ob = 480,
      Ub = 16,
      tb = {
        minGapMs: 250,
        now: () => performance.now(),
        skip: Vb.v
      },
      Cb = 30,
      Eb = 1e4;

    function Fb(bb, wb, Mb, lb) {
      const Lb = pb.i.openCharacter(bb, "player");
      let Ib = !1,
        Ob = !1,
        Cb = null;
      const Fb = async () => {
        const bb = Lb.dev.canvas(),
          wb = await (eb = () => bb.isConnected && function(bb) {
            const {
              x: wb,
              width: Mb
            } = sb(bb);
            if (0 === Mb || 0 === bb.height) return !1;
            if (mb ??= document.createElement("canvas").getContext("2d", {
                willReadFrequently: !0
              }), null === mb) return !1;
            const eb = mb.canvas;
            eb.height = Math.min(bb.height, Ub), eb.width = Math.max(1, Math.round(Mb * eb.height / bb.height));
            const Hb = mb;
            return Hb.imageSmoothingQuality = "high", Hb.drawImage(bb, wb, 0, Mb, bb.height, 0, 0, eb.width, eb.height), hb(Hb.getImageData(0, 0, eb.width, eb.height).data)
          }(bb), Hb = Vb.e, pb = () => !Ib && Lb.isReady(), gb = tb, new Promise((bb => {
            let wb = Number.NEGATIVE_INFINITY;
            const Mb = () => {
              Hb((() => {
                try {
                  if (!pb()) return void bb(!1);
                  if (gb.skip()) return void bb(!0);
                  const Hb = gb.now();
                  if (Hb - wb >= gb.minGapMs && (wb = Hb, eb())) return void bb(!0);
                  Mb()
                } catch (Hb) {
                  console.warn("[loading-character] couldn't read a figure's frame", Hb), bb(!1)
                }
              }))
            };
            Mb()
          })));
        var eb, Hb, pb, gb;
        return !wb || Ib || Ob || (Ob = !0, Mb(!0)), wb
      };
      return Lb.ready.then((() => {
        if (Ib) return !1;
        for (const Vb of eb.u) {
          var bb;
          Lb.setCosmetic(Vb, null !== (bb = wb.cosmetics[Vb]) && void 0 !== bb ? bb : (0, Hb.b)(Vb))
        }
        const Mb = Promise.all(eb.u.map((bb => Lb.untilDrawn(bb)))).then((() => !0)),
          pb = new Promise((bb => {
            setTimeout((() => {
              (0, Vb.e)((() => {
                bb(!1)
              }))
            }), Eb)
          }));
        return Promise.race([Mb, pb])
      })).then((async bb => {
        if (!Ib && Lb.isReady() && await Fb() && bb) return Bb(Lb.dev.canvas(), (() => !Ib && Lb.isReady())).then((bb => {
          null === bb || Ib || lb(bb)
        }))
      })).catch((bb => {
        console.warn("[loading-character] a figure couldn't draw", bb)
      })), {
        resize: (bb, wb) => {
          const eb = (0, gb.b)(bb, wb, window.devicePixelRatio),
            Hb = null !== Cb && (Cb[0] !== eb[0] || Cb[1] !== eb[1]);
          Cb = eb, Lb.resize(bb, wb), Hb && Ob && (Ob = !1, Mb(!1), Fb())
        },
        close: () => {
          Ib = !0, Lb.close()
        }
      }
    }

    function Bb(bb, wb) {
      return new Promise((Mb => {
        const eb = Hb => {
          (0, Vb.e)((() => {
            if (!wb()) return void Mb(null);
            const pb = bb.isConnected ? function(bb) {
              let {
                canvas: wb,
                x: Mb,
                width: eb
              } = bb;
              if (0 === eb || 0 === wb.height) return null;
              const Hb = Math.min(1, Ob / wb.height),
                pb = document.createElement("canvas");
              pb.width = Math.max(1, Math.round(eb * Hb)), pb.height = Math.max(1, Math.round(wb.height * Hb));
              const Vb = pb.getContext("2d", {
                willReadFrequently: !0
              });
              if (!Vb) return null;
              if (Vb.drawImage(wb, Mb, 0, eb, wb.height, 0, 0, pb.width, pb.height), !hb(Vb.getImageData(0, 0, pb.width, pb.height).data)) return null;
              return pb.toDataURL("image/webp", .85)
            }(sb(bb)) : null;
            null !== pb || Hb <= 1 || !bb.isConnected ? Mb(pb) : eb(Hb - 1)
          }))
        };
        eb(Cb)
      }))
    }

    function sb(bb) {
      const wb = Math.min(bb.width, Math.round(bb.height * Ib.d));
      return {
        canvas: bb,
        x: Math.round((bb.width - wb) / 2),
        width: wb
      }
    }
    let mb = null;

    function hb(bb) {
      for (let wb = 3; wb < bb.length; wb += 4)
        if (0 !== bb[wb]) return !0;
      return !1
    }
    async function zb(bb) {
      var wb;
      await Lb.k.load();
      const Mb = {
          name: bb.name,
          info: null,
          colour: null !== (wb = bb.nameColour) && void 0 !== wb ? wb : "default",
          ranks: bb.ranks,
          effects: [],
          health: null,
          DV: null,
          hideNameSeed: null,
          player: !bb.isYou
        },
        eb = document.createElement("canvas"),
        [Hb, pb] = (0, lb.g)((0, lb.j)(lb.c.Nametag, Mb), eb, !0);
      return 0 === Hb || 0 === pb ? null : {
        src: eb.toDataURL("image/png"),
        width: Hb,
        height: pb
      }
    }
  },
  35370: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => gb,
      c: () => Hb,
      f: () => Ob
    });
    var eb = Mb(1735);

    function Hb(bb) {
      var wb;
      return {
        ...gb.store,
        yaw: gb.store.yaw + (null !== (wb = eb.d[bb].previewYaw) && void 0 !== wb ? wb : 0)
      }
    }
    const pb = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      Vb = {
        ...pb,
        radius: 33,
        target: [0, 3.9, 0]
      },
      gb = {
        player: pb,
        store: Vb,
        showcase: {
          ...Vb,
          target: [0, 1.9, 0]
        }
      };

    function lb(bb, wb) {
      bb instanceof Promise ? bb.then(wb).catch((bb => {
        console.error("Couldn't open the preview", bb)
      })) : wb(bb)
    }
    class Lb {
      constructor(bb) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, lb(bb, (bb => {
          this.closed ? bb.close() : (this.opened = bb, null !== this.size && bb.resize(this.size.width, this.size.height), null !== this.view && bb.show(this.view))
        }))
      }
      show(bb) {
        var wb;
        this.view = bb, null === (wb = this.opened) || void 0 === wb || wb.show(bb)
      }
      resize(bb, wb) {
        var Mb;
        this.size = {
          width: bb,
          height: wb
        }, null === (Mb = this.opened) || void 0 === Mb || Mb.resize(bb, wb)
      }
      close() {
        var bb;
        this.closed = !0, null === (bb = this.opened) || void 0 === bb || bb.close(), this.opened = null
      }
    }
    class Ib {
      constructor(bb) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(bb).then((bb => bb.ready)), lb(bb, (bb => {
          this.closed ? bb.close() : (this.opened = bb, null !== this.size && bb.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var bb, wb;
        return null !== (bb = null === (wb = this.opened) || void 0 === wb ? void 0 : wb.isReady()) && void 0 !== bb && bb
      }
      setCosmetic(bb, wb) {
        var Mb;
        null === (Mb = this.opened) || void 0 === Mb || Mb.setCosmetic(bb, wb)
      }
      setNametag(bb) {
        var wb;
        null === (wb = this.opened) || void 0 === wb || wb.setNametag(bb)
      }
      playEmote(bb) {
        var wb;
        null === (wb = this.opened) || void 0 === wb || wb.playEmote(bb)
      }
      setOrbit(bb) {
        var wb;
        null === (wb = this.opened) || void 0 === wb || wb.setOrbit(bb)
      }
      resetCamera() {
        var bb;
        null === (bb = this.opened) || void 0 === bb || bb.resetCamera()
      }
      async untilDrawn(bb) {
        var wb;
        await this.ready, await (null === (wb = this.opened) || void 0 === wb ? void 0 : wb.untilDrawn(bb))
      }
      resize(bb, wb) {
        var Mb;
        this.size = {
          width: bb,
          height: wb
        }, null === (Mb = this.opened) || void 0 === Mb || Mb.resize(bb, wb)
      }
      close() {
        var bb;
        this.closed = !0, null === (bb = this.opened) || void 0 === bb || bb.close(), this.opened = null
      }
    }
    const Ob = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(bb) {
        this.host = bb
      }
      setDefaultHost(bb) {
        this.makeDefault = bb
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(bb) {
        return new Lb(this.current().openMob(bb))
      }
      openPet(bb) {
        return new Lb(this.current().openPet(bb))
      }
      openMobLineup(bb) {
        return new Lb(this.current().openMobLineup(bb))
      }
      sharesCharacter() {
        return !0 === this.current().sharesCharacter
      }
      openCharacter(bb, wb) {
        return new Ib(this.current().openCharacter(bb, wb))
      }
    }
  },
  35366: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => eb.b,
      f: () => eb.c,
      i: () => eb.f
    });
    var eb = Mb(35370);
    class Hb {
      constructor(bb) {
        this.load = bb, this.loaded = null, this.loading = null
      }
      run(bb) {
        return null !== this.loaded ? bb(this.loaded) : (this.loading ??= this.load().then((bb => (this.loaded = bb, bb)), (bb => {
          throw this.loading = null, bb
        })), this.loading.then(bb))
      }
    }
    class pb {
      constructor() {
        this.sharesCharacter = !0, this.mobScene = new Hb((() => Promise.all([Mb.e(85), Mb.e(265), Mb.e(264), Mb.e(290), Mb.e(113), Mb.e(291), Mb.e(89), Mb.e(86), Mb.e(288), Mb.e(87), Mb.e(88), Mb.e(298), Mb.e(292), Mb.e(297), Mb.e(295), Mb.e(287), Mb.e(312), Mb.e(261), Mb.e(279), Mb.e(293), Mb.e(296), Mb.e(91), Mb.e(253), Mb.e(267), Mb.e(112), Mb.e(124), Mb.e(258), Mb.e(142), Mb.e(90), Mb.e(122), Mb.e(311)]).then((() => Mb(42755))))), this.characterScene = new Hb((() => Promise.all([Mb.e(85), Mb.e(265), Mb.e(264), Mb.e(290), Mb.e(113), Mb.e(291), Mb.e(89), Mb.e(86), Mb.e(288), Mb.e(87), Mb.e(88), Mb.e(298), Mb.e(292), Mb.e(297), Mb.e(295), Mb.e(287), Mb.e(312), Mb.e(177), Mb.e(261), Mb.e(279), Mb.e(293), Mb.e(296), Mb.e(91), Mb.e(225), Mb.e(253), Mb.e(267), Mb.e(112), Mb.e(124), Mb.e(258), Mb.e(142), Mb.e(90), Mb.e(122), Mb.e(280), Mb.e(184)]).then((() => Mb(42854)))))
      }
      openMob(bb) {
        return this.mobScene.run((wb => wb.openMobPreview(bb)))
      }
      openPet(bb) {
        return this.mobScene.run((wb => wb.openPetPreview(bb)))
      }
      openMobLineup(bb) {
        return this.mobScene.run((wb => wb.openMobLineupPreview(bb)))
      }
      openCharacter(bb, wb) {
        return this.characterScene.run((Mb => Mb.openCharacterPreview(bb, wb)))
      }
    }
    eb.f.setDefaultHost((() => new pb))
  },
  37455: (bb, wb, Mb) => {
    function eb(bb, wb, Mb) {
      if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(bb, wb).getContext("2d", Mb);
      const eb = document.createElement("canvas");
      return eb.width = bb, eb.height = wb, eb.getContext("2d", Mb)
    }

    function Hb(bb, wb) {
      return bb.getContext("2d", wb)
    }
    Mb.d(wb, {
      d: () => Hb,
      g: () => eb
    })
  },
  37449: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => pb
    });
    const eb = 4e5,
      Hb = 2;

    function pb(bb, wb, Mb) {
      let [pb, Vb] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [bb, wb], gb = Math.min(Number.isFinite(Mb) && Mb > 0 ? Mb : 1, Hb);
      const lb = Math.max(0, pb, bb) * Math.max(0, Vb, wb) * gb * gb;
      return lb > eb && (gb *= Math.sqrt(eb / lb)), [Math.max(1, Math.floor(Math.max(0, bb) * gb)), Math.max(1, Math.floor(Math.max(0, wb) * gb))]
    }
  },
  37446: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Fb,
      g: () => Ib,
      h: () => tb,
      j: () => Ob,
      n: () => Bb,
      o: () => Cb,
      r: () => Eb,
      v: () => Ub
    });
    const eb = 30,
      Hb = 4;
    let pb = 0,
      Vb = !1,
      gb = !1,
      lb = Number.NEGATIVE_INFINITY,
      Lb = [];

    function Ib() {
      0 === pb && (Vb = !1, gb = !1), pb++;
      let bb = !1;
      return () => {
        bb || (bb = !0, pb--)
      }
    }

    function Ob(bb) {
      bb && (gb = !0)
    }

    function Ub() {
      return gb
    }

    function tb(bb) {
      Vb = bb
    }

    function Cb() {
      return pb > 0
    }

    function Eb(bb) {
      return !(pb > 0 && (Vb || bb - lb < 1e3 / eb - Hb)) && (lb = bb, !0)
    }

    function Fb(bb) {
      return Lb.push(bb), () => {
        Lb = Lb.filter((wb => wb !== bb))
      }
    }

    function Bb() {
      if (0 === Lb.length) return;
      const bb = Lb;
      Lb = [];
      for (const Mb of bb) try {
        Mb()
      } catch (wb) {
        console.warn("[bloxd-previews] an after-draw callback threw", wb)
      }
    }
  },
  37544: (bb, wb, Mb) => {
    function eb() {
      return Mb(37546)
    }

    function Hb() {
      return Mb(37550)
    }

    function pb(bb) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(bb)
    }
    Mb.d(wb, {
      b: () => pb,
      e: () => eb,
      f: () => Hb
    })
  },
  37546: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  37550: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);