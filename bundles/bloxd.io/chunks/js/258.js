export const id = 258;
export const ids = [258];
export const modules = {
  40125: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => rB,
      c: () => pB,
      e: () => uB,
      i: () => sB,
      m: () => UB,
      p: () => NB,
      t: () => aB
    });
    var QB = zB(38783),
      nB = zB(40130);

    function dB(BB, jB, zB, QB) {
      switch (jB) {
        case 5120: {
          let jB = BB.getInt8(zB);
          return QB && (jB = Math.max(jB / 127, -1)), jB
        }
        case 5121: {
          let jB = BB.getUint8(zB);
          return QB && (jB /= 255), jB
        }
        case 5122: {
          let jB = BB.getInt16(zB, !0);
          return QB && (jB = Math.max(jB / 32767, -1)), jB
        }
        case 5123: {
          let jB = BB.getUint16(zB, !0);
          return QB && (jB /= 65535), jB
        }
        case 5131:
          return (0, nB.c)(BB.getUint16(zB, !0));
        case 5124:
          return BB.getInt32(zB, !0);
        case 5125:
          return BB.getUint32(zB, !0);
        case 5126:
          return BB.getFloat32(zB, !0);
        default:
          throw new Error(`Invalid component type ${jB}`)
      }
    }

    function IB(BB, jB, zB, QB, dB) {
      switch (jB) {
        case 5120:
          QB && (dB = Math.round(127 * dB)), BB.setInt8(zB, dB);
          break;
        case 5121:
          QB && (dB = Math.round(255 * dB)), BB.setUint8(zB, dB);
          break;
        case 5122:
          QB && (dB = Math.round(32767 * dB)), BB.setInt16(zB, dB, !0);
          break;
        case 5123:
          QB && (dB = Math.round(65535 * dB)), BB.setUint16(zB, dB, !0);
          break;
        case 5131:
          BB.setUint16(zB, (0, nB.f)(dB), !0);
          break;
        case 5124:
          BB.setInt32(zB, dB, !0);
          break;
        case 5125:
          BB.setUint32(zB, dB, !0);
          break;
        case 5126:
          BB.setFloat32(zB, dB, !0);
          break;
        default:
          throw new Error(`Invalid component type ${jB}`)
      }
    }

    function NB(BB) {
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

    function uB(BB, jB, zB, QB, nB, uB, UB, aB) {
      const pB = new Array(QB),
        rB = new Array(QB);
      if (BB instanceof Array) {
        let nB = jB / 4;
        const dB = zB / 4;
        for (let jB = 0; jB < uB; jB += QB) {
          for (let jB = 0; jB < QB; jB++) pB[jB] = rB[jB] = BB[nB + jB];
          aB(rB, jB);
          for (let jB = 0; jB < QB; jB++) pB[jB] !== rB[jB] && (BB[nB + jB] = rB[jB]);
          nB += dB
        }
      } else {
        const sB = ArrayBuffer.isView(BB) ? new DataView(BB.buffer, BB.byteOffset, BB.byteLength) : new DataView(BB),
          JB = NB(nB);
        for (let BB = 0; BB < uB; BB += QB) {
          for (let BB = 0, zB = jB; BB < QB; BB++, zB += JB) pB[BB] = rB[BB] = dB(sB, nB, zB, UB);
          aB(rB, BB);
          for (let BB = 0, zB = jB; BB < QB; BB++, zB += JB) pB[BB] !== rB[BB] && IB(sB, nB, zB, UB, rB[BB]);
          jB += zB
        }
      }
    }

    function UB(BB, jB, zB, nB, dB, IB, UB, aB) {
      const pB = jB * NB(zB),
        rB = UB * jB;
      if (5126 !== zB || dB !== pB) {
        const QB = new Float32Array(rB);
        return uB(BB, nB, dB, jB, zB, rB, IB, ((BB, zB) => {
          for (let nB = 0; nB < jB; nB++) QB[zB + nB] = BB[nB]
        })), QB
      }
      if (!(BB instanceof Array || BB instanceof Float32Array) || 0 !== nB || BB.length !== rB) {
        if (BB instanceof Array) {
          const jB = nB / 4;
          return BB.slice(jB, jB + rB)
        }
        if (ArrayBuffer.isView(BB)) {
          const jB = BB.byteOffset + nB;
          return 0 !== (3 & jB) && (QB.c.Warn("Float array must be aligned to 4-bytes border"), aB = !0), aB ? new Float32Array(BB.buffer.slice(jB, jB + rB * Float32Array.BYTES_PER_ELEMENT)) : new Float32Array(BB.buffer, jB, rB)
        }
        return new Float32Array(BB, nB, rB)
      }
      return aB ? BB.slice() : BB
    }

    function aB(BB, jB, zB, nB, dB, IB, UB) {
      const aB = NB(zB),
        pB = function(BB) {
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
        }(zB),
        rB = IB * jB;
      if (Array.isArray(BB)) {
        if (0 !== (3 & nB) || 0 !== (3 & dB)) throw new Error("byteOffset and byteStride must be a multiple of 4 for number[] data.");
        const QB = nB / 4,
          NB = dB / 4;
        if (QB + (IB - 1) * NB + jB > BB.length) throw new Error("Last accessed index is out of bounds.");
        if (NB < jB) throw new Error("Data stride cannot be smaller than the component size.");
        if (NB !== jB) {
          const QB = new pB(rB);
          return uB(BB, nB, dB, jB, zB, rB, !1, ((BB, zB) => {
            for (let nB = 0; nB < jB; nB++) QB[zB + nB] = BB[nB]
          })), QB
        }
        return new pB(BB.slice(QB, QB + rB))
      }
      let sB, JB = nB;
      ArrayBuffer.isView(BB) ? (sB = BB.buffer, JB += BB.byteOffset) : sB = BB;
      if (JB + (IB - 1) * dB + jB * aB > sB.byteLength) throw new Error("Last accessed byte is out of bounds.");
      const mB = jB * aB;
      if (dB < mB) throw new Error("Byte stride cannot be smaller than the component's byte size.");
      if (dB !== mB) {
        const BB = new pB(rB),
          zB = new Uint8Array(sB, JB),
          QB = new Uint8Array(BB.buffer),
          nB = jB * aB;
        for (let jB = 0, NB = 0, uB = 0; jB < IB; jB++, NB += dB, uB += nB) QB.set(zB.subarray(NB, NB + nB), uB);
        return BB
      }
      return 1 !== aB && 0 !== (JB & aB - 1) && (QB.c.Warn("Array must be aligned to border of element size. Data will be copied."), UB = !0), UB ? new pB(sB.slice(JB, JB + rB * aB)) : new pB(sB, JB, rB)
    }

    function pB(BB, jB, zB, nB, dB, IB, UB, aB) {
      const pB = jB * NB(zB),
        rB = UB * jB;
      if (aB.length !== rB) throw new Error("Output length is not valid");
      if (5126 === zB && dB === pB)
        if (BB instanceof Array) {
          const jB = nB / 4;
          aB.set(BB, jB)
        } else if (ArrayBuffer.isView(BB)) {
        const jB = BB.byteOffset + nB;
        if (0 !== (3 & jB)) return QB.c.Warn("Float array must be aligned to 4-bytes border"), void aB.set(new Float32Array(BB.buffer.slice(jB, jB + rB * Float32Array.BYTES_PER_ELEMENT)));
        const zB = new Float32Array(BB.buffer, jB, rB);
        aB.set(zB)
      } else {
        const jB = new Float32Array(BB, nB, rB);
        aB.set(jB)
      } else uB(BB, nB, dB, jB, zB, rB, IB, ((BB, zB) => {
        for (let QB = 0; QB < jB; QB++) aB[zB + QB] = BB[QB]
      }))
    }

    function rB(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      if (Array.isArray(BB)) {
        for (let nB = 0; nB < jB; nB++)
          if (BB[zB + nB] - QB > 65535) return !0;
        return !1
      }
      return 4 === BB.BYTES_PER_ELEMENT
    }

    function sB(BB) {
      const jB = BB.buffer;
      if (jB instanceof ArrayBuffer) return BB;
      const zB = new ArrayBuffer(BB.byteLength);
      return new Uint8Array(zB).set(new Uint8Array(jB, BB.byteOffset, BB.byteLength)), zB
    }
  },
  39974: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => EB,
      f: () => SB,
      i: () => MB,
      h: () => FB,
      m: () => YB
    });
    class QB {
      constructor() {
        this.children = []
      }
      isValid(BB) {
        return !0
      }
      process(BB, jB, zB) {
        let QB = "";
        if (this.line) {
          let zB = this.line;
          const nB = jB.processor;
          if (nB) {
            nB.lineProcessor && (zB = nB.lineProcessor(zB, jB.isFragment, jB.processingContext));
            const QB = jB.processor?.attributeKeywordName ?? "attribute",
              dB = jB.isFragment && jB.processor?.varyingFragmentKeywordName ? jB.processor?.varyingFragmentKeywordName : !jB.isFragment && jB.processor?.varyingVertexKeywordName ? jB.processor?.varyingVertexKeywordName : "varying";
            if (!jB.isFragment && nB.attributeProcessor && this.line.startsWith(QB)) zB = nB.attributeProcessor(this.line, BB, jB.processingContext);
            else if (nB.varyingProcessor && (nB.varyingCheck?.(this.line, jB.isFragment) || !nB.varyingCheck && this.line.startsWith(dB))) zB = nB.varyingProcessor(this.line, jB.isFragment, BB, jB.processingContext);
            else if (nB.uniformProcessor && nB.uniformRegexp && nB.uniformRegexp.test(this.line)) jB.lookForClosingBracketForUniformBuffer || (zB = nB.uniformProcessor(this.line, jB.isFragment, BB, jB.processingContext));
            else if (nB.uniformBufferProcessor && nB.uniformBufferRegexp && nB.uniformBufferRegexp.test(this.line)) jB.lookForClosingBracketForUniformBuffer || (zB = nB.uniformBufferProcessor(this.line, jB.isFragment, jB.processingContext), jB.lookForClosingBracketForUniformBuffer = !0);
            else if (nB.textureProcessor && nB.textureRegexp && nB.textureRegexp.test(this.line)) zB = nB.textureProcessor(this.line, jB.isFragment, BB, jB.processingContext);
            else if ((nB.uniformProcessor || nB.uniformBufferProcessor) && this.line.startsWith("uniform") && !jB.lookForClosingBracketForUniformBuffer) {
              /uniform\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s+(\S+)\s*;/.test(this.line) ? nB.uniformProcessor && (zB = nB.uniformProcessor(this.line, jB.isFragment, BB, jB.processingContext)) : nB.uniformBufferProcessor && (zB = nB.uniformBufferProcessor(this.line, jB.isFragment, jB.processingContext), jB.lookForClosingBracketForUniformBuffer = !0)
            }
            jB.lookForClosingBracketForUniformBuffer && -1 !== this.line.indexOf("}") && (jB.lookForClosingBracketForUniformBuffer = !1, nB.endOfUniformBufferProcessor && (zB = nB.endOfUniformBufferProcessor(this.line, jB.isFragment, jB.processingContext)))
          }
          QB += zB + "\n"
        }
        for (const nB of this.children) QB += nB.process(BB, jB, zB);
        return this.additionalDefineKey && (BB[this.additionalDefineKey] = this.additionalDefineValue || "true", zB[this.additionalDefineKey] = BB[this.additionalDefineKey]), QB
      }
    }
    class nB {
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
        for (const jB of BB) {
          if (!jB || "\r" === jB) continue;
          if ("#" === jB[0]) {
            this._lines.push(jB);
            continue
          }
          const BB = jB.trim();
          if (!BB) continue;
          if (BB.startsWith("//")) {
            this._lines.push(jB);
            continue
          }
          const zB = BB.indexOf(";");
          if (-1 === zB) this._lines.push(BB);
          else if (zB === BB.length - 1) BB.length > 1 && this._lines.push(BB);
          else {
            const BB = jB.split(";");
            for (let jB = 0; jB < BB.length; jB++) {
              let zB = BB[jB];
              zB && (zB = zB.trim(), zB && this._lines.push(zB + (jB !== BB.length - 1 ? ";" : "")))
            }
          }
        }
      }
    }
    class dB extends QB {
      process(BB, jB, zB) {
        for (let QB = 0; QB < this.children.length; QB++) {
          const nB = this.children[QB];
          if (nB.isValid(BB)) return nB.process(BB, jB, zB)
        }
        return ""
      }
    }
    class IB extends QB {
      isValid(BB) {
        return this.testExpression.isTrue(BB)
      }
    }
    class NB {
      isTrue(BB) {
        return !0
      }
      static postfixToInfix(BB) {
        const jB = [];
        for (const zB of BB)
          if (void 0 === NB._OperatorPriority[zB]) jB.push(zB);
          else {
            const BB = jB[jB.length - 1],
              QB = jB[jB.length - 2];
            jB.length -= 2, jB.push(`(${QB}${zB}${BB})`)
          } return jB[jB.length - 1]
      }
      static infixToPostfix(BB) {
        const jB = NB._InfixToPostfixCache.get(BB);
        if (jB) return jB.accessTime = Date.now(), jB.result;
        if (!BB.includes("&&") && !BB.includes("||") && !BB.includes(")") && !BB.includes("(")) return [BB];
        const zB = [];
        let QB = -1;
        const nB = () => {
            aB = aB.trim(), "" !== aB && (zB.push(aB), aB = "")
          },
          dB = BB => {
            QB < NB._Stack.length - 1 && (NB._Stack[++QB] = BB)
          },
          IB = () => NB._Stack[QB],
          uB = () => -1 === QB ? "!!INVALID EXPRESSION!!" : NB._Stack[QB--];
        let UB = 0,
          aB = "";
        for (; UB < BB.length;) {
          const jB = BB.charAt(UB),
            pB = UB < BB.length - 1 ? BB.substring(UB, 2 + UB) : "";
          if ("(" === jB) aB = "", dB(jB);
          else if (")" === jB) {
            for (nB(); - 1 !== QB && "(" !== IB();) zB.push(uB());
            uB()
          } else if (NB._OperatorPriority[pB] > 1) {
            for (nB(); - 1 !== QB && NB._OperatorPriority[IB()] >= NB._OperatorPriority[pB];) zB.push(uB());
            dB(pB), UB++
          } else aB += jB;
          UB++
        }
        for (nB(); - 1 !== QB;) "(" === IB() ? uB() : zB.push(uB());
        return NB._InfixToPostfixCache.size >= NB.InfixToPostfixCacheLimitSize && NB.ClearCache(), NB._InfixToPostfixCache.set(BB, {
          result: zB,
          accessTime: Date.now()
        }), zB
      }
      static ClearCache() {
        const BB = Array.from(NB._InfixToPostfixCache.entries()).sort(((BB, jB) => BB[1].accessTime - jB[1].accessTime));
        for (let jB = 0; jB < NB.InfixToPostfixCacheCleanupSize; jB++) NB._InfixToPostfixCache.delete(BB[jB][0])
      }
    }
    NB.InfixToPostfixCacheLimitSize = 5e4, NB.InfixToPostfixCacheCleanupSize = 25e3, NB._InfixToPostfixCache = new Map, NB._OperatorPriority = {
      ")": 0,
      "(": 1,
      "||": 2,
      "&&": 3
    }, NB._Stack = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    class uB extends NB {
      constructor(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super(), this.define = BB, this.not = jB
      }
      isTrue(BB) {
        let jB = void 0 !== BB[this.define];
        return this.not && (jB = !jB), jB
      }
    }
    class UB extends NB {
      isTrue(BB) {
        return this.leftOperand.isTrue(BB) || this.rightOperand.isTrue(BB)
      }
    }
    class aB extends NB {
      isTrue(BB) {
        return this.leftOperand.isTrue(BB) && this.rightOperand.isTrue(BB)
      }
    }
    class pB extends NB {
      constructor(BB, jB, zB) {
        super(), this.define = BB, this.operand = jB, this.testValue = zB
      }
      toString() {
        return `${this.define} ${this.operand} ${this.testValue}`
      }
      isTrue(BB) {
        let jB = !1;
        const zB = parseInt(void 0 != BB[this.define] ? BB[this.define] : this.define),
          QB = parseInt(void 0 != BB[this.testValue] ? BB[this.testValue] : this.testValue);
        if (isNaN(zB) || isNaN(QB)) return !1;
        switch (this.operand) {
          case ">":
            jB = zB > QB;
            break;
          case "<":
            jB = zB < QB;
            break;
          case "<=":
            jB = zB <= QB;
            break;
          case ">=":
            jB = zB >= QB;
            break;
          case "==":
            jB = zB === QB;
            break;
          case "!=":
            jB = zB !== QB
        }
        return jB
      }
    }
    var rB = zB(39965),
      sB = zB(39958);
    const JB = /defined\s*?\((.+?)\)/g,
      mB = /defined\s*?\[(.+?)\]/g,
      yB = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g,
      kB = /__decl__/,
      GB = /light\{X\}.(\w*)/g,
      LB = /\{X\}/g,
      gB = [],
      tB = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;

    function SB(BB) {
      BB.processor && BB.processor.initializeShaders && BB.processor.initializeShaders(BB.processingContext)
    }

    function MB(BB, jB, zB, QB) {
      jB.processor?.preProcessShaderCode && (BB = jB.processor.preProcessShaderCode(BB, jB.isFragment)), FB(BB, jB, (BB => {
        jB.processCodeAfterIncludes && (BB = jB.processCodeAfterIncludes(jB.isFragment ? "fragment" : "vertex", BB, jB.defines));
        const nB = function(BB, jB, zB) {
          let QB = function(BB, jB) {
            if (jB.processor?.noPrecision) return BB;
            const zB = jB.shouldUseHighPrecisionShader; - 1 === BB.indexOf("precision highp float") ? BB = zB ? "precision highp float;\n" + BB : "precision mediump float;\n" + BB : zB || (BB = BB.replace("precision highp float", "precision mediump float"));
            return BB
          }(BB, jB);
          if (!jB.processor) return QB;
          if (0 === jB.processor.shaderLanguage && -1 !== QB.indexOf("#version 3") && (QB = QB.replace("#version 300 es", ""), !jB.processor.parseGLES3)) return QB;
          const nB = jB.defines,
            dB = DB(jB, zB);
          jB.processor.preProcessor && (QB = jB.processor.preProcessor(QB, nB, dB, jB.isFragment, jB.processingContext));
          const IB = {};
          QB = HB(QB, dB, jB, IB), jB.processor.postProcessor && (QB = jB.processor.postProcessor(QB, nB, jB.isFragment, jB.processingContext, zB ? {
            drawBuffersExtensionDisabled: !zB.getCaps().drawBuffersExtension
          } : {}, dB, IB));
          zB?._features.needShaderCodeInlining && (QB = zB.inlineShaderCode(QB));
          return QB
        }(BB, jB, QB);
        zB(nB, BB)
      }))
    }

    function EB(BB, jB, zB) {
      return zB.processor && zB.processor.finalizeShaders ? zB.processor.finalizeShaders(BB, jB, zB.processingContext) : {
        vertexCode: BB,
        fragmentCode: jB
      }
    }

    function iB(BB) {
      const jB = /defined\((.+)\)/.exec(BB);
      if (jB && jB.length) return new uB(jB[1].trim(), "!" === BB[0]);
      const zB = ["==", "!=", ">=", "<=", "<", ">"];
      let QB = "",
        nB = 0;
      for (QB of zB)
        if (nB = BB.indexOf(QB), nB > -1) break;
      if (-1 === nB) return new uB(BB);
      const dB = BB.substring(0, nB).trim(),
        IB = BB.substring(nB + QB.length).trim();
      return new pB(dB, QB, IB)
    }

    function qB(BB, jB) {
      const zB = new IB,
        QB = BB.substring(0, jB);
      let nB = BB.substring(jB);
      return nB = nB.substring(0, (nB.indexOf("//") + 1 || nB.length + 1) - 1).trim(), zB.testExpression = "#ifdef" === QB ? new uB(nB) : "#ifndef" === QB ? new uB(nB, !0) : function(BB) {
        BB = BB.replace(JB, "defined[$1]");
        const jB = NB.infixToPostfix(BB),
          zB = [];
        for (const nB of jB)
          if ("||" !== nB && "&&" !== nB) zB.push(nB);
          else if (zB.length >= 2) {
          let BB = zB[zB.length - 1],
            jB = zB[zB.length - 2];
          zB.length -= 2;
          const QB = "&&" == nB ? new aB : new UB;
          "string" === typeof BB && (BB = BB.replace(mB, "defined($1)")), "string" === typeof jB && (jB = jB.replace(mB, "defined($1)")), QB.leftOperand = "string" === typeof jB ? iB(jB) : jB, QB.rightOperand = "string" === typeof BB ? iB(BB) : BB, zB.push(QB)
        }
        let QB = zB[zB.length - 1];
        return "string" === typeof QB && (QB = QB.replace(mB, "defined($1)")), "string" === typeof QB ? iB(QB) : QB
      }(nB), zB
    }

    function fB(BB, jB, zB, nB) {
      let dB;
      for (; oB(BB, zB, nB);) {
        dB = BB.currentLine;
        const IB = dB.substring(0, 5).toLowerCase();
        if ("#else" === IB) {
          const zB = new QB;
          return jB.children.push(zB), void oB(BB, zB, nB)
        }
        if ("#elif" === IB) {
          const BB = qB(dB, 5);
          jB.children.push(BB), zB = BB
        }
      }
    }

    function oB(BB, jB, zB) {
      for (; BB.canRead;) {
        BB.lineIndex++;
        const nB = BB.currentLine;
        if (nB.indexOf("#") >= 0) {
          const QB = tB.exec(nB);
          if (QB && QB.length) {
            switch (QB[0]) {
              case "#ifdef": {
                const QB = new dB;
                jB.children.push(QB);
                const IB = qB(nB, 6);
                QB.children.push(IB), fB(BB, QB, IB, zB);
                break
              }
              case "#else":
              case "#elif":
                return !0;
              case "#endif":
                return !1;
              case "#ifndef": {
                const QB = new dB;
                jB.children.push(QB);
                const IB = qB(nB, 7);
                QB.children.push(IB), fB(BB, QB, IB, zB);
                break
              }
              case "#if": {
                const QB = new dB,
                  IB = qB(nB, 3);
                jB.children.push(QB), QB.children.push(IB), fB(BB, QB, IB, zB);
                break
              }
            }
            continue
          }
        }
        const IB = new QB;
        if (IB.line = nB, jB.children.push(IB), "#" === nB[0] && "d" === nB[1]) {
          const BB = nB.replace(";", "").split(" ");
          IB.additionalDefineKey = BB[1], 3 === BB.length && (IB.additionalDefineValue = BB[2])
        }
      }
      return !1
    }

    function HB(BB, jB, zB, dB) {
      const IB = new QB,
        NB = new nB;
      return NB.lineIndex = -1, NB.lines = BB.split("\n"), oB(NB, IB, dB), IB.process(jB, zB, dB)
    }

    function DB(BB, jB) {
      const zB = BB.defines,
        QB = {};
      for (const nB of zB) {
        const BB = nB.replace("#define", "").replace(";", "").trim().split(" ");
        QB[BB[0]] = BB.length > 1 ? BB[1] : ""
      }
      return 0 === BB.processor?.shaderLanguage && (QB.GL_ES = "true"), QB.__VERSION__ = BB.version, QB[BB.platformName] = "true", (0, sB.k)(QB, jB?.isNDCHalfZRange, jB?.jQB, jB?.useExactSrgbConversions), QB
    }

    function FB(BB, jB, zB) {
      let QB;
      for (gB.length = 0; null !== (QB = yB.exec(BB));) gB.push(QB);
      let nB = [BB],
        dB = !1;
      for (const NB of gB) {
        let BB = NB[1];
        if (-1 !== BB.indexOf("__decl__") && (BB = BB.replace(kB, ""), jB.supportsUniformBuffers && (BB = BB.replace("Vertex", "Ubo").replace("Fragment", "Ubo")), BB += "Declaration"), !jB.includesShadersStore[BB]) {
          const QB = jB.shadersRepository + "ShadersInclude/" + BB + ".fx";
          return void YB.loadFile(QB, (QB => {
            jB.includesShadersStore[BB] = QB, FB(nB.join(""), jB, zB)
          }))
        } {
          let zB = jB.includesShadersStore[BB];
          if (NB[2]) {
            const BB = NB[3].split(",");
            for (let jB = 0; jB < BB.length; jB += 2) {
              const QB = new RegExp(BB[jB], "g"),
                nB = BB[jB + 1];
              zB = zB.replace(QB, nB)
            }
          }
          if (NB[4]) {
            const BB = NB[5];
            if (-1 !== BB.indexOf("..")) {
              const QB = BB.split(".."),
                nB = parseInt(QB[0]);
              let dB = parseInt(QB[1]),
                IB = zB.slice(0);
              zB = "", isNaN(dB) && (dB = jB.indexParameters[QB[1]]);
              for (let BB = nB; BB < dB; BB++) jB.supportsUniformBuffers || (IB = IB.replace(GB, ((BB, jB) => jB + "{X}"))), zB += IB.replace(LB, BB.toString()) + "\n"
            } else jB.supportsUniformBuffers || (zB = zB.replace(GB, ((BB, jB) => jB + "{X}"))), zB = zB.replace(LB, BB)
          }
          const QB = [];
          for (const BB of nB) {
            const jB = BB.split(NB[0]);
            for (let BB = 0; BB < jB.length - 1; BB++) QB.push(jB[BB]), QB.push(zB);
            QB.push(jB[jB.length - 1])
          }
          nB = QB, dB = dB || zB.indexOf("#include<") >= 0 || zB.indexOf("#include <") >= 0
        }
      }
      gB.length = 0;
      const IB = nB.join("");
      dB ? FB(IB.toString(), jB, zB) : zB(IB)
    }
    const YB = {
      loadFile: (BB, jB, zB, QB, nB, dB) => {
        throw (0, rB.k)("FileTools")
      }
    }
  },
  39958: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => nB,
      i: () => dB,
      k: () => NB,
      m: () => IB,
      o: () => uB
    });
    var QB = zB(39965);
    const nB = {};

    function dB(BB, jB) {
      return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (jB ? jB + "\n" : "") + BB
    }

    function IB(BB, jB, zB, dB, IB, NB, uB) {
      const UB = uB || nB.loadFile;
      if (!UB) throw (0, QB.k)("FileTools");
      return UB(BB, jB, zB, dB, IB, NB)
    }

    function NB(BB, jB, zB, QB) {
      if (BB) return jB ? BB.IS_NDC_HALF_ZRANGE = "" : delete BB.IS_NDC_HALF_ZRANGE, zB ? BB.USE_REVERSE_DEPTHBUFFER = "" : delete BB.USE_REVERSE_DEPTHBUFFER, void(QB ? BB.USE_EXACT_SRGB_CONVERSIONS = "" : delete BB.USE_EXACT_SRGB_CONVERSIONS);
      {
        let BB = "";
        return jB && (BB += "#define IS_NDC_HALF_ZRANGE"), zB && (BB && (BB += "\n"), BB += "#define USE_REVERSE_DEPTHBUFFER"), QB && (BB && (BB += "\n"), BB += "#define USE_EXACT_SRGB_CONVERSIONS"), BB
      }
    }

    function uB(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        QB = arguments.length > 3 ? arguments[3] : void 0;
      switch (BB) {
        case 3: {
          const BB = new Int8Array(jB);
          return QB && BB.set(new Int8Array(QB)), BB
        }
        case 0: {
          const BB = new Uint8Array(jB);
          return QB && BB.set(new Uint8Array(QB)), BB
        }
        case 4: {
          const BB = "number" !== typeof jB ? new Int16Array(jB) : new Int16Array(zB ? jB / 2 : jB);
          return QB && BB.set(new Int16Array(QB)), BB
        }
        case 5:
        case 8:
        case 9:
        case 10:
        case 2: {
          const BB = "number" !== typeof jB ? new Uint16Array(jB) : new Uint16Array(zB ? jB / 2 : jB);
          return QB && BB.set(new Uint16Array(QB)), BB
        }
        case 6: {
          const BB = "number" !== typeof jB ? new Int32Array(jB) : new Int32Array(zB ? jB / 4 : jB);
          return QB && BB.set(new Int32Array(QB)), BB
        }
        case 7:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15: {
          const BB = "number" !== typeof jB ? new Uint32Array(jB) : new Uint32Array(zB ? jB / 4 : jB);
          return QB && BB.set(new Uint32Array(QB)), BB
        }
        case 1: {
          const BB = "number" !== typeof jB ? new Float32Array(jB) : new Float32Array(zB ? jB / 4 : jB);
          return QB && BB.set(new Float32Array(QB)), BB
        }
      }
      const nB = new Uint8Array(jB);
      return QB && nB.set(new Uint8Array(QB)), nB
    }
  },
  39965: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => UB,
      f: () => aB,
      i: () => uB,
      k: () => nB
    });
    const QB = {};

    function nB(BB) {
      if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !QB[BB]) return QB[BB] = !0, `${BB} needs to be imported before as it contains a side-effect required by your code.`
    }
    const dB = {};
    let IB = !1,
      NB = 0;

    function uB(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const QB = function() {
        if ((zB || IB) && 0 === NB) {
          const zB = `${BB}.${jB}`;
          dB[zB] || (dB[zB] = !0, console.warn(`[Babylon.js] ${zB}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
        }
      };
      return QB.__isSideEffectStub = !0, QB
    }

    function UB(BB) {
      return !!BB && !BB.__isSideEffectStub
    }

    function aB(BB, jB) {
      return {
        get() {},
        set(BB) {
          Object.defineProperty(this, jB, {
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
  39943: (BB, jB, zB) => {
    function QB() {
      return "undefined" !== typeof window
    }

    function nB() {
      return "undefined" !== typeof navigator
    }

    function dB() {
      return "undefined" !== typeof document
    }

    function IB(BB) {
      let jB = "",
        zB = BB.firstChild;
      for (; zB;) 3 === zB.nodeType && (jB += zB.textContent), zB = zB.nextSibling;
      return jB
    }
    zB.d(jB, {
      d: () => IB,
      h: () => dB,
      k: () => nB,
      o: () => QB
    })
  },
  40113: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => QB,
      e: () => nB,
      i: () => dB
    });
    class QB extends Error {}
    QB._setPrototypeOf = Object.setPrototypeOf || ((BB, jB) => (BB.__proto__ = jB, BB));
    const nB = {
      MeshInvalidPositionsError: 0,
      UnsupportedTextureError: 1e3,
      GLTFLoaderUnexpectedMagicError: 2e3,
      SceneLoaderError: 3e3,
      LoadFileError: 4e3,
      RequestFileError: 4001,
      ReadFileError: 4002
    };
    class dB extends QB {
      constructor(BB, jB, zB) {
        super(BB), this.errorCode = jB, this.innerError = zB, this.name = "RuntimeError", QB._setPrototypeOf(this, dB.prototype)
      }
    }
  },
  40108: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => DB,
      f: () => LB,
      j: () => qB,
      m: () => oB,
      q: () => EB,
      r: () => SB,
      v: () => MB,
      y: () => XB,
      A: () => iB,
      C: () => gB
    });
    var QB = zB(40110),
      nB = zB(39943),
      dB = zB(37202);
    class IB {}
    IB.FilesToLoad = {};
    var NB = zB(40113),
      uB = zB(40120),
      UB = zB(37197),
      aB = zB(39958),
      pB = zB(39974),
      rB = zB(38783),
      sB = zB(39976),
      JB = zB(40125);
    const mB = new RegExp(/^data:([^,]+\/[^,]+)?;base64,/i);
    class yB extends NB.i {
      constructor(BB, jB) {
        super(BB, NB.e.LoadFileError), this.name = "LoadFileError", NB.d._setPrototypeOf(this, yB.prototype), jB instanceof QB.b ? this.request = jB : this.file = jB
      }
    }
    class kB extends NB.i {
      constructor(BB, jB) {
        super(BB, NB.e.RequestFileError), this.request = jB, this.name = "RequestFileError", NB.d._setPrototypeOf(this, kB.prototype)
      }
    }
    class GB extends NB.i {
      constructor(BB, jB) {
        super(BB, NB.e.ReadFileError), this.file = jB, this.name = "ReadFileError", NB.d._setPrototypeOf(this, GB.prototype)
      }
    }
    const LB = {
        DefaultRetryStrategy: class {
          static ExponentialBackoff() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
              jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
            return (zB, QB, nB) => 0 !== QB.status || nB >= BB || -1 !== zB.indexOf("file:") ? -1 : Math.pow(2, nB) * jB
          }
        }.ExponentialBackoff(),
        BaseUrl: "",
        CorsBehavior: "anonymous",
        PreprocessUrl: BB => BB,
        ScriptBaseUrl: "",
        ScriptPreprocessUrl: BB => BB,
        CleanUrl: BB => BB = BB.replace(/#/gm, "%23")
      },
      gB = (BB, jB) => {
        if ((!BB || 0 !== BB.indexOf("data:")) && LB.CorsBehavior)
          if ("string" === typeof LB.CorsBehavior || LB.CorsBehavior instanceof String) jB.crossOrigin = LB.CorsBehavior;
          else {
            const zB = LB.CorsBehavior(BB);
            zB && (jB.crossOrigin = zB)
          }
      },
      tB = {
        getRequiredSize: null
      },
      SB = function(BB, jB, zB, nB) {
        let dB, NB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
          aB = arguments.length > 5 ? arguments[5] : void 0,
          pB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : UB.c.LastCreatedEngine;
        if ("undefined" === typeof HTMLImageElement && !pB?._features.forceBitmapOverHTMLImageElement) return zB("LoadImage is only supported in web or BabylonNative environments."), null;
        if (pB?._features.forceBitmapOverHTMLImageElement && "string" !== typeof BB && "undefined" !== typeof Blob) {
          let QB;
          if (BB instanceof Blob) QB = BB;
          else {
            const jB = BB instanceof ArrayBuffer ? BB : (0, JB.i)(BB);
            QB = new Blob([jB], {
              type: NB
            })
          }
          return pB.createImageBitmap(QB, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...aB
          }).then(jB).catch((jB => {
            zB && zB("Error while trying to load image: " + BB, jB)
          })), null
        }
        let rB = !1;
        if (BB instanceof ArrayBuffer || ArrayBuffer.isView(BB))
          if ("undefined" !== typeof Blob && "undefined" !== typeof URL) {
            let jB;
            jB = BB instanceof ArrayBuffer ? BB : (0, JB.i)(BB), dB = URL.createObjectURL(new Blob([jB], {
              type: NB
            })), rB = !0
          } else dB = `data:${NB};base64,` + (0, uB.e)(BB);
        else BB instanceof Blob ? (dB = URL.createObjectURL(BB), rB = !0) : (dB = LB.CleanUrl(BB), dB = LB.PreprocessUrl(dB));
        const sB = jB => {
          if (zB) {
            const QB = dB || BB.toString();
            zB(`Error while trying to load image: ${0===QB.indexOf("http")||QB.length<=128?QB:QB.slice(0,128)+"..."}`, jB)
          }
        };
        if (pB?._features.forceBitmapOverHTMLImageElement) return EB(dB, (QB => {
          pB.createImageBitmap(new Blob([QB], {
            type: NB
          }), {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...aB
          }).then((BB => {
            jB(BB), rB && URL.revokeObjectURL(dB)
          })).catch((jB => {
            zB && zB("Error while trying to load image: " + BB, jB)
          }))
        }), void 0, nB || void 0, !0, ((BB, jB) => {
          sB(jB)
        })), null;
        const mB = new Image;
        if (tB.getRequiredSize) {
          const jB = tB.getRequiredSize(BB);
          jB.width && (mB.width = jB.width), jB.height && (mB.height = jB.height)
        }
        gB(dB, mB);
        const yB = [],
          kB = () => {
            for (const BB of yB) BB.target.removeEventListener(BB.name, BB.handler);
            yB.length = 0
          };
        yB.push({
          target: mB,
          name: "load",
          handler: () => {
            kB(), jB(mB), rB && mB.src && URL.revokeObjectURL(mB.src)
          }
        }), yB.push({
          target: mB,
          name: "error",
          handler: BB => {
            kB(), sB(BB), rB && mB.src && URL.revokeObjectURL(mB.src)
          }
        }), yB.push({
          target: document,
          name: "securitypolicyviolation",
          handler: BB => {
            if (BB.blockedURI !== mB.src || "JJ" === BB.disposition) return;
            kB();
            const jB = new Error(`CSP violation of policy ${BB.effectiveDirective} ${BB.blockedURI}. Current policy is ${BB.originalPolicy}`);
            UB.c.UseFallbackTexture = !1, sB(jB), rB && mB.src && URL.revokeObjectURL(mB.src), mB.src = ""
          }
        }), (() => {
          for (const BB of yB) BB.target.addEventListener(BB.name, BB.handler)
        })();
        const GB = "blob:" === dB.substring(0, 5),
          SB = "data:" === dB.substring(0, 5),
          MB = () => {
            GB || SB || !QB.b.IsCustomRequestAvailable ? mB.src = dB : EB(dB, ((BB, jB, zB) => {
              const QB = new Blob([BB], {
                  type: !NB && zB ? zB : NB
                }),
                nB = URL.createObjectURL(QB);
              rB = !0, mB.src = nB
            }), void 0, nB || void 0, !0, ((BB, jB) => {
              sB(jB)
            }))
          },
          iB = () => {
            nB && nB.loadImage(dB, mB)
          };
        if (!GB && !SB && nB && nB.enableTexturesOffline) nB.open(iB, MB);
        else {
          if (-1 !== dB.indexOf("file:")) {
            const BB = decodeURIComponent(dB.substring(5).toLowerCase());
            if (IB.FilesToLoad[BB] && "undefined" !== typeof URL) {
              try {
                let jB;
                try {
                  jB = URL.createObjectURL(IB.FilesToLoad[BB])
                } catch (qB) {
                  jB = URL.createObjectURL(IB.FilesToLoad[BB])
                }
                mB.src = jB, rB = !0
              } catch (fB) {
                mB.src = ""
              }
              return mB
            }
          }
          MB()
        }
        return mB
      },
      MB = (BB, jB, zB, QB, nB) => {
        const IB = new FileReader,
          NB = {
            onCompleteObservable: new dB.c,
            abort: () => IB.abort()
          };
        return IB.onloadend = () => NB.onCompleteObservable.notifyObservers(NB), nB && (IB.onerror = () => {
          nB(new GB(`Unable to read ${BB.name}`, BB))
        }), IB.onload = BB => {
          jB(BB.target.result)
        }, zB && (IB.onprogress = zB), QB ? IB.readAsArrayBuffer(BB) : IB.readAsText(BB), NB
      },
      EB = (BB, jB, zB, QB, nB, uB, UB) => {
        if (BB.name) return MB(BB, jB, zB, nB, uB ? BB => {
          uB(void 0, BB)
        } : void 0);
        const aB = BB;
        if (-1 !== aB.indexOf("file:")) {
          let BB = decodeURIComponent(aB.substring(5).toLowerCase());
          0 === BB.indexOf("./") && (BB = BB.substring(2));
          const QB = IB.FilesToLoad[BB];
          if (QB) return MB(QB, jB, zB, nB, uB ? BB => uB(void 0, new yB(BB.message, BB.file)) : void 0)
        }
        const {
          match: pB,
          type: JB
        } = HB(aB);
        if (pB) {
          const BB = {
            onCompleteObservable: new dB.c,
            abort: () => () => {}
          };
          try {
            const BB = nB ? DB(aB) : FB(aB);
            jB(BB, void 0, JB)
          } catch (NB) {
            uB ? uB(void 0, NB) : rB.c.Error(NB.message || "Failed to parse the Data URL")
          }
          return sB.b.SetImmediate((() => {
            BB.onCompleteObservable.notifyObservers(BB)
          })), BB
        }
        return iB(aB, ((BB, zB) => {
          jB(BB, zB?.responseURL, zB?.getResponseHeader("content-type"))
        }), zB, QB, nB, uB ? BB => {
          uB(BB.request, new yB(BB.message, BB.request))
        } : void 0, UB)
      },
      iB = (BB, jB, zB, IB, NB, uB, aB) => {
        null !== IB && (IB ?? (IB = UB.c.LastCreatedScene?.offlineProvider)), BB = LB.CleanUrl(BB), BB = LB.PreprocessUrl(BB);
        const pB = LB.BaseUrl + BB;
        let sB = !1;
        const JB = {
            onCompleteObservable: new dB.c,
            abort: () => sB = !0
          },
          mB = () => {
            let BB, dB = new QB.b,
              IB = null;
            const UB = () => {
              dB && (zB && dB.removeEventListener("progress", zB), BB && dB.removeEventListener("readystatechange", BB), dB.removeEventListener("loadend", mB))
            };
            let mB = () => {
              UB(), JB.onCompleteObservable.notifyObservers(JB), JB.onCompleteObservable.clear(), zB = void 0, BB = null, mB = null, uB = void 0, aB = void 0, jB = void 0
            };
            JB.abort = () => {
              sB = !0, mB && mB(), dB && dB.readyState !== (XMLHttpRequest.DONE || 4) && dB.abort(), null !== IB && (clearTimeout(IB), IB = null), dB = null
            };
            const yB = BB => {
                const jB = BB.message || "Unknown error";
                uB && dB ? uB(new kB(jB, dB)) : rB.c.Error(jB)
              },
              GB = rB => {
                if (dB) {
                  if (dB.open("GET", pB), aB) try {
                    aB(dB)
                  } catch (JB) {
                    return void yB(JB)
                  }
                  NB && (dB.responseType = "arraybuffer"), zB && dB.addEventListener("progress", zB), mB && dB.addEventListener("loadend", mB), BB = () => {
                    if (!sB && dB && dB.readyState === (XMLHttpRequest.DONE || 4)) {
                      if (BB && dB.removeEventListener("readystatechange", BB), dB.status >= 200 && dB.status < 300 || 0 === dB.status && (!(0, nB.o)() || fB())) {
                        const BB = NB ? dB.response : dB.responseText;
                        if (null !== BB) {
                          try {
                            jB && jB(BB, dB)
                          } catch (JB) {
                            yB(JB)
                          }
                          return
                        }
                      }
                      const zB = LB.DefaultRetryStrategy;
                      if (zB) {
                        const BB = zB(pB, dB, rB);
                        if (-1 !== BB) return UB(), dB = new QB.b, void(IB = setTimeout((() => GB(rB + 1)), BB))
                      }
                      const aB = new kB("Error status: " + dB.status + " " + dB.statusText + " - Unable to load " + pB, dB);
                      uB && uB(aB)
                    }
                  }, dB.addEventListener("readystatechange", BB), dB.send()
                }
              };
            GB(0)
          };
        if (IB && IB.enableSceneOffline && !BB.startsWith("blob:")) {
          const QB = BB => {
              BB && BB.status > 400 ? uB && uB(BB) : mB()
            },
            nB = () => {
              IB && IB.loadFile(LB.BaseUrl + BB, (BB => {
                !sB && jB && jB(BB), JB.onCompleteObservable.notifyObservers(JB)
              }), zB ? BB => {
                !sB && zB && zB(BB)
              } : void 0, QB, NB)
            };
          IB.open(nB, QB)
        } else mB();
        return JB
      },
      qB = BB => {
        const {
          match: jB,
          type: zB
        } = HB(BB);
        if (jB) return zB || void 0;
        const QB = BB.lastIndexOf(".");
        switch (BB.substring(QB + 1).toLowerCase()) {
          case "glb":
            return "model/gltf-binary";
          case "bin":
            return "application/octet-stream";
          case "sF":
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
      fB = () => "undefined" !== typeof location && "file:" === location.protocol,
      oB = BB => mB.test(BB),
      HB = BB => {
        const jB = mB.exec(BB);
        if (null === jB || 0 === jB.length) return {
          match: !1,
          type: ""
        };
        return {
          match: !0,
          type: jB[0].replace("data:", "").replace(";base64,", "")
        }
      };

    function DB(BB) {
      return (0, uB.b)(BB.split(",")[1])
    }
    const FB = BB => (0, uB.d)(BB.split(",")[1]);
    let YB;
    const VB = (BB, jB, zB, QB, nB, dB, IB, NB, uB, UB) => {
      YB = {
        DecodeBase64UrlToBinary: BB,
        DecodeBase64UrlToString: jB,
        DefaultRetryStrategy: zB.DefaultRetryStrategy,
        BaseUrl: zB.BaseUrl,
        CorsBehavior: zB.CorsBehavior,
        PreprocessUrl: zB.PreprocessUrl,
        IsBase64DataUrl: QB,
        IsFileURL: nB,
        LoadFile: dB,
        LoadImage: IB,
        ReadFile: NB,
        RequestFile: uB,
        SetCorsBehavior: UB
      }, Object.defineProperty(YB, "DefaultRetryStrategy", {
        get: function() {
          return zB.DefaultRetryStrategy
        },
        set: function(BB) {
          zB.DefaultRetryStrategy = BB
        }
      }), Object.defineProperty(YB, "BaseUrl", {
        get: function() {
          return zB.BaseUrl
        },
        set: function(BB) {
          zB.BaseUrl = BB
        }
      }), Object.defineProperty(YB, "PreprocessUrl", {
        get: function() {
          return zB.PreprocessUrl
        },
        set: function(BB) {
          zB.PreprocessUrl = BB
        }
      }), Object.defineProperty(YB, "CorsBehavior", {
        get: function() {
          return zB.CorsBehavior
        },
        set: function(BB) {
          zB.CorsBehavior = BB
        }
      })
    };
    let hB = !1;

    function XB() {
      hB || (hB = !0, VB(DB, FB, LB, oB, fB, EB, SB, MB, iB, gB), aB.e.loadFile = EB, aB.e.loadImage = SB, pB.m.loadFile = EB)
    }
  },
  40130: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => NB,
      e: () => dB,
      f: () => IB
    });
    let QB = null;

    function nB() {
      if (QB) return QB;
      const BB = new ArrayBuffer(4),
        jB = new Float32Array(BB),
        zB = new Uint32Array(BB),
        nB = new Uint32Array(512),
        dB = new Uint32Array(512);
      for (let QB = 0; QB < 256; ++QB) {
        const BB = QB - 127;
        BB < -24 ? (nB[QB] = 0, nB[256 | QB] = 32768, dB[QB] = 24, dB[256 | QB] = 24) : BB < -14 ? (nB[QB] = 1024 >> -BB - 14, nB[256 | QB] = 1024 >> -BB - 14 | 32768, dB[QB] = -BB - 1, dB[256 | QB] = -BB - 1) : BB <= 15 ? (nB[QB] = BB + 15 << 10, nB[256 | QB] = BB + 15 << 10 | 32768, dB[QB] = 13, dB[256 | QB] = 13) : BB < 128 ? (nB[QB] = 31744, nB[256 | QB] = 64512, dB[QB] = 24, dB[256 | QB] = 24) : (nB[QB] = 31744, nB[256 | QB] = 64512, dB[QB] = 13, dB[256 | QB] = 13)
      }
      const IB = new Uint32Array(2048),
        NB = new Uint32Array(64),
        uB = new Uint32Array(64);
      for (let QB = 1; QB < 1024; ++QB) {
        let BB = QB << 13,
          jB = 0;
        for (; 0 === (8388608 & BB);) BB <<= 1, jB -= 8388608;
        BB &= -8388609, jB += 947912704, IB[QB] = BB | jB
      }
      for (let QB = 1024; QB < 2048; ++QB) IB[QB] = 939524096 + (QB - 1024 << 13);
      for (let QB = 1; QB < 31; ++QB) NB[QB] = QB << 23;
      NB[31] = 1199570944, NB[32] = 2147483648;
      for (let QB = 33; QB < 63; ++QB) NB[QB] = 2147483648 + (QB - 32 << 23);
      NB[63] = 3347054592;
      for (let QB = 1; QB < 64; ++QB) 32 !== QB && (uB[QB] = 1024);
      return QB = {
        floatView: jB,
        uint32View: zB,
        baseTable: nB,
        shiftTable: dB,
        mantissaTable: IB,
        exponentTable: NB,
        offsetTable: uB
      }, QB
    }
    const dB = 65504;

    function IB(BB) {
      const jB = nB();
      jB.floatView[0] = BB;
      const zB = jB.uint32View[0],
        QB = zB >> 23 & 511;
      return jB.baseTable[QB] + ((8388607 & zB) >> jB.shiftTable[QB])
    }

    function NB(BB) {
      const jB = nB();
      return jB.uint32View[0] = jB.mantissaTable[jB.offsetTable[BB >> 10] + (1023 & BB)] + jB.exponentTable[BB >> 10], jB.floatView[0]
    }
  },
  40120: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => dB,
      d: () => nB,
      e: () => QB
    });
    const QB = BB => {
        const jB = ArrayBuffer.isView(BB) ? new Uint8Array(BB.buffer, BB.byteOffset, BB.byteLength) : new Uint8Array(BB);
        return "function" === typeof jB.toBase64 ? jB.toBase64() : function(BB) {
          const jB = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          let zB, QB, nB, dB, IB, NB, uB, UB = "",
            aB = 0;
          for (; aB < BB.length;) zB = BB[aB++], QB = aB < BB.length ? BB[aB++] : Number.NaN, nB = aB < BB.length ? BB[aB++] : Number.NaN, dB = zB >> 2, IB = (3 & zB) << 4 | QB >> 4, NB = (15 & QB) << 2 | nB >> 6, uB = 63 & nB, isNaN(QB) ? NB = uB = 64 : isNaN(nB) && (uB = 64), UB += jB.charAt(dB) + jB.charAt(IB) + jB.charAt(NB) + jB.charAt(uB);
          return UB
        }(jB)
      },
      nB = BB => atob(BB),
      dB = BB => "function" === typeof Uint8Array.fromBase64 ? Uint8Array.fromBase64(BB).buffer : function(BB) {
        const jB = nB(BB),
          zB = jB.length,
          QB = new Uint8Array(new ArrayBuffer(zB));
        for (let nB = 0; nB < zB; nB++) QB[nB] = jB.charCodeAt(nB);
        return QB.buffer
      }(BB)
  },
  39976: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => nB,
      e: () => IB
    });
    let QB = [];
    class nB {
      static SetImmediate(BB) {
        0 === QB.length && setTimeout((() => {
          const BB = QB;
          QB = [];
          for (const jB of BB) jB()
        }), 1), QB.push(BB)
      }
    }

    function dB(BB, jB, zB) {
      try {
        if (BB()) return jB(), !0
      } catch (QB) {
        return zB?.(QB), !0
      }
      return !1
    }
    const IB = function(BB, jB, zB) {
      let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
        nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
        IB = arguments.length > 6 ? arguments[6] : void 0;
      if ((!(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]) && dB(BB, jB, zB)) return null;
      const NB = setInterval((() => {
        dB(BB, jB, zB) ? clearInterval(NB) : (nB -= QB, nB < 0 && (clearInterval(NB), zB?.(new Error("Operation timed out after maximum retries. " + (IB || "")), !0)))
      }), QB);
      return () => clearInterval(NB)
    }
  },
  40110: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => QB
    });
    class QB {
      constructor() {
        this._xhr = "undefined" !== typeof _native && _native.XMLHttpRequest ? new _native.XMLHttpRequest : new XMLHttpRequest, this._requestURL = ""
      }
      static get IsCustomRequestAvailable() {
        return Object.keys(QB.CustomRequestHeaders).length > 0 || QB.CustomRequestModifiers.length > 0
      }
      static _CleanUrl(BB) {
        return BB = (BB = BB.replace("file:http:", "http:")).replace("file:https:", "https:")
      }
      static _ShouldSkipRequestModifications(BB) {
        return QB.SkipRequestModificationForBabylonCDN && (BB.includes("preview.babylonjs.com") || BB.includes("cdn.babylonjs.com"))
      }
      static _CollectCustomizations(BB) {
        const jB = {
          ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        };
        if (QB._ShouldSkipRequestModifications(BB)) return {
          url: BB,
          headers: jB
        };
        for (const nB in QB.CustomRequestHeaders) {
          const BB = QB.CustomRequestHeaders[nB];
          BB && (jB[nB] = BB)
        }
        const zB = {
          setRequestHeader: (BB, zB) => {
            jB[BB] = zB
          }
        };
        for (const nB of QB.CustomRequestModifiers) {
          if (QB._ShouldSkipRequestModifications(BB)) break;
          const jB = nB(zB, BB);
          "string" === typeof jB && (BB = jB)
        }
        return {
          url: BB,
          headers: jB
        }
      }
      static async FetchAsync(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const zB = jB.method ?? "GET";
        if ("undefined" !== typeof fetch) {
          const {
            url: nB,
            headers: dB
          } = QB._CollectCustomizations(QB._CleanUrl(BB), jB.headers ?? {});
          return await fetch(nB, {
            method: zB,
            headers: dB,
            body: jB.body ?? void 0
          })
        }
        return await new Promise(((nB, dB) => {
          const IB = new QB;
          IB.responseType = "arraybuffer", IB.addEventListener("readystatechange", (() => {
            if (4 === IB.readyState)
              if (IB.status >= 200 && IB.status < 300) {
                const BB = "undefined" !== typeof Headers ? new Headers : void 0,
                  jB = IB.getResponseHeader("Content-Type");
                jB && BB && BB.set("Content-Type", jB), "undefined" !== typeof Response ? nB(new Response(IB.response, {
                  status: IB.status,
                  statusText: IB.statusText,
                  headers: BB
                })) : nB({
                  ok: !0,
                  status: IB.status,
                  statusText: IB.statusText,
                  headers: {
                    get: BB => IB.getResponseHeader(BB)
                  },
                  arrayBuffer: async () => await Promise.resolve(IB.response)
                })
              } else dB(new Error(`HTTP ${IB.status} loading '${IB.requestURL}': ${IB.statusText}`))
          })), IB.open(zB, BB, jB.headers), IB.send(jB.body ?? null)
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
      addEventListener(BB, jB, zB) {
        this._xhr.addEventListener(BB, jB, zB)
      }
      removeEventListener(BB, jB, zB) {
        this._xhr.removeEventListener(BB, jB, zB)
      }
      abort() {
        this._xhr.abort()
      }
      send(BB) {
        this._xhr.send(BB)
      }
      open(BB, jB, zB) {
        const {
          url: nB,
          headers: dB
        } = QB._CollectCustomizations(jB, zB);
        this._requestURL = QB._CleanUrl(nB), this._xhr.open(BB, this._requestURL, !0);
        for (const QB in dB) this._xhr.setRequestHeader(QB, dB[QB])
      }
      setRequestHeader(BB, jB) {
        this._xhr.setRequestHeader(BB, jB)
      }
      getResponseHeader(BB) {
        return this._xhr.getResponseHeader(BB)
      }
    }
    QB.CustomRequestHeaders = {}, QB.CustomRequestModifiers = new Array, QB.SkipRequestModificationForBabylonCDN = !0
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);