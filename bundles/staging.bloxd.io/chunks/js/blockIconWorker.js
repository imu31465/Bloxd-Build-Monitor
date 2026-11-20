(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var UU = __webpack_require__.u,
        RU = __webpack_require__.e,
        gU = {},
        tU = {};
      __webpack_require__.u = function(RU) {
        return UU(RU) + (gU.hasOwnProperty(RU) ? "?" + gU[RU] : "")
      }, __webpack_require__.e = function(pU) {
        return RU(pU).catch((function(RU) {
          var EU = tU.hasOwnProperty(pU) ? tU[pU] : 4;
          if (EU < 1) {
            var PU = UU(pU);
            throw RU.message = "Loading chunk " + pU + " failed after 4 retries.\n(" + PU + ")", RU.request = PU, gU[pU] = "cache-bust=" + Date.now(), setTimeout((function() {
              delete tU[pU]
            }), 0), RU
          }
          return new Promise((function(UU) {
            var RU = 4 - EU + 1;
            setTimeout((function() {
              var RU = "cache-bust=" + Date.now();
              gU[pU] = RU, tU[pU] = EU - 1, UU(__webpack_require__.e(pU))
            }), function(UU) {
              return 500 * Math.pow(2, UU)
            }(RU))
          }))
        }))
      }
    }
  })();
  const UU = [15, 15, 15],
    RU = {
      top: 1,
      left: .85,
      right: .7
    };

  function gU(RU, gU, tU) {
    let pU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : UU => 0 !== RU[4 * UU + 3];
    const EU = (UU, RU) => UU < 0 || RU < 0 || UU >= gU || RU >= gU || !pU(RU * gU + UU),
      PU = [];
    for (let UU = 0; UU < gU; UU++)
      for (let RU = 0; RU < gU; RU++)
        if (!EU(RU, UU)) UU: for (let pU = -tU; pU <= tU; pU++) {
          const TU = tU - Math.abs(pU);
          for (let tU = -TU; tU <= TU; tU++)
            if (EU(RU + tU, UU + pU)) {
              PU.push(UU * gU + RU);
              break UU
            }
        }
    for (const TU of PU) RU.set(UU, 4 * TU), RU[4 * TU + 3] = 255
  }
  const tU = Math.SQRT1_2,
    pU = Math.sqrt(3) / 2,
    EU = {
      boxes: [
        [0, 0, 0, 1, 1, 1]
      ],
      cropFaces: !1
    },
    PU = {
      boxes: [
        [0, 0, 0, 1, .5, 1]
      ],
      cropFaces: !1
    },
    TU = {
      boxes: [
        [0, 0, 0, 1, .5, 1],
        [0, .5, 0, .5, 1, 1]
      ],
      cropFaces: !0
    };
  const qU = 1e-6;

  function KU(UU, RU, gU, tU) {
    let {
      origin: pU,
      across: EU,
      down: PU,
      texture: TU,
      rect: [KU, cU, GU, jU],
      shade: uU
    } = tU;
    const CU = EU.x * PU.y - EU.y * PU.x;
    if (Math.abs(CU) < 1e-9) return;
    const hU = [pU.x, pU.x + EU.x, pU.x + PU.x, pU.x + EU.x + PU.x],
      QU = [pU.y, pU.y + EU.y, pU.y + PU.y, pU.y + EU.y + PU.y],
      eU = Math.max(0, Math.floor(Math.min(...hU))),
      WU = Math.min(gU - 1, Math.ceil(Math.max(...hU))),
      fU = Math.max(0, Math.floor(Math.min(...QU))),
      xU = Math.min(gU - 1, Math.ceil(Math.max(...QU)));
    for (let mU = fU; mU <= xU; mU++)
      for (let tU = eU; tU <= WU; tU++) {
        const hU = tU + .5 - pU.x,
          QU = mU + .5 - pU.y,
          eU = (hU * PU.y - QU * PU.x) / CU,
          WU = (EU.x * QU - EU.y * hU) / CU;
        if (eU < -qU || eU > 1 + qU || WU < -qU || WU > 1 + qU) continue;
        const fU = mU * gU + tU;
        RU[fU] = 1;
        const xU = KU + Math.min(Math.max(eU, 0), 1) * (GU - KU),
          IU = cU + Math.min(Math.max(WU, 0), 1) * (jU - cU),
          JU = Math.min(TU.width - 1, Math.floor(xU * TU.width)),
          wU = 4 * (Math.min(TU.height - 1, Math.floor(IU * TU.height)) * TU.width + JU),
          nU = TU.pixels[wU + 3] / 255;
        if (0 === nU) continue;
        const bU = 4 * fU,
          oU = UU[bU + 3] / 255 * (1 - nU),
          ZU = nU + oU;
        for (let RU = 0; RU < 3; RU++) UU[bU + RU] = (TU.pixels[wU + RU] * uU * nU + UU[bU + RU] * oU) / ZU;
        UU[bU + 3] = 255 * ZU
      }
  }

  function cU(UU, RU, gU) {
    const tU = UU.get(RU);
    if (void 0 === tU) throw new Error(`no ${gU} was sent for ${RU.slice(0,100)}`);
    return tU
  }
  const GU = {
      pixelsOf(UU) {
        const RU = new OffscreenCanvas(UU.width, UU.height),
          gU = RU.getContext("2d");
        if (!gU) throw new Error("no 2D context");
        return gU.drawImage(UU, 0, 0), UU.close(), {
          width: RU.width,
          height: RU.height,
          pixels: gU.getImageData(0, 0, RU.width, RU.height).data
        }
      },
      async encode(UU, RU) {
        const gU = new OffscreenCanvas(RU, RU),
          tU = gU.getContext("2d");
        if (!tU) throw new Error("no 2D context");
        tU.putImageData(new ImageData(UU, RU, RU), 0, 0);
        const pU = await gU.convertToBlob();
        return new Promise(((UU, RU) => {
          const gU = new FileReader;
          gU.onload = () => {
            UU(gU.result)
          }, gU.onerror = () => {
            var UU;
            RU(null !== (UU = gU.error) && void 0 !== UU ? UU : new Error("the icon did not encode"))
          }, gU.readAsDataURL(pU)
        }))
      }
    },
    jU = globalThis.WorkerGlobalScope;
  void 0 !== jU && globalThis instanceof jU && function(UU, qU) {
    const GU = new Map,
      jU = new Map,
      uU = (RU, gU, tU) => {
        (async () => {
          try {
            UU.postMessage({
              type: "drawn",
              id: RU,
              url: await qU.encode(tU(), gU)
            })
          } catch (pU) {
            UU.postMessage({
              type: "failed",
              message: String(pU)
            })
          }
        })()
      };
    UU.onmessage = UU => {
      let {
        data: CU
      } = UU;
      if ("texture" === CU.type) GU.set(CU.url, qU.pixelsOf(CU.bitmap));
      else if ("model" === CU.type) jU.set(CU.name, {
        geometry: CU.geometry,
        texture: qU.pixelsOf(CU.bitmap)
      });
      else if ("draw" === CU.type) {
        const {
          id: UU,
          top: qU,
          left: jU,
          right: hU,
          itemType: QU,
          size: eU,
          outlineWidth: WU
        } = CU;
        uU(UU, eU, (() => function(UU, EU, PU, TU) {
          const qU = .6 * PU,
            cU = qU * tU,
            GU = qU * tU * .5,
            jU = qU * pU,
            uU = Math.max(...EU.boxes.map((UU => UU[4]))),
            CU = cU / 2 + (PU - cU) / 2,
            hU = GU + (PU - GU - GU - uU * jU) / 2,
            QU = (UU, RU, gU) => ({
              x: CU + (UU - gU) * cU,
              y: hU - GU + (UU + gU) * GU + (uU - RU) * jU
            }),
            eU = (UU, RU, gU, tU, pU, PU) => ({
              origin: UU,
              across: {
                x: RU.x - UU.x,
                y: RU.y - UU.y
              },
              down: {
                x: gU.x - UU.x,
                y: gU.y - UU.y
              },
              texture: tU,
              rect: EU.cropFaces ? pU : [0, 0, 1, 1],
              shade: PU
            }),
            WU = new Uint8ClampedArray(PU * PU * 4),
            fU = new Uint8Array(PU * PU),
            xU = RU;
          for (const [RU, gU, tU, pU, mU, IU] of EU.boxes) {
            const EU = eU(QU(pU, mU, IU), QU(pU, mU, tU), QU(pU, gU, IU), UU.right, [1 - IU, 1 - mU, 1 - tU, 1 - gU], xU.right),
              TU = eU(QU(RU, mU, IU), QU(pU, mU, IU), QU(RU, gU, IU), UU.left, [RU, 1 - mU, pU, 1 - gU], xU.left),
              qU = eU(QU(RU, mU, tU), QU(pU, mU, tU), QU(RU, mU, IU), UU.top, [RU, tU, pU, IU], xU.top);
            for (const UU of [EU, TU, qU]) KU(WU, fU, PU, UU)
          }
          return gU(WU, PU, TU, (UU => 1 === fU[UU])), WU
        }({
          top: cU(GU, qU, "texture"),
          left: cU(GU, jU, "texture"),
          right: cU(GU, hU, "texture")
        }, function(UU) {
          return "SlabBlock" === UU ? PU : "StairsBlock" === UU ? TU : EU
        }(QU), eU, WU)))
      } else {
        const {
          id: UU,
          name: RU,
          size: tU,
          outlineWidth: pU
        } = CU;
        uU(UU, tU, (() => {
          const {
            geometry: UU,
            texture: EU
          } = cU(jU, RU, "model");
          return function(UU, RU, tU, pU) {
            const {
              vertices: EU,
              uvs: PU,
              indices: TU,
              shades: qU
            } = UU, KU = .03125 * tU, cU = tU - 2 * KU, GU = new Float32Array(EU.length);
            for (let gU = 0; gU < EU.length; gU += 3) GU[gU] = KU + EU[gU] * cU, GU[gU + 1] = KU + EU[gU + 1] * cU, GU[gU + 2] = EU[gU + 2];
            const jU = new Float32Array(tU * tU).fill(-1 / 0),
              uU = new Uint8ClampedArray(tU * tU * 4),
              CU = 255 * UU.alphaCutoff;
            for (let gU = 0; gU < TU.length; gU += 3) {
              const [UU, pU, EU] = [TU[gU], TU[gU + 1], TU[gU + 2]], [KU, cU, hU] = [3 * UU, 3 * pU, 3 * EU], [QU, eU, WU, fU, xU, mU] = [GU[KU], GU[KU + 1], GU[cU], GU[cU + 1], GU[hU], GU[hU + 1]], IU = (WU - QU) * (mU - eU) - (xU - QU) * (fU - eU);
              if (Math.abs(IU) < 1e-9) continue;
              const JU = qU[gU / 3],
                [wU, nU, bU, oU, ZU, aU] = [PU[2 * UU], PU[2 * UU + 1], PU[2 * pU], PU[2 * pU + 1], PU[2 * EU], PU[2 * EU + 1]],
                YU = Math.max(0, Math.floor(Math.min(QU, WU, xU))),
                BU = Math.min(tU - 1, Math.ceil(Math.max(QU, WU, xU))),
                VU = Math.max(0, Math.floor(Math.min(eU, fU, mU))),
                rU = Math.min(tU - 1, Math.ceil(Math.max(eU, fU, mU)));
              for (let gU = VU; gU <= rU; gU++)
                for (let UU = YU; UU <= BU; UU++) {
                  const [pU, EU] = [UU + .5, gU + .5], PU = ((pU - QU) * (mU - eU) - (xU - QU) * (EU - eU)) / IU, TU = ((WU - QU) * (EU - eU) - (pU - QU) * (fU - eU)) / IU, qU = 1 - PU - TU;
                  if (qU < 0 || PU < 0 || TU < 0) continue;
                  const YU = qU * GU[KU + 2] + PU * GU[cU + 2] + TU * GU[hU + 2],
                    BU = gU * tU + UU;
                  if (YU <= jU[BU]) continue;
                  const VU = Math.max(0, Math.min(RU.width - 1, Math.floor((qU * wU + PU * bU + TU * ZU) * RU.width))),
                    rU = 4 * (Math.max(0, Math.min(RU.height - 1, Math.floor((qU * nU + PU * oU + TU * aU) * RU.height))) * RU.width + VU);
                  RU.pixels[rU + 3] < CU || (jU[BU] = YU, uU[4 * BU] = RU.pixels[rU] * JU, uU[4 * BU + 1] = RU.pixels[rU + 1] * JU, uU[4 * BU + 2] = RU.pixels[rU + 2] * JU, uU[4 * BU + 3] = 255)
                }
            }
            return gU(uU, tU, pU), uU
          }(UU, EU, tU, pU)
        }))
      }
    }, UU.postMessage({
      type: "started"
    })
  }(globalThis, GU)
})();