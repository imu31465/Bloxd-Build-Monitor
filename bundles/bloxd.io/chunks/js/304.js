export const id = 304;
export const ids = [304];
export const modules = {
  40953: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      _TGATextureLoader: () => Yb
    });
    var Ab = Ub(37989);

    function Mb(bb) {
      let ab = 0;
      return {
        id_length: bb[ab++],
        colormap_type: bb[ab++],
        image_type: bb[ab++],
        colormap_index: bb[ab++] | bb[ab++] << 8,
        colormap_length: bb[ab++] | bb[ab++] << 8,
        colormap_size: bb[ab++],
        origin: [bb[ab++] | bb[ab++] << 8, bb[ab++] | bb[ab++] << 8],
        width: bb[ab++] | bb[ab++] << 8,
        height: bb[ab++] | bb[ab++] << 8,
        pixel_size: bb[ab++],
        flags: bb[17]
      }
    }

    function Tb(bb, ab) {
      if (ab.length < 19) return void Ab.e.Error("Unable to load TGA file - Not enough data to contain header");
      let Ub = 18;
      const Tb = Mb(ab);
      if (Tb.id_length + Ub > ab.length) return void Ab.e.Error("Unable to load TGA file - Not enough data");
      Ub += Tb.id_length;
      let Yb, Bb = !1,
        eb = !1,
        vb = !1;
      switch (Tb.image_type) {
        case 9:
          Bb = !0;
        case 1:
          eb = !0;
          break;
        case 10:
          Bb = !0;
        case 2:
          break;
        case 11:
          Bb = !0;
        case 3:
          vb = !0
      }
      const Lb = Tb.pixel_size >> 3,
        Pb = Tb.width * Tb.height * Lb;
      let Xb, jb, Rb, kb, yb, Zb, Db;
      if (eb && (Xb = ab.subarray(Ub, Ub += Tb.colormap_length * (Tb.colormap_size >> 3))), Bb) {
        let bb, Ab, Mb;
        Yb = new Uint8Array(Pb);
        let Tb = 0;
        const Eb = new Uint8Array(Lb);
        for (; Ub < Pb && Tb < Pb;)
          if (bb = ab[Ub++], Ab = 1 + (127 & bb), 128 & bb) {
            for (Mb = 0; Mb < Lb; ++Mb) Eb[Mb] = ab[Ub++];
            for (Mb = 0; Mb < Ab; ++Mb) Yb.set(Eb, Tb + Mb * Lb);
            Tb += Lb * Ab
          } else {
            for (Ab *= Lb, Mb = 0; Mb < Ab; ++Mb) Yb[Tb + Mb] = ab[Ub++];
            Tb += Ab
          }
      } else Yb = ab.subarray(Ub, Ub + (eb ? Tb.width * Tb.height : Pb));
      switch ((48 & Tb.flags) >> 4) {
        default:
        case 2:
          jb = 0, kb = 1, Db = Tb.width, Rb = 0, yb = 1, Zb = Tb.height;
          break;
        case 0:
          jb = 0, kb = 1, Db = Tb.width, Rb = Tb.height - 1, yb = -1, Zb = -1;
          break;
        case 3:
          jb = Tb.width - 1, kb = -1, Db = -1, Rb = 0, yb = 1, Zb = Tb.height;
          break;
        case 1:
          jb = Tb.width - 1, kb = -1, Db = -1, Rb = Tb.height - 1, yb = -1, Zb = -1
      }
      const zb = "_getImageData" + (vb ? "Grey" : "") + Tb.pixel_size + "bits",
        xb = Eb[zb](Tb, Xb, Yb, Rb, yb, Zb, jb, kb, Db);
      bb.vj()._uploadDataToTextureDirectly(bb, xb)
    }
    const Eb = {
      GetTGAHeader: Mb,
      UploadContent: Tb,
      _getImageData8bits: function(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb) {
        const eb = Ub,
          vb = ab,
          Lb = bb.width,
          Pb = bb.height;
        let Xb, jb, Rb, kb = 0;
        const yb = new Uint8Array(Lb * Pb * 4);
        for (Rb = Ab; Rb !== Tb; Rb += Mb)
          for (jb = Eb; jb !== Bb; jb += Yb, kb++) Xb = eb[kb], yb[4 * (jb + Lb * Rb) + 3] = 255, yb[4 * (jb + Lb * Rb) + 2] = vb[3 * Xb + 0], yb[4 * (jb + Lb * Rb) + 1] = vb[3 * Xb + 1], yb[4 * (jb + Lb * Rb) + 0] = vb[3 * Xb + 2];
        return yb
      },
      _getImageData16bits: function(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb) {
        const eb = Ub,
          vb = bb.width,
          Lb = bb.height;
        let Pb, Xb, jb, Rb = 0;
        const kb = new Uint8Array(vb * Lb * 4);
        for (jb = Ab; jb !== Tb; jb += Mb)
          for (Xb = Eb; Xb !== Bb; Xb += Yb, Rb += 2) {
            Pb = eb[Rb + 0] + (eb[Rb + 1] << 8);
            const bb = 255 * ((31744 & Pb) >> 10) / 31 | 0,
              ab = 255 * ((992 & Pb) >> 5) / 31 | 0,
              Ub = 255 * (31 & Pb) / 31 | 0;
            kb[4 * (Xb + vb * jb) + 0] = bb, kb[4 * (Xb + vb * jb) + 1] = ab, kb[4 * (Xb + vb * jb) + 2] = Ub, kb[4 * (Xb + vb * jb) + 3] = 32768 & Pb ? 0 : 255
          }
        return kb
      },
      _getImageData24bits: function(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb) {
        const eb = Ub,
          vb = bb.width,
          Lb = bb.height;
        let Pb, Xb, jb = 0;
        const Rb = new Uint8Array(vb * Lb * 4);
        for (Xb = Ab; Xb !== Tb; Xb += Mb)
          for (Pb = Eb; Pb !== Bb; Pb += Yb, jb += 3) Rb[4 * (Pb + vb * Xb) + 3] = 255, Rb[4 * (Pb + vb * Xb) + 2] = eb[jb + 0], Rb[4 * (Pb + vb * Xb) + 1] = eb[jb + 1], Rb[4 * (Pb + vb * Xb) + 0] = eb[jb + 2];
        return Rb
      },
      _getImageData32bits: function(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb) {
        const eb = Ub,
          vb = bb.width,
          Lb = bb.height;
        let Pb, Xb, jb = 0;
        const Rb = new Uint8Array(vb * Lb * 4);
        for (Xb = Ab; Xb !== Tb; Xb += Mb)
          for (Pb = Eb; Pb !== Bb; Pb += Yb, jb += 4) Rb[4 * (Pb + vb * Xb) + 2] = eb[jb + 0], Rb[4 * (Pb + vb * Xb) + 1] = eb[jb + 1], Rb[4 * (Pb + vb * Xb) + 0] = eb[jb + 2], Rb[4 * (Pb + vb * Xb) + 3] = eb[jb + 3];
        return Rb
      },
      _getImageDataGrey8bits: function(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb) {
        const eb = Ub,
          vb = bb.width,
          Lb = bb.height;
        let Pb, Xb, jb, Rb = 0;
        const kb = new Uint8Array(vb * Lb * 4);
        for (jb = Ab; jb !== Tb; jb += Mb)
          for (Xb = Eb; Xb !== Bb; Xb += Yb, Rb++) Pb = eb[Rb], kb[4 * (Xb + vb * jb) + 0] = Pb, kb[4 * (Xb + vb * jb) + 1] = Pb, kb[4 * (Xb + vb * jb) + 2] = Pb, kb[4 * (Xb + vb * jb) + 3] = 255;
        return kb
      },
      _getImageDataGrey16bits: function(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb) {
        const eb = Ub,
          vb = bb.width,
          Lb = bb.height;
        let Pb, Xb, jb = 0;
        const Rb = new Uint8Array(vb * Lb * 4);
        for (Xb = Ab; Xb !== Tb; Xb += Mb)
          for (Pb = Eb; Pb !== Bb; Pb += Yb, jb += 2) Rb[4 * (Pb + vb * Xb) + 0] = eb[jb + 0], Rb[4 * (Pb + vb * Xb) + 1] = eb[jb + 0], Rb[4 * (Pb + vb * Xb) + 2] = eb[jb + 0], Rb[4 * (Pb + vb * Xb) + 3] = eb[jb + 1];
        return Rb
      }
    };
    class Yb {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".env not supported in Cube."
      }
      loadData(bb, ab, Ub) {
        const Ab = new Uint8Array(bb.buffer, bb.byteOffset, bb.byteLength),
          Eb = Mb(Ab);
        Ub(Eb.width, Eb.height, ab.generateMipMaps, !1, (() => {
          Tb(ab, Ab)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);