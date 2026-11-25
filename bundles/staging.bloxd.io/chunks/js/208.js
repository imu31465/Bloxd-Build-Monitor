/*! For license information please see fo1voe.208.bafffca5.chunk.js.LICENSE.txt */
export const id = 208;
export const ids = [208];
export const modules = {
  34654: (MM, rM, iM) => {
    function OM() {
      return "object" === typeof process && "object" === typeof process.versions && "undefined" !== typeof process.versions.node
    }

    function SM(MM) {
      return MM instanceof Uint8Array && (!OM() || !Buffer.isBuffer(MM))
    }

    function jM(MM) {
      return MM instanceof ArrayBuffer
    }

    function aM(MM) {
      return !!OM() && Buffer.isBuffer(MM)
    }
    var PM = iM(34660).d,
      nM = iM(34663).b,
      QM = "Argument compressed must be type of ArrayBuffer, Buffer, or Uint8Array";
    rM.e = function(MM) {
      if (!SM(MM) && !jM(MM) && !aM(MM)) throw new TypeError(QM);
      var rM = !1,
        iM = !1;
      SM(MM) ? rM = !0 : jM(MM) && (iM = !0, MM = new Uint8Array(MM));
      var OM, PM, zM, LM = new nM(MM),
        mM = LM.maxCompressedLength();
      if (rM ? (OM = new Uint8Array(mM), zM = LM.compressToBuffer(OM)) : iM ? (OM = new ArrayBuffer(mM), PM = new Uint8Array(OM), zM = LM.compressToBuffer(PM)) : (OM = Buffer.alloc(mM), zM = LM.compressToBuffer(OM)), !OM.slice) {
        var HM = new Uint8Array(Array.prototype.slice.call(OM, 0, zM));
        if (rM) return HM;
        if (iM) return HM.buffer;
        throw new Error("Not implemented")
      }
      return OM.slice(0, zM)
    }
  },
  34663: (MM, rM) => {
    var iM = new Array(15);

    function OM(MM, rM) {
      return 506832829 * MM >>> rM
    }

    function SM(MM, rM) {
      return MM[rM] + (MM[rM + 1] << 8) + (MM[rM + 2] << 16) + (MM[rM + 3] << 24)
    }

    function jM(MM, rM, iM) {
      return MM[rM] === MM[iM] && MM[rM + 1] === MM[iM + 1] && MM[rM + 2] === MM[iM + 2] && MM[rM + 3] === MM[iM + 3]
    }

    function aM(MM, rM, iM, OM, SM) {
      return iM <= 60 ? (OM[SM] = iM - 1 << 2, SM += 1) : iM < 256 ? (OM[SM] = 240, OM[SM + 1] = iM - 1, SM += 2) : (OM[SM] = 244, OM[SM + 1] = iM - 1 & 255, OM[SM + 2] = iM - 1 >>> 8, SM += 3),
        function(MM, rM, iM, OM, SM) {
          var jM;
          for (jM = 0; jM < SM; jM++) iM[OM + jM] = MM[rM + jM]
        }(MM, rM, OM, SM, iM), SM + iM
    }

    function PM(MM, rM, iM, OM) {
      return OM < 12 && iM < 2048 ? (MM[rM] = 1 + (OM - 4 << 2) + (iM >>> 8 << 5), MM[rM + 1] = 255 & iM, rM + 2) : (MM[rM] = 2 + (OM - 1 << 2), MM[rM + 1] = 255 & iM, MM[rM + 2] = iM >>> 8, rM + 3)
    }

    function nM(MM, rM, iM, OM) {
      for (; OM >= 68;) rM = PM(MM, rM, iM, 64), OM -= 64;
      return OM > 64 && (rM = PM(MM, rM, iM, 60), OM -= 60), PM(MM, rM, iM, OM)
    }

    function QM(MM, rM, PM, QM, zM) {
      for (var LM = 1; 1 << LM <= PM && LM <= 14;) LM += 1;
      var mM = 32 - (LM -= 1);
      "undefined" === typeof iM[LM] && (iM[LM] = new Uint16Array(1 << LM));
      var HM, hM = iM[LM];
      for (HM = 0; HM < hM.length; HM++) hM[HM] = 0;
      var JM, dM, yM, lM, EM, UM, GM, CM, eM, bM, wM = rM + PM,
        tM = rM,
        gM = rM,
        uM = !0;
      if (PM >= 15)
        for (JM = wM - 15, yM = OM(SM(MM, rM += 1), mM); uM;) {
          UM = 32, lM = rM;
          do {
            if (dM = yM, GM = UM >>> 5, UM += 1, lM = (rM = lM) + GM, rM > JM) {
              uM = !1;
              break
            }
            yM = OM(SM(MM, lM), mM), EM = tM + hM[dM], hM[dM] = rM - tM
          } while (!jM(MM, rM, EM));
          if (!uM) break;
          zM = aM(MM, gM, rM - gM, QM, zM);
          do {
            for (CM = rM, eM = 4; rM + eM < wM && MM[rM + eM] === MM[EM + eM];) eM += 1;
            if (rM += eM, zM = nM(QM, zM, CM - EM, eM), gM = rM, rM >= JM) {
              uM = !1;
              break
            }
            hM[OM(SM(MM, rM - 1), mM)] = rM - 1 - tM, EM = tM + hM[bM = OM(SM(MM, rM), mM)], hM[bM] = rM - tM
          } while (jM(MM, rM, EM));
          if (!uM) break;
          yM = OM(SM(MM, rM += 1), mM)
        }
      return gM < wM && (zM = aM(MM, gM, wM - gM, QM, zM)), zM
    }

    function zM(MM) {
      this.array = MM
    }
    zM.prototype.maxCompressedLength = function() {
      var MM = this.array.length;
      return 32 + MM + Math.floor(MM / 6)
    }, zM.prototype.compressToBuffer = function(MM) {
      var rM, iM = this.array,
        OM = iM.length,
        SM = 0,
        jM = 0;
      for (jM = function(MM, rM, iM) {
          do {
            rM[iM] = 127 & MM, (MM >>>= 7) > 0 && (rM[iM] += 128), iM += 1
          } while (MM > 0);
          return iM
        }(OM, MM, jM); SM < OM;) jM = QM(iM, SM, rM = Math.min(OM - SM, 65536), MM, jM), SM += rM;
      return jM
    }, rM.b = zM
  },
  34660: (MM, rM) => {
    var iM = [0, 255, 65535, 16777215, 4294967295];

    function OM(MM, rM, iM, OM, SM) {
      var jM;
      for (jM = 0; jM < SM; jM++) iM[OM + jM] = MM[rM + jM]
    }

    function SM(MM, rM, iM, OM) {
      var SM;
      for (SM = 0; SM < OM; SM++) MM[rM + SM] = MM[rM - iM + SM]
    }

    function jM(MM) {
      this.array = MM, this.pos = 0
    }
    jM.prototype.readUncompressedLength = function() {
      for (var MM, rM, iM = 0, OM = 0; OM < 32 && this.pos < this.array.length;) {
        if (MM = this.array[this.pos], this.pos += 1, (rM = 127 & MM) << OM >>> OM !== rM) return -1;
        if (iM |= rM << OM, MM < 128) return iM;
        OM += 7
      }
      return -1
    }, jM.prototype.uncompressToBuffer = function(MM) {
      for (var rM, jM, aM, PM, nM = this.array, QM = nM.length, zM = this.pos, LM = 0; zM < nM.length;)
        if (rM = nM[zM], zM += 1, 0 === (3 & rM)) {
          if ((jM = 1 + (rM >>> 2)) > 60) {
            if (zM + 3 >= QM) return !1;
            aM = jM - 60, jM = 1 + ((jM = nM[zM] + (nM[zM + 1] << 8) + (nM[zM + 2] << 16) + (nM[zM + 3] << 24)) & iM[aM]), zM += aM
          }
          if (zM + jM > QM) return !1;
          OM(nM, zM, MM, LM, jM), zM += jM, LM += jM
        } else {
          switch (3 & rM) {
            case 1:
              jM = 4 + (rM >>> 2 & 7), PM = nM[zM] + (rM >>> 5 << 8), zM += 1;
              break;
            case 2:
              if (zM + 1 >= QM) return !1;
              jM = 1 + (rM >>> 2), PM = nM[zM] + (nM[zM + 1] << 8), zM += 2;
              break;
            case 3:
              if (zM + 3 >= QM) return !1;
              jM = 1 + (rM >>> 2), PM = nM[zM] + (nM[zM + 1] << 8) + (nM[zM + 2] << 16) + (nM[zM + 3] << 24), zM += 4
          }
          if (0 === PM || PM > LM) return !1;
          SM(MM, LM, PM, jM), LM += jM
        } return !0
    }, rM.d = jM
  },
  34704: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => jM,
      h: () => SM,
      k: () => QM,
      m: () => HM,
      q: () => aM,
      r: () => hM
    });
    var OM = iM(34711);
    const SM = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350],
      jM = [-1, 1, 2, 3, 4, 5, 6, 8],
      aM = MM => {
        if (!MM || MM.byteLength < 2) throw new TypeError("AAC description must be at least 2 bytes long.");
        const rM = new OM.d(MM),
          iM = PM(rM),
          {
            frequencyIndex: SM,
            sampleRate: aM
          } = nM(rM),
          QM = rM.readBits(4);
        let zM = null;
        QM >= 1 && QM <= 7 && (zM = jM[QM]);
        let LM = iM,
          mM = !1,
          HM = aM;
        if (5 === iM || 29 === iM) mM = 29 === iM, HM = nM(rM).sampleRate, LM = PM(rM), 22 === LM && rM.skipBits(4);
        else
          for (; rM.getBitsLeft() > 15;) {
            const MM = rM.pos;
            if (695 === rM.readBits(11)) {
              5 === PM(rM) && rM.readBits(1) && (HM = nM(rM).sampleRate, rM.getBitsLeft() > 11 && 1352 === rM.readBits(11) && (mM = !!rM.readBits(1)));
              break
            }
            rM.pos = MM + 1
          }
        return null !== zM && zM > 1 && (mM = !1), {
          objectType: iM,
          coreObjectType: LM,
          frequencyIndex: SM,
          channelConfiguration: QM,
          outputSampleRate: HM,
          outputNumberOfChannels: mM && 1 === zM ? 2 : zM
        }
      },
      PM = MM => {
        const rM = MM.readBits(5);
        return 31 === rM ? 32 + MM.readBits(6) : rM
      },
      nM = MM => {
        const rM = MM.readBits(4);
        return 15 === rM ? {
          frequencyIndex: rM,
          sampleRate: MM.readBits(24)
        } : {
          frequencyIndex: rM,
          sampleRate: rM < SM.length ? SM[rM] : null
        }
      },
      QM = MM => {
        const rM = 5 === MM.objectType || 29 === MM.objectType,
          iM = 29 === MM.objectType,
          SM = rM ? MM.outputSampleRate / 2 : MM.outputSampleRate,
          aM = iM ? 1 : MM.outputNumberOfChannels,
          PM = jM.indexOf(aM);
        if (-1 === PM) throw new TypeError(`Unsupported number of channels: ${MM.outputNumberOfChannels}`);
        let nM = 16;
        MM.objectType >= 32 && (nM += 6), 15 === mM(SM) && (nM += 24), rM && (nM += 9, 15 === mM(MM.outputSampleRate) && (nM += 24));
        const QM = Math.ceil(nM / 8),
          HM = new Uint8Array(QM),
          hM = new OM.d(HM);
        return zM(hM, MM.objectType), LM(hM, SM), hM.writeBits(4, PM), rM && (LM(hM, MM.outputSampleRate), zM(hM, 2)), hM.writeBits(3, 0), HM
      },
      zM = (MM, rM) => {
        rM < 32 ? MM.writeBits(5, rM) : (MM.writeBits(5, 31), MM.writeBits(6, rM - 32))
      },
      LM = (MM, rM) => {
        const iM = mM(rM);
        MM.writeBits(4, iM), 15 === iM && MM.writeBits(24, rM)
      },
      mM = MM => {
        const rM = SM.indexOf(MM);
        return -1 === rM ? 15 : rM
      },
      HM = MM => {
        const rM = new Uint8Array(7),
          iM = new OM.d(rM),
          {
            coreObjectType: SM,
            frequencyIndex: jM,
            channelConfiguration: aM
          } = MM,
          PM = SM - 1;
        return iM.writeBits(12, 4095), iM.writeBits(1, 0), iM.writeBits(2, 0), iM.writeBits(1, 1), iM.writeBits(2, PM), iM.writeBits(4, jM), iM.writeBits(1, 0), iM.writeBits(3, aM), iM.writeBits(1, 0), iM.writeBits(1, 0), iM.writeBits(1, 0), iM.writeBits(1, 0), iM.skipBits(13), iM.writeBits(11, 2047), iM.writeBits(2, 0), {
          header: rM,
          bitstream: iM
        }
      },
      hM = (MM, rM) => {
        MM.pos = 30, MM.writeBits(13, rM)
      }
  },
  34711: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => OM
    });
    class OM {
      constructor(MM) {
        this.bytes = MM, this.pos = 0
      }
      seekToByte(MM) {
        this.pos = 8 * MM
      }
      readBit() {
        const MM = Math.floor(this.pos / 8),
          rM = this.bytes[MM] ?? 0,
          iM = 7 - (7 & this.pos),
          OM = (rM & 1 << iM) >> iM;
        return this.pos++, OM
      }
      readBits(MM) {
        if (1 === MM) return this.readBit();
        let rM = 0;
        for (let iM = 0; iM < MM; iM++) rM <<= 1, rM |= this.readBit();
        return rM
      }
      writeBits(MM, rM) {
        const iM = this.pos + MM;
        for (let OM = this.pos; OM < iM; OM++) {
          const MM = Math.floor(OM / 8);
          let SM = this.bytes[MM];
          const jM = 7 - (7 & OM);
          SM &= ~(1 << jM), SM |= (rM & 1 << iM - OM - 1) >> iM - OM - 1 << jM, this.bytes[MM] = SM
        }
        this.pos = iM
      }
      copyBits(MM, rM) {
        let iM = 0;
        for (; iM < MM - 7; iM += 8) this.writeBits(8, rM.readBits(8));
        const OM = MM - iM;
        OM > 0 && this.writeBits(OM, rM.readBits(OM))
      }
      readAlignedByte() {
        if (this.pos % 8 !== 0) throw new Error("Bitstream is not byte-aligned.");
        const MM = this.pos / 8,
          rM = this.bytes[MM] ?? 0;
        return this.pos += 8, rM
      }
      skipBits(MM) {
        this.pos += MM
      }
      getBitsLeft() {
        return 8 * this.bytes.length - this.pos
      }
      clone() {
        const MM = new OM(this.bytes);
        return MM.pos = this.pos, MM
      }
    }
  },
  34720: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => cM,
      f: () => nM,
      g: () => Mr,
      h: () => qM,
      k: () => QM,
      n: () => vM,
      q: () => hr,
      r: () => yM,
      s: () => lM,
      v: () => TM,
      z: () => GM,
      D: () => oM,
      F: () => KM,
      J: () => xM,
      I: () => EM,
      M: () => gM,
      O: () => hM,
      S: () => tM,
      V: () => NM,
      Y: () => mM,
      ab: () => HM,
      cb: () => VM,
      fb: () => Lr,
      hb: () => ir,
      jb: () => IM,
      nb: () => FM,
      ob: () => XM,
      rb: () => UM,
      sb: () => ZM
    });
    var OM = iM(34713),
      SM = iM(34685),
      jM = iM(34727);
    const aM = [48e3, 44100, 32e3],
      PM = [24e3, 22050, 16e3];
    var nM, QM, zM = iM(34711),
      LM = iM(34734);
    ! function(MM) {
      MM[MM.NON_IDR_SLICE = 1] = "NON_IDR_SLICE", MM[MM.SLICE_DPA = 2] = "SLICE_DPA", MM[MM.SLICE_DPB = 3] = "SLICE_DPB", MM[MM.SLICE_DPC = 4] = "SLICE_DPC", MM[MM.IDR = 5] = "IDR", MM[MM.SEI = 6] = "SEI", MM[MM.SPS = 7] = "SPS", MM[MM.PPS = 8] = "PPS", MM[MM.AUD = 9] = "AUD", MM[MM.SPS_EXT = 13] = "SPS_EXT"
    }(nM || (nM = {})),
    function(MM) {
      MM[MM.RASL_N = 8] = "RASL_N", MM[MM.RASL_R = 9] = "RASL_R", MM[MM.BLA_W_LP = 16] = "BLA_W_LP", MM[MM.RSV_IRAP_VCL23 = 23] = "RSV_IRAP_VCL23", MM[MM.VPS_NUT = 32] = "VPS_NUT", MM[MM.SPS_NUT = 33] = "SPS_NUT", MM[MM.PPS_NUT = 34] = "PPS_NUT", MM[MM.AUD_NUT = 35] = "AUD_NUT", MM[MM.PREFIX_SEI_NUT = 39] = "PREFIX_SEI_NUT", MM[MM.SUFFIX_SEI_NUT = 40] = "SUFFIX_SEI_NUT"
    }(QM || (QM = {}));
    const mM = function*(MM) {
        let rM = 0,
          iM = -1;
        for (; rM < MM.length - 2;) {
          const OM = MM.indexOf(0, rM);
          if (-1 === OM || OM >= MM.length - 2) break;
          rM = OM;
          let SM = 0;
          rM + 3 < MM.length && 0 === MM[rM + 1] && 0 === MM[rM + 2] && 1 === MM[rM + 3] ? SM = 4 : 0 === MM[rM + 1] && 1 === MM[rM + 2] && (SM = 3), 0 !== SM ? (-1 !== iM && rM > iM && (yield {
            offset: iM,
            length: rM - iM
          }), iM = rM + SM, rM = iM) : rM++
        } - 1 !== iM && iM < MM.length && (yield {
          offset: iM,
          length: MM.length - iM
        })
      },
      HM = function*(MM, rM) {
        let iM = 0;
        const OM = new DataView(MM.buffer, MM.byteOffset, MM.byteLength);
        for (; iM + rM <= MM.length;) {
          let MM;
          1 === rM ? MM = OM.getUint8(iM) : 2 === rM ? MM = OM.getUint16(iM, !1) : 3 === rM ? MM = (0, SM.rb)(OM, iM, !1) : ((0, SM.J)(4 === rM), MM = OM.getUint32(iM, !1)), iM += rM, yield {
            offset: iM,
            length: MM
          }, iM += MM
        }
      },
      hM = MM => 31 & MM,
      JM = MM => {
        const rM = [],
          iM = MM.length;
        for (let OM = 0; OM < iM; OM++) OM + 2 < iM && 0 === MM[OM] && 0 === MM[OM + 1] && 3 === MM[OM + 2] ? (rM.push(0, 0), OM += 2) : rM.push(MM[OM]);
        return new Uint8Array(rM)
      },
      dM = new Uint8Array([0, 0, 0, 1]),
      yM = MM => {
        const rM = MM.reduce(((MM, rM) => MM + dM.byteLength + rM.byteLength), 0),
          iM = new Uint8Array(rM);
        let OM = 0;
        for (const SM of MM) iM.set(dM, OM), OM += dM.byteLength, iM.set(SM, OM), OM += SM.byteLength;
        return iM
      },
      lM = (MM, rM) => {
        const iM = MM.reduce(((MM, iM) => MM + rM + iM.byteLength), 0),
          OM = new Uint8Array(iM);
        let jM = 0;
        for (const aM of MM) {
          const MM = new DataView(OM.buffer, OM.byteOffset, OM.byteLength);
          switch (rM) {
            case 1:
              MM.setUint8(jM, aM.byteLength);
              break;
            case 2:
              MM.setUint16(jM, aM.byteLength, !1);
              break;
            case 3:
              (0, SM.bd)(MM, jM, aM.byteLength, !1);
              break;
            case 4:
              MM.setUint32(jM, aM.byteLength, !1)
          }
          jM += rM, OM.set(aM, jM), jM += aM.byteLength
        }
        return OM
      },
      EM = MM => {
        try {
          const rM = [],
            iM = [],
            OM = [];
          for (const SM of mM(MM)) {
            const jM = MM.subarray(SM.offset, SM.offset + SM.length),
              aM = hM(jM[0]);
            aM === nM.SPS ? rM.push(jM) : aM === nM.PPS ? iM.push(jM) : aM === nM.SPS_EXT && OM.push(jM)
          }
          if (0 === rM.length) return null;
          if (0 === iM.length) return null;
          const jM = rM[0],
            aM = eM(jM);
          (0, SM.J)(null !== aM);
          const PM = 100 === aM.profileIdc || 110 === aM.profileIdc || 122 === aM.profileIdc || 144 === aM.profileIdc;
          return {
            configurationVersion: 1,
            avcProfileIndication: aM.profileIdc,
            profileCompatibility: aM.constraintFlags,
            avcLevelIndication: aM.levelIdc,
            lengthSizeMinusOne: 3,
            sequenceParameterSets: rM,
            pictureParameterSets: iM,
            chromaFormat: PM ? aM.chromaFormatIdc : null,
            bitDepthLumaMinus8: PM ? aM.bitDepthLumaMinus8 : null,
            bitDepthChromaMinus8: PM ? aM.bitDepthChromaMinus8 : null,
            sequenceParameterSetExt: PM ? OM : null
          }
        } catch (rM) {
          return jM.d._error("Error building AVC Decoder Configuration Record:", rM), null
        }
      },
      UM = MM => {
        const rM = [];
        rM.push(MM.configurationVersion), rM.push(MM.avcProfileIndication), rM.push(MM.profileCompatibility), rM.push(MM.avcLevelIndication), rM.push(252 | 3 & MM.lengthSizeMinusOne), rM.push(224 | 31 & MM.sequenceParameterSets.length);
        for (const iM of MM.sequenceParameterSets) {
          const MM = iM.byteLength;
          rM.push(MM >> 8), rM.push(255 & MM);
          for (let OM = 0; OM < MM; OM++) rM.push(iM[OM])
        }
        rM.push(MM.pictureParameterSets.length);
        for (const iM of MM.pictureParameterSets) {
          const MM = iM.byteLength;
          rM.push(MM >> 8), rM.push(255 & MM);
          for (let OM = 0; OM < MM; OM++) rM.push(iM[OM])
        }
        if ((100 === MM.avcProfileIndication || 110 === MM.avcProfileIndication || 122 === MM.avcProfileIndication || 144 === MM.avcProfileIndication) && null !== MM.chromaFormat) {
          (0, SM.J)(null !== MM.bitDepthLumaMinus8), (0, SM.J)(null !== MM.bitDepthChromaMinus8), (0, SM.J)(null !== MM.sequenceParameterSetExt), rM.push(252 | 3 & MM.chromaFormat), rM.push(248 | 7 & MM.bitDepthLumaMinus8), rM.push(248 | 7 & MM.bitDepthChromaMinus8), rM.push(MM.sequenceParameterSetExt.length);
          for (const iM of MM.sequenceParameterSetExt) {
            const MM = iM.byteLength;
            rM.push(MM >> 8), rM.push(255 & MM);
            for (let OM = 0; OM < MM; OM++) rM.push(iM[OM])
          }
        }
        return new Uint8Array(rM)
      },
      GM = MM => {
        try {
          const rM = (0, SM.nd)(MM);
          let iM = 0;
          const OM = rM.getUint8(iM++),
            jM = rM.getUint8(iM++),
            aM = rM.getUint8(iM++),
            PM = rM.getUint8(iM++),
            nM = 3 & rM.getUint8(iM++),
            QM = 31 & rM.getUint8(iM++),
            zM = [];
          for (let SM = 0; SM < QM; SM++) {
            const OM = rM.getUint16(iM, !1);
            iM += 2, zM.push(MM.subarray(iM, iM + OM)), iM += OM
          }
          const LM = rM.getUint8(iM++),
            mM = [];
          for (let SM = 0; SM < LM; SM++) {
            const OM = rM.getUint16(iM, !1);
            iM += 2, mM.push(MM.subarray(iM, iM + OM)), iM += OM
          }
          const HM = {
            configurationVersion: OM,
            avcProfileIndication: jM,
            profileCompatibility: aM,
            avcLevelIndication: PM,
            lengthSizeMinusOne: nM,
            sequenceParameterSets: zM,
            pictureParameterSets: mM,
            chromaFormat: null,
            bitDepthLumaMinus8: null,
            bitDepthChromaMinus8: null,
            sequenceParameterSetExt: null
          };
          if ((100 === jM || 110 === jM || 122 === jM || 144 === jM) && iM + 4 <= MM.length) {
            const OM = 3 & rM.getUint8(iM++),
              SM = 7 & rM.getUint8(iM++),
              jM = 7 & rM.getUint8(iM++),
              aM = rM.getUint8(iM++);
            HM.chromaFormat = OM, HM.bitDepthLumaMinus8 = SM, HM.bitDepthChromaMinus8 = jM;
            const PM = [];
            for (let nM = 0; nM < aM; nM++) {
              const OM = rM.getUint16(iM, !1);
              iM += 2, PM.push(MM.subarray(iM, iM + OM)), iM += OM
            }
            HM.sequenceParameterSetExt = PM
          }
          return HM
        } catch (rM) {
          return jM.d._error("Error deserializing AVC Decoder Configuration Record:", rM), null
        }
      },
      CM = {
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
      eM = MM => {
        try {
          const rM = JM(MM),
            iM = new zM.d(rM);
          iM.skipBits(1), iM.skipBits(2);
          if (7 !== iM.readBits(5)) return null;
          const jM = iM.readAlignedByte(),
            aM = iM.readAlignedByte(),
            PM = iM.readAlignedByte();
          (0, SM.Ac)(iM);
          let nM = 1,
            QM = 0,
            LM = 0,
            mM = 0;
          if (100 === jM || 110 === jM || 122 === jM || 244 === jM || 44 === jM || 83 === jM || 86 === jM || 118 === jM || 128 === jM) {
            nM = (0, SM.Ac)(iM), 3 === nM && (mM = iM.readBits(1)), QM = (0, SM.Ac)(iM), LM = (0, SM.Ac)(iM), iM.skipBits(1);
            if (iM.readBits(1))
              for (let MM = 0; MM < (3 !== nM ? 8 : 12); MM++) {
                if (iM.readBits(1)) {
                  const rM = MM < 6 ? 16 : 64;
                  let OM = 8,
                    jM = 8;
                  for (let MM = 0; MM < rM; MM++) {
                    if (0 !== jM) {
                      jM = (OM + (0, SM.Bc)(iM) + 256) % 256
                    }
                    OM = 0 === jM ? OM : jM
                  }
                }
              }
          }(0, SM.Ac)(iM);
          const HM = (0, SM.Ac)(iM);
          if (0 === HM)(0, SM.Ac)(iM);
          else if (1 === HM) {
            iM.skipBits(1), (0, SM.Bc)(iM), (0, SM.Bc)(iM);
            const MM = (0, SM.Ac)(iM);
            for (let rM = 0; rM < MM; rM++)(0, SM.Bc)(iM)
          }(0, SM.Ac)(iM), iM.skipBits(1);
          const hM = (0, SM.Ac)(iM),
            dM = (0, SM.Ac)(iM),
            yM = 16 * (hM + 1),
            lM = 16 * (dM + 1);
          let EM = yM,
            UM = lM;
          const GM = iM.readBits(1);
          GM || iM.skipBits(1), iM.skipBits(1);
          if (iM.readBits(1)) {
            const MM = (0, SM.Ac)(iM),
              rM = (0, SM.Ac)(iM),
              OM = (0, SM.Ac)(iM),
              jM = (0, SM.Ac)(iM);
            let aM, PM;
            if (0 === (0 === mM ? nM : 0)) aM = 1, PM = 2 - GM;
            else {
              aM = 3 === nM ? 1 : 2, PM = (1 === nM ? 2 : 1) * (2 - GM)
            }
            EM -= aM * (MM + rM), UM -= PM * (OM + jM)
          }
          let eM = 2,
            wM = 2,
            tM = 2,
            gM = 0,
            uM = {
              num: 1,
              den: 1
            },
            RM = null,
            pM = null,
            WM = null,
            sM = null;
          const DM = iM.pos;
          if (iM.readBits(1)) {
            if (iM.readBits(1)) {
              const MM = iM.readBits(8);
              if (255 === MM) uM = {
                num: iM.readBits(16),
                den: iM.readBits(16)
              };
              else {
                const rM = CM[MM];
                rM && (uM = rM)
              }
            }
            iM.readBits(1) && iM.skipBits(1);
            if (iM.readBits(1)) {
              iM.skipBits(3), gM = iM.readBits(1);
              iM.readBits(1) && (eM = iM.readBits(8), wM = iM.readBits(8), tM = iM.readBits(8))
            }
            iM.readBits(1) && ((0, SM.Ac)(iM), (0, SM.Ac)(iM));
            iM.readBits(1) && (iM.skipBits(32), iM.skipBits(32), iM.skipBits(1));
            const MM = iM.readBits(1);
            MM && bM(iM);
            const rM = iM.readBits(1);
            rM && bM(iM), (MM || rM) && iM.skipBits(1), iM.skipBits(1), WM = iM.pos, sM = iM.readBits(1), sM && (iM.skipBits(1), (0, SM.Ac)(iM), (0, SM.Ac)(iM), (0, SM.Ac)(iM), (0, SM.Ac)(iM), RM = (0, SM.Ac)(iM), pM = (0, SM.Ac)(iM))
          }
          if (null === RM) {
            (0, SM.J)(null === pM);
            if (44 !== jM && 86 !== jM && 100 !== jM && 110 !== jM && 122 !== jM && 244 !== jM || !(16 & aM)) {
              const MM = hM + 1,
                rM = (2 - GM) * (dM + 1),
                iM = OM.c.find((MM => MM.level >= PM)) ?? (0, SM.cc)(OM.c),
                jM = Math.min(Math.floor(iM.maxDpbMbs / (MM * rM)), 16);
              RM = jM, pM = jM
            } else RM = 0, pM = 0
          }
          return (0, SM.J)(null !== pM), {
            emulationUnpreventedBytes: rM,
            profileIdc: jM,
            constraintFlags: aM,
            levelIdc: PM,
            frameMbsOnlyFlag: GM,
            chromaFormatIdc: nM,
            bitDepthLumaMinus8: QM,
            bitDepthChromaMinus8: LM,
            codedWidth: yM,
            codedHeight: lM,
            displayWidth: EM,
            displayHeight: UM,
            pixelAspectRatio: uM,
            colourPrimaries: eM,
            matrixCoefficients: tM,
            transferCharacteristics: wM,
            fullRangeFlag: gM,
            numReorderFrames: RM,
            maxDecFrameBuffering: pM,
            vuiParametersFlagBitOffset: DM,
            bitstreamRestrictionFlagBitOffset: WM,
            bitstreamRestrictionFlag: sM
          }
        } catch (rM) {
          return jM.d._error("Error parsing AVC SPS:", rM), null
        }
      },
      bM = MM => {
        const rM = (0, SM.Ac)(MM);
        MM.skipBits(4), MM.skipBits(4);
        for (let iM = 0; iM <= rM; iM++)(0, SM.Ac)(MM), (0, SM.Ac)(MM), MM.skipBits(1);
        MM.skipBits(5), MM.skipBits(5), MM.skipBits(5), MM.skipBits(5)
      },
      wM = (MM, rM) => {
        if (rM.description) {
          const iM = 3 & (0, SM.od)(rM.description)[21];
          return HM(MM, iM + 1)
        }
        return mM(MM)
      },
      tM = MM => MM >> 1 & 63,
      gM = MM => {
        try {
          const rM = [],
            iM = [],
            OM = [],
            aM = [];
          for (const SM of mM(MM)) {
            const jM = MM.subarray(SM.offset, SM.offset + SM.length),
              PM = tM(jM[0]);
            PM === QM.VPS_NUT ? rM.push(jM) : PM === QM.SPS_NUT ? iM.push(jM) : PM === QM.PPS_NUT ? OM.push(jM) : PM !== QM.PREFIX_SEI_NUT && PM !== QM.SUFFIX_SEI_NUT || aM.push(jM)
          }
          if (0 === iM.length || 0 === OM.length) return null;
          const PM = (MM => {
            try {
              const rM = new zM.d(JM(MM));
              rM.skipBits(16), rM.readBits(4);
              const iM = rM.readBits(3),
                OM = rM.readBits(1),
                {
                  general_profile_space: jM,
                  general_tier_flag: aM,
                  general_profile_idc: PM,
                  general_profile_compatibility_flags: nM,
                  general_constraint_indicator_flags: QM,
                  general_level_idc: LM
                } = uM(rM, iM);
              (0, SM.Ac)(rM);
              const mM = (0, SM.Ac)(rM);
              let HM = 0;
              3 === mM && (HM = rM.readBits(1));
              const hM = (0, SM.Ac)(rM),
                dM = (0, SM.Ac)(rM);
              let yM = hM,
                lM = dM;
              if (rM.readBits(1)) {
                const MM = (0, SM.Ac)(rM),
                  iM = (0, SM.Ac)(rM),
                  OM = (0, SM.Ac)(rM),
                  jM = (0, SM.Ac)(rM);
                let aM = 1,
                  PM = 1;
                const nM = 0 === HM ? mM : 0;
                1 === nM ? (aM = 2, PM = 2) : 2 === nM && (aM = 2, PM = 1), yM -= (MM + iM) * aM, lM -= (OM + jM) * PM
              }
              const EM = (0, SM.Ac)(rM),
                UM = (0, SM.Ac)(rM);
              (0, SM.Ac)(rM);
              const GM = rM.readBits(1);
              let CM = 0;
              for (let MM = GM ? 0 : iM; MM <= iM; MM++)(0, SM.Ac)(rM), CM = (0, SM.Ac)(rM), (0, SM.Ac)(rM);
              (0, SM.Ac)(rM), (0, SM.Ac)(rM), (0, SM.Ac)(rM), (0, SM.Ac)(rM), (0, SM.Ac)(rM), (0, SM.Ac)(rM), rM.readBits(1) && rM.readBits(1) && RM(rM), rM.skipBits(1), rM.skipBits(1), rM.readBits(1) && (rM.skipBits(4), rM.skipBits(4), (0, SM.Ac)(rM), (0, SM.Ac)(rM), rM.skipBits(1));
              const eM = (0, SM.Ac)(rM);
              if (pM(rM, eM), rM.readBits(1)) {
                const MM = (0, SM.Ac)(rM);
                for (let iM = 0; iM < MM; iM++)(0, SM.Ac)(rM), rM.skipBits(1)
              }
              rM.skipBits(1), rM.skipBits(1);
              let bM = 2,
                wM = 2,
                tM = 2,
                gM = 0,
                WM = 0,
                DM = {
                  num: 1,
                  den: 1
                };
              if (rM.readBits(1)) {
                const MM = sM(rM, iM);
                DM = MM.pixelAspectRatio, bM = MM.colourPrimaries, wM = MM.transferCharacteristics, tM = MM.matrixCoefficients, gM = MM.fullRangeFlag, WM = MM.minSpatialSegmentationIdc
              }
              return {
                displayWidth: yM,
                displayHeight: lM,
                pixelAspectRatio: DM,
                colourPrimaries: bM,
                transferCharacteristics: wM,
                matrixCoefficients: tM,
                fullRangeFlag: gM,
                maxDecFrameBuffering: CM + 1,
                spsMaxSubLayersMinus1: iM,
                spsTemporalIdNestingFlag: OM,
                generalProfileSpace: jM,
                generalTierFlag: aM,
                generalProfileIdc: PM,
                generalProfileCompatibilityFlags: nM,
                generalConstraintIndicatorFlags: QM,
                generalLevelIdc: LM,
                chromaFormatIdc: mM,
                bitDepthLumaMinus8: EM,
                bitDepthChromaMinus8: UM,
                minSpatialSegmentationIdc: WM
              }
            } catch (rM) {
              return jM.d._error("Error parsing HEVC SPS:", rM), null
            }
          })(iM[0]);
          if (!PM) return null;
          let nM = 0;
          if (OM.length > 0) {
            const MM = OM[0],
              rM = new zM.d(JM(MM));
            rM.skipBits(16), (0, SM.Ac)(rM), (0, SM.Ac)(rM), rM.skipBits(1), rM.skipBits(1), rM.skipBits(3), rM.skipBits(1), rM.skipBits(1), (0, SM.Ac)(rM), (0, SM.Ac)(rM), (0, SM.Bc)(rM), rM.skipBits(1), rM.skipBits(1), rM.readBits(1) && (0, SM.Ac)(rM), (0, SM.Bc)(rM), (0, SM.Bc)(rM), rM.skipBits(1), rM.skipBits(1), rM.skipBits(1), rM.skipBits(1);
            const iM = rM.readBits(1),
              jM = rM.readBits(1);
            nM = iM || jM ? iM && !jM ? 2 : !iM && jM ? 3 : 0 : 0
          }
          const LM = [...rM.length ? [{
            arrayCompleteness: 1,
            nalUnitType: QM.VPS_NUT,
            nalUnits: rM
          }] : [], ...iM.length ? [{
            arrayCompleteness: 1,
            nalUnitType: QM.SPS_NUT,
            nalUnits: iM
          }] : [], ...OM.length ? [{
            arrayCompleteness: 1,
            nalUnitType: QM.PPS_NUT,
            nalUnits: OM
          }] : [], ...aM.length ? [{
            arrayCompleteness: 1,
            nalUnitType: tM(aM[0][0]),
            nalUnits: aM
          }] : []];
          return {
            configurationVersion: 1,
            generalProfileSpace: PM.generalProfileSpace,
            generalTierFlag: PM.generalTierFlag,
            generalProfileIdc: PM.generalProfileIdc,
            generalProfileCompatibilityFlags: PM.generalProfileCompatibilityFlags,
            generalConstraintIndicatorFlags: PM.generalConstraintIndicatorFlags,
            generalLevelIdc: PM.generalLevelIdc,
            minSpatialSegmentationIdc: PM.minSpatialSegmentationIdc,
            parallelismType: nM,
            chromaFormatIdc: PM.chromaFormatIdc,
            bitDepthLumaMinus8: PM.bitDepthLumaMinus8,
            bitDepthChromaMinus8: PM.bitDepthChromaMinus8,
            avgFrameRate: 0,
            constantFrameRate: 0,
            numTemporalLayers: PM.spsMaxSubLayersMinus1 + 1,
            temporalIdNested: PM.spsTemporalIdNestingFlag,
            lengthSizeMinusOne: 3,
            arrays: LM
          }
        } catch (rM) {
          return jM.d._error("Error building HEVC Decoder Configuration Record:", rM), null
        }
      },
      uM = (MM, rM) => {
        const iM = MM.readBits(2),
          OM = MM.readBits(1),
          SM = MM.readBits(5);
        let jM = 0;
        for (let zM = 0; zM < 32; zM++) jM = jM << 1 | MM.readBits(1);
        const aM = new Uint8Array(6);
        for (let zM = 0; zM < 6; zM++) aM[zM] = MM.readBits(8);
        const PM = MM.readBits(8),
          nM = [],
          QM = [];
        for (let zM = 0; zM < rM; zM++) nM.push(MM.readBits(1)), QM.push(MM.readBits(1));
        if (rM > 0)
          for (let zM = rM; zM < 8; zM++) MM.skipBits(2);
        for (let zM = 0; zM < rM; zM++) nM[zM] && MM.skipBits(88), QM[zM] && MM.skipBits(8);
        return {
          general_profile_space: iM,
          general_tier_flag: OM,
          general_profile_idc: SM,
          general_profile_compatibility_flags: jM,
          general_constraint_indicator_flags: aM,
          general_level_idc: PM
        }
      },
      RM = MM => {
        for (let rM = 0; rM < 4; rM++)
          for (let iM = 0; iM < (3 === rM ? 2 : 6); iM++) {
            if (MM.readBits(1)) {
              const iM = Math.min(64, 1 << 4 + (rM << 1));
              rM > 1 && (0, SM.Bc)(MM);
              for (let rM = 0; rM < iM; rM++)(0, SM.Bc)(MM)
            } else(0, SM.Ac)(MM)
          }
      },
      pM = (MM, rM) => {
        const iM = [];
        for (let OM = 0; OM < rM; OM++) iM[OM] = WM(MM, OM, rM, iM)
      },
      WM = (MM, rM, iM, OM) => {
        let jM = 0,
          aM = 0,
          PM = 0;
        if (0 !== rM && (aM = MM.readBits(1)), aM) {
          if (rM === iM) {
            PM = rM - ((0, SM.Ac)(MM) + 1)
          } else PM = rM - 1;
          MM.readBits(1), (0, SM.Ac)(MM);
          const aM = OM[PM] ?? 0;
          for (let rM = 0; rM <= aM; rM++) {
            MM.readBits(1) || MM.readBits(1)
          }
          jM = OM[PM]
        } else {
          const rM = (0, SM.Ac)(MM),
            iM = (0, SM.Ac)(MM);
          for (let OM = 0; OM < rM; OM++)(0, SM.Ac)(MM), MM.readBits(1);
          for (let OM = 0; OM < iM; OM++)(0, SM.Ac)(MM), MM.readBits(1);
          jM = rM + iM
        }
        return jM
      },
      sM = (MM, rM) => {
        let iM = 2,
          OM = 2,
          jM = 2,
          aM = 0,
          PM = 0,
          nM = {
            num: 1,
            den: 1
          };
        if (MM.readBits(1)) {
          const rM = MM.readBits(8);
          if (255 === rM) nM = {
            num: MM.readBits(16),
            den: MM.readBits(16)
          };
          else {
            const MM = CM[rM];
            MM && (nM = MM)
          }
        }
        return MM.readBits(1) && MM.readBits(1), MM.readBits(1) && (MM.readBits(3), aM = MM.readBits(1), MM.readBits(1) && (iM = MM.readBits(8), OM = MM.readBits(8), jM = MM.readBits(8))), MM.readBits(1) && ((0, SM.Ac)(MM), (0, SM.Ac)(MM)), MM.readBits(1), MM.readBits(1), MM.readBits(1), MM.readBits(1) && ((0, SM.Ac)(MM), (0, SM.Ac)(MM), (0, SM.Ac)(MM), (0, SM.Ac)(MM)), MM.readBits(1) && (MM.readBits(32), MM.readBits(32), MM.readBits(1) && (0, SM.Ac)(MM), MM.readBits(1) && DM(MM, !0, rM)), MM.readBits(1) && (MM.readBits(1), MM.readBits(1), MM.readBits(1), PM = (0, SM.Ac)(MM), (0, SM.Ac)(MM), (0, SM.Ac)(MM), (0, SM.Ac)(MM), (0, SM.Ac)(MM)), {
          pixelAspectRatio: nM,
          colourPrimaries: iM,
          transferCharacteristics: OM,
          matrixCoefficients: jM,
          fullRangeFlag: aM,
          minSpatialSegmentationIdc: PM
        }
      },
      DM = (MM, rM, iM) => {
        let OM = !1,
          jM = !1,
          aM = !1;
        rM && (OM = 1 === MM.readBits(1), jM = 1 === MM.readBits(1), (OM || jM) && (aM = 1 === MM.readBits(1), aM && (MM.readBits(8), MM.readBits(5), MM.readBits(1), MM.readBits(5)), MM.readBits(4), MM.readBits(4), aM && MM.readBits(4), MM.readBits(5), MM.readBits(5), MM.readBits(5)));
        for (let PM = 0; PM <= iM; PM++) {
          let rM = !0;
          1 === MM.readBits(1) || (rM = 1 === MM.readBits(1));
          let iM = !1;
          rM ? (0, SM.Ac)(MM) : iM = 1 === MM.readBits(1);
          let PM = 1;
          if (!iM) {
            PM = (0, SM.Ac)(MM) + 1
          }
          OM && kM(MM, PM, aM), jM && kM(MM, PM, aM)
        }
      },
      kM = (MM, rM, iM) => {
        for (let OM = 0; OM < rM; OM++)(0, SM.Ac)(MM), (0, SM.Ac)(MM), iM && ((0, SM.Ac)(MM), (0, SM.Ac)(MM)), MM.readBits(1)
      },
      ZM = MM => {
        const rM = [];
        rM.push(MM.configurationVersion), rM.push((3 & MM.generalProfileSpace) << 6 | (1 & MM.generalTierFlag) << 5 | 31 & MM.generalProfileIdc), rM.push(MM.generalProfileCompatibilityFlags >>> 24 & 255), rM.push(MM.generalProfileCompatibilityFlags >>> 16 & 255), rM.push(MM.generalProfileCompatibilityFlags >>> 8 & 255), rM.push(255 & MM.generalProfileCompatibilityFlags), rM.push(...MM.generalConstraintIndicatorFlags), rM.push(255 & MM.generalLevelIdc), rM.push(240 | MM.minSpatialSegmentationIdc >> 8 & 15), rM.push(255 & MM.minSpatialSegmentationIdc), rM.push(252 | 3 & MM.parallelismType), rM.push(252 | 3 & MM.chromaFormatIdc), rM.push(248 | 7 & MM.bitDepthLumaMinus8), rM.push(248 | 7 & MM.bitDepthChromaMinus8), rM.push(MM.avgFrameRate >> 8 & 255), rM.push(255 & MM.avgFrameRate), rM.push((3 & MM.constantFrameRate) << 6 | (7 & MM.numTemporalLayers) << 3 | (1 & MM.temporalIdNested) << 2 | 3 & MM.lengthSizeMinusOne), rM.push(255 & MM.arrays.length);
        for (const iM of MM.arrays) {
          rM.push((1 & iM.arrayCompleteness) << 7 | 63 & iM.nalUnitType), rM.push(iM.nalUnits.length >> 8 & 255), rM.push(255 & iM.nalUnits.length);
          for (const MM of iM.nalUnits) {
            rM.push(MM.length >> 8 & 255), rM.push(255 & MM.length);
            for (let iM = 0; iM < MM.length; iM++) rM.push(MM[iM])
          }
        }
        return new Uint8Array(rM)
      },
      oM = MM => {
        try {
          const rM = (0, SM.nd)(MM);
          let iM = 0;
          const OM = rM.getUint8(iM++),
            jM = rM.getUint8(iM++),
            aM = jM >> 6 & 3,
            PM = jM >> 5 & 1,
            nM = 31 & jM,
            QM = rM.getUint32(iM, !1);
          iM += 4;
          const zM = MM.subarray(iM, iM + 6);
          iM += 6;
          const LM = rM.getUint8(iM++),
            mM = (15 & rM.getUint8(iM++)) << 8 | rM.getUint8(iM++),
            HM = 3 & rM.getUint8(iM++),
            hM = 3 & rM.getUint8(iM++),
            JM = 7 & rM.getUint8(iM++),
            dM = 7 & rM.getUint8(iM++),
            yM = rM.getUint16(iM, !1);
          iM += 2;
          const lM = rM.getUint8(iM++),
            EM = lM >> 6 & 3,
            UM = lM >> 3 & 7,
            GM = lM >> 2 & 1,
            CM = 3 & lM,
            eM = rM.getUint8(iM++),
            bM = [];
          for (let SM = 0; SM < eM; SM++) {
            const OM = rM.getUint8(iM++),
              SM = OM >> 7 & 1,
              jM = 63 & OM,
              aM = rM.getUint16(iM, !1);
            iM += 2;
            const PM = [];
            for (let nM = 0; nM < aM; nM++) {
              const OM = rM.getUint16(iM, !1);
              iM += 2, PM.push(MM.subarray(iM, iM + OM)), iM += OM
            }
            bM.push({
              arrayCompleteness: SM,
              nalUnitType: jM,
              nalUnits: PM
            })
          }
          return {
            configurationVersion: OM,
            generalProfileSpace: aM,
            generalTierFlag: PM,
            generalProfileIdc: nM,
            generalProfileCompatibilityFlags: QM,
            generalConstraintIndicatorFlags: zM,
            generalLevelIdc: LM,
            minSpatialSegmentationIdc: mM,
            parallelismType: HM,
            chromaFormatIdc: hM,
            bitDepthLumaMinus8: JM,
            bitDepthChromaMinus8: dM,
            avgFrameRate: yM,
            constantFrameRate: EM,
            numTemporalLayers: UM,
            temporalIdNested: GM,
            lengthSizeMinusOne: CM,
            arrays: bM
          }
        } catch (rM) {
          return jM.d._error("Error deserializing HEVC Decoder Configuration Record:", rM), null
        }
      };
    var fM;
    ! function(MM) {
      MM[MM.audAllowed = 0] = "audAllowed", MM[MM.beforeFirstVcl = 1] = "beforeFirstVcl", MM[MM.afterFirstVcl = 2] = "afterFirstVcl", MM[MM.eoBitstreamAllowed = 3] = "eoBitstreamAllowed", MM[MM.noMoreDataAllowed = 4] = "noMoreDataAllowed"
    }(fM || (fM = {}));
    const YM = {
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
      NM = MM => {
        const rM = new zM.d(MM);
        if (2 !== rM.readBits(2)) return null;
        const iM = rM.readBits(1),
          jM = (rM.readBits(1) << 1) + iM;
        3 === jM && rM.skipBits(1);
        if (1 === rM.readBits(1)) return null;
        if (0 !== rM.readBits(1)) return null;
        rM.skipBits(2);
        if (4817730 !== rM.readBits(24)) return null;
        let aM = 8;
        if (jM >= 2) {
          aM = rM.readBits(1) ? 12 : 10
        }
        const PM = rM.readBits(3);
        let nM = 0,
          QM = 0;
        if (7 !== PM) {
          if (QM = rM.readBits(1), 1 === jM || 3 === jM) {
            const MM = rM.readBits(1),
              iM = rM.readBits(1);
            nM = MM || iM ? MM && !iM ? 2 : 1 : 3, rM.skipBits(1)
          } else nM = 1
        } else nM = 3, QM = 1;
        const LM = (rM.readBits(16) + 1) * (rM.readBits(16) + 1);
        let mM = (0, SM.cc)(OM.u).level;
        for (const SM of OM.u)
          if (LM <= SM.maxPictureSize) {
            mM = SM.level;
            break
          } const HM = YM[PM];
        return {
          profile: jM,
          level: mM,
          bitDepth: aM,
          chromaSubsampling: nM,
          videoFullRangeFlag: QM,
          colourPrimaries: HM?.colourPrimaries ?? 2,
          transferCharacteristics: HM?.transferCharacteristics ?? 2,
          matrixCoefficients: HM?.matrixCoefficients ?? 2
        }
      },
      AM = function*(MM) {
        const rM = new zM.d(MM),
          iM = () => {
            let MM = 0;
            for (let iM = 0; iM < 8; iM++) {
              const OM = rM.readAlignedByte();
              if (MM += (127 & OM) * 2 ** (7 * iM), !(128 & OM)) break;
              if (7 === iM && 128 & OM) return null
            }
            return MM > 2 ** 32 - 1 ? null : MM
          };
        for (; rM.getBitsLeft() >= 8;) {
          rM.skipBits(1);
          const OM = rM.readBits(4),
            jM = rM.readBits(1),
            aM = rM.readBits(1);
          let PM;
          if (rM.skipBits(1), jM && rM.skipBits(8), aM) {
            const MM = iM();
            if (null === MM) return;
            PM = MM
          } else PM = Math.floor(rM.getBitsLeft() / 8);
          (0, SM.J)(rM.pos % 8 === 0), yield {
            type: OM,
            data: MM.subarray(rM.pos / 8, rM.pos / 8 + PM)
          }, rM.skipBits(8 * PM)
        }
      },
      xM = MM => {
        for (const {
            type: rM,
            data: iM
          }
          of AM(MM)) {
          if (1 !== rM) continue;
          const MM = new zM.d(iM),
            OM = MM.readBits(3),
            SM = (MM.readBits(1), MM.readBits(1));
          let jM = 0,
            aM = 0,
            PM = 0;
          if (SM) jM = MM.readBits(5);
          else {
            let rM = 0;
            if (MM.readBits(1)) {
              MM.skipBits(32), MM.skipBits(32);
              if (MM.readBits(1)) {
                let rM = 0;
                for (; rM < 32 && !MM.readBits(1);) rM++;
                rM < 32 && MM.skipBits(rM)
              }
              rM = MM.readBits(1), rM && (PM = MM.readBits(5), MM.skipBits(32), MM.skipBits(5), MM.skipBits(5))
            }
            const iM = MM.readBits(1),
              OM = MM.readBits(5);
            for (let SM = 0; SM <= OM; SM++) {
              MM.skipBits(12);
              const OM = MM.readBits(5);
              if (0 === SM && (jM = OM), OM > 7) {
                const rM = MM.readBits(1);
                0 === SM && (aM = rM)
              }
              if (rM) {
                if (MM.readBits(1)) {
                  const rM = PM + 1;
                  MM.skipBits(rM), MM.skipBits(rM), MM.skipBits(1)
                }
              }
              if (iM) {
                MM.readBits(1) && MM.skipBits(4)
              }
            }
          }
          const nM = MM.readBits(4),
            QM = MM.readBits(4),
            LM = nM + 1;
          MM.skipBits(LM);
          const mM = QM + 1;
          MM.skipBits(mM);
          let HM = 0;
          if (HM = SM ? 0 : MM.readBits(1), HM && (MM.skipBits(4), MM.skipBits(3)), MM.skipBits(1), MM.skipBits(1), MM.skipBits(1), !SM) {
            MM.skipBits(1), MM.skipBits(1), MM.skipBits(1), MM.skipBits(1);
            const rM = MM.readBits(1);
            rM && (MM.skipBits(1), MM.skipBits(1));
            let iM = 0;
            if (iM = MM.readBits(1) ? 2 : MM.readBits(1), iM > 0) {
              MM.readBits(1) || MM.skipBits(1)
            }
            rM && MM.skipBits(3)
          }
          MM.skipBits(1), MM.skipBits(1), MM.skipBits(1);
          const hM = MM.readBits(1);
          let JM = 8;
          if (2 === OM && hM) {
            JM = MM.readBits(1) ? 12 : 10
          } else OM <= 2 && (JM = hM ? 10 : 8);
          let dM = 0;
          1 !== OM && (dM = MM.readBits(1));
          let yM = 2,
            lM = 2,
            EM = 2;
          MM.readBits(1) && (yM = MM.readBits(8), lM = MM.readBits(8), EM = MM.readBits(8));
          let UM = 0,
            GM = 1,
            CM = 1,
            eM = 0;
          return dM ? UM = MM.readBits(1) : 1 === yM && 13 === lM && 0 === EM ? (UM = 1, GM = 0, CM = 0) : (UM = MM.readBits(1), 0 === OM ? (GM = 1, CM = 1) : 1 === OM ? (GM = 0, CM = 0) : 12 === JM ? (GM = MM.readBits(1), CM = GM ? MM.readBits(1) : 0) : (GM = 1, CM = 0), GM && CM && (eM = MM.readBits(2))), {
            profile: OM,
            level: jM,
            tier: aM,
            bitDepth: JM,
            monochrome: dM,
            chromaSubsamplingX: GM,
            chromaSubsamplingY: CM,
            chromaSamplePosition: eM,
            videoFullRangeFlag: UM,
            colourPrimaries: yM,
            transferCharacteristics: lM,
            matrixCoefficients: EM
          }
        }
        return null
      },
      vM = MM => 2 !== MM.colourPrimaries || 2 !== MM.transferCharacteristics || 2 !== MM.matrixCoefficients,
      FM = MM => {
        const rM = (0, SM.nd)(MM),
          iM = rM.getUint8(9),
          OM = rM.getUint16(10, !0),
          jM = rM.getUint32(12, !0),
          aM = rM.getInt16(16, !0),
          PM = rM.getUint8(18);
        let nM = null;
        return PM && (nM = MM.subarray(19, 21 + iM)), {
          outputChannelCount: iM,
          preSkip: OM,
          inputSampleRate: jM,
          outputGain: aM,
          channelMappingFamily: PM,
          channelMappingTable: nM
        }
      },
      BM = [480, 960, 1920, 2880, 480, 960, 1920, 2880, 480, 960, 1920, 2880, 480, 960, 480, 960, 120, 240, 480, 960, 120, 240, 480, 960, 120, 240, 480, 960, 120, 240, 480, 960],
      XM = MM => {
        const rM = MM[0] >> 3,
          iM = 3 & MM[0];
        let OM;
        return OM = 0 === iM ? 1 : 1 === iM || 2 === iM ? 2 : 63 & MM[1], {
          durationInSamples: BM[rM] * OM
        }
      },
      IM = MM => {
        if (MM.length < 7) throw new Error("Setup header is too short.");
        if (5 !== MM[0]) throw new Error("Wrong packet type in Setup header.");
        if ("vorbis" !== String.fromCharCode(...MM.slice(1, 7))) throw new Error("Invalid packet signature in Setup header.");
        const rM = MM.length,
          iM = new Uint8Array(rM);
        for (let zM = 0; zM < rM; zM++) iM[zM] = MM[rM - 1 - zM];
        const OM = new zM.d(iM);
        let SM = 0;
        for (; OM.getBitsLeft() > 97;)
          if (1 === OM.readBits(1)) {
            SM = OM.pos;
            break
          } if (0 === SM) throw new Error("Invalid Setup header: framing bit not found.");
        let jM = 0,
          aM = !1,
          PM = 0;
        for (; OM.getBitsLeft() >= 97;) {
          const MM = OM.pos,
            rM = OM.readBits(8),
            iM = OM.readBits(16),
            SM = OM.readBits(16);
          if (rM > 63 || 0 !== iM || 0 !== SM) {
            OM.pos = MM;
            break
          }
          if (OM.skipBits(1), jM++, jM > 64) break;
          OM.clone().readBits(6) + 1 === jM && (aM = !0, PM = jM)
        }
        if (!aM) throw new Error("Invalid Setup header: mode header not found.");
        if (PM > 63) throw new Error(`Unsupported mode count: ${PM}.`);
        const nM = PM;
        OM.pos = 0, OM.skipBits(SM);
        const QM = Array(nM).fill(0);
        for (let zM = nM - 1; zM >= 0; zM--) OM.skipBits(40), QM[zM] = OM.readBits(1);
        return {
          modeBlockflags: QM
        }
      },
      KM = (MM, rM, iM) => {
        switch (MM) {
          case "avc":
            for (const MM of ((MM, rM) => {
                if (rM.description) {
                  const iM = 3 & (0, SM.od)(rM.description)[4];
                  return HM(MM, iM + 1)
                }
                return mM(MM)
              })(iM, rM)) {
              const rM = iM[MM.offset],
                OM = hM(rM);
              if (OM >= nM.NON_IDR_SLICE && OM <= nM.SLICE_DPC) return "delta";
              if (OM === nM.IDR) return "key";
              if (OM === nM.SEI && !(0, SM.yb)()) {
                const rM = iM.subarray(MM.offset, MM.offset + MM.length),
                  OM = JM(rM);
                let jM = 1;
                do {
                  let MM = 0;
                  for (;;) {
                    const rM = OM[jM++];
                    if (void 0 === rM) break;
                    if (MM += rM, rM < 255) break
                  }
                  let rM = 0;
                  for (;;) {
                    const MM = OM[jM++];
                    if (void 0 === MM) break;
                    if (rM += MM, MM < 255) break
                  }
                  if (MM === 6) {
                    const MM = new zM.d(OM);
                    MM.pos = 8 * jM;
                    const rM = (0, SM.Ac)(MM),
                      iM = MM.readBits(1);
                    if (0 === rM && 1 === iM) return "key"
                  }
                  jM += rM
                } while (jM < OM.length - 1)
              }
            }
            return "delta";
          case "hevc":
            for (const MM of wM(iM, rM)) {
              const rM = tM(iM[MM.offset]);
              if (rM < QM.BLA_W_LP) return "delta";
              if (rM <= QM.RSV_IRAP_VCL23) return "key"
            }
            return "delta";
          case "vp8":
            return 0 === (1 & iM[0]) ? "key" : "delta";
          case "vp9": {
            const MM = new zM.d(iM);
            if (2 !== MM.readBits(2)) return null;
            const rM = MM.readBits(1);
            3 === (MM.readBits(1) << 1) + rM && MM.skipBits(1);
            if (MM.readBits(1)) return null;
            return 0 === MM.readBits(1) ? "key" : "delta"
          }
          case "av1": {
            let MM = !1;
            for (const {
                type: rM,
                data: OM
              }
              of AM(iM))
              if (1 === rM) {
                const rM = new zM.d(OM);
                rM.skipBits(4), MM = !!rM.readBits(1)
              } else if (3 === rM || 6 === rM || 7 === rM) {
              if (MM) return "key";
              const rM = new zM.d(OM);
              if (rM.readBits(1)) return null;
              return 0 === rM.readBits(2) ? "key" : "delta"
            }
            return null
          }
          case "prores":
            return "key";
          default:
            (0, SM.G)(MM), (0, SM.J)(!1)
        }
      };
    var qM;
    ! function(MM) {
      MM[MM.STREAMINFO = 0] = "STREAMINFO", MM[MM.VORBIS_COMMENT = 4] = "VORBIS_COMMENT", MM[MM.PICTURE = 6] = "PICTURE"
    }(qM || (qM = {}));
    const TM = (MM, rM, iM) => {
        const OM = [MM],
          jM = SM.id.encode(LM.d);
        let aM = new Uint8Array(4 + jM.length),
          PM = new DataView(aM.buffer);
        PM.setUint32(0, jM.length, !0), aM.set(jM, 4), OM.push(aM);
        const nM = [],
          QM = (MM, rM) => {
            const iM = `${MM}=${rM}`,
              jM = SM.id.encode(iM);
            aM = new Uint8Array(4 + jM.length), PM = new DataView(aM.buffer), PM.setUint32(0, jM.length, !0), aM.set(jM, 4), OM.push(aM), nM.push(MM)
          };
        for (const {
            key: LM,
            value: JM
          }
          of(0, SM._b)(rM)) switch (LM) {
          case "title":
            QM("TITLE", JM);
            break;
          case "description":
            QM("DESCRIPTION", JM);
            break;
          case "artist":
            QM("ARTIST", JM);
            break;
          case "album":
            QM("ALBUM", JM);
            break;
          case "albumArtist":
            QM("ALBUMARTIST", JM);
            break;
          case "genre":
            QM("GENRE", JM);
            break;
          case "date":
            QM("DATE", JM.toISOString().slice(0, 10));
            break;
          case "comment":
            QM("COMMENT", JM);
            break;
          case "lyrics":
            QM("LYRICS", JM);
            break;
          case "trackNumber":
            QM("TRACKNUMBER", JM.toString());
            break;
          case "tracksTotal":
            QM("TRACKTOTAL", JM.toString());
            break;
          case "discNumber":
            QM("DISCNUMBER", JM.toString());
            break;
          case "discsTotal":
            QM("DISCTOTAL", JM.toString());
            break;
          case "beatsPerMinute":
            QM("BPM", JM.toString());
            break;
          case "images":
            if (!iM) break;
            for (const MM of JM) {
              const rM = "coverFront" === MM.kind ? 3 : "coverBack" === MM.kind ? 4 : 0,
                iM = new Uint8Array(MM.mimeType.length);
              for (let SM = 0; SM < MM.mimeType.length; SM++) iM[SM] = MM.mimeType.charCodeAt(SM);
              const OM = SM.id.encode(MM.description ?? ""),
                jM = new Uint8Array(8 + iM.length + 4 + OM.length + 16 + 4 + MM.data.length),
                aM = (0, SM.nd)(jM);
              aM.setUint32(0, rM, !1), aM.setUint32(4, iM.length, !1), jM.set(iM, 8), aM.setUint32(8 + iM.length, OM.length, !1), jM.set(OM, 12 + iM.length), aM.setUint32(28 + iM.length + OM.length, MM.data.length, !1), jM.set(MM.data, 32 + iM.length + OM.length);
              QM("METADATA_BLOCK_PICTURE", (0, SM.P)(jM))
            }
            break;
          case "raw":
            break;
          default:
            (0, SM.G)(LM)
        }
        if (rM.raw)
          for (const SM in rM.raw) {
            const MM = rM.raw[SM] ?? rM.raw[SM.toLowerCase()];
            if ("vendor" !== SM && null != MM && !nM.includes(SM))
              if ("string" === typeof MM) QM(SM, MM);
              else if (Array.isArray(MM)) {
              if (MM.every((MM => "string" === typeof MM)))
                for (const rM of MM) QM(SM, rM)
            }
          }
        const zM = new Uint8Array(4);
        (0, SM.nd)(zM).setUint32(0, nM.length, !0), OM.splice(2, 0, zM);
        const mM = OM.reduce(((MM, rM) => MM + rM.length), 0),
          HM = new Uint8Array(mM);
        let hM = 0;
        for (const SM of OM) HM.set(SM, hM), hM += SM.length;
        return HM
      },
      VM = MM => {
        if (MM.length < 7) return null;
        if (11 !== MM[0] || 119 !== MM[1]) return null;
        const rM = new zM.d(MM);
        rM.skipBits(16), rM.skipBits(16);
        const iM = rM.readBits(2);
        if (3 === iM) return null;
        const OM = rM.readBits(6),
          SM = rM.readBits(5);
        if (SM > 8) return null;
        const jM = rM.readBits(3),
          aM = rM.readBits(3);
        0 !== (1 & aM) && 1 !== aM && rM.skipBits(2), 0 !== (4 & aM) && rM.skipBits(2), 2 === aM && rM.skipBits(2);
        return {
          fscod: iM,
          bsid: SM,
          bsmod: jM,
          acmod: aM,
          lfeon: rM.readBits(1),
          bitRateCode: Math.floor(OM / 2)
        }
      },
      cM = new Uint8Array([5, 4, 65, 67, 45, 51]),
      Mr = new Uint8Array([5, 4, 69, 65, 67, 51]),
      rr = [1, 2, 3, 6],
      ir = MM => {
        if (MM.length < 6) return null;
        if (11 !== MM[0] || 119 !== MM[1]) return null;
        const rM = new zM.d(MM);
        rM.skipBits(16);
        const iM = rM.readBits(2);
        if (rM.skipBits(3), 0 !== iM && 2 !== iM) return null;
        const OM = rM.readBits(11),
          SM = rM.readBits(2);
        let jM, nM = 0;
        3 === SM ? (nM = rM.readBits(2), jM = 3) : jM = rM.readBits(2);
        const QM = rM.readBits(3),
          LM = rM.readBits(1),
          mM = rM.readBits(5);
        if (mM < 11 || mM > 16) return null;
        const HM = rr[jM];
        let hM;
        hM = SM < 3 ? aM[SM] / 1e3 : PM[nM] / 1e3;
        return {
          dataRate: Math.round((OM + 1) * hM / (16 * HM)),
          substreams: [{
            fscod: SM,
            fscod2: nM,
            bsid: mM,
            bsmod: 0,
            acmod: QM,
            lfeon: LM,
            numDepSub: 0,
            chanLoc: 0
          }]
        }
      },
      Or = [0, 8e3, 16e3, 32e3, 0, 0, 11025, 22050, 44100, 0, 0, 12e3, 24e3, 48e3, 96e3, 192e3],
      Sr = [32e3, 56e3, 64e3, 96e3, 112e3, 128e3, 192e3, 224e3, 256e3, 32e4, 384e3, 448e3, 512e3, 576e3, 64e4, 768e3, 96e4, 1024e3, 1152e3, 128e4, 1344e3, 1408e3, 1411200, 1472e3, 1536e3, 192e4, 2048e3, 3072e3, 384e4, 0, 0, 0],
      jr = [16, 16, 20, 20, 0, 24, 24, 0],
      ar = [1, 2, 2, 2, 2, 3, 3, 4, 4, 5, 6, 6, 6, 7, 8, 8],
      Pr = [1, 2, 2, 2, 2, 3, 18, 19, 6, 7, 518, 323, 83, 519, 582, 535],
      nr = [32e3, 44100, 48e3, 0],
      Qr = [8e3, 16e3, 32e3, 64e3, 128e3, 22050, 44100, 88200, 176400, 352800, 12e3, 24e3, 48e3, 96e3, 192e3, 384e3],
      zr = [512, 1024, 2048, 4096],
      Lr = MM => {
        const rM = mr(MM),
          iM = (0, SM.nd)(MM);
        let OM = rM ? 4 * Math.ceil(rM.frameSize / 4) : 0,
          jM = null;
        for (; OM + 4 <= MM.length && 1683496997 === iM.getUint32(OM);) {
          const rM = Hr(MM.subarray(OM));
          if (!rM) break;
          jM ??= rM, OM += rM.frameSize
        }
        if (rM) return {
          frameSize: jM ? OM : rM.frameSize,
          sampleRate: rM.sampleRate,
          numberOfChannels: rM.numberOfChannels,
          sampleCount: rM.sampleCount,
          channelLayout: rM.channelLayout,
          pcmResolution: rM.pcmResolution,
          bitRate: rM.bitRate,
          core: rM,
          hasExtensions: null !== jM
        };
        if (!jM?.asset) return null;
        const {
          asset: aM
        } = jM;
        return {
          frameSize: OM,
          sampleRate: aM.sampleRate,
          numberOfChannels: aM.numberOfChannels,
          sampleCount: aM.sampleCount,
          channelLayout: aM.channelLayout,
          pcmResolution: aM.pcmResolution,
          bitRate: 0,
          core: null,
          hasExtensions: !0
        }
      },
      mr = MM => {
        if (MM.length < 18) return null;
        if (127 !== MM[0] || 254 !== MM[1] || 128 !== MM[2] || 1 !== MM[3]) return null;
        const rM = new zM.d(MM);
        if (rM.skipBits(32), rM.skipBits(1), 31 !== rM.readBits(5)) return null;
        const iM = rM.readBits(1),
          OM = rM.readBits(7) + 1;
        if (OM % 8 !== 0) return null;
        const SM = rM.readBits(14) + 1;
        if (SM < 96) return null;
        const jM = rM.readBits(6);
        if (jM >= ar.length) return null;
        const aM = Or[rM.readBits(4)];
        if (0 === aM) return null;
        const PM = Sr[rM.readBits(5)];
        if (0 !== rM.readBits(1)) return null;
        rM.skipBits(4), rM.skipBits(5);
        const nM = rM.readBits(2);
        if (3 === nM) return null;
        rM.skipBits(1), iM && rM.skipBits(16), rM.skipBits(7);
        const QM = jr[rM.readBits(3)];
        if (0 === QM) return null;
        const LM = 0 !== nM;
        return {
          frameSize: SM,
          sampleRate: aM,
          numberOfChannels: ar[jM] + (LM ? 1 : 0),
          sampleCount: 32 * OM,
          channelLayout: Pr[jM] | (LM ? 8 : 0),
          amode: jM,
          lfePresent: LM,
          bitRate: PM,
          pcmResolution: QM
        }
      },
      Hr = MM => {
        if (MM.length < 10) return null;
        if (100 !== MM[0] || 88 !== MM[1] || 32 !== MM[2] || 37 !== MM[3]) return null;
        const rM = new zM.d(MM);
        rM.skipBits(32), rM.skipBits(8);
        const iM = rM.readBits(2),
          OM = rM.readBits(1),
          jM = 8 + 4 * OM,
          aM = 16 + 4 * OM;
        rM.skipBits(jM);
        const PM = rM.readBits(aM) + 1,
          nM = {
            frameSize: PM,
            asset: null
          };
        if (!rM.readBits(1)) return nM;
        const QM = nr[rM.readBits(2)],
          LM = 512 * (rM.readBits(3) + 1);
        rM.readBits(1) && rM.skipBits(36);
        const mM = rM.readBits(3) + 1,
          HM = rM.readBits(3) + 1,
          hM = [];
        for (let SM = 0; SM < mM; SM++) hM.push(rM.readBits(iM + 1));
        for (const zM of hM) rM.skipBits(8 * (0, SM.wc)(zM));
        if (rM.readBits(1)) {
          rM.skipBits(2);
          const MM = rM.readBits(2) + 1 << 2,
            iM = rM.readBits(2) + 1;
          rM.skipBits(iM * MM)
        }
        for (let SM = 0; SM < HM; SM++) rM.skipBits(aM);
        rM.skipBits(9), rM.skipBits(3), rM.readBits(1) && rM.skipBits(4), rM.readBits(1) && rM.skipBits(24), rM.readBits(1) && rM.skipBits(8 * (rM.readBits(10) + 1));
        const JM = rM.readBits(5) + 1,
          dM = Qr[rM.readBits(4)],
          yM = rM.readBits(8) + 1;
        let lM = 0;
        if (rM.readBits(1) && (yM > 2 && rM.skipBits(1), yM > 6 && rM.skipBits(1), rM.readBits(1))) {
          const MM = rM.readBits(2) + 1 << 2;
          lM = rM.readBits(MM)
        }
        return 0 === QM || rM.getBitsLeft() < 0 ? nM : {
          frameSize: PM,
          asset: {
            sampleRate: dM,
            numberOfChannels: yM,
            sampleCount: Math.round(LM * dM / QM),
            channelLayout: lM,
            pcmResolution: JM
          }
        }
      },
      hr = MM => {
        const rM = new Uint8Array(20),
          iM = (0, SM.nd)(rM);
        iM.setUint32(0, MM.sampleRate), iM.setUint32(4, MM.bitRate), iM.setUint32(8, MM.bitRate), rM[12] = MM.pcmResolution;
        const OM = MM.core && !MM.hasExtensions ? 1 : 0,
          jM = new zM.d(rM);
        return jM.seekToByte(13), jM.writeBits(2, Math.max(zr.indexOf(MM.sampleCount), 0)), jM.writeBits(5, OM), jM.writeBits(1, MM.core?.lfePresent ? 1 : 0), jM.writeBits(6, MM.core?.amode ?? 0), jM.writeBits(14, MM.core ? MM.core.frameSize - 1 : 0), jM.writeBits(1, 0), jM.writeBits(3, 0), jM.writeBits(16, MM.channelLayout), jM.writeBits(1, 0), jM.writeBits(1, 0), jM.writeBits(1, 0), jM.writeBits(5, 0), rM
      }
  },
  34713: (MM, rM, iM) => {
    iM.d(rM, {
      A: () => CM,
      D: () => GM,
      G: () => UM,
      I: () => RM,
      L: () => uM,
      M: () => gM,
      P: () => tM,
      R: () => fM,
      U: () => YM,
      Y: () => ZM,
      b: () => nM,
      c: () => zM,
      e: () => PM,
      i: () => bM,
      m: () => aM,
      p: () => QM,
      q: () => jM,
      u: () => mM,
      w: () => eM,
      y: () => EM
    });
    var OM = iM(34720),
      SM = iM(34685);
    const jM = ["avc", "hevc", "vp9", "av1", "vp8", "prores"],
      aM = ["pcm-s16", "pcm-s16be", "pcm-s24", "pcm-s24be", "pcm-s32", "pcm-s32be", "pcm-f32", "pcm-f32be", "pcm-f64", "pcm-f64be", "pcm-u8", "pcm-s8", "ulaw", "alaw"],
      PM = ["aac", "opus", "mp3", "vorbis", "flac", "ac3", "eac3", "dts"],
      nM = [...PM, ...aM],
      QM = ["webvtt"],
      zM = [{
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
      LM = [{
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
      mM = [{
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
      HM = [{
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
      hM = ".01.01.01.01.00",
      JM = ".0.110.01.01.01.0",
      dM = ["ap4x", "ap4h", "apch", "apcn", "apcs", "apco"],
      yM = ["dtsc", "dtsh", "dtsl", "dtse"],
      lM = [{
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
      EM = (MM, rM, iM, OM, jM) => {
        if ("avc" === MM) {
          const MM = 100,
            jM = Math.ceil(rM / 16) * Math.ceil(iM / 16),
            aM = zM.find((MM => jM <= MM.maxMacroblocks && OM <= MM.maxBitrate)) ?? (0, SM.cc)(zM),
            PM = aM ? aM.level : 0;
          return `avc1.${MM.toString(16).padStart(2,"0")}${"00"}${PM.toString(16).padStart(2,"0")}`
        }
        if ("hevc" === MM) {
          const MM = "",
            jM = 1,
            aM = "6",
            PM = rM * iM,
            nM = LM.find((MM => PM <= MM.maxPictureSize && OM <= MM.maxBitrate)) ?? (0, SM.cc)(LM),
            QM = "B0";
          return `hev1.${MM}${jM}.${aM}.${nM.tier}${nM.level}.${QM}`
        }
        if ("vp8" === MM) return "vp8";
        if ("vp9" === MM) {
          const MM = rM * iM,
            jM = "08";
          return `vp09.${"00"}.${(mM.find((rM=>MM<=rM.maxPictureSize&&OM<=rM.maxBitrate))??(0,SM.cc)(mM)).level.toString().padStart(2,"0")}.${jM}`
        }
        if ("av1" === MM) {
          const MM = 0,
            jM = rM * iM,
            aM = HM.find((MM => jM <= MM.maxPictureSize && OM <= MM.maxBitrate)) ?? (0, SM.cc)(HM),
            PM = "08";
          return `av01.${MM}.${aM.level.toString().padStart(2,"0")}${aM.tier}.${PM}`
        }
        if ("prores" === MM) {
          const MM = 2073600,
            SM = Math.pow(rM * iM / MM, .95),
            aM = lM.filter((MM => MM.alpha === jM));
          let PM = aM[0].fourCc,
            nM = 1 / 0;
          for (const {
              fourCc: rM,
              bitrate: iM
            }
            of aM) {
            const MM = Math.abs(iM * SM - OM);
            MM < nM && (nM = MM, PM = rM)
          }
          return PM
        }
        throw (0, SM.G)(MM), new TypeError(`Unhandled codec '${String(MM)}'.`)
      },
      UM = MM => {
        const rM = MM.split(".");
        return [1, 1, Number(rM[1]), 2, 1, Number(rM[2]), 3, 1, Number(rM[3]), 4, 1, rM[4] ? Number(rM[4]) : 1]
      },
      GM = MM => {
        const rM = MM.split("."),
          iM = Number(rM[1]),
          OM = rM[2],
          SM = (iM << 5) + Number(OM.slice(0, -1)),
          jM = "H" === OM.slice(-1) ? 1 : 0,
          aM = Number(rM[3]);
        return [129, SM, (jM << 7) + ((8 === aM ? 0 : 1) << 6) + ((12 === aM ? 1 : 0) << 5) + ((rM[4] ? Number(rM[4]) : 0) << 4) + ((rM[5] ? Number(rM[5][0]) : 1) << 3) + ((rM[5] ? Number(rM[5][1]) : 1) << 2) + (rM[5] ? Number(rM[5][2]) : 0), 0]
      },
      CM = MM => {
        const {
          codec: rM,
          codecDescription: iM,
          colorSpace: jM,
          avcCodecInfo: aM,
          hevcCodecInfo: PM,
          vp9CodecInfo: nM,
          av1CodecInfo: QM,
          proresFormat: zM
        } = MM;
        if ("avc" === rM) {
          if ((0, SM.J)(null !== MM.avcType), aM) {
            const rM = new Uint8Array([aM.avcProfileIndication, aM.profileCompatibility, aM.avcLevelIndication]);
            return `avc${MM.avcType}.${(0,SM.S)(rM)}`
          }
          if (!iM || iM.byteLength < 4) throw new TypeError("AVC decoder description is not provided or is not at least 4 bytes long.");
          return `avc${MM.avcType}.${(0,SM.S)(iM.subarray(1,4))}`
        }
        if ("hevc" === rM) {
          let MM, rM, OM, jM, aM, nM;
          if (PM) MM = PM.generalProfileSpace, rM = PM.generalProfileIdc, OM = (0, SM.Ec)(PM.generalProfileCompatibilityFlags), jM = PM.generalTierFlag, aM = PM.generalLevelIdc, nM = [...PM.generalConstraintIndicatorFlags];
          else {
            if (!iM || iM.byteLength < 23) throw new TypeError("HEVC decoder description is not provided or is not at least 23 bytes long.");
            const PM = (0, SM.nd)(iM),
              QM = PM.getUint8(1);
            MM = QM >> 6 & 3, rM = 31 & QM, OM = (0, SM.Ec)(PM.getUint32(2)), jM = QM >> 5 & 1, aM = PM.getUint8(12), nM = [];
            for (let MM = 0; MM < 6; MM++) nM.push(PM.getUint8(6 + MM))
          }
          let QM = "hev1.";
          for (QM += ["", "A", "B", "C"][MM] + rM, QM += ".", QM += OM.toString(16).toUpperCase(), QM += ".", QM += 0 === jM ? "L" : "H", QM += aM; nM.length > 0 && 0 === nM[nM.length - 1];) nM.pop();
          return nM.length > 0 && (QM += ".", QM += nM.map((MM => MM.toString(16).toUpperCase())).join(".")), QM
        }
        if ("vp8" === rM) return "vp8";
        if ("vp9" === rM) {
          if (!nM) {
            const rM = MM.width * MM.height;
            let iM = (0, SM.cc)(mM).level;
            for (const MM of mM)
              if (rM <= MM.maxPictureSize) {
                iM = MM.level;
                break
              } return `vp09.00.${iM.toString().padStart(2,"0")}.08`
          }
          let rM = `vp09.${nM.profile.toString().padStart(2,"0")}.${nM.level.toString().padStart(2,"0")}.${nM.bitDepth.toString().padStart(2,"0")}.${nM.chromaSubsampling.toString().padStart(2,"0")}`;
          return rM += `.${nM.colourPrimaries.toString().padStart(2,"0")}.${nM.transferCharacteristics.toString().padStart(2,"0")}.${nM.matrixCoefficients.toString().padStart(2,"0")}.${nM.videoFullRangeFlag.toString().padStart(2,"0")}`, rM.endsWith(hM) && (rM = rM.slice(0, -15)), rM
        }
        if ("av1" === rM) {
          if (!QM) {
            const rM = MM.width * MM.height;
            let iM = (0, SM.cc)(mM).level;
            for (const MM of mM)
              if (rM <= MM.maxPictureSize) {
                iM = MM.level;
                break
              } return `av01.0.${iM.toString().padStart(2,"0")}M.08`
          }
          const rM = QM.profile,
            iM = QM.level.toString().padStart(2, "0"),
            aM = QM.tier ? "H" : "M",
            PM = QM.bitDepth.toString().padStart(2, "0"),
            nM = QM.monochrome ? "1" : "0",
            zM = 100 * QM.chromaSubsamplingX + 10 * QM.chromaSubsamplingY + 1 * (QM.chromaSubsamplingX && QM.chromaSubsamplingY ? QM.chromaSamplePosition : 0);
          let LM, HM, hM, dM;
          (0, OM.n)(QM) ? (LM = QM.colourPrimaries, HM = QM.transferCharacteristics, hM = QM.matrixCoefficients, dM = QM.videoFullRangeFlag) : (LM = jM?.primaries ? SM.c[jM.primaries] : 1, HM = jM?.transfer ? SM.t[jM.transfer] : 1, hM = jM?.matrix ? SM.k[jM.matrix] : 1, dM = jM?.fullRange ? 1 : 0);
          let yM = `av01.${rM}.${iM}${aM}.${PM}`;
          return yM += `.${nM}.${zM.toString().padStart(3,"0")}`, yM += `.${LM.toString().padStart(2,"0")}`, yM += `.${HM.toString().padStart(2,"0")}`, yM += `.${hM.toString().padStart(2,"0")}`, yM += `.${dM}`, yM.endsWith(JM) && (yM = yM.slice(0, -17)), yM
        }
        if ("prores" === rM) return zM ?? "apch";
        throw null !== rM && (0, SM.G)(rM), new TypeError(`Unhandled codec '${rM}'.`)
      },
      eM = (MM, rM, iM) => {
        if ("aac" === MM) return rM >= 2 && iM <= 24e3 ? "mp4a.40.29" : iM <= 24e3 ? "mp4a.40.5" : "mp4a.40.2";
        if ("mp3" === MM) return "mp3";
        if ("opus" === MM) return "opus";
        if ("vorbis" === MM) return "vorbis";
        if ("flac" === MM) return "flac";
        if ("ac3" === MM) return "ac-3";
        if ("eac3" === MM) return "ec-3";
        if ("dts" === MM) return "dtsc";
        if (aM.includes(MM)) return MM;
        throw new TypeError(`Unhandled codec '${MM}'.`)
      },
      bM = 48e3,
      wM = /^pcm-([usf])(\d+)(be)?$/,
      tM = MM => {
        if ((0, SM.J)(aM.includes(MM)), "ulaw" === MM) return {
          dataType: "ulaw",
          sampleSize: 1,
          littleEndian: !0,
          silentValue: 255
        };
        if ("alaw" === MM) return {
          dataType: "alaw",
          sampleSize: 1,
          littleEndian: !0,
          silentValue: 213
        };
        const rM = wM.exec(MM);
        let iM;
        (0, SM.J)(rM), iM = "u" === rM[1] ? "unsigned" : "s" === rM[1] ? "signed" : "float";
        return {
          dataType: iM,
          sampleSize: Number(rM[2]) / 8,
          littleEndian: "be" !== rM[3],
          silentValue: "pcm-u8" === MM ? 128 : 0
        }
      },
      gM = MM => MM.startsWith("avc1") || MM.startsWith("avc3") ? "avc" : MM.startsWith("hev1") || MM.startsWith("hvc1") ? "hevc" : "vp8" === MM ? "vp8" : MM.startsWith("vp09") ? "vp9" : MM.startsWith("av01") ? "av1" : dM.includes(MM) ? "prores" : "mp3" === MM || "mp4a.69" === MM || "mp4a.6B" === MM || "mp4a.6b" === MM || "mp4a.40.34" === MM ? "mp3" : MM.startsWith("mp4a.40.") || "mp4a.67" === MM ? "aac" : "opus" === MM || "Opus" === MM ? "opus" : "vorbis" === MM ? "vorbis" : "flac" === MM ? "flac" : "ac-3" === MM || "ac3" === MM ? "ac3" : "ec-3" === MM || "eac3" === MM ? "eac3" : yM.includes(MM) ? "dts" : "ulaw" === MM ? "ulaw" : "alaw" === MM ? "alaw" : wM.test(MM) ? MM : "webvtt" === MM ? "webvtt" : null,
      uM = MM => "avc" === MM ? {
        avc: {
          format: "avc"
        }
      } : "hevc" === MM ? {
        hevc: {
          format: "hevc"
        }
      } : {},
      RM = MM => "aac" === MM ? {
        aac: {
          format: "aac"
        }
      } : "opus" === MM ? {
        opus: {
          format: "opus"
        }
      } : {},
      pM = ["avc1", "avc3", "hev1", "hvc1", "vp8", "vp09", "av01", ...dM],
      WM = /^(avc1|avc3)\.[0-9a-fA-F]{6}$/,
      sM = /^(hev1|hvc1)\.(?:[ABC]?\d+)\.[0-9a-fA-F]{1,8}\.[LH]\d+(?:\.[0-9a-fA-F]{1,2}){0,6}$/,
      DM = /^vp09(?:\.\d{2}){3}(?:(?:\.\d{2}){5})?$/,
      kM = /^av01\.\d\.\d{2}[MH]\.\d{2}(?:\.\d\.\d{3}\.\d{2}\.\d{2}\.\d{2}\.\d)?$/,
      ZM = (MM, rM) => {
        if (!MM) throw new TypeError("Video chunk metadata must be provided.");
        if ("object" !== typeof MM) throw new TypeError("Video chunk metadata must be an object.");
        if (!MM.decoderConfig) throw new TypeError("Video chunk metadata must include a decoder configuration.");
        if ("object" !== typeof MM.decoderConfig) throw new TypeError("Video chunk metadata decoder configuration must be an object.");
        if ("string" !== typeof MM.decoderConfig.codec) throw new TypeError("Video chunk metadata decoder configuration must specify a codec string.");
        if (!pM.some((rM => MM.decoderConfig.codec.startsWith(rM)))) throw new TypeError("Video chunk metadata decoder configuration codec string must be a valid video codec string as specified in the Mediabunny Codec Registry.");
        if (!Number.isInteger(MM.decoderConfig.codedWidth) || MM.decoderConfig.codedWidth <= 0) throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedWidth (positive integer).");
        if (!Number.isInteger(MM.decoderConfig.codedHeight) || MM.decoderConfig.codedHeight <= 0) throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedHeight (positive integer).");
        if (void 0 !== MM.decoderConfig.displayAspectWidth && (!Number.isInteger(MM.decoderConfig.displayAspectWidth) || MM.decoderConfig.displayAspectWidth <= 0)) throw new TypeError("Video chunk metadata decoder configuration displayAspectWidth, when defined, must be a positive integer.");
        if (void 0 !== MM.decoderConfig.displayAspectHeight && (!Number.isInteger(MM.decoderConfig.displayAspectHeight) || MM.decoderConfig.displayAspectHeight <= 0)) throw new TypeError("Video chunk metadata decoder configuration displayAspectHeight, when defined, must be a positive integer.");
        if (void 0 !== MM.decoderConfig.displayAspectWidth !== (void 0 !== MM.decoderConfig.displayAspectHeight)) throw new TypeError("Video chunk metadata decoder configuration must specify both displayAspectWidth and displayAspectHeight, or neither.");
        if (void 0 !== MM.decoderConfig.description && !(0, SM.vb)(MM.decoderConfig.description)) throw new TypeError("Video chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");
        if (void 0 !== MM.decoderConfig.colorSpace) {
          const {
            colorSpace: rM
          } = MM.decoderConfig;
          if ("object" !== typeof rM) throw new TypeError("Video chunk metadata decoder configuration colorSpace, when provided, must be an object.");
          const iM = Object.keys(SM.c);
          if (null != rM.primaries && !iM.includes(rM.primaries)) throw new TypeError(`Video chunk metadata decoder configuration colorSpace primaries, when defined, must be one of ${iM.join(", ")}.`);
          const OM = Object.keys(SM.t);
          if (null != rM.transfer && !OM.includes(rM.transfer)) throw new TypeError(`Video chunk metadata decoder configuration colorSpace transfer, when defined, must be one of ${OM.join(", ")}.`);
          const jM = Object.keys(SM.k);
          if (null != rM.matrix && !jM.includes(rM.matrix)) throw new TypeError(`Video chunk metadata decoder configuration colorSpace matrix, when defined, must be one of ${jM.join(", ")}.`);
          if (null != rM.fullRange && "boolean" !== typeof rM.fullRange) throw new TypeError("Video chunk metadata decoder configuration colorSpace fullRange, when defined, must be a boolean.")
        }
        if (MM.decoderConfig.codec.startsWith("avc1") || MM.decoderConfig.codec.startsWith("avc3")) {
          if (!WM.test(MM.decoderConfig.codec)) throw new TypeError("Video chunk metadata decoder configuration codec string for AVC must be a valid AVC codec string as specified in Section 3.4 of RFC 6381.")
        } else if (MM.decoderConfig.codec.startsWith("hev1") || MM.decoderConfig.codec.startsWith("hvc1")) {
          if (!sM.test(MM.decoderConfig.codec)) throw new TypeError("Video chunk metadata decoder configuration codec string for HEVC must be a valid HEVC codec string as specified in Section E.3 of ISO 14496-15.")
        } else if (MM.decoderConfig.codec.startsWith("vp8")) {
          if ("vp8" !== MM.decoderConfig.codec) throw new TypeError('Video chunk metadata decoder configuration codec string for VP8 must be "vp8".')
        } else if (MM.decoderConfig.codec.startsWith("vp09")) {
          if (!DM.test(MM.decoderConfig.codec)) throw new TypeError('Video chunk metadata decoder configuration codec string for VP9 must be a valid VP9 codec string as specified in Section "Codecs Parameter String" of https://www.webmproject.org/vp9/mp4/.')
        } else if (MM.decoderConfig.codec.startsWith("av01")) {
          if (!kM.test(MM.decoderConfig.codec)) throw new TypeError('Video chunk metadata decoder configuration codec string for AV1 must be a valid AV1 codec string as specified in Section "Codecs Parameter String" of https://aomediacodec.github.io/av1-isobmff/.')
        } else if (dM.some((rM => MM.decoderConfig.codec.startsWith(rM))) && !dM.some((rM => MM.decoderConfig.codec === rM))) throw new TypeError(`Video chunk metadata decoder configuration codec string for ProRes must be one of the valid ProRes four-character codes: ${dM.join(", ")}.`);
        if (null !== rM && gM(MM.decoderConfig.codec) !== rM) throw new TypeError(`Video chunk metadata decoder configuration codec string '${MM.decoderConfig.codec}' does not fit to the track codec '${rM}'.`)
      },
      oM = ["mp4a", "mp3", "opus", "vorbis", "flac", "ulaw", "alaw", "pcm", "ac-3", "ec-3", "dts"],
      fM = (MM, rM) => {
        if (!MM) throw new TypeError("Audio chunk metadata must be provided.");
        if ("object" !== typeof MM) throw new TypeError("Audio chunk metadata must be an object.");
        if (!MM.decoderConfig) throw new TypeError("Audio chunk metadata must include a decoder configuration.");
        if ("object" !== typeof MM.decoderConfig) throw new TypeError("Audio chunk metadata decoder configuration must be an object.");
        if ("string" !== typeof MM.decoderConfig.codec) throw new TypeError("Audio chunk metadata decoder configuration must specify a codec string.");
        if (!oM.some((rM => MM.decoderConfig.codec.startsWith(rM)))) throw new TypeError("Audio chunk metadata decoder configuration codec string must be a valid audio codec string as specified in the Mediabunny Codec Registry.");
        if (!Number.isInteger(MM.decoderConfig.sampleRate) || MM.decoderConfig.sampleRate <= 0) throw new TypeError("Audio chunk metadata decoder configuration must specify a valid sampleRate (positive integer).");
        if (!Number.isInteger(MM.decoderConfig.numberOfChannels) || MM.decoderConfig.numberOfChannels <= 0) throw new TypeError("Audio chunk metadata decoder configuration must specify a valid numberOfChannels (positive integer).");
        if (void 0 !== MM.decoderConfig.description && !(0, SM.vb)(MM.decoderConfig.description)) throw new TypeError("Audio chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");
        if (MM.decoderConfig.codec.startsWith("mp4a") && "mp4a.69" !== MM.decoderConfig.codec && "mp4a.6B" !== MM.decoderConfig.codec && "mp4a.6b" !== MM.decoderConfig.codec) {
          if (!["mp4a.40.2", "mp4a.40.02", "mp4a.40.5", "mp4a.40.05", "mp4a.40.29", "mp4a.67"].includes(MM.decoderConfig.codec)) throw new TypeError("Audio chunk metadata decoder configuration codec string for AAC must be a valid AAC codec string as specified in https://www.w3.org/TR/webcodecs-aac-codec-registration/.")
        } else if (MM.decoderConfig.codec.startsWith("mp3") || MM.decoderConfig.codec.startsWith("mp4a")) {
          if ("mp3" !== MM.decoderConfig.codec && "mp4a.69" !== MM.decoderConfig.codec && "mp4a.6B" !== MM.decoderConfig.codec && "mp4a.6b" !== MM.decoderConfig.codec) throw new TypeError('Audio chunk metadata decoder configuration codec string for MP3 must be "mp3", "mp4a.69" or "mp4a.6B".')
        } else if (MM.decoderConfig.codec.startsWith("opus")) {
          if ("opus" !== MM.decoderConfig.codec) throw new TypeError('Audio chunk metadata decoder configuration codec string for Opus must be "opus".');
          if (MM.decoderConfig.description && MM.decoderConfig.description.byteLength < 18) throw new TypeError("Audio chunk metadata decoder configuration description, when specified, is expected to be an Identification Header as specified in Section 5.1 of RFC 7845.")
        } else if (MM.decoderConfig.codec.startsWith("vorbis")) {
          if ("vorbis" !== MM.decoderConfig.codec) throw new TypeError('Audio chunk metadata decoder configuration codec string for Vorbis must be "vorbis".');
          if (!MM.decoderConfig.description) throw new TypeError("Audio chunk metadata decoder configuration for Vorbis must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-vorbis-codec-registration/.")
        } else if (MM.decoderConfig.codec.startsWith("flac")) {
          if ("flac" !== MM.decoderConfig.codec) throw new TypeError('Audio chunk metadata decoder configuration codec string for FLAC must be "flac".');
          const rM = 42;
          if (!MM.decoderConfig.description || MM.decoderConfig.description.byteLength < rM) throw new TypeError("Audio chunk metadata decoder configuration for FLAC must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-flac-codec-registration/.")
        } else if (MM.decoderConfig.codec.startsWith("ac-3") || MM.decoderConfig.codec.startsWith("ac3")) {
          if ("ac-3" !== MM.decoderConfig.codec) throw new TypeError('Audio chunk metadata decoder configuration codec string for AC-3 must be "ac-3".')
        } else if (MM.decoderConfig.codec.startsWith("ec-3") || MM.decoderConfig.codec.startsWith("eac3")) {
          if ("ec-3" !== MM.decoderConfig.codec) throw new TypeError('Audio chunk metadata decoder configuration codec string for EC-3 must be "ec-3".')
        } else if (MM.decoderConfig.codec.startsWith("dts")) {
          if (!yM.includes(MM.decoderConfig.codec)) throw new TypeError(`Audio chunk metadata decoder configuration codec string for DTS must be one of the following four-character codes: ${yM.join(", ")}.`)
        } else if ((MM.decoderConfig.codec.startsWith("pcm") || MM.decoderConfig.codec.startsWith("ulaw") || MM.decoderConfig.codec.startsWith("alaw")) && !aM.includes(MM.decoderConfig.codec)) throw new TypeError(`Audio chunk metadata decoder configuration codec string for PCM must be one of the supported PCM codecs (${aM.join(", ")}).`);
        if (null !== rM && gM(MM.decoderConfig.codec) !== rM) throw new TypeError(`Audio chunk metadata decoder configuration codec string '${MM.decoderConfig.codec}' does not fit to the track codec '${rM}'.`)
      },
      YM = MM => {
        if (!MM) throw new TypeError("Subtitle metadata must be provided.");
        if ("object" !== typeof MM) throw new TypeError("Subtitle metadata must be an object.");
        if (!MM.config) throw new TypeError("Subtitle metadata must include a config object.");
        if ("object" !== typeof MM.config) throw new TypeError("Subtitle metadata config must be an object.");
        if ("string" !== typeof MM.config.description) throw new TypeError("Subtitle metadata config description must be a string.")
      }
  },
  34765: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => mM,
      i: () => LM,
      l: () => yM,
      n: () => nM,
      r: () => lM,
      v: () => QM,
      x: () => aM
    });
    var OM = iM(34713),
      SM = iM(34685),
      jM = iM(34771);
    new Map, new Map;
    const aM = MM => {
        if (!MM || "object" !== typeof MM) throw new TypeError("Encoding config must be an object.");
        if (!OM.q.includes(MM.codec)) throw new TypeError(`Invalid video codec '${MM.codec}'. Must be one of: ${OM.q.join(", ")}.`);
        const rM = MM.bitrate;
        if (void 0 === MM.quality && void 0 === rM) throw new TypeError("config.quality must be provided.");
        if (void 0 !== MM.quality && void 0 !== rM) throw new TypeError("config.quality and config.bitrate cannot both be provided.");
        if (void 0 !== MM.quality && !(MM.quality instanceof mM)) throw new TypeError("config.quality, when provided, must be a Quality.");
        if (void 0 !== rM && !(rM instanceof mM) && (!Number.isInteger(rM) || rM <= 0)) throw new TypeError("config.bitrate, when provided, must be a positive integer or a quality.");
        if (void 0 !== MM.keyFrameInterval && (!Number.isFinite(MM.keyFrameInterval) || MM.keyFrameInterval < 0)) throw new TypeError("config.keyFrameInterval, when provided, must be a non-negative number.");
        if (void 0 !== MM.sizeChangeBehavior && !["deny", "passThrough", "fill", "contain", "cover"].includes(MM.sizeChangeBehavior)) throw new TypeError("config.sizeChangeBehavior, when provided, must be 'deny', 'passThrough', 'fill', 'contain' or 'cover'.");
        if (void 0 !== MM.transform) {
          if ("object" !== typeof MM.transform || !MM.transform) throw new TypeError("config.transform, when provided, must be an object.");
          if (void 0 !== MM.transform.width && (!Number.isInteger(MM.transform.width) || MM.transform.width <= 0)) throw new TypeError("config.transform.width, when provided, must be a positive integer.");
          if (void 0 !== MM.transform.height && (!Number.isInteger(MM.transform.height) || MM.transform.height <= 0)) throw new TypeError("config.transform.height, when provided, must be a positive integer.");
          if (void 0 !== MM.transform.fit && !["fill", "contain", "cover"].includes(MM.transform.fit)) throw new TypeError('config.transform.fit, when provided, must be one of "fill", "contain", or "cover".');
          if (void 0 !== MM.transform.width && void 0 !== MM.transform.height && void 0 === MM.transform.fit && !["fill", "contain", "cover"].includes(MM.sizeChangeBehavior)) throw new TypeError("When both config.transform.width and config.transform.height are provided, config.transform.fit must also be provided.");
          if (void 0 !== MM.transform.fit && ["fill", "contain", "cover"].includes(MM.sizeChangeBehavior) && MM.transform.fit !== MM.sizeChangeBehavior) throw new TypeError("config.transform.fit, when provided, cannot differ from config.sizeChangeBehavior when config.sizeChangeBehavior is 'fill', 'contain' or 'cover', as sizeChangeBehavior already determines the fitting algorithm.");
          if (void 0 !== MM.transform.rotate && ![0, 90, 180, 270].includes(MM.transform.rotate)) throw new TypeError("config.transform.rotate, when provided, must be 0, 90, 180 or 270.");
          if (void 0 !== MM.transform.flip && "boolean" !== typeof MM.transform.flip) throw new TypeError("config.transform.flip, when provided, must be a boolean.");
          if (void 0 !== MM.transform.crop && (0, jM.k)(MM.transform.crop, "config.transform."), void 0 !== MM.transform.process && "function" !== typeof MM.transform.process) throw new TypeError("config.transform.process, when provided, must be a function.");
          if (void 0 !== MM.transform.frameRate && (!Number.isFinite(MM.transform.frameRate) || MM.transform.frameRate <= 0)) throw new TypeError("config.transform.frameRate, when provided, must be a finite positive number.");
          if (void 0 !== MM.transform.force && "boolean" !== typeof MM.transform.force) throw new TypeError("config.transform.force, when provided, must be a boolean.")
        }
        if (void 0 !== MM.onEncodedPacket && "function" !== typeof MM.onEncodedPacket) throw new TypeError("config.onEncodedPacket, when provided, must be a function.");
        if (void 0 !== MM.onEncoderConfig && "function" !== typeof MM.onEncoderConfig) throw new TypeError("config.onEncoderConfig, when provided, must be a function.");
        if (void 0 !== MM.onEncodedSample && "function" !== typeof MM.onEncodedSample) throw new TypeError("config.onEncodedSample, when provided, must be a function.");
        PM(MM.codec, MM)
      },
      PM = (MM, rM) => {
        if (!rM || "object" !== typeof rM) throw new TypeError("Encoding options must be an object.");
        if (void 0 !== rM.alpha && !["discard", "keep"].includes(rM.alpha)) throw new TypeError("options.alpha, when provided, must be 'discard' or 'keep'.");
        const iM = rM.bitrateMode;
        if (void 0 !== iM && !["constant", "variable"].includes(iM)) throw new TypeError("bitrateMode, when provided, must be 'constant' or 'variable'.");
        if (void 0 !== rM.latencyMode && !["quality", "realtime"].includes(rM.latencyMode)) throw new TypeError("latencyMode, when provided, must be 'quality' or 'realtime'.");
        if (void 0 !== rM.fullCodecString && "string" !== typeof rM.fullCodecString) throw new TypeError("fullCodecString, when provided, must be a string.");
        if (void 0 !== rM.fullCodecString && (0, OM.M)(rM.fullCodecString) !== MM) throw new TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${MM}).`);
        if (void 0 !== rM.hardwareAcceleration && !["no-preference", "prefer-hardware", "prefer-software"].includes(rM.hardwareAcceleration)) throw new TypeError("hardwareAcceleration, when provided, must be 'no-preference', 'prefer-hardware' or 'prefer-software'.");
        if (void 0 !== rM.scalabilityMode && "string" !== typeof rM.scalabilityMode) throw new TypeError("scalabilityMode, when provided, must be a string.");
        if (void 0 !== rM.contentHint && "string" !== typeof rM.contentHint) throw new TypeError("contentHint, when provided, must be a string.")
      },
      nM = MM => {
        const rM = MM.bitrateMode,
          iM = MM.quality._toVideoRateControl(MM.codec, MM.width, MM.height, rM),
          jM = (rM, iM, SM) => ({
            codec: MM.fullCodecString ?? (0, OM.y)(MM.codec, MM.width, MM.height, SM, "keep" === MM.alpha),
            width: MM.width,
            height: MM.height,
            displayWidth: MM.squarePixelWidth,
            displayHeight: MM.squarePixelHeight,
            bitrate: rM,
            bitrateMode: iM,
            alpha: MM.alpha ?? "discard",
            framerate: MM.framerate,
            latencyMode: MM.latencyMode,
            hardwareAcceleration: MM.hardwareAcceleration,
            scalabilityMode: MM.scalabilityMode,
            contentHint: MM.contentHint,
            ...(0, OM.L)(MM.codec)
          }),
          aM = [];
        return null !== iM.quantizer && aM.push({
          config: jM(void 0, "quantizer", iM.bitrate),
          quantizer: iM.quantizer
        }), "quantizer" !== iM.bitrateMode && aM.push({
          config: jM(iM.bitrate, iM.bitrateMode, iM.bitrate),
          quantizer: null
        }), (0, SM.J)(aM.length > 0), aM
      },
      QM = MM => {
        if (!MM || "object" !== typeof MM) throw new TypeError("Encoding config must be an object.");
        if (!OM.b.includes(MM.codec)) throw new TypeError(`Invalid audio codec '${MM.codec}'. Must be one of: ${OM.b.join(", ")}.`);
        const rM = MM.bitrate;
        if (void 0 === MM.quality && void 0 === rM && !OM.m.includes(MM.codec) && "flac" !== MM.codec) throw new TypeError("config.quality must be provided for compressed audio codecs.");
        if (void 0 !== MM.quality && void 0 !== rM) throw new TypeError("config.quality and config.bitrate cannot both be provided.");
        if (void 0 !== MM.quality && !(MM.quality instanceof mM)) throw new TypeError("config.quality, when provided, must be a Quality.");
        if (void 0 !== rM && !(rM instanceof mM) && (!Number.isInteger(rM) || rM <= 0)) throw new TypeError("config.bitrate, when provided, must be a positive integer or a quality.");
        if (void 0 !== MM.transform) {
          if ("object" !== typeof MM.transform || !MM.transform) throw new TypeError("config.transform, when provided, must be an object.");
          if (void 0 !== MM.transform.numberOfChannels && (!Number.isInteger(MM.transform.numberOfChannels) || MM.transform.numberOfChannels <= 0)) throw new TypeError("config.transform.numberOfChannels, when provided, must be a positive integer.");
          if (void 0 !== MM.transform.sampleRate && (!Number.isInteger(MM.transform.sampleRate) || MM.transform.sampleRate <= 0)) throw new TypeError("config.transform.sampleRate, when provided, must be a positive integer.");
          if (void 0 !== MM.transform.sampleFormat && !["u8", "s16", "s32", "f32"].includes(MM.transform.sampleFormat)) throw new TypeError("config.transform.sampleFormat, when provided, must be one of: u8, s16, s32, f32.");
          if (void 0 !== MM.transform.process && "function" !== typeof MM.transform.process) throw new TypeError("config.transform.process, when provided, must be a function.")
        }
        if (void 0 !== MM.onEncodedPacket && "function" !== typeof MM.onEncodedPacket) throw new TypeError("config.onEncodedPacket, when provided, must be a function.");
        if (void 0 !== MM.onEncoderConfig && "function" !== typeof MM.onEncoderConfig) throw new TypeError("config.onEncoderConfig, when provided, must be a function.");
        if (void 0 !== MM.onEncodedSample && "function" !== typeof MM.onEncodedSample) throw new TypeError("config.onEncodedSample, when provided, must be a function.");
        zM(MM.codec, MM)
      },
      zM = (MM, rM) => {
        if (!rM || "object" !== typeof rM) throw new TypeError("Encoding options must be an object.");
        const iM = rM.bitrateMode;
        if (void 0 !== iM && !["constant", "variable"].includes(iM)) throw new TypeError("bitrateMode, when provided, must be 'constant' or 'variable'.");
        if (void 0 !== rM.fullCodecString && "string" !== typeof rM.fullCodecString) throw new TypeError("fullCodecString, when provided, must be a string.");
        if (void 0 !== rM.fullCodecString && (0, OM.M)(rM.fullCodecString) !== MM) throw new TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${MM}).`)
      },
      LM = MM => {
        const rM = MM.bitrateMode;
        return {
          codec: MM.fullCodecString ?? (0, OM.w)(MM.codec, MM.numberOfChannels, MM.sampleRate),
          numberOfChannels: MM.numberOfChannels,
          sampleRate: MM.sampleRate,
          bitrate: MM.quality?._toAudioBitrate(MM.codec),
          bitrateMode: MM.quality?._bitrateMode ?? rM,
          ...(0, OM.I)(MM.codec)
        }
      };
    class mM {
      constructor(MM) {
        if ("number" !== typeof MM && "string" !== typeof MM || (MM = {
            quality: MM
          }), !MM || "object" !== typeof MM) throw new TypeError("options must be an object.");
        if (void 0 !== MM.bitrateMode && !["constant", "variable"].includes(MM.bitrateMode)) throw new TypeError("options.bitrateMode, when provided, must be 'constant' or 'variable'.");
        if ("quality" in MM) {
          if ("string" === typeof MM.quality ? !(MM.quality in HM) : "number" !== typeof MM.quality || Number.isNaN(MM.quality)) throw new TypeError("options.quality must be a number, or one of 'very-low', 'low', 'medium', 'high' or 'very-high'.");
          if (void 0 !== MM.preferBitrate && "boolean" !== typeof MM.preferBitrate) throw new TypeError("options.preferBitrate, when provided, must be a boolean.");
          if ("bitrate" in MM || "quantizer" in MM) throw new TypeError("options.quality cannot be combined with options.bitrate or options.quantizer.");
          this._quality = "string" === typeof MM.quality ? HM[MM.quality] : MM.quality, this._preferBitrate = MM.preferBitrate ?? !1, this._bitrate = void 0, this._quantizer = void 0
        } else {
          if (void 0 !== MM.bitrate && (!Number.isInteger(MM.bitrate) || MM.bitrate <= 0)) throw new TypeError("options.bitrate, when provided, must be a positive integer.");
          if (void 0 !== MM.quantizer && (!Number.isInteger(MM.quantizer) || MM.quantizer < 0)) throw new TypeError("options.quantizer, when provided, must be a non-negative integer.");
          if (void 0 === MM.bitrate && void 0 === MM.quantizer) throw new TypeError("At least one of options.bitrate or options.quantizer must be set.");
          if ("preferBitrate" in MM) throw new TypeError("options.preferBitrate can only be combined with options.quality.");
          this._quality = void 0, this._preferBitrate = !1, this._bitrate = MM.bitrate, this._quantizer = MM.quantizer
        }
        this._bitrateMode = MM.bitrateMode
      }
      _toVideoRateControl(MM, rM, iM, OM) {
        const jM = hM[MM];
        let aM, PM = null,
          nM = this._bitrateMode ?? OM ?? "variable";
        if (void 0 !== this._quantizer) {
          if (jM)
            if (this._quantizer < jM.min || this._quantizer > jM.max) {
              if (void 0 === this._bitrate) throw new Error(`Quantizer ${this._quantizer} is out of range for codec '${MM}'; must be between ${jM.min} and ${jM.max}.`)
            } else PM = this._quantizer, void 0 === this._bitrate && (nM = "quantizer");
          else if (void 0 === this._bitrate) throw new Error(`Codec '${MM}' does not support quantizer-based encoding. Provide a bitrate in the Quality to define a fallback.`)
        } else void 0 === this._bitrate && jM && !this._preferBitrate && ((0, SM.J)(void 0 !== this._quality), PM = (0, SM.X)(Math.round((0, SM.fc)(jM.worst, jM.best, this._quality)), jM.min, jM.max));
        if (void 0 !== this._bitrate) aM = this._bitrate;
        else {
          let OM = this._quality;
          void 0 === OM && ((0, SM.J)(null !== PM && jM), OM = (0, SM.X)((PM - jM.worst) / (jM.best - jM.worst), 0, 1)), aM = dM(MM, rM, iM, JM(OM))
        }
        return {
          quantizer: PM,
          bitrate: aM,
          bitrateMode: nM
        }
      }
      _toVideoBitrate(MM, rM, iM) {
        return void 0 !== this._bitrate ? this._bitrate : ((0, SM.J)(void 0 !== this._quality), dM(MM, rM, iM, JM(this._quality)))
      }
      _toAudioBitrate(MM) {
        if (OM.m.includes(MM) || "flac" === MM) return;
        if (void 0 !== this._bitrate) return this._bitrate;
        if (void 0 === this._quality) throw new Error("This Quality defines neither a quality level nor a bitrate and therefore cannot be used for audio encoding.");
        const rM = JM(this._quality),
          iM = {
            aac: 128e3,
            opus: 64e3,
            mp3: 16e4,
            vorbis: 64e3,
            ac3: 384e3,
            eac3: 192e3,
            dts: 768e3
          } [MM];
        if (!iM) throw new Error(`Unhandled codec: ${MM}`);
        let SM = iM * rM;
        if ("aac" === MM) {
          SM = [96e3, 128e3, 16e4, 192e3].reduce(((MM, rM) => Math.abs(rM - SM) < Math.abs(MM - SM) ? rM : MM))
        } else if ("opus" === MM || "vorbis" === MM) SM = Math.max(6e3, SM);
        else if ("mp3" === MM) {
          SM = [8e3, 16e3, 24e3, 32e3, 4e4, 48e3, 64e3, 8e4, 96e3, 112e3, 128e3, 16e4, 192e3, 224e3, 256e3, 32e4].reduce(((MM, rM) => Math.abs(rM - SM) < Math.abs(MM - SM) ? rM : MM))
        }
        return 1e3 * Math.round(SM / 1e3)
      }
    }
    const HM = {
        "very-low": 0,
        low: .25,
        medium: .5,
        high: .75,
        "very-high": 1
      },
      hM = {
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
      JM = MM => .3 * Math.exp(2.5538 * MM),
      dM = (MM, rM, iM, OM) => {
        const SM = rM * iM,
          jM = 3e6,
          aM = jM * Math.pow(SM / 2073600, .95) * {
            avc: 1,
            hevc: .6,
            vp9: .6,
            av1: .4,
            vp8: 1.2,
            prores: 73.33333333333333
          } [MM] * OM;
        return 1e3 * Math.ceil(aM / 1e3)
      },
      yM = (MM, rM) => "avc" === MM ? {
        avc: {
          quantizer: rM
        }
      } : "hevc" === MM ? {
        hevc: {
          quantizer: rM
        }
      } : "vp9" === MM ? {
        vp9: {
          quantizer: rM
        }
      } : "av1" === MM ? {
        av1: {
          quantizer: rM
        }
      } : void(0, SM.J)(!1),
      lM = (MM, rM) => void 0 !== MM ? MM : void 0 !== rM ? rM instanceof mM ? rM : new mM({
        bitrate: rM
      }) : void 0
  },
  34727: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => jM
    });
    var OM, SM = iM(34685);
    ! function(MM) {
      MM[MM.Silent = 0] = "Silent", MM[MM.Errors = 1] = "Errors", MM[MM.Warnings = 2] = "Warnings", MM[MM.Info = 3] = "Info"
    }(OM || (OM = {}));
    class jM {
      constructor() {}
      static get level() {
        return jM._level
      }
      static set level(MM) {
        if (MM !== OM.Silent && MM !== OM.Errors && MM !== OM.Warnings && MM !== OM.Info) throw new TypeError("Invalid log level. Use one of the values of the LogLevel enum.");
        jM._level = MM
      }
      static get _emitter() {
        return jM._emitterInstance ??= new SM.h
      }
      static on(MM, rM, iM) {
        return jM._emitter.on(MM, rM, iM)
      }
      static _error() {
        for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
        jM._emitter._emit("error", rM), jM._level >= OM.Errors && console.error(...rM)
      }
      static _warn() {
        for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
        jM._emitter._emit("warn", rM), jM._level >= OM.Warnings && console.warn(...rM)
      }
      static _info() {
        for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
        jM._emitter._emit("info", rM), jM._level >= OM.Info && console.info(...rM)
      }
    }
    jM._level = OM.Info, jM._emitterInstance = null
  },
  34776: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => QM,
      e: () => zM,
      g: () => nM,
      j: () => LM,
      m: () => aM
    });
    iM(34704);
    var OM = iM(34713);
    iM(34685), iM(34738);
    var SM = iM(34756);
    iM(34771), iM(34765);
    iM(34720), iM(34727), "function" === typeof SuppressedError && SuppressedError;
    class jM {
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
      async _flushAndClose(MM) {}
      close() {
        if (this._closingPromise) return;
        const MM = this._connectedTrack;
        if (!MM) throw new Error("Cannot call close without connecting the source to an output track.");
        if ("pending" === MM.output.state) throw new Error("Cannot call close before output has been started.");
        this._closingPromise = (async () => {
          await this._flushAndClose(!1), this._closed = !0, "finalizing" !== MM.output.state && "finalized" !== MM.output.state && MM.output._muxer.onTrackClose(MM)
        })()
      }
      async _flushOrWaitForOngoingClose(MM) {
        return this._closingPromise ??= (async () => {
          await this._flushAndClose(MM), this._closed = !0
        })()
      }
    }
    class aM extends jM {
      constructor(MM) {
        if (super(), !OM.q.includes(MM)) throw new TypeError(`Invalid video codec '${MM}'. Must be one of: ${OM.q.join(", ")}.`);
        this._codec = MM
      }
    }
    const PM = (MM, rM) => {
      if (MM.metadata.hasOnlyKeyPackets && "key" !== rM.type) throw new Error("Cannot add non-key packets to a hasOnlyKeyPackets video track.")
    };
    class nM extends aM {
      constructor(MM) {
        super(MM)
      }
      add(MM, rM) {
        if (!(MM instanceof SM.e)) throw new TypeError("packet must be an EncodedPacket.");
        if (MM.isMetadataOnly) throw new TypeError("Metadata-only packets cannot be added.");
        if (void 0 !== rM && (!rM || "object" !== typeof rM)) throw new TypeError("meta, when provided, must be an object.");
        return this._ensureValidAdd(), PM(this._connectedTrack, MM), this._connectedTrack.output._muxer.addEncodedVideoPacket(this._connectedTrack, MM, rM)
      }
    }
    class QM extends jM {
      constructor(MM) {
        if (super(), !OM.b.includes(MM)) throw new TypeError(`Invalid audio codec '${MM}'. Must be one of: ${OM.b.join(", ")}.`);
        this._codec = MM
      }
    }
    class zM extends QM {
      constructor(MM) {
        super(MM)
      }
      add(MM, rM) {
        if (!(MM instanceof SM.e)) throw new TypeError("packet must be an EncodedPacket.");
        if (MM.isMetadataOnly) throw new TypeError("Metadata-only packets cannot be added.");
        if (void 0 !== rM && (!rM || "object" !== typeof rM)) throw new TypeError("meta, when provided, must be an object.");
        return this._ensureValidAdd(), this._connectedTrack.output._muxer.addEncodedAudioPacket(this._connectedTrack, MM, rM)
      }
    }
    class LM extends jM {
      constructor(MM) {
        if (super(), !OM.p.includes(MM)) throw new TypeError(`Invalid subtitle codec '${MM}'. Must be one of: ${OM.p.join(", ")}.`);
        this._codec = MM
      }
    }
  },
  34693: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => jM,
      e: () => nM,
      g: () => SM,
      k: () => PM,
      n: () => aM,
      o: () => QM
    });
    var OM = iM(34685);
    class SM {
      constructor(MM, rM) {
        if (this.data = MM, this.mimeType = rM, !(MM instanceof Uint8Array)) throw new TypeError("data must be a Uint8Array.");
        if ("string" !== typeof rM) throw new TypeError("mimeType must be a string.")
      }
    }
    class jM {
      constructor(MM, rM, iM, OM) {
        if (this.data = MM, this.mimeType = rM, this.name = iM, this.description = OM, !(MM instanceof Uint8Array)) throw new TypeError("data must be a Uint8Array.");
        if (void 0 !== rM && "string" !== typeof rM) throw new TypeError("mimeType, when provided, must be a string.");
        if (void 0 !== iM && "string" !== typeof iM) throw new TypeError("name, when provided, must be a string.");
        if (void 0 !== OM && "string" !== typeof OM) throw new TypeError("description, when provided, must be a string.")
      }
    }
    const aM = MM => {
        if (!MM || "object" !== typeof MM) throw new TypeError("tags must be an object.");
        if (void 0 !== MM.title && "string" !== typeof MM.title) throw new TypeError("tags.title, when provided, must be a string.");
        if (void 0 !== MM.description && "string" !== typeof MM.description) throw new TypeError("tags.description, when provided, must be a string.");
        if (void 0 !== MM.artist && "string" !== typeof MM.artist) throw new TypeError("tags.artist, when provided, must be a string.");
        if (void 0 !== MM.album && "string" !== typeof MM.album) throw new TypeError("tags.album, when provided, must be a string.");
        if (void 0 !== MM.albumArtist && "string" !== typeof MM.albumArtist) throw new TypeError("tags.albumArtist, when provided, must be a string.");
        if (void 0 !== MM.trackNumber && (!Number.isInteger(MM.trackNumber) || MM.trackNumber <= 0)) throw new TypeError("tags.trackNumber, when provided, must be a positive integer.");
        if (void 0 !== MM.tracksTotal && (!Number.isInteger(MM.tracksTotal) || MM.tracksTotal <= 0)) throw new TypeError("tags.tracksTotal, when provided, must be a positive integer.");
        if (void 0 !== MM.discNumber && (!Number.isInteger(MM.discNumber) || MM.discNumber <= 0)) throw new TypeError("tags.discNumber, when provided, must be a positive integer.");
        if (void 0 !== MM.discsTotal && (!Number.isInteger(MM.discsTotal) || MM.discsTotal <= 0)) throw new TypeError("tags.discsTotal, when provided, must be a positive integer.");
        if (void 0 !== MM.genre && "string" !== typeof MM.genre) throw new TypeError("tags.genre, when provided, must be a string.");
        if (void 0 !== MM.date && (!(MM.date instanceof Date) || Number.isNaN(MM.date.getTime()))) throw new TypeError("tags.date, when provided, must be a valid Date.");
        if (void 0 !== MM.beatsPerMinute && (!Number.isInteger(MM.beatsPerMinute) || MM.beatsPerMinute <= 0)) throw new TypeError("tags.beatsPerMinute, when provided, must be a positive integer.");
        if (void 0 !== MM.lyrics && "string" !== typeof MM.lyrics) throw new TypeError("tags.lyrics, when provided, must be a string.");
        if (void 0 !== MM.images) {
          if (!Array.isArray(MM.images)) throw new TypeError("tags.images, when provided, must be an array.");
          for (const rM of MM.images) {
            if (!rM || "object" !== typeof rM) throw new TypeError("Each image in tags.images must be an object.");
            if (!(rM.data instanceof Uint8Array)) throw new TypeError("Each image.data must be a Uint8Array.");
            if ("string" !== typeof rM.mimeType) throw new TypeError("Each image.mimeType must be a string.");
            if (!["coverFront", "coverBack", "unknown"].includes(rM.kind)) throw new TypeError("Each image.kind must be 'coverFront', 'coverBack', or 'unknown'.")
          }
        }
        if (void 0 !== MM.comment && "string" !== typeof MM.comment) throw new TypeError("tags.comment, when provided, must be a string.");
        if (void 0 !== MM.raw) {
          if (!MM.raw || "object" !== typeof MM.raw) throw new TypeError("tags.raw, when provided, must be an object.");
          for (const rM of Object.values(MM.raw))
            if (null !== rM && "string" !== typeof rM && (!Array.isArray(rM) || !rM.every((MM => "string" === typeof MM))) && !(rM instanceof Uint8Array) && !(rM instanceof SM) && !(rM instanceof jM) && !(0, OM.Ob)(rM)) throw new TypeError("Each value in tags.raw must be a string, string array, Uint8Array, RichImageData, AttachedFile, Record<string, string>, or null.")
        }
      },
      PM = MM => void 0 === MM.title && void 0 === MM.description && void 0 === MM.artist && void 0 === MM.album && void 0 === MM.albumArtist && void 0 === MM.trackNumber && void 0 === MM.tracksTotal && void 0 === MM.discNumber && void 0 === MM.discsTotal && void 0 === MM.genre && void 0 === MM.beatsPerMinute && void 0 === MM.date && void 0 === MM.lyrics && (!MM.images || 0 === MM.images.length) && void 0 === MM.comment && (void 0 === MM.raw || 0 === Object.keys(MM.raw).length),
      nM = {
        default: !0,
        primary: !0,
        forced: !1,
        original: !1,
        commentary: !1,
        hearingImpaired: !1,
        visuallyImpaired: !1
      },
      QM = MM => {
        if (!MM || "object" !== typeof MM) throw new TypeError("disposition must be an object.");
        if (void 0 !== MM.default && "boolean" !== typeof MM.default) throw new TypeError("disposition.default must be a boolean.");
        if (void 0 !== MM.primary && "boolean" !== typeof MM.primary) throw new TypeError("disposition.primary must be a boolean.");
        if (void 0 !== MM.forced && "boolean" !== typeof MM.forced) throw new TypeError("disposition.forced must be a boolean.");
        if (void 0 !== MM.original && "boolean" !== typeof MM.original) throw new TypeError("disposition.original must be a boolean.");
        if (void 0 !== MM.commentary && "boolean" !== typeof MM.commentary) throw new TypeError("disposition.commentary must be a boolean.");
        if (void 0 !== MM.hearingImpaired && "boolean" !== typeof MM.hearingImpaired) throw new TypeError("disposition.hearingImpaired must be a boolean.");
        if (void 0 !== MM.visuallyImpaired && "boolean" !== typeof MM.visuallyImpaired) throw new TypeError("disposition.visuallyImpaired must be a boolean.")
      }
  },
  34685: (MM, rM, iM) => {
    function OM(MM) {
      if (!MM) throw new Error("Assertion failed.")
    }
    iM.d(rM, {
      $c: () => BM,
      Ac: () => EM,
      Ad: () => GM,
      Bb: () => hr,
      Bc: () => UM,
      Cb: () => zr,
      D: () => wr,
      Eb: () => Or,
      Ec: () => oM,
      Fb: () => uM,
      G: () => AM,
      Hc: () => LM,
      J: () => OM,
      Jb: () => lM,
      Lb: () => er,
      Lc: () => VM,
      M: () => fM,
      Nc: () => TM,
      Ob: () => xr,
      P: () => Ur,
      Pb: () => dr,
      Rc: () => HM,
      S: () => ZM,
      Tb: () => yM,
      Uc: () => or,
      W: () => nM,
      Wb: () => nr,
      X: () => XM,
      Xc: () => FM,
      Y: () => fr,
      Yb: () => br,
      _b: () => lr,
      ab: () => yr,
      b: () => kM,
      bd: () => vM,
      c: () => RM,
      cc: () => dM,
      cd: () => gr,
      eb: () => sM,
      fc: () => IM,
      g: () => ar,
      gd: () => tM,
      h: () => Ar,
      hc: () => Hr,
      ib: () => JM,
      id: () => gM,
      j: () => PM,
      jb: () => jr,
      k: () => WM,
      kb: () => QM,
      kd: () => Nr,
      lb: () => NM,
      lc: () => KM,
      m: () => jM,
      nd: () => eM,
      ob: () => cM,
      od: () => CM,
      pc: () => hM,
      q: () => Sr,
      rb: () => xM,
      rd: () => Gr,
      sb: () => Mr,
      t: () => pM,
      tb: () => Er,
      tc: () => aM,
      uc: () => Cr,
      v: () => wM,
      vb: () => DM,
      vd: () => ur,
      wc: () => rr,
      wd: () => Yr,
      x: () => qM,
      yb: () => mr,
      yc: () => YM,
      z: () => tr
    });
    const SM = Math.PI / 180,
      jM = 180 / Math.PI,
      aM = MM => {
        const rM = (MM % 360 + 360) % 360;
        if (0 === rM || 90 === rM || 180 === rM || 270 === rM) return rM;
        throw new Error(`Invalid rotation ${MM}.`)
      },
      PM = [1, 0, 0, 0, 1, 0, 0, 0, 1],
      nM = (MM, rM, iM) => {
        const [OM, SM, , jM, aM] = MM, PM = Math.abs(OM) * rM + Math.abs(jM) * iM, nM = Math.abs(SM) * rM + Math.abs(aM) * iM;
        return hM(hM(mM(-rM / 2, -iM / 2), MM), mM(PM / 2, nM / 2))
      },
      QM = MM => {
        const [rM, iM] = MM, OM = Math.atan2(iM, zM(MM) ? -rM : rM);
        return aM(TM(OM * jM, 90))
      },
      zM = MM => {
        const [rM, iM, , OM, SM] = MM;
        return rM * SM - iM * OM < 0
      },
      LM = MM => {
        const rM = MM * SM,
          iM = Math.round(Math.cos(rM)),
          OM = Math.round(Math.sin(rM));
        return [iM, OM, 0, -OM, iM, 0, 0, 0, 1]
      },
      mM = (MM, rM) => [1, 0, 0, 0, 1, 0, MM, rM, 1],
      HM = (MM, rM) => [MM, 0, 0, 0, rM, 0, 0, 0, 1],
      hM = (MM, rM) => {
        const iM = new Array(9);
        for (let OM = 0; OM < 3; OM++)
          for (let SM = 0; SM < 3; SM++) iM[3 * OM + SM] = MM[3 * OM] * rM[SM] + MM[3 * OM + 1] * rM[3 + SM] + MM[3 * OM + 2] * rM[6 + SM];
        return iM
      },
      JM = (MM, rM, iM, OM) => ({
        rotation: aM(MM + (rM ? -iM : iM)),
        flip: rM !== OM
      }),
      dM = MM => MM && MM[MM.length - 1],
      yM = MM => MM >= 0 && MM < 2 ** 32,
      lM = MM => MM >= -(2 ** 31) && MM < 2 ** 31,
      EM = MM => {
        let rM = 0;
        for (; 0 === MM.readBits(1) && rM < 32;) rM++;
        if (rM >= 32) throw new Error("Invalid exponential-Golomb code.");
        return (1 << rM) - 1 + MM.readBits(rM)
      },
      UM = MM => {
        const rM = EM(MM);
        return 0 === (1 & rM) ? -(rM >> 1) : rM + 1 >> 1
      },
      GM = (MM, rM, iM, OM) => {
        for (let SM = rM; SM < iM; SM++) {
          const rM = Math.floor(SM / 8);
          let jM = MM[rM];
          const aM = 7 - (7 & SM);
          jM &= ~(1 << aM), jM |= (OM & 1 << iM - SM - 1) >> iM - SM - 1 << aM, MM[rM] = jM
        }
      },
      CM = MM => MM.constructor === Uint8Array ? MM : ArrayBuffer.isView(MM) ? new Uint8Array(MM.buffer, MM.byteOffset, MM.byteLength) : new Uint8Array(MM),
      eM = MM => MM.constructor === DataView ? MM : ArrayBuffer.isView(MM) ? new DataView(MM.buffer, MM.byteOffset, MM.byteLength) : new DataView(MM),
      bM = "undefined" !== typeof globalThis.TextEncoder ? globalThis.TextEncoder : class {
        constructor() {
          this.encoding = "utf-8"
        }
        encode() {
          let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          const rM = new Uint8Array(3 * MM.length);
          let iM = 0;
          for (let OM = 0; OM < MM.length; OM++) {
            let SM = MM.charCodeAt(OM);
            if (SM < 128) rM[iM++] = SM;
            else if (SM < 2048) rM[iM++] = 192 | SM >> 6, rM[iM++] = 128 | 63 & SM;
            else if (SM < 55296 || SM > 57343) rM[iM++] = 224 | SM >> 12, rM[iM++] = 128 | SM >> 6 & 63, rM[iM++] = 128 | 63 & SM;
            else {
              const jM = OM + 1 < MM.length ? MM.charCodeAt(OM + 1) : 0;
              SM < 56320 && jM >= 56320 && jM <= 57343 ? (SM = 65536 + (SM - 55296 << 10) + (jM - 56320), OM++, rM[iM++] = 240 | SM >> 18, rM[iM++] = 128 | SM >> 12 & 63, rM[iM++] = 128 | SM >> 6 & 63, rM[iM++] = 128 | 63 & SM) : (rM[iM++] = 239, rM[iM++] = 191, rM[iM++] = 189)
            }
          }
          return rM.slice(0, iM)
        }
      },
      wM = "undefined" !== typeof globalThis.TextDecoder ? globalThis.TextDecoder : class {
        constructor() {
          let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "utf-8";
          const rM = MM.trim().toLowerCase();
          if ("utf-8" === rM || "utf8" === rM || "unicode-1-1-utf-8" === rM) this.encoding = "utf-8";
          else if ("utf-16le" === rM || "utf-16" === rM) this.encoding = "utf-16le";
          else {
            if ("utf-16be" !== rM) throw new RangeError(`The encoding label provided ('${MM}') is invalid.`);
            this.encoding = "utf-16be"
          }
        }
        decode(MM) {
          const rM = MM ? CM(MM) : new Uint8Array(0),
            iM = [];
          if ("utf-8" === this.encoding) {
            let MM = rM.length >= 3 && 239 === rM[0] && 187 === rM[1] && 191 === rM[2] ? 3 : 0;
            for (; MM < rM.length;) {
              const OM = rM[MM];
              if (OM < 128) {
                iM.push(OM), MM++;
                continue
              }
              let SM, jM;
              if (OM >= 194 && OM < 224) SM = 1, jM = 31 & OM;
              else if (OM >= 224 && OM < 240) SM = 2, jM = 15 & OM;
              else {
                if (!(OM >= 240 && OM < 245)) {
                  iM.push(65533), MM++;
                  continue
                }
                SM = 3, jM = 7 & OM
              }
              let aM = 224 === OM ? 160 : 240 === OM ? 144 : 128,
                PM = 237 === OM ? 159 : 244 === OM ? 143 : 191,
                nM = 1;
              for (; nM <= SM; nM++) {
                const iM = MM + nM < rM.length ? rM[MM + nM] : 0;
                if (iM < aM || iM > PM) break;
                jM = jM << 6 | 63 & iM, aM = 128, PM = 191
              }
              MM += nM, nM <= SM ? iM.push(65533) : jM >= 65536 ? (jM -= 65536, iM.push(55296 | jM >> 10, 56320 | 1023 & jM)) : iM.push(jM)
            }
          } else {
            const MM = "utf-16le" === this.encoding,
              OM = MM ? 255 : 254,
              SM = MM ? 254 : 255;
            let jM = rM.length >= 2 && rM[0] === OM && rM[1] === SM ? 2 : 0;
            for (; jM + 1 < rM.length;) {
              const OM = MM ? rM[jM] | rM[jM + 1] << 8 : rM[jM] << 8 | rM[jM + 1];
              if (jM += 2, OM >= 55296 && OM <= 56319) {
                const SM = jM + 1 < rM.length ? MM ? rM[jM] | rM[jM + 1] << 8 : rM[jM] << 8 | rM[jM + 1] : -1;
                SM >= 56320 && SM <= 57343 ? (iM.push(OM, SM), jM += 2) : iM.push(65533)
              } else OM >= 56320 && OM <= 57343 ? iM.push(65533) : iM.push(OM)
            }
            jM < rM.length && iM.push(65533)
          }
          let OM = "";
          for (let SM = 0; SM < iM.length; SM += 8192) OM += String.fromCharCode(...iM.slice(SM, SM + 8192));
          return OM
        }
      },
      tM = new wM,
      gM = new bM,
      uM = MM => {
        for (let rM = 0; rM < MM.length; rM++) {
          if (MM.charCodeAt(rM) > 255) return !1
        }
        return !0
      },
      RM = {
        bt709: 1,
        bt470bg: 5,
        smpte170m: 6,
        bt2020: 9,
        smpte432: 12
      },
      pM = {
        bt709: 1,
        smpte170m: 6,
        linear: 8,
        "iec61966-2-1": 13,
        pq: 16,
        hlg: 18
      },
      WM = {
        rgb: 0,
        bt709: 1,
        bt470bg: 5,
        smpte170m: 6,
        "bt2020-ncl": 9
      },
      sM = MM => !MM || null == MM.primaries && null == MM.transfer && null == MM.matrix && null == MM.fullRange,
      DM = MM => MM instanceof ArrayBuffer || "undefined" !== typeof SharedArrayBuffer && MM instanceof SharedArrayBuffer || ArrayBuffer.isView(MM);
    class kM {
      constructor() {
        this.currentPromise = Promise.resolve(), this.pending = 0
      }
      async acquire() {
        let MM;
        const rM = new Promise((rM => {
            let iM = !1;
            MM = () => {
              iM || (rM(), this.pending--, iM = !0)
            }
          })),
          iM = this.currentPromise;
        return this.currentPromise = rM, this.pending++, await iM, MM
      }
    }
    const ZM = MM => [...MM].map((MM => MM.toString(16).padStart(2, "0"))).join(""),
      oM = MM => (MM = (MM = (MM = (MM = (MM = MM >> 1 & 1431655765 | (1431655765 & MM) << 1) >> 2 & 858993459 | (858993459 & MM) << 2) >> 4 & 252645135 | (252645135 & MM) << 4) >> 8 & 16711935 | (16711935 & MM) << 8) >> 16 & 65535 | (65535 & MM) << 16) >>> 0,
      fM = (MM, rM, iM) => {
        let OM = 0,
          SM = MM.length - 1,
          jM = -1;
        for (; OM <= SM;) {
          const aM = OM + (SM - OM + 1) / 2 | 0;
          iM(MM[aM]) <= rM ? (jM = aM, OM = aM + 1) : SM = aM - 1
        }
        return jM
      },
      YM = () => {
        let MM, rM;
        return {
          promise: new Promise(((iM, OM) => {
            MM = iM, rM = OM
          })),
          resolve: MM,
          reject: rM
        }
      },
      NM = (MM, rM) => {
        for (let iM = MM.length - 1; iM >= 0; iM--)
          if (rM(MM[iM])) return iM;
        return -1
      },
      AM = MM => {
        throw new Error(`Unexpected value: ${MM}`)
      },
      xM = (MM, rM, iM) => {
        const OM = MM.getUint8(rM),
          SM = MM.getUint8(rM + 1),
          jM = MM.getUint8(rM + 2);
        return iM ? OM | SM << 8 | jM << 16 : OM << 16 | SM << 8 | jM
      },
      vM = (MM, rM, iM, OM) => {
        iM >>>= 0, iM &= 16777215, OM ? (MM.setUint8(rM, 255 & iM), MM.setUint8(rM + 1, iM >>> 8 & 255), MM.setUint8(rM + 2, iM >>> 16 & 255)) : (MM.setUint8(rM, iM >>> 16 & 255), MM.setUint8(rM + 1, iM >>> 8 & 255), MM.setUint8(rM + 2, 255 & iM))
      },
      FM = (MM, rM, iM, OM) => {
        (iM = XM(iM, -8388608, 8388607)) < 0 && (iM = iM + 16777216 & 16777215), vM(MM, rM, iM, OM)
      },
      BM = (MM, rM, iM, OM) => {
        OM ? (MM.setUint32(rM + 0, iM, !0), MM.setInt32(rM + 4, Math.floor(iM / 2 ** 32), !0)) : (MM.setInt32(rM + 0, Math.floor(iM / 2 ** 32), !0), MM.setUint32(rM + 4, iM, !0))
      },
      XM = (MM, rM, iM) => Math.max(rM, Math.min(iM, MM)),
      IM = (MM, rM, iM) => MM + (rM - MM) * iM,
      KM = (MM, rM) => MM - Math.floor(MM / rM) * rM,
      qM = "und",
      TM = (MM, rM) => Math.round(MM / rM) * rM,
      VM = (MM, rM) => Math.round(MM * rM) / rM,
      cM = (MM, rM) => Math.floor(MM * rM) / rM,
      Mr = MM => {
        let rM = 0;
        for (; MM;) rM++, MM >>= 1;
        return rM
      },
      rr = MM => {
        let rM = 0;
        for (; 0 !== MM;) MM &= MM - 1, rM++;
        return rM
      },
      ir = /^[a-z]{3}$/,
      Or = MM => ir.test(MM),
      Sr = 1e6 * (1 + Number.EPSILON),
      jr = (MM, rM) => {
        const iM = MM < 0 ? -1 : 1;
        let OM = 0,
          SM = 1,
          jM = 1,
          aM = 0,
          PM = MM = Math.abs(MM);
        for (;;) {
          const MM = Math.floor(PM),
            nM = MM * jM + OM,
            QM = MM * aM + SM;
          if (QM > rM) return {
            num: iM * jM,
            den: aM
          };
          if (OM = jM, SM = aM, jM = nM, aM = QM, PM = 1 / (PM - MM), !isFinite(PM)) break
        }
        return {
          num: iM * jM,
          den: aM
        }
      };
    class ar {
      constructor() {
        this.currentPromise = Promise.resolve()
      }
      call(MM) {
        return this.currentPromise = this.currentPromise.then(MM)
      }
    }
    let Pr = null;
    const nr = () => null !== Pr ? Pr : Pr = !("undefined" === typeof navigator || !(navigator.vendor?.match(/apple/i) || /AppleWebKit/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) || /\b(iPad|iPhone|iPod)\b/.test(navigator.userAgent)));
    let Qr = null;
    const zr = () => null !== Qr ? Qr : Qr = "undefined" !== typeof navigator && navigator.userAgent?.includes("Firefox");
    let Lr = null;
    const mr = () => null !== Lr ? Lr : Lr = !("undefined" === typeof navigator || !navigator.vendor?.includes("Google Inc") && !/Chrome/.test(navigator.userAgent));
    const Hr = MM => "undefined" === typeof globalThis.isSecureContext || globalThis.isSecureContext ? `${MM} is not available in this environment.` : `${MM} is not available in this environment; this may be because this page is running in an insecure context. Try serving your page over HTTPS or use localhost.`,
      hr = MM => MM instanceof DOMException && "QuotaExceededError" === MM.name && /reclaimed/i.test(MM.message),
      Jr = (async () => {})().constructor,
      dr = MM => MM instanceof Jr || MM instanceof Promise || "function" === typeof MM?.then,
      yr = (MM, rM) => -1 !== MM ? MM : rM,
      lr = function*(MM) {
        for (const rM in MM) {
          const iM = MM[rM];
          void 0 !== iM && (yield {
            key: rM,
            value: iM
          })
        }
      },
      Er = MM => {
        switch (MM.toLowerCase()) {
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
      Ur = MM => {
        let rM = "";
        for (let iM = 0; iM < MM.length; iM++) rM += String.fromCharCode(MM[iM]);
        return btoa(rM)
      },
      Gr = (MM, rM) => {
        if (MM.length !== rM.length) return !1;
        for (let iM = 0; iM < MM.length; iM++)
          if (MM[iM] !== rM[iM]) return !1;
        return !0
      },
      Cr = () => {
        Symbol.dispose ??= Symbol("Symbol.dispose")
      },
      er = MM => "number" === typeof MM && !Number.isNaN(MM),
      br = (MM, rM) => {
        if (rM.includes("://")) return rM;
        if (MM.includes("://")) {
          const rM = MM.indexOf("?"); - 1 !== rM && (MM = MM.slice(0, rM))
        }
        let iM;
        if (rM.startsWith("/")) {
          const OM = MM.indexOf("://");
          if (-1 === OM) iM = rM;
          else {
            const SM = MM.indexOf("/", OM + 3);
            iM = -1 === SM ? MM + rM : MM.slice(0, SM) + rM
          }
        } else {
          const OM = MM.lastIndexOf("/");
          iM = -1 === OM ? rM : MM.slice(0, OM + 1) + rM
        }
        let OM = "";
        const SM = iM.indexOf("://");
        if (-1 !== SM) {
          const MM = iM.indexOf("/", SM + 3); - 1 !== MM && (OM = iM.slice(0, MM), iM = iM.slice(MM))
        }
        const jM = iM.split("/"),
          aM = [];
        for (const PM of jM) ".." === PM ? aM.pop() : "." !== PM && aM.push(PM);
        return OM + aM.join("/")
      },
      wr = (MM, rM) => {
        let iM = -1,
          OM = 1 / 0;
        for (let SM = 0; SM < MM.length; SM++) {
          const jM = rM(MM[SM]);
          jM < OM && (OM = jM, iM = SM)
        }
        return iM
      },
      tr = (MM, rM) => {
        let iM = -1,
          OM = -1 / 0;
        for (let SM = 0; SM < MM.length; SM++) {
          const jM = rM(MM[SM]);
          jM > OM && (OM = jM, iM = SM)
        }
        return iM
      },
      gr = MM => {
        OM(Number.isInteger(MM.num)), OM(Number.isInteger(MM.den)), OM(0 !== MM.den);
        let rM = Math.abs(MM.num),
          iM = Math.abs(MM.den);
        for (; 0 !== iM;) {
          const MM = rM % iM;
          rM = iM, iM = MM
        }
        const SM = rM || 1;
        return {
          num: MM.num / SM,
          den: MM.den / SM
        }
      },
      ur = (MM, rM) => {
        if ("object" !== typeof MM || !MM) throw new TypeError(`${rM} must be an object.`);
        if (!Number.isInteger(MM.left) || MM.left < 0) throw new TypeError(`${rM}.left must be a non-negative integer.`);
        if (!Number.isInteger(MM.top) || MM.top < 0) throw new TypeError(`${rM}.top must be a non-negative integer.`);
        if (!Number.isInteger(MM.width) || MM.width < 0) throw new TypeError(`${rM}.width must be a non-negative integer.`);
        if (!Number.isInteger(MM.height) || MM.height < 0) throw new TypeError(`${rM}.height must be a non-negative integer.`)
      };
    let Rr, pr = 1;
    const Wr = new Map,
      sr = new Map,
      Dr = () => "undefined" === typeof window,
      kr = () => {
        const MM = new Map,
          rM = new Map;
        self.onmessage = iM => {
          const OM = iM.data;
          switch (OM.type) {
            case "set-timeout": {
              const rM = setTimeout((() => {
                MM.delete(OM.timerId), self.postMessage({
                  type: "fire",
                  timerId: OM.timerId
                })
              }), OM.delay);
              MM.set(OM.timerId, rM)
            }
            break;
            case "set-interval": {
              const MM = setInterval((() => {
                self.postMessage({
                  type: "fire",
                  timerId: OM.timerId
                })
              }), OM.delay);
              rM.set(OM.timerId, MM)
            }
            break;
            case "clear-timeout": {
              const rM = MM.get(OM.timerId);
              void 0 !== rM && (clearTimeout(rM), MM.delete(OM.timerId))
            }
            break;
            case "clear-interval": {
              const MM = rM.get(OM.timerId);
              void 0 !== MM && (clearInterval(MM), rM.delete(OM.timerId))
            }
          }
        }
      },
      Zr = () => {
        if (Rr) return Rr;
        const MM = `(${kr.toString()})();`,
          rM = URL.createObjectURL(new Blob([MM], {
            type: "text/javascript"
          }));
        return Rr = new Worker(rM), URL.revokeObjectURL(rM), Rr.onmessage = MM => {
          const rM = MM.data,
            iM = Wr.get(rM.timerId);
          if (iM) return Wr.delete(rM.timerId), void iM();
          const OM = sr.get(rM.timerId);
          OM && OM()
        }, Rr
      },
      or = (MM, rM) => {
        if (Dr()) return {
          id: setInterval(MM, rM)
        };
        const iM = pr++;
        return sr.set(iM, (() => {
          MM()
        })), Zr().postMessage({
          type: "set-interval",
          timerId: iM,
          delay: rM
        }), {
          id: iM
        }
      },
      fr = MM => {
        Dr() ? clearInterval(MM.id) : (OM("number" === typeof MM.id), sr.delete(MM.id), Zr().postMessage({
          type: "clear-interval",
          timerId: MM.id
        }))
      },
      Yr = MM => new Promise((rM => setTimeout(rM, MM))),
      Nr = MM => Array.isArray(MM) ? MM : [MM];
    class Ar {
      constructor() {
        this._listeners = new Map
      }
      on(MM, rM, iM) {
        this._listeners.has(MM) || this._listeners.set(MM, new Set);
        const OM = {
          jL: rM,
          once: iM?.once ?? !1
        };
        return this._listeners.get(MM).add(OM), () => {
          this._listeners.get(MM)?.delete(OM)
        }
      }
      _emit() {
        for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
        const [OM, SM] = rM, jM = this._listeners.get(OM);
        if (jM)
          for (const PM of jM) {
            try {
              PM.jL(SM)
            } catch (aM) {
              console.error(aM)
            }
            PM.once && jM.delete(PM)
          }
      }
    }
    const xr = MM => null !== MM && "object" === typeof MM && Object.getPrototypeOf(MM) === Object.prototype && Object.values(MM).every((MM => "string" === typeof MM))
  },
  34697: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => fi,
      i: () => Yi,
      k: () => oi,
      n: () => ki,
      o: () => Ai
    });
    var OM = iM(34704),
      SM = iM(34713);
    var jM;
    ! function(MM) {
      MM[MM.FrameCount = 1] = "FrameCount", MM[MM.FileSize = 2] = "FileSize", MM[MM.Toc = 4] = "Toc"
    }(jM || (jM = {}));
    var aM = iM(34727),
      PM = iM(34685);
    class nM {
      constructor(MM, rM, iM, OM, SM) {
        this.bytes = MM, this.view = rM, this.offset = iM, this.start = OM, this.end = SM, this.bufferPos = OM - iM
      }
      static tempFromBytes(MM) {
        return new nM(MM, (0, PM.nd)(MM), 0, 0, MM.length)
      }
      get length() {
        return this.end - this.start
      }
      get filePos() {
        return this.offset + this.bufferPos
      }
      set filePos(MM) {
        this.bufferPos = MM - this.offset
      }
      get remainingLength() {
        return Math.max(this.end - this.filePos, 0)
      }
      skip(MM) {
        this.bufferPos += MM
      }
      slice(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.end - MM;
        if (MM < this.start || MM + rM > this.end) throw new RangeError("Slicing outside of original slice.");
        return new nM(this.bytes, this.view, this.offset, MM, MM + rM)
      }
    }
    const QM = (MM, rM) => {
        if (MM.filePos < MM.start || MM.filePos + rM > MM.end) throw new RangeError(`Tried reading [${MM.filePos}, ${MM.filePos+rM}), but slice is [${MM.start}, ${MM.end}). This is likely an internal error, please report it alongside the file that caused it.`)
      },
      zM = (MM, rM) => {
        QM(MM, rM);
        const iM = MM.bytes.subarray(MM.bufferPos, MM.bufferPos + rM);
        return MM.bufferPos += rM, iM
      };
    var LM, mM;
    ! function(MM) {
      MM[MM.Unsynchronisation = 128] = "Unsynchronisation", MM[MM.ExtendedHeader = 64] = "ExtendedHeader", MM[MM.ExperimentalIndicator = 32] = "ExperimentalIndicator", MM[MM.Footer = 16] = "Footer"
    }(LM || (LM = {})),
    function(MM) {
      MM[MM.ISO_8859_1 = 0] = "ISO_8859_1", MM[MM.UTF_16_WITH_BOM = 1] = "UTF_16_WITH_BOM", MM[MM.UTF_16_BE_NO_BOM = 2] = "UTF_16_BE_NO_BOM", MM[MM.UTF_8 = 3] = "UTF_8"
    }(mM || (mM = {}));
    var HM = iM(34693);
    class hM {
      constructor(MM) {
        this.mutex = new PM.b, this.trackTimestampInfo = new WeakMap, this.output = MM
      }
      onTrackClose(MM) {}
      validateTimestamp(MM, rM, iM) {
        let OM = this.trackTimestampInfo.get(MM);
        if (OM) {
          if (iM && (OM.maxTimestampBeforeLastKeyPacket = OM.maxTimestamp), null !== OM.maxTimestampBeforeLastKeyPacket && rM < OM.maxTimestampBeforeLastKeyPacket) throw new Error(`Timestamps cannot be smaller than the largest timestamp of the previous GOP (a GOP begins with a key packet and ends right before the next key packet). Got ${rM}s, but largest timestamp is ${OM.maxTimestampBeforeLastKeyPacket}s.`);
          OM.maxTimestamp = Math.max(OM.maxTimestamp, rM)
        } else {
          if (!iM) throw new Error("First packet must be a key packet.");
          OM = {
            maxTimestamp: rM,
            maxTimestampBeforeLastKeyPacket: null
          }, this.trackTimestampInfo.set(MM, OM)
        }
      }
    }
    var JM = iM(34720),
      dM = iM(34711);
    var yM = iM(34738),
      lM = iM(34734);
    class EM {
      constructor(MM) {
        this.writer = MM, this.helper = new Uint8Array(8), this.helperView = new DataView(this.helper.buffer), this.offsets = new WeakMap
      }
      writeU32(MM) {
        this.helperView.setUint32(0, MM, !1), this.writer.write(this.helper.subarray(0, 4))
      }
      writeU64(MM) {
        this.helperView.setUint32(0, Math.floor(MM / 2 ** 32), !1), this.helperView.setUint32(4, MM, !1), this.writer.write(this.helper.subarray(0, 8))
      }
      writeAscii(MM) {
        for (let rM = 0; rM < MM.length; rM++) this.helperView.setUint8(rM % 8, MM.charCodeAt(rM)), rM % 8 === 7 && this.writer.write(this.helper);
        MM.length % 8 !== 0 && this.writer.write(this.helper.subarray(0, MM.length % 8))
      }
      writeBox(MM) {
        if (this.offsets.set(MM, this.writer.getPos()), MM.contents && !MM.children) this.writeBoxHeader(MM, MM.size ?? MM.contents.byteLength + 8), this.writer.write(MM.contents);
        else {
          const rM = this.writer.getPos();
          if (this.writeBoxHeader(MM, 0), MM.contents && this.writer.write(MM.contents), MM.children)
            for (const SM of MM.children) SM && this.writeBox(SM);
          const iM = this.writer.getPos(),
            OM = MM.size ?? iM - rM;
          this.writer.seek(rM), this.writeBoxHeader(MM, OM), this.writer.seek(iM)
        }
      }
      writeBoxHeader(MM, rM) {
        this.writeU32(MM.largeSize ? 1 : rM), this.writeAscii(MM.type), MM.largeSize && this.writeU64(rM)
      }
      measureBoxHeader(MM) {
        return 8 + (MM.largeSize ? 8 : 0)
      }
      patchBox(MM) {
        const rM = this.offsets.get(MM);
        (0, PM.J)(void 0 !== rM);
        const iM = this.writer.getPos();
        this.writer.seek(rM), this.writeBox(MM), this.writer.seek(iM)
      }
      measureBox(MM) {
        if (MM.contents && !MM.children) {
          return this.measureBoxHeader(MM) + MM.contents.byteLength
        } {
          let rM = this.measureBoxHeader(MM);
          if (MM.contents && (rM += MM.contents.byteLength), MM.children)
            for (const iM of MM.children) iM && (rM += this.measureBox(iM));
          return rM
        }
      }
    }
    const UM = new Uint8Array(8),
      GM = new DataView(UM.buffer),
      CM = MM => [(MM % 256 + 256) % 256],
      eM = MM => (GM.setUint16(0, MM, !1), [UM[0], UM[1]]),
      bM = MM => (GM.setInt16(0, MM, !1), [UM[0], UM[1]]),
      wM = MM => (GM.setUint32(0, MM, !1), [UM[1], UM[2], UM[3]]),
      tM = MM => (GM.setUint32(0, MM, !1), [UM[0], UM[1], UM[2], UM[3]]),
      gM = MM => (GM.setInt32(0, MM, !1), [UM[0], UM[1], UM[2], UM[3]]),
      uM = MM => (GM.setUint32(0, Math.floor(MM / 2 ** 32), !1), GM.setUint32(4, MM, !1), [UM[0], UM[1], UM[2], UM[3], UM[4], UM[5], UM[6], UM[7]]),
      RM = MM => (GM.setInt32(0, Math.floor(MM / 2 ** 32), !1), GM.setUint32(4, MM, !1), [UM[0], UM[1], UM[2], UM[3], UM[4], UM[5], UM[6], UM[7]]),
      pM = MM => (GM.setInt16(0, 256 * MM, !1), [UM[0], UM[1]]),
      WM = MM => (GM.setInt32(0, 65536 * MM, !1), [UM[0], UM[1], UM[2], UM[3]]),
      sM = MM => (GM.setInt32(0, 2 ** 30 * MM, !1), [UM[0], UM[1], UM[2], UM[3]]),
      DM = (MM, rM) => {
        const iM = [];
        let OM = MM;
        do {
          let MM = 127 & OM;
          OM >>= 7, iM.length > 0 && (MM |= 128), iM.push(MM), void 0 !== rM && rM--
        } while (OM > 0 || rM);
        return iM.reverse()
      },
      kM = function(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const iM = Array(MM.length).fill(null).map(((rM, iM) => MM.charCodeAt(iM)));
        return rM && iM.push(0), iM
      },
      ZM = MM => [WM(MM[0]), WM(MM[1]), sM(MM[2]), WM(MM[3]), WM(MM[4]), sM(MM[5]), WM(MM[6]), WM(MM[7]), sM(MM[8])],
      oM = (MM, rM, iM) => ({
        type: MM,
        contents: rM && new Uint8Array(rM.flat(10)),
        children: iM
      }),
      fM = (MM, rM, iM, OM, SM) => oM(MM, [CM(rM), wM(iM), OM ?? []], SM),
      YM = () => oM("styp", [kM("iso5"), tM(0), kM("iso5"), kM("iso6"), kM("mp41"), kM("cmfc"), kM("dash")]),
      NM = (MM, rM) => {
        const iM = Math.max(0, MM.minWrittenTimestamp);
        let OM = Math.max(0, MM.maxWrittenEndTimestamp - iM);
        return Number.isFinite(OM) || (OM = 0), fM("sidx", 1, 0, [tM(1), tM(zi), uM(mi(iM, zi)), uM(0), eM(0), eM(1), tM(2147483647 & rM), tM(mi(OM, zi)), tM(0)])
      },
      AM = MM => ({
        type: "mdat",
        largeSize: MM
      }),
      xM = MM => oM("moov", void 0, [vM(MM.creationTime, MM.trackDatas), ...MM.trackDatas.map((rM => FM(rM, MM.creationTime))), MM.isFragmented ? pr(MM.trackDatas) : null, Br(MM)]),
      vM = (MM, rM) => {
        const iM = Math.max(0, ...rM.map((MM => Math.max(0, mi(Hi(MM), zi) + mi(MM.startTimestampOffset ?? 0, zi))))),
          OM = Math.max(0, ...rM.map((MM => MM.track.id))) + 1,
          SM = !(0, PM.Tb)(MM) || !(0, PM.Tb)(iM),
          jM = SM ? uM : tM;
        return fM("mvhd", +SM, 0, [jM(MM), jM(MM), tM(zi), jM(iM), WM(1), pM(1), Array(10).fill(0), ZM(PM.j), Array(24).fill(0), tM(OM)])
      },
      FM = (MM, rM) => {
        const iM = Li(MM),
          OM = null !== MM.startTimestampOffset && 0 !== MM.startTimestampOffset;
        return oM("trak", void 0, [BM(MM, rM), OM ? XM(MM) : null, IM(MM, rM), void 0 !== iM.name ? oM("udta", void 0, [oM("name", [...PM.id.encode(iM.name)])]) : null])
      },
      BM = (MM, rM) => {
        const iM = Math.max(0, mi(Hi(MM), zi) + mi(MM.startTimestampOffset ?? 0, zi)),
          OM = !(0, PM.Tb)(rM) || !(0, PM.Tb)(iM),
          SM = OM ? uM : tM;
        let jM;
        if ("video" === MM.type && MM.track.metadata.transformationMatrix) jM = MM.track.metadata.transformationMatrix;
        else if ("video" === MM.type) {
          const {
            rotation: rM,
            flip: iM
          } = MM.track.metadata, OM = (0, PM.pc)((0, PM.Hc)(rM ?? 0), (0, PM.Rc)(iM ? -1 : 1, 1));
          jM = (0, PM.W)(OM, MM.info.width, MM.info.height)
        } else jM = PM.j;
        let aM = 2;
        !1 !== MM.track.metadata.disposition?.default && (aM |= 1);
        const nM = "video" === MM.type ? 0 : "audio" === MM.type ? 1 : "subtitle" === MM.type ? 2 : (0, PM.G)(MM);
        return fM("tkhd", +OM, aM, [SM(rM), SM(rM), tM(MM.track.id), tM(0), SM(iM), Array(8).fill(0), eM(0), eM(nM), pM("audio" === MM.type ? 1 : 0), eM(0), ZM(jM), WM("video" === MM.type ? MM.info.width : 0), WM("video" === MM.type ? MM.info.height : 0)])
      },
      XM = MM => {
        const rM = MM.startTimestampOffset;
        if ((0, PM.J)(null !== rM), rM > 0) {
          const iM = mi(rM, zi),
            OM = mi(Hi(MM), zi),
            SM = !(0, PM.Tb)(iM) || !(0, PM.Tb)(OM),
            jM = SM ? uM : tM,
            aM = SM ? RM : gM;
          return oM("edts", void 0, [fM("elst", SM ? 1 : 0, 0, [tM(2), jM(iM), aM(-1), WM(1), jM(OM), aM(0), WM(1)])])
        } {
          const iM = mi(-rM, MM.timescale),
            OM = Math.max(0, mi(Hi(MM), zi) + mi(rM, zi)),
            SM = !(0, PM.Jb)(iM) || !(0, PM.Tb)(OM),
            jM = SM ? uM : tM,
            aM = SM ? RM : gM;
          return oM("edts", void 0, [fM("elst", SM ? 1 : 0, 0, [tM(1), jM(OM), aM(iM), WM(1)])])
        }
      },
      IM = (MM, rM) => oM("mdia", void 0, [KM(MM, rM), VM(!0, qM[MM.type], TM[MM.type]), cM(MM)]),
      KM = (MM, rM) => {
        const iM = mi(Hi(MM), MM.timescale),
          OM = !(0, PM.Tb)(rM) || !(0, PM.Tb)(iM),
          SM = OM ? uM : tM;
        return fM("mdhd", +OM, 0, [SM(rM), SM(rM), tM(MM.timescale), SM(iM), eM(ai(MM.track.metadata.languageCode ?? PM.x)), eM(0)])
      },
      qM = {
        video: "vide",
        audio: "soun",
        subtitle: "text"
      },
      TM = {
        video: "MediabunnyVideoHandler",
        audio: "MediabunnySoundHandler",
        subtitle: "MediabunnyTextHandler"
      },
      VM = function(MM, rM, iM) {
        let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "\0\0\0\0";
        return fM("hdlr", 0, 0, [MM ? kM("mhlr") : tM(0), kM(rM), kM(OM), tM(0), tM(0), kM(iM, !0)])
      },
      cM = MM => oM("minf", void 0, [Mr[MM.type](), rr(), Sr(MM)]),
      Mr = {
        video: () => fM("vmhd", 0, 1, [eM(0), eM(0), eM(0), eM(0)]),
        audio: () => fM("smhd", 0, 0, [eM(0), eM(0)]),
        subtitle: () => fM("nmhd", 0, 0)
      },
      rr = () => oM("dinf", void 0, [ir()]),
      ir = () => fM("dref", 0, 0, [tM(1)], [Or()]),
      Or = () => fM("url ", 0, 1),
      Sr = MM => {
        const rM = MM.compositionTimeOffsetTable.length > 1 || MM.compositionTimeOffsetTable.some((MM => 0 !== MM.sampleCompositionTimeOffset));
        return oM("stbl", void 0, [jr(MM), er(MM), rM ? ur(MM) : null, rM ? Rr(MM) : null, wr(MM), tr(MM), gr(MM), br(MM)])
      },
      jr = MM => {
        let rM;
        if ("video" === MM.type) rM = ar(Mi(MM.track.source._codec, MM.info.decoderConfig.codec), MM);
        else if ("audio" === MM.type) {
          const iM = ii(MM.track.source._codec, MM.info.decoderConfig.codec, MM.muxer.isQuickTime);
          (0, PM.J)(iM), rM = Lr(iM, MM)
        } else "subtitle" === MM.type && (rM = Cr(Si[MM.track.source._codec], MM));
        return (0, PM.J)(rM), fM("stsd", 0, 0, [tM(1)], [rM])
      },
      ar = (MM, rM) => oM(MM, [Array(6).fill(0), eM(1), eM(0), eM(0), Array(12).fill(0), eM(rM.info.width), eM(rM.info.height), tM(4718592), tM(4718592), tM(0), eM(1), CM(lM.d.length), kM(lM.d), Array(31 - lM.d.length).fill(0), eM(rM.info.hasAlphaChannel ? 32 : 24), bM(65535)], [ri[rM.track.source._codec]?.(rM) ?? null, nr(rM), (0, PM.eb)(rM.info.decoderConfig.colorSpace) ? null : Qr(rM), Pr(rM)]),
      Pr = MM => 0 === MM.avgBitrate && 0 === MM.maxBitrate ? null : oM("btrt", [tM(0), tM(MM.maxBitrate), tM(MM.avgBitrate)]),
      nr = MM => MM.info.pixelAspectRatio.num === MM.info.pixelAspectRatio.den ? null : oM("pasp", [tM(MM.info.pixelAspectRatio.num), tM(MM.info.pixelAspectRatio.den)]),
      Qr = MM => {
        const rM = MM.info.decoderConfig.colorSpace;
        return oM("colr", [kM(MM.muxer.isQuickTime ? "nclc" : "nclx"), eM(null != rM?.primaries ? PM.c[rM.primaries] : 2), eM(null != rM?.transfer ? PM.t[rM.transfer] : 2), eM(null != rM?.matrix ? PM.k[rM.matrix] : 2), MM.muxer.isQuickTime ? [] : CM((rM?.fullRange ? 1 : 0) << 7)])
      },
      zr = MM => {
        if (!MM.info.decoderConfig) return null;
        const rM = MM.info.decoderConfig,
          iM = rM.codec.split("."),
          OM = Number(iM[1]),
          SM = Number(iM[2]),
          jM = (Number(iM[3]) << 4) + ((iM[4] ? Number(iM[4]) : 1) << 1) + (iM[8] ? Number(iM[8]) : Number(rM.colorSpace?.fullRange ?? 0)),
          aM = iM[5] ? Number(iM[5]) : rM.colorSpace?.primaries ? PM.c[rM.colorSpace.primaries] : 1,
          nM = iM[6] ? Number(iM[6]) : rM.colorSpace?.transfer ? PM.t[rM.colorSpace.transfer] : 1,
          QM = iM[7] ? Number(iM[7]) : rM.colorSpace?.matrix ? PM.k[rM.colorSpace.matrix] : 1;
        return fM("vpcC", 1, 0, [CM(OM), CM(SM), CM(jM), CM(aM), CM(nM), CM(QM), eM(0)])
      },
      Lr = (MM, rM) => {
        let iM, OM = 0,
          jM = 16;
        const aM = SM.m.includes(rM.track.source._codec);
        if (aM) {
          const MM = rM.track.source._codec,
            {
              sampleSize: iM
            } = (0, SM.P)(MM);
          jM = 8 * iM, jM > 16 && (OM = 1)
        }
        if (rM.muxer.isQuickTime && (OM = 1), 0 === OM) iM = [Array(6).fill(0), eM(1), eM(OM), eM(0), tM(0), eM(rM.info.numberOfChannels), eM(jM), eM(0), eM(0), eM(rM.info.sampleRate < 65536 ? rM.info.sampleRate : 0), eM(0)];
        else {
          const MM = aM ? 0 : -2;
          iM = [Array(6).fill(0), eM(1), eM(OM), eM(0), tM(0), eM(rM.info.numberOfChannels), eM(Math.min(jM, 16)), bM(MM), eM(0), eM(rM.info.sampleRate < 65536 ? rM.info.sampleRate : 0), eM(0), aM ? [tM(1), tM(jM / 8), tM(rM.info.numberOfChannels * jM / 8)] : [tM(0), tM(0), tM(0)], tM(2)]
        }
        return oM(MM, iM, [Oi(rM.track.source._codec, rM.muxer.isQuickTime)?.(rM) ?? null, Pr(rM)])
      },
      mr = MM => {
        let rM;
        switch (MM.track.source._codec) {
          case "aac":
            rM = 64;
            break;
          case "mp3":
            rM = 107;
            break;
          case "vorbis":
            rM = 221;
            break;
          default:
            throw new Error(`Unhandled audio codec: ${MM.track.source._codec}`)
        }
        let iM = [...CM(rM), ...CM(21), ...wM(0), ...tM(MM.maxBitrate), ...tM(MM.avgBitrate)];
        if (MM.info.decoderConfig.description) {
          const rM = (0, PM.od)(MM.info.decoderConfig.description);
          iM = [...iM, ...CM(5), ...DM(rM.byteLength), ...rM]
        }
        return iM = [...eM(1), ...CM(0), ...CM(4), ...DM(iM.length), ...iM, ...CM(6), ...CM(1), ...CM(2)], iM = [...CM(3), ...DM(iM.length), ...iM], fM("esds", 0, 0, iM)
      },
      Hr = MM => oM("wave", void 0, [hr(MM), Jr(MM), oM("\0\0\0\0")]),
      hr = MM => oM("frma", [kM(ii(MM.track.source._codec, MM.info.decoderConfig.codec, MM.muxer.isQuickTime))]),
      Jr = MM => {
        const {
          littleEndian: rM
        } = (0, SM.P)(MM.track.source._codec);
        return oM("enda", [eM(+rM)])
      },
      dr = MM => {
        let rM = MM.info.numberOfChannels,
          iM = 3840,
          OM = MM.info.sampleRate,
          SM = 0,
          jM = 0,
          aM = new Uint8Array(0);
        const nM = MM.info.decoderConfig?.description;
        if (nM) {
          (0, PM.J)(nM.byteLength >= 18);
          const MM = (0, PM.od)(nM),
            QM = (0, JM.nb)(MM);
          rM = QM.outputChannelCount, iM = QM.preSkip, OM = QM.inputSampleRate, SM = QM.outputGain, jM = QM.channelMappingFamily, QM.channelMappingTable && (aM = QM.channelMappingTable)
        }
        return oM("dOps", [CM(0), CM(rM), eM(iM), tM(OM), bM(SM), CM(jM), ...aM])
      },
      yr = MM => {
        const rM = MM.info.decoderConfig?.description;
        (0, PM.J)(rM);
        const iM = (0, PM.od)(rM);
        return fM("dfLa", 0, 0, [...iM.subarray(4)])
      },
      lr = MM => {
        const {
          littleEndian: rM,
          sampleSize: iM
        } = (0, SM.P)(MM.track.source._codec);
        return fM("pcmC", 0, 0, [CM(+rM), CM(8 * iM)])
      },
      Er = MM => {
        (0, PM.J)(MM.info.primingPacket);
        const rM = (0, JM.cb)(MM.info.primingPacket.data);
        if (!rM) throw new Error("Couldn't extract AC-3 frame info from the audio packet. Ensure the packets contain valid AC-3 sync frames (as specified in ETSI TS 102 366).");
        const iM = new Uint8Array(3),
          OM = new dM.d(iM);
        return OM.writeBits(2, rM.fscod), OM.writeBits(5, rM.bsid), OM.writeBits(3, rM.bsmod), OM.writeBits(3, rM.acmod), OM.writeBits(1, rM.lfeon), OM.writeBits(5, rM.bitRateCode), OM.writeBits(5, 0), oM("dac3", [...iM])
      },
      Ur = MM => {
        (0, PM.J)(MM.info.primingPacket);
        const rM = (0, JM.hb)(MM.info.primingPacket.data);
        if (!rM) throw new Error("Couldn't extract E-AC-3 frame info from the audio packet. Ensure the packets contain valid E-AC-3 sync frames (as specified in ETSI TS 102 366).");
        let iM = 16;
        for (const aM of rM.substreams) iM += 23, aM.numDepSub > 0 ? iM += 9 : iM += 1;
        const OM = Math.ceil(iM / 8),
          SM = new Uint8Array(OM),
          jM = new dM.d(SM);
        jM.writeBits(13, rM.dataRate), jM.writeBits(3, rM.substreams.length - 1);
        for (const aM of rM.substreams) jM.writeBits(2, aM.fscod), jM.writeBits(5, aM.bsid), jM.writeBits(1, 0), jM.writeBits(1, 0), jM.writeBits(3, aM.bsmod), jM.writeBits(3, aM.acmod), jM.writeBits(1, aM.lfeon), jM.writeBits(3, 0), jM.writeBits(4, aM.numDepSub), aM.numDepSub > 0 ? jM.writeBits(9, aM.chanLoc) : jM.writeBits(1, 0);
        return oM("dec3", [...SM])
      },
      Gr = MM => {
        (0, PM.J)(MM.info.primingPacket);
        const rM = (0, JM.fb)(MM.info.primingPacket.data);
        if (!rM) throw new Error("Couldn't extract DTS frame info from the audio packet. Ensure the packets contain valid DTS frames as specified in ETSI TS 102 114.");
        return oM("ddts", [...(0, JM.q)(rM)])
      },
      Cr = (MM, rM) => oM(MM, [Array(6).fill(0), eM(1)], [ji[rM.track.source._codec](rM), Pr(rM)]),
      er = MM => fM("stts", 0, 0, [tM(MM.timeToSampleTable.length), MM.timeToSampleTable.map((MM => [tM(MM.sampleCount), tM(MM.sampleDelta)]))]),
      br = MM => {
        if (MM.samples.every((MM => "key" === MM.type))) return null;
        const rM = [...MM.samples.entries()].filter((MM => {
          let [, rM] = MM;
          return "key" === rM.type
        }));
        return fM("stss", 0, 0, [tM(rM.length), rM.map((MM => {
          let [rM] = MM;
          return tM(rM + 1)
        }))])
      },
      wr = MM => fM("stsc", 0, 0, [tM(MM.compactlyCodedChunkTable.length), MM.compactlyCodedChunkTable.map((MM => [tM(MM.firstChunk), tM(MM.samplesPerChunk), tM(1)]))]),
      tr = MM => {
        if ("audio" === MM.type && MM.info.requiresPcmTransformation) {
          const {
            sampleSize: rM
          } = (0, SM.P)(MM.track.source._codec);
          return fM("stsz", 0, 0, [tM(rM * MM.info.numberOfChannels), tM(MM.samples.reduce(((rM, iM) => rM + mi(iM.duration, MM.timescale)), 0))])
        }
        return fM("stsz", 0, 0, [tM(0), tM(MM.samples.length), MM.samples.map((MM => tM(MM.size)))])
      },
      gr = MM => MM.finalizedChunks.length > 0 && (0, PM.cc)(MM.finalizedChunks).offset >= 2 ** 32 ? fM("co64", 0, 0, [tM(MM.finalizedChunks.length), MM.finalizedChunks.map((MM => uM(MM.offset)))]) : fM("stco", 0, 0, [tM(MM.finalizedChunks.length), MM.finalizedChunks.map((MM => tM(MM.offset)))]),
      ur = MM => fM("ctts", 1, 0, [tM(MM.compositionTimeOffsetTable.length), MM.compositionTimeOffsetTable.map((MM => [tM(MM.sampleCount), gM(MM.sampleCompositionTimeOffset)]))]),
      Rr = MM => {
        let rM = 1 / 0,
          iM = -1 / 0,
          OM = 1 / 0,
          SM = -1 / 0;
        (0, PM.J)(MM.compositionTimeOffsetTable.length > 0), (0, PM.J)(MM.samples.length > 0);
        for (let aM = 0; aM < MM.compositionTimeOffsetTable.length; aM++) {
          const OM = MM.compositionTimeOffsetTable[aM];
          rM = Math.min(rM, OM.sampleCompositionTimeOffset), iM = Math.max(iM, OM.sampleCompositionTimeOffset)
        }
        for (let aM = 0; aM < MM.samples.length; aM++) {
          const rM = MM.samples[aM];
          OM = Math.min(OM, mi(rM.timestamp, MM.timescale)), SM = Math.max(SM, mi(rM.timestamp + rM.duration, MM.timescale))
        }
        const jM = Math.max(-rM, 0);
        return SM >= 2 ** 31 ? null : fM("cslg", 0, 0, [gM(jM), gM(rM), gM(iM), gM(OM), gM(SM)])
      },
      pr = MM => oM("mvex", void 0, MM.map(Wr)),
      Wr = MM => fM("trex", 0, 0, [tM(MM.track.id), tM(1), tM(0), tM(0), tM(0)]),
      sr = (MM, rM) => oM("moof", void 0, [Dr(MM), ...rM.map(Zr)]),
      Dr = MM => fM("mfhd", 0, 0, [tM(MM)]),
      kr = MM => {
        let rM = 0,
          iM = 0;
        const OM = "delta" === MM.type;
        return iM |= +OM, rM |= OM ? 1 : 2, rM << 24 | iM << 16
      },
      Zr = MM => oM("traf", void 0, [or(MM), fr(MM), Yr(MM)]),
      or = MM => {
        (0, PM.J)(MM.currentChunk);
        let rM = 0;
        rM |= 8, rM |= 16, rM |= 32, rM |= 131072;
        const iM = MM.currentChunk.samples[1] ?? MM.currentChunk.samples[0],
          OM = {
            duration: iM.timescaleUnitsToNextSample,
            size: iM.size,
            flags: kr(iM)
          };
        return fM("tfhd", 0, 131128, [tM(MM.track.id), tM(OM.duration), tM(OM.size), tM(OM.flags)])
      },
      fr = MM => ((0, PM.J)(MM.currentChunk), fM("tfdt", 1, 0, [uM(mi(MM.currentChunk.startTimestamp, MM.timescale))])),
      Yr = MM => {
        (0, PM.J)(MM.currentChunk);
        const rM = MM.currentChunk.samples.map((MM => MM.timescaleUnitsToNextSample)),
          iM = MM.currentChunk.samples.map((MM => MM.size)),
          OM = MM.currentChunk.samples.map(kr),
          SM = MM.currentChunk.samples.map((rM => mi(rM.timestamp - rM.decodeTimestamp, MM.timescale))),
          jM = new Set(rM),
          aM = new Set(iM),
          nM = new Set(OM),
          QM = new Set(SM),
          zM = 2 === nM.size && OM[0] !== OM[1],
          LM = jM.size > 1,
          mM = aM.size > 1,
          HM = !zM && nM.size > 1,
          hM = QM.size > 1 || [...QM].some((MM => 0 !== MM));
        let JM = 0;
        return JM |= 1, JM |= 4 * +zM, JM |= 256 * +LM, JM |= 512 * +mM, JM |= 1024 * +HM, JM |= 2048 * +hM, fM("trun", 1, JM, [tM(MM.currentChunk.samples.length), tM(MM.currentChunk.offset - MM.currentChunk.moofOffset || 0), zM ? tM(OM[0]) : [], MM.currentChunk.samples.map(((MM, jM) => [LM ? tM(rM[jM]) : [], mM ? tM(iM[jM]) : [], HM ? tM(OM[jM]) : [], hM ? gM(SM[jM]) : []]))])
      },
      Nr = MM => fM("tfra", 1, 0, [tM(MM.track.id), tM(63), tM(MM.finalizedChunks.length), MM.finalizedChunks.map((rM => [uM(mi(rM.samples[0].timestamp, MM.timescale)), uM(rM.moofOffset), tM(rM.trafIndex + 1), tM(1), tM(1)]))]),
      Ar = () => fM("mfro", 0, 0, [tM(0)]),
      xr = () => oM("vtte"),
      vr = (MM, rM, iM, OM, SM) => oM("vttc", void 0, [null !== SM ? oM("vsid", [gM(SM)]) : null, null !== iM ? oM("iden", [...PM.id.encode(iM)]) : null, null !== rM ? oM("ctim", [...PM.id.encode((0, yM.f)(rM))]) : null, null !== OM ? oM("sttg", [...PM.id.encode(OM)]) : null, oM("payl", [...PM.id.encode(MM)])]),
      Fr = MM => oM("vtta", [...PM.id.encode(MM)]),
      Br = MM => {
        const rM = [],
          iM = MM.format._options.metadataFormat ?? "auto",
          OM = MM.output._metadataTags;
        if ("mdir" === iM || "auto" === iM && !MM.isQuickTime) {
          const MM = Tr(OM);
          MM && rM.push(MM)
        } else if ("mdta" === iM) {
          const MM = Vr(OM);
          MM && rM.push(MM)
        } else("udta" === iM || "auto" === iM && MM.isQuickTime) && Xr(rM, MM.output._metadataTags);
        return 0 === rM.length ? null : oM("udta", void 0, rM)
      },
      Xr = (MM, rM) => {
        for (const {
            key: iM,
            value: OM
          }
          of(0, PM._b)(rM)) switch (iM) {
          case "title":
            MM.push(Ir("\xa9nam", OM));
            break;
          case "description":
            MM.push(Ir("\xa9des", OM));
            break;
          case "artist":
            MM.push(Ir("\xa9ART", OM));
            break;
          case "album":
            MM.push(Ir("\xa9alb", OM));
            break;
          case "albumArtist":
            MM.push(Ir("albr", OM));
            break;
          case "genre":
            MM.push(Ir("\xa9gen", OM));
            break;
          case "date":
            MM.push(Ir("\xa9day", OM.toISOString().slice(0, 10)));
            break;
          case "comment":
            MM.push(Ir("\xa9cmt", OM));
            break;
          case "lyrics":
            MM.push(Ir("\xa9lyr", OM));
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
            (0, PM.G)(iM)
        }
        if (rM.raw)
          for (const iM in rM.raw) {
            const OM = rM.raw[iM];
            null == OM || 4 !== iM.length || MM.some((MM => MM.type === iM)) || ("string" === typeof OM ? MM.push(Ir(iM, OM)) : OM instanceof Uint8Array && MM.push(oM(iM, Array.from(OM))))
          }
      },
      Ir = (MM, rM) => {
        const iM = PM.id.encode(rM);
        return oM(MM, [eM(iM.length), eM(ai("und")), Array.from(iM)])
      },
      Kr = {
        "image/jpeg": 13,
        "image/png": 14,
        "image/bmp": 27
      },
      qr = (MM, rM) => {
        const iM = [];
        for (const {
            key: OM,
            value: SM
          }
          of(0, PM._b)(MM)) switch (OM) {
          case "title":
            iM.push({
              key: rM ? "title" : "\xa9nam",
              value: cr(SM)
            });
            break;
          case "description":
            iM.push({
              key: rM ? "description" : "\xa9des",
              value: cr(SM)
            });
            break;
          case "artist":
            iM.push({
              key: rM ? "artist" : "\xa9ART",
              value: cr(SM)
            });
            break;
          case "album":
            iM.push({
              key: rM ? "album" : "\xa9alb",
              value: cr(SM)
            });
            break;
          case "albumArtist":
            iM.push({
              key: rM ? "album_artist" : "aART",
              value: cr(SM)
            });
            break;
          case "comment":
            iM.push({
              key: rM ? "comment" : "\xa9cmt",
              value: cr(SM)
            });
            break;
          case "genre":
            iM.push({
              key: rM ? "genre" : "\xa9gen",
              value: cr(SM)
            });
            break;
          case "beatsPerMinute":
            rM || iM.push({
              key: "tmpo",
              value: oM("data", [tM(21), tM(0), eM(SM)])
            });
            break;
          case "lyrics":
            iM.push({
              key: rM ? "lyrics" : "\xa9lyr",
              value: cr(SM)
            });
            break;
          case "date":
            iM.push({
              key: rM ? "date" : "\xa9day",
              value: cr(SM.toISOString().slice(0, 10))
            });
            break;
          case "images":
            for (const MM of SM) "coverFront" === MM.kind && iM.push({
              key: "covr",
              value: oM("data", [tM(Kr[MM.mimeType] ?? 0), tM(0), Array.from(MM.data)])
            });
            break;
          case "trackNumber":
            if (rM) {
              const rM = void 0 !== MM.tracksTotal ? `${SM}/${MM.tracksTotal}` : SM.toString();
              iM.push({
                key: "track",
                value: cr(rM)
              })
            } else iM.push({
              key: "trkn",
              value: oM("data", [tM(0), tM(0), eM(0), eM(SM), eM(MM.tracksTotal ?? 0), eM(0)])
            });
            break;
          case "discNumber":
            rM || iM.push({
              key: "disc",
              value: oM("data", [tM(0), tM(0), eM(0), eM(SM), eM(MM.discsTotal ?? 0), eM(0)])
            });
            break;
          case "tracksTotal":
          case "discsTotal":
          case "raw":
            break;
          default:
            (0, PM.G)(OM)
        }
        if (MM.raw)
          for (const OM in MM.raw) {
            const SM = MM.raw[OM];
            null == SM || !rM && 4 !== OM.length || iM.some((MM => MM.key === OM)) || ("string" === typeof SM ? iM.push({
              key: OM,
              value: cr(SM)
            }) : SM instanceof Uint8Array ? iM.push({
              key: OM,
              value: oM("data", [tM(0), tM(0), Array.from(SM)])
            }) : SM instanceof HM.g && iM.push({
              key: OM,
              value: oM("data", [tM(Kr[SM.mimeType] ?? 0), tM(0), Array.from(SM.data)])
            }))
          }
        return iM
      },
      Tr = MM => {
        const rM = qr(MM, !1);
        return 0 === rM.length ? null : fM("meta", 0, 0, void 0, [VM(!1, "mdir", "", "appl"), oM("ilst", void 0, rM.map((MM => oM(MM.key, void 0, [MM.value]))))])
      },
      Vr = MM => {
        const rM = qr(MM, !0);
        return 0 === rM.length ? null : oM("meta", void 0, [VM(!1, "mdta", ""), fM("keys", 0, 0, [tM(rM.length)], rM.map((MM => oM("mdta", [...PM.id.encode(MM.key)])))), oM("ilst", void 0, rM.map(((MM, rM) => {
          const iM = String.fromCharCode(...tM(rM + 1));
          return oM(iM, void 0, [MM.value])
        })))])
      },
      cr = MM => oM("data", [tM(1), tM(0), ...PM.id.encode(MM)]),
      Mi = (MM, rM) => {
        switch (MM) {
          case "avc":
            return rM.startsWith("avc3") ? "avc3" : "avc1";
          case "hevc":
            return "hvc1";
          case "vp8":
            return "vp08";
          case "vp9":
            return "vp09";
          case "av1":
            return "av01";
          case "prores":
            return rM
        }
      },
      ri = {
        avc: MM => MM.info.decoderConfig && oM("avcC", [...(0, PM.od)(MM.info.decoderConfig.description)]),
        hevc: MM => MM.info.decoderConfig && oM("hvcC", [...(0, PM.od)(MM.info.decoderConfig.description)]),
        vp8: zr,
        vp9: zr,
        av1: MM => oM("av1C", (0, SM.D)(MM.info.decoderConfig.codec)),
        prores: null
      },
      ii = (MM, rM, iM) => {
        switch (MM) {
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
            return rM
        }
        if (iM) switch (MM) {
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
        } else switch (MM) {
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
      Oi = (MM, rM) => {
        switch (MM) {
          case "aac":
          case "mp3":
          case "vorbis":
            return mr;
          case "opus":
            return dr;
          case "flac":
            return yr;
          case "ac3":
            return Er;
          case "eac3":
            return Ur;
          case "dts":
            return Gr
        }
        if (rM) switch (MM) {
          case "pcm-s24":
          case "pcm-s24be":
          case "pcm-s32":
          case "pcm-s32be":
          case "pcm-f32":
          case "pcm-f32be":
          case "pcm-f64":
          case "pcm-f64be":
            return Hr
        } else switch (MM) {
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
            return lr
        }
        return null
      },
      Si = {
        webvtt: "wvtt"
      },
      ji = {
        webvtt: MM => oM("vttC", [...PM.id.encode(MM.info.config.description)])
      },
      ai = MM => {
        (0, PM.J)(3 === MM.length);
        let rM = 0;
        for (let iM = 0; iM < 3; iM++) rM <<= 5, rM += MM.charCodeAt(iM) - 96;
        return rM
      };
    var Pi = iM(34740),
      ni = iM(34747);
    const Qi = MM => {
        const rM = MM.filePos,
          iM = zM(MM, 9),
          OM = new dM.d(iM);
        if (4095 !== OM.readBits(12)) return null;
        OM.skipBits(1);
        if (0 !== OM.readBits(2)) return null;
        const SM = OM.readBits(1),
          jM = OM.readBits(2) + 1,
          aM = OM.readBits(4);
        if (15 === aM) return null;
        OM.skipBits(1);
        const PM = OM.readBits(3);
        if (0 === PM) throw new Error("ADTS frames with channel configuration 0 are not supported.");
        OM.skipBits(1), OM.skipBits(1), OM.skipBits(1), OM.skipBits(1);
        const nM = OM.readBits(13);
        OM.skipBits(11);
        const QM = OM.readBits(2) + 1;
        if (1 !== QM) throw new Error("ADTS frames with more than one AAC frame are not supported.");
        let LM = null;
        return 1 === SM ? MM.filePos -= 2 : LM = OM.readBits(16), {
          objectType: jM,
          samplingFrequencyIndex: aM,
          channelConfiguration: PM,
          frameLength: nM,
          numberOfAacFrames: QM,
          crcCheck: LM,
          startPos: rM
        }
      },
      zi = 57600,
      Li = MM => {
        const rM = {},
          iM = MM.track;
        return void 0 !== iM.metadata.name && (rM.name = iM.metadata.name), rM
      },
      mi = function(MM, rM) {
        const iM = MM * rM;
        return !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? Math.round(iM) : iM
      },
      Hi = MM => {
        if (0 === MM.samples.length) return 0;
        let rM = 1 / 0,
          iM = -1 / 0;
        for (let OM = 0; OM < MM.samples.length; OM++) {
          const SM = MM.samples[OM];
          SM.timestamp < rM && (rM = SM.timestamp), SM.timestamp + SM.duration > iM && (iM = SM.timestamp + SM.duration)
        }
        return rM === 1 / 0 ? 0 : iM - rM
      };
    class Ji extends hM {
      constructor(MM, rM) {
        super(MM), this.writer = null, this.boxWriter = null, this.initWriter = null, this.initBoxWriter = null, this.auxTarget = new ni.b, this.auxWriter = new Pi.d(this.auxTarget, !1), this.auxBoxWriter = new EM(this.auxWriter), this.mdat = null, this.ftypSize = null, this.trackDatas = [], this.allTracksKnown = (0, PM.yc)(), this.creationTime = Math.floor(Date.now() / 1e3) + 2082844800, this.finalizedChunks = [], this.wroteFragmentedHeader = !1, this.nextFragmentNumber = 1, this.maxWrittenTimestamp = -1 / 0, this.minWrittenTimestamp = 1 / 0, this.maxWrittenEndTimestamp = -1 / 0, this.segmentHeaderSize = null, this.format = rM, this.formatOptions = {
          ...rM._options
        }, this.isQuickTime = rM instanceof Yi, this.isCmaf = rM instanceof fi, this.minimumFragmentDuration = this.formatOptions.minimumFragmentDuration ?? (rM instanceof fi ? 1 / 0 : 1), this.auxWriter.start()
      }
      async start() {
        const MM = await this.mutex.acquire();
        if (this.isCmaf ? (this.fastStart = "fragmented", this.isFragmented = !0) : (this.writer = await this.output._getRootWriter((MM => void 0 !== this.formatOptions.fastStart ? "fragmented" === this.formatOptions.fastStart : MM instanceof ni.b)), this.boxWriter = new EM(this.writer), this.fastStart = this.formatOptions.fastStart ?? (this.writer.target instanceof ni.b && "in-memory"), this.isFragmented = "fragmented" === this.fastStart), this.isCmaf) {
          if (!this.output._hasInitTarget()) throw new Error("CMAF outputs require the initTarget field in OutputOptions to be set; the init segment will be written to it.");
          const MM = await this.output._getInitTarget(),
            rM = new Pi.d(MM, !0);
          rM.start(), this.initWriter = rM, this.initBoxWriter = new EM(rM)
        }
        const rM = this.output.tracks.some((MM => MM.isVideoTrack() && "avc" === MM.source._codec));
        {
          const MM = this.initBoxWriter ?? this.boxWriter;
          if ((0, PM.J)(MM), this.formatOptions.onFtyp && MM.writer.startTrackingWrites(), MM.writeBox((MM => {
              const rM = 512;
              return MM.isQuickTime ? oM("ftyp", [kM("qt  "), tM(rM), kM("qt  ")]) : MM.fragmented ? MM.cmaf ? oM("ftyp", [kM("iso5"), tM(rM), kM("iso5"), kM("iso6"), kM("mp41"), kM("cmfc"), kM("dash")]) : oM("ftyp", [kM("iso5"), tM(rM), kM("iso5"), kM("iso6"), kM("mp41")]) : oM("ftyp", [kM("isom"), tM(rM), kM("isom"), MM.holdsAvc ? kM("avc1") : [], kM("mp41")])
            })({
              isQuickTime: this.isQuickTime,
              holdsAvc: rM,
              fragmented: this.isFragmented,
              cmaf: this.isCmaf
            })), this.formatOptions.onFtyp) {
            const {
              data: rM,
              start: iM
            } = MM.writer.stopTrackingWrites();
            this.formatOptions.onFtyp(rM, iM)
          }
          this.ftypSize = MM.writer.getPos(), this.isCmaf && await this.initWriter.flush()
        }
        if ("in-memory" === this.fastStart);
        else if ("reserve" === this.fastStart) {
          for (const iM of this.output.tracks)
            if (void 0 === iM.metadata.maximumPacketCount) throw new Error("All tracks must specify maximumPacketCount in their metadata when using fastStart: 'reserve'.")
        } else this.isFragmented || ((0, PM.J)(this.writer), (0, PM.J)(this.boxWriter), this.formatOptions.onMdat && this.writer.startTrackingWrites(), this.mdat = AM(!0), this.boxWriter.writeBox(this.mdat));
        await (this.writer?.flush());
        for (const iM of this.output.tracks) iM.isVideoTrack() && iM.metadata.decoderConfig ? this.getVideoTrackData(iM, iM.metadata.primingPacket ?? null, {
          decoderConfig: iM.metadata.decoderConfig
        }) : iM.isAudioTrack() && iM.metadata.decoderConfig && this.getAudioTrackData(iM, iM.metadata.primingPacket ?? null, {
          decoderConfig: iM.metadata.decoderConfig
        });
        MM()
      }
      allTracksAreKnown() {
        for (const MM of this.output.tracks)
          if (!MM.source._closed && !this.trackDatas.some((rM => rM.track === MM))) return !1;
        return !0
      }
      async getMimeType() {
        await this.allTracksKnown.promise;
        const MM = this.trackDatas.map((MM => {
          if ("video" === MM.type) return MM.info.decoderConfig.codec;
          if ("audio" === MM.type) return MM.info.decoderConfig.codec;
          return {
            webvtt: "wvtt"
          } [MM.track.source._codec]
        }));
        return (MM => {
          let rM = (MM.hasVideo ? "video/" : MM.hasAudio ? "audio/" : "application/") + (MM.isQuickTime ? "quicktime" : "mp4");
          MM.codecStrings.length > 0 && (rM += `; codecs="${[...new Set(MM.codecStrings)].join(", ")}"`);
          return rM
        })({
          isQuickTime: this.isQuickTime,
          hasVideo: this.trackDatas.some((MM => "video" === MM.type)),
          hasAudio: this.trackDatas.some((MM => "audio" === MM.type)),
          codecStrings: MM
        })
      }
      getVideoTrackData(MM, rM, iM) {
        const OM = this.trackDatas.find((rM => rM.track === MM));
        if (OM) return OM;
        (0, SM.Y)(iM, MM.source._codec), (0, PM.J)(iM), (0, PM.J)(iM.decoderConfig);
        const jM = {
          ...iM.decoderConfig
        };
        (0, PM.J)(void 0 !== jM.codedWidth), (0, PM.J)(void 0 !== jM.codedHeight);
        let aM = !1;
        if ("avc" !== MM.source._codec || jM.description) {
          if ("hevc" === MM.source._codec && !jM.description) {
            if (!rM) throw new Error("No HEVC description provided; you must therefore provide a priming packet.");
            const MM = (0, JM.M)(rM.data);
            if (!MM) throw new Error("Couldn't extract an HEVCDecoderConfigurationRecord from the HEVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.265) when not providing a description, or provide a description (must be an HEVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in HEVC format.");
            jM.description = (0, JM.sb)(MM), aM = !0
          }
        } else {
          if (!rM) throw new Error("No AVC description provided; you must therefore provide a priming packet.");
          const MM = (0, JM.I)(rM.data);
          if (!MM) throw new Error("Couldn't extract an AVCDecoderConfigurationRecord from the AVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.264) when not providing a description, or provide a description (must be an AVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in AVCC format.");
          jM.description = (0, JM.rb)(MM), aM = !0
        }
        const nM = (0, PM.jb)(1 / (MM.metadata.frameRate ?? zi), 1e6).den,
          QM = jM.displayAspectWidth,
          zM = jM.displayAspectHeight,
          LM = void 0 === QM || void 0 === zM ? {
            num: 1,
            den: 1
          } : (0, PM.cd)({
            num: QM * jM.codedHeight,
            den: zM * jM.codedWidth
          }),
          mM = "ap4h" === jM.codec || "ap4x" === jM.codec,
          HM = {
            muxer: this,
            track: MM,
            type: "video",
            info: {
              width: jM.codedWidth,
              height: jM.codedHeight,
              pixelAspectRatio: LM,
              decoderConfig: jM,
              requiresAnnexBTransformation: aM,
              hasAlphaChannel: mM
            },
            timescale: nM,
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
            avgBitrate: MM.source._nominalBitrate ?? MM.metadata.averageBitrate ?? 0,
            maxBitrate: MM.source._nominalBitrate ?? MM.metadata.bitrate ?? 0
          };
        return this.trackDatas.push(HM), this.trackDatas.sort(((MM, rM) => MM.track.id - rM.track.id)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), HM
      }
      getAudioTrackData(MM, rM, iM) {
        const jM = this.trackDatas.find((rM => rM.track === MM));
        if (jM) return jM;
        (0, SM.R)(iM, MM.source._codec), (0, PM.J)(iM), (0, PM.J)(iM.decoderConfig);
        const aM = {
          ...iM.decoderConfig
        };
        let QM = !1;
        if ("aac" === MM.source._codec && !aM.description) {
          if (!rM) throw new Error("No AAC description provided; you must therefore provide a priming packet.");
          const MM = Qi(nM.tempFromBytes(rM.data));
          if (!MM) throw new Error("Couldn't parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");
          const iM = OM.h[MM.samplingFrequencyIndex],
            SM = OM.e[MM.channelConfiguration];
          if (void 0 === iM || void 0 === SM) throw new Error("Invalid ADTS frame header.");
          aM.description = (0, OM.k)({
            objectType: MM.objectType,
            outputSampleRate: iM,
            outputNumberOfChannels: SM
          }), QM = !0
        }
        if (!rM) {
          if ("ac3" === MM.source._codec || "eac3" === MM.source._codec) throw new Error("AC-3/E-AC-3 require a priming packet.");
          if ("dts" === MM.source._codec) throw new Error("DTS requires a priming packet.")
        }
        const zM = {
          muxer: this,
          track: MM,
          type: "audio",
          info: {
            numberOfChannels: iM.decoderConfig.numberOfChannels,
            sampleRate: iM.decoderConfig.sampleRate,
            decoderConfig: aM,
            requiresPcmTransformation: !this.isFragmented && SM.m.includes(MM.source._codec),
            expectedNextPcmPacketTimestamp: null,
            requiresAdtsStripping: QM,
            primingPacket: rM
          },
          timescale: aM.sampleRate,
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
          avgBitrate: MM.source._nominalBitrate ?? MM.metadata.averageBitrate ?? 0,
          maxBitrate: MM.source._nominalBitrate ?? MM.metadata.bitrate ?? 0
        };
        return this.trackDatas.push(zM), this.trackDatas.sort(((MM, rM) => MM.track.id - rM.track.id)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), zM
      }
      getSubtitleTrackData(MM, rM) {
        const iM = this.trackDatas.find((rM => rM.track === MM));
        if (iM) return iM;
        (0, SM.U)(rM), (0, PM.J)(rM), (0, PM.J)(rM.config);
        const OM = {
          muxer: this,
          track: MM,
          type: "subtitle",
          info: {
            config: rM.config
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
          avgBitrate: MM.source._nominalBitrate ?? MM.metadata.averageBitrate ?? 0,
          maxBitrate: MM.source._nominalBitrate ?? MM.metadata.bitrate ?? 0,
          lastCueEndTimestamp: null,
          cueQueue: [],
          nextSourceId: 0,
          cueToSourceId: new WeakMap
        };
        return this.trackDatas.push(OM), this.trackDatas.sort(((MM, rM) => MM.track.id - rM.track.id)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), OM
      }
      async addEncodedVideoPacket(MM, rM, iM) {
        const OM = await this.mutex.acquire();
        try {
          const OM = this.getVideoTrackData(MM, rM, iM);
          let SM = rM.data;
          if (OM.info.requiresAnnexBTransformation) {
            const MM = [...(0, JM.Y)(SM)].map((MM => SM.subarray(MM.offset, MM.offset + MM.length)));
            if (0 === MM.length) throw new Error("Failed to transform packet data. Make sure all packets are provided in Annex B format, as specified in ITU-T-REC-H.264 and ITU-T-REC-H.265.");
            SM = (0, JM.s)(MM, 4)
          }
          this.validateTimestamp(OM.track, rM.timestamp, "key" === rM.type);
          const jM = this.createSampleForTrack(OM, SM, rM.timestamp, rM.duration, rM.type);
          await this.registerSample(OM, jM)
        } finally {
          OM()
        }
      }
      async addEncodedAudioPacket(MM, rM, iM) {
        const OM = await this.mutex.acquire();
        try {
          const OM = this.getAudioTrackData(MM, rM, iM);
          let jM = rM.data;
          if (OM.info.requiresAdtsStripping) {
            const MM = Qi(nM.tempFromBytes(jM));
            if (!MM) throw new Error("Expected ADTS frame, didn't get one.");
            const rM = null === MM.crcCheck ? 7 : 9;
            jM = jM.subarray(rM)
          }
          this.validateTimestamp(OM.track, rM.timestamp, "key" === rM.type);
          let aM = rM.timestamp,
            PM = rM.duration;
          if (OM.info.requiresPcmTransformation) {
            const MM = (0, SM.P)(OM.info.decoderConfig.codec).sampleSize * OM.info.numberOfChannels;
            if (PM = jM.byteLength / MM / OM.info.sampleRate, null !== OM.info.expectedNextPcmPacketTimestamp) {
              const MM = aM - OM.info.expectedNextPcmPacketTimestamp;
              if (MM < .01) aM = OM.info.expectedNextPcmPacketTimestamp;
              else {
                const rM = await this.padWithSilence(OM, OM.info.expectedNextPcmPacketTimestamp, MM);
                aM = OM.info.expectedNextPcmPacketTimestamp + rM
              }
            }
            OM.info.expectedNextPcmPacketTimestamp = aM + PM
          }
          const QM = this.createSampleForTrack(OM, jM, aM, PM, rM.type);
          await this.registerSample(OM, QM)
        } finally {
          OM()
        }
      }
      async padWithSilence(MM, rM, iM) {
        const OM = mi(iM, MM.timescale);
        if (iM = OM / MM.timescale, OM > 0) {
          const {
            sampleSize: jM,
            silentValue: aM
          } = (0, SM.P)(MM.info.decoderConfig.codec), PM = OM * MM.info.numberOfChannels, nM = new Uint8Array(jM * PM).fill(aM), QM = this.createSampleForTrack(MM, new Uint8Array(nM.buffer), rM, iM, "key");
          await this.registerSample(MM, QM)
        }
        return iM
      }
      async addSubtitleCue(MM, rM, iM) {
        const OM = await this.mutex.acquire();
        try {
          const OM = this.getSubtitleTrackData(MM, iM);
          this.validateTimestamp(OM.track, rM.timestamp, !0), "webvtt" === MM.source._codec && (OM.cueQueue.push(rM), await this.processWebVTTCues(OM, rM.timestamp))
        } finally {
          OM()
        }
      }
      async processWebVTTCues(MM, rM) {
        for (; MM.cueQueue.length > 0;) {
          MM.lastCueEndTimestamp ??= Math.min(0, MM.cueQueue[0].timestamp);
          const iM = new Set([]);
          for (const QM of MM.cueQueue)(0, PM.J)(QM.timestamp <= rM), (0, PM.J)(MM.lastCueEndTimestamp <= QM.timestamp + QM.duration), iM.add(Math.max(QM.timestamp, MM.lastCueEndTimestamp)), iM.add(QM.timestamp + QM.duration);
          const OM = [...iM].sort(((MM, rM) => MM - rM)),
            SM = OM[0],
            jM = OM[1] ?? SM;
          if (rM < jM) break;
          if (MM.lastCueEndTimestamp < SM) {
            this.auxWriter.seek(0);
            const rM = xr();
            this.auxBoxWriter.writeBox(rM);
            const iM = this.auxTarget._getSlice(0, this.auxWriter.getPos()),
              OM = this.createSampleForTrack(MM, iM, MM.lastCueEndTimestamp, SM - MM.lastCueEndTimestamp, "key");
            await this.registerSample(MM, OM), MM.lastCueEndTimestamp = SM
          }
          this.auxWriter.seek(0);
          for (let rM = 0; rM < MM.cueQueue.length; rM++) {
            const iM = MM.cueQueue[rM];
            if (iM.timestamp >= jM) break;
            yM.g.lastIndex = 0;
            const OM = yM.g.test(iM.text),
              aM = iM.timestamp + iM.duration;
            let PM = MM.cueToSourceId.get(iM);
            if (void 0 === PM && jM < aM && (PM = MM.nextSourceId++, MM.cueToSourceId.set(iM, PM)), iM.notes) {
              const MM = Fr(iM.notes);
              this.auxBoxWriter.writeBox(MM)
            }
            const nM = vr(iM.text, OM ? SM : null, iM.identifier ?? null, iM.settings ?? null, PM ?? null);
            this.auxBoxWriter.writeBox(nM), aM === jM && MM.cueQueue.splice(rM--, 1)
          }
          const aM = this.auxTarget._getSlice(0, this.auxWriter.getPos()),
            nM = this.createSampleForTrack(MM, aM, SM, jM - SM, "key");
          await this.registerSample(MM, nM), MM.lastCueEndTimestamp = jM
        }
      }
      createSampleForTrack(MM, rM, iM, OM, SM) {
        return {
          timestamp: iM,
          decodeTimestamp: iM,
          duration: OM,
          data: rM,
          size: rM.byteLength,
          type: SM,
          timescaleUnitsToNextSample: mi(OM, MM.timescale)
        }
      }
      processTimestamps(MM, rM) {
        if (0 === MM.timestampProcessingQueue.length) return;
        if ("audio" === MM.type && MM.info.requiresPcmTransformation) {
          (0, PM.J)(!this.isFragmented), MM.startTimestampOffset ??= MM.timestampProcessingQueue[0].timestamp;
          let rM = 0;
          for (let iM = 0; iM < MM.timestampProcessingQueue.length; iM++) {
            const OM = MM.timestampProcessingQueue[iM];
            rM += mi(OM.duration, MM.timescale)
          }
          if (0 === MM.timeToSampleTable.length) MM.timeToSampleTable.push({
            sampleCount: rM,
            sampleDelta: 1
          });
          else {
            (0, PM.cc)(MM.timeToSampleTable).sampleCount += rM
          }
          return void(MM.timestampProcessingQueue.length = 0)
        }
        const iM = MM.timestampProcessingQueue.map((MM => MM.timestamp)).sort(((MM, rM) => MM - rM));
        this.isFragmented ? MM.startTimestampOffset ??= Math.min(iM[0], 0) : MM.startTimestampOffset ??= iM[0];
        for (let OM = 0; OM < MM.timestampProcessingQueue.length; OM++) {
          const rM = MM.timestampProcessingQueue[OM];
          rM.decodeTimestamp = iM[OM];
          const SM = mi(rM.timestamp - rM.decodeTimestamp, MM.timescale),
            jM = mi(rM.duration, MM.timescale);
          if (null !== MM.lastTimescaleUnits) {
            (0, PM.J)(MM.lastSample);
            const iM = mi(rM.decodeTimestamp, MM.timescale, !1),
              OM = Math.round(iM - MM.lastTimescaleUnits);
            if ((0, PM.J)(OM >= 0), MM.lastTimescaleUnits += OM, MM.lastSample.timescaleUnitsToNextSample = OM, !this.isFragmented) {
              let rM = (0, PM.cc)(MM.timeToSampleTable);
              if ((0, PM.J)(rM), 1 === rM.sampleCount) {
                rM.sampleDelta = OM;
                const iM = MM.timeToSampleTable[MM.timeToSampleTable.length - 2];
                iM && iM.sampleDelta === OM && (iM.sampleCount++, MM.timeToSampleTable.pop(), rM = iM)
              } else rM.sampleDelta !== OM && (rM.sampleCount--, MM.timeToSampleTable.push(rM = {
                sampleCount: 1,
                sampleDelta: OM
              }));
              rM.sampleDelta === jM ? rM.sampleCount++ : MM.timeToSampleTable.push({
                sampleCount: 1,
                sampleDelta: jM
              });
              const iM = (0, PM.cc)(MM.compositionTimeOffsetTable);
              (0, PM.J)(iM), iM.sampleCompositionTimeOffset === SM ? iM.sampleCount++ : MM.compositionTimeOffsetTable.push({
                sampleCount: 1,
                sampleCompositionTimeOffset: SM
              })
            }
          } else MM.lastTimescaleUnits = mi(rM.decodeTimestamp, MM.timescale, !1), this.isFragmented || (MM.timeToSampleTable.push({
            sampleCount: 1,
            sampleDelta: jM
          }), MM.compositionTimeOffsetTable.push({
            sampleCount: 1,
            sampleCompositionTimeOffset: SM
          }));
          MM.lastSample = rM
        }
        if (MM.timestampProcessingQueue.length = 0, (0, PM.J)(MM.lastSample), (0, PM.J)(null !== MM.lastTimescaleUnits), void 0 !== rM && 0 === MM.lastSample.timescaleUnitsToNextSample) {
          (0, PM.J)("key" === rM.type);
          const iM = mi(rM.timestamp, MM.timescale, !1),
            OM = Math.round(iM - MM.lastTimescaleUnits);
          MM.lastSample.timescaleUnitsToNextSample = OM
        }
      }
      async registerSample(MM, rM) {
        "key" === rM.type && this.processTimestamps(MM, rM), MM.timestampProcessingQueue.push(rM), this.isFragmented ? (MM.sampleQueue.push(rM), await this.interleaveSamples()) : "reserve" === this.fastStart ? await this.registerSampleFastStartReserve(MM, rM) : await this.addSampleToTrack(MM, rM)
      }
      async addSampleToTrack(MM, rM) {
        if (!this.isFragmented && (MM.samples.push(rM), "reserve" === this.fastStart)) {
          const rM = MM.track.metadata.maximumPacketCount;
          if ((0, PM.J)(void 0 !== rM), MM.samples.length > rM) throw new Error(`Track #${MM.track.id} has already reached the maximum packet count (${rM}). Either add less packets or increase the maximum packet count.`)
        }
        let iM = !1;
        if (MM.currentChunk) {
          MM.currentChunk.startTimestamp = Math.min(MM.currentChunk.startTimestamp, rM.timestamp);
          const OM = rM.timestamp - MM.currentChunk.startTimestamp;
          if (this.isFragmented) {
            const SM = this.trackDatas.every((iM => {
              if (MM === iM) return "key" === rM.type;
              const OM = iM.sampleQueue[0];
              return OM ? "key" === OM.type : iM.closed
            }));
            OM >= this.minimumFragmentDuration && SM && rM.timestamp > this.maxWrittenTimestamp && (iM = !0, await this.finalizeFragment())
          } else iM = OM >= .5
        } else iM = !0;
        iM && (MM.currentChunk && await this.finalizeCurrentChunk(MM), MM.currentChunk = {
          startTimestamp: rM.timestamp,
          samples: [],
          offset: null,
          moofOffset: null,
          trafIndex: null
        }), (0, PM.J)(MM.currentChunk), MM.currentChunk.samples.push(rM), this.isFragmented && (this.maxWrittenTimestamp = Math.max(this.maxWrittenTimestamp, rM.timestamp), this.maxWrittenEndTimestamp = Math.max(this.maxWrittenEndTimestamp, rM.timestamp + rM.duration), this.minWrittenTimestamp = Math.min(this.minWrittenTimestamp, rM.timestamp))
      }
      async finalizeCurrentChunk(MM) {
        if ((0, PM.J)(!this.isFragmented), (0, PM.J)(this.writer), !MM.currentChunk) return;
        MM.finalizedChunks.push(MM.currentChunk), this.finalizedChunks.push(MM.currentChunk);
        let rM = MM.currentChunk.samples.length;
        if ("audio" === MM.type && MM.info.requiresPcmTransformation && (rM = MM.currentChunk.samples.reduce(((rM, iM) => rM + mi(iM.duration, MM.timescale)), 0)), 0 !== MM.compactlyCodedChunkTable.length && (0, PM.cc)(MM.compactlyCodedChunkTable).samplesPerChunk === rM || MM.compactlyCodedChunkTable.push({
            firstChunk: MM.finalizedChunks.length,
            samplesPerChunk: rM
          }), "in-memory" !== this.fastStart) {
          MM.currentChunk.offset = this.writer.getPos();
          for (const rM of MM.currentChunk.samples)(0, PM.J)(rM.data), this.writer.write(rM.data), rM.data = null;
          await this.writer.flush()
        } else MM.currentChunk.offset = 0
      }
      async interleaveSamples() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if ((0, PM.J)(this.isFragmented), MM || this.allTracksAreKnown()) MM: for (;;) {
          let rM = null,
            iM = 1 / 0;
          for (const SM of this.trackDatas) {
            if (!MM && 0 === SM.sampleQueue.length && !SM.closed) break MM;
            SM.sampleQueue.length > 0 && SM.sampleQueue[0].timestamp < iM && (rM = SM, iM = SM.sampleQueue[0].timestamp)
          }
          if (!rM) break;
          const OM = rM.sampleQueue.shift();
          await this.addSampleToTrack(rM, OM)
        }
      }
      async finalizeFragment() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : !this.isCmaf;
        if ((0, PM.J)(this.isFragmented), !this.wroteFragmentedHeader) {
          this.wroteFragmentedHeader = !0;
          const MM = this.initBoxWriter ?? this.boxWriter;
          (0, PM.J)(MM), this.formatOptions.onMoov && MM.writer.startTrackingWrites(), this.ensureOneEnabledTrack();
          const rM = xM(this);
          if (MM.writeBox(rM), this.formatOptions.onMoov) {
            const {
              data: rM,
              start: iM
            } = MM.writer.stopTrackingWrites();
            this.formatOptions.onMoov(rM, iM)
          }
          if (this.isCmaf) {
            (0, PM.J)(this.initWriter), await this.initWriter.flush(), await this.initWriter.finalize(), this.writer = await this.output._getRootWriter(!0), this.boxWriter = new EM(this.writer);
            const MM = this.boxWriter.measureBox(YM()),
              rM = this.boxWriter.measureBox(NM(this, 0));
            this.segmentHeaderSize = MM + rM, this.writer.seek(this.segmentHeaderSize)
          }
        }(0, PM.J)(this.writer), (0, PM.J)(this.boxWriter);
        const rM = this.trackDatas.filter((MM => MM.currentChunk));
        if (0 === rM.length) return void(MM && await this.writer.flush());
        const iM = this.nextFragmentNumber++,
          OM = sr(iM, rM),
          SM = this.writer.getPos(),
          jM = SM + this.boxWriter.measureBox(OM);
        let aM = jM + 8,
          nM = 1 / 0;
        for (let HM = 0; HM < rM.length; HM++) {
          const MM = rM[HM];
          (0, PM.J)(MM.currentChunk), (0, PM.J)(null !== MM.startTimestampOffset), MM.currentChunk.offset = aM, MM.currentChunk.moofOffset = SM, MM.currentChunk.trafIndex = HM, MM.currentChunk.startTimestamp -= MM.startTimestampOffset;
          for (const rM of MM.currentChunk.samples) aM += rM.size, rM.timestamp -= MM.startTimestampOffset, rM.decodeTimestamp -= MM.startTimestampOffset;
          nM = Math.min(nM, MM.currentChunk.startTimestamp)
        }
        const QM = aM - jM,
          zM = QM >= 2 ** 32;
        if (zM)
          for (const PM of rM) PM.currentChunk.offset += 8;
        this.formatOptions.onMoof && this.writer.startTrackingWrites();
        const LM = sr(iM, rM);
        if (this.boxWriter.writeBox(LM), this.formatOptions.onMoof) {
          const {
            data: MM,
            start: rM
          } = this.writer.stopTrackingWrites();
          this.formatOptions.onMoof(MM, rM, nM)
        }(0, PM.J)(this.writer.getPos() === jM), this.formatOptions.onMdat && this.writer.startTrackingWrites();
        const mM = AM(zM);
        mM.size = QM, this.boxWriter.writeBox(mM), this.writer.seek(jM + (zM ? 16 : 8));
        for (const PM of rM)
          for (const MM of PM.currentChunk.samples) this.writer.write(MM.data), MM.data = null;
        if (this.formatOptions.onMdat) {
          const {
            data: MM,
            start: rM
          } = this.writer.stopTrackingWrites();
          this.formatOptions.onMdat(MM, rM)
        }
        for (const PM of rM) PM.finalizedChunks.push(PM.currentChunk), this.finalizedChunks.push(PM.currentChunk), PM.currentChunk = null;
        MM && await this.writer.flush()
      }
      async registerSampleFastStartReserve(MM, rM) {
        this.allTracksAreKnown() ? (this.mdat || await this.createFastStartReserveMdat(), await this.addSampleToTrack(MM, rM)) : MM.sampleQueue.push(rM)
      }
      async createFastStartReserveMdat() {
        (0, PM.J)(this.writer), (0, PM.J)(this.boxWriter), this.ensureOneEnabledTrack();
        const MM = xM(this),
          rM = this.boxWriter.measureBox(MM) + this.computeSampleTableSizeUpperBound() + 4096;
        (0, PM.J)(null !== this.ftypSize), this.writer.seek(this.ftypSize + rM), this.formatOptions.onMdat && this.writer.startTrackingWrites(), this.mdat = AM(!0), this.boxWriter.writeBox(this.mdat);
        for (const iM of this.trackDatas) {
          for (const MM of iM.sampleQueue) await this.addSampleToTrack(iM, MM);
          iM.sampleQueue.length = 0
        }
      }
      computeSampleTableSizeUpperBound() {
        (0, PM.J)("reserve" === this.fastStart);
        let MM = 0;
        for (const rM of this.trackDatas) {
          const iM = rM.track.metadata.maximumPacketCount;
          (0, PM.J)(void 0 !== iM), MM += 8 * Math.ceil(2 / 3 * iM), MM += 4 * iM, MM += 8 * Math.ceil(2 / 3 * iM), MM += 12 * Math.ceil(2 / 3 * iM), MM += 4 * iM, MM += 8 * iM
        }
        return MM
      }
      async onTrackClose(MM) {
        const rM = await this.mutex.acquire(),
          iM = this.trackDatas.find((rM => rM.track === MM));
        iM && (iM.closed = !0, "subtitle" === iM.type && "webvtt" === MM.source._codec && await this.processWebVTTCues(iM, 1 / 0), this.processTimestamps(iM)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), this.isFragmented && await this.interleaveSamples(), rM()
      }
      ensureOneEnabledTrack() {
        for (const MM of ["video", "audio", "subtitle"]) {
          const rM = this.trackDatas.filter((rM => rM.type === MM));
          if (0 === rM.length) continue;
          if (!rM.some((MM => !1 !== MM.track.metadata.disposition?.default))) {
            const MM = rM[0];
            MM.track.metadata.disposition = {
              ...MM.track.metadata.disposition,
              default: !0
            }
          }
        }
      }
      async forceFragmentFinalization() {
        (0, PM.J)(this.isFragmented);
        const MM = await this.mutex.acquire();
        try {
          for (const MM of this.trackDatas) "subtitle" === MM.type && "webvtt" === MM.track.source._codec && await this.processWebVTTCues(MM, 1 / 0), this.processTimestamps(MM);
          await this.interleaveSamples(!0), await this.finalizeFragment()
        } finally {
          MM()
        }
      }
      async finalize() {
        const MM = await this.mutex.acquire();
        this.allTracksKnown.resolve(), this.ensureOneEnabledTrack(), this.mdat || "reserve" !== this.fastStart || await this.createFastStartReserveMdat();
        for (const iM of this.trackDatas) iM.closed = !0, "subtitle" === iM.type && "webvtt" === iM.track.source._codec && await this.processWebVTTCues(iM, 1 / 0), this.processTimestamps(iM);
        if (this.isFragmented) await this.interleaveSamples(!0), await this.finalizeFragment(!1);
        else
          for (const iM of this.trackDatas) {
            await this.finalizeCurrentChunk(iM);
            const MM = Hi(iM);
            if (MM > 0) {
              let rM = 0;
              for (const MM of iM.samples) rM += MM.size;
              iM.avgBitrate = Math.round(8 * rM / MM)
            } else iM.avgBitrate = 0;
            let rM = 0,
              OM = 0,
              SM = 0;
            for (let jM = 0; jM < iM.samples.length; jM++) {
              const MM = iM.samples[jM];
              for (OM += MM.size; MM.decodeTimestamp - iM.samples[rM].decodeTimestamp >= 1;) OM -= iM.samples[rM].size, rM++;
              SM = Math.max(SM, OM)
            }
            if (iM.maxBitrate = 8 * SM, null !== iM.startTimestampOffset)
              for (let jM = 0; jM < iM.samples.length; jM++) {
                const MM = iM.samples[jM];
                MM.timestamp -= iM.startTimestampOffset, MM.decodeTimestamp -= iM.startTimestampOffset
              }
          }
        if ((0, PM.J)(this.writer), (0, PM.J)(this.boxWriter), "in-memory" === this.fastStart) {
          let MM;
          this.mdat = AM(!1);
          for (let iM = 0; iM < 2; iM++) {
            const rM = xM(this),
              iM = this.boxWriter.measureBox(rM);
            MM = this.boxWriter.measureBox(this.mdat);
            let OM = this.writer.getPos() + iM + MM;
            for (const SM of this.finalizedChunks) {
              SM.offset = OM;
              for (const {
                  data: rM
                }
                of SM.samples)(0, PM.J)(rM), OM += rM.byteLength, MM += rM.byteLength
            }
            if (OM < 2 ** 32) break;
            MM >= 2 ** 32 && (this.mdat.largeSize = !0)
          }
          this.formatOptions.onMoov && this.writer.startTrackingWrites();
          const rM = xM(this);
          if (this.boxWriter.writeBox(rM), this.formatOptions.onMoov) {
            const {
              data: MM,
              start: rM
            } = this.writer.stopTrackingWrites();
            this.formatOptions.onMoov(MM, rM)
          }
          this.formatOptions.onMdat && this.writer.startTrackingWrites(), this.mdat.size = MM, this.boxWriter.writeBox(this.mdat);
          for (const iM of this.finalizedChunks)
            for (const MM of iM.samples)(0, PM.J)(MM.data), this.writer.write(MM.data), MM.data = null;
          if (this.formatOptions.onMdat) {
            const {
              data: MM,
              start: rM
            } = this.writer.stopTrackingWrites();
            this.formatOptions.onMdat(MM, rM)
          }
        } else if (this.isFragmented)
          if (this.isCmaf) {
            const MM = null !== this.segmentHeaderSize ? this.writer.getPos() - this.segmentHeaderSize : 0;
            this.writer.seek(0), this.boxWriter.writeBox(YM()), this.boxWriter.writeBox(NM(this, MM))
          } else {
            const MM = this.writer.getPos(),
              iM = (rM = this.trackDatas, oM("mfra", void 0, [...rM.map(Nr), Ar()]));
            this.boxWriter.writeBox(iM);
            const OM = this.writer.getPos() - MM;
            this.writer.seek(this.writer.getPos() - 4), this.boxWriter.writeU32(OM)
          }
        else {
          (0, PM.J)(this.mdat);
          const MM = this.boxWriter.offsets.get(this.mdat);
          (0, PM.J)(void 0 !== MM);
          const rM = this.writer.getPos() - MM;
          if (this.mdat.size = rM, this.mdat.largeSize = rM >= 2 ** 32, this.boxWriter.patchBox(this.mdat), this.formatOptions.onMdat) {
            const {
              data: MM,
              start: rM
            } = this.writer.stopTrackingWrites();
            this.formatOptions.onMdat(MM, rM)
          }
          const iM = xM(this);
          if ("reserve" === this.fastStart) {
            (0, PM.J)(null !== this.ftypSize), this.writer.seek(this.ftypSize), this.formatOptions.onMoov && this.writer.startTrackingWrites(), this.boxWriter.writeBox(iM);
            const MM = this.boxWriter.offsets.get(this.mdat) - this.writer.getPos();
            this.boxWriter.writeBox({
              type: "free",
              size: MM
            })
          } else this.formatOptions.onMoov && this.writer.startTrackingWrites(), this.boxWriter.writeBox(iM);
          if (this.formatOptions.onMoov) {
            const {
              data: MM,
              start: rM
            } = this.writer.stopTrackingWrites();
            this.formatOptions.onMoov(MM, rM)
          }
        }
        var rM;
        MM()
      }
    }
    class di {
      constructor(MM) {
        this.value = MM
      }
    }
    class yi {
      constructor(MM) {
        this.value = MM
      }
    }
    class li {
      constructor(MM) {
        this.value = MM
      }
    }
    class Ei {
      constructor(MM) {
        this.value = MM
      }
    }
    var Ui;
    ! function(MM) {
      MM[MM.EBML = 440786851] = "EBML", MM[MM.EBMLVersion = 17030] = "EBMLVersion", MM[MM.EBMLReadVersion = 17143] = "EBMLReadVersion", MM[MM.EBMLMaxIDLength = 17138] = "EBMLMaxIDLength", MM[MM.EBMLMaxSizeLength = 17139] = "EBMLMaxSizeLength", MM[MM.DocType = 17026] = "DocType", MM[MM.DocTypeVersion = 17031] = "DocTypeVersion", MM[MM.DocTypeReadVersion = 17029] = "DocTypeReadVersion", MM[MM.Void = 236] = "Void", MM[MM.Segment = 408125543] = "Segment", MM[MM.SeekHead = 290298740] = "SeekHead", MM[MM.Seek = 19899] = "Seek", MM[MM.SeekID = 21419] = "SeekID", MM[MM.SeekPosition = 21420] = "SeekPosition", MM[MM.Duration = 17545] = "Duration", MM[MM.Info = 357149030] = "Info", MM[MM.TimestampScale = 2807729] = "TimestampScale", MM[MM.MuxingApp = 19840] = "MuxingApp", MM[MM.WritingApp = 22337] = "WritingApp", MM[MM.Tracks = 374648427] = "Tracks", MM[MM.TrackEntry = 174] = "TrackEntry", MM[MM.TrackNumber = 215] = "TrackNumber", MM[MM.TrackUID = 29637] = "TrackUID", MM[MM.TrackType = 131] = "TrackType", MM[MM.FlagEnabled = 185] = "FlagEnabled", MM[MM.FlagDefault = 136] = "FlagDefault", MM[MM.FlagForced = 21930] = "FlagForced", MM[MM.FlagOriginal = 21934] = "FlagOriginal", MM[MM.FlagHearingImpaired = 21931] = "FlagHearingImpaired", MM[MM.FlagVisualImpaired = 21932] = "FlagVisualImpaired", MM[MM.FlagCommentary = 21935] = "FlagCommentary", MM[MM.FlagLacing = 156] = "FlagLacing", MM[MM.Name = 21358] = "Name", MM[MM.Language = 2274716] = "Language", MM[MM.LanguageBCP47 = 2274717] = "LanguageBCP47", MM[MM.CodecID = 134] = "CodecID", MM[MM.CodecPrivate = 25506] = "CodecPrivate", MM[MM.CodecDelay = 22186] = "CodecDelay", MM[MM.SeekPreRoll = 22203] = "SeekPreRoll", MM[MM.DefaultDuration = 2352003] = "DefaultDuration", MM[MM.Video = 224] = "Video", MM[MM.PixelWidth = 176] = "PixelWidth", MM[MM.PixelHeight = 186] = "PixelHeight", MM[MM.DisplayWidth = 21680] = "DisplayWidth", MM[MM.DisplayHeight = 21690] = "DisplayHeight", MM[MM.DisplayUnit = 21682] = "DisplayUnit", MM[MM.AlphaMode = 21440] = "AlphaMode", MM[MM.Audio = 225] = "Audio", MM[MM.SamplingFrequency = 181] = "SamplingFrequency", MM[MM.Channels = 159] = "Channels", MM[MM.BitDepth = 25188] = "BitDepth", MM[MM.SimpleBlock = 163] = "SimpleBlock", MM[MM.BlockGroup = 160] = "BlockGroup", MM[MM.Block = 161] = "Block", MM[MM.BlockAdditions = 30113] = "BlockAdditions", MM[MM.BlockMore = 166] = "BlockMore", MM[MM.BlockAdditional = 165] = "BlockAdditional", MM[MM.BlockAddID = 238] = "BlockAddID", MM[MM.BlockDuration = 155] = "BlockDuration", MM[MM.ReferenceBlock = 251] = "ReferenceBlock", MM[MM.Cluster = 524531317] = "Cluster", MM[MM.Timestamp = 231] = "Timestamp", MM[MM.Cues = 475249515] = "Cues", MM[MM.CuePoint = 187] = "CuePoint", MM[MM.CueTime = 179] = "CueTime", MM[MM.CueTrackPositions = 183] = "CueTrackPositions", MM[MM.CueTrack = 247] = "CueTrack", MM[MM.CueClusterPosition = 241] = "CueClusterPosition", MM[MM.Colour = 21936] = "Colour", MM[MM.MatrixCoefficients = 21937] = "MatrixCoefficients", MM[MM.TransferCharacteristics = 21946] = "TransferCharacteristics", MM[MM.Primaries = 21947] = "Primaries", MM[MM.Range = 21945] = "Range", MM[MM.Projection = 30320] = "Projection", MM[MM.ProjectionType = 30321] = "ProjectionType", MM[MM.ProjectionPoseYaw = 30323] = "ProjectionPoseYaw", MM[MM.ProjectionPosePitch = 30324] = "ProjectionPosePitch", MM[MM.ProjectionPoseRoll = 30325] = "ProjectionPoseRoll", MM[MM.Attachments = 423732329] = "Attachments", MM[MM.AttachedFile = 24999] = "AttachedFile", MM[MM.FileDescription = 18046] = "FileDescription", MM[MM.FileName = 18030] = "FileName", MM[MM.FileMediaType = 18016] = "FileMediaType", MM[MM.FileData = 18012] = "FileData", MM[MM.FileUID = 18094] = "FileUID", MM[MM.Chapters = 272869232] = "Chapters", MM[MM.Tags = 307544935] = "Tags", MM[MM.Tag = 29555] = "Tag", MM[MM.Targets = 25536] = "Targets", MM[MM.TargetTypeValue = 26826] = "TargetTypeValue", MM[MM.TargetType = 25546] = "TargetType", MM[MM.TagTrackUID = 25541] = "TagTrackUID", MM[MM.TagEditionUID = 25545] = "TagEditionUID", MM[MM.TagChapterUID = 25540] = "TagChapterUID", MM[MM.TagAttachmentUID = 25542] = "TagAttachmentUID", MM[MM.SimpleTag = 26568] = "SimpleTag", MM[MM.TagName = 17827] = "TagName", MM[MM.TagLanguage = 17530] = "TagLanguage", MM[MM.TagString = 17543] = "TagString", MM[MM.TagBinary = 17541] = "TagBinary", MM[MM.ContentEncodings = 28032] = "ContentEncodings", MM[MM.ContentEncoding = 25152] = "ContentEncoding", MM[MM.ContentEncodingOrder = 20529] = "ContentEncodingOrder", MM[MM.ContentEncodingScope = 20530] = "ContentEncodingScope", MM[MM.ContentCompression = 20532] = "ContentCompression", MM[MM.ContentCompAlgo = 16980] = "ContentCompAlgo", MM[MM.ContentCompSettings = 16981] = "ContentCompSettings", MM[MM.ContentEncryption = 20533] = "ContentEncryption"
    }(Ui || (Ui = {}));
    Ui.EBML, Ui.Segment, Ui.SeekHead, Ui.Info, Ui.Cluster, Ui.Tracks, Ui.Cues, Ui.Attachments, Ui.Chapters, Ui.Tags;
    const Gi = MM => MM < 256 ? 1 : MM < 65536 ? 2 : MM < 1 << 24 ? 3 : MM < 2 ** 32 ? 4 : MM < 2 ** 40 ? 5 : 6,
      Ci = MM => MM < 256n ? 1 : MM < 65536n ? 2 : MM < 1n << 24n ? 3 : MM < 1n << 32n ? 4 : MM < 1n << 40n ? 5 : MM < 1n << 48n ? 6 : MM < 1n << 56n ? 7 : 8,
      ei = MM => MM >= -64 && MM < 64 ? 1 : MM >= -8192 && MM < 8192 ? 2 : MM >= -1048576 && MM < 1 << 20 ? 3 : MM >= -(1 << 27) && MM < 1 << 27 ? 4 : MM >= -(2 ** 34) && MM < 2 ** 34 ? 5 : 6;
    class bi {
      constructor(MM) {
        this.writer = MM, this.helper = new Uint8Array(8), this.helperView = new DataView(this.helper.buffer), this.offsets = new WeakMap, this.dataOffsets = new WeakMap
      }
      writeByte(MM) {
        this.helperView.setUint8(0, MM), this.writer.write(this.helper.subarray(0, 1))
      }
      writeFloat32(MM) {
        this.helperView.setFloat32(0, MM, !1), this.writer.write(this.helper.subarray(0, 4))
      }
      writeFloat64(MM) {
        this.helperView.setFloat64(0, MM, !1), this.writer.write(this.helper)
      }
      writeUnsignedInt(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Gi(MM),
          iM = 0;
        switch (rM) {
          case 6:
            this.helperView.setUint8(iM++, MM / 2 ** 40 | 0);
          case 5:
            this.helperView.setUint8(iM++, MM / 2 ** 32 | 0);
          case 4:
            this.helperView.setUint8(iM++, MM >> 24);
          case 3:
            this.helperView.setUint8(iM++, MM >> 16);
          case 2:
            this.helperView.setUint8(iM++, MM >> 8);
          case 1:
            this.helperView.setUint8(iM++, MM);
            break;
          default:
            throw new Error("Bad unsigned int size " + rM)
        }
        this.writer.write(this.helper.subarray(0, iM))
      }
      writeUnsignedBigInt(MM) {
        let rM = 0;
        for (let iM = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ci(MM)) - 1; iM >= 0; iM--) this.helperView.setUint8(rM++, Number(MM >> BigInt(8 * iM) & 0xffn));
        this.writer.write(this.helper.subarray(0, rM))
      }
      writeSignedInt(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei(MM);
        MM < 0 && (MM += 2 ** (8 * rM)), this.writeUnsignedInt(MM, rM)
      }
      writeVarInt(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (MM => {
            if (MM < 127) return 1;
            if (MM < 16383) return 2;
            if (MM < 2097151) return 3;
            if (MM < 268435455) return 4;
            if (MM < 2 ** 35 - 1) return 5;
            if (MM < 2 ** 42 - 1) return 6;
            throw new Error("EBML varint size not supported " + MM)
          })(MM),
          iM = 0;
        switch (rM) {
          case 1:
            this.helperView.setUint8(iM++, 128 | MM);
            break;
          case 2:
            this.helperView.setUint8(iM++, 64 | MM >> 8), this.helperView.setUint8(iM++, MM);
            break;
          case 3:
            this.helperView.setUint8(iM++, 32 | MM >> 16), this.helperView.setUint8(iM++, MM >> 8), this.helperView.setUint8(iM++, MM);
            break;
          case 4:
            this.helperView.setUint8(iM++, 16 | MM >> 24), this.helperView.setUint8(iM++, MM >> 16), this.helperView.setUint8(iM++, MM >> 8), this.helperView.setUint8(iM++, MM);
            break;
          case 5:
            this.helperView.setUint8(iM++, 8 | MM / 2 ** 32 & 7), this.helperView.setUint8(iM++, MM >> 24), this.helperView.setUint8(iM++, MM >> 16), this.helperView.setUint8(iM++, MM >> 8), this.helperView.setUint8(iM++, MM);
            break;
          case 6:
            this.helperView.setUint8(iM++, 4 | MM / 2 ** 40 & 3), this.helperView.setUint8(iM++, MM / 2 ** 32 | 0), this.helperView.setUint8(iM++, MM >> 24), this.helperView.setUint8(iM++, MM >> 16), this.helperView.setUint8(iM++, MM >> 8), this.helperView.setUint8(iM++, MM);
            break;
          default:
            throw new Error("Bad EBML varint size " + rM)
        }
        this.writer.write(this.helper.subarray(0, iM))
      }
      writeAsciiString(MM) {
        this.writer.write(new Uint8Array(MM.split("").map((MM => MM.charCodeAt(0)))))
      }
      writeEBML(MM) {
        if (null !== MM)
          if (MM instanceof Uint8Array) this.writer.write(MM);
          else if (Array.isArray(MM))
          for (const rM of MM) this.writeEBML(rM);
        else if (this.offsets.set(MM, this.writer.getPos()), this.writeUnsignedInt(MM.id), Array.isArray(MM.data)) {
          const rM = this.writer.getPos(),
            iM = -1 === MM.size ? 1 : MM.size ?? 4; - 1 === MM.size ? this.writeByte(255) : this.writer.seek(this.writer.getPos() + iM);
          const OM = this.writer.getPos();
          if (this.dataOffsets.set(MM, OM), this.writeEBML(MM.data), -1 !== MM.size) {
            const MM = this.writer.getPos() - OM,
              SM = this.writer.getPos();
            this.writer.seek(rM), this.writeVarInt(MM, iM), this.writer.seek(SM)
          }
        } else if ("number" === typeof MM.data) {
          const rM = MM.size ?? Gi(MM.data);
          this.writeVarInt(rM), this.writeUnsignedInt(MM.data, rM)
        } else if ("bigint" === typeof MM.data) {
          const rM = MM.size ?? Ci(MM.data);
          this.writeVarInt(rM), this.writeUnsignedBigInt(MM.data, rM)
        } else if ("string" === typeof MM.data) this.writeVarInt(MM.data.length), this.writeAsciiString(MM.data);
        else if (MM.data instanceof Uint8Array) this.writeVarInt(MM.data.byteLength, MM.size), this.writer.write(MM.data);
        else if (MM.data instanceof di) this.writeVarInt(4), this.writeFloat32(MM.data.value);
        else if (MM.data instanceof yi) this.writeVarInt(8), this.writeFloat64(MM.data.value);
        else if (MM.data instanceof li) {
          const rM = MM.size ?? ei(MM.data.value);
          this.writeVarInt(rM), this.writeSignedInt(MM.data.value, rM)
        } else if (MM.data instanceof Ei) {
          const rM = PM.id.encode(MM.data.value);
          this.writeVarInt(rM.length), this.writer.write(rM)
        } else(0, PM.G)(MM.data)
      }
    }
    const wi = {
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
    const ti = {
      video: 1,
      audio: 2,
      subtitle: 17
    };
    class gi extends hM {
      constructor(MM, rM) {
        super(MM), this.trackDatas = [], this.allTracksKnown = (0, PM.yc)(), this.segment = null, this.segmentInfo = null, this.seekHead = null, this.tracksElement = null, this.tagsElement = null, this.attachmentsElement = null, this.segmentDuration = null, this.cues = null, this.currentCluster = null, this.currentClusterStartMsTimestamp = null, this.currentClusterMaxMsTimestamp = null, this.trackDatasInCurrentCluster = new Map, this.startTimestamp = 1 / 0, this.endTimestamp = -1 / 0, this.warnedAboutTooNegativeTimestamp = !1, this.format = rM
      }
      async start() {
        const MM = await this.mutex.acquire();
        this.writer = await this.output._getRootWriter(!!this.format._options.appendOnly), this.ebmlWriter = new bi(this.writer), this.writeEBMLHeader(), this.createSegmentInfo(), this.createCues(), await this.writer.flush();
        for (const rM of this.output.tracks) rM.isVideoTrack() && rM.metadata.decoderConfig ? this.getVideoTrackData(rM, rM.metadata.primingPacket ?? null, {
          decoderConfig: rM.metadata.decoderConfig
        }) : rM.isAudioTrack() && rM.metadata.decoderConfig && this.getAudioTrackData(rM, rM.metadata.primingPacket ?? null, {
          decoderConfig: rM.metadata.decoderConfig
        });
        MM()
      }
      writeEBMLHeader() {
        this.format._options.onEbmlHeader && this.writer.startTrackingWrites();
        const MM = {
          id: Ui.EBML,
          data: [{
            id: Ui.EBMLVersion,
            data: 1
          }, {
            id: Ui.EBMLReadVersion,
            data: 1
          }, {
            id: Ui.EBMLMaxIDLength,
            data: 4
          }, {
            id: Ui.EBMLMaxSizeLength,
            data: 8
          }, {
            id: Ui.DocType,
            data: this.format instanceof Ai ? "webm" : "matroska"
          }, {
            id: Ui.DocTypeVersion,
            data: 4
          }, {
            id: Ui.DocTypeReadVersion,
            data: 2
          }]
        };
        if (this.ebmlWriter.writeEBML(MM), this.format._options.onEbmlHeader) {
          const {
            data: MM,
            start: rM
          } = this.writer.stopTrackingWrites();
          this.format._options.onEbmlHeader(MM, rM)
        }
      }
      maybeCreateSeekHead(MM) {
        if (this.format._options.appendOnly) return;
        const rM = new Uint8Array([28, 83, 187, 107]),
          iM = new Uint8Array([21, 73, 169, 102]),
          OM = new Uint8Array([22, 84, 174, 107]),
          SM = new Uint8Array([25, 65, 164, 105]),
          jM = new Uint8Array([18, 84, 195, 103]),
          aM = {
            id: Ui.SeekHead,
            data: [{
              id: Ui.Seek,
              data: [{
                id: Ui.SeekID,
                data: iM
              }, {
                id: Ui.SeekPosition,
                size: 5,
                data: MM ? this.ebmlWriter.offsets.get(this.segmentInfo) - this.segmentDataOffset : 0
              }]
            }, {
              id: Ui.Seek,
              data: [{
                id: Ui.SeekID,
                data: OM
              }, {
                id: Ui.SeekPosition,
                size: 5,
                data: MM ? this.ebmlWriter.offsets.get(this.tracksElement) - this.segmentDataOffset : 0
              }]
            }, this.attachmentsElement ? {
              id: Ui.Seek,
              data: [{
                id: Ui.SeekID,
                data: SM
              }, {
                id: Ui.SeekPosition,
                size: 5,
                data: MM ? this.ebmlWriter.offsets.get(this.attachmentsElement) - this.segmentDataOffset : 0
              }]
            } : null, this.tagsElement ? {
              id: Ui.Seek,
              data: [{
                id: Ui.SeekID,
                data: jM
              }, {
                id: Ui.SeekPosition,
                size: 5,
                data: MM ? this.ebmlWriter.offsets.get(this.tagsElement) - this.segmentDataOffset : 0
              }]
            } : null, {
              id: Ui.Seek,
              data: [{
                id: Ui.SeekID,
                data: rM
              }, {
                id: Ui.SeekPosition,
                size: 5,
                data: MM ? this.ebmlWriter.offsets.get(this.cues) - this.segmentDataOffset : 0
              }]
            }]
          };
        this.seekHead = aM
      }
      createSegmentInfo() {
        const MM = {
          id: Ui.Duration,
          data: new yi(0)
        };
        this.segmentDuration = MM;
        const rM = {
          id: Ui.Info,
          data: [{
            id: Ui.TimestampScale,
            data: 1e6
          }, {
            id: Ui.MuxingApp,
            data: lM.d
          }, {
            id: Ui.WritingApp,
            data: lM.d
          }, this.format._options.appendOnly ? null : MM]
        };
        this.segmentInfo = rM
      }
      createTracks() {
        const MM = {
          id: Ui.Tracks,
          data: []
        };
        this.tracksElement = MM;
        for (const rM of this.trackDatas) {
          let iM = wi[rM.track.source._codec];
          (0, PM.J)(iM), "audio" === rM.type && "dts" === rM.track.source._codec && ("dtse" === rM.info.decoderConfig.codec ? iM = "A_DTS/EXPRESS" : "dtsl" === rM.info.decoderConfig.codec && (iM = "A_DTS/LOSSLESS"));
          let OM = 0;
          if ("audio" === rM.type && "opus" === rM.track.source._codec) {
            OM = 8e7;
            const MM = rM.info.decoderConfig.description;
            if (MM) {
              const rM = (0, PM.od)(MM),
                iM = (0, JM.nb)(rM);
              OM = Math.round(iM.preSkip / SM.i * 1e9)
            }
          }
          MM.data.push({
            id: Ui.TrackEntry,
            data: [{
              id: Ui.TrackNumber,
              data: rM.track.id
            }, {
              id: Ui.TrackUID,
              data: rM.track.id
            }, {
              id: Ui.TrackType,
              data: ti[rM.type]
            }, !1 === rM.track.metadata.disposition?.default ? {
              id: Ui.FlagDefault,
              data: 0
            } : null, rM.track.metadata.disposition?.forced ? {
              id: Ui.FlagForced,
              data: 1
            } : null, rM.track.metadata.disposition?.hearingImpaired ? {
              id: Ui.FlagHearingImpaired,
              data: 1
            } : null, rM.track.metadata.disposition?.visuallyImpaired ? {
              id: Ui.FlagVisualImpaired,
              data: 1
            } : null, rM.track.metadata.disposition?.original ? {
              id: Ui.FlagOriginal,
              data: 1
            } : null, rM.track.metadata.disposition?.commentary ? {
              id: Ui.FlagCommentary,
              data: 1
            } : null, {
              id: Ui.FlagLacing,
              data: 0
            }, {
              id: Ui.Language,
              data: rM.track.metadata.languageCode ?? PM.x
            }, {
              id: Ui.CodecID,
              data: iM
            }, rM.codecPrivate ? {
              id: Ui.CodecPrivate,
              data: (0, PM.od)(rM.codecPrivate)
            } : null, OM > 0 ? {
              id: Ui.SeekPreRoll,
              data: OM
            } : null, void 0 !== rM.track.metadata.name ? {
              id: Ui.Name,
              data: new Ei(rM.track.metadata.name)
            } : null, "video" === rM.type ? this.videoSpecificTrackInfo(rM) : null, "audio" === rM.type ? this.audioSpecificTrackInfo(rM) : null, "subtitle" === rM.type ? this.subtitleSpecificTrackInfo(rM) : null]
          })
        }
      }
      videoSpecificTrackInfo(MM) {
        const {
          frameRate: rM,
          transformationMatrix: iM
        } = MM.track.metadata, OM = [rM ? {
          id: Ui.DefaultDuration,
          data: 1e9 / rM
        } : null];
        let SM, jM, aM;
        if (iM) {
          SM = (0, PM.kb)(iM);
          const MM = (0, PM.pc)((0, PM.Hc)(-SM), iM);
          jM = Math.sign(MM[0]), aM = Math.sign(MM[4]), -1 === aM && (aM = 1, jM = -jM, SM = (0, PM.tc)(SM + 180))
        } else SM = MM.track.metadata.rotation ?? 0, jM = MM.track.metadata.flip ? -1 : 1, aM = 1;
        const nM = SM ? (0, PM.tc)(-1 === jM ? SM : -SM) : 0,
          QM = Math.round(Math.acos(jM) * PM.m),
          zM = Math.round(Math.acos(aM) * PM.m),
          LM = !!MM.info.aspectRatio && MM.info.aspectRatio.num * MM.info.height !== MM.info.aspectRatio.den * MM.info.width,
          mM = MM.info.decoderConfig.colorSpace,
          HM = {
            id: Ui.Video,
            data: [{
              id: Ui.PixelWidth,
              data: MM.info.width
            }, {
              id: Ui.PixelHeight,
              data: MM.info.height
            }, LM ? {
              id: Ui.DisplayWidth,
              data: MM.info.aspectRatio.num
            } : null, LM ? {
              id: Ui.DisplayHeight,
              data: MM.info.aspectRatio.den
            } : null, LM ? {
              id: Ui.DisplayUnit,
              data: 3
            } : null, MM.info.alphaMode ? {
              id: Ui.AlphaMode,
              data: 1
            } : null, (0, PM.eb)(mM) ? null : {
              id: Ui.Colour,
              data: [{
                id: Ui.MatrixCoefficients,
                data: null != mM?.matrix ? PM.k[mM.matrix] : 2
              }, {
                id: Ui.TransferCharacteristics,
                data: null != mM?.transfer ? PM.t[mM.transfer] : 2
              }, {
                id: Ui.Primaries,
                data: null != mM?.primaries ? PM.c[mM.primaries] : 2
              }, {
                id: Ui.Range,
                data: null != mM?.fullRange ? mM.fullRange ? 2 : 1 : 0
              }]
            }, nM || QM || zM ? {
              id: Ui.Projection,
              data: [{
                id: Ui.ProjectionType,
                data: 0
              }, QM ? {
                id: Ui.ProjectionPoseYaw,
                data: new di(QM)
              } : null, zM ? {
                id: Ui.ProjectionPosePitch,
                data: new di(zM)
              } : null, nM ? {
                id: Ui.ProjectionPoseRoll,
                data: new di((nM + 180) % 360 - 180)
              } : null]
            } : null]
          };
        return OM.push(HM), OM
      }
      audioSpecificTrackInfo(MM) {
        const rM = SM.m.includes(MM.track.source._codec) ? (0, SM.P)(MM.track.source._codec) : null;
        return [{
          id: Ui.Audio,
          data: [{
            id: Ui.SamplingFrequency,
            data: new di(MM.info.sampleRate)
          }, {
            id: Ui.Channels,
            data: MM.info.numberOfChannels
          }, rM ? {
            id: Ui.BitDepth,
            data: 8 * rM.sampleSize
          } : null]
        }]
      }
      subtitleSpecificTrackInfo(MM) {
        return []
      }
      maybeCreateTags() {
        const MM = [],
          rM = (rM, iM) => {
            MM.push({
              id: Ui.SimpleTag,
              data: [{
                id: Ui.TagName,
                data: new Ei(rM)
              }, "string" === typeof iM ? {
                id: Ui.TagString,
                data: new Ei(iM)
              } : {
                id: Ui.TagBinary,
                data: iM
              }]
            })
          },
          iM = this.output._metadataTags,
          OM = new Set;
        for (const {
            key: SM,
            value: jM
          }
          of(0, PM._b)(iM)) switch (SM) {
          case "title":
            rM("TITLE", jM), OM.add("TITLE");
            break;
          case "description":
            rM("DESCRIPTION", jM), OM.add("DESCRIPTION");
            break;
          case "artist":
            rM("ARTIST", jM), OM.add("ARTIST");
            break;
          case "album":
            rM("ALBUM", jM), OM.add("ALBUM");
            break;
          case "albumArtist":
            rM("ALBUM_ARTIST", jM), OM.add("ALBUM_ARTIST");
            break;
          case "genre":
            rM("GENRE", jM), OM.add("GENRE");
            break;
          case "beatsPerMinute":
            rM("BPM", jM.toString()), OM.add("BPM");
            break;
          case "comment":
            rM("COMMENT", jM), OM.add("COMMENT");
            break;
          case "lyrics":
            rM("LYRICS", jM), OM.add("LYRICS");
            break;
          case "date":
            rM("DATE", jM.toISOString().slice(0, 10)), OM.add("DATE");
            break;
          case "trackNumber":
            rM("PART_NUMBER", void 0 !== iM.tracksTotal ? `${jM}/${iM.tracksTotal}` : jM.toString()), OM.add("PART_NUMBER");
            break;
          case "discNumber":
            rM("DISC", void 0 !== iM.discsTotal ? `${jM}/${iM.discsTotal}` : jM.toString()), OM.add("DISC");
            break;
          case "tracksTotal":
          case "discsTotal":
          case "images":
          case "raw":
            break;
          default:
            (0, PM.G)(SM)
        }
        if (iM.raw)
          for (const SM in iM.raw) {
            const MM = iM.raw[SM];
            null == MM || OM.has(SM) || ("string" === typeof MM || MM instanceof Uint8Array) && rM(SM, MM)
          }
        0 !== MM.length && (this.tagsElement = {
          id: Ui.Tags,
          data: [{
            id: Ui.Tag,
            data: [{
              id: Ui.Targets,
              data: [{
                id: Ui.TargetTypeValue,
                data: 50
              }, {
                id: Ui.TargetType,
                data: "MOVIE"
              }]
            }, ...MM]
          }]
        })
      }
      maybeCreateAttachments() {
        const MM = this.output._metadataTags,
          rM = [],
          iM = new Set,
          OM = MM.images ?? [];
        for (const SM of OM) {
          let MM, OM = SM.name;
          if (void 0 === OM) {
            OM = ("coverFront" === SM.kind ? "cover" : "coverBack" === SM.kind ? "back" : "image") + ((0, PM.tb)(SM.mimeType) ?? "")
          }
          for (;;) {
            MM = 0n;
            for (let rM = 0; rM < 8; rM++) MM <<= 8n, MM |= BigInt(Math.floor(256 * Math.random()));
            if (0n !== MM && !iM.has(MM)) break
          }
          iM.add(MM), rM.push({
            id: Ui.AttachedFile,
            data: [void 0 !== SM.description ? {
              id: Ui.FileDescription,
              data: new Ei(SM.description)
            } : null, {
              id: Ui.FileName,
              data: new Ei(OM)
            }, {
              id: Ui.FileMediaType,
              data: SM.mimeType
            }, {
              id: Ui.FileData,
              data: SM.data
            }, {
              id: Ui.FileUID,
              data: MM
            }]
          })
        }
        for (const [SM, jM] of Object.entries(MM.raw ?? {})) {
          if (!(jM instanceof HM.d)) continue;
          /^\d+$/.test(SM) && (OM.find((MM => MM.mimeType === jM.mimeType && (0, PM.rd)(MM.data, jM.data))) || rM.push({
            id: Ui.AttachedFile,
            data: [void 0 !== jM.description ? {
              id: Ui.FileDescription,
              data: new Ei(jM.description)
            } : null, {
              id: Ui.FileName,
              data: new Ei(jM.name ?? "")
            }, {
              id: Ui.FileMediaType,
              data: jM.mimeType ?? ""
            }, {
              id: Ui.FileData,
              data: jM.data
            }, {
              id: Ui.FileUID,
              data: BigInt(SM)
            }]
          }))
        }
        0 !== rM.length && (this.attachmentsElement = {
          id: Ui.Attachments,
          data: rM
        })
      }
      createSegment() {
        this.createTracks(), this.maybeCreateTags(), this.maybeCreateAttachments(), this.maybeCreateSeekHead(!1);
        const MM = {
          id: Ui.Segment,
          size: this.format._options.appendOnly ? -1 : 6,
          data: [this.seekHead, this.segmentInfo, this.tracksElement, this.attachmentsElement, this.tagsElement]
        };
        if (this.segment = MM, this.format._options.onSegmentHeader && this.writer.startTrackingWrites(), this.ebmlWriter.writeEBML(MM), this.format._options.onSegmentHeader) {
          const {
            data: MM,
            start: rM
          } = this.writer.stopTrackingWrites();
          this.format._options.onSegmentHeader(MM, rM)
        }
      }
      createCues() {
        this.cues = {
          id: Ui.Cues,
          data: []
        }
      }
      get segmentDataOffset() {
        return (0, PM.J)(this.segment), this.ebmlWriter.dataOffsets.get(this.segment)
      }
      allTracksAreKnown() {
        for (const MM of this.output.tracks)
          if (!MM.source._closed && !this.trackDatas.some((rM => rM.track === MM))) return !1;
        return !0
      }
      async getMimeType() {
        await this.allTracksKnown.promise;
        const MM = this.trackDatas.map((MM => {
          if ("video" === MM.type) return MM.info.decoderConfig.codec;
          if ("audio" === MM.type) return MM.info.decoderConfig.codec;
          return {
            webvtt: "wvtt"
          } [MM.track.source._codec]
        }));
        return (MM => {
          let rM = (MM.hasVideo ? "video/" : MM.hasAudio ? "audio/" : "application/") + (MM.isWebM ? "webm" : "x-matroska");
          MM.codecStrings.length > 0 && (rM += `; codecs="${[...new Set(MM.codecStrings.filter(Boolean))].join(", ")}"`);
          return rM
        })({
          isWebM: this.format instanceof Ai,
          hasVideo: this.trackDatas.some((MM => "video" === MM.type)),
          hasAudio: this.trackDatas.some((MM => "audio" === MM.type)),
          codecStrings: MM
        })
      }
      getVideoTrackData(MM, rM, iM) {
        const OM = this.trackDatas.find((rM => rM.track === MM));
        if (OM) return OM;
        (0, SM.Y)(iM, MM.source._codec), (0, PM.J)(iM), (0, PM.J)(iM.decoderConfig), (0, PM.J)(void 0 !== iM.decoderConfig.codedWidth), (0, PM.J)(void 0 !== iM.decoderConfig.codedHeight);
        const jM = iM.decoderConfig.displayAspectWidth,
          aM = iM.decoderConfig.displayAspectHeight,
          nM = void 0 === jM || void 0 === aM ? null : (0, PM.cd)({
            num: jM,
            den: aM
          }),
          QM = {
            track: MM,
            type: "video",
            info: {
              width: iM.decoderConfig.codedWidth,
              height: iM.decoderConfig.codedHeight,
              aspectRatio: nM,
              decoderConfig: iM.decoderConfig,
              alphaMode: MM.metadata.canBeTransparent || (rM ? !!rM.sideData.alpha : null)
            },
            chunkQueue: [],
            lastWrittenMsTimestamp: null,
            codecPrivate: iM.decoderConfig.description ?? null,
            closed: !1
          };
        return "vp9" === MM.source._codec ? QM.codecPrivate = new Uint8Array((0, SM.G)(QM.info.decoderConfig.codec)) : "av1" === MM.source._codec ? QM.codecPrivate = new Uint8Array((0, SM.D)(QM.info.decoderConfig.codec)) : "prores" === MM.source._codec && (QM.codecPrivate = PM.id.encode(iM.decoderConfig.codec)), this.trackDatas.push(QM), this.trackDatas.sort(((MM, rM) => MM.track.id - rM.track.id)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), QM
      }
      getAudioTrackData(MM, rM, iM) {
        const jM = this.trackDatas.find((rM => rM.track === MM));
        if (jM) return jM;
        (0, SM.R)(iM, MM.source._codec), (0, PM.J)(iM), (0, PM.J)(iM.decoderConfig);
        const aM = {
          ...iM.decoderConfig
        };
        let QM = !1;
        if ("aac" === MM.source._codec && !aM.description) {
          if (!rM) throw new Error("No AAC description provided; you must therefore provide a priming packet.");
          const MM = Qi(nM.tempFromBytes(rM.data));
          if (!MM) throw new Error("Couldn't parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");
          const iM = OM.h[MM.samplingFrequencyIndex],
            SM = OM.e[MM.channelConfiguration];
          if (void 0 === iM || void 0 === SM) throw new Error("Invalid ADTS frame header.");
          aM.description = (0, OM.k)({
            objectType: MM.objectType,
            outputSampleRate: iM,
            outputNumberOfChannels: SM
          }), QM = !0
        }
        const zM = {
          track: MM,
          type: "audio",
          info: {
            numberOfChannels: iM.decoderConfig.numberOfChannels,
            sampleRate: iM.decoderConfig.sampleRate,
            decoderConfig: aM,
            requiresAdtsStripping: QM
          },
          chunkQueue: [],
          lastWrittenMsTimestamp: null,
          codecPrivate: aM.description ?? null,
          closed: !1
        };
        return this.trackDatas.push(zM), this.trackDatas.sort(((MM, rM) => MM.track.id - rM.track.id)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), zM
      }
      getSubtitleTrackData(MM, rM) {
        const iM = this.trackDatas.find((rM => rM.track === MM));
        if (iM) return iM;
        (0, SM.U)(rM), (0, PM.J)(rM), (0, PM.J)(rM.config);
        const OM = {
          track: MM,
          type: "subtitle",
          info: {
            config: rM.config
          },
          chunkQueue: [],
          lastWrittenMsTimestamp: null,
          codecPrivate: PM.id.encode(rM.config.description),
          closed: !1
        };
        return this.trackDatas.push(OM), this.trackDatas.sort(((MM, rM) => MM.track.id - rM.track.id)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), OM
      }
      async addEncodedVideoPacket(MM, rM, iM) {
        const OM = await this.mutex.acquire();
        try {
          const OM = this.getVideoTrackData(MM, rM, iM);
          OM.info.alphaMode ??= !!rM.sideData.alpha;
          let SM = rM.data;
          if ("prores" === MM.source._codec) {
            if (SM.byteLength < 8) throw new Error("ProRes packet too small, expected at least 8 bytes.");
            SM = SM.subarray(8)
          }
          const jM = "key" === rM.type;
          this.validateTimestamp(OM.track, rM.timestamp, jM);
          let aM = rM.timestamp,
            nM = rM.duration;
          void 0 !== MM.metadata.frameRate && (aM = (0, PM.Lc)(aM, MM.metadata.frameRate), nM = (0, PM.Lc)(nM, MM.metadata.frameRate));
          const QM = OM.info.alphaMode ? rM.sideData.alpha ?? null : null,
            zM = this.createInternalChunk(SM, aM, nM, rM.type, QM);
          "vp9" === MM.source._codec && this.fixVP9ColorSpace(OM, zM), OM.chunkQueue.push(zM), await this.interleaveChunks()
        } finally {
          OM()
        }
      }
      async addEncodedAudioPacket(MM, rM, iM) {
        const OM = await this.mutex.acquire();
        try {
          const OM = this.getAudioTrackData(MM, rM, iM);
          let SM = rM.data;
          if (OM.info.requiresAdtsStripping) {
            const MM = Qi(nM.tempFromBytes(SM));
            if (!MM) throw new Error("Expected ADTS frame, didn't get one.");
            const rM = null === MM.crcCheck ? 7 : 9;
            SM = SM.subarray(rM)
          }
          const jM = "key" === rM.type;
          this.validateTimestamp(OM.track, rM.timestamp, jM);
          const aM = this.createInternalChunk(SM, rM.timestamp, rM.duration, rM.type);
          OM.chunkQueue.push(aM), await this.interleaveChunks()
        } finally {
          OM()
        }
      }
      async addSubtitleCue(MM, rM, iM) {
        const OM = await this.mutex.acquire();
        try {
          const OM = this.getSubtitleTrackData(MM, iM);
          this.validateTimestamp(OM.track, rM.timestamp, !0);
          let SM = rM.text;
          const jM = Math.round(1e3 * rM.timestamp);
          yM.g.lastIndex = 0, SM = SM.replace(yM.g, (MM => {
            const rM = (0, yM.i)(MM.slice(1, -1)) - jM;
            return `<${(0,yM.f)(rM)}>`
          }));
          const aM = PM.id.encode(SM),
            nM = `${rM.settings??""}\n${rM.identifier??""}\n${rM.notes??""}`,
            QM = this.createInternalChunk(aM, rM.timestamp, rM.duration, "key", nM.trim() ? PM.id.encode(nM) : null);
          OM.chunkQueue.push(QM), await this.interleaveChunks()
        } finally {
          OM()
        }
      }
      async interleaveChunks() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (MM || this.allTracksAreKnown()) {
          MM: for (;;) {
            let rM = null,
              iM = 1 / 0;
            for (const SM of this.trackDatas) {
              if (!MM && 0 === SM.chunkQueue.length && !SM.closed) break MM;
              SM.chunkQueue.length > 0 && SM.chunkQueue[0].timestamp < iM && (rM = SM, iM = SM.chunkQueue[0].timestamp)
            }
            if (!rM) break;
            const OM = rM.chunkQueue.shift();
            this.writeBlock(rM, OM)
          }
          MM || await this.writer.flush()
        }
      }
      fixVP9ColorSpace(MM, rM) {
        if ("key" !== rM.type) return;
        if (!MM.info.decoderConfig.colorSpace || !MM.info.decoderConfig.colorSpace.matrix) return;
        const iM = new dM.d(rM.data);
        iM.skipBits(2);
        const OM = iM.readBits(1),
          SM = (iM.readBits(1) << 1) + OM;
        3 === SM && iM.skipBits(1);
        if (iM.readBits(1)) return;
        if (0 !== iM.readBits(1)) return;
        iM.skipBits(2);
        if (4817730 !== iM.readBits(24)) return;
        SM >= 2 && iM.skipBits(1);
        const jM = {
          rgb: 7,
          bt709: 2,
          bt470bg: 1,
          smpte170m: 3
        } [MM.info.decoderConfig.colorSpace.matrix];
        (0, PM.Ad)(rM.data, iM.pos, iM.pos + 3, jM)
      }
      createInternalChunk(MM, rM, iM, OM) {
        return {
          data: MM,
          type: OM,
          timestamp: rM,
          duration: iM,
          additions: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
        }
      }
      writeBlock(MM, rM) {
        this.segment || this.createSegment();
        const iM = Math.round(1e3 * rM.timestamp),
          OM = this.trackDatas.every((iM => {
            if (MM === iM) return "key" === rM.type;
            const OM = iM.chunkQueue[0];
            return OM ? "key" === OM.type : iM.closed
          }));
        let SM = !1;
        if (this.currentCluster) {
          (0, PM.J)(null !== this.currentClusterStartMsTimestamp), (0, PM.J)(null !== this.currentClusterMaxMsTimestamp);
          const MM = iM - this.currentClusterStartMsTimestamp;
          SM = OM && iM > this.currentClusterMaxMsTimestamp && MM >= 1e3 * (this.format._options.minimumClusterDuration ?? 1) || MM > 32767
        } else SM = !0;
        SM && this.createNewCluster(iM);
        const jM = iM - this.currentClusterStartMsTimestamp;
        if (jM < -32768) {
          if (!this.warnedAboutTooNegativeTimestamp) {
            const MM = this.format instanceof Ai ? "WebM" : "Matroska";
            aM.d._warn(`Packets had to be discarded because their timestamp is too negative to represent in ${MM}.`), this.warnedAboutTooNegativeTimestamp = !0
          }
          return
        }
        const nM = new Uint8Array(4),
          QM = new DataView(nM.buffer);
        QM.setUint8(0, 128 | MM.track.id), QM.setInt16(1, jM, !1);
        const zM = Math.round(1e3 * rM.duration);
        if (!!rM.additions || "subtitle" === MM.type) {
          const OM = {
            id: Ui.BlockGroup,
            data: [{
              id: Ui.Block,
              data: [nM, rM.data]
            }, "delta" === rM.type ? {
              id: Ui.ReferenceBlock,
              data: new li(MM.lastWrittenMsTimestamp - iM)
            } : null, rM.additions ? {
              id: Ui.BlockAdditions,
              data: [{
                id: Ui.BlockMore,
                data: [{
                  id: Ui.BlockAddID,
                  data: 1
                }, {
                  id: Ui.BlockAdditional,
                  data: rM.additions
                }]
              }]
            } : null, zM > 0 ? {
              id: Ui.BlockDuration,
              data: zM
            } : null]
          };
          this.ebmlWriter.writeEBML(OM)
        } else {
          QM.setUint8(3, Number("key" === rM.type) << 7);
          const MM = {
            id: Ui.SimpleBlock,
            data: [nM, rM.data]
          };
          this.ebmlWriter.writeEBML(MM)
        }
        this.startTimestamp = Math.min(this.startTimestamp, iM), this.endTimestamp = Math.max(this.endTimestamp, iM + zM), MM.lastWrittenMsTimestamp = iM, this.trackDatasInCurrentCluster.has(MM) || this.trackDatasInCurrentCluster.set(MM, {
          firstMsTimestamp: iM
        }), this.currentClusterMaxMsTimestamp = Math.max(this.currentClusterMaxMsTimestamp, iM)
      }
      createNewCluster(MM) {
        MM = Math.max(0, MM), this.currentCluster && this.finalizeCurrentCluster(), this.format._options.onCluster && this.writer.startTrackingWrites(), this.currentCluster = {
          id: Ui.Cluster,
          size: this.format._options.appendOnly ? -1 : 5,
          data: [{
            id: Ui.Timestamp,
            data: MM
          }]
        }, this.ebmlWriter.writeEBML(this.currentCluster), this.currentClusterStartMsTimestamp = MM, this.currentClusterMaxMsTimestamp = MM, this.trackDatasInCurrentCluster.clear()
      }
      finalizeCurrentCluster() {
        if ((0, PM.J)(this.currentCluster), !this.format._options.appendOnly) {
          const MM = this.writer.getPos() - this.ebmlWriter.dataOffsets.get(this.currentCluster),
            rM = this.writer.getPos();
          this.writer.seek(this.ebmlWriter.offsets.get(this.currentCluster) + 4), this.ebmlWriter.writeVarInt(MM, 5), this.writer.seek(rM)
        }
        if (this.format._options.onCluster) {
          (0, PM.J)(null !== this.currentClusterStartMsTimestamp);
          const {
            data: MM,
            start: rM
          } = this.writer.stopTrackingWrites();
          this.format._options.onCluster(MM, rM, this.currentClusterStartMsTimestamp / 1e3)
        }
        const MM = this.ebmlWriter.offsets.get(this.currentCluster) - this.segmentDataOffset,
          rM = new Map;
        for (const [OM, {
            firstMsTimestamp: SM
          }] of this.trackDatasInCurrentCluster) rM.has(SM) || rM.set(SM, []), rM.get(SM).push(OM);
        const iM = [...rM.entries()].sort(((MM, rM) => MM[0] - rM[0]));
        for (const [OM, SM] of iM)(0, PM.J)(this.cues), this.cues.data.push({
          id: Ui.CuePoint,
          data: [{
            id: Ui.CueTime,
            data: Math.max(0, OM)
          }, ...SM.map((rM => ({
            id: Ui.CueTrackPositions,
            data: [{
              id: Ui.CueTrack,
              data: rM.track.id
            }, {
              id: Ui.CueClusterPosition,
              data: MM
            }]
          })))]
        })
      }
      async onTrackClose(MM) {
        const rM = await this.mutex.acquire(),
          iM = this.trackDatas.find((rM => rM.track === MM));
        iM && (iM.closed = !0), this.allTracksAreKnown() && this.allTracksKnown.resolve(), await this.interleaveChunks(), rM()
      }
      async finalize() {
        const MM = await this.mutex.acquire();
        this.allTracksKnown.resolve();
        for (const rM of this.trackDatas) rM.closed = !0;
        if (this.segment || this.createSegment(), await this.interleaveChunks(!0), this.currentCluster && this.finalizeCurrentCluster(), (0, PM.J)(this.cues), this.ebmlWriter.writeEBML(this.cues), !this.format._options.appendOnly) {
          const MM = this.writer.getPos() - this.segmentDataOffset;
          this.writer.seek(this.ebmlWriter.offsets.get(this.segment) + 4), this.ebmlWriter.writeVarInt(MM, 6);
          const rM = this.startTimestamp === 1 / 0 ? 0 : this.endTimestamp;
          this.segmentDuration.data = new yi(rM), this.writer.seek(this.ebmlWriter.offsets.get(this.segmentDuration)), this.ebmlWriter.writeEBML(this.segmentDuration), (0, PM.J)(this.seekHead), this.writer.seek(this.ebmlWriter.offsets.get(this.seekHead)), this.maybeCreateSeekHead(!0), this.ebmlWriter.writeEBML(this.seekHead)
        }
        MM()
      }
    }
    const ui = new Uint32Array(256);
    for (let xi = 0; xi < 256; xi++) {
      let MM = xi << 24;
      for (let rM = 0; rM < 8; rM++) MM = 2147483648 & MM ? MM << 1 ^ 79764919 : MM << 1;
      ui[xi] = MM >>> 0 & 4294967295
    }
    new Uint8Array([9, 240]), new Uint8Array([70, 1]);
    const Ri = new Uint32Array(256);
    for (let xi = 0; xi < 256; xi++) {
      let MM = xi << 24;
      for (let rM = 0; rM < 8; rM++) MM = 2147483648 & MM ? MM << 1 ^ 79764919 : MM << 1;
      Ri[xi] = MM >>> 0 & 4294967295
    }
    const Wi = MM => {
        let rM = 4294967295;
        for (let iM = 0; iM < MM.length; iM++) {
          const OM = MM[iM];
          rM = (rM << 8 ^ Ri[rM >>> 24 ^ OM]) >>> 0
        }
        return rM
      },
      si = new Uint8Array(16);
    {
      const MM = (0, PM.nd)(si);
      si[0] = 0, MM.setUint16(1, 45069, !1), MM.setUint16(3, 1, !1), si[5] = 193, si[6] = 0, si[7] = 0, MM.setUint16(8, 1, !1), MM.setUint16(10, 61440, !1), MM.setUint32(12, Wi(si.subarray(0, 12)), !1)
    }
    var Di;
    iM(34756);
    ! function(MM) {
      MM[MM.PCM = 1] = "PCM", MM[MM.IEEE_FLOAT = 3] = "IEEE_FLOAT", MM[MM.ALAW = 6] = "ALAW", MM[MM.MULAW = 7] = "MULAW", MM[MM.EXTENSIBLE = 65534] = "EXTENSIBLE"
    }(Di || (Di = {}));
    iM(34765), iM(34776), iM(34678);
    class ki {
      get supportsVideoRotationMetadata() {
        return this.supportsVideoTransformationMetadata
      }
      getSupportedVideoCodecs() {
        return this.getSupportedCodecs().filter((MM => SM.q.includes(MM)))
      }
      getSupportedAudioCodecs() {
        return this.getSupportedCodecs().filter((MM => SM.b.includes(MM)))
      }
      getSupportedSubtitleCodecs() {
        return this.getSupportedCodecs().filter((MM => SM.p.includes(MM)))
      }
      _codecUnsupportedHint(MM) {
        return ""
      }
      _isFragmentedIsobmff() {
        return !1
      }
    }
    class Zi extends ki {
      constructor() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (!MM || "object" !== typeof MM) throw new TypeError("options must be an object.");
        if (void 0 !== MM.fastStart && ![!1, "in-memory", "reserve", "fragmented"].includes(MM.fastStart)) throw new TypeError("options.fastStart, when provided, must be false, 'in-memory', 'reserve', or 'fragmented'.");
        if (void 0 !== MM.minimumFragmentDuration && (!(0, PM.Lb)(MM.minimumFragmentDuration) || MM.minimumFragmentDuration < 0)) throw new TypeError("options.minimumFragmentDuration, when provided, must be a non-negative number.");
        if (void 0 !== MM.onFtyp && "function" !== typeof MM.onFtyp) throw new TypeError("options.onFtyp, when provided, must be a function.");
        if (void 0 !== MM.onMoov && "function" !== typeof MM.onMoov) throw new TypeError("options.onMoov, when provided, must be a function.");
        if (void 0 !== MM.onMdat && "function" !== typeof MM.onMdat) throw new TypeError("options.onMdat, when provided, must be a function.");
        if (void 0 !== MM.onMoof && "function" !== typeof MM.onMoof) throw new TypeError("options.onMoof, when provided, must be a function.");
        if (void 0 !== MM.metadataFormat && !["mdir", "mdta", "udta", "auto"].includes(MM.metadataFormat)) throw new TypeError("options.metadataFormat, when provided, must be either 'auto', 'mdir', 'mdta', or 'udta'.");
        super(), this._options = MM
      }
      getSupportedTrackCounts() {
        const MM = 2 ** 32 - 1;
        return {
          video: {
            min: 0,
            max: MM
          },
          audio: {
            min: 0,
            max: MM
          },
          subtitle: {
            min: 0,
            max: MM
          },
          total: {
            min: 0,
            max: MM
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
      _createMuxer(MM) {
        return new Ji(MM, this)
      }
      _isFragmentedIsobmff() {
        return "fragmented" === this._options.fastStart
      }
    }
    class oi extends Zi {
      constructor(MM) {
        super(MM)
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
        return [...SM.q, ...SM.e, "pcm-s16", "pcm-s16be", "pcm-s24", "pcm-s24be", "pcm-s32", "pcm-s32be", "pcm-f32", "pcm-f32be", "pcm-f64", "pcm-f64be", ...SM.p]
      }
      _codecUnsupportedHint(MM) {
        return (new Yi).getSupportedCodecs().includes(MM) ? " Switching to MOV will grant support for this codec." : ""
      }
    }
    class fi extends Zi {
      constructor(MM) {
        super(MM)
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
        return [...SM.q, ...SM.e, "pcm-s16", "pcm-s16be", "pcm-s24", "pcm-s24be", "pcm-s32", "pcm-s32be", "pcm-f32", "pcm-f32be", "pcm-f64", "pcm-f64be", ...SM.p]
      }
    }
    class Yi extends Zi {
      constructor(MM) {
        super(MM)
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
        return [...SM.q, ...SM.b]
      }
      _codecUnsupportedHint(MM) {
        return (new oi).getSupportedCodecs().includes(MM) ? " Switching to MP4 will grant support for this codec." : ""
      }
    }
    class Ni extends ki {
      constructor() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (!MM || "object" !== typeof MM) throw new TypeError("options must be an object.");
        if (void 0 !== MM.appendOnly && "boolean" !== typeof MM.appendOnly) throw new TypeError("options.appendOnly, when provided, must be a boolean.");
        if (void 0 !== MM.minimumClusterDuration && (!(0, PM.Lb)(MM.minimumClusterDuration) || MM.minimumClusterDuration < 0)) throw new TypeError("options.minimumClusterDuration, when provided, must be a non-negative number.");
        if (void 0 !== MM.onEbmlHeader && "function" !== typeof MM.onEbmlHeader) throw new TypeError("options.onEbmlHeader, when provided, must be a function.");
        if (void 0 !== MM.onSegmentHeader && "function" !== typeof MM.onSegmentHeader) throw new TypeError("options.onHeader, when provided, must be a function.");
        if (void 0 !== MM.onCluster && "function" !== typeof MM.onCluster) throw new TypeError("options.onCluster, when provided, must be a function.");
        super(), this._options = MM
      }
      _createMuxer(MM) {
        return new gi(MM, this)
      }
      get _name() {
        return "Matroska"
      }
      getSupportedTrackCounts() {
        const MM = 127;
        return {
          video: {
            min: 0,
            max: MM
          },
          audio: {
            min: 0,
            max: MM
          },
          subtitle: {
            min: 0,
            max: MM
          },
          total: {
            min: 0,
            max: MM
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
        return [...SM.q, ...SM.e, ...SM.m.filter((MM => !["pcm-s8", "pcm-f32be", "pcm-f64be", "ulaw", "alaw"].includes(MM))), ...SM.p]
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
    class Ai extends Ni {
      constructor(MM) {
        super(MM)
      }
      getSupportedCodecs() {
        return [...SM.q.filter((MM => ["vp8", "vp9", "av1"].includes(MM))), ...SM.b.filter((MM => ["opus", "vorbis"].includes(MM))), ...SM.p]
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
      _codecUnsupportedHint(MM) {
        return (new Ni).getSupportedCodecs().includes(MM) ? " Switching to MKV will grant support for this codec." : ""
      }
    }
  },
  34678: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => EM
    });
    var OM = iM(34685),
      SM = iM(34693),
      jM = iM(34697),
      aM = iM(34776),
      PM = iM(34747),
      nM = iM(34740),
      QM = iM(34727),
      zM = iM(34756),
      LM = iM(34713);
    const mM = ["video", "audio", "subtitle"];
    class HM {
      constructor(MM, rM, iM, OM, SM) {
        this.id = MM, this.output = rM, this.type = iM, this.source = OM, this.metadata = SM
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
      canBePairedWith(MM) {
        if (!(MM instanceof HM)) throw new TypeError("other must be an OutputTrack.");
        if (this === MM) return !1;
        const rM = (0, OM.kd)(this.metadata.group),
          iM = (0, OM.kd)(MM.metadata.group);
        for (const OM of rM) {
          if (this.type !== MM.type && iM.some((MM => OM === MM))) return !0;
          if (iM.some((MM => OM._pairedGroups.has(MM)))) return !0
        }
        return !1
      }
    }
    class hM extends HM {
      constructor(MM, rM, iM, OM) {
        super(MM, rM, "video", iM, OM)
      }
    }
    class JM extends HM {
      constructor(MM, rM, iM, OM) {
        super(MM, rM, "audio", iM, OM)
      }
    }
    class dM extends HM {
      constructor(MM, rM, iM, OM) {
        super(MM, rM, "subtitle", iM, OM)
      }
    }
    class yM {
      constructor() {
        this._pairedGroups = new Set
      }
      pairWith(MM) {
        if (!(MM instanceof yM)) throw new TypeError("other must be an OutputTrackGroup.");
        if (this === MM) throw new TypeError("Cannot pair a group with itself.");
        this._pairedGroups.add(MM), MM._pairedGroups.add(this)
      }
    }
    const lM = MM => {
      if (!MM || "object" !== typeof MM) throw new TypeError("metadata must be an object.");
      if (void 0 !== MM.languageCode && !(0, OM.Eb)(MM.languageCode)) throw new TypeError("metadata.languageCode, when provided, must be a three-letter, ISO 639-2/T language code.");
      if (void 0 !== MM.name && "string" !== typeof MM.name) throw new TypeError("metadata.name, when provided, must be a string.");
      if (void 0 !== MM.disposition && (0, SM.o)(MM.disposition), void 0 !== MM.maximumPacketCount && (!Number.isInteger(MM.maximumPacketCount) || MM.maximumPacketCount < 0)) throw new TypeError("metadata.maximumPacketCount, when provided, must be a non-negative integer.");
      if (void 0 !== MM.bitrate && (!Number.isFinite(MM.bitrate) || MM.bitrate < 0)) throw new TypeError("metadata.bitrate, when provided, must be a non-negative number.");
      if (void 0 !== MM.averageBitrate && (!Number.isFinite(MM.averageBitrate) || MM.averageBitrate < 0)) throw new TypeError("metadata.averageBitrate, when provided, must be a non-negative number.");
      if (void 0 !== MM.group && !(MM.group instanceof yM) && (!Array.isArray(MM.group) || MM.group.some((MM => !(MM instanceof yM))))) throw new TypeError("metadata.group, when provided, must be an OutputTrackGroup instance or an array of OutputTrackGroup instances.")
    };
    class EM extends OM.h {
      get target() {
        const MM = "Output.target cannot be used when using PathedTarget with an async callback. Use the 'target' event instead.";
        if (this._rootTargetPromise) throw new TypeError(MM);
        const rM = this._getRootTarget();
        if ((0, OM.Pb)(rM)) throw new TypeError(MM);
        return rM
      }
      constructor(MM) {
        if (super(), this.state = "pending", this.defaultTrackGroup = new yM, this.tracks = [], this._onFinalize = null, this._unfinalizedTargets = new Set, this._rootWriterPromise = null, this._startPromise = null, this._cancelPromise = null, this._finalizePromise = null, this._mutex = new OM.b, this._metadataTags = {}, this._rootTarget = null, this._rootTargetPromise = null, this._firstMediaStreamTimestamp = null, !MM || "object" !== typeof MM) throw new TypeError("options must be an object.");
        if (!(MM.format instanceof jM.n)) throw new TypeError("options.format must be an OutputFormat.");
        if (!(MM.target instanceof PM.h || MM.target instanceof PM.g)) throw new TypeError("options.target must be a Target or a PathedTarget.");
        if (MM.target instanceof PM.h && this._rememberTarget(MM.target), void 0 !== MM.initTarget && !(MM.initTarget instanceof PM.h) && "function" !== typeof MM.initTarget) throw new Error("options.initTarget, when provided, must be a Target or a function that returns or resolves to a Target.");
        if (void 0 !== MM.onFinalize && "function" !== typeof MM.onFinalize) throw new TypeError("options.onFinalize, when provided, must be a function.");
        this.format = MM.format, this.wL = MM.target, this._onFinalize = MM.onFinalize ?? null, this._initTarget = MM.initTarget ?? null, this._initTarget instanceof PM.h && this._rememberTarget(this._initTarget), this._muxer = MM.format._createMuxer(this)
      }
      _getTargetValidated(MM) {
        (0, OM.J)(this.wL instanceof PM.g);
        const rM = this.wL.getTarget(MM),
          iM = MM => {
            if (!(MM instanceof PM.h)) throw new TypeError("getTarget must return a Target.");
            return MM
          };
        return (0, OM.Pb)(rM) ? rM.then(iM) : iM(rM)
      }
      async _getTarget(MM) {
        (0, OM.J)(this.wL instanceof PM.g);
        const rM = await this._getTargetValidated(MM);
        return this._emit("target", {
          target: rM,
          request: MM,
          isRoot: MM.isRoot
        }), "canceled" === this.state ? await rM._close() : this._rememberTarget(rM), rM
      }
      _rememberTarget(MM) {
        this._unfinalizedTargets.add(MM), MM.on("finalized", (() => this._unfinalizedTargets.delete(MM)), {
          once: !0
        })
      }
      async _getInitTarget() {
        if ((0, OM.J)(null !== this._initTarget), this._initTarget instanceof PM.h) return this._initTarget;
        const MM = await this._initTarget();
        return "canceled" === this.state ? await MM._close() : this._rememberTarget(MM), MM
      }
      _hasInitTarget() {
        return null !== this._initTarget
      }
      _getRootTarget() {
        if (this._rootTarget) return this._rootTarget;
        if (this._rootTargetPromise) return this._rootTargetPromise;
        if (this.wL instanceof PM.h) return this._emit("target", {
          target: this.wL,
          request: null,
          isRoot: !0
        }), this._rootTarget = this.wL, this.wL;
        const MM = {
            path: this.wL.rootPath,
            isRoot: !0,
            mimeType: this.format.mimeType
          },
          rM = this._getTargetValidated(MM),
          iM = rM => ("canceled" === this.state ? rM._close() : this._rememberTarget(rM), this._emit("target", {
            target: rM,
            request: MM,
            isRoot: !0
          }), this._rootTarget = rM, rM);
        return (0, OM.Pb)(rM) ? this._rootTargetPromise = rM.then(iM) : iM(rM)
      }
      _getRootWriter(MM) {
        return this._rootWriterPromise ??= (async () => {
          const rM = await this._getRootTarget(),
            iM = new nM.d(rM, "boolean" === typeof MM ? MM : MM(rM));
          return iM.start(), iM
        })()
      }
      addVideoTrack(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!(MM instanceof aM.m)) throw new TypeError("source must be a VideoSource.");
        if (lM(rM), void 0 !== rM.rotation && ![0, 90, 180, 270].includes(rM.rotation)) throw new TypeError(`Invalid video rotation: ${rM.rotation}. Has to be 0, 90, 180 or 270.`);
        if (void 0 !== rM.flip && "boolean" !== typeof rM.flip) throw new TypeError("metadata.flip, when provided, must be a boolean.");
        if (void 0 !== rM.transformationMatrix && (!Array.isArray(rM.transformationMatrix) || 9 !== rM.transformationMatrix.length || !rM.transformationMatrix.every((MM => Number.isFinite(MM))))) throw new TypeError("metadata.transformationMatrix, when provided, must be an array of 9 finite numbers.");
        if (void 0 !== rM.frameRate && (!Number.isFinite(rM.frameRate) || rM.frameRate <= 0)) throw new TypeError(`Invalid video frame rate: ${rM.frameRate}. Must be a positive number.`);
        if (void 0 !== rM.hasOnlyKeyPackets && "boolean" !== typeof rM.hasOnlyKeyPackets) throw new TypeError("metadata.hasOnlyKeyPackets, when provided, must be a boolean.");
        if (void 0 !== rM.canBeTransparent && "boolean" !== typeof rM.canBeTransparent) throw new TypeError("metadata.canBeTransparent, when provided, must be a boolean.");
        if (void 0 !== rM.decoderConfig && (0, LM.Y)({
            decoderConfig: rM.decoderConfig
          }, MM._codec), void 0 !== rM.primingPacket) {
          if (!(rM.primingPacket instanceof zM.e)) throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");
          if (void 0 === rM.decoderConfig) throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")
        }
        const iM = {
          ...rM
        };
        return iM.group ??= this.defaultTrackGroup, this._addTrack(new hM(this.tracks.length + 1, this, MM, iM))
      }
      addAudioTrack(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!(MM instanceof aM.b)) throw new TypeError("source must be an AudioSource.");
        if (lM(rM), void 0 !== rM.decoderConfig && (0, LM.R)({
            decoderConfig: rM.decoderConfig
          }, MM._codec), void 0 !== rM.primingPacket) {
          if (!(rM.primingPacket instanceof zM.e)) throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");
          if (void 0 === rM.decoderConfig) throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")
        }
        const iM = {
          ...rM
        };
        return iM.group ??= this.defaultTrackGroup, this._addTrack(new JM(this.tracks.length + 1, this, MM, iM))
      }
      addSubtitleTrack(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!(MM instanceof aM.j)) throw new TypeError("source must be a SubtitleSource.");
        lM(rM);
        const iM = {
          ...rM
        };
        return iM.group ??= this.defaultTrackGroup, this._addTrack(new dM(this.tracks.length + 1, this, MM, iM))
      }
      setMetadataTags(MM) {
        if ((0, SM.n)(MM), "pending" !== this.state) throw new Error("Cannot set metadata tags after output has been started or canceled.");
        this._metadataTags = MM
      }
      _addTrack(MM) {
        if ("pending" !== this.state) throw new Error("Cannot add track after output has been started or canceled.");
        if (MM.source._connectedTrack) throw new Error("Source is already used for a track.");
        const rM = this.format.getSupportedTrackCounts(),
          iM = this.tracks.reduce(((rM, iM) => rM + (iM.type === MM.type ? 1 : 0)), 0),
          OM = rM[MM.type].max;
        if (iM === OM) throw new Error(0 === OM ? `${this.format._name} does not support ${MM.type} tracks.` : `${this.format._name} does not support more than ${OM} ${MM.type} track` + (1 === OM ? "" : "s") + ".");
        const SM = rM.total.max;
        if (this.tracks.length === SM) throw new Error(`${this.format._name} does not support more than ${SM} tracks` + (1 === SM ? "" : "s") + " in total.");
        if (MM.isVideoTrack()) {
          const rM = this.format.getSupportedVideoCodecs();
          if (0 === rM.length) throw new Error(`${this.format._name} does not support video tracks.` + this.format._codecUnsupportedHint(MM.source._codec));
          if (!rM.includes(MM.source._codec)) throw new Error(`Codec '${MM.source._codec}' cannot be contained within ${this.format._name}. Supported video codecs are: ${rM.map((MM=>`'${MM}'`)).join(", ")}.` + this.format._codecUnsupportedHint(MM.source._codec))
        } else if (MM.isAudioTrack()) {
          const rM = this.format.getSupportedAudioCodecs();
          if (0 === rM.length) throw new Error(`${this.format._name} does not support audio tracks.` + this.format._codecUnsupportedHint(MM.source._codec));
          if (!rM.includes(MM.source._codec)) throw new Error(`Codec '${MM.source._codec}' cannot be contained within ${this.format._name}. Supported audio codecs are: ${rM.map((MM=>`'${MM}'`)).join(", ")}.` + this.format._codecUnsupportedHint(MM.source._codec))
        } else if (MM.isSubtitleTrack()) {
          const rM = this.format.getSupportedSubtitleCodecs();
          if (0 === rM.length) throw new Error(`${this.format._name} does not support subtitle tracks.` + this.format._codecUnsupportedHint(MM.source._codec));
          if (!rM.includes(MM.source._codec)) throw new Error(`Codec '${MM.source._codec}' cannot be contained within ${this.format._name}. Supported subtitle codecs are: ${rM.map((MM=>`'${MM}'`)).join(", ")}.` + this.format._codecUnsupportedHint(MM.source._codec))
        }
        return this.tracks.push(MM), MM.source._connectedTrack = MM, MM
      }
      hasEnoughTracks() {
        const MM = this.format.getSupportedTrackCounts();
        for (const iM of mM) {
          if (this.tracks.reduce(((MM, rM) => MM + (rM.type === iM ? 1 : 0)), 0) < MM[iM].min) return !1
        }
        const rM = MM.total.min;
        return !(this.tracks.length < rM)
      }
      async start() {
        const MM = this.format.getSupportedTrackCounts();
        for (const iM of mM) {
          const rM = this.tracks.reduce(((MM, rM) => MM + (rM.type === iM ? 1 : 0)), 0),
            OM = MM[iM].min;
          if (rM < OM) throw new Error(OM === MM[iM].max ? `${this.format._name} requires exactly ${OM} ${iM} track${1===OM?"":"s"}.` : `${this.format._name} requires at least ${OM} ${iM} track${1===OM?"":"s"}.`)
        }
        const rM = MM.total.min;
        if (this.tracks.length < rM) throw new Error(rM === MM.total.max ? `${this.format._name} requires exactly ${rM} track` + (1 === rM ? "" : "s") + "." : `${this.format._name} requires at least ${rM} track` + (1 === rM ? "" : "s") + ".");
        if ("canceled" === this.state) throw new Error("Output has been canceled.");
        return this._startPromise ? (QM.d._warn("Output has already been started."), this._startPromise) : this._startPromise = (async () => {
          this.state = "started";
          const MM = this._mutex.acquire();
          try {
            await this._muxer.start();
            const MM = this.tracks.map((MM => MM.source._start()));
            await Promise.all(MM)
          } finally {
            (await MM)()
          }
        })()
      }
      getMimeType() {
        return this._muxer.getMimeType()
      }
      async cancel() {
        return "canceled" === this.state ? this._cancelPromise ?? void 0 : "finalizing" !== this.state && "finalized" !== this.state ? this._cancelPromise = (async () => {
          this.state = "canceled";
          const MM = await this._mutex.acquire();
          try {
            const MM = this.tracks.map((MM => MM.source._flushOrWaitForOngoingClose(!0)));
            await Promise.all(MM), await Promise.all([...this._unfinalizedTargets].map((MM => MM._close()))), this._unfinalizedTargets.clear()
          } finally {
            MM()
          }
        })() : void("finalized" === this.state && QM.d._warn("Output has already been finalized."))
      }
      async finalize() {
        if ("pending" === this.state) throw new Error("Cannot finalize before starting.");
        if ("canceled" === this.state) throw new Error("Cannot finalize after canceling.");
        return this._finalizePromise ? (QM.d._warn("Output has already been finalized."), this._finalizePromise) : this._finalizePromise = (async () => {
          this.state = "finalizing";
          const MM = await this._mutex.acquire();
          try {
            const MM = this.tracks.map((MM => MM.source._flushOrWaitForOngoingClose(!1)));
            if (await Promise.all(MM), await this._muxer.finalize(), this._rootWriterPromise) {
              const MM = await this._rootWriterPromise;
              MM.finalized || (await MM.flush(), await MM.finalize())
            }
            this._onFinalize && await this._onFinalize(), this.state = "finalized"
          } catch (rM) {
            throw this.state = "canceled", rM
          } finally {
            await Promise.all([...this._unfinalizedTargets].map((MM => MM._close().catch((() => {}))))), this._unfinalizedTargets.clear(), MM()
          }
        })()
      }
    }
  },
  34756: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => jM,
      h: () => SM
    });
    var OM = iM(34685);
    const SM = new Uint8Array(0);
    class jM {
      constructor(MM, rM, iM, OM) {
        let jM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
          aM = arguments.length > 5 ? arguments[5] : void 0,
          PM = arguments.length > 6 ? arguments[6] : void 0;
        if (this.data = MM, this.type = rM, this.timestamp = iM, this.duration = OM, this.sequenceNumber = jM, MM === SM && void 0 === aM) throw new Error("Internal error: byteLength must be explicitly provided when constructing metadata-only packets.");
        if (void 0 === aM && (aM = MM.byteLength), !(MM instanceof Uint8Array)) throw new TypeError("data must be a Uint8Array.");
        if ("key" !== rM && "delta" !== rM) throw new TypeError('type must be either "key" or "delta".');
        if (!Number.isFinite(iM)) throw new TypeError("timestamp must be a number.");
        if (!Number.isFinite(OM) || OM < 0) throw new TypeError("duration must be a non-negative number.");
        if (!Number.isFinite(jM)) throw new TypeError("sequenceNumber must be a number.");
        if (!Number.isInteger(aM) || aM < 0) throw new TypeError("byteLength must be a non-negative integer.");
        if (void 0 !== PM && ("object" !== typeof PM || !PM)) throw new TypeError("sideData, when provided, must be an object.");
        if (void 0 !== PM?.alpha && !(PM.alpha instanceof Uint8Array)) throw new TypeError("sideData.alpha, when provided, must be a Uint8Array.");
        if (void 0 !== PM?.alphaByteLength && (!Number.isInteger(PM.alphaByteLength) || PM.alphaByteLength < 0)) throw new TypeError("sideData.alphaByteLength, when provided, must be a non-negative integer.");
        this.byteLength = aM, this.sideData = PM ?? {}, this.sideData.alpha && void 0 === this.sideData.alphaByteLength && (this.sideData.alphaByteLength = this.sideData.alpha.byteLength)
      }
      get isMetadataOnly() {
        return this.data === SM
      }
      get microsecondTimestamp() {
        return Math.trunc(OM.q * this.timestamp)
      }
      get microsecondDuration() {
        return Math.trunc(OM.q * this.duration)
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
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.type;
        if (!this.sideData.alpha) throw new TypeError("This packet does not contain alpha side data.");
        if (this.isMetadataOnly) throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");
        if ("undefined" === typeof EncodedVideoChunk) throw new Error("EncodedVideoChunk is not available in this environment.");
        return new EncodedVideoChunk({
          data: this.sideData.alpha,
          type: MM,
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
      static fromEncodedChunk(MM, rM) {
        if (!(MM instanceof EncodedVideoChunk || MM instanceof EncodedAudioChunk)) throw new TypeError("chunk must be an EncodedVideoChunk or EncodedAudioChunk.");
        const iM = new Uint8Array(MM.byteLength);
        return MM.copyTo(iM), new jM(iM, MM.type, MM.timestamp / 1e6, (MM.duration ?? 0) / 1e6, void 0, void 0, rM)
      }
      clone(MM) {
        if (void 0 !== MM && ("object" !== typeof MM || null === MM)) throw new TypeError("options, when provided, must be an object.");
        if (void 0 !== MM?.data && !(MM.data instanceof Uint8Array)) throw new TypeError("options.data, when provided, must be a Uint8Array.");
        if (void 0 !== MM?.type && "key" !== MM.type && "delta" !== MM.type) throw new TypeError('options.type, when provided, must be either "key" or "delta".');
        if (void 0 !== MM?.timestamp && !Number.isFinite(MM.timestamp)) throw new TypeError("options.timestamp, when provided, must be a number.");
        if (void 0 !== MM?.duration && !Number.isFinite(MM.duration)) throw new TypeError("options.duration, when provided, must be a number.");
        if (void 0 !== MM?.sequenceNumber && !Number.isFinite(MM.sequenceNumber)) throw new TypeError("options.sequenceNumber, when provided, must be a number.");
        if (void 0 !== MM?.sideData && ("object" !== typeof MM.sideData || null === MM.sideData)) throw new TypeError("options.sideData, when provided, must be an object.");
        return new jM(MM?.data ?? this.data, MM?.type ?? this.type, MM?.timestamp ?? this.timestamp, MM?.duration ?? this.duration, MM?.sequenceNumber ?? this.sequenceNumber, this.byteLength, MM?.sideData ?? this.sideData)
      }
    }
  },
  34771: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => WM,
      d: () => HM,
      e: () => NM,
      i: () => fM,
      k: () => GM
    });
    var OM = iM(34685),
      SM = iM(34727),
      jM = function(MM, rM, iM) {
        if (null !== rM && void 0 !== rM) {
          if ("object" !== typeof rM && "function" !== typeof rM) throw new TypeError("Object expected.");
          var OM, SM;
          if (iM) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            OM = rM[Symbol.asyncDispose]
          }
          if (void 0 === OM) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            OM = rM[Symbol.dispose], iM && (SM = OM)
          }
          if ("function" !== typeof OM) throw new TypeError("Object not disposable.");
          SM && (OM = function() {
            try {
              SM.call(this)
            } catch (MM) {
              return Promise.reject(MM)
            }
          }), MM.stack.push({
            value: rM,
            dispose: OM,
            async: iM
          })
        } else iM && MM.stack.push({
          async: !0
        });
        return rM
      },
      aM = function(MM) {
        return function(rM) {
          function iM(iM) {
            rM.error = rM.hasError ? new MM(iM, rM.error, "An error was suppressed during disposal.") : iM, rM.hasError = !0
          }
          var OM, SM = 0;
          return function MM() {
            for (; OM = rM.stack.pop();) try {
              if (!OM.async && 1 === SM) return SM = 0, rM.stack.push(OM), Promise.resolve().then(MM);
              if (OM.dispose) {
                var jM = OM.dispose.call(OM.value);
                if (OM.async) return SM |= 2, Promise.resolve(jM).then(MM, (function(rM) {
                  return iM(rM), MM()
                }))
              } else SM |= 1
            } catch (aM) {
              iM(aM)
            }
            if (1 === SM) return rM.hasError ? Promise.reject(rM.error) : Promise.resolve();
            if (rM.hasError) throw rM.error
          }()
        }
      }("function" === typeof SuppressedError ? SuppressedError : function(MM, rM, iM) {
        var OM = new Error(iM);
        return OM.name = "SuppressedError", OM.error = MM, OM.suppressed = rM, OM
      });
    (0, OM.uc)();
    let PM = -1 / 0,
      nM = -1 / 0,
      QM = null;
    "undefined" !== typeof FinalizationRegistry && (QM = new FinalizationRegistry((MM => {
      const rM = performance.now();
      "video" === MM.type ? (rM - PM >= 1e3 && (SM.d._error("A VideoSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your VideoSamples as soon as you're done using them."), PM = rM), "undefined" !== typeof VideoFrame && MM.data instanceof VideoFrame && MM.data.close()) : (rM - nM >= 1e3 && (SM.d._error("An AudioSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your AudioSamples as soon as you're done using them."), nM = rM), "undefined" !== typeof AudioData && MM.data instanceof AudioData && MM.data.close())
    })));
    class zM {
      constructor() {
        this._referenceCount = 0, this._lastAllocationBuffer = null
      }
    }
    const LM = ["I420", "I420P10", "I420P12", "I420A", "I420AP10", "I420AP12", "I422", "I422P10", "I422P12", "I422A", "I422AP10", "I422AP12", "I444", "I444P10", "I444P12", "I444A", "I444AP10", "I444AP12", "NV12", "RGBA", "RGBX", "BGRA", "BGRX"],
      mM = new Set(LM);
    class HM {
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
        return Math.trunc(OM.q * this.timestamp)
      }
      get microsecondDuration() {
        return Math.trunc(OM.q * this.duration)
      }
      get hasAlpha() {
        return this.format && this.format.includes("A")
      }
      constructor(MM, rM) {
        if (this._closed = !1, MM instanceof ArrayBuffer || "undefined" !== typeof SharedArrayBuffer && MM instanceof SharedArrayBuffer || ArrayBuffer.isView(MM)) {
          if (!rM || "object" !== typeof rM) throw new TypeError("init must be an object.");
          if (void 0 === rM.format || !mM.has(rM.format)) throw new TypeError("init.format must be one of: " + LM.join(", "));
          if (!Number.isInteger(rM.codedWidth) || rM.codedWidth <= 0) throw new TypeError("init.codedWidth must be a positive integer.");
          if (!Number.isInteger(rM.codedHeight) || rM.codedHeight <= 0) throw new TypeError("init.codedHeight must be a positive integer.");
          if (void 0 !== rM.rotation && ![0, 90, 180, 270].includes(rM.rotation)) throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");
          if (void 0 !== rM.flip && "boolean" !== typeof rM.flip) throw new TypeError("init.flip, when provided, must be a boolean.");
          if (!Number.isFinite(rM.timestamp)) throw new TypeError("init.timestamp must be a number.");
          if (void 0 !== rM.duration && (!Number.isFinite(rM.duration) || rM.duration < 0)) throw new TypeError("init.duration, when provided, must be a non-negative number.");
          if (void 0 !== rM.layout) {
            if (!Array.isArray(rM.layout)) throw new TypeError("init.layout, when provided, must be an array.");
            for (const MM of rM.layout) {
              if (!MM || "object" !== typeof MM || Array.isArray(MM)) throw new TypeError("Each entry in init.layout must be an object.");
              if (!Number.isInteger(MM.offset) || MM.offset < 0) throw new TypeError("plane.offset must be a non-negative integer.");
              if (!Number.isInteger(MM.stride) || MM.stride < 0) throw new TypeError("plane.stride must be a non-negative integer.")
            }
          }
          if (void 0 !== rM.visibleRect && (0, OM.vd)(rM.visibleRect, "init.visibleRect"), void 0 !== rM.displayWidth && (!Number.isInteger(rM.displayWidth) || rM.displayWidth <= 0)) throw new TypeError("init.displayWidth, when provided, must be a positive integer.");
          if (void 0 !== rM.displayHeight && (!Number.isInteger(rM.displayHeight) || rM.displayHeight <= 0)) throw new TypeError("init.displayHeight, when provided, must be a positive integer.");
          if (void 0 !== rM.displayWidth !== (void 0 !== rM.displayHeight)) throw new TypeError("init.displayWidth and init.displayHeight must be either both provided or both omitted.");
          this.format = rM.format, this.rotation = rM.rotation ?? 0, this.flip = rM.flip ?? !1, this.timestamp = rM.timestamp, this.duration = rM.duration ?? 0;
          const iM = rM.layout ?? eM(rM.format, rM.codedWidth, rM.codedHeight);
          let SM = rM.colorSpace ?? null;
          null === SM && (SM = "RGBA" === this.format || "RGBX" === this.format || "BGRA" === this.format || "BGRX" === this.format ? {
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
            left: rM.visibleRect?.left ?? 0,
            top: rM.visibleRect?.top ?? 0,
            width: rM.visibleRect?.width ?? rM.codedWidth,
            height: rM.visibleRect?.height ?? rM.codedHeight
          }, void 0 !== rM.displayWidth ? (this.squarePixelWidth = this.rotation % 180 === 0 ? rM.displayWidth : rM.displayHeight, this.squarePixelHeight = this.rotation % 180 === 0 ? rM.displayHeight : rM.displayWidth) : (this.squarePixelWidth = this.visibleRect.width, this.squarePixelHeight = this.visibleRect.height), this._data = rM._doNotCopy ? (0, OM.od)(MM) : (0, OM.od)(MM).slice(), this._layout = iM, this.colorSpace = new lM(SM)
        } else if ("undefined" !== typeof VideoFrame && MM instanceof VideoFrame) {
          if (void 0 !== rM?.rotation && ![0, 90, 180, 270].includes(rM.rotation)) throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");
          if (void 0 !== rM?.flip && "boolean" !== typeof rM.flip) throw new TypeError("init.flip, when provided, must be a boolean.");
          if (void 0 !== rM?.timestamp && !Number.isFinite(rM?.timestamp)) throw new TypeError("init.timestamp, when provided, must be a number.");
          if (void 0 !== rM?.duration && (!Number.isFinite(rM.duration) || rM.duration < 0)) throw new TypeError("init.duration, when provided, must be a non-negative number.");
          void 0 !== rM?.visibleRect && (0, OM.vd)(rM.visibleRect, "init.visibleRect"), this._data = MM, this._layout = null, this.format = MM.format, this.visibleRect = {
            left: MM.visibleRect?.x ?? 0,
            top: MM.visibleRect?.y ?? 0,
            width: MM.visibleRect?.width ?? MM.codedWidth,
            height: MM.visibleRect?.height ?? MM.codedHeight
          }, this.rotation = rM?.rotation ?? 0, this.flip = rM?.flip ?? !1, this.squarePixelWidth = MM.displayWidth, this.squarePixelHeight = MM.displayHeight, this.timestamp = rM?.timestamp ?? MM.timestamp / 1e6, this.duration = rM?.duration ?? (MM.duration ?? 0) / 1e6, this.colorSpace = new lM(MM.colorSpace)
        } else if ("undefined" !== typeof HTMLImageElement && MM instanceof HTMLImageElement || "undefined" !== typeof SVGImageElement && MM instanceof SVGImageElement || "undefined" !== typeof ImageBitmap && MM instanceof ImageBitmap || "undefined" !== typeof HTMLVideoElement && MM instanceof HTMLVideoElement || "undefined" !== typeof HTMLCanvasElement && MM instanceof HTMLCanvasElement || "undefined" !== typeof OffscreenCanvas && MM instanceof OffscreenCanvas) {
          if (!rM || "object" !== typeof rM) throw new TypeError("init must be an object.");
          if (void 0 !== rM.rotation && ![0, 90, 180, 270].includes(rM.rotation)) throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");
          if (void 0 !== rM.flip && "boolean" !== typeof rM.flip) throw new TypeError("init.flip, when provided, must be a boolean.");
          if (!Number.isFinite(rM.timestamp)) throw new TypeError("init.timestamp must be a number.");
          if (void 0 !== rM.duration && (!Number.isFinite(rM.duration) || rM.duration < 0)) throw new TypeError("init.duration, when provided, must be a non-negative number.");
          if (void 0 !== rM.visibleRect && (0, OM.vd)(rM.visibleRect, "init.visibleRect"), "undefined" !== typeof VideoFrame) return new HM(new VideoFrame(MM, {
            timestamp: Math.trunc(rM.timestamp * OM.q),
            duration: Math.trunc((rM.duration ?? 0) * OM.q) || void 0,
            visibleRect: rM.visibleRect && {
              x: rM.visibleRect.left,
              y: rM.visibleRect.top,
              width: rM.visibleRect.width,
              height: rM.visibleRect.height
            }
          }), rM);
          let iM = 0,
            SM = 0;
          if ("naturalWidth" in MM ? (iM = MM.naturalWidth, SM = MM.naturalHeight) : "videoWidth" in MM ? (iM = MM.videoWidth, SM = MM.videoHeight) : "width" in MM && (iM = Number(MM.width), SM = Number(MM.height)), !iM || !SM) throw new TypeError("Could not determine dimensions.");
          const jM = rM.visibleRect ?? {
              left: 0,
              top: 0,
              width: iM,
              height: SM
            },
            aM = new OffscreenCanvas(jM.width, jM.height),
            PM = aM.getContext("2d", {
              alpha: (0, OM.Cb)(),
              willReadFrequently: !0
            });
          if (!PM) throw new Error("OffscreenCanvas must have support for the '2d' context in order to create a VideoSample from this data.");
          PM.drawImage(MM, -jM.left, -jM.top), this._data = aM, this._layout = null, this.format = "RGBX", this.visibleRect = {
            left: 0,
            top: 0,
            width: jM.width,
            height: jM.height
          }, this.squarePixelWidth = jM.width, this.squarePixelHeight = jM.height, this.rotation = rM.rotation ?? 0, this.flip = rM.flip ?? !1, this.timestamp = rM.timestamp, this.duration = rM.duration ?? 0, this.colorSpace = new lM({
            matrix: "rgb",
            primaries: "bt709",
            transfer: "iec61966-2-1",
            fullRange: !0
          })
        } else {
          if (!(MM instanceof zM)) throw new TypeError("Invalid data type: Must be a BufferSource, CanvasImageSource, or VideoSampleResource.");
          if (!rM || "object" !== typeof rM) throw new TypeError("init must be an object.");
          if (void 0 !== rM.rotation && ![0, 90, 180, 270].includes(rM.rotation)) throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");
          if (void 0 !== rM.flip && "boolean" !== typeof rM.flip) throw new TypeError("init.flip, when provided, must be a boolean.");
          if (!Number.isFinite(rM.timestamp)) throw new TypeError("init.timestamp must be a number.");
          if (void 0 !== rM.duration && (!Number.isFinite(rM.duration) || rM.duration < 0)) throw new TypeError("init.duration, when provided, must be a non-negative number.");
          if (this._data = MM, MM._referenceCount++, this.format = MM.getFormat(), null !== this.format && !LM.includes(this.format)) throw new TypeError("getFormat() must return a VideoSamplePixelFormat or null.");
          if (this.visibleRect = {
              left: 0,
              top: 0,
              width: MM.getCodedWidth(),
              height: MM.getCodedHeight()
            }, !Number.isInteger(this.visibleRect.width) || this.visibleRect.width <= 0) throw new TypeError("getCodedWidth() must return a positive integer.");
          if (!Number.isInteger(this.visibleRect.height) || this.visibleRect.height <= 0) throw new TypeError("getCodedHeight() must return a positive integer.");
          if (this.squarePixelWidth = MM.getSquarePixelWidth(), !Number.isInteger(this.squarePixelWidth) || this.squarePixelWidth <= 0) throw new TypeError("getSquarePixelWidth() must return a positive integer.");
          if (this.squarePixelHeight = MM.getSquarePixelHeight(), !Number.isInteger(this.squarePixelHeight) || this.squarePixelHeight <= 0) throw new TypeError("getSquarePixelHeight() must return a positive integer.");
          this.rotation = rM.rotation ?? 0, this.flip = rM.flip ?? !1, this.timestamp = rM.timestamp, this.duration = rM.duration ?? 0, this.colorSpace = MM.getColorSpace()
        }
        this.encodeOptions = rM?.encodeOptions ?? {}, this.pixelAspectRatio = (0, OM.cd)({
          num: this.squarePixelWidth * this.codedHeight,
          den: this.squarePixelHeight * this.codedWidth
        }), QM?.register(this, {
          type: "video",
          data: this._data
        }, this)
      }
      clone() {
        if (this._closed) throw new Error("VideoSample is closed.");
        return (0, OM.J)(null !== this._data), this._data instanceof zM ? new HM(this._data, {
          timestamp: this.timestamp,
          duration: this.duration,
          rotation: this.rotation,
          flip: this.flip,
          encodeOptions: this.encodeOptions
        }) : EM(this._data) ? new HM(this._data.clone(), {
          timestamp: this.timestamp,
          duration: this.duration,
          rotation: this.rotation,
          flip: this.flip,
          encodeOptions: this.encodeOptions
        }) : this._data instanceof Uint8Array ? ((0, OM.J)(this._layout), new HM(this._data, {
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
        })) : new HM(this._data, {
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
        this._closed || (QM?.unregister(this), this._data instanceof zM ? (this._data._referenceCount--, 0 === this._data._referenceCount && this._data.close()) : EM(this._data) ? this._data.close() : this._data = null, this._closed = !0)
      }
      allocationSize() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (CM(MM), this._closed) throw new Error("VideoSample is closed.");
        if (null == (MM.format ?? this.format)) throw new Error("Cannot get allocation size when format is null.");
        if (EM(this._data)) return this._data.allocationSize(MM);
        return wM(this, MM).allocationSize
      }
      async copyTo(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!(0, OM.vb)(MM)) throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");
        if (CM(rM), this._closed) throw new Error("VideoSample is closed.");
        if (null == (rM.format ?? this.format)) throw new Error("Cannot copy video sample data when format is null.");
        if ((0, OM.J)(null !== this._data), EM(this._data)) return this._data.copyTo(MM, rM);
        if (rM.format && !["RGBA", "RGBX", "BGRA", "BGRX"].includes(this.format) && ["RGBA", "RGBX", "BGRA", "BGRX"].includes(rM.format)) {
          if (!(this._data instanceof zM)) {
            if ("undefined" === typeof VideoFrame) throw new Error("For this sample, converting from a non-RGB to an RGB format requires VideoFrame to be defined.");
            const iM = this.toVideoFrame(),
              OM = await iM.copyTo(MM, rM);
            return iM.close(), OM
          } {
            const iM = {
              stack: [],
              error: void 0,
              hasError: !1
            };
            try {
              const OM = jM(iM, await this._data.toRgbSample({
                timestamp: this.timestamp,
                duration: this.duration,
                rotation: this.rotation,
                flip: this.flip
              }, rM.colorSpace ?? "srgb"), !1);
              if (!(OM instanceof HM)) throw new TypeError("toRgbSample() must return a VideoSample.");
              if (!["RGBA", "RGBX", "BGRA", "BGRX"].includes(OM.format)) throw new Error(`Sample returned by toRgbSample was expected to have an RGB format, got '${OM.format}' instead.`);
              return await OM.copyTo(MM, rM)
            } catch (mM) {
              iM.error = mM, iM.hasError = !0
            } finally {
              aM(iM)
            }
          }
        }
        const iM = wM(this, rM);
        (0, OM.J)(this.format);
        const SM = (0, OM.od)(MM);
        if (SM.byteLength < iM.allocationSize) throw new TypeError(`Destination buffer too small. Required: ${iM.allocationSize}, Available: ${SM.byteLength}`);
        const PM = bM(this.format);
        let nM;
        if (this._data instanceof zM) {
          let MM = this._data.getDataPlanes();
          if ((0, OM.Pb)(MM) && (MM = await MM), !Array.isArray(MM) || MM.some((MM => !(MM.data instanceof Uint8Array) || !Number.isInteger(MM.stride) || MM.stride < 0))) throw new TypeError('getDataPlanes() must return an array of objects with a Uint8Array "data" property and a non-negative integer "stride" property.');
          nM = MM
        } else if (this._data instanceof Uint8Array)(0, OM.J)(this._layout), (0, OM.J)(this._layout.length === PM.length), nM = this._layout.map(((MM, rM) => {
          const iM = Math.ceil(this.codedHeight / PM[rM].heightDivisor);
          return {
            data: this._data.subarray(MM.offset, MM.offset + MM.stride * iM),
            stride: MM.stride
          }
        }));
        else {
          const MM = this._data.getContext("2d");
          (0, OM.J)(MM);
          const rM = MM.getImageData(0, 0, this.codedWidth, this.codedHeight);
          nM = [{
            data: (0, OM.od)(rM.data),
            stride: 4 * this.codedWidth
          }]
        }
        const QM = [],
          LM = PM.length;
        for (let OM = 0; OM < LM; OM++) {
          const MM = iM.computedLayouts[OM],
            rM = nM[OM].stride,
            jM = nM[OM].data;
          let aM = MM.sourceTop * rM;
          aM += MM.sourceLeftBytes;
          let PM = MM.destinationOffset;
          const zM = MM.sourceWidthBytes,
            LM = {
              offset: PM,
              stride: MM.destinationStride
            };
          for (let iM = 0; iM < MM.sourceHeight; iM++) {
            if (aM + zM > jM.byteLength) throw new Error("Source buffer OOB read.");
            if (PM + zM > SM.byteLength) throw new Error("Destination buffer OOB write.");
            const iM = jM.subarray(aM, aM + zM);
            SM.set(iM, PM), aM += rM, PM += MM.destinationStride
          }
          QM.push(LM)
        }
        if (void 0 !== rM.format) {
          const MM = this.format.startsWith("RGB") !== rM.format.startsWith("RGB"),
            OM = this.format.includes("X") && rM.format.includes("A");
          if (MM || OM)
            for (let rM = 0; rM < iM.allocationSize; rM += 4) {
              if (MM) {
                const MM = SM[rM],
                  iM = SM[rM + 2];
                SM[rM] = iM, SM[rM + 2] = MM
              }
              OM && (SM[rM + 3] = 255)
            }
        }
        return QM
      }
      toVideoFrame() {
        if (this._closed) throw new Error("VideoSample is closed.");
        if ((0, OM.J)(null !== this._data), this._data instanceof zM) {
          if (null === this.format) throw new Error("Cannot convert a VideoSampleResource-backed VideoSample to VideoFrame if format is null.");
          const MM = this._data.getDataPlanes();
          if ((0, OM.Pb)(MM)) throw new Error("Cannot convert a VideoSampleResource-backed VideoSample to VideoFrame if getDataPlanes() returns a promise.");
          const rM = MM.reduce(((MM, rM) => MM + rM.data.byteLength), 0),
            iM = new Uint8Array(rM);
          let SM = 0;
          const jM = [];
          for (const OM of MM) iM.set(OM.data, SM), jM.push(SM), SM += OM.data.byteLength;
          return new VideoFrame(iM, {
            format: this.format,
            layout: MM.map(((MM, rM) => ({
              offset: jM[rM],
              stride: MM.stride
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
        return EM(this._data) ? new VideoFrame(this._data, {
          timestamp: this.microsecondTimestamp,
          duration: this.microsecondDuration || void 0
        }) : this._data instanceof Uint8Array ? ((0, OM.J)(this._layout), new VideoFrame(this._data, {
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
      draw(MM, rM, iM, OM, SM, jM, aM, PM, nM) {
        let QM = 0,
          zM = 0,
          LM = this.displayWidth,
          mM = this.displayHeight,
          HM = 0,
          hM = 0,
          JM = this.displayWidth,
          dM = this.displayHeight;
        if (void 0 !== jM ? (QM = rM, zM = iM, LM = OM, mM = SM, HM = jM, hM = aM, void 0 !== PM ? (JM = PM, dM = nM) : (JM = LM, dM = mM)) : (HM = rM, hM = iM, void 0 !== OM && (JM = OM, dM = SM)), !("undefined" !== typeof CanvasRenderingContext2D && MM instanceof CanvasRenderingContext2D || "undefined" !== typeof OffscreenCanvasRenderingContext2D && MM instanceof OffscreenCanvasRenderingContext2D)) throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");
        if (!Number.isFinite(QM)) throw new TypeError("sx must be a number.");
        if (!Number.isFinite(zM)) throw new TypeError("sy must be a number.");
        if (!Number.isFinite(LM) || LM < 0) throw new TypeError("sWidth must be a non-negative number.");
        if (!Number.isFinite(mM) || mM < 0) throw new TypeError("sHeight must be a non-negative number.");
        if (!Number.isFinite(HM)) throw new TypeError("dx must be a number.");
        if (!Number.isFinite(hM)) throw new TypeError("dy must be a number.");
        if (!Number.isFinite(JM) || JM < 0) throw new TypeError("dWidth must be a non-negative number.");
        if (!Number.isFinite(dM) || dM < 0) throw new TypeError("dHeight must be a non-negative number.");
        if (this._closed) throw new Error("VideoSample is closed.");
        ({
          sx: QM,
          sy: zM,
          sWidth: LM,
          sHeight: mM
        } = this._unmapSourceRegion(QM, zM, LM, mM, this.rotation, this.flip));
        const yM = this.toCanvasImageSource();
        MM.save();
        const lM = HM + JM / 2,
          EM = hM + dM / 2;
        MM.translate(lM, EM), this.flip && MM.scale(-1, 1), MM.rotate(this.rotation * Math.PI / 180);
        const UM = this.rotation % 180 === 0 ? 1 : JM / dM;
        MM.scale(1 / UM, UM), MM.drawImage(yM, QM, zM, LM, mM, -JM / 2, -dM / 2, JM, dM), MM.restore()
      }
      drawWithFit(MM, rM) {
        if (!("undefined" !== typeof CanvasRenderingContext2D && MM instanceof CanvasRenderingContext2D || "undefined" !== typeof OffscreenCanvasRenderingContext2D && MM instanceof OffscreenCanvasRenderingContext2D)) throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");
        if (!rM || "object" !== typeof rM) throw new TypeError("options must be an object.");
        if (!["fill", "contain", "cover"].includes(rM.fit)) throw new TypeError("options.fit must be 'fill', 'contain', or 'cover'.");
        if (void 0 !== rM.rotation && ![0, 90, 180, 270].includes(rM.rotation)) throw new TypeError("options.rotation, when provided, must be 0, 90, 180, or 270.");
        if (void 0 !== rM.flip && "boolean" !== typeof rM.flip) throw new TypeError("options.flip, when provided, must be a boolean.");
        void 0 !== rM.crop && GM(rM.crop, "options.");
        const iM = MM.canvas.width,
          OM = MM.canvas.height,
          SM = rM.rotation ?? this.rotation,
          jM = rM.flip ?? this.flip,
          [aM, PM] = SM % 180 === 0 ? [this.squarePixelWidth, this.squarePixelHeight] : [this.squarePixelHeight, this.squarePixelWidth];
        let nM, QM, zM, LM, mM = rM.crop;
        mM && (mM = UM(mM, aM, PM));
        const {
          sx: HM,
          sy: hM,
          sWidth: JM,
          sHeight: dM
        } = this._unmapSourceRegion(rM.crop?.left ?? 0, rM.crop?.top ?? 0, rM.crop?.width ?? aM, rM.crop?.height ?? PM, SM, jM);
        if ("fill" === rM.fit) nM = 0, QM = 0, zM = iM, LM = OM;
        else {
          const [MM, SM] = rM.crop ? [rM.crop.width, rM.crop.height] : [aM, PM], jM = "contain" === rM.fit ? Math.min(iM / MM, OM / SM) : Math.max(iM / MM, OM / SM);
          zM = MM * jM, LM = SM * jM, nM = (iM - zM) / 2, QM = (OM - LM) / 2
        }
        MM.save();
        const yM = SM % 180 === 0 ? 1 : zM / LM;
        MM.translate(iM / 2, OM / 2), jM && MM.scale(-1, 1), MM.rotate(SM * Math.PI / 180), MM.scale(1 / yM, yM), MM.translate(-iM / 2, -OM / 2), MM.drawImage(this.toCanvasImageSource(), HM, hM, JM, dM, nM, QM, zM, LM), MM.restore()
      }
      _unmapSourceRegion(MM, rM, iM, OM, SM, jM) {
        if (jM) {
          MM = (SM % 180 === 0 ? this.squarePixelWidth : this.squarePixelHeight) - MM - iM
        }
        return 90 === SM ? [MM, rM, iM, OM] = [rM, this.squarePixelHeight - MM - iM, OM, iM] : 180 === SM ? [MM, rM] = [this.squarePixelWidth - MM - iM, this.squarePixelHeight - rM - OM] : 270 === SM && ([MM, rM, iM, OM] = [this.squarePixelWidth - rM - OM, MM, OM, iM]), {
          sx: MM,
          sy: rM,
          sWidth: iM,
          sHeight: OM
        }
      }
      _drawWithFitAndMipmapping(MM, rM, iM) {
        const OM = MM.width,
          SM = MM.height,
          [jM, aM] = iM.rotation % 180 === 0 ? [this.squarePixelWidth, this.squarePixelHeight] : [this.squarePixelHeight, this.squarePixelWidth],
          PM = iM.crop ? iM.crop.width : jM,
          nM = iM.crop ? iM.crop.height : aM;
        let QM = 0;
        2 * OM < PM && 2 * SM < nM && (QM = Math.floor(Math.log2(Math.min(PM / OM, nM / SM))));
        const zM = OM * 2 ** QM,
          LM = SM * 2 ** QM,
          {
            canvas: mM,
            context: HM,
            isNew: hM
          } = QM > 0 ? yM(zM, LM) : {
            canvas: MM,
            context: rM,
            isNew: iM.targetIsFresh
          };
        HM.imageSmoothingQuality = "high", iM.fillBlack ? (HM.fillStyle = "black", HM.fillRect(0, 0, zM, LM)) : hM || HM.clearRect(0, 0, zM, LM), this.drawWithFit(HM, {
          fit: iM.fit,
          rotation: iM.rotation,
          flip: iM.flip,
          crop: iM.crop
        }), HM.globalCompositeOperation = "copy";
        for (let JM = QM; JM > 1; JM--) {
          const MM = OM * 2 ** JM,
            rM = SM * 2 ** JM;
          HM.drawImage(mM, 0, 0, MM, rM, 0, 0, MM / 2, rM / 2)
        }
        HM.globalCompositeOperation = "source-over", QM > 0 && (rM.imageSmoothingQuality = "high", rM.globalCompositeOperation = "copy", rM.drawImage(mM, 0, 0, 2 * OM, 2 * SM, 0, 0, OM, SM), rM.globalCompositeOperation = "source-over")
      }
      toCanvasImageSource() {
        if (this._closed) throw new Error("VideoSample is closed.");
        if ((0, OM.J)(null !== this._data), this._data instanceof zM || this._data instanceof Uint8Array) {
          const MM = this.toVideoFrame();
          return queueMicrotask((() => MM.close())), MM
        }
        return this._data
      }
      async transform(MM) {
        if (!MM || "object" !== typeof MM) throw new TypeError("options must be an object.");
        if (void 0 !== MM.width && (!Number.isInteger(MM.width) || MM.width <= 0)) throw new TypeError("options.width, when provided, must be a positive integer.");
        if (void 0 !== MM.height && (!Number.isInteger(MM.height) || MM.height <= 0)) throw new TypeError("options.height, when provided, must be a positive integer.");
        if (void 0 !== MM.roundDimensionsTo && (!Number.isInteger(MM.roundDimensionsTo) || MM.roundDimensionsTo <= 0)) throw new TypeError("options.roundDimensionsTo, when provided, must be a positive integer.");
        if (void 0 !== MM.fit && !["fill", "contain", "cover"].includes(MM.fit)) throw new TypeError('options.fit, when provided, must be one of "fill", "contain", or "cover".');
        if (void 0 !== MM.width && void 0 !== MM.height && void 0 === MM.fit) throw new TypeError("When both options.width and options.height are provided, options.fit must also be provided.");
        if (void 0 !== MM.rotate && ![0, 90, 180, 270].includes(MM.rotate)) throw new TypeError("options.rotate, when provided, must be 0, 90, 180 or 270.");
        if (void 0 !== MM.flip && "boolean" !== typeof MM.flip) throw new TypeError("options.flip, when provided, must be a boolean.");
        if (void 0 !== MM.crop && GM(MM.crop, "options."), void 0 !== MM.alpha && !["keep", "discard"].includes(MM.alpha)) throw new TypeError("options.alpha, when provided, must be 'keep' or 'discard'.");
        const {
          rotation: rM,
          flip: iM
        } = (0, OM.ib)(this.rotation, this.flip, MM.rotate ?? 0, MM.flip ?? !1), [SM, jM] = rM % 180 === 0 ? [this.squarePixelWidth, this.squarePixelHeight] : [this.squarePixelHeight, this.squarePixelWidth];
        let aM = MM.crop;
        aM && (aM = UM(aM, SM, jM));
        const PM = aM ? aM.width : SM,
          nM = aM ? aM.height : jM,
          QM = PM / nM;
        let zM, LM;
        void 0 !== MM.width && void 0 === MM.height ? (zM = MM.width, LM = zM / QM) : void 0 === MM.width && void 0 !== MM.height ? (LM = MM.height, zM = LM * QM) : void 0 !== MM.width && void 0 !== MM.height ? (zM = MM.width, LM = MM.height) : (zM = PM, LM = nM), zM = (0, OM.Nc)(zM, MM.roundDimensionsTo ?? 1), LM = (0, OM.Nc)(LM, MM.roundDimensionsTo ?? 1);
        const mM = {
          width: zM,
          height: LM,
          fit: MM.fit ?? "fill",
          rotation: rM,
          flip: iM,
          crop: aM ?? {
            left: 0,
            top: 0,
            width: SM,
            height: jM
          },
          alpha: MM.alpha ?? "keep"
        };
        for (const HM of hM) {
          let MM = HM(this, mM);
          if ((0, OM.Pb)(MM) && (MM = await MM), null !== MM) return MM
        }
        const {
          canvas: JM,
          context: dM,
          isNew: lM
        } = yM(mM.width, mM.height);
        return this._drawWithFitAndMipmapping(JM, dM, {
          fit: mM.fit,
          rotation: mM.rotation,
          flip: mM.flip,
          crop: mM.crop,
          targetIsFresh: lM,
          fillBlack: "discard" === mM.alpha
        }), new HM(JM, {
          timestamp: this.timestamp,
          duration: this.duration,
          rotation: 0,
          flip: !1
        })
      }
      setRotation(MM) {
        if (![0, 90, 180, 270].includes(MM)) throw new TypeError("newRotation must be 0, 90, 180, or 270.");
        this.rotation = MM
      }
      setFlip(MM) {
        if ("boolean" !== typeof MM) throw new TypeError("newFlip must be a boolean.");
        this.flip = MM
      }
      setTimestamp(MM) {
        if (!Number.isFinite(MM)) throw new TypeError("newTimestamp must be a number.");
        this.timestamp = MM
      }
      setDuration(MM) {
        if (!Number.isFinite(MM) || MM < 0) throw new TypeError("newDuration must be a non-negative number.");
        this.duration = MM
      }
      setEncodeOptions(MM) {
        if (!MM || "object" !== typeof MM) throw new TypeError("newEncodeOptions must be an object.");
        this.encodeOptions = MM
      } [Symbol.dispose]() {
        this.close()
      }
    }
    const hM = [],
      JM = [];
    let dM = 0;
    const yM = (MM, rM) => {
      for (const OM of JM)
        if (OM.canvas.width === MM && OM.canvas.height === rM) return OM.age = dM++, {
          canvas: OM.canvas,
          context: OM.context,
          isNew: !1
        };
      let iM;
      if ("undefined" !== typeof OffscreenCanvas) iM = new OffscreenCanvas(MM, rM);
      else {
        if ("undefined" === typeof window || "undefined" === typeof document) throw new Error("Cannot transform VideoSamples in this environment. Either run in an environment with OffscreenCanvas or HTMLCanvasElement, or supply a custom VideoSample transformer using registerVideoSampleTransformer().");
        iM = document.createElement("canvas"), iM.width = MM, iM.height = rM
      }
      const SM = iM.getContext("2d", {
        alpha: !0,
        willReadFrequently: !1
      });
      if (!SM) throw new Error("The '2d' canvas context is required to transform VideoSamples. Register a custom transformer using registerVideoSampleTransformer to work around this limitation.");
      return JM.length >= 3 && JM.splice((0, OM.D)(JM, (MM => MM.age)), 1), JM.push({
        canvas: iM,
        context: SM,
        age: dM++
      }), {
        canvas: iM,
        context: SM,
        isNew: !0
      }
    };
    class lM {
      constructor(MM) {
        if (void 0 !== MM) {
          if (!MM || "object" !== typeof MM) throw new TypeError("init.colorSpace, when provided, must be an object.");
          const rM = Object.keys(OM.c);
          if (null != MM.primaries && !rM.includes(MM.primaries)) throw new TypeError(`init.colorSpace.primaries, when provided, must be one of ${rM.join(", ")}.`);
          const iM = Object.keys(OM.t);
          if (null != MM.transfer && !iM.includes(MM.transfer)) throw new TypeError(`init.colorSpace.transfer, when provided, must be one of ${iM.join(", ")}.`);
          const SM = Object.keys(OM.k);
          if (null != MM.matrix && !SM.includes(MM.matrix)) throw new TypeError(`init.colorSpace.matrix, when provided, must be one of ${SM.join(", ")}.`);
          if (null != MM.fullRange && "boolean" !== typeof MM.fullRange) throw new TypeError("init.colorSpace.fullRange, when provided, must be a boolean.")
        }
        this.primaries = MM?.primaries ?? null, this.transfer = MM?.transfer ?? null, this.matrix = MM?.matrix ?? null, this.fullRange = MM?.fullRange ?? null
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
    const EM = MM => "undefined" !== typeof VideoFrame && MM instanceof VideoFrame,
      UM = (MM, rM, iM) => {
        const SM = Math.min(MM.left, rM),
          jM = Math.min(MM.top, iM),
          aM = Math.min(MM.width, rM - SM),
          PM = Math.min(MM.height, iM - jM);
        return (0, OM.J)(aM >= 0), (0, OM.J)(PM >= 0), {
          left: SM,
          top: jM,
          width: aM,
          height: PM
        }
      },
      GM = (MM, rM) => {
        if (!MM || "object" !== typeof MM) throw new TypeError(rM + "crop, when provided, must be an object.");
        if (!Number.isInteger(MM.left) || MM.left < 0) throw new TypeError(rM + "crop.left must be a non-negative integer.");
        if (!Number.isInteger(MM.top) || MM.top < 0) throw new TypeError(rM + "crop.top must be a non-negative integer.");
        if (!Number.isInteger(MM.width) || MM.width < 0) throw new TypeError(rM + "crop.width must be a non-negative integer.");
        if (!Number.isInteger(MM.height) || MM.height < 0) throw new TypeError(rM + "crop.height must be a non-negative integer.")
      },
      CM = MM => {
        if (!MM || "object" !== typeof MM) throw new TypeError("options must be an object.");
        if (void 0 !== MM.colorSpace && !["display-p3", "srgb"].includes(MM.colorSpace)) throw new TypeError("options.colorSpace, when provided, must be 'display-p3' or 'srgb'.");
        if (void 0 !== MM.format && "string" !== typeof MM.format) throw new TypeError("options.format, when provided, must be a string.");
        if (void 0 !== MM.layout) {
          if (!Array.isArray(MM.layout)) throw new TypeError("options.layout, when provided, must be an array.");
          for (const rM of MM.layout) {
            if (!rM || "object" !== typeof rM) throw new TypeError("Each entry in options.layout must be an object.");
            if (!Number.isInteger(rM.offset) || rM.offset < 0) throw new TypeError("plane.offset must be a non-negative integer.");
            if (!Number.isInteger(rM.stride) || rM.stride < 0) throw new TypeError("plane.stride must be a non-negative integer.")
          }
        }
        if (void 0 !== MM.rect) {
          if (!MM.rect || "object" !== typeof MM.rect) throw new TypeError("options.rect, when provided, must be an object.");
          if (void 0 !== MM.rect.x && (!Number.isInteger(MM.rect.x) || MM.rect.x < 0)) throw new TypeError("options.rect.x, when provided, must be a non-negative integer.");
          if (void 0 !== MM.rect.y && (!Number.isInteger(MM.rect.y) || MM.rect.y < 0)) throw new TypeError("options.rect.y, when provided, must be a non-negative integer.");
          if (void 0 !== MM.rect.width && (!Number.isInteger(MM.rect.width) || MM.rect.width < 0)) throw new TypeError("options.rect.width, when provided, must be a non-negative integer.");
          if (void 0 !== MM.rect.height && (!Number.isInteger(MM.rect.height) || MM.rect.height < 0)) throw new TypeError("options.rect.height, when provided, must be a non-negative integer.")
        }
      },
      eM = (MM, rM, iM) => {
        const OM = bM(MM),
          SM = [];
        let jM = 0;
        for (const aM of OM) {
          const MM = Math.ceil(rM / aM.widthDivisor),
            OM = Math.ceil(iM / aM.heightDivisor),
            PM = MM * aM.sampleBytes,
            nM = PM * OM;
          SM.push({
            offset: jM,
            stride: PM
          }), jM += nM
        }
        return SM
      },
      bM = MM => {
        const rM = (MM, rM, iM, OM, SM) => {
          const jM = [{
            sampleBytes: MM,
            widthDivisor: 1,
            heightDivisor: 1
          }, {
            sampleBytes: rM,
            widthDivisor: iM,
            heightDivisor: OM
          }, {
            sampleBytes: rM,
            widthDivisor: iM,
            heightDivisor: OM
          }];
          return SM && jM.push({
            sampleBytes: MM,
            widthDivisor: 1,
            heightDivisor: 1
          }), jM
        };
        switch (MM) {
          case "I420":
            return rM(1, 1, 2, 2, !1);
          case "I420P10":
          case "I420P12":
            return rM(2, 2, 2, 2, !1);
          case "I420A":
            return rM(1, 1, 2, 2, !0);
          case "I420AP10":
          case "I420AP12":
            return rM(2, 2, 2, 2, !0);
          case "I422":
            return rM(1, 1, 2, 1, !1);
          case "I422P10":
          case "I422P12":
            return rM(2, 2, 2, 1, !1);
          case "I422A":
            return rM(1, 1, 2, 1, !0);
          case "I422AP10":
          case "I422AP12":
            return rM(2, 2, 2, 1, !0);
          case "I444":
            return rM(1, 1, 1, 1, !1);
          case "I444P10":
          case "I444P12":
            return rM(2, 2, 1, 1, !1);
          case "I444A":
            return rM(1, 1, 1, 1, !0);
          case "I444AP10":
          case "I444AP12":
            return rM(2, 2, 1, 1, !0);
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
            (0, OM.G)(MM), (0, OM.J)(!1)
        }
      },
      wM = (MM, rM) => {
        const iM = {
            left: 0,
            top: 0,
            width: MM.codedWidth,
            height: MM.codedHeight
          },
          OM = rM.rect,
          SM = tM(iM, OM, MM.codedWidth, MM.codedHeight, MM.format),
          jM = rM.layout;
        let aM;
        if (rM.format && rM.format !== MM.format) {
          if (!["RGBA", "RGBX", "BGRA", "BGRX"].includes(rM.format)) throw new Error("NotSupportedError: Invalid destination format.");
          aM = rM.format
        } else aM = MM.format;
        return uM(SM, aM, jM)
      },
      tM = (MM, rM, iM, OM, SM) => {
        const jM = {
          ...MM
        };
        if (void 0 !== rM) {
          if (0 === rM.width || 0 === rM.height) throw new TypeError("visibleRect dimensions cannot be zero.");
          if ((rM.x || 0) + (rM.width || 0) > iM) throw new TypeError("visibleRect exceeds codedWidth.");
          if ((rM.y || 0) + (rM.height || 0) > OM) throw new TypeError("visibleRect exceeds codedHeight.");
          jM.x = rM.x || 0, jM.y = rM.y || 0, jM.width = rM.width || 0, jM.height = rM.height || 0
        }
        if (!gM(SM, jM)) throw new TypeError("visibleRect alignment is invalid for the format.");
        return jM
      },
      gM = (MM, rM) => {
        if (null === MM) return !0;
        const iM = bM(MM);
        for (let OM = 0; OM < iM.length; OM++) {
          const MM = iM[OM],
            SM = MM.widthDivisor,
            jM = MM.heightDivisor;
          if ((rM.x || 0) % SM !== 0) return !1;
          if ((rM.y || 0) % jM !== 0) return !1
        }
        return !0
      },
      uM = (MM, rM, iM) => {
        const OM = bM(rM),
          SM = OM.length;
        if (void 0 !== iM && iM.length !== SM) throw new TypeError(`Layout must have ${SM} planes.`);
        let jM = 0;
        const aM = [],
          PM = [];
        for (let nM = 0; nM < SM; nM++) {
          const rM = OM[nM],
            SM = rM.sampleBytes,
            QM = rM.widthDivisor,
            zM = rM.heightDivisor,
            LM = {
              destinationOffset: 0,
              destinationStride: 0,
              sourceTop: 0,
              sourceHeight: 0,
              sourceLeftBytes: 0,
              sourceWidthBytes: 0
            };
          if (LM.sourceTop = Math.ceil(Math.trunc(MM.y || 0) / zM), LM.sourceHeight = Math.ceil(Math.trunc(MM.height || 0) / zM), LM.sourceLeftBytes = Math.floor(Math.trunc(MM.x || 0) / QM) * SM, LM.sourceWidthBytes = Math.floor(Math.trunc(MM.width || 0) / QM) * SM, void 0 !== iM) {
            const MM = iM[nM];
            if (MM.stride < LM.sourceWidthBytes) throw new TypeError(`Stride for plane ${nM} is too small.`);
            LM.destinationOffset = MM.offset, LM.destinationStride = MM.stride
          } else LM.destinationOffset = jM, LM.destinationStride = LM.sourceWidthBytes;
          const mM = LM.destinationStride * LM.sourceHeight + LM.destinationOffset;
          if (mM > 4294967295) throw new TypeError("Allocation size exceeds limit.");
          PM.push(mM), jM = Math.max(jM, mM);
          for (let MM = 0; MM < nM; MM++) {
            const rM = aM[MM];
            if (!(PM[nM] <= rM.destinationOffset || PM[MM] <= LM.destinationOffset)) throw new TypeError("Planes overlap.")
          }
          aM.push(LM)
        }
        return {
          allocationSize: jM,
          computedLayouts: aM
        }
      },
      RM = new Set(["f32", "f32-planar", "s16", "s16-planar", "s32", "s32-planar", "u8", "u8-planar"]);
    class pM {
      constructor() {
        this._referenceCount = 0
      }
    }
    class WM {
      get microsecondTimestamp() {
        return Math.trunc(OM.q * this.timestamp)
      }
      get microsecondDuration() {
        return Math.trunc(OM.q * this.duration)
      }
      constructor(MM) {
        if (this._closed = !1, oM(MM)) {
          if (null === MM.format) throw new TypeError("AudioData with null format is not supported.");
          this._data = MM, this.format = MM.format, this.sampleRate = MM.sampleRate, this.numberOfFrames = MM.numberOfFrames, this.numberOfChannels = MM.numberOfChannels, this.timestamp = MM.timestamp / 1e6, this.duration = MM.numberOfFrames / MM.sampleRate
        } else if (MM instanceof pM) {
          if (this._data = MM, MM._referenceCount++, this.format = MM.getFormat(), !RM.has(this.format)) throw new TypeError("getFormat() must return an AudioSampleFormat.");
          if (this.sampleRate = MM.getSampleRate(), !Number.isInteger(this.sampleRate) || this.sampleRate <= 0) throw new TypeError("getSampleRate() must return a positive integer.");
          if (this.numberOfFrames = MM.getNumberOfFrames(), !Number.isInteger(this.numberOfFrames) || this.numberOfFrames < 0) throw new TypeError("getNumberOfFrames() must return a non-negative integer.");
          if (this.numberOfChannels = MM.getNumberOfChannels(), !Number.isInteger(this.numberOfChannels) || this.numberOfChannels <= 0) throw new TypeError("getNumberOfChannels() must return a positive integer.");
          if (this.timestamp = MM.getTimestamp(), !Number.isFinite(this.timestamp)) throw new TypeError("getTimestamp() must return a finite number.");
          this.duration = this.numberOfFrames / this.sampleRate
        } else {
          if (!MM || "object" !== typeof MM) throw new TypeError("Invalid AudioDataInit: must be an object.");
          if (!RM.has(MM.format)) throw new TypeError("Invalid AudioDataInit: invalid format.");
          if (!Number.isFinite(MM.sampleRate) || MM.sampleRate <= 0) throw new TypeError("Invalid AudioDataInit: sampleRate must be > 0.");
          if (!Number.isInteger(MM.numberOfChannels) || 0 === MM.numberOfChannels) throw new TypeError("Invalid AudioDataInit: numberOfChannels must be an integer > 0.");
          if (!Number.isFinite(MM?.timestamp)) throw new TypeError("init.timestamp must be a number.");
          const rM = MM.data.byteLength / (sM(MM.format) * MM.numberOfChannels);
          if (!Number.isInteger(rM)) throw new TypeError("Invalid AudioDataInit: data size is not a multiple of frame size.");
          let iM;
          if (this.format = MM.format, this.sampleRate = MM.sampleRate, this.numberOfFrames = rM, this.numberOfChannels = MM.numberOfChannels, this.timestamp = MM.timestamp, this.duration = rM / MM.sampleRate, MM.data instanceof ArrayBuffer) iM = new Uint8Array(MM.data);
          else {
            if (!ArrayBuffer.isView(MM.data)) throw new TypeError("Invalid AudioDataInit: data is not a BufferSource.");
            iM = new Uint8Array(MM.data.buffer, MM.data.byteOffset, MM.data.byteLength)
          }
          const OM = this.numberOfFrames * this.numberOfChannels * sM(this.format);
          if (iM.byteLength < OM) throw new TypeError("Invalid AudioDataInit: insufficient data size.");
          this._data = iM
        }
        QM?.register(this, {
          type: "audio",
          data: this._data
        }, this)
      }
      allocationSize(MM) {
        if (!MM || "object" !== typeof MM) throw new TypeError("options must be an object.");
        if (!Number.isInteger(MM.planeIndex) || MM.planeIndex < 0) throw new TypeError("planeIndex must be a non-negative integer.");
        if (void 0 !== MM.format && !RM.has(MM.format)) throw new TypeError("Invalid format.");
        if (void 0 !== MM.frameOffset && (!Number.isInteger(MM.frameOffset) || MM.frameOffset < 0)) throw new TypeError("frameOffset must be a non-negative integer.");
        if (void 0 !== MM.frameCount && (!Number.isInteger(MM.frameCount) || MM.frameCount < 0)) throw new TypeError("frameCount must be a non-negative integer.");
        if (this._closed) throw new Error("AudioSample is closed.");
        const rM = MM.format ?? this.format,
          iM = MM.frameOffset ?? 0;
        if (iM >= this.numberOfFrames) throw new RangeError("frameOffset out of range");
        const OM = void 0 !== MM.frameCount ? MM.frameCount : this.numberOfFrames - iM;
        if (OM > this.numberOfFrames - iM) throw new RangeError("frameCount out of range");
        const SM = sM(rM),
          jM = DM(rM);
        if (jM && MM.planeIndex >= this.numberOfChannels) throw new RangeError("planeIndex out of range");
        if (!jM && 0 !== MM.planeIndex) throw new RangeError("planeIndex out of range");
        return (jM ? OM : OM * this.numberOfChannels) * SM
      }
      copyTo(MM, rM) {
        if (!(0, OM.vb)(MM)) throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");
        if (!rM || "object" !== typeof rM) throw new TypeError("options must be an object.");
        if (!Number.isInteger(rM.planeIndex) || rM.planeIndex < 0) throw new TypeError("planeIndex must be a non-negative integer.");
        if (void 0 !== rM.format && !RM.has(rM.format)) throw new TypeError("Invalid format.");
        if (void 0 !== rM.frameOffset && (!Number.isInteger(rM.frameOffset) || rM.frameOffset < 0)) throw new TypeError("frameOffset must be a non-negative integer.");
        if (void 0 !== rM.frameCount && (!Number.isInteger(rM.frameCount) || rM.frameCount < 0)) throw new TypeError("frameCount must be a non-negative integer.");
        if (this._closed) throw new Error("AudioSample is closed.");
        const {
          format: iM,
          frameCount: SM,
          frameOffset: jM
        } = rM;
        let {
          planeIndex: aM
        } = rM, PM = this.format;
        const nM = iM ?? this.format;
        if (!nM) throw new Error("Destination format not determined");
        const QM = this.numberOfFrames,
          zM = this.numberOfChannels,
          LM = jM ?? 0;
        if (LM >= QM) throw new RangeError("frameOffset out of range");
        const mM = void 0 !== SM ? SM : QM - LM;
        if (mM > QM - LM) throw new RangeError("frameCount out of range");
        const HM = sM(nM),
          hM = DM(nM);
        if (hM && aM >= zM) throw new RangeError("planeIndex out of range");
        if (!hM && 0 !== aM) throw new RangeError("planeIndex out of range");
        const JM = (hM ? mM : mM * zM) * HM;
        if (MM.byteLength < JM) throw new RangeError("Destination buffer is too small");
        const dM = (0, OM.nd)(MM),
          yM = ZM(nM);
        if (oM(this._data)) {
          if ((0, OM.Wb)() && zM > 2 && nM !== PM) return void YM(this._data, dM, PM, nM, zM, aM, LM, mM);
          try {
            return void this._data.copyTo(MM, {
              planeIndex: aM,
              frameOffset: LM,
              frameCount: mM,
              format: nM
            })
          } catch (eM) {
            if ("f32-planar" === nM) throw eM;
            PM = "f32-planar"
          }
        }
        const lM = kM(PM),
          EM = sM(PM),
          UM = DM(PM);
        let GM;
        if (this._data instanceof pM) {
          const MM = MM => {
            const rM = this._data.getDataPlane(MM);
            if (!(rM instanceof Uint8Array)) throw new TypeError("getDataPlane() must return a Uint8Array.");
            const iM = QM * EM * (UM ? 1 : zM);
            if (rM.byteLength !== iM) throw new TypeError(`Data plane ${MM} has invalid size. Expected exactly ${iM} bytes, got ${rM.byteLength} bytes.`);
            return rM
          };
          if (UM)
            if (hM) GM = MM(aM), aM = 0;
            else {
              GM = new Uint8Array(QM * EM * zM);
              for (let rM = 0; rM < zM; rM++) {
                const iM = MM(rM);
                GM.set(iM, rM * QM * EM)
              }
            }
          else GM = MM(0)
        } else if (this._data instanceof Uint8Array) GM = this._data;
        else if ((0, OM.J)("f32-planar" === PM), hM) GM = new Uint8Array(this._data.allocationSize({
          format: "f32-planar",
          planeIndex: aM
        })), this._data.copyTo(GM, {
          format: "f32-planar",
          planeIndex: aM
        }), aM = 0;
        else {
          GM = new Uint8Array(this._data.allocationSize({
            format: "f32-planar",
            planeIndex: 0
          }) * zM);
          for (let MM = 0; MM < zM; MM++) this._data.copyTo(GM.subarray(MM * QM * EM, (MM + 1) * QM * EM), {
            format: "f32-planar",
            planeIndex: MM
          })
        }
        const CM = (0, OM.nd)(GM);
        for (let OM = 0; OM < mM; OM++)
          if (hM) {
            let MM;
            MM = UM ? (aM * QM + (OM + LM)) * EM : ((OM + LM) * zM + aM) * EM;
            yM(dM, OM * HM, lM(CM, MM))
          } else
            for (let MM = 0; MM < zM; MM++) {
              let rM;
              rM = UM ? (MM * QM + (OM + LM)) * EM : ((OM + LM) * zM + MM) * EM;
              yM(dM, (OM * zM + MM) * HM, lM(CM, rM))
            }
      }
      clone() {
        if (this._closed) throw new Error("AudioSample is closed.");
        if (this._data instanceof pM) {
          const MM = new WM(this._data);
          return MM.setTimestamp(this.timestamp), MM
        }
        if (oM(this._data)) {
          const MM = new WM(this._data.clone());
          return MM.setTimestamp(this.timestamp), MM
        }
        return new WM({
          format: this.format,
          sampleRate: this.sampleRate,
          numberOfFrames: this.numberOfFrames,
          numberOfChannels: this.numberOfChannels,
          timestamp: this.timestamp,
          data: this._data
        })
      }
      trim(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.numberOfFrames;
        if (!Number.isInteger(MM) || MM < 0) throw new TypeError("startFrame must be a non-negative integer.");
        if (!Number.isInteger(rM) || rM < 0) throw new TypeError("endFrame must be a non-negative integer.");
        if (MM > this.numberOfFrames) throw new RangeError("startFrame out of range.");
        if (rM > this.numberOfFrames) throw new RangeError("endFrame out of range.");
        if (rM < MM) throw new RangeError("endFrame must not be less than startFrame.");
        if (this._closed) throw new Error("AudioSample is closed.");
        const iM = rM - MM,
          OM = sM(this.format);
        let SM;
        if (DM(this.format)) {
          const rM = iM * OM;
          if (SM = new Uint8Array(rM * this.numberOfChannels), iM > 0)
            for (let OM = 0; OM < this.numberOfChannels; OM++) this.copyTo(SM.subarray(OM * rM, (OM + 1) * rM), {
              planeIndex: OM,
              format: this.format,
              frameOffset: MM,
              frameCount: iM
            })
        } else SM = new Uint8Array(iM * this.numberOfChannels * OM), iM > 0 && this.copyTo(SM, {
          planeIndex: 0,
          format: this.format,
          frameOffset: MM,
          frameCount: iM
        });
        return new WM({
          data: SM,
          format: this.format,
          sampleRate: this.sampleRate,
          numberOfChannels: this.numberOfChannels,
          timestamp: this.timestamp + MM / this.sampleRate
        })
      }
      close() {
        this._closed || (QM?.unregister(this), this._data instanceof pM ? (this._data._referenceCount--, 0 === this._data._referenceCount && this._data.close()) : oM(this._data) ? this._data.close() : this._data = new Uint8Array(0), this._closed = !0)
      }
      toAudioData() {
        if (this._closed) throw new Error("AudioSample is closed.");
        return this._data instanceof pM ? this._createAudioDataFromData() : oM(this._data) ? this._data.timestamp === this.microsecondTimestamp ? this._data.clone() : this._createAudioDataFromData() : new AudioData({
          format: this.format,
          sampleRate: this.sampleRate,
          numberOfFrames: this.numberOfFrames,
          numberOfChannels: this.numberOfChannels,
          timestamp: this.microsecondTimestamp,
          data: this._data.buffer instanceof ArrayBuffer ? this._data.buffer : this._data.slice()
        })
      }
      _createAudioDataFromData() {
        if (DM(this.format)) {
          const MM = this.allocationSize({
              planeIndex: 0,
              format: this.format
            }),
            rM = new ArrayBuffer(MM * this.numberOfChannels);
          for (let iM = 0; iM < this.numberOfChannels; iM++) this.copyTo(new Uint8Array(rM, iM * MM, MM), {
            planeIndex: iM,
            format: this.format
          });
          return new AudioData({
            format: this.format,
            sampleRate: this.sampleRate,
            numberOfFrames: this.numberOfFrames,
            numberOfChannels: this.numberOfChannels,
            timestamp: this.microsecondTimestamp,
            data: rM
          })
        } {
          const MM = new ArrayBuffer(this.allocationSize({
            planeIndex: 0,
            format: this.format
          }));
          return this.copyTo(MM, {
            planeIndex: 0,
            format: this.format
          }), new AudioData({
            format: this.format,
            sampleRate: this.sampleRate,
            numberOfFrames: this.numberOfFrames,
            numberOfChannels: this.numberOfChannels,
            timestamp: this.microsecondTimestamp,
            data: MM
          })
        }
      }
      toAudioBuffer() {
        if (this._closed) throw new Error("AudioSample is closed.");
        const MM = new AudioBuffer({
            numberOfChannels: this.numberOfChannels,
            length: this.numberOfFrames,
            sampleRate: this.sampleRate
          }),
          rM = new Float32Array(this.allocationSize({
            planeIndex: 0,
            format: "f32-planar"
          }) / 4);
        for (let iM = 0; iM < this.numberOfChannels; iM++) this.copyTo(rM, {
          planeIndex: iM,
          format: "f32-planar"
        }), MM.copyToChannel(rM, iM);
        return MM
      }
      setTimestamp(MM) {
        if (!Number.isFinite(MM)) throw new TypeError("newTimestamp must be a number.");
        this.timestamp = MM
      } [Symbol.dispose]() {
        this.close()
      }
      static * _fromAudioBuffer(MM, rM) {
        if (!(MM instanceof AudioBuffer)) throw new TypeError("audioBuffer must be an AudioBuffer.");
        const iM = MM.numberOfChannels,
          OM = MM.sampleRate,
          SM = MM.length,
          jM = Math.floor(24e4 / iM);
        let aM = 0,
          PM = SM;
        for (; PM > 0;) {
          const SM = Math.min(jM, PM),
            nM = new Float32Array(iM * SM);
          for (let rM = 0; rM < iM; rM++) MM.copyFromChannel(nM.subarray(rM * SM, (rM + 1) * SM), rM, aM);
          yield new WM({
            format: "f32-planar",
            sampleRate: OM,
            numberOfFrames: SM,
            numberOfChannels: iM,
            timestamp: rM + aM / OM,
            data: nM
          }), aM += SM, PM -= SM
        }
      }
      static fromAudioBuffer(MM, rM) {
        if (!(MM instanceof AudioBuffer)) throw new TypeError("audioBuffer must be an AudioBuffer.");
        const iM = MM.numberOfChannels,
          OM = MM.sampleRate,
          SM = MM.length,
          jM = Math.floor(24e4 / iM);
        let aM = 0,
          PM = SM;
        const nM = [];
        for (; PM > 0;) {
          const SM = Math.min(jM, PM),
            QM = new Float32Array(iM * SM);
          for (let rM = 0; rM < iM; rM++) MM.copyFromChannel(QM.subarray(rM * SM, (rM + 1) * SM), rM, aM);
          const zM = new WM({
            format: "f32-planar",
            sampleRate: OM,
            numberOfFrames: SM,
            numberOfChannels: iM,
            timestamp: rM + aM / OM,
            data: QM
          });
          nM.push(zM), aM += SM, PM -= SM
        }
        return nM
      }
    }
    const sM = MM => {
        switch (MM) {
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
      DM = MM => {
        switch (MM) {
          case "u8-planar":
          case "s16-planar":
          case "s32-planar":
          case "f32-planar":
            return !0;
          default:
            return !1
        }
      },
      kM = MM => {
        switch (MM) {
          case "u8":
          case "u8-planar":
            return (MM, rM) => (MM.getUint8(rM) - 128) / 128;
          case "s16":
          case "s16-planar":
            return (MM, rM) => MM.getInt16(rM, !0) / 32768;
          case "s32":
          case "s32-planar":
            return (MM, rM) => MM.getInt32(rM, !0) / 2147483648;
          case "f32":
          case "f32-planar":
            return (MM, rM) => MM.getFloat32(rM, !0)
        }
      },
      ZM = MM => {
        switch (MM) {
          case "u8":
          case "u8-planar":
            return (MM, rM, iM) => MM.setUint8(rM, (0, OM.X)(Math.round(128 * iM) + 128, 0, 255));
          case "s16":
          case "s16-planar":
            return (MM, rM, iM) => MM.setInt16(rM, (0, OM.X)(Math.round(32768 * iM), -32768, 32767), !0);
          case "s32":
          case "s32-planar":
            return (MM, rM, iM) => MM.setInt32(rM, (0, OM.X)(Math.round(2147483648 * iM), -2147483648, 2147483647), !0);
          case "f32":
          case "f32-planar":
            return (MM, rM, iM) => MM.setFloat32(rM, iM, !0)
        }
      },
      oM = MM => "undefined" !== typeof AudioData && MM instanceof AudioData,
      fM = MM => {
        switch (MM) {
          case "u8-planar":
            return "u8";
          case "s16-planar":
            return "s16";
          case "s32-planar":
            return "s32";
          case "f32-planar":
            return "f32";
          default:
            return MM
        }
      },
      YM = (MM, rM, iM, SM, jM, aM, PM, nM) => {
        const QM = kM(iM),
          zM = ZM(SM),
          LM = sM(iM),
          mM = sM(SM),
          HM = DM(iM);
        if (DM(SM))
          if (HM) {
            const SM = new ArrayBuffer(nM * LM),
              jM = (0, OM.nd)(SM);
            MM.copyTo(SM, {
              planeIndex: aM,
              frameOffset: PM,
              frameCount: nM,
              format: iM
            });
            for (let MM = 0; MM < nM; MM++) {
              zM(rM, MM * mM, QM(jM, MM * LM))
            }
          } else {
            const SM = new ArrayBuffer(nM * jM * LM),
              HM = (0, OM.nd)(SM);
            MM.copyTo(SM, {
              planeIndex: 0,
              frameOffset: PM,
              frameCount: nM,
              format: iM
            });
            for (let MM = 0; MM < nM; MM++) {
              zM(rM, MM * mM, QM(HM, (MM * jM + aM) * LM))
            }
          }
        else if (HM) {
          const SM = new ArrayBuffer(nM * LM),
            aM = (0, OM.nd)(SM);
          for (let OM = 0; OM < jM; OM++) {
            MM.copyTo(SM, {
              planeIndex: OM,
              frameOffset: PM,
              frameCount: nM,
              format: iM
            });
            for (let MM = 0; MM < nM; MM++) {
              zM(rM, (MM * jM + OM) * mM, QM(aM, MM * LM))
            }
          }
        } else {
          const SM = new ArrayBuffer(nM * jM * LM),
            aM = (0, OM.nd)(SM);
          MM.copyTo(SM, {
            planeIndex: 0,
            frameOffset: PM,
            frameCount: nM,
            format: iM
          });
          for (let MM = 0; MM < nM; MM++)
            for (let iM = 0; iM < jM; iM++) {
              const OM = MM * jM + iM;
              zM(rM, OM * mM, QM(aM, OM * LM))
            }
        }
      },
      NM = (MM, rM) => {
        const iM = MM.allocationSize({
            format: rM,
            planeIndex: 0
          }),
          OM = new ArrayBuffer(iM);
        return MM.copyTo(OM, {
          format: rM,
          planeIndex: 0
        }), new WM({
          data: OM,
          format: rM,
          numberOfChannels: MM.numberOfChannels,
          sampleRate: MM.sampleRate,
          timestamp: MM.timestamp,
          duration: MM.duration
        })
      }
  },
  34738: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => aM,
      f: () => QM,
      g: () => jM,
      i: () => nM
    });
    const OM = /(?:(.+?)\n)?((?:\d{2}:)?\d{2}:\d{2}.\d{3})\s+-->\s+((?:\d{2}:)?\d{2}:\d{2}.\d{3})/g,
      SM = /^WEBVTT(.|\n)*?\n{2}/,
      jM = /<(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})>/g;
    class aM {
      constructor(MM) {
        this.preambleText = null, this.preambleEmitted = !1, this.options = MM
      }
      parse(MM) {
        let rM;
        if (MM = MM.replaceAll("\r\n", "\n").replaceAll("\r", "\n"), OM.lastIndex = 0, !this.preambleText) {
          if (!SM.test(MM)) throw new Error("WebVTT preamble incorrect.");
          rM = OM.exec(MM);
          const iM = MM.slice(0, rM?.index ?? MM.length).trimEnd();
          if (!iM) throw new Error("No WebVTT preamble provided.");
          this.preambleText = iM, rM && (MM = MM.slice(rM.index), OM.lastIndex = 0)
        }
        for (; rM = OM.exec(MM);) {
          const iM = MM.slice(0, rM.index),
            SM = rM[1],
            jM = rM.index + rM[0].length,
            aM = MM.indexOf("\n", jM) + 1,
            PM = MM.slice(jM, aM).trim();
          let QM = MM.indexOf("\n\n", jM); - 1 === QM && (QM = MM.length);
          const zM = nM(rM[2]),
            LM = nM(rM[3]) - zM,
            mM = MM.slice(aM, QM).trim();
          MM = MM.slice(QM).trimStart(), OM.lastIndex = 0;
          const HM = {
              timestamp: zM / 1e3,
              duration: LM / 1e3,
              text: mM,
              identifier: SM,
              settings: PM,
              notes: iM
            },
            hM = {};
          this.preambleEmitted || (hM.config = {
            description: this.preambleText
          }, this.preambleEmitted = !0), this.options.output(HM, hM)
        }
      }
    }
    const PM = /(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})/,
      nM = MM => {
        const rM = PM.exec(MM);
        if (!rM) throw new Error("Expected match.");
        return 36e5 * Number(rM[1] || "0") + 6e4 * Number(rM[2]) + 1e3 * Number(rM[3]) + Number(rM[4])
      },
      QM = MM => {
        const rM = Math.floor(MM / 36e5),
          iM = Math.floor(MM % 36e5 / 6e4),
          OM = Math.floor(MM % 6e4 / 1e3),
          SM = MM % 1e3;
        return rM.toString().padStart(2, "0") + ":" + iM.toString().padStart(2, "0") + ":" + OM.toString().padStart(2, "0") + "." + SM.toString().padStart(3, "0")
      }
  },
  34747: (MM, rM, iM) => {
    var OM;
    iM.d(rM, {
      b: () => QM,
      d: () => zM,
      g: () => mM,
      h: () => aM
    });
    var SM = iM(34750),
      jM = iM(34685);
    "undefined" !== typeof(OM || (OM = iM.t(SM, 2))) && (OM || (OM = iM.t(SM, 2)));
    class aM extends jM.h {
      constructor() {
        super(...arguments), this._writerAcquired = !1, this._monotonicity = null, this.onwrite = null
      }
      _setMonotonicity(MM) {
        !1 !== this._monotonicity && (this._monotonicity = MM)
      }
      _dispatchWrite(MM, rM) {
        this.onwrite?.(MM, rM), this._emit("write", {
          start: MM,
          end: rM
        })
      }
      slice(MM) {
        if (!Number.isInteger(MM) || MM < 0) throw new TypeError("offset must be a non-negative integer.");
        return new LM(this, MM)
      }
    }
    const PM = 65536,
      nM = 2 ** 32;
    class QM extends aM {
      constructor() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (super(), this.buffer = null, this._maxPos = 0, !MM || "object" !== typeof MM) throw new TypeError("BufferTarget options, when provided, must be an object.");
        if (void 0 !== MM.onFinalize && "function" !== typeof MM.onFinalize) throw new TypeError("options.onFinalize, when provided, must be a function.");
        if (this._options = MM, this._supportsResize = "resize" in new ArrayBuffer(0), this._supportsResize) try {
          this._buffer = new ArrayBuffer(PM, {
            maxByteLength: nM
          })
        } catch {
          this._buffer = new ArrayBuffer(PM), this._supportsResize = !1
        } else this._buffer = new ArrayBuffer(PM);
        this._bytes = new Uint8Array(this._buffer)
      }
      _ensureSize(MM) {
        let rM = this._buffer.byteLength;
        for (; rM < MM;) rM *= 2;
        if (rM !== this._buffer.byteLength) {
          if (rM > nM) throw new Error("ArrayBuffer exceeded maximum size of 4294967296 bytes. Please consider using another target.");
          if (this._supportsResize) this._buffer.resize(rM);
          else {
            const MM = new ArrayBuffer(rM),
              iM = new Uint8Array(MM);
            iM.set(this._bytes, 0), this._buffer = MM, this._bytes = iM
          }
        }
      }
      _start() {}
      _write(MM, rM) {
        this._ensureSize(rM + MM.byteLength), this._bytes.set(MM, rM), this._maxPos = Math.max(this._maxPos, rM + MM.byteLength), this._dispatchWrite(rM, rM + MM.byteLength)
      }
      async _flush() {}
      async _finalize() {
        this.buffer = this._buffer.slice(0, this._maxPos), this._options.onFinalize && await this._options.onFinalize(this.buffer), this._emit("finalized")
      }
      async _close() {}
      _getSlice(MM, rM) {
        return this._bytes.slice(MM, rM)
      }
    }
    class zM extends aM {
      _start() {}
      _write(MM, rM) {
        this._dispatchWrite(rM, rM + MM.byteLength)
      }
      async _flush() {}
      async _finalize() {
        this._emit("finalized")
      }
      async _close() {}
    }
    class LM extends aM {
      constructor(MM, rM) {
        super(), this._baseTarget = MM, this._offset = rM
      }
      _start() {}
      _write(MM, rM) {
        this._baseTarget._write(MM, this._offset + rM), this._dispatchWrite(rM, rM + MM.byteLength)
      }
      _flush() {
        return this._baseTarget._flush()
      }
      async _finalize() {
        this._emit("finalized")
      }
      async _close() {}
      _setMonotonicity(MM) {
        super._setMonotonicity(MM), this._baseTarget._setMonotonicity(MM)
      }
    }
    class mM {
      constructor(MM, rM) {
        if (this.rootPath = MM, this.getTarget = rM, "string" !== typeof MM) throw new TypeError("rootPath must be a string.");
        if ("function" !== typeof rM) throw new TypeError("getTarget must be a function.")
      }
    }
  },
  34734: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => OM
    });
    const OM = "Mediabunny v1.61.3"
  },
  34740: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => SM
    });
    var OM = iM(34685);
    class SM {
      constructor(MM, rM) {
        if (this.finalized = !1, this.started = !1, this.pos = 0, this.trackedWrites = null, this.trackedStart = -1, this.trackedEnd = -1, MM._writerAcquired) throw new Error("Can't have multiple Writers for the same Target.");
        this.target = MM, MM._setMonotonicity(rM), MM._writerAcquired = !0
      }
      start() {
        (0, OM.J)(!this.started), this.target._start(), this.started = !0
      }
      write(MM) {
        (0, OM.J)(this.started && !this.finalized), this.maybeTrackWrites(MM), this.target._write(MM, this.pos), this.pos += MM.byteLength
      }
      seek(MM) {
        this.pos = MM
      }
      getPos() {
        return this.pos
      }
      async flush() {
        return (0, OM.J)(this.started && !this.finalized), this.target._flush()
      }
      async finalize() {
        (0, OM.J)(this.started && !this.finalized), await this.target._finalize(), this.finalized = !0
      }
      maybeTrackWrites(MM) {
        if (!this.trackedWrites) return;
        let rM = this.getPos();
        if (rM < this.trackedStart) {
          if (rM + MM.byteLength <= this.trackedStart) return;
          MM = MM.subarray(this.trackedStart - rM), rM = 0
        }
        const iM = rM + MM.byteLength - this.trackedStart;
        let OM = this.trackedWrites.byteLength;
        for (; OM < iM;) OM *= 2;
        if (OM !== this.trackedWrites.byteLength) {
          const MM = new Uint8Array(OM);
          MM.set(this.trackedWrites, 0), this.trackedWrites = MM
        }
        this.trackedWrites.set(MM, rM - this.trackedStart), this.trackedEnd = Math.max(this.trackedEnd, rM + MM.byteLength)
      }
      startTrackingWrites() {
        this.trackedWrites = new Uint8Array(1024), this.trackedStart = this.getPos(), this.trackedEnd = this.trackedStart
      }
      stopTrackingWrites() {
        if (!this.trackedWrites) throw new Error("Internal error: Can't get tracked writes since nothing was tracked.");
        const MM = {
          data: this.trackedWrites.subarray(0, this.trackedEnd - this.trackedStart),
          start: this.trackedStart,
          end: this.trackedEnd
        };
        return this.trackedWrites = null, MM
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);