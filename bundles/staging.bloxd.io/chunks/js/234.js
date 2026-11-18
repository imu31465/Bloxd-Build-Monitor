export const id = 234;
export const ids = [234];
export const modules = {
  38819: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => LB,
      d: () => kB,
      g: () => YB,
      j: () => OB,
      l: () => gB,
      p: () => JB,
      s: () => oB
    });
    var VB = dB(37651),
      yB = dB(38825);

    function pB(BB, TB, dB, VB) {
      switch (TB) {
        case 5120: {
          let TB = BB.getInt8(dB);
          return VB && (TB = Math.max(TB / 127, -1)), TB
        }
        case 5121: {
          let TB = BB.getUint8(dB);
          return VB && (TB /= 255), TB
        }
        case 5122: {
          let TB = BB.getInt16(dB, !0);
          return VB && (TB = Math.max(TB / 32767, -1)), TB
        }
        case 5123: {
          let TB = BB.getUint16(dB, !0);
          return VB && (TB /= 65535), TB
        }
        case 5131:
          return (0, yB.d)(BB.getUint16(dB, !0));
        case 5124:
          return BB.getInt32(dB, !0);
        case 5125:
          return BB.getUint32(dB, !0);
        case 5126:
          return BB.getFloat32(dB, !0);
        default:
          throw new Error(`Invalid component type ${TB}`)
      }
    }

    function lB(BB, TB, dB, VB, pB) {
      switch (TB) {
        case 5120:
          VB && (pB = Math.round(127 * pB)), BB.setInt8(dB, pB);
          break;
        case 5121:
          VB && (pB = Math.round(255 * pB)), BB.setUint8(dB, pB);
          break;
        case 5122:
          VB && (pB = Math.round(32767 * pB)), BB.setInt16(dB, pB, !0);
          break;
        case 5123:
          VB && (pB = Math.round(65535 * pB)), BB.setUint16(dB, pB, !0);
          break;
        case 5131:
          BB.setUint16(dB, (0, yB.i)(pB), !0);
          break;
        case 5124:
          BB.setInt32(dB, pB, !0);
          break;
        case 5125:
          BB.setUint32(dB, pB, !0);
          break;
        case 5126:
          BB.setFloat32(dB, pB, !0);
          break;
        default:
          throw new Error(`Invalid component type ${TB}`)
      }
    }

    function JB(BB) {
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

    function YB(BB, TB, dB, VB, yB, YB, gB, oB) {
      const kB = new Array(VB),
        LB = new Array(VB);
      if (BB instanceof Array) {
        let yB = TB / 4;
        const pB = dB / 4;
        for (let TB = 0; TB < YB; TB += VB) {
          for (let TB = 0; TB < VB; TB++) kB[TB] = LB[TB] = BB[yB + TB];
          oB(LB, TB);
          for (let TB = 0; TB < VB; TB++) kB[TB] !== LB[TB] && (BB[yB + TB] = LB[TB]);
          yB += pB
        }
      } else {
        const OB = ArrayBuffer.isView(BB) ? new DataView(BB.buffer, BB.byteOffset, BB.byteLength) : new DataView(BB),
          DB = JB(yB);
        for (let BB = 0; BB < YB; BB += VB) {
          for (let BB = 0, dB = TB; BB < VB; BB++, dB += DB) kB[BB] = LB[BB] = pB(OB, yB, dB, gB);
          oB(LB, BB);
          for (let BB = 0, dB = TB; BB < VB; BB++, dB += DB) kB[BB] !== LB[BB] && lB(OB, yB, dB, gB, LB[BB]);
          TB += dB
        }
      }
    }

    function gB(BB, TB, dB, yB, pB, lB, gB, oB) {
      const kB = TB * JB(dB),
        LB = gB * TB;
      if (5126 !== dB || pB !== kB) {
        const VB = new Float32Array(LB);
        return YB(BB, yB, pB, TB, dB, LB, lB, ((BB, dB) => {
          for (let yB = 0; yB < TB; yB++) VB[dB + yB] = BB[yB]
        })), VB
      }
      if (!(BB instanceof Array || BB instanceof Float32Array) || 0 !== yB || BB.length !== LB) {
        if (BB instanceof Array) {
          const TB = yB / 4;
          return BB.slice(TB, TB + LB)
        }
        if (ArrayBuffer.isView(BB)) {
          const TB = BB.byteOffset + yB;
          return 0 !== (3 & TB) && (VB.b.Warn("Float array must be aligned to 4-bytes border"), oB = !0), oB ? new Float32Array(BB.buffer.slice(TB, TB + LB * Float32Array.BYTES_PER_ELEMENT)) : new Float32Array(BB.buffer, TB, LB)
        }
        return new Float32Array(BB, yB, LB)
      }
      return oB ? BB.slice() : BB
    }

    function oB(BB, TB, dB, yB, pB, lB, gB) {
      const oB = JB(dB),
        kB = function(BB) {
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
        }(dB),
        LB = lB * TB;
      if (Array.isArray(BB)) {
        if (0 !== (3 & yB) || 0 !== (3 & pB)) throw new Error("byteOffset and byteStride must be a multiple of 4 for number[] data.");
        const VB = yB / 4,
          JB = pB / 4;
        if (VB + (lB - 1) * JB + TB > BB.length) throw new Error("Last accessed index is out of bounds.");
        if (JB < TB) throw new Error("Data stride cannot be smaller than the component size.");
        if (JB !== TB) {
          const VB = new kB(LB);
          return YB(BB, yB, pB, TB, dB, LB, !1, ((BB, dB) => {
            for (let yB = 0; yB < TB; yB++) VB[dB + yB] = BB[yB]
          })), VB
        }
        return new kB(BB.slice(VB, VB + LB))
      }
      let OB, DB = yB;
      ArrayBuffer.isView(BB) ? (OB = BB.buffer, DB += BB.byteOffset) : OB = BB;
      if (DB + (lB - 1) * pB + TB * oB > OB.byteLength) throw new Error("Last accessed byte is out of bounds.");
      const uB = TB * oB;
      if (pB < uB) throw new Error("Byte stride cannot be smaller than the component's byte size.");
      if (pB !== uB) {
        const BB = new kB(LB),
          dB = new Uint8Array(OB, DB),
          VB = new Uint8Array(BB.buffer),
          yB = TB * oB;
        for (let TB = 0, JB = 0, YB = 0; TB < lB; TB++, JB += pB, YB += yB) VB.set(dB.subarray(JB, JB + yB), YB);
        return BB
      }
      return 1 !== oB && 0 !== (DB & oB - 1) && (VB.b.Warn("Array must be aligned to border of element size. Data will be copied."), gB = !0), gB ? new kB(OB.slice(DB, DB + LB * oB)) : new kB(OB, DB, LB)
    }

    function kB(BB, TB, dB, yB, pB, lB, gB, oB) {
      const kB = TB * JB(dB),
        LB = gB * TB;
      if (oB.length !== LB) throw new Error("Output length is not valid");
      if (5126 === dB && pB === kB)
        if (BB instanceof Array) {
          const TB = yB / 4;
          oB.set(BB, TB)
        } else if (ArrayBuffer.isView(BB)) {
        const TB = BB.byteOffset + yB;
        if (0 !== (3 & TB)) return VB.b.Warn("Float array must be aligned to 4-bytes border"), void oB.set(new Float32Array(BB.buffer.slice(TB, TB + LB * Float32Array.BYTES_PER_ELEMENT)));
        const dB = new Float32Array(BB.buffer, TB, LB);
        oB.set(dB)
      } else {
        const TB = new Float32Array(BB, yB, LB);
        oB.set(TB)
      } else YB(BB, yB, pB, TB, dB, LB, lB, ((BB, dB) => {
        for (let VB = 0; VB < TB; VB++) oB[dB + VB] = BB[VB]
      }))
    }

    function LB(BB, TB) {
      let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      if (Array.isArray(BB)) {
        for (let yB = 0; yB < TB; yB++)
          if (BB[dB + yB] - VB > 65535) return !0;
        return !1
      }
      return 4 === BB.BYTES_PER_ELEMENT
    }

    function OB(BB) {
      const TB = BB.buffer;
      if (TB instanceof ArrayBuffer) return BB;
      const dB = new ArrayBuffer(BB.byteLength);
      return new Uint8Array(dB).set(new Uint8Array(TB, BB.byteOffset, BB.byteLength)), dB
    }
  },
  38638: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => sB,
      e: () => tB,
      j: () => fB,
      f: () => rB,
      n: () => IB
    });
    class VB {
      constructor() {
        this.children = []
      }
      isValid(BB) {
        return !0
      }
      process(BB, TB, dB) {
        let VB = "";
        if (this.line) {
          let dB = this.line;
          const yB = TB.processor;
          if (yB) {
            yB.lineProcessor && (dB = yB.lineProcessor(dB, TB.isFragment, TB.processingContext));
            const VB = TB.processor?.attributeKeywordName ?? "attribute",
              pB = TB.isFragment && TB.processor?.varyingFragmentKeywordName ? TB.processor?.varyingFragmentKeywordName : !TB.isFragment && TB.processor?.varyingVertexKeywordName ? TB.processor?.varyingVertexKeywordName : "varying";
            if (!TB.isFragment && yB.attributeProcessor && this.line.startsWith(VB)) dB = yB.attributeProcessor(this.line, BB, TB.processingContext);
            else if (yB.varyingProcessor && (yB.varyingCheck?.(this.line, TB.isFragment) || !yB.varyingCheck && this.line.startsWith(pB))) dB = yB.varyingProcessor(this.line, TB.isFragment, BB, TB.processingContext);
            else if (yB.uniformProcessor && yB.uniformRegexp && yB.uniformRegexp.test(this.line)) TB.lookForClosingBracketForUniformBuffer || (dB = yB.uniformProcessor(this.line, TB.isFragment, BB, TB.processingContext));
            else if (yB.uniformBufferProcessor && yB.uniformBufferRegexp && yB.uniformBufferRegexp.test(this.line)) TB.lookForClosingBracketForUniformBuffer || (dB = yB.uniformBufferProcessor(this.line, TB.isFragment, TB.processingContext), TB.lookForClosingBracketForUniformBuffer = !0);
            else if (yB.textureProcessor && yB.textureRegexp && yB.textureRegexp.test(this.line)) dB = yB.textureProcessor(this.line, TB.isFragment, BB, TB.processingContext);
            else if ((yB.uniformProcessor || yB.uniformBufferProcessor) && this.line.startsWith("uniform") && !TB.lookForClosingBracketForUniformBuffer) {
              /uniform\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s+(\S+)\s*;/.test(this.line) ? yB.uniformProcessor && (dB = yB.uniformProcessor(this.line, TB.isFragment, BB, TB.processingContext)) : yB.uniformBufferProcessor && (dB = yB.uniformBufferProcessor(this.line, TB.isFragment, TB.processingContext), TB.lookForClosingBracketForUniformBuffer = !0)
            }
            TB.lookForClosingBracketForUniformBuffer && -1 !== this.line.indexOf("}") && (TB.lookForClosingBracketForUniformBuffer = !1, yB.endOfUniformBufferProcessor && (dB = yB.endOfUniformBufferProcessor(this.line, TB.isFragment, TB.processingContext)))
          }
          VB += dB + "\n"
        }
        for (const yB of this.children) VB += yB.process(BB, TB, dB);
        return this.additionalDefineKey && (BB[this.additionalDefineKey] = this.additionalDefineValue || "true", dB[this.additionalDefineKey] = BB[this.additionalDefineKey]), VB
      }
    }
    class yB {
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
        for (const TB of BB) {
          if (!TB || "\r" === TB) continue;
          if ("#" === TB[0]) {
            this._lines.push(TB);
            continue
          }
          const BB = TB.trim();
          if (!BB) continue;
          if (BB.startsWith("//")) {
            this._lines.push(TB);
            continue
          }
          const dB = BB.indexOf(";");
          if (-1 === dB) this._lines.push(BB);
          else if (dB === BB.length - 1) BB.length > 1 && this._lines.push(BB);
          else {
            const BB = TB.split(";");
            for (let TB = 0; TB < BB.length; TB++) {
              let dB = BB[TB];
              dB && (dB = dB.trim(), dB && this._lines.push(dB + (TB !== BB.length - 1 ? ";" : "")))
            }
          }
        }
      }
    }
    class pB extends VB {
      process(BB, TB, dB) {
        for (let VB = 0; VB < this.children.length; VB++) {
          const yB = this.children[VB];
          if (yB.isValid(BB)) return yB.process(BB, TB, dB)
        }
        return ""
      }
    }
    class lB extends VB {
      isValid(BB) {
        return this.testExpression.isTrue(BB)
      }
    }
    class JB {
      isTrue(BB) {
        return !0
      }
      static postfixToInfix(BB) {
        const TB = [];
        for (const dB of BB)
          if (void 0 === JB._OperatorPriority[dB]) TB.push(dB);
          else {
            const BB = TB[TB.length - 1],
              VB = TB[TB.length - 2];
            TB.length -= 2, TB.push(`(${VB}${dB}${BB})`)
          } return TB[TB.length - 1]
      }
      static infixToPostfix(BB) {
        const TB = JB._InfixToPostfixCache.get(BB);
        if (TB) return TB.accessTime = Date.now(), TB.result;
        if (!BB.includes("&&") && !BB.includes("||") && !BB.includes(")") && !BB.includes("(")) return [BB];
        const dB = [];
        let VB = -1;
        const yB = () => {
            oB = oB.trim(), "" !== oB && (dB.push(oB), oB = "")
          },
          pB = BB => {
            VB < JB._Stack.length - 1 && (JB._Stack[++VB] = BB)
          },
          lB = () => JB._Stack[VB],
          YB = () => -1 === VB ? "!!INVALID EXPRESSION!!" : JB._Stack[VB--];
        let gB = 0,
          oB = "";
        for (; gB < BB.length;) {
          const TB = BB.charAt(gB),
            kB = gB < BB.length - 1 ? BB.substring(gB, 2 + gB) : "";
          if ("(" === TB) oB = "", pB(TB);
          else if (")" === TB) {
            for (yB(); - 1 !== VB && "(" !== lB();) dB.push(YB());
            YB()
          } else if (JB._OperatorPriority[kB] > 1) {
            for (yB(); - 1 !== VB && JB._OperatorPriority[lB()] >= JB._OperatorPriority[kB];) dB.push(YB());
            pB(kB), gB++
          } else oB += TB;
          gB++
        }
        for (yB(); - 1 !== VB;) "(" === lB() ? YB() : dB.push(YB());
        return JB._InfixToPostfixCache.size >= JB.InfixToPostfixCacheLimitSize && JB.ClearCache(), JB._InfixToPostfixCache.set(BB, {
          result: dB,
          accessTime: Date.now()
        }), dB
      }
      static ClearCache() {
        const BB = Array.from(JB._InfixToPostfixCache.entries()).sort(((BB, TB) => BB[1].accessTime - TB[1].accessTime));
        for (let TB = 0; TB < JB.InfixToPostfixCacheCleanupSize; TB++) JB._InfixToPostfixCache.delete(BB[TB][0])
      }
    }
    JB.InfixToPostfixCacheLimitSize = 5e4, JB.InfixToPostfixCacheCleanupSize = 25e3, JB._InfixToPostfixCache = new Map, JB._OperatorPriority = {
      ")": 0,
      "(": 1,
      "||": 2,
      "&&": 3
    }, JB._Stack = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    class YB extends JB {
      constructor(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super(), this.define = BB, this.not = TB
      }
      isTrue(BB) {
        let TB = void 0 !== BB[this.define];
        return this.not && (TB = !TB), TB
      }
    }
    class gB extends JB {
      isTrue(BB) {
        return this.leftOperand.isTrue(BB) || this.rightOperand.isTrue(BB)
      }
    }
    class oB extends JB {
      isTrue(BB) {
        return this.leftOperand.isTrue(BB) && this.rightOperand.isTrue(BB)
      }
    }
    class kB extends JB {
      constructor(BB, TB, dB) {
        super(), this.define = BB, this.operand = TB, this.testValue = dB
      }
      toString() {
        return `${this.define} ${this.operand} ${this.testValue}`
      }
      isTrue(BB) {
        let TB = !1;
        const dB = parseInt(void 0 != BB[this.define] ? BB[this.define] : this.define),
          VB = parseInt(void 0 != BB[this.testValue] ? BB[this.testValue] : this.testValue);
        if (isNaN(dB) || isNaN(VB)) return !1;
        switch (this.operand) {
          case ">":
            TB = dB > VB;
            break;
          case "<":
            TB = dB < VB;
            break;
          case "<=":
            TB = dB <= VB;
            break;
          case ">=":
            TB = dB >= VB;
            break;
          case "==":
            TB = dB === VB;
            break;
          case "!=":
            TB = dB !== VB
        }
        return TB
      }
    }
    var LB = dB(38629),
      OB = dB(38620);
    const DB = /defined\s*?\((.+?)\)/g,
      uB = /defined\s*?\[(.+?)\]/g,
      HB = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g,
      EB = /__decl__/,
      vB = /light\{X\}.(\w*)/g,
      mB = /\{X\}/g,
      iB = [],
      NB = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;

    function tB(BB) {
      BB.processor && BB.processor.initializeShaders && BB.processor.initializeShaders(BB.processingContext)
    }

    function fB(BB, TB, dB, VB) {
      TB.processor?.preProcessShaderCode && (BB = TB.processor.preProcessShaderCode(BB, TB.isFragment)), rB(BB, TB, (BB => {
        TB.processCodeAfterIncludes && (BB = TB.processCodeAfterIncludes(TB.isFragment ? "fragment" : "vertex", BB, TB.defines));
        const yB = function(BB, TB, dB) {
          let VB = function(BB, TB) {
            if (TB.processor?.noPrecision) return BB;
            const dB = TB.shouldUseHighPrecisionShader; - 1 === BB.indexOf("precision highp float") ? BB = dB ? "precision highp float;\n" + BB : "precision mediump float;\n" + BB : dB || (BB = BB.replace("precision highp float", "precision mediump float"));
            return BB
          }(BB, TB);
          if (!TB.processor) return VB;
          if (0 === TB.processor.shaderLanguage && -1 !== VB.indexOf("#version 3") && (VB = VB.replace("#version 300 es", ""), !TB.processor.parseGLES3)) return VB;
          const yB = TB.defines,
            pB = KB(TB, dB);
          TB.processor.preProcessor && (VB = TB.processor.preProcessor(VB, yB, pB, TB.isFragment, TB.processingContext));
          const lB = {};
          VB = FB(VB, pB, TB, lB), TB.processor.postProcessor && (VB = TB.processor.postProcessor(VB, yB, TB.isFragment, TB.processingContext, dB ? {
            drawBuffersExtensionDisabled: !dB.getCaps().drawBuffersExtension
          } : {}, pB, lB));
          dB?._features.needShaderCodeInlining && (VB = dB.inlineShaderCode(VB));
          return VB
        }(BB, TB, VB);
        dB(yB, BB)
      }))
    }

    function sB(BB, TB, dB) {
      return dB.processor && dB.processor.finalizeShaders ? dB.processor.finalizeShaders(BB, TB, dB.processingContext) : {
        vertexCode: BB,
        fragmentCode: TB
      }
    }

    function MB(BB) {
      const TB = /defined\((.+)\)/.exec(BB);
      if (TB && TB.length) return new YB(TB[1].trim(), "!" === BB[0]);
      const dB = ["==", "!=", ">=", "<=", "<", ">"];
      let VB = "",
        yB = 0;
      for (VB of dB)
        if (yB = BB.indexOf(VB), yB > -1) break;
      if (-1 === yB) return new YB(BB);
      const pB = BB.substring(0, yB).trim(),
        lB = BB.substring(yB + VB.length).trim();
      return new kB(pB, VB, lB)
    }

    function zB(BB, TB) {
      const dB = new lB,
        VB = BB.substring(0, TB);
      let yB = BB.substring(TB);
      return yB = yB.substring(0, (yB.indexOf("//") + 1 || yB.length + 1) - 1).trim(), dB.testExpression = "#ifdef" === VB ? new YB(yB) : "#ifndef" === VB ? new YB(yB, !0) : function(BB) {
        BB = BB.replace(DB, "defined[$1]");
        const TB = JB.infixToPostfix(BB),
          dB = [];
        for (const yB of TB)
          if ("||" !== yB && "&&" !== yB) dB.push(yB);
          else if (dB.length >= 2) {
          let BB = dB[dB.length - 1],
            TB = dB[dB.length - 2];
          dB.length -= 2;
          const VB = "&&" == yB ? new oB : new gB;
          "string" === typeof BB && (BB = BB.replace(uB, "defined($1)")), "string" === typeof TB && (TB = TB.replace(uB, "defined($1)")), VB.leftOperand = "string" === typeof TB ? MB(TB) : TB, VB.rightOperand = "string" === typeof BB ? MB(BB) : BB, dB.push(VB)
        }
        let VB = dB[dB.length - 1];
        return "string" === typeof VB && (VB = VB.replace(uB, "defined($1)")), "string" === typeof VB ? MB(VB) : VB
      }(yB), dB
    }

    function wB(BB, TB, dB, yB) {
      let pB;
      for (; UB(BB, dB, yB);) {
        pB = BB.currentLine;
        const lB = pB.substring(0, 5).toLowerCase();
        if ("#else" === lB) {
          const dB = new VB;
          return TB.children.push(dB), void UB(BB, dB, yB)
        }
        if ("#elif" === lB) {
          const BB = zB(pB, 5);
          TB.children.push(BB), dB = BB
        }
      }
    }

    function UB(BB, TB, dB) {
      for (; BB.canRead;) {
        BB.lineIndex++;
        const yB = BB.currentLine;
        if (yB.indexOf("#") >= 0) {
          const VB = NB.exec(yB);
          if (VB && VB.length) {
            switch (VB[0]) {
              case "#ifdef": {
                const VB = new pB;
                TB.children.push(VB);
                const lB = zB(yB, 6);
                VB.children.push(lB), wB(BB, VB, lB, dB);
                break
              }
              case "#else":
              case "#elif":
                return !0;
              case "#endif":
                return !1;
              case "#ifndef": {
                const VB = new pB;
                TB.children.push(VB);
                const lB = zB(yB, 7);
                VB.children.push(lB), wB(BB, VB, lB, dB);
                break
              }
              case "#if": {
                const VB = new pB,
                  lB = zB(yB, 3);
                TB.children.push(VB), VB.children.push(lB), wB(BB, VB, lB, dB);
                break
              }
            }
            continue
          }
        }
        const lB = new VB;
        if (lB.line = yB, TB.children.push(lB), "#" === yB[0] && "d" === yB[1]) {
          const BB = yB.replace(";", "").split(" ");
          lB.additionalDefineKey = BB[1], 3 === BB.length && (lB.additionalDefineValue = BB[2])
        }
      }
      return !1
    }

    function FB(BB, TB, dB, pB) {
      const lB = new VB,
        JB = new yB;
      return JB.lineIndex = -1, JB.lines = BB.split("\n"), UB(JB, lB, pB), lB.process(TB, dB, pB)
    }

    function KB(BB, TB) {
      const dB = BB.defines,
        VB = {};
      for (const yB of dB) {
        const BB = yB.replace("#define", "").replace(";", "").trim().split(" ");
        VB[BB[0]] = BB.length > 1 ? BB[1] : ""
      }
      return 0 === BB.processor?.shaderLanguage && (VB.GL_ES = "true"), VB.__VERSION__ = BB.version, VB[BB.platformName] = "true", (0, OB.i)(VB, TB?.isNDCHalfZRange, TB?.fVB, TB?.useExactSrgbConversions), VB
    }

    function rB(BB, TB, dB) {
      let VB;
      for (iB.length = 0; null !== (VB = HB.exec(BB));) iB.push(VB);
      let yB = [BB],
        pB = !1;
      for (const JB of iB) {
        let BB = JB[1];
        if (-1 !== BB.indexOf("__decl__") && (BB = BB.replace(EB, ""), TB.supportsUniformBuffers && (BB = BB.replace("Vertex", "Ubo").replace("Fragment", "Ubo")), BB += "Declaration"), !TB.includesShadersStore[BB]) {
          const VB = TB.shadersRepository + "ShadersInclude/" + BB + ".fx";
          return void IB.loadFile(VB, (VB => {
            TB.includesShadersStore[BB] = VB, rB(yB.join(""), TB, dB)
          }))
        } {
          let dB = TB.includesShadersStore[BB];
          if (JB[2]) {
            const BB = JB[3].split(",");
            for (let TB = 0; TB < BB.length; TB += 2) {
              const VB = new RegExp(BB[TB], "g"),
                yB = BB[TB + 1];
              dB = dB.replace(VB, yB)
            }
          }
          if (JB[4]) {
            const BB = JB[5];
            if (-1 !== BB.indexOf("..")) {
              const VB = BB.split(".."),
                yB = parseInt(VB[0]);
              let pB = parseInt(VB[1]),
                lB = dB.slice(0);
              dB = "", isNaN(pB) && (pB = TB.indexParameters[VB[1]]);
              for (let BB = yB; BB < pB; BB++) TB.supportsUniformBuffers || (lB = lB.replace(vB, ((BB, TB) => TB + "{X}"))), dB += lB.replace(mB, BB.toString()) + "\n"
            } else TB.supportsUniformBuffers || (dB = dB.replace(vB, ((BB, TB) => TB + "{X}"))), dB = dB.replace(mB, BB)
          }
          const VB = [];
          for (const BB of yB) {
            const TB = BB.split(JB[0]);
            for (let BB = 0; BB < TB.length - 1; BB++) VB.push(TB[BB]), VB.push(dB);
            VB.push(TB[TB.length - 1])
          }
          yB = VB, pB = pB || dB.indexOf("#include<") >= 0 || dB.indexOf("#include <") >= 0
        }
      }
      iB.length = 0;
      const lB = yB.join("");
      pB ? rB(lB.toString(), TB, dB) : dB(lB)
    }
    const IB = {
      loadFile: (BB, TB, dB, VB, yB, pB) => {
        throw (0, LB.i)("FileTools")
      }
    }
  },
  38620: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => yB,
      h: () => pB,
      i: () => JB,
      l: () => lB,
      p: () => YB
    });
    var VB = dB(38629);
    const yB = {};

    function pB(BB, TB) {
      return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (TB ? TB + "\n" : "") + BB
    }

    function lB(BB, TB, dB, pB, lB, JB, YB) {
      const gB = YB || yB.loadFile;
      if (!gB) throw (0, VB.i)("FileTools");
      return gB(BB, TB, dB, pB, lB, JB)
    }

    function JB(BB, TB, dB, VB) {
      if (BB) return TB ? BB.IS_NDC_HALF_ZRANGE = "" : delete BB.IS_NDC_HALF_ZRANGE, dB ? BB.USE_REVERSE_DEPTHBUFFER = "" : delete BB.USE_REVERSE_DEPTHBUFFER, void(VB ? BB.USE_EXACT_SRGB_CONVERSIONS = "" : delete BB.USE_EXACT_SRGB_CONVERSIONS);
      {
        let BB = "";
        return TB && (BB += "#define IS_NDC_HALF_ZRANGE"), dB && (BB && (BB += "\n"), BB += "#define USE_REVERSE_DEPTHBUFFER"), VB && (BB && (BB += "\n"), BB += "#define USE_EXACT_SRGB_CONVERSIONS"), BB
      }
    }

    function YB(BB, TB) {
      let dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        VB = arguments.length > 3 ? arguments[3] : void 0;
      switch (BB) {
        case 3: {
          const BB = new Int8Array(TB);
          return VB && BB.set(new Int8Array(VB)), BB
        }
        case 0: {
          const BB = new Uint8Array(TB);
          return VB && BB.set(new Uint8Array(VB)), BB
        }
        case 4: {
          const BB = "number" !== typeof TB ? new Int16Array(TB) : new Int16Array(dB ? TB / 2 : TB);
          return VB && BB.set(new Int16Array(VB)), BB
        }
        case 5:
        case 8:
        case 9:
        case 10:
        case 2: {
          const BB = "number" !== typeof TB ? new Uint16Array(TB) : new Uint16Array(dB ? TB / 2 : TB);
          return VB && BB.set(new Uint16Array(VB)), BB
        }
        case 6: {
          const BB = "number" !== typeof TB ? new Int32Array(TB) : new Int32Array(dB ? TB / 4 : TB);
          return VB && BB.set(new Int32Array(VB)), BB
        }
        case 7:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15: {
          const BB = "number" !== typeof TB ? new Uint32Array(TB) : new Uint32Array(dB ? TB / 4 : TB);
          return VB && BB.set(new Uint32Array(VB)), BB
        }
        case 1: {
          const BB = "number" !== typeof TB ? new Float32Array(TB) : new Float32Array(dB ? TB / 4 : TB);
          return VB && BB.set(new Float32Array(VB)), BB
        }
      }
      const yB = new Uint8Array(TB);
      return VB && yB.set(new Uint8Array(VB)), yB
    }
  },
  38629: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => gB,
      d: () => oB,
      h: () => YB,
      i: () => yB
    });
    const VB = {};

    function yB(BB) {
      if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !VB[BB]) return VB[BB] = !0, `${BB} needs to be imported before as it contains a side-effect required by your code.`
    }
    const pB = {};
    let lB = !1,
      JB = 0;

    function YB(BB, TB) {
      let dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const VB = function() {
        if ((dB || lB) && 0 === JB) {
          const dB = `${BB}.${TB}`;
          pB[dB] || (pB[dB] = !0, console.warn(`[Babylon.js] ${dB}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
        }
      };
      return VB.__isSideEffectStub = !0, VB
    }

    function gB(BB) {
      return !!BB && !BB.__isSideEffectStub
    }

    function oB(BB, TB) {
      return {
        get() {},
        set(BB) {
          Object.defineProperty(this, TB, {
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
  38606: (BB, TB, dB) => {
    function VB() {
      return "undefined" !== typeof window
    }

    function yB() {
      return "undefined" !== typeof navigator
    }

    function pB() {
      return "undefined" !== typeof document
    }

    function lB(BB) {
      let TB = "",
        dB = BB.firstChild;
      for (; dB;) 3 === dB.nodeType && (TB += dB.textContent), dB = dB.nextSibling;
      return TB
    }
    dB.d(TB, {
      b: () => lB,
      c: () => pB,
      f: () => yB,
      h: () => VB
    })
  },
  38808: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => VB,
      h: () => yB,
      l: () => pB
    });
    class VB extends Error {}
    VB._setPrototypeOf = Object.setPrototypeOf || ((BB, TB) => (BB.__proto__ = TB, BB));
    const yB = {
      MeshInvalidPositionsError: 0,
      UnsupportedTextureError: 1e3,
      GLTFLoaderUnexpectedMagicError: 2e3,
      SceneLoaderError: 3e3,
      LoadFileError: 4e3,
      RequestFileError: 4001,
      ReadFileError: 4002
    };
    class pB extends VB {
      constructor(BB, TB, dB) {
        super(BB), this.errorCode = TB, this.innerError = dB, this.name = "RuntimeError", VB._setPrototypeOf(this, pB.prototype)
      }
    }
  },
  38790: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => KB,
      f: () => mB,
      j: () => zB,
      m: () => UB,
      q: () => sB,
      s: () => tB,
      t: () => fB,
      x: () => PB,
      A: () => MB,
      D: () => iB
    });
    var VB = dB(38799),
      yB = dB(38606),
      pB = dB(36150);
    class lB {}
    lB.FilesToLoad = {};
    var JB = dB(38808),
      YB = dB(38811),
      gB = dB(36148),
      oB = dB(38620),
      kB = dB(38638),
      LB = dB(37651),
      OB = dB(38645),
      DB = dB(38819);
    const uB = new RegExp(/^data:([^,]+\/[^,]+)?;base64,/i);
    class HB extends JB.l {
      constructor(BB, TB) {
        super(BB, JB.h.LoadFileError), this.name = "LoadFileError", JB.e._setPrototypeOf(this, HB.prototype), TB instanceof VB.c ? this.request = TB : this.file = TB
      }
    }
    class EB extends JB.l {
      constructor(BB, TB) {
        super(BB, JB.h.RequestFileError), this.request = TB, this.name = "RequestFileError", JB.e._setPrototypeOf(this, EB.prototype)
      }
    }
    class vB extends JB.l {
      constructor(BB, TB) {
        super(BB, JB.h.ReadFileError), this.file = TB, this.name = "ReadFileError", JB.e._setPrototypeOf(this, vB.prototype)
      }
    }
    const mB = {
        DefaultRetryStrategy: class {
          static ExponentialBackoff() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
              TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
            return (dB, VB, yB) => 0 !== VB.status || yB >= BB || -1 !== dB.indexOf("file:") ? -1 : Math.pow(2, yB) * TB
          }
        }.ExponentialBackoff(),
        BaseUrl: "",
        CorsBehavior: "anonymous",
        PreprocessUrl: BB => BB,
        ScriptBaseUrl: "",
        ScriptPreprocessUrl: BB => BB,
        CleanUrl: BB => BB = BB.replace(/#/gm, "%23")
      },
      iB = (BB, TB) => {
        if ((!BB || 0 !== BB.indexOf("data:")) && mB.CorsBehavior)
          if ("string" === typeof mB.CorsBehavior || mB.CorsBehavior instanceof String) TB.crossOrigin = mB.CorsBehavior;
          else {
            const dB = mB.CorsBehavior(BB);
            dB && (TB.crossOrigin = dB)
          }
      },
      NB = {
        getRequiredSize: null
      },
      tB = function(BB, TB, dB, yB) {
        let pB, JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
          oB = arguments.length > 5 ? arguments[5] : void 0,
          kB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : gB.c.LastCreatedEngine;
        if ("undefined" === typeof HTMLImageElement && !kB?._features.forceBitmapOverHTMLImageElement) return dB("LoadImage is only supported in web or BabylonNative environments."), null;
        if (kB?._features.forceBitmapOverHTMLImageElement && "string" !== typeof BB && "undefined" !== typeof Blob) {
          let VB;
          if (BB instanceof Blob) VB = BB;
          else {
            const TB = BB instanceof ArrayBuffer ? BB : (0, DB.j)(BB);
            VB = new Blob([TB], {
              type: JB
            })
          }
          return kB.createImageBitmap(VB, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...oB
          }).then(TB).catch((TB => {
            dB && dB("Error while trying to load image: " + BB, TB)
          })), null
        }
        let LB = !1;
        if (BB instanceof ArrayBuffer || ArrayBuffer.isView(BB))
          if ("undefined" !== typeof Blob && "undefined" !== typeof URL) {
            let TB;
            TB = BB instanceof ArrayBuffer ? BB : (0, DB.j)(BB), pB = URL.createObjectURL(new Blob([TB], {
              type: JB
            })), LB = !0
          } else pB = `data:${JB};base64,` + (0, YB.k)(BB);
        else BB instanceof Blob ? (pB = URL.createObjectURL(BB), LB = !0) : (pB = mB.CleanUrl(BB), pB = mB.PreprocessUrl(pB));
        const OB = TB => {
          if (dB) {
            const VB = pB || BB.toString();
            dB(`Error while trying to load image: ${0===VB.indexOf("http")||VB.length<=128?VB:VB.slice(0,128)+"..."}`, TB)
          }
        };
        if (kB?._features.forceBitmapOverHTMLImageElement) return sB(pB, (VB => {
          kB.createImageBitmap(new Blob([VB], {
            type: JB
          }), {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...oB
          }).then((BB => {
            TB(BB), LB && URL.revokeObjectURL(pB)
          })).catch((TB => {
            dB && dB("Error while trying to load image: " + BB, TB)
          }))
        }), void 0, yB || void 0, !0, ((BB, TB) => {
          OB(TB)
        })), null;
        const uB = new Image;
        if (NB.getRequiredSize) {
          const TB = NB.getRequiredSize(BB);
          TB.width && (uB.width = TB.width), TB.height && (uB.height = TB.height)
        }
        iB(pB, uB);
        const HB = [],
          EB = () => {
            for (const BB of HB) BB.target.removeEventListener(BB.name, BB.handler);
            HB.length = 0
          };
        HB.push({
          target: uB,
          name: "load",
          handler: () => {
            EB(), TB(uB), LB && uB.src && URL.revokeObjectURL(uB.src)
          }
        }), HB.push({
          target: uB,
          name: "error",
          handler: BB => {
            EB(), OB(BB), LB && uB.src && URL.revokeObjectURL(uB.src)
          }
        }), HB.push({
          target: document,
          name: "securitypolicyviolation",
          handler: BB => {
            if (BB.blockedURI !== uB.src || "yD" === BB.disposition) return;
            EB();
            const TB = new Error(`CSP violation of policy ${BB.effectiveDirective} ${BB.blockedURI}. Current policy is ${BB.originalPolicy}`);
            gB.c.UseFallbackTexture = !1, OB(TB), LB && uB.src && URL.revokeObjectURL(uB.src), uB.src = ""
          }
        }), (() => {
          for (const BB of HB) BB.target.addEventListener(BB.name, BB.handler)
        })();
        const vB = "blob:" === pB.substring(0, 5),
          tB = "data:" === pB.substring(0, 5),
          fB = () => {
            vB || tB || !VB.c.IsCustomRequestAvailable ? uB.src = pB : sB(pB, ((BB, TB, dB) => {
              const VB = new Blob([BB], {
                  type: !JB && dB ? dB : JB
                }),
                yB = URL.createObjectURL(VB);
              LB = !0, uB.src = yB
            }), void 0, yB || void 0, !0, ((BB, TB) => {
              OB(TB)
            }))
          },
          MB = () => {
            yB && yB.loadImage(pB, uB)
          };
        if (!vB && !tB && yB && yB.enableTexturesOffline) yB.open(MB, fB);
        else {
          if (-1 !== pB.indexOf("file:")) {
            const BB = decodeURIComponent(pB.substring(5).toLowerCase());
            if (lB.FilesToLoad[BB] && "undefined" !== typeof URL) {
              try {
                let TB;
                try {
                  TB = URL.createObjectURL(lB.FilesToLoad[BB])
                } catch (zB) {
                  TB = URL.createObjectURL(lB.FilesToLoad[BB])
                }
                uB.src = TB, LB = !0
              } catch (wB) {
                uB.src = ""
              }
              return uB
            }
          }
          fB()
        }
        return uB
      },
      fB = (BB, TB, dB, VB, yB) => {
        const lB = new FileReader,
          JB = {
            onCompleteObservable: new pB.e,
            abort: () => lB.abort()
          };
        return lB.onloadend = () => JB.onCompleteObservable.notifyObservers(JB), yB && (lB.onerror = () => {
          yB(new vB(`Unable to read ${BB.name}`, BB))
        }), lB.onload = BB => {
          TB(BB.target.result)
        }, dB && (lB.onprogress = dB), VB ? lB.readAsArrayBuffer(BB) : lB.readAsText(BB), JB
      },
      sB = (BB, TB, dB, VB, yB, YB, gB) => {
        if (BB.name) return fB(BB, TB, dB, yB, YB ? BB => {
          YB(void 0, BB)
        } : void 0);
        const oB = BB;
        if (-1 !== oB.indexOf("file:")) {
          let BB = decodeURIComponent(oB.substring(5).toLowerCase());
          0 === BB.indexOf("./") && (BB = BB.substring(2));
          const VB = lB.FilesToLoad[BB];
          if (VB) return fB(VB, TB, dB, yB, YB ? BB => YB(void 0, new HB(BB.message, BB.file)) : void 0)
        }
        const {
          match: kB,
          type: DB
        } = FB(oB);
        if (kB) {
          const BB = {
            onCompleteObservable: new pB.e,
            abort: () => () => {}
          };
          try {
            const BB = yB ? KB(oB) : rB(oB);
            TB(BB, void 0, DB)
          } catch (JB) {
            YB ? YB(void 0, JB) : LB.b.Error(JB.message || "Failed to parse the Data URL")
          }
          return OB.b.SetImmediate((() => {
            BB.onCompleteObservable.notifyObservers(BB)
          })), BB
        }
        return MB(oB, ((BB, dB) => {
          TB(BB, dB?.responseURL, dB?.getResponseHeader("content-type"))
        }), dB, VB, yB, YB ? BB => {
          YB(BB.request, new HB(BB.message, BB.request))
        } : void 0, gB)
      },
      MB = (BB, TB, dB, lB, JB, YB, oB) => {
        null !== lB && (lB ?? (lB = gB.c.LastCreatedScene?.offlineProvider)), BB = mB.CleanUrl(BB), BB = mB.PreprocessUrl(BB);
        const kB = mB.BaseUrl + BB;
        let OB = !1;
        const DB = {
            onCompleteObservable: new pB.e,
            abort: () => OB = !0
          },
          uB = () => {
            let BB, pB = new VB.c,
              lB = null;
            const gB = () => {
              pB && (dB && pB.removeEventListener("progress", dB), BB && pB.removeEventListener("readystatechange", BB), pB.removeEventListener("loadend", uB))
            };
            let uB = () => {
              gB(), DB.onCompleteObservable.notifyObservers(DB), DB.onCompleteObservable.clear(), dB = void 0, BB = null, uB = null, YB = void 0, oB = void 0, TB = void 0
            };
            DB.abort = () => {
              OB = !0, uB && uB(), pB && pB.readyState !== (XMLHttpRequest.DONE || 4) && pB.abort(), null !== lB && (clearTimeout(lB), lB = null), pB = null
            };
            const HB = BB => {
                const TB = BB.message || "Unknown error";
                YB && pB ? YB(new EB(TB, pB)) : LB.b.Error(TB)
              },
              vB = LB => {
                if (pB) {
                  if (pB.open("GET", kB), oB) try {
                    oB(pB)
                  } catch (DB) {
                    return void HB(DB)
                  }
                  JB && (pB.responseType = "arraybuffer"), dB && pB.addEventListener("progress", dB), uB && pB.addEventListener("loadend", uB), BB = () => {
                    if (!OB && pB && pB.readyState === (XMLHttpRequest.DONE || 4)) {
                      if (BB && pB.removeEventListener("readystatechange", BB), pB.status >= 200 && pB.status < 300 || 0 === pB.status && (!(0, yB.h)() || wB())) {
                        const BB = JB ? pB.response : pB.responseText;
                        if (null !== BB) {
                          try {
                            TB && TB(BB, pB)
                          } catch (DB) {
                            HB(DB)
                          }
                          return
                        }
                      }
                      const dB = mB.DefaultRetryStrategy;
                      if (dB) {
                        const BB = dB(kB, pB, LB);
                        if (-1 !== BB) return gB(), pB = new VB.c, void(lB = setTimeout((() => vB(LB + 1)), BB))
                      }
                      const oB = new EB("Error status: " + pB.status + " " + pB.statusText + " - Unable to load " + kB, pB);
                      YB && YB(oB)
                    }
                  }, pB.addEventListener("readystatechange", BB), pB.send()
                }
              };
            vB(0)
          };
        if (lB && lB.enableSceneOffline && !BB.startsWith("blob:")) {
          const VB = BB => {
              BB && BB.status > 400 ? YB && YB(BB) : uB()
            },
            yB = () => {
              lB && lB.loadFile(mB.BaseUrl + BB, (BB => {
                !OB && TB && TB(BB), DB.onCompleteObservable.notifyObservers(DB)
              }), dB ? BB => {
                !OB && dB && dB(BB)
              } : void 0, VB, JB)
            };
          lB.open(yB, VB)
        } else uB();
        return DB
      },
      zB = BB => {
        const {
          match: TB,
          type: dB
        } = FB(BB);
        if (TB) return dB || void 0;
        const VB = BB.lastIndexOf(".");
        switch (BB.substring(VB + 1).toLowerCase()) {
          case "glb":
            return "model/gltf-binary";
          case "bin":
            return "application/octet-stream";
          case "IU":
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
      wB = () => "undefined" !== typeof location && "file:" === location.protocol,
      UB = BB => uB.test(BB),
      FB = BB => {
        const TB = uB.exec(BB);
        if (null === TB || 0 === TB.length) return {
          match: !1,
          type: ""
        };
        return {
          match: !0,
          type: TB[0].replace("data:", "").replace(";base64,", "")
        }
      };

    function KB(BB) {
      return (0, YB.c)(BB.split(",")[1])
    }
    const rB = BB => (0, YB.g)(BB.split(",")[1]);
    let IB;
    const cB = (BB, TB, dB, VB, yB, pB, lB, JB, YB, gB) => {
      IB = {
        DecodeBase64UrlToBinary: BB,
        DecodeBase64UrlToString: TB,
        DefaultRetryStrategy: dB.DefaultRetryStrategy,
        BaseUrl: dB.BaseUrl,
        CorsBehavior: dB.CorsBehavior,
        PreprocessUrl: dB.PreprocessUrl,
        IsBase64DataUrl: VB,
        IsFileURL: yB,
        LoadFile: pB,
        LoadImage: lB,
        ReadFile: JB,
        RequestFile: YB,
        SetCorsBehavior: gB
      }, Object.defineProperty(IB, "DefaultRetryStrategy", {
        get: function() {
          return dB.DefaultRetryStrategy
        },
        set: function(BB) {
          dB.DefaultRetryStrategy = BB
        }
      }), Object.defineProperty(IB, "BaseUrl", {
        get: function() {
          return dB.BaseUrl
        },
        set: function(BB) {
          dB.BaseUrl = BB
        }
      }), Object.defineProperty(IB, "PreprocessUrl", {
        get: function() {
          return dB.PreprocessUrl
        },
        set: function(BB) {
          dB.PreprocessUrl = BB
        }
      }), Object.defineProperty(IB, "CorsBehavior", {
        get: function() {
          return dB.CorsBehavior
        },
        set: function(BB) {
          dB.CorsBehavior = BB
        }
      })
    };
    let SB = !1;

    function PB() {
      SB || (SB = !0, cB(KB, rB, mB, UB, wB, sB, tB, fB, MB, iB), oB.d.loadFile = sB, oB.d.loadImage = tB, kB.n.loadFile = sB)
    }
  },
  38825: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => JB,
      g: () => pB,
      i: () => lB
    });
    let VB = null;

    function yB() {
      if (VB) return VB;
      const BB = new ArrayBuffer(4),
        TB = new Float32Array(BB),
        dB = new Uint32Array(BB),
        yB = new Uint32Array(512),
        pB = new Uint32Array(512);
      for (let VB = 0; VB < 256; ++VB) {
        const BB = VB - 127;
        BB < -24 ? (yB[VB] = 0, yB[256 | VB] = 32768, pB[VB] = 24, pB[256 | VB] = 24) : BB < -14 ? (yB[VB] = 1024 >> -BB - 14, yB[256 | VB] = 1024 >> -BB - 14 | 32768, pB[VB] = -BB - 1, pB[256 | VB] = -BB - 1) : BB <= 15 ? (yB[VB] = BB + 15 << 10, yB[256 | VB] = BB + 15 << 10 | 32768, pB[VB] = 13, pB[256 | VB] = 13) : BB < 128 ? (yB[VB] = 31744, yB[256 | VB] = 64512, pB[VB] = 24, pB[256 | VB] = 24) : (yB[VB] = 31744, yB[256 | VB] = 64512, pB[VB] = 13, pB[256 | VB] = 13)
      }
      const lB = new Uint32Array(2048),
        JB = new Uint32Array(64),
        YB = new Uint32Array(64);
      for (let VB = 1; VB < 1024; ++VB) {
        let BB = VB << 13,
          TB = 0;
        for (; 0 === (8388608 & BB);) BB <<= 1, TB -= 8388608;
        BB &= -8388609, TB += 947912704, lB[VB] = BB | TB
      }
      for (let VB = 1024; VB < 2048; ++VB) lB[VB] = 939524096 + (VB - 1024 << 13);
      for (let VB = 1; VB < 31; ++VB) JB[VB] = VB << 23;
      JB[31] = 1199570944, JB[32] = 2147483648;
      for (let VB = 33; VB < 63; ++VB) JB[VB] = 2147483648 + (VB - 32 << 23);
      JB[63] = 3347054592;
      for (let VB = 1; VB < 64; ++VB) 32 !== VB && (YB[VB] = 1024);
      return VB = {
        floatView: TB,
        uint32View: dB,
        baseTable: yB,
        shiftTable: pB,
        mantissaTable: lB,
        exponentTable: JB,
        offsetTable: YB
      }, VB
    }
    const pB = 65504;

    function lB(BB) {
      const TB = yB();
      TB.floatView[0] = BB;
      const dB = TB.uint32View[0],
        VB = dB >> 23 & 511;
      return TB.baseTable[VB] + ((8388607 & dB) >> TB.shiftTable[VB])
    }

    function JB(BB) {
      const TB = yB();
      return TB.uint32View[0] = TB.mantissaTable[TB.offsetTable[BB >> 10] + (1023 & BB)] + TB.exponentTable[BB >> 10], TB.floatView[0]
    }
  },
  38811: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => pB,
      g: () => yB,
      k: () => VB
    });
    const VB = BB => {
        const TB = ArrayBuffer.isView(BB) ? new Uint8Array(BB.buffer, BB.byteOffset, BB.byteLength) : new Uint8Array(BB);
        return "function" === typeof TB.toBase64 ? TB.toBase64() : function(BB) {
          const TB = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          let dB, VB, yB, pB, lB, JB, YB, gB = "",
            oB = 0;
          for (; oB < BB.length;) dB = BB[oB++], VB = oB < BB.length ? BB[oB++] : Number.NaN, yB = oB < BB.length ? BB[oB++] : Number.NaN, pB = dB >> 2, lB = (3 & dB) << 4 | VB >> 4, JB = (15 & VB) << 2 | yB >> 6, YB = 63 & yB, isNaN(VB) ? JB = YB = 64 : isNaN(yB) && (YB = 64), gB += TB.charAt(pB) + TB.charAt(lB) + TB.charAt(JB) + TB.charAt(YB);
          return gB
        }(TB)
      },
      yB = BB => atob(BB),
      pB = BB => "function" === typeof Uint8Array.fromBase64 ? Uint8Array.fromBase64(BB).buffer : function(BB) {
        const TB = yB(BB),
          dB = TB.length,
          VB = new Uint8Array(new ArrayBuffer(dB));
        for (let yB = 0; yB < dB; yB++) VB[yB] = TB.charCodeAt(yB);
        return VB.buffer
      }(BB)
  },
  38645: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => yB,
      c: () => lB
    });
    let VB = [];
    class yB {
      static SetImmediate(BB) {
        0 === VB.length && setTimeout((() => {
          const BB = VB;
          VB = [];
          for (const TB of BB) TB()
        }), 1), VB.push(BB)
      }
    }

    function pB(BB, TB, dB) {
      try {
        if (BB()) return TB(), !0
      } catch (VB) {
        return dB?.(VB), !0
      }
      return !1
    }
    const lB = function(BB, TB, dB) {
      let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
        yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
        lB = arguments.length > 6 ? arguments[6] : void 0;
      if ((!(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]) && pB(BB, TB, dB)) return null;
      const JB = setInterval((() => {
        pB(BB, TB, dB) ? clearInterval(JB) : (yB -= VB, yB < 0 && (clearInterval(JB), dB?.(new Error("Operation timed out after maximum retries. " + (lB || "")), !0)))
      }), VB);
      return () => clearInterval(JB)
    }
  },
  38799: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => VB
    });
    class VB {
      constructor() {
        this._xhr = "undefined" !== typeof _native && _native.XMLHttpRequest ? new _native.XMLHttpRequest : new XMLHttpRequest, this._requestURL = ""
      }
      static get IsCustomRequestAvailable() {
        return Object.keys(VB.CustomRequestHeaders).length > 0 || VB.CustomRequestModifiers.length > 0
      }
      static _CleanUrl(BB) {
        return BB = (BB = BB.replace("file:http:", "http:")).replace("file:https:", "https:")
      }
      static _ShouldSkipRequestModifications(BB) {
        return VB.SkipRequestModificationForBabylonCDN && (BB.includes("preview.babylonjs.com") || BB.includes("cdn.babylonjs.com"))
      }
      static _CollectCustomizations(BB) {
        const TB = {
          ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        };
        if (VB._ShouldSkipRequestModifications(BB)) return {
          url: BB,
          headers: TB
        };
        for (const yB in VB.CustomRequestHeaders) {
          const BB = VB.CustomRequestHeaders[yB];
          BB && (TB[yB] = BB)
        }
        const dB = {
          setRequestHeader: (BB, dB) => {
            TB[BB] = dB
          }
        };
        for (const yB of VB.CustomRequestModifiers) {
          if (VB._ShouldSkipRequestModifications(BB)) break;
          const TB = yB(dB, BB);
          "string" === typeof TB && (BB = TB)
        }
        return {
          url: BB,
          headers: TB
        }
      }
      static async FetchAsync(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const dB = TB.method ?? "GET";
        if ("undefined" !== typeof fetch) {
          const {
            url: yB,
            headers: pB
          } = VB._CollectCustomizations(VB._CleanUrl(BB), TB.headers ?? {});
          return await fetch(yB, {
            method: dB,
            headers: pB,
            body: TB.body ?? void 0
          })
        }
        return await new Promise(((yB, pB) => {
          const lB = new VB;
          lB.responseType = "arraybuffer", lB.addEventListener("readystatechange", (() => {
            if (4 === lB.readyState)
              if (lB.status >= 200 && lB.status < 300) {
                const BB = "undefined" !== typeof Headers ? new Headers : void 0,
                  TB = lB.getResponseHeader("Content-Type");
                TB && BB && BB.set("Content-Type", TB), "undefined" !== typeof Response ? yB(new Response(lB.response, {
                  status: lB.status,
                  statusText: lB.statusText,
                  headers: BB
                })) : yB({
                  ok: !0,
                  status: lB.status,
                  statusText: lB.statusText,
                  headers: {
                    get: BB => lB.getResponseHeader(BB)
                  },
                  arrayBuffer: async () => await Promise.resolve(lB.response)
                })
              } else pB(new Error(`HTTP ${lB.status} loading '${lB.requestURL}': ${lB.statusText}`))
          })), lB.open(dB, BB, TB.headers), lB.send(TB.body ?? null)
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
      addEventListener(BB, TB, dB) {
        this._xhr.addEventListener(BB, TB, dB)
      }
      removeEventListener(BB, TB, dB) {
        this._xhr.removeEventListener(BB, TB, dB)
      }
      abort() {
        this._xhr.abort()
      }
      send(BB) {
        this._xhr.send(BB)
      }
      open(BB, TB, dB) {
        const {
          url: yB,
          headers: pB
        } = VB._CollectCustomizations(TB, dB);
        this._requestURL = VB._CleanUrl(yB), this._xhr.open(BB, this._requestURL, !0);
        for (const VB in pB) this._xhr.setRequestHeader(VB, pB[VB])
      }
      setRequestHeader(BB, TB) {
        this._xhr.setRequestHeader(BB, TB)
      }
      getResponseHeader(BB) {
        return this._xhr.getResponseHeader(BB)
      }
    }
    VB.CustomRequestHeaders = {}, VB.CustomRequestModifiers = new Array, VB.SkipRequestModificationForBabylonCDN = !0
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);