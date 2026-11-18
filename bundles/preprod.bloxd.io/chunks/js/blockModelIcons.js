export const id = 4;
export const ids = [4];
export const modules = {
  35236: (yb, bb, Wy) => {
    var Uy = {
      "./Artisan Bench.json": [39557, 251],
      "./Aspen Item Pedestal.json": [39566, 252],
      "./Cedar Item Pedestal.json": [39570, 253],
      "./Cherry Item Pedestal.json": [39579, 254],
      "./Furnace.json": [39582, 255],
      "./Jungle Item Pedestal.json": [39586, 256],
      "./Mango Item Pedestal.json": [39593, 257],
      "./Palm Item Pedestal.json": [39598, 258],
      "./Pear Item Pedestal.json": [39601, 259],
      "./Pine Item Pedestal.json": [39610, 260],
      "./Plum Item Pedestal.json": [39614, 261],
      "./Potion Table.json": [39616, 262],
      "./Salvaging Table.json": [39625, 263],
      "./Showcase.json": [39631, 264],
      "./Spectral Item Pedestal.json": [39633, 265],
      "./Workbench.json": [39637, 266]
    };

    function hy(yb) {
      if (!Wy.o(Uy, yb)) return Promise.resolve().then((() => {
        var bb = new Error("Cannot find module '" + yb + "'");
        throw bb.code = "MODULE_NOT_FOUND", bb
      }));
      var bb = Uy[yb],
        hy = bb[0];
      return Wy.e(bb[1]).then((() => Wy(hy)))
    }
    hy.keys = () => Object.keys(Uy), hy.id = 35236, yb.exports = hy
  },
  35233: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      getBlockModelIconUrl: () => ey,
      hasBlockModelIcon: () => oy
    });
    var Uy = Wy(35222),
      hy = Wy(35215);
    const fy = Wy(35236),
      Zy = new Map(fy.keys().filter((yb => yb.startsWith("./"))).map((yb => [yb.slice(2, -5), yb]))),
      cb = new Map,
      Py = new Map;

    function oy(yb) {
      return Zy.has(yb)
    }

    function By(yb) {
      return fy(Zy.get(yb))
    }
    async function Ky(yb, bb, Wy) {
      const {
        data: Uy,
        texture: fy
      } = await
      function(yb) {
        let bb = cb.get(yb);
        return bb || (bb = By(yb).then((async yb => {
          const bb = new Image;
          bb.src = yb.texture, await bb.decode();
          const Wy = document.createElement("canvas");
          Wy.width = bb.width, Wy.height = bb.height;
          const Uy = Wy.getContext("2d");
          return Uy.drawImage(bb, 0, 0), {
            data: yb,
            texture: {
              width: bb.width,
              height: bb.height,
              pixels: Uy.getImageData(0, 0, bb.width, bb.height).data
            }
          }
        })), bb.catch((() => {
          cb.delete(yb)
        })), cb.set(yb, bb)), bb
      }(yb), Zy = document.createElement("canvas");
      return Zy.width = bb, Zy.height = bb, Zy.getContext("2d").putImageData(new ImageData((0, hy.f)(Uy, fy, bb, Wy), bb, bb), 0, 0), Zy.toDataURL()
    }

    function ey(yb, bb, Wy) {
      const hy = `${bb}|${Wy}|${yb}`;
      let fy = Py.get(hy);
      return fy || (fy = (0, Uy.c)(yb, (() => By(yb)), bb, Wy).then((Uy => null !== Uy && void 0 !== Uy ? Uy : Ky(yb, bb, Wy))), fy.catch((() => {
        Py.delete(hy)
      })), Py.set(hy, fy)), fy
    }
  },
  35222: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Oy,
      c: () => Ry,
      e: () => mb
    });
    var Uy = Wy(127),
      hy = Wy(94);
    const fy = new(Wy(35226).c)(new URL(Wy.p + Wy.u(3), Wy.b), {
      name: "blockIconWorker",
      type: "module"
    });
    var Zy = Wy(2363);
    const cb = 1e4,
      Py = 3e4;
    let oy = null,
      By = null,
      Ky = null,
      ey = !1,
      qb = 0;
    const sy = new Map;
    let Sy = null;
    const Ey = new Map,
      ly = new Map;

    function mb(yb) {
      return new Promise(((bb, Wy) => {
        const Uy = new Image;
        Uy.crossOrigin = "anonymous", Uy.onload = () => {
          bb(Uy)
        }, Uy.onerror = () => {
          Wy(new Error(`A block icon's texture did not load: ${yb.slice(0,100)}`))
        }, Uy.src = yb
      }))
    }

    function Cy(yb) {
      var bb, Wy;
      ey || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${yb}`), ey = !0, null === (bb = oy) || void 0 === bb || bb.terminate(), oy = null, By = null, Ey.clear(), ly.clear();
      for (const Uy of sy.values()) Uy(null);
      sy.clear(), null === (Wy = Sy) || void 0 === Wy || Wy()
    }

    function Ty() {
      return Ky ??= async function() {
        if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
        if ("page" === Uy.e.ios_icon_worker_v1 && (0, hy.isWebKit)()) return;
        try {
          oy = await async function() {
            return await fy.ready(), fy.start()
          }()
        } catch (cb) {
          return void Cy(`did not start (${String(cb)})`)
        }
        let yb = () => {};
        const bb = new Promise((bb => {
          yb = bb
        }));
        oy.onmessage = bb => {
          let {
            data: Wy
          } = bb;
          if ("started" === Wy.type) By = oy, yb();
          else if ("failed" === Wy.type) Cy(`failed a draw (${Wy.message})`);
          else {
            var Uy, hy;
            null === (Uy = sy.get(Wy.id)) || void 0 === Uy || Uy(Wy.url), sy.delete(Wy.id), null === (hy = Sy) || void 0 === hy || hy()
          }
        }, oy.onerror = bb => {
          bb.preventDefault(), Cy(`stopped (${bb.message||"its script did not load or run"})`), yb()
        };
        const Wy = `did not start in ${Py/1e3} s`;
        await (0, Zy.h)(bb, Py, Wy).catch((() => {
          Cy(Wy)
        }))
      }(), Ky
    }

    function Vy() {
      if (null !== Sy || 0 === sy.size) return;
      const yb = new Promise((yb => {
          Sy = yb
        })),
        bb = `did not answer in ${cb/1e3} s`;
      (0, Zy.h)(yb, cb, bb).then((() => {
        Sy = null, Vy()
      }), (() => {
        Sy = null, Cy(bb)
      }))
    }

    function Jy(yb, bb) {
      let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      yb.postMessage(bb, Wy)
    }

    function gb(yb, bb, Wy, Uy) {
      let hy = bb.get(Wy);
      return void 0 === hy && (hy = Uy().then((async bb => {
        let {
          image: Wy,
          request: Uy
        } = bb;
        try {
          const bb = await createImageBitmap(Wy);
          Jy(yb, Uy(bb), [bb])
        } catch (hy) {
          Cy(`could not take an image (${String(hy)})`)
        }
      })), hy.catch((() => {
        bb.get(Wy) === hy && bb.delete(Wy)
      })), bb.set(Wy, hy)), hy
    }
    async function Gy(yb, bb) {
      Ty();
      const Wy = By;
      if (null === Wy) return null;
      if (await yb(Wy), By !== Wy) return null;
      const Uy = ++qb;
      return new Promise((yb => {
        sy.set(Uy, yb), Jy(Wy, bb(Uy)), Vy()
      }))
    }

    function Oy(yb, bb, Wy) {
      return Gy((bb => Promise.all([yb.top, yb.left, yb.right].map((yb => function(yb, bb) {
        return gb(yb, Ey, bb, (async () => ({
          image: await mb(bb),
          request: yb => ({
            type: "texture",
            url: bb,
            bitmap: yb
          })
        })))
      }(bb, yb))))), (Uy => ({
        type: "draw",
        id: Uy,
        ...yb,
        size: bb,
        outlineWidth: Wy
      })))
    }

    function Ry(yb, bb, Wy, Uy) {
      return Gy((Wy => function(yb, bb, Wy) {
        return gb(yb, ly, bb, (async () => {
          const {
            texture: yb,
            ...Uy
          } = await Wy();
          return {
            image: await mb(yb),
            request: yb => ({
              type: "model",
              name: bb,
              bitmap: yb,
              geometry: Uy
            })
          }
        }))
      }(Wy, yb, bb)), (bb => ({
        type: "drawModel",
        id: bb,
        name: yb,
        size: Wy,
        outlineWidth: Uy
      })))
    }
  },
  35215: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => fy,
      d: () => cb,
      f: () => Zy
    });
    const Uy = 1 / 32,
      hy = [15, 15, 15],
      fy = {
        top: 1,
        left: .85,
        right: .7
      };

    function Zy(yb, bb, Wy, hy) {
      const {
        vertices: fy,
        uvs: Zy,
        indices: Py,
        shades: oy
      } = yb, By = Wy * Uy, Ky = Wy - 2 * By, ey = new Float32Array(fy.length);
      for (let Uy = 0; Uy < fy.length; Uy += 3) ey[Uy] = By + fy[Uy] * Ky, ey[Uy + 1] = By + fy[Uy + 1] * Ky, ey[Uy + 2] = fy[Uy + 2];
      const qb = new Float32Array(Wy * Wy).fill(-1 / 0),
        sy = new Uint8ClampedArray(Wy * Wy * 4),
        Sy = 255 * yb.alphaCutoff;
      for (let Uy = 0; Uy < Py.length; Uy += 3) {
        const [yb, hy, fy] = [Py[Uy], Py[Uy + 1], Py[Uy + 2]], [cb, By, Ky] = [3 * yb, 3 * hy, 3 * fy], [Ey, ly, mb, Cy, Ty, Vy] = [ey[cb], ey[cb + 1], ey[By], ey[By + 1], ey[Ky], ey[Ky + 1]], Jy = (mb - Ey) * (Vy - ly) - (Ty - Ey) * (Cy - ly);
        if (Math.abs(Jy) < 1e-9) continue;
        const gb = oy[Uy / 3],
          [Gy, Oy, Ry, vb, ib, My] = [Zy[2 * yb], Zy[2 * yb + 1], Zy[2 * hy], Zy[2 * hy + 1], Zy[2 * fy], Zy[2 * fy + 1]],
          Yy = Math.max(0, Math.floor(Math.min(Ey, mb, Ty))),
          Xy = Math.min(Wy - 1, Math.ceil(Math.max(Ey, mb, Ty))),
          ny = Math.max(0, Math.floor(Math.min(ly, Cy, Vy))),
          uy = Math.min(Wy - 1, Math.ceil(Math.max(ly, Cy, Vy)));
        for (let Uy = ny; Uy <= uy; Uy++)
          for (let yb = Yy; yb <= Xy; yb++) {
            const [hy, fy] = [yb + .5, Uy + .5], Zy = ((hy - Ey) * (Vy - ly) - (Ty - Ey) * (fy - ly)) / Jy, Py = ((mb - Ey) * (fy - ly) - (hy - Ey) * (Cy - ly)) / Jy, oy = 1 - Zy - Py;
            if (oy < 0 || Zy < 0 || Py < 0) continue;
            const Yy = oy * ey[cb + 2] + Zy * ey[By + 2] + Py * ey[Ky + 2],
              Xy = Uy * Wy + yb;
            if (Yy <= qb[Xy]) continue;
            const ny = Math.max(0, Math.min(bb.width - 1, Math.floor((oy * Gy + Zy * Ry + Py * ib) * bb.width))),
              uy = 4 * (Math.max(0, Math.min(bb.height - 1, Math.floor((oy * Oy + Zy * vb + Py * My) * bb.height))) * bb.width + ny);
            bb.pixels[uy + 3] < Sy || (qb[Xy] = Yy, sy[4 * Xy] = bb.pixels[uy] * gb, sy[4 * Xy + 1] = bb.pixels[uy + 1] * gb, sy[4 * Xy + 2] = bb.pixels[uy + 2] * gb, sy[4 * Xy + 3] = 255)
          }
      }
      return cb(sy, Wy, hy), sy
    }

    function cb(yb, bb, Wy) {
      let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : bb => 0 !== yb[4 * bb + 3];
      const fy = (yb, Wy) => yb < 0 || Wy < 0 || yb >= bb || Wy >= bb || !Uy(Wy * bb + yb),
        Zy = [];
      for (let hy = 0; hy < bb; hy++)
        for (let yb = 0; yb < bb; yb++)
          if (!fy(yb, hy)) yb: for (let Uy = -Wy; Uy <= Wy; Uy++) {
            const cb = Wy - Math.abs(Uy);
            for (let Wy = -cb; Wy <= cb; Wy++)
              if (fy(yb + Wy, hy + Uy)) {
                Zy.push(hy * bb + yb);
                break yb
              }
          }
      for (const cb of Zy) yb.set(hy, 4 * cb), yb[4 * cb + 3] = 255
    }
  },
  35226: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => hy
    });
    const Uy = {
      wait: function(yb) {
        return new Promise((bb => {
          setTimeout(bb, yb)
        }))
      },
      stallMs: 2e4
    };
    class hy {
      constructor(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Uy;
        this.url = yb, this.options = bb, this.timing = Wy, this.fetched = null, this.scriptUrl = void 0, this.scriptUrl = yb
      }
      ready() {
        return this.fetched ??= this.fetchWithRetries(), this.fetched
      }
      start() {
        return new Worker(this.scriptUrl, this.options)
      }
      async fetchWithRetries() {
        for (let yb = 0;; yb++) {
          const bb = new URL(this.url);
          if (yb > 0 && bb.searchParams.set("cache-bust", `${Date.now()}-${yb}`), await this.fetchWhole(bb)) return void(this.scriptUrl = bb);
          if (yb >= 3) return;
          await this.timing.wait(500 * 2 ** yb)
        }
      }
      async fetchWhole(yb) {
        const bb = new AbortController;
        let Wy;
        const Uy = () => {
          clearTimeout(Wy), Wy = setTimeout((() => {
            bb.abort()
          }), this.timing.stallMs)
        };
        Uy();
        try {
          var hy;
          const Wy = await fetch(yb, {
            signal: bb.signal
          });
          if (!Wy.ok) return !1;
          const fy = null === (hy = Wy.body) || void 0 === hy ? void 0 : hy.getReader();
          if (!fy) return !1;
          for (;;) {
            const {
              done: yb
            } = await fy.read();
            if (yb) return !0;
            Uy()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(Wy)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);