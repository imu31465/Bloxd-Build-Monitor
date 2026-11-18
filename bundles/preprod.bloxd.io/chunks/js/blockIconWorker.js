(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var yb = __webpack_require__.u,
        bb = __webpack_require__.e,
        Wy = {},
        Uy = {};
      __webpack_require__.u = function(bb) {
        return yb(bb) + (Wy.hasOwnProperty(bb) ? "?" + Wy[bb] : "")
      }, __webpack_require__.e = function(hy) {
        return bb(hy).catch((function(bb) {
          var fy = Uy.hasOwnProperty(hy) ? Uy[hy] : 4;
          if (fy < 1) {
            var Zy = yb(hy);
            throw bb.message = "Loading chunk " + hy + " failed after 4 retries.\n(" + Zy + ")", bb.request = Zy, Wy[hy] = "cache-bust=" + Date.now(), setTimeout((function() {
              delete Uy[hy]
            }), 0), bb
          }
          return new Promise((function(yb) {
            var bb = 4 - fy + 1;
            setTimeout((function() {
              var bb = "cache-bust=" + Date.now();
              Wy[hy] = bb, Uy[hy] = fy - 1, yb(__webpack_require__.e(hy))
            }), function(yb) {
              return 500 * Math.pow(2, yb)
            }(bb))
          }))
        }))
      }
    }
  })();
  const yb = [15, 15, 15],
    bb = {
      top: 1,
      left: .85,
      right: .7
    };

  function Wy(bb, Wy, Uy) {
    let hy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : yb => 0 !== bb[4 * yb + 3];
    const fy = (yb, bb) => yb < 0 || bb < 0 || yb >= Wy || bb >= Wy || !hy(bb * Wy + yb),
      Zy = [];
    for (let yb = 0; yb < Wy; yb++)
      for (let bb = 0; bb < Wy; bb++)
        if (!fy(bb, yb)) yb: for (let hy = -Uy; hy <= Uy; hy++) {
          const cb = Uy - Math.abs(hy);
          for (let Uy = -cb; Uy <= cb; Uy++)
            if (fy(bb + Uy, yb + hy)) {
              Zy.push(yb * Wy + bb);
              break yb
            }
        }
    for (const cb of Zy) bb.set(yb, 4 * cb), bb[4 * cb + 3] = 255
  }
  const Uy = Math.SQRT1_2,
    hy = Math.sqrt(3) / 2,
    fy = {
      boxes: [
        [0, 0, 0, 1, 1, 1]
      ],
      cropFaces: !1
    },
    Zy = {
      boxes: [
        [0, 0, 0, 1, .5, 1]
      ],
      cropFaces: !1
    },
    cb = {
      boxes: [
        [0, 0, 0, 1, .5, 1],
        [0, .5, 0, .5, 1, 1]
      ],
      cropFaces: !0
    };
  const Py = 1e-6;

  function oy(yb, bb, Wy, Uy) {
    let {
      origin: hy,
      across: fy,
      down: Zy,
      texture: cb,
      rect: [oy, By, Ky, ey],
      shade: qb
    } = Uy;
    const sy = fy.x * Zy.y - fy.y * Zy.x;
    if (Math.abs(sy) < 1e-9) return;
    const Sy = [hy.x, hy.x + fy.x, hy.x + Zy.x, hy.x + fy.x + Zy.x],
      Ey = [hy.y, hy.y + fy.y, hy.y + Zy.y, hy.y + fy.y + Zy.y],
      ly = Math.max(0, Math.floor(Math.min(...Sy))),
      mb = Math.min(Wy - 1, Math.ceil(Math.max(...Sy))),
      Cy = Math.max(0, Math.floor(Math.min(...Ey))),
      Ty = Math.min(Wy - 1, Math.ceil(Math.max(...Ey)));
    for (let Vy = Cy; Vy <= Ty; Vy++)
      for (let Uy = ly; Uy <= mb; Uy++) {
        const Sy = Uy + .5 - hy.x,
          Ey = Vy + .5 - hy.y,
          ly = (Sy * Zy.y - Ey * Zy.x) / sy,
          mb = (fy.x * Ey - fy.y * Sy) / sy;
        if (ly < -Py || ly > 1 + Py || mb < -Py || mb > 1 + Py) continue;
        const Cy = Vy * Wy + Uy;
        bb[Cy] = 1;
        const Ty = oy + Math.min(Math.max(ly, 0), 1) * (Ky - oy),
          Jy = By + Math.min(Math.max(mb, 0), 1) * (ey - By),
          gb = Math.min(cb.width - 1, Math.floor(Ty * cb.width)),
          Gy = 4 * (Math.min(cb.height - 1, Math.floor(Jy * cb.height)) * cb.width + gb),
          Oy = cb.pixels[Gy + 3] / 255;
        if (0 === Oy) continue;
        const Ry = 4 * Cy,
          vb = yb[Ry + 3] / 255 * (1 - Oy),
          ib = Oy + vb;
        for (let bb = 0; bb < 3; bb++) yb[Ry + bb] = (cb.pixels[Gy + bb] * qb * Oy + yb[Ry + bb] * vb) / ib;
        yb[Ry + 3] = 255 * ib
      }
  }

  function By(yb, bb, Wy) {
    const Uy = yb.get(bb);
    if (void 0 === Uy) throw new Error(`no ${Wy} was sent for ${bb.slice(0,100)}`);
    return Uy
  }
  const Ky = {
      pixelsOf(yb) {
        const bb = new OffscreenCanvas(yb.width, yb.height),
          Wy = bb.getContext("2d");
        if (!Wy) throw new Error("no 2D context");
        return Wy.drawImage(yb, 0, 0), yb.close(), {
          width: bb.width,
          height: bb.height,
          pixels: Wy.getImageData(0, 0, bb.width, bb.height).data
        }
      },
      async encode(yb, bb) {
        const Wy = new OffscreenCanvas(bb, bb),
          Uy = Wy.getContext("2d");
        if (!Uy) throw new Error("no 2D context");
        Uy.putImageData(new ImageData(yb, bb, bb), 0, 0);
        const hy = await Wy.convertToBlob();
        return new Promise(((yb, bb) => {
          const Wy = new FileReader;
          Wy.onload = () => {
            yb(Wy.result)
          }, Wy.onerror = () => {
            var yb;
            bb(null !== (yb = Wy.error) && void 0 !== yb ? yb : new Error("the icon did not encode"))
          }, Wy.readAsDataURL(hy)
        }))
      }
    },
    ey = globalThis.WorkerGlobalScope;
  void 0 !== ey && globalThis instanceof ey && function(yb, Py) {
    const Ky = new Map,
      ey = new Map,
      qb = (bb, Wy, Uy) => {
        (async () => {
          try {
            yb.postMessage({
              type: "drawn",
              id: bb,
              url: await Py.encode(Uy(), Wy)
            })
          } catch (hy) {
            yb.postMessage({
              type: "failed",
              message: String(hy)
            })
          }
        })()
      };
    yb.onmessage = yb => {
      let {
        data: sy
      } = yb;
      if ("texture" === sy.type) Ky.set(sy.url, Py.pixelsOf(sy.bitmap));
      else if ("model" === sy.type) ey.set(sy.name, {
        geometry: sy.geometry,
        texture: Py.pixelsOf(sy.bitmap)
      });
      else if ("draw" === sy.type) {
        const {
          id: yb,
          top: Py,
          left: ey,
          right: Sy,
          itemType: Ey,
          size: ly,
          outlineWidth: mb
        } = sy;
        qb(yb, ly, (() => function(yb, fy, Zy, cb) {
          const Py = .6 * Zy,
            By = Py * Uy,
            Ky = Py * Uy * .5,
            ey = Py * hy,
            qb = Math.max(...fy.boxes.map((yb => yb[4]))),
            sy = By / 2 + (Zy - By) / 2,
            Sy = Ky + (Zy - Ky - Ky - qb * ey) / 2,
            Ey = (yb, bb, Wy) => ({
              x: sy + (yb - Wy) * By,
              y: Sy - Ky + (yb + Wy) * Ky + (qb - bb) * ey
            }),
            ly = (yb, bb, Wy, Uy, hy, Zy) => ({
              origin: yb,
              across: {
                x: bb.x - yb.x,
                y: bb.y - yb.y
              },
              down: {
                x: Wy.x - yb.x,
                y: Wy.y - yb.y
              },
              texture: Uy,
              rect: fy.cropFaces ? hy : [0, 0, 1, 1],
              shade: Zy
            }),
            mb = new Uint8ClampedArray(Zy * Zy * 4),
            Cy = new Uint8Array(Zy * Zy),
            Ty = bb;
          for (const [bb, Wy, Uy, hy, Vy, Jy] of fy.boxes) {
            const fy = ly(Ey(hy, Vy, Jy), Ey(hy, Vy, Uy), Ey(hy, Wy, Jy), yb.right, [1 - Jy, 1 - Vy, 1 - Uy, 1 - Wy], Ty.right),
              cb = ly(Ey(bb, Vy, Jy), Ey(hy, Vy, Jy), Ey(bb, Wy, Jy), yb.left, [bb, 1 - Vy, hy, 1 - Wy], Ty.left),
              Py = ly(Ey(bb, Vy, Uy), Ey(hy, Vy, Uy), Ey(bb, Vy, Jy), yb.top, [bb, Uy, hy, Jy], Ty.top);
            for (const yb of [fy, cb, Py]) oy(mb, Cy, Zy, yb)
          }
          return Wy(mb, Zy, cb, (yb => 1 === Cy[yb])), mb
        }({
          top: By(Ky, Py, "texture"),
          left: By(Ky, ey, "texture"),
          right: By(Ky, Sy, "texture")
        }, function(yb) {
          return "SlabBlock" === yb ? Zy : "StairsBlock" === yb ? cb : fy
        }(Ey), ly, mb)))
      } else {
        const {
          id: yb,
          name: bb,
          size: Uy,
          outlineWidth: hy
        } = sy;
        qb(yb, Uy, (() => {
          const {
            geometry: yb,
            texture: fy
          } = By(ey, bb, "model");
          return function(yb, bb, Uy, hy) {
            const {
              vertices: fy,
              uvs: Zy,
              indices: cb,
              shades: Py
            } = yb, oy = .03125 * Uy, By = Uy - 2 * oy, Ky = new Float32Array(fy.length);
            for (let Wy = 0; Wy < fy.length; Wy += 3) Ky[Wy] = oy + fy[Wy] * By, Ky[Wy + 1] = oy + fy[Wy + 1] * By, Ky[Wy + 2] = fy[Wy + 2];
            const ey = new Float32Array(Uy * Uy).fill(-1 / 0),
              qb = new Uint8ClampedArray(Uy * Uy * 4),
              sy = 255 * yb.alphaCutoff;
            for (let Wy = 0; Wy < cb.length; Wy += 3) {
              const [yb, hy, fy] = [cb[Wy], cb[Wy + 1], cb[Wy + 2]], [oy, By, Sy] = [3 * yb, 3 * hy, 3 * fy], [Ey, ly, mb, Cy, Ty, Vy] = [Ky[oy], Ky[oy + 1], Ky[By], Ky[By + 1], Ky[Sy], Ky[Sy + 1]], Jy = (mb - Ey) * (Vy - ly) - (Ty - Ey) * (Cy - ly);
              if (Math.abs(Jy) < 1e-9) continue;
              const gb = Py[Wy / 3],
                [Gy, Oy, Ry, vb, ib, My] = [Zy[2 * yb], Zy[2 * yb + 1], Zy[2 * hy], Zy[2 * hy + 1], Zy[2 * fy], Zy[2 * fy + 1]],
                Yy = Math.max(0, Math.floor(Math.min(Ey, mb, Ty))),
                Xy = Math.min(Uy - 1, Math.ceil(Math.max(Ey, mb, Ty))),
                ny = Math.max(0, Math.floor(Math.min(ly, Cy, Vy))),
                uy = Math.min(Uy - 1, Math.ceil(Math.max(ly, Cy, Vy)));
              for (let Wy = ny; Wy <= uy; Wy++)
                for (let yb = Yy; yb <= Xy; yb++) {
                  const [hy, fy] = [yb + .5, Wy + .5], Zy = ((hy - Ey) * (Vy - ly) - (Ty - Ey) * (fy - ly)) / Jy, cb = ((mb - Ey) * (fy - ly) - (hy - Ey) * (Cy - ly)) / Jy, Py = 1 - Zy - cb;
                  if (Py < 0 || Zy < 0 || cb < 0) continue;
                  const Yy = Py * Ky[oy + 2] + Zy * Ky[By + 2] + cb * Ky[Sy + 2],
                    Xy = Wy * Uy + yb;
                  if (Yy <= ey[Xy]) continue;
                  const ny = Math.max(0, Math.min(bb.width - 1, Math.floor((Py * Gy + Zy * Ry + cb * ib) * bb.width))),
                    uy = 4 * (Math.max(0, Math.min(bb.height - 1, Math.floor((Py * Oy + Zy * vb + cb * My) * bb.height))) * bb.width + ny);
                  bb.pixels[uy + 3] < sy || (ey[Xy] = Yy, qb[4 * Xy] = bb.pixels[uy] * gb, qb[4 * Xy + 1] = bb.pixels[uy + 1] * gb, qb[4 * Xy + 2] = bb.pixels[uy + 2] * gb, qb[4 * Xy + 3] = 255)
                }
            }
            return Wy(qb, Uy, hy), qb
          }(yb, fy, Uy, hy)
        }))
      }
    }, yb.postMessage({
      type: "started"
    })
  }(globalThis, Ky)
})();