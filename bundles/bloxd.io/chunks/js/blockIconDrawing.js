export const id = 2;
export const ids = [2];
export const modules = {
  37543: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      drawBlockIcon: () => UR,
      drawBlockIconUrl: () => WR,
      getDrawnBlockIcon: () => nR,
      resetBlockIconDrawingForTests: () => eR
    });
    var yR = GR(37549);
    const tR = {
        boxes: [
          [0, 0, 0, 1, 1, 1]
        ],
        cropFaces: !1
      },
      uR = {
        boxes: [
          [0, 0, 0, 1, .5, 1]
        ],
        cropFaces: !1
      },
      ZR = {
        boxes: [
          [0, 0, 0, 1, .5, 1],
          [0, .5, 0, .5, 1, 1]
        ],
        cropFaces: !0
      };
    const qR = 1e-6;

    function iR(RR, JR, GR, yR) {
      let {
        origin: tR,
        across: uR,
        down: ZR,
        texture: iR,
        rect: [fR, VR, KR, wR],
        shade: rR
      } = yR;
      const eR = uR.x * ZR.y - uR.y * ZR.x;
      if (Math.abs(eR) < 1e-9) return;
      const aR = [tR.x, tR.x + uR.x, tR.x + ZR.x, tR.x + uR.x + ZR.x],
        LR = [tR.y, tR.y + uR.y, tR.y + ZR.y, tR.y + uR.y + ZR.y],
        nR = Math.max(0, Math.floor(Math.min(...aR))),
        UR = Math.min(GR - 1, Math.ceil(Math.max(...aR))),
        WR = Math.max(0, Math.floor(Math.min(...LR))),
        AR = Math.min(GR - 1, Math.ceil(Math.max(...LR)));
      for (let CR = WR; CR <= AR; CR++)
        for (let yR = nR; yR <= UR; yR++) {
          const aR = yR + .5 - tR.x,
            LR = CR + .5 - tR.y,
            nR = (aR * ZR.y - LR * ZR.x) / eR,
            UR = (uR.x * LR - uR.y * aR) / eR;
          if (nR < -qR || nR > 1 + qR || UR < -qR || UR > 1 + qR) continue;
          const WR = CR * GR + yR;
          JR[WR] = 1;
          const AR = fR + Math.min(Math.max(nR, 0), 1) * (KR - fR),
            XR = VR + Math.min(Math.max(UR, 0), 1) * (wR - VR),
            MR = Math.min(iR.width - 1, Math.floor(AR * iR.width)),
            BR = 4 * (Math.min(iR.height - 1, Math.floor(XR * iR.height)) * iR.width + MR),
            lR = iR.pixels[BR + 3] / 255;
          if (0 === lR) continue;
          const pR = 4 * WR,
            gR = RR[pR + 3] / 255 * (1 - lR),
            bR = lR + gR;
          for (let JR = 0; JR < 3; JR++) RR[pR + JR] = (iR.pixels[BR + JR] * rR * lR + RR[pR + JR] * gR) / bR;
          RR[pR + 3] = 255 * bR
        }
    }
    var fR = GR(37558);
    const VR = new Map,
      KR = new Map,
      wR = new Map,
      rR = new Map;

    function eR() {
      VR.clear(), KR.clear(), wR.clear(), rR.clear()
    }

    function aR(RR, JR, GR) {
      return `${JR}|${GR}|${RR}`
    }

    function LR(RR, JR, GR) {
      let yR = RR.get(JR);
      return void 0 === yR && (yR = GR().catch((GR => {
        throw RR.delete(JR), GR
      })), RR.set(JR, yR)), yR
    }

    function nR(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return KR.get(aR(RR, JR, GR))
    }

    function UR(RR, JR, GR, yR) {
      const tR = aR(RR, JR, GR);
      return LR(VR, tR, (async () => {
        const uR = await AR(yR(RR), JR, GR);
        return KR.set(tR, uR), uR
      }))
    }

    function WR(RR, JR, GR, yR) {
      return LR(wR, aR(RR, JR, GR), (async () => {
        var tR;
        const uR = yR(RR);
        return null !== (tR = await (0, fR.e)(uR, JR, GR)) && void 0 !== tR ? tR : (await AR(uR, JR, GR)).toDataURL()
      }))
    }
    async function AR(RR, JR, GR) {
      let {
        top: qR,
        left: fR,
        right: VR,
        itemType: KR
      } = RR;
      const [wR, rR, eR] = await Promise.all([CR(qR), CR(fR), CR(VR)]), aR = function(RR, JR, GR, tR) {
        const uR = (0, yR.i)(GR, tR),
          ZR = uR * yR.c.across,
          qR = uR * yR.c.down,
          fR = uR * yR.c.up,
          VR = Math.max(...JR.boxes.map((RR => RR[4]))),
          KR = GR / 2,
          wR = qR + (GR - qR - qR - VR * fR) / 2,
          rR = (RR, JR, GR) => ({
            x: KR + (RR - GR) * ZR,
            y: wR - qR + (RR + GR) * qR + (VR - JR) * fR
          }),
          eR = (RR, GR, yR, tR, uR, ZR) => ({
            origin: RR,
            across: {
              x: GR.x - RR.x,
              y: GR.y - RR.y
            },
            down: {
              x: yR.x - RR.x,
              y: yR.y - RR.y
            },
            texture: tR,
            rect: JR.cropFaces ? uR : [0, 0, 1, 1],
            shade: ZR
          }),
          aR = new Uint8ClampedArray(GR * GR * 4),
          LR = new Uint8Array(GR * GR),
          nR = yR.g;
        for (const [yR, UR, WR, AR, CR, XR] of JR.boxes) {
          const JR = eR(rR(AR, CR, XR), rR(AR, CR, WR), rR(AR, UR, XR), RR.right, [1 - XR, 1 - CR, 1 - WR, 1 - UR], nR.right),
            tR = eR(rR(yR, CR, XR), rR(AR, CR, XR), rR(yR, UR, XR), RR.left, [yR, 1 - CR, AR, 1 - UR], nR.left),
            uR = eR(rR(yR, CR, WR), rR(AR, CR, WR), rR(yR, CR, XR), RR.top, [yR, WR, AR, XR], nR.top);
          for (const RR of [JR, tR, uR]) iR(aR, LR, GR, RR)
        }
        return (0, yR.m)(aR, GR, tR, (RR => 1 === LR[RR])), aR
      }({
        top: wR,
        left: rR,
        right: eR
      }, function(RR) {
        return "SlabBlock" === RR ? uR : "StairsBlock" === RR ? ZR : tR
      }(KR), JR, GR), LR = document.createElement("canvas");
      LR.width = JR, LR.height = JR;
      const nR = LR.getContext("2d");
      if (!nR) throw new Error("Failed to get 2D context");
      return nR.putImageData(new ImageData(aR, JR, JR), 0, 0), LR
    }

    function CR(RR) {
      return LR(rR, RR, (async () => {
        const JR = await (0, fR.o)(RR),
          GR = document.createElement("canvas");
        GR.width = JR.width, GR.height = JR.height;
        const yR = GR.getContext("2d");
        if (!yR) throw new Error("Failed to get 2D context");
        return yR.drawImage(JR, 0, 0), {
          width: JR.width,
          height: JR.height,
          pixels: yR.getImageData(0, 0, JR.width, JR.height).data
        }
      }))
    }
  },
  37558: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => gR,
      i: () => bR,
      m: () => CR,
      o: () => WR,
      r: () => XR
    });
    var yR = GR(289),
      tR = GR(103);
    const uR = new(GR(37561).b)(new URL(GR.p + GR.u(3), GR.b), {
      name: "blockIconWorker",
      type: "module"
    });
    var ZR = GR(1825),
      qR = GR(2366);
    const iR = 1e4,
      fR = 3e4;
    let VR = null,
      KR = null,
      wR = null,
      rR = !1,
      eR = 0;
    const aR = new Map;
    let LR = null;
    const nR = new Map,
      UR = new Map;

    function WR(RR) {
      const JR = new Promise(((JR, GR) => {
        const yR = new Image;
        yR.crossOrigin = "anonymous", yR.fetchPriority = "high", yR.onload = () => {
          JR(yR)
        }, yR.onerror = () => {
          GR(new Error(`A block icon's texture did not load: ${RR.slice(0,100)}`))
        }, yR.src = RR
      }));
      return (0, qR.h)(JR)
    }

    function AR(RR) {
      var JR, GR;
      rR || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${RR}`), rR = !0, null === (JR = VR) || void 0 === JR || JR.terminate(), VR = null, KR = null, nR.clear(), UR.clear();
      for (const yR of aR.values()) yR(null);
      aR.clear(), null === (GR = LR) || void 0 === GR || GR()
    }

    function CR() {
      return null !== KR
    }

    function XR() {
      return wR ??= async function() {
        if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
        if ("page" === yR.c.ios_icon_worker_v1 && (0, tR.isWebKit)()) return;
        try {
          VR = await async function() {
            return await uR.ready(), uR.start()
          }()
        } catch (qR) {
          return void AR(`did not start (${String(qR)})`)
        }
        let RR = () => {};
        const JR = new Promise((JR => {
          RR = JR
        }));
        VR.onmessage = JR => {
          let {
            data: GR
          } = JR;
          if ("started" === GR.type) KR = VR, RR();
          else if ("failed" === GR.type) AR(`failed a draw (${GR.message})`);
          else {
            var yR, tR;
            null === (yR = aR.get(GR.id)) || void 0 === yR || yR(GR.url), aR.delete(GR.id), null === (tR = LR) || void 0 === tR || tR()
          }
        }, VR.onerror = JR => {
          JR.preventDefault(), AR(`stopped (${JR.message||"its script did not load or run"})`), RR()
        };
        const GR = `did not start in ${fR/1e3} s`;
        await (0, ZR.k)(JR, fR, GR).catch((() => {
          AR(GR)
        }))
      }(), wR
    }

    function MR() {
      if (null !== LR || 0 === aR.size) return;
      const RR = new Promise((RR => {
          LR = RR
        })),
        JR = `did not answer in ${iR/1e3} s`;
      (0, ZR.k)(RR, iR, JR).then((() => {
        LR = null, MR()
      }), (() => {
        LR = null, AR(JR)
      }))
    }

    function BR(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      RR.postMessage(JR, GR)
    }

    function lR(RR, JR, GR, yR) {
      let tR = JR.get(GR);
      return void 0 === tR && (tR = yR().then((async JR => {
        let {
          image: GR,
          request: yR
        } = JR;
        try {
          const JR = await createImageBitmap(GR);
          BR(RR, yR(JR), [JR])
        } catch (tR) {
          AR(`could not take an image (${String(tR)})`)
        }
      })), tR.catch((() => {
        JR.get(GR) === tR && JR.delete(GR)
      })), JR.set(GR, tR)), tR
    }
    async function pR(RR, JR) {
      XR();
      const GR = KR;
      if (null === GR) return null;
      if (await RR(GR), KR !== GR) return null;
      const yR = ++eR;
      return new Promise((RR => {
        aR.set(yR, RR), BR(GR, JR(yR)), MR()
      }))
    }

    function gR(RR, JR, GR) {
      return pR((JR => Promise.all([RR.top, RR.left, RR.right].map((RR => function(RR, JR) {
        return lR(RR, nR, JR, (async () => ({
          image: await WR(JR),
          request: RR => ({
            type: "texture",
            url: JR,
            bitmap: RR
          })
        })))
      }(JR, RR))))), (yR => ({
        type: "draw",
        id: yR,
        ...RR,
        size: JR,
        outlineWidth: GR
      })))
    }

    function bR(RR, JR, GR, yR) {
      return pR((GR => function(RR, JR, GR) {
        return lR(RR, UR, JR, (async () => {
          const {
            texture: RR,
            ...yR
          } = await GR();
          return {
            image: await WR(RR),
            request: RR => ({
              type: "model",
              name: JR,
              bitmap: RR,
              geometry: yR
            })
          }
        }))
      }(GR, RR, JR)), (JR => ({
        type: "drawModel",
        id: JR,
        name: RR,
        size: GR,
        outlineWidth: yR
      })))
    }
  },
  37549: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => yR,
      g: () => iR,
      i: () => ZR,
      m: () => wR,
      n: () => fR
    });
    const yR = {
        across: Math.SQRT1_2,
        down: Math.SQRT1_2 / 2,
        up: Math.sqrt(3) / 2
      },
      tR = .6,
      uR = {
        width: 2 * yR.across,
        height: 2 * yR.down + yR.up
      };

    function ZR(RR, JR) {
      const GR = JR > 0 ? JR + 1 : 0,
        ZR = RR * tR - JR / yR.across;
      return Math.max(0, Math.min(ZR, (RR - 2 * GR) / uR.height))
    }
    const qR = [15, 15, 15],
      iR = {
        top: 1,
        left: .85,
        right: .7
      };

    function fR(RR, JR, GR, yR) {
      const {
        vertices: tR,
        uvs: qR,
        indices: iR,
        shades: fR
      } = RR, VR = function(RR, JR) {
        const GR = ZR(RR, JR),
          yR = uR.width * GR,
          tR = uR.height * GR;
        return {
          left: (RR - yR) / 2,
          top: (RR - tR) / 2,
          width: yR,
          height: tR
        }
      }(GR, yR), KR = new Float32Array(tR.length);
      for (let uR = 0; uR < tR.length; uR += 3) KR[uR] = VR.left + tR[uR] * VR.width, KR[uR + 1] = VR.top + tR[uR + 1] * VR.height, KR[uR + 2] = tR[uR + 2];
      const rR = new Float32Array(GR * GR).fill(-1 / 0),
        eR = new Uint8ClampedArray(GR * GR * 4),
        aR = 255 * RR.alphaCutoff;
      for (let uR = 0; uR < iR.length; uR += 3) {
        const [RR, yR, tR] = [iR[uR], iR[uR + 1], iR[uR + 2]], [ZR, VR, wR] = [3 * RR, 3 * yR, 3 * tR], [LR, nR, UR, WR, AR, CR] = [KR[ZR], KR[ZR + 1], KR[VR], KR[VR + 1], KR[wR], KR[wR + 1]], XR = (UR - LR) * (CR - nR) - (AR - LR) * (WR - nR);
        if (Math.abs(XR) < 1e-9) continue;
        const MR = fR[uR / 3],
          [BR, lR, pR, gR, bR, vR] = [qR[2 * RR], qR[2 * RR + 1], qR[2 * yR], qR[2 * yR + 1], qR[2 * tR], qR[2 * tR + 1]],
          OR = Math.max(0, Math.floor(Math.min(LR, UR, AR))),
          xR = Math.min(GR - 1, Math.ceil(Math.max(LR, UR, AR))),
          NR = Math.max(0, Math.floor(Math.min(nR, WR, CR))),
          DR = Math.min(GR - 1, Math.ceil(Math.max(nR, WR, CR)));
        for (let uR = NR; uR <= DR; uR++)
          for (let RR = OR; RR <= xR; RR++) {
            const [yR, tR] = [RR + .5, uR + .5], qR = ((yR - LR) * (CR - nR) - (AR - LR) * (tR - nR)) / XR, iR = ((UR - LR) * (tR - nR) - (yR - LR) * (WR - nR)) / XR, fR = 1 - qR - iR;
            if (fR < 0 || qR < 0 || iR < 0) continue;
            const OR = fR * KR[ZR + 2] + qR * KR[VR + 2] + iR * KR[wR + 2],
              xR = uR * GR + RR;
            if (OR <= rR[xR]) continue;
            const NR = Math.max(0, Math.min(JR.width - 1, Math.floor((fR * BR + qR * pR + iR * bR) * JR.width))),
              DR = 4 * (Math.max(0, Math.min(JR.height - 1, Math.floor((fR * lR + qR * gR + iR * vR) * JR.height))) * JR.width + NR);
            JR.pixels[DR + 3] < aR || (rR[xR] = OR, eR[4 * xR] = JR.pixels[DR] * MR, eR[4 * xR + 1] = JR.pixels[DR + 1] * MR, eR[4 * xR + 2] = JR.pixels[DR + 2] * MR, eR[4 * xR + 3] = 255)
          }
      }
      return wR(eR, GR, yR), eR
    }
    let VR = NaN,
      KR = new Int32Array(0);

    function wR(RR, JR, GR) {
      let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : JR => 0 !== RR[4 * JR + 3];
      const tR = new Uint8Array(JR * JR);
      for (let qR = 0; qR < JR * JR; qR++) tR[qR] = yR(qR) ? 1 : 0;
      const uR = (RR, GR) => RR >= 0 && GR >= 0 && RR < JR && GR < JR && 0 === tR[GR * JR + RR],
        ZR = new Float32Array(JR * JR).fill(1 / 0),
        iR = function(RR) {
          if (RR !== VR) {
            const JR = Math.ceil(RR + 1),
              GR = [];
            for (let yR = -JR; yR <= JR; yR++)
              for (let tR = -JR; tR <= JR; tR++) {
                const JR = tR * tR + yR * yR;
                JR > 0 && JR < (RR + 1) ** 2 && GR.push(tR, yR, JR)
              }
            VR = RR, KR = Int32Array.from(GR)
          }
          return KR
        }(GR);
      for (let qR = 0; qR < JR; qR++)
        for (let RR = 0; RR < JR; RR++) {
          if (1 === tR[qR * JR + RR] && (uR(RR - 1, qR) || uR(RR + 1, qR) || uR(RR, qR - 1) || uR(RR, qR + 1)))
            for (let GR = 0; GR < iR.length; GR += 3) {
              const yR = RR + iR[GR],
                tR = qR + iR[GR + 1];
              if (yR >= 0 && tR >= 0 && yR < JR && tR < JR) {
                const RR = tR * JR + yR;
                ZR[RR] = Math.min(ZR[RR], iR[GR + 2])
              }
            }
        }
      for (let fR = 0; fR < JR * JR; fR++) 1 !== tR[fR] && ZR[fR] !== 1 / 0 && (RR.set(qR, 4 * fR), RR[4 * fR + 3] = Math.round(255 * Math.min(1, GR + 1 - Math.sqrt(ZR[fR]))))
    }
  },
  37561: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => tR
    });
    const yR = {
      wait: function(RR) {
        return new Promise((JR => {
          setTimeout(JR, RR)
        }))
      },
      stallMs: 2e4
    };
    class tR {
      constructor(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : yR;
        this.url = RR, this.options = JR, this.timing = GR, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = RR
      }
      ready() {
        if (null === this.fetched) {
          const RR = new AbortController;
          this.fetchAbort = RR, this.fetched = this.fetchWithRetries(RR.signal).then((JR => (this.fetchAbort === RR && (this.fetchAbort = null), JR)))
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
      async fetchWithRetries(RR) {
        for (let JR = 0;; JR++) {
          const GR = new URL(this.url);
          if (JR > 0 && GR.searchParams.set("cache-bust", `${Date.now()}-${JR}`), await this.fetchWhole(GR, RR)) return this.scriptUrl = GR, !0;
          if (JR >= 3 || RR.aborted) return !1;
          if (await this.timing.wait(500 * 2 ** JR), RR.aborted) return !1
        }
      }
      async fetchWhole(RR, JR) {
        const GR = new AbortController;
        let yR;
        const tR = () => {
            clearTimeout(yR), yR = setTimeout((() => {
              GR.abort()
            }), this.timing.stallMs)
          },
          uR = () => {
            GR.abort()
          };
        JR.addEventListener("abort", uR, {
          once: !0
        }), tR();
        try {
          var ZR;
          const JR = await fetch(RR, {
            signal: GR.signal
          });
          if (!JR.ok) return !1;
          const yR = null === (ZR = JR.body) || void 0 === ZR ? void 0 : ZR.getReader();
          if (!yR) return !1;
          for (;;) {
            const {
              done: RR
            } = await yR.read();
            if (RR) return !0;
            tR()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(yR), JR.removeEventListener("abort", uR)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);