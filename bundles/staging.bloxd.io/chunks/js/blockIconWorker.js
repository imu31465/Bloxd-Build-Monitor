(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var pp = __webpack_require__.u,
        ip = __webpack_require__.e,
        cp = {},
        Op = {};
      __webpack_require__.u = function(ip) {
        return pp(ip) + (cp.hasOwnProperty(ip) ? "?" + cp[ip] : "")
      }, __webpack_require__.e = function(op) {
        return ip(op).catch((function(ip) {
          var Ip = Op.hasOwnProperty(op) ? Op[op] : 4;
          if (Ip < 1) {
            var Sp = pp(op);
            if (ip.message = "Loading chunk " + op + " failed after 4 retries.\n(" + Sp + ")", ip.request = Sp, cp[op] = "cache-bust=" + Date.now(), setTimeout((function() {
                delete Op[op]
              }), 0), "CSS_CHUNK_LOAD_FAILED" === ip.code) {
              var xp = __webpack_require__.miniCssF(op);
              ip.message = ip.message.replace("Loading chunk", "Loading CSS chunk").replace(Sp, xp), ip.request = xp
            }
            throw ip
          }
          return new Promise((function(pp) {
            var ip = 4 - Ip + 1;
            setTimeout((function() {
              var ip = "cache-bust=" + Date.now();
              cp[op] = ip, Op[op] = Ip - 1, pp(__webpack_require__.e(op))
            }), function(pp) {
              return 500 * Math.pow(2, pp)
            }(ip))
          }))
        }))
      }
    }
  })();
  const pp = Math.SQRT1_2,
    ip = Math.SQRT1_2 / 2,
    cp = Math.sqrt(3) / 2,
    Op = 2 * pp,
    op = 2 * ip + cp;

  function Ip(ip, cp) {
    const Op = cp > 0 ? cp + 1 : 0,
      Ip = .6 * ip - cp / pp;
    return Math.max(0, Math.min(Ip, (ip - 2 * Op) / op))
  }
  const Sp = [15, 15, 15],
    xp = {
      top: 1,
      left: .85,
      right: .7
    };

  function Lp(pp, ip, cp, Sp) {
    const {
      vertices: xp,
      uvs: Lp,
      indices: Yp,
      shades: Dp
    } = pp, Pp = function(pp, ip) {
      const cp = Ip(pp, ip),
        Sp = Op * cp,
        xp = op * cp;
      return {
        left: (pp - Sp) / 2,
        top: (pp - xp) / 2,
        width: Sp,
        height: xp
      }
    }(cp, Sp), Wp = new Float32Array(xp.length);
    for (let Op = 0; Op < xp.length; Op += 3) Wp[Op] = Pp.left + xp[Op] * Pp.width, Wp[Op + 1] = Pp.top + xp[Op + 1] * Pp.height, Wp[Op + 2] = xp[Op + 2];
    const yp = new Float32Array(cp * cp).fill(-1 / 0),
      Up = new Uint8ClampedArray(cp * cp * 4),
      wp = 255 * pp.alphaCutoff;
    for (let Op = 0; Op < Yp.length; Op += 3) {
      const [pp, op, Ip] = [Yp[Op], Yp[Op + 1], Yp[Op + 2]], [Sp, xp, Ap] = [3 * pp, 3 * op, 3 * Ip], [Pp, vp, tp, Hp, dp, ep] = [Wp[Sp], Wp[Sp + 1], Wp[xp], Wp[xp + 1], Wp[Ap], Wp[Ap + 1]], jp = (tp - Pp) * (ep - vp) - (dp - Pp) * (Hp - vp);
      if (Math.abs(jp) < 1e-9) continue;
      const kp = Dp[Op / 3],
        [mp, Rp, qp, Mp, Cp, Ep] = [Lp[2 * pp], Lp[2 * pp + 1], Lp[2 * op], Lp[2 * op + 1], Lp[2 * Ip], Lp[2 * Ip + 1]],
        Xp = Math.max(0, Math.floor(Math.min(Pp, tp, dp))),
        lp = Math.min(cp - 1, Math.ceil(Math.max(Pp, tp, dp))),
        Qp = Math.max(0, Math.floor(Math.min(vp, Hp, ep))),
        Jp = Math.min(cp - 1, Math.ceil(Math.max(vp, Hp, ep)));
      for (let Op = Qp; Op <= Jp; Op++)
        for (let pp = Xp; pp <= lp; pp++) {
          const [op, Ip] = [pp + .5, Op + .5], Lp = ((op - Pp) * (ep - vp) - (dp - Pp) * (Ip - vp)) / jp, Yp = ((tp - Pp) * (Ip - vp) - (op - Pp) * (Hp - vp)) / jp, Dp = 1 - Lp - Yp;
          if (Dp < 0 || Lp < 0 || Yp < 0) continue;
          const Xp = Dp * Wp[Sp + 2] + Lp * Wp[xp + 2] + Yp * Wp[Ap + 2],
            lp = Op * cp + pp;
          if (Xp <= yp[lp]) continue;
          const Qp = Math.max(0, Math.min(ip.width - 1, Math.floor((Dp * mp + Lp * qp + Yp * Cp) * ip.width))),
            Jp = 4 * (Math.max(0, Math.min(ip.height - 1, Math.floor((Dp * Rp + Lp * Mp + Yp * Ep) * ip.height))) * ip.width + Qp);
          ip.pixels[Jp + 3] < wp || (yp[lp] = Xp, Up[4 * lp] = ip.pixels[Jp] * kp, Up[4 * lp + 1] = ip.pixels[Jp + 1] * kp, Up[4 * lp + 2] = ip.pixels[Jp + 2] * kp, Up[4 * lp + 3] = 255)
        }
    }
    return Ap(Up, cp, Sp), Up
  }
  let Yp = NaN,
    Dp = new Int32Array(0);

  function Ap(pp, ip, cp) {
    let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ip => 0 !== pp[4 * ip + 3];
    const op = new Uint8Array(ip * ip);
    for (let Sp = 0; Sp < ip * ip; Sp++) op[Sp] = Op(Sp) ? 1 : 0;
    const Ip = (pp, cp) => pp >= 0 && cp >= 0 && pp < ip && cp < ip && 0 === op[cp * ip + pp],
      xp = new Float32Array(ip * ip).fill(1 / 0),
      Lp = function(pp) {
        if (pp !== Yp) {
          const ip = Math.ceil(pp + 1),
            cp = [];
          for (let Op = -ip; Op <= ip; Op++)
            for (let op = -ip; op <= ip; op++) {
              const ip = op * op + Op * Op;
              ip > 0 && ip < (pp + 1) ** 2 && cp.push(op, Op, ip)
            }
          Yp = pp, Dp = Int32Array.from(cp)
        }
        return Dp
      }(cp);
    for (let Sp = 0; Sp < ip; Sp++)
      for (let pp = 0; pp < ip; pp++) {
        if (1 === op[Sp * ip + pp] && (Ip(pp - 1, Sp) || Ip(pp + 1, Sp) || Ip(pp, Sp - 1) || Ip(pp, Sp + 1)))
          for (let cp = 0; cp < Lp.length; cp += 3) {
            const Op = pp + Lp[cp],
              op = Sp + Lp[cp + 1];
            if (Op >= 0 && op >= 0 && Op < ip && op < ip) {
              const pp = op * ip + Op;
              xp[pp] = Math.min(xp[pp], Lp[cp + 2])
            }
          }
      }
    for (let Yp = 0; Yp < ip * ip; Yp++) 1 !== op[Yp] && xp[Yp] !== 1 / 0 && (pp.set(Sp, 4 * Yp), pp[4 * Yp + 3] = Math.round(255 * Math.min(1, cp + 1 - Math.sqrt(xp[Yp]))))
  }
  const Pp = {
      boxes: [
        [0, 0, 0, 1, 1, 1]
      ],
      cropFaces: !1
    },
    Wp = {
      boxes: [
        [0, 0, 0, 1, .5, 1]
      ],
      cropFaces: !1
    },
    yp = {
      boxes: [
        [0, 0, 0, 1, .5, 1],
        [0, .5, 0, .5, 1, 1]
      ],
      cropFaces: !0
    };
  const Up = 1e-6;

  function wp(pp, ip, cp, Op) {
    let {
      origin: op,
      across: Ip,
      down: Sp,
      texture: xp,
      rect: [Lp, Yp, Dp, Ap],
      shade: Pp
    } = Op;
    const Wp = Ip.x * Sp.y - Ip.y * Sp.x;
    if (Math.abs(Wp) < 1e-9) return;
    const yp = [op.x, op.x + Ip.x, op.x + Sp.x, op.x + Ip.x + Sp.x],
      wp = [op.y, op.y + Ip.y, op.y + Sp.y, op.y + Ip.y + Sp.y],
      vp = Math.max(0, Math.floor(Math.min(...yp))),
      tp = Math.min(cp - 1, Math.ceil(Math.max(...yp))),
      Hp = Math.max(0, Math.floor(Math.min(...wp))),
      dp = Math.min(cp - 1, Math.ceil(Math.max(...wp)));
    for (let ep = Hp; ep <= dp; ep++)
      for (let Op = vp; Op <= tp; Op++) {
        const yp = Op + .5 - op.x,
          wp = ep + .5 - op.y,
          vp = (yp * Sp.y - wp * Sp.x) / Wp,
          tp = (Ip.x * wp - Ip.y * yp) / Wp;
        if (vp < -Up || vp > 1 + Up || tp < -Up || tp > 1 + Up) continue;
        const Hp = ep * cp + Op;
        ip[Hp] = 1;
        const dp = Lp + Math.min(Math.max(vp, 0), 1) * (Dp - Lp),
          jp = Yp + Math.min(Math.max(tp, 0), 1) * (Ap - Yp),
          kp = Math.min(xp.width - 1, Math.floor(dp * xp.width)),
          mp = 4 * (Math.min(xp.height - 1, Math.floor(jp * xp.height)) * xp.width + kp),
          Rp = xp.pixels[mp + 3] / 255;
        if (0 === Rp) continue;
        const qp = 4 * Hp,
          Mp = pp[qp + 3] / 255 * (1 - Rp),
          Cp = Rp + Mp;
        for (let ip = 0; ip < 3; ip++) pp[qp + ip] = (xp.pixels[mp + ip] * Pp * Rp + pp[qp + ip] * Mp) / Cp;
        pp[qp + 3] = 255 * Cp
      }
  }

  function vp(pp, ip, cp) {
    const Op = pp.get(ip);
    if (void 0 === Op) throw new Error(`no ${cp} was sent for ${ip.slice(0,100)}`);
    return Op
  }
  const tp = {
      pixelsOf(pp) {
        const ip = new OffscreenCanvas(pp.width, pp.height),
          cp = ip.getContext("2d");
        if (!cp) throw new Error("no 2D context");
        return cp.drawImage(pp, 0, 0), pp.close(), {
          width: ip.width,
          height: ip.height,
          pixels: cp.getImageData(0, 0, ip.width, ip.height).data
        }
      },
      async encode(pp, ip) {
        const cp = new OffscreenCanvas(ip, ip),
          Op = cp.getContext("2d");
        if (!Op) throw new Error("no 2D context");
        Op.putImageData(new ImageData(pp, ip, ip), 0, 0);
        const op = await cp.convertToBlob();
        return new Promise(((pp, ip) => {
          const cp = new FileReader;
          cp.onload = () => {
            pp(cp.result)
          }, cp.onerror = () => {
            var pp;
            ip(null !== (pp = cp.error) && void 0 !== pp ? pp : new Error("the icon did not encode"))
          }, cp.readAsDataURL(op)
        }))
      }
    },
    Hp = globalThis.WorkerGlobalScope;
  void 0 !== Hp && globalThis instanceof Hp && function(Op, op) {
    const Sp = new Map,
      Yp = new Map,
      Dp = (pp, ip, cp) => {
        (async () => {
          try {
            Op.postMessage({
              type: "drawn",
              id: pp,
              url: await op.encode(cp(), ip)
            })
          } catch (Ip) {
            Op.postMessage({
              type: "failed",
              message: String(Ip)
            })
          }
        })()
      };
    Op.onmessage = Op => {
      let {
        data: Up
      } = Op;
      if ("texture" === Up.type) Sp.set(Up.url, op.pixelsOf(Up.bitmap));
      else if ("model" === Up.type) Yp.set(Up.name, {
        geometry: Up.geometry,
        texture: op.pixelsOf(Up.bitmap)
      });
      else if ("draw" === Up.type) {
        const {
          id: Op,
          top: op,
          left: Lp,
          right: Yp,
          itemType: tp,
          size: Hp,
          outlineWidth: dp
        } = Up;
        Dp(Op, Hp, (() => function(Op, op, Sp, Lp) {
          const Yp = Ip(Sp, Lp),
            Dp = Yp * pp,
            Pp = Yp * ip,
            Wp = Yp * cp,
            yp = Math.max(...op.boxes.map((pp => pp[4]))),
            Up = Sp / 2,
            vp = Pp + (Sp - Pp - Pp - yp * Wp) / 2,
            tp = (pp, ip, cp) => ({
              x: Up + (pp - cp) * Dp,
              y: vp - Pp + (pp + cp) * Pp + (yp - ip) * Wp
            }),
            Hp = (pp, ip, cp, Op, Ip, Sp) => ({
              origin: pp,
              across: {
                x: ip.x - pp.x,
                y: ip.y - pp.y
              },
              down: {
                x: cp.x - pp.x,
                y: cp.y - pp.y
              },
              texture: Op,
              rect: op.cropFaces ? Ip : [0, 0, 1, 1],
              shade: Sp
            }),
            dp = new Uint8ClampedArray(Sp * Sp * 4),
            ep = new Uint8Array(Sp * Sp),
            jp = xp;
          for (const [pp, ip, cp, Ip, xp, Ap] of op.boxes) {
            const op = Hp(tp(Ip, xp, Ap), tp(Ip, xp, cp), tp(Ip, ip, Ap), Op.right, [1 - Ap, 1 - xp, 1 - cp, 1 - ip], jp.right),
              Lp = Hp(tp(pp, xp, Ap), tp(Ip, xp, Ap), tp(pp, ip, Ap), Op.left, [pp, 1 - xp, Ip, 1 - ip], jp.left),
              Yp = Hp(tp(pp, xp, cp), tp(Ip, xp, cp), tp(pp, xp, Ap), Op.top, [pp, cp, Ip, Ap], jp.top);
            for (const pp of [op, Lp, Yp]) wp(dp, ep, Sp, pp)
          }
          return Ap(dp, Sp, Lp, (pp => 1 === ep[pp])), dp
        }({
          top: vp(Sp, op, "texture"),
          left: vp(Sp, Lp, "texture"),
          right: vp(Sp, Yp, "texture")
        }, function(pp) {
          return "SlabBlock" === pp ? Wp : "StairsBlock" === pp ? yp : Pp
        }(tp), Hp, dp)))
      } else {
        const {
          id: pp,
          name: ip,
          size: cp,
          outlineWidth: Op
        } = Up;
        Dp(pp, cp, (() => {
          const {
            geometry: pp,
            texture: op
          } = vp(Yp, ip, "model");
          return Lp(pp, op, cp, Op)
        }))
      }
    }, Op.postMessage({
      type: "started"
    })
  }(globalThis, tp)
})();