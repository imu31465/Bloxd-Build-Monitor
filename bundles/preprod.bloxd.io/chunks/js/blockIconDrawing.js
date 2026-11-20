export const id = 2;
export const ids = [2];
export const modules = {
  36439: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      drawBlockIcon: () => Pq,
      drawBlockIconUrl: () => Qq,
      getDrawnBlockIcon: () => oq
    });
    var Yq = gq(36448);
    const lq = Math.SQRT1_2,
      Oq = Math.sqrt(3) / 2,
      mq = .5,
      xq = {
        boxes: [
          [0, 0, 0, 1, 1, 1]
        ],
        cropFaces: !1
      },
      Aq = {
        boxes: [
          [0, 0, 0, 1, .5, 1]
        ],
        cropFaces: !1
      },
      cq = {
        boxes: [
          [0, 0, 0, 1, .5, 1],
          [0, .5, 0, .5, 1, 1]
        ],
        cropFaces: !0
      };
    const uq = 1e-6;

    function Bq(qq, Eq, gq, Yq) {
      let {
        origin: lq,
        across: Oq,
        down: mq,
        texture: xq,
        rect: [Aq, cq, Bq, Wq],
        shade: Nq
      } = Yq;
      const aq = Oq.x * mq.y - Oq.y * mq.x;
      if (Math.abs(aq) < 1e-9) return;
      const Vq = [lq.x, lq.x + Oq.x, lq.x + mq.x, lq.x + Oq.x + mq.x],
        dq = [lq.y, lq.y + Oq.y, lq.y + mq.y, lq.y + Oq.y + mq.y],
        jq = Math.max(0, Math.floor(Math.min(...Vq))),
        Hq = Math.min(gq - 1, Math.ceil(Math.max(...Vq))),
        oq = Math.max(0, Math.floor(Math.min(...dq))),
        Pq = Math.min(gq - 1, Math.ceil(Math.max(...dq)));
      for (let Qq = oq; Qq <= Pq; Qq++)
        for (let Yq = jq; Yq <= Hq; Yq++) {
          const Vq = Yq + .5 - lq.x,
            dq = Qq + .5 - lq.y,
            jq = (Vq * mq.y - dq * mq.x) / aq,
            Hq = (Oq.x * dq - Oq.y * Vq) / aq;
          if (jq < -uq || jq > 1 + uq || Hq < -uq || Hq > 1 + uq) continue;
          const oq = Qq * gq + Yq;
          Eq[oq] = 1;
          const Pq = Aq + Math.min(Math.max(jq, 0), 1) * (Bq - Aq),
            yq = cq + Math.min(Math.max(Hq, 0), 1) * (Wq - cq),
            tq = Math.min(xq.width - 1, Math.floor(Pq * xq.width)),
            rq = 4 * (Math.min(xq.height - 1, Math.floor(yq * xq.height)) * xq.width + tq),
            vq = xq.pixels[rq + 3] / 255;
          if (0 === vq) continue;
          const hq = 4 * oq,
            nq = qq[hq + 3] / 255 * (1 - vq),
            bq = vq + nq;
          for (let Eq = 0; Eq < 3; Eq++) qq[hq + Eq] = (xq.pixels[rq + Eq] * Nq * vq + qq[hq + Eq] * nq) / bq;
          qq[hq + 3] = 255 * bq
        }
    }
    var Wq = gq(36454);
    const Nq = new Map,
      aq = new Map,
      Vq = new Map,
      dq = new Map;

    function jq(qq, Eq, gq) {
      return `${Eq}|${gq}|${qq}`
    }

    function Hq(qq, Eq, gq) {
      let Yq = qq.get(Eq);
      return void 0 === Yq && (Yq = gq().catch((gq => {
        throw qq.delete(Eq), gq
      })), qq.set(Eq, Yq)), Yq
    }

    function oq(qq, Eq) {
      let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return aq.get(jq(qq, Eq, gq))
    }

    function Pq(qq, Eq, gq, Yq) {
      const lq = jq(qq, Eq, gq);
      return Hq(Nq, lq, (async () => {
        const Oq = await tq(Yq(qq), Eq, yq(gq));
        return aq.set(lq, Oq), Oq
      }))
    }

    function Qq(qq, Eq, gq, Yq) {
      return Hq(Vq, jq(qq, Eq, gq), (async () => {
        var lq;
        const Oq = Yq(qq),
          mq = yq(gq);
        return null !== (lq = await (0, Wq.d)(Oq, Eq, mq)) && void 0 !== lq ? lq : (await tq(Oq, Eq, mq)).toDataURL()
      }))
    }

    function yq(qq) {
      return Math.max(1, Math.round(qq))
    }
    async function tq(qq, Eq, gq) {
      let {
        top: uq,
        left: Wq,
        right: Nq,
        itemType: aq
      } = qq;
      const [Vq, dq, jq] = await Promise.all([rq(uq), rq(Wq), rq(Nq)]), Hq = function(qq, Eq, gq, xq) {
        const Aq = .6 * gq,
          cq = Aq * lq,
          uq = Aq * lq * mq,
          Wq = Aq * Oq,
          Nq = Math.max(...Eq.boxes.map((qq => qq[4]))),
          aq = cq / 2 + (gq - cq) / 2,
          Vq = uq + (gq - uq - uq - Nq * Wq) / 2,
          dq = (qq, Eq, gq) => ({
            x: aq + (qq - gq) * cq,
            y: Vq - uq + (qq + gq) * uq + (Nq - Eq) * Wq
          }),
          jq = (qq, gq, Yq, lq, Oq, mq) => ({
            origin: qq,
            across: {
              x: gq.x - qq.x,
              y: gq.y - qq.y
            },
            down: {
              x: Yq.x - qq.x,
              y: Yq.y - qq.y
            },
            texture: lq,
            rect: Eq.cropFaces ? Oq : [0, 0, 1, 1],
            shade: mq
          }),
          Hq = new Uint8ClampedArray(gq * gq * 4),
          oq = new Uint8Array(gq * gq),
          Pq = Yq.d;
        for (const [Yq, lq, Oq, mq, Qq, yq] of Eq.boxes) {
          const Eq = jq(dq(mq, Qq, yq), dq(mq, Qq, Oq), dq(mq, lq, yq), qq.right, [1 - yq, 1 - Qq, 1 - Oq, 1 - lq], Pq.right),
            xq = jq(dq(Yq, Qq, yq), dq(mq, Qq, yq), dq(Yq, lq, yq), qq.left, [Yq, 1 - Qq, mq, 1 - lq], Pq.left),
            Aq = jq(dq(Yq, Qq, Oq), dq(mq, Qq, Oq), dq(Yq, Qq, yq), qq.top, [Yq, Oq, mq, yq], Pq.top);
          for (const qq of [Eq, xq, Aq]) Bq(Hq, oq, gq, qq)
        }
        return (0, Yq.e)(Hq, gq, xq, (qq => 1 === oq[qq])), Hq
      }({
        top: Vq,
        left: dq,
        right: jq
      }, function(qq) {
        return "SlabBlock" === qq ? Aq : "StairsBlock" === qq ? cq : xq
      }(aq), Eq, gq), oq = document.createElement("canvas");
      oq.width = Eq, oq.height = Eq;
      const Pq = oq.getContext("2d");
      if (!Pq) throw new Error("Failed to get 2D context");
      return Pq.putImageData(new ImageData(Hq, Eq, Eq), 0, 0), oq
    }

    function rq(qq) {
      return Hq(dq, qq, (async () => {
        const Eq = await (0, Wq.h)(qq),
          gq = document.createElement("canvas");
        gq.width = Eq.width, gq.height = Eq.height;
        const Yq = gq.getContext("2d");
        if (!Yq) throw new Error("Failed to get 2D context");
        return Yq.drawImage(Eq, 0, 0), {
          width: Eq.width,
          height: Eq.height,
          pixels: Yq.getImageData(0, 0, Eq.width, Eq.height).data
        }
      }))
    }
  },
  36454: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => hq,
      e: () => nq,
      h: () => oq
    });
    var Yq = gq(278),
      lq = gq(96);
    const Oq = new(gq(36461).d)(new URL(gq.p + gq.u(3), gq.b), {
      name: "blockIconWorker",
      type: "module"
    });
    var mq = gq(1758),
      xq = gq(3094);
    const Aq = 1e4,
      cq = 3e4;
    let uq = null,
      Bq = null,
      Wq = null,
      Nq = !1,
      aq = 0;
    const Vq = new Map;
    let dq = null;
    const jq = new Map,
      Hq = new Map;

    function oq(qq) {
      const Eq = new Promise(((Eq, gq) => {
        const Yq = new Image;
        Yq.crossOrigin = "anonymous", Yq.fetchPriority = "high", Yq.onload = () => {
          Eq(Yq)
        }, Yq.onerror = () => {
          gq(new Error(`A block icon's texture did not load: ${qq.slice(0,100)}`))
        }, Yq.src = qq
      }));
      return (0, xq.g)(Eq)
    }

    function Pq(qq) {
      var Eq, gq;
      Nq || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${qq}`), Nq = !0, null === (Eq = uq) || void 0 === Eq || Eq.terminate(), uq = null, Bq = null, jq.clear(), Hq.clear();
      for (const Yq of Vq.values()) Yq(null);
      Vq.clear(), null === (gq = dq) || void 0 === gq || gq()
    }

    function Qq() {
      return Wq ??= async function() {
        if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
        if ("page" === Yq.c.ios_icon_worker_v1 && (0, lq.isWebKit)()) return;
        try {
          uq = await async function() {
            return await Oq.ready(), Oq.start()
          }()
        } catch (xq) {
          return void Pq(`did not start (${String(xq)})`)
        }
        let qq = () => {};
        const Eq = new Promise((Eq => {
          qq = Eq
        }));
        uq.onmessage = Eq => {
          let {
            data: gq
          } = Eq;
          if ("started" === gq.type) Bq = uq, qq();
          else if ("failed" === gq.type) Pq(`failed a draw (${gq.message})`);
          else {
            var Yq, lq;
            null === (Yq = Vq.get(gq.id)) || void 0 === Yq || Yq(gq.url), Vq.delete(gq.id), null === (lq = dq) || void 0 === lq || lq()
          }
        }, uq.onerror = Eq => {
          Eq.preventDefault(), Pq(`stopped (${Eq.message||"its script did not load or run"})`), qq()
        };
        const gq = `did not start in ${cq/1e3} s`;
        await (0, mq.k)(Eq, cq, gq).catch((() => {
          Pq(gq)
        }))
      }(), Wq
    }

    function yq() {
      if (null !== dq || 0 === Vq.size) return;
      const qq = new Promise((qq => {
          dq = qq
        })),
        Eq = `did not answer in ${Aq/1e3} s`;
      (0, mq.k)(qq, Aq, Eq).then((() => {
        dq = null, yq()
      }), (() => {
        dq = null, Pq(Eq)
      }))
    }

    function tq(qq, Eq) {
      let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      qq.postMessage(Eq, gq)
    }

    function rq(qq, Eq, gq, Yq) {
      let lq = Eq.get(gq);
      return void 0 === lq && (lq = Yq().then((async Eq => {
        let {
          image: gq,
          request: Yq
        } = Eq;
        try {
          const Eq = await createImageBitmap(gq);
          tq(qq, Yq(Eq), [Eq])
        } catch (lq) {
          Pq(`could not take an image (${String(lq)})`)
        }
      })), lq.catch((() => {
        Eq.get(gq) === lq && Eq.delete(gq)
      })), Eq.set(gq, lq)), lq
    }
    async function vq(qq, Eq) {
      Qq();
      const gq = Bq;
      if (null === gq) return null;
      if (await qq(gq), Bq !== gq) return null;
      const Yq = ++aq;
      return new Promise((qq => {
        Vq.set(Yq, qq), tq(gq, Eq(Yq)), yq()
      }))
    }

    function hq(qq, Eq, gq) {
      return vq((Eq => Promise.all([qq.top, qq.left, qq.right].map((qq => function(qq, Eq) {
        return rq(qq, jq, Eq, (async () => ({
          image: await oq(Eq),
          request: qq => ({
            type: "texture",
            url: Eq,
            bitmap: qq
          })
        })))
      }(Eq, qq))))), (Yq => ({
        type: "draw",
        id: Yq,
        ...qq,
        size: Eq,
        outlineWidth: gq
      })))
    }

    function nq(qq, Eq, gq, Yq) {
      return vq((gq => function(qq, Eq, gq) {
        return rq(qq, Hq, Eq, (async () => {
          const {
            texture: qq,
            ...Yq
          } = await gq();
          return {
            image: await oq(qq),
            request: qq => ({
              type: "model",
              name: Eq,
              bitmap: qq,
              geometry: Yq
            })
          }
        }))
      }(gq, qq, Eq)), (Eq => ({
        type: "drawModel",
        id: Eq,
        name: qq,
        size: gq,
        outlineWidth: Yq
      })))
    }
  },
  36448: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Oq,
      e: () => xq,
      h: () => mq
    });
    const Yq = 1 / 32,
      lq = [15, 15, 15],
      Oq = {
        top: 1,
        left: .85,
        right: .7
      };

    function mq(qq, Eq, gq, lq) {
      const {
        vertices: Oq,
        uvs: mq,
        indices: Aq,
        shades: cq
      } = qq, uq = gq * Yq, Bq = gq - 2 * uq, Wq = new Float32Array(Oq.length);
      for (let Yq = 0; Yq < Oq.length; Yq += 3) Wq[Yq] = uq + Oq[Yq] * Bq, Wq[Yq + 1] = uq + Oq[Yq + 1] * Bq, Wq[Yq + 2] = Oq[Yq + 2];
      const Nq = new Float32Array(gq * gq).fill(-1 / 0),
        aq = new Uint8ClampedArray(gq * gq * 4),
        Vq = 255 * qq.alphaCutoff;
      for (let Yq = 0; Yq < Aq.length; Yq += 3) {
        const [qq, lq, Oq] = [Aq[Yq], Aq[Yq + 1], Aq[Yq + 2]], [xq, uq, Bq] = [3 * qq, 3 * lq, 3 * Oq], [dq, jq, Hq, oq, Pq, Qq] = [Wq[xq], Wq[xq + 1], Wq[uq], Wq[uq + 1], Wq[Bq], Wq[Bq + 1]], yq = (Hq - dq) * (Qq - jq) - (Pq - dq) * (oq - jq);
        if (Math.abs(yq) < 1e-9) continue;
        const tq = cq[Yq / 3],
          [rq, vq, hq, nq, bq, iq] = [mq[2 * qq], mq[2 * qq + 1], mq[2 * lq], mq[2 * lq + 1], mq[2 * Oq], mq[2 * Oq + 1]],
          Zq = Math.max(0, Math.floor(Math.min(dq, Hq, Pq))),
          fq = Math.min(gq - 1, Math.ceil(Math.max(dq, Hq, Pq))),
          Mq = Math.max(0, Math.floor(Math.min(jq, oq, Qq))),
          Tq = Math.min(gq - 1, Math.ceil(Math.max(jq, oq, Qq)));
        for (let Yq = Mq; Yq <= Tq; Yq++)
          for (let qq = Zq; qq <= fq; qq++) {
            const [lq, Oq] = [qq + .5, Yq + .5], mq = ((lq - dq) * (Qq - jq) - (Pq - dq) * (Oq - jq)) / yq, Aq = ((Hq - dq) * (Oq - jq) - (lq - dq) * (oq - jq)) / yq, cq = 1 - mq - Aq;
            if (cq < 0 || mq < 0 || Aq < 0) continue;
            const Zq = cq * Wq[xq + 2] + mq * Wq[uq + 2] + Aq * Wq[Bq + 2],
              fq = Yq * gq + qq;
            if (Zq <= Nq[fq]) continue;
            const Mq = Math.max(0, Math.min(Eq.width - 1, Math.floor((cq * rq + mq * hq + Aq * bq) * Eq.width))),
              Tq = 4 * (Math.max(0, Math.min(Eq.height - 1, Math.floor((cq * vq + mq * nq + Aq * iq) * Eq.height))) * Eq.width + Mq);
            Eq.pixels[Tq + 3] < Vq || (Nq[fq] = Zq, aq[4 * fq] = Eq.pixels[Tq] * tq, aq[4 * fq + 1] = Eq.pixels[Tq + 1] * tq, aq[4 * fq + 2] = Eq.pixels[Tq + 2] * tq, aq[4 * fq + 3] = 255)
          }
      }
      return xq(aq, gq, lq), aq
    }

    function xq(qq, Eq, gq) {
      let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Eq => 0 !== qq[4 * Eq + 3];
      const Oq = (qq, gq) => qq < 0 || gq < 0 || qq >= Eq || gq >= Eq || !Yq(gq * Eq + qq),
        mq = [];
      for (let lq = 0; lq < Eq; lq++)
        for (let qq = 0; qq < Eq; qq++)
          if (!Oq(qq, lq)) qq: for (let Yq = -gq; Yq <= gq; Yq++) {
            const xq = gq - Math.abs(Yq);
            for (let gq = -xq; gq <= xq; gq++)
              if (Oq(qq + gq, lq + Yq)) {
                mq.push(lq * Eq + qq);
                break qq
              }
          }
      for (const xq of mq) qq.set(lq, 4 * xq), qq[4 * xq + 3] = 255
    }
  },
  36461: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => lq
    });
    const Yq = {
      wait: function(qq) {
        return new Promise((Eq => {
          setTimeout(Eq, qq)
        }))
      },
      stallMs: 2e4
    };
    class lq {
      constructor(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Yq;
        this.url = qq, this.options = Eq, this.timing = gq, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = qq
      }
      ready() {
        if (null === this.fetched) {
          const qq = new AbortController;
          this.fetchAbort = qq, this.fetched = this.fetchWithRetries(qq.signal).finally((() => {
            this.fetchAbort === qq && (this.fetchAbort = null)
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
      async fetchWithRetries(qq) {
        for (let Eq = 0;; Eq++) {
          const gq = new URL(this.url);
          if (Eq > 0 && gq.searchParams.set("cache-bust", `${Date.now()}-${Eq}`), await this.fetchWhole(gq, qq)) return void(this.scriptUrl = gq);
          if (Eq >= 3 || qq.aborted) return;
          if (await this.timing.wait(500 * 2 ** Eq), qq.aborted) return
        }
      }
      async fetchWhole(qq, Eq) {
        const gq = new AbortController;
        let Yq;
        const lq = () => {
            clearTimeout(Yq), Yq = setTimeout((() => {
              gq.abort()
            }), this.timing.stallMs)
          },
          Oq = () => {
            gq.abort()
          };
        Eq.addEventListener("abort", Oq, {
          once: !0
        }), lq();
        try {
          var mq;
          const Eq = await fetch(qq, {
            signal: gq.signal
          });
          if (!Eq.ok) return !1;
          const Yq = null === (mq = Eq.body) || void 0 === mq ? void 0 : mq.getReader();
          if (!Yq) return !1;
          for (;;) {
            const {
              done: qq
            } = await Yq.read();
            if (qq) return !0;
            lq()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(Yq), Eq.removeEventListener("abort", Oq)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);