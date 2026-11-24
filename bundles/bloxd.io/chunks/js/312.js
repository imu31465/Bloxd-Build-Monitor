export const id = 312;
export const ids = [312];
export const modules = {
  41874: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      _HDRTextureLoader: () => IS
    });
    var tS = gS(37117);
    class bS {
      static ConvertPanoramaToCubemap(SS, HS, gS, tS) {
        let bS, XS = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          xS = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        if (!SS) throw "ConvertPanoramaToCubemap: input cannot be null";
        if (SS.length != HS * gS * 3) {
          if (SS.length != HS * gS * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
          bS = 4
        } else bS = 3;
        return {
          front: this.CreateCubemapTexture(tS, this.FACE_FRONT, SS, HS, gS, XS, xS, bS),
          back: this.CreateCubemapTexture(tS, this.FACE_BACK, SS, HS, gS, XS, xS, bS),
          left: this.CreateCubemapTexture(tS, this.FACE_LEFT, SS, HS, gS, XS, xS, bS),
          right: this.CreateCubemapTexture(tS, this.FACE_RIGHT, SS, HS, gS, XS, xS, bS),
          up: this.CreateCubemapTexture(tS, this.FACE_UP, SS, HS, gS, XS, xS, bS),
          down: this.CreateCubemapTexture(tS, this.FACE_DOWN, SS, HS, gS, XS, xS, bS),
          size: tS,
          type: 1,
          format: 4,
          gammaSpace: !1
        }
      }
      static CreateCubemapTexture(SS, HS, gS, tS, bS, XS, xS, NS) {
        const qS = new ArrayBuffer(SS * SS * 4 * 3),
          uS = new Float32Array(qS),
          IS = XS ? Math.max(1, Math.round(tS / 4 / SS)) : 1,
          fS = 1 / IS,
          kS = fS * fS,
          aS = HS[1].subtract(HS[0]).scale(fS / SS),
          KS = HS[3].subtract(HS[2]).scale(fS / SS),
          jS = 1 / SS;
        let GS = 0;
        for (let CS = 0; CS < SS; CS++)
          for (let XS = 0; XS < IS; XS++) {
            let XS = HS[0],
              qS = HS[2];
            for (let HS = 0; HS < SS; HS++)
              for (let fS = 0; fS < IS; fS++) {
                const IS = qS.subtract(XS).scale(GS).add(XS);
                IS.normalize();
                const fS = this.CalcProjectionSpherical(IS, gS, tS, bS, NS, xS);
                uS[CS * SS * 3 + 3 * HS + 0] += fS.r * kS, uS[CS * SS * 3 + 3 * HS + 1] += fS.g * kS, uS[CS * SS * 3 + 3 * HS + 2] += fS.b * kS, XS = XS.add(aS), qS = qS.add(KS)
              }
            GS += jS * fS
          }
        return uS
      }
      static CalcProjectionSpherical(SS, HS, gS, tS, bS, XS) {
        let xS = Math.atan2(SS.z, SS.x);
        const NS = Math.acos(SS.y);
        for (; xS < -Math.PI;) xS += 2 * Math.PI;
        for (; xS > Math.PI;) xS -= 2 * Math.PI;
        let qS = xS / Math.PI;
        const uS = NS / Math.PI;
        qS = .5 * qS + .5;
        let IS = Math.round(qS * gS);
        IS < 0 ? IS = 0 : IS >= gS && (IS = gS - 1);
        let fS = Math.round(uS * tS);
        fS < 0 ? fS = 0 : fS >= tS && (fS = tS - 1);
        const kS = XS ? tS - fS - 1 : fS;
        return {
          r: HS[kS * gS * bS + IS * bS + 0],
          g: HS[kS * gS * bS + IS * bS + 1],
          b: HS[kS * gS * bS + IS * bS + 2]
        }
      }
    }

    function XS(SS, HS, gS, tS, bS, XS) {
      bS > 0 ? (bS = function(SS, HS) {
        return HS > 1023 ? SS * Math.pow(2, 1023) * Math.pow(2, HS - 1023) : HS < -1074 ? SS * Math.pow(2, -1074) * Math.pow(2, HS + 1074) : SS * Math.pow(2, HS)
      }(1, bS - 136), SS[XS + 0] = HS * bS, SS[XS + 1] = gS * bS, SS[XS + 2] = tS * bS) : (SS[XS + 0] = 0, SS[XS + 1] = 0, SS[XS + 2] = 0)
    }

    function xS(SS, HS) {
      let gS, tS = "";
      for (let bS = HS; bS < SS.length - HS && (gS = String.fromCharCode(SS[bS]), "\n" != gS); bS++) tS += gS;
      return tS
    }

    function NS(SS) {
      let HS = xS(SS, 0);
      if ("#" != HS[0] || "?" != HS[1]) throw "Bad HDR Format.";
      let gS = !1,
        tS = !1,
        bS = 0;
      do {
        bS += HS.length + 1, HS = xS(SS, bS), "FORMAT=32-bit_rle_rgbe" == HS ? tS = !0 : 0 == HS.length && (gS = !0)
      } while (!gS);
      if (!tS) throw "HDR Bad header format, unsupported FORMAT";
      bS += HS.length + 1, HS = xS(SS, bS);
      const XS = /^-Y (.*) \+X (.*)$/g.exec(HS);
      if (!XS || XS.length < 3) throw "HDR Bad header format, no size";
      const NS = parseInt(XS[2]),
        qS = parseInt(XS[1]);
      if (NS < 8 || NS > 32767) throw "HDR Bad header format, unsupported size";
      return bS += HS.length + 1, {
        height: qS,
        width: NS,
        dataPosition: bS
      }
    }

    function qS(SS, HS) {
      return function(SS, HS) {
        let gS = HS.height;
        const tS = HS.width;
        let bS, xS, NS, qS, IS, fS, kS, aS, KS = HS.dataPosition;
        const jS = new ArrayBuffer(4 * tS),
          GS = new Uint8Array(jS),
          CS = new ArrayBuffer(HS.width * HS.height * 4 * 3),
          nS = new Float32Array(CS);
        for (; gS > 0;) {
          if (bS = SS[KS++], xS = SS[KS++], NS = SS[KS++], qS = SS[KS++], 2 != bS || 2 != xS || 128 & NS || HS.width < 8 || HS.width > 32767) return uS(SS, HS);
          if ((NS << 8 | qS) != tS) throw "HDR Bad header format, wrong scan line width";
          for (fS = 0, aS = 0; aS < 4; aS++)
            for (kS = (aS + 1) * tS; fS < kS;)
              if (bS = SS[KS++], xS = SS[KS++], bS > 128) {
                if (IS = bS - 128, 0 == IS || IS > kS - fS) throw "HDR Bad Format, bad scanline data (run)";
                for (; IS-- > 0;) GS[fS++] = xS
              } else {
                if (IS = bS, 0 == IS || IS > kS - fS) throw "HDR Bad Format, bad scanline data (non-run)";
                if (GS[fS++] = xS, --IS > 0)
                  for (let HS = 0; HS < IS; HS++) GS[fS++] = SS[KS++]
              } for (aS = 0; aS < tS; aS++) bS = GS[aS], xS = GS[aS + tS], NS = GS[aS + 2 * tS], qS = GS[aS + 3 * tS], XS(nS, bS, xS, NS, qS, (HS.height - gS) * tS * 3 + 3 * aS);
          gS--
        }
        return nS
      }(SS, HS)
    }

    function uS(SS, HS) {
      let gS = HS.height;
      const tS = HS.width;
      let bS, xS, NS, qS, uS, IS = HS.dataPosition;
      const fS = new ArrayBuffer(HS.width * HS.height * 4 * 3),
        kS = new Float32Array(fS);
      for (; gS > 0;) {
        for (uS = 0; uS < HS.width; uS++) bS = SS[IS++], xS = SS[IS++], NS = SS[IS++], qS = SS[IS++], XS(kS, bS, xS, NS, qS, (HS.height - gS) * tS * 3 + 3 * uS);
        gS--
      }
      return kS
    }
    bS.FACE_LEFT = [new tS.n(-1, -1, -1), new tS.n(1, -1, -1), new tS.n(-1, 1, -1), new tS.n(1, 1, -1)], bS.FACE_RIGHT = [new tS.n(1, -1, 1), new tS.n(-1, -1, 1), new tS.n(1, 1, 1), new tS.n(-1, 1, 1)], bS.FACE_FRONT = [new tS.n(1, -1, -1), new tS.n(1, -1, 1), new tS.n(1, 1, -1), new tS.n(1, 1, 1)], bS.FACE_BACK = [new tS.n(-1, -1, 1), new tS.n(-1, -1, -1), new tS.n(-1, 1, 1), new tS.n(-1, 1, -1)], bS.FACE_DOWN = [new tS.n(1, 1, -1), new tS.n(1, 1, 1), new tS.n(-1, 1, -1), new tS.n(-1, 1, 1)], bS.FACE_UP = [new tS.n(-1, -1, -1), new tS.n(-1, -1, 1), new tS.n(1, -1, -1), new tS.n(1, -1, 1)];
    class IS {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".hdr not supported in Cube."
      }
      loadData(SS, HS, gS) {
        const tS = new Uint8Array(SS.buffer, SS.byteOffset, SS.byteLength),
          bS = NS(tS),
          XS = qS(tS, bS),
          xS = bS.width * bS.height,
          uS = new Float32Array(4 * xS);
        for (let NS = 0; NS < xS; NS += 1) uS[4 * NS] = XS[3 * NS], uS[4 * NS + 1] = XS[3 * NS + 1], uS[4 * NS + 2] = XS[3 * NS + 2], uS[4 * NS + 3] = 1;
        gS(bS.width, bS.height, HS.generateMipMaps, !1, (() => {
          const SS = HS.AK();
          HS.type = 1, HS.format = 5, HS._gammaSpace = !1, SS._uploadDataToTextureDirectly(HS, uS)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);