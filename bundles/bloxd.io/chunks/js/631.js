export const id = 631;
export const ids = [631];
export const modules = {
  54072: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      _HDRTextureLoader: () => Ib
    });
    var eb = Mb(38285);
    class Hb {
      static ConvertPanoramaToCubemap(bb, wb, Mb, eb) {
        let Hb, pb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Vb = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        if (!bb) throw "ConvertPanoramaToCubemap: input cannot be null";
        if (bb.length != wb * Mb * 3) {
          if (bb.length != wb * Mb * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
          Hb = 4
        } else Hb = 3;
        return {
          front: this.CreateCubemapTexture(eb, this.FACE_FRONT, bb, wb, Mb, pb, Vb, Hb),
          back: this.CreateCubemapTexture(eb, this.FACE_BACK, bb, wb, Mb, pb, Vb, Hb),
          left: this.CreateCubemapTexture(eb, this.FACE_LEFT, bb, wb, Mb, pb, Vb, Hb),
          right: this.CreateCubemapTexture(eb, this.FACE_RIGHT, bb, wb, Mb, pb, Vb, Hb),
          up: this.CreateCubemapTexture(eb, this.FACE_UP, bb, wb, Mb, pb, Vb, Hb),
          down: this.CreateCubemapTexture(eb, this.FACE_DOWN, bb, wb, Mb, pb, Vb, Hb),
          size: eb,
          type: 1,
          format: 4,
          gammaSpace: !1
        }
      }
      static CreateCubemapTexture(bb, wb, Mb, eb, Hb, pb, Vb, gb) {
        const lb = new ArrayBuffer(bb * bb * 4 * 3),
          Lb = new Float32Array(lb),
          Ib = pb ? Math.max(1, Math.round(eb / 4 / bb)) : 1,
          Ob = 1 / Ib,
          Ub = Ob * Ob,
          tb = wb[1].subtract(wb[0]).scale(Ob / bb),
          Cb = wb[3].subtract(wb[2]).scale(Ob / bb),
          Eb = 1 / bb;
        let Fb = 0;
        for (let Bb = 0; Bb < bb; Bb++)
          for (let pb = 0; pb < Ib; pb++) {
            let pb = wb[0],
              lb = wb[2];
            for (let wb = 0; wb < bb; wb++)
              for (let Ob = 0; Ob < Ib; Ob++) {
                const Ib = lb.subtract(pb).scale(Fb).add(pb);
                Ib.normalize();
                const Ob = this.CalcProjectionSpherical(Ib, Mb, eb, Hb, gb, Vb);
                Lb[Bb * bb * 3 + 3 * wb + 0] += Ob.r * Ub, Lb[Bb * bb * 3 + 3 * wb + 1] += Ob.g * Ub, Lb[Bb * bb * 3 + 3 * wb + 2] += Ob.b * Ub, pb = pb.add(tb), lb = lb.add(Cb)
              }
            Fb += Eb * Ob
          }
        return Lb
      }
      static CalcProjectionSpherical(bb, wb, Mb, eb, Hb, pb) {
        let Vb = Math.atan2(bb.z, bb.x);
        const gb = Math.acos(bb.y);
        for (; Vb < -Math.PI;) Vb += 2 * Math.PI;
        for (; Vb > Math.PI;) Vb -= 2 * Math.PI;
        let lb = Vb / Math.PI;
        const Lb = gb / Math.PI;
        lb = .5 * lb + .5;
        let Ib = Math.round(lb * Mb);
        Ib < 0 ? Ib = 0 : Ib >= Mb && (Ib = Mb - 1);
        let Ob = Math.round(Lb * eb);
        Ob < 0 ? Ob = 0 : Ob >= eb && (Ob = eb - 1);
        const Ub = pb ? eb - Ob - 1 : Ob;
        return {
          r: wb[Ub * Mb * Hb + Ib * Hb + 0],
          g: wb[Ub * Mb * Hb + Ib * Hb + 1],
          b: wb[Ub * Mb * Hb + Ib * Hb + 2]
        }
      }
    }

    function pb(bb, wb, Mb, eb, Hb, pb) {
      Hb > 0 ? (Hb = function(bb, wb) {
        return wb > 1023 ? bb * Math.pow(2, 1023) * Math.pow(2, wb - 1023) : wb < -1074 ? bb * Math.pow(2, -1074) * Math.pow(2, wb + 1074) : bb * Math.pow(2, wb)
      }(1, Hb - 136), bb[pb + 0] = wb * Hb, bb[pb + 1] = Mb * Hb, bb[pb + 2] = eb * Hb) : (bb[pb + 0] = 0, bb[pb + 1] = 0, bb[pb + 2] = 0)
    }

    function Vb(bb, wb) {
      let Mb, eb = "";
      for (let Hb = wb; Hb < bb.length - wb && (Mb = String.fromCharCode(bb[Hb]), "\n" != Mb); Hb++) eb += Mb;
      return eb
    }

    function gb(bb) {
      let wb = Vb(bb, 0);
      if ("#" != wb[0] || "?" != wb[1]) throw "Bad HDR Format.";
      let Mb = !1,
        eb = !1,
        Hb = 0;
      do {
        Hb += wb.length + 1, wb = Vb(bb, Hb), "FORMAT=32-bit_rle_rgbe" == wb ? eb = !0 : 0 == wb.length && (Mb = !0)
      } while (!Mb);
      if (!eb) throw "HDR Bad header format, unsupported FORMAT";
      Hb += wb.length + 1, wb = Vb(bb, Hb);
      const pb = /^-Y (.*) \+X (.*)$/g.exec(wb);
      if (!pb || pb.length < 3) throw "HDR Bad header format, no size";
      const gb = parseInt(pb[2]),
        lb = parseInt(pb[1]);
      if (gb < 8 || gb > 32767) throw "HDR Bad header format, unsupported size";
      return Hb += wb.length + 1, {
        height: lb,
        width: gb,
        dataPosition: Hb
      }
    }

    function lb(bb, wb) {
      return function(bb, wb) {
        let Mb = wb.height;
        const eb = wb.width;
        let Hb, Vb, gb, lb, Ib, Ob, Ub, tb, Cb = wb.dataPosition;
        const Eb = new ArrayBuffer(4 * eb),
          Fb = new Uint8Array(Eb),
          Bb = new ArrayBuffer(wb.width * wb.height * 4 * 3),
          sb = new Float32Array(Bb);
        for (; Mb > 0;) {
          if (Hb = bb[Cb++], Vb = bb[Cb++], gb = bb[Cb++], lb = bb[Cb++], 2 != Hb || 2 != Vb || 128 & gb || wb.width < 8 || wb.width > 32767) return Lb(bb, wb);
          if ((gb << 8 | lb) != eb) throw "HDR Bad header format, wrong scan line width";
          for (Ob = 0, tb = 0; tb < 4; tb++)
            for (Ub = (tb + 1) * eb; Ob < Ub;)
              if (Hb = bb[Cb++], Vb = bb[Cb++], Hb > 128) {
                if (Ib = Hb - 128, 0 == Ib || Ib > Ub - Ob) throw "HDR Bad Format, bad scanline data (run)";
                for (; Ib-- > 0;) Fb[Ob++] = Vb
              } else {
                if (Ib = Hb, 0 == Ib || Ib > Ub - Ob) throw "HDR Bad Format, bad scanline data (non-run)";
                if (Fb[Ob++] = Vb, --Ib > 0)
                  for (let wb = 0; wb < Ib; wb++) Fb[Ob++] = bb[Cb++]
              } for (tb = 0; tb < eb; tb++) Hb = Fb[tb], Vb = Fb[tb + eb], gb = Fb[tb + 2 * eb], lb = Fb[tb + 3 * eb], pb(sb, Hb, Vb, gb, lb, (wb.height - Mb) * eb * 3 + 3 * tb);
          Mb--
        }
        return sb
      }(bb, wb)
    }

    function Lb(bb, wb) {
      let Mb = wb.height;
      const eb = wb.width;
      let Hb, Vb, gb, lb, Lb, Ib = wb.dataPosition;
      const Ob = new ArrayBuffer(wb.width * wb.height * 4 * 3),
        Ub = new Float32Array(Ob);
      for (; Mb > 0;) {
        for (Lb = 0; Lb < wb.width; Lb++) Hb = bb[Ib++], Vb = bb[Ib++], gb = bb[Ib++], lb = bb[Ib++], pb(Ub, Hb, Vb, gb, lb, (wb.height - Mb) * eb * 3 + 3 * Lb);
        Mb--
      }
      return Ub
    }
    Hb.FACE_LEFT = [new eb.o(-1, -1, -1), new eb.o(1, -1, -1), new eb.o(-1, 1, -1), new eb.o(1, 1, -1)], Hb.FACE_RIGHT = [new eb.o(1, -1, 1), new eb.o(-1, -1, 1), new eb.o(1, 1, 1), new eb.o(-1, 1, 1)], Hb.FACE_FRONT = [new eb.o(1, -1, -1), new eb.o(1, -1, 1), new eb.o(1, 1, -1), new eb.o(1, 1, 1)], Hb.FACE_BACK = [new eb.o(-1, -1, 1), new eb.o(-1, -1, -1), new eb.o(-1, 1, 1), new eb.o(-1, 1, -1)], Hb.FACE_DOWN = [new eb.o(1, 1, -1), new eb.o(1, 1, 1), new eb.o(-1, 1, -1), new eb.o(-1, 1, 1)], Hb.FACE_UP = [new eb.o(-1, -1, -1), new eb.o(-1, -1, 1), new eb.o(1, -1, -1), new eb.o(1, -1, 1)];
    class Ib {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".hdr not supported in Cube."
      }
      loadData(bb, wb, Mb) {
        const eb = new Uint8Array(bb.buffer, bb.byteOffset, bb.byteLength),
          Hb = gb(eb),
          pb = lb(eb, Hb),
          Vb = Hb.width * Hb.height,
          Lb = new Float32Array(4 * Vb);
        for (let gb = 0; gb < Vb; gb += 1) Lb[4 * gb] = pb[3 * gb], Lb[4 * gb + 1] = pb[3 * gb + 1], Lb[4 * gb + 2] = pb[3 * gb + 2], Lb[4 * gb + 3] = 1;
        Mb(Hb.width, Hb.height, wb.generateMipMaps, !1, (() => {
          const bb = wb.DC();
          wb.type = 1, wb.format = 5, wb._gammaSpace = !1, bb._uploadDataToTextureDirectly(wb, Lb)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);