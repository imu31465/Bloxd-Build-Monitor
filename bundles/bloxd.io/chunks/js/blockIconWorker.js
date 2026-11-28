(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var dd = __webpack_require__.u,
        Od = __webpack_require__.e,
        md = {},
        Wd = {};
      __webpack_require__.u = function(Od) {
        return dd(Od) + (md.hasOwnProperty(Od) ? "?" + md[Od] : "")
      }, __webpack_require__.e = function(Fd) {
        return Od(Fd).catch((function(Od) {
          var Rd = Wd.hasOwnProperty(Fd) ? Wd[Fd] : 4;
          if (Rd < 1) {
            var Xd = dd(Fd);
            if (Od.message = "Loading chunk " + Fd + " failed after 4 retries.\n(" + Xd + ")", Od.request = Xd, md[Fd] = "cache-bust=" + Date.now(), setTimeout((function() {
                delete Wd[Fd]
              }), 0), "CSS_CHUNK_LOAD_FAILED" === Od.code) {
              var Kd = __webpack_require__.miniCssF(Fd);
              Od.message = Od.message.replace("Loading chunk", "Loading CSS chunk").replace(Xd, Kd), Od.request = Kd
            }
            throw Od
          }
          return new Promise((function(dd) {
            var Od = 4 - Rd + 1;
            setTimeout((function() {
              var Od = "cache-bust=" + Date.now();
              md[Fd] = Od, Wd[Fd] = Rd - 1, dd(__webpack_require__.e(Fd))
            }), function(dd) {
              return 500 * Math.pow(2, dd)
            }(Od))
          }))
        }))
      }
    }
  })();
  const dd = Math.SQRT1_2,
    Od = Math.SQRT1_2 / 2,
    md = Math.sqrt(3) / 2,
    Wd = 2 * dd,
    Fd = 2 * Od + md;

  function Rd(Od, md) {
    const Wd = md > 0 ? md + 1 : 0,
      Rd = .6 * Od - md / dd;
    return Math.max(0, Math.min(Rd, (Od - 2 * Wd) / Fd))
  }
  const Xd = [15, 15, 15],
    Kd = {
      top: 1,
      left: .85,
      right: .7
    };

  function hd(dd, Od, md, Xd) {
    const {
      vertices: Kd,
      uvs: hd,
      indices: vd,
      shades: Qd
    } = dd, od = function(dd, Od) {
      const md = Rd(dd, Od),
        Xd = Wd * md,
        Kd = Fd * md;
      return {
        left: (dd - Xd) / 2,
        top: (dd - Kd) / 2,
        width: Xd,
        height: Kd
      }
    }(md, Xd), Nd = new Float32Array(Kd.length);
    for (let Wd = 0; Wd < Kd.length; Wd += 3) Nd[Wd] = od.left + Kd[Wd] * od.width, Nd[Wd + 1] = od.top + Kd[Wd + 1] * od.height, Nd[Wd + 2] = Kd[Wd + 2];
    const qd = new Float32Array(md * md).fill(-1 / 0),
      Hd = new Uint8ClampedArray(md * md * 4),
      yd = 255 * dd.alphaCutoff;
    for (let Wd = 0; Wd < vd.length; Wd += 3) {
      const [dd, Fd, Rd] = [vd[Wd], vd[Wd + 1], vd[Wd + 2]], [Xd, Kd, td] = [3 * dd, 3 * Fd, 3 * Rd], [od, bd, Td, pd, Yd, gd] = [Nd[Xd], Nd[Xd + 1], Nd[Kd], Nd[Kd + 1], Nd[td], Nd[td + 1]], wd = (Td - od) * (gd - bd) - (Yd - od) * (pd - bd);
      if (Math.abs(wd) < 1e-9) continue;
      const Ed = Qd[Wd / 3],
        [Jd, Ud, xd, Bd, Sd, sd] = [hd[2 * dd], hd[2 * dd + 1], hd[2 * Fd], hd[2 * Fd + 1], hd[2 * Rd], hd[2 * Rd + 1]],
        ud = Math.max(0, Math.floor(Math.min(od, Td, Yd))),
        Vd = Math.min(md - 1, Math.ceil(Math.max(od, Td, Yd))),
        id = Math.max(0, Math.floor(Math.min(bd, pd, gd))),
        Ad = Math.min(md - 1, Math.ceil(Math.max(bd, pd, gd)));
      for (let Wd = id; Wd <= Ad; Wd++)
        for (let dd = ud; dd <= Vd; dd++) {
          const [Fd, Rd] = [dd + .5, Wd + .5], hd = ((Fd - od) * (gd - bd) - (Yd - od) * (Rd - bd)) / wd, vd = ((Td - od) * (Rd - bd) - (Fd - od) * (pd - bd)) / wd, Qd = 1 - hd - vd;
          if (Qd < 0 || hd < 0 || vd < 0) continue;
          const ud = Qd * Nd[Xd + 2] + hd * Nd[Kd + 2] + vd * Nd[td + 2],
            Vd = Wd * md + dd;
          if (ud <= qd[Vd]) continue;
          const id = Math.max(0, Math.min(Od.width - 1, Math.floor((Qd * Jd + hd * xd + vd * Sd) * Od.width))),
            Ad = 4 * (Math.max(0, Math.min(Od.height - 1, Math.floor((Qd * Ud + hd * Bd + vd * sd) * Od.height))) * Od.width + id);
          Od.pixels[Ad + 3] < yd || (qd[Vd] = ud, Hd[4 * Vd] = Od.pixels[Ad] * Ed, Hd[4 * Vd + 1] = Od.pixels[Ad + 1] * Ed, Hd[4 * Vd + 2] = Od.pixels[Ad + 2] * Ed, Hd[4 * Vd + 3] = 255)
        }
    }
    return td(Hd, md, Xd), Hd
  }
  let vd = NaN,
    Qd = new Int32Array(0);

  function td(dd, Od, md) {
    let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Od => 0 !== dd[4 * Od + 3];
    const Fd = new Uint8Array(Od * Od);
    for (let Xd = 0; Xd < Od * Od; Xd++) Fd[Xd] = Wd(Xd) ? 1 : 0;
    const Rd = (dd, md) => dd >= 0 && md >= 0 && dd < Od && md < Od && 0 === Fd[md * Od + dd],
      Kd = new Float32Array(Od * Od).fill(1 / 0),
      hd = function(dd) {
        if (dd !== vd) {
          const Od = Math.ceil(dd + 1),
            md = [];
          for (let Wd = -Od; Wd <= Od; Wd++)
            for (let Fd = -Od; Fd <= Od; Fd++) {
              const Od = Fd * Fd + Wd * Wd;
              Od > 0 && Od < (dd + 1) ** 2 && md.push(Fd, Wd, Od)
            }
          vd = dd, Qd = Int32Array.from(md)
        }
        return Qd
      }(md);
    for (let Xd = 0; Xd < Od; Xd++)
      for (let dd = 0; dd < Od; dd++) {
        if (1 === Fd[Xd * Od + dd] && (Rd(dd - 1, Xd) || Rd(dd + 1, Xd) || Rd(dd, Xd - 1) || Rd(dd, Xd + 1)))
          for (let md = 0; md < hd.length; md += 3) {
            const Wd = dd + hd[md],
              Fd = Xd + hd[md + 1];
            if (Wd >= 0 && Fd >= 0 && Wd < Od && Fd < Od) {
              const dd = Fd * Od + Wd;
              Kd[dd] = Math.min(Kd[dd], hd[md + 2])
            }
          }
      }
    for (let vd = 0; vd < Od * Od; vd++) 1 !== Fd[vd] && Kd[vd] !== 1 / 0 && (dd.set(Xd, 4 * vd), dd[4 * vd + 3] = Math.round(255 * Math.min(1, md + 1 - Math.sqrt(Kd[vd]))))
  }
  const od = {
      boxes: [
        [0, 0, 0, 1, 1, 1]
      ],
      cropFaces: !1
    },
    Nd = {
      boxes: [
        [0, 0, 0, 1, .5, 1]
      ],
      cropFaces: !1
    },
    qd = {
      boxes: [
        [0, 0, 0, 1, .5, 1],
        [0, .5, 0, .5, 1, 1]
      ],
      cropFaces: !0
    };
  const Hd = 1e-6;

  function yd(dd, Od, md, Wd) {
    let {
      origin: Fd,
      across: Rd,
      down: Xd,
      texture: Kd,
      rect: [hd, vd, Qd, td],
      shade: od
    } = Wd;
    const Nd = Rd.x * Xd.y - Rd.y * Xd.x;
    if (Math.abs(Nd) < 1e-9) return;
    const qd = [Fd.x, Fd.x + Rd.x, Fd.x + Xd.x, Fd.x + Rd.x + Xd.x],
      yd = [Fd.y, Fd.y + Rd.y, Fd.y + Xd.y, Fd.y + Rd.y + Xd.y],
      bd = Math.max(0, Math.floor(Math.min(...qd))),
      Td = Math.min(md - 1, Math.ceil(Math.max(...qd))),
      pd = Math.max(0, Math.floor(Math.min(...yd))),
      Yd = Math.min(md - 1, Math.ceil(Math.max(...yd)));
    for (let gd = pd; gd <= Yd; gd++)
      for (let Wd = bd; Wd <= Td; Wd++) {
        const qd = Wd + .5 - Fd.x,
          yd = gd + .5 - Fd.y,
          bd = (qd * Xd.y - yd * Xd.x) / Nd,
          Td = (Rd.x * yd - Rd.y * qd) / Nd;
        if (bd < -Hd || bd > 1 + Hd || Td < -Hd || Td > 1 + Hd) continue;
        const pd = gd * md + Wd;
        Od[pd] = 1;
        const Yd = hd + Math.min(Math.max(bd, 0), 1) * (Qd - hd),
          wd = vd + Math.min(Math.max(Td, 0), 1) * (td - vd),
          Ed = Math.min(Kd.width - 1, Math.floor(Yd * Kd.width)),
          Jd = 4 * (Math.min(Kd.height - 1, Math.floor(wd * Kd.height)) * Kd.width + Ed),
          Ud = Kd.pixels[Jd + 3] / 255;
        if (0 === Ud) continue;
        const xd = 4 * pd,
          Bd = dd[xd + 3] / 255 * (1 - Ud),
          Sd = Ud + Bd;
        for (let Od = 0; Od < 3; Od++) dd[xd + Od] = (Kd.pixels[Jd + Od] * od * Ud + dd[xd + Od] * Bd) / Sd;
        dd[xd + 3] = 255 * Sd
      }
  }

  function bd(dd, Od, md) {
    const Wd = dd.get(Od);
    if (void 0 === Wd) throw new Error(`no ${md} was sent for ${Od.slice(0,100)}`);
    return Wd
  }
  const Td = {
      pixelsOf(dd) {
        const Od = new OffscreenCanvas(dd.width, dd.height),
          md = Od.getContext("2d");
        if (!md) throw new Error("no 2D context");
        return md.drawImage(dd, 0, 0), dd.close(), {
          width: Od.width,
          height: Od.height,
          pixels: md.getImageData(0, 0, Od.width, Od.height).data
        }
      },
      async encode(dd, Od) {
        const md = new OffscreenCanvas(Od, Od),
          Wd = md.getContext("2d");
        if (!Wd) throw new Error("no 2D context");
        Wd.putImageData(new ImageData(dd, Od, Od), 0, 0);
        const Fd = await md.convertToBlob();
        return new Promise(((dd, Od) => {
          const md = new FileReader;
          md.onload = () => {
            dd(md.result)
          }, md.onerror = () => {
            var dd;
            Od(null !== (dd = md.error) && void 0 !== dd ? dd : new Error("the icon did not encode"))
          }, md.readAsDataURL(Fd)
        }))
      }
    },
    pd = globalThis.WorkerGlobalScope;
  void 0 !== pd && globalThis instanceof pd && function(Wd, Fd) {
    const Xd = new Map,
      vd = new Map,
      Qd = (dd, Od, md) => {
        (async () => {
          try {
            Wd.postMessage({
              type: "drawn",
              id: dd,
              url: await Fd.encode(md(), Od)
            })
          } catch (Rd) {
            Wd.postMessage({
              type: "failed",
              message: String(Rd)
            })
          }
        })()
      };
    Wd.onmessage = Wd => {
      let {
        data: Hd
      } = Wd;
      if ("texture" === Hd.type) Xd.set(Hd.url, Fd.pixelsOf(Hd.bitmap));
      else if ("model" === Hd.type) vd.set(Hd.name, {
        geometry: Hd.geometry,
        texture: Fd.pixelsOf(Hd.bitmap)
      });
      else if ("draw" === Hd.type) {
        const {
          id: Wd,
          top: Fd,
          left: hd,
          right: vd,
          itemType: Td,
          size: pd,
          outlineWidth: Yd
        } = Hd;
        Qd(Wd, pd, (() => function(Wd, Fd, Xd, hd) {
          const vd = Rd(Xd, hd),
            Qd = vd * dd,
            od = vd * Od,
            Nd = vd * md,
            qd = Math.max(...Fd.boxes.map((dd => dd[4]))),
            Hd = Xd / 2,
            bd = od + (Xd - od - od - qd * Nd) / 2,
            Td = (dd, Od, md) => ({
              x: Hd + (dd - md) * Qd,
              y: bd - od + (dd + md) * od + (qd - Od) * Nd
            }),
            pd = (dd, Od, md, Wd, Rd, Xd) => ({
              origin: dd,
              across: {
                x: Od.x - dd.x,
                y: Od.y - dd.y
              },
              down: {
                x: md.x - dd.x,
                y: md.y - dd.y
              },
              texture: Wd,
              rect: Fd.cropFaces ? Rd : [0, 0, 1, 1],
              shade: Xd
            }),
            Yd = new Uint8ClampedArray(Xd * Xd * 4),
            gd = new Uint8Array(Xd * Xd),
            wd = Kd;
          for (const [dd, Od, md, Rd, Kd, td] of Fd.boxes) {
            const Fd = pd(Td(Rd, Kd, td), Td(Rd, Kd, md), Td(Rd, Od, td), Wd.right, [1 - td, 1 - Kd, 1 - md, 1 - Od], wd.right),
              hd = pd(Td(dd, Kd, td), Td(Rd, Kd, td), Td(dd, Od, td), Wd.left, [dd, 1 - Kd, Rd, 1 - Od], wd.left),
              vd = pd(Td(dd, Kd, md), Td(Rd, Kd, md), Td(dd, Kd, td), Wd.top, [dd, md, Rd, td], wd.top);
            for (const dd of [Fd, hd, vd]) yd(Yd, gd, Xd, dd)
          }
          return td(Yd, Xd, hd, (dd => 1 === gd[dd])), Yd
        }({
          top: bd(Xd, Fd, "texture"),
          left: bd(Xd, hd, "texture"),
          right: bd(Xd, vd, "texture")
        }, function(dd) {
          return "SlabBlock" === dd ? Nd : "StairsBlock" === dd ? qd : od
        }(Td), pd, Yd)))
      } else {
        const {
          id: dd,
          name: Od,
          size: md,
          outlineWidth: Wd
        } = Hd;
        Qd(dd, md, (() => {
          const {
            geometry: dd,
            texture: Fd
          } = bd(vd, Od, "model");
          return hd(dd, Fd, md, Wd)
        }))
      }
    }, Wd.postMessage({
      type: "started"
    })
  }(globalThis, Td)
})();