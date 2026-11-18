export const id = 2;
export const ids = [2];
export const modules = {
  35415: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      drawBlockIcon: () => iB,
      drawBlockIconUrl: () => NB,
      getDrawnBlockIcon: () => mB
    });
    var VB = dB(35423);
    const yB = Math.SQRT1_2,
      pB = Math.sqrt(3) / 2,
      lB = .5,
      JB = {
        boxes: [
          [0, 0, 0, 1, 1, 1]
        ],
        cropFaces: !1
      },
      YB = {
        boxes: [
          [0, 0, 0, 1, .5, 1]
        ],
        cropFaces: !1
      },
      gB = {
        boxes: [
          [0, 0, 0, 1, .5, 1],
          [0, .5, 0, .5, 1, 1]
        ],
        cropFaces: !0
      };
    const oB = 1e-6;

    function kB(BB, TB, dB, VB) {
      let {
        origin: yB,
        across: pB,
        down: lB,
        texture: JB,
        rect: [YB, gB, kB, LB],
        shade: OB
      } = VB;
      const DB = pB.x * lB.y - pB.y * lB.x;
      if (Math.abs(DB) < 1e-9) return;
      const uB = [yB.x, yB.x + pB.x, yB.x + lB.x, yB.x + pB.x + lB.x],
        HB = [yB.y, yB.y + pB.y, yB.y + lB.y, yB.y + pB.y + lB.y],
        EB = Math.max(0, Math.floor(Math.min(...uB))),
        vB = Math.min(dB - 1, Math.ceil(Math.max(...uB))),
        mB = Math.max(0, Math.floor(Math.min(...HB))),
        iB = Math.min(dB - 1, Math.ceil(Math.max(...HB)));
      for (let NB = mB; NB <= iB; NB++)
        for (let VB = EB; VB <= vB; VB++) {
          const uB = VB + .5 - yB.x,
            HB = NB + .5 - yB.y,
            EB = (uB * lB.y - HB * lB.x) / DB,
            vB = (pB.x * HB - pB.y * uB) / DB;
          if (EB < -oB || EB > 1 + oB || vB < -oB || vB > 1 + oB) continue;
          const mB = NB * dB + VB;
          TB[mB] = 1;
          const iB = YB + Math.min(Math.max(EB, 0), 1) * (kB - YB),
            tB = gB + Math.min(Math.max(vB, 0), 1) * (LB - gB),
            fB = Math.min(JB.width - 1, Math.floor(iB * JB.width)),
            sB = 4 * (Math.min(JB.height - 1, Math.floor(tB * JB.height)) * JB.width + fB),
            MB = JB.pixels[sB + 3] / 255;
          if (0 === MB) continue;
          const zB = 4 * mB,
            wB = BB[zB + 3] / 255 * (1 - MB),
            UB = MB + wB;
          for (let TB = 0; TB < 3; TB++) BB[zB + TB] = (JB.pixels[sB + TB] * OB * MB + BB[zB + TB] * wB) / UB;
          BB[zB + 3] = 255 * UB
        }
    }
    var LB = dB(35427);
    const OB = new Map,
      DB = new Map,
      uB = new Map,
      HB = new Map;

    function EB(BB, TB, dB) {
      return `${TB}|${dB}|${BB}`
    }

    function vB(BB, TB, dB) {
      let VB = BB.get(TB);
      return void 0 === VB && (VB = dB().catch((dB => {
        throw BB.delete(TB), dB
      })), BB.set(TB, VB)), VB
    }

    function mB(BB, TB) {
      let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return DB.get(EB(BB, TB, dB))
    }

    function iB(BB, TB, dB, VB) {
      const yB = EB(BB, TB, dB);
      return vB(OB, yB, (async () => {
        const pB = await fB(VB(BB), TB, tB(dB));
        return DB.set(yB, pB), pB
      }))
    }

    function NB(BB, TB, dB, VB) {
      return vB(uB, EB(BB, TB, dB), (async () => {
        var yB;
        const pB = VB(BB),
          lB = tB(dB);
        return null !== (yB = await (0, LB.b)(pB, TB, lB)) && void 0 !== yB ? yB : (await fB(pB, TB, lB)).toDataURL()
      }))
    }

    function tB(BB) {
      return Math.max(1, Math.round(BB))
    }
    async function fB(BB, TB, dB) {
      let {
        top: oB,
        left: LB,
        right: OB,
        itemType: DB
      } = BB;
      const [uB, HB, EB] = await Promise.all([sB(oB), sB(LB), sB(OB)]), vB = function(BB, TB, dB, JB) {
        const YB = .6 * dB,
          gB = YB * yB,
          oB = YB * yB * lB,
          LB = YB * pB,
          OB = Math.max(...TB.boxes.map((BB => BB[4]))),
          DB = gB / 2 + (dB - gB) / 2,
          uB = oB + (dB - oB - oB - OB * LB) / 2,
          HB = (BB, TB, dB) => ({
            x: DB + (BB - dB) * gB,
            y: uB - oB + (BB + dB) * oB + (OB - TB) * LB
          }),
          EB = (BB, dB, VB, yB, pB, lB) => ({
            origin: BB,
            across: {
              x: dB.x - BB.x,
              y: dB.y - BB.y
            },
            down: {
              x: VB.x - BB.x,
              y: VB.y - BB.y
            },
            texture: yB,
            rect: TB.cropFaces ? pB : [0, 0, 1, 1],
            shade: lB
          }),
          vB = new Uint8ClampedArray(dB * dB * 4),
          mB = new Uint8Array(dB * dB),
          iB = VB.d;
        for (const [VB, yB, pB, lB, NB, tB] of TB.boxes) {
          const TB = EB(HB(lB, NB, tB), HB(lB, NB, pB), HB(lB, yB, tB), BB.right, [1 - tB, 1 - NB, 1 - pB, 1 - yB], iB.right),
            JB = EB(HB(VB, NB, tB), HB(lB, NB, tB), HB(VB, yB, tB), BB.left, [VB, 1 - NB, lB, 1 - yB], iB.left),
            YB = EB(HB(VB, NB, pB), HB(lB, NB, pB), HB(VB, NB, tB), BB.top, [VB, pB, lB, tB], iB.top);
          for (const BB of [TB, JB, YB]) kB(vB, mB, dB, BB)
        }
        return (0, VB.h)(vB, dB, JB, (BB => 1 === mB[BB])), vB
      }({
        top: uB,
        left: HB,
        right: EB
      }, function(BB) {
        return "SlabBlock" === BB ? YB : "StairsBlock" === BB ? gB : JB
      }(DB), TB, dB), mB = document.createElement("canvas");
      mB.width = TB, mB.height = TB;
      const iB = mB.getContext("2d");
      if (!iB) throw new Error("Failed to get 2D context");
      return iB.putImageData(new ImageData(vB, TB, TB), 0, 0), mB
    }

    function sB(BB) {
      return vB(HB, BB, (async () => {
        const TB = await (0, LB.i)(BB),
          dB = document.createElement("canvas");
        dB.width = TB.width, dB.height = TB.height;
        const VB = dB.getContext("2d");
        if (!VB) throw new Error("Failed to get 2D context");
        return VB.drawImage(TB, 0, 0), {
          width: TB.width,
          height: TB.height,
          pixels: VB.getImageData(0, 0, TB.width, TB.height).data
        }
      }))
    }
  },
  35427: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => MB,
      f: () => zB,
      i: () => vB
    });
    var VB = dB(127),
      yB = dB(95);
    const pB = new(dB(35430).c)(new URL(dB.p + dB.u(3), dB.b), {
      name: "blockIconWorker",
      type: "module"
    });
    var lB = dB(2512);
    const JB = 1e4,
      YB = 3e4;
    let gB = null,
      oB = null,
      kB = null,
      LB = !1,
      OB = 0;
    const DB = new Map;
    let uB = null;
    const HB = new Map,
      EB = new Map;

    function vB(BB) {
      return new Promise(((TB, dB) => {
        const VB = new Image;
        VB.crossOrigin = "anonymous", VB.onload = () => {
          TB(VB)
        }, VB.onerror = () => {
          dB(new Error(`A block icon's texture did not load: ${BB.slice(0,100)}`))
        }, VB.src = BB
      }))
    }

    function mB(BB) {
      var TB, dB;
      LB || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${BB}`), LB = !0, null === (TB = gB) || void 0 === TB || TB.terminate(), gB = null, oB = null, HB.clear(), EB.clear();
      for (const VB of DB.values()) VB(null);
      DB.clear(), null === (dB = uB) || void 0 === dB || dB()
    }

    function iB() {
      return kB ??= async function() {
        if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
        if ("page" === VB.e.ios_icon_worker_v1 && (0, yB.isWebKit)()) return;
        try {
          gB = await async function() {
            return await pB.ready(), pB.start()
          }()
        } catch (JB) {
          return void mB(`did not start (${String(JB)})`)
        }
        let BB = () => {};
        const TB = new Promise((TB => {
          BB = TB
        }));
        gB.onmessage = TB => {
          let {
            data: dB
          } = TB;
          if ("started" === dB.type) oB = gB, BB();
          else if ("failed" === dB.type) mB(`failed a draw (${dB.message})`);
          else {
            var VB, yB;
            null === (VB = DB.get(dB.id)) || void 0 === VB || VB(dB.url), DB.delete(dB.id), null === (yB = uB) || void 0 === yB || yB()
          }
        }, gB.onerror = TB => {
          TB.preventDefault(), mB(`stopped (${TB.message||"its script did not load or run"})`), BB()
        };
        const dB = `did not start in ${YB/1e3} s`;
        await (0, lB.j)(TB, YB, dB).catch((() => {
          mB(dB)
        }))
      }(), kB
    }

    function NB() {
      if (null !== uB || 0 === DB.size) return;
      const BB = new Promise((BB => {
          uB = BB
        })),
        TB = `did not answer in ${JB/1e3} s`;
      (0, lB.j)(BB, JB, TB).then((() => {
        uB = null, NB()
      }), (() => {
        uB = null, mB(TB)
      }))
    }

    function tB(BB, TB) {
      let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      BB.postMessage(TB, dB)
    }

    function fB(BB, TB, dB, VB) {
      let yB = TB.get(dB);
      return void 0 === yB && (yB = VB().then((async TB => {
        let {
          image: dB,
          request: VB
        } = TB;
        try {
          const TB = await createImageBitmap(dB);
          tB(BB, VB(TB), [TB])
        } catch (yB) {
          mB(`could not take an image (${String(yB)})`)
        }
      })), yB.catch((() => {
        TB.get(dB) === yB && TB.delete(dB)
      })), TB.set(dB, yB)), yB
    }
    async function sB(BB, TB) {
      iB();
      const dB = oB;
      if (null === dB) return null;
      if (await BB(dB), oB !== dB) return null;
      const VB = ++OB;
      return new Promise((BB => {
        DB.set(VB, BB), tB(dB, TB(VB)), NB()
      }))
    }

    function MB(BB, TB, dB) {
      return sB((TB => Promise.all([BB.top, BB.left, BB.right].map((BB => function(BB, TB) {
        return fB(BB, HB, TB, (async () => ({
          image: await vB(TB),
          request: BB => ({
            type: "texture",
            url: TB,
            bitmap: BB
          })
        })))
      }(TB, BB))))), (VB => ({
        type: "draw",
        id: VB,
        ...BB,
        size: TB,
        outlineWidth: dB
      })))
    }

    function zB(BB, TB, dB, VB) {
      return sB((dB => function(BB, TB, dB) {
        return fB(BB, EB, TB, (async () => {
          const {
            texture: BB,
            ...VB
          } = await dB();
          return {
            image: await vB(BB),
            request: BB => ({
              type: "model",
              name: TB,
              bitmap: BB,
              geometry: VB
            })
          }
        }))
      }(dB, BB, TB)), (TB => ({
        type: "drawModel",
        id: TB,
        name: BB,
        size: dB,
        outlineWidth: VB
      })))
    }
  },
  35423: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => pB,
      h: () => JB,
      l: () => lB
    });
    const VB = 1 / 32,
      yB = [15, 15, 15],
      pB = {
        top: 1,
        left: .85,
        right: .7
      };

    function lB(BB, TB, dB, yB) {
      const {
        vertices: pB,
        uvs: lB,
        indices: YB,
        shades: gB
      } = BB, oB = dB * VB, kB = dB - 2 * oB, LB = new Float32Array(pB.length);
      for (let VB = 0; VB < pB.length; VB += 3) LB[VB] = oB + pB[VB] * kB, LB[VB + 1] = oB + pB[VB + 1] * kB, LB[VB + 2] = pB[VB + 2];
      const OB = new Float32Array(dB * dB).fill(-1 / 0),
        DB = new Uint8ClampedArray(dB * dB * 4),
        uB = 255 * BB.alphaCutoff;
      for (let VB = 0; VB < YB.length; VB += 3) {
        const [BB, yB, pB] = [YB[VB], YB[VB + 1], YB[VB + 2]], [JB, oB, kB] = [3 * BB, 3 * yB, 3 * pB], [HB, EB, vB, mB, iB, NB] = [LB[JB], LB[JB + 1], LB[oB], LB[oB + 1], LB[kB], LB[kB + 1]], tB = (vB - HB) * (NB - EB) - (iB - HB) * (mB - EB);
        if (Math.abs(tB) < 1e-9) continue;
        const fB = gB[VB / 3],
          [sB, MB, zB, wB, UB, FB] = [lB[2 * BB], lB[2 * BB + 1], lB[2 * yB], lB[2 * yB + 1], lB[2 * pB], lB[2 * pB + 1]],
          KB = Math.max(0, Math.floor(Math.min(HB, vB, iB))),
          rB = Math.min(dB - 1, Math.ceil(Math.max(HB, vB, iB))),
          IB = Math.max(0, Math.floor(Math.min(EB, mB, NB))),
          cB = Math.min(dB - 1, Math.ceil(Math.max(EB, mB, NB)));
        for (let VB = IB; VB <= cB; VB++)
          for (let BB = KB; BB <= rB; BB++) {
            const [yB, pB] = [BB + .5, VB + .5], lB = ((yB - HB) * (NB - EB) - (iB - HB) * (pB - EB)) / tB, YB = ((vB - HB) * (pB - EB) - (yB - HB) * (mB - EB)) / tB, gB = 1 - lB - YB;
            if (gB < 0 || lB < 0 || YB < 0) continue;
            const KB = gB * LB[JB + 2] + lB * LB[oB + 2] + YB * LB[kB + 2],
              rB = VB * dB + BB;
            if (KB <= OB[rB]) continue;
            const IB = Math.max(0, Math.min(TB.width - 1, Math.floor((gB * sB + lB * zB + YB * UB) * TB.width))),
              cB = 4 * (Math.max(0, Math.min(TB.height - 1, Math.floor((gB * MB + lB * wB + YB * FB) * TB.height))) * TB.width + IB);
            TB.pixels[cB + 3] < uB || (OB[rB] = KB, DB[4 * rB] = TB.pixels[cB] * fB, DB[4 * rB + 1] = TB.pixels[cB + 1] * fB, DB[4 * rB + 2] = TB.pixels[cB + 2] * fB, DB[4 * rB + 3] = 255)
          }
      }
      return JB(DB, dB, yB), DB
    }

    function JB(BB, TB, dB) {
      let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : TB => 0 !== BB[4 * TB + 3];
      const pB = (BB, dB) => BB < 0 || dB < 0 || BB >= TB || dB >= TB || !VB(dB * TB + BB),
        lB = [];
      for (let yB = 0; yB < TB; yB++)
        for (let BB = 0; BB < TB; BB++)
          if (!pB(BB, yB)) BB: for (let VB = -dB; VB <= dB; VB++) {
            const JB = dB - Math.abs(VB);
            for (let dB = -JB; dB <= JB; dB++)
              if (pB(BB + dB, yB + VB)) {
                lB.push(yB * TB + BB);
                break BB
              }
          }
      for (const JB of lB) BB.set(yB, 4 * JB), BB[4 * JB + 3] = 255
    }
  },
  35430: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => yB
    });
    const VB = {
      wait: function(BB) {
        return new Promise((TB => {
          setTimeout(TB, BB)
        }))
      },
      stallMs: 2e4
    };
    class yB {
      constructor(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : VB;
        this.url = BB, this.options = TB, this.timing = dB, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = BB
      }
      ready() {
        if (null === this.fetched) {
          const BB = new AbortController;
          this.fetchAbort = BB, this.fetched = this.fetchWithRetries(BB.signal).finally((() => {
            this.fetchAbort === BB && (this.fetchAbort = null)
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
      async fetchWithRetries(BB) {
        for (let TB = 0;; TB++) {
          const dB = new URL(this.url);
          if (TB > 0 && dB.searchParams.set("cache-bust", `${Date.now()}-${TB}`), await this.fetchWhole(dB, BB)) return void(this.scriptUrl = dB);
          if (TB >= 3 || BB.aborted) return;
          if (await this.timing.wait(500 * 2 ** TB), BB.aborted) return
        }
      }
      async fetchWhole(BB, TB) {
        const dB = new AbortController;
        let VB;
        const yB = () => {
            clearTimeout(VB), VB = setTimeout((() => {
              dB.abort()
            }), this.timing.stallMs)
          },
          pB = () => {
            dB.abort()
          };
        TB.addEventListener("abort", pB, {
          once: !0
        }), yB();
        try {
          var lB;
          const TB = await fetch(BB, {
            signal: dB.signal
          });
          if (!TB.ok) return !1;
          const VB = null === (lB = TB.body) || void 0 === lB ? void 0 : lB.getReader();
          if (!VB) return !1;
          for (;;) {
            const {
              done: BB
            } = await VB.read();
            if (BB) return !0;
            yB()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(VB), TB.removeEventListener("abort", pB)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);