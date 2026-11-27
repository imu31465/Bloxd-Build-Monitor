(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var rr = __webpack_require__.u,
        Sr = __webpack_require__.e,
        Qr = {},
        Zr = {};
      __webpack_require__.u = function(Sr) {
        return rr(Sr) + (Qr.hasOwnProperty(Sr) ? "?" + Qr[Sr] : "")
      }, __webpack_require__.e = function(Wr) {
        return Sr(Wr).catch((function(Sr) {
          var ar = Zr.hasOwnProperty(Wr) ? Zr[Wr] : 4;
          if (ar < 1) {
            var jr = rr(Wr);
            if (Sr.message = "Loading chunk " + Wr + " failed after 4 retries.\n(" + jr + ")", Sr.request = jr, Qr[Wr] = "cache-bust=" + Date.now(), setTimeout((function() {
                delete Zr[Wr]
              }), 0), "CSS_CHUNK_LOAD_FAILED" === Sr.code) {
              var Ir = __webpack_require__.miniCssF(Wr);
              Sr.message = Sr.message.replace("Loading chunk", "Loading CSS chunk").replace(jr, Ir), Sr.request = Ir
            }
            throw Sr
          }
          return new Promise((function(rr) {
            var Sr = 4 - ar + 1;
            setTimeout((function() {
              var Sr = "cache-bust=" + Date.now();
              Qr[Wr] = Sr, Zr[Wr] = ar - 1, rr(__webpack_require__.e(Wr))
            }), function(rr) {
              return 500 * Math.pow(2, rr)
            }(Sr))
          }))
        }))
      }
    }
  })();
  const rr = Math.SQRT1_2,
    Sr = Math.SQRT1_2 / 2,
    Qr = Math.sqrt(3) / 2,
    Zr = 2 * rr,
    Wr = 2 * Sr + Qr;

  function ar(Sr, Qr) {
    const Zr = Qr > 0 ? Qr + 1 : 0,
      ar = .6 * Sr - Qr / rr;
    return Math.max(0, Math.min(ar, (Sr - 2 * Zr) / Wr))
  }
  const jr = [15, 15, 15],
    Ir = {
      top: 1,
      left: .85,
      right: .7
    };

  function fr(rr, Sr, Qr, jr) {
    const {
      vertices: Ir,
      uvs: fr,
      indices: Er,
      shades: pr
    } = rr, mr = function(rr, Sr) {
      const Qr = ar(rr, Sr),
        jr = Zr * Qr,
        Ir = Wr * Qr;
      return {
        left: (rr - jr) / 2,
        top: (rr - Ir) / 2,
        width: jr,
        height: Ir
      }
    }(Qr, jr), Nr = new Float32Array(Ir.length);
    for (let Zr = 0; Zr < Ir.length; Zr += 3) Nr[Zr] = mr.left + Ir[Zr] * mr.width, Nr[Zr + 1] = mr.top + Ir[Zr + 1] * mr.height, Nr[Zr + 2] = Ir[Zr + 2];
    const Ur = new Float32Array(Qr * Qr).fill(-1 / 0),
      tr = new Uint8ClampedArray(Qr * Qr * 4),
      hr = 255 * rr.alphaCutoff;
    for (let Zr = 0; Zr < Er.length; Zr += 3) {
      const [rr, Wr, ar] = [Er[Zr], Er[Zr + 1], Er[Zr + 2]], [jr, Ir, xr] = [3 * rr, 3 * Wr, 3 * ar], [mr, zr, Yr, nr, er, Kr] = [Nr[jr], Nr[jr + 1], Nr[Ir], Nr[Ir + 1], Nr[xr], Nr[xr + 1]], yr = (Yr - mr) * (Kr - zr) - (er - mr) * (nr - zr);
      if (Math.abs(yr) < 1e-9) continue;
      const Br = pr[Zr / 3],
        [Tr, vr, Or, Lr, lr, Xr] = [fr[2 * rr], fr[2 * rr + 1], fr[2 * Wr], fr[2 * Wr + 1], fr[2 * ar], fr[2 * ar + 1]],
        Pr = Math.max(0, Math.floor(Math.min(mr, Yr, er))),
        Hr = Math.min(Qr - 1, Math.ceil(Math.max(mr, Yr, er))),
        qr = Math.max(0, Math.floor(Math.min(zr, nr, Kr))),
        Rr = Math.min(Qr - 1, Math.ceil(Math.max(zr, nr, Kr)));
      for (let Zr = qr; Zr <= Rr; Zr++)
        for (let rr = Pr; rr <= Hr; rr++) {
          const [Wr, ar] = [rr + .5, Zr + .5], fr = ((Wr - mr) * (Kr - zr) - (er - mr) * (ar - zr)) / yr, Er = ((Yr - mr) * (ar - zr) - (Wr - mr) * (nr - zr)) / yr, pr = 1 - fr - Er;
          if (pr < 0 || fr < 0 || Er < 0) continue;
          const Pr = pr * Nr[jr + 2] + fr * Nr[Ir + 2] + Er * Nr[xr + 2],
            Hr = Zr * Qr + rr;
          if (Pr <= Ur[Hr]) continue;
          const qr = Math.max(0, Math.min(Sr.width - 1, Math.floor((pr * Tr + fr * Or + Er * lr) * Sr.width))),
            Rr = 4 * (Math.max(0, Math.min(Sr.height - 1, Math.floor((pr * vr + fr * Lr + Er * Xr) * Sr.height))) * Sr.width + qr);
          Sr.pixels[Rr + 3] < hr || (Ur[Hr] = Pr, tr[4 * Hr] = Sr.pixels[Rr] * Br, tr[4 * Hr + 1] = Sr.pixels[Rr + 1] * Br, tr[4 * Hr + 2] = Sr.pixels[Rr + 2] * Br, tr[4 * Hr + 3] = 255)
        }
    }
    return xr(tr, Qr, jr), tr
  }
  let Er = NaN,
    pr = new Int32Array(0);

  function xr(rr, Sr, Qr) {
    let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Sr => 0 !== rr[4 * Sr + 3];
    const Wr = new Uint8Array(Sr * Sr);
    for (let jr = 0; jr < Sr * Sr; jr++) Wr[jr] = Zr(jr) ? 1 : 0;
    const ar = (rr, Qr) => rr >= 0 && Qr >= 0 && rr < Sr && Qr < Sr && 0 === Wr[Qr * Sr + rr],
      Ir = new Float32Array(Sr * Sr).fill(1 / 0),
      fr = function(rr) {
        if (rr !== Er) {
          const Sr = Math.ceil(rr + 1),
            Qr = [];
          for (let Zr = -Sr; Zr <= Sr; Zr++)
            for (let Wr = -Sr; Wr <= Sr; Wr++) {
              const Sr = Wr * Wr + Zr * Zr;
              Sr > 0 && Sr < (rr + 1) ** 2 && Qr.push(Wr, Zr, Sr)
            }
          Er = rr, pr = Int32Array.from(Qr)
        }
        return pr
      }(Qr);
    for (let jr = 0; jr < Sr; jr++)
      for (let rr = 0; rr < Sr; rr++) {
        if (1 === Wr[jr * Sr + rr] && (ar(rr - 1, jr) || ar(rr + 1, jr) || ar(rr, jr - 1) || ar(rr, jr + 1)))
          for (let Qr = 0; Qr < fr.length; Qr += 3) {
            const Zr = rr + fr[Qr],
              Wr = jr + fr[Qr + 1];
            if (Zr >= 0 && Wr >= 0 && Zr < Sr && Wr < Sr) {
              const rr = Wr * Sr + Zr;
              Ir[rr] = Math.min(Ir[rr], fr[Qr + 2])
            }
          }
      }
    for (let Er = 0; Er < Sr * Sr; Er++) 1 !== Wr[Er] && Ir[Er] !== 1 / 0 && (rr.set(jr, 4 * Er), rr[4 * Er + 3] = Math.round(255 * Math.min(1, Qr + 1 - Math.sqrt(Ir[Er]))))
  }
  const mr = {
      boxes: [
        [0, 0, 0, 1, 1, 1]
      ],
      cropFaces: !1
    },
    Nr = {
      boxes: [
        [0, 0, 0, 1, .5, 1]
      ],
      cropFaces: !1
    },
    Ur = {
      boxes: [
        [0, 0, 0, 1, .5, 1],
        [0, .5, 0, .5, 1, 1]
      ],
      cropFaces: !0
    };
  const tr = 1e-6;

  function hr(rr, Sr, Qr, Zr) {
    let {
      origin: Wr,
      across: ar,
      down: jr,
      texture: Ir,
      rect: [fr, Er, pr, xr],
      shade: mr
    } = Zr;
    const Nr = ar.x * jr.y - ar.y * jr.x;
    if (Math.abs(Nr) < 1e-9) return;
    const Ur = [Wr.x, Wr.x + ar.x, Wr.x + jr.x, Wr.x + ar.x + jr.x],
      hr = [Wr.y, Wr.y + ar.y, Wr.y + jr.y, Wr.y + ar.y + jr.y],
      zr = Math.max(0, Math.floor(Math.min(...Ur))),
      Yr = Math.min(Qr - 1, Math.ceil(Math.max(...Ur))),
      nr = Math.max(0, Math.floor(Math.min(...hr))),
      er = Math.min(Qr - 1, Math.ceil(Math.max(...hr)));
    for (let Kr = nr; Kr <= er; Kr++)
      for (let Zr = zr; Zr <= Yr; Zr++) {
        const Ur = Zr + .5 - Wr.x,
          hr = Kr + .5 - Wr.y,
          zr = (Ur * jr.y - hr * jr.x) / Nr,
          Yr = (ar.x * hr - ar.y * Ur) / Nr;
        if (zr < -tr || zr > 1 + tr || Yr < -tr || Yr > 1 + tr) continue;
        const nr = Kr * Qr + Zr;
        Sr[nr] = 1;
        const er = fr + Math.min(Math.max(zr, 0), 1) * (pr - fr),
          yr = Er + Math.min(Math.max(Yr, 0), 1) * (xr - Er),
          Br = Math.min(Ir.width - 1, Math.floor(er * Ir.width)),
          Tr = 4 * (Math.min(Ir.height - 1, Math.floor(yr * Ir.height)) * Ir.width + Br),
          vr = Ir.pixels[Tr + 3] / 255;
        if (0 === vr) continue;
        const Or = 4 * nr,
          Lr = rr[Or + 3] / 255 * (1 - vr),
          lr = vr + Lr;
        for (let Sr = 0; Sr < 3; Sr++) rr[Or + Sr] = (Ir.pixels[Tr + Sr] * mr * vr + rr[Or + Sr] * Lr) / lr;
        rr[Or + 3] = 255 * lr
      }
  }

  function zr(rr, Sr, Qr) {
    const Zr = rr.get(Sr);
    if (void 0 === Zr) throw new Error(`no ${Qr} was sent for ${Sr.slice(0,100)}`);
    return Zr
  }
  const Yr = {
      pixelsOf(rr) {
        const Sr = new OffscreenCanvas(rr.width, rr.height),
          Qr = Sr.getContext("2d");
        if (!Qr) throw new Error("no 2D context");
        return Qr.drawImage(rr, 0, 0), rr.close(), {
          width: Sr.width,
          height: Sr.height,
          pixels: Qr.getImageData(0, 0, Sr.width, Sr.height).data
        }
      },
      async encode(rr, Sr) {
        const Qr = new OffscreenCanvas(Sr, Sr),
          Zr = Qr.getContext("2d");
        if (!Zr) throw new Error("no 2D context");
        Zr.putImageData(new ImageData(rr, Sr, Sr), 0, 0);
        const Wr = await Qr.convertToBlob();
        return new Promise(((rr, Sr) => {
          const Qr = new FileReader;
          Qr.onload = () => {
            rr(Qr.result)
          }, Qr.onerror = () => {
            var rr;
            Sr(null !== (rr = Qr.error) && void 0 !== rr ? rr : new Error("the icon did not encode"))
          }, Qr.readAsDataURL(Wr)
        }))
      }
    },
    nr = globalThis.WorkerGlobalScope;
  void 0 !== nr && globalThis instanceof nr && function(Zr, Wr) {
    const jr = new Map,
      Er = new Map,
      pr = (rr, Sr, Qr) => {
        (async () => {
          try {
            Zr.postMessage({
              type: "drawn",
              id: rr,
              url: await Wr.encode(Qr(), Sr)
            })
          } catch (ar) {
            Zr.postMessage({
              type: "failed",
              message: String(ar)
            })
          }
        })()
      };
    Zr.onmessage = Zr => {
      let {
        data: tr
      } = Zr;
      if ("texture" === tr.type) jr.set(tr.url, Wr.pixelsOf(tr.bitmap));
      else if ("model" === tr.type) Er.set(tr.name, {
        geometry: tr.geometry,
        texture: Wr.pixelsOf(tr.bitmap)
      });
      else if ("draw" === tr.type) {
        const {
          id: Zr,
          top: Wr,
          left: fr,
          right: Er,
          itemType: Yr,
          size: nr,
          outlineWidth: er
        } = tr;
        pr(Zr, nr, (() => function(Zr, Wr, jr, fr) {
          const Er = ar(jr, fr),
            pr = Er * rr,
            mr = Er * Sr,
            Nr = Er * Qr,
            Ur = Math.max(...Wr.boxes.map((rr => rr[4]))),
            tr = jr / 2,
            zr = mr + (jr - mr - mr - Ur * Nr) / 2,
            Yr = (rr, Sr, Qr) => ({
              x: tr + (rr - Qr) * pr,
              y: zr - mr + (rr + Qr) * mr + (Ur - Sr) * Nr
            }),
            nr = (rr, Sr, Qr, Zr, ar, jr) => ({
              origin: rr,
              across: {
                x: Sr.x - rr.x,
                y: Sr.y - rr.y
              },
              down: {
                x: Qr.x - rr.x,
                y: Qr.y - rr.y
              },
              texture: Zr,
              rect: Wr.cropFaces ? ar : [0, 0, 1, 1],
              shade: jr
            }),
            er = new Uint8ClampedArray(jr * jr * 4),
            Kr = new Uint8Array(jr * jr),
            yr = Ir;
          for (const [rr, Sr, Qr, ar, Ir, xr] of Wr.boxes) {
            const Wr = nr(Yr(ar, Ir, xr), Yr(ar, Ir, Qr), Yr(ar, Sr, xr), Zr.right, [1 - xr, 1 - Ir, 1 - Qr, 1 - Sr], yr.right),
              fr = nr(Yr(rr, Ir, xr), Yr(ar, Ir, xr), Yr(rr, Sr, xr), Zr.left, [rr, 1 - Ir, ar, 1 - Sr], yr.left),
              Er = nr(Yr(rr, Ir, Qr), Yr(ar, Ir, Qr), Yr(rr, Ir, xr), Zr.top, [rr, Qr, ar, xr], yr.top);
            for (const rr of [Wr, fr, Er]) hr(er, Kr, jr, rr)
          }
          return xr(er, jr, fr, (rr => 1 === Kr[rr])), er
        }({
          top: zr(jr, Wr, "texture"),
          left: zr(jr, fr, "texture"),
          right: zr(jr, Er, "texture")
        }, function(rr) {
          return "SlabBlock" === rr ? Nr : "StairsBlock" === rr ? Ur : mr
        }(Yr), nr, er)))
      } else {
        const {
          id: rr,
          name: Sr,
          size: Qr,
          outlineWidth: Zr
        } = tr;
        pr(rr, Qr, (() => {
          const {
            geometry: rr,
            texture: Wr
          } = zr(Er, Sr, "model");
          return fr(rr, Wr, Qr, Zr)
        }))
      }
    }, Zr.postMessage({
      type: "started"
    })
  }(globalThis, Yr)
})();