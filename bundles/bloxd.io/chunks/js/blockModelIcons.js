export const id = 4;
export const ids = [4];
export const modules = {
  36020: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      getBlockModelIconUrl: () => wb,
      hasBlockModelIcon: () => Sb
    });
    var Bb = hb(36010),
      Ob = hb(36006);
    const Gb = hb(36025),
      Ub = new Map(Gb.keys().filter((bb => bb.startsWith("./"))).map((bb => [bb.slice(2, -5), bb]))),
      Lb = new Map,
      Yb = new Map;

    function Sb(bb) {
      return Ub.has(bb)
    }

    function ab(bb) {
      return Gb(Ub.get(bb))
    }
    async function Hb(bb, ub, hb) {
      const {
        data: Bb,
        texture: Gb
      } = await
      function(bb) {
        let ub = Lb.get(bb);
        return ub || (ub = ab(bb).then((async bb => {
          const ub = new Image;
          ub.src = bb.texture, await ub.decode();
          const hb = document.createElement("canvas");
          hb.width = ub.width, hb.height = ub.height;
          const Bb = hb.getContext("2d");
          return Bb.drawImage(ub, 0, 0), {
            data: bb,
            texture: {
              width: ub.width,
              height: ub.height,
              pixels: Bb.getImageData(0, 0, ub.width, ub.height).data
            }
          }
        })), ub.catch((() => {
          Lb.delete(bb)
        })), Lb.set(bb, ub)), ub
      }(bb), Ub = document.createElement("canvas");
      return Ub.width = ub, Ub.height = ub, Ub.getContext("2d").putImageData(new ImageData((0, Ob.j)(Bb, Gb, ub, hb), ub, ub), 0, 0), Ub.toDataURL()
    }

    function wb(bb, ub, hb) {
      const Ob = `${ub}|${hb}|${bb}`;
      let Gb = Yb.get(Ob);
      return Gb || (Gb = (0, Bb.h)(bb, (() => ab(bb)), ub, hb).then((Bb => null !== Bb && void 0 !== Bb ? Bb : Hb(bb, ub, hb))), Gb.catch((() => {
        Yb.delete(Ob)
      })), Yb.set(Ob, Gb)), Gb
    }
  },
  36010: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Db,
      h: () => xb,
      j: () => Kb
    });
    var Bb = hb(275),
      Ob = hb(86);
    const Gb = new(hb(36018).c)(new URL(hb.p + hb.u(3), hb.b), {
      name: "blockIconWorker",
      type: "module"
    });
    var Ub = hb(1672),
      Lb = hb(2991);
    const Yb = 1e4,
      Sb = 3e4;
    let ab = null,
      Hb = null,
      wb = null,
      Zb = !1,
      Xb = 0;
    const pb = new Map;
    let ob = null;
    const Ab = new Map,
      lb = new Map;

    function Kb(bb) {
      const ub = new Promise(((ub, hb) => {
        const Bb = new Image;
        Bb.crossOrigin = "anonymous", Bb.fetchPriority = "high", Bb.onload = () => {
          ub(Bb)
        }, Bb.onerror = () => {
          hb(new Error(`A block icon's texture did not load: ${bb.slice(0,100)}`))
        }, Bb.src = bb
      }));
      return (0, Lb.g)(ub)
    }

    function Wb(bb) {
      var ub, hb;
      Zb || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${bb}`), Zb = !0, null === (ub = ab) || void 0 === ub || ub.terminate(), ab = null, Hb = null, Ab.clear(), lb.clear();
      for (const Bb of pb.values()) Bb(null);
      pb.clear(), null === (hb = ob) || void 0 === hb || hb()
    }

    function Cb() {
      return wb ??= async function() {
        if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
        if ("page" === Bb.b.ios_icon_worker_v1 && (0, Ob.isWebKit)()) return;
        try {
          ab = await async function() {
            return await Gb.ready(), Gb.start()
          }()
        } catch (Lb) {
          return void Wb(`did not start (${String(Lb)})`)
        }
        let bb = () => {};
        const ub = new Promise((ub => {
          bb = ub
        }));
        ab.onmessage = ub => {
          let {
            data: hb
          } = ub;
          if ("started" === hb.type) Hb = ab, bb();
          else if ("failed" === hb.type) Wb(`failed a draw (${hb.message})`);
          else {
            var Bb, Ob;
            null === (Bb = pb.get(hb.id)) || void 0 === Bb || Bb(hb.url), pb.delete(hb.id), null === (Ob = ob) || void 0 === Ob || Ob()
          }
        }, ab.onerror = ub => {
          ub.preventDefault(), Wb(`stopped (${ub.message||"its script did not load or run"})`), bb()
        };
        const hb = `did not start in ${Sb/1e3} s`;
        await (0, Ub.q)(ub, Sb, hb).catch((() => {
          Wb(hb)
        }))
      }(), wb
    }

    function db() {
      if (null !== ob || 0 === pb.size) return;
      const bb = new Promise((bb => {
          ob = bb
        })),
        ub = `did not answer in ${Yb/1e3} s`;
      (0, Ub.q)(bb, Yb, ub).then((() => {
        ob = null, db()
      }), (() => {
        ob = null, Wb(ub)
      }))
    }

    function rb(bb, ub) {
      let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      bb.postMessage(ub, hb)
    }

    function jb(bb, ub, hb, Bb) {
      let Ob = ub.get(hb);
      return void 0 === Ob && (Ob = Bb().then((async ub => {
        let {
          image: hb,
          request: Bb
        } = ub;
        try {
          const ub = await createImageBitmap(hb);
          rb(bb, Bb(ub), [ub])
        } catch (Ob) {
          Wb(`could not take an image (${String(Ob)})`)
        }
      })), Ob.catch((() => {
        ub.get(hb) === Ob && ub.delete(hb)
      })), ub.set(hb, Ob)), Ob
    }
    async function nb(bb, ub) {
      Cb();
      const hb = Hb;
      if (null === hb) return null;
      if (await bb(hb), Hb !== hb) return null;
      const Bb = ++Xb;
      return new Promise((bb => {
        pb.set(Bb, bb), rb(hb, ub(Bb)), db()
      }))
    }

    function Db(bb, ub, hb) {
      return nb((ub => Promise.all([bb.top, bb.left, bb.right].map((bb => function(bb, ub) {
        return jb(bb, Ab, ub, (async () => ({
          image: await Kb(ub),
          request: bb => ({
            type: "texture",
            url: ub,
            bitmap: bb
          })
        })))
      }(ub, bb))))), (Bb => ({
        type: "draw",
        id: Bb,
        ...bb,
        size: ub,
        outlineWidth: hb
      })))
    }

    function xb(bb, ub, hb, Bb) {
      return nb((hb => function(bb, ub, hb) {
        return jb(bb, lb, ub, (async () => {
          const {
            texture: bb,
            ...Bb
          } = await hb();
          return {
            image: await Kb(bb),
            request: bb => ({
              type: "model",
              name: ub,
              bitmap: bb,
              geometry: Bb
            })
          }
        }))
      }(hb, bb, ub)), (ub => ({
        type: "drawModel",
        id: ub,
        name: bb,
        size: hb,
        outlineWidth: Bb
      })))
    }
  },
  36006: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Gb,
      h: () => Lb,
      j: () => Ub
    });
    const Bb = 1 / 32,
      Ob = [15, 15, 15],
      Gb = {
        top: 1,
        left: .85,
        right: .7
      };

    function Ub(bb, ub, hb, Ob) {
      const {
        vertices: Gb,
        uvs: Ub,
        indices: Yb,
        shades: Sb
      } = bb, ab = hb * Bb, Hb = hb - 2 * ab, wb = new Float32Array(Gb.length);
      for (let Bb = 0; Bb < Gb.length; Bb += 3) wb[Bb] = ab + Gb[Bb] * Hb, wb[Bb + 1] = ab + Gb[Bb + 1] * Hb, wb[Bb + 2] = Gb[Bb + 2];
      const Zb = new Float32Array(hb * hb).fill(-1 / 0),
        Xb = new Uint8ClampedArray(hb * hb * 4),
        pb = 255 * bb.alphaCutoff;
      for (let Bb = 0; Bb < Yb.length; Bb += 3) {
        const [bb, Ob, Gb] = [Yb[Bb], Yb[Bb + 1], Yb[Bb + 2]], [Lb, ab, Hb] = [3 * bb, 3 * Ob, 3 * Gb], [ob, Ab, lb, Kb, Wb, Cb] = [wb[Lb], wb[Lb + 1], wb[ab], wb[ab + 1], wb[Hb], wb[Hb + 1]], db = (lb - ob) * (Cb - Ab) - (Wb - ob) * (Kb - Ab);
        if (Math.abs(db) < 1e-9) continue;
        const rb = Sb[Bb / 3],
          [jb, nb, Db, xb, zb, gb] = [Ub[2 * bb], Ub[2 * bb + 1], Ub[2 * Ob], Ub[2 * Ob + 1], Ub[2 * Gb], Ub[2 * Gb + 1]],
          ib = Math.max(0, Math.floor(Math.min(ob, lb, Wb))),
          vb = Math.min(hb - 1, Math.ceil(Math.max(ob, lb, Wb))),
          tb = Math.max(0, Math.floor(Math.min(Ab, Kb, Cb))),
          Jb = Math.min(hb - 1, Math.ceil(Math.max(Ab, Kb, Cb)));
        for (let Bb = tb; Bb <= Jb; Bb++)
          for (let bb = ib; bb <= vb; bb++) {
            const [Ob, Gb] = [bb + .5, Bb + .5], Ub = ((Ob - ob) * (Cb - Ab) - (Wb - ob) * (Gb - Ab)) / db, Yb = ((lb - ob) * (Gb - Ab) - (Ob - ob) * (Kb - Ab)) / db, Sb = 1 - Ub - Yb;
            if (Sb < 0 || Ub < 0 || Yb < 0) continue;
            const ib = Sb * wb[Lb + 2] + Ub * wb[ab + 2] + Yb * wb[Hb + 2],
              vb = Bb * hb + bb;
            if (ib <= Zb[vb]) continue;
            const tb = Math.max(0, Math.min(ub.width - 1, Math.floor((Sb * jb + Ub * Db + Yb * zb) * ub.width))),
              Jb = 4 * (Math.max(0, Math.min(ub.height - 1, Math.floor((Sb * nb + Ub * xb + Yb * gb) * ub.height))) * ub.width + tb);
            ub.pixels[Jb + 3] < pb || (Zb[vb] = ib, Xb[4 * vb] = ub.pixels[Jb] * rb, Xb[4 * vb + 1] = ub.pixels[Jb + 1] * rb, Xb[4 * vb + 2] = ub.pixels[Jb + 2] * rb, Xb[4 * vb + 3] = 255)
          }
      }
      return Lb(Xb, hb, Ob), Xb
    }

    function Lb(bb, ub, hb) {
      let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ub => 0 !== bb[4 * ub + 3];
      const Gb = (bb, hb) => bb < 0 || hb < 0 || bb >= ub || hb >= ub || !Bb(hb * ub + bb),
        Ub = [];
      for (let Ob = 0; Ob < ub; Ob++)
        for (let bb = 0; bb < ub; bb++)
          if (!Gb(bb, Ob)) bb: for (let Bb = -hb; Bb <= hb; Bb++) {
            const Lb = hb - Math.abs(Bb);
            for (let hb = -Lb; hb <= Lb; hb++)
              if (Gb(bb + hb, Ob + Bb)) {
                Ub.push(Ob * ub + bb);
                break bb
              }
          }
      for (const Lb of Ub) bb.set(Ob, 4 * Lb), bb[4 * Lb + 3] = 255
    }
  },
  36018: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Ob
    });
    const Bb = {
      wait: function(bb) {
        return new Promise((ub => {
          setTimeout(ub, bb)
        }))
      },
      stallMs: 2e4
    };
    class Ob {
      constructor(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Bb;
        this.url = bb, this.options = ub, this.timing = hb, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = bb
      }
      ready() {
        if (null === this.fetched) {
          const bb = new AbortController;
          this.fetchAbort = bb, this.fetched = this.fetchWithRetries(bb.signal).finally((() => {
            this.fetchAbort === bb && (this.fetchAbort = null)
          }))
        }
        return this.fetched
      }
      cancel() {
        null !== this.fetchAbort && (this.fetchAbort.abort(), this.fetchAbort = null, this.fetched = null)
      }
      start() {
        return new Worker(this.scriptUrl, this.options)
      }
      async fetchWithRetries(bb) {
        for (let ub = 0;; ub++) {
          const hb = new URL(this.url);
          if (ub > 0 && hb.searchParams.set("cache-bust", `${Date.now()}-${ub}`), await this.fetchWhole(hb, bb)) return void(this.scriptUrl = hb);
          if (ub >= 3 || bb.aborted) return;
          if (await this.timing.wait(500 * 2 ** ub), bb.aborted) return
        }
      }
      async fetchWhole(bb, ub) {
        const hb = new AbortController;
        let Bb;
        const Ob = () => {
            clearTimeout(Bb), Bb = setTimeout((() => {
              hb.abort()
            }), this.timing.stallMs)
          },
          Gb = () => {
            hb.abort()
          };
        ub.addEventListener("abort", Gb, {
          once: !0
        }), Ob();
        try {
          var Ub;
          const ub = await fetch(bb, {
            signal: hb.signal
          });
          if (!ub.ok) return !1;
          const Bb = null === (Ub = ub.body) || void 0 === Ub ? void 0 : Ub.getReader();
          if (!Bb) return !1;
          for (;;) {
            const {
              done: bb
            } = await Bb.read();
            if (bb) return !0;
            Ob()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(Bb), ub.removeEventListener("abort", Gb)
        }
      }
    }
  },
  36025: (bb, ub, hb) => {
    var Bb = {
      "./Artisan Bench.json": [40622, 266],
      "./Aspen Item Pedestal.json": [40626, 267],
      "./Cedar Item Pedestal.json": [40633, 268],
      "./Cherry Item Pedestal.json": [40641, 269],
      "./Furnace.json": [40647, 270],
      "./Jungle Item Pedestal.json": [40649, 271],
      "./Mango Item Pedestal.json": [40657, 272],
      "./Palm Item Pedestal.json": [40664, 273],
      "./Pear Item Pedestal.json": [40671, 274],
      "./Pine Item Pedestal.json": [40676, 275],
      "./Plum Item Pedestal.json": [40678, 276],
      "./Potion Table.json": [40687, 277],
      "./Salvaging Table.json": [40694, 278],
      "./Showcase.json": [40702, 279],
      "./Spectral Item Pedestal.json": [40708, 280],
      "./Workbench.json": [40713, 281]
    };

    function Ob(bb) {
      if (!hb.o(Bb, bb)) return Promise.resolve().then((() => {
        var ub = new Error("Cannot find module '" + bb + "'");
        throw ub.code = "MODULE_NOT_FOUND", ub
      }));
      var ub = Bb[bb],
        Ob = ub[0];
      return hb.e(ub[1]).then((() => hb(Ob)))
    }
    Ob.keys = () => Object.keys(Bb), Ob.id = 36025, bb.exports = Ob
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);