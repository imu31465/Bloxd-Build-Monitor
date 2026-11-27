(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var RR = __webpack_require__.u,
        JR = __webpack_require__.e,
        GR = {},
        yR = {};
      __webpack_require__.u = function(JR) {
        return RR(JR) + (GR.hasOwnProperty(JR) ? "?" + GR[JR] : "")
      }, __webpack_require__.e = function(tR) {
        return JR(tR).catch((function(JR) {
          var uR = yR.hasOwnProperty(tR) ? yR[tR] : 4;
          if (uR < 1) {
            var ZR = RR(tR);
            if (JR.message = "Loading chunk " + tR + " failed after 4 retries.\n(" + ZR + ")", JR.request = ZR, GR[tR] = "cache-bust=" + Date.now(), setTimeout((function() {
                delete yR[tR]
              }), 0), "CSS_CHUNK_LOAD_FAILED" === JR.code) {
              var qR = __webpack_require__.miniCssF(tR);
              JR.message = JR.message.replace("Loading chunk", "Loading CSS chunk").replace(ZR, qR), JR.request = qR
            }
            throw JR
          }
          return new Promise((function(RR) {
            var JR = 4 - uR + 1;
            setTimeout((function() {
              var JR = "cache-bust=" + Date.now();
              GR[tR] = JR, yR[tR] = uR - 1, RR(__webpack_require__.e(tR))
            }), function(RR) {
              return 500 * Math.pow(2, RR)
            }(JR))
          }))
        }))
      }
    }
  })();
  const RR = Math.SQRT1_2,
    JR = Math.SQRT1_2 / 2,
    GR = Math.sqrt(3) / 2,
    yR = 2 * RR,
    tR = 2 * JR + GR;

  function uR(JR, GR) {
    const yR = GR > 0 ? GR + 1 : 0,
      uR = .6 * JR - GR / RR;
    return Math.max(0, Math.min(uR, (JR - 2 * yR) / tR))
  }
  const ZR = [15, 15, 15],
    qR = {
      top: 1,
      left: .85,
      right: .7
    };

  function iR(RR, JR, GR, ZR) {
    const {
      vertices: qR,
      uvs: iR,
      indices: fR,
      shades: VR
    } = RR, wR = function(RR, JR) {
      const GR = uR(RR, JR),
        ZR = yR * GR,
        qR = tR * GR;
      return {
        left: (RR - ZR) / 2,
        top: (RR - qR) / 2,
        width: ZR,
        height: qR
      }
    }(GR, ZR), rR = new Float32Array(qR.length);
    for (let yR = 0; yR < qR.length; yR += 3) rR[yR] = wR.left + qR[yR] * wR.width, rR[yR + 1] = wR.top + qR[yR + 1] * wR.height, rR[yR + 2] = qR[yR + 2];
    const eR = new Float32Array(GR * GR).fill(-1 / 0),
      aR = new Uint8ClampedArray(GR * GR * 4),
      LR = 255 * RR.alphaCutoff;
    for (let yR = 0; yR < fR.length; yR += 3) {
      const [RR, tR, uR] = [fR[yR], fR[yR + 1], fR[yR + 2]], [ZR, qR, KR] = [3 * RR, 3 * tR, 3 * uR], [wR, nR, UR, WR, AR, CR] = [rR[ZR], rR[ZR + 1], rR[qR], rR[qR + 1], rR[KR], rR[KR + 1]], XR = (UR - wR) * (CR - nR) - (AR - wR) * (WR - nR);
      if (Math.abs(XR) < 1e-9) continue;
      const MR = VR[yR / 3],
        [BR, lR, pR, gR, bR, vR] = [iR[2 * RR], iR[2 * RR + 1], iR[2 * tR], iR[2 * tR + 1], iR[2 * uR], iR[2 * uR + 1]],
        OR = Math.max(0, Math.floor(Math.min(wR, UR, AR))),
        xR = Math.min(GR - 1, Math.ceil(Math.max(wR, UR, AR))),
        NR = Math.max(0, Math.floor(Math.min(nR, WR, CR))),
        DR = Math.min(GR - 1, Math.ceil(Math.max(nR, WR, CR)));
      for (let yR = NR; yR <= DR; yR++)
        for (let RR = OR; RR <= xR; RR++) {
          const [tR, uR] = [RR + .5, yR + .5], iR = ((tR - wR) * (CR - nR) - (AR - wR) * (uR - nR)) / XR, fR = ((UR - wR) * (uR - nR) - (tR - wR) * (WR - nR)) / XR, VR = 1 - iR - fR;
          if (VR < 0 || iR < 0 || fR < 0) continue;
          const OR = VR * rR[ZR + 2] + iR * rR[qR + 2] + fR * rR[KR + 2],
            xR = yR * GR + RR;
          if (OR <= eR[xR]) continue;
          const NR = Math.max(0, Math.min(JR.width - 1, Math.floor((VR * BR + iR * pR + fR * bR) * JR.width))),
            DR = 4 * (Math.max(0, Math.min(JR.height - 1, Math.floor((VR * lR + iR * gR + fR * vR) * JR.height))) * JR.width + NR);
          JR.pixels[DR + 3] < LR || (eR[xR] = OR, aR[4 * xR] = JR.pixels[DR] * MR, aR[4 * xR + 1] = JR.pixels[DR + 1] * MR, aR[4 * xR + 2] = JR.pixels[DR + 2] * MR, aR[4 * xR + 3] = 255)
        }
    }
    return KR(aR, GR, ZR), aR
  }
  let fR = NaN,
    VR = new Int32Array(0);

  function KR(RR, JR, GR) {
    let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : JR => 0 !== RR[4 * JR + 3];
    const tR = new Uint8Array(JR * JR);
    for (let ZR = 0; ZR < JR * JR; ZR++) tR[ZR] = yR(ZR) ? 1 : 0;
    const uR = (RR, GR) => RR >= 0 && GR >= 0 && RR < JR && GR < JR && 0 === tR[GR * JR + RR],
      qR = new Float32Array(JR * JR).fill(1 / 0),
      iR = function(RR) {
        if (RR !== fR) {
          const JR = Math.ceil(RR + 1),
            GR = [];
          for (let yR = -JR; yR <= JR; yR++)
            for (let tR = -JR; tR <= JR; tR++) {
              const JR = tR * tR + yR * yR;
              JR > 0 && JR < (RR + 1) ** 2 && GR.push(tR, yR, JR)
            }
          fR = RR, VR = Int32Array.from(GR)
        }
        return VR
      }(GR);
    for (let ZR = 0; ZR < JR; ZR++)
      for (let RR = 0; RR < JR; RR++) {
        if (1 === tR[ZR * JR + RR] && (uR(RR - 1, ZR) || uR(RR + 1, ZR) || uR(RR, ZR - 1) || uR(RR, ZR + 1)))
          for (let GR = 0; GR < iR.length; GR += 3) {
            const yR = RR + iR[GR],
              tR = ZR + iR[GR + 1];
            if (yR >= 0 && tR >= 0 && yR < JR && tR < JR) {
              const RR = tR * JR + yR;
              qR[RR] = Math.min(qR[RR], iR[GR + 2])
            }
          }
      }
    for (let fR = 0; fR < JR * JR; fR++) 1 !== tR[fR] && qR[fR] !== 1 / 0 && (RR.set(ZR, 4 * fR), RR[4 * fR + 3] = Math.round(255 * Math.min(1, GR + 1 - Math.sqrt(qR[fR]))))
  }
  const wR = {
      boxes: [
        [0, 0, 0, 1, 1, 1]
      ],
      cropFaces: !1
    },
    rR = {
      boxes: [
        [0, 0, 0, 1, .5, 1]
      ],
      cropFaces: !1
    },
    eR = {
      boxes: [
        [0, 0, 0, 1, .5, 1],
        [0, .5, 0, .5, 1, 1]
      ],
      cropFaces: !0
    };
  const aR = 1e-6;

  function LR(RR, JR, GR, yR) {
    let {
      origin: tR,
      across: uR,
      down: ZR,
      texture: qR,
      rect: [iR, fR, VR, KR],
      shade: wR
    } = yR;
    const rR = uR.x * ZR.y - uR.y * ZR.x;
    if (Math.abs(rR) < 1e-9) return;
    const eR = [tR.x, tR.x + uR.x, tR.x + ZR.x, tR.x + uR.x + ZR.x],
      LR = [tR.y, tR.y + uR.y, tR.y + ZR.y, tR.y + uR.y + ZR.y],
      nR = Math.max(0, Math.floor(Math.min(...eR))),
      UR = Math.min(GR - 1, Math.ceil(Math.max(...eR))),
      WR = Math.max(0, Math.floor(Math.min(...LR))),
      AR = Math.min(GR - 1, Math.ceil(Math.max(...LR)));
    for (let CR = WR; CR <= AR; CR++)
      for (let yR = nR; yR <= UR; yR++) {
        const eR = yR + .5 - tR.x,
          LR = CR + .5 - tR.y,
          nR = (eR * ZR.y - LR * ZR.x) / rR,
          UR = (uR.x * LR - uR.y * eR) / rR;
        if (nR < -aR || nR > 1 + aR || UR < -aR || UR > 1 + aR) continue;
        const WR = CR * GR + yR;
        JR[WR] = 1;
        const AR = iR + Math.min(Math.max(nR, 0), 1) * (VR - iR),
          XR = fR + Math.min(Math.max(UR, 0), 1) * (KR - fR),
          MR = Math.min(qR.width - 1, Math.floor(AR * qR.width)),
          BR = 4 * (Math.min(qR.height - 1, Math.floor(XR * qR.height)) * qR.width + MR),
          lR = qR.pixels[BR + 3] / 255;
        if (0 === lR) continue;
        const pR = 4 * WR,
          gR = RR[pR + 3] / 255 * (1 - lR),
          bR = lR + gR;
        for (let JR = 0; JR < 3; JR++) RR[pR + JR] = (qR.pixels[BR + JR] * wR * lR + RR[pR + JR] * gR) / bR;
        RR[pR + 3] = 255 * bR
      }
  }

  function nR(RR, JR, GR) {
    const yR = RR.get(JR);
    if (void 0 === yR) throw new Error(`no ${GR} was sent for ${JR.slice(0,100)}`);
    return yR
  }
  const UR = {
      pixelsOf(RR) {
        const JR = new OffscreenCanvas(RR.width, RR.height),
          GR = JR.getContext("2d");
        if (!GR) throw new Error("no 2D context");
        return GR.drawImage(RR, 0, 0), RR.close(), {
          width: JR.width,
          height: JR.height,
          pixels: GR.getImageData(0, 0, JR.width, JR.height).data
        }
      },
      async encode(RR, JR) {
        const GR = new OffscreenCanvas(JR, JR),
          yR = GR.getContext("2d");
        if (!yR) throw new Error("no 2D context");
        yR.putImageData(new ImageData(RR, JR, JR), 0, 0);
        const tR = await GR.convertToBlob();
        return new Promise(((RR, JR) => {
          const GR = new FileReader;
          GR.onload = () => {
            RR(GR.result)
          }, GR.onerror = () => {
            var RR;
            JR(null !== (RR = GR.error) && void 0 !== RR ? RR : new Error("the icon did not encode"))
          }, GR.readAsDataURL(tR)
        }))
      }
    },
    WR = globalThis.WorkerGlobalScope;
  void 0 !== WR && globalThis instanceof WR && function(yR, tR) {
    const ZR = new Map,
      fR = new Map,
      VR = (RR, JR, GR) => {
        (async () => {
          try {
            yR.postMessage({
              type: "drawn",
              id: RR,
              url: await tR.encode(GR(), JR)
            })
          } catch (uR) {
            yR.postMessage({
              type: "failed",
              message: String(uR)
            })
          }
        })()
      };
    yR.onmessage = yR => {
      let {
        data: aR
      } = yR;
      if ("texture" === aR.type) ZR.set(aR.url, tR.pixelsOf(aR.bitmap));
      else if ("model" === aR.type) fR.set(aR.name, {
        geometry: aR.geometry,
        texture: tR.pixelsOf(aR.bitmap)
      });
      else if ("draw" === aR.type) {
        const {
          id: yR,
          top: tR,
          left: iR,
          right: fR,
          itemType: UR,
          size: WR,
          outlineWidth: AR
        } = aR;
        VR(yR, WR, (() => function(yR, tR, ZR, iR) {
          const fR = uR(ZR, iR),
            VR = fR * RR,
            wR = fR * JR,
            rR = fR * GR,
            eR = Math.max(...tR.boxes.map((RR => RR[4]))),
            aR = ZR / 2,
            nR = wR + (ZR - wR - wR - eR * rR) / 2,
            UR = (RR, JR, GR) => ({
              x: aR + (RR - GR) * VR,
              y: nR - wR + (RR + GR) * wR + (eR - JR) * rR
            }),
            WR = (RR, JR, GR, yR, uR, ZR) => ({
              origin: RR,
              across: {
                x: JR.x - RR.x,
                y: JR.y - RR.y
              },
              down: {
                x: GR.x - RR.x,
                y: GR.y - RR.y
              },
              texture: yR,
              rect: tR.cropFaces ? uR : [0, 0, 1, 1],
              shade: ZR
            }),
            AR = new Uint8ClampedArray(ZR * ZR * 4),
            CR = new Uint8Array(ZR * ZR),
            XR = qR;
          for (const [RR, JR, GR, uR, qR, KR] of tR.boxes) {
            const tR = WR(UR(uR, qR, KR), UR(uR, qR, GR), UR(uR, JR, KR), yR.right, [1 - KR, 1 - qR, 1 - GR, 1 - JR], XR.right),
              iR = WR(UR(RR, qR, KR), UR(uR, qR, KR), UR(RR, JR, KR), yR.left, [RR, 1 - qR, uR, 1 - JR], XR.left),
              fR = WR(UR(RR, qR, GR), UR(uR, qR, GR), UR(RR, qR, KR), yR.top, [RR, GR, uR, KR], XR.top);
            for (const RR of [tR, iR, fR]) LR(AR, CR, ZR, RR)
          }
          return KR(AR, ZR, iR, (RR => 1 === CR[RR])), AR
        }({
          top: nR(ZR, tR, "texture"),
          left: nR(ZR, iR, "texture"),
          right: nR(ZR, fR, "texture")
        }, function(RR) {
          return "SlabBlock" === RR ? rR : "StairsBlock" === RR ? eR : wR
        }(UR), WR, AR)))
      } else {
        const {
          id: RR,
          name: JR,
          size: GR,
          outlineWidth: yR
        } = aR;
        VR(RR, GR, (() => {
          const {
            geometry: RR,
            texture: tR
          } = nR(fR, JR, "model");
          return iR(RR, tR, GR, yR)
        }))
      }
    }, yR.postMessage({
      type: "started"
    })
  }(globalThis, UR)
})();