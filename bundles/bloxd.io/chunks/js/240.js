export const id = 240;
export const ids = [240];
export const modules = {
  37353: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => tM,
      e: () => gM,
      h: () => EM
    });
    var OM = iM(255),
      SM = iM(83);
    const jM = new(iM(37356).b)(new URL(iM.p + iM.u(3), iM.b), {
      name: "blockIconWorker",
      type: "module"
    });
    var aM = iM(1899),
      PM = iM(2260);
    const nM = 1e4,
      QM = 3e4;
    let zM = null,
      LM = null,
      mM = null,
      HM = !1,
      hM = 0;
    const JM = new Map;
    let dM = null;
    const yM = new Map,
      lM = new Map;

    function EM(MM) {
      const rM = new Promise(((rM, iM) => {
        const OM = new Image;
        OM.crossOrigin = "anonymous", OM.fetchPriority = "high", OM.onload = () => {
          rM(OM)
        }, OM.onerror = () => {
          iM(new Error(`A block icon's texture did not load: ${MM.slice(0,100)}`))
        }, OM.src = MM
      }));
      return (0, PM.d)(rM)
    }

    function UM(MM) {
      var rM, iM;
      HM || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${MM}`), HM = !0, null === (rM = zM) || void 0 === rM || rM.terminate(), zM = null, LM = null, yM.clear(), lM.clear();
      for (const OM of JM.values()) OM(null);
      JM.clear(), null === (iM = dM) || void 0 === iM || iM()
    }

    function GM() {
      return mM ??= async function() {
        if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
        if ("page" === OM.e.ios_icon_worker_v1 && (0, SM.isWebKit)()) return;
        try {
          zM = await async function() {
            return await jM.ready(), jM.start()
          }()
        } catch (PM) {
          return void UM(`did not start (${String(PM)})`)
        }
        let MM = () => {};
        const rM = new Promise((rM => {
          MM = rM
        }));
        zM.onmessage = rM => {
          let {
            data: iM
          } = rM;
          if ("started" === iM.type) LM = zM, MM();
          else if ("failed" === iM.type) UM(`failed a draw (${iM.message})`);
          else {
            var OM, SM;
            null === (OM = JM.get(iM.id)) || void 0 === OM || OM(iM.url), JM.delete(iM.id), null === (SM = dM) || void 0 === SM || SM()
          }
        }, zM.onerror = rM => {
          rM.preventDefault(), UM(`stopped (${rM.message||"its script did not load or run"})`), MM()
        };
        const iM = `did not start in ${QM/1e3} s`;
        await (0, aM.n)(rM, QM, iM).catch((() => {
          UM(iM)
        }))
      }(), mM
    }

    function CM() {
      if (null !== dM || 0 === JM.size) return;
      const MM = new Promise((MM => {
          dM = MM
        })),
        rM = `did not answer in ${nM/1e3} s`;
      (0, aM.n)(MM, nM, rM).then((() => {
        dM = null, CM()
      }), (() => {
        dM = null, UM(rM)
      }))
    }

    function eM(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      MM.postMessage(rM, iM)
    }

    function bM(MM, rM, iM, OM) {
      let SM = rM.get(iM);
      return void 0 === SM && (SM = OM().then((async rM => {
        let {
          image: iM,
          request: OM
        } = rM;
        try {
          const rM = await createImageBitmap(iM);
          eM(MM, OM(rM), [rM])
        } catch (SM) {
          UM(`could not take an image (${String(SM)})`)
        }
      })), SM.catch((() => {
        rM.get(iM) === SM && rM.delete(iM)
      })), rM.set(iM, SM)), SM
    }
    async function wM(MM, rM) {
      GM();
      const iM = LM;
      if (null === iM) return null;
      if (await MM(iM), LM !== iM) return null;
      const OM = ++hM;
      return new Promise((MM => {
        JM.set(OM, MM), eM(iM, rM(OM)), CM()
      }))
    }

    function tM(MM, rM, iM) {
      return wM((rM => Promise.all([MM.top, MM.left, MM.right].map((MM => function(MM, rM) {
        return bM(MM, yM, rM, (async () => ({
          image: await EM(rM),
          request: MM => ({
            type: "texture",
            url: rM,
            bitmap: MM
          })
        })))
      }(rM, MM))))), (OM => ({
        type: "draw",
        id: OM,
        ...MM,
        size: rM,
        outlineWidth: iM
      })))
    }

    function gM(MM, rM, iM, OM) {
      return wM((iM => function(MM, rM, iM) {
        return bM(MM, lM, rM, (async () => {
          const {
            texture: MM,
            ...OM
          } = await iM();
          return {
            image: await EM(MM),
            request: MM => ({
              type: "model",
              name: rM,
              bitmap: MM,
              geometry: OM
            })
          }
        }))
      }(iM, MM, rM)), (rM => ({
        type: "drawModel",
        id: rM,
        name: MM,
        size: iM,
        outlineWidth: OM
      })))
    }
  },
  37344: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => OM,
      f: () => nM,
      h: () => aM,
      k: () => mM,
      n: () => QM
    });
    const OM = {
        across: Math.SQRT1_2,
        down: Math.SQRT1_2 / 2,
        up: Math.sqrt(3) / 2
      },
      SM = .6,
      jM = {
        width: 2 * OM.across,
        height: 2 * OM.down + OM.up
      };

    function aM(MM, rM) {
      const iM = rM > 0 ? rM + 1 : 0,
        aM = MM * SM - rM / OM.across;
      return Math.max(0, Math.min(aM, (MM - 2 * iM) / jM.height))
    }
    const PM = [15, 15, 15],
      nM = {
        top: 1,
        left: .85,
        right: .7
      };

    function QM(MM, rM, iM, OM) {
      const {
        vertices: SM,
        uvs: PM,
        indices: nM,
        shades: QM
      } = MM, zM = function(MM, rM) {
        const iM = aM(MM, rM),
          OM = jM.width * iM,
          SM = jM.height * iM;
        return {
          left: (MM - OM) / 2,
          top: (MM - SM) / 2,
          width: OM,
          height: SM
        }
      }(iM, OM), LM = new Float32Array(SM.length);
      for (let jM = 0; jM < SM.length; jM += 3) LM[jM] = zM.left + SM[jM] * zM.width, LM[jM + 1] = zM.top + SM[jM + 1] * zM.height, LM[jM + 2] = SM[jM + 2];
      const HM = new Float32Array(iM * iM).fill(-1 / 0),
        hM = new Uint8ClampedArray(iM * iM * 4),
        JM = 255 * MM.alphaCutoff;
      for (let jM = 0; jM < nM.length; jM += 3) {
        const [MM, OM, SM] = [nM[jM], nM[jM + 1], nM[jM + 2]], [aM, zM, mM] = [3 * MM, 3 * OM, 3 * SM], [dM, yM, lM, EM, UM, GM] = [LM[aM], LM[aM + 1], LM[zM], LM[zM + 1], LM[mM], LM[mM + 1]], CM = (lM - dM) * (GM - yM) - (UM - dM) * (EM - yM);
        if (Math.abs(CM) < 1e-9) continue;
        const eM = QM[jM / 3],
          [bM, wM, tM, gM, uM, RM] = [PM[2 * MM], PM[2 * MM + 1], PM[2 * OM], PM[2 * OM + 1], PM[2 * SM], PM[2 * SM + 1]],
          pM = Math.max(0, Math.floor(Math.min(dM, lM, UM))),
          WM = Math.min(iM - 1, Math.ceil(Math.max(dM, lM, UM))),
          sM = Math.max(0, Math.floor(Math.min(yM, EM, GM))),
          DM = Math.min(iM - 1, Math.ceil(Math.max(yM, EM, GM)));
        for (let jM = sM; jM <= DM; jM++)
          for (let MM = pM; MM <= WM; MM++) {
            const [OM, SM] = [MM + .5, jM + .5], PM = ((OM - dM) * (GM - yM) - (UM - dM) * (SM - yM)) / CM, nM = ((lM - dM) * (SM - yM) - (OM - dM) * (EM - yM)) / CM, QM = 1 - PM - nM;
            if (QM < 0 || PM < 0 || nM < 0) continue;
            const pM = QM * LM[aM + 2] + PM * LM[zM + 2] + nM * LM[mM + 2],
              WM = jM * iM + MM;
            if (pM <= HM[WM]) continue;
            const sM = Math.max(0, Math.min(rM.width - 1, Math.floor((QM * bM + PM * tM + nM * uM) * rM.width))),
              DM = 4 * (Math.max(0, Math.min(rM.height - 1, Math.floor((QM * wM + PM * gM + nM * RM) * rM.height))) * rM.width + sM);
            rM.pixels[DM + 3] < JM || (HM[WM] = pM, hM[4 * WM] = rM.pixels[DM] * eM, hM[4 * WM + 1] = rM.pixels[DM + 1] * eM, hM[4 * WM + 2] = rM.pixels[DM + 2] * eM, hM[4 * WM + 3] = 255)
          }
      }
      return mM(hM, iM, OM), hM
    }
    let zM = NaN,
      LM = new Int32Array(0);

    function mM(MM, rM, iM) {
      let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : rM => 0 !== MM[4 * rM + 3];
      const SM = new Uint8Array(rM * rM);
      for (let PM = 0; PM < rM * rM; PM++) SM[PM] = OM(PM) ? 1 : 0;
      const jM = (MM, iM) => MM >= 0 && iM >= 0 && MM < rM && iM < rM && 0 === SM[iM * rM + MM],
        aM = new Float32Array(rM * rM).fill(1 / 0),
        nM = function(MM) {
          if (MM !== zM) {
            const rM = Math.ceil(MM + 1),
              iM = [];
            for (let OM = -rM; OM <= rM; OM++)
              for (let SM = -rM; SM <= rM; SM++) {
                const rM = SM * SM + OM * OM;
                rM > 0 && rM < (MM + 1) ** 2 && iM.push(SM, OM, rM)
              }
            zM = MM, LM = Int32Array.from(iM)
          }
          return LM
        }(iM);
      for (let PM = 0; PM < rM; PM++)
        for (let MM = 0; MM < rM; MM++) {
          if (1 === SM[PM * rM + MM] && (jM(MM - 1, PM) || jM(MM + 1, PM) || jM(MM, PM - 1) || jM(MM, PM + 1)))
            for (let iM = 0; iM < nM.length; iM += 3) {
              const OM = MM + nM[iM],
                SM = PM + nM[iM + 1];
              if (OM >= 0 && SM >= 0 && OM < rM && SM < rM) {
                const MM = SM * rM + OM;
                aM[MM] = Math.min(aM[MM], nM[iM + 2])
              }
            }
        }
      for (let QM = 0; QM < rM * rM; QM++) 1 !== SM[QM] && aM[QM] !== 1 / 0 && (MM.set(PM, 4 * QM), MM[4 * QM + 3] = Math.round(255 * Math.min(1, iM + 1 - Math.sqrt(aM[QM]))))
    }
  },
  37356: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => SM
    });
    const OM = {
      wait: function(MM) {
        return new Promise((rM => {
          setTimeout(rM, MM)
        }))
      },
      stallMs: 2e4
    };
    class SM {
      constructor(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : OM;
        this.url = MM, this.options = rM, this.timing = iM, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = MM
      }
      ready() {
        if (null === this.fetched) {
          const MM = new AbortController;
          this.fetchAbort = MM, this.fetched = this.fetchWithRetries(MM.signal).then((rM => (this.fetchAbort === MM && (this.fetchAbort = null), rM)))
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
      async fetchWithRetries(MM) {
        for (let rM = 0;; rM++) {
          const iM = new URL(this.url);
          if (rM > 0 && iM.searchParams.set("cache-bust", `${Date.now()}-${rM}`), await this.fetchWhole(iM, MM)) return this.scriptUrl = iM, !0;
          if (rM >= 3 || MM.aborted) return !1;
          if (await this.timing.wait(500 * 2 ** rM), MM.aborted) return !1
        }
      }
      async fetchWhole(MM, rM) {
        const iM = new AbortController;
        let OM;
        const SM = () => {
            clearTimeout(OM), OM = setTimeout((() => {
              iM.abort()
            }), this.timing.stallMs)
          },
          jM = () => {
            iM.abort()
          };
        rM.addEventListener("abort", jM, {
          once: !0
        }), SM();
        try {
          var aM;
          const rM = await fetch(MM, {
            signal: iM.signal
          });
          if (!rM.ok) return !1;
          const OM = null === (aM = rM.body) || void 0 === aM ? void 0 : aM.getReader();
          if (!OM) return !1;
          for (;;) {
            const {
              done: MM
            } = await OM.read();
            if (MM) return !0;
            SM()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(OM), rM.removeEventListener("abort", jM)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);