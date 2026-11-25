export const id = 225;
export const ids = [225];
export const modules = {
  36711: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => aQ,
      h: () => lQ,
      i: () => pQ
    });
    var wQ = XQ(318),
      qQ = XQ(105);
    const TQ = new(XQ(36713).d)(new URL(XQ.p + XQ.u(3), XQ.b), {
      name: "blockIconWorker",
      type: "module"
    });
    var zQ = XQ(1854),
      sQ = XQ(2218);
    const FQ = 1e4,
      PQ = 3e4;
    let gQ = null,
      JQ = null,
      rQ = null,
      IQ = !1,
      jQ = 0;
    const BQ = new Map;
    let yQ = null;
    const VQ = new Map,
      DQ = new Map;

    function pQ(QQ) {
      const WQ = new Promise(((WQ, XQ) => {
        const wQ = new Image;
        wQ.crossOrigin = "anonymous", wQ.fetchPriority = "high", wQ.onload = () => {
          WQ(wQ)
        }, wQ.onerror = () => {
          XQ(new Error(`A block icon's texture did not load: ${QQ.slice(0,100)}`))
        }, wQ.src = QQ
      }));
      return (0, sQ.f)(WQ)
    }

    function GQ(QQ) {
      var WQ, XQ;
      IQ || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${QQ}`), IQ = !0, null === (WQ = gQ) || void 0 === WQ || WQ.terminate(), gQ = null, JQ = null, VQ.clear(), DQ.clear();
      for (const wQ of BQ.values()) wQ(null);
      BQ.clear(), null === (XQ = yQ) || void 0 === XQ || XQ()
    }

    function UQ() {
      return rQ ??= async function() {
        if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
        if ("page" === wQ.e.ios_icon_worker_v1 && (0, qQ.isWebKit)()) return;
        try {
          gQ = await async function() {
            return await TQ.ready(), TQ.start()
          }()
        } catch (sQ) {
          return void GQ(`did not start (${String(sQ)})`)
        }
        let QQ = () => {};
        const WQ = new Promise((WQ => {
          QQ = WQ
        }));
        gQ.onmessage = WQ => {
          let {
            data: XQ
          } = WQ;
          if ("started" === XQ.type) JQ = gQ, QQ();
          else if ("failed" === XQ.type) GQ(`failed a draw (${XQ.message})`);
          else {
            var wQ, qQ;
            null === (wQ = BQ.get(XQ.id)) || void 0 === wQ || wQ(XQ.url), BQ.delete(XQ.id), null === (qQ = yQ) || void 0 === qQ || qQ()
          }
        }, gQ.onerror = WQ => {
          WQ.preventDefault(), GQ(`stopped (${WQ.message||"its script did not load or run"})`), QQ()
        };
        const XQ = `did not start in ${PQ/1e3} s`;
        await (0, zQ.n)(WQ, PQ, XQ).catch((() => {
          GQ(XQ)
        }))
      }(), rQ
    }

    function bQ() {
      if (null !== yQ || 0 === BQ.size) return;
      const QQ = new Promise((QQ => {
          yQ = QQ
        })),
        WQ = `did not answer in ${FQ/1e3} s`;
      (0, zQ.n)(QQ, FQ, WQ).then((() => {
        yQ = null, bQ()
      }), (() => {
        yQ = null, GQ(WQ)
      }))
    }

    function vQ(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      QQ.postMessage(WQ, XQ)
    }

    function dQ(QQ, WQ, XQ, wQ) {
      let qQ = WQ.get(XQ);
      return void 0 === qQ && (qQ = wQ().then((async WQ => {
        let {
          image: XQ,
          request: wQ
        } = WQ;
        try {
          const WQ = await createImageBitmap(XQ);
          vQ(QQ, wQ(WQ), [WQ])
        } catch (qQ) {
          GQ(`could not take an image (${String(qQ)})`)
        }
      })), qQ.catch((() => {
        WQ.get(XQ) === qQ && WQ.delete(XQ)
      })), WQ.set(XQ, qQ)), qQ
    }
    async function HQ(QQ, WQ) {
      UQ();
      const XQ = JQ;
      if (null === XQ) return null;
      if (await QQ(XQ), JQ !== XQ) return null;
      const wQ = ++jQ;
      return new Promise((QQ => {
        BQ.set(wQ, QQ), vQ(XQ, WQ(wQ)), bQ()
      }))
    }

    function aQ(QQ, WQ, XQ) {
      return HQ((WQ => Promise.all([QQ.top, QQ.left, QQ.right].map((QQ => function(QQ, WQ) {
        return dQ(QQ, VQ, WQ, (async () => ({
          image: await pQ(WQ),
          request: QQ => ({
            type: "texture",
            url: WQ,
            bitmap: QQ
          })
        })))
      }(WQ, QQ))))), (wQ => ({
        type: "draw",
        id: wQ,
        ...QQ,
        size: WQ,
        outlineWidth: XQ
      })))
    }

    function lQ(QQ, WQ, XQ, wQ) {
      return HQ((XQ => function(QQ, WQ, XQ) {
        return dQ(QQ, DQ, WQ, (async () => {
          const {
            texture: QQ,
            ...wQ
          } = await XQ();
          return {
            image: await pQ(QQ),
            request: QQ => ({
              type: "model",
              name: WQ,
              bitmap: QQ,
              geometry: wQ
            })
          }
        }))
      }(XQ, QQ, WQ)), (WQ => ({
        type: "drawModel",
        id: WQ,
        name: QQ,
        size: XQ,
        outlineWidth: wQ
      })))
    }
  },
  36703: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => wQ,
      d: () => FQ,
      f: () => zQ,
      i: () => rQ,
      k: () => PQ
    });
    const wQ = {
        across: Math.SQRT1_2,
        down: Math.SQRT1_2 / 2,
        up: Math.sqrt(3) / 2
      },
      qQ = .6,
      TQ = {
        width: 2 * wQ.across,
        height: 2 * wQ.down + wQ.up
      };

    function zQ(QQ, WQ) {
      const XQ = WQ > 0 ? WQ + 1 : 0,
        zQ = QQ * qQ - WQ / wQ.across;
      return Math.max(0, Math.min(zQ, (QQ - 2 * XQ) / TQ.height))
    }
    const sQ = [15, 15, 15],
      FQ = {
        top: 1,
        left: .85,
        right: .7
      };

    function PQ(QQ, WQ, XQ, wQ) {
      const {
        vertices: qQ,
        uvs: sQ,
        indices: FQ,
        shades: PQ
      } = QQ, gQ = function(QQ, WQ) {
        const XQ = zQ(QQ, WQ),
          wQ = TQ.width * XQ,
          qQ = TQ.height * XQ;
        return {
          left: (QQ - wQ) / 2,
          top: (QQ - qQ) / 2,
          width: wQ,
          height: qQ
        }
      }(XQ, wQ), JQ = new Float32Array(qQ.length);
      for (let TQ = 0; TQ < qQ.length; TQ += 3) JQ[TQ] = gQ.left + qQ[TQ] * gQ.width, JQ[TQ + 1] = gQ.top + qQ[TQ + 1] * gQ.height, JQ[TQ + 2] = qQ[TQ + 2];
      const IQ = new Float32Array(XQ * XQ).fill(-1 / 0),
        jQ = new Uint8ClampedArray(XQ * XQ * 4),
        BQ = 255 * QQ.alphaCutoff;
      for (let TQ = 0; TQ < FQ.length; TQ += 3) {
        const [QQ, wQ, qQ] = [FQ[TQ], FQ[TQ + 1], FQ[TQ + 2]], [zQ, gQ, rQ] = [3 * QQ, 3 * wQ, 3 * qQ], [yQ, VQ, DQ, pQ, GQ, UQ] = [JQ[zQ], JQ[zQ + 1], JQ[gQ], JQ[gQ + 1], JQ[rQ], JQ[rQ + 1]], bQ = (DQ - yQ) * (UQ - VQ) - (GQ - yQ) * (pQ - VQ);
        if (Math.abs(bQ) < 1e-9) continue;
        const vQ = PQ[TQ / 3],
          [dQ, HQ, aQ, lQ, hQ, iQ] = [sQ[2 * QQ], sQ[2 * QQ + 1], sQ[2 * wQ], sQ[2 * wQ + 1], sQ[2 * qQ], sQ[2 * qQ + 1]],
          cQ = Math.max(0, Math.floor(Math.min(yQ, DQ, GQ))),
          AQ = Math.min(XQ - 1, Math.ceil(Math.max(yQ, DQ, GQ))),
          RQ = Math.max(0, Math.floor(Math.min(VQ, pQ, UQ))),
          EQ = Math.min(XQ - 1, Math.ceil(Math.max(VQ, pQ, UQ)));
        for (let TQ = RQ; TQ <= EQ; TQ++)
          for (let QQ = cQ; QQ <= AQ; QQ++) {
            const [wQ, qQ] = [QQ + .5, TQ + .5], sQ = ((wQ - yQ) * (UQ - VQ) - (GQ - yQ) * (qQ - VQ)) / bQ, FQ = ((DQ - yQ) * (qQ - VQ) - (wQ - yQ) * (pQ - VQ)) / bQ, PQ = 1 - sQ - FQ;
            if (PQ < 0 || sQ < 0 || FQ < 0) continue;
            const cQ = PQ * JQ[zQ + 2] + sQ * JQ[gQ + 2] + FQ * JQ[rQ + 2],
              AQ = TQ * XQ + QQ;
            if (cQ <= IQ[AQ]) continue;
            const RQ = Math.max(0, Math.min(WQ.width - 1, Math.floor((PQ * dQ + sQ * aQ + FQ * hQ) * WQ.width))),
              EQ = 4 * (Math.max(0, Math.min(WQ.height - 1, Math.floor((PQ * HQ + sQ * lQ + FQ * iQ) * WQ.height))) * WQ.width + RQ);
            WQ.pixels[EQ + 3] < BQ || (IQ[AQ] = cQ, jQ[4 * AQ] = WQ.pixels[EQ] * vQ, jQ[4 * AQ + 1] = WQ.pixels[EQ + 1] * vQ, jQ[4 * AQ + 2] = WQ.pixels[EQ + 2] * vQ, jQ[4 * AQ + 3] = 255)
          }
      }
      return rQ(jQ, XQ, wQ), jQ
    }
    let gQ = NaN,
      JQ = new Int32Array(0);

    function rQ(QQ, WQ, XQ) {
      let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : WQ => 0 !== QQ[4 * WQ + 3];
      const qQ = new Uint8Array(WQ * WQ);
      for (let sQ = 0; sQ < WQ * WQ; sQ++) qQ[sQ] = wQ(sQ) ? 1 : 0;
      const TQ = (QQ, XQ) => QQ >= 0 && XQ >= 0 && QQ < WQ && XQ < WQ && 0 === qQ[XQ * WQ + QQ],
        zQ = new Float32Array(WQ * WQ).fill(1 / 0),
        FQ = function(QQ) {
          if (QQ !== gQ) {
            const WQ = Math.ceil(QQ + 1),
              XQ = [];
            for (let wQ = -WQ; wQ <= WQ; wQ++)
              for (let qQ = -WQ; qQ <= WQ; qQ++) {
                const WQ = qQ * qQ + wQ * wQ;
                WQ > 0 && WQ < (QQ + 1) ** 2 && XQ.push(qQ, wQ, WQ)
              }
            gQ = QQ, JQ = Int32Array.from(XQ)
          }
          return JQ
        }(XQ);
      for (let sQ = 0; sQ < WQ; sQ++)
        for (let QQ = 0; QQ < WQ; QQ++) {
          if (1 === qQ[sQ * WQ + QQ] && (TQ(QQ - 1, sQ) || TQ(QQ + 1, sQ) || TQ(QQ, sQ - 1) || TQ(QQ, sQ + 1)))
            for (let XQ = 0; XQ < FQ.length; XQ += 3) {
              const wQ = QQ + FQ[XQ],
                qQ = sQ + FQ[XQ + 1];
              if (wQ >= 0 && qQ >= 0 && wQ < WQ && qQ < WQ) {
                const QQ = qQ * WQ + wQ;
                zQ[QQ] = Math.min(zQ[QQ], FQ[XQ + 2])
              }
            }
        }
      for (let PQ = 0; PQ < WQ * WQ; PQ++) 1 !== qQ[PQ] && zQ[PQ] !== 1 / 0 && (QQ.set(sQ, 4 * PQ), QQ[4 * PQ + 3] = Math.round(255 * Math.min(1, XQ + 1 - Math.sqrt(zQ[PQ]))))
    }
  },
  36713: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => qQ
    });
    const wQ = {
      wait: function(QQ) {
        return new Promise((WQ => {
          setTimeout(WQ, QQ)
        }))
      },
      stallMs: 2e4
    };
    class qQ {
      constructor(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : wQ;
        this.url = QQ, this.options = WQ, this.timing = XQ, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = QQ
      }
      ready() {
        if (null === this.fetched) {
          const QQ = new AbortController;
          this.fetchAbort = QQ, this.fetched = this.fetchWithRetries(QQ.signal).then((WQ => (this.fetchAbort === QQ && (this.fetchAbort = null), WQ)))
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
      async fetchWithRetries(QQ) {
        for (let WQ = 0;; WQ++) {
          const XQ = new URL(this.url);
          if (WQ > 0 && XQ.searchParams.set("cache-bust", `${Date.now()}-${WQ}`), await this.fetchWhole(XQ, QQ)) return this.scriptUrl = XQ, !0;
          if (WQ >= 3 || QQ.aborted) return !1;
          if (await this.timing.wait(500 * 2 ** WQ), QQ.aborted) return !1
        }
      }
      async fetchWhole(QQ, WQ) {
        const XQ = new AbortController;
        let wQ;
        const qQ = () => {
            clearTimeout(wQ), wQ = setTimeout((() => {
              XQ.abort()
            }), this.timing.stallMs)
          },
          TQ = () => {
            XQ.abort()
          };
        WQ.addEventListener("abort", TQ, {
          once: !0
        }), qQ();
        try {
          var zQ;
          const WQ = await fetch(QQ, {
            signal: XQ.signal
          });
          if (!WQ.ok) return !1;
          const wQ = null === (zQ = WQ.body) || void 0 === zQ ? void 0 : zQ.getReader();
          if (!wQ) return !1;
          for (;;) {
            const {
              done: QQ
            } = await wQ.read();
            if (QQ) return !0;
            qQ()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(wQ), WQ.removeEventListener("abort", TQ)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);