export const id = 2;
export const ids = [2];
export const modules = {
  35808: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      drawBlockIcon: () => VY,
      drawBlockIconUrl: () => SY,
      getDrawnBlockIcon: () => mY
    });
    var FY = DY(35813);
    const AY = Math.SQRT1_2,
      IY = Math.sqrt(3) / 2,
      RY = .5,
      OY = {
        boxes: [
          [0, 0, 0, 1, 1, 1]
        ],
        cropFaces: !1
      },
      gY = {
        boxes: [
          [0, 0, 0, 1, .5, 1]
        ],
        cropFaces: !1
      },
      aY = {
        boxes: [
          [0, 0, 0, 1, .5, 1],
          [0, .5, 0, .5, 1, 1]
        ],
        cropFaces: !0
      };
    const vY = 1e-6;

    function uY(YY, rY, DY, FY) {
      let {
        origin: AY,
        across: IY,
        down: RY,
        texture: OY,
        rect: [gY, aY, uY, sY],
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
          if (WY < -vY || WY > 1 + vY || EY < -vY || EY > 1 + vY) continue;
          const mY = SY * DY + FY;
          rY[mY] = 1;
          const VY = gY + Math.min(Math.max(WY, 0), 1) * (uY - gY),
            lY = aY + Math.min(Math.max(EY, 0), 1) * (sY - aY),
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
    var sY = DY(35817);
    const iY = new Map,
      yY = new Map,
      QY = new Map,
      oY = new Map;

    function WY(YY, rY, DY) {
      return `${rY}|${DY}|${YY}`
    }

    function EY(YY, rY, DY) {
      let FY = YY.get(rY);
      return void 0 === FY && (FY = DY().catch((DY => {
        throw YY.delete(rY), DY
      })), YY.set(rY, FY)), FY
    }

    function mY(YY, rY) {
      let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return yY.get(WY(YY, rY, DY))
    }

    function VY(YY, rY, DY, FY) {
      const AY = WY(YY, rY, DY);
      return EY(iY, AY, (async () => {
        const IY = await TY(FY(YY), rY, lY(DY));
        return yY.set(AY, IY), IY
      }))
    }

    function SY(YY, rY, DY, FY) {
      return EY(QY, WY(YY, rY, DY), (async () => {
        var AY;
        const IY = FY(YY),
          RY = lY(DY);
        return null !== (AY = await (0, sY.d)(IY, rY, RY)) && void 0 !== AY ? AY : (await TY(IY, rY, RY)).toDataURL()
      }))
    }

    function lY(YY) {
      return Math.max(1, Math.round(YY))
    }
    async function TY(YY, rY, DY) {
      let {
        top: vY,
        left: sY,
        right: iY,
        itemType: yY
      } = YY;
      const [QY, oY, WY] = await Promise.all([eY(vY), eY(sY), eY(iY)]), EY = function(YY, rY, DY, OY) {
        const gY = .6 * DY,
          aY = gY * AY,
          vY = gY * AY * RY,
          sY = gY * IY,
          iY = Math.max(...rY.boxes.map((YY => YY[4]))),
          yY = aY / 2 + (DY - aY) / 2,
          QY = vY + (DY - vY - vY - iY * sY) / 2,
          oY = (YY, rY, DY) => ({
            x: yY + (YY - DY) * aY,
            y: QY - vY + (YY + DY) * vY + (iY - rY) * sY
          }),
          WY = (YY, DY, FY, AY, IY, RY) => ({
            origin: YY,
            across: {
              x: DY.x - YY.x,
              y: DY.y - YY.y
            },
            down: {
              x: FY.x - YY.x,
              y: FY.y - YY.y
            },
            texture: AY,
            rect: rY.cropFaces ? IY : [0, 0, 1, 1],
            shade: RY
          }),
          EY = new Uint8ClampedArray(DY * DY * 4),
          mY = new Uint8Array(DY * DY),
          VY = FY.c;
        for (const [FY, AY, IY, RY, SY, lY] of rY.boxes) {
          const rY = WY(oY(RY, SY, lY), oY(RY, SY, IY), oY(RY, AY, lY), YY.right, [1 - lY, 1 - SY, 1 - IY, 1 - AY], VY.right),
            OY = WY(oY(FY, SY, lY), oY(RY, SY, lY), oY(FY, AY, lY), YY.left, [FY, 1 - SY, RY, 1 - AY], VY.left),
            gY = WY(oY(FY, SY, IY), oY(RY, SY, IY), oY(FY, SY, lY), YY.top, [FY, IY, RY, lY], VY.top);
          for (const YY of [rY, OY, gY]) uY(EY, mY, DY, YY)
        }
        return (0, FY.g)(EY, DY, OY, (YY => 1 === mY[YY])), EY
      }({
        top: QY,
        left: oY,
        right: WY
      }, function(YY) {
        return "SlabBlock" === YY ? gY : "StairsBlock" === YY ? aY : OY
      }(yY), rY, DY), mY = document.createElement("canvas");
      mY.width = rY, mY.height = rY;
      const VY = mY.getContext("2d");
      if (!VY) throw new Error("Failed to get 2D context");
      return VY.putImageData(new ImageData(EY, rY, rY), 0, 0), mY
    }

    function eY(YY) {
      return EY(oY, YY, (async () => {
        const rY = await (0, sY.h)(YY),
          DY = document.createElement("canvas");
        DY.width = rY.width, DY.height = rY.height;
        const FY = DY.getContext("2d");
        if (!FY) throw new Error("Failed to get 2D context");
        return FY.drawImage(rY, 0, 0), {
          width: rY.width,
          height: rY.height,
          pixels: FY.getImageData(0, 0, rY.width, rY.height).data
        }
      }))
    }
  },
  35817: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => BY,
      g: () => cY,
      h: () => mY
    });
    var FY = DY(309),
      AY = DY(99);
    const IY = new(DY(35826).d)(new URL(DY.p + DY.u(3), DY.b), {
      name: "blockIconWorker",
      type: "module"
    });
    var RY = DY(1744),
      OY = DY(2789);
    const gY = 1e4,
      aY = 3e4;
    let vY = null,
      uY = null,
      sY = null,
      iY = !1,
      yY = 0;
    const QY = new Map;
    let oY = null;
    const WY = new Map,
      EY = new Map;

    function mY(YY) {
      const rY = new Promise(((rY, DY) => {
        const FY = new Image;
        FY.crossOrigin = "anonymous", FY.fetchPriority = "high", FY.onload = () => {
          rY(FY)
        }, FY.onerror = () => {
          DY(new Error(`A block icon's texture did not load: ${YY.slice(0,100)}`))
        }, FY.src = YY
      }));
      return (0, OY.g)(rY)
    }

    function VY(YY) {
      var rY, DY;
      iY || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${YY}`), iY = !0, null === (rY = vY) || void 0 === rY || rY.terminate(), vY = null, uY = null, WY.clear(), EY.clear();
      for (const FY of QY.values()) FY(null);
      QY.clear(), null === (DY = oY) || void 0 === DY || DY()
    }

    function SY() {
      return sY ??= async function() {
        if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
        if ("page" === FY.e.ios_icon_worker_v1 && (0, AY.isWebKit)()) return;
        try {
          vY = await async function() {
            return await IY.ready(), IY.start()
          }()
        } catch (OY) {
          return void VY(`did not start (${String(OY)})`)
        }
        let YY = () => {};
        const rY = new Promise((rY => {
          YY = rY
        }));
        vY.onmessage = rY => {
          let {
            data: DY
          } = rY;
          if ("started" === DY.type) uY = vY, YY();
          else if ("failed" === DY.type) VY(`failed a draw (${DY.message})`);
          else {
            var FY, AY;
            null === (FY = QY.get(DY.id)) || void 0 === FY || FY(DY.url), QY.delete(DY.id), null === (AY = oY) || void 0 === AY || AY()
          }
        }, vY.onerror = rY => {
          rY.preventDefault(), VY(`stopped (${rY.message||"its script did not load or run"})`), YY()
        };
        const DY = `did not start in ${aY/1e3} s`;
        await (0, RY.k)(rY, aY, DY).catch((() => {
          VY(DY)
        }))
      }(), sY
    }

    function lY() {
      if (null !== oY || 0 === QY.size) return;
      const YY = new Promise((YY => {
          oY = YY
        })),
        rY = `did not answer in ${gY/1e3} s`;
      (0, RY.k)(YY, gY, rY).then((() => {
        oY = null, lY()
      }), (() => {
        oY = null, VY(rY)
      }))
    }

    function TY(YY, rY) {
      let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      YY.postMessage(rY, DY)
    }

    function eY(YY, rY, DY, FY) {
      let AY = rY.get(DY);
      return void 0 === AY && (AY = FY().then((async rY => {
        let {
          image: DY,
          request: FY
        } = rY;
        try {
          const rY = await createImageBitmap(DY);
          TY(YY, FY(rY), [rY])
        } catch (AY) {
          VY(`could not take an image (${String(AY)})`)
        }
      })), AY.catch((() => {
        rY.get(DY) === AY && rY.delete(DY)
      })), rY.set(DY, AY)), AY
    }
    async function NY(YY, rY) {
      SY();
      const DY = uY;
      if (null === DY) return null;
      if (await YY(DY), uY !== DY) return null;
      const FY = ++yY;
      return new Promise((YY => {
        QY.set(FY, YY), TY(DY, rY(FY)), lY()
      }))
    }

    function BY(YY, rY, DY) {
      return NY((rY => Promise.all([YY.top, YY.left, YY.right].map((YY => function(YY, rY) {
        return eY(YY, WY, rY, (async () => ({
          image: await mY(rY),
          request: YY => ({
            type: "texture",
            url: rY,
            bitmap: YY
          })
        })))
      }(rY, YY))))), (FY => ({
        type: "draw",
        id: FY,
        ...YY,
        size: rY,
        outlineWidth: DY
      })))
    }

    function cY(YY, rY, DY, FY) {
      return NY((DY => function(YY, rY, DY) {
        return eY(YY, EY, rY, (async () => {
          const {
            texture: YY,
            ...FY
          } = await DY();
          return {
            image: await mY(YY),
            request: YY => ({
              type: "model",
              name: rY,
              bitmap: YY,
              geometry: FY
            })
          }
        }))
      }(DY, YY, rY)), (rY => ({
        type: "drawModel",
        id: rY,
        name: YY,
        size: DY,
        outlineWidth: FY
      })))
    }
  },
  35813: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => IY,
      g: () => OY,
      j: () => RY
    });
    const FY = 1 / 32,
      AY = [15, 15, 15],
      IY = {
        top: 1,
        left: .85,
        right: .7
      };

    function RY(YY, rY, DY, AY) {
      const {
        vertices: IY,
        uvs: RY,
        indices: gY,
        shades: aY
      } = YY, vY = DY * FY, uY = DY - 2 * vY, sY = new Float32Array(IY.length);
      for (let FY = 0; FY < IY.length; FY += 3) sY[FY] = vY + IY[FY] * uY, sY[FY + 1] = vY + IY[FY + 1] * uY, sY[FY + 2] = IY[FY + 2];
      const iY = new Float32Array(DY * DY).fill(-1 / 0),
        yY = new Uint8ClampedArray(DY * DY * 4),
        QY = 255 * YY.alphaCutoff;
      for (let FY = 0; FY < gY.length; FY += 3) {
        const [YY, AY, IY] = [gY[FY], gY[FY + 1], gY[FY + 2]], [OY, vY, uY] = [3 * YY, 3 * AY, 3 * IY], [oY, WY, EY, mY, VY, SY] = [sY[OY], sY[OY + 1], sY[vY], sY[vY + 1], sY[uY], sY[uY + 1]], lY = (EY - oY) * (SY - WY) - (VY - oY) * (mY - WY);
        if (Math.abs(lY) < 1e-9) continue;
        const TY = aY[FY / 3],
          [eY, NY, BY, cY, KY, HY] = [RY[2 * YY], RY[2 * YY + 1], RY[2 * AY], RY[2 * AY + 1], RY[2 * IY], RY[2 * IY + 1]],
          zY = Math.max(0, Math.floor(Math.min(oY, EY, VY))),
          ZY = Math.min(DY - 1, Math.ceil(Math.max(oY, EY, VY))),
          CY = Math.max(0, Math.floor(Math.min(WY, mY, SY))),
          fY = Math.min(DY - 1, Math.ceil(Math.max(WY, mY, SY)));
        for (let FY = CY; FY <= fY; FY++)
          for (let YY = zY; YY <= ZY; YY++) {
            const [AY, IY] = [YY + .5, FY + .5], RY = ((AY - oY) * (SY - WY) - (VY - oY) * (IY - WY)) / lY, gY = ((EY - oY) * (IY - WY) - (AY - oY) * (mY - WY)) / lY, aY = 1 - RY - gY;
            if (aY < 0 || RY < 0 || gY < 0) continue;
            const zY = aY * sY[OY + 2] + RY * sY[vY + 2] + gY * sY[uY + 2],
              ZY = FY * DY + YY;
            if (zY <= iY[ZY]) continue;
            const CY = Math.max(0, Math.min(rY.width - 1, Math.floor((aY * eY + RY * BY + gY * KY) * rY.width))),
              fY = 4 * (Math.max(0, Math.min(rY.height - 1, Math.floor((aY * NY + RY * cY + gY * HY) * rY.height))) * rY.width + CY);
            rY.pixels[fY + 3] < QY || (iY[ZY] = zY, yY[4 * ZY] = rY.pixels[fY] * TY, yY[4 * ZY + 1] = rY.pixels[fY + 1] * TY, yY[4 * ZY + 2] = rY.pixels[fY + 2] * TY, yY[4 * ZY + 3] = 255)
          }
      }
      return OY(yY, DY, AY), yY
    }

    function OY(YY, rY, DY) {
      let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : rY => 0 !== YY[4 * rY + 3];
      const IY = (YY, DY) => YY < 0 || DY < 0 || YY >= rY || DY >= rY || !FY(DY * rY + YY),
        RY = [];
      for (let AY = 0; AY < rY; AY++)
        for (let YY = 0; YY < rY; YY++)
          if (!IY(YY, AY)) YY: for (let FY = -DY; FY <= DY; FY++) {
            const OY = DY - Math.abs(FY);
            for (let DY = -OY; DY <= OY; DY++)
              if (IY(YY + DY, AY + FY)) {
                RY.push(AY * rY + YY);
                break YY
              }
          }
      for (const OY of RY) YY.set(AY, 4 * OY), YY[4 * OY + 3] = 255
    }
  },
  35826: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => AY
    });
    const FY = {
      wait: function(YY) {
        return new Promise((rY => {
          setTimeout(rY, YY)
        }))
      },
      stallMs: 2e4
    };
    class AY {
      constructor(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : FY;
        this.url = YY, this.options = rY, this.timing = DY, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = YY
      }
      ready() {
        if (null === this.fetched) {
          const YY = new AbortController;
          this.fetchAbort = YY, this.fetched = this.fetchWithRetries(YY.signal).finally((() => {
            this.fetchAbort === YY && (this.fetchAbort = null)
          }))
        }
        return this.fetched
      }
      cancel() {
        null !== this.fetchAbort && (this.fetchAbort.abort(), this.fetchAbort = null, this.fetched = null)
      }
      start() {
        return new Worker(this.scriptUrl, this.options)
      }
      async fetchWithRetries(YY) {
        for (let rY = 0;; rY++) {
          const DY = new URL(this.url);
          if (rY > 0 && DY.searchParams.set("cache-bust", `${Date.now()}-${rY}`), await this.fetchWhole(DY, YY)) return void(this.scriptUrl = DY);
          if (rY >= 3 || YY.aborted) return;
          if (await this.timing.wait(500 * 2 ** rY), YY.aborted) return
        }
      }
      async fetchWhole(YY, rY) {
        const DY = new AbortController;
        let FY;
        const AY = () => {
            clearTimeout(FY), FY = setTimeout((() => {
              DY.abort()
            }), this.timing.stallMs)
          },
          IY = () => {
            DY.abort()
          };
        rY.addEventListener("abort", IY, {
          once: !0
        }), AY();
        try {
          var RY;
          const rY = await fetch(YY, {
            signal: DY.signal
          });
          if (!rY.ok) return !1;
          const FY = null === (RY = rY.body) || void 0 === RY ? void 0 : RY.getReader();
          if (!FY) return !1;
          for (;;) {
            const {
              done: YY
            } = await FY.read();
            if (YY) return !0;
            AY()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(FY), rY.removeEventListener("abort", IY)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);