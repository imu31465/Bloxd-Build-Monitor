export const id = 2;
export const ids = [2];
export const modules = {
  35500: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      drawBlockIcon: () => mJ,
      drawBlockIconUrl: () => QJ,
      getDrawnBlockIcon: () => vJ
    });
    var FJ = ZJ(35503);
    const UJ = Math.SQRT1_2,
      eJ = Math.sqrt(3) / 2,
      XJ = .5,
      AJ = {
        boxes: [
          [0, 0, 0, 1, 1, 1]
        ],
        cropFaces: !1
      },
      qJ = {
        boxes: [
          [0, 0, 0, 1, .5, 1]
        ],
        cropFaces: !1
      },
      jJ = {
        boxes: [
          [0, 0, 0, 1, .5, 1],
          [0, .5, 0, .5, 1, 1]
        ],
        cropFaces: !0
      };
    const YJ = 1e-6;

    function hJ(JJ, cJ, ZJ, FJ) {
      let {
        origin: UJ,
        across: eJ,
        down: XJ,
        texture: AJ,
        rect: [qJ, jJ, hJ, DJ],
        shade: sJ
      } = FJ;
      const nJ = eJ.x * XJ.y - eJ.y * XJ.x;
      if (Math.abs(nJ) < 1e-9) return;
      const GJ = [UJ.x, UJ.x + eJ.x, UJ.x + XJ.x, UJ.x + eJ.x + XJ.x],
        fJ = [UJ.y, UJ.y + eJ.y, UJ.y + XJ.y, UJ.y + eJ.y + XJ.y],
        xJ = Math.max(0, Math.floor(Math.min(...GJ))),
        rJ = Math.min(ZJ - 1, Math.ceil(Math.max(...GJ))),
        vJ = Math.max(0, Math.floor(Math.min(...fJ))),
        mJ = Math.min(ZJ - 1, Math.ceil(Math.max(...fJ)));
      for (let QJ = vJ; QJ <= mJ; QJ++)
        for (let FJ = xJ; FJ <= rJ; FJ++) {
          const GJ = FJ + .5 - UJ.x,
            fJ = QJ + .5 - UJ.y,
            xJ = (GJ * XJ.y - fJ * XJ.x) / nJ,
            rJ = (eJ.x * fJ - eJ.y * GJ) / nJ;
          if (xJ < -YJ || xJ > 1 + YJ || rJ < -YJ || rJ > 1 + YJ) continue;
          const vJ = QJ * ZJ + FJ;
          cJ[vJ] = 1;
          const mJ = qJ + Math.min(Math.max(xJ, 0), 1) * (hJ - qJ),
            EJ = jJ + Math.min(Math.max(rJ, 0), 1) * (DJ - jJ),
            VJ = Math.min(AJ.width - 1, Math.floor(mJ * AJ.width)),
            KJ = 4 * (Math.min(AJ.height - 1, Math.floor(EJ * AJ.height)) * AJ.width + VJ),
            yJ = AJ.pixels[KJ + 3] / 255;
          if (0 === yJ) continue;
          const SJ = 4 * vJ,
            IJ = JJ[SJ + 3] / 255 * (1 - yJ),
            MJ = yJ + IJ;
          for (let cJ = 0; cJ < 3; cJ++) JJ[SJ + cJ] = (AJ.pixels[KJ + cJ] * sJ * yJ + JJ[SJ + cJ] * IJ) / MJ;
          JJ[SJ + 3] = 255 * MJ
        }
    }
    var DJ = ZJ(35508);
    const sJ = new Map,
      nJ = new Map,
      GJ = new Map,
      fJ = new Map;

    function xJ(JJ, cJ, ZJ) {
      return `${cJ}|${ZJ}|${JJ}`
    }

    function rJ(JJ, cJ, ZJ) {
      let FJ = JJ.get(cJ);
      return void 0 === FJ && (FJ = ZJ().catch((ZJ => {
        throw JJ.delete(cJ), ZJ
      })), JJ.set(cJ, FJ)), FJ
    }

    function vJ(JJ, cJ) {
      let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return nJ.get(xJ(JJ, cJ, ZJ))
    }

    function mJ(JJ, cJ, ZJ, FJ) {
      const UJ = xJ(JJ, cJ, ZJ);
      return rJ(sJ, UJ, (async () => {
        const eJ = await VJ(FJ(JJ), cJ, EJ(ZJ));
        return nJ.set(UJ, eJ), eJ
      }))
    }

    function QJ(JJ, cJ, ZJ, FJ) {
      return rJ(GJ, xJ(JJ, cJ, ZJ), (async () => {
        var UJ;
        const eJ = FJ(JJ),
          XJ = EJ(ZJ);
        return null !== (UJ = await (0, DJ.b)(eJ, cJ, XJ)) && void 0 !== UJ ? UJ : (await VJ(eJ, cJ, XJ)).toDataURL()
      }))
    }

    function EJ(JJ) {
      return Math.max(1, Math.round(JJ))
    }
    async function VJ(JJ, cJ, ZJ) {
      let {
        top: YJ,
        left: DJ,
        right: sJ,
        itemType: nJ
      } = JJ;
      const [GJ, fJ, xJ] = await Promise.all([KJ(YJ), KJ(DJ), KJ(sJ)]), rJ = function(JJ, cJ, ZJ, AJ) {
        const qJ = .6 * ZJ,
          jJ = qJ * UJ,
          YJ = qJ * UJ * XJ,
          DJ = qJ * eJ,
          sJ = Math.max(...cJ.boxes.map((JJ => JJ[4]))),
          nJ = jJ / 2 + (ZJ - jJ) / 2,
          GJ = YJ + (ZJ - YJ - YJ - sJ * DJ) / 2,
          fJ = (JJ, cJ, ZJ) => ({
            x: nJ + (JJ - ZJ) * jJ,
            y: GJ - YJ + (JJ + ZJ) * YJ + (sJ - cJ) * DJ
          }),
          xJ = (JJ, ZJ, FJ, UJ, eJ, XJ) => ({
            origin: JJ,
            across: {
              x: ZJ.x - JJ.x,
              y: ZJ.y - JJ.y
            },
            down: {
              x: FJ.x - JJ.x,
              y: FJ.y - JJ.y
            },
            texture: UJ,
            rect: cJ.cropFaces ? eJ : [0, 0, 1, 1],
            shade: XJ
          }),
          rJ = new Uint8ClampedArray(ZJ * ZJ * 4),
          vJ = new Uint8Array(ZJ * ZJ),
          mJ = FJ.b;
        for (const [FJ, UJ, eJ, XJ, QJ, EJ] of cJ.boxes) {
          const cJ = xJ(fJ(XJ, QJ, EJ), fJ(XJ, QJ, eJ), fJ(XJ, UJ, EJ), JJ.right, [1 - EJ, 1 - QJ, 1 - eJ, 1 - UJ], mJ.right),
            AJ = xJ(fJ(FJ, QJ, EJ), fJ(XJ, QJ, EJ), fJ(FJ, UJ, EJ), JJ.left, [FJ, 1 - QJ, XJ, 1 - UJ], mJ.left),
            qJ = xJ(fJ(FJ, QJ, eJ), fJ(XJ, QJ, eJ), fJ(FJ, QJ, EJ), JJ.top, [FJ, eJ, XJ, EJ], mJ.top);
          for (const JJ of [cJ, AJ, qJ]) hJ(rJ, vJ, ZJ, JJ)
        }
        return (0, FJ.e)(rJ, ZJ, AJ, (JJ => 1 === vJ[JJ])), rJ
      }({
        top: GJ,
        left: fJ,
        right: xJ
      }, function(JJ) {
        return "SlabBlock" === JJ ? qJ : "StairsBlock" === JJ ? jJ : AJ
      }(nJ), cJ, ZJ), vJ = document.createElement("canvas");
      vJ.width = cJ, vJ.height = cJ;
      const mJ = vJ.getContext("2d");
      if (!mJ) throw new Error("Failed to get 2D context");
      return mJ.putImageData(new ImageData(rJ, cJ, cJ), 0, 0), vJ
    }

    function KJ(JJ) {
      return rJ(fJ, JJ, (async () => {
        const cJ = await (0, DJ.i)(JJ),
          ZJ = document.createElement("canvas");
        ZJ.width = cJ.width, ZJ.height = cJ.height;
        const FJ = ZJ.getContext("2d");
        if (!FJ) throw new Error("Failed to get 2D context");
        return FJ.drawImage(cJ, 0, 0), {
          width: cJ.width,
          height: cJ.height,
          pixels: FJ.getImageData(0, 0, cJ.width, cJ.height).data
        }
      }))
    }
  },
  35508: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => yJ,
      f: () => SJ,
      i: () => rJ
    });
    var FJ = ZJ(105),
      UJ = ZJ(80);
    const eJ = new(ZJ(35511).b)(new URL(ZJ.p + ZJ.u(3), ZJ.b), {
      name: "blockIconWorker",
      type: "module"
    });
    var XJ = ZJ(2538);
    const AJ = 1e4,
      qJ = 3e4;
    let jJ = null,
      YJ = null,
      hJ = null,
      DJ = !1,
      sJ = 0;
    const nJ = new Map;
    let GJ = null;
    const fJ = new Map,
      xJ = new Map;

    function rJ(JJ) {
      return new Promise(((cJ, ZJ) => {
        const FJ = new Image;
        FJ.crossOrigin = "anonymous", FJ.onload = () => {
          cJ(FJ)
        }, FJ.onerror = () => {
          ZJ(new Error(`A block icon's texture did not load: ${JJ.slice(0,100)}`))
        }, FJ.src = JJ
      }))
    }

    function vJ(JJ) {
      var cJ, ZJ;
      DJ || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${JJ}`), DJ = !0, null === (cJ = jJ) || void 0 === cJ || cJ.terminate(), jJ = null, YJ = null, fJ.clear(), xJ.clear();
      for (const FJ of nJ.values()) FJ(null);
      nJ.clear(), null === (ZJ = GJ) || void 0 === ZJ || ZJ()
    }

    function mJ() {
      return hJ ??= async function() {
        if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
        if ("page" === FJ.d.ios_icon_worker_v1 && (0, UJ.isWebKit)()) return;
        try {
          jJ = await async function() {
            return await eJ.ready(), eJ.start()
          }()
        } catch (AJ) {
          return void vJ(`did not start (${String(AJ)})`)
        }
        let JJ = () => {};
        const cJ = new Promise((cJ => {
          JJ = cJ
        }));
        jJ.onmessage = cJ => {
          let {
            data: ZJ
          } = cJ;
          if ("started" === ZJ.type) YJ = jJ, JJ();
          else if ("failed" === ZJ.type) vJ(`failed a draw (${ZJ.message})`);
          else {
            var FJ, UJ;
            null === (FJ = nJ.get(ZJ.id)) || void 0 === FJ || FJ(ZJ.url), nJ.delete(ZJ.id), null === (UJ = GJ) || void 0 === UJ || UJ()
          }
        }, jJ.onerror = cJ => {
          cJ.preventDefault(), vJ(`stopped (${cJ.message||"its script did not load or run"})`), JJ()
        };
        const ZJ = `did not start in ${qJ/1e3} s`;
        await (0, XJ.k)(cJ, qJ, ZJ).catch((() => {
          vJ(ZJ)
        }))
      }(), hJ
    }

    function QJ() {
      if (null !== GJ || 0 === nJ.size) return;
      const JJ = new Promise((JJ => {
          GJ = JJ
        })),
        cJ = `did not answer in ${AJ/1e3} s`;
      (0, XJ.k)(JJ, AJ, cJ).then((() => {
        GJ = null, QJ()
      }), (() => {
        GJ = null, vJ(cJ)
      }))
    }

    function EJ(JJ, cJ) {
      let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      JJ.postMessage(cJ, ZJ)
    }

    function VJ(JJ, cJ, ZJ, FJ) {
      let UJ = cJ.get(ZJ);
      return void 0 === UJ && (UJ = FJ().then((async cJ => {
        let {
          image: ZJ,
          request: FJ
        } = cJ;
        try {
          const cJ = await createImageBitmap(ZJ);
          EJ(JJ, FJ(cJ), [cJ])
        } catch (UJ) {
          vJ(`could not take an image (${String(UJ)})`)
        }
      })), UJ.catch((() => {
        cJ.get(ZJ) === UJ && cJ.delete(ZJ)
      })), cJ.set(ZJ, UJ)), UJ
    }
    async function KJ(JJ, cJ) {
      mJ();
      const ZJ = YJ;
      if (null === ZJ) return null;
      if (await JJ(ZJ), YJ !== ZJ) return null;
      const FJ = ++sJ;
      return new Promise((JJ => {
        nJ.set(FJ, JJ), EJ(ZJ, cJ(FJ)), QJ()
      }))
    }

    function yJ(JJ, cJ, ZJ) {
      return KJ((cJ => Promise.all([JJ.top, JJ.left, JJ.right].map((JJ => function(JJ, cJ) {
        return VJ(JJ, fJ, cJ, (async () => ({
          image: await rJ(cJ),
          request: JJ => ({
            type: "texture",
            url: cJ,
            bitmap: JJ
          })
        })))
      }(cJ, JJ))))), (FJ => ({
        type: "draw",
        id: FJ,
        ...JJ,
        size: cJ,
        outlineWidth: ZJ
      })))
    }

    function SJ(JJ, cJ, ZJ, FJ) {
      return KJ((ZJ => function(JJ, cJ, ZJ) {
        return VJ(JJ, xJ, cJ, (async () => {
          const {
            texture: JJ,
            ...FJ
          } = await ZJ();
          return {
            image: await rJ(JJ),
            request: JJ => ({
              type: "model",
              name: cJ,
              bitmap: JJ,
              geometry: FJ
            })
          }
        }))
      }(ZJ, JJ, cJ)), (cJ => ({
        type: "drawModel",
        id: cJ,
        name: JJ,
        size: ZJ,
        outlineWidth: FJ
      })))
    }
  },
  35503: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => eJ,
      e: () => AJ,
      h: () => XJ
    });
    const FJ = 1 / 32,
      UJ = [15, 15, 15],
      eJ = {
        top: 1,
        left: .85,
        right: .7
      };

    function XJ(JJ, cJ, ZJ, UJ) {
      const {
        vertices: eJ,
        uvs: XJ,
        indices: qJ,
        shades: jJ
      } = JJ, YJ = ZJ * FJ, hJ = ZJ - 2 * YJ, DJ = new Float32Array(eJ.length);
      for (let FJ = 0; FJ < eJ.length; FJ += 3) DJ[FJ] = YJ + eJ[FJ] * hJ, DJ[FJ + 1] = YJ + eJ[FJ + 1] * hJ, DJ[FJ + 2] = eJ[FJ + 2];
      const sJ = new Float32Array(ZJ * ZJ).fill(-1 / 0),
        nJ = new Uint8ClampedArray(ZJ * ZJ * 4),
        GJ = 255 * JJ.alphaCutoff;
      for (let FJ = 0; FJ < qJ.length; FJ += 3) {
        const [JJ, UJ, eJ] = [qJ[FJ], qJ[FJ + 1], qJ[FJ + 2]], [AJ, YJ, hJ] = [3 * JJ, 3 * UJ, 3 * eJ], [fJ, xJ, rJ, vJ, mJ, QJ] = [DJ[AJ], DJ[AJ + 1], DJ[YJ], DJ[YJ + 1], DJ[hJ], DJ[hJ + 1]], EJ = (rJ - fJ) * (QJ - xJ) - (mJ - fJ) * (vJ - xJ);
        if (Math.abs(EJ) < 1e-9) continue;
        const VJ = jJ[FJ / 3],
          [KJ, yJ, SJ, IJ, MJ, bJ] = [XJ[2 * JJ], XJ[2 * JJ + 1], XJ[2 * UJ], XJ[2 * UJ + 1], XJ[2 * eJ], XJ[2 * eJ + 1]],
          wJ = Math.max(0, Math.floor(Math.min(fJ, rJ, mJ))),
          WJ = Math.min(ZJ - 1, Math.ceil(Math.max(fJ, rJ, mJ))),
          gJ = Math.max(0, Math.floor(Math.min(xJ, vJ, QJ))),
          HJ = Math.min(ZJ - 1, Math.ceil(Math.max(xJ, vJ, QJ)));
        for (let FJ = gJ; FJ <= HJ; FJ++)
          for (let JJ = wJ; JJ <= WJ; JJ++) {
            const [UJ, eJ] = [JJ + .5, FJ + .5], XJ = ((UJ - fJ) * (QJ - xJ) - (mJ - fJ) * (eJ - xJ)) / EJ, qJ = ((rJ - fJ) * (eJ - xJ) - (UJ - fJ) * (vJ - xJ)) / EJ, jJ = 1 - XJ - qJ;
            if (jJ < 0 || XJ < 0 || qJ < 0) continue;
            const wJ = jJ * DJ[AJ + 2] + XJ * DJ[YJ + 2] + qJ * DJ[hJ + 2],
              WJ = FJ * ZJ + JJ;
            if (wJ <= sJ[WJ]) continue;
            const gJ = Math.max(0, Math.min(cJ.width - 1, Math.floor((jJ * KJ + XJ * SJ + qJ * MJ) * cJ.width))),
              HJ = 4 * (Math.max(0, Math.min(cJ.height - 1, Math.floor((jJ * yJ + XJ * IJ + qJ * bJ) * cJ.height))) * cJ.width + gJ);
            cJ.pixels[HJ + 3] < GJ || (sJ[WJ] = wJ, nJ[4 * WJ] = cJ.pixels[HJ] * VJ, nJ[4 * WJ + 1] = cJ.pixels[HJ + 1] * VJ, nJ[4 * WJ + 2] = cJ.pixels[HJ + 2] * VJ, nJ[4 * WJ + 3] = 255)
          }
      }
      return AJ(nJ, ZJ, UJ), nJ
    }

    function AJ(JJ, cJ, ZJ) {
      let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : cJ => 0 !== JJ[4 * cJ + 3];
      const eJ = (JJ, ZJ) => JJ < 0 || ZJ < 0 || JJ >= cJ || ZJ >= cJ || !FJ(ZJ * cJ + JJ),
        XJ = [];
      for (let UJ = 0; UJ < cJ; UJ++)
        for (let JJ = 0; JJ < cJ; JJ++)
          if (!eJ(JJ, UJ)) JJ: for (let FJ = -ZJ; FJ <= ZJ; FJ++) {
            const AJ = ZJ - Math.abs(FJ);
            for (let ZJ = -AJ; ZJ <= AJ; ZJ++)
              if (eJ(JJ + ZJ, UJ + FJ)) {
                XJ.push(UJ * cJ + JJ);
                break JJ
              }
          }
      for (const AJ of XJ) JJ.set(UJ, 4 * AJ), JJ[4 * AJ + 3] = 255
    }
  },
  35511: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => UJ
    });
    const FJ = {
      wait: function(JJ) {
        return new Promise((cJ => {
          setTimeout(cJ, JJ)
        }))
      },
      stallMs: 2e4
    };
    class UJ {
      constructor(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : FJ;
        this.url = JJ, this.options = cJ, this.timing = ZJ, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = JJ
      }
      ready() {
        if (null === this.fetched) {
          const JJ = new AbortController;
          this.fetchAbort = JJ, this.fetched = this.fetchWithRetries(JJ.signal).finally((() => {
            this.fetchAbort === JJ && (this.fetchAbort = null)
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
      async fetchWithRetries(JJ) {
        for (let cJ = 0;; cJ++) {
          const ZJ = new URL(this.url);
          if (cJ > 0 && ZJ.searchParams.set("cache-bust", `${Date.now()}-${cJ}`), await this.fetchWhole(ZJ, JJ)) return void(this.scriptUrl = ZJ);
          if (cJ >= 3 || JJ.aborted) return;
          if (await this.timing.wait(500 * 2 ** cJ), JJ.aborted) return
        }
      }
      async fetchWhole(JJ, cJ) {
        const ZJ = new AbortController;
        let FJ;
        const UJ = () => {
            clearTimeout(FJ), FJ = setTimeout((() => {
              ZJ.abort()
            }), this.timing.stallMs)
          },
          eJ = () => {
            ZJ.abort()
          };
        cJ.addEventListener("abort", eJ, {
          once: !0
        }), UJ();
        try {
          var XJ;
          const cJ = await fetch(JJ, {
            signal: ZJ.signal
          });
          if (!cJ.ok) return !1;
          const FJ = null === (XJ = cJ.body) || void 0 === XJ ? void 0 : XJ.getReader();
          if (!FJ) return !1;
          for (;;) {
            const {
              done: JJ
            } = await FJ.read();
            if (JJ) return !0;
            UJ()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(FJ), cJ.removeEventListener("abort", eJ)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);