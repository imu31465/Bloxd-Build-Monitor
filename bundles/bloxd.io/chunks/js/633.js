export const id = 633;
export const ids = [633];
export const modules = {
  54279: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      _TGATextureLoader: () => Kd
    });
    var Wd = md(40262);

    function Fd(dd) {
      let Od = 0;
      return {
        id_length: dd[Od++],
        colormap_type: dd[Od++],
        image_type: dd[Od++],
        colormap_index: dd[Od++] | dd[Od++] << 8,
        colormap_length: dd[Od++] | dd[Od++] << 8,
        colormap_size: dd[Od++],
        origin: [dd[Od++] | dd[Od++] << 8, dd[Od++] | dd[Od++] << 8],
        width: dd[Od++] | dd[Od++] << 8,
        height: dd[Od++] | dd[Od++] << 8,
        pixel_size: dd[Od++],
        flags: dd[17]
      }
    }

    function Rd(dd, Od) {
      if (Od.length < 19) return void Wd.c.Error("Unable to load TGA file - Not enough data to contain header");
      let md = 18;
      const Rd = Fd(Od);
      if (Rd.id_length + md > Od.length) return void Wd.c.Error("Unable to load TGA file - Not enough data");
      md += Rd.id_length;
      let Kd, hd = !1,
        vd = !1,
        Qd = !1;
      switch (Rd.image_type) {
        case 9:
          hd = !0;
        case 1:
          vd = !0;
          break;
        case 10:
          hd = !0;
        case 2:
          break;
        case 11:
          hd = !0;
        case 3:
          Qd = !0
      }
      const td = Rd.pixel_size >> 3,
        od = Rd.width * Rd.height * td;
      let Nd, qd, Hd, yd, bd, Td, pd;
      if (vd && (Nd = Od.subarray(md, md += Rd.colormap_length * (Rd.colormap_size >> 3))), hd) {
        let dd, Wd, Fd;
        Kd = new Uint8Array(od);
        let Rd = 0;
        const Xd = new Uint8Array(td);
        for (; md < od && Rd < od;)
          if (dd = Od[md++], Wd = 1 + (127 & dd), 128 & dd) {
            for (Fd = 0; Fd < td; ++Fd) Xd[Fd] = Od[md++];
            for (Fd = 0; Fd < Wd; ++Fd) Kd.set(Xd, Rd + Fd * td);
            Rd += td * Wd
          } else {
            for (Wd *= td, Fd = 0; Fd < Wd; ++Fd) Kd[Rd + Fd] = Od[md++];
            Rd += Wd
          }
      } else Kd = Od.subarray(md, md + (vd ? Rd.width * Rd.height : od));
      switch ((48 & Rd.flags) >> 4) {
        default:
        case 2:
          qd = 0, yd = 1, pd = Rd.width, Hd = 0, bd = 1, Td = Rd.height;
          break;
        case 0:
          qd = 0, yd = 1, pd = Rd.width, Hd = Rd.height - 1, bd = -1, Td = -1;
          break;
        case 3:
          qd = Rd.width - 1, yd = -1, pd = -1, Hd = 0, bd = 1, Td = Rd.height;
          break;
        case 1:
          qd = Rd.width - 1, yd = -1, pd = -1, Hd = Rd.height - 1, bd = -1, Td = -1
      }
      const Yd = "_getImageData" + (Qd ? "Grey" : "") + Rd.pixel_size + "bits",
        gd = Xd[Yd](Rd, Nd, Kd, Hd, bd, Td, qd, yd, pd);
      dd.Iq()._uploadDataToTextureDirectly(dd, gd)
    }
    const Xd = {
      GetTGAHeader: Fd,
      UploadContent: Rd,
      _getImageData8bits: function(dd, Od, md, Wd, Fd, Rd, Xd, Kd, hd) {
        const vd = md,
          Qd = Od,
          td = dd.width,
          od = dd.height;
        let Nd, qd, Hd, yd = 0;
        const bd = new Uint8Array(td * od * 4);
        for (Hd = Wd; Hd !== Rd; Hd += Fd)
          for (qd = Xd; qd !== hd; qd += Kd, yd++) Nd = vd[yd], bd[4 * (qd + td * Hd) + 3] = 255, bd[4 * (qd + td * Hd) + 2] = Qd[3 * Nd + 0], bd[4 * (qd + td * Hd) + 1] = Qd[3 * Nd + 1], bd[4 * (qd + td * Hd) + 0] = Qd[3 * Nd + 2];
        return bd
      },
      _getImageData16bits: function(dd, Od, md, Wd, Fd, Rd, Xd, Kd, hd) {
        const vd = md,
          Qd = dd.width,
          td = dd.height;
        let od, Nd, qd, Hd = 0;
        const yd = new Uint8Array(Qd * td * 4);
        for (qd = Wd; qd !== Rd; qd += Fd)
          for (Nd = Xd; Nd !== hd; Nd += Kd, Hd += 2) {
            od = vd[Hd + 0] + (vd[Hd + 1] << 8);
            const dd = 255 * ((31744 & od) >> 10) / 31 | 0,
              Od = 255 * ((992 & od) >> 5) / 31 | 0,
              md = 255 * (31 & od) / 31 | 0;
            yd[4 * (Nd + Qd * qd) + 0] = dd, yd[4 * (Nd + Qd * qd) + 1] = Od, yd[4 * (Nd + Qd * qd) + 2] = md, yd[4 * (Nd + Qd * qd) + 3] = 32768 & od ? 0 : 255
          }
        return yd
      },
      _getImageData24bits: function(dd, Od, md, Wd, Fd, Rd, Xd, Kd, hd) {
        const vd = md,
          Qd = dd.width,
          td = dd.height;
        let od, Nd, qd = 0;
        const Hd = new Uint8Array(Qd * td * 4);
        for (Nd = Wd; Nd !== Rd; Nd += Fd)
          for (od = Xd; od !== hd; od += Kd, qd += 3) Hd[4 * (od + Qd * Nd) + 3] = 255, Hd[4 * (od + Qd * Nd) + 2] = vd[qd + 0], Hd[4 * (od + Qd * Nd) + 1] = vd[qd + 1], Hd[4 * (od + Qd * Nd) + 0] = vd[qd + 2];
        return Hd
      },
      _getImageData32bits: function(dd, Od, md, Wd, Fd, Rd, Xd, Kd, hd) {
        const vd = md,
          Qd = dd.width,
          td = dd.height;
        let od, Nd, qd = 0;
        const Hd = new Uint8Array(Qd * td * 4);
        for (Nd = Wd; Nd !== Rd; Nd += Fd)
          for (od = Xd; od !== hd; od += Kd, qd += 4) Hd[4 * (od + Qd * Nd) + 2] = vd[qd + 0], Hd[4 * (od + Qd * Nd) + 1] = vd[qd + 1], Hd[4 * (od + Qd * Nd) + 0] = vd[qd + 2], Hd[4 * (od + Qd * Nd) + 3] = vd[qd + 3];
        return Hd
      },
      _getImageDataGrey8bits: function(dd, Od, md, Wd, Fd, Rd, Xd, Kd, hd) {
        const vd = md,
          Qd = dd.width,
          td = dd.height;
        let od, Nd, qd, Hd = 0;
        const yd = new Uint8Array(Qd * td * 4);
        for (qd = Wd; qd !== Rd; qd += Fd)
          for (Nd = Xd; Nd !== hd; Nd += Kd, Hd++) od = vd[Hd], yd[4 * (Nd + Qd * qd) + 0] = od, yd[4 * (Nd + Qd * qd) + 1] = od, yd[4 * (Nd + Qd * qd) + 2] = od, yd[4 * (Nd + Qd * qd) + 3] = 255;
        return yd
      },
      _getImageDataGrey16bits: function(dd, Od, md, Wd, Fd, Rd, Xd, Kd, hd) {
        const vd = md,
          Qd = dd.width,
          td = dd.height;
        let od, Nd, qd = 0;
        const Hd = new Uint8Array(Qd * td * 4);
        for (Nd = Wd; Nd !== Rd; Nd += Fd)
          for (od = Xd; od !== hd; od += Kd, qd += 2) Hd[4 * (od + Qd * Nd) + 0] = vd[qd + 0], Hd[4 * (od + Qd * Nd) + 1] = vd[qd + 0], Hd[4 * (od + Qd * Nd) + 2] = vd[qd + 0], Hd[4 * (od + Qd * Nd) + 3] = vd[qd + 1];
        return Hd
      }
    };
    class Kd {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".env not supported in Cube."
      }
      loadData(dd, Od, md) {
        const Wd = new Uint8Array(dd.buffer, dd.byteOffset, dd.byteLength),
          Xd = Fd(Wd);
        md(Xd.width, Xd.height, Od.generateMipMaps, !1, (() => {
          Rd(Od, Wd)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);