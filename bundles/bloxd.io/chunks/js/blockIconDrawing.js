export const id = 2;
export const ids = [2];
export const modules = {
  36551: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      drawBlockIcon: () => vd,
      drawBlockIconUrl: () => xd,
      getDrawnBlockIcon: () => Gd
    });
    var pd = kd(36557);
    const Nd = Math.SQRT1_2,
      Wd = Math.sqrt(3) / 2,
      Pd = .5,
      Zd = {
        boxes: [
          [0, 0, 0, 1, 1, 1]
        ],
        cropFaces: !1
      },
      gd = {
        boxes: [
          [0, 0, 0, 1, .5, 1]
        ],
        cropFaces: !1
      },
      Cd = {
        boxes: [
          [0, 0, 0, 1, .5, 1],
          [0, .5, 0, .5, 1, 1]
        ],
        cropFaces: !0
      };
    const Kd = 1e-6;

    function od(dd, Jd, kd, pd) {
      let {
        origin: Nd,
        across: Wd,
        down: Pd,
        texture: Zd,
        rect: [gd, Cd, od, ld],
        shade: Qd
      } = pd;
      const Ld = Wd.x * Pd.y - Wd.y * Pd.x;
      if (Math.abs(Ld) < 1e-9) return;
      const Od = [Nd.x, Nd.x + Wd.x, Nd.x + Pd.x, Nd.x + Wd.x + Pd.x],
        ed = [Nd.y, Nd.y + Wd.y, Nd.y + Pd.y, Nd.y + Wd.y + Pd.y],
        Rd = Math.max(0, Math.floor(Math.min(...Od))),
        Id = Math.min(kd - 1, Math.ceil(Math.max(...Od))),
        Gd = Math.max(0, Math.floor(Math.min(...ed))),
        vd = Math.min(kd - 1, Math.ceil(Math.max(...ed)));
      for (let xd = Gd; xd <= vd; xd++)
        for (let pd = Rd; pd <= Id; pd++) {
          const Od = pd + .5 - Nd.x,
            ed = xd + .5 - Nd.y,
            Rd = (Od * Pd.y - ed * Pd.x) / Ld,
            Id = (Wd.x * ed - Wd.y * Od) / Ld;
          if (Rd < -Kd || Rd > 1 + Kd || Id < -Kd || Id > 1 + Kd) continue;
          const Gd = xd * kd + pd;
          Jd[Gd] = 1;
          const vd = gd + Math.min(Math.max(Rd, 0), 1) * (od - gd),
            qd = Cd + Math.min(Math.max(Id, 0), 1) * (ld - Cd),
            Bd = Math.min(Zd.width - 1, Math.floor(vd * Zd.width)),
            sd = 4 * (Math.min(Zd.height - 1, Math.floor(qd * Zd.height)) * Zd.width + Bd),
            ad = Zd.pixels[sd + 3] / 255;
          if (0 === ad) continue;
          const Md = 4 * Gd,
            Fd = dd[Md + 3] / 255 * (1 - ad),
            Yd = ad + Fd;
          for (let Jd = 0; Jd < 3; Jd++) dd[Md + Jd] = (Zd.pixels[sd + Jd] * Qd * ad + dd[Md + Jd] * Fd) / Yd;
          dd[Md + 3] = 255 * Yd
        }
    }
    var ld = kd(36559);
    const Qd = new Map,
      Ld = new Map,
      Od = new Map,
      ed = new Map;

    function Rd(dd, Jd, kd) {
      return `${Jd}|${kd}|${dd}`
    }

    function Id(dd, Jd, kd) {
      let pd = dd.get(Jd);
      return void 0 === pd && (pd = kd().catch((kd => {
        throw dd.delete(Jd), kd
      })), dd.set(Jd, pd)), pd
    }

    function Gd(dd, Jd) {
      let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Ld.get(Rd(dd, Jd, kd))
    }

    function vd(dd, Jd, kd, pd) {
      const Nd = Rd(dd, Jd, kd);
      return Id(Qd, Nd, (async () => {
        const Wd = await Bd(pd(dd), Jd, qd(kd));
        return Ld.set(Nd, Wd), Wd
      }))
    }

    function xd(dd, Jd, kd, pd) {
      return Id(Od, Rd(dd, Jd, kd), (async () => {
        var Nd;
        const Wd = pd(dd),
          Pd = qd(kd);
        return null !== (Nd = await (0, ld.d)(Wd, Jd, Pd)) && void 0 !== Nd ? Nd : (await Bd(Wd, Jd, Pd)).toDataURL()
      }))
    }

    function qd(dd) {
      return Math.max(1, Math.round(dd))
    }
    async function Bd(dd, Jd, kd) {
      let {
        top: Kd,
        left: ld,
        right: Qd,
        itemType: Ld
      } = dd;
      const [Od, ed, Rd] = await Promise.all([sd(Kd), sd(ld), sd(Qd)]), Id = function(dd, Jd, kd, Zd) {
        const gd = .6 * kd,
          Cd = gd * Nd,
          Kd = gd * Nd * Pd,
          ld = gd * Wd,
          Qd = Math.max(...Jd.boxes.map((dd => dd[4]))),
          Ld = Cd / 2 + (kd - Cd) / 2,
          Od = Kd + (kd - Kd - Kd - Qd * ld) / 2,
          ed = (dd, Jd, kd) => ({
            x: Ld + (dd - kd) * Cd,
            y: Od - Kd + (dd + kd) * Kd + (Qd - Jd) * ld
          }),
          Rd = (dd, kd, pd, Nd, Wd, Pd) => ({
            origin: dd,
            across: {
              x: kd.x - dd.x,
              y: kd.y - dd.y
            },
            down: {
              x: pd.x - dd.x,
              y: pd.y - dd.y
            },
            texture: Nd,
            rect: Jd.cropFaces ? Wd : [0, 0, 1, 1],
            shade: Pd
          }),
          Id = new Uint8ClampedArray(kd * kd * 4),
          Gd = new Uint8Array(kd * kd),
          vd = pd.d;
        for (const [pd, Nd, Wd, Pd, xd, qd] of Jd.boxes) {
          const Jd = Rd(ed(Pd, xd, qd), ed(Pd, xd, Wd), ed(Pd, Nd, qd), dd.right, [1 - qd, 1 - xd, 1 - Wd, 1 - Nd], vd.right),
            Zd = Rd(ed(pd, xd, qd), ed(Pd, xd, qd), ed(pd, Nd, qd), dd.left, [pd, 1 - xd, Pd, 1 - Nd], vd.left),
            gd = Rd(ed(pd, xd, Wd), ed(Pd, xd, Wd), ed(pd, xd, qd), dd.top, [pd, Wd, Pd, qd], vd.top);
          for (const dd of [Jd, Zd, gd]) od(Id, Gd, kd, dd)
        }
        return (0, pd.f)(Id, kd, Zd, (dd => 1 === Gd[dd])), Id
      }({
        top: Od,
        left: ed,
        right: Rd
      }, function(dd) {
        return "SlabBlock" === dd ? gd : "StairsBlock" === dd ? Cd : Zd
      }(Ld), Jd, kd), Gd = document.createElement("canvas");
      Gd.width = Jd, Gd.height = Jd;
      const vd = Gd.getContext("2d");
      if (!vd) throw new Error("Failed to get 2D context");
      return vd.putImageData(new ImageData(Id, Jd, Jd), 0, 0), Gd
    }

    function sd(dd) {
      return Id(ed, dd, (async () => {
        const Jd = await (0, ld.i)(dd),
          kd = document.createElement("canvas");
        kd.width = Jd.width, kd.height = Jd.height;
        const pd = kd.getContext("2d");
        if (!pd) throw new Error("Failed to get 2D context");
        return pd.drawImage(Jd, 0, 0), {
          width: Jd.width,
          height: Jd.height,
          pixels: pd.getImageData(0, 0, Jd.width, Jd.height).data
        }
      }))
    }
  },
  36559: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Md,
      e: () => Fd,
      i: () => Gd
    });
    var pd = kd(284),
      Nd = kd(95);
    const Wd = new(kd(36564).c)(new URL(kd.p + kd.u(3), kd.b), {
      name: "blockIconWorker",
      type: "module"
    });
    var Pd = kd(1797),
      Zd = kd(3054);
    const gd = 1e4,
      Cd = 3e4;
    let Kd = null,
      od = null,
      ld = null,
      Qd = !1,
      Ld = 0;
    const Od = new Map;
    let ed = null;
    const Rd = new Map,
      Id = new Map;

    function Gd(dd) {
      const Jd = new Promise(((Jd, kd) => {
        const pd = new Image;
        pd.crossOrigin = "anonymous", pd.fetchPriority = "high", pd.onload = () => {
          Jd(pd)
        }, pd.onerror = () => {
          kd(new Error(`A block icon's texture did not load: ${dd.slice(0,100)}`))
        }, pd.src = dd
      }));
      return (0, Zd.d)(Jd)
    }

    function vd(dd) {
      var Jd, kd;
      Qd || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${dd}`), Qd = !0, null === (Jd = Kd) || void 0 === Jd || Jd.terminate(), Kd = null, od = null, Rd.clear(), Id.clear();
      for (const pd of Od.values()) pd(null);
      Od.clear(), null === (kd = ed) || void 0 === kd || kd()
    }

    function xd() {
      return ld ??= async function() {
        if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
        if ("page" === pd.c.ios_icon_worker_v1 && (0, Nd.isWebKit)()) return;
        try {
          Kd = await async function() {
            return await Wd.ready(), Wd.start()
          }()
        } catch (Zd) {
          return void vd(`did not start (${String(Zd)})`)
        }
        let dd = () => {};
        const Jd = new Promise((Jd => {
          dd = Jd
        }));
        Kd.onmessage = Jd => {
          let {
            data: kd
          } = Jd;
          if ("started" === kd.type) od = Kd, dd();
          else if ("failed" === kd.type) vd(`failed a draw (${kd.message})`);
          else {
            var pd, Nd;
            null === (pd = Od.get(kd.id)) || void 0 === pd || pd(kd.url), Od.delete(kd.id), null === (Nd = ed) || void 0 === Nd || Nd()
          }
        }, Kd.onerror = Jd => {
          Jd.preventDefault(), vd(`stopped (${Jd.message||"its script did not load or run"})`), dd()
        };
        const kd = `did not start in ${Cd/1e3} s`;
        await (0, Pd.m)(Jd, Cd, kd).catch((() => {
          vd(kd)
        }))
      }(), ld
    }

    function qd() {
      if (null !== ed || 0 === Od.size) return;
      const dd = new Promise((dd => {
          ed = dd
        })),
        Jd = `did not answer in ${gd/1e3} s`;
      (0, Pd.m)(dd, gd, Jd).then((() => {
        ed = null, qd()
      }), (() => {
        ed = null, vd(Jd)
      }))
    }

    function Bd(dd, Jd) {
      let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      dd.postMessage(Jd, kd)
    }

    function sd(dd, Jd, kd, pd) {
      let Nd = Jd.get(kd);
      return void 0 === Nd && (Nd = pd().then((async Jd => {
        let {
          image: kd,
          request: pd
        } = Jd;
        try {
          const Jd = await createImageBitmap(kd);
          Bd(dd, pd(Jd), [Jd])
        } catch (Nd) {
          vd(`could not take an image (${String(Nd)})`)
        }
      })), Nd.catch((() => {
        Jd.get(kd) === Nd && Jd.delete(kd)
      })), Jd.set(kd, Nd)), Nd
    }
    async function ad(dd, Jd) {
      xd();
      const kd = od;
      if (null === kd) return null;
      if (await dd(kd), od !== kd) return null;
      const pd = ++Ld;
      return new Promise((dd => {
        Od.set(pd, dd), Bd(kd, Jd(pd)), qd()
      }))
    }

    function Md(dd, Jd, kd) {
      return ad((Jd => Promise.all([dd.top, dd.left, dd.right].map((dd => function(dd, Jd) {
        return sd(dd, Rd, Jd, (async () => ({
          image: await Gd(Jd),
          request: dd => ({
            type: "texture",
            url: Jd,
            bitmap: dd
          })
        })))
      }(Jd, dd))))), (pd => ({
        type: "draw",
        id: pd,
        ...dd,
        size: Jd,
        outlineWidth: kd
      })))
    }

    function Fd(dd, Jd, kd, pd) {
      return ad((kd => function(dd, Jd, kd) {
        return sd(dd, Id, Jd, (async () => {
          const {
            texture: dd,
            ...pd
          } = await kd();
          return {
            image: await Gd(dd),
            request: dd => ({
              type: "model",
              name: Jd,
              bitmap: dd,
              geometry: pd
            })
          }
        }))
      }(kd, dd, Jd)), (Jd => ({
        type: "drawModel",
        id: Jd,
        name: dd,
        size: kd,
        outlineWidth: pd
      })))
    }
  },
  36557: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Wd,
      f: () => Zd,
      j: () => Pd
    });
    const pd = 1 / 32,
      Nd = [15, 15, 15],
      Wd = {
        top: 1,
        left: .85,
        right: .7
      };

    function Pd(dd, Jd, kd, Nd) {
      const {
        vertices: Wd,
        uvs: Pd,
        indices: gd,
        shades: Cd
      } = dd, Kd = kd * pd, od = kd - 2 * Kd, ld = new Float32Array(Wd.length);
      for (let pd = 0; pd < Wd.length; pd += 3) ld[pd] = Kd + Wd[pd] * od, ld[pd + 1] = Kd + Wd[pd + 1] * od, ld[pd + 2] = Wd[pd + 2];
      const Qd = new Float32Array(kd * kd).fill(-1 / 0),
        Ld = new Uint8ClampedArray(kd * kd * 4),
        Od = 255 * dd.alphaCutoff;
      for (let pd = 0; pd < gd.length; pd += 3) {
        const [dd, Nd, Wd] = [gd[pd], gd[pd + 1], gd[pd + 2]], [Zd, Kd, od] = [3 * dd, 3 * Nd, 3 * Wd], [ed, Rd, Id, Gd, vd, xd] = [ld[Zd], ld[Zd + 1], ld[Kd], ld[Kd + 1], ld[od], ld[od + 1]], qd = (Id - ed) * (xd - Rd) - (vd - ed) * (Gd - Rd);
        if (Math.abs(qd) < 1e-9) continue;
        const Bd = Cd[pd / 3],
          [sd, ad, Md, Fd, Yd, md] = [Pd[2 * dd], Pd[2 * dd + 1], Pd[2 * Nd], Pd[2 * Nd + 1], Pd[2 * Wd], Pd[2 * Wd + 1]],
          bd = Math.max(0, Math.floor(Math.min(ed, Id, vd))),
          Sd = Math.min(kd - 1, Math.ceil(Math.max(ed, Id, vd))),
          jd = Math.max(0, Math.floor(Math.min(Rd, Gd, xd))),
          Xd = Math.min(kd - 1, Math.ceil(Math.max(Rd, Gd, xd)));
        for (let pd = jd; pd <= Xd; pd++)
          for (let dd = bd; dd <= Sd; dd++) {
            const [Nd, Wd] = [dd + .5, pd + .5], Pd = ((Nd - ed) * (xd - Rd) - (vd - ed) * (Wd - Rd)) / qd, gd = ((Id - ed) * (Wd - Rd) - (Nd - ed) * (Gd - Rd)) / qd, Cd = 1 - Pd - gd;
            if (Cd < 0 || Pd < 0 || gd < 0) continue;
            const bd = Cd * ld[Zd + 2] + Pd * ld[Kd + 2] + gd * ld[od + 2],
              Sd = pd * kd + dd;
            if (bd <= Qd[Sd]) continue;
            const jd = Math.max(0, Math.min(Jd.width - 1, Math.floor((Cd * sd + Pd * Md + gd * Yd) * Jd.width))),
              Xd = 4 * (Math.max(0, Math.min(Jd.height - 1, Math.floor((Cd * ad + Pd * Fd + gd * md) * Jd.height))) * Jd.width + jd);
            Jd.pixels[Xd + 3] < Od || (Qd[Sd] = bd, Ld[4 * Sd] = Jd.pixels[Xd] * Bd, Ld[4 * Sd + 1] = Jd.pixels[Xd + 1] * Bd, Ld[4 * Sd + 2] = Jd.pixels[Xd + 2] * Bd, Ld[4 * Sd + 3] = 255)
          }
      }
      return Zd(Ld, kd, Nd), Ld
    }

    function Zd(dd, Jd, kd) {
      let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Jd => 0 !== dd[4 * Jd + 3];
      const Wd = (dd, kd) => dd < 0 || kd < 0 || dd >= Jd || kd >= Jd || !pd(kd * Jd + dd),
        Pd = [];
      for (let Nd = 0; Nd < Jd; Nd++)
        for (let dd = 0; dd < Jd; dd++)
          if (!Wd(dd, Nd)) dd: for (let pd = -kd; pd <= kd; pd++) {
            const Zd = kd - Math.abs(pd);
            for (let kd = -Zd; kd <= Zd; kd++)
              if (Wd(dd + kd, Nd + pd)) {
                Pd.push(Nd * Jd + dd);
                break dd
              }
          }
      for (const Zd of Pd) dd.set(Nd, 4 * Zd), dd[4 * Zd + 3] = 255
    }
  },
  36564: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Nd
    });
    const pd = {
      wait: function(dd) {
        return new Promise((Jd => {
          setTimeout(Jd, dd)
        }))
      },
      stallMs: 2e4
    };
    class Nd {
      constructor(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pd;
        this.url = dd, this.options = Jd, this.timing = kd, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = dd
      }
      ready() {
        if (null === this.fetched) {
          const dd = new AbortController;
          this.fetchAbort = dd, this.fetched = this.fetchWithRetries(dd.signal).finally((() => {
            this.fetchAbort === dd && (this.fetchAbort = null)
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
      async fetchWithRetries(dd) {
        for (let Jd = 0;; Jd++) {
          const kd = new URL(this.url);
          if (Jd > 0 && kd.searchParams.set("cache-bust", `${Date.now()}-${Jd}`), await this.fetchWhole(kd, dd)) return void(this.scriptUrl = kd);
          if (Jd >= 3 || dd.aborted) return;
          if (await this.timing.wait(500 * 2 ** Jd), dd.aborted) return
        }
      }
      async fetchWhole(dd, Jd) {
        const kd = new AbortController;
        let pd;
        const Nd = () => {
            clearTimeout(pd), pd = setTimeout((() => {
              kd.abort()
            }), this.timing.stallMs)
          },
          Wd = () => {
            kd.abort()
          };
        Jd.addEventListener("abort", Wd, {
          once: !0
        }), Nd();
        try {
          var Pd;
          const Jd = await fetch(dd, {
            signal: kd.signal
          });
          if (!Jd.ok) return !1;
          const pd = null === (Pd = Jd.body) || void 0 === Pd ? void 0 : Pd.getReader();
          if (!pd) return !1;
          for (;;) {
            const {
              done: dd
            } = await pd.read();
            if (dd) return !0;
            Nd()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(pd), Jd.removeEventListener("abort", Wd)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);