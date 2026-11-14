export const id = 224;
export const ids = [224];
export const modules = {
  38031: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => eF,
      i: () => iW,
      m: () => dF,
      o: () => EF,
      r: () => PF,
      t: () => bW,
      x: () => RF
    });
    var CF = SF(37076),
      AF = SF(38034);

    function uF(FF, WF, SF, CF) {
      switch (WF) {
        case 5120: {
          let WF = FF.getInt8(SF);
          return CF && (WF = Math.max(WF / 127, -1)), WF
        }
        case 5121: {
          let WF = FF.getUint8(SF);
          return CF && (WF /= 255), WF
        }
        case 5122: {
          let WF = FF.getInt16(SF, !0);
          return CF && (WF = Math.max(WF / 32767, -1)), WF
        }
        case 5123: {
          let WF = FF.getUint16(SF, !0);
          return CF && (WF /= 65535), WF
        }
        case 5131:
          return (0, AF.e)(FF.getUint16(SF, !0));
        case 5124:
          return FF.getInt32(SF, !0);
        case 5125:
          return FF.getUint32(SF, !0);
        case 5126:
          return FF.getFloat32(SF, !0);
        default:
          throw new Error(`Invalid component type ${WF}`)
      }
    }

    function hF(FF, WF, SF, CF, uF) {
      switch (WF) {
        case 5120:
          CF && (uF = Math.round(127 * uF)), FF.setInt8(SF, uF);
          break;
        case 5121:
          CF && (uF = Math.round(255 * uF)), FF.setUint8(SF, uF);
          break;
        case 5122:
          CF && (uF = Math.round(32767 * uF)), FF.setInt16(SF, uF, !0);
          break;
        case 5123:
          CF && (uF = Math.round(65535 * uF)), FF.setUint16(SF, uF, !0);
          break;
        case 5131:
          FF.setUint16(SF, (0, AF.h)(uF), !0);
          break;
        case 5124:
          FF.setInt32(SF, uF, !0);
          break;
        case 5125:
          FF.setUint32(SF, uF, !0);
          break;
        case 5126:
          FF.setFloat32(SF, uF, !0);
          break;
        default:
          throw new Error(`Invalid component type ${WF}`)
      }
    }

    function bW(FF) {
      switch (FF) {
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
          throw new Error(`Invalid type '${FF}'`)
      }
    }

    function dF(FF, WF, SF, CF, AF, dF, PF, RF) {
      const iW = new Array(CF),
        eF = new Array(CF);
      if (FF instanceof Array) {
        let AF = WF / 4;
        const uF = SF / 4;
        for (let WF = 0; WF < dF; WF += CF) {
          for (let WF = 0; WF < CF; WF++) iW[WF] = eF[WF] = FF[AF + WF];
          RF(eF, WF);
          for (let WF = 0; WF < CF; WF++) iW[WF] !== eF[WF] && (FF[AF + WF] = eF[WF]);
          AF += uF
        }
      } else {
        const EF = ArrayBuffer.isView(FF) ? new DataView(FF.buffer, FF.byteOffset, FF.byteLength) : new DataView(FF),
          QF = bW(AF);
        for (let FF = 0; FF < dF; FF += CF) {
          for (let FF = 0, SF = WF; FF < CF; FF++, SF += QF) iW[FF] = eF[FF] = uF(EF, AF, SF, PF);
          RF(eF, FF);
          for (let FF = 0, SF = WF; FF < CF; FF++, SF += QF) iW[FF] !== eF[FF] && hF(EF, AF, SF, PF, eF[FF]);
          WF += SF
        }
      }
    }

    function PF(FF, WF, SF, AF, uF, hF, PF, RF) {
      const iW = WF * bW(SF),
        eF = PF * WF;
      if (5126 !== SF || uF !== iW) {
        const CF = new Float32Array(eF);
        return dF(FF, AF, uF, WF, SF, eF, hF, ((FF, SF) => {
          for (let AF = 0; AF < WF; AF++) CF[SF + AF] = FF[AF]
        })), CF
      }
      if (!(FF instanceof Array || FF instanceof Float32Array) || 0 !== AF || FF.length !== eF) {
        if (FF instanceof Array) {
          const WF = AF / 4;
          return FF.slice(WF, WF + eF)
        }
        if (ArrayBuffer.isView(FF)) {
          const WF = FF.byteOffset + AF;
          return 0 !== (3 & WF) && (CF.b.Warn("Float array must be aligned to 4-bytes border"), RF = !0), RF ? new Float32Array(FF.buffer.slice(WF, WF + eF * Float32Array.BYTES_PER_ELEMENT)) : new Float32Array(FF.buffer, WF, eF)
        }
        return new Float32Array(FF, AF, eF)
      }
      return RF ? FF.slice() : FF
    }

    function RF(FF, WF, SF, AF, uF, hF, PF) {
      const RF = bW(SF),
        iW = function(FF) {
          switch (FF) {
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
              throw new Error(`Invalid component type '${FF}'`)
          }
        }(SF),
        eF = hF * WF;
      if (Array.isArray(FF)) {
        if (0 !== (3 & AF) || 0 !== (3 & uF)) throw new Error("byteOffset and byteStride must be a multiple of 4 for number[] data.");
        const CF = AF / 4,
          bW = uF / 4;
        if (CF + (hF - 1) * bW + WF > FF.length) throw new Error("Last accessed index is out of bounds.");
        if (bW < WF) throw new Error("Data stride cannot be smaller than the component size.");
        if (bW !== WF) {
          const CF = new iW(eF);
          return dF(FF, AF, uF, WF, SF, eF, !1, ((FF, SF) => {
            for (let AF = 0; AF < WF; AF++) CF[SF + AF] = FF[AF]
          })), CF
        }
        return new iW(FF.slice(CF, CF + eF))
      }
      let EF, QF = AF;
      ArrayBuffer.isView(FF) ? (EF = FF.buffer, QF += FF.byteOffset) : EF = FF;
      if (QF + (hF - 1) * uF + WF * RF > EF.byteLength) throw new Error("Last accessed byte is out of bounds.");
      const rW = WF * RF;
      if (uF < rW) throw new Error("Byte stride cannot be smaller than the component's byte size.");
      if (uF !== rW) {
        const FF = new iW(eF),
          SF = new Uint8Array(EF, QF),
          CF = new Uint8Array(FF.buffer),
          AF = WF * RF;
        for (let WF = 0, bW = 0, dF = 0; WF < hF; WF++, bW += uF, dF += AF) CF.set(SF.subarray(bW, bW + AF), dF);
        return FF
      }
      return 1 !== RF && 0 !== (QF & RF - 1) && (CF.b.Warn("Array must be aligned to border of element size. Data will be copied."), PF = !0), PF ? new iW(EF.slice(QF, QF + eF * RF)) : new iW(EF, QF, eF)
    }

    function iW(FF, WF, SF, AF, uF, hF, PF, RF) {
      const iW = WF * bW(SF),
        eF = PF * WF;
      if (RF.length !== eF) throw new Error("Output length is not valid");
      if (5126 === SF && uF === iW)
        if (FF instanceof Array) {
          const WF = AF / 4;
          RF.set(FF, WF)
        } else if (ArrayBuffer.isView(FF)) {
        const WF = FF.byteOffset + AF;
        if (0 !== (3 & WF)) return CF.b.Warn("Float array must be aligned to 4-bytes border"), void RF.set(new Float32Array(FF.buffer.slice(WF, WF + eF * Float32Array.BYTES_PER_ELEMENT)));
        const SF = new Float32Array(FF.buffer, WF, eF);
        RF.set(SF)
      } else {
        const WF = new Float32Array(FF, AF, eF);
        RF.set(WF)
      } else dF(FF, AF, uF, WF, SF, eF, hF, ((FF, SF) => {
        for (let CF = 0; CF < WF; CF++) RF[SF + CF] = FF[CF]
      }))
    }

    function eF(FF, WF) {
      let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      if (Array.isArray(FF)) {
        for (let AF = 0; AF < WF; AF++)
          if (FF[SF + AF] - CF > 65535) return !0;
        return !1
      }
      return 4 === FF.BYTES_PER_ELEMENT
    }

    function EF(FF) {
      const WF = FF.buffer;
      if (WF instanceof ArrayBuffer) return FF;
      const SF = new ArrayBuffer(FF.byteLength);
      return new Uint8Array(SF).set(new Uint8Array(WF, FF.byteOffset, FF.byteLength)), SF
    }
  },
  37858: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => DF,
      e: () => VF,
      m: () => NF,
      i: () => YF,
      p: () => MF
    });
    class CF {
      constructor() {
        this.children = []
      }
      isValid(FF) {
        return !0
      }
      process(FF, WF, SF) {
        let CF = "";
        if (this.line) {
          let SF = this.line;
          const AF = WF.processor;
          if (AF) {
            AF.lineProcessor && (SF = AF.lineProcessor(SF, WF.isFragment, WF.processingContext));
            const CF = WF.processor?.attributeKeywordName ?? "attribute",
              uF = WF.isFragment && WF.processor?.varyingFragmentKeywordName ? WF.processor?.varyingFragmentKeywordName : !WF.isFragment && WF.processor?.varyingVertexKeywordName ? WF.processor?.varyingVertexKeywordName : "varying";
            if (!WF.isFragment && AF.attributeProcessor && this.line.startsWith(CF)) SF = AF.attributeProcessor(this.line, FF, WF.processingContext);
            else if (AF.varyingProcessor && (AF.varyingCheck?.(this.line, WF.isFragment) || !AF.varyingCheck && this.line.startsWith(uF))) SF = AF.varyingProcessor(this.line, WF.isFragment, FF, WF.processingContext);
            else if (AF.uniformProcessor && AF.uniformRegexp && AF.uniformRegexp.test(this.line)) WF.lookForClosingBracketForUniformBuffer || (SF = AF.uniformProcessor(this.line, WF.isFragment, FF, WF.processingContext));
            else if (AF.uniformBufferProcessor && AF.uniformBufferRegexp && AF.uniformBufferRegexp.test(this.line)) WF.lookForClosingBracketForUniformBuffer || (SF = AF.uniformBufferProcessor(this.line, WF.isFragment, WF.processingContext), WF.lookForClosingBracketForUniformBuffer = !0);
            else if (AF.textureProcessor && AF.textureRegexp && AF.textureRegexp.test(this.line)) SF = AF.textureProcessor(this.line, WF.isFragment, FF, WF.processingContext);
            else if ((AF.uniformProcessor || AF.uniformBufferProcessor) && this.line.startsWith("uniform") && !WF.lookForClosingBracketForUniformBuffer) {
              /uniform\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s+(\S+)\s*;/.test(this.line) ? AF.uniformProcessor && (SF = AF.uniformProcessor(this.line, WF.isFragment, FF, WF.processingContext)) : AF.uniformBufferProcessor && (SF = AF.uniformBufferProcessor(this.line, WF.isFragment, WF.processingContext), WF.lookForClosingBracketForUniformBuffer = !0)
            }
            WF.lookForClosingBracketForUniformBuffer && -1 !== this.line.indexOf("}") && (WF.lookForClosingBracketForUniformBuffer = !1, AF.endOfUniformBufferProcessor && (SF = AF.endOfUniformBufferProcessor(this.line, WF.isFragment, WF.processingContext)))
          }
          CF += SF + "\n"
        }
        for (const AF of this.children) CF += AF.process(FF, WF, SF);
        return this.additionalDefineKey && (FF[this.additionalDefineKey] = this.additionalDefineValue || "true", SF[this.additionalDefineKey] = FF[this.additionalDefineKey]), CF
      }
    }
    class AF {
      constructor() {
        this._lines = []
      }
      get currentLine() {
        return this._lines[this.lineIndex]
      }
      get canRead() {
        return this.lineIndex < this._lines.length - 1
      }
      set lines(FF) {
        this._lines.length = 0;
        for (const WF of FF) {
          if (!WF || "\r" === WF) continue;
          if ("#" === WF[0]) {
            this._lines.push(WF);
            continue
          }
          const FF = WF.trim();
          if (!FF) continue;
          if (FF.startsWith("//")) {
            this._lines.push(WF);
            continue
          }
          const SF = FF.indexOf(";");
          if (-1 === SF) this._lines.push(FF);
          else if (SF === FF.length - 1) FF.length > 1 && this._lines.push(FF);
          else {
            const FF = WF.split(";");
            for (let WF = 0; WF < FF.length; WF++) {
              let SF = FF[WF];
              SF && (SF = SF.trim(), SF && this._lines.push(SF + (WF !== FF.length - 1 ? ";" : "")))
            }
          }
        }
      }
    }
    class uF extends CF {
      process(FF, WF, SF) {
        for (let CF = 0; CF < this.children.length; CF++) {
          const AF = this.children[CF];
          if (AF.isValid(FF)) return AF.process(FF, WF, SF)
        }
        return ""
      }
    }
    class hF extends CF {
      isValid(FF) {
        return this.testExpression.isTrue(FF)
      }
    }
    class bW {
      isTrue(FF) {
        return !0
      }
      static postfixToInfix(FF) {
        const WF = [];
        for (const SF of FF)
          if (void 0 === bW._OperatorPriority[SF]) WF.push(SF);
          else {
            const FF = WF[WF.length - 1],
              CF = WF[WF.length - 2];
            WF.length -= 2, WF.push(`(${CF}${SF}${FF})`)
          } return WF[WF.length - 1]
      }
      static infixToPostfix(FF) {
        const WF = bW._InfixToPostfixCache.get(FF);
        if (WF) return WF.accessTime = Date.now(), WF.result;
        if (!FF.includes("&&") && !FF.includes("||") && !FF.includes(")") && !FF.includes("(")) return [FF];
        const SF = [];
        let CF = -1;
        const AF = () => {
            RF = RF.trim(), "" !== RF && (SF.push(RF), RF = "")
          },
          uF = FF => {
            CF < bW._Stack.length - 1 && (bW._Stack[++CF] = FF)
          },
          hF = () => bW._Stack[CF],
          dF = () => -1 === CF ? "!!INVALID EXPRESSION!!" : bW._Stack[CF--];
        let PF = 0,
          RF = "";
        for (; PF < FF.length;) {
          const WF = FF.charAt(PF),
            iW = PF < FF.length - 1 ? FF.substring(PF, 2 + PF) : "";
          if ("(" === WF) RF = "", uF(WF);
          else if (")" === WF) {
            for (AF(); - 1 !== CF && "(" !== hF();) SF.push(dF());
            dF()
          } else if (bW._OperatorPriority[iW] > 1) {
            for (AF(); - 1 !== CF && bW._OperatorPriority[hF()] >= bW._OperatorPriority[iW];) SF.push(dF());
            uF(iW), PF++
          } else RF += WF;
          PF++
        }
        for (AF(); - 1 !== CF;) "(" === hF() ? dF() : SF.push(dF());
        return bW._InfixToPostfixCache.size >= bW.InfixToPostfixCacheLimitSize && bW.ClearCache(), bW._InfixToPostfixCache.set(FF, {
          result: SF,
          accessTime: Date.now()
        }), SF
      }
      static ClearCache() {
        const FF = Array.from(bW._InfixToPostfixCache.entries()).sort(((FF, WF) => FF[1].accessTime - WF[1].accessTime));
        for (let WF = 0; WF < bW.InfixToPostfixCacheCleanupSize; WF++) bW._InfixToPostfixCache.delete(FF[WF][0])
      }
    }
    bW.InfixToPostfixCacheLimitSize = 5e4, bW.InfixToPostfixCacheCleanupSize = 25e3, bW._InfixToPostfixCache = new Map, bW._OperatorPriority = {
      ")": 0,
      "(": 1,
      "||": 2,
      "&&": 3
    }, bW._Stack = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    class dF extends bW {
      constructor(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super(), this.define = FF, this.not = WF
      }
      isTrue(FF) {
        let WF = void 0 !== FF[this.define];
        return this.not && (WF = !WF), WF
      }
    }
    class PF extends bW {
      isTrue(FF) {
        return this.leftOperand.isTrue(FF) || this.rightOperand.isTrue(FF)
      }
    }
    class RF extends bW {
      isTrue(FF) {
        return this.leftOperand.isTrue(FF) && this.rightOperand.isTrue(FF)
      }
    }
    class iW extends bW {
      constructor(FF, WF, SF) {
        super(), this.define = FF, this.operand = WF, this.testValue = SF
      }
      toString() {
        return `${this.define} ${this.operand} ${this.testValue}`
      }
      isTrue(FF) {
        let WF = !1;
        const SF = parseInt(void 0 != FF[this.define] ? FF[this.define] : this.define),
          CF = parseInt(void 0 != FF[this.testValue] ? FF[this.testValue] : this.testValue);
        if (isNaN(SF) || isNaN(CF)) return !1;
        switch (this.operand) {
          case ">":
            WF = SF > CF;
            break;
          case "<":
            WF = SF < CF;
            break;
          case "<=":
            WF = SF <= CF;
            break;
          case ">=":
            WF = SF >= CF;
            break;
          case "==":
            WF = SF === CF;
            break;
          case "!=":
            WF = SF !== CF
        }
        return WF
      }
    }
    var eF = SF(37855),
      EF = SF(37851);
    const QF = /defined\s*?\((.+?)\)/g,
      rW = /defined\s*?\[(.+?)\]/g,
      gW = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g,
      tW = /__decl__/,
      TF = /light\{X\}.(\w*)/g,
      aW = /\{X\}/g,
      kW = [],
      qW = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;

    function VF(FF) {
      FF.processor && FF.processor.initializeShaders && FF.processor.initializeShaders(FF.processingContext)
    }

    function NF(FF, WF, SF, CF) {
      WF.processor?.preProcessShaderCode && (FF = WF.processor.preProcessShaderCode(FF, WF.isFragment)), YF(FF, WF, (FF => {
        WF.processCodeAfterIncludes && (FF = WF.processCodeAfterIncludes(WF.isFragment ? "fragment" : "vertex", FF, WF.defines));
        const AF = function(FF, WF, SF) {
          let CF = function(FF, WF) {
            if (WF.processor?.noPrecision) return FF;
            const SF = WF.shouldUseHighPrecisionShader; - 1 === FF.indexOf("precision highp float") ? FF = SF ? "precision highp float;\n" + FF : "precision mediump float;\n" + FF : SF || (FF = FF.replace("precision highp float", "precision mediump float"));
            return FF
          }(FF, WF);
          if (!WF.processor) return CF;
          if (0 === WF.processor.shaderLanguage && -1 !== CF.indexOf("#version 3") && (CF = CF.replace("#version 300 es", ""), !WF.processor.parseGLES3)) return CF;
          const AF = WF.defines,
            uF = oF(WF, SF);
          WF.processor.preProcessor && (CF = WF.processor.preProcessor(CF, AF, uF, WF.isFragment, WF.processingContext));
          const hF = {};
          CF = ZF(CF, uF, WF, hF), WF.processor.postProcessor && (CF = WF.processor.postProcessor(CF, AF, WF.isFragment, WF.processingContext, SF ? {
            drawBuffersExtensionDisabled: !SF.getCaps().drawBuffersExtension
          } : {}, uF, hF));
          SF?._features.needShaderCodeInlining && (CF = SF.inlineShaderCode(CF));
          return CF
        }(FF, WF, CF);
        SF(AF, FF)
      }))
    }

    function DF(FF, WF, SF) {
      return SF.processor && SF.processor.finalizeShaders ? SF.processor.finalizeShaders(FF, WF, SF.processingContext) : {
        vertexCode: FF,
        fragmentCode: WF
      }
    }

    function LF(FF) {
      const WF = /defined\((.+)\)/.exec(FF);
      if (WF && WF.length) return new dF(WF[1].trim(), "!" === FF[0]);
      const SF = ["==", "!=", ">=", "<=", "<", ">"];
      let CF = "",
        AF = 0;
      for (CF of SF)
        if (AF = FF.indexOf(CF), AF > -1) break;
      if (-1 === AF) return new dF(FF);
      const uF = FF.substring(0, AF).trim(),
        hF = FF.substring(AF + CF.length).trim();
      return new iW(uF, CF, hF)
    }

    function mW(FF, WF) {
      const SF = new hF,
        CF = FF.substring(0, WF);
      let AF = FF.substring(WF);
      return AF = AF.substring(0, (AF.indexOf("//") + 1 || AF.length + 1) - 1).trim(), SF.testExpression = "#ifdef" === CF ? new dF(AF) : "#ifndef" === CF ? new dF(AF, !0) : function(FF) {
        FF = FF.replace(QF, "defined[$1]");
        const WF = bW.infixToPostfix(FF),
          SF = [];
        for (const AF of WF)
          if ("||" !== AF && "&&" !== AF) SF.push(AF);
          else if (SF.length >= 2) {
          let FF = SF[SF.length - 1],
            WF = SF[SF.length - 2];
          SF.length -= 2;
          const CF = "&&" == AF ? new RF : new PF;
          "string" === typeof FF && (FF = FF.replace(rW, "defined($1)")), "string" === typeof WF && (WF = WF.replace(rW, "defined($1)")), CF.leftOperand = "string" === typeof WF ? LF(WF) : WF, CF.rightOperand = "string" === typeof FF ? LF(FF) : FF, SF.push(CF)
        }
        let CF = SF[SF.length - 1];
        return "string" === typeof CF && (CF = CF.replace(rW, "defined($1)")), "string" === typeof CF ? LF(CF) : CF
      }(AF), SF
    }

    function OF(FF, WF, SF, AF) {
      let uF;
      for (; xW(FF, SF, AF);) {
        uF = FF.currentLine;
        const hF = uF.substring(0, 5).toLowerCase();
        if ("#else" === hF) {
          const SF = new CF;
          return WF.children.push(SF), void xW(FF, SF, AF)
        }
        if ("#elif" === hF) {
          const FF = mW(uF, 5);
          WF.children.push(FF), SF = FF
        }
      }
    }

    function xW(FF, WF, SF) {
      for (; FF.canRead;) {
        FF.lineIndex++;
        const AF = FF.currentLine;
        if (AF.indexOf("#") >= 0) {
          const CF = qW.exec(AF);
          if (CF && CF.length) {
            switch (CF[0]) {
              case "#ifdef": {
                const CF = new uF;
                WF.children.push(CF);
                const hF = mW(AF, 6);
                CF.children.push(hF), OF(FF, CF, hF, SF);
                break
              }
              case "#else":
              case "#elif":
                return !0;
              case "#endif":
                return !1;
              case "#ifndef": {
                const CF = new uF;
                WF.children.push(CF);
                const hF = mW(AF, 7);
                CF.children.push(hF), OF(FF, CF, hF, SF);
                break
              }
              case "#if": {
                const CF = new uF,
                  hF = mW(AF, 3);
                WF.children.push(CF), CF.children.push(hF), OF(FF, CF, hF, SF);
                break
              }
            }
            continue
          }
        }
        const hF = new CF;
        if (hF.line = AF, WF.children.push(hF), "#" === AF[0] && "d" === AF[1]) {
          const FF = AF.replace(";", "").split(" ");
          hF.additionalDefineKey = FF[1], 3 === FF.length && (hF.additionalDefineValue = FF[2])
        }
      }
      return !1
    }

    function ZF(FF, WF, SF, uF) {
      const hF = new CF,
        bW = new AF;
      return bW.lineIndex = -1, bW.lines = FF.split("\n"), xW(bW, hF, uF), hF.process(WF, SF, uF)
    }

    function oF(FF, WF) {
      const SF = FF.defines,
        CF = {};
      for (const AF of SF) {
        const FF = AF.replace("#define", "").replace(";", "").trim().split(" ");
        CF[FF[0]] = FF.length > 1 ? FF[1] : ""
      }
      return 0 === FF.processor?.shaderLanguage && (CF.GL_ES = "true"), CF.__VERSION__ = FF.version, CF[FF.platformName] = "true", (0, EF.g)(CF, WF?.isNDCHalfZRange, WF?.QPF, WF?.useExactSrgbConversions), CF
    }

    function YF(FF, WF, SF) {
      let CF;
      for (kW.length = 0; null !== (CF = gW.exec(FF));) kW.push(CF);
      let AF = [FF],
        uF = !1;
      for (const bW of kW) {
        let FF = bW[1];
        if (-1 !== FF.indexOf("__decl__") && (FF = FF.replace(tW, ""), WF.supportsUniformBuffers && (FF = FF.replace("Vertex", "Ubo").replace("Fragment", "Ubo")), FF += "Declaration"), !WF.includesShadersStore[FF]) {
          const CF = WF.shadersRepository + "ShadersInclude/" + FF + ".fx";
          return void MF.loadFile(CF, (CF => {
            WF.includesShadersStore[FF] = CF, YF(AF.join(""), WF, SF)
          }))
        } {
          let SF = WF.includesShadersStore[FF];
          if (bW[2]) {
            const FF = bW[3].split(",");
            for (let WF = 0; WF < FF.length; WF += 2) {
              const CF = new RegExp(FF[WF], "g"),
                AF = FF[WF + 1];
              SF = SF.replace(CF, AF)
            }
          }
          if (bW[4]) {
            const FF = bW[5];
            if (-1 !== FF.indexOf("..")) {
              const CF = FF.split(".."),
                AF = parseInt(CF[0]);
              let uF = parseInt(CF[1]),
                hF = SF.slice(0);
              SF = "", isNaN(uF) && (uF = WF.indexParameters[CF[1]]);
              for (let FF = AF; FF < uF; FF++) WF.supportsUniformBuffers || (hF = hF.replace(TF, ((FF, WF) => WF + "{X}"))), SF += hF.replace(aW, FF.toString()) + "\n"
            } else WF.supportsUniformBuffers || (SF = SF.replace(TF, ((FF, WF) => WF + "{X}"))), SF = SF.replace(aW, FF)
          }
          const CF = [];
          for (const FF of AF) {
            const WF = FF.split(bW[0]);
            for (let FF = 0; FF < WF.length - 1; FF++) CF.push(WF[FF]), CF.push(SF);
            CF.push(WF[WF.length - 1])
          }
          AF = CF, uF = uF || SF.indexOf("#include<") >= 0 || SF.indexOf("#include <") >= 0
        }
      }
      kW.length = 0;
      const hF = AF.join("");
      uF ? YF(hF.toString(), WF, SF) : SF(hF)
    }
    const MF = {
      loadFile: (FF, WF, SF, CF, AF, uF) => {
        throw (0, eF.l)("FileTools")
      }
    }
  },
  37851: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => AF,
      f: () => uF,
      g: () => bW,
      j: () => hF,
      l: () => dF
    });
    var CF = SF(37855);
    const AF = {};

    function uF(FF, WF) {
      return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (WF ? WF + "\n" : "") + FF
    }

    function hF(FF, WF, SF, uF, hF, bW, dF) {
      const PF = dF || AF.loadFile;
      if (!PF) throw (0, CF.l)("FileTools");
      return PF(FF, WF, SF, uF, hF, bW)
    }

    function bW(FF, WF, SF, CF) {
      if (FF) return WF ? FF.IS_NDC_HALF_ZRANGE = "" : delete FF.IS_NDC_HALF_ZRANGE, SF ? FF.USE_REVERSE_DEPTHBUFFER = "" : delete FF.USE_REVERSE_DEPTHBUFFER, void(CF ? FF.USE_EXACT_SRGB_CONVERSIONS = "" : delete FF.USE_EXACT_SRGB_CONVERSIONS);
      {
        let FF = "";
        return WF && (FF += "#define IS_NDC_HALF_ZRANGE"), SF && (FF && (FF += "\n"), FF += "#define USE_REVERSE_DEPTHBUFFER"), CF && (FF && (FF += "\n"), FF += "#define USE_EXACT_SRGB_CONVERSIONS"), FF
      }
    }

    function dF(FF, WF) {
      let SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        CF = arguments.length > 3 ? arguments[3] : void 0;
      switch (FF) {
        case 3: {
          const FF = new Int8Array(WF);
          return CF && FF.set(new Int8Array(CF)), FF
        }
        case 0: {
          const FF = new Uint8Array(WF);
          return CF && FF.set(new Uint8Array(CF)), FF
        }
        case 4: {
          const FF = "number" !== typeof WF ? new Int16Array(WF) : new Int16Array(SF ? WF / 2 : WF);
          return CF && FF.set(new Int16Array(CF)), FF
        }
        case 5:
        case 8:
        case 9:
        case 10:
        case 2: {
          const FF = "number" !== typeof WF ? new Uint16Array(WF) : new Uint16Array(SF ? WF / 2 : WF);
          return CF && FF.set(new Uint16Array(CF)), FF
        }
        case 6: {
          const FF = "number" !== typeof WF ? new Int32Array(WF) : new Int32Array(SF ? WF / 4 : WF);
          return CF && FF.set(new Int32Array(CF)), FF
        }
        case 7:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15: {
          const FF = "number" !== typeof WF ? new Uint32Array(WF) : new Uint32Array(SF ? WF / 4 : WF);
          return CF && FF.set(new Uint32Array(CF)), FF
        }
        case 1: {
          const FF = "number" !== typeof WF ? new Float32Array(WF) : new Float32Array(SF ? WF / 4 : WF);
          return CF && FF.set(new Float32Array(CF)), FF
        }
      }
      const AF = new Uint8Array(WF);
      return CF && AF.set(new Uint8Array(CF)), AF
    }
  },
  37855: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => PF,
      f: () => RF,
      j: () => dF,
      l: () => AF
    });
    const CF = {};

    function AF(FF) {
      if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !CF[FF]) return CF[FF] = !0, `${FF} needs to be imported before as it contains a side-effect required by your code.`
    }
    const uF = {};
    let hF = !1,
      bW = 0;

    function dF(FF, WF) {
      let SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const CF = function() {
        if ((SF || hF) && 0 === bW) {
          const SF = `${FF}.${WF}`;
          uF[SF] || (uF[SF] = !0, console.warn(`[Babylon.js] ${SF}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
        }
      };
      return CF.__isSideEffectStub = !0, CF
    }

    function PF(FF) {
      return !!FF && !FF.__isSideEffectStub
    }

    function RF(FF, WF) {
      return {
        get() {},
        set(FF) {
          Object.defineProperty(this, WF, {
            value: FF,
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
  37835: (FF, WF, SF) => {
    function CF() {
      return "undefined" !== typeof window
    }

    function AF() {
      return "undefined" !== typeof navigator
    }

    function uF() {
      return "undefined" !== typeof document
    }

    function hF(FF) {
      let WF = "",
        SF = FF.firstChild;
      for (; SF;) 3 === SF.nodeType && (WF += SF.textContent), SF = SF.nextSibling;
      return WF
    }
    SF.d(WF, {
      d: () => hF,
      h: () => uF,
      l: () => AF,
      m: () => CF
    })
  },
  38018: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => CF,
      c: () => AF,
      g: () => uF
    });
    class CF extends Error {}
    CF._setPrototypeOf = Object.setPrototypeOf || ((FF, WF) => (FF.__proto__ = WF, FF));
    const AF = {
      MeshInvalidPositionsError: 0,
      UnsupportedTextureError: 1e3,
      GLTFLoaderUnexpectedMagicError: 2e3,
      SceneLoaderError: 3e3,
      LoadFileError: 4e3,
      RequestFileError: 4001,
      ReadFileError: 4002
    };
    class uF extends CF {
      constructor(FF, WF, SF) {
        super(FF), this.errorCode = WF, this.innerError = SF, this.name = "RuntimeError", CF._setPrototypeOf(this, uF.prototype)
      }
    }
  },
  38010: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => oF,
      f: () => aW,
      i: () => mW,
      k: () => xW,
      l: () => DF,
      m: () => VF,
      n: () => NF,
      o: () => zW,
      s: () => LF,
      u: () => kW
    });
    var CF = SF(38016),
      AF = SF(37835),
      uF = SF(35647);
    class hF {}
    hF.FilesToLoad = {};
    var bW = SF(38018),
      dF = SF(38027),
      PF = SF(35639),
      RF = SF(37851),
      iW = SF(37858),
      eF = SF(37076),
      EF = SF(37860),
      QF = SF(38031);
    const rW = new RegExp(/^data:([^,]+\/[^,]+)?;base64,/i);
    class gW extends bW.g {
      constructor(FF, WF) {
        super(FF, bW.c.LoadFileError), this.name = "LoadFileError", bW.b._setPrototypeOf(this, gW.prototype), WF instanceof CF.d ? this.request = WF : this.file = WF
      }
    }
    class tW extends bW.g {
      constructor(FF, WF) {
        super(FF, bW.c.RequestFileError), this.request = WF, this.name = "RequestFileError", bW.b._setPrototypeOf(this, tW.prototype)
      }
    }
    class TF extends bW.g {
      constructor(FF, WF) {
        super(FF, bW.c.ReadFileError), this.file = WF, this.name = "ReadFileError", bW.b._setPrototypeOf(this, TF.prototype)
      }
    }
    const aW = {
        DefaultRetryStrategy: class {
          static ExponentialBackoff() {
            let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
              WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
            return (SF, CF, AF) => 0 !== CF.status || AF >= FF || -1 !== SF.indexOf("file:") ? -1 : Math.pow(2, AF) * WF
          }
        }.ExponentialBackoff(),
        BaseUrl: "",
        CorsBehavior: "anonymous",
        PreprocessUrl: FF => FF,
        ScriptBaseUrl: "",
        ScriptPreprocessUrl: FF => FF,
        CleanUrl: FF => FF = FF.replace(/#/gm, "%23")
      },
      kW = (FF, WF) => {
        if ((!FF || 0 !== FF.indexOf("data:")) && aW.CorsBehavior)
          if ("string" === typeof aW.CorsBehavior || aW.CorsBehavior instanceof String) WF.crossOrigin = aW.CorsBehavior;
          else {
            const SF = aW.CorsBehavior(FF);
            SF && (WF.crossOrigin = SF)
          }
      },
      qW = {
        getRequiredSize: null
      },
      VF = function(FF, WF, SF, AF) {
        let uF, bW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
          RF = arguments.length > 5 ? arguments[5] : void 0,
          iW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : PF.e.LastCreatedEngine;
        if ("undefined" === typeof HTMLImageElement && !iW?._features.forceBitmapOverHTMLImageElement) return SF("LoadImage is only supported in web or BabylonNative environments."), null;
        if (iW?._features.forceBitmapOverHTMLImageElement && "string" !== typeof FF && "undefined" !== typeof Blob) {
          let CF;
          if (FF instanceof Blob) CF = FF;
          else {
            const WF = FF instanceof ArrayBuffer ? FF : (0, QF.o)(FF);
            CF = new Blob([WF], {
              type: bW
            })
          }
          return iW.createImageBitmap(CF, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...RF
          }).then(WF).catch((WF => {
            SF && SF("Error while trying to load image: " + FF, WF)
          })), null
        }
        let eF = !1;
        if (FF instanceof ArrayBuffer || ArrayBuffer.isView(FF))
          if ("undefined" !== typeof Blob && "undefined" !== typeof URL) {
            let WF;
            WF = FF instanceof ArrayBuffer ? FF : (0, QF.o)(FF), uF = URL.createObjectURL(new Blob([WF], {
              type: bW
            })), eF = !0
          } else uF = `data:${bW};base64,` + (0, dF.j)(FF);
        else FF instanceof Blob ? (uF = URL.createObjectURL(FF), eF = !0) : (uF = aW.CleanUrl(FF), uF = aW.PreprocessUrl(uF));
        const EF = WF => {
          if (SF) {
            const CF = uF || FF.toString();
            SF(`Error while trying to load image: ${0===CF.indexOf("http")||CF.length<=128?CF:CF.slice(0,128)+"..."}`, WF)
          }
        };
        if (iW?._features.forceBitmapOverHTMLImageElement) return DF(uF, (CF => {
          iW.createImageBitmap(new Blob([CF], {
            type: bW
          }), {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...RF
          }).then((FF => {
            WF(FF), eF && URL.revokeObjectURL(uF)
          })).catch((WF => {
            SF && SF("Error while trying to load image: " + FF, WF)
          }))
        }), void 0, AF || void 0, !0, ((FF, WF) => {
          EF(WF)
        })), null;
        const rW = new Image;
        if (qW.getRequiredSize) {
          const WF = qW.getRequiredSize(FF);
          WF.width && (rW.width = WF.width), WF.height && (rW.height = WF.height)
        }
        kW(uF, rW);
        const gW = [],
          tW = () => {
            for (const FF of gW) FF.target.removeEventListener(FF.name, FF.handler);
            gW.length = 0
          };
        gW.push({
          target: rW,
          name: "load",
          handler: () => {
            tW(), WF(rW), eF && rW.src && URL.revokeObjectURL(rW.src)
          }
        }), gW.push({
          target: rW,
          name: "error",
          handler: FF => {
            tW(), EF(FF), eF && rW.src && URL.revokeObjectURL(rW.src)
          }
        }), gW.push({
          target: document,
          name: "securitypolicyviolation",
          handler: FF => {
            if (FF.blockedURI !== rW.src || "SC" === FF.disposition) return;
            tW();
            const WF = new Error(`CSP violation of policy ${FF.effectiveDirective} ${FF.blockedURI}. Current policy is ${FF.originalPolicy}`);
            PF.e.UseFallbackTexture = !1, EF(WF), eF && rW.src && URL.revokeObjectURL(rW.src), rW.src = ""
          }
        }), (() => {
          for (const FF of gW) FF.target.addEventListener(FF.name, FF.handler)
        })();
        const TF = "blob:" === uF.substring(0, 5),
          VF = "data:" === uF.substring(0, 5),
          NF = () => {
            TF || VF || !CF.d.IsCustomRequestAvailable ? rW.src = uF : DF(uF, ((FF, WF, SF) => {
              const CF = new Blob([FF], {
                  type: !bW && SF ? SF : bW
                }),
                AF = URL.createObjectURL(CF);
              eF = !0, rW.src = AF
            }), void 0, AF || void 0, !0, ((FF, WF) => {
              EF(WF)
            }))
          },
          LF = () => {
            AF && AF.loadImage(uF, rW)
          };
        if (!TF && !VF && AF && AF.enableTexturesOffline) AF.open(LF, NF);
        else {
          if (-1 !== uF.indexOf("file:")) {
            const FF = decodeURIComponent(uF.substring(5).toLowerCase());
            if (hF.FilesToLoad[FF] && "undefined" !== typeof URL) {
              try {
                let WF;
                try {
                  WF = URL.createObjectURL(hF.FilesToLoad[FF])
                } catch (mW) {
                  WF = URL.createObjectURL(hF.FilesToLoad[FF])
                }
                rW.src = WF, eF = !0
              } catch (OF) {
                rW.src = ""
              }
              return rW
            }
          }
          NF()
        }
        return rW
      },
      NF = (FF, WF, SF, CF, AF) => {
        const hF = new FileReader,
          bW = {
            onCompleteObservable: new uF.b,
            abort: () => hF.abort()
          };
        return hF.onloadend = () => bW.onCompleteObservable.notifyObservers(bW), AF && (hF.onerror = () => {
          AF(new TF(`Unable to read ${FF.name}`, FF))
        }), hF.onload = FF => {
          WF(FF.target.result)
        }, SF && (hF.onprogress = SF), CF ? hF.readAsArrayBuffer(FF) : hF.readAsText(FF), bW
      },
      DF = (FF, WF, SF, CF, AF, dF, PF) => {
        if (FF.name) return NF(FF, WF, SF, AF, dF ? FF => {
          dF(void 0, FF)
        } : void 0);
        const RF = FF;
        if (-1 !== RF.indexOf("file:")) {
          let FF = decodeURIComponent(RF.substring(5).toLowerCase());
          0 === FF.indexOf("./") && (FF = FF.substring(2));
          const CF = hF.FilesToLoad[FF];
          if (CF) return NF(CF, WF, SF, AF, dF ? FF => dF(void 0, new gW(FF.message, FF.file)) : void 0)
        }
        const {
          match: iW,
          type: QF
        } = ZF(RF);
        if (iW) {
          const FF = {
            onCompleteObservable: new uF.b,
            abort: () => () => {}
          };
          try {
            const FF = AF ? oF(RF) : YF(RF);
            WF(FF, void 0, QF)
          } catch (bW) {
            dF ? dF(void 0, bW) : eF.b.Error(bW.message || "Failed to parse the Data URL")
          }
          return EF.c.SetImmediate((() => {
            FF.onCompleteObservable.notifyObservers(FF)
          })), FF
        }
        return LF(RF, ((FF, SF) => {
          WF(FF, SF?.responseURL, SF?.getResponseHeader("content-type"))
        }), SF, CF, AF, dF ? FF => {
          dF(FF.request, new gW(FF.message, FF.request))
        } : void 0, PF)
      },
      LF = (FF, WF, SF, hF, bW, dF, RF) => {
        null !== hF && (hF ?? (hF = PF.e.LastCreatedScene?.offlineProvider)), FF = aW.CleanUrl(FF), FF = aW.PreprocessUrl(FF);
        const iW = aW.BaseUrl + FF;
        let EF = !1;
        const QF = {
            onCompleteObservable: new uF.b,
            abort: () => EF = !0
          },
          rW = () => {
            let FF, uF = new CF.d,
              hF = null;
            const PF = () => {
              uF && (SF && uF.removeEventListener("progress", SF), FF && uF.removeEventListener("readystatechange", FF), uF.removeEventListener("loadend", rW))
            };
            let rW = () => {
              PF(), QF.onCompleteObservable.notifyObservers(QF), QF.onCompleteObservable.clear(), SF = void 0, FF = null, rW = null, dF = void 0, RF = void 0, WF = void 0
            };
            QF.abort = () => {
              EF = !0, rW && rW(), uF && uF.readyState !== (XMLHttpRequest.DONE || 4) && uF.abort(), null !== hF && (clearTimeout(hF), hF = null), uF = null
            };
            const gW = FF => {
                const WF = FF.message || "Unknown error";
                dF && uF ? dF(new tW(WF, uF)) : eF.b.Error(WF)
              },
              TF = eF => {
                if (uF) {
                  if (uF.open("GET", iW), RF) try {
                    RF(uF)
                  } catch (QF) {
                    return void gW(QF)
                  }
                  bW && (uF.responseType = "arraybuffer"), SF && uF.addEventListener("progress", SF), rW && uF.addEventListener("loadend", rW), FF = () => {
                    if (!EF && uF && uF.readyState === (XMLHttpRequest.DONE || 4)) {
                      if (FF && uF.removeEventListener("readystatechange", FF), uF.status >= 200 && uF.status < 300 || 0 === uF.status && (!(0, AF.m)() || OF())) {
                        const FF = bW ? uF.response : uF.responseText;
                        if (null !== FF) {
                          try {
                            WF && WF(FF, uF)
                          } catch (QF) {
                            gW(QF)
                          }
                          return
                        }
                      }
                      const SF = aW.DefaultRetryStrategy;
                      if (SF) {
                        const FF = SF(iW, uF, eF);
                        if (-1 !== FF) return PF(), uF = new CF.d, void(hF = setTimeout((() => TF(eF + 1)), FF))
                      }
                      const RF = new tW("Error status: " + uF.status + " " + uF.statusText + " - Unable to load " + iW, uF);
                      dF && dF(RF)
                    }
                  }, uF.addEventListener("readystatechange", FF), uF.send()
                }
              };
            TF(0)
          };
        if (hF && hF.enableSceneOffline && !FF.startsWith("blob:")) {
          const CF = FF => {
              FF && FF.status > 400 ? dF && dF(FF) : rW()
            },
            AF = () => {
              hF && hF.loadFile(aW.BaseUrl + FF, (FF => {
                !EF && WF && WF(FF), QF.onCompleteObservable.notifyObservers(QF)
              }), SF ? FF => {
                !EF && SF && SF(FF)
              } : void 0, CF, bW)
            };
          hF.open(AF, CF)
        } else rW();
        return QF
      },
      mW = FF => {
        const {
          match: WF,
          type: SF
        } = ZF(FF);
        if (WF) return SF || void 0;
        const CF = FF.lastIndexOf(".");
        switch (FF.substring(CF + 1).toLowerCase()) {
          case "glb":
            return "model/gltf-binary";
          case "bin":
            return "application/octet-stream";
          case "bRF":
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
      OF = () => "undefined" !== typeof location && "file:" === location.protocol,
      xW = FF => rW.test(FF),
      ZF = FF => {
        const WF = rW.exec(FF);
        if (null === WF || 0 === WF.length) return {
          match: !1,
          type: ""
        };
        return {
          match: !0,
          type: WF[0].replace("data:", "").replace(";base64,", "")
        }
      };

    function oF(FF) {
      return (0, dF.e)(FF.split(",")[1])
    }
    const YF = FF => (0, dF.h)(FF.split(",")[1]);
    let MF;
    const cW = (FF, WF, SF, CF, AF, uF, hF, bW, dF, PF) => {
      MF = {
        DecodeBase64UrlToBinary: FF,
        DecodeBase64UrlToString: WF,
        DefaultRetryStrategy: SF.DefaultRetryStrategy,
        BaseUrl: SF.BaseUrl,
        CorsBehavior: SF.CorsBehavior,
        PreprocessUrl: SF.PreprocessUrl,
        IsBase64DataUrl: CF,
        IsFileURL: AF,
        LoadFile: uF,
        LoadImage: hF,
        ReadFile: bW,
        RequestFile: dF,
        SetCorsBehavior: PF
      }, Object.defineProperty(MF, "DefaultRetryStrategy", {
        get: function() {
          return SF.DefaultRetryStrategy
        },
        set: function(FF) {
          SF.DefaultRetryStrategy = FF
        }
      }), Object.defineProperty(MF, "BaseUrl", {
        get: function() {
          return SF.BaseUrl
        },
        set: function(FF) {
          SF.BaseUrl = FF
        }
      }), Object.defineProperty(MF, "PreprocessUrl", {
        get: function() {
          return SF.PreprocessUrl
        },
        set: function(FF) {
          SF.PreprocessUrl = FF
        }
      }), Object.defineProperty(MF, "CorsBehavior", {
        get: function() {
          return SF.CorsBehavior
        },
        set: function(FF) {
          SF.CorsBehavior = FF
        }
      })
    };
    let GF = !1;

    function zW() {
      GF || (GF = !0, cW(oF, YF, aW, xW, OF, DF, VF, NF, LF, kW), RF.d.loadFile = DF, RF.d.loadImage = VF, iW.p.loadFile = DF)
    }
  },
  38034: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => bW,
      g: () => uF,
      h: () => hF
    });
    let CF = null;

    function AF() {
      if (CF) return CF;
      const FF = new ArrayBuffer(4),
        WF = new Float32Array(FF),
        SF = new Uint32Array(FF),
        AF = new Uint32Array(512),
        uF = new Uint32Array(512);
      for (let CF = 0; CF < 256; ++CF) {
        const FF = CF - 127;
        FF < -24 ? (AF[CF] = 0, AF[256 | CF] = 32768, uF[CF] = 24, uF[256 | CF] = 24) : FF < -14 ? (AF[CF] = 1024 >> -FF - 14, AF[256 | CF] = 1024 >> -FF - 14 | 32768, uF[CF] = -FF - 1, uF[256 | CF] = -FF - 1) : FF <= 15 ? (AF[CF] = FF + 15 << 10, AF[256 | CF] = FF + 15 << 10 | 32768, uF[CF] = 13, uF[256 | CF] = 13) : FF < 128 ? (AF[CF] = 31744, AF[256 | CF] = 64512, uF[CF] = 24, uF[256 | CF] = 24) : (AF[CF] = 31744, AF[256 | CF] = 64512, uF[CF] = 13, uF[256 | CF] = 13)
      }
      const hF = new Uint32Array(2048),
        bW = new Uint32Array(64),
        dF = new Uint32Array(64);
      for (let CF = 1; CF < 1024; ++CF) {
        let FF = CF << 13,
          WF = 0;
        for (; 0 === (8388608 & FF);) FF <<= 1, WF -= 8388608;
        FF &= -8388609, WF += 947912704, hF[CF] = FF | WF
      }
      for (let CF = 1024; CF < 2048; ++CF) hF[CF] = 939524096 + (CF - 1024 << 13);
      for (let CF = 1; CF < 31; ++CF) bW[CF] = CF << 23;
      bW[31] = 1199570944, bW[32] = 2147483648;
      for (let CF = 33; CF < 63; ++CF) bW[CF] = 2147483648 + (CF - 32 << 23);
      bW[63] = 3347054592;
      for (let CF = 1; CF < 64; ++CF) 32 !== CF && (dF[CF] = 1024);
      return CF = {
        floatView: WF,
        uint32View: SF,
        baseTable: AF,
        shiftTable: uF,
        mantissaTable: hF,
        exponentTable: bW,
        offsetTable: dF
      }, CF
    }
    const uF = 65504;

    function hF(FF) {
      const WF = AF();
      WF.floatView[0] = FF;
      const SF = WF.uint32View[0],
        CF = SF >> 23 & 511;
      return WF.baseTable[CF] + ((8388607 & SF) >> WF.shiftTable[CF])
    }

    function bW(FF) {
      const WF = AF();
      return WF.uint32View[0] = WF.mantissaTable[WF.offsetTable[FF >> 10] + (1023 & FF)] + WF.exponentTable[FF >> 10], WF.floatView[0]
    }
  },
  38027: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => uF,
      h: () => AF,
      j: () => CF
    });
    const CF = FF => {
        const WF = ArrayBuffer.isView(FF) ? new Uint8Array(FF.buffer, FF.byteOffset, FF.byteLength) : new Uint8Array(FF);
        return "function" === typeof WF.toBase64 ? WF.toBase64() : function(FF) {
          const WF = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          let SF, CF, AF, uF, hF, bW, dF, PF = "",
            RF = 0;
          for (; RF < FF.length;) SF = FF[RF++], CF = RF < FF.length ? FF[RF++] : Number.NaN, AF = RF < FF.length ? FF[RF++] : Number.NaN, uF = SF >> 2, hF = (3 & SF) << 4 | CF >> 4, bW = (15 & CF) << 2 | AF >> 6, dF = 63 & AF, isNaN(CF) ? bW = dF = 64 : isNaN(AF) && (dF = 64), PF += WF.charAt(uF) + WF.charAt(hF) + WF.charAt(bW) + WF.charAt(dF);
          return PF
        }(WF)
      },
      AF = FF => atob(FF),
      uF = FF => "function" === typeof Uint8Array.fromBase64 ? Uint8Array.fromBase64(FF).buffer : function(FF) {
        const WF = AF(FF),
          SF = WF.length,
          CF = new Uint8Array(new ArrayBuffer(SF));
        for (let AF = 0; AF < SF; AF++) CF[AF] = WF.charCodeAt(AF);
        return CF.buffer
      }(FF)
  },
  37860: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => AF,
      f: () => hF
    });
    let CF = [];
    class AF {
      static SetImmediate(FF) {
        0 === CF.length && setTimeout((() => {
          const FF = CF;
          CF = [];
          for (const WF of FF) WF()
        }), 1), CF.push(FF)
      }
    }

    function uF(FF, WF, SF) {
      try {
        if (FF()) return WF(), !0
      } catch (CF) {
        return SF?.(CF), !0
      }
      return !1
    }
    const hF = function(FF, WF, SF) {
      let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
        AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
        hF = arguments.length > 6 ? arguments[6] : void 0;
      if ((!(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]) && uF(FF, WF, SF)) return null;
      const bW = setInterval((() => {
        uF(FF, WF, SF) ? clearInterval(bW) : (AF -= CF, AF < 0 && (clearInterval(bW), SF?.(new Error("Operation timed out after maximum retries. " + (hF || "")), !0)))
      }), CF);
      return () => clearInterval(bW)
    }
  },
  38016: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => CF
    });
    class CF {
      constructor() {
        this._xhr = "undefined" !== typeof _native && _native.XMLHttpRequest ? new _native.XMLHttpRequest : new XMLHttpRequest, this._requestURL = ""
      }
      static get IsCustomRequestAvailable() {
        return Object.keys(CF.CustomRequestHeaders).length > 0 || CF.CustomRequestModifiers.length > 0
      }
      static _CleanUrl(FF) {
        return FF = (FF = FF.replace("file:http:", "http:")).replace("file:https:", "https:")
      }
      static _ShouldSkipRequestModifications(FF) {
        return CF.SkipRequestModificationForBabylonCDN && (FF.includes("preview.babylonjs.com") || FF.includes("cdn.babylonjs.com"))
      }
      static _CollectCustomizations(FF) {
        const WF = {
          ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        };
        if (CF._ShouldSkipRequestModifications(FF)) return {
          url: FF,
          headers: WF
        };
        for (const AF in CF.CustomRequestHeaders) {
          const FF = CF.CustomRequestHeaders[AF];
          FF && (WF[AF] = FF)
        }
        const SF = {
          setRequestHeader: (FF, SF) => {
            WF[FF] = SF
          }
        };
        for (const AF of CF.CustomRequestModifiers) {
          if (CF._ShouldSkipRequestModifications(FF)) break;
          const WF = AF(SF, FF);
          "string" === typeof WF && (FF = WF)
        }
        return {
          url: FF,
          headers: WF
        }
      }
      static async FetchAsync(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const SF = WF.method ?? "GET";
        if ("undefined" !== typeof fetch) {
          const {
            url: AF,
            headers: uF
          } = CF._CollectCustomizations(CF._CleanUrl(FF), WF.headers ?? {});
          return await fetch(AF, {
            method: SF,
            headers: uF,
            body: WF.body ?? void 0
          })
        }
        return await new Promise(((AF, uF) => {
          const hF = new CF;
          hF.responseType = "arraybuffer", hF.addEventListener("readystatechange", (() => {
            if (4 === hF.readyState)
              if (hF.status >= 200 && hF.status < 300) {
                const FF = "undefined" !== typeof Headers ? new Headers : void 0,
                  WF = hF.getResponseHeader("Content-Type");
                WF && FF && FF.set("Content-Type", WF), "undefined" !== typeof Response ? AF(new Response(hF.response, {
                  status: hF.status,
                  statusText: hF.statusText,
                  headers: FF
                })) : AF({
                  ok: !0,
                  status: hF.status,
                  statusText: hF.statusText,
                  headers: {
                    get: FF => hF.getResponseHeader(FF)
                  },
                  arrayBuffer: async () => await Promise.resolve(hF.response)
                })
              } else uF(new Error(`HTTP ${hF.status} loading '${hF.requestURL}': ${hF.statusText}`))
          })), hF.open(SF, FF, WF.headers), hF.send(WF.body ?? null)
        }))
      }
      get requestURL() {
        return this._requestURL
      }
      get onprogress() {
        return this._xhr.onprogress
      }
      set onprogress(FF) {
        this._xhr.onprogress = FF
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
      set responseType(FF) {
        this._xhr.responseType = FF
      }
      get timeout() {
        return this._xhr.timeout
      }
      set timeout(FF) {
        this._xhr.timeout = FF
      }
      addEventListener(FF, WF, SF) {
        this._xhr.addEventListener(FF, WF, SF)
      }
      removeEventListener(FF, WF, SF) {
        this._xhr.removeEventListener(FF, WF, SF)
      }
      abort() {
        this._xhr.abort()
      }
      send(FF) {
        this._xhr.send(FF)
      }
      open(FF, WF, SF) {
        const {
          url: AF,
          headers: uF
        } = CF._CollectCustomizations(WF, SF);
        this._requestURL = CF._CleanUrl(AF), this._xhr.open(FF, this._requestURL, !0);
        for (const CF in uF) this._xhr.setRequestHeader(CF, uF[CF])
      }
      setRequestHeader(FF, WF) {
        this._xhr.setRequestHeader(FF, WF)
      }
      getResponseHeader(FF) {
        return this._xhr.getResponseHeader(FF)
      }
    }
    CF.CustomRequestHeaders = {}, CF.CustomRequestModifiers = new Array, CF.SkipRequestModificationForBabylonCDN = !0
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);