export const id = 623;
export const ids = [623];
export const modules = {
  45058: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      _TGATextureLoader: () => Ue
    });
    var ye = He(39467);

    function be(ee) {
      let ie = 0;
      return {
        id_length: ee[ie++],
        colormap_type: ee[ie++],
        image_type: ee[ie++],
        colormap_index: ee[ie++] | ee[ie++] << 8,
        colormap_length: ee[ie++] | ee[ie++] << 8,
        colormap_size: ee[ie++],
        origin: [ee[ie++] | ee[ie++] << 8, ee[ie++] | ee[ie++] << 8],
        width: ee[ie++] | ee[ie++] << 8,
        height: ee[ie++] | ee[ie++] << 8,
        pixel_size: ee[ie++],
        flags: ee[17]
      }
    }

    function Me(ee, ie) {
      if (ie.length < 19) return void ye.e.Error("Unable to load TGA file - Not enough data to contain header");
      let He = 18;
      const Me = be(ie);
      if (Me.id_length + He > ie.length) return void ye.e.Error("Unable to load TGA file - Not enough data");
      He += Me.id_length;
      let Ue, Fe = !1,
        Je = !1,
        oe = !1;
      switch (Me.image_type) {
        case 9:
          Fe = !0;
        case 1:
          Je = !0;
          break;
        case 10:
          Fe = !0;
        case 2:
          break;
        case 11:
          Fe = !0;
        case 3:
          oe = !0
      }
      const Re = Me.pixel_size >> 3,
        ke = Me.width * Me.height * Re;
      let qe, fe, Te, pe, Xe, ze, Be;
      if (Je && (qe = ie.subarray(He, He += Me.colormap_length * (Me.colormap_size >> 3))), Fe) {
        let ee, ye, be;
        Ue = new Uint8Array(ke);
        let Me = 0;
        const Ke = new Uint8Array(Re);
        for (; He < ke && Me < ke;)
          if (ee = ie[He++], ye = 1 + (127 & ee), 128 & ee) {
            for (be = 0; be < Re; ++be) Ke[be] = ie[He++];
            for (be = 0; be < ye; ++be) Ue.set(Ke, Me + be * Re);
            Me += Re * ye
          } else {
            for (ye *= Re, be = 0; be < ye; ++be) Ue[Me + be] = ie[He++];
            Me += ye
          }
      } else Ue = ie.subarray(He, He + (Je ? Me.width * Me.height : ke));
      switch ((48 & Me.flags) >> 4) {
        default:
        case 2:
          fe = 0, pe = 1, Be = Me.width, Te = 0, Xe = 1, ze = Me.height;
          break;
        case 0:
          fe = 0, pe = 1, Be = Me.width, Te = Me.height - 1, Xe = -1, ze = -1;
          break;
        case 3:
          fe = Me.width - 1, pe = -1, Be = -1, Te = 0, Xe = 1, ze = Me.height;
          break;
        case 1:
          fe = Me.width - 1, pe = -1, Be = -1, Te = Me.height - 1, Xe = -1, ze = -1
      }
      const Ee = "_getImageData" + (oe ? "Grey" : "") + Me.pixel_size + "bits",
        ge = Ke[Ee](Me, qe, Ue, Te, Xe, ze, fe, pe, Be);
      ee.Nf()._uploadDataToTextureDirectly(ee, ge)
    }
    const Ke = {
      GetTGAHeader: be,
      UploadContent: Me,
      _getImageData8bits: function(ee, ie, He, ye, be, Me, Ke, Ue, Fe) {
        const Je = He,
          oe = ie,
          Re = ee.width,
          ke = ee.height;
        let qe, fe, Te, pe = 0;
        const Xe = new Uint8Array(Re * ke * 4);
        for (Te = ye; Te !== Me; Te += be)
          for (fe = Ke; fe !== Fe; fe += Ue, pe++) qe = Je[pe], Xe[4 * (fe + Re * Te) + 3] = 255, Xe[4 * (fe + Re * Te) + 2] = oe[3 * qe + 0], Xe[4 * (fe + Re * Te) + 1] = oe[3 * qe + 1], Xe[4 * (fe + Re * Te) + 0] = oe[3 * qe + 2];
        return Xe
      },
      _getImageData16bits: function(ee, ie, He, ye, be, Me, Ke, Ue, Fe) {
        const Je = He,
          oe = ee.width,
          Re = ee.height;
        let ke, qe, fe, Te = 0;
        const pe = new Uint8Array(oe * Re * 4);
        for (fe = ye; fe !== Me; fe += be)
          for (qe = Ke; qe !== Fe; qe += Ue, Te += 2) {
            ke = Je[Te + 0] + (Je[Te + 1] << 8);
            const ee = 255 * ((31744 & ke) >> 10) / 31 | 0,
              ie = 255 * ((992 & ke) >> 5) / 31 | 0,
              He = 255 * (31 & ke) / 31 | 0;
            pe[4 * (qe + oe * fe) + 0] = ee, pe[4 * (qe + oe * fe) + 1] = ie, pe[4 * (qe + oe * fe) + 2] = He, pe[4 * (qe + oe * fe) + 3] = 32768 & ke ? 0 : 255
          }
        return pe
      },
      _getImageData24bits: function(ee, ie, He, ye, be, Me, Ke, Ue, Fe) {
        const Je = He,
          oe = ee.width,
          Re = ee.height;
        let ke, qe, fe = 0;
        const Te = new Uint8Array(oe * Re * 4);
        for (qe = ye; qe !== Me; qe += be)
          for (ke = Ke; ke !== Fe; ke += Ue, fe += 3) Te[4 * (ke + oe * qe) + 3] = 255, Te[4 * (ke + oe * qe) + 2] = Je[fe + 0], Te[4 * (ke + oe * qe) + 1] = Je[fe + 1], Te[4 * (ke + oe * qe) + 0] = Je[fe + 2];
        return Te
      },
      _getImageData32bits: function(ee, ie, He, ye, be, Me, Ke, Ue, Fe) {
        const Je = He,
          oe = ee.width,
          Re = ee.height;
        let ke, qe, fe = 0;
        const Te = new Uint8Array(oe * Re * 4);
        for (qe = ye; qe !== Me; qe += be)
          for (ke = Ke; ke !== Fe; ke += Ue, fe += 4) Te[4 * (ke + oe * qe) + 2] = Je[fe + 0], Te[4 * (ke + oe * qe) + 1] = Je[fe + 1], Te[4 * (ke + oe * qe) + 0] = Je[fe + 2], Te[4 * (ke + oe * qe) + 3] = Je[fe + 3];
        return Te
      },
      _getImageDataGrey8bits: function(ee, ie, He, ye, be, Me, Ke, Ue, Fe) {
        const Je = He,
          oe = ee.width,
          Re = ee.height;
        let ke, qe, fe, Te = 0;
        const pe = new Uint8Array(oe * Re * 4);
        for (fe = ye; fe !== Me; fe += be)
          for (qe = Ke; qe !== Fe; qe += Ue, Te++) ke = Je[Te], pe[4 * (qe + oe * fe) + 0] = ke, pe[4 * (qe + oe * fe) + 1] = ke, pe[4 * (qe + oe * fe) + 2] = ke, pe[4 * (qe + oe * fe) + 3] = 255;
        return pe
      },
      _getImageDataGrey16bits: function(ee, ie, He, ye, be, Me, Ke, Ue, Fe) {
        const Je = He,
          oe = ee.width,
          Re = ee.height;
        let ke, qe, fe = 0;
        const Te = new Uint8Array(oe * Re * 4);
        for (qe = ye; qe !== Me; qe += be)
          for (ke = Ke; ke !== Fe; ke += Ue, fe += 2) Te[4 * (ke + oe * qe) + 0] = Je[fe + 0], Te[4 * (ke + oe * qe) + 1] = Je[fe + 0], Te[4 * (ke + oe * qe) + 2] = Je[fe + 0], Te[4 * (ke + oe * qe) + 3] = Je[fe + 1];
        return Te
      }
    };
    class Ue {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".env not supported in Cube."
      }
      loadData(ee, ie, He) {
        const ye = new Uint8Array(ee.buffer, ee.byteOffset, ee.byteLength),
          Ke = be(ye);
        He(Ke.width, Ke.height, ie.generateMipMaps, !1, (() => {
          Me(ie, ye)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);