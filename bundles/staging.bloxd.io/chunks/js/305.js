export const id = 305;
export const ids = [305];
export const modules = {
  41293: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      _TGATextureLoader: () => Lb
    });
    var Bb = hb(38302);

    function Ob(bb) {
      let ub = 0;
      return {
        id_length: bb[ub++],
        colormap_type: bb[ub++],
        image_type: bb[ub++],
        colormap_index: bb[ub++] | bb[ub++] << 8,
        colormap_length: bb[ub++] | bb[ub++] << 8,
        colormap_size: bb[ub++],
        origin: [bb[ub++] | bb[ub++] << 8, bb[ub++] | bb[ub++] << 8],
        width: bb[ub++] | bb[ub++] << 8,
        height: bb[ub++] | bb[ub++] << 8,
        pixel_size: bb[ub++],
        flags: bb[17]
      }
    }

    function Gb(bb, ub) {
      if (ub.length < 19) return void Bb.b.Error("Unable to load TGA file - Not enough data to contain header");
      let hb = 18;
      const Gb = Ob(ub);
      if (Gb.id_length + hb > ub.length) return void Bb.b.Error("Unable to load TGA file - Not enough data");
      hb += Gb.id_length;
      let Lb, Yb = !1,
        Sb = !1,
        ab = !1;
      switch (Gb.image_type) {
        case 9:
          Yb = !0;
        case 1:
          Sb = !0;
          break;
        case 10:
          Yb = !0;
        case 2:
          break;
        case 11:
          Yb = !0;
        case 3:
          ab = !0
      }
      const Hb = Gb.pixel_size >> 3,
        wb = Gb.width * Gb.height * Hb;
      let Zb, Xb, pb, ob, Ab, lb, Kb;
      if (Sb && (Zb = ub.subarray(hb, hb += Gb.colormap_length * (Gb.colormap_size >> 3))), Yb) {
        let bb, Bb, Ob;
        Lb = new Uint8Array(wb);
        let Gb = 0;
        const Ub = new Uint8Array(Hb);
        for (; hb < wb && Gb < wb;)
          if (bb = ub[hb++], Bb = 1 + (127 & bb), 128 & bb) {
            for (Ob = 0; Ob < Hb; ++Ob) Ub[Ob] = ub[hb++];
            for (Ob = 0; Ob < Bb; ++Ob) Lb.set(Ub, Gb + Ob * Hb);
            Gb += Hb * Bb
          } else {
            for (Bb *= Hb, Ob = 0; Ob < Bb; ++Ob) Lb[Gb + Ob] = ub[hb++];
            Gb += Bb
          }
      } else Lb = ub.subarray(hb, hb + (Sb ? Gb.width * Gb.height : wb));
      switch ((48 & Gb.flags) >> 4) {
        default:
        case 2:
          Xb = 0, ob = 1, Kb = Gb.width, pb = 0, Ab = 1, lb = Gb.height;
          break;
        case 0:
          Xb = 0, ob = 1, Kb = Gb.width, pb = Gb.height - 1, Ab = -1, lb = -1;
          break;
        case 3:
          Xb = Gb.width - 1, ob = -1, Kb = -1, pb = 0, Ab = 1, lb = Gb.height;
          break;
        case 1:
          Xb = Gb.width - 1, ob = -1, Kb = -1, pb = Gb.height - 1, Ab = -1, lb = -1
      }
      const Wb = "_getImageData" + (ab ? "Grey" : "") + Gb.pixel_size + "bits",
        Cb = Ub[Wb](Gb, Zb, Lb, pb, Ab, lb, Xb, ob, Kb);
      bb.UX()._uploadDataToTextureDirectly(bb, Cb)
    }
    const Ub = {
      GetTGAHeader: Ob,
      UploadContent: Gb,
      _getImageData8bits: function(bb, ub, hb, Bb, Ob, Gb, Ub, Lb, Yb) {
        const Sb = hb,
          ab = ub,
          Hb = bb.width,
          wb = bb.height;
        let Zb, Xb, pb, ob = 0;
        const Ab = new Uint8Array(Hb * wb * 4);
        for (pb = Bb; pb !== Gb; pb += Ob)
          for (Xb = Ub; Xb !== Yb; Xb += Lb, ob++) Zb = Sb[ob], Ab[4 * (Xb + Hb * pb) + 3] = 255, Ab[4 * (Xb + Hb * pb) + 2] = ab[3 * Zb + 0], Ab[4 * (Xb + Hb * pb) + 1] = ab[3 * Zb + 1], Ab[4 * (Xb + Hb * pb) + 0] = ab[3 * Zb + 2];
        return Ab
      },
      _getImageData16bits: function(bb, ub, hb, Bb, Ob, Gb, Ub, Lb, Yb) {
        const Sb = hb,
          ab = bb.width,
          Hb = bb.height;
        let wb, Zb, Xb, pb = 0;
        const ob = new Uint8Array(ab * Hb * 4);
        for (Xb = Bb; Xb !== Gb; Xb += Ob)
          for (Zb = Ub; Zb !== Yb; Zb += Lb, pb += 2) {
            wb = Sb[pb + 0] + (Sb[pb + 1] << 8);
            const bb = 255 * ((31744 & wb) >> 10) / 31 | 0,
              ub = 255 * ((992 & wb) >> 5) / 31 | 0,
              hb = 255 * (31 & wb) / 31 | 0;
            ob[4 * (Zb + ab * Xb) + 0] = bb, ob[4 * (Zb + ab * Xb) + 1] = ub, ob[4 * (Zb + ab * Xb) + 2] = hb, ob[4 * (Zb + ab * Xb) + 3] = 32768 & wb ? 0 : 255
          }
        return ob
      },
      _getImageData24bits: function(bb, ub, hb, Bb, Ob, Gb, Ub, Lb, Yb) {
        const Sb = hb,
          ab = bb.width,
          Hb = bb.height;
        let wb, Zb, Xb = 0;
        const pb = new Uint8Array(ab * Hb * 4);
        for (Zb = Bb; Zb !== Gb; Zb += Ob)
          for (wb = Ub; wb !== Yb; wb += Lb, Xb += 3) pb[4 * (wb + ab * Zb) + 3] = 255, pb[4 * (wb + ab * Zb) + 2] = Sb[Xb + 0], pb[4 * (wb + ab * Zb) + 1] = Sb[Xb + 1], pb[4 * (wb + ab * Zb) + 0] = Sb[Xb + 2];
        return pb
      },
      _getImageData32bits: function(bb, ub, hb, Bb, Ob, Gb, Ub, Lb, Yb) {
        const Sb = hb,
          ab = bb.width,
          Hb = bb.height;
        let wb, Zb, Xb = 0;
        const pb = new Uint8Array(ab * Hb * 4);
        for (Zb = Bb; Zb !== Gb; Zb += Ob)
          for (wb = Ub; wb !== Yb; wb += Lb, Xb += 4) pb[4 * (wb + ab * Zb) + 2] = Sb[Xb + 0], pb[4 * (wb + ab * Zb) + 1] = Sb[Xb + 1], pb[4 * (wb + ab * Zb) + 0] = Sb[Xb + 2], pb[4 * (wb + ab * Zb) + 3] = Sb[Xb + 3];
        return pb
      },
      _getImageDataGrey8bits: function(bb, ub, hb, Bb, Ob, Gb, Ub, Lb, Yb) {
        const Sb = hb,
          ab = bb.width,
          Hb = bb.height;
        let wb, Zb, Xb, pb = 0;
        const ob = new Uint8Array(ab * Hb * 4);
        for (Xb = Bb; Xb !== Gb; Xb += Ob)
          for (Zb = Ub; Zb !== Yb; Zb += Lb, pb++) wb = Sb[pb], ob[4 * (Zb + ab * Xb) + 0] = wb, ob[4 * (Zb + ab * Xb) + 1] = wb, ob[4 * (Zb + ab * Xb) + 2] = wb, ob[4 * (Zb + ab * Xb) + 3] = 255;
        return ob
      },
      _getImageDataGrey16bits: function(bb, ub, hb, Bb, Ob, Gb, Ub, Lb, Yb) {
        const Sb = hb,
          ab = bb.width,
          Hb = bb.height;
        let wb, Zb, Xb = 0;
        const pb = new Uint8Array(ab * Hb * 4);
        for (Zb = Bb; Zb !== Gb; Zb += Ob)
          for (wb = Ub; wb !== Yb; wb += Lb, Xb += 2) pb[4 * (wb + ab * Zb) + 0] = Sb[Xb + 0], pb[4 * (wb + ab * Zb) + 1] = Sb[Xb + 0], pb[4 * (wb + ab * Zb) + 2] = Sb[Xb + 0], pb[4 * (wb + ab * Zb) + 3] = Sb[Xb + 1];
        return pb
      }
    };
    class Lb {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".env not supported in Cube."
      }
      loadData(bb, ub, hb) {
        const Bb = new Uint8Array(bb.buffer, bb.byteOffset, bb.byteLength),
          Ub = Ob(Bb);
        hb(Ub.width, Ub.height, ub.generateMipMaps, !1, (() => {
          Gb(ub, Bb)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);