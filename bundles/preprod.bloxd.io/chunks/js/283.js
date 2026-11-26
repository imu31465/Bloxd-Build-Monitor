export const id = 283;
export const ids = [283];
export const modules = {
  41067: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => zB,
      h: () => PB,
      k: () => yB,
      o: () => lB,
      r: () => JB,
      s: () => jB,
      v: () => MB
    });
    var YB = GB(39366),
      DB = GB(41071);

    function QB(BB, OB, GB, YB) {
      switch (OB) {
        case 5120: {
          let OB = BB.getInt8(GB);
          return YB && (OB = Math.max(OB / 127, -1)), OB
        }
        case 5121: {
          let OB = BB.getUint8(GB);
          return YB && (OB /= 255), OB
        }
        case 5122: {
          let OB = BB.getInt16(GB, !0);
          return YB && (OB = Math.max(OB / 32767, -1)), OB
        }
        case 5123: {
          let OB = BB.getUint16(GB, !0);
          return YB && (OB /= 65535), OB
        }
        case 5131:
          return (0, DB.e)(BB.getUint16(GB, !0));
        case 5124:
          return BB.getInt32(GB, !0);
        case 5125:
          return BB.getUint32(GB, !0);
        case 5126:
          return BB.getFloat32(GB, !0);
        default:
          throw new Error(`Invalid component type ${OB}`)
      }
    }

    function oB(BB, OB, GB, YB, QB) {
      switch (OB) {
        case 5120:
          YB && (QB = Math.round(127 * QB)), BB.setInt8(GB, QB);
          break;
        case 5121:
          YB && (QB = Math.round(255 * QB)), BB.setUint8(GB, QB);
          break;
        case 5122:
          YB && (QB = Math.round(32767 * QB)), BB.setInt16(GB, QB, !0);
          break;
        case 5123:
          YB && (QB = Math.round(65535 * QB)), BB.setUint16(GB, QB, !0);
          break;
        case 5131:
          BB.setUint16(GB, (0, DB.l)(QB), !0);
          break;
        case 5124:
          BB.setInt32(GB, QB, !0);
          break;
        case 5125:
          BB.setUint32(GB, QB, !0);
          break;
        case 5126:
          BB.setFloat32(GB, QB, !0);
          break;
        default:
          throw new Error(`Invalid component type ${OB}`)
      }
    }

    function jB(BB) {
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

    function yB(BB, OB, GB, YB, DB, yB, JB, MB) {
      const PB = new Array(YB),
        zB = new Array(YB);
      if (BB instanceof Array) {
        let DB = OB / 4;
        const QB = GB / 4;
        for (let OB = 0; OB < yB; OB += YB) {
          for (let OB = 0; OB < YB; OB++) PB[OB] = zB[OB] = BB[DB + OB];
          MB(zB, OB);
          for (let OB = 0; OB < YB; OB++) PB[OB] !== zB[OB] && (BB[DB + OB] = zB[OB]);
          DB += QB
        }
      } else {
        const lB = ArrayBuffer.isView(BB) ? new DataView(BB.buffer, BB.byteOffset, BB.byteLength) : new DataView(BB),
          pB = jB(DB);
        for (let BB = 0; BB < yB; BB += YB) {
          for (let BB = 0, GB = OB; BB < YB; BB++, GB += pB) PB[BB] = zB[BB] = QB(lB, DB, GB, JB);
          MB(zB, BB);
          for (let BB = 0, GB = OB; BB < YB; BB++, GB += pB) PB[BB] !== zB[BB] && oB(lB, DB, GB, JB, zB[BB]);
          OB += GB
        }
      }
    }

    function JB(BB, OB, GB, DB, QB, oB, JB, MB) {
      const PB = OB * jB(GB),
        zB = JB * OB;
      if (5126 !== GB || QB !== PB) {
        const YB = new Float32Array(zB);
        return yB(BB, DB, QB, OB, GB, zB, oB, ((BB, GB) => {
          for (let DB = 0; DB < OB; DB++) YB[GB + DB] = BB[DB]
        })), YB
      }
      if (!(BB instanceof Array || BB instanceof Float32Array) || 0 !== DB || BB.length !== zB) {
        if (BB instanceof Array) {
          const OB = DB / 4;
          return BB.slice(OB, OB + zB)
        }
        if (ArrayBuffer.isView(BB)) {
          const OB = BB.byteOffset + DB;
          return 0 !== (3 & OB) && (YB.b.Warn("Float array must be aligned to 4-bytes border"), MB = !0), MB ? new Float32Array(BB.buffer.slice(OB, OB + zB * Float32Array.BYTES_PER_ELEMENT)) : new Float32Array(BB.buffer, OB, zB)
        }
        return new Float32Array(BB, DB, zB)
      }
      return MB ? BB.slice() : BB
    }

    function MB(BB, OB, GB, DB, QB, oB, JB) {
      const MB = jB(GB),
        PB = function(BB) {
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
        }(GB),
        zB = oB * OB;
      if (Array.isArray(BB)) {
        if (0 !== (3 & DB) || 0 !== (3 & QB)) throw new Error("byteOffset and byteStride must be a multiple of 4 for number[] data.");
        const YB = DB / 4,
          jB = QB / 4;
        if (YB + (oB - 1) * jB + OB > BB.length) throw new Error("Last accessed index is out of bounds.");
        if (jB < OB) throw new Error("Data stride cannot be smaller than the component size.");
        if (jB !== OB) {
          const YB = new PB(zB);
          return yB(BB, DB, QB, OB, GB, zB, !1, ((BB, GB) => {
            for (let DB = 0; DB < OB; DB++) YB[GB + DB] = BB[DB]
          })), YB
        }
        return new PB(BB.slice(YB, YB + zB))
      }
      let lB, pB = DB;
      ArrayBuffer.isView(BB) ? (lB = BB.buffer, pB += BB.byteOffset) : lB = BB;
      if (pB + (oB - 1) * QB + OB * MB > lB.byteLength) throw new Error("Last accessed byte is out of bounds.");
      const qB = OB * MB;
      if (QB < qB) throw new Error("Byte stride cannot be smaller than the component's byte size.");
      if (QB !== qB) {
        const BB = new PB(zB),
          GB = new Uint8Array(lB, pB),
          YB = new Uint8Array(BB.buffer),
          DB = OB * MB;
        for (let OB = 0, jB = 0, yB = 0; OB < oB; OB++, jB += QB, yB += DB) YB.set(GB.subarray(jB, jB + DB), yB);
        return BB
      }
      return 1 !== MB && 0 !== (pB & MB - 1) && (YB.b.Warn("Array must be aligned to border of element size. Data will be copied."), JB = !0), JB ? new PB(lB.slice(pB, pB + zB * MB)) : new PB(lB, pB, zB)
    }

    function PB(BB, OB, GB, DB, QB, oB, JB, MB) {
      const PB = OB * jB(GB),
        zB = JB * OB;
      if (MB.length !== zB) throw new Error("Output length is not valid");
      if (5126 === GB && QB === PB)
        if (BB instanceof Array) {
          const OB = DB / 4;
          MB.set(BB, OB)
        } else if (ArrayBuffer.isView(BB)) {
        const OB = BB.byteOffset + DB;
        if (0 !== (3 & OB)) return YB.b.Warn("Float array must be aligned to 4-bytes border"), void MB.set(new Float32Array(BB.buffer.slice(OB, OB + zB * Float32Array.BYTES_PER_ELEMENT)));
        const GB = new Float32Array(BB.buffer, OB, zB);
        MB.set(GB)
      } else {
        const OB = new Float32Array(BB, DB, zB);
        MB.set(OB)
      } else yB(BB, DB, QB, OB, GB, zB, oB, ((BB, GB) => {
        for (let YB = 0; YB < OB; YB++) MB[GB + YB] = BB[YB]
      }))
    }

    function zB(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      if (Array.isArray(BB)) {
        for (let DB = 0; DB < OB; DB++)
          if (BB[GB + DB] - YB > 65535) return !0;
        return !1
      }
      return 4 === BB.BYTES_PER_ELEMENT
    }

    function lB(BB) {
      const OB = BB.buffer;
      if (OB instanceof ArrayBuffer) return BB;
      const GB = new ArrayBuffer(BB.byteLength);
      return new Uint8Array(GB).set(new Uint8Array(OB, BB.byteOffset, BB.byteLength)), GB
    }
  },
  40896: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => UB,
      f: () => SB,
      i: () => nB,
      g: () => IB,
      m: () => FB
    });
    class YB {
      constructor() {
        this.children = []
      }
      isValid(BB) {
        return !0
      }
      process(BB, OB, GB) {
        let YB = "";
        if (this.line) {
          let GB = this.line;
          const DB = OB.processor;
          if (DB) {
            DB.lineProcessor && (GB = DB.lineProcessor(GB, OB.isFragment, OB.processingContext));
            const YB = OB.processor?.attributeKeywordName ?? "attribute",
              QB = OB.isFragment && OB.processor?.varyingFragmentKeywordName ? OB.processor?.varyingFragmentKeywordName : !OB.isFragment && OB.processor?.varyingVertexKeywordName ? OB.processor?.varyingVertexKeywordName : "varying";
            if (!OB.isFragment && DB.attributeProcessor && this.line.startsWith(YB)) GB = DB.attributeProcessor(this.line, BB, OB.processingContext);
            else if (DB.varyingProcessor && (DB.varyingCheck?.(this.line, OB.isFragment) || !DB.varyingCheck && this.line.startsWith(QB))) GB = DB.varyingProcessor(this.line, OB.isFragment, BB, OB.processingContext);
            else if (DB.uniformProcessor && DB.uniformRegexp && DB.uniformRegexp.test(this.line)) OB.lookForClosingBracketForUniformBuffer || (GB = DB.uniformProcessor(this.line, OB.isFragment, BB, OB.processingContext));
            else if (DB.uniformBufferProcessor && DB.uniformBufferRegexp && DB.uniformBufferRegexp.test(this.line)) OB.lookForClosingBracketForUniformBuffer || (GB = DB.uniformBufferProcessor(this.line, OB.isFragment, OB.processingContext), OB.lookForClosingBracketForUniformBuffer = !0);
            else if (DB.textureProcessor && DB.textureRegexp && DB.textureRegexp.test(this.line)) GB = DB.textureProcessor(this.line, OB.isFragment, BB, OB.processingContext);
            else if ((DB.uniformProcessor || DB.uniformBufferProcessor) && this.line.startsWith("uniform") && !OB.lookForClosingBracketForUniformBuffer) {
              /uniform\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s+(\S+)\s*;/.test(this.line) ? DB.uniformProcessor && (GB = DB.uniformProcessor(this.line, OB.isFragment, BB, OB.processingContext)) : DB.uniformBufferProcessor && (GB = DB.uniformBufferProcessor(this.line, OB.isFragment, OB.processingContext), OB.lookForClosingBracketForUniformBuffer = !0)
            }
            OB.lookForClosingBracketForUniformBuffer && -1 !== this.line.indexOf("}") && (OB.lookForClosingBracketForUniformBuffer = !1, DB.endOfUniformBufferProcessor && (GB = DB.endOfUniformBufferProcessor(this.line, OB.isFragment, OB.processingContext)))
          }
          YB += GB + "\n"
        }
        for (const DB of this.children) YB += DB.process(BB, OB, GB);
        return this.additionalDefineKey && (BB[this.additionalDefineKey] = this.additionalDefineValue || "true", GB[this.additionalDefineKey] = BB[this.additionalDefineKey]), YB
      }
    }
    class DB {
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
        for (const OB of BB) {
          if (!OB || "\r" === OB) continue;
          if ("#" === OB[0]) {
            this._lines.push(OB);
            continue
          }
          const BB = OB.trim();
          if (!BB) continue;
          if (BB.startsWith("//")) {
            this._lines.push(OB);
            continue
          }
          const GB = BB.indexOf(";");
          if (-1 === GB) this._lines.push(BB);
          else if (GB === BB.length - 1) BB.length > 1 && this._lines.push(BB);
          else {
            const BB = OB.split(";");
            for (let OB = 0; OB < BB.length; OB++) {
              let GB = BB[OB];
              GB && (GB = GB.trim(), GB && this._lines.push(GB + (OB !== BB.length - 1 ? ";" : "")))
            }
          }
        }
      }
    }
    class QB extends YB {
      process(BB, OB, GB) {
        for (let YB = 0; YB < this.children.length; YB++) {
          const DB = this.children[YB];
          if (DB.isValid(BB)) return DB.process(BB, OB, GB)
        }
        return ""
      }
    }
    class oB extends YB {
      isValid(BB) {
        return this.testExpression.isTrue(BB)
      }
    }
    class jB {
      isTrue(BB) {
        return !0
      }
      static postfixToInfix(BB) {
        const OB = [];
        for (const GB of BB)
          if (void 0 === jB._OperatorPriority[GB]) OB.push(GB);
          else {
            const BB = OB[OB.length - 1],
              YB = OB[OB.length - 2];
            OB.length -= 2, OB.push(`(${YB}${GB}${BB})`)
          } return OB[OB.length - 1]
      }
      static infixToPostfix(BB) {
        const OB = jB._InfixToPostfixCache.get(BB);
        if (OB) return OB.accessTime = Date.now(), OB.result;
        if (!BB.includes("&&") && !BB.includes("||") && !BB.includes(")") && !BB.includes("(")) return [BB];
        const GB = [];
        let YB = -1;
        const DB = () => {
            MB = MB.trim(), "" !== MB && (GB.push(MB), MB = "")
          },
          QB = BB => {
            YB < jB._Stack.length - 1 && (jB._Stack[++YB] = BB)
          },
          oB = () => jB._Stack[YB],
          yB = () => -1 === YB ? "!!INVALID EXPRESSION!!" : jB._Stack[YB--];
        let JB = 0,
          MB = "";
        for (; JB < BB.length;) {
          const OB = BB.charAt(JB),
            PB = JB < BB.length - 1 ? BB.substring(JB, 2 + JB) : "";
          if ("(" === OB) MB = "", QB(OB);
          else if (")" === OB) {
            for (DB(); - 1 !== YB && "(" !== oB();) GB.push(yB());
            yB()
          } else if (jB._OperatorPriority[PB] > 1) {
            for (DB(); - 1 !== YB && jB._OperatorPriority[oB()] >= jB._OperatorPriority[PB];) GB.push(yB());
            QB(PB), JB++
          } else MB += OB;
          JB++
        }
        for (DB(); - 1 !== YB;) "(" === oB() ? yB() : GB.push(yB());
        return jB._InfixToPostfixCache.size >= jB.InfixToPostfixCacheLimitSize && jB.ClearCache(), jB._InfixToPostfixCache.set(BB, {
          result: GB,
          accessTime: Date.now()
        }), GB
      }
      static ClearCache() {
        const BB = Array.from(jB._InfixToPostfixCache.entries()).sort(((BB, OB) => BB[1].accessTime - OB[1].accessTime));
        for (let OB = 0; OB < jB.InfixToPostfixCacheCleanupSize; OB++) jB._InfixToPostfixCache.delete(BB[OB][0])
      }
    }
    jB.InfixToPostfixCacheLimitSize = 5e4, jB.InfixToPostfixCacheCleanupSize = 25e3, jB._InfixToPostfixCache = new Map, jB._OperatorPriority = {
      ")": 0,
      "(": 1,
      "||": 2,
      "&&": 3
    }, jB._Stack = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    class yB extends jB {
      constructor(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super(), this.define = BB, this.not = OB
      }
      isTrue(BB) {
        let OB = void 0 !== BB[this.define];
        return this.not && (OB = !OB), OB
      }
    }
    class JB extends jB {
      isTrue(BB) {
        return this.leftOperand.isTrue(BB) || this.rightOperand.isTrue(BB)
      }
    }
    class MB extends jB {
      isTrue(BB) {
        return this.leftOperand.isTrue(BB) && this.rightOperand.isTrue(BB)
      }
    }
    class PB extends jB {
      constructor(BB, OB, GB) {
        super(), this.define = BB, this.operand = OB, this.testValue = GB
      }
      toString() {
        return `${this.define} ${this.operand} ${this.testValue}`
      }
      isTrue(BB) {
        let OB = !1;
        const GB = parseInt(void 0 != BB[this.define] ? BB[this.define] : this.define),
          YB = parseInt(void 0 != BB[this.testValue] ? BB[this.testValue] : this.testValue);
        if (isNaN(GB) || isNaN(YB)) return !1;
        switch (this.operand) {
          case ">":
            OB = GB > YB;
            break;
          case "<":
            OB = GB < YB;
            break;
          case "<=":
            OB = GB <= YB;
            break;
          case ">=":
            OB = GB >= YB;
            break;
          case "==":
            OB = GB === YB;
            break;
          case "!=":
            OB = GB !== YB
        }
        return OB
      }
    }
    var zB = GB(40890),
      lB = GB(40883);
    const pB = /defined\s*?\((.+?)\)/g,
      qB = /defined\s*?\[(.+?)\]/g,
      ZB = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g,
      NB = /__decl__/,
      RB = /light\{X\}.(\w*)/g,
      WB = /\{X\}/g,
      AB = [],
      VB = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;

    function SB(BB) {
      BB.processor && BB.processor.initializeShaders && BB.processor.initializeShaders(BB.processingContext)
    }

    function nB(BB, OB, GB, YB) {
      OB.processor?.preProcessShaderCode && (BB = OB.processor.preProcessShaderCode(BB, OB.isFragment)), IB(BB, OB, (BB => {
        OB.processCodeAfterIncludes && (BB = OB.processCodeAfterIncludes(OB.isFragment ? "fragment" : "vertex", BB, OB.defines));
        const DB = function(BB, OB, GB) {
          let YB = function(BB, OB) {
            if (OB.processor?.noPrecision) return BB;
            const GB = OB.shouldUseHighPrecisionShader; - 1 === BB.indexOf("precision highp float") ? BB = GB ? "precision highp float;\n" + BB : "precision mediump float;\n" + BB : GB || (BB = BB.replace("precision highp float", "precision mediump float"));
            return BB
          }(BB, OB);
          if (!OB.processor) return YB;
          if (0 === OB.processor.shaderLanguage && -1 !== YB.indexOf("#version 3") && (YB = YB.replace("#version 300 es", ""), !OB.processor.parseGLES3)) return YB;
          const DB = OB.defines,
            QB = mB(OB, GB);
          OB.processor.preProcessor && (YB = OB.processor.preProcessor(YB, DB, QB, OB.isFragment, OB.processingContext));
          const oB = {};
          YB = uB(YB, QB, OB, oB), OB.processor.postProcessor && (YB = OB.processor.postProcessor(YB, DB, OB.isFragment, OB.processingContext, GB ? {
            drawBuffersExtensionDisabled: !GB.getCaps().drawBuffersExtension
          } : {}, QB, oB));
          GB?._features.needShaderCodeInlining && (YB = GB.inlineShaderCode(YB));
          return YB
        }(BB, OB, YB);
        GB(DB, BB)
      }))
    }

    function UB(BB, OB, GB) {
      return GB.processor && GB.processor.finalizeShaders ? GB.processor.finalizeShaders(BB, OB, GB.processingContext) : {
        vertexCode: BB,
        fragmentCode: OB
      }
    }

    function fB(BB) {
      const OB = /defined\((.+)\)/.exec(BB);
      if (OB && OB.length) return new yB(OB[1].trim(), "!" === BB[0]);
      const GB = ["==", "!=", ">=", "<=", "<", ">"];
      let YB = "",
        DB = 0;
      for (YB of GB)
        if (DB = BB.indexOf(YB), DB > -1) break;
      if (-1 === DB) return new yB(BB);
      const QB = BB.substring(0, DB).trim(),
        oB = BB.substring(DB + YB.length).trim();
      return new PB(QB, YB, oB)
    }

    function kB(BB, OB) {
      const GB = new oB,
        YB = BB.substring(0, OB);
      let DB = BB.substring(OB);
      return DB = DB.substring(0, (DB.indexOf("//") + 1 || DB.length + 1) - 1).trim(), GB.testExpression = "#ifdef" === YB ? new yB(DB) : "#ifndef" === YB ? new yB(DB, !0) : function(BB) {
        BB = BB.replace(pB, "defined[$1]");
        const OB = jB.infixToPostfix(BB),
          GB = [];
        for (const DB of OB)
          if ("||" !== DB && "&&" !== DB) GB.push(DB);
          else if (GB.length >= 2) {
          let BB = GB[GB.length - 1],
            OB = GB[GB.length - 2];
          GB.length -= 2;
          const YB = "&&" == DB ? new MB : new JB;
          "string" === typeof BB && (BB = BB.replace(qB, "defined($1)")), "string" === typeof OB && (OB = OB.replace(qB, "defined($1)")), YB.leftOperand = "string" === typeof OB ? fB(OB) : OB, YB.rightOperand = "string" === typeof BB ? fB(BB) : BB, GB.push(YB)
        }
        let YB = GB[GB.length - 1];
        return "string" === typeof YB && (YB = YB.replace(qB, "defined($1)")), "string" === typeof YB ? fB(YB) : YB
      }(DB), GB
    }

    function dB(BB, OB, GB, DB) {
      let QB;
      for (; KB(BB, GB, DB);) {
        QB = BB.currentLine;
        const oB = QB.substring(0, 5).toLowerCase();
        if ("#else" === oB) {
          const GB = new YB;
          return OB.children.push(GB), void KB(BB, GB, DB)
        }
        if ("#elif" === oB) {
          const BB = kB(QB, 5);
          OB.children.push(BB), GB = BB
        }
      }
    }

    function KB(BB, OB, GB) {
      for (; BB.canRead;) {
        BB.lineIndex++;
        const DB = BB.currentLine;
        if (DB.indexOf("#") >= 0) {
          const YB = VB.exec(DB);
          if (YB && YB.length) {
            switch (YB[0]) {
              case "#ifdef": {
                const YB = new QB;
                OB.children.push(YB);
                const oB = kB(DB, 6);
                YB.children.push(oB), dB(BB, YB, oB, GB);
                break
              }
              case "#else":
              case "#elif":
                return !0;
              case "#endif":
                return !1;
              case "#ifndef": {
                const YB = new QB;
                OB.children.push(YB);
                const oB = kB(DB, 7);
                YB.children.push(oB), dB(BB, YB, oB, GB);
                break
              }
              case "#if": {
                const YB = new QB,
                  oB = kB(DB, 3);
                OB.children.push(YB), YB.children.push(oB), dB(BB, YB, oB, GB);
                break
              }
            }
            continue
          }
        }
        const oB = new YB;
        if (oB.line = DB, OB.children.push(oB), "#" === DB[0] && "d" === DB[1]) {
          const BB = DB.replace(";", "").split(" ");
          oB.additionalDefineKey = BB[1], 3 === BB.length && (oB.additionalDefineValue = BB[2])
        }
      }
      return !1
    }

    function uB(BB, OB, GB, QB) {
      const oB = new YB,
        jB = new DB;
      return jB.lineIndex = -1, jB.lines = BB.split("\n"), KB(jB, oB, QB), oB.process(OB, GB, QB)
    }

    function mB(BB, OB) {
      const GB = BB.defines,
        YB = {};
      for (const DB of GB) {
        const BB = DB.replace("#define", "").replace(";", "").trim().split(" ");
        YB[BB[0]] = BB.length > 1 ? BB[1] : ""
      }
      return 0 === BB.processor?.shaderLanguage && (YB.GL_ES = "true"), YB.__VERSION__ = BB.version, YB[BB.platformName] = "true", (0, lB.h)(YB, OB?.isNDCHalfZRange, OB?.fDB, OB?.useExactSrgbConversions), YB
    }

    function IB(BB, OB, GB) {
      let YB;
      for (AB.length = 0; null !== (YB = ZB.exec(BB));) AB.push(YB);
      let DB = [BB],
        QB = !1;
      for (const jB of AB) {
        let BB = jB[1];
        if (-1 !== BB.indexOf("__decl__") && (BB = BB.replace(NB, ""), OB.supportsUniformBuffers && (BB = BB.replace("Vertex", "Ubo").replace("Fragment", "Ubo")), BB += "Declaration"), !OB.includesShadersStore[BB]) {
          const YB = OB.shadersRepository + "ShadersInclude/" + BB + ".fx";
          return void FB.loadFile(YB, (YB => {
            OB.includesShadersStore[BB] = YB, IB(DB.join(""), OB, GB)
          }))
        } {
          let GB = OB.includesShadersStore[BB];
          if (jB[2]) {
            const BB = jB[3].split(",");
            for (let OB = 0; OB < BB.length; OB += 2) {
              const YB = new RegExp(BB[OB], "g"),
                DB = BB[OB + 1];
              GB = GB.replace(YB, DB)
            }
          }
          if (jB[4]) {
            const BB = jB[5];
            if (-1 !== BB.indexOf("..")) {
              const YB = BB.split(".."),
                DB = parseInt(YB[0]);
              let QB = parseInt(YB[1]),
                oB = GB.slice(0);
              GB = "", isNaN(QB) && (QB = OB.indexParameters[YB[1]]);
              for (let BB = DB; BB < QB; BB++) OB.supportsUniformBuffers || (oB = oB.replace(RB, ((BB, OB) => OB + "{X}"))), GB += oB.replace(WB, BB.toString()) + "\n"
            } else OB.supportsUniformBuffers || (GB = GB.replace(RB, ((BB, OB) => OB + "{X}"))), GB = GB.replace(WB, BB)
          }
          const YB = [];
          for (const BB of DB) {
            const OB = BB.split(jB[0]);
            for (let BB = 0; BB < OB.length - 1; BB++) YB.push(OB[BB]), YB.push(GB);
            YB.push(OB[OB.length - 1])
          }
          DB = YB, QB = QB || GB.indexOf("#include<") >= 0 || GB.indexOf("#include <") >= 0
        }
      }
      AB.length = 0;
      const oB = DB.join("");
      QB ? IB(oB.toString(), OB, GB) : GB(oB)
    }
    const FB = {
      loadFile: (BB, OB, GB, YB, DB, QB) => {
        throw (0, zB.j)("FileTools")
      }
    }
  },
  40883: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => DB,
      d: () => QB,
      h: () => jB,
      i: () => oB,
      j: () => yB
    });
    var YB = GB(40890);
    const DB = {};

    function QB(BB, OB) {
      return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (OB ? OB + "\n" : "") + BB
    }

    function oB(BB, OB, GB, QB, oB, jB, yB) {
      const JB = yB || DB.loadFile;
      if (!JB) throw (0, YB.j)("FileTools");
      return JB(BB, OB, GB, QB, oB, jB)
    }

    function jB(BB, OB, GB, YB) {
      if (BB) return OB ? BB.IS_NDC_HALF_ZRANGE = "" : delete BB.IS_NDC_HALF_ZRANGE, GB ? BB.USE_REVERSE_DEPTHBUFFER = "" : delete BB.USE_REVERSE_DEPTHBUFFER, void(YB ? BB.USE_EXACT_SRGB_CONVERSIONS = "" : delete BB.USE_EXACT_SRGB_CONVERSIONS);
      {
        let BB = "";
        return OB && (BB += "#define IS_NDC_HALF_ZRANGE"), GB && (BB && (BB += "\n"), BB += "#define USE_REVERSE_DEPTHBUFFER"), YB && (BB && (BB += "\n"), BB += "#define USE_EXACT_SRGB_CONVERSIONS"), BB
      }
    }

    function yB(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        YB = arguments.length > 3 ? arguments[3] : void 0;
      switch (BB) {
        case 3: {
          const BB = new Int8Array(OB);
          return YB && BB.set(new Int8Array(YB)), BB
        }
        case 0: {
          const BB = new Uint8Array(OB);
          return YB && BB.set(new Uint8Array(YB)), BB
        }
        case 4: {
          const BB = "number" !== typeof OB ? new Int16Array(OB) : new Int16Array(GB ? OB / 2 : OB);
          return YB && BB.set(new Int16Array(YB)), BB
        }
        case 5:
        case 8:
        case 9:
        case 10:
        case 2: {
          const BB = "number" !== typeof OB ? new Uint16Array(OB) : new Uint16Array(GB ? OB / 2 : OB);
          return YB && BB.set(new Uint16Array(YB)), BB
        }
        case 6: {
          const BB = "number" !== typeof OB ? new Int32Array(OB) : new Int32Array(GB ? OB / 4 : OB);
          return YB && BB.set(new Int32Array(YB)), BB
        }
        case 7:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15: {
          const BB = "number" !== typeof OB ? new Uint32Array(OB) : new Uint32Array(GB ? OB / 4 : OB);
          return YB && BB.set(new Uint32Array(YB)), BB
        }
        case 1: {
          const BB = "number" !== typeof OB ? new Float32Array(OB) : new Float32Array(GB ? OB / 4 : OB);
          return YB && BB.set(new Float32Array(YB)), BB
        }
      }
      const DB = new Uint8Array(OB);
      return YB && DB.set(new Uint8Array(YB)), DB
    }
  },
  40890: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => JB,
      e: () => MB,
      g: () => yB,
      j: () => DB
    });
    const YB = {};

    function DB(BB) {
      if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !YB[BB]) return YB[BB] = !0, `${BB} needs to be imported before as it contains a side-effect required by your code.`
    }
    const QB = {};
    let oB = !1,
      jB = 0;

    function yB(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const YB = function() {
        if ((GB || oB) && 0 === jB) {
          const GB = `${BB}.${OB}`;
          QB[GB] || (QB[GB] = !0, console.warn(`[Babylon.js] ${GB}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
        }
      };
      return YB.__isSideEffectStub = !0, YB
    }

    function JB(BB) {
      return !!BB && !BB.__isSideEffectStub
    }

    function MB(BB, OB) {
      return {
        get() {},
        set(BB) {
          Object.defineProperty(this, OB, {
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
  40870: (BB, OB, GB) => {
    function YB() {
      return "undefined" !== typeof window
    }

    function DB() {
      return "undefined" !== typeof navigator
    }

    function QB() {
      return "undefined" !== typeof document
    }

    function oB(BB) {
      let OB = "",
        GB = BB.firstChild;
      for (; GB;) 3 === GB.nodeType && (OB += GB.textContent), GB = GB.nextSibling;
      return OB
    }
    GB.d(OB, {
      b: () => oB,
      c: () => QB,
      g: () => DB,
      j: () => YB
    })
  },
  41049: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => YB,
      g: () => DB,
      i: () => QB
    });
    class YB extends Error {}
    YB._setPrototypeOf = Object.setPrototypeOf || ((BB, OB) => (BB.__proto__ = OB, BB));
    const DB = {
      MeshInvalidPositionsError: 0,
      UnsupportedTextureError: 1e3,
      GLTFLoaderUnexpectedMagicError: 2e3,
      SceneLoaderError: 3e3,
      LoadFileError: 4e3,
      RequestFileError: 4001,
      ReadFileError: 4002
    };
    class QB extends YB {
      constructor(BB, OB, GB) {
        super(BB), this.errorCode = OB, this.innerError = GB, this.name = "RuntimeError", YB._setPrototypeOf(this, QB.prototype)
      }
    }
  },
  41035: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => mB,
      e: () => WB,
      g: () => kB,
      j: () => KB,
      m: () => UB,
      n: () => SB,
      o: () => nB,
      p: () => gB,
      r: () => fB,
      s: () => AB
    });
    var YB = GB(41041),
      DB = GB(40870),
      QB = GB(37802);
    class oB {}
    oB.FilesToLoad = {};
    var jB = GB(41049),
      yB = GB(41058),
      JB = GB(37796),
      MB = GB(40883),
      PB = GB(40896),
      zB = GB(39366),
      lB = GB(40899),
      pB = GB(41067);
    const qB = new RegExp(/^data:([^,]+\/[^,]+)?;base64,/i);
    class ZB extends jB.i {
      constructor(BB, OB) {
        super(BB, jB.g.LoadFileError), this.name = "LoadFileError", jB.d._setPrototypeOf(this, ZB.prototype), OB instanceof YB.e ? this.request = OB : this.file = OB
      }
    }
    class NB extends jB.i {
      constructor(BB, OB) {
        super(BB, jB.g.RequestFileError), this.request = OB, this.name = "RequestFileError", jB.d._setPrototypeOf(this, NB.prototype)
      }
    }
    class RB extends jB.i {
      constructor(BB, OB) {
        super(BB, jB.g.ReadFileError), this.file = OB, this.name = "ReadFileError", jB.d._setPrototypeOf(this, RB.prototype)
      }
    }
    const WB = {
        DefaultRetryStrategy: class {
          static ExponentialBackoff() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
              OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
            return (GB, YB, DB) => 0 !== YB.status || DB >= BB || -1 !== GB.indexOf("file:") ? -1 : Math.pow(2, DB) * OB
          }
        }.ExponentialBackoff(),
        BaseUrl: "",
        CorsBehavior: "anonymous",
        PreprocessUrl: BB => BB,
        ScriptBaseUrl: "",
        ScriptPreprocessUrl: BB => BB,
        CleanUrl: BB => BB = BB.replace(/#/gm, "%23")
      },
      AB = (BB, OB) => {
        if ((!BB || 0 !== BB.indexOf("data:")) && WB.CorsBehavior)
          if ("string" === typeof WB.CorsBehavior || WB.CorsBehavior instanceof String) OB.crossOrigin = WB.CorsBehavior;
          else {
            const GB = WB.CorsBehavior(BB);
            GB && (OB.crossOrigin = GB)
          }
      },
      VB = {
        getRequiredSize: null
      },
      SB = function(BB, OB, GB, DB) {
        let QB, jB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
          MB = arguments.length > 5 ? arguments[5] : void 0,
          PB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : JB.b.LastCreatedEngine;
        if ("undefined" === typeof HTMLImageElement && !PB?._features.forceBitmapOverHTMLImageElement) return GB("LoadImage is only supported in web or BabylonNative environments."), null;
        if (PB?._features.forceBitmapOverHTMLImageElement && "string" !== typeof BB && "undefined" !== typeof Blob) {
          let YB;
          if (BB instanceof Blob) YB = BB;
          else {
            const OB = BB instanceof ArrayBuffer ? BB : (0, pB.o)(BB);
            YB = new Blob([OB], {
              type: jB
            })
          }
          return PB.createImageBitmap(YB, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...MB
          }).then(OB).catch((OB => {
            GB && GB("Error while trying to load image: " + BB, OB)
          })), null
        }
        let zB = !1;
        if (BB instanceof ArrayBuffer || ArrayBuffer.isView(BB))
          if ("undefined" !== typeof Blob && "undefined" !== typeof URL) {
            let OB;
            OB = BB instanceof ArrayBuffer ? BB : (0, pB.o)(BB), QB = URL.createObjectURL(new Blob([OB], {
              type: jB
            })), zB = !0
          } else QB = `data:${jB};base64,` + (0, yB.k)(BB);
        else BB instanceof Blob ? (QB = URL.createObjectURL(BB), zB = !0) : (QB = WB.CleanUrl(BB), QB = WB.PreprocessUrl(QB));
        const lB = OB => {
          if (GB) {
            const YB = QB || BB.toString();
            GB(`Error while trying to load image: ${0===YB.indexOf("http")||YB.length<=128?YB:YB.slice(0,128)+"..."}`, OB)
          }
        };
        if (PB?._features.forceBitmapOverHTMLImageElement) return UB(QB, (YB => {
          PB.createImageBitmap(new Blob([YB], {
            type: jB
          }), {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...MB
          }).then((BB => {
            OB(BB), zB && URL.revokeObjectURL(QB)
          })).catch((OB => {
            GB && GB("Error while trying to load image: " + BB, OB)
          }))
        }), void 0, DB || void 0, !0, ((BB, OB) => {
          lB(OB)
        })), null;
        const qB = new Image;
        if (VB.getRequiredSize) {
          const OB = VB.getRequiredSize(BB);
          OB.width && (qB.width = OB.width), OB.height && (qB.height = OB.height)
        }
        AB(QB, qB);
        const ZB = [],
          NB = () => {
            for (const BB of ZB) BB.target.removeEventListener(BB.name, BB.handler);
            ZB.length = 0
          };
        ZB.push({
          target: qB,
          name: "load",
          handler: () => {
            NB(), OB(qB), zB && qB.src && URL.revokeObjectURL(qB.src)
          }
        }), ZB.push({
          target: qB,
          name: "error",
          handler: BB => {
            NB(), lB(BB), zB && qB.src && URL.revokeObjectURL(qB.src)
          }
        }), ZB.push({
          target: document,
          name: "securitypolicyviolation",
          handler: BB => {
            if (BB.blockedURI !== qB.src || "jP" === BB.disposition) return;
            NB();
            const OB = new Error(`CSP violation of policy ${BB.effectiveDirective} ${BB.blockedURI}. Current policy is ${BB.originalPolicy}`);
            JB.b.UseFallbackTexture = !1, lB(OB), zB && qB.src && URL.revokeObjectURL(qB.src), qB.src = ""
          }
        }), (() => {
          for (const BB of ZB) BB.target.addEventListener(BB.name, BB.handler)
        })();
        const RB = "blob:" === QB.substring(0, 5),
          SB = "data:" === QB.substring(0, 5),
          nB = () => {
            RB || SB || !YB.e.IsCustomRequestAvailable ? qB.src = QB : UB(QB, ((BB, OB, GB) => {
              const YB = new Blob([BB], {
                  type: !jB && GB ? GB : jB
                }),
                DB = URL.createObjectURL(YB);
              zB = !0, qB.src = DB
            }), void 0, DB || void 0, !0, ((BB, OB) => {
              lB(OB)
            }))
          },
          fB = () => {
            DB && DB.loadImage(QB, qB)
          };
        if (!RB && !SB && DB && DB.enableTexturesOffline) DB.open(fB, nB);
        else {
          if (-1 !== QB.indexOf("file:")) {
            const BB = decodeURIComponent(QB.substring(5).toLowerCase());
            if (oB.FilesToLoad[BB] && "undefined" !== typeof URL) {
              try {
                let OB;
                try {
                  OB = URL.createObjectURL(oB.FilesToLoad[BB])
                } catch (kB) {
                  OB = URL.createObjectURL(oB.FilesToLoad[BB])
                }
                qB.src = OB, zB = !0
              } catch (dB) {
                qB.src = ""
              }
              return qB
            }
          }
          nB()
        }
        return qB
      },
      nB = (BB, OB, GB, YB, DB) => {
        const oB = new FileReader,
          jB = {
            onCompleteObservable: new QB.b,
            abort: () => oB.abort()
          };
        return oB.onloadend = () => jB.onCompleteObservable.notifyObservers(jB), DB && (oB.onerror = () => {
          DB(new RB(`Unable to read ${BB.name}`, BB))
        }), oB.onload = BB => {
          OB(BB.target.result)
        }, GB && (oB.onprogress = GB), YB ? oB.readAsArrayBuffer(BB) : oB.readAsText(BB), jB
      },
      UB = (BB, OB, GB, YB, DB, yB, JB) => {
        if (BB.name) return nB(BB, OB, GB, DB, yB ? BB => {
          yB(void 0, BB)
        } : void 0);
        const MB = BB;
        if (-1 !== MB.indexOf("file:")) {
          let BB = decodeURIComponent(MB.substring(5).toLowerCase());
          0 === BB.indexOf("./") && (BB = BB.substring(2));
          const YB = oB.FilesToLoad[BB];
          if (YB) return nB(YB, OB, GB, DB, yB ? BB => yB(void 0, new ZB(BB.message, BB.file)) : void 0)
        }
        const {
          match: PB,
          type: pB
        } = uB(MB);
        if (PB) {
          const BB = {
            onCompleteObservable: new QB.b,
            abort: () => () => {}
          };
          try {
            const BB = DB ? mB(MB) : IB(MB);
            OB(BB, void 0, pB)
          } catch (jB) {
            yB ? yB(void 0, jB) : zB.b.Error(jB.message || "Failed to parse the Data URL")
          }
          return lB.c.SetImmediate((() => {
            BB.onCompleteObservable.notifyObservers(BB)
          })), BB
        }
        return fB(MB, ((BB, GB) => {
          OB(BB, GB?.responseURL, GB?.getResponseHeader("content-type"))
        }), GB, YB, DB, yB ? BB => {
          yB(BB.request, new ZB(BB.message, BB.request))
        } : void 0, JB)
      },
      fB = (BB, OB, GB, oB, jB, yB, MB) => {
        null !== oB && (oB ?? (oB = JB.b.LastCreatedScene?.offlineProvider)), BB = WB.CleanUrl(BB), BB = WB.PreprocessUrl(BB);
        const PB = WB.BaseUrl + BB;
        let lB = !1;
        const pB = {
            onCompleteObservable: new QB.b,
            abort: () => lB = !0
          },
          qB = () => {
            let BB, QB = new YB.e,
              oB = null;
            const JB = () => {
              QB && (GB && QB.removeEventListener("progress", GB), BB && QB.removeEventListener("readystatechange", BB), QB.removeEventListener("loadend", qB))
            };
            let qB = () => {
              JB(), pB.onCompleteObservable.notifyObservers(pB), pB.onCompleteObservable.clear(), GB = void 0, BB = null, qB = null, yB = void 0, MB = void 0, OB = void 0
            };
            pB.abort = () => {
              lB = !0, qB && qB(), QB && QB.readyState !== (XMLHttpRequest.DONE || 4) && QB.abort(), null !== oB && (clearTimeout(oB), oB = null), QB = null
            };
            const ZB = BB => {
                const OB = BB.message || "Unknown error";
                yB && QB ? yB(new NB(OB, QB)) : zB.b.Error(OB)
              },
              RB = zB => {
                if (QB) {
                  if (QB.open("GET", PB), MB) try {
                    MB(QB)
                  } catch (pB) {
                    return void ZB(pB)
                  }
                  jB && (QB.responseType = "arraybuffer"), GB && QB.addEventListener("progress", GB), qB && QB.addEventListener("loadend", qB), BB = () => {
                    if (!lB && QB && QB.readyState === (XMLHttpRequest.DONE || 4)) {
                      if (BB && QB.removeEventListener("readystatechange", BB), QB.status >= 200 && QB.status < 300 || 0 === QB.status && (!(0, DB.j)() || dB())) {
                        const BB = jB ? QB.response : QB.responseText;
                        if (null !== BB) {
                          try {
                            OB && OB(BB, QB)
                          } catch (pB) {
                            ZB(pB)
                          }
                          return
                        }
                      }
                      const GB = WB.DefaultRetryStrategy;
                      if (GB) {
                        const BB = GB(PB, QB, zB);
                        if (-1 !== BB) return JB(), QB = new YB.e, void(oB = setTimeout((() => RB(zB + 1)), BB))
                      }
                      const MB = new NB("Error status: " + QB.status + " " + QB.statusText + " - Unable to load " + PB, QB);
                      yB && yB(MB)
                    }
                  }, QB.addEventListener("readystatechange", BB), QB.send()
                }
              };
            RB(0)
          };
        if (oB && oB.enableSceneOffline && !BB.startsWith("blob:")) {
          const YB = BB => {
              BB && BB.status > 400 ? yB && yB(BB) : qB()
            },
            DB = () => {
              oB && oB.loadFile(WB.BaseUrl + BB, (BB => {
                !lB && OB && OB(BB), pB.onCompleteObservable.notifyObservers(pB)
              }), GB ? BB => {
                !lB && GB && GB(BB)
              } : void 0, YB, jB)
            };
          oB.open(DB, YB)
        } else qB();
        return pB
      },
      kB = BB => {
        const {
          match: OB,
          type: GB
        } = uB(BB);
        if (OB) return GB || void 0;
        const YB = BB.lastIndexOf(".");
        switch (BB.substring(YB + 1).toLowerCase()) {
          case "glb":
            return "model/gltf-binary";
          case "bin":
            return "application/octet-stream";
          case "Im":
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
      dB = () => "undefined" !== typeof location && "file:" === location.protocol,
      KB = BB => qB.test(BB),
      uB = BB => {
        const OB = qB.exec(BB);
        if (null === OB || 0 === OB.length) return {
          match: !1,
          type: ""
        };
        return {
          match: !0,
          type: OB[0].replace("data:", "").replace(";base64,", "")
        }
      };

    function mB(BB) {
      return (0, yB.e)(BB.split(",")[1])
    }
    const IB = BB => (0, yB.g)(BB.split(",")[1]);
    let FB;
    const iB = (BB, OB, GB, YB, DB, QB, oB, jB, yB, JB) => {
      FB = {
        DecodeBase64UrlToBinary: BB,
        DecodeBase64UrlToString: OB,
        DefaultRetryStrategy: GB.DefaultRetryStrategy,
        BaseUrl: GB.BaseUrl,
        CorsBehavior: GB.CorsBehavior,
        PreprocessUrl: GB.PreprocessUrl,
        IsBase64DataUrl: YB,
        IsFileURL: DB,
        LoadFile: QB,
        LoadImage: oB,
        ReadFile: jB,
        RequestFile: yB,
        SetCorsBehavior: JB
      }, Object.defineProperty(FB, "DefaultRetryStrategy", {
        get: function() {
          return GB.DefaultRetryStrategy
        },
        set: function(BB) {
          GB.DefaultRetryStrategy = BB
        }
      }), Object.defineProperty(FB, "BaseUrl", {
        get: function() {
          return GB.BaseUrl
        },
        set: function(BB) {
          GB.BaseUrl = BB
        }
      }), Object.defineProperty(FB, "PreprocessUrl", {
        get: function() {
          return GB.PreprocessUrl
        },
        set: function(BB) {
          GB.PreprocessUrl = BB
        }
      }), Object.defineProperty(FB, "CorsBehavior", {
        get: function() {
          return GB.CorsBehavior
        },
        set: function(BB) {
          GB.CorsBehavior = BB
        }
      })
    };
    let LB = !1;

    function gB() {
      LB || (LB = !0, iB(mB, IB, WB, KB, dB, UB, SB, nB, fB, AB), MB.b.loadFile = UB, MB.b.loadImage = SB, PB.m.loadFile = UB)
    }
  },
  41071: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => jB,
      h: () => QB,
      l: () => oB
    });
    let YB = null;

    function DB() {
      if (YB) return YB;
      const BB = new ArrayBuffer(4),
        OB = new Float32Array(BB),
        GB = new Uint32Array(BB),
        DB = new Uint32Array(512),
        QB = new Uint32Array(512);
      for (let YB = 0; YB < 256; ++YB) {
        const BB = YB - 127;
        BB < -24 ? (DB[YB] = 0, DB[256 | YB] = 32768, QB[YB] = 24, QB[256 | YB] = 24) : BB < -14 ? (DB[YB] = 1024 >> -BB - 14, DB[256 | YB] = 1024 >> -BB - 14 | 32768, QB[YB] = -BB - 1, QB[256 | YB] = -BB - 1) : BB <= 15 ? (DB[YB] = BB + 15 << 10, DB[256 | YB] = BB + 15 << 10 | 32768, QB[YB] = 13, QB[256 | YB] = 13) : BB < 128 ? (DB[YB] = 31744, DB[256 | YB] = 64512, QB[YB] = 24, QB[256 | YB] = 24) : (DB[YB] = 31744, DB[256 | YB] = 64512, QB[YB] = 13, QB[256 | YB] = 13)
      }
      const oB = new Uint32Array(2048),
        jB = new Uint32Array(64),
        yB = new Uint32Array(64);
      for (let YB = 1; YB < 1024; ++YB) {
        let BB = YB << 13,
          OB = 0;
        for (; 0 === (8388608 & BB);) BB <<= 1, OB -= 8388608;
        BB &= -8388609, OB += 947912704, oB[YB] = BB | OB
      }
      for (let YB = 1024; YB < 2048; ++YB) oB[YB] = 939524096 + (YB - 1024 << 13);
      for (let YB = 1; YB < 31; ++YB) jB[YB] = YB << 23;
      jB[31] = 1199570944, jB[32] = 2147483648;
      for (let YB = 33; YB < 63; ++YB) jB[YB] = 2147483648 + (YB - 32 << 23);
      jB[63] = 3347054592;
      for (let YB = 1; YB < 64; ++YB) 32 !== YB && (yB[YB] = 1024);
      return YB = {
        floatView: OB,
        uint32View: GB,
        baseTable: DB,
        shiftTable: QB,
        mantissaTable: oB,
        exponentTable: jB,
        offsetTable: yB
      }, YB
    }
    const QB = 65504;

    function oB(BB) {
      const OB = DB();
      OB.floatView[0] = BB;
      const GB = OB.uint32View[0],
        YB = GB >> 23 & 511;
      return OB.baseTable[YB] + ((8388607 & GB) >> OB.shiftTable[YB])
    }

    function jB(BB) {
      const OB = DB();
      return OB.uint32View[0] = OB.mantissaTable[OB.offsetTable[BB >> 10] + (1023 & BB)] + OB.exponentTable[BB >> 10], OB.floatView[0]
    }
  },
  41058: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => QB,
      g: () => DB,
      k: () => YB
    });
    const YB = BB => {
        const OB = ArrayBuffer.isView(BB) ? new Uint8Array(BB.buffer, BB.byteOffset, BB.byteLength) : new Uint8Array(BB);
        return "function" === typeof OB.toBase64 ? OB.toBase64() : function(BB) {
          const OB = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          let GB, YB, DB, QB, oB, jB, yB, JB = "",
            MB = 0;
          for (; MB < BB.length;) GB = BB[MB++], YB = MB < BB.length ? BB[MB++] : Number.NaN, DB = MB < BB.length ? BB[MB++] : Number.NaN, QB = GB >> 2, oB = (3 & GB) << 4 | YB >> 4, jB = (15 & YB) << 2 | DB >> 6, yB = 63 & DB, isNaN(YB) ? jB = yB = 64 : isNaN(DB) && (yB = 64), JB += OB.charAt(QB) + OB.charAt(oB) + OB.charAt(jB) + OB.charAt(yB);
          return JB
        }(OB)
      },
      DB = BB => atob(BB),
      QB = BB => "function" === typeof Uint8Array.fromBase64 ? Uint8Array.fromBase64(BB).buffer : function(BB) {
        const OB = DB(BB),
          GB = OB.length,
          YB = new Uint8Array(new ArrayBuffer(GB));
        for (let DB = 0; DB < GB; DB++) YB[DB] = OB.charCodeAt(DB);
        return YB.buffer
      }(BB)
  },
  40899: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => DB,
      d: () => oB
    });
    let YB = [];
    class DB {
      static SetImmediate(BB) {
        0 === YB.length && setTimeout((() => {
          const BB = YB;
          YB = [];
          for (const OB of BB) OB()
        }), 1), YB.push(BB)
      }
    }

    function QB(BB, OB, GB) {
      try {
        if (BB()) return OB(), !0
      } catch (YB) {
        return GB?.(YB), !0
      }
      return !1
    }
    const oB = function(BB, OB, GB) {
      let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
        DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
        oB = arguments.length > 6 ? arguments[6] : void 0;
      if ((!(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]) && QB(BB, OB, GB)) return null;
      const jB = setInterval((() => {
        QB(BB, OB, GB) ? clearInterval(jB) : (DB -= YB, DB < 0 && (clearInterval(jB), GB?.(new Error("Operation timed out after maximum retries. " + (oB || "")), !0)))
      }), YB);
      return () => clearInterval(jB)
    }
  },
  41041: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => YB
    });
    class YB {
      constructor() {
        this._xhr = "undefined" !== typeof _native && _native.XMLHttpRequest ? new _native.XMLHttpRequest : new XMLHttpRequest, this._requestURL = ""
      }
      static get IsCustomRequestAvailable() {
        return Object.keys(YB.CustomRequestHeaders).length > 0 || YB.CustomRequestModifiers.length > 0
      }
      static _CleanUrl(BB) {
        return BB = (BB = BB.replace("file:http:", "http:")).replace("file:https:", "https:")
      }
      static _ShouldSkipRequestModifications(BB) {
        return YB.SkipRequestModificationForBabylonCDN && (BB.includes("preview.babylonjs.com") || BB.includes("cdn.babylonjs.com"))
      }
      static _CollectCustomizations(BB) {
        const OB = {
          ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        };
        if (YB._ShouldSkipRequestModifications(BB)) return {
          url: BB,
          headers: OB
        };
        for (const DB in YB.CustomRequestHeaders) {
          const BB = YB.CustomRequestHeaders[DB];
          BB && (OB[DB] = BB)
        }
        const GB = {
          setRequestHeader: (BB, GB) => {
            OB[BB] = GB
          }
        };
        for (const DB of YB.CustomRequestModifiers) {
          if (YB._ShouldSkipRequestModifications(BB)) break;
          const OB = DB(GB, BB);
          "string" === typeof OB && (BB = OB)
        }
        return {
          url: BB,
          headers: OB
        }
      }
      static async FetchAsync(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const GB = OB.method ?? "GET";
        if ("undefined" !== typeof fetch) {
          const {
            url: DB,
            headers: QB
          } = YB._CollectCustomizations(YB._CleanUrl(BB), OB.headers ?? {});
          return await fetch(DB, {
            method: GB,
            headers: QB,
            body: OB.body ?? void 0
          })
        }
        return await new Promise(((DB, QB) => {
          const oB = new YB;
          oB.responseType = "arraybuffer", oB.addEventListener("readystatechange", (() => {
            if (4 === oB.readyState)
              if (oB.status >= 200 && oB.status < 300) {
                const BB = "undefined" !== typeof Headers ? new Headers : void 0,
                  OB = oB.getResponseHeader("Content-Type");
                OB && BB && BB.set("Content-Type", OB), "undefined" !== typeof Response ? DB(new Response(oB.response, {
                  status: oB.status,
                  statusText: oB.statusText,
                  headers: BB
                })) : DB({
                  ok: !0,
                  status: oB.status,
                  statusText: oB.statusText,
                  headers: {
                    get: BB => oB.getResponseHeader(BB)
                  },
                  arrayBuffer: async () => await Promise.resolve(oB.response)
                })
              } else QB(new Error(`HTTP ${oB.status} loading '${oB.requestURL}': ${oB.statusText}`))
          })), oB.open(GB, BB, OB.headers), oB.send(OB.body ?? null)
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
      addEventListener(BB, OB, GB) {
        this._xhr.addEventListener(BB, OB, GB)
      }
      removeEventListener(BB, OB, GB) {
        this._xhr.removeEventListener(BB, OB, GB)
      }
      abort() {
        this._xhr.abort()
      }
      send(BB) {
        this._xhr.send(BB)
      }
      open(BB, OB, GB) {
        const {
          url: DB,
          headers: QB
        } = YB._CollectCustomizations(OB, GB);
        this._requestURL = YB._CleanUrl(DB), this._xhr.open(BB, this._requestURL, !0);
        for (const YB in QB) this._xhr.setRequestHeader(YB, QB[YB])
      }
      setRequestHeader(BB, OB) {
        this._xhr.setRequestHeader(BB, OB)
      }
      getResponseHeader(BB) {
        return this._xhr.getResponseHeader(BB)
      }
    }
    YB.CustomRequestHeaders = {}, YB.CustomRequestModifiers = new Array, YB.SkipRequestModificationForBabylonCDN = !0
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);