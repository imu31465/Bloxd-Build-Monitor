export const id = 633;
export const ids = [633];
export const modules = {
  54086: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      _TGATextureLoader: () => gb
    });
    var eb = Mb(39971);

    function Hb(bb) {
      let wb = 0;
      return {
        id_length: bb[wb++],
        colormap_type: bb[wb++],
        image_type: bb[wb++],
        colormap_index: bb[wb++] | bb[wb++] << 8,
        colormap_length: bb[wb++] | bb[wb++] << 8,
        colormap_size: bb[wb++],
        origin: [bb[wb++] | bb[wb++] << 8, bb[wb++] | bb[wb++] << 8],
        width: bb[wb++] | bb[wb++] << 8,
        height: bb[wb++] | bb[wb++] << 8,
        pixel_size: bb[wb++],
        flags: bb[17]
      }
    }

    function pb(bb, wb) {
      if (wb.length < 19) return void eb.b.Error("Unable to load TGA file - Not enough data to contain header");
      let Mb = 18;
      const pb = Hb(wb);
      if (pb.id_length + Mb > wb.length) return void eb.b.Error("Unable to load TGA file - Not enough data");
      Mb += pb.id_length;
      let gb, lb = !1,
        Lb = !1,
        Ib = !1;
      switch (pb.image_type) {
        case 9:
          lb = !0;
        case 1:
          Lb = !0;
          break;
        case 10:
          lb = !0;
        case 2:
          break;
        case 11:
          lb = !0;
        case 3:
          Ib = !0
      }
      const Ob = pb.pixel_size >> 3,
        Ub = pb.width * pb.height * Ob;
      let tb, Cb, Eb, Fb, Bb, sb, mb;
      if (Lb && (tb = wb.subarray(Mb, Mb += pb.colormap_length * (pb.colormap_size >> 3))), lb) {
        let bb, eb, Hb;
        gb = new Uint8Array(Ub);
        let pb = 0;
        const Vb = new Uint8Array(Ob);
        for (; Mb < Ub && pb < Ub;)
          if (bb = wb[Mb++], eb = 1 + (127 & bb), 128 & bb) {
            for (Hb = 0; Hb < Ob; ++Hb) Vb[Hb] = wb[Mb++];
            for (Hb = 0; Hb < eb; ++Hb) gb.set(Vb, pb + Hb * Ob);
            pb += Ob * eb
          } else {
            for (eb *= Ob, Hb = 0; Hb < eb; ++Hb) gb[pb + Hb] = wb[Mb++];
            pb += eb
          }
      } else gb = wb.subarray(Mb, Mb + (Lb ? pb.width * pb.height : Ub));
      switch ((48 & pb.flags) >> 4) {
        default:
        case 2:
          Cb = 0, Fb = 1, mb = pb.width, Eb = 0, Bb = 1, sb = pb.height;
          break;
        case 0:
          Cb = 0, Fb = 1, mb = pb.width, Eb = pb.height - 1, Bb = -1, sb = -1;
          break;
        case 3:
          Cb = pb.width - 1, Fb = -1, mb = -1, Eb = 0, Bb = 1, sb = pb.height;
          break;
        case 1:
          Cb = pb.width - 1, Fb = -1, mb = -1, Eb = pb.height - 1, Bb = -1, sb = -1
      }
      const hb = "_getImageData" + (Ib ? "Grey" : "") + pb.pixel_size + "bits",
        zb = Vb[hb](pb, tb, gb, Eb, Bb, sb, Cb, Fb, mb);
      bb.DC()._uploadDataToTextureDirectly(bb, zb)
    }
    const Vb = {
      GetTGAHeader: Hb,
      UploadContent: pb,
      _getImageData8bits: function(bb, wb, Mb, eb, Hb, pb, Vb, gb, lb) {
        const Lb = Mb,
          Ib = wb,
          Ob = bb.width,
          Ub = bb.height;
        let tb, Cb, Eb, Fb = 0;
        const Bb = new Uint8Array(Ob * Ub * 4);
        for (Eb = eb; Eb !== pb; Eb += Hb)
          for (Cb = Vb; Cb !== lb; Cb += gb, Fb++) tb = Lb[Fb], Bb[4 * (Cb + Ob * Eb) + 3] = 255, Bb[4 * (Cb + Ob * Eb) + 2] = Ib[3 * tb + 0], Bb[4 * (Cb + Ob * Eb) + 1] = Ib[3 * tb + 1], Bb[4 * (Cb + Ob * Eb) + 0] = Ib[3 * tb + 2];
        return Bb
      },
      _getImageData16bits: function(bb, wb, Mb, eb, Hb, pb, Vb, gb, lb) {
        const Lb = Mb,
          Ib = bb.width,
          Ob = bb.height;
        let Ub, tb, Cb, Eb = 0;
        const Fb = new Uint8Array(Ib * Ob * 4);
        for (Cb = eb; Cb !== pb; Cb += Hb)
          for (tb = Vb; tb !== lb; tb += gb, Eb += 2) {
            Ub = Lb[Eb + 0] + (Lb[Eb + 1] << 8);
            const bb = 255 * ((31744 & Ub) >> 10) / 31 | 0,
              wb = 255 * ((992 & Ub) >> 5) / 31 | 0,
              Mb = 255 * (31 & Ub) / 31 | 0;
            Fb[4 * (tb + Ib * Cb) + 0] = bb, Fb[4 * (tb + Ib * Cb) + 1] = wb, Fb[4 * (tb + Ib * Cb) + 2] = Mb, Fb[4 * (tb + Ib * Cb) + 3] = 32768 & Ub ? 0 : 255
          }
        return Fb
      },
      _getImageData24bits: function(bb, wb, Mb, eb, Hb, pb, Vb, gb, lb) {
        const Lb = Mb,
          Ib = bb.width,
          Ob = bb.height;
        let Ub, tb, Cb = 0;
        const Eb = new Uint8Array(Ib * Ob * 4);
        for (tb = eb; tb !== pb; tb += Hb)
          for (Ub = Vb; Ub !== lb; Ub += gb, Cb += 3) Eb[4 * (Ub + Ib * tb) + 3] = 255, Eb[4 * (Ub + Ib * tb) + 2] = Lb[Cb + 0], Eb[4 * (Ub + Ib * tb) + 1] = Lb[Cb + 1], Eb[4 * (Ub + Ib * tb) + 0] = Lb[Cb + 2];
        return Eb
      },
      _getImageData32bits: function(bb, wb, Mb, eb, Hb, pb, Vb, gb, lb) {
        const Lb = Mb,
          Ib = bb.width,
          Ob = bb.height;
        let Ub, tb, Cb = 0;
        const Eb = new Uint8Array(Ib * Ob * 4);
        for (tb = eb; tb !== pb; tb += Hb)
          for (Ub = Vb; Ub !== lb; Ub += gb, Cb += 4) Eb[4 * (Ub + Ib * tb) + 2] = Lb[Cb + 0], Eb[4 * (Ub + Ib * tb) + 1] = Lb[Cb + 1], Eb[4 * (Ub + Ib * tb) + 0] = Lb[Cb + 2], Eb[4 * (Ub + Ib * tb) + 3] = Lb[Cb + 3];
        return Eb
      },
      _getImageDataGrey8bits: function(bb, wb, Mb, eb, Hb, pb, Vb, gb, lb) {
        const Lb = Mb,
          Ib = bb.width,
          Ob = bb.height;
        let Ub, tb, Cb, Eb = 0;
        const Fb = new Uint8Array(Ib * Ob * 4);
        for (Cb = eb; Cb !== pb; Cb += Hb)
          for (tb = Vb; tb !== lb; tb += gb, Eb++) Ub = Lb[Eb], Fb[4 * (tb + Ib * Cb) + 0] = Ub, Fb[4 * (tb + Ib * Cb) + 1] = Ub, Fb[4 * (tb + Ib * Cb) + 2] = Ub, Fb[4 * (tb + Ib * Cb) + 3] = 255;
        return Fb
      },
      _getImageDataGrey16bits: function(bb, wb, Mb, eb, Hb, pb, Vb, gb, lb) {
        const Lb = Mb,
          Ib = bb.width,
          Ob = bb.height;
        let Ub, tb, Cb = 0;
        const Eb = new Uint8Array(Ib * Ob * 4);
        for (tb = eb; tb !== pb; tb += Hb)
          for (Ub = Vb; Ub !== lb; Ub += gb, Cb += 2) Eb[4 * (Ub + Ib * tb) + 0] = Lb[Cb + 0], Eb[4 * (Ub + Ib * tb) + 1] = Lb[Cb + 0], Eb[4 * (Ub + Ib * tb) + 2] = Lb[Cb + 0], Eb[4 * (Ub + Ib * tb) + 3] = Lb[Cb + 1];
        return Eb
      }
    };
    class gb {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".env not supported in Cube."
      }
      loadData(bb, wb, Mb) {
        const eb = new Uint8Array(bb.buffer, bb.byteOffset, bb.byteLength),
          Vb = Hb(eb);
        Mb(Vb.width, Vb.height, wb.generateMipMaps, !1, (() => {
          pb(wb, eb)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);