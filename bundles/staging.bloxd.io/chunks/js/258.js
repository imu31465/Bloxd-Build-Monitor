export const id = 258;
export const ids = [258];
export const modules = {
  40129: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => zB,
      i: () => hB,
      j: () => kB,
      l: () => FB,
      p: () => cB,
      q: () => vB,
      s: () => nB
    });
    var TB = ZB(38718),
      JB = ZB(40134);

    function oB(BB, IB, ZB, TB) {
      switch (IB) {
        case 5120: {
          let IB = BB.getInt8(ZB);
          return TB && (IB = Math.max(IB / 127, -1)), IB
        }
        case 5121: {
          let IB = BB.getUint8(ZB);
          return TB && (IB /= 255), IB
        }
        case 5122: {
          let IB = BB.getInt16(ZB, !0);
          return TB && (IB = Math.max(IB / 32767, -1)), IB
        }
        case 5123: {
          let IB = BB.getUint16(ZB, !0);
          return TB && (IB /= 65535), IB
        }
        case 5131:
          return (0, JB.c)(BB.getUint16(ZB, !0));
        case 5124:
          return BB.getInt32(ZB, !0);
        case 5125:
          return BB.getUint32(ZB, !0);
        case 5126:
          return BB.getFloat32(ZB, !0);
        default:
          throw new Error(`Invalid component type ${IB}`)
      }
    }

    function GB(BB, IB, ZB, TB, oB) {
      switch (IB) {
        case 5120:
          TB && (oB = Math.round(127 * oB)), BB.setInt8(ZB, oB);
          break;
        case 5121:
          TB && (oB = Math.round(255 * oB)), BB.setUint8(ZB, oB);
          break;
        case 5122:
          TB && (oB = Math.round(32767 * oB)), BB.setInt16(ZB, oB, !0);
          break;
        case 5123:
          TB && (oB = Math.round(65535 * oB)), BB.setUint16(ZB, oB, !0);
          break;
        case 5131:
          BB.setUint16(ZB, (0, JB.h)(oB), !0);
          break;
        case 5124:
          BB.setInt32(ZB, oB, !0);
          break;
        case 5125:
          BB.setUint32(ZB, oB, !0);
          break;
        case 5126:
          BB.setFloat32(ZB, oB, !0);
          break;
        default:
          throw new Error(`Invalid component type ${IB}`)
      }
    }

    function vB(BB) {
      switch (BB) {
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
          throw new Error(`Invalid type '${BB}'`)
      }
    }

    function kB(BB, IB, ZB, TB, JB, kB, cB, nB) {
      const hB = new Array(TB),
        zB = new Array(TB);
      if (BB instanceof Array) {
        let JB = IB / 4;
        const oB = ZB / 4;
        for (let IB = 0; IB < kB; IB += TB) {
          for (let IB = 0; IB < TB; IB++) hB[IB] = zB[IB] = BB[JB + IB];
          nB(zB, IB);
          for (let IB = 0; IB < TB; IB++) hB[IB] !== zB[IB] && (BB[JB + IB] = zB[IB]);
          JB += oB
        }
      } else {
        const FB = ArrayBuffer.isView(BB) ? new DataView(BB.buffer, BB.byteOffset, BB.byteLength) : new DataView(BB),
          NB = vB(JB);
        for (let BB = 0; BB < kB; BB += TB) {
          for (let BB = 0, ZB = IB; BB < TB; BB++, ZB += NB) hB[BB] = zB[BB] = oB(FB, JB, ZB, cB);
          nB(zB, BB);
          for (let BB = 0, ZB = IB; BB < TB; BB++, ZB += NB) hB[BB] !== zB[BB] && GB(FB, JB, ZB, cB, zB[BB]);
          IB += ZB
        }
      }
    }

    function cB(BB, IB, ZB, JB, oB, GB, cB, nB) {
      const hB = IB * vB(ZB),
        zB = cB * IB;
      if (5126 !== ZB || oB !== hB) {
        const TB = new Float32Array(zB);
        return kB(BB, JB, oB, IB, ZB, zB, GB, ((BB, ZB) => {
          for (let JB = 0; JB < IB; JB++) TB[ZB + JB] = BB[JB]
        })), TB
      }
      if (!(BB instanceof Array || BB instanceof Float32Array) || 0 !== JB || BB.length !== zB) {
        if (BB instanceof Array) {
          const IB = JB / 4;
          return BB.slice(IB, IB + zB)
        }
        if (ArrayBuffer.isView(BB)) {
          const IB = BB.byteOffset + JB;
          return 0 !== (3 & IB) && (TB.d.Warn("Float array must be aligned to 4-bytes border"), nB = !0), nB ? new Float32Array(BB.buffer.slice(IB, IB + zB * Float32Array.BYTES_PER_ELEMENT)) : new Float32Array(BB.buffer, IB, zB)
        }
        return new Float32Array(BB, JB, zB)
      }
      return nB ? BB.slice() : BB
    }

    function nB(BB, IB, ZB, JB, oB, GB, cB) {
      const nB = vB(ZB),
        hB = function(BB) {
          switch (BB) {
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
              throw new Error(`Invalid component type '${BB}'`)
          }
        }(ZB),
        zB = GB * IB;
      if (Array.isArray(BB)) {
        if (0 !== (3 & JB) || 0 !== (3 & oB)) throw new Error("byteOffset and byteStride must be a multiple of 4 for number[] data.");
        const TB = JB / 4,
          vB = oB / 4;
        if (TB + (GB - 1) * vB + IB > BB.length) throw new Error("Last accessed index is out of bounds.");
        if (vB < IB) throw new Error("Data stride cannot be smaller than the component size.");
        if (vB !== IB) {
          const TB = new hB(zB);
          return kB(BB, JB, oB, IB, ZB, zB, !1, ((BB, ZB) => {
            for (let JB = 0; JB < IB; JB++) TB[ZB + JB] = BB[JB]
          })), TB
        }
        return new hB(BB.slice(TB, TB + zB))
      }
      let FB, NB = JB;
      ArrayBuffer.isView(BB) ? (FB = BB.buffer, NB += BB.byteOffset) : FB = BB;
      if (NB + (GB - 1) * oB + IB * nB > FB.byteLength) throw new Error("Last accessed byte is out of bounds.");
      const gB = IB * nB;
      if (oB < gB) throw new Error("Byte stride cannot be smaller than the component's byte size.");
      if (oB !== gB) {
        const BB = new hB(zB),
          ZB = new Uint8Array(FB, NB),
          TB = new Uint8Array(BB.buffer),
          JB = IB * nB;
        for (let IB = 0, vB = 0, kB = 0; IB < GB; IB++, vB += oB, kB += JB) TB.set(ZB.subarray(vB, vB + JB), kB);
        return BB
      }
      return 1 !== nB && 0 !== (NB & nB - 1) && (TB.d.Warn("Array must be aligned to border of element size. Data will be copied."), cB = !0), cB ? new hB(FB.slice(NB, NB + zB * nB)) : new hB(FB, NB, zB)
    }

    function hB(BB, IB, ZB, JB, oB, GB, cB, nB) {
      const hB = IB * vB(ZB),
        zB = cB * IB;
      if (nB.length !== zB) throw new Error("Output length is not valid");
      if (5126 === ZB && oB === hB)
        if (BB instanceof Array) {
          const IB = JB / 4;
          nB.set(BB, IB)
        } else if (ArrayBuffer.isView(BB)) {
        const IB = BB.byteOffset + JB;
        if (0 !== (3 & IB)) return TB.d.Warn("Float array must be aligned to 4-bytes border"), void nB.set(new Float32Array(BB.buffer.slice(IB, IB + zB * Float32Array.BYTES_PER_ELEMENT)));
        const ZB = new Float32Array(BB.buffer, IB, zB);
        nB.set(ZB)
      } else {
        const IB = new Float32Array(BB, JB, zB);
        nB.set(IB)
      } else kB(BB, JB, oB, IB, ZB, zB, GB, ((BB, ZB) => {
        for (let TB = 0; TB < IB; TB++) nB[ZB + TB] = BB[TB]
      }))
    }

    function zB(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      if (Array.isArray(BB)) {
        for (let JB = 0; JB < IB; JB++)
          if (BB[ZB + JB] - TB > 65535) return !0;
        return !1
      }
      return 4 === BB.BYTES_PER_ELEMENT
    }

    function FB(BB) {
      const IB = BB.buffer;
      if (IB instanceof ArrayBuffer) return BB;
      const ZB = new ArrayBuffer(BB.byteLength);
      return new Uint8Array(ZB).set(new Uint8Array(IB, BB.byteOffset, BB.byteLength)), ZB
    }
  },
  39939: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => wB,
      i: () => QB,
      l: () => sB,
      j: () => MB,
      n: () => jB
    });
    class TB {
      constructor() {
        this.children = []
      }
      isValid(BB) {
        return !0
      }
      process(BB, IB, ZB) {
        let TB = "";
        if (this.line) {
          let ZB = this.line;
          const JB = IB.processor;
          if (JB) {
            JB.lineProcessor && (ZB = JB.lineProcessor(ZB, IB.isFragment, IB.processingContext));
            const TB = IB.processor?.attributeKeywordName ?? "attribute",
              oB = IB.isFragment && IB.processor?.varyingFragmentKeywordName ? IB.processor?.varyingFragmentKeywordName : !IB.isFragment && IB.processor?.varyingVertexKeywordName ? IB.processor?.varyingVertexKeywordName : "varying";
            if (!IB.isFragment && JB.attributeProcessor && this.line.startsWith(TB)) ZB = JB.attributeProcessor(this.line, BB, IB.processingContext);
            else if (JB.varyingProcessor && (JB.varyingCheck?.(this.line, IB.isFragment) || !JB.varyingCheck && this.line.startsWith(oB))) ZB = JB.varyingProcessor(this.line, IB.isFragment, BB, IB.processingContext);
            else if (JB.uniformProcessor && JB.uniformRegexp && JB.uniformRegexp.test(this.line)) IB.lookForClosingBracketForUniformBuffer || (ZB = JB.uniformProcessor(this.line, IB.isFragment, BB, IB.processingContext));
            else if (JB.uniformBufferProcessor && JB.uniformBufferRegexp && JB.uniformBufferRegexp.test(this.line)) IB.lookForClosingBracketForUniformBuffer || (ZB = JB.uniformBufferProcessor(this.line, IB.isFragment, IB.processingContext), IB.lookForClosingBracketForUniformBuffer = !0);
            else if (JB.textureProcessor && JB.textureRegexp && JB.textureRegexp.test(this.line)) ZB = JB.textureProcessor(this.line, IB.isFragment, BB, IB.processingContext);
            else if ((JB.uniformProcessor || JB.uniformBufferProcessor) && this.line.startsWith("uniform") && !IB.lookForClosingBracketForUniformBuffer) {
              /uniform\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s+(\S+)\s*;/.test(this.line) ? JB.uniformProcessor && (ZB = JB.uniformProcessor(this.line, IB.isFragment, BB, IB.processingContext)) : JB.uniformBufferProcessor && (ZB = JB.uniformBufferProcessor(this.line, IB.isFragment, IB.processingContext), IB.lookForClosingBracketForUniformBuffer = !0)
            }
            IB.lookForClosingBracketForUniformBuffer && -1 !== this.line.indexOf("}") && (IB.lookForClosingBracketForUniformBuffer = !1, JB.endOfUniformBufferProcessor && (ZB = JB.endOfUniformBufferProcessor(this.line, IB.isFragment, IB.processingContext)))
          }
          TB += ZB + "\n"
        }
        for (const JB of this.children) TB += JB.process(BB, IB, ZB);
        return this.additionalDefineKey && (BB[this.additionalDefineKey] = this.additionalDefineValue || "true", ZB[this.additionalDefineKey] = BB[this.additionalDefineKey]), TB
      }
    }
    class JB {
      constructor() {
        this._lines = []
      }
      get currentLine() {
        return this._lines[this.lineIndex]
      }
      get canRead() {
        return this.lineIndex < this._lines.length - 1
      }
      set lines(BB) {
        this._lines.length = 0;
        for (const IB of BB) {
          if (!IB || "\r" === IB) continue;
          if ("#" === IB[0]) {
            this._lines.push(IB);
            continue
          }
          const BB = IB.trim();
          if (!BB) continue;
          if (BB.startsWith("//")) {
            this._lines.push(IB);
            continue
          }
          const ZB = BB.indexOf(";");
          if (-1 === ZB) this._lines.push(BB);
          else if (ZB === BB.length - 1) BB.length > 1 && this._lines.push(BB);
          else {
            const BB = IB.split(";");
            for (let IB = 0; IB < BB.length; IB++) {
              let ZB = BB[IB];
              ZB && (ZB = ZB.trim(), ZB && this._lines.push(ZB + (IB !== BB.length - 1 ? ";" : "")))
            }
          }
        }
      }
    }
    class oB extends TB {
      process(BB, IB, ZB) {
        for (let TB = 0; TB < this.children.length; TB++) {
          const JB = this.children[TB];
          if (JB.isValid(BB)) return JB.process(BB, IB, ZB)
        }
        return ""
      }
    }
    class GB extends TB {
      isValid(BB) {
        return this.testExpression.isTrue(BB)
      }
    }
    class vB {
      isTrue(BB) {
        return !0
      }
      static postfixToInfix(BB) {
        const IB = [];
        for (const ZB of BB)
          if (void 0 === vB._OperatorPriority[ZB]) IB.push(ZB);
          else {
            const BB = IB[IB.length - 1],
              TB = IB[IB.length - 2];
            IB.length -= 2, IB.push(`(${TB}${ZB}${BB})`)
          } return IB[IB.length - 1]
      }
      static infixToPostfix(BB) {
        const IB = vB._InfixToPostfixCache.get(BB);
        if (IB) return IB.accessTime = Date.now(), IB.result;
        if (!BB.includes("&&") && !BB.includes("||") && !BB.includes(")") && !BB.includes("(")) return [BB];
        const ZB = [];
        let TB = -1;
        const JB = () => {
            nB = nB.trim(), "" !== nB && (ZB.push(nB), nB = "")
          },
          oB = BB => {
            TB < vB._Stack.length - 1 && (vB._Stack[++TB] = BB)
          },
          GB = () => vB._Stack[TB],
          kB = () => -1 === TB ? "!!INVALID EXPRESSION!!" : vB._Stack[TB--];
        let cB = 0,
          nB = "";
        for (; cB < BB.length;) {
          const IB = BB.charAt(cB),
            hB = cB < BB.length - 1 ? BB.substring(cB, 2 + cB) : "";
          if ("(" === IB) nB = "", oB(IB);
          else if (")" === IB) {
            for (JB(); - 1 !== TB && "(" !== GB();) ZB.push(kB());
            kB()
          } else if (vB._OperatorPriority[hB] > 1) {
            for (JB(); - 1 !== TB && vB._OperatorPriority[GB()] >= vB._OperatorPriority[hB];) ZB.push(kB());
            oB(hB), cB++
          } else nB += IB;
          cB++
        }
        for (JB(); - 1 !== TB;) "(" === GB() ? kB() : ZB.push(kB());
        return vB._InfixToPostfixCache.size >= vB.InfixToPostfixCacheLimitSize && vB.ClearCache(), vB._InfixToPostfixCache.set(BB, {
          result: ZB,
          accessTime: Date.now()
        }), ZB
      }
      static ClearCache() {
        const BB = Array.from(vB._InfixToPostfixCache.entries()).sort(((BB, IB) => BB[1].accessTime - IB[1].accessTime));
        for (let IB = 0; IB < vB.InfixToPostfixCacheCleanupSize; IB++) vB._InfixToPostfixCache.delete(BB[IB][0])
      }
    }
    vB.InfixToPostfixCacheLimitSize = 5e4, vB.InfixToPostfixCacheCleanupSize = 25e3, vB._InfixToPostfixCache = new Map, vB._OperatorPriority = {
      ")": 0,
      "(": 1,
      "||": 2,
      "&&": 3
    }, vB._Stack = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    class kB extends vB {
      constructor(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super(), this.define = BB, this.not = IB
      }
      isTrue(BB) {
        let IB = void 0 !== BB[this.define];
        return this.not && (IB = !IB), IB
      }
    }
    class cB extends vB {
      isTrue(BB) {
        return this.leftOperand.isTrue(BB) || this.rightOperand.isTrue(BB)
      }
    }
    class nB extends vB {
      isTrue(BB) {
        return this.leftOperand.isTrue(BB) && this.rightOperand.isTrue(BB)
      }
    }
    class hB extends vB {
      constructor(BB, IB, ZB) {
        super(), this.define = BB, this.operand = IB, this.testValue = ZB
      }
      toString() {
        return `${this.define} ${this.operand} ${this.testValue}`
      }
      isTrue(BB) {
        let IB = !1;
        const ZB = parseInt(void 0 != BB[this.define] ? BB[this.define] : this.define),
          TB = parseInt(void 0 != BB[this.testValue] ? BB[this.testValue] : this.testValue);
        if (isNaN(ZB) || isNaN(TB)) return !1;
        switch (this.operand) {
          case ">":
            IB = ZB > TB;
            break;
          case "<":
            IB = ZB < TB;
            break;
          case "<=":
            IB = ZB <= TB;
            break;
          case ">=":
            IB = ZB >= TB;
            break;
          case "==":
            IB = ZB === TB;
            break;
          case "!=":
            IB = ZB !== TB
        }
        return IB
      }
    }
    var zB = ZB(39931),
      FB = ZB(39926);
    const NB = /defined\s*?\((.+?)\)/g,
      gB = /defined\s*?\[(.+?)\]/g,
      qB = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g,
      yB = /__decl__/,
      UB = /light\{X\}.(\w*)/g,
      WB = /\{X\}/g,
      dB = [],
      CB = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;

    function QB(BB) {
      BB.processor && BB.processor.initializeShaders && BB.processor.initializeShaders(BB.processingContext)
    }

    function sB(BB, IB, ZB, TB) {
      IB.processor?.preProcessShaderCode && (BB = IB.processor.preProcessShaderCode(BB, IB.isFragment)), MB(BB, IB, (BB => {
        IB.processCodeAfterIncludes && (BB = IB.processCodeAfterIncludes(IB.isFragment ? "fragment" : "vertex", BB, IB.defines));
        const JB = function(BB, IB, ZB) {
          let TB = function(BB, IB) {
            if (IB.processor?.noPrecision) return BB;
            const ZB = IB.shouldUseHighPrecisionShader; - 1 === BB.indexOf("precision highp float") ? BB = ZB ? "precision highp float;\n" + BB : "precision mediump float;\n" + BB : ZB || (BB = BB.replace("precision highp float", "precision mediump float"));
            return BB
          }(BB, IB);
          if (!IB.processor) return TB;
          if (0 === IB.processor.shaderLanguage && -1 !== TB.indexOf("#version 3") && (TB = TB.replace("#version 300 es", ""), !IB.processor.parseGLES3)) return TB;
          const JB = IB.defines,
            oB = HB(IB, ZB);
          IB.processor.preProcessor && (TB = IB.processor.preProcessor(TB, JB, oB, IB.isFragment, IB.processingContext));
          const GB = {};
          TB = aB(TB, oB, IB, GB), IB.processor.postProcessor && (TB = IB.processor.postProcessor(TB, JB, IB.isFragment, IB.processingContext, ZB ? {
            drawBuffersExtensionDisabled: !ZB.getCaps().drawBuffersExtension
          } : {}, oB, GB));
          ZB?._features.needShaderCodeInlining && (TB = ZB.inlineShaderCode(TB));
          return TB
        }(BB, IB, TB);
        ZB(JB, BB)
      }))
    }

    function wB(BB, IB, ZB) {
      return ZB.processor && ZB.processor.finalizeShaders ? ZB.processor.finalizeShaders(BB, IB, ZB.processingContext) : {
        vertexCode: BB,
        fragmentCode: IB
      }
    }

    function OB(BB) {
      const IB = /defined\((.+)\)/.exec(BB);
      if (IB && IB.length) return new kB(IB[1].trim(), "!" === BB[0]);
      const ZB = ["==", "!=", ">=", "<=", "<", ">"];
      let TB = "",
        JB = 0;
      for (TB of ZB)
        if (JB = BB.indexOf(TB), JB > -1) break;
      if (-1 === JB) return new kB(BB);
      const oB = BB.substring(0, JB).trim(),
        GB = BB.substring(JB + TB.length).trim();
      return new hB(oB, TB, GB)
    }

    function YB(BB, IB) {
      const ZB = new GB,
        TB = BB.substring(0, IB);
      let JB = BB.substring(IB);
      return JB = JB.substring(0, (JB.indexOf("//") + 1 || JB.length + 1) - 1).trim(), ZB.testExpression = "#ifdef" === TB ? new kB(JB) : "#ifndef" === TB ? new kB(JB, !0) : function(BB) {
        BB = BB.replace(NB, "defined[$1]");
        const IB = vB.infixToPostfix(BB),
          ZB = [];
        for (const JB of IB)
          if ("||" !== JB && "&&" !== JB) ZB.push(JB);
          else if (ZB.length >= 2) {
          let BB = ZB[ZB.length - 1],
            IB = ZB[ZB.length - 2];
          ZB.length -= 2;
          const TB = "&&" == JB ? new nB : new cB;
          "string" === typeof BB && (BB = BB.replace(gB, "defined($1)")), "string" === typeof IB && (IB = IB.replace(gB, "defined($1)")), TB.leftOperand = "string" === typeof IB ? OB(IB) : IB, TB.rightOperand = "string" === typeof BB ? OB(BB) : BB, ZB.push(TB)
        }
        let TB = ZB[ZB.length - 1];
        return "string" === typeof TB && (TB = TB.replace(gB, "defined($1)")), "string" === typeof TB ? OB(TB) : TB
      }(JB), ZB
    }

    function iB(BB, IB, ZB, JB) {
      let oB;
      for (; pB(BB, ZB, JB);) {
        oB = BB.currentLine;
        const GB = oB.substring(0, 5).toLowerCase();
        if ("#else" === GB) {
          const ZB = new TB;
          return IB.children.push(ZB), void pB(BB, ZB, JB)
        }
        if ("#elif" === GB) {
          const BB = YB(oB, 5);
          IB.children.push(BB), ZB = BB
        }
      }
    }

    function pB(BB, IB, ZB) {
      for (; BB.canRead;) {
        BB.lineIndex++;
        const JB = BB.currentLine;
        if (JB.indexOf("#") >= 0) {
          const TB = CB.exec(JB);
          if (TB && TB.length) {
            switch (TB[0]) {
              case "#ifdef": {
                const TB = new oB;
                IB.children.push(TB);
                const GB = YB(JB, 6);
                TB.children.push(GB), iB(BB, TB, GB, ZB);
                break
              }
              case "#else":
              case "#elif":
                return !0;
              case "#endif":
                return !1;
              case "#ifndef": {
                const TB = new oB;
                IB.children.push(TB);
                const GB = YB(JB, 7);
                TB.children.push(GB), iB(BB, TB, GB, ZB);
                break
              }
              case "#if": {
                const TB = new oB,
                  GB = YB(JB, 3);
                IB.children.push(TB), TB.children.push(GB), iB(BB, TB, GB, ZB);
                break
              }
            }
            continue
          }
        }
        const GB = new TB;
        if (GB.line = JB, IB.children.push(GB), "#" === JB[0] && "d" === JB[1]) {
          const BB = JB.replace(";", "").split(" ");
          GB.additionalDefineKey = BB[1], 3 === BB.length && (GB.additionalDefineValue = BB[2])
        }
      }
      return !1
    }

    function aB(BB, IB, ZB, oB) {
      const GB = new TB,
        vB = new JB;
      return vB.lineIndex = -1, vB.lines = BB.split("\n"), pB(vB, GB, oB), GB.process(IB, ZB, oB)
    }

    function HB(BB, IB) {
      const ZB = BB.defines,
        TB = {};
      for (const JB of ZB) {
        const BB = JB.replace("#define", "").replace(";", "").trim().split(" ");
        TB[BB[0]] = BB.length > 1 ? BB[1] : ""
      }
      return 0 === BB.processor?.shaderLanguage && (TB.GL_ES = "true"), TB.__VERSION__ = BB.version, TB[BB.platformName] = "true", (0, FB.j)(TB, IB?.isNDCHalfZRange, IB?.iTB, IB?.useExactSrgbConversions), TB
    }

    function MB(BB, IB, ZB) {
      let TB;
      for (dB.length = 0; null !== (TB = qB.exec(BB));) dB.push(TB);
      let JB = [BB],
        oB = !1;
      for (const vB of dB) {
        let BB = vB[1];
        if (-1 !== BB.indexOf("__decl__") && (BB = BB.replace(yB, ""), IB.supportsUniformBuffers && (BB = BB.replace("Vertex", "Ubo").replace("Fragment", "Ubo")), BB += "Declaration"), !IB.includesShadersStore[BB]) {
          const TB = IB.shadersRepository + "ShadersInclude/" + BB + ".fx";
          return void jB.loadFile(TB, (TB => {
            IB.includesShadersStore[BB] = TB, MB(JB.join(""), IB, ZB)
          }))
        } {
          let ZB = IB.includesShadersStore[BB];
          if (vB[2]) {
            const BB = vB[3].split(",");
            for (let IB = 0; IB < BB.length; IB += 2) {
              const TB = new RegExp(BB[IB], "g"),
                JB = BB[IB + 1];
              ZB = ZB.replace(TB, JB)
            }
          }
          if (vB[4]) {
            const BB = vB[5];
            if (-1 !== BB.indexOf("..")) {
              const TB = BB.split(".."),
                JB = parseInt(TB[0]);
              let oB = parseInt(TB[1]),
                GB = ZB.slice(0);
              ZB = "", isNaN(oB) && (oB = IB.indexParameters[TB[1]]);
              for (let BB = JB; BB < oB; BB++) IB.supportsUniformBuffers || (GB = GB.replace(UB, ((BB, IB) => IB + "{X}"))), ZB += GB.replace(WB, BB.toString()) + "\n"
            } else IB.supportsUniformBuffers || (ZB = ZB.replace(UB, ((BB, IB) => IB + "{X}"))), ZB = ZB.replace(WB, BB)
          }
          const TB = [];
          for (const BB of JB) {
            const IB = BB.split(vB[0]);
            for (let BB = 0; BB < IB.length - 1; BB++) TB.push(IB[BB]), TB.push(ZB);
            TB.push(IB[IB.length - 1])
          }
          JB = TB, oB = oB || ZB.indexOf("#include<") >= 0 || ZB.indexOf("#include <") >= 0
        }
      }
      dB.length = 0;
      const GB = JB.join("");
      oB ? MB(GB.toString(), IB, ZB) : ZB(GB)
    }
    const jB = {
      loadFile: (BB, IB, ZB, TB, JB, oB) => {
        throw (0, zB.m)("FileTools")
      }
    }
  },
  39926: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => JB,
      g: () => oB,
      j: () => vB,
      k: () => GB,
      n: () => kB
    });
    var TB = ZB(39931);
    const JB = {};

    function oB(BB, IB) {
      return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (IB ? IB + "\n" : "") + BB
    }

    function GB(BB, IB, ZB, oB, GB, vB, kB) {
      const cB = kB || JB.loadFile;
      if (!cB) throw (0, TB.m)("FileTools");
      return cB(BB, IB, ZB, oB, GB, vB)
    }

    function vB(BB, IB, ZB, TB) {
      if (BB) return IB ? BB.IS_NDC_HALF_ZRANGE = "" : delete BB.IS_NDC_HALF_ZRANGE, ZB ? BB.USE_REVERSE_DEPTHBUFFER = "" : delete BB.USE_REVERSE_DEPTHBUFFER, void(TB ? BB.USE_EXACT_SRGB_CONVERSIONS = "" : delete BB.USE_EXACT_SRGB_CONVERSIONS);
      {
        let BB = "";
        return IB && (BB += "#define IS_NDC_HALF_ZRANGE"), ZB && (BB && (BB += "\n"), BB += "#define USE_REVERSE_DEPTHBUFFER"), TB && (BB && (BB += "\n"), BB += "#define USE_EXACT_SRGB_CONVERSIONS"), BB
      }
    }

    function kB(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        TB = arguments.length > 3 ? arguments[3] : void 0;
      switch (BB) {
        case 3: {
          const BB = new Int8Array(IB);
          return TB && BB.set(new Int8Array(TB)), BB
        }
        case 0: {
          const BB = new Uint8Array(IB);
          return TB && BB.set(new Uint8Array(TB)), BB
        }
        case 4: {
          const BB = "number" !== typeof IB ? new Int16Array(IB) : new Int16Array(ZB ? IB / 2 : IB);
          return TB && BB.set(new Int16Array(TB)), BB
        }
        case 5:
        case 8:
        case 9:
        case 10:
        case 2: {
          const BB = "number" !== typeof IB ? new Uint16Array(IB) : new Uint16Array(ZB ? IB / 2 : IB);
          return TB && BB.set(new Uint16Array(TB)), BB
        }
        case 6: {
          const BB = "number" !== typeof IB ? new Int32Array(IB) : new Int32Array(ZB ? IB / 4 : IB);
          return TB && BB.set(new Int32Array(TB)), BB
        }
        case 7:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15: {
          const BB = "number" !== typeof IB ? new Uint32Array(IB) : new Uint32Array(ZB ? IB / 4 : IB);
          return TB && BB.set(new Uint32Array(TB)), BB
        }
        case 1: {
          const BB = "number" !== typeof IB ? new Float32Array(IB) : new Float32Array(ZB ? IB / 4 : IB);
          return TB && BB.set(new Float32Array(TB)), BB
        }
      }
      const JB = new Uint8Array(IB);
      return TB && JB.set(new Uint8Array(TB)), JB
    }
  },
  39931: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => cB,
      g: () => nB,
      j: () => kB,
      m: () => JB
    });
    const TB = {};

    function JB(BB) {
      if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !TB[BB]) return TB[BB] = !0, `${BB} needs to be imported before as it contains a side-effect required by your code.`
    }
    const oB = {};
    let GB = !1,
      vB = 0;

    function kB(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const TB = function() {
        if ((ZB || GB) && 0 === vB) {
          const ZB = `${BB}.${IB}`;
          oB[ZB] || (oB[ZB] = !0, console.warn(`[Babylon.js] ${ZB}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
        }
      };
      return TB.__isSideEffectStub = !0, TB
    }

    function cB(BB) {
      return !!BB && !BB.__isSideEffectStub
    }

    function nB(BB, IB) {
      return {
        get() {},
        set(BB) {
          Object.defineProperty(this, IB, {
            value: BB,
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
  39912: (BB, IB, ZB) => {
    function TB() {
      return "undefined" !== typeof window
    }

    function JB() {
      return "undefined" !== typeof navigator
    }

    function oB() {
      return "undefined" !== typeof document
    }

    function GB(BB) {
      let IB = "",
        ZB = BB.firstChild;
      for (; ZB;) 3 === ZB.nodeType && (IB += ZB.textContent), ZB = ZB.nextSibling;
      return IB
    }
    ZB.d(IB, {
      c: () => GB,
      g: () => oB,
      h: () => JB,
      l: () => TB
    })
  },
  40122: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => TB,
      f: () => JB,
      g: () => oB
    });
    class TB extends Error {}
    TB._setPrototypeOf = Object.setPrototypeOf || ((BB, IB) => (BB.__proto__ = IB, BB));
    const JB = {
      MeshInvalidPositionsError: 0,
      UnsupportedTextureError: 1e3,
      GLTFLoaderUnexpectedMagicError: 2e3,
      SceneLoaderError: 3e3,
      LoadFileError: 4e3,
      RequestFileError: 4001,
      ReadFileError: 4002
    };
    class oB extends TB {
      constructor(BB, IB, ZB) {
        super(BB), this.errorCode = IB, this.innerError = ZB, this.name = "RuntimeError", TB._setPrototypeOf(this, oB.prototype)
      }
    }
  },
  40110: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => HB,
      d: () => WB,
      f: () => YB,
      g: () => pB,
      j: () => wB,
      l: () => QB,
      m: () => sB,
      q: () => rB,
      r: () => OB,
      s: () => dB
    });
    var TB = ZB(40118),
      JB = ZB(39912),
      oB = ZB(37153);
    class GB {}
    GB.FilesToLoad = {};
    var vB = ZB(40122),
      kB = ZB(40124),
      cB = ZB(37147),
      nB = ZB(39926),
      hB = ZB(39939),
      zB = ZB(38718),
      FB = ZB(39943),
      NB = ZB(40129);
    const gB = new RegExp(/^data:([^,]+\/[^,]+)?;base64,/i);
    class qB extends vB.g {
      constructor(BB, IB) {
        super(BB, vB.f.LoadFileError), this.name = "LoadFileError", vB.c._setPrototypeOf(this, qB.prototype), IB instanceof TB.d ? this.request = IB : this.file = IB
      }
    }
    class yB extends vB.g {
      constructor(BB, IB) {
        super(BB, vB.f.RequestFileError), this.request = IB, this.name = "RequestFileError", vB.c._setPrototypeOf(this, yB.prototype)
      }
    }
    class UB extends vB.g {
      constructor(BB, IB) {
        super(BB, vB.f.ReadFileError), this.file = IB, this.name = "ReadFileError", vB.c._setPrototypeOf(this, UB.prototype)
      }
    }
    const WB = {
        DefaultRetryStrategy: class {
          static ExponentialBackoff() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
              IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
            return (ZB, TB, JB) => 0 !== TB.status || JB >= BB || -1 !== ZB.indexOf("file:") ? -1 : Math.pow(2, JB) * IB
          }
        }.ExponentialBackoff(),
        BaseUrl: "",
        CorsBehavior: "anonymous",
        PreprocessUrl: BB => BB,
        ScriptBaseUrl: "",
        ScriptPreprocessUrl: BB => BB,
        CleanUrl: BB => BB = BB.replace(/#/gm, "%23")
      },
      dB = (BB, IB) => {
        if ((!BB || 0 !== BB.indexOf("data:")) && WB.CorsBehavior)
          if ("string" === typeof WB.CorsBehavior || WB.CorsBehavior instanceof String) IB.crossOrigin = WB.CorsBehavior;
          else {
            const ZB = WB.CorsBehavior(BB);
            ZB && (IB.crossOrigin = ZB)
          }
      },
      CB = {
        getRequiredSize: null
      },
      QB = function(BB, IB, ZB, JB) {
        let oB, vB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
          nB = arguments.length > 5 ? arguments[5] : void 0,
          hB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : cB.e.LastCreatedEngine;
        if ("undefined" === typeof HTMLImageElement && !hB?._features.forceBitmapOverHTMLImageElement) return ZB("LoadImage is only supported in web or BabylonNative environments."), null;
        if (hB?._features.forceBitmapOverHTMLImageElement && "string" !== typeof BB && "undefined" !== typeof Blob) {
          let TB;
          if (BB instanceof Blob) TB = BB;
          else {
            const IB = BB instanceof ArrayBuffer ? BB : (0, NB.l)(BB);
            TB = new Blob([IB], {
              type: vB
            })
          }
          return hB.createImageBitmap(TB, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...nB
          }).then(IB).catch((IB => {
            ZB && ZB("Error while trying to load image: " + BB, IB)
          })), null
        }
        let zB = !1;
        if (BB instanceof ArrayBuffer || ArrayBuffer.isView(BB))
          if ("undefined" !== typeof Blob && "undefined" !== typeof URL) {
            let IB;
            IB = BB instanceof ArrayBuffer ? BB : (0, NB.l)(BB), oB = URL.createObjectURL(new Blob([IB], {
              type: vB
            })), zB = !0
          } else oB = `data:${vB};base64,` + (0, kB.h)(BB);
        else BB instanceof Blob ? (oB = URL.createObjectURL(BB), zB = !0) : (oB = WB.CleanUrl(BB), oB = WB.PreprocessUrl(oB));
        const FB = IB => {
          if (ZB) {
            const TB = oB || BB.toString();
            ZB(`Error while trying to load image: ${0===TB.indexOf("http")||TB.length<=128?TB:TB.slice(0,128)+"..."}`, IB)
          }
        };
        if (hB?._features.forceBitmapOverHTMLImageElement) return wB(oB, (TB => {
          hB.createImageBitmap(new Blob([TB], {
            type: vB
          }), {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...nB
          }).then((BB => {
            IB(BB), zB && URL.revokeObjectURL(oB)
          })).catch((IB => {
            ZB && ZB("Error while trying to load image: " + BB, IB)
          }))
        }), void 0, JB || void 0, !0, ((BB, IB) => {
          FB(IB)
        })), null;
        const gB = new Image;
        if (CB.getRequiredSize) {
          const IB = CB.getRequiredSize(BB);
          IB.width && (gB.width = IB.width), IB.height && (gB.height = IB.height)
        }
        dB(oB, gB);
        const qB = [],
          yB = () => {
            for (const BB of qB) BB.target.removeEventListener(BB.name, BB.handler);
            qB.length = 0
          };
        qB.push({
          target: gB,
          name: "load",
          handler: () => {
            yB(), IB(gB), zB && gB.src && URL.revokeObjectURL(gB.src)
          }
        }), qB.push({
          target: gB,
          name: "error",
          handler: BB => {
            yB(), FB(BB), zB && gB.src && URL.revokeObjectURL(gB.src)
          }
        }), qB.push({
          target: document,
          name: "securitypolicyviolation",
          handler: BB => {
            if (BB.blockedURI !== gB.src || "JN" === BB.disposition) return;
            yB();
            const IB = new Error(`CSP violation of policy ${BB.effectiveDirective} ${BB.blockedURI}. Current policy is ${BB.originalPolicy}`);
            cB.e.UseFallbackTexture = !1, FB(IB), zB && gB.src && URL.revokeObjectURL(gB.src), gB.src = ""
          }
        }), (() => {
          for (const BB of qB) BB.target.addEventListener(BB.name, BB.handler)
        })();
        const UB = "blob:" === oB.substring(0, 5),
          QB = "data:" === oB.substring(0, 5),
          sB = () => {
            UB || QB || !TB.d.IsCustomRequestAvailable ? gB.src = oB : wB(oB, ((BB, IB, ZB) => {
              const TB = new Blob([BB], {
                  type: !vB && ZB ? ZB : vB
                }),
                JB = URL.createObjectURL(TB);
              zB = !0, gB.src = JB
            }), void 0, JB || void 0, !0, ((BB, IB) => {
              FB(IB)
            }))
          },
          OB = () => {
            JB && JB.loadImage(oB, gB)
          };
        if (!UB && !QB && JB && JB.enableTexturesOffline) JB.open(OB, sB);
        else {
          if (-1 !== oB.indexOf("file:")) {
            const BB = decodeURIComponent(oB.substring(5).toLowerCase());
            if (GB.FilesToLoad[BB] && "undefined" !== typeof URL) {
              try {
                let IB;
                try {
                  IB = URL.createObjectURL(GB.FilesToLoad[BB])
                } catch (YB) {
                  IB = URL.createObjectURL(GB.FilesToLoad[BB])
                }
                gB.src = IB, zB = !0
              } catch (iB) {
                gB.src = ""
              }
              return gB
            }
          }
          sB()
        }
        return gB
      },
      sB = (BB, IB, ZB, TB, JB) => {
        const GB = new FileReader,
          vB = {
            onCompleteObservable: new oB.b,
            abort: () => GB.abort()
          };
        return GB.onloadend = () => vB.onCompleteObservable.notifyObservers(vB), JB && (GB.onerror = () => {
          JB(new UB(`Unable to read ${BB.name}`, BB))
        }), GB.onload = BB => {
          IB(BB.target.result)
        }, ZB && (GB.onprogress = ZB), TB ? GB.readAsArrayBuffer(BB) : GB.readAsText(BB), vB
      },
      wB = (BB, IB, ZB, TB, JB, kB, cB) => {
        if (BB.name) return sB(BB, IB, ZB, JB, kB ? BB => {
          kB(void 0, BB)
        } : void 0);
        const nB = BB;
        if (-1 !== nB.indexOf("file:")) {
          let BB = decodeURIComponent(nB.substring(5).toLowerCase());
          0 === BB.indexOf("./") && (BB = BB.substring(2));
          const TB = GB.FilesToLoad[BB];
          if (TB) return sB(TB, IB, ZB, JB, kB ? BB => kB(void 0, new qB(BB.message, BB.file)) : void 0)
        }
        const {
          match: hB,
          type: NB
        } = aB(nB);
        if (hB) {
          const BB = {
            onCompleteObservable: new oB.b,
            abort: () => () => {}
          };
          try {
            const BB = JB ? HB(nB) : MB(nB);
            IB(BB, void 0, NB)
          } catch (vB) {
            kB ? kB(void 0, vB) : zB.d.Error(vB.message || "Failed to parse the Data URL")
          }
          return FB.b.SetImmediate((() => {
            BB.onCompleteObservable.notifyObservers(BB)
          })), BB
        }
        return OB(nB, ((BB, ZB) => {
          IB(BB, ZB?.responseURL, ZB?.getResponseHeader("content-type"))
        }), ZB, TB, JB, kB ? BB => {
          kB(BB.request, new qB(BB.message, BB.request))
        } : void 0, cB)
      },
      OB = (BB, IB, ZB, GB, vB, kB, nB) => {
        null !== GB && (GB ?? (GB = cB.e.LastCreatedScene?.offlineProvider)), BB = WB.CleanUrl(BB), BB = WB.PreprocessUrl(BB);
        const hB = WB.BaseUrl + BB;
        let FB = !1;
        const NB = {
            onCompleteObservable: new oB.b,
            abort: () => FB = !0
          },
          gB = () => {
            let BB, oB = new TB.d,
              GB = null;
            const cB = () => {
              oB && (ZB && oB.removeEventListener("progress", ZB), BB && oB.removeEventListener("readystatechange", BB), oB.removeEventListener("loadend", gB))
            };
            let gB = () => {
              cB(), NB.onCompleteObservable.notifyObservers(NB), NB.onCompleteObservable.clear(), ZB = void 0, BB = null, gB = null, kB = void 0, nB = void 0, IB = void 0
            };
            NB.abort = () => {
              FB = !0, gB && gB(), oB && oB.readyState !== (XMLHttpRequest.DONE || 4) && oB.abort(), null !== GB && (clearTimeout(GB), GB = null), oB = null
            };
            const qB = BB => {
                const IB = BB.message || "Unknown error";
                kB && oB ? kB(new yB(IB, oB)) : zB.d.Error(IB)
              },
              UB = zB => {
                if (oB) {
                  if (oB.open("GET", hB), nB) try {
                    nB(oB)
                  } catch (NB) {
                    return void qB(NB)
                  }
                  vB && (oB.responseType = "arraybuffer"), ZB && oB.addEventListener("progress", ZB), gB && oB.addEventListener("loadend", gB), BB = () => {
                    if (!FB && oB && oB.readyState === (XMLHttpRequest.DONE || 4)) {
                      if (BB && oB.removeEventListener("readystatechange", BB), oB.status >= 200 && oB.status < 300 || 0 === oB.status && (!(0, JB.l)() || iB())) {
                        const BB = vB ? oB.response : oB.responseText;
                        if (null !== BB) {
                          try {
                            IB && IB(BB, oB)
                          } catch (NB) {
                            qB(NB)
                          }
                          return
                        }
                      }
                      const ZB = WB.DefaultRetryStrategy;
                      if (ZB) {
                        const BB = ZB(hB, oB, zB);
                        if (-1 !== BB) return cB(), oB = new TB.d, void(GB = setTimeout((() => UB(zB + 1)), BB))
                      }
                      const nB = new yB("Error status: " + oB.status + " " + oB.statusText + " - Unable to load " + hB, oB);
                      kB && kB(nB)
                    }
                  }, oB.addEventListener("readystatechange", BB), oB.send()
                }
              };
            UB(0)
          };
        if (GB && GB.enableSceneOffline && !BB.startsWith("blob:")) {
          const TB = BB => {
              BB && BB.status > 400 ? kB && kB(BB) : gB()
            },
            JB = () => {
              GB && GB.loadFile(WB.BaseUrl + BB, (BB => {
                !FB && IB && IB(BB), NB.onCompleteObservable.notifyObservers(NB)
              }), ZB ? BB => {
                !FB && ZB && ZB(BB)
              } : void 0, TB, vB)
            };
          GB.open(JB, TB)
        } else gB();
        return NB
      },
      YB = BB => {
        const {
          match: IB,
          type: ZB
        } = aB(BB);
        if (IB) return ZB || void 0;
        const TB = BB.lastIndexOf(".");
        switch (BB.substring(TB + 1).toLowerCase()) {
          case "glb":
            return "model/gltf-binary";
          case "bin":
            return "application/octet-stream";
          case "uH":
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
      iB = () => "undefined" !== typeof location && "file:" === location.protocol,
      pB = BB => gB.test(BB),
      aB = BB => {
        const IB = gB.exec(BB);
        if (null === IB || 0 === IB.length) return {
          match: !1,
          type: ""
        };
        return {
          match: !0,
          type: IB[0].replace("data:", "").replace(";base64,", "")
        }
      };

    function HB(BB) {
      return (0, kB.b)(BB.split(",")[1])
    }
    const MB = BB => (0, kB.d)(BB.split(",")[1]);
    let jB;
    const PB = (BB, IB, ZB, TB, JB, oB, GB, vB, kB, cB) => {
      jB = {
        DecodeBase64UrlToBinary: BB,
        DecodeBase64UrlToString: IB,
        DefaultRetryStrategy: ZB.DefaultRetryStrategy,
        BaseUrl: ZB.BaseUrl,
        CorsBehavior: ZB.CorsBehavior,
        PreprocessUrl: ZB.PreprocessUrl,
        IsBase64DataUrl: TB,
        IsFileURL: JB,
        LoadFile: oB,
        LoadImage: GB,
        ReadFile: vB,
        RequestFile: kB,
        SetCorsBehavior: cB
      }, Object.defineProperty(jB, "DefaultRetryStrategy", {
        get: function() {
          return ZB.DefaultRetryStrategy
        },
        set: function(BB) {
          ZB.DefaultRetryStrategy = BB
        }
      }), Object.defineProperty(jB, "BaseUrl", {
        get: function() {
          return ZB.BaseUrl
        },
        set: function(BB) {
          ZB.BaseUrl = BB
        }
      }), Object.defineProperty(jB, "PreprocessUrl", {
        get: function() {
          return ZB.PreprocessUrl
        },
        set: function(BB) {
          ZB.PreprocessUrl = BB
        }
      }), Object.defineProperty(jB, "CorsBehavior", {
        get: function() {
          return ZB.CorsBehavior
        },
        set: function(BB) {
          ZB.CorsBehavior = BB
        }
      })
    };
    let RB = !1;

    function rB() {
      RB || (RB = !0, PB(HB, MB, WB, pB, iB, wB, QB, sB, OB, dB), nB.c.loadFile = wB, nB.c.loadImage = QB, hB.n.loadFile = wB)
    }
  },
  40134: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => vB,
      e: () => oB,
      h: () => GB
    });
    let TB = null;

    function JB() {
      if (TB) return TB;
      const BB = new ArrayBuffer(4),
        IB = new Float32Array(BB),
        ZB = new Uint32Array(BB),
        JB = new Uint32Array(512),
        oB = new Uint32Array(512);
      for (let TB = 0; TB < 256; ++TB) {
        const BB = TB - 127;
        BB < -24 ? (JB[TB] = 0, JB[256 | TB] = 32768, oB[TB] = 24, oB[256 | TB] = 24) : BB < -14 ? (JB[TB] = 1024 >> -BB - 14, JB[256 | TB] = 1024 >> -BB - 14 | 32768, oB[TB] = -BB - 1, oB[256 | TB] = -BB - 1) : BB <= 15 ? (JB[TB] = BB + 15 << 10, JB[256 | TB] = BB + 15 << 10 | 32768, oB[TB] = 13, oB[256 | TB] = 13) : BB < 128 ? (JB[TB] = 31744, JB[256 | TB] = 64512, oB[TB] = 24, oB[256 | TB] = 24) : (JB[TB] = 31744, JB[256 | TB] = 64512, oB[TB] = 13, oB[256 | TB] = 13)
      }
      const GB = new Uint32Array(2048),
        vB = new Uint32Array(64),
        kB = new Uint32Array(64);
      for (let TB = 1; TB < 1024; ++TB) {
        let BB = TB << 13,
          IB = 0;
        for (; 0 === (8388608 & BB);) BB <<= 1, IB -= 8388608;
        BB &= -8388609, IB += 947912704, GB[TB] = BB | IB
      }
      for (let TB = 1024; TB < 2048; ++TB) GB[TB] = 939524096 + (TB - 1024 << 13);
      for (let TB = 1; TB < 31; ++TB) vB[TB] = TB << 23;
      vB[31] = 1199570944, vB[32] = 2147483648;
      for (let TB = 33; TB < 63; ++TB) vB[TB] = 2147483648 + (TB - 32 << 23);
      vB[63] = 3347054592;
      for (let TB = 1; TB < 64; ++TB) 32 !== TB && (kB[TB] = 1024);
      return TB = {
        floatView: IB,
        uint32View: ZB,
        baseTable: JB,
        shiftTable: oB,
        mantissaTable: GB,
        exponentTable: vB,
        offsetTable: kB
      }, TB
    }
    const oB = 65504;

    function GB(BB) {
      const IB = JB();
      IB.floatView[0] = BB;
      const ZB = IB.uint32View[0],
        TB = ZB >> 23 & 511;
      return IB.baseTable[TB] + ((8388607 & ZB) >> IB.shiftTable[TB])
    }

    function vB(BB) {
      const IB = JB();
      return IB.uint32View[0] = IB.mantissaTable[IB.offsetTable[BB >> 10] + (1023 & BB)] + IB.exponentTable[BB >> 10], IB.floatView[0]
    }
  },
  40124: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => oB,
      d: () => JB,
      h: () => TB
    });
    const TB = BB => {
        const IB = ArrayBuffer.isView(BB) ? new Uint8Array(BB.buffer, BB.byteOffset, BB.byteLength) : new Uint8Array(BB);
        return "function" === typeof IB.toBase64 ? IB.toBase64() : function(BB) {
          const IB = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          let ZB, TB, JB, oB, GB, vB, kB, cB = "",
            nB = 0;
          for (; nB < BB.length;) ZB = BB[nB++], TB = nB < BB.length ? BB[nB++] : Number.NaN, JB = nB < BB.length ? BB[nB++] : Number.NaN, oB = ZB >> 2, GB = (3 & ZB) << 4 | TB >> 4, vB = (15 & TB) << 2 | JB >> 6, kB = 63 & JB, isNaN(TB) ? vB = kB = 64 : isNaN(JB) && (kB = 64), cB += IB.charAt(oB) + IB.charAt(GB) + IB.charAt(vB) + IB.charAt(kB);
          return cB
        }(IB)
      },
      JB = BB => atob(BB),
      oB = BB => "function" === typeof Uint8Array.fromBase64 ? Uint8Array.fromBase64(BB).buffer : function(BB) {
        const IB = JB(BB),
          ZB = IB.length,
          TB = new Uint8Array(new ArrayBuffer(ZB));
        for (let JB = 0; JB < ZB; JB++) TB[JB] = IB.charCodeAt(JB);
        return TB.buffer
      }(BB)
  },
  39943: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => JB,
      f: () => GB
    });
    let TB = [];
    class JB {
      static SetImmediate(BB) {
        0 === TB.length && setTimeout((() => {
          const BB = TB;
          TB = [];
          for (const IB of BB) IB()
        }), 1), TB.push(BB)
      }
    }

    function oB(BB, IB, ZB) {
      try {
        if (BB()) return IB(), !0
      } catch (TB) {
        return ZB?.(TB), !0
      }
      return !1
    }
    const GB = function(BB, IB, ZB) {
      let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
        JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
        GB = arguments.length > 6 ? arguments[6] : void 0;
      if ((!(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]) && oB(BB, IB, ZB)) return null;
      const vB = setInterval((() => {
        oB(BB, IB, ZB) ? clearInterval(vB) : (JB -= TB, JB < 0 && (clearInterval(vB), ZB?.(new Error("Operation timed out after maximum retries. " + (GB || "")), !0)))
      }), TB);
      return () => clearInterval(vB)
    }
  },
  40118: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => TB
    });
    class TB {
      constructor() {
        this._xhr = "undefined" !== typeof _native && _native.XMLHttpRequest ? new _native.XMLHttpRequest : new XMLHttpRequest, this._requestURL = ""
      }
      static get IsCustomRequestAvailable() {
        return Object.keys(TB.CustomRequestHeaders).length > 0 || TB.CustomRequestModifiers.length > 0
      }
      static _CleanUrl(BB) {
        return BB = (BB = BB.replace("file:http:", "http:")).replace("file:https:", "https:")
      }
      static _ShouldSkipRequestModifications(BB) {
        return TB.SkipRequestModificationForBabylonCDN && (BB.includes("preview.babylonjs.com") || BB.includes("cdn.babylonjs.com"))
      }
      static _CollectCustomizations(BB) {
        const IB = {
          ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        };
        if (TB._ShouldSkipRequestModifications(BB)) return {
          url: BB,
          headers: IB
        };
        for (const JB in TB.CustomRequestHeaders) {
          const BB = TB.CustomRequestHeaders[JB];
          BB && (IB[JB] = BB)
        }
        const ZB = {
          setRequestHeader: (BB, ZB) => {
            IB[BB] = ZB
          }
        };
        for (const JB of TB.CustomRequestModifiers) {
          if (TB._ShouldSkipRequestModifications(BB)) break;
          const IB = JB(ZB, BB);
          "string" === typeof IB && (BB = IB)
        }
        return {
          url: BB,
          headers: IB
        }
      }
      static async FetchAsync(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const ZB = IB.method ?? "GET";
        if ("undefined" !== typeof fetch) {
          const {
            url: JB,
            headers: oB
          } = TB._CollectCustomizations(TB._CleanUrl(BB), IB.headers ?? {});
          return await fetch(JB, {
            method: ZB,
            headers: oB,
            body: IB.body ?? void 0
          })
        }
        return await new Promise(((JB, oB) => {
          const GB = new TB;
          GB.responseType = "arraybuffer", GB.addEventListener("readystatechange", (() => {
            if (4 === GB.readyState)
              if (GB.status >= 200 && GB.status < 300) {
                const BB = "undefined" !== typeof Headers ? new Headers : void 0,
                  IB = GB.getResponseHeader("Content-Type");
                IB && BB && BB.set("Content-Type", IB), "undefined" !== typeof Response ? JB(new Response(GB.response, {
                  status: GB.status,
                  statusText: GB.statusText,
                  headers: BB
                })) : JB({
                  ok: !0,
                  status: GB.status,
                  statusText: GB.statusText,
                  headers: {
                    get: BB => GB.getResponseHeader(BB)
                  },
                  arrayBuffer: async () => await Promise.resolve(GB.response)
                })
              } else oB(new Error(`HTTP ${GB.status} loading '${GB.requestURL}': ${GB.statusText}`))
          })), GB.open(ZB, BB, IB.headers), GB.send(IB.body ?? null)
        }))
      }
      get requestURL() {
        return this._requestURL
      }
      get onprogress() {
        return this._xhr.onprogress
      }
      set onprogress(BB) {
        this._xhr.onprogress = BB
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
      set responseType(BB) {
        this._xhr.responseType = BB
      }
      get timeout() {
        return this._xhr.timeout
      }
      set timeout(BB) {
        this._xhr.timeout = BB
      }
      addEventListener(BB, IB, ZB) {
        this._xhr.addEventListener(BB, IB, ZB)
      }
      removeEventListener(BB, IB, ZB) {
        this._xhr.removeEventListener(BB, IB, ZB)
      }
      abort() {
        this._xhr.abort()
      }
      send(BB) {
        this._xhr.send(BB)
      }
      open(BB, IB, ZB) {
        const {
          url: JB,
          headers: oB
        } = TB._CollectCustomizations(IB, ZB);
        this._requestURL = TB._CleanUrl(JB), this._xhr.open(BB, this._requestURL, !0);
        for (const TB in oB) this._xhr.setRequestHeader(TB, oB[TB])
      }
      setRequestHeader(BB, IB) {
        this._xhr.setRequestHeader(BB, IB)
      }
      getResponseHeader(BB) {
        return this._xhr.getResponseHeader(BB)
      }
    }
    TB.CustomRequestHeaders = {}, TB.CustomRequestModifiers = new Array, TB.SkipRequestModificationForBabylonCDN = !0
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);