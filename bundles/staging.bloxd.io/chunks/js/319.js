export const id = 319;
export const ids = [319];
export const modules = {
  42137: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      _TGATextureLoader: () => lu
    });
    var su = ju(39032);

    function Uu(uu) {
      let Eu = 0;
      return {
        id_length: uu[Eu++],
        colormap_type: uu[Eu++],
        image_type: uu[Eu++],
        colormap_index: uu[Eu++] | uu[Eu++] << 8,
        colormap_length: uu[Eu++] | uu[Eu++] << 8,
        colormap_size: uu[Eu++],
        origin: [uu[Eu++] | uu[Eu++] << 8, uu[Eu++] | uu[Eu++] << 8],
        width: uu[Eu++] | uu[Eu++] << 8,
        height: uu[Eu++] | uu[Eu++] << 8,
        pixel_size: uu[Eu++],
        flags: uu[17]
      }
    }

    function Zu(uu, Eu) {
      if (Eu.length < 19) return void su.b.Error("Unable to load TGA file - Not enough data to contain header");
      let ju = 18;
      const Zu = Uu(Eu);
      if (Zu.id_length + ju > Eu.length) return void su.b.Error("Unable to load TGA file - Not enough data");
      ju += Zu.id_length;
      let lu, qu = !1,
        fu = !1,
        Cu = !1;
      switch (Zu.image_type) {
        case 9:
          qu = !0;
        case 1:
          fu = !0;
          break;
        case 10:
          qu = !0;
        case 2:
          break;
        case 11:
          qu = !0;
        case 3:
          Cu = !0
      }
      const bu = Zu.pixel_size >> 3,
        cu = Zu.width * Zu.height * bu;
      let Nu, Ou, Yu, hu, Du, gu, Mu;
      if (fu && (Nu = Eu.subarray(ju, ju += Zu.colormap_length * (Zu.colormap_size >> 3))), qu) {
        let uu, su, Uu;
        lu = new Uint8Array(cu);
        let Zu = 0;
        const Xu = new Uint8Array(bu);
        for (; ju < cu && Zu < cu;)
          if (uu = Eu[ju++], su = 1 + (127 & uu), 128 & uu) {
            for (Uu = 0; Uu < bu; ++Uu) Xu[Uu] = Eu[ju++];
            for (Uu = 0; Uu < su; ++Uu) lu.set(Xu, Zu + Uu * bu);
            Zu += bu * su
          } else {
            for (su *= bu, Uu = 0; Uu < su; ++Uu) lu[Zu + Uu] = Eu[ju++];
            Zu += su
          }
      } else lu = Eu.subarray(ju, ju + (fu ? Zu.width * Zu.height : cu));
      switch ((48 & Zu.flags) >> 4) {
        default:
        case 2:
          Ou = 0, hu = 1, Mu = Zu.width, Yu = 0, Du = 1, gu = Zu.height;
          break;
        case 0:
          Ou = 0, hu = 1, Mu = Zu.width, Yu = Zu.height - 1, Du = -1, gu = -1;
          break;
        case 3:
          Ou = Zu.width - 1, hu = -1, Mu = -1, Yu = 0, Du = 1, gu = Zu.height;
          break;
        case 1:
          Ou = Zu.width - 1, hu = -1, Mu = -1, Yu = Zu.height - 1, Du = -1, gu = -1
      }
      const eu = "_getImageData" + (Cu ? "Grey" : "") + Zu.pixel_size + "bits",
        Gu = Xu[eu](Zu, Nu, lu, Yu, Du, gu, Ou, hu, Mu);
      uu.wO()._uploadDataToTextureDirectly(uu, Gu)
    }
    const Xu = {
      GetTGAHeader: Uu,
      UploadContent: Zu,
      _getImageData8bits: function(uu, Eu, ju, su, Uu, Zu, Xu, lu, qu) {
        const fu = ju,
          Cu = Eu,
          bu = uu.width,
          cu = uu.height;
        let Nu, Ou, Yu, hu = 0;
        const Du = new Uint8Array(bu * cu * 4);
        for (Yu = su; Yu !== Zu; Yu += Uu)
          for (Ou = Xu; Ou !== qu; Ou += lu, hu++) Nu = fu[hu], Du[4 * (Ou + bu * Yu) + 3] = 255, Du[4 * (Ou + bu * Yu) + 2] = Cu[3 * Nu + 0], Du[4 * (Ou + bu * Yu) + 1] = Cu[3 * Nu + 1], Du[4 * (Ou + bu * Yu) + 0] = Cu[3 * Nu + 2];
        return Du
      },
      _getImageData16bits: function(uu, Eu, ju, su, Uu, Zu, Xu, lu, qu) {
        const fu = ju,
          Cu = uu.width,
          bu = uu.height;
        let cu, Nu, Ou, Yu = 0;
        const hu = new Uint8Array(Cu * bu * 4);
        for (Ou = su; Ou !== Zu; Ou += Uu)
          for (Nu = Xu; Nu !== qu; Nu += lu, Yu += 2) {
            cu = fu[Yu + 0] + (fu[Yu + 1] << 8);
            const uu = 255 * ((31744 & cu) >> 10) / 31 | 0,
              Eu = 255 * ((992 & cu) >> 5) / 31 | 0,
              ju = 255 * (31 & cu) / 31 | 0;
            hu[4 * (Nu + Cu * Ou) + 0] = uu, hu[4 * (Nu + Cu * Ou) + 1] = Eu, hu[4 * (Nu + Cu * Ou) + 2] = ju, hu[4 * (Nu + Cu * Ou) + 3] = 32768 & cu ? 0 : 255
          }
        return hu
      },
      _getImageData24bits: function(uu, Eu, ju, su, Uu, Zu, Xu, lu, qu) {
        const fu = ju,
          Cu = uu.width,
          bu = uu.height;
        let cu, Nu, Ou = 0;
        const Yu = new Uint8Array(Cu * bu * 4);
        for (Nu = su; Nu !== Zu; Nu += Uu)
          for (cu = Xu; cu !== qu; cu += lu, Ou += 3) Yu[4 * (cu + Cu * Nu) + 3] = 255, Yu[4 * (cu + Cu * Nu) + 2] = fu[Ou + 0], Yu[4 * (cu + Cu * Nu) + 1] = fu[Ou + 1], Yu[4 * (cu + Cu * Nu) + 0] = fu[Ou + 2];
        return Yu
      },
      _getImageData32bits: function(uu, Eu, ju, su, Uu, Zu, Xu, lu, qu) {
        const fu = ju,
          Cu = uu.width,
          bu = uu.height;
        let cu, Nu, Ou = 0;
        const Yu = new Uint8Array(Cu * bu * 4);
        for (Nu = su; Nu !== Zu; Nu += Uu)
          for (cu = Xu; cu !== qu; cu += lu, Ou += 4) Yu[4 * (cu + Cu * Nu) + 2] = fu[Ou + 0], Yu[4 * (cu + Cu * Nu) + 1] = fu[Ou + 1], Yu[4 * (cu + Cu * Nu) + 0] = fu[Ou + 2], Yu[4 * (cu + Cu * Nu) + 3] = fu[Ou + 3];
        return Yu
      },
      _getImageDataGrey8bits: function(uu, Eu, ju, su, Uu, Zu, Xu, lu, qu) {
        const fu = ju,
          Cu = uu.width,
          bu = uu.height;
        let cu, Nu, Ou, Yu = 0;
        const hu = new Uint8Array(Cu * bu * 4);
        for (Ou = su; Ou !== Zu; Ou += Uu)
          for (Nu = Xu; Nu !== qu; Nu += lu, Yu++) cu = fu[Yu], hu[4 * (Nu + Cu * Ou) + 0] = cu, hu[4 * (Nu + Cu * Ou) + 1] = cu, hu[4 * (Nu + Cu * Ou) + 2] = cu, hu[4 * (Nu + Cu * Ou) + 3] = 255;
        return hu
      },
      _getImageDataGrey16bits: function(uu, Eu, ju, su, Uu, Zu, Xu, lu, qu) {
        const fu = ju,
          Cu = uu.width,
          bu = uu.height;
        let cu, Nu, Ou = 0;
        const Yu = new Uint8Array(Cu * bu * 4);
        for (Nu = su; Nu !== Zu; Nu += Uu)
          for (cu = Xu; cu !== qu; cu += lu, Ou += 2) Yu[4 * (cu + Cu * Nu) + 0] = fu[Ou + 0], Yu[4 * (cu + Cu * Nu) + 1] = fu[Ou + 0], Yu[4 * (cu + Cu * Nu) + 2] = fu[Ou + 0], Yu[4 * (cu + Cu * Nu) + 3] = fu[Ou + 1];
        return Yu
      }
    };
    class lu {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".env not supported in Cube."
      }
      loadData(uu, Eu, ju) {
        const su = new Uint8Array(uu.buffer, uu.byteOffset, uu.byteLength),
          Xu = Uu(su);
        ju(Xu.width, Xu.height, Eu.generateMipMaps, !1, (() => {
          Zu(Eu, su)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);