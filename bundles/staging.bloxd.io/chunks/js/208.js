/*! For license information please see pxmq3aq.208.9b36a464.chunk.js.LICENSE.txt */
export const id = 208;
export const ids = [208];
export const modules = {
  34907: (VV, eV, xV) => {
    function JV() {
      return "object" === typeof process && "object" === typeof process.versions && "undefined" !== typeof process.versions.node
    }

    function YV(VV) {
      return VV instanceof Uint8Array && (!JV() || !Buffer.isBuffer(VV))
    }

    function UV(VV) {
      return VV instanceof ArrayBuffer
    }

    function yV(VV) {
      return !!JV() && Buffer.isBuffer(VV)
    }
    var pV = xV(34913).b,
      QV = xV(34918).e,
      nV = "Argument compressed must be type of ArrayBuffer, Buffer, or Uint8Array";
    eV.b = function(VV) {
      if (!YV(VV) && !UV(VV) && !yV(VV)) throw new TypeError(nV);
      var eV = !1,
        xV = !1;
      YV(VV) ? eV = !0 : UV(VV) && (xV = !0, VV = new Uint8Array(VV));
      var JV, pV, wV, ZV = new QV(VV),
        vV = ZV.maxCompressedLength();
      if (eV ? (JV = new Uint8Array(vV), wV = ZV.compressToBuffer(JV)) : xV ? (JV = new ArrayBuffer(vV), pV = new Uint8Array(JV), wV = ZV.compressToBuffer(pV)) : (JV = Buffer.alloc(vV), wV = ZV.compressToBuffer(JV)), !JV.slice) {
        var rV = new Uint8Array(Array.prototype.slice.call(JV, 0, wV));
        if (eV) return rV;
        if (xV) return rV.buffer;
        throw new Error("Not implemented")
      }
      return JV.slice(0, wV)
    }
  },
  34918: (VV, eV) => {
    var xV = new Array(15);

    function JV(VV, eV) {
      return 506832829 * VV >>> eV
    }

    function YV(VV, eV) {
      return VV[eV] + (VV[eV + 1] << 8) + (VV[eV + 2] << 16) + (VV[eV + 3] << 24)
    }

    function UV(VV, eV, xV) {
      return VV[eV] === VV[xV] && VV[eV + 1] === VV[xV + 1] && VV[eV + 2] === VV[xV + 2] && VV[eV + 3] === VV[xV + 3]
    }

    function yV(VV, eV, xV, JV, YV) {
      return xV <= 60 ? (JV[YV] = xV - 1 << 2, YV += 1) : xV < 256 ? (JV[YV] = 240, JV[YV + 1] = xV - 1, YV += 2) : (JV[YV] = 244, JV[YV + 1] = xV - 1 & 255, JV[YV + 2] = xV - 1 >>> 8, YV += 3),
        function(VV, eV, xV, JV, YV) {
          var UV;
          for (UV = 0; UV < YV; UV++) xV[JV + UV] = VV[eV + UV]
        }(VV, eV, JV, YV, xV), YV + xV
    }

    function pV(VV, eV, xV, JV) {
      return JV < 12 && xV < 2048 ? (VV[eV] = 1 + (JV - 4 << 2) + (xV >>> 8 << 5), VV[eV + 1] = 255 & xV, eV + 2) : (VV[eV] = 2 + (JV - 1 << 2), VV[eV + 1] = 255 & xV, VV[eV + 2] = xV >>> 8, eV + 3)
    }

    function QV(VV, eV, xV, JV) {
      for (; JV >= 68;) eV = pV(VV, eV, xV, 64), JV -= 64;
      return JV > 64 && (eV = pV(VV, eV, xV, 60), JV -= 60), pV(VV, eV, xV, JV)
    }

    function nV(VV, eV, pV, nV, wV) {
      for (var ZV = 1; 1 << ZV <= pV && ZV <= 14;) ZV += 1;
      var vV = 32 - (ZV -= 1);
      "undefined" === typeof xV[ZV] && (xV[ZV] = new Uint16Array(1 << ZV));
      var rV, kV = xV[ZV];
      for (rV = 0; rV < kV.length; rV++) kV[rV] = 0;
      var bV, EV, BV, jV, qV, tV, FV, TV, PV, AV, NV = eV + pV,
        XV = eV,
        MV = eV,
        zV = !0;
      if (pV >= 15)
        for (bV = NV - 15, BV = JV(YV(VV, eV += 1), vV); zV;) {
          tV = 32, jV = eV;
          do {
            if (EV = BV, FV = tV >>> 5, tV += 1, jV = (eV = jV) + FV, eV > bV) {
              zV = !1;
              break
            }
            BV = JV(YV(VV, jV), vV), qV = XV + kV[EV], kV[EV] = eV - XV
          } while (!UV(VV, eV, qV));
          if (!zV) break;
          wV = yV(VV, MV, eV - MV, nV, wV);
          do {
            for (TV = eV, PV = 4; eV + PV < NV && VV[eV + PV] === VV[qV + PV];) PV += 1;
            if (eV += PV, wV = QV(nV, wV, TV - qV, PV), MV = eV, eV >= bV) {
              zV = !1;
              break
            }
            kV[JV(YV(VV, eV - 1), vV)] = eV - 1 - XV, qV = XV + kV[AV = JV(YV(VV, eV), vV)], kV[AV] = eV - XV
          } while (UV(VV, eV, qV));
          if (!zV) break;
          BV = JV(YV(VV, eV += 1), vV)
        }
      return MV < NV && (wV = yV(VV, MV, NV - MV, nV, wV)), wV
    }

    function wV(VV) {
      this.array = VV
    }
    wV.prototype.maxCompressedLength = function() {
      var VV = this.array.length;
      return 32 + VV + Math.floor(VV / 6)
    }, wV.prototype.compressToBuffer = function(VV) {
      var eV, xV = this.array,
        JV = xV.length,
        YV = 0,
        UV = 0;
      for (UV = function(VV, eV, xV) {
          do {
            eV[xV] = 127 & VV, (VV >>>= 7) > 0 && (eV[xV] += 128), xV += 1
          } while (VV > 0);
          return xV
        }(JV, VV, UV); YV < JV;) UV = nV(xV, YV, eV = Math.min(JV - YV, 65536), VV, UV), YV += eV;
      return UV
    }, eV.e = wV
  },
  34913: (VV, eV) => {
    var xV = [0, 255, 65535, 16777215, 4294967295];

    function JV(VV, eV, xV, JV, YV) {
      var UV;
      for (UV = 0; UV < YV; UV++) xV[JV + UV] = VV[eV + UV]
    }

    function YV(VV, eV, xV, JV) {
      var YV;
      for (YV = 0; YV < JV; YV++) VV[eV + YV] = VV[eV - xV + YV]
    }

    function UV(VV) {
      this.array = VV, this.pos = 0
    }
    UV.prototype.readUncompressedLength = function() {
      for (var VV, eV, xV = 0, JV = 0; JV < 32 && this.pos < this.array.length;) {
        if (VV = this.array[this.pos], this.pos += 1, (eV = 127 & VV) << JV >>> JV !== eV) return -1;
        if (xV |= eV << JV, VV < 128) return xV;
        JV += 7
      }
      return -1
    }, UV.prototype.uncompressToBuffer = function(VV) {
      for (var eV, UV, yV, pV, QV = this.array, nV = QV.length, wV = this.pos, ZV = 0; wV < QV.length;)
        if (eV = QV[wV], wV += 1, 0 === (3 & eV)) {
          if ((UV = 1 + (eV >>> 2)) > 60) {
            if (wV + 3 >= nV) return !1;
            yV = UV - 60, UV = 1 + ((UV = QV[wV] + (QV[wV + 1] << 8) + (QV[wV + 2] << 16) + (QV[wV + 3] << 24)) & xV[yV]), wV += yV
          }
          if (wV + UV > nV) return !1;
          JV(QV, wV, VV, ZV, UV), wV += UV, ZV += UV
        } else {
          switch (3 & eV) {
            case 1:
              UV = 4 + (eV >>> 2 & 7), pV = QV[wV] + (eV >>> 5 << 8), wV += 1;
              break;
            case 2:
              if (wV + 1 >= nV) return !1;
              UV = 1 + (eV >>> 2), pV = QV[wV] + (QV[wV + 1] << 8), wV += 2;
              break;
            case 3:
              if (wV + 3 >= nV) return !1;
              UV = 1 + (eV >>> 2), pV = QV[wV] + (QV[wV + 1] << 8) + (QV[wV + 2] << 16) + (QV[wV + 3] << 24), wV += 4
          }
          if (0 === pV || pV > ZV) return !1;
          YV(VV, ZV, pV, UV), ZV += UV
        } return !0
    }, eV.b = UV
  },
  34955: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => UV,
      g: () => YV,
      j: () => nV,
      k: () => rV,
      l: () => yV,
      o: () => kV
    });
    var JV = xV(34963);
    const YV = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350],
      UV = [-1, 1, 2, 3, 4, 5, 6, 8],
      yV = VV => {
        if (!VV || VV.byteLength < 2) throw new TypeError("AAC description must be at least 2 bytes long.");
        const eV = new JV.b(VV),
          xV = pV(eV),
          {
            frequencyIndex: YV,
            sampleRate: yV
          } = QV(eV),
          nV = eV.readBits(4);
        let wV = null;
        nV >= 1 && nV <= 7 && (wV = UV[nV]);
        let ZV = xV,
          vV = !1,
          rV = yV;
        if (5 === xV || 29 === xV) vV = 29 === xV, rV = QV(eV).sampleRate, ZV = pV(eV), 22 === ZV && eV.skipBits(4);
        else
          for (; eV.getBitsLeft() > 15;) {
            const VV = eV.pos;
            if (695 === eV.readBits(11)) {
              5 === pV(eV) && eV.readBits(1) && (rV = QV(eV).sampleRate, eV.getBitsLeft() > 11 && 1352 === eV.readBits(11) && (vV = !!eV.readBits(1)));
              break
            }
            eV.pos = VV + 1
          }
        return null !== wV && wV > 1 && (vV = !1), {
          objectType: xV,
          coreObjectType: ZV,
          frequencyIndex: YV,
          channelConfiguration: nV,
          outputSampleRate: rV,
          outputNumberOfChannels: vV && 1 === wV ? 2 : wV
        }
      },
      pV = VV => {
        const eV = VV.readBits(5);
        return 31 === eV ? 32 + VV.readBits(6) : eV
      },
      QV = VV => {
        const eV = VV.readBits(4);
        return 15 === eV ? {
          frequencyIndex: eV,
          sampleRate: VV.readBits(24)
        } : {
          frequencyIndex: eV,
          sampleRate: eV < YV.length ? YV[eV] : null
        }
      },
      nV = VV => {
        const eV = 5 === VV.objectType || 29 === VV.objectType,
          xV = 29 === VV.objectType,
          YV = eV ? VV.outputSampleRate / 2 : VV.outputSampleRate,
          yV = xV ? 1 : VV.outputNumberOfChannels,
          pV = UV.indexOf(yV);
        if (-1 === pV) throw new TypeError(`Unsupported number of channels: ${VV.outputNumberOfChannels}`);
        let QV = 16;
        VV.objectType >= 32 && (QV += 6), 15 === vV(YV) && (QV += 24), eV && (QV += 9, 15 === vV(VV.outputSampleRate) && (QV += 24));
        const nV = Math.ceil(QV / 8),
          rV = new Uint8Array(nV),
          kV = new JV.b(rV);
        return wV(kV, VV.objectType), ZV(kV, YV), kV.writeBits(4, pV), eV && (ZV(kV, VV.outputSampleRate), wV(kV, 2)), kV.writeBits(3, 0), rV
      },
      wV = (VV, eV) => {
        eV < 32 ? VV.writeBits(5, eV) : (VV.writeBits(5, 31), VV.writeBits(6, eV - 32))
      },
      ZV = (VV, eV) => {
        const xV = vV(eV);
        VV.writeBits(4, xV), 15 === xV && VV.writeBits(24, eV)
      },
      vV = VV => {
        const eV = YV.indexOf(VV);
        return -1 === eV ? 15 : eV
      },
      rV = VV => {
        const eV = new Uint8Array(7),
          xV = new JV.b(eV),
          {
            coreObjectType: YV,
            frequencyIndex: UV,
            channelConfiguration: yV
          } = VV,
          pV = YV - 1;
        return xV.writeBits(12, 4095), xV.writeBits(1, 0), xV.writeBits(2, 0), xV.writeBits(1, 1), xV.writeBits(2, pV), xV.writeBits(4, UV), xV.writeBits(1, 0), xV.writeBits(3, yV), xV.writeBits(1, 0), xV.writeBits(1, 0), xV.writeBits(1, 0), xV.writeBits(1, 0), xV.skipBits(13), xV.writeBits(11, 2047), xV.writeBits(2, 0), {
          header: eV,
          bitstream: xV
        }
      },
      kV = (VV, eV) => {
        VV.pos = 30, VV.writeBits(13, eV)
      }
  },
  34963: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => JV
    });
    class JV {
      constructor(VV) {
        this.bytes = VV, this.pos = 0
      }
      seekToByte(VV) {
        this.pos = 8 * VV
      }
      readBit() {
        const VV = Math.floor(this.pos / 8),
          eV = this.bytes[VV] ?? 0,
          xV = 7 - (7 & this.pos),
          JV = (eV & 1 << xV) >> xV;
        return this.pos++, JV
      }
      readBits(VV) {
        if (1 === VV) return this.readBit();
        let eV = 0;
        for (let xV = 0; xV < VV; xV++) eV <<= 1, eV |= this.readBit();
        return eV
      }
      writeBits(VV, eV) {
        const xV = this.pos + VV;
        for (let JV = this.pos; JV < xV; JV++) {
          const VV = Math.floor(JV / 8);
          let YV = this.bytes[VV];
          const UV = 7 - (7 & JV);
          YV &= ~(1 << UV), YV |= (eV & 1 << xV - JV - 1) >> xV - JV - 1 << UV, this.bytes[VV] = YV
        }
        this.pos = xV
      }
      copyBits(VV, eV) {
        let xV = 0;
        for (; xV < VV - 7; xV += 8) this.writeBits(8, eV.readBits(8));
        const JV = VV - xV;
        JV > 0 && this.writeBits(JV, eV.readBits(JV))
      }
      readAlignedByte() {
        if (this.pos % 8 !== 0) throw new Error("Bitstream is not byte-aligned.");
        const VV = this.pos / 8,
          eV = this.bytes[VV] ?? 0;
        return this.pos += 8, eV
      }
      skipBits(VV) {
        this.pos += VV
      }
      getBitsLeft() {
        return 8 * this.bytes.length - this.pos
      }
      clone() {
        const VV = new JV(this.bytes);
        return VV.pos = this.pos, VV
      }
    }
  },
  34968: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => OV,
      f: () => QV,
      h: () => Ve,
      l: () => SV,
      o: () => nV,
      r: () => fV,
      t: () => ke,
      v: () => BV,
      w: () => jV,
      x: () => IV,
      y: () => FV,
      C: () => aV,
      F: () => sV,
      K: () => LV,
      G: () => qV,
      N: () => MV,
      R: () => kV,
      V: () => XV,
      Y: () => hV,
      ab: () => vV,
      db: () => rV,
      gb: () => dV,
      hb: () => Ze,
      jb: () => xe,
      mb: () => uV,
      nb: () => mV,
      rb: () => HV,
      tb: () => tV,
      xb: () => CV
    });
    var JV = xV(34965),
      YV = xV(34933),
      UV = xV(34973);
    const yV = [48e3, 44100, 32e3],
      pV = [24e3, 22050, 16e3];
    var QV, nV, wV = xV(34963),
      ZV = xV(34981);
    ! function(VV) {
      VV[VV.NON_IDR_SLICE = 1] = "NON_IDR_SLICE", VV[VV.SLICE_DPA = 2] = "SLICE_DPA", VV[VV.SLICE_DPB = 3] = "SLICE_DPB", VV[VV.SLICE_DPC = 4] = "SLICE_DPC", VV[VV.IDR = 5] = "IDR", VV[VV.SEI = 6] = "SEI", VV[VV.SPS = 7] = "SPS", VV[VV.PPS = 8] = "PPS", VV[VV.AUD = 9] = "AUD", VV[VV.SPS_EXT = 13] = "SPS_EXT"
    }(QV || (QV = {})),
    function(VV) {
      VV[VV.RASL_N = 8] = "RASL_N", VV[VV.RASL_R = 9] = "RASL_R", VV[VV.BLA_W_LP = 16] = "BLA_W_LP", VV[VV.RSV_IRAP_VCL23 = 23] = "RSV_IRAP_VCL23", VV[VV.VPS_NUT = 32] = "VPS_NUT", VV[VV.SPS_NUT = 33] = "SPS_NUT", VV[VV.PPS_NUT = 34] = "PPS_NUT", VV[VV.AUD_NUT = 35] = "AUD_NUT", VV[VV.PREFIX_SEI_NUT = 39] = "PREFIX_SEI_NUT", VV[VV.SUFFIX_SEI_NUT = 40] = "SUFFIX_SEI_NUT"
    }(nV || (nV = {}));
    const vV = function*(VV) {
        let eV = 0,
          xV = -1;
        for (; eV < VV.length - 2;) {
          const JV = VV.indexOf(0, eV);
          if (-1 === JV || JV >= VV.length - 2) break;
          eV = JV;
          let YV = 0;
          eV + 3 < VV.length && 0 === VV[eV + 1] && 0 === VV[eV + 2] && 1 === VV[eV + 3] ? YV = 4 : 0 === VV[eV + 1] && 1 === VV[eV + 2] && (YV = 3), 0 !== YV ? (-1 !== xV && eV > xV && (yield {
            offset: xV,
            length: eV - xV
          }), xV = eV + YV, eV = xV) : eV++
        } - 1 !== xV && xV < VV.length && (yield {
          offset: xV,
          length: VV.length - xV
        })
      },
      rV = function*(VV, eV) {
        let xV = 0;
        const JV = new DataView(VV.buffer, VV.byteOffset, VV.byteLength);
        for (; xV + eV <= VV.length;) {
          let VV;
          1 === eV ? VV = JV.getUint8(xV) : 2 === eV ? VV = JV.getUint16(xV, !1) : 3 === eV ? VV = (0, YV.yb)(JV, xV, !1) : ((0, YV.L)(4 === eV), VV = JV.getUint32(xV, !1)), xV += eV, yield {
            offset: xV,
            length: VV
          }, xV += VV
        }
      },
      kV = VV => 31 & VV,
      bV = VV => {
        const eV = [],
          xV = VV.length;
        for (let JV = 0; JV < xV; JV++) JV + 2 < xV && 0 === VV[JV] && 0 === VV[JV + 1] && 3 === VV[JV + 2] ? (eV.push(0, 0), JV += 2) : eV.push(VV[JV]);
        return new Uint8Array(eV)
      },
      EV = new Uint8Array([0, 0, 0, 1]),
      BV = VV => {
        const eV = VV.reduce(((VV, eV) => VV + EV.byteLength + eV.byteLength), 0),
          xV = new Uint8Array(eV);
        let JV = 0;
        for (const YV of VV) xV.set(EV, JV), JV += EV.byteLength, xV.set(YV, JV), JV += YV.byteLength;
        return xV
      },
      jV = (VV, eV) => {
        const xV = VV.reduce(((VV, xV) => VV + eV + xV.byteLength), 0),
          JV = new Uint8Array(xV);
        let UV = 0;
        for (const yV of VV) {
          const VV = new DataView(JV.buffer, JV.byteOffset, JV.byteLength);
          switch (eV) {
            case 1:
              VV.setUint8(UV, yV.byteLength);
              break;
            case 2:
              VV.setUint16(UV, yV.byteLength, !1);
              break;
            case 3:
              (0, YV.gd)(VV, UV, yV.byteLength, !1);
              break;
            case 4:
              VV.setUint32(UV, yV.byteLength, !1)
          }
          UV += eV, JV.set(yV, UV), UV += yV.byteLength
        }
        return JV
      },
      qV = VV => {
        try {
          const eV = [],
            xV = [],
            JV = [];
          for (const YV of vV(VV)) {
            const UV = VV.subarray(YV.offset, YV.offset + YV.length),
              yV = kV(UV[0]);
            yV === QV.SPS ? eV.push(UV) : yV === QV.PPS ? xV.push(UV) : yV === QV.SPS_EXT && JV.push(UV)
          }
          if (0 === eV.length) return null;
          if (0 === xV.length) return null;
          const UV = eV[0],
            yV = PV(UV);
          (0, YV.L)(null !== yV);
          const pV = 100 === yV.profileIdc || 110 === yV.profileIdc || 122 === yV.profileIdc || 144 === yV.profileIdc;
          return {
            configurationVersion: 1,
            avcProfileIndication: yV.profileIdc,
            profileCompatibility: yV.constraintFlags,
            avcLevelIndication: yV.levelIdc,
            lengthSizeMinusOne: 3,
            sequenceParameterSets: eV,
            pictureParameterSets: xV,
            chromaFormat: pV ? yV.chromaFormatIdc : null,
            bitDepthLumaMinus8: pV ? yV.bitDepthLumaMinus8 : null,
            bitDepthChromaMinus8: pV ? yV.bitDepthChromaMinus8 : null,
            sequenceParameterSetExt: pV ? JV : null
          }
        } catch (eV) {
          return UV.c._error("Error building AVC Decoder Configuration Record:", eV), null
        }
      },
      tV = VV => {
        const eV = [];
        eV.push(VV.configurationVersion), eV.push(VV.avcProfileIndication), eV.push(VV.profileCompatibility), eV.push(VV.avcLevelIndication), eV.push(252 | 3 & VV.lengthSizeMinusOne), eV.push(224 | 31 & VV.sequenceParameterSets.length);
        for (const xV of VV.sequenceParameterSets) {
          const VV = xV.byteLength;
          eV.push(VV >> 8), eV.push(255 & VV);
          for (let JV = 0; JV < VV; JV++) eV.push(xV[JV])
        }
        eV.push(VV.pictureParameterSets.length);
        for (const xV of VV.pictureParameterSets) {
          const VV = xV.byteLength;
          eV.push(VV >> 8), eV.push(255 & VV);
          for (let JV = 0; JV < VV; JV++) eV.push(xV[JV])
        }
        if ((100 === VV.avcProfileIndication || 110 === VV.avcProfileIndication || 122 === VV.avcProfileIndication || 144 === VV.avcProfileIndication) && null !== VV.chromaFormat) {
          (0, YV.L)(null !== VV.bitDepthLumaMinus8), (0, YV.L)(null !== VV.bitDepthChromaMinus8), (0, YV.L)(null !== VV.sequenceParameterSetExt), eV.push(252 | 3 & VV.chromaFormat), eV.push(248 | 7 & VV.bitDepthLumaMinus8), eV.push(248 | 7 & VV.bitDepthChromaMinus8), eV.push(VV.sequenceParameterSetExt.length);
          for (const xV of VV.sequenceParameterSetExt) {
            const VV = xV.byteLength;
            eV.push(VV >> 8), eV.push(255 & VV);
            for (let JV = 0; JV < VV; JV++) eV.push(xV[JV])
          }
        }
        return new Uint8Array(eV)
      },
      FV = VV => {
        try {
          const eV = (0, YV.rd)(VV);
          let xV = 0;
          const JV = eV.getUint8(xV++),
            UV = eV.getUint8(xV++),
            yV = eV.getUint8(xV++),
            pV = eV.getUint8(xV++),
            QV = 3 & eV.getUint8(xV++),
            nV = 31 & eV.getUint8(xV++),
            wV = [];
          for (let YV = 0; YV < nV; YV++) {
            const JV = eV.getUint16(xV, !1);
            xV += 2, wV.push(VV.subarray(xV, xV + JV)), xV += JV
          }
          const ZV = eV.getUint8(xV++),
            vV = [];
          for (let YV = 0; YV < ZV; YV++) {
            const JV = eV.getUint16(xV, !1);
            xV += 2, vV.push(VV.subarray(xV, xV + JV)), xV += JV
          }
          const rV = {
            configurationVersion: JV,
            avcProfileIndication: UV,
            profileCompatibility: yV,
            avcLevelIndication: pV,
            lengthSizeMinusOne: QV,
            sequenceParameterSets: wV,
            pictureParameterSets: vV,
            chromaFormat: null,
            bitDepthLumaMinus8: null,
            bitDepthChromaMinus8: null,
            sequenceParameterSetExt: null
          };
          if ((100 === UV || 110 === UV || 122 === UV || 144 === UV) && xV + 4 <= VV.length) {
            const JV = 3 & eV.getUint8(xV++),
              YV = 7 & eV.getUint8(xV++),
              UV = 7 & eV.getUint8(xV++),
              yV = eV.getUint8(xV++);
            rV.chromaFormat = JV, rV.bitDepthLumaMinus8 = YV, rV.bitDepthChromaMinus8 = UV;
            const pV = [];
            for (let QV = 0; QV < yV; QV++) {
              const JV = eV.getUint16(xV, !1);
              xV += 2, pV.push(VV.subarray(xV, xV + JV)), xV += JV
            }
            rV.sequenceParameterSetExt = pV
          }
          return rV
        } catch (eV) {
          return UV.c._error("Error deserializing AVC Decoder Configuration Record:", eV), null
        }
      },
      TV = {
        1: {
          num: 1,
          den: 1
        },
        2: {
          num: 12,
          den: 11
        },
        3: {
          num: 10,
          den: 11
        },
        4: {
          num: 16,
          den: 11
        },
        5: {
          num: 40,
          den: 33
        },
        6: {
          num: 24,
          den: 11
        },
        7: {
          num: 20,
          den: 11
        },
        8: {
          num: 32,
          den: 11
        },
        9: {
          num: 80,
          den: 33
        },
        10: {
          num: 18,
          den: 11
        },
        11: {
          num: 15,
          den: 11
        },
        12: {
          num: 64,
          den: 33
        },
        13: {
          num: 160,
          den: 99
        },
        14: {
          num: 4,
          den: 3
        },
        15: {
          num: 3,
          den: 2
        },
        16: {
          num: 2,
          den: 1
        }
      },
      PV = VV => {
        try {
          const eV = bV(VV),
            xV = new wV.b(eV);
          xV.skipBits(1), xV.skipBits(2);
          if (7 !== xV.readBits(5)) return null;
          const UV = xV.readAlignedByte(),
            yV = xV.readAlignedByte(),
            pV = xV.readAlignedByte();
          (0, YV.Hc)(xV);
          let QV = 1,
            nV = 0,
            ZV = 0,
            vV = 0;
          if (100 === UV || 110 === UV || 122 === UV || 244 === UV || 44 === UV || 83 === UV || 86 === UV || 118 === UV || 128 === UV) {
            QV = (0, YV.Hc)(xV), 3 === QV && (vV = xV.readBits(1)), nV = (0, YV.Hc)(xV), ZV = (0, YV.Hc)(xV), xV.skipBits(1);
            if (xV.readBits(1))
              for (let VV = 0; VV < (3 !== QV ? 8 : 12); VV++) {
                if (xV.readBits(1)) {
                  const eV = VV < 6 ? 16 : 64;
                  let JV = 8,
                    UV = 8;
                  for (let VV = 0; VV < eV; VV++) {
                    if (0 !== UV) {
                      UV = (JV + (0, YV.Lc)(xV) + 256) % 256
                    }
                    JV = 0 === UV ? JV : UV
                  }
                }
              }
          }(0, YV.Hc)(xV);
          const rV = (0, YV.Hc)(xV);
          if (0 === rV)(0, YV.Hc)(xV);
          else if (1 === rV) {
            xV.skipBits(1), (0, YV.Lc)(xV), (0, YV.Lc)(xV);
            const VV = (0, YV.Hc)(xV);
            for (let eV = 0; eV < VV; eV++)(0, YV.Lc)(xV)
          }(0, YV.Hc)(xV), xV.skipBits(1);
          const kV = (0, YV.Hc)(xV),
            EV = (0, YV.Hc)(xV),
            BV = 16 * (kV + 1),
            jV = 16 * (EV + 1);
          let qV = BV,
            tV = jV;
          const FV = xV.readBits(1);
          FV || xV.skipBits(1), xV.skipBits(1);
          if (xV.readBits(1)) {
            const VV = (0, YV.Hc)(xV),
              eV = (0, YV.Hc)(xV),
              JV = (0, YV.Hc)(xV),
              UV = (0, YV.Hc)(xV);
            let yV, pV;
            if (0 === (0 === vV ? QV : 0)) yV = 1, pV = 2 - FV;
            else {
              yV = 3 === QV ? 1 : 2, pV = (1 === QV ? 2 : 1) * (2 - FV)
            }
            qV -= yV * (VV + eV), tV -= pV * (JV + UV)
          }
          let PV = 2,
            NV = 2,
            XV = 2,
            MV = 0,
            zV = {
              num: 1,
              den: 1
            },
            GV = null,
            WV = null,
            RV = null,
            gV = null;
          const DV = xV.pos;
          if (xV.readBits(1)) {
            if (xV.readBits(1)) {
              const VV = xV.readBits(8);
              if (255 === VV) zV = {
                num: xV.readBits(16),
                den: xV.readBits(16)
              };
              else {
                const eV = TV[VV];
                eV && (zV = eV)
              }
            }
            xV.readBits(1) && xV.skipBits(1);
            if (xV.readBits(1)) {
              xV.skipBits(3), MV = xV.readBits(1);
              xV.readBits(1) && (PV = xV.readBits(8), NV = xV.readBits(8), XV = xV.readBits(8))
            }
            xV.readBits(1) && ((0, YV.Hc)(xV), (0, YV.Hc)(xV));
            xV.readBits(1) && (xV.skipBits(32), xV.skipBits(32), xV.skipBits(1));
            const VV = xV.readBits(1);
            VV && AV(xV);
            const eV = xV.readBits(1);
            eV && AV(xV), (VV || eV) && xV.skipBits(1), xV.skipBits(1), RV = xV.pos, gV = xV.readBits(1), gV && (xV.skipBits(1), (0, YV.Hc)(xV), (0, YV.Hc)(xV), (0, YV.Hc)(xV), (0, YV.Hc)(xV), GV = (0, YV.Hc)(xV), WV = (0, YV.Hc)(xV))
          }
          if (null === GV) {
            (0, YV.L)(null === WV);
            if (44 !== UV && 86 !== UV && 100 !== UV && 110 !== UV && 122 !== UV && 244 !== UV || !(16 & yV)) {
              const VV = kV + 1,
                eV = (2 - FV) * (EV + 1),
                xV = JV.c.find((VV => VV.level >= pV)) ?? (0, YV.jc)(JV.c),
                UV = Math.min(Math.floor(xV.maxDpbMbs / (VV * eV)), 16);
              GV = UV, WV = UV
            } else GV = 0, WV = 0
          }
          return (0, YV.L)(null !== WV), {
            emulationUnpreventedBytes: eV,
            profileIdc: UV,
            constraintFlags: yV,
            levelIdc: pV,
            frameMbsOnlyFlag: FV,
            chromaFormatIdc: QV,
            bitDepthLumaMinus8: nV,
            bitDepthChromaMinus8: ZV,
            codedWidth: BV,
            codedHeight: jV,
            displayWidth: qV,
            displayHeight: tV,
            pixelAspectRatio: zV,
            colourPrimaries: PV,
            matrixCoefficients: XV,
            transferCharacteristics: NV,
            fullRangeFlag: MV,
            numReorderFrames: GV,
            maxDecFrameBuffering: WV,
            vuiParametersFlagBitOffset: DV,
            bitstreamRestrictionFlagBitOffset: RV,
            bitstreamRestrictionFlag: gV
          }
        } catch (eV) {
          return UV.c._error("Error parsing AVC SPS:", eV), null
        }
      },
      AV = VV => {
        const eV = (0, YV.Hc)(VV);
        VV.skipBits(4), VV.skipBits(4);
        for (let xV = 0; xV <= eV; xV++)(0, YV.Hc)(VV), (0, YV.Hc)(VV), VV.skipBits(1);
        VV.skipBits(5), VV.skipBits(5), VV.skipBits(5), VV.skipBits(5)
      },
      NV = (VV, eV) => {
        if (eV.description) {
          const xV = 3 & (0, YV.sd)(eV.description)[21];
          return rV(VV, xV + 1)
        }
        return vV(VV)
      },
      XV = VV => VV >> 1 & 63,
      MV = VV => {
        try {
          const eV = [],
            xV = [],
            JV = [],
            yV = [];
          for (const YV of vV(VV)) {
            const UV = VV.subarray(YV.offset, YV.offset + YV.length),
              pV = XV(UV[0]);
            pV === nV.VPS_NUT ? eV.push(UV) : pV === nV.SPS_NUT ? xV.push(UV) : pV === nV.PPS_NUT ? JV.push(UV) : pV !== nV.PREFIX_SEI_NUT && pV !== nV.SUFFIX_SEI_NUT || yV.push(UV)
          }
          if (0 === xV.length || 0 === JV.length) return null;
          const pV = (VV => {
            try {
              const eV = new wV.b(bV(VV));
              eV.skipBits(16), eV.readBits(4);
              const xV = eV.readBits(3),
                JV = eV.readBits(1),
                {
                  general_profile_space: UV,
                  general_tier_flag: yV,
                  general_profile_idc: pV,
                  general_profile_compatibility_flags: QV,
                  general_constraint_indicator_flags: nV,
                  general_level_idc: ZV
                } = zV(eV, xV);
              (0, YV.Hc)(eV);
              const vV = (0, YV.Hc)(eV);
              let rV = 0;
              3 === vV && (rV = eV.readBits(1));
              const kV = (0, YV.Hc)(eV),
                EV = (0, YV.Hc)(eV);
              let BV = kV,
                jV = EV;
              if (eV.readBits(1)) {
                const VV = (0, YV.Hc)(eV),
                  xV = (0, YV.Hc)(eV),
                  JV = (0, YV.Hc)(eV),
                  UV = (0, YV.Hc)(eV);
                let yV = 1,
                  pV = 1;
                const QV = 0 === rV ? vV : 0;
                1 === QV ? (yV = 2, pV = 2) : 2 === QV && (yV = 2, pV = 1), BV -= (VV + xV) * yV, jV -= (JV + UV) * pV
              }
              const qV = (0, YV.Hc)(eV),
                tV = (0, YV.Hc)(eV);
              (0, YV.Hc)(eV);
              const FV = eV.readBits(1);
              let TV = 0;
              for (let VV = FV ? 0 : xV; VV <= xV; VV++)(0, YV.Hc)(eV), TV = (0, YV.Hc)(eV), (0, YV.Hc)(eV);
              (0, YV.Hc)(eV), (0, YV.Hc)(eV), (0, YV.Hc)(eV), (0, YV.Hc)(eV), (0, YV.Hc)(eV), (0, YV.Hc)(eV), eV.readBits(1) && eV.readBits(1) && GV(eV), eV.skipBits(1), eV.skipBits(1), eV.readBits(1) && (eV.skipBits(4), eV.skipBits(4), (0, YV.Hc)(eV), (0, YV.Hc)(eV), eV.skipBits(1));
              const PV = (0, YV.Hc)(eV);
              if (WV(eV, PV), eV.readBits(1)) {
                const VV = (0, YV.Hc)(eV);
                for (let xV = 0; xV < VV; xV++)(0, YV.Hc)(eV), eV.skipBits(1)
              }
              eV.skipBits(1), eV.skipBits(1);
              let AV = 2,
                NV = 2,
                XV = 2,
                MV = 0,
                RV = 0,
                DV = {
                  num: 1,
                  den: 1
                };
              if (eV.readBits(1)) {
                const VV = gV(eV, xV);
                DV = VV.pixelAspectRatio, AV = VV.colourPrimaries, NV = VV.transferCharacteristics, XV = VV.matrixCoefficients, MV = VV.fullRangeFlag, RV = VV.minSpatialSegmentationIdc
              }
              return {
                displayWidth: BV,
                displayHeight: jV,
                pixelAspectRatio: DV,
                colourPrimaries: AV,
                transferCharacteristics: NV,
                matrixCoefficients: XV,
                fullRangeFlag: MV,
                maxDecFrameBuffering: TV + 1,
                spsMaxSubLayersMinus1: xV,
                spsTemporalIdNestingFlag: JV,
                generalProfileSpace: UV,
                generalTierFlag: yV,
                generalProfileIdc: pV,
                generalProfileCompatibilityFlags: QV,
                generalConstraintIndicatorFlags: nV,
                generalLevelIdc: ZV,
                chromaFormatIdc: vV,
                bitDepthLumaMinus8: qV,
                bitDepthChromaMinus8: tV,
                minSpatialSegmentationIdc: RV
              }
            } catch (eV) {
              return UV.c._error("Error parsing HEVC SPS:", eV), null
            }
          })(xV[0]);
          if (!pV) return null;
          let QV = 0;
          if (JV.length > 0) {
            const VV = JV[0],
              eV = new wV.b(bV(VV));
            eV.skipBits(16), (0, YV.Hc)(eV), (0, YV.Hc)(eV), eV.skipBits(1), eV.skipBits(1), eV.skipBits(3), eV.skipBits(1), eV.skipBits(1), (0, YV.Hc)(eV), (0, YV.Hc)(eV), (0, YV.Lc)(eV), eV.skipBits(1), eV.skipBits(1), eV.readBits(1) && (0, YV.Hc)(eV), (0, YV.Lc)(eV), (0, YV.Lc)(eV), eV.skipBits(1), eV.skipBits(1), eV.skipBits(1), eV.skipBits(1);
            const xV = eV.readBits(1),
              UV = eV.readBits(1);
            QV = xV || UV ? xV && !UV ? 2 : !xV && UV ? 3 : 0 : 0
          }
          const ZV = [...eV.length ? [{
            arrayCompleteness: 1,
            nalUnitType: nV.VPS_NUT,
            nalUnits: eV
          }] : [], ...xV.length ? [{
            arrayCompleteness: 1,
            nalUnitType: nV.SPS_NUT,
            nalUnits: xV
          }] : [], ...JV.length ? [{
            arrayCompleteness: 1,
            nalUnitType: nV.PPS_NUT,
            nalUnits: JV
          }] : [], ...yV.length ? [{
            arrayCompleteness: 1,
            nalUnitType: XV(yV[0][0]),
            nalUnits: yV
          }] : []];
          return {
            configurationVersion: 1,
            generalProfileSpace: pV.generalProfileSpace,
            generalTierFlag: pV.generalTierFlag,
            generalProfileIdc: pV.generalProfileIdc,
            generalProfileCompatibilityFlags: pV.generalProfileCompatibilityFlags,
            generalConstraintIndicatorFlags: pV.generalConstraintIndicatorFlags,
            generalLevelIdc: pV.generalLevelIdc,
            minSpatialSegmentationIdc: pV.minSpatialSegmentationIdc,
            parallelismType: QV,
            chromaFormatIdc: pV.chromaFormatIdc,
            bitDepthLumaMinus8: pV.bitDepthLumaMinus8,
            bitDepthChromaMinus8: pV.bitDepthChromaMinus8,
            avgFrameRate: 0,
            constantFrameRate: 0,
            numTemporalLayers: pV.spsMaxSubLayersMinus1 + 1,
            temporalIdNested: pV.spsTemporalIdNestingFlag,
            lengthSizeMinusOne: 3,
            arrays: ZV
          }
        } catch (eV) {
          return UV.c._error("Error building HEVC Decoder Configuration Record:", eV), null
        }
      },
      zV = (VV, eV) => {
        const xV = VV.readBits(2),
          JV = VV.readBits(1),
          YV = VV.readBits(5);
        let UV = 0;
        for (let wV = 0; wV < 32; wV++) UV = UV << 1 | VV.readBits(1);
        const yV = new Uint8Array(6);
        for (let wV = 0; wV < 6; wV++) yV[wV] = VV.readBits(8);
        const pV = VV.readBits(8),
          QV = [],
          nV = [];
        for (let wV = 0; wV < eV; wV++) QV.push(VV.readBits(1)), nV.push(VV.readBits(1));
        if (eV > 0)
          for (let wV = eV; wV < 8; wV++) VV.skipBits(2);
        for (let wV = 0; wV < eV; wV++) QV[wV] && VV.skipBits(88), nV[wV] && VV.skipBits(8);
        return {
          general_profile_space: xV,
          general_tier_flag: JV,
          general_profile_idc: YV,
          general_profile_compatibility_flags: UV,
          general_constraint_indicator_flags: yV,
          general_level_idc: pV
        }
      },
      GV = VV => {
        for (let eV = 0; eV < 4; eV++)
          for (let xV = 0; xV < (3 === eV ? 2 : 6); xV++) {
            if (VV.readBits(1)) {
              const xV = Math.min(64, 1 << 4 + (eV << 1));
              eV > 1 && (0, YV.Lc)(VV);
              for (let eV = 0; eV < xV; eV++)(0, YV.Lc)(VV)
            } else(0, YV.Hc)(VV)
          }
      },
      WV = (VV, eV) => {
        const xV = [];
        for (let JV = 0; JV < eV; JV++) xV[JV] = RV(VV, JV, eV, xV)
      },
      RV = (VV, eV, xV, JV) => {
        let UV = 0,
          yV = 0,
          pV = 0;
        if (0 !== eV && (yV = VV.readBits(1)), yV) {
          if (eV === xV) {
            pV = eV - ((0, YV.Hc)(VV) + 1)
          } else pV = eV - 1;
          VV.readBits(1), (0, YV.Hc)(VV);
          const yV = JV[pV] ?? 0;
          for (let eV = 0; eV <= yV; eV++) {
            VV.readBits(1) || VV.readBits(1)
          }
          UV = JV[pV]
        } else {
          const eV = (0, YV.Hc)(VV),
            xV = (0, YV.Hc)(VV);
          for (let JV = 0; JV < eV; JV++)(0, YV.Hc)(VV), VV.readBits(1);
          for (let JV = 0; JV < xV; JV++)(0, YV.Hc)(VV), VV.readBits(1);
          UV = eV + xV
        }
        return UV
      },
      gV = (VV, eV) => {
        let xV = 2,
          JV = 2,
          UV = 2,
          yV = 0,
          pV = 0,
          QV = {
            num: 1,
            den: 1
          };
        if (VV.readBits(1)) {
          const eV = VV.readBits(8);
          if (255 === eV) QV = {
            num: VV.readBits(16),
            den: VV.readBits(16)
          };
          else {
            const VV = TV[eV];
            VV && (QV = VV)
          }
        }
        return VV.readBits(1) && VV.readBits(1), VV.readBits(1) && (VV.readBits(3), yV = VV.readBits(1), VV.readBits(1) && (xV = VV.readBits(8), JV = VV.readBits(8), UV = VV.readBits(8))), VV.readBits(1) && ((0, YV.Hc)(VV), (0, YV.Hc)(VV)), VV.readBits(1), VV.readBits(1), VV.readBits(1), VV.readBits(1) && ((0, YV.Hc)(VV), (0, YV.Hc)(VV), (0, YV.Hc)(VV), (0, YV.Hc)(VV)), VV.readBits(1) && (VV.readBits(32), VV.readBits(32), VV.readBits(1) && (0, YV.Hc)(VV), VV.readBits(1) && DV(VV, !0, eV)), VV.readBits(1) && (VV.readBits(1), VV.readBits(1), VV.readBits(1), pV = (0, YV.Hc)(VV), (0, YV.Hc)(VV), (0, YV.Hc)(VV), (0, YV.Hc)(VV), (0, YV.Hc)(VV)), {
          pixelAspectRatio: QV,
          colourPrimaries: xV,
          transferCharacteristics: JV,
          matrixCoefficients: UV,
          fullRangeFlag: yV,
          minSpatialSegmentationIdc: pV
        }
      },
      DV = (VV, eV, xV) => {
        let JV = !1,
          UV = !1,
          yV = !1;
        eV && (JV = 1 === VV.readBits(1), UV = 1 === VV.readBits(1), (JV || UV) && (yV = 1 === VV.readBits(1), yV && (VV.readBits(8), VV.readBits(5), VV.readBits(1), VV.readBits(5)), VV.readBits(4), VV.readBits(4), yV && VV.readBits(4), VV.readBits(5), VV.readBits(5), VV.readBits(5)));
        for (let pV = 0; pV <= xV; pV++) {
          let eV = !0;
          1 === VV.readBits(1) || (eV = 1 === VV.readBits(1));
          let xV = !1;
          eV ? (0, YV.Hc)(VV) : xV = 1 === VV.readBits(1);
          let pV = 1;
          if (!xV) {
            pV = (0, YV.Hc)(VV) + 1
          }
          JV && iV(VV, pV, yV), UV && iV(VV, pV, yV)
        }
      },
      iV = (VV, eV, xV) => {
        for (let JV = 0; JV < eV; JV++)(0, YV.Hc)(VV), (0, YV.Hc)(VV), xV && ((0, YV.Hc)(VV), (0, YV.Hc)(VV)), VV.readBits(1)
      },
      CV = VV => {
        const eV = [];
        eV.push(VV.configurationVersion), eV.push((3 & VV.generalProfileSpace) << 6 | (1 & VV.generalTierFlag) << 5 | 31 & VV.generalProfileIdc), eV.push(VV.generalProfileCompatibilityFlags >>> 24 & 255), eV.push(VV.generalProfileCompatibilityFlags >>> 16 & 255), eV.push(VV.generalProfileCompatibilityFlags >>> 8 & 255), eV.push(255 & VV.generalProfileCompatibilityFlags), eV.push(...VV.generalConstraintIndicatorFlags), eV.push(255 & VV.generalLevelIdc), eV.push(240 | VV.minSpatialSegmentationIdc >> 8 & 15), eV.push(255 & VV.minSpatialSegmentationIdc), eV.push(252 | 3 & VV.parallelismType), eV.push(252 | 3 & VV.chromaFormatIdc), eV.push(248 | 7 & VV.bitDepthLumaMinus8), eV.push(248 | 7 & VV.bitDepthChromaMinus8), eV.push(VV.avgFrameRate >> 8 & 255), eV.push(255 & VV.avgFrameRate), eV.push((3 & VV.constantFrameRate) << 6 | (7 & VV.numTemporalLayers) << 3 | (1 & VV.temporalIdNested) << 2 | 3 & VV.lengthSizeMinusOne), eV.push(255 & VV.arrays.length);
        for (const xV of VV.arrays) {
          eV.push((1 & xV.arrayCompleteness) << 7 | 63 & xV.nalUnitType), eV.push(xV.nalUnits.length >> 8 & 255), eV.push(255 & xV.nalUnits.length);
          for (const VV of xV.nalUnits) {
            eV.push(VV.length >> 8 & 255), eV.push(255 & VV.length);
            for (let xV = 0; xV < VV.length; xV++) eV.push(VV[xV])
          }
        }
        return new Uint8Array(eV)
      },
      aV = VV => {
        try {
          const eV = (0, YV.rd)(VV);
          let xV = 0;
          const JV = eV.getUint8(xV++),
            UV = eV.getUint8(xV++),
            yV = UV >> 6 & 3,
            pV = UV >> 5 & 1,
            QV = 31 & UV,
            nV = eV.getUint32(xV, !1);
          xV += 4;
          const wV = VV.subarray(xV, xV + 6);
          xV += 6;
          const ZV = eV.getUint8(xV++),
            vV = (15 & eV.getUint8(xV++)) << 8 | eV.getUint8(xV++),
            rV = 3 & eV.getUint8(xV++),
            kV = 3 & eV.getUint8(xV++),
            bV = 7 & eV.getUint8(xV++),
            EV = 7 & eV.getUint8(xV++),
            BV = eV.getUint16(xV, !1);
          xV += 2;
          const jV = eV.getUint8(xV++),
            qV = jV >> 6 & 3,
            tV = jV >> 3 & 7,
            FV = jV >> 2 & 1,
            TV = 3 & jV,
            PV = eV.getUint8(xV++),
            AV = [];
          for (let YV = 0; YV < PV; YV++) {
            const JV = eV.getUint8(xV++),
              YV = JV >> 7 & 1,
              UV = 63 & JV,
              yV = eV.getUint16(xV, !1);
            xV += 2;
            const pV = [];
            for (let QV = 0; QV < yV; QV++) {
              const JV = eV.getUint16(xV, !1);
              xV += 2, pV.push(VV.subarray(xV, xV + JV)), xV += JV
            }
            AV.push({
              arrayCompleteness: YV,
              nalUnitType: UV,
              nalUnits: pV
            })
          }
          return {
            configurationVersion: JV,
            generalProfileSpace: yV,
            generalTierFlag: pV,
            generalProfileIdc: QV,
            generalProfileCompatibilityFlags: nV,
            generalConstraintIndicatorFlags: wV,
            generalLevelIdc: ZV,
            minSpatialSegmentationIdc: vV,
            parallelismType: rV,
            chromaFormatIdc: kV,
            bitDepthLumaMinus8: bV,
            bitDepthChromaMinus8: EV,
            avgFrameRate: BV,
            constantFrameRate: qV,
            numTemporalLayers: tV,
            temporalIdNested: FV,
            lengthSizeMinusOne: TV,
            arrays: AV
          }
        } catch (eV) {
          return UV.c._error("Error deserializing HEVC Decoder Configuration Record:", eV), null
        }
      };
    var oV;
    ! function(VV) {
      VV[VV.audAllowed = 0] = "audAllowed", VV[VV.beforeFirstVcl = 1] = "beforeFirstVcl", VV[VV.afterFirstVcl = 2] = "afterFirstVcl", VV[VV.eoBitstreamAllowed = 3] = "eoBitstreamAllowed", VV[VV.noMoreDataAllowed = 4] = "noMoreDataAllowed"
    }(oV || (oV = {}));
    const cV = {
        1: {
          colourPrimaries: 5,
          transferCharacteristics: 6,
          matrixCoefficients: 5
        },
        2: {
          colourPrimaries: 1,
          transferCharacteristics: 1,
          matrixCoefficients: 1
        },
        3: {
          colourPrimaries: 6,
          transferCharacteristics: 6,
          matrixCoefficients: 6
        },
        4: {
          colourPrimaries: 7,
          transferCharacteristics: 7,
          matrixCoefficients: 7
        },
        5: {
          colourPrimaries: 9,
          transferCharacteristics: 14,
          matrixCoefficients: 9
        },
        7: {
          colourPrimaries: 1,
          transferCharacteristics: 13,
          matrixCoefficients: 0
        }
      },
      hV = VV => {
        const eV = new wV.b(VV);
        if (2 !== eV.readBits(2)) return null;
        const xV = eV.readBits(1),
          UV = (eV.readBits(1) << 1) + xV;
        3 === UV && eV.skipBits(1);
        if (1 === eV.readBits(1)) return null;
        if (0 !== eV.readBits(1)) return null;
        eV.skipBits(2);
        if (4817730 !== eV.readBits(24)) return null;
        let yV = 8;
        if (UV >= 2) {
          yV = eV.readBits(1) ? 12 : 10
        }
        const pV = eV.readBits(3);
        let QV = 0,
          nV = 0;
        if (7 !== pV) {
          if (nV = eV.readBits(1), 1 === UV || 3 === UV) {
            const VV = eV.readBits(1),
              xV = eV.readBits(1);
            QV = VV || xV ? VV && !xV ? 2 : 1 : 3, eV.skipBits(1)
          } else QV = 1
        } else QV = 3, nV = 1;
        const ZV = (eV.readBits(16) + 1) * (eV.readBits(16) + 1);
        let vV = (0, YV.jc)(JV.l).level;
        for (const YV of JV.l)
          if (ZV <= YV.maxPictureSize) {
            vV = YV.level;
            break
          } const rV = cV[pV];
        return {
          profile: UV,
          level: vV,
          bitDepth: yV,
          chromaSubsampling: QV,
          videoFullRangeFlag: nV,
          colourPrimaries: rV?.colourPrimaries ?? 2,
          transferCharacteristics: rV?.transferCharacteristics ?? 2,
          matrixCoefficients: rV?.matrixCoefficients ?? 2
        }
      },
      lV = function*(VV) {
        const eV = new wV.b(VV),
          xV = () => {
            let VV = 0;
            for (let xV = 0; xV < 8; xV++) {
              const JV = eV.readAlignedByte();
              if (VV += (127 & JV) * 2 ** (7 * xV), !(128 & JV)) break;
              if (7 === xV && 128 & JV) return null
            }
            return VV > 2 ** 32 - 1 ? null : VV
          };
        for (; eV.getBitsLeft() >= 8;) {
          eV.skipBits(1);
          const JV = eV.readBits(4),
            UV = eV.readBits(1),
            yV = eV.readBits(1);
          let pV;
          if (eV.skipBits(1), UV && eV.skipBits(8), yV) {
            const VV = xV();
            if (null === VV) return;
            pV = VV
          } else pV = Math.floor(eV.getBitsLeft() / 8);
          (0, YV.L)(eV.pos % 8 === 0), yield {
            type: JV,
            data: VV.subarray(eV.pos / 8, eV.pos / 8 + pV)
          }, eV.skipBits(8 * pV)
        }
      },
      LV = VV => {
        for (const {
            type: eV,
            data: xV
          }
          of lV(VV)) {
          if (1 !== eV) continue;
          const VV = new wV.b(xV),
            JV = VV.readBits(3),
            YV = (VV.readBits(1), VV.readBits(1));
          let UV = 0,
            yV = 0,
            pV = 0;
          if (YV) UV = VV.readBits(5);
          else {
            let eV = 0;
            if (VV.readBits(1)) {
              VV.skipBits(32), VV.skipBits(32);
              if (VV.readBits(1)) {
                let eV = 0;
                for (; eV < 32 && !VV.readBits(1);) eV++;
                eV < 32 && VV.skipBits(eV)
              }
              eV = VV.readBits(1), eV && (pV = VV.readBits(5), VV.skipBits(32), VV.skipBits(5), VV.skipBits(5))
            }
            const xV = VV.readBits(1),
              JV = VV.readBits(5);
            for (let YV = 0; YV <= JV; YV++) {
              VV.skipBits(12);
              const JV = VV.readBits(5);
              if (0 === YV && (UV = JV), JV > 7) {
                const eV = VV.readBits(1);
                0 === YV && (yV = eV)
              }
              if (eV) {
                if (VV.readBits(1)) {
                  const eV = pV + 1;
                  VV.skipBits(eV), VV.skipBits(eV), VV.skipBits(1)
                }
              }
              if (xV) {
                VV.readBits(1) && VV.skipBits(4)
              }
            }
          }
          const QV = VV.readBits(4),
            nV = VV.readBits(4),
            ZV = QV + 1;
          VV.skipBits(ZV);
          const vV = nV + 1;
          VV.skipBits(vV);
          let rV = 0;
          if (rV = YV ? 0 : VV.readBits(1), rV && (VV.skipBits(4), VV.skipBits(3)), VV.skipBits(1), VV.skipBits(1), VV.skipBits(1), !YV) {
            VV.skipBits(1), VV.skipBits(1), VV.skipBits(1), VV.skipBits(1);
            const eV = VV.readBits(1);
            eV && (VV.skipBits(1), VV.skipBits(1));
            let xV = 0;
            if (xV = VV.readBits(1) ? 2 : VV.readBits(1), xV > 0) {
              VV.readBits(1) || VV.skipBits(1)
            }
            eV && VV.skipBits(3)
          }
          VV.skipBits(1), VV.skipBits(1), VV.skipBits(1);
          const kV = VV.readBits(1);
          let bV = 8;
          if (2 === JV && kV) {
            bV = VV.readBits(1) ? 12 : 10
          } else JV <= 2 && (bV = kV ? 10 : 8);
          let EV = 0;
          1 !== JV && (EV = VV.readBits(1));
          let BV = 2,
            jV = 2,
            qV = 2;
          VV.readBits(1) && (BV = VV.readBits(8), jV = VV.readBits(8), qV = VV.readBits(8));
          let tV = 0,
            FV = 1,
            TV = 1,
            PV = 0;
          return EV ? tV = VV.readBits(1) : 1 === BV && 13 === jV && 0 === qV ? (tV = 1, FV = 0, TV = 0) : (tV = VV.readBits(1), 0 === JV ? (FV = 1, TV = 1) : 1 === JV ? (FV = 0, TV = 0) : 12 === bV ? (FV = VV.readBits(1), TV = FV ? VV.readBits(1) : 0) : (FV = 1, TV = 0), FV && TV && (PV = VV.readBits(2))), {
            profile: JV,
            level: UV,
            tier: yV,
            bitDepth: bV,
            monochrome: EV,
            chromaSubsamplingX: FV,
            chromaSubsamplingY: TV,
            chromaSamplePosition: PV,
            videoFullRangeFlag: tV,
            colourPrimaries: BV,
            transferCharacteristics: jV,
            matrixCoefficients: qV
          }
        }
        return null
      },
      fV = VV => 2 !== VV.colourPrimaries || 2 !== VV.transferCharacteristics || 2 !== VV.matrixCoefficients,
      mV = VV => {
        const eV = (0, YV.rd)(VV),
          xV = eV.getUint8(9),
          JV = eV.getUint16(10, !0),
          UV = eV.getUint32(12, !0),
          yV = eV.getInt16(16, !0),
          pV = eV.getUint8(18);
        let QV = null;
        return pV && (QV = VV.subarray(19, 21 + xV)), {
          outputChannelCount: xV,
          preSkip: JV,
          inputSampleRate: UV,
          outputGain: yV,
          channelMappingFamily: pV,
          channelMappingTable: QV
        }
      },
      KV = [480, 960, 1920, 2880, 480, 960, 1920, 2880, 480, 960, 1920, 2880, 480, 960, 480, 960, 120, 240, 480, 960, 120, 240, 480, 960, 120, 240, 480, 960, 120, 240, 480, 960],
      HV = VV => {
        const eV = VV[0] >> 3,
          xV = 3 & VV[0];
        let JV;
        return JV = 0 === xV ? 1 : 1 === xV || 2 === xV ? 2 : 63 & VV[1], {
          durationInSamples: KV[eV] * JV
        }
      },
      uV = VV => {
        if (VV.length < 7) throw new Error("Setup header is too short.");
        if (5 !== VV[0]) throw new Error("Wrong packet type in Setup header.");
        if ("vorbis" !== String.fromCharCode(...VV.slice(1, 7))) throw new Error("Invalid packet signature in Setup header.");
        const eV = VV.length,
          xV = new Uint8Array(eV);
        for (let wV = 0; wV < eV; wV++) xV[wV] = VV[eV - 1 - wV];
        const JV = new wV.b(xV);
        let YV = 0;
        for (; JV.getBitsLeft() > 97;)
          if (1 === JV.readBits(1)) {
            YV = JV.pos;
            break
          } if (0 === YV) throw new Error("Invalid Setup header: framing bit not found.");
        let UV = 0,
          yV = !1,
          pV = 0;
        for (; JV.getBitsLeft() >= 97;) {
          const VV = JV.pos,
            eV = JV.readBits(8),
            xV = JV.readBits(16),
            YV = JV.readBits(16);
          if (eV > 63 || 0 !== xV || 0 !== YV) {
            JV.pos = VV;
            break
          }
          if (JV.skipBits(1), UV++, UV > 64) break;
          JV.clone().readBits(6) + 1 === UV && (yV = !0, pV = UV)
        }
        if (!yV) throw new Error("Invalid Setup header: mode header not found.");
        if (pV > 63) throw new Error(`Unsupported mode count: ${pV}.`);
        const QV = pV;
        JV.pos = 0, JV.skipBits(YV);
        const nV = Array(QV).fill(0);
        for (let wV = QV - 1; wV >= 0; wV--) JV.skipBits(40), nV[wV] = JV.readBits(1);
        return {
          modeBlockflags: nV
        }
      },
      sV = (VV, eV, xV) => {
        switch (VV) {
          case "avc":
            for (const VV of ((VV, eV) => {
                if (eV.description) {
                  const xV = 3 & (0, YV.sd)(eV.description)[4];
                  return rV(VV, xV + 1)
                }
                return vV(VV)
              })(xV, eV)) {
              const eV = xV[VV.offset],
                JV = kV(eV);
              if (JV >= QV.NON_IDR_SLICE && JV <= QV.SLICE_DPC) return "delta";
              if (JV === QV.IDR) return "key";
              if (JV === QV.SEI && !(0, YV.Gb)()) {
                const eV = xV.subarray(VV.offset, VV.offset + VV.length),
                  JV = bV(eV);
                let UV = 1;
                do {
                  let VV = 0;
                  for (;;) {
                    const eV = JV[UV++];
                    if (void 0 === eV) break;
                    if (VV += eV, eV < 255) break
                  }
                  let eV = 0;
                  for (;;) {
                    const VV = JV[UV++];
                    if (void 0 === VV) break;
                    if (eV += VV, VV < 255) break
                  }
                  if (VV === 6) {
                    const VV = new wV.b(JV);
                    VV.pos = 8 * UV;
                    const eV = (0, YV.Hc)(VV),
                      xV = VV.readBits(1);
                    if (0 === eV && 1 === xV) return "key"
                  }
                  UV += eV
                } while (UV < JV.length - 1)
              }
            }
            return "delta";
          case "hevc":
            for (const VV of NV(xV, eV)) {
              const eV = XV(xV[VV.offset]);
              if (eV < nV.BLA_W_LP) return "delta";
              if (eV <= nV.RSV_IRAP_VCL23) return "key"
            }
            return "delta";
          case "vp8":
            return 0 === (1 & xV[0]) ? "key" : "delta";
          case "vp9": {
            const VV = new wV.b(xV);
            if (2 !== VV.readBits(2)) return null;
            const eV = VV.readBits(1);
            3 === (VV.readBits(1) << 1) + eV && VV.skipBits(1);
            if (VV.readBits(1)) return null;
            return 0 === VV.readBits(1) ? "key" : "delta"
          }
          case "av1": {
            let VV = !1;
            for (const {
                type: eV,
                data: JV
              }
              of lV(xV))
              if (1 === eV) {
                const eV = new wV.b(JV);
                eV.skipBits(4), VV = !!eV.readBits(1)
              } else if (3 === eV || 6 === eV || 7 === eV) {
              if (VV) return "key";
              const eV = new wV.b(JV);
              if (eV.readBits(1)) return null;
              return 0 === eV.readBits(2) ? "key" : "delta"
            }
            return null
          }
          case "prores":
            return "key";
          default:
            (0, YV.J)(VV), (0, YV.L)(!1)
        }
      };
    var SV;
    ! function(VV) {
      VV[VV.STREAMINFO = 0] = "STREAMINFO", VV[VV.VORBIS_COMMENT = 4] = "VORBIS_COMMENT", VV[VV.PICTURE = 6] = "PICTURE"
    }(SV || (SV = {}));
    const IV = (VV, eV, xV) => {
        const JV = [VV],
          UV = YV.ld.encode(ZV.c);
        let yV = new Uint8Array(4 + UV.length),
          pV = new DataView(yV.buffer);
        pV.setUint32(0, UV.length, !0), yV.set(UV, 4), JV.push(yV);
        const QV = [],
          nV = (VV, eV) => {
            const xV = `${VV}=${eV}`,
              UV = YV.ld.encode(xV);
            yV = new Uint8Array(4 + UV.length), pV = new DataView(yV.buffer), pV.setUint32(0, UV.length, !0), yV.set(UV, 4), JV.push(yV), QV.push(VV)
          };
        for (const {
            key: ZV,
            value: bV
          }
          of(0, YV.ic)(eV)) switch (ZV) {
          case "title":
            nV("TITLE", bV);
            break;
          case "description":
            nV("DESCRIPTION", bV);
            break;
          case "artist":
            nV("ARTIST", bV);
            break;
          case "album":
            nV("ALBUM", bV);
            break;
          case "albumArtist":
            nV("ALBUMARTIST", bV);
            break;
          case "genre":
            nV("GENRE", bV);
            break;
          case "date":
            nV("DATE", bV.toISOString().slice(0, 10));
            break;
          case "comment":
            nV("COMMENT", bV);
            break;
          case "lyrics":
            nV("LYRICS", bV);
            break;
          case "trackNumber":
            nV("TRACKNUMBER", bV.toString());
            break;
          case "tracksTotal":
            nV("TRACKTOTAL", bV.toString());
            break;
          case "discNumber":
            nV("DISCNUMBER", bV.toString());
            break;
          case "discsTotal":
            nV("DISCTOTAL", bV.toString());
            break;
          case "beatsPerMinute":
            nV("BPM", bV.toString());
            break;
          case "images":
            if (!xV) break;
            for (const VV of bV) {
              const eV = "coverFront" === VV.kind ? 3 : "coverBack" === VV.kind ? 4 : 0,
                xV = new Uint8Array(VV.mimeType.length);
              for (let YV = 0; YV < VV.mimeType.length; YV++) xV[YV] = VV.mimeType.charCodeAt(YV);
              const JV = YV.ld.encode(VV.description ?? ""),
                UV = new Uint8Array(8 + xV.length + 4 + JV.length + 16 + 4 + VV.data.length),
                yV = (0, YV.rd)(UV);
              yV.setUint32(0, eV, !1), yV.setUint32(4, xV.length, !1), UV.set(xV, 8), yV.setUint32(8 + xV.length, JV.length, !1), UV.set(JV, 12 + xV.length), yV.setUint32(28 + xV.length + JV.length, VV.data.length, !1), UV.set(VV.data, 32 + xV.length + JV.length);
              nV("METADATA_BLOCK_PICTURE", (0, YV.T)(UV))
            }
            break;
          case "raw":
            break;
          default:
            (0, YV.J)(ZV)
        }
        if (eV.raw)
          for (const YV in eV.raw) {
            const VV = eV.raw[YV] ?? eV.raw[YV.toLowerCase()];
            if ("vendor" !== YV && null != VV && !QV.includes(YV))
              if ("string" === typeof VV) nV(YV, VV);
              else if (Array.isArray(VV)) {
              if (VV.every((VV => "string" === typeof VV)))
                for (const eV of VV) nV(YV, eV)
            }
          }
        const wV = new Uint8Array(4);
        (0, YV.rd)(wV).setUint32(0, QV.length, !0), JV.splice(2, 0, wV);
        const vV = JV.reduce(((VV, eV) => VV + eV.length), 0),
          rV = new Uint8Array(vV);
        let kV = 0;
        for (const YV of JV) rV.set(YV, kV), kV += YV.length;
        return rV
      },
      dV = VV => {
        if (VV.length < 7) return null;
        if (11 !== VV[0] || 119 !== VV[1]) return null;
        const eV = new wV.b(VV);
        eV.skipBits(16), eV.skipBits(16);
        const xV = eV.readBits(2);
        if (3 === xV) return null;
        const JV = eV.readBits(6),
          YV = eV.readBits(5);
        if (YV > 8) return null;
        const UV = eV.readBits(3),
          yV = eV.readBits(3);
        0 !== (1 & yV) && 1 !== yV && eV.skipBits(2), 0 !== (4 & yV) && eV.skipBits(2), 2 === yV && eV.skipBits(2);
        return {
          fscod: xV,
          bsid: YV,
          bsmod: UV,
          acmod: yV,
          lfeon: eV.readBits(1),
          bitRateCode: Math.floor(JV / 2)
        }
      },
      OV = new Uint8Array([5, 4, 65, 67, 45, 51]),
      Ve = new Uint8Array([5, 4, 69, 65, 67, 51]),
      ee = [1, 2, 3, 6],
      xe = VV => {
        if (VV.length < 6) return null;
        if (11 !== VV[0] || 119 !== VV[1]) return null;
        const eV = new wV.b(VV);
        eV.skipBits(16);
        const xV = eV.readBits(2);
        if (eV.skipBits(3), 0 !== xV && 2 !== xV) return null;
        const JV = eV.readBits(11),
          YV = eV.readBits(2);
        let UV, QV = 0;
        3 === YV ? (QV = eV.readBits(2), UV = 3) : UV = eV.readBits(2);
        const nV = eV.readBits(3),
          ZV = eV.readBits(1),
          vV = eV.readBits(5);
        if (vV < 11 || vV > 16) return null;
        const rV = ee[UV];
        let kV;
        kV = YV < 3 ? yV[YV] / 1e3 : pV[QV] / 1e3;
        return {
          dataRate: Math.round((JV + 1) * kV / (16 * rV)),
          substreams: [{
            fscod: YV,
            fscod2: QV,
            bsid: vV,
            bsmod: 0,
            acmod: nV,
            lfeon: ZV,
            numDepSub: 0,
            chanLoc: 0
          }]
        }
      },
      Je = [0, 8e3, 16e3, 32e3, 0, 0, 11025, 22050, 44100, 0, 0, 12e3, 24e3, 48e3, 96e3, 192e3],
      Ye = [32e3, 56e3, 64e3, 96e3, 112e3, 128e3, 192e3, 224e3, 256e3, 32e4, 384e3, 448e3, 512e3, 576e3, 64e4, 768e3, 96e4, 1024e3, 1152e3, 128e4, 1344e3, 1408e3, 1411200, 1472e3, 1536e3, 192e4, 2048e3, 3072e3, 384e4, 0, 0, 0],
      Ue = [16, 16, 20, 20, 0, 24, 24, 0],
      ye = [1, 2, 2, 2, 2, 3, 3, 4, 4, 5, 6, 6, 6, 7, 8, 8],
      pe = [1, 2, 2, 2, 2, 3, 18, 19, 6, 7, 518, 323, 83, 519, 582, 535],
      Qe = [32e3, 44100, 48e3, 0],
      ne = [8e3, 16e3, 32e3, 64e3, 128e3, 22050, 44100, 88200, 176400, 352800, 12e3, 24e3, 48e3, 96e3, 192e3, 384e3],
      we = [512, 1024, 2048, 4096],
      Ze = VV => {
        const eV = ve(VV),
          xV = (0, YV.rd)(VV);
        let JV = eV ? 4 * Math.ceil(eV.frameSize / 4) : 0,
          UV = null;
        for (; JV + 4 <= VV.length && 1683496997 === xV.getUint32(JV);) {
          const eV = re(VV.subarray(JV));
          if (!eV) break;
          UV ??= eV, JV += eV.frameSize
        }
        if (eV) return {
          frameSize: UV ? JV : eV.frameSize,
          sampleRate: eV.sampleRate,
          numberOfChannels: eV.numberOfChannels,
          sampleCount: eV.sampleCount,
          channelLayout: eV.channelLayout,
          pcmResolution: eV.pcmResolution,
          bitRate: eV.bitRate,
          core: eV,
          hasExtensions: null !== UV
        };
        if (!UV?.asset) return null;
        const {
          asset: yV
        } = UV;
        return {
          frameSize: JV,
          sampleRate: yV.sampleRate,
          numberOfChannels: yV.numberOfChannels,
          sampleCount: yV.sampleCount,
          channelLayout: yV.channelLayout,
          pcmResolution: yV.pcmResolution,
          bitRate: 0,
          core: null,
          hasExtensions: !0
        }
      },
      ve = VV => {
        if (VV.length < 18) return null;
        if (127 !== VV[0] || 254 !== VV[1] || 128 !== VV[2] || 1 !== VV[3]) return null;
        const eV = new wV.b(VV);
        if (eV.skipBits(32), eV.skipBits(1), 31 !== eV.readBits(5)) return null;
        const xV = eV.readBits(1),
          JV = eV.readBits(7) + 1;
        if (JV % 8 !== 0) return null;
        const YV = eV.readBits(14) + 1;
        if (YV < 96) return null;
        const UV = eV.readBits(6);
        if (UV >= ye.length) return null;
        const yV = Je[eV.readBits(4)];
        if (0 === yV) return null;
        const pV = Ye[eV.readBits(5)];
        if (0 !== eV.readBits(1)) return null;
        eV.skipBits(4), eV.skipBits(5);
        const QV = eV.readBits(2);
        if (3 === QV) return null;
        eV.skipBits(1), xV && eV.skipBits(16), eV.skipBits(7);
        const nV = Ue[eV.readBits(3)];
        if (0 === nV) return null;
        const ZV = 0 !== QV;
        return {
          frameSize: YV,
          sampleRate: yV,
          numberOfChannels: ye[UV] + (ZV ? 1 : 0),
          sampleCount: 32 * JV,
          channelLayout: pe[UV] | (ZV ? 8 : 0),
          amode: UV,
          lfePresent: ZV,
          bitRate: pV,
          pcmResolution: nV
        }
      },
      re = VV => {
        if (VV.length < 10) return null;
        if (100 !== VV[0] || 88 !== VV[1] || 32 !== VV[2] || 37 !== VV[3]) return null;
        const eV = new wV.b(VV);
        eV.skipBits(32), eV.skipBits(8);
        const xV = eV.readBits(2),
          JV = eV.readBits(1),
          UV = 8 + 4 * JV,
          yV = 16 + 4 * JV;
        eV.skipBits(UV);
        const pV = eV.readBits(yV) + 1,
          QV = {
            frameSize: pV,
            asset: null
          };
        if (!eV.readBits(1)) return QV;
        const nV = Qe[eV.readBits(2)],
          ZV = 512 * (eV.readBits(3) + 1);
        eV.readBits(1) && eV.skipBits(36);
        const vV = eV.readBits(3) + 1,
          rV = eV.readBits(3) + 1,
          kV = [];
        for (let YV = 0; YV < vV; YV++) kV.push(eV.readBits(xV + 1));
        for (const wV of kV) eV.skipBits(8 * (0, YV.Fc)(wV));
        if (eV.readBits(1)) {
          eV.skipBits(2);
          const VV = eV.readBits(2) + 1 << 2,
            xV = eV.readBits(2) + 1;
          eV.skipBits(xV * VV)
        }
        for (let YV = 0; YV < rV; YV++) eV.skipBits(yV);
        eV.skipBits(9), eV.skipBits(3), eV.readBits(1) && eV.skipBits(4), eV.readBits(1) && eV.skipBits(24), eV.readBits(1) && eV.skipBits(8 * (eV.readBits(10) + 1));
        const bV = eV.readBits(5) + 1,
          EV = ne[eV.readBits(4)],
          BV = eV.readBits(8) + 1;
        let jV = 0;
        if (eV.readBits(1) && (BV > 2 && eV.skipBits(1), BV > 6 && eV.skipBits(1), eV.readBits(1))) {
          const VV = eV.readBits(2) + 1 << 2;
          jV = eV.readBits(VV)
        }
        return 0 === nV || eV.getBitsLeft() < 0 ? QV : {
          frameSize: pV,
          asset: {
            sampleRate: EV,
            numberOfChannels: BV,
            sampleCount: Math.round(ZV * EV / nV),
            channelLayout: jV,
            pcmResolution: bV
          }
        }
      },
      ke = VV => {
        const eV = new Uint8Array(20),
          xV = (0, YV.rd)(eV);
        xV.setUint32(0, VV.sampleRate), xV.setUint32(4, VV.bitRate), xV.setUint32(8, VV.bitRate), eV[12] = VV.pcmResolution;
        const JV = VV.core && !VV.hasExtensions ? 1 : 0,
          UV = new wV.b(eV);
        return UV.seekToByte(13), UV.writeBits(2, Math.max(we.indexOf(VV.sampleCount), 0)), UV.writeBits(5, JV), UV.writeBits(1, VV.core?.lfePresent ? 1 : 0), UV.writeBits(6, VV.core?.amode ?? 0), UV.writeBits(14, VV.core ? VV.core.frameSize - 1 : 0), UV.writeBits(1, 0), UV.writeBits(3, 0), UV.writeBits(16, VV.channelLayout), UV.writeBits(1, 0), UV.writeBits(1, 0), UV.writeBits(1, 0), UV.writeBits(5, 0), eV
      }
  },
  34965: (VV, eV, xV) => {
    xV.d(eV, {
      B: () => tV,
      D: () => GV,
      F: () => zV,
      H: () => MV,
      J: () => XV,
      L: () => oV,
      O: () => cV,
      P: () => CV,
      b: () => QV,
      c: () => wV,
      e: () => pV,
      f: () => AV,
      i: () => yV,
      j: () => nV,
      k: () => UV,
      l: () => vV,
      o: () => PV,
      s: () => qV,
      w: () => TV,
      z: () => FV
    });
    var JV = xV(34968),
      YV = xV(34933);
    const UV = ["avc", "hevc", "vp9", "av1", "vp8", "prores"],
      yV = ["pcm-s16", "pcm-s16be", "pcm-s24", "pcm-s24be", "pcm-s32", "pcm-s32be", "pcm-f32", "pcm-f32be", "pcm-f64", "pcm-f64be", "pcm-u8", "pcm-s8", "ulaw", "alaw"],
      pV = ["aac", "opus", "mp3", "vorbis", "flac", "ac3", "eac3", "dts"],
      QV = [...pV, ...yV],
      nV = ["webvtt"],
      wV = [{
        maxMacroblocks: 99,
        maxBitrate: 64e3,
        maxDpbMbs: 396,
        level: 10
      }, {
        maxMacroblocks: 396,
        maxBitrate: 192e3,
        maxDpbMbs: 900,
        level: 11
      }, {
        maxMacroblocks: 396,
        maxBitrate: 384e3,
        maxDpbMbs: 2376,
        level: 12
      }, {
        maxMacroblocks: 396,
        maxBitrate: 768e3,
        maxDpbMbs: 2376,
        level: 13
      }, {
        maxMacroblocks: 396,
        maxBitrate: 2e6,
        maxDpbMbs: 2376,
        level: 20
      }, {
        maxMacroblocks: 792,
        maxBitrate: 4e6,
        maxDpbMbs: 4752,
        level: 21
      }, {
        maxMacroblocks: 1620,
        maxBitrate: 4e6,
        maxDpbMbs: 8100,
        level: 22
      }, {
        maxMacroblocks: 1620,
        maxBitrate: 1e7,
        maxDpbMbs: 8100,
        level: 30
      }, {
        maxMacroblocks: 3600,
        maxBitrate: 14e6,
        maxDpbMbs: 18e3,
        level: 31
      }, {
        maxMacroblocks: 5120,
        maxBitrate: 2e7,
        maxDpbMbs: 20480,
        level: 32
      }, {
        maxMacroblocks: 8192,
        maxBitrate: 2e7,
        maxDpbMbs: 32768,
        level: 40
      }, {
        maxMacroblocks: 8192,
        maxBitrate: 5e7,
        maxDpbMbs: 32768,
        level: 41
      }, {
        maxMacroblocks: 8704,
        maxBitrate: 5e7,
        maxDpbMbs: 34816,
        level: 42
      }, {
        maxMacroblocks: 22080,
        maxBitrate: 135e6,
        maxDpbMbs: 110400,
        level: 50
      }, {
        maxMacroblocks: 36864,
        maxBitrate: 24e7,
        maxDpbMbs: 184320,
        level: 51
      }, {
        maxMacroblocks: 36864,
        maxBitrate: 24e7,
        maxDpbMbs: 184320,
        level: 52
      }, {
        maxMacroblocks: 139264,
        maxBitrate: 24e7,
        maxDpbMbs: 696320,
        level: 60
      }, {
        maxMacroblocks: 139264,
        maxBitrate: 48e7,
        maxDpbMbs: 696320,
        level: 61
      }, {
        maxMacroblocks: 139264,
        maxBitrate: 8e8,
        maxDpbMbs: 696320,
        level: 62
      }],
      ZV = [{
        maxPictureSize: 36864,
        maxBitrate: 128e3,
        tier: "L",
        level: 30
      }, {
        maxPictureSize: 122880,
        maxBitrate: 15e5,
        tier: "L",
        level: 60
      }, {
        maxPictureSize: 245760,
        maxBitrate: 3e6,
        tier: "L",
        level: 63
      }, {
        maxPictureSize: 552960,
        maxBitrate: 6e6,
        tier: "L",
        level: 90
      }, {
        maxPictureSize: 983040,
        maxBitrate: 1e7,
        tier: "L",
        level: 93
      }, {
        maxPictureSize: 2228224,
        maxBitrate: 12e6,
        tier: "L",
        level: 120
      }, {
        maxPictureSize: 2228224,
        maxBitrate: 3e7,
        tier: "H",
        level: 120
      }, {
        maxPictureSize: 2228224,
        maxBitrate: 2e7,
        tier: "L",
        level: 123
      }, {
        maxPictureSize: 2228224,
        maxBitrate: 5e7,
        tier: "H",
        level: 123
      }, {
        maxPictureSize: 8912896,
        maxBitrate: 25e6,
        tier: "L",
        level: 150
      }, {
        maxPictureSize: 8912896,
        maxBitrate: 1e8,
        tier: "H",
        level: 150
      }, {
        maxPictureSize: 8912896,
        maxBitrate: 4e7,
        tier: "L",
        level: 153
      }, {
        maxPictureSize: 8912896,
        maxBitrate: 16e7,
        tier: "H",
        level: 153
      }, {
        maxPictureSize: 8912896,
        maxBitrate: 6e7,
        tier: "L",
        level: 156
      }, {
        maxPictureSize: 8912896,
        maxBitrate: 24e7,
        tier: "H",
        level: 156
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 6e7,
        tier: "L",
        level: 180
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 24e7,
        tier: "H",
        level: 180
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 12e7,
        tier: "L",
        level: 183
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 48e7,
        tier: "H",
        level: 183
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 24e7,
        tier: "L",
        level: 186
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 8e8,
        tier: "H",
        level: 186
      }],
      vV = [{
        maxPictureSize: 36864,
        maxBitrate: 2e5,
        level: 10
      }, {
        maxPictureSize: 73728,
        maxBitrate: 8e5,
        level: 11
      }, {
        maxPictureSize: 122880,
        maxBitrate: 18e5,
        level: 20
      }, {
        maxPictureSize: 245760,
        maxBitrate: 36e5,
        level: 21
      }, {
        maxPictureSize: 552960,
        maxBitrate: 72e5,
        level: 30
      }, {
        maxPictureSize: 983040,
        maxBitrate: 12e6,
        level: 31
      }, {
        maxPictureSize: 2228224,
        maxBitrate: 18e6,
        level: 40
      }, {
        maxPictureSize: 2228224,
        maxBitrate: 3e7,
        level: 41
      }, {
        maxPictureSize: 8912896,
        maxBitrate: 6e7,
        level: 50
      }, {
        maxPictureSize: 8912896,
        maxBitrate: 12e7,
        level: 51
      }, {
        maxPictureSize: 8912896,
        maxBitrate: 18e7,
        level: 52
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 18e7,
        level: 60
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 24e7,
        level: 61
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 48e7,
        level: 62
      }],
      rV = [{
        maxPictureSize: 147456,
        maxBitrate: 15e5,
        tier: "M",
        level: 0
      }, {
        maxPictureSize: 278784,
        maxBitrate: 3e6,
        tier: "M",
        level: 1
      }, {
        maxPictureSize: 665856,
        maxBitrate: 6e6,
        tier: "M",
        level: 4
      }, {
        maxPictureSize: 1065024,
        maxBitrate: 1e7,
        tier: "M",
        level: 5
      }, {
        maxPictureSize: 2359296,
        maxBitrate: 12e6,
        tier: "M",
        level: 8
      }, {
        maxPictureSize: 2359296,
        maxBitrate: 3e7,
        tier: "H",
        level: 8
      }, {
        maxPictureSize: 2359296,
        maxBitrate: 2e7,
        tier: "M",
        level: 9
      }, {
        maxPictureSize: 2359296,
        maxBitrate: 5e7,
        tier: "H",
        level: 9
      }, {
        maxPictureSize: 8912896,
        maxBitrate: 3e7,
        tier: "M",
        level: 12
      }, {
        maxPictureSize: 8912896,
        maxBitrate: 1e8,
        tier: "H",
        level: 12
      }, {
        maxPictureSize: 8912896,
        maxBitrate: 4e7,
        tier: "M",
        level: 13
      }, {
        maxPictureSize: 8912896,
        maxBitrate: 16e7,
        tier: "H",
        level: 13
      }, {
        maxPictureSize: 8912896,
        maxBitrate: 6e7,
        tier: "M",
        level: 14
      }, {
        maxPictureSize: 8912896,
        maxBitrate: 24e7,
        tier: "H",
        level: 14
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 6e7,
        tier: "M",
        level: 15
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 24e7,
        tier: "H",
        level: 15
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 6e7,
        tier: "M",
        level: 16
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 24e7,
        tier: "H",
        level: 16
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 1e8,
        tier: "M",
        level: 17
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 48e7,
        tier: "H",
        level: 17
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 16e7,
        tier: "M",
        level: 18
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 8e8,
        tier: "H",
        level: 18
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 16e7,
        tier: "M",
        level: 19
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 8e8,
        tier: "H",
        level: 19
      }],
      kV = ".01.01.01.01.00",
      bV = ".0.110.01.01.01.0",
      EV = ["ap4x", "ap4h", "apch", "apcn", "apcs", "apco"],
      BV = ["dtsc", "dtsh", "dtsl", "dtse"],
      jV = [{
        fourCc: "apco",
        bitrate: 45e6,
        alpha: !1
      }, {
        fourCc: "apcs",
        bitrate: 102e6,
        alpha: !1
      }, {
        fourCc: "apcn",
        bitrate: 147e6,
        alpha: !1
      }, {
        fourCc: "apch",
        bitrate: 22e7,
        alpha: !1
      }, {
        fourCc: "ap4h",
        bitrate: 33e7,
        alpha: !0
      }, {
        fourCc: "ap4x",
        bitrate: 5e8,
        alpha: !0
      }],
      qV = (VV, eV, xV, JV, UV) => {
        if ("avc" === VV) {
          const VV = 100,
            UV = Math.ceil(eV / 16) * Math.ceil(xV / 16),
            yV = wV.find((VV => UV <= VV.maxMacroblocks && JV <= VV.maxBitrate)) ?? (0, YV.jc)(wV),
            pV = yV ? yV.level : 0;
          return `avc1.${VV.toString(16).padStart(2,"0")}${"00"}${pV.toString(16).padStart(2,"0")}`
        }
        if ("hevc" === VV) {
          const VV = "",
            UV = 1,
            yV = "6",
            pV = eV * xV,
            QV = ZV.find((VV => pV <= VV.maxPictureSize && JV <= VV.maxBitrate)) ?? (0, YV.jc)(ZV),
            nV = "B0";
          return `hev1.${VV}${UV}.${yV}.${QV.tier}${QV.level}.${nV}`
        }
        if ("vp8" === VV) return "vp8";
        if ("vp9" === VV) {
          const VV = eV * xV,
            UV = "08";
          return `vp09.${"00"}.${(vV.find((eV=>VV<=eV.maxPictureSize&&JV<=eV.maxBitrate))??(0,YV.jc)(vV)).level.toString().padStart(2,"0")}.${UV}`
        }
        if ("av1" === VV) {
          const VV = 0,
            UV = eV * xV,
            yV = rV.find((VV => UV <= VV.maxPictureSize && JV <= VV.maxBitrate)) ?? (0, YV.jc)(rV),
            pV = "08";
          return `av01.${VV}.${yV.level.toString().padStart(2,"0")}${yV.tier}.${pV}`
        }
        if ("prores" === VV) {
          const VV = 2073600,
            YV = Math.pow(eV * xV / VV, .95),
            yV = jV.filter((VV => VV.alpha === UV));
          let pV = yV[0].fourCc,
            QV = 1 / 0;
          for (const {
              fourCc: eV,
              bitrate: xV
            }
            of yV) {
            const VV = Math.abs(xV * YV - JV);
            VV < QV && (QV = VV, pV = eV)
          }
          return pV
        }
        throw (0, YV.J)(VV), new TypeError(`Unhandled codec '${String(VV)}'.`)
      },
      tV = VV => {
        const eV = VV.split(".");
        return [1, 1, Number(eV[1]), 2, 1, Number(eV[2]), 3, 1, Number(eV[3]), 4, 1, eV[4] ? Number(eV[4]) : 1]
      },
      FV = VV => {
        const eV = VV.split("."),
          xV = Number(eV[1]),
          JV = eV[2],
          YV = (xV << 5) + Number(JV.slice(0, -1)),
          UV = "H" === JV.slice(-1) ? 1 : 0,
          yV = Number(eV[3]);
        return [129, YV, (UV << 7) + ((8 === yV ? 0 : 1) << 6) + ((12 === yV ? 1 : 0) << 5) + ((eV[4] ? Number(eV[4]) : 0) << 4) + ((eV[5] ? Number(eV[5][0]) : 1) << 3) + ((eV[5] ? Number(eV[5][1]) : 1) << 2) + (eV[5] ? Number(eV[5][2]) : 0), 0]
      },
      TV = VV => {
        const {
          codec: eV,
          codecDescription: xV,
          colorSpace: UV,
          avcCodecInfo: yV,
          hevcCodecInfo: pV,
          vp9CodecInfo: QV,
          av1CodecInfo: nV,
          proresFormat: wV
        } = VV;
        if ("avc" === eV) {
          if ((0, YV.L)(null !== VV.avcType), yV) {
            const eV = new Uint8Array([yV.avcProfileIndication, yV.profileCompatibility, yV.avcLevelIndication]);
            return `avc${VV.avcType}.${(0,YV.W)(eV)}`
          }
          if (!xV || xV.byteLength < 4) throw new TypeError("AVC decoder description is not provided or is not at least 4 bytes long.");
          return `avc${VV.avcType}.${(0,YV.W)(xV.subarray(1,4))}`
        }
        if ("hevc" === eV) {
          let VV, eV, JV, UV, yV, QV;
          if (pV) VV = pV.generalProfileSpace, eV = pV.generalProfileIdc, JV = (0, YV.Nc)(pV.generalProfileCompatibilityFlags), UV = pV.generalTierFlag, yV = pV.generalLevelIdc, QV = [...pV.generalConstraintIndicatorFlags];
          else {
            if (!xV || xV.byteLength < 23) throw new TypeError("HEVC decoder description is not provided or is not at least 23 bytes long.");
            const pV = (0, YV.rd)(xV),
              nV = pV.getUint8(1);
            VV = nV >> 6 & 3, eV = 31 & nV, JV = (0, YV.Nc)(pV.getUint32(2)), UV = nV >> 5 & 1, yV = pV.getUint8(12), QV = [];
            for (let VV = 0; VV < 6; VV++) QV.push(pV.getUint8(6 + VV))
          }
          let nV = "hev1.";
          for (nV += ["", "A", "B", "C"][VV] + eV, nV += ".", nV += JV.toString(16).toUpperCase(), nV += ".", nV += 0 === UV ? "L" : "H", nV += yV; QV.length > 0 && 0 === QV[QV.length - 1];) QV.pop();
          return QV.length > 0 && (nV += ".", nV += QV.map((VV => VV.toString(16).toUpperCase())).join(".")), nV
        }
        if ("vp8" === eV) return "vp8";
        if ("vp9" === eV) {
          if (!QV) {
            const eV = VV.width * VV.height;
            let xV = (0, YV.jc)(vV).level;
            for (const VV of vV)
              if (eV <= VV.maxPictureSize) {
                xV = VV.level;
                break
              } return `vp09.00.${xV.toString().padStart(2,"0")}.08`
          }
          let eV = `vp09.${QV.profile.toString().padStart(2,"0")}.${QV.level.toString().padStart(2,"0")}.${QV.bitDepth.toString().padStart(2,"0")}.${QV.chromaSubsampling.toString().padStart(2,"0")}`;
          return eV += `.${QV.colourPrimaries.toString().padStart(2,"0")}.${QV.transferCharacteristics.toString().padStart(2,"0")}.${QV.matrixCoefficients.toString().padStart(2,"0")}.${QV.videoFullRangeFlag.toString().padStart(2,"0")}`, eV.endsWith(kV) && (eV = eV.slice(0, -15)), eV
        }
        if ("av1" === eV) {
          if (!nV) {
            const eV = VV.width * VV.height;
            let xV = (0, YV.jc)(vV).level;
            for (const VV of vV)
              if (eV <= VV.maxPictureSize) {
                xV = VV.level;
                break
              } return `av01.0.${xV.toString().padStart(2,"0")}M.08`
          }
          const eV = nV.profile,
            xV = nV.level.toString().padStart(2, "0"),
            yV = nV.tier ? "H" : "M",
            pV = nV.bitDepth.toString().padStart(2, "0"),
            QV = nV.monochrome ? "1" : "0",
            wV = 100 * nV.chromaSubsamplingX + 10 * nV.chromaSubsamplingY + 1 * (nV.chromaSubsamplingX && nV.chromaSubsamplingY ? nV.chromaSamplePosition : 0);
          let ZV, rV, kV, EV;
          (0, JV.r)(nV) ? (ZV = nV.colourPrimaries, rV = nV.transferCharacteristics, kV = nV.matrixCoefficients, EV = nV.videoFullRangeFlag) : (ZV = UV?.primaries ? YV.c[UV.primaries] : 1, rV = UV?.transfer ? YV.r[UV.transfer] : 1, kV = UV?.matrix ? YV.k[UV.matrix] : 1, EV = UV?.fullRange ? 1 : 0);
          let BV = `av01.${eV}.${xV}${yV}.${pV}`;
          return BV += `.${QV}.${wV.toString().padStart(3,"0")}`, BV += `.${ZV.toString().padStart(2,"0")}`, BV += `.${rV.toString().padStart(2,"0")}`, BV += `.${kV.toString().padStart(2,"0")}`, BV += `.${EV}`, BV.endsWith(bV) && (BV = BV.slice(0, -17)), BV
        }
        if ("prores" === eV) return wV ?? "apch";
        throw null !== eV && (0, YV.J)(eV), new TypeError(`Unhandled codec '${eV}'.`)
      },
      PV = (VV, eV, xV) => {
        if ("aac" === VV) return eV >= 2 && xV <= 24e3 ? "mp4a.40.29" : xV <= 24e3 ? "mp4a.40.5" : "mp4a.40.2";
        if ("mp3" === VV) return "mp3";
        if ("opus" === VV) return "opus";
        if ("vorbis" === VV) return "vorbis";
        if ("flac" === VV) return "flac";
        if ("ac3" === VV) return "ac-3";
        if ("eac3" === VV) return "ec-3";
        if ("dts" === VV) return "dtsc";
        if (yV.includes(VV)) return VV;
        throw new TypeError(`Unhandled codec '${VV}'.`)
      },
      AV = 48e3,
      NV = /^pcm-([usf])(\d+)(be)?$/,
      XV = VV => {
        if ((0, YV.L)(yV.includes(VV)), "ulaw" === VV) return {
          dataType: "ulaw",
          sampleSize: 1,
          littleEndian: !0,
          silentValue: 255
        };
        if ("alaw" === VV) return {
          dataType: "alaw",
          sampleSize: 1,
          littleEndian: !0,
          silentValue: 213
        };
        const eV = NV.exec(VV);
        let xV;
        (0, YV.L)(eV), xV = "u" === eV[1] ? "unsigned" : "s" === eV[1] ? "signed" : "float";
        return {
          dataType: xV,
          sampleSize: Number(eV[2]) / 8,
          littleEndian: "be" !== eV[3],
          silentValue: "pcm-u8" === VV ? 128 : 0
        }
      },
      MV = VV => VV.startsWith("avc1") || VV.startsWith("avc3") ? "avc" : VV.startsWith("hev1") || VV.startsWith("hvc1") ? "hevc" : "vp8" === VV ? "vp8" : VV.startsWith("vp09") ? "vp9" : VV.startsWith("av01") ? "av1" : EV.includes(VV) ? "prores" : "mp3" === VV || "mp4a.69" === VV || "mp4a.6B" === VV || "mp4a.6b" === VV || "mp4a.40.34" === VV ? "mp3" : VV.startsWith("mp4a.40.") || "mp4a.67" === VV ? "aac" : "opus" === VV || "Opus" === VV ? "opus" : "vorbis" === VV ? "vorbis" : "flac" === VV ? "flac" : "ac-3" === VV || "ac3" === VV ? "ac3" : "ec-3" === VV || "eac3" === VV ? "eac3" : BV.includes(VV) ? "dts" : "ulaw" === VV ? "ulaw" : "alaw" === VV ? "alaw" : NV.test(VV) ? VV : "webvtt" === VV ? "webvtt" : null,
      zV = VV => "avc" === VV ? {
        avc: {
          format: "avc"
        }
      } : "hevc" === VV ? {
        hevc: {
          format: "hevc"
        }
      } : {},
      GV = VV => "aac" === VV ? {
        aac: {
          format: "aac"
        }
      } : "opus" === VV ? {
        opus: {
          format: "opus"
        }
      } : {},
      WV = ["avc1", "avc3", "hev1", "hvc1", "vp8", "vp09", "av01", ...EV],
      RV = /^(avc1|avc3)\.[0-9a-fA-F]{6}$/,
      gV = /^(hev1|hvc1)\.(?:[ABC]?\d+)\.[0-9a-fA-F]{1,8}\.[LH]\d+(?:\.[0-9a-fA-F]{1,2}){0,6}$/,
      DV = /^vp09(?:\.\d{2}){3}(?:(?:\.\d{2}){5})?$/,
      iV = /^av01\.\d\.\d{2}[MH]\.\d{2}(?:\.\d\.\d{3}\.\d{2}\.\d{2}\.\d{2}\.\d)?$/,
      CV = (VV, eV) => {
        if (!VV) throw new TypeError("Video chunk metadata must be provided.");
        if ("object" !== typeof VV) throw new TypeError("Video chunk metadata must be an object.");
        if (!VV.decoderConfig) throw new TypeError("Video chunk metadata must include a decoder configuration.");
        if ("object" !== typeof VV.decoderConfig) throw new TypeError("Video chunk metadata decoder configuration must be an object.");
        if ("string" !== typeof VV.decoderConfig.codec) throw new TypeError("Video chunk metadata decoder configuration must specify a codec string.");
        if (!WV.some((eV => VV.decoderConfig.codec.startsWith(eV)))) throw new TypeError("Video chunk metadata decoder configuration codec string must be a valid video codec string as specified in the Mediabunny Codec Registry.");
        if (!Number.isInteger(VV.decoderConfig.codedWidth) || VV.decoderConfig.codedWidth <= 0) throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedWidth (positive integer).");
        if (!Number.isInteger(VV.decoderConfig.codedHeight) || VV.decoderConfig.codedHeight <= 0) throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedHeight (positive integer).");
        if (void 0 !== VV.decoderConfig.displayAspectWidth && (!Number.isInteger(VV.decoderConfig.displayAspectWidth) || VV.decoderConfig.displayAspectWidth <= 0)) throw new TypeError("Video chunk metadata decoder configuration displayAspectWidth, when defined, must be a positive integer.");
        if (void 0 !== VV.decoderConfig.displayAspectHeight && (!Number.isInteger(VV.decoderConfig.displayAspectHeight) || VV.decoderConfig.displayAspectHeight <= 0)) throw new TypeError("Video chunk metadata decoder configuration displayAspectHeight, when defined, must be a positive integer.");
        if (void 0 !== VV.decoderConfig.displayAspectWidth !== (void 0 !== VV.decoderConfig.displayAspectHeight)) throw new TypeError("Video chunk metadata decoder configuration must specify both displayAspectWidth and displayAspectHeight, or neither.");
        if (void 0 !== VV.decoderConfig.description && !(0, YV.Eb)(VV.decoderConfig.description)) throw new TypeError("Video chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");
        if (void 0 !== VV.decoderConfig.colorSpace) {
          const {
            colorSpace: eV
          } = VV.decoderConfig;
          if ("object" !== typeof eV) throw new TypeError("Video chunk metadata decoder configuration colorSpace, when provided, must be an object.");
          const xV = Object.keys(YV.c);
          if (null != eV.primaries && !xV.includes(eV.primaries)) throw new TypeError(`Video chunk metadata decoder configuration colorSpace primaries, when defined, must be one of ${xV.join(", ")}.`);
          const JV = Object.keys(YV.r);
          if (null != eV.transfer && !JV.includes(eV.transfer)) throw new TypeError(`Video chunk metadata decoder configuration colorSpace transfer, when defined, must be one of ${JV.join(", ")}.`);
          const UV = Object.keys(YV.k);
          if (null != eV.matrix && !UV.includes(eV.matrix)) throw new TypeError(`Video chunk metadata decoder configuration colorSpace matrix, when defined, must be one of ${UV.join(", ")}.`);
          if (null != eV.fullRange && "boolean" !== typeof eV.fullRange) throw new TypeError("Video chunk metadata decoder configuration colorSpace fullRange, when defined, must be a boolean.")
        }
        if (VV.decoderConfig.codec.startsWith("avc1") || VV.decoderConfig.codec.startsWith("avc3")) {
          if (!RV.test(VV.decoderConfig.codec)) throw new TypeError("Video chunk metadata decoder configuration codec string for AVC must be a valid AVC codec string as specified in Section 3.4 of RFC 6381.")
        } else if (VV.decoderConfig.codec.startsWith("hev1") || VV.decoderConfig.codec.startsWith("hvc1")) {
          if (!gV.test(VV.decoderConfig.codec)) throw new TypeError("Video chunk metadata decoder configuration codec string for HEVC must be a valid HEVC codec string as specified in Section E.3 of ISO 14496-15.")
        } else if (VV.decoderConfig.codec.startsWith("vp8")) {
          if ("vp8" !== VV.decoderConfig.codec) throw new TypeError('Video chunk metadata decoder configuration codec string for VP8 must be "vp8".')
        } else if (VV.decoderConfig.codec.startsWith("vp09")) {
          if (!DV.test(VV.decoderConfig.codec)) throw new TypeError('Video chunk metadata decoder configuration codec string for VP9 must be a valid VP9 codec string as specified in Section "Codecs Parameter String" of https://www.webmproject.org/vp9/mp4/.')
        } else if (VV.decoderConfig.codec.startsWith("av01")) {
          if (!iV.test(VV.decoderConfig.codec)) throw new TypeError('Video chunk metadata decoder configuration codec string for AV1 must be a valid AV1 codec string as specified in Section "Codecs Parameter String" of https://aomediacodec.github.io/av1-isobmff/.')
        } else if (EV.some((eV => VV.decoderConfig.codec.startsWith(eV))) && !EV.some((eV => VV.decoderConfig.codec === eV))) throw new TypeError(`Video chunk metadata decoder configuration codec string for ProRes must be one of the valid ProRes four-character codes: ${EV.join(", ")}.`);
        if (null !== eV && MV(VV.decoderConfig.codec) !== eV) throw new TypeError(`Video chunk metadata decoder configuration codec string '${VV.decoderConfig.codec}' does not fit to the track codec '${eV}'.`)
      },
      aV = ["mp4a", "mp3", "opus", "vorbis", "flac", "ulaw", "alaw", "pcm", "ac-3", "ec-3", "dts"],
      oV = (VV, eV) => {
        if (!VV) throw new TypeError("Audio chunk metadata must be provided.");
        if ("object" !== typeof VV) throw new TypeError("Audio chunk metadata must be an object.");
        if (!VV.decoderConfig) throw new TypeError("Audio chunk metadata must include a decoder configuration.");
        if ("object" !== typeof VV.decoderConfig) throw new TypeError("Audio chunk metadata decoder configuration must be an object.");
        if ("string" !== typeof VV.decoderConfig.codec) throw new TypeError("Audio chunk metadata decoder configuration must specify a codec string.");
        if (!aV.some((eV => VV.decoderConfig.codec.startsWith(eV)))) throw new TypeError("Audio chunk metadata decoder configuration codec string must be a valid audio codec string as specified in the Mediabunny Codec Registry.");
        if (!Number.isInteger(VV.decoderConfig.sampleRate) || VV.decoderConfig.sampleRate <= 0) throw new TypeError("Audio chunk metadata decoder configuration must specify a valid sampleRate (positive integer).");
        if (!Number.isInteger(VV.decoderConfig.numberOfChannels) || VV.decoderConfig.numberOfChannels <= 0) throw new TypeError("Audio chunk metadata decoder configuration must specify a valid numberOfChannels (positive integer).");
        if (void 0 !== VV.decoderConfig.description && !(0, YV.Eb)(VV.decoderConfig.description)) throw new TypeError("Audio chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");
        if (VV.decoderConfig.codec.startsWith("mp4a") && "mp4a.69" !== VV.decoderConfig.codec && "mp4a.6B" !== VV.decoderConfig.codec && "mp4a.6b" !== VV.decoderConfig.codec) {
          if (!["mp4a.40.2", "mp4a.40.02", "mp4a.40.5", "mp4a.40.05", "mp4a.40.29", "mp4a.67"].includes(VV.decoderConfig.codec)) throw new TypeError("Audio chunk metadata decoder configuration codec string for AAC must be a valid AAC codec string as specified in https://www.w3.org/TR/webcodecs-aac-codec-registration/.")
        } else if (VV.decoderConfig.codec.startsWith("mp3") || VV.decoderConfig.codec.startsWith("mp4a")) {
          if ("mp3" !== VV.decoderConfig.codec && "mp4a.69" !== VV.decoderConfig.codec && "mp4a.6B" !== VV.decoderConfig.codec && "mp4a.6b" !== VV.decoderConfig.codec) throw new TypeError('Audio chunk metadata decoder configuration codec string for MP3 must be "mp3", "mp4a.69" or "mp4a.6B".')
        } else if (VV.decoderConfig.codec.startsWith("opus")) {
          if ("opus" !== VV.decoderConfig.codec) throw new TypeError('Audio chunk metadata decoder configuration codec string for Opus must be "opus".');
          if (VV.decoderConfig.description && VV.decoderConfig.description.byteLength < 18) throw new TypeError("Audio chunk metadata decoder configuration description, when specified, is expected to be an Identification Header as specified in Section 5.1 of RFC 7845.")
        } else if (VV.decoderConfig.codec.startsWith("vorbis")) {
          if ("vorbis" !== VV.decoderConfig.codec) throw new TypeError('Audio chunk metadata decoder configuration codec string for Vorbis must be "vorbis".');
          if (!VV.decoderConfig.description) throw new TypeError("Audio chunk metadata decoder configuration for Vorbis must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-vorbis-codec-registration/.")
        } else if (VV.decoderConfig.codec.startsWith("flac")) {
          if ("flac" !== VV.decoderConfig.codec) throw new TypeError('Audio chunk metadata decoder configuration codec string for FLAC must be "flac".');
          const eV = 42;
          if (!VV.decoderConfig.description || VV.decoderConfig.description.byteLength < eV) throw new TypeError("Audio chunk metadata decoder configuration for FLAC must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-flac-codec-registration/.")
        } else if (VV.decoderConfig.codec.startsWith("ac-3") || VV.decoderConfig.codec.startsWith("ac3")) {
          if ("ac-3" !== VV.decoderConfig.codec) throw new TypeError('Audio chunk metadata decoder configuration codec string for AC-3 must be "ac-3".')
        } else if (VV.decoderConfig.codec.startsWith("ec-3") || VV.decoderConfig.codec.startsWith("eac3")) {
          if ("ec-3" !== VV.decoderConfig.codec) throw new TypeError('Audio chunk metadata decoder configuration codec string for EC-3 must be "ec-3".')
        } else if (VV.decoderConfig.codec.startsWith("dts")) {
          if (!BV.includes(VV.decoderConfig.codec)) throw new TypeError(`Audio chunk metadata decoder configuration codec string for DTS must be one of the following four-character codes: ${BV.join(", ")}.`)
        } else if ((VV.decoderConfig.codec.startsWith("pcm") || VV.decoderConfig.codec.startsWith("ulaw") || VV.decoderConfig.codec.startsWith("alaw")) && !yV.includes(VV.decoderConfig.codec)) throw new TypeError(`Audio chunk metadata decoder configuration codec string for PCM must be one of the supported PCM codecs (${yV.join(", ")}).`);
        if (null !== eV && MV(VV.decoderConfig.codec) !== eV) throw new TypeError(`Audio chunk metadata decoder configuration codec string '${VV.decoderConfig.codec}' does not fit to the track codec '${eV}'.`)
      },
      cV = VV => {
        if (!VV) throw new TypeError("Subtitle metadata must be provided.");
        if ("object" !== typeof VV) throw new TypeError("Subtitle metadata must be an object.");
        if (!VV.config) throw new TypeError("Subtitle metadata must include a config object.");
        if ("object" !== typeof VV.config) throw new TypeError("Subtitle metadata config must be an object.");
        if ("string" !== typeof VV.config.description) throw new TypeError("Subtitle metadata config description must be a string.")
      }
  },
  35024: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => vV,
      h: () => ZV,
      i: () => BV,
      l: () => QV,
      n: () => jV,
      o: () => nV,
      r: () => yV
    });
    var JV = xV(34965),
      YV = xV(34933),
      UV = xV(35032);
    new Map, new Map;
    const yV = VV => {
        if (!VV || "object" !== typeof VV) throw new TypeError("Encoding config must be an object.");
        if (!JV.k.includes(VV.codec)) throw new TypeError(`Invalid video codec '${VV.codec}'. Must be one of: ${JV.k.join(", ")}.`);
        const eV = VV.bitrate;
        if (void 0 === VV.quality && void 0 === eV) throw new TypeError("config.quality must be provided.");
        if (void 0 !== VV.quality && void 0 !== eV) throw new TypeError("config.quality and config.bitrate cannot both be provided.");
        if (void 0 !== VV.quality && !(VV.quality instanceof vV)) throw new TypeError("config.quality, when provided, must be a Quality.");
        if (void 0 !== eV && !(eV instanceof vV) && (!Number.isInteger(eV) || eV <= 0)) throw new TypeError("config.bitrate, when provided, must be a positive integer or a quality.");
        if (void 0 !== VV.keyFrameInterval && (!Number.isFinite(VV.keyFrameInterval) || VV.keyFrameInterval < 0)) throw new TypeError("config.keyFrameInterval, when provided, must be a non-negative number.");
        if (void 0 !== VV.sizeChangeBehavior && !["deny", "passThrough", "fill", "contain", "cover"].includes(VV.sizeChangeBehavior)) throw new TypeError("config.sizeChangeBehavior, when provided, must be 'deny', 'passThrough', 'fill', 'contain' or 'cover'.");
        if (void 0 !== VV.transform) {
          if ("object" !== typeof VV.transform || !VV.transform) throw new TypeError("config.transform, when provided, must be an object.");
          if (void 0 !== VV.transform.width && (!Number.isInteger(VV.transform.width) || VV.transform.width <= 0)) throw new TypeError("config.transform.width, when provided, must be a positive integer.");
          if (void 0 !== VV.transform.height && (!Number.isInteger(VV.transform.height) || VV.transform.height <= 0)) throw new TypeError("config.transform.height, when provided, must be a positive integer.");
          if (void 0 !== VV.transform.fit && !["fill", "contain", "cover"].includes(VV.transform.fit)) throw new TypeError('config.transform.fit, when provided, must be one of "fill", "contain", or "cover".');
          if (void 0 !== VV.transform.width && void 0 !== VV.transform.height && void 0 === VV.transform.fit && !["fill", "contain", "cover"].includes(VV.sizeChangeBehavior)) throw new TypeError("When both config.transform.width and config.transform.height are provided, config.transform.fit must also be provided.");
          if (void 0 !== VV.transform.fit && ["fill", "contain", "cover"].includes(VV.sizeChangeBehavior) && VV.transform.fit !== VV.sizeChangeBehavior) throw new TypeError("config.transform.fit, when provided, cannot differ from config.sizeChangeBehavior when config.sizeChangeBehavior is 'fill', 'contain' or 'cover', as sizeChangeBehavior already determines the fitting algorithm.");
          if (void 0 !== VV.transform.rotate && ![0, 90, 180, 270].includes(VV.transform.rotate)) throw new TypeError("config.transform.rotate, when provided, must be 0, 90, 180 or 270.");
          if (void 0 !== VV.transform.flip && "boolean" !== typeof VV.transform.flip) throw new TypeError("config.transform.flip, when provided, must be a boolean.");
          if (void 0 !== VV.transform.crop && (0, UV.n)(VV.transform.crop, "config.transform."), void 0 !== VV.transform.process && "function" !== typeof VV.transform.process) throw new TypeError("config.transform.process, when provided, must be a function.");
          if (void 0 !== VV.transform.frameRate && (!Number.isFinite(VV.transform.frameRate) || VV.transform.frameRate <= 0)) throw new TypeError("config.transform.frameRate, when provided, must be a finite positive number.");
          if (void 0 !== VV.transform.force && "boolean" !== typeof VV.transform.force) throw new TypeError("config.transform.force, when provided, must be a boolean.")
        }
        if (void 0 !== VV.onEncodedPacket && "function" !== typeof VV.onEncodedPacket) throw new TypeError("config.onEncodedPacket, when provided, must be a function.");
        if (void 0 !== VV.onEncoderConfig && "function" !== typeof VV.onEncoderConfig) throw new TypeError("config.onEncoderConfig, when provided, must be a function.");
        if (void 0 !== VV.onEncodedSample && "function" !== typeof VV.onEncodedSample) throw new TypeError("config.onEncodedSample, when provided, must be a function.");
        pV(VV.codec, VV)
      },
      pV = (VV, eV) => {
        if (!eV || "object" !== typeof eV) throw new TypeError("Encoding options must be an object.");
        if (void 0 !== eV.alpha && !["discard", "keep"].includes(eV.alpha)) throw new TypeError("options.alpha, when provided, must be 'discard' or 'keep'.");
        const xV = eV.bitrateMode;
        if (void 0 !== xV && !["constant", "variable"].includes(xV)) throw new TypeError("bitrateMode, when provided, must be 'constant' or 'variable'.");
        if (void 0 !== eV.latencyMode && !["quality", "realtime"].includes(eV.latencyMode)) throw new TypeError("latencyMode, when provided, must be 'quality' or 'realtime'.");
        if (void 0 !== eV.fullCodecString && "string" !== typeof eV.fullCodecString) throw new TypeError("fullCodecString, when provided, must be a string.");
        if (void 0 !== eV.fullCodecString && (0, JV.H)(eV.fullCodecString) !== VV) throw new TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${VV}).`);
        if (void 0 !== eV.hardwareAcceleration && !["no-preference", "prefer-hardware", "prefer-software"].includes(eV.hardwareAcceleration)) throw new TypeError("hardwareAcceleration, when provided, must be 'no-preference', 'prefer-hardware' or 'prefer-software'.");
        if (void 0 !== eV.scalabilityMode && "string" !== typeof eV.scalabilityMode) throw new TypeError("scalabilityMode, when provided, must be a string.");
        if (void 0 !== eV.contentHint && "string" !== typeof eV.contentHint) throw new TypeError("contentHint, when provided, must be a string.")
      },
      QV = VV => {
        const eV = VV.bitrateMode,
          xV = VV.quality._toVideoRateControl(VV.codec, VV.width, VV.height, eV),
          UV = (eV, xV, YV) => ({
            codec: VV.fullCodecString ?? (0, JV.s)(VV.codec, VV.width, VV.height, YV, "keep" === VV.alpha),
            width: VV.width,
            height: VV.height,
            displayWidth: VV.squarePixelWidth,
            displayHeight: VV.squarePixelHeight,
            bitrate: eV,
            bitrateMode: xV,
            alpha: VV.alpha ?? "discard",
            framerate: VV.framerate,
            latencyMode: VV.latencyMode,
            hardwareAcceleration: VV.hardwareAcceleration,
            scalabilityMode: VV.scalabilityMode,
            contentHint: VV.contentHint,
            ...(0, JV.F)(VV.codec)
          }),
          yV = [];
        return null !== xV.quantizer && yV.push({
          config: UV(void 0, "quantizer", xV.bitrate),
          quantizer: xV.quantizer
        }), "quantizer" !== xV.bitrateMode && yV.push({
          config: UV(xV.bitrate, xV.bitrateMode, xV.bitrate),
          quantizer: null
        }), (0, YV.L)(yV.length > 0), yV
      },
      nV = VV => {
        if (!VV || "object" !== typeof VV) throw new TypeError("Encoding config must be an object.");
        if (!JV.b.includes(VV.codec)) throw new TypeError(`Invalid audio codec '${VV.codec}'. Must be one of: ${JV.b.join(", ")}.`);
        const eV = VV.bitrate;
        if (void 0 === VV.quality && void 0 === eV && !JV.i.includes(VV.codec) && "flac" !== VV.codec) throw new TypeError("config.quality must be provided for compressed audio codecs.");
        if (void 0 !== VV.quality && void 0 !== eV) throw new TypeError("config.quality and config.bitrate cannot both be provided.");
        if (void 0 !== VV.quality && !(VV.quality instanceof vV)) throw new TypeError("config.quality, when provided, must be a Quality.");
        if (void 0 !== eV && !(eV instanceof vV) && (!Number.isInteger(eV) || eV <= 0)) throw new TypeError("config.bitrate, when provided, must be a positive integer or a quality.");
        if (void 0 !== VV.transform) {
          if ("object" !== typeof VV.transform || !VV.transform) throw new TypeError("config.transform, when provided, must be an object.");
          if (void 0 !== VV.transform.numberOfChannels && (!Number.isInteger(VV.transform.numberOfChannels) || VV.transform.numberOfChannels <= 0)) throw new TypeError("config.transform.numberOfChannels, when provided, must be a positive integer.");
          if (void 0 !== VV.transform.sampleRate && (!Number.isInteger(VV.transform.sampleRate) || VV.transform.sampleRate <= 0)) throw new TypeError("config.transform.sampleRate, when provided, must be a positive integer.");
          if (void 0 !== VV.transform.sampleFormat && !["u8", "s16", "s32", "f32"].includes(VV.transform.sampleFormat)) throw new TypeError("config.transform.sampleFormat, when provided, must be one of: u8, s16, s32, f32.");
          if (void 0 !== VV.transform.process && "function" !== typeof VV.transform.process) throw new TypeError("config.transform.process, when provided, must be a function.")
        }
        if (void 0 !== VV.onEncodedPacket && "function" !== typeof VV.onEncodedPacket) throw new TypeError("config.onEncodedPacket, when provided, must be a function.");
        if (void 0 !== VV.onEncoderConfig && "function" !== typeof VV.onEncoderConfig) throw new TypeError("config.onEncoderConfig, when provided, must be a function.");
        if (void 0 !== VV.onEncodedSample && "function" !== typeof VV.onEncodedSample) throw new TypeError("config.onEncodedSample, when provided, must be a function.");
        wV(VV.codec, VV)
      },
      wV = (VV, eV) => {
        if (!eV || "object" !== typeof eV) throw new TypeError("Encoding options must be an object.");
        const xV = eV.bitrateMode;
        if (void 0 !== xV && !["constant", "variable"].includes(xV)) throw new TypeError("bitrateMode, when provided, must be 'constant' or 'variable'.");
        if (void 0 !== eV.fullCodecString && "string" !== typeof eV.fullCodecString) throw new TypeError("fullCodecString, when provided, must be a string.");
        if (void 0 !== eV.fullCodecString && (0, JV.H)(eV.fullCodecString) !== VV) throw new TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${VV}).`)
      },
      ZV = VV => {
        const eV = VV.bitrateMode;
        return {
          codec: VV.fullCodecString ?? (0, JV.o)(VV.codec, VV.numberOfChannels, VV.sampleRate),
          numberOfChannels: VV.numberOfChannels,
          sampleRate: VV.sampleRate,
          bitrate: VV.quality?._toAudioBitrate(VV.codec),
          bitrateMode: VV.quality?._bitrateMode ?? eV,
          ...(0, JV.D)(VV.codec)
        }
      };
    class vV {
      constructor(VV) {
        if ("number" !== typeof VV && "string" !== typeof VV || (VV = {
            quality: VV
          }), !VV || "object" !== typeof VV) throw new TypeError("options must be an object.");
        if (void 0 !== VV.bitrateMode && !["constant", "variable"].includes(VV.bitrateMode)) throw new TypeError("options.bitrateMode, when provided, must be 'constant' or 'variable'.");
        if ("quality" in VV) {
          if ("string" === typeof VV.quality ? !(VV.quality in rV) : "number" !== typeof VV.quality || Number.isNaN(VV.quality)) throw new TypeError("options.quality must be a number, or one of 'very-low', 'low', 'medium', 'high' or 'very-high'.");
          if (void 0 !== VV.preferBitrate && "boolean" !== typeof VV.preferBitrate) throw new TypeError("options.preferBitrate, when provided, must be a boolean.");
          if ("bitrate" in VV || "quantizer" in VV) throw new TypeError("options.quality cannot be combined with options.bitrate or options.quantizer.");
          this._quality = "string" === typeof VV.quality ? rV[VV.quality] : VV.quality, this._preferBitrate = VV.preferBitrate ?? !1, this._bitrate = void 0, this._quantizer = void 0
        } else {
          if (void 0 !== VV.bitrate && (!Number.isInteger(VV.bitrate) || VV.bitrate <= 0)) throw new TypeError("options.bitrate, when provided, must be a positive integer.");
          if (void 0 !== VV.quantizer && (!Number.isInteger(VV.quantizer) || VV.quantizer < 0)) throw new TypeError("options.quantizer, when provided, must be a non-negative integer.");
          if (void 0 === VV.bitrate && void 0 === VV.quantizer) throw new TypeError("At least one of options.bitrate or options.quantizer must be set.");
          if ("preferBitrate" in VV) throw new TypeError("options.preferBitrate can only be combined with options.quality.");
          this._quality = void 0, this._preferBitrate = !1, this._bitrate = VV.bitrate, this._quantizer = VV.quantizer
        }
        this._bitrateMode = VV.bitrateMode
      }
      _toVideoRateControl(VV, eV, xV, JV) {
        const UV = kV[VV];
        let yV, pV = null,
          QV = this._bitrateMode ?? JV ?? "variable";
        if (void 0 !== this._quantizer) {
          if (UV)
            if (this._quantizer < UV.min || this._quantizer > UV.max) {
              if (void 0 === this._bitrate) throw new Error(`Quantizer ${this._quantizer} is out of range for codec '${VV}'; must be between ${UV.min} and ${UV.max}.`)
            } else pV = this._quantizer, void 0 === this._bitrate && (QV = "quantizer");
          else if (void 0 === this._bitrate) throw new Error(`Codec '${VV}' does not support quantizer-based encoding. Provide a bitrate in the Quality to define a fallback.`)
        } else void 0 === this._bitrate && UV && !this._preferBitrate && ((0, YV.L)(void 0 !== this._quality), pV = (0, YV.bb)(Math.round((0, YV.mc)(UV.worst, UV.best, this._quality)), UV.min, UV.max));
        if (void 0 !== this._bitrate) yV = this._bitrate;
        else {
          let JV = this._quality;
          void 0 === JV && ((0, YV.L)(null !== pV && UV), JV = (0, YV.bb)((pV - UV.worst) / (UV.best - UV.worst), 0, 1)), yV = EV(VV, eV, xV, bV(JV))
        }
        return {
          quantizer: pV,
          bitrate: yV,
          bitrateMode: QV
        }
      }
      _toVideoBitrate(VV, eV, xV) {
        return void 0 !== this._bitrate ? this._bitrate : ((0, YV.L)(void 0 !== this._quality), EV(VV, eV, xV, bV(this._quality)))
      }
      _toAudioBitrate(VV) {
        if (JV.i.includes(VV) || "flac" === VV) return;
        if (void 0 !== this._bitrate) return this._bitrate;
        if (void 0 === this._quality) throw new Error("This Quality defines neither a quality level nor a bitrate and therefore cannot be used for audio encoding.");
        const eV = bV(this._quality),
          xV = {
            aac: 128e3,
            opus: 64e3,
            mp3: 16e4,
            vorbis: 64e3,
            ac3: 384e3,
            eac3: 192e3,
            dts: 768e3
          } [VV];
        if (!xV) throw new Error(`Unhandled codec: ${VV}`);
        let YV = xV * eV;
        if ("aac" === VV) {
          YV = [96e3, 128e3, 16e4, 192e3].reduce(((VV, eV) => Math.abs(eV - YV) < Math.abs(VV - YV) ? eV : VV))
        } else if ("opus" === VV || "vorbis" === VV) YV = Math.max(6e3, YV);
        else if ("mp3" === VV) {
          YV = [8e3, 16e3, 24e3, 32e3, 4e4, 48e3, 64e3, 8e4, 96e3, 112e3, 128e3, 16e4, 192e3, 224e3, 256e3, 32e4].reduce(((VV, eV) => Math.abs(eV - YV) < Math.abs(VV - YV) ? eV : VV))
        }
        return 1e3 * Math.round(YV / 1e3)
      }
    }
    const rV = {
        "very-low": 0,
        low: .25,
        medium: .5,
        high: .75,
        "very-high": 1
      },
      kV = {
        avc: {
          min: 0,
          max: 51,
          worst: 41,
          best: 16
        },
        hevc: {
          min: 0,
          max: 51,
          worst: 41,
          best: 16
        },
        vp9: {
          min: 0,
          max: 63,
          worst: 52,
          best: 20
        },
        av1: {
          min: 0,
          max: 255,
          worst: 208,
          best: 80
        }
      },
      bV = VV => .3 * Math.exp(2.5538 * VV),
      EV = (VV, eV, xV, JV) => {
        const YV = eV * xV,
          UV = 3e6,
          yV = UV * Math.pow(YV / 2073600, .95) * {
            avc: 1,
            hevc: .6,
            vp9: .6,
            av1: .4,
            vp8: 1.2,
            prores: 73.33333333333333
          } [VV] * JV;
        return 1e3 * Math.ceil(yV / 1e3)
      },
      BV = (VV, eV) => "avc" === VV ? {
        avc: {
          quantizer: eV
        }
      } : "hevc" === VV ? {
        hevc: {
          quantizer: eV
        }
      } : "vp9" === VV ? {
        vp9: {
          quantizer: eV
        }
      } : "av1" === VV ? {
        av1: {
          quantizer: eV
        }
      } : void(0, YV.L)(!1),
      jV = (VV, eV) => void 0 !== VV ? VV : void 0 !== eV ? eV instanceof vV ? eV : new vV({
        bitrate: eV
      }) : void 0
  },
  34973: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => UV
    });
    var JV, YV = xV(34933);
    ! function(VV) {
      VV[VV.Silent = 0] = "Silent", VV[VV.Errors = 1] = "Errors", VV[VV.Warnings = 2] = "Warnings", VV[VV.Info = 3] = "Info"
    }(JV || (JV = {}));
    class UV {
      constructor() {}
      static get level() {
        return UV._level
      }
      static set level(VV) {
        if (VV !== JV.Silent && VV !== JV.Errors && VV !== JV.Warnings && VV !== JV.Info) throw new TypeError("Invalid log level. Use one of the values of the LogLevel enum.");
        UV._level = VV
      }
      static get _emitter() {
        return UV._emitterInstance ??= new YV.g
      }
      static on(VV, eV, xV) {
        return UV._emitter.on(VV, eV, xV)
      }
      static _error() {
        for (var VV = arguments.length, eV = new Array(VV), xV = 0; xV < VV; xV++) eV[xV] = arguments[xV];
        UV._emitter._emit("error", eV), UV._level >= JV.Errors && console.error(...eV)
      }
      static _warn() {
        for (var VV = arguments.length, eV = new Array(VV), xV = 0; xV < VV; xV++) eV[xV] = arguments[xV];
        UV._emitter._emit("warn", eV), UV._level >= JV.Warnings && console.warn(...eV)
      }
      static _info() {
        for (var VV = arguments.length, eV = new Array(VV), xV = 0; xV < VV; xV++) eV[xV] = arguments[xV];
        UV._emitter._emit("info", eV), UV._level >= JV.Info && console.info(...eV)
      }
    }
    UV._level = JV.Info, UV._emitterInstance = null
  },
  35036: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => nV,
      d: () => wV,
      g: () => QV,
      j: () => ZV,
      k: () => yV
    });
    xV(34955);
    var JV = xV(34965);
    xV(34933), xV(34990);
    var YV = xV(35017);
    xV(35032), xV(35024);
    xV(34968), xV(34973), "function" === typeof SuppressedError && SuppressedError;
    class UV {
      constructor() {
        this._connectedTrack = null, this._closingPromise = null, this._closed = !1, this._nominalBitrate = null
      }
      _ensureValidAdd() {
        if (!this._connectedTrack) throw new Error("Source is not connected to an output track.");
        if ("canceled" === this._connectedTrack.output.state) throw new Error("Output has been canceled.");
        if ("finalizing" === this._connectedTrack.output.state || "finalized" === this._connectedTrack.output.state) throw new Error("Output has been finalized.");
        if ("pending" === this._connectedTrack.output.state) throw new Error("Output has not started.");
        if (this._closed) throw new Error("Source is closed.")
      }
      async _start() {}
      async _flushAndClose(VV) {}
      close() {
        if (this._closingPromise) return;
        const VV = this._connectedTrack;
        if (!VV) throw new Error("Cannot call close without connecting the source to an output track.");
        if ("pending" === VV.output.state) throw new Error("Cannot call close before output has been started.");
        this._closingPromise = (async () => {
          await this._flushAndClose(!1), this._closed = !0, "finalizing" !== VV.output.state && "finalized" !== VV.output.state && VV.output._muxer.onTrackClose(VV)
        })()
      }
      async _flushOrWaitForOngoingClose(VV) {
        return this._closingPromise ??= (async () => {
          await this._flushAndClose(VV), this._closed = !0
        })()
      }
    }
    class yV extends UV {
      constructor(VV) {
        if (super(), !JV.k.includes(VV)) throw new TypeError(`Invalid video codec '${VV}'. Must be one of: ${JV.k.join(", ")}.`);
        this._codec = VV
      }
    }
    const pV = (VV, eV) => {
      if (VV.metadata.hasOnlyKeyPackets && "key" !== eV.type) throw new Error("Cannot add non-key packets to a hasOnlyKeyPackets video track.")
    };
    class QV extends yV {
      constructor(VV) {
        super(VV)
      }
      add(VV, eV) {
        if (!(VV instanceof YV.e)) throw new TypeError("packet must be an EncodedPacket.");
        if (VV.isMetadataOnly) throw new TypeError("Metadata-only packets cannot be added.");
        if (void 0 !== eV && (!eV || "object" !== typeof eV)) throw new TypeError("meta, when provided, must be an object.");
        return this._ensureValidAdd(), pV(this._connectedTrack, VV), this._connectedTrack.output._muxer.addEncodedVideoPacket(this._connectedTrack, VV, eV)
      }
    }
    class nV extends UV {
      constructor(VV) {
        if (super(), !JV.b.includes(VV)) throw new TypeError(`Invalid audio codec '${VV}'. Must be one of: ${JV.b.join(", ")}.`);
        this._codec = VV
      }
    }
    class wV extends nV {
      constructor(VV) {
        super(VV)
      }
      add(VV, eV) {
        if (!(VV instanceof YV.e)) throw new TypeError("packet must be an EncodedPacket.");
        if (VV.isMetadataOnly) throw new TypeError("Metadata-only packets cannot be added.");
        if (void 0 !== eV && (!eV || "object" !== typeof eV)) throw new TypeError("meta, when provided, must be an object.");
        return this._ensureValidAdd(), this._connectedTrack.output._muxer.addEncodedAudioPacket(this._connectedTrack, VV, eV)
      }
    }
    class ZV extends UV {
      constructor(VV) {
        if (super(), !JV.j.includes(VV)) throw new TypeError(`Invalid subtitle codec '${VV}'. Must be one of: ${JV.j.join(", ")}.`);
        this._codec = VV
      }
    }
  },
  34939: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => UV,
      f: () => QV,
      i: () => YV,
      k: () => pV,
      o: () => yV,
      q: () => nV
    });
    var JV = xV(34933);
    class YV {
      constructor(VV, eV) {
        if (this.data = VV, this.mimeType = eV, !(VV instanceof Uint8Array)) throw new TypeError("data must be a Uint8Array.");
        if ("string" !== typeof eV) throw new TypeError("mimeType must be a string.")
      }
    }
    class UV {
      constructor(VV, eV, xV, JV) {
        if (this.data = VV, this.mimeType = eV, this.name = xV, this.description = JV, !(VV instanceof Uint8Array)) throw new TypeError("data must be a Uint8Array.");
        if (void 0 !== eV && "string" !== typeof eV) throw new TypeError("mimeType, when provided, must be a string.");
        if (void 0 !== xV && "string" !== typeof xV) throw new TypeError("name, when provided, must be a string.");
        if (void 0 !== JV && "string" !== typeof JV) throw new TypeError("description, when provided, must be a string.")
      }
    }
    const yV = VV => {
        if (!VV || "object" !== typeof VV) throw new TypeError("tags must be an object.");
        if (void 0 !== VV.title && "string" !== typeof VV.title) throw new TypeError("tags.title, when provided, must be a string.");
        if (void 0 !== VV.description && "string" !== typeof VV.description) throw new TypeError("tags.description, when provided, must be a string.");
        if (void 0 !== VV.artist && "string" !== typeof VV.artist) throw new TypeError("tags.artist, when provided, must be a string.");
        if (void 0 !== VV.album && "string" !== typeof VV.album) throw new TypeError("tags.album, when provided, must be a string.");
        if (void 0 !== VV.albumArtist && "string" !== typeof VV.albumArtist) throw new TypeError("tags.albumArtist, when provided, must be a string.");
        if (void 0 !== VV.trackNumber && (!Number.isInteger(VV.trackNumber) || VV.trackNumber <= 0)) throw new TypeError("tags.trackNumber, when provided, must be a positive integer.");
        if (void 0 !== VV.tracksTotal && (!Number.isInteger(VV.tracksTotal) || VV.tracksTotal <= 0)) throw new TypeError("tags.tracksTotal, when provided, must be a positive integer.");
        if (void 0 !== VV.discNumber && (!Number.isInteger(VV.discNumber) || VV.discNumber <= 0)) throw new TypeError("tags.discNumber, when provided, must be a positive integer.");
        if (void 0 !== VV.discsTotal && (!Number.isInteger(VV.discsTotal) || VV.discsTotal <= 0)) throw new TypeError("tags.discsTotal, when provided, must be a positive integer.");
        if (void 0 !== VV.genre && "string" !== typeof VV.genre) throw new TypeError("tags.genre, when provided, must be a string.");
        if (void 0 !== VV.date && (!(VV.date instanceof Date) || Number.isNaN(VV.date.getTime()))) throw new TypeError("tags.date, when provided, must be a valid Date.");
        if (void 0 !== VV.beatsPerMinute && (!Number.isInteger(VV.beatsPerMinute) || VV.beatsPerMinute <= 0)) throw new TypeError("tags.beatsPerMinute, when provided, must be a positive integer.");
        if (void 0 !== VV.lyrics && "string" !== typeof VV.lyrics) throw new TypeError("tags.lyrics, when provided, must be a string.");
        if (void 0 !== VV.images) {
          if (!Array.isArray(VV.images)) throw new TypeError("tags.images, when provided, must be an array.");
          for (const eV of VV.images) {
            if (!eV || "object" !== typeof eV) throw new TypeError("Each image in tags.images must be an object.");
            if (!(eV.data instanceof Uint8Array)) throw new TypeError("Each image.data must be a Uint8Array.");
            if ("string" !== typeof eV.mimeType) throw new TypeError("Each image.mimeType must be a string.");
            if (!["coverFront", "coverBack", "unknown"].includes(eV.kind)) throw new TypeError("Each image.kind must be 'coverFront', 'coverBack', or 'unknown'.")
          }
        }
        if (void 0 !== VV.comment && "string" !== typeof VV.comment) throw new TypeError("tags.comment, when provided, must be a string.");
        if (void 0 !== VV.raw) {
          if (!VV.raw || "object" !== typeof VV.raw) throw new TypeError("tags.raw, when provided, must be an object.");
          for (const eV of Object.values(VV.raw))
            if (null !== eV && "string" !== typeof eV && (!Array.isArray(eV) || !eV.every((VV => "string" === typeof VV))) && !(eV instanceof Uint8Array) && !(eV instanceof YV) && !(eV instanceof UV) && !(0, JV.Yb)(eV)) throw new TypeError("Each value in tags.raw must be a string, string array, Uint8Array, RichImageData, AttachedFile, Record<string, string>, or null.")
        }
      },
      pV = VV => void 0 === VV.title && void 0 === VV.description && void 0 === VV.artist && void 0 === VV.album && void 0 === VV.albumArtist && void 0 === VV.trackNumber && void 0 === VV.tracksTotal && void 0 === VV.discNumber && void 0 === VV.discsTotal && void 0 === VV.genre && void 0 === VV.beatsPerMinute && void 0 === VV.date && void 0 === VV.lyrics && (!VV.images || 0 === VV.images.length) && void 0 === VV.comment && (void 0 === VV.raw || 0 === Object.keys(VV.raw).length),
      QV = {
        default: !0,
        primary: !0,
        forced: !1,
        original: !1,
        commentary: !1,
        hearingImpaired: !1,
        visuallyImpaired: !1
      },
      nV = VV => {
        if (!VV || "object" !== typeof VV) throw new TypeError("disposition must be an object.");
        if (void 0 !== VV.default && "boolean" !== typeof VV.default) throw new TypeError("disposition.default must be a boolean.");
        if (void 0 !== VV.primary && "boolean" !== typeof VV.primary) throw new TypeError("disposition.primary must be a boolean.");
        if (void 0 !== VV.forced && "boolean" !== typeof VV.forced) throw new TypeError("disposition.forced must be a boolean.");
        if (void 0 !== VV.original && "boolean" !== typeof VV.original) throw new TypeError("disposition.original must be a boolean.");
        if (void 0 !== VV.commentary && "boolean" !== typeof VV.commentary) throw new TypeError("disposition.commentary must be a boolean.");
        if (void 0 !== VV.hearingImpaired && "boolean" !== typeof VV.hearingImpaired) throw new TypeError("disposition.hearingImpaired must be a boolean.");
        if (void 0 !== VV.visuallyImpaired && "boolean" !== typeof VV.visuallyImpaired) throw new TypeError("disposition.visuallyImpaired must be a boolean.")
      }
  },
  34933: (VV, eV, xV) => {
    function JV(VV) {
      if (!VV) throw new Error("Assertion failed.")
    }
    xV.d(eV, {
      Ab: () => Ve,
      Ac: () => yV,
      Ad: () => ce,
      B: () => Xe,
      Bd: () => FV,
      Cb: () => qe,
      Cc: () => Te,
      Eb: () => DV,
      F: () => Ne,
      Fc: () => ee,
      Gb: () => ve,
      Gc: () => cV,
      Hb: () => ke,
      Hc: () => qV,
      J: () => lV,
      L: () => JV,
      Lb: () => we,
      Lc: () => tV,
      Nc: () => aV,
      Ob: () => Je,
      P: () => oV,
      Pb: () => zV,
      Qc: () => ZV,
      T: () => te,
      Tb: () => jV,
      Tc: () => dV,
      Uc: () => IV,
      Vc: () => rV,
      W: () => CV,
      Wb: () => Pe,
      Yb: () => Le,
      Yc: () => ae,
      _: () => QV,
      ac: () => Ee,
      ad: () => mV,
      b: () => iV,
      bb: () => HV,
      c: () => GV,
      cd: () => KV,
      dc: () => BV,
      f: () => ye,
      fb: () => oe,
      fc: () => Qe,
      g: () => le,
      gd: () => fV,
      hc: () => Ae,
      hd: () => Me,
      i: () => pV,
      ib: () => Be,
      ic: () => je,
      id: () => XV,
      jc: () => EV,
      k: () => RV,
      lb: () => gV,
      ld: () => MV,
      mb: () => bV,
      mc: () => uV,
      nb: () => Ue,
      nd: () => he,
      o: () => UV,
      ob: () => nV,
      p: () => Ye,
      pc: () => re,
      r: () => WV,
      rb: () => hV,
      rd: () => PV,
      sd: () => TV,
      tc: () => sV,
      u: () => NV,
      ub: () => OV,
      vd: () => Fe,
      xc: () => kV,
      y: () => SV,
      yb: () => LV,
      zd: () => ze
    });
    const YV = Math.PI / 180,
      UV = 180 / Math.PI,
      yV = VV => {
        const eV = (VV % 360 + 360) % 360;
        if (0 === eV || 90 === eV || 180 === eV || 270 === eV) return eV;
        throw new Error(`Invalid rotation ${VV}.`)
      },
      pV = [1, 0, 0, 0, 1, 0, 0, 0, 1],
      QV = (VV, eV, xV) => {
        const [JV, YV, , UV, yV] = VV, pV = Math.abs(JV) * eV + Math.abs(UV) * xV, QV = Math.abs(YV) * eV + Math.abs(yV) * xV;
        return kV(kV(vV(-eV / 2, -xV / 2), VV), vV(pV / 2, QV / 2))
      },
      nV = VV => {
        const [eV, xV] = VV, JV = Math.atan2(xV, wV(VV) ? -eV : eV);
        return yV(IV(JV * UV, 90))
      },
      wV = VV => {
        const [eV, xV, , JV, YV] = VV;
        return eV * YV - xV * JV < 0
      },
      ZV = VV => {
        const eV = VV * YV,
          xV = Math.round(Math.cos(eV)),
          JV = Math.round(Math.sin(eV));
        return [xV, JV, 0, -JV, xV, 0, 0, 0, 1]
      },
      vV = (VV, eV) => [1, 0, 0, 0, 1, 0, VV, eV, 1],
      rV = (VV, eV) => [VV, 0, 0, 0, eV, 0, 0, 0, 1],
      kV = (VV, eV) => {
        const xV = new Array(9);
        for (let JV = 0; JV < 3; JV++)
          for (let YV = 0; YV < 3; YV++) xV[3 * JV + YV] = VV[3 * JV] * eV[YV] + VV[3 * JV + 1] * eV[3 + YV] + VV[3 * JV + 2] * eV[6 + YV];
        return xV
      },
      bV = (VV, eV, xV, JV) => ({
        rotation: yV(VV + (eV ? -xV : xV)),
        flip: eV !== JV
      }),
      EV = VV => VV && VV[VV.length - 1],
      BV = VV => VV >= 0 && VV < 2 ** 32,
      jV = VV => VV >= -(2 ** 31) && VV < 2 ** 31,
      qV = VV => {
        let eV = 0;
        for (; 0 === VV.readBits(1) && eV < 32;) eV++;
        if (eV >= 32) throw new Error("Invalid exponential-Golomb code.");
        return (1 << eV) - 1 + VV.readBits(eV)
      },
      tV = VV => {
        const eV = qV(VV);
        return 0 === (1 & eV) ? -(eV >> 1) : eV + 1 >> 1
      },
      FV = (VV, eV, xV, JV) => {
        for (let YV = eV; YV < xV; YV++) {
          const eV = Math.floor(YV / 8);
          let UV = VV[eV];
          const yV = 7 - (7 & YV);
          UV &= ~(1 << yV), UV |= (JV & 1 << xV - YV - 1) >> xV - YV - 1 << yV, VV[eV] = UV
        }
      },
      TV = VV => VV.constructor === Uint8Array ? VV : ArrayBuffer.isView(VV) ? new Uint8Array(VV.buffer, VV.byteOffset, VV.byteLength) : new Uint8Array(VV),
      PV = VV => VV.constructor === DataView ? VV : ArrayBuffer.isView(VV) ? new DataView(VV.buffer, VV.byteOffset, VV.byteLength) : new DataView(VV),
      AV = "undefined" !== typeof globalThis.TextEncoder ? globalThis.TextEncoder : class {
        constructor() {
          this.encoding = "utf-8"
        }
        encode() {
          let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          const eV = new Uint8Array(3 * VV.length);
          let xV = 0;
          for (let JV = 0; JV < VV.length; JV++) {
            let YV = VV.charCodeAt(JV);
            if (YV < 128) eV[xV++] = YV;
            else if (YV < 2048) eV[xV++] = 192 | YV >> 6, eV[xV++] = 128 | 63 & YV;
            else if (YV < 55296 || YV > 57343) eV[xV++] = 224 | YV >> 12, eV[xV++] = 128 | YV >> 6 & 63, eV[xV++] = 128 | 63 & YV;
            else {
              const UV = JV + 1 < VV.length ? VV.charCodeAt(JV + 1) : 0;
              YV < 56320 && UV >= 56320 && UV <= 57343 ? (YV = 65536 + (YV - 55296 << 10) + (UV - 56320), JV++, eV[xV++] = 240 | YV >> 18, eV[xV++] = 128 | YV >> 12 & 63, eV[xV++] = 128 | YV >> 6 & 63, eV[xV++] = 128 | 63 & YV) : (eV[xV++] = 239, eV[xV++] = 191, eV[xV++] = 189)
            }
          }
          return eV.slice(0, xV)
        }
      },
      NV = "undefined" !== typeof globalThis.TextDecoder ? globalThis.TextDecoder : class {
        constructor() {
          let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "utf-8";
          const eV = VV.trim().toLowerCase();
          if ("utf-8" === eV || "utf8" === eV || "unicode-1-1-utf-8" === eV) this.encoding = "utf-8";
          else if ("utf-16le" === eV || "utf-16" === eV) this.encoding = "utf-16le";
          else {
            if ("utf-16be" !== eV) throw new RangeError(`The encoding label provided ('${VV}') is invalid.`);
            this.encoding = "utf-16be"
          }
        }
        decode(VV) {
          const eV = VV ? TV(VV) : new Uint8Array(0),
            xV = [];
          if ("utf-8" === this.encoding) {
            let VV = eV.length >= 3 && 239 === eV[0] && 187 === eV[1] && 191 === eV[2] ? 3 : 0;
            for (; VV < eV.length;) {
              const JV = eV[VV];
              if (JV < 128) {
                xV.push(JV), VV++;
                continue
              }
              let YV, UV;
              if (JV >= 194 && JV < 224) YV = 1, UV = 31 & JV;
              else if (JV >= 224 && JV < 240) YV = 2, UV = 15 & JV;
              else {
                if (!(JV >= 240 && JV < 245)) {
                  xV.push(65533), VV++;
                  continue
                }
                YV = 3, UV = 7 & JV
              }
              let yV = 224 === JV ? 160 : 240 === JV ? 144 : 128,
                pV = 237 === JV ? 159 : 244 === JV ? 143 : 191,
                QV = 1;
              for (; QV <= YV; QV++) {
                const xV = VV + QV < eV.length ? eV[VV + QV] : 0;
                if (xV < yV || xV > pV) break;
                UV = UV << 6 | 63 & xV, yV = 128, pV = 191
              }
              VV += QV, QV <= YV ? xV.push(65533) : UV >= 65536 ? (UV -= 65536, xV.push(55296 | UV >> 10, 56320 | 1023 & UV)) : xV.push(UV)
            }
          } else {
            const VV = "utf-16le" === this.encoding,
              JV = VV ? 255 : 254,
              YV = VV ? 254 : 255;
            let UV = eV.length >= 2 && eV[0] === JV && eV[1] === YV ? 2 : 0;
            for (; UV + 1 < eV.length;) {
              const JV = VV ? eV[UV] | eV[UV + 1] << 8 : eV[UV] << 8 | eV[UV + 1];
              if (UV += 2, JV >= 55296 && JV <= 56319) {
                const YV = UV + 1 < eV.length ? VV ? eV[UV] | eV[UV + 1] << 8 : eV[UV] << 8 | eV[UV + 1] : -1;
                YV >= 56320 && YV <= 57343 ? (xV.push(JV, YV), UV += 2) : xV.push(65533)
              } else JV >= 56320 && JV <= 57343 ? xV.push(65533) : xV.push(JV)
            }
            UV < eV.length && xV.push(65533)
          }
          let JV = "";
          for (let YV = 0; YV < xV.length; YV += 8192) JV += String.fromCharCode(...xV.slice(YV, YV + 8192));
          return JV
        }
      },
      XV = new NV,
      MV = new AV,
      zV = VV => {
        for (let eV = 0; eV < VV.length; eV++) {
          if (VV.charCodeAt(eV) > 255) return !1
        }
        return !0
      },
      GV = {
        bt709: 1,
        bt470bg: 5,
        smpte170m: 6,
        bt2020: 9,
        smpte432: 12
      },
      WV = {
        bt709: 1,
        smpte170m: 6,
        linear: 8,
        "iec61966-2-1": 13,
        pq: 16,
        hlg: 18
      },
      RV = {
        rgb: 0,
        bt709: 1,
        bt470bg: 5,
        smpte170m: 6,
        "bt2020-ncl": 9
      },
      gV = VV => !VV || null == VV.primaries && null == VV.transfer && null == VV.matrix && null == VV.fullRange,
      DV = VV => VV instanceof ArrayBuffer || "undefined" !== typeof SharedArrayBuffer && VV instanceof SharedArrayBuffer || ArrayBuffer.isView(VV);
    class iV {
      constructor() {
        this.currentPromise = Promise.resolve(), this.pending = 0
      }
      async acquire() {
        let VV;
        const eV = new Promise((eV => {
            let xV = !1;
            VV = () => {
              xV || (eV(), this.pending--, xV = !0)
            }
          })),
          xV = this.currentPromise;
        return this.currentPromise = eV, this.pending++, await xV, VV
      }
    }
    const CV = VV => [...VV].map((VV => VV.toString(16).padStart(2, "0"))).join(""),
      aV = VV => (VV = (VV = (VV = (VV = (VV = VV >> 1 & 1431655765 | (1431655765 & VV) << 1) >> 2 & 858993459 | (858993459 & VV) << 2) >> 4 & 252645135 | (252645135 & VV) << 4) >> 8 & 16711935 | (16711935 & VV) << 8) >> 16 & 65535 | (65535 & VV) << 16) >>> 0,
      oV = (VV, eV, xV) => {
        let JV = 0,
          YV = VV.length - 1,
          UV = -1;
        for (; JV <= YV;) {
          const yV = JV + (YV - JV + 1) / 2 | 0;
          xV(VV[yV]) <= eV ? (UV = yV, JV = yV + 1) : YV = yV - 1
        }
        return UV
      },
      cV = () => {
        let VV, eV;
        return {
          promise: new Promise(((xV, JV) => {
            VV = xV, eV = JV
          })),
          resolve: VV,
          reject: eV
        }
      },
      hV = (VV, eV) => {
        for (let xV = VV.length - 1; xV >= 0; xV--)
          if (eV(VV[xV])) return xV;
        return -1
      },
      lV = VV => {
        throw new Error(`Unexpected value: ${VV}`)
      },
      LV = (VV, eV, xV) => {
        const JV = VV.getUint8(eV),
          YV = VV.getUint8(eV + 1),
          UV = VV.getUint8(eV + 2);
        return xV ? JV | YV << 8 | UV << 16 : JV << 16 | YV << 8 | UV
      },
      fV = (VV, eV, xV, JV) => {
        xV >>>= 0, xV &= 16777215, JV ? (VV.setUint8(eV, 255 & xV), VV.setUint8(eV + 1, xV >>> 8 & 255), VV.setUint8(eV + 2, xV >>> 16 & 255)) : (VV.setUint8(eV, xV >>> 16 & 255), VV.setUint8(eV + 1, xV >>> 8 & 255), VV.setUint8(eV + 2, 255 & xV))
      },
      mV = (VV, eV, xV, JV) => {
        (xV = HV(xV, -8388608, 8388607)) < 0 && (xV = xV + 16777216 & 16777215), fV(VV, eV, xV, JV)
      },
      KV = (VV, eV, xV, JV) => {
        JV ? (VV.setUint32(eV + 0, xV, !0), VV.setInt32(eV + 4, Math.floor(xV / 2 ** 32), !0)) : (VV.setInt32(eV + 0, Math.floor(xV / 2 ** 32), !0), VV.setUint32(eV + 4, xV, !0))
      },
      HV = (VV, eV, xV) => Math.max(eV, Math.min(xV, VV)),
      uV = (VV, eV, xV) => VV + (eV - VV) * xV,
      sV = (VV, eV) => VV - Math.floor(VV / eV) * eV,
      SV = "und",
      IV = (VV, eV) => Math.round(VV / eV) * eV,
      dV = (VV, eV) => Math.round(VV * eV) / eV,
      OV = (VV, eV) => Math.floor(VV * eV) / eV,
      Ve = VV => {
        let eV = 0;
        for (; VV;) eV++, VV >>= 1;
        return eV
      },
      ee = VV => {
        let eV = 0;
        for (; 0 !== VV;) VV &= VV - 1, eV++;
        return eV
      },
      xe = /^[a-z]{3}$/,
      Je = VV => xe.test(VV),
      Ye = 1e6 * (1 + Number.EPSILON),
      Ue = (VV, eV) => {
        const xV = VV < 0 ? -1 : 1;
        let JV = 0,
          YV = 1,
          UV = 1,
          yV = 0,
          pV = VV = Math.abs(VV);
        for (;;) {
          const VV = Math.floor(pV),
            QV = VV * UV + JV,
            nV = VV * yV + YV;
          if (nV > eV) return {
            num: xV * UV,
            den: yV
          };
          if (JV = UV, YV = yV, UV = QV, yV = nV, pV = 1 / (pV - VV), !isFinite(pV)) break
        }
        return {
          num: xV * UV,
          den: yV
        }
      };
    class ye {
      constructor() {
        this.currentPromise = Promise.resolve()
      }
      call(VV) {
        return this.currentPromise = this.currentPromise.then(VV)
      }
    }
    let pe = null;
    const Qe = () => null !== pe ? pe : pe = !("undefined" === typeof navigator || !(navigator.vendor?.match(/apple/i) || /AppleWebKit/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) || /\b(iPad|iPhone|iPod)\b/.test(navigator.userAgent)));
    let ne = null;
    const we = () => null !== ne ? ne : ne = "undefined" !== typeof navigator && navigator.userAgent?.includes("Firefox");
    let Ze = null;
    const ve = () => null !== Ze ? Ze : Ze = !("undefined" === typeof navigator || !navigator.vendor?.includes("Google Inc") && !/Chrome/.test(navigator.userAgent));
    const re = VV => "undefined" === typeof globalThis.isSecureContext || globalThis.isSecureContext ? `${VV} is not available in this environment.` : `${VV} is not available in this environment; this may be because this page is running in an insecure context. Try serving your page over HTTPS or use localhost.`,
      ke = VV => VV instanceof DOMException && "QuotaExceededError" === VV.name && /reclaimed/i.test(VV.message),
      be = (async () => {})().constructor,
      Ee = VV => VV instanceof be || VV instanceof Promise || "function" === typeof VV?.then,
      Be = (VV, eV) => -1 !== VV ? VV : eV,
      je = function*(VV) {
        for (const eV in VV) {
          const xV = VV[eV];
          void 0 !== xV && (yield {
            key: eV,
            value: xV
          })
        }
      },
      qe = VV => {
        switch (VV.toLowerCase()) {
          case "image/jpeg":
          case "image/jpg":
            return ".jpg";
          case "image/png":
            return ".png";
          case "image/gif":
            return ".gif";
          case "image/webp":
            return ".webp";
          case "image/bmp":
            return ".bmp";
          case "image/svg+xml":
            return ".svg";
          case "image/tiff":
            return ".tiff";
          case "image/avif":
            return ".avif";
          case "image/x-icon":
          case "image/vnd.microsoft.icon":
            return ".ico";
          default:
            return null
        }
      },
      te = VV => {
        let eV = "";
        for (let xV = 0; xV < VV.length; xV++) eV += String.fromCharCode(VV[xV]);
        return btoa(eV)
      },
      Fe = (VV, eV) => {
        if (VV.length !== eV.length) return !1;
        for (let xV = 0; xV < VV.length; xV++)
          if (VV[xV] !== eV[xV]) return !1;
        return !0
      },
      Te = () => {
        Symbol.dispose ??= Symbol("Symbol.dispose")
      },
      Pe = VV => "number" === typeof VV && !Number.isNaN(VV),
      Ae = (VV, eV) => {
        if (eV.includes("://")) return eV;
        if (VV.includes("://")) {
          const eV = VV.indexOf("?"); - 1 !== eV && (VV = VV.slice(0, eV))
        }
        let xV;
        if (eV.startsWith("/")) {
          const JV = VV.indexOf("://");
          if (-1 === JV) xV = eV;
          else {
            const YV = VV.indexOf("/", JV + 3);
            xV = -1 === YV ? VV + eV : VV.slice(0, YV) + eV
          }
        } else {
          const JV = VV.lastIndexOf("/");
          xV = -1 === JV ? eV : VV.slice(0, JV + 1) + eV
        }
        let JV = "";
        const YV = xV.indexOf("://");
        if (-1 !== YV) {
          const VV = xV.indexOf("/", YV + 3); - 1 !== VV && (JV = xV.slice(0, VV), xV = xV.slice(VV))
        }
        const UV = xV.split("/"),
          yV = [];
        for (const pV of UV) ".." === pV ? yV.pop() : "." !== pV && yV.push(pV);
        return JV + yV.join("/")
      },
      Ne = (VV, eV) => {
        let xV = -1,
          JV = 1 / 0;
        for (let YV = 0; YV < VV.length; YV++) {
          const UV = eV(VV[YV]);
          UV < JV && (JV = UV, xV = YV)
        }
        return xV
      },
      Xe = (VV, eV) => {
        let xV = -1,
          JV = -1 / 0;
        for (let YV = 0; YV < VV.length; YV++) {
          const UV = eV(VV[YV]);
          UV > JV && (JV = UV, xV = YV)
        }
        return xV
      },
      Me = VV => {
        JV(Number.isInteger(VV.num)), JV(Number.isInteger(VV.den)), JV(0 !== VV.den);
        let eV = Math.abs(VV.num),
          xV = Math.abs(VV.den);
        for (; 0 !== xV;) {
          const VV = eV % xV;
          eV = xV, xV = VV
        }
        const YV = eV || 1;
        return {
          num: VV.num / YV,
          den: VV.den / YV
        }
      },
      ze = (VV, eV) => {
        if ("object" !== typeof VV || !VV) throw new TypeError(`${eV} must be an object.`);
        if (!Number.isInteger(VV.left) || VV.left < 0) throw new TypeError(`${eV}.left must be a non-negative integer.`);
        if (!Number.isInteger(VV.top) || VV.top < 0) throw new TypeError(`${eV}.top must be a non-negative integer.`);
        if (!Number.isInteger(VV.width) || VV.width < 0) throw new TypeError(`${eV}.width must be a non-negative integer.`);
        if (!Number.isInteger(VV.height) || VV.height < 0) throw new TypeError(`${eV}.height must be a non-negative integer.`)
      };
    let Ge, We = 1;
    const Re = new Map,
      ge = new Map,
      De = () => "undefined" === typeof window,
      ie = () => {
        const VV = new Map,
          eV = new Map;
        self.onmessage = xV => {
          const JV = xV.data;
          switch (JV.type) {
            case "set-timeout": {
              const eV = setTimeout((() => {
                VV.delete(JV.timerId), self.postMessage({
                  type: "fire",
                  timerId: JV.timerId
                })
              }), JV.delay);
              VV.set(JV.timerId, eV)
            }
            break;
            case "set-interval": {
              const VV = setInterval((() => {
                self.postMessage({
                  type: "fire",
                  timerId: JV.timerId
                })
              }), JV.delay);
              eV.set(JV.timerId, VV)
            }
            break;
            case "clear-timeout": {
              const eV = VV.get(JV.timerId);
              void 0 !== eV && (clearTimeout(eV), VV.delete(JV.timerId))
            }
            break;
            case "clear-interval": {
              const VV = eV.get(JV.timerId);
              void 0 !== VV && (clearInterval(VV), eV.delete(JV.timerId))
            }
          }
        }
      },
      Ce = () => {
        if (Ge) return Ge;
        const VV = `(${ie.toString()})();`,
          eV = URL.createObjectURL(new Blob([VV], {
            type: "text/javascript"
          }));
        return Ge = new Worker(eV), URL.revokeObjectURL(eV), Ge.onmessage = VV => {
          const eV = VV.data,
            xV = Re.get(eV.timerId);
          if (xV) return Re.delete(eV.timerId), void xV();
          const JV = ge.get(eV.timerId);
          JV && JV()
        }, Ge
      },
      ae = (VV, eV) => {
        if (De()) return {
          id: setInterval(VV, eV)
        };
        const xV = We++;
        return ge.set(xV, (() => {
          VV()
        })), Ce().postMessage({
          type: "set-interval",
          timerId: xV,
          delay: eV
        }), {
          id: xV
        }
      },
      oe = VV => {
        De() ? clearInterval(VV.id) : (JV("number" === typeof VV.id), ge.delete(VV.id), Ce().postMessage({
          type: "clear-interval",
          timerId: VV.id
        }))
      },
      ce = VV => new Promise((eV => setTimeout(eV, VV))),
      he = VV => Array.isArray(VV) ? VV : [VV];
    class le {
      constructor() {
        this._listeners = new Map
      }
      on(VV, eV, xV) {
        this._listeners.has(VV) || this._listeners.set(VV, new Set);
        const JV = {
          bZ: eV,
          once: xV?.once ?? !1
        };
        return this._listeners.get(VV).add(JV), () => {
          this._listeners.get(VV)?.delete(JV)
        }
      }
      _emit() {
        for (var VV = arguments.length, eV = new Array(VV), xV = 0; xV < VV; xV++) eV[xV] = arguments[xV];
        const [JV, YV] = eV, UV = this._listeners.get(JV);
        if (UV)
          for (const pV of UV) {
            try {
              pV.bZ(YV)
            } catch (yV) {
              console.error(yV)
            }
            pV.once && UV.delete(pV)
          }
      }
    }
    const Le = VV => null !== VV && "object" === typeof VV && Object.getPrototypeOf(VV) === Object.prototype && Object.values(VV).every((VV => "string" === typeof VV))
  },
  34946: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => Cx,
      g: () => ax,
      k: () => ix,
      m: () => gx,
      o: () => cx
    });
    var JV = xV(34955),
      YV = xV(34965);
    var UV;
    ! function(VV) {
      VV[VV.FrameCount = 1] = "FrameCount", VV[VV.FileSize = 2] = "FileSize", VV[VV.Toc = 4] = "Toc"
    }(UV || (UV = {}));
    var yV = xV(34973),
      pV = xV(34933);
    class QV {
      constructor(VV, eV, xV, JV, YV) {
        this.bytes = VV, this.view = eV, this.offset = xV, this.start = JV, this.end = YV, this.bufferPos = JV - xV
      }
      static tempFromBytes(VV) {
        return new QV(VV, (0, pV.rd)(VV), 0, 0, VV.length)
      }
      get length() {
        return this.end - this.start
      }
      get filePos() {
        return this.offset + this.bufferPos
      }
      set filePos(VV) {
        this.bufferPos = VV - this.offset
      }
      get remainingLength() {
        return Math.max(this.end - this.filePos, 0)
      }
      skip(VV) {
        this.bufferPos += VV
      }
      slice(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.end - VV;
        if (VV < this.start || VV + eV > this.end) throw new RangeError("Slicing outside of original slice.");
        return new QV(this.bytes, this.view, this.offset, VV, VV + eV)
      }
    }
    const nV = (VV, eV) => {
        if (VV.filePos < VV.start || VV.filePos + eV > VV.end) throw new RangeError(`Tried reading [${VV.filePos}, ${VV.filePos+eV}), but slice is [${VV.start}, ${VV.end}). This is likely an internal error, please report it alongside the file that caused it.`)
      },
      wV = (VV, eV) => {
        nV(VV, eV);
        const xV = VV.bytes.subarray(VV.bufferPos, VV.bufferPos + eV);
        return VV.bufferPos += eV, xV
      };
    var ZV, vV;
    ! function(VV) {
      VV[VV.Unsynchronisation = 128] = "Unsynchronisation", VV[VV.ExtendedHeader = 64] = "ExtendedHeader", VV[VV.ExperimentalIndicator = 32] = "ExperimentalIndicator", VV[VV.Footer = 16] = "Footer"
    }(ZV || (ZV = {})),
    function(VV) {
      VV[VV.ISO_8859_1 = 0] = "ISO_8859_1", VV[VV.UTF_16_WITH_BOM = 1] = "UTF_16_WITH_BOM", VV[VV.UTF_16_BE_NO_BOM = 2] = "UTF_16_BE_NO_BOM", VV[VV.UTF_8 = 3] = "UTF_8"
    }(vV || (vV = {}));
    var rV = xV(34939);
    class kV {
      constructor(VV) {
        this.mutex = new pV.b, this.trackTimestampInfo = new WeakMap, this.output = VV
      }
      onTrackClose(VV) {}
      validateTimestamp(VV, eV, xV) {
        let JV = this.trackTimestampInfo.get(VV);
        if (JV) {
          if (xV && (JV.maxTimestampBeforeLastKeyPacket = JV.maxTimestamp), null !== JV.maxTimestampBeforeLastKeyPacket && eV < JV.maxTimestampBeforeLastKeyPacket) throw new Error(`Timestamps cannot be smaller than the largest timestamp of the previous GOP (a GOP begins with a key packet and ends right before the next key packet). Got ${eV}s, but largest timestamp is ${JV.maxTimestampBeforeLastKeyPacket}s.`);
          JV.maxTimestamp = Math.max(JV.maxTimestamp, eV)
        } else {
          if (!xV) throw new Error("First packet must be a key packet.");
          JV = {
            maxTimestamp: eV,
            maxTimestampBeforeLastKeyPacket: null
          }, this.trackTimestampInfo.set(VV, JV)
        }
      }
    }
    var bV = xV(34968),
      EV = xV(34963);
    var BV = xV(34990),
      jV = xV(34981);
    class qV {
      constructor(VV) {
        this.writer = VV, this.helper = new Uint8Array(8), this.helperView = new DataView(this.helper.buffer), this.offsets = new WeakMap
      }
      writeU32(VV) {
        this.helperView.setUint32(0, VV, !1), this.writer.write(this.helper.subarray(0, 4))
      }
      writeU64(VV) {
        this.helperView.setUint32(0, Math.floor(VV / 2 ** 32), !1), this.helperView.setUint32(4, VV, !1), this.writer.write(this.helper.subarray(0, 8))
      }
      writeAscii(VV) {
        for (let eV = 0; eV < VV.length; eV++) this.helperView.setUint8(eV % 8, VV.charCodeAt(eV)), eV % 8 === 7 && this.writer.write(this.helper);
        VV.length % 8 !== 0 && this.writer.write(this.helper.subarray(0, VV.length % 8))
      }
      writeBox(VV) {
        if (this.offsets.set(VV, this.writer.getPos()), VV.contents && !VV.children) this.writeBoxHeader(VV, VV.size ?? VV.contents.byteLength + 8), this.writer.write(VV.contents);
        else {
          const eV = this.writer.getPos();
          if (this.writeBoxHeader(VV, 0), VV.contents && this.writer.write(VV.contents), VV.children)
            for (const YV of VV.children) YV && this.writeBox(YV);
          const xV = this.writer.getPos(),
            JV = VV.size ?? xV - eV;
          this.writer.seek(eV), this.writeBoxHeader(VV, JV), this.writer.seek(xV)
        }
      }
      writeBoxHeader(VV, eV) {
        this.writeU32(VV.largeSize ? 1 : eV), this.writeAscii(VV.type), VV.largeSize && this.writeU64(eV)
      }
      measureBoxHeader(VV) {
        return 8 + (VV.largeSize ? 8 : 0)
      }
      patchBox(VV) {
        const eV = this.offsets.get(VV);
        (0, pV.L)(void 0 !== eV);
        const xV = this.writer.getPos();
        this.writer.seek(eV), this.writeBox(VV), this.writer.seek(xV)
      }
      measureBox(VV) {
        if (VV.contents && !VV.children) {
          return this.measureBoxHeader(VV) + VV.contents.byteLength
        } {
          let eV = this.measureBoxHeader(VV);
          if (VV.contents && (eV += VV.contents.byteLength), VV.children)
            for (const xV of VV.children) xV && (eV += this.measureBox(xV));
          return eV
        }
      }
    }
    const tV = new Uint8Array(8),
      FV = new DataView(tV.buffer),
      TV = VV => [(VV % 256 + 256) % 256],
      PV = VV => (FV.setUint16(0, VV, !1), [tV[0], tV[1]]),
      AV = VV => (FV.setInt16(0, VV, !1), [tV[0], tV[1]]),
      NV = VV => (FV.setUint32(0, VV, !1), [tV[1], tV[2], tV[3]]),
      XV = VV => (FV.setUint32(0, VV, !1), [tV[0], tV[1], tV[2], tV[3]]),
      MV = VV => (FV.setInt32(0, VV, !1), [tV[0], tV[1], tV[2], tV[3]]),
      zV = VV => (FV.setUint32(0, Math.floor(VV / 2 ** 32), !1), FV.setUint32(4, VV, !1), [tV[0], tV[1], tV[2], tV[3], tV[4], tV[5], tV[6], tV[7]]),
      GV = VV => (FV.setInt32(0, Math.floor(VV / 2 ** 32), !1), FV.setUint32(4, VV, !1), [tV[0], tV[1], tV[2], tV[3], tV[4], tV[5], tV[6], tV[7]]),
      WV = VV => (FV.setInt16(0, 256 * VV, !1), [tV[0], tV[1]]),
      RV = VV => (FV.setInt32(0, 65536 * VV, !1), [tV[0], tV[1], tV[2], tV[3]]),
      gV = VV => (FV.setInt32(0, 2 ** 30 * VV, !1), [tV[0], tV[1], tV[2], tV[3]]),
      DV = (VV, eV) => {
        const xV = [];
        let JV = VV;
        do {
          let VV = 127 & JV;
          JV >>= 7, xV.length > 0 && (VV |= 128), xV.push(VV), void 0 !== eV && eV--
        } while (JV > 0 || eV);
        return xV.reverse()
      },
      iV = function(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const xV = Array(VV.length).fill(null).map(((eV, xV) => VV.charCodeAt(xV)));
        return eV && xV.push(0), xV
      },
      CV = VV => [RV(VV[0]), RV(VV[1]), gV(VV[2]), RV(VV[3]), RV(VV[4]), gV(VV[5]), RV(VV[6]), RV(VV[7]), gV(VV[8])],
      aV = (VV, eV, xV) => ({
        type: VV,
        contents: eV && new Uint8Array(eV.flat(10)),
        children: xV
      }),
      oV = (VV, eV, xV, JV, YV) => aV(VV, [TV(eV), NV(xV), JV ?? []], YV),
      cV = () => aV("styp", [iV("iso5"), XV(0), iV("iso5"), iV("iso6"), iV("mp41"), iV("cmfc"), iV("dash")]),
      hV = (VV, eV) => {
        const xV = Math.max(0, VV.minWrittenTimestamp);
        let JV = Math.max(0, VV.maxWrittenEndTimestamp - xV);
        return Number.isFinite(JV) || (JV = 0), oV("sidx", 1, 0, [XV(1), XV(wx), zV(vx(xV, wx)), zV(0), PV(0), PV(1), XV(2147483647 & eV), XV(vx(JV, wx)), XV(0)])
      },
      lV = VV => ({
        type: "mdat",
        largeSize: VV
      }),
      LV = VV => aV("moov", void 0, [fV(VV.creationTime, VV.trackDatas), ...VV.trackDatas.map((eV => mV(eV, VV.creationTime))), VV.isFragmented ? We(VV.trackDatas) : null, Ke(VV)]),
      fV = (VV, eV) => {
        const xV = Math.max(0, ...eV.map((VV => Math.max(0, vx(rx(VV), wx) + vx(VV.startTimestampOffset ?? 0, wx))))),
          JV = Math.max(0, ...eV.map((VV => VV.track.id))) + 1,
          YV = !(0, pV.dc)(VV) || !(0, pV.dc)(xV),
          UV = YV ? zV : XV;
        return oV("mvhd", +YV, 0, [UV(VV), UV(VV), XV(wx), UV(xV), RV(1), WV(1), Array(10).fill(0), CV(pV.i), Array(24).fill(0), XV(JV)])
      },
      mV = (VV, eV) => {
        const xV = Zx(VV),
          JV = null !== VV.startTimestampOffset && 0 !== VV.startTimestampOffset;
        return aV("trak", void 0, [KV(VV, eV), JV ? HV(VV) : null, uV(VV, eV), void 0 !== xV.name ? aV("udta", void 0, [aV("name", [...pV.ld.encode(xV.name)])]) : null])
      },
      KV = (VV, eV) => {
        const xV = Math.max(0, vx(rx(VV), wx) + vx(VV.startTimestampOffset ?? 0, wx)),
          JV = !(0, pV.dc)(eV) || !(0, pV.dc)(xV),
          YV = JV ? zV : XV;
        let UV;
        if ("video" === VV.type && VV.track.metadata.transformationMatrix) UV = VV.track.metadata.transformationMatrix;
        else if ("video" === VV.type) {
          const {
            rotation: eV,
            flip: xV
          } = VV.track.metadata, JV = (0, pV.xc)((0, pV.Qc)(eV ?? 0), (0, pV.Vc)(xV ? -1 : 1, 1));
          UV = (0, pV._)(JV, VV.info.width, VV.info.height)
        } else UV = pV.i;
        let yV = 2;
        !1 !== VV.track.metadata.disposition?.default && (yV |= 1);
        const QV = "video" === VV.type ? 0 : "audio" === VV.type ? 1 : "subtitle" === VV.type ? 2 : (0, pV.J)(VV);
        return oV("tkhd", +JV, yV, [YV(eV), YV(eV), XV(VV.track.id), XV(0), YV(xV), Array(8).fill(0), PV(0), PV(QV), WV("audio" === VV.type ? 1 : 0), PV(0), CV(UV), RV("video" === VV.type ? VV.info.width : 0), RV("video" === VV.type ? VV.info.height : 0)])
      },
      HV = VV => {
        const eV = VV.startTimestampOffset;
        if ((0, pV.L)(null !== eV), eV > 0) {
          const xV = vx(eV, wx),
            JV = vx(rx(VV), wx),
            YV = !(0, pV.dc)(xV) || !(0, pV.dc)(JV),
            UV = YV ? zV : XV,
            yV = YV ? GV : MV;
          return aV("edts", void 0, [oV("elst", YV ? 1 : 0, 0, [XV(2), UV(xV), yV(-1), RV(1), UV(JV), yV(0), RV(1)])])
        } {
          const xV = vx(-eV, VV.timescale),
            JV = Math.max(0, vx(rx(VV), wx) + vx(eV, wx)),
            YV = !(0, pV.Tb)(xV) || !(0, pV.dc)(JV),
            UV = YV ? zV : XV,
            yV = YV ? GV : MV;
          return aV("edts", void 0, [oV("elst", YV ? 1 : 0, 0, [XV(1), UV(JV), yV(xV), RV(1)])])
        }
      },
      uV = (VV, eV) => aV("mdia", void 0, [sV(VV, eV), dV(!0, SV[VV.type], IV[VV.type]), OV(VV)]),
      sV = (VV, eV) => {
        const xV = vx(rx(VV), VV.timescale),
          JV = !(0, pV.dc)(eV) || !(0, pV.dc)(xV),
          YV = JV ? zV : XV;
        return oV("mdhd", +JV, 0, [YV(eV), YV(eV), XV(VV.timescale), YV(xV), PV(yx(VV.track.metadata.languageCode ?? pV.y)), PV(0)])
      },
      SV = {
        video: "vide",
        audio: "soun",
        subtitle: "text"
      },
      IV = {
        video: "MediabunnyVideoHandler",
        audio: "MediabunnySoundHandler",
        subtitle: "MediabunnyTextHandler"
      },
      dV = function(VV, eV, xV) {
        let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "\0\0\0\0";
        return oV("hdlr", 0, 0, [VV ? iV("mhlr") : XV(0), iV(eV), iV(JV), XV(0), XV(0), iV(xV, !0)])
      },
      OV = VV => aV("minf", void 0, [Ve[VV.type](), ee(), Ye(VV)]),
      Ve = {
        video: () => oV("vmhd", 0, 1, [PV(0), PV(0), PV(0), PV(0)]),
        audio: () => oV("smhd", 0, 0, [PV(0), PV(0)]),
        subtitle: () => oV("nmhd", 0, 0)
      },
      ee = () => aV("dinf", void 0, [xe()]),
      xe = () => oV("dref", 0, 0, [XV(1)], [Je()]),
      Je = () => oV("url ", 0, 1),
      Ye = VV => {
        const eV = VV.compositionTimeOffsetTable.length > 1 || VV.compositionTimeOffsetTable.some((VV => 0 !== VV.sampleCompositionTimeOffset));
        return aV("stbl", void 0, [Ue(VV), Pe(VV), eV ? ze(VV) : null, eV ? Ge(VV) : null, Ne(VV), Xe(VV), Me(VV), Ae(VV)])
      },
      Ue = VV => {
        let eV;
        if ("video" === VV.type) eV = ye(Vx(VV.track.source._codec, VV.info.decoderConfig.codec), VV);
        else if ("audio" === VV.type) {
          const xV = xx(VV.track.source._codec, VV.info.decoderConfig.codec, VV.muxer.isQuickTime);
          (0, pV.L)(xV), eV = Ze(xV, VV)
        } else "subtitle" === VV.type && (eV = Te(Yx[VV.track.source._codec], VV));
        return (0, pV.L)(eV), oV("stsd", 0, 0, [XV(1)], [eV])
      },
      ye = (VV, eV) => aV(VV, [Array(6).fill(0), PV(1), PV(0), PV(0), Array(12).fill(0), PV(eV.info.width), PV(eV.info.height), XV(4718592), XV(4718592), XV(0), PV(1), TV(jV.c.length), iV(jV.c), Array(31 - jV.c.length).fill(0), PV(eV.info.hasAlphaChannel ? 32 : 24), AV(65535)], [ex[eV.track.source._codec]?.(eV) ?? null, Qe(eV), (0, pV.lb)(eV.info.decoderConfig.colorSpace) ? null : ne(eV), pe(eV)]),
      pe = VV => 0 === VV.avgBitrate && 0 === VV.maxBitrate ? null : aV("btrt", [XV(0), XV(VV.maxBitrate), XV(VV.avgBitrate)]),
      Qe = VV => VV.info.pixelAspectRatio.num === VV.info.pixelAspectRatio.den ? null : aV("pasp", [XV(VV.info.pixelAspectRatio.num), XV(VV.info.pixelAspectRatio.den)]),
      ne = VV => {
        const eV = VV.info.decoderConfig.colorSpace;
        return aV("colr", [iV(VV.muxer.isQuickTime ? "nclc" : "nclx"), PV(null != eV?.primaries ? pV.c[eV.primaries] : 2), PV(null != eV?.transfer ? pV.r[eV.transfer] : 2), PV(null != eV?.matrix ? pV.k[eV.matrix] : 2), VV.muxer.isQuickTime ? [] : TV((eV?.fullRange ? 1 : 0) << 7)])
      },
      we = VV => {
        if (!VV.info.decoderConfig) return null;
        const eV = VV.info.decoderConfig,
          xV = eV.codec.split("."),
          JV = Number(xV[1]),
          YV = Number(xV[2]),
          UV = (Number(xV[3]) << 4) + ((xV[4] ? Number(xV[4]) : 1) << 1) + (xV[8] ? Number(xV[8]) : Number(eV.colorSpace?.fullRange ?? 0)),
          yV = xV[5] ? Number(xV[5]) : eV.colorSpace?.primaries ? pV.c[eV.colorSpace.primaries] : 1,
          QV = xV[6] ? Number(xV[6]) : eV.colorSpace?.transfer ? pV.r[eV.colorSpace.transfer] : 1,
          nV = xV[7] ? Number(xV[7]) : eV.colorSpace?.matrix ? pV.k[eV.colorSpace.matrix] : 1;
        return oV("vpcC", 1, 0, [TV(JV), TV(YV), TV(UV), TV(yV), TV(QV), TV(nV), PV(0)])
      },
      Ze = (VV, eV) => {
        let xV, JV = 0,
          UV = 16;
        const yV = YV.i.includes(eV.track.source._codec);
        if (yV) {
          const VV = eV.track.source._codec,
            {
              sampleSize: xV
            } = (0, YV.J)(VV);
          UV = 8 * xV, UV > 16 && (JV = 1)
        }
        if (eV.muxer.isQuickTime && (JV = 1), 0 === JV) xV = [Array(6).fill(0), PV(1), PV(JV), PV(0), XV(0), PV(eV.info.numberOfChannels), PV(UV), PV(0), PV(0), PV(eV.info.sampleRate < 65536 ? eV.info.sampleRate : 0), PV(0)];
        else {
          const VV = yV ? 0 : -2;
          xV = [Array(6).fill(0), PV(1), PV(JV), PV(0), XV(0), PV(eV.info.numberOfChannels), PV(Math.min(UV, 16)), AV(VV), PV(0), PV(eV.info.sampleRate < 65536 ? eV.info.sampleRate : 0), PV(0), yV ? [XV(1), XV(UV / 8), XV(eV.info.numberOfChannels * UV / 8)] : [XV(0), XV(0), XV(0)], XV(2)]
        }
        return aV(VV, xV, [Jx(eV.track.source._codec, eV.muxer.isQuickTime)?.(eV) ?? null, pe(eV)])
      },
      ve = VV => {
        let eV;
        switch (VV.track.source._codec) {
          case "aac":
            eV = 64;
            break;
          case "mp3":
            eV = 107;
            break;
          case "vorbis":
            eV = 221;
            break;
          default:
            throw new Error(`Unhandled audio codec: ${VV.track.source._codec}`)
        }
        let xV = [...TV(eV), ...TV(21), ...NV(0), ...XV(VV.maxBitrate), ...XV(VV.avgBitrate)];
        if (VV.info.decoderConfig.description) {
          const eV = (0, pV.sd)(VV.info.decoderConfig.description);
          xV = [...xV, ...TV(5), ...DV(eV.byteLength), ...eV]
        }
        return xV = [...PV(1), ...TV(0), ...TV(4), ...DV(xV.length), ...xV, ...TV(6), ...TV(1), ...TV(2)], xV = [...TV(3), ...DV(xV.length), ...xV], oV("esds", 0, 0, xV)
      },
      re = VV => aV("wave", void 0, [ke(VV), be(VV), aV("\0\0\0\0")]),
      ke = VV => aV("frma", [iV(xx(VV.track.source._codec, VV.info.decoderConfig.codec, VV.muxer.isQuickTime))]),
      be = VV => {
        const {
          littleEndian: eV
        } = (0, YV.J)(VV.track.source._codec);
        return aV("enda", [PV(+eV)])
      },
      Ee = VV => {
        let eV = VV.info.numberOfChannels,
          xV = 3840,
          JV = VV.info.sampleRate,
          YV = 0,
          UV = 0,
          yV = new Uint8Array(0);
        const QV = VV.info.decoderConfig?.description;
        if (QV) {
          (0, pV.L)(QV.byteLength >= 18);
          const VV = (0, pV.sd)(QV),
            nV = (0, bV.nb)(VV);
          eV = nV.outputChannelCount, xV = nV.preSkip, JV = nV.inputSampleRate, YV = nV.outputGain, UV = nV.channelMappingFamily, nV.channelMappingTable && (yV = nV.channelMappingTable)
        }
        return aV("dOps", [TV(0), TV(eV), PV(xV), XV(JV), AV(YV), TV(UV), ...yV])
      },
      Be = VV => {
        const eV = VV.info.decoderConfig?.description;
        (0, pV.L)(eV);
        const xV = (0, pV.sd)(eV);
        return oV("dfLa", 0, 0, [...xV.subarray(4)])
      },
      je = VV => {
        const {
          littleEndian: eV,
          sampleSize: xV
        } = (0, YV.J)(VV.track.source._codec);
        return oV("pcmC", 0, 0, [TV(+eV), TV(8 * xV)])
      },
      qe = VV => {
        (0, pV.L)(VV.info.primingPacket);
        const eV = (0, bV.gb)(VV.info.primingPacket.data);
        if (!eV) throw new Error("Couldn't extract AC-3 frame info from the audio packet. Ensure the packets contain valid AC-3 sync frames (as specified in ETSI TS 102 366).");
        const xV = new Uint8Array(3),
          JV = new EV.b(xV);
        return JV.writeBits(2, eV.fscod), JV.writeBits(5, eV.bsid), JV.writeBits(3, eV.bsmod), JV.writeBits(3, eV.acmod), JV.writeBits(1, eV.lfeon), JV.writeBits(5, eV.bitRateCode), JV.writeBits(5, 0), aV("dac3", [...xV])
      },
      te = VV => {
        (0, pV.L)(VV.info.primingPacket);
        const eV = (0, bV.jb)(VV.info.primingPacket.data);
        if (!eV) throw new Error("Couldn't extract E-AC-3 frame info from the audio packet. Ensure the packets contain valid E-AC-3 sync frames (as specified in ETSI TS 102 366).");
        let xV = 16;
        for (const yV of eV.substreams) xV += 23, yV.numDepSub > 0 ? xV += 9 : xV += 1;
        const JV = Math.ceil(xV / 8),
          YV = new Uint8Array(JV),
          UV = new EV.b(YV);
        UV.writeBits(13, eV.dataRate), UV.writeBits(3, eV.substreams.length - 1);
        for (const yV of eV.substreams) UV.writeBits(2, yV.fscod), UV.writeBits(5, yV.bsid), UV.writeBits(1, 0), UV.writeBits(1, 0), UV.writeBits(3, yV.bsmod), UV.writeBits(3, yV.acmod), UV.writeBits(1, yV.lfeon), UV.writeBits(3, 0), UV.writeBits(4, yV.numDepSub), yV.numDepSub > 0 ? UV.writeBits(9, yV.chanLoc) : UV.writeBits(1, 0);
        return aV("dec3", [...YV])
      },
      Fe = VV => {
        (0, pV.L)(VV.info.primingPacket);
        const eV = (0, bV.hb)(VV.info.primingPacket.data);
        if (!eV) throw new Error("Couldn't extract DTS frame info from the audio packet. Ensure the packets contain valid DTS frames as specified in ETSI TS 102 114.");
        return aV("ddts", [...(0, bV.t)(eV)])
      },
      Te = (VV, eV) => aV(VV, [Array(6).fill(0), PV(1)], [Ux[eV.track.source._codec](eV), pe(eV)]),
      Pe = VV => oV("stts", 0, 0, [XV(VV.timeToSampleTable.length), VV.timeToSampleTable.map((VV => [XV(VV.sampleCount), XV(VV.sampleDelta)]))]),
      Ae = VV => {
        if (VV.samples.every((VV => "key" === VV.type))) return null;
        const eV = [...VV.samples.entries()].filter((VV => {
          let [, eV] = VV;
          return "key" === eV.type
        }));
        return oV("stss", 0, 0, [XV(eV.length), eV.map((VV => {
          let [eV] = VV;
          return XV(eV + 1)
        }))])
      },
      Ne = VV => oV("stsc", 0, 0, [XV(VV.compactlyCodedChunkTable.length), VV.compactlyCodedChunkTable.map((VV => [XV(VV.firstChunk), XV(VV.samplesPerChunk), XV(1)]))]),
      Xe = VV => {
        if ("audio" === VV.type && VV.info.requiresPcmTransformation) {
          const {
            sampleSize: eV
          } = (0, YV.J)(VV.track.source._codec);
          return oV("stsz", 0, 0, [XV(eV * VV.info.numberOfChannels), XV(VV.samples.reduce(((eV, xV) => eV + vx(xV.duration, VV.timescale)), 0))])
        }
        return oV("stsz", 0, 0, [XV(0), XV(VV.samples.length), VV.samples.map((VV => XV(VV.size)))])
      },
      Me = VV => VV.finalizedChunks.length > 0 && (0, pV.jc)(VV.finalizedChunks).offset >= 2 ** 32 ? oV("co64", 0, 0, [XV(VV.finalizedChunks.length), VV.finalizedChunks.map((VV => zV(VV.offset)))]) : oV("stco", 0, 0, [XV(VV.finalizedChunks.length), VV.finalizedChunks.map((VV => XV(VV.offset)))]),
      ze = VV => oV("ctts", 1, 0, [XV(VV.compositionTimeOffsetTable.length), VV.compositionTimeOffsetTable.map((VV => [XV(VV.sampleCount), MV(VV.sampleCompositionTimeOffset)]))]),
      Ge = VV => {
        let eV = 1 / 0,
          xV = -1 / 0,
          JV = 1 / 0,
          YV = -1 / 0;
        (0, pV.L)(VV.compositionTimeOffsetTable.length > 0), (0, pV.L)(VV.samples.length > 0);
        for (let yV = 0; yV < VV.compositionTimeOffsetTable.length; yV++) {
          const JV = VV.compositionTimeOffsetTable[yV];
          eV = Math.min(eV, JV.sampleCompositionTimeOffset), xV = Math.max(xV, JV.sampleCompositionTimeOffset)
        }
        for (let yV = 0; yV < VV.samples.length; yV++) {
          const eV = VV.samples[yV];
          JV = Math.min(JV, vx(eV.timestamp, VV.timescale)), YV = Math.max(YV, vx(eV.timestamp + eV.duration, VV.timescale))
        }
        const UV = Math.max(-eV, 0);
        return YV >= 2 ** 31 ? null : oV("cslg", 0, 0, [MV(UV), MV(eV), MV(xV), MV(JV), MV(YV)])
      },
      We = VV => aV("mvex", void 0, VV.map(Re)),
      Re = VV => oV("trex", 0, 0, [XV(VV.track.id), XV(1), XV(0), XV(0), XV(0)]),
      ge = (VV, eV) => aV("moof", void 0, [De(VV), ...eV.map(Ce)]),
      De = VV => oV("mfhd", 0, 0, [XV(VV)]),
      ie = VV => {
        let eV = 0,
          xV = 0;
        const JV = "delta" === VV.type;
        return xV |= +JV, eV |= JV ? 1 : 2, eV << 24 | xV << 16
      },
      Ce = VV => aV("traf", void 0, [ae(VV), oe(VV), ce(VV)]),
      ae = VV => {
        (0, pV.L)(VV.currentChunk);
        let eV = 0;
        eV |= 8, eV |= 16, eV |= 32, eV |= 131072;
        const xV = VV.currentChunk.samples[1] ?? VV.currentChunk.samples[0],
          JV = {
            duration: xV.timescaleUnitsToNextSample,
            size: xV.size,
            flags: ie(xV)
          };
        return oV("tfhd", 0, 131128, [XV(VV.track.id), XV(JV.duration), XV(JV.size), XV(JV.flags)])
      },
      oe = VV => ((0, pV.L)(VV.currentChunk), oV("tfdt", 1, 0, [zV(vx(VV.currentChunk.startTimestamp, VV.timescale))])),
      ce = VV => {
        (0, pV.L)(VV.currentChunk);
        const eV = VV.currentChunk.samples.map((VV => VV.timescaleUnitsToNextSample)),
          xV = VV.currentChunk.samples.map((VV => VV.size)),
          JV = VV.currentChunk.samples.map(ie),
          YV = VV.currentChunk.samples.map((eV => vx(eV.timestamp - eV.decodeTimestamp, VV.timescale))),
          UV = new Set(eV),
          yV = new Set(xV),
          QV = new Set(JV),
          nV = new Set(YV),
          wV = 2 === QV.size && JV[0] !== JV[1],
          ZV = UV.size > 1,
          vV = yV.size > 1,
          rV = !wV && QV.size > 1,
          kV = nV.size > 1 || [...nV].some((VV => 0 !== VV));
        let bV = 0;
        return bV |= 1, bV |= 4 * +wV, bV |= 256 * +ZV, bV |= 512 * +vV, bV |= 1024 * +rV, bV |= 2048 * +kV, oV("trun", 1, bV, [XV(VV.currentChunk.samples.length), XV(VV.currentChunk.offset - VV.currentChunk.moofOffset || 0), wV ? XV(JV[0]) : [], VV.currentChunk.samples.map(((VV, UV) => [ZV ? XV(eV[UV]) : [], vV ? XV(xV[UV]) : [], rV ? XV(JV[UV]) : [], kV ? MV(YV[UV]) : []]))])
      },
      he = VV => oV("tfra", 1, 0, [XV(VV.track.id), XV(63), XV(VV.finalizedChunks.length), VV.finalizedChunks.map((eV => [zV(vx(eV.samples[0].timestamp, VV.timescale)), zV(eV.moofOffset), XV(eV.trafIndex + 1), XV(1), XV(1)]))]),
      le = () => oV("mfro", 0, 0, [XV(0)]),
      Le = () => aV("vtte"),
      fe = (VV, eV, xV, JV, YV) => aV("vttc", void 0, [null !== YV ? aV("vsid", [MV(YV)]) : null, null !== xV ? aV("iden", [...pV.ld.encode(xV)]) : null, null !== eV ? aV("ctim", [...pV.ld.encode((0, BV.g)(eV))]) : null, null !== JV ? aV("sttg", [...pV.ld.encode(JV)]) : null, aV("payl", [...pV.ld.encode(VV)])]),
      me = VV => aV("vtta", [...pV.ld.encode(VV)]),
      Ke = VV => {
        const eV = [],
          xV = VV.format._options.metadataFormat ?? "auto",
          JV = VV.output._metadataTags;
        if ("mdir" === xV || "auto" === xV && !VV.isQuickTime) {
          const VV = Ie(JV);
          VV && eV.push(VV)
        } else if ("mdta" === xV) {
          const VV = de(JV);
          VV && eV.push(VV)
        } else("udta" === xV || "auto" === xV && VV.isQuickTime) && He(eV, VV.output._metadataTags);
        return 0 === eV.length ? null : aV("udta", void 0, eV)
      },
      He = (VV, eV) => {
        for (const {
            key: xV,
            value: JV
          }
          of(0, pV.ic)(eV)) switch (xV) {
          case "title":
            VV.push(ue("\xa9nam", JV));
            break;
          case "description":
            VV.push(ue("\xa9des", JV));
            break;
          case "artist":
            VV.push(ue("\xa9ART", JV));
            break;
          case "album":
            VV.push(ue("\xa9alb", JV));
            break;
          case "albumArtist":
            VV.push(ue("albr", JV));
            break;
          case "genre":
            VV.push(ue("\xa9gen", JV));
            break;
          case "date":
            VV.push(ue("\xa9day", JV.toISOString().slice(0, 10)));
            break;
          case "comment":
            VV.push(ue("\xa9cmt", JV));
            break;
          case "lyrics":
            VV.push(ue("\xa9lyr", JV));
            break;
          case "raw":
          case "discNumber":
          case "discsTotal":
          case "trackNumber":
          case "tracksTotal":
          case "beatsPerMinute":
          case "images":
            break;
          default:
            (0, pV.J)(xV)
        }
        if (eV.raw)
          for (const xV in eV.raw) {
            const JV = eV.raw[xV];
            null == JV || 4 !== xV.length || VV.some((VV => VV.type === xV)) || ("string" === typeof JV ? VV.push(ue(xV, JV)) : JV instanceof Uint8Array && VV.push(aV(xV, Array.from(JV))))
          }
      },
      ue = (VV, eV) => {
        const xV = pV.ld.encode(eV);
        return aV(VV, [PV(xV.length), PV(yx("und")), Array.from(xV)])
      },
      se = {
        "image/jpeg": 13,
        "image/png": 14,
        "image/bmp": 27
      },
      Se = (VV, eV) => {
        const xV = [];
        for (const {
            key: JV,
            value: YV
          }
          of(0, pV.ic)(VV)) switch (JV) {
          case "title":
            xV.push({
              key: eV ? "title" : "\xa9nam",
              value: Oe(YV)
            });
            break;
          case "description":
            xV.push({
              key: eV ? "description" : "\xa9des",
              value: Oe(YV)
            });
            break;
          case "artist":
            xV.push({
              key: eV ? "artist" : "\xa9ART",
              value: Oe(YV)
            });
            break;
          case "album":
            xV.push({
              key: eV ? "album" : "\xa9alb",
              value: Oe(YV)
            });
            break;
          case "albumArtist":
            xV.push({
              key: eV ? "album_artist" : "aART",
              value: Oe(YV)
            });
            break;
          case "comment":
            xV.push({
              key: eV ? "comment" : "\xa9cmt",
              value: Oe(YV)
            });
            break;
          case "genre":
            xV.push({
              key: eV ? "genre" : "\xa9gen",
              value: Oe(YV)
            });
            break;
          case "beatsPerMinute":
            eV || xV.push({
              key: "tmpo",
              value: aV("data", [XV(21), XV(0), PV(YV)])
            });
            break;
          case "lyrics":
            xV.push({
              key: eV ? "lyrics" : "\xa9lyr",
              value: Oe(YV)
            });
            break;
          case "date":
            xV.push({
              key: eV ? "date" : "\xa9day",
              value: Oe(YV.toISOString().slice(0, 10))
            });
            break;
          case "images":
            for (const VV of YV) "coverFront" === VV.kind && xV.push({
              key: "covr",
              value: aV("data", [XV(se[VV.mimeType] ?? 0), XV(0), Array.from(VV.data)])
            });
            break;
          case "trackNumber":
            if (eV) {
              const eV = void 0 !== VV.tracksTotal ? `${YV}/${VV.tracksTotal}` : YV.toString();
              xV.push({
                key: "track",
                value: Oe(eV)
              })
            } else xV.push({
              key: "trkn",
              value: aV("data", [XV(0), XV(0), PV(0), PV(YV), PV(VV.tracksTotal ?? 0), PV(0)])
            });
            break;
          case "discNumber":
            eV || xV.push({
              key: "disc",
              value: aV("data", [XV(0), XV(0), PV(0), PV(YV), PV(VV.discsTotal ?? 0), PV(0)])
            });
            break;
          case "tracksTotal":
          case "discsTotal":
          case "raw":
            break;
          default:
            (0, pV.J)(JV)
        }
        if (VV.raw)
          for (const JV in VV.raw) {
            const YV = VV.raw[JV];
            null == YV || !eV && 4 !== JV.length || xV.some((VV => VV.key === JV)) || ("string" === typeof YV ? xV.push({
              key: JV,
              value: Oe(YV)
            }) : YV instanceof Uint8Array ? xV.push({
              key: JV,
              value: aV("data", [XV(0), XV(0), Array.from(YV)])
            }) : YV instanceof rV.i && xV.push({
              key: JV,
              value: aV("data", [XV(se[YV.mimeType] ?? 0), XV(0), Array.from(YV.data)])
            }))
          }
        return xV
      },
      Ie = VV => {
        const eV = Se(VV, !1);
        return 0 === eV.length ? null : oV("meta", 0, 0, void 0, [dV(!1, "mdir", "", "appl"), aV("ilst", void 0, eV.map((VV => aV(VV.key, void 0, [VV.value]))))])
      },
      de = VV => {
        const eV = Se(VV, !0);
        return 0 === eV.length ? null : aV("meta", void 0, [dV(!1, "mdta", ""), oV("keys", 0, 0, [XV(eV.length)], eV.map((VV => aV("mdta", [...pV.ld.encode(VV.key)])))), aV("ilst", void 0, eV.map(((VV, eV) => {
          const xV = String.fromCharCode(...XV(eV + 1));
          return aV(xV, void 0, [VV.value])
        })))])
      },
      Oe = VV => aV("data", [XV(1), XV(0), ...pV.ld.encode(VV)]),
      Vx = (VV, eV) => {
        switch (VV) {
          case "avc":
            return eV.startsWith("avc3") ? "avc3" : "avc1";
          case "hevc":
            return "hvc1";
          case "vp8":
            return "vp08";
          case "vp9":
            return "vp09";
          case "av1":
            return "av01";
          case "prores":
            return eV
        }
      },
      ex = {
        avc: VV => VV.info.decoderConfig && aV("avcC", [...(0, pV.sd)(VV.info.decoderConfig.description)]),
        hevc: VV => VV.info.decoderConfig && aV("hvcC", [...(0, pV.sd)(VV.info.decoderConfig.description)]),
        vp8: we,
        vp9: we,
        av1: VV => aV("av1C", (0, YV.z)(VV.info.decoderConfig.codec)),
        prores: null
      },
      xx = (VV, eV, xV) => {
        switch (VV) {
          case "aac":
          case "mp3":
          case "vorbis":
            return "mp4a";
          case "opus":
            return "Opus";
          case "flac":
            return "fLaC";
          case "ulaw":
            return "ulaw";
          case "alaw":
            return "alaw";
          case "pcm-u8":
            return "raw ";
          case "pcm-s8":
            return "sowt";
          case "ac3":
            return "ac-3";
          case "eac3":
            return "ec-3";
          case "dts":
            return eV
        }
        if (xV) switch (VV) {
          case "pcm-s16":
            return "sowt";
          case "pcm-s16be":
            return "twos";
          case "pcm-s24":
          case "pcm-s24be":
            return "in24";
          case "pcm-s32":
          case "pcm-s32be":
            return "in32";
          case "pcm-f32":
          case "pcm-f32be":
            return "fl32";
          case "pcm-f64":
          case "pcm-f64be":
            return "fl64"
        } else switch (VV) {
          case "pcm-s16":
          case "pcm-s16be":
          case "pcm-s24":
          case "pcm-s24be":
          case "pcm-s32":
          case "pcm-s32be":
            return "ipcm";
          case "pcm-f32":
          case "pcm-f32be":
          case "pcm-f64":
          case "pcm-f64be":
            return "fpcm"
        }
      },
      Jx = (VV, eV) => {
        switch (VV) {
          case "aac":
          case "mp3":
          case "vorbis":
            return ve;
          case "opus":
            return Ee;
          case "flac":
            return Be;
          case "ac3":
            return qe;
          case "eac3":
            return te;
          case "dts":
            return Fe
        }
        if (eV) switch (VV) {
          case "pcm-s24":
          case "pcm-s24be":
          case "pcm-s32":
          case "pcm-s32be":
          case "pcm-f32":
          case "pcm-f32be":
          case "pcm-f64":
          case "pcm-f64be":
            return re
        } else switch (VV) {
          case "pcm-s16":
          case "pcm-s16be":
          case "pcm-s24":
          case "pcm-s24be":
          case "pcm-s32":
          case "pcm-s32be":
          case "pcm-f32":
          case "pcm-f32be":
          case "pcm-f64":
          case "pcm-f64be":
            return je
        }
        return null
      },
      Yx = {
        webvtt: "wvtt"
      },
      Ux = {
        webvtt: VV => aV("vttC", [...pV.ld.encode(VV.info.config.description)])
      },
      yx = VV => {
        (0, pV.L)(3 === VV.length);
        let eV = 0;
        for (let xV = 0; xV < 3; xV++) eV <<= 5, eV += VV.charCodeAt(xV) - 96;
        return eV
      };
    var px = xV(34998),
      Qx = xV(35006);
    const nx = VV => {
        const eV = VV.filePos,
          xV = wV(VV, 9),
          JV = new EV.b(xV);
        if (4095 !== JV.readBits(12)) return null;
        JV.skipBits(1);
        if (0 !== JV.readBits(2)) return null;
        const YV = JV.readBits(1),
          UV = JV.readBits(2) + 1,
          yV = JV.readBits(4);
        if (15 === yV) return null;
        JV.skipBits(1);
        const pV = JV.readBits(3);
        if (0 === pV) throw new Error("ADTS frames with channel configuration 0 are not supported.");
        JV.skipBits(1), JV.skipBits(1), JV.skipBits(1), JV.skipBits(1);
        const QV = JV.readBits(13);
        JV.skipBits(11);
        const nV = JV.readBits(2) + 1;
        if (1 !== nV) throw new Error("ADTS frames with more than one AAC frame are not supported.");
        let ZV = null;
        return 1 === YV ? VV.filePos -= 2 : ZV = JV.readBits(16), {
          objectType: UV,
          samplingFrequencyIndex: yV,
          channelConfiguration: pV,
          frameLength: QV,
          numberOfAacFrames: nV,
          crcCheck: ZV,
          startPos: eV
        }
      },
      wx = 57600,
      Zx = VV => {
        const eV = {},
          xV = VV.track;
        return void 0 !== xV.metadata.name && (eV.name = xV.metadata.name), eV
      },
      vx = function(VV, eV) {
        const xV = VV * eV;
        return !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? Math.round(xV) : xV
      },
      rx = VV => {
        if (0 === VV.samples.length) return 0;
        let eV = 1 / 0,
          xV = -1 / 0;
        for (let JV = 0; JV < VV.samples.length; JV++) {
          const YV = VV.samples[JV];
          YV.timestamp < eV && (eV = YV.timestamp), YV.timestamp + YV.duration > xV && (xV = YV.timestamp + YV.duration)
        }
        return eV === 1 / 0 ? 0 : xV - eV
      };
    class kx extends kV {
      constructor(VV, eV) {
        super(VV), this.writer = null, this.boxWriter = null, this.initWriter = null, this.initBoxWriter = null, this.auxTarget = new Qx.b, this.auxWriter = new px.c(this.auxTarget, !1), this.auxBoxWriter = new qV(this.auxWriter), this.mdat = null, this.ftypSize = null, this.trackDatas = [], this.allTracksKnown = (0, pV.Gc)(), this.creationTime = Math.floor(Date.now() / 1e3) + 2082844800, this.finalizedChunks = [], this.wroteFragmentedHeader = !1, this.nextFragmentNumber = 1, this.maxWrittenTimestamp = -1 / 0, this.minWrittenTimestamp = 1 / 0, this.maxWrittenEndTimestamp = -1 / 0, this.segmentHeaderSize = null, this.format = eV, this.formatOptions = {
          ...eV._options
        }, this.isQuickTime = eV instanceof ax, this.isCmaf = eV instanceof Cx, this.minimumFragmentDuration = this.formatOptions.minimumFragmentDuration ?? (eV instanceof Cx ? 1 / 0 : 1), this.auxWriter.start()
      }
      async start() {
        const VV = await this.mutex.acquire();
        if (this.isCmaf ? (this.fastStart = "fragmented", this.isFragmented = !0) : (this.writer = await this.output._getRootWriter((VV => void 0 !== this.formatOptions.fastStart ? "fragmented" === this.formatOptions.fastStart : VV instanceof Qx.b)), this.boxWriter = new qV(this.writer), this.fastStart = this.formatOptions.fastStart ?? (this.writer.target instanceof Qx.b && "in-memory"), this.isFragmented = "fragmented" === this.fastStart), this.isCmaf) {
          if (!this.output._hasInitTarget()) throw new Error("CMAF outputs require the initTarget field in OutputOptions to be set; the init segment will be written to it.");
          const VV = await this.output._getInitTarget(),
            eV = new px.c(VV, !0);
          eV.start(), this.initWriter = eV, this.initBoxWriter = new qV(eV)
        }
        const eV = this.output.tracks.some((VV => VV.isVideoTrack() && "avc" === VV.source._codec));
        {
          const VV = this.initBoxWriter ?? this.boxWriter;
          if ((0, pV.L)(VV), this.formatOptions.onFtyp && VV.writer.startTrackingWrites(), VV.writeBox((VV => {
              const eV = 512;
              return VV.isQuickTime ? aV("ftyp", [iV("qt  "), XV(eV), iV("qt  ")]) : VV.fragmented ? VV.cmaf ? aV("ftyp", [iV("iso5"), XV(eV), iV("iso5"), iV("iso6"), iV("mp41"), iV("cmfc"), iV("dash")]) : aV("ftyp", [iV("iso5"), XV(eV), iV("iso5"), iV("iso6"), iV("mp41")]) : aV("ftyp", [iV("isom"), XV(eV), iV("isom"), VV.holdsAvc ? iV("avc1") : [], iV("mp41")])
            })({
              isQuickTime: this.isQuickTime,
              holdsAvc: eV,
              fragmented: this.isFragmented,
              cmaf: this.isCmaf
            })), this.formatOptions.onFtyp) {
            const {
              data: eV,
              start: xV
            } = VV.writer.stopTrackingWrites();
            this.formatOptions.onFtyp(eV, xV)
          }
          this.ftypSize = VV.writer.getPos(), this.isCmaf && await this.initWriter.flush()
        }
        if ("in-memory" === this.fastStart);
        else if ("reserve" === this.fastStart) {
          for (const xV of this.output.tracks)
            if (void 0 === xV.metadata.maximumPacketCount) throw new Error("All tracks must specify maximumPacketCount in their metadata when using fastStart: 'reserve'.")
        } else this.isFragmented || ((0, pV.L)(this.writer), (0, pV.L)(this.boxWriter), this.formatOptions.onMdat && this.writer.startTrackingWrites(), this.mdat = lV(!0), this.boxWriter.writeBox(this.mdat));
        await (this.writer?.flush());
        for (const xV of this.output.tracks) xV.isVideoTrack() && xV.metadata.decoderConfig ? this.getVideoTrackData(xV, xV.metadata.primingPacket ?? null, {
          decoderConfig: xV.metadata.decoderConfig
        }) : xV.isAudioTrack() && xV.metadata.decoderConfig && this.getAudioTrackData(xV, xV.metadata.primingPacket ?? null, {
          decoderConfig: xV.metadata.decoderConfig
        });
        VV()
      }
      allTracksAreKnown() {
        for (const VV of this.output.tracks)
          if (!VV.source._closed && !this.trackDatas.some((eV => eV.track === VV))) return !1;
        return !0
      }
      async getMimeType() {
        await this.allTracksKnown.promise;
        const VV = this.trackDatas.map((VV => {
          if ("video" === VV.type) return VV.info.decoderConfig.codec;
          if ("audio" === VV.type) return VV.info.decoderConfig.codec;
          return {
            webvtt: "wvtt"
          } [VV.track.source._codec]
        }));
        return (VV => {
          let eV = (VV.hasVideo ? "video/" : VV.hasAudio ? "audio/" : "application/") + (VV.isQuickTime ? "quicktime" : "mp4");
          VV.codecStrings.length > 0 && (eV += `; codecs="${[...new Set(VV.codecStrings)].join(", ")}"`);
          return eV
        })({
          isQuickTime: this.isQuickTime,
          hasVideo: this.trackDatas.some((VV => "video" === VV.type)),
          hasAudio: this.trackDatas.some((VV => "audio" === VV.type)),
          codecStrings: VV
        })
      }
      getVideoTrackData(VV, eV, xV) {
        const JV = this.trackDatas.find((eV => eV.track === VV));
        if (JV) return JV;
        (0, YV.P)(xV, VV.source._codec), (0, pV.L)(xV), (0, pV.L)(xV.decoderConfig);
        const UV = {
          ...xV.decoderConfig
        };
        (0, pV.L)(void 0 !== UV.codedWidth), (0, pV.L)(void 0 !== UV.codedHeight);
        let yV = !1;
        if ("avc" !== VV.source._codec || UV.description) {
          if ("hevc" === VV.source._codec && !UV.description) {
            if (!eV) throw new Error("No HEVC description provided; you must therefore provide a priming packet.");
            const VV = (0, bV.N)(eV.data);
            if (!VV) throw new Error("Couldn't extract an HEVCDecoderConfigurationRecord from the HEVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.265) when not providing a description, or provide a description (must be an HEVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in HEVC format.");
            UV.description = (0, bV.xb)(VV), yV = !0
          }
        } else {
          if (!eV) throw new Error("No AVC description provided; you must therefore provide a priming packet.");
          const VV = (0, bV.G)(eV.data);
          if (!VV) throw new Error("Couldn't extract an AVCDecoderConfigurationRecord from the AVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.264) when not providing a description, or provide a description (must be an AVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in AVCC format.");
          UV.description = (0, bV.tb)(VV), yV = !0
        }
        const QV = (0, pV.nb)(1 / (VV.metadata.frameRate ?? wx), 1e6).den,
          nV = UV.displayAspectWidth,
          wV = UV.displayAspectHeight,
          ZV = void 0 === nV || void 0 === wV ? {
            num: 1,
            den: 1
          } : (0, pV.hd)({
            num: nV * UV.codedHeight,
            den: wV * UV.codedWidth
          }),
          vV = "ap4h" === UV.codec || "ap4x" === UV.codec,
          rV = {
            muxer: this,
            track: VV,
            type: "video",
            info: {
              width: UV.codedWidth,
              height: UV.codedHeight,
              pixelAspectRatio: ZV,
              decoderConfig: UV,
              requiresAnnexBTransformation: yV,
              hasAlphaChannel: vV
            },
            timescale: QV,
            samples: [],
            sampleQueue: [],
            timestampProcessingQueue: [],
            timeToSampleTable: [],
            compositionTimeOffsetTable: [],
            lastTimescaleUnits: null,
            lastSample: null,
            startTimestampOffset: null,
            finalizedChunks: [],
            currentChunk: null,
            compactlyCodedChunkTable: [],
            closed: !1,
            avgBitrate: VV.source._nominalBitrate ?? VV.metadata.averageBitrate ?? 0,
            maxBitrate: VV.source._nominalBitrate ?? VV.metadata.bitrate ?? 0
          };
        return this.trackDatas.push(rV), this.trackDatas.sort(((VV, eV) => VV.track.id - eV.track.id)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), rV
      }
      getAudioTrackData(VV, eV, xV) {
        const UV = this.trackDatas.find((eV => eV.track === VV));
        if (UV) return UV;
        (0, YV.L)(xV, VV.source._codec), (0, pV.L)(xV), (0, pV.L)(xV.decoderConfig);
        const yV = {
          ...xV.decoderConfig
        };
        let nV = !1;
        if ("aac" === VV.source._codec && !yV.description) {
          if (!eV) throw new Error("No AAC description provided; you must therefore provide a priming packet.");
          const VV = nx(QV.tempFromBytes(eV.data));
          if (!VV) throw new Error("Couldn't parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");
          const xV = JV.g[VV.samplingFrequencyIndex],
            YV = JV.c[VV.channelConfiguration];
          if (void 0 === xV || void 0 === YV) throw new Error("Invalid ADTS frame header.");
          yV.description = (0, JV.j)({
            objectType: VV.objectType,
            outputSampleRate: xV,
            outputNumberOfChannels: YV
          }), nV = !0
        }
        if (!eV) {
          if ("ac3" === VV.source._codec || "eac3" === VV.source._codec) throw new Error("AC-3/E-AC-3 require a priming packet.");
          if ("dts" === VV.source._codec) throw new Error("DTS requires a priming packet.")
        }
        const wV = {
          muxer: this,
          track: VV,
          type: "audio",
          info: {
            numberOfChannels: xV.decoderConfig.numberOfChannels,
            sampleRate: xV.decoderConfig.sampleRate,
            decoderConfig: yV,
            requiresPcmTransformation: !this.isFragmented && YV.i.includes(VV.source._codec),
            expectedNextPcmPacketTimestamp: null,
            requiresAdtsStripping: nV,
            primingPacket: eV
          },
          timescale: yV.sampleRate,
          samples: [],
          sampleQueue: [],
          timestampProcessingQueue: [],
          timeToSampleTable: [],
          compositionTimeOffsetTable: [],
          lastTimescaleUnits: null,
          lastSample: null,
          startTimestampOffset: null,
          finalizedChunks: [],
          currentChunk: null,
          compactlyCodedChunkTable: [],
          closed: !1,
          avgBitrate: VV.source._nominalBitrate ?? VV.metadata.averageBitrate ?? 0,
          maxBitrate: VV.source._nominalBitrate ?? VV.metadata.bitrate ?? 0
        };
        return this.trackDatas.push(wV), this.trackDatas.sort(((VV, eV) => VV.track.id - eV.track.id)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), wV
      }
      getSubtitleTrackData(VV, eV) {
        const xV = this.trackDatas.find((eV => eV.track === VV));
        if (xV) return xV;
        (0, YV.O)(eV), (0, pV.L)(eV), (0, pV.L)(eV.config);
        const JV = {
          muxer: this,
          track: VV,
          type: "subtitle",
          info: {
            config: eV.config
          },
          timescale: 1e3,
          samples: [],
          sampleQueue: [],
          timestampProcessingQueue: [],
          timeToSampleTable: [],
          compositionTimeOffsetTable: [],
          lastTimescaleUnits: null,
          lastSample: null,
          startTimestampOffset: null,
          finalizedChunks: [],
          currentChunk: null,
          compactlyCodedChunkTable: [],
          closed: !1,
          avgBitrate: VV.source._nominalBitrate ?? VV.metadata.averageBitrate ?? 0,
          maxBitrate: VV.source._nominalBitrate ?? VV.metadata.bitrate ?? 0,
          lastCueEndTimestamp: null,
          cueQueue: [],
          nextSourceId: 0,
          cueToSourceId: new WeakMap
        };
        return this.trackDatas.push(JV), this.trackDatas.sort(((VV, eV) => VV.track.id - eV.track.id)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), JV
      }
      async addEncodedVideoPacket(VV, eV, xV) {
        const JV = await this.mutex.acquire();
        try {
          const JV = this.getVideoTrackData(VV, eV, xV);
          let YV = eV.data;
          if (JV.info.requiresAnnexBTransformation) {
            const VV = [...(0, bV.ab)(YV)].map((VV => YV.subarray(VV.offset, VV.offset + VV.length)));
            if (0 === VV.length) throw new Error("Failed to transform packet data. Make sure all packets are provided in Annex B format, as specified in ITU-T-REC-H.264 and ITU-T-REC-H.265.");
            YV = (0, bV.w)(VV, 4)
          }
          this.validateTimestamp(JV.track, eV.timestamp, "key" === eV.type);
          const UV = this.createSampleForTrack(JV, YV, eV.timestamp, eV.duration, eV.type);
          await this.registerSample(JV, UV)
        } finally {
          JV()
        }
      }
      async addEncodedAudioPacket(VV, eV, xV) {
        const JV = await this.mutex.acquire();
        try {
          const JV = this.getAudioTrackData(VV, eV, xV);
          let UV = eV.data;
          if (JV.info.requiresAdtsStripping) {
            const VV = nx(QV.tempFromBytes(UV));
            if (!VV) throw new Error("Expected ADTS frame, didn't get one.");
            const eV = null === VV.crcCheck ? 7 : 9;
            UV = UV.subarray(eV)
          }
          this.validateTimestamp(JV.track, eV.timestamp, "key" === eV.type);
          let yV = eV.timestamp,
            pV = eV.duration;
          if (JV.info.requiresPcmTransformation) {
            const VV = (0, YV.J)(JV.info.decoderConfig.codec).sampleSize * JV.info.numberOfChannels;
            if (pV = UV.byteLength / VV / JV.info.sampleRate, null !== JV.info.expectedNextPcmPacketTimestamp) {
              const VV = yV - JV.info.expectedNextPcmPacketTimestamp;
              if (VV < .01) yV = JV.info.expectedNextPcmPacketTimestamp;
              else {
                const eV = await this.padWithSilence(JV, JV.info.expectedNextPcmPacketTimestamp, VV);
                yV = JV.info.expectedNextPcmPacketTimestamp + eV
              }
            }
            JV.info.expectedNextPcmPacketTimestamp = yV + pV
          }
          const nV = this.createSampleForTrack(JV, UV, yV, pV, eV.type);
          await this.registerSample(JV, nV)
        } finally {
          JV()
        }
      }
      async padWithSilence(VV, eV, xV) {
        const JV = vx(xV, VV.timescale);
        if (xV = JV / VV.timescale, JV > 0) {
          const {
            sampleSize: UV,
            silentValue: yV
          } = (0, YV.J)(VV.info.decoderConfig.codec), pV = JV * VV.info.numberOfChannels, QV = new Uint8Array(UV * pV).fill(yV), nV = this.createSampleForTrack(VV, new Uint8Array(QV.buffer), eV, xV, "key");
          await this.registerSample(VV, nV)
        }
        return xV
      }
      async addSubtitleCue(VV, eV, xV) {
        const JV = await this.mutex.acquire();
        try {
          const JV = this.getSubtitleTrackData(VV, xV);
          this.validateTimestamp(JV.track, eV.timestamp, !0), "webvtt" === VV.source._codec && (JV.cueQueue.push(eV), await this.processWebVTTCues(JV, eV.timestamp))
        } finally {
          JV()
        }
      }
      async processWebVTTCues(VV, eV) {
        for (; VV.cueQueue.length > 0;) {
          VV.lastCueEndTimestamp ??= Math.min(0, VV.cueQueue[0].timestamp);
          const xV = new Set([]);
          for (const nV of VV.cueQueue)(0, pV.L)(nV.timestamp <= eV), (0, pV.L)(VV.lastCueEndTimestamp <= nV.timestamp + nV.duration), xV.add(Math.max(nV.timestamp, VV.lastCueEndTimestamp)), xV.add(nV.timestamp + nV.duration);
          const JV = [...xV].sort(((VV, eV) => VV - eV)),
            YV = JV[0],
            UV = JV[1] ?? YV;
          if (eV < UV) break;
          if (VV.lastCueEndTimestamp < YV) {
            this.auxWriter.seek(0);
            const eV = Le();
            this.auxBoxWriter.writeBox(eV);
            const xV = this.auxTarget._getSlice(0, this.auxWriter.getPos()),
              JV = this.createSampleForTrack(VV, xV, VV.lastCueEndTimestamp, YV - VV.lastCueEndTimestamp, "key");
            await this.registerSample(VV, JV), VV.lastCueEndTimestamp = YV
          }
          this.auxWriter.seek(0);
          for (let eV = 0; eV < VV.cueQueue.length; eV++) {
            const xV = VV.cueQueue[eV];
            if (xV.timestamp >= UV) break;
            BV.i.lastIndex = 0;
            const JV = BV.i.test(xV.text),
              yV = xV.timestamp + xV.duration;
            let pV = VV.cueToSourceId.get(xV);
            if (void 0 === pV && UV < yV && (pV = VV.nextSourceId++, VV.cueToSourceId.set(xV, pV)), xV.notes) {
              const VV = me(xV.notes);
              this.auxBoxWriter.writeBox(VV)
            }
            const QV = fe(xV.text, JV ? YV : null, xV.identifier ?? null, xV.settings ?? null, pV ?? null);
            this.auxBoxWriter.writeBox(QV), yV === UV && VV.cueQueue.splice(eV--, 1)
          }
          const yV = this.auxTarget._getSlice(0, this.auxWriter.getPos()),
            QV = this.createSampleForTrack(VV, yV, YV, UV - YV, "key");
          await this.registerSample(VV, QV), VV.lastCueEndTimestamp = UV
        }
      }
      createSampleForTrack(VV, eV, xV, JV, YV) {
        return {
          timestamp: xV,
          decodeTimestamp: xV,
          duration: JV,
          data: eV,
          size: eV.byteLength,
          type: YV,
          timescaleUnitsToNextSample: vx(JV, VV.timescale)
        }
      }
      processTimestamps(VV, eV) {
        if (0 === VV.timestampProcessingQueue.length) return;
        if ("audio" === VV.type && VV.info.requiresPcmTransformation) {
          (0, pV.L)(!this.isFragmented), VV.startTimestampOffset ??= VV.timestampProcessingQueue[0].timestamp;
          let eV = 0;
          for (let xV = 0; xV < VV.timestampProcessingQueue.length; xV++) {
            const JV = VV.timestampProcessingQueue[xV];
            eV += vx(JV.duration, VV.timescale)
          }
          if (0 === VV.timeToSampleTable.length) VV.timeToSampleTable.push({
            sampleCount: eV,
            sampleDelta: 1
          });
          else {
            (0, pV.jc)(VV.timeToSampleTable).sampleCount += eV
          }
          return void(VV.timestampProcessingQueue.length = 0)
        }
        const xV = VV.timestampProcessingQueue.map((VV => VV.timestamp)).sort(((VV, eV) => VV - eV));
        this.isFragmented ? VV.startTimestampOffset ??= Math.min(xV[0], 0) : VV.startTimestampOffset ??= xV[0];
        for (let JV = 0; JV < VV.timestampProcessingQueue.length; JV++) {
          const eV = VV.timestampProcessingQueue[JV];
          eV.decodeTimestamp = xV[JV];
          const YV = vx(eV.timestamp - eV.decodeTimestamp, VV.timescale),
            UV = vx(eV.duration, VV.timescale);
          if (null !== VV.lastTimescaleUnits) {
            (0, pV.L)(VV.lastSample);
            const xV = vx(eV.decodeTimestamp, VV.timescale, !1),
              JV = Math.round(xV - VV.lastTimescaleUnits);
            if ((0, pV.L)(JV >= 0), VV.lastTimescaleUnits += JV, VV.lastSample.timescaleUnitsToNextSample = JV, !this.isFragmented) {
              let eV = (0, pV.jc)(VV.timeToSampleTable);
              if ((0, pV.L)(eV), 1 === eV.sampleCount) {
                eV.sampleDelta = JV;
                const xV = VV.timeToSampleTable[VV.timeToSampleTable.length - 2];
                xV && xV.sampleDelta === JV && (xV.sampleCount++, VV.timeToSampleTable.pop(), eV = xV)
              } else eV.sampleDelta !== JV && (eV.sampleCount--, VV.timeToSampleTable.push(eV = {
                sampleCount: 1,
                sampleDelta: JV
              }));
              eV.sampleDelta === UV ? eV.sampleCount++ : VV.timeToSampleTable.push({
                sampleCount: 1,
                sampleDelta: UV
              });
              const xV = (0, pV.jc)(VV.compositionTimeOffsetTable);
              (0, pV.L)(xV), xV.sampleCompositionTimeOffset === YV ? xV.sampleCount++ : VV.compositionTimeOffsetTable.push({
                sampleCount: 1,
                sampleCompositionTimeOffset: YV
              })
            }
          } else VV.lastTimescaleUnits = vx(eV.decodeTimestamp, VV.timescale, !1), this.isFragmented || (VV.timeToSampleTable.push({
            sampleCount: 1,
            sampleDelta: UV
          }), VV.compositionTimeOffsetTable.push({
            sampleCount: 1,
            sampleCompositionTimeOffset: YV
          }));
          VV.lastSample = eV
        }
        if (VV.timestampProcessingQueue.length = 0, (0, pV.L)(VV.lastSample), (0, pV.L)(null !== VV.lastTimescaleUnits), void 0 !== eV && 0 === VV.lastSample.timescaleUnitsToNextSample) {
          (0, pV.L)("key" === eV.type);
          const xV = vx(eV.timestamp, VV.timescale, !1),
            JV = Math.round(xV - VV.lastTimescaleUnits);
          VV.lastSample.timescaleUnitsToNextSample = JV
        }
      }
      async registerSample(VV, eV) {
        "key" === eV.type && this.processTimestamps(VV, eV), VV.timestampProcessingQueue.push(eV), this.isFragmented ? (VV.sampleQueue.push(eV), await this.interleaveSamples()) : "reserve" === this.fastStart ? await this.registerSampleFastStartReserve(VV, eV) : await this.addSampleToTrack(VV, eV)
      }
      async addSampleToTrack(VV, eV) {
        if (!this.isFragmented && (VV.samples.push(eV), "reserve" === this.fastStart)) {
          const eV = VV.track.metadata.maximumPacketCount;
          if ((0, pV.L)(void 0 !== eV), VV.samples.length > eV) throw new Error(`Track #${VV.track.id} has already reached the maximum packet count (${eV}). Either add less packets or increase the maximum packet count.`)
        }
        let xV = !1;
        if (VV.currentChunk) {
          VV.currentChunk.startTimestamp = Math.min(VV.currentChunk.startTimestamp, eV.timestamp);
          const JV = eV.timestamp - VV.currentChunk.startTimestamp;
          if (this.isFragmented) {
            const YV = this.trackDatas.every((xV => {
              if (VV === xV) return "key" === eV.type;
              const JV = xV.sampleQueue[0];
              return JV ? "key" === JV.type : xV.closed
            }));
            JV >= this.minimumFragmentDuration && YV && eV.timestamp > this.maxWrittenTimestamp && (xV = !0, await this.finalizeFragment())
          } else xV = JV >= .5
        } else xV = !0;
        xV && (VV.currentChunk && await this.finalizeCurrentChunk(VV), VV.currentChunk = {
          startTimestamp: eV.timestamp,
          samples: [],
          offset: null,
          moofOffset: null,
          trafIndex: null
        }), (0, pV.L)(VV.currentChunk), VV.currentChunk.samples.push(eV), this.isFragmented && (this.maxWrittenTimestamp = Math.max(this.maxWrittenTimestamp, eV.timestamp), this.maxWrittenEndTimestamp = Math.max(this.maxWrittenEndTimestamp, eV.timestamp + eV.duration), this.minWrittenTimestamp = Math.min(this.minWrittenTimestamp, eV.timestamp))
      }
      async finalizeCurrentChunk(VV) {
        if ((0, pV.L)(!this.isFragmented), (0, pV.L)(this.writer), !VV.currentChunk) return;
        VV.finalizedChunks.push(VV.currentChunk), this.finalizedChunks.push(VV.currentChunk);
        let eV = VV.currentChunk.samples.length;
        if ("audio" === VV.type && VV.info.requiresPcmTransformation && (eV = VV.currentChunk.samples.reduce(((eV, xV) => eV + vx(xV.duration, VV.timescale)), 0)), 0 !== VV.compactlyCodedChunkTable.length && (0, pV.jc)(VV.compactlyCodedChunkTable).samplesPerChunk === eV || VV.compactlyCodedChunkTable.push({
            firstChunk: VV.finalizedChunks.length,
            samplesPerChunk: eV
          }), "in-memory" !== this.fastStart) {
          VV.currentChunk.offset = this.writer.getPos();
          for (const eV of VV.currentChunk.samples)(0, pV.L)(eV.data), this.writer.write(eV.data), eV.data = null;
          await this.writer.flush()
        } else VV.currentChunk.offset = 0
      }
      async interleaveSamples() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if ((0, pV.L)(this.isFragmented), VV || this.allTracksAreKnown()) VV: for (;;) {
          let eV = null,
            xV = 1 / 0;
          for (const YV of this.trackDatas) {
            if (!VV && 0 === YV.sampleQueue.length && !YV.closed) break VV;
            YV.sampleQueue.length > 0 && YV.sampleQueue[0].timestamp < xV && (eV = YV, xV = YV.sampleQueue[0].timestamp)
          }
          if (!eV) break;
          const JV = eV.sampleQueue.shift();
          await this.addSampleToTrack(eV, JV)
        }
      }
      async finalizeFragment() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : !this.isCmaf;
        if ((0, pV.L)(this.isFragmented), !this.wroteFragmentedHeader) {
          this.wroteFragmentedHeader = !0;
          const VV = this.initBoxWriter ?? this.boxWriter;
          (0, pV.L)(VV), this.formatOptions.onMoov && VV.writer.startTrackingWrites(), this.ensureOneEnabledTrack();
          const eV = LV(this);
          if (VV.writeBox(eV), this.formatOptions.onMoov) {
            const {
              data: eV,
              start: xV
            } = VV.writer.stopTrackingWrites();
            this.formatOptions.onMoov(eV, xV)
          }
          if (this.isCmaf) {
            (0, pV.L)(this.initWriter), await this.initWriter.flush(), await this.initWriter.finalize(), this.writer = await this.output._getRootWriter(!0), this.boxWriter = new qV(this.writer);
            const VV = this.boxWriter.measureBox(cV()),
              eV = this.boxWriter.measureBox(hV(this, 0));
            this.segmentHeaderSize = VV + eV, this.writer.seek(this.segmentHeaderSize)
          }
        }(0, pV.L)(this.writer), (0, pV.L)(this.boxWriter);
        const eV = this.trackDatas.filter((VV => VV.currentChunk));
        if (0 === eV.length) return void(VV && await this.writer.flush());
        const xV = this.nextFragmentNumber++,
          JV = ge(xV, eV),
          YV = this.writer.getPos(),
          UV = YV + this.boxWriter.measureBox(JV);
        let yV = UV + 8,
          QV = 1 / 0;
        for (let rV = 0; rV < eV.length; rV++) {
          const VV = eV[rV];
          (0, pV.L)(VV.currentChunk), (0, pV.L)(null !== VV.startTimestampOffset), VV.currentChunk.offset = yV, VV.currentChunk.moofOffset = YV, VV.currentChunk.trafIndex = rV, VV.currentChunk.startTimestamp -= VV.startTimestampOffset;
          for (const eV of VV.currentChunk.samples) yV += eV.size, eV.timestamp -= VV.startTimestampOffset, eV.decodeTimestamp -= VV.startTimestampOffset;
          QV = Math.min(QV, VV.currentChunk.startTimestamp)
        }
        const nV = yV - UV,
          wV = nV >= 2 ** 32;
        if (wV)
          for (const pV of eV) pV.currentChunk.offset += 8;
        this.formatOptions.onMoof && this.writer.startTrackingWrites();
        const ZV = ge(xV, eV);
        if (this.boxWriter.writeBox(ZV), this.formatOptions.onMoof) {
          const {
            data: VV,
            start: eV
          } = this.writer.stopTrackingWrites();
          this.formatOptions.onMoof(VV, eV, QV)
        }(0, pV.L)(this.writer.getPos() === UV), this.formatOptions.onMdat && this.writer.startTrackingWrites();
        const vV = lV(wV);
        vV.size = nV, this.boxWriter.writeBox(vV), this.writer.seek(UV + (wV ? 16 : 8));
        for (const pV of eV)
          for (const VV of pV.currentChunk.samples) this.writer.write(VV.data), VV.data = null;
        if (this.formatOptions.onMdat) {
          const {
            data: VV,
            start: eV
          } = this.writer.stopTrackingWrites();
          this.formatOptions.onMdat(VV, eV)
        }
        for (const pV of eV) pV.finalizedChunks.push(pV.currentChunk), this.finalizedChunks.push(pV.currentChunk), pV.currentChunk = null;
        VV && await this.writer.flush()
      }
      async registerSampleFastStartReserve(VV, eV) {
        this.allTracksAreKnown() ? (this.mdat || await this.createFastStartReserveMdat(), await this.addSampleToTrack(VV, eV)) : VV.sampleQueue.push(eV)
      }
      async createFastStartReserveMdat() {
        (0, pV.L)(this.writer), (0, pV.L)(this.boxWriter), this.ensureOneEnabledTrack();
        const VV = LV(this),
          eV = this.boxWriter.measureBox(VV) + this.computeSampleTableSizeUpperBound() + 4096;
        (0, pV.L)(null !== this.ftypSize), this.writer.seek(this.ftypSize + eV), this.formatOptions.onMdat && this.writer.startTrackingWrites(), this.mdat = lV(!0), this.boxWriter.writeBox(this.mdat);
        for (const xV of this.trackDatas) {
          for (const VV of xV.sampleQueue) await this.addSampleToTrack(xV, VV);
          xV.sampleQueue.length = 0
        }
      }
      computeSampleTableSizeUpperBound() {
        (0, pV.L)("reserve" === this.fastStart);
        let VV = 0;
        for (const eV of this.trackDatas) {
          const xV = eV.track.metadata.maximumPacketCount;
          (0, pV.L)(void 0 !== xV), VV += 8 * Math.ceil(2 / 3 * xV), VV += 4 * xV, VV += 8 * Math.ceil(2 / 3 * xV), VV += 12 * Math.ceil(2 / 3 * xV), VV += 4 * xV, VV += 8 * xV
        }
        return VV
      }
      async onTrackClose(VV) {
        const eV = await this.mutex.acquire(),
          xV = this.trackDatas.find((eV => eV.track === VV));
        xV && (xV.closed = !0, "subtitle" === xV.type && "webvtt" === VV.source._codec && await this.processWebVTTCues(xV, 1 / 0), this.processTimestamps(xV)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), this.isFragmented && await this.interleaveSamples(), eV()
      }
      ensureOneEnabledTrack() {
        for (const VV of ["video", "audio", "subtitle"]) {
          const eV = this.trackDatas.filter((eV => eV.type === VV));
          if (0 === eV.length) continue;
          if (!eV.some((VV => !1 !== VV.track.metadata.disposition?.default))) {
            const VV = eV[0];
            VV.track.metadata.disposition = {
              ...VV.track.metadata.disposition,
              default: !0
            }
          }
        }
      }
      async forceFragmentFinalization() {
        (0, pV.L)(this.isFragmented);
        const VV = await this.mutex.acquire();
        try {
          for (const VV of this.trackDatas) "subtitle" === VV.type && "webvtt" === VV.track.source._codec && await this.processWebVTTCues(VV, 1 / 0), this.processTimestamps(VV);
          await this.interleaveSamples(!0), await this.finalizeFragment()
        } finally {
          VV()
        }
      }
      async finalize() {
        const VV = await this.mutex.acquire();
        this.allTracksKnown.resolve(), this.ensureOneEnabledTrack(), this.mdat || "reserve" !== this.fastStart || await this.createFastStartReserveMdat();
        for (const xV of this.trackDatas) xV.closed = !0, "subtitle" === xV.type && "webvtt" === xV.track.source._codec && await this.processWebVTTCues(xV, 1 / 0), this.processTimestamps(xV);
        if (this.isFragmented) await this.interleaveSamples(!0), await this.finalizeFragment(!1);
        else
          for (const xV of this.trackDatas) {
            await this.finalizeCurrentChunk(xV);
            const VV = rx(xV);
            if (VV > 0) {
              let eV = 0;
              for (const VV of xV.samples) eV += VV.size;
              xV.avgBitrate = Math.round(8 * eV / VV)
            } else xV.avgBitrate = 0;
            let eV = 0,
              JV = 0,
              YV = 0;
            for (let UV = 0; UV < xV.samples.length; UV++) {
              const VV = xV.samples[UV];
              for (JV += VV.size; VV.decodeTimestamp - xV.samples[eV].decodeTimestamp >= 1;) JV -= xV.samples[eV].size, eV++;
              YV = Math.max(YV, JV)
            }
            if (xV.maxBitrate = 8 * YV, null !== xV.startTimestampOffset)
              for (let UV = 0; UV < xV.samples.length; UV++) {
                const VV = xV.samples[UV];
                VV.timestamp -= xV.startTimestampOffset, VV.decodeTimestamp -= xV.startTimestampOffset
              }
          }
        if ((0, pV.L)(this.writer), (0, pV.L)(this.boxWriter), "in-memory" === this.fastStart) {
          let VV;
          this.mdat = lV(!1);
          for (let xV = 0; xV < 2; xV++) {
            const eV = LV(this),
              xV = this.boxWriter.measureBox(eV);
            VV = this.boxWriter.measureBox(this.mdat);
            let JV = this.writer.getPos() + xV + VV;
            for (const YV of this.finalizedChunks) {
              YV.offset = JV;
              for (const {
                  data: eV
                }
                of YV.samples)(0, pV.L)(eV), JV += eV.byteLength, VV += eV.byteLength
            }
            if (JV < 2 ** 32) break;
            VV >= 2 ** 32 && (this.mdat.largeSize = !0)
          }
          this.formatOptions.onMoov && this.writer.startTrackingWrites();
          const eV = LV(this);
          if (this.boxWriter.writeBox(eV), this.formatOptions.onMoov) {
            const {
              data: VV,
              start: eV
            } = this.writer.stopTrackingWrites();
            this.formatOptions.onMoov(VV, eV)
          }
          this.formatOptions.onMdat && this.writer.startTrackingWrites(), this.mdat.size = VV, this.boxWriter.writeBox(this.mdat);
          for (const xV of this.finalizedChunks)
            for (const VV of xV.samples)(0, pV.L)(VV.data), this.writer.write(VV.data), VV.data = null;
          if (this.formatOptions.onMdat) {
            const {
              data: VV,
              start: eV
            } = this.writer.stopTrackingWrites();
            this.formatOptions.onMdat(VV, eV)
          }
        } else if (this.isFragmented)
          if (this.isCmaf) {
            const VV = null !== this.segmentHeaderSize ? this.writer.getPos() - this.segmentHeaderSize : 0;
            this.writer.seek(0), this.boxWriter.writeBox(cV()), this.boxWriter.writeBox(hV(this, VV))
          } else {
            const VV = this.writer.getPos(),
              xV = (eV = this.trackDatas, aV("mfra", void 0, [...eV.map(he), le()]));
            this.boxWriter.writeBox(xV);
            const JV = this.writer.getPos() - VV;
            this.writer.seek(this.writer.getPos() - 4), this.boxWriter.writeU32(JV)
          }
        else {
          (0, pV.L)(this.mdat);
          const VV = this.boxWriter.offsets.get(this.mdat);
          (0, pV.L)(void 0 !== VV);
          const eV = this.writer.getPos() - VV;
          if (this.mdat.size = eV, this.mdat.largeSize = eV >= 2 ** 32, this.boxWriter.patchBox(this.mdat), this.formatOptions.onMdat) {
            const {
              data: VV,
              start: eV
            } = this.writer.stopTrackingWrites();
            this.formatOptions.onMdat(VV, eV)
          }
          const xV = LV(this);
          if ("reserve" === this.fastStart) {
            (0, pV.L)(null !== this.ftypSize), this.writer.seek(this.ftypSize), this.formatOptions.onMoov && this.writer.startTrackingWrites(), this.boxWriter.writeBox(xV);
            const VV = this.boxWriter.offsets.get(this.mdat) - this.writer.getPos();
            this.boxWriter.writeBox({
              type: "free",
              size: VV
            })
          } else this.formatOptions.onMoov && this.writer.startTrackingWrites(), this.boxWriter.writeBox(xV);
          if (this.formatOptions.onMoov) {
            const {
              data: VV,
              start: eV
            } = this.writer.stopTrackingWrites();
            this.formatOptions.onMoov(VV, eV)
          }
        }
        var eV;
        VV()
      }
    }
    class bx {
      constructor(VV) {
        this.value = VV
      }
    }
    class Ex {
      constructor(VV) {
        this.value = VV
      }
    }
    class Bx {
      constructor(VV) {
        this.value = VV
      }
    }
    class jx {
      constructor(VV) {
        this.value = VV
      }
    }
    var qx;
    ! function(VV) {
      VV[VV.EBML = 440786851] = "EBML", VV[VV.EBMLVersion = 17030] = "EBMLVersion", VV[VV.EBMLReadVersion = 17143] = "EBMLReadVersion", VV[VV.EBMLMaxIDLength = 17138] = "EBMLMaxIDLength", VV[VV.EBMLMaxSizeLength = 17139] = "EBMLMaxSizeLength", VV[VV.DocType = 17026] = "DocType", VV[VV.DocTypeVersion = 17031] = "DocTypeVersion", VV[VV.DocTypeReadVersion = 17029] = "DocTypeReadVersion", VV[VV.Void = 236] = "Void", VV[VV.Segment = 408125543] = "Segment", VV[VV.SeekHead = 290298740] = "SeekHead", VV[VV.Seek = 19899] = "Seek", VV[VV.SeekID = 21419] = "SeekID", VV[VV.SeekPosition = 21420] = "SeekPosition", VV[VV.Duration = 17545] = "Duration", VV[VV.Info = 357149030] = "Info", VV[VV.TimestampScale = 2807729] = "TimestampScale", VV[VV.MuxingApp = 19840] = "MuxingApp", VV[VV.WritingApp = 22337] = "WritingApp", VV[VV.Tracks = 374648427] = "Tracks", VV[VV.TrackEntry = 174] = "TrackEntry", VV[VV.TrackNumber = 215] = "TrackNumber", VV[VV.TrackUID = 29637] = "TrackUID", VV[VV.TrackType = 131] = "TrackType", VV[VV.FlagEnabled = 185] = "FlagEnabled", VV[VV.FlagDefault = 136] = "FlagDefault", VV[VV.FlagForced = 21930] = "FlagForced", VV[VV.FlagOriginal = 21934] = "FlagOriginal", VV[VV.FlagHearingImpaired = 21931] = "FlagHearingImpaired", VV[VV.FlagVisualImpaired = 21932] = "FlagVisualImpaired", VV[VV.FlagCommentary = 21935] = "FlagCommentary", VV[VV.FlagLacing = 156] = "FlagLacing", VV[VV.Name = 21358] = "Name", VV[VV.Language = 2274716] = "Language", VV[VV.LanguageBCP47 = 2274717] = "LanguageBCP47", VV[VV.CodecID = 134] = "CodecID", VV[VV.CodecPrivate = 25506] = "CodecPrivate", VV[VV.CodecDelay = 22186] = "CodecDelay", VV[VV.SeekPreRoll = 22203] = "SeekPreRoll", VV[VV.DefaultDuration = 2352003] = "DefaultDuration", VV[VV.Video = 224] = "Video", VV[VV.PixelWidth = 176] = "PixelWidth", VV[VV.PixelHeight = 186] = "PixelHeight", VV[VV.DisplayWidth = 21680] = "DisplayWidth", VV[VV.DisplayHeight = 21690] = "DisplayHeight", VV[VV.DisplayUnit = 21682] = "DisplayUnit", VV[VV.AlphaMode = 21440] = "AlphaMode", VV[VV.Audio = 225] = "Audio", VV[VV.SamplingFrequency = 181] = "SamplingFrequency", VV[VV.Channels = 159] = "Channels", VV[VV.BitDepth = 25188] = "BitDepth", VV[VV.SimpleBlock = 163] = "SimpleBlock", VV[VV.BlockGroup = 160] = "BlockGroup", VV[VV.Block = 161] = "Block", VV[VV.BlockAdditions = 30113] = "BlockAdditions", VV[VV.BlockMore = 166] = "BlockMore", VV[VV.BlockAdditional = 165] = "BlockAdditional", VV[VV.BlockAddID = 238] = "BlockAddID", VV[VV.BlockDuration = 155] = "BlockDuration", VV[VV.ReferenceBlock = 251] = "ReferenceBlock", VV[VV.Cluster = 524531317] = "Cluster", VV[VV.Timestamp = 231] = "Timestamp", VV[VV.Cues = 475249515] = "Cues", VV[VV.CuePoint = 187] = "CuePoint", VV[VV.CueTime = 179] = "CueTime", VV[VV.CueTrackPositions = 183] = "CueTrackPositions", VV[VV.CueTrack = 247] = "CueTrack", VV[VV.CueClusterPosition = 241] = "CueClusterPosition", VV[VV.Colour = 21936] = "Colour", VV[VV.MatrixCoefficients = 21937] = "MatrixCoefficients", VV[VV.TransferCharacteristics = 21946] = "TransferCharacteristics", VV[VV.Primaries = 21947] = "Primaries", VV[VV.Range = 21945] = "Range", VV[VV.Projection = 30320] = "Projection", VV[VV.ProjectionType = 30321] = "ProjectionType", VV[VV.ProjectionPoseYaw = 30323] = "ProjectionPoseYaw", VV[VV.ProjectionPosePitch = 30324] = "ProjectionPosePitch", VV[VV.ProjectionPoseRoll = 30325] = "ProjectionPoseRoll", VV[VV.Attachments = 423732329] = "Attachments", VV[VV.AttachedFile = 24999] = "AttachedFile", VV[VV.FileDescription = 18046] = "FileDescription", VV[VV.FileName = 18030] = "FileName", VV[VV.FileMediaType = 18016] = "FileMediaType", VV[VV.FileData = 18012] = "FileData", VV[VV.FileUID = 18094] = "FileUID", VV[VV.Chapters = 272869232] = "Chapters", VV[VV.Tags = 307544935] = "Tags", VV[VV.Tag = 29555] = "Tag", VV[VV.Targets = 25536] = "Targets", VV[VV.TargetTypeValue = 26826] = "TargetTypeValue", VV[VV.TargetType = 25546] = "TargetType", VV[VV.TagTrackUID = 25541] = "TagTrackUID", VV[VV.TagEditionUID = 25545] = "TagEditionUID", VV[VV.TagChapterUID = 25540] = "TagChapterUID", VV[VV.TagAttachmentUID = 25542] = "TagAttachmentUID", VV[VV.SimpleTag = 26568] = "SimpleTag", VV[VV.TagName = 17827] = "TagName", VV[VV.TagLanguage = 17530] = "TagLanguage", VV[VV.TagString = 17543] = "TagString", VV[VV.TagBinary = 17541] = "TagBinary", VV[VV.ContentEncodings = 28032] = "ContentEncodings", VV[VV.ContentEncoding = 25152] = "ContentEncoding", VV[VV.ContentEncodingOrder = 20529] = "ContentEncodingOrder", VV[VV.ContentEncodingScope = 20530] = "ContentEncodingScope", VV[VV.ContentCompression = 20532] = "ContentCompression", VV[VV.ContentCompAlgo = 16980] = "ContentCompAlgo", VV[VV.ContentCompSettings = 16981] = "ContentCompSettings", VV[VV.ContentEncryption = 20533] = "ContentEncryption"
    }(qx || (qx = {}));
    qx.EBML, qx.Segment, qx.SeekHead, qx.Info, qx.Cluster, qx.Tracks, qx.Cues, qx.Attachments, qx.Chapters, qx.Tags;
    const tx = VV => VV < 256 ? 1 : VV < 65536 ? 2 : VV < 1 << 24 ? 3 : VV < 2 ** 32 ? 4 : VV < 2 ** 40 ? 5 : 6,
      Fx = VV => VV < 256n ? 1 : VV < 65536n ? 2 : VV < 1n << 24n ? 3 : VV < 1n << 32n ? 4 : VV < 1n << 40n ? 5 : VV < 1n << 48n ? 6 : VV < 1n << 56n ? 7 : 8,
      Tx = VV => VV >= -64 && VV < 64 ? 1 : VV >= -8192 && VV < 8192 ? 2 : VV >= -1048576 && VV < 1 << 20 ? 3 : VV >= -(1 << 27) && VV < 1 << 27 ? 4 : VV >= -(2 ** 34) && VV < 2 ** 34 ? 5 : 6;
    class Px {
      constructor(VV) {
        this.writer = VV, this.helper = new Uint8Array(8), this.helperView = new DataView(this.helper.buffer), this.offsets = new WeakMap, this.dataOffsets = new WeakMap
      }
      writeByte(VV) {
        this.helperView.setUint8(0, VV), this.writer.write(this.helper.subarray(0, 1))
      }
      writeFloat32(VV) {
        this.helperView.setFloat32(0, VV, !1), this.writer.write(this.helper.subarray(0, 4))
      }
      writeFloat64(VV) {
        this.helperView.setFloat64(0, VV, !1), this.writer.write(this.helper)
      }
      writeUnsignedInt(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tx(VV),
          xV = 0;
        switch (eV) {
          case 6:
            this.helperView.setUint8(xV++, VV / 2 ** 40 | 0);
          case 5:
            this.helperView.setUint8(xV++, VV / 2 ** 32 | 0);
          case 4:
            this.helperView.setUint8(xV++, VV >> 24);
          case 3:
            this.helperView.setUint8(xV++, VV >> 16);
          case 2:
            this.helperView.setUint8(xV++, VV >> 8);
          case 1:
            this.helperView.setUint8(xV++, VV);
            break;
          default:
            throw new Error("Bad unsigned int size " + eV)
        }
        this.writer.write(this.helper.subarray(0, xV))
      }
      writeUnsignedBigInt(VV) {
        let eV = 0;
        for (let xV = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Fx(VV)) - 1; xV >= 0; xV--) this.helperView.setUint8(eV++, Number(VV >> BigInt(8 * xV) & 0xffn));
        this.writer.write(this.helper.subarray(0, eV))
      }
      writeSignedInt(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Tx(VV);
        VV < 0 && (VV += 2 ** (8 * eV)), this.writeUnsignedInt(VV, eV)
      }
      writeVarInt(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (VV => {
            if (VV < 127) return 1;
            if (VV < 16383) return 2;
            if (VV < 2097151) return 3;
            if (VV < 268435455) return 4;
            if (VV < 2 ** 35 - 1) return 5;
            if (VV < 2 ** 42 - 1) return 6;
            throw new Error("EBML varint size not supported " + VV)
          })(VV),
          xV = 0;
        switch (eV) {
          case 1:
            this.helperView.setUint8(xV++, 128 | VV);
            break;
          case 2:
            this.helperView.setUint8(xV++, 64 | VV >> 8), this.helperView.setUint8(xV++, VV);
            break;
          case 3:
            this.helperView.setUint8(xV++, 32 | VV >> 16), this.helperView.setUint8(xV++, VV >> 8), this.helperView.setUint8(xV++, VV);
            break;
          case 4:
            this.helperView.setUint8(xV++, 16 | VV >> 24), this.helperView.setUint8(xV++, VV >> 16), this.helperView.setUint8(xV++, VV >> 8), this.helperView.setUint8(xV++, VV);
            break;
          case 5:
            this.helperView.setUint8(xV++, 8 | VV / 2 ** 32 & 7), this.helperView.setUint8(xV++, VV >> 24), this.helperView.setUint8(xV++, VV >> 16), this.helperView.setUint8(xV++, VV >> 8), this.helperView.setUint8(xV++, VV);
            break;
          case 6:
            this.helperView.setUint8(xV++, 4 | VV / 2 ** 40 & 3), this.helperView.setUint8(xV++, VV / 2 ** 32 | 0), this.helperView.setUint8(xV++, VV >> 24), this.helperView.setUint8(xV++, VV >> 16), this.helperView.setUint8(xV++, VV >> 8), this.helperView.setUint8(xV++, VV);
            break;
          default:
            throw new Error("Bad EBML varint size " + eV)
        }
        this.writer.write(this.helper.subarray(0, xV))
      }
      writeAsciiString(VV) {
        this.writer.write(new Uint8Array(VV.split("").map((VV => VV.charCodeAt(0)))))
      }
      writeEBML(VV) {
        if (null !== VV)
          if (VV instanceof Uint8Array) this.writer.write(VV);
          else if (Array.isArray(VV))
          for (const eV of VV) this.writeEBML(eV);
        else if (this.offsets.set(VV, this.writer.getPos()), this.writeUnsignedInt(VV.id), Array.isArray(VV.data)) {
          const eV = this.writer.getPos(),
            xV = -1 === VV.size ? 1 : VV.size ?? 4; - 1 === VV.size ? this.writeByte(255) : this.writer.seek(this.writer.getPos() + xV);
          const JV = this.writer.getPos();
          if (this.dataOffsets.set(VV, JV), this.writeEBML(VV.data), -1 !== VV.size) {
            const VV = this.writer.getPos() - JV,
              YV = this.writer.getPos();
            this.writer.seek(eV), this.writeVarInt(VV, xV), this.writer.seek(YV)
          }
        } else if ("number" === typeof VV.data) {
          const eV = VV.size ?? tx(VV.data);
          this.writeVarInt(eV), this.writeUnsignedInt(VV.data, eV)
        } else if ("bigint" === typeof VV.data) {
          const eV = VV.size ?? Fx(VV.data);
          this.writeVarInt(eV), this.writeUnsignedBigInt(VV.data, eV)
        } else if ("string" === typeof VV.data) this.writeVarInt(VV.data.length), this.writeAsciiString(VV.data);
        else if (VV.data instanceof Uint8Array) this.writeVarInt(VV.data.byteLength, VV.size), this.writer.write(VV.data);
        else if (VV.data instanceof bx) this.writeVarInt(4), this.writeFloat32(VV.data.value);
        else if (VV.data instanceof Ex) this.writeVarInt(8), this.writeFloat64(VV.data.value);
        else if (VV.data instanceof Bx) {
          const eV = VV.size ?? Tx(VV.data.value);
          this.writeVarInt(eV), this.writeSignedInt(VV.data.value, eV)
        } else if (VV.data instanceof jx) {
          const eV = pV.ld.encode(VV.data.value);
          this.writeVarInt(eV.length), this.writer.write(eV)
        } else(0, pV.J)(VV.data)
      }
    }
    const Ax = {
      avc: "V_MPEG4/ISO/AVC",
      hevc: "V_MPEGH/ISO/HEVC",
      vp8: "V_VP8",
      vp9: "V_VP9",
      av1: "V_AV1",
      prores: "V_PRORES",
      aac: "A_AAC",
      mp3: "A_MPEG/L3",
      opus: "A_OPUS",
      vorbis: "A_VORBIS",
      flac: "A_FLAC",
      ac3: "A_AC3",
      eac3: "A_EAC3",
      dts: "A_DTS",
      "pcm-u8": "A_PCM/INT/LIT",
      "pcm-s16": "A_PCM/INT/LIT",
      "pcm-s16be": "A_PCM/INT/BIG",
      "pcm-s24": "A_PCM/INT/LIT",
      "pcm-s24be": "A_PCM/INT/BIG",
      "pcm-s32": "A_PCM/INT/LIT",
      "pcm-s32be": "A_PCM/INT/BIG",
      "pcm-f32": "A_PCM/FLOAT/IEEE",
      "pcm-f64": "A_PCM/FLOAT/IEEE",
      webvtt: "S_TEXT/WEBVTT"
    };
    const Nx = {
      video: 1,
      audio: 2,
      subtitle: 17
    };
    class Xx extends kV {
      constructor(VV, eV) {
        super(VV), this.trackDatas = [], this.allTracksKnown = (0, pV.Gc)(), this.segment = null, this.segmentInfo = null, this.seekHead = null, this.tracksElement = null, this.tagsElement = null, this.attachmentsElement = null, this.segmentDuration = null, this.cues = null, this.currentCluster = null, this.currentClusterStartMsTimestamp = null, this.currentClusterMaxMsTimestamp = null, this.trackDatasInCurrentCluster = new Map, this.startTimestamp = 1 / 0, this.endTimestamp = -1 / 0, this.warnedAboutTooNegativeTimestamp = !1, this.format = eV
      }
      async start() {
        const VV = await this.mutex.acquire();
        this.writer = await this.output._getRootWriter(!!this.format._options.appendOnly), this.ebmlWriter = new Px(this.writer), this.writeEBMLHeader(), this.createSegmentInfo(), this.createCues(), await this.writer.flush();
        for (const eV of this.output.tracks) eV.isVideoTrack() && eV.metadata.decoderConfig ? this.getVideoTrackData(eV, eV.metadata.primingPacket ?? null, {
          decoderConfig: eV.metadata.decoderConfig
        }) : eV.isAudioTrack() && eV.metadata.decoderConfig && this.getAudioTrackData(eV, eV.metadata.primingPacket ?? null, {
          decoderConfig: eV.metadata.decoderConfig
        });
        VV()
      }
      writeEBMLHeader() {
        this.format._options.onEbmlHeader && this.writer.startTrackingWrites();
        const VV = {
          id: qx.EBML,
          data: [{
            id: qx.EBMLVersion,
            data: 1
          }, {
            id: qx.EBMLReadVersion,
            data: 1
          }, {
            id: qx.EBMLMaxIDLength,
            data: 4
          }, {
            id: qx.EBMLMaxSizeLength,
            data: 8
          }, {
            id: qx.DocType,
            data: this.format instanceof cx ? "webm" : "matroska"
          }, {
            id: qx.DocTypeVersion,
            data: 4
          }, {
            id: qx.DocTypeReadVersion,
            data: 2
          }]
        };
        if (this.ebmlWriter.writeEBML(VV), this.format._options.onEbmlHeader) {
          const {
            data: VV,
            start: eV
          } = this.writer.stopTrackingWrites();
          this.format._options.onEbmlHeader(VV, eV)
        }
      }
      maybeCreateSeekHead(VV) {
        if (this.format._options.appendOnly) return;
        const eV = new Uint8Array([28, 83, 187, 107]),
          xV = new Uint8Array([21, 73, 169, 102]),
          JV = new Uint8Array([22, 84, 174, 107]),
          YV = new Uint8Array([25, 65, 164, 105]),
          UV = new Uint8Array([18, 84, 195, 103]),
          yV = {
            id: qx.SeekHead,
            data: [{
              id: qx.Seek,
              data: [{
                id: qx.SeekID,
                data: xV
              }, {
                id: qx.SeekPosition,
                size: 5,
                data: VV ? this.ebmlWriter.offsets.get(this.segmentInfo) - this.segmentDataOffset : 0
              }]
            }, {
              id: qx.Seek,
              data: [{
                id: qx.SeekID,
                data: JV
              }, {
                id: qx.SeekPosition,
                size: 5,
                data: VV ? this.ebmlWriter.offsets.get(this.tracksElement) - this.segmentDataOffset : 0
              }]
            }, this.attachmentsElement ? {
              id: qx.Seek,
              data: [{
                id: qx.SeekID,
                data: YV
              }, {
                id: qx.SeekPosition,
                size: 5,
                data: VV ? this.ebmlWriter.offsets.get(this.attachmentsElement) - this.segmentDataOffset : 0
              }]
            } : null, this.tagsElement ? {
              id: qx.Seek,
              data: [{
                id: qx.SeekID,
                data: UV
              }, {
                id: qx.SeekPosition,
                size: 5,
                data: VV ? this.ebmlWriter.offsets.get(this.tagsElement) - this.segmentDataOffset : 0
              }]
            } : null, {
              id: qx.Seek,
              data: [{
                id: qx.SeekID,
                data: eV
              }, {
                id: qx.SeekPosition,
                size: 5,
                data: VV ? this.ebmlWriter.offsets.get(this.cues) - this.segmentDataOffset : 0
              }]
            }]
          };
        this.seekHead = yV
      }
      createSegmentInfo() {
        const VV = {
          id: qx.Duration,
          data: new Ex(0)
        };
        this.segmentDuration = VV;
        const eV = {
          id: qx.Info,
          data: [{
            id: qx.TimestampScale,
            data: 1e6
          }, {
            id: qx.MuxingApp,
            data: jV.c
          }, {
            id: qx.WritingApp,
            data: jV.c
          }, this.format._options.appendOnly ? null : VV]
        };
        this.segmentInfo = eV
      }
      createTracks() {
        const VV = {
          id: qx.Tracks,
          data: []
        };
        this.tracksElement = VV;
        for (const eV of this.trackDatas) {
          let xV = Ax[eV.track.source._codec];
          (0, pV.L)(xV), "audio" === eV.type && "dts" === eV.track.source._codec && ("dtse" === eV.info.decoderConfig.codec ? xV = "A_DTS/EXPRESS" : "dtsl" === eV.info.decoderConfig.codec && (xV = "A_DTS/LOSSLESS"));
          let JV = 0;
          if ("audio" === eV.type && "opus" === eV.track.source._codec) {
            JV = 8e7;
            const VV = eV.info.decoderConfig.description;
            if (VV) {
              const eV = (0, pV.sd)(VV),
                xV = (0, bV.nb)(eV);
              JV = Math.round(xV.preSkip / YV.f * 1e9)
            }
          }
          VV.data.push({
            id: qx.TrackEntry,
            data: [{
              id: qx.TrackNumber,
              data: eV.track.id
            }, {
              id: qx.TrackUID,
              data: eV.track.id
            }, {
              id: qx.TrackType,
              data: Nx[eV.type]
            }, !1 === eV.track.metadata.disposition?.default ? {
              id: qx.FlagDefault,
              data: 0
            } : null, eV.track.metadata.disposition?.forced ? {
              id: qx.FlagForced,
              data: 1
            } : null, eV.track.metadata.disposition?.hearingImpaired ? {
              id: qx.FlagHearingImpaired,
              data: 1
            } : null, eV.track.metadata.disposition?.visuallyImpaired ? {
              id: qx.FlagVisualImpaired,
              data: 1
            } : null, eV.track.metadata.disposition?.original ? {
              id: qx.FlagOriginal,
              data: 1
            } : null, eV.track.metadata.disposition?.commentary ? {
              id: qx.FlagCommentary,
              data: 1
            } : null, {
              id: qx.FlagLacing,
              data: 0
            }, {
              id: qx.Language,
              data: eV.track.metadata.languageCode ?? pV.y
            }, {
              id: qx.CodecID,
              data: xV
            }, eV.codecPrivate ? {
              id: qx.CodecPrivate,
              data: (0, pV.sd)(eV.codecPrivate)
            } : null, JV > 0 ? {
              id: qx.SeekPreRoll,
              data: JV
            } : null, void 0 !== eV.track.metadata.name ? {
              id: qx.Name,
              data: new jx(eV.track.metadata.name)
            } : null, "video" === eV.type ? this.videoSpecificTrackInfo(eV) : null, "audio" === eV.type ? this.audioSpecificTrackInfo(eV) : null, "subtitle" === eV.type ? this.subtitleSpecificTrackInfo(eV) : null]
          })
        }
      }
      videoSpecificTrackInfo(VV) {
        const {
          frameRate: eV,
          transformationMatrix: xV
        } = VV.track.metadata, JV = [eV ? {
          id: qx.DefaultDuration,
          data: 1e9 / eV
        } : null];
        let YV, UV, yV;
        if (xV) {
          YV = (0, pV.ob)(xV);
          const VV = (0, pV.xc)((0, pV.Qc)(-YV), xV);
          UV = Math.sign(VV[0]), yV = Math.sign(VV[4]), -1 === yV && (yV = 1, UV = -UV, YV = (0, pV.Ac)(YV + 180))
        } else YV = VV.track.metadata.rotation ?? 0, UV = VV.track.metadata.flip ? -1 : 1, yV = 1;
        const QV = YV ? (0, pV.Ac)(-1 === UV ? YV : -YV) : 0,
          nV = Math.round(Math.acos(UV) * pV.o),
          wV = Math.round(Math.acos(yV) * pV.o),
          ZV = !!VV.info.aspectRatio && VV.info.aspectRatio.num * VV.info.height !== VV.info.aspectRatio.den * VV.info.width,
          vV = VV.info.decoderConfig.colorSpace,
          rV = {
            id: qx.Video,
            data: [{
              id: qx.PixelWidth,
              data: VV.info.width
            }, {
              id: qx.PixelHeight,
              data: VV.info.height
            }, ZV ? {
              id: qx.DisplayWidth,
              data: VV.info.aspectRatio.num
            } : null, ZV ? {
              id: qx.DisplayHeight,
              data: VV.info.aspectRatio.den
            } : null, ZV ? {
              id: qx.DisplayUnit,
              data: 3
            } : null, VV.info.alphaMode ? {
              id: qx.AlphaMode,
              data: 1
            } : null, (0, pV.lb)(vV) ? null : {
              id: qx.Colour,
              data: [{
                id: qx.MatrixCoefficients,
                data: null != vV?.matrix ? pV.k[vV.matrix] : 2
              }, {
                id: qx.TransferCharacteristics,
                data: null != vV?.transfer ? pV.r[vV.transfer] : 2
              }, {
                id: qx.Primaries,
                data: null != vV?.primaries ? pV.c[vV.primaries] : 2
              }, {
                id: qx.Range,
                data: null != vV?.fullRange ? vV.fullRange ? 2 : 1 : 0
              }]
            }, QV || nV || wV ? {
              id: qx.Projection,
              data: [{
                id: qx.ProjectionType,
                data: 0
              }, nV ? {
                id: qx.ProjectionPoseYaw,
                data: new bx(nV)
              } : null, wV ? {
                id: qx.ProjectionPosePitch,
                data: new bx(wV)
              } : null, QV ? {
                id: qx.ProjectionPoseRoll,
                data: new bx((QV + 180) % 360 - 180)
              } : null]
            } : null]
          };
        return JV.push(rV), JV
      }
      audioSpecificTrackInfo(VV) {
        const eV = YV.i.includes(VV.track.source._codec) ? (0, YV.J)(VV.track.source._codec) : null;
        return [{
          id: qx.Audio,
          data: [{
            id: qx.SamplingFrequency,
            data: new bx(VV.info.sampleRate)
          }, {
            id: qx.Channels,
            data: VV.info.numberOfChannels
          }, eV ? {
            id: qx.BitDepth,
            data: 8 * eV.sampleSize
          } : null]
        }]
      }
      subtitleSpecificTrackInfo(VV) {
        return []
      }
      maybeCreateTags() {
        const VV = [],
          eV = (eV, xV) => {
            VV.push({
              id: qx.SimpleTag,
              data: [{
                id: qx.TagName,
                data: new jx(eV)
              }, "string" === typeof xV ? {
                id: qx.TagString,
                data: new jx(xV)
              } : {
                id: qx.TagBinary,
                data: xV
              }]
            })
          },
          xV = this.output._metadataTags,
          JV = new Set;
        for (const {
            key: YV,
            value: UV
          }
          of(0, pV.ic)(xV)) switch (YV) {
          case "title":
            eV("TITLE", UV), JV.add("TITLE");
            break;
          case "description":
            eV("DESCRIPTION", UV), JV.add("DESCRIPTION");
            break;
          case "artist":
            eV("ARTIST", UV), JV.add("ARTIST");
            break;
          case "album":
            eV("ALBUM", UV), JV.add("ALBUM");
            break;
          case "albumArtist":
            eV("ALBUM_ARTIST", UV), JV.add("ALBUM_ARTIST");
            break;
          case "genre":
            eV("GENRE", UV), JV.add("GENRE");
            break;
          case "beatsPerMinute":
            eV("BPM", UV.toString()), JV.add("BPM");
            break;
          case "comment":
            eV("COMMENT", UV), JV.add("COMMENT");
            break;
          case "lyrics":
            eV("LYRICS", UV), JV.add("LYRICS");
            break;
          case "date":
            eV("DATE", UV.toISOString().slice(0, 10)), JV.add("DATE");
            break;
          case "trackNumber":
            eV("PART_NUMBER", void 0 !== xV.tracksTotal ? `${UV}/${xV.tracksTotal}` : UV.toString()), JV.add("PART_NUMBER");
            break;
          case "discNumber":
            eV("DISC", void 0 !== xV.discsTotal ? `${UV}/${xV.discsTotal}` : UV.toString()), JV.add("DISC");
            break;
          case "tracksTotal":
          case "discsTotal":
          case "images":
          case "raw":
            break;
          default:
            (0, pV.J)(YV)
        }
        if (xV.raw)
          for (const YV in xV.raw) {
            const VV = xV.raw[YV];
            null == VV || JV.has(YV) || ("string" === typeof VV || VV instanceof Uint8Array) && eV(YV, VV)
          }
        0 !== VV.length && (this.tagsElement = {
          id: qx.Tags,
          data: [{
            id: qx.Tag,
            data: [{
              id: qx.Targets,
              data: [{
                id: qx.TargetTypeValue,
                data: 50
              }, {
                id: qx.TargetType,
                data: "MOVIE"
              }]
            }, ...VV]
          }]
        })
      }
      maybeCreateAttachments() {
        const VV = this.output._metadataTags,
          eV = [],
          xV = new Set,
          JV = VV.images ?? [];
        for (const YV of JV) {
          let VV, JV = YV.name;
          if (void 0 === JV) {
            JV = ("coverFront" === YV.kind ? "cover" : "coverBack" === YV.kind ? "back" : "image") + ((0, pV.Cb)(YV.mimeType) ?? "")
          }
          for (;;) {
            VV = 0n;
            for (let eV = 0; eV < 8; eV++) VV <<= 8n, VV |= BigInt(Math.floor(256 * Math.random()));
            if (0n !== VV && !xV.has(VV)) break
          }
          xV.add(VV), eV.push({
            id: qx.AttachedFile,
            data: [void 0 !== YV.description ? {
              id: qx.FileDescription,
              data: new jx(YV.description)
            } : null, {
              id: qx.FileName,
              data: new jx(JV)
            }, {
              id: qx.FileMediaType,
              data: YV.mimeType
            }, {
              id: qx.FileData,
              data: YV.data
            }, {
              id: qx.FileUID,
              data: VV
            }]
          })
        }
        for (const [YV, UV] of Object.entries(VV.raw ?? {})) {
          if (!(UV instanceof rV.c)) continue;
          /^\d+$/.test(YV) && (JV.find((VV => VV.mimeType === UV.mimeType && (0, pV.vd)(VV.data, UV.data))) || eV.push({
            id: qx.AttachedFile,
            data: [void 0 !== UV.description ? {
              id: qx.FileDescription,
              data: new jx(UV.description)
            } : null, {
              id: qx.FileName,
              data: new jx(UV.name ?? "")
            }, {
              id: qx.FileMediaType,
              data: UV.mimeType ?? ""
            }, {
              id: qx.FileData,
              data: UV.data
            }, {
              id: qx.FileUID,
              data: BigInt(YV)
            }]
          }))
        }
        0 !== eV.length && (this.attachmentsElement = {
          id: qx.Attachments,
          data: eV
        })
      }
      createSegment() {
        this.createTracks(), this.maybeCreateTags(), this.maybeCreateAttachments(), this.maybeCreateSeekHead(!1);
        const VV = {
          id: qx.Segment,
          size: this.format._options.appendOnly ? -1 : 6,
          data: [this.seekHead, this.segmentInfo, this.tracksElement, this.attachmentsElement, this.tagsElement]
        };
        if (this.segment = VV, this.format._options.onSegmentHeader && this.writer.startTrackingWrites(), this.ebmlWriter.writeEBML(VV), this.format._options.onSegmentHeader) {
          const {
            data: VV,
            start: eV
          } = this.writer.stopTrackingWrites();
          this.format._options.onSegmentHeader(VV, eV)
        }
      }
      createCues() {
        this.cues = {
          id: qx.Cues,
          data: []
        }
      }
      get segmentDataOffset() {
        return (0, pV.L)(this.segment), this.ebmlWriter.dataOffsets.get(this.segment)
      }
      allTracksAreKnown() {
        for (const VV of this.output.tracks)
          if (!VV.source._closed && !this.trackDatas.some((eV => eV.track === VV))) return !1;
        return !0
      }
      async getMimeType() {
        await this.allTracksKnown.promise;
        const VV = this.trackDatas.map((VV => {
          if ("video" === VV.type) return VV.info.decoderConfig.codec;
          if ("audio" === VV.type) return VV.info.decoderConfig.codec;
          return {
            webvtt: "wvtt"
          } [VV.track.source._codec]
        }));
        return (VV => {
          let eV = (VV.hasVideo ? "video/" : VV.hasAudio ? "audio/" : "application/") + (VV.isWebM ? "webm" : "x-matroska");
          VV.codecStrings.length > 0 && (eV += `; codecs="${[...new Set(VV.codecStrings.filter(Boolean))].join(", ")}"`);
          return eV
        })({
          isWebM: this.format instanceof cx,
          hasVideo: this.trackDatas.some((VV => "video" === VV.type)),
          hasAudio: this.trackDatas.some((VV => "audio" === VV.type)),
          codecStrings: VV
        })
      }
      getVideoTrackData(VV, eV, xV) {
        const JV = this.trackDatas.find((eV => eV.track === VV));
        if (JV) return JV;
        (0, YV.P)(xV, VV.source._codec), (0, pV.L)(xV), (0, pV.L)(xV.decoderConfig), (0, pV.L)(void 0 !== xV.decoderConfig.codedWidth), (0, pV.L)(void 0 !== xV.decoderConfig.codedHeight);
        const UV = xV.decoderConfig.displayAspectWidth,
          yV = xV.decoderConfig.displayAspectHeight,
          QV = void 0 === UV || void 0 === yV ? null : (0, pV.hd)({
            num: UV,
            den: yV
          }),
          nV = {
            track: VV,
            type: "video",
            info: {
              width: xV.decoderConfig.codedWidth,
              height: xV.decoderConfig.codedHeight,
              aspectRatio: QV,
              decoderConfig: xV.decoderConfig,
              alphaMode: VV.metadata.canBeTransparent || (eV ? !!eV.sideData.alpha : null)
            },
            chunkQueue: [],
            lastWrittenMsTimestamp: null,
            codecPrivate: xV.decoderConfig.description ?? null,
            closed: !1
          };
        return "vp9" === VV.source._codec ? nV.codecPrivate = new Uint8Array((0, YV.B)(nV.info.decoderConfig.codec)) : "av1" === VV.source._codec ? nV.codecPrivate = new Uint8Array((0, YV.z)(nV.info.decoderConfig.codec)) : "prores" === VV.source._codec && (nV.codecPrivate = pV.ld.encode(xV.decoderConfig.codec)), this.trackDatas.push(nV), this.trackDatas.sort(((VV, eV) => VV.track.id - eV.track.id)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), nV
      }
      getAudioTrackData(VV, eV, xV) {
        const UV = this.trackDatas.find((eV => eV.track === VV));
        if (UV) return UV;
        (0, YV.L)(xV, VV.source._codec), (0, pV.L)(xV), (0, pV.L)(xV.decoderConfig);
        const yV = {
          ...xV.decoderConfig
        };
        let nV = !1;
        if ("aac" === VV.source._codec && !yV.description) {
          if (!eV) throw new Error("No AAC description provided; you must therefore provide a priming packet.");
          const VV = nx(QV.tempFromBytes(eV.data));
          if (!VV) throw new Error("Couldn't parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");
          const xV = JV.g[VV.samplingFrequencyIndex],
            YV = JV.c[VV.channelConfiguration];
          if (void 0 === xV || void 0 === YV) throw new Error("Invalid ADTS frame header.");
          yV.description = (0, JV.j)({
            objectType: VV.objectType,
            outputSampleRate: xV,
            outputNumberOfChannels: YV
          }), nV = !0
        }
        const wV = {
          track: VV,
          type: "audio",
          info: {
            numberOfChannels: xV.decoderConfig.numberOfChannels,
            sampleRate: xV.decoderConfig.sampleRate,
            decoderConfig: yV,
            requiresAdtsStripping: nV
          },
          chunkQueue: [],
          lastWrittenMsTimestamp: null,
          codecPrivate: yV.description ?? null,
          closed: !1
        };
        return this.trackDatas.push(wV), this.trackDatas.sort(((VV, eV) => VV.track.id - eV.track.id)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), wV
      }
      getSubtitleTrackData(VV, eV) {
        const xV = this.trackDatas.find((eV => eV.track === VV));
        if (xV) return xV;
        (0, YV.O)(eV), (0, pV.L)(eV), (0, pV.L)(eV.config);
        const JV = {
          track: VV,
          type: "subtitle",
          info: {
            config: eV.config
          },
          chunkQueue: [],
          lastWrittenMsTimestamp: null,
          codecPrivate: pV.ld.encode(eV.config.description),
          closed: !1
        };
        return this.trackDatas.push(JV), this.trackDatas.sort(((VV, eV) => VV.track.id - eV.track.id)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), JV
      }
      async addEncodedVideoPacket(VV, eV, xV) {
        const JV = await this.mutex.acquire();
        try {
          const JV = this.getVideoTrackData(VV, eV, xV);
          JV.info.alphaMode ??= !!eV.sideData.alpha;
          let YV = eV.data;
          if ("prores" === VV.source._codec) {
            if (YV.byteLength < 8) throw new Error("ProRes packet too small, expected at least 8 bytes.");
            YV = YV.subarray(8)
          }
          const UV = "key" === eV.type;
          this.validateTimestamp(JV.track, eV.timestamp, UV);
          let yV = eV.timestamp,
            QV = eV.duration;
          void 0 !== VV.metadata.frameRate && (yV = (0, pV.Tc)(yV, VV.metadata.frameRate), QV = (0, pV.Tc)(QV, VV.metadata.frameRate));
          const nV = JV.info.alphaMode ? eV.sideData.alpha ?? null : null,
            wV = this.createInternalChunk(YV, yV, QV, eV.type, nV);
          "vp9" === VV.source._codec && this.fixVP9ColorSpace(JV, wV), JV.chunkQueue.push(wV), await this.interleaveChunks()
        } finally {
          JV()
        }
      }
      async addEncodedAudioPacket(VV, eV, xV) {
        const JV = await this.mutex.acquire();
        try {
          const JV = this.getAudioTrackData(VV, eV, xV);
          let YV = eV.data;
          if (JV.info.requiresAdtsStripping) {
            const VV = nx(QV.tempFromBytes(YV));
            if (!VV) throw new Error("Expected ADTS frame, didn't get one.");
            const eV = null === VV.crcCheck ? 7 : 9;
            YV = YV.subarray(eV)
          }
          const UV = "key" === eV.type;
          this.validateTimestamp(JV.track, eV.timestamp, UV);
          const yV = this.createInternalChunk(YV, eV.timestamp, eV.duration, eV.type);
          JV.chunkQueue.push(yV), await this.interleaveChunks()
        } finally {
          JV()
        }
      }
      async addSubtitleCue(VV, eV, xV) {
        const JV = await this.mutex.acquire();
        try {
          const JV = this.getSubtitleTrackData(VV, xV);
          this.validateTimestamp(JV.track, eV.timestamp, !0);
          let YV = eV.text;
          const UV = Math.round(1e3 * eV.timestamp);
          BV.i.lastIndex = 0, YV = YV.replace(BV.i, (VV => {
            const eV = (0, BV.j)(VV.slice(1, -1)) - UV;
            return `<${(0,BV.g)(eV)}>`
          }));
          const yV = pV.ld.encode(YV),
            QV = `${eV.settings??""}\n${eV.identifier??""}\n${eV.notes??""}`,
            nV = this.createInternalChunk(yV, eV.timestamp, eV.duration, "key", QV.trim() ? pV.ld.encode(QV) : null);
          JV.chunkQueue.push(nV), await this.interleaveChunks()
        } finally {
          JV()
        }
      }
      async interleaveChunks() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (VV || this.allTracksAreKnown()) {
          VV: for (;;) {
            let eV = null,
              xV = 1 / 0;
            for (const YV of this.trackDatas) {
              if (!VV && 0 === YV.chunkQueue.length && !YV.closed) break VV;
              YV.chunkQueue.length > 0 && YV.chunkQueue[0].timestamp < xV && (eV = YV, xV = YV.chunkQueue[0].timestamp)
            }
            if (!eV) break;
            const JV = eV.chunkQueue.shift();
            this.writeBlock(eV, JV)
          }
          VV || await this.writer.flush()
        }
      }
      fixVP9ColorSpace(VV, eV) {
        if ("key" !== eV.type) return;
        if (!VV.info.decoderConfig.colorSpace || !VV.info.decoderConfig.colorSpace.matrix) return;
        const xV = new EV.b(eV.data);
        xV.skipBits(2);
        const JV = xV.readBits(1),
          YV = (xV.readBits(1) << 1) + JV;
        3 === YV && xV.skipBits(1);
        if (xV.readBits(1)) return;
        if (0 !== xV.readBits(1)) return;
        xV.skipBits(2);
        if (4817730 !== xV.readBits(24)) return;
        YV >= 2 && xV.skipBits(1);
        const UV = {
          rgb: 7,
          bt709: 2,
          bt470bg: 1,
          smpte170m: 3
        } [VV.info.decoderConfig.colorSpace.matrix];
        (0, pV.Bd)(eV.data, xV.pos, xV.pos + 3, UV)
      }
      createInternalChunk(VV, eV, xV, JV) {
        return {
          data: VV,
          type: JV,
          timestamp: eV,
          duration: xV,
          additions: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
        }
      }
      writeBlock(VV, eV) {
        this.segment || this.createSegment();
        const xV = Math.round(1e3 * eV.timestamp),
          JV = this.trackDatas.every((xV => {
            if (VV === xV) return "key" === eV.type;
            const JV = xV.chunkQueue[0];
            return JV ? "key" === JV.type : xV.closed
          }));
        let YV = !1;
        if (this.currentCluster) {
          (0, pV.L)(null !== this.currentClusterStartMsTimestamp), (0, pV.L)(null !== this.currentClusterMaxMsTimestamp);
          const VV = xV - this.currentClusterStartMsTimestamp;
          YV = JV && xV > this.currentClusterMaxMsTimestamp && VV >= 1e3 * (this.format._options.minimumClusterDuration ?? 1) || VV > 32767
        } else YV = !0;
        YV && this.createNewCluster(xV);
        const UV = xV - this.currentClusterStartMsTimestamp;
        if (UV < -32768) {
          if (!this.warnedAboutTooNegativeTimestamp) {
            const VV = this.format instanceof cx ? "WebM" : "Matroska";
            yV.c._warn(`Packets had to be discarded because their timestamp is too negative to represent in ${VV}.`), this.warnedAboutTooNegativeTimestamp = !0
          }
          return
        }
        const QV = new Uint8Array(4),
          nV = new DataView(QV.buffer);
        nV.setUint8(0, 128 | VV.track.id), nV.setInt16(1, UV, !1);
        const wV = Math.round(1e3 * eV.duration);
        if (!!eV.additions || "subtitle" === VV.type) {
          const JV = {
            id: qx.BlockGroup,
            data: [{
              id: qx.Block,
              data: [QV, eV.data]
            }, "delta" === eV.type ? {
              id: qx.ReferenceBlock,
              data: new Bx(VV.lastWrittenMsTimestamp - xV)
            } : null, eV.additions ? {
              id: qx.BlockAdditions,
              data: [{
                id: qx.BlockMore,
                data: [{
                  id: qx.BlockAddID,
                  data: 1
                }, {
                  id: qx.BlockAdditional,
                  data: eV.additions
                }]
              }]
            } : null, wV > 0 ? {
              id: qx.BlockDuration,
              data: wV
            } : null]
          };
          this.ebmlWriter.writeEBML(JV)
        } else {
          nV.setUint8(3, Number("key" === eV.type) << 7);
          const VV = {
            id: qx.SimpleBlock,
            data: [QV, eV.data]
          };
          this.ebmlWriter.writeEBML(VV)
        }
        this.startTimestamp = Math.min(this.startTimestamp, xV), this.endTimestamp = Math.max(this.endTimestamp, xV + wV), VV.lastWrittenMsTimestamp = xV, this.trackDatasInCurrentCluster.has(VV) || this.trackDatasInCurrentCluster.set(VV, {
          firstMsTimestamp: xV
        }), this.currentClusterMaxMsTimestamp = Math.max(this.currentClusterMaxMsTimestamp, xV)
      }
      createNewCluster(VV) {
        VV = Math.max(0, VV), this.currentCluster && this.finalizeCurrentCluster(), this.format._options.onCluster && this.writer.startTrackingWrites(), this.currentCluster = {
          id: qx.Cluster,
          size: this.format._options.appendOnly ? -1 : 5,
          data: [{
            id: qx.Timestamp,
            data: VV
          }]
        }, this.ebmlWriter.writeEBML(this.currentCluster), this.currentClusterStartMsTimestamp = VV, this.currentClusterMaxMsTimestamp = VV, this.trackDatasInCurrentCluster.clear()
      }
      finalizeCurrentCluster() {
        if ((0, pV.L)(this.currentCluster), !this.format._options.appendOnly) {
          const VV = this.writer.getPos() - this.ebmlWriter.dataOffsets.get(this.currentCluster),
            eV = this.writer.getPos();
          this.writer.seek(this.ebmlWriter.offsets.get(this.currentCluster) + 4), this.ebmlWriter.writeVarInt(VV, 5), this.writer.seek(eV)
        }
        if (this.format._options.onCluster) {
          (0, pV.L)(null !== this.currentClusterStartMsTimestamp);
          const {
            data: VV,
            start: eV
          } = this.writer.stopTrackingWrites();
          this.format._options.onCluster(VV, eV, this.currentClusterStartMsTimestamp / 1e3)
        }
        const VV = this.ebmlWriter.offsets.get(this.currentCluster) - this.segmentDataOffset,
          eV = new Map;
        for (const [JV, {
            firstMsTimestamp: YV
          }] of this.trackDatasInCurrentCluster) eV.has(YV) || eV.set(YV, []), eV.get(YV).push(JV);
        const xV = [...eV.entries()].sort(((VV, eV) => VV[0] - eV[0]));
        for (const [JV, YV] of xV)(0, pV.L)(this.cues), this.cues.data.push({
          id: qx.CuePoint,
          data: [{
            id: qx.CueTime,
            data: Math.max(0, JV)
          }, ...YV.map((eV => ({
            id: qx.CueTrackPositions,
            data: [{
              id: qx.CueTrack,
              data: eV.track.id
            }, {
              id: qx.CueClusterPosition,
              data: VV
            }]
          })))]
        })
      }
      async onTrackClose(VV) {
        const eV = await this.mutex.acquire(),
          xV = this.trackDatas.find((eV => eV.track === VV));
        xV && (xV.closed = !0), this.allTracksAreKnown() && this.allTracksKnown.resolve(), await this.interleaveChunks(), eV()
      }
      async finalize() {
        const VV = await this.mutex.acquire();
        this.allTracksKnown.resolve();
        for (const eV of this.trackDatas) eV.closed = !0;
        if (this.segment || this.createSegment(), await this.interleaveChunks(!0), this.currentCluster && this.finalizeCurrentCluster(), (0, pV.L)(this.cues), this.ebmlWriter.writeEBML(this.cues), !this.format._options.appendOnly) {
          const VV = this.writer.getPos() - this.segmentDataOffset;
          this.writer.seek(this.ebmlWriter.offsets.get(this.segment) + 4), this.ebmlWriter.writeVarInt(VV, 6);
          const eV = this.startTimestamp === 1 / 0 ? 0 : this.endTimestamp;
          this.segmentDuration.data = new Ex(eV), this.writer.seek(this.ebmlWriter.offsets.get(this.segmentDuration)), this.ebmlWriter.writeEBML(this.segmentDuration), (0, pV.L)(this.seekHead), this.writer.seek(this.ebmlWriter.offsets.get(this.seekHead)), this.maybeCreateSeekHead(!0), this.ebmlWriter.writeEBML(this.seekHead)
        }
        VV()
      }
    }
    const Mx = new Uint32Array(256);
    for (let hx = 0; hx < 256; hx++) {
      let VV = hx << 24;
      for (let eV = 0; eV < 8; eV++) VV = 2147483648 & VV ? VV << 1 ^ 79764919 : VV << 1;
      Mx[hx] = VV >>> 0 & 4294967295
    }
    new Uint8Array([9, 240]), new Uint8Array([70, 1]);
    const zx = new Uint32Array(256);
    for (let hx = 0; hx < 256; hx++) {
      let VV = hx << 24;
      for (let eV = 0; eV < 8; eV++) VV = 2147483648 & VV ? VV << 1 ^ 79764919 : VV << 1;
      zx[hx] = VV >>> 0 & 4294967295
    }
    const Gx = VV => {
        let eV = 4294967295;
        for (let xV = 0; xV < VV.length; xV++) {
          const JV = VV[xV];
          eV = (eV << 8 ^ zx[eV >>> 24 ^ JV]) >>> 0
        }
        return eV
      },
      Wx = new Uint8Array(16);
    {
      const VV = (0, pV.rd)(Wx);
      Wx[0] = 0, VV.setUint16(1, 45069, !1), VV.setUint16(3, 1, !1), Wx[5] = 193, Wx[6] = 0, Wx[7] = 0, VV.setUint16(8, 1, !1), VV.setUint16(10, 61440, !1), VV.setUint32(12, Gx(Wx.subarray(0, 12)), !1)
    }
    var Rx;
    xV(35017);
    ! function(VV) {
      VV[VV.PCM = 1] = "PCM", VV[VV.IEEE_FLOAT = 3] = "IEEE_FLOAT", VV[VV.ALAW = 6] = "ALAW", VV[VV.MULAW = 7] = "MULAW", VV[VV.EXTENSIBLE = 65534] = "EXTENSIBLE"
    }(Rx || (Rx = {}));
    xV(35024), xV(35036), xV(34930);
    class gx {
      get supportsVideoRotationMetadata() {
        return this.supportsVideoTransformationMetadata
      }
      getSupportedVideoCodecs() {
        return this.getSupportedCodecs().filter((VV => YV.k.includes(VV)))
      }
      getSupportedAudioCodecs() {
        return this.getSupportedCodecs().filter((VV => YV.b.includes(VV)))
      }
      getSupportedSubtitleCodecs() {
        return this.getSupportedCodecs().filter((VV => YV.j.includes(VV)))
      }
      _codecUnsupportedHint(VV) {
        return ""
      }
      _isFragmentedIsobmff() {
        return !1
      }
    }
    class Dx extends gx {
      constructor() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (!VV || "object" !== typeof VV) throw new TypeError("options must be an object.");
        if (void 0 !== VV.fastStart && ![!1, "in-memory", "reserve", "fragmented"].includes(VV.fastStart)) throw new TypeError("options.fastStart, when provided, must be false, 'in-memory', 'reserve', or 'fragmented'.");
        if (void 0 !== VV.minimumFragmentDuration && (!(0, pV.Wb)(VV.minimumFragmentDuration) || VV.minimumFragmentDuration < 0)) throw new TypeError("options.minimumFragmentDuration, when provided, must be a non-negative number.");
        if (void 0 !== VV.onFtyp && "function" !== typeof VV.onFtyp) throw new TypeError("options.onFtyp, when provided, must be a function.");
        if (void 0 !== VV.onMoov && "function" !== typeof VV.onMoov) throw new TypeError("options.onMoov, when provided, must be a function.");
        if (void 0 !== VV.onMdat && "function" !== typeof VV.onMdat) throw new TypeError("options.onMdat, when provided, must be a function.");
        if (void 0 !== VV.onMoof && "function" !== typeof VV.onMoof) throw new TypeError("options.onMoof, when provided, must be a function.");
        if (void 0 !== VV.metadataFormat && !["mdir", "mdta", "udta", "auto"].includes(VV.metadataFormat)) throw new TypeError("options.metadataFormat, when provided, must be either 'auto', 'mdir', 'mdta', or 'udta'.");
        super(), this._options = VV
      }
      getSupportedTrackCounts() {
        const VV = 2 ** 32 - 1;
        return {
          video: {
            min: 0,
            max: VV
          },
          audio: {
            min: 0,
            max: VV
          },
          subtitle: {
            min: 0,
            max: VV
          },
          total: {
            min: 0,
            max: VV
          }
        }
      }
      get supportsVideoTransformationMetadata() {
        return !0
      }
      get supportsTimestampedMediaData() {
        return !0
      }
      get negativeTimestampSupport() {
        return "full"
      }
      _createMuxer(VV) {
        return new kx(VV, this)
      }
      _isFragmentedIsobmff() {
        return "fragmented" === this._options.fastStart
      }
    }
    class ix extends Dx {
      constructor(VV) {
        super(VV)
      }
      get _name() {
        return "MP4"
      }
      get fileExtension() {
        return ".mp4"
      }
      get mimeType() {
        return "video/mp4"
      }
      getSupportedCodecs() {
        return [...YV.k, ...YV.e, "pcm-s16", "pcm-s16be", "pcm-s24", "pcm-s24be", "pcm-s32", "pcm-s32be", "pcm-f32", "pcm-f32be", "pcm-f64", "pcm-f64be", ...YV.j]
      }
      _codecUnsupportedHint(VV) {
        return (new ax).getSupportedCodecs().includes(VV) ? " Switching to MOV will grant support for this codec." : ""
      }
    }
    class Cx extends Dx {
      constructor(VV) {
        super(VV)
      }
      get _name() {
        return "CMAF"
      }
      get fileExtension() {
        return ".m4s"
      }
      get mimeType() {
        return "video/mp4"
      }
      getSupportedCodecs() {
        return [...YV.k, ...YV.e, "pcm-s16", "pcm-s16be", "pcm-s24", "pcm-s24be", "pcm-s32", "pcm-s32be", "pcm-f32", "pcm-f32be", "pcm-f64", "pcm-f64be", ...YV.j]
      }
    }
    class ax extends Dx {
      constructor(VV) {
        super(VV)
      }
      get _name() {
        return "MOV"
      }
      get fileExtension() {
        return ".mov"
      }
      get mimeType() {
        return "video/quicktime"
      }
      getSupportedCodecs() {
        return [...YV.k, ...YV.b]
      }
      _codecUnsupportedHint(VV) {
        return (new ix).getSupportedCodecs().includes(VV) ? " Switching to MP4 will grant support for this codec." : ""
      }
    }
    class ox extends gx {
      constructor() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (!VV || "object" !== typeof VV) throw new TypeError("options must be an object.");
        if (void 0 !== VV.appendOnly && "boolean" !== typeof VV.appendOnly) throw new TypeError("options.appendOnly, when provided, must be a boolean.");
        if (void 0 !== VV.minimumClusterDuration && (!(0, pV.Wb)(VV.minimumClusterDuration) || VV.minimumClusterDuration < 0)) throw new TypeError("options.minimumClusterDuration, when provided, must be a non-negative number.");
        if (void 0 !== VV.onEbmlHeader && "function" !== typeof VV.onEbmlHeader) throw new TypeError("options.onEbmlHeader, when provided, must be a function.");
        if (void 0 !== VV.onSegmentHeader && "function" !== typeof VV.onSegmentHeader) throw new TypeError("options.onHeader, when provided, must be a function.");
        if (void 0 !== VV.onCluster && "function" !== typeof VV.onCluster) throw new TypeError("options.onCluster, when provided, must be a function.");
        super(), this._options = VV
      }
      _createMuxer(VV) {
        return new Xx(VV, this)
      }
      get _name() {
        return "Matroska"
      }
      getSupportedTrackCounts() {
        const VV = 127;
        return {
          video: {
            min: 0,
            max: VV
          },
          audio: {
            min: 0,
            max: VV
          },
          subtitle: {
            min: 0,
            max: VV
          },
          total: {
            min: 0,
            max: VV
          }
        }
      }
      get fileExtension() {
        return ".mkv"
      }
      get mimeType() {
        return "video/x-matroska"
      }
      getSupportedCodecs() {
        return [...YV.k, ...YV.e, ...YV.i.filter((VV => !["pcm-s8", "pcm-f32be", "pcm-f64be", "ulaw", "alaw"].includes(VV))), ...YV.j]
      }
      get supportsVideoTransformationMetadata() {
        return !1
      }
      get supportsTimestampedMediaData() {
        return !0
      }
      get negativeTimestampSupport() {
        return "prefer-non-negative"
      }
    }
    class cx extends ox {
      constructor(VV) {
        super(VV)
      }
      getSupportedCodecs() {
        return [...YV.k.filter((VV => ["vp8", "vp9", "av1"].includes(VV))), ...YV.b.filter((VV => ["opus", "vorbis"].includes(VV))), ...YV.j]
      }
      get _name() {
        return "WebM"
      }
      get fileExtension() {
        return ".webm"
      }
      get mimeType() {
        return "video/webm"
      }
      _codecUnsupportedHint(VV) {
        return (new ox).getSupportedCodecs().includes(VV) ? " Switching to MKV will grant support for this codec." : ""
      }
    }
  },
  34930: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => qV
    });
    var JV = xV(34933),
      YV = xV(34939),
      UV = xV(34946),
      yV = xV(35036),
      pV = xV(35006),
      QV = xV(34998),
      nV = xV(34973),
      wV = xV(35017),
      ZV = xV(34965);
    const vV = ["video", "audio", "subtitle"];
    class rV {
      constructor(VV, eV, xV, JV, YV) {
        this.id = VV, this.output = eV, this.type = xV, this.source = JV, this.metadata = YV
      }
      isVideoTrack() {
        return "video" === this.type
      }
      isAudioTrack() {
        return "audio" === this.type
      }
      isSubtitleTrack() {
        return "subtitle" === this.type
      }
      canBePairedWith(VV) {
        if (!(VV instanceof rV)) throw new TypeError("other must be an OutputTrack.");
        if (this === VV) return !1;
        const eV = (0, JV.nd)(this.metadata.group),
          xV = (0, JV.nd)(VV.metadata.group);
        for (const JV of eV) {
          if (this.type !== VV.type && xV.some((VV => JV === VV))) return !0;
          if (xV.some((VV => JV._pairedGroups.has(VV)))) return !0
        }
        return !1
      }
    }
    class kV extends rV {
      constructor(VV, eV, xV, JV) {
        super(VV, eV, "video", xV, JV)
      }
    }
    class bV extends rV {
      constructor(VV, eV, xV, JV) {
        super(VV, eV, "audio", xV, JV)
      }
    }
    class EV extends rV {
      constructor(VV, eV, xV, JV) {
        super(VV, eV, "subtitle", xV, JV)
      }
    }
    class BV {
      constructor() {
        this._pairedGroups = new Set
      }
      pairWith(VV) {
        if (!(VV instanceof BV)) throw new TypeError("other must be an OutputTrackGroup.");
        if (this === VV) throw new TypeError("Cannot pair a group with itself.");
        this._pairedGroups.add(VV), VV._pairedGroups.add(this)
      }
    }
    const jV = VV => {
      if (!VV || "object" !== typeof VV) throw new TypeError("metadata must be an object.");
      if (void 0 !== VV.languageCode && !(0, JV.Ob)(VV.languageCode)) throw new TypeError("metadata.languageCode, when provided, must be a three-letter, ISO 639-2/T language code.");
      if (void 0 !== VV.name && "string" !== typeof VV.name) throw new TypeError("metadata.name, when provided, must be a string.");
      if (void 0 !== VV.disposition && (0, YV.q)(VV.disposition), void 0 !== VV.maximumPacketCount && (!Number.isInteger(VV.maximumPacketCount) || VV.maximumPacketCount < 0)) throw new TypeError("metadata.maximumPacketCount, when provided, must be a non-negative integer.");
      if (void 0 !== VV.bitrate && (!Number.isFinite(VV.bitrate) || VV.bitrate < 0)) throw new TypeError("metadata.bitrate, when provided, must be a non-negative number.");
      if (void 0 !== VV.averageBitrate && (!Number.isFinite(VV.averageBitrate) || VV.averageBitrate < 0)) throw new TypeError("metadata.averageBitrate, when provided, must be a non-negative number.");
      if (void 0 !== VV.group && !(VV.group instanceof BV) && (!Array.isArray(VV.group) || VV.group.some((VV => !(VV instanceof BV))))) throw new TypeError("metadata.group, when provided, must be an OutputTrackGroup instance or an array of OutputTrackGroup instances.")
    };
    class qV extends JV.g {
      get target() {
        const VV = "Output.target cannot be used when using PathedTarget with an async callback. Use the 'target' event instead.";
        if (this._rootTargetPromise) throw new TypeError(VV);
        const eV = this._getRootTarget();
        if ((0, JV.ac)(eV)) throw new TypeError(VV);
        return eV
      }
      constructor(VV) {
        if (super(), this.state = "pending", this.defaultTrackGroup = new BV, this.tracks = [], this._onFinalize = null, this._unfinalizedTargets = new Set, this._rootWriterPromise = null, this._startPromise = null, this._cancelPromise = null, this._finalizePromise = null, this._mutex = new JV.b, this._metadataTags = {}, this._rootTarget = null, this._rootTargetPromise = null, this._firstMediaStreamTimestamp = null, !VV || "object" !== typeof VV) throw new TypeError("options must be an object.");
        if (!(VV.format instanceof UV.m)) throw new TypeError("options.format must be an OutputFormat.");
        if (!(VV.target instanceof pV.i || VV.target instanceof pV.h)) throw new TypeError("options.target must be a Target or a PathedTarget.");
        if (VV.target instanceof pV.i && this._rememberTarget(VV.target), void 0 !== VV.initTarget && !(VV.initTarget instanceof pV.i) && "function" !== typeof VV.initTarget) throw new Error("options.initTarget, when provided, must be a Target or a function that returns or resolves to a Target.");
        if (void 0 !== VV.onFinalize && "function" !== typeof VV.onFinalize) throw new TypeError("options.onFinalize, when provided, must be a function.");
        this.format = VV.format, this.CZ = VV.target, this._onFinalize = VV.onFinalize ?? null, this._initTarget = VV.initTarget ?? null, this._initTarget instanceof pV.i && this._rememberTarget(this._initTarget), this._muxer = VV.format._createMuxer(this)
      }
      _getTargetValidated(VV) {
        (0, JV.L)(this.CZ instanceof pV.h);
        const eV = this.CZ.getTarget(VV),
          xV = VV => {
            if (!(VV instanceof pV.i)) throw new TypeError("getTarget must return a Target.");
            return VV
          };
        return (0, JV.ac)(eV) ? eV.then(xV) : xV(eV)
      }
      async _getTarget(VV) {
        (0, JV.L)(this.CZ instanceof pV.h);
        const eV = await this._getTargetValidated(VV);
        return this._emit("target", {
          target: eV,
          request: VV,
          isRoot: VV.isRoot
        }), "canceled" === this.state ? await eV._close() : this._rememberTarget(eV), eV
      }
      _rememberTarget(VV) {
        this._unfinalizedTargets.add(VV), VV.on("finalized", (() => this._unfinalizedTargets.delete(VV)), {
          once: !0
        })
      }
      async _getInitTarget() {
        if ((0, JV.L)(null !== this._initTarget), this._initTarget instanceof pV.i) return this._initTarget;
        const VV = await this._initTarget();
        return "canceled" === this.state ? await VV._close() : this._rememberTarget(VV), VV
      }
      _hasInitTarget() {
        return null !== this._initTarget
      }
      _getRootTarget() {
        if (this._rootTarget) return this._rootTarget;
        if (this._rootTargetPromise) return this._rootTargetPromise;
        if (this.CZ instanceof pV.i) return this._emit("target", {
          target: this.CZ,
          request: null,
          isRoot: !0
        }), this._rootTarget = this.CZ, this.CZ;
        const VV = {
            path: this.CZ.rootPath,
            isRoot: !0,
            mimeType: this.format.mimeType
          },
          eV = this._getTargetValidated(VV),
          xV = eV => ("canceled" === this.state ? eV._close() : this._rememberTarget(eV), this._emit("target", {
            target: eV,
            request: VV,
            isRoot: !0
          }), this._rootTarget = eV, eV);
        return (0, JV.ac)(eV) ? this._rootTargetPromise = eV.then(xV) : xV(eV)
      }
      _getRootWriter(VV) {
        return this._rootWriterPromise ??= (async () => {
          const eV = await this._getRootTarget(),
            xV = new QV.c(eV, "boolean" === typeof VV ? VV : VV(eV));
          return xV.start(), xV
        })()
      }
      addVideoTrack(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!(VV instanceof yV.k)) throw new TypeError("source must be a VideoSource.");
        if (jV(eV), void 0 !== eV.rotation && ![0, 90, 180, 270].includes(eV.rotation)) throw new TypeError(`Invalid video rotation: ${eV.rotation}. Has to be 0, 90, 180 or 270.`);
        if (void 0 !== eV.flip && "boolean" !== typeof eV.flip) throw new TypeError("metadata.flip, when provided, must be a boolean.");
        if (void 0 !== eV.transformationMatrix && (!Array.isArray(eV.transformationMatrix) || 9 !== eV.transformationMatrix.length || !eV.transformationMatrix.every((VV => Number.isFinite(VV))))) throw new TypeError("metadata.transformationMatrix, when provided, must be an array of 9 finite numbers.");
        if (void 0 !== eV.frameRate && (!Number.isFinite(eV.frameRate) || eV.frameRate <= 0)) throw new TypeError(`Invalid video frame rate: ${eV.frameRate}. Must be a positive number.`);
        if (void 0 !== eV.hasOnlyKeyPackets && "boolean" !== typeof eV.hasOnlyKeyPackets) throw new TypeError("metadata.hasOnlyKeyPackets, when provided, must be a boolean.");
        if (void 0 !== eV.canBeTransparent && "boolean" !== typeof eV.canBeTransparent) throw new TypeError("metadata.canBeTransparent, when provided, must be a boolean.");
        if (void 0 !== eV.decoderConfig && (0, ZV.P)({
            decoderConfig: eV.decoderConfig
          }, VV._codec), void 0 !== eV.primingPacket) {
          if (!(eV.primingPacket instanceof wV.e)) throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");
          if (void 0 === eV.decoderConfig) throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")
        }
        const xV = {
          ...eV
        };
        return xV.group ??= this.defaultTrackGroup, this._addTrack(new kV(this.tracks.length + 1, this, VV, xV))
      }
      addAudioTrack(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!(VV instanceof yV.b)) throw new TypeError("source must be an AudioSource.");
        if (jV(eV), void 0 !== eV.decoderConfig && (0, ZV.L)({
            decoderConfig: eV.decoderConfig
          }, VV._codec), void 0 !== eV.primingPacket) {
          if (!(eV.primingPacket instanceof wV.e)) throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");
          if (void 0 === eV.decoderConfig) throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")
        }
        const xV = {
          ...eV
        };
        return xV.group ??= this.defaultTrackGroup, this._addTrack(new bV(this.tracks.length + 1, this, VV, xV))
      }
      addSubtitleTrack(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!(VV instanceof yV.j)) throw new TypeError("source must be a SubtitleSource.");
        jV(eV);
        const xV = {
          ...eV
        };
        return xV.group ??= this.defaultTrackGroup, this._addTrack(new EV(this.tracks.length + 1, this, VV, xV))
      }
      setMetadataTags(VV) {
        if ((0, YV.o)(VV), "pending" !== this.state) throw new Error("Cannot set metadata tags after output has been started or canceled.");
        this._metadataTags = VV
      }
      _addTrack(VV) {
        if ("pending" !== this.state) throw new Error("Cannot add track after output has been started or canceled.");
        if (VV.source._connectedTrack) throw new Error("Source is already used for a track.");
        const eV = this.format.getSupportedTrackCounts(),
          xV = this.tracks.reduce(((eV, xV) => eV + (xV.type === VV.type ? 1 : 0)), 0),
          JV = eV[VV.type].max;
        if (xV === JV) throw new Error(0 === JV ? `${this.format._name} does not support ${VV.type} tracks.` : `${this.format._name} does not support more than ${JV} ${VV.type} track` + (1 === JV ? "" : "s") + ".");
        const YV = eV.total.max;
        if (this.tracks.length === YV) throw new Error(`${this.format._name} does not support more than ${YV} tracks` + (1 === YV ? "" : "s") + " in total.");
        if (VV.isVideoTrack()) {
          const eV = this.format.getSupportedVideoCodecs();
          if (0 === eV.length) throw new Error(`${this.format._name} does not support video tracks.` + this.format._codecUnsupportedHint(VV.source._codec));
          if (!eV.includes(VV.source._codec)) throw new Error(`Codec '${VV.source._codec}' cannot be contained within ${this.format._name}. Supported video codecs are: ${eV.map((VV=>`'${VV}'`)).join(", ")}.` + this.format._codecUnsupportedHint(VV.source._codec))
        } else if (VV.isAudioTrack()) {
          const eV = this.format.getSupportedAudioCodecs();
          if (0 === eV.length) throw new Error(`${this.format._name} does not support audio tracks.` + this.format._codecUnsupportedHint(VV.source._codec));
          if (!eV.includes(VV.source._codec)) throw new Error(`Codec '${VV.source._codec}' cannot be contained within ${this.format._name}. Supported audio codecs are: ${eV.map((VV=>`'${VV}'`)).join(", ")}.` + this.format._codecUnsupportedHint(VV.source._codec))
        } else if (VV.isSubtitleTrack()) {
          const eV = this.format.getSupportedSubtitleCodecs();
          if (0 === eV.length) throw new Error(`${this.format._name} does not support subtitle tracks.` + this.format._codecUnsupportedHint(VV.source._codec));
          if (!eV.includes(VV.source._codec)) throw new Error(`Codec '${VV.source._codec}' cannot be contained within ${this.format._name}. Supported subtitle codecs are: ${eV.map((VV=>`'${VV}'`)).join(", ")}.` + this.format._codecUnsupportedHint(VV.source._codec))
        }
        return this.tracks.push(VV), VV.source._connectedTrack = VV, VV
      }
      hasEnoughTracks() {
        const VV = this.format.getSupportedTrackCounts();
        for (const xV of vV) {
          if (this.tracks.reduce(((VV, eV) => VV + (eV.type === xV ? 1 : 0)), 0) < VV[xV].min) return !1
        }
        const eV = VV.total.min;
        return !(this.tracks.length < eV)
      }
      async start() {
        const VV = this.format.getSupportedTrackCounts();
        for (const xV of vV) {
          const eV = this.tracks.reduce(((VV, eV) => VV + (eV.type === xV ? 1 : 0)), 0),
            JV = VV[xV].min;
          if (eV < JV) throw new Error(JV === VV[xV].max ? `${this.format._name} requires exactly ${JV} ${xV} track${1===JV?"":"s"}.` : `${this.format._name} requires at least ${JV} ${xV} track${1===JV?"":"s"}.`)
        }
        const eV = VV.total.min;
        if (this.tracks.length < eV) throw new Error(eV === VV.total.max ? `${this.format._name} requires exactly ${eV} track` + (1 === eV ? "" : "s") + "." : `${this.format._name} requires at least ${eV} track` + (1 === eV ? "" : "s") + ".");
        if ("canceled" === this.state) throw new Error("Output has been canceled.");
        return this._startPromise ? (nV.c._warn("Output has already been started."), this._startPromise) : this._startPromise = (async () => {
          this.state = "started";
          const VV = this._mutex.acquire();
          try {
            await this._muxer.start();
            const VV = this.tracks.map((VV => VV.source._start()));
            await Promise.all(VV)
          } finally {
            (await VV)()
          }
        })()
      }
      getMimeType() {
        return this._muxer.getMimeType()
      }
      async cancel() {
        return "canceled" === this.state ? this._cancelPromise ?? void 0 : "finalizing" !== this.state && "finalized" !== this.state ? this._cancelPromise = (async () => {
          this.state = "canceled";
          const VV = await this._mutex.acquire();
          try {
            const VV = this.tracks.map((VV => VV.source._flushOrWaitForOngoingClose(!0)));
            await Promise.all(VV), await Promise.all([...this._unfinalizedTargets].map((VV => VV._close()))), this._unfinalizedTargets.clear()
          } finally {
            VV()
          }
        })() : void("finalized" === this.state && nV.c._warn("Output has already been finalized."))
      }
      async finalize() {
        if ("pending" === this.state) throw new Error("Cannot finalize before starting.");
        if ("canceled" === this.state) throw new Error("Cannot finalize after canceling.");
        return this._finalizePromise ? (nV.c._warn("Output has already been finalized."), this._finalizePromise) : this._finalizePromise = (async () => {
          this.state = "finalizing";
          const VV = await this._mutex.acquire();
          try {
            const VV = this.tracks.map((VV => VV.source._flushOrWaitForOngoingClose(!1)));
            if (await Promise.all(VV), await this._muxer.finalize(), this._rootWriterPromise) {
              const VV = await this._rootWriterPromise;
              VV.finalized || (await VV.flush(), await VV.finalize())
            }
            this._onFinalize && await this._onFinalize(), this.state = "finalized"
          } catch (eV) {
            throw this.state = "canceled", eV
          } finally {
            await Promise.all([...this._unfinalizedTargets].map((VV => VV._close().catch((() => {}))))), this._unfinalizedTargets.clear(), VV()
          }
        })()
      }
    }
  },
  35017: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => UV,
      g: () => YV
    });
    var JV = xV(34933);
    const YV = new Uint8Array(0);
    class UV {
      constructor(VV, eV, xV, JV) {
        let UV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
          yV = arguments.length > 5 ? arguments[5] : void 0,
          pV = arguments.length > 6 ? arguments[6] : void 0;
        if (this.data = VV, this.type = eV, this.timestamp = xV, this.duration = JV, this.sequenceNumber = UV, VV === YV && void 0 === yV) throw new Error("Internal error: byteLength must be explicitly provided when constructing metadata-only packets.");
        if (void 0 === yV && (yV = VV.byteLength), !(VV instanceof Uint8Array)) throw new TypeError("data must be a Uint8Array.");
        if ("key" !== eV && "delta" !== eV) throw new TypeError('type must be either "key" or "delta".');
        if (!Number.isFinite(xV)) throw new TypeError("timestamp must be a number.");
        if (!Number.isFinite(JV) || JV < 0) throw new TypeError("duration must be a non-negative number.");
        if (!Number.isFinite(UV)) throw new TypeError("sequenceNumber must be a number.");
        if (!Number.isInteger(yV) || yV < 0) throw new TypeError("byteLength must be a non-negative integer.");
        if (void 0 !== pV && ("object" !== typeof pV || !pV)) throw new TypeError("sideData, when provided, must be an object.");
        if (void 0 !== pV?.alpha && !(pV.alpha instanceof Uint8Array)) throw new TypeError("sideData.alpha, when provided, must be a Uint8Array.");
        if (void 0 !== pV?.alphaByteLength && (!Number.isInteger(pV.alphaByteLength) || pV.alphaByteLength < 0)) throw new TypeError("sideData.alphaByteLength, when provided, must be a non-negative integer.");
        this.byteLength = yV, this.sideData = pV ?? {}, this.sideData.alpha && void 0 === this.sideData.alphaByteLength && (this.sideData.alphaByteLength = this.sideData.alpha.byteLength)
      }
      get isMetadataOnly() {
        return this.data === YV
      }
      get microsecondTimestamp() {
        return Math.trunc(JV.p * this.timestamp)
      }
      get microsecondDuration() {
        return Math.trunc(JV.p * this.duration)
      }
      toEncodedVideoChunk() {
        if (this.isMetadataOnly) throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");
        if ("undefined" === typeof EncodedVideoChunk) throw new Error("EncodedVideoChunk is not available in this environment.");
        return new EncodedVideoChunk({
          data: this.data,
          type: this.type,
          timestamp: this.microsecondTimestamp,
          duration: this.microsecondDuration
        })
      }
      alphaToEncodedVideoChunk() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.type;
        if (!this.sideData.alpha) throw new TypeError("This packet does not contain alpha side data.");
        if (this.isMetadataOnly) throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");
        if ("undefined" === typeof EncodedVideoChunk) throw new Error("EncodedVideoChunk is not available in this environment.");
        return new EncodedVideoChunk({
          data: this.sideData.alpha,
          type: VV,
          timestamp: this.microsecondTimestamp,
          duration: this.microsecondDuration
        })
      }
      toEncodedAudioChunk() {
        if (this.isMetadataOnly) throw new TypeError("Metadata-only packets cannot be converted to an audio chunk.");
        if ("undefined" === typeof EncodedAudioChunk) throw new Error("EncodedAudioChunk is not available in this environment.");
        return new EncodedAudioChunk({
          data: this.data,
          type: this.type,
          timestamp: this.microsecondTimestamp,
          duration: this.microsecondDuration
        })
      }
      static fromEncodedChunk(VV, eV) {
        if (!(VV instanceof EncodedVideoChunk || VV instanceof EncodedAudioChunk)) throw new TypeError("chunk must be an EncodedVideoChunk or EncodedAudioChunk.");
        const xV = new Uint8Array(VV.byteLength);
        return VV.copyTo(xV), new UV(xV, VV.type, VV.timestamp / 1e6, (VV.duration ?? 0) / 1e6, void 0, void 0, eV)
      }
      clone(VV) {
        if (void 0 !== VV && ("object" !== typeof VV || null === VV)) throw new TypeError("options, when provided, must be an object.");
        if (void 0 !== VV?.data && !(VV.data instanceof Uint8Array)) throw new TypeError("options.data, when provided, must be a Uint8Array.");
        if (void 0 !== VV?.type && "key" !== VV.type && "delta" !== VV.type) throw new TypeError('options.type, when provided, must be either "key" or "delta".');
        if (void 0 !== VV?.timestamp && !Number.isFinite(VV.timestamp)) throw new TypeError("options.timestamp, when provided, must be a number.");
        if (void 0 !== VV?.duration && !Number.isFinite(VV.duration)) throw new TypeError("options.duration, when provided, must be a number.");
        if (void 0 !== VV?.sequenceNumber && !Number.isFinite(VV.sequenceNumber)) throw new TypeError("options.sequenceNumber, when provided, must be a number.");
        if (void 0 !== VV?.sideData && ("object" !== typeof VV.sideData || null === VV.sideData)) throw new TypeError("options.sideData, when provided, must be an object.");
        return new UV(VV?.data ?? this.data, VV?.type ?? this.type, VV?.timestamp ?? this.timestamp, VV?.duration ?? this.duration, VV?.sequenceNumber ?? this.sequenceNumber, this.byteLength, VV?.sideData ?? this.sideData)
      }
    }
  },
  35032: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => RV,
      d: () => rV,
      g: () => hV,
      k: () => oV,
      n: () => FV
    });
    var JV = xV(34933),
      YV = xV(34973),
      UV = function(VV, eV, xV) {
        if (null !== eV && void 0 !== eV) {
          if ("object" !== typeof eV && "function" !== typeof eV) throw new TypeError("Object expected.");
          var JV, YV;
          if (xV) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            JV = eV[Symbol.asyncDispose]
          }
          if (void 0 === JV) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            JV = eV[Symbol.dispose], xV && (YV = JV)
          }
          if ("function" !== typeof JV) throw new TypeError("Object not disposable.");
          YV && (JV = function() {
            try {
              YV.call(this)
            } catch (VV) {
              return Promise.reject(VV)
            }
          }), VV.stack.push({
            value: eV,
            dispose: JV,
            async: xV
          })
        } else xV && VV.stack.push({
          async: !0
        });
        return eV
      },
      yV = function(VV) {
        return function(eV) {
          function xV(xV) {
            eV.error = eV.hasError ? new VV(xV, eV.error, "An error was suppressed during disposal.") : xV, eV.hasError = !0
          }
          var JV, YV = 0;
          return function VV() {
            for (; JV = eV.stack.pop();) try {
              if (!JV.async && 1 === YV) return YV = 0, eV.stack.push(JV), Promise.resolve().then(VV);
              if (JV.dispose) {
                var UV = JV.dispose.call(JV.value);
                if (JV.async) return YV |= 2, Promise.resolve(UV).then(VV, (function(eV) {
                  return xV(eV), VV()
                }))
              } else YV |= 1
            } catch (yV) {
              xV(yV)
            }
            if (1 === YV) return eV.hasError ? Promise.reject(eV.error) : Promise.resolve();
            if (eV.hasError) throw eV.error
          }()
        }
      }("function" === typeof SuppressedError ? SuppressedError : function(VV, eV, xV) {
        var JV = new Error(xV);
        return JV.name = "SuppressedError", JV.error = VV, JV.suppressed = eV, JV
      });
    (0, JV.Cc)();
    let pV = -1 / 0,
      QV = -1 / 0,
      nV = null;
    "undefined" !== typeof FinalizationRegistry && (nV = new FinalizationRegistry((VV => {
      const eV = performance.now();
      "video" === VV.type ? (eV - pV >= 1e3 && (YV.c._error("A VideoSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your VideoSamples as soon as you're done using them."), pV = eV), "undefined" !== typeof VideoFrame && VV.data instanceof VideoFrame && VV.data.close()) : (eV - QV >= 1e3 && (YV.c._error("An AudioSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your AudioSamples as soon as you're done using them."), QV = eV), "undefined" !== typeof AudioData && VV.data instanceof AudioData && VV.data.close())
    })));
    class wV {
      constructor() {
        this._referenceCount = 0, this._lastAllocationBuffer = null
      }
    }
    const ZV = ["I420", "I420P10", "I420P12", "I420A", "I420AP10", "I420AP12", "I422", "I422P10", "I422P12", "I422A", "I422AP10", "I422AP12", "I444", "I444P10", "I444P12", "I444A", "I444AP10", "I444AP12", "NV12", "RGBA", "RGBX", "BGRA", "BGRX"],
      vV = new Set(ZV);
    class rV {
      get codedWidth() {
        return this.visibleRect.width
      }
      get codedHeight() {
        return this.visibleRect.height
      }
      get displayWidth() {
        return this.rotation % 180 === 0 ? this.squarePixelWidth : this.squarePixelHeight
      }
      get displayHeight() {
        return this.rotation % 180 === 0 ? this.squarePixelHeight : this.squarePixelWidth
      }
      get microsecondTimestamp() {
        return Math.trunc(JV.p * this.timestamp)
      }
      get microsecondDuration() {
        return Math.trunc(JV.p * this.duration)
      }
      get hasAlpha() {
        return this.format && this.format.includes("A")
      }
      constructor(VV, eV) {
        if (this._closed = !1, VV instanceof ArrayBuffer || "undefined" !== typeof SharedArrayBuffer && VV instanceof SharedArrayBuffer || ArrayBuffer.isView(VV)) {
          if (!eV || "object" !== typeof eV) throw new TypeError("init must be an object.");
          if (void 0 === eV.format || !vV.has(eV.format)) throw new TypeError("init.format must be one of: " + ZV.join(", "));
          if (!Number.isInteger(eV.codedWidth) || eV.codedWidth <= 0) throw new TypeError("init.codedWidth must be a positive integer.");
          if (!Number.isInteger(eV.codedHeight) || eV.codedHeight <= 0) throw new TypeError("init.codedHeight must be a positive integer.");
          if (void 0 !== eV.rotation && ![0, 90, 180, 270].includes(eV.rotation)) throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");
          if (void 0 !== eV.flip && "boolean" !== typeof eV.flip) throw new TypeError("init.flip, when provided, must be a boolean.");
          if (!Number.isFinite(eV.timestamp)) throw new TypeError("init.timestamp must be a number.");
          if (void 0 !== eV.duration && (!Number.isFinite(eV.duration) || eV.duration < 0)) throw new TypeError("init.duration, when provided, must be a non-negative number.");
          if (void 0 !== eV.layout) {
            if (!Array.isArray(eV.layout)) throw new TypeError("init.layout, when provided, must be an array.");
            for (const VV of eV.layout) {
              if (!VV || "object" !== typeof VV || Array.isArray(VV)) throw new TypeError("Each entry in init.layout must be an object.");
              if (!Number.isInteger(VV.offset) || VV.offset < 0) throw new TypeError("plane.offset must be a non-negative integer.");
              if (!Number.isInteger(VV.stride) || VV.stride < 0) throw new TypeError("plane.stride must be a non-negative integer.")
            }
          }
          if (void 0 !== eV.visibleRect && (0, JV.zd)(eV.visibleRect, "init.visibleRect"), void 0 !== eV.displayWidth && (!Number.isInteger(eV.displayWidth) || eV.displayWidth <= 0)) throw new TypeError("init.displayWidth, when provided, must be a positive integer.");
          if (void 0 !== eV.displayHeight && (!Number.isInteger(eV.displayHeight) || eV.displayHeight <= 0)) throw new TypeError("init.displayHeight, when provided, must be a positive integer.");
          if (void 0 !== eV.displayWidth !== (void 0 !== eV.displayHeight)) throw new TypeError("init.displayWidth and init.displayHeight must be either both provided or both omitted.");
          this.format = eV.format, this.rotation = eV.rotation ?? 0, this.flip = eV.flip ?? !1, this.timestamp = eV.timestamp, this.duration = eV.duration ?? 0;
          const xV = eV.layout ?? PV(eV.format, eV.codedWidth, eV.codedHeight);
          let YV = eV.colorSpace ?? null;
          null === YV && (YV = "RGBA" === this.format || "RGBX" === this.format || "BGRA" === this.format || "BGRX" === this.format ? {
            primaries: "bt709",
            transfer: "iec61966-2-1",
            matrix: "rgb",
            fullRange: !0
          } : {
            primaries: "bt709",
            transfer: "bt709",
            matrix: "bt709",
            fullRange: !1
          }), this.visibleRect = {
            left: eV.visibleRect?.left ?? 0,
            top: eV.visibleRect?.top ?? 0,
            width: eV.visibleRect?.width ?? eV.codedWidth,
            height: eV.visibleRect?.height ?? eV.codedHeight
          }, void 0 !== eV.displayWidth ? (this.squarePixelWidth = this.rotation % 180 === 0 ? eV.displayWidth : eV.displayHeight, this.squarePixelHeight = this.rotation % 180 === 0 ? eV.displayHeight : eV.displayWidth) : (this.squarePixelWidth = this.visibleRect.width, this.squarePixelHeight = this.visibleRect.height), this._data = eV._doNotCopy ? (0, JV.sd)(VV) : (0, JV.sd)(VV).slice(), this._layout = xV, this.colorSpace = new jV(YV)
        } else if ("undefined" !== typeof VideoFrame && VV instanceof VideoFrame) {
          if (void 0 !== eV?.rotation && ![0, 90, 180, 270].includes(eV.rotation)) throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");
          if (void 0 !== eV?.flip && "boolean" !== typeof eV.flip) throw new TypeError("init.flip, when provided, must be a boolean.");
          if (void 0 !== eV?.timestamp && !Number.isFinite(eV?.timestamp)) throw new TypeError("init.timestamp, when provided, must be a number.");
          if (void 0 !== eV?.duration && (!Number.isFinite(eV.duration) || eV.duration < 0)) throw new TypeError("init.duration, when provided, must be a non-negative number.");
          void 0 !== eV?.visibleRect && (0, JV.zd)(eV.visibleRect, "init.visibleRect"), this._data = VV, this._layout = null, this.format = VV.format, this.visibleRect = {
            left: VV.visibleRect?.x ?? 0,
            top: VV.visibleRect?.y ?? 0,
            width: VV.visibleRect?.width ?? VV.codedWidth,
            height: VV.visibleRect?.height ?? VV.codedHeight
          }, this.rotation = eV?.rotation ?? 0, this.flip = eV?.flip ?? !1, this.squarePixelWidth = VV.displayWidth, this.squarePixelHeight = VV.displayHeight, this.timestamp = eV?.timestamp ?? VV.timestamp / 1e6, this.duration = eV?.duration ?? (VV.duration ?? 0) / 1e6, this.colorSpace = new jV(VV.colorSpace)
        } else if ("undefined" !== typeof HTMLImageElement && VV instanceof HTMLImageElement || "undefined" !== typeof SVGImageElement && VV instanceof SVGImageElement || "undefined" !== typeof ImageBitmap && VV instanceof ImageBitmap || "undefined" !== typeof HTMLVideoElement && VV instanceof HTMLVideoElement || "undefined" !== typeof HTMLCanvasElement && VV instanceof HTMLCanvasElement || "undefined" !== typeof OffscreenCanvas && VV instanceof OffscreenCanvas) {
          if (!eV || "object" !== typeof eV) throw new TypeError("init must be an object.");
          if (void 0 !== eV.rotation && ![0, 90, 180, 270].includes(eV.rotation)) throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");
          if (void 0 !== eV.flip && "boolean" !== typeof eV.flip) throw new TypeError("init.flip, when provided, must be a boolean.");
          if (!Number.isFinite(eV.timestamp)) throw new TypeError("init.timestamp must be a number.");
          if (void 0 !== eV.duration && (!Number.isFinite(eV.duration) || eV.duration < 0)) throw new TypeError("init.duration, when provided, must be a non-negative number.");
          if (void 0 !== eV.visibleRect && (0, JV.zd)(eV.visibleRect, "init.visibleRect"), "undefined" !== typeof VideoFrame) return new rV(new VideoFrame(VV, {
            timestamp: Math.trunc(eV.timestamp * JV.p),
            duration: Math.trunc((eV.duration ?? 0) * JV.p) || void 0,
            visibleRect: eV.visibleRect && {
              x: eV.visibleRect.left,
              y: eV.visibleRect.top,
              width: eV.visibleRect.width,
              height: eV.visibleRect.height
            }
          }), eV);
          let xV = 0,
            YV = 0;
          if ("naturalWidth" in VV ? (xV = VV.naturalWidth, YV = VV.naturalHeight) : "videoWidth" in VV ? (xV = VV.videoWidth, YV = VV.videoHeight) : "width" in VV && (xV = Number(VV.width), YV = Number(VV.height)), !xV || !YV) throw new TypeError("Could not determine dimensions.");
          const UV = eV.visibleRect ?? {
              left: 0,
              top: 0,
              width: xV,
              height: YV
            },
            yV = new OffscreenCanvas(UV.width, UV.height),
            pV = yV.getContext("2d", {
              alpha: (0, JV.Lb)(),
              willReadFrequently: !0
            });
          if (!pV) throw new Error("OffscreenCanvas must have support for the '2d' context in order to create a VideoSample from this data.");
          pV.drawImage(VV, -UV.left, -UV.top), this._data = yV, this._layout = null, this.format = "RGBX", this.visibleRect = {
            left: 0,
            top: 0,
            width: UV.width,
            height: UV.height
          }, this.squarePixelWidth = UV.width, this.squarePixelHeight = UV.height, this.rotation = eV.rotation ?? 0, this.flip = eV.flip ?? !1, this.timestamp = eV.timestamp, this.duration = eV.duration ?? 0, this.colorSpace = new jV({
            matrix: "rgb",
            primaries: "bt709",
            transfer: "iec61966-2-1",
            fullRange: !0
          })
        } else {
          if (!(VV instanceof wV)) throw new TypeError("Invalid data type: Must be a BufferSource, CanvasImageSource, or VideoSampleResource.");
          if (!eV || "object" !== typeof eV) throw new TypeError("init must be an object.");
          if (void 0 !== eV.rotation && ![0, 90, 180, 270].includes(eV.rotation)) throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");
          if (void 0 !== eV.flip && "boolean" !== typeof eV.flip) throw new TypeError("init.flip, when provided, must be a boolean.");
          if (!Number.isFinite(eV.timestamp)) throw new TypeError("init.timestamp must be a number.");
          if (void 0 !== eV.duration && (!Number.isFinite(eV.duration) || eV.duration < 0)) throw new TypeError("init.duration, when provided, must be a non-negative number.");
          if (this._data = VV, VV._referenceCount++, this.format = VV.getFormat(), null !== this.format && !ZV.includes(this.format)) throw new TypeError("getFormat() must return a VideoSamplePixelFormat or null.");
          if (this.visibleRect = {
              left: 0,
              top: 0,
              width: VV.getCodedWidth(),
              height: VV.getCodedHeight()
            }, !Number.isInteger(this.visibleRect.width) || this.visibleRect.width <= 0) throw new TypeError("getCodedWidth() must return a positive integer.");
          if (!Number.isInteger(this.visibleRect.height) || this.visibleRect.height <= 0) throw new TypeError("getCodedHeight() must return a positive integer.");
          if (this.squarePixelWidth = VV.getSquarePixelWidth(), !Number.isInteger(this.squarePixelWidth) || this.squarePixelWidth <= 0) throw new TypeError("getSquarePixelWidth() must return a positive integer.");
          if (this.squarePixelHeight = VV.getSquarePixelHeight(), !Number.isInteger(this.squarePixelHeight) || this.squarePixelHeight <= 0) throw new TypeError("getSquarePixelHeight() must return a positive integer.");
          this.rotation = eV.rotation ?? 0, this.flip = eV.flip ?? !1, this.timestamp = eV.timestamp, this.duration = eV.duration ?? 0, this.colorSpace = VV.getColorSpace()
        }
        this.encodeOptions = eV?.encodeOptions ?? {}, this.pixelAspectRatio = (0, JV.hd)({
          num: this.squarePixelWidth * this.codedHeight,
          den: this.squarePixelHeight * this.codedWidth
        }), nV?.register(this, {
          type: "video",
          data: this._data
        }, this)
      }
      clone() {
        if (this._closed) throw new Error("VideoSample is closed.");
        return (0, JV.L)(null !== this._data), this._data instanceof wV ? new rV(this._data, {
          timestamp: this.timestamp,
          duration: this.duration,
          rotation: this.rotation,
          flip: this.flip,
          encodeOptions: this.encodeOptions
        }) : qV(this._data) ? new rV(this._data.clone(), {
          timestamp: this.timestamp,
          duration: this.duration,
          rotation: this.rotation,
          flip: this.flip,
          encodeOptions: this.encodeOptions
        }) : this._data instanceof Uint8Array ? ((0, JV.L)(this._layout), new rV(this._data, {
          format: this.format,
          layout: this._layout,
          codedWidth: this.codedWidth,
          codedHeight: this.codedHeight,
          timestamp: this.timestamp,
          duration: this.duration,
          colorSpace: this.colorSpace,
          rotation: this.rotation,
          flip: this.flip,
          visibleRect: this.visibleRect,
          displayWidth: this.displayWidth,
          displayHeight: this.displayHeight,
          encodeOptions: this.encodeOptions,
          _doNotCopy: !0
        })) : new rV(this._data, {
          format: this.format,
          codedWidth: this.codedWidth,
          codedHeight: this.codedHeight,
          timestamp: this.timestamp,
          duration: this.duration,
          colorSpace: this.colorSpace,
          rotation: this.rotation,
          flip: this.flip,
          visibleRect: this.visibleRect,
          displayWidth: this.displayWidth,
          displayHeight: this.displayHeight,
          encodeOptions: this.encodeOptions
        })
      }
      close() {
        this._closed || (nV?.unregister(this), this._data instanceof wV ? (this._data._referenceCount--, 0 === this._data._referenceCount && this._data.close()) : qV(this._data) ? this._data.close() : this._data = null, this._closed = !0)
      }
      allocationSize() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (TV(VV), this._closed) throw new Error("VideoSample is closed.");
        if (null == (VV.format ?? this.format)) throw new Error("Cannot get allocation size when format is null.");
        if (qV(this._data)) return this._data.allocationSize(VV);
        return NV(this, VV).allocationSize
      }
      async copyTo(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!(0, JV.Eb)(VV)) throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");
        if (TV(eV), this._closed) throw new Error("VideoSample is closed.");
        if (null == (eV.format ?? this.format)) throw new Error("Cannot copy video sample data when format is null.");
        if ((0, JV.L)(null !== this._data), qV(this._data)) return this._data.copyTo(VV, eV);
        if (eV.format && !["RGBA", "RGBX", "BGRA", "BGRX"].includes(this.format) && ["RGBA", "RGBX", "BGRA", "BGRX"].includes(eV.format)) {
          if (!(this._data instanceof wV)) {
            if ("undefined" === typeof VideoFrame) throw new Error("For this sample, converting from a non-RGB to an RGB format requires VideoFrame to be defined.");
            const xV = this.toVideoFrame(),
              JV = await xV.copyTo(VV, eV);
            return xV.close(), JV
          } {
            const xV = {
              stack: [],
              error: void 0,
              hasError: !1
            };
            try {
              const JV = UV(xV, await this._data.toRgbSample({
                timestamp: this.timestamp,
                duration: this.duration,
                rotation: this.rotation,
                flip: this.flip
              }, eV.colorSpace ?? "srgb"), !1);
              if (!(JV instanceof rV)) throw new TypeError("toRgbSample() must return a VideoSample.");
              if (!["RGBA", "RGBX", "BGRA", "BGRX"].includes(JV.format)) throw new Error(`Sample returned by toRgbSample was expected to have an RGB format, got '${JV.format}' instead.`);
              return await JV.copyTo(VV, eV)
            } catch (vV) {
              xV.error = vV, xV.hasError = !0
            } finally {
              yV(xV)
            }
          }
        }
        const xV = NV(this, eV);
        (0, JV.L)(this.format);
        const YV = (0, JV.sd)(VV);
        if (YV.byteLength < xV.allocationSize) throw new TypeError(`Destination buffer too small. Required: ${xV.allocationSize}, Available: ${YV.byteLength}`);
        const pV = AV(this.format);
        let QV;
        if (this._data instanceof wV) {
          let VV = this._data.getDataPlanes();
          if ((0, JV.ac)(VV) && (VV = await VV), !Array.isArray(VV) || VV.some((VV => !(VV.data instanceof Uint8Array) || !Number.isInteger(VV.stride) || VV.stride < 0))) throw new TypeError('getDataPlanes() must return an array of objects with a Uint8Array "data" property and a non-negative integer "stride" property.');
          QV = VV
        } else if (this._data instanceof Uint8Array)(0, JV.L)(this._layout), (0, JV.L)(this._layout.length === pV.length), QV = this._layout.map(((VV, eV) => {
          const xV = Math.ceil(this.codedHeight / pV[eV].heightDivisor);
          return {
            data: this._data.subarray(VV.offset, VV.offset + VV.stride * xV),
            stride: VV.stride
          }
        }));
        else {
          const VV = this._data.getContext("2d");
          (0, JV.L)(VV);
          const eV = VV.getImageData(0, 0, this.codedWidth, this.codedHeight);
          QV = [{
            data: (0, JV.sd)(eV.data),
            stride: 4 * this.codedWidth
          }]
        }
        const nV = [],
          ZV = pV.length;
        for (let JV = 0; JV < ZV; JV++) {
          const VV = xV.computedLayouts[JV],
            eV = QV[JV].stride,
            UV = QV[JV].data;
          let yV = VV.sourceTop * eV;
          yV += VV.sourceLeftBytes;
          let pV = VV.destinationOffset;
          const wV = VV.sourceWidthBytes,
            ZV = {
              offset: pV,
              stride: VV.destinationStride
            };
          for (let xV = 0; xV < VV.sourceHeight; xV++) {
            if (yV + wV > UV.byteLength) throw new Error("Source buffer OOB read.");
            if (pV + wV > YV.byteLength) throw new Error("Destination buffer OOB write.");
            const xV = UV.subarray(yV, yV + wV);
            YV.set(xV, pV), yV += eV, pV += VV.destinationStride
          }
          nV.push(ZV)
        }
        if (void 0 !== eV.format) {
          const VV = this.format.startsWith("RGB") !== eV.format.startsWith("RGB"),
            JV = this.format.includes("X") && eV.format.includes("A");
          if (VV || JV)
            for (let eV = 0; eV < xV.allocationSize; eV += 4) {
              if (VV) {
                const VV = YV[eV],
                  xV = YV[eV + 2];
                YV[eV] = xV, YV[eV + 2] = VV
              }
              JV && (YV[eV + 3] = 255)
            }
        }
        return nV
      }
      toVideoFrame() {
        if (this._closed) throw new Error("VideoSample is closed.");
        if ((0, JV.L)(null !== this._data), this._data instanceof wV) {
          if (null === this.format) throw new Error("Cannot convert a VideoSampleResource-backed VideoSample to VideoFrame if format is null.");
          const VV = this._data.getDataPlanes();
          if ((0, JV.ac)(VV)) throw new Error("Cannot convert a VideoSampleResource-backed VideoSample to VideoFrame if getDataPlanes() returns a promise.");
          const eV = VV.reduce(((VV, eV) => VV + eV.data.byteLength), 0),
            xV = new Uint8Array(eV);
          let YV = 0;
          const UV = [];
          for (const JV of VV) xV.set(JV.data, YV), UV.push(YV), YV += JV.data.byteLength;
          return new VideoFrame(xV, {
            format: this.format,
            layout: VV.map(((VV, eV) => ({
              offset: UV[eV],
              stride: VV.stride
            }))),
            codedWidth: this.codedWidth,
            codedHeight: this.codedHeight,
            timestamp: this.microsecondTimestamp,
            duration: this.microsecondDuration,
            colorSpace: this.colorSpace,
            visibleRect: this.visibleRect,
            displayWidth: this.squarePixelWidth,
            displayHeight: this.squarePixelHeight
          })
        }
        return qV(this._data) ? new VideoFrame(this._data, {
          timestamp: this.microsecondTimestamp,
          duration: this.microsecondDuration || void 0
        }) : this._data instanceof Uint8Array ? ((0, JV.L)(this._layout), new VideoFrame(this._data, {
          format: this.format,
          codedWidth: this.codedWidth,
          codedHeight: this.codedHeight,
          layout: this._layout,
          timestamp: this.microsecondTimestamp,
          duration: this.microsecondDuration || void 0,
          colorSpace: this.colorSpace,
          visibleRect: this.visibleRect,
          displayWidth: this.squarePixelWidth,
          displayHeight: this.squarePixelHeight
        })) : new VideoFrame(this._data, {
          timestamp: this.microsecondTimestamp,
          duration: this.microsecondDuration || void 0
        })
      }
      draw(VV, eV, xV, JV, YV, UV, yV, pV, QV) {
        let nV = 0,
          wV = 0,
          ZV = this.displayWidth,
          vV = this.displayHeight,
          rV = 0,
          kV = 0,
          bV = this.displayWidth,
          EV = this.displayHeight;
        if (void 0 !== UV ? (nV = eV, wV = xV, ZV = JV, vV = YV, rV = UV, kV = yV, void 0 !== pV ? (bV = pV, EV = QV) : (bV = ZV, EV = vV)) : (rV = eV, kV = xV, void 0 !== JV && (bV = JV, EV = YV)), !("undefined" !== typeof CanvasRenderingContext2D && VV instanceof CanvasRenderingContext2D || "undefined" !== typeof OffscreenCanvasRenderingContext2D && VV instanceof OffscreenCanvasRenderingContext2D)) throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");
        if (!Number.isFinite(nV)) throw new TypeError("sx must be a number.");
        if (!Number.isFinite(wV)) throw new TypeError("sy must be a number.");
        if (!Number.isFinite(ZV) || ZV < 0) throw new TypeError("sWidth must be a non-negative number.");
        if (!Number.isFinite(vV) || vV < 0) throw new TypeError("sHeight must be a non-negative number.");
        if (!Number.isFinite(rV)) throw new TypeError("dx must be a number.");
        if (!Number.isFinite(kV)) throw new TypeError("dy must be a number.");
        if (!Number.isFinite(bV) || bV < 0) throw new TypeError("dWidth must be a non-negative number.");
        if (!Number.isFinite(EV) || EV < 0) throw new TypeError("dHeight must be a non-negative number.");
        if (this._closed) throw new Error("VideoSample is closed.");
        ({
          sx: nV,
          sy: wV,
          sWidth: ZV,
          sHeight: vV
        } = this._unmapSourceRegion(nV, wV, ZV, vV, this.rotation, this.flip));
        const BV = this.toCanvasImageSource();
        VV.save();
        const jV = rV + bV / 2,
          qV = kV + EV / 2;
        VV.translate(jV, qV), this.flip && VV.scale(-1, 1), VV.rotate(this.rotation * Math.PI / 180);
        const tV = this.rotation % 180 === 0 ? 1 : bV / EV;
        VV.scale(1 / tV, tV), VV.drawImage(BV, nV, wV, ZV, vV, -bV / 2, -EV / 2, bV, EV), VV.restore()
      }
      drawWithFit(VV, eV) {
        if (!("undefined" !== typeof CanvasRenderingContext2D && VV instanceof CanvasRenderingContext2D || "undefined" !== typeof OffscreenCanvasRenderingContext2D && VV instanceof OffscreenCanvasRenderingContext2D)) throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");
        if (!eV || "object" !== typeof eV) throw new TypeError("options must be an object.");
        if (!["fill", "contain", "cover"].includes(eV.fit)) throw new TypeError("options.fit must be 'fill', 'contain', or 'cover'.");
        if (void 0 !== eV.rotation && ![0, 90, 180, 270].includes(eV.rotation)) throw new TypeError("options.rotation, when provided, must be 0, 90, 180, or 270.");
        if (void 0 !== eV.flip && "boolean" !== typeof eV.flip) throw new TypeError("options.flip, when provided, must be a boolean.");
        void 0 !== eV.crop && FV(eV.crop, "options.");
        const xV = VV.canvas.width,
          JV = VV.canvas.height,
          YV = eV.rotation ?? this.rotation,
          UV = eV.flip ?? this.flip,
          [yV, pV] = YV % 180 === 0 ? [this.squarePixelWidth, this.squarePixelHeight] : [this.squarePixelHeight, this.squarePixelWidth];
        let QV, nV, wV, ZV, vV = eV.crop;
        vV && (vV = tV(vV, yV, pV));
        const {
          sx: rV,
          sy: kV,
          sWidth: bV,
          sHeight: EV
        } = this._unmapSourceRegion(eV.crop?.left ?? 0, eV.crop?.top ?? 0, eV.crop?.width ?? yV, eV.crop?.height ?? pV, YV, UV);
        if ("fill" === eV.fit) QV = 0, nV = 0, wV = xV, ZV = JV;
        else {
          const [VV, YV] = eV.crop ? [eV.crop.width, eV.crop.height] : [yV, pV], UV = "contain" === eV.fit ? Math.min(xV / VV, JV / YV) : Math.max(xV / VV, JV / YV);
          wV = VV * UV, ZV = YV * UV, QV = (xV - wV) / 2, nV = (JV - ZV) / 2
        }
        VV.save();
        const BV = YV % 180 === 0 ? 1 : wV / ZV;
        VV.translate(xV / 2, JV / 2), UV && VV.scale(-1, 1), VV.rotate(YV * Math.PI / 180), VV.scale(1 / BV, BV), VV.translate(-xV / 2, -JV / 2), VV.drawImage(this.toCanvasImageSource(), rV, kV, bV, EV, QV, nV, wV, ZV), VV.restore()
      }
      _unmapSourceRegion(VV, eV, xV, JV, YV, UV) {
        if (UV) {
          VV = (YV % 180 === 0 ? this.squarePixelWidth : this.squarePixelHeight) - VV - xV
        }
        return 90 === YV ? [VV, eV, xV, JV] = [eV, this.squarePixelHeight - VV - xV, JV, xV] : 180 === YV ? [VV, eV] = [this.squarePixelWidth - VV - xV, this.squarePixelHeight - eV - JV] : 270 === YV && ([VV, eV, xV, JV] = [this.squarePixelWidth - eV - JV, VV, JV, xV]), {
          sx: VV,
          sy: eV,
          sWidth: xV,
          sHeight: JV
        }
      }
      _drawWithFitAndMipmapping(VV, eV, xV) {
        const JV = VV.width,
          YV = VV.height,
          [UV, yV] = xV.rotation % 180 === 0 ? [this.squarePixelWidth, this.squarePixelHeight] : [this.squarePixelHeight, this.squarePixelWidth],
          pV = xV.crop ? xV.crop.width : UV,
          QV = xV.crop ? xV.crop.height : yV;
        let nV = 0;
        2 * JV < pV && 2 * YV < QV && (nV = Math.floor(Math.log2(Math.min(pV / JV, QV / YV))));
        const wV = JV * 2 ** nV,
          ZV = YV * 2 ** nV,
          {
            canvas: vV,
            context: rV,
            isNew: kV
          } = nV > 0 ? BV(wV, ZV) : {
            canvas: VV,
            context: eV,
            isNew: xV.targetIsFresh
          };
        rV.imageSmoothingQuality = "high", xV.fillBlack ? (rV.fillStyle = "black", rV.fillRect(0, 0, wV, ZV)) : kV || rV.clearRect(0, 0, wV, ZV), this.drawWithFit(rV, {
          fit: xV.fit,
          rotation: xV.rotation,
          flip: xV.flip,
          crop: xV.crop
        }), rV.globalCompositeOperation = "copy";
        for (let bV = nV; bV > 1; bV--) {
          const VV = JV * 2 ** bV,
            eV = YV * 2 ** bV;
          rV.drawImage(vV, 0, 0, VV, eV, 0, 0, VV / 2, eV / 2)
        }
        rV.globalCompositeOperation = "source-over", nV > 0 && (eV.imageSmoothingQuality = "high", eV.globalCompositeOperation = "copy", eV.drawImage(vV, 0, 0, 2 * JV, 2 * YV, 0, 0, JV, YV), eV.globalCompositeOperation = "source-over")
      }
      toCanvasImageSource() {
        if (this._closed) throw new Error("VideoSample is closed.");
        if ((0, JV.L)(null !== this._data), this._data instanceof wV || this._data instanceof Uint8Array) {
          const VV = this.toVideoFrame();
          return queueMicrotask((() => VV.close())), VV
        }
        return this._data
      }
      async transform(VV) {
        if (!VV || "object" !== typeof VV) throw new TypeError("options must be an object.");
        if (void 0 !== VV.width && (!Number.isInteger(VV.width) || VV.width <= 0)) throw new TypeError("options.width, when provided, must be a positive integer.");
        if (void 0 !== VV.height && (!Number.isInteger(VV.height) || VV.height <= 0)) throw new TypeError("options.height, when provided, must be a positive integer.");
        if (void 0 !== VV.roundDimensionsTo && (!Number.isInteger(VV.roundDimensionsTo) || VV.roundDimensionsTo <= 0)) throw new TypeError("options.roundDimensionsTo, when provided, must be a positive integer.");
        if (void 0 !== VV.fit && !["fill", "contain", "cover"].includes(VV.fit)) throw new TypeError('options.fit, when provided, must be one of "fill", "contain", or "cover".');
        if (void 0 !== VV.width && void 0 !== VV.height && void 0 === VV.fit) throw new TypeError("When both options.width and options.height are provided, options.fit must also be provided.");
        if (void 0 !== VV.rotate && ![0, 90, 180, 270].includes(VV.rotate)) throw new TypeError("options.rotate, when provided, must be 0, 90, 180 or 270.");
        if (void 0 !== VV.flip && "boolean" !== typeof VV.flip) throw new TypeError("options.flip, when provided, must be a boolean.");
        if (void 0 !== VV.crop && FV(VV.crop, "options."), void 0 !== VV.alpha && !["keep", "discard"].includes(VV.alpha)) throw new TypeError("options.alpha, when provided, must be 'keep' or 'discard'.");
        const {
          rotation: eV,
          flip: xV
        } = (0, JV.mb)(this.rotation, this.flip, VV.rotate ?? 0, VV.flip ?? !1), [YV, UV] = eV % 180 === 0 ? [this.squarePixelWidth, this.squarePixelHeight] : [this.squarePixelHeight, this.squarePixelWidth];
        let yV = VV.crop;
        yV && (yV = tV(yV, YV, UV));
        const pV = yV ? yV.width : YV,
          QV = yV ? yV.height : UV,
          nV = pV / QV;
        let wV, ZV;
        void 0 !== VV.width && void 0 === VV.height ? (wV = VV.width, ZV = wV / nV) : void 0 === VV.width && void 0 !== VV.height ? (ZV = VV.height, wV = ZV * nV) : void 0 !== VV.width && void 0 !== VV.height ? (wV = VV.width, ZV = VV.height) : (wV = pV, ZV = QV), wV = (0, JV.Uc)(wV, VV.roundDimensionsTo ?? 1), ZV = (0, JV.Uc)(ZV, VV.roundDimensionsTo ?? 1);
        const vV = {
          width: wV,
          height: ZV,
          fit: VV.fit ?? "fill",
          rotation: eV,
          flip: xV,
          crop: yV ?? {
            left: 0,
            top: 0,
            width: YV,
            height: UV
          },
          alpha: VV.alpha ?? "keep"
        };
        for (const rV of kV) {
          let VV = rV(this, vV);
          if ((0, JV.ac)(VV) && (VV = await VV), null !== VV) return VV
        }
        const {
          canvas: bV,
          context: EV,
          isNew: jV
        } = BV(vV.width, vV.height);
        return this._drawWithFitAndMipmapping(bV, EV, {
          fit: vV.fit,
          rotation: vV.rotation,
          flip: vV.flip,
          crop: vV.crop,
          targetIsFresh: jV,
          fillBlack: "discard" === vV.alpha
        }), new rV(bV, {
          timestamp: this.timestamp,
          duration: this.duration,
          rotation: 0,
          flip: !1
        })
      }
      setRotation(VV) {
        if (![0, 90, 180, 270].includes(VV)) throw new TypeError("newRotation must be 0, 90, 180, or 270.");
        this.rotation = VV
      }
      setFlip(VV) {
        if ("boolean" !== typeof VV) throw new TypeError("newFlip must be a boolean.");
        this.flip = VV
      }
      setTimestamp(VV) {
        if (!Number.isFinite(VV)) throw new TypeError("newTimestamp must be a number.");
        this.timestamp = VV
      }
      setDuration(VV) {
        if (!Number.isFinite(VV) || VV < 0) throw new TypeError("newDuration must be a non-negative number.");
        this.duration = VV
      }
      setEncodeOptions(VV) {
        if (!VV || "object" !== typeof VV) throw new TypeError("newEncodeOptions must be an object.");
        this.encodeOptions = VV
      } [Symbol.dispose]() {
        this.close()
      }
    }
    const kV = [],
      bV = [];
    let EV = 0;
    const BV = (VV, eV) => {
      for (const JV of bV)
        if (JV.canvas.width === VV && JV.canvas.height === eV) return JV.age = EV++, {
          canvas: JV.canvas,
          context: JV.context,
          isNew: !1
        };
      let xV;
      if ("undefined" !== typeof OffscreenCanvas) xV = new OffscreenCanvas(VV, eV);
      else {
        if ("undefined" === typeof window || "undefined" === typeof document) throw new Error("Cannot transform VideoSamples in this environment. Either run in an environment with OffscreenCanvas or HTMLCanvasElement, or supply a custom VideoSample transformer using registerVideoSampleTransformer().");
        xV = document.createElement("canvas"), xV.width = VV, xV.height = eV
      }
      const YV = xV.getContext("2d", {
        alpha: !0,
        willReadFrequently: !1
      });
      if (!YV) throw new Error("The '2d' canvas context is required to transform VideoSamples. Register a custom transformer using registerVideoSampleTransformer to work around this limitation.");
      return bV.length >= 3 && bV.splice((0, JV.F)(bV, (VV => VV.age)), 1), bV.push({
        canvas: xV,
        context: YV,
        age: EV++
      }), {
        canvas: xV,
        context: YV,
        isNew: !0
      }
    };
    class jV {
      constructor(VV) {
        if (void 0 !== VV) {
          if (!VV || "object" !== typeof VV) throw new TypeError("init.colorSpace, when provided, must be an object.");
          const eV = Object.keys(JV.c);
          if (null != VV.primaries && !eV.includes(VV.primaries)) throw new TypeError(`init.colorSpace.primaries, when provided, must be one of ${eV.join(", ")}.`);
          const xV = Object.keys(JV.r);
          if (null != VV.transfer && !xV.includes(VV.transfer)) throw new TypeError(`init.colorSpace.transfer, when provided, must be one of ${xV.join(", ")}.`);
          const YV = Object.keys(JV.k);
          if (null != VV.matrix && !YV.includes(VV.matrix)) throw new TypeError(`init.colorSpace.matrix, when provided, must be one of ${YV.join(", ")}.`);
          if (null != VV.fullRange && "boolean" !== typeof VV.fullRange) throw new TypeError("init.colorSpace.fullRange, when provided, must be a boolean.")
        }
        this.primaries = VV?.primaries ?? null, this.transfer = VV?.transfer ?? null, this.matrix = VV?.matrix ?? null, this.fullRange = VV?.fullRange ?? null
      }
      toJSON() {
        return {
          primaries: this.primaries,
          transfer: this.transfer,
          matrix: this.matrix,
          fullRange: this.fullRange
        }
      }
    }
    const qV = VV => "undefined" !== typeof VideoFrame && VV instanceof VideoFrame,
      tV = (VV, eV, xV) => {
        const YV = Math.min(VV.left, eV),
          UV = Math.min(VV.top, xV),
          yV = Math.min(VV.width, eV - YV),
          pV = Math.min(VV.height, xV - UV);
        return (0, JV.L)(yV >= 0), (0, JV.L)(pV >= 0), {
          left: YV,
          top: UV,
          width: yV,
          height: pV
        }
      },
      FV = (VV, eV) => {
        if (!VV || "object" !== typeof VV) throw new TypeError(eV + "crop, when provided, must be an object.");
        if (!Number.isInteger(VV.left) || VV.left < 0) throw new TypeError(eV + "crop.left must be a non-negative integer.");
        if (!Number.isInteger(VV.top) || VV.top < 0) throw new TypeError(eV + "crop.top must be a non-negative integer.");
        if (!Number.isInteger(VV.width) || VV.width < 0) throw new TypeError(eV + "crop.width must be a non-negative integer.");
        if (!Number.isInteger(VV.height) || VV.height < 0) throw new TypeError(eV + "crop.height must be a non-negative integer.")
      },
      TV = VV => {
        if (!VV || "object" !== typeof VV) throw new TypeError("options must be an object.");
        if (void 0 !== VV.colorSpace && !["display-p3", "srgb"].includes(VV.colorSpace)) throw new TypeError("options.colorSpace, when provided, must be 'display-p3' or 'srgb'.");
        if (void 0 !== VV.format && "string" !== typeof VV.format) throw new TypeError("options.format, when provided, must be a string.");
        if (void 0 !== VV.layout) {
          if (!Array.isArray(VV.layout)) throw new TypeError("options.layout, when provided, must be an array.");
          for (const eV of VV.layout) {
            if (!eV || "object" !== typeof eV) throw new TypeError("Each entry in options.layout must be an object.");
            if (!Number.isInteger(eV.offset) || eV.offset < 0) throw new TypeError("plane.offset must be a non-negative integer.");
            if (!Number.isInteger(eV.stride) || eV.stride < 0) throw new TypeError("plane.stride must be a non-negative integer.")
          }
        }
        if (void 0 !== VV.rect) {
          if (!VV.rect || "object" !== typeof VV.rect) throw new TypeError("options.rect, when provided, must be an object.");
          if (void 0 !== VV.rect.x && (!Number.isInteger(VV.rect.x) || VV.rect.x < 0)) throw new TypeError("options.rect.x, when provided, must be a non-negative integer.");
          if (void 0 !== VV.rect.y && (!Number.isInteger(VV.rect.y) || VV.rect.y < 0)) throw new TypeError("options.rect.y, when provided, must be a non-negative integer.");
          if (void 0 !== VV.rect.width && (!Number.isInteger(VV.rect.width) || VV.rect.width < 0)) throw new TypeError("options.rect.width, when provided, must be a non-negative integer.");
          if (void 0 !== VV.rect.height && (!Number.isInteger(VV.rect.height) || VV.rect.height < 0)) throw new TypeError("options.rect.height, when provided, must be a non-negative integer.")
        }
      },
      PV = (VV, eV, xV) => {
        const JV = AV(VV),
          YV = [];
        let UV = 0;
        for (const yV of JV) {
          const VV = Math.ceil(eV / yV.widthDivisor),
            JV = Math.ceil(xV / yV.heightDivisor),
            pV = VV * yV.sampleBytes,
            QV = pV * JV;
          YV.push({
            offset: UV,
            stride: pV
          }), UV += QV
        }
        return YV
      },
      AV = VV => {
        const eV = (VV, eV, xV, JV, YV) => {
          const UV = [{
            sampleBytes: VV,
            widthDivisor: 1,
            heightDivisor: 1
          }, {
            sampleBytes: eV,
            widthDivisor: xV,
            heightDivisor: JV
          }, {
            sampleBytes: eV,
            widthDivisor: xV,
            heightDivisor: JV
          }];
          return YV && UV.push({
            sampleBytes: VV,
            widthDivisor: 1,
            heightDivisor: 1
          }), UV
        };
        switch (VV) {
          case "I420":
            return eV(1, 1, 2, 2, !1);
          case "I420P10":
          case "I420P12":
            return eV(2, 2, 2, 2, !1);
          case "I420A":
            return eV(1, 1, 2, 2, !0);
          case "I420AP10":
          case "I420AP12":
            return eV(2, 2, 2, 2, !0);
          case "I422":
            return eV(1, 1, 2, 1, !1);
          case "I422P10":
          case "I422P12":
            return eV(2, 2, 2, 1, !1);
          case "I422A":
            return eV(1, 1, 2, 1, !0);
          case "I422AP10":
          case "I422AP12":
            return eV(2, 2, 2, 1, !0);
          case "I444":
            return eV(1, 1, 1, 1, !1);
          case "I444P10":
          case "I444P12":
            return eV(2, 2, 1, 1, !1);
          case "I444A":
            return eV(1, 1, 1, 1, !0);
          case "I444AP10":
          case "I444AP12":
            return eV(2, 2, 1, 1, !0);
          case "NV12":
            return [{
              sampleBytes: 1,
              widthDivisor: 1,
              heightDivisor: 1
            }, {
              sampleBytes: 2,
              widthDivisor: 2,
              heightDivisor: 2
            }];
          case "RGBA":
          case "RGBX":
          case "BGRA":
          case "BGRX":
            return [{
              sampleBytes: 4,
              widthDivisor: 1,
              heightDivisor: 1
            }];
          default:
            (0, JV.J)(VV), (0, JV.L)(!1)
        }
      },
      NV = (VV, eV) => {
        const xV = {
            left: 0,
            top: 0,
            width: VV.codedWidth,
            height: VV.codedHeight
          },
          JV = eV.rect,
          YV = XV(xV, JV, VV.codedWidth, VV.codedHeight, VV.format),
          UV = eV.layout;
        let yV;
        if (eV.format && eV.format !== VV.format) {
          if (!["RGBA", "RGBX", "BGRA", "BGRX"].includes(eV.format)) throw new Error("NotSupportedError: Invalid destination format.");
          yV = eV.format
        } else yV = VV.format;
        return zV(YV, yV, UV)
      },
      XV = (VV, eV, xV, JV, YV) => {
        const UV = {
          ...VV
        };
        if (void 0 !== eV) {
          if (0 === eV.width || 0 === eV.height) throw new TypeError("visibleRect dimensions cannot be zero.");
          if ((eV.x || 0) + (eV.width || 0) > xV) throw new TypeError("visibleRect exceeds codedWidth.");
          if ((eV.y || 0) + (eV.height || 0) > JV) throw new TypeError("visibleRect exceeds codedHeight.");
          UV.x = eV.x || 0, UV.y = eV.y || 0, UV.width = eV.width || 0, UV.height = eV.height || 0
        }
        if (!MV(YV, UV)) throw new TypeError("visibleRect alignment is invalid for the format.");
        return UV
      },
      MV = (VV, eV) => {
        if (null === VV) return !0;
        const xV = AV(VV);
        for (let JV = 0; JV < xV.length; JV++) {
          const VV = xV[JV],
            YV = VV.widthDivisor,
            UV = VV.heightDivisor;
          if ((eV.x || 0) % YV !== 0) return !1;
          if ((eV.y || 0) % UV !== 0) return !1
        }
        return !0
      },
      zV = (VV, eV, xV) => {
        const JV = AV(eV),
          YV = JV.length;
        if (void 0 !== xV && xV.length !== YV) throw new TypeError(`Layout must have ${YV} planes.`);
        let UV = 0;
        const yV = [],
          pV = [];
        for (let QV = 0; QV < YV; QV++) {
          const eV = JV[QV],
            YV = eV.sampleBytes,
            nV = eV.widthDivisor,
            wV = eV.heightDivisor,
            ZV = {
              destinationOffset: 0,
              destinationStride: 0,
              sourceTop: 0,
              sourceHeight: 0,
              sourceLeftBytes: 0,
              sourceWidthBytes: 0
            };
          if (ZV.sourceTop = Math.ceil(Math.trunc(VV.y || 0) / wV), ZV.sourceHeight = Math.ceil(Math.trunc(VV.height || 0) / wV), ZV.sourceLeftBytes = Math.floor(Math.trunc(VV.x || 0) / nV) * YV, ZV.sourceWidthBytes = Math.floor(Math.trunc(VV.width || 0) / nV) * YV, void 0 !== xV) {
            const VV = xV[QV];
            if (VV.stride < ZV.sourceWidthBytes) throw new TypeError(`Stride for plane ${QV} is too small.`);
            ZV.destinationOffset = VV.offset, ZV.destinationStride = VV.stride
          } else ZV.destinationOffset = UV, ZV.destinationStride = ZV.sourceWidthBytes;
          const vV = ZV.destinationStride * ZV.sourceHeight + ZV.destinationOffset;
          if (vV > 4294967295) throw new TypeError("Allocation size exceeds limit.");
          pV.push(vV), UV = Math.max(UV, vV);
          for (let VV = 0; VV < QV; VV++) {
            const eV = yV[VV];
            if (!(pV[QV] <= eV.destinationOffset || pV[VV] <= ZV.destinationOffset)) throw new TypeError("Planes overlap.")
          }
          yV.push(ZV)
        }
        return {
          allocationSize: UV,
          computedLayouts: yV
        }
      },
      GV = new Set(["f32", "f32-planar", "s16", "s16-planar", "s32", "s32-planar", "u8", "u8-planar"]);
    class WV {
      constructor() {
        this._referenceCount = 0
      }
    }
    class RV {
      get microsecondTimestamp() {
        return Math.trunc(JV.p * this.timestamp)
      }
      get microsecondDuration() {
        return Math.trunc(JV.p * this.duration)
      }
      constructor(VV) {
        if (this._closed = !1, aV(VV)) {
          if (null === VV.format) throw new TypeError("AudioData with null format is not supported.");
          this._data = VV, this.format = VV.format, this.sampleRate = VV.sampleRate, this.numberOfFrames = VV.numberOfFrames, this.numberOfChannels = VV.numberOfChannels, this.timestamp = VV.timestamp / 1e6, this.duration = VV.numberOfFrames / VV.sampleRate
        } else if (VV instanceof WV) {
          if (this._data = VV, VV._referenceCount++, this.format = VV.getFormat(), !GV.has(this.format)) throw new TypeError("getFormat() must return an AudioSampleFormat.");
          if (this.sampleRate = VV.getSampleRate(), !Number.isInteger(this.sampleRate) || this.sampleRate <= 0) throw new TypeError("getSampleRate() must return a positive integer.");
          if (this.numberOfFrames = VV.getNumberOfFrames(), !Number.isInteger(this.numberOfFrames) || this.numberOfFrames < 0) throw new TypeError("getNumberOfFrames() must return a non-negative integer.");
          if (this.numberOfChannels = VV.getNumberOfChannels(), !Number.isInteger(this.numberOfChannels) || this.numberOfChannels <= 0) throw new TypeError("getNumberOfChannels() must return a positive integer.");
          if (this.timestamp = VV.getTimestamp(), !Number.isFinite(this.timestamp)) throw new TypeError("getTimestamp() must return a finite number.");
          this.duration = this.numberOfFrames / this.sampleRate
        } else {
          if (!VV || "object" !== typeof VV) throw new TypeError("Invalid AudioDataInit: must be an object.");
          if (!GV.has(VV.format)) throw new TypeError("Invalid AudioDataInit: invalid format.");
          if (!Number.isFinite(VV.sampleRate) || VV.sampleRate <= 0) throw new TypeError("Invalid AudioDataInit: sampleRate must be > 0.");
          if (!Number.isInteger(VV.numberOfChannels) || 0 === VV.numberOfChannels) throw new TypeError("Invalid AudioDataInit: numberOfChannels must be an integer > 0.");
          if (!Number.isFinite(VV?.timestamp)) throw new TypeError("init.timestamp must be a number.");
          const eV = VV.data.byteLength / (gV(VV.format) * VV.numberOfChannels);
          if (!Number.isInteger(eV)) throw new TypeError("Invalid AudioDataInit: data size is not a multiple of frame size.");
          let xV;
          if (this.format = VV.format, this.sampleRate = VV.sampleRate, this.numberOfFrames = eV, this.numberOfChannels = VV.numberOfChannels, this.timestamp = VV.timestamp, this.duration = eV / VV.sampleRate, VV.data instanceof ArrayBuffer) xV = new Uint8Array(VV.data);
          else {
            if (!ArrayBuffer.isView(VV.data)) throw new TypeError("Invalid AudioDataInit: data is not a BufferSource.");
            xV = new Uint8Array(VV.data.buffer, VV.data.byteOffset, VV.data.byteLength)
          }
          const JV = this.numberOfFrames * this.numberOfChannels * gV(this.format);
          if (xV.byteLength < JV) throw new TypeError("Invalid AudioDataInit: insufficient data size.");
          this._data = xV
        }
        nV?.register(this, {
          type: "audio",
          data: this._data
        }, this)
      }
      allocationSize(VV) {
        if (!VV || "object" !== typeof VV) throw new TypeError("options must be an object.");
        if (!Number.isInteger(VV.planeIndex) || VV.planeIndex < 0) throw new TypeError("planeIndex must be a non-negative integer.");
        if (void 0 !== VV.format && !GV.has(VV.format)) throw new TypeError("Invalid format.");
        if (void 0 !== VV.frameOffset && (!Number.isInteger(VV.frameOffset) || VV.frameOffset < 0)) throw new TypeError("frameOffset must be a non-negative integer.");
        if (void 0 !== VV.frameCount && (!Number.isInteger(VV.frameCount) || VV.frameCount < 0)) throw new TypeError("frameCount must be a non-negative integer.");
        if (this._closed) throw new Error("AudioSample is closed.");
        const eV = VV.format ?? this.format,
          xV = VV.frameOffset ?? 0;
        if (xV >= this.numberOfFrames) throw new RangeError("frameOffset out of range");
        const JV = void 0 !== VV.frameCount ? VV.frameCount : this.numberOfFrames - xV;
        if (JV > this.numberOfFrames - xV) throw new RangeError("frameCount out of range");
        const YV = gV(eV),
          UV = DV(eV);
        if (UV && VV.planeIndex >= this.numberOfChannels) throw new RangeError("planeIndex out of range");
        if (!UV && 0 !== VV.planeIndex) throw new RangeError("planeIndex out of range");
        return (UV ? JV : JV * this.numberOfChannels) * YV
      }
      copyTo(VV, eV) {
        if (!(0, JV.Eb)(VV)) throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");
        if (!eV || "object" !== typeof eV) throw new TypeError("options must be an object.");
        if (!Number.isInteger(eV.planeIndex) || eV.planeIndex < 0) throw new TypeError("planeIndex must be a non-negative integer.");
        if (void 0 !== eV.format && !GV.has(eV.format)) throw new TypeError("Invalid format.");
        if (void 0 !== eV.frameOffset && (!Number.isInteger(eV.frameOffset) || eV.frameOffset < 0)) throw new TypeError("frameOffset must be a non-negative integer.");
        if (void 0 !== eV.frameCount && (!Number.isInteger(eV.frameCount) || eV.frameCount < 0)) throw new TypeError("frameCount must be a non-negative integer.");
        if (this._closed) throw new Error("AudioSample is closed.");
        const {
          format: xV,
          frameCount: YV,
          frameOffset: UV
        } = eV;
        let {
          planeIndex: yV
        } = eV, pV = this.format;
        const QV = xV ?? this.format;
        if (!QV) throw new Error("Destination format not determined");
        const nV = this.numberOfFrames,
          wV = this.numberOfChannels,
          ZV = UV ?? 0;
        if (ZV >= nV) throw new RangeError("frameOffset out of range");
        const vV = void 0 !== YV ? YV : nV - ZV;
        if (vV > nV - ZV) throw new RangeError("frameCount out of range");
        const rV = gV(QV),
          kV = DV(QV);
        if (kV && yV >= wV) throw new RangeError("planeIndex out of range");
        if (!kV && 0 !== yV) throw new RangeError("planeIndex out of range");
        const bV = (kV ? vV : vV * wV) * rV;
        if (VV.byteLength < bV) throw new RangeError("Destination buffer is too small");
        const EV = (0, JV.rd)(VV),
          BV = CV(QV);
        if (aV(this._data)) {
          if ((0, JV.fc)() && wV > 2 && QV !== pV) return void cV(this._data, EV, pV, QV, wV, yV, ZV, vV);
          try {
            return void this._data.copyTo(VV, {
              planeIndex: yV,
              frameOffset: ZV,
              frameCount: vV,
              format: QV
            })
          } catch (PV) {
            if ("f32-planar" === QV) throw PV;
            pV = "f32-planar"
          }
        }
        const jV = iV(pV),
          qV = gV(pV),
          tV = DV(pV);
        let FV;
        if (this._data instanceof WV) {
          const VV = VV => {
            const eV = this._data.getDataPlane(VV);
            if (!(eV instanceof Uint8Array)) throw new TypeError("getDataPlane() must return a Uint8Array.");
            const xV = nV * qV * (tV ? 1 : wV);
            if (eV.byteLength !== xV) throw new TypeError(`Data plane ${VV} has invalid size. Expected exactly ${xV} bytes, got ${eV.byteLength} bytes.`);
            return eV
          };
          if (tV)
            if (kV) FV = VV(yV), yV = 0;
            else {
              FV = new Uint8Array(nV * qV * wV);
              for (let eV = 0; eV < wV; eV++) {
                const xV = VV(eV);
                FV.set(xV, eV * nV * qV)
              }
            }
          else FV = VV(0)
        } else if (this._data instanceof Uint8Array) FV = this._data;
        else if ((0, JV.L)("f32-planar" === pV), kV) FV = new Uint8Array(this._data.allocationSize({
          format: "f32-planar",
          planeIndex: yV
        })), this._data.copyTo(FV, {
          format: "f32-planar",
          planeIndex: yV
        }), yV = 0;
        else {
          FV = new Uint8Array(this._data.allocationSize({
            format: "f32-planar",
            planeIndex: 0
          }) * wV);
          for (let VV = 0; VV < wV; VV++) this._data.copyTo(FV.subarray(VV * nV * qV, (VV + 1) * nV * qV), {
            format: "f32-planar",
            planeIndex: VV
          })
        }
        const TV = (0, JV.rd)(FV);
        for (let JV = 0; JV < vV; JV++)
          if (kV) {
            let VV;
            VV = tV ? (yV * nV + (JV + ZV)) * qV : ((JV + ZV) * wV + yV) * qV;
            BV(EV, JV * rV, jV(TV, VV))
          } else
            for (let VV = 0; VV < wV; VV++) {
              let eV;
              eV = tV ? (VV * nV + (JV + ZV)) * qV : ((JV + ZV) * wV + VV) * qV;
              BV(EV, (JV * wV + VV) * rV, jV(TV, eV))
            }
      }
      clone() {
        if (this._closed) throw new Error("AudioSample is closed.");
        if (this._data instanceof WV) {
          const VV = new RV(this._data);
          return VV.setTimestamp(this.timestamp), VV
        }
        if (aV(this._data)) {
          const VV = new RV(this._data.clone());
          return VV.setTimestamp(this.timestamp), VV
        }
        return new RV({
          format: this.format,
          sampleRate: this.sampleRate,
          numberOfFrames: this.numberOfFrames,
          numberOfChannels: this.numberOfChannels,
          timestamp: this.timestamp,
          data: this._data
        })
      }
      trim(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.numberOfFrames;
        if (!Number.isInteger(VV) || VV < 0) throw new TypeError("startFrame must be a non-negative integer.");
        if (!Number.isInteger(eV) || eV < 0) throw new TypeError("endFrame must be a non-negative integer.");
        if (VV > this.numberOfFrames) throw new RangeError("startFrame out of range.");
        if (eV > this.numberOfFrames) throw new RangeError("endFrame out of range.");
        if (eV < VV) throw new RangeError("endFrame must not be less than startFrame.");
        if (this._closed) throw new Error("AudioSample is closed.");
        const xV = eV - VV,
          JV = gV(this.format);
        let YV;
        if (DV(this.format)) {
          const eV = xV * JV;
          if (YV = new Uint8Array(eV * this.numberOfChannels), xV > 0)
            for (let JV = 0; JV < this.numberOfChannels; JV++) this.copyTo(YV.subarray(JV * eV, (JV + 1) * eV), {
              planeIndex: JV,
              format: this.format,
              frameOffset: VV,
              frameCount: xV
            })
        } else YV = new Uint8Array(xV * this.numberOfChannels * JV), xV > 0 && this.copyTo(YV, {
          planeIndex: 0,
          format: this.format,
          frameOffset: VV,
          frameCount: xV
        });
        return new RV({
          data: YV,
          format: this.format,
          sampleRate: this.sampleRate,
          numberOfChannels: this.numberOfChannels,
          timestamp: this.timestamp + VV / this.sampleRate
        })
      }
      close() {
        this._closed || (nV?.unregister(this), this._data instanceof WV ? (this._data._referenceCount--, 0 === this._data._referenceCount && this._data.close()) : aV(this._data) ? this._data.close() : this._data = new Uint8Array(0), this._closed = !0)
      }
      toAudioData() {
        if (this._closed) throw new Error("AudioSample is closed.");
        return this._data instanceof WV ? this._createAudioDataFromData() : aV(this._data) ? this._data.timestamp === this.microsecondTimestamp ? this._data.clone() : this._createAudioDataFromData() : new AudioData({
          format: this.format,
          sampleRate: this.sampleRate,
          numberOfFrames: this.numberOfFrames,
          numberOfChannels: this.numberOfChannels,
          timestamp: this.microsecondTimestamp,
          data: this._data.buffer instanceof ArrayBuffer ? this._data.buffer : this._data.slice()
        })
      }
      _createAudioDataFromData() {
        if (DV(this.format)) {
          const VV = this.allocationSize({
              planeIndex: 0,
              format: this.format
            }),
            eV = new ArrayBuffer(VV * this.numberOfChannels);
          for (let xV = 0; xV < this.numberOfChannels; xV++) this.copyTo(new Uint8Array(eV, xV * VV, VV), {
            planeIndex: xV,
            format: this.format
          });
          return new AudioData({
            format: this.format,
            sampleRate: this.sampleRate,
            numberOfFrames: this.numberOfFrames,
            numberOfChannels: this.numberOfChannels,
            timestamp: this.microsecondTimestamp,
            data: eV
          })
        } {
          const VV = new ArrayBuffer(this.allocationSize({
            planeIndex: 0,
            format: this.format
          }));
          return this.copyTo(VV, {
            planeIndex: 0,
            format: this.format
          }), new AudioData({
            format: this.format,
            sampleRate: this.sampleRate,
            numberOfFrames: this.numberOfFrames,
            numberOfChannels: this.numberOfChannels,
            timestamp: this.microsecondTimestamp,
            data: VV
          })
        }
      }
      toAudioBuffer() {
        if (this._closed) throw new Error("AudioSample is closed.");
        const VV = new AudioBuffer({
            numberOfChannels: this.numberOfChannels,
            length: this.numberOfFrames,
            sampleRate: this.sampleRate
          }),
          eV = new Float32Array(this.allocationSize({
            planeIndex: 0,
            format: "f32-planar"
          }) / 4);
        for (let xV = 0; xV < this.numberOfChannels; xV++) this.copyTo(eV, {
          planeIndex: xV,
          format: "f32-planar"
        }), VV.copyToChannel(eV, xV);
        return VV
      }
      setTimestamp(VV) {
        if (!Number.isFinite(VV)) throw new TypeError("newTimestamp must be a number.");
        this.timestamp = VV
      } [Symbol.dispose]() {
        this.close()
      }
      static * _fromAudioBuffer(VV, eV) {
        if (!(VV instanceof AudioBuffer)) throw new TypeError("audioBuffer must be an AudioBuffer.");
        const xV = VV.numberOfChannels,
          JV = VV.sampleRate,
          YV = VV.length,
          UV = Math.floor(24e4 / xV);
        let yV = 0,
          pV = YV;
        for (; pV > 0;) {
          const YV = Math.min(UV, pV),
            QV = new Float32Array(xV * YV);
          for (let eV = 0; eV < xV; eV++) VV.copyFromChannel(QV.subarray(eV * YV, (eV + 1) * YV), eV, yV);
          yield new RV({
            format: "f32-planar",
            sampleRate: JV,
            numberOfFrames: YV,
            numberOfChannels: xV,
            timestamp: eV + yV / JV,
            data: QV
          }), yV += YV, pV -= YV
        }
      }
      static fromAudioBuffer(VV, eV) {
        if (!(VV instanceof AudioBuffer)) throw new TypeError("audioBuffer must be an AudioBuffer.");
        const xV = VV.numberOfChannels,
          JV = VV.sampleRate,
          YV = VV.length,
          UV = Math.floor(24e4 / xV);
        let yV = 0,
          pV = YV;
        const QV = [];
        for (; pV > 0;) {
          const YV = Math.min(UV, pV),
            nV = new Float32Array(xV * YV);
          for (let eV = 0; eV < xV; eV++) VV.copyFromChannel(nV.subarray(eV * YV, (eV + 1) * YV), eV, yV);
          const wV = new RV({
            format: "f32-planar",
            sampleRate: JV,
            numberOfFrames: YV,
            numberOfChannels: xV,
            timestamp: eV + yV / JV,
            data: nV
          });
          QV.push(wV), yV += YV, pV -= YV
        }
        return QV
      }
    }
    const gV = VV => {
        switch (VV) {
          case "u8":
          case "u8-planar":
            return 1;
          case "s16":
          case "s16-planar":
            return 2;
          case "s32":
          case "s32-planar":
          case "f32":
          case "f32-planar":
            return 4;
          default:
            throw new Error("Unknown AudioSampleFormat")
        }
      },
      DV = VV => {
        switch (VV) {
          case "u8-planar":
          case "s16-planar":
          case "s32-planar":
          case "f32-planar":
            return !0;
          default:
            return !1
        }
      },
      iV = VV => {
        switch (VV) {
          case "u8":
          case "u8-planar":
            return (VV, eV) => (VV.getUint8(eV) - 128) / 128;
          case "s16":
          case "s16-planar":
            return (VV, eV) => VV.getInt16(eV, !0) / 32768;
          case "s32":
          case "s32-planar":
            return (VV, eV) => VV.getInt32(eV, !0) / 2147483648;
          case "f32":
          case "f32-planar":
            return (VV, eV) => VV.getFloat32(eV, !0)
        }
      },
      CV = VV => {
        switch (VV) {
          case "u8":
          case "u8-planar":
            return (VV, eV, xV) => VV.setUint8(eV, (0, JV.bb)(Math.round(128 * xV) + 128, 0, 255));
          case "s16":
          case "s16-planar":
            return (VV, eV, xV) => VV.setInt16(eV, (0, JV.bb)(Math.round(32768 * xV), -32768, 32767), !0);
          case "s32":
          case "s32-planar":
            return (VV, eV, xV) => VV.setInt32(eV, (0, JV.bb)(Math.round(2147483648 * xV), -2147483648, 2147483647), !0);
          case "f32":
          case "f32-planar":
            return (VV, eV, xV) => VV.setFloat32(eV, xV, !0)
        }
      },
      aV = VV => "undefined" !== typeof AudioData && VV instanceof AudioData,
      oV = VV => {
        switch (VV) {
          case "u8-planar":
            return "u8";
          case "s16-planar":
            return "s16";
          case "s32-planar":
            return "s32";
          case "f32-planar":
            return "f32";
          default:
            return VV
        }
      },
      cV = (VV, eV, xV, YV, UV, yV, pV, QV) => {
        const nV = iV(xV),
          wV = CV(YV),
          ZV = gV(xV),
          vV = gV(YV),
          rV = DV(xV);
        if (DV(YV))
          if (rV) {
            const YV = new ArrayBuffer(QV * ZV),
              UV = (0, JV.rd)(YV);
            VV.copyTo(YV, {
              planeIndex: yV,
              frameOffset: pV,
              frameCount: QV,
              format: xV
            });
            for (let VV = 0; VV < QV; VV++) {
              wV(eV, VV * vV, nV(UV, VV * ZV))
            }
          } else {
            const YV = new ArrayBuffer(QV * UV * ZV),
              rV = (0, JV.rd)(YV);
            VV.copyTo(YV, {
              planeIndex: 0,
              frameOffset: pV,
              frameCount: QV,
              format: xV
            });
            for (let VV = 0; VV < QV; VV++) {
              wV(eV, VV * vV, nV(rV, (VV * UV + yV) * ZV))
            }
          }
        else if (rV) {
          const YV = new ArrayBuffer(QV * ZV),
            yV = (0, JV.rd)(YV);
          for (let JV = 0; JV < UV; JV++) {
            VV.copyTo(YV, {
              planeIndex: JV,
              frameOffset: pV,
              frameCount: QV,
              format: xV
            });
            for (let VV = 0; VV < QV; VV++) {
              wV(eV, (VV * UV + JV) * vV, nV(yV, VV * ZV))
            }
          }
        } else {
          const YV = new ArrayBuffer(QV * UV * ZV),
            yV = (0, JV.rd)(YV);
          VV.copyTo(YV, {
            planeIndex: 0,
            frameOffset: pV,
            frameCount: QV,
            format: xV
          });
          for (let VV = 0; VV < QV; VV++)
            for (let xV = 0; xV < UV; xV++) {
              const JV = VV * UV + xV;
              wV(eV, JV * vV, nV(yV, JV * ZV))
            }
        }
      },
      hV = (VV, eV) => {
        const xV = VV.allocationSize({
            format: eV,
            planeIndex: 0
          }),
          JV = new ArrayBuffer(xV);
        return VV.copyTo(JV, {
          format: eV,
          planeIndex: 0
        }), new RV({
          data: JV,
          format: eV,
          numberOfChannels: VV.numberOfChannels,
          sampleRate: VV.sampleRate,
          timestamp: VV.timestamp,
          duration: VV.duration
        })
      }
  },
  34990: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => yV,
      g: () => nV,
      i: () => UV,
      j: () => QV
    });
    const JV = /(?:(.+?)\n)?((?:\d{2}:)?\d{2}:\d{2}.\d{3})\s+-->\s+((?:\d{2}:)?\d{2}:\d{2}.\d{3})/g,
      YV = /^WEBVTT(.|\n)*?\n{2}/,
      UV = /<(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})>/g;
    class yV {
      constructor(VV) {
        this.preambleText = null, this.preambleEmitted = !1, this.options = VV
      }
      parse(VV) {
        let eV;
        if (VV = VV.replaceAll("\r\n", "\n").replaceAll("\r", "\n"), JV.lastIndex = 0, !this.preambleText) {
          if (!YV.test(VV)) throw new Error("WebVTT preamble incorrect.");
          eV = JV.exec(VV);
          const xV = VV.slice(0, eV?.index ?? VV.length).trimEnd();
          if (!xV) throw new Error("No WebVTT preamble provided.");
          this.preambleText = xV, eV && (VV = VV.slice(eV.index), JV.lastIndex = 0)
        }
        for (; eV = JV.exec(VV);) {
          const xV = VV.slice(0, eV.index),
            YV = eV[1],
            UV = eV.index + eV[0].length,
            yV = VV.indexOf("\n", UV) + 1,
            pV = VV.slice(UV, yV).trim();
          let nV = VV.indexOf("\n\n", UV); - 1 === nV && (nV = VV.length);
          const wV = QV(eV[2]),
            ZV = QV(eV[3]) - wV,
            vV = VV.slice(yV, nV).trim();
          VV = VV.slice(nV).trimStart(), JV.lastIndex = 0;
          const rV = {
              timestamp: wV / 1e3,
              duration: ZV / 1e3,
              text: vV,
              identifier: YV,
              settings: pV,
              notes: xV
            },
            kV = {};
          this.preambleEmitted || (kV.config = {
            description: this.preambleText
          }, this.preambleEmitted = !0), this.options.output(rV, kV)
        }
      }
    }
    const pV = /(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})/,
      QV = VV => {
        const eV = pV.exec(VV);
        if (!eV) throw new Error("Expected match.");
        return 36e5 * Number(eV[1] || "0") + 6e4 * Number(eV[2]) + 1e3 * Number(eV[3]) + Number(eV[4])
      },
      nV = VV => {
        const eV = Math.floor(VV / 36e5),
          xV = Math.floor(VV % 36e5 / 6e4),
          JV = Math.floor(VV % 6e4 / 1e3),
          YV = VV % 1e3;
        return eV.toString().padStart(2, "0") + ":" + xV.toString().padStart(2, "0") + ":" + JV.toString().padStart(2, "0") + "." + YV.toString().padStart(3, "0")
      }
  },
  35006: (VV, eV, xV) => {
    var JV;
    xV.d(eV, {
      b: () => nV,
      f: () => wV,
      h: () => vV,
      i: () => yV
    });
    var YV = xV(35015),
      UV = xV(34933);
    "undefined" !== typeof(JV || (JV = xV.t(YV, 2))) && (JV || (JV = xV.t(YV, 2)));
    class yV extends UV.g {
      constructor() {
        super(...arguments), this._writerAcquired = !1, this._monotonicity = null, this.onwrite = null
      }
      _setMonotonicity(VV) {
        !1 !== this._monotonicity && (this._monotonicity = VV)
      }
      _dispatchWrite(VV, eV) {
        this.onwrite?.(VV, eV), this._emit("write", {
          start: VV,
          end: eV
        })
      }
      slice(VV) {
        if (!Number.isInteger(VV) || VV < 0) throw new TypeError("offset must be a non-negative integer.");
        return new ZV(this, VV)
      }
    }
    const pV = 65536,
      QV = 2 ** 32;
    class nV extends yV {
      constructor() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (super(), this.buffer = null, this._maxPos = 0, !VV || "object" !== typeof VV) throw new TypeError("BufferTarget options, when provided, must be an object.");
        if (void 0 !== VV.onFinalize && "function" !== typeof VV.onFinalize) throw new TypeError("options.onFinalize, when provided, must be a function.");
        if (this._options = VV, this._supportsResize = "resize" in new ArrayBuffer(0), this._supportsResize) try {
          this._buffer = new ArrayBuffer(pV, {
            maxByteLength: QV
          })
        } catch {
          this._buffer = new ArrayBuffer(pV), this._supportsResize = !1
        } else this._buffer = new ArrayBuffer(pV);
        this._bytes = new Uint8Array(this._buffer)
      }
      _ensureSize(VV) {
        let eV = this._buffer.byteLength;
        for (; eV < VV;) eV *= 2;
        if (eV !== this._buffer.byteLength) {
          if (eV > QV) throw new Error("ArrayBuffer exceeded maximum size of 4294967296 bytes. Please consider using another target.");
          if (this._supportsResize) this._buffer.resize(eV);
          else {
            const VV = new ArrayBuffer(eV),
              xV = new Uint8Array(VV);
            xV.set(this._bytes, 0), this._buffer = VV, this._bytes = xV
          }
        }
      }
      _start() {}
      _write(VV, eV) {
        this._ensureSize(eV + VV.byteLength), this._bytes.set(VV, eV), this._maxPos = Math.max(this._maxPos, eV + VV.byteLength), this._dispatchWrite(eV, eV + VV.byteLength)
      }
      async _flush() {}
      async _finalize() {
        this.buffer = this._buffer.slice(0, this._maxPos), this._options.onFinalize && await this._options.onFinalize(this.buffer), this._emit("finalized")
      }
      async _close() {}
      _getSlice(VV, eV) {
        return this._bytes.slice(VV, eV)
      }
    }
    class wV extends yV {
      _start() {}
      _write(VV, eV) {
        this._dispatchWrite(eV, eV + VV.byteLength)
      }
      async _flush() {}
      async _finalize() {
        this._emit("finalized")
      }
      async _close() {}
    }
    class ZV extends yV {
      constructor(VV, eV) {
        super(), this._baseTarget = VV, this._offset = eV
      }
      _start() {}
      _write(VV, eV) {
        this._baseTarget._write(VV, this._offset + eV), this._dispatchWrite(eV, eV + VV.byteLength)
      }
      _flush() {
        return this._baseTarget._flush()
      }
      async _finalize() {
        this._emit("finalized")
      }
      async _close() {}
      _setMonotonicity(VV) {
        super._setMonotonicity(VV), this._baseTarget._setMonotonicity(VV)
      }
    }
    class vV {
      constructor(VV, eV) {
        if (this.rootPath = VV, this.getTarget = eV, "string" !== typeof VV) throw new TypeError("rootPath must be a string.");
        if ("function" !== typeof eV) throw new TypeError("getTarget must be a function.")
      }
    }
  },
  34981: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => JV
    });
    const JV = "Mediabunny v1.61.3"
  },
  34998: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => YV
    });
    var JV = xV(34933);
    class YV {
      constructor(VV, eV) {
        if (this.finalized = !1, this.started = !1, this.pos = 0, this.trackedWrites = null, this.trackedStart = -1, this.trackedEnd = -1, VV._writerAcquired) throw new Error("Can't have multiple Writers for the same Target.");
        this.target = VV, VV._setMonotonicity(eV), VV._writerAcquired = !0
      }
      start() {
        (0, JV.L)(!this.started), this.target._start(), this.started = !0
      }
      write(VV) {
        (0, JV.L)(this.started && !this.finalized), this.maybeTrackWrites(VV), this.target._write(VV, this.pos), this.pos += VV.byteLength
      }
      seek(VV) {
        this.pos = VV
      }
      getPos() {
        return this.pos
      }
      async flush() {
        return (0, JV.L)(this.started && !this.finalized), this.target._flush()
      }
      async finalize() {
        (0, JV.L)(this.started && !this.finalized), await this.target._finalize(), this.finalized = !0
      }
      maybeTrackWrites(VV) {
        if (!this.trackedWrites) return;
        let eV = this.getPos();
        if (eV < this.trackedStart) {
          if (eV + VV.byteLength <= this.trackedStart) return;
          VV = VV.subarray(this.trackedStart - eV), eV = 0
        }
        const xV = eV + VV.byteLength - this.trackedStart;
        let JV = this.trackedWrites.byteLength;
        for (; JV < xV;) JV *= 2;
        if (JV !== this.trackedWrites.byteLength) {
          const VV = new Uint8Array(JV);
          VV.set(this.trackedWrites, 0), this.trackedWrites = VV
        }
        this.trackedWrites.set(VV, eV - this.trackedStart), this.trackedEnd = Math.max(this.trackedEnd, eV + VV.byteLength)
      }
      startTrackingWrites() {
        this.trackedWrites = new Uint8Array(1024), this.trackedStart = this.getPos(), this.trackedEnd = this.trackedStart
      }
      stopTrackingWrites() {
        if (!this.trackedWrites) throw new Error("Internal error: Can't get tracked writes since nothing was tracked.");
        const VV = {
          data: this.trackedWrites.subarray(0, this.trackedEnd - this.trackedStart),
          start: this.trackedStart,
          end: this.trackedEnd
        };
        return this.trackedWrites = null, VV
      }
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);