export const id = 2;
export const ids = [2];
export const modules = {
  36033: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      drawBlockIcon: () => pQ,
      drawBlockIconUrl: () => cQ,
      getDrawnBlockIcon: () => GQ
    });
    var LQ = wQ(36040);
    const qQ = Math.SQRT1_2,
      oQ = Math.sqrt(3) / 2,
      DQ = .5,
      kQ = {
        boxes: [
          [0, 0, 0, 1, 1, 1]
        ],
        cropFaces: !1
      },
      vQ = {
        boxes: [
          [0, 0, 0, 1, .5, 1]
        ],
        cropFaces: !1
      },
      mQ = {
        boxes: [
          [0, 0, 0, 1, .5, 1],
          [0, .5, 0, .5, 1, 1]
        ],
        cropFaces: !0
      };
    const uQ = 1e-6;

    function HQ(QQ, FQ, wQ, LQ) {
      let {
        origin: qQ,
        across: oQ,
        down: DQ,
        texture: kQ,
        rect: [vQ, mQ, HQ, bQ],
        shade: YQ
      } = LQ;
      const xQ = oQ.x * DQ.y - oQ.y * DQ.x;
      if (Math.abs(xQ) < 1e-9) return;
      const AQ = [qQ.x, qQ.x + oQ.x, qQ.x + DQ.x, qQ.x + oQ.x + DQ.x],
        tQ = [qQ.y, qQ.y + oQ.y, qQ.y + DQ.y, qQ.y + oQ.y + DQ.y],
        eQ = Math.max(0, Math.floor(Math.min(...AQ))),
        MQ = Math.min(wQ - 1, Math.ceil(Math.max(...AQ))),
        GQ = Math.max(0, Math.floor(Math.min(...tQ))),
        pQ = Math.min(wQ - 1, Math.ceil(Math.max(...tQ)));
      for (let cQ = GQ; cQ <= pQ; cQ++)
        for (let LQ = eQ; LQ <= MQ; LQ++) {
          const AQ = LQ + .5 - qQ.x,
            tQ = cQ + .5 - qQ.y,
            eQ = (AQ * DQ.y - tQ * DQ.x) / xQ,
            MQ = (oQ.x * tQ - oQ.y * AQ) / xQ;
          if (eQ < -uQ || eQ > 1 + uQ || MQ < -uQ || MQ > 1 + uQ) continue;
          const GQ = cQ * wQ + LQ;
          FQ[GQ] = 1;
          const pQ = vQ + Math.min(Math.max(eQ, 0), 1) * (HQ - vQ),
            CQ = mQ + Math.min(Math.max(MQ, 0), 1) * (bQ - mQ),
            SQ = Math.min(kQ.width - 1, Math.floor(pQ * kQ.width)),
            iQ = 4 * (Math.min(kQ.height - 1, Math.floor(CQ * kQ.height)) * kQ.width + SQ),
            WQ = kQ.pixels[iQ + 3] / 255;
          if (0 === WQ) continue;
          const RQ = 4 * GQ,
            OQ = QQ[RQ + 3] / 255 * (1 - WQ),
            sQ = WQ + OQ;
          for (let FQ = 0; FQ < 3; FQ++) QQ[RQ + FQ] = (kQ.pixels[iQ + FQ] * YQ * WQ + QQ[RQ + FQ] * OQ) / sQ;
          QQ[RQ + 3] = 255 * sQ
        }
    }
    var bQ = wQ(36047);
    const YQ = new Map,
      xQ = new Map,
      AQ = new Map,
      tQ = new Map;

    function eQ(QQ, FQ, wQ) {
      return `${FQ}|${wQ}|${QQ}`
    }

    function MQ(QQ, FQ, wQ) {
      let LQ = QQ.get(FQ);
      return void 0 === LQ && (LQ = wQ().catch((wQ => {
        throw QQ.delete(FQ), wQ
      })), QQ.set(FQ, LQ)), LQ
    }

    function GQ(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return xQ.get(eQ(QQ, FQ, wQ))
    }

    function pQ(QQ, FQ, wQ, LQ) {
      const qQ = eQ(QQ, FQ, wQ);
      return MQ(YQ, qQ, (async () => {
        const oQ = await SQ(LQ(QQ), FQ, CQ(wQ));
        return xQ.set(qQ, oQ), oQ
      }))
    }

    function cQ(QQ, FQ, wQ, LQ) {
      return MQ(AQ, eQ(QQ, FQ, wQ), (async () => {
        var qQ;
        const oQ = LQ(QQ),
          DQ = CQ(wQ);
        return null !== (qQ = await (0, bQ.c)(oQ, FQ, DQ)) && void 0 !== qQ ? qQ : (await SQ(oQ, FQ, DQ)).toDataURL()
      }))
    }

    function CQ(QQ) {
      return Math.max(1, Math.round(QQ))
    }
    async function SQ(QQ, FQ, wQ) {
      let {
        top: uQ,
        left: bQ,
        right: YQ,
        itemType: xQ
      } = QQ;
      const [AQ, tQ, eQ] = await Promise.all([iQ(uQ), iQ(bQ), iQ(YQ)]), MQ = function(QQ, FQ, wQ, kQ) {
        const vQ = .6 * wQ,
          mQ = vQ * qQ,
          uQ = vQ * qQ * DQ,
          bQ = vQ * oQ,
          YQ = Math.max(...FQ.boxes.map((QQ => QQ[4]))),
          xQ = mQ / 2 + (wQ - mQ) / 2,
          AQ = uQ + (wQ - uQ - uQ - YQ * bQ) / 2,
          tQ = (QQ, FQ, wQ) => ({
            x: xQ + (QQ - wQ) * mQ,
            y: AQ - uQ + (QQ + wQ) * uQ + (YQ - FQ) * bQ
          }),
          eQ = (QQ, wQ, LQ, qQ, oQ, DQ) => ({
            origin: QQ,
            across: {
              x: wQ.x - QQ.x,
              y: wQ.y - QQ.y
            },
            down: {
              x: LQ.x - QQ.x,
              y: LQ.y - QQ.y
            },
            texture: qQ,
            rect: FQ.cropFaces ? oQ : [0, 0, 1, 1],
            shade: DQ
          }),
          MQ = new Uint8ClampedArray(wQ * wQ * 4),
          GQ = new Uint8Array(wQ * wQ),
          pQ = LQ.e;
        for (const [LQ, qQ, oQ, DQ, cQ, CQ] of FQ.boxes) {
          const FQ = eQ(tQ(DQ, cQ, CQ), tQ(DQ, cQ, oQ), tQ(DQ, qQ, CQ), QQ.right, [1 - CQ, 1 - cQ, 1 - oQ, 1 - qQ], pQ.right),
            kQ = eQ(tQ(LQ, cQ, CQ), tQ(DQ, cQ, CQ), tQ(LQ, qQ, CQ), QQ.left, [LQ, 1 - cQ, DQ, 1 - qQ], pQ.left),
            vQ = eQ(tQ(LQ, cQ, oQ), tQ(DQ, cQ, oQ), tQ(LQ, cQ, CQ), QQ.top, [LQ, oQ, DQ, CQ], pQ.top);
          for (const QQ of [FQ, kQ, vQ]) HQ(MQ, GQ, wQ, QQ)
        }
        return (0, LQ.g)(MQ, wQ, kQ, (QQ => 1 === GQ[QQ])), MQ
      }({
        top: AQ,
        left: tQ,
        right: eQ
      }, function(QQ) {
        return "SlabBlock" === QQ ? vQ : "StairsBlock" === QQ ? mQ : kQ
      }(xQ), FQ, wQ), GQ = document.createElement("canvas");
      GQ.width = FQ, GQ.height = FQ;
      const pQ = GQ.getContext("2d");
      if (!pQ) throw new Error("Failed to get 2D context");
      return pQ.putImageData(new ImageData(MQ, FQ, FQ), 0, 0), GQ
    }

    function iQ(QQ) {
      return MQ(tQ, QQ, (async () => {
        const FQ = await (0, bQ.h)(QQ),
          wQ = document.createElement("canvas");
        wQ.width = FQ.width, wQ.height = FQ.height;
        const LQ = wQ.getContext("2d");
        if (!LQ) throw new Error("Failed to get 2D context");
        return LQ.drawImage(FQ, 0, 0), {
          width: FQ.width,
          height: FQ.height,
          pixels: LQ.getImageData(0, 0, FQ.width, FQ.height).data
        }
      }))
    }
  },
  36047: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => RQ,
      f: () => OQ,
      h: () => GQ
    });
    var LQ = wQ(291),
      qQ = wQ(96);
    const oQ = new(wQ(36050).c)(new URL(wQ.p + wQ.u(3), wQ.b), {
      name: "blockIconWorker",
      type: "module"
    });
    var DQ = wQ(1772),
      kQ = wQ(3080);
    const vQ = 1e4,
      mQ = 3e4;
    let uQ = null,
      HQ = null,
      bQ = null,
      YQ = !1,
      xQ = 0;
    const AQ = new Map;
    let tQ = null;
    const eQ = new Map,
      MQ = new Map;

    function GQ(QQ) {
      const FQ = new Promise(((FQ, wQ) => {
        const LQ = new Image;
        LQ.crossOrigin = "anonymous", LQ.fetchPriority = "high", LQ.onload = () => {
          FQ(LQ)
        }, LQ.onerror = () => {
          wQ(new Error(`A block icon's texture did not load: ${QQ.slice(0,100)}`))
        }, LQ.src = QQ
      }));
      return (0, kQ.f)(FQ)
    }

    function pQ(QQ) {
      var FQ, wQ;
      YQ || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${QQ}`), YQ = !0, null === (FQ = uQ) || void 0 === FQ || FQ.terminate(), uQ = null, HQ = null, eQ.clear(), MQ.clear();
      for (const LQ of AQ.values()) LQ(null);
      AQ.clear(), null === (wQ = tQ) || void 0 === wQ || wQ()
    }

    function cQ() {
      return bQ ??= async function() {
        if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
        if ("page" === LQ.e.ios_icon_worker_v1 && (0, qQ.isWebKit)()) return;
        try {
          uQ = await async function() {
            return await oQ.ready(), oQ.start()
          }()
        } catch (kQ) {
          return void pQ(`did not start (${String(kQ)})`)
        }
        let QQ = () => {};
        const FQ = new Promise((FQ => {
          QQ = FQ
        }));
        uQ.onmessage = FQ => {
          let {
            data: wQ
          } = FQ;
          if ("started" === wQ.type) HQ = uQ, QQ();
          else if ("failed" === wQ.type) pQ(`failed a draw (${wQ.message})`);
          else {
            var LQ, qQ;
            null === (LQ = AQ.get(wQ.id)) || void 0 === LQ || LQ(wQ.url), AQ.delete(wQ.id), null === (qQ = tQ) || void 0 === qQ || qQ()
          }
        }, uQ.onerror = FQ => {
          FQ.preventDefault(), pQ(`stopped (${FQ.message||"its script did not load or run"})`), QQ()
        };
        const wQ = `did not start in ${mQ/1e3} s`;
        await (0, DQ.l)(FQ, mQ, wQ).catch((() => {
          pQ(wQ)
        }))
      }(), bQ
    }

    function CQ() {
      if (null !== tQ || 0 === AQ.size) return;
      const QQ = new Promise((QQ => {
          tQ = QQ
        })),
        FQ = `did not answer in ${vQ/1e3} s`;
      (0, DQ.l)(QQ, vQ, FQ).then((() => {
        tQ = null, CQ()
      }), (() => {
        tQ = null, pQ(FQ)
      }))
    }

    function SQ(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      QQ.postMessage(FQ, wQ)
    }

    function iQ(QQ, FQ, wQ, LQ) {
      let qQ = FQ.get(wQ);
      return void 0 === qQ && (qQ = LQ().then((async FQ => {
        let {
          image: wQ,
          request: LQ
        } = FQ;
        try {
          const FQ = await createImageBitmap(wQ);
          SQ(QQ, LQ(FQ), [FQ])
        } catch (qQ) {
          pQ(`could not take an image (${String(qQ)})`)
        }
      })), qQ.catch((() => {
        FQ.get(wQ) === qQ && FQ.delete(wQ)
      })), FQ.set(wQ, qQ)), qQ
    }
    async function WQ(QQ, FQ) {
      cQ();
      const wQ = HQ;
      if (null === wQ) return null;
      if (await QQ(wQ), HQ !== wQ) return null;
      const LQ = ++xQ;
      return new Promise((QQ => {
        AQ.set(LQ, QQ), SQ(wQ, FQ(LQ)), CQ()
      }))
    }

    function RQ(QQ, FQ, wQ) {
      return WQ((FQ => Promise.all([QQ.top, QQ.left, QQ.right].map((QQ => function(QQ, FQ) {
        return iQ(QQ, eQ, FQ, (async () => ({
          image: await GQ(FQ),
          request: QQ => ({
            type: "texture",
            url: FQ,
            bitmap: QQ
          })
        })))
      }(FQ, QQ))))), (LQ => ({
        type: "draw",
        id: LQ,
        ...QQ,
        size: FQ,
        outlineWidth: wQ
      })))
    }

    function OQ(QQ, FQ, wQ, LQ) {
      return WQ((wQ => function(QQ, FQ, wQ) {
        return iQ(QQ, MQ, FQ, (async () => {
          const {
            texture: QQ,
            ...LQ
          } = await wQ();
          return {
            image: await GQ(QQ),
            request: QQ => ({
              type: "model",
              name: FQ,
              bitmap: QQ,
              geometry: LQ
            })
          }
        }))
      }(wQ, QQ, FQ)), (FQ => ({
        type: "drawModel",
        id: FQ,
        name: QQ,
        size: wQ,
        outlineWidth: LQ
      })))
    }
  },
  36040: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => oQ,
      g: () => kQ,
      h: () => DQ
    });
    const LQ = 1 / 32,
      qQ = [15, 15, 15],
      oQ = {
        top: 1,
        left: .85,
        right: .7
      };

    function DQ(QQ, FQ, wQ, qQ) {
      const {
        vertices: oQ,
        uvs: DQ,
        indices: vQ,
        shades: mQ
      } = QQ, uQ = wQ * LQ, HQ = wQ - 2 * uQ, bQ = new Float32Array(oQ.length);
      for (let LQ = 0; LQ < oQ.length; LQ += 3) bQ[LQ] = uQ + oQ[LQ] * HQ, bQ[LQ + 1] = uQ + oQ[LQ + 1] * HQ, bQ[LQ + 2] = oQ[LQ + 2];
      const YQ = new Float32Array(wQ * wQ).fill(-1 / 0),
        xQ = new Uint8ClampedArray(wQ * wQ * 4),
        AQ = 255 * QQ.alphaCutoff;
      for (let LQ = 0; LQ < vQ.length; LQ += 3) {
        const [QQ, qQ, oQ] = [vQ[LQ], vQ[LQ + 1], vQ[LQ + 2]], [kQ, uQ, HQ] = [3 * QQ, 3 * qQ, 3 * oQ], [tQ, eQ, MQ, GQ, pQ, cQ] = [bQ[kQ], bQ[kQ + 1], bQ[uQ], bQ[uQ + 1], bQ[HQ], bQ[HQ + 1]], CQ = (MQ - tQ) * (cQ - eQ) - (pQ - tQ) * (GQ - eQ);
        if (Math.abs(CQ) < 1e-9) continue;
        const SQ = mQ[LQ / 3],
          [iQ, WQ, RQ, OQ, sQ, rQ] = [DQ[2 * QQ], DQ[2 * QQ + 1], DQ[2 * qQ], DQ[2 * qQ + 1], DQ[2 * oQ], DQ[2 * oQ + 1]],
          IQ = Math.max(0, Math.floor(Math.min(tQ, MQ, pQ))),
          UQ = Math.min(wQ - 1, Math.ceil(Math.max(tQ, MQ, pQ))),
          NQ = Math.max(0, Math.floor(Math.min(eQ, GQ, cQ))),
          TQ = Math.min(wQ - 1, Math.ceil(Math.max(eQ, GQ, cQ)));
        for (let LQ = NQ; LQ <= TQ; LQ++)
          for (let QQ = IQ; QQ <= UQ; QQ++) {
            const [qQ, oQ] = [QQ + .5, LQ + .5], DQ = ((qQ - tQ) * (cQ - eQ) - (pQ - tQ) * (oQ - eQ)) / CQ, vQ = ((MQ - tQ) * (oQ - eQ) - (qQ - tQ) * (GQ - eQ)) / CQ, mQ = 1 - DQ - vQ;
            if (mQ < 0 || DQ < 0 || vQ < 0) continue;
            const IQ = mQ * bQ[kQ + 2] + DQ * bQ[uQ + 2] + vQ * bQ[HQ + 2],
              UQ = LQ * wQ + QQ;
            if (IQ <= YQ[UQ]) continue;
            const NQ = Math.max(0, Math.min(FQ.width - 1, Math.floor((mQ * iQ + DQ * RQ + vQ * sQ) * FQ.width))),
              TQ = 4 * (Math.max(0, Math.min(FQ.height - 1, Math.floor((mQ * WQ + DQ * OQ + vQ * rQ) * FQ.height))) * FQ.width + NQ);
            FQ.pixels[TQ + 3] < AQ || (YQ[UQ] = IQ, xQ[4 * UQ] = FQ.pixels[TQ] * SQ, xQ[4 * UQ + 1] = FQ.pixels[TQ + 1] * SQ, xQ[4 * UQ + 2] = FQ.pixels[TQ + 2] * SQ, xQ[4 * UQ + 3] = 255)
          }
      }
      return kQ(xQ, wQ, qQ), xQ
    }

    function kQ(QQ, FQ, wQ) {
      let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : FQ => 0 !== QQ[4 * FQ + 3];
      const oQ = (QQ, wQ) => QQ < 0 || wQ < 0 || QQ >= FQ || wQ >= FQ || !LQ(wQ * FQ + QQ),
        DQ = [];
      for (let qQ = 0; qQ < FQ; qQ++)
        for (let QQ = 0; QQ < FQ; QQ++)
          if (!oQ(QQ, qQ)) QQ: for (let LQ = -wQ; LQ <= wQ; LQ++) {
            const kQ = wQ - Math.abs(LQ);
            for (let wQ = -kQ; wQ <= kQ; wQ++)
              if (oQ(QQ + wQ, qQ + LQ)) {
                DQ.push(qQ * FQ + QQ);
                break QQ
              }
          }
      for (const kQ of DQ) QQ.set(qQ, 4 * kQ), QQ[4 * kQ + 3] = 255
    }
  },
  36050: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => qQ
    });
    const LQ = {
      wait: function(QQ) {
        return new Promise((FQ => {
          setTimeout(FQ, QQ)
        }))
      },
      stallMs: 2e4
    };
    class qQ {
      constructor(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : LQ;
        this.url = QQ, this.options = FQ, this.timing = wQ, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = QQ
      }
      ready() {
        if (null === this.fetched) {
          const QQ = new AbortController;
          this.fetchAbort = QQ, this.fetched = this.fetchWithRetries(QQ.signal).finally((() => {
            this.fetchAbort === QQ && (this.fetchAbort = null)
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
      async fetchWithRetries(QQ) {
        for (let FQ = 0;; FQ++) {
          const wQ = new URL(this.url);
          if (FQ > 0 && wQ.searchParams.set("cache-bust", `${Date.now()}-${FQ}`), await this.fetchWhole(wQ, QQ)) return void(this.scriptUrl = wQ);
          if (FQ >= 3 || QQ.aborted) return;
          if (await this.timing.wait(500 * 2 ** FQ), QQ.aborted) return
        }
      }
      async fetchWhole(QQ, FQ) {
        const wQ = new AbortController;
        let LQ;
        const qQ = () => {
            clearTimeout(LQ), LQ = setTimeout((() => {
              wQ.abort()
            }), this.timing.stallMs)
          },
          oQ = () => {
            wQ.abort()
          };
        FQ.addEventListener("abort", oQ, {
          once: !0
        }), qQ();
        try {
          var DQ;
          const FQ = await fetch(QQ, {
            signal: wQ.signal
          });
          if (!FQ.ok) return !1;
          const LQ = null === (DQ = FQ.body) || void 0 === DQ ? void 0 : DQ.getReader();
          if (!LQ) return !1;
          for (;;) {
            const {
              done: QQ
            } = await LQ.read();
            if (QQ) return !0;
            qQ()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(LQ), FQ.removeEventListener("abort", oQ)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);