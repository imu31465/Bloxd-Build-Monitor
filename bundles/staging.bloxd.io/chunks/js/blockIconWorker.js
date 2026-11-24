(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var kk = __webpack_require__.u,
        Fk = __webpack_require__.e,
        Ik = {},
        Xk = {};
      __webpack_require__.u = function(Fk) {
        return kk(Fk) + (Ik.hasOwnProperty(Fk) ? "?" + Ik[Fk] : "")
      }, __webpack_require__.e = function(Tk) {
        return Fk(Tk).catch((function(Fk) {
          var ik = Xk.hasOwnProperty(Tk) ? Xk[Tk] : 4;
          if (ik < 1) {
            var yk = kk(Tk);
            throw Fk.message = "Loading chunk " + Tk + " failed after 4 retries.\n(" + yk + ")", Fk.request = yk, Ik[Tk] = "cache-bust=" + Date.now(), setTimeout((function() {
              delete Xk[Tk]
            }), 0), Fk
          }
          return new Promise((function(kk) {
            var Fk = 4 - ik + 1;
            setTimeout((function() {
              var Fk = "cache-bust=" + Date.now();
              Ik[Tk] = Fk, Xk[Tk] = ik - 1, kk(__webpack_require__.e(Tk))
            }), function(kk) {
              return 500 * Math.pow(2, kk)
            }(Fk))
          }))
        }))
      }
    }
  })();
  const kk = Math.SQRT1_2,
    Fk = Math.SQRT1_2 / 2,
    Ik = Math.sqrt(3) / 2,
    Xk = 2 * kk,
    Tk = 2 * Fk + Ik;

  function ik(Fk, Ik) {
    const Xk = Ik > 0 ? Ik + 1 : 0,
      ik = .6 * Fk - Ik / kk;
    return Math.max(0, Math.min(ik, (Fk - 2 * Xk) / Tk))
  }
  const yk = [15, 15, 15],
    lk = {
      top: 1,
      left: .85,
      right: .7
    };

  function ak(kk, Fk, Ik, yk) {
    const {
      vertices: lk,
      uvs: ak,
      indices: qk,
      shades: Lk
    } = kk, Zk = function(kk, Fk) {
      const Ik = ik(kk, Fk),
        yk = Xk * Ik,
        lk = Tk * Ik;
      return {
        left: (kk - yk) / 2,
        top: (kk - lk) / 2,
        width: yk,
        height: lk
      }
    }(Ik, yk), jk = new Float32Array(lk.length);
    for (let Xk = 0; Xk < lk.length; Xk += 3) jk[Xk] = Zk.left + lk[Xk] * Zk.width, jk[Xk + 1] = Zk.top + lk[Xk + 1] * Zk.height, jk[Xk + 2] = lk[Xk + 2];
    const ek = new Float32Array(Ik * Ik).fill(-1 / 0),
      wk = new Uint8ClampedArray(Ik * Ik * 4),
      Hk = 255 * kk.alphaCutoff;
    for (let Xk = 0; Xk < qk.length; Xk += 3) {
      const [kk, Tk, ik] = [qk[Xk], qk[Xk + 1], qk[Xk + 2]], [yk, lk, tk] = [3 * kk, 3 * Tk, 3 * ik], [Zk, Jk, xk, Pk, Kk, Qk] = [jk[yk], jk[yk + 1], jk[lk], jk[lk + 1], jk[tk], jk[tk + 1]], sk = (xk - Zk) * (Qk - Jk) - (Kk - Zk) * (Pk - Jk);
      if (Math.abs(sk) < 1e-9) continue;
      const Vk = Lk[Xk / 3],
        [zk, Sk, vk, Ek, Ok, nk] = [ak[2 * kk], ak[2 * kk + 1], ak[2 * Tk], ak[2 * Tk + 1], ak[2 * ik], ak[2 * ik + 1]],
        Gk = Math.max(0, Math.floor(Math.min(Zk, xk, Kk))),
        pk = Math.min(Ik - 1, Math.ceil(Math.max(Zk, xk, Kk))),
        uk = Math.max(0, Math.floor(Math.min(Jk, Pk, Qk))),
        bk = Math.min(Ik - 1, Math.ceil(Math.max(Jk, Pk, Qk)));
      for (let Xk = uk; Xk <= bk; Xk++)
        for (let kk = Gk; kk <= pk; kk++) {
          const [Tk, ik] = [kk + .5, Xk + .5], ak = ((Tk - Zk) * (Qk - Jk) - (Kk - Zk) * (ik - Jk)) / sk, qk = ((xk - Zk) * (ik - Jk) - (Tk - Zk) * (Pk - Jk)) / sk, Lk = 1 - ak - qk;
          if (Lk < 0 || ak < 0 || qk < 0) continue;
          const Gk = Lk * jk[yk + 2] + ak * jk[lk + 2] + qk * jk[tk + 2],
            pk = Xk * Ik + kk;
          if (Gk <= ek[pk]) continue;
          const uk = Math.max(0, Math.min(Fk.width - 1, Math.floor((Lk * zk + ak * vk + qk * Ok) * Fk.width))),
            bk = 4 * (Math.max(0, Math.min(Fk.height - 1, Math.floor((Lk * Sk + ak * Ek + qk * nk) * Fk.height))) * Fk.width + uk);
          Fk.pixels[bk + 3] < Hk || (ek[pk] = Gk, wk[4 * pk] = Fk.pixels[bk] * Vk, wk[4 * pk + 1] = Fk.pixels[bk + 1] * Vk, wk[4 * pk + 2] = Fk.pixels[bk + 2] * Vk, wk[4 * pk + 3] = 255)
        }
    }
    return tk(wk, Ik, yk), wk
  }
  let qk = NaN,
    Lk = new Int32Array(0);

  function tk(kk, Fk, Ik) {
    let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Fk => 0 !== kk[4 * Fk + 3];
    const Tk = new Uint8Array(Fk * Fk);
    for (let yk = 0; yk < Fk * Fk; yk++) Tk[yk] = Xk(yk) ? 1 : 0;
    const ik = (kk, Ik) => kk >= 0 && Ik >= 0 && kk < Fk && Ik < Fk && 0 === Tk[Ik * Fk + kk],
      lk = new Float32Array(Fk * Fk).fill(1 / 0),
      ak = function(kk) {
        if (kk !== qk) {
          const Fk = Math.ceil(kk + 1),
            Ik = [];
          for (let Xk = -Fk; Xk <= Fk; Xk++)
            for (let Tk = -Fk; Tk <= Fk; Tk++) {
              const Fk = Tk * Tk + Xk * Xk;
              Fk > 0 && Fk < (kk + 1) ** 2 && Ik.push(Tk, Xk, Fk)
            }
          qk = kk, Lk = Int32Array.from(Ik)
        }
        return Lk
      }(Ik);
    for (let yk = 0; yk < Fk; yk++)
      for (let kk = 0; kk < Fk; kk++) {
        if (1 === Tk[yk * Fk + kk] && (ik(kk - 1, yk) || ik(kk + 1, yk) || ik(kk, yk - 1) || ik(kk, yk + 1)))
          for (let Ik = 0; Ik < ak.length; Ik += 3) {
            const Xk = kk + ak[Ik],
              Tk = yk + ak[Ik + 1];
            if (Xk >= 0 && Tk >= 0 && Xk < Fk && Tk < Fk) {
              const kk = Tk * Fk + Xk;
              lk[kk] = Math.min(lk[kk], ak[Ik + 2])
            }
          }
      }
    for (let qk = 0; qk < Fk * Fk; qk++) 1 !== Tk[qk] && lk[qk] !== 1 / 0 && (kk.set(yk, 4 * qk), kk[4 * qk + 3] = Math.round(255 * Math.min(1, Ik + 1 - Math.sqrt(lk[qk]))))
  }
  const Zk = {
      boxes: [
        [0, 0, 0, 1, 1, 1]
      ],
      cropFaces: !1
    },
    jk = {
      boxes: [
        [0, 0, 0, 1, .5, 1]
      ],
      cropFaces: !1
    },
    ek = {
      boxes: [
        [0, 0, 0, 1, .5, 1],
        [0, .5, 0, .5, 1, 1]
      ],
      cropFaces: !0
    };
  const wk = 1e-6;

  function Hk(kk, Fk, Ik, Xk) {
    let {
      origin: Tk,
      across: ik,
      down: yk,
      texture: lk,
      rect: [ak, qk, Lk, tk],
      shade: Zk
    } = Xk;
    const jk = ik.x * yk.y - ik.y * yk.x;
    if (Math.abs(jk) < 1e-9) return;
    const ek = [Tk.x, Tk.x + ik.x, Tk.x + yk.x, Tk.x + ik.x + yk.x],
      Hk = [Tk.y, Tk.y + ik.y, Tk.y + yk.y, Tk.y + ik.y + yk.y],
      Jk = Math.max(0, Math.floor(Math.min(...ek))),
      xk = Math.min(Ik - 1, Math.ceil(Math.max(...ek))),
      Pk = Math.max(0, Math.floor(Math.min(...Hk))),
      Kk = Math.min(Ik - 1, Math.ceil(Math.max(...Hk)));
    for (let Qk = Pk; Qk <= Kk; Qk++)
      for (let Xk = Jk; Xk <= xk; Xk++) {
        const ek = Xk + .5 - Tk.x,
          Hk = Qk + .5 - Tk.y,
          Jk = (ek * yk.y - Hk * yk.x) / jk,
          xk = (ik.x * Hk - ik.y * ek) / jk;
        if (Jk < -wk || Jk > 1 + wk || xk < -wk || xk > 1 + wk) continue;
        const Pk = Qk * Ik + Xk;
        Fk[Pk] = 1;
        const Kk = ak + Math.min(Math.max(Jk, 0), 1) * (Lk - ak),
          sk = qk + Math.min(Math.max(xk, 0), 1) * (tk - qk),
          Vk = Math.min(lk.width - 1, Math.floor(Kk * lk.width)),
          zk = 4 * (Math.min(lk.height - 1, Math.floor(sk * lk.height)) * lk.width + Vk),
          Sk = lk.pixels[zk + 3] / 255;
        if (0 === Sk) continue;
        const vk = 4 * Pk,
          Ek = kk[vk + 3] / 255 * (1 - Sk),
          Ok = Sk + Ek;
        for (let Fk = 0; Fk < 3; Fk++) kk[vk + Fk] = (lk.pixels[zk + Fk] * Zk * Sk + kk[vk + Fk] * Ek) / Ok;
        kk[vk + 3] = 255 * Ok
      }
  }

  function Jk(kk, Fk, Ik) {
    const Xk = kk.get(Fk);
    if (void 0 === Xk) throw new Error(`no ${Ik} was sent for ${Fk.slice(0,100)}`);
    return Xk
  }
  const xk = {
      pixelsOf(kk) {
        const Fk = new OffscreenCanvas(kk.width, kk.height),
          Ik = Fk.getContext("2d");
        if (!Ik) throw new Error("no 2D context");
        return Ik.drawImage(kk, 0, 0), kk.close(), {
          width: Fk.width,
          height: Fk.height,
          pixels: Ik.getImageData(0, 0, Fk.width, Fk.height).data
        }
      },
      async encode(kk, Fk) {
        const Ik = new OffscreenCanvas(Fk, Fk),
          Xk = Ik.getContext("2d");
        if (!Xk) throw new Error("no 2D context");
        Xk.putImageData(new ImageData(kk, Fk, Fk), 0, 0);
        const Tk = await Ik.convertToBlob();
        return new Promise(((kk, Fk) => {
          const Ik = new FileReader;
          Ik.onload = () => {
            kk(Ik.result)
          }, Ik.onerror = () => {
            var kk;
            Fk(null !== (kk = Ik.error) && void 0 !== kk ? kk : new Error("the icon did not encode"))
          }, Ik.readAsDataURL(Tk)
        }))
      }
    },
    Pk = globalThis.WorkerGlobalScope;
  void 0 !== Pk && globalThis instanceof Pk && function(Xk, Tk) {
    const yk = new Map,
      qk = new Map,
      Lk = (kk, Fk, Ik) => {
        (async () => {
          try {
            Xk.postMessage({
              type: "drawn",
              id: kk,
              url: await Tk.encode(Ik(), Fk)
            })
          } catch (ik) {
            Xk.postMessage({
              type: "failed",
              message: String(ik)
            })
          }
        })()
      };
    Xk.onmessage = Xk => {
      let {
        data: wk
      } = Xk;
      if ("texture" === wk.type) yk.set(wk.url, Tk.pixelsOf(wk.bitmap));
      else if ("model" === wk.type) qk.set(wk.name, {
        geometry: wk.geometry,
        texture: Tk.pixelsOf(wk.bitmap)
      });
      else if ("draw" === wk.type) {
        const {
          id: Xk,
          top: Tk,
          left: ak,
          right: qk,
          itemType: xk,
          size: Pk,
          outlineWidth: Kk
        } = wk;
        Lk(Xk, Pk, (() => function(Xk, Tk, yk, ak) {
          const qk = ik(yk, ak),
            Lk = qk * kk,
            Zk = qk * Fk,
            jk = qk * Ik,
            ek = Math.max(...Tk.boxes.map((kk => kk[4]))),
            wk = yk / 2,
            Jk = Zk + (yk - Zk - Zk - ek * jk) / 2,
            xk = (kk, Fk, Ik) => ({
              x: wk + (kk - Ik) * Lk,
              y: Jk - Zk + (kk + Ik) * Zk + (ek - Fk) * jk
            }),
            Pk = (kk, Fk, Ik, Xk, ik, yk) => ({
              origin: kk,
              across: {
                x: Fk.x - kk.x,
                y: Fk.y - kk.y
              },
              down: {
                x: Ik.x - kk.x,
                y: Ik.y - kk.y
              },
              texture: Xk,
              rect: Tk.cropFaces ? ik : [0, 0, 1, 1],
              shade: yk
            }),
            Kk = new Uint8ClampedArray(yk * yk * 4),
            Qk = new Uint8Array(yk * yk),
            sk = lk;
          for (const [kk, Fk, Ik, ik, lk, tk] of Tk.boxes) {
            const Tk = Pk(xk(ik, lk, tk), xk(ik, lk, Ik), xk(ik, Fk, tk), Xk.right, [1 - tk, 1 - lk, 1 - Ik, 1 - Fk], sk.right),
              ak = Pk(xk(kk, lk, tk), xk(ik, lk, tk), xk(kk, Fk, tk), Xk.left, [kk, 1 - lk, ik, 1 - Fk], sk.left),
              qk = Pk(xk(kk, lk, Ik), xk(ik, lk, Ik), xk(kk, lk, tk), Xk.top, [kk, Ik, ik, tk], sk.top);
            for (const kk of [Tk, ak, qk]) Hk(Kk, Qk, yk, kk)
          }
          return tk(Kk, yk, ak, (kk => 1 === Qk[kk])), Kk
        }({
          top: Jk(yk, Tk, "texture"),
          left: Jk(yk, ak, "texture"),
          right: Jk(yk, qk, "texture")
        }, function(kk) {
          return "SlabBlock" === kk ? jk : "StairsBlock" === kk ? ek : Zk
        }(xk), Pk, Kk)))
      } else {
        const {
          id: kk,
          name: Fk,
          size: Ik,
          outlineWidth: Xk
        } = wk;
        Lk(kk, Ik, (() => {
          const {
            geometry: kk,
            texture: Tk
          } = Jk(qk, Fk, "model");
          return ak(kk, Tk, Ik, Xk)
        }))
      }
    }, Xk.postMessage({
      type: "started"
    })
  }(globalThis, xk)
})();