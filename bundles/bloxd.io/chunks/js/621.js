export const id = 621;
export const ids = [621];
export const modules = {
  45043: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      _HDRTextureLoader: () => oe
    });
    var ye = He(37917);
    class be {
      static ConvertPanoramaToCubemap(ee, ie, He, ye) {
        let be, Me = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Ke = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        if (!ee) throw "ConvertPanoramaToCubemap: input cannot be null";
        if (ee.length != ie * He * 3) {
          if (ee.length != ie * He * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
          be = 4
        } else be = 3;
        return {
          front: this.CreateCubemapTexture(ye, this.FACE_FRONT, ee, ie, He, Me, Ke, be),
          back: this.CreateCubemapTexture(ye, this.FACE_BACK, ee, ie, He, Me, Ke, be),
          left: this.CreateCubemapTexture(ye, this.FACE_LEFT, ee, ie, He, Me, Ke, be),
          right: this.CreateCubemapTexture(ye, this.FACE_RIGHT, ee, ie, He, Me, Ke, be),
          up: this.CreateCubemapTexture(ye, this.FACE_UP, ee, ie, He, Me, Ke, be),
          down: this.CreateCubemapTexture(ye, this.FACE_DOWN, ee, ie, He, Me, Ke, be),
          size: ye,
          type: 1,
          format: 4,
          gammaSpace: !1
        }
      }
      static CreateCubemapTexture(ee, ie, He, ye, be, Me, Ke, Ue) {
        const Fe = new ArrayBuffer(ee * ee * 4 * 3),
          Je = new Float32Array(Fe),
          oe = Me ? Math.max(1, Math.round(ye / 4 / ee)) : 1,
          Re = 1 / oe,
          ke = Re * Re,
          qe = ie[1].subtract(ie[0]).scale(Re / ee),
          fe = ie[3].subtract(ie[2]).scale(Re / ee),
          Te = 1 / ee;
        let pe = 0;
        for (let Xe = 0; Xe < ee; Xe++)
          for (let Me = 0; Me < oe; Me++) {
            let Me = ie[0],
              Fe = ie[2];
            for (let ie = 0; ie < ee; ie++)
              for (let Re = 0; Re < oe; Re++) {
                const oe = Fe.subtract(Me).scale(pe).add(Me);
                oe.normalize();
                const Re = this.CalcProjectionSpherical(oe, He, ye, be, Ue, Ke);
                Je[Xe * ee * 3 + 3 * ie + 0] += Re.r * ke, Je[Xe * ee * 3 + 3 * ie + 1] += Re.g * ke, Je[Xe * ee * 3 + 3 * ie + 2] += Re.b * ke, Me = Me.add(qe), Fe = Fe.add(fe)
              }
            pe += Te * Re
          }
        return Je
      }
      static CalcProjectionSpherical(ee, ie, He, ye, be, Me) {
        let Ke = Math.atan2(ee.z, ee.x);
        const Ue = Math.acos(ee.y);
        for (; Ke < -Math.PI;) Ke += 2 * Math.PI;
        for (; Ke > Math.PI;) Ke -= 2 * Math.PI;
        let Fe = Ke / Math.PI;
        const Je = Ue / Math.PI;
        Fe = .5 * Fe + .5;
        let oe = Math.round(Fe * He);
        oe < 0 ? oe = 0 : oe >= He && (oe = He - 1);
        let Re = Math.round(Je * ye);
        Re < 0 ? Re = 0 : Re >= ye && (Re = ye - 1);
        const ke = Me ? ye - Re - 1 : Re;
        return {
          r: ie[ke * He * be + oe * be + 0],
          g: ie[ke * He * be + oe * be + 1],
          b: ie[ke * He * be + oe * be + 2]
        }
      }
    }

    function Me(ee, ie, He, ye, be, Me) {
      be > 0 ? (be = function(ee, ie) {
        return ie > 1023 ? ee * Math.pow(2, 1023) * Math.pow(2, ie - 1023) : ie < -1074 ? ee * Math.pow(2, -1074) * Math.pow(2, ie + 1074) : ee * Math.pow(2, ie)
      }(1, be - 136), ee[Me + 0] = ie * be, ee[Me + 1] = He * be, ee[Me + 2] = ye * be) : (ee[Me + 0] = 0, ee[Me + 1] = 0, ee[Me + 2] = 0)
    }

    function Ke(ee, ie) {
      let He, ye = "";
      for (let be = ie; be < ee.length - ie && (He = String.fromCharCode(ee[be]), "\n" != He); be++) ye += He;
      return ye
    }

    function Ue(ee) {
      let ie = Ke(ee, 0);
      if ("#" != ie[0] || "?" != ie[1]) throw "Bad HDR Format.";
      let He = !1,
        ye = !1,
        be = 0;
      do {
        be += ie.length + 1, ie = Ke(ee, be), "FORMAT=32-bit_rle_rgbe" == ie ? ye = !0 : 0 == ie.length && (He = !0)
      } while (!He);
      if (!ye) throw "HDR Bad header format, unsupported FORMAT";
      be += ie.length + 1, ie = Ke(ee, be);
      const Me = /^-Y (.*) \+X (.*)$/g.exec(ie);
      if (!Me || Me.length < 3) throw "HDR Bad header format, no size";
      const Ue = parseInt(Me[2]),
        Fe = parseInt(Me[1]);
      if (Ue < 8 || Ue > 32767) throw "HDR Bad header format, unsupported size";
      return be += ie.length + 1, {
        height: Fe,
        width: Ue,
        dataPosition: be
      }
    }

    function Fe(ee, ie) {
      return function(ee, ie) {
        let He = ie.height;
        const ye = ie.width;
        let be, Ke, Ue, Fe, oe, Re, ke, qe, fe = ie.dataPosition;
        const Te = new ArrayBuffer(4 * ye),
          pe = new Uint8Array(Te),
          Xe = new ArrayBuffer(ie.width * ie.height * 4 * 3),
          ze = new Float32Array(Xe);
        for (; He > 0;) {
          if (be = ee[fe++], Ke = ee[fe++], Ue = ee[fe++], Fe = ee[fe++], 2 != be || 2 != Ke || 128 & Ue || ie.width < 8 || ie.width > 32767) return Je(ee, ie);
          if ((Ue << 8 | Fe) != ye) throw "HDR Bad header format, wrong scan line width";
          for (Re = 0, qe = 0; qe < 4; qe++)
            for (ke = (qe + 1) * ye; Re < ke;)
              if (be = ee[fe++], Ke = ee[fe++], be > 128) {
                if (oe = be - 128, 0 == oe || oe > ke - Re) throw "HDR Bad Format, bad scanline data (run)";
                for (; oe-- > 0;) pe[Re++] = Ke
              } else {
                if (oe = be, 0 == oe || oe > ke - Re) throw "HDR Bad Format, bad scanline data (non-run)";
                if (pe[Re++] = Ke, --oe > 0)
                  for (let ie = 0; ie < oe; ie++) pe[Re++] = ee[fe++]
              } for (qe = 0; qe < ye; qe++) be = pe[qe], Ke = pe[qe + ye], Ue = pe[qe + 2 * ye], Fe = pe[qe + 3 * ye], Me(ze, be, Ke, Ue, Fe, (ie.height - He) * ye * 3 + 3 * qe);
          He--
        }
        return ze
      }(ee, ie)
    }

    function Je(ee, ie) {
      let He = ie.height;
      const ye = ie.width;
      let be, Ke, Ue, Fe, Je, oe = ie.dataPosition;
      const Re = new ArrayBuffer(ie.width * ie.height * 4 * 3),
        ke = new Float32Array(Re);
      for (; He > 0;) {
        for (Je = 0; Je < ie.width; Je++) be = ee[oe++], Ke = ee[oe++], Ue = ee[oe++], Fe = ee[oe++], Me(ke, be, Ke, Ue, Fe, (ie.height - He) * ye * 3 + 3 * Je);
        He--
      }
      return ke
    }
    be.FACE_LEFT = [new ye.p(-1, -1, -1), new ye.p(1, -1, -1), new ye.p(-1, 1, -1), new ye.p(1, 1, -1)], be.FACE_RIGHT = [new ye.p(1, -1, 1), new ye.p(-1, -1, 1), new ye.p(1, 1, 1), new ye.p(-1, 1, 1)], be.FACE_FRONT = [new ye.p(1, -1, -1), new ye.p(1, -1, 1), new ye.p(1, 1, -1), new ye.p(1, 1, 1)], be.FACE_BACK = [new ye.p(-1, -1, 1), new ye.p(-1, -1, -1), new ye.p(-1, 1, 1), new ye.p(-1, 1, -1)], be.FACE_DOWN = [new ye.p(1, 1, -1), new ye.p(1, 1, 1), new ye.p(-1, 1, -1), new ye.p(-1, 1, 1)], be.FACE_UP = [new ye.p(-1, -1, -1), new ye.p(-1, -1, 1), new ye.p(1, -1, -1), new ye.p(1, -1, 1)];
    class oe {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".hdr not supported in Cube."
      }
      loadData(ee, ie, He) {
        const ye = new Uint8Array(ee.buffer, ee.byteOffset, ee.byteLength),
          be = Ue(ye),
          Me = Fe(ye, be),
          Ke = be.width * be.height,
          Je = new Float32Array(4 * Ke);
        for (let Ue = 0; Ue < Ke; Ue += 1) Je[4 * Ue] = Me[3 * Ue], Je[4 * Ue + 1] = Me[3 * Ue + 1], Je[4 * Ue + 2] = Me[3 * Ue + 2], Je[4 * Ue + 3] = 1;
        He(be.width, be.height, ie.generateMipMaps, !1, (() => {
          const ee = ie.Nf();
          ie.type = 1, ie.format = 5, ie._gammaSpace = !1, ee._uploadDataToTextureDirectly(ie, Je)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);