(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var HH = __webpack_require__.u,
        BH = __webpack_require__.e,
        LH = {},
        AH = {};
      __webpack_require__.u = function(BH) {
        return HH(BH) + (LH.hasOwnProperty(BH) ? "?" + LH[BH] : "")
      }, __webpack_require__.e = function(rH) {
        return BH(rH).catch((function(BH) {
          var SH = AH.hasOwnProperty(rH) ? AH[rH] : 4;
          if (SH < 1) {
            var hH = HH(rH);
            if (BH.message = "Loading chunk " + rH + " failed after 4 retries.\n(" + hH + ")", BH.request = hH, LH[rH] = "cache-bust=" + Date.now(), setTimeout((function() {
                delete AH[rH]
              }), 0), "CSS_CHUNK_LOAD_FAILED" === BH.code) {
              var tH = __webpack_require__.miniCssF(rH);
              BH.message = BH.message.replace("Loading chunk", "Loading CSS chunk").replace(hH, tH), BH.request = tH
            }
            throw BH
          }
          return new Promise((function(HH) {
            var BH = 4 - SH + 1;
            setTimeout((function() {
              var BH = "cache-bust=" + Date.now();
              LH[rH] = BH, AH[rH] = SH - 1, HH(__webpack_require__.e(rH))
            }), function(HH) {
              return 500 * Math.pow(2, HH)
            }(BH))
          }))
        }))
      }
    }
  })();
  const HH = Math.SQRT1_2,
    BH = Math.SQRT1_2 / 2,
    LH = Math.sqrt(3) / 2,
    AH = 2 * HH,
    rH = 2 * BH + LH;

  function SH(BH, LH) {
    const AH = LH > 0 ? LH + 1 : 0,
      SH = .6 * BH - LH / HH;
    return Math.max(0, Math.min(SH, (BH - 2 * AH) / rH))
  }
  const hH = [15, 15, 15],
    tH = {
      top: 1,
      left: .85,
      right: .7
    };

  function zH(HH, BH, LH, hH) {
    const {
      vertices: tH,
      uvs: zH,
      indices: CH,
      shades: EH
    } = HH, GH = function(HH, BH) {
      const LH = SH(HH, BH),
        hH = AH * LH,
        tH = rH * LH;
      return {
        left: (HH - hH) / 2,
        top: (HH - tH) / 2,
        width: hH,
        height: tH
      }
    }(LH, hH), YH = new Float32Array(tH.length);
    for (let AH = 0; AH < tH.length; AH += 3) YH[AH] = GH.left + tH[AH] * GH.width, YH[AH + 1] = GH.top + tH[AH + 1] * GH.height, YH[AH + 2] = tH[AH + 2];
    const uH = new Float32Array(LH * LH).fill(-1 / 0),
      QH = new Uint8ClampedArray(LH * LH * 4),
      WH = 255 * HH.alphaCutoff;
    for (let AH = 0; AH < CH.length; AH += 3) {
      const [HH, rH, SH] = [CH[AH], CH[AH + 1], CH[AH + 2]], [hH, tH, XH] = [3 * HH, 3 * rH, 3 * SH], [GH, MH, xH, vH, PH, TH] = [YH[hH], YH[hH + 1], YH[tH], YH[tH + 1], YH[XH], YH[XH + 1]], UH = (xH - GH) * (TH - MH) - (PH - GH) * (vH - MH);
      if (Math.abs(UH) < 1e-9) continue;
      const VH = EH[AH / 3],
        [OH, bH, kH, mH, oH, IH] = [zH[2 * HH], zH[2 * HH + 1], zH[2 * rH], zH[2 * rH + 1], zH[2 * SH], zH[2 * SH + 1]],
        fH = Math.max(0, Math.floor(Math.min(GH, xH, PH))),
        lH = Math.min(LH - 1, Math.ceil(Math.max(GH, xH, PH))),
        KH = Math.max(0, Math.floor(Math.min(MH, vH, TH))),
        cH = Math.min(LH - 1, Math.ceil(Math.max(MH, vH, TH)));
      for (let AH = KH; AH <= cH; AH++)
        for (let HH = fH; HH <= lH; HH++) {
          const [rH, SH] = [HH + .5, AH + .5], zH = ((rH - GH) * (TH - MH) - (PH - GH) * (SH - MH)) / UH, CH = ((xH - GH) * (SH - MH) - (rH - GH) * (vH - MH)) / UH, EH = 1 - zH - CH;
          if (EH < 0 || zH < 0 || CH < 0) continue;
          const fH = EH * YH[hH + 2] + zH * YH[tH + 2] + CH * YH[XH + 2],
            lH = AH * LH + HH;
          if (fH <= uH[lH]) continue;
          const KH = Math.max(0, Math.min(BH.width - 1, Math.floor((EH * OH + zH * kH + CH * oH) * BH.width))),
            cH = 4 * (Math.max(0, Math.min(BH.height - 1, Math.floor((EH * bH + zH * mH + CH * IH) * BH.height))) * BH.width + KH);
          BH.pixels[cH + 3] < WH || (uH[lH] = fH, QH[4 * lH] = BH.pixels[cH] * VH, QH[4 * lH + 1] = BH.pixels[cH + 1] * VH, QH[4 * lH + 2] = BH.pixels[cH + 2] * VH, QH[4 * lH + 3] = 255)
        }
    }
    return XH(QH, LH, hH), QH
  }
  let CH = NaN,
    EH = new Int32Array(0);

  function XH(HH, BH, LH) {
    let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : BH => 0 !== HH[4 * BH + 3];
    const rH = new Uint8Array(BH * BH);
    for (let hH = 0; hH < BH * BH; hH++) rH[hH] = AH(hH) ? 1 : 0;
    const SH = (HH, LH) => HH >= 0 && LH >= 0 && HH < BH && LH < BH && 0 === rH[LH * BH + HH],
      tH = new Float32Array(BH * BH).fill(1 / 0),
      zH = function(HH) {
        if (HH !== CH) {
          const BH = Math.ceil(HH + 1),
            LH = [];
          for (let AH = -BH; AH <= BH; AH++)
            for (let rH = -BH; rH <= BH; rH++) {
              const BH = rH * rH + AH * AH;
              BH > 0 && BH < (HH + 1) ** 2 && LH.push(rH, AH, BH)
            }
          CH = HH, EH = Int32Array.from(LH)
        }
        return EH
      }(LH);
    for (let hH = 0; hH < BH; hH++)
      for (let HH = 0; HH < BH; HH++) {
        if (1 === rH[hH * BH + HH] && (SH(HH - 1, hH) || SH(HH + 1, hH) || SH(HH, hH - 1) || SH(HH, hH + 1)))
          for (let LH = 0; LH < zH.length; LH += 3) {
            const AH = HH + zH[LH],
              rH = hH + zH[LH + 1];
            if (AH >= 0 && rH >= 0 && AH < BH && rH < BH) {
              const HH = rH * BH + AH;
              tH[HH] = Math.min(tH[HH], zH[LH + 2])
            }
          }
      }
    for (let CH = 0; CH < BH * BH; CH++) 1 !== rH[CH] && tH[CH] !== 1 / 0 && (HH.set(hH, 4 * CH), HH[4 * CH + 3] = Math.round(255 * Math.min(1, LH + 1 - Math.sqrt(tH[CH]))))
  }
  const GH = {
      boxes: [
        [0, 0, 0, 1, 1, 1]
      ],
      cropFaces: !1
    },
    YH = {
      boxes: [
        [0, 0, 0, 1, .5, 1]
      ],
      cropFaces: !1
    },
    uH = {
      boxes: [
        [0, 0, 0, 1, .5, 1],
        [0, .5, 0, .5, 1, 1]
      ],
      cropFaces: !0
    };
  const QH = 1e-6;

  function WH(HH, BH, LH, AH) {
    let {
      origin: rH,
      across: SH,
      down: hH,
      texture: tH,
      rect: [zH, CH, EH, XH],
      shade: GH
    } = AH;
    const YH = SH.x * hH.y - SH.y * hH.x;
    if (Math.abs(YH) < 1e-9) return;
    const uH = [rH.x, rH.x + SH.x, rH.x + hH.x, rH.x + SH.x + hH.x],
      WH = [rH.y, rH.y + SH.y, rH.y + hH.y, rH.y + SH.y + hH.y],
      MH = Math.max(0, Math.floor(Math.min(...uH))),
      xH = Math.min(LH - 1, Math.ceil(Math.max(...uH))),
      vH = Math.max(0, Math.floor(Math.min(...WH))),
      PH = Math.min(LH - 1, Math.ceil(Math.max(...WH)));
    for (let TH = vH; TH <= PH; TH++)
      for (let AH = MH; AH <= xH; AH++) {
        const uH = AH + .5 - rH.x,
          WH = TH + .5 - rH.y,
          MH = (uH * hH.y - WH * hH.x) / YH,
          xH = (SH.x * WH - SH.y * uH) / YH;
        if (MH < -QH || MH > 1 + QH || xH < -QH || xH > 1 + QH) continue;
        const vH = TH * LH + AH;
        BH[vH] = 1;
        const PH = zH + Math.min(Math.max(MH, 0), 1) * (EH - zH),
          UH = CH + Math.min(Math.max(xH, 0), 1) * (XH - CH),
          VH = Math.min(tH.width - 1, Math.floor(PH * tH.width)),
          OH = 4 * (Math.min(tH.height - 1, Math.floor(UH * tH.height)) * tH.width + VH),
          bH = tH.pixels[OH + 3] / 255;
        if (0 === bH) continue;
        const kH = 4 * vH,
          mH = HH[kH + 3] / 255 * (1 - bH),
          oH = bH + mH;
        for (let BH = 0; BH < 3; BH++) HH[kH + BH] = (tH.pixels[OH + BH] * GH * bH + HH[kH + BH] * mH) / oH;
        HH[kH + 3] = 255 * oH
      }
  }

  function MH(HH, BH, LH) {
    const AH = HH.get(BH);
    if (void 0 === AH) throw new Error(`no ${LH} was sent for ${BH.slice(0,100)}`);
    return AH
  }
  const xH = {
      pixelsOf(HH) {
        const BH = new OffscreenCanvas(HH.width, HH.height),
          LH = BH.getContext("2d");
        if (!LH) throw new Error("no 2D context");
        return LH.drawImage(HH, 0, 0), HH.close(), {
          width: BH.width,
          height: BH.height,
          pixels: LH.getImageData(0, 0, BH.width, BH.height).data
        }
      },
      async encode(HH, BH) {
        const LH = new OffscreenCanvas(BH, BH),
          AH = LH.getContext("2d");
        if (!AH) throw new Error("no 2D context");
        AH.putImageData(new ImageData(HH, BH, BH), 0, 0);
        const rH = await LH.convertToBlob();
        return new Promise(((HH, BH) => {
          const LH = new FileReader;
          LH.onload = () => {
            HH(LH.result)
          }, LH.onerror = () => {
            var HH;
            BH(null !== (HH = LH.error) && void 0 !== HH ? HH : new Error("the icon did not encode"))
          }, LH.readAsDataURL(rH)
        }))
      }
    },
    vH = globalThis.WorkerGlobalScope;
  void 0 !== vH && globalThis instanceof vH && function(AH, rH) {
    const hH = new Map,
      CH = new Map,
      EH = (HH, BH, LH) => {
        (async () => {
          try {
            AH.postMessage({
              type: "drawn",
              id: HH,
              url: await rH.encode(LH(), BH)
            })
          } catch (SH) {
            AH.postMessage({
              type: "failed",
              message: String(SH)
            })
          }
        })()
      };
    AH.onmessage = AH => {
      let {
        data: QH
      } = AH;
      if ("texture" === QH.type) hH.set(QH.url, rH.pixelsOf(QH.bitmap));
      else if ("model" === QH.type) CH.set(QH.name, {
        geometry: QH.geometry,
        texture: rH.pixelsOf(QH.bitmap)
      });
      else if ("draw" === QH.type) {
        const {
          id: AH,
          top: rH,
          left: zH,
          right: CH,
          itemType: xH,
          size: vH,
          outlineWidth: PH
        } = QH;
        EH(AH, vH, (() => function(AH, rH, hH, zH) {
          const CH = SH(hH, zH),
            EH = CH * HH,
            GH = CH * BH,
            YH = CH * LH,
            uH = Math.max(...rH.boxes.map((HH => HH[4]))),
            QH = hH / 2,
            MH = GH + (hH - GH - GH - uH * YH) / 2,
            xH = (HH, BH, LH) => ({
              x: QH + (HH - LH) * EH,
              y: MH - GH + (HH + LH) * GH + (uH - BH) * YH
            }),
            vH = (HH, BH, LH, AH, SH, hH) => ({
              origin: HH,
              across: {
                x: BH.x - HH.x,
                y: BH.y - HH.y
              },
              down: {
                x: LH.x - HH.x,
                y: LH.y - HH.y
              },
              texture: AH,
              rect: rH.cropFaces ? SH : [0, 0, 1, 1],
              shade: hH
            }),
            PH = new Uint8ClampedArray(hH * hH * 4),
            TH = new Uint8Array(hH * hH),
            UH = tH;
          for (const [HH, BH, LH, SH, tH, XH] of rH.boxes) {
            const rH = vH(xH(SH, tH, XH), xH(SH, tH, LH), xH(SH, BH, XH), AH.right, [1 - XH, 1 - tH, 1 - LH, 1 - BH], UH.right),
              zH = vH(xH(HH, tH, XH), xH(SH, tH, XH), xH(HH, BH, XH), AH.left, [HH, 1 - tH, SH, 1 - BH], UH.left),
              CH = vH(xH(HH, tH, LH), xH(SH, tH, LH), xH(HH, tH, XH), AH.top, [HH, LH, SH, XH], UH.top);
            for (const HH of [rH, zH, CH]) WH(PH, TH, hH, HH)
          }
          return XH(PH, hH, zH, (HH => 1 === TH[HH])), PH
        }({
          top: MH(hH, rH, "texture"),
          left: MH(hH, zH, "texture"),
          right: MH(hH, CH, "texture")
        }, function(HH) {
          return "SlabBlock" === HH ? YH : "StairsBlock" === HH ? uH : GH
        }(xH), vH, PH)))
      } else {
        const {
          id: HH,
          name: BH,
          size: LH,
          outlineWidth: AH
        } = QH;
        EH(HH, LH, (() => {
          const {
            geometry: HH,
            texture: rH
          } = MH(CH, BH, "model");
          return zH(HH, rH, LH, AH)
        }))
      }
    }, AH.postMessage({
      type: "started"
    })
  }(globalThis, xH)
})();