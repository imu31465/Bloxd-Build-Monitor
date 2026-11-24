export const id = 221;
export const ids = [221];
export const modules = {
  36622: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => qp,
      f: () => Mp,
      h: () => Hp
    });
    var Op = cp(272),
      op = cp(104);
    const Ip = new(cp(36630).b)(new URL(cp.p + cp.u(3), cp.b), {
      name: "blockIconWorker",
      type: "module"
    });
    var Sp = cp(1819),
      xp = cp(2179);
    const Lp = 1e4,
      Yp = 3e4;
    let Dp = null,
      Ap = null,
      Pp = null,
      Wp = !1,
      yp = 0;
    const Up = new Map;
    let wp = null;
    const vp = new Map,
      tp = new Map;

    function Hp(pp) {
      const ip = new Promise(((ip, cp) => {
        const Op = new Image;
        Op.crossOrigin = "anonymous", Op.fetchPriority = "high", Op.onload = () => {
          ip(Op)
        }, Op.onerror = () => {
          cp(new Error(`A block icon's texture did not load: ${pp.slice(0,100)}`))
        }, Op.src = pp
      }));
      return (0, xp.g)(ip)
    }

    function dp(pp) {
      var ip, cp;
      Wp || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${pp}`), Wp = !0, null === (ip = Dp) || void 0 === ip || ip.terminate(), Dp = null, Ap = null, vp.clear(), tp.clear();
      for (const Op of Up.values()) Op(null);
      Up.clear(), null === (cp = wp) || void 0 === cp || cp()
    }

    function ep() {
      return Pp ??= async function() {
        if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
        if ("page" === Op.d.ios_icon_worker_v1 && (0, op.isWebKit)()) return;
        try {
          Dp = await async function() {
            return await Ip.ready(), Ip.start()
          }()
        } catch (xp) {
          return void dp(`did not start (${String(xp)})`)
        }
        let pp = () => {};
        const ip = new Promise((ip => {
          pp = ip
        }));
        Dp.onmessage = ip => {
          let {
            data: cp
          } = ip;
          if ("started" === cp.type) Ap = Dp, pp();
          else if ("failed" === cp.type) dp(`failed a draw (${cp.message})`);
          else {
            var Op, op;
            null === (Op = Up.get(cp.id)) || void 0 === Op || Op(cp.url), Up.delete(cp.id), null === (op = wp) || void 0 === op || op()
          }
        }, Dp.onerror = ip => {
          ip.preventDefault(), dp(`stopped (${ip.message||"its script did not load or run"})`), pp()
        };
        const cp = `did not start in ${Yp/1e3} s`;
        await (0, Sp.k)(ip, Yp, cp).catch((() => {
          dp(cp)
        }))
      }(), Pp
    }

    function jp() {
      if (null !== wp || 0 === Up.size) return;
      const pp = new Promise((pp => {
          wp = pp
        })),
        ip = `did not answer in ${Lp/1e3} s`;
      (0, Sp.k)(pp, Lp, ip).then((() => {
        wp = null, jp()
      }), (() => {
        wp = null, dp(ip)
      }))
    }

    function kp(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      pp.postMessage(ip, cp)
    }

    function mp(pp, ip, cp, Op) {
      let op = ip.get(cp);
      return void 0 === op && (op = Op().then((async ip => {
        let {
          image: cp,
          request: Op
        } = ip;
        try {
          const ip = await createImageBitmap(cp);
          kp(pp, Op(ip), [ip])
        } catch (op) {
          dp(`could not take an image (${String(op)})`)
        }
      })), op.catch((() => {
        ip.get(cp) === op && ip.delete(cp)
      })), ip.set(cp, op)), op
    }
    async function Rp(pp, ip) {
      ep();
      const cp = Ap;
      if (null === cp) return null;
      if (await pp(cp), Ap !== cp) return null;
      const Op = ++yp;
      return new Promise((pp => {
        Up.set(Op, pp), kp(cp, ip(Op)), jp()
      }))
    }

    function qp(pp, ip, cp) {
      return Rp((ip => Promise.all([pp.top, pp.left, pp.right].map((pp => function(pp, ip) {
        return mp(pp, vp, ip, (async () => ({
          image: await Hp(ip),
          request: pp => ({
            type: "texture",
            url: ip,
            bitmap: pp
          })
        })))
      }(ip, pp))))), (Op => ({
        type: "draw",
        id: Op,
        ...pp,
        size: ip,
        outlineWidth: cp
      })))
    }

    function Mp(pp, ip, cp, Op) {
      return Rp((cp => function(pp, ip, cp) {
        return mp(pp, tp, ip, (async () => {
          const {
            texture: pp,
            ...Op
          } = await cp();
          return {
            image: await Hp(pp),
            request: pp => ({
              type: "model",
              name: ip,
              bitmap: pp,
              geometry: Op
            })
          }
        }))
      }(cp, pp, ip)), (ip => ({
        type: "drawModel",
        id: ip,
        name: pp,
        size: cp,
        outlineWidth: Op
      })))
    }
  },
  36618: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Op,
      d: () => Lp,
      g: () => Sp,
      k: () => Pp,
      m: () => Yp
    });
    const Op = {
        across: Math.SQRT1_2,
        down: Math.SQRT1_2 / 2,
        up: Math.sqrt(3) / 2
      },
      op = .6,
      Ip = {
        width: 2 * Op.across,
        height: 2 * Op.down + Op.up
      };

    function Sp(pp, ip) {
      const cp = ip > 0 ? ip + 1 : 0,
        Sp = pp * op - ip / Op.across;
      return Math.max(0, Math.min(Sp, (pp - 2 * cp) / Ip.height))
    }
    const xp = [15, 15, 15],
      Lp = {
        top: 1,
        left: .85,
        right: .7
      };

    function Yp(pp, ip, cp, Op) {
      const {
        vertices: op,
        uvs: xp,
        indices: Lp,
        shades: Yp
      } = pp, Dp = function(pp, ip) {
        const cp = Sp(pp, ip),
          Op = Ip.width * cp,
          op = Ip.height * cp;
        return {
          left: (pp - Op) / 2,
          top: (pp - op) / 2,
          width: Op,
          height: op
        }
      }(cp, Op), Ap = new Float32Array(op.length);
      for (let Ip = 0; Ip < op.length; Ip += 3) Ap[Ip] = Dp.left + op[Ip] * Dp.width, Ap[Ip + 1] = Dp.top + op[Ip + 1] * Dp.height, Ap[Ip + 2] = op[Ip + 2];
      const Wp = new Float32Array(cp * cp).fill(-1 / 0),
        yp = new Uint8ClampedArray(cp * cp * 4),
        Up = 255 * pp.alphaCutoff;
      for (let Ip = 0; Ip < Lp.length; Ip += 3) {
        const [pp, Op, op] = [Lp[Ip], Lp[Ip + 1], Lp[Ip + 2]], [Sp, Dp, Pp] = [3 * pp, 3 * Op, 3 * op], [wp, vp, tp, Hp, dp, ep] = [Ap[Sp], Ap[Sp + 1], Ap[Dp], Ap[Dp + 1], Ap[Pp], Ap[Pp + 1]], jp = (tp - wp) * (ep - vp) - (dp - wp) * (Hp - vp);
        if (Math.abs(jp) < 1e-9) continue;
        const kp = Yp[Ip / 3],
          [mp, Rp, qp, Mp, Cp, Ep] = [xp[2 * pp], xp[2 * pp + 1], xp[2 * Op], xp[2 * Op + 1], xp[2 * op], xp[2 * op + 1]],
          Xp = Math.max(0, Math.floor(Math.min(wp, tp, dp))),
          lp = Math.min(cp - 1, Math.ceil(Math.max(wp, tp, dp))),
          Qp = Math.max(0, Math.floor(Math.min(vp, Hp, ep))),
          Jp = Math.min(cp - 1, Math.ceil(Math.max(vp, Hp, ep)));
        for (let Ip = Qp; Ip <= Jp; Ip++)
          for (let pp = Xp; pp <= lp; pp++) {
            const [Op, op] = [pp + .5, Ip + .5], xp = ((Op - wp) * (ep - vp) - (dp - wp) * (op - vp)) / jp, Lp = ((tp - wp) * (op - vp) - (Op - wp) * (Hp - vp)) / jp, Yp = 1 - xp - Lp;
            if (Yp < 0 || xp < 0 || Lp < 0) continue;
            const Xp = Yp * Ap[Sp + 2] + xp * Ap[Dp + 2] + Lp * Ap[Pp + 2],
              lp = Ip * cp + pp;
            if (Xp <= Wp[lp]) continue;
            const Qp = Math.max(0, Math.min(ip.width - 1, Math.floor((Yp * mp + xp * qp + Lp * Cp) * ip.width))),
              Jp = 4 * (Math.max(0, Math.min(ip.height - 1, Math.floor((Yp * Rp + xp * Mp + Lp * Ep) * ip.height))) * ip.width + Qp);
            ip.pixels[Jp + 3] < Up || (Wp[lp] = Xp, yp[4 * lp] = ip.pixels[Jp] * kp, yp[4 * lp + 1] = ip.pixels[Jp + 1] * kp, yp[4 * lp + 2] = ip.pixels[Jp + 2] * kp, yp[4 * lp + 3] = 255)
          }
      }
      return Pp(yp, cp, Op), yp
    }
    let Dp = NaN,
      Ap = new Int32Array(0);

    function Pp(pp, ip, cp) {
      let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ip => 0 !== pp[4 * ip + 3];
      const op = new Uint8Array(ip * ip);
      for (let xp = 0; xp < ip * ip; xp++) op[xp] = Op(xp) ? 1 : 0;
      const Ip = (pp, cp) => pp >= 0 && cp >= 0 && pp < ip && cp < ip && 0 === op[cp * ip + pp],
        Sp = new Float32Array(ip * ip).fill(1 / 0),
        Lp = function(pp) {
          if (pp !== Dp) {
            const ip = Math.ceil(pp + 1),
              cp = [];
            for (let Op = -ip; Op <= ip; Op++)
              for (let op = -ip; op <= ip; op++) {
                const ip = op * op + Op * Op;
                ip > 0 && ip < (pp + 1) ** 2 && cp.push(op, Op, ip)
              }
            Dp = pp, Ap = Int32Array.from(cp)
          }
          return Ap
        }(cp);
      for (let xp = 0; xp < ip; xp++)
        for (let pp = 0; pp < ip; pp++) {
          if (1 === op[xp * ip + pp] && (Ip(pp - 1, xp) || Ip(pp + 1, xp) || Ip(pp, xp - 1) || Ip(pp, xp + 1)))
            for (let cp = 0; cp < Lp.length; cp += 3) {
              const Op = pp + Lp[cp],
                op = xp + Lp[cp + 1];
              if (Op >= 0 && op >= 0 && Op < ip && op < ip) {
                const pp = op * ip + Op;
                Sp[pp] = Math.min(Sp[pp], Lp[cp + 2])
              }
            }
        }
      for (let Yp = 0; Yp < ip * ip; Yp++) 1 !== op[Yp] && Sp[Yp] !== 1 / 0 && (pp.set(xp, 4 * Yp), pp[4 * Yp + 3] = Math.round(255 * Math.min(1, cp + 1 - Math.sqrt(Sp[Yp]))))
    }
  },
  36630: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => op
    });
    const Op = {
      wait: function(pp) {
        return new Promise((ip => {
          setTimeout(ip, pp)
        }))
      },
      stallMs: 2e4
    };
    class op {
      constructor(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Op;
        this.url = pp, this.options = ip, this.timing = cp, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = pp
      }
      ready() {
        if (null === this.fetched) {
          const pp = new AbortController;
          this.fetchAbort = pp, this.fetched = this.fetchWithRetries(pp.signal).then((ip => (this.fetchAbort === pp && (this.fetchAbort = null), ip)))
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
      async fetchWithRetries(pp) {
        for (let ip = 0;; ip++) {
          const cp = new URL(this.url);
          if (ip > 0 && cp.searchParams.set("cache-bust", `${Date.now()}-${ip}`), await this.fetchWhole(cp, pp)) return this.scriptUrl = cp, !0;
          if (ip >= 3 || pp.aborted) return !1;
          if (await this.timing.wait(500 * 2 ** ip), pp.aborted) return !1
        }
      }
      async fetchWhole(pp, ip) {
        const cp = new AbortController;
        let Op;
        const op = () => {
            clearTimeout(Op), Op = setTimeout((() => {
              cp.abort()
            }), this.timing.stallMs)
          },
          Ip = () => {
            cp.abort()
          };
        ip.addEventListener("abort", Ip, {
          once: !0
        }), op();
        try {
          var Sp;
          const ip = await fetch(pp, {
            signal: cp.signal
          });
          if (!ip.ok) return !1;
          const Op = null === (Sp = ip.body) || void 0 === Sp ? void 0 : Sp.getReader();
          if (!Op) return !1;
          for (;;) {
            const {
              done: pp
            } = await Op.read();
            if (pp) return !0;
            op()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(Op), ip.removeEventListener("abort", Ip)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);