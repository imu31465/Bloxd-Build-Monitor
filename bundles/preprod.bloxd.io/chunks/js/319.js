export const id = 319;
export const ids = [319];
export const modules = {
  42125: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      _TGATextureLoader: () => xp
    });
    var Op = cp(38905);

    function op(pp) {
      let ip = 0;
      return {
        id_length: pp[ip++],
        colormap_type: pp[ip++],
        image_type: pp[ip++],
        colormap_index: pp[ip++] | pp[ip++] << 8,
        colormap_length: pp[ip++] | pp[ip++] << 8,
        colormap_size: pp[ip++],
        origin: [pp[ip++] | pp[ip++] << 8, pp[ip++] | pp[ip++] << 8],
        width: pp[ip++] | pp[ip++] << 8,
        height: pp[ip++] | pp[ip++] << 8,
        pixel_size: pp[ip++],
        flags: pp[17]
      }
    }

    function Ip(pp, ip) {
      if (ip.length < 19) return void Op.e.Error("Unable to load TGA file - Not enough data to contain header");
      let cp = 18;
      const Ip = op(ip);
      if (Ip.id_length + cp > ip.length) return void Op.e.Error("Unable to load TGA file - Not enough data");
      cp += Ip.id_length;
      let xp, Lp = !1,
        Yp = !1,
        Dp = !1;
      switch (Ip.image_type) {
        case 9:
          Lp = !0;
        case 1:
          Yp = !0;
          break;
        case 10:
          Lp = !0;
        case 2:
          break;
        case 11:
          Lp = !0;
        case 3:
          Dp = !0
      }
      const Ap = Ip.pixel_size >> 3,
        Pp = Ip.width * Ip.height * Ap;
      let Wp, yp, Up, wp, vp, tp, Hp;
      if (Yp && (Wp = ip.subarray(cp, cp += Ip.colormap_length * (Ip.colormap_size >> 3))), Lp) {
        let pp, Op, op;
        xp = new Uint8Array(Pp);
        let Ip = 0;
        const Sp = new Uint8Array(Ap);
        for (; cp < Pp && Ip < Pp;)
          if (pp = ip[cp++], Op = 1 + (127 & pp), 128 & pp) {
            for (op = 0; op < Ap; ++op) Sp[op] = ip[cp++];
            for (op = 0; op < Op; ++op) xp.set(Sp, Ip + op * Ap);
            Ip += Ap * Op
          } else {
            for (Op *= Ap, op = 0; op < Op; ++op) xp[Ip + op] = ip[cp++];
            Ip += Op
          }
      } else xp = ip.subarray(cp, cp + (Yp ? Ip.width * Ip.height : Pp));
      switch ((48 & Ip.flags) >> 4) {
        default:
        case 2:
          yp = 0, wp = 1, Hp = Ip.width, Up = 0, vp = 1, tp = Ip.height;
          break;
        case 0:
          yp = 0, wp = 1, Hp = Ip.width, Up = Ip.height - 1, vp = -1, tp = -1;
          break;
        case 3:
          yp = Ip.width - 1, wp = -1, Hp = -1, Up = 0, vp = 1, tp = Ip.height;
          break;
        case 1:
          yp = Ip.width - 1, wp = -1, Hp = -1, Up = Ip.height - 1, vp = -1, tp = -1
      }
      const dp = "_getImageData" + (Dp ? "Grey" : "") + Ip.pixel_size + "bits",
        ep = Sp[dp](Ip, Wp, xp, Up, vp, tp, yp, wp, Hp);
      pp.gy()._uploadDataToTextureDirectly(pp, ep)
    }
    const Sp = {
      GetTGAHeader: op,
      UploadContent: Ip,
      _getImageData8bits: function(pp, ip, cp, Op, op, Ip, Sp, xp, Lp) {
        const Yp = cp,
          Dp = ip,
          Ap = pp.width,
          Pp = pp.height;
        let Wp, yp, Up, wp = 0;
        const vp = new Uint8Array(Ap * Pp * 4);
        for (Up = Op; Up !== Ip; Up += op)
          for (yp = Sp; yp !== Lp; yp += xp, wp++) Wp = Yp[wp], vp[4 * (yp + Ap * Up) + 3] = 255, vp[4 * (yp + Ap * Up) + 2] = Dp[3 * Wp + 0], vp[4 * (yp + Ap * Up) + 1] = Dp[3 * Wp + 1], vp[4 * (yp + Ap * Up) + 0] = Dp[3 * Wp + 2];
        return vp
      },
      _getImageData16bits: function(pp, ip, cp, Op, op, Ip, Sp, xp, Lp) {
        const Yp = cp,
          Dp = pp.width,
          Ap = pp.height;
        let Pp, Wp, yp, Up = 0;
        const wp = new Uint8Array(Dp * Ap * 4);
        for (yp = Op; yp !== Ip; yp += op)
          for (Wp = Sp; Wp !== Lp; Wp += xp, Up += 2) {
            Pp = Yp[Up + 0] + (Yp[Up + 1] << 8);
            const pp = 255 * ((31744 & Pp) >> 10) / 31 | 0,
              ip = 255 * ((992 & Pp) >> 5) / 31 | 0,
              cp = 255 * (31 & Pp) / 31 | 0;
            wp[4 * (Wp + Dp * yp) + 0] = pp, wp[4 * (Wp + Dp * yp) + 1] = ip, wp[4 * (Wp + Dp * yp) + 2] = cp, wp[4 * (Wp + Dp * yp) + 3] = 32768 & Pp ? 0 : 255
          }
        return wp
      },
      _getImageData24bits: function(pp, ip, cp, Op, op, Ip, Sp, xp, Lp) {
        const Yp = cp,
          Dp = pp.width,
          Ap = pp.height;
        let Pp, Wp, yp = 0;
        const Up = new Uint8Array(Dp * Ap * 4);
        for (Wp = Op; Wp !== Ip; Wp += op)
          for (Pp = Sp; Pp !== Lp; Pp += xp, yp += 3) Up[4 * (Pp + Dp * Wp) + 3] = 255, Up[4 * (Pp + Dp * Wp) + 2] = Yp[yp + 0], Up[4 * (Pp + Dp * Wp) + 1] = Yp[yp + 1], Up[4 * (Pp + Dp * Wp) + 0] = Yp[yp + 2];
        return Up
      },
      _getImageData32bits: function(pp, ip, cp, Op, op, Ip, Sp, xp, Lp) {
        const Yp = cp,
          Dp = pp.width,
          Ap = pp.height;
        let Pp, Wp, yp = 0;
        const Up = new Uint8Array(Dp * Ap * 4);
        for (Wp = Op; Wp !== Ip; Wp += op)
          for (Pp = Sp; Pp !== Lp; Pp += xp, yp += 4) Up[4 * (Pp + Dp * Wp) + 2] = Yp[yp + 0], Up[4 * (Pp + Dp * Wp) + 1] = Yp[yp + 1], Up[4 * (Pp + Dp * Wp) + 0] = Yp[yp + 2], Up[4 * (Pp + Dp * Wp) + 3] = Yp[yp + 3];
        return Up
      },
      _getImageDataGrey8bits: function(pp, ip, cp, Op, op, Ip, Sp, xp, Lp) {
        const Yp = cp,
          Dp = pp.width,
          Ap = pp.height;
        let Pp, Wp, yp, Up = 0;
        const wp = new Uint8Array(Dp * Ap * 4);
        for (yp = Op; yp !== Ip; yp += op)
          for (Wp = Sp; Wp !== Lp; Wp += xp, Up++) Pp = Yp[Up], wp[4 * (Wp + Dp * yp) + 0] = Pp, wp[4 * (Wp + Dp * yp) + 1] = Pp, wp[4 * (Wp + Dp * yp) + 2] = Pp, wp[4 * (Wp + Dp * yp) + 3] = 255;
        return wp
      },
      _getImageDataGrey16bits: function(pp, ip, cp, Op, op, Ip, Sp, xp, Lp) {
        const Yp = cp,
          Dp = pp.width,
          Ap = pp.height;
        let Pp, Wp, yp = 0;
        const Up = new Uint8Array(Dp * Ap * 4);
        for (Wp = Op; Wp !== Ip; Wp += op)
          for (Pp = Sp; Pp !== Lp; Pp += xp, yp += 2) Up[4 * (Pp + Dp * Wp) + 0] = Yp[yp + 0], Up[4 * (Pp + Dp * Wp) + 1] = Yp[yp + 0], Up[4 * (Pp + Dp * Wp) + 2] = Yp[yp + 0], Up[4 * (Pp + Dp * Wp) + 3] = Yp[yp + 1];
        return Up
      }
    };
    class xp {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".env not supported in Cube."
      }
      loadData(pp, ip, cp) {
        const Op = new Uint8Array(pp.buffer, pp.byteOffset, pp.byteLength),
          Sp = op(Op);
        cp(Sp.width, Sp.height, ip.generateMipMaps, !1, (() => {
          Ip(ip, Op)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);