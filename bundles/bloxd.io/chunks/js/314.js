export const id = 314;
export const ids = [314];
export const modules = {
  41879: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      _TGATextureLoader: () => wm
    });
    var hm = fm(38766);

    function Am(mm) {
      let Tm = 0;
      return {
        id_length: mm[Tm++],
        colormap_type: mm[Tm++],
        image_type: mm[Tm++],
        colormap_index: mm[Tm++] | mm[Tm++] << 8,
        colormap_length: mm[Tm++] | mm[Tm++] << 8,
        colormap_size: mm[Tm++],
        origin: [mm[Tm++] | mm[Tm++] << 8, mm[Tm++] | mm[Tm++] << 8],
        width: mm[Tm++] | mm[Tm++] << 8,
        height: mm[Tm++] | mm[Tm++] << 8,
        pixel_size: mm[Tm++],
        flags: mm[17]
      }
    }

    function am(mm, Tm) {
      if (Tm.length < 19) return void hm.b.Error("Unable to load TGA file - Not enough data to contain header");
      let fm = 18;
      const am = Am(Tm);
      if (am.id_length + fm > Tm.length) return void hm.b.Error("Unable to load TGA file - Not enough data");
      fm += am.id_length;
      let wm, Dm = !1,
        im = !1,
        Rm = !1;
      switch (am.image_type) {
        case 9:
          Dm = !0;
        case 1:
          im = !0;
          break;
        case 10:
          Dm = !0;
        case 2:
          break;
        case 11:
          Dm = !0;
        case 3:
          Rm = !0
      }
      const pm = am.pixel_size >> 3,
        Em = am.width * am.height * pm;
      let om, Om, Ym, qm, jm, Vm, Im;
      if (im && (om = Tm.subarray(fm, fm += am.colormap_length * (am.colormap_size >> 3))), Dm) {
        let mm, hm, Am;
        wm = new Uint8Array(Em);
        let am = 0;
        const xm = new Uint8Array(pm);
        for (; fm < Em && am < Em;)
          if (mm = Tm[fm++], hm = 1 + (127 & mm), 128 & mm) {
            for (Am = 0; Am < pm; ++Am) xm[Am] = Tm[fm++];
            for (Am = 0; Am < hm; ++Am) wm.set(xm, am + Am * pm);
            am += pm * hm
          } else {
            for (hm *= pm, Am = 0; Am < hm; ++Am) wm[am + Am] = Tm[fm++];
            am += hm
          }
      } else wm = Tm.subarray(fm, fm + (im ? am.width * am.height : Em));
      switch ((48 & am.flags) >> 4) {
        default:
        case 2:
          Om = 0, qm = 1, Im = am.width, Ym = 0, jm = 1, Vm = am.height;
          break;
        case 0:
          Om = 0, qm = 1, Im = am.width, Ym = am.height - 1, jm = -1, Vm = -1;
          break;
        case 3:
          Om = am.width - 1, qm = -1, Im = -1, Ym = 0, jm = 1, Vm = am.height;
          break;
        case 1:
          Om = am.width - 1, qm = -1, Im = -1, Ym = am.height - 1, jm = -1, Vm = -1
      }
      const Km = "_getImageData" + (Rm ? "Grey" : "") + am.pixel_size + "bits",
        Qm = xm[Km](am, om, wm, Ym, jm, Vm, Om, qm, Im);
      mm.dO()._uploadDataToTextureDirectly(mm, Qm)
    }
    const xm = {
      GetTGAHeader: Am,
      UploadContent: am,
      _getImageData8bits: function(mm, Tm, fm, hm, Am, am, xm, wm, Dm) {
        const im = fm,
          Rm = Tm,
          pm = mm.width,
          Em = mm.height;
        let om, Om, Ym, qm = 0;
        const jm = new Uint8Array(pm * Em * 4);
        for (Ym = hm; Ym !== am; Ym += Am)
          for (Om = xm; Om !== Dm; Om += wm, qm++) om = im[qm], jm[4 * (Om + pm * Ym) + 3] = 255, jm[4 * (Om + pm * Ym) + 2] = Rm[3 * om + 0], jm[4 * (Om + pm * Ym) + 1] = Rm[3 * om + 1], jm[4 * (Om + pm * Ym) + 0] = Rm[3 * om + 2];
        return jm
      },
      _getImageData16bits: function(mm, Tm, fm, hm, Am, am, xm, wm, Dm) {
        const im = fm,
          Rm = mm.width,
          pm = mm.height;
        let Em, om, Om, Ym = 0;
        const qm = new Uint8Array(Rm * pm * 4);
        for (Om = hm; Om !== am; Om += Am)
          for (om = xm; om !== Dm; om += wm, Ym += 2) {
            Em = im[Ym + 0] + (im[Ym + 1] << 8);
            const mm = 255 * ((31744 & Em) >> 10) / 31 | 0,
              Tm = 255 * ((992 & Em) >> 5) / 31 | 0,
              fm = 255 * (31 & Em) / 31 | 0;
            qm[4 * (om + Rm * Om) + 0] = mm, qm[4 * (om + Rm * Om) + 1] = Tm, qm[4 * (om + Rm * Om) + 2] = fm, qm[4 * (om + Rm * Om) + 3] = 32768 & Em ? 0 : 255
          }
        return qm
      },
      _getImageData24bits: function(mm, Tm, fm, hm, Am, am, xm, wm, Dm) {
        const im = fm,
          Rm = mm.width,
          pm = mm.height;
        let Em, om, Om = 0;
        const Ym = new Uint8Array(Rm * pm * 4);
        for (om = hm; om !== am; om += Am)
          for (Em = xm; Em !== Dm; Em += wm, Om += 3) Ym[4 * (Em + Rm * om) + 3] = 255, Ym[4 * (Em + Rm * om) + 2] = im[Om + 0], Ym[4 * (Em + Rm * om) + 1] = im[Om + 1], Ym[4 * (Em + Rm * om) + 0] = im[Om + 2];
        return Ym
      },
      _getImageData32bits: function(mm, Tm, fm, hm, Am, am, xm, wm, Dm) {
        const im = fm,
          Rm = mm.width,
          pm = mm.height;
        let Em, om, Om = 0;
        const Ym = new Uint8Array(Rm * pm * 4);
        for (om = hm; om !== am; om += Am)
          for (Em = xm; Em !== Dm; Em += wm, Om += 4) Ym[4 * (Em + Rm * om) + 2] = im[Om + 0], Ym[4 * (Em + Rm * om) + 1] = im[Om + 1], Ym[4 * (Em + Rm * om) + 0] = im[Om + 2], Ym[4 * (Em + Rm * om) + 3] = im[Om + 3];
        return Ym
      },
      _getImageDataGrey8bits: function(mm, Tm, fm, hm, Am, am, xm, wm, Dm) {
        const im = fm,
          Rm = mm.width,
          pm = mm.height;
        let Em, om, Om, Ym = 0;
        const qm = new Uint8Array(Rm * pm * 4);
        for (Om = hm; Om !== am; Om += Am)
          for (om = xm; om !== Dm; om += wm, Ym++) Em = im[Ym], qm[4 * (om + Rm * Om) + 0] = Em, qm[4 * (om + Rm * Om) + 1] = Em, qm[4 * (om + Rm * Om) + 2] = Em, qm[4 * (om + Rm * Om) + 3] = 255;
        return qm
      },
      _getImageDataGrey16bits: function(mm, Tm, fm, hm, Am, am, xm, wm, Dm) {
        const im = fm,
          Rm = mm.width,
          pm = mm.height;
        let Em, om, Om = 0;
        const Ym = new Uint8Array(Rm * pm * 4);
        for (om = hm; om !== am; om += Am)
          for (Em = xm; Em !== Dm; Em += wm, Om += 2) Ym[4 * (Em + Rm * om) + 0] = im[Om + 0], Ym[4 * (Em + Rm * om) + 1] = im[Om + 0], Ym[4 * (Em + Rm * om) + 2] = im[Om + 0], Ym[4 * (Em + Rm * om) + 3] = im[Om + 1];
        return Ym
      }
    };
    class wm {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".env not supported in Cube."
      }
      loadData(mm, Tm, fm) {
        const hm = new Uint8Array(mm.buffer, mm.byteOffset, mm.byteLength),
          xm = Am(hm);
        fm(xm.width, xm.height, Tm.generateMipMaps, !1, (() => {
          am(Tm, hm)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);