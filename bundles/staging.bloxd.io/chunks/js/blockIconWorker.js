(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var dd = __webpack_require__.u,
        Jd = __webpack_require__.e,
        kd = {},
        pd = {};
      __webpack_require__.u = function(Jd) {
        return dd(Jd) + (kd.hasOwnProperty(Jd) ? "?" + kd[Jd] : "")
      }, __webpack_require__.e = function(Nd) {
        return Jd(Nd).catch((function(Jd) {
          var Wd = pd.hasOwnProperty(Nd) ? pd[Nd] : 4;
          if (Wd < 1) {
            var Pd = dd(Nd);
            throw Jd.message = "Loading chunk " + Nd + " failed after 4 retries.\n(" + Pd + ")", Jd.request = Pd, kd[Nd] = "cache-bust=" + Date.now(), setTimeout((function() {
              delete pd[Nd]
            }), 0), Jd
          }
          return new Promise((function(dd) {
            var Jd = 4 - Wd + 1;
            setTimeout((function() {
              var Jd = "cache-bust=" + Date.now();
              kd[Nd] = Jd, pd[Nd] = Wd - 1, dd(__webpack_require__.e(Nd))
            }), function(dd) {
              return 500 * Math.pow(2, dd)
            }(Jd))
          }))
        }))
      }
    }
  })();
  const dd = [15, 15, 15],
    Jd = {
      top: 1,
      left: .85,
      right: .7
    };

  function kd(Jd, kd, pd) {
    let Nd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : dd => 0 !== Jd[4 * dd + 3];
    const Wd = (dd, Jd) => dd < 0 || Jd < 0 || dd >= kd || Jd >= kd || !Nd(Jd * kd + dd),
      Pd = [];
    for (let dd = 0; dd < kd; dd++)
      for (let Jd = 0; Jd < kd; Jd++)
        if (!Wd(Jd, dd)) dd: for (let Nd = -pd; Nd <= pd; Nd++) {
          const Zd = pd - Math.abs(Nd);
          for (let pd = -Zd; pd <= Zd; pd++)
            if (Wd(Jd + pd, dd + Nd)) {
              Pd.push(dd * kd + Jd);
              break dd
            }
        }
    for (const Zd of Pd) Jd.set(dd, 4 * Zd), Jd[4 * Zd + 3] = 255
  }
  const pd = Math.SQRT1_2,
    Nd = Math.sqrt(3) / 2,
    Wd = {
      boxes: [
        [0, 0, 0, 1, 1, 1]
      ],
      cropFaces: !1
    },
    Pd = {
      boxes: [
        [0, 0, 0, 1, .5, 1]
      ],
      cropFaces: !1
    },
    Zd = {
      boxes: [
        [0, 0, 0, 1, .5, 1],
        [0, .5, 0, .5, 1, 1]
      ],
      cropFaces: !0
    };
  const gd = 1e-6;

  function Cd(dd, Jd, kd, pd) {
    let {
      origin: Nd,
      across: Wd,
      down: Pd,
      texture: Zd,
      rect: [Cd, Kd, od, ld],
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
        if (Rd < -gd || Rd > 1 + gd || Id < -gd || Id > 1 + gd) continue;
        const Gd = xd * kd + pd;
        Jd[Gd] = 1;
        const vd = Cd + Math.min(Math.max(Rd, 0), 1) * (od - Cd),
          qd = Kd + Math.min(Math.max(Id, 0), 1) * (ld - Kd),
          Bd = Math.min(Zd.width - 1, Math.floor(vd * Zd.width)),
          sd = 4 * (Math.min(Zd.height - 1, Math.floor(qd * Zd.height)) * Zd.width + Bd),
          id = Zd.pixels[sd + 3] / 255;
        if (0 === id) continue;
        const ad = 4 * Gd,
          Md = dd[ad + 3] / 255 * (1 - id),
          Fd = id + Md;
        for (let Jd = 0; Jd < 3; Jd++) dd[ad + Jd] = (Zd.pixels[sd + Jd] * Qd * id + dd[ad + Jd] * Md) / Fd;
        dd[ad + 3] = 255 * Fd
      }
  }

  function Kd(dd, Jd, kd) {
    const pd = dd.get(Jd);
    if (void 0 === pd) throw new Error(`no ${kd} was sent for ${Jd.slice(0,100)}`);
    return pd
  }
  const od = {
      pixelsOf(dd) {
        const Jd = new OffscreenCanvas(dd.width, dd.height),
          kd = Jd.getContext("2d");
        if (!kd) throw new Error("no 2D context");
        return kd.drawImage(dd, 0, 0), dd.close(), {
          width: Jd.width,
          height: Jd.height,
          pixels: kd.getImageData(0, 0, Jd.width, Jd.height).data
        }
      },
      async encode(dd, Jd) {
        const kd = new OffscreenCanvas(Jd, Jd),
          pd = kd.getContext("2d");
        if (!pd) throw new Error("no 2D context");
        pd.putImageData(new ImageData(dd, Jd, Jd), 0, 0);
        const Nd = await kd.convertToBlob();
        return new Promise(((dd, Jd) => {
          const kd = new FileReader;
          kd.onload = () => {
            dd(kd.result)
          }, kd.onerror = () => {
            var dd;
            Jd(null !== (dd = kd.error) && void 0 !== dd ? dd : new Error("the icon did not encode"))
          }, kd.readAsDataURL(Nd)
        }))
      }
    },
    ld = globalThis.WorkerGlobalScope;
  void 0 !== ld && globalThis instanceof ld && function(dd, gd) {
    const od = new Map,
      ld = new Map,
      Qd = (Jd, kd, pd) => {
        (async () => {
          try {
            dd.postMessage({
              type: "drawn",
              id: Jd,
              url: await gd.encode(pd(), kd)
            })
          } catch (Nd) {
            dd.postMessage({
              type: "failed",
              message: String(Nd)
            })
          }
        })()
      };
    dd.onmessage = dd => {
      let {
        data: Ld
      } = dd;
      if ("texture" === Ld.type) od.set(Ld.url, gd.pixelsOf(Ld.bitmap));
      else if ("model" === Ld.type) ld.set(Ld.name, {
        geometry: Ld.geometry,
        texture: gd.pixelsOf(Ld.bitmap)
      });
      else if ("draw" === Ld.type) {
        const {
          id: dd,
          top: gd,
          left: ld,
          right: Od,
          itemType: ed,
          size: Rd,
          outlineWidth: Id
        } = Ld;
        Qd(dd, Rd, (() => function(dd, Wd, Pd, Zd) {
          const gd = .6 * Pd,
            Kd = gd * pd,
            od = gd * pd * .5,
            ld = gd * Nd,
            Qd = Math.max(...Wd.boxes.map((dd => dd[4]))),
            Ld = Kd / 2 + (Pd - Kd) / 2,
            Od = od + (Pd - od - od - Qd * ld) / 2,
            ed = (dd, Jd, kd) => ({
              x: Ld + (dd - kd) * Kd,
              y: Od - od + (dd + kd) * od + (Qd - Jd) * ld
            }),
            Rd = (dd, Jd, kd, pd, Nd, Pd) => ({
              origin: dd,
              across: {
                x: Jd.x - dd.x,
                y: Jd.y - dd.y
              },
              down: {
                x: kd.x - dd.x,
                y: kd.y - dd.y
              },
              texture: pd,
              rect: Wd.cropFaces ? Nd : [0, 0, 1, 1],
              shade: Pd
            }),
            Id = new Uint8ClampedArray(Pd * Pd * 4),
            Gd = new Uint8Array(Pd * Pd),
            vd = Jd;
          for (const [Jd, kd, pd, Nd, xd, qd] of Wd.boxes) {
            const Wd = Rd(ed(Nd, xd, qd), ed(Nd, xd, pd), ed(Nd, kd, qd), dd.right, [1 - qd, 1 - xd, 1 - pd, 1 - kd], vd.right),
              Zd = Rd(ed(Jd, xd, qd), ed(Nd, xd, qd), ed(Jd, kd, qd), dd.left, [Jd, 1 - xd, Nd, 1 - kd], vd.left),
              gd = Rd(ed(Jd, xd, pd), ed(Nd, xd, pd), ed(Jd, xd, qd), dd.top, [Jd, pd, Nd, qd], vd.top);
            for (const dd of [Wd, Zd, gd]) Cd(Id, Gd, Pd, dd)
          }
          return kd(Id, Pd, Zd, (dd => 1 === Gd[dd])), Id
        }({
          top: Kd(od, gd, "texture"),
          left: Kd(od, ld, "texture"),
          right: Kd(od, Od, "texture")
        }, function(dd) {
          return "SlabBlock" === dd ? Pd : "StairsBlock" === dd ? Zd : Wd
        }(ed), Rd, Id)))
      } else {
        const {
          id: dd,
          name: Jd,
          size: pd,
          outlineWidth: Nd
        } = Ld;
        Qd(dd, pd, (() => {
          const {
            geometry: dd,
            texture: Wd
          } = Kd(ld, Jd, "model");
          return function(dd, Jd, pd, Nd) {
            const {
              vertices: Wd,
              uvs: Pd,
              indices: Zd,
              shades: gd
            } = dd, Cd = .03125 * pd, Kd = pd - 2 * Cd, od = new Float32Array(Wd.length);
            for (let kd = 0; kd < Wd.length; kd += 3) od[kd] = Cd + Wd[kd] * Kd, od[kd + 1] = Cd + Wd[kd + 1] * Kd, od[kd + 2] = Wd[kd + 2];
            const ld = new Float32Array(pd * pd).fill(-1 / 0),
              Qd = new Uint8ClampedArray(pd * pd * 4),
              Ld = 255 * dd.alphaCutoff;
            for (let kd = 0; kd < Zd.length; kd += 3) {
              const [dd, Nd, Wd] = [Zd[kd], Zd[kd + 1], Zd[kd + 2]], [Cd, Kd, Od] = [3 * dd, 3 * Nd, 3 * Wd], [ed, Rd, Id, Gd, vd, xd] = [od[Cd], od[Cd + 1], od[Kd], od[Kd + 1], od[Od], od[Od + 1]], qd = (Id - ed) * (xd - Rd) - (vd - ed) * (Gd - Rd);
              if (Math.abs(qd) < 1e-9) continue;
              const Bd = gd[kd / 3],
                [sd, id, ad, Md, Fd, Yd] = [Pd[2 * dd], Pd[2 * dd + 1], Pd[2 * Nd], Pd[2 * Nd + 1], Pd[2 * Wd], Pd[2 * Wd + 1]],
                md = Math.max(0, Math.floor(Math.min(ed, Id, vd))),
                bd = Math.min(pd - 1, Math.ceil(Math.max(ed, Id, vd))),
                Sd = Math.max(0, Math.floor(Math.min(Rd, Gd, xd))),
                jd = Math.min(pd - 1, Math.ceil(Math.max(Rd, Gd, xd)));
              for (let kd = Sd; kd <= jd; kd++)
                for (let dd = md; dd <= bd; dd++) {
                  const [Nd, Wd] = [dd + .5, kd + .5], Pd = ((Nd - ed) * (xd - Rd) - (vd - ed) * (Wd - Rd)) / qd, Zd = ((Id - ed) * (Wd - Rd) - (Nd - ed) * (Gd - Rd)) / qd, gd = 1 - Pd - Zd;
                  if (gd < 0 || Pd < 0 || Zd < 0) continue;
                  const md = gd * od[Cd + 2] + Pd * od[Kd + 2] + Zd * od[Od + 2],
                    bd = kd * pd + dd;
                  if (md <= ld[bd]) continue;
                  const Sd = Math.max(0, Math.min(Jd.width - 1, Math.floor((gd * sd + Pd * ad + Zd * Fd) * Jd.width))),
                    jd = 4 * (Math.max(0, Math.min(Jd.height - 1, Math.floor((gd * id + Pd * Md + Zd * Yd) * Jd.height))) * Jd.width + Sd);
                  Jd.pixels[jd + 3] < Ld || (ld[bd] = md, Qd[4 * bd] = Jd.pixels[jd] * Bd, Qd[4 * bd + 1] = Jd.pixels[jd + 1] * Bd, Qd[4 * bd + 2] = Jd.pixels[jd + 2] * Bd, Qd[4 * bd + 3] = 255)
                }
            }
            return kd(Qd, pd, Nd), Qd
          }(dd, Wd, pd, Nd)
        }))
      }
    }, dd.postMessage({
      type: "started"
    })
  }(globalThis, od)
})();