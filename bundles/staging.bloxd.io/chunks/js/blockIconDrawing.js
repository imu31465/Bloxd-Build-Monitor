export const id = 2;
export const ids = [2];
export const modules = {
  37697: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      drawBlockIcon: () => sb,
      drawBlockIconUrl: () => mb,
      getDrawnBlockIcon: () => Bb,
      resetBlockIconDrawingForTests: () => Cb
    });
    var eb = Mb(37702);
    const Hb = {
        boxes: [
          [0, 0, 0, 1, 1, 1]
        ],
        cropFaces: !1
      },
      pb = {
        boxes: [
          [0, 0, 0, 1, .5, 1]
        ],
        cropFaces: !1
      },
      Vb = {
        boxes: [
          [0, 0, 0, 1, .5, 1],
          [0, .5, 0, .5, 1, 1]
        ],
        cropFaces: !0
      };
    const gb = 1e-6;

    function lb(bb, wb, Mb, eb) {
      let {
        origin: Hb,
        across: pb,
        down: Vb,
        texture: lb,
        rect: [Lb, Ib, Ob, Ub],
        shade: tb
      } = eb;
      const Cb = pb.x * Vb.y - pb.y * Vb.x;
      if (Math.abs(Cb) < 1e-9) return;
      const Eb = [Hb.x, Hb.x + pb.x, Hb.x + Vb.x, Hb.x + pb.x + Vb.x],
        Fb = [Hb.y, Hb.y + pb.y, Hb.y + Vb.y, Hb.y + pb.y + Vb.y],
        Bb = Math.max(0, Math.floor(Math.min(...Eb))),
        sb = Math.min(Mb - 1, Math.ceil(Math.max(...Eb))),
        mb = Math.max(0, Math.floor(Math.min(...Fb))),
        hb = Math.min(Mb - 1, Math.ceil(Math.max(...Fb)));
      for (let zb = mb; zb <= hb; zb++)
        for (let eb = Bb; eb <= sb; eb++) {
          const Eb = eb + .5 - Hb.x,
            Fb = zb + .5 - Hb.y,
            Bb = (Eb * Vb.y - Fb * Vb.x) / Cb,
            sb = (pb.x * Fb - pb.y * Eb) / Cb;
          if (Bb < -gb || Bb > 1 + gb || sb < -gb || sb > 1 + gb) continue;
          const mb = zb * Mb + eb;
          wb[mb] = 1;
          const hb = Lb + Math.min(Math.max(Bb, 0), 1) * (Ob - Lb),
            Xb = Ib + Math.min(Math.max(sb, 0), 1) * (Ub - Ib),
            xb = Math.min(lb.width - 1, Math.floor(hb * lb.width)),
            jb = 4 * (Math.min(lb.height - 1, Math.floor(Xb * lb.height)) * lb.width + xb),
            Kb = lb.pixels[jb + 3] / 255;
          if (0 === Kb) continue;
          const rb = 4 * mb,
            Rb = bb[rb + 3] / 255 * (1 - Kb),
            Db = Kb + Rb;
          for (let wb = 0; wb < 3; wb++) bb[rb + wb] = (lb.pixels[jb + wb] * tb * Kb + bb[rb + wb] * Rb) / Db;
          bb[rb + 3] = 255 * Db
        }
    }
    var Lb = Mb(37705);
    const Ib = new Map,
      Ob = new Map,
      Ub = new Map,
      tb = new Map;

    function Cb() {
      Ib.clear(), Ob.clear(), Ub.clear(), tb.clear()
    }

    function Eb(bb, wb, Mb) {
      return `${wb}|${Mb}|${bb}`
    }

    function Fb(bb, wb, Mb) {
      let eb = bb.get(wb);
      return void 0 === eb && (eb = Mb().catch((Mb => {
        throw bb.delete(wb), Mb
      })), bb.set(wb, eb)), eb
    }

    function Bb(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Ob.get(Eb(bb, wb, Mb))
    }

    function sb(bb, wb, Mb, eb) {
      const Hb = Eb(bb, wb, Mb);
      return Fb(Ib, Hb, (async () => {
        const pb = await hb(eb(bb), wb, Mb);
        return Ob.set(Hb, pb), pb
      }))
    }

    function mb(bb, wb, Mb, eb) {
      return Fb(Ub, Eb(bb, wb, Mb), (async () => {
        var Hb;
        const pb = eb(bb);
        return null !== (Hb = await (0, Lb.e)(pb, wb, Mb)) && void 0 !== Hb ? Hb : (await hb(pb, wb, Mb)).toDataURL()
      }))
    }
    async function hb(bb, wb, Mb) {
      let {
        top: gb,
        left: Lb,
        right: Ib,
        itemType: Ob
      } = bb;
      const [Ub, tb, Cb] = await Promise.all([zb(gb), zb(Lb), zb(Ib)]), Eb = function(bb, wb, Mb, Hb) {
        const pb = (0, eb.i)(Mb, Hb),
          Vb = pb * eb.d.across,
          gb = pb * eb.d.down,
          Lb = pb * eb.d.up,
          Ib = Math.max(...wb.boxes.map((bb => bb[4]))),
          Ob = Mb / 2,
          Ub = gb + (Mb - gb - gb - Ib * Lb) / 2,
          tb = (bb, wb, Mb) => ({
            x: Ob + (bb - Mb) * Vb,
            y: Ub - gb + (bb + Mb) * gb + (Ib - wb) * Lb
          }),
          Cb = (bb, Mb, eb, Hb, pb, Vb) => ({
            origin: bb,
            across: {
              x: Mb.x - bb.x,
              y: Mb.y - bb.y
            },
            down: {
              x: eb.x - bb.x,
              y: eb.y - bb.y
            },
            texture: Hb,
            rect: wb.cropFaces ? pb : [0, 0, 1, 1],
            shade: Vb
          }),
          Eb = new Uint8ClampedArray(Mb * Mb * 4),
          Fb = new Uint8Array(Mb * Mb),
          Bb = eb.h;
        for (const [eb, sb, mb, hb, zb, Xb] of wb.boxes) {
          const wb = Cb(tb(hb, zb, Xb), tb(hb, zb, mb), tb(hb, sb, Xb), bb.right, [1 - Xb, 1 - zb, 1 - mb, 1 - sb], Bb.right),
            Hb = Cb(tb(eb, zb, Xb), tb(hb, zb, Xb), tb(eb, sb, Xb), bb.left, [eb, 1 - zb, hb, 1 - sb], Bb.left),
            pb = Cb(tb(eb, zb, mb), tb(hb, zb, mb), tb(eb, zb, Xb), bb.top, [eb, mb, hb, Xb], Bb.top);
          for (const bb of [wb, Hb, pb]) lb(Eb, Fb, Mb, bb)
        }
        return (0, eb.k)(Eb, Mb, Hb, (bb => 1 === Fb[bb])), Eb
      }({
        top: Ub,
        left: tb,
        right: Cb
      }, function(bb) {
        return "SlabBlock" === bb ? pb : "StairsBlock" === bb ? Vb : Hb
      }(Ob), wb, Mb), Fb = document.createElement("canvas");
      Fb.width = wb, Fb.height = wb;
      const Bb = Fb.getContext("2d");
      if (!Bb) throw new Error("Failed to get 2D context");
      return Bb.putImageData(new ImageData(Eb, wb, wb), 0, 0), Fb
    }

    function zb(bb) {
      return Fb(tb, bb, (async () => {
        const wb = await (0, Lb.q)(bb),
          Mb = document.createElement("canvas");
        Mb.width = wb.width, Mb.height = wb.height;
        const eb = Mb.getContext("2d");
        if (!eb) throw new Error("Failed to get 2D context");
        return eb.drawImage(wb, 0, 0), {
          width: wb.width,
          height: wb.height,
          pixels: eb.getImageData(0, 0, wb.width, wb.height).data
        }
      }))
    }
  },
  37705: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Rb,
      i: () => Db,
      m: () => zb,
      q: () => mb,
      u: () => Xb
    });
    var eb = Mb(318),
      Hb = Mb(110);
    const pb = new(Mb(37707).b)(new URL(Mb.p + Mb.u(3), Mb.b), {
      name: "blockIconWorker",
      type: "module"
    });
    var Vb = Mb(1848),
      gb = Mb(2367);
    const lb = 1e4,
      Lb = 3e4;
    let Ib = null,
      Ob = null,
      Ub = null,
      tb = !1,
      Cb = 0;
    const Eb = new Map;
    let Fb = null;
    const Bb = new Map,
      sb = new Map;

    function mb(bb) {
      const wb = new Promise(((wb, Mb) => {
        const eb = new Image;
        eb.crossOrigin = "anonymous", eb.fetchPriority = "high", eb.onload = () => {
          wb(eb)
        }, eb.onerror = () => {
          Mb(new Error(`A block icon's texture did not load: ${bb.slice(0,100)}`))
        }, eb.src = bb
      }));
      return (0, gb.h)(wb)
    }

    function hb(bb) {
      var wb, Mb;
      tb || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${bb}`), tb = !0, null === (wb = Ib) || void 0 === wb || wb.terminate(), Ib = null, Ob = null, Bb.clear(), sb.clear();
      for (const eb of Eb.values()) eb(null);
      Eb.clear(), null === (Mb = Fb) || void 0 === Mb || Mb()
    }

    function zb() {
      return null !== Ob
    }

    function Xb() {
      return Ub ??= async function() {
        if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
        if ("page" === eb.d.ios_icon_worker_v1 && (0, Hb.isWebKit)()) return;
        try {
          Ib = await async function() {
            return await pb.ready(), pb.start()
          }()
        } catch (gb) {
          return void hb(`did not start (${String(gb)})`)
        }
        let bb = () => {};
        const wb = new Promise((wb => {
          bb = wb
        }));
        Ib.onmessage = wb => {
          let {
            data: Mb
          } = wb;
          if ("started" === Mb.type) Ob = Ib, bb();
          else if ("failed" === Mb.type) hb(`failed a draw (${Mb.message})`);
          else {
            var eb, Hb;
            null === (eb = Eb.get(Mb.id)) || void 0 === eb || eb(Mb.url), Eb.delete(Mb.id), null === (Hb = Fb) || void 0 === Hb || Hb()
          }
        }, Ib.onerror = wb => {
          wb.preventDefault(), hb(`stopped (${wb.message||"its script did not load or run"})`), bb()
        };
        const Mb = `did not start in ${Lb/1e3} s`;
        await (0, Vb.n)(wb, Lb, Mb).catch((() => {
          hb(Mb)
        }))
      }(), Ub
    }

    function xb() {
      if (null !== Fb || 0 === Eb.size) return;
      const bb = new Promise((bb => {
          Fb = bb
        })),
        wb = `did not answer in ${lb/1e3} s`;
      (0, Vb.n)(bb, lb, wb).then((() => {
        Fb = null, xb()
      }), (() => {
        Fb = null, hb(wb)
      }))
    }

    function jb(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      bb.postMessage(wb, Mb)
    }

    function Kb(bb, wb, Mb, eb) {
      let Hb = wb.get(Mb);
      return void 0 === Hb && (Hb = eb().then((async wb => {
        let {
          image: Mb,
          request: eb
        } = wb;
        try {
          const wb = await createImageBitmap(Mb);
          jb(bb, eb(wb), [wb])
        } catch (Hb) {
          hb(`could not take an image (${String(Hb)})`)
        }
      })), Hb.catch((() => {
        wb.get(Mb) === Hb && wb.delete(Mb)
      })), wb.set(Mb, Hb)), Hb
    }
    async function rb(bb, wb) {
      Xb();
      const Mb = Ob;
      if (null === Mb) return null;
      if (await bb(Mb), Ob !== Mb) return null;
      const eb = ++Cb;
      return new Promise((bb => {
        Eb.set(eb, bb), jb(Mb, wb(eb)), xb()
      }))
    }

    function Rb(bb, wb, Mb) {
      return rb((wb => Promise.all([bb.top, bb.left, bb.right].map((bb => function(bb, wb) {
        return Kb(bb, Bb, wb, (async () => ({
          image: await mb(wb),
          request: bb => ({
            type: "texture",
            url: wb,
            bitmap: bb
          })
        })))
      }(wb, bb))))), (eb => ({
        type: "draw",
        id: eb,
        ...bb,
        size: wb,
        outlineWidth: Mb
      })))
    }

    function Db(bb, wb, Mb, eb) {
      return rb((Mb => function(bb, wb, Mb) {
        return Kb(bb, sb, wb, (async () => {
          const {
            texture: bb,
            ...eb
          } = await Mb();
          return {
            image: await mb(bb),
            request: bb => ({
              type: "model",
              name: wb,
              bitmap: bb,
              geometry: eb
            })
          }
        }))
      }(Mb, bb, wb)), (wb => ({
        type: "drawModel",
        id: wb,
        name: bb,
        size: Mb,
        outlineWidth: eb
      })))
    }
  },
  37702: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => eb,
      h: () => lb,
      i: () => Vb,
      k: () => Ub,
      n: () => Lb
    });
    const eb = {
        across: Math.SQRT1_2,
        down: Math.SQRT1_2 / 2,
        up: Math.sqrt(3) / 2
      },
      Hb = .6,
      pb = {
        width: 2 * eb.across,
        height: 2 * eb.down + eb.up
      };

    function Vb(bb, wb) {
      const Mb = wb > 0 ? wb + 1 : 0,
        Vb = bb * Hb - wb / eb.across;
      return Math.max(0, Math.min(Vb, (bb - 2 * Mb) / pb.height))
    }
    const gb = [15, 15, 15],
      lb = {
        top: 1,
        left: .85,
        right: .7
      };

    function Lb(bb, wb, Mb, eb) {
      const {
        vertices: Hb,
        uvs: gb,
        indices: lb,
        shades: Lb
      } = bb, Ib = function(bb, wb) {
        const Mb = Vb(bb, wb),
          eb = pb.width * Mb,
          Hb = pb.height * Mb;
        return {
          left: (bb - eb) / 2,
          top: (bb - Hb) / 2,
          width: eb,
          height: Hb
        }
      }(Mb, eb), Ob = new Float32Array(Hb.length);
      for (let pb = 0; pb < Hb.length; pb += 3) Ob[pb] = Ib.left + Hb[pb] * Ib.width, Ob[pb + 1] = Ib.top + Hb[pb + 1] * Ib.height, Ob[pb + 2] = Hb[pb + 2];
      const tb = new Float32Array(Mb * Mb).fill(-1 / 0),
        Cb = new Uint8ClampedArray(Mb * Mb * 4),
        Eb = 255 * bb.alphaCutoff;
      for (let pb = 0; pb < lb.length; pb += 3) {
        const [bb, eb, Hb] = [lb[pb], lb[pb + 1], lb[pb + 2]], [Vb, Ib, Ub] = [3 * bb, 3 * eb, 3 * Hb], [Fb, Bb, sb, mb, hb, zb] = [Ob[Vb], Ob[Vb + 1], Ob[Ib], Ob[Ib + 1], Ob[Ub], Ob[Ub + 1]], Xb = (sb - Fb) * (zb - Bb) - (hb - Fb) * (mb - Bb);
        if (Math.abs(Xb) < 1e-9) continue;
        const xb = Lb[pb / 3],
          [jb, Kb, rb, Rb, Db, cb] = [gb[2 * bb], gb[2 * bb + 1], gb[2 * eb], gb[2 * eb + 1], gb[2 * Hb], gb[2 * Hb + 1]],
          Yb = Math.max(0, Math.floor(Math.min(Fb, sb, hb))),
          Zb = Math.min(Mb - 1, Math.ceil(Math.max(Fb, sb, hb))),
          fb = Math.max(0, Math.floor(Math.min(Bb, mb, zb))),
          Ab = Math.min(Mb - 1, Math.ceil(Math.max(Bb, mb, zb)));
        for (let pb = fb; pb <= Ab; pb++)
          for (let bb = Yb; bb <= Zb; bb++) {
            const [eb, Hb] = [bb + .5, pb + .5], gb = ((eb - Fb) * (zb - Bb) - (hb - Fb) * (Hb - Bb)) / Xb, lb = ((sb - Fb) * (Hb - Bb) - (eb - Fb) * (mb - Bb)) / Xb, Lb = 1 - gb - lb;
            if (Lb < 0 || gb < 0 || lb < 0) continue;
            const Yb = Lb * Ob[Vb + 2] + gb * Ob[Ib + 2] + lb * Ob[Ub + 2],
              Zb = pb * Mb + bb;
            if (Yb <= tb[Zb]) continue;
            const fb = Math.max(0, Math.min(wb.width - 1, Math.floor((Lb * jb + gb * rb + lb * Db) * wb.width))),
              Ab = 4 * (Math.max(0, Math.min(wb.height - 1, Math.floor((Lb * Kb + gb * Rb + lb * cb) * wb.height))) * wb.width + fb);
            wb.pixels[Ab + 3] < Eb || (tb[Zb] = Yb, Cb[4 * Zb] = wb.pixels[Ab] * xb, Cb[4 * Zb + 1] = wb.pixels[Ab + 1] * xb, Cb[4 * Zb + 2] = wb.pixels[Ab + 2] * xb, Cb[4 * Zb + 3] = 255)
          }
      }
      return Ub(Cb, Mb, eb), Cb
    }
    let Ib = NaN,
      Ob = new Int32Array(0);

    function Ub(bb, wb, Mb) {
      let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : wb => 0 !== bb[4 * wb + 3];
      const Hb = new Uint8Array(wb * wb);
      for (let gb = 0; gb < wb * wb; gb++) Hb[gb] = eb(gb) ? 1 : 0;
      const pb = (bb, Mb) => bb >= 0 && Mb >= 0 && bb < wb && Mb < wb && 0 === Hb[Mb * wb + bb],
        Vb = new Float32Array(wb * wb).fill(1 / 0),
        lb = function(bb) {
          if (bb !== Ib) {
            const wb = Math.ceil(bb + 1),
              Mb = [];
            for (let eb = -wb; eb <= wb; eb++)
              for (let Hb = -wb; Hb <= wb; Hb++) {
                const wb = Hb * Hb + eb * eb;
                wb > 0 && wb < (bb + 1) ** 2 && Mb.push(Hb, eb, wb)
              }
            Ib = bb, Ob = Int32Array.from(Mb)
          }
          return Ob
        }(Mb);
      for (let gb = 0; gb < wb; gb++)
        for (let bb = 0; bb < wb; bb++) {
          if (1 === Hb[gb * wb + bb] && (pb(bb - 1, gb) || pb(bb + 1, gb) || pb(bb, gb - 1) || pb(bb, gb + 1)))
            for (let Mb = 0; Mb < lb.length; Mb += 3) {
              const eb = bb + lb[Mb],
                Hb = gb + lb[Mb + 1];
              if (eb >= 0 && Hb >= 0 && eb < wb && Hb < wb) {
                const bb = Hb * wb + eb;
                Vb[bb] = Math.min(Vb[bb], lb[Mb + 2])
              }
            }
        }
      for (let Lb = 0; Lb < wb * wb; Lb++) 1 !== Hb[Lb] && Vb[Lb] !== 1 / 0 && (bb.set(gb, 4 * Lb), bb[4 * Lb + 3] = Math.round(255 * Math.min(1, Mb + 1 - Math.sqrt(Vb[Lb]))))
    }
  },
  37707: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Hb
    });
    const eb = {
      wait: function(bb) {
        return new Promise((wb => {
          setTimeout(wb, bb)
        }))
      },
      stallMs: 2e4
    };
    class Hb {
      constructor(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : eb;
        this.url = bb, this.options = wb, this.timing = Mb, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = bb
      }
      ready() {
        if (null === this.fetched) {
          const bb = new AbortController;
          this.fetchAbort = bb, this.fetched = this.fetchWithRetries(bb.signal).then((wb => (this.fetchAbort === bb && (this.fetchAbort = null), wb)))
        }
        return this.fetched
      }
      cancel() {
        null !== this.fetchAbort && (this.fetchAbort.abort(), this.fetchAbort = null, this.fetched = null)
      }
      forgetFailedFetch() {
        this.fetched = null
      }
      get href() {
        return this.url.href
      }
      start() {
        return new Worker(this.scriptUrl, this.options)
      }
      async fetchWithRetries(bb) {
        for (let wb = 0;; wb++) {
          const Mb = new URL(this.url);
          if (wb > 0 && Mb.searchParams.set("cache-bust", `${Date.now()}-${wb}`), await this.fetchWhole(Mb, bb)) return this.scriptUrl = Mb, !0;
          if (wb >= 3 || bb.aborted) return !1;
          if (await this.timing.wait(500 * 2 ** wb), bb.aborted) return !1
        }
      }
      async fetchWhole(bb, wb) {
        const Mb = new AbortController;
        let eb;
        const Hb = () => {
            clearTimeout(eb), eb = setTimeout((() => {
              Mb.abort()
            }), this.timing.stallMs)
          },
          pb = () => {
            Mb.abort()
          };
        wb.addEventListener("abort", pb, {
          once: !0
        }), Hb();
        try {
          var Vb;
          const wb = await fetch(bb, {
            signal: Mb.signal
          });
          if (!wb.ok) return !1;
          const eb = null === (Vb = wb.body) || void 0 === Vb ? void 0 : Vb.getReader();
          if (!eb) return !1;
          for (;;) {
            const {
              done: bb
            } = await eb.read();
            if (bb) return !0;
            Hb()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(eb), wb.removeEventListener("abort", pb)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);