export const id = 217;
export const ids = [217];
export const modules = {
  36388: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => vk,
      e: () => Ek,
      i: () => Pk
    });
    var Xk = Ik(272),
      Tk = Ik(95);
    const ik = new(Ik(36393).c)(new URL(Ik.p + Ik.u(3), Ik.b), {
      name: "blockIconWorker",
      type: "module"
    });
    var yk = Ik(1729),
      lk = Ik(2065);
    const ak = 1e4,
      qk = 3e4;
    let Lk = null,
      tk = null,
      Zk = null,
      jk = !1,
      ek = 0;
    const wk = new Map;
    let Hk = null;
    const Jk = new Map,
      xk = new Map;

    function Pk(kk) {
      const Fk = new Promise(((Fk, Ik) => {
        const Xk = new Image;
        Xk.crossOrigin = "anonymous", Xk.fetchPriority = "high", Xk.onload = () => {
          Fk(Xk)
        }, Xk.onerror = () => {
          Ik(new Error(`A block icon's texture did not load: ${kk.slice(0,100)}`))
        }, Xk.src = kk
      }));
      return (0, lk.g)(Fk)
    }

    function Kk(kk) {
      var Fk, Ik;
      jk || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${kk}`), jk = !0, null === (Fk = Lk) || void 0 === Fk || Fk.terminate(), Lk = null, tk = null, Jk.clear(), xk.clear();
      for (const Xk of wk.values()) Xk(null);
      wk.clear(), null === (Ik = Hk) || void 0 === Ik || Ik()
    }

    function Qk() {
      return Zk ??= async function() {
        if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
        if ("page" === Xk.b.ios_icon_worker_v1 && (0, Tk.isWebKit)()) return;
        try {
          Lk = await async function() {
            return await ik.ready(), ik.start()
          }()
        } catch (lk) {
          return void Kk(`did not start (${String(lk)})`)
        }
        let kk = () => {};
        const Fk = new Promise((Fk => {
          kk = Fk
        }));
        Lk.onmessage = Fk => {
          let {
            data: Ik
          } = Fk;
          if ("started" === Ik.type) tk = Lk, kk();
          else if ("failed" === Ik.type) Kk(`failed a draw (${Ik.message})`);
          else {
            var Xk, Tk;
            null === (Xk = wk.get(Ik.id)) || void 0 === Xk || Xk(Ik.url), wk.delete(Ik.id), null === (Tk = Hk) || void 0 === Tk || Tk()
          }
        }, Lk.onerror = Fk => {
          Fk.preventDefault(), Kk(`stopped (${Fk.message||"its script did not load or run"})`), kk()
        };
        const Ik = `did not start in ${qk/1e3} s`;
        await (0, yk.l)(Fk, qk, Ik).catch((() => {
          Kk(Ik)
        }))
      }(), Zk
    }

    function sk() {
      if (null !== Hk || 0 === wk.size) return;
      const kk = new Promise((kk => {
          Hk = kk
        })),
        Fk = `did not answer in ${ak/1e3} s`;
      (0, yk.l)(kk, ak, Fk).then((() => {
        Hk = null, sk()
      }), (() => {
        Hk = null, Kk(Fk)
      }))
    }

    function Vk(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      kk.postMessage(Fk, Ik)
    }

    function zk(kk, Fk, Ik, Xk) {
      let Tk = Fk.get(Ik);
      return void 0 === Tk && (Tk = Xk().then((async Fk => {
        let {
          image: Ik,
          request: Xk
        } = Fk;
        try {
          const Fk = await createImageBitmap(Ik);
          Vk(kk, Xk(Fk), [Fk])
        } catch (Tk) {
          Kk(`could not take an image (${String(Tk)})`)
        }
      })), Tk.catch((() => {
        Fk.get(Ik) === Tk && Fk.delete(Ik)
      })), Fk.set(Ik, Tk)), Tk
    }
    async function Sk(kk, Fk) {
      Qk();
      const Ik = tk;
      if (null === Ik) return null;
      if (await kk(Ik), tk !== Ik) return null;
      const Xk = ++ek;
      return new Promise((kk => {
        wk.set(Xk, kk), Vk(Ik, Fk(Xk)), sk()
      }))
    }

    function vk(kk, Fk, Ik) {
      return Sk((Fk => Promise.all([kk.top, kk.left, kk.right].map((kk => function(kk, Fk) {
        return zk(kk, Jk, Fk, (async () => ({
          image: await Pk(Fk),
          request: kk => ({
            type: "texture",
            url: Fk,
            bitmap: kk
          })
        })))
      }(Fk, kk))))), (Xk => ({
        type: "draw",
        id: Xk,
        ...kk,
        size: Fk,
        outlineWidth: Ik
      })))
    }

    function Ek(kk, Fk, Ik, Xk) {
      return Sk((Ik => function(kk, Fk, Ik) {
        return zk(kk, xk, Fk, (async () => {
          const {
            texture: kk,
            ...Xk
          } = await Ik();
          return {
            image: await Pk(kk),
            request: kk => ({
              type: "model",
              name: Fk,
              bitmap: kk,
              geometry: Xk
            })
          }
        }))
      }(Ik, kk, Fk)), (Fk => ({
        type: "drawModel",
        id: Fk,
        name: kk,
        size: Ik,
        outlineWidth: Xk
      })))
    }
  },
  36386: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Xk,
      g: () => ak,
      i: () => yk,
      k: () => Zk,
      o: () => qk
    });
    const Xk = {
        across: Math.SQRT1_2,
        down: Math.SQRT1_2 / 2,
        up: Math.sqrt(3) / 2
      },
      Tk = .6,
      ik = {
        width: 2 * Xk.across,
        height: 2 * Xk.down + Xk.up
      };

    function yk(kk, Fk) {
      const Ik = Fk > 0 ? Fk + 1 : 0,
        yk = kk * Tk - Fk / Xk.across;
      return Math.max(0, Math.min(yk, (kk - 2 * Ik) / ik.height))
    }
    const lk = [15, 15, 15],
      ak = {
        top: 1,
        left: .85,
        right: .7
      };

    function qk(kk, Fk, Ik, Xk) {
      const {
        vertices: Tk,
        uvs: lk,
        indices: ak,
        shades: qk
      } = kk, Lk = function(kk, Fk) {
        const Ik = yk(kk, Fk),
          Xk = ik.width * Ik,
          Tk = ik.height * Ik;
        return {
          left: (kk - Xk) / 2,
          top: (kk - Tk) / 2,
          width: Xk,
          height: Tk
        }
      }(Ik, Xk), tk = new Float32Array(Tk.length);
      for (let ik = 0; ik < Tk.length; ik += 3) tk[ik] = Lk.left + Tk[ik] * Lk.width, tk[ik + 1] = Lk.top + Tk[ik + 1] * Lk.height, tk[ik + 2] = Tk[ik + 2];
      const jk = new Float32Array(Ik * Ik).fill(-1 / 0),
        ek = new Uint8ClampedArray(Ik * Ik * 4),
        wk = 255 * kk.alphaCutoff;
      for (let ik = 0; ik < ak.length; ik += 3) {
        const [kk, Xk, Tk] = [ak[ik], ak[ik + 1], ak[ik + 2]], [yk, Lk, Zk] = [3 * kk, 3 * Xk, 3 * Tk], [Hk, Jk, xk, Pk, Kk, Qk] = [tk[yk], tk[yk + 1], tk[Lk], tk[Lk + 1], tk[Zk], tk[Zk + 1]], sk = (xk - Hk) * (Qk - Jk) - (Kk - Hk) * (Pk - Jk);
        if (Math.abs(sk) < 1e-9) continue;
        const Vk = qk[ik / 3],
          [zk, Sk, vk, Ek, Ok, nk] = [lk[2 * kk], lk[2 * kk + 1], lk[2 * Xk], lk[2 * Xk + 1], lk[2 * Tk], lk[2 * Tk + 1]],
          Gk = Math.max(0, Math.floor(Math.min(Hk, xk, Kk))),
          pk = Math.min(Ik - 1, Math.ceil(Math.max(Hk, xk, Kk))),
          uk = Math.max(0, Math.floor(Math.min(Jk, Pk, Qk))),
          bk = Math.min(Ik - 1, Math.ceil(Math.max(Jk, Pk, Qk)));
        for (let ik = uk; ik <= bk; ik++)
          for (let kk = Gk; kk <= pk; kk++) {
            const [Xk, Tk] = [kk + .5, ik + .5], lk = ((Xk - Hk) * (Qk - Jk) - (Kk - Hk) * (Tk - Jk)) / sk, ak = ((xk - Hk) * (Tk - Jk) - (Xk - Hk) * (Pk - Jk)) / sk, qk = 1 - lk - ak;
            if (qk < 0 || lk < 0 || ak < 0) continue;
            const Gk = qk * tk[yk + 2] + lk * tk[Lk + 2] + ak * tk[Zk + 2],
              pk = ik * Ik + kk;
            if (Gk <= jk[pk]) continue;
            const uk = Math.max(0, Math.min(Fk.width - 1, Math.floor((qk * zk + lk * vk + ak * Ok) * Fk.width))),
              bk = 4 * (Math.max(0, Math.min(Fk.height - 1, Math.floor((qk * Sk + lk * Ek + ak * nk) * Fk.height))) * Fk.width + uk);
            Fk.pixels[bk + 3] < wk || (jk[pk] = Gk, ek[4 * pk] = Fk.pixels[bk] * Vk, ek[4 * pk + 1] = Fk.pixels[bk + 1] * Vk, ek[4 * pk + 2] = Fk.pixels[bk + 2] * Vk, ek[4 * pk + 3] = 255)
          }
      }
      return Zk(ek, Ik, Xk), ek
    }
    let Lk = NaN,
      tk = new Int32Array(0);

    function Zk(kk, Fk, Ik) {
      let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Fk => 0 !== kk[4 * Fk + 3];
      const Tk = new Uint8Array(Fk * Fk);
      for (let lk = 0; lk < Fk * Fk; lk++) Tk[lk] = Xk(lk) ? 1 : 0;
      const ik = (kk, Ik) => kk >= 0 && Ik >= 0 && kk < Fk && Ik < Fk && 0 === Tk[Ik * Fk + kk],
        yk = new Float32Array(Fk * Fk).fill(1 / 0),
        ak = function(kk) {
          if (kk !== Lk) {
            const Fk = Math.ceil(kk + 1),
              Ik = [];
            for (let Xk = -Fk; Xk <= Fk; Xk++)
              for (let Tk = -Fk; Tk <= Fk; Tk++) {
                const Fk = Tk * Tk + Xk * Xk;
                Fk > 0 && Fk < (kk + 1) ** 2 && Ik.push(Tk, Xk, Fk)
              }
            Lk = kk, tk = Int32Array.from(Ik)
          }
          return tk
        }(Ik);
      for (let lk = 0; lk < Fk; lk++)
        for (let kk = 0; kk < Fk; kk++) {
          if (1 === Tk[lk * Fk + kk] && (ik(kk - 1, lk) || ik(kk + 1, lk) || ik(kk, lk - 1) || ik(kk, lk + 1)))
            for (let Ik = 0; Ik < ak.length; Ik += 3) {
              const Xk = kk + ak[Ik],
                Tk = lk + ak[Ik + 1];
              if (Xk >= 0 && Tk >= 0 && Xk < Fk && Tk < Fk) {
                const kk = Tk * Fk + Xk;
                yk[kk] = Math.min(yk[kk], ak[Ik + 2])
              }
            }
        }
      for (let qk = 0; qk < Fk * Fk; qk++) 1 !== Tk[qk] && yk[qk] !== 1 / 0 && (kk.set(lk, 4 * qk), kk[4 * qk + 3] = Math.round(255 * Math.min(1, Ik + 1 - Math.sqrt(yk[qk]))))
    }
  },
  36393: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Tk
    });
    const Xk = {
      wait: function(kk) {
        return new Promise((Fk => {
          setTimeout(Fk, kk)
        }))
      },
      stallMs: 2e4
    };
    class Tk {
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Xk;
        this.url = kk, this.options = Fk, this.timing = Ik, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = kk
      }
      ready() {
        if (null === this.fetched) {
          const kk = new AbortController;
          this.fetchAbort = kk, this.fetched = this.fetchWithRetries(kk.signal).then((Fk => (this.fetchAbort === kk && (this.fetchAbort = null), Fk)))
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
      async fetchWithRetries(kk) {
        for (let Fk = 0;; Fk++) {
          const Ik = new URL(this.url);
          if (Fk > 0 && Ik.searchParams.set("cache-bust", `${Date.now()}-${Fk}`), await this.fetchWhole(Ik, kk)) return this.scriptUrl = Ik, !0;
          if (Fk >= 3 || kk.aborted) return !1;
          if (await this.timing.wait(500 * 2 ** Fk), kk.aborted) return !1
        }
      }
      async fetchWhole(kk, Fk) {
        const Ik = new AbortController;
        let Xk;
        const Tk = () => {
            clearTimeout(Xk), Xk = setTimeout((() => {
              Ik.abort()
            }), this.timing.stallMs)
          },
          ik = () => {
            Ik.abort()
          };
        Fk.addEventListener("abort", ik, {
          once: !0
        }), Tk();
        try {
          var yk;
          const Fk = await fetch(kk, {
            signal: Ik.signal
          });
          if (!Fk.ok) return !1;
          const Xk = null === (yk = Fk.body) || void 0 === yk ? void 0 : yk.getReader();
          if (!Xk) return !1;
          for (;;) {
            const {
              done: kk
            } = await Xk.read();
            if (kk) return !0;
            Tk()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(Xk), Fk.removeEventListener("abort", ik)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);