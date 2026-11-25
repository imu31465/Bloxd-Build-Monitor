export const id = 258;
export const ids = [258];
export const modules = {
  40447: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => fG,
      f: () => pG,
      g: () => UG,
      j: () => QG,
      k: () => YG,
      l: () => kG,
      m: () => VG
    });
    var wG = ZG(39093),
      SG = ZG(40451);

    function LG(GG, bG, ZG, wG) {
      switch (bG) {
        case 5120: {
          let bG = GG.getInt8(ZG);
          return wG && (bG = Math.max(bG / 127, -1)), bG
        }
        case 5121: {
          let bG = GG.getUint8(ZG);
          return wG && (bG /= 255), bG
        }
        case 5122: {
          let bG = GG.getInt16(ZG, !0);
          return wG && (bG = Math.max(bG / 32767, -1)), bG
        }
        case 5123: {
          let bG = GG.getUint16(ZG, !0);
          return wG && (bG /= 65535), bG
        }
        case 5131:
          return (0, SG.c)(GG.getUint16(ZG, !0));
        case 5124:
          return GG.getInt32(ZG, !0);
        case 5125:
          return GG.getUint32(ZG, !0);
        case 5126:
          return GG.getFloat32(ZG, !0);
        default:
          throw new Error(`Invalid component type ${bG}`)
      }
    }

    function yG(GG, bG, ZG, wG, LG) {
      switch (bG) {
        case 5120:
          wG && (LG = Math.round(127 * LG)), GG.setInt8(ZG, LG);
          break;
        case 5121:
          wG && (LG = Math.round(255 * LG)), GG.setUint8(ZG, LG);
          break;
        case 5122:
          wG && (LG = Math.round(32767 * LG)), GG.setInt16(ZG, LG, !0);
          break;
        case 5123:
          wG && (LG = Math.round(65535 * LG)), GG.setUint16(ZG, LG, !0);
          break;
        case 5131:
          GG.setUint16(ZG, (0, SG.h)(LG), !0);
          break;
        case 5124:
          GG.setInt32(ZG, LG, !0);
          break;
        case 5125:
          GG.setUint32(ZG, LG, !0);
          break;
        case 5126:
          GG.setFloat32(ZG, LG, !0);
          break;
        default:
          throw new Error(`Invalid component type ${bG}`)
      }
    }

    function kG(GG) {
      switch (GG) {
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
          throw new Error(`Invalid type '${GG}'`)
      }
    }

    function UG(GG, bG, ZG, wG, SG, UG, YG, VG) {
      const pG = new Array(wG),
        fG = new Array(wG);
      if (GG instanceof Array) {
        let SG = bG / 4;
        const LG = ZG / 4;
        for (let bG = 0; bG < UG; bG += wG) {
          for (let bG = 0; bG < wG; bG++) pG[bG] = fG[bG] = GG[SG + bG];
          VG(fG, bG);
          for (let bG = 0; bG < wG; bG++) pG[bG] !== fG[bG] && (GG[SG + bG] = fG[bG]);
          SG += LG
        }
      } else {
        const QG = ArrayBuffer.isView(GG) ? new DataView(GG.buffer, GG.byteOffset, GG.byteLength) : new DataView(GG),
          KG = kG(SG);
        for (let GG = 0; GG < UG; GG += wG) {
          for (let GG = 0, ZG = bG; GG < wG; GG++, ZG += KG) pG[GG] = fG[GG] = LG(QG, SG, ZG, YG);
          VG(fG, GG);
          for (let GG = 0, ZG = bG; GG < wG; GG++, ZG += KG) pG[GG] !== fG[GG] && yG(QG, SG, ZG, YG, fG[GG]);
          bG += ZG
        }
      }
    }

    function YG(GG, bG, ZG, SG, LG, yG, YG, VG) {
      const pG = bG * kG(ZG),
        fG = YG * bG;
      if (5126 !== ZG || LG !== pG) {
        const wG = new Float32Array(fG);
        return UG(GG, SG, LG, bG, ZG, fG, yG, ((GG, ZG) => {
          for (let SG = 0; SG < bG; SG++) wG[ZG + SG] = GG[SG]
        })), wG
      }
      if (!(GG instanceof Array || GG instanceof Float32Array) || 0 !== SG || GG.length !== fG) {
        if (GG instanceof Array) {
          const bG = SG / 4;
          return GG.slice(bG, bG + fG)
        }
        if (ArrayBuffer.isView(GG)) {
          const bG = GG.byteOffset + SG;
          return 0 !== (3 & bG) && (wG.c.Warn("Float array must be aligned to 4-bytes border"), VG = !0), VG ? new Float32Array(GG.buffer.slice(bG, bG + fG * Float32Array.BYTES_PER_ELEMENT)) : new Float32Array(GG.buffer, bG, fG)
        }
        return new Float32Array(GG, SG, fG)
      }
      return VG ? GG.slice() : GG
    }

    function VG(GG, bG, ZG, SG, LG, yG, YG) {
      const VG = kG(ZG),
        pG = function(GG) {
          switch (GG) {
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
              throw new Error(`Invalid component type '${GG}'`)
          }
        }(ZG),
        fG = yG * bG;
      if (Array.isArray(GG)) {
        if (0 !== (3 & SG) || 0 !== (3 & LG)) throw new Error("byteOffset and byteStride must be a multiple of 4 for number[] data.");
        const wG = SG / 4,
          kG = LG / 4;
        if (wG + (yG - 1) * kG + bG > GG.length) throw new Error("Last accessed index is out of bounds.");
        if (kG < bG) throw new Error("Data stride cannot be smaller than the component size.");
        if (kG !== bG) {
          const wG = new pG(fG);
          return UG(GG, SG, LG, bG, ZG, fG, !1, ((GG, ZG) => {
            for (let SG = 0; SG < bG; SG++) wG[ZG + SG] = GG[SG]
          })), wG
        }
        return new pG(GG.slice(wG, wG + fG))
      }
      let QG, KG = SG;
      ArrayBuffer.isView(GG) ? (QG = GG.buffer, KG += GG.byteOffset) : QG = GG;
      if (KG + (yG - 1) * LG + bG * VG > QG.byteLength) throw new Error("Last accessed byte is out of bounds.");
      const hG = bG * VG;
      if (LG < hG) throw new Error("Byte stride cannot be smaller than the component's byte size.");
      if (LG !== hG) {
        const GG = new pG(fG),
          ZG = new Uint8Array(QG, KG),
          wG = new Uint8Array(GG.buffer),
          SG = bG * VG;
        for (let bG = 0, kG = 0, UG = 0; bG < yG; bG++, kG += LG, UG += SG) wG.set(ZG.subarray(kG, kG + SG), UG);
        return GG
      }
      return 1 !== VG && 0 !== (KG & VG - 1) && (wG.c.Warn("Array must be aligned to border of element size. Data will be copied."), YG = !0), YG ? new pG(QG.slice(KG, KG + fG * VG)) : new pG(QG, KG, fG)
    }

    function pG(GG, bG, ZG, SG, LG, yG, YG, VG) {
      const pG = bG * kG(ZG),
        fG = YG * bG;
      if (VG.length !== fG) throw new Error("Output length is not valid");
      if (5126 === ZG && LG === pG)
        if (GG instanceof Array) {
          const bG = SG / 4;
          VG.set(GG, bG)
        } else if (ArrayBuffer.isView(GG)) {
        const bG = GG.byteOffset + SG;
        if (0 !== (3 & bG)) return wG.c.Warn("Float array must be aligned to 4-bytes border"), void VG.set(new Float32Array(GG.buffer.slice(bG, bG + fG * Float32Array.BYTES_PER_ELEMENT)));
        const ZG = new Float32Array(GG.buffer, bG, fG);
        VG.set(ZG)
      } else {
        const bG = new Float32Array(GG, SG, fG);
        VG.set(bG)
      } else UG(GG, SG, LG, bG, ZG, fG, yG, ((GG, ZG) => {
        for (let wG = 0; wG < bG; wG++) VG[ZG + wG] = GG[wG]
      }))
    }

    function fG(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      if (Array.isArray(GG)) {
        for (let SG = 0; SG < bG; SG++)
          if (GG[ZG + SG] - wG > 65535) return !0;
        return !1
      }
      return 4 === GG.BYTES_PER_ELEMENT
    }

    function QG(GG) {
      const bG = GG.buffer;
      if (bG instanceof ArrayBuffer) return GG;
      const ZG = new ArrayBuffer(GG.byteLength);
      return new Uint8Array(ZG).set(new Uint8Array(bG, GG.byteOffset, GG.byteLength)), ZG
    }
  },
  40262: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => iG,
      g: () => XG,
      j: () => uG,
      i: () => aG,
      m: () => cG
    });
    class wG {
      constructor() {
        this.children = []
      }
      isValid(GG) {
        return !0
      }
      process(GG, bG, ZG) {
        let wG = "";
        if (this.line) {
          let ZG = this.line;
          const SG = bG.processor;
          if (SG) {
            SG.lineProcessor && (ZG = SG.lineProcessor(ZG, bG.isFragment, bG.processingContext));
            const wG = bG.processor?.attributeKeywordName ?? "attribute",
              LG = bG.isFragment && bG.processor?.varyingFragmentKeywordName ? bG.processor?.varyingFragmentKeywordName : !bG.isFragment && bG.processor?.varyingVertexKeywordName ? bG.processor?.varyingVertexKeywordName : "varying";
            if (!bG.isFragment && SG.attributeProcessor && this.line.startsWith(wG)) ZG = SG.attributeProcessor(this.line, GG, bG.processingContext);
            else if (SG.varyingProcessor && (SG.varyingCheck?.(this.line, bG.isFragment) || !SG.varyingCheck && this.line.startsWith(LG))) ZG = SG.varyingProcessor(this.line, bG.isFragment, GG, bG.processingContext);
            else if (SG.uniformProcessor && SG.uniformRegexp && SG.uniformRegexp.test(this.line)) bG.lookForClosingBracketForUniformBuffer || (ZG = SG.uniformProcessor(this.line, bG.isFragment, GG, bG.processingContext));
            else if (SG.uniformBufferProcessor && SG.uniformBufferRegexp && SG.uniformBufferRegexp.test(this.line)) bG.lookForClosingBracketForUniformBuffer || (ZG = SG.uniformBufferProcessor(this.line, bG.isFragment, bG.processingContext), bG.lookForClosingBracketForUniformBuffer = !0);
            else if (SG.textureProcessor && SG.textureRegexp && SG.textureRegexp.test(this.line)) ZG = SG.textureProcessor(this.line, bG.isFragment, GG, bG.processingContext);
            else if ((SG.uniformProcessor || SG.uniformBufferProcessor) && this.line.startsWith("uniform") && !bG.lookForClosingBracketForUniformBuffer) {
              /uniform\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s+(\S+)\s*;/.test(this.line) ? SG.uniformProcessor && (ZG = SG.uniformProcessor(this.line, bG.isFragment, GG, bG.processingContext)) : SG.uniformBufferProcessor && (ZG = SG.uniformBufferProcessor(this.line, bG.isFragment, bG.processingContext), bG.lookForClosingBracketForUniformBuffer = !0)
            }
            bG.lookForClosingBracketForUniformBuffer && -1 !== this.line.indexOf("}") && (bG.lookForClosingBracketForUniformBuffer = !1, SG.endOfUniformBufferProcessor && (ZG = SG.endOfUniformBufferProcessor(this.line, bG.isFragment, bG.processingContext)))
          }
          wG += ZG + "\n"
        }
        for (const SG of this.children) wG += SG.process(GG, bG, ZG);
        return this.additionalDefineKey && (GG[this.additionalDefineKey] = this.additionalDefineValue || "true", ZG[this.additionalDefineKey] = GG[this.additionalDefineKey]), wG
      }
    }
    class SG {
      constructor() {
        this._lines = []
      }
      get currentLine() {
        return this._lines[this.lineIndex]
      }
      get canRead() {
        return this.lineIndex < this._lines.length - 1
      }
      set lines(GG) {
        this._lines.length = 0;
        for (const bG of GG) {
          if (!bG || "\r" === bG) continue;
          if ("#" === bG[0]) {
            this._lines.push(bG);
            continue
          }
          const GG = bG.trim();
          if (!GG) continue;
          if (GG.startsWith("//")) {
            this._lines.push(bG);
            continue
          }
          const ZG = GG.indexOf(";");
          if (-1 === ZG) this._lines.push(GG);
          else if (ZG === GG.length - 1) GG.length > 1 && this._lines.push(GG);
          else {
            const GG = bG.split(";");
            for (let bG = 0; bG < GG.length; bG++) {
              let ZG = GG[bG];
              ZG && (ZG = ZG.trim(), ZG && this._lines.push(ZG + (bG !== GG.length - 1 ? ";" : "")))
            }
          }
        }
      }
    }
    class LG extends wG {
      process(GG, bG, ZG) {
        for (let wG = 0; wG < this.children.length; wG++) {
          const SG = this.children[wG];
          if (SG.isValid(GG)) return SG.process(GG, bG, ZG)
        }
        return ""
      }
    }
    class yG extends wG {
      isValid(GG) {
        return this.testExpression.isTrue(GG)
      }
    }
    class kG {
      isTrue(GG) {
        return !0
      }
      static postfixToInfix(GG) {
        const bG = [];
        for (const ZG of GG)
          if (void 0 === kG._OperatorPriority[ZG]) bG.push(ZG);
          else {
            const GG = bG[bG.length - 1],
              wG = bG[bG.length - 2];
            bG.length -= 2, bG.push(`(${wG}${ZG}${GG})`)
          } return bG[bG.length - 1]
      }
      static infixToPostfix(GG) {
        const bG = kG._InfixToPostfixCache.get(GG);
        if (bG) return bG.accessTime = Date.now(), bG.result;
        if (!GG.includes("&&") && !GG.includes("||") && !GG.includes(")") && !GG.includes("(")) return [GG];
        const ZG = [];
        let wG = -1;
        const SG = () => {
            VG = VG.trim(), "" !== VG && (ZG.push(VG), VG = "")
          },
          LG = GG => {
            wG < kG._Stack.length - 1 && (kG._Stack[++wG] = GG)
          },
          yG = () => kG._Stack[wG],
          UG = () => -1 === wG ? "!!INVALID EXPRESSION!!" : kG._Stack[wG--];
        let YG = 0,
          VG = "";
        for (; YG < GG.length;) {
          const bG = GG.charAt(YG),
            pG = YG < GG.length - 1 ? GG.substring(YG, 2 + YG) : "";
          if ("(" === bG) VG = "", LG(bG);
          else if (")" === bG) {
            for (SG(); - 1 !== wG && "(" !== yG();) ZG.push(UG());
            UG()
          } else if (kG._OperatorPriority[pG] > 1) {
            for (SG(); - 1 !== wG && kG._OperatorPriority[yG()] >= kG._OperatorPriority[pG];) ZG.push(UG());
            LG(pG), YG++
          } else VG += bG;
          YG++
        }
        for (SG(); - 1 !== wG;) "(" === yG() ? UG() : ZG.push(UG());
        return kG._InfixToPostfixCache.size >= kG.InfixToPostfixCacheLimitSize && kG.ClearCache(), kG._InfixToPostfixCache.set(GG, {
          result: ZG,
          accessTime: Date.now()
        }), ZG
      }
      static ClearCache() {
        const GG = Array.from(kG._InfixToPostfixCache.entries()).sort(((GG, bG) => GG[1].accessTime - bG[1].accessTime));
        for (let bG = 0; bG < kG.InfixToPostfixCacheCleanupSize; bG++) kG._InfixToPostfixCache.delete(GG[bG][0])
      }
    }
    kG.InfixToPostfixCacheLimitSize = 5e4, kG.InfixToPostfixCacheCleanupSize = 25e3, kG._InfixToPostfixCache = new Map, kG._OperatorPriority = {
      ")": 0,
      "(": 1,
      "||": 2,
      "&&": 3
    }, kG._Stack = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    class UG extends kG {
      constructor(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super(), this.define = GG, this.not = bG
      }
      isTrue(GG) {
        let bG = void 0 !== GG[this.define];
        return this.not && (bG = !bG), bG
      }
    }
    class YG extends kG {
      isTrue(GG) {
        return this.leftOperand.isTrue(GG) || this.rightOperand.isTrue(GG)
      }
    }
    class VG extends kG {
      isTrue(GG) {
        return this.leftOperand.isTrue(GG) && this.rightOperand.isTrue(GG)
      }
    }
    class pG extends kG {
      constructor(GG, bG, ZG) {
        super(), this.define = GG, this.operand = bG, this.testValue = ZG
      }
      toString() {
        return `${this.define} ${this.operand} ${this.testValue}`
      }
      isTrue(GG) {
        let bG = !1;
        const ZG = parseInt(void 0 != GG[this.define] ? GG[this.define] : this.define),
          wG = parseInt(void 0 != GG[this.testValue] ? GG[this.testValue] : this.testValue);
        if (isNaN(ZG) || isNaN(wG)) return !1;
        switch (this.operand) {
          case ">":
            bG = ZG > wG;
            break;
          case "<":
            bG = ZG < wG;
            break;
          case "<=":
            bG = ZG <= wG;
            break;
          case ">=":
            bG = ZG >= wG;
            break;
          case "==":
            bG = ZG === wG;
            break;
          case "!=":
            bG = ZG !== wG
        }
        return bG
      }
    }
    var fG = ZG(40258),
      QG = ZG(40252);
    const KG = /defined\s*?\((.+?)\)/g,
      hG = /defined\s*?\[(.+?)\]/g,
      dG = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g,
      JG = /__decl__/,
      rG = /light\{X\}.(\w*)/g,
      zG = /\{X\}/g,
      EG = [],
      oG = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;

    function XG(GG) {
      GG.processor && GG.processor.initializeShaders && GG.processor.initializeShaders(GG.processingContext)
    }

    function uG(GG, bG, ZG, wG) {
      bG.processor?.preProcessShaderCode && (GG = bG.processor.preProcessShaderCode(GG, bG.isFragment)), aG(GG, bG, (GG => {
        bG.processCodeAfterIncludes && (GG = bG.processCodeAfterIncludes(bG.isFragment ? "fragment" : "vertex", GG, bG.defines));
        const SG = function(GG, bG, ZG) {
          let wG = function(GG, bG) {
            if (bG.processor?.noPrecision) return GG;
            const ZG = bG.shouldUseHighPrecisionShader; - 1 === GG.indexOf("precision highp float") ? GG = ZG ? "precision highp float;\n" + GG : "precision mediump float;\n" + GG : ZG || (GG = GG.replace("precision highp float", "precision mediump float"));
            return GG
          }(GG, bG);
          if (!bG.processor) return wG;
          if (0 === bG.processor.shaderLanguage && -1 !== wG.indexOf("#version 3") && (wG = wG.replace("#version 300 es", ""), !bG.processor.parseGLES3)) return wG;
          const SG = bG.defines,
            LG = vG(bG, ZG);
          bG.processor.preProcessor && (wG = bG.processor.preProcessor(wG, SG, LG, bG.isFragment, bG.processingContext));
          const yG = {};
          wG = FG(wG, LG, bG, yG), bG.processor.postProcessor && (wG = bG.processor.postProcessor(wG, SG, bG.isFragment, bG.processingContext, ZG ? {
            drawBuffersExtensionDisabled: !ZG.getCaps().drawBuffersExtension
          } : {}, LG, yG));
          ZG?._features.needShaderCodeInlining && (wG = ZG.inlineShaderCode(wG));
          return wG
        }(GG, bG, wG);
        ZG(SG, GG)
      }))
    }

    function iG(GG, bG, ZG) {
      return ZG.processor && ZG.processor.finalizeShaders ? ZG.processor.finalizeShaders(GG, bG, ZG.processingContext) : {
        vertexCode: GG,
        fragmentCode: bG
      }
    }

    function CG(GG) {
      const bG = /defined\((.+)\)/.exec(GG);
      if (bG && bG.length) return new UG(bG[1].trim(), "!" === GG[0]);
      const ZG = ["==", "!=", ">=", "<=", "<", ">"];
      let wG = "",
        SG = 0;
      for (wG of ZG)
        if (SG = GG.indexOf(wG), SG > -1) break;
      if (-1 === SG) return new UG(GG);
      const LG = GG.substring(0, SG).trim(),
        yG = GG.substring(SG + wG.length).trim();
      return new pG(LG, wG, yG)
    }

    function WG(GG, bG) {
      const ZG = new yG,
        wG = GG.substring(0, bG);
      let SG = GG.substring(bG);
      return SG = SG.substring(0, (SG.indexOf("//") + 1 || SG.length + 1) - 1).trim(), ZG.testExpression = "#ifdef" === wG ? new UG(SG) : "#ifndef" === wG ? new UG(SG, !0) : function(GG) {
        GG = GG.replace(KG, "defined[$1]");
        const bG = kG.infixToPostfix(GG),
          ZG = [];
        for (const SG of bG)
          if ("||" !== SG && "&&" !== SG) ZG.push(SG);
          else if (ZG.length >= 2) {
          let GG = ZG[ZG.length - 1],
            bG = ZG[ZG.length - 2];
          ZG.length -= 2;
          const wG = "&&" == SG ? new VG : new YG;
          "string" === typeof GG && (GG = GG.replace(hG, "defined($1)")), "string" === typeof bG && (bG = bG.replace(hG, "defined($1)")), wG.leftOperand = "string" === typeof bG ? CG(bG) : bG, wG.rightOperand = "string" === typeof GG ? CG(GG) : GG, ZG.push(wG)
        }
        let wG = ZG[ZG.length - 1];
        return "string" === typeof wG && (wG = wG.replace(hG, "defined($1)")), "string" === typeof wG ? CG(wG) : wG
      }(SG), ZG
    }

    function mG(GG, bG, ZG, SG) {
      let LG;
      for (; IG(GG, ZG, SG);) {
        LG = GG.currentLine;
        const yG = LG.substring(0, 5).toLowerCase();
        if ("#else" === yG) {
          const ZG = new wG;
          return bG.children.push(ZG), void IG(GG, ZG, SG)
        }
        if ("#elif" === yG) {
          const GG = WG(LG, 5);
          bG.children.push(GG), ZG = GG
        }
      }
    }

    function IG(GG, bG, ZG) {
      for (; GG.canRead;) {
        GG.lineIndex++;
        const SG = GG.currentLine;
        if (SG.indexOf("#") >= 0) {
          const wG = oG.exec(SG);
          if (wG && wG.length) {
            switch (wG[0]) {
              case "#ifdef": {
                const wG = new LG;
                bG.children.push(wG);
                const yG = WG(SG, 6);
                wG.children.push(yG), mG(GG, wG, yG, ZG);
                break
              }
              case "#else":
              case "#elif":
                return !0;
              case "#endif":
                return !1;
              case "#ifndef": {
                const wG = new LG;
                bG.children.push(wG);
                const yG = WG(SG, 7);
                wG.children.push(yG), mG(GG, wG, yG, ZG);
                break
              }
              case "#if": {
                const wG = new LG,
                  yG = WG(SG, 3);
                bG.children.push(wG), wG.children.push(yG), mG(GG, wG, yG, ZG);
                break
              }
            }
            continue
          }
        }
        const yG = new wG;
        if (yG.line = SG, bG.children.push(yG), "#" === SG[0] && "d" === SG[1]) {
          const GG = SG.replace(";", "").split(" ");
          yG.additionalDefineKey = GG[1], 3 === GG.length && (yG.additionalDefineValue = GG[2])
        }
      }
      return !1
    }

    function FG(GG, bG, ZG, LG) {
      const yG = new wG,
        kG = new SG;
      return kG.lineIndex = -1, kG.lines = GG.split("\n"), IG(kG, yG, LG), yG.process(bG, ZG, LG)
    }

    function vG(GG, bG) {
      const ZG = GG.defines,
        wG = {};
      for (const SG of ZG) {
        const GG = SG.replace("#define", "").replace(";", "").trim().split(" ");
        wG[GG[0]] = GG.length > 1 ? GG[1] : ""
      }
      return 0 === GG.processor?.shaderLanguage && (wG.GL_ES = "true"), wG.__VERSION__ = GG.version, wG[GG.platformName] = "true", (0, QG.l)(wG, bG?.isNDCHalfZRange, bG?.iwG, bG?.useExactSrgbConversions), wG
    }

    function aG(GG, bG, ZG) {
      let wG;
      for (EG.length = 0; null !== (wG = dG.exec(GG));) EG.push(wG);
      let SG = [GG],
        LG = !1;
      for (const kG of EG) {
        let GG = kG[1];
        if (-1 !== GG.indexOf("__decl__") && (GG = GG.replace(JG, ""), bG.supportsUniformBuffers && (GG = GG.replace("Vertex", "Ubo").replace("Fragment", "Ubo")), GG += "Declaration"), !bG.includesShadersStore[GG]) {
          const wG = bG.shadersRepository + "ShadersInclude/" + GG + ".fx";
          return void cG.loadFile(wG, (wG => {
            bG.includesShadersStore[GG] = wG, aG(SG.join(""), bG, ZG)
          }))
        } {
          let ZG = bG.includesShadersStore[GG];
          if (kG[2]) {
            const GG = kG[3].split(",");
            for (let bG = 0; bG < GG.length; bG += 2) {
              const wG = new RegExp(GG[bG], "g"),
                SG = GG[bG + 1];
              ZG = ZG.replace(wG, SG)
            }
          }
          if (kG[4]) {
            const GG = kG[5];
            if (-1 !== GG.indexOf("..")) {
              const wG = GG.split(".."),
                SG = parseInt(wG[0]);
              let LG = parseInt(wG[1]),
                yG = ZG.slice(0);
              ZG = "", isNaN(LG) && (LG = bG.indexParameters[wG[1]]);
              for (let GG = SG; GG < LG; GG++) bG.supportsUniformBuffers || (yG = yG.replace(rG, ((GG, bG) => bG + "{X}"))), ZG += yG.replace(zG, GG.toString()) + "\n"
            } else bG.supportsUniformBuffers || (ZG = ZG.replace(rG, ((GG, bG) => bG + "{X}"))), ZG = ZG.replace(zG, GG)
          }
          const wG = [];
          for (const GG of SG) {
            const bG = GG.split(kG[0]);
            for (let GG = 0; GG < bG.length - 1; GG++) wG.push(bG[GG]), wG.push(ZG);
            wG.push(bG[bG.length - 1])
          }
          SG = wG, LG = LG || ZG.indexOf("#include<") >= 0 || ZG.indexOf("#include <") >= 0
        }
      }
      EG.length = 0;
      const yG = SG.join("");
      LG ? aG(yG.toString(), bG, ZG) : ZG(yG)
    }
    const cG = {
      loadFile: (GG, bG, ZG, wG, SG, LG) => {
        throw (0, fG.i)("FileTools")
      }
    }
  },
  40252: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => SG,
      h: () => LG,
      l: () => kG,
      n: () => yG,
      p: () => UG
    });
    var wG = ZG(40258);
    const SG = {};

    function LG(GG, bG) {
      return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (bG ? bG + "\n" : "") + GG
    }

    function yG(GG, bG, ZG, LG, yG, kG, UG) {
      const YG = UG || SG.loadFile;
      if (!YG) throw (0, wG.i)("FileTools");
      return YG(GG, bG, ZG, LG, yG, kG)
    }

    function kG(GG, bG, ZG, wG) {
      if (GG) return bG ? GG.IS_NDC_HALF_ZRANGE = "" : delete GG.IS_NDC_HALF_ZRANGE, ZG ? GG.USE_REVERSE_DEPTHBUFFER = "" : delete GG.USE_REVERSE_DEPTHBUFFER, void(wG ? GG.USE_EXACT_SRGB_CONVERSIONS = "" : delete GG.USE_EXACT_SRGB_CONVERSIONS);
      {
        let GG = "";
        return bG && (GG += "#define IS_NDC_HALF_ZRANGE"), ZG && (GG && (GG += "\n"), GG += "#define USE_REVERSE_DEPTHBUFFER"), wG && (GG && (GG += "\n"), GG += "#define USE_EXACT_SRGB_CONVERSIONS"), GG
      }
    }

    function UG(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        wG = arguments.length > 3 ? arguments[3] : void 0;
      switch (GG) {
        case 3: {
          const GG = new Int8Array(bG);
          return wG && GG.set(new Int8Array(wG)), GG
        }
        case 0: {
          const GG = new Uint8Array(bG);
          return wG && GG.set(new Uint8Array(wG)), GG
        }
        case 4: {
          const GG = "number" !== typeof bG ? new Int16Array(bG) : new Int16Array(ZG ? bG / 2 : bG);
          return wG && GG.set(new Int16Array(wG)), GG
        }
        case 5:
        case 8:
        case 9:
        case 10:
        case 2: {
          const GG = "number" !== typeof bG ? new Uint16Array(bG) : new Uint16Array(ZG ? bG / 2 : bG);
          return wG && GG.set(new Uint16Array(wG)), GG
        }
        case 6: {
          const GG = "number" !== typeof bG ? new Int32Array(bG) : new Int32Array(ZG ? bG / 4 : bG);
          return wG && GG.set(new Int32Array(wG)), GG
        }
        case 7:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15: {
          const GG = "number" !== typeof bG ? new Uint32Array(bG) : new Uint32Array(ZG ? bG / 4 : bG);
          return wG && GG.set(new Uint32Array(wG)), GG
        }
        case 1: {
          const GG = "number" !== typeof bG ? new Float32Array(bG) : new Float32Array(ZG ? bG / 4 : bG);
          return wG && GG.set(new Float32Array(wG)), GG
        }
      }
      const SG = new Uint8Array(bG);
      return wG && SG.set(new Uint8Array(wG)), SG
    }
  },
  40258: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => YG,
      d: () => VG,
      h: () => UG,
      i: () => SG
    });
    const wG = {};

    function SG(GG) {
      if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !wG[GG]) return wG[GG] = !0, `${GG} needs to be imported before as it contains a side-effect required by your code.`
    }
    const LG = {};
    let yG = !1,
      kG = 0;

    function UG(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const wG = function() {
        if ((ZG || yG) && 0 === kG) {
          const ZG = `${GG}.${bG}`;
          LG[ZG] || (LG[ZG] = !0, console.warn(`[Babylon.js] ${ZG}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
        }
      };
      return wG.__isSideEffectStub = !0, wG
    }

    function YG(GG) {
      return !!GG && !GG.__isSideEffectStub
    }

    function VG(GG, bG) {
      return {
        get() {},
        set(GG) {
          Object.defineProperty(this, bG, {
            value: GG,
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
  40241: (GG, bG, ZG) => {
    function wG() {
      return "undefined" !== typeof window
    }

    function SG() {
      return "undefined" !== typeof navigator
    }

    function LG() {
      return "undefined" !== typeof document
    }

    function yG(GG) {
      let bG = "",
        ZG = GG.firstChild;
      for (; ZG;) 3 === ZG.nodeType && (bG += ZG.textContent), ZG = ZG.nextSibling;
      return bG
    }
    ZG.d(bG, {
      b: () => yG,
      c: () => LG,
      g: () => SG,
      k: () => wG
    })
  },
  40438: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => wG,
      f: () => SG,
      j: () => LG
    });
    class wG extends Error {}
    wG._setPrototypeOf = Object.setPrototypeOf || ((GG, bG) => (GG.__proto__ = bG, GG));
    const SG = {
      MeshInvalidPositionsError: 0,
      UnsupportedTextureError: 1e3,
      GLTFLoaderUnexpectedMagicError: 2e3,
      SceneLoaderError: 3e3,
      LoadFileError: 4e3,
      RequestFileError: 4001,
      ReadFileError: 4002
    };
    class LG extends wG {
      constructor(GG, bG, ZG) {
        super(GG), this.errorCode = bG, this.innerError = ZG, this.name = "RuntimeError", wG._setPrototypeOf(this, LG.prototype)
      }
    }
  },
  40430: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => vG,
      f: () => zG,
      g: () => WG,
      k: () => IG,
      o: () => iG,
      q: () => XG,
      s: () => uG,
      v: () => PG,
      z: () => CG,
      A: () => EG
    });
    var wG = ZG(40432),
      SG = ZG(40241),
      LG = ZG(37465);
    class yG {}
    yG.FilesToLoad = {};
    var kG = ZG(40438),
      UG = ZG(40443),
      YG = ZG(37463),
      VG = ZG(40252),
      pG = ZG(40262),
      fG = ZG(39093),
      QG = ZG(40271),
      KG = ZG(40447);
    const hG = new RegExp(/^data:([^,]+\/[^,]+)?;base64,/i);
    class dG extends kG.j {
      constructor(GG, bG) {
        super(GG, kG.f.LoadFileError), this.name = "LoadFileError", kG.c._setPrototypeOf(this, dG.prototype), bG instanceof wG.b ? this.request = bG : this.file = bG
      }
    }
    class JG extends kG.j {
      constructor(GG, bG) {
        super(GG, kG.f.RequestFileError), this.request = bG, this.name = "RequestFileError", kG.c._setPrototypeOf(this, JG.prototype)
      }
    }
    class rG extends kG.j {
      constructor(GG, bG) {
        super(GG, kG.f.ReadFileError), this.file = bG, this.name = "ReadFileError", kG.c._setPrototypeOf(this, rG.prototype)
      }
    }
    const zG = {
        DefaultRetryStrategy: class {
          static ExponentialBackoff() {
            let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
              bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
            return (ZG, wG, SG) => 0 !== wG.status || SG >= GG || -1 !== ZG.indexOf("file:") ? -1 : Math.pow(2, SG) * bG
          }
        }.ExponentialBackoff(),
        BaseUrl: "",
        CorsBehavior: "anonymous",
        PreprocessUrl: GG => GG,
        ScriptBaseUrl: "",
        ScriptPreprocessUrl: GG => GG,
        CleanUrl: GG => GG = GG.replace(/#/gm, "%23")
      },
      EG = (GG, bG) => {
        if ((!GG || 0 !== GG.indexOf("data:")) && zG.CorsBehavior)
          if ("string" === typeof zG.CorsBehavior || zG.CorsBehavior instanceof String) bG.crossOrigin = zG.CorsBehavior;
          else {
            const ZG = zG.CorsBehavior(GG);
            ZG && (bG.crossOrigin = ZG)
          }
      },
      oG = {
        getRequiredSize: null
      },
      XG = function(GG, bG, ZG, SG) {
        let LG, kG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
          VG = arguments.length > 5 ? arguments[5] : void 0,
          pG = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : YG.c.LastCreatedEngine;
        if ("undefined" === typeof HTMLImageElement && !pG?._features.forceBitmapOverHTMLImageElement) return ZG("LoadImage is only supported in web or BabylonNative environments."), null;
        if (pG?._features.forceBitmapOverHTMLImageElement && "string" !== typeof GG && "undefined" !== typeof Blob) {
          let wG;
          if (GG instanceof Blob) wG = GG;
          else {
            const bG = GG instanceof ArrayBuffer ? GG : (0, KG.j)(GG);
            wG = new Blob([bG], {
              type: kG
            })
          }
          return pG.createImageBitmap(wG, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...VG
          }).then(bG).catch((bG => {
            ZG && ZG("Error while trying to load image: " + GG, bG)
          })), null
        }
        let fG = !1;
        if (GG instanceof ArrayBuffer || ArrayBuffer.isView(GG))
          if ("undefined" !== typeof Blob && "undefined" !== typeof URL) {
            let bG;
            bG = GG instanceof ArrayBuffer ? GG : (0, KG.j)(GG), LG = URL.createObjectURL(new Blob([bG], {
              type: kG
            })), fG = !0
          } else LG = `data:${kG};base64,` + (0, UG.e)(GG);
        else GG instanceof Blob ? (LG = URL.createObjectURL(GG), fG = !0) : (LG = zG.CleanUrl(GG), LG = zG.PreprocessUrl(LG));
        const QG = bG => {
          if (ZG) {
            const wG = LG || GG.toString();
            ZG(`Error while trying to load image: ${0===wG.indexOf("http")||wG.length<=128?wG:wG.slice(0,128)+"..."}`, bG)
          }
        };
        if (pG?._features.forceBitmapOverHTMLImageElement) return iG(LG, (wG => {
          pG.createImageBitmap(new Blob([wG], {
            type: kG
          }), {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...VG
          }).then((GG => {
            bG(GG), fG && URL.revokeObjectURL(LG)
          })).catch((bG => {
            ZG && ZG("Error while trying to load image: " + GG, bG)
          }))
        }), void 0, SG || void 0, !0, ((GG, bG) => {
          QG(bG)
        })), null;
        const hG = new Image;
        if (oG.getRequiredSize) {
          const bG = oG.getRequiredSize(GG);
          bG.width && (hG.width = bG.width), bG.height && (hG.height = bG.height)
        }
        EG(LG, hG);
        const dG = [],
          JG = () => {
            for (const GG of dG) GG.target.removeEventListener(GG.name, GG.handler);
            dG.length = 0
          };
        dG.push({
          target: hG,
          name: "load",
          handler: () => {
            JG(), bG(hG), fG && hG.src && URL.revokeObjectURL(hG.src)
          }
        }), dG.push({
          target: hG,
          name: "error",
          handler: GG => {
            JG(), QG(GG), fG && hG.src && URL.revokeObjectURL(hG.src)
          }
        }), dG.push({
          target: document,
          name: "securitypolicyviolation",
          handler: GG => {
            if (GG.blockedURI !== hG.src || "NQ" === GG.disposition) return;
            JG();
            const bG = new Error(`CSP violation of policy ${GG.effectiveDirective} ${GG.blockedURI}. Current policy is ${GG.originalPolicy}`);
            YG.c.UseFallbackTexture = !1, QG(bG), fG && hG.src && URL.revokeObjectURL(hG.src), hG.src = ""
          }
        }), (() => {
          for (const GG of dG) GG.target.addEventListener(GG.name, GG.handler)
        })();
        const rG = "blob:" === LG.substring(0, 5),
          XG = "data:" === LG.substring(0, 5),
          uG = () => {
            rG || XG || !wG.b.IsCustomRequestAvailable ? hG.src = LG : iG(LG, ((GG, bG, ZG) => {
              const wG = new Blob([GG], {
                  type: !kG && ZG ? ZG : kG
                }),
                SG = URL.createObjectURL(wG);
              fG = !0, hG.src = SG
            }), void 0, SG || void 0, !0, ((GG, bG) => {
              QG(bG)
            }))
          },
          CG = () => {
            SG && SG.loadImage(LG, hG)
          };
        if (!rG && !XG && SG && SG.enableTexturesOffline) SG.open(CG, uG);
        else {
          if (-1 !== LG.indexOf("file:")) {
            const GG = decodeURIComponent(LG.substring(5).toLowerCase());
            if (yG.FilesToLoad[GG] && "undefined" !== typeof URL) {
              try {
                let bG;
                try {
                  bG = URL.createObjectURL(yG.FilesToLoad[GG])
                } catch (WG) {
                  bG = URL.createObjectURL(yG.FilesToLoad[GG])
                }
                hG.src = bG, fG = !0
              } catch (mG) {
                hG.src = ""
              }
              return hG
            }
          }
          uG()
        }
        return hG
      },
      uG = (GG, bG, ZG, wG, SG) => {
        const yG = new FileReader,
          kG = {
            onCompleteObservable: new LG.c,
            abort: () => yG.abort()
          };
        return yG.onloadend = () => kG.onCompleteObservable.notifyObservers(kG), SG && (yG.onerror = () => {
          SG(new rG(`Unable to read ${GG.name}`, GG))
        }), yG.onload = GG => {
          bG(GG.target.result)
        }, ZG && (yG.onprogress = ZG), wG ? yG.readAsArrayBuffer(GG) : yG.readAsText(GG), kG
      },
      iG = (GG, bG, ZG, wG, SG, UG, YG) => {
        if (GG.name) return uG(GG, bG, ZG, SG, UG ? GG => {
          UG(void 0, GG)
        } : void 0);
        const VG = GG;
        if (-1 !== VG.indexOf("file:")) {
          let GG = decodeURIComponent(VG.substring(5).toLowerCase());
          0 === GG.indexOf("./") && (GG = GG.substring(2));
          const wG = yG.FilesToLoad[GG];
          if (wG) return uG(wG, bG, ZG, SG, UG ? GG => UG(void 0, new dG(GG.message, GG.file)) : void 0)
        }
        const {
          match: pG,
          type: KG
        } = FG(VG);
        if (pG) {
          const GG = {
            onCompleteObservable: new LG.c,
            abort: () => () => {}
          };
          try {
            const GG = SG ? vG(VG) : aG(VG);
            bG(GG, void 0, KG)
          } catch (kG) {
            UG ? UG(void 0, kG) : fG.c.Error(kG.message || "Failed to parse the Data URL")
          }
          return QG.b.SetImmediate((() => {
            GG.onCompleteObservable.notifyObservers(GG)
          })), GG
        }
        return CG(VG, ((GG, ZG) => {
          bG(GG, ZG?.responseURL, ZG?.getResponseHeader("content-type"))
        }), ZG, wG, SG, UG ? GG => {
          UG(GG.request, new dG(GG.message, GG.request))
        } : void 0, YG)
      },
      CG = (GG, bG, ZG, yG, kG, UG, VG) => {
        null !== yG && (yG ?? (yG = YG.c.LastCreatedScene?.offlineProvider)), GG = zG.CleanUrl(GG), GG = zG.PreprocessUrl(GG);
        const pG = zG.BaseUrl + GG;
        let QG = !1;
        const KG = {
            onCompleteObservable: new LG.c,
            abort: () => QG = !0
          },
          hG = () => {
            let GG, LG = new wG.b,
              yG = null;
            const YG = () => {
              LG && (ZG && LG.removeEventListener("progress", ZG), GG && LG.removeEventListener("readystatechange", GG), LG.removeEventListener("loadend", hG))
            };
            let hG = () => {
              YG(), KG.onCompleteObservable.notifyObservers(KG), KG.onCompleteObservable.clear(), ZG = void 0, GG = null, hG = null, UG = void 0, VG = void 0, bG = void 0
            };
            KG.abort = () => {
              QG = !0, hG && hG(), LG && LG.readyState !== (XMLHttpRequest.DONE || 4) && LG.abort(), null !== yG && (clearTimeout(yG), yG = null), LG = null
            };
            const dG = GG => {
                const bG = GG.message || "Unknown error";
                UG && LG ? UG(new JG(bG, LG)) : fG.c.Error(bG)
              },
              rG = fG => {
                if (LG) {
                  if (LG.open("GET", pG), VG) try {
                    VG(LG)
                  } catch (KG) {
                    return void dG(KG)
                  }
                  kG && (LG.responseType = "arraybuffer"), ZG && LG.addEventListener("progress", ZG), hG && LG.addEventListener("loadend", hG), GG = () => {
                    if (!QG && LG && LG.readyState === (XMLHttpRequest.DONE || 4)) {
                      if (GG && LG.removeEventListener("readystatechange", GG), LG.status >= 200 && LG.status < 300 || 0 === LG.status && (!(0, SG.k)() || mG())) {
                        const GG = kG ? LG.response : LG.responseText;
                        if (null !== GG) {
                          try {
                            bG && bG(GG, LG)
                          } catch (KG) {
                            dG(KG)
                          }
                          return
                        }
                      }
                      const ZG = zG.DefaultRetryStrategy;
                      if (ZG) {
                        const GG = ZG(pG, LG, fG);
                        if (-1 !== GG) return YG(), LG = new wG.b, void(yG = setTimeout((() => rG(fG + 1)), GG))
                      }
                      const VG = new JG("Error status: " + LG.status + " " + LG.statusText + " - Unable to load " + pG, LG);
                      UG && UG(VG)
                    }
                  }, LG.addEventListener("readystatechange", GG), LG.send()
                }
              };
            rG(0)
          };
        if (yG && yG.enableSceneOffline && !GG.startsWith("blob:")) {
          const wG = GG => {
              GG && GG.status > 400 ? UG && UG(GG) : hG()
            },
            SG = () => {
              yG && yG.loadFile(zG.BaseUrl + GG, (GG => {
                !QG && bG && bG(GG), KG.onCompleteObservable.notifyObservers(KG)
              }), ZG ? GG => {
                !QG && ZG && ZG(GG)
              } : void 0, wG, kG)
            };
          yG.open(SG, wG)
        } else hG();
        return KG
      },
      WG = GG => {
        const {
          match: bG,
          type: ZG
        } = FG(GG);
        if (bG) return ZG || void 0;
        const wG = GG.lastIndexOf(".");
        switch (GG.substring(wG + 1).toLowerCase()) {
          case "glb":
            return "model/gltf-binary";
          case "bin":
            return "application/octet-stream";
          case "JF":
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
      mG = () => "undefined" !== typeof location && "file:" === location.protocol,
      IG = GG => hG.test(GG),
      FG = GG => {
        const bG = hG.exec(GG);
        if (null === bG || 0 === bG.length) return {
          match: !1,
          type: ""
        };
        return {
          match: !0,
          type: bG[0].replace("data:", "").replace(";base64,", "")
        }
      };

    function vG(GG) {
      return (0, UG.c)(GG.split(",")[1])
    }
    const aG = GG => (0, UG.d)(GG.split(",")[1]);
    let cG;
    const lG = (GG, bG, ZG, wG, SG, LG, yG, kG, UG, YG) => {
      cG = {
        DecodeBase64UrlToBinary: GG,
        DecodeBase64UrlToString: bG,
        DefaultRetryStrategy: ZG.DefaultRetryStrategy,
        BaseUrl: ZG.BaseUrl,
        CorsBehavior: ZG.CorsBehavior,
        PreprocessUrl: ZG.PreprocessUrl,
        IsBase64DataUrl: wG,
        IsFileURL: SG,
        LoadFile: LG,
        LoadImage: yG,
        ReadFile: kG,
        RequestFile: UG,
        SetCorsBehavior: YG
      }, Object.defineProperty(cG, "DefaultRetryStrategy", {
        get: function() {
          return ZG.DefaultRetryStrategy
        },
        set: function(GG) {
          ZG.DefaultRetryStrategy = GG
        }
      }), Object.defineProperty(cG, "BaseUrl", {
        get: function() {
          return ZG.BaseUrl
        },
        set: function(GG) {
          ZG.BaseUrl = GG
        }
      }), Object.defineProperty(cG, "PreprocessUrl", {
        get: function() {
          return ZG.PreprocessUrl
        },
        set: function(GG) {
          ZG.PreprocessUrl = GG
        }
      }), Object.defineProperty(cG, "CorsBehavior", {
        get: function() {
          return ZG.CorsBehavior
        },
        set: function(GG) {
          ZG.CorsBehavior = GG
        }
      })
    };
    let jG = !1;

    function PG() {
      jG || (jG = !0, lG(vG, aG, zG, IG, mG, iG, XG, uG, CG, EG), VG.d.loadFile = iG, VG.d.loadImage = XG, pG.m.loadFile = iG)
    }
  },
  40451: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => kG,
      f: () => LG,
      h: () => yG
    });
    let wG = null;

    function SG() {
      if (wG) return wG;
      const GG = new ArrayBuffer(4),
        bG = new Float32Array(GG),
        ZG = new Uint32Array(GG),
        SG = new Uint32Array(512),
        LG = new Uint32Array(512);
      for (let wG = 0; wG < 256; ++wG) {
        const GG = wG - 127;
        GG < -24 ? (SG[wG] = 0, SG[256 | wG] = 32768, LG[wG] = 24, LG[256 | wG] = 24) : GG < -14 ? (SG[wG] = 1024 >> -GG - 14, SG[256 | wG] = 1024 >> -GG - 14 | 32768, LG[wG] = -GG - 1, LG[256 | wG] = -GG - 1) : GG <= 15 ? (SG[wG] = GG + 15 << 10, SG[256 | wG] = GG + 15 << 10 | 32768, LG[wG] = 13, LG[256 | wG] = 13) : GG < 128 ? (SG[wG] = 31744, SG[256 | wG] = 64512, LG[wG] = 24, LG[256 | wG] = 24) : (SG[wG] = 31744, SG[256 | wG] = 64512, LG[wG] = 13, LG[256 | wG] = 13)
      }
      const yG = new Uint32Array(2048),
        kG = new Uint32Array(64),
        UG = new Uint32Array(64);
      for (let wG = 1; wG < 1024; ++wG) {
        let GG = wG << 13,
          bG = 0;
        for (; 0 === (8388608 & GG);) GG <<= 1, bG -= 8388608;
        GG &= -8388609, bG += 947912704, yG[wG] = GG | bG
      }
      for (let wG = 1024; wG < 2048; ++wG) yG[wG] = 939524096 + (wG - 1024 << 13);
      for (let wG = 1; wG < 31; ++wG) kG[wG] = wG << 23;
      kG[31] = 1199570944, kG[32] = 2147483648;
      for (let wG = 33; wG < 63; ++wG) kG[wG] = 2147483648 + (wG - 32 << 23);
      kG[63] = 3347054592;
      for (let wG = 1; wG < 64; ++wG) 32 !== wG && (UG[wG] = 1024);
      return wG = {
        floatView: bG,
        uint32View: ZG,
        baseTable: SG,
        shiftTable: LG,
        mantissaTable: yG,
        exponentTable: kG,
        offsetTable: UG
      }, wG
    }
    const LG = 65504;

    function yG(GG) {
      const bG = SG();
      bG.floatView[0] = GG;
      const ZG = bG.uint32View[0],
        wG = ZG >> 23 & 511;
      return bG.baseTable[wG] + ((8388607 & ZG) >> bG.shiftTable[wG])
    }

    function kG(GG) {
      const bG = SG();
      return bG.uint32View[0] = bG.mantissaTable[bG.offsetTable[GG >> 10] + (1023 & GG)] + bG.exponentTable[GG >> 10], bG.floatView[0]
    }
  },
  40443: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => LG,
      d: () => SG,
      e: () => wG
    });
    const wG = GG => {
        const bG = ArrayBuffer.isView(GG) ? new Uint8Array(GG.buffer, GG.byteOffset, GG.byteLength) : new Uint8Array(GG);
        return "function" === typeof bG.toBase64 ? bG.toBase64() : function(GG) {
          const bG = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          let ZG, wG, SG, LG, yG, kG, UG, YG = "",
            VG = 0;
          for (; VG < GG.length;) ZG = GG[VG++], wG = VG < GG.length ? GG[VG++] : Number.NaN, SG = VG < GG.length ? GG[VG++] : Number.NaN, LG = ZG >> 2, yG = (3 & ZG) << 4 | wG >> 4, kG = (15 & wG) << 2 | SG >> 6, UG = 63 & SG, isNaN(wG) ? kG = UG = 64 : isNaN(SG) && (UG = 64), YG += bG.charAt(LG) + bG.charAt(yG) + bG.charAt(kG) + bG.charAt(UG);
          return YG
        }(bG)
      },
      SG = GG => atob(GG),
      LG = GG => "function" === typeof Uint8Array.fromBase64 ? Uint8Array.fromBase64(GG).buffer : function(GG) {
        const bG = SG(GG),
          ZG = bG.length,
          wG = new Uint8Array(new ArrayBuffer(ZG));
        for (let SG = 0; SG < ZG; SG++) wG[SG] = bG.charCodeAt(SG);
        return wG.buffer
      }(GG)
  },
  40271: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => SG,
      c: () => yG
    });
    let wG = [];
    class SG {
      static SetImmediate(GG) {
        0 === wG.length && setTimeout((() => {
          const GG = wG;
          wG = [];
          for (const bG of GG) bG()
        }), 1), wG.push(GG)
      }
    }

    function LG(GG, bG, ZG) {
      try {
        if (GG()) return bG(), !0
      } catch (wG) {
        return ZG?.(wG), !0
      }
      return !1
    }
    const yG = function(GG, bG, ZG) {
      let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
        SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
        yG = arguments.length > 6 ? arguments[6] : void 0;
      if ((!(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]) && LG(GG, bG, ZG)) return null;
      const kG = setInterval((() => {
        LG(GG, bG, ZG) ? clearInterval(kG) : (SG -= wG, SG < 0 && (clearInterval(kG), ZG?.(new Error("Operation timed out after maximum retries. " + (yG || "")), !0)))
      }), wG);
      return () => clearInterval(kG)
    }
  },
  40432: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => wG
    });
    class wG {
      constructor() {
        this._xhr = "undefined" !== typeof _native && _native.XMLHttpRequest ? new _native.XMLHttpRequest : new XMLHttpRequest, this._requestURL = ""
      }
      static get IsCustomRequestAvailable() {
        return Object.keys(wG.CustomRequestHeaders).length > 0 || wG.CustomRequestModifiers.length > 0
      }
      static _CleanUrl(GG) {
        return GG = (GG = GG.replace("file:http:", "http:")).replace("file:https:", "https:")
      }
      static _ShouldSkipRequestModifications(GG) {
        return wG.SkipRequestModificationForBabylonCDN && (GG.includes("preview.babylonjs.com") || GG.includes("cdn.babylonjs.com"))
      }
      static _CollectCustomizations(GG) {
        const bG = {
          ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        };
        if (wG._ShouldSkipRequestModifications(GG)) return {
          url: GG,
          headers: bG
        };
        for (const SG in wG.CustomRequestHeaders) {
          const GG = wG.CustomRequestHeaders[SG];
          GG && (bG[SG] = GG)
        }
        const ZG = {
          setRequestHeader: (GG, ZG) => {
            bG[GG] = ZG
          }
        };
        for (const SG of wG.CustomRequestModifiers) {
          if (wG._ShouldSkipRequestModifications(GG)) break;
          const bG = SG(ZG, GG);
          "string" === typeof bG && (GG = bG)
        }
        return {
          url: GG,
          headers: bG
        }
      }
      static async FetchAsync(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const ZG = bG.method ?? "GET";
        if ("undefined" !== typeof fetch) {
          const {
            url: SG,
            headers: LG
          } = wG._CollectCustomizations(wG._CleanUrl(GG), bG.headers ?? {});
          return await fetch(SG, {
            method: ZG,
            headers: LG,
            body: bG.body ?? void 0
          })
        }
        return await new Promise(((SG, LG) => {
          const yG = new wG;
          yG.responseType = "arraybuffer", yG.addEventListener("readystatechange", (() => {
            if (4 === yG.readyState)
              if (yG.status >= 200 && yG.status < 300) {
                const GG = "undefined" !== typeof Headers ? new Headers : void 0,
                  bG = yG.getResponseHeader("Content-Type");
                bG && GG && GG.set("Content-Type", bG), "undefined" !== typeof Response ? SG(new Response(yG.response, {
                  status: yG.status,
                  statusText: yG.statusText,
                  headers: GG
                })) : SG({
                  ok: !0,
                  status: yG.status,
                  statusText: yG.statusText,
                  headers: {
                    get: GG => yG.getResponseHeader(GG)
                  },
                  arrayBuffer: async () => await Promise.resolve(yG.response)
                })
              } else LG(new Error(`HTTP ${yG.status} loading '${yG.requestURL}': ${yG.statusText}`))
          })), yG.open(ZG, GG, bG.headers), yG.send(bG.body ?? null)
        }))
      }
      get requestURL() {
        return this._requestURL
      }
      get onprogress() {
        return this._xhr.onprogress
      }
      set onprogress(GG) {
        this._xhr.onprogress = GG
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
      set responseType(GG) {
        this._xhr.responseType = GG
      }
      get timeout() {
        return this._xhr.timeout
      }
      set timeout(GG) {
        this._xhr.timeout = GG
      }
      addEventListener(GG, bG, ZG) {
        this._xhr.addEventListener(GG, bG, ZG)
      }
      removeEventListener(GG, bG, ZG) {
        this._xhr.removeEventListener(GG, bG, ZG)
      }
      abort() {
        this._xhr.abort()
      }
      send(GG) {
        this._xhr.send(GG)
      }
      open(GG, bG, ZG) {
        const {
          url: SG,
          headers: LG
        } = wG._CollectCustomizations(bG, ZG);
        this._requestURL = wG._CleanUrl(SG), this._xhr.open(GG, this._requestURL, !0);
        for (const wG in LG) this._xhr.setRequestHeader(wG, LG[wG])
      }
      setRequestHeader(GG, bG) {
        this._xhr.setRequestHeader(GG, bG)
      }
      getResponseHeader(GG) {
        return this._xhr.getResponseHeader(GG)
      }
    }
    wG.CustomRequestHeaders = {}, wG.CustomRequestModifiers = new Array, wG.SkipRequestModificationForBabylonCDN = !0
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);