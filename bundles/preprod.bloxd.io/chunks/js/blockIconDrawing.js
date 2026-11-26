export const id = 2;
export const ids = [2];
export const modules = {
  37279: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      drawBlockIcon: () => xH,
      drawBlockIconUrl: () => vH,
      getDrawnBlockIcon: () => MH,
      resetBlockIconDrawingForTests: () => uH
    });
    var AH = LH(37285);
    const rH = {
        boxes: [
          [0, 0, 0, 1, 1, 1]
        ],
        cropFaces: !1
      },
      SH = {
        boxes: [
          [0, 0, 0, 1, .5, 1]
        ],
        cropFaces: !1
      },
      hH = {
        boxes: [
          [0, 0, 0, 1, .5, 1],
          [0, .5, 0, .5, 1, 1]
        ],
        cropFaces: !0
      };
    const tH = 1e-6;

    function zH(HH, BH, LH, AH) {
      let {
        origin: rH,
        across: SH,
        down: hH,
        texture: zH,
        rect: [CH, EH, XH, GH],
        shade: YH
      } = AH;
      const uH = SH.x * hH.y - SH.y * hH.x;
      if (Math.abs(uH) < 1e-9) return;
      const QH = [rH.x, rH.x + SH.x, rH.x + hH.x, rH.x + SH.x + hH.x],
        WH = [rH.y, rH.y + SH.y, rH.y + hH.y, rH.y + SH.y + hH.y],
        MH = Math.max(0, Math.floor(Math.min(...QH))),
        xH = Math.min(LH - 1, Math.ceil(Math.max(...QH))),
        vH = Math.max(0, Math.floor(Math.min(...WH))),
        PH = Math.min(LH - 1, Math.ceil(Math.max(...WH)));
      for (let TH = vH; TH <= PH; TH++)
        for (let AH = MH; AH <= xH; AH++) {
          const QH = AH + .5 - rH.x,
            WH = TH + .5 - rH.y,
            MH = (QH * hH.y - WH * hH.x) / uH,
            xH = (SH.x * WH - SH.y * QH) / uH;
          if (MH < -tH || MH > 1 + tH || xH < -tH || xH > 1 + tH) continue;
          const vH = TH * LH + AH;
          BH[vH] = 1;
          const PH = CH + Math.min(Math.max(MH, 0), 1) * (XH - CH),
            UH = EH + Math.min(Math.max(xH, 0), 1) * (GH - EH),
            VH = Math.min(zH.width - 1, Math.floor(PH * zH.width)),
            OH = 4 * (Math.min(zH.height - 1, Math.floor(UH * zH.height)) * zH.width + VH),
            bH = zH.pixels[OH + 3] / 255;
          if (0 === bH) continue;
          const kH = 4 * vH,
            mH = HH[kH + 3] / 255 * (1 - bH),
            oH = bH + mH;
          for (let BH = 0; BH < 3; BH++) HH[kH + BH] = (zH.pixels[OH + BH] * YH * bH + HH[kH + BH] * mH) / oH;
          HH[kH + 3] = 255 * oH
        }
    }
    var CH = LH(37294);
    const EH = new Map,
      XH = new Map,
      GH = new Map,
      YH = new Map;

    function uH() {
      EH.clear(), XH.clear(), GH.clear(), YH.clear()
    }

    function QH(HH, BH, LH) {
      return `${BH}|${LH}|${HH}`
    }

    function WH(HH, BH, LH) {
      let AH = HH.get(BH);
      return void 0 === AH && (AH = LH().catch((LH => {
        throw HH.delete(BH), LH
      })), HH.set(BH, AH)), AH
    }

    function MH(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return XH.get(QH(HH, BH, LH))
    }

    function xH(HH, BH, LH, AH) {
      const rH = QH(HH, BH, LH);
      return WH(EH, rH, (async () => {
        const SH = await PH(AH(HH), BH, LH);
        return XH.set(rH, SH), SH
      }))
    }

    function vH(HH, BH, LH, AH) {
      return WH(GH, QH(HH, BH, LH), (async () => {
        var rH;
        const SH = AH(HH);
        return null !== (rH = await (0, CH.c)(SH, BH, LH)) && void 0 !== rH ? rH : (await PH(SH, BH, LH)).toDataURL()
      }))
    }
    async function PH(HH, BH, LH) {
      let {
        top: tH,
        left: CH,
        right: EH,
        itemType: XH
      } = HH;
      const [GH, YH, uH] = await Promise.all([TH(tH), TH(CH), TH(EH)]), QH = function(HH, BH, LH, rH) {
        const SH = (0, AH.f)(LH, rH),
          hH = SH * AH.b.across,
          tH = SH * AH.b.down,
          CH = SH * AH.b.up,
          EH = Math.max(...BH.boxes.map((HH => HH[4]))),
          XH = LH / 2,
          GH = tH + (LH - tH - tH - EH * CH) / 2,
          YH = (HH, BH, LH) => ({
            x: XH + (HH - LH) * hH,
            y: GH - tH + (HH + LH) * tH + (EH - BH) * CH
          }),
          uH = (HH, LH, AH, rH, SH, hH) => ({
            origin: HH,
            across: {
              x: LH.x - HH.x,
              y: LH.y - HH.y
            },
            down: {
              x: AH.x - HH.x,
              y: AH.y - HH.y
            },
            texture: rH,
            rect: BH.cropFaces ? SH : [0, 0, 1, 1],
            shade: hH
          }),
          QH = new Uint8ClampedArray(LH * LH * 4),
          WH = new Uint8Array(LH * LH),
          MH = AH.e;
        for (const [AH, xH, vH, PH, TH, UH] of BH.boxes) {
          const BH = uH(YH(PH, TH, UH), YH(PH, TH, vH), YH(PH, xH, UH), HH.right, [1 - UH, 1 - TH, 1 - vH, 1 - xH], MH.right),
            rH = uH(YH(AH, TH, UH), YH(PH, TH, UH), YH(AH, xH, UH), HH.left, [AH, 1 - TH, PH, 1 - xH], MH.left),
            SH = uH(YH(AH, TH, vH), YH(PH, TH, vH), YH(AH, TH, UH), HH.top, [AH, vH, PH, UH], MH.top);
          for (const HH of [BH, rH, SH]) zH(QH, WH, LH, HH)
        }
        return (0, AH.g)(QH, LH, rH, (HH => 1 === WH[HH])), QH
      }({
        top: GH,
        left: YH,
        right: uH
      }, function(HH) {
        return "SlabBlock" === HH ? SH : "StairsBlock" === HH ? hH : rH
      }(XH), BH, LH), WH = document.createElement("canvas");
      WH.width = BH, WH.height = BH;
      const MH = WH.getContext("2d");
      if (!MH) throw new Error("Failed to get 2D context");
      return MH.putImageData(new ImageData(QH, BH, BH), 0, 0), WH
    }

    function TH(HH) {
      return WH(YH, HH, (async () => {
        const BH = await (0, CH.j)(HH),
          LH = document.createElement("canvas");
        LH.width = BH.width, LH.height = BH.height;
        const AH = LH.getContext("2d");
        if (!AH) throw new Error("Failed to get 2D context");
        return AH.drawImage(BH, 0, 0), {
          width: BH.width,
          height: BH.height,
          pixels: AH.getImageData(0, 0, BH.width, BH.height).data
        }
      }))
    }
  },
  37294: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => mH,
      f: () => oH,
      g: () => TH,
      j: () => vH,
      m: () => UH
    });
    var AH = LH(257),
      rH = LH(81);
    const SH = new(LH(37297).b)(new URL(LH.p + LH.u(3), LH.b), {
      name: "blockIconWorker",
      type: "module"
    });
    var hH = LH(1863),
      tH = LH(2219);
    const zH = 1e4,
      CH = 3e4;
    let EH = null,
      XH = null,
      GH = null,
      YH = !1,
      uH = 0;
    const QH = new Map;
    let WH = null;
    const MH = new Map,
      xH = new Map;

    function vH(HH) {
      const BH = new Promise(((BH, LH) => {
        const AH = new Image;
        AH.crossOrigin = "anonymous", AH.fetchPriority = "high", AH.onload = () => {
          BH(AH)
        }, AH.onerror = () => {
          LH(new Error(`A block icon's texture did not load: ${HH.slice(0,100)}`))
        }, AH.src = HH
      }));
      return (0, tH.f)(BH)
    }

    function PH(HH) {
      var BH, LH;
      YH || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${HH}`), YH = !0, null === (BH = EH) || void 0 === BH || BH.terminate(), EH = null, XH = null, MH.clear(), xH.clear();
      for (const AH of QH.values()) AH(null);
      QH.clear(), null === (LH = WH) || void 0 === LH || LH()
    }

    function TH() {
      return null !== XH
    }

    function UH() {
      return GH ??= async function() {
        if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
        if ("page" === AH.e.ios_icon_worker_v1 && (0, rH.isWebKit)()) return;
        try {
          EH = await async function() {
            return await SH.ready(), SH.start()
          }()
        } catch (tH) {
          return void PH(`did not start (${String(tH)})`)
        }
        let HH = () => {};
        const BH = new Promise((BH => {
          HH = BH
        }));
        EH.onmessage = BH => {
          let {
            data: LH
          } = BH;
          if ("started" === LH.type) XH = EH, HH();
          else if ("failed" === LH.type) PH(`failed a draw (${LH.message})`);
          else {
            var AH, rH;
            null === (AH = QH.get(LH.id)) || void 0 === AH || AH(LH.url), QH.delete(LH.id), null === (rH = WH) || void 0 === rH || rH()
          }
        }, EH.onerror = BH => {
          BH.preventDefault(), PH(`stopped (${BH.message||"its script did not load or run"})`), HH()
        };
        const LH = `did not start in ${CH/1e3} s`;
        await (0, hH.j)(BH, CH, LH).catch((() => {
          PH(LH)
        }))
      }(), GH
    }

    function VH() {
      if (null !== WH || 0 === QH.size) return;
      const HH = new Promise((HH => {
          WH = HH
        })),
        BH = `did not answer in ${zH/1e3} s`;
      (0, hH.j)(HH, zH, BH).then((() => {
        WH = null, VH()
      }), (() => {
        WH = null, PH(BH)
      }))
    }

    function OH(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      HH.postMessage(BH, LH)
    }

    function bH(HH, BH, LH, AH) {
      let rH = BH.get(LH);
      return void 0 === rH && (rH = AH().then((async BH => {
        let {
          image: LH,
          request: AH
        } = BH;
        try {
          const BH = await createImageBitmap(LH);
          OH(HH, AH(BH), [BH])
        } catch (rH) {
          PH(`could not take an image (${String(rH)})`)
        }
      })), rH.catch((() => {
        BH.get(LH) === rH && BH.delete(LH)
      })), BH.set(LH, rH)), rH
    }
    async function kH(HH, BH) {
      UH();
      const LH = XH;
      if (null === LH) return null;
      if (await HH(LH), XH !== LH) return null;
      const AH = ++uH;
      return new Promise((HH => {
        QH.set(AH, HH), OH(LH, BH(AH)), VH()
      }))
    }

    function mH(HH, BH, LH) {
      return kH((BH => Promise.all([HH.top, HH.left, HH.right].map((HH => function(HH, BH) {
        return bH(HH, MH, BH, (async () => ({
          image: await vH(BH),
          request: HH => ({
            type: "texture",
            url: BH,
            bitmap: HH
          })
        })))
      }(BH, HH))))), (AH => ({
        type: "draw",
        id: AH,
        ...HH,
        size: BH,
        outlineWidth: LH
      })))
    }

    function oH(HH, BH, LH, AH) {
      return kH((LH => function(HH, BH, LH) {
        return bH(HH, xH, BH, (async () => {
          const {
            texture: HH,
            ...AH
          } = await LH();
          return {
            image: await vH(HH),
            request: HH => ({
              type: "model",
              name: BH,
              bitmap: HH,
              geometry: AH
            })
          }
        }))
      }(LH, HH, BH)), (BH => ({
        type: "drawModel",
        id: BH,
        name: HH,
        size: LH,
        outlineWidth: AH
      })))
    }
  },
  37285: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => AH,
      e: () => zH,
      f: () => hH,
      g: () => GH,
      j: () => CH
    });
    const AH = {
        across: Math.SQRT1_2,
        down: Math.SQRT1_2 / 2,
        up: Math.sqrt(3) / 2
      },
      rH = .6,
      SH = {
        width: 2 * AH.across,
        height: 2 * AH.down + AH.up
      };

    function hH(HH, BH) {
      const LH = BH > 0 ? BH + 1 : 0,
        hH = HH * rH - BH / AH.across;
      return Math.max(0, Math.min(hH, (HH - 2 * LH) / SH.height))
    }
    const tH = [15, 15, 15],
      zH = {
        top: 1,
        left: .85,
        right: .7
      };

    function CH(HH, BH, LH, AH) {
      const {
        vertices: rH,
        uvs: tH,
        indices: zH,
        shades: CH
      } = HH, EH = function(HH, BH) {
        const LH = hH(HH, BH),
          AH = SH.width * LH,
          rH = SH.height * LH;
        return {
          left: (HH - AH) / 2,
          top: (HH - rH) / 2,
          width: AH,
          height: rH
        }
      }(LH, AH), XH = new Float32Array(rH.length);
      for (let SH = 0; SH < rH.length; SH += 3) XH[SH] = EH.left + rH[SH] * EH.width, XH[SH + 1] = EH.top + rH[SH + 1] * EH.height, XH[SH + 2] = rH[SH + 2];
      const YH = new Float32Array(LH * LH).fill(-1 / 0),
        uH = new Uint8ClampedArray(LH * LH * 4),
        QH = 255 * HH.alphaCutoff;
      for (let SH = 0; SH < zH.length; SH += 3) {
        const [HH, AH, rH] = [zH[SH], zH[SH + 1], zH[SH + 2]], [hH, EH, GH] = [3 * HH, 3 * AH, 3 * rH], [WH, MH, xH, vH, PH, TH] = [XH[hH], XH[hH + 1], XH[EH], XH[EH + 1], XH[GH], XH[GH + 1]], UH = (xH - WH) * (TH - MH) - (PH - WH) * (vH - MH);
        if (Math.abs(UH) < 1e-9) continue;
        const VH = CH[SH / 3],
          [OH, bH, kH, mH, oH, IH] = [tH[2 * HH], tH[2 * HH + 1], tH[2 * AH], tH[2 * AH + 1], tH[2 * rH], tH[2 * rH + 1]],
          fH = Math.max(0, Math.floor(Math.min(WH, xH, PH))),
          lH = Math.min(LH - 1, Math.ceil(Math.max(WH, xH, PH))),
          KH = Math.max(0, Math.floor(Math.min(MH, vH, TH))),
          cH = Math.min(LH - 1, Math.ceil(Math.max(MH, vH, TH)));
        for (let SH = KH; SH <= cH; SH++)
          for (let HH = fH; HH <= lH; HH++) {
            const [AH, rH] = [HH + .5, SH + .5], tH = ((AH - WH) * (TH - MH) - (PH - WH) * (rH - MH)) / UH, zH = ((xH - WH) * (rH - MH) - (AH - WH) * (vH - MH)) / UH, CH = 1 - tH - zH;
            if (CH < 0 || tH < 0 || zH < 0) continue;
            const fH = CH * XH[hH + 2] + tH * XH[EH + 2] + zH * XH[GH + 2],
              lH = SH * LH + HH;
            if (fH <= YH[lH]) continue;
            const KH = Math.max(0, Math.min(BH.width - 1, Math.floor((CH * OH + tH * kH + zH * oH) * BH.width))),
              cH = 4 * (Math.max(0, Math.min(BH.height - 1, Math.floor((CH * bH + tH * mH + zH * IH) * BH.height))) * BH.width + KH);
            BH.pixels[cH + 3] < QH || (YH[lH] = fH, uH[4 * lH] = BH.pixels[cH] * VH, uH[4 * lH + 1] = BH.pixels[cH + 1] * VH, uH[4 * lH + 2] = BH.pixels[cH + 2] * VH, uH[4 * lH + 3] = 255)
          }
      }
      return GH(uH, LH, AH), uH
    }
    let EH = NaN,
      XH = new Int32Array(0);

    function GH(HH, BH, LH) {
      let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : BH => 0 !== HH[4 * BH + 3];
      const rH = new Uint8Array(BH * BH);
      for (let tH = 0; tH < BH * BH; tH++) rH[tH] = AH(tH) ? 1 : 0;
      const SH = (HH, LH) => HH >= 0 && LH >= 0 && HH < BH && LH < BH && 0 === rH[LH * BH + HH],
        hH = new Float32Array(BH * BH).fill(1 / 0),
        zH = function(HH) {
          if (HH !== EH) {
            const BH = Math.ceil(HH + 1),
              LH = [];
            for (let AH = -BH; AH <= BH; AH++)
              for (let rH = -BH; rH <= BH; rH++) {
                const BH = rH * rH + AH * AH;
                BH > 0 && BH < (HH + 1) ** 2 && LH.push(rH, AH, BH)
              }
            EH = HH, XH = Int32Array.from(LH)
          }
          return XH
        }(LH);
      for (let tH = 0; tH < BH; tH++)
        for (let HH = 0; HH < BH; HH++) {
          if (1 === rH[tH * BH + HH] && (SH(HH - 1, tH) || SH(HH + 1, tH) || SH(HH, tH - 1) || SH(HH, tH + 1)))
            for (let LH = 0; LH < zH.length; LH += 3) {
              const AH = HH + zH[LH],
                rH = tH + zH[LH + 1];
              if (AH >= 0 && rH >= 0 && AH < BH && rH < BH) {
                const HH = rH * BH + AH;
                hH[HH] = Math.min(hH[HH], zH[LH + 2])
              }
            }
        }
      for (let CH = 0; CH < BH * BH; CH++) 1 !== rH[CH] && hH[CH] !== 1 / 0 && (HH.set(tH, 4 * CH), HH[4 * CH + 3] = Math.round(255 * Math.min(1, LH + 1 - Math.sqrt(hH[CH]))))
    }
  },
  37297: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => rH
    });
    const AH = {
      wait: function(HH) {
        return new Promise((BH => {
          setTimeout(BH, HH)
        }))
      },
      stallMs: 2e4
    };
    class rH {
      constructor(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : AH;
        this.url = HH, this.options = BH, this.timing = LH, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = HH
      }
      ready() {
        if (null === this.fetched) {
          const HH = new AbortController;
          this.fetchAbort = HH, this.fetched = this.fetchWithRetries(HH.signal).then((BH => (this.fetchAbort === HH && (this.fetchAbort = null), BH)))
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
      async fetchWithRetries(HH) {
        for (let BH = 0;; BH++) {
          const LH = new URL(this.url);
          if (BH > 0 && LH.searchParams.set("cache-bust", `${Date.now()}-${BH}`), await this.fetchWhole(LH, HH)) return this.scriptUrl = LH, !0;
          if (BH >= 3 || HH.aborted) return !1;
          if (await this.timing.wait(500 * 2 ** BH), HH.aborted) return !1
        }
      }
      async fetchWhole(HH, BH) {
        const LH = new AbortController;
        let AH;
        const rH = () => {
            clearTimeout(AH), AH = setTimeout((() => {
              LH.abort()
            }), this.timing.stallMs)
          },
          SH = () => {
            LH.abort()
          };
        BH.addEventListener("abort", SH, {
          once: !0
        }), rH();
        try {
          var hH;
          const BH = await fetch(HH, {
            signal: LH.signal
          });
          if (!BH.ok) return !1;
          const AH = null === (hH = BH.body) || void 0 === hH ? void 0 : hH.getReader();
          if (!AH) return !1;
          for (;;) {
            const {
              done: HH
            } = await AH.read();
            if (HH) return !0;
            rH()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(AH), BH.removeEventListener("abort", SH)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);