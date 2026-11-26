(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var UU = __webpack_require__.u,
        XU = __webpack_require__.e,
        zU = {},
        cU = {};
      __webpack_require__.u = function(XU) {
        return UU(XU) + (zU.hasOwnProperty(XU) ? "?" + zU[XU] : "")
      }, __webpack_require__.e = function(yU) {
        return XU(yU).catch((function(XU) {
          var QU = cU.hasOwnProperty(yU) ? cU[yU] : 4;
          if (QU < 1) {
            var AU = UU(yU);
            if (XU.message = "Loading chunk " + yU + " failed after 4 retries.\n(" + AU + ")", XU.request = AU, zU[yU] = "cache-bust=" + Date.now(), setTimeout((function() {
                delete cU[yU]
              }), 0), "CSS_CHUNK_LOAD_FAILED" === XU.code) {
              var FU = __webpack_require__.miniCssF(yU);
              XU.message = XU.message.replace("Loading chunk", "Loading CSS chunk").replace(AU, FU), XU.request = FU
            }
            throw XU
          }
          return new Promise((function(UU) {
            var XU = 4 - QU + 1;
            setTimeout((function() {
              var XU = "cache-bust=" + Date.now();
              zU[yU] = XU, cU[yU] = QU - 1, UU(__webpack_require__.e(yU))
            }), function(UU) {
              return 500 * Math.pow(2, UU)
            }(XU))
          }))
        }))
      }
    }
  })();
  const UU = Math.SQRT1_2,
    XU = Math.SQRT1_2 / 2,
    zU = Math.sqrt(3) / 2,
    cU = 2 * UU,
    yU = 2 * XU + zU;

  function QU(XU, zU) {
    const cU = zU > 0 ? zU + 1 : 0,
      QU = .6 * XU - zU / UU;
    return Math.max(0, Math.min(QU, (XU - 2 * cU) / yU))
  }
  const AU = [15, 15, 15],
    FU = {
      top: 1,
      left: .85,
      right: .7
    };

  function oU(UU, XU, zU, AU) {
    const {
      vertices: FU,
      uvs: oU,
      indices: DU,
      shades: EU
    } = UU, NU = function(UU, XU) {
      const zU = QU(UU, XU),
        AU = cU * zU,
        FU = yU * zU;
      return {
        left: (UU - AU) / 2,
        top: (UU - FU) / 2,
        width: AU,
        height: FU
      }
    }(zU, AU), IU = new Float32Array(FU.length);
    for (let cU = 0; cU < FU.length; cU += 3) IU[cU] = NU.left + FU[cU] * NU.width, IU[cU + 1] = NU.top + FU[cU + 1] * NU.height, IU[cU + 2] = FU[cU + 2];
    const pU = new Float32Array(zU * zU).fill(-1 / 0),
      aU = new Uint8ClampedArray(zU * zU * 4),
      tU = 255 * UU.alphaCutoff;
    for (let cU = 0; cU < DU.length; cU += 3) {
      const [UU, yU, QU] = [DU[cU], DU[cU + 1], DU[cU + 2]], [AU, FU, YU] = [3 * UU, 3 * yU, 3 * QU], [NU, gU, kU, GU, BU, ZU] = [IU[AU], IU[AU + 1], IU[FU], IU[FU + 1], IU[YU], IU[YU + 1]], RU = (kU - NU) * (ZU - gU) - (BU - NU) * (GU - gU);
      if (Math.abs(RU) < 1e-9) continue;
      const PU = EU[cU / 3],
        [WU, dU, LU, eU, CU, wU] = [oU[2 * UU], oU[2 * UU + 1], oU[2 * yU], oU[2 * yU + 1], oU[2 * QU], oU[2 * QU + 1]],
        qU = Math.max(0, Math.floor(Math.min(NU, kU, BU))),
        OU = Math.min(zU - 1, Math.ceil(Math.max(NU, kU, BU))),
        SU = Math.max(0, Math.floor(Math.min(gU, GU, ZU))),
        rU = Math.min(zU - 1, Math.ceil(Math.max(gU, GU, ZU)));
      for (let cU = SU; cU <= rU; cU++)
        for (let UU = qU; UU <= OU; UU++) {
          const [yU, QU] = [UU + .5, cU + .5], oU = ((yU - NU) * (ZU - gU) - (BU - NU) * (QU - gU)) / RU, DU = ((kU - NU) * (QU - gU) - (yU - NU) * (GU - gU)) / RU, EU = 1 - oU - DU;
          if (EU < 0 || oU < 0 || DU < 0) continue;
          const qU = EU * IU[AU + 2] + oU * IU[FU + 2] + DU * IU[YU + 2],
            OU = cU * zU + UU;
          if (qU <= pU[OU]) continue;
          const SU = Math.max(0, Math.min(XU.width - 1, Math.floor((EU * WU + oU * LU + DU * CU) * XU.width))),
            rU = 4 * (Math.max(0, Math.min(XU.height - 1, Math.floor((EU * dU + oU * eU + DU * wU) * XU.height))) * XU.width + SU);
          XU.pixels[rU + 3] < tU || (pU[OU] = qU, aU[4 * OU] = XU.pixels[rU] * PU, aU[4 * OU + 1] = XU.pixels[rU + 1] * PU, aU[4 * OU + 2] = XU.pixels[rU + 2] * PU, aU[4 * OU + 3] = 255)
        }
    }
    return YU(aU, zU, AU), aU
  }
  let DU = NaN,
    EU = new Int32Array(0);

  function YU(UU, XU, zU) {
    let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : XU => 0 !== UU[4 * XU + 3];
    const yU = new Uint8Array(XU * XU);
    for (let AU = 0; AU < XU * XU; AU++) yU[AU] = cU(AU) ? 1 : 0;
    const QU = (UU, zU) => UU >= 0 && zU >= 0 && UU < XU && zU < XU && 0 === yU[zU * XU + UU],
      FU = new Float32Array(XU * XU).fill(1 / 0),
      oU = function(UU) {
        if (UU !== DU) {
          const XU = Math.ceil(UU + 1),
            zU = [];
          for (let cU = -XU; cU <= XU; cU++)
            for (let yU = -XU; yU <= XU; yU++) {
              const XU = yU * yU + cU * cU;
              XU > 0 && XU < (UU + 1) ** 2 && zU.push(yU, cU, XU)
            }
          DU = UU, EU = Int32Array.from(zU)
        }
        return EU
      }(zU);
    for (let AU = 0; AU < XU; AU++)
      for (let UU = 0; UU < XU; UU++) {
        if (1 === yU[AU * XU + UU] && (QU(UU - 1, AU) || QU(UU + 1, AU) || QU(UU, AU - 1) || QU(UU, AU + 1)))
          for (let zU = 0; zU < oU.length; zU += 3) {
            const cU = UU + oU[zU],
              yU = AU + oU[zU + 1];
            if (cU >= 0 && yU >= 0 && cU < XU && yU < XU) {
              const UU = yU * XU + cU;
              FU[UU] = Math.min(FU[UU], oU[zU + 2])
            }
          }
      }
    for (let DU = 0; DU < XU * XU; DU++) 1 !== yU[DU] && FU[DU] !== 1 / 0 && (UU.set(AU, 4 * DU), UU[4 * DU + 3] = Math.round(255 * Math.min(1, zU + 1 - Math.sqrt(FU[DU]))))
  }
  const NU = {
      boxes: [
        [0, 0, 0, 1, 1, 1]
      ],
      cropFaces: !1
    },
    IU = {
      boxes: [
        [0, 0, 0, 1, .5, 1]
      ],
      cropFaces: !1
    },
    pU = {
      boxes: [
        [0, 0, 0, 1, .5, 1],
        [0, .5, 0, .5, 1, 1]
      ],
      cropFaces: !0
    };
  const aU = 1e-6;

  function tU(UU, XU, zU, cU) {
    let {
      origin: yU,
      across: QU,
      down: AU,
      texture: FU,
      rect: [oU, DU, EU, YU],
      shade: NU
    } = cU;
    const IU = QU.x * AU.y - QU.y * AU.x;
    if (Math.abs(IU) < 1e-9) return;
    const pU = [yU.x, yU.x + QU.x, yU.x + AU.x, yU.x + QU.x + AU.x],
      tU = [yU.y, yU.y + QU.y, yU.y + AU.y, yU.y + QU.y + AU.y],
      gU = Math.max(0, Math.floor(Math.min(...pU))),
      kU = Math.min(zU - 1, Math.ceil(Math.max(...pU))),
      GU = Math.max(0, Math.floor(Math.min(...tU))),
      BU = Math.min(zU - 1, Math.ceil(Math.max(...tU)));
    for (let ZU = GU; ZU <= BU; ZU++)
      for (let cU = gU; cU <= kU; cU++) {
        const pU = cU + .5 - yU.x,
          tU = ZU + .5 - yU.y,
          gU = (pU * AU.y - tU * AU.x) / IU,
          kU = (QU.x * tU - QU.y * pU) / IU;
        if (gU < -aU || gU > 1 + aU || kU < -aU || kU > 1 + aU) continue;
        const GU = ZU * zU + cU;
        XU[GU] = 1;
        const BU = oU + Math.min(Math.max(gU, 0), 1) * (EU - oU),
          RU = DU + Math.min(Math.max(kU, 0), 1) * (YU - DU),
          PU = Math.min(FU.width - 1, Math.floor(BU * FU.width)),
          WU = 4 * (Math.min(FU.height - 1, Math.floor(RU * FU.height)) * FU.width + PU),
          dU = FU.pixels[WU + 3] / 255;
        if (0 === dU) continue;
        const LU = 4 * GU,
          eU = UU[LU + 3] / 255 * (1 - dU),
          CU = dU + eU;
        for (let XU = 0; XU < 3; XU++) UU[LU + XU] = (FU.pixels[WU + XU] * NU * dU + UU[LU + XU] * eU) / CU;
        UU[LU + 3] = 255 * CU
      }
  }

  function gU(UU, XU, zU) {
    const cU = UU.get(XU);
    if (void 0 === cU) throw new Error(`no ${zU} was sent for ${XU.slice(0,100)}`);
    return cU
  }
  const kU = {
      pixelsOf(UU) {
        const XU = new OffscreenCanvas(UU.width, UU.height),
          zU = XU.getContext("2d");
        if (!zU) throw new Error("no 2D context");
        return zU.drawImage(UU, 0, 0), UU.close(), {
          width: XU.width,
          height: XU.height,
          pixels: zU.getImageData(0, 0, XU.width, XU.height).data
        }
      },
      async encode(UU, XU) {
        const zU = new OffscreenCanvas(XU, XU),
          cU = zU.getContext("2d");
        if (!cU) throw new Error("no 2D context");
        cU.putImageData(new ImageData(UU, XU, XU), 0, 0);
        const yU = await zU.convertToBlob();
        return new Promise(((UU, XU) => {
          const zU = new FileReader;
          zU.onload = () => {
            UU(zU.result)
          }, zU.onerror = () => {
            var UU;
            XU(null !== (UU = zU.error) && void 0 !== UU ? UU : new Error("the icon did not encode"))
          }, zU.readAsDataURL(yU)
        }))
      }
    },
    GU = globalThis.WorkerGlobalScope;
  void 0 !== GU && globalThis instanceof GU && function(cU, yU) {
    const AU = new Map,
      DU = new Map,
      EU = (UU, XU, zU) => {
        (async () => {
          try {
            cU.postMessage({
              type: "drawn",
              id: UU,
              url: await yU.encode(zU(), XU)
            })
          } catch (QU) {
            cU.postMessage({
              type: "failed",
              message: String(QU)
            })
          }
        })()
      };
    cU.onmessage = cU => {
      let {
        data: aU
      } = cU;
      if ("texture" === aU.type) AU.set(aU.url, yU.pixelsOf(aU.bitmap));
      else if ("model" === aU.type) DU.set(aU.name, {
        geometry: aU.geometry,
        texture: yU.pixelsOf(aU.bitmap)
      });
      else if ("draw" === aU.type) {
        const {
          id: cU,
          top: yU,
          left: oU,
          right: DU,
          itemType: kU,
          size: GU,
          outlineWidth: BU
        } = aU;
        EU(cU, GU, (() => function(cU, yU, AU, oU) {
          const DU = QU(AU, oU),
            EU = DU * UU,
            NU = DU * XU,
            IU = DU * zU,
            pU = Math.max(...yU.boxes.map((UU => UU[4]))),
            aU = AU / 2,
            gU = NU + (AU - NU - NU - pU * IU) / 2,
            kU = (UU, XU, zU) => ({
              x: aU + (UU - zU) * EU,
              y: gU - NU + (UU + zU) * NU + (pU - XU) * IU
            }),
            GU = (UU, XU, zU, cU, QU, AU) => ({
              origin: UU,
              across: {
                x: XU.x - UU.x,
                y: XU.y - UU.y
              },
              down: {
                x: zU.x - UU.x,
                y: zU.y - UU.y
              },
              texture: cU,
              rect: yU.cropFaces ? QU : [0, 0, 1, 1],
              shade: AU
            }),
            BU = new Uint8ClampedArray(AU * AU * 4),
            ZU = new Uint8Array(AU * AU),
            RU = FU;
          for (const [UU, XU, zU, QU, FU, YU] of yU.boxes) {
            const yU = GU(kU(QU, FU, YU), kU(QU, FU, zU), kU(QU, XU, YU), cU.right, [1 - YU, 1 - FU, 1 - zU, 1 - XU], RU.right),
              oU = GU(kU(UU, FU, YU), kU(QU, FU, YU), kU(UU, XU, YU), cU.left, [UU, 1 - FU, QU, 1 - XU], RU.left),
              DU = GU(kU(UU, FU, zU), kU(QU, FU, zU), kU(UU, FU, YU), cU.top, [UU, zU, QU, YU], RU.top);
            for (const UU of [yU, oU, DU]) tU(BU, ZU, AU, UU)
          }
          return YU(BU, AU, oU, (UU => 1 === ZU[UU])), BU
        }({
          top: gU(AU, yU, "texture"),
          left: gU(AU, oU, "texture"),
          right: gU(AU, DU, "texture")
        }, function(UU) {
          return "SlabBlock" === UU ? IU : "StairsBlock" === UU ? pU : NU
        }(kU), GU, BU)))
      } else {
        const {
          id: UU,
          name: XU,
          size: zU,
          outlineWidth: cU
        } = aU;
        EU(UU, zU, (() => {
          const {
            geometry: UU,
            texture: yU
          } = gU(DU, XU, "model");
          return oU(UU, yU, zU, cU)
        }))
      }
    }, cU.postMessage({
      type: "started"
    })
  }(globalThis, kU)
})();