export const id = 2;
export const ids = [2];
export const modules = {
  37628: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      drawBlockIcon: () => kW,
      drawBlockIconUrl: () => sW,
      getDrawnBlockIcon: () => UW,
      resetBlockIconDrawingForTests: () => AW
    });
    var mW = OW(37636);
    const EW = {
        boxes: [
          [0, 0, 0, 1, 1, 1]
        ],
        cropFaces: !1
      },
      NW = {
        boxes: [
          [0, 0, 0, 1, .5, 1]
        ],
        cropFaces: !1
      },
      PW = {
        boxes: [
          [0, 0, 0, 1, .5, 1],
          [0, .5, 0, .5, 1, 1]
        ],
        cropFaces: !0
      };
    const LW = 1e-6;

    function cW(WW, iW, OW, mW) {
      let {
        origin: EW,
        across: NW,
        down: PW,
        texture: cW,
        rect: [wW, tW, ZW, xW],
        shade: lW
      } = mW;
      const AW = NW.x * PW.y - NW.y * PW.x;
      if (Math.abs(AW) < 1e-9) return;
      const bW = [EW.x, EW.x + NW.x, EW.x + PW.x, EW.x + NW.x + PW.x],
        jW = [EW.y, EW.y + NW.y, EW.y + PW.y, EW.y + NW.y + PW.y],
        UW = Math.max(0, Math.floor(Math.min(...bW))),
        kW = Math.min(OW - 1, Math.ceil(Math.max(...bW))),
        sW = Math.max(0, Math.floor(Math.min(...jW))),
        MW = Math.min(OW - 1, Math.ceil(Math.max(...jW)));
      for (let KW = sW; KW <= MW; KW++)
        for (let mW = UW; mW <= kW; mW++) {
          const bW = mW + .5 - EW.x,
            jW = KW + .5 - EW.y,
            UW = (bW * PW.y - jW * PW.x) / AW,
            kW = (NW.x * jW - NW.y * bW) / AW;
          if (UW < -LW || UW > 1 + LW || kW < -LW || kW > 1 + LW) continue;
          const sW = KW * OW + mW;
          iW[sW] = 1;
          const MW = wW + Math.min(Math.max(UW, 0), 1) * (ZW - wW),
            SW = tW + Math.min(Math.max(kW, 0), 1) * (xW - tW),
            YW = Math.min(cW.width - 1, Math.floor(MW * cW.width)),
            yW = 4 * (Math.min(cW.height - 1, Math.floor(SW * cW.height)) * cW.width + YW),
            TW = cW.pixels[yW + 3] / 255;
          if (0 === TW) continue;
          const JW = 4 * sW,
            hW = WW[JW + 3] / 255 * (1 - TW),
            HW = TW + hW;
          for (let iW = 0; iW < 3; iW++) WW[JW + iW] = (cW.pixels[yW + iW] * lW * TW + WW[JW + iW] * hW) / HW;
          WW[JW + 3] = 255 * HW
        }
    }
    var wW = OW(37640);
    const tW = new Map,
      ZW = new Map,
      xW = new Map,
      lW = new Map;

    function AW() {
      tW.clear(), ZW.clear(), xW.clear(), lW.clear()
    }

    function bW(WW, iW, OW) {
      return `${iW}|${OW}|${WW}`
    }

    function jW(WW, iW, OW) {
      let mW = WW.get(iW);
      return void 0 === mW && (mW = OW().catch((OW => {
        throw WW.delete(iW), OW
      })), WW.set(iW, mW)), mW
    }

    function UW(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return ZW.get(bW(WW, iW, OW))
    }

    function kW(WW, iW, OW, mW) {
      const EW = bW(WW, iW, OW);
      return jW(tW, EW, (async () => {
        const NW = await MW(mW(WW), iW, OW);
        return ZW.set(EW, NW), NW
      }))
    }

    function sW(WW, iW, OW, mW) {
      return jW(xW, bW(WW, iW, OW), (async () => {
        var EW;
        const NW = mW(WW);
        return null !== (EW = await (0, wW.b)(NW, iW, OW)) && void 0 !== EW ? EW : (await MW(NW, iW, OW)).toDataURL()
      }))
    }
    async function MW(WW, iW, OW) {
      let {
        top: LW,
        left: wW,
        right: tW,
        itemType: ZW
      } = WW;
      const [xW, lW, AW] = await Promise.all([KW(LW), KW(wW), KW(tW)]), bW = function(WW, iW, OW, EW) {
        const NW = (0, mW.i)(OW, EW),
          PW = NW * mW.c.across,
          LW = NW * mW.c.down,
          wW = NW * mW.c.up,
          tW = Math.max(...iW.boxes.map((WW => WW[4]))),
          ZW = OW / 2,
          xW = LW + (OW - LW - LW - tW * wW) / 2,
          lW = (WW, iW, OW) => ({
            x: ZW + (WW - OW) * PW,
            y: xW - LW + (WW + OW) * LW + (tW - iW) * wW
          }),
          AW = (WW, OW, mW, EW, NW, PW) => ({
            origin: WW,
            across: {
              x: OW.x - WW.x,
              y: OW.y - WW.y
            },
            down: {
              x: mW.x - WW.x,
              y: mW.y - WW.y
            },
            texture: EW,
            rect: iW.cropFaces ? NW : [0, 0, 1, 1],
            shade: PW
          }),
          bW = new Uint8ClampedArray(OW * OW * 4),
          jW = new Uint8Array(OW * OW),
          UW = mW.f;
        for (const [mW, kW, sW, MW, KW, SW] of iW.boxes) {
          const iW = AW(lW(MW, KW, SW), lW(MW, KW, sW), lW(MW, kW, SW), WW.right, [1 - SW, 1 - KW, 1 - sW, 1 - kW], UW.right),
            EW = AW(lW(mW, KW, SW), lW(MW, KW, SW), lW(mW, kW, SW), WW.left, [mW, 1 - KW, MW, 1 - kW], UW.left),
            NW = AW(lW(mW, KW, sW), lW(MW, KW, sW), lW(mW, KW, SW), WW.top, [mW, sW, MW, SW], UW.top);
          for (const WW of [iW, EW, NW]) cW(bW, jW, OW, WW)
        }
        return (0, mW.k)(bW, OW, EW, (WW => 1 === jW[WW])), bW
      }({
        top: xW,
        left: lW,
        right: AW
      }, function(WW) {
        return "SlabBlock" === WW ? NW : "StairsBlock" === WW ? PW : EW
      }(ZW), iW, OW), jW = document.createElement("canvas");
      jW.width = iW, jW.height = iW;
      const UW = jW.getContext("2d");
      if (!UW) throw new Error("Failed to get 2D context");
      return UW.putImageData(new ImageData(bW, iW, iW), 0, 0), jW
    }

    function KW(WW) {
      return jW(lW, WW, (async () => {
        const iW = await (0, wW.g)(WW),
          OW = document.createElement("canvas");
        OW.width = iW.width, OW.height = iW.height;
        const mW = OW.getContext("2d");
        if (!mW) throw new Error("Failed to get 2D context");
        return mW.drawImage(iW, 0, 0), {
          width: iW.width,
          height: iW.height,
          pixels: mW.getImageData(0, 0, iW.width, iW.height).data
        }
      }))
    }
  },
  37640: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => hW,
      c: () => HW,
      f: () => KW,
      g: () => sW,
      h: () => SW
    });
    var mW = OW(259),
      EW = OW(100);
    const NW = new(OW(37646).e)(new URL(OW.p + OW.u(3), OW.b), {
      name: "blockIconWorker",
      type: "module"
    });
    var PW = OW(1755),
      LW = OW(2289);
    const cW = 1e4,
      wW = 3e4;
    let tW = null,
      ZW = null,
      xW = null,
      lW = !1,
      AW = 0;
    const bW = new Map;
    let jW = null;
    const UW = new Map,
      kW = new Map;

    function sW(WW) {
      const iW = new Promise(((iW, OW) => {
        const mW = new Image;
        mW.crossOrigin = "anonymous", mW.fetchPriority = "high", mW.onload = () => {
          iW(mW)
        }, mW.onerror = () => {
          OW(new Error(`A block icon's texture did not load: ${WW.slice(0,100)}`))
        }, mW.src = WW
      }));
      return (0, LW.f)(iW)
    }

    function MW(WW) {
      var iW, OW;
      lW || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${WW}`), lW = !0, null === (iW = tW) || void 0 === iW || iW.terminate(), tW = null, ZW = null, UW.clear(), kW.clear();
      for (const mW of bW.values()) mW(null);
      bW.clear(), null === (OW = jW) || void 0 === OW || OW()
    }

    function KW() {
      return null !== ZW
    }

    function SW() {
      return xW ??= async function() {
        if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
        if ("page" === mW.d.ios_icon_worker_v1 && (0, EW.isWebKit)()) return;
        try {
          tW = await async function() {
            return await NW.ready(), NW.start()
          }()
        } catch (LW) {
          return void MW(`did not start (${String(LW)})`)
        }
        let WW = () => {};
        const iW = new Promise((iW => {
          WW = iW
        }));
        tW.onmessage = iW => {
          let {
            data: OW
          } = iW;
          if ("started" === OW.type) ZW = tW, WW();
          else if ("failed" === OW.type) MW(`failed a draw (${OW.message})`);
          else {
            var mW, EW;
            null === (mW = bW.get(OW.id)) || void 0 === mW || mW(OW.url), bW.delete(OW.id), null === (EW = jW) || void 0 === EW || EW()
          }
        }, tW.onerror = iW => {
          iW.preventDefault(), MW(`stopped (${iW.message||"its script did not load or run"})`), WW()
        };
        const OW = `did not start in ${wW/1e3} s`;
        await (0, PW.o)(iW, wW, OW).catch((() => {
          MW(OW)
        }))
      }(), xW
    }

    function YW() {
      if (null !== jW || 0 === bW.size) return;
      const WW = new Promise((WW => {
          jW = WW
        })),
        iW = `did not answer in ${cW/1e3} s`;
      (0, PW.o)(WW, cW, iW).then((() => {
        jW = null, YW()
      }), (() => {
        jW = null, MW(iW)
      }))
    }

    function yW(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      WW.postMessage(iW, OW)
    }

    function TW(WW, iW, OW, mW) {
      let EW = iW.get(OW);
      return void 0 === EW && (EW = mW().then((async iW => {
        let {
          image: OW,
          request: mW
        } = iW;
        try {
          const iW = await createImageBitmap(OW);
          yW(WW, mW(iW), [iW])
        } catch (EW) {
          MW(`could not take an image (${String(EW)})`)
        }
      })), EW.catch((() => {
        iW.get(OW) === EW && iW.delete(OW)
      })), iW.set(OW, EW)), EW
    }
    async function JW(WW, iW) {
      SW();
      const OW = ZW;
      if (null === OW) return null;
      if (await WW(OW), ZW !== OW) return null;
      const mW = ++AW;
      return new Promise((WW => {
        bW.set(mW, WW), yW(OW, iW(mW)), YW()
      }))
    }

    function hW(WW, iW, OW) {
      return JW((iW => Promise.all([WW.top, WW.left, WW.right].map((WW => function(WW, iW) {
        return TW(WW, UW, iW, (async () => ({
          image: await sW(iW),
          request: WW => ({
            type: "texture",
            url: iW,
            bitmap: WW
          })
        })))
      }(iW, WW))))), (mW => ({
        type: "draw",
        id: mW,
        ...WW,
        size: iW,
        outlineWidth: OW
      })))
    }

    function HW(WW, iW, OW, mW) {
      return JW((OW => function(WW, iW, OW) {
        return TW(WW, kW, iW, (async () => {
          const {
            texture: WW,
            ...mW
          } = await OW();
          return {
            image: await sW(WW),
            request: WW => ({
              type: "model",
              name: iW,
              bitmap: WW,
              geometry: mW
            })
          }
        }))
      }(OW, WW, iW)), (iW => ({
        type: "drawModel",
        id: iW,
        name: WW,
        size: OW,
        outlineWidth: mW
      })))
    }
  },
  37636: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => mW,
      f: () => cW,
      i: () => PW,
      k: () => xW,
      n: () => wW
    });
    const mW = {
        across: Math.SQRT1_2,
        down: Math.SQRT1_2 / 2,
        up: Math.sqrt(3) / 2
      },
      EW = .6,
      NW = {
        width: 2 * mW.across,
        height: 2 * mW.down + mW.up
      };

    function PW(WW, iW) {
      const OW = iW > 0 ? iW + 1 : 0,
        PW = WW * EW - iW / mW.across;
      return Math.max(0, Math.min(PW, (WW - 2 * OW) / NW.height))
    }
    const LW = [15, 15, 15],
      cW = {
        top: 1,
        left: .85,
        right: .7
      };

    function wW(WW, iW, OW, mW) {
      const {
        vertices: EW,
        uvs: LW,
        indices: cW,
        shades: wW
      } = WW, tW = function(WW, iW) {
        const OW = PW(WW, iW),
          mW = NW.width * OW,
          EW = NW.height * OW;
        return {
          left: (WW - mW) / 2,
          top: (WW - EW) / 2,
          width: mW,
          height: EW
        }
      }(OW, mW), ZW = new Float32Array(EW.length);
      for (let NW = 0; NW < EW.length; NW += 3) ZW[NW] = tW.left + EW[NW] * tW.width, ZW[NW + 1] = tW.top + EW[NW + 1] * tW.height, ZW[NW + 2] = EW[NW + 2];
      const lW = new Float32Array(OW * OW).fill(-1 / 0),
        AW = new Uint8ClampedArray(OW * OW * 4),
        bW = 255 * WW.alphaCutoff;
      for (let NW = 0; NW < cW.length; NW += 3) {
        const [WW, mW, EW] = [cW[NW], cW[NW + 1], cW[NW + 2]], [PW, tW, xW] = [3 * WW, 3 * mW, 3 * EW], [jW, UW, kW, sW, MW, KW] = [ZW[PW], ZW[PW + 1], ZW[tW], ZW[tW + 1], ZW[xW], ZW[xW + 1]], SW = (kW - jW) * (KW - UW) - (MW - jW) * (sW - UW);
        if (Math.abs(SW) < 1e-9) continue;
        const YW = wW[NW / 3],
          [yW, TW, JW, hW, HW, nW] = [LW[2 * WW], LW[2 * WW + 1], LW[2 * mW], LW[2 * mW + 1], LW[2 * EW], LW[2 * EW + 1]],
          uW = Math.max(0, Math.floor(Math.min(jW, kW, MW))),
          oW = Math.min(OW - 1, Math.ceil(Math.max(jW, kW, MW))),
          dW = Math.max(0, Math.floor(Math.min(UW, sW, KW))),
          eW = Math.min(OW - 1, Math.ceil(Math.max(UW, sW, KW)));
        for (let NW = dW; NW <= eW; NW++)
          for (let WW = uW; WW <= oW; WW++) {
            const [mW, EW] = [WW + .5, NW + .5], LW = ((mW - jW) * (KW - UW) - (MW - jW) * (EW - UW)) / SW, cW = ((kW - jW) * (EW - UW) - (mW - jW) * (sW - UW)) / SW, wW = 1 - LW - cW;
            if (wW < 0 || LW < 0 || cW < 0) continue;
            const uW = wW * ZW[PW + 2] + LW * ZW[tW + 2] + cW * ZW[xW + 2],
              oW = NW * OW + WW;
            if (uW <= lW[oW]) continue;
            const dW = Math.max(0, Math.min(iW.width - 1, Math.floor((wW * yW + LW * JW + cW * HW) * iW.width))),
              eW = 4 * (Math.max(0, Math.min(iW.height - 1, Math.floor((wW * TW + LW * hW + cW * nW) * iW.height))) * iW.width + dW);
            iW.pixels[eW + 3] < bW || (lW[oW] = uW, AW[4 * oW] = iW.pixels[eW] * YW, AW[4 * oW + 1] = iW.pixels[eW + 1] * YW, AW[4 * oW + 2] = iW.pixels[eW + 2] * YW, AW[4 * oW + 3] = 255)
          }
      }
      return xW(AW, OW, mW), AW
    }
    let tW = NaN,
      ZW = new Int32Array(0);

    function xW(WW, iW, OW) {
      let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : iW => 0 !== WW[4 * iW + 3];
      const EW = new Uint8Array(iW * iW);
      for (let LW = 0; LW < iW * iW; LW++) EW[LW] = mW(LW) ? 1 : 0;
      const NW = (WW, OW) => WW >= 0 && OW >= 0 && WW < iW && OW < iW && 0 === EW[OW * iW + WW],
        PW = new Float32Array(iW * iW).fill(1 / 0),
        cW = function(WW) {
          if (WW !== tW) {
            const iW = Math.ceil(WW + 1),
              OW = [];
            for (let mW = -iW; mW <= iW; mW++)
              for (let EW = -iW; EW <= iW; EW++) {
                const iW = EW * EW + mW * mW;
                iW > 0 && iW < (WW + 1) ** 2 && OW.push(EW, mW, iW)
              }
            tW = WW, ZW = Int32Array.from(OW)
          }
          return ZW
        }(OW);
      for (let LW = 0; LW < iW; LW++)
        for (let WW = 0; WW < iW; WW++) {
          if (1 === EW[LW * iW + WW] && (NW(WW - 1, LW) || NW(WW + 1, LW) || NW(WW, LW - 1) || NW(WW, LW + 1)))
            for (let OW = 0; OW < cW.length; OW += 3) {
              const mW = WW + cW[OW],
                EW = LW + cW[OW + 1];
              if (mW >= 0 && EW >= 0 && mW < iW && EW < iW) {
                const WW = EW * iW + mW;
                PW[WW] = Math.min(PW[WW], cW[OW + 2])
              }
            }
        }
      for (let wW = 0; wW < iW * iW; wW++) 1 !== EW[wW] && PW[wW] !== 1 / 0 && (WW.set(LW, 4 * wW), WW[4 * wW + 3] = Math.round(255 * Math.min(1, OW + 1 - Math.sqrt(PW[wW]))))
    }
  },
  37646: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => EW
    });
    const mW = {
      wait: function(WW) {
        return new Promise((iW => {
          setTimeout(iW, WW)
        }))
      },
      stallMs: 2e4
    };
    class EW {
      constructor(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : mW;
        this.url = WW, this.options = iW, this.timing = OW, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = WW
      }
      ready() {
        if (null === this.fetched) {
          const WW = new AbortController;
          this.fetchAbort = WW, this.fetched = this.fetchWithRetries(WW.signal).then((iW => (this.fetchAbort === WW && (this.fetchAbort = null), iW)))
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
      async fetchWithRetries(WW) {
        for (let iW = 0;; iW++) {
          const OW = new URL(this.url);
          if (iW > 0 && OW.searchParams.set("cache-bust", `${Date.now()}-${iW}`), await this.fetchWhole(OW, WW)) return this.scriptUrl = OW, !0;
          if (iW >= 3 || WW.aborted) return !1;
          if (await this.timing.wait(500 * 2 ** iW), WW.aborted) return !1
        }
      }
      async fetchWhole(WW, iW) {
        const OW = new AbortController;
        let mW;
        const EW = () => {
            clearTimeout(mW), mW = setTimeout((() => {
              OW.abort()
            }), this.timing.stallMs)
          },
          NW = () => {
            OW.abort()
          };
        iW.addEventListener("abort", NW, {
          once: !0
        }), EW();
        try {
          var PW;
          const iW = await fetch(WW, {
            signal: OW.signal
          });
          if (!iW.ok) return !1;
          const mW = null === (PW = iW.body) || void 0 === PW ? void 0 : PW.getReader();
          if (!mW) return !1;
          for (;;) {
            const {
              done: WW
            } = await mW.read();
            if (WW) return !0;
            EW()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(mW), iW.removeEventListener("abort", NW)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);