export const id = 302;
export const ids = [302];
export const modules = {
  41245: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      _HDRTextureLoader: () => fb
    });
    var kb = sb(36656);
    class Wb {
      static ConvertPanoramaToCubemap(bb, cb, sb, kb) {
        let Wb, ab = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Tb = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        if (!bb) throw "ConvertPanoramaToCubemap: input cannot be null";
        if (bb.length != cb * sb * 3) {
          if (bb.length != cb * sb * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
          Wb = 4
        } else Wb = 3;
        return {
          front: this.CreateCubemapTexture(kb, this.FACE_FRONT, bb, cb, sb, ab, Tb, Wb),
          back: this.CreateCubemapTexture(kb, this.FACE_BACK, bb, cb, sb, ab, Tb, Wb),
          left: this.CreateCubemapTexture(kb, this.FACE_LEFT, bb, cb, sb, ab, Tb, Wb),
          right: this.CreateCubemapTexture(kb, this.FACE_RIGHT, bb, cb, sb, ab, Tb, Wb),
          up: this.CreateCubemapTexture(kb, this.FACE_UP, bb, cb, sb, ab, Tb, Wb),
          down: this.CreateCubemapTexture(kb, this.FACE_DOWN, bb, cb, sb, ab, Tb, Wb),
          size: kb,
          type: 1,
          format: 4,
          gammaSpace: !1
        }
      }
      static CreateCubemapTexture(bb, cb, sb, kb, Wb, ab, Tb, Ub) {
        const Ib = new ArrayBuffer(bb * bb * 4 * 3),
          Hb = new Float32Array(Ib),
          fb = ab ? Math.max(1, Math.round(kb / 4 / bb)) : 1,
          Mb = 1 / fb,
          Xb = Mb * Mb,
          nb = cb[1].subtract(cb[0]).scale(Mb / bb),
          mb = cb[3].subtract(cb[2]).scale(Mb / bb),
          lb = 1 / bb;
        let Qb = 0;
        for (let eb = 0; eb < bb; eb++)
          for (let ab = 0; ab < fb; ab++) {
            let ab = cb[0],
              Ib = cb[2];
            for (let cb = 0; cb < bb; cb++)
              for (let Mb = 0; Mb < fb; Mb++) {
                const fb = Ib.subtract(ab).scale(Qb).add(ab);
                fb.normalize();
                const Mb = this.CalcProjectionSpherical(fb, sb, kb, Wb, Ub, Tb);
                Hb[eb * bb * 3 + 3 * cb + 0] += Mb.r * Xb, Hb[eb * bb * 3 + 3 * cb + 1] += Mb.g * Xb, Hb[eb * bb * 3 + 3 * cb + 2] += Mb.b * Xb, ab = ab.add(nb), Ib = Ib.add(mb)
              }
            Qb += lb * Mb
          }
        return Hb
      }
      static CalcProjectionSpherical(bb, cb, sb, kb, Wb, ab) {
        let Tb = Math.atan2(bb.z, bb.x);
        const Ub = Math.acos(bb.y);
        for (; Tb < -Math.PI;) Tb += 2 * Math.PI;
        for (; Tb > Math.PI;) Tb -= 2 * Math.PI;
        let Ib = Tb / Math.PI;
        const Hb = Ub / Math.PI;
        Ib = .5 * Ib + .5;
        let fb = Math.round(Ib * sb);
        fb < 0 ? fb = 0 : fb >= sb && (fb = sb - 1);
        let Mb = Math.round(Hb * kb);
        Mb < 0 ? Mb = 0 : Mb >= kb && (Mb = kb - 1);
        const Xb = ab ? kb - Mb - 1 : Mb;
        return {
          r: cb[Xb * sb * Wb + fb * Wb + 0],
          g: cb[Xb * sb * Wb + fb * Wb + 1],
          b: cb[Xb * sb * Wb + fb * Wb + 2]
        }
      }
    }

    function ab(bb, cb, sb, kb, Wb, ab) {
      Wb > 0 ? (Wb = function(bb, cb) {
        return cb > 1023 ? bb * Math.pow(2, 1023) * Math.pow(2, cb - 1023) : cb < -1074 ? bb * Math.pow(2, -1074) * Math.pow(2, cb + 1074) : bb * Math.pow(2, cb)
      }(1, Wb - 136), bb[ab + 0] = cb * Wb, bb[ab + 1] = sb * Wb, bb[ab + 2] = kb * Wb) : (bb[ab + 0] = 0, bb[ab + 1] = 0, bb[ab + 2] = 0)
    }

    function Tb(bb, cb) {
      let sb, kb = "";
      for (let Wb = cb; Wb < bb.length - cb && (sb = String.fromCharCode(bb[Wb]), "\n" != sb); Wb++) kb += sb;
      return kb
    }

    function Ub(bb) {
      let cb = Tb(bb, 0);
      if ("#" != cb[0] || "?" != cb[1]) throw "Bad HDR Format.";
      let sb = !1,
        kb = !1,
        Wb = 0;
      do {
        Wb += cb.length + 1, cb = Tb(bb, Wb), "FORMAT=32-bit_rle_rgbe" == cb ? kb = !0 : 0 == cb.length && (sb = !0)
      } while (!sb);
      if (!kb) throw "HDR Bad header format, unsupported FORMAT";
      Wb += cb.length + 1, cb = Tb(bb, Wb);
      const ab = /^-Y (.*) \+X (.*)$/g.exec(cb);
      if (!ab || ab.length < 3) throw "HDR Bad header format, no size";
      const Ub = parseInt(ab[2]),
        Ib = parseInt(ab[1]);
      if (Ub < 8 || Ub > 32767) throw "HDR Bad header format, unsupported size";
      return Wb += cb.length + 1, {
        height: Ib,
        width: Ub,
        dataPosition: Wb
      }
    }

    function Ib(bb, cb) {
      return function(bb, cb) {
        let sb = cb.height;
        const kb = cb.width;
        let Wb, Tb, Ub, Ib, fb, Mb, Xb, nb, mb = cb.dataPosition;
        const lb = new ArrayBuffer(4 * kb),
          Qb = new Uint8Array(lb),
          eb = new ArrayBuffer(cb.width * cb.height * 4 * 3),
          Cb = new Float32Array(eb);
        for (; sb > 0;) {
          if (Wb = bb[mb++], Tb = bb[mb++], Ub = bb[mb++], Ib = bb[mb++], 2 != Wb || 2 != Tb || 128 & Ub || cb.width < 8 || cb.width > 32767) return Hb(bb, cb);
          if ((Ub << 8 | Ib) != kb) throw "HDR Bad header format, wrong scan line width";
          for (Mb = 0, nb = 0; nb < 4; nb++)
            for (Xb = (nb + 1) * kb; Mb < Xb;)
              if (Wb = bb[mb++], Tb = bb[mb++], Wb > 128) {
                if (fb = Wb - 128, 0 == fb || fb > Xb - Mb) throw "HDR Bad Format, bad scanline data (run)";
                for (; fb-- > 0;) Qb[Mb++] = Tb
              } else {
                if (fb = Wb, 0 == fb || fb > Xb - Mb) throw "HDR Bad Format, bad scanline data (non-run)";
                if (Qb[Mb++] = Tb, --fb > 0)
                  for (let cb = 0; cb < fb; cb++) Qb[Mb++] = bb[mb++]
              } for (nb = 0; nb < kb; nb++) Wb = Qb[nb], Tb = Qb[nb + kb], Ub = Qb[nb + 2 * kb], Ib = Qb[nb + 3 * kb], ab(Cb, Wb, Tb, Ub, Ib, (cb.height - sb) * kb * 3 + 3 * nb);
          sb--
        }
        return Cb
      }(bb, cb)
    }

    function Hb(bb, cb) {
      let sb = cb.height;
      const kb = cb.width;
      let Wb, Tb, Ub, Ib, Hb, fb = cb.dataPosition;
      const Mb = new ArrayBuffer(cb.width * cb.height * 4 * 3),
        Xb = new Float32Array(Mb);
      for (; sb > 0;) {
        for (Hb = 0; Hb < cb.width; Hb++) Wb = bb[fb++], Tb = bb[fb++], Ub = bb[fb++], Ib = bb[fb++], ab(Xb, Wb, Tb, Ub, Ib, (cb.height - sb) * kb * 3 + 3 * Hb);
        sb--
      }
      return Xb
    }
    Wb.FACE_LEFT = [new kb.p(-1, -1, -1), new kb.p(1, -1, -1), new kb.p(-1, 1, -1), new kb.p(1, 1, -1)], Wb.FACE_RIGHT = [new kb.p(1, -1, 1), new kb.p(-1, -1, 1), new kb.p(1, 1, 1), new kb.p(-1, 1, 1)], Wb.FACE_FRONT = [new kb.p(1, -1, -1), new kb.p(1, -1, 1), new kb.p(1, 1, -1), new kb.p(1, 1, 1)], Wb.FACE_BACK = [new kb.p(-1, -1, 1), new kb.p(-1, -1, -1), new kb.p(-1, 1, 1), new kb.p(-1, 1, -1)], Wb.FACE_DOWN = [new kb.p(1, 1, -1), new kb.p(1, 1, 1), new kb.p(-1, 1, -1), new kb.p(-1, 1, 1)], Wb.FACE_UP = [new kb.p(-1, -1, -1), new kb.p(-1, -1, 1), new kb.p(1, -1, -1), new kb.p(1, -1, 1)];
    class fb {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".hdr not supported in Cube."
      }
      loadData(bb, cb, sb) {
        const kb = new Uint8Array(bb.buffer, bb.byteOffset, bb.byteLength),
          Wb = Ub(kb),
          ab = Ib(kb, Wb),
          Tb = Wb.width * Wb.height,
          Hb = new Float32Array(4 * Tb);
        for (let Ub = 0; Ub < Tb; Ub += 1) Hb[4 * Ub] = ab[3 * Ub], Hb[4 * Ub + 1] = ab[3 * Ub + 1], Hb[4 * Ub + 2] = ab[3 * Ub + 2], Hb[4 * Ub + 3] = 1;
        sb(Wb.width, Wb.height, cb.generateMipMaps, !1, (() => {
          const bb = cb.Sm();
          cb.type = 1, cb.format = 5, cb._gammaSpace = !1, bb._uploadDataToTextureDirectly(cb, Hb)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);