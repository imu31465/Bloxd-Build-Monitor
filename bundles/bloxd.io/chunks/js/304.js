export const id = 304;
export const ids = [304];
export const modules = {
  41262: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      _TGATextureLoader: () => Ub
    });
    var kb = sb(38284);

    function Wb(bb) {
      let cb = 0;
      return {
        id_length: bb[cb++],
        colormap_type: bb[cb++],
        image_type: bb[cb++],
        colormap_index: bb[cb++] | bb[cb++] << 8,
        colormap_length: bb[cb++] | bb[cb++] << 8,
        colormap_size: bb[cb++],
        origin: [bb[cb++] | bb[cb++] << 8, bb[cb++] | bb[cb++] << 8],
        width: bb[cb++] | bb[cb++] << 8,
        height: bb[cb++] | bb[cb++] << 8,
        pixel_size: bb[cb++],
        flags: bb[17]
      }
    }

    function ab(bb, cb) {
      if (cb.length < 19) return void kb.c.Error("Unable to load TGA file - Not enough data to contain header");
      let sb = 18;
      const ab = Wb(cb);
      if (ab.id_length + sb > cb.length) return void kb.c.Error("Unable to load TGA file - Not enough data");
      sb += ab.id_length;
      let Ub, Ib = !1,
        Hb = !1,
        fb = !1;
      switch (ab.image_type) {
        case 9:
          Ib = !0;
        case 1:
          Hb = !0;
          break;
        case 10:
          Ib = !0;
        case 2:
          break;
        case 11:
          Ib = !0;
        case 3:
          fb = !0
      }
      const Mb = ab.pixel_size >> 3,
        Xb = ab.width * ab.height * Mb;
      let nb, mb, lb, Qb, eb, Cb, Nb;
      if (Hb && (nb = cb.subarray(sb, sb += ab.colormap_length * (ab.colormap_size >> 3))), Ib) {
        let bb, kb, Wb;
        Ub = new Uint8Array(Xb);
        let ab = 0;
        const Tb = new Uint8Array(Mb);
        for (; sb < Xb && ab < Xb;)
          if (bb = cb[sb++], kb = 1 + (127 & bb), 128 & bb) {
            for (Wb = 0; Wb < Mb; ++Wb) Tb[Wb] = cb[sb++];
            for (Wb = 0; Wb < kb; ++Wb) Ub.set(Tb, ab + Wb * Mb);
            ab += Mb * kb
          } else {
            for (kb *= Mb, Wb = 0; Wb < kb; ++Wb) Ub[ab + Wb] = cb[sb++];
            ab += kb
          }
      } else Ub = cb.subarray(sb, sb + (Hb ? ab.width * ab.height : Xb));
      switch ((48 & ab.flags) >> 4) {
        default:
        case 2:
          mb = 0, Qb = 1, Nb = ab.width, lb = 0, eb = 1, Cb = ab.height;
          break;
        case 0:
          mb = 0, Qb = 1, Nb = ab.width, lb = ab.height - 1, eb = -1, Cb = -1;
          break;
        case 3:
          mb = ab.width - 1, Qb = -1, Nb = -1, lb = 0, eb = 1, Cb = ab.height;
          break;
        case 1:
          mb = ab.width - 1, Qb = -1, Nb = -1, lb = ab.height - 1, eb = -1, Cb = -1
      }
      const Vb = "_getImageData" + (fb ? "Grey" : "") + ab.pixel_size + "bits",
        Lb = Tb[Vb](ab, nb, Ub, lb, eb, Cb, mb, Qb, Nb);
      bb.Sm()._uploadDataToTextureDirectly(bb, Lb)
    }
    const Tb = {
      GetTGAHeader: Wb,
      UploadContent: ab,
      _getImageData8bits: function(bb, cb, sb, kb, Wb, ab, Tb, Ub, Ib) {
        const Hb = sb,
          fb = cb,
          Mb = bb.width,
          Xb = bb.height;
        let nb, mb, lb, Qb = 0;
        const eb = new Uint8Array(Mb * Xb * 4);
        for (lb = kb; lb !== ab; lb += Wb)
          for (mb = Tb; mb !== Ib; mb += Ub, Qb++) nb = Hb[Qb], eb[4 * (mb + Mb * lb) + 3] = 255, eb[4 * (mb + Mb * lb) + 2] = fb[3 * nb + 0], eb[4 * (mb + Mb * lb) + 1] = fb[3 * nb + 1], eb[4 * (mb + Mb * lb) + 0] = fb[3 * nb + 2];
        return eb
      },
      _getImageData16bits: function(bb, cb, sb, kb, Wb, ab, Tb, Ub, Ib) {
        const Hb = sb,
          fb = bb.width,
          Mb = bb.height;
        let Xb, nb, mb, lb = 0;
        const Qb = new Uint8Array(fb * Mb * 4);
        for (mb = kb; mb !== ab; mb += Wb)
          for (nb = Tb; nb !== Ib; nb += Ub, lb += 2) {
            Xb = Hb[lb + 0] + (Hb[lb + 1] << 8);
            const bb = 255 * ((31744 & Xb) >> 10) / 31 | 0,
              cb = 255 * ((992 & Xb) >> 5) / 31 | 0,
              sb = 255 * (31 & Xb) / 31 | 0;
            Qb[4 * (nb + fb * mb) + 0] = bb, Qb[4 * (nb + fb * mb) + 1] = cb, Qb[4 * (nb + fb * mb) + 2] = sb, Qb[4 * (nb + fb * mb) + 3] = 32768 & Xb ? 0 : 255
          }
        return Qb
      },
      _getImageData24bits: function(bb, cb, sb, kb, Wb, ab, Tb, Ub, Ib) {
        const Hb = sb,
          fb = bb.width,
          Mb = bb.height;
        let Xb, nb, mb = 0;
        const lb = new Uint8Array(fb * Mb * 4);
        for (nb = kb; nb !== ab; nb += Wb)
          for (Xb = Tb; Xb !== Ib; Xb += Ub, mb += 3) lb[4 * (Xb + fb * nb) + 3] = 255, lb[4 * (Xb + fb * nb) + 2] = Hb[mb + 0], lb[4 * (Xb + fb * nb) + 1] = Hb[mb + 1], lb[4 * (Xb + fb * nb) + 0] = Hb[mb + 2];
        return lb
      },
      _getImageData32bits: function(bb, cb, sb, kb, Wb, ab, Tb, Ub, Ib) {
        const Hb = sb,
          fb = bb.width,
          Mb = bb.height;
        let Xb, nb, mb = 0;
        const lb = new Uint8Array(fb * Mb * 4);
        for (nb = kb; nb !== ab; nb += Wb)
          for (Xb = Tb; Xb !== Ib; Xb += Ub, mb += 4) lb[4 * (Xb + fb * nb) + 2] = Hb[mb + 0], lb[4 * (Xb + fb * nb) + 1] = Hb[mb + 1], lb[4 * (Xb + fb * nb) + 0] = Hb[mb + 2], lb[4 * (Xb + fb * nb) + 3] = Hb[mb + 3];
        return lb
      },
      _getImageDataGrey8bits: function(bb, cb, sb, kb, Wb, ab, Tb, Ub, Ib) {
        const Hb = sb,
          fb = bb.width,
          Mb = bb.height;
        let Xb, nb, mb, lb = 0;
        const Qb = new Uint8Array(fb * Mb * 4);
        for (mb = kb; mb !== ab; mb += Wb)
          for (nb = Tb; nb !== Ib; nb += Ub, lb++) Xb = Hb[lb], Qb[4 * (nb + fb * mb) + 0] = Xb, Qb[4 * (nb + fb * mb) + 1] = Xb, Qb[4 * (nb + fb * mb) + 2] = Xb, Qb[4 * (nb + fb * mb) + 3] = 255;
        return Qb
      },
      _getImageDataGrey16bits: function(bb, cb, sb, kb, Wb, ab, Tb, Ub, Ib) {
        const Hb = sb,
          fb = bb.width,
          Mb = bb.height;
        let Xb, nb, mb = 0;
        const lb = new Uint8Array(fb * Mb * 4);
        for (nb = kb; nb !== ab; nb += Wb)
          for (Xb = Tb; Xb !== Ib; Xb += Ub, mb += 2) lb[4 * (Xb + fb * nb) + 0] = Hb[mb + 0], lb[4 * (Xb + fb * nb) + 1] = Hb[mb + 0], lb[4 * (Xb + fb * nb) + 2] = Hb[mb + 0], lb[4 * (Xb + fb * nb) + 3] = Hb[mb + 1];
        return lb
      }
    };
    class Ub {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".env not supported in Cube."
      }
      loadData(bb, cb, sb) {
        const kb = new Uint8Array(bb.buffer, bb.byteOffset, bb.byteLength),
          Tb = Wb(kb);
        sb(Tb.width, Tb.height, cb.generateMipMaps, !1, (() => {
          ab(cb, kb)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);