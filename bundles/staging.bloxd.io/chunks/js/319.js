export const id = 319;
export const ids = [319];
export const modules = {
  42110: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      _TGATextureLoader: () => dt
    });
    var Ot = Vt(38899);

    function qt(tt) {
      let et = 0;
      return {
        id_length: tt[et++],
        colormap_type: tt[et++],
        image_type: tt[et++],
        colormap_index: tt[et++] | tt[et++] << 8,
        colormap_length: tt[et++] | tt[et++] << 8,
        colormap_size: tt[et++],
        origin: [tt[et++] | tt[et++] << 8, tt[et++] | tt[et++] << 8],
        width: tt[et++] | tt[et++] << 8,
        height: tt[et++] | tt[et++] << 8,
        pixel_size: tt[et++],
        flags: tt[17]
      }
    }

    function Dt(tt, et) {
      if (et.length < 19) return void Ot.d.Error("Unable to load TGA file - Not enough data to contain header");
      let Vt = 18;
      const Dt = qt(et);
      if (Dt.id_length + Vt > et.length) return void Ot.d.Error("Unable to load TGA file - Not enough data");
      Vt += Dt.id_length;
      let dt, jt = !1,
        Ht = !1,
        Xt = !1;
      switch (Dt.image_type) {
        case 9:
          jt = !0;
        case 1:
          Ht = !0;
          break;
        case 10:
          jt = !0;
        case 2:
          break;
        case 11:
          jt = !0;
        case 3:
          Xt = !0
      }
      const Qt = Dt.pixel_size >> 3,
        lt = Dt.width * Dt.height * Qt;
      let Et, ft, wt, yt, Nt, Mt, bt;
      if (Ht && (Et = et.subarray(Vt, Vt += Dt.colormap_length * (Dt.colormap_size >> 3))), jt) {
        let tt, Ot, qt;
        dt = new Uint8Array(lt);
        let Dt = 0;
        const mt = new Uint8Array(Qt);
        for (; Vt < lt && Dt < lt;)
          if (tt = et[Vt++], Ot = 1 + (127 & tt), 128 & tt) {
            for (qt = 0; qt < Qt; ++qt) mt[qt] = et[Vt++];
            for (qt = 0; qt < Ot; ++qt) dt.set(mt, Dt + qt * Qt);
            Dt += Qt * Ot
          } else {
            for (Ot *= Qt, qt = 0; qt < Ot; ++qt) dt[Dt + qt] = et[Vt++];
            Dt += Ot
          }
      } else dt = et.subarray(Vt, Vt + (Ht ? Dt.width * Dt.height : lt));
      switch ((48 & Dt.flags) >> 4) {
        default:
        case 2:
          ft = 0, yt = 1, bt = Dt.width, wt = 0, Nt = 1, Mt = Dt.height;
          break;
        case 0:
          ft = 0, yt = 1, bt = Dt.width, wt = Dt.height - 1, Nt = -1, Mt = -1;
          break;
        case 3:
          ft = Dt.width - 1, yt = -1, bt = -1, wt = 0, Nt = 1, Mt = Dt.height;
          break;
        case 1:
          ft = Dt.width - 1, yt = -1, bt = -1, wt = Dt.height - 1, Nt = -1, Mt = -1
      }
      const Jt = "_getImageData" + (Xt ? "Grey" : "") + Dt.pixel_size + "bits",
        Ct = mt[Jt](Dt, Et, dt, wt, Nt, Mt, ft, yt, bt);
      tt.Jf()._uploadDataToTextureDirectly(tt, Ct)
    }
    const mt = {
      GetTGAHeader: qt,
      UploadContent: Dt,
      _getImageData8bits: function(tt, et, Vt, Ot, qt, Dt, mt, dt, jt) {
        const Ht = Vt,
          Xt = et,
          Qt = tt.width,
          lt = tt.height;
        let Et, ft, wt, yt = 0;
        const Nt = new Uint8Array(Qt * lt * 4);
        for (wt = Ot; wt !== Dt; wt += qt)
          for (ft = mt; ft !== jt; ft += dt, yt++) Et = Ht[yt], Nt[4 * (ft + Qt * wt) + 3] = 255, Nt[4 * (ft + Qt * wt) + 2] = Xt[3 * Et + 0], Nt[4 * (ft + Qt * wt) + 1] = Xt[3 * Et + 1], Nt[4 * (ft + Qt * wt) + 0] = Xt[3 * Et + 2];
        return Nt
      },
      _getImageData16bits: function(tt, et, Vt, Ot, qt, Dt, mt, dt, jt) {
        const Ht = Vt,
          Xt = tt.width,
          Qt = tt.height;
        let lt, Et, ft, wt = 0;
        const yt = new Uint8Array(Xt * Qt * 4);
        for (ft = Ot; ft !== Dt; ft += qt)
          for (Et = mt; Et !== jt; Et += dt, wt += 2) {
            lt = Ht[wt + 0] + (Ht[wt + 1] << 8);
            const tt = 255 * ((31744 & lt) >> 10) / 31 | 0,
              et = 255 * ((992 & lt) >> 5) / 31 | 0,
              Vt = 255 * (31 & lt) / 31 | 0;
            yt[4 * (Et + Xt * ft) + 0] = tt, yt[4 * (Et + Xt * ft) + 1] = et, yt[4 * (Et + Xt * ft) + 2] = Vt, yt[4 * (Et + Xt * ft) + 3] = 32768 & lt ? 0 : 255
          }
        return yt
      },
      _getImageData24bits: function(tt, et, Vt, Ot, qt, Dt, mt, dt, jt) {
        const Ht = Vt,
          Xt = tt.width,
          Qt = tt.height;
        let lt, Et, ft = 0;
        const wt = new Uint8Array(Xt * Qt * 4);
        for (Et = Ot; Et !== Dt; Et += qt)
          for (lt = mt; lt !== jt; lt += dt, ft += 3) wt[4 * (lt + Xt * Et) + 3] = 255, wt[4 * (lt + Xt * Et) + 2] = Ht[ft + 0], wt[4 * (lt + Xt * Et) + 1] = Ht[ft + 1], wt[4 * (lt + Xt * Et) + 0] = Ht[ft + 2];
        return wt
      },
      _getImageData32bits: function(tt, et, Vt, Ot, qt, Dt, mt, dt, jt) {
        const Ht = Vt,
          Xt = tt.width,
          Qt = tt.height;
        let lt, Et, ft = 0;
        const wt = new Uint8Array(Xt * Qt * 4);
        for (Et = Ot; Et !== Dt; Et += qt)
          for (lt = mt; lt !== jt; lt += dt, ft += 4) wt[4 * (lt + Xt * Et) + 2] = Ht[ft + 0], wt[4 * (lt + Xt * Et) + 1] = Ht[ft + 1], wt[4 * (lt + Xt * Et) + 0] = Ht[ft + 2], wt[4 * (lt + Xt * Et) + 3] = Ht[ft + 3];
        return wt
      },
      _getImageDataGrey8bits: function(tt, et, Vt, Ot, qt, Dt, mt, dt, jt) {
        const Ht = Vt,
          Xt = tt.width,
          Qt = tt.height;
        let lt, Et, ft, wt = 0;
        const yt = new Uint8Array(Xt * Qt * 4);
        for (ft = Ot; ft !== Dt; ft += qt)
          for (Et = mt; Et !== jt; Et += dt, wt++) lt = Ht[wt], yt[4 * (Et + Xt * ft) + 0] = lt, yt[4 * (Et + Xt * ft) + 1] = lt, yt[4 * (Et + Xt * ft) + 2] = lt, yt[4 * (Et + Xt * ft) + 3] = 255;
        return yt
      },
      _getImageDataGrey16bits: function(tt, et, Vt, Ot, qt, Dt, mt, dt, jt) {
        const Ht = Vt,
          Xt = tt.width,
          Qt = tt.height;
        let lt, Et, ft = 0;
        const wt = new Uint8Array(Xt * Qt * 4);
        for (Et = Ot; Et !== Dt; Et += qt)
          for (lt = mt; lt !== jt; lt += dt, ft += 2) wt[4 * (lt + Xt * Et) + 0] = Ht[ft + 0], wt[4 * (lt + Xt * Et) + 1] = Ht[ft + 0], wt[4 * (lt + Xt * Et) + 2] = Ht[ft + 0], wt[4 * (lt + Xt * Et) + 3] = Ht[ft + 1];
        return wt
      }
    };
    class dt {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".env not supported in Cube."
      }
      loadData(tt, et, Vt) {
        const Ot = new Uint8Array(tt.buffer, tt.byteOffset, tt.byteLength),
          mt = qt(Ot);
        Vt(mt.width, mt.height, et.generateMipMaps, !1, (() => {
          Dt(et, Ot)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);