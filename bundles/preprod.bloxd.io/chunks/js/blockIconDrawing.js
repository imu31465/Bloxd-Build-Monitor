export const id = 2;
export const ids = [2];
export const modules = {
  37102: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      drawBlockIcon: () => kU,
      drawBlockIconUrl: () => GU,
      getDrawnBlockIcon: () => gU,
      resetBlockIconDrawingForTests: () => pU
    });
    var cU = zU(37104);
    const yU = {
        boxes: [
          [0, 0, 0, 1, 1, 1]
        ],
        cropFaces: !1
      },
      QU = {
        boxes: [
          [0, 0, 0, 1, .5, 1]
        ],
        cropFaces: !1
      },
      AU = {
        boxes: [
          [0, 0, 0, 1, .5, 1],
          [0, .5, 0, .5, 1, 1]
        ],
        cropFaces: !0
      };
    const FU = 1e-6;

    function oU(UU, XU, zU, cU) {
      let {
        origin: yU,
        across: QU,
        down: AU,
        texture: oU,
        rect: [DU, EU, YU, NU],
        shade: IU
      } = cU;
      const pU = QU.x * AU.y - QU.y * AU.x;
      if (Math.abs(pU) < 1e-9) return;
      const aU = [yU.x, yU.x + QU.x, yU.x + AU.x, yU.x + QU.x + AU.x],
        tU = [yU.y, yU.y + QU.y, yU.y + AU.y, yU.y + QU.y + AU.y],
        gU = Math.max(0, Math.floor(Math.min(...aU))),
        kU = Math.min(zU - 1, Math.ceil(Math.max(...aU))),
        GU = Math.max(0, Math.floor(Math.min(...tU))),
        BU = Math.min(zU - 1, Math.ceil(Math.max(...tU)));
      for (let ZU = GU; ZU <= BU; ZU++)
        for (let cU = gU; cU <= kU; cU++) {
          const aU = cU + .5 - yU.x,
            tU = ZU + .5 - yU.y,
            gU = (aU * AU.y - tU * AU.x) / pU,
            kU = (QU.x * tU - QU.y * aU) / pU;
          if (gU < -FU || gU > 1 + FU || kU < -FU || kU > 1 + FU) continue;
          const GU = ZU * zU + cU;
          XU[GU] = 1;
          const BU = DU + Math.min(Math.max(gU, 0), 1) * (YU - DU),
            RU = EU + Math.min(Math.max(kU, 0), 1) * (NU - EU),
            PU = Math.min(oU.width - 1, Math.floor(BU * oU.width)),
            WU = 4 * (Math.min(oU.height - 1, Math.floor(RU * oU.height)) * oU.width + PU),
            dU = oU.pixels[WU + 3] / 255;
          if (0 === dU) continue;
          const LU = 4 * GU,
            eU = UU[LU + 3] / 255 * (1 - dU),
            CU = dU + eU;
          for (let XU = 0; XU < 3; XU++) UU[LU + XU] = (oU.pixels[WU + XU] * IU * dU + UU[LU + XU] * eU) / CU;
          UU[LU + 3] = 255 * CU
        }
    }
    var DU = zU(37110);
    const EU = new Map,
      YU = new Map,
      NU = new Map,
      IU = new Map;

    function pU() {
      EU.clear(), YU.clear(), NU.clear(), IU.clear()
    }

    function aU(UU, XU, zU) {
      return `${XU}|${zU}|${UU}`
    }

    function tU(UU, XU, zU) {
      let cU = UU.get(XU);
      return void 0 === cU && (cU = zU().catch((zU => {
        throw UU.delete(XU), zU
      })), UU.set(XU, cU)), cU
    }

    function gU(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return YU.get(aU(UU, XU, zU))
    }

    function kU(UU, XU, zU, cU) {
      const yU = aU(UU, XU, zU);
      return tU(EU, yU, (async () => {
        const QU = await BU(cU(UU), XU, zU);
        return YU.set(yU, QU), QU
      }))
    }

    function GU(UU, XU, zU, cU) {
      return tU(NU, aU(UU, XU, zU), (async () => {
        var yU;
        const QU = cU(UU);
        return null !== (yU = await (0, DU.d)(QU, XU, zU)) && void 0 !== yU ? yU : (await BU(QU, XU, zU)).toDataURL()
      }))
    }
    async function BU(UU, XU, zU) {
      let {
        top: FU,
        left: DU,
        right: EU,
        itemType: YU
      } = UU;
      const [NU, IU, pU] = await Promise.all([ZU(FU), ZU(DU), ZU(EU)]), aU = function(UU, XU, zU, yU) {
        const QU = (0, cU.e)(zU, yU),
          AU = QU * cU.b.across,
          FU = QU * cU.b.down,
          DU = QU * cU.b.up,
          EU = Math.max(...XU.boxes.map((UU => UU[4]))),
          YU = zU / 2,
          NU = FU + (zU - FU - FU - EU * DU) / 2,
          IU = (UU, XU, zU) => ({
            x: YU + (UU - zU) * AU,
            y: NU - FU + (UU + zU) * FU + (EU - XU) * DU
          }),
          pU = (UU, zU, cU, yU, QU, AU) => ({
            origin: UU,
            across: {
              x: zU.x - UU.x,
              y: zU.y - UU.y
            },
            down: {
              x: cU.x - UU.x,
              y: cU.y - UU.y
            },
            texture: yU,
            rect: XU.cropFaces ? QU : [0, 0, 1, 1],
            shade: AU
          }),
          aU = new Uint8ClampedArray(zU * zU * 4),
          tU = new Uint8Array(zU * zU),
          gU = cU.c;
        for (const [cU, kU, GU, BU, ZU, RU] of XU.boxes) {
          const XU = pU(IU(BU, ZU, RU), IU(BU, ZU, GU), IU(BU, kU, RU), UU.right, [1 - RU, 1 - ZU, 1 - GU, 1 - kU], gU.right),
            yU = pU(IU(cU, ZU, RU), IU(BU, ZU, RU), IU(cU, kU, RU), UU.left, [cU, 1 - ZU, BU, 1 - kU], gU.left),
            QU = pU(IU(cU, ZU, GU), IU(BU, ZU, GU), IU(cU, ZU, RU), UU.top, [cU, GU, BU, RU], gU.top);
          for (const UU of [XU, yU, QU]) oU(aU, tU, zU, UU)
        }
        return (0, cU.f)(aU, zU, yU, (UU => 1 === tU[UU])), aU
      }({
        top: NU,
        left: IU,
        right: pU
      }, function(UU) {
        return "SlabBlock" === UU ? QU : "StairsBlock" === UU ? AU : yU
      }(YU), XU, zU), tU = document.createElement("canvas");
      tU.width = XU, tU.height = XU;
      const gU = tU.getContext("2d");
      if (!gU) throw new Error("Failed to get 2D context");
      return gU.putImageData(new ImageData(aU, XU, XU), 0, 0), tU
    }

    function ZU(UU) {
      return tU(IU, UU, (async () => {
        const XU = await (0, DU.j)(UU),
          zU = document.createElement("canvas");
        zU.width = XU.width, zU.height = XU.height;
        const cU = zU.getContext("2d");
        if (!cU) throw new Error("Failed to get 2D context");
        return cU.drawImage(XU, 0, 0), {
          width: XU.width,
          height: XU.height,
          pixels: cU.getImageData(0, 0, XU.width, XU.height).data
        }
      }))
    }
  },
  37110: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => eU,
      f: () => CU,
      i: () => ZU,
      j: () => GU,
      m: () => RU
    });
    var cU = zU(287),
      yU = zU(97);
    const QU = new(zU(37112).b)(new URL(zU.p + zU.u(3), zU.b), {
      name: "blockIconWorker",
      type: "module"
    });
    var AU = zU(1877),
      FU = zU(2215);
    const oU = 1e4,
      DU = 3e4;
    let EU = null,
      YU = null,
      NU = null,
      IU = !1,
      pU = 0;
    const aU = new Map;
    let tU = null;
    const gU = new Map,
      kU = new Map;

    function GU(UU) {
      const XU = new Promise(((XU, zU) => {
        const cU = new Image;
        cU.crossOrigin = "anonymous", cU.fetchPriority = "high", cU.onload = () => {
          XU(cU)
        }, cU.onerror = () => {
          zU(new Error(`A block icon's texture did not load: ${UU.slice(0,100)}`))
        }, cU.src = UU
      }));
      return (0, FU.h)(XU)
    }

    function BU(UU) {
      var XU, zU;
      IU || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${UU}`), IU = !0, null === (XU = EU) || void 0 === XU || XU.terminate(), EU = null, YU = null, gU.clear(), kU.clear();
      for (const cU of aU.values()) cU(null);
      aU.clear(), null === (zU = tU) || void 0 === zU || zU()
    }

    function ZU() {
      return null !== YU
    }

    function RU() {
      return NU ??= async function() {
        if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
        if ("page" === cU.d.ios_icon_worker_v1 && (0, yU.isWebKit)()) return;
        try {
          EU = await async function() {
            return await QU.ready(), QU.start()
          }()
        } catch (FU) {
          return void BU(`did not start (${String(FU)})`)
        }
        let UU = () => {};
        const XU = new Promise((XU => {
          UU = XU
        }));
        EU.onmessage = XU => {
          let {
            data: zU
          } = XU;
          if ("started" === zU.type) YU = EU, UU();
          else if ("failed" === zU.type) BU(`failed a draw (${zU.message})`);
          else {
            var cU, yU;
            null === (cU = aU.get(zU.id)) || void 0 === cU || cU(zU.url), aU.delete(zU.id), null === (yU = tU) || void 0 === yU || yU()
          }
        }, EU.onerror = XU => {
          XU.preventDefault(), BU(`stopped (${XU.message||"its script did not load or run"})`), UU()
        };
        const zU = `did not start in ${DU/1e3} s`;
        await (0, AU.l)(XU, DU, zU).catch((() => {
          BU(zU)
        }))
      }(), NU
    }

    function PU() {
      if (null !== tU || 0 === aU.size) return;
      const UU = new Promise((UU => {
          tU = UU
        })),
        XU = `did not answer in ${oU/1e3} s`;
      (0, AU.l)(UU, oU, XU).then((() => {
        tU = null, PU()
      }), (() => {
        tU = null, BU(XU)
      }))
    }

    function WU(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      UU.postMessage(XU, zU)
    }

    function dU(UU, XU, zU, cU) {
      let yU = XU.get(zU);
      return void 0 === yU && (yU = cU().then((async XU => {
        let {
          image: zU,
          request: cU
        } = XU;
        try {
          const XU = await createImageBitmap(zU);
          WU(UU, cU(XU), [XU])
        } catch (yU) {
          BU(`could not take an image (${String(yU)})`)
        }
      })), yU.catch((() => {
        XU.get(zU) === yU && XU.delete(zU)
      })), XU.set(zU, yU)), yU
    }
    async function LU(UU, XU) {
      RU();
      const zU = YU;
      if (null === zU) return null;
      if (await UU(zU), YU !== zU) return null;
      const cU = ++pU;
      return new Promise((UU => {
        aU.set(cU, UU), WU(zU, XU(cU)), PU()
      }))
    }

    function eU(UU, XU, zU) {
      return LU((XU => Promise.all([UU.top, UU.left, UU.right].map((UU => function(UU, XU) {
        return dU(UU, gU, XU, (async () => ({
          image: await GU(XU),
          request: UU => ({
            type: "texture",
            url: XU,
            bitmap: UU
          })
        })))
      }(XU, UU))))), (cU => ({
        type: "draw",
        id: cU,
        ...UU,
        size: XU,
        outlineWidth: zU
      })))
    }

    function CU(UU, XU, zU, cU) {
      return LU((zU => function(UU, XU, zU) {
        return dU(UU, kU, XU, (async () => {
          const {
            texture: UU,
            ...cU
          } = await zU();
          return {
            image: await GU(UU),
            request: UU => ({
              type: "model",
              name: XU,
              bitmap: UU,
              geometry: cU
            })
          }
        }))
      }(zU, UU, XU)), (XU => ({
        type: "drawModel",
        id: XU,
        name: UU,
        size: zU,
        outlineWidth: cU
      })))
    }
  },
  37104: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => cU,
      c: () => oU,
      e: () => AU,
      f: () => NU,
      g: () => DU
    });
    const cU = {
        across: Math.SQRT1_2,
        down: Math.SQRT1_2 / 2,
        up: Math.sqrt(3) / 2
      },
      yU = .6,
      QU = {
        width: 2 * cU.across,
        height: 2 * cU.down + cU.up
      };

    function AU(UU, XU) {
      const zU = XU > 0 ? XU + 1 : 0,
        AU = UU * yU - XU / cU.across;
      return Math.max(0, Math.min(AU, (UU - 2 * zU) / QU.height))
    }
    const FU = [15, 15, 15],
      oU = {
        top: 1,
        left: .85,
        right: .7
      };

    function DU(UU, XU, zU, cU) {
      const {
        vertices: yU,
        uvs: FU,
        indices: oU,
        shades: DU
      } = UU, EU = function(UU, XU) {
        const zU = AU(UU, XU),
          cU = QU.width * zU,
          yU = QU.height * zU;
        return {
          left: (UU - cU) / 2,
          top: (UU - yU) / 2,
          width: cU,
          height: yU
        }
      }(zU, cU), YU = new Float32Array(yU.length);
      for (let QU = 0; QU < yU.length; QU += 3) YU[QU] = EU.left + yU[QU] * EU.width, YU[QU + 1] = EU.top + yU[QU + 1] * EU.height, YU[QU + 2] = yU[QU + 2];
      const IU = new Float32Array(zU * zU).fill(-1 / 0),
        pU = new Uint8ClampedArray(zU * zU * 4),
        aU = 255 * UU.alphaCutoff;
      for (let QU = 0; QU < oU.length; QU += 3) {
        const [UU, cU, yU] = [oU[QU], oU[QU + 1], oU[QU + 2]], [AU, EU, NU] = [3 * UU, 3 * cU, 3 * yU], [tU, gU, kU, GU, BU, ZU] = [YU[AU], YU[AU + 1], YU[EU], YU[EU + 1], YU[NU], YU[NU + 1]], RU = (kU - tU) * (ZU - gU) - (BU - tU) * (GU - gU);
        if (Math.abs(RU) < 1e-9) continue;
        const PU = DU[QU / 3],
          [WU, dU, LU, eU, CU, wU] = [FU[2 * UU], FU[2 * UU + 1], FU[2 * cU], FU[2 * cU + 1], FU[2 * yU], FU[2 * yU + 1]],
          qU = Math.max(0, Math.floor(Math.min(tU, kU, BU))),
          OU = Math.min(zU - 1, Math.ceil(Math.max(tU, kU, BU))),
          SU = Math.max(0, Math.floor(Math.min(gU, GU, ZU))),
          rU = Math.min(zU - 1, Math.ceil(Math.max(gU, GU, ZU)));
        for (let QU = SU; QU <= rU; QU++)
          for (let UU = qU; UU <= OU; UU++) {
            const [cU, yU] = [UU + .5, QU + .5], FU = ((cU - tU) * (ZU - gU) - (BU - tU) * (yU - gU)) / RU, oU = ((kU - tU) * (yU - gU) - (cU - tU) * (GU - gU)) / RU, DU = 1 - FU - oU;
            if (DU < 0 || FU < 0 || oU < 0) continue;
            const qU = DU * YU[AU + 2] + FU * YU[EU + 2] + oU * YU[NU + 2],
              OU = QU * zU + UU;
            if (qU <= IU[OU]) continue;
            const SU = Math.max(0, Math.min(XU.width - 1, Math.floor((DU * WU + FU * LU + oU * CU) * XU.width))),
              rU = 4 * (Math.max(0, Math.min(XU.height - 1, Math.floor((DU * dU + FU * eU + oU * wU) * XU.height))) * XU.width + SU);
            XU.pixels[rU + 3] < aU || (IU[OU] = qU, pU[4 * OU] = XU.pixels[rU] * PU, pU[4 * OU + 1] = XU.pixels[rU + 1] * PU, pU[4 * OU + 2] = XU.pixels[rU + 2] * PU, pU[4 * OU + 3] = 255)
          }
      }
      return NU(pU, zU, cU), pU
    }
    let EU = NaN,
      YU = new Int32Array(0);

    function NU(UU, XU, zU) {
      let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : XU => 0 !== UU[4 * XU + 3];
      const yU = new Uint8Array(XU * XU);
      for (let FU = 0; FU < XU * XU; FU++) yU[FU] = cU(FU) ? 1 : 0;
      const QU = (UU, zU) => UU >= 0 && zU >= 0 && UU < XU && zU < XU && 0 === yU[zU * XU + UU],
        AU = new Float32Array(XU * XU).fill(1 / 0),
        oU = function(UU) {
          if (UU !== EU) {
            const XU = Math.ceil(UU + 1),
              zU = [];
            for (let cU = -XU; cU <= XU; cU++)
              for (let yU = -XU; yU <= XU; yU++) {
                const XU = yU * yU + cU * cU;
                XU > 0 && XU < (UU + 1) ** 2 && zU.push(yU, cU, XU)
              }
            EU = UU, YU = Int32Array.from(zU)
          }
          return YU
        }(zU);
      for (let FU = 0; FU < XU; FU++)
        for (let UU = 0; UU < XU; UU++) {
          if (1 === yU[FU * XU + UU] && (QU(UU - 1, FU) || QU(UU + 1, FU) || QU(UU, FU - 1) || QU(UU, FU + 1)))
            for (let zU = 0; zU < oU.length; zU += 3) {
              const cU = UU + oU[zU],
                yU = FU + oU[zU + 1];
              if (cU >= 0 && yU >= 0 && cU < XU && yU < XU) {
                const UU = yU * XU + cU;
                AU[UU] = Math.min(AU[UU], oU[zU + 2])
              }
            }
        }
      for (let DU = 0; DU < XU * XU; DU++) 1 !== yU[DU] && AU[DU] !== 1 / 0 && (UU.set(FU, 4 * DU), UU[4 * DU + 3] = Math.round(255 * Math.min(1, zU + 1 - Math.sqrt(AU[DU]))))
    }
  },
  37112: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => yU
    });
    const cU = {
      wait: function(UU) {
        return new Promise((XU => {
          setTimeout(XU, UU)
        }))
      },
      stallMs: 2e4
    };
    class yU {
      constructor(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : cU;
        this.url = UU, this.options = XU, this.timing = zU, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = UU
      }
      ready() {
        if (null === this.fetched) {
          const UU = new AbortController;
          this.fetchAbort = UU, this.fetched = this.fetchWithRetries(UU.signal).then((XU => (this.fetchAbort === UU && (this.fetchAbort = null), XU)))
        }
        return this.fetched
      }
      cancel() {
        null !== this.fetchAbort && (this.fetchAbort.abort(), this.fetchAbort = null, this.fetched = null)
      }
      forgetFailedFetch() {
        this.fetched = null
      }
      get href() {
        return this.url.href
      }
      start() {
        return new Worker(this.scriptUrl, this.options)
      }
      async fetchWithRetries(UU) {
        for (let XU = 0;; XU++) {
          const zU = new URL(this.url);
          if (XU > 0 && zU.searchParams.set("cache-bust", `${Date.now()}-${XU}`), await this.fetchWhole(zU, UU)) return this.scriptUrl = zU, !0;
          if (XU >= 3 || UU.aborted) return !1;
          if (await this.timing.wait(500 * 2 ** XU), UU.aborted) return !1
        }
      }
      async fetchWhole(UU, XU) {
        const zU = new AbortController;
        let cU;
        const yU = () => {
            clearTimeout(cU), cU = setTimeout((() => {
              zU.abort()
            }), this.timing.stallMs)
          },
          QU = () => {
            zU.abort()
          };
        XU.addEventListener("abort", QU, {
          once: !0
        }), yU();
        try {
          var AU;
          const XU = await fetch(UU, {
            signal: zU.signal
          });
          if (!XU.ok) return !1;
          const cU = null === (AU = XU.body) || void 0 === AU ? void 0 : AU.getReader();
          if (!cU) return !1;
          for (;;) {
            const {
              done: UU
            } = await cU.read();
            if (UU) return !0;
            yU()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(cU), XU.removeEventListener("abort", QU)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);