export const id = 302;
export const ids = [302];
export const modules = {
  41416: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      _HDRTextureLoader: () => Vu
    });
    var Eu = yu(36830);
    class Ku {
      static ConvertPanoramaToCubemap(uu, Ru, yu, Eu) {
        let Ku, Qu = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          mu = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        if (!uu) throw "ConvertPanoramaToCubemap: input cannot be null";
        if (uu.length != Ru * yu * 3) {
          if (uu.length != Ru * yu * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
          Ku = 4
        } else Ku = 3;
        return {
          front: this.CreateCubemapTexture(Eu, this.FACE_FRONT, uu, Ru, yu, Qu, mu, Ku),
          back: this.CreateCubemapTexture(Eu, this.FACE_BACK, uu, Ru, yu, Qu, mu, Ku),
          left: this.CreateCubemapTexture(Eu, this.FACE_LEFT, uu, Ru, yu, Qu, mu, Ku),
          right: this.CreateCubemapTexture(Eu, this.FACE_RIGHT, uu, Ru, yu, Qu, mu, Ku),
          up: this.CreateCubemapTexture(Eu, this.FACE_UP, uu, Ru, yu, Qu, mu, Ku),
          down: this.CreateCubemapTexture(Eu, this.FACE_DOWN, uu, Ru, yu, Qu, mu, Ku),
          size: Eu,
          type: 1,
          format: 4,
          gammaSpace: !1
        }
      }
      static CreateCubemapTexture(uu, Ru, yu, Eu, Ku, Qu, mu, Ju) {
        const Nu = new ArrayBuffer(uu * uu * 4 * 3),
          Xu = new Float32Array(Nu),
          Vu = Qu ? Math.max(1, Math.round(Eu / 4 / uu)) : 1,
          ru = 1 / Vu,
          Bu = ru * ru,
          xu = Ru[1].subtract(Ru[0]).scale(ru / uu),
          Su = Ru[3].subtract(Ru[2]).scale(ru / uu),
          pu = 1 / uu;
        let Tu = 0;
        for (let Wu = 0; Wu < uu; Wu++)
          for (let Qu = 0; Qu < Vu; Qu++) {
            let Qu = Ru[0],
              Nu = Ru[2];
            for (let Ru = 0; Ru < uu; Ru++)
              for (let ru = 0; ru < Vu; ru++) {
                const Vu = Nu.subtract(Qu).scale(Tu).add(Qu);
                Vu.normalize();
                const ru = this.CalcProjectionSpherical(Vu, yu, Eu, Ku, Ju, mu);
                Xu[Wu * uu * 3 + 3 * Ru + 0] += ru.r * Bu, Xu[Wu * uu * 3 + 3 * Ru + 1] += ru.g * Bu, Xu[Wu * uu * 3 + 3 * Ru + 2] += ru.b * Bu, Qu = Qu.add(xu), Nu = Nu.add(Su)
              }
            Tu += pu * ru
          }
        return Xu
      }
      static CalcProjectionSpherical(uu, Ru, yu, Eu, Ku, Qu) {
        let mu = Math.atan2(uu.z, uu.x);
        const Ju = Math.acos(uu.y);
        for (; mu < -Math.PI;) mu += 2 * Math.PI;
        for (; mu > Math.PI;) mu -= 2 * Math.PI;
        let Nu = mu / Math.PI;
        const Xu = Ju / Math.PI;
        Nu = .5 * Nu + .5;
        let Vu = Math.round(Nu * yu);
        Vu < 0 ? Vu = 0 : Vu >= yu && (Vu = yu - 1);
        let ru = Math.round(Xu * Eu);
        ru < 0 ? ru = 0 : ru >= Eu && (ru = Eu - 1);
        const Bu = Qu ? Eu - ru - 1 : ru;
        return {
          r: Ru[Bu * yu * Ku + Vu * Ku + 0],
          g: Ru[Bu * yu * Ku + Vu * Ku + 1],
          b: Ru[Bu * yu * Ku + Vu * Ku + 2]
        }
      }
    }

    function Qu(uu, Ru, yu, Eu, Ku, Qu) {
      Ku > 0 ? (Ku = function(uu, Ru) {
        return Ru > 1023 ? uu * Math.pow(2, 1023) * Math.pow(2, Ru - 1023) : Ru < -1074 ? uu * Math.pow(2, -1074) * Math.pow(2, Ru + 1074) : uu * Math.pow(2, Ru)
      }(1, Ku - 136), uu[Qu + 0] = Ru * Ku, uu[Qu + 1] = yu * Ku, uu[Qu + 2] = Eu * Ku) : (uu[Qu + 0] = 0, uu[Qu + 1] = 0, uu[Qu + 2] = 0)
    }

    function mu(uu, Ru) {
      let yu, Eu = "";
      for (let Ku = Ru; Ku < uu.length - Ru && (yu = String.fromCharCode(uu[Ku]), "\n" != yu); Ku++) Eu += yu;
      return Eu
    }

    function Ju(uu) {
      let Ru = mu(uu, 0);
      if ("#" != Ru[0] || "?" != Ru[1]) throw "Bad HDR Format.";
      let yu = !1,
        Eu = !1,
        Ku = 0;
      do {
        Ku += Ru.length + 1, Ru = mu(uu, Ku), "FORMAT=32-bit_rle_rgbe" == Ru ? Eu = !0 : 0 == Ru.length && (yu = !0)
      } while (!yu);
      if (!Eu) throw "HDR Bad header format, unsupported FORMAT";
      Ku += Ru.length + 1, Ru = mu(uu, Ku);
      const Qu = /^-Y (.*) \+X (.*)$/g.exec(Ru);
      if (!Qu || Qu.length < 3) throw "HDR Bad header format, no size";
      const Ju = parseInt(Qu[2]),
        Nu = parseInt(Qu[1]);
      if (Ju < 8 || Ju > 32767) throw "HDR Bad header format, unsupported size";
      return Ku += Ru.length + 1, {
        height: Nu,
        width: Ju,
        dataPosition: Ku
      }
    }

    function Nu(uu, Ru) {
      return function(uu, Ru) {
        let yu = Ru.height;
        const Eu = Ru.width;
        let Ku, mu, Ju, Nu, Vu, ru, Bu, xu, Su = Ru.dataPosition;
        const pu = new ArrayBuffer(4 * Eu),
          Tu = new Uint8Array(pu),
          Wu = new ArrayBuffer(Ru.width * Ru.height * 4 * 3),
          ju = new Float32Array(Wu);
        for (; yu > 0;) {
          if (Ku = uu[Su++], mu = uu[Su++], Ju = uu[Su++], Nu = uu[Su++], 2 != Ku || 2 != mu || 128 & Ju || Ru.width < 8 || Ru.width > 32767) return Xu(uu, Ru);
          if ((Ju << 8 | Nu) != Eu) throw "HDR Bad header format, wrong scan line width";
          for (ru = 0, xu = 0; xu < 4; xu++)
            for (Bu = (xu + 1) * Eu; ru < Bu;)
              if (Ku = uu[Su++], mu = uu[Su++], Ku > 128) {
                if (Vu = Ku - 128, 0 == Vu || Vu > Bu - ru) throw "HDR Bad Format, bad scanline data (run)";
                for (; Vu-- > 0;) Tu[ru++] = mu
              } else {
                if (Vu = Ku, 0 == Vu || Vu > Bu - ru) throw "HDR Bad Format, bad scanline data (non-run)";
                if (Tu[ru++] = mu, --Vu > 0)
                  for (let Ru = 0; Ru < Vu; Ru++) Tu[ru++] = uu[Su++]
              } for (xu = 0; xu < Eu; xu++) Ku = Tu[xu], mu = Tu[xu + Eu], Ju = Tu[xu + 2 * Eu], Nu = Tu[xu + 3 * Eu], Qu(ju, Ku, mu, Ju, Nu, (Ru.height - yu) * Eu * 3 + 3 * xu);
          yu--
        }
        return ju
      }(uu, Ru)
    }

    function Xu(uu, Ru) {
      let yu = Ru.height;
      const Eu = Ru.width;
      let Ku, mu, Ju, Nu, Xu, Vu = Ru.dataPosition;
      const ru = new ArrayBuffer(Ru.width * Ru.height * 4 * 3),
        Bu = new Float32Array(ru);
      for (; yu > 0;) {
        for (Xu = 0; Xu < Ru.width; Xu++) Ku = uu[Vu++], mu = uu[Vu++], Ju = uu[Vu++], Nu = uu[Vu++], Qu(Bu, Ku, mu, Ju, Nu, (Ru.height - yu) * Eu * 3 + 3 * Xu);
        yu--
      }
      return Bu
    }
    Ku.FACE_LEFT = [new Eu.p(-1, -1, -1), new Eu.p(1, -1, -1), new Eu.p(-1, 1, -1), new Eu.p(1, 1, -1)], Ku.FACE_RIGHT = [new Eu.p(1, -1, 1), new Eu.p(-1, -1, 1), new Eu.p(1, 1, 1), new Eu.p(-1, 1, 1)], Ku.FACE_FRONT = [new Eu.p(1, -1, -1), new Eu.p(1, -1, 1), new Eu.p(1, 1, -1), new Eu.p(1, 1, 1)], Ku.FACE_BACK = [new Eu.p(-1, -1, 1), new Eu.p(-1, -1, -1), new Eu.p(-1, 1, 1), new Eu.p(-1, 1, -1)], Ku.FACE_DOWN = [new Eu.p(1, 1, -1), new Eu.p(1, 1, 1), new Eu.p(-1, 1, -1), new Eu.p(-1, 1, 1)], Ku.FACE_UP = [new Eu.p(-1, -1, -1), new Eu.p(-1, -1, 1), new Eu.p(1, -1, -1), new Eu.p(1, -1, 1)];
    class Vu {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".hdr not supported in Cube."
      }
      loadData(uu, Ru, yu) {
        const Eu = new Uint8Array(uu.buffer, uu.byteOffset, uu.byteLength),
          Ku = Ju(Eu),
          Qu = Nu(Eu, Ku),
          mu = Ku.width * Ku.height,
          Xu = new Float32Array(4 * mu);
        for (let Ju = 0; Ju < mu; Ju += 1) Xu[4 * Ju] = Qu[3 * Ju], Xu[4 * Ju + 1] = Qu[3 * Ju + 1], Xu[4 * Ju + 2] = Qu[3 * Ju + 2], Xu[4 * Ju + 3] = 1;
        yu(Ku.width, Ku.height, Ru.generateMipMaps, !1, (() => {
          const uu = Ru.eS();
          Ru.type = 1, Ru.format = 5, Ru._gammaSpace = !1, uu._uploadDataToTextureDirectly(Ru, Xu)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);