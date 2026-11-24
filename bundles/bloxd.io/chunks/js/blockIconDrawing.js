export const id = 2;
export const ids = [2];
export const modules = {
  36611: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      drawBlockIcon: () => vp,
      drawBlockIconUrl: () => tp,
      getDrawnBlockIcon: () => wp
    });
    var Op = cp(36618);
    const op = {
        boxes: [
          [0, 0, 0, 1, 1, 1]
        ],
        cropFaces: !1
      },
      Ip = {
        boxes: [
          [0, 0, 0, 1, .5, 1]
        ],
        cropFaces: !1
      },
      Sp = {
        boxes: [
          [0, 0, 0, 1, .5, 1],
          [0, .5, 0, .5, 1, 1]
        ],
        cropFaces: !0
      };
    const xp = 1e-6;

    function Lp(pp, ip, cp, Op) {
      let {
        origin: op,
        across: Ip,
        down: Sp,
        texture: Lp,
        rect: [Yp, Dp, Ap, Pp],
        shade: Wp
      } = Op;
      const yp = Ip.x * Sp.y - Ip.y * Sp.x;
      if (Math.abs(yp) < 1e-9) return;
      const Up = [op.x, op.x + Ip.x, op.x + Sp.x, op.x + Ip.x + Sp.x],
        wp = [op.y, op.y + Ip.y, op.y + Sp.y, op.y + Ip.y + Sp.y],
        vp = Math.max(0, Math.floor(Math.min(...Up))),
        tp = Math.min(cp - 1, Math.ceil(Math.max(...Up))),
        Hp = Math.max(0, Math.floor(Math.min(...wp))),
        dp = Math.min(cp - 1, Math.ceil(Math.max(...wp)));
      for (let ep = Hp; ep <= dp; ep++)
        for (let Op = vp; Op <= tp; Op++) {
          const Up = Op + .5 - op.x,
            wp = ep + .5 - op.y,
            vp = (Up * Sp.y - wp * Sp.x) / yp,
            tp = (Ip.x * wp - Ip.y * Up) / yp;
          if (vp < -xp || vp > 1 + xp || tp < -xp || tp > 1 + xp) continue;
          const Hp = ep * cp + Op;
          ip[Hp] = 1;
          const dp = Yp + Math.min(Math.max(vp, 0), 1) * (Ap - Yp),
            jp = Dp + Math.min(Math.max(tp, 0), 1) * (Pp - Dp),
            kp = Math.min(Lp.width - 1, Math.floor(dp * Lp.width)),
            mp = 4 * (Math.min(Lp.height - 1, Math.floor(jp * Lp.height)) * Lp.width + kp),
            Rp = Lp.pixels[mp + 3] / 255;
          if (0 === Rp) continue;
          const qp = 4 * Hp,
            Mp = pp[qp + 3] / 255 * (1 - Rp),
            Cp = Rp + Mp;
          for (let ip = 0; ip < 3; ip++) pp[qp + ip] = (Lp.pixels[mp + ip] * Wp * Rp + pp[qp + ip] * Mp) / Cp;
          pp[qp + 3] = 255 * Cp
        }
    }
    var Yp = cp(36622);
    const Dp = new Map,
      Ap = new Map,
      Pp = new Map,
      Wp = new Map;

    function yp(pp, ip, cp) {
      return `${ip}|${cp}|${pp}`
    }

    function Up(pp, ip, cp) {
      let Op = pp.get(ip);
      return void 0 === Op && (Op = cp().catch((cp => {
        throw pp.delete(ip), cp
      })), pp.set(ip, Op)), Op
    }

    function wp(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Ap.get(yp(pp, ip, cp))
    }

    function vp(pp, ip, cp, Op) {
      const op = yp(pp, ip, cp);
      return Up(Dp, op, (async () => {
        const Ip = await Hp(Op(pp), ip, cp);
        return Ap.set(op, Ip), Ip
      }))
    }

    function tp(pp, ip, cp, Op) {
      return Up(Pp, yp(pp, ip, cp), (async () => {
        var op;
        const Ip = Op(pp);
        return null !== (op = await (0, Yp.d)(Ip, ip, cp)) && void 0 !== op ? op : (await Hp(Ip, ip, cp)).toDataURL()
      }))
    }
    async function Hp(pp, ip, cp) {
      let {
        top: xp,
        left: Yp,
        right: Dp,
        itemType: Ap
      } = pp;
      const [Pp, Wp, yp] = await Promise.all([dp(xp), dp(Yp), dp(Dp)]), Up = function(pp, ip, cp, op) {
        const Ip = (0, Op.g)(cp, op),
          Sp = Ip * Op.c.across,
          xp = Ip * Op.c.down,
          Yp = Ip * Op.c.up,
          Dp = Math.max(...ip.boxes.map((pp => pp[4]))),
          Ap = cp / 2,
          Pp = xp + (cp - xp - xp - Dp * Yp) / 2,
          Wp = (pp, ip, cp) => ({
            x: Ap + (pp - cp) * Sp,
            y: Pp - xp + (pp + cp) * xp + (Dp - ip) * Yp
          }),
          yp = (pp, cp, Op, op, Ip, Sp) => ({
            origin: pp,
            across: {
              x: cp.x - pp.x,
              y: cp.y - pp.y
            },
            down: {
              x: Op.x - pp.x,
              y: Op.y - pp.y
            },
            texture: op,
            rect: ip.cropFaces ? Ip : [0, 0, 1, 1],
            shade: Sp
          }),
          Up = new Uint8ClampedArray(cp * cp * 4),
          wp = new Uint8Array(cp * cp),
          vp = Op.d;
        for (const [Op, tp, Hp, dp, ep, jp] of ip.boxes) {
          const ip = yp(Wp(dp, ep, jp), Wp(dp, ep, Hp), Wp(dp, tp, jp), pp.right, [1 - jp, 1 - ep, 1 - Hp, 1 - tp], vp.right),
            op = yp(Wp(Op, ep, jp), Wp(dp, ep, jp), Wp(Op, tp, jp), pp.left, [Op, 1 - ep, dp, 1 - tp], vp.left),
            Ip = yp(Wp(Op, ep, Hp), Wp(dp, ep, Hp), Wp(Op, ep, jp), pp.top, [Op, Hp, dp, jp], vp.top);
          for (const pp of [ip, op, Ip]) Lp(Up, wp, cp, pp)
        }
        return (0, Op.k)(Up, cp, op, (pp => 1 === wp[pp])), Up
      }({
        top: Pp,
        left: Wp,
        right: yp
      }, function(pp) {
        return "SlabBlock" === pp ? Ip : "StairsBlock" === pp ? Sp : op
      }(Ap), ip, cp), wp = document.createElement("canvas");
      wp.width = ip, wp.height = ip;
      const vp = wp.getContext("2d");
      if (!vp) throw new Error("Failed to get 2D context");
      return vp.putImageData(new ImageData(Up, ip, ip), 0, 0), wp
    }

    function dp(pp) {
      return Up(Wp, pp, (async () => {
        const ip = await (0, Yp.h)(pp),
          cp = document.createElement("canvas");
        cp.width = ip.width, cp.height = ip.height;
        const Op = cp.getContext("2d");
        if (!Op) throw new Error("Failed to get 2D context");
        return Op.drawImage(ip, 0, 0), {
          width: ip.width,
          height: ip.height,
          pixels: Op.getImageData(0, 0, ip.width, ip.height).data
        }
      }))
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);