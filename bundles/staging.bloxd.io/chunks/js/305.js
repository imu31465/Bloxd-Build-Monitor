export const id = 305;
export const ids = [305];
export const modules = {
  41820: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      _TGATextureLoader: () => Zd
    });
    var pd = kd(38812);

    function Nd(dd) {
      let Jd = 0;
      return {
        id_length: dd[Jd++],
        colormap_type: dd[Jd++],
        image_type: dd[Jd++],
        colormap_index: dd[Jd++] | dd[Jd++] << 8,
        colormap_length: dd[Jd++] | dd[Jd++] << 8,
        colormap_size: dd[Jd++],
        origin: [dd[Jd++] | dd[Jd++] << 8, dd[Jd++] | dd[Jd++] << 8],
        width: dd[Jd++] | dd[Jd++] << 8,
        height: dd[Jd++] | dd[Jd++] << 8,
        pixel_size: dd[Jd++],
        flags: dd[17]
      }
    }

    function Wd(dd, Jd) {
      if (Jd.length < 19) return void pd.c.Error("Unable to load TGA file - Not enough data to contain header");
      let kd = 18;
      const Wd = Nd(Jd);
      if (Wd.id_length + kd > Jd.length) return void pd.c.Error("Unable to load TGA file - Not enough data");
      kd += Wd.id_length;
      let Zd, gd = !1,
        Cd = !1,
        Kd = !1;
      switch (Wd.image_type) {
        case 9:
          gd = !0;
        case 1:
          Cd = !0;
          break;
        case 10:
          gd = !0;
        case 2:
          break;
        case 11:
          gd = !0;
        case 3:
          Kd = !0
      }
      const od = Wd.pixel_size >> 3,
        ld = Wd.width * Wd.height * od;
      let Qd, Ld, Od, ed, Rd, Id, Gd;
      if (Cd && (Qd = Jd.subarray(kd, kd += Wd.colormap_length * (Wd.colormap_size >> 3))), gd) {
        let dd, pd, Nd;
        Zd = new Uint8Array(ld);
        let Wd = 0;
        const Pd = new Uint8Array(od);
        for (; kd < ld && Wd < ld;)
          if (dd = Jd[kd++], pd = 1 + (127 & dd), 128 & dd) {
            for (Nd = 0; Nd < od; ++Nd) Pd[Nd] = Jd[kd++];
            for (Nd = 0; Nd < pd; ++Nd) Zd.set(Pd, Wd + Nd * od);
            Wd += od * pd
          } else {
            for (pd *= od, Nd = 0; Nd < pd; ++Nd) Zd[Wd + Nd] = Jd[kd++];
            Wd += pd
          }
      } else Zd = Jd.subarray(kd, kd + (Cd ? Wd.width * Wd.height : ld));
      switch ((48 & Wd.flags) >> 4) {
        default:
        case 2:
          Ld = 0, ed = 1, Gd = Wd.width, Od = 0, Rd = 1, Id = Wd.height;
          break;
        case 0:
          Ld = 0, ed = 1, Gd = Wd.width, Od = Wd.height - 1, Rd = -1, Id = -1;
          break;
        case 3:
          Ld = Wd.width - 1, ed = -1, Gd = -1, Od = 0, Rd = 1, Id = Wd.height;
          break;
        case 1:
          Ld = Wd.width - 1, ed = -1, Gd = -1, Od = Wd.height - 1, Rd = -1, Id = -1
      }
      const vd = "_getImageData" + (Kd ? "Grey" : "") + Wd.pixel_size + "bits",
        xd = Pd[vd](Wd, Qd, Zd, Od, Rd, Id, Ld, ed, Gd);
      dd.eL()._uploadDataToTextureDirectly(dd, xd)
    }
    const Pd = {
      GetTGAHeader: Nd,
      UploadContent: Wd,
      _getImageData8bits: function(dd, Jd, kd, pd, Nd, Wd, Pd, Zd, gd) {
        const Cd = kd,
          Kd = Jd,
          od = dd.width,
          ld = dd.height;
        let Qd, Ld, Od, ed = 0;
        const Rd = new Uint8Array(od * ld * 4);
        for (Od = pd; Od !== Wd; Od += Nd)
          for (Ld = Pd; Ld !== gd; Ld += Zd, ed++) Qd = Cd[ed], Rd[4 * (Ld + od * Od) + 3] = 255, Rd[4 * (Ld + od * Od) + 2] = Kd[3 * Qd + 0], Rd[4 * (Ld + od * Od) + 1] = Kd[3 * Qd + 1], Rd[4 * (Ld + od * Od) + 0] = Kd[3 * Qd + 2];
        return Rd
      },
      _getImageData16bits: function(dd, Jd, kd, pd, Nd, Wd, Pd, Zd, gd) {
        const Cd = kd,
          Kd = dd.width,
          od = dd.height;
        let ld, Qd, Ld, Od = 0;
        const ed = new Uint8Array(Kd * od * 4);
        for (Ld = pd; Ld !== Wd; Ld += Nd)
          for (Qd = Pd; Qd !== gd; Qd += Zd, Od += 2) {
            ld = Cd[Od + 0] + (Cd[Od + 1] << 8);
            const dd = 255 * ((31744 & ld) >> 10) / 31 | 0,
              Jd = 255 * ((992 & ld) >> 5) / 31 | 0,
              kd = 255 * (31 & ld) / 31 | 0;
            ed[4 * (Qd + Kd * Ld) + 0] = dd, ed[4 * (Qd + Kd * Ld) + 1] = Jd, ed[4 * (Qd + Kd * Ld) + 2] = kd, ed[4 * (Qd + Kd * Ld) + 3] = 32768 & ld ? 0 : 255
          }
        return ed
      },
      _getImageData24bits: function(dd, Jd, kd, pd, Nd, Wd, Pd, Zd, gd) {
        const Cd = kd,
          Kd = dd.width,
          od = dd.height;
        let ld, Qd, Ld = 0;
        const Od = new Uint8Array(Kd * od * 4);
        for (Qd = pd; Qd !== Wd; Qd += Nd)
          for (ld = Pd; ld !== gd; ld += Zd, Ld += 3) Od[4 * (ld + Kd * Qd) + 3] = 255, Od[4 * (ld + Kd * Qd) + 2] = Cd[Ld + 0], Od[4 * (ld + Kd * Qd) + 1] = Cd[Ld + 1], Od[4 * (ld + Kd * Qd) + 0] = Cd[Ld + 2];
        return Od
      },
      _getImageData32bits: function(dd, Jd, kd, pd, Nd, Wd, Pd, Zd, gd) {
        const Cd = kd,
          Kd = dd.width,
          od = dd.height;
        let ld, Qd, Ld = 0;
        const Od = new Uint8Array(Kd * od * 4);
        for (Qd = pd; Qd !== Wd; Qd += Nd)
          for (ld = Pd; ld !== gd; ld += Zd, Ld += 4) Od[4 * (ld + Kd * Qd) + 2] = Cd[Ld + 0], Od[4 * (ld + Kd * Qd) + 1] = Cd[Ld + 1], Od[4 * (ld + Kd * Qd) + 0] = Cd[Ld + 2], Od[4 * (ld + Kd * Qd) + 3] = Cd[Ld + 3];
        return Od
      },
      _getImageDataGrey8bits: function(dd, Jd, kd, pd, Nd, Wd, Pd, Zd, gd) {
        const Cd = kd,
          Kd = dd.width,
          od = dd.height;
        let ld, Qd, Ld, Od = 0;
        const ed = new Uint8Array(Kd * od * 4);
        for (Ld = pd; Ld !== Wd; Ld += Nd)
          for (Qd = Pd; Qd !== gd; Qd += Zd, Od++) ld = Cd[Od], ed[4 * (Qd + Kd * Ld) + 0] = ld, ed[4 * (Qd + Kd * Ld) + 1] = ld, ed[4 * (Qd + Kd * Ld) + 2] = ld, ed[4 * (Qd + Kd * Ld) + 3] = 255;
        return ed
      },
      _getImageDataGrey16bits: function(dd, Jd, kd, pd, Nd, Wd, Pd, Zd, gd) {
        const Cd = kd,
          Kd = dd.width,
          od = dd.height;
        let ld, Qd, Ld = 0;
        const Od = new Uint8Array(Kd * od * 4);
        for (Qd = pd; Qd !== Wd; Qd += Nd)
          for (ld = Pd; ld !== gd; ld += Zd, Ld += 2) Od[4 * (ld + Kd * Qd) + 0] = Cd[Ld + 0], Od[4 * (ld + Kd * Qd) + 1] = Cd[Ld + 0], Od[4 * (ld + Kd * Qd) + 2] = Cd[Ld + 0], Od[4 * (ld + Kd * Qd) + 3] = Cd[Ld + 1];
        return Od
      }
    };
    class Zd {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".env not supported in Cube."
      }
      loadData(dd, Jd, kd) {
        const pd = new Uint8Array(dd.buffer, dd.byteOffset, dd.byteLength),
          Pd = Nd(pd);
        kd(Pd.width, Pd.height, Jd.generateMipMaps, !1, (() => {
          Wd(Jd, pd)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);