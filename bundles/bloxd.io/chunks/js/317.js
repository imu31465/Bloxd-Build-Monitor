export const id = 317;
export const ids = [317];
export const modules = {
  42115: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      _HDRTextureLoader: () => Dp
    });
    var Op = cp(37320);
    class op {
      static ConvertPanoramaToCubemap(pp, ip, cp, Op) {
        let op, Ip = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Sp = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        if (!pp) throw "ConvertPanoramaToCubemap: input cannot be null";
        if (pp.length != ip * cp * 3) {
          if (pp.length != ip * cp * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
          op = 4
        } else op = 3;
        return {
          front: this.CreateCubemapTexture(Op, this.FACE_FRONT, pp, ip, cp, Ip, Sp, op),
          back: this.CreateCubemapTexture(Op, this.FACE_BACK, pp, ip, cp, Ip, Sp, op),
          left: this.CreateCubemapTexture(Op, this.FACE_LEFT, pp, ip, cp, Ip, Sp, op),
          right: this.CreateCubemapTexture(Op, this.FACE_RIGHT, pp, ip, cp, Ip, Sp, op),
          up: this.CreateCubemapTexture(Op, this.FACE_UP, pp, ip, cp, Ip, Sp, op),
          down: this.CreateCubemapTexture(Op, this.FACE_DOWN, pp, ip, cp, Ip, Sp, op),
          size: Op,
          type: 1,
          format: 4,
          gammaSpace: !1
        }
      }
      static CreateCubemapTexture(pp, ip, cp, Op, op, Ip, Sp, xp) {
        const Lp = new ArrayBuffer(pp * pp * 4 * 3),
          Yp = new Float32Array(Lp),
          Dp = Ip ? Math.max(1, Math.round(Op / 4 / pp)) : 1,
          Ap = 1 / Dp,
          Pp = Ap * Ap,
          Wp = ip[1].subtract(ip[0]).scale(Ap / pp),
          yp = ip[3].subtract(ip[2]).scale(Ap / pp),
          Up = 1 / pp;
        let wp = 0;
        for (let vp = 0; vp < pp; vp++)
          for (let Ip = 0; Ip < Dp; Ip++) {
            let Ip = ip[0],
              Lp = ip[2];
            for (let ip = 0; ip < pp; ip++)
              for (let Ap = 0; Ap < Dp; Ap++) {
                const Dp = Lp.subtract(Ip).scale(wp).add(Ip);
                Dp.normalize();
                const Ap = this.CalcProjectionSpherical(Dp, cp, Op, op, xp, Sp);
                Yp[vp * pp * 3 + 3 * ip + 0] += Ap.r * Pp, Yp[vp * pp * 3 + 3 * ip + 1] += Ap.g * Pp, Yp[vp * pp * 3 + 3 * ip + 2] += Ap.b * Pp, Ip = Ip.add(Wp), Lp = Lp.add(yp)
              }
            wp += Up * Ap
          }
        return Yp
      }
      static CalcProjectionSpherical(pp, ip, cp, Op, op, Ip) {
        let Sp = Math.atan2(pp.z, pp.x);
        const xp = Math.acos(pp.y);
        for (; Sp < -Math.PI;) Sp += 2 * Math.PI;
        for (; Sp > Math.PI;) Sp -= 2 * Math.PI;
        let Lp = Sp / Math.PI;
        const Yp = xp / Math.PI;
        Lp = .5 * Lp + .5;
        let Dp = Math.round(Lp * cp);
        Dp < 0 ? Dp = 0 : Dp >= cp && (Dp = cp - 1);
        let Ap = Math.round(Yp * Op);
        Ap < 0 ? Ap = 0 : Ap >= Op && (Ap = Op - 1);
        const Pp = Ip ? Op - Ap - 1 : Ap;
        return {
          r: ip[Pp * cp * op + Dp * op + 0],
          g: ip[Pp * cp * op + Dp * op + 1],
          b: ip[Pp * cp * op + Dp * op + 2]
        }
      }
    }

    function Ip(pp, ip, cp, Op, op, Ip) {
      op > 0 ? (op = function(pp, ip) {
        return ip > 1023 ? pp * Math.pow(2, 1023) * Math.pow(2, ip - 1023) : ip < -1074 ? pp * Math.pow(2, -1074) * Math.pow(2, ip + 1074) : pp * Math.pow(2, ip)
      }(1, op - 136), pp[Ip + 0] = ip * op, pp[Ip + 1] = cp * op, pp[Ip + 2] = Op * op) : (pp[Ip + 0] = 0, pp[Ip + 1] = 0, pp[Ip + 2] = 0)
    }

    function Sp(pp, ip) {
      let cp, Op = "";
      for (let op = ip; op < pp.length - ip && (cp = String.fromCharCode(pp[op]), "\n" != cp); op++) Op += cp;
      return Op
    }

    function xp(pp) {
      let ip = Sp(pp, 0);
      if ("#" != ip[0] || "?" != ip[1]) throw "Bad HDR Format.";
      let cp = !1,
        Op = !1,
        op = 0;
      do {
        op += ip.length + 1, ip = Sp(pp, op), "FORMAT=32-bit_rle_rgbe" == ip ? Op = !0 : 0 == ip.length && (cp = !0)
      } while (!cp);
      if (!Op) throw "HDR Bad header format, unsupported FORMAT";
      op += ip.length + 1, ip = Sp(pp, op);
      const Ip = /^-Y (.*) \+X (.*)$/g.exec(ip);
      if (!Ip || Ip.length < 3) throw "HDR Bad header format, no size";
      const xp = parseInt(Ip[2]),
        Lp = parseInt(Ip[1]);
      if (xp < 8 || xp > 32767) throw "HDR Bad header format, unsupported size";
      return op += ip.length + 1, {
        height: Lp,
        width: xp,
        dataPosition: op
      }
    }

    function Lp(pp, ip) {
      return function(pp, ip) {
        let cp = ip.height;
        const Op = ip.width;
        let op, Sp, xp, Lp, Dp, Ap, Pp, Wp, yp = ip.dataPosition;
        const Up = new ArrayBuffer(4 * Op),
          wp = new Uint8Array(Up),
          vp = new ArrayBuffer(ip.width * ip.height * 4 * 3),
          tp = new Float32Array(vp);
        for (; cp > 0;) {
          if (op = pp[yp++], Sp = pp[yp++], xp = pp[yp++], Lp = pp[yp++], 2 != op || 2 != Sp || 128 & xp || ip.width < 8 || ip.width > 32767) return Yp(pp, ip);
          if ((xp << 8 | Lp) != Op) throw "HDR Bad header format, wrong scan line width";
          for (Ap = 0, Wp = 0; Wp < 4; Wp++)
            for (Pp = (Wp + 1) * Op; Ap < Pp;)
              if (op = pp[yp++], Sp = pp[yp++], op > 128) {
                if (Dp = op - 128, 0 == Dp || Dp > Pp - Ap) throw "HDR Bad Format, bad scanline data (run)";
                for (; Dp-- > 0;) wp[Ap++] = Sp
              } else {
                if (Dp = op, 0 == Dp || Dp > Pp - Ap) throw "HDR Bad Format, bad scanline data (non-run)";
                if (wp[Ap++] = Sp, --Dp > 0)
                  for (let ip = 0; ip < Dp; ip++) wp[Ap++] = pp[yp++]
              } for (Wp = 0; Wp < Op; Wp++) op = wp[Wp], Sp = wp[Wp + Op], xp = wp[Wp + 2 * Op], Lp = wp[Wp + 3 * Op], Ip(tp, op, Sp, xp, Lp, (ip.height - cp) * Op * 3 + 3 * Wp);
          cp--
        }
        return tp
      }(pp, ip)
    }

    function Yp(pp, ip) {
      let cp = ip.height;
      const Op = ip.width;
      let op, Sp, xp, Lp, Yp, Dp = ip.dataPosition;
      const Ap = new ArrayBuffer(ip.width * ip.height * 4 * 3),
        Pp = new Float32Array(Ap);
      for (; cp > 0;) {
        for (Yp = 0; Yp < ip.width; Yp++) op = pp[Dp++], Sp = pp[Dp++], xp = pp[Dp++], Lp = pp[Dp++], Ip(Pp, op, Sp, xp, Lp, (ip.height - cp) * Op * 3 + 3 * Yp);
        cp--
      }
      return Pp
    }
    op.FACE_LEFT = [new Op.o(-1, -1, -1), new Op.o(1, -1, -1), new Op.o(-1, 1, -1), new Op.o(1, 1, -1)], op.FACE_RIGHT = [new Op.o(1, -1, 1), new Op.o(-1, -1, 1), new Op.o(1, 1, 1), new Op.o(-1, 1, 1)], op.FACE_FRONT = [new Op.o(1, -1, -1), new Op.o(1, -1, 1), new Op.o(1, 1, -1), new Op.o(1, 1, 1)], op.FACE_BACK = [new Op.o(-1, -1, 1), new Op.o(-1, -1, -1), new Op.o(-1, 1, 1), new Op.o(-1, 1, -1)], op.FACE_DOWN = [new Op.o(1, 1, -1), new Op.o(1, 1, 1), new Op.o(-1, 1, -1), new Op.o(-1, 1, 1)], op.FACE_UP = [new Op.o(-1, -1, -1), new Op.o(-1, -1, 1), new Op.o(1, -1, -1), new Op.o(1, -1, 1)];
    class Dp {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".hdr not supported in Cube."
      }
      loadData(pp, ip, cp) {
        const Op = new Uint8Array(pp.buffer, pp.byteOffset, pp.byteLength),
          op = xp(Op),
          Ip = Lp(Op, op),
          Sp = op.width * op.height,
          Yp = new Float32Array(4 * Sp);
        for (let xp = 0; xp < Sp; xp += 1) Yp[4 * xp] = Ip[3 * xp], Yp[4 * xp + 1] = Ip[3 * xp + 1], Yp[4 * xp + 2] = Ip[3 * xp + 2], Yp[4 * xp + 3] = 1;
        cp(op.width, op.height, ip.generateMipMaps, !1, (() => {
          const pp = ip.gy();
          ip.type = 1, ip.format = 5, ip._gammaSpace = !1, pp._uploadDataToTextureDirectly(ip, Yp)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);