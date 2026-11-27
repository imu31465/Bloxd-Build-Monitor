(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var WW = __webpack_require__.u,
        iW = __webpack_require__.e,
        OW = {},
        mW = {};
      __webpack_require__.u = function(iW) {
        return WW(iW) + (OW.hasOwnProperty(iW) ? "?" + OW[iW] : "")
      }, __webpack_require__.e = function(EW) {
        return iW(EW).catch((function(iW) {
          var NW = mW.hasOwnProperty(EW) ? mW[EW] : 4;
          if (NW < 1) {
            var PW = WW(EW);
            if (iW.message = "Loading chunk " + EW + " failed after 4 retries.\n(" + PW + ")", iW.request = PW, OW[EW] = "cache-bust=" + Date.now(), setTimeout((function() {
                delete mW[EW]
              }), 0), "CSS_CHUNK_LOAD_FAILED" === iW.code) {
              var LW = __webpack_require__.miniCssF(EW);
              iW.message = iW.message.replace("Loading chunk", "Loading CSS chunk").replace(PW, LW), iW.request = LW
            }
            throw iW
          }
          return new Promise((function(WW) {
            var iW = 4 - NW + 1;
            setTimeout((function() {
              var iW = "cache-bust=" + Date.now();
              OW[EW] = iW, mW[EW] = NW - 1, WW(__webpack_require__.e(EW))
            }), function(WW) {
              return 500 * Math.pow(2, WW)
            }(iW))
          }))
        }))
      }
    }
  })();
  const WW = Math.SQRT1_2,
    iW = Math.SQRT1_2 / 2,
    OW = Math.sqrt(3) / 2,
    mW = 2 * WW,
    EW = 2 * iW + OW;

  function NW(iW, OW) {
    const mW = OW > 0 ? OW + 1 : 0,
      NW = .6 * iW - OW / WW;
    return Math.max(0, Math.min(NW, (iW - 2 * mW) / EW))
  }
  const PW = [15, 15, 15],
    LW = {
      top: 1,
      left: .85,
      right: .7
    };

  function cW(WW, iW, OW, PW) {
    const {
      vertices: LW,
      uvs: cW,
      indices: wW,
      shades: tW
    } = WW, xW = function(WW, iW) {
      const OW = NW(WW, iW),
        PW = mW * OW,
        LW = EW * OW;
      return {
        left: (WW - PW) / 2,
        top: (WW - LW) / 2,
        width: PW,
        height: LW
      }
    }(OW, PW), lW = new Float32Array(LW.length);
    for (let mW = 0; mW < LW.length; mW += 3) lW[mW] = xW.left + LW[mW] * xW.width, lW[mW + 1] = xW.top + LW[mW + 1] * xW.height, lW[mW + 2] = LW[mW + 2];
    const AW = new Float32Array(OW * OW).fill(-1 / 0),
      bW = new Uint8ClampedArray(OW * OW * 4),
      jW = 255 * WW.alphaCutoff;
    for (let mW = 0; mW < wW.length; mW += 3) {
      const [WW, EW, NW] = [wW[mW], wW[mW + 1], wW[mW + 2]], [PW, LW, ZW] = [3 * WW, 3 * EW, 3 * NW], [xW, UW, kW, sW, MW, KW] = [lW[PW], lW[PW + 1], lW[LW], lW[LW + 1], lW[ZW], lW[ZW + 1]], SW = (kW - xW) * (KW - UW) - (MW - xW) * (sW - UW);
      if (Math.abs(SW) < 1e-9) continue;
      const YW = tW[mW / 3],
        [yW, TW, JW, hW, HW, nW] = [cW[2 * WW], cW[2 * WW + 1], cW[2 * EW], cW[2 * EW + 1], cW[2 * NW], cW[2 * NW + 1]],
        uW = Math.max(0, Math.floor(Math.min(xW, kW, MW))),
        oW = Math.min(OW - 1, Math.ceil(Math.max(xW, kW, MW))),
        dW = Math.max(0, Math.floor(Math.min(UW, sW, KW))),
        eW = Math.min(OW - 1, Math.ceil(Math.max(UW, sW, KW)));
      for (let mW = dW; mW <= eW; mW++)
        for (let WW = uW; WW <= oW; WW++) {
          const [EW, NW] = [WW + .5, mW + .5], cW = ((EW - xW) * (KW - UW) - (MW - xW) * (NW - UW)) / SW, wW = ((kW - xW) * (NW - UW) - (EW - xW) * (sW - UW)) / SW, tW = 1 - cW - wW;
          if (tW < 0 || cW < 0 || wW < 0) continue;
          const uW = tW * lW[PW + 2] + cW * lW[LW + 2] + wW * lW[ZW + 2],
            oW = mW * OW + WW;
          if (uW <= AW[oW]) continue;
          const dW = Math.max(0, Math.min(iW.width - 1, Math.floor((tW * yW + cW * JW + wW * HW) * iW.width))),
            eW = 4 * (Math.max(0, Math.min(iW.height - 1, Math.floor((tW * TW + cW * hW + wW * nW) * iW.height))) * iW.width + dW);
          iW.pixels[eW + 3] < jW || (AW[oW] = uW, bW[4 * oW] = iW.pixels[eW] * YW, bW[4 * oW + 1] = iW.pixels[eW + 1] * YW, bW[4 * oW + 2] = iW.pixels[eW + 2] * YW, bW[4 * oW + 3] = 255)
        }
    }
    return ZW(bW, OW, PW), bW
  }
  let wW = NaN,
    tW = new Int32Array(0);

  function ZW(WW, iW, OW) {
    let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : iW => 0 !== WW[4 * iW + 3];
    const EW = new Uint8Array(iW * iW);
    for (let PW = 0; PW < iW * iW; PW++) EW[PW] = mW(PW) ? 1 : 0;
    const NW = (WW, OW) => WW >= 0 && OW >= 0 && WW < iW && OW < iW && 0 === EW[OW * iW + WW],
      LW = new Float32Array(iW * iW).fill(1 / 0),
      cW = function(WW) {
        if (WW !== wW) {
          const iW = Math.ceil(WW + 1),
            OW = [];
          for (let mW = -iW; mW <= iW; mW++)
            for (let EW = -iW; EW <= iW; EW++) {
              const iW = EW * EW + mW * mW;
              iW > 0 && iW < (WW + 1) ** 2 && OW.push(EW, mW, iW)
            }
          wW = WW, tW = Int32Array.from(OW)
        }
        return tW
      }(OW);
    for (let PW = 0; PW < iW; PW++)
      for (let WW = 0; WW < iW; WW++) {
        if (1 === EW[PW * iW + WW] && (NW(WW - 1, PW) || NW(WW + 1, PW) || NW(WW, PW - 1) || NW(WW, PW + 1)))
          for (let OW = 0; OW < cW.length; OW += 3) {
            const mW = WW + cW[OW],
              EW = PW + cW[OW + 1];
            if (mW >= 0 && EW >= 0 && mW < iW && EW < iW) {
              const WW = EW * iW + mW;
              LW[WW] = Math.min(LW[WW], cW[OW + 2])
            }
          }
      }
    for (let wW = 0; wW < iW * iW; wW++) 1 !== EW[wW] && LW[wW] !== 1 / 0 && (WW.set(PW, 4 * wW), WW[4 * wW + 3] = Math.round(255 * Math.min(1, OW + 1 - Math.sqrt(LW[wW]))))
  }
  const xW = {
      boxes: [
        [0, 0, 0, 1, 1, 1]
      ],
      cropFaces: !1
    },
    lW = {
      boxes: [
        [0, 0, 0, 1, .5, 1]
      ],
      cropFaces: !1
    },
    AW = {
      boxes: [
        [0, 0, 0, 1, .5, 1],
        [0, .5, 0, .5, 1, 1]
      ],
      cropFaces: !0
    };
  const bW = 1e-6;

  function jW(WW, iW, OW, mW) {
    let {
      origin: EW,
      across: NW,
      down: PW,
      texture: LW,
      rect: [cW, wW, tW, ZW],
      shade: xW
    } = mW;
    const lW = NW.x * PW.y - NW.y * PW.x;
    if (Math.abs(lW) < 1e-9) return;
    const AW = [EW.x, EW.x + NW.x, EW.x + PW.x, EW.x + NW.x + PW.x],
      jW = [EW.y, EW.y + NW.y, EW.y + PW.y, EW.y + NW.y + PW.y],
      UW = Math.max(0, Math.floor(Math.min(...AW))),
      kW = Math.min(OW - 1, Math.ceil(Math.max(...AW))),
      sW = Math.max(0, Math.floor(Math.min(...jW))),
      MW = Math.min(OW - 1, Math.ceil(Math.max(...jW)));
    for (let KW = sW; KW <= MW; KW++)
      for (let mW = UW; mW <= kW; mW++) {
        const AW = mW + .5 - EW.x,
          jW = KW + .5 - EW.y,
          UW = (AW * PW.y - jW * PW.x) / lW,
          kW = (NW.x * jW - NW.y * AW) / lW;
        if (UW < -bW || UW > 1 + bW || kW < -bW || kW > 1 + bW) continue;
        const sW = KW * OW + mW;
        iW[sW] = 1;
        const MW = cW + Math.min(Math.max(UW, 0), 1) * (tW - cW),
          SW = wW + Math.min(Math.max(kW, 0), 1) * (ZW - wW),
          YW = Math.min(LW.width - 1, Math.floor(MW * LW.width)),
          yW = 4 * (Math.min(LW.height - 1, Math.floor(SW * LW.height)) * LW.width + YW),
          TW = LW.pixels[yW + 3] / 255;
        if (0 === TW) continue;
        const JW = 4 * sW,
          hW = WW[JW + 3] / 255 * (1 - TW),
          HW = TW + hW;
        for (let iW = 0; iW < 3; iW++) WW[JW + iW] = (LW.pixels[yW + iW] * xW * TW + WW[JW + iW] * hW) / HW;
        WW[JW + 3] = 255 * HW
      }
  }

  function UW(WW, iW, OW) {
    const mW = WW.get(iW);
    if (void 0 === mW) throw new Error(`no ${OW} was sent for ${iW.slice(0,100)}`);
    return mW
  }
  const kW = {
      pixelsOf(WW) {
        const iW = new OffscreenCanvas(WW.width, WW.height),
          OW = iW.getContext("2d");
        if (!OW) throw new Error("no 2D context");
        return OW.drawImage(WW, 0, 0), WW.close(), {
          width: iW.width,
          height: iW.height,
          pixels: OW.getImageData(0, 0, iW.width, iW.height).data
        }
      },
      async encode(WW, iW) {
        const OW = new OffscreenCanvas(iW, iW),
          mW = OW.getContext("2d");
        if (!mW) throw new Error("no 2D context");
        mW.putImageData(new ImageData(WW, iW, iW), 0, 0);
        const EW = await OW.convertToBlob();
        return new Promise(((WW, iW) => {
          const OW = new FileReader;
          OW.onload = () => {
            WW(OW.result)
          }, OW.onerror = () => {
            var WW;
            iW(null !== (WW = OW.error) && void 0 !== WW ? WW : new Error("the icon did not encode"))
          }, OW.readAsDataURL(EW)
        }))
      }
    },
    sW = globalThis.WorkerGlobalScope;
  void 0 !== sW && globalThis instanceof sW && function(mW, EW) {
    const PW = new Map,
      wW = new Map,
      tW = (WW, iW, OW) => {
        (async () => {
          try {
            mW.postMessage({
              type: "drawn",
              id: WW,
              url: await EW.encode(OW(), iW)
            })
          } catch (NW) {
            mW.postMessage({
              type: "failed",
              message: String(NW)
            })
          }
        })()
      };
    mW.onmessage = mW => {
      let {
        data: bW
      } = mW;
      if ("texture" === bW.type) PW.set(bW.url, EW.pixelsOf(bW.bitmap));
      else if ("model" === bW.type) wW.set(bW.name, {
        geometry: bW.geometry,
        texture: EW.pixelsOf(bW.bitmap)
      });
      else if ("draw" === bW.type) {
        const {
          id: mW,
          top: EW,
          left: cW,
          right: wW,
          itemType: kW,
          size: sW,
          outlineWidth: MW
        } = bW;
        tW(mW, sW, (() => function(mW, EW, PW, cW) {
          const wW = NW(PW, cW),
            tW = wW * WW,
            xW = wW * iW,
            lW = wW * OW,
            AW = Math.max(...EW.boxes.map((WW => WW[4]))),
            bW = PW / 2,
            UW = xW + (PW - xW - xW - AW * lW) / 2,
            kW = (WW, iW, OW) => ({
              x: bW + (WW - OW) * tW,
              y: UW - xW + (WW + OW) * xW + (AW - iW) * lW
            }),
            sW = (WW, iW, OW, mW, NW, PW) => ({
              origin: WW,
              across: {
                x: iW.x - WW.x,
                y: iW.y - WW.y
              },
              down: {
                x: OW.x - WW.x,
                y: OW.y - WW.y
              },
              texture: mW,
              rect: EW.cropFaces ? NW : [0, 0, 1, 1],
              shade: PW
            }),
            MW = new Uint8ClampedArray(PW * PW * 4),
            KW = new Uint8Array(PW * PW),
            SW = LW;
          for (const [WW, iW, OW, NW, LW, ZW] of EW.boxes) {
            const EW = sW(kW(NW, LW, ZW), kW(NW, LW, OW), kW(NW, iW, ZW), mW.right, [1 - ZW, 1 - LW, 1 - OW, 1 - iW], SW.right),
              cW = sW(kW(WW, LW, ZW), kW(NW, LW, ZW), kW(WW, iW, ZW), mW.left, [WW, 1 - LW, NW, 1 - iW], SW.left),
              wW = sW(kW(WW, LW, OW), kW(NW, LW, OW), kW(WW, LW, ZW), mW.top, [WW, OW, NW, ZW], SW.top);
            for (const WW of [EW, cW, wW]) jW(MW, KW, PW, WW)
          }
          return ZW(MW, PW, cW, (WW => 1 === KW[WW])), MW
        }({
          top: UW(PW, EW, "texture"),
          left: UW(PW, cW, "texture"),
          right: UW(PW, wW, "texture")
        }, function(WW) {
          return "SlabBlock" === WW ? lW : "StairsBlock" === WW ? AW : xW
        }(kW), sW, MW)))
      } else {
        const {
          id: WW,
          name: iW,
          size: OW,
          outlineWidth: mW
        } = bW;
        tW(WW, OW, (() => {
          const {
            geometry: WW,
            texture: EW
          } = UW(wW, iW, "model");
          return cW(WW, EW, OW, mW)
        }))
      }
    }, mW.postMessage({
      type: "started"
    })
  }(globalThis, kW)
})();