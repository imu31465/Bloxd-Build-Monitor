(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var kk = __webpack_require__.u,
        Fk = __webpack_require__.e,
        Bk = {},
        Rk = {};
      __webpack_require__.u = function(Fk) {
        return kk(Fk) + (Bk.hasOwnProperty(Fk) ? "?" + Bk[Fk] : "")
      }, __webpack_require__.e = function(tk) {
        return Fk(tk).catch((function(Fk) {
          var ak = Rk.hasOwnProperty(tk) ? Rk[tk] : 4;
          if (ak < 1) {
            var Xk = kk(tk);
            throw Fk.message = "Loading chunk " + tk + " failed after 4 retries.\n(" + Xk + ")", Fk.request = Xk, Bk[tk] = "cache-bust=" + Date.now(), setTimeout((function() {
              delete Rk[tk]
            }), 0), Fk
          }
          return new Promise((function(kk) {
            var Fk = 4 - ak + 1;
            setTimeout((function() {
              var Fk = "cache-bust=" + Date.now();
              Bk[tk] = Fk, Rk[tk] = ak - 1, kk(__webpack_require__.e(tk))
            }), function(kk) {
              return 500 * Math.pow(2, kk)
            }(Fk))
          }))
        }))
      }
    }
  })();
  const kk = [15, 15, 15],
    Fk = {
      top: 1,
      left: .85,
      right: .7
    };

  function Bk(Fk, Bk, Rk) {
    let tk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : kk => 0 !== Fk[4 * kk + 3];
    const ak = (kk, Fk) => kk < 0 || Fk < 0 || kk >= Bk || Fk >= Bk || !tk(Fk * Bk + kk),
      Xk = [];
    for (let kk = 0; kk < Bk; kk++)
      for (let Fk = 0; Fk < Bk; Fk++)
        if (!ak(Fk, kk)) kk: for (let tk = -Rk; tk <= Rk; tk++) {
          const bk = Rk - Math.abs(tk);
          for (let Rk = -bk; Rk <= bk; Rk++)
            if (ak(Fk + Rk, kk + tk)) {
              Xk.push(kk * Bk + Fk);
              break kk
            }
        }
    for (const bk of Xk) Fk.set(kk, 4 * bk), Fk[4 * bk + 3] = 255
  }
  const Rk = Math.SQRT1_2,
    tk = Math.sqrt(3) / 2,
    ak = {
      boxes: [
        [0, 0, 0, 1, 1, 1]
      ],
      cropFaces: !1
    },
    Xk = {
      boxes: [
        [0, 0, 0, 1, .5, 1]
      ],
      cropFaces: !1
    },
    bk = {
      boxes: [
        [0, 0, 0, 1, .5, 1],
        [0, .5, 0, .5, 1, 1]
      ],
      cropFaces: !0
    };
  const wk = 1e-6;

  function dk(kk, Fk, Bk, Rk) {
    let {
      origin: tk,
      across: ak,
      down: Xk,
      texture: bk,
      rect: [dk, sk, Vk, Jk],
      shade: Ak
    } = Rk;
    const ek = ak.x * Xk.y - ak.y * Xk.x;
    if (Math.abs(ek) < 1e-9) return;
    const yk = [tk.x, tk.x + ak.x, tk.x + Xk.x, tk.x + ak.x + Xk.x],
      fk = [tk.y, tk.y + ak.y, tk.y + Xk.y, tk.y + ak.y + Xk.y],
      mk = Math.max(0, Math.floor(Math.min(...yk))),
      Wk = Math.min(Bk - 1, Math.ceil(Math.max(...yk))),
      vk = Math.max(0, Math.floor(Math.min(...fk))),
      ik = Math.min(Bk - 1, Math.ceil(Math.max(...fk)));
    for (let Yk = vk; Yk <= ik; Yk++)
      for (let Rk = mk; Rk <= Wk; Rk++) {
        const yk = Rk + .5 - tk.x,
          fk = Yk + .5 - tk.y,
          mk = (yk * Xk.y - fk * Xk.x) / ek,
          Wk = (ak.x * fk - ak.y * yk) / ek;
        if (mk < -wk || mk > 1 + wk || Wk < -wk || Wk > 1 + wk) continue;
        const vk = Yk * Bk + Rk;
        Fk[vk] = 1;
        const ik = dk + Math.min(Math.max(mk, 0), 1) * (Vk - dk),
          Lk = sk + Math.min(Math.max(Wk, 0), 1) * (Jk - sk),
          Ok = Math.min(bk.width - 1, Math.floor(ik * bk.width)),
          Ek = 4 * (Math.min(bk.height - 1, Math.floor(Lk * bk.height)) * bk.width + Ok),
          Sk = bk.pixels[Ek + 3] / 255;
        if (0 === Sk) continue;
        const Nk = 4 * vk,
          Hk = kk[Nk + 3] / 255 * (1 - Sk),
          uk = Sk + Hk;
        for (let Fk = 0; Fk < 3; Fk++) kk[Nk + Fk] = (bk.pixels[Ek + Fk] * Ak * Sk + kk[Nk + Fk] * Hk) / uk;
        kk[Nk + 3] = 255 * uk
      }
  }

  function sk(kk, Fk, Bk) {
    const Rk = kk.get(Fk);
    if (void 0 === Rk) throw new Error(`no ${Bk} was sent for ${Fk.slice(0,100)}`);
    return Rk
  }
  const Vk = {
      pixelsOf(kk) {
        const Fk = new OffscreenCanvas(kk.width, kk.height),
          Bk = Fk.getContext("2d");
        if (!Bk) throw new Error("no 2D context");
        return Bk.drawImage(kk, 0, 0), kk.close(), {
          width: Fk.width,
          height: Fk.height,
          pixels: Bk.getImageData(0, 0, Fk.width, Fk.height).data
        }
      },
      async encode(kk, Fk) {
        const Bk = new OffscreenCanvas(Fk, Fk),
          Rk = Bk.getContext("2d");
        if (!Rk) throw new Error("no 2D context");
        Rk.putImageData(new ImageData(kk, Fk, Fk), 0, 0);
        const tk = await Bk.convertToBlob();
        return new Promise(((kk, Fk) => {
          const Bk = new FileReader;
          Bk.onload = () => {
            kk(Bk.result)
          }, Bk.onerror = () => {
            var kk;
            Fk(null !== (kk = Bk.error) && void 0 !== kk ? kk : new Error("the icon did not encode"))
          }, Bk.readAsDataURL(tk)
        }))
      }
    },
    Jk = globalThis.WorkerGlobalScope;
  void 0 !== Jk && globalThis instanceof Jk && function(kk, wk) {
    const Vk = new Map,
      Jk = new Map,
      Ak = (Fk, Bk, Rk) => {
        (async () => {
          try {
            kk.postMessage({
              type: "drawn",
              id: Fk,
              url: await wk.encode(Rk(), Bk)
            })
          } catch (tk) {
            kk.postMessage({
              type: "failed",
              message: String(tk)
            })
          }
        })()
      };
    kk.onmessage = kk => {
      let {
        data: ek
      } = kk;
      if ("texture" === ek.type) Vk.set(ek.url, wk.pixelsOf(ek.bitmap));
      else if ("model" === ek.type) Jk.set(ek.name, {
        geometry: ek.geometry,
        texture: wk.pixelsOf(ek.bitmap)
      });
      else if ("draw" === ek.type) {
        const {
          id: kk,
          top: wk,
          left: Jk,
          right: yk,
          itemType: fk,
          size: mk,
          outlineWidth: Wk
        } = ek;
        Ak(kk, mk, (() => function(kk, ak, Xk, bk) {
          const wk = .6 * Xk,
            sk = wk * Rk,
            Vk = wk * Rk * .5,
            Jk = wk * tk,
            Ak = Math.max(...ak.boxes.map((kk => kk[4]))),
            ek = sk / 2 + (Xk - sk) / 2,
            yk = Vk + (Xk - Vk - Vk - Ak * Jk) / 2,
            fk = (kk, Fk, Bk) => ({
              x: ek + (kk - Bk) * sk,
              y: yk - Vk + (kk + Bk) * Vk + (Ak - Fk) * Jk
            }),
            mk = (kk, Fk, Bk, Rk, tk, Xk) => ({
              origin: kk,
              across: {
                x: Fk.x - kk.x,
                y: Fk.y - kk.y
              },
              down: {
                x: Bk.x - kk.x,
                y: Bk.y - kk.y
              },
              texture: Rk,
              rect: ak.cropFaces ? tk : [0, 0, 1, 1],
              shade: Xk
            }),
            Wk = new Uint8ClampedArray(Xk * Xk * 4),
            vk = new Uint8Array(Xk * Xk),
            ik = Fk;
          for (const [Fk, Bk, Rk, tk, Yk, Lk] of ak.boxes) {
            const ak = mk(fk(tk, Yk, Lk), fk(tk, Yk, Rk), fk(tk, Bk, Lk), kk.right, [1 - Lk, 1 - Yk, 1 - Rk, 1 - Bk], ik.right),
              bk = mk(fk(Fk, Yk, Lk), fk(tk, Yk, Lk), fk(Fk, Bk, Lk), kk.left, [Fk, 1 - Yk, tk, 1 - Bk], ik.left),
              wk = mk(fk(Fk, Yk, Rk), fk(tk, Yk, Rk), fk(Fk, Yk, Lk), kk.top, [Fk, Rk, tk, Lk], ik.top);
            for (const kk of [ak, bk, wk]) dk(Wk, vk, Xk, kk)
          }
          return Bk(Wk, Xk, bk, (kk => 1 === vk[kk])), Wk
        }({
          top: sk(Vk, wk, "texture"),
          left: sk(Vk, Jk, "texture"),
          right: sk(Vk, yk, "texture")
        }, function(kk) {
          return "SlabBlock" === kk ? Xk : "StairsBlock" === kk ? bk : ak
        }(fk), mk, Wk)))
      } else {
        const {
          id: kk,
          name: Fk,
          size: Rk,
          outlineWidth: tk
        } = ek;
        Ak(kk, Rk, (() => {
          const {
            geometry: kk,
            texture: ak
          } = sk(Jk, Fk, "model");
          return function(kk, Fk, Rk, tk) {
            const {
              vertices: ak,
              uvs: Xk,
              indices: bk,
              shades: wk
            } = kk, dk = .03125 * Rk, sk = Rk - 2 * dk, Vk = new Float32Array(ak.length);
            for (let Bk = 0; Bk < ak.length; Bk += 3) Vk[Bk] = dk + ak[Bk] * sk, Vk[Bk + 1] = dk + ak[Bk + 1] * sk, Vk[Bk + 2] = ak[Bk + 2];
            const Jk = new Float32Array(Rk * Rk).fill(-1 / 0),
              Ak = new Uint8ClampedArray(Rk * Rk * 4),
              ek = 255 * kk.alphaCutoff;
            for (let Bk = 0; Bk < bk.length; Bk += 3) {
              const [kk, tk, ak] = [bk[Bk], bk[Bk + 1], bk[Bk + 2]], [dk, sk, yk] = [3 * kk, 3 * tk, 3 * ak], [fk, mk, Wk, vk, ik, Yk] = [Vk[dk], Vk[dk + 1], Vk[sk], Vk[sk + 1], Vk[yk], Vk[yk + 1]], Lk = (Wk - fk) * (Yk - mk) - (ik - fk) * (vk - mk);
              if (Math.abs(Lk) < 1e-9) continue;
              const Ok = wk[Bk / 3],
                [Ek, Sk, Nk, Hk, uk, Mk] = [Xk[2 * kk], Xk[2 * kk + 1], Xk[2 * tk], Xk[2 * tk + 1], Xk[2 * ak], Xk[2 * ak + 1]],
                gk = Math.max(0, Math.floor(Math.min(fk, Wk, ik))),
                Uk = Math.min(Rk - 1, Math.ceil(Math.max(fk, Wk, ik))),
                ck = Math.max(0, Math.floor(Math.min(mk, vk, Yk))),
                Gk = Math.min(Rk - 1, Math.ceil(Math.max(mk, vk, Yk)));
              for (let Bk = ck; Bk <= Gk; Bk++)
                for (let kk = gk; kk <= Uk; kk++) {
                  const [tk, ak] = [kk + .5, Bk + .5], Xk = ((tk - fk) * (Yk - mk) - (ik - fk) * (ak - mk)) / Lk, bk = ((Wk - fk) * (ak - mk) - (tk - fk) * (vk - mk)) / Lk, wk = 1 - Xk - bk;
                  if (wk < 0 || Xk < 0 || bk < 0) continue;
                  const gk = wk * Vk[dk + 2] + Xk * Vk[sk + 2] + bk * Vk[yk + 2],
                    Uk = Bk * Rk + kk;
                  if (gk <= Jk[Uk]) continue;
                  const ck = Math.max(0, Math.min(Fk.width - 1, Math.floor((wk * Ek + Xk * Nk + bk * uk) * Fk.width))),
                    Gk = 4 * (Math.max(0, Math.min(Fk.height - 1, Math.floor((wk * Sk + Xk * Hk + bk * Mk) * Fk.height))) * Fk.width + ck);
                  Fk.pixels[Gk + 3] < ek || (Jk[Uk] = gk, Ak[4 * Uk] = Fk.pixels[Gk] * Ok, Ak[4 * Uk + 1] = Fk.pixels[Gk + 1] * Ok, Ak[4 * Uk + 2] = Fk.pixels[Gk + 2] * Ok, Ak[4 * Uk + 3] = 255)
                }
            }
            return Bk(Ak, Rk, tk), Ak
          }(kk, ak, Rk, tk)
        }))
      }
    }, kk.postMessage({
      type: "started"
    })
  }(globalThis, Vk)
})();