(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var GG = __webpack_require__.u,
        bG = __webpack_require__.e,
        ZG = {},
        wG = {};
      __webpack_require__.u = function(bG) {
        return GG(bG) + (ZG.hasOwnProperty(bG) ? "?" + ZG[bG] : "")
      }, __webpack_require__.e = function(SG) {
        return bG(SG).catch((function(bG) {
          var LG = wG.hasOwnProperty(SG) ? wG[SG] : 4;
          if (LG < 1) {
            var yG = GG(SG);
            if (bG.message = "Loading chunk " + SG + " failed after 4 retries.\n(" + yG + ")", bG.request = yG, ZG[SG] = "cache-bust=" + Date.now(), setTimeout((function() {
                delete wG[SG]
              }), 0), "CSS_CHUNK_LOAD_FAILED" === bG.code) {
              var kG = __webpack_require__.miniCssF(SG);
              bG.message = bG.message.replace("Loading chunk", "Loading CSS chunk").replace(yG, kG), bG.request = kG
            }
            throw bG
          }
          return new Promise((function(GG) {
            var bG = 4 - LG + 1;
            setTimeout((function() {
              var bG = "cache-bust=" + Date.now();
              ZG[SG] = bG, wG[SG] = LG - 1, GG(__webpack_require__.e(SG))
            }), function(GG) {
              return 500 * Math.pow(2, GG)
            }(bG))
          }))
        }))
      }
    }
  })();
  const GG = Math.SQRT1_2,
    bG = Math.SQRT1_2 / 2,
    ZG = Math.sqrt(3) / 2,
    wG = 2 * GG,
    SG = 2 * bG + ZG;

  function LG(bG, ZG) {
    const wG = ZG > 0 ? ZG + 1 : 0,
      LG = .6 * bG - ZG / GG;
    return Math.max(0, Math.min(LG, (bG - 2 * wG) / SG))
  }
  const yG = [15, 15, 15],
    kG = {
      top: 1,
      left: .85,
      right: .7
    };

  function UG(GG, bG, ZG, yG) {
    const {
      vertices: kG,
      uvs: UG,
      indices: YG,
      shades: VG
    } = GG, fG = function(GG, bG) {
      const ZG = LG(GG, bG),
        yG = wG * ZG,
        kG = SG * ZG;
      return {
        left: (GG - yG) / 2,
        top: (GG - kG) / 2,
        width: yG,
        height: kG
      }
    }(ZG, yG), QG = new Float32Array(kG.length);
    for (let wG = 0; wG < kG.length; wG += 3) QG[wG] = fG.left + kG[wG] * fG.width, QG[wG + 1] = fG.top + kG[wG + 1] * fG.height, QG[wG + 2] = kG[wG + 2];
    const KG = new Float32Array(ZG * ZG).fill(-1 / 0),
      hG = new Uint8ClampedArray(ZG * ZG * 4),
      dG = 255 * GG.alphaCutoff;
    for (let wG = 0; wG < YG.length; wG += 3) {
      const [GG, SG, LG] = [YG[wG], YG[wG + 1], YG[wG + 2]], [yG, kG, pG] = [3 * GG, 3 * SG, 3 * LG], [fG, JG, rG, zG, EG, oG] = [QG[yG], QG[yG + 1], QG[kG], QG[kG + 1], QG[pG], QG[pG + 1]], XG = (rG - fG) * (oG - JG) - (EG - fG) * (zG - JG);
      if (Math.abs(XG) < 1e-9) continue;
      const uG = VG[wG / 3],
        [iG, CG, WG, mG, IG, FG] = [UG[2 * GG], UG[2 * GG + 1], UG[2 * SG], UG[2 * SG + 1], UG[2 * LG], UG[2 * LG + 1]],
        vG = Math.max(0, Math.floor(Math.min(fG, rG, EG))),
        aG = Math.min(ZG - 1, Math.ceil(Math.max(fG, rG, EG))),
        cG = Math.max(0, Math.floor(Math.min(JG, zG, oG))),
        lG = Math.min(ZG - 1, Math.ceil(Math.max(JG, zG, oG)));
      for (let wG = cG; wG <= lG; wG++)
        for (let GG = vG; GG <= aG; GG++) {
          const [SG, LG] = [GG + .5, wG + .5], UG = ((SG - fG) * (oG - JG) - (EG - fG) * (LG - JG)) / XG, YG = ((rG - fG) * (LG - JG) - (SG - fG) * (zG - JG)) / XG, VG = 1 - UG - YG;
          if (VG < 0 || UG < 0 || YG < 0) continue;
          const vG = VG * QG[yG + 2] + UG * QG[kG + 2] + YG * QG[pG + 2],
            aG = wG * ZG + GG;
          if (vG <= KG[aG]) continue;
          const cG = Math.max(0, Math.min(bG.width - 1, Math.floor((VG * iG + UG * WG + YG * IG) * bG.width))),
            lG = 4 * (Math.max(0, Math.min(bG.height - 1, Math.floor((VG * CG + UG * mG + YG * FG) * bG.height))) * bG.width + cG);
          bG.pixels[lG + 3] < dG || (KG[aG] = vG, hG[4 * aG] = bG.pixels[lG] * uG, hG[4 * aG + 1] = bG.pixels[lG + 1] * uG, hG[4 * aG + 2] = bG.pixels[lG + 2] * uG, hG[4 * aG + 3] = 255)
        }
    }
    return pG(hG, ZG, yG), hG
  }
  let YG = NaN,
    VG = new Int32Array(0);

  function pG(GG, bG, ZG) {
    let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : bG => 0 !== GG[4 * bG + 3];
    const SG = new Uint8Array(bG * bG);
    for (let yG = 0; yG < bG * bG; yG++) SG[yG] = wG(yG) ? 1 : 0;
    const LG = (GG, ZG) => GG >= 0 && ZG >= 0 && GG < bG && ZG < bG && 0 === SG[ZG * bG + GG],
      kG = new Float32Array(bG * bG).fill(1 / 0),
      UG = function(GG) {
        if (GG !== YG) {
          const bG = Math.ceil(GG + 1),
            ZG = [];
          for (let wG = -bG; wG <= bG; wG++)
            for (let SG = -bG; SG <= bG; SG++) {
              const bG = SG * SG + wG * wG;
              bG > 0 && bG < (GG + 1) ** 2 && ZG.push(SG, wG, bG)
            }
          YG = GG, VG = Int32Array.from(ZG)
        }
        return VG
      }(ZG);
    for (let yG = 0; yG < bG; yG++)
      for (let GG = 0; GG < bG; GG++) {
        if (1 === SG[yG * bG + GG] && (LG(GG - 1, yG) || LG(GG + 1, yG) || LG(GG, yG - 1) || LG(GG, yG + 1)))
          for (let ZG = 0; ZG < UG.length; ZG += 3) {
            const wG = GG + UG[ZG],
              SG = yG + UG[ZG + 1];
            if (wG >= 0 && SG >= 0 && wG < bG && SG < bG) {
              const GG = SG * bG + wG;
              kG[GG] = Math.min(kG[GG], UG[ZG + 2])
            }
          }
      }
    for (let YG = 0; YG < bG * bG; YG++) 1 !== SG[YG] && kG[YG] !== 1 / 0 && (GG.set(yG, 4 * YG), GG[4 * YG + 3] = Math.round(255 * Math.min(1, ZG + 1 - Math.sqrt(kG[YG]))))
  }
  const fG = {
      boxes: [
        [0, 0, 0, 1, 1, 1]
      ],
      cropFaces: !1
    },
    QG = {
      boxes: [
        [0, 0, 0, 1, .5, 1]
      ],
      cropFaces: !1
    },
    KG = {
      boxes: [
        [0, 0, 0, 1, .5, 1],
        [0, .5, 0, .5, 1, 1]
      ],
      cropFaces: !0
    };
  const hG = 1e-6;

  function dG(GG, bG, ZG, wG) {
    let {
      origin: SG,
      across: LG,
      down: yG,
      texture: kG,
      rect: [UG, YG, VG, pG],
      shade: fG
    } = wG;
    const QG = LG.x * yG.y - LG.y * yG.x;
    if (Math.abs(QG) < 1e-9) return;
    const KG = [SG.x, SG.x + LG.x, SG.x + yG.x, SG.x + LG.x + yG.x],
      dG = [SG.y, SG.y + LG.y, SG.y + yG.y, SG.y + LG.y + yG.y],
      JG = Math.max(0, Math.floor(Math.min(...KG))),
      rG = Math.min(ZG - 1, Math.ceil(Math.max(...KG))),
      zG = Math.max(0, Math.floor(Math.min(...dG))),
      EG = Math.min(ZG - 1, Math.ceil(Math.max(...dG)));
    for (let oG = zG; oG <= EG; oG++)
      for (let wG = JG; wG <= rG; wG++) {
        const KG = wG + .5 - SG.x,
          dG = oG + .5 - SG.y,
          JG = (KG * yG.y - dG * yG.x) / QG,
          rG = (LG.x * dG - LG.y * KG) / QG;
        if (JG < -hG || JG > 1 + hG || rG < -hG || rG > 1 + hG) continue;
        const zG = oG * ZG + wG;
        bG[zG] = 1;
        const EG = UG + Math.min(Math.max(JG, 0), 1) * (VG - UG),
          XG = YG + Math.min(Math.max(rG, 0), 1) * (pG - YG),
          uG = Math.min(kG.width - 1, Math.floor(EG * kG.width)),
          iG = 4 * (Math.min(kG.height - 1, Math.floor(XG * kG.height)) * kG.width + uG),
          CG = kG.pixels[iG + 3] / 255;
        if (0 === CG) continue;
        const WG = 4 * zG,
          mG = GG[WG + 3] / 255 * (1 - CG),
          IG = CG + mG;
        for (let bG = 0; bG < 3; bG++) GG[WG + bG] = (kG.pixels[iG + bG] * fG * CG + GG[WG + bG] * mG) / IG;
        GG[WG + 3] = 255 * IG
      }
  }

  function JG(GG, bG, ZG) {
    const wG = GG.get(bG);
    if (void 0 === wG) throw new Error(`no ${ZG} was sent for ${bG.slice(0,100)}`);
    return wG
  }
  const rG = {
      pixelsOf(GG) {
        const bG = new OffscreenCanvas(GG.width, GG.height),
          ZG = bG.getContext("2d");
        if (!ZG) throw new Error("no 2D context");
        return ZG.drawImage(GG, 0, 0), GG.close(), {
          width: bG.width,
          height: bG.height,
          pixels: ZG.getImageData(0, 0, bG.width, bG.height).data
        }
      },
      async encode(GG, bG) {
        const ZG = new OffscreenCanvas(bG, bG),
          wG = ZG.getContext("2d");
        if (!wG) throw new Error("no 2D context");
        wG.putImageData(new ImageData(GG, bG, bG), 0, 0);
        const SG = await ZG.convertToBlob();
        return new Promise(((GG, bG) => {
          const ZG = new FileReader;
          ZG.onload = () => {
            GG(ZG.result)
          }, ZG.onerror = () => {
            var GG;
            bG(null !== (GG = ZG.error) && void 0 !== GG ? GG : new Error("the icon did not encode"))
          }, ZG.readAsDataURL(SG)
        }))
      }
    },
    zG = globalThis.WorkerGlobalScope;
  void 0 !== zG && globalThis instanceof zG && function(wG, SG) {
    const yG = new Map,
      YG = new Map,
      VG = (GG, bG, ZG) => {
        (async () => {
          try {
            wG.postMessage({
              type: "drawn",
              id: GG,
              url: await SG.encode(ZG(), bG)
            })
          } catch (LG) {
            wG.postMessage({
              type: "failed",
              message: String(LG)
            })
          }
        })()
      };
    wG.onmessage = wG => {
      let {
        data: hG
      } = wG;
      if ("texture" === hG.type) yG.set(hG.url, SG.pixelsOf(hG.bitmap));
      else if ("model" === hG.type) YG.set(hG.name, {
        geometry: hG.geometry,
        texture: SG.pixelsOf(hG.bitmap)
      });
      else if ("draw" === hG.type) {
        const {
          id: wG,
          top: SG,
          left: UG,
          right: YG,
          itemType: rG,
          size: zG,
          outlineWidth: EG
        } = hG;
        VG(wG, zG, (() => function(wG, SG, yG, UG) {
          const YG = LG(yG, UG),
            VG = YG * GG,
            fG = YG * bG,
            QG = YG * ZG,
            KG = Math.max(...SG.boxes.map((GG => GG[4]))),
            hG = yG / 2,
            JG = fG + (yG - fG - fG - KG * QG) / 2,
            rG = (GG, bG, ZG) => ({
              x: hG + (GG - ZG) * VG,
              y: JG - fG + (GG + ZG) * fG + (KG - bG) * QG
            }),
            zG = (GG, bG, ZG, wG, LG, yG) => ({
              origin: GG,
              across: {
                x: bG.x - GG.x,
                y: bG.y - GG.y
              },
              down: {
                x: ZG.x - GG.x,
                y: ZG.y - GG.y
              },
              texture: wG,
              rect: SG.cropFaces ? LG : [0, 0, 1, 1],
              shade: yG
            }),
            EG = new Uint8ClampedArray(yG * yG * 4),
            oG = new Uint8Array(yG * yG),
            XG = kG;
          for (const [GG, bG, ZG, LG, kG, pG] of SG.boxes) {
            const SG = zG(rG(LG, kG, pG), rG(LG, kG, ZG), rG(LG, bG, pG), wG.right, [1 - pG, 1 - kG, 1 - ZG, 1 - bG], XG.right),
              UG = zG(rG(GG, kG, pG), rG(LG, kG, pG), rG(GG, bG, pG), wG.left, [GG, 1 - kG, LG, 1 - bG], XG.left),
              YG = zG(rG(GG, kG, ZG), rG(LG, kG, ZG), rG(GG, kG, pG), wG.top, [GG, ZG, LG, pG], XG.top);
            for (const GG of [SG, UG, YG]) dG(EG, oG, yG, GG)
          }
          return pG(EG, yG, UG, (GG => 1 === oG[GG])), EG
        }({
          top: JG(yG, SG, "texture"),
          left: JG(yG, UG, "texture"),
          right: JG(yG, YG, "texture")
        }, function(GG) {
          return "SlabBlock" === GG ? QG : "StairsBlock" === GG ? KG : fG
        }(rG), zG, EG)))
      } else {
        const {
          id: GG,
          name: bG,
          size: ZG,
          outlineWidth: wG
        } = hG;
        VG(GG, ZG, (() => {
          const {
            geometry: GG,
            texture: SG
          } = JG(YG, bG, "model");
          return UG(GG, SG, ZG, wG)
        }))
      }
    }, wG.postMessage({
      type: "started"
    })
  }(globalThis, rG)
})();