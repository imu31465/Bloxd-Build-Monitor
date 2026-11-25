export const id = 317;
export const ids = [317];
export const modules = {
  42114: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      _HDRTextureLoader: () => Cu
    });
    var su = ju(37494);
    class Uu {
      static ConvertPanoramaToCubemap(uu, Eu, ju, su) {
        let Uu, Zu = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Xu = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        if (!uu) throw "ConvertPanoramaToCubemap: input cannot be null";
        if (uu.length != Eu * ju * 3) {
          if (uu.length != Eu * ju * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
          Uu = 4
        } else Uu = 3;
        return {
          front: this.CreateCubemapTexture(su, this.FACE_FRONT, uu, Eu, ju, Zu, Xu, Uu),
          back: this.CreateCubemapTexture(su, this.FACE_BACK, uu, Eu, ju, Zu, Xu, Uu),
          left: this.CreateCubemapTexture(su, this.FACE_LEFT, uu, Eu, ju, Zu, Xu, Uu),
          right: this.CreateCubemapTexture(su, this.FACE_RIGHT, uu, Eu, ju, Zu, Xu, Uu),
          up: this.CreateCubemapTexture(su, this.FACE_UP, uu, Eu, ju, Zu, Xu, Uu),
          down: this.CreateCubemapTexture(su, this.FACE_DOWN, uu, Eu, ju, Zu, Xu, Uu),
          size: su,
          type: 1,
          format: 4,
          gammaSpace: !1
        }
      }
      static CreateCubemapTexture(uu, Eu, ju, su, Uu, Zu, Xu, lu) {
        const qu = new ArrayBuffer(uu * uu * 4 * 3),
          fu = new Float32Array(qu),
          Cu = Zu ? Math.max(1, Math.round(su / 4 / uu)) : 1,
          bu = 1 / Cu,
          cu = bu * bu,
          Nu = Eu[1].subtract(Eu[0]).scale(bu / uu),
          Ou = Eu[3].subtract(Eu[2]).scale(bu / uu),
          Yu = 1 / uu;
        let hu = 0;
        for (let Du = 0; Du < uu; Du++)
          for (let Zu = 0; Zu < Cu; Zu++) {
            let Zu = Eu[0],
              qu = Eu[2];
            for (let Eu = 0; Eu < uu; Eu++)
              for (let bu = 0; bu < Cu; bu++) {
                const Cu = qu.subtract(Zu).scale(hu).add(Zu);
                Cu.normalize();
                const bu = this.CalcProjectionSpherical(Cu, ju, su, Uu, lu, Xu);
                fu[Du * uu * 3 + 3 * Eu + 0] += bu.r * cu, fu[Du * uu * 3 + 3 * Eu + 1] += bu.g * cu, fu[Du * uu * 3 + 3 * Eu + 2] += bu.b * cu, Zu = Zu.add(Nu), qu = qu.add(Ou)
              }
            hu += Yu * bu
          }
        return fu
      }
      static CalcProjectionSpherical(uu, Eu, ju, su, Uu, Zu) {
        let Xu = Math.atan2(uu.z, uu.x);
        const lu = Math.acos(uu.y);
        for (; Xu < -Math.PI;) Xu += 2 * Math.PI;
        for (; Xu > Math.PI;) Xu -= 2 * Math.PI;
        let qu = Xu / Math.PI;
        const fu = lu / Math.PI;
        qu = .5 * qu + .5;
        let Cu = Math.round(qu * ju);
        Cu < 0 ? Cu = 0 : Cu >= ju && (Cu = ju - 1);
        let bu = Math.round(fu * su);
        bu < 0 ? bu = 0 : bu >= su && (bu = su - 1);
        const cu = Zu ? su - bu - 1 : bu;
        return {
          r: Eu[cu * ju * Uu + Cu * Uu + 0],
          g: Eu[cu * ju * Uu + Cu * Uu + 1],
          b: Eu[cu * ju * Uu + Cu * Uu + 2]
        }
      }
    }

    function Zu(uu, Eu, ju, su, Uu, Zu) {
      Uu > 0 ? (Uu = function(uu, Eu) {
        return Eu > 1023 ? uu * Math.pow(2, 1023) * Math.pow(2, Eu - 1023) : Eu < -1074 ? uu * Math.pow(2, -1074) * Math.pow(2, Eu + 1074) : uu * Math.pow(2, Eu)
      }(1, Uu - 136), uu[Zu + 0] = Eu * Uu, uu[Zu + 1] = ju * Uu, uu[Zu + 2] = su * Uu) : (uu[Zu + 0] = 0, uu[Zu + 1] = 0, uu[Zu + 2] = 0)
    }

    function Xu(uu, Eu) {
      let ju, su = "";
      for (let Uu = Eu; Uu < uu.length - Eu && (ju = String.fromCharCode(uu[Uu]), "\n" != ju); Uu++) su += ju;
      return su
    }

    function lu(uu) {
      let Eu = Xu(uu, 0);
      if ("#" != Eu[0] || "?" != Eu[1]) throw "Bad HDR Format.";
      let ju = !1,
        su = !1,
        Uu = 0;
      do {
        Uu += Eu.length + 1, Eu = Xu(uu, Uu), "FORMAT=32-bit_rle_rgbe" == Eu ? su = !0 : 0 == Eu.length && (ju = !0)
      } while (!ju);
      if (!su) throw "HDR Bad header format, unsupported FORMAT";
      Uu += Eu.length + 1, Eu = Xu(uu, Uu);
      const Zu = /^-Y (.*) \+X (.*)$/g.exec(Eu);
      if (!Zu || Zu.length < 3) throw "HDR Bad header format, no size";
      const lu = parseInt(Zu[2]),
        qu = parseInt(Zu[1]);
      if (lu < 8 || lu > 32767) throw "HDR Bad header format, unsupported size";
      return Uu += Eu.length + 1, {
        height: qu,
        width: lu,
        dataPosition: Uu
      }
    }

    function qu(uu, Eu) {
      return function(uu, Eu) {
        let ju = Eu.height;
        const su = Eu.width;
        let Uu, Xu, lu, qu, Cu, bu, cu, Nu, Ou = Eu.dataPosition;
        const Yu = new ArrayBuffer(4 * su),
          hu = new Uint8Array(Yu),
          Du = new ArrayBuffer(Eu.width * Eu.height * 4 * 3),
          gu = new Float32Array(Du);
        for (; ju > 0;) {
          if (Uu = uu[Ou++], Xu = uu[Ou++], lu = uu[Ou++], qu = uu[Ou++], 2 != Uu || 2 != Xu || 128 & lu || Eu.width < 8 || Eu.width > 32767) return fu(uu, Eu);
          if ((lu << 8 | qu) != su) throw "HDR Bad header format, wrong scan line width";
          for (bu = 0, Nu = 0; Nu < 4; Nu++)
            for (cu = (Nu + 1) * su; bu < cu;)
              if (Uu = uu[Ou++], Xu = uu[Ou++], Uu > 128) {
                if (Cu = Uu - 128, 0 == Cu || Cu > cu - bu) throw "HDR Bad Format, bad scanline data (run)";
                for (; Cu-- > 0;) hu[bu++] = Xu
              } else {
                if (Cu = Uu, 0 == Cu || Cu > cu - bu) throw "HDR Bad Format, bad scanline data (non-run)";
                if (hu[bu++] = Xu, --Cu > 0)
                  for (let Eu = 0; Eu < Cu; Eu++) hu[bu++] = uu[Ou++]
              } for (Nu = 0; Nu < su; Nu++) Uu = hu[Nu], Xu = hu[Nu + su], lu = hu[Nu + 2 * su], qu = hu[Nu + 3 * su], Zu(gu, Uu, Xu, lu, qu, (Eu.height - ju) * su * 3 + 3 * Nu);
          ju--
        }
        return gu
      }(uu, Eu)
    }

    function fu(uu, Eu) {
      let ju = Eu.height;
      const su = Eu.width;
      let Uu, Xu, lu, qu, fu, Cu = Eu.dataPosition;
      const bu = new ArrayBuffer(Eu.width * Eu.height * 4 * 3),
        cu = new Float32Array(bu);
      for (; ju > 0;) {
        for (fu = 0; fu < Eu.width; fu++) Uu = uu[Cu++], Xu = uu[Cu++], lu = uu[Cu++], qu = uu[Cu++], Zu(cu, Uu, Xu, lu, qu, (Eu.height - ju) * su * 3 + 3 * fu);
        ju--
      }
      return cu
    }
    Uu.FACE_LEFT = [new su.t(-1, -1, -1), new su.t(1, -1, -1), new su.t(-1, 1, -1), new su.t(1, 1, -1)], Uu.FACE_RIGHT = [new su.t(1, -1, 1), new su.t(-1, -1, 1), new su.t(1, 1, 1), new su.t(-1, 1, 1)], Uu.FACE_FRONT = [new su.t(1, -1, -1), new su.t(1, -1, 1), new su.t(1, 1, -1), new su.t(1, 1, 1)], Uu.FACE_BACK = [new su.t(-1, -1, 1), new su.t(-1, -1, -1), new su.t(-1, 1, 1), new su.t(-1, 1, -1)], Uu.FACE_DOWN = [new su.t(1, 1, -1), new su.t(1, 1, 1), new su.t(-1, 1, -1), new su.t(-1, 1, 1)], Uu.FACE_UP = [new su.t(-1, -1, -1), new su.t(-1, -1, 1), new su.t(1, -1, -1), new su.t(1, -1, 1)];
    class Cu {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".hdr not supported in Cube."
      }
      loadData(uu, Eu, ju) {
        const su = new Uint8Array(uu.buffer, uu.byteOffset, uu.byteLength),
          Uu = lu(su),
          Zu = qu(su, Uu),
          Xu = Uu.width * Uu.height,
          fu = new Float32Array(4 * Xu);
        for (let lu = 0; lu < Xu; lu += 1) fu[4 * lu] = Zu[3 * lu], fu[4 * lu + 1] = Zu[3 * lu + 1], fu[4 * lu + 2] = Zu[3 * lu + 2], fu[4 * lu + 3] = 1;
        ju(Uu.width, Uu.height, Eu.generateMipMaps, !1, (() => {
          const uu = Eu.wO();
          Eu.type = 1, Eu.format = 5, Eu._gammaSpace = !1, uu._uploadDataToTextureDirectly(Eu, fu)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);