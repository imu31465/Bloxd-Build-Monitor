(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var tt = __webpack_require__.u,
        et = __webpack_require__.e,
        Vt = {},
        Ot = {};
      __webpack_require__.u = function(et) {
        return tt(et) + (Vt.hasOwnProperty(et) ? "?" + Vt[et] : "")
      }, __webpack_require__.e = function(qt) {
        return et(qt).catch((function(et) {
          var Dt = Ot.hasOwnProperty(qt) ? Ot[qt] : 4;
          if (Dt < 1) {
            var mt = tt(qt);
            if (et.message = "Loading chunk " + qt + " failed after 4 retries.\n(" + mt + ")", et.request = mt, Vt[qt] = "cache-bust=" + Date.now(), setTimeout((function() {
                delete Ot[qt]
              }), 0), "CSS_CHUNK_LOAD_FAILED" === et.code) {
              var dt = __webpack_require__.miniCssF(qt);
              et.message = et.message.replace("Loading chunk", "Loading CSS chunk").replace(mt, dt), et.request = dt
            }
            throw et
          }
          return new Promise((function(tt) {
            var et = 4 - Dt + 1;
            setTimeout((function() {
              var et = "cache-bust=" + Date.now();
              Vt[qt] = et, Ot[qt] = Dt - 1, tt(__webpack_require__.e(qt))
            }), function(tt) {
              return 500 * Math.pow(2, tt)
            }(et))
          }))
        }))
      }
    }
  })();
  const tt = Math.SQRT1_2,
    et = Math.SQRT1_2 / 2,
    Vt = Math.sqrt(3) / 2,
    Ot = 2 * tt,
    qt = 2 * et + Vt;

  function Dt(et, Vt) {
    const Ot = Vt > 0 ? Vt + 1 : 0,
      Dt = .6 * et - Vt / tt;
    return Math.max(0, Math.min(Dt, (et - 2 * Ot) / qt))
  }
  const mt = [15, 15, 15],
    dt = {
      top: 1,
      left: .85,
      right: .7
    };

  function jt(tt, et, Vt, mt) {
    const {
      vertices: dt,
      uvs: jt,
      indices: Ht,
      shades: Xt
    } = tt, lt = function(tt, et) {
      const Vt = Dt(tt, et),
        mt = Ot * Vt,
        dt = qt * Vt;
      return {
        left: (tt - mt) / 2,
        top: (tt - dt) / 2,
        width: mt,
        height: dt
      }
    }(Vt, mt), Et = new Float32Array(dt.length);
    for (let Ot = 0; Ot < dt.length; Ot += 3) Et[Ot] = lt.left + dt[Ot] * lt.width, Et[Ot + 1] = lt.top + dt[Ot + 1] * lt.height, Et[Ot + 2] = dt[Ot + 2];
    const ft = new Float32Array(Vt * Vt).fill(-1 / 0),
      wt = new Uint8ClampedArray(Vt * Vt * 4),
      yt = 255 * tt.alphaCutoff;
    for (let Ot = 0; Ot < Ht.length; Ot += 3) {
      const [tt, qt, Dt] = [Ht[Ot], Ht[Ot + 1], Ht[Ot + 2]], [mt, dt, Qt] = [3 * tt, 3 * qt, 3 * Dt], [lt, Nt, Mt, bt, Jt, Ct] = [Et[mt], Et[mt + 1], Et[dt], Et[dt + 1], Et[Qt], Et[Qt + 1]], ut = (Mt - lt) * (Ct - Nt) - (Jt - lt) * (bt - Nt);
      if (Math.abs(ut) < 1e-9) continue;
      const Kt = Xt[Ot / 3],
        [ht, vt, Wt, St, ct, Rt] = [jt[2 * tt], jt[2 * tt + 1], jt[2 * qt], jt[2 * qt + 1], jt[2 * Dt], jt[2 * Dt + 1]],
        It = Math.max(0, Math.floor(Math.min(lt, Mt, Jt))),
        Pt = Math.min(Vt - 1, Math.ceil(Math.max(lt, Mt, Jt))),
        Zt = Math.max(0, Math.floor(Math.min(Nt, bt, Ct))),
        Lt = Math.min(Vt - 1, Math.ceil(Math.max(Nt, bt, Ct)));
      for (let Ot = Zt; Ot <= Lt; Ot++)
        for (let tt = It; tt <= Pt; tt++) {
          const [qt, Dt] = [tt + .5, Ot + .5], jt = ((qt - lt) * (Ct - Nt) - (Jt - lt) * (Dt - Nt)) / ut, Ht = ((Mt - lt) * (Dt - Nt) - (qt - lt) * (bt - Nt)) / ut, Xt = 1 - jt - Ht;
          if (Xt < 0 || jt < 0 || Ht < 0) continue;
          const It = Xt * Et[mt + 2] + jt * Et[dt + 2] + Ht * Et[Qt + 2],
            Pt = Ot * Vt + tt;
          if (It <= ft[Pt]) continue;
          const Zt = Math.max(0, Math.min(et.width - 1, Math.floor((Xt * ht + jt * Wt + Ht * ct) * et.width))),
            Lt = 4 * (Math.max(0, Math.min(et.height - 1, Math.floor((Xt * vt + jt * St + Ht * Rt) * et.height))) * et.width + Zt);
          et.pixels[Lt + 3] < yt || (ft[Pt] = It, wt[4 * Pt] = et.pixels[Lt] * Kt, wt[4 * Pt + 1] = et.pixels[Lt + 1] * Kt, wt[4 * Pt + 2] = et.pixels[Lt + 2] * Kt, wt[4 * Pt + 3] = 255)
        }
    }
    return Qt(wt, Vt, mt), wt
  }
  let Ht = NaN,
    Xt = new Int32Array(0);

  function Qt(tt, et, Vt) {
    let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : et => 0 !== tt[4 * et + 3];
    const qt = new Uint8Array(et * et);
    for (let mt = 0; mt < et * et; mt++) qt[mt] = Ot(mt) ? 1 : 0;
    const Dt = (tt, Vt) => tt >= 0 && Vt >= 0 && tt < et && Vt < et && 0 === qt[Vt * et + tt],
      dt = new Float32Array(et * et).fill(1 / 0),
      jt = function(tt) {
        if (tt !== Ht) {
          const et = Math.ceil(tt + 1),
            Vt = [];
          for (let Ot = -et; Ot <= et; Ot++)
            for (let qt = -et; qt <= et; qt++) {
              const et = qt * qt + Ot * Ot;
              et > 0 && et < (tt + 1) ** 2 && Vt.push(qt, Ot, et)
            }
          Ht = tt, Xt = Int32Array.from(Vt)
        }
        return Xt
      }(Vt);
    for (let mt = 0; mt < et; mt++)
      for (let tt = 0; tt < et; tt++) {
        if (1 === qt[mt * et + tt] && (Dt(tt - 1, mt) || Dt(tt + 1, mt) || Dt(tt, mt - 1) || Dt(tt, mt + 1)))
          for (let Vt = 0; Vt < jt.length; Vt += 3) {
            const Ot = tt + jt[Vt],
              qt = mt + jt[Vt + 1];
            if (Ot >= 0 && qt >= 0 && Ot < et && qt < et) {
              const tt = qt * et + Ot;
              dt[tt] = Math.min(dt[tt], jt[Vt + 2])
            }
          }
      }
    for (let Ht = 0; Ht < et * et; Ht++) 1 !== qt[Ht] && dt[Ht] !== 1 / 0 && (tt.set(mt, 4 * Ht), tt[4 * Ht + 3] = Math.round(255 * Math.min(1, Vt + 1 - Math.sqrt(dt[Ht]))))
  }
  const lt = {
      boxes: [
        [0, 0, 0, 1, 1, 1]
      ],
      cropFaces: !1
    },
    Et = {
      boxes: [
        [0, 0, 0, 1, .5, 1]
      ],
      cropFaces: !1
    },
    ft = {
      boxes: [
        [0, 0, 0, 1, .5, 1],
        [0, .5, 0, .5, 1, 1]
      ],
      cropFaces: !0
    };
  const wt = 1e-6;

  function yt(tt, et, Vt, Ot) {
    let {
      origin: qt,
      across: Dt,
      down: mt,
      texture: dt,
      rect: [jt, Ht, Xt, Qt],
      shade: lt
    } = Ot;
    const Et = Dt.x * mt.y - Dt.y * mt.x;
    if (Math.abs(Et) < 1e-9) return;
    const ft = [qt.x, qt.x + Dt.x, qt.x + mt.x, qt.x + Dt.x + mt.x],
      yt = [qt.y, qt.y + Dt.y, qt.y + mt.y, qt.y + Dt.y + mt.y],
      Nt = Math.max(0, Math.floor(Math.min(...ft))),
      Mt = Math.min(Vt - 1, Math.ceil(Math.max(...ft))),
      bt = Math.max(0, Math.floor(Math.min(...yt))),
      Jt = Math.min(Vt - 1, Math.ceil(Math.max(...yt)));
    for (let Ct = bt; Ct <= Jt; Ct++)
      for (let Ot = Nt; Ot <= Mt; Ot++) {
        const ft = Ot + .5 - qt.x,
          yt = Ct + .5 - qt.y,
          Nt = (ft * mt.y - yt * mt.x) / Et,
          Mt = (Dt.x * yt - Dt.y * ft) / Et;
        if (Nt < -wt || Nt > 1 + wt || Mt < -wt || Mt > 1 + wt) continue;
        const bt = Ct * Vt + Ot;
        et[bt] = 1;
        const Jt = jt + Math.min(Math.max(Nt, 0), 1) * (Xt - jt),
          ut = Ht + Math.min(Math.max(Mt, 0), 1) * (Qt - Ht),
          Kt = Math.min(dt.width - 1, Math.floor(Jt * dt.width)),
          ht = 4 * (Math.min(dt.height - 1, Math.floor(ut * dt.height)) * dt.width + Kt),
          vt = dt.pixels[ht + 3] / 255;
        if (0 === vt) continue;
        const Wt = 4 * bt,
          St = tt[Wt + 3] / 255 * (1 - vt),
          ct = vt + St;
        for (let et = 0; et < 3; et++) tt[Wt + et] = (dt.pixels[ht + et] * lt * vt + tt[Wt + et] * St) / ct;
        tt[Wt + 3] = 255 * ct
      }
  }

  function Nt(tt, et, Vt) {
    const Ot = tt.get(et);
    if (void 0 === Ot) throw new Error(`no ${Vt} was sent for ${et.slice(0,100)}`);
    return Ot
  }
  const Mt = {
      pixelsOf(tt) {
        const et = new OffscreenCanvas(tt.width, tt.height),
          Vt = et.getContext("2d");
        if (!Vt) throw new Error("no 2D context");
        return Vt.drawImage(tt, 0, 0), tt.close(), {
          width: et.width,
          height: et.height,
          pixels: Vt.getImageData(0, 0, et.width, et.height).data
        }
      },
      async encode(tt, et) {
        const Vt = new OffscreenCanvas(et, et),
          Ot = Vt.getContext("2d");
        if (!Ot) throw new Error("no 2D context");
        Ot.putImageData(new ImageData(tt, et, et), 0, 0);
        const qt = await Vt.convertToBlob();
        return new Promise(((tt, et) => {
          const Vt = new FileReader;
          Vt.onload = () => {
            tt(Vt.result)
          }, Vt.onerror = () => {
            var tt;
            et(null !== (tt = Vt.error) && void 0 !== tt ? tt : new Error("the icon did not encode"))
          }, Vt.readAsDataURL(qt)
        }))
      }
    },
    bt = globalThis.WorkerGlobalScope;
  void 0 !== bt && globalThis instanceof bt && function(Ot, qt) {
    const mt = new Map,
      Ht = new Map,
      Xt = (tt, et, Vt) => {
        (async () => {
          try {
            Ot.postMessage({
              type: "drawn",
              id: tt,
              url: await qt.encode(Vt(), et)
            })
          } catch (Dt) {
            Ot.postMessage({
              type: "failed",
              message: String(Dt)
            })
          }
        })()
      };
    Ot.onmessage = Ot => {
      let {
        data: wt
      } = Ot;
      if ("texture" === wt.type) mt.set(wt.url, qt.pixelsOf(wt.bitmap));
      else if ("model" === wt.type) Ht.set(wt.name, {
        geometry: wt.geometry,
        texture: qt.pixelsOf(wt.bitmap)
      });
      else if ("draw" === wt.type) {
        const {
          id: Ot,
          top: qt,
          left: jt,
          right: Ht,
          itemType: Mt,
          size: bt,
          outlineWidth: Jt
        } = wt;
        Xt(Ot, bt, (() => function(Ot, qt, mt, jt) {
          const Ht = Dt(mt, jt),
            Xt = Ht * tt,
            lt = Ht * et,
            Et = Ht * Vt,
            ft = Math.max(...qt.boxes.map((tt => tt[4]))),
            wt = mt / 2,
            Nt = lt + (mt - lt - lt - ft * Et) / 2,
            Mt = (tt, et, Vt) => ({
              x: wt + (tt - Vt) * Xt,
              y: Nt - lt + (tt + Vt) * lt + (ft - et) * Et
            }),
            bt = (tt, et, Vt, Ot, Dt, mt) => ({
              origin: tt,
              across: {
                x: et.x - tt.x,
                y: et.y - tt.y
              },
              down: {
                x: Vt.x - tt.x,
                y: Vt.y - tt.y
              },
              texture: Ot,
              rect: qt.cropFaces ? Dt : [0, 0, 1, 1],
              shade: mt
            }),
            Jt = new Uint8ClampedArray(mt * mt * 4),
            Ct = new Uint8Array(mt * mt),
            ut = dt;
          for (const [tt, et, Vt, Dt, dt, Qt] of qt.boxes) {
            const qt = bt(Mt(Dt, dt, Qt), Mt(Dt, dt, Vt), Mt(Dt, et, Qt), Ot.right, [1 - Qt, 1 - dt, 1 - Vt, 1 - et], ut.right),
              jt = bt(Mt(tt, dt, Qt), Mt(Dt, dt, Qt), Mt(tt, et, Qt), Ot.left, [tt, 1 - dt, Dt, 1 - et], ut.left),
              Ht = bt(Mt(tt, dt, Vt), Mt(Dt, dt, Vt), Mt(tt, dt, Qt), Ot.top, [tt, Vt, Dt, Qt], ut.top);
            for (const tt of [qt, jt, Ht]) yt(Jt, Ct, mt, tt)
          }
          return Qt(Jt, mt, jt, (tt => 1 === Ct[tt])), Jt
        }({
          top: Nt(mt, qt, "texture"),
          left: Nt(mt, jt, "texture"),
          right: Nt(mt, Ht, "texture")
        }, function(tt) {
          return "SlabBlock" === tt ? Et : "StairsBlock" === tt ? ft : lt
        }(Mt), bt, Jt)))
      } else {
        const {
          id: tt,
          name: et,
          size: Vt,
          outlineWidth: Ot
        } = wt;
        Xt(tt, Vt, (() => {
          const {
            geometry: tt,
            texture: qt
          } = Nt(Ht, et, "model");
          return jt(tt, qt, Vt, Ot)
        }))
      }
    }, Ot.postMessage({
      type: "started"
    })
  }(globalThis, Mt)
})();