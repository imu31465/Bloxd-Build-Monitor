export const id = 303;
export const ids = [303];
export const modules = {
  41592: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      _HDRTextureLoader: () => uq
    });
    var Yq = gq(37139);
    class lq {
      static ConvertPanoramaToCubemap(qq, Eq, gq, Yq) {
        let lq, Oq = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          mq = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        if (!qq) throw "ConvertPanoramaToCubemap: input cannot be null";
        if (qq.length != Eq * gq * 3) {
          if (qq.length != Eq * gq * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
          lq = 4
        } else lq = 3;
        return {
          front: this.CreateCubemapTexture(Yq, this.FACE_FRONT, qq, Eq, gq, Oq, mq, lq),
          back: this.CreateCubemapTexture(Yq, this.FACE_BACK, qq, Eq, gq, Oq, mq, lq),
          left: this.CreateCubemapTexture(Yq, this.FACE_LEFT, qq, Eq, gq, Oq, mq, lq),
          right: this.CreateCubemapTexture(Yq, this.FACE_RIGHT, qq, Eq, gq, Oq, mq, lq),
          up: this.CreateCubemapTexture(Yq, this.FACE_UP, qq, Eq, gq, Oq, mq, lq),
          down: this.CreateCubemapTexture(Yq, this.FACE_DOWN, qq, Eq, gq, Oq, mq, lq),
          size: Yq,
          type: 1,
          format: 4,
          gammaSpace: !1
        }
      }
      static CreateCubemapTexture(qq, Eq, gq, Yq, lq, Oq, mq, xq) {
        const Aq = new ArrayBuffer(qq * qq * 4 * 3),
          cq = new Float32Array(Aq),
          uq = Oq ? Math.max(1, Math.round(Yq / 4 / qq)) : 1,
          Bq = 1 / uq,
          Wq = Bq * Bq,
          Nq = Eq[1].subtract(Eq[0]).scale(Bq / qq),
          aq = Eq[3].subtract(Eq[2]).scale(Bq / qq),
          Vq = 1 / qq;
        let dq = 0;
        for (let jq = 0; jq < qq; jq++)
          for (let Oq = 0; Oq < uq; Oq++) {
            let Oq = Eq[0],
              Aq = Eq[2];
            for (let Eq = 0; Eq < qq; Eq++)
              for (let Bq = 0; Bq < uq; Bq++) {
                const uq = Aq.subtract(Oq).scale(dq).add(Oq);
                uq.normalize();
                const Bq = this.CalcProjectionSpherical(uq, gq, Yq, lq, xq, mq);
                cq[jq * qq * 3 + 3 * Eq + 0] += Bq.r * Wq, cq[jq * qq * 3 + 3 * Eq + 1] += Bq.g * Wq, cq[jq * qq * 3 + 3 * Eq + 2] += Bq.b * Wq, Oq = Oq.add(Nq), Aq = Aq.add(aq)
              }
            dq += Vq * Bq
          }
        return cq
      }
      static CalcProjectionSpherical(qq, Eq, gq, Yq, lq, Oq) {
        let mq = Math.atan2(qq.z, qq.x);
        const xq = Math.acos(qq.y);
        for (; mq < -Math.PI;) mq += 2 * Math.PI;
        for (; mq > Math.PI;) mq -= 2 * Math.PI;
        let Aq = mq / Math.PI;
        const cq = xq / Math.PI;
        Aq = .5 * Aq + .5;
        let uq = Math.round(Aq * gq);
        uq < 0 ? uq = 0 : uq >= gq && (uq = gq - 1);
        let Bq = Math.round(cq * Yq);
        Bq < 0 ? Bq = 0 : Bq >= Yq && (Bq = Yq - 1);
        const Wq = Oq ? Yq - Bq - 1 : Bq;
        return {
          r: Eq[Wq * gq * lq + uq * lq + 0],
          g: Eq[Wq * gq * lq + uq * lq + 1],
          b: Eq[Wq * gq * lq + uq * lq + 2]
        }
      }
    }

    function Oq(qq, Eq, gq, Yq, lq, Oq) {
      lq > 0 ? (lq = function(qq, Eq) {
        return Eq > 1023 ? qq * Math.pow(2, 1023) * Math.pow(2, Eq - 1023) : Eq < -1074 ? qq * Math.pow(2, -1074) * Math.pow(2, Eq + 1074) : qq * Math.pow(2, Eq)
      }(1, lq - 136), qq[Oq + 0] = Eq * lq, qq[Oq + 1] = gq * lq, qq[Oq + 2] = Yq * lq) : (qq[Oq + 0] = 0, qq[Oq + 1] = 0, qq[Oq + 2] = 0)
    }

    function mq(qq, Eq) {
      let gq, Yq = "";
      for (let lq = Eq; lq < qq.length - Eq && (gq = String.fromCharCode(qq[lq]), "\n" != gq); lq++) Yq += gq;
      return Yq
    }

    function xq(qq) {
      let Eq = mq(qq, 0);
      if ("#" != Eq[0] || "?" != Eq[1]) throw "Bad HDR Format.";
      let gq = !1,
        Yq = !1,
        lq = 0;
      do {
        lq += Eq.length + 1, Eq = mq(qq, lq), "FORMAT=32-bit_rle_rgbe" == Eq ? Yq = !0 : 0 == Eq.length && (gq = !0)
      } while (!gq);
      if (!Yq) throw "HDR Bad header format, unsupported FORMAT";
      lq += Eq.length + 1, Eq = mq(qq, lq);
      const Oq = /^-Y (.*) \+X (.*)$/g.exec(Eq);
      if (!Oq || Oq.length < 3) throw "HDR Bad header format, no size";
      const xq = parseInt(Oq[2]),
        Aq = parseInt(Oq[1]);
      if (xq < 8 || xq > 32767) throw "HDR Bad header format, unsupported size";
      return lq += Eq.length + 1, {
        height: Aq,
        width: xq,
        dataPosition: lq
      }
    }

    function Aq(qq, Eq) {
      return function(qq, Eq) {
        let gq = Eq.height;
        const Yq = Eq.width;
        let lq, mq, xq, Aq, uq, Bq, Wq, Nq, aq = Eq.dataPosition;
        const Vq = new ArrayBuffer(4 * Yq),
          dq = new Uint8Array(Vq),
          jq = new ArrayBuffer(Eq.width * Eq.height * 4 * 3),
          Hq = new Float32Array(jq);
        for (; gq > 0;) {
          if (lq = qq[aq++], mq = qq[aq++], xq = qq[aq++], Aq = qq[aq++], 2 != lq || 2 != mq || 128 & xq || Eq.width < 8 || Eq.width > 32767) return cq(qq, Eq);
          if ((xq << 8 | Aq) != Yq) throw "HDR Bad header format, wrong scan line width";
          for (Bq = 0, Nq = 0; Nq < 4; Nq++)
            for (Wq = (Nq + 1) * Yq; Bq < Wq;)
              if (lq = qq[aq++], mq = qq[aq++], lq > 128) {
                if (uq = lq - 128, 0 == uq || uq > Wq - Bq) throw "HDR Bad Format, bad scanline data (run)";
                for (; uq-- > 0;) dq[Bq++] = mq
              } else {
                if (uq = lq, 0 == uq || uq > Wq - Bq) throw "HDR Bad Format, bad scanline data (non-run)";
                if (dq[Bq++] = mq, --uq > 0)
                  for (let Eq = 0; Eq < uq; Eq++) dq[Bq++] = qq[aq++]
              } for (Nq = 0; Nq < Yq; Nq++) lq = dq[Nq], mq = dq[Nq + Yq], xq = dq[Nq + 2 * Yq], Aq = dq[Nq + 3 * Yq], Oq(Hq, lq, mq, xq, Aq, (Eq.height - gq) * Yq * 3 + 3 * Nq);
          gq--
        }
        return Hq
      }(qq, Eq)
    }

    function cq(qq, Eq) {
      let gq = Eq.height;
      const Yq = Eq.width;
      let lq, mq, xq, Aq, cq, uq = Eq.dataPosition;
      const Bq = new ArrayBuffer(Eq.width * Eq.height * 4 * 3),
        Wq = new Float32Array(Bq);
      for (; gq > 0;) {
        for (cq = 0; cq < Eq.width; cq++) lq = qq[uq++], mq = qq[uq++], xq = qq[uq++], Aq = qq[uq++], Oq(Wq, lq, mq, xq, Aq, (Eq.height - gq) * Yq * 3 + 3 * cq);
        gq--
      }
      return Wq
    }
    lq.FACE_LEFT = [new Yq.q(-1, -1, -1), new Yq.q(1, -1, -1), new Yq.q(-1, 1, -1), new Yq.q(1, 1, -1)], lq.FACE_RIGHT = [new Yq.q(1, -1, 1), new Yq.q(-1, -1, 1), new Yq.q(1, 1, 1), new Yq.q(-1, 1, 1)], lq.FACE_FRONT = [new Yq.q(1, -1, -1), new Yq.q(1, -1, 1), new Yq.q(1, 1, -1), new Yq.q(1, 1, 1)], lq.FACE_BACK = [new Yq.q(-1, -1, 1), new Yq.q(-1, -1, -1), new Yq.q(-1, 1, 1), new Yq.q(-1, 1, -1)], lq.FACE_DOWN = [new Yq.q(1, 1, -1), new Yq.q(1, 1, 1), new Yq.q(-1, 1, -1), new Yq.q(-1, 1, 1)], lq.FACE_UP = [new Yq.q(-1, -1, -1), new Yq.q(-1, -1, 1), new Yq.q(1, -1, -1), new Yq.q(1, -1, 1)];
    class uq {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".hdr not supported in Cube."
      }
      loadData(qq, Eq, gq) {
        const Yq = new Uint8Array(qq.buffer, qq.byteOffset, qq.byteLength),
          lq = xq(Yq),
          Oq = Aq(Yq, lq),
          mq = lq.width * lq.height,
          cq = new Float32Array(4 * mq);
        for (let xq = 0; xq < mq; xq += 1) cq[4 * xq] = Oq[3 * xq], cq[4 * xq + 1] = Oq[3 * xq + 1], cq[4 * xq + 2] = Oq[3 * xq + 2], cq[4 * xq + 3] = 1;
        gq(lq.width, lq.height, Eq.generateMipMaps, !1, (() => {
          const qq = Eq.Ba();
          Eq.type = 1, Eq.format = 5, Eq._gammaSpace = !1, qq._uploadDataToTextureDirectly(Eq, cq)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);