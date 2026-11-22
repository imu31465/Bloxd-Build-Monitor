export const id = 4;
export const ids = [4];
export const modules = {
  35947: (kk, ek, ik) => {
    var Dk = {
      "./Artisan Bench.json": [40751, 273],
      "./Aspen Item Pedestal.json": [40757, 274],
      "./Cedar Item Pedestal.json": [40762, 275],
      "./Cherry Item Pedestal.json": [40767, 276],
      "./Furnace.json": [40769, 277],
      "./Jungle Item Pedestal.json": [40777, 278],
      "./Mango Item Pedestal.json": [40785, 279],
      "./Palm Item Pedestal.json": [40789, 280],
      "./Pear Item Pedestal.json": [40797, 281],
      "./Pine Item Pedestal.json": [40801, 282],
      "./Plum Item Pedestal.json": [40808, 283],
      "./Potion Table.json": [40813, 284],
      "./Salvaging Table.json": [40821, 285],
      "./Showcase.json": [40829, 286],
      "./Spectral Item Pedestal.json": [40836, 287],
      "./Workbench.json": [40840, 288]
    };

    function fk(kk) {
      if (!ik.o(Dk, kk)) return Promise.resolve().then((() => {
        var ek = new Error("Cannot find module '" + kk + "'");
        throw ek.code = "MODULE_NOT_FOUND", ek
      }));
      var ek = Dk[kk],
        fk = ek[0];
      return ik.e(ek[1]).then((() => ik(fk)))
    }
    fk.keys = () => Object.keys(Dk), fk.id = 35947, kk.exports = fk
  },
  35942: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      getBlockModelIconUrl: () => xk,
      hasBlockModelIcon: () => mk
    });
    var Dk = ik(35933),
      fk = ik(35931);
    const Sk = ik(35947),
      bk = new Map(Sk.keys().filter((kk => kk.startsWith("./"))).map((kk => [kk.slice(2, -5), kk]))),
      rk = new Map,
      Pk = new Map;

    function mk(kk) {
      return bk.has(kk)
    }

    function Mk(kk) {
      return Sk(bk.get(kk))
    }
    async function Kk(kk, ek, ik) {
      const {
        data: Dk,
        texture: Sk
      } = await
      function(kk) {
        let ek = rk.get(kk);
        return ek || (ek = Mk(kk).then((async kk => {
          const ek = new Image;
          ek.src = kk.texture, await ek.decode();
          const ik = document.createElement("canvas");
          ik.width = ek.width, ik.height = ek.height;
          const Dk = ik.getContext("2d");
          return Dk.drawImage(ek, 0, 0), {
            data: kk,
            texture: {
              width: ek.width,
              height: ek.height,
              pixels: Dk.getImageData(0, 0, ek.width, ek.height).data
            }
          }
        })), ek.catch((() => {
          rk.delete(kk)
        })), rk.set(kk, ek)), ek
      }(kk), bk = document.createElement("canvas");
      return bk.width = ek, bk.height = ek, bk.getContext("2d").putImageData(new ImageData((0, fk.j)(Dk, Sk, ek, ik), ek, ek), 0, 0), bk.toDataURL()
    }

    function xk(kk, ek, ik) {
      const fk = `${ek}|${ik}|${kk}`;
      let Sk = Pk.get(fk);
      return Sk || (Sk = (0, Dk.i)(kk, (() => Mk(kk)), ek, ik).then((Dk => null !== Dk && void 0 !== Dk ? Dk : Kk(kk, ek, ik))), Sk.catch((() => {
        Pk.delete(fk)
      })), Pk.set(fk, Sk)), Sk
    }
  },
  35933: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => dk,
      i: () => Vk,
      j: () => yk
    });
    var Dk = ik(284),
      fk = ik(99);
    const Sk = new(ik(35939).d)(new URL(ik.p + ik.u(3), ik.b), {
      name: "blockIconWorker",
      type: "module"
    });
    var bk = ik(1756),
      rk = ik(2098);
    const Pk = 1e4,
      mk = 3e4;
    let Mk = null,
      Kk = null,
      xk = null,
      nk = !1,
      Uk = 0;
    const Hk = new Map;
    let wk = null;
    const lk = new Map,
      pk = new Map;

    function yk(kk) {
      const ek = new Promise(((ek, ik) => {
        const Dk = new Image;
        Dk.crossOrigin = "anonymous", Dk.fetchPriority = "high", Dk.onload = () => {
          ek(Dk)
        }, Dk.onerror = () => {
          ik(new Error(`A block icon's texture did not load: ${kk.slice(0,100)}`))
        }, Dk.src = kk
      }));
      return (0, rk.c)(ek)
    }

    function Yk(kk) {
      var ek, ik;
      nk || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${kk}`), nk = !0, null === (ek = Mk) || void 0 === ek || ek.terminate(), Mk = null, Kk = null, lk.clear(), pk.clear();
      for (const Dk of Hk.values()) Dk(null);
      Hk.clear(), null === (ik = wk) || void 0 === ik || ik()
    }

    function Lk() {
      return xk ??= async function() {
        if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
        if ("page" === Dk.e.ios_icon_worker_v1 && (0, fk.isWebKit)()) return;
        try {
          Mk = await async function() {
            return await Sk.ready(), Sk.start()
          }()
        } catch (rk) {
          return void Yk(`did not start (${String(rk)})`)
        }
        let kk = () => {};
        const ek = new Promise((ek => {
          kk = ek
        }));
        Mk.onmessage = ek => {
          let {
            data: ik
          } = ek;
          if ("started" === ik.type) Kk = Mk, kk();
          else if ("failed" === ik.type) Yk(`failed a draw (${ik.message})`);
          else {
            var Dk, fk;
            null === (Dk = Hk.get(ik.id)) || void 0 === Dk || Dk(ik.url), Hk.delete(ik.id), null === (fk = wk) || void 0 === fk || fk()
          }
        }, Mk.onerror = ek => {
          ek.preventDefault(), Yk(`stopped (${ek.message||"its script did not load or run"})`), kk()
        };
        const ik = `did not start in ${mk/1e3} s`;
        await (0, bk.l)(ek, mk, ik).catch((() => {
          Yk(ik)
        }))
      }(), xk
    }

    function Ck() {
      if (null !== wk || 0 === Hk.size) return;
      const kk = new Promise((kk => {
          wk = kk
        })),
        ek = `did not answer in ${Pk/1e3} s`;
      (0, bk.l)(kk, Pk, ek).then((() => {
        wk = null, Ck()
      }), (() => {
        wk = null, Yk(ek)
      }))
    }

    function Ak(kk, ek) {
      let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      kk.postMessage(ek, ik)
    }

    function jk(kk, ek, ik, Dk) {
      let fk = ek.get(ik);
      return void 0 === fk && (fk = Dk().then((async ek => {
        let {
          image: ik,
          request: Dk
        } = ek;
        try {
          const ek = await createImageBitmap(ik);
          Ak(kk, Dk(ek), [ek])
        } catch (fk) {
          Yk(`could not take an image (${String(fk)})`)
        }
      })), fk.catch((() => {
        ek.get(ik) === fk && ek.delete(ik)
      })), ek.set(ik, fk)), fk
    }
    async function sk(kk, ek) {
      Lk();
      const ik = Kk;
      if (null === ik) return null;
      if (await kk(ik), Kk !== ik) return null;
      const Dk = ++Uk;
      return new Promise((kk => {
        Hk.set(Dk, kk), Ak(ik, ek(Dk)), Ck()
      }))
    }

    function dk(kk, ek, ik) {
      return sk((ek => Promise.all([kk.top, kk.left, kk.right].map((kk => function(kk, ek) {
        return jk(kk, lk, ek, (async () => ({
          image: await yk(ek),
          request: kk => ({
            type: "texture",
            url: ek,
            bitmap: kk
          })
        })))
      }(ek, kk))))), (Dk => ({
        type: "draw",
        id: Dk,
        ...kk,
        size: ek,
        outlineWidth: ik
      })))
    }

    function Vk(kk, ek, ik, Dk) {
      return sk((ik => function(kk, ek, ik) {
        return jk(kk, pk, ek, (async () => {
          const {
            texture: kk,
            ...Dk
          } = await ik();
          return {
            image: await yk(kk),
            request: kk => ({
              type: "model",
              name: ek,
              bitmap: kk,
              geometry: Dk
            })
          }
        }))
      }(ik, kk, ek)), (ek => ({
        type: "drawModel",
        id: ek,
        name: kk,
        size: ik,
        outlineWidth: Dk
      })))
    }
  },
  35931: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Sk,
      f: () => rk,
      j: () => bk
    });
    const Dk = 1 / 32,
      fk = [15, 15, 15],
      Sk = {
        top: 1,
        left: .85,
        right: .7
      };

    function bk(kk, ek, ik, fk) {
      const {
        vertices: Sk,
        uvs: bk,
        indices: Pk,
        shades: mk
      } = kk, Mk = ik * Dk, Kk = ik - 2 * Mk, xk = new Float32Array(Sk.length);
      for (let Dk = 0; Dk < Sk.length; Dk += 3) xk[Dk] = Mk + Sk[Dk] * Kk, xk[Dk + 1] = Mk + Sk[Dk + 1] * Kk, xk[Dk + 2] = Sk[Dk + 2];
      const nk = new Float32Array(ik * ik).fill(-1 / 0),
        Uk = new Uint8ClampedArray(ik * ik * 4),
        Hk = 255 * kk.alphaCutoff;
      for (let Dk = 0; Dk < Pk.length; Dk += 3) {
        const [kk, fk, Sk] = [Pk[Dk], Pk[Dk + 1], Pk[Dk + 2]], [rk, Mk, Kk] = [3 * kk, 3 * fk, 3 * Sk], [wk, lk, pk, yk, Yk, Lk] = [xk[rk], xk[rk + 1], xk[Mk], xk[Mk + 1], xk[Kk], xk[Kk + 1]], Ck = (pk - wk) * (Lk - lk) - (Yk - wk) * (yk - lk);
        if (Math.abs(Ck) < 1e-9) continue;
        const Ak = mk[Dk / 3],
          [jk, sk, dk, Vk, Fk, uk] = [bk[2 * kk], bk[2 * kk + 1], bk[2 * fk], bk[2 * fk + 1], bk[2 * Sk], bk[2 * Sk + 1]],
          qk = Math.max(0, Math.floor(Math.min(wk, pk, Yk))),
          Ik = Math.min(ik - 1, Math.ceil(Math.max(wk, pk, Yk))),
          zk = Math.max(0, Math.floor(Math.min(lk, yk, Lk))),
          Qk = Math.min(ik - 1, Math.ceil(Math.max(lk, yk, Lk)));
        for (let Dk = zk; Dk <= Qk; Dk++)
          for (let kk = qk; kk <= Ik; kk++) {
            const [fk, Sk] = [kk + .5, Dk + .5], bk = ((fk - wk) * (Lk - lk) - (Yk - wk) * (Sk - lk)) / Ck, Pk = ((pk - wk) * (Sk - lk) - (fk - wk) * (yk - lk)) / Ck, mk = 1 - bk - Pk;
            if (mk < 0 || bk < 0 || Pk < 0) continue;
            const qk = mk * xk[rk + 2] + bk * xk[Mk + 2] + Pk * xk[Kk + 2],
              Ik = Dk * ik + kk;
            if (qk <= nk[Ik]) continue;
            const zk = Math.max(0, Math.min(ek.width - 1, Math.floor((mk * jk + bk * dk + Pk * Fk) * ek.width))),
              Qk = 4 * (Math.max(0, Math.min(ek.height - 1, Math.floor((mk * sk + bk * Vk + Pk * uk) * ek.height))) * ek.width + zk);
            ek.pixels[Qk + 3] < Hk || (nk[Ik] = qk, Uk[4 * Ik] = ek.pixels[Qk] * Ak, Uk[4 * Ik + 1] = ek.pixels[Qk + 1] * Ak, Uk[4 * Ik + 2] = ek.pixels[Qk + 2] * Ak, Uk[4 * Ik + 3] = 255)
          }
      }
      return rk(Uk, ik, fk), Uk
    }

    function rk(kk, ek, ik) {
      let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ek => 0 !== kk[4 * ek + 3];
      const Sk = (kk, ik) => kk < 0 || ik < 0 || kk >= ek || ik >= ek || !Dk(ik * ek + kk),
        bk = [];
      for (let fk = 0; fk < ek; fk++)
        for (let kk = 0; kk < ek; kk++)
          if (!Sk(kk, fk)) kk: for (let Dk = -ik; Dk <= ik; Dk++) {
            const rk = ik - Math.abs(Dk);
            for (let ik = -rk; ik <= rk; ik++)
              if (Sk(kk + ik, fk + Dk)) {
                bk.push(fk * ek + kk);
                break kk
              }
          }
      for (const rk of bk) kk.set(fk, 4 * rk), kk[4 * rk + 3] = 255
    }
  },
  35939: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => fk
    });
    const Dk = {
      wait: function(kk) {
        return new Promise((ek => {
          setTimeout(ek, kk)
        }))
      },
      stallMs: 2e4
    };
    class fk {
      constructor(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Dk;
        this.url = kk, this.options = ek, this.timing = ik, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = kk
      }
      ready() {
        if (null === this.fetched) {
          const kk = new AbortController;
          this.fetchAbort = kk, this.fetched = this.fetchWithRetries(kk.signal).then((ek => (this.fetchAbort === kk && (this.fetchAbort = null), ek)))
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
        for (let ek = 0;; ek++) {
          const ik = new URL(this.url);
          if (ek > 0 && ik.searchParams.set("cache-bust", `${Date.now()}-${ek}`), await this.fetchWhole(ik, kk)) return this.scriptUrl = ik, !0;
          if (ek >= 3 || kk.aborted) return !1;
          if (await this.timing.wait(500 * 2 ** ek), kk.aborted) return !1
        }
      }
      async fetchWhole(kk, ek) {
        const ik = new AbortController;
        let Dk;
        const fk = () => {
            clearTimeout(Dk), Dk = setTimeout((() => {
              ik.abort()
            }), this.timing.stallMs)
          },
          Sk = () => {
            ik.abort()
          };
        ek.addEventListener("abort", Sk, {
          once: !0
        }), fk();
        try {
          var bk;
          const ek = await fetch(kk, {
            signal: ik.signal
          });
          if (!ek.ok) return !1;
          const Dk = null === (bk = ek.body) || void 0 === bk ? void 0 : bk.getReader();
          if (!Dk) return !1;
          for (;;) {
            const {
              done: kk
            } = await Dk.read();
            if (kk) return !0;
            fk()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(Dk), ek.removeEventListener("abort", Sk)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);