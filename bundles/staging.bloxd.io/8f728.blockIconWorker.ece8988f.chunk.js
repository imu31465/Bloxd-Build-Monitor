(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var cB = __webpack_require__.u,
        Bc = __webpack_require__.e,
        nc = {},
        Vc = {};
      __webpack_require__.u = function(Bc) {
        return cB(Bc) + (nc.hasOwnProperty(Bc) ? "?" + nc[Bc] : "")
      }, __webpack_require__.e = function(Ic) {
        return Bc(Ic).catch((function(Bc) {
          var rB = Vc.hasOwnProperty(Ic) ? Vc[Ic] : 4;
          if (rB < 1) {
            var uc = cB(Ic);
            throw Bc.message = "Loading chunk " + Ic + " failed after 4 retries.\n(" + uc + ")", Bc.request = uc, nc[Ic] = "cache-bust=" + Date.now(), setTimeout((function() {
              delete Vc[Ic]
            }), 0), Bc
          }
          return new Promise((function(cB) {
            var Bc = 4 - rB + 1;
            setTimeout((function() {
              var Bc = "cache-bust=" + Date.now();
              nc[Ic] = Bc, Vc[Ic] = rB - 1, cB(__webpack_require__.e(Ic))
            }), function(cB) {
              return 500 * Math.pow(2, cB)
            }(Bc))
          }))
        }))
      }
    }
  })();
  const cB = [15, 15, 15],
    Bc = {
      top: 1,
      left: .85,
      right: .7
    };

  function nc(Bc, nc, Vc) {
    let Ic = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : cB => 0 !== Bc[4 * cB + 3];
    const rB = (cB, Bc) => cB < 0 || Bc < 0 || cB >= nc || Bc >= nc || !Ic(Bc * nc + cB),
      uc = [];
    for (let cB = 0; cB < nc; cB++)
      for (let Bc = 0; Bc < nc; Bc++)
        if (!rB(Bc, cB)) cB: for (let Ic = -Vc; Ic <= Vc; Ic++) {
          const sc = Vc - Math.abs(Ic);
          for (let Vc = -sc; Vc <= sc; Vc++)
            if (rB(Bc + Vc, cB + Ic)) {
              uc.push(cB * nc + Bc);
              break cB
            }
        }
    for (const sc of uc) Bc.set(cB, 4 * sc), Bc[4 * sc + 3] = 255
  }
  const Vc = Math.SQRT1_2,
    Ic = Math.sqrt(3) / 2,
    rB = {
      boxes: [
        [0, 0, 0, 1, 1, 1]
      ],
      cropFaces: !1
    },
    uc = {
      boxes: [
        [0, 0, 0, 1, .5, 1]
      ],
      cropFaces: !1
    },
    sc = {
      boxes: [
        [0, 0, 0, 1, .5, 1],
        [0, .5, 0, .5, 1, 1]
      ],
      cropFaces: !0
    };
  const Mc = 1e-6;

  function Pc(cB, Bc, nc, Vc) {
    let {
      origin: Ic,
      across: rB,
      down: uc,
      texture: sc,
      rect: [Pc, qB, Oc, Tc],
      shade: fc
    } = Vc;
    const mB = rB.x * uc.y - rB.y * uc.x;
    if (Math.abs(mB) < 1e-9) return;
    const ec = [Ic.x, Ic.x + rB.x, Ic.x + uc.x, Ic.x + rB.x + uc.x],
      tB = [Ic.y, Ic.y + rB.y, Ic.y + uc.y, Ic.y + rB.y + uc.y],
      Sc = Math.max(0, Math.floor(Math.min(...ec))),
      yB = Math.min(nc - 1, Math.ceil(Math.max(...ec))),
      zB = Math.max(0, Math.floor(Math.min(...tB))),
      pc = Math.min(nc - 1, Math.ceil(Math.max(...tB)));
    for (let hc = zB; hc <= pc; hc++)
      for (let Vc = Sc; Vc <= yB; Vc++) {
        const ec = Vc + .5 - Ic.x,
          tB = hc + .5 - Ic.y,
          Sc = (ec * uc.y - tB * uc.x) / mB,
          yB = (rB.x * tB - rB.y * ec) / mB;
        if (Sc < -Mc || Sc > 1 + Mc || yB < -Mc || yB > 1 + Mc) continue;
        const zB = hc * nc + Vc;
        Bc[zB] = 1;
        const pc = Pc + Math.min(Math.max(Sc, 0), 1) * (Oc - Pc),
          aB = qB + Math.min(Math.max(yB, 0), 1) * (Tc - qB),
          lc = Math.min(sc.width - 1, Math.floor(pc * sc.width)),
          Yc = 4 * (Math.min(sc.height - 1, Math.floor(aB * sc.height)) * sc.width + lc),
          Lc = sc.pixels[Yc + 3] / 255;
        if (0 === Lc) continue;
        const gB = 4 * zB,
          Uc = cB[gB + 3] / 255 * (1 - Lc),
          bB = Lc + Uc;
        for (let Bc = 0; Bc < 3; Bc++) cB[gB + Bc] = (sc.pixels[Yc + Bc] * fc * Lc + cB[gB + Bc] * Uc) / bB;
        cB[gB + 3] = 255 * bB
      }
  }
  const qB = {
      pixelsOf(cB) {
        const Bc = new OffscreenCanvas(cB.width, cB.height),
          nc = Bc.getContext("2d");
        if (!nc) throw new Error("no 2D context");
        return nc.drawImage(cB, 0, 0), cB.close(), {
          width: Bc.width,
          height: Bc.height,
          pixels: nc.getImageData(0, 0, Bc.width, Bc.height).data
        }
      },
      async encode(cB, Bc) {
        const nc = new OffscreenCanvas(Bc, Bc),
          Vc = nc.getContext("2d");
        if (!Vc) throw new Error("no 2D context");
        Vc.putImageData(new ImageData(cB, Bc, Bc), 0, 0);
        const Ic = await nc.convertToBlob();
        return new Promise(((cB, Bc) => {
          const nc = new FileReader;
          nc.onload = () => {
            cB(nc.result)
          }, nc.onerror = () => {
            var cB;
            Bc(null !== (cB = nc.error) && void 0 !== cB ? cB : new Error("the icon did not encode"))
          }, nc.readAsDataURL(Ic)
        }))
      }
    },
    Oc = globalThis.WorkerGlobalScope;
  void 0 !== Oc && globalThis instanceof Oc && function(cB, Mc) {
    const qB = new Map,
      Oc = cB => {
        const Bc = qB.get(cB);
        if (void 0 === Bc) throw new Error(`no texture was sent for ${cB.slice(0,100)}`);
        return Bc
      };
    cB.onmessage = Tc => {
      let {
        data: fc
      } = Tc;
      if ("texture" === fc.type) return void qB.set(fc.url, Mc.pixelsOf(fc.bitmap));
      const {
        id: mB,
        top: ec,
        left: tB,
        right: Sc,
        itemType: yB,
        size: zB,
        outlineWidth: pc
      } = fc;
      (async () => {
        try {
          const qB = function(cB, rB, uc, sc) {
            const Mc = .6 * uc,
              qB = Mc * Vc,
              Oc = Mc * Vc * .5,
              Tc = Mc * Ic,
              fc = Math.max(...rB.boxes.map((cB => cB[4]))),
              mB = qB / 2 + (uc - qB) / 2,
              ec = Oc + (uc - Oc - Oc - fc * Tc) / 2,
              tB = (cB, Bc, nc) => ({
                x: mB + (cB - nc) * qB,
                y: ec - Oc + (cB + nc) * Oc + (fc - Bc) * Tc
              }),
              Sc = (cB, Bc, nc, Vc, Ic, uc) => ({
                origin: cB,
                across: {
                  x: Bc.x - cB.x,
                  y: Bc.y - cB.y
                },
                down: {
                  x: nc.x - cB.x,
                  y: nc.y - cB.y
                },
                texture: Vc,
                rect: rB.cropFaces ? Ic : [0, 0, 1, 1],
                shade: uc
              }),
              yB = new Uint8ClampedArray(uc * uc * 4),
              zB = new Uint8Array(uc * uc),
              pc = Bc;
            for (const [Bc, nc, Vc, Ic, hc, aB] of rB.boxes) {
              const rB = Sc(tB(Ic, hc, aB), tB(Ic, hc, Vc), tB(Ic, nc, aB), cB.right, [1 - aB, 1 - hc, 1 - Vc, 1 - nc], pc.right),
                sc = Sc(tB(Bc, hc, aB), tB(Ic, hc, aB), tB(Bc, nc, aB), cB.left, [Bc, 1 - hc, Ic, 1 - nc], pc.left),
                Mc = Sc(tB(Bc, hc, Vc), tB(Ic, hc, Vc), tB(Bc, hc, aB), cB.top, [Bc, Vc, Ic, aB], pc.top);
              for (const cB of [rB, sc, Mc]) Pc(yB, zB, uc, cB)
            }
            return nc(yB, uc, sc, (cB => 1 === zB[cB])), yB
          }({
            top: Oc(ec),
            left: Oc(tB),
            right: Oc(Sc)
          }, function(cB) {
            return "SlabBlock" === cB ? uc : "StairsBlock" === cB ? sc : rB
          }(yB), zB, pc);
          cB.postMessage({
            type: "drawn",
            id: mB,
            url: await Mc.encode(qB, zB)
          })
        } catch (qB) {
          cB.postMessage({
            type: "failed",
            message: String(qB)
          })
        }
      })()
    }, cB.postMessage({
      type: "started"
    })
  }(globalThis, qB)
})();