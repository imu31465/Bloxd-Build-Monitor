export const id = 2;
export const ids = [2];
export const modules = {
  38010: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      drawBlockIcon: () => Td,
      drawBlockIconUrl: () => pd,
      getDrawnBlockIcon: () => bd,
      resetBlockIconDrawingForTests: () => qd
    });
    var Wd = md(38013);
    const Fd = {
        boxes: [
          [0, 0, 0, 1, 1, 1]
        ],
        cropFaces: !1
      },
      Rd = {
        boxes: [
          [0, 0, 0, 1, .5, 1]
        ],
        cropFaces: !1
      },
      Xd = {
        boxes: [
          [0, 0, 0, 1, .5, 1],
          [0, .5, 0, .5, 1, 1]
        ],
        cropFaces: !0
      };
    const Kd = 1e-6;

    function hd(dd, Od, md, Wd) {
      let {
        origin: Fd,
        across: Rd,
        down: Xd,
        texture: hd,
        rect: [vd, Qd, td, od],
        shade: Nd
      } = Wd;
      const qd = Rd.x * Xd.y - Rd.y * Xd.x;
      if (Math.abs(qd) < 1e-9) return;
      const Hd = [Fd.x, Fd.x + Rd.x, Fd.x + Xd.x, Fd.x + Rd.x + Xd.x],
        yd = [Fd.y, Fd.y + Rd.y, Fd.y + Xd.y, Fd.y + Rd.y + Xd.y],
        bd = Math.max(0, Math.floor(Math.min(...Hd))),
        Td = Math.min(md - 1, Math.ceil(Math.max(...Hd))),
        pd = Math.max(0, Math.floor(Math.min(...yd))),
        Yd = Math.min(md - 1, Math.ceil(Math.max(...yd)));
      for (let gd = pd; gd <= Yd; gd++)
        for (let Wd = bd; Wd <= Td; Wd++) {
          const Hd = Wd + .5 - Fd.x,
            yd = gd + .5 - Fd.y,
            bd = (Hd * Xd.y - yd * Xd.x) / qd,
            Td = (Rd.x * yd - Rd.y * Hd) / qd;
          if (bd < -Kd || bd > 1 + Kd || Td < -Kd || Td > 1 + Kd) continue;
          const pd = gd * md + Wd;
          Od[pd] = 1;
          const Yd = vd + Math.min(Math.max(bd, 0), 1) * (td - vd),
            wd = Qd + Math.min(Math.max(Td, 0), 1) * (od - Qd),
            Ed = Math.min(hd.width - 1, Math.floor(Yd * hd.width)),
            Jd = 4 * (Math.min(hd.height - 1, Math.floor(wd * hd.height)) * hd.width + Ed),
            Ud = hd.pixels[Jd + 3] / 255;
          if (0 === Ud) continue;
          const xd = 4 * pd,
            Bd = dd[xd + 3] / 255 * (1 - Ud),
            Sd = Ud + Bd;
          for (let Od = 0; Od < 3; Od++) dd[xd + Od] = (hd.pixels[Jd + Od] * Nd * Ud + dd[xd + Od] * Bd) / Sd;
          dd[xd + 3] = 255 * Sd
        }
    }
    var vd = md(38020);
    const Qd = new Map,
      td = new Map,
      od = new Map,
      Nd = new Map;

    function qd() {
      Qd.clear(), td.clear(), od.clear(), Nd.clear()
    }

    function Hd(dd, Od, md) {
      return `${Od}|${md}|${dd}`
    }

    function yd(dd, Od, md) {
      let Wd = dd.get(Od);
      return void 0 === Wd && (Wd = md().catch((md => {
        throw dd.delete(Od), md
      })), dd.set(Od, Wd)), Wd
    }

    function bd(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return td.get(Hd(dd, Od, md))
    }

    function Td(dd, Od, md, Wd) {
      const Fd = Hd(dd, Od, md);
      return yd(Qd, Fd, (async () => {
        const Rd = await Yd(Wd(dd), Od, md);
        return td.set(Fd, Rd), Rd
      }))
    }

    function pd(dd, Od, md, Wd) {
      return yd(od, Hd(dd, Od, md), (async () => {
        var Fd;
        const Rd = Wd(dd);
        return null !== (Fd = await (0, vd.b)(Rd, Od, md)) && void 0 !== Fd ? Fd : (await Yd(Rd, Od, md)).toDataURL()
      }))
    }
    async function Yd(dd, Od, md) {
      let {
        top: Kd,
        left: vd,
        right: Qd,
        itemType: td
      } = dd;
      const [od, Nd, qd] = await Promise.all([gd(Kd), gd(vd), gd(Qd)]), Hd = function(dd, Od, md, Fd) {
        const Rd = (0, Wd.g)(md, Fd),
          Xd = Rd * Wd.c.across,
          Kd = Rd * Wd.c.down,
          vd = Rd * Wd.c.up,
          Qd = Math.max(...Od.boxes.map((dd => dd[4]))),
          td = md / 2,
          od = Kd + (md - Kd - Kd - Qd * vd) / 2,
          Nd = (dd, Od, md) => ({
            x: td + (dd - md) * Xd,
            y: od - Kd + (dd + md) * Kd + (Qd - Od) * vd
          }),
          qd = (dd, md, Wd, Fd, Rd, Xd) => ({
            origin: dd,
            across: {
              x: md.x - dd.x,
              y: md.y - dd.y
            },
            down: {
              x: Wd.x - dd.x,
              y: Wd.y - dd.y
            },
            texture: Fd,
            rect: Od.cropFaces ? Rd : [0, 0, 1, 1],
            shade: Xd
          }),
          Hd = new Uint8ClampedArray(md * md * 4),
          yd = new Uint8Array(md * md),
          bd = Wd.e;
        for (const [Wd, Td, pd, Yd, gd, wd] of Od.boxes) {
          const Od = qd(Nd(Yd, gd, wd), Nd(Yd, gd, pd), Nd(Yd, Td, wd), dd.right, [1 - wd, 1 - gd, 1 - pd, 1 - Td], bd.right),
            Fd = qd(Nd(Wd, gd, wd), Nd(Yd, gd, wd), Nd(Wd, Td, wd), dd.left, [Wd, 1 - gd, Yd, 1 - Td], bd.left),
            Rd = qd(Nd(Wd, gd, pd), Nd(Yd, gd, pd), Nd(Wd, gd, wd), dd.top, [Wd, pd, Yd, wd], bd.top);
          for (const dd of [Od, Fd, Rd]) hd(Hd, yd, md, dd)
        }
        return (0, Wd.h)(Hd, md, Fd, (dd => 1 === yd[dd])), Hd
      }({
        top: od,
        left: Nd,
        right: qd
      }, function(dd) {
        return "SlabBlock" === dd ? Rd : "StairsBlock" === dd ? Xd : Fd
      }(td), Od, md), yd = document.createElement("canvas");
      yd.width = Od, yd.height = Od;
      const bd = yd.getContext("2d");
      if (!bd) throw new Error("Failed to get 2D context");
      return bd.putImageData(new ImageData(Hd, Od, Od), 0, 0), yd
    }

    function gd(dd) {
      return yd(Nd, dd, (async () => {
        const Od = await (0, vd.j)(dd),
          md = document.createElement("canvas");
        md.width = Od.width, md.height = Od.height;
        const Wd = md.getContext("2d");
        if (!Wd) throw new Error("Failed to get 2D context");
        return Wd.drawImage(Od, 0, 0), {
          width: Od.width,
          height: Od.height,
          pixels: Wd.getImageData(0, 0, Od.width, Od.height).data
        }
      }))
    }
  },
  38020: (dd, Od, md) => {
    md.d(Od, {
      b: () => Bd,
      c: () => Sd,
      f: () => gd,
      j: () => pd,
      l: () => wd
    });
    var Wd = md(320),
      Fd = md(107);
    const Rd = new(md(38022).c)(new URL(md.p + md.u(3), md.b), {
      name: "blockIconWorker",
      type: "module"
    });
    var Xd = md(1786),
      Kd = md(2324);
    const hd = 1e4,
      vd = 3e4;
    let Qd = null,
      td = null,
      od = null,
      Nd = !1,
      qd = 0;
    const Hd = new Map;
    let yd = null;
    const bd = new Map,
      Td = new Map;

    function pd(dd) {
      const Od = new Promise(((Od, md) => {
        const Wd = new Image;
        Wd.crossOrigin = "anonymous", Wd.fetchPriority = "high", Wd.onload = () => {
          Od(Wd)
        }, Wd.onerror = () => {
          md(new Error(`A block icon's texture did not load: ${dd.slice(0,100)}`))
        }, Wd.src = dd
      }));
      return (0, Kd.g)(Od)
    }

    function Yd(dd) {
      var Od, md;
      Nd || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${dd}`), Nd = !0, null === (Od = Qd) || void 0 === Od || Od.terminate(), Qd = null, td = null, bd.clear(), Td.clear();
      for (const Wd of Hd.values()) Wd(null);
      Hd.clear(), null === (md = yd) || void 0 === md || md()
    }

    function gd() {
      return null !== td
    }

    function wd() {
      return od ??= async function() {
        if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
        if ("page" === Wd.d.ios_icon_worker_v1 && (0, Fd.isWebKit)()) return;
        try {
          Qd = await async function() {
            return await Rd.ready(), Rd.start()
          }()
        } catch (Kd) {
          return void Yd(`did not start (${String(Kd)})`)
        }
        let dd = () => {};
        const Od = new Promise((Od => {
          dd = Od
        }));
        Qd.onmessage = Od => {
          let {
            data: md
          } = Od;
          if ("started" === md.type) td = Qd, dd();
          else if ("failed" === md.type) Yd(`failed a draw (${md.message})`);
          else {
            var Wd, Fd;
            null === (Wd = Hd.get(md.id)) || void 0 === Wd || Wd(md.url), Hd.delete(md.id), null === (Fd = yd) || void 0 === Fd || Fd()
          }
        }, Qd.onerror = Od => {
          Od.preventDefault(), Yd(`stopped (${Od.message||"its script did not load or run"})`), dd()
        };
        const md = `did not start in ${vd/1e3} s`;
        await (0, Xd.k)(Od, vd, md).catch((() => {
          Yd(md)
        }))
      }(), od
    }

    function Ed() {
      if (null !== yd || 0 === Hd.size) return;
      const dd = new Promise((dd => {
          yd = dd
        })),
        Od = `did not answer in ${hd/1e3} s`;
      (0, Xd.k)(dd, hd, Od).then((() => {
        yd = null, Ed()
      }), (() => {
        yd = null, Yd(Od)
      }))
    }

    function Jd(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      dd.postMessage(Od, md)
    }

    function Ud(dd, Od, md, Wd) {
      let Fd = Od.get(md);
      return void 0 === Fd && (Fd = Wd().then((async Od => {
        let {
          image: md,
          request: Wd
        } = Od;
        try {
          const Od = await createImageBitmap(md);
          Jd(dd, Wd(Od), [Od])
        } catch (Fd) {
          Yd(`could not take an image (${String(Fd)})`)
        }
      })), Fd.catch((() => {
        Od.get(md) === Fd && Od.delete(md)
      })), Od.set(md, Fd)), Fd
    }
    async function xd(dd, Od) {
      wd();
      const md = td;
      if (null === md) return null;
      if (await dd(md), td !== md) return null;
      const Wd = ++qd;
      return new Promise((dd => {
        Hd.set(Wd, dd), Jd(md, Od(Wd)), Ed()
      }))
    }

    function Bd(dd, Od, md) {
      return xd((Od => Promise.all([dd.top, dd.left, dd.right].map((dd => function(dd, Od) {
        return Ud(dd, bd, Od, (async () => ({
          image: await pd(Od),
          request: dd => ({
            type: "texture",
            url: Od,
            bitmap: dd
          })
        })))
      }(Od, dd))))), (Wd => ({
        type: "draw",
        id: Wd,
        ...dd,
        size: Od,
        outlineWidth: md
      })))
    }

    function Sd(dd, Od, md, Wd) {
      return xd((md => function(dd, Od, md) {
        return Ud(dd, Td, Od, (async () => {
          const {
            texture: dd,
            ...Wd
          } = await md();
          return {
            image: await pd(dd),
            request: dd => ({
              type: "model",
              name: Od,
              bitmap: dd,
              geometry: Wd
            })
          }
        }))
      }(md, dd, Od)), (Od => ({
        type: "drawModel",
        id: Od,
        name: dd,
        size: md,
        outlineWidth: Wd
      })))
    }
  },
  38013: (dd, Od, md) => {
    md.d(Od, {
      c: () => Wd,
      e: () => hd,
      g: () => Xd,
      h: () => od,
      i: () => vd
    });
    const Wd = {
        across: Math.SQRT1_2,
        down: Math.SQRT1_2 / 2,
        up: Math.sqrt(3) / 2
      },
      Fd = .6,
      Rd = {
        width: 2 * Wd.across,
        height: 2 * Wd.down + Wd.up
      };

    function Xd(dd, Od) {
      const md = Od > 0 ? Od + 1 : 0,
        Xd = dd * Fd - Od / Wd.across;
      return Math.max(0, Math.min(Xd, (dd - 2 * md) / Rd.height))
    }
    const Kd = [15, 15, 15],
      hd = {
        top: 1,
        left: .85,
        right: .7
      };

    function vd(dd, Od, md, Wd) {
      const {
        vertices: Fd,
        uvs: Kd,
        indices: hd,
        shades: vd
      } = dd, Qd = function(dd, Od) {
        const md = Xd(dd, Od),
          Wd = Rd.width * md,
          Fd = Rd.height * md;
        return {
          left: (dd - Wd) / 2,
          top: (dd - Fd) / 2,
          width: Wd,
          height: Fd
        }
      }(md, Wd), td = new Float32Array(Fd.length);
      for (let Rd = 0; Rd < Fd.length; Rd += 3) td[Rd] = Qd.left + Fd[Rd] * Qd.width, td[Rd + 1] = Qd.top + Fd[Rd + 1] * Qd.height, td[Rd + 2] = Fd[Rd + 2];
      const Nd = new Float32Array(md * md).fill(-1 / 0),
        qd = new Uint8ClampedArray(md * md * 4),
        Hd = 255 * dd.alphaCutoff;
      for (let Rd = 0; Rd < hd.length; Rd += 3) {
        const [dd, Wd, Fd] = [hd[Rd], hd[Rd + 1], hd[Rd + 2]], [Xd, Qd, od] = [3 * dd, 3 * Wd, 3 * Fd], [yd, bd, Td, pd, Yd, gd] = [td[Xd], td[Xd + 1], td[Qd], td[Qd + 1], td[od], td[od + 1]], wd = (Td - yd) * (gd - bd) - (Yd - yd) * (pd - bd);
        if (Math.abs(wd) < 1e-9) continue;
        const Ed = vd[Rd / 3],
          [Jd, Ud, xd, Bd, Sd, sd] = [Kd[2 * dd], Kd[2 * dd + 1], Kd[2 * Wd], Kd[2 * Wd + 1], Kd[2 * Fd], Kd[2 * Fd + 1]],
          ud = Math.max(0, Math.floor(Math.min(yd, Td, Yd))),
          Vd = Math.min(md - 1, Math.ceil(Math.max(yd, Td, Yd))),
          Ad = Math.max(0, Math.floor(Math.min(bd, pd, gd))),
          rd = Math.min(md - 1, Math.ceil(Math.max(bd, pd, gd)));
        for (let Rd = Ad; Rd <= rd; Rd++)
          for (let dd = ud; dd <= Vd; dd++) {
            const [Wd, Fd] = [dd + .5, Rd + .5], Kd = ((Wd - yd) * (gd - bd) - (Yd - yd) * (Fd - bd)) / wd, hd = ((Td - yd) * (Fd - bd) - (Wd - yd) * (pd - bd)) / wd, vd = 1 - Kd - hd;
            if (vd < 0 || Kd < 0 || hd < 0) continue;
            const ud = vd * td[Xd + 2] + Kd * td[Qd + 2] + hd * td[od + 2],
              Vd = Rd * md + dd;
            if (ud <= Nd[Vd]) continue;
            const Ad = Math.max(0, Math.min(Od.width - 1, Math.floor((vd * Jd + Kd * xd + hd * Sd) * Od.width))),
              rd = 4 * (Math.max(0, Math.min(Od.height - 1, Math.floor((vd * Ud + Kd * Bd + hd * sd) * Od.height))) * Od.width + Ad);
            Od.pixels[rd + 3] < Hd || (Nd[Vd] = ud, qd[4 * Vd] = Od.pixels[rd] * Ed, qd[4 * Vd + 1] = Od.pixels[rd + 1] * Ed, qd[4 * Vd + 2] = Od.pixels[rd + 2] * Ed, qd[4 * Vd + 3] = 255)
          }
      }
      return od(qd, md, Wd), qd
    }
    let Qd = NaN,
      td = new Int32Array(0);

    function od(dd, Od, md) {
      let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Od => 0 !== dd[4 * Od + 3];
      const Fd = new Uint8Array(Od * Od);
      for (let Kd = 0; Kd < Od * Od; Kd++) Fd[Kd] = Wd(Kd) ? 1 : 0;
      const Rd = (dd, md) => dd >= 0 && md >= 0 && dd < Od && md < Od && 0 === Fd[md * Od + dd],
        Xd = new Float32Array(Od * Od).fill(1 / 0),
        hd = function(dd) {
          if (dd !== Qd) {
            const Od = Math.ceil(dd + 1),
              md = [];
            for (let Wd = -Od; Wd <= Od; Wd++)
              for (let Fd = -Od; Fd <= Od; Fd++) {
                const Od = Fd * Fd + Wd * Wd;
                Od > 0 && Od < (dd + 1) ** 2 && md.push(Fd, Wd, Od)
              }
            Qd = dd, td = Int32Array.from(md)
          }
          return td
        }(md);
      for (let Kd = 0; Kd < Od; Kd++)
        for (let dd = 0; dd < Od; dd++) {
          if (1 === Fd[Kd * Od + dd] && (Rd(dd - 1, Kd) || Rd(dd + 1, Kd) || Rd(dd, Kd - 1) || Rd(dd, Kd + 1)))
            for (let md = 0; md < hd.length; md += 3) {
              const Wd = dd + hd[md],
                Fd = Kd + hd[md + 1];
              if (Wd >= 0 && Fd >= 0 && Wd < Od && Fd < Od) {
                const dd = Fd * Od + Wd;
                Xd[dd] = Math.min(Xd[dd], hd[md + 2])
              }
            }
        }
      for (let vd = 0; vd < Od * Od; vd++) 1 !== Fd[vd] && Xd[vd] !== 1 / 0 && (dd.set(Kd, 4 * vd), dd[4 * vd + 3] = Math.round(255 * Math.min(1, md + 1 - Math.sqrt(Xd[vd]))))
    }
  },
  38022: (dd, Od, md) => {
    md.d(Od, {
      c: () => Fd
    });
    const Wd = {
      wait: function(dd) {
        return new Promise((Od => {
          setTimeout(Od, dd)
        }))
      },
      stallMs: 2e4
    };
    class Fd {
      constructor(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Wd;
        this.url = dd, this.options = Od, this.timing = md, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = dd
      }
      ready() {
        if (null === this.fetched) {
          const dd = new AbortController;
          this.fetchAbort = dd, this.fetched = this.fetchWithRetries(dd.signal).then((Od => (this.fetchAbort === dd && (this.fetchAbort = null), Od)))
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
      async fetchWithRetries(dd) {
        for (let Od = 0;; Od++) {
          const md = new URL(this.url);
          if (Od > 0 && md.searchParams.set("cache-bust", `${Date.now()}-${Od}`), await this.fetchWhole(md, dd)) return this.scriptUrl = md, !0;
          if (Od >= 3 || dd.aborted) return !1;
          if (await this.timing.wait(500 * 2 ** Od), dd.aborted) return !1
        }
      }
      async fetchWhole(dd, Od) {
        const md = new AbortController;
        let Wd;
        const Fd = () => {
            clearTimeout(Wd), Wd = setTimeout((() => {
              md.abort()
            }), this.timing.stallMs)
          },
          Rd = () => {
            md.abort()
          };
        Od.addEventListener("abort", Rd, {
          once: !0
        }), Fd();
        try {
          var Xd;
          const Od = await fetch(dd, {
            signal: md.signal
          });
          if (!Od.ok) return !1;
          const Wd = null === (Xd = Od.body) || void 0 === Xd ? void 0 : Xd.getReader();
          if (!Wd) return !1;
          for (;;) {
            const {
              done: dd
            } = await Wd.read();
            if (dd) return !0;
            Fd()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(Wd), Od.removeEventListener("abort", Rd)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);