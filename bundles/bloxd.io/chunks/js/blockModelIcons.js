export const id = 4;
export const ids = [4];
export const modules = {
  35843: (YY, rY, DY) => {
    var FY = {
      "./Artisan Bench.json": [40172, 263],
      "./Aspen Item Pedestal.json": [40177, 264],
      "./Cedar Item Pedestal.json": [40185, 265],
      "./Cherry Item Pedestal.json": [40191, 266],
      "./Furnace.json": [40194, 267],
      "./Jungle Item Pedestal.json": [40200, 268],
      "./Mango Item Pedestal.json": [40203, 269],
      "./Palm Item Pedestal.json": [40212, 270],
      "./Pear Item Pedestal.json": [40218, 271],
      "./Pine Item Pedestal.json": [40221, 272],
      "./Plum Item Pedestal.json": [40224, 273],
      "./Potion Table.json": [40231, 274],
      "./Salvaging Table.json": [40236, 275],
      "./Showcase.json": [40238, 276],
      "./Spectral Item Pedestal.json": [40240, 277],
      "./Workbench.json": [40245, 278]
    };

    function AY(YY) {
      if (!DY.o(FY, YY)) return Promise.resolve().then((() => {
        var rY = new Error("Cannot find module '" + YY + "'");
        throw rY.code = "MODULE_NOT_FOUND", rY
      }));
      var rY = FY[YY],
        AY = rY[0];
      return DY.e(rY[1]).then((() => DY(AY)))
    }
    AY.keys = () => Object.keys(FY), AY.id = 35843, YY.exports = AY
  },
  35834: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      getBlockModelIconUrl: () => sY,
      hasBlockModelIcon: () => aY
    });
    var FY = DY(35817),
      AY = DY(35813);
    const IY = DY(35843),
      RY = new Map(IY.keys().filter((YY => YY.startsWith("./"))).map((YY => [YY.slice(2, -5), YY]))),
      OY = new Map,
      gY = new Map;

    function aY(YY) {
      return RY.has(YY)
    }

    function vY(YY) {
      return IY(RY.get(YY))
    }
    async function uY(YY, rY, DY) {
      const {
        data: FY,
        texture: IY
      } = await
      function(YY) {
        let rY = OY.get(YY);
        return rY || (rY = vY(YY).then((async YY => {
          const rY = new Image;
          rY.src = YY.texture, await rY.decode();
          const DY = document.createElement("canvas");
          DY.width = rY.width, DY.height = rY.height;
          const FY = DY.getContext("2d");
          return FY.drawImage(rY, 0, 0), {
            data: YY,
            texture: {
              width: rY.width,
              height: rY.height,
              pixels: FY.getImageData(0, 0, rY.width, rY.height).data
            }
          }
        })), rY.catch((() => {
          OY.delete(YY)
        })), OY.set(YY, rY)), rY
      }(YY), RY = document.createElement("canvas");
      return RY.width = rY, RY.height = rY, RY.getContext("2d").putImageData(new ImageData((0, AY.j)(FY, IY, rY, DY), rY, rY), 0, 0), RY.toDataURL()
    }

    function sY(YY, rY, DY) {
      const AY = `${rY}|${DY}|${YY}`;
      let IY = gY.get(AY);
      return IY || (IY = (0, FY.g)(YY, (() => vY(YY)), rY, DY).then((FY => null !== FY && void 0 !== FY ? FY : uY(YY, rY, DY))), IY.catch((() => {
        gY.delete(AY)
      })), gY.set(AY, IY)), IY
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