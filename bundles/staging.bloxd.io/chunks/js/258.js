export const id = 258;
export const ids = [258];
export const modules = {
  40171: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => LT,
      h: () => lT,
      l: () => HT,
      o: () => pT,
      p: () => kT,
      s: () => nT,
      v: () => jT
    });
    var WT = mT(38800),
      zT = mT(40178);

    function MT(TT, UT, mT, WT) {
      switch (UT) {
        case 5120: {
          let UT = TT.getInt8(mT);
          return WT && (UT = Math.max(UT / 127, -1)), UT
        }
        case 5121: {
          let UT = TT.getUint8(mT);
          return WT && (UT /= 255), UT
        }
        case 5122: {
          let UT = TT.getInt16(mT, !0);
          return WT && (UT = Math.max(UT / 32767, -1)), UT
        }
        case 5123: {
          let UT = TT.getUint16(mT, !0);
          return WT && (UT /= 65535), UT
        }
        case 5131:
          return (0, zT.c)(TT.getUint16(mT, !0));
        case 5124:
          return TT.getInt32(mT, !0);
        case 5125:
          return TT.getUint32(mT, !0);
        case 5126:
          return TT.getFloat32(mT, !0);
        default:
          throw new Error(`Invalid component type ${UT}`)
      }
    }

    function gT(TT, UT, mT, WT, MT) {
      switch (UT) {
        case 5120:
          WT && (MT = Math.round(127 * MT)), TT.setInt8(mT, MT);
          break;
        case 5121:
          WT && (MT = Math.round(255 * MT)), TT.setUint8(mT, MT);
          break;
        case 5122:
          WT && (MT = Math.round(32767 * MT)), TT.setInt16(mT, MT, !0);
          break;
        case 5123:
          WT && (MT = Math.round(65535 * MT)), TT.setUint16(mT, MT, !0);
          break;
        case 5131:
          TT.setUint16(mT, (0, zT.j)(MT), !0);
          break;
        case 5124:
          TT.setInt32(mT, MT, !0);
          break;
        case 5125:
          TT.setUint32(mT, MT, !0);
          break;
        case 5126:
          TT.setFloat32(mT, MT, !0);
          break;
        default:
          throw new Error(`Invalid component type ${UT}`)
      }
    }

    function nT(TT) {
      switch (TT) {
        case 5120:
        case 5121:
          return 1;
        case 5122:
        case 5123:
        case 5131:
          return 2;
        case 5124:
        case 5125:
        case 5126:
          return 4;
        default:
          throw new Error(`Invalid type '${TT}'`)
      }
    }

    function HT(TT, UT, mT, WT, zT, HT, kT, jT) {
      const lT = new Array(WT),
        LT = new Array(WT);
      if (TT instanceof Array) {
        let zT = UT / 4;
        const MT = mT / 4;
        for (let UT = 0; UT < HT; UT += WT) {
          for (let UT = 0; UT < WT; UT++) lT[UT] = LT[UT] = TT[zT + UT];
          jT(LT, UT);
          for (let UT = 0; UT < WT; UT++) lT[UT] !== LT[UT] && (TT[zT + UT] = LT[UT]);
          zT += MT
        }
      } else {
        const pT = ArrayBuffer.isView(TT) ? new DataView(TT.buffer, TT.byteOffset, TT.byteLength) : new DataView(TT),
          BT = nT(zT);
        for (let TT = 0; TT < HT; TT += WT) {
          for (let TT = 0, mT = UT; TT < WT; TT++, mT += BT) lT[TT] = LT[TT] = MT(pT, zT, mT, kT);
          jT(LT, TT);
          for (let TT = 0, mT = UT; TT < WT; TT++, mT += BT) lT[TT] !== LT[TT] && gT(pT, zT, mT, kT, LT[TT]);
          UT += mT
        }
      }
    }

    function kT(TT, UT, mT, zT, MT, gT, kT, jT) {
      const lT = UT * nT(mT),
        LT = kT * UT;
      if (5126 !== mT || MT !== lT) {
        const WT = new Float32Array(LT);
        return HT(TT, zT, MT, UT, mT, LT, gT, ((TT, mT) => {
          for (let zT = 0; zT < UT; zT++) WT[mT + zT] = TT[zT]
        })), WT
      }
      if (!(TT instanceof Array || TT instanceof Float32Array) || 0 !== zT || TT.length !== LT) {
        if (TT instanceof Array) {
          const UT = zT / 4;
          return TT.slice(UT, UT + LT)
        }
        if (ArrayBuffer.isView(TT)) {
          const UT = TT.byteOffset + zT;
          return 0 !== (3 & UT) && (WT.b.Warn("Float array must be aligned to 4-bytes border"), jT = !0), jT ? new Float32Array(TT.buffer.slice(UT, UT + LT * Float32Array.BYTES_PER_ELEMENT)) : new Float32Array(TT.buffer, UT, LT)
        }
        return new Float32Array(TT, zT, LT)
      }
      return jT ? TT.slice() : TT
    }

    function jT(TT, UT, mT, zT, MT, gT, kT) {
      const jT = nT(mT),
        lT = function(TT) {
          switch (TT) {
            case 5120:
              return Int8Array;
            case 5121:
              return Uint8Array;
            case 5122:
              return Int16Array;
            case 5123:
            case 5131:
              return Uint16Array;
            case 5124:
              return Int32Array;
            case 5125:
              return Uint32Array;
            case 5126:
              return Float32Array;
            default:
              throw new Error(`Invalid component type '${TT}'`)
          }
        }(mT),
        LT = gT * UT;
      if (Array.isArray(TT)) {
        if (0 !== (3 & zT) || 0 !== (3 & MT)) throw new Error("byteOffset and byteStride must be a multiple of 4 for number[] data.");
        const WT = zT / 4,
          nT = MT / 4;
        if (WT + (gT - 1) * nT + UT > TT.length) throw new Error("Last accessed index is out of bounds.");
        if (nT < UT) throw new Error("Data stride cannot be smaller than the component size.");
        if (nT !== UT) {
          const WT = new lT(LT);
          return HT(TT, zT, MT, UT, mT, LT, !1, ((TT, mT) => {
            for (let zT = 0; zT < UT; zT++) WT[mT + zT] = TT[zT]
          })), WT
        }
        return new lT(TT.slice(WT, WT + LT))
      }
      let pT, BT = zT;
      ArrayBuffer.isView(TT) ? (pT = TT.buffer, BT += TT.byteOffset) : pT = TT;
      if (BT + (gT - 1) * MT + UT * jT > pT.byteLength) throw new Error("Last accessed byte is out of bounds.");
      const ZT = UT * jT;
      if (MT < ZT) throw new Error("Byte stride cannot be smaller than the component's byte size.");
      if (MT !== ZT) {
        const TT = new lT(LT),
          mT = new Uint8Array(pT, BT),
          WT = new Uint8Array(TT.buffer),
          zT = UT * jT;
        for (let UT = 0, nT = 0, HT = 0; UT < gT; UT++, nT += MT, HT += zT) WT.set(mT.subarray(nT, nT + zT), HT);
        return TT
      }
      return 1 !== jT && 0 !== (BT & jT - 1) && (WT.b.Warn("Array must be aligned to border of element size. Data will be copied."), kT = !0), kT ? new lT(pT.slice(BT, BT + LT * jT)) : new lT(pT, BT, LT)
    }

    function lT(TT, UT, mT, zT, MT, gT, kT, jT) {
      const lT = UT * nT(mT),
        LT = kT * UT;
      if (jT.length !== LT) throw new Error("Output length is not valid");
      if (5126 === mT && MT === lT)
        if (TT instanceof Array) {
          const UT = zT / 4;
          jT.set(TT, UT)
        } else if (ArrayBuffer.isView(TT)) {
        const UT = TT.byteOffset + zT;
        if (0 !== (3 & UT)) return WT.b.Warn("Float array must be aligned to 4-bytes border"), void jT.set(new Float32Array(TT.buffer.slice(UT, UT + LT * Float32Array.BYTES_PER_ELEMENT)));
        const mT = new Float32Array(TT.buffer, UT, LT);
        jT.set(mT)
      } else {
        const UT = new Float32Array(TT, zT, LT);
        jT.set(UT)
      } else HT(TT, zT, MT, UT, mT, LT, gT, ((TT, mT) => {
        for (let WT = 0; WT < UT; WT++) jT[mT + WT] = TT[WT]
      }))
    }

    function LT(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      if (Array.isArray(TT)) {
        for (let zT = 0; zT < UT; zT++)
          if (TT[mT + zT] - WT > 65535) return !0;
        return !1
      }
      return 4 === TT.BYTES_PER_ELEMENT
    }

    function pT(TT) {
      const UT = TT.buffer;
      if (UT instanceof ArrayBuffer) return TT;
      const mT = new ArrayBuffer(TT.byteLength);
      return new Uint8Array(mT).set(new Uint8Array(UT, TT.byteOffset, TT.byteLength)), mT
    }
  },
  39972: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => YT,
      d: () => OT,
      h: () => eT,
      g: () => yT,
      l: () => XT
    });
    class WT {
      constructor() {
        this.children = []
      }
      isValid(TT) {
        return !0
      }
      process(TT, UT, mT) {
        let WT = "";
        if (this.line) {
          let mT = this.line;
          const zT = UT.processor;
          if (zT) {
            zT.lineProcessor && (mT = zT.lineProcessor(mT, UT.isFragment, UT.processingContext));
            const WT = UT.processor?.attributeKeywordName ?? "attribute",
              MT = UT.isFragment && UT.processor?.varyingFragmentKeywordName ? UT.processor?.varyingFragmentKeywordName : !UT.isFragment && UT.processor?.varyingVertexKeywordName ? UT.processor?.varyingVertexKeywordName : "varying";
            if (!UT.isFragment && zT.attributeProcessor && this.line.startsWith(WT)) mT = zT.attributeProcessor(this.line, TT, UT.processingContext);
            else if (zT.varyingProcessor && (zT.varyingCheck?.(this.line, UT.isFragment) || !zT.varyingCheck && this.line.startsWith(MT))) mT = zT.varyingProcessor(this.line, UT.isFragment, TT, UT.processingContext);
            else if (zT.uniformProcessor && zT.uniformRegexp && zT.uniformRegexp.test(this.line)) UT.lookForClosingBracketForUniformBuffer || (mT = zT.uniformProcessor(this.line, UT.isFragment, TT, UT.processingContext));
            else if (zT.uniformBufferProcessor && zT.uniformBufferRegexp && zT.uniformBufferRegexp.test(this.line)) UT.lookForClosingBracketForUniformBuffer || (mT = zT.uniformBufferProcessor(this.line, UT.isFragment, UT.processingContext), UT.lookForClosingBracketForUniformBuffer = !0);
            else if (zT.textureProcessor && zT.textureRegexp && zT.textureRegexp.test(this.line)) mT = zT.textureProcessor(this.line, UT.isFragment, TT, UT.processingContext);
            else if ((zT.uniformProcessor || zT.uniformBufferProcessor) && this.line.startsWith("uniform") && !UT.lookForClosingBracketForUniformBuffer) {
              /uniform\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s+(\S+)\s*;/.test(this.line) ? zT.uniformProcessor && (mT = zT.uniformProcessor(this.line, UT.isFragment, TT, UT.processingContext)) : zT.uniformBufferProcessor && (mT = zT.uniformBufferProcessor(this.line, UT.isFragment, UT.processingContext), UT.lookForClosingBracketForUniformBuffer = !0)
            }
            UT.lookForClosingBracketForUniformBuffer && -1 !== this.line.indexOf("}") && (UT.lookForClosingBracketForUniformBuffer = !1, zT.endOfUniformBufferProcessor && (mT = zT.endOfUniformBufferProcessor(this.line, UT.isFragment, UT.processingContext)))
          }
          WT += mT + "\n"
        }
        for (const zT of this.children) WT += zT.process(TT, UT, mT);
        return this.additionalDefineKey && (TT[this.additionalDefineKey] = this.additionalDefineValue || "true", mT[this.additionalDefineKey] = TT[this.additionalDefineKey]), WT
      }
    }
    class zT {
      constructor() {
        this._lines = []
      }
      get currentLine() {
        return this._lines[this.lineIndex]
      }
      get canRead() {
        return this.lineIndex < this._lines.length - 1
      }
      set lines(TT) {
        this._lines.length = 0;
        for (const UT of TT) {
          if (!UT || "\r" === UT) continue;
          if ("#" === UT[0]) {
            this._lines.push(UT);
            continue
          }
          const TT = UT.trim();
          if (!TT) continue;
          if (TT.startsWith("//")) {
            this._lines.push(UT);
            continue
          }
          const mT = TT.indexOf(";");
          if (-1 === mT) this._lines.push(TT);
          else if (mT === TT.length - 1) TT.length > 1 && this._lines.push(TT);
          else {
            const TT = UT.split(";");
            for (let UT = 0; UT < TT.length; UT++) {
              let mT = TT[UT];
              mT && (mT = mT.trim(), mT && this._lines.push(mT + (UT !== TT.length - 1 ? ";" : "")))
            }
          }
        }
      }
    }
    class MT extends WT {
      process(TT, UT, mT) {
        for (let WT = 0; WT < this.children.length; WT++) {
          const zT = this.children[WT];
          if (zT.isValid(TT)) return zT.process(TT, UT, mT)
        }
        return ""
      }
    }
    class gT extends WT {
      isValid(TT) {
        return this.testExpression.isTrue(TT)
      }
    }
    class nT {
      isTrue(TT) {
        return !0
      }
      static postfixToInfix(TT) {
        const UT = [];
        for (const mT of TT)
          if (void 0 === nT._OperatorPriority[mT]) UT.push(mT);
          else {
            const TT = UT[UT.length - 1],
              WT = UT[UT.length - 2];
            UT.length -= 2, UT.push(`(${WT}${mT}${TT})`)
          } return UT[UT.length - 1]
      }
      static infixToPostfix(TT) {
        const UT = nT._InfixToPostfixCache.get(TT);
        if (UT) return UT.accessTime = Date.now(), UT.result;
        if (!TT.includes("&&") && !TT.includes("||") && !TT.includes(")") && !TT.includes("(")) return [TT];
        const mT = [];
        let WT = -1;
        const zT = () => {
            jT = jT.trim(), "" !== jT && (mT.push(jT), jT = "")
          },
          MT = TT => {
            WT < nT._Stack.length - 1 && (nT._Stack[++WT] = TT)
          },
          gT = () => nT._Stack[WT],
          HT = () => -1 === WT ? "!!INVALID EXPRESSION!!" : nT._Stack[WT--];
        let kT = 0,
          jT = "";
        for (; kT < TT.length;) {
          const UT = TT.charAt(kT),
            lT = kT < TT.length - 1 ? TT.substring(kT, 2 + kT) : "";
          if ("(" === UT) jT = "", MT(UT);
          else if (")" === UT) {
            for (zT(); - 1 !== WT && "(" !== gT();) mT.push(HT());
            HT()
          } else if (nT._OperatorPriority[lT] > 1) {
            for (zT(); - 1 !== WT && nT._OperatorPriority[gT()] >= nT._OperatorPriority[lT];) mT.push(HT());
            MT(lT), kT++
          } else jT += UT;
          kT++
        }
        for (zT(); - 1 !== WT;) "(" === gT() ? HT() : mT.push(HT());
        return nT._InfixToPostfixCache.size >= nT.InfixToPostfixCacheLimitSize && nT.ClearCache(), nT._InfixToPostfixCache.set(TT, {
          result: mT,
          accessTime: Date.now()
        }), mT
      }
      static ClearCache() {
        const TT = Array.from(nT._InfixToPostfixCache.entries()).sort(((TT, UT) => TT[1].accessTime - UT[1].accessTime));
        for (let UT = 0; UT < nT.InfixToPostfixCacheCleanupSize; UT++) nT._InfixToPostfixCache.delete(TT[UT][0])
      }
    }
    nT.InfixToPostfixCacheLimitSize = 5e4, nT.InfixToPostfixCacheCleanupSize = 25e3, nT._InfixToPostfixCache = new Map, nT._OperatorPriority = {
      ")": 0,
      "(": 1,
      "||": 2,
      "&&": 3
    }, nT._Stack = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    class HT extends nT {
      constructor(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super(), this.define = TT, this.not = UT
      }
      isTrue(TT) {
        let UT = void 0 !== TT[this.define];
        return this.not && (UT = !UT), UT
      }
    }
    class kT extends nT {
      isTrue(TT) {
        return this.leftOperand.isTrue(TT) || this.rightOperand.isTrue(TT)
      }
    }
    class jT extends nT {
      isTrue(TT) {
        return this.leftOperand.isTrue(TT) && this.rightOperand.isTrue(TT)
      }
    }
    class lT extends nT {
      constructor(TT, UT, mT) {
        super(), this.define = TT, this.operand = UT, this.testValue = mT
      }
      toString() {
        return `${this.define} ${this.operand} ${this.testValue}`
      }
      isTrue(TT) {
        let UT = !1;
        const mT = parseInt(void 0 != TT[this.define] ? TT[this.define] : this.define),
          WT = parseInt(void 0 != TT[this.testValue] ? TT[this.testValue] : this.testValue);
        if (isNaN(mT) || isNaN(WT)) return !1;
        switch (this.operand) {
          case ">":
            UT = mT > WT;
            break;
          case "<":
            UT = mT < WT;
            break;
          case "<=":
            UT = mT <= WT;
            break;
          case ">=":
            UT = mT >= WT;
            break;
          case "==":
            UT = mT === WT;
            break;
          case "!=":
            UT = mT !== WT
        }
        return UT
      }
    }
    var LT = mT(39965),
      pT = mT(39957);
    const BT = /defined\s*?\((.+?)\)/g,
      ZT = /defined\s*?\[(.+?)\]/g,
      cT = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g,
      vT = /__decl__/,
      fT = /light\{X\}.(\w*)/g,
      qT = /\{X\}/g,
      iT = [],
      bT = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;

    function OT(TT) {
      TT.processor && TT.processor.initializeShaders && TT.processor.initializeShaders(TT.processingContext)
    }

    function eT(TT, UT, mT, WT) {
      UT.processor?.preProcessShaderCode && (TT = UT.processor.preProcessShaderCode(TT, UT.isFragment)), yT(TT, UT, (TT => {
        UT.processCodeAfterIncludes && (TT = UT.processCodeAfterIncludes(UT.isFragment ? "fragment" : "vertex", TT, UT.defines));
        const zT = function(TT, UT, mT) {
          let WT = function(TT, UT) {
            if (UT.processor?.noPrecision) return TT;
            const mT = UT.shouldUseHighPrecisionShader; - 1 === TT.indexOf("precision highp float") ? TT = mT ? "precision highp float;\n" + TT : "precision mediump float;\n" + TT : mT || (TT = TT.replace("precision highp float", "precision mediump float"));
            return TT
          }(TT, UT);
          if (!UT.processor) return WT;
          if (0 === UT.processor.shaderLanguage && -1 !== WT.indexOf("#version 3") && (WT = WT.replace("#version 300 es", ""), !UT.processor.parseGLES3)) return WT;
          const zT = UT.defines,
            MT = aT(UT, mT);
          UT.processor.preProcessor && (WT = UT.processor.preProcessor(WT, zT, MT, UT.isFragment, UT.processingContext));
          const gT = {};
          WT = tT(WT, MT, UT, gT), UT.processor.postProcessor && (WT = UT.processor.postProcessor(WT, zT, UT.isFragment, UT.processingContext, mT ? {
            drawBuffersExtensionDisabled: !mT.getCaps().drawBuffersExtension
          } : {}, MT, gT));
          mT?._features.needShaderCodeInlining && (WT = mT.inlineShaderCode(WT));
          return WT
        }(TT, UT, WT);
        mT(zT, TT)
      }))
    }

    function YT(TT, UT, mT) {
      return mT.processor && mT.processor.finalizeShaders ? mT.processor.finalizeShaders(TT, UT, mT.processingContext) : {
        vertexCode: TT,
        fragmentCode: UT
      }
    }

    function JT(TT) {
      const UT = /defined\((.+)\)/.exec(TT);
      if (UT && UT.length) return new HT(UT[1].trim(), "!" === TT[0]);
      const mT = ["==", "!=", ">=", "<=", "<", ">"];
      let WT = "",
        zT = 0;
      for (WT of mT)
        if (zT = TT.indexOf(WT), zT > -1) break;
      if (-1 === zT) return new HT(TT);
      const MT = TT.substring(0, zT).trim(),
        gT = TT.substring(zT + WT.length).trim();
      return new lT(MT, WT, gT)
    }

    function xT(TT, UT) {
      const mT = new gT,
        WT = TT.substring(0, UT);
      let zT = TT.substring(UT);
      return zT = zT.substring(0, (zT.indexOf("//") + 1 || zT.length + 1) - 1).trim(), mT.testExpression = "#ifdef" === WT ? new HT(zT) : "#ifndef" === WT ? new HT(zT, !0) : function(TT) {
        TT = TT.replace(BT, "defined[$1]");
        const UT = nT.infixToPostfix(TT),
          mT = [];
        for (const zT of UT)
          if ("||" !== zT && "&&" !== zT) mT.push(zT);
          else if (mT.length >= 2) {
          let TT = mT[mT.length - 1],
            UT = mT[mT.length - 2];
          mT.length -= 2;
          const WT = "&&" == zT ? new jT : new kT;
          "string" === typeof TT && (TT = TT.replace(ZT, "defined($1)")), "string" === typeof UT && (UT = UT.replace(ZT, "defined($1)")), WT.leftOperand = "string" === typeof UT ? JT(UT) : UT, WT.rightOperand = "string" === typeof TT ? JT(TT) : TT, mT.push(WT)
        }
        let WT = mT[mT.length - 1];
        return "string" === typeof WT && (WT = WT.replace(ZT, "defined($1)")), "string" === typeof WT ? JT(WT) : WT
      }(zT), mT
    }

    function dT(TT, UT, mT, zT) {
      let MT;
      for (; wT(TT, mT, zT);) {
        MT = TT.currentLine;
        const gT = MT.substring(0, 5).toLowerCase();
        if ("#else" === gT) {
          const mT = new WT;
          return UT.children.push(mT), void wT(TT, mT, zT)
        }
        if ("#elif" === gT) {
          const TT = xT(MT, 5);
          UT.children.push(TT), mT = TT
        }
      }
    }

    function wT(TT, UT, mT) {
      for (; TT.canRead;) {
        TT.lineIndex++;
        const zT = TT.currentLine;
        if (zT.indexOf("#") >= 0) {
          const WT = bT.exec(zT);
          if (WT && WT.length) {
            switch (WT[0]) {
              case "#ifdef": {
                const WT = new MT;
                UT.children.push(WT);
                const gT = xT(zT, 6);
                WT.children.push(gT), dT(TT, WT, gT, mT);
                break
              }
              case "#else":
              case "#elif":
                return !0;
              case "#endif":
                return !1;
              case "#ifndef": {
                const WT = new MT;
                UT.children.push(WT);
                const gT = xT(zT, 7);
                WT.children.push(gT), dT(TT, WT, gT, mT);
                break
              }
              case "#if": {
                const WT = new MT,
                  gT = xT(zT, 3);
                UT.children.push(WT), WT.children.push(gT), dT(TT, WT, gT, mT);
                break
              }
            }
            continue
          }
        }
        const gT = new WT;
        if (gT.line = zT, UT.children.push(gT), "#" === zT[0] && "d" === zT[1]) {
          const TT = zT.replace(";", "").split(" ");
          gT.additionalDefineKey = TT[1], 3 === TT.length && (gT.additionalDefineValue = TT[2])
        }
      }
      return !1
    }

    function tT(TT, UT, mT, MT) {
      const gT = new WT,
        nT = new zT;
      return nT.lineIndex = -1, nT.lines = TT.split("\n"), wT(nT, gT, MT), gT.process(UT, mT, MT)
    }

    function aT(TT, UT) {
      const mT = TT.defines,
        WT = {};
      for (const zT of mT) {
        const TT = zT.replace("#define", "").replace(";", "").trim().split(" ");
        WT[TT[0]] = TT.length > 1 ? TT[1] : ""
      }
      return 0 === TT.processor?.shaderLanguage && (WT.GL_ES = "true"), WT.__VERSION__ = TT.version, WT[TT.platformName] = "true", (0, pT.j)(WT, UT?.isNDCHalfZRange, UT?.pWT, UT?.useExactSrgbConversions), WT
    }

    function yT(TT, UT, mT) {
      let WT;
      for (iT.length = 0; null !== (WT = cT.exec(TT));) iT.push(WT);
      let zT = [TT],
        MT = !1;
      for (const nT of iT) {
        let TT = nT[1];
        if (-1 !== TT.indexOf("__decl__") && (TT = TT.replace(vT, ""), UT.supportsUniformBuffers && (TT = TT.replace("Vertex", "Ubo").replace("Fragment", "Ubo")), TT += "Declaration"), !UT.includesShadersStore[TT]) {
          const WT = UT.shadersRepository + "ShadersInclude/" + TT + ".fx";
          return void XT.loadFile(WT, (WT => {
            UT.includesShadersStore[TT] = WT, yT(zT.join(""), UT, mT)
          }))
        } {
          let mT = UT.includesShadersStore[TT];
          if (nT[2]) {
            const TT = nT[3].split(",");
            for (let UT = 0; UT < TT.length; UT += 2) {
              const WT = new RegExp(TT[UT], "g"),
                zT = TT[UT + 1];
              mT = mT.replace(WT, zT)
            }
          }
          if (nT[4]) {
            const TT = nT[5];
            if (-1 !== TT.indexOf("..")) {
              const WT = TT.split(".."),
                zT = parseInt(WT[0]);
              let MT = parseInt(WT[1]),
                gT = mT.slice(0);
              mT = "", isNaN(MT) && (MT = UT.indexParameters[WT[1]]);
              for (let TT = zT; TT < MT; TT++) UT.supportsUniformBuffers || (gT = gT.replace(fT, ((TT, UT) => UT + "{X}"))), mT += gT.replace(qT, TT.toString()) + "\n"
            } else UT.supportsUniformBuffers || (mT = mT.replace(fT, ((TT, UT) => UT + "{X}"))), mT = mT.replace(qT, TT)
          }
          const WT = [];
          for (const TT of zT) {
            const UT = TT.split(nT[0]);
            for (let TT = 0; TT < UT.length - 1; TT++) WT.push(UT[TT]), WT.push(mT);
            WT.push(UT[UT.length - 1])
          }
          zT = WT, MT = MT || mT.indexOf("#include<") >= 0 || mT.indexOf("#include <") >= 0
        }
      }
      iT.length = 0;
      const gT = zT.join("");
      MT ? yT(gT.toString(), UT, mT) : mT(gT)
    }
    const XT = {
      loadFile: (TT, UT, mT, WT, zT, MT) => {
        throw (0, LT.k)("FileTools")
      }
    }
  },
  39957: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => zT,
      g: () => MT,
      j: () => nT,
      m: () => gT,
      p: () => HT
    });
    var WT = mT(39965);
    const zT = {};

    function MT(TT, UT) {
      return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (UT ? UT + "\n" : "") + TT
    }

    function gT(TT, UT, mT, MT, gT, nT, HT) {
      const kT = HT || zT.loadFile;
      if (!kT) throw (0, WT.k)("FileTools");
      return kT(TT, UT, mT, MT, gT, nT)
    }

    function nT(TT, UT, mT, WT) {
      if (TT) return UT ? TT.IS_NDC_HALF_ZRANGE = "" : delete TT.IS_NDC_HALF_ZRANGE, mT ? TT.USE_REVERSE_DEPTHBUFFER = "" : delete TT.USE_REVERSE_DEPTHBUFFER, void(WT ? TT.USE_EXACT_SRGB_CONVERSIONS = "" : delete TT.USE_EXACT_SRGB_CONVERSIONS);
      {
        let TT = "";
        return UT && (TT += "#define IS_NDC_HALF_ZRANGE"), mT && (TT && (TT += "\n"), TT += "#define USE_REVERSE_DEPTHBUFFER"), WT && (TT && (TT += "\n"), TT += "#define USE_EXACT_SRGB_CONVERSIONS"), TT
      }
    }

    function HT(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        WT = arguments.length > 3 ? arguments[3] : void 0;
      switch (TT) {
        case 3: {
          const TT = new Int8Array(UT);
          return WT && TT.set(new Int8Array(WT)), TT
        }
        case 0: {
          const TT = new Uint8Array(UT);
          return WT && TT.set(new Uint8Array(WT)), TT
        }
        case 4: {
          const TT = "number" !== typeof UT ? new Int16Array(UT) : new Int16Array(mT ? UT / 2 : UT);
          return WT && TT.set(new Int16Array(WT)), TT
        }
        case 5:
        case 8:
        case 9:
        case 10:
        case 2: {
          const TT = "number" !== typeof UT ? new Uint16Array(UT) : new Uint16Array(mT ? UT / 2 : UT);
          return WT && TT.set(new Uint16Array(WT)), TT
        }
        case 6: {
          const TT = "number" !== typeof UT ? new Int32Array(UT) : new Int32Array(mT ? UT / 4 : UT);
          return WT && TT.set(new Int32Array(WT)), TT
        }
        case 7:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15: {
          const TT = "number" !== typeof UT ? new Uint32Array(UT) : new Uint32Array(mT ? UT / 4 : UT);
          return WT && TT.set(new Uint32Array(WT)), TT
        }
        case 1: {
          const TT = "number" !== typeof UT ? new Float32Array(UT) : new Float32Array(mT ? UT / 4 : UT);
          return WT && TT.set(new Float32Array(WT)), TT
        }
      }
      const zT = new Uint8Array(UT);
      return WT && zT.set(new Uint8Array(WT)), zT
    }
  },
  39965: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => kT,
      h: () => jT,
      j: () => HT,
      k: () => zT
    });
    const WT = {};

    function zT(TT) {
      if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !WT[TT]) return WT[TT] = !0, `${TT} needs to be imported before as it contains a side-effect required by your code.`
    }
    const MT = {};
    let gT = !1,
      nT = 0;

    function HT(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const WT = function() {
        if ((mT || gT) && 0 === nT) {
          const mT = `${TT}.${UT}`;
          MT[mT] || (MT[mT] = !0, console.warn(`[Babylon.js] ${mT}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
        }
      };
      return WT.__isSideEffectStub = !0, WT
    }

    function kT(TT) {
      return !!TT && !TT.__isSideEffectStub
    }

    function jT(TT, UT) {
      return {
        get() {},
        set(TT) {
          Object.defineProperty(this, UT, {
            value: TT,
            writable: !0,
            configurable: !0,
            enumerable: !0
          })
        },
        configurable: !0,
        enumerable: !0
      }
    }
  },
  39946: (TT, UT, mT) => {
    function WT() {
      return "undefined" !== typeof window
    }

    function zT() {
      return "undefined" !== typeof navigator
    }

    function MT() {
      return "undefined" !== typeof document
    }

    function gT(TT) {
      let UT = "",
        mT = TT.firstChild;
      for (; mT;) 3 === mT.nodeType && (UT += mT.textContent), mT = mT.nextSibling;
      return UT
    }
    mT.d(UT, {
      c: () => gT,
      d: () => MT,
      f: () => zT,
      j: () => WT
    })
  },
  40160: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => WT,
      f: () => zT,
      j: () => MT
    });
    class WT extends Error {}
    WT._setPrototypeOf = Object.setPrototypeOf || ((TT, UT) => (TT.__proto__ = UT, TT));
    const zT = {
      MeshInvalidPositionsError: 0,
      UnsupportedTextureError: 1e3,
      GLTFLoaderUnexpectedMagicError: 2e3,
      SceneLoaderError: 3e3,
      LoadFileError: 4e3,
      RequestFileError: 4001,
      ReadFileError: 4002
    };
    class MT extends WT {
      constructor(TT, UT, mT) {
        super(TT), this.errorCode = UT, this.innerError = mT, this.name = "RuntimeError", WT._setPrototypeOf(this, MT.prototype)
      }
    }
  },
  40151: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => aT,
      h: () => qT,
      k: () => xT,
      m: () => wT,
      n: () => YT,
      q: () => OT,
      u: () => eT,
      y: () => sT,
      z: () => JT,
      B: () => iT
    });
    var WT = mT(40155),
      zT = mT(39946),
      MT = mT(37219);
    class gT {}
    gT.FilesToLoad = {};
    var nT = mT(40160),
      HT = mT(40165),
      kT = mT(37216),
      jT = mT(39957),
      lT = mT(39972),
      LT = mT(38800),
      pT = mT(39975),
      BT = mT(40171);
    const ZT = new RegExp(/^data:([^,]+\/[^,]+)?;base64,/i);
    class cT extends nT.j {
      constructor(TT, UT) {
        super(TT, nT.f.LoadFileError), this.name = "LoadFileError", nT.c._setPrototypeOf(this, cT.prototype), UT instanceof WT.b ? this.request = UT : this.file = UT
      }
    }
    class vT extends nT.j {
      constructor(TT, UT) {
        super(TT, nT.f.RequestFileError), this.request = UT, this.name = "RequestFileError", nT.c._setPrototypeOf(this, vT.prototype)
      }
    }
    class fT extends nT.j {
      constructor(TT, UT) {
        super(TT, nT.f.ReadFileError), this.file = UT, this.name = "ReadFileError", nT.c._setPrototypeOf(this, fT.prototype)
      }
    }
    const qT = {
        DefaultRetryStrategy: class {
          static ExponentialBackoff() {
            let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
              UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
            return (mT, WT, zT) => 0 !== WT.status || zT >= TT || -1 !== mT.indexOf("file:") ? -1 : Math.pow(2, zT) * UT
          }
        }.ExponentialBackoff(),
        BaseUrl: "",
        CorsBehavior: "anonymous",
        PreprocessUrl: TT => TT,
        ScriptBaseUrl: "",
        ScriptPreprocessUrl: TT => TT,
        CleanUrl: TT => TT = TT.replace(/#/gm, "%23")
      },
      iT = (TT, UT) => {
        if ((!TT || 0 !== TT.indexOf("data:")) && qT.CorsBehavior)
          if ("string" === typeof qT.CorsBehavior || qT.CorsBehavior instanceof String) UT.crossOrigin = qT.CorsBehavior;
          else {
            const mT = qT.CorsBehavior(TT);
            mT && (UT.crossOrigin = mT)
          }
      },
      bT = {
        getRequiredSize: null
      },
      OT = function(TT, UT, mT, zT) {
        let MT, nT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
          jT = arguments.length > 5 ? arguments[5] : void 0,
          lT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : kT.c.LastCreatedEngine;
        if ("undefined" === typeof HTMLImageElement && !lT?._features.forceBitmapOverHTMLImageElement) return mT("LoadImage is only supported in web or BabylonNative environments."), null;
        if (lT?._features.forceBitmapOverHTMLImageElement && "string" !== typeof TT && "undefined" !== typeof Blob) {
          let WT;
          if (TT instanceof Blob) WT = TT;
          else {
            const UT = TT instanceof ArrayBuffer ? TT : (0, BT.o)(TT);
            WT = new Blob([UT], {
              type: nT
            })
          }
          return lT.createImageBitmap(WT, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...jT
          }).then(UT).catch((UT => {
            mT && mT("Error while trying to load image: " + TT, UT)
          })), null
        }
        let LT = !1;
        if (TT instanceof ArrayBuffer || ArrayBuffer.isView(TT))
          if ("undefined" !== typeof Blob && "undefined" !== typeof URL) {
            let UT;
            UT = TT instanceof ArrayBuffer ? TT : (0, BT.o)(TT), MT = URL.createObjectURL(new Blob([UT], {
              type: nT
            })), LT = !0
          } else MT = `data:${nT};base64,` + (0, HT.j)(TT);
        else TT instanceof Blob ? (MT = URL.createObjectURL(TT), LT = !0) : (MT = qT.CleanUrl(TT), MT = qT.PreprocessUrl(MT));
        const pT = UT => {
          if (mT) {
            const WT = MT || TT.toString();
            mT(`Error while trying to load image: ${0===WT.indexOf("http")||WT.length<=128?WT:WT.slice(0,128)+"..."}`, UT)
          }
        };
        if (lT?._features.forceBitmapOverHTMLImageElement) return YT(MT, (WT => {
          lT.createImageBitmap(new Blob([WT], {
            type: nT
          }), {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...jT
          }).then((TT => {
            UT(TT), LT && URL.revokeObjectURL(MT)
          })).catch((UT => {
            mT && mT("Error while trying to load image: " + TT, UT)
          }))
        }), void 0, zT || void 0, !0, ((TT, UT) => {
          pT(UT)
        })), null;
        const ZT = new Image;
        if (bT.getRequiredSize) {
          const UT = bT.getRequiredSize(TT);
          UT.width && (ZT.width = UT.width), UT.height && (ZT.height = UT.height)
        }
        iT(MT, ZT);
        const cT = [],
          vT = () => {
            for (const TT of cT) TT.target.removeEventListener(TT.name, TT.handler);
            cT.length = 0
          };
        cT.push({
          target: ZT,
          name: "load",
          handler: () => {
            vT(), UT(ZT), LT && ZT.src && URL.revokeObjectURL(ZT.src)
          }
        }), cT.push({
          target: ZT,
          name: "error",
          handler: TT => {
            vT(), pT(TT), LT && ZT.src && URL.revokeObjectURL(ZT.src)
          }
        }), cT.push({
          target: document,
          name: "securitypolicyviolation",
          handler: TT => {
            if (TT.blockedURI !== ZT.src || "Gp" === TT.disposition) return;
            vT();
            const UT = new Error(`CSP violation of policy ${TT.effectiveDirective} ${TT.blockedURI}. Current policy is ${TT.originalPolicy}`);
            kT.c.UseFallbackTexture = !1, pT(UT), LT && ZT.src && URL.revokeObjectURL(ZT.src), ZT.src = ""
          }
        }), (() => {
          for (const TT of cT) TT.target.addEventListener(TT.name, TT.handler)
        })();
        const fT = "blob:" === MT.substring(0, 5),
          OT = "data:" === MT.substring(0, 5),
          eT = () => {
            fT || OT || !WT.b.IsCustomRequestAvailable ? ZT.src = MT : YT(MT, ((TT, UT, mT) => {
              const WT = new Blob([TT], {
                  type: !nT && mT ? mT : nT
                }),
                zT = URL.createObjectURL(WT);
              LT = !0, ZT.src = zT
            }), void 0, zT || void 0, !0, ((TT, UT) => {
              pT(UT)
            }))
          },
          JT = () => {
            zT && zT.loadImage(MT, ZT)
          };
        if (!fT && !OT && zT && zT.enableTexturesOffline) zT.open(JT, eT);
        else {
          if (-1 !== MT.indexOf("file:")) {
            const TT = decodeURIComponent(MT.substring(5).toLowerCase());
            if (gT.FilesToLoad[TT] && "undefined" !== typeof URL) {
              try {
                let UT;
                try {
                  UT = URL.createObjectURL(gT.FilesToLoad[TT])
                } catch (xT) {
                  UT = URL.createObjectURL(gT.FilesToLoad[TT])
                }
                ZT.src = UT, LT = !0
              } catch (dT) {
                ZT.src = ""
              }
              return ZT
            }
          }
          eT()
        }
        return ZT
      },
      eT = (TT, UT, mT, WT, zT) => {
        const gT = new FileReader,
          nT = {
            onCompleteObservable: new MT.d,
            abort: () => gT.abort()
          };
        return gT.onloadend = () => nT.onCompleteObservable.notifyObservers(nT), zT && (gT.onerror = () => {
          zT(new fT(`Unable to read ${TT.name}`, TT))
        }), gT.onload = TT => {
          UT(TT.target.result)
        }, mT && (gT.onprogress = mT), WT ? gT.readAsArrayBuffer(TT) : gT.readAsText(TT), nT
      },
      YT = (TT, UT, mT, WT, zT, HT, kT) => {
        if (TT.name) return eT(TT, UT, mT, zT, HT ? TT => {
          HT(void 0, TT)
        } : void 0);
        const jT = TT;
        if (-1 !== jT.indexOf("file:")) {
          let TT = decodeURIComponent(jT.substring(5).toLowerCase());
          0 === TT.indexOf("./") && (TT = TT.substring(2));
          const WT = gT.FilesToLoad[TT];
          if (WT) return eT(WT, UT, mT, zT, HT ? TT => HT(void 0, new cT(TT.message, TT.file)) : void 0)
        }
        const {
          match: lT,
          type: BT
        } = tT(jT);
        if (lT) {
          const TT = {
            onCompleteObservable: new MT.d,
            abort: () => () => {}
          };
          try {
            const TT = zT ? aT(jT) : yT(jT);
            UT(TT, void 0, BT)
          } catch (nT) {
            HT ? HT(void 0, nT) : LT.b.Error(nT.message || "Failed to parse the Data URL")
          }
          return pT.e.SetImmediate((() => {
            TT.onCompleteObservable.notifyObservers(TT)
          })), TT
        }
        return JT(jT, ((TT, mT) => {
          UT(TT, mT?.responseURL, mT?.getResponseHeader("content-type"))
        }), mT, WT, zT, HT ? TT => {
          HT(TT.request, new cT(TT.message, TT.request))
        } : void 0, kT)
      },
      JT = (TT, UT, mT, gT, nT, HT, jT) => {
        null !== gT && (gT ?? (gT = kT.c.LastCreatedScene?.offlineProvider)), TT = qT.CleanUrl(TT), TT = qT.PreprocessUrl(TT);
        const lT = qT.BaseUrl + TT;
        let pT = !1;
        const BT = {
            onCompleteObservable: new MT.d,
            abort: () => pT = !0
          },
          ZT = () => {
            let TT, MT = new WT.b,
              gT = null;
            const kT = () => {
              MT && (mT && MT.removeEventListener("progress", mT), TT && MT.removeEventListener("readystatechange", TT), MT.removeEventListener("loadend", ZT))
            };
            let ZT = () => {
              kT(), BT.onCompleteObservable.notifyObservers(BT), BT.onCompleteObservable.clear(), mT = void 0, TT = null, ZT = null, HT = void 0, jT = void 0, UT = void 0
            };
            BT.abort = () => {
              pT = !0, ZT && ZT(), MT && MT.readyState !== (XMLHttpRequest.DONE || 4) && MT.abort(), null !== gT && (clearTimeout(gT), gT = null), MT = null
            };
            const cT = TT => {
                const UT = TT.message || "Unknown error";
                HT && MT ? HT(new vT(UT, MT)) : LT.b.Error(UT)
              },
              fT = LT => {
                if (MT) {
                  if (MT.open("GET", lT), jT) try {
                    jT(MT)
                  } catch (BT) {
                    return void cT(BT)
                  }
                  nT && (MT.responseType = "arraybuffer"), mT && MT.addEventListener("progress", mT), ZT && MT.addEventListener("loadend", ZT), TT = () => {
                    if (!pT && MT && MT.readyState === (XMLHttpRequest.DONE || 4)) {
                      if (TT && MT.removeEventListener("readystatechange", TT), MT.status >= 200 && MT.status < 300 || 0 === MT.status && (!(0, zT.j)() || dT())) {
                        const TT = nT ? MT.response : MT.responseText;
                        if (null !== TT) {
                          try {
                            UT && UT(TT, MT)
                          } catch (BT) {
                            cT(BT)
                          }
                          return
                        }
                      }
                      const mT = qT.DefaultRetryStrategy;
                      if (mT) {
                        const TT = mT(lT, MT, LT);
                        if (-1 !== TT) return kT(), MT = new WT.b, void(gT = setTimeout((() => fT(LT + 1)), TT))
                      }
                      const jT = new vT("Error status: " + MT.status + " " + MT.statusText + " - Unable to load " + lT, MT);
                      HT && HT(jT)
                    }
                  }, MT.addEventListener("readystatechange", TT), MT.send()
                }
              };
            fT(0)
          };
        if (gT && gT.enableSceneOffline && !TT.startsWith("blob:")) {
          const WT = TT => {
              TT && TT.status > 400 ? HT && HT(TT) : ZT()
            },
            zT = () => {
              gT && gT.loadFile(qT.BaseUrl + TT, (TT => {
                !pT && UT && UT(TT), BT.onCompleteObservable.notifyObservers(BT)
              }), mT ? TT => {
                !pT && mT && mT(TT)
              } : void 0, WT, nT)
            };
          gT.open(zT, WT)
        } else ZT();
        return BT
      },
      xT = TT => {
        const {
          match: UT,
          type: mT
        } = tT(TT);
        if (UT) return mT || void 0;
        const WT = TT.lastIndexOf(".");
        switch (TT.substring(WT + 1).toLowerCase()) {
          case "glb":
            return "model/gltf-binary";
          case "bin":
            return "application/octet-stream";
          case "mF":
            return "model/gltf+json";
          case "jpg":
          case "jpeg":
            return "image/jpeg";
          case "png":
            return "image/png";
          case "webp":
            return "image/webp";
          case "ktx":
            return "image/ktx";
          case "ktx2":
            return "image/ktx2";
          case "avif":
            return "image/avif";
          default:
            return
        }
      },
      dT = () => "undefined" !== typeof location && "file:" === location.protocol,
      wT = TT => ZT.test(TT),
      tT = TT => {
        const UT = ZT.exec(TT);
        if (null === UT || 0 === UT.length) return {
          match: !1,
          type: ""
        };
        return {
          match: !0,
          type: UT[0].replace("data:", "").replace(";base64,", "")
        }
      };

    function aT(TT) {
      return (0, HT.e)(TT.split(",")[1])
    }
    const yT = TT => (0, HT.h)(TT.split(",")[1]);
    let XT;
    const IT = (TT, UT, mT, WT, zT, MT, gT, nT, HT, kT) => {
      XT = {
        DecodeBase64UrlToBinary: TT,
        DecodeBase64UrlToString: UT,
        DefaultRetryStrategy: mT.DefaultRetryStrategy,
        BaseUrl: mT.BaseUrl,
        CorsBehavior: mT.CorsBehavior,
        PreprocessUrl: mT.PreprocessUrl,
        IsBase64DataUrl: WT,
        IsFileURL: zT,
        LoadFile: MT,
        LoadImage: gT,
        ReadFile: nT,
        RequestFile: HT,
        SetCorsBehavior: kT
      }, Object.defineProperty(XT, "DefaultRetryStrategy", {
        get: function() {
          return mT.DefaultRetryStrategy
        },
        set: function(TT) {
          mT.DefaultRetryStrategy = TT
        }
      }), Object.defineProperty(XT, "BaseUrl", {
        get: function() {
          return mT.BaseUrl
        },
        set: function(TT) {
          mT.BaseUrl = TT
        }
      }), Object.defineProperty(XT, "PreprocessUrl", {
        get: function() {
          return mT.PreprocessUrl
        },
        set: function(TT) {
          mT.PreprocessUrl = TT
        }
      }), Object.defineProperty(XT, "CorsBehavior", {
        get: function() {
          return mT.CorsBehavior
        },
        set: function(TT) {
          mT.CorsBehavior = TT
        }
      })
    };
    let QT = !1;

    function sT() {
      QT || (QT = !0, IT(aT, yT, qT, wT, dT, YT, OT, eT, JT, iT), jT.d.loadFile = YT, jT.d.loadImage = OT, lT.l.loadFile = YT)
    }
  },
  40178: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => nT,
      f: () => MT,
      j: () => gT
    });
    let WT = null;

    function zT() {
      if (WT) return WT;
      const TT = new ArrayBuffer(4),
        UT = new Float32Array(TT),
        mT = new Uint32Array(TT),
        zT = new Uint32Array(512),
        MT = new Uint32Array(512);
      for (let WT = 0; WT < 256; ++WT) {
        const TT = WT - 127;
        TT < -24 ? (zT[WT] = 0, zT[256 | WT] = 32768, MT[WT] = 24, MT[256 | WT] = 24) : TT < -14 ? (zT[WT] = 1024 >> -TT - 14, zT[256 | WT] = 1024 >> -TT - 14 | 32768, MT[WT] = -TT - 1, MT[256 | WT] = -TT - 1) : TT <= 15 ? (zT[WT] = TT + 15 << 10, zT[256 | WT] = TT + 15 << 10 | 32768, MT[WT] = 13, MT[256 | WT] = 13) : TT < 128 ? (zT[WT] = 31744, zT[256 | WT] = 64512, MT[WT] = 24, MT[256 | WT] = 24) : (zT[WT] = 31744, zT[256 | WT] = 64512, MT[WT] = 13, MT[256 | WT] = 13)
      }
      const gT = new Uint32Array(2048),
        nT = new Uint32Array(64),
        HT = new Uint32Array(64);
      for (let WT = 1; WT < 1024; ++WT) {
        let TT = WT << 13,
          UT = 0;
        for (; 0 === (8388608 & TT);) TT <<= 1, UT -= 8388608;
        TT &= -8388609, UT += 947912704, gT[WT] = TT | UT
      }
      for (let WT = 1024; WT < 2048; ++WT) gT[WT] = 939524096 + (WT - 1024 << 13);
      for (let WT = 1; WT < 31; ++WT) nT[WT] = WT << 23;
      nT[31] = 1199570944, nT[32] = 2147483648;
      for (let WT = 33; WT < 63; ++WT) nT[WT] = 2147483648 + (WT - 32 << 23);
      nT[63] = 3347054592;
      for (let WT = 1; WT < 64; ++WT) 32 !== WT && (HT[WT] = 1024);
      return WT = {
        floatView: UT,
        uint32View: mT,
        baseTable: zT,
        shiftTable: MT,
        mantissaTable: gT,
        exponentTable: nT,
        offsetTable: HT
      }, WT
    }
    const MT = 65504;

    function gT(TT) {
      const UT = zT();
      UT.floatView[0] = TT;
      const mT = UT.uint32View[0],
        WT = mT >> 23 & 511;
      return UT.baseTable[WT] + ((8388607 & mT) >> UT.shiftTable[WT])
    }

    function nT(TT) {
      const UT = zT();
      return UT.uint32View[0] = UT.mantissaTable[UT.offsetTable[TT >> 10] + (1023 & TT)] + UT.exponentTable[TT >> 10], UT.floatView[0]
    }
  },
  40165: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => MT,
      h: () => zT,
      j: () => WT
    });
    const WT = TT => {
        const UT = ArrayBuffer.isView(TT) ? new Uint8Array(TT.buffer, TT.byteOffset, TT.byteLength) : new Uint8Array(TT);
        return "function" === typeof UT.toBase64 ? UT.toBase64() : function(TT) {
          const UT = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          let mT, WT, zT, MT, gT, nT, HT, kT = "",
            jT = 0;
          for (; jT < TT.length;) mT = TT[jT++], WT = jT < TT.length ? TT[jT++] : Number.NaN, zT = jT < TT.length ? TT[jT++] : Number.NaN, MT = mT >> 2, gT = (3 & mT) << 4 | WT >> 4, nT = (15 & WT) << 2 | zT >> 6, HT = 63 & zT, isNaN(WT) ? nT = HT = 64 : isNaN(zT) && (HT = 64), kT += UT.charAt(MT) + UT.charAt(gT) + UT.charAt(nT) + UT.charAt(HT);
          return kT
        }(UT)
      },
      zT = TT => atob(TT),
      MT = TT => "function" === typeof Uint8Array.fromBase64 ? Uint8Array.fromBase64(TT).buffer : function(TT) {
        const UT = zT(TT),
          mT = UT.length,
          WT = new Uint8Array(new ArrayBuffer(mT));
        for (let zT = 0; zT < mT; zT++) WT[zT] = UT.charCodeAt(zT);
        return WT.buffer
      }(TT)
  },
  39975: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => zT,
      i: () => gT
    });
    let WT = [];
    class zT {
      static SetImmediate(TT) {
        0 === WT.length && setTimeout((() => {
          const TT = WT;
          WT = [];
          for (const UT of TT) UT()
        }), 1), WT.push(TT)
      }
    }

    function MT(TT, UT, mT) {
      try {
        if (TT()) return UT(), !0
      } catch (WT) {
        return mT?.(WT), !0
      }
      return !1
    }
    const gT = function(TT, UT, mT) {
      let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
        zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
        gT = arguments.length > 6 ? arguments[6] : void 0;
      if ((!(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]) && MT(TT, UT, mT)) return null;
      const nT = setInterval((() => {
        MT(TT, UT, mT) ? clearInterval(nT) : (zT -= WT, zT < 0 && (clearInterval(nT), mT?.(new Error("Operation timed out after maximum retries. " + (gT || "")), !0)))
      }), WT);
      return () => clearInterval(nT)
    }
  },
  40155: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => WT
    });
    class WT {
      constructor() {
        this._xhr = "undefined" !== typeof _native && _native.XMLHttpRequest ? new _native.XMLHttpRequest : new XMLHttpRequest, this._requestURL = ""
      }
      static get IsCustomRequestAvailable() {
        return Object.keys(WT.CustomRequestHeaders).length > 0 || WT.CustomRequestModifiers.length > 0
      }
      static _CleanUrl(TT) {
        return TT = (TT = TT.replace("file:http:", "http:")).replace("file:https:", "https:")
      }
      static _ShouldSkipRequestModifications(TT) {
        return WT.SkipRequestModificationForBabylonCDN && (TT.includes("preview.babylonjs.com") || TT.includes("cdn.babylonjs.com"))
      }
      static _CollectCustomizations(TT) {
        const UT = {
          ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        };
        if (WT._ShouldSkipRequestModifications(TT)) return {
          url: TT,
          headers: UT
        };
        for (const zT in WT.CustomRequestHeaders) {
          const TT = WT.CustomRequestHeaders[zT];
          TT && (UT[zT] = TT)
        }
        const mT = {
          setRequestHeader: (TT, mT) => {
            UT[TT] = mT
          }
        };
        for (const zT of WT.CustomRequestModifiers) {
          if (WT._ShouldSkipRequestModifications(TT)) break;
          const UT = zT(mT, TT);
          "string" === typeof UT && (TT = UT)
        }
        return {
          url: TT,
          headers: UT
        }
      }
      static async FetchAsync(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const mT = UT.method ?? "GET";
        if ("undefined" !== typeof fetch) {
          const {
            url: zT,
            headers: MT
          } = WT._CollectCustomizations(WT._CleanUrl(TT), UT.headers ?? {});
          return await fetch(zT, {
            method: mT,
            headers: MT,
            body: UT.body ?? void 0
          })
        }
        return await new Promise(((zT, MT) => {
          const gT = new WT;
          gT.responseType = "arraybuffer", gT.addEventListener("readystatechange", (() => {
            if (4 === gT.readyState)
              if (gT.status >= 200 && gT.status < 300) {
                const TT = "undefined" !== typeof Headers ? new Headers : void 0,
                  UT = gT.getResponseHeader("Content-Type");
                UT && TT && TT.set("Content-Type", UT), "undefined" !== typeof Response ? zT(new Response(gT.response, {
                  status: gT.status,
                  statusText: gT.statusText,
                  headers: TT
                })) : zT({
                  ok: !0,
                  status: gT.status,
                  statusText: gT.statusText,
                  headers: {
                    get: TT => gT.getResponseHeader(TT)
                  },
                  arrayBuffer: async () => await Promise.resolve(gT.response)
                })
              } else MT(new Error(`HTTP ${gT.status} loading '${gT.requestURL}': ${gT.statusText}`))
          })), gT.open(mT, TT, UT.headers), gT.send(UT.body ?? null)
        }))
      }
      get requestURL() {
        return this._requestURL
      }
      get onprogress() {
        return this._xhr.onprogress
      }
      set onprogress(TT) {
        this._xhr.onprogress = TT
      }
      get readyState() {
        return this._xhr.readyState
      }
      get status() {
        return this._xhr.status
      }
      get statusText() {
        return this._xhr.statusText
      }
      get response() {
        return this._xhr.response
      }
      get responseURL() {
        return this._xhr.responseURL
      }
      get responseText() {
        return this._xhr.responseText
      }
      get responseType() {
        return this._xhr.responseType
      }
      set responseType(TT) {
        this._xhr.responseType = TT
      }
      get timeout() {
        return this._xhr.timeout
      }
      set timeout(TT) {
        this._xhr.timeout = TT
      }
      addEventListener(TT, UT, mT) {
        this._xhr.addEventListener(TT, UT, mT)
      }
      removeEventListener(TT, UT, mT) {
        this._xhr.removeEventListener(TT, UT, mT)
      }
      abort() {
        this._xhr.abort()
      }
      send(TT) {
        this._xhr.send(TT)
      }
      open(TT, UT, mT) {
        const {
          url: zT,
          headers: MT
        } = WT._CollectCustomizations(UT, mT);
        this._requestURL = WT._CleanUrl(zT), this._xhr.open(TT, this._requestURL, !0);
        for (const WT in MT) this._xhr.setRequestHeader(WT, MT[WT])
      }
      setRequestHeader(TT, UT) {
        this._xhr.setRequestHeader(TT, UT)
      }
      getResponseHeader(TT) {
        return this._xhr.getResponseHeader(TT)
      }
    }
    WT.CustomRequestHeaders = {}, WT.CustomRequestModifiers = new Array, WT.SkipRequestModificationForBabylonCDN = !0
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);