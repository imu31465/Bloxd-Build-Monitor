export const id = 277;
export const ids = [277];
export const modules = {
  41177: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => NU,
      f: () => YU,
      j: () => oU,
      l: () => IU,
      n: () => DU,
      r: () => FU,
      s: () => EU
    });
    var cU = zU(39493),
      yU = zU(41179);

    function QU(UU, XU, zU, cU) {
      switch (XU) {
        case 5120: {
          let XU = UU.getInt8(zU);
          return cU && (XU = Math.max(XU / 127, -1)), XU
        }
        case 5121: {
          let XU = UU.getUint8(zU);
          return cU && (XU /= 255), XU
        }
        case 5122: {
          let XU = UU.getInt16(zU, !0);
          return cU && (XU = Math.max(XU / 32767, -1)), XU
        }
        case 5123: {
          let XU = UU.getUint16(zU, !0);
          return cU && (XU /= 65535), XU
        }
        case 5131:
          return (0, yU.e)(UU.getUint16(zU, !0));
        case 5124:
          return UU.getInt32(zU, !0);
        case 5125:
          return UU.getUint32(zU, !0);
        case 5126:
          return UU.getFloat32(zU, !0);
        default:
          throw new Error(`Invalid component type ${XU}`)
      }
    }

    function AU(UU, XU, zU, cU, QU) {
      switch (XU) {
        case 5120:
          cU && (QU = Math.round(127 * QU)), UU.setInt8(zU, QU);
          break;
        case 5121:
          cU && (QU = Math.round(255 * QU)), UU.setUint8(zU, QU);
          break;
        case 5122:
          cU && (QU = Math.round(32767 * QU)), UU.setInt16(zU, QU, !0);
          break;
        case 5123:
          cU && (QU = Math.round(65535 * QU)), UU.setUint16(zU, QU, !0);
          break;
        case 5131:
          UU.setUint16(zU, (0, yU.h)(QU), !0);
          break;
        case 5124:
          UU.setInt32(zU, QU, !0);
          break;
        case 5125:
          UU.setUint32(zU, QU, !0);
          break;
        case 5126:
          UU.setFloat32(zU, QU, !0);
          break;
        default:
          throw new Error(`Invalid component type ${XU}`)
      }
    }

    function FU(UU) {
      switch (UU) {
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
          throw new Error(`Invalid type '${UU}'`)
      }
    }

    function oU(UU, XU, zU, cU, yU, oU, DU, EU) {
      const YU = new Array(cU),
        NU = new Array(cU);
      if (UU instanceof Array) {
        let yU = XU / 4;
        const QU = zU / 4;
        for (let XU = 0; XU < oU; XU += cU) {
          for (let XU = 0; XU < cU; XU++) YU[XU] = NU[XU] = UU[yU + XU];
          EU(NU, XU);
          for (let XU = 0; XU < cU; XU++) YU[XU] !== NU[XU] && (UU[yU + XU] = NU[XU]);
          yU += QU
        }
      } else {
        const IU = ArrayBuffer.isView(UU) ? new DataView(UU.buffer, UU.byteOffset, UU.byteLength) : new DataView(UU),
          pU = FU(yU);
        for (let UU = 0; UU < oU; UU += cU) {
          for (let UU = 0, zU = XU; UU < cU; UU++, zU += pU) YU[UU] = NU[UU] = QU(IU, yU, zU, DU);
          EU(NU, UU);
          for (let UU = 0, zU = XU; UU < cU; UU++, zU += pU) YU[UU] !== NU[UU] && AU(IU, yU, zU, DU, NU[UU]);
          XU += zU
        }
      }
    }

    function DU(UU, XU, zU, yU, QU, AU, DU, EU) {
      const YU = XU * FU(zU),
        NU = DU * XU;
      if (5126 !== zU || QU !== YU) {
        const cU = new Float32Array(NU);
        return oU(UU, yU, QU, XU, zU, NU, AU, ((UU, zU) => {
          for (let yU = 0; yU < XU; yU++) cU[zU + yU] = UU[yU]
        })), cU
      }
      if (!(UU instanceof Array || UU instanceof Float32Array) || 0 !== yU || UU.length !== NU) {
        if (UU instanceof Array) {
          const XU = yU / 4;
          return UU.slice(XU, XU + NU)
        }
        if (ArrayBuffer.isView(UU)) {
          const XU = UU.byteOffset + yU;
          return 0 !== (3 & XU) && (cU.b.Warn("Float array must be aligned to 4-bytes border"), EU = !0), EU ? new Float32Array(UU.buffer.slice(XU, XU + NU * Float32Array.BYTES_PER_ELEMENT)) : new Float32Array(UU.buffer, XU, NU)
        }
        return new Float32Array(UU, yU, NU)
      }
      return EU ? UU.slice() : UU
    }

    function EU(UU, XU, zU, yU, QU, AU, DU) {
      const EU = FU(zU),
        YU = function(UU) {
          switch (UU) {
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
              throw new Error(`Invalid component type '${UU}'`)
          }
        }(zU),
        NU = AU * XU;
      if (Array.isArray(UU)) {
        if (0 !== (3 & yU) || 0 !== (3 & QU)) throw new Error("byteOffset and byteStride must be a multiple of 4 for number[] data.");
        const cU = yU / 4,
          FU = QU / 4;
        if (cU + (AU - 1) * FU + XU > UU.length) throw new Error("Last accessed index is out of bounds.");
        if (FU < XU) throw new Error("Data stride cannot be smaller than the component size.");
        if (FU !== XU) {
          const cU = new YU(NU);
          return oU(UU, yU, QU, XU, zU, NU, !1, ((UU, zU) => {
            for (let yU = 0; yU < XU; yU++) cU[zU + yU] = UU[yU]
          })), cU
        }
        return new YU(UU.slice(cU, cU + NU))
      }
      let IU, pU = yU;
      ArrayBuffer.isView(UU) ? (IU = UU.buffer, pU += UU.byteOffset) : IU = UU;
      if (pU + (AU - 1) * QU + XU * EU > IU.byteLength) throw new Error("Last accessed byte is out of bounds.");
      const aU = XU * EU;
      if (QU < aU) throw new Error("Byte stride cannot be smaller than the component's byte size.");
      if (QU !== aU) {
        const UU = new YU(NU),
          zU = new Uint8Array(IU, pU),
          cU = new Uint8Array(UU.buffer),
          yU = XU * EU;
        for (let XU = 0, FU = 0, oU = 0; XU < AU; XU++, FU += QU, oU += yU) cU.set(zU.subarray(FU, FU + yU), oU);
        return UU
      }
      return 1 !== EU && 0 !== (pU & EU - 1) && (cU.b.Warn("Array must be aligned to border of element size. Data will be copied."), DU = !0), DU ? new YU(IU.slice(pU, pU + NU * EU)) : new YU(IU, pU, NU)
    }

    function YU(UU, XU, zU, yU, QU, AU, DU, EU) {
      const YU = XU * FU(zU),
        NU = DU * XU;
      if (EU.length !== NU) throw new Error("Output length is not valid");
      if (5126 === zU && QU === YU)
        if (UU instanceof Array) {
          const XU = yU / 4;
          EU.set(UU, XU)
        } else if (ArrayBuffer.isView(UU)) {
        const XU = UU.byteOffset + yU;
        if (0 !== (3 & XU)) return cU.b.Warn("Float array must be aligned to 4-bytes border"), void EU.set(new Float32Array(UU.buffer.slice(XU, XU + NU * Float32Array.BYTES_PER_ELEMENT)));
        const zU = new Float32Array(UU.buffer, XU, NU);
        EU.set(zU)
      } else {
        const XU = new Float32Array(UU, yU, NU);
        EU.set(XU)
      } else oU(UU, yU, QU, XU, zU, NU, AU, ((UU, zU) => {
        for (let cU = 0; cU < XU; cU++) EU[zU + cU] = UU[cU]
      }))
    }

    function NU(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      if (Array.isArray(UU)) {
        for (let yU = 0; yU < XU; yU++)
          if (UU[zU + yU] - cU > 65535) return !0;
        return !1
      }
      return 4 === UU.BYTES_PER_ELEMENT
    }

    function IU(UU) {
      const XU = UU.buffer;
      if (XU instanceof ArrayBuffer) return UU;
      const zU = new ArrayBuffer(UU.byteLength);
      return new Uint8Array(zU).set(new Uint8Array(XU, UU.byteOffset, UU.byteLength)), zU
    }
  },
  40991: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => WU,
      f: () => RU,
      k: () => PU,
      i: () => OU,
      o: () => SU
    });
    class cU {
      constructor() {
        this.children = []
      }
      isValid(UU) {
        return !0
      }
      process(UU, XU, zU) {
        let cU = "";
        if (this.line) {
          let zU = this.line;
          const yU = XU.processor;
          if (yU) {
            yU.lineProcessor && (zU = yU.lineProcessor(zU, XU.isFragment, XU.processingContext));
            const cU = XU.processor?.attributeKeywordName ?? "attribute",
              QU = XU.isFragment && XU.processor?.varyingFragmentKeywordName ? XU.processor?.varyingFragmentKeywordName : !XU.isFragment && XU.processor?.varyingVertexKeywordName ? XU.processor?.varyingVertexKeywordName : "varying";
            if (!XU.isFragment && yU.attributeProcessor && this.line.startsWith(cU)) zU = yU.attributeProcessor(this.line, UU, XU.processingContext);
            else if (yU.varyingProcessor && (yU.varyingCheck?.(this.line, XU.isFragment) || !yU.varyingCheck && this.line.startsWith(QU))) zU = yU.varyingProcessor(this.line, XU.isFragment, UU, XU.processingContext);
            else if (yU.uniformProcessor && yU.uniformRegexp && yU.uniformRegexp.test(this.line)) XU.lookForClosingBracketForUniformBuffer || (zU = yU.uniformProcessor(this.line, XU.isFragment, UU, XU.processingContext));
            else if (yU.uniformBufferProcessor && yU.uniformBufferRegexp && yU.uniformBufferRegexp.test(this.line)) XU.lookForClosingBracketForUniformBuffer || (zU = yU.uniformBufferProcessor(this.line, XU.isFragment, XU.processingContext), XU.lookForClosingBracketForUniformBuffer = !0);
            else if (yU.textureProcessor && yU.textureRegexp && yU.textureRegexp.test(this.line)) zU = yU.textureProcessor(this.line, XU.isFragment, UU, XU.processingContext);
            else if ((yU.uniformProcessor || yU.uniformBufferProcessor) && this.line.startsWith("uniform") && !XU.lookForClosingBracketForUniformBuffer) {
              /uniform\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s+(\S+)\s*;/.test(this.line) ? yU.uniformProcessor && (zU = yU.uniformProcessor(this.line, XU.isFragment, UU, XU.processingContext)) : yU.uniformBufferProcessor && (zU = yU.uniformBufferProcessor(this.line, XU.isFragment, XU.processingContext), XU.lookForClosingBracketForUniformBuffer = !0)
            }
            XU.lookForClosingBracketForUniformBuffer && -1 !== this.line.indexOf("}") && (XU.lookForClosingBracketForUniformBuffer = !1, yU.endOfUniformBufferProcessor && (zU = yU.endOfUniformBufferProcessor(this.line, XU.isFragment, XU.processingContext)))
          }
          cU += zU + "\n"
        }
        for (const yU of this.children) cU += yU.process(UU, XU, zU);
        return this.additionalDefineKey && (UU[this.additionalDefineKey] = this.additionalDefineValue || "true", zU[this.additionalDefineKey] = UU[this.additionalDefineKey]), cU
      }
    }
    class yU {
      constructor() {
        this._lines = []
      }
      get currentLine() {
        return this._lines[this.lineIndex]
      }
      get canRead() {
        return this.lineIndex < this._lines.length - 1
      }
      set lines(UU) {
        this._lines.length = 0;
        for (const XU of UU) {
          if (!XU || "\r" === XU) continue;
          if ("#" === XU[0]) {
            this._lines.push(XU);
            continue
          }
          const UU = XU.trim();
          if (!UU) continue;
          if (UU.startsWith("//")) {
            this._lines.push(XU);
            continue
          }
          const zU = UU.indexOf(";");
          if (-1 === zU) this._lines.push(UU);
          else if (zU === UU.length - 1) UU.length > 1 && this._lines.push(UU);
          else {
            const UU = XU.split(";");
            for (let XU = 0; XU < UU.length; XU++) {
              let zU = UU[XU];
              zU && (zU = zU.trim(), zU && this._lines.push(zU + (XU !== UU.length - 1 ? ";" : "")))
            }
          }
        }
      }
    }
    class QU extends cU {
      process(UU, XU, zU) {
        for (let cU = 0; cU < this.children.length; cU++) {
          const yU = this.children[cU];
          if (yU.isValid(UU)) return yU.process(UU, XU, zU)
        }
        return ""
      }
    }
    class AU extends cU {
      isValid(UU) {
        return this.testExpression.isTrue(UU)
      }
    }
    class FU {
      isTrue(UU) {
        return !0
      }
      static postfixToInfix(UU) {
        const XU = [];
        for (const zU of UU)
          if (void 0 === FU._OperatorPriority[zU]) XU.push(zU);
          else {
            const UU = XU[XU.length - 1],
              cU = XU[XU.length - 2];
            XU.length -= 2, XU.push(`(${cU}${zU}${UU})`)
          } return XU[XU.length - 1]
      }
      static infixToPostfix(UU) {
        const XU = FU._InfixToPostfixCache.get(UU);
        if (XU) return XU.accessTime = Date.now(), XU.result;
        if (!UU.includes("&&") && !UU.includes("||") && !UU.includes(")") && !UU.includes("(")) return [UU];
        const zU = [];
        let cU = -1;
        const yU = () => {
            EU = EU.trim(), "" !== EU && (zU.push(EU), EU = "")
          },
          QU = UU => {
            cU < FU._Stack.length - 1 && (FU._Stack[++cU] = UU)
          },
          AU = () => FU._Stack[cU],
          oU = () => -1 === cU ? "!!INVALID EXPRESSION!!" : FU._Stack[cU--];
        let DU = 0,
          EU = "";
        for (; DU < UU.length;) {
          const XU = UU.charAt(DU),
            YU = DU < UU.length - 1 ? UU.substring(DU, 2 + DU) : "";
          if ("(" === XU) EU = "", QU(XU);
          else if (")" === XU) {
            for (yU(); - 1 !== cU && "(" !== AU();) zU.push(oU());
            oU()
          } else if (FU._OperatorPriority[YU] > 1) {
            for (yU(); - 1 !== cU && FU._OperatorPriority[AU()] >= FU._OperatorPriority[YU];) zU.push(oU());
            QU(YU), DU++
          } else EU += XU;
          DU++
        }
        for (yU(); - 1 !== cU;) "(" === AU() ? oU() : zU.push(oU());
        return FU._InfixToPostfixCache.size >= FU.InfixToPostfixCacheLimitSize && FU.ClearCache(), FU._InfixToPostfixCache.set(UU, {
          result: zU,
          accessTime: Date.now()
        }), zU
      }
      static ClearCache() {
        const UU = Array.from(FU._InfixToPostfixCache.entries()).sort(((UU, XU) => UU[1].accessTime - XU[1].accessTime));
        for (let XU = 0; XU < FU.InfixToPostfixCacheCleanupSize; XU++) FU._InfixToPostfixCache.delete(UU[XU][0])
      }
    }
    FU.InfixToPostfixCacheLimitSize = 5e4, FU.InfixToPostfixCacheCleanupSize = 25e3, FU._InfixToPostfixCache = new Map, FU._OperatorPriority = {
      ")": 0,
      "(": 1,
      "||": 2,
      "&&": 3
    }, FU._Stack = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    class oU extends FU {
      constructor(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super(), this.define = UU, this.not = XU
      }
      isTrue(UU) {
        let XU = void 0 !== UU[this.define];
        return this.not && (XU = !XU), XU
      }
    }
    class DU extends FU {
      isTrue(UU) {
        return this.leftOperand.isTrue(UU) || this.rightOperand.isTrue(UU)
      }
    }
    class EU extends FU {
      isTrue(UU) {
        return this.leftOperand.isTrue(UU) && this.rightOperand.isTrue(UU)
      }
    }
    class YU extends FU {
      constructor(UU, XU, zU) {
        super(), this.define = UU, this.operand = XU, this.testValue = zU
      }
      toString() {
        return `${this.define} ${this.operand} ${this.testValue}`
      }
      isTrue(UU) {
        let XU = !1;
        const zU = parseInt(void 0 != UU[this.define] ? UU[this.define] : this.define),
          cU = parseInt(void 0 != UU[this.testValue] ? UU[this.testValue] : this.testValue);
        if (isNaN(zU) || isNaN(cU)) return !1;
        switch (this.operand) {
          case ">":
            XU = zU > cU;
            break;
          case "<":
            XU = zU < cU;
            break;
          case "<=":
            XU = zU <= cU;
            break;
          case ">=":
            XU = zU >= cU;
            break;
          case "==":
            XU = zU === cU;
            break;
          case "!=":
            XU = zU !== cU
        }
        return XU
      }
    }
    var NU = zU(40989),
      IU = zU(40983);
    const pU = /defined\s*?\((.+?)\)/g,
      aU = /defined\s*?\[(.+?)\]/g,
      tU = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g,
      gU = /__decl__/,
      kU = /light\{X\}.(\w*)/g,
      GU = /\{X\}/g,
      BU = [],
      ZU = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;

    function RU(UU) {
      UU.processor && UU.processor.initializeShaders && UU.processor.initializeShaders(UU.processingContext)
    }

    function PU(UU, XU, zU, cU) {
      XU.processor?.preProcessShaderCode && (UU = XU.processor.preProcessShaderCode(UU, XU.isFragment)), OU(UU, XU, (UU => {
        XU.processCodeAfterIncludes && (UU = XU.processCodeAfterIncludes(XU.isFragment ? "fragment" : "vertex", UU, XU.defines));
        const yU = function(UU, XU, zU) {
          let cU = function(UU, XU) {
            if (XU.processor?.noPrecision) return UU;
            const zU = XU.shouldUseHighPrecisionShader; - 1 === UU.indexOf("precision highp float") ? UU = zU ? "precision highp float;\n" + UU : "precision mediump float;\n" + UU : zU || (UU = UU.replace("precision highp float", "precision mediump float"));
            return UU
          }(UU, XU);
          if (!XU.processor) return cU;
          if (0 === XU.processor.shaderLanguage && -1 !== cU.indexOf("#version 3") && (cU = cU.replace("#version 300 es", ""), !XU.processor.parseGLES3)) return cU;
          const yU = XU.defines,
            QU = qU(XU, zU);
          XU.processor.preProcessor && (cU = XU.processor.preProcessor(cU, yU, QU, XU.isFragment, XU.processingContext));
          const AU = {};
          cU = wU(cU, QU, XU, AU), XU.processor.postProcessor && (cU = XU.processor.postProcessor(cU, yU, XU.isFragment, XU.processingContext, zU ? {
            drawBuffersExtensionDisabled: !zU.getCaps().drawBuffersExtension
          } : {}, QU, AU));
          zU?._features.needShaderCodeInlining && (cU = zU.inlineShaderCode(cU));
          return cU
        }(UU, XU, cU);
        zU(yU, UU)
      }))
    }

    function WU(UU, XU, zU) {
      return zU.processor && zU.processor.finalizeShaders ? zU.processor.finalizeShaders(UU, XU, zU.processingContext) : {
        vertexCode: UU,
        fragmentCode: XU
      }
    }

    function dU(UU) {
      const XU = /defined\((.+)\)/.exec(UU);
      if (XU && XU.length) return new oU(XU[1].trim(), "!" === UU[0]);
      const zU = ["==", "!=", ">=", "<=", "<", ">"];
      let cU = "",
        yU = 0;
      for (cU of zU)
        if (yU = UU.indexOf(cU), yU > -1) break;
      if (-1 === yU) return new oU(UU);
      const QU = UU.substring(0, yU).trim(),
        AU = UU.substring(yU + cU.length).trim();
      return new YU(QU, cU, AU)
    }

    function LU(UU, XU) {
      const zU = new AU,
        cU = UU.substring(0, XU);
      let yU = UU.substring(XU);
      return yU = yU.substring(0, (yU.indexOf("//") + 1 || yU.length + 1) - 1).trim(), zU.testExpression = "#ifdef" === cU ? new oU(yU) : "#ifndef" === cU ? new oU(yU, !0) : function(UU) {
        UU = UU.replace(pU, "defined[$1]");
        const XU = FU.infixToPostfix(UU),
          zU = [];
        for (const yU of XU)
          if ("||" !== yU && "&&" !== yU) zU.push(yU);
          else if (zU.length >= 2) {
          let UU = zU[zU.length - 1],
            XU = zU[zU.length - 2];
          zU.length -= 2;
          const cU = "&&" == yU ? new EU : new DU;
          "string" === typeof UU && (UU = UU.replace(aU, "defined($1)")), "string" === typeof XU && (XU = XU.replace(aU, "defined($1)")), cU.leftOperand = "string" === typeof XU ? dU(XU) : XU, cU.rightOperand = "string" === typeof UU ? dU(UU) : UU, zU.push(cU)
        }
        let cU = zU[zU.length - 1];
        return "string" === typeof cU && (cU = cU.replace(aU, "defined($1)")), "string" === typeof cU ? dU(cU) : cU
      }(yU), zU
    }

    function eU(UU, XU, zU, yU) {
      let QU;
      for (; CU(UU, zU, yU);) {
        QU = UU.currentLine;
        const AU = QU.substring(0, 5).toLowerCase();
        if ("#else" === AU) {
          const zU = new cU;
          return XU.children.push(zU), void CU(UU, zU, yU)
        }
        if ("#elif" === AU) {
          const UU = LU(QU, 5);
          XU.children.push(UU), zU = UU
        }
      }
    }

    function CU(UU, XU, zU) {
      for (; UU.canRead;) {
        UU.lineIndex++;
        const yU = UU.currentLine;
        if (yU.indexOf("#") >= 0) {
          const cU = ZU.exec(yU);
          if (cU && cU.length) {
            switch (cU[0]) {
              case "#ifdef": {
                const cU = new QU;
                XU.children.push(cU);
                const AU = LU(yU, 6);
                cU.children.push(AU), eU(UU, cU, AU, zU);
                break
              }
              case "#else":
              case "#elif":
                return !0;
              case "#endif":
                return !1;
              case "#ifndef": {
                const cU = new QU;
                XU.children.push(cU);
                const AU = LU(yU, 7);
                cU.children.push(AU), eU(UU, cU, AU, zU);
                break
              }
              case "#if": {
                const cU = new QU,
                  AU = LU(yU, 3);
                XU.children.push(cU), cU.children.push(AU), eU(UU, cU, AU, zU);
                break
              }
            }
            continue
          }
        }
        const AU = new cU;
        if (AU.line = yU, XU.children.push(AU), "#" === yU[0] && "d" === yU[1]) {
          const UU = yU.replace(";", "").split(" ");
          AU.additionalDefineKey = UU[1], 3 === UU.length && (AU.additionalDefineValue = UU[2])
        }
      }
      return !1
    }

    function wU(UU, XU, zU, QU) {
      const AU = new cU,
        FU = new yU;
      return FU.lineIndex = -1, FU.lines = UU.split("\n"), CU(FU, AU, QU), AU.process(XU, zU, QU)
    }

    function qU(UU, XU) {
      const zU = UU.defines,
        cU = {};
      for (const yU of zU) {
        const UU = yU.replace("#define", "").replace(";", "").trim().split(" ");
        cU[UU[0]] = UU.length > 1 ? UU[1] : ""
      }
      return 0 === UU.processor?.shaderLanguage && (cU.GL_ES = "true"), cU.__VERSION__ = UU.version, cU[UU.platformName] = "true", (0, IU.h)(cU, XU?.isNDCHalfZRange, XU?.XyU, XU?.useExactSrgbConversions), cU
    }

    function OU(UU, XU, zU) {
      let cU;
      for (BU.length = 0; null !== (cU = tU.exec(UU));) BU.push(cU);
      let yU = [UU],
        QU = !1;
      for (const FU of BU) {
        let UU = FU[1];
        if (-1 !== UU.indexOf("__decl__") && (UU = UU.replace(gU, ""), XU.supportsUniformBuffers && (UU = UU.replace("Vertex", "Ubo").replace("Fragment", "Ubo")), UU += "Declaration"), !XU.includesShadersStore[UU]) {
          const cU = XU.shadersRepository + "ShadersInclude/" + UU + ".fx";
          return void SU.loadFile(cU, (cU => {
            XU.includesShadersStore[UU] = cU, OU(yU.join(""), XU, zU)
          }))
        } {
          let zU = XU.includesShadersStore[UU];
          if (FU[2]) {
            const UU = FU[3].split(",");
            for (let XU = 0; XU < UU.length; XU += 2) {
              const cU = new RegExp(UU[XU], "g"),
                yU = UU[XU + 1];
              zU = zU.replace(cU, yU)
            }
          }
          if (FU[4]) {
            const UU = FU[5];
            if (-1 !== UU.indexOf("..")) {
              const cU = UU.split(".."),
                yU = parseInt(cU[0]);
              let QU = parseInt(cU[1]),
                AU = zU.slice(0);
              zU = "", isNaN(QU) && (QU = XU.indexParameters[cU[1]]);
              for (let UU = yU; UU < QU; UU++) XU.supportsUniformBuffers || (AU = AU.replace(kU, ((UU, XU) => XU + "{X}"))), zU += AU.replace(GU, UU.toString()) + "\n"
            } else XU.supportsUniformBuffers || (zU = zU.replace(kU, ((UU, XU) => XU + "{X}"))), zU = zU.replace(GU, UU)
          }
          const cU = [];
          for (const UU of yU) {
            const XU = UU.split(FU[0]);
            for (let UU = 0; UU < XU.length - 1; UU++) cU.push(XU[UU]), cU.push(zU);
            cU.push(XU[XU.length - 1])
          }
          yU = cU, QU = QU || zU.indexOf("#include<") >= 0 || zU.indexOf("#include <") >= 0
        }
      }
      BU.length = 0;
      const AU = yU.join("");
      QU ? OU(AU.toString(), XU, zU) : zU(AU)
    }
    const SU = {
      loadFile: (UU, XU, zU, cU, yU, QU) => {
        throw (0, NU.m)("FileTools")
      }
    }
  },
  40983: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => yU,
      d: () => QU,
      h: () => FU,
      k: () => AU,
      m: () => oU
    });
    var cU = zU(40989);
    const yU = {};

    function QU(UU, XU) {
      return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (XU ? XU + "\n" : "") + UU
    }

    function AU(UU, XU, zU, QU, AU, FU, oU) {
      const DU = oU || yU.loadFile;
      if (!DU) throw (0, cU.m)("FileTools");
      return DU(UU, XU, zU, QU, AU, FU)
    }

    function FU(UU, XU, zU, cU) {
      if (UU) return XU ? UU.IS_NDC_HALF_ZRANGE = "" : delete UU.IS_NDC_HALF_ZRANGE, zU ? UU.USE_REVERSE_DEPTHBUFFER = "" : delete UU.USE_REVERSE_DEPTHBUFFER, void(cU ? UU.USE_EXACT_SRGB_CONVERSIONS = "" : delete UU.USE_EXACT_SRGB_CONVERSIONS);
      {
        let UU = "";
        return XU && (UU += "#define IS_NDC_HALF_ZRANGE"), zU && (UU && (UU += "\n"), UU += "#define USE_REVERSE_DEPTHBUFFER"), cU && (UU && (UU += "\n"), UU += "#define USE_EXACT_SRGB_CONVERSIONS"), UU
      }
    }

    function oU(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        cU = arguments.length > 3 ? arguments[3] : void 0;
      switch (UU) {
        case 3: {
          const UU = new Int8Array(XU);
          return cU && UU.set(new Int8Array(cU)), UU
        }
        case 0: {
          const UU = new Uint8Array(XU);
          return cU && UU.set(new Uint8Array(cU)), UU
        }
        case 4: {
          const UU = "number" !== typeof XU ? new Int16Array(XU) : new Int16Array(zU ? XU / 2 : XU);
          return cU && UU.set(new Int16Array(cU)), UU
        }
        case 5:
        case 8:
        case 9:
        case 10:
        case 2: {
          const UU = "number" !== typeof XU ? new Uint16Array(XU) : new Uint16Array(zU ? XU / 2 : XU);
          return cU && UU.set(new Uint16Array(cU)), UU
        }
        case 6: {
          const UU = "number" !== typeof XU ? new Int32Array(XU) : new Int32Array(zU ? XU / 4 : XU);
          return cU && UU.set(new Int32Array(cU)), UU
        }
        case 7:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15: {
          const UU = "number" !== typeof XU ? new Uint32Array(XU) : new Uint32Array(zU ? XU / 4 : XU);
          return cU && UU.set(new Uint32Array(cU)), UU
        }
        case 1: {
          const UU = "number" !== typeof XU ? new Float32Array(XU) : new Float32Array(zU ? XU / 4 : XU);
          return cU && UU.set(new Float32Array(cU)), UU
        }
      }
      const yU = new Uint8Array(XU);
      return cU && yU.set(new Uint8Array(cU)), yU
    }
  },
  40989: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => DU,
      i: () => EU,
      k: () => oU,
      m: () => yU
    });
    const cU = {};

    function yU(UU) {
      if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !cU[UU]) return cU[UU] = !0, `${UU} needs to be imported before as it contains a side-effect required by your code.`
    }
    const QU = {};
    let AU = !1,
      FU = 0;

    function oU(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const cU = function() {
        if ((zU || AU) && 0 === FU) {
          const zU = `${UU}.${XU}`;
          QU[zU] || (QU[zU] = !0, console.warn(`[Babylon.js] ${zU}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
        }
      };
      return cU.__isSideEffectStub = !0, cU
    }

    function DU(UU) {
      return !!UU && !UU.__isSideEffectStub
    }

    function EU(UU, XU) {
      return {
        get() {},
        set(UU) {
          Object.defineProperty(this, XU, {
            value: UU,
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
  40971: (UU, XU, zU) => {
    function cU() {
      return "undefined" !== typeof window
    }

    function yU() {
      return "undefined" !== typeof navigator
    }

    function QU() {
      return "undefined" !== typeof document
    }

    function AU(UU) {
      let XU = "",
        zU = UU.firstChild;
      for (; zU;) 3 === zU.nodeType && (XU += zU.textContent), zU = zU.nextSibling;
      return XU
    }
    zU.d(XU, {
      b: () => AU,
      c: () => QU,
      e: () => yU,
      h: () => cU
    })
  },
  41168: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => cU,
      f: () => yU,
      h: () => QU
    });
    class cU extends Error {}
    cU._setPrototypeOf = Object.setPrototypeOf || ((UU, XU) => (UU.__proto__ = XU, UU));
    const yU = {
      MeshInvalidPositionsError: 0,
      UnsupportedTextureError: 1e3,
      GLTFLoaderUnexpectedMagicError: 2e3,
      SceneLoaderError: 3e3,
      LoadFileError: 4e3,
      RequestFileError: 4001,
      ReadFileError: 4002
    };
    class QU extends cU {
      constructor(UU, XU, zU) {
        super(UU), this.errorCode = XU, this.innerError = zU, this.name = "RuntimeError", cU._setPrototypeOf(this, QU.prototype)
      }
    }
  },
  41152: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => qU,
      g: () => GU,
      k: () => LU,
      o: () => CU,
      q: () => WU,
      s: () => RU,
      w: () => PU,
      A: () => fU,
      E: () => dU,
      H: () => BU
    });
    var cU = zU(41160),
      yU = zU(40971),
      QU = zU(37846);
    class AU {}
    AU.FilesToLoad = {};
    var FU = zU(41168),
      oU = zU(41171),
      DU = zU(37841),
      EU = zU(40983),
      YU = zU(40991),
      NU = zU(39493),
      IU = zU(40999),
      pU = zU(41177);
    const aU = new RegExp(/^data:([^,]+\/[^,]+)?;base64,/i);
    class tU extends FU.h {
      constructor(UU, XU) {
        super(UU, FU.f.LoadFileError), this.name = "LoadFileError", FU.b._setPrototypeOf(this, tU.prototype), XU instanceof cU.e ? this.request = XU : this.file = XU
      }
    }
    class gU extends FU.h {
      constructor(UU, XU) {
        super(UU, FU.f.RequestFileError), this.request = XU, this.name = "RequestFileError", FU.b._setPrototypeOf(this, gU.prototype)
      }
    }
    class kU extends FU.h {
      constructor(UU, XU) {
        super(UU, FU.f.ReadFileError), this.file = XU, this.name = "ReadFileError", FU.b._setPrototypeOf(this, kU.prototype)
      }
    }
    const GU = {
        DefaultRetryStrategy: class {
          static ExponentialBackoff() {
            let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
              XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
            return (zU, cU, yU) => 0 !== cU.status || yU >= UU || -1 !== zU.indexOf("file:") ? -1 : Math.pow(2, yU) * XU
          }
        }.ExponentialBackoff(),
        BaseUrl: "",
        CorsBehavior: "anonymous",
        PreprocessUrl: UU => UU,
        ScriptBaseUrl: "",
        ScriptPreprocessUrl: UU => UU,
        CleanUrl: UU => UU = UU.replace(/#/gm, "%23")
      },
      BU = (UU, XU) => {
        if ((!UU || 0 !== UU.indexOf("data:")) && GU.CorsBehavior)
          if ("string" === typeof GU.CorsBehavior || GU.CorsBehavior instanceof String) XU.crossOrigin = GU.CorsBehavior;
          else {
            const zU = GU.CorsBehavior(UU);
            zU && (XU.crossOrigin = zU)
          }
      },
      ZU = {
        getRequiredSize: null
      },
      RU = function(UU, XU, zU, yU) {
        let QU, FU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
          EU = arguments.length > 5 ? arguments[5] : void 0,
          YU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : DU.b.LastCreatedEngine;
        if ("undefined" === typeof HTMLImageElement && !YU?._features.forceBitmapOverHTMLImageElement) return zU("LoadImage is only supported in web or BabylonNative environments."), null;
        if (YU?._features.forceBitmapOverHTMLImageElement && "string" !== typeof UU && "undefined" !== typeof Blob) {
          let cU;
          if (UU instanceof Blob) cU = UU;
          else {
            const XU = UU instanceof ArrayBuffer ? UU : (0, pU.l)(UU);
            cU = new Blob([XU], {
              type: FU
            })
          }
          return YU.createImageBitmap(cU, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...EU
          }).then(XU).catch((XU => {
            zU && zU("Error while trying to load image: " + UU, XU)
          })), null
        }
        let NU = !1;
        if (UU instanceof ArrayBuffer || ArrayBuffer.isView(UU))
          if ("undefined" !== typeof Blob && "undefined" !== typeof URL) {
            let XU;
            XU = UU instanceof ArrayBuffer ? UU : (0, pU.l)(UU), QU = URL.createObjectURL(new Blob([XU], {
              type: FU
            })), NU = !0
          } else QU = `data:${FU};base64,` + (0, oU.f)(UU);
        else UU instanceof Blob ? (QU = URL.createObjectURL(UU), NU = !0) : (QU = GU.CleanUrl(UU), QU = GU.PreprocessUrl(QU));
        const IU = XU => {
          if (zU) {
            const cU = QU || UU.toString();
            zU(`Error while trying to load image: ${0===cU.indexOf("http")||cU.length<=128?cU:cU.slice(0,128)+"..."}`, XU)
          }
        };
        if (YU?._features.forceBitmapOverHTMLImageElement) return WU(QU, (cU => {
          YU.createImageBitmap(new Blob([cU], {
            type: FU
          }), {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...EU
          }).then((UU => {
            XU(UU), NU && URL.revokeObjectURL(QU)
          })).catch((XU => {
            zU && zU("Error while trying to load image: " + UU, XU)
          }))
        }), void 0, yU || void 0, !0, ((UU, XU) => {
          IU(XU)
        })), null;
        const aU = new Image;
        if (ZU.getRequiredSize) {
          const XU = ZU.getRequiredSize(UU);
          XU.width && (aU.width = XU.width), XU.height && (aU.height = XU.height)
        }
        BU(QU, aU);
        const tU = [],
          gU = () => {
            for (const UU of tU) UU.target.removeEventListener(UU.name, UU.handler);
            tU.length = 0
          };
        tU.push({
          target: aU,
          name: "load",
          handler: () => {
            gU(), XU(aU), NU && aU.src && URL.revokeObjectURL(aU.src)
          }
        }), tU.push({
          target: aU,
          name: "error",
          handler: UU => {
            gU(), IU(UU), NU && aU.src && URL.revokeObjectURL(aU.src)
          }
        }), tU.push({
          target: document,
          name: "securitypolicyviolation",
          handler: UU => {
            if (UU.blockedURI !== aU.src || "oY" === UU.disposition) return;
            gU();
            const XU = new Error(`CSP violation of policy ${UU.effectiveDirective} ${UU.blockedURI}. Current policy is ${UU.originalPolicy}`);
            DU.b.UseFallbackTexture = !1, IU(XU), NU && aU.src && URL.revokeObjectURL(aU.src), aU.src = ""
          }
        }), (() => {
          for (const UU of tU) UU.target.addEventListener(UU.name, UU.handler)
        })();
        const kU = "blob:" === QU.substring(0, 5),
          RU = "data:" === QU.substring(0, 5),
          PU = () => {
            kU || RU || !cU.e.IsCustomRequestAvailable ? aU.src = QU : WU(QU, ((UU, XU, zU) => {
              const cU = new Blob([UU], {
                  type: !FU && zU ? zU : FU
                }),
                yU = URL.createObjectURL(cU);
              NU = !0, aU.src = yU
            }), void 0, yU || void 0, !0, ((UU, XU) => {
              IU(XU)
            }))
          },
          dU = () => {
            yU && yU.loadImage(QU, aU)
          };
        if (!kU && !RU && yU && yU.enableTexturesOffline) yU.open(dU, PU);
        else {
          if (-1 !== QU.indexOf("file:")) {
            const UU = decodeURIComponent(QU.substring(5).toLowerCase());
            if (AU.FilesToLoad[UU] && "undefined" !== typeof URL) {
              try {
                let XU;
                try {
                  XU = URL.createObjectURL(AU.FilesToLoad[UU])
                } catch (LU) {
                  XU = URL.createObjectURL(AU.FilesToLoad[UU])
                }
                aU.src = XU, NU = !0
              } catch (eU) {
                aU.src = ""
              }
              return aU
            }
          }
          PU()
        }
        return aU
      },
      PU = (UU, XU, zU, cU, yU) => {
        const AU = new FileReader,
          FU = {
            onCompleteObservable: new QU.e,
            abort: () => AU.abort()
          };
        return AU.onloadend = () => FU.onCompleteObservable.notifyObservers(FU), yU && (AU.onerror = () => {
          yU(new kU(`Unable to read ${UU.name}`, UU))
        }), AU.onload = UU => {
          XU(UU.target.result)
        }, zU && (AU.onprogress = zU), cU ? AU.readAsArrayBuffer(UU) : AU.readAsText(UU), FU
      },
      WU = (UU, XU, zU, cU, yU, oU, DU) => {
        if (UU.name) return PU(UU, XU, zU, yU, oU ? UU => {
          oU(void 0, UU)
        } : void 0);
        const EU = UU;
        if (-1 !== EU.indexOf("file:")) {
          let UU = decodeURIComponent(EU.substring(5).toLowerCase());
          0 === UU.indexOf("./") && (UU = UU.substring(2));
          const cU = AU.FilesToLoad[UU];
          if (cU) return PU(cU, XU, zU, yU, oU ? UU => oU(void 0, new tU(UU.message, UU.file)) : void 0)
        }
        const {
          match: YU,
          type: pU
        } = wU(EU);
        if (YU) {
          const UU = {
            onCompleteObservable: new QU.e,
            abort: () => () => {}
          };
          try {
            const UU = yU ? qU(EU) : OU(EU);
            XU(UU, void 0, pU)
          } catch (FU) {
            oU ? oU(void 0, FU) : NU.b.Error(FU.message || "Failed to parse the Data URL")
          }
          return IU.e.SetImmediate((() => {
            UU.onCompleteObservable.notifyObservers(UU)
          })), UU
        }
        return dU(EU, ((UU, zU) => {
          XU(UU, zU?.responseURL, zU?.getResponseHeader("content-type"))
        }), zU, cU, yU, oU ? UU => {
          oU(UU.request, new tU(UU.message, UU.request))
        } : void 0, DU)
      },
      dU = (UU, XU, zU, AU, FU, oU, EU) => {
        null !== AU && (AU ?? (AU = DU.b.LastCreatedScene?.offlineProvider)), UU = GU.CleanUrl(UU), UU = GU.PreprocessUrl(UU);
        const YU = GU.BaseUrl + UU;
        let IU = !1;
        const pU = {
            onCompleteObservable: new QU.e,
            abort: () => IU = !0
          },
          aU = () => {
            let UU, QU = new cU.e,
              AU = null;
            const DU = () => {
              QU && (zU && QU.removeEventListener("progress", zU), UU && QU.removeEventListener("readystatechange", UU), QU.removeEventListener("loadend", aU))
            };
            let aU = () => {
              DU(), pU.onCompleteObservable.notifyObservers(pU), pU.onCompleteObservable.clear(), zU = void 0, UU = null, aU = null, oU = void 0, EU = void 0, XU = void 0
            };
            pU.abort = () => {
              IU = !0, aU && aU(), QU && QU.readyState !== (XMLHttpRequest.DONE || 4) && QU.abort(), null !== AU && (clearTimeout(AU), AU = null), QU = null
            };
            const tU = UU => {
                const XU = UU.message || "Unknown error";
                oU && QU ? oU(new gU(XU, QU)) : NU.b.Error(XU)
              },
              kU = NU => {
                if (QU) {
                  if (QU.open("GET", YU), EU) try {
                    EU(QU)
                  } catch (pU) {
                    return void tU(pU)
                  }
                  FU && (QU.responseType = "arraybuffer"), zU && QU.addEventListener("progress", zU), aU && QU.addEventListener("loadend", aU), UU = () => {
                    if (!IU && QU && QU.readyState === (XMLHttpRequest.DONE || 4)) {
                      if (UU && QU.removeEventListener("readystatechange", UU), QU.status >= 200 && QU.status < 300 || 0 === QU.status && (!(0, yU.h)() || eU())) {
                        const UU = FU ? QU.response : QU.responseText;
                        if (null !== UU) {
                          try {
                            XU && XU(UU, QU)
                          } catch (pU) {
                            tU(pU)
                          }
                          return
                        }
                      }
                      const zU = GU.DefaultRetryStrategy;
                      if (zU) {
                        const UU = zU(YU, QU, NU);
                        if (-1 !== UU) return DU(), QU = new cU.e, void(AU = setTimeout((() => kU(NU + 1)), UU))
                      }
                      const EU = new gU("Error status: " + QU.status + " " + QU.statusText + " - Unable to load " + YU, QU);
                      oU && oU(EU)
                    }
                  }, QU.addEventListener("readystatechange", UU), QU.send()
                }
              };
            kU(0)
          };
        if (AU && AU.enableSceneOffline && !UU.startsWith("blob:")) {
          const cU = UU => {
              UU && UU.status > 400 ? oU && oU(UU) : aU()
            },
            yU = () => {
              AU && AU.loadFile(GU.BaseUrl + UU, (UU => {
                !IU && XU && XU(UU), pU.onCompleteObservable.notifyObservers(pU)
              }), zU ? UU => {
                !IU && zU && zU(UU)
              } : void 0, cU, FU)
            };
          AU.open(yU, cU)
        } else aU();
        return pU
      },
      LU = UU => {
        const {
          match: XU,
          type: zU
        } = wU(UU);
        if (XU) return zU || void 0;
        const cU = UU.lastIndexOf(".");
        switch (UU.substring(cU + 1).toLowerCase()) {
          case "glb":
            return "model/gltf-binary";
          case "bin":
            return "application/octet-stream";
          case "oq":
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
      eU = () => "undefined" !== typeof location && "file:" === location.protocol,
      CU = UU => aU.test(UU),
      wU = UU => {
        const XU = aU.exec(UU);
        if (null === XU || 0 === XU.length) return {
          match: !1,
          type: ""
        };
        return {
          match: !0,
          type: XU[0].replace("data:", "").replace(";base64,", "")
        }
      };

    function qU(UU) {
      return (0, oU.b)(UU.split(",")[1])
    }
    const OU = UU => (0, oU.d)(UU.split(",")[1]);
    let SU;
    const rU = (UU, XU, zU, cU, yU, QU, AU, FU, oU, DU) => {
      SU = {
        DecodeBase64UrlToBinary: UU,
        DecodeBase64UrlToString: XU,
        DefaultRetryStrategy: zU.DefaultRetryStrategy,
        BaseUrl: zU.BaseUrl,
        CorsBehavior: zU.CorsBehavior,
        PreprocessUrl: zU.PreprocessUrl,
        IsBase64DataUrl: cU,
        IsFileURL: yU,
        LoadFile: QU,
        LoadImage: AU,
        ReadFile: FU,
        RequestFile: oU,
        SetCorsBehavior: DU
      }, Object.defineProperty(SU, "DefaultRetryStrategy", {
        get: function() {
          return zU.DefaultRetryStrategy
        },
        set: function(UU) {
          zU.DefaultRetryStrategy = UU
        }
      }), Object.defineProperty(SU, "BaseUrl", {
        get: function() {
          return zU.BaseUrl
        },
        set: function(UU) {
          zU.BaseUrl = UU
        }
      }), Object.defineProperty(SU, "PreprocessUrl", {
        get: function() {
          return zU.PreprocessUrl
        },
        set: function(UU) {
          zU.PreprocessUrl = UU
        }
      }), Object.defineProperty(SU, "CorsBehavior", {
        get: function() {
          return zU.CorsBehavior
        },
        set: function(UU) {
          zU.CorsBehavior = UU
        }
      })
    };
    let uU = !1;

    function fU() {
      uU || (uU = !0, rU(qU, OU, GU, CU, eU, WU, RU, PU, dU, BU), EU.c.loadFile = WU, EU.c.loadImage = RU, YU.o.loadFile = WU)
    }
  },
  41179: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => FU,
      f: () => QU,
      h: () => AU
    });
    let cU = null;

    function yU() {
      if (cU) return cU;
      const UU = new ArrayBuffer(4),
        XU = new Float32Array(UU),
        zU = new Uint32Array(UU),
        yU = new Uint32Array(512),
        QU = new Uint32Array(512);
      for (let cU = 0; cU < 256; ++cU) {
        const UU = cU - 127;
        UU < -24 ? (yU[cU] = 0, yU[256 | cU] = 32768, QU[cU] = 24, QU[256 | cU] = 24) : UU < -14 ? (yU[cU] = 1024 >> -UU - 14, yU[256 | cU] = 1024 >> -UU - 14 | 32768, QU[cU] = -UU - 1, QU[256 | cU] = -UU - 1) : UU <= 15 ? (yU[cU] = UU + 15 << 10, yU[256 | cU] = UU + 15 << 10 | 32768, QU[cU] = 13, QU[256 | cU] = 13) : UU < 128 ? (yU[cU] = 31744, yU[256 | cU] = 64512, QU[cU] = 24, QU[256 | cU] = 24) : (yU[cU] = 31744, yU[256 | cU] = 64512, QU[cU] = 13, QU[256 | cU] = 13)
      }
      const AU = new Uint32Array(2048),
        FU = new Uint32Array(64),
        oU = new Uint32Array(64);
      for (let cU = 1; cU < 1024; ++cU) {
        let UU = cU << 13,
          XU = 0;
        for (; 0 === (8388608 & UU);) UU <<= 1, XU -= 8388608;
        UU &= -8388609, XU += 947912704, AU[cU] = UU | XU
      }
      for (let cU = 1024; cU < 2048; ++cU) AU[cU] = 939524096 + (cU - 1024 << 13);
      for (let cU = 1; cU < 31; ++cU) FU[cU] = cU << 23;
      FU[31] = 1199570944, FU[32] = 2147483648;
      for (let cU = 33; cU < 63; ++cU) FU[cU] = 2147483648 + (cU - 32 << 23);
      FU[63] = 3347054592;
      for (let cU = 1; cU < 64; ++cU) 32 !== cU && (oU[cU] = 1024);
      return cU = {
        floatView: XU,
        uint32View: zU,
        baseTable: yU,
        shiftTable: QU,
        mantissaTable: AU,
        exponentTable: FU,
        offsetTable: oU
      }, cU
    }
    const QU = 65504;

    function AU(UU) {
      const XU = yU();
      XU.floatView[0] = UU;
      const zU = XU.uint32View[0],
        cU = zU >> 23 & 511;
      return XU.baseTable[cU] + ((8388607 & zU) >> XU.shiftTable[cU])
    }

    function FU(UU) {
      const XU = yU();
      return XU.uint32View[0] = XU.mantissaTable[XU.offsetTable[UU >> 10] + (1023 & UU)] + XU.exponentTable[UU >> 10], XU.floatView[0]
    }
  },
  41171: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => QU,
      d: () => yU,
      f: () => cU
    });
    const cU = UU => {
        const XU = ArrayBuffer.isView(UU) ? new Uint8Array(UU.buffer, UU.byteOffset, UU.byteLength) : new Uint8Array(UU);
        return "function" === typeof XU.toBase64 ? XU.toBase64() : function(UU) {
          const XU = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          let zU, cU, yU, QU, AU, FU, oU, DU = "",
            EU = 0;
          for (; EU < UU.length;) zU = UU[EU++], cU = EU < UU.length ? UU[EU++] : Number.NaN, yU = EU < UU.length ? UU[EU++] : Number.NaN, QU = zU >> 2, AU = (3 & zU) << 4 | cU >> 4, FU = (15 & cU) << 2 | yU >> 6, oU = 63 & yU, isNaN(cU) ? FU = oU = 64 : isNaN(yU) && (oU = 64), DU += XU.charAt(QU) + XU.charAt(AU) + XU.charAt(FU) + XU.charAt(oU);
          return DU
        }(XU)
      },
      yU = UU => atob(UU),
      QU = UU => "function" === typeof Uint8Array.fromBase64 ? Uint8Array.fromBase64(UU).buffer : function(UU) {
        const XU = yU(UU),
          zU = XU.length,
          cU = new Uint8Array(new ArrayBuffer(zU));
        for (let yU = 0; yU < zU; yU++) cU[yU] = XU.charCodeAt(yU);
        return cU.buffer
      }(UU)
  },
  40999: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => yU,
      h: () => AU
    });
    let cU = [];
    class yU {
      static SetImmediate(UU) {
        0 === cU.length && setTimeout((() => {
          const UU = cU;
          cU = [];
          for (const XU of UU) XU()
        }), 1), cU.push(UU)
      }
    }

    function QU(UU, XU, zU) {
      try {
        if (UU()) return XU(), !0
      } catch (cU) {
        return zU?.(cU), !0
      }
      return !1
    }
    const AU = function(UU, XU, zU) {
      let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
        yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
        AU = arguments.length > 6 ? arguments[6] : void 0;
      if ((!(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]) && QU(UU, XU, zU)) return null;
      const FU = setInterval((() => {
        QU(UU, XU, zU) ? clearInterval(FU) : (yU -= cU, yU < 0 && (clearInterval(FU), zU?.(new Error("Operation timed out after maximum retries. " + (AU || "")), !0)))
      }), cU);
      return () => clearInterval(FU)
    }
  },
  41160: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => cU
    });
    class cU {
      constructor() {
        this._xhr = "undefined" !== typeof _native && _native.XMLHttpRequest ? new _native.XMLHttpRequest : new XMLHttpRequest, this._requestURL = ""
      }
      static get IsCustomRequestAvailable() {
        return Object.keys(cU.CustomRequestHeaders).length > 0 || cU.CustomRequestModifiers.length > 0
      }
      static _CleanUrl(UU) {
        return UU = (UU = UU.replace("file:http:", "http:")).replace("file:https:", "https:")
      }
      static _ShouldSkipRequestModifications(UU) {
        return cU.SkipRequestModificationForBabylonCDN && (UU.includes("preview.babylonjs.com") || UU.includes("cdn.babylonjs.com"))
      }
      static _CollectCustomizations(UU) {
        const XU = {
          ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        };
        if (cU._ShouldSkipRequestModifications(UU)) return {
          url: UU,
          headers: XU
        };
        for (const yU in cU.CustomRequestHeaders) {
          const UU = cU.CustomRequestHeaders[yU];
          UU && (XU[yU] = UU)
        }
        const zU = {
          setRequestHeader: (UU, zU) => {
            XU[UU] = zU
          }
        };
        for (const yU of cU.CustomRequestModifiers) {
          if (cU._ShouldSkipRequestModifications(UU)) break;
          const XU = yU(zU, UU);
          "string" === typeof XU && (UU = XU)
        }
        return {
          url: UU,
          headers: XU
        }
      }
      static async FetchAsync(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const zU = XU.method ?? "GET";
        if ("undefined" !== typeof fetch) {
          const {
            url: yU,
            headers: QU
          } = cU._CollectCustomizations(cU._CleanUrl(UU), XU.headers ?? {});
          return await fetch(yU, {
            method: zU,
            headers: QU,
            body: XU.body ?? void 0
          })
        }
        return await new Promise(((yU, QU) => {
          const AU = new cU;
          AU.responseType = "arraybuffer", AU.addEventListener("readystatechange", (() => {
            if (4 === AU.readyState)
              if (AU.status >= 200 && AU.status < 300) {
                const UU = "undefined" !== typeof Headers ? new Headers : void 0,
                  XU = AU.getResponseHeader("Content-Type");
                XU && UU && UU.set("Content-Type", XU), "undefined" !== typeof Response ? yU(new Response(AU.response, {
                  status: AU.status,
                  statusText: AU.statusText,
                  headers: UU
                })) : yU({
                  ok: !0,
                  status: AU.status,
                  statusText: AU.statusText,
                  headers: {
                    get: UU => AU.getResponseHeader(UU)
                  },
                  arrayBuffer: async () => await Promise.resolve(AU.response)
                })
              } else QU(new Error(`HTTP ${AU.status} loading '${AU.requestURL}': ${AU.statusText}`))
          })), AU.open(zU, UU, XU.headers), AU.send(XU.body ?? null)
        }))
      }
      get requestURL() {
        return this._requestURL
      }
      get onprogress() {
        return this._xhr.onprogress
      }
      set onprogress(UU) {
        this._xhr.onprogress = UU
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
      set responseType(UU) {
        this._xhr.responseType = UU
      }
      get timeout() {
        return this._xhr.timeout
      }
      set timeout(UU) {
        this._xhr.timeout = UU
      }
      addEventListener(UU, XU, zU) {
        this._xhr.addEventListener(UU, XU, zU)
      }
      removeEventListener(UU, XU, zU) {
        this._xhr.removeEventListener(UU, XU, zU)
      }
      abort() {
        this._xhr.abort()
      }
      send(UU) {
        this._xhr.send(UU)
      }
      open(UU, XU, zU) {
        const {
          url: yU,
          headers: QU
        } = cU._CollectCustomizations(XU, zU);
        this._requestURL = cU._CleanUrl(yU), this._xhr.open(UU, this._requestURL, !0);
        for (const cU in QU) this._xhr.setRequestHeader(cU, QU[cU])
      }
      setRequestHeader(UU, XU) {
        this._xhr.setRequestHeader(UU, XU)
      }
      getResponseHeader(UU) {
        return this._xhr.getResponseHeader(UU)
      }
    }
    cU.CustomRequestHeaders = {}, cU.CustomRequestModifiers = new Array, cU.SkipRequestModificationForBabylonCDN = !0
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);