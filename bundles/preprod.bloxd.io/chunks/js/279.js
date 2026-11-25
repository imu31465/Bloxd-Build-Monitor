export const id = 279;
export const ids = [279];
export const modules = {
  41167: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => mM,
      f: () => LM,
      h: () => nM,
      i: () => HM,
      m: () => QM,
      n: () => PM,
      r: () => zM
    });
    var OM = iM(39711),
      SM = iM(41176);

    function jM(MM, rM, iM, OM) {
      switch (rM) {
        case 5120: {
          let rM = MM.getInt8(iM);
          return OM && (rM = Math.max(rM / 127, -1)), rM
        }
        case 5121: {
          let rM = MM.getUint8(iM);
          return OM && (rM /= 255), rM
        }
        case 5122: {
          let rM = MM.getInt16(iM, !0);
          return OM && (rM = Math.max(rM / 32767, -1)), rM
        }
        case 5123: {
          let rM = MM.getUint16(iM, !0);
          return OM && (rM /= 65535), rM
        }
        case 5131:
          return (0, SM.c)(MM.getUint16(iM, !0));
        case 5124:
          return MM.getInt32(iM, !0);
        case 5125:
          return MM.getUint32(iM, !0);
        case 5126:
          return MM.getFloat32(iM, !0);
        default:
          throw new Error(`Invalid component type ${rM}`)
      }
    }

    function aM(MM, rM, iM, OM, jM) {
      switch (rM) {
        case 5120:
          OM && (jM = Math.round(127 * jM)), MM.setInt8(iM, jM);
          break;
        case 5121:
          OM && (jM = Math.round(255 * jM)), MM.setUint8(iM, jM);
          break;
        case 5122:
          OM && (jM = Math.round(32767 * jM)), MM.setInt16(iM, jM, !0);
          break;
        case 5123:
          OM && (jM = Math.round(65535 * jM)), MM.setUint16(iM, jM, !0);
          break;
        case 5131:
          MM.setUint16(iM, (0, SM.g)(jM), !0);
          break;
        case 5124:
          MM.setInt32(iM, jM, !0);
          break;
        case 5125:
          MM.setUint32(iM, jM, !0);
          break;
        case 5126:
          MM.setFloat32(iM, jM, !0);
          break;
        default:
          throw new Error(`Invalid component type ${rM}`)
      }
    }

    function PM(MM) {
      switch (MM) {
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
          throw new Error(`Invalid type '${MM}'`)
      }
    }

    function nM(MM, rM, iM, OM, SM, nM, QM, zM) {
      const LM = new Array(OM),
        mM = new Array(OM);
      if (MM instanceof Array) {
        let SM = rM / 4;
        const jM = iM / 4;
        for (let rM = 0; rM < nM; rM += OM) {
          for (let rM = 0; rM < OM; rM++) LM[rM] = mM[rM] = MM[SM + rM];
          zM(mM, rM);
          for (let rM = 0; rM < OM; rM++) LM[rM] !== mM[rM] && (MM[SM + rM] = mM[rM]);
          SM += jM
        }
      } else {
        const HM = ArrayBuffer.isView(MM) ? new DataView(MM.buffer, MM.byteOffset, MM.byteLength) : new DataView(MM),
          hM = PM(SM);
        for (let MM = 0; MM < nM; MM += OM) {
          for (let MM = 0, iM = rM; MM < OM; MM++, iM += hM) LM[MM] = mM[MM] = jM(HM, SM, iM, QM);
          zM(mM, MM);
          for (let MM = 0, iM = rM; MM < OM; MM++, iM += hM) LM[MM] !== mM[MM] && aM(HM, SM, iM, QM, mM[MM]);
          rM += iM
        }
      }
    }

    function QM(MM, rM, iM, SM, jM, aM, QM, zM) {
      const LM = rM * PM(iM),
        mM = QM * rM;
      if (5126 !== iM || jM !== LM) {
        const OM = new Float32Array(mM);
        return nM(MM, SM, jM, rM, iM, mM, aM, ((MM, iM) => {
          for (let SM = 0; SM < rM; SM++) OM[iM + SM] = MM[SM]
        })), OM
      }
      if (!(MM instanceof Array || MM instanceof Float32Array) || 0 !== SM || MM.length !== mM) {
        if (MM instanceof Array) {
          const rM = SM / 4;
          return MM.slice(rM, rM + mM)
        }
        if (ArrayBuffer.isView(MM)) {
          const rM = MM.byteOffset + SM;
          return 0 !== (3 & rM) && (OM.e.Warn("Float array must be aligned to 4-bytes border"), zM = !0), zM ? new Float32Array(MM.buffer.slice(rM, rM + mM * Float32Array.BYTES_PER_ELEMENT)) : new Float32Array(MM.buffer, rM, mM)
        }
        return new Float32Array(MM, SM, mM)
      }
      return zM ? MM.slice() : MM
    }

    function zM(MM, rM, iM, SM, jM, aM, QM) {
      const zM = PM(iM),
        LM = function(MM) {
          switch (MM) {
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
              throw new Error(`Invalid component type '${MM}'`)
          }
        }(iM),
        mM = aM * rM;
      if (Array.isArray(MM)) {
        if (0 !== (3 & SM) || 0 !== (3 & jM)) throw new Error("byteOffset and byteStride must be a multiple of 4 for number[] data.");
        const OM = SM / 4,
          PM = jM / 4;
        if (OM + (aM - 1) * PM + rM > MM.length) throw new Error("Last accessed index is out of bounds.");
        if (PM < rM) throw new Error("Data stride cannot be smaller than the component size.");
        if (PM !== rM) {
          const OM = new LM(mM);
          return nM(MM, SM, jM, rM, iM, mM, !1, ((MM, iM) => {
            for (let SM = 0; SM < rM; SM++) OM[iM + SM] = MM[SM]
          })), OM
        }
        return new LM(MM.slice(OM, OM + mM))
      }
      let HM, hM = SM;
      ArrayBuffer.isView(MM) ? (HM = MM.buffer, hM += MM.byteOffset) : HM = MM;
      if (hM + (aM - 1) * jM + rM * zM > HM.byteLength) throw new Error("Last accessed byte is out of bounds.");
      const JM = rM * zM;
      if (jM < JM) throw new Error("Byte stride cannot be smaller than the component's byte size.");
      if (jM !== JM) {
        const MM = new LM(mM),
          iM = new Uint8Array(HM, hM),
          OM = new Uint8Array(MM.buffer),
          SM = rM * zM;
        for (let rM = 0, PM = 0, nM = 0; rM < aM; rM++, PM += jM, nM += SM) OM.set(iM.subarray(PM, PM + SM), nM);
        return MM
      }
      return 1 !== zM && 0 !== (hM & zM - 1) && (OM.e.Warn("Array must be aligned to border of element size. Data will be copied."), QM = !0), QM ? new LM(HM.slice(hM, hM + mM * zM)) : new LM(HM, hM, mM)
    }

    function LM(MM, rM, iM, SM, jM, aM, QM, zM) {
      const LM = rM * PM(iM),
        mM = QM * rM;
      if (zM.length !== mM) throw new Error("Output length is not valid");
      if (5126 === iM && jM === LM)
        if (MM instanceof Array) {
          const rM = SM / 4;
          zM.set(MM, rM)
        } else if (ArrayBuffer.isView(MM)) {
        const rM = MM.byteOffset + SM;
        if (0 !== (3 & rM)) return OM.e.Warn("Float array must be aligned to 4-bytes border"), void zM.set(new Float32Array(MM.buffer.slice(rM, rM + mM * Float32Array.BYTES_PER_ELEMENT)));
        const iM = new Float32Array(MM.buffer, rM, mM);
        zM.set(iM)
      } else {
        const rM = new Float32Array(MM, SM, mM);
        zM.set(rM)
      } else nM(MM, SM, jM, rM, iM, mM, aM, ((MM, iM) => {
        for (let OM = 0; OM < rM; OM++) zM[iM + OM] = MM[OM]
      }))
    }

    function mM(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      if (Array.isArray(MM)) {
        for (let SM = 0; SM < rM; SM++)
          if (MM[iM + SM] - OM > 65535) return !0;
        return !1
      }
      return 4 === MM.BYTES_PER_ELEMENT
    }

    function HM(MM) {
      const rM = MM.buffer;
      if (rM instanceof ArrayBuffer) return MM;
      const iM = new ArrayBuffer(MM.byteLength);
      return new Uint8Array(iM).set(new Uint8Array(rM, MM.byteOffset, MM.byteLength)), iM
    }
  },
  40998: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => bM,
      c: () => CM,
      h: () => eM,
      e: () => WM,
      i: () => sM
    });
    class OM {
      constructor() {
        this.children = []
      }
      isValid(MM) {
        return !0
      }
      process(MM, rM, iM) {
        let OM = "";
        if (this.line) {
          let iM = this.line;
          const SM = rM.processor;
          if (SM) {
            SM.lineProcessor && (iM = SM.lineProcessor(iM, rM.isFragment, rM.processingContext));
            const OM = rM.processor?.attributeKeywordName ?? "attribute",
              jM = rM.isFragment && rM.processor?.varyingFragmentKeywordName ? rM.processor?.varyingFragmentKeywordName : !rM.isFragment && rM.processor?.varyingVertexKeywordName ? rM.processor?.varyingVertexKeywordName : "varying";
            if (!rM.isFragment && SM.attributeProcessor && this.line.startsWith(OM)) iM = SM.attributeProcessor(this.line, MM, rM.processingContext);
            else if (SM.varyingProcessor && (SM.varyingCheck?.(this.line, rM.isFragment) || !SM.varyingCheck && this.line.startsWith(jM))) iM = SM.varyingProcessor(this.line, rM.isFragment, MM, rM.processingContext);
            else if (SM.uniformProcessor && SM.uniformRegexp && SM.uniformRegexp.test(this.line)) rM.lookForClosingBracketForUniformBuffer || (iM = SM.uniformProcessor(this.line, rM.isFragment, MM, rM.processingContext));
            else if (SM.uniformBufferProcessor && SM.uniformBufferRegexp && SM.uniformBufferRegexp.test(this.line)) rM.lookForClosingBracketForUniformBuffer || (iM = SM.uniformBufferProcessor(this.line, rM.isFragment, rM.processingContext), rM.lookForClosingBracketForUniformBuffer = !0);
            else if (SM.textureProcessor && SM.textureRegexp && SM.textureRegexp.test(this.line)) iM = SM.textureProcessor(this.line, rM.isFragment, MM, rM.processingContext);
            else if ((SM.uniformProcessor || SM.uniformBufferProcessor) && this.line.startsWith("uniform") && !rM.lookForClosingBracketForUniformBuffer) {
              /uniform\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s+(\S+)\s*;/.test(this.line) ? SM.uniformProcessor && (iM = SM.uniformProcessor(this.line, rM.isFragment, MM, rM.processingContext)) : SM.uniformBufferProcessor && (iM = SM.uniformBufferProcessor(this.line, rM.isFragment, rM.processingContext), rM.lookForClosingBracketForUniformBuffer = !0)
            }
            rM.lookForClosingBracketForUniformBuffer && -1 !== this.line.indexOf("}") && (rM.lookForClosingBracketForUniformBuffer = !1, SM.endOfUniformBufferProcessor && (iM = SM.endOfUniformBufferProcessor(this.line, rM.isFragment, rM.processingContext)))
          }
          OM += iM + "\n"
        }
        for (const SM of this.children) OM += SM.process(MM, rM, iM);
        return this.additionalDefineKey && (MM[this.additionalDefineKey] = this.additionalDefineValue || "true", iM[this.additionalDefineKey] = MM[this.additionalDefineKey]), OM
      }
    }
    class SM {
      constructor() {
        this._lines = []
      }
      get currentLine() {
        return this._lines[this.lineIndex]
      }
      get canRead() {
        return this.lineIndex < this._lines.length - 1
      }
      set lines(MM) {
        this._lines.length = 0;
        for (const rM of MM) {
          if (!rM || "\r" === rM) continue;
          if ("#" === rM[0]) {
            this._lines.push(rM);
            continue
          }
          const MM = rM.trim();
          if (!MM) continue;
          if (MM.startsWith("//")) {
            this._lines.push(rM);
            continue
          }
          const iM = MM.indexOf(";");
          if (-1 === iM) this._lines.push(MM);
          else if (iM === MM.length - 1) MM.length > 1 && this._lines.push(MM);
          else {
            const MM = rM.split(";");
            for (let rM = 0; rM < MM.length; rM++) {
              let iM = MM[rM];
              iM && (iM = iM.trim(), iM && this._lines.push(iM + (rM !== MM.length - 1 ? ";" : "")))
            }
          }
        }
      }
    }
    class jM extends OM {
      process(MM, rM, iM) {
        for (let OM = 0; OM < this.children.length; OM++) {
          const SM = this.children[OM];
          if (SM.isValid(MM)) return SM.process(MM, rM, iM)
        }
        return ""
      }
    }
    class aM extends OM {
      isValid(MM) {
        return this.testExpression.isTrue(MM)
      }
    }
    class PM {
      isTrue(MM) {
        return !0
      }
      static postfixToInfix(MM) {
        const rM = [];
        for (const iM of MM)
          if (void 0 === PM._OperatorPriority[iM]) rM.push(iM);
          else {
            const MM = rM[rM.length - 1],
              OM = rM[rM.length - 2];
            rM.length -= 2, rM.push(`(${OM}${iM}${MM})`)
          } return rM[rM.length - 1]
      }
      static infixToPostfix(MM) {
        const rM = PM._InfixToPostfixCache.get(MM);
        if (rM) return rM.accessTime = Date.now(), rM.result;
        if (!MM.includes("&&") && !MM.includes("||") && !MM.includes(")") && !MM.includes("(")) return [MM];
        const iM = [];
        let OM = -1;
        const SM = () => {
            zM = zM.trim(), "" !== zM && (iM.push(zM), zM = "")
          },
          jM = MM => {
            OM < PM._Stack.length - 1 && (PM._Stack[++OM] = MM)
          },
          aM = () => PM._Stack[OM],
          nM = () => -1 === OM ? "!!INVALID EXPRESSION!!" : PM._Stack[OM--];
        let QM = 0,
          zM = "";
        for (; QM < MM.length;) {
          const rM = MM.charAt(QM),
            LM = QM < MM.length - 1 ? MM.substring(QM, 2 + QM) : "";
          if ("(" === rM) zM = "", jM(rM);
          else if (")" === rM) {
            for (SM(); - 1 !== OM && "(" !== aM();) iM.push(nM());
            nM()
          } else if (PM._OperatorPriority[LM] > 1) {
            for (SM(); - 1 !== OM && PM._OperatorPriority[aM()] >= PM._OperatorPriority[LM];) iM.push(nM());
            jM(LM), QM++
          } else zM += rM;
          QM++
        }
        for (SM(); - 1 !== OM;) "(" === aM() ? nM() : iM.push(nM());
        return PM._InfixToPostfixCache.size >= PM.InfixToPostfixCacheLimitSize && PM.ClearCache(), PM._InfixToPostfixCache.set(MM, {
          result: iM,
          accessTime: Date.now()
        }), iM
      }
      static ClearCache() {
        const MM = Array.from(PM._InfixToPostfixCache.entries()).sort(((MM, rM) => MM[1].accessTime - rM[1].accessTime));
        for (let rM = 0; rM < PM.InfixToPostfixCacheCleanupSize; rM++) PM._InfixToPostfixCache.delete(MM[rM][0])
      }
    }
    PM.InfixToPostfixCacheLimitSize = 5e4, PM.InfixToPostfixCacheCleanupSize = 25e3, PM._InfixToPostfixCache = new Map, PM._OperatorPriority = {
      ")": 0,
      "(": 1,
      "||": 2,
      "&&": 3
    }, PM._Stack = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    class nM extends PM {
      constructor(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super(), this.define = MM, this.not = rM
      }
      isTrue(MM) {
        let rM = void 0 !== MM[this.define];
        return this.not && (rM = !rM), rM
      }
    }
    class QM extends PM {
      isTrue(MM) {
        return this.leftOperand.isTrue(MM) || this.rightOperand.isTrue(MM)
      }
    }
    class zM extends PM {
      isTrue(MM) {
        return this.leftOperand.isTrue(MM) && this.rightOperand.isTrue(MM)
      }
    }
    class LM extends PM {
      constructor(MM, rM, iM) {
        super(), this.define = MM, this.operand = rM, this.testValue = iM
      }
      toString() {
        return `${this.define} ${this.operand} ${this.testValue}`
      }
      isTrue(MM) {
        let rM = !1;
        const iM = parseInt(void 0 != MM[this.define] ? MM[this.define] : this.define),
          OM = parseInt(void 0 != MM[this.testValue] ? MM[this.testValue] : this.testValue);
        if (isNaN(iM) || isNaN(OM)) return !1;
        switch (this.operand) {
          case ">":
            rM = iM > OM;
            break;
          case "<":
            rM = iM < OM;
            break;
          case "<=":
            rM = iM <= OM;
            break;
          case ">=":
            rM = iM >= OM;
            break;
          case "==":
            rM = iM === OM;
            break;
          case "!=":
            rM = iM !== OM
        }
        return rM
      }
    }
    var mM = iM(40990),
      HM = iM(40981);
    const hM = /defined\s*?\((.+?)\)/g,
      JM = /defined\s*?\[(.+?)\]/g,
      dM = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g,
      yM = /__decl__/,
      lM = /light\{X\}.(\w*)/g,
      EM = /\{X\}/g,
      UM = [],
      GM = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;

    function CM(MM) {
      MM.processor && MM.processor.initializeShaders && MM.processor.initializeShaders(MM.processingContext)
    }

    function eM(MM, rM, iM, OM) {
      rM.processor?.preProcessShaderCode && (MM = rM.processor.preProcessShaderCode(MM, rM.isFragment)), WM(MM, rM, (MM => {
        rM.processCodeAfterIncludes && (MM = rM.processCodeAfterIncludes(rM.isFragment ? "fragment" : "vertex", MM, rM.defines));
        const SM = function(MM, rM, iM) {
          let OM = function(MM, rM) {
            if (rM.processor?.noPrecision) return MM;
            const iM = rM.shouldUseHighPrecisionShader; - 1 === MM.indexOf("precision highp float") ? MM = iM ? "precision highp float;\n" + MM : "precision mediump float;\n" + MM : iM || (MM = MM.replace("precision highp float", "precision mediump float"));
            return MM
          }(MM, rM);
          if (!rM.processor) return OM;
          if (0 === rM.processor.shaderLanguage && -1 !== OM.indexOf("#version 3") && (OM = OM.replace("#version 300 es", ""), !rM.processor.parseGLES3)) return OM;
          const SM = rM.defines,
            jM = pM(rM, iM);
          rM.processor.preProcessor && (OM = rM.processor.preProcessor(OM, SM, jM, rM.isFragment, rM.processingContext));
          const aM = {};
          OM = RM(OM, jM, rM, aM), rM.processor.postProcessor && (OM = rM.processor.postProcessor(OM, SM, rM.isFragment, rM.processingContext, iM ? {
            drawBuffersExtensionDisabled: !iM.getCaps().drawBuffersExtension
          } : {}, jM, aM));
          iM?._features.needShaderCodeInlining && (OM = iM.inlineShaderCode(OM));
          return OM
        }(MM, rM, OM);
        iM(SM, MM)
      }))
    }

    function bM(MM, rM, iM) {
      return iM.processor && iM.processor.finalizeShaders ? iM.processor.finalizeShaders(MM, rM, iM.processingContext) : {
        vertexCode: MM,
        fragmentCode: rM
      }
    }

    function wM(MM) {
      const rM = /defined\((.+)\)/.exec(MM);
      if (rM && rM.length) return new nM(rM[1].trim(), "!" === MM[0]);
      const iM = ["==", "!=", ">=", "<=", "<", ">"];
      let OM = "",
        SM = 0;
      for (OM of iM)
        if (SM = MM.indexOf(OM), SM > -1) break;
      if (-1 === SM) return new nM(MM);
      const jM = MM.substring(0, SM).trim(),
        aM = MM.substring(SM + OM.length).trim();
      return new LM(jM, OM, aM)
    }

    function tM(MM, rM) {
      const iM = new aM,
        OM = MM.substring(0, rM);
      let SM = MM.substring(rM);
      return SM = SM.substring(0, (SM.indexOf("//") + 1 || SM.length + 1) - 1).trim(), iM.testExpression = "#ifdef" === OM ? new nM(SM) : "#ifndef" === OM ? new nM(SM, !0) : function(MM) {
        MM = MM.replace(hM, "defined[$1]");
        const rM = PM.infixToPostfix(MM),
          iM = [];
        for (const SM of rM)
          if ("||" !== SM && "&&" !== SM) iM.push(SM);
          else if (iM.length >= 2) {
          let MM = iM[iM.length - 1],
            rM = iM[iM.length - 2];
          iM.length -= 2;
          const OM = "&&" == SM ? new zM : new QM;
          "string" === typeof MM && (MM = MM.replace(JM, "defined($1)")), "string" === typeof rM && (rM = rM.replace(JM, "defined($1)")), OM.leftOperand = "string" === typeof rM ? wM(rM) : rM, OM.rightOperand = "string" === typeof MM ? wM(MM) : MM, iM.push(OM)
        }
        let OM = iM[iM.length - 1];
        return "string" === typeof OM && (OM = OM.replace(JM, "defined($1)")), "string" === typeof OM ? wM(OM) : OM
      }(SM), iM
    }

    function gM(MM, rM, iM, SM) {
      let jM;
      for (; uM(MM, iM, SM);) {
        jM = MM.currentLine;
        const aM = jM.substring(0, 5).toLowerCase();
        if ("#else" === aM) {
          const iM = new OM;
          return rM.children.push(iM), void uM(MM, iM, SM)
        }
        if ("#elif" === aM) {
          const MM = tM(jM, 5);
          rM.children.push(MM), iM = MM
        }
      }
    }

    function uM(MM, rM, iM) {
      for (; MM.canRead;) {
        MM.lineIndex++;
        const SM = MM.currentLine;
        if (SM.indexOf("#") >= 0) {
          const OM = GM.exec(SM);
          if (OM && OM.length) {
            switch (OM[0]) {
              case "#ifdef": {
                const OM = new jM;
                rM.children.push(OM);
                const aM = tM(SM, 6);
                OM.children.push(aM), gM(MM, OM, aM, iM);
                break
              }
              case "#else":
              case "#elif":
                return !0;
              case "#endif":
                return !1;
              case "#ifndef": {
                const OM = new jM;
                rM.children.push(OM);
                const aM = tM(SM, 7);
                OM.children.push(aM), gM(MM, OM, aM, iM);
                break
              }
              case "#if": {
                const OM = new jM,
                  aM = tM(SM, 3);
                rM.children.push(OM), OM.children.push(aM), gM(MM, OM, aM, iM);
                break
              }
            }
            continue
          }
        }
        const aM = new OM;
        if (aM.line = SM, rM.children.push(aM), "#" === SM[0] && "d" === SM[1]) {
          const MM = SM.replace(";", "").split(" ");
          aM.additionalDefineKey = MM[1], 3 === MM.length && (aM.additionalDefineValue = MM[2])
        }
      }
      return !1
    }

    function RM(MM, rM, iM, jM) {
      const aM = new OM,
        PM = new SM;
      return PM.lineIndex = -1, PM.lines = MM.split("\n"), uM(PM, aM, jM), aM.process(rM, iM, jM)
    }

    function pM(MM, rM) {
      const iM = MM.defines,
        OM = {};
      for (const SM of iM) {
        const MM = SM.replace("#define", "").replace(";", "").trim().split(" ");
        OM[MM[0]] = MM.length > 1 ? MM[1] : ""
      }
      return 0 === MM.processor?.shaderLanguage && (OM.GL_ES = "true"), OM.__VERSION__ = MM.version, OM[MM.platformName] = "true", (0, HM.f)(OM, rM?.isNDCHalfZRange, rM?.LOM, rM?.useExactSrgbConversions), OM
    }

    function WM(MM, rM, iM) {
      let OM;
      for (UM.length = 0; null !== (OM = dM.exec(MM));) UM.push(OM);
      let SM = [MM],
        jM = !1;
      for (const PM of UM) {
        let MM = PM[1];
        if (-1 !== MM.indexOf("__decl__") && (MM = MM.replace(yM, ""), rM.supportsUniformBuffers && (MM = MM.replace("Vertex", "Ubo").replace("Fragment", "Ubo")), MM += "Declaration"), !rM.includesShadersStore[MM]) {
          const OM = rM.shadersRepository + "ShadersInclude/" + MM + ".fx";
          return void sM.loadFile(OM, (OM => {
            rM.includesShadersStore[MM] = OM, WM(SM.join(""), rM, iM)
          }))
        } {
          let iM = rM.includesShadersStore[MM];
          if (PM[2]) {
            const MM = PM[3].split(",");
            for (let rM = 0; rM < MM.length; rM += 2) {
              const OM = new RegExp(MM[rM], "g"),
                SM = MM[rM + 1];
              iM = iM.replace(OM, SM)
            }
          }
          if (PM[4]) {
            const MM = PM[5];
            if (-1 !== MM.indexOf("..")) {
              const OM = MM.split(".."),
                SM = parseInt(OM[0]);
              let jM = parseInt(OM[1]),
                aM = iM.slice(0);
              iM = "", isNaN(jM) && (jM = rM.indexParameters[OM[1]]);
              for (let MM = SM; MM < jM; MM++) rM.supportsUniformBuffers || (aM = aM.replace(lM, ((MM, rM) => rM + "{X}"))), iM += aM.replace(EM, MM.toString()) + "\n"
            } else rM.supportsUniformBuffers || (iM = iM.replace(lM, ((MM, rM) => rM + "{X}"))), iM = iM.replace(EM, MM)
          }
          const OM = [];
          for (const MM of SM) {
            const rM = MM.split(PM[0]);
            for (let MM = 0; MM < rM.length - 1; MM++) OM.push(rM[MM]), OM.push(iM);
            OM.push(rM[rM.length - 1])
          }
          SM = OM, jM = jM || iM.indexOf("#include<") >= 0 || iM.indexOf("#include <") >= 0
        }
      }
      UM.length = 0;
      const aM = SM.join("");
      jM ? WM(aM.toString(), rM, iM) : iM(aM)
    }
    const sM = {
      loadFile: (MM, rM, iM, OM, SM, jM) => {
        throw (0, mM.n)("FileTools")
      }
    }
  },
  40981: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => SM,
      e: () => jM,
      f: () => PM,
      i: () => aM,
      k: () => nM
    });
    var OM = iM(40990);
    const SM = {};

    function jM(MM, rM) {
      return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (rM ? rM + "\n" : "") + MM
    }

    function aM(MM, rM, iM, jM, aM, PM, nM) {
      const QM = nM || SM.loadFile;
      if (!QM) throw (0, OM.n)("FileTools");
      return QM(MM, rM, iM, jM, aM, PM)
    }

    function PM(MM, rM, iM, OM) {
      if (MM) return rM ? MM.IS_NDC_HALF_ZRANGE = "" : delete MM.IS_NDC_HALF_ZRANGE, iM ? MM.USE_REVERSE_DEPTHBUFFER = "" : delete MM.USE_REVERSE_DEPTHBUFFER, void(OM ? MM.USE_EXACT_SRGB_CONVERSIONS = "" : delete MM.USE_EXACT_SRGB_CONVERSIONS);
      {
        let MM = "";
        return rM && (MM += "#define IS_NDC_HALF_ZRANGE"), iM && (MM && (MM += "\n"), MM += "#define USE_REVERSE_DEPTHBUFFER"), OM && (MM && (MM += "\n"), MM += "#define USE_EXACT_SRGB_CONVERSIONS"), MM
      }
    }

    function nM(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        OM = arguments.length > 3 ? arguments[3] : void 0;
      switch (MM) {
        case 3: {
          const MM = new Int8Array(rM);
          return OM && MM.set(new Int8Array(OM)), MM
        }
        case 0: {
          const MM = new Uint8Array(rM);
          return OM && MM.set(new Uint8Array(OM)), MM
        }
        case 4: {
          const MM = "number" !== typeof rM ? new Int16Array(rM) : new Int16Array(iM ? rM / 2 : rM);
          return OM && MM.set(new Int16Array(OM)), MM
        }
        case 5:
        case 8:
        case 9:
        case 10:
        case 2: {
          const MM = "number" !== typeof rM ? new Uint16Array(rM) : new Uint16Array(iM ? rM / 2 : rM);
          return OM && MM.set(new Uint16Array(OM)), MM
        }
        case 6: {
          const MM = "number" !== typeof rM ? new Int32Array(rM) : new Int32Array(iM ? rM / 4 : rM);
          return OM && MM.set(new Int32Array(OM)), MM
        }
        case 7:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15: {
          const MM = "number" !== typeof rM ? new Uint32Array(rM) : new Uint32Array(iM ? rM / 4 : rM);
          return OM && MM.set(new Uint32Array(OM)), MM
        }
        case 1: {
          const MM = "number" !== typeof rM ? new Float32Array(rM) : new Float32Array(iM ? rM / 4 : rM);
          return OM && MM.set(new Float32Array(OM)), MM
        }
      }
      const SM = new Uint8Array(rM);
      return OM && SM.set(new Uint8Array(OM)), SM
    }
  },
  40990: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => QM,
      g: () => zM,
      j: () => nM,
      n: () => SM
    });
    const OM = {};

    function SM(MM) {
      if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !OM[MM]) return OM[MM] = !0, `${MM} needs to be imported before as it contains a side-effect required by your code.`
    }
    const jM = {};
    let aM = !1,
      PM = 0;

    function nM(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const OM = function() {
        if ((iM || aM) && 0 === PM) {
          const iM = `${MM}.${rM}`;
          jM[iM] || (jM[iM] = !0, console.warn(`[Babylon.js] ${iM}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
        }
      };
      return OM.__isSideEffectStub = !0, OM
    }

    function QM(MM) {
      return !!MM && !MM.__isSideEffectStub
    }

    function zM(MM, rM) {
      return {
        get() {},
        set(MM) {
          Object.defineProperty(this, rM, {
            value: MM,
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
  40972: (MM, rM, iM) => {
    function OM() {
      return "undefined" !== typeof window
    }

    function SM() {
      return "undefined" !== typeof navigator
    }

    function jM() {
      return "undefined" !== typeof document
    }

    function aM(MM) {
      let rM = "",
        iM = MM.firstChild;
      for (; iM;) 3 === iM.nodeType && (rM += iM.textContent), iM = iM.nextSibling;
      return rM
    }
    iM.d(rM, {
      c: () => aM,
      g: () => jM,
      k: () => SM,
      l: () => OM
    })
  },
  41156: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => OM,
      e: () => SM,
      i: () => jM
    });
    class OM extends Error {}
    OM._setPrototypeOf = Object.setPrototypeOf || ((MM, rM) => (MM.__proto__ = rM, MM));
    const SM = {
      MeshInvalidPositionsError: 0,
      UnsupportedTextureError: 1e3,
      GLTFLoaderUnexpectedMagicError: 2e3,
      SceneLoaderError: 3e3,
      LoadFileError: 4e3,
      RequestFileError: 4001,
      ReadFileError: 4002
    };
    class jM extends OM {
      constructor(MM, rM, iM) {
        super(MM), this.errorCode = rM, this.innerError = iM, this.name = "RuntimeError", OM._setPrototypeOf(this, jM.prototype)
      }
    }
  },
  41145: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => pM,
      f: () => EM,
      j: () => tM,
      k: () => uM,
      n: () => bM,
      p: () => CM,
      s: () => eM,
      u: () => ZM,
      w: () => wM,
      x: () => UM
    });
    var OM = iM(41148),
      SM = iM(40972),
      jM = iM(38068);
    class aM {}
    aM.FilesToLoad = {};
    var PM = iM(41156),
      nM = iM(41160),
      QM = iM(38064),
      zM = iM(40981),
      LM = iM(40998),
      mM = iM(39711),
      HM = iM(41003),
      hM = iM(41167);
    const JM = new RegExp(/^data:([^,]+\/[^,]+)?;base64,/i);
    class dM extends PM.i {
      constructor(MM, rM) {
        super(MM, PM.e.LoadFileError), this.name = "LoadFileError", PM.b._setPrototypeOf(this, dM.prototype), rM instanceof OM.e ? this.request = rM : this.file = rM
      }
    }
    class yM extends PM.i {
      constructor(MM, rM) {
        super(MM, PM.e.RequestFileError), this.request = rM, this.name = "RequestFileError", PM.b._setPrototypeOf(this, yM.prototype)
      }
    }
    class lM extends PM.i {
      constructor(MM, rM) {
        super(MM, PM.e.ReadFileError), this.file = rM, this.name = "ReadFileError", PM.b._setPrototypeOf(this, lM.prototype)
      }
    }
    const EM = {
        DefaultRetryStrategy: class {
          static ExponentialBackoff() {
            let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
              rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
            return (iM, OM, SM) => 0 !== OM.status || SM >= MM || -1 !== iM.indexOf("file:") ? -1 : Math.pow(2, SM) * rM
          }
        }.ExponentialBackoff(),
        BaseUrl: "",
        CorsBehavior: "anonymous",
        PreprocessUrl: MM => MM,
        ScriptBaseUrl: "",
        ScriptPreprocessUrl: MM => MM,
        CleanUrl: MM => MM = MM.replace(/#/gm, "%23")
      },
      UM = (MM, rM) => {
        if ((!MM || 0 !== MM.indexOf("data:")) && EM.CorsBehavior)
          if ("string" === typeof EM.CorsBehavior || EM.CorsBehavior instanceof String) rM.crossOrigin = EM.CorsBehavior;
          else {
            const iM = EM.CorsBehavior(MM);
            iM && (rM.crossOrigin = iM)
          }
      },
      GM = {
        getRequiredSize: null
      },
      CM = function(MM, rM, iM, SM) {
        let jM, PM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
          zM = arguments.length > 5 ? arguments[5] : void 0,
          LM = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : QM.c.LastCreatedEngine;
        if ("undefined" === typeof HTMLImageElement && !LM?._features.forceBitmapOverHTMLImageElement) return iM("LoadImage is only supported in web or BabylonNative environments."), null;
        if (LM?._features.forceBitmapOverHTMLImageElement && "string" !== typeof MM && "undefined" !== typeof Blob) {
          let OM;
          if (MM instanceof Blob) OM = MM;
          else {
            const rM = MM instanceof ArrayBuffer ? MM : (0, hM.i)(MM);
            OM = new Blob([rM], {
              type: PM
            })
          }
          return LM.createImageBitmap(OM, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...zM
          }).then(rM).catch((rM => {
            iM && iM("Error while trying to load image: " + MM, rM)
          })), null
        }
        let mM = !1;
        if (MM instanceof ArrayBuffer || ArrayBuffer.isView(MM))
          if ("undefined" !== typeof Blob && "undefined" !== typeof URL) {
            let rM;
            rM = MM instanceof ArrayBuffer ? MM : (0, hM.i)(MM), jM = URL.createObjectURL(new Blob([rM], {
              type: PM
            })), mM = !0
          } else jM = `data:${PM};base64,` + (0, nM.j)(MM);
        else MM instanceof Blob ? (jM = URL.createObjectURL(MM), mM = !0) : (jM = EM.CleanUrl(MM), jM = EM.PreprocessUrl(jM));
        const HM = rM => {
          if (iM) {
            const OM = jM || MM.toString();
            iM(`Error while trying to load image: ${0===OM.indexOf("http")||OM.length<=128?OM:OM.slice(0,128)+"..."}`, rM)
          }
        };
        if (LM?._features.forceBitmapOverHTMLImageElement) return bM(jM, (OM => {
          LM.createImageBitmap(new Blob([OM], {
            type: PM
          }), {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...zM
          }).then((MM => {
            rM(MM), mM && URL.revokeObjectURL(jM)
          })).catch((rM => {
            iM && iM("Error while trying to load image: " + MM, rM)
          }))
        }), void 0, SM || void 0, !0, ((MM, rM) => {
          HM(rM)
        })), null;
        const JM = new Image;
        if (GM.getRequiredSize) {
          const rM = GM.getRequiredSize(MM);
          rM.width && (JM.width = rM.width), rM.height && (JM.height = rM.height)
        }
        UM(jM, JM);
        const dM = [],
          yM = () => {
            for (const MM of dM) MM.target.removeEventListener(MM.name, MM.handler);
            dM.length = 0
          };
        dM.push({
          target: JM,
          name: "load",
          handler: () => {
            yM(), rM(JM), mM && JM.src && URL.revokeObjectURL(JM.src)
          }
        }), dM.push({
          target: JM,
          name: "error",
          handler: MM => {
            yM(), HM(MM), mM && JM.src && URL.revokeObjectURL(JM.src)
          }
        }), dM.push({
          target: document,
          name: "securitypolicyviolation",
          handler: MM => {
            if (MM.blockedURI !== JM.src || "aL" === MM.disposition) return;
            yM();
            const rM = new Error(`CSP violation of policy ${MM.effectiveDirective} ${MM.blockedURI}. Current policy is ${MM.originalPolicy}`);
            QM.c.UseFallbackTexture = !1, HM(rM), mM && JM.src && URL.revokeObjectURL(JM.src), JM.src = ""
          }
        }), (() => {
          for (const MM of dM) MM.target.addEventListener(MM.name, MM.handler)
        })();
        const lM = "blob:" === jM.substring(0, 5),
          CM = "data:" === jM.substring(0, 5),
          eM = () => {
            lM || CM || !OM.e.IsCustomRequestAvailable ? JM.src = jM : bM(jM, ((MM, rM, iM) => {
              const OM = new Blob([MM], {
                  type: !PM && iM ? iM : PM
                }),
                SM = URL.createObjectURL(OM);
              mM = !0, JM.src = SM
            }), void 0, SM || void 0, !0, ((MM, rM) => {
              HM(rM)
            }))
          },
          wM = () => {
            SM && SM.loadImage(jM, JM)
          };
        if (!lM && !CM && SM && SM.enableTexturesOffline) SM.open(wM, eM);
        else {
          if (-1 !== jM.indexOf("file:")) {
            const MM = decodeURIComponent(jM.substring(5).toLowerCase());
            if (aM.FilesToLoad[MM] && "undefined" !== typeof URL) {
              try {
                let rM;
                try {
                  rM = URL.createObjectURL(aM.FilesToLoad[MM])
                } catch (tM) {
                  rM = URL.createObjectURL(aM.FilesToLoad[MM])
                }
                JM.src = rM, mM = !0
              } catch (gM) {
                JM.src = ""
              }
              return JM
            }
          }
          eM()
        }
        return JM
      },
      eM = (MM, rM, iM, OM, SM) => {
        const aM = new FileReader,
          PM = {
            onCompleteObservable: new jM.d,
            abort: () => aM.abort()
          };
        return aM.onloadend = () => PM.onCompleteObservable.notifyObservers(PM), SM && (aM.onerror = () => {
          SM(new lM(`Unable to read ${MM.name}`, MM))
        }), aM.onload = MM => {
          rM(MM.target.result)
        }, iM && (aM.onprogress = iM), OM ? aM.readAsArrayBuffer(MM) : aM.readAsText(MM), PM
      },
      bM = (MM, rM, iM, OM, SM, nM, QM) => {
        if (MM.name) return eM(MM, rM, iM, SM, nM ? MM => {
          nM(void 0, MM)
        } : void 0);
        const zM = MM;
        if (-1 !== zM.indexOf("file:")) {
          let MM = decodeURIComponent(zM.substring(5).toLowerCase());
          0 === MM.indexOf("./") && (MM = MM.substring(2));
          const OM = aM.FilesToLoad[MM];
          if (OM) return eM(OM, rM, iM, SM, nM ? MM => nM(void 0, new dM(MM.message, MM.file)) : void 0)
        }
        const {
          match: LM,
          type: hM
        } = RM(zM);
        if (LM) {
          const MM = {
            onCompleteObservable: new jM.d,
            abort: () => () => {}
          };
          try {
            const MM = SM ? pM(zM) : WM(zM);
            rM(MM, void 0, hM)
          } catch (PM) {
            nM ? nM(void 0, PM) : mM.e.Error(PM.message || "Failed to parse the Data URL")
          }
          return HM.c.SetImmediate((() => {
            MM.onCompleteObservable.notifyObservers(MM)
          })), MM
        }
        return wM(zM, ((MM, iM) => {
          rM(MM, iM?.responseURL, iM?.getResponseHeader("content-type"))
        }), iM, OM, SM, nM ? MM => {
          nM(MM.request, new dM(MM.message, MM.request))
        } : void 0, QM)
      },
      wM = (MM, rM, iM, aM, PM, nM, zM) => {
        null !== aM && (aM ?? (aM = QM.c.LastCreatedScene?.offlineProvider)), MM = EM.CleanUrl(MM), MM = EM.PreprocessUrl(MM);
        const LM = EM.BaseUrl + MM;
        let HM = !1;
        const hM = {
            onCompleteObservable: new jM.d,
            abort: () => HM = !0
          },
          JM = () => {
            let MM, jM = new OM.e,
              aM = null;
            const QM = () => {
              jM && (iM && jM.removeEventListener("progress", iM), MM && jM.removeEventListener("readystatechange", MM), jM.removeEventListener("loadend", JM))
            };
            let JM = () => {
              QM(), hM.onCompleteObservable.notifyObservers(hM), hM.onCompleteObservable.clear(), iM = void 0, MM = null, JM = null, nM = void 0, zM = void 0, rM = void 0
            };
            hM.abort = () => {
              HM = !0, JM && JM(), jM && jM.readyState !== (XMLHttpRequest.DONE || 4) && jM.abort(), null !== aM && (clearTimeout(aM), aM = null), jM = null
            };
            const dM = MM => {
                const rM = MM.message || "Unknown error";
                nM && jM ? nM(new yM(rM, jM)) : mM.e.Error(rM)
              },
              lM = mM => {
                if (jM) {
                  if (jM.open("GET", LM), zM) try {
                    zM(jM)
                  } catch (hM) {
                    return void dM(hM)
                  }
                  PM && (jM.responseType = "arraybuffer"), iM && jM.addEventListener("progress", iM), JM && jM.addEventListener("loadend", JM), MM = () => {
                    if (!HM && jM && jM.readyState === (XMLHttpRequest.DONE || 4)) {
                      if (MM && jM.removeEventListener("readystatechange", MM), jM.status >= 200 && jM.status < 300 || 0 === jM.status && (!(0, SM.l)() || gM())) {
                        const MM = PM ? jM.response : jM.responseText;
                        if (null !== MM) {
                          try {
                            rM && rM(MM, jM)
                          } catch (hM) {
                            dM(hM)
                          }
                          return
                        }
                      }
                      const iM = EM.DefaultRetryStrategy;
                      if (iM) {
                        const MM = iM(LM, jM, mM);
                        if (-1 !== MM) return QM(), jM = new OM.e, void(aM = setTimeout((() => lM(mM + 1)), MM))
                      }
                      const zM = new yM("Error status: " + jM.status + " " + jM.statusText + " - Unable to load " + LM, jM);
                      nM && nM(zM)
                    }
                  }, jM.addEventListener("readystatechange", MM), jM.send()
                }
              };
            lM(0)
          };
        if (aM && aM.enableSceneOffline && !MM.startsWith("blob:")) {
          const OM = MM => {
              MM && MM.status > 400 ? nM && nM(MM) : JM()
            },
            SM = () => {
              aM && aM.loadFile(EM.BaseUrl + MM, (MM => {
                !HM && rM && rM(MM), hM.onCompleteObservable.notifyObservers(hM)
              }), iM ? MM => {
                !HM && iM && iM(MM)
              } : void 0, OM, PM)
            };
          aM.open(SM, OM)
        } else JM();
        return hM
      },
      tM = MM => {
        const {
          match: rM,
          type: iM
        } = RM(MM);
        if (rM) return iM || void 0;
        const OM = MM.lastIndexOf(".");
        switch (MM.substring(OM + 1).toLowerCase()) {
          case "glb":
            return "model/gltf-binary";
          case "bin":
            return "application/octet-stream";
          case "dD":
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
      gM = () => "undefined" !== typeof location && "file:" === location.protocol,
      uM = MM => JM.test(MM),
      RM = MM => {
        const rM = JM.exec(MM);
        if (null === rM || 0 === rM.length) return {
          match: !1,
          type: ""
        };
        return {
          match: !0,
          type: rM[0].replace("data:", "").replace(";base64,", "")
        }
      };

    function pM(MM) {
      return (0, nM.d)(MM.split(",")[1])
    }
    const WM = MM => (0, nM.f)(MM.split(",")[1]);
    let sM;
    const DM = (MM, rM, iM, OM, SM, jM, aM, PM, nM, QM) => {
      sM = {
        DecodeBase64UrlToBinary: MM,
        DecodeBase64UrlToString: rM,
        DefaultRetryStrategy: iM.DefaultRetryStrategy,
        BaseUrl: iM.BaseUrl,
        CorsBehavior: iM.CorsBehavior,
        PreprocessUrl: iM.PreprocessUrl,
        IsBase64DataUrl: OM,
        IsFileURL: SM,
        LoadFile: jM,
        LoadImage: aM,
        ReadFile: PM,
        RequestFile: nM,
        SetCorsBehavior: QM
      }, Object.defineProperty(sM, "DefaultRetryStrategy", {
        get: function() {
          return iM.DefaultRetryStrategy
        },
        set: function(MM) {
          iM.DefaultRetryStrategy = MM
        }
      }), Object.defineProperty(sM, "BaseUrl", {
        get: function() {
          return iM.BaseUrl
        },
        set: function(MM) {
          iM.BaseUrl = MM
        }
      }), Object.defineProperty(sM, "PreprocessUrl", {
        get: function() {
          return iM.PreprocessUrl
        },
        set: function(MM) {
          iM.PreprocessUrl = MM
        }
      }), Object.defineProperty(sM, "CorsBehavior", {
        get: function() {
          return iM.CorsBehavior
        },
        set: function(MM) {
          iM.CorsBehavior = MM
        }
      })
    };
    let kM = !1;

    function ZM() {
      kM || (kM = !0, DM(pM, WM, EM, uM, gM, bM, CM, eM, wM, UM), zM.c.loadFile = bM, zM.c.loadImage = CM, LM.i.loadFile = bM)
    }
  },
  41176: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => PM,
      e: () => jM,
      g: () => aM
    });
    let OM = null;

    function SM() {
      if (OM) return OM;
      const MM = new ArrayBuffer(4),
        rM = new Float32Array(MM),
        iM = new Uint32Array(MM),
        SM = new Uint32Array(512),
        jM = new Uint32Array(512);
      for (let OM = 0; OM < 256; ++OM) {
        const MM = OM - 127;
        MM < -24 ? (SM[OM] = 0, SM[256 | OM] = 32768, jM[OM] = 24, jM[256 | OM] = 24) : MM < -14 ? (SM[OM] = 1024 >> -MM - 14, SM[256 | OM] = 1024 >> -MM - 14 | 32768, jM[OM] = -MM - 1, jM[256 | OM] = -MM - 1) : MM <= 15 ? (SM[OM] = MM + 15 << 10, SM[256 | OM] = MM + 15 << 10 | 32768, jM[OM] = 13, jM[256 | OM] = 13) : MM < 128 ? (SM[OM] = 31744, SM[256 | OM] = 64512, jM[OM] = 24, jM[256 | OM] = 24) : (SM[OM] = 31744, SM[256 | OM] = 64512, jM[OM] = 13, jM[256 | OM] = 13)
      }
      const aM = new Uint32Array(2048),
        PM = new Uint32Array(64),
        nM = new Uint32Array(64);
      for (let OM = 1; OM < 1024; ++OM) {
        let MM = OM << 13,
          rM = 0;
        for (; 0 === (8388608 & MM);) MM <<= 1, rM -= 8388608;
        MM &= -8388609, rM += 947912704, aM[OM] = MM | rM
      }
      for (let OM = 1024; OM < 2048; ++OM) aM[OM] = 939524096 + (OM - 1024 << 13);
      for (let OM = 1; OM < 31; ++OM) PM[OM] = OM << 23;
      PM[31] = 1199570944, PM[32] = 2147483648;
      for (let OM = 33; OM < 63; ++OM) PM[OM] = 2147483648 + (OM - 32 << 23);
      PM[63] = 3347054592;
      for (let OM = 1; OM < 64; ++OM) 32 !== OM && (nM[OM] = 1024);
      return OM = {
        floatView: rM,
        uint32View: iM,
        baseTable: SM,
        shiftTable: jM,
        mantissaTable: aM,
        exponentTable: PM,
        offsetTable: nM
      }, OM
    }
    const jM = 65504;

    function aM(MM) {
      const rM = SM();
      rM.floatView[0] = MM;
      const iM = rM.uint32View[0],
        OM = iM >> 23 & 511;
      return rM.baseTable[OM] + ((8388607 & iM) >> rM.shiftTable[OM])
    }

    function PM(MM) {
      const rM = SM();
      return rM.uint32View[0] = rM.mantissaTable[rM.offsetTable[MM >> 10] + (1023 & MM)] + rM.exponentTable[MM >> 10], rM.floatView[0]
    }
  },
  41160: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => jM,
      f: () => SM,
      j: () => OM
    });
    const OM = MM => {
        const rM = ArrayBuffer.isView(MM) ? new Uint8Array(MM.buffer, MM.byteOffset, MM.byteLength) : new Uint8Array(MM);
        return "function" === typeof rM.toBase64 ? rM.toBase64() : function(MM) {
          const rM = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          let iM, OM, SM, jM, aM, PM, nM, QM = "",
            zM = 0;
          for (; zM < MM.length;) iM = MM[zM++], OM = zM < MM.length ? MM[zM++] : Number.NaN, SM = zM < MM.length ? MM[zM++] : Number.NaN, jM = iM >> 2, aM = (3 & iM) << 4 | OM >> 4, PM = (15 & OM) << 2 | SM >> 6, nM = 63 & SM, isNaN(OM) ? PM = nM = 64 : isNaN(SM) && (nM = 64), QM += rM.charAt(jM) + rM.charAt(aM) + rM.charAt(PM) + rM.charAt(nM);
          return QM
        }(rM)
      },
      SM = MM => atob(MM),
      jM = MM => "function" === typeof Uint8Array.fromBase64 ? Uint8Array.fromBase64(MM).buffer : function(MM) {
        const rM = SM(MM),
          iM = rM.length,
          OM = new Uint8Array(new ArrayBuffer(iM));
        for (let SM = 0; SM < iM; SM++) OM[SM] = rM.charCodeAt(SM);
        return OM.buffer
      }(MM)
  },
  41003: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => SM,
      d: () => aM
    });
    let OM = [];
    class SM {
      static SetImmediate(MM) {
        0 === OM.length && setTimeout((() => {
          const MM = OM;
          OM = [];
          for (const rM of MM) rM()
        }), 1), OM.push(MM)
      }
    }

    function jM(MM, rM, iM) {
      try {
        if (MM()) return rM(), !0
      } catch (OM) {
        return iM?.(OM), !0
      }
      return !1
    }
    const aM = function(MM, rM, iM) {
      let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
        SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
        aM = arguments.length > 6 ? arguments[6] : void 0;
      if ((!(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]) && jM(MM, rM, iM)) return null;
      const PM = setInterval((() => {
        jM(MM, rM, iM) ? clearInterval(PM) : (SM -= OM, SM < 0 && (clearInterval(PM), iM?.(new Error("Operation timed out after maximum retries. " + (aM || "")), !0)))
      }), OM);
      return () => clearInterval(PM)
    }
  },
  41148: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => OM
    });
    class OM {
      constructor() {
        this._xhr = "undefined" !== typeof _native && _native.XMLHttpRequest ? new _native.XMLHttpRequest : new XMLHttpRequest, this._requestURL = ""
      }
      static get IsCustomRequestAvailable() {
        return Object.keys(OM.CustomRequestHeaders).length > 0 || OM.CustomRequestModifiers.length > 0
      }
      static _CleanUrl(MM) {
        return MM = (MM = MM.replace("file:http:", "http:")).replace("file:https:", "https:")
      }
      static _ShouldSkipRequestModifications(MM) {
        return OM.SkipRequestModificationForBabylonCDN && (MM.includes("preview.babylonjs.com") || MM.includes("cdn.babylonjs.com"))
      }
      static _CollectCustomizations(MM) {
        const rM = {
          ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        };
        if (OM._ShouldSkipRequestModifications(MM)) return {
          url: MM,
          headers: rM
        };
        for (const SM in OM.CustomRequestHeaders) {
          const MM = OM.CustomRequestHeaders[SM];
          MM && (rM[SM] = MM)
        }
        const iM = {
          setRequestHeader: (MM, iM) => {
            rM[MM] = iM
          }
        };
        for (const SM of OM.CustomRequestModifiers) {
          if (OM._ShouldSkipRequestModifications(MM)) break;
          const rM = SM(iM, MM);
          "string" === typeof rM && (MM = rM)
        }
        return {
          url: MM,
          headers: rM
        }
      }
      static async FetchAsync(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const iM = rM.method ?? "GET";
        if ("undefined" !== typeof fetch) {
          const {
            url: SM,
            headers: jM
          } = OM._CollectCustomizations(OM._CleanUrl(MM), rM.headers ?? {});
          return await fetch(SM, {
            method: iM,
            headers: jM,
            body: rM.body ?? void 0
          })
        }
        return await new Promise(((SM, jM) => {
          const aM = new OM;
          aM.responseType = "arraybuffer", aM.addEventListener("readystatechange", (() => {
            if (4 === aM.readyState)
              if (aM.status >= 200 && aM.status < 300) {
                const MM = "undefined" !== typeof Headers ? new Headers : void 0,
                  rM = aM.getResponseHeader("Content-Type");
                rM && MM && MM.set("Content-Type", rM), "undefined" !== typeof Response ? SM(new Response(aM.response, {
                  status: aM.status,
                  statusText: aM.statusText,
                  headers: MM
                })) : SM({
                  ok: !0,
                  status: aM.status,
                  statusText: aM.statusText,
                  headers: {
                    get: MM => aM.getResponseHeader(MM)
                  },
                  arrayBuffer: async () => await Promise.resolve(aM.response)
                })
              } else jM(new Error(`HTTP ${aM.status} loading '${aM.requestURL}': ${aM.statusText}`))
          })), aM.open(iM, MM, rM.headers), aM.send(rM.body ?? null)
        }))
      }
      get requestURL() {
        return this._requestURL
      }
      get onprogress() {
        return this._xhr.onprogress
      }
      set onprogress(MM) {
        this._xhr.onprogress = MM
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
      set responseType(MM) {
        this._xhr.responseType = MM
      }
      get timeout() {
        return this._xhr.timeout
      }
      set timeout(MM) {
        this._xhr.timeout = MM
      }
      addEventListener(MM, rM, iM) {
        this._xhr.addEventListener(MM, rM, iM)
      }
      removeEventListener(MM, rM, iM) {
        this._xhr.removeEventListener(MM, rM, iM)
      }
      abort() {
        this._xhr.abort()
      }
      send(MM) {
        this._xhr.send(MM)
      }
      open(MM, rM, iM) {
        const {
          url: SM,
          headers: jM
        } = OM._CollectCustomizations(rM, iM);
        this._requestURL = OM._CleanUrl(SM), this._xhr.open(MM, this._requestURL, !0);
        for (const OM in jM) this._xhr.setRequestHeader(OM, jM[OM])
      }
      setRequestHeader(MM, rM) {
        this._xhr.setRequestHeader(MM, rM)
      }
      getResponseHeader(MM) {
        return this._xhr.getResponseHeader(MM)
      }
    }
    OM.CustomRequestHeaders = {}, OM.CustomRequestModifiers = new Array, OM.SkipRequestModificationForBabylonCDN = !0
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);