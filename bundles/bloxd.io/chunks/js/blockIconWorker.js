(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var kk = __webpack_require__.u,
        ek = __webpack_require__.e,
        ik = {},
        Dk = {};
      __webpack_require__.u = function(ek) {
        return kk(ek) + (ik.hasOwnProperty(ek) ? "?" + ik[ek] : "")
      }, __webpack_require__.e = function(fk) {
        return ek(fk).catch((function(ek) {
          var Sk = Dk.hasOwnProperty(fk) ? Dk[fk] : 4;
          if (Sk < 1) {
            var bk = kk(fk);
            throw ek.message = "Loading chunk " + fk + " failed after 4 retries.\n(" + bk + ")", ek.request = bk, ik[fk] = "cache-bust=" + Date.now(), setTimeout((function() {
              delete Dk[fk]
            }), 0), ek
          }
          return new Promise((function(kk) {
            var ek = 4 - Sk + 1;
            setTimeout((function() {
              var ek = "cache-bust=" + Date.now();
              ik[fk] = ek, Dk[fk] = Sk - 1, kk(__webpack_require__.e(fk))
            }), function(kk) {
              return 500 * Math.pow(2, kk)
            }(ek))
          }))
        }))
      }
    }
  })();
  const kk = [15, 15, 15],
    ek = {
      top: 1,
      left: .85,
      right: .7
    };

  function ik(ek, ik, Dk) {
    let fk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : kk => 0 !== ek[4 * kk + 3];
    const Sk = (kk, ek) => kk < 0 || ek < 0 || kk >= ik || ek >= ik || !fk(ek * ik + kk),
      bk = [];
    for (let kk = 0; kk < ik; kk++)
      for (let ek = 0; ek < ik; ek++)
        if (!Sk(ek, kk)) kk: for (let fk = -Dk; fk <= Dk; fk++) {
          const rk = Dk - Math.abs(fk);
          for (let Dk = -rk; Dk <= rk; Dk++)
            if (Sk(ek + Dk, kk + fk)) {
              bk.push(kk * ik + ek);
              break kk
            }
        }
    for (const rk of bk) ek.set(kk, 4 * rk), ek[4 * rk + 3] = 255
  }
  const Dk = Math.SQRT1_2,
    fk = Math.sqrt(3) / 2,
    Sk = {
      boxes: [
        [0, 0, 0, 1, 1, 1]
      ],
      cropFaces: !1
    },
    bk = {
      boxes: [
        [0, 0, 0, 1, .5, 1]
      ],
      cropFaces: !1
    },
    rk = {
      boxes: [
        [0, 0, 0, 1, .5, 1],
        [0, .5, 0, .5, 1, 1]
      ],
      cropFaces: !0
    };
  const Pk = 1e-6;

  function mk(kk, ek, ik, Dk) {
    let {
      origin: fk,
      across: Sk,
      down: bk,
      texture: rk,
      rect: [mk, Mk, Kk, xk],
      shade: nk
    } = Dk;
    const Uk = Sk.x * bk.y - Sk.y * bk.x;
    if (Math.abs(Uk) < 1e-9) return;
    const Hk = [fk.x, fk.x + Sk.x, fk.x + bk.x, fk.x + Sk.x + bk.x],
      wk = [fk.y, fk.y + Sk.y, fk.y + bk.y, fk.y + Sk.y + bk.y],
      lk = Math.max(0, Math.floor(Math.min(...Hk))),
      pk = Math.min(ik - 1, Math.ceil(Math.max(...Hk))),
      yk = Math.max(0, Math.floor(Math.min(...wk))),
      Yk = Math.min(ik - 1, Math.ceil(Math.max(...wk)));
    for (let Lk = yk; Lk <= Yk; Lk++)
      for (let Dk = lk; Dk <= pk; Dk++) {
        const Hk = Dk + .5 - fk.x,
          wk = Lk + .5 - fk.y,
          lk = (Hk * bk.y - wk * bk.x) / Uk,
          pk = (Sk.x * wk - Sk.y * Hk) / Uk;
        if (lk < -Pk || lk > 1 + Pk || pk < -Pk || pk > 1 + Pk) continue;
        const yk = Lk * ik + Dk;
        ek[yk] = 1;
        const Yk = mk + Math.min(Math.max(lk, 0), 1) * (Kk - mk),
          Ck = Mk + Math.min(Math.max(pk, 0), 1) * (xk - Mk),
          Ak = Math.min(rk.width - 1, Math.floor(Yk * rk.width)),
          jk = 4 * (Math.min(rk.height - 1, Math.floor(Ck * rk.height)) * rk.width + Ak),
          sk = rk.pixels[jk + 3] / 255;
        if (0 === sk) continue;
        const dk = 4 * yk,
          Vk = kk[dk + 3] / 255 * (1 - sk),
          Fk = sk + Vk;
        for (let ek = 0; ek < 3; ek++) kk[dk + ek] = (rk.pixels[jk + ek] * nk * sk + kk[dk + ek] * Vk) / Fk;
        kk[dk + 3] = 255 * Fk
      }
  }

  function Mk(kk, ek, ik) {
    const Dk = kk.get(ek);
    if (void 0 === Dk) throw new Error(`no ${ik} was sent for ${ek.slice(0,100)}`);
    return Dk
  }
  const Kk = {
      pixelsOf(kk) {
        const ek = new OffscreenCanvas(kk.width, kk.height),
          ik = ek.getContext("2d");
        if (!ik) throw new Error("no 2D context");
        return ik.drawImage(kk, 0, 0), kk.close(), {
          width: ek.width,
          height: ek.height,
          pixels: ik.getImageData(0, 0, ek.width, ek.height).data
        }
      },
      async encode(kk, ek) {
        const ik = new OffscreenCanvas(ek, ek),
          Dk = ik.getContext("2d");
        if (!Dk) throw new Error("no 2D context");
        Dk.putImageData(new ImageData(kk, ek, ek), 0, 0);
        const fk = await ik.convertToBlob();
        return new Promise(((kk, ek) => {
          const ik = new FileReader;
          ik.onload = () => {
            kk(ik.result)
          }, ik.onerror = () => {
            var kk;
            ek(null !== (kk = ik.error) && void 0 !== kk ? kk : new Error("the icon did not encode"))
          }, ik.readAsDataURL(fk)
        }))
      }
    },
    xk = globalThis.WorkerGlobalScope;
  void 0 !== xk && globalThis instanceof xk && function(kk, Pk) {
    const Kk = new Map,
      xk = new Map,
      nk = (ek, ik, Dk) => {
        (async () => {
          try {
            kk.postMessage({
              type: "drawn",
              id: ek,
              url: await Pk.encode(Dk(), ik)
            })
          } catch (fk) {
            kk.postMessage({
              type: "failed",
              message: String(fk)
            })
          }
        })()
      };
    kk.onmessage = kk => {
      let {
        data: Uk
      } = kk;
      if ("texture" === Uk.type) Kk.set(Uk.url, Pk.pixelsOf(Uk.bitmap));
      else if ("model" === Uk.type) xk.set(Uk.name, {
        geometry: Uk.geometry,
        texture: Pk.pixelsOf(Uk.bitmap)
      });
      else if ("draw" === Uk.type) {
        const {
          id: kk,
          top: Pk,
          left: xk,
          right: Hk,
          itemType: wk,
          size: lk,
          outlineWidth: pk
        } = Uk;
        nk(kk, lk, (() => function(kk, Sk, bk, rk) {
          const Pk = .6 * bk,
            Mk = Pk * Dk,
            Kk = Pk * Dk * .5,
            xk = Pk * fk,
            nk = Math.max(...Sk.boxes.map((kk => kk[4]))),
            Uk = Mk / 2 + (bk - Mk) / 2,
            Hk = Kk + (bk - Kk - Kk - nk * xk) / 2,
            wk = (kk, ek, ik) => ({
              x: Uk + (kk - ik) * Mk,
              y: Hk - Kk + (kk + ik) * Kk + (nk - ek) * xk
            }),
            lk = (kk, ek, ik, Dk, fk, bk) => ({
              origin: kk,
              across: {
                x: ek.x - kk.x,
                y: ek.y - kk.y
              },
              down: {
                x: ik.x - kk.x,
                y: ik.y - kk.y
              },
              texture: Dk,
              rect: Sk.cropFaces ? fk : [0, 0, 1, 1],
              shade: bk
            }),
            pk = new Uint8ClampedArray(bk * bk * 4),
            yk = new Uint8Array(bk * bk),
            Yk = ek;
          for (const [ek, ik, Dk, fk, Lk, Ck] of Sk.boxes) {
            const Sk = lk(wk(fk, Lk, Ck), wk(fk, Lk, Dk), wk(fk, ik, Ck), kk.right, [1 - Ck, 1 - Lk, 1 - Dk, 1 - ik], Yk.right),
              rk = lk(wk(ek, Lk, Ck), wk(fk, Lk, Ck), wk(ek, ik, Ck), kk.left, [ek, 1 - Lk, fk, 1 - ik], Yk.left),
              Pk = lk(wk(ek, Lk, Dk), wk(fk, Lk, Dk), wk(ek, Lk, Ck), kk.top, [ek, Dk, fk, Ck], Yk.top);
            for (const kk of [Sk, rk, Pk]) mk(pk, yk, bk, kk)
          }
          return ik(pk, bk, rk, (kk => 1 === yk[kk])), pk
        }({
          top: Mk(Kk, Pk, "texture"),
          left: Mk(Kk, xk, "texture"),
          right: Mk(Kk, Hk, "texture")
        }, function(kk) {
          return "SlabBlock" === kk ? bk : "StairsBlock" === kk ? rk : Sk
        }(wk), lk, pk)))
      } else {
        const {
          id: kk,
          name: ek,
          size: Dk,
          outlineWidth: fk
        } = Uk;
        nk(kk, Dk, (() => {
          const {
            geometry: kk,
            texture: Sk
          } = Mk(xk, ek, "model");
          return function(kk, ek, Dk, fk) {
            const {
              vertices: Sk,
              uvs: bk,
              indices: rk,
              shades: Pk
            } = kk, mk = .03125 * Dk, Mk = Dk - 2 * mk, Kk = new Float32Array(Sk.length);
            for (let ik = 0; ik < Sk.length; ik += 3) Kk[ik] = mk + Sk[ik] * Mk, Kk[ik + 1] = mk + Sk[ik + 1] * Mk, Kk[ik + 2] = Sk[ik + 2];
            const xk = new Float32Array(Dk * Dk).fill(-1 / 0),
              nk = new Uint8ClampedArray(Dk * Dk * 4),
              Uk = 255 * kk.alphaCutoff;
            for (let ik = 0; ik < rk.length; ik += 3) {
              const [kk, fk, Sk] = [rk[ik], rk[ik + 1], rk[ik + 2]], [mk, Mk, Hk] = [3 * kk, 3 * fk, 3 * Sk], [wk, lk, pk, yk, Yk, Lk] = [Kk[mk], Kk[mk + 1], Kk[Mk], Kk[Mk + 1], Kk[Hk], Kk[Hk + 1]], Ck = (pk - wk) * (Lk - lk) - (Yk - wk) * (yk - lk);
              if (Math.abs(Ck) < 1e-9) continue;
              const Ak = Pk[ik / 3],
                [jk, sk, dk, Vk, Fk, uk] = [bk[2 * kk], bk[2 * kk + 1], bk[2 * fk], bk[2 * fk + 1], bk[2 * Sk], bk[2 * Sk + 1]],
                qk = Math.max(0, Math.floor(Math.min(wk, pk, Yk))),
                Ik = Math.min(Dk - 1, Math.ceil(Math.max(wk, pk, Yk))),
                zk = Math.max(0, Math.floor(Math.min(lk, yk, Lk))),
                Qk = Math.min(Dk - 1, Math.ceil(Math.max(lk, yk, Lk)));
              for (let ik = zk; ik <= Qk; ik++)
                for (let kk = qk; kk <= Ik; kk++) {
                  const [fk, Sk] = [kk + .5, ik + .5], bk = ((fk - wk) * (Lk - lk) - (Yk - wk) * (Sk - lk)) / Ck, rk = ((pk - wk) * (Sk - lk) - (fk - wk) * (yk - lk)) / Ck, Pk = 1 - bk - rk;
                  if (Pk < 0 || bk < 0 || rk < 0) continue;
                  const qk = Pk * Kk[mk + 2] + bk * Kk[Mk + 2] + rk * Kk[Hk + 2],
                    Ik = ik * Dk + kk;
                  if (qk <= xk[Ik]) continue;
                  const zk = Math.max(0, Math.min(ek.width - 1, Math.floor((Pk * jk + bk * dk + rk * Fk) * ek.width))),
                    Qk = 4 * (Math.max(0, Math.min(ek.height - 1, Math.floor((Pk * sk + bk * Vk + rk * uk) * ek.height))) * ek.width + zk);
                  ek.pixels[Qk + 3] < Uk || (xk[Ik] = qk, nk[4 * Ik] = ek.pixels[Qk] * Ak, nk[4 * Ik + 1] = ek.pixels[Qk + 1] * Ak, nk[4 * Ik + 2] = ek.pixels[Qk + 2] * Ak, nk[4 * Ik + 3] = 255)
                }
            }
            return ik(nk, Dk, fk), nk
          }(kk, Sk, Dk, fk)
        }))
      }
    }, kk.postMessage({
      type: "started"
    })
  }(globalThis, Kk)
})();