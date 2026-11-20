(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var vv = __webpack_require__.u,
        zv = __webpack_require__.e,
        Pv = {},
        hv = {};
      __webpack_require__.u = function(zv) {
        return vv(zv) + (Pv.hasOwnProperty(zv) ? "?" + Pv[zv] : "")
      }, __webpack_require__.e = function(Sv) {
        return zv(Sv).catch((function(zv) {
          var ev = hv.hasOwnProperty(Sv) ? hv[Sv] : 4;
          if (ev < 1) {
            var gv = vv(Sv);
            throw zv.message = "Loading chunk " + Sv + " failed after 4 retries.\n(" + gv + ")", zv.request = gv, Pv[Sv] = "cache-bust=" + Date.now(), setTimeout((function() {
              delete hv[Sv]
            }), 0), zv
          }
          return new Promise((function(vv) {
            var zv = 4 - ev + 1;
            setTimeout((function() {
              var zv = "cache-bust=" + Date.now();
              Pv[Sv] = zv, hv[Sv] = ev - 1, vv(__webpack_require__.e(Sv))
            }), function(vv) {
              return 500 * Math.pow(2, vv)
            }(zv))
          }))
        }))
      }
    }
  })();
  const vv = [15, 15, 15],
    zv = {
      top: 1,
      left: .85,
      right: .7
    };

  function Pv(zv, Pv, hv) {
    let Sv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : vv => 0 !== zv[4 * vv + 3];
    const ev = (vv, zv) => vv < 0 || zv < 0 || vv >= Pv || zv >= Pv || !Sv(zv * Pv + vv),
      gv = [];
    for (let vv = 0; vv < Pv; vv++)
      for (let zv = 0; zv < Pv; zv++)
        if (!ev(zv, vv)) vv: for (let Sv = -hv; Sv <= hv; Sv++) {
          const pv = hv - Math.abs(Sv);
          for (let hv = -pv; hv <= pv; hv++)
            if (ev(zv + hv, vv + Sv)) {
              gv.push(vv * Pv + zv);
              break vv
            }
        }
    for (const pv of gv) zv.set(vv, 4 * pv), zv[4 * pv + 3] = 255
  }
  const hv = Math.SQRT1_2,
    Sv = Math.sqrt(3) / 2,
    ev = {
      boxes: [
        [0, 0, 0, 1, 1, 1]
      ],
      cropFaces: !1
    },
    gv = {
      boxes: [
        [0, 0, 0, 1, .5, 1]
      ],
      cropFaces: !1
    },
    pv = {
      boxes: [
        [0, 0, 0, 1, .5, 1],
        [0, .5, 0, .5, 1, 1]
      ],
      cropFaces: !0
    };
  const dv = 1e-6;

  function Nv(vv, zv, Pv, hv) {
    let {
      origin: Sv,
      across: ev,
      down: gv,
      texture: pv,
      rect: [Nv, lv, Tv, Wv],
      shade: wv
    } = hv;
    const av = ev.x * gv.y - ev.y * gv.x;
    if (Math.abs(av) < 1e-9) return;
    const sv = [Sv.x, Sv.x + ev.x, Sv.x + gv.x, Sv.x + ev.x + gv.x],
      Cv = [Sv.y, Sv.y + ev.y, Sv.y + gv.y, Sv.y + ev.y + gv.y],
      iv = Math.max(0, Math.floor(Math.min(...sv))),
      cv = Math.min(Pv - 1, Math.ceil(Math.max(...sv))),
      Gv = Math.max(0, Math.floor(Math.min(...Cv))),
      mv = Math.min(Pv - 1, Math.ceil(Math.max(...Cv)));
    for (let jv = Gv; jv <= mv; jv++)
      for (let hv = iv; hv <= cv; hv++) {
        const sv = hv + .5 - Sv.x,
          Cv = jv + .5 - Sv.y,
          iv = (sv * gv.y - Cv * gv.x) / av,
          cv = (ev.x * Cv - ev.y * sv) / av;
        if (iv < -dv || iv > 1 + dv || cv < -dv || cv > 1 + dv) continue;
        const Gv = jv * Pv + hv;
        zv[Gv] = 1;
        const mv = Nv + Math.min(Math.max(iv, 0), 1) * (Tv - Nv),
          fv = lv + Math.min(Math.max(cv, 0), 1) * (Wv - lv),
          Fv = Math.min(pv.width - 1, Math.floor(mv * pv.width)),
          Yv = 4 * (Math.min(pv.height - 1, Math.floor(fv * pv.height)) * pv.width + Fv),
          nv = pv.pixels[Yv + 3] / 255;
        if (0 === nv) continue;
        const Ov = 4 * Gv,
          Dv = vv[Ov + 3] / 255 * (1 - nv),
          Kv = nv + Dv;
        for (let zv = 0; zv < 3; zv++) vv[Ov + zv] = (pv.pixels[Yv + zv] * wv * nv + vv[Ov + zv] * Dv) / Kv;
        vv[Ov + 3] = 255 * Kv
      }
  }

  function lv(vv, zv, Pv) {
    const hv = vv.get(zv);
    if (void 0 === hv) throw new Error(`no ${Pv} was sent for ${zv.slice(0,100)}`);
    return hv
  }
  const Tv = {
      pixelsOf(vv) {
        const zv = new OffscreenCanvas(vv.width, vv.height),
          Pv = zv.getContext("2d");
        if (!Pv) throw new Error("no 2D context");
        return Pv.drawImage(vv, 0, 0), vv.close(), {
          width: zv.width,
          height: zv.height,
          pixels: Pv.getImageData(0, 0, zv.width, zv.height).data
        }
      },
      async encode(vv, zv) {
        const Pv = new OffscreenCanvas(zv, zv),
          hv = Pv.getContext("2d");
        if (!hv) throw new Error("no 2D context");
        hv.putImageData(new ImageData(vv, zv, zv), 0, 0);
        const Sv = await Pv.convertToBlob();
        return new Promise(((vv, zv) => {
          const Pv = new FileReader;
          Pv.onload = () => {
            vv(Pv.result)
          }, Pv.onerror = () => {
            var vv;
            zv(null !== (vv = Pv.error) && void 0 !== vv ? vv : new Error("the icon did not encode"))
          }, Pv.readAsDataURL(Sv)
        }))
      }
    },
    Wv = globalThis.WorkerGlobalScope;
  void 0 !== Wv && globalThis instanceof Wv && function(vv, dv) {
    const Tv = new Map,
      Wv = new Map,
      wv = (zv, Pv, hv) => {
        (async () => {
          try {
            vv.postMessage({
              type: "drawn",
              id: zv,
              url: await dv.encode(hv(), Pv)
            })
          } catch (Sv) {
            vv.postMessage({
              type: "failed",
              message: String(Sv)
            })
          }
        })()
      };
    vv.onmessage = vv => {
      let {
        data: av
      } = vv;
      if ("texture" === av.type) Tv.set(av.url, dv.pixelsOf(av.bitmap));
      else if ("model" === av.type) Wv.set(av.name, {
        geometry: av.geometry,
        texture: dv.pixelsOf(av.bitmap)
      });
      else if ("draw" === av.type) {
        const {
          id: vv,
          top: dv,
          left: Wv,
          right: sv,
          itemType: Cv,
          size: iv,
          outlineWidth: cv
        } = av;
        wv(vv, iv, (() => function(vv, ev, gv, pv) {
          const dv = .6 * gv,
            lv = dv * hv,
            Tv = dv * hv * .5,
            Wv = dv * Sv,
            wv = Math.max(...ev.boxes.map((vv => vv[4]))),
            av = lv / 2 + (gv - lv) / 2,
            sv = Tv + (gv - Tv - Tv - wv * Wv) / 2,
            Cv = (vv, zv, Pv) => ({
              x: av + (vv - Pv) * lv,
              y: sv - Tv + (vv + Pv) * Tv + (wv - zv) * Wv
            }),
            iv = (vv, zv, Pv, hv, Sv, gv) => ({
              origin: vv,
              across: {
                x: zv.x - vv.x,
                y: zv.y - vv.y
              },
              down: {
                x: Pv.x - vv.x,
                y: Pv.y - vv.y
              },
              texture: hv,
              rect: ev.cropFaces ? Sv : [0, 0, 1, 1],
              shade: gv
            }),
            cv = new Uint8ClampedArray(gv * gv * 4),
            Gv = new Uint8Array(gv * gv),
            mv = zv;
          for (const [zv, Pv, hv, Sv, jv, fv] of ev.boxes) {
            const ev = iv(Cv(Sv, jv, fv), Cv(Sv, jv, hv), Cv(Sv, Pv, fv), vv.right, [1 - fv, 1 - jv, 1 - hv, 1 - Pv], mv.right),
              pv = iv(Cv(zv, jv, fv), Cv(Sv, jv, fv), Cv(zv, Pv, fv), vv.left, [zv, 1 - jv, Sv, 1 - Pv], mv.left),
              dv = iv(Cv(zv, jv, hv), Cv(Sv, jv, hv), Cv(zv, jv, fv), vv.top, [zv, hv, Sv, fv], mv.top);
            for (const vv of [ev, pv, dv]) Nv(cv, Gv, gv, vv)
          }
          return Pv(cv, gv, pv, (vv => 1 === Gv[vv])), cv
        }({
          top: lv(Tv, dv, "texture"),
          left: lv(Tv, Wv, "texture"),
          right: lv(Tv, sv, "texture")
        }, function(vv) {
          return "SlabBlock" === vv ? gv : "StairsBlock" === vv ? pv : ev
        }(Cv), iv, cv)))
      } else {
        const {
          id: vv,
          name: zv,
          size: hv,
          outlineWidth: Sv
        } = av;
        wv(vv, hv, (() => {
          const {
            geometry: vv,
            texture: ev
          } = lv(Wv, zv, "model");
          return function(vv, zv, hv, Sv) {
            const {
              vertices: ev,
              uvs: gv,
              indices: pv,
              shades: dv
            } = vv, Nv = .03125 * hv, lv = hv - 2 * Nv, Tv = new Float32Array(ev.length);
            for (let Pv = 0; Pv < ev.length; Pv += 3) Tv[Pv] = Nv + ev[Pv] * lv, Tv[Pv + 1] = Nv + ev[Pv + 1] * lv, Tv[Pv + 2] = ev[Pv + 2];
            const Wv = new Float32Array(hv * hv).fill(-1 / 0),
              wv = new Uint8ClampedArray(hv * hv * 4),
              av = 255 * vv.alphaCutoff;
            for (let Pv = 0; Pv < pv.length; Pv += 3) {
              const [vv, Sv, ev] = [pv[Pv], pv[Pv + 1], pv[Pv + 2]], [Nv, lv, sv] = [3 * vv, 3 * Sv, 3 * ev], [Cv, iv, cv, Gv, mv, jv] = [Tv[Nv], Tv[Nv + 1], Tv[lv], Tv[lv + 1], Tv[sv], Tv[sv + 1]], fv = (cv - Cv) * (jv - iv) - (mv - Cv) * (Gv - iv);
              if (Math.abs(fv) < 1e-9) continue;
              const Fv = dv[Pv / 3],
                [Yv, nv, Ov, Dv, Kv, Vv] = [gv[2 * vv], gv[2 * vv + 1], gv[2 * Sv], gv[2 * Sv + 1], gv[2 * ev], gv[2 * ev + 1]],
                Uv = Math.max(0, Math.floor(Math.min(Cv, cv, mv))),
                Rv = Math.min(hv - 1, Math.ceil(Math.max(Cv, cv, mv))),
                xv = Math.max(0, Math.floor(Math.min(iv, Gv, jv))),
                tv = Math.min(hv - 1, Math.ceil(Math.max(iv, Gv, jv)));
              for (let Pv = xv; Pv <= tv; Pv++)
                for (let vv = Uv; vv <= Rv; vv++) {
                  const [Sv, ev] = [vv + .5, Pv + .5], gv = ((Sv - Cv) * (jv - iv) - (mv - Cv) * (ev - iv)) / fv, pv = ((cv - Cv) * (ev - iv) - (Sv - Cv) * (Gv - iv)) / fv, dv = 1 - gv - pv;
                  if (dv < 0 || gv < 0 || pv < 0) continue;
                  const Uv = dv * Tv[Nv + 2] + gv * Tv[lv + 2] + pv * Tv[sv + 2],
                    Rv = Pv * hv + vv;
                  if (Uv <= Wv[Rv]) continue;
                  const xv = Math.max(0, Math.min(zv.width - 1, Math.floor((dv * Yv + gv * Ov + pv * Kv) * zv.width))),
                    tv = 4 * (Math.max(0, Math.min(zv.height - 1, Math.floor((dv * nv + gv * Dv + pv * Vv) * zv.height))) * zv.width + xv);
                  zv.pixels[tv + 3] < av || (Wv[Rv] = Uv, wv[4 * Rv] = zv.pixels[tv] * Fv, wv[4 * Rv + 1] = zv.pixels[tv + 1] * Fv, wv[4 * Rv + 2] = zv.pixels[tv + 2] * Fv, wv[4 * Rv + 3] = 255)
                }
            }
            return Pv(wv, hv, Sv), wv
          }(vv, ev, hv, Sv)
        }))
      }
    }, vv.postMessage({
      type: "started"
    })
  }(globalThis, Tv)
})();