export const id = 217;
export const ids = [217];
export const modules = {
  36291: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => eC,
      d: () => hC,
      f: () => RC
    });
    var QC = ZC(264),
      wC = ZC(77);
    const bC = new(ZC(36294).d)(new URL(ZC.p + ZC.u(3), ZC.b), {
      name: "blockIconWorker",
      type: "module"
    });
    var nC = ZC(1724),
      fC = ZC(2057);
    const oC = 1e4,
      qC = 3e4;
    let FC = null,
      WC = null,
      NC = null,
      MC = !1,
      gC = 0;
    const SC = new Map;
    let pC = null;
    const PC = new Map,
      GC = new Map;

    function RC(CC) {
      const zC = new Promise(((zC, ZC) => {
        const QC = new Image;
        QC.crossOrigin = "anonymous", QC.fetchPriority = "high", QC.onload = () => {
          zC(QC)
        }, QC.onerror = () => {
          ZC(new Error(`A block icon's texture did not load: ${CC.slice(0,100)}`))
        }, QC.src = CC
      }));
      return (0, fC.f)(zC)
    }

    function AC(CC) {
      var zC, ZC;
      MC || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${CC}`), MC = !0, null === (zC = FC) || void 0 === zC || zC.terminate(), FC = null, WC = null, PC.clear(), GC.clear();
      for (const QC of SC.values()) QC(null);
      SC.clear(), null === (ZC = pC) || void 0 === ZC || ZC()
    }

    function xC() {
      return NC ??= async function() {
        if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
        if ("page" === QC.d.ios_icon_worker_v1 && (0, wC.isWebKit)()) return;
        try {
          FC = await async function() {
            return await bC.ready(), bC.start()
          }()
        } catch (fC) {
          return void AC(`did not start (${String(fC)})`)
        }
        let CC = () => {};
        const zC = new Promise((zC => {
          CC = zC
        }));
        FC.onmessage = zC => {
          let {
            data: ZC
          } = zC;
          if ("started" === ZC.type) WC = FC, CC();
          else if ("failed" === ZC.type) AC(`failed a draw (${ZC.message})`);
          else {
            var QC, wC;
            null === (QC = SC.get(ZC.id)) || void 0 === QC || QC(ZC.url), SC.delete(ZC.id), null === (wC = pC) || void 0 === wC || wC()
          }
        }, FC.onerror = zC => {
          zC.preventDefault(), AC(`stopped (${zC.message||"its script did not load or run"})`), CC()
        };
        const ZC = `did not start in ${qC/1e3} s`;
        await (0, nC.n)(zC, qC, ZC).catch((() => {
          AC(ZC)
        }))
      }(), NC
    }

    function JC() {
      if (null !== pC || 0 === SC.size) return;
      const CC = new Promise((CC => {
          pC = CC
        })),
        zC = `did not answer in ${oC/1e3} s`;
      (0, nC.n)(CC, oC, zC).then((() => {
        pC = null, JC()
      }), (() => {
        pC = null, AC(zC)
      }))
    }

    function IC(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      CC.postMessage(zC, ZC)
    }

    function iC(CC, zC, ZC, QC) {
      let wC = zC.get(ZC);
      return void 0 === wC && (wC = QC().then((async zC => {
        let {
          image: ZC,
          request: QC
        } = zC;
        try {
          const zC = await createImageBitmap(ZC);
          IC(CC, QC(zC), [zC])
        } catch (wC) {
          AC(`could not take an image (${String(wC)})`)
        }
      })), wC.catch((() => {
        zC.get(ZC) === wC && zC.delete(ZC)
      })), zC.set(ZC, wC)), wC
    }
    async function vC(CC, zC) {
      xC();
      const ZC = WC;
      if (null === ZC) return null;
      if (await CC(ZC), WC !== ZC) return null;
      const QC = ++gC;
      return new Promise((CC => {
        SC.set(QC, CC), IC(ZC, zC(QC)), JC()
      }))
    }

    function eC(CC, zC, ZC) {
      return vC((zC => Promise.all([CC.top, CC.left, CC.right].map((CC => function(CC, zC) {
        return iC(CC, PC, zC, (async () => ({
          image: await RC(zC),
          request: CC => ({
            type: "texture",
            url: zC,
            bitmap: CC
          })
        })))
      }(zC, CC))))), (QC => ({
        type: "draw",
        id: QC,
        ...CC,
        size: zC,
        outlineWidth: ZC
      })))
    }

    function hC(CC, zC, ZC, QC) {
      return vC((ZC => function(CC, zC, ZC) {
        return iC(CC, GC, zC, (async () => {
          const {
            texture: CC,
            ...QC
          } = await ZC();
          return {
            image: await RC(CC),
            request: CC => ({
              type: "model",
              name: zC,
              bitmap: CC,
              geometry: QC
            })
          }
        }))
      }(ZC, CC, zC)), (zC => ({
        type: "drawModel",
        id: zC,
        name: CC,
        size: ZC,
        outlineWidth: QC
      })))
    }
  },
  36288: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => QC,
      g: () => oC,
      h: () => nC,
      j: () => NC,
      k: () => qC
    });
    const QC = {
        across: Math.SQRT1_2,
        down: Math.SQRT1_2 / 2,
        up: Math.sqrt(3) / 2
      },
      wC = .6,
      bC = {
        width: 2 * QC.across,
        height: 2 * QC.down + QC.up
      };

    function nC(CC, zC) {
      const ZC = zC > 0 ? zC + 1 : 0,
        nC = CC * wC - zC / QC.across;
      return Math.max(0, Math.min(nC, (CC - 2 * ZC) / bC.height))
    }
    const fC = [15, 15, 15],
      oC = {
        top: 1,
        left: .85,
        right: .7
      };

    function qC(CC, zC, ZC, QC) {
      const {
        vertices: wC,
        uvs: fC,
        indices: oC,
        shades: qC
      } = CC, FC = function(CC, zC) {
        const ZC = nC(CC, zC),
          QC = bC.width * ZC,
          wC = bC.height * ZC;
        return {
          left: (CC - QC) / 2,
          top: (CC - wC) / 2,
          width: QC,
          height: wC
        }
      }(ZC, QC), WC = new Float32Array(wC.length);
      for (let bC = 0; bC < wC.length; bC += 3) WC[bC] = FC.left + wC[bC] * FC.width, WC[bC + 1] = FC.top + wC[bC + 1] * FC.height, WC[bC + 2] = wC[bC + 2];
      const MC = new Float32Array(ZC * ZC).fill(-1 / 0),
        gC = new Uint8ClampedArray(ZC * ZC * 4),
        SC = 255 * CC.alphaCutoff;
      for (let bC = 0; bC < oC.length; bC += 3) {
        const [CC, QC, wC] = [oC[bC], oC[bC + 1], oC[bC + 2]], [nC, FC, NC] = [3 * CC, 3 * QC, 3 * wC], [pC, PC, GC, RC, AC, xC] = [WC[nC], WC[nC + 1], WC[FC], WC[FC + 1], WC[NC], WC[NC + 1]], JC = (GC - pC) * (xC - PC) - (AC - pC) * (RC - PC);
        if (Math.abs(JC) < 1e-9) continue;
        const IC = qC[bC / 3],
          [iC, vC, eC, hC, KC, YC] = [fC[2 * CC], fC[2 * CC + 1], fC[2 * QC], fC[2 * QC + 1], fC[2 * wC], fC[2 * wC + 1]],
          dC = Math.max(0, Math.floor(Math.min(pC, GC, AC))),
          mC = Math.min(ZC - 1, Math.ceil(Math.max(pC, GC, AC))),
          HC = Math.max(0, Math.floor(Math.min(PC, RC, xC))),
          EC = Math.min(ZC - 1, Math.ceil(Math.max(PC, RC, xC)));
        for (let bC = HC; bC <= EC; bC++)
          for (let CC = dC; CC <= mC; CC++) {
            const [QC, wC] = [CC + .5, bC + .5], fC = ((QC - pC) * (xC - PC) - (AC - pC) * (wC - PC)) / JC, oC = ((GC - pC) * (wC - PC) - (QC - pC) * (RC - PC)) / JC, qC = 1 - fC - oC;
            if (qC < 0 || fC < 0 || oC < 0) continue;
            const dC = qC * WC[nC + 2] + fC * WC[FC + 2] + oC * WC[NC + 2],
              mC = bC * ZC + CC;
            if (dC <= MC[mC]) continue;
            const HC = Math.max(0, Math.min(zC.width - 1, Math.floor((qC * iC + fC * eC + oC * KC) * zC.width))),
              EC = 4 * (Math.max(0, Math.min(zC.height - 1, Math.floor((qC * vC + fC * hC + oC * YC) * zC.height))) * zC.width + HC);
            zC.pixels[EC + 3] < SC || (MC[mC] = dC, gC[4 * mC] = zC.pixels[EC] * IC, gC[4 * mC + 1] = zC.pixels[EC + 1] * IC, gC[4 * mC + 2] = zC.pixels[EC + 2] * IC, gC[4 * mC + 3] = 255)
          }
      }
      return NC(gC, ZC, QC), gC
    }
    let FC = NaN,
      WC = new Int32Array(0);

    function NC(CC, zC, ZC) {
      let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : zC => 0 !== CC[4 * zC + 3];
      const wC = new Uint8Array(zC * zC);
      for (let fC = 0; fC < zC * zC; fC++) wC[fC] = QC(fC) ? 1 : 0;
      const bC = (CC, ZC) => CC >= 0 && ZC >= 0 && CC < zC && ZC < zC && 0 === wC[ZC * zC + CC],
        nC = new Float32Array(zC * zC).fill(1 / 0),
        oC = function(CC) {
          if (CC !== FC) {
            const zC = Math.ceil(CC + 1),
              ZC = [];
            for (let QC = -zC; QC <= zC; QC++)
              for (let wC = -zC; wC <= zC; wC++) {
                const zC = wC * wC + QC * QC;
                zC > 0 && zC < (CC + 1) ** 2 && ZC.push(wC, QC, zC)
              }
            FC = CC, WC = Int32Array.from(ZC)
          }
          return WC
        }(ZC);
      for (let fC = 0; fC < zC; fC++)
        for (let CC = 0; CC < zC; CC++) {
          if (1 === wC[fC * zC + CC] && (bC(CC - 1, fC) || bC(CC + 1, fC) || bC(CC, fC - 1) || bC(CC, fC + 1)))
            for (let ZC = 0; ZC < oC.length; ZC += 3) {
              const QC = CC + oC[ZC],
                wC = fC + oC[ZC + 1];
              if (QC >= 0 && wC >= 0 && QC < zC && wC < zC) {
                const CC = wC * zC + QC;
                nC[CC] = Math.min(nC[CC], oC[ZC + 2])
              }
            }
        }
      for (let qC = 0; qC < zC * zC; qC++) 1 !== wC[qC] && nC[qC] !== 1 / 0 && (CC.set(fC, 4 * qC), CC[4 * qC + 3] = Math.round(255 * Math.min(1, ZC + 1 - Math.sqrt(nC[qC]))))
    }
  },
  36294: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => wC
    });
    const QC = {
      wait: function(CC) {
        return new Promise((zC => {
          setTimeout(zC, CC)
        }))
      },
      stallMs: 2e4
    };
    class wC {
      constructor(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : QC;
        this.url = CC, this.options = zC, this.timing = ZC, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = CC
      }
      ready() {
        if (null === this.fetched) {
          const CC = new AbortController;
          this.fetchAbort = CC, this.fetched = this.fetchWithRetries(CC.signal).then((zC => (this.fetchAbort === CC && (this.fetchAbort = null), zC)))
        }
        return this.fetched
      }
      cancel() {
        null !== this.fetchAbort && (this.fetchAbort.abort(), this.fetchAbort = null, this.fetched = null)
      }
      forgetFailedFetch() {
        this.fetched = null
      }
      start() {
        return new Worker(this.scriptUrl, this.options)
      }
      async fetchWithRetries(CC) {
        for (let zC = 0;; zC++) {
          const ZC = new URL(this.url);
          if (zC > 0 && ZC.searchParams.set("cache-bust", `${Date.now()}-${zC}`), await this.fetchWhole(ZC, CC)) return this.scriptUrl = ZC, !0;
          if (zC >= 3 || CC.aborted) return !1;
          if (await this.timing.wait(500 * 2 ** zC), CC.aborted) return !1
        }
      }
      async fetchWhole(CC, zC) {
        const ZC = new AbortController;
        let QC;
        const wC = () => {
            clearTimeout(QC), QC = setTimeout((() => {
              ZC.abort()
            }), this.timing.stallMs)
          },
          bC = () => {
            ZC.abort()
          };
        zC.addEventListener("abort", bC, {
          once: !0
        }), wC();
        try {
          var nC;
          const zC = await fetch(CC, {
            signal: ZC.signal
          });
          if (!zC.ok) return !1;
          const QC = null === (nC = zC.body) || void 0 === nC ? void 0 : nC.getReader();
          if (!QC) return !1;
          for (;;) {
            const {
              done: CC
            } = await QC.read();
            if (CC) return !0;
            wC()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(QC), zC.removeEventListener("abort", bC)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);