(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var YY = __webpack_require__.u,
        rY = __webpack_require__.e,
        DY = {},
        FY = {};
      __webpack_require__.u = function(rY) {
        return YY(rY) + (DY.hasOwnProperty(rY) ? "?" + DY[rY] : "")
      }, __webpack_require__.e = function(AY) {
        return rY(AY).catch((function(rY) {
          var IY = FY.hasOwnProperty(AY) ? FY[AY] : 4;
          if (IY < 1) {
            var RY = YY(AY);
            throw rY.message = "Loading chunk " + AY + " failed after 4 retries.\n(" + RY + ")", rY.request = RY, DY[AY] = "cache-bust=" + Date.now(), setTimeout((function() {
              delete FY[AY]
            }), 0), rY
          }
          return new Promise((function(YY) {
            var rY = 4 - IY + 1;
            setTimeout((function() {
              var rY = "cache-bust=" + Date.now();
              DY[AY] = rY, FY[AY] = IY - 1, YY(__webpack_require__.e(AY))
            }), function(YY) {
              return 500 * Math.pow(2, YY)
            }(rY))
          }))
        }))
      }
    }
  })();
  const YY = [15, 15, 15],
    rY = {
      top: 1,
      left: .85,
      right: .7
    };

  function DY(rY, DY, FY) {
    let AY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : YY => 0 !== rY[4 * YY + 3];
    const IY = (YY, rY) => YY < 0 || rY < 0 || YY >= DY || rY >= DY || !AY(rY * DY + YY),
      RY = [];
    for (let YY = 0; YY < DY; YY++)
      for (let rY = 0; rY < DY; rY++)
        if (!IY(rY, YY)) YY: for (let AY = -FY; AY <= FY; AY++) {
          const OY = FY - Math.abs(AY);
          for (let FY = -OY; FY <= OY; FY++)
            if (IY(rY + FY, YY + AY)) {
              RY.push(YY * DY + rY);
              break YY
            }
        }
    for (const OY of RY) rY.set(YY, 4 * OY), rY[4 * OY + 3] = 255
  }
  const FY = Math.SQRT1_2,
    AY = Math.sqrt(3) / 2,
    IY = {
      boxes: [
        [0, 0, 0, 1, 1, 1]
      ],
      cropFaces: !1
    },
    RY = {
      boxes: [
        [0, 0, 0, 1, .5, 1]
      ],
      cropFaces: !1
    },
    OY = {
      boxes: [
        [0, 0, 0, 1, .5, 1],
        [0, .5, 0, .5, 1, 1]
      ],
      cropFaces: !0
    };
  const gY = 1e-6;

  function aY(YY, rY, DY, FY) {
    let {
      origin: AY,
      across: IY,
      down: RY,
      texture: OY,
      rect: [aY, vY, uY, sY],
      shade: iY
    } = FY;
    const yY = IY.x * RY.y - IY.y * RY.x;
    if (Math.abs(yY) < 1e-9) return;
    const QY = [AY.x, AY.x + IY.x, AY.x + RY.x, AY.x + IY.x + RY.x],
      oY = [AY.y, AY.y + IY.y, AY.y + RY.y, AY.y + IY.y + RY.y],
      WY = Math.max(0, Math.floor(Math.min(...QY))),
      EY = Math.min(DY - 1, Math.ceil(Math.max(...QY))),
      mY = Math.max(0, Math.floor(Math.min(...oY))),
      VY = Math.min(DY - 1, Math.ceil(Math.max(...oY)));
    for (let SY = mY; SY <= VY; SY++)
      for (let FY = WY; FY <= EY; FY++) {
        const QY = FY + .5 - AY.x,
          oY = SY + .5 - AY.y,
          WY = (QY * RY.y - oY * RY.x) / yY,
          EY = (IY.x * oY - IY.y * QY) / yY;
        if (WY < -gY || WY > 1 + gY || EY < -gY || EY > 1 + gY) continue;
        const mY = SY * DY + FY;
        rY[mY] = 1;
        const VY = aY + Math.min(Math.max(WY, 0), 1) * (uY - aY),
          lY = vY + Math.min(Math.max(EY, 0), 1) * (sY - vY),
          TY = Math.min(OY.width - 1, Math.floor(VY * OY.width)),
          eY = 4 * (Math.min(OY.height - 1, Math.floor(lY * OY.height)) * OY.width + TY),
          NY = OY.pixels[eY + 3] / 255;
        if (0 === NY) continue;
        const BY = 4 * mY,
          cY = YY[BY + 3] / 255 * (1 - NY),
          KY = NY + cY;
        for (let rY = 0; rY < 3; rY++) YY[BY + rY] = (OY.pixels[eY + rY] * iY * NY + YY[BY + rY] * cY) / KY;
        YY[BY + 3] = 255 * KY
      }
  }

  function vY(YY, rY, DY) {
    const FY = YY.get(rY);
    if (void 0 === FY) throw new Error(`no ${DY} was sent for ${rY.slice(0,100)}`);
    return FY
  }
  const uY = {
      pixelsOf(YY) {
        const rY = new OffscreenCanvas(YY.width, YY.height),
          DY = rY.getContext("2d");
        if (!DY) throw new Error("no 2D context");
        return DY.drawImage(YY, 0, 0), YY.close(), {
          width: rY.width,
          height: rY.height,
          pixels: DY.getImageData(0, 0, rY.width, rY.height).data
        }
      },
      async encode(YY, rY) {
        const DY = new OffscreenCanvas(rY, rY),
          FY = DY.getContext("2d");
        if (!FY) throw new Error("no 2D context");
        FY.putImageData(new ImageData(YY, rY, rY), 0, 0);
        const AY = await DY.convertToBlob();
        return new Promise(((YY, rY) => {
          const DY = new FileReader;
          DY.onload = () => {
            YY(DY.result)
          }, DY.onerror = () => {
            var YY;
            rY(null !== (YY = DY.error) && void 0 !== YY ? YY : new Error("the icon did not encode"))
          }, DY.readAsDataURL(AY)
        }))
      }
    },
    sY = globalThis.WorkerGlobalScope;
  void 0 !== sY && globalThis instanceof sY && function(YY, gY) {
    const uY = new Map,
      sY = new Map,
      iY = (rY, DY, FY) => {
        (async () => {
          try {
            YY.postMessage({
              type: "drawn",
              id: rY,
              url: await gY.encode(FY(), DY)
            })
          } catch (AY) {
            YY.postMessage({
              type: "failed",
              message: String(AY)
            })
          }
        })()
      };
    YY.onmessage = YY => {
      let {
        data: yY
      } = YY;
      if ("texture" === yY.type) uY.set(yY.url, gY.pixelsOf(yY.bitmap));
      else if ("model" === yY.type) sY.set(yY.name, {
        geometry: yY.geometry,
        texture: gY.pixelsOf(yY.bitmap)
      });
      else if ("draw" === yY.type) {
        const {
          id: YY,
          top: gY,
          left: sY,
          right: QY,
          itemType: oY,
          size: WY,
          outlineWidth: EY
        } = yY;
        iY(YY, WY, (() => function(YY, IY, RY, OY) {
          const gY = .6 * RY,
            vY = gY * FY,
            uY = gY * FY * .5,
            sY = gY * AY,
            iY = Math.max(...IY.boxes.map((YY => YY[4]))),
            yY = vY / 2 + (RY - vY) / 2,
            QY = uY + (RY - uY - uY - iY * sY) / 2,
            oY = (YY, rY, DY) => ({
              x: yY + (YY - DY) * vY,
              y: QY - uY + (YY + DY) * uY + (iY - rY) * sY
            }),
            WY = (YY, rY, DY, FY, AY, RY) => ({
              origin: YY,
              across: {
                x: rY.x - YY.x,
                y: rY.y - YY.y
              },
              down: {
                x: DY.x - YY.x,
                y: DY.y - YY.y
              },
              texture: FY,
              rect: IY.cropFaces ? AY : [0, 0, 1, 1],
              shade: RY
            }),
            EY = new Uint8ClampedArray(RY * RY * 4),
            mY = new Uint8Array(RY * RY),
            VY = rY;
          for (const [rY, DY, FY, AY, SY, lY] of IY.boxes) {
            const IY = WY(oY(AY, SY, lY), oY(AY, SY, FY), oY(AY, DY, lY), YY.right, [1 - lY, 1 - SY, 1 - FY, 1 - DY], VY.right),
              OY = WY(oY(rY, SY, lY), oY(AY, SY, lY), oY(rY, DY, lY), YY.left, [rY, 1 - SY, AY, 1 - DY], VY.left),
              gY = WY(oY(rY, SY, FY), oY(AY, SY, FY), oY(rY, SY, lY), YY.top, [rY, FY, AY, lY], VY.top);
            for (const YY of [IY, OY, gY]) aY(EY, mY, RY, YY)
          }
          return DY(EY, RY, OY, (YY => 1 === mY[YY])), EY
        }({
          top: vY(uY, gY, "texture"),
          left: vY(uY, sY, "texture"),
          right: vY(uY, QY, "texture")
        }, function(YY) {
          return "SlabBlock" === YY ? RY : "StairsBlock" === YY ? OY : IY
        }(oY), WY, EY)))
      } else {
        const {
          id: YY,
          name: rY,
          size: FY,
          outlineWidth: AY
        } = yY;
        iY(YY, FY, (() => {
          const {
            geometry: YY,
            texture: IY
          } = vY(sY, rY, "model");
          return function(YY, rY, FY, AY) {
            const {
              vertices: IY,
              uvs: RY,
              indices: OY,
              shades: gY
            } = YY, aY = .03125 * FY, vY = FY - 2 * aY, uY = new Float32Array(IY.length);
            for (let DY = 0; DY < IY.length; DY += 3) uY[DY] = aY + IY[DY] * vY, uY[DY + 1] = aY + IY[DY + 1] * vY, uY[DY + 2] = IY[DY + 2];
            const sY = new Float32Array(FY * FY).fill(-1 / 0),
              iY = new Uint8ClampedArray(FY * FY * 4),
              yY = 255 * YY.alphaCutoff;
            for (let DY = 0; DY < OY.length; DY += 3) {
              const [YY, AY, IY] = [OY[DY], OY[DY + 1], OY[DY + 2]], [aY, vY, QY] = [3 * YY, 3 * AY, 3 * IY], [oY, WY, EY, mY, VY, SY] = [uY[aY], uY[aY + 1], uY[vY], uY[vY + 1], uY[QY], uY[QY + 1]], lY = (EY - oY) * (SY - WY) - (VY - oY) * (mY - WY);
              if (Math.abs(lY) < 1e-9) continue;
              const TY = gY[DY / 3],
                [eY, NY, BY, cY, KY, HY] = [RY[2 * YY], RY[2 * YY + 1], RY[2 * AY], RY[2 * AY + 1], RY[2 * IY], RY[2 * IY + 1]],
                zY = Math.max(0, Math.floor(Math.min(oY, EY, VY))),
                ZY = Math.min(FY - 1, Math.ceil(Math.max(oY, EY, VY))),
                CY = Math.max(0, Math.floor(Math.min(WY, mY, SY))),
                fY = Math.min(FY - 1, Math.ceil(Math.max(WY, mY, SY)));
              for (let DY = CY; DY <= fY; DY++)
                for (let YY = zY; YY <= ZY; YY++) {
                  const [AY, IY] = [YY + .5, DY + .5], RY = ((AY - oY) * (SY - WY) - (VY - oY) * (IY - WY)) / lY, OY = ((EY - oY) * (IY - WY) - (AY - oY) * (mY - WY)) / lY, gY = 1 - RY - OY;
                  if (gY < 0 || RY < 0 || OY < 0) continue;
                  const zY = gY * uY[aY + 2] + RY * uY[vY + 2] + OY * uY[QY + 2],
                    ZY = DY * FY + YY;
                  if (zY <= sY[ZY]) continue;
                  const CY = Math.max(0, Math.min(rY.width - 1, Math.floor((gY * eY + RY * BY + OY * KY) * rY.width))),
                    fY = 4 * (Math.max(0, Math.min(rY.height - 1, Math.floor((gY * NY + RY * cY + OY * HY) * rY.height))) * rY.width + CY);
                  rY.pixels[fY + 3] < yY || (sY[ZY] = zY, iY[4 * ZY] = rY.pixels[fY] * TY, iY[4 * ZY + 1] = rY.pixels[fY + 1] * TY, iY[4 * ZY + 2] = rY.pixels[fY + 2] * TY, iY[4 * ZY + 3] = 255)
                }
            }
            return DY(iY, FY, AY), iY
          }(YY, IY, FY, AY)
        }))
      }
    }, YY.postMessage({
      type: "started"
    })
  }(globalThis, uY)
})();