export const id = 304;
export const ids = [304];
export const modules = {
  41438: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      _TGATextureLoader: () => Ju
    });
    var Eu = yu(38448);

    function Ku(uu) {
      let Ru = 0;
      return {
        id_length: uu[Ru++],
        colormap_type: uu[Ru++],
        image_type: uu[Ru++],
        colormap_index: uu[Ru++] | uu[Ru++] << 8,
        colormap_length: uu[Ru++] | uu[Ru++] << 8,
        colormap_size: uu[Ru++],
        origin: [uu[Ru++] | uu[Ru++] << 8, uu[Ru++] | uu[Ru++] << 8],
        width: uu[Ru++] | uu[Ru++] << 8,
        height: uu[Ru++] | uu[Ru++] << 8,
        pixel_size: uu[Ru++],
        flags: uu[17]
      }
    }

    function Qu(uu, Ru) {
      if (Ru.length < 19) return void Eu.e.Error("Unable to load TGA file - Not enough data to contain header");
      let yu = 18;
      const Qu = Ku(Ru);
      if (Qu.id_length + yu > Ru.length) return void Eu.e.Error("Unable to load TGA file - Not enough data");
      yu += Qu.id_length;
      let Ju, Nu = !1,
        Xu = !1,
        Vu = !1;
      switch (Qu.image_type) {
        case 9:
          Nu = !0;
        case 1:
          Xu = !0;
          break;
        case 10:
          Nu = !0;
        case 2:
          break;
        case 11:
          Nu = !0;
        case 3:
          Vu = !0
      }
      const ru = Qu.pixel_size >> 3,
        Bu = Qu.width * Qu.height * ru;
      let xu, Su, pu, Tu, Wu, ju, Hu;
      if (Xu && (xu = Ru.subarray(yu, yu += Qu.colormap_length * (Qu.colormap_size >> 3))), Nu) {
        let uu, Eu, Ku;
        Ju = new Uint8Array(Bu);
        let Qu = 0;
        const mu = new Uint8Array(ru);
        for (; yu < Bu && Qu < Bu;)
          if (uu = Ru[yu++], Eu = 1 + (127 & uu), 128 & uu) {
            for (Ku = 0; Ku < ru; ++Ku) mu[Ku] = Ru[yu++];
            for (Ku = 0; Ku < Eu; ++Ku) Ju.set(mu, Qu + Ku * ru);
            Qu += ru * Eu
          } else {
            for (Eu *= ru, Ku = 0; Ku < Eu; ++Ku) Ju[Qu + Ku] = Ru[yu++];
            Qu += Eu
          }
      } else Ju = Ru.subarray(yu, yu + (Xu ? Qu.width * Qu.height : Bu));
      switch ((48 & Qu.flags) >> 4) {
        default:
        case 2:
          Su = 0, Tu = 1, Hu = Qu.width, pu = 0, Wu = 1, ju = Qu.height;
          break;
        case 0:
          Su = 0, Tu = 1, Hu = Qu.width, pu = Qu.height - 1, Wu = -1, ju = -1;
          break;
        case 3:
          Su = Qu.width - 1, Tu = -1, Hu = -1, pu = 0, Wu = 1, ju = Qu.height;
          break;
        case 1:
          Su = Qu.width - 1, Tu = -1, Hu = -1, pu = Qu.height - 1, Wu = -1, ju = -1
      }
      const du = "_getImageData" + (Vu ? "Grey" : "") + Qu.pixel_size + "bits",
        bu = mu[du](Qu, xu, Ju, pu, Wu, ju, Su, Tu, Hu);
      uu.eS()._uploadDataToTextureDirectly(uu, bu)
    }
    const mu = {
      GetTGAHeader: Ku,
      UploadContent: Qu,
      _getImageData8bits: function(uu, Ru, yu, Eu, Ku, Qu, mu, Ju, Nu) {
        const Xu = yu,
          Vu = Ru,
          ru = uu.width,
          Bu = uu.height;
        let xu, Su, pu, Tu = 0;
        const Wu = new Uint8Array(ru * Bu * 4);
        for (pu = Eu; pu !== Qu; pu += Ku)
          for (Su = mu; Su !== Nu; Su += Ju, Tu++) xu = Xu[Tu], Wu[4 * (Su + ru * pu) + 3] = 255, Wu[4 * (Su + ru * pu) + 2] = Vu[3 * xu + 0], Wu[4 * (Su + ru * pu) + 1] = Vu[3 * xu + 1], Wu[4 * (Su + ru * pu) + 0] = Vu[3 * xu + 2];
        return Wu
      },
      _getImageData16bits: function(uu, Ru, yu, Eu, Ku, Qu, mu, Ju, Nu) {
        const Xu = yu,
          Vu = uu.width,
          ru = uu.height;
        let Bu, xu, Su, pu = 0;
        const Tu = new Uint8Array(Vu * ru * 4);
        for (Su = Eu; Su !== Qu; Su += Ku)
          for (xu = mu; xu !== Nu; xu += Ju, pu += 2) {
            Bu = Xu[pu + 0] + (Xu[pu + 1] << 8);
            const uu = 255 * ((31744 & Bu) >> 10) / 31 | 0,
              Ru = 255 * ((992 & Bu) >> 5) / 31 | 0,
              yu = 255 * (31 & Bu) / 31 | 0;
            Tu[4 * (xu + Vu * Su) + 0] = uu, Tu[4 * (xu + Vu * Su) + 1] = Ru, Tu[4 * (xu + Vu * Su) + 2] = yu, Tu[4 * (xu + Vu * Su) + 3] = 32768 & Bu ? 0 : 255
          }
        return Tu
      },
      _getImageData24bits: function(uu, Ru, yu, Eu, Ku, Qu, mu, Ju, Nu) {
        const Xu = yu,
          Vu = uu.width,
          ru = uu.height;
        let Bu, xu, Su = 0;
        const pu = new Uint8Array(Vu * ru * 4);
        for (xu = Eu; xu !== Qu; xu += Ku)
          for (Bu = mu; Bu !== Nu; Bu += Ju, Su += 3) pu[4 * (Bu + Vu * xu) + 3] = 255, pu[4 * (Bu + Vu * xu) + 2] = Xu[Su + 0], pu[4 * (Bu + Vu * xu) + 1] = Xu[Su + 1], pu[4 * (Bu + Vu * xu) + 0] = Xu[Su + 2];
        return pu
      },
      _getImageData32bits: function(uu, Ru, yu, Eu, Ku, Qu, mu, Ju, Nu) {
        const Xu = yu,
          Vu = uu.width,
          ru = uu.height;
        let Bu, xu, Su = 0;
        const pu = new Uint8Array(Vu * ru * 4);
        for (xu = Eu; xu !== Qu; xu += Ku)
          for (Bu = mu; Bu !== Nu; Bu += Ju, Su += 4) pu[4 * (Bu + Vu * xu) + 2] = Xu[Su + 0], pu[4 * (Bu + Vu * xu) + 1] = Xu[Su + 1], pu[4 * (Bu + Vu * xu) + 0] = Xu[Su + 2], pu[4 * (Bu + Vu * xu) + 3] = Xu[Su + 3];
        return pu
      },
      _getImageDataGrey8bits: function(uu, Ru, yu, Eu, Ku, Qu, mu, Ju, Nu) {
        const Xu = yu,
          Vu = uu.width,
          ru = uu.height;
        let Bu, xu, Su, pu = 0;
        const Tu = new Uint8Array(Vu * ru * 4);
        for (Su = Eu; Su !== Qu; Su += Ku)
          for (xu = mu; xu !== Nu; xu += Ju, pu++) Bu = Xu[pu], Tu[4 * (xu + Vu * Su) + 0] = Bu, Tu[4 * (xu + Vu * Su) + 1] = Bu, Tu[4 * (xu + Vu * Su) + 2] = Bu, Tu[4 * (xu + Vu * Su) + 3] = 255;
        return Tu
      },
      _getImageDataGrey16bits: function(uu, Ru, yu, Eu, Ku, Qu, mu, Ju, Nu) {
        const Xu = yu,
          Vu = uu.width,
          ru = uu.height;
        let Bu, xu, Su = 0;
        const pu = new Uint8Array(Vu * ru * 4);
        for (xu = Eu; xu !== Qu; xu += Ku)
          for (Bu = mu; Bu !== Nu; Bu += Ju, Su += 2) pu[4 * (Bu + Vu * xu) + 0] = Xu[Su + 0], pu[4 * (Bu + Vu * xu) + 1] = Xu[Su + 0], pu[4 * (Bu + Vu * xu) + 2] = Xu[Su + 0], pu[4 * (Bu + Vu * xu) + 3] = Xu[Su + 1];
        return pu
      }
    };
    class Ju {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".env not supported in Cube."
      }
      loadData(uu, Ru, yu) {
        const Eu = new Uint8Array(uu.buffer, uu.byteOffset, uu.byteLength),
          mu = Ku(Eu);
        yu(mu.width, mu.height, Ru.generateMipMaps, !1, (() => {
          Qu(Ru, Eu)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);