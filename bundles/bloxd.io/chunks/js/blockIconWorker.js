(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var JJ = __webpack_require__.u,
        cJ = __webpack_require__.e,
        ZJ = {},
        FJ = {};
      __webpack_require__.u = function(cJ) {
        return JJ(cJ) + (ZJ.hasOwnProperty(cJ) ? "?" + ZJ[cJ] : "")
      }, __webpack_require__.e = function(UJ) {
        return cJ(UJ).catch((function(cJ) {
          var eJ = FJ.hasOwnProperty(UJ) ? FJ[UJ] : 4;
          if (eJ < 1) {
            var XJ = JJ(UJ);
            throw cJ.message = "Loading chunk " + UJ + " failed after 4 retries.\n(" + XJ + ")", cJ.request = XJ, ZJ[UJ] = "cache-bust=" + Date.now(), setTimeout((function() {
              delete FJ[UJ]
            }), 0), cJ
          }
          return new Promise((function(JJ) {
            var cJ = 4 - eJ + 1;
            setTimeout((function() {
              var cJ = "cache-bust=" + Date.now();
              ZJ[UJ] = cJ, FJ[UJ] = eJ - 1, JJ(__webpack_require__.e(UJ))
            }), function(JJ) {
              return 500 * Math.pow(2, JJ)
            }(cJ))
          }))
        }))
      }
    }
  })();
  const JJ = [15, 15, 15],
    cJ = {
      top: 1,
      left: .85,
      right: .7
    };

  function ZJ(cJ, ZJ, FJ) {
    let UJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : JJ => 0 !== cJ[4 * JJ + 3];
    const eJ = (JJ, cJ) => JJ < 0 || cJ < 0 || JJ >= ZJ || cJ >= ZJ || !UJ(cJ * ZJ + JJ),
      XJ = [];
    for (let JJ = 0; JJ < ZJ; JJ++)
      for (let cJ = 0; cJ < ZJ; cJ++)
        if (!eJ(cJ, JJ)) JJ: for (let UJ = -FJ; UJ <= FJ; UJ++) {
          const AJ = FJ - Math.abs(UJ);
          for (let FJ = -AJ; FJ <= AJ; FJ++)
            if (eJ(cJ + FJ, JJ + UJ)) {
              XJ.push(JJ * ZJ + cJ);
              break JJ
            }
        }
    for (const AJ of XJ) cJ.set(JJ, 4 * AJ), cJ[4 * AJ + 3] = 255
  }
  const FJ = Math.SQRT1_2,
    UJ = Math.sqrt(3) / 2,
    eJ = {
      boxes: [
        [0, 0, 0, 1, 1, 1]
      ],
      cropFaces: !1
    },
    XJ = {
      boxes: [
        [0, 0, 0, 1, .5, 1]
      ],
      cropFaces: !1
    },
    AJ = {
      boxes: [
        [0, 0, 0, 1, .5, 1],
        [0, .5, 0, .5, 1, 1]
      ],
      cropFaces: !0
    };
  const qJ = 1e-6;

  function jJ(JJ, cJ, ZJ, FJ) {
    let {
      origin: UJ,
      across: eJ,
      down: XJ,
      texture: AJ,
      rect: [jJ, YJ, hJ, DJ],
      shade: sJ
    } = FJ;
    const nJ = eJ.x * XJ.y - eJ.y * XJ.x;
    if (Math.abs(nJ) < 1e-9) return;
    const GJ = [UJ.x, UJ.x + eJ.x, UJ.x + XJ.x, UJ.x + eJ.x + XJ.x],
      fJ = [UJ.y, UJ.y + eJ.y, UJ.y + XJ.y, UJ.y + eJ.y + XJ.y],
      xJ = Math.max(0, Math.floor(Math.min(...GJ))),
      rJ = Math.min(ZJ - 1, Math.ceil(Math.max(...GJ))),
      vJ = Math.max(0, Math.floor(Math.min(...fJ))),
      mJ = Math.min(ZJ - 1, Math.ceil(Math.max(...fJ)));
    for (let QJ = vJ; QJ <= mJ; QJ++)
      for (let FJ = xJ; FJ <= rJ; FJ++) {
        const GJ = FJ + .5 - UJ.x,
          fJ = QJ + .5 - UJ.y,
          xJ = (GJ * XJ.y - fJ * XJ.x) / nJ,
          rJ = (eJ.x * fJ - eJ.y * GJ) / nJ;
        if (xJ < -qJ || xJ > 1 + qJ || rJ < -qJ || rJ > 1 + qJ) continue;
        const vJ = QJ * ZJ + FJ;
        cJ[vJ] = 1;
        const mJ = jJ + Math.min(Math.max(xJ, 0), 1) * (hJ - jJ),
          EJ = YJ + Math.min(Math.max(rJ, 0), 1) * (DJ - YJ),
          VJ = Math.min(AJ.width - 1, Math.floor(mJ * AJ.width)),
          KJ = 4 * (Math.min(AJ.height - 1, Math.floor(EJ * AJ.height)) * AJ.width + VJ),
          yJ = AJ.pixels[KJ + 3] / 255;
        if (0 === yJ) continue;
        const SJ = 4 * vJ,
          IJ = JJ[SJ + 3] / 255 * (1 - yJ),
          MJ = yJ + IJ;
        for (let cJ = 0; cJ < 3; cJ++) JJ[SJ + cJ] = (AJ.pixels[KJ + cJ] * sJ * yJ + JJ[SJ + cJ] * IJ) / MJ;
        JJ[SJ + 3] = 255 * MJ
      }
  }

  function YJ(JJ, cJ, ZJ) {
    const FJ = JJ.get(cJ);
    if (void 0 === FJ) throw new Error(`no ${ZJ} was sent for ${cJ.slice(0,100)}`);
    return FJ
  }
  const hJ = {
      pixelsOf(JJ) {
        const cJ = new OffscreenCanvas(JJ.width, JJ.height),
          ZJ = cJ.getContext("2d");
        if (!ZJ) throw new Error("no 2D context");
        return ZJ.drawImage(JJ, 0, 0), JJ.close(), {
          width: cJ.width,
          height: cJ.height,
          pixels: ZJ.getImageData(0, 0, cJ.width, cJ.height).data
        }
      },
      async encode(JJ, cJ) {
        const ZJ = new OffscreenCanvas(cJ, cJ),
          FJ = ZJ.getContext("2d");
        if (!FJ) throw new Error("no 2D context");
        FJ.putImageData(new ImageData(JJ, cJ, cJ), 0, 0);
        const UJ = await ZJ.convertToBlob();
        return new Promise(((JJ, cJ) => {
          const ZJ = new FileReader;
          ZJ.onload = () => {
            JJ(ZJ.result)
          }, ZJ.onerror = () => {
            var JJ;
            cJ(null !== (JJ = ZJ.error) && void 0 !== JJ ? JJ : new Error("the icon did not encode"))
          }, ZJ.readAsDataURL(UJ)
        }))
      }
    },
    DJ = globalThis.WorkerGlobalScope;
  void 0 !== DJ && globalThis instanceof DJ && function(JJ, qJ) {
    const hJ = new Map,
      DJ = new Map,
      sJ = (cJ, ZJ, FJ) => {
        (async () => {
          try {
            JJ.postMessage({
              type: "drawn",
              id: cJ,
              url: await qJ.encode(FJ(), ZJ)
            })
          } catch (UJ) {
            JJ.postMessage({
              type: "failed",
              message: String(UJ)
            })
          }
        })()
      };
    JJ.onmessage = JJ => {
      let {
        data: nJ
      } = JJ;
      if ("texture" === nJ.type) hJ.set(nJ.url, qJ.pixelsOf(nJ.bitmap));
      else if ("model" === nJ.type) DJ.set(nJ.name, {
        geometry: nJ.geometry,
        texture: qJ.pixelsOf(nJ.bitmap)
      });
      else if ("draw" === nJ.type) {
        const {
          id: JJ,
          top: qJ,
          left: DJ,
          right: GJ,
          itemType: fJ,
          size: xJ,
          outlineWidth: rJ
        } = nJ;
        sJ(JJ, xJ, (() => function(JJ, eJ, XJ, AJ) {
          const qJ = .6 * XJ,
            YJ = qJ * FJ,
            hJ = qJ * FJ * .5,
            DJ = qJ * UJ,
            sJ = Math.max(...eJ.boxes.map((JJ => JJ[4]))),
            nJ = YJ / 2 + (XJ - YJ) / 2,
            GJ = hJ + (XJ - hJ - hJ - sJ * DJ) / 2,
            fJ = (JJ, cJ, ZJ) => ({
              x: nJ + (JJ - ZJ) * YJ,
              y: GJ - hJ + (JJ + ZJ) * hJ + (sJ - cJ) * DJ
            }),
            xJ = (JJ, cJ, ZJ, FJ, UJ, XJ) => ({
              origin: JJ,
              across: {
                x: cJ.x - JJ.x,
                y: cJ.y - JJ.y
              },
              down: {
                x: ZJ.x - JJ.x,
                y: ZJ.y - JJ.y
              },
              texture: FJ,
              rect: eJ.cropFaces ? UJ : [0, 0, 1, 1],
              shade: XJ
            }),
            rJ = new Uint8ClampedArray(XJ * XJ * 4),
            vJ = new Uint8Array(XJ * XJ),
            mJ = cJ;
          for (const [cJ, ZJ, FJ, UJ, QJ, EJ] of eJ.boxes) {
            const eJ = xJ(fJ(UJ, QJ, EJ), fJ(UJ, QJ, FJ), fJ(UJ, ZJ, EJ), JJ.right, [1 - EJ, 1 - QJ, 1 - FJ, 1 - ZJ], mJ.right),
              AJ = xJ(fJ(cJ, QJ, EJ), fJ(UJ, QJ, EJ), fJ(cJ, ZJ, EJ), JJ.left, [cJ, 1 - QJ, UJ, 1 - ZJ], mJ.left),
              qJ = xJ(fJ(cJ, QJ, FJ), fJ(UJ, QJ, FJ), fJ(cJ, QJ, EJ), JJ.top, [cJ, FJ, UJ, EJ], mJ.top);
            for (const JJ of [eJ, AJ, qJ]) jJ(rJ, vJ, XJ, JJ)
          }
          return ZJ(rJ, XJ, AJ, (JJ => 1 === vJ[JJ])), rJ
        }({
          top: YJ(hJ, qJ, "texture"),
          left: YJ(hJ, DJ, "texture"),
          right: YJ(hJ, GJ, "texture")
        }, function(JJ) {
          return "SlabBlock" === JJ ? XJ : "StairsBlock" === JJ ? AJ : eJ
        }(fJ), xJ, rJ)))
      } else {
        const {
          id: JJ,
          name: cJ,
          size: FJ,
          outlineWidth: UJ
        } = nJ;
        sJ(JJ, FJ, (() => {
          const {
            geometry: JJ,
            texture: eJ
          } = YJ(DJ, cJ, "model");
          return function(JJ, cJ, FJ, UJ) {
            const {
              vertices: eJ,
              uvs: XJ,
              indices: AJ,
              shades: qJ
            } = JJ, jJ = .03125 * FJ, YJ = FJ - 2 * jJ, hJ = new Float32Array(eJ.length);
            for (let ZJ = 0; ZJ < eJ.length; ZJ += 3) hJ[ZJ] = jJ + eJ[ZJ] * YJ, hJ[ZJ + 1] = jJ + eJ[ZJ + 1] * YJ, hJ[ZJ + 2] = eJ[ZJ + 2];
            const DJ = new Float32Array(FJ * FJ).fill(-1 / 0),
              sJ = new Uint8ClampedArray(FJ * FJ * 4),
              nJ = 255 * JJ.alphaCutoff;
            for (let ZJ = 0; ZJ < AJ.length; ZJ += 3) {
              const [JJ, UJ, eJ] = [AJ[ZJ], AJ[ZJ + 1], AJ[ZJ + 2]], [jJ, YJ, GJ] = [3 * JJ, 3 * UJ, 3 * eJ], [fJ, xJ, rJ, vJ, mJ, QJ] = [hJ[jJ], hJ[jJ + 1], hJ[YJ], hJ[YJ + 1], hJ[GJ], hJ[GJ + 1]], EJ = (rJ - fJ) * (QJ - xJ) - (mJ - fJ) * (vJ - xJ);
              if (Math.abs(EJ) < 1e-9) continue;
              const VJ = qJ[ZJ / 3],
                [KJ, yJ, SJ, IJ, MJ, bJ] = [XJ[2 * JJ], XJ[2 * JJ + 1], XJ[2 * UJ], XJ[2 * UJ + 1], XJ[2 * eJ], XJ[2 * eJ + 1]],
                wJ = Math.max(0, Math.floor(Math.min(fJ, rJ, mJ))),
                WJ = Math.min(FJ - 1, Math.ceil(Math.max(fJ, rJ, mJ))),
                gJ = Math.max(0, Math.floor(Math.min(xJ, vJ, QJ))),
                HJ = Math.min(FJ - 1, Math.ceil(Math.max(xJ, vJ, QJ)));
              for (let ZJ = gJ; ZJ <= HJ; ZJ++)
                for (let JJ = wJ; JJ <= WJ; JJ++) {
                  const [UJ, eJ] = [JJ + .5, ZJ + .5], XJ = ((UJ - fJ) * (QJ - xJ) - (mJ - fJ) * (eJ - xJ)) / EJ, AJ = ((rJ - fJ) * (eJ - xJ) - (UJ - fJ) * (vJ - xJ)) / EJ, qJ = 1 - XJ - AJ;
                  if (qJ < 0 || XJ < 0 || AJ < 0) continue;
                  const wJ = qJ * hJ[jJ + 2] + XJ * hJ[YJ + 2] + AJ * hJ[GJ + 2],
                    WJ = ZJ * FJ + JJ;
                  if (wJ <= DJ[WJ]) continue;
                  const gJ = Math.max(0, Math.min(cJ.width - 1, Math.floor((qJ * KJ + XJ * SJ + AJ * MJ) * cJ.width))),
                    HJ = 4 * (Math.max(0, Math.min(cJ.height - 1, Math.floor((qJ * yJ + XJ * IJ + AJ * bJ) * cJ.height))) * cJ.width + gJ);
                  cJ.pixels[HJ + 3] < nJ || (DJ[WJ] = wJ, sJ[4 * WJ] = cJ.pixels[HJ] * VJ, sJ[4 * WJ + 1] = cJ.pixels[HJ + 1] * VJ, sJ[4 * WJ + 2] = cJ.pixels[HJ + 2] * VJ, sJ[4 * WJ + 3] = 255)
                }
            }
            return ZJ(sJ, FJ, UJ), sJ
          }(JJ, eJ, FJ, UJ)
        }))
      }
    }, JJ.postMessage({
      type: "started"
    })
  }(globalThis, hJ)
})();